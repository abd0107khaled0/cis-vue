<template>
  <div class="Sec2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-16 box_f">
          <h2 class="h2">What Is CIS Team?</h2>
          <p>
            CIS Team MU is a non-profit scientific organization, was founded in
            2015 in Computer Science Faculty at Mansoura University by
            passionate students with the main purpose of sharing their knowledge
            and experience in order to enrich the computer science community
            with the necessary skills.
          </p>
          <!-- <i class="fa-solid fa-face-laugh-wink"></i> -->
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-16 box_l">
          <figure>
            <img src="@/assets/img/team.webp" alt="" />
          </figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sec-2",
};
</script>

<style lang="scss" scoped>
.Sec2 {
  background-color: var(--third-color);
  .row {
    padding-block-start: 40px;
    .box_f {
      text-align: left;
      // h2 {
      //   position: relative;
      //   padding-block-end: 5px;
      //   margin-block-end: 20px;
      // }
      // h2::after {
      //   position: absolute;
      //   content: "";
      //   inset-block-end: 0;
      //   inset-inline-start: 0;
      //   background-color: var(--main-color);
      //   width: 90px;
      //   height: 4px;
      // }
      p {
        line-height: var(--line-height);
        font-size: calc(10px + 1vw);
        word-spacing: 4px;
      }
    }
    .box_l {
      margin: 20px 0;
      figure {
        img {
          width: 100%;
          border-radius: 6px;
          box-shadow: 8px -8px 0px 2px #000;
        }
      }
    }
  }
}
</style>
