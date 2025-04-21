//Mon Apr 21 2025 02:08:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var package_name = "com.smile.gifmaker";
function _x00k_ll0xx01pl() {
  var _0x571dee = Module.findExportByName(null, "android_dlopen_ext");
  Interceptor.attach(_0x571dee, {
    onEnter: function (_0x537530) {
      var _0x1dff24 = _0x537530[0];
      if (_0x1dff24 != null && _0x1dff24 != undefined) {
        var _0xa1d8c8 = ptr(_0x1dff24).readCString();
        this.path = _0xa1d8c8;
        if (_0xa1d8c8.indexOf("cronet") != -1 || _0xa1d8c8.indexOf("ssl.so") != -1) {
          var _0x359b66 = _0xa1d8c8.split("/").pop();
          setTimeout(() => {
            h0192djy(_0x359b66);
          }, 200);
        }
      }
    },
    onLeave: function (_0x34f963) {}
  });
}
var _21k1ka0 = new Set();
function _kakakkkakkkkkkksanann(_0x3ea9d1) {
  Interceptor.attach(_0x3ea9d1, {
    onEnter: function (_0x2964f6) {
      this.ctx = _0x2964f6[0];
      this.mode = _0x2964f6[1].toInt32();
      this.callback = _0x2964f6[2];
      if (this.callback < 4096) {
        return;
      }
      if (_21k1ka0.has(this.callback.toString())) {
        return;
      }
      _21k1ka0.add(this.callback.toString());
      Interceptor.attach(this.callback, {
        onEnter: function (_0x1e1acb) {},
        onLeave: function (_0x36ed93) {
          if (_0x36ed93.toInt32() !== 0) {
            _0x36ed93.replace(0);
          }
        }
      });
    },
    onLeave: function (_0x43efe6) {}
  });
}
function snska100110921jrn(_0x14a7dd, _0x1e7598) {
  const _0x175a88 = Process.getModuleByName(_0x14a7dd);
  const _0x489102 = _0x175a88.enumerateRanges("--x");
  if (_0x489102 == null || _0x489102.length === 0) {
    return null;
  }
  _0x489102.forEach((_0x3f3bec, _0xa2dc12) => {
    console.log("  [" + _0xa2dc12 + "] " + _0x3f3bec.base + " - " + _0x3f3bec.base.add(_0x3f3bec.size) + " (" + _0x3f3bec.size + " bytes)");
    Memory.scan(_0x3f3bec.base, _0x3f3bec.size, _0x1e7598, {
      onMatch: function (_0x172700, _0x359389) {
        _kakakkkakkkkkkksanann(_0x172700);
      },
      onError: function (_0x3587a5) {},
      onComplete: function () {}
    });
  });
}
function fmap1p1ppa01nmalkaar(_0x14f907) {
  const _0x538e7d = Module.findBaseAddress(_0x14f907);
  if (!_0x538e7d) {
    return;
  }
  const _0x1877fb = Module.findExportByName(_0x14f907, "SSL_CTX_set_custom_verify");
  if (_0x1877fb) {
    _kakakkkakkkkkkksanann(_0x1877fb);
  } else {
    let _0x36631a = null;
    var _0x483d41 = Module.enumerateExports(_0x14f907);
    for (var _0x365a20 = 0; _0x365a20 < _0x483d41.length; _0x365a20++) {
      if (_0x483d41[_0x365a20].name.indexOf("set_custom_verify") !== -1) {
        console.log("[*] 函数名模糊匹配找到: " + _0x483d41[_0x365a20].name + " at address: " + _0x483d41[_0x365a20].address);
        _0x36631a = _0x483d41[_0x365a20].address;
        _kakakkkakkkkkkksanann(_0x36631a);
        return;
      }
    }
    snska100110921jrn(_0x14f907, "01 ?? ?? B9 02 ?? ?? F9 C0 03 5F D6");
  }
}
function h0192djy(_0x5bc8fc) {
  fmap1p1ppa01nmalkaar(_0x5bc8fc);
}
_x00k_ll0xx01pl();
function classExists(_0x47a109) {
  var _0x83515 = false;
  try {
    var _0x439a79 = Java.use(_0x47a109);
    _0x83515 = true;
  } catch (_0x145897) {}
  return _0x83515;
}
function loadDexfile(_0x5f0cee) {
  Java.perform(function () {
    Java.openClassFile(_0x5f0cee).load();
  });
}
var loadedXRadar = false;
function loadXRadarDexfile() {
  loadedXRadar = true;
  loadDexfile("/data/user/0/" + package_name + "/radar.dex");
}
loadXRadarDexfile();
function hasTrustManagerImpl() {
  return classExists("com.android.org.conscrypt.TrustManagerImpl");
}
function newArrayList() {
  var _0x3e5714 = Java.use("java.util.ArrayList");
  return _0x3e5714.$new();
}
function b0ringsslp() {
  try {
    if (classExists("org.chromium.net.CronetEngine$Builder")) {
      var _0x326e10 = Java.use("org.chromium.net.CronetEngine$Builder");
      _0x326e10.enablePublicKeyPinningBypassForLocalTrustAnchors.implementation = function (_0x108c92) {
        console.log("org.chromium.net.CronetEngine$Builder enablePublicKeyPinningBypassForLocalTrustAnchors was hooked!");
        return _0x326e10.enablePublicKeyPinningBypassForLocalTrustAnchors.call(this, true);
      };
      _0x326e10.addPublicKeyPins.implementation = function (_0xbeebec, _0x3d2fea, _0x1ba2de, _0x523109) {
        console.log("org.chromium.net.CronetEngine$Builder addPublicKeyPins was hooked, hostName = " + _0xbeebec);
        return this;
      };
    }
  } catch (_0x224540) {
    console.log(_0x224540);
  }
}
function kaooqpjakk10a() {
  var _0xe97689 = Java.use("android.webkit.WebViewClient");
  _0xe97689.onReceivedSslError.implementation = function (_0x233b8f, _0x46f829, _0x16b4dd) {
    console.log("WebViewClient onReceivedSslError was hooked!");
    _0x46f829.proceed();
    return;
  };
  _0xe97689.onReceivedError.overload("android.webkit.WebView", "int", "java.lang.String", "java.lang.String").implementation = function (_0x511bb2, _0x4aa3ca, _0x547ec1, _0x1dfecb) {
    console.log("WebViewClient onReceivedError was hooked!");
    return;
  };
  _0xe97689.onReceivedError.overload("android.webkit.WebView", "android.webkit.WebResourceRequest", "android.webkit.WebResourceError").implementation = function () {
    console.log("WebViewClient onReceivedError was hooked!");
    return;
  };
}
function klalo1mmmmal() {
  if (classExists("com.squareup.okhttp.CertificatePinner")) {
    var _0x1c4d53 = Java.use("com.squareup.okhttp.CertificatePinner");
    var _0x343365 = _0x1c4d53.check.overload("java.lang.String", "java.util.List");
    _0x343365.implementation = function (_0x553481, _0x1cb785) {
      console.log("com.squareup.okhttp.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!");
    };
  }
  if (classExists("okhttp3.CertificatePinner")) {
    try {
      var _0x21d0e6 = Java.use("okhttp3.CertificatePinner");
      var _0x490de1 = _0x21d0e6.check.overload("java.lang.String", "java.util.List");
      _0x490de1.implementation = function (_0xadc2a0, _0x197390) {
        console.log("okhttp3.CertificatePinner.check('java.lang.String', 'java.util.List') was hooked!");
      };
    } catch (_0x3b4e41) {
      console.error(_0x3b4e41);
    }
  }
  if (classExists("okhttp3.internal.tls.OkHostnameVerifier")) {
    try {
      var _0x1c010e = Java.use("okhttp3.internal.tls.OkHostnameVerifier");
      var _0x483f48 = _0x1c010e.verify.overload("java.lang.String", "javax.net.ssl.SSLSession");
      _0x483f48.implementation = function (_0x4e5139, _0x31513d) {
        console.log("okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'javax.net.ssl.SSLSession') was hooked!");
        return true;
      };
      var _0x2b3d86 = _0x1c010e.verify.overload("java.lang.String", "java.security.cert.X509Certificate");
      _0x2b3d86.implementation = function (_0x35c01d, _0x30b7c4) {
        console.log("okhttp3.internal.tls.OkHostnameVerifier.verify('java.lang.String', 'java.security.cert.X509Certificate') was hooked!");
        return true;
      };
    } catch (_0x53a0f6) {
      console.error(_0x53a0f6);
    }
  }
  if (classExists("okhttp3.OkHttpClient$Builder")) {
    try {
      var _0x25de29 = Java.use("okhttp3.OkHttpClient$Builder");
      var _0x3a2541 = _0x25de29.sslSocketFactory.overload("javax.net.ssl.SSLSocketFactory");
      _0x3a2541.implementation = function (_0xeda9fb) {
        var _0x8a85dd = _0x3a2541.call(this, Java.use("gz.justtrustme.Helper").getEmptySSLFactory());
        return _0x8a85dd;
      };
      var _0x472cba = _0x25de29.sslSocketFactory.overload("javax.net.ssl.SSLSocketFactory", "javax.net.ssl.X509TrustManager");
      _0x472cba.implementation = function (_0xd34699, _0x1ac723) {
        var _0x23ae9f = _0x472cba.call(this, Java.use("gz.justtrustme.Helper").getEmptySSLFactory(), _0x1ac723);
        return _0x23ae9f;
      };
    } catch (_0x4bea9d) {
      console.error(_0x4bea9d);
    }
  }
  if (classExists("com.squareup.okhttp.OkHttpClient")) {
    try {
      var _0x32bb96 = Java.use("com.squareup.okhttp.OkHttpClient");
      _0x32bb96.setCertificatePinner.implementation = function (_0x488422) {
        console.log("com.squareup.okhttp.setCertificatePinner was hooked!");
        return this;
      };
    } catch (_0x3f9f23) {
      console.log("com.squareup.okhttp not found");
    }
  }
}
function xmalk11o_JKKJKK() {
  if (classExists("org.xutils.http.RequestParams")) {
    var _0x561373 = Java.use("org.xutils.http.RequestParams");
    var _0x5aefd5 = _0x561373.setSslSocketFactory.overload("javax.net.ssl.SSLSocketFactory");
    _0x5aefd5.implementation = function (_0x36e87c) {
      console.log("org.xutils.http.RequestParams.setSslSocketFactory('javax.net.ssl.SSLSocketFactory') was hooked!");
      var _0x458320 = Java.use("gz.justtrustme.Helper");
      _0x5aefd5.call(this, _0x458320.getEmptySSLFactory());
    };
    var _0x357551 = _0x561373.setHostnameVerifier.overload("javax.net.ssl.HostnameVerifier");
    _0x357551.implementation = function (_0x27c0c5) {
      console.log("org.xutils.http.RequestParams.setHostnameVerifier('javax.net.ssl.HostnameVerifier') was hooked!");
      var _0xba2931 = Java.use("gz.justtrustme.ImSureItsLegitHostnameVerifier");
      _0x357551.call(this, _0xba2931.$new());
    };
  }
}
function xnalkak11ll0ppi0000000ppp() {
  if (classExists("ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier")) {
    var _0x53df19 = Java.use("ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier");
    var _0x5710c5 = _0x53df19.verify.overload("java.lang.String", "[Ljava.lang.String;", "[Ljava.lang.String;", "boolean");
    _0x5710c5.implementation = function (_0x3a95d3, _0x2c0593, _0x4ba9e2, _0x19751c) {
      console.log("ch.boye.httpclientandroidlib.conn.ssl.AbstractVerifier.verify('java.lang.String', '[Ljava.lang.String;', '[Ljava.lang.String;', 'boolean') was hooked!");
    };
  }
}
function xxxxkakjakkkk() {
  if (!classExists("com.android.org.conscrypt.Platform")) {
    return;
  }
  var _0x3eb5df = Java.use("com.android.org.conscrypt.Platform");
  var _0x4e9705 = undefined;
  try {
    _0x4e9705 = _0x3eb5df.checkServerTrusted.overload("javax.net.ssl.X509TrustManager", "[Ljava.security.cert.X509Certificate;", "java.lang.String", "com.android.org.conscrypt.OpenSSLEngineImpl");
  } catch (_0x53253f) {} finally {
    if (_0x4e9705) {
      _0x4e9705.implementation = function (_0x221875, _0x32033c, _0x22c2f4, _0x4a3020) {
        console.log("static void com.android.org.conscrypt.Platform.checkServerTrusted('javax.net.ssl.X509TrustManager', '[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'com.android.org.conscrypt.OpenSSLEngineImpl') was hooked!");
      };
    }
  }
  var _0x216591 = undefined;
  try {
    _0x216591 = _0x3eb5df.checkServerTrusted.overload("javax.net.ssl.X509TrustManager", "[Ljava.security.cert.X509Certificate;", "java.lang.String", "com.android.org.conscrypt.OpenSSLSocketImpl");
  } catch (_0x4c92ed) {} finally {
    if (_0x216591) {
      _0x216591.implementation = function (_0x43a295, _0x1a6f3b, _0x4360e9, _0x5875b) {
        console.log("static void com.android.org.conscrypt.Platform.checkServerTrusted('javax.net.ssl.X509TrustManager', '[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'com.android.org.conscrypt.OpenSSLSocketImpl') was hooked!");
      };
    }
  }
  var _0xee8ed = undefined;
  try {
    _0xee8ed = _0x3eb5df.checkServerTrusted.overload("javax.net.ssl.X509TrustManager", "[Ljava.security.cert.X509Certificate;", "java.lang.String", "com.android.org.conscrypt.AbstractConscryptSocket");
  } catch (_0x1d3b2c) {} finally {
    if (_0xee8ed) {
      _0xee8ed.implementation = function (_0x42daff, _0x13671c, _0x947fb0, _0x4f4936) {
        console.log("static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.AbstractConscryptSocket) throws java.security.cert.CertificateException was hooked!");
      };
    }
  }
  var _0x580585 = undefined;
  try {
    _0x580585 = _0x3eb5df.checkServerTrusted.overload("javax.net.ssl.X509TrustManager", "[Ljava.security.cert.X509Certificate;", "java.lang.String", "com.android.org.conscrypt.ConscryptEngine");
  } catch (_0x6d272e) {} finally {
    if (_0x580585) {
      _0x580585.implementation = function (_0x4459f9, _0x50b2da, _0x34ae49, _0x4adfb4) {
        console.log("static void com.android.org.conscrypt.Platform.checkServerTrusted(javax.net.ssl.X509TrustManager,java.security.cert.X509Certificate[],java.lang.String,com.android.org.conscrypt.ConscryptEngine) throws java.security.cert.CertificateException was hooked!");
      };
    }
  }
}
function boringsslhook() {
  if (!classExists("appcelerator.https.PinningTrustManager")) {
    return;
  }
  var _0x1360cc = Java.use("appcelerator.https.PinningTrustManager");
  var _0x4c5663 = _0x1360cc.checkServerTrusted.overload();
  _0x4c5663.implementation = function () {};
}
Java.perform(function () {
  var _0xbb7187 = Java.use("gz.justtrustme.Helper");
  var _0x103181 = Java.use("org.apache.http.impl.client.DefaultHttpClient");
  var _0xafa532 = _0x103181.$init.overload("org.apache.http.conn.ClientConnectionManager", "org.apache.http.params.HttpParams");
  _0xafa532.implementation = function (_0x2dd6f3, _0x103375) {
    var _0x3f34e6 = _0xafa532.call(this, _0xbb7187.getCCM(_0x2dd6f3, _0x103375), _0x103375);
    console.log("org.apache.http.impl.client.DefaultHttpClient.$init('org.apache.http.conn.ClientConnectionManager', 'org.apache.http.params.HttpParams') was hooked!");
    return _0x3f34e6;
  };
  var _0x3a7229 = _0x103181.$init.overload();
  _0x3a7229.implementation = function () {
    var _0x418d82 = _0xafa532.call(this, _0xbb7187.getSCCM(), null);
    console.log("org.apache.http.impl.client.DefaultHttpClient.$init() was hooked!");
    return _0x418d82;
  };
  var _0x178953 = _0x103181.$init.overload("org.apache.http.params.HttpParams");
  _0x178953.implementation = function (_0x347522) {
    var _0x58a685 = _0xafa532.call(this, _0xbb7187.getSCCM(), _0x347522);
    console.log("org.apache.http.impl.client.DefaultHttpClient.$init('org.apache.http.params.HttpParams') was hooked!");
    return _0x58a685;
  };
  var _0x5cb6a5 = Java.use("android.net.http.X509TrustManagerExtensions");
  var _0x43b1be = _0x5cb6a5.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "java.lang.String");
  _0x43b1be.implementation = function (_0x53f5d7, _0xb2233f, _0x25acf7) {
    console.log("android.net.http.X509TrustManagerExtensions.checkServerTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String') was hooked!");
    return Java.use("java.util.Arrays$ArrayList").$new(_0x53f5d7);
  };
  var _0x10c48a = Java.use("android.security.net.config.NetworkSecurityTrustManager");
  var _0x2ad2de = _0x10c48a.checkPins.overload("java.util.List");
  _0x2ad2de.implementation = function (_0x48ff08) {
    console.log("android.security.net.config.NetworkSecurityTrustManager.checkPins('java.util.List') was hooked!");
  };
  var _0x3ffe05 = Java.use("org.apache.http.conn.ssl.SSLSocketFactory");
  var _0x3a3468 = _0x3ffe05.$init.overload("java.lang.String", "java.security.KeyStore", "java.lang.String", "java.security.KeyStore", "java.security.SecureRandom", "org.apache.http.conn.scheme.HostNameResolver");
  _0x3a3468.implementation = function (_0x5afcf8, _0x3bff64, _0xa75c16, _0x30845e, _0x3ce695, _0x374a5a) {
    var _0x44ca8c = _0x3a3468.call(this, _0x5afcf8, _0x3bff64, _0xa75c16, _0x30845e, _0x3ce695, _0x374a5a);
    console.log("org.apache.http.conn.ssl.SSLSocketFactory.$init('java.lang.String', 'java.security.KeyStore', 'java.lang.String', 'java.security.KeyStore', 'java.security.SecureRandom', 'org.apache.http.conn.scheme.HostNameResolver') was hooked!");
    if (_0xbb7187.reInitSSLSocketFactory(this, _0x5afcf8, _0x3bff64, _0xa75c16, _0x30845e, _0x3ce695, _0x374a5a)) {
      console.log("替换trustmanagers参数成功!");
    } else {
      console.log("替换trustmanagers参数失败!");
    }
    return _0x44ca8c;
  };
  var _0x2a2ab6 = _0x3ffe05.getSocketFactory.overload();
  var _0x4f0544 = _0x3ffe05.$init.overload();
  _0x2a2ab6.implementation = function () {
    console.log("org.apache.http.conn.ssl.SSLSocketFactory.getSocketFactory() was hooked!");
    return _0x3ffe05.$new();
  };
  var _0x4087b0 = _0x3ffe05.isSecure.overload("java.net.Socket");
  _0x4087b0.implementation = function (_0x3d6012) {
    console.log("org.apache.http.conn.ssl.SSLSocketFactory.isSecure('java.net.Socket') was hooked!");
    return true;
  };
  var _0x54006c = Java.use("javax.net.ssl.TrustManagerFactory");
  var _0x58794b = _0x54006c.getTrustManagers.overload();
  _0x58794b.implementation = function () {
    var _0x18685e = _0x58794b.call(this);
    console.log("javax.net.ssl.TrustManagerFactory.getTrustManagers() was hooked!");
    return _0xbb7187.replaceGetTrustManagers(this, _0x18685e);
  };
  var _0x38b740 = Java.use("javax.net.ssl.HttpsURLConnection");
  var _0x2ce50d = _0x38b740.setDefaultHostnameVerifier.overload("javax.net.ssl.HostnameVerifier");
  _0x2ce50d.implementation = function (_0x391abf) {
    console.log("javax.net.ssl.HttpsURLConnection.setDefaultHostnameVerifier('javax.net.ssl.HostnameVerifier') was hooked!");
  };
  var _0x4fa571 = _0x38b740.setHostnameVerifier.overload("javax.net.ssl.HostnameVerifier");
  _0x4fa571.implementation = function (_0x1846f6) {
    console.log("javax.net.ssl.HttpsURLConnection.setHostnameVerifier('javax.net.ssl.HostnameVerifier') was hooked!");
  };
  var _0x26e996 = _0x38b740.setSSLSocketFactory.overload("javax.net.ssl.SSLSocketFactory");
  _0x26e996.implementation = function (_0x4480b7) {
    console.log("javax.net.ssl.SSLSocketFactory.setSSLSocketFactory('javax.net.ssl.SSLSocketFactory') was hooked!");
  };
  var _0x506417 = Java.use("javax.net.ssl.SSLContext");
  var _0x4c8517 = _0x506417.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom");
  _0x4c8517.implementation = function (_0x3be563, _0x581fde, _0x5c3223) {
    _0x4c8517.call(this, _0x3be563, _0xbb7187.getImSureTrustManagers(), _0x5c3223);
    console.log("javax.net.ssl.SSLContext.init('[Ljavax.net.ssl.KeyManager;', '[Ljavax.net.ssl.TrustManager;', 'java.security.SecureRandom') was hooked!");
  };
  var _0x521235 = Java.use("android.app.Application");
  var _0x13b5bb = _0x521235.attach.overload("android.content.Context");
  _0x13b5bb.implementation = function (_0xcc538b) {
    _0x13b5bb.call(this, _0xcc538b);
    var _0xe2949a = _0xcc538b.getClassLoader();
  };
  if (hasTrustManagerImpl()) {
    var _0x56dfc5 = Java.use("com.android.org.conscrypt.TrustManagerImpl");
    var _0x166dc6 = undefined;
    try {
      _0x166dc6 = _0x56dfc5.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "java.lang.String");
    } catch (_0x371e2e) {} finally {
      if (_0x166dc6) {
        _0x166dc6.implementation = function (_0x2ccd6a, _0x331599, _0x4e406c) {
          console.log("com.android.org.conscrypt.TrustManagerImpl.checkServerTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String') was hooked!");
          return newArrayList();
        };
      }
    }
    var _0x686156 = undefined;
    try {
      _0x686156 = _0x56dfc5.checkServerTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "javax.net.ssl.SSLSession");
    } catch (_0x27bc17) {} finally {
      if (_0x686156) {
        _0x686156.implementation = function (_0x2f0575, _0x1e5fff, _0x161c3e) {
          console.log("com.android.org.conscrypt.TrustManagerImpl.checkServerTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'javax.net.ssl.SSLSession') was hooked!");
          return newArrayList();
        };
      }
    }
    var _0x54bb08 = undefined;
    try {
      _0x54bb08 = _0x56dfc5.checkTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "java.lang.String", "boolean");
    } catch (_0x5ac2a9) {} finally {
      if (_0x54bb08) {
        _0x54bb08.implementation = function (_0x1b94a2, _0x289166, _0x46f78a, _0x5426c2) {
          console.log("com.android.org.conscrypt.TrustManagerImpl.checkTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'java.lang.String', 'boolean') was hooked!");
          return newArrayList();
        };
      }
    }
    var _0x9d73ae = undefined;
    try {
      _0x9d73ae = _0x56dfc5.checkTrusted.overload("[Ljava.security.cert.X509Certificate;", "java.lang.String", "javax.net.ssl.SSLSession", "javax.net.ssl.SSLParameters", "boolean");
    } catch (_0x340308) {} finally {
      if (_0x9d73ae) {
        _0x9d73ae.implementation = function (_0x3537df, _0x156e15, _0x5241dc, _0x4f900f, _0xb342fa) {
          console.log("com.android.org.conscrypt.TrustManagerImpl.checkTrusted('[Ljava.security.cert.X509Certificate;', 'java.lang.String', 'javax.net.ssl.SSLSession', 'javax.net.ssl.SSLParameters', 'boolean') was hooked!");
          return newArrayList();
        };
      }
    }
    var _0x1f4a41 = undefined;
    try {
      _0x1f4a41 = _0x56dfc5.checkTrusted.overload("[Ljava.security.cert.X509Certificate;", "[B", "[B", "java.lang.String", "java.lang.String", "boolean");
    } catch (_0x2f3960) {} finally {
      if (_0x1f4a41) {
        _0x1f4a41.implementation = function (_0x27b9af, _0x5e7cc2, _0x4643f0, _0x482cef, _0x16f255, _0x181c4f) {
          console.log("private java.util.List com.android.org.conscrypt.TrustManagerImpl.checkTrusted(java.security.cert.X509Certificate[],byte[],byte[],java.lang.String,java.lang.String,boolean) throws java.security.cert.CertificateException was hooked!");
          return newArrayList();
        };
      }
    }
  }
  b0ringsslp();
  kaooqpjakk10a();
  klalo1mmmmal();
  xmalk11o_JKKJKK();
  xnalkak11ll0ppi0000000ppp();
  xxxxkakjakkkk();
  boringsslhook();
});