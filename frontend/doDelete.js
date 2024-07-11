import Request from './Request.js';
import cartpage from './cartpage.js';
export default function doDelete(id){
    let data = {
        "bookid": id ,
        "email":window.localStorage['email']
    };
    Request().post("/index.php?action=removeCart",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        cartpage();
    })
    .catch(err => {
        console.error(err); 
    })          
    
 
    
}
