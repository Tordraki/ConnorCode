$(document).ready(function () {
    /*toggle menu/navbar script*/
    
    
    $('.menu-btn').click(function(){
        var element = document.getElementById("links");
        element.classList.toggle("active");
        //$('.mainnav .menu').toggleClass("active");
        //document.getElementById('.mainnav .menu').style.top = 0;
        $('.menu-btn i').toggleClass("active");
        console.log("hi");
    });
  });