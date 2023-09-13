<template>
  <div>
    <h1>Users</h1>
   <AddUser/>
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
          <div v-else>
            <Spinner/>
            </div>
        </tbody>
      </table>
    </div>
    <div>
      <h1>Products</h1>
      <AddProducts />
      <div class="sort-dropdown">
    <button class="btn" @click="toggleSortDirection('price')">
      Sort by Price: {{ sort === "asc" ? "ascending" : "descending" }}
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
            <div v-else class="row">
          <Spinner/>
        </div>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import AddUser from "@/components/AddUser.vue";
import Spinner from "../components/SpinnerComp.vue";
import addProduct from "../components/AddProduct.vue";
import updateProduct from "../components/UpdateProduct.vue";
import updateUsers from "../components/UpdateUsers.vue";
export default {
  components: {
    Spinner,
    addProduct,
    updateProduct,
    updateUsers,
    AddUser
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
      if (this.sortBy === "price") {
        filtered = filtered.sort(
          (a, b) =>
            (this.sort === "asc" ? 1 : -1) * (a.amount - b.amount)
        );
      } else if (this.sortBy === "name") {
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
    toggleSortDirection(column) {
      if (this.sortBy === column) {
        this.sort = this.sort === "asc" ? "desc" : "asc";
      } else {
        this.sortBy = column;
        this.sort = "asc"; // Initial sort direction
      }
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

</style>  