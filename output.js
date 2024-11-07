//Thu Nov 07 2024 18:09:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function initDate() {
  sessionStorage.setItem(START_NUM, "0");
  sessionStorage.setItem(TOKEN, getTempValue());
  sessionStorage.setItem(STR, getParamValue(STR));
  abc();
}