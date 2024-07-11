import signupPage from './signupPage.js';
import Request from "./Request.js";
import forgot from './forgot.js';
export default function loginPage(){
    let str = `

    <div>
    <div style="margin-top:200px">
     <!-- LOGN IN FORM by Omar Dsoky -->
<div  class="form">
        <!--   con = Container  for items in the form-->
        <div class="con">
        <!--     Start  header Content  -->
        <header class="head-form">
           <h2>Log In</h2>
           <!--     A welcome message or an explanation of the login form -->
           <p>login here using your username and password</p>
        </header>
        <!--     End  header Content  -->
        <br>
        <div class="field-set">
          
           <!--   user name -->
              <span class="input-item">
                <i class="fa fa-user-circle"style='font-size:24px'></i>
              </span>
             <!--   user name Input-->
              <input class="form-input"style="width:247px" id="email" type="text" placeholder="Email">
          
           <br>
          
                <!--   Password -->
          
           <span class="input-item">
             <i class="fa fa-key"></i>
            </span>
           <!--   Password Input-->
           <input class="form-input" style="width:254px" type="password" placeholder="Password" id="pwd"  name="password" >
          
     <!--      Show/hide password  -->
          <span>
             <i  aria-hidden="true" type="button" id="eye"> <img src="https://cdn0.iconfinder.com/data/icons/feather/96/eye-16.png" alt="eye"></img></i>
             
          </span>
          
          
           <br>
     <!--        buttons -->
     <!--      button LogIn -->
           <button class="log-in" id=login> Log In </button>
          
        </div>
     </div> 
     <!--   other buttons -->
        <div class="other">
     <!--      Forgot Password button-->
           <button class="btn submits frgt-pass" id=forgot>Forgot Password</button>
     <!--     Sign Up button -->
           <button class="btn submits sign-up" id=signuppage>Sign Up
     <!--         Sign Up font icon -->
           <i class="fa fa-user-plus" aria-hidden="true"></i>
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
   document.getElementById("signuppage").onclick=function(){
      signupPage();
   }
   document.getElementById("forgot").onclick=function(){
      console.log(1)
      forgot();
   }
   var pwd=document.getElementById("pwd");
   var t=0;
   document.getElementById("eye").onclick=function(){
      if (t==0) {
         pwd.type="text";
         t=1;
      } else {
         pwd.type="password";
         t=0;
      }
   }

    document.getElementById("login").onclick = function(){
        const data={
            "email": document.getElementById("email").value,
            "password": document.getElementById("pwd").value
        };
        Request().post('/index.php?action=doLogin', Qs.stringify(data))
        .then(function(resp){
            let response = resp['data'];
            if (response['result'].length > 0) {
                if(window.localStorage){ //儲存到 local storage
                    window.localStorage.setItem("jwtToken", response['token']);
                    window.localStorage.setItem("Role",response['result'][0]['role']);
                    window.localStorage.setItem("email",response['result'][0]['email']);
                    window.localStorage.setItem("username",response['result'][0]['username']);
                }
               }
            else{
               alert('帳號或密碼錯誤');    
            }
                location.reload();
            
        })
        .catch(function(err){
            console.log(err);
        });
    }

}