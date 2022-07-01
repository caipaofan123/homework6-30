<template>
    <div>
        <p>国内网站粉丝数量:{{fans | number}}</p>
        <p>国外网站粉丝数量:{{fans | number(1)}}</p>
        <hr>
        <p>时间:{{ time | timer}}</p>
        <p>时间:{{ time | timer(1)}}</p>
    </div>
</template>

<script>
import moment from "moment";
export default {
    name: 'Homework630过滤器作业',

    data() {
        return {
            fans:1876986,
            time:1636450540055
        };
    },
    filters:{
        number(val,a){
            if(a){
                return val/1000 + '千'
            }
            return val/10000 + '万'
        },
        timer(val,b){
            if(b){
                return moment(val).format('YYYY/MM/DD')
            }
            return moment(val).format('YYYY-MM-DD')
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