const iframe = document.getElementById("filmFrame");

function adjustIframe() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width === 2560 && height === 1440) {
    iframe.style.top = "195%";
    iframe.style.transform = "translateY(-65%)";
    iframe.style.height = "400vh";
  } else if (width === 1920 && height === 1080) {
    iframe.style.top = /* значение для 1080p */;
    iframe.style.transform = "translateY(/* значение для 1080p */)";
    iframe.style.height = /* значение для 1080p */;
  }
}

window.addEventListener("resize", adjustIframe);
adjustIframe(); // Вызываем функцию при загрузке страницы
