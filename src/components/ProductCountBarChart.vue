<template>
    <div ref="chart" class="ProductCountContainer"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
mounted() {
    // 1) initialize the echarts instance
    var myChart = echarts.init(this.$refs.chart);
    let option = {
      title: {
        text: "Count of Product Type",
      },
      // legend: {},
      tooltip: {}, // tooltip default to show info on graph
      color:[
        '#ee6666'],
      xAxis: {
        data: [
          "Asset Finance",
          "Chattel Mortgage",
          "Construction Funding",
          "Line of Credit",
          "Overdraft Facility",
          "Secured Loan",
          "Term Loan",
        ],
        axisLabel: {
      rotate: 44
    }
      },
      yAxis: {type: "value",},
      series: [
        {
          name: "counts",
          type: "bar",
          data: [3, 3, 10, 3, 3, 4, 4],
        },
      
      ],
    };
    // Draw the chart
    myChart.setOption(option);
}}
</script>

<style>

.container {
  width: 400px;
  height: 300px;
}

</style>
