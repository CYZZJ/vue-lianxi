<template>
  <div class="home">
   
    <HelloWorld msg="vue 过滤器filters 的使用" />
    <hr>

    <m-tree :treeData= "dataList"></m-tree>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import MTree from "@/components/Mtree.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    MTree
  },
  data(){
    return{
      dataList:{
      title:"web全栈",
      childrens:[
        {
          title:"一级标题1",
          childrens:[
            {
              title:'二级标题1',
              childrens:[
                 {title:"三级标题1"}
              ]
            },
            {
              title:'二级标题2',
              childrens:[
                 {title:"三级标题2"}
              ]
            },
            {
              title:'二级标题3',
              childrens:[
                 {title:"三级标题3"}
              ]
            },
          ]
        },
        {
          title:"一级标题2",
          childrens:[
            {
              title:'二级标题1',
              childrens:[
                 {title:"三级标题1"}
              ]
            },
            {
              title:'二级标题2',
              childrens:[
                 {title:"三级标题2"}
              ]
            },
            {
              title:'二级标题3',
              childrens:[
                 {title:"三级标题3"}
              ]
            },
          ]
        },
        {
          title:"一级标题3",
          childrens:[
            {
              title:'二级标题1',
              childrens:[
                 {title:"三级标题1"}
              ]
            },
            {
              title:'二级标题2',
              childrens:[
                 {title:"三级标题2"}
              ]
            },
            {
              title:'二级标题3',
              childrens:[
                 {title:"三级标题3"}
              ]
            },
          ]
        },
      ]
    }
    }
   
  },
};
</script>
