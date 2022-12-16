let layoutURL1 = `${openDataUrl}F-D0047-009?${authorization}`;
let layoutURL2 = `${openDataUrl}F-D0047-085?${authorization}`;
let layoutURL3 = `${openDataUrl}F-D0047-013?${authorization}`;
let layoutURL4 = `${openDataUrl}F-D0047-069?${authorization}`;
let layoutURL5 = `${openDataUrl}F-D0047-001?${authorization}`;
let layoutURL6 = `${openDataUrl}F-D0047-025?${authorization}`;
let layoutURL7 = `${openDataUrl}F-D0047-077?${authorization}`;
let layoutURL8 = `${openDataUrl}F-D0047-065?${authorization}`;
let layoutURL9 = `${openDataUrl}F-D0047-017?${authorization}`;
let layoutURL10 = `${openDataUrl}F-D0047-061?${authorization}`;
let layoutURL11 = `${openDataUrl}F-D0047-021?${authorization}`;
let layoutURL12 = `${openDataUrl}F-D0047-045?${authorization}`;
let layoutURL13 = `${openDataUrl}F-D0047-049?${authorization}`;
let layoutURL14 = `${openDataUrl}F-D0047-005?${authorization}`;
let layoutURL15 = `${openDataUrl}F-D0047-041?${authorization}`;
let layoutURL16 = `${openDataUrl}F-D0047-081?${authorization}`;
let layoutURL17 = `${openDataUrl}F-D0047-037?${authorization}`;
let layoutURL18 = `${openDataUrl}F-D0047-057?${authorization}`;
let layoutURL19 = `${openDataUrl}F-D0047-029?${authorization}`;
let layoutURL20 = `${openDataUrl}F-D0047-033?${authorization}`;
let layoutURL21 = `${openDataUrl}F-D0047-073?${authorization}`;
let layoutURL22 = `${openDataUrl}F-D0047-053?${authorization}`;

const promise1 = axios.get(layoutURL1);
const promise2 = axios.get(layoutURL2);
const promise3 = axios.get(layoutURL3);
const promise4 = axios.get(layoutURL4);
const promise5 = axios.get(layoutURL5);
const promise6 = axios.get(layoutURL6);
const promise7 = axios.get(layoutURL7);
const promise8 = axios.get(layoutURL8);
const promise9 = axios.get(layoutURL9);
const promise10 = axios.get(layoutURL10);
const promise11 = axios.get(layoutURL11);
const promise12 = axios.get(layoutURL12);
const promise13 = axios.get(layoutURL13);
const promise14 = axios.get(layoutURL14);
const promise15 = axios.get(layoutURL15);
const promise16 = axios.get(layoutURL16);
const promise17 = axios.get(layoutURL17);
const promise18 = axios.get(layoutURL18);
const promise19 = axios.get(layoutURL19);
const promise20 = axios.get(layoutURL20);
const promise21 = axios.get(layoutURL21);
const promise22 = axios.get(layoutURL22);

let totalData = [];

Promise.all([
  promise1,
  promise2,
  promise3,
  promise4,
  promise5,
  promise6,
  promise7,
  promise8,
  promise9,
  promise10,
  promise11,
  promise12,
  promise13,
  promise14,
  promise15,
  promise16,
  promise17,
  promise18,
  promise19,
  promise20,
  promise21,
  promise22,
]).then((response) => {
  const List1 = response[0].data.records.locations[0];
  const List2 = response[1].data.records.locations[0];
  const List3 = response[2].data.records.locations[0];
  const List4 = response[3].data.records.locations[0];
  const List5 = response[4].data.records.locations[0];
  const List6 = response[5].data.records.locations[0];
  const List7 = response[6].data.records.locations[0];
  const List8 = response[7].data.records.locations[0];
  const List9 = response[8].data.records.locations[0];
  const List10 = response[9].data.records.locations[0];
  const List11 = response[10].data.records.locations[0];
  const List12 = response[11].data.records.locations[0];
  const List13 = response[12].data.records.locations[0];
  const List14 = response[13].data.records.locations[0];
  const List15 = response[14].data.records.locations[0];
  const List16 = response[15].data.records.locations[0];
  const List17 = response[16].data.records.locations[0];
  const List18 = response[17].data.records.locations[0];
  const List19 = response[18].data.records.locations[0];
  const List20 = response[19].data.records.locations[0];
  const List21 = response[20].data.records.locations[0];
  const List22 = response[21].data.records.locations[0];

  totalData = [
    List1,
    List2,
    List3,
    List4,
    List5,
    List6,
    List7,
    List8,
    List9,
    List10,
    List11,
    List12,
    List13,
    List14,
    List15,
    List16,
    List17,
    List18,
    List19,
    List20,
    List21,
    List22,
  ];
  renderCity(totalData);
  changeCity(totalData);
});

let cityHtml = "";
let number = 1;
let areaHtml = "";

const sideMenuCity = document.getElementById("sideMenuCity");
const sideMenuArea = document.getElementById("sideMenuArea");

function renderCity(obj) {
  totalData.forEach(function (obj) {
    // console.log(obj.locationsName);
    cityHtml += `<option id="${number}">${obj.locationsName}</option>`;
    number++;
  });
  sideMenuCity.innerHTML = cityHtml;
  areaRender(sideMenuCity.value);
}

const sure = document.querySelector(".sure");

function areaRender(value) {
  areaHtml = "";
  let areaObj = totalData.filter(function (obj) {
    return obj.locationsName === value;
  });
  let areaNumber = 1;
  areaObj[0].location.forEach(function (item) {
    areaHtml += `<option id="${areaNumber}" value="${item.locationName}">${item.locationName}</option>`;
    areaNumber++;
  });
  sideMenuArea.innerHTML = areaHtml;
}

function changeCity() {
  sideMenuCity.addEventListener("change", function () {
    // console.log(this.value);
    areaRender(this.value);
  });
}
sideMenuInit();

const sideMenuMemoryCity = document.querySelector(".sideMenuMemoryCity");

let sideMenuData = [];

function sideMenuInit() {
  axios
    .get("https://json-server-vercel-cdsp.vercel.app/collects")
    .then(function (response) {
      sideMenuData = response.data;
      renderData();
    });
}

function renderData() {
  let str = "";
  sideMenuData.forEach(function (item) {
    str += `<li class="sideMenuListMemory"><a href="./index.html" class="memoryCityList py-3">${item.allTown}．${item.city}</a><input class="listDelete" type="button" data-num="${item.id}" value="刪除"></li>`;
  });
  sideMenuMemoryCity.innerHTML = str;
}

sure.addEventListener("click", function (e) {
  let obj = {};
  obj.allTown = sideMenuCity.value;
  obj.city = sideMenuArea.value;
  axios
    .post("https://json-server-vercel-cdsp.vercel.app/collects", obj)
    .then(function (res) {
      // console.log(res);
      sideMenuInit();
    })
    .catch(function (error) {
      console.log(error);
    });
});

sideMenuMemoryCity.addEventListener("click", function (e) {
  e.preventDefault();
  let allTown = e.target.innerHTML.split("．")[0];
  let city = e.target.innerHTML.split("．")[1];
  localStorage.setItem("allTown", allTown);
  localStorage.setItem("city", city);
  let x = localStorage.getItem("city");
  if (x == "undefined") {
    place.innerHTML = `．`;
  } else {
    place.innerHTML = `${allTown}．${city}`;
  }
  newRenderInfo();
});

sideMenuMemoryCity.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.getAttribute("class") !== "listDelete") {
    return;
  }
  let num = e.target.getAttribute("data-num");
  axios
    .delete(`https://json-server-vercel-cdsp.vercel.app/collects/${num}`)
    .then(function (res) {
      // console.log(res);
      alert("刪除成功！");
      indexInit();
      sideMenuInit();
    })
    .catch(function (error) {
      console.log(error);
    });
});

const locationIcon = document.querySelector(".locationIcon");
if (locationIcon) {
  locationIcon.addEventListener("click", function (e) {
    alert("重新定位");
    indexInit();
  });
}
