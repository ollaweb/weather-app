<template>
  <div class="small-card card">
    <div class="small-card__wrapper">
      <div class="small-card__date card-date">
        <div>{{ date }}</div>
        <div>{{ time }}</div>
      </div>
      <div class="small-card__temperature card-temperature">
        <div class="card-temperature_now">
          {{ Math.round(forecast.main.temp) }} &#176;C
        </div>
      </div>
      <div class="small-card__clouds">
        <div class="card-clouds-image">
          <img :src="image" :alt="forecast.weather[0].description" />
        </div>
        <div>{{ forecast.weather[0].main }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  dateFromTimestamp,
  timeFromTimestamp
} from '@/utils/formatFromTimestamp.js'
import { getImageUrl } from '@/utils/getImageUrl.js'

export default {
  props: {
    forecast: {
      type: Object,
      default: {}
    }
  },
  computed: {
    date() {
      return dateFromTimestamp(this.forecast.dt)
    },
    time() {
      return timeFromTimestamp(this.forecast.dt)
    },
    image() {
      return getImageUrl(this.forecast.weather[0].icon)
    }
  }
}
</script>

<style lang="scss">
.small-card {
  background-color: rgba(255, 255, 255, 0.6);
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__clouds {
    text-align: center;
    & .card-clouds-image {
      margin: 0 auto;
      max-width: 50px;
    }
  }
}
</style>
