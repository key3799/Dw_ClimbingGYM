// 1. 각 list-item에 id부여해서 queryselectorAll로 호출
// 각 ID에 onclick function 할당해서 .classList.toggle로 list-content display :none에서 block으로 변경
// 그러고 list-content에도 id 주고 onclick function줘서 
// Id 부여한 map 호출?
const hiddenTab = document.querySelector("#hiddenTab");
document.querySelectorAll('li.seoul, li.gyungki, li.choongchung, li.jeonla, li.gyeongsang').forEach(function(li){
    li.addEventListener("click", function(event){
        hiddenTabs();
    })
})

function hiddenTabs(){
    if(hiddenTab.style.display === 'none' || hiddenTab.style.display === ''){
        hiddenTab.style.display = 'block';
    }else{
        hiddenTab.style.display = 'none';
    }
}


// 2. onclick this 이용해서 눌렀을때 각각의 list-content, map
// 불러오기..

// 3. 선생님한테 울면서 해달라고 하기.
// 4. 나는 모르겠으니 조퇴하기
