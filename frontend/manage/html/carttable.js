import Request from "../../Request.js";
import doInsert from "./doInsert.js";
import showUpdatePage from "./showUpdatePage.js";
import doDelete from "./doDelete.js";
export default function cartpage(){
    Request().get("/index.php?action=getOrder")
    .then(res => {
        let response = res['data'];
        console.log(response)
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = `
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card">
                                <div class="card-body" style=z-index: -1;>
                                    <h4 class="card-title">產品資料</h4>
                                   
                                    <div class=center>
                                        <input type="checkbox" id="show">
                                        <label for="show" class="show-btn">新增</label>
                                        <div class="contain">
                                        <label for="show" class="close-btn fas fa-times"></label>
                                            <div class="text" >新增</div>

                                            <div class="formm">
                                                <div class="data">
                                                    <label>email</label>
                                                    <input type="text" id=email>
                                                </div>
                                                <div class="data">
                                                    <label>產品編號</label>
                                                    <input type="text" id=bookid>
                                                </div>
                                                <div class="data">
                                                    <label>數量</label>
                                                    <input type="text" id=qty>
                                                </div>
                                                <div class="btn">
                                                    <div class="inner"></div>
                                                    <button type="button" for="show" id=newProduct>新增</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
          

                                    
                                    <div class=center id=center>

                                    </div>
                                    
                                    <div class="table-responsive" >
                                        <table class="table user-table">
                                            <thead>
                                                <tr>
                                                    <th class="border-top-0">email</th>
                                                    <th class="border-top-0">產品編號</th>
                                                    <th class="border-top-0">數量</th>
                                                    <th class="border-top-0">總金額</th>
                                                    <th class="border-top-0">修改</th>
                                                    <th class="border-top-0">刪除</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                    `;
               
                rows.forEach(element => {
                     str += `<tr>`;
                     str += `<td name=emails>` + element['email'] + `</td>`;
                     str += `<td name='id'>` + element['BookID'] + `</td>`;
                     str += `<td>` + element['num'] + `</td>`;
                     str += `<td>` + element['total'] + `</td>`;
                     str += `<td><label name=updateProduct for="show1" class="show1-btn"  style="border:1px">修改</label></td>`;
                     str += `<td><button name=deleteProduct class="show1-btn" style="border:1px">刪除</button></td>`;
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
                    const emails = document.getElementsByName("emails");
                    const updateButtons = document.getElementsByName("updateProduct");
                    for(let i=0; i<updateButtons.length; i++){
                        updateButtons[i].onclick = function(){
                            showUpdatePage(ids[i].innerText,3,emails[i].innerText);
                        };
                    }
                    document.getElementById("newProduct").onclick = function(){ 
                        doInsert(3);
                    };

                    const deleteButtons = document.getElementsByName("deleteProduct");
                    for(let i=0; i<deleteButtons.length; i++){
                        deleteButtons[i].onclick = function(){
                            doDelete(ids[i].innerText,1);
                        };
                    }



                    document.getElementById("newProduct")
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