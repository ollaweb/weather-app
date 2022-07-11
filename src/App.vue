<template>
  <Header/>
  <main>
    <Search @updateInput="handleSearch" :recentSearch="recentSearch"/>
    <WeatherInfo v-if="weather" :weather="weather"></WeatherInfo>
    <Forecast v-if="forecast" :forecast="forecast"></Forecast>
    <!-- <div v-if="forecast">
      <p v-for="date in forecast.list" :key="date.dt">{{new Date(date.dt*1000).toLocaleString().toString()}}</p>
    </div> -->
  </main>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import WeatherInfo from '@/components/WeatherInfo.vue'
import Forecast from '@/components/Forecast.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    WeatherInfo,
    Forecast
  },
  data() {
    return {
      API_KEY: '5201204ba6b831682df390b181d676b1',
      url: 'https://api.openweathermap.org/data/2.5/',
      search: '',
      recentSearch: [],
      weather: null,
      forecast: null,

    }
  },
  mounted() {
    this.getFromLocalStorage();
  },
  watch: {
    recentSearch: {
      handler(updatedList) {
        localStorage.setItem('recentSearch', JSON.stringify(updatedList))
      },
      deep: true
    }
  },
  methods: {
    handleSearch(data) {
      this.search = data.toLowerCase()
      this.getData()
      this.setRecentSearch()
    },
    async getData() {
      if(this.search) {
        const getWeather = axios.get(`${this.url}weather?q=${this.search}&appid=${this.API_KEY}&units=metric`)
        const getForecast = axios.get(`${this.url}forecast?q=${this.search}&appid=${this.API_KEY}&units=metric`)

        await Promise.all([getWeather, getForecast])
                      .then(([{data: weather} , {data: forecast}]) => {
                        this.weather = weather
                        this.forecast = forecast
                        console.log(this.weather)
                        console.log(this.forecast)
                      })
      }
      console.log(this.forecast.list[0].main.temp)
    },
    setRecentSearch() {
      if(!this.recentSearch.includes(this.search)) {
        this.recentSearch.push(this.search)
        if(this.recentSearch.length > 3) {
          this.recentSearch.shift()
        }
      }
    },
    getFromLocalStorage() {
      const localRecentSearch = localStorage.getItem('recentSearch');
      if (localRecentSearch && localRecentSearch.length !== 2) {
        this.recentSearch = JSON.parse(localRecentSearch);
      }
    },
  }
}
</script>

<style lang="scss">
  @import '@/assets/scss/main.scss';
  #app {
    min-height: 100vh;
    background-image: url('@/assets/img/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 10%;
  }

</style>
