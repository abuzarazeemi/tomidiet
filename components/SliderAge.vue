<template>
  <v-slider
    v-model="slider"
    class="align-center"
    :max="max"
    :min="min"
    label="Věk"
    color="#F24BB9"
    hide-details
    step="1"
    thumb-size="0"
    show-ticks
    track-color="white"
  >
    <template v-slot:append>
      <v-text-field
        class="Border"
        v-model="slider"
        hide-details
        single-line
        density="compact"
        type="number"
        style="width: 80px"
        bg-color="#212121"
      ></v-text-field>
    </template>
  </v-slider>
</template>

<script>
export default {
  data() {
    return {
      min: 15,
      max: 80,
      slider: 0,
    };
  },
  watch: {
    slider() {
      this.$emit("age", this.slider);
    },
  },
};
</script>

<style>
.Border {
  border: solid 1px #f24bb9;
}
</style>
