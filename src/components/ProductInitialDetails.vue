
   <template>
    <div class="initial-details">
      <div>
        <p class="text ">Brand New</p>
        <h3 class="py-3">Shirt</h3>
        <div class="price-logo ">
          <h2>199.99 EUR</h2>
          <div class="w-20 h-20 rounded-full">
          <img
            src="https://www.soliver.cz/_nuxt/img/soliver.dfcb78d.svg"
            alt="Description of the image"
            
          />
        </div>
        </div>
        <hr />
        <div class="flex-container py-2">
          <h1>Color: </h1>
          <p :style="{ fontWeight: 'bold' }"> Black</p>
        </div>
        <div class="blessed-div flex-container py-2">
          
          <img
            v-for="(image, index) in colorImages"
            :key="index"
            :src="image"
            alt="Description of the image"
            class="w-16 h-16 rounded-full"
          />
        </div>
        <div class="flex-container py-2">
          <h1>Size:</h1>
          <p :style="{ fontWeight: 'bold' }">xxl</p>
        </div >
        <div class="blessed-div flex-container py-2">
          <span v-for="(size, index) in sizes" :key="index" class="padded-span">
            <p>{{ size }}</p>
          </span>
        </div>
        <div class="py-2"></div>
        <button @click="showMoreDetails" class="bg-black text-white hover:bg-gray-900 px-4 py-2 rounded">
  More Details
</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  export default {
    name: 'ProductInitialDetails',
    data() {
      return {
        colorImages: [
          'https://media.soliver.com/i/soliver/2132263.59P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          'https://media.soliver.com/i/soliver/2132263.88P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          'https://media.soliver.com/i/soliver/2132263.91P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          'https://media.soliver.com/i/soliver/2132263.98P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        moreDetails:false
      };
    },
    methods: {
    showMoreDetails() {
      const sendMoreDetails =  this.moreDetails =! this.moreDetails
      this.$emit("sendShowMoreDetails", sendMoreDetails); // Emit an event with the data
      console.log('sendMoreDetails state', sendMoreDetails)
    }
  }
  };
  </script>
  
  <style scoped>
  .blessed-div {
    font-weight: bold;
    
  }
  
  .flex-container {
    display: flex;
    flex-direction: row;
  }
  
  .price-logo {
    display: flex;
    justify-content: space-between;
  }
  
  .round-image {
    border-radius: 50%;
    width: 80px;
    height: 80px;
  }
  
  .padded-span {
    padding: 20px 20px;
    border-radius: 20px;
    margin-right: 3px;
    background-color: rgb(239, 239, 239)
  }
  
  .initial-details {
    /* border: 1px solid #000; */
    width: 100%; /* Make it 100% width to adapt to the screen size */
    max-width: 40vw; /* Add a max-width to limit the width on larger screens */
    height: 90vh;
    padding: 20px;
  }
  
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    .initial-details {
      max-width: 80vw; /* Adjust the max-width for smaller screens */
    }
  }
  
  @media (max-width: 480px) {
    .initial-details {
      padding: 10px; /* Adjust padding for smaller screens */
    }
  }
  
  </style>
  