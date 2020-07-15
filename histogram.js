function drawHistogram(data) {

    var canvas = document.getElementById("histogram");
    if (canvas && canvas.getContext) {
        var ctx = canvas.getContext('2d');
    }
    // chart margin
    var cMargin = 30;
    // chart left and top padding
    var cPadding = 60;
    // chart width
    var cWidth = canvas.width - 2 * cMargin - cPadding;
    // chart height
    var cHeight = canvas.height - 2 * cMargin - cPadding;
    var originX = cMargin + cPadding;
    var originY = cMargin + cHeight;
    var months = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    var bMargin = 15;
    var bWidth = cWidth / months.length - bMargin;
    drawLineLabelMarkers();
    drawBars(data.sale);

    function drawLineLabelMarkers() {
        // 画两条坐标轴
        drawLine(originX,originY,originX + cWidth,originY);
        drawLine(originX,originY,originX,cMargin);
        // 画坐标轴上的刻度
        drawMarkers();
    }

    function drawLine(x1,y1,x2,y2) {
        ctx.beginPath();
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
    }

    function drawMarkers() {
        
        // 获取数据中的最大值以便来决定y轴的刻度最大值
        var maxValue = Math.max.apply(null,data.sale);
        
        // y轴总共十个刻度
        var yMarkersNum = 10;
        // 刻度之间的间隔
        var interval = Math.ceil(maxValue/yMarkersNum);
        // 写上刻度
        ctx.textAlign = "right";
        ctx.strokeStyle = "rgb(200,200,200)";
        for (let i = 0; i < yMarkersNum; i++) {
            let markerVal = i * interval;
            let xMarker = originX - 5;
            
            let yMarker = cHeight * (1 - markerVal/maxValue) + cMargin;
            ctx.fillText(markerVal,xMarker,yMarker,cPadding);
            // 每个刻度处画条参考线
            if (i > 0) {
                drawLine(originX, yMarker, originX + cWidth, yMarker);
            }
        }

        // 画x轴刻度标签
        ctx.textAlign = "center";
        for (let i = 0; i < months.length; i++) {
            let markerVal = months[i];
            let xMarker = originX + cWidth * (i/months.length) + bMargin + bWidth/2;
            let yMarker = originY + 15;
            ctx.fillText(markerVal,xMarker,yMarker);
        }

        // 绘制y轴标题
        ctx.save();
        ctx.rotate(-Math.PI/2);
        ctx.font = "16px sans-serif";
        ctx.fillText("销 量（单位：台）",-(cHeight)/2 + 20,cPadding - 10);

        // 绘制x轴标题
        ctx.restore();
        ctx.font = "16px sans-serif";
        ctx.fillText("月份",originX + cWidth/2,originY + cPadding/2 + 10 );
        
    }

    // 绘制柱状图的柱子
    function drawBars(sales) {

        for (let i = 0; i < sales.length; i++) { 
            let x = originX + bMargin + i * (bWidth + bMargin);
            let height = sales[i]/Math.max.apply(null,sales) * cHeight - 1;//减一避免覆盖x轴
            let y =  originY - height - 1;
            let width = bWidth;
            
            ctx.fillStyle = "#60acfc";
            ctx.fillRect(x,y,width,height);
        }
        
    }
}