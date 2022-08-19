<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Noticias Extranjeras" class="titulo">Noticias Extranjeras</ion-label>
          
        </div>


        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">


        <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://www.elsoldemexico.com.mx/mundo/9aq05p-incendios-argelia2.jpg/alternates/LANDSCAPE_768/Incendios%20Argelia2.jpg" alt="">
    <ion-card-subtitle>Noticias Extranjeras</ion-card-subtitle>
    <ion-card-title>Desolación en Argelia: incendios dejan saldo de al menos 38 muertos</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
   Los bomberos lograron este jueves controlar las llamas de la mayoría de los incendios que asolan el norte y el este de Argelia desde el miércoles,
    con saldo de al menos 38 muertos, más de 200 heridos y escenas de desolación.
"Aún había 16 incendios activos en 7 prefecturas a las 16H00 horas locales. 
Los incendios en las zonas más afectadas de El Tarf y Souk Ahras están bajo control", 
dijo a la AFP el coronel Farouk Achour, de Protección Civil.
  </ion-card-content>
   <ion-button class="button_n">Leer más...</ion-button>
</ion-card>

  <ion-card class="card">
  <ion-card-header class="card-header">
    <img class="img" src="https://www.elsoldemexico.com.mx/mundo/8seg19-colision-avionetas-california.jpg/alternates/LANDSCAPE_768/Colisio%CC%81n%20avionetas%20california.jpg" alt="">
    <ion-card-subtitle>Noticias Extranjeras</ion-card-subtitle>
    <ion-card-title>Colisión de dos avionetas en aeropuerto de California deja varios muertos</ion-card-title>
  </ion-card-header>
  <ion-card-content class="card-content">
  Dos avionetas colisionaron este jueves en un aeropuerto de California, informaron autoridades locales, con un reporte de múltiples muertes.

Las autoridades federales de aviación informaron que dos personas iban a bordo de un Cessna 340 bimotor, y una tercera pilotaba un Cessna 152 monomotor.
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
  name: "NoticiasEPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>