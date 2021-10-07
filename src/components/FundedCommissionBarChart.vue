<template>
    <div ref="chart" class="FundedCommissionContainer"></div>
</template>

<script>
import * as echarts from "echarts";
export default {

    mounted(){
         var myChart = echarts.init(this.$refs.chart);

    let option = {
      title: {
        text: "Funded and Commission (brokerage) amounts",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true },
        },
      },
      legend: {
        data: ["Comission", "Funded Amount"],
        bottom: 0,
      },
      xAxis: [
        {
          type: "category",
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

          // axisPointer: {
          //   type: "shadow",
          // },
        },
      ],
      yAxis: [
        {
          type: "value",
        },
      ],
      series: [
        {
          name: "Comission",
          type: "bar",
          data: [
            1400, 700, 5000, 7300, 4512, 8022, 2480, 16000, 500, 0, 0, 600, 0,
          ],
        },
        {
          name: "Funded Amount",
          type: "bar",
          data: [
            14000, 7000, 51288, 78522, 45798, 48888, 23992, 159104, 5062, 0, 0,
            6000, 0,
          ],
        },
        // {
        //   name: "Temperature",
        //   type: "line",
        //   yAxisIndex: 1,
        //   data: [
        //     2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2,
        //   ],
        // },
      ],
    };
    // Draw the chart
      myChart.setOption(option);
    }

}
</script>

<style>

</style>