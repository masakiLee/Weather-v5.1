// 登入 & 下拉選單;
const sideMenuSignIn = document.querySelector(".sideMenuSignIn");
const sideMenuPlus = document.querySelector(".sideMenuPlus");
const close = document.querySelector(".close");
const plus = document.querySelector(".plus");

let load_page = document.querySelector("#main_loading");

//loading 動畫 3秒結束
setTimeout(function () {
  load_page.style.display = "none";
}, 3000);

//判斷有無登入 ID
function getLoggedID() {
  return localStorage.getItem("id") || 0;
}

//如果有ID 側邊欄顯示會員區塊
function indexRender() {
  const id = localStorage.getItem("id");
  if (id) {
    console.log("login state", true);
    const userName = localStorage.getItem("email").split("@")[0];
    plus.innerHTML = `Hi ~ ${userName.replace(
      /^./,
      userName[0].toUpperCase()
    )}`;
    sideMenuSignIn.classList.remove("displayBlock");
    sideMenuSignIn.classList.add("displayNone");
    sideMenuPlus.classList.remove("displayNone");
    sideMenuPlus.classList.add("displayBlock");
  } else {
    console.log("login state", false);
    sideMenuSignIn.classList.remove("displayNone");
    sideMenuSignIn.classList.add("displayBlock");
    sideMenuPlus.classList.remove("displayBlock");
    sideMenuPlus.classList.add("displayNone");
  }
}

indexRender();

//監聽會員退出按鈕  登出後移除ID & Token & email & 重整渲染網頁
if (close) {
  close.addEventListener("click", function (e) {
    alert("登出");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("selected");
    window.location.replace("./index.html");
    getLoggedID();
    indexRender();
  });
}

const place = document.querySelector(".place");
const indexDay = document.querySelector(".day");
const immediately = document.querySelector(".immediately");

function indexInit() {
  navigator.geolocation.getCurrentPosition(successCallback);
  function successCallback(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`;
    cityAreaLocation(url);
  }
  function cityAreaLocation(url) {
    axios.get(url).then(function (res) {
      let allTown = res.data.address.city;
      let city = res.data.address.suburb;
      localStorage.setItem("allTown", allTown);
      localStorage.setItem("city", city);

      //城市&鄉鎮區
      if (place) {
        place.innerHTML = `${allTown}．${city}`;
      }
      newRenderInfo();
    });
  }
}

indexInit();

const weatherDayIcon = document.querySelector(".weatherDayIcon");
const temperature = document.querySelector(".temperature");
const climate = document.querySelector(".climate");
const todayBox = document.querySelector(".todayBox");
const weekBox = document.querySelector(".weekBox");

function newRenderInfo() {
  const city = localStorage.getItem("allTown");
  const area = localStorage.getItem("city");

  let urlOne; // 當天各城市鄉鎮區資料
  let urlTwo; // 當週各城市鄉鎮區資料

  //依照GPS反推城市跑下列if

  if (city === "宜蘭縣") {
    urlOne = `${openDataUrl}F-D0047-001?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-003?${authorization}`;
  } else if (city === "桃園市") {
    urlOne = `${openDataUrl}F-D0047-005?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-007?${authorization}`;
  } else if (city === "新竹縣") {
    urlOne = `${openDataUrl}F-D0047-009?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-011?${authorization}`;
  } else if (city === "苗栗縣") {
    urlOne = `${openDataUrl}F-D0047-013?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-015?${authorization}`;
  } else if (city === "彰化縣") {
    urlOne = `${openDataUrl}F-D0047-017?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-019?${authorization}`;
  } else if (city === "南投縣") {
    urlOne = `${openDataUrl}F-D0047-021?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-023?${authorization}`;
  } else if (city === "雲林縣") {
    urlOne = `${openDataUrl}F-D0047-025?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-027?${authorization}`;
  } else if (city === "嘉義縣") {
    urlOne = `${openDataUrl}F-D0047-029?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-031?${authorization}`;
  } else if (city === "屏東縣") {
    urlOne = `${openDataUrl}F-D0047-033?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-035?${authorization}`;
  } else if (city === "臺東縣") {
    urlOne = `${openDataUrl}F-D0047-037?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-039?${authorization}`;
  } else if (city === "花蓮縣") {
    urlOne = `${openDataUrl}F-D0047-041?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-043?${authorization}`;
  } else if (city === "澎湖縣") {
    urlOne = `${openDataUrl}F-D0047-045?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-047?${authorization}`;
  } else if (city === "基隆市") {
    urlOne = `${openDataUrl}F-D0047-049?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-051?${authorization}`;
  } else if (city === "新竹市") {
    urlOne = `${openDataUrl}F-D0047-053?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-055?${authorization}`;
  } else if (city === "嘉義市") {
    urlOne = `${openDataUrl}F-D0047-057?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-059?${authorization}`;
  } else if (city === "臺北市") {
    urlOne = `${openDataUrl}F-D0047-061?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-063?${authorization}`;
  } else if (city === "高雄市") {
    urlOne = `${openDataUrl}F-D0047-065?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-067?${authorization}`;
  } else if (city === "新北市") {
    urlOne = `${openDataUrl}F-D0047-069?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-071?${authorization}`;
  } else if (city === "臺中市") {
    urlOne = `${openDataUrl}F-D0047-073?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-075?${authorization}`;
  } else if (city === "臺南市") {
    urlOne = `${openDataUrl}F-D0047-077?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-079?${authorization}`;
  } else if (city === "連江市") {
    urlOne = `${openDataUrl}F-D0047-081?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-083?${authorization}`;
  } else if (city === "金門縣") {
    urlOne = `${openDataUrl}F-D0047-085?${authorization}`;
    urlTwo = `${openDataUrl}F-D0047-087?${authorization}`;
  }

  const promise1 = axios.get(urlOne);
  const promise2 = axios.get(urlTwo);

  Promise.all([promise1, promise2]).then((response) => {
    const oneDayTime = response[0].data.records.locations[0].location;
    const weekTime = response[1].data.records.locations[0].location;

    oneDayTime.forEach(function (item) {
      if (area === item.locationName) {
        const info = item.weatherElement;
        newData(info);
      }
    });
    weekTime.forEach(function (item) {
      if (area === item.locationName) {
        const info = item.weatherElement;
        weekNewData(info);
      }
    });
  });
}

//當天資料重新整理成乾淨陣列
let todayData = [];
function newData(arr) {
 const a = arr.filter(function(item){
  return item.description === '天氣現象'
 })
 
 let b = a.map(function(item){
  return item.time
 })

 const c = arr.filter(function(item){
  return item.description === '溫度'
 })

 let d = c.map(function(item){
  return item.time
 })

 let g = []
  b[0].forEach(function(item){
    let e = {}
    e.time = Object.values(item)[0].split(" ")[1].substring(0, 5).replace(":", "：");
    e.imgNum = Object.values(item)[2][1].value
    e.description = Object.values(item)[2][0].value
    g.push(e)
})

let h = []
  d[0].forEach(function(item){
    let e = {}
    e.do = Object.values(item)[1][0].value
    h.push(e)
})

let newArray = g.map(function(element, index) {
  return Object.assign(element, h[index]);
});
newArray = newArray.slice(0, 8);
  titleRender(newArray);
  todayRender(newArray)
}


function titleRender(item) {
  //大字溫度
    temperature.innerHTML = `${item[1].do}<span class="degree fw-bold"> ℃</span>`;
  // 左邊的圖

    if(item[1].time === '18：00' || item[1].time === '21：00' || item[1].time === '00：00' || item[1].time === '03：00'){
      if(item[1].imgNum === '01' || item[1].imgNum === '02' || item[1].imgNum === '03'){
        item[1].imgNum = '15'
      }
    }

    weatherDayIcon.innerHTML = `<img src="./assets/images/weatherDayIcon${item[1].imgNum}.svg" 
    alt="weatherDayIcon" class="weatherDayIconImg">`;
  // 順便引入渲染不同背景圖
    bgColor(item[1].imgNum);
  // 年 月 日
    indexDay.innerHTML = `${year}.${month}.${dates}`;
  //敘述
    climate.innerHTML = `${item[1].description}`;
}



//時間函數
function currentTime() {
  let d = new Date();
  let h = d.getHours();
  h = h < 10 ? "0" + h : h;
  let m = d.getMinutes();
  m = m < 10 ? "0" + m : m;
  let aP = "";
  aP = h < 12 ? "AM" : "PM";
  immediately.innerHTML = `${h}：${m} ${aP}`;
  setTimeout("currentTime()", 1000);
}


// 順便引入渲染不同背景圖
function bgColor(weatherNum) {
  const banner = document.querySelector(".banner");
  banner.classList.remove("bg01", "bg02", "bg03", "bg04");

  if (weatherNum === "01" || weatherNum === "02" || weatherNum === "03") {
    banner.classList.add("bg01");
  } else if (weatherNum === "04") {
    banner.classList.add("bg02");
  } else if( weatherNum === "05" || weatherNum === "06" || weatherNum === "07"){
    banner.classList.add("bg03");
  } else if (
    weatherNum === "08" || weatherNum === "09" || weatherNum === "10" ||
    weatherNum === "11" || weatherNum === "12" || weatherNum === "13" ||
    weatherNum === "14"
  ) {
    banner.classList.add("bg04");
  }
  if (hour >= 18 || hour < 6) {
    banner.classList.add("bg05");
    temperature.style.color = "white";
    climate.style.color = "white";
    indexDay.style.color = "white";
    immediately.style.color = "white";
    place.style.color = "white";
  }
  sideMask.style.display = "none";
}

function todayRender(item) {
  let newData = item.filter(function(item,index){
    return index >=1
  })

  let str =''
  newData.forEach(function(item){
      str += todayList(item)
  })
  todayBox.innerHTML = str
}

function todayList(item){
  if(item.time === '18：00' || item.time === '21：00' || item.time === '00：00' || item.time === '03：00'){
    if(item.imgNum === '01' || item.imgNum === '02' || item.imgNum === '03'){
      item.imgNum = '15'
    }
  }

return` 
      <li class="dateList swiper-slide">
        <a href="#">
          <p class=" times fw-bold text-nowrap">${item.time}</p>
          <img src="./assets/images/dateListIcon${item.imgNum}.svg" alt="dateListIcon" class="dateListIcon">
          <p class="temperatureSmall fw-bold">${item.do}℃</p>
        </a>
      </li>`
}

//當週資料重新整理成乾淨陣列
let weekData = []
function weekNewData(arr){
  const a = arr.filter(function(item){
    return item.description === '天氣現象'
   })

   let b = a.map(function(item){
    return item.time
   })

   let c = b[0].map(function(item,index){
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[1].value;
    }
    return undefined;
  });

  c = c.filter(val => val !== undefined);

   const d = arr.filter(function(item){
    return item.description === '平均溫度'
   })
   let e = d.map(function(item){
    return item.time
   })
let f = e[0].map(function(item,index){
  if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
    return item.elementValue[0].value;
  }
  return undefined;
});
f = f.filter(val => val !== undefined);

   let g = []
    c.forEach(function(item){
      let e = {}
      e.imgNum = item
      g.push(e)
  })
  
  let h = []
    f.forEach(function(item,index){
      let e = {}
      e.time = month + " / " + [dates + index]
      e.do = item
      h.push(e)
  })

  let newArray = g.map(function(element, index) {
    return Object.assign(element, h[index]);
  });
  newArray = newArray.slice(0, 7);
  weekRender(newArray);
}

//渲染畫面
function weekRender(item){

  let str =''
  item.forEach(function(item){
      str += weekList(item)
  })
  weekBox.innerHTML = str

}

function weekList(item){
    const city = localStorage.getItem("allTown");
    return`
    <li class="dateList swiper-slide">
      <a href="./county.html?city=${city}"
        <p class="times fw-bold text-nowrap">${item.time}</p>
        <img src="./assets/images/dateListIcon${item.imgNum}.svg" alt="dateListIcon" class="dateListIcon">
        <p class="temperatureSmall fw-bold">${item.do}℃</p>
      </a>
    </li>`
}


if (weekBox) {
  weekBox.addEventListener("click", function (e) {
    const area = localStorage.getItem("city");
    console.log(area);
    let selectArea = area;
    localStorage.setItem("selected", selectArea);
  });
}
