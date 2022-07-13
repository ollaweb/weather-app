<template>
  <div class="card">
    <div class="card__wrapper">
      <div class="card__date card-date">
        <div>{{ date }}</div>
        <div>{{ time }}</div>
      </div>
      <div class="card__data">
        <h3 class="card__city">{{ weather.name }}</h3>
        <div class="card__temperature card-temperature">
          <p class="card-temperature_now">
            {{ Math.round(weather.main.temp) }} &#176;C
          </p>
          <div class="card-temperature_feels">
            <p>Feels like</p>
            <p>{{ Math.round(weather.main.feels_like) }} &#176;C</p>
          </div>
        </div>
        <div class="card__sun">
          <div>
            <p>Sunrise</p>
            <div>
              <img
                src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/1723310/sunrise-clipart-md.png"
                alt="sunrise"
              />
            </div>
            <p>{{ timeOfSunrise }}</p>
          </div>
          <div>
            <p>Sunset</p>
            <div>
              <img
                src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/78211/sunset-clipart-md.png"
                alt="sunset"
              />
            </div>
            <p>{{ timeOfSunset }}</p>
          </div>
        </div>
        <div class="card__condition">
          <div class="card__clouds card-clouds">
            {{ weather.weather[0].main }}
            <div class="card-clouds-image">
              <img :src="image" :alt="weather.weather[0].description" />
            </div>
          </div>
        </div>
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
    weather: {
      type: Object,
      default: {}
    }
  },
  computed: {
    image() {
      return getImageUrl(this.weather.weather[0].icon)
    },
    date() {
      return dateFromTimestamp(this.weather.dt)
    },
    time() {
      return timeFromTimestamp(this.weather.dt)
    },
    timeOfSunrise() {
      return timeFromTimestamp(this.weather.sys.sunrise)
    },
    timeOfSunset() {
      return timeFromTimestamp(this.weather.sys.sunset)
    }
  }
}
</script>

<style lang="scss">
.card {
  margin: 0 auto;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  box-shadow: 3px 3px 7px 1px rgba(65, 3, 83, 0.2);
  @media (min-width: 576px) {
    max-width: 70%;
  }
  @media (min-width: 992px) {
    max-width: 50%;
  }
  @media (min-width: 1200px) {
    max-width: 40%;
  }
  &__data {
    padding: 0 10%;
    @media (min-width: 400px) {
      padding: 0 20%;
    }
    @media (min-width: 576px) {
      padding: 0 50px;
    }
    @media (min-width: 768px) {
      padding: 0 80px;
    }
  }
  &__city {
    margin-top: 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 150%;
    text-transform: uppercase;
    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
  &__sun {
    margin-top: 24px;
    display: flex;
    justify-content: space-around;
    & > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      &:not(:last-child) {
        margin-right: 20px;
      }
      & > div {
        margin-top: 8px;
        margin-bottom: 5px;
        width: 70px;
      }
    }
  }
  &__condition {
    margin-top: 24px;
    text-align: center;
  }
}
.card-date {
  text-align: right;
  & div {
    &:first-child {
      color: #a15c76;
      font-size: 18px;
      @media (min-width: 992px) {
        font-size: 20px;
      }
    }
    &:last-child {
      font-size: 16px;
      line-height: 100%;
      @media (min-width: 992px) {
        font-size: 18px;
      }
    }
  }
}
.card-temperature {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &_now {
    margin-right: 15px;
    font-weight: 900;
    font-size: 38px;
    line-height: 150%;
    @media (min-width: 1200px) {
      font-size: 48px;
    }
  }
}
.card-clouds {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}
.card-clouds-image {
  background-color: rgba(177, 140, 154, 0.5);
  border-radius: 100%;
}
</style>
