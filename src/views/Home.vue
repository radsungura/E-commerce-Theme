<template>
  <div class="home">
    <img alt="Vue logo" width="50px" src="../assets/yotta.jpg">
    <HelloWorld msg="Welcome to Yotta market [UPDATED]"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
