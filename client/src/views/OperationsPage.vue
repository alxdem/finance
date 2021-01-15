<template>
  <h1>Operations</h1>
  <form action="" @submit.prevent="submit">
    <input type="text" id="value" name="value" placeholder="value" v-model="operation.value">
    <input type="text" id="description" name="description" placeholder="description" v-model="operation.description">
    <button type="submit">Отправить</button>
  </form>
  <section class="list" v-if="operations && operations.length">
    <ul>
      <li v-for="(operation, index) in operations" v-bind:key="index">
        <span>{{ operation }}</span>
      </li>
    </ul>
  </section>

  <section class="list" v-else>
    <p>Записи не найдены</p>
  </section>

</template>

<script>
import OperationsService from '@/services/OperationsService';

export default {
  name: 'Operations',
  data: function () {
    return {
      operations: [],
      operation: {
        value: '',
        description: ''
      }
    }
  },
  methods: {
    async getOperations() {
      const response = await OperationsService.fetchOperations();
      this.operations = response.data.operations;
    },
    async submit() {
      if(this.operation.value !== '' && this.operation.description !== '') {
        await OperationsService.addNewOperation({
          value: this.operation.value,
          description: this.operation.description
        })
        console.log('submit')
      } else {
        console.log('Поля пустые')
      }
    }
  },
  mounted() {
    this.getOperations();
  }
}
</script>