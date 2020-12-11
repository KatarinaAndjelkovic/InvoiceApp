<template>
  <div id="nav" class="nav">
    <nav>
      <router-link :to="{ name: 'invoice-create' }" v-if="this.$store.state.isLogin === true" class="invoice-link">Create invoice</router-link> 
      <router-link :to="{ name: 'invoice-list' }" v-if="this.$store.state.isLogin === true" class="invoice-link">Invoice list</router-link>
      <router-link :to="{ name: 'login-page' }"><v-btn v-if="this.$store.state.isLogin === true" v-on:click="logout">Logout</v-btn></router-link>  
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  }
}
</script>

<style lang="scss">
.nav {
  padding: 0 16px;
  margin-bottom: 50px;
  background-color: #021e49 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  .v-btn {
    color: white !important;
    text-transform: capitalize;
    background-color: transparent !important;
    box-shadow: none !important;
    text-decoration: underline;
    .v-btn__content:hover {
      opacity: 0.8;
    }
  }
  .v-btn:hover:before {
    opacity: 0 !important;
  }
  .invoice-link {
    color: white;
    padding: 0 16px;
  }
  .invoice-link:hover {
    opacity: 0.8;
  }
}
</style>
