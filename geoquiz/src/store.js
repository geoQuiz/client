import Vue from 'vue'
import Vuex from 'vuex'
import { database } from './firebase.js'
import { stat } from 'fs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: null
  },
  mutations: {
    getplayer (state, players) {
      state.players = players;
      // console.log(this.state.players)
    },
    getquestion (state, questions){
      state.questions = questions
    }
  },
  actions: {
    writeUser(context,obj){
      // console.log(obj);
      database.ref('player/').push().set(
        obj
      , function(err){
        if (err) {
          console.log(err);
        }else {
          database.ref('player/').on('value', function(snapshot){
            let players = snapshot.val();
            let key = []
            for (var property1 in players) {
              key.push(property1)
            }
            console.log(key[key.length - 1]);
            localStorage.setItem('id', key[key.length - 1])
            // console.log(players);
            context.commit("getplayer", players)
          })
        }
      });
    },
    getplayers (context) {
      database.ref('player/').on('value', function(snapshot) {
        let players = snapshot.val();
        context.commit('getplayer', players)
      })
    },
    getQuestions (context){
      database.ref('questions/').on('value', function(snapshot) {
        let questions = snapshot.val();
        context.commit('getplayer', questions)
      })
    }
  }
})
