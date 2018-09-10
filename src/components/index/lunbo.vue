
<style scoped>
    div{
        height: 100%;
    }
    .lunbo-cont{
        height: 100%;
        background-color: #fff;
    }
</style>

<template>
    <div class="lunbo-cont">
        <Carousel autoplay v-model="value1" loop>
            <CarouselItem>
                <div class="demo-carousel">1</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">2</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">3</div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">4</div>
            </CarouselItem>
        </Carousel>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                value1: 0
            }
        }
    }
</script>

