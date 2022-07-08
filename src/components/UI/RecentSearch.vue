<template>
  <div class="recent-search">
    <p :recentSearch="recentSearch" class="recent-search__text">Recent searches: <span @click="selectRecent" v-for="(search, index) in recentSearch" :key="index">{{search}}</span></p>
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
      selectSearch :''
    }
  },
  methods: {
    selectRecent() {
      // this.selectSearch = this.search
      // this.$emit('selectRecent', this.selectSearch)
      console.log(this.$el.textContent)
    }
  }
}
</script>

<style lang="scss">
  .recent-search {
    padding-left: 12px;
    &__text {
      & span {
        margin: 0 5px;
        text-decoration: underline;
        color: #B18C9A;
        cursor: pointer;
      }
    }
  }
</style>
