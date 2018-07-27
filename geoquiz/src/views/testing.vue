<template>
  <div>
    <h1>{{title}}</h1>
    <inputplayercomponent/>
  </div>
</template> 

<script>
// @ is an alias to /src



import inputplayercomponent from "@/components/playerList.vue";
export default {
  components: {
    inputplayercomponent
  },
  data(){
     return{
         title: "these are the player list"
     }
  }
}
</script>
