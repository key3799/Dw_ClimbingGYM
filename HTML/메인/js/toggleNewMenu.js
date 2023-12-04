function toggleNewMenu() {
    var newMenu = document.querySelector(".new-menu");
    newMenu.classList.toggle("show-new-menu");
    const bgImage = document.getElementById("bgImage");

    // 햄버거 버튼과 X 버튼 전환
    var burgerIcon = document.getElementById("burger-icon");
    var closeIcon = document.getElementById("close-icon");
    burgerIcon.classList.toggle("active");
    closeIcon.classList.toggle("active");
    burgerIcon.classList.toggle("inactive");
    closeIcon.classList.toggle("inactive");
    newMenu.classList.toggle("active");
    bgImage.classList.toggle("menu-open");
  }