<template>
  <label class="field">
    <span v-if="text" class="field__text">{{ text }}</span>
    <input
        v-if="type==='text' || type==='password'"
        :id="id"
        :type="type"
        :name="name"
        :required="isRequiredSet"
        class="field__tag"
        :class="typeClassSet + ' ' + (this.isError ? 'field__input_error': null)"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >

    <textarea
        v-if="type==='textarea'"
        class="field__textarea"
        :class="typeClassSet"
        :name="name"
        :placeholder="placeholder"
        :id="id"
        :required="isRequiredSet"
        :value="modelValue"
        @input="$emit('input', $event.target.value)"
    ></textarea>

    <imask-input
        v-if="type === 'text' && mask"
        class="field__input"
        :class="typeClassSet + ' ' + (this.isError ? 'field__input_error': null)"
        :mask="mask"
        :type="type"
        :name="name"
        :id="id"
        radix="."
        :required="isRequiredSet"
        :unmask="true"
        :value="modelValue"
        :placeholder="placeholder"
        @accept="(e) => $emit('input', e)"
    />

    <v-date-picker
        v-if="type === 'app-date'"
        :attributes="attributes"
        mode="date"
        :value="modelValue"
        :masks="dateMask"
        color="orange"
        :min-date="new Date()"
        :popover="{ placement: 'bottom', visibility: isDatePickerShow }"
        @dayclick='dayChoose'
    >
      <template v-slot="{ inputValue, inputEvents }">
        <div class="field__wrapper">
          <input
              class="field__tag"
              :placeholder="placeholder"
              :value="inputValue"
              v-on="inputEvents"
          >
          <div class="field__icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 2.813a.562.562 0 10-1.125 0v.937H7.875v-.938a.563.563 0 00-1.125 0v.938H4.312C3.588 3.75 3 4.338 3 5.063v15c0 .724.588 1.312 1.313 1.312h15c.724 0 1.312-.588 1.312-1.313v-15c0-.724-.588-1.312-1.313-1.312h-2.437v-.938zM19.5 8.25V5.062a.187.187 0 00-.188-.187h-2.437v.938a.562.562 0 11-1.125 0v-.938H7.875v.938a.563.563 0 01-1.125 0v-.938H4.312a.188.188 0 00-.187.188V8.25H19.5zM4.125 9.375H19.5v10.688a.187.187 0 01-.188.187h-15a.187.187 0 01-.187-.188V9.376z" fill="currentColor"/></svg>
          </div>
        </div>
      </template>
    </v-date-picker>
  </label>
</template>

<style lang="scss">
  .field {
    position: relative;
    display: block;

    &__text {
      display: block;
      font-size: 14px;
      margin: 0 0 4px;
      color: $colorGray__600;
    }

    &__tag {
      //border: 0;
      padding: 3px 10px;
      font-size: 16px;
      height: 40px;
      width: 100%;
      line-height: 40px;
      border-radius: 2px;
      color: $colorMain__900;
      border: 1px solid $colorGray__300;

      &:focus {
        border-color: $colorMain__500;
      }

      &::placeholder {
        color: $colorGray__300;
        font-weight: 300;
      }
    }

    &__wrapper {
      position: relative;
    }

    &__icon {
      color: $colorMain__900;
      width: 24px;
      height: 24px;
      display: block;
      position: absolute;
      right: 5px;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
    }
  }
</style>

<script>
import { IMaskComponent } from 'vue-imask';

export default {
  name: 'AppField',
  components: {
    'imask-input': IMaskComponent
  },
  props: {
    text: String,
    id: String,
    error: {
      type: [String, Boolean],
      default: false
    },
    isError: {
      default: false,
      type: Boolean
    },
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    modelValue: [String, Object, Number],
    mask: {
      type: String,
      default: ''
    },
    dateMask: {
      type: Object,
      default: function () {
        return {
          input: 'DD.MM.YYYY',
        }
      }
    }
  },
  data() {
    return {
      isDatePickerShow: 'hover'
    }
  },
  computed: {
    typeClassSet() {
      return this.type ? `field__input_${this.type}`: null;
    },
    isRequiredSet() {
      return this.error ? 'required' : null;
    },
    attributes() {
      return [
        {
          popover: {
            visibility: 'hover',
          },
        }
      ]
    }
  },
  emits: ['update:modelValue'],
  methods: {
    dayChoose(day) {
      this.isDatePickerShow = false;
      const dateFormat = Date.parse(day.date);
      setTimeout(() => {
        this.isDatePickerShow = 'hover';
      }, 50);
      console.log('test', Date.parse(day.date));
      this.$emit('update:modelValue', dateFormat)
    }
  }
}
</script>