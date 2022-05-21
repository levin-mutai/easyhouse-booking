<template>
  <div id="nav" style="z-index:16; box-shadow: -1px 1px 4px grey;">
    <div class="logo">
      <img :src="require('./assets/easyhouse.png')" alt="bg" style="width:48px; height:90%; padding-top:4px;">
    </div>
    <div class="navbar">
      
      <router-link to="/listings">Listings</router-link>
      <router-link to="/reserved">Reserved</router-link>
      <router-link to="/watchlist">watch list</router-link>
    </div>
     

      <!-- <i class="fa fa-user-circle" aria-hidden="true" style="font-size:35px; padding-top:10px; float:right; padding-right:40px; vertical-align:middle;"></i> -->
     
      <div class="profile">
         <div v-if="this.$store.state.token==undefined" style="margin-right:15px; margin-top:15px;">
           <router-link to="/">Login </router-link>
         </div>
        <ul style="list-style:none;" v-if="this.$store.state.token!=undefined">
          <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="javascript:void(0)" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="./assets/user.png" alt="user" class="rounded-circle"
                                    width="40">
                                <span class="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
                                        class="text-dark">{{user}}</span> <i data-feather="chevron-down"
                                        class="svg-icon"></i></span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <a class="dropdown-item" href="javascript:void(0)"><i data-feather="user"
                                        class="svg-icon mr-2 ml-1"></i>
                                    My Profile</a>
                               
                                <a class="dropdown-item" href="javascript:void(0)"><i data-feather="power"
                                        class="svg-icon mr-2 ml-1"></i>
                                    Logout</a>
                                <div class="dropdown-divider"></div>
                                <div class="pl-4 p-3"><a href="javascript:void(0)" class="btn btn-sm btn-info">View
                                        Profile</a></div>
                            </div>
                        </li>
        </ul>
      </div>
      
  </div>

  
  
  <router-view />
  <Footeer/>
</template>
<script>
// import login from './components/login.vue'
import Footeer from './components/footeer.vue'
export default {
 data() {
      return {
        user : localStorage.getItem('username')
      }
    },

  components: {
    // login,
    Footeer
  }
}
</script>
<style lang="scss" scoped>
$basecolor: rgb(4, 139, 27);
#app {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: white;

  color: #2c3e50;
}

#nav {
  // padding: 30px;
  // justify-content: space-between;
  display: inline-flex;
  flex-direction: row;
  padding-left: 40px;
  width: 100%;
  justify-content: space-between;
  height: 55px;
  background-color: white;
  position: fixed;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    // background-color: white;
    padding-left: 30px;
    &.router-link-exact-active {
      color: $basecolor;
    }
    :hover{
      color: $basecolor;
    }
  }
  
}
@media screen and (max-width: 950px) {
  .navbar{ display: none;}
}
</style>
