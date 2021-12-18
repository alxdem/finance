<script>
import AppButton from "@/components/form/AppButton";

export default {
  name: 'form-confirm',
  components: {
    AppButton,
  },
  props: {
    text: {
      type: String,
      default: null
    },
    categories: Array,
    params: Object
  },
  emits: {
    close: null,
    confirm: null
  },
  data() {
    return {

    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    confirm() {
      this.$emit('confirm', this.params);
    }
  }
}
</script>

<template>
  <form
      class="form-confirm form"
      action="/"
  >
    <div v-if="text" class="form__row">{{text}}</div>
    <div class="form__row">
      <AppButton
          text="Отмена"
          type="button"
          @click="close"
      />

      <AppButton
          text="Ок"
          type="button"
          @click="confirm"
      />
    </div>
  </form>
</template>

<style lang="scss">

</style>