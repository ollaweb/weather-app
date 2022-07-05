<template>
  <section class="weather">
    <div class="weather__container container">
      <h2 class="weather__title">Information about the city: {{weather.name}}</h2>
      <div class="weather__info">
        <Card :weather="weather"></Card>
      </div>
    </div>
  </section>
</template>

<script>
import Card from '@/components/UI/Card.vue';

export default {
  props: {
    weather: {
      type: Object,
      default: {}
    }
  },
  components: {
    Card
  }
}
</script>


<style lang="scss">
  .weather {
    padding: 20px 0 0;
    @media (min-width: 768px) {
      padding: 20px 0;
    }
    &__title {
      font-weight: 200;
      font-size: 20px;
      line-height: 150%;
      text-align: center;
      @media (min-width: 576px) {
        font-size: 30px;
      }
      @media (min-width: 768px) {
        font-size: 38px;
      }
    }
    &__info {
      padding: 10px 0;
    }
  }
</style>
