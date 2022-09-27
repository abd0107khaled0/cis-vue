<template>
  <div class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 df">
          <div class="im">
            <img src="@/assets/img/cis.webp" alt="" />
          </div>
          <div class="info">
            <span>
              <i class="fa-regular fa-envelope"></i>
              <p>Info@cisteam.org</p>
            </span>
            <span>
              <i class="fa-solid fa-location-dot"></i>
              <p>
                Mansoura University, Faculty of Computer Science, Dakahlia
                Governorate, Egypt.
              </p>
            </span>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 df">
          <h3>Newsletter</h3>
          <form @click.prevent>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
            <input type="submit" value="SUBSCRIPE" />
          </form>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 df">
          <h3>Blog Tags</h3>
          <ul>
            <li>#Programming</li>
            <li>#Web_Development</li>
            <li>#Machine_Learning</li>
            <li>#UI/UX_Design</li>
          </ul>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 df">
          <h3>ANNUAL PARTENER</h3>
          <img src="@/assets/img/t.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="flex">
      <div class="container">
        <p>
          Copyrights <span> © </span>2021 All Rights Reserved by CIS Technical
          Team.
        </p>
        <ul>
          <li>
            <a class="c" href="#"><i class="fa-brands fa-facebook"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>
          <li>
            <a href="#"><i class="fa-brands fa-github"></i></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterCis",
};
</script>

<style lang="scss" scoped>
.footer {
  background-color: #000;
  padding-block-start: 3rem;
  color: #fff;
  p {
    line-height: var(--line-height);
  }
  .row div:first-of-type {
    .im {
      margin-inline-start: -6.25rem;
      img {
        block-size: calc(2rem + 2vw);
      }
    }
    .info {
      margin-block: 2rem;
      span {
        display: flex;
        justify-content: start;
        // align-items: center;
        p {
          text-align: start;
          margin-inline-start: 0.4rem;
        }
      }
    }
  }
  .row div:nth-of-type(2) {
    h3 {
      text-transform: uppercase;
    }
    form {
      display: flex;
      flex-direction: column;
      input:first-of-type,
      input:nth-of-type(2) {
        background-color: #0e1d27;
      }
      input:last-of-type {
        background-color: var(--main-color);
      }
      input:last-of-type:hover {
        color: #fff;
        background-color: #0b171f;
      }
      input {
        inline-size: 12rem;
        margin: 10px 0;
        padding: 10px;
        border-radius: 5px;
        border: none;
        caret-color: #fff;
        color: #fff;
        outline: {
          color: var(--main-color);
        }
        ::placeholder {
          color: #fff;
        }
      }
    }
  }
  .row div:nth-of-type(3) {
    h3 {
      text-transform: uppercase;
    }
    ul {
      text-align: start;
      margin: 0;
      padding: 0;
      li {
        margin: 19px 0;
      }
    }
  }
  .row div:last-of-type {
    h3 {
      text-transform: uppercase;
    }
  }
  .flex {
    background-color: #0b171f;
    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-block: 1.5rem;
      p {
        span {
          color: var(--main-color);
        }
      }
      ul {
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1.4rem;
        li {
          // padding: 0 10px;
          a {
            font-size: 1.5rem;
            color: #fff;
            transition: var(--transition-smoth);
          }
          a:hover {
            color: var(--main-color);
          }
        }
      }
    }
  }
}
.df {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.c {
  color: var(--main-color) !important;
}
@media (max-width: 768px) {
  .footer .flex .container {
    flex-wrap: wrap;
    justify-content: center;
  }
  .col-lg-3 {
    margin: 10px 0;
  }
}
</style>
