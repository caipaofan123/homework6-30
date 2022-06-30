<template>
    <div>
        <ul>
            <li v-for="(item,index) in arr" :key="index">{{item}}<button @click="del(index)">删除</button></li>
        </ul>
        <button @click="add">生成</button>
    </div>
</template>

<script>
export default {
    name: 'Homework6302',

    data() {
        return {
            arr:[1,8,9]
        };
    },

    mounted() {
        
    },

    methods: {
        add(){
            this.arr.push(Math.floor(Math.random()*10))
        },
        del(index){
            this.arr.splice(index,1)
        }
    },
};
</script>

<style scoped>

</style>