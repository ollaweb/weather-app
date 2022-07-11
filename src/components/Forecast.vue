<template>
  <section class="forecast">
    <div class="forecast__container container">
      <h2 class="forecast__title section-title">Forecast for 5 days:</h2>
      <div class="forecast__info">
        <SmallCard :forecast="forecast"></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
        <SmallCard></SmallCard>
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
  }
}
</script>

<style lang="scss">
  .forecast {
    &__info {
      display: flex;
      gap: 15px;
      justify-content: space-between;
      align-items: center;
    }
  }
</style>
