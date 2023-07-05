<template>
  <v-slider
    v-model="slider"
    class="align-center"
    :max="max"
    :min="min"
    label="Tělesný tuk"
    color="#F24BB9"
    hide-details
    step="5"
    show-ticks
    thumb-size="0"
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
      min: 5,
      max: 40,
      slider: 5,
    };
  },
  watch: {
    slider() {
      this.$emit("fat", this.slider);
    },
  },
};
</script>
<style>
.Border {
  margin-top: 15px;
  border: solid 1px #f24bb9;
}
</style>
