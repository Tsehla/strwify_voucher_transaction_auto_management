var keystone = require('keystone');
var nunjucks = require('nunjucks');
var path = require ('path');//to solve sendFile forbidden error
//var express = require('express');

keystone.get('routes', function(app){
   // app.use(express.static('./static/'));
    
    
    //super admin login
    app.get('/admin', function(req, res){
        
        
        
    });

    
    
    
    
    
    
/*======================================================

    seller or distributor login

=======================================================*/
    
    
    //use variable var user=seller or user = distributor
    
    app.get('/login', function(req, res){
        
        //'http://127.0.0.1:4100/login?usertype=seller&id_number='+id_number;
      
        
        //if error --- return alert error back
        var user_type = req.query.usertype;
        var user_id = req.query.id_number;
        
        /* seller login */
        if(user_type == 'seller'){
            
        //if sucess login
            keystone.list('seller distributor').model.findOne({idnumber:user_id, usertype:'Seller'})
            .exec(
            function (error, response){
                
            if(response == null){
                res.jsonp('User Not found')
            }
            else{
              res.jsonp(response); 
            }   
                
                
            } );
            
            
        //if user is seller--- show seller porpulated options
        }
        
        /* distributor login 8*/
        //if sucess login
        //if user is distributor--- show distributor porpulated action
        
        
    });
    
    //distributor or seller transact
    
    app.get('/transact', function(req, res){
    //if user_type == seller
    //do only
        
        
        
    //if user type == distributor do 
    //do only
        
        
        
    });
    
    
    
    
    
    
    
 /*============================================
    
        user get acess code
    
 ==============================================*/
    
    app.use('/api/buy', function(req, res){
        
        
        
        if(req.query.code == 'unique_code'){//give user unique code
            
            //http://127.0.0.1:4100/api/buy?code=unique_code;//api query link
        var date = new Date();
            
        // quick changing
        var hour = date.getHours().toString();
        var minutes = date.getMinutes().toString();
        var seconds = date.getSeconds().toString();
        
        //show to user
        var milliseconds = date.getMilliseconds();
        
         if(milliseconds < 10){
          milliseconds = '00'+milliseconds;
        }   
            
        if(milliseconds > 9 && milliseconds < 100){
        
           milliseconds = '0'+milliseconds;
        }    
        if(minutes < 10){
          minutes = '0'+minutes;
        } 
        if(seconds < 10){
          seconds = '0'+seconds ;
        }  
            
          
            
            
            res.jsonp(hour+minutes+' '+seconds+' '+milliseconds.toString());
            
        }        
        
        
        
        
        
/*============================================
       
   search for record with unique access code,
            
=============================================*/
        
        if(req.query.code == 'get_voucher'){
         
        //http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code=xyz;//api query link
           
            
        var date = new Date();
        //slow changing    
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
        var day = date.getDate().toString();
        
        
        //get from seller to user
        var hour_minutes_milliseconds = req.query.unique_code; 
       
              
        console.log('-----------------------');
        console.log(req.query);
        console.log('-----------------------');   
            
        //var seller = req.query.seller;//add seller in db making---use as stats
        //var amount = req.query.amount--use as stats;
            
       // var seach_code=year[year.length-2]+year[year.length-1]+month+day+hour+minutes+milliseconds;
            
        var seach_code_ = year[year.length-2]+year[year.length-1]+month+day+hour_minutes_milliseconds;
//            
//        console.log('-----------------------');
//        console.log(seach_code_);
//        console.log('-----------------------'); 
//    
            
            
        /* find doc contains [seach_code=] */
        keystone.list('Voucher Codes').model.findOne()
            .where({soldto : seach_code_, voucherstate : 'used'})
            .exec( function(error, response){
            if(error){
                res.jsonp('Problem finding Voucher');
            }
            if(response == null){
                res.jsonp('Voucher Not found')
                }
            else{
                res.jsonp(response); 
            }
           
            
        });
        //on error throw error
        
        
        //on sucess, create voucher on the front
            
        
        }
        
        //==============================================================
         // sell voucher to user
        //==============================================================
        
        if(req.query.code = 'sell_voucher'){
            
            
            
             
        //http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code=xyz;//api query link
           
            
        var date = new Date();
        //slow changing    
        var year = date.getFullYear().toString();
        var month = date.getMonth().toString();
        var day = date.getDate().toString();
        
        
        //get from seller to user
        var hour_minutes_milliseconds = req.query.unique_code; 
        //amount for voucher    
        var seller_voucher_amount_ =req.query.voucher_amount;
              
        console.log('-----------------------');
        console.log(req.query);
        console.log('-----------------------');   
            
        //var seller = req.query.seller;//add seller in db making---use as stats
        //var amount = req.query.amount--use as stats;
            
       // var seach_code=year[year.length-2]+year[year.length-1]+month+day+hour+minutes+milliseconds;
            
        var seach_code_ = year[year.length-2]+year[year.length-1]+month+day+hour_minutes_milliseconds;
//            
//        console.log('-----------------------');
//        console.log(seach_code_);
//        console.log('-----------------------'); 
//    
            
            
        /* find doc contains [seach_code=] */
        keystone.list('Voucher Codes').model.findOne()
            .where({voucheramount : seller_voucher_amount_, voucherstate : 'new'})
            .exec( function(error, response){
            if(error){
               return res.jsonp('sorry Please try again, later');
            }
            if(response == null){
               return res.jsonp('error Selling voucher');
            }  
            console.log(response);
          
                
            
              res.jsonp('voucher sold for R'+seller_voucher_amount_); 
              
                response.voucherstate = 'used';
                response.soldby = req.query.seller_id;
                response.soldto = seach_code_;
                response.save();
            
        });
        //on error throw error
        
        
        //on sucess, create voucher on the front
             
            
            

            
        }
        
    });
    
    
    
    
    
/*========================================

    Routing all links to webpage
    
========================================*/
    
    app.get('/', function(req, res){
       //give home page
        //im think use api, method to serve, nunjuck changes will be anoying
        //use public to serve html standard, use api to acess data//test first
        
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    app.get('/buy_voucher', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    app.get('/sell_voucher', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    app.get('/seller_login', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });    
    
    app.get('/distributor_login', function(req, res){
        res.sendFile(path.resolve('./html/index.html'));
        
    });
    
    
    
    
    
    
    
    
});
