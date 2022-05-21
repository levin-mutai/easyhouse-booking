<template>
     <div class="register">
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
       
        <!-- ============================================================== -->
        <!-- Preloader - style you can find in spinners.css -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- register box.scss -->
        <!-- ============================================================== -->
       
            <div class="auth-box row" style="height:40%;">
                <!-- <div class="col-lg-7 col-md-5 modal-bg-img" >
                </div> -->
                <div class="col-lg-7 col-md-7 bg-white" style="margin-left:20%;">
                    <div class="p-3">
                        <div class="text-center">
                            <img src="../assets/easyhouse.png" alt="wrapkit">
                        </div>
                        <h2 class="mt-3 text-center">Register</h2>
                        <p class="text-center">Enter your email address and password to access admin panel.</p>
                        <form class="mt-4" @submit.prevent="submitForm"> 
                            <div class="row">
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="text-dark" for="uname">Email</label>
                                        <input class="form-control" id="uname" type="email"
                                            placeholder="enter your email" v-model="email" required>
                                    </div>
                                </div>
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="text-dark" for="uname">Username</label>
                                        <input class="form-control" id="uname" type="text"
                                            placeholder="username" v-model="username" required>
                                    </div>
                                </div>
                                 <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="text-dark" for="uname">PhoneNumber</label>
                                        <input class="form-control" id="uname" type="tel"
                                            placeholder="+254700000000" v-model="phonenumber" required>
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <div class="form-group">
                                        <label class="text-dark" for="uname">FullName</label>
                                        <input class="form-control" id="uname" type="text"
                                            placeholder="John Doe" v-model="fullname" required>
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
                                    Have an account? <a href="/" class="text-danger"><i class="fas fa-sign-in" aria-hidden="true"></i> Sign In</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
      
        <!-- ============================================================== -->
        <!-- Register box.scss -->
        <!-- ============================================================== -->
    </div>
</template>
<script>
import Swal from 'sweetalert2'
import axios from 'axios'
export default {
    name: 'registration',
    data() {
      return {
        phonenumber: '',
        fullname: '',
        password: '',
        username: '',
        email: ''
      }
    },
    methods: {
      submitForm(){
        
        // const formData = {
        //   username: this.username,
        //   password: this.password 
        // }
        axios.post('/api/v1/users/',{
    "username": this.username,
    "phonenumber": this.phonenumber,
    "fullname": this.fullname,
    "email": this.email,
    "password": this.password
})
        .then(Response =>{
           Swal.fire({
        title: 'Signed up successfully!',
        text: 'You have been registered successfull',
        icon: 'success',
        confirmButtonText: 'OK'
})
        this.$router.push('/')
          console.log(Response)
          const token = Response.data.auth_token
          // const user = localStorage.getItem('username')
          localStorage.setItem('username', this.username)
          localStorage.setItem('email', this.email)
          this.$store.commit('setToken', token)
          axios.defaults.headers.common['Authorization'] = 'token ' + token
          
          localStorage.setItem('token', token)
          
          this.$router.push("/");
        }).catch(error =>{
          console.log(error)
          Swal.fire({
        title: 'Registration failled',
        text: 'phonenumber should start with your country code. You password should be a minimum of 8 with both capital and small letters ',
        icon: 'error',
        confirmButtonText: 'x'
})
        })
      }
    },
}
</script>

<style lang='scss' scoped>
.register{
     padding-top: 60px; 
     overflow-y: hidden;
     overflow: hidden;
    // .auth-box.row{
    //     margin-left: 30%;
    // }

}
@media screen and (max-width: 500px) {
    // .register{
    //     margin-left: -40%;
    // }
     .auth-box.row{
        margin-left: -10%;
        padding: 0;
        width: 90%;
        justify-self: center;
       
    }
}
</style>