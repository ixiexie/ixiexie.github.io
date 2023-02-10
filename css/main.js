var interval = 1000;
function countdown(year, month, day, divname) {
  var now = new Date();
  var endDate = new Date(year, month - 1, day);
  var leftTime = endDate.getTime() - now.getTime();
  var leftsecond = parseInt(leftTime / 1000);
  //var day1=parseInt(leftsecond/(24*60*60*6));
  var day1 = Math.floor(leftsecond / (60 * 60 * 24));
  var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
  var minute = Math.floor(
    (leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60
  );
  var second = Math.floor(
    leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60
  );
  var cc = document.getElementById(divname);
  cc.innerHTML =
    "哈尼哈尼！! " +
    divname +
    "还有：" +
    day1 +
    "天" +
    hour +
    "小时" +
    minute +
    "分" +
    second +
    "秒";
}

function memo(year, month, day, divname) {
  var now = new Date();
  var endDate = new Date(year, month - 1, day);
  var leftTime = now.getTime() - endDate.getTime();
  var leftsecond = parseInt(leftTime / 1000);
  //var day1=parseInt(leftsecond/(24*60*60*6));
  var day1 = Math.floor(leftsecond / (60 * 60 * 24));
  var hour = Math.floor((leftsecond - day1 * 24 * 60 * 60) / 3600);
  var minute = Math.floor(
    (leftsecond - day1 * 24 * 60 * 60 - hour * 3600) / 60
  );
  var second = Math.floor(
    leftsecond - day1 * 24 * 60 * 60 - hour * 3600 - minute * 60
  );
  var cc = document.getElementById(divname);
  cc.innerHTML =
    "哈尼哈尼！! " +
    divname +
    "过去了：" +
    day1 +
    "天" +
    hour +
    "小时" +
    minute +
    "分" +
    second +
    "秒";
}


window.setInterval(function () {
  memo(2022, 10, 5, "我们在一起");
}, interval);

window.setInterval(function () {
    countdown(2023, 5, 30, "老公回家");
  }, interval);

window.setInterval(function () {
    countdown(2023, 5, 03, "下次小宝生日");
  }, interval);

window.setInterval(function () {
    countdown(2023, 11, 09, "下次老公生日");
  }, interval);
  