<template>
<v-slider
    v-model="slider"
    :value="slider"
    class="align-center"
    :max="max"
    :min="min"
    label="Výška"
    color="#F24BB9"
    hide-details
    step="1"
    show-ticks
    thumb-size="0"
    track-color="white"
  >
    <template v-slot:append>
      <v-text-field class="Border"
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
    data () {
      return {
        min: 140,
        max: 200,
        slider: 140,
        padding: 10,
      }
    },
    watch: {
      slider() {
        this.$emit("height", this.slider)
      }
    }
  }
</script>


<style>

.Border{
  border: solid 1px #F24BB9;
}

</style>