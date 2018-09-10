
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
                width: 50%;
            }
            .center-item1, .right-item1{
                width: 100%;
                height: 65%;
                background-color: #fcf;
            }
            .center-item2, .right-item2{
                width: 100%;
                height: 32%;
                background-color: #fcf;
            }
</style>

<template>
    <div class="index-cont w">
        <div class="left-cont">
            <div class="left-item1">
                <!-- <serch-line-plus></serch-line-plus> -->
            </div>
            <div class="left-item2">
                <!-- <index-breeding></index-breeding> -->
            </div>
        </div>
        <div class="center-cont">
            <div class="center-item1">
                <!-- <luobo-pic></luobo-pic> -->
            </div>
            <div class="center-item2">
                
            </div>
        </div>
        <div class="right-cont">
            <div class="right-item1">
                
            </div>
            <div class="right-item2">
                
            </div>
        </div>      
    </div>
</template>

<script>
    // import LuoboPic from './lunbo.vue'
    // import IndexSerch from './serch.vue'
    // import SerchLinePlus from './serchlineplus.vue'
    // import IndexBreeding from './indexbreeding.vue'
    
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
            
        },
        methods: {

        },
    }
</script>

