<template>
  <div>
    <ul>
      <li>{{obj.name}}</li>
      <li>{{obj.age}}</li>
      <li>{{obj.address}}</li>
   
    </ul>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        obj:{
          name:this.fatherObj.name||'张三',
          age:30,
          address:'北京'
        }
      }
    },
    props:['fatherObj']
  }
</script>

<style lang="" scoped>
  
</style>