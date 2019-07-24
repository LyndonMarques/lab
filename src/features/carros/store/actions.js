
import axios from 'axios'

const setCarros = async ({ commit }, obj) => {

  const carros = (await axios.get('https://swapi.co/api/people/')).data.results

  commit('SET_CARROS', { carros })
}

export default {
  setCarros
}
