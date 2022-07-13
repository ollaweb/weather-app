<template>
  <div class="small-card">
    <div class="small-card__wrapper">
      <div class="small-card__date card-date">
        <div>{{ date }}</div>
        <div>{{ time }}</div>
      </div>
      <div class="small-card__temperature">
        <div class="small-card__temperature_value">
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
  margin: 0 auto;
  padding: 20px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 3px 3px 7px 1px rgba(65, 3, 83, 0.2);
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__date {
    align-self: flex-end;
  }
  &__temperature {
    margin-top: 20px;
    &_value {
      font-weight: 700;
      font-size: 24px;
      @media (min-width: 768px) {
        font-size: 32px;
      }
    }
  }
  &__clouds {
    margin-top: 15px;
    text-align: center;
    & div:last-child {
      margin-top: 15px;
      font-size: 18px;
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
    & .card-clouds-image {
      margin: 0 auto;
      max-width: 50px;
    }
  }
}
</style>
