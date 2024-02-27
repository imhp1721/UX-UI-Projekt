/* --- Forsidens billede karrusel --- */
const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll ("img") [0];
arrowIcons = document.querySelectorAll(".wrapper i"); // For at scrolle, når man trykker på pilene

let isDragStart = false, prevPageX, prevScrollLeft; // Så der ikke dragges automatisk, når man fører musen over
let firstImgWidth = firstImg.clientWidth + 30; //Første billedes width + 30px, så man kan se noget af det næste billede også 
let scrollWidth = carousel.scrollWidth - carousel.clientWidth; //For at få max scrollable width. (scrollWidth returns hele width ink det, der ikke er synligt. clientWidth retunerer det synlige width af et element.) 

/* Hvis hhv karrusellens venstre/højre værdi = 0 gemmer den venstre/højre pil ikon ellers skal den vise det: */


const showHideIcons = () => { //En konstant for at gemme/vise pilene. Kalder senere på denne efter 60ms
    if (carousel.scrollLeft == 0) {
        arrowIcons[0].style.display = "none";
    } else {
        arrowIcons[0].style.display = "block";
    }

    if (carousel.scrollLeft >= scrollWidth) {
        arrowIcons[1].style.display = "none";
    } else {
        arrowIcons[1].style.display = "block";
    }
}

arrowIcons.forEach (icon => {
    icon.addEventListener("click", () => {
        // Når man klikker på venstre ikon reducerer den værdien fra karrusellen og tilføjer, når man trykker på højre
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); //Kalder på showHideIcons efter 60ms
    });
});


const dragStart = (e) => {
    isDragStart = true; // For at man  kan dragge, når mus er holdt nede
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;

}

const dragging = (e) => { // Scroll karrusel ved at trykke med musen
    if(!isDragStart) return;
    e.preventDefault (); //Så den ikke dragger billedet, når man trykker på det
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff; //  Flytter positionen, når man scroller
    carousel.classList.add("dragging"); //Tilføje dragging class til karrusellen, når musen flytter sig
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging"); //Fjerne dragging fra karrusellen, når musen ikke er klikket
}

carousel.addEventListener("mousedown", dragStart); //Dragger billider, når mus er nede
carousel.addEventListener("mousemove", dragging); //Når musen flytter sig skal dragging aktiveres
carousel.addEventListener("mouseup", dragStop); // Stop drag, når musen ikke længere trykkes ned