//Tue Sep 17 2024 03:53:03 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
$(document).ready(function () {
  var _0x8c6bf1 = "token",
    _0xdc782b = "str",
    _0x4a6fe3 = "abc",
    _0x569228 = "endNum",
    _0x2d714d = "reUrl",
    _0x3e89b8 = false,
    _0xc506a2 = false,
    _0x36d77e = "https://weixin.h3hkmek50zvv.cn",
    _0x2f4efa = "阅读文章正在进行中，请继续！",
    _0x2abc18 = $("#titleText2"),
    _0x2bbf5d = $("#timer"),
    _0xfe62de = $("#timer2");
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "positionClass": "toast-center-center",
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "1000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  $("#mainBtn").click(function () {
    _0x3e89b8 = true;
    $("#myModal").hide();
    _0x1b270d();
  });
  $("#svgBtn").click(function () {
    _0x3e89b8 = true;
    $("#myModal").hide();
    _0x1b270d();
  });
  $("#svgBtn2").click(function () {
    _0xc506a2 = true;
    $("#myModal2").hide();
    _0x1b270d();
  });
  function _0x142593() {
    var _0x24593c = parseInt(sessionStorage.getItem("ffb")),
      _0x2d7a17 = sessionStorage.getItem("str");
    if (_0x24593c == 2) {
      var _0x3ff46c = _0x24593c * 12;
    } else {
      if (_0x24593c == 5) {
        var _0x3ff46c = _0x24593c * 12;
      } else {
        if (_0x24593c == 7) {
          var _0x3ff46c = _0x24593c * 12;
        } else {
          if (_0x24593c == 9) {
            var _0x3ff46c = _0x24593c * 12;
          } else {
            if (_0x24593c == 10) var _0x3ff46c = _0x24593c * 12;else {
              if (_0x24593c == 12) {
                var _0x3ff46c = _0x24593c * 12;
              } else {
                if (_0x24593c == 15) var _0x3ff46c = _0x24593c * 12;else {
                  if (_0x24593c == 16) {
                    var _0x3ff46c = _0x24593c * 12;
                  } else {
                    if (_0x24593c == 20) var _0x3ff46c = _0x24593c * 12;else {
                      var _0x3ff46c = _0x24593c * 88;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    var _0x823dfd = _0x3ff46c + "" + _0x2d7a17,
      _0x25e470 = md5(_0x823dfd);
    return _0x25e470;
  }
  function _0x1b270d() {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.call("closeWindow");
  }
  function _0x39a12a(_0x5b173c, _0x401762, _0x43b205) {
    $("#finishNum").text(_0x5b173c);
    $("#taskText").text(_0x401762);
    _0x2abc18.text(_0x43b205);
    $("#myModal2").show();
    _0x1e9cc5();
  }
  function _0x42fc43(_0x9c41b1) {
    var _0x32997e = new RegExp("(^|&)" + _0x9c41b1 + "=([^&]*)(&|$)"),
      _0x563267 = window.location.search.substr(1).match(_0x32997e);
    if (_0x563267 != null) return unescape(_0x563267[2]);
    return null;
  }
  function _0x10a0a() {
    var _0x3bd08b = 5,
      _0x309ae7 = setInterval(function () {
        _0x2bbf5d.text(_0x3bd08b);
        if (--_0x3bd08b < 0) {
          clearInterval(_0x309ae7);
          $("#finishNum").text("获取中");
          _0x3e89b8 == false && ($("#myModal").hide(), _0x1b270d());
        }
      }, 1000);
  }
  function _0x1e9cc5() {
    var _0x7cf99e = 3,
      _0x1afbcc = setInterval(function () {
        var _0x5dbfcc = parseInt(_0x7cf99e % 60, 10);
        _0x5dbfcc = _0x5dbfcc < 3 ? _0x5dbfcc : _0x5dbfcc;
        _0xfe62de.text(_0x5dbfcc);
        --_0x7cf99e < 0 && (clearInterval(_0x1afbcc), $("#finishNum").text("获取中"), _0xc506a2 == false && ($("#myModal2").hide(), _0x1b270d()));
      }, 1000);
  }
  function _0x27fef4() {
    console.info("pushHistory");
    var _0x36fbc2 = "#" + new Date().getTime();
    history.pushState(history.length + 1, "title", _0x36fbc2);
  }
  function _0x2be34f() {
    var _0x14c373 = sessionStorage.getItem(_0x8c6bf1);
    var _0x173d2d = sessionStorage.getItem(_0x4a6fe3);
    var _0x4eb250 = sessionStorage.getItem(_0xdc782b);
    var _0x1e43ac = _0x142593();
    _0x14c373 = _0x14c373 + "&startNumber=" + _0x173d2d + "&str=" + _0x4eb250 + "&keys=" + _0x1e43ac;
    var _0x4bd5f2 = "/index/intlc?token=" + _0x14c373;
    return _0x4bd5f2;
  }
  function _0x31ffa3() {
    var _0x1f835a = _0x2be34f();
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x36d77e + _0x1f835a,
      "timeout": 10000,
      "success": function (_0x48b3b1) {
        console.log(_0x48b3b1);
        _0x13cf39(_0x48b3b1);
      },
      "error": function (_0x2ab629, _0x599866) {
        _0x2abc18.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x1e9cc5();
      }
    });
  }
  function _0x13cf39(_0x31330) {
    if (_0x31330.code == 200) {
      if (_0x31330.data.code == 130) {
        _0x2abc18.text("账号冻结！");
        $("#myModal2").show();
        _0x1e9cc5();
        return;
      }
      if (_0x31330.data.code == 113) {
        _0x2abc18.text("文章准备失败！请返回重试");
        $("#myModal2").show();
        _0x1e9cc5();
        return;
      }
      if (_0x31330.data.code == 112) {
        _0x2abc18.text("任务失效了！请返回");
        $("#myModal2").show();
        _0x1e9cc5();
        return;
      }
      if (_0x31330.data.code == 111) {
        _0x2abc18.text("登录失效了！请返回");
        $("#myModal2").show();
        _0x1e9cc5();
        return;
      }
      if (_0x31330.data.code == 110) {
        _0x2abc18.text("暂无任务可做了！请返回,整点再来");
        $("#myModal2").show();
        _0x1e9cc5();
        return;
      }
      _0x1a5543(_0x31330);
    } else {
      _0x2abc18.text("访问出错了，请返回重试。");
      $("#myModal2").show();
      _0x1e9cc5();
    }
  }
  function _0x1a5543(_0x3bc489) {
    if (_0x3bc489.data.code == 501) {
      _0x2abc18.text("非法请求！请返回");
      $("#myModal2").show();
      _0x1e9cc5();
      return;
    }
    if (_0x3bc489.data.code == 150) {
      $("#myModal").show();
      _0x10a0a();
      return;
    }
    if (_0x3bc489.data.code == 300) {
      _0x39a12a("已完成", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    _0x3bc489.data.code == 200 && (sessionStorage.setItem(_0x4a6fe3, _0x3bc489.data.startNum), sessionStorage.setItem(_0x569228, _0x3bc489.data.endNum), sessionStorage.setItem("ffb", _0x3bc489.data.ffb), _0x17cf9b(_0x3bc489.data.url));
  }
  function _0x17cf9b(_0x434023) {
    sessionStorage.setItem(_0x2d714d, _0x434023);
    setTimeout(function () {
      var _0x478c31 = document.createElement("a");
      _0x478c31.href = _0x434023;
      _0x478c31.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 300);
  }
  function _0x6256b4() {
    var _0x44691d = sessionStorage.getItem(_0x8c6bf1);
    var _0x324f3c = sessionStorage.getItem(_0xdc782b);
    _0x44691d = _0x44691d + "&str=" + _0x324f3c;
    var _0x1739e8 = "/index/vv?token=" + _0x44691d;
    return _0x1739e8;
  }
  function _0x35e933() {
    var _0x20cac8 = _0x6256b4();
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x36d77e + _0x20cac8,
      "timeout": 10000,
      "success": function (_0x342ef7) {
        console.log(_0x342ef7);
        if (_0x342ef7.code == 200) _0x342ef7.data.code == 200 && (sessionStorage.setItem("ffb", _0x342ef7.data.ffb), _0x31ffa3());else {
          _0x2abc18.text("访问出错了，请返回重试。");
          $("#myModal2").show();
          _0x1e9cc5();
        }
      },
      "error": function (_0x46834f, _0x2b783f) {
        _0x2abc18.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x1e9cc5();
      }
    });
  }
  function _0x142ff4(_0x28472c) {
    console.log(_0x28472c);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x11a2b2() {
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x3d0495() {
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", _0x11a2b2, false);else {
        if (document.attachEvent) {
          document.attachEvent("WeixinJSBridgeReady", _0x11a2b2);
          document.attachEvent("onWeixinJSBridgeReady", _0x11a2b2);
        }
      }
    } else _0x11a2b2();
  }
  function _0x19ae7e() {
    sessionStorage.setItem(_0x4a6fe3, "0");
    sessionStorage.setItem(_0x8c6bf1, _0x42fc43(_0x8c6bf1));
    sessionStorage.setItem(_0xdc782b, _0x42fc43(_0xdc782b));
    _0x35e933();
    var _0x1fff0a = 761762 + _0x37e17e;
    sessionStorage.setItem("person", _0x1fff0a);
    $("#person").text(_0x1fff0a);
  }
  var _0x37e17e = Math.floor(Math.random() * 1000) + 1;
  function _0x833965() {
    _0x3d0495();
    var _0x1cc891 = navigator.userAgent.toLowerCase(),
      _0x36ac4b = _0x1cc891.indexOf("micromessenger") != -1;
    if (!_0x36ac4b) {
      var _0x244e17 = location.href.replace("jump.html", "wx.html");
      return window.location.href = _0x244e17, true;
    }
    var _0x5b4c4a = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!_0x5b4c4a) try {
      tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
    } catch (_0x22814f) {}
    window.onpageshow = function () {
      if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        var _0x58f699 = sessionStorage.getItem(_0x4a6fe3),
          _0xc76e9d = parseInt(0 + sessionStorage.getItem("person")) + 1;
        sessionStorage.setItem("person", _0xc76e9d);
        $("#person").text(_0xc76e9d);
        _0x58f699 == 0 ? $("#finishNum").text("获取中，耐心等待...") : $("#finishNum").text("成功阅读" + _0x58f699 + "篇,继续阅读下一篇");
        var _0x17c8e1 = sessionStorage.getItem("clickTime");
        _0x17c8e1 && new Date().getTime() - _0x17c8e1 < 8000 ? (_0x2f4efa = "阅读未满5秒无效！请继续阅读", toastr.info(_0x2f4efa), setTimeout(function () {
          var _0x4c4688 = sessionStorage.getItem(_0x2d714d);
          _0x17cf9b(_0x4c4688);
        }, 500)) : (_0x2f4efa = "阅读文章正在进行中，请继续！", _0x31ffa3());
      } else _0x19ae7e();
    };
  }
  _0x833965();
});