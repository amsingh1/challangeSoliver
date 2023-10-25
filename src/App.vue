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
    <button @click="openDialog" class="bg-black text-white py-2 px-4 rounded">Winter Coat</button>

    <!-- Use the DialogBox component with a v-if to conditionally render it -->
    <ProductDetails v-if="isDialogOpen" >
      <!-- Content to be displayed within the dialog box -->
   
    </ProductDetails>
  </div>
 <!--  <ProductDetails></ProductDetails> -->
</template>





