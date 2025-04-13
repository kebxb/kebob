let clickCount = 0;
let kebabsPerClick = 1; // Default kebab per click
let upgradeCost = 10; // Cost of first upgrade
let upgradeLevel = 0; // Track the level of upgrades

const kebab = document.getElementById("kebab-image");
const popup = document.getElementById("popup");
const countText = document.getElementById("click-count");
const kebabsPerClickText = document.getElementById("kebabs-per-click"); // Reference to kebabs per click text
const buyUpgradeButton = document.getElementById("buy-upgrade");
const upgradeCostText = document.getElementById("upgrade-cost");

kebab.addEventListener("click", (event) => {
  clickCount += kebabsPerClick; // Increase by kebabsPerClick value
  countText.textContent = "Kebabs: " + clickCount;

  // Update kebabs per click display
  kebabsPerClickText.textContent = "Kebabs per Click: " + kebabsPerClick;

  // Get the position of the click relative to the kebab container (click area)
  const rect = kebab.getBoundingClientRect();
  const xPos = event.clientX - rect.left;
  const yPos = event.clientY - rect.top;

  // Show the popup with a smaller kebab image
  const kebabImage = document.createElement('img');
  kebabImage.src = "images/kebab.png"; 
  kebabImage.alt = "Kebab";
  kebabImage.style.width = "30px";
  kebabImage.style.height = "auto";
  kebabImage.style.opacity = "0.5";
  kebabImage.style.filter = "drop-shadow(0 0 15px white)";

  popup.innerHTML = '';
  popup.appendChild(kebabImage);
  popup.style.left = `${xPos + 5}px`;
  popup.style.top = `${yPos + 5}px`;

  popup.style.animation = "none";
  popup.offsetHeight;
  popup.style.animation = "popup-animation 1s ease-out";

  // Add a stronger glow effect on the kebab image for a click
  kebab.style.filter = "drop-shadow(0 0 50px rgb(255, 255, 255))";

  setTimeout(() => {
    kebab.style.filter = "drop-shadow(0 0 15px rgb(157, 216, 216))";
  }, 150);
});

// Handle the upgrade button click
buyUpgradeButton.addEventListener("click", () => {
  if (clickCount >= upgradeCost) {
    clickCount -= upgradeCost; // Deduct the cost
    upgradeLevel++; // Increase upgrade level
    kebabsPerClick++; // Increase the number of kebabs per click
    upgradeCost = Math.floor(upgradeCost * 1.5); // Increase the upgrade cost for the next level
    countText.textContent = "Kebabs: " + clickCount;

    // Update kebabs per click display
    kebabsPerClickText.textContent = "Kebabs per Click: " + kebabsPerClick;

    // Update upgrade cost display
    upgradeCostText.textContent = "Upgrade Cost: " + upgradeCost + " Kebabs";
  } else {
    alert("You don't have enough kebabs for this upgrade!");
  }
});
