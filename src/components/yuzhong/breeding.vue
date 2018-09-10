
<style scoped>
        .breeding-cont{
            height: 100%;
            margin: 0 auto;
            background-color: #c3f;
            display: flex;
            flex-direction: column;
        }
        .breeding-top-item{
            width: 100%;
            height: 100vh;
            background-color: #8ff;
            display: flex;
            flex-direction: column;
        }
        .breeding-bt-item{
            width: 100%;
            height: 50vh;
        }
        .breeding-show-cont{
            height: 100%;
        }

</style>

<template>
    <div class="breeding-cont w">
        <div class="breeding-top-item">
            <item-name></item-name>
            <div class="breeding-show-cont">
                <main-show></main-show>
            </div>
        </div>
        <div class="breeding-bt-item">
            
        </div>
    </div>
</template>

<script>
    import ItemName from './itemname.vue'
    import MainShow from './mainshow.vue'
    
    export default {
        components: {
           ItemName,
           MainShow,
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

