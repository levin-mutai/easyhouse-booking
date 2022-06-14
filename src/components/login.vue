<template>
   
    <div class="login">
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
       
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Login box.scss -->
        <!-- ============================================================== -->
       
            <div class="auth-box row" style="height:40%;">
                <!-- <div class="col-lg-7 col-md-5 modal-bg-img" >
                </div> -->
                <div class="col-lg-7 col-md-7 bg-white">
                    <div class="p-3">
                        <div class="text-center">
                            <img src="../assets/easyhouse.png" alt="wrapkit">
                        </div>
                        <h2 class="mt-3 text-center">Sign In</h2>
                        <p class="text-center">Enter your email address and password to access admin panel.</p>
                        <form class="mt-4" @submit.prevent="submitForm"> 
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="text-dark" for="uname">Email</label>
                                        <input class="form-control" id="uname" type="email"
                                            placeholder="enter your username" v-model="email" required>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="text-dark" for="pwd">Password</label>
                                        <input class="form-control" id="pwd" type="password"
                                            placeholder="enter your password" v-model="password" required>
                                    </div>
                                </div>
                                <div class="col-lg-12 text-center">
                                    <button type="submit" class="btn btn-block btn-dark">Sign In</button>
                                </div>
                                <div class="col-lg-12 text-center mt-5">
                                    Don't have an account? <a href="/register" class="text-danger">Sign Up</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      
        <!-- ============================================================== -->
        <!-- Login box.scss -->
        <!-- ============================================================== -->
    </div>
</template>

<script>
import axios from 'axios';
// import AppVue from '../App.vue';
// import {ref} from 'vue';
import miniToastr from 'mini-toastr' //ES6
miniToastr.init()// config can be passed here miniToastr.init(config)
// miniToastr.success(message, title, timeout, cb, config)
// miniToastr.info(message, title, timeout, cb, config)
// miniToastr.warn(message, title, timeout, cb, config)
// miniToastr.error(message, title, timeout, cb, config)
export default {
name:'login',


data() {
      return {
        password: '',
        email: '',
       
      }
    },

    methods: {
      submitForm(){
    
        axios.post('/api/v1/token/login',{
          "password": this.password,
          "email": this.email   
        }, 
)
        .then(Response =>{      
        //   alert('logged in succsfully')
          
          console.log(Response)
          const token = Response.data.auth_token
          
          localStorage.setItem('email', this.email)
          this.$store.commit('setToken', token)
          axios.defaults.headers.common['Authorization'] = 'Token ' + token
          this.$store.commit('setUser', this.username)
          localStorage.setItem('token', token)
          
          axios.defaults.headers.common['Authorization'] = 'token ' + token
          this.$router.push("/listings");
       
        }).catch(err=>{
             miniToastr.error(err,"Wrong creds Please check and try agin", "incorrect creds", 5000)
        }
         
         
          
        )
      },
      getData(){
        axios.get('/api/v1/listings').then(res=>{
          console.log(res.data)
          this.$store.commit('setInfo', res.data)
          this.userdetails();
        }).catch(error=>{
          console.log(error)
          
        })
      },
    },
    mounted(){
        this.getData()
    }
}
</script>

<style lang='scss' scoped>
.login{
     padding-top: 60px; 
    //  overflow-y: hidden;
     overflow: hidden;
    .auth-box.row{
        margin-left: 30%;
    }

}
@media screen and (max-width: 500px) {
    .login{
        margin-left: -40%;
    }
     .auth-box.row{
        margin-left: -30%;
        padding: 0;
        width: 70%;
        justify-self: center;
       
    }
}
</style>