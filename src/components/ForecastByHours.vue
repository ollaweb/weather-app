<template>
  <div class="by-hours">
    <ul class="by-hours__list">
      <WeatherListItem
        v-for="forecast in forecastForHours"
        :key="forecast.dt"
        :forecast="forecast"
      ></WeatherListItem>
    </ul>
  </div>
</template>

<script>
import WeatherListItem from '@/components/UI/WeatherListItem.vue'
export default {
  props: {
    forecast: {
      type: Object,
      default: {}
    }
  },
  components: {
    WeatherListItem
  },
  computed: {
    forecastForHours() {
      return this.forecast.filter(
        item => new Date(item.dt * 1000).getDate() == new Date().getDate()
      )
    }
  }
}
</script>

<style lang="scss">
.by-hours {
  &__list {
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.8);
  }
}
</style>
