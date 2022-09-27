<template>
  <div class="Sec3">
    <div class="container">
      <div class="row">
        <h2 class="h2">Our Events:</h2>
        <Boot />
      </div>
    </div>
  </div>
</template>

<script>
import Boot from "./Boot.vue";
export default {
  name: "Sec-3",
  components: { Boot },
};
</script>

<style lang="scss" scoped>
.Sec3 {
  //   background-color: #000;
  padding-block: 80px;
  h2 {
    text-align: left;
    padding: 0;
  }
  .carousel-item {
    display: flex;
    background-color: #000;
  }
}
</style>
