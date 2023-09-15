<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2 text-black">Products</h2>
          <!-- Poes select -->
          <div class="sep">
        <select class="form-select sel" aria-label="Default select example" v-model="categoryFilter">
                <option value="default">Filter/Default</option>
                <option value="hoodies">Hoodies</option>
                <option value="sneakers">Sneakers</option>
            </select>
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
              </div>
        <div class="navigation ">

    
  </div>
  <br>


            <form action="" class="search-bar">
  <input
type="text"
class="type-s"
placeholder="Name of item"
v-model="searchQuery"
required>
  <button class="search-btn" type="submit">
    <span>Search</span>
  </button>
</form>
        </div>
        <br>
        

        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="product of filteredProducts" :key="product.prodID">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top img-fluid" :alt="prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }} <br> R {{ product.amount }}</h5>
                      <p class="card-text"><span>Category: {{ product.category }}</span></p>
                      <button class="btn btn-primary mx-1" @click="singleProduct(product.prodID)">View More</button>
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
    searchQuery: "",
    categoryFilter:'default',
  };
},
        computed: {
            products() {
                return this.$store.state.products
            },  
            filteredProducts() {
    let filtered = this.$store.state.products.filter((products) =>
      products.prodName.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
      (this.categoryFilter === 'default' || products.category === this.categoryFilter)
    );
    return filtered
            }
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
.navigation{
display: flex;
justify-content: right;
}

.card{
    margin-bottom:1rem ;
}

.sel{
  width: 40% !important;

}

body, input {
  color: #171717;
}
body, .search-bar {
  display: flex;
}

.search-bar input,
.search-btn, 
.search-btn:before, 
.search-btn:after {
  transition: all 0.25s ease-out;
}
.search-bar input,
.search-btn {
  width: 3em;
  height: 3em;
}
.search-bar input:invalid:not(:focus),
.search-btn {
  cursor: pointer;
}
.search-bar,
.search-bar input:focus,
.search-bar input:valid  {
  width: 100%;
}
.search-bar input:focus,
.search-bar input:not(:focus) + .search-btn:focus {
  outline: transparent;
}
.search-bar {
  /* float: left; */
  justify-content: end;
}
.search-bar input {
  background: transparent;
  border-radius: 1.5em;
  box-shadow: 0 0 0 0.4em #171717 inset;
  padding: 0.75em;
  transform: translate(0.5em,0.5em) scale(0.5);
  transform-origin: 100% 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.search-bar input::-webkit-search-decoration {
  -webkit-appearance: none;
}
.search-bar input:focus,
.search-bar input:valid {
  background: #fff;
  border-radius: 0.375em 0 0 0.375em;
  box-shadow: 0 0 0 0.1em #d9d9d9 inset;
  transform: scale(1);
}
.search-btn {
  background: #171717;
  border-radius: 0 0.75em 0.75em 0 / 0 1.5em 1.5em 0;
  padding: 0.75em;
  position: relative;
  transform: translate(0.25em,0.25em) rotate(45deg) scale(0.25,0.125);
  transform-origin: 0 50%;
}
.search-btn:before, 
.search-btn:after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
}
.search-btn:before {
  border-radius: 50%;
  box-shadow: 0 0 0 0.2em #f1f1f1 inset;
  top: 0.75em;
  left: 0.75em;
  width: 1.2em;
  height: 1.2em;
}
.search-btn:after {
  background: #f1f1f1;
  border-radius: 0 0.25em 0.25em 0;
  top: 51%;
  left: 51%;
  width: 0.75em;
  height: 0.25em;
  transform: translate(0.2em,0) rotate(45deg);
  transform-origin: 0 50%;
}
.search-btn span {
  display: inline-block;
  overflow: hidden;
  width: 1px;
  height: 1px;
}

/* Active state */
.search-bar input:focus + .search-btn,
.search-bar input:valid + .search-btn {
  background: #ff01e6;
  border-radius: 0 0.375em 0.375em 0;
  transform: scale(1);
}
.search-bar input:focus + .search-btn:before, 
.search-bar input:focus + .search-btn:after,
.search-bar input:valid + .search-btn:before, 
.search-bar input:valid + .search-btn:after {
  opacity: 1;
}
.search-bar input:focus + .search-btn:hover,
.search-bar input:valid + .search-btn:hover,
.search-bar input:valid:not(:focus) + .search-btn:focus {
  background: #0c48db;
}
.search-bar input:focus + .search-btn:active,
.search-bar input:valid + .search-btn:active {
  transform: translateY(1px);
}

@media screen and (prefers-color-scheme: dark) {
  body, input {
    color: #f1f1f1;
  }
  body {
    background: #171717;
  }
  .search-bar input {
    box-shadow: 0 0 0 0.4em #f1f1f1 inset;
  }
  .search-bar input:focus,
  .search-bar input:valid {
    background: white;
    box-shadow: 0 0 0 0.1em white inset;
  }
  .search-btn {
    background: #000000;
  }
}



.sep {
  max-width: 1350px;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  
  /* width: 100px; */
}
.sort {
  margin-left: auto;
}
</style>
