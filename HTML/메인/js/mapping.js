// 1. 각 list-item에 id부여해서 queryselectorAll로 호출
// 각 ID에 onclick function 할당해서 .classList.toggle로 list-content display :none에서 block으로 변경
// 그러고 list-content에도 id 주고 onclick function줘서
// Id 부여한 map 호출?

// 정말 하기 싫다 몇번 째 가는거지 진짜
const locationTabs = document.querySelectorAll(".location li");
const locationTab = document.querySelectorAll("#locationWrapper > div");
const maps = document.querySelectorAll(".maps .map");

locationTab.forEach(function (desc) {
  desc.style.display = "none";
});

maps.forEach(function (map) {
  map.style.display = "none";
});

locationTabs.forEach(function (click, index) {
  click.addEventListener("click", function () {
    locationTab.forEach(function (content) {
      content.style.display = "none";
    });
    locationTab[index].style.display = "block";
  });
});

const tabDivs = document.querySelectorAll("#locationWrapper > div > div");

tabDivs.forEach(function (tabDivs, index) {
  tabDivs.addEventListener("click", function () {
    maps.forEach(function (map) {
      map.style.display = "none";
    });
    maps[index].style.display = "block";
  });
});
console.log(maps);
// 2. onclick this 이용해서 눌렀을때 각각의 list-content, map
// 불러오기..

// 3. 선생님한테 울면서 해달라고 하기.
// 4. 나는 모르겠으니 조퇴하기
