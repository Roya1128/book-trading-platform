import Request from '../../Request.js';
export default function doDelete(id,num,email=null,date=null){
    if (num==1) {
        let data = {
            "bookid": id ,
        };
        Request().post("/index.php?action=removeProduct",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            alert(response['message'])
            location.reload();
        })
        .catch(err => {
            console.error(err); 
        })          
    }
    if (num==2) {
        let data = {
            "email": id ,
        };
        Request().post("/index.php?action=removeUser",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            alert(response['message'])
            location.reload();
        })
        .catch(err => {
            console.error(err); 
        })     
    }
    if (num==3) {
        let data = {
            "prodid": id ,
            "email":email,
            "date":date
            
        };
        console.log(data)
        Request().post("/index.php?action=removereview",Qs.stringify(data))
        .then(res => {
            let response = res['data'];

            alert(response['message'])
            location.reload();
            
        })
        .catch(err => {
            console.error(err); 
        })     
    }
    
    if (num==4) {
        let data = {
            "email":email,
            "date":date
            
        };
        console.log(data)
        Request().post("/index.php?action=removeContact",Qs.stringify(data))
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
