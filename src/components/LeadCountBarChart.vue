<template>
<div style="width:300px; height:auto">
<div ref="chart" class="LeadCountContainer"></div>
</div>
</template>

<script>
import * as echarts from "echarts";
export default {
   
mounted(){
    var myChart = echarts.init(this.$refs.chart);

    let option = {
      title: {
        text: "LendScore by Count of Leads",
      },
     
      tooltip: {},
      xAxis: {
        type: "category",
        data: ["0-30", "31-40", "41-60", "61-80", "81-100"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          
          data: [115, 23, 47, 66, 57],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(180, 180, 180, 0.2)",
          },
        },
      ],
    };
    myChart.setOption(option);

}}
</script>

<style>
.LeadCountContainer {
  width: 400px;
  height: 300px;
}

</style>
