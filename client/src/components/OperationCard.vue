<script>
export default {
  name: 'operation-card',
  props: {
    data: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
  .operation-card {
    display: flex;
  }
</style>

<template>
  <tr class="operation-card">
    <div class="operation-card__date">02.12.2021</div>
    <div class="operation-card__type">Расход</div>
    <div class="operation-card__value">{{ data.value }}</div>
    <div class="operation-card__account">Card (ВТБ)</div>
    <div class="operation-card__category">{{ data.description }}</div>
    <div class="operation-card__comments">Комментарий и метка</div>
  </tr>
</template>