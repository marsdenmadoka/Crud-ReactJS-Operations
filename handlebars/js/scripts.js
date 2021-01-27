 
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

    $.ajax("./data/cast.json").done(function(cast){ //we using ajax to fetch data from our cast.json
     console.log(cast)
     $(".character-list-container").html(compileCharacterTemplate(cast));//binding our json data with our template i.e handlebars //check how it works in index.html

    });
    
     //event delegation
    $(document).on("click",".view-details", function(e){
        e.preventDefault();
        console.log("button clicked")
    })
    


})