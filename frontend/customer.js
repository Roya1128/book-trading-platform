import prodpage from './prodpage.js';
import cartpage from './cartpage.js';
import personal from './personal.js';
import contact from './contact.js';
export default function startPage(){
    const sp = `
    <!-- Topbar Start -->
    <div class="container-fluid">
        <div class="row bg-secondary py-2 px-xl-5">
            <div class="col-lg-6 d-none d-lg-block">
              
            </div>
            <div class="col-lg-6 text-center text-lg-right">
                <div class="d-inline-flex align-items-center">
                    <a class="text-dark px-2" href="https://www.facebook.com/">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="text-dark px-2" href="https://twitter.com/">
                        <i class="fab fa-twitter"></i>
                    </a>
                    <a class="text-dark px-2" href="https://www.instagram.com/">
                        <i class="fab fa-instagram"></i>
                    </a>
                    <a class="text-dark pl-2" href="https://www.youtube.com/">
                        <i class="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>



    <div class="container-fluid" style="padding-top:20px">
     
        <div class="row align-items-center py-3 px-xl-5">
            <div class="col-lg-3 d-none d-lg-block">
                <a href="" class="text-decoration-none">
                    <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
            </div>
            <div class="col-lg-6 col-6 text-left">
                <form action="">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Search for products">
                        <div class="input-group-append">
                            <span class="input-group-text bg-transparent text-primary">
                                <i class="fa fa-search"></i>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-3 col-6 text-right">

                    <i class="fas fa-user-alt" style="color:#D19C97"></i>
                    <span class="badge">`+window.localStorage['username']+`</span>

                <a  class="btn border" id=cart>
                    <i class="fas fa-shopping-cart text-primary" ></i>
                    <span class="badge"></span>
                </a>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <div class="container-fluid" >
        <div class="row border-top px-xl-5">
            <div class="col-lg-2 d-none d-lg-block ">
                <a class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" data-toggle="collapse" href="#navbar-vertical" style="height: 65px; margin-top: -1px; padding: 0 30px;">
                    <h6 class="m-0">書</h6>
                    
                    <i class="fa fa-angle-down text-dark"></i>
                </a>
                
                <nav class="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical" style="width: calc(100% - 30px); z-index: 1;">
                    <div class="navbar-nav w-100 overflow-hidden" style="height: auto">
                        <a style="cursor: pointer" class="nav-item nav-link"  id=IM name=product  >資管</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=ME name=product >機械</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=AE name=product >應英</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=CSIE name=product >資工</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=DDM name=product >流管</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=DEE name=product >電子</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=IEM name=product >工管</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=CHEM name=product >化才</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=EE name=product >電機</a>
                        <a style="cursor: pointer" class="nav-item nav-link" id=RAC name=product >冷凍</a>
                        
                    </div>
                </nav>
            </div>
            
            <div class="col-lg-10">
                <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" class="text-decoration-none d-block d-lg-none">
                        <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <a style="cursor:pointer" class="nav-item nav-link" id=shop >首頁</a>
                            <div class="nav-item dropdown">
                                
                                <div class="dropdown-menu rounded-0 m-0">

                                </div>
                            </div>
                            
                            <a style="cursor:pointer" class="nav-item nav-link" id=cart1 >購物車</a>
                            <a style="cursor:pointer" class="nav-item nav-link" id=personal >個人資料</a>
                            <a style="cursor:pointer" class="nav-item nav-link" id=contact >聯繫我們</a>
                            
                        </div>
                        <div class="navbar-nav ml-auto py-0">
                            <a href="" class="nav-item nav-link" id=logout>登出</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>

    <br>

    
    <div id="content" style="padding-left:50px;padding-right:50px"></div>



    <!-- Footer Start -->
    <div class="container-fluid bg-secondary text-dark ">
        <div class="row px-xl-5 pt-5">
            <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                <a href="" class="text-decoration-none">
                    <h1 class="mb-4 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Shopper</h1>
                </a>
                <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
            </div>
            <div class="col-lg-8 col-md-12">
                <div class="row">
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark mb-2" href="index.html"><i class="fa fa-angle-right mr-2"></i>Home</a>
                            <a class="text-dark mb-2" href="shop.html"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a class="text-dark mb-2" href="detail.html"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a class="text-dark mb-2" href="cart.html"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a class="text-dark mb-2" href="checkout.html"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a class="text-dark" href="contact.html"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Quick Links</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-dark mb-2" href="index.html"><i class="fa fa-angle-right mr-2"></i>Home</a>
                            <a class="text-dark mb-2" href="shop.html"><i class="fa fa-angle-right mr-2"></i>Our Shop</a>
                            <a class="text-dark mb-2" href="detail.html"><i class="fa fa-angle-right mr-2"></i>Shop Detail</a>
                            <a class="text-dark mb-2" href="cart.html"><i class="fa fa-angle-right mr-2"></i>Shopping Cart</a>
                            <a class="text-dark mb-2" href="checkout.html"><i class="fa fa-angle-right mr-2"></i>Checkout</a>
                            <a class="text-dark" href="contact.html"><i class="fa fa-angle-right mr-2"></i>Contact Us</a>
                        </div>
                    </div>
                    <div class="col-md-4 mb-5">
                        <h5 class="font-weight-bold text-dark mb-4">Newsletter</h5>
                        <form action="">
                            <div class="form-group">
                                <input type="text" class="form-control border-0 py-4" placeholder="Your Name" required="required" />
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control border-0 py-4" placeholder="Your Email"
                                    required="required" />
                            </div>
                            <div>
                                <button class="btn btn-primary btn-block border-0 py-3" type="submit">Subscribe Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="row border-top border-light mx-xl-5 py-4">
            <div class="col-md-6 px-xl-0">
                <p class="mb-md-0 text-center text-md-left text-dark">
                    &copy; <a class="text-dark font-weight-semi-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed
                    by
                    <a class="text-dark font-weight-semi-bold" href="https://htmlcodex.com">HTML Codex</a><br>
                    Distributed By <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                </p>
            </div>
        </div>
    </div>
    <!-- Footer End -->
    `;
    prodpage();
    document.getElementById("root").innerHTML=sp
    document.getElementById("cart").onclick=function(){
            cartpage();
    }
    document.getElementById("shop").onclick=function(){
        prodpage();  
    }

    document.getElementById("cart1").onclick=function(){
        cartpage();
    }
    document.getElementById("contact").onclick=function(){
        contact();
    }
    

    document.getElementById("personal").onclick=function(){
        personal();
    }
    const department= document.getElementsByName("product");   
    for(let i=0;i<department.length;i++){ 
        department[i].onclick=function(){
            prodpage(this.id);  
        }
    }
    document.getElementById("logout").onclick=function(){ 
        window.localStorage.clear();
        location.reload();
    };
    

}