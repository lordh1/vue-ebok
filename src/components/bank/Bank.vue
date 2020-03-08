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
            <v-toolbar-title>Konto do opłat</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <div><strong>Nazwa operatora:</strong> {{bank.nazwa}}}</div>
            <div><strong>Numer konta:</strong> {{bank.konto}}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'Bank',

    data: () => ({
    }),
    methods: {
      ...mapActions('bank', [
        'apiGetBank'
      ])
    },
    computed: {
      ...mapState({
        bank: state => state.bank.bank,
      })
    },
    mounted() {
      this.apiGetBank();
    }
  }
</script>
