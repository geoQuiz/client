<template>
  <div class="home">
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
                <v-text-field style="color : green" name="login" label="Input your name" type="text"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn color="green">Submit</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
  }
}
</script>

<style scoped lang="scss">
.home {
  color:white;
  margin-top : 100px;
}

h2 {
  color : green;
  margin-bottom : 10px;
}

</style>
