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
 var initLightTimer = setInterval(initLightning, 6000 + Math.random()*3000);
