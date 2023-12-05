// 버튼 요소를 선택합니다.
const publishButton = document.querySelector('button');

// 버튼 클릭 이벤트 리스너를 추가합니다.
publishButton.addEventListener('click', () => {
  // 제목, 이름, 비밀번호, 내용을 입력하는 요소들을 선택합니다.
  const titleInput = document.querySelector('#post-title input[type="text"]');
  const nameInput = document.querySelector('#user input[type="text"]');
  const passwordInput = document.querySelector('#user input[type="password"]');
  const contentTextarea = document.querySelector('.body');
  const fileInput = document.querySelector('.picture');

  // 입력된 값들을 가져옵니다.
  const title = titleInput.value;
  const name = nameInput.value;
  const password = passwordInput.value;
  const content = contentTextarea.value;

  // 입력된 이름과 비밀번호가 빈 값인지 확인합니다.
  if (name.trim() === '' || password.trim() === '') {
    alert('이름과 비밀번호를 입력해주세요.');
    return;
  }
  if (title.trim() ==='' || content.trim() ==='') {
    alert('제목과 내용을 확인해주세요');
    return;
  }

  const file = fileInput.files[0];
  if(file){
    if(!file.type.startsWith('image/')){
        alert('이미지 파일만 업로드할 수 있습니다')
        return;
    }
  }

  // 입력된 값들을 서버로 보내는 AJAX 또는 기타 로직을 작성합니다.
  // 이 부분은 실제 서버와의 통신이 필요하므로 자세한 구현은 생략하겠습니다.

  // 발행이 완료되었다는 메시지를 출력합니다.
  alert('글이 발행되었습니다.');

  // 입력 필드를 초기화합니다.
  titleInput.value = '';
  nameInput.value = '';
  passwordInput.value = '';
  contentTextarea.value = '';
  fileInput.value = null;
});


// // 버튼 클릭 이벤트 리스너를 추가합니다.
// publishButton.addEventListener('click', () => {
//   // 제목, 이름, 비밀번호, 내용을 입력하는 요소들을 선택합니다.
//   const titleInput = document.querySelector('#post-title input[type="text"]');
//   const nameInput = document.querySelector('#user input[type="text"]');
//   const passwordInput = document.querySelector('#user input[type="password"]');
//   const contentTextarea = document.querySelector('.body');

//   // 입력된 값들을 가져옵니다.
//   const title = titleInput.value;
//   const name = nameInput.value;
//   const password = passwordInput.value;
//   const content = contentTextarea.value;

//   // 입력된 이름과 비밀번호가 빈 값인지 확인합니다.
//   if (name.trim() === '' || password.trim() === '') {
//     alert('이름과 비밀번호를 입력해주세요.');
//     return;
//   }

//   // AJAX를 사용하여 서버에 데이터를 전송합니다.
//   const xhr = new XMLHttpRequest();
//   xhr.open('POST', '/api/post', true);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         // 발행이 완료되었다는 메시지를 출력합니다.
//         alert('글이 게시판에 올라갔습니다.');

//         // 입력 필드를 초기화합니다.
//         titleInput.value = '';
//         nameInput.value = '';
//         passwordInput.value = '';
//         contentTextarea.value = '';
//       } else {
//         // 서버로부터 오류 응답을 받았을 경우 처리합니다.
//         alert('글 게시 중 오류가 발생했습니다.');
//       }
//     }
//   };
//   const data = JSON.stringify({ title, name, password, content });
//   xhr.send(data);
// });