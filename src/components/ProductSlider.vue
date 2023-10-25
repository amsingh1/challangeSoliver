 <template>
    <div class="product-slider">
    <div class="image-slider">
      <div class="slider-container">
        <div class="slider ">
          <transition name="fade" mode="out-in">
            <div class="slide" :key="currentIndex">
              <img :src="images[currentIndex]" alt="Slider Image">
            </div>
          </transition>
          
        </div>
      </div>
      <div class="dots">
        <span v-for="(image, index) in images" :key="index" @click="goToSlide(index)" :class="{ active: index === currentIndex }"></span>
      </div>
      <button @click="prevSlide">&#60;</button>
      <button @click="nextSlide">&#62;</button>
    </div>
</div> 
 </template>





   
 
  
  <script lang="ts">
  import { computed } from 'vue';
  import { useApiStore } from './store'
  export default {
    data() {
      return {
        currentIndex: 0,
        props: {
 
},

        
        images: [
          'https://media.soliver.com/i/soliver/2132263.98P1_outfit?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596',
          'https://media.soliver.com/i/soliver/2132263.98P1_flat?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596',
          'https://media.soliver.com/i/soliver/2132263.98P1_d1?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596',
          'https://media.soliver.com/i/soliver/2132263.98P1_d3?bg=rgb(239,239,239)&qlt=default&fmt=auto&w=596',
          // Add your image URLs here
        ],
      };
    },
    setup() {
    const apiStore = useApiStore();
    const apiData = computed(() => apiStore.getApiData);

    // Fetch the API data when the component is created
    apiStore.fetchApiData();

    return {
      apiData,
    };
  },

    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      },
      goToSlide(index:any) {
        this.currentIndex = index;
      },
    },
  };
  </script>
  
  <style scoped>
  
  .image-slider {
    text-align: center;
  }
  
  .slider-container {
    overflow: hidden;
    width: 80%;
    margin: 0 auto;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  
  .slide {
    flex: 0 0 100%;
    display: flex;
    justify-content: center; /* Horizontal center alignment */
    align-items: center; /* Vertical center alignment */
    text-align: center; /* If you need to center-align text within the slide */
}
  
  img {
    max-width: 100%;
    height: auto;
    max-height: 100vh; /* Limit the height of the image to the viewport */
  }
  
  .dots {
    text-align: center;
    margin: 10px 0;
  }
  
  .dots span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #ccc;
    border-radius: 50%;
    margin: 0 5px;
    cursor: pointer;
  }
  
  .dots span.active {
    background: #333;
  }
  
  button {
    margin: 10px;
  }
  .product-slider{
    border: #333 solid 1px;
    width: 60vw;
  }
  </style>
  