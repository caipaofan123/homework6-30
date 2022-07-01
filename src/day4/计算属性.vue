<template>
  <div>
    <jisuan2></jisuan2>
    购物车商品总价：
    <!-- 商品是否大于500 符合条件可使用400的优惠券 否则不可使用 -->
    {{ totalPrice }}
    <hr>
    {{all}}
    <hr>
    {{koa}}
    <hr>
    <input type="text" name="" id="" v-model.number="a">
    <input type="text" name="" id="" v-model.number="b">
    <input type="text" name="" id="" v-model="koa">
    <hr>
    <div>
      <span>姓:</span>
      <input type="text" v-model="firstName" />
      <br />
      <span>名:</span>
      <input type="text" v-model="secName" />
      <br />
      <span>全称:</span>
      <input type="text" v-model="fullName" />
    </div>
  </div>
</template>

<script>
import jisuan2 from './计算属性案例.vue'

export default {
  data () {
    return {
      total: 5,
      price: 98,
      coupon: 400,
      firstName: "",
      secName: "",
      a:999,
      b:1,
    }
  },
  components: {
    jisuan2,
  },
  computed: {
    totalPrice () { //计算属性都得return
      console.log('计算')
      return this.total * this.price >= 500 ? this.total * this.price - this.coupon : this.total * this.price
    },
    all(){
        return this.total * this.price*987
    },
    koa: {
        get(){ //根据依赖项得出计算属性   根据依赖项的值得出计算属性的值
            return this.a+this.b
        },
        set(val){  //set里面根据所设值val去改变依赖项数据从而改变计算属性     根据自己所取得值改get里的依赖项得值
           console.log(1);
           this.a=val*3/4
           this.b=val*2/4
            
        }
    },
    fullName: {
        get(){
            return this.firstName?this.firstName + '-' + this.secName:''
        },
        set(val){
            let arr=val.split('-');
            this.firstName = arr[0]||''
            this.secName = arr[1] || ''    
        }
    }

  }
}
</script>