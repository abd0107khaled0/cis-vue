<template>
  <div class="Sec1">
    <div class="photo">
      <div class="img_h">
        <img src="@/assets/img/cis.webp" alt="" />
        <h1>Your Path Tom <span> Success </span></h1>
      </div>
    </div>
    <div class="overflow"></div>
  </div>
</template>

<script>
export default {
  name: "Sec-1",
  components: {},
};
</script>
<style lang="scss" scoped>
.Sec1 {
  min-height: 100vh;
  .photo {
    // color: var(--main-color);
    background-image: url("@/assets/img/team.webp");
    background-size: cover;
    width: 100%;
    height: 100%;
    position: absolute;
    .img_h {
      position: absolute;
      z-index: 1;
      transform: translate(-50%);
      top: 40%;
      left: 50%;
      img {
        width: calc(2rem + 20vw);
      }
      h1 {
        font-size: calc(1rem + 2vw);
        color: #fff;
        span {
          color: var(--main-color);
        }
      }
    }
  }
  .overflow {
    position: absolute;
    background: #000000ad;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }
}
</style>
