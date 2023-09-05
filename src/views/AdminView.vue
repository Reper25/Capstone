<template>
  <div>
    <h1>Users</h1>
    <addUser />
    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>surname</th>
            <th>age</th>
            <th>gender</th>
            <th>role</th>
            <th>email address</th>
            <th>profile image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody v-for="user in users" :key="user.userID">
          <tr v-if="users">
            <td>{{ user.userID }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.userAge }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.userRole }}</td>
            <td>{{ user.emailAdd }}</td>
            <td>
              <img
                :src="user.userProfile"
                :alt="user.firstName"
                loading="lazy"
                class="img-fluid image"
              />
            </td>
            <td>
              <updateUser :user="user" /><button
                class="btn"
                @click="deleteUser(user.userID)"
              >
                delete
              </button>
            </td>
          </tr>
          <tr v-else>
            <Spinner />
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <h1>products</h1>
      <AddProducts />
      <div class="sort-dropdown">
        <button class="btn" @click="toggleSortDirection">
          Filter by: {{ sort === "asc" ? "ascending" : "descending " }}
        </button>
      </div>
      <addProduct />
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>name</th>
              <th>quantity</th>
              <th>price</th>
              <th>category</th>
              <th>description</th>
              <th>product image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="product in filteredProducts" :key="product.prodID">
            <tr v-if="products">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.quantity }}</td>
              <td>{{ product.amount }}</td>
              <td>{{ product.category }}</td>
              <td>{{ product.prodDesc }}</td>
              <td>
                <img
                  :src="product.prodUrl"
                  :alt="product.prodUrl"
                  class="img-fluid image"
                  loading="lazy"
                />
              </td>
              <td>
                <updateProduct :product="product" />
                <button @click="deleteProduct(product.prodID)" class="btn">
                  delete
                </button>
              </td>
            </tr>
            <tr v-else>
              <Spinner />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../components/SpinnerComp.vue";
import addProduct from "../components/AddProduct.vue";
import updateProduct from "../components/UpdateProduct.vue";
export default {
  components: {
    Spinner,
    addProduct,
    updateProduct,
  },
  data() {
    return {
      sort: "",
      sortBy: "id",
      sortMode: "prodID",
    };
  },
  computed: {
    users() {
      return this.$store.state.users || [];
    },
    products() {
      return this.$store.state.products || [];
    },
    product() {
      return this.$store.state.product || [];
    },
    user() {
      return this.$store.state.user || [];
    },
    filteredProducts() {
      let filtered = [...this.products];
      if (this.sortBy === "name") {
        filtered = filtered.sort(
          (a, b) =>
            a.prodName.localeCompare(b.prodName) *
            (this.sort === "asc" ? 1 : -1)
        );
      } else if (this.sortBy === "id") {
        filtered = filtered.sort(
          (a, b) => (this.sort === "asc" ? 1 : -1) * (a.prodID - b.prodID)
        );
      }
      return filtered;
    },
  },
  async mounted() {
    await this.$store.dispatch("fetchProducts");
    await this.$store.dispatch("fetchUsers");
  },
  methods: {
    deleteProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$store.dispatch("deleteProduct", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
    toggleSortDirection() {
      console.log("reached");
      this.sortBy = 'name'
      this.sort = this.sort === "asc" ? "desc" : "asc";
    },
    async deleteUser(userID) {
      if (confirm("Are you sure you want to delete this User?")) {

        let data = await this.$store.dispatch("deleteUser", userID)
      if(!data) {
        alert(data)
      }
      else {
        setTimeout(() => {
          location.reload();
        }, 500);
      }
      }
        
  },
},
};
</script>

<style scoped>
.image {
  width: 5rem;
}
.table {
  background-color: #f7f4f1;
}

/* .sort-dropdown{
  display: flex;
  justify-content: space-between;
} */


</style>