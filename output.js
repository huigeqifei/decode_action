//Wed Feb 05 2025 07:30:37 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function abc() {
  var _0xe3ab21 = dc();
  $.ajax({
    "type": "GET",
    "url": originPath + _0xe3ab21,
    "timeout": 10000,
    "success": function (_0x1b0a10) {
      {
        if (_0x1b0a10.code == 200) {
          if (_0x1b0a10.data.code == 200) sessionStorage.setItem("ffb", _0x1b0a10.data.a), sessionStorage.setItem(STR, _0x1b0a10.data.str), getTask();else {
            if (302 == _0x1b0a10.data.code) titleText2.text("请进入公众号进行文章阅读"), $("#myModal2").show(), timerTask2();else {
              titleText2.text("任务失效了！请返回");
              $("#myModal2").show();
              timerTask2();
            }
          }
        } else titleText2.text("访问出错了，请返回重试。"), $("#myModal2").show(), timerTask2();
      }
    },
    "error": function (_0xca068c, _0x3e1f14) {
      titleText2.text("请求超时了！返回重试");
      $("#myModal2").show();
      timerTask2();
    }
  });
}