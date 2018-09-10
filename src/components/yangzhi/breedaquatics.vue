
<style scoped>
        .breeding-aqatics-cont{
            height: 100%;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
        }
        .breeding-top-item{
            width: 100%;
            height: 100vh;
            background-color: #800;
            display: flex;
            flex-direction: column;
        }
        .breeding-show-cont{
            height: 100%;
        }
</style>

<template>
    <div class="breeding-aqatics-cont w">
        <div class="breeding-top-item">
            <item-name></item-name>
            <div class="breeding-show-cont">
                <main-show></main-show>
            </div>
        </div>   
    </div>
</template>

<script>
    import ItemName from './itemname.vue'
    import MainShow from './mianshow.vue'
    
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

