<template>
  <div class="personal">
    个人中心页面实现功能（1.全局注册promise询问弹窗2.全局组件3.mock数据4.滚动加载）
    <button @click="handleClick">注册组件按钮</button>
    <Dialog/>

    <!-- 滚动加载 -->
    <section>
      <div id="scroll-wrap" class="scroll-wrap">
        <div class="scroll-content">
          内容区域(滚动到底部触发加载)
        </div>
      </div>
    </section>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted(){
      let dom = document.getElementById('scroll-wrap');
      dom.addEventListener('scroll',this.listenScroll);
    },
    beforeDestroy () {//卸载监听
      let dom = document.getElementById('scroll-wrap');
      dom.removeEventListener('scroll',this.listenScroll);
    },
    methods:{
      handleClick(){
        this.$comfirm({
          title:'默认提示头',
          msg:'你好啊 大哥',
          isShow:true,
        })
        .then((res)=>{
          console.log('确定啦');
          this.$axios.get('http://123.com').then((res)=>{
            console.log(res,'rrrrr')
          }).catch(err=>{})
        }).catch(()=>{
          console.log('取消啦')
        })
      },
      listenScroll(){
        let dom = document.getElementById('scroll-wrap');
        let clientHeight = dom.clientHeight; //可视高度 500px 不含border
        let offsetHeight = dom.offsetHeight;  //可视高度 clientHeight和offsetHeight 差个横向滚动条
        let scrollHeight = dom.scrollHeight; //子元素实际高度 1000px
        let scrollTop = dom.scrollTop; // 滚动条高度 实时变化 在【0，scrollHeight -offsetHeight】之间
        if (scrollHeight -offsetHeight -scrollTop <= 50) {
          this.toBottom()
        }
      },
      toBottom(){
        console.log('加载数据');
       // alert('加载数据')
      }
    }
  }
</script>


<style lang="less" scoped>
.personal{
  width: 900px;
  height: 1000px;
}
.scroll-wrap{
  width: 500px;
  height: 500px;
  overflow: auto;
  .scroll-content{
    width: 480px;
    height: 1000px;
    background-color: slategray;
  }
}
  
</style>