
<style scoped>
    .serch-cont{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
    }
    .left-cont, .right-cont{
        width: 20%;
        height: 100%;
        background-color: #fef;
    }
    .center-cont{
        width: 50%;
        /* background-color: #2ff; */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
        .hot-word-cont{
            width: 100%;
            display: flex;
            margin-top: 5px;
        }
        .hot-word{
            padding: 0 22px;
        }
</style>

<template>
    <div class="serch-cont">
        <div class="left-cont">
            
        </div>
        <div class="center-cont">
            <Input search enter-button placeholder="Enter something..." />
            <div class="hot-word-cont">
                <div class="hot-word">罗非鱼</div>
                <div class="hot-word">草鱼</div>
                <div class="hot-word">鲤鱼</div>
                <div class="hot-word">黄鳝</div>
                <div class="hot-word">梭子蟹</div>
                <div class="hot-word">鲑鱼</div>
                <div class="hot-word">泥鳅</div>
                <div class="hot-word">鲢鱼</div>
            </div>
        </div>
        <div class="right-cont">
            
        </div>

    </div>
</template>

<script>
    
    export default {
        components: {
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

