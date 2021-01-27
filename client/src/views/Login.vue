<template>
  <div>
      <a href="#">fdsfsd</a>
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
          />
        </div>
      </form>

  </div>
</template>
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