// Получаем элемент iframe
const iframe = document.getElementById("filmFrame");

// Функция для обрезки сайта
function trimSite() {
  // Скрываем все элементы, кроме iframe
  const body = document.body;
  for (let child of body.children) {
    if (child !== iframe) {
      child.style.display = "none";
    }
  }

  // Растягиваем iframe на всю страницу
  iframe.style.width = "100vw";
  iframe.style.height = "100vh";
}

// Вызываем функцию при загрузке страницы
window.onload = trimSite;
