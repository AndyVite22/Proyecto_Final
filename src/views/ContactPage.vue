<template>
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
        <ion-label class="hola_lbl">Dejanos tus comentarios...</ion-label>
        
            
                
                <ion-img class="container-img2" src="https://openclipart.org/download/247319/abstract-user-flat-3.svg" ></ion-img>
                 
              <ion-item>
                    <ion-label position="floating" class="form">Nombre</ion-label>
                        <ion-input></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating" class="form">Telefono</ion-label>
                        <ion-input></ion-input>
                </ion-item>
                <ion-item>
                    <ion-label position="floating">Comentarios...</ion-label>
                    <ion-textarea></ion-textarea>
                </ion-item>
                <div class="button">
                
                    <ion-button shape="round" color="danger"
                     type="submit"> Enviar...</ion-button>
                
                </div>
               
          
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
  name: "ContactPage",
  components: {
  IonContent,
  IonButtons,
  IonLabel
  },
  methods:{
    retroceder(){
     window.history.back();
   }
  }

 
});
</script>


