<template>
    <div class="container">
        <div class="row">
            <h2 class="class-display2 text-white">Menu</h2>
        </div>
        <div class="row justify-content-center gap-3" v-if="products">
            <div class="col" v-for="product of products" :key="product">
                <div class="card" style="width: 18rem;">
                    <img :src="product.prodUrl" class="card-img-top img-fluid" :alt="prodName">
                    <div class="card-body">
                      <h5 class="card-title">{{ product.prodName }} <br> R {{ product.amount }}</h5>
                      <p class="card-text"><span>Category: {{ product.category }}</span></p>
                      <button class="btn btn-primary" @click="singleProduct(product.prodID)">view more</button>
                    </div>
                  </div>
            </div>
        </div>
        <div v-else class="row">
        </div>
    </div>
</template>
<script>
    export default {
        computed: {
            products() {
                return this.$store.state.products
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
            }
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