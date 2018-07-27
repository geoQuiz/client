<template>
  <div class="room">
    <v-btn color="green" class = "btn">{{ msg }}</v-btn>
  </div>
</template>

<script>
export default {
  name: 'Room',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  width : 90%;
}
</style>
