document.addEventListener("DOMContentLoaded", () => {
  const slackUserName = document.querySelector('[data-testid="slackUserName"]');
  const currentDayOfTheWeek = document.querySelector(
    '[data-testid="currentDayOfTheWeek"]'
  );
  const currentUTCTime = document.querySelector(
    '[data-testid="currentUTCTime"]'
  );
  const img = document.querySelector('[data-testid="slackDisplayImage"]');
  const myTrack = document.querySelector('[data-testid="myTrack"]');
  const githubUrl = document.querySelector('[data-testid="githubURL"]');

  img.src = "/asset/mypic.jpeg";

  const updateDayOfTheWeek = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const today = new Date();
    const dayIndex = today.getUTCDay();
    const dayOfWeek = daysOfWeek[dayIndex];
    currentDayOfTheWeek.textContent = dayOfWeek;
    slackUserName.textContent = "ebuka";
  };

  const updateUTCTime = () => {
    const now = new Date();
    const utcTime = now.toISOString();
    currentUTCTime.textContent = utcTime;
  };

  updateDayOfTheWeek();
  updateUTCTime();

  githubUrl.href = "https://github.com/whitechapel007";

  myTrack.textContent = "Frontend"; // Change this to your actual track
});
