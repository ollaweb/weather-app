<template>
  <div class="recent-search">
    <p :recentSearch="recentSearch" class="recent-search__text">
      Recent&nbsp;searches:
      <span
        @click="selectRecent"
        v-for="(search, index) in recentSearch"
        :key="index"
        >{{ search[0].toUpperCase() + search.slice(1) }}</span
      >
    </p>
  </div>
</template>

<script>
export default {
  props: {
    recentSearch: {
      type: Array
    }
  },
  data() {
    return {
      selectSearch: ''
    }
  },
  methods: {
    selectRecent(e) {
      this.$emit('selectRecent', e.target.textContent)
    }
  }
}
</script>

<style lang="scss">
.recent-search {
  padding-left: 12px;
  &__text {
    display: flex;
    flex-wrap: wrap;
    & span {
      margin: 0 5px;
      text-decoration: underline;
      color: #a15c76;
      cursor: pointer;
    }
  }
}
</style>
