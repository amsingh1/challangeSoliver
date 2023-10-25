<template>
    <div class="footer">
      <div class="label">Shirt</div>
      <button class="button flex items-center w-48 justify-between">
  Add to Cart
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ml-2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
  </svg>
</button>

    </div>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    color: #333;
    padding: 10px;
    max-height: 40px;
  }
  
  .button {
    background-color:#333;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  