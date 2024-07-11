import customer from './customer.js';
export default function startPage(){
    if (window.localStorage['Role']==1) {
       customer();
    } else {
        location.assign('./manage/html/manage.html') 
    }
   
   
}