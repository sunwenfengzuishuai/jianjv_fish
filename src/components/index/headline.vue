
<style scoped>
    .head-cont{
        width: 100%;
        min-width: 1200px;
        height: 60px;
        background-color: #252525;
        /* padding: 0 20px; */
        display: flex;
        justify-content: space-between;
    }
    .logo{
        background-color: #fff;
        margin-left: 20px;
    }
    .user-cont{
        width: 250px;
        height: 100%;
        line-height: 60px;
        /* background-color: #fff; */
        margin-right: 20px;
    }
    .user-cont Button{
        margin-left: 15px;
    }
</style>

<template>
    <div class="head-cont">
        <div class="logo">
            <img src="../../assets/logo.png" alt="" height="60px">
        </div>
        <div class="user-cont">
            <Button type="success">登陆</Button>
            <Button type="warning">注册</Button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

