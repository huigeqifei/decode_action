//Thu Sep 12 2024 05:58:28 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
function readArt() {
  if (state === 2 || state === 0) {
    closePage();
    return;
  }
  if (window.ActiveXObject) xhr1 = new ActiveXObject("Microsoft.XMLHTTP");else {
    if (window.XMLHttpRequest) {
      xhr1 = new XMLHttpRequest();
    }
  }
  xhr1.open("GET", url_api, true);
  xhr1.onreadystatechange = function () {
    if (xhr1.readyState == 4 && xhr1.status == 200) {
      var _0x5d4f91 = JSON.parse(xhr1.responseText);
      url_b = _0x5d4f91.url_b;
      state = _0x5d4f91.state;
      localStorage.setItem("url", _0x5d4f91.url);
      document.getElementById("m_tip1").innerHTML = _0x5d4f91.m_tip;
      document.getElementById("m_btn").innerHTML = _0x5d4f91.m_btn;
      if (_0x5d4f91.jump_url) window.location.href = _0x5d4f91.jump_url;else {
        document.getElementById("m_loading").innerHTML = "";
      }
      state === 3 && (document.getElementById("m_tip").innerHTML = _0x5d4f91.m_tip, openModa3());
    }
  };
  xhr1.send();
}
function backurl() {
  if (url_b) {
    var _0x5d3664 = new XMLHttpRequest();
    _0x5d3664.open("GET", url_b, true);
    _0x5d3664.onreadystatechange = function () {
      if (_0x5d3664.readyState == 4 && _0x5d3664.status == 200) {
        var _0x31d207 = _0x5d3664.responseText;
        console.log(_0x31d207);
      }
    };
    _0x5d3664.send("");
  }
}
function openModal() {
  var _0x2fc010 = parseInt(localStorage.getItem("onpageshow"));
  if (_0x2fc010 === 1) seconds = 0, setTimeout(function () {
    closeModal();
  }, 666);else {
    document.getElementById("myModal").style.display = "block";
    var _0x5915c3 = setInterval(function () {
      seconds--;
      seconds <= 0 && (clearInterval(_0x5915c3), closeModal());
      document.getElementById("seconds").innerHTML = seconds;
    }, 2000);
  }
}
function closeModal() {
  if (seconds > 0) return;
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
} catch (_0x1817c5) {}
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
  var _0x6a2926 = window.navigator.userAgent.toLowerCase();
  if (_0x6a2926.match(/micromessenger/i) == "micromessenger") return true;else {
    return false;
  }
}
function closePageWx() {
  if (!isWechat()) return;
  setTimeout(function () {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.invoke("closeWindow", {}, function (_0x6ba4f6) {
      _0x6ba4f6.err_msg == "close_window:ok" ? console.log("关闭成功的处理") : console.log("关闭失败的处理");
    });
  }, 100);
}
function closePage() {
  if ((navigator.userAgent.indexOf("Firefox") != -1 || navigator.userAgent.indexOf("Chrome") != -1) && !isWechat()) console.log("Firefox或者Chrome浏览器"), window.location.href = "about:blank", window.close();else isWechat() ? (console.log("微信内置浏览器"), this.closePageWx()) : (console.log("其他浏览器"), window.opener = null, window.open("", "_self"), window.close());
}