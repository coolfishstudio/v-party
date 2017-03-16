<template>
    <div class="page">
        <list title="我是标题" text="我是内容"></list>
    </div>
</template>
<script>
import { List } from '../components'
export default {
    components: {
        List
    }
}
</script>
<style lang="less">
.page {
    height: 100%;
    background-color: #eee;
}
</style>
