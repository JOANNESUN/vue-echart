<template>
<div style="width:300px; height:auto">
      <div ref="chart" class="LoanAvgSumContainer"></div>
      </div>
</template>

<script>
import * as echarts from "echarts";
export default {

    mounted(){
        var myChart = echarts.init(this.$refs.chart);

    let option = {
      title: {
        text: "Loan Amount (sum/average) v. Lender",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        bottom: 0,
        padding: [0, 0, -2, 0],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "value",
        boundaryGap: [0, 0.01],
      },
      yAxis: {
        type: "category",
        data: [
          "AMFIN",
          "Banjo Loans",
          "Bizcap",
          "Business Fuel",
          "Capify Australia",
          "Finport Finance Pty Ltd",
          "Finstro",
          "Funda Business Finance",
          "Funding",
          "Fuzion Capital",
          "GetCapital",
          "Grow Finance Group Pty Ltd",
          "HomeSec",
          "Invoice Money",
          "Lend Asset Assist",
          "Lumi",
          "Max Funding",
          "Moneytech Finance Pty Ltd",
          "Prospa",
          "Zip Business",
        ],
      },
      series: [
        {
          name: "Sum of Loan Amount",
          type: "bar",
          data: [
            30888.35944, 13421.72694, 75780.07677, 83830.05422, 101386.597,
            150338.1728, 20755.4724, 17338.92752, 58422.98631, 22205.41015,
            8347.603732, 15672.19776, 3981.837355, 63467.82894, 26223.72659,
            11732.5419, 94821.58402, 14667.13419, 89711.57241, 120363.8687,
            25042.13529,
          ],
        },
        {
          name: "Sum of Average Loan Amount",
          type: "bar",
          data: [
            30888.35944, 13421.72694, 37890.03838, 83830.05422, 50693.2985,
            75169.08638, 20755.4724, 17338.92752, 29211.49316, 22205.41015,
            8347.603732, 7836.098879, 3981.837355, 63467.82894, 26223.72659,
            5866.270948, 47410.79201, 14667.13419, 89711.57241, 40121.28957,
            25042.13529,
          ],
        },
      ],
    };

    myChart.setOption(option);
    }

}
</script>

<style>
.LoanAvgSumContainer {
  width: 400px;
  height: 300px;
}
</style>