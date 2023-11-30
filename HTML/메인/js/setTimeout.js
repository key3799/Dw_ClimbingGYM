const dataList = document.querySelectorAll("[data-counter]");
console.log(dataList);

for (let i = 0; i < dataList.length; i++) {
  const target = dataList[i].dataset.counter;
  const timerText = dataList[i].querySelector(".timers");
  const step = target / 200;

  let index = 0;
  setInterval(() => {
    if (index < target) {
      // 보폭 맞춰주기.
      index = index + step;
    }
    timerText.textContent = index;
  }, 1);
}
