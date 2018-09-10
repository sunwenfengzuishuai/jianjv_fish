
<style scoped>
        .index-cont{
                height: 100%;
                display: flex;
                justify-content: space-around;
        }
            .left-cont, .center-cont, .right-cont{
                margin-top: 2%;
                width: 20%;
                height: 80%;
                /* background-color: #fff; */
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .right-cont{
              width: 30%;
            }
            .left-cont{
                position: relative;
                background-color: #aff;
            }
            .left-item1{
                width: 100%;
                height: 220px;
                flex-shrink: 0;
                background-color: #fff;
            }
            .left-item2{
                width: 100%;
                height: 80%;
                margin-top: 14px;
                background-color: #f5f;


                overflow: hidden;
            }
            .center-cont{
                width: 60%;
            }
            .center-item1, .right-item1{
                width: 100%;
                height: 65%;
                background-color: #fff;
            }
            .center-item2, .right-item2{
                width: 100%;
                height: 32%;
                background-color: #fff;
            }
            .table-cont{
              height: 100%;
            }
</style>

<template>
    <div class="index-cont w">
        <!--<div class="left-cont">-->
            <!--<div class="left-item1" id="main01">-->
                <!--&lt;!&ndash; <serch-line-plus></serch-line-plus> &ndash;&gt;-->

            <!--</div>-->
            <!--<div class="left-item2">-->
                <!--&lt;!&ndash; <index-breeding></index-breeding> &ndash;&gt;-->
            <!--</div>-->
        <!--</div>-->
        <div class="center-cont">
            <div class="center-item1" id="main">
                <!-- <luobo-pic></luobo-pic> -->

            </div>
            <div class="center-item2">
              <!--<Table :columns="columns1" :data="data1"></Table>-->
              <germtable></germtable>
            </div>
        </div>
        <div class="right-cont">
            <div class="right-item1" id="main02">

            </div>
            <div class="right-item2" id="main01">

            </div>
        </div>
    </div>
</template>

<script>
    // import LuoboPic from './lunbo.vue'
    // import IndexSerch from './serch.vue'
    // import SerchLinePlus from './serchlineplus.vue'
    // import IndexBreeding from './indexbreeding.vue'
    import germtable from '../table/germtable'
    var echarts = require('echarts');
    export default {
        components: {
           // LuoboPic,
           // IndexSerch,
           // SerchLinePlus,
           // IndexBreeding,
          germtable
        },
        data(){
            return {
              columns1: [
                //品种	当期出塘价(元)	同比	上年同期出塘价(元)	当期出塘量(吨)	同比	上年同期出塘量(吨)
                {
                  title: '品种',
                  key: 'name'
                },
                {
                  title: '当期出塘价(元)',
                  key: 'age'
                },
                {
                  title: '同比',
                  key: 'address'
                },
                {
                  title: '上年同期出塘价(元)',
                  key: 'address01'
                },
                {
                  title: '当期出塘量(吨)',
                  key: 'address02'
                },
                {
                  title: '同比',
                  key: 'address03'
                },
                {
                  title: '上年同期出塘量(吨)',
                  key: 'address04'
                }
              ],
              data1: [
                {
                  name: '罗非鱼',
                  age: 5.19,
                  address: '8.62%',
                  date: '4.78',
                  address01:'4.78',
                  address02:'10635.27',
                  address03:'30.49%',
                  address04:'8150.24'
                }
              ]
            }
        },
        mounted(){      //async 异步请求
          var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
          var option = {
            // 标题
            title: {
              text: '2013--2018年批发市场销量图',
              left: 'center'
            },
            // 工具箱
            // toolbox: {
            //   show: true,
            //   feature: {
            //     saveAsImage: {
            //       show: true
            //     }
            //   }
            // },
            // 图例
            // legend: {
            //   data: ['销量']
            // },
            // x轴
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

// 使用刚指定的配置项和数据显示图表。
          myChart.setOption(option);

          //第二张表（折线）
          var myChart01 = echarts.init(document.getElementById('main01'));

// 指定图表的配置项和数据
          var option01 = {
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
          myChart01.setOption(option01);
          //第三张表（折线）
          var myChart02 = echarts.init(document.getElementById('main02'));

// 指定图表的配置项和数据
          var option02 = {
            title : {
              text: '电商平台销量',
              x:'center'
            },
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
          myChart02.setOption(option02);

        },
        methods: {

        },
    }
</script>

