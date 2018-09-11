<template>
    <div class="right-item1" id="xiaoshouRT1">

    </div>
</template>

<script>
  import echarts from 'echarts'
    export default {
        name: "right-item1-map",
        data(){
          return{

          }
        },
        methods:{
          initMap(){
            //第二张表（折线）
            let myChart = echarts.init(document.getElementById('xiaoshouRT1'));

// 指定图表的配置项和数据
            let option = {

              tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                orient: 'vertical',
                left: 'left',
                //阿里巴巴1688 淘宝网 京东商城 天猫 当当网
                data: ['阿里巴巴1688','淘宝网','京东商城','天猫','当当网']
              },
              series : [
                {
                  name: '访问来源',
                  type: 'pie',
                  radius : '55%',
                  center: ['50%', '60%'],
                  data:[
                    {value:335, name:'阿里巴巴1688'},
                    {value:310, name:'淘宝网'},
                    {value:234, name:'京东商城'},
                    {value:135, name:'天猫'},
                    {value:1548, name:'当当网'}
                  ]
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
  .right-item1{
    width: 100%;
    height: 70%;
    background-color: #fff;
  }
</style>
