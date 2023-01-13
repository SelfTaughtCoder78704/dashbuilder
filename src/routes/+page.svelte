<script>
  import DashboardBuilder from "../components/DashboardBuilder.svelte";
  import { data } from "../lib/data";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  let myData = data;
  /**
   * @typedef {Object} ChartsShowing
   * @property {boolean} pie
   * @property {boolean} bar
   * @property {boolean} donut
   * @property {boolean} line
   */

  const setNewData = (
    /** @type {Event & { currentTarget: EventTarget & HTMLFormElement; }} */ e
  ) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const dataInput = formData.get("data-input");
    if (typeof dataInput === "string") {
      myData = JSON.parse(dataInput);
    }

    console.log(myData);
  };

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
  <form class="data-input" on:submit={(e) => setNewData(e)}>
    <label for="data-input">Data Input</label>
    <textarea name="data-input" id="data-input" rows="10" cols="50">
      {JSON.stringify(data, null, 2)}
    </textarea>
    <button type="submit">Update</button>
  </form>
  <DashboardBuilder
    bind:showBarChart={chartsShowing.bar}
    bind:showPieChart={chartsShowing.pie}
    data={myData}
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

  .data-input {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: darkblue;
    color: white;
    padding: 10px;
  }

  textarea {
    width: 100%;
    background-color: rgb(22, 22, 22);
    color: rgb(0, 255, 55);
  }
</style>
