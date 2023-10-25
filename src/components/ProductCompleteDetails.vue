
   <template> <div class='completeDetailsContainer hidden md:block'>
      <div class="flex ">
    <button @click="activeTab = 'productDetails'" :class="{'active-tab': activeTab === 'productDetails'}">Product Details</button>
    <button @click="activeTab = 'productFit'" :class="{'active-tab': activeTab === 'productFit'}">Product Fit</button>
    <button @click="activeTab = 'materialCare'" :class="{'active-tab': activeTab === 'materialCare'}">Material and Care Instructions</button>
    <button @click="activeTab = 'sustainability'" :class="{'active-tab': activeTab === 'sustainability'}">Information on Sustainability</button>
</div>

  
      
      <div v-show="activeTab === 'productDetails'">
        <h2>Product Details</h2>
        <p>Neckline : neckline with a ribbed trim
Sleeves : long sleeves
Details : logo
Hem : With a ribbed trim
Style : In a casual look
Occasion : Casual
EAN: 4062771884438
Article Number: 2040666.7210.S</p>
      </div>
      <div v-show="activeTab === 'productFit'">
        <h2>Product Fit</h2>
        <p>Fit : Regular Fit
Back length : approx. 72 cm in size L

Need help finding your size? Click here for the size guide.</p>
      </div>
      <div v-show="activeTab === 'materialCare'">
        <h2>Material and Care Instructions</h2>
        <p>Details about the materials used and care instructions.</p>
      </div>
      <div v-show="activeTab === 'sustainability'">
        <h2>Information on Sustainability</h2>
        <p>Information about the product's sustainability and environmental impact.</p>
      </div>
    </div>

    <!------------------>


   
  
    
  <div>
    <div
      class="block md:hidden"
    >
      <div v-for="(tab, index) in tabs" :key="index">
        <button
          @click="toggleTab(tab)"
          class="w-full p-2 mb-1 bg-gray-200 hover:bg-gray-300"
        >
          {{ tab.title }}
        </button>
        <div v-show="activeTab === tab.title">
          <h2>{{ tab.title }}</h2>
          <p v-html="tab.content"></p>
        </div>
      </div>
    </div>
  </div>
</template>

 
  
  
  <script lang="ts">
  export default {
    data() {
      return {
        activeTab: '',
        tabs: [
          {
            title: 'Product Details',
            content: `
              <p>Neckline: neckline with a ribbed trim</p>
              <p>Sleeves: long sleeves</p>
              <p>Details: logo</p>
              <p>Hem: With a ribbed trim</p>
              <p>Style: In a casual look</p>
              <p>Occasion: Casual</p>
              <p>EAN: 4062771884438</p>
              <p>Article Number: 2040666.7210.S</p>
            `,
          },
          {
            title: 'Product Fit',
            content: `
              <p>Fit: Regular Fit</p>
              <p>Back length: approx. 72 cm in size L</p>
              <p>Need help finding your size? Click here for the size guide.</p>
            `,
          },
          {
            title: 'Material and Care Instructions',
            content: `
              <p>Details about the materials used and care instructions.</p>
            `,
          },
          {
            title: 'Information on Sustainability',
            content: `
              <p>Information about the product's sustainability and environmental impact.</p>
            `,
          },
        ],
      };
    },
    methods: {
      toggleTab(tab:any) {
        this.activeTab = this.activeTab === tab.title ? '' : tab.title;
      },
    },
  };
  </script>
  
  
 <!--  <script lang="ts"> 
  /* export default {

   
    name: 'ProductComponentDetails',
  
    data() {
      return {
        activeTab: 'productDetails', // Set the default active tab
        
      };
    },

    methods: {
    toggleAccordion(tab:any) {
      if (this.activeTab === tab) {
        this.activeTab = ''; // Close the currently open tab
      } else {
        this.activeTab = tab; // Open the clicked tab
      }
    },

   
  }} */
  export default {
  data() {
    return {
      activeTab: 'productDetails', // Set the default active tab
    };
  },
  methods: {
    toggleAccordion(tab:any) {
      if (this.activeTab === tab) {
        this.activeTab = ''; // Close the currently open tab
      } else {
        this.activeTab = tab; // Open the clicked tab
      }
    },
  },
};
  </script> -->
  
  <style scoped>
  /* Style for the tab buttons */
button {
    padding: 10px 20px;
    background-color: rgb(239, 239, 239); /* Grey background color */
    border: none;
    cursor: pointer;
    font-weight: normal; /* Regular font weight */
    border-bottom: 3px solid transparent; /* Initially no underline */
    margin-right: 10px;
}

/* Style for the active tab button */
.active-tab {
    border-bottom: 3px solid black; /* Black underline for the active tab */
    font-weight: bold; /* Bold font weight for the active tab */
}
.completeDetailsContainer{
  background-color: rgb(239, 239, 239);
}

/*test code*/

/* Add some basic styling for the accordion */
.accordion-button {
  background: rgb(239, 239, 239);
  color: #333;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  text-align: left;
  border: none;
  text-align: left;
  outline: none;
  transition: 0.4s;
}

.accordion-content {
  display: none;
  padding: 10px;
}


</style>