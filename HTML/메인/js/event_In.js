const registerButton = document.querySelectorAll('.register-button');

registerButton[0].addEventListener('click', function() {
  alert('이벤트 신청이 완료되었습니다.');
});
registerButton[1].addEventListener('click', function() {
  alert('이벤트 신청이 완료되었습니다.');
});
registerButton[2].addEventListener('click', function() {
  alert('이벤트 신청이 완료되었습니다.');
});



// arow.addEventListener('click', function() {
//   window.scrollBy(0,800);
//   // checkScrollEnd();
// });


// function checkScrollEnd() {
//   var scrollHeight = document.documentElement.scrollHeight; 
//   var windowHeight = window.innerHeight; 
//   var scrollPosition = window.scrollY || window.pageYOffset;

//   if (scrollHeight - windowHeight === scrollPosition) {
//     arow.style.display = 'none'; 
//   }
// }

const arrow = document.querySelector('#arrowAnim')
var isScrolledToBottom = false; // 스크롤이 맨 아래에 도달했는지 여부를 나타내는 변수입니다.

arrow.addEventListener('click', function() {
  if (isScrolledToBottom) {
    window.scrollTo(0, 0); // 화면을 맨 위로 올립니다.
  } else {
    window.scrollBy(0, window.innerHeight); // 화면을 한 화면 크기만큼 아래로 내립니다.
  }
});

window.addEventListener('scroll', function() {
  var scrollHeight = document.documentElement.scrollHeight; 
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY || window.pageYOffset; 

  if (scrollHeight - windowHeight === scrollPosition) {
    isScrolledToBottom = true; 
    arrow.style.transform = 'rotate(90deg)'; 
  } else {
    isScrolledToBottom = false; 
    arrow.style.transform = 'rotate(270deg)'; 
  }
});