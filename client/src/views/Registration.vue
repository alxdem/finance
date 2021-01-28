<template>
  <div class="login-page">
    <div class="login-page__inner">
      <form class="login-page__form" action="/">
        <div class="form__row">
          <AppInput
              text="Логин"
              placeholder="Введите логин"
          />
        </div>
        <div class="form__row">
          <AppInput
              text="Пароль"
              placeholder="Введите пароль"
              type="password"
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
          <router-link to="/login">Вход</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 150px 0;
    min-height: 100vh;

    &__inner {
      padding: 120px 60px;
      border-radius: 0px;
      background-color: $colorWhite;
      transform: translateY(-100px);
      box-shadow: 0 2px 8px 2px rgba($colorGray__600, 0.13);
    }

    &__form {
      width: 260px;
    }
  }
</style>

<script>
import AppInput from '@/components/form/AppInput';
import AppButton from '@/components/form/AppButton';

export default {
  name: 'registration',
  components: {
    AppInput,
    AppButton
  }
}
</script>