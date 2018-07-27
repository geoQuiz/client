<template>
  <div class="player">
    <div class="list" v-for="(player, index) in players"
      v-bind:key="index">
        <h3>{{player.name}}</h3>
        <span>Point : {{player.points}}</span>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapState } from 'vuex'

  export default {
    name: "Player",
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  margin : 5px;
}
h3 {
  margin-bottom: 3px;
}
</style>
