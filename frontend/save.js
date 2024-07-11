import Request from "./Request.js";
export default function save(){
    let data={
        "id":window.localStorage.getItem('email'),
        "email": document.getElementById("email").value,
        "password": document.getElementById("password").value,
        "username": document.getElementById("username").value,
        "phone": document.getElementById("phone").value,
        "address": document.getElementById("address").value,
    }
    
    Request().post("/index.php?action=updateUser",Qs.stringify(data))
    .then(res => {
        let response = res['data']; 
        console.log(res)
        if (data['id']!=data['email']) {
            if (response['status']==204) {
                alert('更新成功')
            } else {
                alert('此E-mail已被使用')
            }
        } else {
            alert('更新成功')
        }
    })
    .catch(err => {
        console.error(err); 
    })       



}