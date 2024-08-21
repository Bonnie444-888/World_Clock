function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;

  let windhoekElement = document.querySelector("#windhoek");
  let windhoekDateElement = windhoekElement.querySelector(".date");
  let winhoekTimeElement = windhoekElement.querySelector(".time");
  let windhoekTime = moment().tz("Africa/Windhoek");

  windhoekDateElement.innerHTML = windhoekTime.format("MMMM Do YYYY");
  winhoekTimeElement.innerHTML = `${windhoekTime.format(
    "h:mm:ss [<small>]A[</small>]"
  )}`;
}
updateTime();
setInterval(updateTime, 1000);
