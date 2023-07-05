<template>
  <NavBar />
  <div class="wrapper">
    <div class="left">
      <h1 class="colorheadline">FIT kalkulačka</h1>
      <v-col cols="12" class="py-" align-self="start"> </v-col>
      <div class="togglewrapper">
        <button
          class="buttonwhite"
          :class="{ active: activeButton === 1 }"
          @click="toggleButton(1)"
        >
          DLOUHODOBÝ PLÁN
        </button>
        <button
          class="buttonwhite"
          :class="{ active: activeButton === 2 }"
          @click="toggleButton(2)"
        >
          KRÁTKODOBÝ PLÁN
        </button>
      </div>
      <div class="Slider">
        <Slider_Height @height="($event) => (height = $event)" />
        <Slider_Weight @weight="($event) => (weight = $event)" />
        <Slider_Fat @fat="($event) => (fat = $event)" />
        <Slider_Activity @activity="($event) => (activity = $event)" />
        <Slider_Age @age="($event) => (age = $event)" />
      </div>
      <div class="continue">
        <NuxtLink
          :to="`/Summary?height=${height}&weight=${weight}&plan=${plan}`"
          ><button class="buttonpink mt-6" @click="save">Pokračovat</button>
        </NuxtLink>
      </div>
      <div class="popisek" v-if="activeButton === 1">
        Dlouhodobý plán je zaměřen na stabilní a udržitelnou formu postavy, při
        které se postupně odbourávají tukové zásoby, udržuje svalová hmota a
        jeho hlavní výhodou je, že ho můžete využívat nepřetržitě po neomezenou
        dobu.
      </div>
      <div class="popisek" v-if="activeButton === 2">
        Krátkodobý plán se zaměřuje na zrychlení metabolismu a nejvyšší možnou
        efektivitu spalování tuků v co nejkratším časovém horizontu. Poskytne
        Vám rychlé výsledky, dlouhodobě je ovšem neudržitelný. Maximální
        doporučená doba plánu jsou 2 měsíce.
      </div>
    </div>
    <div>
      <img class="heroimg" src="~/assets/img.png" />
    </div>
  </div>
  <div>
    <div></div>
  </div>
  <Footer />
  <Cookies />
</template>

<script>
export default {
  data() {
    return {
      activeButton: null,
      height: 0,
      weight: 0,
      activity: 0,
      fat: 0,
      age: 0,
      plan: "1",
    };
  },
  methods: {
    toggleButton(button) {
      this.plan = button;
      this.activeButton = button === this.activeButton ? null : button;
    },
    save() {
      localStorage.setItem("selectedData", JSON.stringify([
        { Value1: "Výška", Value2: this.height },
        { Value1: "Váha", Value2: this.weight },
        { Value1: "Tělesný tuk", Value2: this.fat },
        { Value1: "Aktivita", Value2: this.activity },
        { Value1: "Výška", Value2: this.age },
      ]));
    },
  },
};
</script>

<style>
@media only screen and (min-width: 800px) {
  .left {
    min-width: 70vh;
  }
}
@media (max-width: 800px) {
  .left {
    margin-top: -100px;
  }
}
.togglewrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}
.Slider {
  padding-top: 30px;
}
.continue {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
.popisek {
  padding: 10px 10px;
  border: 1px solid #f24bb9;
  margin-top: 30px;
  max-width: 620px;
}
</style>
