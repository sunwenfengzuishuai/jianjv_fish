<template>
    <div class="left-item1" id="jinCKLI1">

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "left-item1-map",
        data(){
          return{

          }
        },
        mounted(){
          this.initMap()
        },
        methods:{
          initMap(){
            let myChart = echarts.init(document.getElementById('jinCKLI1'))
            let option = {
              tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                  type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              legend: {
                data:['进口', '出口'],
                left:'left',
                top:'3%'
              },
              grid: {
                left: '3%',
                right: '4%',
                bottom: '13%',
                containLabel: true
              },
              xAxis : [
                {
                  type : 'value'
                }
              ],
              yAxis : [
                {
                  type : 'category',
                  axisTick : {show: false},
                  data : ['2012','2013','2014','2015','2016']
                }
              ],
              series : [
                {
                  name:'进口',
                  type:'bar',
                  label: {
                    normal: {
                      show: true,
                      position: 'inside'
                    }
                  },
                  data:[241525, 265511, 286852, 268181, 255455]
                },
                {
                  name:'出口',
                  type:'bar',
                  stack: '总量',
                  label: {
                    normal: {
                      show: true,
                      position: 'inside'
                    }
                  },
                  data:[-211575, -212787, -205138, -286552, -274518]
                }
              ]
            };
            myChart.setOption(option);
          }
        }
    }
</script>

<style scoped>
  .left-item1{
    width: 100%;
    height: 90%;
    background-color: #fff;
  }
</style>
