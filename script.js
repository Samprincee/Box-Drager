window.addEventListener("mousemove", function (details) {
    let box = document.querySelector("#box").getBoundingClientRect();

    let boxloc = gsap.utils.mapRange(0, 
        window.innerWidth, 
        100 + box.width/2,
        window.innerWidth - (100 + box.width/2), 
        details.clientX)

    gsap.to("#box", {
        left: boxloc + "px",
        ease: Power3
    });
});