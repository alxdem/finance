<script>
export default {
  name: 'operations-table',
  props: {
    list: Array
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.operations-table {
  width: 100%;
  background-color: $colorWhite;
  border-collapse: collapse;

  &__item {
    border: 1px solid $colorGray__200;

    &:nth-child(2n) {
      background-color: $colorMain__100;
    }
  }

  &__bite {
    padding: 8px 12px;
    font-size: 15px;
    border: 1px solid $colorGray__200;

    &_date {
      width: 110px;
      text-align: center;
    }

    &_type {
      width: 80px;
    }

    &_value {
      width: 150px;
      text-align: right;
      padding-right: 22px;
    }
  }
}
</style>

<template>
  <table class="operations-table">
    <tr class="operations-table__item" v-for="(operation) in list" :key="operation._id">
      <td class="operations-table__bite operations-table__bite_date">02.12.2021</td>
      <td class="operations-table__bite operations-table__bite_type">Расход</td>
      <td class="operations-table__bite operations-table__bite_value">{{ operation.value }}</td>
      <td class="operations-table__bite operations-table__bite_account">Card (ВТБ)</td>
      <td class="operations-table__bite operations-table__bite_category">{{ operation.description }}</td>
      <td class="operations-table__bite operations-table__bite_comments">Комментарий и метка</td>
    </tr>

    <tr class="operations-table__item" key="323">
      <td class="operations-table__bite operations-table__bite_date">02.12.2021</td>
      <td class="operations-table__bite operations-table__bite_type">Доход</td>
      <td class="operations-table__bite operations-table__bite_value">12760</td>
      <td class="operations-table__bite operations-table__bite_account">Card (Сбербанк)</td>
      <td class="operations-table__bite operations-table__bite_category">Техника</td>
      <td class="operations-table__bite operations-table__bite_comments"></td>
    </tr>

    <tr class="operations-table__item" key="32f33">
      <td class="operations-table__bite operations-table__bite_date">27.09.2021</td>
      <td class="operations-table__bite operations-table__bite_type">Расход</td>
      <td class="operations-table__bite operations-table__bite_value">8640</td>
      <td class="operations-table__bite operations-table__bite_account">Наличка</td>
      <td class="operations-table__bite operations-table__bite_category">Коммуналка</td>
      <td class="operations-table__bite operations-table__bite_comments">За пол месяца</td>
    </tr>
  </table>
</template>