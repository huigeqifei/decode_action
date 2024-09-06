//Fri Sep 06 2024 14:23:52 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
function abc() {
  var _0x4ed8be = dc();
  $.ajax({
    "type": "GET",
    "url": originPath + _0x4ed8be,
    "timeout": 10000,
    "success": function (_0x17c93a) {
      if (_0x17c93a.code == 200) _0x17c93a.data.code == 200 && (sessionStorage.setItem("ffb", _0x17c93a.data.a), $("#myModal0").show(), timerTask0());else {
        titleText2.text("访问出错了，请返回重试。");
        $("#myModal2").show();
        timerTask2();
      }
    },
    "error": function (_0x1c2992, _0x19a1fe) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}