const listItem=document.querySelectorAll('.list-item')
const text = document.querySelector(".text");

for(let i=0; i < listItem.length; i++){
    listItem[i].addEventListener('click',() =>{
        for(let j=0; j < listItem.length; j++){
        listItem[j].classList.remove('selected')
        }
        listItem[i].classList.add('selected')
    })
}

// const box = document.querySelector(".box");
// const text = document.querySelector(".text");
// const overlay = document.querySelector(".overlay");
// // 모달창이 열려있는지 여부를 저장하는 전역변수
// let isModalOpen = false;

// function onClick() {
//   if (isModalOpen) {
//     isModalOpen = false;
//     box.classList.remove("modal");
//     text.classList.remove("visible");
//   } else {
//     isModalOpen = true;
//     box.classList.add("modal");
//     setTimeout(() => {
//       text.classList.add("visible");
//     }, 500);
//   }
// }