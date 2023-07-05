<template>
    <NuxtPage/>
  </template>


<style>
  .page-enter-active,
  .page-leave-active {
  transition: all 0.4s;
  }
  .page-enter-from,
  .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
  }
  * {
  box-sizing: border-box;
  font-size: 62,5%;
}
html, body{
  width: 100%;
  height: 100%;
  margin: 0;
  overflow-x: hidden;
  overflow-wrap: break-word;
}
body {

  margin: 0 auto;
  background-color: #222222;
  color: rgb(255, 255, 255);
  font-family: 'Poppins', sans-serif;
  padding: 0 10px;
}

.routerLink {
  color: white;
}
.a{
   font-weight: 400;
   font-size: 1.6rem;
}
h1,h2,p{
  margin: 1.6rem 0;
}
  h1 {
    font-size: 3.6rem;
    font-weight: 800;
    line-height: 1.3;
  }
  h2 {
    font-size: 2.2rem;
    font-weight: 800;
  }
  h3 {
    font-size: 1.2rem;
    font-weight: 800;
  }
  img{
    width: 100%;
    height: auto;
  }
  .colorheadline{
  background: linear-gradient(to right, #F24BB9, #fff, #F24BB9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.buttonwhite{
background-color: white;
color: black;
padding: 10px 20px;
}
.buttonwhite.active{
background-color: #F24BB9;
color: white;
padding: 10px 20px;
}
.buttonpink{
background-color: #F24BB9;
color: white;
padding: 10px 20px;
}
.link{
  text-decoration: none;
  color: #F24BB9;
}
</style>