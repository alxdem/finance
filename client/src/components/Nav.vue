<template>
  <div class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <router-link class="nav__link" to="/registration">Операции</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/registration">Категории</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/registration">Бюджет</router-link>
      </li>
      <li class="nav__item">
        <router-link class="nav__link" to="/registration">Цели</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss">
  .nav {
    height: 100%;

    &__list {
      display: flex;
      list-style: none;
      padding: 0;
      height: 100%;
    }

    &__link {
      height: 100%;
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: 5px 20px;
    }
  }
</style>
<script>
export default {
  name: 'nav'
}
</script>