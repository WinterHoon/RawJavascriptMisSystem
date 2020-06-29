/*----------------表格展示相关操作----------------*/

function getData() {
    var regions = [];
    var products = [];
    var newData = new Set();
    for (let i = 0; i < allRegions.length - 1; i++) {
        if (allRegions[i].checked === true) {
            regions.push(allRegions[i].value);
        }
    }
    for (let i = 0; i < allProducts.length - 1; i++) {
        if (allProducts[i].checked === true) {
            products.push(allProducts[i].value);
        }
    }
    //利用集合获取交集
    let set1 = new Set();
    let set2 = new Set();
    for (let item of sourceData) {
        for (let product of products) {
            if (item.product === product) {
                set2.add(item);
            }
        }
        for (let region of regions) {
            if (item.region === region ) {
                set1.add(item);
            }
        }


    }
    newData = [...set1].filter(item => set2.has(item));
    return newData;
}

//显示表格的方法
function displayTable() {
    //先清除已经显示的表格
    if (tableWrapper.children){
        for (let child of tableWrapper.children) {
            child.remove();
        }
    } 
    var data = getData();
    var table = document.createElement('table');
    //制作表头
    var thRow = document.createElement('tr');
    var months = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    for(let i=0;i<months.length;i++) {
        let th = document.createElement('th');
        th.textContent = months[i];
        thRow.appendChild(th);
    }
    table.appendChild(thRow);

    //复制数据
    for (let i=0;i<data.length;i++) {
        let tr = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        td1.textContent = data[i].product;
        td2.textContent = data[i].region;
        tr.appendChild(td1);
        tr.appendChild(td2);
        for(let j=0;j<data[i]['sale'].length;j++){
            let td = document.createElement('td');
            td.textContent = data[i]['sale'][j];
            tr.appendChild(td);

        
        }
        table.appendChild(tr);
    }
    
    tableWrapper.appendChild(table);

}