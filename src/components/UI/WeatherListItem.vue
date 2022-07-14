<template>
  <li class="list-item">
    <div class="list-item__date">
      <!-- <div class="list-item__day">{{ date }}</div> -->
      <div class="list-item__time">{{ time }}</div>
    </div>
    <div class="list-item__weather">
      <div class="list-item__temperature">
        {{ Math.round(forecast.main.temp) }} &#176;C
      </div>
    </div>
    <div class="list-item__clouds">
      <div class="list-item__image">
        <img :src="image" :alt="forecast.weather[0].description" />
      </div>
      <div class="list-item__descr">{{ forecast.weather[0].main }}</div>
    </div>
  </li>
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
.list-item {
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
  &__weather {
    text-align: center;
  }
  &__clouds {
    flex: 0 1 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (min-width: 992px) {
      flex: 0 1 30%;
    }
  }
  &__image {
    width: 40px;
    background-color: rgba(177, 140, 154, 0.5);
    border-radius: 100%;
  }
}
</style>
