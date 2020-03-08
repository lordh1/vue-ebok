<template>
  <div>
    <h1>Moje faktury</h1>
    <div
      v-for="(item, i) in invoices"
      :key="i"
      @click="download(item.id)"
    >
      {{item.numer}}
    </div>
  </div>
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
