<template>
  <div>
    <ul>
      <li v-for="item in myArr" :key="item">{{ item }}</li>
    </ul>
    <button @click="btn">走一走</button>
  </div>
</template>

<script>
export default {
  name: 'Homework6301',

  data() {
    return {
        myArr: ["帅哥", "美女", "程序猿"],
    };
  },

  mounted() {},

  methods: {
    btn(){
        this.myArr.push(this.myArr[0])
        this.myArr.shift(this.myArr[0])
    }
  },
};
</script>

<style lang="scss" scoped></style>
