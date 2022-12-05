<template>
  <div id="app">
    <header>
      <router-link to="/">Home</router-link>
      <nav class="nav-costs">
        <router-link class="router-link" to="/add/payment/food?value=200"><a class="btn-costs">Food</a>
        </router-link>|
        <router-link class="router-link" to="/add/payment/transport?value=50"><a class="btn-costs">Transport</a>
        </router-link>|
        <router-link class="router-link" to="/add/payment/study?value=2000"><a class="btn-costs">Study</a>
        </router-link>
      </nav>
      <router-link to="/about">about</router-link> |
      <router-link to="/notfound">notfound</router-link>
    </header>
    <main>
      <router-view :key="$route.fullPath" />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
    };
  },
  methods: {
    show() {
      this.isShown = true;
    },
    hide() {
      this.isShown = false;
      console.log("hide")
    },
    // onBtnClick() {
    //   this.$store.commit("setIsPopupActive", !this.$store.state.isPopupActive);
    // },
  },
  mounted() {
    this.$context.EventEmitter.$on("show", this.show);
    this.$context.EventEmitter.$on("hide", this.hide);
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.nav-costs {
  width: 600px;
  margin: 30px auto;
  display: flex;
  justify-content: space-evenly;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
