<template lang="pug">
q-page(class="q-pa-md q-gutter-y-lg")
  SearchText
  Card
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
};
</script>
