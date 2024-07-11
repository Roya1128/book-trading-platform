import Request from "./Request.js";
import loginPage from "./loginPage.js";
export default function signPage(){
    let str = `
    <div>
    <div style="margin-top:200px">
     <!-- LOGN IN FORM by Omar Dsoky -->
<div  class="form">
        <!--   con = Container  for items in the form-->
        <div class="con">
        <!--     Start  header Content  -->
        <header class="head-form">
           <h2>Sign Up</h2>
           <!--     A welcome message or an explanation of the login form -->
           <p>signup here using your personal inform</p>
        </header>
       <!--     End  header Content  -->
       <br>
       <div class="field-set" style="text-align:center;">
         
          <!--   user name -->
            
            <!--   user name Input-->
             <input class="form-input" id="username" type="text" placeholder="Name" >
             <input class="form-input" id="email" type="text" placeholder="Email" >
             <input class="form-input" id="phone" type="text" placeholder="Phone">
             <input class="form-input" id="address" type="text" placeholder="address">
          <br>
         
               <!--   Password -->
         
          
          <!--   Password Input-->
          <input class="form-input"  type="password" placeholder="Password" id="password"  name="Password" >
          
          <input class="form-input"  type="password" placeholder="Confirm" id="confirm"  name="Confirm" >
    <!--      Show/hide password  -->
        
         
         
          <br>
    <!--        buttons -->
    <!--      button LogIn -->
          <button class="log-in" id=signup> 註冊 </button>
          <button class="btn submits sign-up" id=back style="width:100px">返回</button>
        </div>   
       </div>
     
    <!--   other buttons -->
       <div class="other">
    <!--      Forgot Password button-->
    
    <!--     Sign Up button -->
          
    <!--         Sign Up font icon -->
          </button>
    <!--      End Other the Division -->
       </div>
         
    <!--   End Conrainer  -->
      </div>
      
      <!-- End Form -->
    

   </div>
</div>

    `;

    document.getElementById("root").innerHTML=str;
    document.getElementById("back").onclick=function(){
      console.log(1)
      loginPage();
      };
    document.getElementById("signup").onclick=function(){
      if (document.getElementById("username").value==''|
      document.getElementById("email").value==''|
      document.getElementById("phone").value==''|
      document.getElementById("password").value==''|
      document.getElementById("address").value==''|
      document.getElementById("confirm").value==''
      ) {
         alert('不可有空值!')
      } else {
         const data={
            "username":document.getElementById("username").value,
            "email":document.getElementById("email").value,
            "phone":document.getElementById("phone").value,
            "password":document.getElementById("password").value,
            "address":document.getElementById("address").value,
            "confirm":document.getElementById("confirm").value,
            "role":"1",
        };
        
        console.log(data)
        if (document.getElementById("confirm").value!=document.getElementById("password").value) {
            alert("密碼不相同");
        } else {
         Request().post('/index.php?action=newUser', Qs.stringify(data))
         .then(res => {
            let response = res['data'];
            if (response['status']==200) {
               alert("註冊成功");
            } else {
               alert(response['message']);
            
            }
            location.reload();
        })
        .catch(err => {
         console.error(err); 
         })
       }
      }
      
     }
}