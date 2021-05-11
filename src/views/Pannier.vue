<template>
    <div class="container">
    <table>
     <tr class="thead">
    <td >Photo</td>
    <td >Nom</td>
    <td >Quantite</td>
    <td >Prix</td>
    <td >Action</td>
    </tr>
    <tr v-for="item in products" v-bind:key="item.item" >
    <td ><img alt="product"  :src="item.source"></td>
    <td >{{item.item}}</td>
    <td >{{number}}</td>
    <td >{{item.price}}</td>
    <td >
    <router-link to="/pay">
    <button>
        Buy
    </button>
    </router-link>
    
    <button>
        Delete
    </button>
    </td>
    </tr>
    </table>
    </div>

</template>
<script>
export default {
   data() {
    return {
        name:'pizza',
        title:'DETAIL',
     products:[ {item: 'pizza',price: 10000,desc:'the best pizza made in burundi with burundian products', source : require('@/assets/agro/product1.jpeg')},
                {item: 'haricot',price: 1000,desc:'Haricots de kirundo ', source : require('@/assets/agro/product2.jpg') },
                {item: 'riz',price: 800,desc:'The best rice in burundi from Gihanga ', source : require('@/assets/agro/product3.jpg') },
                {item: 'pizza',price: 15000,desc:'Delicious flavered and chip ', source : require('@/assets/agro/product1.jpeg') }
                ],
                number:2,
    }
  }
}
</script>
<style scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.thead{
    background-color:grey;
    text-decoration:bold;
}
img{
    
    height: 100px;
    border-radius:20px;
    position: relative;
    padding: 10px;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>