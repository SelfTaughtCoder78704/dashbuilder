<script>
  import { browser } from "$app/environment";

  import BarChart from "../components/BarChart.svelte";
  import PieChart from "../components/PieChart.svelte";
  export let data = {};
  export let showBarChart = false;
  export let showPieChart = false;

  /**
   * @param {MouseEvent} e
   * @param {string} chart
   */
  const handleClick = (e, chart) => {
    e.preventDefault();
    console.log(chart);
    console.log("Clicked");
    if (chart === "bar") {
      showBarChart = !showBarChart;
      if (browser)
        localStorage.setItem("showBarChart", showBarChart.toString());
    } else if (chart === "pie") {
      showPieChart = !showPieChart;
      if (browser)
        localStorage.setItem("showPieChart", showPieChart.toString());
    }
  };
</script>

<div class="dash">
  <div class="button-grid">
    <button on:click={(e) => handleClick(e, "bar")}>
      {showBarChart ? "Remove Bar" : "Visualize As Bar"} Chart
    </button>

    <button on:click={(e) => handleClick(e, "pie")}>
      {showPieChart ? "Remove Pie" : "Visualize As Pie"} Chart
    </button>
  </div>

  <div class="view-grid">
    {#if showBarChart}
      <div class="chart" style="width: 300px;">
        BAR CHART
        <BarChart {data} />
      </div>
    {/if}

    {#if showPieChart}
      <div class="chart" style="width: 300px;">
        PIE CHART
        <PieChart {data} />
      </div>
    {/if}
  </div>
</div>

<style>
  .dash {
    display: grid;
    grid-template-columns: 10% 90%;
    gap: 1rem;
    height: 100vh;
  }
  .view-grid {
    display: flex;
    flex-direction: row;
    padding-top: 40px;
    grid-gap: 1rem;
    width: 100%;
    height: 100%;
  }
  .button-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    background-color: darkblue;
  }

  button {
    background: #f2f2f2;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    cursor: pointer;
    width: fit-content;
    font-size: 1rem;
    height: fit-content;
  }

  .chart {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: fit-content;
    padding: 1rem;
    resize: both;
    overflow: auto;
  }
</style>
