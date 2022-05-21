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
                                              type="search" placeholder="Search by location" aria-label="Search" @keyup="showResults"  style="width:70%; margin-left:15%;" v-model="value"/>
<div id="result">
  <li v-for="data in list" :key="data" style="list-style-type: none; align-items: center;">
    <ul style="color:black;font-weight: 800;" @click="loc = data, search()">
      {{data}}
    </ul>
  </li>
</div>
</form>
                              </a>
                          </li>
                          <!-- ============================================================== -->
                          <!-- User profile and search -->
                          <!-- ============================================================== -->
  </div>
</template>

<script>
import axios from 'axios'
// import miniToastr from 'mini-toastr' //ES6
// miniToastr.init()
export default {
    name: 'search',

    data(){
      return{
        value:"",
        loc: null,
        info: null,
        list: [],
        search_terms : [],
      }
    },
    methods:{
      autocompleteMatch(input) {
            if (input == '') {
              return [];
            }
            var reg = new RegExp(input)
            return this.search_terms.filter(function(term) {
              let lev = term.toLowerCase()
              if (lev.match(reg)) {
                return lev;
              }
            });
          },
            
      showResults() {
            // res = document.getElementById("result");
            // res.innerHTML = '';
            // let list = '';
            this.list=[]
            let terms = this.autocompleteMatch(this.value);
            // for (i=0; i<terms.length; i++) {
            //   this.list.push(terms[i])
            // }
            terms.forEach(element => {
          this.list.push(element)
        });
          },
      getData(){
        axios.get('/api/v1/listings').then(res=>{
          
          this.info = res.data
          // this.userdetails();
          console.log("imerun withDefaults")
          this.populateSearch()
        }).catch(error=>{
          console.log(error)
          
        })
      },
      populateSearch(){
        this.info.forEach(element => {
          this.search_terms.push(element.location)
        });
        console.log(this.search_terms)
      },
      search(){
        let url = 'api/v1/search/'
        let loc = this.loc
        let n = '/'
        axios.get(url+loc+n).then(res=>{
          console.log(res.data)
          this.$store.commit('setInfo', res.data)
          console.log(this.$store.state.info)
          this.$router.push('/listings')
        }).catch(
          // miniToastr.error("Check your internet connection","", 5000)
        )
      }
    },
    mounted(){
      this.getData();
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

#result ul li:hover {
  background: #eee;
}

</style>