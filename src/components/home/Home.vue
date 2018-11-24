<template>
  <div>
    <div class="homeContainer">
      <Header></Header>
      <Body>
        <div slot="content">

          <!-- 路由动画使用了animate.css -->
          <transition enter-active-class="zoomIn" leave-active-class="fadeOutRightBig">
            <router-view class="animated"></router-view>
          </transition>

        </div>
      </Body>
    </div>
  </div>
</template>

<script>
import Header from '../header/Header';
import Body from '../body/Body';

  export default {
    components:{
      Header,
      Body
    },
    data() {
      return {
        
      }
    }
  }
</script>


<style lang="less" scoped>

</style>