<template>
    <div>
      <!-- Button trigger modal -->
      <button
        type="button"
        class="button text-left"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal5"
      >
        Add product
      </button>
  
      <!-- Modal -->
      <div
        class="modal fade"
        id="exampleModal5"
        tabindex="-1"
        aria-labelledby="exampleModalLabel5"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel5">New Product</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <input
                placeholder="product Name"
                type="text"
                v-model="model.product.prodName"
                required
              />
              <input
                placeholder="Category"
                type="text"
                v-model="model.product.category"
                required
              />
              <input
                placeholder="amount"
                type="number"
                v-model="model.product.amount"
                required
              />
              <input
                placeholder="quantity"
                type="text"
                v-model="model.product.quantity"
                required
              />
              <input
                placeholder="product image"
                type="text"
                v-model="model.product.prodUrl"
                required
              />
              <input
                placeholder="Description"
                type="text"
                v-model="model.product.prodDesc"
                required
              />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" class="btn" @click="addProduct">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
    
    <script>
  export default {
    data() {
      return {
        model: {
          product: {
            prodName: "",
            category: "",
            quantity: "",
            amount: "",
            prodUrl: "",
            prodDesc: "",
          },
        },
      };
    },
        methods: {
      addProduct() {
        this.$store.dispatch("addProduct", this.model.product);
        setTimeout(() => {
          location.reload();
        }, 500);
      },
    },
  }
  

  </script>
    
  
  <style scoped>
  .btn{
    border: 1px solid white;
    margin-bottom: 7px;
  }
  
  .btn:hover{
  color: rgb(126, 126, 126);
  }

  .button {
  --color: #0077ff;
  font-family: inherit;
  display: inline-block;
  width: 6em;
  height: 2.6em;
  line-height: 2.5em;
  overflow: hidden;
  margin: 20px;
  font-size: 17px;
  z-index: 1;
  color: var(--color);
  border: 2px solid var(--color);
  border-radius: 6px;
  position: relative;
}

.button::before {
  position: absolute;
  content: "";
  background: var(--color);
  width: 150px;
  height: 200px;
  z-index: -1;
  border-radius: 50%;
}

.button:hover {
  color: white;
}

.button:before {
  top: 100%;
  left: 100%;
  transition: .3s all;
}

.button:hover::before {
  top: -30px;
  left: -30px;
}
  </style>