<template>
  <div id="app">
    <h1>附加练习1</h1>
    <D1/>

    <hr>
    <h1>附加练习2</h1>
    <D2/>
    
    <hr>
    <h1>附加练习3</h1>
    <D3/>

    <hr>
    <h1>附加练习4</h1>
    <D4/>

    <hr>
    <h1>附加练习5</h1>
    <D5/>

    <hr>
    <h1>移动端-导航切换效果</h1>
    <NavVue/>

    <hr>
    <h1>学生信息管理</h1>
    <students/>

    <hr>
    <h1>过滤器作业</h1>
    <guolvqi/>
  </div>
</template>

<script>
import D1 from '../src/components/附加练习1.vue'
import D2 from '../src/components/附加练习2.vue'
import D3 from '../src/components/附加练习3.vue'
import D4 from '../src/components/附加练习4.vue'
import D5 from '../src/components/附加练习5.vue'
import NavVue from '../src/components/Nav.vue'
import students from '../src/components/学生信息管理.vue'
import guolvqi from '../src/components/过滤器作业.vue'

export default {
  components: {
    D1,
    D2,
    D3,
    D4,
    D5,
    NavVue,
    students,
    guolvqi,
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
