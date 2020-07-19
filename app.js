/**
 * 页面入口主流程代码
 */

//页面加载完成后默认显示全部数据
import data from './data';
import { getData, displayTable } from './table';
import { allRegions, allProducts } from './checkbox';

import { clearHistogram, drawHistogram } from './histogram';
import { clearLineChart, drawLineChart, drawMultpleLines } from './line_chart';

import './style.css';
window.onload = function() {
    allRegions[3].click();
    allProducts[3].click();
    displayTable();
    drawHistogram(data[8]);
    drawMultpleLines(getData().newData);
};