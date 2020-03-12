<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  
}
</script>

<style scoped>
  #content{
    width: calc(100% - 210px);
    height: calc(100% - 146px);
    float: right;
    margin: 10px 10px 0 0;
    padding: 10px;
    overflow-x: hidden;
    overflow-y: auto;
    color: white;
    background-color: rgba(0, 0, 0, 0.15);
  }
</style>