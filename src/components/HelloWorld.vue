<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>价格：{{ price | currency }}</p>
    <p>带参数的过滤器。时间：{{ timer | formats("YYYY-MM-DD") }}</p>
    <table border="1" class="table" cellspacing="0">
      <tr v-for="item in orderList" :key="item.index">
        <td>{{ item.index }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.price }}</td>
        <td :class="item.status | setOrderStatus| setOrderStyle">{{ item.status | setOrderStatus }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
// import moment from 'moment'
import orderData from '../data/orderData' //商品数据
import orderFilter from '../filter/orderFilter' //过滤函数

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  // 过滤器
  filters:orderFilter,
  
  // filters:{
  //      // 每个过滤器都是一个函数,但是要返回一个值出去
  //   currency(value){
  //     if(!value) {
  //       return '0.00'
  //     }
  //     else{
  //       return `￥${value.toFixed(2)}元`
  //     }
  //   },
  //     // 过滤器2
  //   formats(value,formatter){
  //     return moment.unix(value).format(formatter);
  //   },
  // },
   
    
  
  data(){
    return{
      price:50,
      timer:'1605756279',
      orderList:orderData
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.table {
  width: 600px;
  margin: 0 auto;
}
// 待付款
.not-pay{
  color:red
}
// 待发货
.not-send{
  color:#42b983;
}
//待收货
.not-reveive{
  color:darkblue;
}
// 待评价
.not-comment{
  color:yellow
}
</style>
