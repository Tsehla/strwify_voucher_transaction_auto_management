//import { url } from "inspector";

//alert();


//////////// slider //////////////

var slider_text_content = [

    {
        header : "Improve your WiFi and guest satisfaction",
        body : "Create a free or paid Restaurant Internet access, engage guests with advertisements, collect surveys and understand what you can do better to improve guest satisfaction",
        image : "/home_page_contents/images/resturant.jpg",

    }, 
    {
        header : "Intelligent marketing WiFi system for retail stores",
        body : "Uwireless HotSpot Retail WiFi system transforms your WiFi network into an intelligent marketing system which enables a display of video advertisements on mobile phones, tablets or laptops of customers.",
        image : '/home_page_contents/images/retail.jpg',
    },
   {
        header : 'Cloud Hotel WiFi software for easy guest WiFi control',
        body : 'Uwireless Hotspot Hotel WiFi is a robust and cost effective solution suitable for any hospitality deployment. It controls user Internet access, sets limits, engages users and helps you run different marketing strategies to maximize revenue from your hotel WiFi',
        image : '/home_page_contents/images/office_wifi.jpg',
    },
    // {
    //     header : 'Built for anywhere',
    //     body : 'To be enjoyed by anyone, StreetWifiy CHEAP QUALITY INTERNET.',
    //     image : '/home_page_contents/images/informal.webp',
    // } 

]

//on page load//load first items
slider_data_apply( slider_text_content[0].header, slider_text_content[0].body, slider_text_content[0].image);
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
    slider_data_apply( slider_text_content[current_slide].header, slider_text_content[current_slide].body, slider_text_content[current_slide].image); 
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
        slider_data_apply( slider_text_content[current_slide].header, slider_text_content[current_slide].body, slider_text_content[current_slide].image); 
        return;
    }

     // if back was not pressed
        //increment slider for next item
        current_slide = current_slide + 1;

        //check if slider length is not more than what array contains//if make it zero
        if(current_slide > slider_text_content.length - 1 ){
            current_slide = 0;
        }

        // call function every x seconds
        slider_data_apply( slider_text_content[current_slide].header, slider_text_content[current_slide].body, slider_text_content[current_slide].image); 

}


// function apply data
function slider_data_apply( header, body, image){

    document.getElementById('hero_header').innerHTML=header;
    document.getElementById('hero_text').innerHTML=body;
    document.getElementById('hero_image').style.backgroundImage='url('+ image +')';
}


//copy right
var year = new Date();
document.getElementById('copy_r').innerHTML = 'Copyright 2017 - ' + year.getFullYear() + '<br /> <b> UWireless division of NkhiCorp reg : K2016457554 </b> <br /> South Africa'