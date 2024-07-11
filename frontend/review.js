import Request from "./Request.js";
import detail from "./detail.js";
export default function review(pid,pname){
    let data = {
        "id":pid,
    };
    Request().post("/index.php?action=getreviews",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        
        switch(response['status']){
            case 200:
                const rows = response['result'];

                let str=`
                    <div class="col-md-6" >
                    <h4 class="mb-4">`+rows.length+` review for "`+pname+`"</h4>
                    `
                if (rows.length>0) {
                    rows.forEach(element => {    
                        str+=`
                            <div class="media mb-4">
                            
                                <div class="media-body" style="word-break:break-all;border:1px solid;border-color:#b5b2b2" > 
                                    <h6>`+element['username']+`<small> - <i>`+element['date']+`</i></small></h6>
                                    <div class="text-primary mb-2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star-half-alt"></i>
                                        <i class="far fa-star"></i>
                                        
                                    </div>
                                    <p>`+element['content']+`</p>
                                    </div>
                            </div>
    
                         `});
                }
                
                     str+=`
                    </div>
                        <div class="col-md-6">
                        
                            <h4 class="mb-4">留言</h4>
                
                            <div class="d-flex my-3">
                                <p class="mb-0 mr-2">Your Rating:</p>
                                <div class="text-primary">
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                    <i class="far fa-star"></i>
                                </div>
                            </div>
                            
                                <div class="form-group">
                                    <label for="message">Your Review</label>
                                    <textarea id="message" cols="30" rows="5" class="form-control"></textarea>
                                </div>
                            
                                <div class="form-group mb-0">
                                    <input type="submit" value="留言" id=leavemessage class="btn btn-primary px-3">
                                </div>
                            
                        </div>
                `
                document.getElementById("comment").innerHTML=str;
                
                document.getElementById("leavemessage").onclick=function(){
                    if (document.getElementById("message").value=='') {
                        alert("留言不可為空")
                    } else {
                        let data = {
                            "email": window.localStorage.getItem('email'),
                            "BookID":pid,
                            "content":document.getElementById("message").value,
                         };
                         Request().post("/index.php?action=newreview",Qs.stringify(data))
                         .then(res => {
                             let response = res['data'];
                             console.log(response)
                             alert('新增成功')
                             detail(pid);
                         })
                         .catch(err => {
                             console.error(err); 
                         })
                    }
                    
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