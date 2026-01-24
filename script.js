// MAACAT Arena Game
// Elegant & Warrior Style JS

document.addEventListener("DOMContentLoaded", () => {
  console.log("⚔️ Welcome to MAACAT Arena");

  // ===== RULE BOOK DOWNLOAD =====
  const ruleBookLink = document.getElementById("ruleBook");

  if (ruleBookLink) {
    ruleBookLink.addEventListener("click", () => {
      console.log("📜 Rule Book downloaded");
    });
  }

  // ===== UPDATES SYSTEM =====
  const updatesBox = document.getElementById("updatesBox");

  // Placeholder updates (you can remove or replace later)
  const updates = [
    "Arena initialized.",
    "Rule Book forged.",
    "First Challenge approaching..."
  ];

  updates.forEach(update => {
    const p = document.createElement("p");
    p.textContent = update;
    updatesBox.appendChild(p);
  });

  // ===== FUTURE EXPANSION HOOK =====
  // Example:
  // addUpdate("New challenger entered the Arena");

  window.addUpdate = function (text) {
    const p = document.createElement("p");
    p.textContent = text;
    updatesBox.appendChild(p);
  };
});
