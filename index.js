

var numberOfButton = document.querySelectorAll(".drum").length

for (i=0;i<numberOfButton;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonInnerHTML= this.innerHTML;
    callSound(buttonInnerHTML)
    buttonAnimation(buttonInnerHTML)
   
        
    })

}

document.addEventListener("keypress", function(event){
  
  // var buttonInnerHTML=event.key;
  callSound(event.key)
  buttonAnimation(event.key)
  


})
  
function callSound(key) {

  switch (key) {
    case "w":

       var audio = new Audio("./sounds/crash.mp3");
       audio.play();
       break;
     case "a":
       var audio = new Audio("./sounds/kick-bass.mp3");
         audio.play();
         break;
     case "s":
       var audio = new Audio("./sounds/snare.mp3");
       audio.play();
       break;
       case "d":
         var audio = new Audio("./sounds/tom-1.mp3");
         audio.play();
         break;
     case "j":
         var audio = new Audio("./sounds/tom-2.mp3");
           audio.play();
           break;
     case "k":
         var audio = new Audio("./sounds/tom-3.mp3");
         audio.play();
         break;
      case "l":
         var audio = new Audio("./sounds/tom-4.mp3");
         audio.play();
         break;
      default:
      break;
 }

  
}


function buttonAnimation(selectkey){
var activeResponse = document.querySelector("."+selectkey);
activeResponse.classList.add("pressed");

setTimeout(function() {
  activeResponse.classList.remove('pressed');
}, 100);


}