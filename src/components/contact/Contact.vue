<template>
  <div class="Contact">
    <h1>Moje dane kontaktowe (do kontaktu ze strony Operatora)</h1>
    <div>
      <label>Telefon 1 </label>
      <input type="text" v-model="contact.tel1" />
    </div>
    <div>
      <label>Telefon 2 </label>
      <input type="text" v-model="contact.tel2" />
    </div>
    <div>
      <label>Email </label>
      <input type="text" v-model="contact.emil" />
    </div>
    <div>
      <button @click="submit">ZAPISZ</button>
    </div>
  </div>
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

<style lang="scss" scoped>
  @import "../../scss/vars.scss";

  .Contact {
    width: 40%;
    margin: auto;

    & label {
      line-height: 70px;
      display: inline-block;
      width: 100px;
    }

    & button {
      padding: 10px 20px;
      background-color: $button-color;
      color: $text-color;
      font-weight: bold;
    }

    & input{
      border: 0;
      border-bottom: 2px solid $button-color;
      outline: none;
    }
  }
</style>