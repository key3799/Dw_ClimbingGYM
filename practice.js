document.querySelectorAll('.tabItem').forEach(function(tabItem) {
  tabItem.addEventListener('click', function() {
    const tabId = this.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);

    // 다른 탭의 내용을 숨기기 위해 모든 탭에 active 클래스 제거
    document.querySelectorAll('.tabContent').forEach(function(content) {
      content.classList.remove('active');
    });

    // 선택한 탭의 내용에 active 클래스 추가 또는 제거
    tabContent.classList.toggle('active');
  });
});
