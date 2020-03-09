<template>
  <div class="Login">
    <h1>Zaloguj się</h1>
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

<style lang="scss" scoped>
@import "../../scss/vars.scss";

  .Login {
    width: $box-width;
    margin: auto;

    & label {
      line-height: 70px;
      display: inline-block;
      width: 100px;
    }   

    & button {
      padding: 10px 20px;
      background-color: $button-color;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    & input {
      border: 0;
      border-bottom: 2px solid $button-color;
      outline: none;
    }
  }


</style>
