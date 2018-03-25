<!DOCTYPE html>
<html lang="en">
  <head>
  	<meta charset="UTF-8">
  	<meta name="viewport" content="width=device-width, initial-scale=1.0">
  	<title>Antonio English | WEB DEVELOPER, PROGRAMMER & DESIGNER</title>
  	<link rel="stylesheet" href="css/main.css">
  	<link rel="stylesheet" href="css/normalize.css">
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:900|Source+Sans+Pro:900|Arimo|Work+Sans|Nunito|Asap" rel="stylesheet">


  </head>
  <body>

    <nav id='nav'>
      <div id="mySidenav" class="sidenav">
        <a href="#">About Antonio</a>
        <hr>
        <a href="#">Portfolio</a>
        <hr>
        <a href="#">Resume</a>
        <hr>
        <a href="#">Contact Antonio</a>
        <hr>
      </div>
      <div class="intro">
        <div class="info">
          <div class="location-container">    
            <div class="location-svg-div">
              <img src="location2.svg" alt="location icon">
            </div>
          <ul class="location">
            <li>Location</li>
            <li>Charlotte, NC</li>
            </ul>
          </div>
          <div class="email-container">
            <div class="mail-svg-div">
              <img src="mail3.svg" alt="mail icon">
            </div>
            <ul class="email">
              <li>Email</li>
              <li>devantonio.inq@gmail.com</li>
            </ul>
          </div>
  

  </div>
       <!--<div class="mobile-nav">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
      </div>
      <div class="drop-down">
        <ul class="drop-nav">
          <li class="li  nav-home"><a href="index.html">Home</a></li>
          <li class="li nav-work"><a href="index.html#work">Portfolio</a></li>
          <li class="li drop-aboutMe"><a href="about-me.html">About Me</a></li>
        </ul>
      </div> -->
      
<div class="mobile-menu" onclick="openNav()">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          
        </div>
        <div class="info2">    
 
          <ul>
            <li><a href="index">ANTONIO ENGLISH</a></li>
            <li>WEB DEVELOPER, PROGRAMMER & DESIGNER</li>
          </ul>

          <ul class="desktop-nav">
            <li>Home </li>
            <li>Portfolio</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        
            
             
            
            
          <!-- <div class="github">
            <img src="github.svg" alt="github svg">
          </div> -->
        </div>


    
      <ul id="0" class="container nav">
        <li class="nav-home"><a class="li" href="#header">About Antonio</a></li>
        <li class="nav-work"><a class="li" href="#work">Portfolio</a></li> <li class="nav-work"><a class="li" href="#work">Resume</a></li>
        <li class="aboutMe"><a class="li" href="about-me.html">Contact Antonio</a></li> 
      </ul>
    </nav>
    
  <header id="header">
    <div class="img-info-container">
      <h1 class="h1-1"></h1>
      <h1 class="h1-2"></h1>
      <h1 class="h1-3"></h1>
      <div id="p-btn">


        <!-- <p id="img-info" class='img-info img-info1'></p>
        <button class='info-btn'>Check it out</button>
        <p class="img-info2 img-info2">img-info2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero ab neque, eligendi minus perferendis iusto, .</p>
        <button class='info-btn2'>Check it out</button>
        <p class="img-info3 img-info3">img-info3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam vero ab neque, eligendi minus perferendis iusto, .</p>
        <button class='info-btn3'>Check it out</button> -->

        
        
      </div>
  </div>
    <div id="slide" class="w3-content w3-section">

  <figure id="x" >
    <img id="1" src="01.jpg" alt="">
    <img id="2" src="03.jpg" alt="">
    <img id="3" src="04.jpg" alt="">

  </figure>

  <div class="bullets">
    <div id="pos1"></div>
    <div id="pos2"></div>
    <div id="pos3"></div>
  </div>
  <div class="prev"  onclick="preview();unbind();" ><img src="preview.svg" alt=""></div>
  <!-- <div class="pause-play-container" onclick="toggleSlide();">
    <div class="pause-play-wrapper">
      <div class="pause-play1"></div>
      <div class="pause-play2"></div>
    </div> -->
  </div>
  <div class="next" onclick="next();unbind();"><img src="next.svg" alt=""></div>
   
  <!-- <span>&#9658;</span> -->

  
  </header>
 <!-- <img class="svg-sprite" src="svg10.svg" alt="">

 <div class="svg-info">
  <h5>CURIOSITY</h5>
   <p>I've enjoyed working on projects of all sizes and profiles, honing my craft along the way. Here is some of my latest work.</p>
    <h5>Adaptability</h5>
   <p>I've enjoyed working on projects of all sizes and profiles, honing my craft along the way. Here is some of my latest work.</p>
   <h5>Working</h5>
   <p>I've enjoyed working on projects of all sizes and profiles, honing my craft along the way. Here is some of my latest work.</p>
 </div> -->
<!-- <button class="left-arrow" onclick="slideLeft()">&#10094;</button>
<button class="right-arrow" onclick="slideRight()">&#10095;</button> -->
  <div class="portfolio">

      <div class="container work workIntro" id="1">
        <div>
          <h1 id="work" class="intro-header">My Work</h1>
        </div>
        <p class="intro2">I've enjoyed working on projects of all sizes and profiles, honing my craft along the way. Here is some of my latest work.</p>
      </div>
      <hr class="line">
      <div class="work hover">
        <div class="lft-col work-info">
          <section id="sec1">
            <h2 class="wrkHeader">Video Player</h2>
            
            <h3>HTML, CSS, JavaScript</h3>
            <div class="h3-border bdr1"></div>
            <div class="h3-border1"></div>
            <div class="img-container"><img src="work-photos/video_player.png" alt=""></div>
            <p class="project-details">In this project, I build an HTML5 video player using JavaScript and the HTML5 Video API. Using a transcript, I'll incorporate an interactive video player that synchronizes the video and the transcript. 
            </p>
            <div class="button project-btn"><a href="https://devantonio.github.io/interactive-video-player/">Check it out</a></div>
          </section>
        </div>
        <div class="workImg video-player-image"></div>
      </div>
      <div class="work">
        <div class="rgt-col work-info">
          <section id="sec2">
            <h2 class="wrkHeader">YourApp Dashboard</h2>
            
            <h3>HTML, CSS, JavaScript</h3>
            <div class="h3-border bdr2"></div>
            <div class="h3-border1"></div>
              <div class="img-container"><img src="work-photos/video_player.png" alt=""></div>
            <p class="project-details">In this project, I build a beautiful, web dashboard complete with JavaScript-driven charts and graphs.</p>
            <div class='button project-btn'><a href="https://devantonio.github.io/web-app-dashoard/">Check it out</a></div>
          </section>
        </div>
        <div class="workImg dashboard-image"></div>
      </div>
      <div class="work">
        <div class="lft-col work-info">
          <section id="sec3">
            <h2 class="wrkHeader">Responsive</h2>
            
            <h3>HTML, CSS/SASS</h3>
            <div class="h3-border bdr3"></div>
            <div class="h3-border1"></div>
            <div  class="img-container"><img src="work-photos/video_player.png" alt=""></div>
            <p class="project-details">In this project I build a responsive, mobile-first layout using HTML, CSS/SASS, SCSS partials, variables, extends, and mixins. This design responds well to small, medium, and large viewport sizes and devices.</p>
            <div class='button project-btn'><a href="https://devantonio.github.io/css-to-sass/css-to-sass/">Check it out</a></div>
          </section>
        </div>
        <div class="workImg sass-responsive-image"></div>
      </div>
      <div class="work">
        <div class="rgt-col border work-info">
          <section id="sec4">
            <h2 class="wrkHeader">Public API</h2>
            
            <h3>HTML, CSS, JavaScript</h3>
            <div class="h3-border bdr4"></div>
            <div class="h3-border1"></div>
            <div class="img-container"><img src="work-photos/video_player.png" alt=""></div>
            <p class="project-details">In this project I use the OMDB API, grabing 6 movies and their details to reveal a few of my favorite films.</p>
            <div class='button project-btn'><a href="https://devantonio.github.io/public-api/">Check it out</a></div>
          </section>
        </div>
        <div class="workImg public-api-image"></div>
      </div>  
  </div>
  
   

    <div class="about-skills">
      <h3>About Antonio</h3>
      <div class="about">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam vel reiciendis debitis magni doloribus nostrum animi at possimus. Impedit voluptatum omnis, pariatur harum earum quaerat quos debitis minus molestiae officia!
      </div>
        <h3>Skills</h3>
      <div class="skills">
        <ul>
          <li>html</li>
          <li>css</li>
          <li>javascript</li>
          <li>php</li>
          <li>nodejs</li>
          <li>angular</li>
          <li>sql</li>
        </ul>
      </div>
    </div>

     <div class="tweets">
      <!-- <h2 class="tweets-header">TWEETS</h2> -->
       <a class="twitter-timeline" data-height="380"  href="https://twitter.com/devantonio16?ref_src=twsrc%5Etfw">Tweets by devantonio16</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    </div>
<hr class="hr2">
   <div class="contact-wrapper">
    <?php

if (($_SERVER["REQUEST_METHOD"]) == "POST"){
        $subject    = trim(filter_input(INPUT_POST,"subject", FILTER_SANITIZE_STRING));
        $name    = trim(filter_input(INPUT_POST,"name", FILTER_SANITIZE_STRING));
        $email   = trim(filter_input(INPUT_POST,"email", FILTER_SANITIZE_EMAIL));
        $message = trim(filter_input(INPUT_POST,"message", FILTER_SANITIZE_SPECIAL_CHARS));
        
        require 'libs/PHPMailer/PHPMailerAutoload.php';
        include "inc/mailer.php";

if ($subject == '') {$mail->Subject = 'INQUIRY';}
        
if ($_POST["address"] != "" ) {echo("Bad input.");exit;}

if ($mail->send()) {}       

}

 
?>
    <h3>Contact Antonio</h3>
     <form action="index.php" method="post">

       <input class="form-subject" name="subject" type="text" placeholder="Subject">
       <div class="required-bullet1"></div>
       <input class="form-name" name="name" type="text" placeholder="Name">
       <div class="required-bullet2"></div>
       <input class="form-email" name="email" type="email" placeholder="Email">
       <div class="required-bullet3"></div>
       <input class="address" type="text" name="address" placeholder="leave this blank" style="display
      : none">
       <textarea class="textarea" style="font-size:13px;" name="message" placeholder="What's up?"    ></textarea>
       <input class="btn button contact-button" type="submit" name="submit" value="Send">
     </form>
     <footer>
       <div class="contact-svg">
         <a href="https://github.com/devantonio" target="blank"><img src="github.svg" alt=""></a>
         <a href="https://twitter.com/devantonio16" target="blank"><img src="twitter.svg" alt=""></a>
         <a href="https://stackoverflow.com/users/7886567/antonio?tab=profile" target="blank"><img src="stack.svg" alt=""></a>
       </div>


       <ul ><li id="li"></li></ul>
      </footer>
     
   </div>
    
    <script src="js/app.js"></script>
  </body>
</html>

    


  