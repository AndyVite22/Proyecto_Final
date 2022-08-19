<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Noticias Politicas" class="titulo">Noticias Politicas</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">


        <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://www.elsoldedurango.com.mx/local/municipios/cl03hv-angela-rojas/ALTERNATES/LANDSCAPE_1140/%C3%81ngela%20Rojas" alt="">
    <ion-card-subtitle>Noticias Politicas</ion-card-subtitle>
    <ion-card-title>No habrá colores en el próximo Cabildo de Canatlán: Ángela Rojas</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
    En el Cabildo 2022-2025 no habrá colores partidistas ni tampoco se aplicará el mayoriteo, será un espacio donde se construya, las campañas ya se terminaron y la continuidad es buscar el beneficio para todos los ciudadanos.

Así destaca la presidenta municipal electa de Canatlán, María de los Ángeles Rojas Rivera, también conocida como "Ángela", su visión de lo que buscará sea el máximo órgano deliberativo municipal que iniciará trabajos el 1 de septiembre.
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>

  <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://www.elsoldedurango.com.mx/local/ghkldw-tono-ochoa.jpeg/alternates/LANDSCAPE_768/To%C3%B1o%20Ochoa.jpeg" alt="">
    <ion-card-subtitle>Noticias Politicas</ion-card-subtitle>
    <ion-card-title>Toño Ochoa podría incluir en su administración a gente del equipo de Salum</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
  El próximo lunes 8 de agosto, comienza de manera formal el proceso de entrega-recepción en la administración municipal de Durango, por lo que el alcalde Electo, Toño Ochoa, señaló que ya cuenta con su equipo que iniciará este proceso en cinco ejes, personas que describió como “gente probada y con capacidad para dirigir las dependencias”.
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>


      </div>

    </div>
 </ion-content>
</template>
<script>
import { 
  IonContent,
  IonButtons,
  IonLabel

 } from '@ionic/vue';
 import {defineComponent} from "vue";

export default defineComponent({
  name: "NoticiasPoPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>