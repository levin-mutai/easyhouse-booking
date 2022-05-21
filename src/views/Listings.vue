<template>
  <div class="listings">
    <section>
      <home id='home' style="margin-bottom:40px;"></home>
    </section >
                        <section>
                          <!-- ============================================================== -->
                          <!-- Search -->
                          <!-- ============================================================== -->
                          <li class="nav-item d-none d-md-block" style="padding-top:-40px;  margin-top:-140px;  padding-bottom:20px;">
                              <!-- <a class="nav-link" href="javascript:void(0)">
                                  <form>
                                      <div class="customize-input" >
                                          <input class="form-control custom-shadow custom-radius border-0 bg-white"
                                              type="search" placeholder="Search" aria-label="Search" v-model="search">
                                              <div class="results" v-for="data in search " :key="data.id">
                                                
                                              </div>
                                         
                                      </div>
                                  </form>
                              </a> -->
                              <div class="card col-8" style="margin-left:16%;">
                                <div class="card-bord">
                                  <div id="fd-providers-list" class="bxsh-m mv30 ph16 pt24 pb16 bdrsl">
            <h2 class="mt0 mb24 heading-medium">Find the best rentals and hostels from around the country.</h2>
            <div class="row">
              
                  <div class="fxb0p fxg1 pr24 ph0-xs df-xs col-12">
                      <div class="f-gray-extra-dark mb8 mr16-xs">
            
                      </div>
                    
                  </div>
                  <div class="fxb0p fxg1 ph24 ph0-xs df-xs col-6">
                      <div class="f-gray-extra-dark mb8 mr16-xs">
                          <svg class="h40 w40" width="32" height="32" viewBox="0 0 32 32">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.32 1a7.72 7.72 0 1 0 0 15.44 7.72 7.72 0 0 0 0-15.44ZM8.6 8.72a5.72 5.72 0 1 1 11.44 0 5.72 5.72 0 0 1-11.44 0Z"></path>
              <path d="M9.955 18.456c1.346.264 2.864.464 4.365.464v2c-1.669 0-3.321-.221-4.75-.5-2.062-.405-4.146.643-4.787 2.46L3.6 26.228c-.213.604.079 1.139.553 1.294C6.072 28.15 9.549 29 14.32 29c4.77 0 8.248-.85 10.166-1.478a.92.92 0 0 0 .624-.882h1.996c-.009 1.206-.71 2.361-1.998 2.783C23.018 30.107 19.33 31 14.32 31c-5.01 0-8.698-.893-10.788-1.577-1.673-.548-2.356-2.334-1.817-3.86l1.182-3.348c1.028-2.913 4.198-4.32 7.058-3.759Z"></path>
              <path d="m22.209 25.863 8.544-9.764-1.506-1.318-7.136 8.156-3.724-3.724-1.414 1.414 5.236 5.236Z"></path>
          </svg>
                      </div>
                      <div >
                          <h3 class="heading-small mb16 mb8-xs mt0">Discover millions of offers</h3>
                          <p class="text-medium">Find and compare unique offers from thousands of trusted partners. EasyHouse has the largest selection of vacation rentals worldwide.</p>
                      </div>
                  </div>
                  <div class="fxb0p fxg1 pl24 ph0-xs df-xs col-6">
                      <div class="f-gray-extra-dark mb8 mr16-xs">
                          <svg class="h40 w40" width="32" height="32" viewBox="0 0 32 32">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.535 1.582a2.037 2.037 0 0 0-2.181 0L1.946 8.816A2.037 2.037 0 0 0 1 10.536v15.39c0 1.125.912 2.037 2.037 2.037h15.809c.72.617 1.469 1.232 2.226 1.85a1 1 0 0 0 1.263 0c2.224-1.813 4.371-3.607 5.956-5.486C29.883 22.439 31 20.36 31 17.97c0-2.416-1.31-4.26-3.111-5.057v-2.377c0-.698-.357-1.347-.946-1.72L15.535 1.582ZM25.89 12.48v-1.945a.037.037 0 0 0-.017-.031L14.464 3.27a.037.037 0 0 0-.04 0L3.018 10.505a.037.037 0 0 0-.017.031v15.39c0 .02.017.037.037.037h6.26v-9.37a1 1 0 0 1 1-1h2.587c.656-1.512 1.928-2.572 3.428-2.955 1.841-.47 3.878.106 5.392 1.831 1.188-1.354 2.7-2 4.185-1.988Zm-13.47 5.112h-1.123v8.37h5.35a23.826 23.826 0 0 1-1.53-1.636c-1.592-1.888-2.709-3.967-2.709-6.357 0-.127.004-.253.011-.377Zm1.988.377c0-1.87 1.113-3.065 2.4-3.394 1.263-.323 2.901.143 4.03 2.11a1 1 0 0 0 1.734 0c1.128-1.966 2.767-2.433 4.029-2.11 1.287.329 2.4 1.523 2.4 3.394 0 1.727-.798 3.36-2.237 5.067-1.31 1.552-3.073 3.077-5.06 4.708-1.986-1.631-3.75-3.156-5.058-4.708-1.44-1.706-2.238-3.34-2.238-5.067Z"></path>
          </svg>
                      </div>
                      <div>
                          <h3 class="heading-small mb16 mb8-xs mt0">Book the perfect rental</h3>
                          <p class="text-medium">Easyhouse makes it quick and easy to book just the right accommodation for any trip, no matter your budget.</p>
                      </div>
                  </div>
              
            </div>
</div>
                                </div>
                              </div>
                          </li>
                          <!-- ============================================================== -->
                          <!-- User profile and search -->
                          <!-- ============================================================== -->
                                 <div class="row">
                                  <div class="col-lg-4 col-md-4 p-4" v-for="data in info" :key="data.id"  >
                                      
                                      <div class="card" >
                                  <img class="card-img-top img-fluid" :src="data.image_url"
                                      alt="Card image cap" style="height:35vh;">
                                  <div class="card-body">
                                      <h4 class="card-title">{{data.name}}</h4>
                                      <!-- <p class="card-text">{{data.description}}</p> -->
                          
                                      <div class="row" style="float:center; align-items: center;">
                          
                                                  <p class="col-6" v-if="data.ratings==5">
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                  </p>
                                                  <p v-if="data.ratings==4">
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                  </p>
                                                  <p v-if="data.ratings==3">
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                  </p>
                                                  <p v-if="data.ratings==2">
                                                      <i class="fa fa-star"></i>
                                                      <i class="fa fa-star"></i>
                                                  </p>
                                                  <p v-if="data.ratings==1">
                                                      <i class="fa fa-star"></i>
                          
                                                  </p>
                                                  <span class="pull-right" ><b>{{'KSH '+data.price}}</b></span>
                          
                                          </div><!--/.packages-review-->
                                          <p class="col-6 card-text" ><small class="text-muted">{{data.location }}</small></p>
                                          <button type="button" class="btn btn-success" style="float:right; margin-top:-60px; background-color:#18D26E ;" @click="id=data.id;viewRoom();">More ..</button>
                                  </div>
                                  <div class="widget-49-meeting-action">
                            <!-- <button class="btn btn-md btn-primary btn-block" type="submit" style="margin-right:-240px;">Book Now</button> -->
                              <!-- <a href="#" class="btn btn-sm btn-flash-border-primary">Book</a> -->
                             
                              </div>
                                  </div>
                          
                              </div>
                                 </div>
                        </section>
  </div>
</template>

<script>
import axios from 'axios'
import home from '../components/Home.vue'
import Swal from 'sweetalert2'
// import book from '../components/book.vue'
export default {
    
    name: 'ManageBooking',
     data() {
        return {
            info : null,
            id : null,
            username: null,
            phone: null,
            search: null,
            
        } 
    },
    methods: {
      getData(){
        axios.get('/api/v1/listings').then(res=>{
          console.log(res.data)
          this.$store.commit('setInfo', res.data)
          this.info = this.$store.state.info
          this.userdetails();
        }).catch(error=>{
          console.log(error)
          
        })
      },
       searchListings(){
        axios.get('/api/v1/search').then(res=>{
          console.log(res.data)
          this.search = res.data
        }).catch(error=>{
          console.log(error)
          
        })
      },
      
       // function to fetch the user data using the token provided by djoser when logging in
        userdetails(){
            axios.get('/api/v1/users/me/', {
            headers: {
                'Authorization': `token ${this.$store.state.token}`
            }
            })
            .then((res) => {
            this.username = res.data.username;
            this.phone = res.data.phonenumber
            this.$store.commit('setUser',this.username);
            this.$store.commit('setPhone',this.phone)
            localStorage.setItem('username', this.username)
            })
            .catch((error) => {
            console.error(error)
            })
        },
      viewRoom(){
      
      if (this.$store.state.token!=undefined) {
        this.$store.commit('setRoom',this.id);
        this.$router.push('/booking');
      } else {
       Swal.fire({
        title: 'Not Logged in!',
        text: 'Please Login',
        icon: 'error',
        confirmButtonText: 'Cool'
})
        this.$router.push('/login')
      }
    },
    },
    filters: {
  filter: function (value) {
    if (value.startsWith(this.search)) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
},
    
    beforeMount() {
      this.getData();
    },
    components: {
        home,
    }
    
}
</script>

<style lang='scss' scoped>
// .customize-input{
//   display: inline-flex;
//   flex-direction: row ;
// }
.listings{
  overflow-x: hidden;
}

section{
  scroll-snap-align: start;
}
.listings{
  scroll-snap-type: y mandatory;
  overflow-y: scroll ;
  // height: 100vh;
}
.fa.fa-star{
  color: green;
}
.about-view.packages-btn{
    align-self: center;
    margin-right: 90px;
    a{
        color: azure;
        text-decoration: none       ;
    }
}
.about-view.packages-btn:hover{
  opacity: 50%;
  color: #B1BAC5;
  
}
li{
  list-style: none;
}
.card.card-margin:hover{
  width: 96%;
  background: aliceblue;
}
.listings{
  padding-top: 60px;
   .container{
    padding-top:74px;
 background: #cccccc;
    /* margin-top:20px; */
    // height: 100vh;
    width: 90%;
    align-self: center;
}
.card-margin {
    margin-bottom: 1.875rem;
}
.card {
    border: 0;
    box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -webkit-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
    -ms-box-shadow: 0px 0px 10px 0px rgba(82, 63, 105, 0.1);
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #ffffff;
    background-clip: border-box;
    border: 1px solid #e6e4e9;
    border-radius: 8px;
}
.card .card-header.no-border {
    border: 0;
}
.card .card-header {
    background: none;
    padding: 0 0.9375rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    min-height: 50px;
}
.card-header:first-child {
    border-radius: calc(8px - 1px) calc(8px - 1px) 0 0;
}
.widget-49 .widget-49-title-wrapper {
  display: flex;
  align-items: center;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-primary {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #edf1fc;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-day {
  color: #4e73e5;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-primary .widget-49-date-month {
  color: #4e73e5;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-secondary {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcfcfd;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-day {
  color: #dde1e9;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-secondary .widget-49-date-month {
  color: #dde1e9;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-success {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e8faf8;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-day {
  color: #17d1bd;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-success .widget-49-date-month {
  color: #17d1bd;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-info {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ebf7ff;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-day {
  color: #36afff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-info .widget-49-date-month {
  color: #36afff;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-warning {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: floralwhite;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-day {
  color: #FFC868;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-warning .widget-49-date-month {
  color: #FFC868;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-danger {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #feeeef;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-day {
  color: #F95062;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-danger .widget-49-date-month {
  color: #F95062;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-light {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fefeff;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-day {
  color: #f7f9fa;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-light .widget-49-date-month {
  color: #f7f9fa;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-dark {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #ebedee;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-day {
  color: #394856;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-dark .widget-49-date-month {
  color: #394856;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-base {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f0fafb;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-day {
  color: #68CBD7;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1;
}
.widget-49 .widget-49-title-wrapper .widget-49-date-base .widget-49-date-month {
  color: #68CBD7;
  line-height: 1;
  font-size: 1rem;
  text-transform: uppercase;
}
.widget-49 .widget-49-title-wrapper .widget-49-meeting-info {
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
}
.widget-49 .widget-49-title-wrapper .widget-49-meeting-info .widget-49-pro-title {
  color: #3c4142;
  font-size: 14px;
}
.widget-49 .widget-49-title-wrapper .widget-49-meeting-info .widget-49-meeting-time {
  color: #B1BAC5;
  font-size: 13px;
}
.widget-49 .widget-49-meeting-points {
  font-weight: 400;
  font-size: 13px;
  margin-top: .5rem;
}
.widget-49 .widget-49-meeting-points .widget-49-meeting-item {
  display: list-item;
  color: #727686;
}
.widget-49 .widget-49-meeting-points .widget-49-meeting-item span {
  margin-left: .5rem;
}
.widget-49 .widget-49-meeting-action {
  text-align: right;
}
.widget-49 .widget-49-meeting-action a {
  text-transform: uppercase;
}

}

</style>