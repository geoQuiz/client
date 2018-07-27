<template>
  <div class="chat">
    <h3>{{player}}</h3>
    <span>Answer : {{answer}}</span>
  </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    player: String,
    answer : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.chat {
  margin : 5px;
}
h3 {
  margin-bottom: 3px;
}
</style>
