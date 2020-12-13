<template>
  <div class="page" v-if="show">
     <div>{{text}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'Toast',
   
    data() {
    //   return {
    //       text:'弹窗内容',
    //       show:true
    //   }
    },
    components: {

    },
    mounted() {

    },
    methods: {

    },
    computed: {

    },
    watch: {

    }
  }
</script>

<style scoped >
.page{
    position: fixed;
    top: calc(50% - 20px);
    left: calc(50% - 50px);
    width: 80px;
    height: 30px;
    background-color: rgba(0, 0, 0, .8);
    color: #fff;
    line-height: 30px;
    border-radius: 5px;
    text-align: center;
   
}
 
</style>
