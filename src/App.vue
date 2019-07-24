<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

  import Carros from '@/features/carros'

export default {
  name: 'App',

  components: {
    Carros
  }
}
</script>

