import Request from "./Request.js";
import review from "./review.js";
import addtocart from "./addtocart.js";
export default function detail(pid){
    let data = {
        "department":pid,
    };
    Request().post("/index.php?action=getProducts",Qs.stringify(data))
    .then(res => {
        let response = res['data'];

        switch(response['status']){
            case 200:     
                const row = response['result'][0];
                let str=
                `<div class="container-fluid py-5">
                    <div class="row px-xl-5">
                        <div class="col-lg-4 pb-4">
                            <div id="product-carousel" class="carousel slide" data-ride="carousel">
                                <div class="border">
                                    <div >
                                        <img class="w-100 h-100" style="weight:80%;height:80%" src="img/`+pid+`.jpg" alt="Image">
                                    </div>
                                
                                </div>
                                
                            </div>
                        </div>

                        <div class="col-lg-7 pb-5" style="flex-direction: column;display:flex">
                            <div style="align-content:flex-start;flex:1; flex-direction: column;display:flex">
                            <h3 class="font-weight-semi-bold">`+row['ProdName']+`</h3>
                            <div class="d-flex mb-3">
                                <div class="text-primary mr-2">
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star"></small>
                                    <small class="fas fa-star-half-alt"></small>
                                    <small class="far fa-star"></small>
                                </div>
                                <small class="pt-1"></small>
                            </div>
                            <h3 class="font-weight-semi-bold mb-4">$`+row['UnitPrice']+`</h3>
                            </div>
                            <div style="justify-self:flex-end; flex:1; flex-direction: column;">
                            <p class="mb-4">
                            `+row['detail']+`
                            </p>
                        
                        
                            <div class="d-flex align-items-center mb-4 pt-2">
                                <div class="input-group quantity mr-3" style="width: 130px;">
                                    <div class="input-group-btn">
                                        <button class="btn btn-primary btn-minus" id=reduce >
                                        <i class="fa fa-minus"></i>
                                        </button>
                                    </div>
                                    <input type="text" class="form-control bg-secondary text-center" value=1 id=qty disabled="disabled">
                                    <div class="input-group-btn">
                                        <button class="btn btn-primary btn-plus" id=add>
                                            <i class="fa fa-plus"></i>
                                        </button>
                                    </div>
                                </div>
                                <button class="btn btn-primary px-3"  id=addCart><i class="fa fa-shopping-cart mr-1"></i> Add To Cart</button>
                            </div>
                            </div>
                        
                        </div>
                    </div>
                    <div class="row px-xl-5">
                        <div class="col">
                            <div class="nav nav-tabs justify-content-center border-secondary mb-4">
                                <a class="nav-item nav-link active" data-toggle="tab" href="#tab-pane-1">Description</a>
                                <a class="nav-item nav-link" data-toggle="tab" href="#tab-pane-3">Reviews</a>
                            </div>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="tab-pane-1">
                                    <h4 class="mb-3">Product Description</h4>
                                    <p style="word-wrap: break-word;">`+row['detail']+`</p>
                                    
                                    
                                </div>
                                
                                <div class="tab-pane fade" id="tab-pane-3">
                                    <div class="row" id=comment>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`

            review(pid,row['ProdName']);
    document.getElementById("content").innerHTML=str;


    document.getElementById("add").onclick=function(){
        document.getElementById("qty").value=parseInt(document.getElementById("qty").value)+1;
        
    }
    document.getElementById("reduce").onclick=function(){
        if (document.getElementById("qty").value=='1') {
            alert('數量不能小於1')
        } else {
         document.getElementById("qty").value=parseInt(document.getElementById("qty").value)-1;   
        }
    }
    document.getElementById("addCart").onclick=function(){
        addtocart(pid,document.getElementById("qty").value);
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
}