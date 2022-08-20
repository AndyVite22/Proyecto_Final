<template>
  <ion-content class="fondop2">
    <div class="main_content_div2">

      <ion-buttons slot="start" class="menu_btn">
        <ion-menu-button color="light"></ion-menu-button>
      </ion-buttons>


      <div class="logo_div">
        <div class="primer_div">
           <ion-label data-text="Acerca de Nosotros" class="titulo">Acerca de Nosotros</ion-label>
          
        </div>

        <div class="logo_back">

        </div>
      </div>
      <div>
       
      </div>
    
      <div class="content_divn">
        <ion-card class="cardn">
            <ion-card-header class="card-header">
            
                <ion-card-subtitle>¿QUIÉNES SOMOS?</ion-card-subtitle>
                <ion-card-title>News at the Moment</ion-card-title>
                
            </ion-card-header>
                        <ion-card-content class="card-contentn">
                             Somos una empresa de Comunicación que ofrece Información de diversas categorías cómo Política, Cultura y 
                             Deportes con el propósito de brindar noticias de calidad a nuestros usuarios y reducir las fuentes de información 
                             poco confiables las cuales por medio de títulos polémicos quieren captar la atención.
                        </ion-card-content>
            <img class="img" src="https://www.enriquedans.com/wp-content/uploads/2014/04/Online-news.jpg" alt="">
        </ion-card>

        <ion-card class="cardn">
            <ion-card-header class="card-header">
            
                <ion-card-subtitle>Programadora web</ion-card-subtitle>
                <ion-card-title>Jhovana Carrillo</ion-card-title>
                
            </ion-card-header>
                        <ion-card-content class="card-contentn">
                            Se encarga de construir y mantener el sitio web a través de código utilizando diferentes lenguajes de programación,
                             tales como HTML, CSS3 o JavaScript, asegurándose que la navegación sea fácil y agradable para el usuario.
                        </ion-card-content>
            <img class="img" src="http://chavezerik.utdgrupoti.com/jhovana1.jpg" alt="">
        </ion-card>
        <ion-card class="cardn">
            <ion-card-header class="card-header">
            
                <ion-card-subtitle>Programador Back-end</ion-card-subtitle>
                <ion-card-title>Andy Vite</ion-card-title>
                
            </ion-card-header>
                        <ion-card-content class="card-contentn">
                             Se encarga de la arquitectura interna de una web o aplicación móvil que va vinculado a todo el contenido 
                             (formularios, mapas, bases de datos.) que se integrará con todo lo que ve el usuario final en una web o
                              aplicación móvil.
                        </ion-card-content>
            <img class="img" src="http://chavezerik.utdgrupoti.com/Andy1.jpg" alt="">
        </ion-card>
        
        <ion-card class="cardn">
            <ion-card-header class="card-header">
            
                <ion-card-subtitle>Programador Front-end</ion-card-subtitle>
                <ion-card-title>Erik Chavez</ion-card-title>
                
            </ion-card-header>
                        <ion-card-content class="card-contentn">
                             Es el encargado de la interfaz gráfica de un proyecto digital, es decir la cara visible de un sitio o aplicación, brindan una excelente experiencia de navegación al usuario dentro de un entorno web.
                  
                        </ion-card-content>
            <img class="img" src="http://chavezerik.utdgrupoti.com/erik.jpg" alt="">
        </ion-card>

          <ion-card class="cardn">
            <ion-card-header class="card-header">
            
                <ion-card-subtitle>Diseñadora</ion-card-subtitle>
                <ion-card-title>Cinthya Luna</ion-card-title>
                
            </ion-card-header>
                        <ion-card-content class="card-contentn">
                            Se especializa en el terreno visual del diseño capaz de proyectar y crear imágenes que tienen una función determinada,
                            que responden a necesidades específicas o que solucionan problemas de comunicación mediante la codificación gráfica de 
                            la información.
                        </ion-card-content>
            <img class="img" src="http://chavezerik.utdgrupoti.com/Cinthia1.jpg" alt="">
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
  name: "NosotrosPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  }

});

  
</script>