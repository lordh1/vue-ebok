<template>
  <div>
    <h1>Moje dane kontaktowe (do kontaktu ze strony Operatora)</h1>
    <div>
      <label>telefon 1</label>
      <input type="text" v-model="contact.tel1" />
    </div>
    <div>
      <label>telefon 2</label>
      <input type="text" v-model="contact.tel2" />
    </div>
    <div>
      <label>email</label>
      <input type="text" v-model="contact.emil" />
    </div>
    <div>
      <button @click="submit">Zapisz</button>
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

<style scoped>

</style>