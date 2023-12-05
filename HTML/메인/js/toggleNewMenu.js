const navBar = document.querySelector(".new-menu");
const menuBtns = document.querySelectorAll(".menu-icon");
const overlay = document.querySelector(".overlay"); 

// 햄버거 버튼에 클릭이벤트 등록
menuBtns.forEach(function(menuBtn){
    menuBtn.addEventListener("click", function(){
        navBar.classList.toggle("open");
    });
});
// overlay 
overlay.addEventListener("click", function(){
    navBar.classList.remove("open");
});