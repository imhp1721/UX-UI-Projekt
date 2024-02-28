// THIS IS JAVASCRIPT FOR THE SUBPAGE MAALTIDSKASSER.HTML

/*---Icon toggle functionality---*/

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

/*---POPUP---*/

const openReste = document.getElementById("open_reste");
const popUpReste = document.getElementById("pop_up_reste");

openReste.addEventListener("click", () => {
    popUpReste.showModal()
})

/*---counters---*/

function tempAlert(message) {
    alert(message);
}

const plusPs = document.getElementById("plus_ps");
const numPs = document.getElementById("ps_num");
const minusPs = document.getElementById("minus_ps");

let ps = 1;

const minPs = 1;
const maxPs = 8;

plusPs.addEventListener("click", ()=>{
    if(ps < maxPs){
        ps++;
        numPs.innerText = ps;
    } else {
        tempAlert("Du kan ikke vælge flere end " + maxPs + " personer.")
    }
});

minusPs.addEventListener("click", ()=>{
    if(ps > 1){
        ps--;
        numPs.innerText = ps;
    } else {
        tempAlert("Du kan ikke vælge færre end " + minPs + " person.")
    }
});

const plusDg = document.getElementById("plus_dg");
const numDg = document.getElementById("dg_num");
const minusDg = document.getElementById("minus_dg");

let dg = 3;

const minDg = 3;
const maxDg = 7;

plusDg.addEventListener("click", ()=>{
    if (dg < 7) {
        dg++;
    numDg.innerText = dg;
    } else {
        tempAlert("Du kan ikke vælge flere end " + maxDg + " dage.")
    }
});

minusDg.addEventListener("click", ()=>{
    if(dg > 3){
        dg--;
        numDg.innerText = dg;
    } else {
        tempAlert("Du kan ikke vælge færre end " + minDg + " dage.")
    }
});