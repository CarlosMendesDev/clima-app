<template lang="pug">
q-page(class="q-pa-md q-gutter-y-lg")
  SearchText
  Card(
    :temperature="Math.floor(currentTemp.day) || 0"
    :icon="sourceImage()"
    :description="currentWeather.description"
  )
  TemperaturesTable
</template>

<script>
import Card from '../components/Card/Card';
import SearchText from '../components/UI/SearchText';
import TemperaturesTable from '../components/Section/TemperaturesTable';

export default {
  name: 'PageIndex',

  components: {
    Card,
    SearchText,
    TemperaturesTable,
  },

  data() {
    return {
    };
  },

  computed: {
    currentCity: {
      get() { return this.$store.getters['app/getCurrentCity']; },
    },
    prevision: {
      get() { return JSON.parse(JSON.stringify(this.$store.getters['app/getPrevision'])); },
    },
    currentWeather: {
      get() {
        return this.prevision.length > 0
          ? this.prevision[0].weather[0]
          : {};
      },
    },
    currentTemp: {
      get() {
        return this.prevision.length > 0
          ? this.prevision[0].temp
          : {};
      },
    },
  },

  methods: {
    getCurrentGeolocation() {
      navigator.geolocation.getCurrentPosition(async (position) => {
        this.$q.loading.show();

        const { latitude, longitude } = position.coords;

        await this.$store.dispatch('app/getCurrentGeolocation', { latitude, longitude });

        this.$q.loading.hide();
      });
    },
    sourceImage() {
      const { icon } = this.currentWeather;

      return `http://openweathermap.org/img/wn/${icon}@4x.png`;
    },
  },

  mounted() {
    this.getCurrentGeolocation();
  },
};
</script>
