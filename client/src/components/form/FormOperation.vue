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
          :value="operation.date"
      />
    </div>
    <div class="form__row">
      <AppSelect
          :list="this.operationTypesList"
          v-model="operation.operationType"
      />
    </div>
    <div class="form__row">
      <AppField
          id="description"
          text="Комментарий"
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
import OperationsService from '@/services/OperationsService';
import AppField from '@/components/form/AppField';
import AppButton from "@/components/form/AppButton";
import AppSelect from "@/components/form/AppSelect";

export default {
  name: 'form-operation',
  components: {
    AppButton,
    AppField,
    AppSelect
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
        description: '',
        operationType: 0
      },
      operationTypesList: [
        {value: 0, label: 'Расход', active: true},
        {value: 1, label: 'Перевод со счета'},
        {value: 2, label: 'Доход'}
      ]
    }
  },
  methods: {
    async submit() {
      this.operation.userId = localStorage.getItem('userId');
      const res = await OperationsService.addNewOperation({
        userid: this.operation.userId,
        value: this.operation.value,
         date: this.operation.date,
        description: this.operation.description
      })
      console.log(res);
      console.log(this.operation);
    }
  }
}
</script>