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
            <v-toolbar-title>Moje dane kontaktowe (do kontaktu ze strony Operatora)</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="contact.tel1"
                label="telefon 1"
              ></v-text-field>

              <v-text-field
                v-model="contact.tel2"
                label="telefon 2"
              ></v-text-field>

              <v-text-field
                v-model="contact.email"
                label="e-mail"
              ></v-text-field>

            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              class="mr-4"
              @click="submit"
            >
              Zapisz
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
    name: 'Contact',

    data: () => ({
    }),
    methods: {
      ...mapActions('contact', [
        'apiGetContact', 'apiSaveContact'
      ]),
      submit() {
        this.apiSaveContact(this.contact);
        // this.$toasted.success('Dane kontaktowe zostały zapisane.')
        this.$vToastify.success("Dane zapisano.", "OK");
      }
    },
    computed: {
      ...mapState({
        contact: state => state.contact.contact,
      })
    },
    mounted() {
      this.apiGetContact();
    }
  }
</script>
