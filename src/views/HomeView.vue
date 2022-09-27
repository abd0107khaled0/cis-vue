<template>
  <Nav />
  <div class="home">
    <div>
      <Sec1 />
      <Sec2 />
      <Sec3 />
      <Footer_Cis />
    </div>
  </div>
</template>

<script>
import Sec1 from "../components/Home/Sec1.vue";
import Sec2 from "@/components/Home/Sec2.vue";
import Sec3 from "@/components/Home/Sec3.vue";
import Footer_Cis from "@/components/Home/Footer_Cis.vue";
import Nav from "@/components/NavBar/Nav.vue";

export default {
  name: "HomeView",
  components: { Sec1, Sec2, Sec3, Footer_Cis, Nav },
};
</script>
<style lang="scss" scoped></style>
