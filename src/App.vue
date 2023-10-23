<script setup lang="ts">

import ProductSlider from './components/ProductSlider.vue'
import ProductInitialDetails from './components/ProductInitialDetails.vue'
import ProductFooter from './components/ProductFooter.vue'
import ProductCompleteDetails from './components/ProductCompleteDetails.vue' 
import { store } from './components/store.js'

</script>


  <!-- https://www.soliver.sk/_nuxt/img/soliver.dfcb78d.svg s.oliver logo image--> 

  <!--<template> <div class="all-details-container">
  <div class="slider-InitialDetails">
  <ProductSlider></ProductSlider>
  <ProductInitialDetails></ProductInitialDetails>
</div>
<div v-if="store.moreDetails">
  <ProductCompleteDetails></ProductCompleteDetails>
</div>
<div >
<ProductFooter></ProductFooter>
</div>
</div>
</template>

<style scoped>

.slider-InitialDetails{
    display: flex;
    justify-content: center;
  }
  .all-details-container{
    display: flex;
    flex-direction:column;
    border: black solid 1px;
    padding: 50px;
  }
</style> -->

<!-- <template>
  <div class="all-details-container">
    <div class="slider-InitialDetails">
      <ProductSlider></ProductSlider>
    </div>
    <div class="initial-details-mobile">
      <ProductInitialDetails></ProductInitialDetails>
    </div>
    <div v-if="store.moreDetails">
      <ProductCompleteDetails></ProductCompleteDetails>
    </div>
    <div>
      <ProductFooter></ProductFooter>
    </div>
    
  </div>
</template>

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
}
</style> -->

<template>
  <div class="all-details-container">
    <div class="slider-InitialDetails">
      <ProductSlider v-if="isLargeScreen"></ProductSlider>
      <ProductInitialDetails v-if="isLargeScreen"></ProductInitialDetails>
    </div>
    <div class="initial-details-mobile">
      <ProductSlider v-if="!isLargeScreen"></ProductSlider>
      <ProductInitialDetails v-if="!isLargeScreen"></ProductInitialDetails>
    </div>
    <div v-if="store.moreDetails">
      <ProductCompleteDetails></ProductCompleteDetails>
    </div>
    <div>
      <ProductFooter></ProductFooter>
    </div>
  </div>
</template>


<script lang="ts">
export default {
  data() {
    return {
      isLargeScreen: window.innerWidth > 768 // Check if the screen width is larger than 768px
    };
  },
  created() {
    // Listen for window resize events to update the isLargeScreen value
    window.addEventListener('resize', this.updateScreenSize);
  },
  methods: {
    updateScreenSize() {
      this.isLargeScreen = window.innerWidth > 768;
    }
  },
  beforeDestroy() {
    // Remove the event listener when the component is destroyed
    window.removeEventListener('resize', this.updateScreenSize);
  }
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



