!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e="undefined"!=typeof globalThis?globalThis:e||self).hxUtils={})}(this,(function(e){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function t(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function r(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var o=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";t(this,e),i(this,"default",void 0),i(this,"masks",{default:"yyyy-MM-dd HH:mm:ss",mediumDate:"yyyy-MM-dd",longDate:"MM-dd",shortTime:"HH:mm",mediumTime:"HH:mm:ss"}),this.default=n}var n,o,u;return n=e,(o=[{key:"init",value:function(){var e=this;return{token:/d{1,2}|M{1,2}|yy(?:yy)?|S{1,2}|([HhMsDmW])\1?|[aA]|"[^"]*"|'[^']*'/g,formatFlags:{yy:function(e){return String(e.getFullYear()).substr(2)},yyyy:function(e){return e.getFullYear()},M:function(e){return e.getMonth()+1},MM:function(n){return e.pad(n.getMonth()+1)},d:function(e){return e.getDate()},dd:function(n){return e.pad(n.getDate())},H:function(e){return e.getHours()},HH:function(n){return e.pad(n.getHours())},m:function(e){return e.getMinutes()},mm:function(n){return e.pad(n.getMinutes())},s:function(e){return e.getSeconds()},ss:function(n){return e.pad(n.getSeconds())},W:function(e){return["日","一","二","三","四","五","六"][e.getDay()]},WW:function(e){return["周日","周一","周二","周三","周四","周五","周六"][e.getDay()]},WWW:function(e){return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()]}}}}},{key:"format",value:function(e,n){if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in format");n=this.masks[n]||n||this.masks[this.default];var t=this.init(),r=t.token,i=t.formatFlags;return n.replace(r,(function(n){return n in i?i[n](e):n.slice(1,n.length-1)}))}},{key:"pad",value:function(e,n){for(e=String(e),n=n||2;e.length<n;)e="0"+e;return e}}])&&r(n.prototype,o),u&&r(n,u),e}(),u=new o,a=Object.prototype.toString;function f(e){return a.call(e)}function c(e,n){return f(e).slice(8,-1)===n}function d(e){if(e&&"number"!=typeof e)throw new Error(e+"Not Numbers");return Math.random().toString(e).substr(2)}function s(e){if(!e)return!1;return/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(e)}function l(e){if(!e)return!1;return/^1[3456789]\d{9}$/.test(e)}var p=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(e){var r=new RegExp("^(.{".concat(n,"})(?:\\d+)(.{").concat(t,"})$"));return String(e).replace(r,"$1********$2")}},y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(e){var r=new RegExp("^(.{".concat(n,"})(?:\\d+)(.{").concat(t,"})$"));return String(e).replace(r,"$1****$2")}},g=function(e){return!!e&&/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(e)},m=function(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)},h=function(e){return l(e)||g(e)},b=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};function v(e,n){return e.filter(n)[0]}function M(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(e&&f(e))return e;if(null===e||"object"!==n(e))return e;var r=v(t,(function(n){return n.original===e}));if(r)return r.copy;var i=Array.isArray(e)?[]:{};return t.push({original:e,copy:i}),Object.keys(e).forEach((function(n){i[n]=M(e[n],t)})),i}var S=window.navigator.userAgent,w=function(){return S.indexOf("Opera")>-1},x=function(){return S.indexOf("compatible")>-1&&S.indexOf("MSIE")>-1&&!w()},O=function(){return S.indexOf("Windows NT 6.1; Trident/7.0;")>-1&&!x()},A=function(){return S.indexOf("Safari")>-1&&-1===S.indexOf("Chrome")},P=function(){return S.indexOf("Chrome")>-1&&S.indexOf("Safari")>-1},$=function(){return S.indexOf("Firefox")>-1},C=function(){return!!S.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},E={isIE:x,isEdge:O,isOpera:w,isSafari:A,isChrome:P,isFirefox:$,isWechat:function(){return"micromessenger"===S.toLowerCase().match(/MicroMessenger/i)},isAndroid:function(){return/android/gi.test(navigator.appVersion)},isIOS:C,isMobile:function(){return!!S.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},callCamera:function(){if(C())for(var e=window.document.querySelectorAll("input[capture=camera]"),n=0;n<e.length;n++)e[n].removeAttribute("capture")},isAdr:function(){return S.indexOf("Android")>-1||S.indexOf("Adr")>-1},type:function(){if(x()){new RegExp("MSIE (\\d+\\.\\d+);").test(S);var e=parseFloat(RegExp.$1);return 7===e?"ie7":8===e?"ie8":9===e?"ie9":10===e?"ie10":11===e&&"ie11"}return $()?"firefox":w()?"opera":A()?"safari":P()?"chrome":O()?"edge":void 0}},H={generateId:d,regIdCard:s,regPhone:l,isType:f,verifyType:c,deepCopy:M,encryptIdCard:p,encryptPhone:y,regFixedPhone:g,regUrl:m,isPhone:h,moment:u,browser:E,uuid:b};e.browser=E,e.deepCopy=M,e.default=H,e.encryptIdCard=p,e.encryptPhone=y,e.generateId=d,e.isPhone=h,e.isType=f,e.moment=u,e.regFixedPhone=g,e.regIdCard=s,e.regPhone=l,e.regUrl=m,e.uuid=b,e.verifyType=c,Object.defineProperty(e,"__esModule",{value:!0})}));
