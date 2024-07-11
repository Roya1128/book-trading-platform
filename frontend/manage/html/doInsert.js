import Request from "../../Request.js";
export default function doInsert($num){
    if ($num==1) {
        let data = {
            "bookid": document.getElementById("bookid").value,
            "prodname": document.getElementById("prodname").value,
            "price": document.getElementById("price").value,
            "qty": document.getElementById("qty").value,
         };
         console.log(data)
         Request().post("/index.php?action=newProduct",Qs.stringify(data))
         .then(res => {
             let response = res['data'];
             console.log(response)
             alert(response['message']);
             location.reload();
         })
         .catch(err => {
             console.error(err); 
         })
    } 
    if ($num==2) {
        let data = {
            "email": document.getElementById("email").value,
            "password": document.getElementById("password").value,
            "username": document.getElementById("username").value,
            "phone": document.getElementById("phone").value,
            "address": document.getElementById("address").value,
            "role": document.getElementById("role").value,
         };
         console.log(data)
         Request().post("/index.php?action=newUser",Qs.stringify(data))
         .then(res => {
             let response = res['data'];
             console.log(response)
             alert(response['message']);
             location.reload();
         })
         .catch(err => {
             console.error(err); 
         })
        
    }
    if ($num==3) {
        let data = {
            "email": document.getElementById("email").value,
            "bookid": document.getElementById("bookid").value,
            "num": document.getElementById("qty").value,

         };
         console.log(data)
         Request().post("/index.php?action=newOrder",Qs.stringify(data))
         .then(res => {
             let response = res['data'];
             console.log(response)
             alert(response['message']);
             location.reload();
         })
         .catch(err => {
             console.error(err); 
         })
        
    }
   
 }
