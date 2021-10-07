<template>
  <div id="app" class="dashboard">
    <ProductCountBarChart></ProductCountBarChart>
    <LeadCountBarChart></LeadCountBarChart>
   <LoanAmountStatusPie></LoanAmountStatusPie>
    <LoanAmountUserLineChart></LoanAmountUserLineChart>
    <LoanAvgSumBarChart></LoanAvgSumBarChart>
    <FundedCommissionBarChart></FundedCommissionBarChart>
  </div>
</template>

<script>
// import * as echarts from "echarts";
// import $ from "jquery";
import ProductCountBarChart from "./components/ProductCountBarChart.vue";

import LeadCountBarChart from "./components/LeadCountBarChart.vue";

import LoanAmountStatusPie from "./components/LoanAmountStatusPie.vue";

import LoanAmountUserLineChart from "./components/LoanAmountUserLineChart.vue";

import LoanAvgSumBarChart from "./components/LoanAvgSumBarChart.vue";

import FundedCommissionBarChart from "./components/FundedCommissionBarChart.vue";

export default {
  name: "App",
  components: {
    ProductCountBarChart,
    LeadCountBarChart,
    LoanAmountStatusPie,
    LoanAmountUserLineChart,
    LoanAvgSumBarChart,
    FundedCommissionBarChart,
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dashboard{
box-sizing:border-box;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-template-columns: 1fr 1fr 1fr;

}

.ProductCountContainer{
 
  width: 400px;
  height: 300px;
}

.LeadCountContainer{
  
  width: 400px;
  height: 300px;
}

.LoanAmountStatusContainer{
 
   width: 400px;
  height: 300px;
}

.LoanAmountUserContainer{
 
  width: 400px;
  height: 300px;
}

.LoanAvgSumContainer{

width: 400px;
  height: 300px;
}

.FundedCommissionContainer{
 
    width: 400px;
  height: 300px;
}

</style>
