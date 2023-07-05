<template> 
  <div class="BG">
     <NavBar/>
      <div class="wrapperhero">
          <div class="L1">
             <h1 class="colorheadline">Jídlem to začíná.<br>Začni už dnes!</h1>
          <p class="texty">Tomi diet je dietní výživový program určený speciálně pro ženy.
            Jeho cílem je pomoci ženám shodit přebytečné tuky, zlepšit zažívání, cítit se lépe ve vlastním těle a mít celkově víc energie do života.
            Výživový plán je vždy sestaven individuálně, na míru konkrétním potřebám klientky tak, aby byl zajištěn optimální počet makro a mikronutrientů společně s kalorickým příjmem a výdejem.
            Rozhodněte se pro lepší budoucnost svého těla ještě dnes.</p>
          <div class="ButtonWrapper">
          <NuxtLink class="text-decoration-none" to="/Calculator" >
            <button class="buttonpink">Chci jídelníček</button>
          </NuxtLink>
          <NuxtLink to="">
            <button class="buttonwhite ml-3">Náhled jídelníčku</button>
          </NuxtLink>
        </div>
      </div>  

      <div class="righttop">
      <img class="heroimg" src="~/assets/img.png">
        </div>
      </div>
    </div>
    <div class="IconWrapper">
<div class="Icona">
  <img class="Icons" src="~/assets/Icon_heart.svg" >
  <h3>Zlepšení zdravotního stavu</h3>
  <p class="mt-4">ahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjks</p>
</div>
<div class="Icona">
  <img class="Icons" src="~/assets/Icon_heart.svg" >  
  <h3>Redukce váhy</h3>
  <p class="mt-4">ahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjks</p>
</div>
<div class="Icona">
  <img class="Icons" src="~/assets/Icon_heart.svg">
  <h3>Nárůst svalové hmoty</h3>
  <p class="mt-4">ahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjksahfjkdsfhdjksfhdjks</p>
</div>
</div>
<div class="wrapper">
  <div class="L2">
  <img class="heroimg" src="~/assets/Tomi_bez_pozadi.png"  >
</div>
  <div class="P2">
    <h2>Chcete změnu? </h2>
    <p>Jednotlivé jídelní plány jsou sestavovány ve spolupráci s certifikovaným osobním trenérem a výživovým poradcem Bc. Tomášem Michalikem, který má dlouholeté zkušenosti jako výživový poradce, trenér a závodník ve fitness. Sám si prošel desítkami nejrůznějších diet a naučil se chápat potřeby lidského těla, porozumět jeho procesům a sestavit tak systém jak pro krátkodobé, tak pro dlouhodobé programy, za účelem maximální efektivity v rámci spalování tuků a zdravého životního stylu. <br> <br>
      <v-divider class="mb-6" color="#F24BB9"></v-divider>
Chcete se ve svém těle cítit skutečně jako doma? <br> <br>
Chcete se naučit se svým tělem správně komunikovat a využít naplno jeho potenciál?<br> <br>
<strong><a class="link" href="/calculator"> Neváhejte a rozhodněte za své tělo ještě dnes.</a></strong> <br> <br>
</p>
    </div>
  </div>

<Footer />

<Cookies/>
  </template>

<script>
import { ref } from 'vue';
import Popup from '~/components/PopUp.vue';
export default {
	setup () {
    
		const popupTriggers = ref({
			buttonTrigger: false,
			timedTrigger: false
		});
		const TogglePopup = (trigger) => {
			popupTriggers.value[trigger] = !popupTriggers.value[trigger]
		}
		return {
			Popup,
			popupTriggers,
			TogglePopup,
		}
	}
}
</script>

<style>
.wrapperhero{
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
} 
@media(min-width: 800px) {
  .wrapperhero {
  margin-top: 50px;
  }
}
  .wrapper{
    margin-top: 50px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
} 
@media (min-width: 1020px) {
.L1{
  width: 50%;
}
}
@media(max-width: 800px) {
  .L1 {
    margin-top: -100px;
  }
}
@media (min-width: 1020px) {
.P2{
  width: 50%;
}
}
.heroimg{
  height: auto;
  max-height: 500px;
  margin-top: 30px;
}
.IconWrapper{
  margin-top: 80px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  }
.Icona{
  text-align: center;
  max-width: 20rem;
}
.Icons{
  max-height: 4rem;
}
  </style>