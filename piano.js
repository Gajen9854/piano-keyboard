var keyBoardPlay = document.querySelectorAll(".key").length;

for (var i = 0; i < keyBoardPlay; i++) {

    document.querySelectorAll(".key")[i].addEventListener("click", function () {

        var playMusic = this.innerHTML;
        clickSound(playMusic);

    })

}
document.addEventListener("keydown", function (event) {

    clickSound(event.key);


})
function clickSound(down) {

    switch (down) {
        case "a":
            document.querySelector(".a").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".a").classList.remove("keyWhite")
            }, 200);
            var playA = new Audio("piano-mp3/A1.mp3")
            playA.play();
            break;
        case "w":
            document.querySelector(".w").classList.add("keyBlack")
            setTimeout(function () {
                document.querySelector(".w").classList.remove("keyBlack")
            }, 100);
            var playA = new Audio("piano-mp3/Ab1.mp3")
            playA.play();
            break;

        case "s":
            document.querySelector(".s").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".s").classList.remove("keyWhite")
            }, 100);
            var playA = new Audio("piano-mp3/A2.mp3")
            playA.play();
            break;
        case "e":
            document.querySelector(".e").classList.add("keyBlack")
            setTimeout(function () {
                document.querySelector(".e").classList.remove("keyBlack")
            }, 100);
            var playA = new Audio("piano-mp3/Ab2.mp3")
            playA.play();
            break;

        case "d":
            document.querySelector(".d").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".d").classList.remove("keyWhite")
            }, 100);
            var playA = new Audio("piano-mp3/A3.mp3")
            playA.play();
            break;

        case "r":
            document.querySelector(".r").classList.add("keyBlack")
            setTimeout(function () {
                document.querySelector(".r").classList.remove("keyBlack")
            }, 100);
            var playA = new Audio("piano-mp3/Ab3.mp3")
            playA.play();
            break;
        case "f":
            document.querySelector(".f").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".f").classList.remove("keyWhite")
            }, 100);
            var playA = new Audio("piano-mp3/A4.mp3")
            playA.play();
            break;

        case "g":
            document.querySelector(".g").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".g").classList.remove("keyWhite")
            }, 100);
            var playA = new Audio("piano-mp3/A5.mp3")
            playA.play();
            break;

        case "t":
            document.querySelector(".t").classList.add("keyBlack")
            setTimeout(function () {
                document.querySelector(".t").classList.remove("keyBlack")
            }, 100);
            var playA = new Audio("piano-mp3/Ab4.mp3")
            playA.play();
            break;
        case "h":
            document.querySelector(".h").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".h").classList.remove("keyWhite")
            }, 100);
            var playA = new Audio("piano-mp3/A6.mp3")
            playA.play();
            break;

        case "y":
            document.querySelector(".y").classList.add("keyBlack")
            setTimeout(function () {
                document.querySelector(".y").classList.remove("keyBlack")
            }, 100);
            var playA = new Audio("piano-mp3/Ab5.mp3")
            playA.play();
            break;

        case "j":
            document.querySelector(".j").classList.add("keyWhite")
            setTimeout(function () {
                document.querySelector(".j").classList.remove("keyWhite")
            }, 100);
            var playA = new Audio("piano-mp3/A7.mp3")
            playA.play();
            break;

    }


}
