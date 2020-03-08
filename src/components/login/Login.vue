<template>
  <div>
    <h1>Zaloguj się</h1>
    <form>
      <label>Login</label>
      <input
        type="text"
        v-model="id"
        required
      >
      <label>Hasło</label>
      <input
        type="password"
        v-model="password"
        required
      >
      <button
        @click="submit"
      >
        OK
      </button>
    </form>
  </div>
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
