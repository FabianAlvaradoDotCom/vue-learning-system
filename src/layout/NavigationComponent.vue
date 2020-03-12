<template>
  <nav>
    <ul class="navbar-nav mr-auto">
      <router-link to="/" activeClass="active" tag="li">
        <a>
          <i class="material-icons">home</i>
          <span>Home</span>
        </a>
      </router-link>
      <router-link to="/questions-pool" activeClass="active" tag="li">
          <a>
            <i class="material-icons">widgets</i>
            <span>Question pool</span>
          </a>
      </router-link>
      <router-link to="/create-question" activeClass="active" tag="li">
          <a>
            <i class="material-icons">add_box</i>
            <span>+1 Question</span>
          </a>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  float: left;
  width: 180px;
  height: calc(100% - 146px);
  margin: 10px 0 0 10px;
  font-weight: 300;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
}

nav ul {
  padding-left: 15px;
  list-style-type: none;
}
nav a {
  display: inline-block;
  margin-left: 2px;
  margin-top: 1px;
  margin-bottom: 3px;
  width: 136px;
  padding: 2px 3px 0px 2px;
  color: rgb(158, 158, 158);
  text-decoration: none;
}
nav a span {
  margin-left: 5px;
  vertical-align: super;
}
</style>