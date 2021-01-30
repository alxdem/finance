<template>
  <div class="sidebar">
    <div class="sidebar__header">
      Logo
    </div>
    <div class="sidebar__section">
      <AppButton
          text="Добавить в учет"
          type="button"
          isFit
          @click.prevent="addOperation"
      />
    </div>
    <section class="sidebar__section">
      <div class="sidebar__section-header">
        <h2 class="sidebar__section-title">Счета</h2>
        <div class="sidebar__section-value">64 984 р</div>
      </div>
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
    <section class="sidebar__section">
      <div class="sidebar__section-header">
        <h2 class="sidebar__section-title">Имущество</h2>
        <div class="sidebar__section-value">355 984 р</div>
      </div>
      <div class="sidebar__row">
        <div class="sidebar__name">Финансовая подушка</div>
        <div class="sidebar__value">145 000 р</div>
      </div>
      <div class="sidebar__row">
        <div class="sidebar__name">Инвестиции</div>
        <div class="sidebar__value">210 700 р</div>
      </div>
    </section>
    <section class="sidebar__section">
      <div class="sidebar__section-header">
        <h2 class="sidebar__section-title">Мой капитал</h2>
        <div class="sidebar__section-value">410 484 р</div>
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

      &:not(:last-child) {
        border-bottom: 1px solid $colorGray__200;
      }

      &-header {
        display: flex;
        margin: 0 0 15px;
        justify-content: space-between;
        align-items: baseline;
      }

      &-title {
        font-size: 20px;
        line-height: 22px;
      }

      &-value {
        font-size: 18px;
        font-weight: 700;
        line-height: 22px;
      }
    }

    &__row {
      display: flex;
      align-items: center;
      padding: 7px 0;
      justify-content: space-between;
    }

    &__name {
      font-size: 16px;
      line-height: 18px;
    }

    &__value {
      font-size: 16px;
      line-height: 18px;
    }
  }
</style>

<script>
import AppButton from '@/components/form/AppButton';

export default {
  name: 'sidebar',
  components: {
    AppButton
  },
  methods: {
    addOperation() {
      this.$store.commit('modalToggle', !this.$store.state.isModalShow);
    }
  }
}
</script>