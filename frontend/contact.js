import Request from "./Request.js";
export default function contact(){
    let str=`
    <div class="container-fluid pt-5" >
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">如有任何疑問，請聯繫</span></h2>
        </div>
        <div class="row px-xl-5"style="justify-content:center;display:flex;flex:1">
            <div class="col-lg-7 mb-5" >
                <div class="contact-form">
                    <div id="success"></div>
                    <div name="sentMessage" id="contactForm" novalidate="novalidate">
                        
                        <div class="control-group">
                            <input type="email" class="form-control" id="email" placeholder="信箱"
                                required="required" data-validation-required-message="Please enter your email" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <input type="text" class="form-control" id="subject" placeholder="主題"
                                required="required" data-validation-required-message="Please enter a subject" />
                            <p class="help-block text-danger"></p>
                        </div>
                        <div class="control-group">
                            <textarea class="form-control" rows="6" id="message" placeholder="內容"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p class="help-block text-danger"></p>
                        </div>
                        <div>
                            <button class="btn btn-primary py-2 px-4"  id="send">送出</button>
                        </div>
                    </div>
                </div>
            </div>
         
        </div>
    </div>
    `
    document.getElementById("content").innerHTML=str;
    document.getElementById("send").onclick=function(){
        if (document.getElementById("email").value==''|document.getElementById("subject").value==''|document.getElementById("message").value=='') {
            alert('不可有空值');
        } else {
            let data = {
                "email": document.getElementById("email").value,
                "subject": document.getElementById("subject").value,
                "message": document.getElementById("message").value,
    
             };
             console.log(data)
             Request().post("/index.php?action=newContact",Qs.stringify(data))
             .then(res => {
                alert('成功送出!我們會盡快回覆!');
                location.reload();
             })
             .catch(err => {
                 console.error(err); 
             })
        }
    }
        
}