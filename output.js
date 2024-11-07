//Thu Nov 07 2024 18:08:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function abc() {
  var _0x337eb1 = dc();
  $.ajax({
    "type": "GET",
    "url": originPath + _0x337eb1,
    "timeout": 10000,
    "success": function (_0x28f67a) {
      if (_0x28f67a.code == 200) {
        if (_0x28f67a.data.code == 200) {
          sessionStorage.setItem("ffb", _0x28f67a.data.a);
          sessionStorage.setItem(STR, _0x28f67a.data.str);
          getTask();
        } else 302 == _0x28f67a.data.code ? (titleText2.text("请进入公众号进行文章阅读"), $("#myModal2").show(), timerTask2()) : (titleText2.text("任务失效了！请返回"), $("#myModal2").show(), timerTask2());
      } else titleText2.text("访问出错了，请返回重试。"), $("#myModal2").show(), timerTask2();
    },
    "error": function (_0x5cc312, _0x3810bd) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}