
<style scoped>
        .index-cont{
                height: 100%;
                display: flex;
                justify-content: space-around;
        }
            .left-cont, .center-cont, .right-cont{
                margin-top: 2%;
                width: 45%;
                height: 80%;
                /* background-color: #fff; */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .left-cont{
                position: relative;
                background-color: #aff;
            }
            .left-item1{
                width: 100%;
                height: 100%;
                flex-shrink: 0;
                background-color: #fff;
            }
            .left-item2{
                width: 100%;
                height: 80%;
                margin-top: 14px;
                background-color: #fff;


                overflow: hidden;
            }
            .center-cont{
                width: 50%;
            }
            .center-item1, .right-item1{
                width: 100%;
                height: 100%;
                background-color: #fcf;
            }
            .center-item2, .right-item2{
                width: 100%;
                height: 100%;
                background-color: #fff;
            }

</style>

<template>
    <div class="index-cont w">
        <div class="left-cont">
            <div class="left-item1" id="main03">
                <!-- <serch-line-plus></serch-line-plus> -->
            </div>
            <!--<div class="left-item2">-->
                <!--&lt;!&ndash; <index-breeding></index-breeding> &ndash;&gt;-->
            <!--</div>-->
        </div>
        <!--<div class="center-cont">-->
            <!--<div class="center-item1">-->
                <!--&lt;!&ndash; <luobo-pic></luobo-pic> &ndash;&gt;-->
            <!--</div>-->
            <!--<div class="center-item2">-->
                <!---->
            <!--</div>-->
        <!--</div>-->
        <div class="right-cont">
            <!--<div class="right-item1">-->

            <!--</div>-->
            <div class="right-item2" id="main04">

            </div>
        </div>
    </div>
</template>

<script>
    // import LuoboPic from './lunbo.vue'
    // import IndexSerch from './serch.vue'
    // import SerchLinePlus from './serchlineplus.vue'
    // import IndexBreeding from './indexbreeding.vue'
    var echarts = require('echarts');
    export default {
        components: {
           // LuoboPic,
           // IndexSerch,
           // SerchLinePlus,
           // IndexBreeding,
        },
        data(){
            return {

            }
        },
        mounted(){      //async 异步请求
           //进口
          let myChart01 = echarts.init(document.getElementById('main03'))
          let myChart02 = echarts.init(document.getElementById('main04'))
          //app.title = '正负条形图';

          let option01 = {
            title : {
              text: '全球冻罗非鱼进出口市场',
              x:'center'
            },
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
              bottom: '3%',
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
          let option02 = {
            title : {
              text: '中国冻罗非鱼片出口总量',
              x:'center'
            },
            xAxis: {
              type: 'category',
              data: ['2012', '2013', '2014', '2015', '2016']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [179348, 181871, 170372, 153252, 146391],
              type: 'bar'
            }]
          };
          myChart01.setOption(option01);
          myChart02.setOption(option02);
        },
        methods: {

        },
    }
</script>

