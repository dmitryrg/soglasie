<template lang="pug">
  div#app
    main.container(role="main")
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
