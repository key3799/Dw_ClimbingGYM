document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.list-item');
  
    accordionItems.forEach(item => {
      const header = item.querySelector('.item-name');
      const content = item.querySelector('.video');
  
      header.addEventListener('click', () => {
        item.classList.toggle('selected'); 
        content.style.display = item.classList.contains('selected') ? 'block' : 'none';
      });
    });
  });

  // JavaScript 코드
document.addEventListener('DOMContentLoaded', function() {
    const tipItem = document.querySelector('.click');
  
    tipItem.addEventListener('click', function() {
      const content = document.querySelector('.list-item.selected .content');
  
      if (content.style.display === 'block') {
        content.style.display = 'none';
      } else {
        content.style.display = 'block';
      }
    });
  });
  