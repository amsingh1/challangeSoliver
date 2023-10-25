<script setup lang="ts">

import ProductSlider from '../components/ProductSlider.vue'
import ProductInitialDetails from '../components/ProductInitialDetails.vue'
import ProductFooter from '../components/ProductFooter.vue'
import ProductCompleteDetails from '../components/ProductCompleteDetails.vue' 
import {ref,onMounted} from'vue'

</script>


  <!-- https://www.soliver.sk/_nuxt/img/soliver.dfcb78d.svg s.oliver logo image--> 


<template>
   
  <div class="all-details-container">
    <div class="slider-InitialDetails">
      <ProductSlider v-if="isLargeScreen" :coats="coats"></ProductSlider>
      <ProductInitialDetails v-if="isLargeScreen" @sendShowMoreDetails="dataForMoreDetails"></ProductInitialDetails>
    </div>
    <div class="initial-details-mobile">
      <ProductSlider v-if="!isLargeScreen"></ProductSlider>
      <ProductInitialDetails v-if="!isLargeScreen" @sendShowMoreDetails="dataForMoreDetails"></ProductInitialDetails>
    </div>
    <div v-if="moreDetailsReceived">
      <ProductCompleteDetails></ProductCompleteDetails>
    </div>
    <div>
      <ProductFooter></ProductFooter>
      <!-- <button @click="fetchCoats" class="bg-black text-white px-4 py-2 rounded hover:bg-gray-900">{{ coats[0] }}</button> -->
    </div>
  </div>
  
</template>


<script lang="ts">


export default {
    name: 'ProductDetails',
  data() {
    return {
      isLargeScreen: window.innerWidth > 768, // Check if the screen width is larger than 768px
      moreDetailsReceived:'',
       coats:[]
    };
  },
  created() {
    // Listen for window resize events to update the isLargeScreen value
    window.addEventListener('resize', this.updateScreenSize);
  },

 mounted(){
    this.fetchCoats()
 }
  ,
  methods: {
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth > 768;
    },
   


  dataForMoreDetails(data:any) {
    this.moreDetailsReceived = data;
  },
  fetchCoats() {
      fetch('https://6537ca4ba543859d1bb0d841.mockapi.io/clothes/winter/coats')
        .then((response) => 
          
          response.json()
        )
        .then((data:any) => {
          this.coats = data;
          console.log(this.coats)
        })
        .catch((error) => {
          console.error('An error occurred:', error);
        });
    },
  
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.updateScreenSize);
  },
  
};


</script>

<style scoped>
.slider-InitialDetails {
  display: flex;
  justify-content: center;
}

.all-details-container {
  display: flex;
  flex-direction: column;
  border: black solid 1px;
  padding: 50px;
}

.initial-details-mobile {
  display: none; /* Initially hide for larger screens */
}

@media (max-width: 768px) {
  .initial-details-mobile {
    display: block; /* Display on screens with a maximum width of 768px */
  }
  .slider-InitialDetails {
    display: none; /* Hide on smaller screens */
  }
}
</style>




