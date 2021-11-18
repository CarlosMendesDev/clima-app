<template lang="pug">
q-header(class="q-pa-sm" elevated)
  q-toolbar(class="flex position-relative")
    div(class="text-center centralizeTitle")
      div
        div
          | {{ currentCity }}
        div
          | {{ currentTime }}
</template>

<script>
import { api } from 'boot/axios';

export default {
  data() {
    return {
      currentTime: null,
    };
  },

  computed: {
    currentCity: {
      get() { return this.$store.getters['app/getCurrentCity']; },
    },
  },

  methods: {
    startClock() {
      setInterval(() => {
        const date = new Date();

        this.currentTime = [
          date.getHours().toString().padStart(2, '0'),
          date.getMinutes().toString().padStart(2, '0'),
        ].join(':');
      }, 1000);
    },
    async foundGeolocation(posicao) {
      console.log(posicao);

      const key = 'AIzaSyChrBKuU9N52057WYgkODtF01xjrXJvYoc';

      const call = await api.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=123&inputtype=textquery&fields=name%2Cgeometry&key=${key}`);

      console.log(call);
    },
  },

  mounted() {
    this.startClock();
  },
};
</script>

<style lang="scss" scoped>
.centralizeTitle {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  left: 0;
}
</style>
