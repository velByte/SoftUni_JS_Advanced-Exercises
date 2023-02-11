function notify(message) {
  const notification = document.getElementById('notification');
  notification.textContent = message;
  notification.style.display = 'block';
  notification.addEventListener('click', (e) => {
    notification.style.display = 'none';
  });
}