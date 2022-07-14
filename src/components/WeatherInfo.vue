<template>
  <section class="weather">
    <div class="weather__container container">
      <h2 class="weather__title section-title">
        Weather in {{ weather.name }} for {{ date }}
      </h2>
      <div class="weather__info">
        <div class="weather__card-wrapper">
          <Card :weather="weather"></Card>
        </div>
        <div class="weather__forecast-wrapper">
          <ForecastByHours :forecast="forecast"></ForecastByHours>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/UI/Card.vue'
import ForecastByHours from '@/components/ForecastByHours.vue'
import { dateFromTimestamp } from '@/utils/formatFromTimestamp.js'

export default {
  props: {
    weather: {
      type: Object,
      default: {}
    },
    forecast: {
      type: Object,
      default: {}
    }
  },
  components: {
    Card,
    ForecastByHours
  },
  computed: {
    date() {
      return dateFromTimestamp(this.weather.dt)
    }
  }
}
</script>


<style lang="scss">
.weather {
  padding: 20px 0 0;
  @media (min-width: 768px) {
    padding: 20px 0;
  }
  &__info {
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  &__card-wrapper {
    flex: 0 1 50%;
    @media (min-width: 992px) {
      flex: 0 1 40%;
    }
  }
  &__forecast-wrapper {
    flex: 0 1 50%;
    @media (min-width: 992px) {
      flex: 0 1 60%;
    }
  }
}
</style>
