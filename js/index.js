var lumos = document.querySelectorAll('.lumos');
var thunder = new Audio("sounds/338090__jzielke011__thunder-clap-2.mp3");


function initLumos(e) {
  var i;
  for(i = 0; i < lumos.length; i++) {
    lumos[i].style.top = e.clientY - parseInt(lumos[i].style.height)/2 + 'px';
    lumos[i].style.left = e.clientX - parseInt(lumos[i].style.width)/2 + 'px';
  }
}

function lightUp() {
  var i;
  for(i = 0; i < lumos.length; i++) {
    lumos[i].style.boxShadow = "none";
  }
   document.querySelector('img').style.filter = 'brightness(300%)';
   document.querySelector('.light-effect').classList.add('remove-effect');
}
function execLightning(time) {
  console.log("exec Light " + time);
  // thunder.play();
  lightUp();
  var remLightning = setTimeout(function() {
    console.log("rem Light");
    var i;
    for(i = 0; i < lumos.length; i++) {
      lumos[i].style.boxShadow = "0 0 0 9999px rgba(0, 0, 0, 0.4)";
      document.querySelector('img').style.filter = 'brightness(50%)';
      document.querySelector('.light-effect').classList.remove('remove-effect');

    }
  }, time);
}

function initLightning() {
  console.log("init Light");
  var timer = 3000;
  console.log("timer: " + timer);
  var firstFlash = setTimeout(execLightning, timer, 50);
  var secondFlash = setTimeout(execLightning, timer+450, 200);

}

var j;
for(j = 0; j < lumos.length; j++) {
  lumos[j].style.height = 240 + 20*j + 'px';
  lumos[j].style.width = 370 + 40*j + 'px';
  lumos[j].style.top = screen.height/2 - parseInt(lumos[j].style.height)/2 + 'px';
  lumos[j].style.left = screen.width/2 - parseInt(lumos[j].style.width)/2 + 'px';
}

 window.addEventListener('mousemove', initLumos);
 window.addEventListener('click', function() {
 	var bgm = document.querySelector("audio");
 	if(bgm.paused) {
 		bgm.play();
 	}
 });
 var initLightTimer = setInterval(initLightning, 6000 + Math.random()*3000);
 document.addEventListener('DOMContentLoaded', loadbar, false);

// Loading Bar https://stackoverflow.com/a/11072778

   function id(v){return document.getElementById(v); }
   function loadbar() {
     console.log("loaded");
     var ovrl = id("overlay"),
         prog = id("progress"),
         stat = id("progstat"),
         img = document.images,
         c = 0;
         tot = img.length;

     function imgLoaded(){
       c += 1;
       var perc = ((100/tot*c) << 0) +"%";
       prog.style.width = perc;
       stat.innerHTML = "Loading "+ perc;
       if(c===tot) return doneLoading();
     }
     function doneLoading(){
       ovrl.style.opacity = 0;
       setTimeout(function(){
         ovrl.style.display = "none";
       }, 1200);
     }
     for(var i=0; i<tot; i++) {
       var tImg     = new Image();
       tImg.onload  = imgLoaded;
       tImg.onerror = imgLoaded;
       tImg.src     = img[i].src;
     }
   }
