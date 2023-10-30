document.querySelectorAll('.box').forEach((box, index) => {
  box.addEventListener('click', () => {
      // You can use window.location.href to navigate to different pages
      window.location.href = `page${index + 1}.html`;
  });
});