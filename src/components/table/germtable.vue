
<style scoped>

</style>

<template>
    <div class="table-cont">
        <div class="tabletitle-cont">
            <table class="tabletitle" cellspacing="0" cellpadding="0">
                <tr>
                    <td> </td>
                    <td>品种</td>
                    <td>当期出塘价(元)</td>
                    <td>同比</td>
                    <td>上年同期出塘价(元)</td>
                  <td>当期出塘量(吨)	</td>
                  <td>同比</td>
                  <td>上年同期出塘量(吨)</td>
                </tr>
            </table>
        </div>
        <div class="tablecontent-cont scorllbar">
            <table class="tablecontent" cellspacing="0" cellpadding="0">
                <tr v-for="(data, index) in datas">
                    <!-- @click="trclick(report)" @dblclick="gotoillcont(report)" -->
                    <td>{{index+1}}</td>
                    <td>罗非鱼</td>
                    <td>5.44</td>
                    <td>4.94%</td>
                    <td>5.19</td>
                  <td>428.28</td>
                  <td>-95.97% </td>
                  <td>10635.27</td>
                </tr>
            </table>
            <div class="page-cont">
                <div class="totalcont">
                    共123条
                    <!-- {{prototalCount}} -->
                </div>
                <div class="pagebar">
                    <Page  show-total  simple />
                    <!-- :current="propageNo" :page-size="propageSize" :total="prototalCount" @on-change="propageChanged" -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        components: {

        },
        data(){
            return {
                datas: [1,2,2,2,2,2,2,2,2,2,4,3,3,3,3,33,],
            }
        },
        mounted(){      //async 异步请求

        },
        methods: {

        },
    }
</script>
