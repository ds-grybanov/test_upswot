<template>
  <div class="login-page">
    <div class="header">
      <div class="header__top"></div>
      <div class="header__bottom">
        <div class="container">
          <div class="header__logo">
            <img class="header__logo-img" src="~@/assets/img/logo.svg" alt="logo">
            <a class="header__logo-link" href="#"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="header__section">
      <div class="container">
        <h1 class="header-section__title">
          <span>Welcome to</span>
          <span>Business Analytics Online</span>
        </h1>
      </div>
    </div>
    <div class="benefits">
      <div class="container">
        <div class="benefits__content">
          <p class="content__title">
            <strong>Business Analytics</strong> — a new, convenient tool for managing and forecasting your business performance, which will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
          </p>
          <ul class="content__list">
            <li class="content__list-item">
              Interactive Reporting
              <p class="list__item-text">
                In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM),<br> E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.
              </p>
            </li>
            <li class="content__list-item">
              Automated data updates
              <p class="list__item-text">
                The application automatically updates and structures the data in just 60 seconds, saving you time and money.
              </p>
            </li>
            <li class="content__list-item">
              Data Security
              <p class="list__item-text">
                The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.
              </p>
            </li>
          </ul>
        </div>
        <form class="form">
          <div class="form__inner">
            <div class="form__input">
              <label for="name" class="input__label">Name</label>
              <input v-model="userData.login" id="name" type="text" class="input" :class="{'input-error': errorLogin}">
              <span v-show="errorLogin" class="input__error">Enter correct name</span>
            </div>
            <div class="form__input">
              <label for="name" class="input__label">Password</label>
              <input v-model="userData.pass" id="Password" type="password" class="input" :class="{'input-error': errorPass}">
              <span v-show="errorPass" class="input__error">Enter correct password</span>
            </div>
            <button @click="login" class="form__btn-login" type="button">LOGIN</button>
            <button class="form__btn-forgot" type="button">Forgot Password</button>
          </div>
          <a class="form__btn-reg" href="#">Register now</a>  
        </form>
      </div>
    </div>
    <div class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__logo">
            <img class="footer__logo-img" src="~@/assets/img/logo.svg" alt="logo">
            <a class="footer__logo-link" href="#"></a>
          </div>
          <ul class="footer__list">
            <li class="footer__list-item">
              <a class="list__item-link" href="#">Terms & Conditions</a>
            </li>
            <li class="footer__list-item">
              <a class="list__item-link" href="#">Privacy</a>
            </li>
            <li class="footer__list-item">
              <a class="list__item-link" href="#">Notice at Collection</a>
            </li>
            <li class="footer__list-item">
              <a class="list__item-link" href="#">CA Privacy Hub</a>
            </li>
            <li class="footer__list-item">
              <a class="list__item-link" href="#">Contact Us</a>
            </li>
            <li class="footer__list-item">
              <a class="list__item-link" href="#">Sitemap</a>
            </li>
          </ul>
        </div>
        <div class="footer__bottom">
          <p class="footer__bottom-copyright">
            Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: {
        login: undefined,
        pass: undefined
      },
      errorLogin: false,
      errorPass: false,
    }
  },

  methods: {
    login() {
      if(this.validate()) {
        localStorage.setItem('admin', true)
        this.$router.push('/todo')
      }
    },
    validate() {
      if (this.userData.login != 'Admin') {
        this.errorLogin = true
      } else {
        this.errorLogin = false
      }
      if (this.userData.pass != '12345') {
        this.errorPass = true
      } else {
        this.errorPass = false
      }

      return !(this.errorLogin || this.errorPass)
    }
  }
}
</script>

<style lang="scss" scoped>

@import "~@/scss/main.scss";

//------Header--------

.header {
  .header__top {
    height: 53px;
    background-color: $color_seconadry;
  }
  .header__bottom {
    background: $color_gradient;
    padding: 15px 0;
    .header__logo  {
      position: relative;
      width: 103px;
      img {
        display: block
      }
      a {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
}

//-------Header__section--------

.header__section {
  background-image: url('~@/assets/img/bg.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 460px;
  margin-bottom: 40px;
  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    .header-section__title {
      font-family: $font_roboto-r;
      font-weight: 400;
      color: #fff;
      font-size: 55px;
      line-height: 86px;
      margin-bottom: 70px;
      span {
        display: block;
      }
    }
  }
}

//-------Benefist__section-----------

.benefits {
  margin-bottom: 40px;
  .container {
    display: flex;
    justify-content: space-between;
    .benefits__content {
      max-width: 680px;
      .content__list-item {
        margin-top: 15px;
        margin-left: 38px;
        font-family: $font_roboto-m;
        font-weight: bold;
        position: relative;
        p {
          margin-top: 10px;
          font-family: $font_roboto-r;
          font-weight: 40;
          font-size: 14px;
          line-height: 21px;
        }
      }
      .content__list-item::before {
        content: '';
        position: absolute;
        top: 3px;
        left: -38px;
        background-image: url('~@/assets/img/icon_check.svg');
        width: 23px;
        height: 17px;
      }
    }
    .form {
      position: relative;
      top: -185px;
      background-color: #fff;
      box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);
      .form__inner {
        padding: 40px 30px 0px;
        .form__input {
          display: flex;
          flex-direction: column;
          width: 420px;
          margin-bottom: 40px;
          position: relative;
          .input__label {
            font-family: $font_roboto-l;
            font-size: 18px;
            line-height: 21px;
            margin-bottom: 7px;
          }
          .input {
            padding: 10px 15px;
            height: 53px;
            outline: none;
            border: 1px solid $color_succes;
          }
          .input:focus {
            border: 1px solid $color_focus;
          }
          .input-error{
            border: 1px solid $color_error;
          }
          .input__error {
            position: absolute;
            left: 21px;
            bottom: -25px;
            font-size: 16px;
            line-height: 19px;
            color: $color_error;
          }
          .input__error::before {
            content: '';
            position: absolute;
            left: -21px;
            top: 4px;
            background-image: url('~@/assets/img/icon_error.svg');
            background-repeat: no-repeat;
            width: 11px;
            height: 11px;
          }
        }
        .form__btn-login {
          display: block;
          text-align: center;
          text-transform: uppercase;
          font-family: $font_roboto-r;
          font-size: 25px;
          line-height: 29px;
          color: #fff;
          width: 100%;
          padding: 12px 0;
          background-color: $color_primary;
          border: 2px solid $color_primary;
          transition: all .2s ease-in-out;
          margin-bottom: 20px;
          cursor: pointer;
        }
        .form__btn-login:hover {
          border: 2px solid $color_primary;
          background-color: #fff;
          color: $color_primary;
        }
        .form__btn-forgot {
          display: block;
          text-align: center;
          width: 100%;
          background-color: #fff;
          color: $color_primary;
          font-size: 20px;
          line-height: 23px;
          border: none;
          cursor: pointer;
          margin-bottom: 23px;
        }
      }
      .form__btn-reg {
        display: block;
        padding: 17px 0;
        background-color: #F6F6F6;
        font-family: $font_roboto-r;
        font-size: 25px;
        line-height: 29px;
        text-align: center;
        width: 100%;
      }
    }
  } 
}


//-------Footer-----------

.footer {
  background-color: $color_seconadry;
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 35px 0;
    border-bottom: 1px solid #fff;
    .footer__logo {
      position: relative;
      img {
        width: 56px;
        height: 35px;
      }
      a {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }
    .footer__list {
      display: flex;
      margin-right: -10px;
      &-item {
        margin: 0 10px;
        color: #fff;
        font-family: $font_roboto-m;
        line-height: 25px;
      }
    }
  }
  &__bottom {
    padding: 30px 0;
    color: #fff;
    font-size: 12px;
    line-height: 19px;
    font-family: $font_roboto-m;
  }
}

//---------Media: 1150px----------

@media(max-width: 1150px) {
  .header__section {
    .container {
      align-items: center;
    }
  }
}

//---------Media: 960px----------

@media(max-width: 960px) {
  .benefits {
    .container {
      flex-direction: column;
      .form {
        position: static;
        margin: 30px auto 0;
        width: 80%;
        .form__inner {
          .form__input {
            margin: 0 auto 40px;
            width: 100%;
          }
        }
      }
    }
  }
}

//---------Media: 780px----------

@media(max-width: 780px) {
  .footer {
    .container {
      .footer__top {
        flex-direction: column;
        align-items: flex-start;
        .footer__list {
          flex-direction: column;
          margin-top: 20px;
          .footer__list-item {
            margin-left: 0;
          }
        }
      }
    }
  }
}

//---------Media: 500px----------

@media(max-width: 500px) {
  .login-page {
    .header {
      .header__top {
        height: 35px;
      }
      .header__bottom {
        .container {
          .header__logo {
            img {
              width: 75px;
              height: 45px;
            }
          }
        }
      }
    }
    .header__section {
      height: 300px;
      .container {
        .header-section__title {
          font-size: 40px;
          line-height: 55px;
          margin: 0;
        }
      }
    }
  }

  .benefits {
    .container {
      .form {
        width: 100%;
        .form__inner {
          .form__btn-login {
            font-size: 22px;
          }
        }
      }
    }
  }
}


</style>