import { createStore } from "vuex";

export default createStore({
  state: {
    username: null,
    token: null,
    r_id: null,
    phone: null,
    isAuthenticated: false, 
  },
  mutations: {
    initizeStore(state) {
      if (localStorage.getItem('token')) {
        state.token= localStorage.getItem('token')
        state.isAuthenticated = true
      }else{
        state.token = ''
        state.isAuthenticated = false
      }
    },
    setToken(state, token) {
      state.token = token
      state.isAuthenticated = true
    },
    setUser(state, user) {
      state.username = user
    },
    setRoom(state, id) {
      state.r_id = id
    },
    setPhone(state, phon) {
      state.phone = phon
    },
    removeToken(state){
      state.token= ''
      state.isAuthenticated = false
    }
  
  },
  actions: {

  },
  modules: {

  },
});
