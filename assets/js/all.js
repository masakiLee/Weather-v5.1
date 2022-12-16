"use strict";

// sideMenu
var menuIcon = document.querySelector(".menuIcon");
var sideMenuIcon = document.querySelector(".sideMenuIcon");
var sideMask = document.querySelector(".sideMask"); // login

var signIn = document.querySelector(".signIn");
var infoModal = document.querySelector("#infoModal"); //-------------------------------------------//
//sideMenu

menuIcon.addEventListener("click", function () {
  sideMask.style.display = "block";
});
sideMenuIcon.addEventListener("click", function () {
  sideMask.style.display = "none";
}); //loginModal

signIn.addEventListener("click", function () {
  infoModal.showModal();
});
"use strict";

var allTownData = [];
axios.get("https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWB-F02B4546-CFAB-419F-B5DD-E14A22866D83").then(function (response) {
  allTownData = response.data.records.locations[0].location;
  info(allTownData);
})["catch"](function (error) {
  console.log(error);
});
var allTownTabPane = document.querySelector(".allTownTabPane");

function info() {
  var newData = allTownData.filter(function (item) {
    return item.locationName === "新北市" || item.locationName === "臺北市" || item.locationName === "基隆市" || item.locationName === "桃園市" || item.locationName === "新竹市" || item.locationName === "新竹縣";
  });
  var str = "";
  newData.forEach(function (item) {
    str += infoCard(item);
  });

  if (allTownTabPane) {
    allTownTabPane.innerHTML = str;
  }
}

info();

function infoCard(item) {
  var locationName = item.locationName;
  var weather = item.weatherElement[6].time[0].elementValue[0].value;
  var umbrella = item.weatherElement[0].time[0].elementValue[0].value;
  var wind = item.weatherElement[13].time[0].elementValue[0].value;
  var windSpeed = item.weatherElement[4].time[0].elementValue[0].value;
  var weatherIcon = item.weatherElement[6].time[0].elementValue[1].value;
  var temperature = item.weatherElement[1].time[0].elementValue[0].value;
  return "\n    <a href=\"./county.html?city=".concat(locationName, "\" class=\"city\">\n      <div class=\"info\">\n        <div class=\"infoCity\">\n          <p class=\"name fw-bold text-lg-start text-center mb-3 mb-lg-0\">").concat(locationName, "</p>\n          <p class=\"state d-none d-lg-block\">").concat(weather, "</p>\n        </div>\n        <div class=\"infoState d-none d-lg-block\">\n          <p class=\"umbrella fw-bold\"><img src=\"./assets/images/umbrellaIcon.svg\" alt=\"umbrellaIcon\" class=\"umbrellaIcon\">").concat(umbrella, " %</p>\n          <p class=\"wind fw-bold\"><img src=\"./assets/images/windIcon.svg\" alt=\"windIcon\" class=\"windIcon\">").concat(wind, " ").concat(windSpeed, "km/h</p>\n        </div>\n      </div>\n      <div class=\"infoIcon\">\n        <img src=\"./assets/images/cityIcon").concat(weatherIcon, ".svg\" alt=\"cityWeatherIcon\" class=\"cityWeatherIcon\">\n        <p class=\"cityDegrees fw-bold text-primary\">").concat(temperature, "\u2103</p>\n      </div>\n    </a>\n  ");
}

var townNav = document.querySelector(".townNav"); // console.log(townNav);

if (townNav) {
  townNav.addEventListener("click", function (e) {
    if (e.target.value === undefined || "") {
      return;
    }

    var newArray = allTownData.filter(function (item) {
      if (e.target.innerHTML === "北部") {
        return item.locationName === "新北市" || item.locationName === "臺北市" || item.locationName === "基隆市" || item.locationName === "桃園市" || item.locationName === "新竹市" || item.locationName === "新竹縣";
      } else if (e.target.innerHTML === "中部") {
        return item.locationName === "苗栗縣" || item.locationName === "臺中市" || item.locationName === "彰化縣" || item.locationName === "南投縣" || item.locationName === "雲林縣";
      } else if (e.target.innerHTML === "南部") {
        return item.locationName === "嘉義市" || item.locationName === "嘉義縣" || item.locationName === "臺南市" || item.locationName === "高雄市" || item.locationName === "屏東縣";
      } else if (e.target.innerHTML === "東部") {
        return item.locationName === "宜蘭縣" || item.locationName === "花蓮縣" || item.locationName === "臺東縣";
      } else if (e.target.innerHTML === "離島") {
        return item.locationName === "澎湖縣" || item.locationName === "金門縣" || item.locationName === "連江縣";
      }
    });
    var str = "";
    newArray.forEach(function (item) {
      str += infoCard(item);
    });

    if (allTownTabPane) {
      allTownTabPane.innerHTML = str;
    }
  });
}
"use strict";

var openDataUrl = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/";
var authorization = "Authorization=CWB-F02B4546-CFAB-419F-B5DD-E14A22866D83";
"use strict";

function init() {
  var params = new URLSearchParams(document.location.search);
  var city = params.get("city"); //1.先看url的city是多少 再跑下面的 if else if

  var url = "";

  if (city === "新竹縣") {
    url = "".concat(openDataUrl, "F-D0047-011?").concat(authorization);
    allRender(url);
  } else if (city === "金門縣") {
    url = "".concat(openDataUrl, "F-D0047-087?").concat(authorization);
    allRender(url);
  } else if (city === "苗栗縣") {
    url = "".concat(openDataUrl, "F-D0047-015?").concat(authorization);
    allRender(url);
  } else if (city === "新北市") {
    url = "".concat(openDataUrl, "F-D0047-071?").concat(authorization);
    allRender(url);
  } else if (city === "宜蘭縣") {
    url = "".concat(openDataUrl, "F-D0047-003?").concat(authorization);
    allRender(url);
  } else if (city === "雲林縣") {
    url = "".concat(openDataUrl, "F-D0047-027?").concat(authorization);
    allRender(url);
  } else if (city === "臺南市") {
    url = "".concat(openDataUrl, "F-D0047-079?").concat(authorization);
    allRender(url);
  } else if (city === "高雄市") {
    url = "".concat(openDataUrl, "F-D0047-067?").concat(authorization);
    allRender(url);
  } else if (city === "彰化縣") {
    url = "".concat(openDataUrl, "F-D0047-019?").concat(authorization);
    allRender(url);
  } else if (city === "臺北市") {
    url = "".concat(openDataUrl, "F-D0047-063?").concat(authorization);
    allRender(url);
  } else if (city === "南投縣") {
    url = "".concat(openDataUrl, "F-D0047-023?").concat(authorization);
    allRender(url);
  } else if (city === "澎湖縣") {
    url = "".concat(openDataUrl, "F-D0047-047?").concat(authorization);
    allRender(url);
  } else if (city === "基隆市") {
    url = "".concat(openDataUrl, "F-D0047-051?").concat(authorization);
    allRender(url);
  } else if (city === "桃園市") {
    url = "".concat(openDataUrl, "F-D0047-007?").concat(authorization);
    allRender(url);
  } else if (city === "花蓮縣") {
    url = "".concat(openDataUrl, "F-D0047-043?").concat(authorization);
    allRender(url);
  } else if (city === "連江縣") {
    url = "".concat(openDataUrl, "F-D0047-083?").concat(authorization);
    allRender(url);
  } else if (city === "臺東縣") {
    url = "".concat(openDataUrl, "F-D0047-039?").concat(authorization);
    allRender(url);
  } else if (city === "嘉義市") {
    url = "".concat(openDataUrl, "F-D0047-059?").concat(authorization);
    allRender(url);
  } else if (city === "嘉義縣") {
    url = "".concat(openDataUrl, "F-D0047-031?").concat(authorization);
    allRender(url);
  } else if (city === "屏東縣") {
    url = "".concat(openDataUrl, "F-D0047-035?").concat(authorization);
    allRender(url);
  } else if (city === "臺中市") {
    url = "".concat(openDataUrl, "F-D0047-075?").concat(authorization);
    allRender(url);
  } else if (city === "新竹市") {
    url = "".concat(openDataUrl, "F-D0047-055?").concat(authorization);
    allRender(url);
  }
}

init();
var countyLocationsName = document.querySelector(".countyLocationsName");
var areaSelect = document.querySelector(".areaSelect");
var countyNav = document.querySelector(".countyNav");
var tabPean = document.querySelector(".tabPean"); //2.再把 url 傳進axios

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var dates = date.getDate();
var hour = date.getHours();
hour = hour < 10 ? "0" + hour : hour;
var areaData = [];

function allRender(url) {
  axios.get(url).then(function (res) {
    areaData = res.data.records.locations[0];
    areaOption(areaData);
  })["catch"](function (error) {
    console.log(error);
  });
}

function areaOption(item) {
  //縣市名
  var str = "";
  str += "\u7E23\u5E02\u9810\u5831 - ".concat(item.locationsName);
  countyLocationsName.innerHTML = str; //下拉選單

  var area = item.location;
  var areaItem = "";
  var have = localStorage.getItem("selected");
  area.forEach(function (item) {
    if (have === item.locationName) {
      //如果從首頁跳進來 下拉選單會被選取
      areaItem += "<option value=\"".concat(item.locationName, "\"selected=\"selected\">").concat(item.locationName, " </option>");
      areaSelect.innerHTML = areaItem;
    } else {
      //從總覽頁面進入
      areaItem += "<option value=\"".concat(item.locationName, "\">").concat(item.locationName, " </option>");
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
  var have = localStorage.getItem("selected");
  var anw = data.filter(function (item) {
    return have === item.locationName;
  });
  filterNavData(anw);
  filterMainData(anw);
}

function round(data) {
  var initData = data.filter(function (item, index) {
    return areaSelect.value === item.locationName;
  });
  filterNavData(initData);
  filterMainData(initData);
}

if (areaSelect) {
  areaSelect.addEventListener("change", function (e) {
    var a = areaData.location;
    var anw = a.filter(function (item) {
      return e.target.value === item.locationName;
    });
    filterNavData(anw);
    filterMainData(anw);
  });
}

function filterNavData(arr) {
  var clearData = arr[0].weatherElement;
  var a = clearData.filter(function (item) {
    return item.description === "天氣現象";
  });
  var b = a.map(function (item) {
    return item.time;
  });
  var c = b[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[1].value;
    }

    return undefined;
  });
  c = c.filter(function (val) {
    return val !== undefined;
  });
  var d = clearData.filter(function (item) {
    return item.description === "平均溫度";
  });
  var e = d.map(function (item) {
    return item.time;
  });
  var f = e[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  f = f.filter(function (val) {
    return val !== undefined;
  });
  var g = [];
  c.forEach(function (item) {
    var e = {};
    e.imgNum = item;
    g.push(e);
  });
  var h = [];
  f.forEach(function (item, index) {
    var e = {};
    e.time = month + " / " + [dates + index];
    e["do"] = item;
    h.push(e);
  });
  var newArray = g.map(function (element, index) {
    return Object.assign(element, h[index], {
      id: index + 1
    });
  });
  newArray = newArray.slice(0, 7);
  var str = "";
  newArray.forEach(function (item) {
    str += navInfo(item);
  });
  countyNav.innerHTML = str;
}

function navInfo(item) {
  return "\n    <li class=\"nav-item swiper-slide\">\n    <a class=\"nav-link nav-link".concat(item.imgNum, " text-center\" data-bs-toggle=\"pill\"\n    data-bs-target=\"#pills-").concat(item.id, "\" type=\"button\" role=\"tab\" aria-controls=\"pills-").concat(item.id, "\" aria-selected=\"true\" data-id=\"").concat(item.id, "\">\n    <p class=\"date fw-bold text-nowrap\">").concat(item.time, "</p>\n    <img src=\"./assets/images/countyWeatherIcon").concat(item.imgNum, ".svg\" alt=\"countyWeatherIcon\"\n    class=\"countyWeatherIcon d-none d-md-block\">\n    <p class=\"todayDegree fw-bold d-none d-xl-block\">").concat(item["do"], "\u2103</p>\n    </a>\n    </li>\n    ");
}

function filterMainData(arr) {
  var clearData = arr[0].weatherElement;
  var a = clearData.filter(function (item) {
    return item.description === "最高溫度";
  });
  var b = a.map(function (item) {
    return item.time;
  });
  var c = b[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  c = c.filter(function (val) {
    return val !== undefined;
  });
  var maxW = [];
  c.forEach(function (item) {
    var d = {};
    d.maxW = item;
    maxW.push(d);
  }); // --------------------------------------------------

  var e = clearData.filter(function (item) {
    return item.description === "最低溫度";
  });
  var f = e.map(function (item) {
    return item.time;
  });
  var g = f[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  g = g.filter(function (val) {
    return val !== undefined;
  });
  var minW = [];
  g.forEach(function (item) {
    var h = {};
    h.minW = item;
    minW.push(h);
  }); // --------------------------------------------------

  var i = clearData.filter(function (item) {
    return item.description === "最高體感溫度";
  });
  var j = i.map(function (item) {
    return item.time;
  });
  var k = j[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  k = k.filter(function (val) {
    return val !== undefined;
  });
  var tW = [];
  k.forEach(function (item) {
    var l = {};
    l.tW = item;
    tW.push(l);
  }); // --------------------------------------------------

  var m = clearData.filter(function (item) {
    return item.description === "紫外線指數";
  });
  var n = m.map(function (item) {
    return item.time;
  });
  var o = n[0].map(function (item, index) {
    if (index === 0 || index === 1 || index === 2 || index === 3 || index === 4 || index === 5) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  o = o.filter(function (val) {
    return val !== undefined;
  });
  var uV = [];
  o.forEach(function (item) {
    var p = {};
    p.uV = item;
    uV.push(p);
  }); // --------------------------------------------------

  var q = clearData.filter(function (item) {
    return item.description === "平均相對濕度";
  });
  var r = q.map(function (item) {
    return item.time;
  });
  var s = r[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  s = s.filter(function (val) {
    return val !== undefined;
  });
  var sd = [];
  s.forEach(function (item) {
    var t = {};
    t.sd = item;
    sd.push(t);
  }); // --------------------------------------------------

  var u = clearData.filter(function (item) {
    return item.description === "平均露點溫度";
  });
  var v = u.map(function (item) {
    return item.time;
  });
  var w = v[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  w = w.filter(function (val) {
    return val !== undefined;
  });
  var luW = [];
  w.forEach(function (item) {
    var x = {};
    x.luW = item;
    luW.push(x);
  }); // --------------------------------------------------

  var aa = clearData.filter(function (item) {
    return item.description === "風向";
  });
  var bb = aa.map(function (item) {
    return item.time;
  });
  var cc = bb[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  cc = cc.filter(function (val) {
    return val !== undefined;
  });
  var fu = [];
  cc.forEach(function (item) {
    var dd = {};
    dd.fu = item;
    fu.push(dd);
  }); // --------------------------------------------------

  var ee = clearData.filter(function (item) {
    return item.description === "最大風速";
  });
  var ff = ee.map(function (item) {
    return item.time;
  });
  var gg = ff[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[1].value;
    }

    return undefined;
  });
  gg = gg.filter(function (val) {
    return val !== undefined;
  });
  var fuSu = [];
  gg.forEach(function (item) {
    var hh = {};
    hh.fuSu = item;
    fuSu.push(hh);
  }); // --------------------------------------------------

  var ii = clearData.filter(function (item) {
    return item.description === "最大舒適度指數";
  });
  var jj = ii.map(function (item) {
    return item.time;
  });
  var kk = jj[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  kk = kk.filter(function (val) {
    return val !== undefined;
  });
  var suSi = [];
  kk.forEach(function (item) {
    var ll = {};
    ll.suSi = item;
    suSi.push(ll);
  }); // --------------------------------------------------

  var mm = clearData.filter(function (item) {
    return item.description === "12小時降雨機率";
  });
  var nn = mm.map(function (item) {
    return item.time;
  });
  var oo = nn[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  oo = oo.filter(function (val) {
    return val !== undefined;
  });
  var rain = [];
  oo.forEach(function (item) {
    var pp = {};
    pp.rain = item;
    rain.push(pp);
  }); // --------------------------------------------------

  var qq = clearData.filter(function (item) {
    return item.description === "天氣預報綜合描述";
  });
  var rr = qq.map(function (item) {
    return item.time;
  });
  var ss = rr[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  ss = ss.filter(function (val) {
    return val !== undefined;
  });
  var all = [];
  ss.forEach(function (item) {
    var tt = {};
    tt.all = item;
    all.push(tt);
  });
  var newArray = maxW.map(function (element, index) {
    return Object.assign(element, minW[index], tW[index], uV[index], sd[index], luW[index], fu[index], fuSu[index], suSi[index], rain[index], all[index], {
      id: index + 1
    });
  });
  putTabOne(newArray);
  putTabTwo(newArray);
  putTabThree(newArray);
  putTabFour(newArray);
  putTabFive(newArray);
  putTabSix(newArray);
}

var tabOne = document.querySelector('.tabOne');
var tabTwo = document.querySelector('.tabTwo');
var tabThree = document.querySelector('.tabThree');
var tabFour = document.querySelector('.tabFour');
var tabFive = document.querySelector('.tabFive');
var tabSix = document.querySelector('.tabSix');

function putTabOne(newArray) {
  var filterNewArray = newArray.filter(function (item, index) {
    return index === 0;
  });
  var str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabOne.innerHTML = str;
}

function putTabTwo(newArray) {
  var filterNewArray = newArray.filter(function (item, index) {
    return index === 1;
  });
  var str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabTwo.innerHTML = str;
}

function putTabThree(newArray) {
  var filterNewArray = newArray.filter(function (item, index) {
    return index === 2;
  });
  var str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabThree.innerHTML = str;
}

function putTabFour(newArray) {
  var filterNewArray = newArray.filter(function (item, index) {
    return index === 3;
  });
  var str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabFour.innerHTML = str;
}

function putTabFive(newArray) {
  var filterNewArray = newArray.filter(function (item, index) {
    return index === 4;
  });
  var str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabFive.innerHTML = str;
}

function putTabSix(newArray) {
  var filterNewArray = newArray.filter(function (item, index) {
    return index === 5;
  });
  var str = "";
  filterNewArray.forEach(function (item) {
    str += mainInfo(item);
  });
  tabSix.innerHTML = str;
}

function mainInfo(item) {
  return "\n<ul class=\"d-flex justify-content-between flex-wrap\">\n<li class=\"weatherContent weatherDouble fw-bold d-flex flex-column\">\n    <p class=\"title text-center text-md-start\">\u6C23\u6EAB</p>\n    <div class=\"info d-flex justify-content-around align-items-center align-items-md-end my-auto\">\n        <img src=\"./assets/images/countyTemperatureImg.svg\" alt=\"countyTemperatureImg\" class=\"w-auto\">\n        <p class=\"text text-danger\">".concat(item.maxW, "\u2103</p>\n        <p class=\"text text-secondary\">").concat(item.minW, "\u2103\n        </p>\n    </div>\n</li>\n<li class=\"weatherContent weatherCenter fw-bold d-flex flex-column\">\n    <p class=\"title\">\u9AD4\u611F\u6EAB\u5EA6</p>\n    <div class=\"info d-flex justify-content-center align-items-end my-auto\">\n        <img src=\"./assets/images/CountyApparentTemperature.svg\" alt=\"CountyApparentTemperature\"\n            class=\"w-auto me-1 me-md-0 d-none d-md-block\">\n        <p class=\"text\">").concat(item.tW, "\n            <span>\u2103</span>\n        </p>\n    </div>\n</li>\n<li class=\"weatherContent weatherCenter fw-bold d-flex flex-column\">\n    <p class=\"title\">\u7D2B\u5916\u7DDA</p>\n    <div class=\"info d-flex justify-content-center align-items-center\">\n        <img src=\"./assets/images/CountyUV.svg\" alt=\"CountyUV\" class=\"w-auto\">\n        <p class=\"fz88\">").concat(item.uV, "</p>\n    </div>\n</li>\n<li class=\"weatherContent weatherDouble fw-bold d-flex flex-column\">\n    <p class=\"title text-center text-md-start text-nowrap\">\u76F8\u5C0D\u6FD5\u5EA6\uFF06\u5E73\u5747\u9732\u9EDE\u6EAB\u5EA6</span></p>\n    <div class=\"info d-flex justify-content-around align-items-end mt-auto\">\n        <div class=\"d-flex align-items-center align-items-md-end\">\n            <p class=\"text me-1\">").concat(item.sd, "</p>\n            <img src=\"./assets/images/countyMoisture.svg\" alt=\"countyMoisture\" class=\"w-auto\">\n        </div>\n        <div class=\"d-flex align-items-center align-items-md-end\">\n            <p class=\"text \">").concat(item.luW, "\n                <span>\u2103</span>\n            </p>\n        </div>\n    </div>\n</li>\n<li class=\"weatherContent weatherDouble fw-bold d-flex flex-column\">\n    <p class=\"title text-center text-md-start\">\u98A8\u5411\uFF06\u98A8\u7D1A</p>\n    <div class=\"info d-flex justify-content-center  justify-content-md-around align-items-center my-auto\">\n        <div class=\"d-flex align-items-center\">\n            <p class=\"textmiddle me-2\">").concat(item.fu, "\n            </p>\n            <img src=\"./assets/images/countyWind.svg\" alt=\"countyWind\" class=\"w-auto d-none d-md-block\">\n        </div>\n        <div class=\"d-flex align-items-center\">\n            <p class=\"textmiddle text-secondary \">Lv.</p>\n            <p class=\"text ms-1\">").concat(item.fuSu, "</p>\n        </div>\n    </div>\n</li>\n<li class=\"weatherContent weatherCenter fw-bold d-flex flex-column\">\n    <p class=\"title\">\u8212\u9069\u5EA6</p>\n    <div class=\"info my-auto\">\n        <img src=\"./assets/images/countyComfort.svg\" alt=\"countyComfort\" class=\"countyComfort\">\n    </div>\n</li>\n<li class=\"weatherContent weatherCenter fw-bold d-flex flex-column\">\n    <p class=\"title\">\u964D\u96E8\u6A5F\u7387</p>\n    <div class=\"info d-flex justify-content-center align-items-center my-auto\">\n        <div class=\"d-flex justify-content-center align-items-end\">\n            <p class=\"fz54\">").concat(item.rain, "\n            </p>\n            <img src=\"./assets/images/countyRainProbability.svg\" alt=\"countyRainProbability\" class=\"w-auto\">\n        </div>\n    </div>\n</li>\n<li class=\"weatherContent weatherDouble fw-bold d-flex flex-column\">\n    <p class=\"title text-center text-md-start\">\u7D9C\u5408\u63CF\u8FF0</p>\n    <div class=\"info d-flex flex-column flex-md-row justify-content-around align-items-center\">\n        <p class=\"fz24 fw-normal text-primary\">").concat(item.all, "</p>\n    </div>\n</li>\n</ul>");
}
"use strict";

// 登入 & 下拉選單;
var sideMenuSignIn = document.querySelector(".sideMenuSignIn");
var sideMenuPlus = document.querySelector(".sideMenuPlus");
var close = document.querySelector(".close");
var plus = document.querySelector(".plus");
var load_page = document.querySelector("#main_loading"); //loading 動畫 3秒結束

setTimeout(function () {
  load_page.style.display = "none";
}, 3000); //判斷有無登入 ID

function getLoggedID() {
  return localStorage.getItem("id") || 0;
} //如果有ID 側邊欄顯示會員區塊


function indexRender() {
  var id = localStorage.getItem("id");

  if (id) {
    console.log("login state", true);
    var userName = localStorage.getItem("email").split("@")[0];
    plus.innerHTML = "Hi ~ ".concat(userName.replace(/^./, userName[0].toUpperCase()));
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

indexRender(); //監聽會員退出按鈕  登出後移除ID & Token & email & 重整渲染網頁

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

var place = document.querySelector(".place");
var indexDay = document.querySelector(".day");
var immediately = document.querySelector(".immediately");

function indexInit() {
  navigator.geolocation.getCurrentPosition(successCallback);

  function successCallback(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var url = "https://nominatim.openstreetmap.org/reverse?lat=".concat(lat, "&lon=").concat(lon, "&format=json");
    cityAreaLocation(url);
  }

  function cityAreaLocation(url) {
    axios.get(url).then(function (res) {
      var allTown = res.data.address.city;
      var city = res.data.address.suburb;
      localStorage.setItem("allTown", allTown);
      localStorage.setItem("city", city); //城市&鄉鎮區

      if (place) {
        place.innerHTML = "".concat(allTown, "\uFF0E").concat(city);
      }

      newRenderInfo();
    });
  }
}

indexInit();
var weatherDayIcon = document.querySelector(".weatherDayIcon");
var temperature = document.querySelector(".temperature");
var climate = document.querySelector(".climate");
var todayBox = document.querySelector(".todayBox");
var weekBox = document.querySelector(".weekBox");

function newRenderInfo() {
  var city = localStorage.getItem("allTown");
  var area = localStorage.getItem("city");
  var urlOne; // 當天各城市鄉鎮區資料

  var urlTwo; // 當週各城市鄉鎮區資料
  //依照GPS反推城市跑下列if

  if (city === "宜蘭縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-001?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-003?").concat(authorization);
  } else if (city === "桃園市") {
    urlOne = "".concat(openDataUrl, "F-D0047-005?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-007?").concat(authorization);
  } else if (city === "新竹縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-009?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-011?").concat(authorization);
  } else if (city === "苗栗縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-013?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-015?").concat(authorization);
  } else if (city === "彰化縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-017?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-019?").concat(authorization);
  } else if (city === "南投縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-021?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-023?").concat(authorization);
  } else if (city === "雲林縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-025?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-027?").concat(authorization);
  } else if (city === "嘉義縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-029?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-031?").concat(authorization);
  } else if (city === "屏東縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-033?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-035?").concat(authorization);
  } else if (city === "臺東縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-037?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-039?").concat(authorization);
  } else if (city === "花蓮縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-041?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-043?").concat(authorization);
  } else if (city === "澎湖縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-045?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-047?").concat(authorization);
  } else if (city === "基隆市") {
    urlOne = "".concat(openDataUrl, "F-D0047-049?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-051?").concat(authorization);
  } else if (city === "新竹市") {
    urlOne = "".concat(openDataUrl, "F-D0047-053?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-055?").concat(authorization);
  } else if (city === "嘉義市") {
    urlOne = "".concat(openDataUrl, "F-D0047-057?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-059?").concat(authorization);
  } else if (city === "臺北市") {
    urlOne = "".concat(openDataUrl, "F-D0047-061?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-063?").concat(authorization);
  } else if (city === "高雄市") {
    urlOne = "".concat(openDataUrl, "F-D0047-065?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-067?").concat(authorization);
  } else if (city === "新北市") {
    urlOne = "".concat(openDataUrl, "F-D0047-069?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-071?").concat(authorization);
  } else if (city === "臺中市") {
    urlOne = "".concat(openDataUrl, "F-D0047-073?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-075?").concat(authorization);
  } else if (city === "臺南市") {
    urlOne = "".concat(openDataUrl, "F-D0047-077?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-079?").concat(authorization);
  } else if (city === "連江市") {
    urlOne = "".concat(openDataUrl, "F-D0047-081?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-083?").concat(authorization);
  } else if (city === "金門縣") {
    urlOne = "".concat(openDataUrl, "F-D0047-085?").concat(authorization);
    urlTwo = "".concat(openDataUrl, "F-D0047-087?").concat(authorization);
  }

  var promise1 = axios.get(urlOne);
  var promise2 = axios.get(urlTwo);
  Promise.all([promise1, promise2]).then(function (response) {
    var oneDayTime = response[0].data.records.locations[0].location;
    var weekTime = response[1].data.records.locations[0].location;
    oneDayTime.forEach(function (item) {
      if (area === item.locationName) {
        var info = item.weatherElement;
        newData(info);
      }
    });
    weekTime.forEach(function (item) {
      if (area === item.locationName) {
        var info = item.weatherElement;
        weekNewData(info);
      }
    });
  });
} //當天資料重新整理成乾淨陣列


var todayData = [];

function newData(arr) {
  var a = arr.filter(function (item) {
    return item.description === '天氣現象';
  });
  var b = a.map(function (item) {
    return item.time;
  });
  var c = arr.filter(function (item) {
    return item.description === '溫度';
  });
  var d = c.map(function (item) {
    return item.time;
  });
  var g = [];
  b[0].forEach(function (item) {
    var e = {};
    e.time = Object.values(item)[0].split(" ")[1].substring(0, 5).replace(":", "：");
    e.imgNum = Object.values(item)[2][1].value;
    e.description = Object.values(item)[2][0].value;
    g.push(e);
  });
  var h = [];
  d[0].forEach(function (item) {
    var e = {};
    e["do"] = Object.values(item)[1][0].value;
    h.push(e);
  });
  var newArray = g.map(function (element, index) {
    return Object.assign(element, h[index]);
  });
  newArray = newArray.slice(0, 8);
  titleRender(newArray);
  todayRender(newArray);
}

function titleRender(item) {
  //大字溫度
  temperature.innerHTML = "".concat(item[1]["do"], "<span class=\"degree fw-bold\"> \u2103</span>"); // 左邊的圖

  if (item[1].time === '18：00' || item[1].time === '21：00' || item[1].time === '00：00' || item[1].time === '03：00') {
    if (item[1].imgNum === '01' || item[1].imgNum === '02' || item[1].imgNum === '03') {
      item[1].imgNum = '15';
    }
  }

  weatherDayIcon.innerHTML = "<img src=\"./assets/images/weatherDayIcon".concat(item[1].imgNum, ".svg\" \n    alt=\"weatherDayIcon\" class=\"weatherDayIconImg\">"); // 順便引入渲染不同背景圖

  bgColor(item[1].imgNum); // 年 月 日

  indexDay.innerHTML = "".concat(year, ".").concat(month, ".").concat(dates); //敘述

  climate.innerHTML = "".concat(item[1].description);
} //時間函數


function currentTime() {
  var d = new Date();
  var h = d.getHours();
  h = h < 10 ? "0" + h : h;
  var m = d.getMinutes();
  m = m < 10 ? "0" + m : m;
  var aP = "";
  aP = h < 12 ? "AM" : "PM";
  immediately.innerHTML = "".concat(h, "\uFF1A").concat(m, " ").concat(aP);
  setTimeout("currentTime()", 1000);
} // 順便引入渲染不同背景圖


function bgColor(weatherNum) {
  var banner = document.querySelector(".banner");
  banner.classList.remove("bg01", "bg02", "bg03", "bg04");

  if (weatherNum === "01" || weatherNum === "02" || weatherNum === "03") {
    banner.classList.add("bg01");
  } else if (weatherNum === "04") {
    banner.classList.add("bg02");
  } else if (weatherNum === "05" || weatherNum === "06" || weatherNum === "07") {
    banner.classList.add("bg03");
  } else if (weatherNum === "08" || weatherNum === "09" || weatherNum === "10" || weatherNum === "11" || weatherNum === "12" || weatherNum === "13" || weatherNum === "14") {
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
  var newData = item.filter(function (item, index) {
    return index >= 1;
  });
  var str = '';
  newData.forEach(function (item) {
    str += todayList(item);
  });
  todayBox.innerHTML = str;
}

function todayList(item) {
  if (item.time === '18：00' || item.time === '21：00' || item.time === '00：00' || item.time === '03：00') {
    if (item.imgNum === '01' || item.imgNum === '02' || item.imgNum === '03') {
      item.imgNum = '15';
    }
  }

  return " \n      <li class=\"dateList swiper-slide\">\n        <a href=\"#\">\n          <p class=\" times fw-bold text-nowrap\">".concat(item.time, "</p>\n          <img src=\"./assets/images/dateListIcon").concat(item.imgNum, ".svg\" alt=\"dateListIcon\" class=\"dateListIcon\">\n          <p class=\"temperatureSmall fw-bold\">").concat(item["do"], "\u2103</p>\n        </a>\n      </li>");
} //當週資料重新整理成乾淨陣列


var weekData = [];

function weekNewData(arr) {
  var a = arr.filter(function (item) {
    return item.description === '天氣現象';
  });
  var b = a.map(function (item) {
    return item.time;
  });
  var c = b[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[1].value;
    }

    return undefined;
  });
  c = c.filter(function (val) {
    return val !== undefined;
  });
  var d = arr.filter(function (item) {
    return item.description === '平均溫度';
  });
  var e = d.map(function (item) {
    return item.time;
  });
  var f = e[0].map(function (item, index) {
    if (index === 0 || index === 2 || index === 4 || index === 6 || index === 8 || index === 10) {
      return item.elementValue[0].value;
    }

    return undefined;
  });
  f = f.filter(function (val) {
    return val !== undefined;
  });
  var g = [];
  c.forEach(function (item) {
    var e = {};
    e.imgNum = item;
    g.push(e);
  });
  var h = [];
  f.forEach(function (item, index) {
    var e = {};
    e.time = month + " / " + [dates + index];
    e["do"] = item;
    h.push(e);
  });
  var newArray = g.map(function (element, index) {
    return Object.assign(element, h[index]);
  });
  newArray = newArray.slice(0, 7);
  weekRender(newArray);
} //渲染畫面


function weekRender(item) {
  var str = '';
  item.forEach(function (item) {
    str += weekList(item);
  });
  weekBox.innerHTML = str;
}

function weekList(item) {
  var city = localStorage.getItem("allTown");
  return "\n    <li class=\"dateList swiper-slide\">\n      <a href=\"./county.html?city=".concat(city, "\"\n        <p class=\"times fw-bold text-nowrap\">").concat(item.time, "</p>\n        <img src=\"./assets/images/dateListIcon").concat(item.imgNum, ".svg\" alt=\"dateListIcon\" class=\"dateListIcon\">\n        <p class=\"temperatureSmall fw-bold\">").concat(item["do"], "\u2103</p>\n      </a>\n    </li>");
}

if (weekBox) {
  weekBox.addEventListener("click", function (e) {
    var area = localStorage.getItem("city");
    console.log(area);
    var selectArea = area;
    localStorage.setItem("selected", selectArea);
  });
}
"use strict";

var layoutURL1 = "".concat(openDataUrl, "F-D0047-009?").concat(authorization);
var layoutURL2 = "".concat(openDataUrl, "F-D0047-085?").concat(authorization);
var layoutURL3 = "".concat(openDataUrl, "F-D0047-013?").concat(authorization);
var layoutURL4 = "".concat(openDataUrl, "F-D0047-069?").concat(authorization);
var layoutURL5 = "".concat(openDataUrl, "F-D0047-001?").concat(authorization);
var layoutURL6 = "".concat(openDataUrl, "F-D0047-025?").concat(authorization);
var layoutURL7 = "".concat(openDataUrl, "F-D0047-077?").concat(authorization);
var layoutURL8 = "".concat(openDataUrl, "F-D0047-065?").concat(authorization);
var layoutURL9 = "".concat(openDataUrl, "F-D0047-017?").concat(authorization);
var layoutURL10 = "".concat(openDataUrl, "F-D0047-061?").concat(authorization);
var layoutURL11 = "".concat(openDataUrl, "F-D0047-021?").concat(authorization);
var layoutURL12 = "".concat(openDataUrl, "F-D0047-045?").concat(authorization);
var layoutURL13 = "".concat(openDataUrl, "F-D0047-049?").concat(authorization);
var layoutURL14 = "".concat(openDataUrl, "F-D0047-005?").concat(authorization);
var layoutURL15 = "".concat(openDataUrl, "F-D0047-041?").concat(authorization);
var layoutURL16 = "".concat(openDataUrl, "F-D0047-081?").concat(authorization);
var layoutURL17 = "".concat(openDataUrl, "F-D0047-037?").concat(authorization);
var layoutURL18 = "".concat(openDataUrl, "F-D0047-057?").concat(authorization);
var layoutURL19 = "".concat(openDataUrl, "F-D0047-029?").concat(authorization);
var layoutURL20 = "".concat(openDataUrl, "F-D0047-033?").concat(authorization);
var layoutURL21 = "".concat(openDataUrl, "F-D0047-073?").concat(authorization);
var layoutURL22 = "".concat(openDataUrl, "F-D0047-053?").concat(authorization);
var promise1 = axios.get(layoutURL1);
var promise2 = axios.get(layoutURL2);
var promise3 = axios.get(layoutURL3);
var promise4 = axios.get(layoutURL4);
var promise5 = axios.get(layoutURL5);
var promise6 = axios.get(layoutURL6);
var promise7 = axios.get(layoutURL7);
var promise8 = axios.get(layoutURL8);
var promise9 = axios.get(layoutURL9);
var promise10 = axios.get(layoutURL10);
var promise11 = axios.get(layoutURL11);
var promise12 = axios.get(layoutURL12);
var promise13 = axios.get(layoutURL13);
var promise14 = axios.get(layoutURL14);
var promise15 = axios.get(layoutURL15);
var promise16 = axios.get(layoutURL16);
var promise17 = axios.get(layoutURL17);
var promise18 = axios.get(layoutURL18);
var promise19 = axios.get(layoutURL19);
var promise20 = axios.get(layoutURL20);
var promise21 = axios.get(layoutURL21);
var promise22 = axios.get(layoutURL22);
var totalData = [];
Promise.all([promise1, promise2, promise3, promise4, promise5, promise6, promise7, promise8, promise9, promise10, promise11, promise12, promise13, promise14, promise15, promise16, promise17, promise18, promise19, promise20, promise21, promise22]).then(function (response) {
  var List1 = response[0].data.records.locations[0];
  var List2 = response[1].data.records.locations[0];
  var List3 = response[2].data.records.locations[0];
  var List4 = response[3].data.records.locations[0];
  var List5 = response[4].data.records.locations[0];
  var List6 = response[5].data.records.locations[0];
  var List7 = response[6].data.records.locations[0];
  var List8 = response[7].data.records.locations[0];
  var List9 = response[8].data.records.locations[0];
  var List10 = response[9].data.records.locations[0];
  var List11 = response[10].data.records.locations[0];
  var List12 = response[11].data.records.locations[0];
  var List13 = response[12].data.records.locations[0];
  var List14 = response[13].data.records.locations[0];
  var List15 = response[14].data.records.locations[0];
  var List16 = response[15].data.records.locations[0];
  var List17 = response[16].data.records.locations[0];
  var List18 = response[17].data.records.locations[0];
  var List19 = response[18].data.records.locations[0];
  var List20 = response[19].data.records.locations[0];
  var List21 = response[20].data.records.locations[0];
  var List22 = response[21].data.records.locations[0];
  totalData = [List1, List2, List3, List4, List5, List6, List7, List8, List9, List10, List11, List12, List13, List14, List15, List16, List17, List18, List19, List20, List21, List22];
  renderCity(totalData);
  changeCity(totalData);
});
var cityHtml = "";
var number = 1;
var areaHtml = "";
var sideMenuCity = document.getElementById("sideMenuCity");
var sideMenuArea = document.getElementById("sideMenuArea");

function renderCity(obj) {
  totalData.forEach(function (obj) {
    // console.log(obj.locationsName);
    cityHtml += "<option id=\"".concat(number, "\">").concat(obj.locationsName, "</option>");
    number++;
  });
  sideMenuCity.innerHTML = cityHtml;
  areaRender(sideMenuCity.value);
}

var sure = document.querySelector(".sure");

function areaRender(value) {
  areaHtml = "";
  var areaObj = totalData.filter(function (obj) {
    return obj.locationsName === value;
  });
  var areaNumber = 1;
  areaObj[0].location.forEach(function (item) {
    areaHtml += "<option id=\"".concat(areaNumber, "\" value=\"").concat(item.locationName, "\">").concat(item.locationName, "</option>");
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
var sideMenuMemoryCity = document.querySelector(".sideMenuMemoryCity");
var sideMenuData = [];

function sideMenuInit() {
  axios.get("https://json-server-vercel-cdsp.vercel.app/collects").then(function (response) {
    sideMenuData = response.data;
    renderData();
  });
}

function renderData() {
  var str = "";
  sideMenuData.forEach(function (item) {
    str += "<li class=\"sideMenuListMemory\"><a href=\"./index.html\" class=\"memoryCityList py-3\">".concat(item.allTown, "\uFF0E").concat(item.city, "</a><input class=\"listDelete\" type=\"button\" data-num=\"").concat(item.id, "\" value=\"\u522A\u9664\"></li>");
  });
  sideMenuMemoryCity.innerHTML = str;
}

sure.addEventListener("click", function (e) {
  var obj = {};
  obj.allTown = sideMenuCity.value;
  obj.city = sideMenuArea.value;
  axios.post("https://json-server-vercel-cdsp.vercel.app/collects", obj).then(function (res) {
    // console.log(res);
    sideMenuInit();
  })["catch"](function (error) {
    console.log(error);
  });
});
sideMenuMemoryCity.addEventListener("click", function (e) {
  e.preventDefault();
  var allTown = e.target.innerHTML.split("．")[0];
  var city = e.target.innerHTML.split("．")[1];
  localStorage.setItem("allTown", allTown);
  localStorage.setItem("city", city);
  var x = localStorage.getItem("city");

  if (x == "undefined") {
    place.innerHTML = "\uFF0E";
  } else {
    place.innerHTML = "".concat(allTown, "\uFF0E").concat(city);
  }

  newRenderInfo();
});
sideMenuMemoryCity.addEventListener("click", function (e) {
  e.preventDefault();

  if (e.target.getAttribute("class") !== "listDelete") {
    return;
  }

  var num = e.target.getAttribute("data-num");
  axios["delete"]("https://json-server-vercel-cdsp.vercel.app/collects/".concat(num)).then(function (res) {
    // console.log(res);
    alert("刪除成功！");
    indexInit();
    sideMenuInit();
  })["catch"](function (error) {
    console.log(error);
  });
});
var locationIcon = document.querySelector(".locationIcon");

if (locationIcon) {
  locationIcon.addEventListener("click", function (e) {
    alert("重新定位");
    indexInit();
  });
}
"use strict";

//登入post      login
var signInAccount = document.querySelector(".signInAccount");
var signInPassword = document.querySelector(".signInPassword");
var signInSend = document.querySelector(".signInSend");
var signInform = document.querySelector(".signInform"); // console.log(signInAccount, signInPassword, signInSend);
//登入監聽

if (true) {
  signInSend.addEventListener("click", function (e) {
    callSignIn(); // e.preventDefault();
  });
}

function callSignIn() {
  if (signInAccount.value === "" || signInPassword.value === "") {
    alert("請輸入正確資料");
    return;
  }

  var signInObj = {};
  signInObj.email = signInAccount.value;
  signInObj.password = signInPassword.value; // console.log(signUpObj);

  axios.post("https://json-server-vercel-cdsp.vercel.app/login", signInObj).then(function (response) {
    var token = response.data.accessToken;
    var id = response.data.user.id;
    var email = response.data.user.email;
    localStorage.setItem("id", id);
    localStorage.setItem("email", email);
    localStorage.setItem("token", token);

    if (response.status === 200) {
      alert("登入成功");
      signInform.reset();
      window.location.replace("./index.html");
      indexRender();
    }
  })["catch"](function (error) {
    alert("帳號或密碼錯誤~請重新輸入");
    signInform.reset();
  });
}
"use strict";

//註冊post     register
var signUpAccount = document.querySelector(".signUpAccount");
var signUpPassword = document.querySelector(".signUpPassword");
var signUpSend = document.querySelector(".signUpSend");
var signUpform = document.querySelector(".signUpform"); //註冊監聽

if (true) {
  signUpSend.addEventListener("click", function (e) {
    callSignUp();
  });
}

function callSignUp() {
  if (signUpAccount.value === "" || signUpPassword.value === "") {
    alert("請輸入正確資料");
    return;
  }

  var signUpObj = {};
  signUpObj.email = signUpAccount.value;
  signUpObj.password = signUpPassword.value; // console.log(signUpObj);

  axios.post("https://json-server-vercel-cdsp.vercel.app/register", signUpObj).then(function (response) {
    // console.log(response.status);
    if (response.status === 201) {
      alert("註冊成功");
    }

    signUpform.reset();
  })["catch"](function (error) {
    alert("帳號註冊失敗，有可能有人用你的email註冊！"); // window.location.reload("/index.html");

    signUpform.reset();
  });
}
"use strict";

//首頁tab
var swiper = new Swiper(".mySwiper", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24
    }
  }
}); //首頁tab2

var swiperTwo = new Swiper(".mySwiperTwo", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 12
    },
    992: {
      slidesPerView: 6,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24
    }
  }
}); //各城市tab

var TownSwiper = new Swiper(".myTownSwiper", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24
    }
  }
}); //各城市tab

var myCountySwiper = new Swiper(".myCountySwiper", {
  observer: true,
  observeParents: true,
  autoplayDisableOnInteraction: false,
  slidesPerView: 3,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    576: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 16
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 24
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 24
    }
  }
});
//# sourceMappingURL=all.js.map
