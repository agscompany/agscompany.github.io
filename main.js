function ScrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
  });
}

var buttonScrollHeader = document.querySelector(".pageup");
var header = document.querySelector(".header");

var menubuttons = document.getElementsByClassName("menurefs");
var home_games_yt_vk = document.getElementsByClassName("sidebars");

buttonScrollHeader.addEventListener("click", () => {
  ScrollTo(header);
});

menubuttons[0].addEventListener("click", () => {
  ScrollTo(home_games_yt_vk[0]);
});

menubuttons[1].addEventListener("click", () => {
  ScrollTo(home_games_yt_vk[1]);
});

menubuttons[2].addEventListener("click", () => {
  ScrollTo(home_games_yt_vk[2]);
});

menubuttons[3].addEventListener("click", () => {
  ScrollTo(home_games_yt_vk[3]);
});

menubuttons[4].addEventListener("click", () => {
  ScrollTo(home_games_yt_vk[4]);
});
/*
var gameBtns = document.querySelectorAll(".games .game");
var gamestable = document.getElementById("games");
var gamepage = document.getElementById("gamepage");
var gamepage;
var game = {
  name: "",
  year: "",
  des: "",
  img: "",
};
gameBtns[0].addEventListener("click", () => {
  gamestable.style.visibility = "hidden";
  gamestable.style.display = "none";
  gamepage.style.visibility = "visible";
  gamepage.style.display = "block";
});
*/
