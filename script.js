document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!expanded));

    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.right = "22px";
      nav.style.top = "64px";
      nav.style.background = "rgba(18,18,20,.98)";
      nav.style.border = "1px solid rgba(255,255,255,.10)";
      nav.style.padding = "12px";
      nav.style.borderRadius = "16px";
      nav.style.gap = "12px";
      nav.style.minWidth = "160px";
    }
  });
}
