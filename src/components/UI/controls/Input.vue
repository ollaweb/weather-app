<template>
  <input
    :placeholder="placeholder"
    :type="type"
    :value="modelValue"
    @input="$emit('updateInput', $event.target.value)"
    class="search-input">
</template>

<script>

export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search...'
    },
    type: {
      type: String,
      default: 'text'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    }
  },
}
</script>

<style lang="scss">
  @import '@/assets/scss/utils/vars.scss';

  .search-input {
      padding: 10px;
      width: 100%;
      border: 1px solid rgba(33,53,71,0.25);
      border-radius: 10px;
    }
</style>
