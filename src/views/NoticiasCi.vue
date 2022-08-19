<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Noticias Cientificas" class="titulo">Noticias Cientificas</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">


        <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://images11.eitb.eus/multimedia/images/2022/07/14/2962179/20220714095335_superilargia-superluna_foto610x342.jpg" alt="">
    <ion-card-subtitle>Noticias Cientificas</ion-card-subtitle>
    <ion-card-title>Última superluna de 2022: ¿Cuándo veremos la Luna de Esturión?</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
    La madrugada del próximo viernes, 12 de agosto, podremos disfrutar de un espectáculo gratuito al aire libre como el que solo nos puede ofrecer la luna, 
    en un escenario situado a unos 360 000 kilómetros de Euskal Herria. La tercera y última superluna de este 2022, denominada luna de esturión, se dejará ver en época estival, con la aparición estelar de las Perseidas.
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>

  <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://images11.eitb.eus/multimedia/images/2022/07/28/2967122/20220728200923_vacunas_foto610x342.jpg" alt="">
    <ion-card-subtitle>Noticias Cientificas</ion-card-subtitle>
    <ion-card-title>Vacunas innovadoras para Africa. ¿Qué es el Hidrógeno como vector energético? Viaje a la Atenas de Pericles</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
 El centro de investigación en biociencias Biogune participa junto con otros 12 centros de Europa y Africa en el consorcio SPIDVAC. Su objetivo es desarrollar vacunas pioneras hasta llegar a probar su seguridad y eficacia en modelos animales.
 A través del programa horizonte Europa de la Comisión Europea han recibido 5 millones de euros para desarrollar en los próximos 42 meses vacunas contra los virus de la peste equina africana, 
 de la peste de los pequeños rumiantes y de la fiebre aftosa. Nicola Abrescia, profesor de investigación de Ikerbasque y jefe del Laboratorio de Estructura y Biología Celular de Virus lidera el consorcio SPIDVAC y es hoy nuestro invitado.
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
  name: "NoticiasCiPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>