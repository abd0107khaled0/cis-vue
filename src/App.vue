<template>
  <!-- <div class="load">window load .......</div> -->
  <!-- <Nav /> -->
  <router-view />
</template>
<script>
// import Nav from "./components/NavBar/Nav.vue";
export default {
  name: "ApP",
  // components: { Nav },
  mounted() {
    // window.onload = function () {
    //   setInterval(() => {
    //     document.querySelector(".load").style.display = "none";
    //     document.body.style.overflow = "auto";
    //   }, 1000);
    // };
  },
};
</script>
<style lang="scss">
// body {
//   overflow: hidden;
// }
// .load {
//   position: absolute;
//   width: 100%;
//   height: 100%;
//   background-color: #00ffcb87;
//   top: 0;
//   z-index: 100;
// }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
