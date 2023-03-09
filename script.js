function toggleNav(){
    const outerGrid =document.querySelector(".outer-grid");
    outerGrid.classList.toggle("outer-grid-expanded");

    const navi =document.querySelector("nav");
    navi.classList.toggle("hide-nav");
}