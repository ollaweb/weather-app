<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__date"><span>{{date}}</span><span>{{time}}</span></div>
      <h3 class="card__city">{{weather.name}}</h3>
      <div class="card__temperature">
        <p class="card__temperature_now">{{Math.round(weather.main.temp)}} &#176;C</p>
        <div class="card__temperature_feels">
          <p>Feels like</p>
          <p>{{Math.round(weather.main.feels_like)}} &#176;C</p>
        </div>
      </div>
      <div class="card__condition">
        <div class="card__clouds card-clouds">
          {{weather.weather[0].main}}
          <div class="card-clouds__image">
            <img :src="getImageUrl" :alt="weather.weather[0].description">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    weather: {
      type: Object,
      default: {}
    }
  },
  computed: {
    getImageUrl() {
      return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`
    },
    date() {
        return new Date(this.weather.dt*1000).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric"
      })
    },
    time() {
      return new Date(this.weather.dt*1000).toLocaleTimeString("ru", {
        hour: "numeric",
        minute: "numeric",
      })
    }
  }
}
</script>

<style lang="scss">
  .card {
    margin: 0 auto;
    padding: 20px 80px;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    box-shadow: 3px 3px 7px 1px rgba(65, 3, 83, 0.2);
    @media (min-width: 768px) {
      max-width: 40%;
    }
    &__date {
      text-align: right;
      & span{
        display: inline-block;
        &:first-child {
          margin-right: 10px;
        }
      }
    }
    &__city {
      margin-top: 20px;
      font-weight: 600;
      font-size: 28px;
      line-height: 150%;
      text-transform: uppercase;
    }
    &__temperature {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &_now {
        font-weight: 900;
        font-size: 48px;
        line-height: 150%;
      }
    }
    &__condition {
      margin-top: 15px;
      text-align: center;
    }
  }

  .card-clouds {
    display: flex;
    gap: 20px;
    justify-content: center;
    align-items: center;
    &__image {
      background-color: rgba(177, 140, 154, 0.5);
      border-radius: 100%;
    }
  }
</style>
