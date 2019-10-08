//import { url } from "inspector";

//alert();


//////////// slider //////////////

var slider_text_content = [
    {
        header : 'Add more to your store',
        body : 'Customers get more than bread and butter in their favourite local store, they now get QUALITY CHEAP INTERNET together with their favourite treat.',
        image : '/home_page_contents/images/spaza.jpg',
    },
    {
        header : 'Being more than one of those land lords',
        body : 'Be CHEAP QUALITY INTERNET offering landlord.',
        image : '/home_page_contents/images/rent.jpg',
    },
    {
        header : 'Built for anywhere',
        body : 'To be enjoyed by anyone, StreetWifiy CHEAP QUALITY INTERNET.',
        image : '/home_page_contents/images/informal.webp',
    }

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

    document.getElementById('slider_header').innerHTML=header;
    document.getElementById('slider_text').innerHTML=body;
    document.getElementById('slider_box').style.backgroundImage='url('+ image +')';
}


