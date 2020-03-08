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
            <v-toolbar-title>Zaloguj się</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field
                v-model="id"
                label="ID"
                required
                type="text"

              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Hasło"
                required
                type="password"
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
              OK
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'Login',
    data: () => ({
      api: process.env.VUE_APP_API_URL,
      id: "",
      password: ""
    }),
    methods: {
      ...mapActions('authentication', [
        'apiAuthenticate'
      ]),
      submit() {
        const credentials = {
          id: this.id,
          password: this.password
        };

        this.apiAuthenticate({...credentials, router: this.$router});
      }
    }
  }
</script>
