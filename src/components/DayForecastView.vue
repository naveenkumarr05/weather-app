<template>
  <div class="main">
    <button class="btn">CURRENT</button>
    <button class="btn">7 DAY FORECAST</button>
  </div>
</template>

<script>
export default {
  name: "DayForecastView",
};
</script>

<style>
.main {
  margin-top: 1rem;
}
.btn {
  background-color: white;
  border: none;
  color: #525865;
  padding: 16px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition-duration: 0.4s;
  cursor: pointer;
}
.btn:hover {
  background-color: gray;
  color: black;
  border-bottom: 3px solid blue;
}
</style>