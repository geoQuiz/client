import Vue from 'vue'
import Vuex from 'vuex'
import { database } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    write(dog,obj){
      console.log(obj);
      database.ref(3).set(
        obj
      );
    },
    read(dog,obj){
      console.log(obj);
    }
  }
})
