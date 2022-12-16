function init() {
  const params = new URLSearchParams(document.location.search);
  const city = params.get("city");

  //1.先看url的city是多少 再跑下面的 if else if

  let url = "";

  if (city === "新竹縣") {
    url = `${openDataUrl}F-D0047-011?${authorization}`;
    allRender(url);
  } else if (city === "金門縣") {
    url = `${openDataUrl}F-D0047-087?${authorization}`;
    allRender(url);
  } else if (city === "苗栗縣") {
    url = `${openDataUrl}F-D0047-015?${authorization}`;
    allRender(url);
  } else if (city === "新北市") {
    url = `${openDataUrl}F-D0047-071?${authorization}`;
    allRender(url);
  } else if (city === "宜蘭縣") {
    url = `${openDataUrl}F-D0047-003?${authorization}`;
    allRender(url);
  } else if (city === "雲林縣") {
    url = `${openDataUrl}F-D0047-027?${authorization}`;
    allRender(url);
  } else if (city === "臺南市") {
    url = `${openDataUrl}F-D0047-079?${authorization}`;
    allRender(url);
  } else if (city === "高雄市") {
    url = `${openDataUrl}F-D0047-067?${authorization}`;
    allRender(url);
  } else if (city === "彰化縣") {
    url = `${openDataUrl}F-D0047-019?${authorization}`;
    allRender(url);
  } else if (city === "臺北市") {
    url = `${openDataUrl}F-D0047-063?${authorization}`;
    allRender(url);
  } else if (city === "南投縣") {
    url = `${openDataUrl}F-D0047-023?${authorization}`;
    allRender(url);
  } else if (city === "澎湖縣") {
    url = `${openDataUrl}F-D0047-047?${authorization}`;
    allRender(url);
  } else if (city === "基隆市") {
    url = `${openDataUrl}F-D0047-051?${authorization}`;
    allRender(url);
  } else if (city === "桃園市") {
    url = `${openDataUrl}F-D0047-007?${authorization}`;
    allRender(url);
  } else if (city === "花蓮縣") {
    url = `${openDataUrl}F-D0047-043?${authorization}`;
    allRender(url);
  } else if (city === "連江縣") {
    url = `${openDataUrl}F-D0047-083?${authorization}`;
    allRender(url);
  } else if (city === "臺東縣") {
    url = `${openDataUrl}F-D0047-039?${authorization}`;
    allRender(url);
  } else if (city === "嘉義市") {
    url = `${openDataUrl}F-D0047-059?${authorization}`;
    allRender(url);
  } else if (city === "嘉義縣") {
    url = `${openDataUrl}F-D0047-031?${authorization}`;
    allRender(url);
  } else if (city === "屏東縣") {
    url = `${openDataUrl}F-D0047-035?${authorization}`;
    allRender(url);
  } else if (city === "臺中市") {
    url = `${openDataUrl}F-D0047-075?${authorization}`;
    allRender(url);
  } else if (city === "新竹市") {
    url = `${openDataUrl}F-D0047-055?${authorization}`;
    allRender(url);
  }
}
init();

const countyLocationsName = document.querySelector(".countyLocationsName");
const areaSelect = document.querySelector(".areaSelect");
const countyNav = document.querySelector(".countyNav");
const tabPean = document.querySelector(".tabPean");
//2.再把 url 傳進axios

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth() + 1;
let dates = date.getDate();
let hour = date.getHours();
hour = hour < 10 ? "0" + hour : hour;

let areaData = [];

function allRender(url) {
  axios
    .get(url)
    .then((res) => {
      areaData = res.data.records.locations[0];
      areaOption(areaData);
    })
    .catch((error) => {
      console.log(error);
    });
}

function areaOption(item) {
  //縣市名
  let str = "";
  str += `縣市預報 - ${item.locationsName}`;
  countyLocationsName.innerHTML = str;

  //下拉選單
  const area = item.location;
  let areaItem = "";
  let have = localStorage.getItem("selected");

  area.forEach(function (item) {
    if (have === item.locationName) {
      //如果從首頁跳進來 下拉選單會被選取
      areaItem += `<option value="${item.locationName}"selected="selected">${item.locationName} </option>`;
      areaSelect.innerHTML = areaItem;
    } else {
      //從總覽頁面進入
      areaItem += `<option value="${item.locationName}">${item.locationName} </option>`;
      areaSelect.innerHTML = areaItem;
    }
  });
  if (have === item.locationName) {
    jump(area);
  } else {
    round(area);
  }
}

function jump(data) {
  let have = localStorage.getItem("selected");
  let anw = data.filter(function (item) {
    return have === item.locationName;
  });
  filterNavData(anw);
  filterMainData(anw);
}

function round(data) {
  let initData = data.filter(function (item, index) {
    return areaSelect.value === item.locationName;
  });
  filterNavData(initData);
  filterMainData(initData);
}

if (areaSelect) {
  areaSelect.addEventListener("change", function (e) {
    let a = areaData.location;
    let anw = a.filter(function (item) {
      return e.target.value === item.locationName;
    });
    filterNavData(anw);
    filterMainData(anw);
  });
}

function filterNavData(arr) {
  let clearData = arr[0].weatherElement;

  const a = clearData.filter(function (item) {
    return item.description === "天氣現象";
  });

  let b = a.map(function (item) {
    return item.time;
  });

  let c = b[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[1].value;
    }
    return undefined;
  });

  c = c.filter((val) => val !== undefined);

  const d = clearData.filter(function (item) {
    return item.description === "平均溫度";
  });
  let e = d.map(function (item) {
    return item.time;
  });
  let f = e[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });
  f = f.filter((val) => val !== undefined);

  let g = [];
  c.forEach(function (item) {
    let e = {};
    e.imgNum = item;
    g.push(e);
  });

  let h = [];
  f.forEach(function (item, index) {
    let e = {};
    e.time = month + " / " + [dates + index];
    e.do = item;
    h.push(e);
  });

  let newArray = g.map(function (element, index) {
    return Object.assign(element, h[index], { id: index + 1 });
  });
  newArray = newArray.slice(0, 7);

  let str = "";
  newArray.forEach(function (item) {
    str += navInfo(item);
  });
  countyNav.innerHTML = str;
}

function navInfo(item) {
  return `
    <li class="nav-item swiper-slide">
    <a class="nav-link nav-link${item.imgNum} text-center" data-bs-toggle="pill"
    data-bs-target="#pills-${item.id}" type="button" role="tab" aria-controls="pills-${item.id}" aria-selected="true" data-id="${item.id}">
    <p class="date fw-bold text-nowrap">${item.time}</p>
    <img src="./assets/images/countyWeatherIcon${item.imgNum}.svg" alt="countyWeatherIcon"
    class="countyWeatherIcon d-none d-md-block">
    <p class="todayDegree fw-bold d-none d-xl-block">${item.do}℃</p>
    </a>
    </li>
    `;
}

function filterMainData(arr) {
  let clearData = arr[0].weatherElement;
  const a = clearData.filter(function (item) {
    return item.description === "最高溫度";
  });

  let b = a.map(function (item) {
    return item.time;
  });

  let c = b[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  c = c.filter((val) => val !== undefined);

  let maxW = [];
  c.forEach(function (item) {
    let d = {};
    d.maxW = item;
    maxW.push(d);
  });
  // --------------------------------------------------
  const e = clearData.filter(function (item) {
    return item.description === "最低溫度";
  });

  let f = e.map(function (item) {
    return item.time;
  });

  let g = f[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  g = g.filter((val) => val !== undefined);

  let minW = [];
  g.forEach(function (item) {
    let h = {};
    h.minW = item;
    minW.push(h);
  });
  // --------------------------------------------------
  const i = clearData.filter(function (item) {
    return item.description === "最高體感溫度";
  });

  let j = i.map(function (item) {
    return item.time;
  });

  let k = j[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  k = k.filter((val) => val !== undefined);

  let tW = [];
  k.forEach(function (item) {
    let l = {};
    l.tW = item;
    tW.push(l);
  });
  // --------------------------------------------------
  const m = clearData.filter(function (item) {
    return item.description === "紫外線指數";
  });

  let n = m.map(function (item) {
    return item.time;
  });

  let o = n[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 1 ||
      index === 2 ||
      index === 3 ||
      index === 4 ||
      index === 5
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  o = o.filter((val) => val !== undefined);

  let uV = [];
  o.forEach(function (item) {
    let p = {};
    p.uV = item;
    uV.push(p);
  });
  // --------------------------------------------------
  const q = clearData.filter(function (item) {
    return item.description === "平均相對濕度";
  });
  let r = q.map(function (item) {
    return item.time;
  });
  let s = r[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  s = s.filter((val) => val !== undefined);

  let sd = [];
  s.forEach(function (item) {
    let t = {};
    t.sd = item;
    sd.push(t);
  });
  // --------------------------------------------------
  const u = clearData.filter(function (item) {
    return item.description === "平均露點溫度";
  });
  let v = u.map(function (item) {
    return item.time;
  });
  let w = v[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  w = w.filter((val) => val !== undefined);

  let luW = [];
  w.forEach(function (item) {
    let x = {};
    x.luW = item;
    luW.push(x);
  });
  // --------------------------------------------------
  const aa = clearData.filter(function (item) {
    return item.description === "風向";
  });
  let bb = aa.map(function (item) {
    return item.time;
  });
  let cc = bb[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  cc = cc.filter((val) => val !== undefined);

  let fu = [];
  cc.forEach(function (item) {
    let dd = {};
    dd.fu = item;
    fu.push(dd);
  });
  // --------------------------------------------------
  const ee = clearData.filter(function (item) {
    return item.description === "最大風速";
  });
  let ff = ee.map(function (item) {
    return item.time;
  });
  let gg = ff[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[1].value;
    }
    return undefined;
  });

  gg = gg.filter((val) => val !== undefined);

  let fuSu = [];
  gg.forEach(function (item) {
    let hh = {};
    hh.fuSu = item;
    fuSu.push(hh);
  });
  // --------------------------------------------------
  const ii = clearData.filter(function (item) {
    return item.description === "最大舒適度指數";
  });
  let jj = ii.map(function (item) {
    return item.time;
  });
  let kk = jj[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  kk = kk.filter((val) => val !== undefined);

  let suSi = [];
  kk.forEach(function (item) {
    let ll = {};
    ll.suSi = item;
    suSi.push(ll);
  });
  // --------------------------------------------------
  const mm = clearData.filter(function (item) {
    return item.description === "12小時降雨機率";
  });
  let nn = mm.map(function (item) {
    return item.time;
  });
  let oo = nn[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  oo = oo.filter((val) => val !== undefined);

  let rain = [];
  oo.forEach(function (item) {
    let pp = {};
    pp.rain = item;
    rain.push(pp);
  });
  // --------------------------------------------------
  const qq = clearData.filter(function (item) {
    return item.description === "天氣預報綜合描述";
  });
  let rr = qq.map(function (item) {
    return item.time;
  });
  let ss = rr[0].map(function (item, index) {
    if (
      index === 0 ||
      index === 2 ||
      index === 4 ||
      index === 6 ||
      index === 8 ||
      index === 10
    ) {
      return item.elementValue[0].value;
    }
    return undefined;
  });

  ss = ss.filter((val) => val !== undefined);

  let all = [];
  ss.forEach(function (item) {
    let tt = {};
    tt.all = item;
    all.push(tt);
  });

  let newArray = maxW.map(function(element, index) {
    return Object.assign(element, minW[index], tW[index], uV[index], sd[index], luW[index], fu[index], fuSu[index], suSi[index], rain[index], all[index], { id: index + 1 });
  });
  
  putTabOne(newArray)
  putTabTwo(newArray)
  putTabThree(newArray)
  putTabFour(newArray)
  putTabFive(newArray)
  putTabSix(newArray)
}

const tabOne = document.querySelector('.tabOne')
const tabTwo = document.querySelector('.tabTwo')
const tabThree = document.querySelector('.tabThree')
const tabFour = document.querySelector('.tabFour')
const tabFive = document.querySelector('.tabFive')
const tabSix = document.querySelector('.tabSix')


function putTabOne(newArray){
    let filterNewArray = newArray.filter(function (item,index) {
    return index === 0
  });

  let str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabOne.innerHTML = str;
}

function putTabTwo(newArray){
    let filterNewArray = newArray.filter(function (item,index) {
    return index === 1
  });

  let str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabTwo.innerHTML = str;
}

function putTabThree(newArray){
    let filterNewArray = newArray.filter(function (item,index) {
    return index === 2
  });

  let str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabThree.innerHTML = str;
}

function putTabFour(newArray){
    let filterNewArray = newArray.filter(function (item,index) {
    return index === 3
  });

  let str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabFour.innerHTML = str;
}

function putTabFive(newArray){
    let filterNewArray = newArray.filter(function (item,index) {
    return index === 4
  });

  let str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabFive.innerHTML = str;
}

function putTabSix(newArray){
    let filterNewArray = newArray.filter(function (item,index) {
    return index === 5
  });

  let str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabSix.innerHTML = str;
}


function mainInfo(item){
return`
<ul class="d-flex justify-content-between flex-wrap">
<li class="weatherContent weatherDouble fw-bold d-flex flex-column">
    <p class="title text-center text-md-start">氣溫</p>
    <div class="info d-flex justify-content-around align-items-center align-items-md-end my-auto">
        <img src="./assets/images/countyTemperatureImg.svg" alt="countyTemperatureImg" class="w-auto">
        <p class="text text-danger">${item.maxW}℃</p>
        <p class="text text-secondary">${item.minW}℃
        </p>
    </div>
</li>
<li class="weatherContent weatherCenter fw-bold d-flex flex-column">
    <p class="title">體感溫度</p>
    <div class="info d-flex justify-content-center align-items-end my-auto">
        <img src="./assets/images/CountyApparentTemperature.svg" alt="CountyApparentTemperature"
            class="w-auto me-1 me-md-0 d-none d-md-block">
        <p class="text">${item.tW}
            <span>℃</span>
        </p>
    </div>
</li>
<li class="weatherContent weatherCenter fw-bold d-flex flex-column">
    <p class="title">紫外線</p>
    <div class="info d-flex justify-content-center align-items-center">
        <img src="./assets/images/CountyUV.svg" alt="CountyUV" class="w-auto">
        <p class="fz88">${item.uV}</p>
    </div>
</li>
<li class="weatherContent weatherDouble fw-bold d-flex flex-column">
    <p class="title text-center text-md-start text-nowrap">相對濕度＆平均露點溫度</span></p>
    <div class="info d-flex justify-content-around align-items-end mt-auto">
        <div class="d-flex align-items-center align-items-md-end">
            <p class="text me-1">${item.sd}</p>
            <img src="./assets/images/countyMoisture.svg" alt="countyMoisture" class="w-auto">
        </div>
        <div class="d-flex align-items-center align-items-md-end">
            <p class="text ">${item.luW}
                <span>℃</span>
            </p>
        </div>
    </div>
</li>
<li class="weatherContent weatherDouble fw-bold d-flex flex-column">
    <p class="title text-center text-md-start">風向＆風級</p>
    <div class="info d-flex justify-content-center  justify-content-md-around align-items-center my-auto">
        <div class="d-flex align-items-center">
            <p class="textmiddle me-2">${item.fu}
            </p>
            <img src="./assets/images/countyWind.svg" alt="countyWind" class="w-auto d-none d-md-block">
        </div>
        <div class="d-flex align-items-center">
            <p class="textmiddle text-secondary ">Lv.</p>
            <p class="text ms-1">${item.fuSu}</p>
        </div>
    </div>
</li>
<li class="weatherContent weatherCenter fw-bold d-flex flex-column">
    <p class="title">舒適度</p>
    <div class="info my-auto">
        <img src="./assets/images/countyComfort.svg" alt="countyComfort" class="countyComfort">
    </div>
</li>
<li class="weatherContent weatherCenter fw-bold d-flex flex-column">
    <p class="title">降雨機率</p>
    <div class="info d-flex justify-content-center align-items-center my-auto">
        <div class="d-flex justify-content-center align-items-end">
            <p class="fz54">${item.rain}
            </p>
            <img src="./assets/images/countyRainProbability.svg" alt="countyRainProbability" class="w-auto">
        </div>
    </div>
</li>
<li class="weatherContent weatherDouble fw-bold d-flex flex-column">
    <p class="title text-center text-md-start">綜合描述</p>
    <div class="info d-flex flex-column flex-md-row justify-content-around align-items-center">
        <p class="fz24 fw-normal text-primary">${item.all}</p>
    </div>
</li>
</ul>`
}


