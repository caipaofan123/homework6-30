<template>
    <div>
        <span v-for="(item,index) in arr" :key="index"><input type="checkbox" name="num" :value="item" v-model="newarr">{{item}}</span>
        <p>你选中的值和为:{{sum}}</p>
        <p>{{newarr}}</p>
    </div>
</template>

<script>
import { subnetMatch } from 'ipaddr.js';

export default {
    name: 'Homework6305',

    data() {
        return {
            arr:[9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
            newarr:[]
        };
    },
    computed:{
        sum(){
            let result=this.newarr.reduce(function(sum,item){
                return sum + item
            },0)
            return result
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>