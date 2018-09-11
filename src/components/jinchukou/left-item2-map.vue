<template>
    <div id="jinCKLI2" class="left-item2">

    </div>
</template>

<script>
    import echarts from 'echarts'
    export default {
        name: "left-item2-map",
        data(){
          return{

          }
        },
        methods:{
          initMap(){
            let myChart = echarts.init(document.getElementById('jinCKLI2'))
            //app.title = '正负条形图';


            let option = {
              xAxis: {
                type: 'category',
                data: ['2012', '2013', '2014', '2015', '2016']
              },
              yAxis: {
                type: 'value'
              },
              grid:{
                x:80,
                y:10,
                x2:45,
                y2:150,
                borderWidth:1
              },
              series: [{
                data: [179348, 181871, 170372, 153252, 146391],
                type: 'bar'
              }]
            };

            myChart.setOption(option);
          }
        },
        mounted(){
          this.initMap()
        }
    }
</script>

<style scoped>
.left-item2{

}
</style>
