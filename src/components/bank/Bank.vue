<template>
  <div>
    <h1>Konto do opłat</h1>
    <div><label>Nazwa operatora:</label> {{bank.nazwa}}}</div>
    <div><label>Numer konta:</label> {{bank.konto}}}</div>
  </div>

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
