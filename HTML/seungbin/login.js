// 로그인 폼 이벤트 처리
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // 입력값 가져오기
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // 로그인 로직 수행
  // ...

  // 로그인 성공 시 리다이렉트 또는 다른 동작 수행
  alert('로그인이 성공적으로 처리되었습니다.');
  loginForm.reset();

  // 메인 페이지로 리다이렉션
  window.location.href = 'main.html';

  signupForm.reset();
});