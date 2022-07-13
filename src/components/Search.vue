<template>
  <div class="search">
    <div class="search__container container">
      <form @submit.prevent="search" class="search__form">
        <AppInput
          v-model="searchText"
          @updateInput="updateInput"
          placeholder="Type the city..."
        />
        <AppButton type="submit">Search</AppButton>
      </form>
      <div class="search__recent">
        <RecentSearch
          v-if="recentSearch.length != 0"
          :recentSearch="recentSearch"
          @selectRecent="searchByRecentSearch"
        />
      </div>
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
    updateInput(city) {
      this.searchText = city.trim()
    },
    search() {
      this.$emit('updateInput', this.searchText)
      this.searchText = ''
    },
    searchByRecentSearch(city) {
      this.searchText = city
      this.$emit('updateInput', this.searchText)
      this.searchText = ''
    }
  }
}
</script>

<style lang="scss">
.search {
  padding: 20px 0 10px;
  @media (min-width: 576px) {
    padding: 35px 0 0;
  }
  &__form {
    margin: 0 auto;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
  }
  &__recent {
    margin-top: 6px;
  }
}
</style>
