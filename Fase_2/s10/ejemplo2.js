const title = document.getElementById('title');

const input = document.getElementById('text');
input.addEventListener("input", function(event) {
    title.textContent = event.target.value;
  });