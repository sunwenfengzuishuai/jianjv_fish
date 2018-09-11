<template>
    <div id="xiaoshouCI1" class="center-item1">

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "center-item1-map",
        data(){
          return{

          }
        },
        methods:{
          initMap(){
            //第二张表（折线图）
            let myChart = echarts.init(document.getElementById('xiaoshouCI1'));

// 指定图表的配置项和数据
            let option = {
              title: {
                text: '电商平台价格'
              },

              legend: {
                data: ['销量']
              },
              xAxis: {
                data: ["2018-4", "2018-6", "2018-8"]
              },
              yAxis: {
              },
              series: [
                {
                  name: '产量',
                  type: 'line',
                  data: [6,5.4,7.2]
                }
              ]
            };

// 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          }
        },
        mounted(){
          this.initMap()
        }
    }
</script>

<style scoped>
  .center-item1{
    width: 100%;
    height: 100%;
    background-color: #fff;
  }
</style>
