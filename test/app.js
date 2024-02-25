const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLinks = document.querySelectorAll(".youtube-link");
const YTPalyerPopup = document.querySelector(".youtube-player-popup iframe")
let Link = ``;


YTPlayerOverlay.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
});

document.getElementById('film1').addEventListener('click', function() {   
    Link = `yVdMF09yJZY`
});

document.getElementById('film2').addEventListener('click', function() {   
    Link = `c3ggouGt76g`
});


document.getElementById('yt-link').addEventListener('click', function() {
    YTPlayerOverlay.classList.add("active");
    let vidoLink = `https://www.youtube.com/embed/${Link}`
    YTPalyerPopup.src = vidoLink;
});
