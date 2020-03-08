<template>
<div class="Rodo">
    <h1>Informacja RODO</h1>
    <div style={padding}>Jako {{gdpr.name}}, w świetle przepisów jesteśmy, administratorem Państwa danych osobowych. Oznacza to, że odpowiadamy za ich wykorzystanie w sposób bezpieczny, zgodny z umową oraz obowiązującymi przepisami.</div>
    <div style={padding}>Proszę kliknąć następujący link aby przeczytać treść komunikatu <a :href="'/rodo-' + gdpr.company + '.pdf'" target='_blank'>TREŚĆ KOMUNIKATU</a></div>
    <div style={padding}><button> Potwierdzam zapoznanie się</button></div>
</div>
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

<style lang="scss" scoped>
  @import "../../scss/vars.scss";

  .Rodo {
    margin: auto;
  
    & a {
      display: block;
      margin: 20px;
    }

    & button {
      padding: 10px 20px;
      background-color: $button-color;
      color: $text-color;
      font-weight: bold;
      cursor: pointer;
    }
  
  }
  </style>