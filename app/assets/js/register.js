//註冊post     register
const signUpAccount = document.querySelector(".signUpAccount");
const signUpPassword = document.querySelector(".signUpPassword");
const signUpSend = document.querySelector(".signUpSend");
const signUpform = document.querySelector(".signUpform");

//註冊監聽
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
  let signUpObj = {};
  signUpObj.email = signUpAccount.value;
  signUpObj.password = signUpPassword.value;
  // console.log(signUpObj);

  axios
    .post("https://json-server-vercel-cdsp.vercel.app/register", signUpObj)
    .then(function (response) {
      // console.log(response.status);
      if (response.status === 201) {
        alert("註冊成功");
      }
      signUpform.reset();
    })
    .catch(function (error) {
      alert("帳號註冊失敗，有可能有人用你的email註冊！");
      // window.location.reload("/index.html");
      signUpform.reset();
    });
}
