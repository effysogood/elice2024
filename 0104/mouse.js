const box = document.querySelector(".box");

box.addEventListener("mouseover", (e) => {
  console.log(e);
  console.log(e.offsetX, e.offsetY);
  box.textContent = `x pos - ${e.offsetX} - y pos - ${e.offsetY}`;
});
