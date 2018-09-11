
<style scoped>
        .index-cont{
                height: 100%;
                display: flex;
                justify-content: space-around;
        }
            .left-cont, .right-cont{
                margin-top: 2%;
                width: 45%;
                height: 80%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
            .left-cont{
                position: relative;
                background-color: #fff;
            }
            .left-item1{
                width: 100%;
                height: 50%;
                flex-shrink: 0;
                background-color: #fff;
            }
            .left-item2{
                width: 100%;
                height: 100%;
                margin-top: 14px;
                background-color: #fff;
                overflow: hidden;
            }


            .right-item2{
                width: 100%;
                height: 100%;
                background-color: #fff;
            }
            .item-name-cont-01{
              margin-top: 55px;
            }
            .item-name-cont-02{
              margin-top: -35px;
            }

</style>

<template>
    <div class="index-cont w">
        <div class="left-cont">
            <div class="left-item1" >
              <div class="item-name-cont">
                <span>全球罗非鱼进出口市场</span>
              </div>
              <leftItem1></leftItem1>
            </div>
            <div class="left-item2 item-name-cont-02" >
              <div class="item-name-cont item-name-cont-01">
                <span>中国罗非鱼片出口总量</span>
              </div>
              <leftItem2></leftItem2>
            </div>
        </div>

        <div class="right-cont">

            <div class="right-item2" >
              <div class="item-name-cont">
                <span>全球罗非鱼进出口示意图</span>
              </div>
              <rightItem2></rightItem2>
            </div>
        </div>
    </div>
</template>

<script>
    import echarts from 'echarts'
    import world from '../../assets/js/world'
    import leftItem1 from './left-item1-map'
    import leftItem2 from './left-item2-map'
    import rightItem2 from './right-item2-map'
    export default {
        components: {
          leftItem1,
          leftItem2,
          rightItem2
        },
        data(){
            return {

            }
        },
        mounted(){      //async 异步请求
           //进口
          console.log(window.history);
        },
        methods: {

        },
    }
</script>

