//Slideshow Function Page 1 //
//$("#slides > div:gt(0)").hide();

setInterval(function () {
    $('#slides > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slides');
}, 4000);

//Function to Change Background Color on Page 1 //
function myFunction() {
    document.getElementById("divs").style.backgroundColor = "aqua";
}



//Page 2 change font color //
 

/*function changeColor() {
    //document.body.style.color = "purple";
    document.getElementById("about").style.color = "purple";  
} */

// For Loop to add hamster :-) :-) :-) //
var count = 1;

for (var i = 0; i < count; i++) {
    addHam();
}

function addHam() {
    document.write('<img src="images/guineapig.jpg">');
}