<template>
  <div class="sidebar">
    <div class="sidebar__header">
      Logo
    </div>
    <div class="sidebar__section">
      <AppButton
          text="Добавить в учет"
          type="submit"
          isFit
      />
    </div>
    <section class="sidebar__section">
      <h2 class="sidebar__section-title">Счета</h2>
      <div class="sidebar__row">
        <div class="sidebar__name">ВТБ Копилка</div>
        <div class="sidebar__value">19 765 р</div>
      </div>
      <div class="sidebar__row">
        <div class="sidebar__name">Сбербанк</div>
        <div class="sidebar__value">38 120 р</div>
      </div>
      <div class="sidebar__row">
        <div class="sidebar__name">Наличные</div>
        <div class="sidebar__value">7 820 р</div>
      </div>
      <div class="sidebar__row">
        <div class="sidebar__name">Наличные</div>
        <div class="sidebar__value">16 820 р</div>
      </div>
    </section>
  </div>
</template>
<style lang="scss">
  .sidebar {
    background-color: $colorWhite;
    height: 100%;

    &__header {
      height: $headerHeight;
      border-bottom: 1px solid $colorGray__200;
    }

    &__section {
      padding: 25px 15px;
      border-bottom: 1px solid $colorGray__200;
    }

    &__row {
      display: flex;
      align-items: center;
      padding: 5px 10px;
      justify-content: space-between;
    }

    &__name {

    }
  }
</style>

<script>
import AppButton from '@/components/form/AppButton';
export default {
  name: 'sidebar',
  components: {
    AppButton
  }
}
</script>