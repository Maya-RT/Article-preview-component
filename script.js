const shareBtn = document.querySelector(".share-button");
const socialIcons = document.querySelector(".share");

shareBtn.addEventListener("click", () => {
    socialIcons.classList.toggle("clicked")
    
});