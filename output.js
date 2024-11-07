//Thu Nov 07 2024 18:06:39 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function result22(_0x5795a2) {
  if (_0x5795a2.data.code == 501) {
    titleText2.text("非法请求！请返回");
    $("#myModal2").show();
    timerTask2();
    return;
  }
  if (_0x5795a2.data.code == 150) {
    $("#myModal").show();
    timerTask();
    return;
  }
  if (_0x5795a2.data.code == 300) {
    overTask("已完成", "任务已完成，请返回。", "任务经完成！请返回");
    return;
  }
  _0x5795a2.data.code == 200 && (sessionStorage.setItem(START_NUM, _0x5795a2.data.startNum), sessionStorage.setItem(END_NUM, _0x5795a2.data.endNum), sessionStorage.setItem("ffb", _0x5795a2.data.ffb), readArt(_0x5795a2.data.url));
}