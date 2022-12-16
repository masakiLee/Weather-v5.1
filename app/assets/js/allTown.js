let allTownData = [];


axios
  .get(
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-F02B4546-CFAB-419F-B5DD-E14A22866D83"
  )
  .then(function (response) {
    allTownData = response.data.records.locations[0].location;
    info(allTownData);
  })
  .catch(function (error) {
    console.log(error);
  });

const allTownTabPane = document.querySelector(".allTownTabPane");





function info() {
  let newData = allTownData.filter(function (item) {
    return (
      item.locationName === "新北市" ||
      item.locationName === "臺北市" ||
      item.locationName === "基隆市" ||
      item.locationName === "桃園市" ||
      item.locationName === "新竹市" ||
      item.locationName === "新竹縣"
    );
  });

  let str = "";
  newData.forEach(function (item) {
    str += infoCard(item);
  });
  if (allTownTabPane) {
    allTownTabPane.innerHTML = str;
  }
}

info();

function infoCard(item) {
  const locationName = item.locationName;
  const weather = item.weatherElement[6].time[0].elementValue[0].value;
  const umbrella = item.weatherElement[0].time[0].elementValue[0].value;
  const wind = item.weatherElement[13].time[0].elementValue[0].value;
  const windSpeed = item.weatherElement[4].time[0].elementValue[0].value;
  const weatherIcon = item.weatherElement[6].time[0].elementValue[1].value;
  const temperature = item.weatherElement[1].time[0].elementValue[0].value;
  return `
    <a href="./county.html?city=${locationName}" class="city">
      <div class="info">
        <div class="infoCity">
          <p class="name fw-bold text-lg-start text-center mb-3 mb-lg-0">${locationName}</p>
          <p class="state d-none d-lg-block">${weather}</p>
        </div>
        <div class="infoState d-none d-lg-block">
          <p class="umbrella fw-bold"><img src="./assets/images/umbrellaIcon.svg" alt="umbrellaIcon" class="umbrellaIcon">${umbrella} %</p>
          <p class="wind fw-bold"><img src="./assets/images/windIcon.svg" alt="windIcon" class="windIcon">${wind} ${windSpeed}km/h</p>
        </div>
      </div>
      <div class="infoIcon">
        <img src="./assets/images/cityIcon${weatherIcon}.svg" alt="cityWeatherIcon" class="cityWeatherIcon">
        <p class="cityDegrees fw-bold text-primary">${temperature}℃</p>
      </div>
    </a>
  `;
}

const townNav = document.querySelector(".townNav");

// console.log(townNav);
if (townNav) {
  townNav.addEventListener("click", function (e) {
    if (e.target.value === undefined || "") {
      return;
    }
    let newArray = allTownData.filter(function (item) {
      if (e.target.innerHTML === "北部") {
        return (
          item.locationName === "新北市" ||
          item.locationName === "臺北市" ||
          item.locationName === "基隆市" ||
          item.locationName === "桃園市" ||
          item.locationName === "新竹市" ||
          item.locationName === "新竹縣"
        );
      } else if (e.target.innerHTML === "中部") {
        return (
          item.locationName === "苗栗縣" ||
          item.locationName === "臺中市" ||
          item.locationName === "彰化縣" ||
          item.locationName === "南投縣" ||
          item.locationName === "雲林縣"
        );
      } else if (e.target.innerHTML === "南部") {
        return (
          item.locationName === "嘉義市" ||
          item.locationName === "嘉義縣" ||
          item.locationName === "臺南市" ||
          item.locationName === "高雄市" ||
          item.locationName === "屏東縣"
        );
      } else if (e.target.innerHTML === "東部") {
        return (
          item.locationName === "宜蘭縣" ||
          item.locationName === "花蓮縣" ||
          item.locationName === "臺東縣"
        );
      } else if (e.target.innerHTML === "離島") {
        return (
          item.locationName === "澎湖縣" ||
          item.locationName === "金門縣" ||
          item.locationName === "連江縣"
        );
      }
    });

    let str = "";
    newArray.forEach(function (item) {
      str += infoCard(item);
    });
    if (allTownTabPane) {
      allTownTabPane.innerHTML = str;
    }
  });
}
