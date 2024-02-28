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
const plusPs = document.getElementById("plus_ps");
const numPs = document.getElementById("ps_num");
const minusPs = document.getElementById("minus_ps");

let ps = 1;

plusPs.addEventListener("click", ()=>{
    ps++;
    numPs.innerText = ps;
});

minusPs.addEventListener("click", ()=>{
    if(ps > 1){
        ps--;
        numPs.innerText = ps;
    }
});

const plusDg = document.getElementById("plus_dg");
const numDg = document.getElementById("dg_num");
const minusDg = document.getElementById("minus_dg");

let dg = 3;

plusDg.addEventListener("click", ()=>{
    dg++;
    numDg.innerText = dg;
});

minusDg.addEventListener("click", ()=>{
    if(dg > 3){
        dg--;
        numDg.innerText = dg;
    }
});