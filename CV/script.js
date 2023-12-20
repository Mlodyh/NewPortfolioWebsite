function updateCounter() {
  const startDate = new Date("2023-06-10");
  const currentDate = new Date();
  const daysSinceStart = Math.floor(
    (currentDate - startDate) / (1000 * 60 * 60 * 24)
  );
  document.getElementById(
    "counter"
  ).textContent = `${daysSinceStart} days ago.`;
}

updateCounter();

setInterval(updateCounter, 86400000);

// section

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav a, .hireme a");

  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });
});
