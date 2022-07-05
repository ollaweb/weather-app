<template>
  <button
    class="btn"
    :class="btnClass"
    :type="btnType">
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btn-primary'
    },
    btnType: {
      type: String,
      default: 'button'
    }
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/utils/vars.scss';

  .btn {
    padding: 10px 30px;
    border-radius: 5px;
    cursor: pointer;
    &-primary {
      background: $primary-color;
      color: $default-color;
    }
    &-white {
      background: $default-color;
      color: $mainFontColor;
      border: 0.5px solid $primary-color;
    }
  }
</style>
