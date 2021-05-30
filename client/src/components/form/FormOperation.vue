<template>
  <form
      class="form-operation form"
      action="/"
      @submit.prevent="submit"
  >
    <div class="form__row">
      <AppField
          id="value"
          type="text"
          text="Сумма"
          v-model="operation.value"
      />
    </div>
    <div class="form__row">
      <AppField
          id="date"
          type="app-date"
          text="Дата"
          v-model="operation.date"
      />
    </div>
    <div class="form__row">
      <AppField
          id="description"
          text="Дата"
          v-model="operation.description"
      />
    </div>

    <AppButton
      text="Сохранить"
      type="submit"
    />
  </form>
</template>

<style lang="scss">

</style>

<script>
// import OperationsService from '@/services/OperationsService';
import AppField from '@/components/form/AppField';
import AppButton from "@/components/form/AppButton";
export default {
  name: 'form-operation',
  components: {
    AppButton,
    AppField
  },
  props: {
    text: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      operation: {
        userId: null,
        value: '',
        date: new Date(),
        description: ''
      },
    }
  },
  methods: {
    async submit() {
      // this.operation.userId = localStorage.getItem('userId');
      // const res = await OperationsService.addNewOperation({
      //   userid: this.operation.userId,
      //   value: this.operation.value,
      //   description: this.operation.description
      // })
      // console.log(res);
      console.log(this.operation);
    }
  }
}
</script>