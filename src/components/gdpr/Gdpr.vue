<template>
  <v-container
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="primary"
            dark
            flat
          >
            <v-toolbar-title>Informacja RODO</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <div style={padding}>Jako {{gdpr.name}}}, w świetle przepisów jesteśmy, administratorem Państwa danych osobowych. Oznacza to, że odpowiadamy za ich wykorzystanie w sposób bezpieczny, zgodny z umową oraz obowiązującymi przepisami.</div>
            <div style={padding}>Proszę kliknąć następujący link aby przeczytać treść komunikatu <a :href="'/rodo-' + gdpr.company + '.pdf'" target='_blank'>TREŚĆ KOMUNIKATU</a></div>
            <div style={padding}><Button variant="raised" color="primary" onClick="confirm">Potwierdzam zapoznanie się</Button></div>

          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              class="mr-4"
              @click="confirm"
            >
              Potwierdzam zapoznanie się
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Gdpr',

    data: () => ({
    }),
    methods: {
      ...mapActions('gdpr', [
        'apiGetGdpr', 'apiSaveGdpr'
      ]),
      confirm() {
        this.apiSaveGdpr();
        this.$vToastify.success("Potwierdzenie zapisano.", "OK");
      }
    },
    computed: {
      ...mapState({
        gdpr: state => state.gdpr.gdpr,
      })
    },
    mounted() {
      this.apiGetGdpr();
    }
  }
</script>
