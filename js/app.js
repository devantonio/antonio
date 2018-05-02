$("#li").text( "Antonio English   | " + new Date().getFullYear());

function animate_info_in1(){
  $(".h1-1").fadeIn();
  $(".h1-1").text("Curiosity");
  $(".h1-1").addClass("o");
  $(".h1-1").addClass("position-h1");
  $("#p-btn").html("<p id='img-info' class='img-info img-info1'>As a lifelong learner, I am naturally curious, it’s how I grow and keep an active mind. My sense of wonder has led me to discover web developement and everything encompassed within it. The knowledge...</p><a href='#curiosity'><button class='info-btn'>READ MORE</button></a>");
  $(".img-info1").fadeIn();
  $(".info-btn").fadeIn();
  $(".img-info1").css("opacity", "1");
  $(".info-btn").css("opacity", "1");
  $(".img-info1").addClass("position-info-p");
  $(".info-btn").addClass("position-info-btn");
}


function animate_info_in2(){
  $(".h1-2").text("Adaptability");
  $(".h1-2").fadeIn();
  $(".h1-2").addClass("o");
  $(".h1-2").addClass("position-h1");
  $("#p-btn").html("<p id='img-info' class='img-info img-info2'>Adaptability is an essential skill to have while working with technologies that are constantly changing. You have to be open to learn, unlearn, and relearn. Which is why love working in this kind of environment...</p><a href='#adaptability'><button class='info-btn2'>READ MORE</button></a>");
  
  $(".img-info2").fadeIn(3000);
  $(".info-btn2").fadeIn(3000);
  $(".img-info2").addClass("position-info-p");
  $(".info-btn2").addClass("position-info-btn");
  $(".img-info2").addClass("o");
  $(".info-btn2").addClass("o");
}


function animate_info_in3(){
  $(".h1-3").text("Career-Related Skills");
  $(".h1-3").fadeIn(); 
  $(".h1-3").addClass("o");
  $(".h1-3").addClass("position-h1");

   $("#p-btn")
  .html("<p id='img-info' class='img-info img-info3'>I've been working in web development since 2014. I taught myself HTML and CSS, which quickly led to learning full stack web development. I'm well-versed in numerous...</p><a href='#career'><button class='info-btn3'>READ MORE</button></a>");
  $(".img-info3").fadeIn(3000);
  $(".info-btn3").fadeIn(3000);
  $(".img-info3").addClass("position-info-p");
  $(".info-btn3").addClass("position-info-btn");
  $(".img-info3").addClass("o");
  $(".info-btn3").addClass("o");
}

 function slide_away_info1(){
  $(".h1-3").fadeOut(0);
  $(".h1-3").removeClass("position-h1");
  $(".h1-1").removeClass("o");
  $(".h1-1").fadeOut(0);
  $(".h1-1").removeClass("position-h1");
  $(".img-info1").fadeOut(3000);
  $(".info-btn").fadeOut(3000);
  $(".img-info3").removeClass("o");
  $(".info-btn3").removeClass("o");
 }

function slide_away_info2(){
  $(".h1-1").removeClass("o");
  $(".h1-1").fadeOut(0);
  $(".h1-1").removeClass("position-h1");
  $(".img-info1").fadeOut(3000);
  $(".info-btn").fadeOut(3000);
  $(".h1-2").removeClass("o");
  $(".h1-2").fadeOut(0);
  $(".h1-2").removeClass("position-h1");
  $(".img-info2").fadeOut(3000);
  $(".info-btn2").fadeOut(3000);
  $(".img-info2").removeClass("position-info-p");
  $(".info-btn2").removeClass("position-info-btn");
}

function slide_away_info3(){
  $(".h1-3").fadeOut(0);
  $(".h1-3").removeClass("position-h1");
  $(".h1-3").removeClass("o");
  $(".img-info3").fadeOut(3000);
  $(".info-btn3").fadeOut(3000);
  $(".img-info3").removeClass("position-info-p");
  $(".info-btn3").removeClass("position-info-btn");
}


function slide_away_info(){
  $(".h1-2").removeClass("o");
  $(".h1-3").removeClass("o");
  $(".h1-2").fadeOut(0);
  $(".h1-2").removeClass("position-h1");
  $(".h1-3").fadeOut(0);
  $(".h1-3").removeClass("position-h1");
  $(".img-info2").fadeOut(3000);
  $(".info-btn2").fadeOut(3000);
  $(".img-info2").removeClass("position-info-p");
  $(".info-btn2").removeClass("position-info-btn");
  $(".img-info3").fadeOut(3000);
  $(".info-btn3").fadeOut(3000);
  $(".img-info3").removeClass("position-info-p");
  $(".info-btn3").removeClass("position-info-btn");
}

function fade_in(){
  $(".img-info1").removeClass("slide_away_info");
  $(".info-btn").removeClass("slide_away_info");
}

function removeClass(){
  $(".img-info").removeClass("slide_away_info");
  $(".info-btn").removeClass("slide_away_info");
}

function opacity(){
  $("#1").animate({opacity: '0.3'}).animate({opacity: '1'});
  $("#2").animate({opacity: '0.3'}).animate({opacity: '1'});
  $("#3").animate({opacity: '0.3'}).animate({opacity: '1'});
 }

function bullet1(){
  $("#pos1").addClass("bullet-color");
  $(".bullets").children("div#pos2, div#pos3").removeClass("bullet-color");
}

function bullet2(){
  $("#pos2").addClass("bullet-color");
  $(".bullets").children("div#pos1, div#pos3").removeClass("bullet-color");
}

function bullet3(){
  $("#pos3").addClass("bullet-color");
  $(".bullets").children("div#pos1, div#pos2").removeClass("bullet-color");
}

var numOfImages = parseInt($("#x").children().length);
var styledImageWidth =  100 / parseInt(numOfImages) ;

$("#x img").css("width", styledImageWidth + "%");
$("#x").css("width", numOfImages * 100 + "%");
$("#pos1").addClass("bullet-color");

var widthOfImage = parseInt($("#x").width()) / numOfImages;
var widthOfImages = parseInt($("#x").width());
var resizedImagesWidth = $(window).width() * numOfImages;
 
var value = $("#x").css("left").replace("px", "");
var absValue = Math.abs(value);

var opac = $("#3").css("opacity");
var leftValue = $("#x").css("left");
var click = 0;
var timeout1;
var timeout2;
var timeout3;
var timeout4;
var interval;
//individual intervals
function interval11(){interval = setInterval(function(){click =0; start();}, 24000);}
interval11();
start();
//individual functions
function start(){
  timeout1 = setTimeout(function(){animate_info_in1();slide_away_info3();   bullet1();$("#x").css("left", + 0 +"%");}, 0);
  timeout2 = setTimeout(function(){slide_away_info1(); animate_info_in2();  opacity(); bullet2();callNext(); }, 8000);
  timeout3 = setTimeout(function(){slide_away_info(); animate_info_in3(); opacity(); bullet3();callNext();}, 16000);
  timeout5 = setTimeout(function(){slide_away_info(); opacity();bullet1();$("#x").css("left", + 0 +"%");}, 24000);
}

function start1(){
  timeout4 = setTimeout(function(){slide_away_info(); animate_info_in3();opacity();bullet3();callNext()}, 8000);
}

function interval1(){
    interval = setTimeout(function(){opacity();interval11();click =0; start();}, 16000);
}

function interval2(){
    interval = setTimeout(function(){opacity();interval11();click =0; start();}, 16000);
}

function clearTimes(){
  clearInterval(interval);
  clearTimeout(timeout1);
  clearTimeout(timeout2);
  clearTimeout(timeout3);
  clearTimeout(timeout4);
  clearTimeout(timeout5);
}

function unbind(){
  $(".next").attr('onclick',''); 
  $(".prev").attr('onclick','');
  setTimeout(function(){$(".next").attr('onclick','next();unbind();');
  }, 8000);
   
  setTimeout(function(){$(".prev").attr('onclick','preview();unbind();');
  }, 8000);
}



function disableClick(){$('.next').unbind();
  setTimeout(function(){}, 8000);
}

function callNext(){
  if(click < numOfImages - 1){
    click++;
    $("#x").css("left", -click + "00%");
  } 
}

function callPreview(){
  if(click > 0){
    click--;
    $("#x").css("left", -click + "00%");
  }
}
  function next(){
    callNext();
    clearTimes();
    if (click == 1) {
      opacity();
      bullet2();
      start1();
      interval1();animate_info_in2();slide_away_info1();
    }
    if (click == 2 ) {
      opacity();
      bullet3();
      interval2();animate_info_in3();slide_away_info2();
    }
  }

  function preview(){
    callPreview();
    clearTimes();
    if (click == 1) {
      opacity();
      bullet2();
      start1();
      interval1();animate_info_in2();slide_away_info1();
    }
    if (click == 0) {
      clearTimes();
      opacity();
      bullet1();
      start();
      interval11();animate_info_in1();slide_away_info();
    }
  }
  
$("#pos1").click(function() {
  click = 0;
  opacity();
  bullet1();
  $("#x").css("left", + 0 +"%");
  clearTimes();
  start();
  interval11();animate_info_in1();slide_away_info();
});

$("#pos2").click(function() {
  click = 1;
  opacity();
  bullet2();
  $("#x").css("left", + -100 +"%");
  clearTimes();
  start1();
  interval1();animate_info_in2();slide_away_info1();
});

$("#pos3").click(function() {
  click = 2;
  opacity();
  bullet3();
  $("#x").css("left", + -200 +"%");
  clearTimes();
  interval2();animate_info_in3();slide_away_info2();
});

$(".pause-play-wrapper").html("<div class='pause-play1'></div><div class='pause-play2'></div>");
var toggle = 0;
function toggleSlide() {
  toggle ++;

if(toggle === 1) {
  clearTimes();
   $(".pause-play-wrapper").html("<span>&#9658;</span>");
}  else{
  toggle = 0;
}if(toggle === 0){
  if(click === 0) {
    
  start();interval11();
  }
   if (click == 1) {
      start1();
      interval1();
    }
    if (click == 2) {
      interval2();
    }
$(".pause-play-wrapper").html("<div class='pause-play1'></div><div class='pause-play2'></div>");
}console.log(toggle);
}

 if (click == 1) {
      start1();
      interval1();
    }
    if (click == 2 ) {
      interval2();
    }
  

var nav = $(".info2");
var x = $(".mobile-menu").offset();

var sec1 = $("#sec1").offset().top - 100;
var sec2 = $("#sec2").offset().top - 100;
var sec3 = $("#sec3").offset().top - 100;
var sec4 = $("#sec4").offset().top - 100;

$("#sec1").mouseover(function(){
  $(".bdr1").addClass("border-width");
});
$("#sec1").mouseout(function(){
  $(".bdr1").removeClass("border-width");
});
$("#sec2").mouseover(function(){
  $(".bdr2").addClass("border-width");
});
$("#sec2").mouseout(function(){
  $(".bdr2").removeClass("border-width");
});
$("#sec3").mouseover(function(){
  $(".bdr3").addClass("border-width");
});
$("#sec3").mouseout(function(){
  $(".bdr3").removeClass("border-width");
});
$("#sec4").mouseover(function(){
  $(".bdr4").addClass("border-width");
});
$("#sec4").mouseout(function(){
  $(".bdr4").removeClass("border-width");
});

if($(window).width() < 1022){
 $(".twitter-timeline").attr("data-height", "570");
} else{
   $(".twitter-timeline").attr("data-height", "350");

}

$(window).on("scroll", function(e) {
    if($(window).width() < 781){ 
  if ($(window).scrollTop() > 360 )  {
    nav.addClass("fix");
 } else {
     nav.removeClass("fix");
  $(".img-container").removeClass("top");
   }
   if($(window).scrollTop() > 360){
     $(".mobile-menu").addClass("fix1");
} else{
  $(".mobile-menu").removeClass("fix1");
}
  }
if($(window).width() > 1023 ){
  $(".twitter-timeline").attr("data-height", "350");

  if ($(window).scrollTop() > 636 )  {
    $(".about-skills").addClass("fixed-about-skills");
    $(".tweets").addClass("fixed-tweets");
  } else{
    $(".about-skills").removeClass("fixed-about-skills");
    $(".tweets").removeClass("fixed-tweets");
  }

} else{$(".twitter-timeline").attr("data-height", "570");} 
}); 
if ($(window).scrollTop() > 636 )  {
$(".about-skills").addClass("fixed-about-skills");
    $(".tweets").addClass("fixed-tweets");
}

$(window).on("resize", function(e) {
  if ($(window).scrollTop() > 636 )  {
    $(".about-skills").addClass("fixed-about-skills");
    $(".tweets").addClass("fixed-tweets");
  } else{
    $(".about-skills").removeClass("fixed-about-skills");
    $(".tweets").removeClass("fixed-tweets");
  }
if($(window).width() < 1023 ){ 
    $(".about-skills").removeClass("fixed-about-skills");
    $(".tweets").removeClass("fixed-tweets");
    $(".twitter-timeline").attr("data-height", "570");
}else {
}if($(window).width() > 1023){
 $(".twitter-timeline").attr("data-height", "350");
} else{
  $(".twitter-timeline").attr("data-height", "570");
}
});

function closeNav(){
  $("#mySidenav").css("width", "0");
  $(".mobile-menu").css("display", "block");
  $(".closebtn").css("display", "none");
  $("#mySidenav hr").css("right", "-135px");
  $("#mySidenav").css("width", "0");
  $(".line1").removeClass("open1");
  $(".line2").removeClass("open2");
  $(".line3").removeClass("open3");
  $(".mobile-menu div").css("background-color", "#111");
  $(".mobile-menu").removeClass("translate-open");
  $(".mobile-menu").addClass("translate-close");
}

function openNav() {
  if(!$(".line1").hasClass("open1")){
    $("#mySidenav").css("width", "250");
    $(".line1").addClass("open1");
    $(".line2").addClass("open2");
    $(".line3").addClass("open3");
    $("#mySidenav hr").css("right", "167px");
    $("#mySidenav").css("transition", ".7s");
    $("#mySidenav").css("z-index", "120");
    $(".mobile-menu").addClass("translate-open");
    $(".mobile-menu").removeClass("translate-close");
    $(".mobile-menu div").css("background-color", "#fff");

  } else {
    closeNav();
  }
 
    var x = $(".info2").offset();

} 

$( ".mobile-nav" ).click(function() {     
    if( ! $('.line2').hasClass("exit3")){
        $(".line1").addClass("exit");
        $(".line3").addClass("exit2");
        $(".line2").addClass("exit3");
        $(".drop-down").addClass("show");
        $(".drop-down").addClass("grow");
        $(".drop-nav").css("display", "initial"); 
      }
    else{
        $(".line1").removeClass("exit");
        $(".line3").removeClass("exit2");
        $(".line2").removeClass("exit3"); 
        $(".drop-down").removeClass("show"); 
        $(".drop-nav").css("display", "none"); 
    }
});

 $(window).click(function() {
    $(".line1").removeClass("exit");
    $(".line3").removeClass("exit2");
    $(".line2").removeClass("exit3"); 
    $(".drop-down").removeClass("show"); 
    $(".drop-nav").css("display", "none");
});

$('.mobile-nav').click(function(event){
    event.stopPropagation();
});
 

$("form").submit(function(e){
  e.preventDefault();
  var subject = $(".form-subject").val();
  var name = $(".form-name").val();
  var email = $(".form-email").val();
  var textarea = $(".textarea").val();
  var address = $(".address").val();
   
  var formdata = new FormData();
    formdata.append( "subject", subject );
    formdata.append( "name", name );
    formdata.append( "email", email );
    formdata.append( "message", textarea );
    formdata.append( "address", address );

  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", "inc/mailer.php", true);

  if (xhttp.readyState !== 4){
    $(".btn").attr("value", "sending...");
  } 
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $(".btn").attr("value", "Send");
      $(".message-confirmation").html(xhttp.responseText);
      $(".form-subject").val("");
      $(".form-name").val("");
      $(".form-email").val("");
      $("textarea").val("");
    }
  };
  xhttp.send(formdata);
});


$('.btn').click(function(event) {
  var patt = new RegExp("@");
  var patt2 = new RegExp(".com");
if ($(".form-email").val() === "" || patt.test($(".form-email").val()) === false || patt2.test($(".form-email").val()) === false){ 
  $(".form-email").css("border-color", "#ff4444");
  }else{
    $(".form-email").css("border-color", "#474747");
  }
  if($(".form-name:text").val() === ""){
    $(".form-name").css("border-color", "#ff4444");
  }else{
    $(".form-name").css("border-color", "#474747");
  }
  if($("textarea").val() === ""){
    $(".textarea").css("border-color", "#ff4444");
  } else{
    $(".textarea").css("border-color", "#474747");
  }
 
});


$(".input").keypress(function(){
   var patt = new RegExp("@");
   var patt2 = new RegExp(".com");
  if ($(".form-email").val() !== "" && patt.test($(".form-email").val()) === true || patt2.test($(".form-email").val()) === true){ 
    $(".form-email").css("border-color", "#474747");
  }
  if($(".form-name:text").val() !== ""){
    $(".form-name").css("border-color", "#474747");
  }
  if($("textarea").val() !== ""){
    $(".textarea").css("border-color", "#474747");
  } 
});

$('.sidenav a').click(function(){
    closeNav();
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 700);
});





















































