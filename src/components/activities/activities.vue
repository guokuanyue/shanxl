<template>
  <div class="activies">
    <el-button @click="clearlocalStorage" type="primary" icon="el-icon-search">清除localStorage</el-button>
    <div>已经引入elementUI</div>
    <div class="con">
      <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </div>
  </div>
</template>




<script>
  export default {
    data() {
      return {
         data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1h哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或啊哈哈哈'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1nihadiugasgdasgdaiadhaugsdyajgdhfjajsdf a哈哈ewrer哈'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],

        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    methods:{
      clearlocalStorage(){
        localStorage.clear();
      },
      handleNodeClick(data) {
        console.log(data);
      }
    }
  }
</script>

<style lang="" scoped>
.activies{
  width: 200px;
  height: 200px;
}

</style>