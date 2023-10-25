<script  lang="ts">



import ProductDetails from './views/ProductDetails.vue'


export default {
  components: {
    ProductDetails
  },

   
  data() {
    return {
      isDialogOpen: false,
      
    };
  },
  methods: {
    openDialog() {
      this.isDialogOpen = !this.isDialogOpen;
      
    },
    closeDialog() {
      this.isDialogOpen = false;
    },


   
  }
};


</script>


  <!-- https://www.soliver.sk/_nuxt/img/soliver.dfcb78d.svg s.oliver logo image--> 

  
<template>
<div>
  <div class="flex p-6">
  <p class="p-2">Welcome to online shoping with </p>
  <div class="w-20 h-20 rounded-full p-2">
          <img
            src="https://www.soliver.cz/_nuxt/img/soliver.dfcb78d.svg"
            alt="Description of the image"
          />
        </div>
  <button @click="openDialog" class="bg-black text-white py-2 px-4 rounded">Open catalog</button>
</div>
    
    <ProductDetails v-if="isDialogOpen" >
    </ProductDetails>
  </div>
 <!--  <ProductDetails></ProductDetails> -->
</template>





