<template>
  <div class="chat">
    图表页面
    <div id="charts"></div>
  </div>
</template>



<script>
  export default {
    data() {
      return {
        
      }
    },
    mounted(){
      this.initCharts()
    },
    methods:{
      initCharts(){
        var myChart = this.$echarts.init(document.getElementById('charts'));
        var option = {
          title: {
            text: 'ECharts 入门示例'
          },
          tooltip: {},
          legend: {
            data:['销量']
          },
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        };
        myChart.setOption(option);
      }
    }
  }
</script>

<style lang="less" scoped>
.chat{
  width: 1000px;
  height: 800px;

  #charts{
    width: 400px;
    height: 400px;
  }
}
</style>