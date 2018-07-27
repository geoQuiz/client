<template>
  <div>
    <h1>{{title}}</h1>
    <inputplayercomponent/>
  </div>
</template>

<script>
// @ is an alias to /src

import { mapActions } from 'vuex'
import { mapState } from 'vuex'
// import {app} from '@/firebase.js'


import inputplayercomponent from "@/components/playerList.vue";
export default {
  components: {
    inputplayercomponent
  },
  data(){
     return{
         title: "these are the player list"
     }
  }
}
</script>
