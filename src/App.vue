<template>
  <div id="app">
    <header-component/>
    <navigation-component/>
    <content-component/>
    <footer-component/>
  </div>
</template>

<script>

export default {
 
}
</script>

<style>
*{
  box-sizing: border-box;
  font-family: 'Jura', sans-serif;
}
  html, body, #app{
    width: 100%;
    height: 100%;
    margin: 0;
  }
  body{
    background-image: linear-gradient(black, rgb(45, 45, 45), black);
    background-position: right bottom;
    background-repeat: no-repeat;
    user-select: none;
  }
</style>
