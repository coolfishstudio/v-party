<template lang="pug">
    div#app
        router-view(transition="fade" transition-mode="out-in" keep-alive)
</template>

<script>
export default {
    name: 'app'
}
</script>
