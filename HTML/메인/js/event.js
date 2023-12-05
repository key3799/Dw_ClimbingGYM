 // JavaScript 코드를 작성해주세요
    window.onload = function() {
      var galleryItems = document.getElementsByClassName("gallery-item");
      for (var i = 0; i < galleryItems.length; i++) {
        var galleryItem = galleryItems[i];
        var eventPost = galleryItem.getElementsByClassName("event-post")[0];
        
        galleryItem.onmouseover = function() {
          eventPost.classList.add("hover");
        };
        
        galleryItem.onmouseout = function() {
          eventPost.classList.remove("hover");
        };
      }
    };
