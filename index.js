/*

document.querySelector(".w").addEventListener("click", function () {
    alert("w clicked");
});

document.querySelector(".a").addEventListener("click", function () {
    alert("a clicked");
});

document.querySelector(".s").addEventListener("click", function () {
    alert("s clicked");
});
document.querySelector(".d").addEventListener("click", function () {
    alert("d clicked");
});
document.querySelector(".j").addEventListener("click", function () {
    alert("j clicked");
});
document.querySelector(".k").addEventListener("click", function () {
    alert("k clicked");
});
document.querySelector(".l").addEventListener("click", function () {
    alert("l clicked");
});*/


var drums = document.querySelectorAll(".drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var key = this.innerHTML;
        playSound(key);
        btnAnimation(key);
    });
}

document.addEventListener("keypress", function (event) {
    key = event.key;
    playSound(key);
    btnAnimation(key);
});

function btnAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100)
}

function playSound(key) {
    var audio;
    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case 'j':
            audio = new Audio("sounds/snare.mp3");
            break;
        case 'k':
            audio = new Audio("sounds/crash.mp3");
            break;
        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            audio = new Audio("sounds/tom-1.mp3");
            console.log(btnpressed);
    }
    audio.play();
}


/*

var audio = new Audio("sounds/crash.mp3");
        audio.play();
*/
