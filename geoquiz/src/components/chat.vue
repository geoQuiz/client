<template>
<div>
   type in your answer here: 
   <input type="text" v-model="answer" >
   <button v-on:click="answerQuestions(answer)">send</button>
</div>
</template>


<script>


import { mapActions } from 'vuex'
export default {
name: "answer",
data(){
    return{
        answer: ""
    }
  },
methods:{
    ...mapActions([
       'answerQuestion' 
    ]),
    answerQuestions(answer){
        let answerObj = {
            answer,
            user : localStorage.getItem("userId")
        }
        this.answerQuestion(answerObj)
    }
  }
}



</script>

