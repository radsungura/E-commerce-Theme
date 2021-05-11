<template>

  <div v-for="item in products" v-bind:key="item.item" class="container">
  <div class="home" v-if="item.item==name">
    <img alt="Vue logo"  :src="item.source"><br>
    <label for="item">{{item.desc}}</label><br>
    <button>
        Add to Cart
    </button>
  </div>
    </div>
</template>
<script>
export default {
   data() {
    return {
        name:'pizza',
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
<style scoped>
img{
    
    height: 500px;
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