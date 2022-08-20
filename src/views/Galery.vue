<template>
  <ion-page>
    <ion-content class="fondoinicio">
    <div class="">
     

      <ion-buttons slot="start" class="menu_btn">           
         
       <ion-menu-button color="light" class="button-back"></ion-menu-button>   
         
         
      </ion-buttons>
     
      


      <div class="user_div">
        <div class="primer_div">
           <ion-label data-text="Informate Ahora" class="titulo">Informate Ahora</ion-label>
          
        </div> 
        

        <div class="logo_back">

        </div>
      </div>
      <div class="content_div">
        <ion-label class="hola_lbl">Imagenes Relevantes</ion-label>
        
            
      <swiper :modules="modules" :autoplay="true" :keyboard="true" :pagination="true"
      class="slide" 
      >
      
        <swiper-slide><img src="https://www.sopitas.com/wp-content/uploads/2022/01/polisia-policia-san-luis-nuevas-patrullas-por-que-fotos-ortografia-potosi-02.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="https://www.elsoldedurango.com.mx/local/e74uno-matrimoniigualitario.jpeg/alternates/LANDSCAPE_768/Matrimoniigualitario.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="https://www.elsoldedurango.com.mx/policiaca/bcfdyr-seguridad-publica.jpeg/alternates/LANDSCAPE_560/Seguridad%20P%C3%BAblica.jpeg" alt=""></swiper-slide>
        <swiper-slide><img src="https://imagenes.elpais.com/resizer/GGIU8-WmmqrsLqFBOjl1NRPgXZw=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/Z66WWA77YVEZPLVPOGLL23VM2I.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="https://www.elsoldedurango.com.mx/local/3hn6lb-ruben-calderon.jpeg/alternates/LANDSCAPE_400/Ruben%20Calder%C3%B3n.jpeg" alt=""></swiper-slide>
      </swiper>
    
               
               
          
      </div>

    </div>
 </ion-content>
  </ion-page>
</template>
<script>
  import { defineComponent } from 'vue';
  import { Autoplay, Keyboard, Pagination,} from 'swiper';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { IonContent, IonPage } from '@ionic/vue';

  import 'swiper/css';
  import 'swiper/css/autoplay';
  import 'swiper/css/keyboard';
  import 'swiper/css/pagination';
  
  
  import '@ionic/vue/css/ionic-swiper.css';

  export default defineComponent({
    components: { Swiper, SwiperSlide, IonContent, IonPage },
    setup() {
      return {
        modules: [Autoplay, Keyboard, Pagination,  ],
        
      };
      
    },
     
  });
</script>