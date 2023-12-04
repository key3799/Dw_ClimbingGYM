const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // 입력값 가져오기
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // 비밀번호 일치 여부 확인
  if (password !== confirmPassword) {
    alert('비밀번호가 일치하지 않습니다.');
    return;
  }

  // 회원가입 로직 수행
  // ...

  // 가입 완료 메시지 표시
  alert('회원가입이 완료되었습니다.');

  // 메인 페이지로 리다이렉션
  window.location.href = 'main.html';

  signupForm.reset();
});