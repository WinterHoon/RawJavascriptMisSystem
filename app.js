/**
 * 页面入口主流程代码
 */

//页面加载完成后默认显示全部数据
import data from './data';
import displayTable from './table';
import { allRegions, allProducts } from './checkbox';

import drawHistogram from './histogram';
import drawLineChart from './line_chart';

import './style.css';
window.onload = function() {
    allRegions[3].click();
    allProducts[3].click();
    displayTable();
    drawHistogram(data[8]);
    drawLineChart(data[8]);
};