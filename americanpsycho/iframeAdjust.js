const iframe = document.getElementById("filmFrame");

function adjustIframe() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const isMobile = width <= 768;

  if (isMobile) {
    iframe.style.top = "70%";
    iframe.style.transform = "translateY(-55%)";
  } else {
    iframe.style.top = "195%";
    iframe.style.transform = "translateY(-65%)";
  }
}

window.addEventListener("resize", adjustIframe);
adjustIframe(); // Вызываем функцию при загрузке страницы
