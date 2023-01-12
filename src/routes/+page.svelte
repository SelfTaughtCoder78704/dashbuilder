<script>
  import DashboardBuilder from "../components/DashboardBuilder.svelte";

  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  /**
   * @typedef {Object} ChartsShowing
   * @property {boolean} pie
   * @property {boolean} bar
   * @property {boolean} donut
   * @property {boolean} line
   */

  let chartsShowing = {
    pie: false,
    bar: false,
    donut: false,
    line: false,
  };

  if (browser) {
    onMount(() => {
      const showBar = localStorage.getItem("showBarChart");
      const showPie = localStorage.getItem("showPieChart");

      if (showBar) {
        chartsShowing.bar = showBar === "true";
      }

      if (showPie) {
        chartsShowing.pie = showPie === "true";
      }
    });
  }
</script>

<main>
  <div class="data-top">
    <p>Pie Showing: {chartsShowing.pie}</p>
    <p>Bar Showing: {chartsShowing.bar}</p>
    <p>Donut Showing: {false}</p>
    <p>Line Showing: {false}</p>
  </div>
  <DashboardBuilder
    bind:showBarChart={chartsShowing.bar}
    bind:showPieChart={chartsShowing.pie}
  />
</main>

<style>
  .data-top {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: darkblue;
    color: white;
    padding: 10px;
  }
</style>
