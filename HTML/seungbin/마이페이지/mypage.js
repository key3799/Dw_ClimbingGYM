function openProfileModal() {
    var modal = document.getElementById("profile-modal");
    modal.style.display = "block";
}

function closeProfileModal() {
    var modal = document.getElementById("profile-modal");
    modal.style.display = "none";
}

function updateProfile() {
    // 사용자가 입력한 값 가져오기
    var name = document.getElementById('name').value;
    var introduction = document.getElementById('introduction').value;
    var residence = document.getElementById('residence').value;
    var favoriteGym = document.getElementById('favoriteGym').value;

    var imageFile = document.getElementById('profile-image').files[0];

    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var profileImage = document.getElementById('profile-image-preview');
            profileImage.src = event.target.result;
        };
        reader.readAsDataURL(imageFile);
    }

    // 프로필 정보 업데이트
    document.getElementById('profile-name').textContent = name;
    document.getElementById('profile-introduction').textContent = introduction;
    document.getElementById('profile-residence').textContent = residence;
    document.getElementById('profile-favoriteGym').textContent = favoriteGym;

    // 모달 창 닫기
    closeProfileModal();
}

// 필요한 요소들을 가져옵니다.
// 필요한 요소들을 가져옵니다.
var chatInput = document.getElementById('chat-input');
var sendButton = document.getElementById('send-button');
var chatMessages = document.getElementById('chat-messages');

// 작성완료 버튼 클릭 이벤트 처리 함수
function sendMessage() {
    var message = chatInput.value; // 입력된 값 가져오기

    if (message.trim() !== '') { // 입력값이 공백이 아닌 경우에만 처리
        var listItem = document.createElement('li'); // 새로운 <li> 요소 생성
        listItem.textContent = message; // 입력값을 <li> 요소의 텍스트로 설정

        // 삭제 버튼 생성
        var deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', function() {
            listItem.remove(); // <li> 요소 삭제
        });

        // <li> 요소에 삭제 버튼 추가
        listItem.appendChild(deleteButton);

        // <li> 요소를 채팅 메시지 목록에 추가
        chatMessages.appendChild(listItem);

        // 입력 필드 초기화
        chatInput.value = '';
    }
}

// 작성완료 버튼 클릭 시 이벤트 처리
sendButton.addEventListener('click', sendMessage);

// 엔터 키 이벤트 처리
chatInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) { // 엔터 키를 눌렀을 때
        event.preventDefault(); // 기본 동작(폼 제출 등) 방지
        sendMessage(); // 작성완료 버튼 클릭 이벤트 호출
    }
});


var addExerciseButton = document.getElementById('addExercise');
var exerciseNameInput = document.getElementById('exerciseName');
var exerciseDurationInput = document.getElementById('exerciseDuration');
var exerciseList = document.getElementById('listItems');
var progressBar = document.getElementById('progress');
var exerciseGoalButton = document.getElementById('Exercisegoal');
var exerciseGoalDisplay = document.getElementById('exerciseGoalDisplay');

var goalTime = 0; 


function addExercise() {
    var exerciseName = exerciseNameInput.value;
    var exerciseDuration = parseInt(exerciseDurationInput.value);

    if (exerciseName.trim() === '') {
        alert('종목을 입력하세요.');
        return;
    }

    if (isNaN(exerciseDuration) || exerciseDuration <= 0) {
        alert('유효한 운동 시간을 입력하세요.');
        return;
    }


    var listItem = document.createElement('li');
    listItem.textContent = exerciseName + ' - ' + exerciseDuration + '분';
    exerciseList.appendChild(listItem);

    var progressPercentage = (exerciseDuration / goalTime) * 100;
    progressBar.style.width = Math.min(progressPercentage, 100) + '%';


  // 게이지가 100%인 경우 "축하합니다" 메시지를 표시합니다.
  if (progressPercentage >= 100) {
    alert('축하합니다! 오늘의 목표 달성!');
}
}

function addExercisegoal() {
    var goalTimeInput = prompt('운동 목표 시간을 2번 입력해주세요 (분)');

    if (goalTimeInput === null || goalTimeInput.trim() === '') {
        return;
    }

    var goalTimeValue = parseInt(goalTimeInput);

    if (isNaN(goalTimeValue) || goalTimeValue <= 0) {
        alert('유효한 목표 시간을 입력하세요.');
        return;
    }

    goalTime = goalTimeValue;
    exerciseGoalDisplay.textContent = goalTime + '분';
    progressBar.style.width = '0%';
}



addExerciseButton.addEventListener('click', addExercise);


exerciseGoalButton.addEventListener('click', addExercisegoal);

const btn = document.querySelector(".btn")

btn.addEventListener('click', function(){
    if(confirm("정말로 탈퇴하시겠습니까?")
    ){alert("탈퇴가 완료되었습니다!")
}
    })