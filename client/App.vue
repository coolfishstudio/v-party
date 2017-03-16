<template lang="pug">
    div#app
        router-view
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    min-height: 0;
}
html, body {
    height: 100%;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","\5FAE\8F6F\96C5\9ED1",Arial,sans-serif;
    font-size: 12px;
    -webkit-overflow-scrolling: touch;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
body {
    background-color: #eee;
    max-width: 420px;
    margin: 0 auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
#app {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #fff;
    width: 100%;
    height: 100%;
    font-size: 12px;
    line-height: 1.5;
    overflow: hidden;
}
</style>
