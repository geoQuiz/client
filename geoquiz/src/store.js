import Vue from 'vue'
import Vuex from 'vuex'
import { database } from './firebase.js'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [{
      question: "Sebutkan ibukota turki!",
      answer: "ankara"
    },{
      question: "Di Indonesia, pulau apakah yang berbentuk seperti huruf 'k'?",
      answer: "sulawesi"
    },{
      question: "Dimanakah ibukota Australia?",
      answer: "canberra"
    },{
      question: "Di pulau manakah kota Surabaya?",
      answer: "jawa"
    },{
      question: "Pantai Gading terletak di benua...",
      answer: "afrika"
    },{
      question: "Ottawa adalah ibukota dari negara...",
      answer: "kanada"
    },{
      question: "Moskwa atau Moskow, adalah ibukota dari negara...",
      answer: "rusia"
    },{
      question: "Dimanakah ibukota Brazil?",
      answer: "brasilia"
    },{
      question: "Di kota manakah Candi Borobudur terletak?",
      answer: "magelang"
    },{
      question: "Di negara manakah Menara Pisa berada?",
      answer: "italia"
    },{
      question: "Machu Picchu terletak di negara...",
      answer: "peru"
    }],
    players: []
  },
  mutations: {
    getplayer(state, players){
      state.players = players;
      console.log(this.state.players)      
    }
  },
  actions: {
    writeUser(context,obj){
      console.log(obj);
      database.ref('player/').push().set(
        obj
      );
    },
    getplayers(context){
      database.ref('player/').on('value', function(snapshot){
        let players = snapshot.val();
        context.commit("getplayer", players)
      })
    }
  },
 
})
