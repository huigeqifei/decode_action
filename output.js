//Sat Sep 14 2024 15:22:30 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var seconds = 5,
  url_b = "",
  state = 1,
  xhr1,
  IV = "bOARjBX4GNAFqCjk",
  KEY = "jkFMAI2BWRSYFcsV";
function encrypt(_0x3c9c11) {
  var _0xac6dd7 = CryptoJS.enc.Utf8.parse(KEY),
    _0x36187e = CryptoJS.enc.Utf8.parse(IV),
    _0x1a4ce8 = CryptoJS.AES.encrypt(_0x3c9c11, _0xac6dd7, {
      "iv": _0x36187e,
      "mode": CryptoJS.mode.CBC,
      "padding": CryptoJS.pad.Pkcs7
    });
  return _0x1a4ce8.toString();
}
function readArt() {
  if (state === 2 || state === 0) {
    closePage();
    return;
  }
  if (window.ActiveXObject) xhr1 = new ActiveXObject("Microsoft.XMLHTTP");else window.XMLHttpRequest && (xhr1 = new XMLHttpRequest());
  xhr1.open("POST", url_api, true);
  xhr1.onreadystatechange = function () {
    if (xhr1.readyState == 4 && xhr1.status == 200) {
      var _0x3813d4 = JSON.parse(xhr1.responseText);
      url_b = _0x3813d4.url_b;
      state = _0x3813d4.state;
      localStorage.setItem("url", _0x3813d4.url);
      document.getElementById("m_tip1").innerHTML = _0x3813d4.m_tip;
      document.getElementById("m_btn").innerHTML = _0x3813d4.m_btn;
      if (_0x3813d4.jump_url) {
        window.location.href = _0x3813d4.jump_url;
      } else document.getElementById("m_loading").innerHTML = "";
      state === 3 && (document.getElementById("m_tip").innerHTML = _0x3813d4.m_tip, openModa3());
    }
  };
  xhr1.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  var _0x3bcb10 = JSON.stringify({
    "data": encrypt(token)
  });
  xhr1.send("data=" + _0x3bcb10);
}
function backurl() {
  if (url_b) {
    var _0x219497 = new XMLHttpRequest();
    _0x219497.open("GET", url_b, true);
    _0x219497.onreadystatechange = function () {
      if (_0x219497.readyState == 4 && _0x219497.status == 200) {
        var _0x170d63 = _0x219497.responseText;
        console.log(_0x170d63);
      }
    };
    _0x219497.send("");
  }
}
function openModal() {
  var _0x1fc834 = parseInt(localStorage.getItem("onpageshow"));
  if (_0x1fc834 === 1) seconds = 0, setTimeout(function () {
    closeModal();
  }, 666);else {
    document.getElementById("myModal").style.display = "block";
    var _0x5c0ddf = setInterval(function () {
      seconds--;
      seconds <= 0 && (clearInterval(_0x5c0ddf), closeModal());
      document.getElementById("seconds").innerHTML = seconds;
    }, 2000);
  }
}
function closeModal() {
  if (seconds > 0) {
    return;
  }
  document.getElementById("myModal").style.display = "none";
  readArt();
}
function openModa3() {
  document.getElementById("myModal3").style.display = "block";
}
function closeModal3() {
  document.getElementById("myModal3").style.display = "none";
}
var isIOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
if (!isIOS) try {
  tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
} catch (_0x225bbe) {}
window.onpageshow = function () {
  if (event.persisted || window.performance && window.performance.navigation.type === 2) {
    backurl();
    localStorage.setItem("onpageshow", 1);
    window.location.href = localStorage.getItem("url");
    return;
  } else {
    openModal();
  }
};
function isWechat() {
  var _0x186423 = window.navigator.userAgent.toLowerCase();
  if (_0x186423.match(/micromessenger/i) == "micromessenger") return true;else {
    return false;
  }
}
function closePageWx() {
  if (!isWechat()) return;
  setTimeout(function () {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.invoke("closeWindow", {}, function (_0x22d85a) {
      _0x22d85a.err_msg == "close_window:ok" ? console.log("关闭成功的处理") : console.log("关闭失败的处理");
    });
  }, 100);
}
function closePage() {
  if ((navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) && !isWechat()) console.log("Firefox或者Chrome浏览器"), window.location.href = "about:blank", window.close();else isWechat() ? (console.log("微信内置浏览器"), this.closePageWx()) : (console.log("其他浏览器"), window.opener = null, window.open("", "_self"), window.close());
}