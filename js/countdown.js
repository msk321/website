const countDownDate = new Date("October 19, 2024 09:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown-timer").innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-timer").innerHTML = "The Error 404 Hackfest has officially ended. Thank you to all participants for your incredible projects. See you next year!";
  }
}, 1000);
