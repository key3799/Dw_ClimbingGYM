// 신청하기 버튼 클릭 이벤트 처리
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

  // 모든 event-details 섹션 요소를 가져옵니다.
  const eventDetails = document.querySelectorAll('.event-details');

  // 각 event-details 섹션 요소에 대해 클릭 이벤트를 등록합니다.
  eventDetails.forEach((details) => {
    details.addEventListener('click', () => {
      // 모든 event-details 섹션 요소를 숨깁니다.
      eventDetails.forEach((item) => {
        item.style.display = 'none';
      });

      // 클릭한 event-details 섹션 요소만 보이도록 합니다.
      details.style.display = 'block';
    });
  });