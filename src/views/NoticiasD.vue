<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Noticias Deportivas" class="titulo">Noticias Deportivas</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">


        <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://tecolotito.elsiglodedurango.com.mx/cdn-cgi/image/format=auto,width=1024/i/2022/08/1095958.jpeg" alt="">
    <ion-card-subtitle>Noticias Deportivas</ion-card-subtitle>
    <ion-card-title>Alfredo López, ¿el regreso del año?</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
    Alfredo López tiene todos los méritos para ser nombrado "Retorno del año" de la Liga Mexicana de 
    Beisbol (LMB).
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>

  <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://www.elsoldedurango.com.mx/deportes/fu9c50-alacranes-de-durango-derrota-a-los-leones-negros.jpg/alternates/LANDSCAPE_768/Alacranes%20de%20Durango%20derrota%20a%20los%20Leones%20Negros.jpg" alt="">
    <ion-card-subtitle>Noticias Deportivas</ion-card-subtitle>
    <ion-card-title>Alacranes de Durango derrota a los Leones Negros</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
   Los Alacranes de Durango llegaron a 36 partidos sin conocer la derrota en casa y 
   en el regreso a la división de plata del futbol profesional mexicano, con buena cara, ya conquistan su novena unidad
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
  name: "NoticiasDPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>