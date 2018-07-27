import Vue from 'vue'
import Vuex from 'vuex'
import { database } from './firebase.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: null
  },
  mutations: {

  },
  actions: {
    write(dog,obj){
      // console.log(obj);
      database.ref('quiz/'+0).set(
        obj
      );
    },
    update(dog,obj){
      console.log(obj);
      database.ref('quiz')
    },
    readQuestions(dog,obj) {
      console.log(obj)
      return database.ref(`quiz/`).on('value', function(snapshot){
        console.log(snapshot.val());
      })
    }
  }
})
