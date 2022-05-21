<template>
  <div class="home" :style="cssProps">
   <search></search>
    
  </div>
</template>

<script>
// @ is an alias to /src

import search from './search-square.vue'
export default {
  name: "Home",
  components: {
   search,
  },
  data() {
    return {
      cssProps: {
          backgroundImage: `url(${require('@/assets/th.jpg')})`
        }
      
    }
  },

};
</script>

<style lang="scss" scoped>
  .home{
    // padding-top: 100px;
    z-index: 2;
    width: auto;
    height: 40vh;
    background:  no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>