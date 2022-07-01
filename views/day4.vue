<template>
    <div>
        <!-- <zhenting></zhenting>
        <jisuan></jisuan>
        <filterya></filterya> -->
        <buycar></buycar>
        
    </div>
</template>

<script>
import filterya  from '../src/day4/过滤器.vue';
import jisuan from '../src/day4/计算属性.vue'
import zhenting from '../src/day4/侦听器.vue'
import buycar from '../src/day4/BuyCar.vue'
export default {
    name: 'Homework630Day4',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },
    components:{
        filterya,
        jisuan,
        zhenting,
        buycar,
    },
    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>