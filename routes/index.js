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
        
        
        
        if(req.query.code == 'unique_code'){
            //http://127.0.0.1:4100/api/buy?code=unique_code;//api query link
        var date = new Date();
        //slow changing    
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        
        // quick changing
        var hour = date.getHours();
        var minutes = date.getMinutes();
        
        //show to user
        var milliseconds = date.getMilliseconds();
        
         if(milliseconds < 10){
          milliseconds = '00'+milliseconds;
        }   
            
        if(milliseconds > 9 && milliseconds < 100){
        
           milliseconds = '0'+milliseconds;
        }    
           
            
            
            res.jsonp(milliseconds.toString());
            
        }        
        
        
        
        
        
/*============================================
       
   search for record with unique code,
            
=============================================*/
        
        if(req.query.code == 'get_voucher'){
         
        //http://127.0.0.1:4100/api/buy?code=get_voucher&unique_code=xyz;//api query link
        var date = new Date();
        //slow changing    
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        
        // quick changing
        var hour = date.getHours();
        var minutes = date.getMinutes();
        
        //show to user
        var milliseconds = req.query.unique_code;    
            
            
        //var seller = req.query.seller;//add seller in db making---use as stats
        //var amount = req.query.amount--use as stats;
            
        var seach_code=year+month+day+hour+minutes+milliseconds;
        
        /* find doc contains [seach_code=] */
        keystone.list('Voucher Codes').model.findOne({soldto: {$in : [seach_code]}})
            .exec( function(error, response){
            
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
