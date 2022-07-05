<template>
  <div class="card">
    <div class="card__wrapper">
      <p class="card__date">05.07.2022</p>
      <h3 class="card__city">Moscow</h3>
      <p class="card__temperature">+30 C</p>
    </div>
  </div>
</template>

<style lang="scss">
  .card {
    margin: 0 auto;
    padding: 20px 10px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    box-shadow: 3px 3px 7px 1px rgba(65, 3, 83, 0.2);
    @media (min-width: 768px) {
      max-width: 40%;
    }
    &__date {
      font-weight: 200;
      font-size: 18px;
      line-height: 150%;
      text-align: right;
    }
    &__city {
      margin-top: 20px;
      font-weight: 600;
      font-size: 28px;
      line-height: 150%;
      text-align: center;
      text-transform: uppercase;
    }
    &__temperature {
      font-weight: 900;
      font-size: 48px;
      line-height: 150%;
      text-align: center;
    }
  }
</style>
