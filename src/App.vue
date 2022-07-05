<template>
  <Header/>
  <main>
    <Search @updateInput="handleSearch"/>
    <WeatherInfo :city="search"></WeatherInfo>
  </main>
</template>

<script>
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
      url: 'http://api.openweathermap.org/data/2.5/',
      search: ''
    }
  },
  methods: {
    handleSearch(data) {
      this.search = data
      console.log(this.search)
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
