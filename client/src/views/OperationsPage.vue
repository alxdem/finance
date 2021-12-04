<template>
  <h1>Operations</h1>
  <section class="list" v-if="operations && operations.length">
    <operations-table :list="operations"/>
  </section>

  <section class="list" v-else>
    <p>Записи не найдены</p>
  </section>

</template>

<script>
import OperationsService from '@/services/OperationsService';
import OperationsTable from '@/components/OperationsTable';

export default {
  name: 'Operations',
  components: {
    OperationsTable
  },
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
    this.getOperations()
        .then((res) => {
          this.operations = res.data;
          console.log(this.operations)
        });

  },
  methods: {
    async getOperations() {
      return await OperationsService.fetchOperations();
    },
  }
}
</script>