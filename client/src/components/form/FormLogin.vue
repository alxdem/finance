<template>
  <form class="login-page__form" action="/" @submit.prevent="submit">
    <div class="form__row">
      <AppField
          text="Логин"
          placeholder="Введите логин"
          v-model="login"
      />
    </div>
    <div class="form__row">
      <AppField
          text="Пароль"
          placeholder="Введите пароль"
          type="password"
          v-model="password"
      />
    </div>
    <div class="form__row">
      <AppButton
          text="Войти"
          type="submit"
          isFit
      />
    </div>
    <div class="form__row login-page__link">
      <router-link to="/registration">Регистрация</router-link>
    </div>
  </form>
</template>

<style lang="scss">

</style>

<script>
import AppField from '@/components/form/AppField';
import AppButton from '@/components/form/AppButton';
import Api from '@/services/api';

export default {
  name: 'FormLogin',
  components: {
    AppField,
    AppButton
  },
  data () {
    return {
      login: '',
      password: '',
      api: new Api()
    }
  },
  methods: {
    async submit() {
      console.log('this.login', this.login)

      const res = await this.api.login(this.login, this.password);

      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('userId', res.userId);
    }
  }
}
</script>