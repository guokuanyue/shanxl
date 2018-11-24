<template>
  <header class="header fixed">
    <div class="menu">
      <ul>
        <router-link v-for="item in menuList" :key="item.tid" tag="li" :to="{name:item.routeName}">
          {{item.title}}
        </router-link>
      </ul>
    </div>
    
  </header>
</template>


<script>
  export default {
    data() {
      return {
        menuList:[
          {title:'新闻',tid:1,routeName:'news'},
          {title:'活动',tid:2,routeName:'activies'},
          {title:'订单中心',tid:3,routeName:'order'},
          {title:'客户中心',tid:4,routeName:'customer'},
          {title:'图表中心',tid:5,routeName:'chat'},
          {title:'个人中心',tid:6,routeName:'personal'}
        ],
      }
    }
  }
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: #96B97D;
  border:1px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  &.fixed{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    border-bottom: 2px solid #d8d8d8;
  }
  .menu{
    width: 1200px;
  }
  .router-link-active{
    background-color: skyblue;
    color:#FFFFFF;
  }
  ul{
    margin: 0;
    padding: 0;
    li{
      float:left;
      list-style: none;
      width: 80px;
      height: 50px;
      text-align: center;
      line-height: 50px;
      background-color: #FFFFFF;
      border: 1px solid gray;
      cursor: pointer;
    }
  }
}
</style>
