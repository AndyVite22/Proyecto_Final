<template>
  <ion-menu menu-id="app-menu" content-id="menu-content-area">
    <ion-content>
    <div class="menu-header-bg">Menu</div>
    <div class="header-content">
      <img src="https://i.pinimg.com/564x/6d/1b/7e/6d1b7e50295882497ebe889fa8304f1f.jpg" alt="">
      <ion-label>
        <h2>Las mejores noticias</h2>
        <p>más cerca de ti</p>
      </ion-label>
    </div>
    
      <ion-list class="menu-items" lines="none">

          <ion-item button @click="retroceder()">
        
          <ion-icon src="/assets/svg/chevron-back-outline.svg"></ion-icon>Regresar
        </ion-item>
        
        <ion-item button @click="menuNavigation('/home')" class="active">
          <ion-icon src="/assets/svg/home.svg"></ion-icon>Inicio
        </ion-item>

        <ion-item button @click="menuNavigation('/about')">
          <ion-icon src="/assets/svg/alert-circle-outline.svg"></ion-icon>Nosotros
        </ion-item>

        <ion-item button @click="menuNavigation('/inicio')">
        
          <ion-icon src="/assets/svg/newspaper-outline.svg"></ion-icon>Noticias
        </ion-item>

         <ion-item button @click="menuNavigation('/contacto')">
        
          <ion-icon src="/assets/svg/chatbubble-ellipses-outline.svg"></ion-icon>Contacto
        </ion-item>

        

       
        

      </ion-list>
    </ion-content>
  </ion-menu> 
</template>
<script>

import {
  IonMenu,IonContent,IonItem,IonList,IonLabel,IonIcon,
  menuController
} from "@ionic/vue";


export default {
  components: {
    IonMenu,IonContent,IonItem,IonList,IonLabel, IonIcon
  },
  methods:{
    menuNavigation(url){
      menuController.close("app-menu");
      this.$router.push(url);
    },
    retroceder(){
     window.history.back();
   }
  }
};

</script>
