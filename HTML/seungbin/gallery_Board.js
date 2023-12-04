
var addModalButton = document.getElementById("add-modal");
addModalButton.addEventListener("click", function() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
});

var closeButton = document.getElementsByClassName("close")[0];
closeButton.addEventListener("click", function() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
});

var addImageButton = document.getElementById("add-image");
addImageButton.addEventListener("click", function() {
  var imageInput = document.getElementById("image-input");
  var imageNameInput = document.getElementById("image-name");
  var uploadDayInput = document.getElementById("upload-day");
  
  var file = imageInput.files[0];
  var imageName = imageNameInput.value;
  var uploadDay = uploadDayInput.value;

  var reader = new FileReader();
  reader.onload = function(e) {
    var imgBox = document.createElement("div");
    imgBox.className = "img-box";

    var figure = document.createElement("figure");

    var img = document.createElement("img");
    img.src = e.target.result;
    img.alt = "동호회사진";

    var explan = document.createElement("div");
    explan.className = "explan";

    var title = document.createElement("p");
    title.id = "cm-title";
    title.textContent = imageName;

    var day = document.createElement("p");
    day.id = "cm-day";
    day.textContent = uploadDay;

    explan.appendChild(title);
    explan.appendChild(day);

    figure.appendChild(img);
    figure.appendChild(explan);

    imgBox.appendChild(figure);

    var imgContent = document.getElementsByClassName("img-content")[0];
    imgContent.appendChild(imgBox);

    var modal = document.getElementById("modal");
    modal.style.display = "none";

    // 입력 필드 초기화
    imageInput.value = "";
    imageNameInput.value = "";
    uploadDayInput.value = "";
  };
  reader.readAsDataURL(file);
});