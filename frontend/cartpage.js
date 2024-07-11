
import doDelete from "./doDelete.js";
import Request from "./Request.js";
import addreduce from "./addreduce.js";
import payoff from "./payoff.js";
export default function cartpage(){
    let data = {
        "email":window.localStorage['email'],
    };
    Request().post("/index.php?action=getuserCarts",Qs.stringify(data))
    .then(res => {
        let response = res['data'];
        console.log(response)
        switch(response['status']){
            case 200:
                const rows = response['result'];
                let sum=0;
                let str = `

                <div class="container-fluid bg-secondary mb-5">
                    <div class="d-flex flex-column align-items-center justify-content-center" style="min-height: 300px">
                        <h1 class="font-weight-semi-bold text-uppercase mb-3">購物車</h1>
                    </div>
                </div>
          
                <div class="container-fluid pt-5">
                    <div class="row px-xl-5">
                        <div class="col-lg-8 table-responsive mb-5">
                            <table class="table table-bordered text-center mb-0">
                                <thead class="bg-secondary text-dark">
                                    <tr>
                                        <th>產品</th>
                                        <th>單價</th>
                                        <th>數量</th>
                                        <th>金額</th>
                                        <th>刪除</th>
                                    </tr>
                                </thead>
                    
                                <tbody class="align-middle">`;

                    rows.forEach(element => {
                        sum=sum+parseInt(element['total']);

                        str+=`<tr>
                        <td class="align-middle" name=id id=`+element['BookID']+` style="width:400px"><img src="img/`+element['BookID']+`.jpg"
                         alt="" style="width:150px;height:150px;max-width: 100%;max-height:100%; margin:auto;">`+element['ProdName']+`</td>
                        <td class="align-middle">`+element['UnitPrice']+`</td>
                        <td class="align-middle">
                            <div class="input-group quantity mx-auto" style="width: 100px;">
                                <div class="input-group-btn">
                                    <button class="btn btn-sm btn-primary btn-minus" name=reduce>
                                    <i class="fa fa-minus"></i>
                                    </button>
                                </div>
                                <input type="text" class="form-control form-control-sm bg-secondary text-center"disabled="disabled" name=num value="`+element['num']+`">
                                <div class="input-group-btn">
                                    <button class="btn btn-sm btn-primary btn-plus" name=add>
                                        <i class="fa fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                        </td>
                        <td class="align-middle">`+element['total']+`</td>
                        <td class="align-middle"><button class="btn btn-sm btn-primary" name=delete><i class="fa fa-trash"></i></button></td>
                    </tr>`;     
                    
                    });                           
                              
                   
                                    
                    str+=`      </tbody>
                           </table>
                        </div>
                        <div class="col-lg-4">
                            
                            <div class="card border-secondary mb-5">
                                <div class="card-header bg-secondary border-0">
                                    <h4 class="font-weight-semi-bold ">總金額</h4>
                                    <h5 class="font-weight-bold" id=sum>`+sum+`</h5>
                                </div>
                              
                                <div class="card-footer border-secondary bg-transparent">
                                    <button class="btn btn-block btn-primary my-3 py-3" id=payoff >結帳</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
                    `;
               
                    document.getElementById("content").innerHTML=str;
                    const deletebutton=document.getElementsByName('delete');
                    const ids=document.getElementsByName('id');
                    const addbutton=document.getElementsByName('add');
                    const reducebutton=document.getElementsByName('reduce');
                    const num=document.getElementsByName('num');
                    for(let i=0;i<deletebutton.length;i++){
                        deletebutton[i].onclick = function(){
                            doDelete(ids[i].id);
                        };
                    }
                    for(let i=0;i<addbutton.length;i++){
                        addbutton[i].onclick = function(){
                            addreduce(ids[i].id,'add');
                        };
                    }
                    for(let i=0;i<reducebutton.length;i++){
                        reducebutton[i].onclick = function(){
                            
                            addreduce(ids[i].id,'reduce',num[i].value-1);
                           
                        };
                    }
                    document.getElementById('payoff').onclick=function(){
                        payoff();
                    }
                    


            
        }})
            
        .catch(err => {
            document.getElementById("content").innerHTML=err; 
        }) 
    
   
   
}
