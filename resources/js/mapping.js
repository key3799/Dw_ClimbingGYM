document.querySelectorAll(".list-item").forEach(function(listItem){
    listItem.addEventListener("click", function(){
        const tabId = this.getAttribute("data-tab");
        const listContent = document.getElementById("tabId");
      
      
        document.querySelectorAll(".list-content").forEach(function(content){
            content.classList.remove("active");
        })
        
        listContent.classList.toggle("active");
    })
});