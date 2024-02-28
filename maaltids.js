// THIS IS JAVASCRIPT FOR THE SUBPAGE MAALTIDSKASSER.HTML

// Get all the icons
let iconImgs = document.querySelectorAll(".icon_imgs");

// Function to toggle image source
function toggleImage(img) {
    if (img.dataset.state === "on") {
        img.src = img.dataset.offSrc;
        img.dataset.state = "off";
    } else {
        img.src = img.dataset.onSrc;
        img.dataset.state = "on";
    }
}

// Set initial state for each icon
iconImgs.forEach(function(img) {
    // Assuming the default state is "off"
    img.dataset.state = "off";
    img.src = img.dataset.offSrc;
    
    // Attach click event listener to each icon
    img.addEventListener("click", function() {
        toggleImage(img);
    });
});
