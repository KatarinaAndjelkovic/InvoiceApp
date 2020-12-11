<template>
  <v-app class="wrapper">
    <h1 class="invoice-title">Create Invoice</h1>
    <v-card class="invoice-list">
      <form @submit="checkForm">
        <label>Number</label>
        <v-text-field
            outlined 
            required
            type = number 
            min = 0
            v-model="invoice.number"
        ></v-text-field>
        <label>Description</label>
        <v-text-field
            outlined 
            required 
            v-model="invoice.description"
        ></v-text-field>
        <label>Amount</label>
        <v-text-field
            outlined 
            required
            min = 0
            type = number 
            v-model="invoice.amount"
        ></v-text-field>
        <label>Date</label>
          <v-row>
            <v-col
              cols="12"
            >
            <v-menu
              v-model="menu"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  readonly
                  v-on="on"
                  v-bind="attrs"
                  outlined 
                  required 
                  v-model="invoice.date"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="invoice.date"
                @input="menu = false"
              ></v-date-picker>
            </v-menu>
            </v-col>
            <v-spacer></v-spacer>
          </v-row>
        <div class="button-style"><v-btn type="submit" value="Create invoice">Create Invoice</v-btn></div>
      </form>
    </v-card>
  </v-app>
</template>

<script>
	export default {
    name: "InvoiceCreate",
		data() {
			return {
        invoice: {},
        menu: false
      }  
    },
    methods: {
      checkForm: function (e) {
        if (this.invoice.number && this.invoice.date && this.invoice.amount && this.invoice.description) {
            this.$store.dispatch("createInvoice", this.invoice);
        }
      }
    }
	};
</script>
<style lang="scss">
  .v-application--wrap {
    min-height: unset !important;
  }
  .invoice-title {
    padding: 0 16px;
  }
</style>