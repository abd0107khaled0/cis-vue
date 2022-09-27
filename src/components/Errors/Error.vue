<template>
  <div>
    <p>You Are Errpr Page</p>
    <img src="@/assets/logo.png" alt="" />
    <button class="btn btn-danger" @click="goBack()">Go Back</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Error-S",
  methods: {
    ...mapActions(["redirectTo"]),
    goBack() {
      this.redirectTo({ val: "home" });
    },
  },
};
</script>

<style lang="scss" scoped></style>
