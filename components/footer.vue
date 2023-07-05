<template>
    <div class="Footer">
       
     <div>   
<img src="~/assets/Logo.svg" class="Logo" alt="">
     </div>
<div class="PaymentIconWrapper"> 
    <p class="Akceptujeme">akceptujeme</p>
<div class="CardIcons">
    <img src="~/assets/Visa.svg" alt="">
    <img src="~/assets/Mastercard.svg" alt="">
    <img src="~/assets/ApplePay.svg" alt="">
    <img src="~/assets/GooglePay.svg" alt="">
    <img src="~/assets/PayPal.svg" alt="">
</div>
</div>

<div class="PaymentIconWrapper"> 
    <p>sledujte nás</p>
<div class="Icons">
    <nuxt-link to="https://instagram.com">
    <img src="~/assets/IG_icon.svg" alt="">
</nuxt-link>
    <nuxt-link to="https://facebook.com">
    <img src="~/assets/FB_icon.svg" alt="">
</nuxt-link>

   
</div>
</div>

<div class="PaymentIconWrapper"> 
    <p>kontakt</p>
    <h3>info@tomidiet.cz</h3>

</div>


</div>
 
  
</template>



<style scoped>


.Footer{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-evenly ;
    margin-top: 70px;
    padding-top: 5px;
    padding-bottom: 30px;
    background-color: #171616;
    border-top: 1px solid #F24BB9;
    gap: 5px;
}


.Logo{
    max-height: 40px;
    margin-top: 40px;
}
.PaymentIconWrapper{
text-align: left;

justify-content: flex-start;
}
.CardIcons{
    max-height: 30px;
    display: flex;

}
.Icons{
    max-height: 30px;
    display: flex;
    gap: 15px;
 


  
}

.Akceptujeme{

    margin-left: 12px;
}


p{
    margin-bottom: 5px;
}


</style>