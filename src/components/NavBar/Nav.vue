<template>
  <div class="big-nav">
    <div class="cont">
      <div class="container-fluid">
        <div class="row">
          <div class="nav">
            <figure>
              <img src="@/assets/img/cis.webp" alt="" />
            </figure>
            <nav class="nav1">
              <ul>
                <li>
                  <router-link to="/" exact>Home </router-link>
                </li>
                <li>
                  <router-link to="/about">Search</router-link>
                </li>
                <!-- <li> -->
                <!-- <router-link
                    :to="{
                      name: 'Search',
                    }"
                    >Search
                  </router-link> -->
                <!-- </li> -->
                <!-- <li>
                  <router-link to="/blog">Blog</router-link>
                </li>
                <li>
                  <router-link to="/committes">Committees</router-link>
                </li>
                <li>
                  <router-link to="/abfaqout">FAQ</router-link>
                </li>
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li> -->
              </ul>
            </nav>
            <button class="btn btn1">
              <router-link to="/NewLatters" style="color: #fff"
                >NewsLetter</router-link
              >
            </button>
            <button class="btn btn2" @click="leftNav()">More</button>
          </div>
        </div>
      </div>
    </div>
    <div class="slid-over">
      <div class="slide-r" id="slide-r">
        <figure>
          <img src="@/assets/img/cis.webp" alt="" />
        </figure>
        <div class="slide">
          <nav>
            <ul>
              <li>
                <router-link to="/" exact>Home </router-link>
              </li>
              <li>
                <router-link to="/about">Search</router-link>
              </li>
              <!-- <li>
                <router-link
                  :to="{
                    name: 'Search',
                  }"
                  >Search</router-link
                >
              </li> -->
              <!-- <li>
                <router-link to="/blog">Blog</router-link>
              </li>
              <li>
                <router-link to="/committes">Committees</router-link>
              </li>
              <li>
                <router-link to="/abfaqout">FAQ</router-link>
              </li>
              <li>
                <router-link to="/contact">Contact</router-link>
              </li> -->
              <li>
                <router-link :to="{ name: 'NewLatters' }"
                  ><button
                    class="btn"
                    style="border: 1px solid #fff; color: #fff"
                  >
                    NewsLetter
                  </button></router-link
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="overflow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav-m",
  data() {
    return {
      bool: false,
    };
  },
  mounted() {
    this.dom();
    document.body.onscroll = function () {
      if (scrollY <= 0) {
        console.log("scrollY");
        document.querySelector(".cont").style.background = "transparent";
      } else {
        document.querySelector(".cont").style.background = "#0b171f";
      }
    };
  },
  methods: {
    leftNav() {
      const slide = document.getElementById("slide-r");
      const over = document.querySelector(".overflow");
      if (this.bool == false) {
        slide.classList.add("btn2-slide-r");
        over.classList.add("over");
        document.body.style.overflow = "hidden";
        console.log(document.body.className);
        setTimeout(() => {
          this.bool = true;
          console.log("yes");
        }, 200);
      }
    },
    dom() {
      document.addEventListener("click", () => {
        const slide = document.getElementById("slide-r");
        const over = document.querySelector(".overflow");
        if (this.bool == true) {
          slide.classList.remove("btn2-slide-r");
          over.classList.remove("over");
          document.body.style.overflow = "auto";
          console.log("hellp");
          this.bool = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.big-nav {
  .cont {
    background-color: var(--second-color);
    padding: 0px 60px;
    position: fixed;
    width: 100%;
    // height: 100%;
    z-index: 10;
  }
  .slide-r {
    position: absolute;
    z-index: 10 !important;
    position: fixed;
    background-color: var(--second-color);
    width: 300px;
    top: 0;
    left: -300px;
    z-index: 1;
    transition: var(--transition-smoth);
    height: 100%;
    figure {
      padding: 10px 0 40px 0;
      margin: 0;
      // background: var(--second-color);
      img {
        width: 160px !important;
      }
    }
    .slide {
      display: flex;
      flex-direction: column;
      // background: var(--second-color);
      ul {
        padding: 0;
        li {
          padding: 15px 0px;
          a {
            font-weight: bold;
            color: #fff;
            transition: var(--transition-smoth);
            &.router-link-exact-active {
              color: var(--main-color);
            }
          }
          a:hover {
            color: var(--main-color) !important;
          }
        }
      }
    }
  }
  .over {
    position: fixed;
    background: rgb(0 0 0 / 63%);
    z-index: 8;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0;
  }
  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 11px 0;
    figure {
      img {
        width: 160px !important;
      }
    }
    ul {
      display: flex;
      align-content: center;
      margin: 0;
      padding: 0;
      li {
        padding: 0 10px;
        a {
          font-weight: bold;
          color: #fff;
          transition: var(--transition-smoth);
          &.router-link-exact-active {
            color: var(--main-color);
          }
        }
        a:hover {
          color: var(--main-color) !important;
        }
      }
    }
    .btn {
      color: var(--main-color);
      border: 1px solid var(--main-color);
      padding: 8px 20px;
      border-radius: 4px;
      background-color: transparent;
      box-shadow: 0px 0 2px 0 var(--main-color);
      transition: var(--transition-smoth);
    }
    .btn:hover {
      background-color: var(--main-color);
      color: var(--second-color);
    }
    .btn2 {
      display: none;
    }
  }
}
.btn2-slide-r {
  left: 0 !important;
}
@media (max-width: 906px) {
  .btn1,
  .nav1 {
    display: none;
  }
  .btn2 {
    display: block !important;
  }
}
</style>
