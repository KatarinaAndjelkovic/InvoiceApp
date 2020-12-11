<template>
  <div class="wrapper">
      <v-card class="invoice-list">
        <form class="login" @submit="checkForm">
            <label>Username</label>
            <v-text-field
                outlined 
                required 
                v-model="username"
            ></v-text-field>
            <label>Password</label>
            <v-text-field
                outlined 
                required 
                v-model="password"
                type="password"
            ></v-text-field>
            <div class="button-style"><v-btn type="submit" value="Login">Log in</v-btn></div>
        </form>
      </v-card>
    </div>
</template>

<script>
	export default {
        name: "LoginPage",
        data() {
            return {
                username: null,
                password: null,
                errors: []
            }  
        },
        methods: {
            
            checkForm: function (e) {
                if (this.username && this.password) {
                    this.$store.dispatch("login", this.username, this.password);
                }
            }
  
        }
	};
</script>
<style lang="scss">
    .wrapper {
        max-width: 650px;
        margin: 50px auto;
        @media(max-width: 700px) {
            max-width: 500px;
        }
        @media(max-width: 580px) {
            max-width: 400px;
        }
        @media(max-width: 450px) {
            max-width: 350px;
        }
        @media(max-width: 385px) {
            max-width: 300px;
        }
    }
    .invoice-list {
      padding: 16px;
      height: 550px;
      overflow: auto;
      .login {
          margin-top: 125px;
      }
    }
    ::-webkit-scrollbar {
		width: 10px;
	}
    .button-style {
        text-align: center;
        margin: auto;
        .v-btn {
            width: 250px;
        }
    }
</style>