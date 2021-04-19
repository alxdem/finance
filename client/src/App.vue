<template>
  <div>
    <component :is="layout">
      <router-view />
    </component>

<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  </div>
</template>

<style lang="scss">
@import "styles";
</style>

<script>
import EmptyLayout from '@/layouts/EmptyLayout';
import MainLayout from '@/layouts/MainLayout';

export default {
  name: 'App',
  components: {
    EmptyLayout, MainLayout
  },
  computed: {
    layout() {
      return this.$route.meta.layout ? this.$route.meta.layout : 'EmptyLayout'
    }
  }
}
</script>
