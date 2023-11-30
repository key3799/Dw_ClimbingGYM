window.onload = function() {
      // 지점별 별점 데이터
      var locations = [
        { name: "지점 A", rating: 4 },
        { name: "지점 B", rating: 5 },
        { name: "지점 C", rating: 3 },
        // ...지점 데이터 추가
      ];
      
      // 별점 순위 표시
      var rankings = document.getElementById("rankings");
      locations.sort(function(a, b) {
        return b.rating - a.rating;
      });
      for (var i = 0; i < locations.length; i++) {
        var location = locations[i];
        var item = document.createElement("div");
        item.classList.add("ranking-item");
        item.innerHTML = '<img src="star.png" alt="별점">' + location.name;
        rankings.appendChild(item);
      }
      
      // 회원 후기 표시
      var reviews = document.getElementById("reviews");
      var reviewData = [
        { name: "사용자1", review: "좋은 장소입니다." },
        { name: "사용자2", review: "추천합니다!" },
        { name: "사용자3", review: "다음에도 방문할게요." },
        // ...후기 데이터 추가
      ];
      for (var j = 0; j < reviewData.length; j++) {
        var review = reviewData[j];
        var reviewElement = document.createElement("p");
        reviewElement.classList.add("review");
        reviewElement.textContent = review.name + ": " + review.review;
        reviews.appendChild(reviewElement);
      }
    };