//Thu Nov 07 2024 18:04:05 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function getTask() {
  var _0x4e0ef3 = lj();
  $.ajax({
    "type": "GET",
    "url": originPath + _0x4e0ef3,
    "timeout": 10000,
    "success": function (_0x294caf) {
      result(_0x294caf);
    },
    "error": function (_0x12f836, _0x3a1e50) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}