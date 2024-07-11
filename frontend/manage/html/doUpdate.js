import Request from "../../Request.js";
export default function doUpdate(id,num,email=null){
    if (num==1) {
        let data = {
            "id":id,
            "bookid": document.getElementById("bookid1").value,
            "prodname": document.getElementById("prodname1").value,
            "price": document.getElementById("price1").value,
            "qty": document.getElementById("qty1").value,
            
         };
         console.log(data)
         Request().post("/index.php?action=updateProduct",Qs.stringify(data))
         .then(res => {
             let response = res['data'];
             console.log(response)
             alert(response['message'])
             location.reload();
           
         })
         .catch(err => {
             console.error(err); 
         })
    }
    if(num==2){
        let data = {
            "id":id,
            "email": document.getElementById("email1").value,
            "password": document.getElementById("password1").value,
            "username": document.getElementById("username1").value,
            "phone": document.getElementById("phone1").value,
            "address": document.getElementById("address1").value,
            "role": document.getElementById("role1").value,
            
         };
         console.log(data)
         Request().post("/index.php?action=updateUser",Qs.stringify(data))
         .then(res => {
             let response = res['data'];
             console.log(response)
             alert(response['message'])
             location.reload();
           
         })
         .catch(err => {
             console.error(err); 
         })
    }
    if(num==3){
        let data = {

            "email": document.getElementById("email1").value,
            "bookid": document.getElementById("bookid1").value,
            "qty": document.getElementById("qty1").value,
            "oldemail":email,
            "oldid":id

            
         };
         console.log(data)
         Request().post("/index.php?action=updateOrder",Qs.stringify(data))
         .then(res => {
             let response = res['data'];
             console.log(response)
             alert(response['message'])
             location.reload();
           
         })
         .catch(err => {
             console.error(err); 
         })
    }


   
 }
