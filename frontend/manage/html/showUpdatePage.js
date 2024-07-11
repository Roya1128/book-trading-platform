import doUpdate from './doUpdate.js';

import Request from "../../Request.js";

export default function showUpdatePage(id,num,email=null){
    console.log(id)
    console.log(email)
    if (num==2) { 
        let data = {
            "id": id,
        };
        Request().post("/index.php?action=getUsers",Qs.stringify(data))
        .then(res => {
           
            let response = res['data'];
            console.log(response)
            switch(response['status']){
                case 200:
                    const rows = response['result'];
                    const row = rows[0];
                    let str=`
                    <input type="checkbox" checked="checked" id="show1">
                    <div class="contain">                   
                        <label for="show1" class="close-btn fas fa-times"></label>
                        <div class="text">修改</div>
                        <div class="formm">
                            <div class="data">
                                <label>email</label>
                                <input type="text" id="email1"  value=` + row['email'] + `>`
                    str+=`  </div>
                            <div class="data">
                                <label>密碼</label>
                                <input type="text" id="password1" value=` + row['password'] + `>`
                    str+=` </div>
                            <div class="data">
                                <label>使用者名稱</label>
                                <input type="text" id="username1" value=` + row['username'] + `>`
                    str+=`  </div>
                            <div class="data">
                                <label>電話</label>
                                <input type="text" id="phone1" value=` + row['phone'] + `>`
                    str+=`  </div>
                            <div class="data">
                                <label>住址</label>
                                <input type="text" id="address1" value=` + row['address'] + `>`
                    str+=` </div>
                            <div class="data">
                                <label>權限</label>
                                <input type="text" id="role1" value=` + row['role'] + `>`
                    str+=` </div>
                            <div class="btn">
                                <div class="inner"></div>
                                <button type="button" for="show1" id=doUpdate>修改</button>
                            </div>
                        </div>
                    </div>`;


                    $("#center").html(str);
                    $("#doUpdate").click(function(){
                        doUpdate(row['email'],2);
                        
                    });
                    if(window.localStorage){ //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                    }
                    break;
                case 403:
                    loginPage();
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err); 
        })          
    } 
    
    
    if(num==1){
        let data = {
            "department": id,
        };
        
        Request().post("/index.php?action=getProducts",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            switch(response['status']){
                case 200:
                    const rows = response['result'];
                    const row = rows[0];
                    let str=`
                    <input type="checkbox" checked="checked" id="show1">
                    <div class="contain">                   
                        <label for="show1" class="close-btn fas fa-times"></label>
                        <div class="text">修改</div>
                        <div class="formm">
                            <div class="data">
                                <label>BookID</label>
                                <input type="text" id="bookid1"  value=` + row['BookID'] + `>`
                    str+=`  </div>
                            <div class="data">
                                <label>產品名稱</label>
                                <input type="text" id="prodname1" value=` + row['ProdName'] + `>`
                    str+=` </div>
                            <div class="data">
                                <label>單價</label>
                                <input type="text" id="price1" value=` + row['UnitPrice'] + `>`
                    str+=`  </div>
                            <div class="data">
                                <label>庫存</label>
                                <input type="text" id="qty1" value=` + row['qty'] + `>`
                    str+=`  </div>
                            <div class="btn">
                                <div class="inner"></div>
                                <button type="button" for="show1" id=doUpdate>修改</button>
                            </div>
                        </div>
                    </div>`;


                    $("#center").html(str);
                    $("#doUpdate").click(function(){
                        doUpdate(row['BookID'],1);
                        
                    });
                    if(window.localStorage){ //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                    }
                    break;
                case 403:
                    loginPage();
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err); 
        })          



    }
    if(num==3){
        let data = {
            "bookid": id,
            "email":email,
        };
 
        Request().post("/index.php?action=getuserOrder",Qs.stringify(data))
        .then(res => {
            
            let response = res['data'];
            console.log(response)
            switch(response['status']){
                case 200:
                    const rows = response['result'];
                    const row = rows[0];
                    
                    let str=`
                    <input type="checkbox" checked="checked" id="show1">
                    <div class="contain">                   
                        <label for="show1" class="close-btn fas fa-times"></label>
                        <div class="text">修改</div>
                        <div class="formm">
                        <div class="data">
                            <label>email</label>
                            <input type="text" id="email1"  value=` + row['email'] + `>`
                str+=`  </div>
                            <div class="data">
                                <label>產品編號</label>
                                <input type="text" id="bookid1"  value=` + row['BookID'] + `>`
                   
                    str+=`  </div>
                                <div class="data">
                                <label>數量</label>
                                <input type="text" id="qty1"  value=` + row['num'] + `>`
                   
                    str+=`  </div>
                            <div class="btn">
                                <div class="inner"></div>
                                <button type="button" for="show1" id=doUpdate>修改</button>
                            </div>
                        </div>
                    </div>`;


                    $("#center").html(str);
                    $("#doUpdate").click(function(){
                        doUpdate(row['BookID'],3,row['email']);
                        
                    });
                    if(window.localStorage){ //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                    }
                    break;
                case 403:
                    loginPage();
                    break;
                default:
                    $("#content").html(response['message']);
                    break;
            }
        })
        .catch(err => {
            console.error(err); 
        })          



    }



}
