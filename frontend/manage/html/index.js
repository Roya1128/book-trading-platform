import startPage from './startPage.js';
import productInfo from './prodtable.js';
import userInfo from './userstable.js';
import cartInfo from './carttable.js';
import reviewInfo from './reviewtable.js';
import question from './questiontable.js';
window.onload = function(){
    document.getElementById("root").innerHTML = startPage();
    document.getElementById("product").onclick = function(){
        productInfo();
    };
    document.getElementById("user").onclick = function(){
        userInfo();
    };
    document.getElementById("cart").onclick = function(){
        cartInfo();
    };
    document.getElementById("review").onclick = function(){
        reviewInfo();
    };
    document.getElementById("question").onclick = function(){
        question();
    };
    document.getElementById("logout").onclick=function(){ 
        window.localStorage.clear();
        location.assign('../../index.html');
    };

};
