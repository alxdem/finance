<template>
  <form class="form-operation form" action="/">
    <div class="form__row">
      <AppInput
          text="Сумма"
      />
    </div>
  </form>
</template>

<style lang="scss">

</style>

<script>
import AppInput from '@/components/form/AppInput';
export default {
  name: 'form-operation',
  components: {
    AppInput
  },
  props: {
    text: {
     type: String,
     default: null
    }
  }
}
</script>