<template>
  <div class="recent-search">
    <p :recentSearch="recentSearch">Recent searches: <span v-for="(search, index) in recentSearch" :key="index">{{search}}</span></p>
  </div>
</template>

<script>
export default {
  props: {
    recentSearch: {
      type: Array
    }
  }
}
</script>

<style lang="scss">
  .recent-search {
    padding-left: 12px;
  }
</style>
