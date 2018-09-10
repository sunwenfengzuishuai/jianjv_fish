
<style scoped>
    .serch-line-cont{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 10px;
    }
    .serch-line{
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        padding-left: 20px;
    }
        .line-plus{
            position: absolute;
            height: 100%;
            width: 0px;
            background-color: #fff;
            top: 0;
            left: 241px;
            z-index: 50;
            overflow: hidden;
            font-size: 14px;
        }
        .serch-line:hover{
            background-color: #eee;
        }
        .serch-line:hover .line-plus{
            width: 640px;
            transition: width 0.5s;
        }
            .plus-cont{
                margin: 20px;
            }
            .plus-name{
                width: 120px;
                height: 30px;
                line-height: 30px;
                padding-left: 12px;
                font-size: 14px;
                background-color: #666;
                color: #fff;
            }
            .plus-detail{
                display: flex;
            }
                .detail-name{
                    width: 120px;
                    font-weight: 600;
                    color: #888;
                    padding-left: 12px;
                    flex-shrink: 0;

                }
                .detail-name span{
                    display: inline-block;
                    width: 100%;
                    height: 20px;
                    line-height: 20px;
                    border-right: 2px solid #888;
                }
                .detail-items{
                    display: flex;
                    flex-wrap: wrap;
                }
                .item{
                    
                }
                .item span{
                    padding: 0 15px;
                    width: 100%;
                    height: 20px;
                    border-right: 1px solid #ccc;
                }
</style>

<template>
    <div class="serch-line-cont">
        <div class="serch-line">
            · 淡水鱼类
            <div class="line-plus">
                <div class="plus-cont">
                    <div class="plus-name">
                        淡水鱼类
                    </div>
                    <hr/>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>大宗淡水鱼 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>青鱼</span></div>
                            <div class="item"><span>草鱼</span></div>
                            <div class="item"><span>鲢鱼</span></div>
                            <div class="item"><span>鳙鱼</span></div>
                            <div class="item"><span>鲤鱼</span></div>
                            <div class="item"><span>鲫鱼</span></div>
                            <div class="item"><span>鳊鱼</span></div>
                        </div>
                    </div>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>淡水名优鱼类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>鲑鱼</span></div>
                            <div class="item"><span>淡水白鲳</span></div>
                            <div class="item"><span>鲶鱼</span></div>
                            <div class="item"><span>鮰鱼</span></div>
                            <div class="item"><span>黄颡鱼</span></div>
                            <div class="item"><span>鳟鱼</span></div>
                            <div class="item"><span>黄鳝</span></div>
                            <div class="item"><span>鳜鱼</span></div>
                            <div class="item"><span>淡水鲈鱼</span></div>
                            <div class="item"><span>乌鳢</span></div>
                            <div class="item"><span>罗非鱼</span></div>
                            <div class="item"><span>长吻鮠</span></div>
                            <div class="item"><span>中华倒刺鲃</span></div>
                            <div class="item"><span>丁鱥</span></div>
                            <div class="item"><span>翘嘴红鲌</span></div>
                            <div class="item"><span>团头鲂</span></div>
                            <div class="item"><span>吸石鱼</span></div>
                            <div class="item"><span>洛氏鱥</span></div>
                            <div class="item"><span>重唇鱼</span></div>
                            <div class="item"><span>梭鱼</span></div>
                            <div class="item"><span>泥鳅</span></div>
                            <div class="item"><span>狗鱼</span></div>
                            <div class="item"><span>鲟鱼</span></div>
                            <div class="item"><span>苏氏园腹芒</span></div>
                            <div class="item"><span>短盖巨鮨鲤</span></div>
                            <div class="item"><span>鲮鱼</span></div>
                            <div class="item"><span>沙塘鳢</span></div>
                            <div class="item"><span>鳗鲡</span></div>
                            <div class="item"><span>细鳞斜颌鲴</span></div>
                            <div class="item"><span>大鳞鲃</span></div>
                            <div class="item"><span>圆腹雅罗鱼</span></div>   
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="serch-line">
            · 海水鱼类
            <div class="line-plus">
                <div class="plus-cont">
                    <div class="plus-name">
                        海水鱼类
                    </div>
                    <hr/>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>海水鱼类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>海水鲈鱼</span></div>
                            <div class="item"><span>大菱鲆</span></div>
                            <div class="item"><span>大黄鱼</span></div>
                            <div class="item"><span>半滑舌鳎</span></div>
                            <div class="item"><span>石斑鱼</span></div>
                            <div class="item"><span>军曹鱼</span></div>
                            <div class="item"><span>河魨</span></div>
                            <div class="item"><span>卵形鲳鲹</span></div>
                            <div class="item"><span>美国红鱼</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="serch-line">
            · 虾类 / 蟹类
            <div class="line-plus">
                <div class="plus-cont">
                    <div class="plus-name">
                        虾类 / 蟹类
                    </div>
                    <hr/>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>虾类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>罗氏沼虾</span></div>
                            <div class="item"><span>青虾</span></div>
                            <div class="item"><span>克氏原螯虾</span></div>
                            <div class="item"><span>南美白对虾(淡水)</span></div>
                            <div class="item"><span>南美白对虾(海水)</span></div>
                            <div class="item"><span>中国对虾</span></div>
                            <div class="item"><span>日本对虾</span></div>
                            <div class="item"><span>脊尾白虾</span></div>
                        </div>
                    </div>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>蟹类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>河蟹</span></div>
                            <div class="item"><span>梭子蟹</span></div>
                            <div class="item"><span>青蟹</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="serch-line">
            · 贝类 / 藻类
            <div class="line-plus">
                <div class="plus-cont">
                    <div class="plus-name">
                        贝类 / 藻类
                    </div>
                    <hr/>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>贝类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>牡蛎</span></div>
                            <div class="item"><span>皱纹盘鲍</span></div>
                            <div class="item"><span>海湾扇贝</span></div>
                            <div class="item"><span>虾夷扇贝</span></div>
                            <div class="item"><span>缢蛏</span></div>
                            <div class="item"><span>泥蚶</span></div>
                            <div class="item"><span>杂色蛤</span></div>
                            <div class="item"><span>东风螺</span></div>
                            <div class="item"><span>文蛤</span></div>
                            <div class="item"><span>四角蛤蜊</span></div>
                            <div class="item"><span>毛蚶</span></div>
                            <div class="item"><span>青蛤</span></div>
                            <div class="item"><span>魁蚶</span></div>
                        </div>
                    </div>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>藻类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>铜藻</span></div>
                            <div class="item"><span>大叶藻</span></div>
                            <div class="item"><span>裙带菜</span></div>
                            <div class="item"><span>海带</span></div>
                            <div class="item"><span>条斑紫菜</span></div>
                            <div class="item"><span>坛紫菜</span></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="serch-line">
            · 其他类
            <div class="line-plus">
                <div class="plus-cont">
                    <div class="plus-name">
                        其他类
                    </div>
                    <hr/>
                    <div class="plus-detail">
                        <div class="detail-name">
                            <span>其他类 ></span>
                        </div>
                        <div class="detail-items">
                            <div class="item"><span>鳗草</span></div>
                            <div class="item"><span>中华鳖</span></div>
                            <div class="item"><span>海参</span></div>
                            <div class="item"><span>龟</span></div>
                            <div class="item"><span>海蜇</span></div>
                            <div class="item"><span>方格星虫</span></div>                                           
                        </div>
                    </div>
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
                
            }
        },
        mounted(){      //async 异步请求
            
        },
        methods: {

        },
    }
</script>

