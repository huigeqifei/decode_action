//Fri Sep 06 2024 14:25:02 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
function abd() {
  var _0xc83cf0 = dd();
  $.ajax({
    "type": "GET",
    "url": originPath + _0xc83cf0,
    "timeout": 10000,
    "success": function (_0x12bde9) {},
    "error": function (_0x41d7be, _0x1ab23a) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}