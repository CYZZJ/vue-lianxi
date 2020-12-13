<template>
  <div class="page">
      <div @click="toggleShow">
            {{treeData.title}}
            <span v-if="isOpenChild">[{{open ? "-":"+"}}]</span>
      </div>
     
      <!-- 递归组件 -->
      <ul v-if="isOpenChild" v-show="open">
        <item v-for = "data in treeData.childrens" :key="data.title" :treeData= "data"></item>
      </ul> 
  </div>
</template>

<script type="text/ecmascript-6">
// import { log } from 'util'
  export default {
    name: 'Item',//使用递归组件时必须写
    props:{
        treeData:{
            type:Object,
            required:true
        }
    },
    data() {
      return {
          open:false,
      }
    },
    components: {

    },
    mounted() {

    },
    methods: {
      toggleShow(){
        if(this.isOpenChild){

        
          this.open =!this.open
        }
       
      }
    },
    computed: {
      isOpenChild(){
        return this.treeData.childrens && this.treeData.childrens.length
      }
    },
    watch: {

    }
  }
</script>

<style scoped >

 
</style>
