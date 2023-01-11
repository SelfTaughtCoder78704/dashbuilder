<script>
  import DashboardBuilder from "../components/DashboardBuilder.svelte";
  const chartsShowing = {
    pie: false,
    bar: false,
    donut: false,
    line: false,
  };

  $: sendShowingToServer = (function send() {
    console.log("Sending to server", chartsShowing);
  })();
</script>

<main>
  <div class="data-top">
    <p>Pie Showing: {chartsShowing.pie}</p>
    <p>Bar Showing: {chartsShowing.bar}</p>
    <p>Donut Showing: {chartsShowing.donut}</p>
    <p>Line Showing: {chartsShowing.line}</p>
  </div>
  <DashboardBuilder
    bind:showPieChart={chartsShowing.pie}
    bind:showBarChart={chartsShowing.bar}
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
