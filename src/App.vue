<template>
  <div  id="nav">
    <router-link to="/home">Home</router-link>  |
    <router-link to="/detail">Detail</router-link>  |
    <router-link to="/detail">Panier</router-link>  |
    <router-link to="/detail">Pay</router-link>  |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: black;
}

#nav a {
  font-weight: bold;
  color:white;
  margin-left: 20px;
   margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
