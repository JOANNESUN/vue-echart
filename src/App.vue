<template>
  <div id="app" class="dashboard">
    <Sidebar></Sidebar>
    <div id="main-dashboard-content">
      <h1 id="welcome-title">Lend Dashboard</h1>
      <div id="grid-container">
        <ProductCountBarChart class="grid-item"></ProductCountBarChart>
        <LeadCountBarChart class="grid-item"></LeadCountBarChart>
        <LoanAmountStatusPie class="grid-item"></LoanAmountStatusPie>
        <LoanAmountUserLineChart class="grid-item"></LoanAmountUserLineChart>
        <LoanAvgSumBarChart class="grid-item"></LoanAvgSumBarChart>
        <FundedCommissionBarChart class="grid-item"></FundedCommissionBarChart>
      </div>
    </div>
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

import Sidebar from "./components/Sidebar.vue";


export default {
  name: "App",
  components: {
    ProductCountBarChart,
    LeadCountBarChart,
    LoanAmountStatusPie,
    LoanAmountUserLineChart,
    LoanAvgSumBarChart,
    FundedCommissionBarChart,
    Sidebar,
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
/* 
.dashboard {
  box-sizing: border-box;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
 */



* {
  font-family: "source-code-pro", "Menlo", "Monaco", "Consolas", "Courier New",
    "monospace";
}

#sidebar {
  background-color: rgb(242, 130, 18);
  width: 300px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-shadow: 3px 0px 5px 1px rgba(0, 0, 0, 0.1);
}

.title-container {
  display: flex;
  align-items: center;
  padding: 20px 25px;
}

.title-container h1 {
  font-size: 20px;
  font-weight: lighter;
  padding-left: 20px;
}

.links-container {
  padding: 0px 15px;
}
.links {
  display: flex;
  align-items: center;
}

.icon {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #5f5f5f;
}

.links span {
  padding: 0px 20px;
}

/* dashboard */

#main-dashboard-content {
  margin-left: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px 25px;
  transition: 400ms margin-left;
}


#welcome-title {
  font-size: 24px;
  font-weight: lighter;
  margin: 20px 5px;
}

#grid-container-top{
    display: grid;
  grid-template-columns:  100%;
}

#grid-container {
  display: grid;
  grid-template-columns:  30% 30% auto;
  grid-gap: 25px;
}

.grid-item {
  width:550px;
  height: auto;
  /* box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.1); */
  border-radius: 25px;
  box-sizing: border-box;
  padding: 25px;
  padding-top:6em;
}

@media (max-width: 1700px) {
  #grid-container {
    grid-template-columns: 100%;
  }
}

@media (max-width: 950px) {
  .title-container h1 {
    display: none;
  }
  .links span {
    display: none;
  }
  #sidebar {
    width: 75px;
  }
  #main-dashboard-content {
    margin-left: 75px;
  }
  .title-container {
    padding: 20px;
  }
}
</style>
