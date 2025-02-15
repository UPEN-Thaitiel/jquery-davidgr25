
// Create a Javascript code to change the font color to red

//document.querySelector("h1").style.color = "red";

// Create a jQuery code to change the fonr color to red

//$("h1").css("color","red");

// Add .big-titile class using Javascript.

//document.querySelector("h1").classList.add("big-tittle")

// Add .big-titile class using jQuery.
$("h1").addClass("big-tittle")

//  Change h1 text to "Bye" on Javascript

//document.querySelector("h1").innerHTML = "BYE"
$("h1").text("bye")

//  Change h1 text to "Bye" on jQuery

//  Change buttom names 

//  Change h1 text to "Bye" on jQuery

//  Change attribute href link to ibm.com

$("a").attr("href","https://www.google.com");

// add a click event listener in the h1 header to change its color to green using jQuery

$("h1").click(function (){
    $("h1").css("color", "green")
});

// add a click event listener for each of the buttons to change H1 color to red in JavaScript
for (var i=0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click")
        document.querySelector("h1").style.color
}


// add a click event listener for each of the buttons to change H1 color to red in jQuery
//$("button").click(function (){
//    $("button").css("color","red")
//});

// add a mouseover using "on(mouseover,function())" to change   h1 element to purple using jQuery

// Create a toggle animation using jQuery for the header clicking buttons.



 // Create a Fade Toggle animation using jQuery for the header clicking buttons.



 // Create a slide Toggle animation using jQuery for the header clicking buttons.


 // Create a custom animation using jQuery to change opacity to 0.5
$("button").click(function () {
    $("h1").animate({opacity:'0.5'},500);
})



 /* now solve the challenge, change the text on each button to a different color and 
 change  th color to its pre-defined value*/

const lista = ["red", "green","blue","pink", "yellow","black"]

$("button").each(function(index){
    $(this).text(lista[index])
})