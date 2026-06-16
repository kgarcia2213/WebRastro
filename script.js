const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const navLinks = siteNav ? siteNav.querySelectorAll("a") : [];

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    siteNav.classList.toggle("open");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
    });
  });
}

document.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.classList.contains("contact-form")) {
    event.preventDefault();
    const button = form.querySelector("button[type='submit']");
    if (!button) return;

    const originalText = button.textContent;
    button.textContent = "Solicitud enviada ✅";
    button.disabled = true;

    setTimeout(() => {
      form.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 1700);
  }
});

// WhatsApp widget: cierre protegido + persistencia en sesión
(() => {
  const widgetCard = document.querySelector(".whatsapp-widget-card");
  const closeButton = document.querySelector(".whatsapp-widget-close");
  const hiddenClass = "is-hidden";
  const storageKey = "whatsappWidgetClosed";

  if (!widgetCard) return;

  if (sessionStorage.getItem(storageKey) === "1") {
    widgetCard.classList.add(hiddenClass);
  }

  if (!closeButton) return;

  closeButton.addEventListener("click", () => {
    widgetCard.classList.add(hiddenClass);
    sessionStorage.setItem(storageKey, "1");
  });
})();
