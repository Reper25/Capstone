<template>
    <div class="opp">
      <h1>Your Cart <i class="bi bi-basket"></i></h1>
      <center>
        <div class="table-responsive">
          <table class="table text-center table-bordered">
          <thead>
            <tr>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>product image</th>
            </tr>
          </thead>
            <tbody>
              <tr v-for="(item, index) in cart" :key="item.prodID">
                <td>{{ item.prodName }}</td>
                <td>
                  <select name="quantity" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td>R{{ item.amount }}</td>
                <img :src="item.prodUrl" class="card-img-top img-fluid" :alt="prodName">
                <td>
                  <button class="btn btn-primary" @click="removeFromCart(index)">Remove</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  </template>
  <script>
  export default {
    computed: {
      cart() {
        return this.$store.state.cart;
      },
    },
    methods: {
      removeFromCart(index) {
        this.$store.dispatch('removeFromCartAction', index);
        // Save the updated cart to local storage after removal
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
      updateQuantity(index) {
        const item = this.cart[index];
        this.$store.dispatch('addToCartAction', { product: item, quantity: item.quantity });
        // Save the updated cart to local storage after quantity change
        localStorage.setItem('cart', JSON.stringify(this.cart));
      },
    },
  };
  </script>
  <style scoped>
  img{
    width: 15%;
  }
  .opp{
    height: max-content;
    
  }
  </style>