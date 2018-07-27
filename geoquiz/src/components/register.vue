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
import router from '../router.js'
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
        submitName (name) {
            let inputObj = {
               name,
               points: 0
            }
            this.writeUser(inputObj)
            router.push("/")
            console.log(router)
        }
  },
  mounted(){
      this.getplayers()
  }
}
</script>
