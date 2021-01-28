<template>
  <div class="header">
    <div class="header__nav">
      <Nav/>
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    background-color: $colorWhite;
    height: 100%;

    &__nav {
      height: 100%;
    }
  }
</style>

<script>
import Nav from '@/components/Nav';
export default {
  name: 'header',
  components: {
    Nav
  }
}
</script>