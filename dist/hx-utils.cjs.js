"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(exports,"__esModule",{value:!0});var o=new(function(){function e(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default";t(this,e),n(this,"default",void 0),n(this,"masks",{default:"yyyy-MM-dd HH:mm:ss",mediumDate:"yyyy-MM-dd",longDate:"MM-dd",shortTime:"HH:mm",mediumTime:"HH:mm:ss"}),this.default=r}var o,i,u;return o=e,(i=[{key:"init",value:function(){var e=this;return{token:/d{1,2}|M{1,2}|yy(?:yy)?|S{1,2}|([HhMsDmW])\1?|[aA]|"[^"]*"|'[^']*'/g,formatFlags:{yy:function(e){return String(e.getFullYear()).substr(2)},yyyy:function(e){return e.getFullYear()},M:function(e){return e.getMonth()+1},MM:function(t){return e.pad(t.getMonth()+1)},d:function(e){return e.getDate()},dd:function(t){return e.pad(t.getDate())},H:function(e){return e.getHours()},HH:function(t){return e.pad(t.getHours())},m:function(e){return e.getMinutes()},mm:function(t){return e.pad(t.getMinutes())},s:function(e){return e.getSeconds()},ss:function(t){return e.pad(t.getSeconds())},W:function(e){return["日","一","二","三","四","五","六"][e.getDay()]},WW:function(e){return["周日","周一","周二","周三","周四","周五","周六"][e.getDay()]},WWW:function(e){return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][e.getDay()]}}}}},{key:"format",value:function(e,t){if("number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date in format");t=this.masks[t]||t||this.masks[this.default];var r=this.init(),n=r.token,o=r.formatFlags;return t.replace(n,(function(t){return t in o?o[t](e):t.slice(1,t.length-1)}))}},{key:"pad",value:function(e,t){for(e=String(e),t=t||2;e.length<t;)e="0"+e;return e}}])&&r(o.prototype,i),u&&r(o,u),e}()),i=Object.prototype.toString;function u(e){return i.call(e)}function a(e,t){return u(e).slice(8,-1)===t}function f(e){if(e&&"number"!=typeof e)throw new Error(e+"Not Numbers");return Math.random().toString(e).substr(2)}function c(e){if(!e)return!1;return/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X|x)$/.test(e)}function s(e){if(!e)return!1;return/^1[3456789]\d{9}$/.test(e)}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(e){var n=new RegExp("^(.{".concat(t,"})(?:\\d+)(.{").concat(r,"})$"));return String(e).replace(n,"$1********$2")}},p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:4;if(e){var n=new RegExp("^(.{".concat(t,"})(?:\\d+)(.{").concat(r,"})$"));return String(e).replace(n,"$1****$2")}},l=function(e){return!!e&&/^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(e)},y=function(e){return/^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e)},g=function(e){return s(e)||l(e)},m=function(){function e(){return(65536*(1+Math.random())|0).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()};function h(e,t){return e.filter(t)[0]}function v(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(t&&u(t))return t;if(null===t||"object"!==e(t))return t;var n=h(r,(function(e){return e.original===t}));if(n)return n.copy;var o=Array.isArray(t)?[]:{};return r.push({original:t,copy:o}),Object.keys(t).forEach((function(e){o[e]=v(t[e],r)})),o}var b=window.navigator.userAgent,x=function(){return b.indexOf("Opera")>-1},M=function(){return b.indexOf("compatible")>-1&&b.indexOf("MSIE")>-1&&!x()},S=function(){return b.indexOf("Windows NT 6.1; Trident/7.0;")>-1&&!M()},w=function(){return b.indexOf("Safari")>-1&&-1===b.indexOf("Chrome")},O=function(){return b.indexOf("Chrome")>-1&&b.indexOf("Safari")>-1},A=function(){return b.indexOf("Firefox")>-1},P=function(){return!!b.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)},$={isIE:M,isEdge:S,isOpera:x,isSafari:w,isChrome:O,isFirefox:A,isWechat:function(){return"micromessenger"===b.toLowerCase().match(/MicroMessenger/i)},isAndroid:function(){return/android/gi.test(navigator.appVersion)},isIOS:P,isMobile:function(){return!!b.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)},callCamera:function(){if(P())for(var e=window.document.querySelectorAll("input[capture=camera]"),t=0;t<e.length;t++)e[t].removeAttribute("capture")},isAdr:function(){return b.indexOf("Android")>-1||b.indexOf("Adr")>-1},type:function(){if(M()){new RegExp("MSIE (\\d+\\.\\d+);").test(b);var e=parseFloat(RegExp.$1);return 7===e?"ie7":8===e?"ie8":9===e?"ie9":10===e?"ie10":11===e&&"ie11"}return A()?"firefox":x()?"opera":w()?"safari":O()?"chrome":S()?"edge":void 0}},C={generateId:f,regIdCard:c,regPhone:s,isType:u,verifyType:a,deepCopy:v,encryptIdCard:d,encryptPhone:p,regFixedPhone:l,regUrl:y,isPhone:g,moment:o,browser:$,uuid:m};exports.browser=$,exports.deepCopy=v,exports.default=C,exports.encryptIdCard=d,exports.encryptPhone=p,exports.generateId=f,exports.isPhone=g,exports.isType=u,exports.moment=o,exports.regFixedPhone=l,exports.regIdCard=c,exports.regPhone=s,exports.regUrl=y,exports.uuid=m,exports.verifyType=a;
