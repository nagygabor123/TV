const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");
const YTLinks = document.querySelectorAll(".youtube-link");
const YTPalyerPopup = document.querySelector(".youtube-player-popup iframe")

YTLinks.forEach((link) => {
    link.addEventListener("click", () => {
        YTPlayerOverlay.classList.add("active");
        let vidoLink = `https://www.youtube.com/embed/${link.dataset.link}`
        YTPalyerPopup.src = vidoLink;
    });
});

YTPlayerOverlay.addEventListener("click", () => {
    YTPlayerOverlay.classList.remove("active");
});