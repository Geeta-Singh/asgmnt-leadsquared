<template>
  <div id="app">
    <div class="headerBg"></div>
    <Landing />
  </div>
</template>

<script>
import Landing from "./components/Landing.vue";

export default {
  name: "App",
  components: {
    Landing
  }
};
</script>

<style>
body{
  background: linear-gradient(136.05deg, #F5F7FA 1.07%, #F4F6F8 99.3%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Poppins', sans-serif;
}
.headerBg {
  background: linear-gradient(201.71deg, #6a79dd -80.88%, #5866c3 203.65%);
  height: 240px;
}
@media (min-width: 1400px) {
  .container-xxl,
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1200px !important;
  }
}
@media (min-width: 1200px) {
  .container-xl,
  .container-lg,
  .container-md,
  .container-sm,
  .container {
    max-width: 1140 px !important;
  }
}
</style>
