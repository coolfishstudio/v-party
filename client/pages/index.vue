<template lang="pug">
    .index
        mt-header(title="我是标题")
            router-link(to="/", slot="right")
                mt-button 主页
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
.mint-header {
    background-color: #25547e;
}
</style>
