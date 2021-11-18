<template lang="pug">
div
  q-table(
    title="Previsão"
    :rows="rows"
    :columns="columns"
    row-key="name"
    hide-header
    hide-bottom
    class="text-white bg-primary"
    :rows-per-page-options="[7]"
  )
    template(
      #body-cell="{ row, col }"
    )
      q-td(
        :class="'text-' + col.align"
        v-bind="col.bindings"
      )
        span(
          v-if="!col.isIcon"
          class="text-subtitle2"
        )
          | {{ row[col.name] }}
        q-img(
          v-else
          :src="sourceImage(row[col.name])"
        )
</template>

<script>
export default {
  data() {
    return {
      columns: [
        {
          name: 'weekDays',
          align: 'left',
          field: 'weekDays',
        },
        {
          name: 'iconTemperature',
          align: 'center',
          isIcon: true,
          field: 'iconTemperature',
        },
        {
          name: 'maxTemperature',
          align: 'right',
          field: 'maxTemperature',
        },
        {
          name: 'minTemperature',
          align: 'center',
          bindings: {
            class: 'text-blue',
          },
          field: 'minTemperature',
        },
      ],
    };
  },

  computed: {
    rows: {
      get() { return JSON.parse(JSON.stringify(this.$store.getters['app/getRows'])); },
    },
  },

  methods: {
    sourceImage(icon) {
      return `http://openweathermap.org/img/wn/${icon}@4x.png`;
    },
  },
};
</script>
