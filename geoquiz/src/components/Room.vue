<template>
  <div class="room">
    <v-btn color="green" class = "btn">{{ msg }}</v-btn>
  </div>
</template>

<script>
import { database } from '../firebase.js';

export default {
  name: 'Room',
  props: {
    msg: String
  },
  mounted () {
    this.get()
  },
  methods : {
    get() {
      database.ref('/').on('value', function (snapshot) {
        let lalaa = snapshot.val().questions
        console.log(lalaa)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  width : 90%;
}
</style>
