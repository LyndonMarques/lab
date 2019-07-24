<template>
  <div>
    <div v-if="carro.films.length > 1 " v-for="(carro, index) in carros" :key="index" >
      <div>{{ carro.name }}</div>
      <br>

      <div v-for="(film, indexF) in carro.films" :key="indexF">
        <div >{{ film }}</div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ComponenteDetalhes',
    props: [
      'carros'
    ],
    data() {
      return {
        title : "Eu sou o detalhes do title"
      }
    }
  }
</script>
