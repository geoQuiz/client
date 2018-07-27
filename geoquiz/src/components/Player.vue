<template>
  <div class="player">
    <h3>{{player}}</h3>
    <span>Point : {{point}}</span>
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    player: String,
    point : String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.player {
  margin : 5px;
}
h3 {
  margin-bottom: 3px;
}
</style>
