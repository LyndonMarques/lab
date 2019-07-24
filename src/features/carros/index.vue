<template>
  <div>
    <h3>Carros</h3>
    <detalhes :carros=carros />
  </div>
</template>

<script>

  import { mapActions, mapState} from 'vuex'
  import Detalhes from './components/datalhes'

  export default {

    data() {
      return {

      }
    },

    components: {
      Detalhes
    },

    mounted() {
      this.setCarros()
    },

    methods: {
      ...mapActions('Carros', ['setCarros']),

    },

    computed: {
      ...mapState('Carros', ['carros']),

    }

  }
</script>
