/**
 * 页面入口主流程代码
 */

//页面加载完成后默认显示全部数据
window.onload = function() {
    allRegions[3].click();
    allProducts[3].click();
    displayTable();
    drawHistogram(sourceData[8]);
    drawLineChart(sourceData[8]);
};