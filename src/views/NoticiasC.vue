<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Noticias Culturales" class="titulo">Noticias Culturales</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div"> 


  
        <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://media.timeout.com/images/103571835/image.jpg" alt="">
    <ion-card-subtitle>Noticias Culturales</ion-card-subtitle>
    <ion-card-title>Javier Camarena agota entradas para recital en Festival de El Escorial</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
    El tenor mexicano Javier Camarena ha agotado las entradas para el recital que dará en el Festival de Verano de El Escorial (FIVE) con un repertorio basado en la ópera italiana y acompañado al piano por Rubén Fernández Aguirre el viernes en el Teatro Auditorio de San Lorenzo de El Escorial.

La de Camarena es la sexta actuación de las doce previstas en la segunda edición del Festival, organizado por la Comunidad de Madrid y en cuyo programa domina la música clásica y flamenco, han informado los organizadores en un comunicado.

Nombres como el de la cantaora flamenca Rocío Márquez y el coreógrafo Daniel Abreu figuran en un festival que mantiene su apuesta "por la calidad y la descentralización de la cultura en la región, afianzando enclaves excepcionales como atractivos turísticos y culturales".
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>

     <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://www.realacademiabellasartessanfernando.com/assets/images/conciertos/128.jpg" alt="">
    <ion-card-subtitle>Noticias Culturales</ion-card-subtitle>
    <ion-card-title>Concurso nacional de Guitarra Clásica abre convocatoria en Durango</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
   Abre convocatoria el décimo quinto concurso nacional de Guitarra Clásica, Durango 2022, en el cual pueden participar los jóvenes mexicanos nacidos del día primero de enero de 1990 en adelante.

El Instituto de Cultura del Estado de Durango (ICED) y la Escuela Superior de Música de la UJED a través de dicha convocatoria invita a músicos guitarristas clásicos a participar en su Décimo Quinto Concurso, el cual se realizará los días 20 y 21 de octubre en el Museo de Historia y Arte “El Palacio de los Gurza”.
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
  name: "NoticiasCPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>