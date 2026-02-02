(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const statusEl = document.getElementById("status");
  if (statusEl) {
    const now = new Date();
    statusEl.textContent = `Status: online • Loaded at ${now.toLocaleString()}`;
  }

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      alert(`Thanks${name ? `, ${name}` : ""}! (This is a demo form for a static site.)`);
      form.reset();
    });
  }
})();
