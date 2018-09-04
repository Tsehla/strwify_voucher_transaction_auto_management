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

function seller_login(){
    
 window.open('/seller_login', '_self');
}

function distributor_login(){
    
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
    
    function auto_voucher_check(uniqueCode){
        
        var url= 'http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code='+uniqueCode;//change '127.0.0.1:4100' to live domain
        
        //-----------------------
        var response = uniqueCode;

      var auto_voucher_loader = setInterval(function check_voucher(){
            //alert(response);                       
            $.get(url, function(response, status){
           
           if(status == 'success'){
               dom_innerHtml('second_page_ticket_status', response);
           }
           
           else{
            
             dom_innerHtml('second_page_user_auto_code', 'error requesting unique code'); 
               
           }
           
               
           });
           }, 3000);
                   
    
//console.log(unique_code);
//manual voucher check/download
        
       function manual_voucher_init(){
           alert('manual');
       } 
        

}






