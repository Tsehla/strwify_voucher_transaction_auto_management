//import { url } from "inspector";

//alert();


//////////// slider //////////////

var slider_text_content = [

    {
        intro : "Resturant WiFi",
        header : "Improve your WiFi and guest satisfaction",
        body : "Create a free or paid Restaurant Internet access, engage guests with advertisements, collect surveys and understand what you can do better to improve guest satisfaction",
        image : "/home_page_contents/images/returant%20wifi%20offering.jpg",

    }, 
    {
        intro : "Retail WiFi",
        header : "Intelligent marketing WiFi system for retail stores",
        body : "Uwireless HotSpot Retail WiFi system transforms your WiFi network into an intelligent marketing system which enables a display of video advertisements on mobile phones, tablets or laptops of customers.",
        image : '/home_page_contents/images/shopping%20wifi%20offerings.jpg',
    },
   {
        intro : "Hotel WiFi",
        header : 'Cloud Hotel WiFi software for easy guest WiFi control',
        body : 'Uwireless Hotspot Hotel WiFi is a robust and cost effective solution suitable for any hospitality deployment. It controls user Internet access, sets limits, engages users and helps you run different marketing strategies to maximize revenue from your hotel WiFi',
        image : '/home_page_contents/images/hotel%20wifi%20offering.jpg',
    },
    // {
    //     header : 'Built for anywhere',
    //     body : 'To be enjoyed by anyone, StreetWifiy CHEAP QUALITY INTERNET.',
    //     image : '/home_page_contents/images/informal.webp',
    // } 

]

//on page load//load first items
slider_data_apply(slider_text_content[0].intro, slider_text_content[0].header, slider_text_content[0].body, slider_text_content[0].image);
var current_slide = 0;

//auto slider change
var slider_timer =setInterval(function(){
    //increment slider for next item
    current_slide = current_slide + 1;

    //check if slider length is not more than what array contains//if make it zero
    if(current_slide > slider_text_content.length - 1 ){
        current_slide = 0;
    }

    // call function every x seconds
    slider_data_apply(slider_text_content[current_slide].intro, slider_text_content[current_slide].header, slider_text_content[current_slide].body, slider_text_content[current_slide].image); 
}, 6000);


// back or forth buttons 

function sider_back_or_forth ( pressed){
    //stop timer first
    clearInterval(slider_timer);

     if(pressed == 'back'){
        //subtract from current onject position
        current_slide = current_slide - 1;

        //check if is not less than 0
        if(current_slide < 0){ //make it length of slider list/array
            current_slide = slider_text_content.length -1;
        }
        // apply slider data at that position
        slider_data_apply(slider_text_content[current_slide].intro, slider_text_content[current_slide].header, slider_text_content[current_slide].body, slider_text_content[current_slide].image); 
        return;
    }

     // if back was not pressed
        //increment slider for next item
        current_slide = current_slide + 1;

        //check if slider length is not more than what array contains//if make it zero
        if(current_slide > slider_text_content.length - 1 ){
            current_slide = 0;
        }

        document.getElementById('header_container').style.animation='fadeOut 6s';

        //animate background //fade out
        fade_animation("out")


        // call function every x seconds
        slider_data_apply( slider_text_content[current_slide].intro, slider_text_content[current_slide].header, slider_text_content[current_slide].body, slider_text_content[current_slide].image); 

        

}


// function apply data
function slider_data_apply( intro, header, body, image){

    //animate background //fade in
    fade_animation("in")

    
    document.getElementById('header_text_header').innerHTML=intro;
    document.getElementById('header_text_body_header').innerHTML=header;
    document.getElementById('header_text_body_header_body').innerHTML=body;
    document.getElementById('header_container').style.backgroundImage='url('+ image +')';
   
  

}

function fade_animation(todo="in"){

    var track_opacity = 0;

    var fade = setInterval(function(){

        if(todo == "in"){

            document.getElementById('header_container').style.opacity = track_opacity;//increment opacity
    
        }
    
        if(todo == "out"){
    
            document.getElementById('header_container').style.opacity = 1 - track_opacity;//decrement opacity
    
           
        }

        if(track_opacity > 1){//stop interval
            clearInterval(fade);
        }
        
        track_opacity = track_opacity + 0.1;//increment

    }, 80);


}

//copy right
var year = new Date();
document.getElementById('copy_r').innerHTML = '<br /><div class="copry_r_1"><a href="mailto:streetwifiy@gmail.com" target="_blank">Email : Streetwifiy@gmail.com</a><br><a href="tel:+27670909089" target="_blank">Phone : +27 67 090 9089</a><br/><a onclick="window.open(\'http://wa.me/+27670909089?text=Uwireless%20enquiry.%20\', \'_blank\')" href=\'#\'>Whatsapp : +27 67 090 9089</a></div><div class="copry_r_2">Copyright 2017 - ' + year.getFullYear() + '<br /> <b> UWireless division of NkhiCorp reg : K2016457554 </b> <br /> South Africa</div>'