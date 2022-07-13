<template>
  <section class="forecast">
    <div class="forecast__container container">
      <h2 class="forecast__title section-title">Forecast for 5 days:</h2>
      <div class="forecast__info">
        <SmallCard
          v-for="forecast in forecastForFiveDays"
          :key="forecast.dt"
          :forecast="forecast"
        ></SmallCard>
      </div>
    </div>
  </section>
</template>

<script>
import SmallCard from '@/components/UI/SmallCard.vue'

export default {
  components: {
    SmallCard
  },
  props: {
    forecast: {
      type: Object,
      required: true
    }
  },
  computed: {
    forecastForFiveDays() {
      return this.forecast.filter(
        item =>
          new Date(item.dt * 1000).getHours() == 12 &&
          new Date(item.dt * 1000).getDate() != new Date().getDate()
      )
    }
  }
}
</script>

<style lang="scss">
.forecast {
  padding: 20px 0;
  &__info {
    margin-top: 12px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    @media (min-width: 576px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 992px) {
      display: flex;
      gap: 15px;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
