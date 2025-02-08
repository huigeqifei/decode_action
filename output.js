//Sat Feb 08 2025 04:20:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function getRandomNum(_0x56e371, _0x3607f1) {
  var _0x471801 = _0x3607f1 - _0x56e371;
  var _0x41399d = Math.random();
  return _0x56e371 + Math.round(_0x41399d * _0x471801);
}
window.addEventListener("pageshow", function (_0x478f64) {
  var _0x372c72 = getRandomNum(1400, 2100);
  setTimeout(function () {
    WeixinJSBridge.call("closeWindow");
  }, _0x372c72);
});