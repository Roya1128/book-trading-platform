import loginPage from "./loginPage.js";
import Request from "./Request.js";
export default function forgot(){
    let str=
    `
    <div>
        <div style="margin-top:200px">
            <div  class="form">
                <div class="con">
                    <div id=content>
                        <header class="head-form">
                            <h2>Verify E-mail</h2>
                            <p>verify here using your email</p>
                        </header>
                        <br>
                        <div class="field-set" style="flex-direction: column;display:flex;height:300px;">
                            <div style="flex:1;flex-direction: column;display:flex;align-items:center">
                                <input class="form-input" id="E-mail" type="text" placeholder="E-mail" >
                            </div>
                            <div style="flex:1;flex-direction:row;display:flex" >
                                <button class="btn submits sign-up" id=back style="width:100px">返回</button>
                                <button class="log-in" style="width:120px"id=verify>發送驗證 </button>
                            </div>
                        </div>   
                    </div>
                </div>
                <div class="other">
                    </button>
                </div>
            </div>
        </div>
    </div>
    `

    document.getElementById("root").innerHTML=str;
    
    document.getElementById("back").onclick = function(){
        loginPage();
    }
    document.getElementById("verify").onclick = function(){
        let email=document.getElementById("E-mail").value;
        str=`
        <header class="head-form">
            <h2>Change Password</h2>
            <p>Change Password here</p>
        </header>
        <br>
        <div class="field-set" style="flex-direction: column;display:flex;height:300px;">
            <div style="flex:1;flex-direction: column;display:flex;align-items:center">
                <input class="form-input" id="password" type="password" placeholder="new password" >
                <input class="form-input" id="confirm" type="password" placeholder="confirm" >
            </div>
            <div style="flex:1;flex-direction:row;display:flex">
                <button class="log-in" style="width:100px"id=change> 更改 </button>
            </div>
        </div>       
        `
        document.getElementById("content").innerHTML=str;
        document.getElementById("change").onclick = function(){
            let pwd1=document.getElementById("password").value;
            let pwd2=document.getElementById("confirm").value;
            if (pwd1!='' && pwd2!='') {
                if (pwd1==pwd2) {
                    let data = {
                        "email":email,
                        "password": pwd1,
                     };
                     console.log(data)
                     Request().post("/index.php?action=updatepassword",Qs.stringify(data))
                     .then(res => {
                        let response = res['data'];
                        console.log(response)
                        alert('更新成功')
                        location.reload();
                     })
                     .catch(err => {
                         console.error(err); 
                     })
                }
                else{
                    alert('兩次密碼不相同!')
                }
            }else{
                alert('不可輸入空值!')
            }
        }
    }

}