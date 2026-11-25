const CONTACT_EMAIL = "clevanilson.contato@gmail.com";

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

document.querySelector("#current-year").textContent = new Date().getFullYear();

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  navigation.classList.toggle("is-open", !isExpanded);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    menuToggle.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const sender = formData.get("email").trim();
  const message = formData.get("message").trim();
  const subject = encodeURIComponent(`Mensagem do site de ${name}`);
  const body = encodeURIComponent(`${message}\n\nDe: ${name}\nE-mail: ${sender}`);

  formStatus.textContent = "Abrindo seu aplicativo de e-mail...";
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
