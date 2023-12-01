const findPasswordForm = document.getElementById('find-password-form');
const btn = document.querySelector(".btn-find-password")

findPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();})


  btn.addEventListener('click', function() {
    const emailInput = document.querySelector('.form-group input[type="email"]');
    const email = emailInput.value;
    if (email.trim() === '') {
        alert('이메일을 작성해주세요');
        return;
      }
    alert("이메일로 비밀번호를 보내드렸어요!")
    emailInput.value=""
  });

