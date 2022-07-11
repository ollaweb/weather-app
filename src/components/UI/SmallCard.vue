<template>
  <div class="small-card card">
    <div class="small-card__wrapper">
      <div class="small-card__date card-date">12 July</div>
      <div class="small-card__temperature card-temperature">
        <div class="card-temperature_now">23C</div>
      </div>
      <div class="small-card__clouds">
        <img src="https://images.squarespace-cdn.com/content/v1/5572b7b4e4b0a20071d407d4/1487090874274-FH2ZNWOTRU90UAF5TA2B/Weather+Targeting" alt="">
        <div>Cloudy</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    forecast: {
      type: Object,
      default: {}
    }
  }
}
</script>

<style lang="scss">
  .small-card {
    background-color: rgba(255, 255, 255, 0.6);
    &__clouds {
      text-align: center;
    }
  }
</style>
