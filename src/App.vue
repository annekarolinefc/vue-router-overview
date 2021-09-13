<template>
  <!--PERMANECE SEM ALTERAÇÃO-->
  <h1>Router Overwiew</h1>
  <br>
  <h3>Utilizando botões</h3>
  <div class="div-router">
    <button @click="goToPage('/pageA')">Go to Page A</button>
    <button @click="goToPage('/pageB')">Go to Page B</button>
    <button @click="goToPage('/pageC')">Go to Page C</button>
  </div>

  <div class="div-router">
    <button @click="replacePage('/pageA')">Replace to Page A</button>
    <button @click="replacePage('/pageB')">Replace to Page B</button>
    <button @click="replacePage('/pageC')">Replace to Page C</button>
  </div>
  <h3>Utilizando links</h3>
  <div class="div-router">
    <router-link to="/pageA">Page A</router-link>
    <router-link to="/pageB">Page B</router-link>
    <router-link to="/pageC">Page C</router-link>
  </div>
  <!--ALTERA DINAMICAMENTE-->
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  methods: {
    goToPage(route) {
      this.$router.push(route);
    },
    replacePage(route) {
      this.$router.replace(route);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.div-router {
  display: flex;
  justify-content: space-around;
  padding-bottom: 1rem;
}
</style>
