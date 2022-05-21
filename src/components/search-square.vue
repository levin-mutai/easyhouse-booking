<template>
  <div class="search" style="z-index:-2;">
    <!-- ============================================================== -->
                          <!-- Search -->
                          <!-- ============================================================== -->
                          <li class="nav-item  block sticky-top" style="padding-top:-40px; margin-top:-30px; position:sticky; padding-bottom:20px;">
                              <a class="nav-link" href="javascript:void(0)">
                                  <!-- <form>
                                      <div class="customize-input">
                                          <input class="form-control custom-shadow custom-radius border-0 bg-white"
                                              type="search" placeholder="Search" aria-label="Search">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
</svg>
                                      </div>
                                  </form> -->
                                <form autocomplete="off"><input  name="q" id="q" class="form-control custom-shadow custom-radius border-0 bg-white"
                                              type="search" placeholder="Search" aria-label="Search" onkeyup="showResults(this.value)"  style="width:70%; margin-left:15%;"/>
<div id="result"></div>
</form>
                              </a>
                          </li>
                          <!-- ============================================================== -->
                          <!-- User profile and search -->
                          <!-- ============================================================== -->
  </div>
</template>

<script>
export default {
    name: 'search',

    data(){
      return{
        value:"",
        search_terms : ['apple', 'apple watch', 'apple macbook', 'apple macbook pro', 'iphone', 'iphone 12', 'car','carrot','levin'],
      }
    },
    methods:{
     
    }
}
</script>

<style lang='scss' scoped>
.search{
    
    padding-top: 120px;
}

@media screen and (min-width: 767px) {
  // .nav-item.block.sticky-top{
  //   display: none;
  // }
}
#result {
  border: 1px dotted #ccc;
  padding: 3px;
  background-color: #eee;
  width: 70%;
  margin-left: 15%;
}
#result ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  font-weight: 700;
}
#result ul li {
  padding: 5px 0;
}
#result ul li:hover {
  background: #eee;
}

</style>