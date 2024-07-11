import Request from './Request.js';
import cartpage from './cartpage.js';
import doDelete from './doDelete.js';
export default function addreduce(id,action,num=1){
    if (action=='add') {
        let data = {
            "bookid": id ,
            "email":window.localStorage['email'],
            "do":'add',
            "num":num
        };
        Request().post("/index.php?action=updateCart",Qs.stringify(data))
        .then(res => {
    
            cartpage();
        })
        .catch(err => {
            console.error(err); 
        })        
    }
    if (action=='reduce') {
        if (num==0) {
            doDelete(id);
        } else {
            let data = {
                "bookid": id ,
                "email":window.localStorage['email'],
                "do":'reduce',
            };
            Request().post("/index.php?action=updateCart",Qs.stringify(data))
            .then(res => {
        
                cartpage();
            })
            .catch(err => {
                console.error(err); 
            })   
        }
        
    }
    
 
    
}
