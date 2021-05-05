<template>
  <div class="hello">
    <h1>{{ msg }}{{ product }}</h1>

  </div>
    <tr>
     <td>
      <img src="../assets/agro/product1.jpeg"><br>
      <label>pizza de chez muzee wa rupara</label><br>
      <button  >Add to cart</button>
    </td>
    <td>
      <img src="../assets/agro/product2.jpg">
      <br>
      <label>Haricots de kirundo a bas prix</label>
      <br>
      <button  >Add to cart</button>
    </td>
    <td>
      <img src="../assets/agro/product3.jpg">
      <br>
      <label>Fameuse Riz de Gihanga au prix abordable</label>
      <br>
      <button  >Add to cart</button>
    </td>
    <td>
      <img src="../assets/agro/product1.jpeg">
      <br>
      <label>pizza du cafe gourmand le meuilleur</label>
      <br>
      <button  >Add to cart</button>
    </td>
  </tr>
  <v-card class="mx-auto" max-width="344" outlined> rad</v-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return { product = 'rad'
    }

}}



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
div {
  display:inline-block;
  margin: 0 10px;
}
tr{
  width: 100%;
}
img{
  width: 80%;
}
button{
  border-radius:10%;
  background-color: rgb(23, 139, 233);
  color: aliceblue;
  size:50px;
}
</style>