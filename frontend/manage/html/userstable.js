import Request from "../../Request.js";
import doInsert from "./doInsert.js";
import showUpdatePage from "./showUpdatePage.js";
import doDelete from "./doDelete.js";
export default function userpage(){
    Request().get("/index.php?action=getUsers")
    .then(res => {
        let response = res['data'];

        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">使用者資料</h4>


                                    <div class=center>
                                    <input type="checkbox" id="show">
                                    <label for="show" class="show-btn">新增</label>
                                    <div class="contain">
                                    <label for="show" class="close-btn fas fa-times"></label>
                                        <div class="text" >新增</div>

                                        <div class="formm">
                                            <div class="data">
                                                <label>Email</label>
                                                <input type="text" id=email>
                                            </div>
                                            <div class="data">
                                                <label>密碼</label>
                                                <input type="text" id=password>
                                            </div>
                                            <div class="data">
                                                <label>使用者名稱</label>
                                                <input type="text" id=username>
                                            </div>
                                            <div class="data">
                                                <label>電話號碼</label>
                                                <input type="text" id=phone>
                                            </div>
                                            <div class="data">
                                                <label>住址</label>
                                                <input type="text" id=address>
                                            </div>
                                            <div class="data">
                                                <label>權限</label>
                                                <input type="text" id=role>
                                            </div>
                                            <div class="btn">
                                                <div class="inner"></div>
                                                <button type="button" for="show" id=newuser>新增</button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                                <div class=center id=center>

                                </div>
                                



                                    <div class="table-responsive">
                                        <table class="table user-table">
                                            <thead>
                                                <tr>
                                                    <th class="border-top-0">信箱</th>
                                                    <th class="border-top-0">密碼</th>
                                                    <th class="border-top-0">使用者名稱</th>
                                                    <th class="border-top-0">電話號碼</th>
                                                    <th class="border-top-0">住址</th>
                                                    <th class="border-top-0">權限</th>
                                                    <th class="border-top-0">修改</th>
                                                    <th class="border-top-0">刪除</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                    `;
               
                rows.forEach(element => {
                     str += `<tr>`;
                     str += `<td name='id'>` + element['email'] + `</td>`;
                     str += `<td>` + element['password'] + `</td>`;
                     str += `<td>` + element['username'] + `</td>`;
                     str += `<td>` + element['phone'] + `</td>`;
                     str += `<td>` + element['address'] + `</td>`;
                     str += `<td>` + element['role'] + `</td>`;
                     str += `<td><label name=updateuser for="show1" class="show1-btn" style="border:1px">修改</label></td>`;
                     str += `<td><button name=deleteuser class="show1-btn" style="border:1px">刪除</button></td>`;
                     str += `</tr>`;
             
                                
                });                           
                str+=`
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            
        `;
                
                    document.getElementById("content").innerHTML=str;
                    const ids = document.getElementsByName("id");
                    const updateButtons = document.getElementsByName("updateuser");
                    for(let i=0; i<updateButtons.length; i++){
                        updateButtons[i].onclick = function(){
                            showUpdatePage(ids[i].innerText,2);
                           
                        };
                    }
                    document.getElementById("newuser").onclick = function(){ 
                        doInsert(2);
                    };

                    const deleteButtons = document.getElementsByName("deleteuser");
                    for(let i=0; i<deleteButtons.length; i++){
                        deleteButtons[i].onclick = function(){
                            doDelete(ids[i].innerText,2);
                        };
                    }



                    document.getElementById("newuser")
                    if(window.localStorage){ //儲存到 local storage
                        window.localStorage.setItem("jwtToken", response['token']);
                    }
                    break;
                case 403:
                    alert("連線逾時，請重新登入")
                    location.assign('../../index.html')
                default:
                    document.getElementById("content").innerHTML=response['message'];
                    break;
        }
    })
    .catch(err => {
        document.getElementById("content").innerHTML=err; 
    }) 
   



}