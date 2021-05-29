<template>
  <h1>Operations</h1>
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
  data() {
    return {
      operations: [],
      operation: {
        userId: null,
        value: '',
        description: ''
      }
    }
  },
  created() {
    this.getOperations().then((res) => {
      console.log('res', res)
      this.operations = res.data;
    });

  },
  methods: {
    async getOperations() {
      return await OperationsService.fetchOperations();
    },
  }
}
</script>