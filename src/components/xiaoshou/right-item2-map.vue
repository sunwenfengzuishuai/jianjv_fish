<template>
    <div id="xiaoshouRI2" class="right-item2">

    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "right-item2-map",
        data(){
          return{

          }
        },
        mounted(){
          this.initMap()

        },
        methods:{
          initMap(){
            let myChart = echarts.init(document.getElementById('xiaoshouRI2'))
            // 指定图表的配置项和数据
            var option = {
              // 标题
              // title: {
              //   text: '2013--2018年批发市场销量图',
              //   left: 'center'
              // },
              xAxis: {
                data: ["2013", "2014", "2015", "2016", "2017", "2018"]
              },
              yAxis: {},
              // 数据
              series: [{
                name: '销量',
                type: 'bar',
                data: [500, 200, 360, 100, 100, 240]
              }]
            };
            myChart.setOption(option);
          }
        }
    }
</script>

<style scoped>
  .right-item2{
    width: 100%;
    height: 120%;
    background-color: #fff;
  }
</style>
