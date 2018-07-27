<template>
  <div class="testing">
      name:
      <input type="text" v-model="name">
      <br>
      <button v-on:click="submitName(name)">register</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
  name: "playerInput",
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
            this.$router.push({ path: '/testing' })
        }
  },
  mounted(){
      this.getplayers()
  }
}
</script>
