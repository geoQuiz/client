<template>
  <div class="login">
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <h2>Welcome to Geographic Quiz</h2>
          <v-card class="elevation-12">
            <v-toolbar color="green">
              <v-toolbar-title>Player login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field v-model="username" style="color : green" name="login" label="Input your name" type="text" placeholder="player"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="submit" color="green">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'login',
  components: {
  },
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
            this.$router.push({ path: '/board' })
        }
  }
}
</script>
