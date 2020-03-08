<template>
  <div class="Login">
    <h1>Zaloguj się</h1>
    <form>
      <div>
        <label>Login</label>
        <input
          type="text"
          v-model="id"
          required
        >
      </div>
      <div>
        <label>Hasło</label>
        <input
          type="password"
          v-model="password"
          required
        >
      </div>
      <div>
        <button
          @click="submit"
        >
          Zaloguj
        </button>
      </div>
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

<style type="sass" scoped>
  .Login {
    width: 40%;
    margin: auto;
  
  }

  .Login label {
    line-height: 70px;
    display: inline-block;
    width: 100px;
  }   

  .Login button {
    padding: 10px 20px;
    background-color: #2929df;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  .Login input{
    border: 0;
    border-bottom: 2px solid #5454a8;
    outline: none;
  }
</style>
