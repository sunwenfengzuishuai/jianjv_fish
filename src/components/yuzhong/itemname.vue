
<style scoped>
        .name-cont{
            height: 60px;
            width: 240px;
            margin: 0 auto;
            line-height: 60px;

            display: flex;
            flex-shrink: 0;
            text-align: center;
        }
        .name-line{
            width: 70px;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .line{
            width: 70px;
            height: 1px;
            border: 1px solid #000;
        }
        .name-cont span{
            display: inline-block;
            width: 100px;
            font-size: 20px;
            font-weight: 600;
        }
</style>

<template>
    <div class="name-cont">
        <div class="name-line">
            <div class="line"></div>
        </div>
        <span>育 &nbsp&nbsp种</span>
        <div class="name-line">
            <div class="line"></div>
        </div> 
    </div>
</template>

<script>
    // import LuoboPic from './lunbo.vue'
    
    export default {
        components: {
           // LuoboPic,
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

