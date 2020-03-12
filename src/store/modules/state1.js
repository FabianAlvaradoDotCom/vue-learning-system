/*

const state = {
  readings: []
}

// We connect our components to the getters to consume data
const getters = {
  // This will be accessed like: mapGetters([ "readings" ])
  readings: state => {
    return state.readings;
  }
}

// Actions are a way to execute async operations before updating the state.
const actions = {
  addReading: ({ commit }, payload) => { // It can recibe payload from the component invoking the function
    commit();
  },
  setReadings: ( {commit }) => {
    commit('SET_READINGS', readings) 
  },
  randomizeReadings: ({ commmit }) => {
    commit('RANDOM_READINGS');
  },
  removeItem: ({ commit }) => {    
    commit('REMOVE_ITEM');
  }
}

// Mutations (setters): We finally update our state here.
const mutations = {
  'SET_READINGS' ( state, readings ){
    state.readings = readings;
  },
  'RANDOM_READINGS' (state){
  },
  'REMOVE_ITEM'(state){
    state.readings.pop()
  }
};


export default {
  state,
  mutations,
  actions,
  getters
}

*/