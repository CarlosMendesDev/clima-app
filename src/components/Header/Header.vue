<template lang="pug">
q-header(class="q-pa-sm" elevated)
  q-toolbar(class="flex position-relative")
    q-btn(dense flat round icon="menu" class="q-mx-sm")
    div(class="text-center centralizeTitle")
      div
        div
          | {{ currentCity }}
        div
          | {{ currentTime }}
</template>

<script>
export default {
  data() {
    return {
      currentTime: null,
      currentCity: 'Amsterdã',
    };
  },

  methods: {
    getCurrentTime() {
      const date = new Date();

      this.currentTime = [date.getHours(), date.getMinutes()].join(':');
    },
    async foundGeolocation(posicao) {
      const { latitude, longitude } = posicao.coords;

      console.log(latitude, longitude);
    },
    getCurrentGeolocation() {
      navigator.geolocation.getCurrentPosition(this.foundGeolocation);
    },
  },

  mounted() {
    this.getCurrentTime();
    this.getCurrentGeolocation();
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
