<template lang="pug">
div
  q-table(
    title="Previsão"
    :rows="rows"
    :columns="columns"
    row-key="name"
    hide-header
    hide-bottom
    class="text-primary"
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
        q-icon(
          v-else
          :name="row[col.name]"
          size="1.30rem"
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
          align: 'left',
          bindings: {
            class: 'text-blue',
          },
          field: 'minTemperature',
        },
      ],
      rows: [
        {
          weekDays: 'Quinta',
          iconTemperature: 'fas fa-cloud-sun',
          maxTemperature: '26°',
          minTemperature: '16°',
        },
        {
          weekDays: 'Sexta',
          iconTemperature: 'fas fa-cloud-sun',
          maxTemperature: '26°',
          minTemperature: '16°',
        },
        {
          weekDays: 'Sábado',
          iconTemperature: 'fas fa-cloud-sun',
          maxTemperature: '26°',
          minTemperature: '16°',
        },
        {
          weekDays: 'Domingo',
          iconTemperature: 'fas fa-cloud-sun',
          maxTemperature: '26°',
          minTemperature: '16°',
        },
      ],
    };
  },
};
</script>
