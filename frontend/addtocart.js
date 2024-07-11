import Request from './Request.js';
export default function addtocart(id,num='1'){
    let data = {
        "bookid":id ,
        "email":window.localStorage['email'],
        "do":'add',
        "num":num
    };
    console.log(data)
    Request().post("/index.php?action=getuserCart",Qs.stringify(data))
    .then(res => {
        let response = res['data']; 
        console.log(response)
        switch (response['status']) {
            case 200:
                let rows=response['result'];
                if (rows.length>0) {
                    Request().post("/index.php?action=updateCart",Qs.stringify(data))
                    .then(res => {
                        alert("新增成功");
                    })
                    .catch(err => {
                        console.error(err); 
                    })     
                    break;                    
                } else {
                    Request().post("/index.php?action=newCart",Qs.stringify(data))
                    .then(res => {
                        let response = res['data']; 
                        alert(response['message']);
                    })
                    .catch(err => {
                        console.error(err); 
                    }) 
                    break;   
                }
                
            default:
                               
                break;
        }
    })
    .catch(err => {
        console.error(err); 
    })  

}