<template>
  <div class="search">
    <div class="search__container container">
      <form @submit.prevent="search" class="search__form">
        <AppInput v-model="searchText" @updateInput="updateInput" placeholder="Type the city..."/>
        <AppButton type="submit">Search</AppButton>
      </form>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/UI/controls/Input.vue'
import AppButton from '@/components/UI/controls/Button.vue'

export default {
  components: {
    AppInput,
    AppButton
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    updateInput(text) {
      this.searchText = text
    },
    search() {
      this.$emit('updateInput', this.searchText)
      this.searchText = ''
    }
  }

}
</script>

<style lang="scss">
  .search {
    padding: 10px 0;
    @media (min-width: 576px) {
      padding: 35px 0;
    }
    &__form {
      margin: 0 auto;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>
