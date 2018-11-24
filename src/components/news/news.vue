<template>
  <div class="news">
    
    <h3>一.拖拽</h3>
    <div class="drag">
      <ul>
        <draggable  class="dragArea"  v-model="cate" :options="{group:'cate'}" >
          <li v-for="item in cate" :key= item.id>{{item.name}}</li>
        </draggable>
      </ul>
    </div>

    <h3>二.数字跳动</h3>
    <span class="num1">
      <ICountUp :startVal="0" :endVal="number.one"/>
    </span>
    <span class="num2">
      <ICountUp :startVal="0" :endVal="number.two"/>
    </span>

    <h3>三.图片上传预览，裁剪</h3>

    <div>
      <input style="display: none" type="file" @change="pictureChange" accept="image/png, image/jpeg, image/gif, image/jpg" id="fileinput1" class="fileinput" />
      <label class="filelabel" for="fileinput1">选择图片</label>
      <img id="file_img" src="" alt="预览图片">
    </div>


    <h3>四.vueX</h3>
    <div>
      <h4>两种取值</h4>
      <div>$store.state.count  ：{{$store.state.count}}</div>
      <div>computed:mapState(["count"])  ：{{count}}</div>


      <h4>两种改值方法</h4>
      <h5>-----$store.commit</h5>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
      <h5>----mapMutations</h5>
      <button @click="add">+</button>
      <button @click="reduce">-</button>

      <h5>----mapActions异步改值addAction,reduceAction【】commit是同步操作，如果有异步的操作需要使用actions</h5>
      <h5>在acttions里面进行异步操作，然后commit，把值传mutation的方法里面</h5>
      <h5>mutation和commit是同步，actions和dispatch是异步</h5>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>

      <h5>vueX moudle模块</h5>
      <h5>{{$store.state.news.info}}</h5>

          
    </div>

    <new-children :fatherObj="fatherObj" />


  </div>
  
</template>



<script>
import draggable from 'vuedraggable';
import ICountUp from 'vue-countup-v2';
import {mapState,mapMutations, mapActions} from 'vuex';
import newChildren from './newChildren'


  export default {
    components:{
      draggable,
      ICountUp,
      newChildren
    },
    mounted(){
      
    },
    data() {
      return {
        cate:[
          {name:'水果',id:1},
          {name:'鸭梨',id:2},
          {name:'苹果',id:3},
          {name:'香蕉',id:4}
        ],
        number:{one:988888,two:9666},
        fatherObj:{
          name:'李四',
          age:32,
          address:'黑龙江'
        }
      }
    }, 
    computed:{...mapState(["count"])},
    methods:
      {
        ...mapMutations(['add','reduce']),
        ...mapActions(['addAction','reduceAction']),
        pictureChange(e){
          let file =  e.target.files[0];
          if(!!file){
            let reader = new FileReader();
            reader.readAsDataURL(file);            // 图片文件转换为base64
            reader.onload = function(){
              // 读取文件成功时显示图片
              document.getElementById("file_img").src = this.result;
            }
          }
        }
      },
      
      
      
    }
</script>


<style lang="less" scoped>
.news{
  width: 100%;
  min-height: 500px;
  overflow: hidden;
  .drag{
    width: 500px;
    height: 100px;
    ul:after {
      display:block;clear:both;content:"";
    }
    ul li{
      width: 80px;
      height: 80px;
      background-color: cadetblue;
      float:left;
      list-style: none;
      line-height: 80px;
      text-align: center;
      border-right: 1px solid #fff;
    }
  }
  .num1{
    width: 90px;
    height: 80px;
    display: inline-block;
    background-color:teal;
    border:1px solid greenyellow;
    text-align: center;
    line-height: 80px;
    color:aqua;
  }
  .num2{
    width: 90px;
    height: 80px;
    display: inline-block;
    border:1px solid greenyellow;
    text-align: center;
    line-height: 80px;
    color:chartreuse;
    background-color:tan;
  }
  .filelabel{
    border:1px solid gray;
    background-color:steelblue;
  }
}

</style>