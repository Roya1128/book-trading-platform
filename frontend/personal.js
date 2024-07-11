import Request from "./Request.js";
import save from "./save.js";
export default function personal(){
    let data = {
        "id":window.localStorage.getItem('email'),
    };
    Request().post("http://localhost/系統開發/backend/public/index.php?action=getUsers",Qs.stringify(data))
    .then(res => {
        let response = res['data'];


        switch(response['status']){
            case 200:
                const rows = response['result'];
                let str = ` <div class="container-fluid pt-5">
                <div class="row px-xl-5">
                    <div >
                        <div class="mb-4"style="padding-left:100px" >
                            <h4 class="font-weight-semi-bold mb-4">個人資料</h4>
                            <div class="row" >
                                <div class="col-md-6 form-group">
                                    <label>姓名</label>
                                    <input class="form-control" type="text" id=username value="`+rows[0]['username']+`">
                                </div>
                                
                                <div class="col-md-6 form-group">
                                    <label>E-mail</label>
                                    <input class="form-control" type="text" id=email value="`+rows[0]['email']+`">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>電話號碼</label>
                                    <input class="form-control" type="text" id=phone value="`+rows[0]['phone']+`">
                                </div>
                                <div class="col-md-6 form-group">
                                    <label>地址</label>
                                    <input class="form-control" type="text" id=address value="`+rows[0]['address']+`">
                                </div>    
                                <div class="col-md-6 form-group">
                                    <label>密碼</label>
                                    <input class="form-control" type="text" id=password value="`+rows[0]['password']+`">
                                </div>
                                
                                <div class="col-md-6 form-group">
                                    <button class="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3" id='save'>save</button>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>`;   
                    document.getElementById("content").innerHTML=str;
                    document.getElementById("save").onclick=function(){
                        save();
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
    