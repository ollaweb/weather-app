<template>
  <Header/>
  <main>
    <Search @updateInput="handleSearch"/>
    <WeatherInfo v-if="weather" :weather="weather"></WeatherInfo>
  </main>
</template>

<script>
import axios from 'axios'
import Header from '@/components/Header.vue'
import Search from '@/components/Search.vue'
import WeatherInfo from '@/components/WeatherInfo.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search,
    WeatherInfo
  },
  data() {
    return {
      API_KEY: '5201204ba6b831682df390b181d676b1',
      url: 'https://api.openweathermap.org/data/2.5/weather',
      search: '',
      weather: null
    }
  },
  methods: {
    handleSearch(data) {
      this.search = data.trim().toLowerCase()
      axios.get(`${this.url}?q=${this.search}&appid=${this.API_KEY}&units=metric`)
        .then(res => {
          return res.data
        })
        .then(this.setData)
        .catch(e => console.log(e))
    },
    setData(res) {
      this.weather = res
      console.log(this.weather)
    }
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
