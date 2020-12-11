<template>
  <div class="wrapper">
    <h1 class="invoice-title">Invoice List</h1>
    <v-text-field class="search-field"
      solo
      label="Search"
      v-model="searchInput"
    ></v-text-field>
    <v-card class="invoice-list">
      <v-list v-for="(invoice, index) in invoices" :key="index">
          <v-list-item-content>
              <v-list-item-title>Number: {{ invoice.number }}</v-list-item-title>
              <v-list-item-title>Description: {{ invoice.description }}</v-list-item-title>
              <v-list-item-title>Amount: {{ invoice.amount }}</v-list-item-title>
              <v-list-item-title>Date:{{ invoice.date }}</v-list-item-title>
              <div class="delete-icon"><v-btn @click="deleteInvoice(index)"><v-icon>delete</v-icon></v-btn></div>
              <div class="copy-icon"><v-btn @click="copyInvoice(index)"><v-icon>content_copy</v-icon></v-btn></div>
          </v-list-item-content>
          <v-divider class="separator"></v-divider>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import _ from "lodash";

  export default {
    name: "InvoiceList",
    data() {
      return {
        invoices: this.$store.state.invoices,
        searchInput: ""
      }
    },
    methods: {
      deleteInvoice(index) {
        const response = confirm("Are you sure you want to delete this invoice?")
        if(response) {
         this.invoices.splice(index, 1);
        }
      },
      copyInvoice(index) {
        const copiedInvoice = this.invoices[index];
        this.invoices.push(copiedInvoice);
      }
    },
    watch: {
        searchInput: _.debounce(function () {
            const self = this;
            if(this.searchInput != "") {
              this.invoices = self.invoices.filter(function (el) {
                return el.number.includes(self.searchInput);
              });
            } else {
              this.invoices = this.$store.state.invoices;
            }
        }, 500)
    }
  }
</script>

<style lang="scss">
  .invoice-list {
    padding: 16px;
    .v-list:last-child .separator {
      display: none;
    }
    .delete-icon, .copy-icon {
      position: absolute;
      right: 10px;
      .v-btn {
        background-color: transparent !important;
        box-shadow: none!important;
        border-radius: 50%;
        justify-content: center;
        min-width: 0;
        width: 36px;
        min-width: 36px !important;
      }
    }
    .delete-icon {
      margin-bottom: 50px !important;
    }
    .copy-icon {
      margin-top: 22px;
    }
  }
  .search-field  {
    .v-text-field__details {
      display: none;
    }
    .v-input__slot {
      margin-bottom: 0;
      background-color: #d8d8d8d8 !important;
    }
    .v-label {
      left: 0 !important;
    }
  }
</style>
