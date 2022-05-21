<template>
  <div class="reserved">
      <div v-for="data in reserves" :key="data.id">
         <div class="card" style="margin-bottom: 40px;">
                            <div class="card-header" >
                                Reserved
                            </div>
                           
                            <div class="card-body"  >
                                <div class="row" style="padding-bottom:40px;">
                                    <div class="col-md-6 col-lg-6">
                                        <h4 class="card-title">{{data.house_name}}</h4>
                                    </div>
                                     <div class="col-md-6 col-lg-6">
                                        <h4 class="card-title"><small>Ksh {{data.price}}</small> </h4>
                                    </div>
                                </div>
                                
                                <p class="card-text"></p>
                                    <!-- <progress id="file" value="33" max="100" style="width:50%"> 33% </progress> -->
                                    <!-- <div class="row">
                                        <div class="box">booked</div>
                                        <div class="box">tajek</div>
                                        <div class="box"></div>
                                        <div class="box"></div>
                                    </div> -->
                              <div class="row">
                                  <div class="col-4"  v-if="data.confirmed">
                                       <i class="fas fa-check" style="font-size:11px; color: #18D26E;"> confirmed</i>
                                  </div>
                                 <div class="col-8">
                                      <div v-if="data.confirmed">
                                       <div >
                                       <button type="button" class="btn btn-primary pull-right" data-toggle="modal"
                                        data-target="#myModal" style="font-size:12px;float:right; margin-right:0;"><center><i class="fas fa-book" aria-hidden="true"> Book</i></center>
                                        </button>
                                  </div>
                                      
                                  </div>
                                  <div v-else>
                                      <div >
                                       <button type="button" class="btn btn-primary pull-right" data-toggle="modal"
                                        data-target="#myModal" style="font-size:12px;float:right; margin-right:0;" disabled><i class="fas fa-book" aria-hidden="true"> Book</i>
                                        </button>
                                  </div>
                                 </div>
                                  
                                  </div>
                              </div>

                                         <div id="myModal" class="modal fade" tabindex="-1" role="dialog"
                                    aria-labelledby="myModalLabel" aria-hidden="true">
                                    <div class="modal-dialog">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title" id="myModalLabel">House Payments</h4>
                                                <button type="button" class="close" data-dismiss="modal"
                                                    aria-hidden="true">×</button>
                                            </div>
                                            <div class="modal-body">
                                                <div id="app">
                                                    <div class="card">
                                                        <div class="card-body">
                                                    <div class="form-group my-2">
                                                        <label class="control-label">Email</label>
                                                    <input class="form-control" type="email" v-model="email" placeholder="Enter email">
                                                    </div>
                                                    <div class="form-group my-2">
                                                        <label class="control-label">Amount </label>
                                                    <input class="form-control" type="number" v-model="data.price" placeholder="Enter amount" disabled>
                                                    </div>
                                                   
                                                    </div>
                                                        </div>
                                                    </div>
                                                                                                </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-light"
                                                    data-dismiss="modal">Close</button>
                                                    
                                                <button class="btn btn-primary" @click="onButtonClick">Pay Now</button>
                                            </div>
                                        </div><!-- /.modal-content -->
                                    </div><!-- /.modal-dialog -->
                                </div><!-- /.modal -->
                            </div>
                            
                        </div>
      </div>                  
  </div>
</template>

<script>
// import Swal from 'sweetalert2'
const IntaSend = require("intasend-inlinejs-sdk")
const PUBLIC_KEY = "ISPubKey_live_1a2b4350-e1a4-458a-a922-4e2f35118c95u";
import axios from "axios";
export default {
    name: 'reserved',
    data(){
        return{
            reserves : null,
            intaSendInstance: {},
            amount: 10,
            name: 'Levin mutai',
            email: "levinmutai@gmail.com"
        }
    },
    created() {
    this.intaSendInstance = new IntaSend({
      publicAPIKey: PUBLIC_KEY,
      live: true // Set to true when going live
    });
  },
    methods:{

        onButtonClick() {
        this.intaSendInstance
        .run({ amount: this.amount, currency: "KES", email: this.email })
        .on("COMPLETE", (results) =>
          console.log("COMPLETE:" + JSON.stringify(results))
        )
        .on("FAILED", (results) =>
          console.log("FAILED:" + JSON.stringify(results))
        );
        },


        getData(){
            let id = this.$store.state.phone;
            let url = 'api/reserved/';
            let n = '/';
            axios.get(url+id+n).then(res=>{
                this.reserves = res.data
                this.amount = res.data.price
            }).catch(error=>{
                console.log(error)
            })
        },
    }, 
    mounted(){
        
    },
    beforeMount(){
        this.getData()
    }
}
</script>

<style lang='scss' scoped>
    .reserved{
        padding-top: 65px;
    }
   .card{
       margin: 0 30px;
   }
   .pull-right{
       float: right;
   }
   .box{
       width: 20px;
       height: 25px;
       border-radius: 20px;
       background-color: red;
       margin-right: 14%;
       margin-left: 10px;
   }
   .success{
       background-color: #18D26E;
   }

//    for the payment modal
card {
    max-width: 500px;
    margin: auto;
    color: black;
    border-radius: 20 px;
}

p {
    margin: 0px;
}

.container .h8 {
    font-size: 30px;
    font-weight: 800;
    text-align: center;
}

.btn.btn-primary {
    width: 50%;
    height: 40px;
    display: flex;
    
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    font-weight: 700;
    background-image: linear-gradient(to right, #18D26E 0%, #79cb8d 51%, #89d377 100%);
    border: none;
    transition: 0.5s;
    background-size: 200% auto;

}


.btn.btn.btn-primary:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
}



.btn.btn-primary:hover .fas.fa-arrow-right {
    transform: translate(15px);
    transition: transform 0.2s ease-in;
}

.form-control {
    color: white;
    background-color: #223C60;
    border: 2px solid transparent;
    height: 60px;
    padding-left: 20px;
    vertical-align: middle;
}

.form-control:focus {
    color: white;
    background-color: #18407C;
    border: 2px solid #2d4dda;
    box-shadow: none;
}

.text {
    font-size: 14px;
    font-weight: 600;
}

::placeholder {
    font-size: 14px;
    font-weight: 600;
}
</style>