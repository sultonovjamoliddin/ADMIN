const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".hamburger");
const maincotact = document.querySelector(".main");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
  maincotact.classList.toggle("close-main");
  sidebarToggle.classList.toggle("close-main");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}