<template>
    <CookieConsent
      message="Tento web využívá k poskytování služeb a analýze návštěvnosti soubory cookie. Používáním tohoto webu s tím souhlasíte."
      link-label=""/>

      


  </template>

<script>
import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
export default {
  components: {
    CookieConsent
  }
}
</script>


<style>
  .cookie-consent {
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    padding: 10px;
    align-items: center;
    align-self: center;
    justify-content: center;
    border-bottom: 1px solid white;
    color: white;
    background-color: #F24BB9;
  }
  .cookie-consent button {
    border: 1px solid white;
    padding: 10px;
    margin-left: 20px;
    min-width: 140px;
  }
</style>