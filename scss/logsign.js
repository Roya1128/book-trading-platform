import loginPage from './loginPage.js';
import signPage from './signupPage.js'
window.onload = function(){
    loginPage();
    function show() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'text');
    }
    
    function hide() {
        var p = document.getElementById('pwd');
        p.setAttribute('type', 'password');
    }
    
    var pwShown = 0;
    
    document.getElementById("eye").addEventListener("click", function () {
        if (pwShown == 0) {
            pwShown = 1;
            show();
        } else {
            pwShown = 0;
            hide();
        }
    }, false);
    document.getElementById("signuppage").onclick = function(){
        signPage();
    };
    document.getElementById("loginpage").onclick = function(){
        loginPage();
    };
    
   

};
