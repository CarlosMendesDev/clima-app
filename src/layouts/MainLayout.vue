<template lang="pug">
q-layout(view="lHh Lpr lFf")
  Header
  q-page-container
    router-view
</template>

<script>
import Header from '../components/Header/Header';
import Card from '../components/Card/Card';

export default {
  name: 'MainLayout',

  components: {
    Header,
    Card,
  },

  data() {
    return {
    };
  },
};

</script>
