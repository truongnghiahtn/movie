var slide = document.querySelectorAll(".c-item");
var bgItem = document.querySelectorAll(".bg-item");
var item = document.querySelectorAll(".item");
var idContentSlide, contentSlide,idBg,bg;
for (var i = 0; i < slide.length; i++) {
    slide[i].onclick = function () {
        idContentSlide = this.getAttribute("data-content");
        idBg = this.getAttribute("data-bg");
        contentSlide = document.getElementById(idContentSlide);
        bg = document.getElementById(idBg);
        for (var j = 0; j < slide.length; j++) {
            item[j].classList.remove("active");
        }
        for (var k = 0; k < bgItem.length; k++) {
            bgItem[k].classList.remove("active");
        }
        contentSlide.classList.add("active");
        bg.classList.add("active");
    }
}


