<template lang="pug">
q-page(class="q-pa-md q-gutter-y-lg")
  Card
  TemperaturesTable
</template>

<script>
import Card from '../components/Card/Card';
import TemperaturesTable from '../components/Section/TemperaturesTable';

export default {
  name: 'PageIndex',

  components: {
    Card,
    TemperaturesTable,
  },
};
</script>
