<template>
  <div class="testing">
      <ul>
         <l1 v-for="(player, index) in players"
         v-bind:key="index">
         name: {{player.name}}
         points: {{player.points}}
         <br>
         </l1>
      </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: "are the player list",
  data: function(){
      return{
          name : ""
      }
  },
  computed: {
      ...mapState([
         'players' 
      ])
  },
  components: {
  },
  methods: {
      ...mapActions([
          "writeUser",
          "getplayers"
      ]),
        submitName: function(name){
            let inputObj = {
               name,
               points: 0
            }
            this.writeUser(inputObj)
        }
  },
  mounted(){
      this.getplayers()
  }
}
</script>
