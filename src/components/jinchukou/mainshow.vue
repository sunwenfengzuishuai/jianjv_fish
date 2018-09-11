
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

</style>

<template>
    <div class="index-cont w">
        <div class="left-cont">
            <div class="left-item1" >
              <leftItem1></leftItem1>
            </div>
            <div class="left-item2" >
              <leftItem2></leftItem2>
            </div>
        </div>

        <div class="right-cont">

            <div class="right-item2" >
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

        },
        methods: {
           
        },
    }
</script>

