<template>
    <div class="footer">
      <div class="label">Shirt</div>
      <button class="button">Add to Cart</button>
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
    background-color: #333;
    color: #fff;
    padding: 10px;
    max-height: 40px;
  }
  
  .button {
    background-color: #ff6600;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  </style>
  