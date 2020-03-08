<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4">
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Moje faktury</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-list dense>
            <v-list-item-group color="primary">
              <v-list-item
                v-for="(item, i) in invoices"
                :key="i"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item.numer" @click="download(item.id)"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import {tokenService} from "../../services/tokenService";
  import axios from 'axios';

  export default {
    name: 'Invoices',

    data: () => ({

    }),
    methods: {
      ...mapActions('invoices', [
        'apiGetInvoices'
      ]),
      download(id) {
        const token = tokenService.getToken();
        const config = {
          headers: {'Authorization': "Bearer " + token},
          responseType: 'blob'
        };

        axios.get(process.env.VUE_APP_API_URL+`/index.php?a=fpdf&id=` + id, config)
          .then((response) => {
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'faktura.pdf');
            document.body.appendChild(link);
            link.click();
          });
      }
    },
    computed: {
      ...mapState({
        invoices: state => state.invoices.invoices,
      })
    },
    mounted() {
      this.apiGetInvoices();
    }
  }
</script>
