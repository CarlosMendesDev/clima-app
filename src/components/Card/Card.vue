<template lang="pug">
q-card(class="bg-primary")
  q-card-section(horizontal class="row justify-center")
    q-card-section(class="col-auto q-px-md")
      q-card-section(class="row flex-center q-px-none")
        div(class="text-white text-h4 text-bold col-5")
          | {{ temperature }}°
        div(class="col-5")
          q-img(:src="icon")
      q-card-section(class="q-pt-none")
        div(class="text-white text-subtitle1 text-bold text-capitalize")
          | {{ description }}
</template>

<script>
export default {
  props: {
    temperature: {
      type: String,
      default: '0',
    },
    icon: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
  },
};
</script>
