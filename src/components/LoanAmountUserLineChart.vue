<template>
<div style="width:300px; height:auto">
   <div ref="chart" class="LoanAmountUserContainer"></div>
   </div>
</template>

<script>
import * as echarts from "echarts";
export default {
mounted(){
   var myChart = echarts.init(this.$refs.chart);

    let option = {
      title: {
        text: "Load Amount by User",
      },
      tooltip: {
        // trigger: "axis",
        formatter: "{b} {a}<br>${c}",

        // formatter(options){
        //   console.log(options);
        //   return 1
        // }
      },
      legend: {},
      color: ["#ffbe0b", "#ff006e", "#8338ec", "#3a86ff", "#80ffdb"],
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          rotate: 44,
        },
        data: [
          "Jan-20",
          "Feb-20",
          "Mar-20",
          "Apr-20",
          "May-20",
          "Jun-20",
          "Jul-20",
          "Aug-20",
          "Sep-20",
          "Oct-20",
          "Nov-20",
          "Dec-20",
          "Jan-21",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "John",
          type: "line",
          stack: "Total",
          data: [
            13422, 0, 0, 78522, 25042, 0, 130391, 183584, 5100, 66413, 0, 0, 0,
          ],
        },
        {
          name: "Sarah",
          type: "line",
          stack: "Total",
          data: [
            0, 6478, 0, 47793, 20755, 30888, 86483, 22205, 0, 0, 26224, 0, 8348,
          ],
        },
        {
          name: "Paul",
          type: "line",
          stack: "Total",
          data: [
            0, 523, 51288, 89712, 0, 20839, 0, 69302, 12172, 83830, 0, 8787, 0,
          ],
        },
        {
          name: "Total",
          type: "line",
          //  type: "bar",
          stack: "Total",
          data: [
            13422, 7001, 51288, 216027, 45798, 51728, 216874, 275092, 17271,
            150243, 26224, 8787, 8348,
          ],
        },
      ],
    };

    myChart.setOption(option);

}
}
</script>

<style>
/* .LoanAmountUserContainer {
  width: 400px;
  height: 300px;
} */

</style>
