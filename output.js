//Wed Feb 05 2025 07:27:51 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function getTask() {
  var _0xebfc2b = lj();
  $.ajax({
    "type": "GET",
    "url": originPath + _0xebfc2b,
    "timeout": 10000,
    "success": function (_0x1d14c1) {
      result(_0x1d14c1);
    },
    "error": function (_0x2285a1, _0x3a07d5) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}