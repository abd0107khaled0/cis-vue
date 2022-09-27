<template>
  <div class="container about">
    <!-- <div class="nav">
      <Nav />
    </div> -->
    <h1>About My Team</h1>
    <input type="text" placeholder="search" v-model="inp" @keyup="getInfo()" />
    <button class="btn btn-info" @click="goBack()">Go Back</button>
    <div class="for">
      <div v-for="(data, i) in dataBig" :key="i">
        <p>{{ data.title }}</p>
        <img :src="data.url" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

// import Nav from "@/components/NavBar/Nav.vue";
export default {
  name: "AboutV",
  // components: { Nav },
  data() {
    return {
      dataBig: [],
      inp: "",
    };
  },
  mounted() {
    // this.getpfo();
  },
  methods: {
    ...mapActions(["redirectTo"]),
    async getInfo() {
      this.dataBig = [];
      let result = await axios.get(`http://myjson.dit.upm.es/api/bins/fn22`);
      if (result.status == 200) {
        // console.log("do");
        // console.log(result.data.users);
        let dataBig = result.data.users;
        for (let i = 0; i < dataBig.length; i++) {
          if (dataBig[i].title.includes(this.inp.trim())) {
            console.log(dataBig[i].title);
            this.dataBig.push(dataBig[i]);
            console.log(this.dataBig.push(dataBig[i]));
          }
        }
        this.dataBig = new Set(this.dataBig);
        // console.log(this.inp);
        // console.log(this.dataBig);
      }
    },
    goBack() {
      this.redirectTo({ val: "home" });
    },
  },
};
</script>

<style lang="scss" scoped>
.about {
  // background-image: linear-gradient(
  //   to right,
  //   rgba(255, 0, 0, 0),
  //   rgba(255, 0, 0, 1)
  // );
  input {
    border: 3px solid red;
    padding: 10px;
    border-radius: 8px;
    outline: none;
    ::placeholder {
      font-weight: bold;
    }
  }
  .btn {
    padding: 1px 15px;
    margin-inline-start: 10px;
  }
  .for {
    display: flex;
    flex-flow: column;
    // grid-template-areas: "1 1 1";
    // .for > div {
    //   grid-area: 2;
    // }
  }
}
</style>
