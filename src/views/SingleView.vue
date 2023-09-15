<template>
    <center>
    <div class="card" id="card">
      <div v-if="product">
        <h1>{{ product.prodName }}</h1>
        <div>
          <img :src="product.prodUrl" :alt="product.prodName" loading="lazy" class="img-fluid" id="image" />
          <p>Category: {{ product.category }}</p>
          <div id="description">
            Description: {{ product.prodDesc }}
          </div>
          <p>Price: R{{ product.amount }}</p>
        </div>
      </div>
      <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
      
    </div>
    </center>
  </template>
  
  <script>
    import sweet from 'sweetalert'
  export default {
    components: {
    sweet
    },
    computed: {
      product() {
        return this.$store.state.selectedProduct;
      },
    },
    methods:{
      addToCart(product, msg) {
      this.$store.dispatch('addToCartAction', product);
      sweet({
            title: "Added to cart",
            text: msg,
            icon: "success",
            timer: 4000,
          });
    },
    }
  };
  </script>
  
  <style scoped>
  #image{
    width: 20rem;
    margin-bottom: 3rem;
  }
  
  #card{
    margin-top: 2rem;
    width: fit-content;
    padding: 2rem;
    margin-bottom: 2rem;
  }
  
  h1{
    margin-top: 3rem;
    margin-bottom: 3rem;
  }
  
  #description{
    margin-bottom: 2rem;
    width: 30rem;
  }
  
  </style>