import Request from './Request.js';
import customer from './customer.js';
export default function payoff(){
    let data = {
        "email":window.localStorage['email']
    };
    Request().post("/index.php?action=payoff",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        alert('結帳成功!');
        customer();
    })
    .catch(err => {
        console.error(err); 
    })          
    
 
    
}
