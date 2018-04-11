import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  events: [],
  test: ''
}

const mutations = {
  addEvent (state, payload) {
    state.test = 'Aloha'

    // let event = {
    //   date: new Date(payload.eventDate),
    //   title: payload.eventTitle,
    //   details: payload.eventDetails
    // }
    console.log(payload)
    console.log(state)
    state.events.push(payload)
  }
}

export default new Vuex.Store({
  state,
  mutations
})
