<style>
    head, body, div{
        padding: 0;
        margin: 0;
    }
    .w{
         width: 1200px;
    }
    body{
        background-color: #e2e2e2;
    }
    .container{
            height: auto;
            margin: 0 auto;
            background-color: #ccf;
    }
    .container-item{
        height: auto;
    }
    /* iview属性 */
    .ivu-anchor-link{
        height: 40px;
        width: 50px;
        padding: 0;
        background-color: #666;
        margin-top: 1px;
        line-height: 40px;
        text-align: center;
        border-radius: 3px;
    }
    .ivu-anchor-link a{
        color: #fff;
    }
    .ivu-anchor-link-active{
        background-color: #2d8cf0;
    }
    .ivu-anchor-link-active>.ivu-anchor-link-title {
        color: #fff;
    }
    .ivu-btn{
        width: 100px;
        height: 36px;
        font-size: 14px;
    }
    /* table公共样式 start */
    .table-cont{
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    .tabletitle-cont{
      width: 100%;
      height: auto;
      padding: 10px 0;


      background-color: #888;
    }
    .tablecontent-cont{
      width: 100%;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
    }
    table{
      height: 100%;
      width: 100%;
    }
    table tr{
      display: flex;
    }
    table td{
      font-size: 0.8em;
      color: #000;
      text-align: center;
      padding: 0;
      margin: 0;
      width: 20%;
    }
    table tr td:nth-child(1){
      width: 10%;
    }
    .tabletitle tr{
      height: 100%;
    }
    .tabletitle tr td{
      font-size: 0.8em;
      color: #fff;
    }
    .tablecontent tr:nth-child(odd){
      background-color: #eee;
    }
    .tablecontent tr:hover{
      background-color: #ddd;
      cursor: pointer;
    }
    .tablecontent tr td:nth-child(1){
      color: #2abbef;
    }
    /* table公共样式 end*/

    /* 分页start */
    .page-cont{
      height: 27px;
      width: 90%;
      margin: 0 auto;
      margin-top: 1%;
      background-color: #fff;
      box-sizing: border-box;
      /* border: solid 1px #58e7e7; */
      border-radius: 5px;
      display: flex;
    }
    .totalcont{
      line-height: 27px;
      margin-left: 4%;
    }
    .pagebar{
      width: 60%;
      margin-left: 4%;
    }
    /* 分页end */

    /*滚动条整体样式*/
    /*高宽分别对应横竖滚动条的尺寸*/
    .scorllbar::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    /*滚动条里面小方块*/
    .scorllbar::-webkit-scrollbar-thumb {
      border-radius: 5px;
      -webkit-box-shadow: inset 0 0 5px rgba(200,200,200,0.6);
      background: rgba(200,200,200,0.5);
    }
    /*滚动条里面轨道*/
    .scorllbar::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
      border-radius: 0;
      background: rgba(255,255,255,0.1);
    }
    /*.tablecontent-cont{*/
      /*width: 100%;*/
      /*height: 90%;*/
      /*overflow-x: hidden;*/
      /*overflow-y: auto;*/
    /*}*/
    .tabletitle-cont{
      width: 100%;
      height: auto;
      padding: 0px 0;
      background-color: #888;
    }
</style>

<style scoped>
    .navigation{

    }
    .bar-line{
        position: fixed;
        height: 100vh;
        width: 10px;
        background-color: #666;
        /* z-index: 15; */
    }
    .navigation-bar{
        position: fixed;
        top: 40%;
        left: -2px;
    }
    #index-container{
        height: 100vh;
    }
    #breeding-cont{
        height: auto;
        background-color: #6ff;
    }
    #breed-aquatics-cont{
        height: 100vh;

    }
    #sell-cont{
        height: 100vh;
        background-color: #ff6;
    }
    #imp-exp-cont{
        height: 100vh;
        background-color: #66f;
    }
</style>

<template>
    <div class="app">
        <div class="navigation">
            <div class="bar-line">

            </div>
            <div class="navigation-bar">
                <Anchor>
                <AnchorLink href="#index-container" title="首页" />
                <AnchorLink href="#breeding-cont" title="育种" />
                <AnchorLink href="#breed-aquatics-cont" title="养殖" />
                <AnchorLink href="#sell-cont" title="销售" />
                <AnchorLink href="#imp-exp-cont" title="进出口" />
            </Anchor>
            </div>
        </div>

        <div id="index-container">
            <head-line></head-line>
            <index></index>
        </div>
        <div class="container w">
            <div class="container-item">
                <div id="breeding-cont">
                    <Breeing></Breeing>
                </div>
            </div>
            <div class="container-item">
                <div id="breed-aquatics-cont">
                    <breed-aquatics></breed-aquatics>
                </div>
            </div>
            <div class="container-item">
                <div id="sell-cont">
                    <Sell></Sell>
                </div>
            </div>
            <div class="container-item">
                <div id="imp-exp-cont">
                    <imp-exp></imp-exp>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    import HeadLine from './components/index/headline.vue'
    import Index from './components/index/index.vue'
    import Breeing from './components/yuzhong/breeding.vue'
    import BreedAquatics from './components/yangzhi/breedaquatics.vue'
    import Sell from './components/xiaoshou/sell.vue'
    import ImpExp from './components/jinchukou/impexp.vue'

    export default {
        components: {
           HeadLine,
           Index,
           Breeing,
           BreedAquatics,
           Sell,
           ImpExp
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

