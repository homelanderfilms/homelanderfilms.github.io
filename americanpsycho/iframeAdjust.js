const iframe = document.getElementById("iframe");

function adjustIframe() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  if (width === 2560 && height === 1440) {
    iframe.style.top = "195%";
    iframe.style.transform = "translateY(-65%)";
    iframe.style.height = "400vh";
  } else if (width === 1920 && height === 1080) {
    iframe.style.top = 180%;
    iframe.style.transform = "translateY(-57%)";
    iframe.style.height = "400vh";
  }
}

window.addEventListener("resize", adjustIframe);
adjustIframe(); // Вызываем функцию при загрузке страницы
