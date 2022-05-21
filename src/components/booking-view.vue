<template>
  <div class="view">
      <div class="row">
          <!-- name of the listing -->
          <div class="name">
              <div class="row" style="justify-content:space-between;">
                  <h4 class="card-title">{{room.name}}</h4><br>
                  <small class="text-muted font-weight-normal mb-0 w-100 text-truncate">{{room.location}}</small>
                  <p id="price" class="col-md-6 col-lg-6 pull-right">Kshs {{room.price}}<small class="text-muted font-weight-normal mb-0 w-100 text-truncate">/month</small></p>
                  <p  class="col-md-6 col-lg-6 pull-right" style="padding-right: 42px"> {{room.town}}</p>
              </div>
          </div>
          <div class="row pt-5">
                <div class="col-md-7 col-lg-7" style="padding-left:25px;">

                                     
                                        <div id="carouselExampleIndicators2" class="carousel slide"
                                            data-ride="carousel">
                                            <ol class="carousel-indicators">
                                                <li data-target="#carouselExampleIndicators2" data-slide-to="0"
                                                    class="active"></li>
                                                <li data-target="#carouselExampleIndicators2" data-slide-to="1"></li>
                                                <li data-target="#carouselExampleIndicators2" data-slide-to="2"></li>
                                            </ol>
                                            <div class="carousel-inner" role="listbox">
                                                <div class="carousel-item active">
                                                    <img class="img-fluid" :src="room.image_url"
                                                        alt="First slide" style="max-height:600px; width:100%;">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="img-fluid" :src="room.image_url1"
                                                        alt="Second slide" style="max-height:600px;width:100%;">
                                                </div>
                                                <div class="carousel-item">
                                                    <img class="img-fluid" :src="room.image_url2"
                                                        alt="Third slide" style="max-height:600px;width:100%;">
                                                </div>
                                            </div>
                                            <a class="carousel-control-prev" href="#carouselExampleIndicators2"
                                                role="button" data-slide="prev">
                                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Previous</span>
                                            </a>
                                            <a class="carousel-control-next" href="#carouselExampleIndicators2"
                                                role="button" data-slide="next">
                                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span class="sr-only">Next</span>
                                            </a>
                                        </div>
                                        <div class="" style="padding-top:-15px;">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Description</h4>
                                <div class="mt-4 activity">
                                    <div class="d-flex align-items-start border-left-line pb-3">
                                       
                                        <div class="ml-3 mt-2">
                                            <p class="font-14 mb-2 text-muted">{{room.description}}
                                            </p>
                                           
                                        </div>
                                    </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                </div>
                  <div class="col-md-4 col-lg-4" style="padding-left:25px; ">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Property Details</h4>
                                <div class="mt-4 activity">
                                    <div class="d-flex align-items-start border-left-line pb-3">
                                        <div>
                                            <!-- <a href="javascript:void(0)" class="btn btn-success btn-circle mb-2 btn-item rounded-circle ">
                                                <i class="bi bi-ticket-detailed"></i>
                                            </a> -->
                                        </div>
                                        <div class="ml-3 mt-2">
                                            <h5 class="text-dark font-weight-medium mb-2">Property Details</h5>
                                            <p class="font-14 mb-2 text-muted">Propert ID: <br> {{room.id}}
                                                
                                            </p>
                                            <span class="font-weight-light font-14 text-muted">Agent: {{room.agent}}</span>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start border-left-line pb-3">
                                        <div>
                                            <!-- <a href="javascript:void(0)"
                                                class="btn btn-danger btn-circle mb-2 btn-item rounded-circle ">
                                                <i data-feather="message-square"></i>
                                            </a> -->
                                        </div>
                                        <div class="ml-3 mt-2">
                                            <h5 class="text-dark font-weight-medium mb-2">Requirements</h5>
                                            <p class="font-14 mb-2 text-muted">{{room.requirement}}</p>
                                            
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-start border-left-line">
                                        <div>
                                            <!-- <a href="javascript:void(0)" class="btn btn-info btn-circle mb-2 btn-item rounded-circle ">
                                                <i data-feather="bell"></i>
                                            </a> -->
                                        </div>
                                        <div class="ml-3 mt-2">
                                            <h5 class="text-dark font-weight-medium mb-2">Property Features
                                            </h5>
                                            <p class="font-14 mb-2 text-muted">
                                                <ul v-for="f in fit" :key="f">
                                                   <li>{{f}}</li>
                                                </ul>
                                            </p>

                                        </div>
                                    </div>
                                    
                                </div>
                                <button type="button" class="btn btn-success" style="padding:0.5% 30% 2px 30%; margin-left:5%;" data-toggle="modal"
                                        data-target="#centermodal" > <b>Reserve Property</b> </button>
                                <!-- Center modal content -->
                                <div class="modal fade" id="centermodal" tabindex="-1" role="dialog" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="myCenterModalLabel">Choose Room Type</h4>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-hidden="true">×</button>
                                            </div>
                                            <div class="modal-body">
                                                 <form @submit.prevent="postData">
                                                    <div class="form-group mb-4">
                                                        <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" v-model="roomtype">
                                                            <option selected>Choose...</option>
                                                            <option value="Single room">Single room</option>
                                                            <option value="Bedsitter">Bedsitter</option>
                                                            <option value="One bedroom">One bedroom</option>
                                                            <option value="Two bedroom">Two bedroom</option>
                                                        </select>
                                                    </div>
                                                    <button type="submit" class="btn btn-success pull-center"  data-toggle="modal"
                                        data-target="#centermodal"> <b>Reserve</b></button>
                                                </form>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->
                                
                            </div>
                        </div>
                    </div>

                </div>
               
          </div>
      </div>
      
</template>

<script>
// axios to fetch and post data to the api endpoints
import Swal from 'sweetalert2'
import axios from 'axios';
import miniToastr from 'mini-toastr' //ES6
miniToastr.init()

export default {
    name:'booking-view',
    data(){
        return{
            id : this.$store.state.r_id,
            room: null,
            house: null,
            roomtype: null,
            fit : null,
            fullname: null,
            phonenumber: null,
            email : null,
            appear: true,
            date: null,
            price: null,
            
            
        }
    },
    methods:{
        // function to fetch for the data to be displayed on the page using the r_id(the house id)
        getData(){
            let id = this.id;
            let url = 'api/v1/listings/';
            let n = '/';
        axios.get(url+id+n).then(res=>{
          this.room = res.data;
          this.house = res.data.name;
          this.price = res.data.price;
          this.fit = res.data.features.split(',');
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
                
            this.email = res.data.email;
            this.fullname = res.data.fullname;
            this.phonenumber = res.data.phonenumber;
            })
            .catch((error) => {
               Swal.fire({
                title: error,
                text: 'Please Login',
                icon: 'error',
                confirmButtonText: 'OK'
        })
            })
        },
        // function to post the data to the booking table in the database
       postData(){
        
            let add = this.house+this.email;
           
    
            let url = 'api/v1/reserved';
            // let n = '/';
        axios.post(url,{
    "Fullname": this.fullname,
    "house": this.id,
    "price": this.price,
    "room_type": this.roomtype,
    "phone_number": this.phonenumber,
    "email": this.email,
    "house_name": this.house,
    "repetitioncheck": add
}).then(res=>{
            console.log(res.data)
            miniToastr.success('Reserved successfully',"added"+this.house+"to reserves", 5000)
            this.$router.push("/listings");
            this.messageCustomer()
        }).catch(error=>{
         miniToastr.error('Already Reserved'+error,this.house+"is already reserved ", 5000)
          this.$router.push("/listings");
        })
      },

      
      messageCustomer(){

        let message  = "Thank you for booking a house with us. We will get back to you soo after confirming availability of "+this.house;
        console.log(this.phonenumber);
        let app_token = "h0H86MxmAwQAXJz9N09n8Ng7gCz3mVN5";
        let partnerid = "4211";
        let url = 'https://quicksms.advantasms.com/api/services/sendsms/';
            // let n = '/';
        axios.post(url,
        {
            "apikey":app_token,
            "partnerID":partnerid,
            "message": message,
            "shortcode":"EASYHOUSE",
            "mobile":this.phonenumber
        }
        ).then(res=>{
            console.log(res.data)
        }).catch(error=>{
          alert(error+'\n message error')

        })
      },
      
    },
    mounted(){
        this.userdetails()
    },
    beforeMount(){
        this.getData();
    },
   

}
</script>

<style lang='scss' scoped>
    .view{
        padding:70px 10px 0 10px ;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #f9fbfd ;
        .pull-right{
            float: right;
            text-align: right;
            font-weight: 500;
            margin-top: -40px;
        }
        .btns{
            background: #18D26E;
            color: white;
            border: none;
        }
        .btn.btn-success{
             background: #18D26E;
            color: white;
          
        }
         .pull-center{
        margin: 0 40%;
        text-align: left;
    }
    }
    @media screen and (max-width: 767px) {
       .col-md-4.col-lg-4 {
           padding-top:20px;
           padding-left: -40px;
          
    }
    .pull-right{
        float:left;
        text-align: left;
    }
   

    }
</style>