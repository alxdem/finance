<template>
  <div class="login-page">
    <div class="login-page__inner">
      <FormLogin/>
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

    &__link {
      text-align: center;
    }
  }
</style>

<script>
import FormLogin from '@/components/form/FormLogin';
export default {
  name: 'loginPage',
  components: {FormLogin}
}
</script>