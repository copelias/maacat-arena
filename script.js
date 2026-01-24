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

  window.addUpdate = function (text) {
    const p = document.createElement("p");
    p.textContent = text;
    updatesBox.appendChild(p);
  };

  // ===== NAVBAR LINKS (optional console feedback) =====
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`🌐 Navigating to ${link.textContent}`);
    });
  });

  // ===== FUTURE DROPDOWN HOOK =====
  const networkTitle = document.querySelector(".nav-title");
  if (networkTitle) {
    networkTitle.addEventListener("click", () => {
      console.log("🔽 MAACAT Network clicked (dropdown placeholder)");
      // Here we could toggle a dropdown menu in the future
    });
  }
});
