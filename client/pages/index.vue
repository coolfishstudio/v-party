<template lang="pug">
    .index(v-bind:class="{'show-right-side': navbar.homepage.active}")
        mt-header.entrance-header(title="酷鱼实验室")
            mt-button(v-on:click.native.stop="triggerHomepage" slot="right")
                img(src="../assets/icon_more@2x.png")
        mt-tab-container.entrance-page(v-model="tabbar.active" v-on:click.native.stop="triggerHomepage('false')")
            mt-tab-container-item(v-for="item in tabbar.list" key="item.name" v-bind:id="item.name")
                p {{ item.title + 1 }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title }}p {{ item.title }}
                p {{ item.title }}
                p {{ item.title + 2}}

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
                img.entrance-right-side-user-avatar(src="../assets/avatar.png")
                .entrance-right-side-user-username 白衣信徒
                .entrance-right-side-user-badge  江湖小虾米
            .entrance-right-side-bar
                .entrance-right-side-bar-item
                    .entrance-right-side-bar-item-title 财富
                    .entrance-right-side-bar-item-count.wealth 9000
                .entrance-right-side-bar-item
                    .entrance-right-side-bar-item-title 排名
                    .entrance-right-side-bar-item-count.ranking 1024
            .entrance-right-side-menus
                .entrance-right-side-menu
                    img.entrance-right-side-menu-icon(src="../assets/right-side-menu-friends.png")
                    .entrance-right-side-menu-title 我的好友
                .entrance-right-side-menu
                    img.entrance-right-side-menu-icon(src="../assets/right-side-menu-message.png")
                    .entrance-right-side-menu-title 我的消息
                .entrance-right-side-menu
                    img.entrance-right-side-menu-icon(src="../assets/right-side-menu-feedbook.png")
                    .entrance-right-side-menu-title 意见反馈
                .entrance-right-side-menu
                    img.entrance-right-side-menu-icon(src="../assets/right-side-menu-about.png")
                    .entrance-right-side-menu-title 关于我们

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
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
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
        background-color: #2e3339;
    }
    .mint-tab-item-label {
        color: #7fa3c6;
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
    padding: 0 2rem;
    overflow-y: auto;
    .entrance-right-side-user {
        position: relative;
        text-align: center;
        margin-bottom: 2rem;
        .entrance-right-side-user-avatar {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            border: 3px solid #7f8891;
            margin-top: 6rem;
        }
        .entrance-right-side-user-username {
            font-size: 1.6rem;
            font-weight: 300;
            margin-top: .8rem;
            color: #fff;
        }
        .entrance-right-side-user-badge {
            background-color: #57a8ed;
            color: #fff;
            padding: .2rem .8rem;
            line-height: 1.5;
            border-radius: 1rem;
            display: inline-block;
            margin-top: .4rem;
            transform: scale(.8);
        }
    }
    .entrance-right-side-bar {
        border-top: 1px solid #7fa3c6;
        padding: 1rem 0;
        overflow: hidden;
        text-align: center;
        color: #687d92;
        .entrance-right-side-bar-item {
            float: left;
            width: 50%;
            &:first-child {
                border-right: 1px solid #7fa3c6;
                margin-left: -1px;
            }
            .entrance-right-side-bar-item-count {
                font-size: 2.2rem;
                &.wealth {
                    color: #e49b43;
                }
                &.ranking {
                    color: #5793cc;
                }
            }
        }
    }
    .entrance-right-side-menus {
        border-top: 1px solid #7fa3c6;
        padding: 2rem 0;
        color: #687d92;
        overflow: hidden;
        .entrance-right-side-menu {
            float: left;
            width: 50%;
            text-align: center;
            padding: 1rem;
            img {
                width: 50%;
            }
        }
    }
}
.show-right-side {
    -webkit-transform: translate3d(-80%,0,0);
    transform: translate3d(-80%,0,0);
}
</style>
