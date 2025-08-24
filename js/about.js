const slider = document.getElementById("teamSlider");
const left = document.querySelector(".arrow.left");
const right = document.querySelector(".arrow.right");

let currentIndex = 0;

function getCardWidth() {
  const card = slider.querySelector(".team-member");
  return card ? card.offsetWidth + 20 : 300; // 20 = gap between cards
}

function getVisibleCards() {
  if (window.innerWidth < 600) return 1;
  if (window.innerWidth < 900) return 2;
  return 3;
}

function updateSlider() {
  const cardWidth = getCardWidth();
  const visibleCards = getVisibleCards();
  slider.style.transform = `translateX(-${currentIndex * cardWidth * visibleCards}px)`;
}

function getMaxIndex() {
  const totalCards = slider.children.length;
  const visibleCards = getVisibleCards();
  return Math.ceil(totalCards / visibleCards) - 1;
}

// Next button
right.addEventListener("click", () => {
  const maxIndex = getMaxIndex();
  currentIndex++;
  if (currentIndex > maxIndex) {
    currentIndex = 0; // loop back
  }
  updateSlider();
});

// Previous button
left.addEventListener("click", () => {
  const maxIndex = getMaxIndex();
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = maxIndex; // loop to end
  }
  updateSlider();
});

// Recalculate on resize
window.addEventListener("resize", () => {
  currentIndex = 0; // reset on resize for safety
  updateSlider();
});

updateSlider(); // initial position
