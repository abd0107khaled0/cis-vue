<template>
  <div class="mod">
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        NewLatters
      </button>

      <!-- Modal -->
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form @click.prevent>
                <input type="text" placeholder="Name" v-model="state.name" />
                <span v-if="v$.name.$error">
                  {{ v$.name.$errors[0].$message }}
                </span>
                <input type="text" placeholder="Email" v-model="state.email" />
                <span v-if="v$.email.$error">
                  {{ v$.email.$errors[0].$message }}
                </span>
                <textarea
                  name=""
                  id=""
                  cols="20"
                  rows="10"
                  placeholder="Message"
                  v-model="state.message"
                ></textarea>
                <span v-if="v$.message.$error">
                  {{ v$.message.$errors[0].$message }}
                </span>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
                @click="newL()"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-info btnInfo" @click="goBack()">Go Back</button>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import useValidate from "@vuelidate/core";
import { email, required, minLength } from "@vuelidate/validators";
import { reactive, computed } from "vue";
// import axios from "axios";
export default {
  name: "NewLatters",
  data() {
    return {
      // name:"",
      // email:"",
      // message:""
    };
  },
  setup() {
    const state = reactive({
      message: "",
      name: "",
      email: "",
    });
    const rules = computed(() => {
      return {
        name: { required, minLength: minLength(10) },
        email: { required, email },
        message: { required },
      };
    });
    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
    };
  },
  methods: {
    goBack() {
      this.$router.push({ name: "home" });
    },
    async newL() {
      this.v$.$validate();
      console.log(this.state.name, this.state.email, this.state.message);
      this.state.name = "";
      this.state.email = "";
      this.state.message = "";
      this.v$.name.$errors[0].$message = "";
      this.v$.email.$errors[0].$message = "";
      this.v$.message.$errors[0].$message = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.mod {
  padding: 40px 0;
  .btnInfo {
    margin: 20px 0;
  }
  form {
    display: flex;
    flex-direction: column;
    input,
    textarea {
      width: 100%;
      padding: 10px;
      border-radius: 8px;
      border: 2px solid #b1b1b1;
      outline: none;
      margin-block: 5px;
    }
  }
}
</style>
