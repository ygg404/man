<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    metaInfo: {
      // if no subcomponents specify a metaInfo.title, this title will be used
      title: '前端开发素材下载',
      // all titles will be injected into this template
      titleTemplate: '%s'
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  min-width: 100%;
}
</style>
