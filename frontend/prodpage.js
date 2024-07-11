
import Request from "./Request.js";
import addcart from './addtocart.js';
import prodetail from "./detail.js";
export default function prodpage($department){
    let data = {
        "department":$department,
    };
    Request().post("/index.php?action=getProducts",Qs.stringify(data))
    .then(res => {
        let response = res['data'];

        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `<div class="container-fluid ">
                                <div class="row px-xl-5">            
                                    <!-- Shop Product Start -->
                                    <div class="col-lg-auto col-md-12">
                                        <div class="row pb-4 ">
                                            
                                        <div class=center id=center>

                                        </div>

                                            <div class="col-12 pb-1" >
                                                <div class="d-flex align-items-center justify-content-between mb-4">

                                                    <div class="dropdown ml-4">
                                                        
                                                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="triggerId">
                                                            <a class="dropdown-item" href="#">Latest</a>
                                                            <a class="dropdown-item" href="#">Popularity</a>
                                                            <a class="dropdown-item" href="#">Best Rating</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>`;
                rows.forEach(element => {
                     str+= `
                                            <div class="col-lg-3 col-md-6 col-sm-12 pb-1" >
                                                <div class="card product-item border-0 mb-4"style=height:700px >
                                                    <div style="height:450px; position: relative; " class="card-header  product-img position-relative overflow-hidden bg-transparent border p-0"  >
                                                        <img class="img-fluid "style="max-height: 100%;  
                                                        max-width: 100%; 
                                                        width: 400px;
                                                        height: 400px;
                                                        position: relative;  
                                                        top: 0;  
                                                        bottom: 0;  
                                                        left: 0;  
                                                        right: 0;  
                                                        margin: auto;
                                                        padding:40px;"  name=id id=`+element['BookID']+` src="img/`+element['BookID']+`.jpg" alt="" >
                                                    </div>
                                                    <div style="height:100px;" class=" border-left border-right text-center p-0 pt-4 pb-3" >
                                                        <h6 class="text-truncate mb-3">`+element['ProdName']+`</h6>
                                                        <div class="d-flex justify-content-center">
                                                            <h6>$`+element['UnitPrice']+`</h6><h6 class="text-muted ml-2">
                                                            
                                                        </div>

                                                    </div>
                                                    <div class="card-footer d-flex justify-content-between bg-light border">
                                                        <a name=detail class="btn btn-sm text-dark p-0"><i class="fas fa-eye text-primary mr-1"></i>商品資訊</a>
                                                        <a   name=addtocart for="show" class="btn btn-sm text-dark p-0"><i class="fas fa-shopping-cart text-primary mr-1"></i>Add To Cart</a>
                                                    </div>
                                                </div>
                                            </div>`;
                });                           
                      str+=`      
                                            <div class="col-12 pb-1">
                                                <nav aria-label="Page navigation">
                                               
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Shop Product End -->
                                </div>
                            </div>
                            <!-- Shop End -->`;

               
                
                    document.getElementById("content").innerHTML=str;

                    const addtocart=document.getElementsByName('addtocart');
                    const ids = document.getElementsByName("id");
                    const detail=document.getElementsByName('detail');
                    for(let i=0; i<addtocart.length; i++){
                        addtocart[i].onclick = function(){
                            addcart(ids[i].id);                   
                        };
                    }
                    for(let i=0; i<detail.length; i++){
                        detail[i].onclick = function(){
                            prodetail(ids[i].id);
                        };
                    }



                    if(window.localStorage){ //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                    }
        
                    break;
                case 403:
                    alert("連線逾時，請重新登入");
                    location.reload();
                    break;
            
                default:
                    document.getElementById("content").innerHTML=response['message'];
                    break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
   



}