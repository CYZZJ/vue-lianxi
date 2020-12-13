<template>
  <div class="about">
    <h1>使用vue-extend 动态创建组件</h1>
    <button @click="showToast">打开弹窗</button>
    
  </div>
</template>
<script>

  export default{
    name:'About',
   
    data(){
      return{
       
      }
    },
    methods:{
      showToast(){
        this.$toast('弹窗')
      }
    }
  }
</script>
<style scoped>

</style>
