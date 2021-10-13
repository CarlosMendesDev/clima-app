<template lang="pug">
q-header(class="q-pa-sm" elevated)
  q-toolbar(class="flex justify-between")
    q-btn(dense flat round icon="menu" class="q-mx-sm")
    div(class="text-center")
      div
        | {{ currentCity }}
      div
        | {{ currentTime }}
    q-btn(dense flat round icon="search" class="q-mx-sm")
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
  },

  mounted() {
    this.getCurrentTime();
  },
};
</script>
