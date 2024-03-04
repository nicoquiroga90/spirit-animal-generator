document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("userName");
  const myButton = document.getElementById("myButton");
  const customAlert = document.getElementById("customAlert");

  function showAlert() {
    const name = userName.value.trim();
    if (name === "") {
      alert("Please write your name");
    } else {
      const animalSpirits = [
        "The Fullmoon Wolf 🐺",
        "The Wise Owl 🦉",
        "The Clever Fox 🦊",
        "The Majestic Eagle 🦅",
        "The Forest Bear 🐻",
        "The Nocturnal Jaguar 🐆",
        "The Enigmatic Lynx 😼",
        "The Shadow Tiger 🐅",
        "The Golden Lion 🦁",
        "The Soaring Hawk 🦅",
        "The Mystic Dolphin 🐬",
        "The Serene Swan 🦢",
        "The Radiant Peacock 🦚",
        "The Graceful Giraffe 🦒",
        "The Playful Panda 🐼",
        "The Stealthy Panther 🐆",
        "The Curious Raccoon 🦝",
        "The Swift Cheetah 🐆",
        "The Regal Elephant 🐘",
        "The Wily Coyote 🐺",
      ];
      let i = Math.floor(Math.random() * animalSpirits.length);
      let userAnimalSpirit = animalSpirits[i];

      customAlert.textContent = `Receive a spirit animal name:\n ${name} - ${userAnimalSpirit}`;
      customAlert.style.display = "block";
    }
  }

  myButton.addEventListener("click", showAlert);

  userName.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      showAlert();
    }
  });
});
