let buttonNum = document.querySelectorAll(".drum").length;
 




for (var i = 0; i < buttonNum; i++){

    // Detecting button clicked
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        
        var buttonInnerHTML = this.innerHTML;
        
        makeSounds(buttonInnerHTML)
        
    });


    // Detecting keys pressed
    document.addEventListener("keydown", function(event){
        makeSounds(event.key)
    });
}

// Function for taking event and producing corresponding sound
function makeSounds (press){

    switch (press) {
        case "w":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();

        break;

        case "a":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();

        break;

        case "s":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();

        break;

        case "d":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();

        break;

        case "j":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();

        break;

        case "k":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();

        break;

        case "l":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();

        break;

        default: console.log(press)
    }

}