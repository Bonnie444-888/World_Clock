function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }

  let windhoekElement = document.querySelector("#windhoek");
  if (windhoekElement) {
    let windhoekDateElement = windhoekElement.querySelector(".date");
    let winhoekTimeElement = windhoekElement.querySelector(".time");
    let windhoekTime = moment().tz("Africa/Windhoek");

    windhoekDateElement.innerHTML = windhoekTime.format("MMMM Do YYYY");
    winhoekTimeElement.innerHTML = `${windhoekTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
  let buenosElement = document.querySelector("#buenos-aires");
  if (buenosElement) {
    let buenosDateElement = buenosElement.querySelector(".date");
    let buenosTimeElement = buenosElement.querySelector(".time");
    let buenosTime = moment().tz("America/Argentina/Buenos_Aires");

    buenosDateElement.innerHTML = buenosTime.format("MMMM Do YYYY");
    buenosTimeElement.innerHTML = `${buenosTime.format(
      "h:mm:ss [<small>]A[</small>]"
    )}`;
  }
}
updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}
            </h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )}</div>
        </div>
        <a href="/">Back to homepage</a>`;
}

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
