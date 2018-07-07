/*-- 

Copyright notice
jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license

Copyright notice
SnoepHybrid:HTML5 GAME and WebApp LIB
Version1_2_2
Copyright (c)  2014 Hjalmar Snoep, http://www.snoepgames.nl.
All rights reserved.

---*/
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});var _ip={};_ip.version="1.2.2";_ip._gj={};_ip._hn=[];_ip._fu=null;_ip._fn=null;_ip._fw="img/";_ip.dataurls=[];_ip.dataurls['hotspots']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAAF0Uk5TAEDm2GYAAAAQSURBVHjaYmAAAAAA//8DAAACAAEkfyTxAAAAAElFTkSuQmCC";_ip.f=1;_ip._hm={};_ip._fe={};_ip._ds={};_ip._ff=0;_ip.language=navigator.language;_ip._fx=0;_ip.helplink="http://www.makinggames.org/nl/help/";_ip.supportlink="http://www.makinggames.org/nl/support/";function _ch(){_ip.allowAllDomains=true;_ip.debug_session_id=new Date().getTime();_ip.setDebugEchoDiv($('#hybridDiv'));{}
{}
var ua=navigator.userAgent.toLowerCase();{}
_chMouseWheel();_iq_ii();if(!_iq_ie())
{_ip.showWarning("Referrer: '"+document.referrer+"'\n\n"+_ip._gw("4552524f523a205265666572726572206d69736d617463682120546869732067616d6520686173206e6f74206265656e206c6963656e73656420746f2072756e206f6e207468697320736974652120436f6e74616374207777772e736e6f65702e617420746f206f627461696e207468652070726f706572206c6963656e7365732e"));}else
{_iq_ih();_iq_hw();_ip._gy=false;_ip._gp();_iq_im();_ip.startLoop(_iq_ic,200);}};$(window).resize(function(){if(_ip._ez!==false)
clearTimeout(_ip._ez);_ip._ez=setTimeout(_bq,50);});_ip._gv=-1;_ip._gu=null;function _iq_iq_hu()
{_ip._gu();}
_ip.startLoop=_iq_hv;function _iq_hv(func,interval)
{if(_ip._gv!=-1)
{_iq_ht();}
_ip._gu=func;_ip._gv=window.setInterval(_iq_iq_hu,interval);}
_ip.stopLoop=_iq_ht;function _iq_ht()
{if(_ip._gv==-1)return false;window.clearInterval(_ip._gv);_ip._gv=-1;_ip._gu=null;return true;}
function _iq_ii(){var nua=navigator.userAgent;var is_chrome=nua.indexOf('Chrome')>-1;var _fs=nua.indexOf('MSIE')>-1;var is_firefox=nua.indexOf('Firefox')>-1;var is_safari=nua.indexOf("Safari")>-1;var is_android=nua.indexOf("Android")>-1;var is_Opera=nua.indexOf("Presto")>-1;if(is_android==true&&is_chrome==false)
_ip.showWarning("You are using Android Default Browser. For way better performance, please switch to Chrome.");if((is_chrome)&&(is_safari))
{is_safari=false;}
if(!(window.ActiveXObject)&&"ActiveXObject"in window)_fs=true;_ip._fe.browser="unidentified";if(is_chrome)_ip._fe.browser="chrome";if(_fs)_ip._fe.browser="explorer";if(is_firefox)_ip._fe.browser="firefox";if(is_safari)_ip._fe.browser="safari";if(is_android)_ip._fe.browser="android";if(is_Opera)_ip._fe.browser="opera";_cp();_cn();{}
{}
{}
_iq_hr();{}
{}
{}
_ip._hm.touchmode=_cf();_ip._hm.maxtouches=_co();{}
{}
_ip._hm.canvas=_cg();{}
_ip._hm.tilt=_cj();_ip._hm.keyboard=true;if(_ip._hm.maxtouches>0)_ip._hm.keyboard=false;};function _cn(){_ip._fe.OS=navigator._fe;var ua=navigator.userAgent.toLowerCase();if((ua.indexOf("macintosh")!=-1)||(ua.indexOf("mac os x")!=-1)||(ua.indexOf("mac_powerpc")!=-1)||(ua.indexOf("powerpc-apple")!=-1)||(ua.indexOf("mac_ppc")!=-1)||(ua.indexOf("darwin")!=-1))
{_ip._fe.OS="Mac";}
if((ua.indexOf("win95")!=-1)||(ua.indexOf("windows 95")!=-1))_ip._fe.OS="Windows (95)";if((ua.indexOf("win 9x 4.90")!=-1)||(ua.indexOf("windows me")!=-1))_ip._fe.OS="Windows (Me)";if((ua.indexOf("windows 2000")!=-1)||(ua.indexOf("windows nt 5.0")!=-1))_ip._fe.OS="Windows (2000)";if((ua.indexOf("windows nt 5.1")!=-1)||(ua.indexOf("windows xp")!=-1))_ip._fe.OS="Windows (XP)";if(ua.indexOf("windows nt 5.2 x64")!=-1)_ip._fe.OS="Windows (XP 64-bit)";if(ua.indexOf("windows nt 5.2")!=-1)_ip._fe.OS="Windows (Server 2003)";if(ua.indexOf("windows nt 6.0")!=-1)_ip._fe.OS="Windows (Vista)";if(ua.indexOf("windows nt 6.1")!=-1)_ip._fe.OS="Windows (7)";if(ua.indexOf("windows nt 6.2")!=-1)_ip._fe.OS="Windows (8)";if((ua.indexOf("windows nt 4.0")!=-1)||(ua.indexOf("winnt")!=-1)||(ua.indexOf("windows nt")!=-1))_ip._fe.OS="Windows (NT)";if((ua.indexOf("windows 98")!=-1)||(ua.indexOf("win98")!=-1))_ip._fe.OS="Windows (98)";if(ua.indexOf("windows 3.1")!=-1)_ip._fe.OS="Windows (3.1)";if(ua.indexOf("microsoft windows")!=-1)_ip._fe.OS="Windows (?)";if(_ip._fe.device=="iPhone"||_ip._fe.device=="iPod"||_ip._fe.device=="iPad")
{if(ua.match(/ OS 5_/i))_ip._fe.OS="iOs5";if(ua.match(/ OS 6_/i))_ip._fe.OS="iOs6";if(ua.match(/ OS 7_/i))_ip._fe.OS="iOs7";if(ua.match(/ OS 8_/i))_ip._fe.OS="iOs8";}};function _cp(){var ua=navigator.userAgent.toLowerCase();_ip._fe.device="unknown";if(ua.match(/windows/i))_ip._fe.device="desktop";if(ua.match(/iphone/i))_ip._fe.device="iPhone";if(ua.match(/ipod/i))_ip._fe.device="iPod";if(ua.match(/ipad/i))_ip._fe.device="iPad";if(ua.match(/iPad/i))_ip._fe.device="iPad";if(ua.match(/android/i))_ip._fe.device="Android";if(ua.match(/blackberry/i))_ip._fe.device="BlackBerry";};_ip.get_hz=_iqGet_hz;function _iqGet_hz(){return"js";};_ip.set_ij=_iqSet_ij;function _iqSet_ij(pause,restart){$(window).blur(pause);$(window).focus(restart);};_ip.clear_ij=_iqClear_ij;function _iqClear_ij(){$(window).blur();$(window).focus();};function _iqGetQueryVars()
{_ip.query_vars={};if(location.href.indexOf("?")!=-1)
{var pairs=location.href.split("?")[1].split("&");for(var all in pairs)
{var p=pairs[all].split("=");_ip.query_vars[p[0]]=p[1];}}}
_iqGetQueryVars();_ip._ek=_ba;function _ba(_fq,value)
{{}
if(value=="1")
_ip._ds[_fq]=true;else
_ip._ds[_fq]=false;}
_ip.makePageUnselectable=_bz;function _bz()
{{}
_b($(document));_b($('body'));_b($('html'));}
_ip.makePageSelectable=_iq_ib;function _iq_ib()
{{}
_c($(document));_c($('body'));_c($('html'));}
_ip.makeSelectable=_iq_ia;function _iq_ia(h,tf)
{if(tf)
{_c(h.jquery);}else
{_b(h.jquery);}}
function _b(_fr)
{_fr.on('dragstart selectstart touchstart touchmove',_jQuery_io);_fr.attr('unselectable','on').css({'-moz-user-select':'-moz-none','-moz-user-select':'none','-o-user-select':'none','-khtml-user-select':'none','-webkit-user-select':'none','-ms-user-select':'none','user-select':'none','-webkit-touch-callout':'none'});}
function _jQuery_io(event){event.preventDefault();event.stopPropagation();}
function _c(_fr)
{{}
_fr.off('dragstart selectstart touchstart touchmove',_jQuery_io);_fr.attr('unselectable','').css({'-moz-user-select':'text','-moz-user-select':'text','-o-user-select':'text','-khtml-user-select':'text','-webkit-user-select':'text','-ms-user-select':'text','user-select':'text'});}
_ip._gt=_cx;function _cx()
{$('html, body').on('touchmove',function(e)
{e.stopPropagation();e.preventDefault();});};$(document).ready(_ch);_ip.debug=false;_ip._ft=false;_ip._gy=false;_ip.setDebugEchoDiv=_iq_hx;window.onerror=_iq_ig;var _ga="";_ip._gx=_ir_gx;_ip._gxs=0;function _ir_gx(message){_ip._gxs++;if(typeof(top_debug)!="undefined")
{if(top_debug===true)
{var parentdebugwindow=window.parent.document.getElementById('debug');if(parentdebugwindow!=null)
{parentdebugwindow.innerHTML+=message;parentdebugwindow.scrollTop=parentdebugwindow.scrollHeight;}}}
if(typeof(log_debug)!="undefined")
{if(log_debug===true)
{var url="debug_log.php";var data={};data.debug_session_id=_ip.debug_session_id;data.event=message;_ip.setVars(url,data);}}
if(typeof console=="object")console.log(message);_ga+=message+"<br>";if(_ip._gy)
{_ip._gy.append('<br>'+message);}
if($("#internal_debug_window").length!=0){$("#internal_debug_window").html(_ga);}};_ip.throwError=_fz;function _fz(message)
{_ir_gx(message);throw(message);};_ip.showWarning=_aw;function _aw(message)
{window.alert(message);};function _iq_ig(errorMsg,url,lineNumber,column,errorObj)
{alert('Error: '+errorMsg+' Script: '+url+' Line: '+lineNumber
+' Column: '+column+' StackTrace: '+errorObj);_ir_gx('Error: '+errorMsg+' Script: '+url+' Line: '+lineNumber
+' Column: '+column+' StackTrace: '+errorObj);}
function _iq_hx(jqo)
{_ip._gy=jqo;}
function _iq_hs(value){if(value=="1"){_ip._ft=true;var _gg="";_gg+="<div class='hybrid-menu' id='hybrid-debug'>";_gg+="<hr><h1 id='hybrid-debug-title'>_ip Internal Debug Window</h1><ul><hr>";_gg+="<p id='internal_debug_window' style='text-align: left; word-break:break-all; word-wrap: break-word; width:300px;  height:300px; overflow: auto;'></p>";_gg+="</div>";$(_gg).appendTo("body");$("#internal_debug_window").css("background-color","#ffffff");_c($("#internal_debug_window"));$("#internal_debug_window").html(_ga);$('#hybrid-debug-title').mousedown(_cy);}else{$("#hybrid-debug").remove();_ip._ft=false;}
_iq_if();};function _cy(e){_ip.dragging={};_ip.dragging.pageX0=e.pageX;_ip.dragging.pageY0=e.pageY;_ip.dragging.elem=$('#hybrid-debug');_ip.dragging.offset0=$('#hybrid-debug').offset();function _ai(e){var left=_ip.dragging.offset0.left+(e.pageX-_ip.dragging.pageX0);var top=_ip.dragging.offset0.top+(e.pageY-_ip.dragging.pageY0);$(_ip.dragging.elem).offset({top:top,left:left});}
function _g(e){$('body').off('mousemove',_ai).off('mouseup',_g);}
$('body').on('mouseup',_g).on('mousemove',_ai);}
function _ci(e)
{var mes="Error occured while trying to load image "+_ip._ha+".";{}}
function _iq_in(e)
{if(e)
{}}
function _iq_hy(errormessage){{}
if(typeof(_ip.app_id)!=="undefined")
{if(typeof(_ip.app_id)!=="undefined")
{location.href=_ip.supportlink+_ip.app_id;top.location.href=_ip.supportlink+_ip.app_id;}else
{location.href=_ip.supportlink;top.location.href=_ip.supportlink;}}}
_ip._ds.sound=true;_ip._ds.music=true;_ip.audio_preloaded=0;_ip._fh=0;function _ak(value)
{if(value==false)
{var all;for(all in _ip._hn)
{if(_ip._hn[all].loop!=true)
{_ip._du(all);}}}
_ip._ek("sound",value);_iq_if();}
function _al(value)
{if(value==false)
{{}
var all;for(all in _ip._hn)
{if(_ip._hn[all].music==true)
{if(_ip._hn[all].started)
{_ip.muted_music_loop=all;}
{}
_ip._dv(all);}}}
_ip._ek("music",value);_iq_if();if(value==true)
{{}
if(typeof(_ip.muted_music_loop)!=="undefined"&&_ip.muted_music_loop!="")
{_ip._dw(_ip.muted_music_loop);_ip.muted_music_loop="";}
{}}}
function _iq_hr(){var a=document.createElement('audio');_ip._hm.sound=true;_ip._hm.audio_preload=true;_ip._hm.music=true;_ip._ds.sound=true;_ip._ds.music=true;var ogg=!!(a.canPlayType&&a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,''));if(ogg)_ip._hm.audiotype='ogg';{}
if(_ip._fe.browser!="firefox")
{var mp3=!!(a.canPlayType&&a.canPlayType('audio/mpeg;').replace(/no/,''));if(mp3)_ip._hm.audiotype='mp3';else
{_ip._hm.audiotype="";}}else
{{}}
var contextClass=(window.AudioContext||window.webkitAudioContext||window.mozAudioContext||window.oAudioContext||window.msAudioContext);if(contextClass)
{_ip._hq=new contextClass();_ip._hm.audioContext=true;}else
{_ip._hm.audioContext=false;}
switch(_ip._fe.browser)
{case"firefox":_ip._hm.audiotype='ogg';break;case"chrome":if(_ip._hm.audioContext)
{_ip._hm.audiotype='mp3';_ip._hm.sound=true;_ip._hm.audio_preload=true;_ip._ds.sound=true;}else
{_ip._hm.audiotype='mp3';_ip._hm.sound=true;_ip._hm.audio_preload=true;_ip._ds.sound=true;}
break;case"android":if(_ip._hm.audioContext)
{_ip._hm.sound=true;_ip._ds.sound=true;_ip._hm.audiotype="mp3";_ip._hm.audio_preload=true;}else
{_ip._hm.sound=false;_ip._ds.sound=false;_ip._hm.audiotype="mp3";_ip._hm.audio_preload=false;}
break;case"safari":if(_ip._fe.OS=='Mac')
{_ip.showWarning("Safari on the Mac has a problem with webaudioapi. Fallback to limited audio. Try Chrome for better performance.");_ip._hm.audioContext=false;}
if(_ip._fe.device=='iPad')
{switch(_ip._fe.OS)
{case"iOs5":_ip._hm.audioContext=false;break;case"iOs6":_ip._hm.audioContext=true;break;case"iOs7":_ip._hm.audioContext=true;break;default:_ip._hm.audioContext=true;break;}}
if(_ip._hm.audioContext)
{_ip._hm.sound=true;_ip._ds.sound=true;_ip._ds.music=true;_ip._hm.audiotype="mp3";_ip._hm.audio_preload=true;}else
{_ip._hm.audioContext=false;_ip._hm.sound=true;_ip._ds.sound=false;_ip._ds.music=true;_ip._hm.audiotype="mp3";_ip._hm.audio_preload=false;{}}
break;}}
function _iq_id(nr,url,_en)
{var request=new XMLHttpRequest();request.open('GET',url,true);request.responseType='arraybuffer';request.onload=function()
{{}
_ip.preload_message+="preloaded snd ac "+nr+"\n";_ip._hq.decodeAudioData(request.response,function(_dr){_ip._hn[nr].buffer=_dr;_ip._hn[nr]._gi=true;if(_en)
{if(_ip._hn[nr].loaded==false)
{_ip.audio_preloaded++;_ip._hn[nr].loaded=true;}
if(_ip.audio_preloaded==_ip._fh)
{{}
_iq_il();return;}
if(_ip._hm.audio_preload==false)
{{}
_iq_il();return;}}},_iq_in);}
request.send();}
function _cb(url,_el)
{var audio=new Audio();audio.src=url;audio.preload="auto";audio.vol=1;if(_el==true)
{$(audio).on("loadeddata",_dn);$(audio).on("canplay canplaythrough",_dn);}
return audio;}
function _dn()
{_ip.audio_preloaded++;if(_ip.audio_preloaded==_ip._fh)
{{}
_iq_il();return;}
if(_ip._hm.audio_preload==false)
{{}
_iq_il();return;}}
_ip._ho="";_ip._hp=-1;_ip._fi=0.4;_ip._dx="";_ip._dy=-1;_ip._dw=_aq;_ip._dv=_ap;function _ap(audio_id){if(audio_id=="")return;if(_ip._ds.music)
{if(_ip._hm.audioContext)
{_ao(audio_id);}else
{_an(audio_id);}}};function _aq(audio_id){if(audio_id=="")return;if(_ip._ds.music)
{if(_ip._hm.audioContext)
{_aqAudioContext(audio_id);}else
{_aqAudioTag(audio_id);}}};function _aqAudioContext(audio_id){{}
if(typeof(audio_id)==="undefined"&&_ip._dx!="")
{{}
audio_id=_ip._dx;_ip._dy=-1;}
var nr=audio_id;_ip._ho=audio_id;if(typeof(_ip._hn[nr])!=="undefined"&&typeof(_ip._hn[nr].buffer)!=="undefined")
{_ip._hn[nr].music=true;_ip._hn[nr].started=true;if(1)
{_ip._hp=_ip._hq.createBufferSource();_ip._hp.buffer=_ip._hn[nr].buffer;_ip._hp.loop=true;var gainNode=_ip._hq.createGain();_ip._hp.connect(gainNode);gainNode.connect(_ip._hq.destination);gainNode.gain.value=_ip._fi;_ip._hp.start(0);}else
{_ip._hp.start(0);}}else
{_ip._dx=audio_id;{}
if(_ip._dy==-1)
{{}
_ip._dy=setTimeout(_aqAudioContext,2000);}}};function _aqAudioTag(audio_id){var nr;if(audio_id=="")return;if(_ip._ho!=""){{}
return;}
_ip._ho=audio_id;if(_ip._ds.music)
{nr=audio_id;if(typeof(_ip._hn[nr])!=="undefined")
{var url="";if(_ip._hm.audiotype==='ogg'){url="snd_ogg/"+nr+".ogg";}else if(_ip._hm.audiotype==='mp3'){url="snd_mp3/"+nr+".mp3";}
if(url!='')
{{}
_ip._hn[nr].au=new Audio(url);_ip._hn[nr].au.load();_ip._hn[nr].started=true;_ip._hn[nr].music=true;_ip._hn[nr].au.loop=_ip._hn[nr].loop;_ip._hn[nr].au.volume=_ip._fi;_ip._hn[nr].au.play();}else
{_ip.showWarning("Sorry, no sound _hm found for this browser.");_ip._ds.music=false;}}}else
{{}}}
function _an(audio_id){if(audio_id=="")return;if(typeof(_ip._hn[audio_id])!=="undefined")
{if(_ip._hn[audio_id].started)
{_ip._hn[audio_id].au.pause();_ip._hn[audio_id].started=false;_ip._ho="";}}};function _ao(audio_id){if(_ip._dy!=-1)
{clearTimeout(_ip._dy);_ip._dy=-1;}
if(typeof(_ip._hn[audio_id])==="undefined")
{{}
return;}else
{if(_ip._hn[audio_id].started)
{if(_ip._hp)
{_ip._hp.stop(0);}
_ip._ho="";_ip._hn[audio_id].started=false;_ip._ho="";}}};_ip._du=_am;function _am(nr)
{if(_ip._hm.sound==true&&_ip._ds.sound!=false)
{if(_ip._hn[nr]!==undefined)
{if(_ip._hn[nr].started)
{if(_ip._hn[nr]._gi)
{if(_ip._hn[nr].buffer!==undefined)
{_ip._hn[nr].source.stop(0);_ip._hn[nr].started=false;}else
{{}}}else
{if(typeof(_ip._hn[nr])!=="undefined")
{_ip._hn[nr].au.pause();_ip._hn[nr].started=false;}}}}}}
_ip._gl=_cl;function _cl(nr)
{if(_ip._hm.sound==true&&_ip._ds.sound!=false)
{if(_ip._hn[nr]!==undefined)
{if(_ip._hn[nr]._gi)
{if(_ip._hn[nr].buffer!==undefined)
{var source=_ip._hq.createBufferSource();return _ip._hn[nr].buffer.duration;}else
{{}
return-1;}}else
{if(_ip._hn[nr].au!==undefined)
{return _ip._hn[nr].au.duration;}else
{{}}}}}else
{{}}}
_ip._fd=_bx;function _bx(nr)
{if(_ip._hm.sound==true&&_ip._ds.sound!=false)
{if(_ip._hn[nr]!==undefined)
{if(_ip._hn[nr]._gi)
{if(_ip._hn[nr].buffer!==undefined)
{var source=_ip._hq.createBufferSource();source.buffer=_ip._hn[nr].buffer;source.connect(_ip._hq.destination);source.start(0);_ip._hn[nr].source=source;_ip._hn[nr].started=true;}else
{{}}}else
{if(_ip._hn[nr].au!==undefined)
{_ip._hn[nr].au.currentTime=0;_ip._hn[nr].au.play();_ip._hn[nr].started=true;}else
{{}}}}}else
{{}}}
_ip._ds._dt=true;_ip.input={};_ip.input.mouse={};_ip.input.rawmouse={};function _cf(){if(('ontouchstart'in window)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0)){return true;}
return false;};function _co(){if(_ip._hm.touchmode)
{if(navigator.maxTouchPoints>1)return navigator.maxTouchPoints;if(navigator.msMaxTouchPoints>1)return navigator.msMaxTouchPoints;return 1;}
return 0;}
function _chMouseWheel()
{$('body').bind('mousewheel',_iqHandleMouseWheel);};function _iqHandleMouseWheel(e)
{if(typeof(_ip.mouseWheelCallback)!=="undefined"&&_ip.mouseWheelCallback!=null)
{_ip.mouseWheelCallback(e.originalEvent.wheelDelta);}};_ip._ea=null;function _as(e)
{_bs(e);e.stopPropagation();e.preventDefault();_ip._ea($(this).attr("label"));}
function _bs(e)
{if(e.type.match(/(up|end)$/i))
{}else
{var o=_f({x:e.pageX,y:e.pageY});_ip.input.mouse.x=o.x;_ip.input.mouse.y=o.y;if(e.originalEvent)
{if(e.originalEvent.touches)
{if(e.originalEvent.touches[0])
{var o=_f({x:e.originalEvent.touches[0].pageX,y:e.originalEvent.touches[0].pageY});_ip.input.mouse.x=o.x;_ip.input.mouse.y=o.y;}}}
if(e.touches)
{var o=_f({x:e.touches[0].pageX,y:e.touches[0].pageY});_ip.input.mouse.x=o.x;_ip.input.mouse.y=o.y;}}}
_ip._dz=null;function _ar(e)
{{}
_bs(e);e.stopPropagation();e.preventDefault();if(e.type==="mouseover")
{_ip._dz($(this).attr("label"),"over");}else
{_ip._dz($(this).attr("label"),"out");}}
_ip._ex=_bo;_ip._ey=_bp;function _bo()
{_ip.savedButtonContext=_ip._ea;_ip.savedButtonContextOver=_ip._dz;}
function _bp()
{_ip._ea=_ip.savedButtonContext;_ip._dz=_ip.savedButtonContextOver;}
_ip._fk=_ca;function _ca(box,label,cb,cb_over)
{if(box.kind!="_gc"&&box.kind!="_gf"&&box.kind!="_gb"&&box.kind!="_gd"&&box.kind!="hybridCssSprite")
{{}
return null;}
_ip._ea=cb;if(box.jquery.html()=="")box.jquery.html("<img width='100%' height='100%' src='"+_ip.dataurls['hotspots']+"' />");var hotspot=box.jquery;hotspot.attr("label",label);hotspot.on('click',_as);if(_ip._hm.maxtouches>0)
{hotspot.on('touchstart',_as);hotspot.on('touchmove',_as);}else
{if(cb_over!=undefined)
{_ip._dz=cb_over;hotspot.on('mouseover',_ar);hotspot.on('mouseout',_ar);}}
hotspot.bind('dragstart',_jQuery_io);};function _cj()
{var c=false;if(window.DeviceOrientationEvent)c=true;if(window.DeviceMotionEvent)c=true;if(window.MozOrientationEvent)c=true;return c;}
_ip._fo=_cc;function _cc(tf,uth)
{if(_ip._hm.tilt==false)
{{}}else
{{}
if(tf)
{_ip._userTiltHandler=uth;if(window.DeviceOrientationEvent){window.addEventListener("deviceorientation",_k,true);}else if(window.DeviceMotionEvent){window.addEventListener('devicemotion',_l,true);}else{window.addEventListener('MozOrientation',_m,true);}}else
{if(window.DeviceOrientationEvent){window.removeEventListener("deviceorientation",_k,true);}else if(window.DeviceMotionEvent){window.removeEventListener("devicemotion",_l,true);}else{window.removeEventListener("MozOrientation",_m,true);}}}};function _j(obj)
{var new_obj={};new_obj.h=obj.h;switch(window.orientation){case 0:new_obj.x=-obj.x;new_obj.y=-obj.y;break;case 180:new_obj.x=-obj.x;new_obj.y=-obj.y;break;case-90:new_obj.x=-obj.x;new_obj.y=-obj.y;break;case 90:new_obj.x=obj.x;new_obj.y=obj.y;break;}
return new_obj;}
function _k(event)
{switch(top.orientation)
{case-90:_ip._userTiltHandler({x:-event.beta,y:event.gamma,h:1,a:event.alpha,t:top.orientation});break;case 90:_ip._userTiltHandler({x:event.beta,y:-event.gamma,h:1,a:event.alpha,t:top.orientation});break;case 0:_ip._userTiltHandler({x:event.gamma,y:event.beta,h:1,a:event.alpha,t:top.orientation});break;case 180:_ip._userTiltHandler({x:-event.gamma,y:-event.beta,h:1,a:event.alpha,t:top.orientation});break;default:_ip._userTiltHandler({x:event.beta,y:event.gamma,h:1,a:"top orientaiton not matched : "+event.alpha});}}
function _l(event)
{_ip._userTiltHandler({x:event.acceleration.x,y:event.acceleration.y,h:2,a:"none"});}
function _m(event)
{_ip._userTiltHandler({x:orientation.x,y:orientation.y,h:3,a:"none"});}
_ip._fp=_cd;function _cd(tf,ukh)
{if(typeof(_ip.input)==="undefined")
_ip.input={};_ip.input.keys=[];_ip.input.key_modifiers={};if(tf)
{var rx=/INPUT|SELECT|TEXTAREA/i;$(document).bind("keydown keypress",function(e){if(e.which==8){if(!rx.test(e.target.tagName)||e.target.disabled||e.target.readOnly){e.preventDefault();}}});$(document).keydown(_ce);$(document).keyup(_ce);{}
_ip._a=ukh;}
else
{$(document).unbind("keydown keypress keyup");_ip._a=null;{}}}
function _ce(ev)
{var down=(ev.type=="keydown");if(_ip.input.keys[ev.which]!=down)
{if(typeof(_ip._a)!="undefined")
{_ip._a(ev.which,down);}}
_ip.input.keys[ev.which]=down;ev.preventDefault;}
_ip.makeDraggable=_w;function _w(o,down,up,drag,move)
{if(o.jquery.html()=="")
{o.jquery.html("<img width='100%' height='100%' src='"+_ip.dataurls['hotspots']+"' />");}
_genericDrag.up=up;_genericDrag.down=down;_genericDrag.drag=drag;_genericDrag.move=move;var hotspot=o.jquery;var htsp=document.getElementById(o.jquery.attr("id"));if(typeof htsp.style.msTouchAction!='undefined')
htsp.style.msTouchAction="none";if(window.navigator.msPointerEnabled)
{htsp.addEventListener("MSPointerMove",_cs,false);htsp.addEventListener("MSPointerDown",_cs,false);htsp.addEventListener("MSPointerUp",_cs,false);if(typeof(move)!=="undefined")
{{}
htsp.addEventListener("MSPointerOver",_cs,false);}}
window.onmouseup=_cs;htsp.onmousedown=_cs;htsp.onmouseup=_cs;htsp.onmousemove=_cs;htsp.ontouchstart=_cs;htsp.ontouchmove=_cs;htsp.ontouchend=_cs;htsp.ontouchcancel=_cs;hotspot.on('dragstart',function(e){e.preventDefault();console.log("dragstart");});}
function _iqGetOffsetCoord(evt)
{var el=evt.target,x=0,y=0;while(el&&!isNaN(el.offsetLeft)&&!isNaN(el.offsetTop)){x+=el.offsetLeft-el.scrollLeft;y+=el.offsetTop-el.scrollTop;el=el.offsetParent;}
x=evt.clientX-x;y=evt.clientY-y;return{x:x,y:y};}
var _genericDrag={};_genericDrag.lastXY={};function _cs(eventObject)
{if(eventObject.preventManipulation)
eventObject.preventManipulation();if(eventObject.preventDefault)
eventObject.preventDefault();var touchPoints=(typeof eventObject.changedTouches!='undefined')?eventObject.changedTouches:[eventObject];for(var i=0;i<touchPoints.length;++i)
{var touchPoint=touchPoints[i];var touchPointId=(typeof touchPoint.identifier!='undefined')?touchPoint.identifier:(typeof touchPoint.pointerId!='undefined')?touchPoint.pointerId:1;if(eventObject.type.match(/(down|start)$/i)){var crsr=_f({x:touchPoint.pageX,y:touchPoint.pageY});_ip.input.mouse.x=crsr.x;_ip.input.mouse.y=crsr.y;_genericDrag.lastXY[touchPointId]={x:crsr.x,y:crsr.y};_genericDrag.down(touchPointId,crsr.x,crsr.y);_genericDrag.drag(touchPointId,crsr.x,crsr.y,0,0);}
else if(eventObject.type.match(/move$/i))
{if(_genericDrag.lastXY[touchPointId]&&!(_genericDrag.lastXY[touchPointId].x==touchPoint.pageX&&_genericDrag.lastXY[touchPointId].y==touchPoint.pageY))
{var crsr=_f({x:touchPoint.pageX,y:touchPoint.pageY});_ip.input.mouse.x=crsr.x;_ip.input.mouse.y=crsr.y;var dx=crsr.x-_genericDrag.lastXY[touchPointId].x;var dy=crsr.y-_genericDrag.lastXY[touchPointId].y;_genericDrag.lastXY[touchPointId]={x:crsr.x,y:crsr.y};_genericDrag.drag(touchPointId,crsr.x,crsr.y,dx,dy);}else
{if(typeof(_genericDrag.move)!=="undefined")
{var crsr=_f({x:eventObject.pageX,y:eventObject.pageY});_genericDrag.move(1,crsr.x,crsr.y);}}}
else if(eventObject.type.match(/(up|end)$/i))
{var crsr=_f({x:touchPoint.pageX,y:touchPoint.pageY});if(_genericDrag.up!=null)
_genericDrag.up(touchPointId,crsr.x,crsr.y);delete _genericDrag.lastXY[touchPointId];}}}
_ip.createHotspot=_dd;function _dd(o,handler)
{if(o.jquery.html()=="")
{o.jquery.html("<img width='100%' height='100%' src='"+_ip.dataurls['hotspots']+"' />");}
var hotspot=o.jquery;{}
var regular_dom=document.getElementById(o.jquery.attr("id"));if(typeof regular_dom.style.msTouchAction!='undefined')
regular_dom.style.msTouchAction="none";$(window).mouseup(handler);if(_ip._hm.touchmode)
{hotspot.on('touchstart touchend touchcancel touchmove',handler);$("body").on("touchend",handler);$(document).on("touchend",handler);$(document).on("mouseup",handler);$('html').on("touchend",handler);hotspot.mouseover(handler);hotspot.mouseup(handler);}else
{hotspot.mouseover(handler);hotspot.mouseleave(handler);hotspot.click(handler);hotspot.mousedown(handler);$("body").mouseup(handler);$(document).mouseup(handler);$('html').mouseup(handler);hotspot.mousemove(handler);}
hotspot.on('dragstart',function(e){e.preventDefault();console.log("dragstart");});}
_ip._dq=_f;function _f(obj)
{obj.x=(obj.x-_ip.ox)/_ip.f;obj.y=(obj.y-_ip.oy)/_ip.f;return obj;}
_ip._ee=_at;function _at(o,tf)
{if(o.kind!="hybridSpriteButton")
{{}
return;}
if(typeof(_ip._gj[o.image].ss[o.anim][2])==="undefined")
{{}
return;}
var x1=_ip._gj[o.image].ss[o.anim][0][0];var y1=_ip._gj[o.image].ss[o.anim][0][1];var w1=_ip._gj[o.image].ss[o.anim][0][2];var h1=_ip._gj[o.image].ss[o.anim][0][3];var x2=_ip._gj[o.image].ss[o.anim][2][0];var y2=_ip._gj[o.image].ss[o.anim][2][1];var w2=_ip._gj[o.image].ss[o.anim][2][2];var h2=_ip._gj[o.image].ss[o.anim][2][3];var ii=_ip._gj[o.image].img;if(tf==false)
{o.context.drawImage(ii,x1,y1,w1,h1,0,0,w1,h1);}else
{o.context.drawImage(ii,x2,y2,w2,h2,0,0,w2,h2);}
o.link_to_in.css("top","0");}
_ip._hd=_au;function _au(l,x,y,w,h,image,anim,label,cb,cb_over)
{if(l.kind!="_gc"&&l.kind!="_gf")
{{}
return null;}
_ip._ea=cb;var o={};o.id="hybridSpriteButton"+_ip._gq;o.kind="hybridSpriteButton";o.label=label;o.container=_ip._hi(l,x,y,w,h);o.container.jquery.attr("label",label);o.jquery=o.container.jquery;var canvas_w,canvas_h;o.image=image;o.anim=anim;o.container.jquery.html('<div class="image_button" id="'+o.id+'_in" style="width: 100%; height: 200%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><canvas id="'+o.id+'_canv"></canvas></div>');o.link_to_in=$("#"+o.id+"_in");var _gg="<canvas id='"+o.id+"'></canvas>";o.canvas=$("#"+o.id+"_canv")[0];var hh=_ip._gj[image];var x1=hh.ss[anim][0][0];var y1=hh.ss[anim][0][1];var w1=hh.ss[anim][0][2];var h1=hh.ss[anim][0][3];var x2=hh.ss[anim][1][0];var y2=hh.ss[anim][1][1];var w2=hh.ss[anim][1][2];var h2=hh.ss[anim][1][3];var ii=hh.img;canvas_w=w1;if(w2>canvas_w)canvas_w=w2;canvas_h=h1+h2;o.canvas.width=canvas_w;o.canvas.height=canvas_h;$("#"+o.id+"_canv").width(toPx(w)).height(toPx(h*2));o.context=o.canvas.getContext('2d');o.context.drawImage(ii,x1,y1,w1,h1,0,0,w1,h1);o.context.drawImage(ii,x2,y2,w2,h2,0,h1,w2,h2);o.container.jquery.on('click',_as);if(_ip._hm.maxtouches>0)
{o.container.jquery.on('touchstart',_as);if(navigator.userAgent.indexOf("Android")==-1)
{}}else
{if(cb_over!=undefined)
{_ip._dz=cb_over;o.container.jquery.on('mouseover',_ar);o.container.jquery.on('mouseout',_ar);}}
o.container.jquery.bind('dragstart',_jQuery_io);l._gq++;_ip._gq++;return o;}
_ip._hf=_dc;function _dc(layer,x,y,w,h,image,label,cb)
{if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
_ip._ea=cb;var o={};o.id="hybridImageButton"+_ip._gq;o.kind="hybridImageButton";o.label=label;o.container=_ip._hi(layer,x,y,w,h);o.container.jquery.attr("label",label);o.jquery=o.container.jquery;o.container.jquery.html('<div class="image_button" style="width: 100%; height: 200%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><img src="'+_ip._fw+_ip._gj[image].src+'" width="100%" height="100%"></div>');o.container.jquery.on('click',_as);if(_ip._hm.maxtouches>0)
{o.container.jquery.on('touchstart',_as);o.container.jquery.on('touchend',_as);o.container.jquery.on('touchmove',_as);}
o.container.jquery.bind('dragstart',_jQuery_io);layer._gq++;_ip._gq++;return o;}
_ip._hb=_da;function _da(layer,x,y,w,h,tekst,label,cb,fontsz)
{if(fontsz==undefined)fontsz=16;if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
_ip._ea=cb;var o={};o.id="hybridStandardButton"+_ip._gq;o.kind="hybridStandardButton";o.label=label;o.container=_ip._hi(layer,x,y,w+5,h+5);o.container.jquery.attr("label",label);o.jquery=o.container.jquery;o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+'; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><span class="btn-content" unselectable="on" style="padding: auto; font-size: '+toPx(fontsz)+';">'+tekst+'</span></a>');o.container.jquery.on('click',_as);if(_ip._hm.maxtouches>0)
{o.container.jquery.on('touchstart',_as);}
o.container.jquery.bind('dragstart',_jQuery_io);layer._gq++;_ip._gq++;return o;}
function _cg(){return!!document.createElement('canvas').getContext;};_ip._hh=_de;function _de(layer,x,y,w,h,optimize){if(typeof(optimize)==="undefined")optimize=true;var o={};o.id="canv"+_ip._gq;var _gg="<canvas id='"+o.id+"'></canvas>"
$(_gg).appendTo(layer.jquery);o.jquery=$("#"+o.id);o.jquery.css("z-index",layer._gq).css({left:toPx(x),top:toPx(y)});o.kind="_gd";o.canvas=$("#"+o.id)[0];o.w=w;o.h=h;o.start_w=w;o.start_h=h;if(optimize)
{var real_w=w*_ip.f;var real_y=h*_ip.f;real_w=Math.round(real_w);real_y=Math.round(real_y);o.canvas.width=real_w;o.canvas.height=real_y;var ctx=o.canvas.getContext('2d');ctx.scale(_ip.f,_ip.f);}else
{o.canvas.width=w;o.canvas.height=h;}
o.jquery.width(toPx(w)).height(toPx(h));o.context=o.canvas.getContext('2d');_b(o.jquery);layer._gq++;_ip._gq++;return o;};_ip.createHiddenCanvas=_x;function _x(x,y,w,h){var o={};o.id="canv"+_ip._gq;o.kind="_gd";o.canvas=document.createElement('canvas');o.w=w;o.h=h;o.canvas.width=w;o.canvas.height=h;o.context=o.canvas.getContext('2d');_ip._gq++;return o;};_ip._hl=_dj;function _dj(o)
{{}}
_ip._gs=_bt;function _bt(ctx,x,y,w,h,radius)
{if(typeof(radius)=="number")
{var temp=radius;radius=[temp,temp,temp,temp];}
var r=x+w;var b=y+h;ctx.beginPath();ctx.moveTo(x+radius[0],y);ctx.lineTo(r-radius[1],y);if(radius[1]!=0)
ctx.quadraticCurveTo(r,y,r,y+radius[1]);ctx.lineTo(r,y+h-radius[2]);if(radius[2]!=0)
ctx.quadraticCurveTo(r,b,r-radius[2],b);ctx.lineTo(x+radius[3],b);if(radius[3]!=0)
ctx.quadraticCurveTo(x,b,x,b-radius[3]);ctx.lineTo(x,y+radius[0]);if(radius[0]!=0)
ctx.quadraticCurveTo(x,y,x+radius[0],y);}
_ip._gr=_cv;function _cv(hbc,img_nr,label,x,y,f,r,sx,sy)
{if(r===undefined)r=0;if(sx===undefined)sx=1;if(sy===undefined)sy=sx;if(f===undefined)f=0;if(x===undefined)x=0;if(y===undefined)y=0;var bw,bh;var px,py;var rx,ry;var image;if(label===undefined)
{{}
return;}
if(typeof(_ip._gj[img_nr])==="undefined")
{{}
return;}
if(!_ip._gj[img_nr].kind=="sprite")
{{}
return;}else
{if(typeof(_ip._gj[img_nr].ss[label])==="undefined")
{{}
return;}
if(typeof(_ip._gj[img_nr].ss[label][f])==="undefined")
{{}
return;}
px=_ip._gj[img_nr].ss[label][f][0];py=_ip._gj[img_nr].ss[label][f][1];bw=_ip._gj[img_nr].ss[label][f][2];bh=_ip._gj[img_nr].ss[label][f][3];if(typeof(_ip._gj[img_nr].ss[label][f][5])!=="undefined")
rx=_ip._gj[img_nr].ss[label][f][5];else
rx=bw/2;if(typeof(_ip._gj[img_nr].ss[label][f][6])!=="undefined")
ry=_ip._gj[img_nr].ss[label][f][6];else
ry=bh/2;image=_ip._gj[img_nr].img;}
hbc.context.save();hbc.context.translate(x,y);hbc.context.scale(sx,sy);hbc.context.rotate(r*_ip.TO_RADIANS);hbc.context.drawImage(image,px,py,bw,bh,-rx,-ry,bw,bh);hbc.context.restore();}
_ip._hk=_di;function _di(hbc)
{hbc.context.clearRect(0,0,hbc.w,hbc.h);hbc.context.clearRect(0,0,hbc.start_w,hbc.start_h);}
_ip.drawImage=_cu;function _cu(hbc,img_nr,x,y,r,s)
{{}
if(r===undefined)r=0;if(s===undefined)s=1;if(x===undefined)x=0;if(y===undefined)y=0;var bw,bh;var sw,sh;var image;if(typeof(_ip._gj[img_nr])==="undefined")
{{}
return;}
image=_ip._gj[img_nr].img;bw=_ip._gj[img_nr].w;bh=_ip._gj[img_nr].h;hbc.context.save();hbc.context.translate(x,y);hbc.context.scale(s,s);hbc.context.rotate(r*_ip.TO_RADIANS);bw=Math.floor(bw);bh=Math.floor(bh);bh=Math.floor(bh);{}
hbc.context.drawImage(image,0,0,bw,bh,-bw/2,-bh/2,bw,bh);hbc.context.restore();}
_ip.canvasToImageManifest=_dl;function _dl(hbc,label)
{if(typeof(_ip._gj[label])==="undefined")
{_ip._gj[label]={};{}
_ip._gj[label].preload=true;_ip._gj[label].w=hbc.canvas.width;_ip._gj[label].h=hbc.canvas.height;_ip._gj[label].img=new Image();{}
_ip._gj[label].img.src=hbc.canvas.toDataURL();{}}else
{{}}}
_ip.canvasToCanvas=__gdToCanvas;function __gdToCanvas(hbc,hbc_source,x,y,r,s)
{if(r===undefined)r=0;if(s===undefined)s=1;if(x===undefined)x=0;if(y===undefined)y=0;var bw,bh;var sw,sh;var image;if(hbc_source.kind!=="_gd")
{{}
return;}
image=hbc_source.canvas;bw=hbc_source.w;bh=hbc_source.h;hbc.context.save();hbc.context.translate(x,y);hbc.context.scale(s,s);hbc.context.rotate(r*_ip.TO_RADIANS);hbc.context.drawImage(image,0,0,bw,bh,-bw/2,-bh/2,bw,bh);hbc.context.restore();}
_ip.drawBlockSprite=_cw;function _cw(hbc,img_nr,x,y,f,r,sx,sy)
{if(r===undefined)r=0;if(sx===undefined)sx=1;if(sy===undefined)sy=sx;if(f===undefined)f=0;if(x===undefined)x=0;if(y===undefined)y=0;var bw,bh;var sw,sh;var image;if(typeof(_ip._gj[img_nr])==="undefined")
{{}
return;}
if(!_ip._gj[img_nr].kind=="blocksprite")
{{}
return;}else
{bw=_ip._gj[img_nr].ss.bw;bh=_ip._gj[img_nr].ss.bh;sw=_ip._gj[img_nr].ss.sw;sh=_ip._gj[img_nr].ss.sh;image=_ip._gj[img_nr].img;}
hbc.context.save();hbc.context.translate(x,y);hbc.context.scale(sx,sy);hbc.context.rotate(r*_ip.TO_RADIANS);var px=(f%sw)*bw;var py=Math.floor(f/sw)*bh;hbc.context.drawImage(image,px,py,bw,bh,-bw/2,-bh/2,bw,bh);hbc.context.restore();}
function _y(ctx,top_x,top_y,width,height,radius)
{if(isNaN(radius)||radius<1)return;radius|=0;var context=ctx;var imageData;imageData=context.getImageData(top_x,top_y,width,height);var pixels=imageData.data;}
function _iq_hw(){if(_ip.contextMenu!=false)
{$(document).on("contextmenu",_ax);$(document).mouseup(_dk);if(window.navigator.msPointerEnabled)
{document.addEventListener("MSPointerMove",_dk,false);document.addEventListener("MSPointerDown",_dk,false);document.addEventListener("MSPointerUp",_dk,false);}
if(_ip._hm.touchmode)
{document.onmousedown=_dk;document.onmouseup=_dk;document.onmousemove=_dk;document.ontouchstart=_dk;document.ontouchmove=_dk;document.ontouchend=_dk;document.ontouchcancel=_dk;}}};function _dk(eventObject){var touchPoints=(typeof eventObject.changedTouches!='undefined')?eventObject.changedTouches:[eventObject];for(var i=0;i<touchPoints.length;++i)
{var touchPoint=touchPoints[i];var touchPointId=(typeof touchPoint.identifier!='undefined')?touchPoint.identifier:(typeof touchPoint.pointerId!='undefined')?touchPoint.pointerId:1;if(eventObject.type.match(/(down|start)$/i)){var crsr={x:touchPoint.pageX,y:touchPoint.pageY};_ip.input.rawmouse.x=crsr.x;_ip.input.rawmouse.y=crsr.y;}
else if(eventObject.type.match(/move$/i))
{if(_genericDrag.lastXY[touchPointId]&&!(_genericDrag.lastXY[touchPointId].x==touchPoint.pageX&&_genericDrag.lastXY[touchPointId].y==touchPoint.pageY))
{var crsr={x:touchPoint.pageX,y:touchPoint.pageY};_ip.input.rawmouse.x=crsr.x;_ip.input.rawmouse.y=crsr.y;}else
{if(typeof(_genericDrag.move)!=="undefined")
{var crsr={x:eventObject.pageX,y:eventObject.pageY};_ip.input.rawmouse.x=crsr.x;_ip.input.rawmouse.y=crsr.y;}}}
else if(eventObject.type.match(/(up|end)$/i))
{var crsr={x:touchPoint.pageX,y:touchPoint.pageY};if(typeof(touchPoint.pageX)==="undefined")
{crsr={x:_ip.input.rawmouse.x,y:_ip.input.rawmouse.y};}
if(crsr.x<50&&crsr.y<50)
{_ax({type:"other",pageX:crsr.x,pageY:crsr.y});}}}
return;};function _iq_if(event){$("#context-menu").remove();};function _ax(event)
{if(event.stopPropagation)event.stopPropagation();if(event.preventDefault)event.preventDefault();var top_window=100,left_window=100;switch(event.type)
{case"mouseup":left_window=event.pageX-160;top_window=event.pageY-75;break;case"contextmenu":left_window=event.pageX-160;top_window=event.pageY-75;break;}
if(left_window<0)left_window=0;if(top_window<0)top_window=0;if($("#context-menu").length==0)
{var _gg="";_gg+="<div class='hybrid-menu' id='context-menu'>";_gg+="<hr>";_gg+="<h1 id='context-menu-title' style='cursor:default;'><table><tr><td> &nbsp; "+_ip._gw("4879627269642047616d6520656e67696e652076")+_ip.version+" &nbsp; </td><td>";_gg+="<ul><li onclick='_iq_if(0);'><a href='javascript: _iq_if();' title='Sluiten'>X</a></li><ul></td></tr></table></h1>";_gg+="<ul><li><li><h2>Opties</h2></li>";if(_ip._ds.sound)
{_gg+="<li><a href='javascript: _ak(0);' onclick='_ak(0);' title='Geluidseffecten uit'>&#8738;<b>&#9587;</b>  Geluid uit</a></li>";}else
{_gg+="<li><a href='javascript: _ak(1);'  onclick='_ak(1);' title='Geluidseffecten aan'>&#8738; Geluid aan</a></li>";}
if(_ip._ds.music)
{_gg+="<li><a href='javascript: _al(0);' onclick='_al(0);' title='Muziek uit'>&#9836;<b>&#9587;</b>  Muziek uit</a></li>";}else
{_gg+="<li><a href='javascript: _al(1);' onclick='_al(1);' title='Muziek aan'>&#9836; Muziek aan</a></li>";}
if(_ip._ft)
{_gg+="<li><a onclick='_iq_hs(0);' title='Debug uit'>Debug uit</a></li>";}else
{_gg+="<li><a onclick='_iq_hs(1);' title='Debug aan'>Debug aan</a></li>";}
_gg+="<li><a href='javascript: _iq_hy();' title='Debug aan'>Meld een probleem</a></li>";_gg+="<li><i>...</i></li>";var str=_ip._fe.browser;if(_ip._fe.browser=="unidentified")str="-";_gg+="<li>"+_ip._fe.device+", "+_ip._fe.OS+" "+str+"<h2>GameEngine + Audio</h2></li><li><a href='http://www.snoep.at/games/?language=nl' target=_top title='HTML5 gameEngine by www.SnoepGames.nl'>&copy; 2014 SnoepGames</a></li>";if(typeof(_ip.copyright_url)!=="undefined"&&typeof(_ip.copyright_name)!=="undefined")
{_gg+="<li><h2>Edition copyright</h2></li><li><a href='"+_ip.copyright_url+"' target=_top title='copyright client'>&copy; 2014 "+_ip.copyright_name+"</a></li>";}
_gg+="<li><hr></li>";_gg+="</ul></div>";$(_gg).appendTo("body").css({top:top_window+"px",left:left_window+"px"});$('#context-menu-title').mousedown(_dg);}else
{_iq_if();}}
function _dg(e){{}
_ip.dragging={};_ip.dragging.pageX0=e.pageX;_ip.dragging.pageY0=e.pageY;_ip.dragging.elem=$('#context-menu');_ip.dragging.offset0=$('#context-menu').offset();function _aj(e){var left=_ip.dragging.offset0.left+(e.pageX-_ip.dragging.pageX0);var top=_ip.dragging.offset0.top+(e.pageY-_ip.dragging.pageY0);$(_ip.dragging.elem).offset({top:top,left:left});}
function _i(e){$('body').off('mousemove',_aj).off('mouseup',_i);}
$('body').on('mouseup',_i).on('mousemove',_aj);}
_ip.TO_RADIANS=Math.PI/180;_ip.TO_DEG=180/Math.PI;_ip.PI2=Math.PI*2;_ip.Math={};_ip.random_seed=14;_ip.random_nrs_asked=0;_ip.Math.sign=_iq_sign;function _iq_sign(a)
{if(a<0)return-1;if(a>0)return 1;return 0;}
_ip.Math.cloneObject=_iqCloneObject;function _iqCloneObject(destination,source)
{for(var property in source){if(typeof source[property]==="object"&&source[property]!==null&&destination[property]){clone(destination[property],source[property]);}else{destination[property]=source[property];}}};_ip.Math.checkNestedExistence=_iqCheckNested;function _iqCheckNested(obj){var args=Array.prototype.slice.call(arguments,1);for(var i=0;i<args.length;i++){if(!obj||!obj.hasOwnProperty(args[i])){return false;}
obj=obj[args[i]];}
return true;}
_ip.sort_shuffle=_iq_hussle;function _iq_hussle(a,b)
{if(Math.random()<0.5)return-1;else return 1;}
_ip.localToGlobal=_z;function _z(ax,x,y)
{var p={};if(typeof(ax.sx)==="undefined")
{if(typeof(ax.s)!=="undefined")
{ax.sx=ax.s;ax.sy=ax.s;}else
{ax.sx=1;ax.sy=1;}}
var r=ax.r*_ip.TO_RADIANS;p.x=ax.x+ax.sx*(x*Math.cos(r)-y*Math.sin(r));p.y=ax.y+ax.sy*(x*Math.sin(r)+y*Math.cos(r));return p;}
_ip._ev=_bm;function _bm(){var r1=(_ip.random_seed+197)%2048+(_ip.random_nrs_asked);var r2=(_ip.random_seed+709)%1024+Math.floor(_ip.random_nrs_asked/2+15*Math.cos(r1));;var r3=(_ip.random_seed+2239)%512+Math.floor(_ip.random_nrs_asked/2+15*Math.sin(r2));var rand=(r1+r2+r3)%1000;_ip.random_seed+=(rand+r3)%(r1+r2);_ip.random_seed+=r3+r2;_ip.random_nrs_asked++;if(_ip.random_nrs_asked>15000)_ip.random_nrs_asked=0;return rand;};_ip._ew=_bn;function _bn(nr){_ip.random_seed=Math.floor(nr);_ip.random_nrs_asked=Math.floor(nr);};_ip.stringToNumber=_iqStringToNumber;function _iqStringToNumber(str){str=str.toLowerCase();str=str.replace(/[^a-z]/gi,'');var nr=0;var i;for(i=0;i<str.length;i+=3)
{{}
nr+=(str.charCodeAt(i)-96)*i;}
return nr;};_ip._ez=false;function _iq_ih()
{var wh,ww,f;ww=$(window).innerWidth();wh=$(window).innerHeight();if(!_ip.width)_ip.width=800;if(!_ip.height)_ip.height=800;if(!_ip._ed)_ip._ed="center";if(!_ip._eb)_ip._eb="lineair";if(_ip._fe.browser=="android")
{wh=$(window).outerHeight();}
if(_ip._fe.OS=="iOs7")
{}
{}
switch(_ip._eb)
{case"lineair":var fx=ww/_ip.width;var fy=wh/_ip.height;{}
{}
_ip.f=fy;if(fx<fy)_ip.f=fx;{}
_ip.ox=(ww-_ip.width*_ip.f)/2;_ip.oy=(wh-_ip.height*_ip.f)/2;{}
{}
if($("#hybridStage").length!=0)
{$("#hybridStage").css("left",_ip.ox+"px").css("top",_ip.oy+"px").css("width",toPx(_ip.width)).css("height",toPx(_ip.height));}
break;case"responsive-width":_ip.f=wh/_ip.height;{}
{}
_ip.ox=0;_ip.oy=0;_ip.width=_ip.height*(ww/wh);_ip.height=_ip.height;if($("#hybridStage").length!=0)
{$("#hybridStage").css("left",_ip.ox+"px").css("top",_ip.oy+"px").css("width",toPx(_ip.width)).css("height",toPx(_ip.height));}
break;case"responsive":_ip.f=1;{}
{}
_ip.ox=0;_ip.oy=0;_ip.width=ww;_ip.height=wh;if($("#hybridStage").length!=0)
{$("#hybridStage").css("left",_ip.ox+"px").css("top",_ip.oy+"px").css("width",toPx(_ip.width)).css("height",toPx(_ip.height));}
break;default:_ip.throwError("Not a known scalemode for hybrid stage: '"+_ip._eb+"'\n");break;}
if(_ip._fe.OS=="iOs7")
{}};_ip._gm=_cm;function _cm()
{var box1=$('<div style="width:100px;height:100px;overflow:auto;"></div>').appendTo('body');var box2=$('<div style="width:200px;height:200px;background-color:#aaa;"></div>').appendTo(box1);var box3=$('<div style="width:100%"></div>').appendTo(box1);var width=100-box3.width();box1.remove();return width;};_ip.makeScrollable=_aa;function _aa(o)
{o.jquery.css("overflow-y","scroll");o.jquery.css("-webkit-overflow-scrolling","touch");};_ip.setPadding=_ab;function _ab(o,t,r,b,l)
{o.jquery.css("padding",toPx(t)+" "+toPx(r)+" "+toPx(b)+" "+toPx(l));};_ip._eg=_bc;function _bc(e,v)
{if(v)
e.jquery.show();else
e.jquery.hide();}
_ip.setTransitionTiming=_iqSetTransitionTiming;function _iqSetTransitionTiming(e,length,easing)
{if(typeof(length)==="undefined")length="0.4";if(typeof(easing)==="undefined")easing="ease";length+="s";var tx1=0.250;var ty1=0.100;var tx2=0.250;var ty2=1.000;switch(easing)
{case"linear":tx1=0.250;ty1=0.250;tx2=0.750;ty2=0.750;break;case"ease":tx1=0.250;ty1=0.100;tx2=0.250;ty2=1.000;break;case"easeOut":tx1=0.0;ty1=0.0;tx2=0.580;ty2=1.000;break;case"easeIn":tx1=0.42;ty1=0.0;tx2=1.00;ty2=1.000;break;case"easeInOut":tx1=0.455;ty1=0.030;tx2=0.515;ty2=0.955;break;case"easeInOutBack":tx1=0.680;ty1=-0.550;tx2=0.265;ty2=1.550;break;case"easeInBack":tx1=0.600;ty1=-0.280;tx2=0.735;ty2=0.045;break;case"easeOutBack":tx1=0.175;ty1=0.885;tx2=0.320;ty2=1.275;break;}
var value="cubic-bezier("+tx1+", "+ty1+", "+tx2+", "+ty2+")";tx1=Math.max(0,Math.min(tx1,1));ty1=Math.max(0,Math.min(ty1,1));tx2=Math.max(0,Math.min(tx2,1));ty2=Math.max(0,Math.min(ty2,1));var value_clipped="cubic-bezier("+tx1+", "+ty1+", "+tx2+", "+ty2+")";e.jquery.css("-webkit-transition","all "+length+" "+value_clipped);e.jquery.css("-webkit-transition","all "+length+" "+value);e.jquery.css("-moz-transition","all "+length+" "+value);e.jquery.css("-o-transition","all "+length+" "+value);e.jquery.css("transition","all "+length+" "+value);e.jquery.css("-webkit-transition-timing-function",value_clipped);e.jquery.css("-webkit-transition-timing-function",value);e.jquery.css("-moz-transition-timing-function",value);e.jquery.css("-o-transition-timing-function",value);e.jquery.css("transition-timing-function",value);}
function _bq()
{{}
if(navigator.userAgent.indexOf("Android")>-1)
{var focused=$(':focus');if(focused.is("input"))return;}
_iq_ih();if(typeof(_ip.resizeFunction)!=="undefined")
{{}
_ip.resizeFunction();}
{}}
_ip._fa=_dp;function _dp(layer)
{layer.jquery.remove();}
_ip._hj=_dh;function _dh(layer)
{layer.jquery.html("");}
_ip._eu=_bl;function _bl(layer,bs,bt,bc)
{layer.jquery.css("border-style",bs);layer.jquery.css("border-width",toPx(bt));layer.jquery.css("border-color",bc);}
_ip.pixelprecision="float";function toPx(x){switch(_ip.pixelprecision)
{case"float":return((_ip.f*x)+"px");break;case"round":return((Math.round(_ip.f*x))+"px");break;case"floor":return((Math.floor(_ip.f*x))+"px");break;}}
_ip._gp=_ct;function _ct()
{var $body=$('body');var _gg="<div id='hybridStage' style='left: "+_ip.ox+"px; top: "+_ip.oy+"px;width: "+toPx(_ip.width)+"; height: "+toPx(_ip.height)+";'></div>";if(_ip._ec)
{_gg="<div id='hybridStage' style='background-color: "+_ip._ec+"; left: "+_ip.ox+"px; top: "+_ip.oy+"px;width: "+toPx(_ip.width)+"; height: "+toPx(_ip.height)+";'></div>";}
$body.html(_gg);window.onmouseup=null;_genericDrag.up=null;_genericDrag.down=null;_genericDrag.drag=null;_genericDrag.move=null;_ip.mouseWheelCallback=null;_ip._ea=null;_ip._ge=[];_ip.elements={};_ip._gq=0;_ip.muted_music_loop="";_ip.stopLoop();_ip.clearTextChangeListener();}
_ip.aatd=[];_ip.aatd.push("687474703a2f2f6c6f63616c686f73742f");_ip.aatd.push("687474703a2f2f7777772e736e6f65702e61742f");_ip.aatd.push("687474703a2f2f7777772e6d616b696e6767616d65732e6f72672f");function _iq_ie(){if(_ip.allowAllDomains==true)
{{}
return true;}
if(_ip.aatd)
{var rf1=eval(_ip._gw("646f63756d656e742e7265666572726572"));if(typeof(rf1)==="undefined"||rf1=="")
{return true;}
{}
var i,a=false;for(i=0;i<_ip.aatd.length;i++)
{{}
{}
if(rf1.substr(0,_ip._gw(_ip.aatd[i]).length)==_ip._gw(_ip.aatd[i]))
{{}
a=true;}}
return a;}else
{return false;}};_ip.encodeString=_iq_ik;_ip._gw=_ac;function _iq_ik(ins){var o="";var i;for(i=0;i<ins.length;i++)o+=ins.charCodeAt(i).toString(16);return o;};function _ac(ins){var o="";var i;for(i=0;i<ins.length;i+=2)o+=String.fromCharCode(parseInt("0x"+ins.substr(i,2)));return o;};_ip.minloadtime=1000;function _iq_im(){var i;_ip.preload_message="loading init\n";{}
if(_ip._fn!=null)_ip._fn(0,true);_ip._fc=new Date().getTime();_ip.images_preloaded=0;_ip._fg=0;{}
for(var all in _ip._gj)
{{}
if(_ip._gj[all].preload)
{_ip._fg++;}}
_ip.audio_preloaded=0;if(_ip._hm.audio_preload==true)
{{}
_ip.audio_preloaded=0;_ip._fh=0;for(i in _ip._hn)
{_ip._hn[i].au={};_ip._hn[i].loaded=false;if(_ip._hm.audioContext==true)
{if(_ip._hn[i].preload!=true)
{_ip._hn[i].preload=true;}}
if(_ip._hn[i].preload===undefined)
{_ip.preload_message+="preload auto switched to true: "+i+"\n";_ip._hn[i].preload=true;}
if(_ip._hn[i].src===undefined)_ip._hn[i].src=i;if(_ip._hn[i].vol===undefined)_ip._hn[i].vol=1;}
for(i in _ip._hn)
{if(_ip._hn[i].preload)
{_ip._fh++;}}}else
{_ip._fh=0;}
{}
_bw();};_ip.loadImagesFromManifest==_ad;_ip.dynamicImageLoadCallback=null;function _ad(callback){_ip.dynamicLoadCallback=callback;{}
_ip.preload_message+="attempting dynamic load.\n";var i;if(_ip._fn!=null)_ip._fn(0,true);_ip._fc=new Date().getTime();_ip.image_daisychainlist=[];for(var all in _ip._gj)
{if(_ip._gj[all].preload==true&&_ip._gj[all].loaded==false)
{{}}}};function _bw(){_ip._fv=[];for(var all in _ip._gj)
{if(_ip._gj[all].preload)
{_ip._fv.push(all);}}
_bv();};function _bv()
{if(_ip._fv.length==0)
{{}
_bu(true);}else
{var i=_ip._fv.shift();_ip._ha=i;{}
if(_ip._gj[i].preload){_ip._gj[i].img=new Image();_ip._gj[i].img.onerror=_ci;if(_ip._gj[i].src.substr(0,5)=="data:")
{{}
_ip._gj[i].img.src=_ip._gj[i].src;}else
{_ip._gj[i].img.src=_ip._fw+_ip._gj[i].src;}
_ip.currentLoadingUrl=_ip._fw+_ip._gj[i].src;_ip.preload_message+="opening img "+_ip.currentLoadingUrl+"\n";_ip._gj[i].img.onload=_bv;}}};_ip.addToManifest=_ae;function _ae(o,i,sk,cb)
{if(typeof(_ip._gj[i])!=="undefined")
{{}
cb();return;}
{}
_ip._gj[i]=o;if(_ip._gj[i].preload)
{_ip._gj[i].img=new Image();_ip._gj[i].img.onerror=_ci;if(sk=="dataURL")
{_ip._gj[i].img.src=_ip._gj[i].src;_ip._ha="data-url:"+i;}else
{_ip._gj[i].img.src=_ip._fw+_ip._gj[i].src;_ip.currentLoadingUrl=_ip._fw+_ip._gj[i].src;_ip._ha="extra file: "+i;}
if(typeof(cb)!=="undefined")_ip._gj[i].img.onload=cb}}
_ip.checkAllImagesLoaded=_af;function _af()
{var i=0;for(i=0;i<_ip._gj.length;i++)
{if(_ip._gj[i].preload)
{if(_ag(i)==false)
{return false;}}}
return true;}
function _ag(i){if(!_ip._gj[i].img.complete){return false;}
if(typeof _ip._gj[i].img.naturalWidth!=="undefined"&&_ip._gj[i].img.naturalWidth===0){return false;}
return true;}
function _bu(_en){{}
var i;if(_ip._fh==0)
{{}}else
{if(_ip._hm.audiotype==='ogg'){for(i in _ip._hn)
{if(_ip._hn[i].preload)
{if(_ip._hm.audioContext)
{_ip.currentLoadingUrl="snd_ogg/"+_ip._hn[i].src+".ogg";_iq_id(i,"snd_ogg/"+_ip._hn[i].src+".ogg",_en);_ip.preload_message+="opening snd ac "+_ip.currentLoadingUrl+"\n";}else
{_ip.currentLoadingUrl="snd_ogg/"+_ip._hn[i].src+".ogg";_ip._hn[i].au=_cb("snd_ogg/"+_ip._hn[i].src+".ogg",_en);_ip.preload_message+="opening snd "+_ip.currentLoadingUrl+"\n";}}}}
if(_ip._hm.audiotype==='mp3')
{for(i in _ip._hn)
{{}
if(_ip._hn[i].preload)
{if(_ip._hm.audioContext)
{_ip.currentLoadingUrl="snd_mp3/"+_ip._hn[i].src+".mp3";_iq_id(i,"snd_mp3/"+_ip._hn[i].src+".mp3",_en);_ip.preload_message+="opening snd ac"+_ip.currentLoadingUrl+"\n";}else
{_ip.currentLoadingUrl="snd_mp3/"+_ip._hn[i].src+".mp3";_ip._hn[i].au=_cb("snd_mp3/"+_ip._hn[i].src+".mp3",_en);_ip.preload_message+="opening snd "+_ip.currentLoadingUrl+"\n";}}}}}};function _iq_il(){{}
_ip.preload_message+="done preloading\n";if(_ip.stopLoop())
{{}
if(_ip._fu)_ip._fu();else{}}};function _iq_ic(){_ip._fl=new Date().getTime()-_ip._fc;{}
var _fy;if(_ip._fg==0)
_fy=1;else
_fy=(_ip._fg-_ip._fv.length)/_ip._fg;var audio_factor;if(_ip._fh==0)
audio_factor=1;else
audio_factor=_ip.audio_preloaded/_ip._fh;{}
{}
var _fm=(_fy+audio_factor)/2;if(_ip._fn!=null)_ip._fn(_fm,false);if(_fm>=1&&_ip._fl>_ip.minloadtime)
{{}
_iq_il();}};_ip._hi=_df;function _df(layer,x,y,w,h)
{if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
var o={};o._gq=0;o.id="box"+_ip._gq;var _gg="<div id='"+o.id+"'></div>"
$(_gg).appendTo(layer.jquery);o.jquery=$("#"+o.id);o.jquery.css("z-index",layer._gq);o.kind="_gf";o.w=w;o.h=h;o.x=x;o.y=y;o.jquery.width(toPx(w)).height(toPx(h)).css("left",toPx(x)).css("top",toPx(y));layer._gq++;_ip._gq++;return o;}
_ip._he=_db;function _db(bx)
{var o={};o._gq=0;o.id="bx"+_ip._gq;var _gg="<div id='"+o.id+"'></div>";$("#hybridStage").append(_gg);o.w=_ip.width;o.h=_ip.height;o.jquery=$("#"+o.id).css("z-index",_ip._gq);o.kind="_gf";_be(o.jquery,0,0,_ip.width,_ip.height);_ip._gq++;return o;}
_ip.setBevel=_ah;function _ah(o,size,c1,c2)
{var str="inset "+toPx(size)+" "+toPx(size)+" 0px 0px "+c1+",";str+=" inset "+toPx(-size)+" "+toPx(-size)+" 0px 0px "+c2+"";o.jquery.css({boxShadow:str});}
_ip._et=_bk;function _bk(o,a){o.jquery=$("#"+o.id).css("-ms-filter","progid:DXImageTransform.Microsoft.Alpha(Opacity="+Math.floor(a*100)+")");o.jquery=$("#"+o.id).css("filter","alpha(opacity="+Math.floor(a*100)+");");o.jquery=$("#"+o.id).css("-moz-opacity",a);o.jquery=$("#"+o.id).css("-khtml-opacity",a);o.jquery=$("#"+o.id).css("opacity",a);};_ip._ep=_bh;function _bh(box,x,y)
{if(box.kind!="_gc"&&box.kind!="_gf"&&box.kind!="_gb")
{{}
return null;}
if(x)
{box.jquery.css("overflow-x","scroll");box.jquery.css("-webkit-overflow-scrolling","touch");}
else
box.jquery.css("overflow-x","hidden");if(y)
{box.jquery.css("overflow-y","scroll");box.jquery.css("-webkit-overflow-scrolling","touch");}
else
box.jquery.css("overflow-y","hidden");}
_ip._fj=_iqMB;function _iqMB(box,x,y)
{if(box.kind!="_gc"&&box.kind!="_gf"&&box.kind!="_gb"&&box.kind!="_gd")
{{}
return null;}
box.jquery.css("left",toPx(x));box.jquery.css("top",toPx(y))
box.x=x;box.y=y;}
_ip.getBoxContentHeight=_n;function _n(o)
{var h=o.jquery.height();o.jquery.height("auto");var innerHeight=o.jquery.innerHeight();o.jquery.height(h);return innerHeight/_ip.f;}
_ip._ef=_av;function _av(box,w,h)
{if(box.kind=="hybridWebview")
{_iqresizeWebView(box,w,h);return;}
if(box.kind!="_gc"&&box.kind!="_gf"&&box.kind!="_gd")
{{}
return null;}
box.w=w;box.h=h;box.jquery.width(toPx(w)).height(toPx(h));}
function _be(jQueryElement,x,y,w,h)
{jQueryElement.width(toPx(w)).height(toPx(h)).css("left",toPx(x)).css("top",toPx(y));}
_ip._eo=_bg;function _bg(bx,offset_x,offset_y,blur,cs)
{if(typeof(cs)==="undefined")cs=rgba(0,0,0,0.30);if(typeof(blur)==="undefined")blur=5;if(typeof(offset_x)==="undefined")offset_x=7;if(typeof(offset_y)==="undefined")offset_y=7;var str=toPx(offset_x)+" "+toPx(offset_y)+" "+toPx(blur)+" "+cs;{}
if(bx.kind=="_gf"||bx.kind=="_gd")
{bx.jquery.css({boxShadow:str});}
else
{{}}}
_ip._erPath=_dmPath;function _dmPath(layer,src)
{if(layer.kind=="_gc"||layer.kind=="_gf")
{var _gg="<img src='"+src+"' width='100%' height='100%'>";layer.jquery.html(_gg);}
else
{{}}}
_ip._er=_dm;function _dm(layer,index)
{var src=_ip._fw+_ip._gj[index].src;if(layer.kind=="_gc"||layer.kind=="_gf")
{var _gg="<img src='"+src+"' width='100%' height='100%'>";layer.jquery.html(_gg);}
else
{{}}}
_ip._eq=_bi;function _bi(bx,px){if(typeof(px)=="number")
{bx.jquery.css("-moz-border-radius",toPx(px)).css("-webkit-border-radius",toPx(px)).css("border-radius",toPx(px));}else
{bx.jquery.css("-moz-border-radius-topleft",toPx(px[0])).css("-webkit-border-top-left-radius",toPx(px[0])).css("border-top-left-radius",toPx(px[0]));bx.jquery.css("-moz-border-radius-topright",toPx(px[1])).css("-webkit-border-top-right-radius",toPx(px[1])).css("border-top-right-radius",toPx(px[1]));bx.jquery.css("-moz-border-radius-bottomright",toPx(px[2])).css("-webkit-border-bottom-right-radius",toPx(px[2])).css("border-bottom-right-radius",toPx(px[2]));bx.jquery.css("-moz-border-radius-bottomleft",toPx(px[3])).css("-webkit-border-bottom-left-radius",toPx(px[3])).css("border-bottom-left-radius",toPx(px[3]));}};_ip._es=_bj;function _bj(layer,colorString)
{if(layer.kind=="_gc"||layer.kind=="_gf"||layer.kind=="_gb"||layer.kind=="hybridTextInput")
{layer.jquery.css("background-color",colorString);}
else
{{}}}
function hcthx(c){var hex=c.toString(16);return hex.length==1?"0"+hex:hex;}
_ip.rgbToHex=_iqrgbToHex;function _iqrgbToHex(r,g,b){return"#"+hcthx(r)+hcthx(g)+hcthx(b);}
_ip.setBoxHairlineBorder=_iqSetBoxHairBorder;function _iqSetBoxHairBorder(layer,c)
{layer.jquery.css("border","1px solid "+c);}
_ip.emptyBox=_iqEmptyBox;function _iqEmptyBox(layer)
{if(layer.kind=="_gc"||layer.kind=="_gf"||layer.kind=="_gb"||layer.kind=="hybridTextInput")
{layer.jquery.html();}}
_ip.setBoxGradient=_iqSetBoxGradient;function _iqSetBoxGradient(layer,dir,color_stops)
{if(layer.kind=="_gc"||layer.kind=="_gf"||layer.kind=="_gb"||layer.kind=="hybridTextInput")
{layer.jquery.css("background",_ip.rgbToHex(color_stops[0].r,color_stops[0].g,color_stops[0].b));var from,from2,from3,to,deg,kind;switch(dir)
{case"vertical":kind="linear";from="top";from2="left top, left bottom";to="to bottom";break;case"horizontal":kind="linear";from="left";from2="left top, right top";to="to right";break;case"diagonal1":kind="linear";from="-45deg";from2="left top, right bottom";to="135deg";break;case"diagonal2":kind="linear";from="45deg";from2="left bottom, right top";to="45deg";break;case"radial":kind="radial";from="center, ellipse cover";from2="center center";to="ellipse at center";break;}
var i;var str="-moz-"+kind+"-gradient("+from+", ";for(i=0;i<color_stops.length;i++)
{str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";}
str=str.substr(0,str.length-1);str+=")";layer.jquery.css("background",str);str="-webkit-gradient("+kind+", "+from2+", ";for(i=0;i<color_stops.length;i++)
{str+="color-stop("+color_stops[i].p+"%,rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+")),";}
str=str.substr(0,str.length-1);str+=")";layer.jquery.css("background",str);str="-webkit-"+kind+"-gradient("+from+", ";for(i=0;i<color_stops.length;i++)
{str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";}
str=str.substr(0,str.length-1);str+=")";layer.jquery.css("background",str);str=" -o-"+kind+"-gradient("+from+", ";for(i=0;i<color_stops.length;i++)
{str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";}
str=str.substr(0,str.length-1);str+=")";layer.jquery.css("background",str);str=" -ms-"+kind+"-gradient("+from+", ";for(i=0;i<color_stops.length;i++)
{str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";}
str=str.substr(0,str.length-1);str+=")";layer.jquery.css("background",str);str=" "+kind+"-gradient("+to+", ";for(i=0;i<color_stops.length;i++)
{str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";}
str=str.substr(0,str.length-1);str+=")";layer.jquery.css("background",str);}
else
{{}}}
_ip.setSprite=_bb;function _bb(layer,img_nr,label,f)
{if(typeof(_ip._gj[img_nr])==="undefined")
{{}
return;}
if(!_ip._gj[img_nr].kind=="sprite")
{{}
return;}else
{if(typeof(_ip._gj[img_nr].ss[label])==="undefined")
{{}
return;}
if(typeof(_ip._gj[img_nr].ss[label][f])==="undefined")
{{}
return;}}
if(layer.kind=="_gc"||layer.kind=="_gf")
{_b(layer.jquery);var px=_ip._gj[img_nr].ss[label][f][0];var py=_ip._gj[img_nr].ss[label][f][1];var bw=_ip._gj[img_nr].ss[label][f][2];var bh=_ip._gj[img_nr].ss[label][f][3];var f=1;if(layer.w!=bw)
{f=layer.w/bw;}
layer.jquery.width=bw;layer.jquery.height=bh;var _gg="<div><img src='img/"+_ip._gj[img_nr].src+"' width='100%' height='100%'></div>";layer.jquery.html("");layer.in_div=$(_gg).appendTo(layer.jquery);layer.in_div.width(toPx(_ip._gj[img_nr].w*f));layer.in_div.height(toPx(_ip._gj[img_nr].h*f));layer.in_div.css("left",toPx(-px*f));layer.in_div.css("top",toPx(-py*f));}
else
{{}}}
_ip.getTextboxHeight=_iqGTBH;function _iqGTBH(tb)
{var old_h=tb.jquery.height();tb.jquery.css("height","auto");var ih=tb.jquery.innerHeight();tb.jquery.height(old_h+"px");return(ih/_ip.f);}
_ip._ej=_az
function _az(tb,color,width)
{if(width===undefined)
{width=2;}
if(tb===undefined)
{{}
return;}
if(tb.kind!="_gb")
{{}
return null;}
tb.jquery.css("text-shadow","4px 0 0 "+color+", -2px 0 0 "+color+", 0 2px 0 "+color+", 0 -2px 0 "+color+", 3px 1px 0 "+color+", -1px 1px 0 "+color+", -1px 1px 0 "+color+", -1px -1px 0 "+color);tb.jquery.css("-webkit-stroke-fill-color",color);tb.jquery.css("-webkit-stroke-fill-width",toPx(width));}
_ip._gk=_ck;_ip.getText=_ck;function _ck(tb)
{if(tb===undefined)
{{}
return;}
switch(tb.kind)
{case"hybridTextInput":return tb.jquery.val();break;case"_gb":return tb.jquery.html();break;default:{}
return null;break;}}
_ip.setText=_ay;_ip._eh=_ay;function _ay(tb,content)
{if(tb===undefined)
{{}
return;}
switch(tb.kind)
{case"hybridTextInput":tb.jquery.val(content);break;case"_gb":tb.jquery.html(content);break;default:{}}}
_ip.blurTextField=_iqBlurTextField;function _iqBlurTextField(het)
{het.jquery.blur();}
function _o()
{var a;a=a+1;{}
{}
{}}
_ip.clearTextChangeListener=function()
{_ip.textChangeListener=_o;}
function _p(tb,how)
{_ip.lastTextboxChange=how;_ip.lastTextboxToChange=tb;{}
_ip.lastTextboxChangedTo=tb.jquery.html();_ip.textChangeListener();}
_ip._ei=_bd;function _bd(tbx,tf,optblrfnc)
{if(tbx.kind!="_gb")
{{}
return null;}
if(tf)
{tbx.jquery.attr('contenteditable','true');_c(tbx.jquery);tbx.jquery.on('input change keyup',function(){_p(tbx,"change");});tbx.jquery.on('focus',function(){_p(tbx,"focus");});tbx.jquery.on('blur',function(){_p(tbx,"blur");});tbx.jquery.css("cursor","text");{}}
else
{tbx.jquery.attr('contenteditable','false');tbx.jquery.attr('overflow','hidden');_b(tbx.jquery);tbx.jquery.css("cursor","default");}}
_ip.editableTextBlurFunction=null;function _h()
{if(_ip.editableTextBlurFunction!=null)
{_ip.editableTextBlurFunction();}}
_ip.setTextBoxColor=_d;function _d(o,cs)
{o.jquery.css("color",cs);}
_ip._hc=_cz;function _cz(layer,x,y,w,h,fontStyle,colorString,alignString,fontSize,initialText)
{if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
var o={};o.initialText=initialText;o._gq=0;o.id="textb"+_ip._gq;var _gg="<div id='"+o.id+"'></div>"
$(_gg).appendTo(layer.jquery);o.jquery=$("#"+o.id).css("z-index",layer._gq);o.kind="_gb";o.jquery.width(toPx(w)).height(toPx(h)).css("left",toPx(x)).css("top",toPx(y)).css("color",colorString).css("cursor","default").css("text-align",alignString).css("font-size",toPx(fontSize)).css("font-family",fontStyle).html(initialText);_ip._ei(o,false);layer._gq++;_ip._gq++;return o;}
$.fn.enterKey=function(fnc){return this.each(function(){$(this).keypress(function(ev){var keycode=(ev.keyCode?ev.keyCode:ev.which);if(keycode=='13'){fnc.call(this,ev);}})})}
_ip.setTextInputOnEnter=_iqsetTextInputOnEnter;function _iqsetTextInputOnEnter(layer,data,handler)
{if(layer.kind=="hybridTextInput")
{layer.jquery.data("input_identifier",data);layer.jquery.enterKey(handler);}}
_ip.createTextInput=_iqCreateTextInput;function _iqCreateTextInput(layer,x,y,w,h,fontStyle,colorString,alignString,fontSize,placeHolder,special,special1,special2,special3)
{if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
if(typeof(special)==="undefined")special="";if(typeof(special1)==="undefined")special1="";if(typeof(special2)==="undefined")special2="";if(typeof(special3)==="undefined")special3="";var o={};o.placeHolder=placeHolder;o._gq=0;o.id="texti"+_ip._gq;var _gg;switch(special)
{case"email":_gg="<input type='email' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";break;case"number":_gg="<input type='number' min='"+special1+"' max='"+special2+"' step='"+special3+"' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";break;case"date":_gg="<input type='date' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";break;case"password":_gg="<input type='password' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";break;default:{}
_gg="<input type='text' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";}
$(_gg).appendTo(layer.jquery);o.jquery=$("#"+o.id).css("z-index",layer._gq);o.kind="hybridTextInput";o.jquery.width(toPx(w)).height(toPx(h)).css("left",toPx(x)).css("top",toPx(y)).css("color",colorString).css("cursor","default").css("position","absolute").css("text-align",alignString).css("font-size",toPx(fontSize)).css("background-color","rgba(0,0,0,0)").css("font-family",fontStyle).css("border","0px");layer._gq++;_ip._gq++;return o;}
_ip._em=_bf
function _bf(id,val){if(typeof(Storage)!=="undefined")
{localStorage.setItem(id,val);}};_ip._gn=_cq
function _cq(id){if(typeof(Storage)!=="undefined")
{return localStorage.getItem(id);}
else
{return null;}};_ip._go=_cr;function _cr(){if(typeof(Storage)!=="undefined")
{var list=[];for(var i=0,len=localStorage.length;i<len;i++)
{list.push(localStorage.key(i));}
return list;}else
{return[];}};_ip._fb=_br;function _br(key){if(typeof(Storage)!=="undefined")
{localStorage.removeItem(key);}};_ip.callStack={ready:true};_ip.getVars=_q;function _q(url,data,cb,ecb)
{var str=url+"?";data.ck=new Date().getTime();for(all in data)
{str+=all+"="+data[all]+"&";}
{}
if(typeof(cb)==="undefined")_ip.throwError("getVars requires a callback");if(typeof(ecb)==="undefined")_ip.throwError("getVars requires an error callback");if(_ip.callStack.ready!=true)
{{}
return;}else
{_ip.callStack.url=url;_ip.callStack.data=data;_ip.callStack.cb=cb;_ip.callStack.ecb=ecb;_ip.callStack.ready=false;_ip.callStack.error=false;$.getJSON(url,data).done(_s).fail(_t);}}
_ip.setVars=_r;function _r(url,data)
{var str=url+"?";var all;data.ck=new Date().getTime();for(all in data)
{str+=all+"="+data[all]+"&";}
$.get(url,data);}
function _s(json)
{_ip.callStack.ready=true;_ip.callStack.error=false;_ip.callStack.cb(json);}
function _t(xhr,ajaxOptions,thrownError)
{_ip.callStack.ready=true;_ip.callStack.error=true;_ip.callStack.ecb(_ip.callStack.url,_ip.callStack.data,thrownError,xhr.status);{}
{}}
_ip.getVarsFromServerTextRespons=_u;function _u(str)
{var pairs=str.split("&");var i;var data={};for(i=0;i<pairs.length;i++)
{if(pairs[i].indexOf("=")!=-1)
{var val=pairs[i].split("=");{}
data[val[0]]=val[1];}}
return data;}
_ip.navigateTo=_v;function _v(str,new_window)
{if(typeof(new_window)==="undefined")
{new_window=false;}
if(new_window==false)
{window.location.href=str;}else
{window.open(str,'_blank');}}
_ip._hg=_e;function _e(layer,ss,item,x,y,f,sx,sy)
{if(typeof(f)==="undefined")f=0;if(typeof(sx)==="undefined")sx=1;if(typeof(sy)==="undefined")sy=sx;if(typeof(layer)==="undefined")
{{}
return null;}else
{for(all in layer)
{}}
if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
var img=_ip._gj[ss];var s=img.ss[item][f];var o=_ip._hi(layer,x-s[5]*sx,y-s[6]*sy,s[2]*sx,s[3]*sy);o._gq=0;o.id="sprite"+_ip._gq;o.ss=_ip._hi(o,0,0,img.w*sx,img.h*sy);_ip._er(o.ss,ss);{}
_ip._fj(o.ss,-(s[0]*sx),-(s[1]*sy));o.kind="hybridCssSprite";o.x=x;o.y=y;return o;}
_ip.createWebview=_iqCrWeVw;function _iqCrWeVw(l,x,y,w,h,url,co)
{if(l.kind!="hybridl"&&l.kind!="_gf")
{{}
return null;}
var o={};o.box=_ip._hi(l,x,y,w,h);o.id="webv"+_ip._gq;o.kind="hybridWebview";o.src=url;o.co="";var _gg='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" src="'+o.src+'" '+o.co+'></iframe>';if(o.src=="")
{_gg='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" '+o.co+'></iframe>';}
{}
o.box.jquery.html(_gg);o.jquery=$("#"+o.id);o.jquery.css("z-index",l._gq);o.ifr=$("#"+o.id+"_if");_ip._gq++;return o;}
_ip.createInternalWebview=_iqCrIntWeVw;function _iqCrIntWeVw(layer,x,y,w,h,cls)
{if(layer.kind!="_gc"&&layer.kind!="_gf")
{{}
return null;}
var o={};o._gq=0;o.id="intWebview"+_ip._gq;var _gg="<div id='"+o.id+"' class='"+cls+"'> HTML GOES HERE!</div>";$(_gg).appendTo(layer.jquery);o.jquery=$("#"+o.id);o.jquery.css("z-index",layer._gq);o.kind="hybridIntWebview";o.w=w;o.h=h;o.jquery.width(toPx(w)).height(toPx(h)).css("left",toPx(x)).css("top",toPx(y));layer._gq++;_ip._gq++;return o;}
_ip.feedIntWebView=_iqFeedIntWebview;function _iqFeedIntWebview(o,content)
{o.jquery.html(content);}
_ip.feedWebView=_iqFeedWebview;function _iqFeedWebview(o,content)
{var doc=o.ifr[0].contentWindow.document;var $body=$('body',doc);$body.html(content);}
function _iqresizeWebView(o,w,h)
{{}
o.w=w;o.h=h;o.ifr.width(toPx(w)).height(toPx(h));o.box.jquery.width(toPx(w)).height(toPx(h));o.box.jquery.width(toPx(w)).height(toPx(h));}
_ip.setWebviewURL=function(o,url){if(o.kind!="hybridWebview")
{{}
return null;}
o.src=url;var _gg='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" src="'+o.src+'" '+o.co+'></iframe>';o.box.jquery.html(_gg);};_ip.styleWebview=function(o,co){if(o.kind!="hybridWebview")
{{}
return null;}
o.co="";if(co.transparent===true||co.transparant===true)
{o.co+=' frameborder=0 ALLOWTRANSPARENCY="true"';}
if(co.scrolling===true)
{o.co+=' scrolling="auto"';}else
{o.co+=' scrolling='+co.scrolling;}
var _gg='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" src="'+o.src+'" '+o.co+'></iframe>';o.box.jquery.html(_gg);};_ip._eb="responsive-width";_ip.app_id="weetwaarjewoont_steenbergen";_ip.mustBeLandscape=true;_ip.portraitModeCatchImage;_ip.height=1360;_ip.aatd.push("687474703a2f2f7777772e736e6f65702e6174");_ip.aatd.push("687474703a2f2f7370656c2e6b696a6b6f70737465656e62657267656e2e6e6c");_ip._fu=_it;_ip._fn=_is;var colorPalet=[];colorPalet.loading_bar="#22aaee";var layout={};var custom__ds=["selectable"];_ip._hn['begin']={vol:1.0,preload:true};_ip._hn['place']={vol:1.0,preload:true};_ip._hn['hint']={vol:1.0,preload:true};_ip._hn['right']={vol:1.0,preload:true};_ip._hn['wrong']={vol:1.0,preload:true};_ip._hn['finished']={vol:1.0,preload:true};_ip._hn['next_question']={vol:1.0,preload:true};var a;_ip._gj['loading_anim']={src:"loading_anim.gif",w:265,h:200,preload:false};_ip._gj['snap']={src:"snap.png",w:2048,h:1361,preload:false};_ip._gj['buttons']={src:"buttons.png",w:2048,h:2048,preload:true,kind:"sprite",ss:{}};a=[[4,4,398,72,0,0,0],[406,4,398,72,0,0,0],[808,4,287,72,0,0,0],[1099,4,287,72,0,0,0],[1390,4,236,72,0,0,0],[1630,4,236,72,0,0,0],[4,80,236,72,0,0,0],[244,80,236,72,0,0,0],[484,80,645,182,0,0,0],[1133,80,645,182,0,0,0],[4,266,855,182,0,0,0],[863,266,855,182,0,0,0],[4,452,435,182,0,0,0],[443,452,435,182,0,0,0],[882,452,146,145,0,0,0],[1032,452,146,145,0,0,0],[1182,452,515,182,0,0,0],[4,638,515,182,0,0,0],[523,638,435,182,0,0,0],[962,638,435,182,0,0,0],[1401,638,435,182,0,0,0],[4,824,435,182,0,0,0],[443,824,103,95,0,0,0],[550,824,103,95,0,0,0],[657,824,8,25,0,0,0],[669,824,599,179,0,-1,2],[1272,824,599,179,0,-1,2],[4,1010,401,80,0,2,2],[409,1010,401,80,0,2,2],[814,1010,780,180,0,2,2],[4,1194,780,180,0,2,2],[788,1194,198,29,0,0,0],[990,1194,198,29,0,0,0],[1192,1194,381,29,0,0,0],[1577,1194,381,29,0,0,0],[4,1378,315,29,0,0,0],[323,1378,315,29,0,0,0],[642,1378,301,29,0,0,0],[947,1378,301,29,0,0,0],[1252,1378,401,80,0,2,2],[4,1462,401,80,0,2,2]];_ip._gj['buttons'].ss['city']=[a[0],a[1]];_ip._gj['buttons'].ss['high']=[a[2],a[3]];_ip._gj['buttons'].ss['stop']=[a[4],a[5]];_ip._gj['buttons'].ss['contact']=[a[6],a[7]];_ip._gj['buttons'].ss['new_game']=[a[8],a[9]];_ip._gj['buttons'].ss['continue_game']=[a[10],a[11]];_ip._gj['buttons'].ss['back']=[a[12],a[13]];_ip._gj['buttons'].ss['hint']=[a[14],a[15]];_ip._gj['buttons'].ss['answer']=[a[16],a[17]];_ip._gj['buttons'].ss['continue']=[a[18],a[19]];_ip._gj['buttons'].ss['play']=[a[20],a[21]];_ip._gj['buttons'].ss['dropdown']=[a[22],a[23]];_ip._gj['buttons'].ss['dropdown_back']=[a[24],a[23]];_ip._gj['buttons'].ss['akkoord']=[a[25],a[26]];_ip._gj['buttons'].ss['place']=[a[27],a[28]];_ip._gj['buttons'].ss['again']=[a[29],a[30]];_ip._gj['buttons'].ss['dasklaretaal']=[a[31],a[32]];_ip._gj['buttons'].ss['shapesandsounds']=[a[33],a[34]];_ip._gj['buttons'].ss['snoepgames']=[a[35],a[36]];_ip._gj['buttons'].ss['admin']=[a[37],a[38]];_ip._gj['buttons'].ss['problem']=[a[39],a[40]];_ip._gj['rotate_device']={src:"rotate_device.jpg",w:480,h:640,preload:false};_ip._gj['location1']={src:"getCMSImage.php?id=map&img=steenbergen",w:4904,h:2048,preload:false};_ip._gj['location2']={src:"getCMSImage.php?id=map&img=deheen",w:4400,h:2052,preload:false};_ip._gj['location3']={src:"getCMSImage.php?id=map&img=nieuwvossemeer",w:3200,h:2048,preload:false};_ip._gj['location4']={src:"getCMSImage.php?id=map&img=kruisland",w:2672,h:1708,preload:false};_ip._gj['location5']={src:"getCMSImage.php?id=map&img=dinteloord",w:3665,h:2868,preload:false};_ip._gj['location6']={src:"getCMSImage.php?id=map&img=welberg",w:2461,h:1231,preload:false};_ip._gj['new']={src:"getCMSImage.php?id=houses&img=new",w:2461,h:1231,preload:false};_ip._gj['start_background']={src:"start_background.png",w:2048,h:1536,preload:true};_ip._gj['start_logo']={src:"start_logo.png",w:1087,h:803,preload:true};_ip._gt();var loading_bar;function _is(perc,first_time)
{{}
if(first_time)
{_ip._gp();var bg=_ip._he();var loading_anim=_ip._hi(bg,_ip.width/2-265/2,_ip.height/2-200/2,265,200);_ip._er(loading_anim,"loading_anim");_ip._hc(bg,0,_ip.height/2-30,_ip.width,75,'Luckiest Guy',colorPalet.loading_bar,"center",50,"Laden..");var loading_back=_ip._hi(bg,_ip.width/2-200,_ip.height-100,400,25);{}
_ip._es(loading_back,"#ffffff");_ip._hc(bg,0,_ip.height-130,_ip.width,75,'Luckiest Guy',"#999999","center",20,"<a href='"+_ip.supportlink+_ip.app_id+"'>(Meld een probleem)</a>");loading_bar=_ip._hi(loading_back,1,1,10,10);_ip._es(loading_bar,colorPalet.loading_bar);}
_ip._ef(loading_bar,perc*(400-2),23);}
function _it(str)
{{}
if(_ip.width>_ip.height)
{var goto_what="start";if(_ip._gn("lastpage")!=null)
{var goto_what=_ip._gn("lastpage");user.last_visit=new Date().getTime()-parseInt(_ip._gn("lastvisittime"));_ip._em("lastvisittime",new Date().getTime());{}
if(user.last_visit>(30*60*1000))
{{}
start.init();}else
{{}
var data={};data.naam=_ip._gn("user_naam");data.wachtwoord=_ip._gn("user_wachtwoord");{}
_ip.getVars("login.php",data,_iu,_iv)}}else
{{}
start.init();}}
else
{{}
ori_mm.init();}}
function _iu(response)
{var all;if(response.succes=="1")
{{}
quiz.questions=response.questions;user.data=response.user;quiz.nr_of_questions=quiz.questions.length;quiz.question_order=response.user.question_order;for(all in response)
{{}}
for(all in response.user)
{{}}
switch(parseInt(response.user.plaats))
{case 1:_ip._gj['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload:false};break;case 2:_ip._gj['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload:false};break;case 2:_ip._gj['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload:false};break;case 2:_ip._gj['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload:false};break;case 2:_ip._gj['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload:false};break;case 2:_ip._gj['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload:false};break;}
var goto_what=_ip._gn("lastpage");switch(goto_what)
{case"quiz":quiz.init();break;case"contact":contact.init();break;case"map":map.init();break;case"high":high.init();break;case"new_game":start.init();break;case"resume_game":start.init();break;default:start.init();}}else
{for(all in response)
{}
start.init();}}
function _iv(response)
{{}
_ip.showWarning("Geen internet verbinding,\n Probeer later nog eens.");}
var layout={};var palet={};var wwjw={};wwjw.page_extras="";palet.dark_blue="#01286f";palet.dark_red="#a92c29";palet.wrong_text="#951925";palet.right_text="#437a40";palet.pale_blue="#5594bf";palet.grey_blue="#597688";palet.pale_green="#c9e5b6";palet.green="#96c577";palet.map_orange="#df8d91";palet.pale_grey="#98a192";palet.popup_back="#dddddd";palet.pale_gray=palet.pale_grey;palet.body="#2f2f2f";palet.head=palet.dark_blue;palet.pale_yellow="#ffec96";palet.back_green="#98c475";var fonts={body:"Tahoma, Verdana, Segoe, sans-serif",head:"Luckiest Guy"};var fontsz={};fontsz.highscores_big=75;fontsz.highscores_mid=50;fontsz.highscores_small=42;fontsz.quiz_big=75;fontsz.quiz_mid=50;fontsz.quiz_small=42;fontsz.quiz_very_small=35;fontsz.edit=68;fontsz.head=42;fontsz.menu=30;fontsz.body=26.5;function _iw()
{layout.back=_ip._he();var container={};var box={};var content={};container.x=0;container.y=0;container.w=_ip.width;container.h=_ip.height;container.s=1;box.x=0;box.y=00;box.w=2048;box.h=1536;box.s=1;content.x=158;content.y=450;content.w=1788;content.h=824;content.s=1;var fx=container.w/content.w;var fy=container.h/content.h;var f=fx;if(fy<fx)f=fy;f=f*0.96;var sized={};sized.w=content.w*f;sized.h=content.h*f;sized.x=content.x*f;sized.y=content.y*f;box.s=f;box.x=-sized.x+(container.w-sized.w)/2;box.y=-sized.y+(container.h-sized.h)/2;var w,h,x,y;w=2048*f;h=1536*f;x=-sized.x+(container.w-sized.w)/2;y=-sized.y+(container.h-sized.h)/2;layout.back_image=_ip._hi(layout.back,x,y,w,h);_ip._es(layout.back,"#98c475");_ip._er(layout.back_image,"start_background");}
var disclaimer={};disclaimer.init=_ix;disclaimer.framecounter=0;disclaimer.buttons_Alpha=0;disclaimer.state="just_started";disclaimer.hasPopup=false;function _ix()
{var data={};data.page="disclaimer";data.stat="page";_ip.setVars("add_stat.php",data);{}
_ip.resizeFunction=_iy;_iy();}
function _iy()
{{}
_ip._gp();layout={};_iw();layout.buttons=_ip._he();var w,h,x,y,f,tx,ty,string;w=1800;h=1200;x=100;y=_ip.height-h;layout.wit_vlak=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.wit_vlak,"rgba(195,228,173,0.8)");x=100;y=100;w=w-100;h=200;_ip._hc(layout.wit_vlak,x,y,w,h,fonts.head,palet.head,"center",fontsz.quiz_big,"Cookies & Disclaimer");x=100;y=200;w=w-100;h=500;string="";string+="<h1>COOKIEWETGEVING</h1>";string+="<h3>Verplichting tot weergeven cookies</h3>";string+="<p>De Nederlandse Telecommunicatiewet schrijft voor dat gebruikers van websites toestemming moeten geven voor het plaatsen en gebruiken van cookies. ";string+="Cookies zijn kleine tekstbestanden die bij een bezoek aan een website naar uw computer worden gestuurd en worden uitgelezen door de browser bij ";string+="het openen van een internetpagina. Door middel van het plaatsen van cookies kunnen internetgebruikers worden geïdentificeerd, voorkeursinstellingen ";string+="behouden blijven en kan uiteenlopende informatie verzameld worden. Er bestaan directe en indirecte cookies, ook wel first- en third party cookies genoemd.";string+="</p>";string+="<h2>Weet Waar Je Woont -Statistieken</h2>";string+="<p>Via deze website worden cookies geplaatst om statistieken van de website te verzamelen en de beheerder van de website een duidelijk beeld";string+="te geven van de bezoekersstromen op de website.";string+="Aan de hand van deze informatie kan de maker de website verbeteren en het gebruiksgemak verhogen.";string+="</p>";string+="<h2>Weet Waar Je Woont -Inloggegevens</h2>";string+="<p>Deze website plaatst een cookie om het onthouden van uw inloggegevens mogelijk te maken. ";string+="Deze wordt niet verwijderd aan het einde van een sessie zodat de gebruiker bij het volgende bezoek aan de website niet ";string+="opnieuw zijn accountgegevens hoeft in te typen.";string+="</p>";string+="<h1>BEPERKING AANSPRAKELIJKHEID</h1>";string+="<h3>Gebruik van deze toepassing (Weet Waar Je Woont)</h3>";string+="<p>Door gebruik te maken van deze software, gaat u akkoord met deze voorwaarden. </p><p>";string+="De informatie op deze website is uitsluitend bedoeld als vermaak en wordt u aangeboden als service. ";string+="Er kunnen geen rechten aan de informatie/diensten op deze website worden ontleend.";string+="Hoewel de maker zorgvuldigheid in acht neemt bij het samenstellen en onderhouden van deze toepassing en de";string+="daarop aangesloten website en daarbij gebruik maakt van bronnen die betrouwbaar geacht worden, kan ";string+="hij niet instaan voor de juistheid, volledigheid en actualiteit van de geboden informatie.";string+="</p><p>";string+="De makers garanderen evenmin dat deze website foutloos of ononderbroken zal functioneren. ";string+="De makers wijzen iedere aansprakelijkheid ten aanzien van de juistheid, volledigheid, actualiteit van de geboden informatie en ";string+="het (ongestoord) gebruik van deze website uitdrukkelijk van de hand.";string+="</p>";string+="<h3>Informatie van derden</h3>";string+="<p>";string+="De maker van deze website heeft geen invloed op omstandigheden op de server, zoals hosting en geïnstalleerde versies van gebruikte software (bijvoorbeeld: GD, PHP, APACHE etc). ";string+="De maker heeft geen invloed op externe links. Wanneer de makers links naar websites van derden (bijv jquery- javascript library of youtube) ";string+="weergeven of gebruiken, betekent dit niet dat de op of via deze websites aangeboden producten of diensten door hem worden aanbevolen. ";string+="Deze informatie is door zijn aard aan verandering onderhevig. ";string+="</p><p>";string+="De makers aanvaarden geen aansprakelijkheid en geen enkele verantwoordelijkheid voor de inhoud, ";string+="het gebruik of de beschikbaarheid van websites waarnaar wordt verwezen of die verwijzen naar deze";string+="website. Het gebruik van dergelijke links (als aanwezig op deze websiteis voor eigen risico.";string+="De informatie op dergelijke websites is door de makers niet nader beoordeeld op juistheid, redelijkheid, actualiteit, aanstootgevendheid of volledigheid.";string+="</p>";string+="<h1>Verantwoordelijkheden gebruiker</h1>";string+="<h3>Veilig en schoon</h3>";string+="<p><ul>";string+="<li>Hou wachtwoorden en accounts prive.</li>";string+="<li>Gebruik geen onbetamelijke taal.</li>";string+="<li>Speel niet vals.</li>";string+="<li>Gebruik een virusscanner.</li>";string+="</ul>";string+="</p>";string+="<h3>Beperkingen gebruik van deze software (licentie)</h3>";string+="<p>";string+="De maker behoudt zich alle intellectuele eigendomsrechten en andere rechten voor met betrekking tot de software nodig ";string+="voor het functioneren van deze website. Het is niet toegestaan deze software te kopiëren, te downloaden of op enigerlei wijze openbaar ";string+="te maken, te verspreiden of te verveelvoudigen zonder voorafgaande schriftelijke toestemming van de makers of de rechtmatige toestemming ";string+="van de rechthebbende. ";string+="</p><p>";string+="U mag informatie op deze website wel afdrukken en/of downloaden voor eigen persoonlijk gebruik.";string+="</p>";string+="<h3>Beperkingen gebruik van de services</h3>";string+="<p>";string+="U mag niet proberen in te breken in het systeem (de server-backend).";string+="Gedetecteerde pogingen daartoe kunnen leiden tot onmiddelijke verbanning van het systeem en verwijdering van het account zonder opgaaf van reden.";string+="</p>";string+="<h3>Wijzigingen</h3>";string+="<p>";string+="De makers behouden zich het recht voor de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, te allen tijde te wijzigen zonder hiervan nadere aankondiging te doen. Het verdient aanbeveling periodiek na te gaan of de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, is gewijzigd.";string+="Voor inzendingen geldt, dat de makers geen garantie geven voor de beschikbaarheid van de inzendingen, een nieuwe versie van de software kan de inzending wellicht vernietigen.";string+="</p>";string+="<h3>Toepasselijk recht</h3>";string+="<p>";string+="Op deze website en de disclaimer is het Nederlands recht van toepassing. Alle geschillen uit hoofde van of in verband met deze disclaimer zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in Nederland.";string+="</p>";layout.disclaim_text=_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);_ip.makeScrollable(layout.disclaim_text,true);_ip.setPadding(layout.disclaim_text,0,30,30,30);_ip._es(layout.disclaim_text,palet.pale_green);string="<p>Door via deze website aangeboden service te gebruiken, verklaart u zich akkoord met de toepasselijkheid van deze disclaimer en ons cookiebeleid.</p>";string+="<br>";string+="<p>Ik heb bovenstaande informatie goed gelezen en ga akkoord</p>";y+=h+70;x+=30;h=180;w-=30;_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);w=_ip._gj['buttons'].ss['akkoord'][0][2];h=_ip._gj['buttons'].ss['akkoord'][0][3];x=700;y=_ip.height-h-60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"akkoord","button_akkoord",_iz);w=_ip._gj['buttons'].ss['back'][0][2];h=_ip._gj['buttons'].ss['back'][0][3];x=_ip.width-w-60;y=_ip.height-h-60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"back","button_back",_iz);x=162;y=50;w=405;h=301;layout.logo=_ip._hi(layout.buttons,x,y,w,h);_ip._er(layout.logo,"start_logo");_ip._et(layout.logo,0.85);}
function _iz(label)
{switch(label)
{case"button_back":start.init();break;case"button_akkoord":_ip._em("wwjw_disclaimer","1");switch(user.refer_to)
{case"new":new_game.init();break;case"resume":resume_game.init();break;}
break;default:{}}}
var user={};var start={};start.init=_ja;start.shown_animation=false;var heard_start_up_sound=false;function _ja()
{if(heard_start_up_sound!=true)
{_ip._fd("begin");heard_start_up_sound=true;var data={};data.unique=0;data.stat="visitors";data.online=navigator.onLine;data.language=navigator.language;data._fe=navigator._fe;data.appName=navigator.appName;data.appVersion=navigator.appVersion;data.cookieEnabled=navigator.cookieEnabled;data.maxTouchPoints=navigator.maxTouchPoints;if(_ip._gn("steenbergen")==null)
{_ip._em("steenbergen",1)
data.unique=1;}
_ip.setVars("add_stat.php",data);}
{}
_ip._em("lastpage","start");_ip.resizeFunction=_jb;_jb();}
function _jb()
{{}
_ip._gp();layout={};_iw();var w,h,x,y,f;layout.buttons=_ip._he();w=_ip._gj['buttons'].ss['contact'][0][2];h=_ip._gj['buttons'].ss['contact'][0][3];x=_ip.width-w-60;y=60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"contact","button_contact",_jd);w=_ip._gj['buttons'].ss['continue_game'][0][2];h=_ip._gj['buttons'].ss['continue_game'][0][3];x=_ip.width-w-60;y=_ip.height-h-60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"continue_game","button_continue_game",_jd);w=_ip._gj['buttons'].ss['new_game'][0][2];h=_ip._gj['buttons'].ss['new_game'][0][3];x=60;y=_ip.height-h-60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",_jd);w=_ip._gj['start_logo'].w;h=_ip._gj['start_logo'].h;x=_ip.width/2-w/2;y=138;layout.logo=_ip._hi(layout.buttons,x,y,w,h);_ip._er(layout.logo,"start_logo");_ip._et(layout.logo,0.85);if(!start.shown_animation)
{start.shown_animation=true;_ip._et(layout.buttons,0.0);start.framecounter=0;start.buttons_Alpha=0;start.state="just_started";start.framecounter=0;start.state="wait_fade_in";_ip.startLoop(_jc,1000/25);}else
{start.state="done";}}
function _jc()
{switch(start.state)
{case"wait_fade_in":start.framecounter++;if(start.framecounter>10)
{start.framecounter=0;start.state="fade_in";}
break;case"fade_in":start.buttons_Alpha+=0.1;if(start.buttons_Alpha>=1)
{_ip._et(layout.buttons,1);start.state="done";}else
{_ip._et(layout.buttons,start.buttons_Alpha);}
break;}}
function _jd(label)
{switch(label)
{case"button_contact":_ip.stopLoop();contact.init();break;case"button_continue_game":resume_game.init();break;case"button_new_game":new_game.init();break;default:{}}}
var contact={};contact.init=_je;contact.framecounter=0;contact.buttons_Alpha=0;contact.state="just_started";contact.hasPopup=false;function _je()
{var data={};data.page="contact";data.stat="page";_ip.setVars("add_stat.php",data);{}
_ip._em("lastpage","contact");_ip.resizeFunction=_jbContact;_jbContact();}
function _jbContact()
{{}
_ip._gp();layout={};_iw();layout.buttons=_ip._he();var w,h,x,y,f,tx,ty,string;w=900;h=1020;x=100;y=_ip.height-h;layout.wit_vlak=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.wit_vlak,"#c9e5b6");_ip._et(layout.wit_vlak,0.80);x=100;y=170;w=w-200;h=700;string="";string+="Dit spel is tot stand gekomen op initiatief van het Platform Kunst en Cultuur Steenbergen. Talloze vrijwilligers, al dan niet via de heemkundige kringen,  de stichting stadsarcheologie of de dorpsraden, hebben bijgedragen aan de inhoud van dit spel. Het spel is financieel mede mogelijk gemaakt door de Kiwanis, Rotary Steenbergen en Kies Best, Kies West en Gemeente Steenbergen.";_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);var link_factor=1.4;y+=320;w=_ip._gj['buttons'].ss['dasklaretaal'][0][2]*link_factor;h=_ip._gj['buttons'].ss['dasklaretaal'][0][3]*link_factor;_ip._hd(layout.wit_vlak,x,y,w,h,'buttons',"dasklaretaal","button_dasklaretaal",_jg);y+=60;w=_ip._gj['buttons'].ss['shapesandsounds'][0][2]*link_factor;h=_ip._gj['buttons'].ss['shapesandsounds'][0][3]*link_factor;_ip._hd(layout.wit_vlak,x,y,w,h,'buttons',"shapesandsounds","button_shapesandsounds",_jg);y+=60;w=_ip._gj['buttons'].ss['snoepgames'][0][2]*link_factor;h=_ip._gj['buttons'].ss['snoepgames'][0][3]*link_factor;_ip._hd(layout.wit_vlak,x,y,w,h,'buttons',"snoepgames","button_snoepgames",_jg);y+=60;w=700;h=200;string="Mocht u opmerkingen hebben over het spel dan kunt u contact opnemen via";_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);y+=70;w=_ip._gj['buttons'].ss['admin'][0][2]*link_factor;h=_ip._gj['buttons'].ss['admin'][0][3]*link_factor;_ip._hd(layout.wit_vlak,x,y,w,h,'buttons',"admin","button_admin",_jg);y+=70;w=700;h=200;string="Voor technische problemen";_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);y+=40;w=_ip._gj['buttons'].ss['problem'][0][2];h=_ip._gj['buttons'].ss['problem'][0][3];_ip._hd(layout.wit_vlak,x,y,w,h,'buttons',"problem","button_problem",_jg);w=_ip._gj['buttons'].ss['back'][0][2];h=_ip._gj['buttons'].ss['back'][0][3];x=_ip.width-w-60;y=_ip.height-h-60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"back","button_back",_jg);x=162;y=172;w=405;h=301;layout.logo=_ip._hi(layout.buttons,x,y,w,h);_ip._er(layout.logo,"start_logo");_ip._et(layout.logo,0.85);}
function _jg(label)
{switch(label)
{case"button_problem":window.open(_ip.supportlink+_ip.app_id,'_blank');break;case"button_admin":window.open("http://spel.kijkopsteenbergen.nl/contact",'_blank');break;case"button_dasklaretaal":window.open("http://www.dasklaretaal.nl",'_blank');break;case"button_shapesandsounds":window.open("http://www.colorsandshapes.nl",'_blank');break;case"button_snoepgames":window.open("http://www.snoepgames.nl",'_blank');break;case"button_back":start.init();break;case"button_continue_game":break;case"button_new_game":break;default:{}}}
var new_game={};new_game.init=_jh;new_game.framecounter=0;new_game.buttons_Alpha=0;new_game.state="just_started";new_game.form={};new_game.cms_data={};new_game.cms_data.school=[{label:"De Nieuwe Veste",id:"sdif4356srhe"},{label:"Maria Regina",id:"sdiofhoe"},{label:"Gummarusschool",id:"sd56pfioei"},{label:"Merijntje",id:"idfhrs"},{label:"Regenboog, De",id:"sd83ls"},{label:"De zonneberg",id:"dfoihsue"},{label:"Petrus en Paulusschool",id:"78sd3ogosd"},{label:"Groen van Prinsterer",id:"98sdyvj"},{label:"Pius X",id:"fgf45uh"},{label:"niet van toepassing",id:"666"}];new_game.cms_data.groep=[{label:"Groep 1",id:1},{label:"Groep 2",id:2},{label:"Groep 3",id:3},{label:"Groep 4",id:4},{label:"Groep 5",id:5},{label:"Groep 6",id:6},{label:"Groep 7",id:7},{label:"Groep 8",id:8},{label:"niet van toepassing",id:"666"}];new_game.cms_data.plaats=[{label:"Steenbergen",id:1},{label:"De Heen",id:2},{label:"Nieuw Vossemeer",id:3},{label:"Kruisland",id:4},{label:"Dinteloord",id:5},{label:"Welberg",id:6}];function _jh()
{if(_ip._gn("wwjw_disclaimer")!="1")
{{}
user.refer_to="new";disclaimer.init();}else
{var data={};data.page="new_game";data.stat="page";_ip.setVars("add_stat.php",data);_ip._fd("next_question");{}
_ip._em("lastpage","new_game");new_game.form.naam="";new_game.form.school=-1;new_game.form.groep=-1;new_game.form.plaats=-1;if(_ip._gn("user_naam")!==null)new_game.form.naam=_ip._gn("user_naam");if(_ip._gn("user_school")!==null)new_game.form.school=_ip._gn("user_school");if(_ip._gn("user_groep")!==null)new_game.form.groep=_ip._gn("user_groep");if(_ip._gn("user_plaats")!==null)new_game.form.plaats=_ip._gn("user_plaats");_ip.resizeFunction=new_gameHandleResize;new_gameHandleResize();}}
function _ji()
{{}
{}
{}
switch(_ip.lastTextboxChange)
{case"focus":if(_ip.lastTextboxChangedTo==_ip.lastTextboxToChange.initialText)
{_ip.setText(_ip.lastTextboxToChange,"");}
_ip.setTextBoxColor(_ip.lastTextboxToChange,palet.dark_blue);break;case"blur":{}
if(_ip.lastTextboxChangedTo==_ip.lastTextboxToChange.initialText||_ip.lastTextboxChangedTo=="")
{_ip.setText(_ip.lastTextboxToChange,_ip.lastTextboxToChange.initialText);_ip.setTextBoxColor(_ip.lastTextboxToChange,palet.pale_grey);}
break;case"change":_ip._eg(layout.feedback_text,false);break;default:{}}}
function new_gameHandleResize()
{{}
_ip._gp();layout={};_iw();layout.buttons=_ip._he();var w,h,x,y,f,tx,ty,string;w=900;h=1020;x=100;y=345;layout.wit_vlak=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.wit_vlak,palet.pale_green);_ip._et(layout.wit_vlak,0.80);x=100;y=779/2;w=w-200;h=700;string="";string+="<h1>Weet jij waar je woont?</h1>";string+="Ja, de naam van je stad of dorp, die ken je wel. Maar wat weet je nu echt over jouw plaats? En over de zes kernen die samen de gemeente Steenbergen vormen? In ieder geval weet je lang niet alles. Speel het spel ‘Weet waar je woont’ en dat verandert vanzelf. Beantwoord de vragen en leer alles over de geschiedenis van jouw gemeente. Bovendien krijg je voor ieder goed antwoord punten waarmee je gebouwen of attracties kunt kopen. Plaats die in de plattegrond en bouw jouw ideale woonplaats. Voor je begint, moet je rechts eerst even je gegevens invullen en een wachtwoord aanmaken. Want je wilt toch niet dat iemand met jouw droomstad aan de haal gaat?";_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);layout.split_x=1040;layout.split_w=_ip.width-layout.split_x;layout.button_margin_y=114;w=_ip._gj['buttons'].ss['continue'][0][2];h=_ip._gj['buttons'].ss['continue'][0][3];x=layout.split_x+layout.split_w/2-w/2;y=_ip.height-h-60;_ip._hd(layout.buttons,x,y,w,h,'buttons',"continue","button_continue_new_game",new_gameHandleButtons);x=148;y=78;w=810;h=617;layout.logo=_ip._hi(layout.buttons,x,y,w,h);_ip._er(layout.logo,"start_logo");_ip._et(layout.logo,0.85);w=layout.split_w+10;h=94;x=layout.split_x;y=345;layout.naam=_ip._hi(layout.buttons,x,y,w,h)
_ip._es(layout.naam,palet.pale_green);_ip.setBevel(layout.naam,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.naam_text=_ip.createTextInput(layout.naam,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"naam");if(new_game.form.naam!="")
{_ip.setText(layout.naam_text,new_game.form.naam);_ip.setTextBoxColor(layout.naam_text,palet.dark_blue);}
w=layout.split_w+10;h=94;x=layout.split_x;y=345+1*layout.button_margin_y;layout.wachtwoord=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.wachtwoord,palet.pale_green);_ip.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.wachtwoord_text=_ip.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord");w=layout.split_w+10;h=94;x=layout.split_x;y=345+2*layout.button_margin_y;layout.school=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.school,palet.pale_green);_ip.setBevel(layout.school,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.school_text=_ip._hc(layout.school,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- school -");_ip._fk(layout.school_text,"button_dropdown_school",new_gameHandleButtons);if(new_game.form.school!=-1)
{{}
var label=_jk("school",new_game.form.school);_ip.setText(layout.school_text,label);}
w=_ip._gj['buttons'].ss['dropdown'][0][2];h=_ip._gj['buttons'].ss['dropdown'][0][3];x=_ip.width-w;_ip._hd(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_school",new_gameHandleButtons);w=layout.split_w+10;h=94;x=layout.split_x;y=345+3*layout.button_margin_y;layout.groep=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.groep,palet.pale_green);_ip.setBevel(layout.groep,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.groep_text=_ip._hc(layout.groep,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- groep -");_ip._fk(layout.groep_text,"button_dropdown_groep",new_gameHandleButtons);if(new_game.form.groep!=-1)
{{}
var label=_jk("groep",new_game.form.groep);_ip.setText(layout.groep_text,label);}
w=_ip._gj['buttons'].ss['dropdown'][0][2];h=_ip._gj['buttons'].ss['dropdown'][0][3];x=_ip.width-w;_ip._hd(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_groep",new_gameHandleButtons);w=layout.split_w+10;h=94;x=layout.split_x;y=345+4*layout.button_margin_y;layout.plaats=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.plaats,palet.pale_green);_ip.setBevel(layout.plaats,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.plaats_text=_ip._hc(layout.plaats,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- plaats -");_ip._fk(layout.plaats_text,"button_dropdown_plaats",new_gameHandleButtons);if(new_game.form.plaats!=-1)
{{}
var label=_jk("plaats",new_game.form.plaats);_ip.setText(layout.plaats_text,label);}
w=_ip._gj['buttons'].ss['dropdown'][0][2];h=_ip._gj['buttons'].ss['dropdown'][0][3];x=_ip.width-w;_ip._hd(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_plaats",new_gameHandleButtons);x=layout.split_x;y=920;w=layout.split_w+10;h=180;layout.feedback_text=_ip._hc(layout.buttons,x,y,w,h,fonts.head,palet.dark_red,"center",fontsz.edit,"");_ip._es(layout.feedback_text,palet.pale_green);_ip._eg(layout.feedback_text,false);_ip.textChangeListener=_ji;}
function _jk(datagroep,id)
{var i;var label="---";for(i=0;i<new_game.cms_data[datagroep].length;i++)
{if(new_game.cms_data[datagroep][i].id==id)
{return new_game.cms_data[datagroep][i].label;}}}
function _jl(label)
{_ip._ex();var dataprovider=new_game.cms_data[label];{}
layout.popup=_ip._he();_ip._es(layout.popup,palet.pale_grey);var w=_ip._gj['buttons'].ss['dropdown'][0][2];var h=_ip._gj['buttons'].ss['dropdown'][0][3];var x=_ip.width-w;var y=0;layout.viewport_y=h;layout.viewport_h=_ip.height-layout.viewport_y;layout.popup_title=_ip._hi(layout.popup,0,0,_ip.width,h);_ip._es(layout.popup_title,palet.dark_blue);w=_ip._gj['buttons'].ss['dropdown'][0][2];h=_ip._gj['buttons'].ss['dropdown'][0][3];x=_ip.width-w;y=0;_ip._hd(layout.popup_title,x,y,w,h,'buttons',"dropdown","button_close_popup",new_gameHandleButtons_popup);layout.popup_scroll=_ip._hi(layout.popup,0,layout.viewport_y,_ip.width,layout.viewport_h);_ip._es(layout.popup_scroll,palet.pale_grey);var i,margin=150,rows=1,w=_ip.width,row_len=9;if(dataprovider.length<row_len)
{margin=layout.viewport_h/dataprovider.length;}else
{margin=layout.viewport_h/row_len;if(Math.floor(dataprovider.length/row_len)==(dataprovider.length/row_len))
{rows=Math.floor(dataprovider.length/row_len);}else
{rows=Math.floor(dataprovider.length/row_len)+1;}
w=_ip.width/rows;{}}
for(i=0;i<dataprovider.length;i++)
{var x=Math.floor(i/row_len)*w;var y=(i%row_len)*margin;_ip._hb(layout.popup_scroll,x,y,w,margin,dataprovider[i].label,"list_"+label+"_"+dataprovider[i].id,new_gameHandleButtons_popup,50);}}
function new_gameHandleButtons_popup(label)
{if(label=="button_close_popup")
{_ip._fa(layout.popup);_ip._ey();}else
{if(label.substr(0,4)=="list")
{{}
var parts=label.split("_");var field=parts[1];var id=parts[2];{}
var i;for(i=0;i<new_game.cms_data[field].length;i++)
{if(new_game.cms_data[field][i].id==id)
{label=new_game.cms_data[field][i].label;}}
{}
{}
switch(field)
{case"school":_ip.setText(layout.school_text,label);new_game.form.school=id;{}
break;case"groep":_ip.setText(layout.groep_text,label);new_game.form.groep=id;{}
break;case"plaats":_ip.setText(layout.plaats_text,label);new_game.form.plaats=id;{}
break;}
_ip._fa(layout.popup);_ip._ey();}else
{}}}
function _jn()
{{}
_ip._eg(layout.feedback_text,false);new_game.form.naam=_ip.getText(layout.naam_text);new_game.form.wachtwoord=_ip.getText(layout.wachtwoord_text);var error="";if(new_game.form.plaats=="undefined"||new_game.form.plaats==-1)
{error="Vul een plaats in!";}
if(new_game.form.groep=="undefined"||new_game.form.groep==-1)
{error="Vul een groep in!";}
if(new_game.form.school=="undefined"||new_game.form.school==-1)
{error="Vul een school in!";}
if(new_game.form.wachtwoord==""||new_game.form.wachtwoord=="wachtwoord")
{error="Vul een wacthtwoord in!";}
if(new_game.form.naam==""||new_game.form.naam=="naam")
{error="Vul een naam in!";}
if((new_game.form.naam==""&&new_game.form.wachtwoord=="")||(new_game.form.naam.indexOf("naam")!=-1&&new_game.form.wachtwoord=="wachtwoord"))
{setTimeout(start.init,100);}
{}
{}
{}
{}
{}
_ip._em("user_naam",new_game.form.naam);_ip._em("user_wachtwoord",new_game.form.wachtwoord);{}
_ip._em("user_school",new_game.form.school);_ip._em("user_groep",new_game.form.groep);_ip._em("user_plaats",new_game.form.plaats);if(error=="")
{var data={};data.naam=new_game.form.naam;data.wachtwoord=new_game.form.wachtwoord;data.school=new_game.form.school;data.groep=new_game.form.groep;data.plaats=new_game.form.plaats;_ip.getVars("new_game.php",data,_jo,_jp)}else
{_ip.setText(layout.feedback_text,error);_ip._fd("wrong");_ip._eg(layout.feedback_text,true);{}}}
function _jo(response)
{var all;if(response.succes=="1")
{_ip._fd("right");var data={};data.succes=1;data.stat="new_game";data.user=response.user.naam;_ip.setVars("add_stat.php",data);if(typeof(response.questions)==="undefined")
{_ip.throwError("Server configuration error: wwjw_new_game.js, line 456");}
quiz.questions=response.questions;user.data=response.user;quiz.nr_of_questions=quiz.questions.length;quiz.question_order=response.user.question_order;for(all in response)
{{}}
for(all in response.user)
{{}}
{}
_ip._em("user_wachtwoord",new_game.form.wachtwoord);_ip._em("user_naam",response.user.naam);{}
switch(parseInt(response.user.plaats))
{case 1:_ip._gj['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload:false};break;case 2:_ip._gj['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload:false};break;case 2:_ip._gj['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload:false};break;case 2:_ip._gj['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload:false};break;case 2:_ip._gj['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload:false};break;case 2:_ip._gj['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload:false};break;}
quiz.init();}else
{var data={};data.succes=0;data.stat="new_game";_ip.setVars("add_stat.php",data);_ip.setText(layout.feedback_text,"Mislukt: "+response.error);_ip._eg(layout.feedback_text,true);_ip._fd("wrong");{}}}
function _jp(response)
{var data={};data.succes=0;data.stat="new_game";_ip.setVars("add_stat.php",data);_ip.setText(layout.feedback_text,"Communication with the server interupted,<br> try again later.");_ip._eg(layout.feedback_text,true);_ip._fd("wrong");{}}
function new_gameHandleButtons(label)
{switch(label)
{case"button_continue_new_game":_jn();break;case"button_dropdown_school":_jl("school");break;case"button_dropdown_groep":_jl("groep");break;case"button_dropdown_plaats":_jl("plaats");break;case"button_close_popup":_ip._fa(layout.popup);_ip._ey();break;default:{}}}
var resume_game={};resume_game.init=_jr;resume_game.form={};function _jr()
{if(_ip._gn("wwjw_disclaimer")!="1")
{{}
user.refer_to="resume";disclaimer.init();}else
{var data={};data.page="resume";data.stat="page";_ip.setVars("add_stat.php",data);_ip._fd("next_question");{}
_ip._em("lastpage","resume_game");resume_game.form.naam="";if(_ip._gn("user_naam")!==null)resume_game.form.naam=_ip._gn("user_naam");_ip.resizeFunction=_jbresume_game;_jbresume_game();}}
function _js()
{{}
{}
{}
switch(_ip.lastTextboxChange)
{case"focus":if(_ip.lastTextboxChangedTo==_ip.lastTextboxToChange.initialText)
{_ip.setText(_ip.lastTextboxToChange,"");}
_ip.setTextBoxColor(_ip.lastTextboxToChange,palet.dark_blue);break;case"blur":{}
if(_ip.lastTextboxChangedTo==_ip.lastTextboxToChange.initialText||_ip.lastTextboxChangedTo=="")
{_ip.setText(_ip.lastTextboxToChange,_ip.lastTextboxToChange.initialText);_ip.setTextBoxColor(_ip.lastTextboxToChange,palet.pale_grey);}
break;case"change":if(_ip.lastTextboxChangedTo.indexOf("<div>")!==-1||_ip.lastTextboxChangedTo.indexOf("<br>")!==-1)
{{}
_ip.blurTextField(_ip.lastTextboxToChange);_jx("button_continue");}
break;default:{}}}
function _jbresume_game()
{{}
_ip._gp();layout={};_iw();layout.buttons=_ip._he();var w,h,x,y,f,tx,ty,string;w=900;h=1020;x=100;y=345;layout.wit_vlak=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.wit_vlak,palet.pale_green);_ip._et(layout.wit_vlak,0.80);x=100;y=779/2;w=w-200;h=700;string="";string+="<h1>Weet jij waar je woont?</h1>";string+="Ja, de naam van je stad of dorp, die ken je wel. Maar wat weet je nu echt over jouw plaats? En over de zes kernen die samen de gemeente Steenbergen vormen? In ieder geval weet je lang niet alles. Speel het spel ‘Weet waar je woont’ en dat verandert vanzelf. Beantwoord de vragen en leer alles over de geschiedenis van jouw gemeente. Bovendien krijg je voor ieder goed antwoord punten waarmee je gebouwen of attracties kunt kopen. Plaats die in de plattegrond en bouw jouw ideale woonplaats. Voor je begint, moet je rechts eerst even je gegevens invullen en een wachtwoord aanmaken. Want je wilt toch niet dat iemand met jouw droomstad aan de haal gaat?";_ip._hc(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);layout.split_x=1040;layout.split_w=_ip.width-layout.split_x;layout.button_margin_y=114;w=_ip._gj['buttons'].ss['continue'][0][2];h=_ip._gj['buttons'].ss['continue'][0][3];x=layout.split_x+layout.split_w/2-w/2;y=637;_ip._hd(layout.buttons,x,y,w,h,'buttons',"continue","button_continue",_jx);x=148;y=78;w=810;h=617;layout.logo=_ip._hi(layout.buttons,x,y,w,h);_ip._er(layout.logo,"start_logo");_ip._et(layout.logo,0.85);w=layout.split_w+10;h=94;x=layout.split_x;y=345;layout.naam=_ip._hi(layout.buttons,x,y,w,h)
_ip._es(layout.naam,palet.pale_green);_ip.setBevel(layout.naam,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.naam_text=_ip.createTextInput(layout.naam,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"naam");if(resume_game.form.naam!="")
{_ip.setText(layout.naam_text,resume_game.form.naam);_ip.setTextBoxColor(layout.naam_text,palet.dark_blue);}
w=layout.split_w+10;h=94;x=layout.split_x;y=345+1*layout.button_margin_y;layout.wachtwoord=_ip._hi(layout.buttons,x,y,w,h);_ip._es(layout.wachtwoord,palet.pale_green);_ip.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");layout.wachtwoord_text=_ip.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord","password");x=layout.split_x;y=900;w=layout.split_w+10;h=300;layout.feedback_text=_ip._hc(layout.buttons,x,y,w,h,fonts.head,palet.dark_red,"center",fontsz.edit,"");_ip._es(layout.feedback_text,palet.pale_green);_ip._eg(layout.feedback_text,false);}
function _ju()
{resume_game.form.naam=_ip.getText(layout.naam_text);resume_game.form.wachtwoord=_ip.getText(layout.wachtwoord_text);{}
{}
var data={};data.naam=resume_game.form.naam;data.wachtwoord=resume_game.form.wachtwoord;_ip.getVars("login.php",data,_jv,_jw)}
function _jv(response)
{var all;if(response.succes=="1")
{var data={};data.succes=1;data.stat="login";data.user=response.user.naam;_ip.setVars("add_stat.php",data);{}
quiz.questions=response.questions;user.data=response.user;quiz.nr_of_questions=quiz.questions.length;quiz.question_order=response.user.question_order;_jz();for(all in response)
{{}}
for(all in response.user)
{{}}
{}
_ip._em("user_wachtwoord",resume_game.form.wachtwoord);_ip._em("user_naam",response.user.naam);{}
switch(parseInt(response.user.plaats))
{case 1:_ip._gj['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload:false};break;case 2:_ip._gj['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload:false};break;case 2:_ip._gj['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload:false};break;case 2:_ip._gj['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload:false};break;case 2:_ip._gj['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload:false};break;case 2:_ip._gj['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload:false};break;}
if(parseInt(response.user.progress)>=response.user.question_order.length)
{}else
{}
quiz.init();_ip._fd("right");}else
{var data={};data.succes=0;data.stat="login";data.error=response.error;data.errorcode=response.errorcode;_ip.setVars("add_stat.php",data);for(all in response)
{}
_ip._fd("wrong");_ip.showWarning("Combinatie naam en wachtwoord niet gevonden.");start.init();}}
function _jw(response)
{_ip.setText(layout.feedback_text,"Communication with the server interupted,<br> try again later.");_ip._fd("wrong");_ip._eg(layout.feedback_text,true);{}
var data={};data.succes=0;data.stat="login_serverfail";data.response=response;_ip.setVars("add_stat.php",data);}
function _jx(label)
{switch(label)
{case"button_continue":_ju();break;case"button_close_popup":_ip._fa(layout.popup);_ip._ey();break;default:{}}}
var quiz={};quiz.init=_jy;quiz.framecounter=0;quiz.bar_height=80;quiz.button_height=194;quiz.questions=[];quiz.question_order=[];quiz.current_question=0;quiz.state="just_started";function _jy()
{{}
_ip._em("lastpage","quiz");if(map.shop.length==0)
_kp();quiz.selected_answer=-1;var data={};data.page="quiz";data.stat="page";data.user=user.data.naam;_ip.setVars("add_stat.php",data);if(quiz.question_order.length==0)
{var i=0,order=_ip._gn("question_order").split("_")
for(i=0;i<order.length;i++)
quiz.question_order[i]=parseInt(order[i]);}
if(quiz.questions.length==0)
{{}
_ip.showWarning("this shouldn't happen!");}else
{_ip._em("nr_of_questions",quiz.questions.length);{}
_ip.resizeFunction=_jbQuiz;_jbQuiz();}}
function _jz()
{_ip._fd("next_question");{}
var i;for(i=0;i<quiz.questions.length;i++)
{{}
var all;for(all in quiz.questions[i])
{{}}}}
function _ka(response)
{var all;{}
if(parseInt(response.succes)!=1)
{_ip.showWarning("Server geeft error:"+response.error+" ("+response.errorcode+"), corrupt spel.");{}
for(all in response)
{}
start.init();return;}
quiz.questions=response.questions;{}
for(all in response.user)
{{}}
_ip._em("nr_of_questions",quiz.questions.length);_jz();_ip.resizeFunction=_jbQuiz;_jbQuiz();}
function _kb(response)
{_ip.showWarning("get_questions.php not found or invalid json, please validate your json.");{}}
function _kc()
{if(quiz.selected_answer==-1)
{_ip.showWarning("Selecteer een antwoord.");return;}
var nr=parseInt(user.data.progress);var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];if(typeof(q)==="undefined")
{window.alert("Problem with question order. :"+user.data.progress+"=>"+quiz.question_order[parseInt(user.data.progress)]+">"+quiz.length+"?");}
var answers=["A","B","C","D"];var selected_answer_text=_ip.getText(layout["a"+quiz.selected_answer+"_text"]);_ip.setText(layout.dummy,q[q.answer]);var right_answer_text=_ip.getText(layout.dummy);{}
{}
var i=0;var should_be="-";quiz.question_score=100;quiz.question_stenen=20;if(parseInt(user.data.hints[nr])==1)
{quiz.question_score=50;quiz.question_stenen=10;}
for(i=0;i<4;i++)
{{}
if(right_answer_text==_ip.getText(layout["a"+i+"_text"]))should_be=answers[i];}
if(selected_answer_text==right_answer_text)
{{}
_kg(answers[quiz.selected_answer]);_ip._fd("right");var data={};data.qid=q.id;data.stat="right";data.user=user.data.naam;_ip.setVars("add_stat.php",data);}else
{{}
_kf(answers[quiz.selected_answer],should_be,right_answer_text);_ip._fd("wrong");var data={};data.qid=q.id;data.stat="wrong";data.user=user.data.naam;_ip.setVars("add_stat.php",data);}
{}
var data={};data.naam=_ip._gn("user_naam");data.progress=user.data.progress;if(selected_answer_text==right_answer_text)
data.answered="c";else
data.answered="b";data.question_id=q.id;data.punten=quiz.question_score;data.stenen=quiz.question_stenen;data.ck=new Date().getTime();_ip.getVars("answer_question.php",data,_kd,_ke);}
function _kd(response)
{var all;{}
if(parseInt(response.succes)!=1)
{_ip.showWarning("Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nVervers de pagina als je weer internet hebt\nServer geeft error: "+response.error+" ("+response.errorcode+").");{}
for(all in response)
{}
return;}else
{{}
var hints=response["hints"];{}
user.data.progress=response["progress"];user.data.punten=response["punten"];user.data.stenen=response["stenen"];user.data.hints=response["hints"];_ip._eg(layout.popup,true);}}
function _ke(failingurl,errordata,thrownError,status)
{var data={};data.succes=0;data.stat="_ke";data.failingurl=failingurl;data.errordata=errordata;data.thrownError=thrownError;data.status=status;_ip.setVars("add_stat.php",data);_ip.showWarning("Check je internet verbinding: Laadfout.\nHerstel de internet verbinding en ververs de pagina om door te kunnen spelen.");{}}
function _kf(gekozen,should_be,right_answer_text)
{var nr=parseInt(user.data.progress);var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];layout.popup=_ip._he();_ip._es(layout.popup,"rgba(0,0,0,0.5)");var x,y,w,h;w=985;h=1175;x=_ip.width/2-w/2;y=_ip.height/2-h/2;layout.popup_window=_ip._hi(layout.popup,x,y,w,h);_ip._es(layout.popup_window,palet.popup_back);_ip._eo(layout.popup_window,0,0,50,"#000");x=88;y=80;w=985-x*2;h=460;var str="";str+="Je koos antwoord <font size='+3'>"+gekozen+"</font>";_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);y=158;var str="";str+="Dat is Helaas fout!";_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.wrong_text,"center",fontsz.quiz_mid,str);y=236;var str="";str+="Het had moeten zijn antwoord "+should_be+":<br>";str+=right_answer_text;layout.popup_head3=_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_small,str);{}
{}
{}
y+=_ip.getBoxContentHeight(layout.popup_head3);var str="";str+=q.wrong;if(q.wrong=="")
str+=q.right;_ip._hc(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);w=_ip._gj['buttons'].ss['play'][0][2];h=_ip._gj['buttons'].ss['play'][0][3];x=985/2-w/2;y=928;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"play","button_wrong_continue",_kn);}
function quiz_showFinishedPopup()
{var nr=parseInt(user.data.progress);var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];layout.popup=_ip._he();_ip._es(layout.popup,"rgba(0,0,0,0.5)");var x,y,w,h;w=985;h=1115;x=_ip.width/2-w/2;y=_ip.height/2-h/2;layout.popup_window=_ip._hi(layout.popup,x,y,w,h);var window_width=w;_ip._es(layout.popup_window,palet.popup_back);_ip._eo(layout.popup_window,0,0,50,"#000");x=88;y=80;w=985-x*2;h=460;var str="";str+="GEFELICITEERD!";_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_mid,str);y=158;var str="";str+="Je hebt het spel uitgespeeld";_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.head,str);y+=50;var str="";str+="Je score is "+user.data.punten+" punten!";_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.head,str);y+=100;str="Speel het spel nog een keer, bekijk de highscores of bouw nog even in je woonplaats. Je kunt nu natuurlijk ook gewoon stoppen. In dat geval, hopelijk tot ziens!"
_ip._hc(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);w=_ip._gj['buttons'].ss['again'][0][2];h=_ip._gj['buttons'].ss['again'][0][3];x=(window_width-w)/2;y=475;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"again","button_again",_kn);w=_ip._gj['buttons'].ss['high'][0][2];h=_ip._gj['buttons'].ss['high'][0][3];x=(window_width-w)/2;y=740;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"high","button_high",_kn);w=_ip._gj['buttons'].ss['city'][0][2];h=_ip._gj['buttons'].ss['city'][0][3];x=(window_width-w)/2;y+=100;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"city","button_city",_kn);w=_ip._gj['buttons'].ss['stop'][0][2];h=_ip._gj['buttons'].ss['stop'][0][3];x=(window_width-w)/2;y+=100;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"stop","button_stop",_kn);}
function map_CheckNewHouseAvailable()
{var i;var new_house_available=-1;{}
for(i=0;i<map.shop.length;i++)
{if(map.shop[i].prijs<user.data.stenen)
{{}
var j=0;var placed=false;for(j=0;j<user.data.gekochtehuizen.length;j++)
{if(user.data.gekochtehuizen[j].id==map.shop[i].img)
{{}
placed=true;break;}}
if(placed==false)
{if(typeof(user.data.heard_about)!=="undefined")
{if(user.data.heard_about.indexOf(map.shop[i].img)==-1)
{user.data.heard_about+=map.shop[i].img+"|";new_house_available=i;}}else
{user.data.heard_about=map.shop[i].img+"|";new_house_available=i;}}}else
{}}
return new_house_available;}
function _kg(gekozen)
{var new_house_available=map_CheckNewHouseAvailable();if(new_house_available!=-1)
{{}}
var nr=parseInt(user.data.progress);var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];layout.popup=_ip._he();_ip._es(layout.popup,"rgba(0,0,0,0.5)");if(new_house_available!=-1)
{var x,y,w,h;w=640;h=720;x=_ip.width/2+350;y=_ip.height/2-180;layout.popup_new_house=_ip._hi(layout.popup,x,y,w,h);_ip._es(layout.popup_new_house,palet.pale_blue);_ip._eo(layout.popup_new_house,0,0,50,"#000");x=205;y=390;w=380;h=190;var str="";str+="Gefeliciteerd, je hebt een nieuw gebouw vrijgespeeld";layout.popup_house_text=_ip._hc(layout.popup_new_house,x,y,w,h,fonts.head,"#fff","center",fontsz.quiz_very_small,str);x=205;y=10;w=400;h=380;nr=new_house_available;layout.popup_canv=_ip._hh(layout.popup_new_house,x,y,w,h);{}
{}
{}
var fx=w/_ip._gj[map.shop[nr].img].w;var fy=h/_ip._gj[map.shop[nr].img].h;var f=fx;if(fy<fx)f=fy;if(f>0.9&&f<1.1)f=1;else f*=0.9;_ip.drawImage(layout.popup_canv,map.shop[nr].img,w/2,h/2,0,f);w=_ip._gj['buttons'].ss['place'][0][2];h=_ip._gj['buttons'].ss['place'][0][3];{}
x=200;y=560;_ip._hd(layout.popup_new_house,x,y,w,h,'buttons',"place","button_place_on_map",_kn);}
var x,y,w,h;w=985;h=1118;x=_ip.width/2-w/2;y=_ip.height/2-h/2;layout.popup_window=_ip._hi(layout.popup,x,y,w,h);_ip._es(layout.popup_window,palet.popup_back);_ip._eo(layout.popup_window,0,0,50,"#000");x=88;y=80;w=985-x*2;h=460;var str="";str+="Je koos antwoord <font size='+3'>"+gekozen+"</font>";layout.popup_head1=_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);y=158;var str="";str+="Dat is goed!";layout.popup_head2=_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_mid,str);y=220;h=660;var str="";str+="Je verdient "+quiz.question_score+" pnt en "+quiz.question_stenen+" stenen";layout.popup_head3=_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_small,str);y+=_ip.getBoxContentHeight(layout.popup_head3)+60;str=q.right;layout.popup_body=_ip._hc(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);w=_ip._gj['buttons'].ss['play'][0][2];h=_ip._gj['buttons'].ss['play'][0][3];x=985/2-w/2;y=865;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"play","button_right_continue",_kn);_ip._eg(layout.popup,false);}
function _kh()
{var nr=parseInt(user.data.progress);var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];if(typeof(q.used_hint)==="undefined"||q.used_hint!=true)
{q.used_hint=true;var data={};data.qid=q.id;data.stat="hint";data.user=user.data.naam;_ip.setVars("add_stat.php",data);}
var data={};data.naam=_ip._gn("user_naam");data.progress=user.data.progress;data.answered="a";data.question_id=q.id;data.ck=new Date().getTime();var str="answer_question.php?";var i;for(i in data)str+=i+"="+data[i]+"&";{}
_ip.getVars("answer_question.php",data,_kd,_ke);layout.popup=_ip._he();_ip._es(layout.popup,"rgba(0,0,0,0.5)");var x,y,w,h;w=985;h=1118;x=_ip.width/2-w/2;y=_ip.height/2-h/2;layout.popup_window=_ip._hi(layout.popup,x,y,w,h);_ip._es(layout.popup_window,palet.popup_back);_ip._eo(layout.popup_window,0,0,50,"#000");x=88;y=80;w=Math.floor(985-x*2);h=460;var str="";str+="Vind je de vraag nog moeilijk?<BR>Misschien dat het met deze hint wel zal lukken?";layout.popup_head1=_ip._hc(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);var th=_ip.getTextboxHeight(layout.popup_head1);{}
y+=th+40;str=q.hint;layout.popup_body=_ip._hc(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);th=_ip.getTextboxHeight(layout.popup_body);y+=th+40;{}
w=_ip._gj['buttons'].ss['play'][0][2];h=_ip._gj['buttons'].ss['play'][0][3];x=985/2-w/2;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"continue","button_hint_continue",_kn);w=985;h=y+280;y=_ip.height/2-h/2;x=_ip.width/2-w/2;_ip._ef(layout.popup_window,w,h);_ip._fj(layout.popup_window,x,y);_ip._eg(layout.popup,false);}
function _ki(nr)
{var q=quiz.questions[nr];{}
{}
if(parseInt(user.data.progress)==0)
{{}
var data={};data.stat="game";data.event="started";data.user=user.data.naam;_ip.setVars("add_stat.php",data);}
_ip.setText(layout.vraag_nr,"Vraag "+(parseInt(user.data.progress)+1)+"/"+quiz.question_order.length);_ip.setText(layout.score_label,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");var w=412;w=w*(parseInt(user.data.progress)/(quiz.question_order.length-1));var h=30;_ip._ef(layout.progress,w,h);_ip.setText(layout.title,q.title);_ip.setText(layout.question_body,q.body);var answers=["A","B","C","D"];var hussle_antwoorden=[0,1,2,3];hussle_antwoorden.sort(_ip.sort_shuffle);{}
w=854;h=557;var x=104;var y=488;_ip._fa(layout.media);if(q.media!="")
{if(q.media.indexOf("www")==-1&&q.media.indexOf("http")==-1)
{layout.media=_ip._hi(layout.quiz,x,y,w,h);_ip._es(layout.media,"#fff");_ip._erPath(layout.media,"/mgcms/cms_images/"+q.media+".png");}else
{var video_code=_kj(q.media);{}
var iframe_url="https://www.youtube.com/embed/"+video_code+"?autoplay=1&showinfo=0&controls=1&rel=0&modestbranding=1";if(layout.media.kind=="hybridWebview")
{{}
_ip.setWebviewURL(layout.media,"www.google.com");}
if(layout.media)
{{}
_ip._fa(layout.media);}
layout.media=_ip.createWebview(layout.quiz,x,y,w,h,iframe_url);}}
var i;for(i=0;i<4;i++)
{_ip.setText(layout["a"+i+"_text"],q[answers[hussle_antwoorden[i]]]);var th=_ip.getTextboxHeight(layout["a"+i+"_text"]);{}
_ip._fj(layout["a"+i+"_text"],124,90-th/2);}
_kl();}
function _kj(media_url)
{{}
var video_code="";if(media_url.indexOf("youtu.be/")!=-1)
{video_code=media_url.substr(media_url.indexOf("youtu.be/")+9,11);}
if(media_url.indexOf("v=")!=-1)
{video_code=media_url.substr(media_url.indexOf("v=")+2,11);}
return video_code;}
function _jbQuiz()
{{}
_ip._gp();layout={};layout.back=_ip._he();_ip._es(layout.back,palet.pale_green);var w,h,x,y,f,tx,ty,string;w=_ip.width;h=quiz.bar_height;x=0;y=0;layout.bar=_ip._hi(layout.back,x,y,w,h);_ip._es(layout.bar,palet.pale_blue);w=2048;h=1361;x=(_ip.width-2048)/2;y=0;layout.quiz=_ip._hi(layout.back,x,y,w,h);layout.user_name=_ip._hc(layout.quiz,60,20,450,100,fonts.head,"#fff","left",fontsz.head,_ip._gn("user_naam"));layout.vraag_nr=_ip._hc(layout.quiz,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag "+user.data.progress+"/..");layout.score_label=_ip._hc(layout.quiz,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");w=412;h=30;x=(2048-w)/2;y=(quiz.bar_height-h)/2+5;layout.progress_total=_ip._hi(layout.quiz,x,y,w,h);_ip._es(layout.progress_total,"#fff");var w1=(parseInt(user.data.progress)/30);if(w1>1)w1=1;if(w1<0)w1=0;layout.progress=_ip._hi(layout.quiz,x,y,w*w1,h);_ip._es(layout.progress,palet.pale_yellow);w=854;h=86;x=104;y=264;string="...";layout.title=_ip._hc(layout.quiz,x,y,w,h,fonts.head,palet.head,"left",fontsz.head,string);w=854;h=174;x=104;y=310;string="...";layout.question_body=_ip._hc(layout.quiz,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,string);w=854;h=557;x=104;y=488;layout.media=_ip._hi(layout.quiz,x,y,w,h);_ip._es(layout.media,"#fff");var i,letter=["A","B","C","D"];var answers=["","","",""];layout.dummy=_ip._hc(layout.quiz,-50,-100,50,100,fonts.head,palet.head,"center",20,"");for(i=0;i<4;i++)
{w=900;h=quiz.button_height;x=1046;y=315+(quiz.button_height-16)*i;layout["a"+i]=_ip._hi(layout.quiz,x,y,w,h);layout["a"+i+"_canvas"]=_ip._hh(layout["a"+i],0,0,w,h);layout["a"+i+"_canvas"].over=false;layout["a"+i+"_letter"]=_ip._hc(layout["a"+i],-5,60,150,150,fonts.head,palet.head,"center",60,letter[i]);string="";layout["a"+i+"_text"]=_ip._hc(layout["a"+i],128,60,720,70,fonts.body,palet.body,"left",fontsz.body,answers[i]);layout["a"+i+"hit"]=_ip._hi(layout["a"+i],0,0,w,h);_ip._fk(layout["a"+i+"hit"],"answer|"+i,_kn,_km);}
_kl();w=_ip._gj['buttons'].ss['stop'][0][2];h=_ip._gj['buttons'].ss['stop'][0][3];x=2048-300;y=137;_ip._hd(layout.quiz,x,y,w,h,'buttons',"stop","button_stop",_kn);w=_ip._gj['buttons'].ss['high'][0][2];h=_ip._gj['buttons'].ss['high'][0][3];x=2048-610;y=137;_ip._hd(layout.quiz,x,y,w,h,'buttons',"high","button_high",_kn);w=_ip._gj['buttons'].ss['city'][0][2];h=_ip._gj['buttons'].ss['city'][0][3];x=2048-1035;y=137;_ip._hd(layout.quiz,x,y,w,h,'buttons',"city","button_city",_kn);w=_ip._gj['buttons'].ss['answer'][0][2];h=_ip._gj['buttons'].ss['answer'][0][3];x=2048-60-755;y=_ip.height-h-60;layout.answer_button=_ip._hd(layout.quiz,x,y,w,h,'buttons',"answer","button_answer",_kn);_ip._eg(layout.answer_button,false);w=_ip._gj['buttons'].ss['hint'][0][2];h=_ip._gj['buttons'].ss['hint'][0][3];x=2048-60-192;y=_ip.height-h-80;_ip._hd(layout.quiz,x,y,w,h,'buttons',"hint","button_hint",_kn);var nr=parseInt(user.data.progress);if(nr>=quiz.question_order.length)
{_ip._fd("finished");quiz_showFinishedPopup();}else
{_ki(quiz.question_order[nr]);}}
function _kl()
{var i;var w,h;for(i=0;i<4;i++)
{w=900;h=quiz.button_height;var rounding=8;var ctx=layout["a"+i+"_canvas"].context;var grd=ctx.createLinearGradient(0,0,0,h);if(i==quiz.selected_answer)
{_ip.setTextBoxColor(layout["a"+i+"_text"],"#fff");_ip.setTextBoxColor(layout["a"+i+"_letter"],"#9cd2f7");grd.addColorStop(0,"#255192");grd.addColorStop(1,"#3a75bc");}else
{_ip.setTextBoxColor(layout["a"+i+"_text"],palet.body);_ip.setTextBoxColor(layout["a"+i+"_letter"],palet.head);if(layout["a"+i+"_canvas"].over===false)
{grd.addColorStop(0,"#9cd2f7");grd.addColorStop(1,"#88bfe8");}else
{grd.addColorStop(0,"#6cbcff");grd.addColorStop(1,"#5aaaf2");}}
ctx.fillStyle=grd;ctx.strokeStyle="#FFF";ctx.lineWidth=rounding;ctx.beginPath();_ip._gs(ctx,4,4,w-8,h-8,rounding);ctx.fill();ctx.stroke();}}
function _km(label,overout)
{{}
if(label.indexOf("answer|")!=-1)
{var nr=parseInt(label.substr(7,15));{}
if(overout=="out")
{layout["a"+nr+"_canvas"].over=false;}else
{layout["a"+nr+"_canvas"].over=true;}
_kl();}}
function _kn(label)
{if(label.indexOf("answer|")!=-1)
{var nr=parseInt(label.substr(7,15));quiz.selected_answer=nr;_ip._eg(layout.answer_button,true);_kl();}
switch(label)
{case"button_place_on_map":map.init();break;case"button_right_continue":case"button_wrong_continue":var nr=parseInt(user.data.progress);if(nr>=quiz.question_order.length)
{_ip._fd("finished");var data={};data.naam=user.data.naam;_ip.setVars("add_highscore.php",data);var data={};data.stat="game";data.event="finished";data.user=user.data.naam;_ip.setVars("add_stat.php",data);quiz_showFinishedPopup();}else
{_ip._fa(layout.popup);quiz.selected_answer=-1;_ip._eg(layout.answer_button,false);_ki(quiz.question_order[parseInt(user.data.progress)]);}
break;case"button_hint_continue":_ip._fa(layout.popup);break;case"button_hint":_ip._fd("hint");_kh();break;case"button_answer":_kc();if(layout.media.kind=="hybridWebview")
{{}
_ip.setWebviewURL(layout.media,"img/video_stopped.png");}
break;case"button_again":if(1)
{user.data.progress=0;user.data.hints=[];for(var i=0;i<user.data.question_order.length;i++)
user.data.hints.push(0);var data={};data.page="quiz";data.stat="reset";data.user=user.data.naam;_ip.setVars("add_stat.php",data);var data={};data.naam=_ip._gn("user_naam");data.wachtwoord=_ip._gn("user_wachtwoord");data.ck=new Date().getTime();{}
_ip.getVars("reset_game.php",data,_lf,_lg);}
break;case"button_city":map.init();break;case"button_high":high.init();break;case"button_stop":start.init();break;default:{}}}
function _lf(response)
{var id;if(response.succes=="1")
{{}
{}
user.data.question_order=response.user.question_order;location.reload();}else
{var all;_ip.showWarning("Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nServer geeft error: "+response.error+" ("+response.errorcode+"), het spel start opnieuw op.");{}
for(all in response)
{}
setTimeout(start.init,200);return;}}
function _lg(response)
{_ip.showWarning("Check your internet connection: mangled answer or no answer received.");{}}
var map={};map.init=initMap;map.mouse={};map.framecounter=0;map.bar_height=80;map.menu_width=530;map.button_height=428;map.menu_offset=0;map.menu_speed=0;map.state="init";map.menu_height=_ip.height;map.dragging=-1;map.drag_object={};map.houses=[];map.shop=[];function initMap()
{var data={};data.page="map";data.user=user.data.naam;data.stat="page";_ip.setVars("add_stat.php",data);_ip._fd("next_question");{}
_ip._em("lastpage","map");_ip.resizeFunction=_jbmap;map.back_index='location'+user.data.plaats;{}
if(!_ip._gj.hasOwnProperty(map.back_index))
{_ip.throwError(map.back_index+" not defined in _gj");}
map.back_w=_ip._gj[map.back_index].w;map.back_h=_ip._gj[map.back_index].h;map.offset={x:_ip._gj[map.back_index].w/2-_ip.width/2,y:_ip._gj[map.back_index].h/2-_ip.height/2};map.houses=[];var i=0;for(i=0;i<user.data.gekochtehuizen.length;i++)
{{}
map.houses.push({id:"hous_"+user.data.gekochtehuizen[i].id,lx:parseInt(user.data.gekochtehuizen[i].lx),ly:parseInt(user.data.gekochtehuizen[i].ly),moveable:true});}
map.houses.sort(_ko);_jbmap();if(1)
_kp();else
{{}
map.state="displaying";_jbmap();map_UpdateScrollbar();}}
function _ko(a,b)
{if(a.ly>b.ly)return 1;if(a.ly<b.ly)return-1;return 0;}
function _kp()
{var data={};map.state="loading";data.city=user.data.plaats;{}
_ip.getVars("get_map_images_per_city.php",data,_kq,_ks);}
function _kq(response)
{{}
var id;var default_houses_need_to_be_placed="";if(response.succes=="1")
{{}
for(id in response.images)
{{}
var im=response.images[id];for(var b in im)
{if(b!="src")
{}}
var o={};o.src=im.src;o.id=id;o.naam=im.naam;o.w=parseInt(im.w);o.h=parseInt(im.h);o.rx=parseInt(im.rx);o.ry=parseInt(im.ry);if(o.rx>o.w||o.rx<o.w)o.rx=o.w/2;if(o.ry>o.h||o.ry<o.h)o.ry=o.h;o.lx=parseInt(im.lx);o.ly=parseInt(im.ly);o.preload=true;o.kind="sprite";o.ss={};o.ss.house=[[0,0,o.w,o.h,0,o.rx,o.ry]];_ip.addToManifest(o,id,"dataURL",_kr);if(parseInt(im.city)==7)
{var i;var in_shop=false;for(i=0;i<map.shop.length;i++)
{{}
if(map.shop[i].img==id)in_shop=true;}
if(in_shop==false)
{{}
var o={};o.naam=im.naam;o.prijs=parseInt(im.prijs);o.img=id;map.shop.push(o);}}else
{if(o.lx==0&&o.ly==0)
{{}
default_houses_need_to_be_placed+="'"+o.naam+"' ";var o={};o.naam=im.naam;o.prijs=0;o.img=id;o.setpos=true;map.shop.push(o);}else
{{}
o.moveable=false;map.houses.push(o);}}}
{}
map.shop.sort(byPrice);map.houses.sort(_ko);if(default_houses_need_to_be_placed!="")
{_ip.showWarning("Some default houses need to be placed:\n"+default_houses_need_to_be_placed+"\nYou can find these in the shop until you place them.");}}else
{var all;for(all in response)
{}}
if(layout.ismap==true)
{_kt();}}
function byPrice(a,b)
{if(a.prijs>b.prijs)return 1;if(a.prijs<b.prijs)return-1;return 0;}
function _kr()
{if(layout.ismap==true)
{{}
if(_ip.checkAllImagesLoaded()==true)
{{}
map.state="displaying";_kt();_jbmap();map_UpdateScrollbar();}}else
{if(_ip.checkAllImagesLoaded()==true)
{{}}else
{{}}}}
function _ks(response)
{{}}
function mapLoop()
{var refreshMenu=false;if(Math.abs(map.menu_speed)>1)
{map.menu_offset-=map.menu_speed;map.menu_speed*=0.9;refreshMenu=true;}
if(map.menu_offset<0)
{map.menu_offset*=0.9;map.menu_speed=0;refreshMenu=true;}
if(map.menu_offset>(map.menu_height-layout.menu_viewport))
{map.menu_offset=(map.menu_height-layout.menu_viewport)*0.1+0.9*map.menu_offset;map.menu_speed=0;refreshMenu=true;}
if(refreshMenu)
{_ip._fj(layout.menu_inside,0,-map.menu_offset);}
var refreshMap=false;if(map.just_changed)
{refreshMap=true;map.just_changed=false;}
if(Math.abs(map.offset.dx)>1||Math.abs(map.offset.dy)>1)
{map.offset.x-=map.offset.dx;map.offset.y-=map.offset.dy;map.offset.dx*=0.9;map.offset.dy*=0.9;refreshMap=true;}
if(map.offset.x<0)
{map.offset.x*=0.9;map.offset.dx=0;refreshMap=true;}
if(map.offset.x>(map.back_w-layout.map.w))
{map.offset.x=0.9*map.offset.x+0.1*(map.back_w-layout.map.w);map.offset.dx=0;refreshMap=true;}
if(map.offset.y<0)
{map.offset.y*=0.9;map.offset.dy=0;refreshMap=true;}
if(map.offset.y>(map.back_h-layout.map.h))
{map.offset.y=0.9*map.offset.y+0.1*(map.back_h-layout.map.h);map.offset.dy=0;refreshMap=true;}
switch(map.state)
{case"loading":refreshMap=false;break;}
if(refreshMap)
{_ip._fj(layout.map_inside,-map.offset.x,-map.offset.y);_kt();map_drawScrollbar();}}
function _kt()
{var i;if(typeof(layout.map_canvas.context)==="undefined")
{{}
return;}
var ctx=layout.map_canvas.context;_ip._hk(layout.map_canvas);for(i=0;i<map.houses.length;i++)
{if(map.houses[i].id=="house")
{ctx.fillStyle="#f00";ctx.fillRect(map.houses[i].lx-map.offset.x-10,map.houses[i].ly-map.offset.y-10,20,20);}else
{if(typeof(map.houses[i])!=="undefined")
{_ip._gr(layout.map_canvas,map.houses[i].id,"house",map.houses[i].lx-map.offset.x,map.houses[i].ly-map.offset.y,0,0,1);}else
{{}}}}}
function _jbmap()
{var pass_test=false;if(typeof(layout.last_resize)==="undefined")
{pass_test=true;}else
{var dt=layout.last_resize-(new Date()).getTime();if(dt>100)
{pass_test=true;}}
if(pass_test==false)
{{}
return;}else
{layout.last_resize=(new Date()).getTime();}
{}
_ip._gp();layout={};layout.ismap=true;layout.back=_ip._he();_ip._es(layout.back,palet.pale_green);var w,h,x,y,f,tx,ty,string;w=_ip.width;h=map.bar_height;x=0;y=0;layout.bar=_ip._hi(layout.back,x,y,w,h);_ip._es(layout.bar,palet.pale_blue);layout.user_name=_ip._hc(layout.bar,60,20,450,100,fonts.head,"#fff","left",fontsz.head,_ip._gn("user_naam"));w=412;h=30;x=(2048-w)/2;y=(quiz.bar_height-h)/2+5;{}
layout.progress_total=_ip._hi(layout.bar,x,y,w,h);_ip._es(layout.progress_total,"#fff");{}
layout.progress=_ip._hi(layout.bar,x,y,w*(parseInt(user.data.progress)/30),h);_ip._es(layout.progress,palet.pale_yellow);{}
layout.vraag_nr=_ip._hc(layout.bar,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag x/x");var show_vraag_nr=(parseInt(user.data.progress)+1);if(show_vraag_nr>quiz.questions.length)show_vraag_nr=quiz.question_order.length;_ip.setText(layout.vraag_nr,"Vraag "+show_vraag_nr+"/"+quiz.question_order.length);var w=412;w=w*(parseInt(user.data.progress)/parseInt(quiz.question_order.length));var h=30;_ip._ef(layout.progress,w,h);layout.score_label=_ip._hc(layout.bar,_ip.width-680,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+parseInt(user.data.punten)+"</em> punten / <em>"+parseInt(user.data.stenen)+"</em> stenen");w=map.menu_width;h=_ip.height-map.bar_height;x=0;y=map.bar_height;layout.menu_viewport=h;layout.menu=_ip._hi(layout.back,x,y,w,h);_ip._es(layout.menu,palet.grey_blue);map.menu_height=map.shop.length*map.button_height+10;{}
{}
w=map.menu_width;h=map.menu_height;x=0;y=-map.menu_offset;layout.menu_inside=_ip._hi(layout.menu,x,y,w,h);var i,temp;{}
for(i=0;i<map.shop.length;i++)
{w=map.menu_width;h=map.button_height;x=0;y=map.button_height*i;map.shop[i].canv=_ip._hh(layout.menu_inside,x,y,w,h);_kv(i);}
w=_ip.width-map.menu_width;h=_ip.height-map.bar_height;x=map.menu_width;y=map.bar_height;layout.map=_ip._hi(layout.back,x,y,w,h);layout.map.x=x;layout.map.y=y;layout.map.w=w;layout.map.h=h;w=_ip._gj[map.back_index].w;h=_ip._gj[map.back_index].h;x=-map.offset.x;y=-map.offset.y;map.offset.dx=0;map.offset.dy=0;layout.map_inside=_ip._hi(layout.map,x,y,w,h);_ip._es(layout.map_inside,palet.map_orange);_ip._er(layout.map_inside,map.back_index);w=_ip.width-map.menu_width;h=_ip.height-map.bar_height;x=map.menu_width;y=map.bar_height;layout.map_canvas=_ip._hh(layout.back,x,y,w,h);_kt();layout.scroll={};layout.scroll.back={};layout.scroll.back.x=map.menu_width;layout.scroll.back.y=map.bar_height;layout.scroll.back.w=50;layout.scroll.back.h=_ip.height-map.bar_height;layout.scroll.track={};layout.scroll.track.x=10;layout.scroll.track.y=55;layout.scroll.track.w=layout.scroll.back.w-20;layout.scroll.track.h=layout.scroll.back.h-110;layout.scroll.size=layout.scroll.track.h;layout.scroll.y=0;layout.scroll_canvas=_ip._hh(layout.back,layout.scroll.back.x,layout.scroll.back.y,layout.scroll.back.w,layout.scroll.back.h);map_drawScrollbar();layout.hotspot=_ip._he();_ip.makeDraggable(layout.hotspot,map_HandleDown,map_HandleUp,_ld);w=map.menu_width;h=700;x=200;y=200;layout.dragitem=_ip._hh(layout.hotspot,x,y,w,h);_ip._eg(layout.dragitem,false);w=_ip._gj['buttons'].ss['stop'][0][2];h=_ip._gj['buttons'].ss['stop'][0][3];x=_ip.width-w-60;y=60+map.bar_height;_ip._hd(layout.hotspot,x,y,w,h,'buttons',"stop","button_stop",_le);w=_ip._gj['buttons'].ss['high'][0][2];h=_ip._gj['buttons'].ss['high'][0][3];x=x-w-30;y=60+map.bar_height;_ip._hd(layout.hotspot,x,y,w,h,'buttons',"high","button_high",_le);var nr=parseInt(user.data.progress);w=_ip._gj['buttons'].ss['continue'][0][2];h=_ip._gj['buttons'].ss['continue'][0][3];x=_ip.width-w-60;y=_ip.height-h-60;_ip._hd(layout.hotspot,x,y,w,h,'buttons',"continue","button_continue",_le);if(wwjw.page_extras=="show_welcome")
{_ip._em("lastpage","welcome");{}
layout.popup=_ip._he();_ip._es(layout.popup,"rgba(0,0,0,0.5)");var x,y,w,h;w=985;h=799;x=_ip.width/2-w/2;y=_ip.height/2-h/2;layout.popup_window=_ip._hi(layout.popup,x,y,w,h);_ip._es(layout.popup_window,palet.popup_back);_ip._eo(layout.popup_window,0,0,50,"#000");x=88;y=80;w=985-x*2;h=460;var str="";str+="<h1><center>Welkom thuis</center></h1>";str+="Wat gaat het worden vandaag? Een achtbaan achter de kerk of een manege op de markt? Is jouw voetbalvereniging hoognodig aan een stadion toe? Het is allemaal geen probleem. Je moet alleen de vragen in de game goed beantwoorden. Voor ieder goed antwoord krijg je punten. Heb je genoeg punten verzameld, dan kun je een keuze maken uit een van de gebouwen, attracties of voorzieningen. Een stadion is natuurlijk wel wat duurder dan een speeltuin. Sleep jouw aankoop naar de plek die jij er voor in gedachten hebt en hoppa: het is in één keer een heel stuk prettiger wonen in jouw woonplaats. Succes!";layout.popup_text=_ip._hc(layout.popup_window,x,y,w,h,"sans-serif","#2f2f2f","left",fontsz.body,str);w=_ip._gj['buttons'].ss['play'][0][2];h=_ip._gj['buttons'].ss['play'][0][3];x=985/2-w/2;y=548;_ip._hd(layout.popup_window,x,y,w,h,'buttons',"play","button_play",_le);}
_ip.startLoop(mapLoop,20);}
function _kv(nr)
{_ip._hk(map.shop[nr].canv);var ctx=map.shop[nr].canv.context;ctx.font=fontsz.menu+'px '+fonts.head;ctx.textAlign='left';ctx.fillStyle="#fff";ctx.fillText(nr+" "+map.shop[nr].naam,34,400);ctx.font=fontsz.body+'px '+fonts.body;;ctx.textAlign='right';ctx.fillStyle="#fff";ctx.fillText(map.shop[nr].prijs+" stenen",494,400);ctx.fillStyle="#fff";ctx.fillRect(35,35,map.menu_width-70,320);var fx=(map.menu_width-70)/_ip._gj[map.shop[nr].img].w;var fy=320/_ip._gj[map.shop[nr].img].h;var f=fx;if(fy<fx)f=fy;if(f>0.9&&f<1.1)f=1;else f*=0.9;_ip.drawImage(map.shop[nr].canv,map.shop[nr].img,35+(map.menu_width-70)/2,35+320/2,0,f);{}
if(map.shop[nr].prijs>parseInt(user.data.stenen))
{ctx.fillStyle="rgba(87,118,135,0.5)";ctx.fillRect(35,35,map.menu_width-70,420);}
ctx.fillStyle="#fff";ctx.fillRect(35,map.button_height-3,map.menu_width-70,3);_ip.mouseWheelCallback=map_HandleMousewheel;}
function map_drawScrollbar()
{var i;_ip._hk(layout.scroll_canvas);var ctx=layout.scroll_canvas.context;ctx.fillStyle="rgba(255,255,255,0.6)";ctx.fillRect(0,0,layout.scroll.back.w,layout.scroll.back.h);ctx.fillStyle="rgba(255,255,255,0.6)";ctx.fillRect(layout.scroll.track.x,layout.scroll.track.y,layout.scroll.track.w,layout.scroll.track.h);ctx.fillStyle=palet.pale_blue;ctx.fillRect(layout.scroll.track.x,layout.scroll.track.y+layout.scroll.y,layout.scroll.track.w,layout.scroll.size);ctx.beginPath();ctx.moveTo(10,35);ctx.lineTo(25,12);ctx.lineTo(40,35);ctx.closePath();ctx.fill();ctx.beginPath();ctx.moveTo(10,layout.scroll.back.h-35);ctx.lineTo(25,layout.scroll.back.h-12);ctx.lineTo(40,layout.scroll.back.h-35);ctx.closePath();ctx.fill();}
function map_HandleMousewheel(d)
{layout.scroll.y-=d;map_userControlledScrollbar();}
function map_UpdateScrollbar()
{{}
{}
layout.scroll.size=layout.scroll.track.h*layout.menu_viewport/(map.menu_height+layout.menu_viewport);{}
{}
{}
{}
{}
layout.scroll.y=(layout.scroll.track.h-layout.scroll.size)*map.menu_offset/(map.menu_height-layout.menu_viewport);{}
map_clampScrollbar();map_drawScrollbar();}
function map_clampScrollbar()
{if(layout.scroll.y<0)layout.scroll.y=0;if(layout.scroll.y>(layout.scroll.track.h-layout.scroll.size))layout.scroll.y=(layout.scroll.track.h-layout.scroll.size);}
function map_userControlledScrollbar()
{map_clampScrollbar();map_drawScrollbar();map.menu_offset=(map.menu_height-layout.menu_viewport)*layout.scroll.y/(layout.scroll.track.h-layout.scroll.size);map.menu_speed=1.1;}
function map_HandleDown(id,x,y)
{if(y>map.bar_height)
if(x<map.menu_width)
{map.menudragdir="";{}
map.down={x:x,y:y};map.button_clicked=Math.floor((y-map.bar_height+map.menu_offset)/map.button_height);map.dragTarget="menu";{}
var cost=_ky(map.shop[map.button_clicked].img);{}
{}
{}
if(cost>user.data.stenen)
{map.button_clicked=-1;{}}}else
{if(x<(layout.scroll.back.x+layout.scroll.back.w))
{map.down={x:x,y:y};x=x-layout.scroll.back.x;y=y-layout.scroll.back.y;{}
var handled=false;if(handled==false&&y<layout.scroll.track.y)
{handled=true;{}
layout.scroll.y-=10;map_userControlledScrollbar();map.dragging=-1;}
if(handled==false&&y>(layout.scroll.back.h-layout.scroll.track.y))
{handled=true;{}
layout.scroll.y+=10;map_userControlledScrollbar();map.dragging=-1;}
y=y-layout.scroll.track.y;if(handled==false&&y<(layout.scroll.y))
{handled=true;{}
map.dragging=-1;layout.scroll.y-=120;map_userControlledScrollbar();}
if(handled==false&&y>(layout.scroll.y+layout.scroll.size))
{handled=true;{}
map.dragging=-1;layout.scroll.y+=120;map_userControlledScrollbar();}
if(handled==false&&y>=(layout.scroll.y)&&y<=(layout.scroll.y+layout.scroll.size))
{handled=true;{}
map.dragging=1;layout.scroll.down={x:x,y:y-layout.scroll.y};map.dragTarget="scroll";}}else
{var hit_house=-1;var min_dist=10000000;var max_y=-10000000;{}
for(i=0;i<map.houses.length;i++)
{if(map.houses[i].id!="house")
{{}
if(map.houses[i].moveable)
{var im=map.houses[i].id;var kader={};kader.x=Math.floor(map.houses[i].lx-map.offset.x-_ip._gj[im].rx);kader.y=Math.floor(map.houses[i].ly-map.offset.y-_ip._gj[im].ry);kader.w=_ip._gj[im].w;kader.h=_ip._gj[im].h;{}
if((x-map.menu_width)>kader.x&&(x-map.menu_width)<(kader.x+kader.w)&&(y-map.bar_height)>kader.y&&(y-map.bar_height)<(kader.y+kader.h))
{var dx=(map.houses[i].lx-map.offset.x)-(x-map.menu_width);var dy=(map.houses[i].ly-map.offset.y)-(y-map.bar_height);var len=Math.sqrt(dx*dx+dy*dy);if(max_y<map.houses[i].ly&&len<min_dist)
{max_y=map.houses[i].ly;min_dist=len;hit_house=i;}}}}else
{{}}}
if(hit_house!=-1&&map.houses[hit_house].moveable)
{{}
for(var all in map.houses[hit_house])
{{}}
map.dragTarget="moveHouse";map.drag_object=map.houses.splice(hit_house,1)[0];refreshMap=false;_kt();_ip._hk(layout.dragitem);layout.dragitem.context.globalAlpha=0.7;map.dragging=1;var im=map.drag_object.id;{}
map.drag_object.ox=map.drag_object.lx;map.drag_object.oy=map.drag_object.ly;map.drag_object.w=_ip._gj[im].w;map.drag_object.h=_ip._gj[im].h;map.drag_object.gx=(map.drag_object.ox-_ip._gj[im].rx)-(x-map.menu_width+map.offset.x);map.drag_object.gy=(map.drag_object.oy-_ip._gj[im].ry)-(y-map.bar_height+map.offset.y);_ip.drawImage(layout.dragitem,im,map.drag_object.w/2,map.drag_object.h/2,0,1);_ip._fj(layout.dragitem,x+map.drag_object.gx,y+map.drag_object.gy);_ip._eg(layout.dragitem,true);map.button_clicked=-1;}else
{map.down={x:x,y:y};map.dragTarget="map";}}}}
function map_HandleUp(id,x,y)
{switch(map.dragTarget)
{case"scroll":map.dragging=-1;{}
break;case"moveHouse":{}
if(map.dragging!=-1)
{{}
_ip._fd("place");var map_x=Math.floor(x)+map.offset.x-map.menu_width;var map_y=Math.floor(y)+map.offset.y-map.bar_height;map_x=map_x+map.drag_object.gx+_ip._gj[map.drag_object.id].rx;map_y=map_y+map.drag_object.gy+_ip._gj[map.drag_object.id].ry;map.houses.push({id:map.drag_object.id,lx:map_x,ly:map_y,moveable:true});map.just_changed=true;map.houses.sort(_ko);_kt();var data={};data.id=map.drag_object.id.split("_")[1];data.lx=Math.floor(map_x);data.ly=Math.floor(map_y);data.ox=Math.floor(map.drag_object.ox);data.oy=Math.floor(map.drag_object.oy);data.naam=_ip._gn("user_naam");data.wachtwoord=_ip._gn("user_wachtwoord");{}
_ip.getVars("move_house.php",data,_kz,_la);_ip._eg(layout.dragitem,false);map.dragging=-1;}
case"menu":{}
if(map.dragging!=-1)
{{}
_ip._fd("place");var map_x=Math.floor(x)+map.offset.x-map.menu_width;var map_y=Math.floor(y)+map.offset.y-map.bar_height;map_x=map_x+map.drag_object.gx+_ip._gj[map.drag_object.id].rx;map_y=map_y+map.drag_object.gy+_ip._gj[map.drag_object.id].ry;map.houses.push({id:map.drag_object.id,lx:map_x,ly:map_y,moveable:true});map.just_changed=true;map.houses.sort(_ko);if(map.drag_object.setpos==true)
{{}
{}
{}
{}
var data={};data.id=map.drag_object.id.split("_")[1];data.lx=Math.floor(map_x);data.ly=Math.floor(map_y);_ip.getVars("set_default_pos.php",data,_lb,_lc);}else
{var data={};data.id=map.drag_object.id.split("_")[1];data.lx=Math.floor(map_x);data.ly=Math.floor(map_y);data.prijs=_ky(map.drag_object.id);data.naam=_ip._gn("user_naam");data.wachtwoord=_ip._gn("user_wachtwoord");{}
_ip.getVars("buy_house.php",data,_kz,_la);user.data.gekochtehuizen.push({id:data.id,lx:data.lx,ly:data.ly});user.data.stenen-=parseInt(data.prijs);_ip.setText(layout.score_label,"Score <em>"+parseInt(user.data.punten)+"</em> punten / <em>"+parseInt(user.data.stenen)+"</em> stenen");var i;for(i=0;i<map.shop.length;i++)
{_kv(i);}
var data={};data.stat="house";data.id=map.drag_object.id.split("_")[1];data.user=user.data.naam;_ip.setVars("add_stat.php",data);}
_ip._eg(layout.dragitem,false);map.dragging=-1;}
break;}}
function _ky(id)
{var i;for(i=0;i<map.shop.length;i++)
{{}
if(map.shop[i].img==id)return map.shop[i].prijs;}
return-1;}
function _kz(response)
{var id;if(parseInt(response.succes)==1)
{{}}else
{{}}}
function _la(response)
{{}}
function _lb(response)
{var id;if(parseInt(response.succes)==1)
{{}}else
{{}}}
function _lc(response)
{{}}
function _ld(id,x,y,dx,dy)
{switch(map.dragTarget)
{case"scroll":if(map.dragging!=-1)
{x=x-layout.scroll.back.x;y=y-layout.scroll.back.y;y=y-layout.scroll.track.y;layout.scroll.y=(y-layout.scroll.down.y);map_userControlledScrollbar();}
break;case"moveHouse":_ip._fj(layout.dragitem,x+map.drag_object.gx,y+map.drag_object.gy);break;case"menu":if(map.dragging!=-1)
{_ip._fj(layout.dragitem,x+map.drag_object.gx,y+map.drag_object.gy);{}}else
{var swipe_dx=map.down.x-x;var swipe_dy=map.down.y-y;var swipe_len=Math.sqrt(swipe_dx*swipe_dx+swipe_dy*swipe_dy);if(swipe_len>10||map.menudragdir!="")
{if(map.menudragdir=="")
{var swipe_dx=map.down.x-x;var swipe_dy=map.down.y-y;if(Math.abs(dx)>Math.abs(dy))
{map.menudragdir="hori";}else
{map.menudragdir="verti";}
if(map.button_clicked==-1)
map.menudragdir="verti";}
{}
if(map.menudragdir=="verti")
{map.menu_speed=dy;map_UpdateScrollbar();}else
{{}
map.dragging=map.button_clicked;_ip._hk(layout.dragitem);layout.dragitem.context.globalAlpha=0.7;var im=map.shop[map.dragging].img;map.drag_object.w=_ip._gj[im].w;map.drag_object.h=_ip._gj[im].h;map.drag_object.gx=-map.drag_object.w/2;map.drag_object.gy=-map.drag_object.h/2;map.drag_object.id=im;map.drag_object.setpos=map.shop[map.dragging].setpos;_ip.drawImage(layout.dragitem,im,map.drag_object.w/2,map.drag_object.h/2,0,1);_ip._fj(layout.dragitem,x+map.drag_object.gx,y+map.drag_object.gy);_ip._eg(layout.dragitem,true);map.button_clicked=-1;}}}
break;case"map":map.offset.dx=dx;map.offset.dy=dy;break;}}
function _le(label)
{switch(label)
{case"button_play":_ip.stopLoop();wwjw.page_extras="";quiz.init();break;case"button_stop":_ip.stopLoop();start.init();break;case"button_continue":_ip.stopLoop();var nr=parseInt(user.data.progress);quiz.init();break;case"button_high":_ip.stopLoop();high.init();break;default:{}}}
var high={};var empty_list=[];high.init=_lh;high.bar_height=80;high.tabs=["plaats","school","speler"];high.label="all";high.id="all";high.rank=-1;high.selected_tab=2;function _lh()
{{}
_ip._em("lastpage","high");_ip._fd("next_question");var data={};data.page="high";data.user=user.data.naam;data.stat="page";_ip.setVars("add_stat.php",data);var i;empty_list=[];for(i=0;i<12;i++)empty_list.push({naam:"loading",school:0,groep:0,plaats:0,punten:-1});high.data=empty_list;var data={};data.label=high.label;data.id=high.id;data.naam=user.data.naam;_ip.getVars("get_highscores.php",data,_li,_lj);_ip.resizeFunction=_jbhigh;_jbhigh();}
function _li(response)
{var id;if(parseInt(response.succes)==1)
{high.rank=-1;{}
high.data=response.high;high.rank=parseInt(response.rank);_lp();}else
{{}}}
function _lj(response)
{{}}
function _jbhigh()
{{}
_ip._gp();layout={};layout.back=_ip._he();_ip._es(layout.back,palet.green);var w,h,x,y,f,tx,ty,string;w=_ip.width;h=343;layout.split_y=343;x=0;y=0;layout.bar=_ip._hi(layout.back,x,y,w,h);_ip._es(layout.bar,palet.pale_blue);w=2048;h=1361;x=(_ip.width-2048)/2;y=0;layout.high=_ip._hi(layout.back,x,y,w,h);layout.split_y=343;layout.tab=[];var i;for(i=0;i<3;i++)
{x=2048-(334+60)*(i+1);y=layout.split_y-76;w=334;h=132;layout.tab[i]=_ip._hi(layout.high,x,y,w,h);if(high.selected_tab==i)
{_ip._es(layout.tab[i],palet.green);}else
{_ip._es(layout.tab[i],palet.pale_green);}
_ip._eq(layout.tab[i],50);_ip._fk(layout.tab[i],"button_tab"+i,_lr);x=0;y=15;w=334;h=132;string="Twee meerminnen";layout.title=_ip._hc(layout.tab[i],x,y,w,h,fonts.head,"#fff","center",fontsz.highscores_mid,high.tabs[i]);}
x=0;y=layout.split_y;w=2048;h=150;layout.tabs_over=_ip._hi(layout.high,x,y,w,h);_ip._es(layout.tabs_over,palet.green);layout.user_name=_ip._hc(layout.high,60,20,450,100,fonts.head,"#fff","left",fontsz.head,user.data.naam);layout.vraag_nr=_ip._hc(layout.high,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag x/x");layout.score_label=_ip._hc(layout.high,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");w=412;h=30;x=(2048-w)/2;y=(high.bar_height-h)/2+5;layout.progress_total=_ip._hi(layout.high,x,y,w,h);_ip._es(layout.progress_total,"#fff");layout.progress=_ip._hi(layout.high,x,y,w*(12/30),h);_ip._es(layout.progress,palet.pale_yellow);var show_vraag_nr=(parseInt(user.data.progress)+1);if(show_vraag_nr>quiz.questions.length)show_vraag_nr=quiz.questions.length;_ip.setText(layout.vraag_nr,"Vraag "+show_vraag_nr+"/"+quiz.questions.length);var w=412;w=w*(parseInt(user.data.progress)/parseInt(quiz.questions.length));var h=30;_ip._ef(layout.progress,w,h);x=88;y=243;w=854;h=86;layout.title=_ip._hc(layout.high,x,y,w,h,fonts.head,"#fff","left",fontsz.highscores_big,"Highscores");x=0;y=960;w=2048;h=135;layout.own_score=_ip._hh(layout.high,x,y,w,h-1);var ctx=layout.own_score.context;var blur_colors=["96c577","94c376","92c174","8fbd71","8bb96d","86b368","80ad62","7eab61"];var i;var start_dist=12;for(i=0;i<blur_colors.length;i++)
{var dist=start_dist+i*3;ctx.strokeStyle="#"+blur_colors[blur_colors.length-i-1];ctx.lineWidth=dist+1;x=40+dist;y=5+dist;w=2048-80-dist*2;h=120-dist*2;ctx.beginPath();_ip._gs(ctx,x,y,w,h,60-dist);ctx.stroke();}
ctx.strokeStyle="#FFFFFF";ctx.lineWidth=10;x=40;y=5;w=2048-80;h=120;ctx.beginPath();_ip._gs(ctx,x,y,w,h,61);ctx.stroke();layout.score=[];for(i=0;i<10;i++)
{x=148;h=52;y=405+i*h;w=1840;layout.score[i]={};layout.score[i].canvas=_ip._hh(layout.high,x,y,w,h-1);}
y=998;layout.score_outside_rank=_ip._hh(layout.high,x,y,w,h-1);w=_ip._gj['buttons'].ss['stop'][0][2];h=_ip._gj['buttons'].ss['stop'][0][3];{}
x=2048-64-w;y=137;_ip._hd(layout.high,x,y,w,h,'buttons',"stop","button_stop",_lr);w=_ip._gj['buttons'].ss['city'][0][2];h=_ip._gj['buttons'].ss['city'][0][3];x=2048-64-32-_ip._gj['buttons'].ss['stop'][0][2]-_ip._gj['buttons'].ss['city'][0][2];y=137;_ip._hd(layout.high,x,y,w,h,'buttons',"city","button_city",_lr);w=_ip._gj['buttons'].ss['continue'][0][2];h=_ip._gj['buttons'].ss['continue'][0][3];x=2048-60-w;y=_ip.height-h-60;_ip._hd(layout.high,x,y,w,h,'buttons',"continue","button_continue",_lr);}
function _ll(nr)
{nr=parseInt(nr);return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".");}
function _lm(nr)
{var i;for(i=0;i<new_game.cms_data.school.length;i++)
{if(new_game.cms_data.school[i].id==nr)
{return new_game.cms_data.school[i].label;}}
return"onbekende school"+nr;}
function _ln(nr)
{var city_names=["none","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg"];if(parseInt(nr)>=0&&parseInt(nr)<city_names.length)
{return city_names[nr];}else
{return"---"}}
function _lo(ctx,nr,naam,score,school,plaats)
{ctx.fillStyle="#FFFFFF";x=0;y=40;ctx.font=fontsz.highscores_small+"px "+fonts.body;ctx.textAlign="left";ctx.fillText(nr,x,y);x=90;y=40;ctx.font=fontsz.highscores_mid+"px "+fonts.head;ctx.textAlign="left";ctx.fillText(naam,x,y);var line_width=ctx.measureText(naam).width;ctx.beginPath();ctx.strokeStyle="#FFFFFF";ctx.lineWidth=2;ctx.moveTo(x,y+5);ctx.lineTo(x+line_width,y+5);ctx.stroke();x=704;y=40;ctx.font=fontsz.highscores_mid+"px "+fonts.head;ctx.textAlign="right";ctx.fillText(_ll(score),x,y);x=720;y=40;ctx.font=fontsz.highscores_small+"px "+fonts.body;ctx.textAlign="left";ctx.fillText("pnt",x,y);x=898;y=40;ctx.font=fontsz.highscores_small+"px "+fonts.body;ctx.textAlign="left";ctx.fillText(_lm(school),x,y);x=1412;y=40;ctx.font=fontsz.highscores_small+"px "+fonts.body;ctx.textAlign="left";ctx.fillText(_ln(plaats),x,y);}
function _lp()
{var i;for(i=0;i<10;i++)
{_ip._hk(layout.score[i].canvas);var ctx=layout.score[i].canvas.context;if(i<high.data.length)
_lo(ctx,(i+1),high.data[i].naam,high.data[i].punten,high.data[i].school,high.data[i].plaats);}
_ip._hk(layout.score_outside_rank);{}
if(high.rank!=-1)
{ctx=layout.score_outside_rank.context;_lo(ctx,(high.rank+1),user.data.naam,user.data.punten,user.data.school,user.data.plaats);}
var x,y,h;if(high.rank>9)
{_ip._eg(layout.score_outside_rank,true);x=0;y=960;_ip._fj(layout.own_score,x,y);h=52;x=148;y=405
for(i=0;i<10;i++)
{_ip._fj(layout.score[i].canvas,x,y);y=y+h;}}else
{_ip._eg(layout.score_outside_rank,false);h=52;x=148;y=405
for(i=0;i<10;i++)
{_ip._fj(layout.score[i].canvas,x,y);y=y+h;if((i+1)==high.rank)y=y+50;if(i==high.rank)
{{}
y=y+50;_ip._fj(layout.own_score,0,y-145);}}}
_ip._eg(layout.own_score,true);}
function _lq(nr)
{{}
high.selected_tab=nr;var i;for(i=0;i<3;i++)
{if(high.selected_tab==i)
{_ip._es(layout.tab[i],palet.green);}else
{_ip._es(layout.tab[i],palet.pale_green);}}
switch(high.selected_tab)
{case 1:high.label="school";high.id=user.data.school;break;case 0:high.label="plaats";high.id=user.data.plaats;break;default:high.label="all";high.id="all";}
high.rank=-1;high.data=empty_list;var i;for(i=0;i<10;i++)
{_ip._hk(layout.score[i].canvas);}
_ip._hk(layout.score_outside_rank);_ip._eg(layout.own_score,false);var data={};data.label=high.label;data.id=high.id;data.naam=user.data.naam;{}
_ip.getVars("get_highscores.php",data,_li,_lj);}
function _lr(label)
{switch(label)
{case"button_tab0":case"button_tab1":case"button_tab2":var nr=label.substr(10,1);_lq(parseInt(nr));break;case"button_continue":var nr=parseInt(user.data.progress);if(nr<quiz.questions.length)
{quiz.init();}else
{map.init();}
break;case"button_city":map.init();break;case"button_highscores":high.init();break;case"button_stop":start.init();break;default:{}}}
var ori_mm={};ori_mm.init=_ls;function _ls()
{layout={};var data={};data.page="orientation";data.stat="page";_ip.setVars("add_stat.php",data);{}
_ip.resizeFunction=_it;_ip._gp();layout.back=_ip._he();_ip._er(layout.back,"rotate_device");}