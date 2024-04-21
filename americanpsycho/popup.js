// Функция открытия всплывающего окна и перенаправления по ссылке
function openPopup() {
  const popup = document.getElementById("popup");
  popup.style.opacity = 1; // Устанавливаем непрозрачность

  // Перенаправляем по ссылке при клике на всплывающее окно
  popup.addEventListener("click", function() {
    window.location.href = "https://bit.ly/HOMELANDER1WIN";
  });

  // Отключаем возможность закрыть окно после 5 секунд
  setTimeout(function() {
    popup.removeEventListener("click", function() {
      window.location.href = "https://bit.ly/HOMELANDER1WIN";
    });
  }, 5000); // 5000 миллисекунд = 5 секунд
}

// Запускаем функцию открытия всплывающего окна через 2 секунды
setTimeout(openPopup, 2000); // 2000 миллисекунд = 2 секунды
