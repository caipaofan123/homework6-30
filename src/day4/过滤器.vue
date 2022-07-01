<template>
    <div>
        {{msg | toUp | reverse('$') | toDown}}
        <hr>
        {{str | reverse('$')}}
        <hr>
        {{oo | toDown}}


    </div>
</template>

<script>
export default {
    name: 'Homework630过滤器',

    data() {
        return {
            msg: 'adadadsfeff',
            oo:'DDDDDDDDDDD',
            str:'你真让人头大'
        };
    },
    filters: {
        toUp(val){
            return val.toUpperCase();
        }
    },
    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style  scoped>
    div {
        font-size:88px;
        color:gold;
    }
</style>