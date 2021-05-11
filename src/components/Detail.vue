<template>
  <div class="hello">
    <h1>{{ title }}</h1>

  </div>
  <tr v-for="item in products" v-bind:key="item.item">
    <td  v-if='item.item == name'>
      <img :src="item.source"  >
      <br>
      <label for="product">{{ item.item }}</label> 
        <label for="product">{{ item.desc}}</label> 
      <br>
      <button v-on:click="action" style="color:white;"  dark fixed bottom right fab>
      Add to Cart
    </button>
    </td>
  </tr>
    
</template>

<script>
export default {
  name: 'Detail',
  props: {
    name: String
  },
   data() {
    return {
        title:'DETAIL',
     products:[ {item: 'pizza',desc:'the best pizza made in burundi with burundian products', source : require('@/assets/agro/product1.jpeg')},
                {item: 'haricot',desc:'Haricots de kirundo ', source : require('@/assets/agro/product2.jpg') },
                {item: 'riz',desc:'The best rice in burundi from Gihanga ', source : require('@/assets/agro/product3.jpg') },
                {item: 'pizza',desc:'Delicious flavered and chip ', source : require('@/assets/agro/product1.jpeg') }
                ]
    }
  }
}
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
v-card{
  border-radius:10%;
  background-color: rgb(23, 139, 233);
  color: aliceblue;
  
}
</style>