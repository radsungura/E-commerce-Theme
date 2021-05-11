<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div><br>
    <div class="block" v-for="item in products" v-bind:key="item.item" >
      <div class="td">
      <img :src="item.source">
      <br>
       <label class="name" for="product">{{item.item}}</label>
      <label class="price" for="product">{{item.price}}BFI</label><br><br>
      <button class="like" v-on:click="action">
      like
    </button>
      <button class="see" v-on:click="action" >
      see all
    </button>
      </div>
    </div>
    
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   data() {
    return {
     products:[ {item: 'pizza',price: 1500,desc:'the best pizza made in burundi with burundian products', source : require('@/assets/agro/product1.jpeg')},
                {item: 'haricot',price: 1200,desc:'Haricots de kirundo ', source : require('@/assets/agro/product2.jpg') },
                {item: 'riz',price: 1000,desc:'The best rice in burundi from Gihanga ', source : require('@/assets/agro/product3.jpg') },
                {item: 'pizza',price: 2000,desc:'Delicious flavered and chip ', source : require('@/assets/agro/product1.jpeg') },
                {item: 'pizza',price: 1500,desc:'the best pizza made in burundi with burundian products', source : require('@/assets/agro/product1.jpeg')},
                {item: 'haricot',price: 1200,desc:'Haricots de kirundo ', source : require('@/assets/agro/product2.jpg') },
                {item: 'riz',price: 1000,desc:'The best rice in burundi from Gihanga ', source : require('@/assets/agro/product3.jpg') },
                {item: 'pizza',price: 2000,desc:'Delicious flavered and chip ', source : require('@/assets/agro/product1.jpeg') }
                ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.price{
 text-decoration:bold ;
  
 margin-left: 30%;
}
.name{
 text-decoration:bold ;
 margin-left: 0px;
}
.like{
 margin-right: 30%;
 width: 30%;
 height:  45%;
}
.see{
 background-color: forestgreen;
 width: 30%;
 height:  45%;
}
.logo {
 width: 100px;
}
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
.td{
  background-color: rgb(231, 228, 228);
  display: inline-block;
   width:250px;
}
.block{
  display: inline-block;
 
}
tr{
  width: 100%;
}
img{
  width: 100%;
}
button{
  border-radius:10%;
  background-color: rgb(23, 139, 233);
  color: aliceblue;
  size:50px;
}
.card{
  border-radius:10%;
  background-color: rgb(23, 139, 233);
  color: aliceblue;
  
}
</style>