//登入post      login
const signInAccount = document.querySelector(".signInAccount");
const signInPassword = document.querySelector(".signInPassword");
const signInSend = document.querySelector(".signInSend");
const signInform = document.querySelector(".signInform");
// console.log(signInAccount, signInPassword, signInSend);

//登入監聽

if (true) {
  signInSend.addEventListener("click", function (e) {
    callSignIn();
    // e.preventDefault();
  });
}

function callSignIn() {
  if (signInAccount.value === "" || signInPassword.value === "") {
    alert("請輸入正確資料");
    return;
  }
  let signInObj = {};
  signInObj.email = signInAccount.value;
  signInObj.password = signInPassword.value;
  // console.log(signUpObj);
  axios
    .post("https://json-server-vercel-cdsp.vercel.app/login", signInObj)
    .then(function (response) {
      const token = response.data.accessToken;
      const id = response.data.user.id;
      const email = response.data.user.email;
      localStorage.setItem("id", id);
      localStorage.setItem("email", email);
      localStorage.setItem("token", token);
      if (response.status === 200) {
        alert("登入成功");
        signInform.reset();
        window.location.replace("./index.html");
        indexRender();
      }
    })
    .catch(function (error) {
      alert("帳號或密碼錯誤~請重新輸入");
      signInform.reset();
    });
}
