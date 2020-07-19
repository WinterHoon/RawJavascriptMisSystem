
import { getData, displayTable } from './table';
import { clearLineChart, drawLineChart, drawMultpleLines } from './line_chart';
/*-----------checkbox相关操作------------*/

//获取地区、产品选择和表格显示区域
var allRegions = document.getElementsByClassName('region');
var allProducts = document.getElementsByClassName('product');
//获取代表全选的那个复选框，感觉直接指定第几个是个很垃圾的方法，有没有更好的？
var selectAllRegions = allRegions[3];
var selectAllProducts = allProducts[3];
selectAllRegions.onchange = function() {
    if (selectAllRegions.checked) {
        for (let region of allRegions) {
            region.checked = true;
        } 
    } else {
        for (let region of allRegions) {
            region.checked = false;
        }
    }
    displayTable();
};
selectAllProducts.onchange = function() {
    if (selectAllProducts.checked) {
        for (let product of allProducts) {
            product.checked = true;
        }
    } else {
        for (let product of allProducts) {
            product.checked = false;
        }
    }
    displayTable();
};
//为各个复选框绑定点击判断事件
bindChangeEvent(allRegions);
bindChangeEvent(allProducts);

//点击判断事件
function bindChangeEvent(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let item = arr[i];
        item.onchange = function() {
            if (!item.checked && noSelect(arr)) {
                item.checked = true;
            }
            if (item.checked && selectAll(arr)) {
                arr[arr.length - 1].checked = true;
            } else {
                arr[arr.length - 1].checked = false;
            }
            displayTable();
            drawMultpleLines(getData().newData);
        };
    }
}

//检查是否没有任一选择
function noSelect(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i].checked) {
            return false;
        }
    }
    return true;
}
//检查是否全选了
function selectAll(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (!arr[i].checked) {
            return false;
        }
    }
    return true;
}
// var tableWrapper = document.getElementById('table-wrapper');

export {
    allRegions,
    allProducts
}