<template>
<div style="width:300px; height:auto">
 <div ref="pieChart" class="LoanAmountStatusContainer"></div>
 </div>
</template>

<script>
import * as echarts from "echarts";
export default {


mounted(){
   var pieChart = echarts.init(this.$refs.pieChart);
    let pieChartoption = {
      title: {
        text: "Loan Amount by Status",
        //

        left: "center",
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        left: "left",
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: "50%",
          data: [
            { value: 20, name: "Pending" },
            { value: 7, name: "Attempting" },
            { value: 20, name: "Rejected" },
            { value: 30, name: "In Progress" },
            { value: 23, name: "Settled" },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
      ],
    };

    pieChart.setOption(pieChartoption);
  },
}

</script>

<style>
.LoanAmountStatusContainer {
  width: 400px;
  height: 300px;
}

</style>
