<template>
  <div id="app">
    <!-- <homeworkVue></homeworkVue> -->
    <day4></day4>
  </div>
</template>

<script>
import homeworkVue from '../views/homework.vue'
import day4 from '../views/day4.vue'
export default {
  components: {
    homeworkVue,
    day4,
  }
}
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
</style>
