<template lang="pug">
input(id="searchtxt" @input="fodase($event)" v-model="teste")
</template>

<script>
export default {
  data() {
    return {
      teste: '',
    };
  },

  watch: {
    teste() {
      console.log(this.teste);
    },
  },

  methods: {
    fodase(value) {
      console.log(value.target.value);
    },
  },

  mounted() {
    const input = document.getElementById('searchtxt');

    const options = {
      types: ['(cities)'],
      bounds: new google.maps.LatLngBounds(new google.maps.LatLng(-23.5489, -46.6388)),
    };

    // eslint-disable-next-line no-new
    new google.maps.places.Autocomplete(input, options);
  },
};
</script>
