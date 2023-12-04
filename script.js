var ground = document.querySelector(".scroll-txt");

document.querySelector("#left").addEventListener("click", ()=>{
    ground.scrollLeft+=700;
    document.querySelector('.btn-right').style.display = 'inline';
})

document.querySelector("#right").addEventListener("click", ()=>{
    ground.scrollLeft -= 700;
    if (ground.scrollLeft <= 700) {
        document.querySelector('.btn-right').style.display = 'none';

    }
})

var flag = 0;

document.querySelector(".menu").addEventListener("click", () => {
    flag++;
    document.querySelector(".side-card").style.left = "0px";
    document.querySelector(".opc").style.display = "block";
    document.querySelector(".stop-scrolling").style.overflow = "hidden";
})
document.querySelector(".menu1").addEventListener("click", () => {
    flag++;
    document.querySelector(".side-card").style.left = "0px";
    document.querySelector(".opc").style.display = "block";
    document.querySelector(".stop-scrolling").style.overflow = "hidden";
})

document.querySelector("#s-menu").addEventListener("click", () => {
    document.querySelector(".side-card").style.left = "-800px";
    document.querySelector(".opc").style.display = "none";
    document.querySelector(".stop-scrolling").style.overflow = "auto";
    flag--;

})

document.querySelector(".opc").addEventListener("click", () => {
    if (flag == 1) {
        document.querySelector(".side-card").style.left = "-800px";
        document.querySelector(".opc").style.display = "none";
        document.querySelector(".stop-scrolling").style.overflow = "auto";
        flag--;
    }
})
