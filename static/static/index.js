/*=====================================

app routes

========================================*/

/*+++++++++++++++++++++++++++++++++++++++
 external URL link to internal routing
++++++++++++++++++++++++++++++++++++++++*/

// get url and route
var current_url= window.location.pathname;

/* hide or show other pages div */
function dom_hide_show(showORhide, div){
    
    if(showORhide == 'hide'){
        document.getElementById(div).style.display='none';
    }
   if(showORhide == 'show'){
        document.getElementById(div).style.display='block';
    }
    
}

(function(){
 
 if(current_url == '/'){
   
   dom_hide_show('show','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 } 
if(current_url == '/buy_voucher'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('show','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page');
    buy_page_on_init();/*page init */
 
 }
if(current_url == '/sell_voucher'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('show','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 }
if(current_url == '/seller_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('show','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 }
if(current_url == '/distributor_login'){
   
   dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('hide','firth_page'); dom_hide_show('show','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
 
 }

    
 })();

    /*++++++++++++++++++++++++++++++++
    
        when success login//same url diffrenet content
        
    +++++++++++++++++++++++++++++++++*/
function seller_sell_menu(){
       dom_hide_show('hide','first_page'); dom_hide_show('hide','second_page'); dom_hide_show('hide','third_page'); dom_hide_show('hide','fourth_page'); dom_hide_show('show','firth_page'); dom_hide_show('hide','sixth_page'); dom_hide_show('hide','seventh_page'); dom_hide_show('hide','eigth_page'); 
    
}




/*++++++++++++++++++++++++++++++++++++++++
    Internal navigation
++++++++++++++++++++++++++++++++++++++++*/
var current_domain = window.location.hostname;

/* voucher buy link */
function buy_voucher(){
    
 window.open('/buy_voucher', '_self');
}
/* voucher sell link */
function sell_voucher(){
    
 window.open('/sell_voucher', '_self');
}

function third_page_seller_login(){
  
 window.open('/seller_login', '_self');
}

function third_page_distributor_login(){
    
 window.open('/distributor_login', '_self');
}

/*=======================================
    repeated functions
========================================*/

/* change dom [innerHTML] */

function dom_innerHtml(div, value){
  document.getElementById(div).innerHTML=value;
}




/*=======================================
    functions/process to destroy when user leaves a page
========================================*/

    function process_destroyer(){
        
        
        
        
    }

/*++++++++++++++++++++++++++++++++++++++++
    global vars
    seller login
    
+++++++++++++++++++++++++++++++++++++++++*/
var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};


/*========================================
    buy data page
=========================================/
/* generate unique random code */




/*conncet & check ticket staus */



function buy_page_on_init(){
   
    var url= 'http://127.0.0.1:4100/api/buy?code=unique_code';//change '127.0.0.1:4100' to live domain
    
    
       $.get(url, function(response, status){
           
           auto_voucher_check(response);
            
           
           if(status == 'success'){
              

               return dom_innerHtml('second_page_user_auto_code', response);
               
           }
           
           else{
             return dom_innerHtml('second_page_user_auto_code', 'error requesting unique code'); 
           }
       });   
    
}


 //start timer for auto voucher download
/* making unique code global*/
var unique_code = null;
    
function auto_voucher_check(uniqueCode){
        unique_code = uniqueCode;
        var url= 'http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code='+uniqueCode;//change '127.0.0.1:4100' to live domain
        
     //-----------------------
        var response = uniqueCode;

        var auto_voucher_loader = setInterval(function check_voucher(){
            //alert(response);                       
            $.get(url, function(response, status){
           
           if(status == 'success'){
               dom_innerHtml('second_page_ticket_status', response);
               if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
               var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+response+"</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
                stop_auto_voucher_check();//timer stop
                voucher_print();//print voucher
               }
           }
           
           else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
           }, 3000);
                   
    
//console.log(unique_code);
        /* stop timer */
function stop_auto_voucher_check(){
            clearInterval(auto_voucher_loader);
        }
       

}
//manual voucher check/download
function manual_voucher_init(){
        
        var url= 'http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
                if(response == 'Voucher Not found'){
               var show_code = "<p style='color:red;margin:0px;padding:0px;height:0px;width:0px'>Error couldn't find voucher. <span style='color:blue; margin:0px;padding:0px;height:auto;width:auto'>re-Checking...</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
               if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
               var show_code = "<p style='color:green;margin:0px;padding:0px;height:0px;width:0px'>Please Enter This Voucher Code : <span style='color:red; margin:0px;padding:0px;height:auto;width:auto'>"+response+"</span></p>";
               dom_innerHtml('second_page_ticket_status', show_code);
               voucher_print();//print voucher
               }
           }
           
           else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
    
       } 
/* voucher printing */

function voucher_print(){
    alert('voucher print fn');
}

//------------------------------------
// sell ticket 

function sell_ticket(){
    
    //voucher code
    var seller_code_input = document.getElementById('seller_ticket_unique_code');
    
    //voucher amount
    var seller_voucher_amount_input = document.getElementById('seller_ticket_amount');
    
    
        
        var url= 'http://127.0.0.1:4100/api/buy?code=sell_voucher&unique_code='+seller_code_input.value+'&voucher_amount='+seller_voucher_amount_input.value+'&seller_id='+seller_login.seller_id;//change '127.0.0.1:4100' to live domain
    
    
       $.get(url, function(response, status){
           
            
           
           if(status == 'success'){
              

               return dom_innerHtml('firth_page_sell_menu_header', response);
               
           }
           
           else{
             return dom_innerHtml('firth_page_sell_menu_header', 'error producing ticket code'); 
           }
       });  
        
        
    
    
}



/*========================================
    buy data page
=========================================*/

/*++++++++++++++++++++++++++++++++++++++++

    Distributor login
+++++++++++++++++++++++++++++++++++++++++*/








/*++++++++++++++++++++++++++++++++++++++++

    seller login
    
+++++++++++++++++++++++++++++++++++++++++*/
var seller_login = {logged_in : false, seller_id : '', usertype : '', credit:''};

/* account login */
function fourth_page_seller_login(){
    

    
        var seller_id = document.getElementById('fourth_page_id_input');
        var seller_password = document.getElementById('fourth_page_password_input');
    
    

    
        
    /* check input filled */
        if(seller_id.value != '' && seller_password.value != ''){
           
        /* check id number lenth */
        /*should be 13 numbers in sout africa */
        if(seller_id.value.length !== 13){
          return dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect ID number</p>'); 
    }
            
            
        //change [http://127.0.0.1:4100] url to live server url
        var url= 'http://127.0.0.1:4100/login?usertype=seller&id_number='+seller_id.value;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               if(response == 'User Not found'){
                  return  dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
               }
               
               else{//check password
                   if(response.password == seller_password.value){      
                       /* porpulate vars used for creating field when voucher is sold*/
                       
                       seller_login.logged_in = true;
                       seller_login.seller_id = seller_id.value;
                       seller_login.usertype = response.usertype;
                       seller_login.credit = response.credits;
                       
                       dom_innerHtml('firth_page_seller_amount', response.credits); 
                       
                       
                       seller_sell_menu();
                       
                       
                   }
                   else{
                        dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Incorrect Login Details</p>'); 
                   }
                   
               }
               
           }
           
        else{
            
             dom_innerHtml('fourth_page_login_menu_header', 'error when trying to login'); 
               
           }
           
               
           });
}
    /* if input not filled or partially filled */
  else{ 
      
    
      dom_innerHtml('fourth_page_login_menu_header', '<p style="color:red; margin:0px;padding:0px">Please Fill in all login Details</p>'); 
      
      if(seller_id.value == ''){
          seller_id.style.borderColor ='red';
      }
      if(seller_id.value == ''){
          seller_password.style.borderColor ='red';
      }
      
  }  
    
}


/* Show password */
function fourth_page_seller_show_password_hint(){
    alert('seller password hint');  
 
        var url= 'http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
    
    
    
    
}

/* Change password */

function fourth_page_seller_change_password(){
    
    alert('seller change password');
    
    
        var url= 'http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code='+ unique_code;
    
        $.get(url, function(response, status){
           
           if(status == 'success'){
               
               
        if(response == 'Voucher Not found'){
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
               
            if(response != 'Voucher Not found'){
                dom_innerHtml('second_page_user_auto_code', 'Voucher Ready');
              
               dom_innerHtml('second_page_ticket_status', show_code);
               
               }
           }
           
        else{
            
             dom_innerHtml('second_page_ticket_status', 'error requesting voucher code'); 
               
           }
           
               
           });
    
}

































