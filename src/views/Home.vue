<template>
  <div class="home">
    <img alt="Vue logo"  style="width:100px;" src="../assets/yotta.jpg"><br>
    <HelloWorld msg= "Welcome to Yotta market [UPDATED]"/>
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
