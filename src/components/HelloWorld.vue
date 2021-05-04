<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

  </div>
<div id="app1">
    <h1>Vue Mart</h1>
    <h2>Shopping Cart</h2>
    <ul>
        <li v-for="item in shoppingCart" v-bind:key="item.label">
            {{ item.label }} : {{ item.cost }}€
        </li>
    </ul>
</div>
    <tr>
     <td>
      <img src="../assets/agro/product1.jpeg"><br>
      <label>pizza de chez muzee wa rupara</label>
    </td>
    <td>
      <img src="../assets/agro/product2.jpg">
      <br>
      <label>Haricots de kirundo a bas prix</label>
    </td>
    <td>
      <img src="../assets/agro/product3.jpg">
      <br>
      <label>Fameuse Riz de Gihanga au prix abordable</label>
    </td>
    <td>
      <img src="../assets/agro/product1.jpeg">
      <br>
      <label>pizza du cafe gourmand le meuilleur</label>
    </td>
  </tr>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
const app1 = new Vue({
        el: '#app1',
        data: {
            shoppingCart: [
                { label: 'Pommes', cost: 6 },
                { label: 'Bananes', cost: 2 },
                { label: 'Noix de coco', cost: 8 }
            ]
        }
    })

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
</style>
