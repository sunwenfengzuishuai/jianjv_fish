
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

        <div class="center-cont">

            <div class="center-item1" >
              <div class="item-name-cont">
                <span>电商平台价格</span>
              </div>
              <centerItem1Map></centerItem1Map>
            </div>

            <div class="center-item2">
              <div class="item-name-cont">
                <span>电商平台销售量</span>
              </div>
              <germtable></germtable>
            </div>
        </div>
        <div class="right-cont">

            <div class="right-item1">
              <div class="item-name-cont">
                <span>电商平台价格</span>
              </div>
              <rigthItem1Map></rigthItem1Map>
            </div>

            <div class="right-item2" >
              <div class="item-name-cont">
                <span>2013--2018年批发市场销量图</span>
              </div>
              <rigthItem2Map></rigthItem2Map>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import germtable from '../table/germtable'
    import rigthItem2Map from './right-item2-map'
    import rigthItem1Map from './right-item1-map'
    import centerItem1Map from './center-item1-map'

    export default {
        components: {
          germtable,
          rigthItem2Map,
          rigthItem1Map,
          centerItem1Map
        },
        data(){
            return {

            }
        },
        mounted(){      //async 异步请求



        },
        methods: {

        },
    }
</script>

