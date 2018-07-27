<template>
  <div class="board">
    <v-container fluid grid-list-md>
      <v-layout row wrap style="height : 600px;">
        <v-flex d-flex xs12 sm6 md2>
          <v-card color="green lighten-4"  class="text-lg-left">
            <v-card-title primary class="title headbar">Room</v-card-title>
            <Room msg="room 1"/>
            <Room msg="room 2"/>
            <Room msg="room 3"/>
          </v-card>
        </v-flex>
        <v-flex d-flex xs12 sm6 md7>
          <v-layout column >
            <v-flex d-flex >
              <v-card color="green" dark style="height : 20%">
                <v-card-text >
                  <h3 style="color : white ; ">Sample Question : dimana lokasi hacktiv8</h3>
                </v-card-text>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card dark style="height : 50% ; background : #F2F2F2" >
                <v-container id="scroll-target" style="max-height: 400px;" class="scroll-y">
                  <v-layout column style="height: 400px; text-align : left">
                    <Chat player="player 1" answer="sample answer"/>
                    <Chat player="player 1" answer="sample answer"/>
                    <Chat player="player 1" answer="sample answer"/>
                  </v-layout>
                </v-container>
              </v-card>
            </v-flex>
            <v-flex d-flex>
              <v-card color="green" style="height : 10%">
                <v-card-text>
                  <v-layout row-wrap> 
                    <v-flex d-flex xs12 sm6 md10>
                      <v-text-field
                        v-model="answer"
                        style = "color : white"
                        label="Type your answer">
                      </v-text-field>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md2>
                      <v-btn color="green lighten-4">Submit</v-btn>
                    </v-flex>
                  </v-layout>

                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex d-flex xs12 sm6 md3>
          <v-card color="green lighten-4"  class="text-lg-left">
            <v-card-title primary class="title headbar">Player Online</v-card-title>
            <Player/>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Room from '@/components/Room.vue'
import Chat from '@/components/Chat.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'board',
  components: {
    Room,
    Chat,
    Player
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.headbar {
  background-color : #3DBC55; 
  color :white
}
</style>
