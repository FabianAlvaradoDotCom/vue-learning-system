<template>
  <header>
    <div id="account-details">
      <img src="../assets/avatar.svg" alt=""><br>
      User name<br>
      admin
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scoped>
  header{
    width: 100%;
    height: 90px;
    z-index: 1;
    background: url(../assets/header_logo.svg) 35px 10px,linear-gradient(#0e0e0e, black) 0 0;
    background-repeat: no-repeat;
  }
  #account-details{
    float: right;
    margin: 15px 15px 0 0;
    text-align: center;
    font-size: 14px;
    color: rgb(158, 158, 158);
    background-repeat: no-repeat;
  }
</style>