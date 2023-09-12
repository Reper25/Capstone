<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2 text-white">Menu</h2>
        </div>

        <div class="row">
                    <label for="Categories" class="my-1">Filter by: Artist</label>
                </div>
                <div class="row">
                    <select v-model="artist" id="categories" name="Categories">
                    <option value="sneakers">sneakers</option>
                    <option value="hoodies">hoodies</option>
                    <option value="Sanele Matsolo">Sanele Matsolo</option>
                </select>
                </div>

                <div class="col-sm-2 mt-4">
                <button class="fw-bold" @click="filter(products)">Filter</button>
            </div>

        <div class="navigation">
    <div class="sort">
      <label for="search">Sort by Price</label>
      <select
        name="sort"
        id="sort"
        v-model="selectedSort"
        @change="sortProducts"
      >
        <option value="lowest" id="lowest">Lowest</option>
        <option value="highest" id="highest">Highest</option>
      </select>
    </div>

    
    <div class="search">
      <div class="search-bar">

        <input
          type="text"
          class="type-s"
          placeholder="Name of item"
          v-model="searchInput"
        />
         
      </div>
    </div>
  </div>

        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="product of filteredProducts" :key="product.prodID">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top img-fluid" :alt="prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }} <br> R {{ product.amount }}</h5>
                      <p class="card-text"><span>Category: {{ product.category }}</span></p>
                      <button class="btn btn-primary mx-1" @click="singleProduct(product.prodID)">view more</button>
                      <button class="btn btn-primary" @click="addToCart(product)">Add to Cart</button>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
          <Spinner/>
        </div>
    </div>
</template>
<script>
import Spinner from '../components/SpinnerComp.vue'
    export default {
      components:{
        Spinner
      },
        data() {
  return {
    searchInput: "",
  };
},
        computed: {
            products() {
                return this.$store.state.products
            },  
  filteredProducts() {
    const searchQuery = this.searchInput.toLowerCase();
    return this.products.filter(
      (product) =>
        product.prodName.toLowerCase().includes(searchQuery) ||
        product.category.toLowerCase().includes(searchQuery)
    );
 
},
        },
        mounted() {
            this.$store.dispatch('fetchProducts')
        },
        methods: {
            singleProduct(prodID) {
                const chosenProd = this.products.find (
                    (product) => product.prodID === prodID
                );
                this.$store.commit("setSelectedProduct", chosenProd);
                this.$router.push({name:"SingleProduct", params: {prodID: prodID}})
            },
            sortProducts() {
      if (this.selectedSort === "lowest") {
        this.products.sort((a, b) => a.amount - b.amount);
      } else if (this.selectedSort === "highest") {
        this.products.sort((a, b) => b.amount - a.amount);
      }
    },
    filterProducts() {
      const searchQuery = this.searchInput.toLowerCase();
      this.products = this.sortedProducts.filter(
        (product) =>
          product.prodName.toLowerCase().includes(searchQuery) ||
          product.Category.toLowerCase().includes(searchQuery)
      );
    },
    addToCart(product) {
      this.$store.dispatch('addToCartAction', product);
    },
        }
    }
</script>
<style scoped>
.card-img-top{
    width: auto;
    aspect-ratio: 5/4;
    object-fit: contain;
    display: block;
  margin: 0 auto;
    
}
.card{
    margin-bottom:1rem ;
}
</style>