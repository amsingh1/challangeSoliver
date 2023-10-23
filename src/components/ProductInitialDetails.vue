<!-- 
 
 

<template>
  <div class="initial-details">
<div>
<p class="text-3xl" >Brand New</p>
<h3>Shirt</h3>
<div class="price-logo">
<h2>34.99 EUR</h2>
<img src="https://www.soliver.cz/_nuxt/img/soliver.dfcb78d.svg" alt="Description of the image" class="round-image">
</div>
<hr>
<div class="flex-container">
<h1>Color:</h1>
<p :style="{ fontWeight: 'bold' }">Orange</p>
</div>
<div class="blessed-div flex-container">
<img
v-for="(image, index) in images"
:key="index"
:src="image"
alt="Description of the image"
class="round-image"
/>
</div>
<div class="flex-container">
<h1>Size:</h1>
<p :style="{ fontWeight: 'bold' }">xxl</p>
</div>
<div class="blessed-div flex-container">
<span
v-for="(size, index) in sizes"
:key="index"
class="padded-span"
>
<p>{{ size }}</p>
</span>
</div>
<button @click="store.togelMoreDetails()" class="btn"> More Details</button>

    </div>
</div>



  </template>
  
  <script lang="ts" >
  import { store } from './store'
  export default {
    name:'ProductInitialDetails',
    data() {
      return {
        images: [
          "https://media.soliver.com/i/soliver/2127131.5958_flat?w=80&amp;fmt=auto&amp;qlt=default&amp;fmt.jp2.qlt=40&amp;fmt.webp.qlt=70",
          "https://media.soliver.com/i/soliver/2127131.5958_flat?w=80&amp;fmt=auto&amp;qlt=default&amp;fmt.jp2.qlt=40&amp;fmt.webp.qlt=70",
          "https://media.soliver.com/i/soliver/2127131.5958_flat?w=80&amp;fmt=auto&amp;qlt=default&amp;fmt.jp2.qlt=40&amp;fmt.webp.qlt=70",
        ],
        sizes: ["S", "M", "L", "XL"],
        
      };
    },

    methods: {
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
  .price-logo{
    display: flex;
    justify-content: space-between;
  }
  
  .round-image {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }
  
  .padded-span {
    padding:20px 20px;
    border-radius: 20px; 
    margin-right: 3px;
    background-color: #CCC; 
    /*display: inline-block;  Ensure it's displayed inline-block for the capsule shape */
}

   
  .initial-details {
    border: 1px solid #000;
  width: 40vw;
    height: 90vh;
    padding: 20px;
}

  
  </style>
  
  
   -->

   <template>
    <div class="initial-details">
      <div>
        <p class="text-3xl">Brand New</p>
        <h3>Shirt</h3>
        <div class="price-logo">
          <h2>34.99 EUR</h2>
          <img
            src="https://www.soliver.cz/_nuxt/img/soliver.dfcb78d.svg"
            alt="Description of the image"
            class="round-image"
          />
        </div>
        <hr />
        <div class="flex-container">
          <h1>Color:</h1>
          <p :style="{ fontWeight: 'bold' }">Orange</p>
        </div>
        <div class="blessed-div flex-container">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            alt="Description of the image"
            class="round-image"
          />
        </div>
        <div class="flex-container">
          <h1>Size:</h1>
          <p :style="{ fontWeight: 'bold' }">xxl</p>
        </div>
        <div class="blessed-div flex-container">
          <span v-for="(size, index) in sizes" :key="index" class="padded-span">
            <p>{{ size }}</p>
          </span>
        </div>
        <button @click="store.togelMoreDetails()" class="btn">More Details</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { store } from './store';
  export default {
    name: 'ProductInitialDetails',
    data() {
      return {
        images: [
          'https://media.soliver.com/i/soliver/2132263.59P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          'https://media.soliver.com/i/soliver/2132263.88P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          'https://media.soliver.com/i/soliver/2132263.91P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
          'https://media.soliver.com/i/soliver/2132263.98P1_flat?w=80&fmt=auto&qlt=default&fmt.jp2.qlt=40&fmt.webp.qlt=70',
        ],
        sizes: ['S', 'M', 'L', 'XL'],
      };
    },
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
    width: 40px;
    height: 40px;
  }
  
  .padded-span {
    padding: 20px 20px;
    border-radius: 20px;
    margin-right: 3px;
    background-color: #CCC;
  }
  
  .initial-details {
    border: 1px solid #000;
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
  