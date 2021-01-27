 
//get query String parameter
function getParameterByName(name,url){
    if(!url) url = window.location.href;
    name = name.replace(/[\[\]]/g,"\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g," "));

}


 //expression custom helpers
Handlebars.registerHelper("formatPhoneNumber",function(property){
    if(property){
 var phone = property.toString();
 return "(" + phone.substring(0,3) + ")" + phone.substring(3,3) + "-" + phone.substring(6,4);
    }
});

//block custom  helpers
Handlebars.registerHelper("makeBold",function(options){ //making our text bold
    return new Handlebars.SafeString("<Strong>" + options.fn(this) +"</Strong>");
});
//block custom  helpers
Handlebars.registerHelper("toLower",function(options){
    return options.fn(this).toLowerCase() ;
});

$(document).ready(function(){
    var characterTemplate = $("#character-template").html();
    var compileCharacterTemplate = Handlebars.compile(characterTemplate); //compling the handlebars

    var characterId=getParameterByName("id")

    $.ajax("./data/cast.json").done(function(cast){ //we using ajax to fetch data from our cast.json
     //console.log(cast) cast is just a parameter callback function name you can use any name you wish
     if ($("body").hasClass("page-cast-details")){ //if it is cast-details.html
        $(".character-list-container").html(compileCharacterTemplate(cast.characters[characterId])) //characters name of our array in cast.json
     }else{ //if its index.html page
        $(".character-list-container").html(compileCharacterTemplate(cast));//binding our json data with our template i.e handlebars //check how it works in index.html
        
    }
     

    });
    
     //event delegation
    $(document).on("click",".view-details", function(e){
        e.preventDefault();
        console.log("button clicked")
    })
    


})