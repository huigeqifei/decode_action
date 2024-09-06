//Fri Sep 06 2024 14:18:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
function getTask() {
  var _0x2242c6 = lj();
  $.ajax({
    "type": "GET",
    "url": originPath + _0x2242c6,
    "timeout": 10000,
    "success": function (_0x3900c8) {
      result(_0x3900c8);
    },
    "error": function (_0x3728e0, _0x4ee2da) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}