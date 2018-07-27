<template>
  <div class="testing">
      question:
      <input type="text" v-model="questions">
      <br>
      answers:
      <input type="text" v-model="answers">
      <button v-on:click="testing(questions, answers)">submit</button>
      <button v-on:click="readQuestions()">submit</button>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex'
import { mapState } from 'vuex'
// import {app} from '@/firebase.js'

export default {
  data: function(){
      return{
          questions: "",
          answers: ""
      }
  },
  name: 'home',
  components: {
  },
  methods: {
    ...mapActions([
        "write",
        "readQuestions"
    ]),
      testing: function(questions, answers){
          let inputObj = {
              question: questions,
              answer: answers
          }
          this.readQuestions(inputObj)
      },
    mounted(){
      this.questions = this.readQuestions()
    }
      // readQuestions: function(){
      //
      // },
  },

}
</script>
