<template>
  <div class="body">
    <div class="content">
        <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
.body{
  margin-top: 100px;
  width: 100%;
  min-height:  600px;
  margin-bottom: 50px;
  display:flex;
  justify-content: center;
  .content{
    background-color: #FFFFFF;
    width: 1200px;
    min-height: 400px;
  }
}
  
</style>