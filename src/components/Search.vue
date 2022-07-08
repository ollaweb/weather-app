<template>
  <div class="search">
    <div class="search__container container">
      <form @submit.prevent="search" class="search__form">
        <AppInput v-model="searchText" @updateInput="updateInput" placeholder="Type the city..."/>
        <AppButton type="submit">Search</AppButton>
      </form>
      <RecentSearch v-if="recentSearch.length !=0" :recentSearch="recentSearch"/>
    </div>
  </div>
</template>

<script>
import AppInput from '@/components/UI/controls/Input.vue'
import AppButton from '@/components/UI/controls/Button.vue'
import RecentSearch from '@/components/UI/RecentSearch.vue'

export default {
  components: {
    AppInput,
    AppButton,
    RecentSearch
  },
  props: {
    recentSearch: {
      type: Array
    }
  },
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    updateInput(text) {
      this.searchText = text.trim().toLowerCase()
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
