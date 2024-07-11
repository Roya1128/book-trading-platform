import Request from "../../Request.js";
import doDelete from "./doDelete.js";
export default function prodpage(){
    Request().get("/index.php?action=getreviews")
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
                                    <h4 class="card-title">評價資料</h4>
                                    <div class=center id=center>

                                    </div>
                                    
                                    <div class="table-responsive" >
                                        <table class="table user-table">
                                            <thead>
                                                <tr>
                                                    <th class="border-top-0">產品編號</th>
                                                    <th class="border-top-0">Email</th>
                                                    <th class="border-top-0">內容</th>
                                                    <th class="border-top-0">時間</th>
                                                    <th class="border-top-0">刪除</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                    `;
               
                rows.forEach(element => {
                     str += `<tr>`;
                     str += `<td name='id'>` + element['BookID'] + `</td>`;
                     str += `<td name=emails>` + element['email'] + `</td>`;
                     str += `<td>` + element['content'] + `</td>`;
                     str += `<td name=dates>` + element['date'] + `</td>`;
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
                    const dates = document.getElementsByName("dates");
                    const deleteButtons = document.getElementsByName("deleteProduct");
                    for(let i=0; i<deleteButtons.length; i++){
                        deleteButtons[i].onclick = function(){
                            doDelete(ids[i].innerText,3,emails[i].innerText,dates[i].innerText);
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