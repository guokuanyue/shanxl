

<template>
  <transition name="fade">
    <div v-if="isShow" class="popup-wrap">
      <div class="popup-mask">
        <div class="popup-container">
          <header class="popup-header">提示:{{ title }} </header>
          <div class="popup-content"> {{ msg }} </div>
          <footer class="popup-footer">
            <div>
              <ul class="btn-box clearfix">
                <li @click="yesClick">确定</li> 
                <li @click="noClick">取消</li> 
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        isShow:false,
        promise:null
      }
    },
    methods:{
      confirm() {
        let _this = this;
        this.isShow = true;
        return new Promise(function (resolve, reject) {
          _this.promise = {resolve, reject};
        });
      },
      noClick() {
        this.isShow = false;
        this.promise && this.promise.reject();
      },
      yesClick() {
        this.isShow = false;
        this.promise && this.promise.resolve();
      },
    }
  }
</script>

<style lang="less" scoped>
.clearfix:after { content: ""; clear: both; display: block; }
.popup-wrap{
  position: fixed;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  .popup-mask{
    position: relative;
    width: 100%;
    height: 100%;
    background-color:#333;
    background:rgba(0, 0, 0, 0.4);
    z-index: 1000;

    .popup-container{
      z-index: 1001;
      height: 40%;
      width: 30%;
      background-color: #fff;
      position: absolute;
      top:40%;
      left: 30%;
      margin-top:-15%;
      margin-left:-15%;
     

      .popup-header{
        width: 100%;
        height: 30px;
        line-height: 30px;
        background-color: #18c7c7;
      }
      .popup-content{
        text-align: center;
        width: 100%;
        position: absolute;
        top:30px;
        bottom: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        
      }
      .popup-footer{
        height: 50px;
        width: 100%;
        background-color: #18c7c7;
        position: absolute;
        bottom:0;

        .btn-box{
          list-style: none;
          position: absolute;
          left:60%;
          li {
            float: left;
            margin-left:10px;
            border: 1px solid  #333;
            color: #333;
          }
        }

      }
      
    }
  }
}

</style>
