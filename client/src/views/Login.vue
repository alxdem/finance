<template>
  <div class="login-page">
<!--      <a href="#">fdsfsd</a>-->
    <div class="login-page__inner">
      <form action="/">
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
      </form>
    </div>
  </div>
</template>

<style lang="scss">
  .login-page {
    display: flex;
    justify-content: center;
    padding: 150px 0;

    &__inner {
      padding: 100px;
      border-radius: 4px;
      background-color: $colorMain__700;
    }
  }
</style>

<script>
import AppInput from '@/components/form/AppInput';
import AppButton from '@/components/form/AppButton';

export default {
  name: 'login',
  components: {
    AppInput,
    AppButton
  }
}
</script>