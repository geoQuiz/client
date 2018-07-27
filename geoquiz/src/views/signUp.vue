<template>

<div>
  <h1>{{title}}</h1>
  <br>
  <register/>
</div>

</template>


<script>

import register from "@/components/register.vue"

export default {
    components: {
        register
    },
    data(){
        return{
            title: "regiter here"
        }
    }
    
}
</script>
