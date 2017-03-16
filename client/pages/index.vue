<template lang="pug">
    .index(v-bind:class="{'show-right-side': navbar.homepage.active}")
        mt-header.entrance-header(title="酷鱼实验室" fixed)
            mt-button(v-on:click.native.stop="triggerHomepage" slot="right")
                img(src="../assets/icon_more@2x.png")
        mt-tab-container.entrance-page(v-model="tabbar.active" v-on:click.native.stop="triggerHomepage('false')")
            mt-tab-container-item(v-for="item in tabbar.list" key="item.name" v-bind:id="item.name")
                span {{ item.title }}

        mt-tabbar.entrance-tabber
            mt-tab-item(v-on:click.native="triggerTab('tab-play')")
                img(slot="icon", src="../assets/icon_tabbar_fun_g@2x.png")
                span 玩游戏
            mt-tab-item(v-on:click.native="triggerTab('tab-duble')")
                img(slot="icon", src="../assets/icon_tabbar_duble_g@2x.png")
                span 交朋友
            mt-tab-item(v-on:click.native="triggerTab('tab-billboard')")
                img(slot="icon", src="../assets/icon_tabbar_billboard_g@2x.png")
                span 排行榜
            mt-tab-item(v-on:click.native="triggerTab('tab-find')")
                img(slot="icon", src="../assets/icon_find_g@2x.png")
                span 发现
            mt-tab-item(v-on:click.native="triggerTab('tab-person')")
                img(slot="icon", src="../assets/icon_tabbar_person_g@2x.png")
                span 个人

        .entrance-right-side
            .entrance-right-side-user
                span 用户
            .entrance-right-side-menus
                span 菜单
</template>
<script>
    export default {
        data () {
            return {
                tabbar: {
                    list: [ {
                        name : 'tab-play',
                        title: '玩游戏',
                        icon : 'icon_tabbar_fun_g@2x'
                    }, {
                        name : 'tab-duble',
                        title: '交朋友',
                        icon : 'icon_tabbar_duble_g@2x'
                    }, {
                        name : 'tab-billboard',
                        title: '排行榜',
                        icon : 'icon_tabbar_billboard_g@2x'
                    }, {
                        name : 'tab-find',
                        title: '发现',
                        icon : 'icon_find_g@2x'
                    }, {
                        name : 'tab-person',
                        title: '个人',
                        icon : 'icon_tabbar_person_g@2x'
                    } ],
                    active: 'tab-play'
                },
                navbar: {
                    homepage: {
                        active: false
                    }
                }
            }
        },
        methods: {
            triggerTab (name) {
                this.tabbar.active = name
            },
            // 处理显示右侧菜单
            triggerHomepage (isShow) {
                if (isShow === 'true') {
                    if (this.navbar.homepage.active === true) {
                        return false
                    }
                    this.navbar.homepage.active = true
                } else if (isShow === 'false') {
                    if (this.navbar.homepage.active === false) {
                        return false
                    }
                    this.navbar.homepage.active = false
                } else {
                    this.navbar.homepage.active = !this.navbar.homepage.active
                }

            }
        }
    }
</script>
<style lang="less">
.index {
    height: 100%;
    transition: transform .3s ease-in-out,-webkit-transform .3s ease-in-out;
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
.entrance-right-side {
    position: absolute;
    top: 0;
    right: 0;
    background-color: #2e3339;
    width: 80%;
    height: 100%;
    z-index: 1;
    color: #fff;
    margin-right: -80%;
}
.show-right-side {
    -webkit-transform: translate3d(-80%,0,0);
    transform: translate3d(-80%,0,0);
}
</style>
