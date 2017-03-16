<template lang="pug">
    .index
        mt-header.entrance-header(title="酷鱼实验室" fixed)
            router-link(to="/", slot="right")
                mt-button
                    img(src="../assets/icon_more@2x.png")
        .entrance-page
            .entrance-swipe
                mt-swipe(:auto="4000")
                    mt-swipe-item
                        img(src="../assets/swipe_01.png")
                    mt-swipe-item
                        img(src="../assets/swipe_01.png")
                    mt-swipe-item
                        img(src="../assets/swipe_01.png")
            .entrance-list
                .entrance.draw
                    img.image(src="../assets/homeimage_quickgame_dw.png")
                    .text
                        .game-title 你画我猜
                        .game-desc 开始游戏
                .entrance.undercover
                    img.image(src="../assets/homeimage_quickgame_uc.png")
                    .text
                        .game-title 谁是卧底
                        .game-desc 开始游戏
                .entrance.mafia
                    img.image(src="../assets/homeimage_quickgame_mf.png")
                    .text
                        .game-title 杀人游戏
                        .game-desc 开始游戏
                .entrance.werewolf
                    img.image(src="../assets/homeimage_quickgame_wf.png")
                    .text
                        .game-title 狼人杀
                        .game-desc 开始游戏
        mt-tabbar.entrance-tabber
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_fun_g@2x.png")
                span 玩游戏
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_duble_g@2x.png")
                span 交朋友
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_billboard_g@2x.png")
                span 排行榜
            mt-tab-item
                img(slot="icon", src="../assets/icon_find_g@2x.png")
                span 发现
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_person_g@2x.png")
                span 个人

</template>
<script>
    export default {
        data () {
            return {
            }
        }
    }
</script>
<style lang="less">
.index {
    height: 100%;
}
.entrance-page {
    overflow: auto;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 55px;
    background-color: #fff;
    .entrance-swipe {
        height: 10rem;
        .mint-swipe-items-wrap {
            height: 6.75rem;
        }
        img {
            width: 100%;
        }
        .mint-swipe-indicator{
            &.is-active {
                background-color: #eb1b5b;
                opacity: 1;
            }
        }
    }
    .entrance-list {
        .entrance {
            position: relative;
            width: 100%;
            margin-bottom: .5rem;
            height: 8rem;
            color: #fff;
            overflow: hidden;
            .text {
                position: absolute;
                right: 4rem;
                top: 1.75rem;
                .game-title {
                    font-size: 1.8rem;
                }
                .game-desc {
                    font-size: 1.2rem;
                    text-align: right;
                }
            }
            .image {
                height: 100%;
                margin-left: -1px;
            }
            &.draw {
                background-color: #fec62a;
            }
            &.undercover {
                background-color: #3f485e;
            }
            &.mafia {
                background-color: #ff7f5c;
            }
            &.werewolf {
                background-color: #52b8ab;
            }
        }
    }
}
.entrance-header {
    background-color: #2e3339;
    .mint-header-button {
        .mint-button-text {
            img {
                width: 24px;
            }
        }
    }
}
.entrance-tabber {
    border-top: 1px solid #edeeee;
    .mint-tab-item.is-selected {
        background-color: #f8f9fb;
    }
    .mint-tab-item-label {
        color: #8e94a7;
    }
}

</style>
