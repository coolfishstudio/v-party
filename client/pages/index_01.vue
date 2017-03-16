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
                img(slot="icon", src="../assets/icon_tabbar_fun@2x.png")
                span 玩游戏
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_duble@2x.png")
                span 交朋友
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_billboard@2x.png")
                span 排行榜
            mt-tab-item
                img(slot="icon", src="../assets/icon_find@2x.png")
                span 发现
            mt-tab-item
                img(slot="icon", src="../assets/icon_tabbar_person@2x.png")
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
    background-color: #28557c;
    .entrance-swipe {
        height: 10rem;
        .mint-swipe-items-wrap {
            height: 6.75rem;
        }
        img {
            width: 100%;
        }
    }
    .entrance-list {
        padding: 0 2rem;
        .entrance {
            position: relative;
            margin-bottom: 1.5rem;
            height: 6rem;
            color: #fff;
            border-radius: 8px;
            border-bottom: 2px solid #333;
            border-right: 2px solid #333;
            overflow: hidden;
            .text {
                position: absolute;
                left: 14rem;
                top: .75rem;
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
    background-color: #3f485e;
    .mint-header-button {
        .mint-button-text {
            img {
                width: 24px;
            }
        }
    }
}
.entrance-tabber {
    .mint-tab-item.is-selected {
        background-color: #2f3b46;
    }
    .mint-tab-item-label {
        color: #fff;
    }
}

</style>
