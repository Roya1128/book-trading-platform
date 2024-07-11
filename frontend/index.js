import startPage from './startPage.js';

import Request from './Request.js';
import loginPage from './loginPage.js';

window.onload = function(){
    var css=document.getElementById('css');
    if(window.localStorage){
        Request().get("/index.php")
        .then(res => {
            const response = res['data'];
            if(response['status'] == 200){
                window.localStorage.setItem("jwtToken", response['token']);
                css.href="css/style.css";
                startPage();
            }
            else{
                css.href="css/login.css";
                loginPage();
            }
        })
        .catch(err => {
            console.error(err); 
        })
    }
}

