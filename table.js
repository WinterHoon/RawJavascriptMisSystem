
import data from './data';
import {allRegions, allProducts} from './checkbox';


/*----------------表格展示相关操作----------------*/

//获取选择的数据 return data
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
    for (let item of data) {
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
    // newData = [...set1].filter(item => set2.has(item));
    //console.log(newData);
    return {
        newData: [...set1].filter(item => set2.has(item)),
        productsNum: products.length,
        regionsNum: regions.length
    };
    // return newData;
    
}

//显示表格的方法
function displayTable() {
    var tableWrapper = document.getElementById('table-wrapper');
    //先清除已经显示的表格
    if (tableWrapper.children){
        for (let child of tableWrapper.children) {
            child.remove();
        }
    } 
    let threeData = getData();
    console.log(threeData);
    var data = threeData.newData;
    
    var table = document.createElement('table');
    //制作表头
    var thRow = document.createElement('tr');
    var tableHeads = ['商品','地区','一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
    for(let i=0;i<tableHeads.length;i++) {
        let th = document.createElement('th');
        th.textContent = tableHeads[i];
        thRow.appendChild(th);
    }
    table.appendChild(thRow);

    //复制数据做表格渲染
    for (let i=0;i<data.length;i++) {
            let tr = document.createElement('tr');
            let td1 = document.createElement('td');
            let td2 = document.createElement('td');

            //只有商品选多个地区选一个的时候需要把地区放在第一列
            if (threeData.productsNum > 1 && threeData.regionsNum === 1) {
                td1.textContent = data[i].region;
                td2.textContent = data[i].product;
                //虽然每行都生成了一个“地区”单元格，但只有指定行添加进了表格
                if (i % threeData.productsNum === 0) {
                    td1.rowSpan = threeData.productsNum;
                    console.log(td1);
                    tr.appendChild(td1);    
                }
            //其余情况都是商品放在第一列
            } else {
                td1.textContent = data[i].product;
                td2.textContent = data[i].region;
                //虽然每行都生成了一个“商品”单元格，但只有指定行添加进了表格
                if (i % threeData.regionsNum === 0) {
                    td1.rowSpan = threeData.regionsNum;
                    console.log(td1);
                    tr.appendChild(td1);
                }   
            }

            tr.appendChild(td2);
            for(let j=0;j<data[i]['sale'].length;j++) {
                let td = document.createElement('td');
                td.textContent = data[i]['sale'][j];
                tr.appendChild(td);
            }
            table.appendChild(tr);

    }
    
    tableWrapper.appendChild(table);

}

export default displayTable;