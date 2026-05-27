const heartLayer = document.querySelector(".heart-rain");
const typewriter = document.getElementById("typewriter");

const symbols = ["♥", "❤", "💕", "💖", "💗"];
const lines = [
  "May God bless you 🌿",
  "And give u many happiness 💞",
  "Just saying... you're pretty awesome 💗",
  "Sending good vibes and maybe a wink 😉",
  "Hope u have a great day today ❤️🤭"
];

for (let index = 0; index < 54; index += 1) {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = symbols[index % symbols.length];
  heart.style.setProperty("--left", `${Math.random() * 100}%`);
  heart.style.setProperty("--size", `${14 + Math.random() * 28}px`);
  heart.style.setProperty("--duration", `${5.8 + Math.random() * 6.8}s`);
  heart.style.setProperty("--delay", `${Math.random() * -10}s`);
  heart.style.setProperty("--drift", `${-90 + Math.random() * 180}px`);
  heartLayer.appendChild(heart);
}

const text = lines.join("\n");
let cursor = 0;

function typeNextCharacter() {
  typewriter.textContent = text.slice(0, cursor);
  cursor += 1;

  if (cursor <= text.length) {
    const current = text[cursor - 2] || "";
    const delay = current === "\n" ? 360 : 42 + Math.random() * 32;
    window.setTimeout(typeNextCharacter, delay);
  }
}

window.setTimeout(typeNextCharacter, 1500);
