const noBtn = document.getElementById("noButton");
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

function getRandomPosition() {
  const maxWidth = windowWidth - noBtn.offsetWidth;
  const maxHeight = windowHeight - noBtn.offsetHeight;
  const newLeft = Math.random() * maxWidth;
  const newTop = Math.random() * maxHeight;
  return { left: newLeft, top: newTop };
}

noBtn.addEventListener("mouseover", () => {
  const newPosition = getRandomPosition();
  noBtn.style.left = `${newPosition.left}px`;
  noBtn.style.top = `${newPosition.top}px`;
});

function nextPage() {
  window.location.href = "yes.html";
}

// function moveButton() {
//   const x =
//     Math.random() *
//     (window.innerWidth - document.getElementById("noButton").offsetWidth);
//   const y =
//     Math.random() *
//     (window.innerHeight - document.getElementById("noButton").offsetHeight);
//   document.getElementById("noButton").style.left = `${x}px`;
//   document.getElementById("noButton").style.top = `${y}px`;
// }
