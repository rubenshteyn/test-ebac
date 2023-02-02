<template>
  <div class="container">
    <div class="panel">
      <div class="panel__form-wrapper panel__form-big-wrapper change-img">
        <ul class="panel__headers">
          <li class="panel__header"><a class="panel__link" role="button">Change Image</a></li>
        </ul>

        <div class="panel__form">
          <form class="form panel__login-form">
            <div class="form__row">
              <div class="form__img">
                <img src="https://fikiwiki.com/uploads/posts/2022-02/1644910926_5-fikiwiki-com-p-pikachu-krasivie-kartinki-5.jpg">
                <button class="delete button__img">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" version="1.1" viewBox="0 0 32 32">
                    <g transform="scale(2)">
                      <circle style="fill:#f44336" cx="8" cy="8" r="7"/>
                      <rect style="fill:#ffffff" width="2" height="10" x="-.98" y="-16.29" transform="rotate(135)"/>
                      <rect style="fill:#ffffff" width="2" height="10" x="-12.29" y="-5.01" transform="rotate(-135)"/>
                    </g>
                  </svg>
                </button>
                <button class="edit button__img">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31.998" height="23"><path fill="#8654cd" d="M25.913 8.143c-.438-4.563-4.237-8.143-8.914-8.143-3.619 0-6.718 2.148-8.146 5.23-.43-.137-.878-.23-1.353-.23-2.485 0-4.5 2.016-4.5 4.5 0 .494.099.961.246 1.404-1.933 1.127-3.246 3.196-3.246 5.594 0 3.59 2.91 6.5 6.5 6.5v.002h17.999v-.002c4.144 0 7.499-3.357 7.499-7.5 0-3.656-2.62-6.693-6.085-7.355zm-6.134 5.757h-1.78v4.012c0 .553-.446 1.002-1 1.002h-2c-.552 0-1-.449-1-1.002v-4.012h-1.781c-1.086 0-1.529-.725-.987-1.609l3.781-3.727c.741-.74 1.21-.765 1.974 0l3.781 3.727c.544.885.098 1.609-.988 1.609z"/></svg>
                </button>
              </div>
            </div>
            <div class="form__row">
              <button class="form__submit">Save Image</button>
            </div>
          </form>
        </div>
      </div>
      <div class="panel__form-wrapper panel__form-big-wrapper change-data">
          <ul class="panel__headers">
            <li class="panel__header"><a class="panel__link" role="button">Personal data</a></li>
          </ul>
          <form class="form panel__login-form" id="register-form">
            <div class="form__row form__row-two">
              <input type="text" id="fio" class="form__input" name="fio" required>
              <span class="form__bar"></span>
              <label for="fio" class="form__label">Full name</label>
              <span class="form__error"></span>
            </div>
            <div class="form__row form__row-two">
              <div class="calendar">
              <span class="icon-calendar">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="20" height="20" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
<g>
	<path d="M160,256H96v-64h64V256z M288,192h-64v64h64V192z M416,192h-64v64h64V192z M160,288H96v64h64V288z M288,288h-64v64h64V288z    M416,288h-64v64h64V288z M160,384H96v64h64V384z M288,384h-64v64h64V384z M128,96c17.672,0,32-14.313,32-32V32   c0-17.688-14.328-32-32-32S96,14.313,96,32v32C96,81.688,110.328,96,128,96z M512,64v448H0V64h80c0,26.469,21.531,48,48,48   c26.469,0,48-21.531,48-48h160c0,26.469,21.531,48,48,48s48-21.531,48-48H512z M480,160H32v320h448V160z M384,96   c17.688,0,32-14.313,32-32V32c0-17.688-14.312-32-32-32s-32,14.313-32,32v32C352,81.688,366.312,96,384,96z"/>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>
              </span>
                <datepicker v-model="this.date" @click="changeData(this.date)"
                />
              </div>
              <input type="text" id="date_birth" class="form__input" @change="checkDate(this.currentDate)" v-model="this.currentDate" name="date_birth" required>
              <span class="form__bar"></span>
              <label for="date_birth" class="form__label">Date birth</label>
              <span class="form__error" v-if="checkDate(this.currentDate) === false">Введена некорректная дата!</span>
            </div>
            <div class="form__row form__row-two">
              <input type="text" id="register-email" class="form__input" name="register-mail" data-validation="email" data-error="Invalid email address." required>
              <span class="form__bar"></span>
              <label for="register-email" class="form__label">E-mail</label>
              <span class="form__error"></span>
            </div>
            <div class="form__row form__row-two">
              <input type="text" id="town" class="form__input" name="town" data-validation="length" data-validation-length="2-30" data-error="Town must contain 2-30 characters" required>
              <span class="form__bar"></span>
              <label for="town" class="form__label">Town</label>
              <span class="form__error"></span>
            </div>
            <div class="form__row">
              <vue-tel-input v-model="this.phone" class="form__input"></vue-tel-input>
              <span class="form__error"></span>
            </div>
            <div class="form__row">
              <v-select v-model="language" label="name" :options="langList"
                        placeholder="Select language" required></v-select>
              <span class="form__bar"></span>
              <span class="form__error"></span>
            </div>
            <div class="form__row">
              <button :disabled="this.goodData" @click="sendData" class="form__submit">Submit</button>
            </div>
          </form>

        </div>
      <div class="panel__forms">
        <div class="panel__form-wrapper panel__form-mini-wrapper change-password">
          <ul class="panel__headers">
            <li class="panel__header"><a class="panel__link" role="button">Change password</a></li>
          </ul>

          <div class="panel__form">

            <!-- Login Form -->
            <form class="form panel__login-form">
              <div class="form__passwords">
                <div class="form__row form__row-two form__row-two-current-password">
                  <input type="password" id="current-password" @change="checkPassword" v-model="oldPassword" class="form__input" name="current-password" data-validation="length" data-validation-length="8-25" data-error="Password must contain 8-25 characters." required>
                  <span class="form__bar"></span>
                  <label for="current-password" class="form__label">Current password</label>
                </div>
                <div class="form__row form__row-two">
                  <input type="password" id="password" @change="checkPassword" v-model="password" class="form__input" name="password" data-validation="length" data-validation-length="8-25" data-error="Password must contain 8-25 characters." required>
                  <span class="form__bar"></span>
                  <label for="password" class="form__label">New password</label>
                </div>
              </div>
              <!--            <div class="form__row">-->
              <!--              <input type="submit" class="form__submit" value="Submit">-->
              <!--              <a href="#password-form" class="form__retrieve-pass" role="button">Forgot Password?</a>-->
              <!--            </div>-->
              <div class="form__row form__row-btns">
                <button :disabled="this.goodPassword" class="form__submit">Submit</button>
                <button @click="clearPasswords()" class="form__submit cancel">Cancel</button>
              </div>
              <div class="form__row form__errors">
                <span class="form__error" v-show="checkPassword() === false">Введен некоррекный пароль!</span>
                <span class="form__error" v-show="checkPassword() === 'coincidence'">Введенные пароли совпадают!</span>
                <span class="form__error" v-show="checkPassword() === 'smaller'">Введенный пароль слишком короткий!</span>
                <span class="form__error" v-show="checkPassword() === 'more'">Введенный пароль слишком длинный!</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vue3-datepicker'
import { VueTelInput } from 'vue3-tel-input'


export default {
  name: 'PersonalArea',
  props: {
    msg: String
  },
  data() {
    return {
      fullname: null,
      town: null,
      email: null,
      date: null,
      currentDate: null,
      phone: null,
      language: null,
      oldPassword: null,
      password: null,
      goodPassword: true,
      goodData: true,
      langList: [
          "Русский",
          "English"
      ]
    }
  },
  components: {
    Datepicker,
    VueTelInput
  },
  methods: {
    sendData() {
      let data = [this.fullname, this.email, this.date, this.town, this.phone, this.language]
      console.log(data)
    },

    changeData(date) {
      if(!date) {
        return null
      }
      this.currentDate = date.toLocaleDateString()
    },

    checkDate(date) {
      if(date === null) {
        return true
      }
      let aTmp = date.split(".");

      aTmp[1] -= 1;
      let d = new Date(aTmp[2], aTmp[1], aTmp[0]);
      let d1 = d.getDate()
      if(d1.toString().length === 1) {
        d1 = [0, Number(d1)].join("")
      }
      return (Number(d.getFullYear()) === Number(aTmp[2])) && (Number(d.getMonth()) === Number(aTmp[1])) && (Number(d1) === Number(aTmp[0]));
    },
    clearPasswords() {
      this.password = null
      this.oldPassword = null
    },
    checkPassword() {
      if((this.oldPassword !== null && this.password !== null) && (this.password.length < 8)) {
        this.goodPassword = true
        return "smaller"
      }
      if((this.oldPassword !== null && this.password !== null) && (this.password.length > 25)) {
        this.goodPassword = true
        return "more"
      }
      if(this.oldPassword && this.password && this.oldPassword === this.password) {
        this.goodPassword = true
        return "coincidence"
      }
      this.goodPassword = false
    },
    checkData() {
      if(this.fullname && this.email && this.date && this.town && this.language && this.phone ) {
        this.goodData = false
        return true
      }
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
}
</style>
