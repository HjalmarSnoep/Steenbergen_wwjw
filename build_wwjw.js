/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});
 /*--
 SnoepGames: snoepHybrid - init
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

/*---------------------OVERRIDE THESE----------------------------------------------*/
var Hybrid={}; // this will be the SINGULAR object that holds all, we will minify this layer to _H!
Hybrid.version="1.2.2"; // this version will center web apps and uses local Storage and have a singular object.!
// the .1 version changed something about the css.
// I don't find this a major version change, because I want to integrate the css anyway.
// the 1.2.2 version was created to be able to circumvent the leeching protect problems of 31-10-2014 (see mail with Maurice en Ruud) Css still not integrated, but first attempts made.

Hybrid.graphics_manifest = {};  // it's an object now, take care! This saves getting the refs.. You should define these yourself ALWAYS!!
Hybrid.audio_manifest = [];  // but just in case you don't we'll set this empty ones..
Hybrid.initPageFunction=null; // you need to set this, once everything is loaded, we'll go here!
Hybrid.loadingProgressFunction=null;// you don't need to set this, only if you want to give feedback about loading the manifests.
Hybrid.img_src_path = "img/"; // img path is where you put your images.
// create the hotspots and any other images we might always need HERE!
Hybrid.dataurls=[];
Hybrid.dataurls['hotspots']="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAMAAAAoyzS7AAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAAF0Uk5TAEDm2GYAAAAQSURBVHjaYmAAAAAA//8DAAACAAEkfyTxAAAAAElFTkSuQmCC";

/*-------------------------------------------------------------------------------------
 // GLOBAL VARS
----------------------------------------------------------------------------------------*/
// create internal objects.
Hybrid.f = 1; // page size = 1 means TheoreticalPageWidthxTheoreticalPageHeight! (0.5=400x0300)
Hybrid.capabilities = {}; // will be filled by first sweep!
Hybrid.platform = {}; // will be filled by first sweep!
Hybrid.switches={}; // we might ask the user about these in options.
Hybrid.pageInterval = 0;  // reference to the current loop of active page!

Hybrid.language=navigator.language; // use in localisation later!

Hybrid.img_preload = 0; // total of img files to be preloaded, always the whole manifest!


/* CONTSTANTS -----------------------------------------------------------------------------
*/
Hybrid.helplink="http://www.makinggames.org/nl/help/"; //algmeen!
Hybrid.supportlink="http://www.makinggames.org/nl/support/"; //add name of game or part behind..


/* methods -----------------------------------------------------------------------------
*/

/*-------------------------------------------------------------------------------------
 // CORE FUNCTIONS 
----------------------------------------------------------------------------------------*/
function _hybridInit(){

	Hybrid.allowAllDomains=true;// because of the pesky NTR server!

	// set Hybrid Stylesheet
	// before we do ANYthing..
	Hybrid.debug_session_id=new Date().getTime();
	// this function is called!
    Hybrid.setDebugEchoDiv($('#hybridDiv')); // WE SET this now.. if we erase the page to show loading, we need to RESET this!!

	// set some standard allowed and trusted domains
	
	Hybrid.debugmessage(_hybridDecodeString("4879627269642076")+Hybrid.version+" "+_hybridDecodeString("2d20496e697469616c6973696e67")); // prints Hybrid v1.2.0 - Initialising.
	Hybrid.debugmessage(_hybridDecodeString("a9207777772e736e6f65702e6174")); // writes copyright message!
	var ua=navigator.userAgent.toLowerCase();
	Hybrid.debugmessage("Raw UA: "+ua);

	_hybridInitMouseWheel(); // see input for details!
	
	//Hybrid.debugmessage("ENCODED: "+_hybridEncodeString("Hybrid v")); // writes copyright message!
	_hybridGetCapabilities(); // hidden function only (private if you will!)
   // we need to show the capabilities briefly on the initpage..
   // we also show a possibility there to do debug (if you have the password)
   // and a little branding.

   // here we do a top-domain and referer check!
	//Hybrid.debugmessage("encoded "+Hybrid.encodeString("ERROR: Referrer mismatch! This game has not been licensed to run on this site! Contact www.snoep.at to obtain the proper licenses."));
   if(!_hybridLeechProtect())
   {
	// someone is trying to leech, or I just forgot to set anything....
		Hybrid.showWarning("Referrer: '"+document.referrer+"'\n\n"+Hybrid.decodeString("4552524f523a205265666572726572206d69736d617463682120546869732067616d6520686173206e6f74206265656e206c6963656e73656420746f2072756e206f6e207468697320736974652120436f6e74616374207777772e736e6f65702e617420746f206f627461696e207468652070726f706572206c6963656e7365732e"));
		//Hybrid.throwError(Hybrid.decodeString("4552524f523a2052656665726572206d69736d617463682120546869732067616d6520686173206e6f74206265656e206c6963656e73656420746f2072756e206f6e207468697320736974652120436f6e74616374207777772e736e6f65702e617420746f206f627461696e207468652070726f706572206c6963656e7365732e"));
   }else
   {
		// we also want to be able to detect a set to home screen on ipad and maybe display a little add to home popup!
		// how to: https://www.youtube.com/watch?v=dJGLdjJGTwo
		// http://www.lynda.com/CSS-tutorials/Create-iPad-Web-App/98830-2.html?utm_medium=viral&utm_source=youtube&utm_campaign=videoupload-98830-0002
		// http://mobilewebbestpractices.com/resources/
		// http://www.lucidmeetings.com/blog/your-lucid-meetings-ipad-web-application-here
		// http://mobilewebbestpractices.com/resources/
		// http://cubiq.org/add-to-home-screen
	   _hybridGetPageScale(); // we only need to call this once to get f and support values!
	   // now we setup the context menu and handles to get it with both touch and mouse.
	   _hybridSetupContextMenu();// right click is non existent on touch devices.., so top left corner 50x50 works too now!
	   Hybrid.debugEchoDiv = false; // we don't have to echo any more we can get to the debug!!
		
	   Hybrid.erasePage(); 
		// todo: set a text displaying hybrid and version..
		
		// we might want to show the user something here as a default!!
		
		// we might want to show the user something here!
		//doPreload(); // will set up the preloading.
		//pageInterval=_hybridStartLoop(hybridLoadingLoop,200); // we update every fifth of a second !
	   
		_hybridDoPreload(); // will set up the preloading.
		Hybrid.startLoop(_hybridLoadingLoop,200); // we update every fifth of a second !
	}

};

// normal resizing!
$( window ).resize(function() {
		if(Hybrid.resizeTimeout !== false)
			clearTimeout(Hybrid.resizeTimeout);
			Hybrid.resizeTimeout = setTimeout(_hybridResizeFunction, 50); //200 is time in miliseconds
});  

// -----------------------------
//  looping
// -----------------------------
Hybrid.def_pageloop=-1;
Hybrid.def_pageloopFunction=null;
function _hybrid_hybridStartLoopHandler()
{
	Hybrid.def_pageloopFunction();
}
// public function to do loops
Hybrid.startLoop=_hybridStartLoop;
function _hybridStartLoop(func, interval)
{
	if(Hybrid.def_pageloop!=-1)
	{
		_hybridStopLoop();
	}
	Hybrid.def_pageloopFunction=func;
	Hybrid.def_pageloop=window.setInterval(_hybrid_hybridStartLoopHandler,interval);
}
Hybrid.stopLoop=_hybridStopLoop;
function _hybridStopLoop()
{
	if(Hybrid.def_pageloop==-1) return false;
	window.clearInterval(Hybrid.def_pageloop);
	Hybrid.def_pageloop=-1;
	Hybrid.def_pageloopFunction=null;
	return true;
} 
// -----------------------------
//  end of looping
// -----------------------------

// Platform / os / browser and version / capabilites sweep..
function _hybridGetCapabilities(){
  // start with some sniffing!!
  var nua=navigator.userAgent;
  var is_chrome = nua.indexOf('Chrome') > -1;
  var is_explorer = nua.indexOf('MSIE') > -1;
  var is_firefox = nua.indexOf('Firefox') > -1;
  var is_safari = nua.indexOf("Safari") > -1;
  var is_android = nua.indexOf("Android") > -1;
  var is_Opera = nua.indexOf("Presto") > -1;
  if(is_android==true && is_chrome==false) 
       Hybrid.showWarning("You are using Android Default Browser. For way better performance, please switch to Chrome.");
	   
  if ((is_chrome)&&(is_safari)) 
  {
   // somehow chrome sometimes identifies itself as being safari!
   is_safari=false;
  }
  // exception for ie 11
 if( !(window.ActiveXObject) && "ActiveXObject" in window) is_explorer=true;
  
  // report on these findings for debugging.
  Hybrid.platform.browser="unidentified";
  if(is_chrome) Hybrid.platform.browser="chrome";
  if(is_explorer) Hybrid.platform.browser="explorer";
  if(is_firefox) Hybrid.platform.browser="firefox";
  if(is_safari) Hybrid.platform.browser="safari";
  if(is_android) Hybrid.platform.browser="android";
  if(is_Opera) Hybrid.platform.browser="opera";

  // we also might want to be device specific..
  _hybridGetDevice(); // fills Hybrid.platform.device

  // and operating system specific..
  _hybridGetOS(); // fills Hybrid.platform.OS // operating system

  // show it in the default div stage object
  Hybrid.debugmessage('OS: '+Hybrid.platform.OS);
  Hybrid.debugmessage('device: '+Hybrid.platform.device);
  Hybrid.debugmessage('browser: '+Hybrid.platform.browser);

  // from now on it's capability sniffing with the above information to edit exceptions.
  _hybridTestForAudioSupport(); // comes from hybrid_AUDIO.js!
  
  Hybrid.debugmessage("Capabilities.sound="+Hybrid.capabilities.sound);
  Hybrid.debugmessage("Capabilities.audioContext="+Hybrid.capabilities.audioContext);
  Hybrid.debugmessage("Capabilities.audio_preload="+Hybrid.capabilities.audio_preload);
  
  Hybrid.capabilities.touchmode=_hybridIsTouchDevice();
  Hybrid.capabilities.maxtouches=_hybridGetMaxTouches();
  Hybrid.debugmessage("Capabilities.touch="+Hybrid.capabilities.touchmode);
  Hybrid.debugmessage("Capabilities.maxtouches="+Hybrid.capabilities.maxtouches);

  Hybrid.capabilities.canvas=_hybridIsCanvasSupported(); // resides in canvas helper functions!
  Hybrid.debugmessage("Capabilities.canvas="+Hybrid.capabilities.canvas);
  Hybrid.capabilities.tilt=_hybridHasTilt();
   
   //navigator.geolocation = [object Geolocation]
   //navigator.webkitPersistentStorage = [object DeprecatedStorageQuota]
   //navigator.webkitTemporaryStorage = [object DeprecatedStorageQuota]
   //navigator.doNotTrack = null
   //navigator.onLine = true
   //navigator.product = Gecko
   //navigator.appCodeName = Mozilla
   //navigator.userAgent = Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
   //navigator.platform = Win32
   //navigator.appVersion = 5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/34.0.1847.131 Safari/537.36
   //navigator.appName = Netscape
   //navigator.vendorSub = 
   //navigator.vendor = Google Inc.
   //navigator.productSub = 20030107
   //navigator.cookieEnabled = true
   //navigator.mimeTypes = [object MimeTypeArray]
   //navigator.plugins = [object PluginArray]
   //navigator.language = nl
   //navigator.javaEnabled = function javaEnabled() { [native code] }
   //navigator.getStorageUpdates = function getStorageUpdates() { [native code] }
   //navigator.vibrate = function vibrate() { [native code] }
   //navigator.webkitGetGamepads = function webkitGetGamepads() { [native code] }
   //navigator.webkitGetUserMedia = function webkitGetUserMedia() { [native code] }
   //navigator.registerProtocolHandler = function registerProtocolHandler() { [native code] }
   
   Hybrid.capabilities.keyboard=true;
   if(Hybrid.capabilities.maxtouches>0) Hybrid.capabilities.keyboard=false;
   // this is a bit rough on windows8, but there is currently no way to do this..
   
 };
 
 function _hybridGetOS(){
	Hybrid.platform.OS=navigator.platform;
	var ua=navigator.userAgent.toLowerCase();
	/*
   * Macs
   */
  if ((ua.indexOf("macintosh") !=-1) || (ua.indexOf("mac os x") !=-1) || (ua.indexOf("mac_powerpc") !=-1) ||
             (ua.indexOf("powerpc-apple") !=-1) || (ua.indexOf("mac_ppc") !=-1) || (ua.indexOf("darwin") !=-1)) 
			{
				Hybrid.platform.OS="Mac";
			 }

  /*
   * Windows
   */
	if ((ua.indexOf("win95") !=-1) || (ua.indexOf("windows 95") !=-1)) Hybrid.platform.OS="Windows (95)";
    if ((ua.indexOf("win 9x 4.90") !=-1)  || (ua.indexOf("windows me") !=-1)) Hybrid.platform.OS="Windows (Me)";
    if ((ua.indexOf("windows 2000") !=-1) || (ua.indexOf("windows nt 5.0") !=-1)) Hybrid.platform.OS="Windows (2000)";
    if ((ua.indexOf("windows nt 5.1") !=-1) || (ua.indexOf("windows xp") !=-1)) Hybrid.platform.OS="Windows (XP)";
    if (ua.indexOf("windows nt 5.2 x64") !=-1) Hybrid.platform.OS="Windows (XP 64-bit)";
    if (ua.indexOf("windows nt 5.2") !=-1) Hybrid.platform.OS="Windows (Server 2003)";
    if (ua.indexOf("windows nt 6.0") !=-1) Hybrid.platform.OS="Windows (Vista)";
    if (ua.indexOf("windows nt 6.1") !=-1) Hybrid.platform.OS="Windows (7)";
    if (ua.indexOf("windows nt 6.2") !=-1) Hybrid.platform.OS="Windows (8)";
    if ((ua.indexOf("windows nt 4.0") !=-1) || (ua.indexOf("winnt") !=-1) || (ua.indexOf("windows nt") !=-1))  Hybrid.platform.OS="Windows (NT)";
    if ((ua.indexOf("windows 98") !=-1) || (ua.indexOf("win98") !=-1))  Hybrid.platform.OS="Windows (98)";
    if (ua.indexOf("windows 3.1") !=-1) Hybrid.platform.OS="Windows (3.1)";
    if (ua.indexOf("microsoft windows") !=-1)Hybrid.platform.OS="Windows (?)";
 
   if (Hybrid.platform.device=="iPhone" || Hybrid.platform.device=="iPod" || Hybrid.platform.device=="iPad")
   {
		if(ua.match(/ OS 5_/i)) Hybrid.platform.OS="iOs5";
		if(ua.match(/ OS 6_/i)) Hybrid.platform.OS="iOs6";
		if(ua.match(/ OS 7_/i)) Hybrid.platform.OS="iOs7";
		if(ua.match(/ OS 8_/i)) Hybrid.platform.OS="iOs8";
   }
 };
 
 function _hybridGetDevice(){
	var ua=navigator.userAgent.toLowerCase();
   Hybrid.platform.device="unknown";
   // tentative sniff.
   if (ua.match(/windows/i)) Hybrid.platform.device="desktop";

   // device sniff. 
   if (ua.match(/iphone/i)) Hybrid.platform.device="iPhone";
   if (ua.match(/ipod/i)) Hybrid.platform.device="iPod";
   if (ua.match(/ipad/i)) Hybrid.platform.device="iPad";
   if (ua.match(/iPad/i)) Hybrid.platform.device="iPad"; // ipad ios 8!
   if (ua.match(/android/i)) Hybrid.platform.device="Android";
   if (ua.match(/blackberry/i)) Hybrid.platform.device="BlackBerry";
};


// Public function to check the native language (flash/js) for platform specific functionality.
Hybrid.getNativeLanguage=_hybridGetNativeLanguage;
function _hybridGetNativeLanguage(){return "js";};

// Puclib Function to allow creation of a app specific focus manager.
// default the loop will halt, but you might also want to stop audio playback on blur!
Hybrid.setFocusManager=_hybridSetFocusManager;
function _hybridSetFocusManager(pause,restart){
  $(window).blur(pause);
  $(window).focus(restart);
};
// Public Function to clear app specific focus manager.
Hybrid.clearFocusManager=_hybridClearFocusManager;
function _hybridClearFocusManager(){
  $(window).blur();
  $(window).focus();
};

// get any queryvars!
function _hybridGetQueryVars()
{
	Hybrid.query_vars={};
	if(location.href.indexOf("?")!=-1)
	{
		var pairs=location.href.split("?")[1].split("&");
		for(var all in pairs)
		{
			var p=pairs[all].split("=");
			//Hybrid.debugmessage("getting variables from querystring: "+p[0]+" = "+p[1]);
			Hybrid.query_vars[p[0]]=p[1];
		}
	}
}
_hybridGetQueryVars(); // must be a function block, or it might interfere with the minified namespace!!
// we hade an error here on Hybrid.setTextBoxEditable, because it wasn't a function block
// and it used _p, which was ALSO used as obfuscated function name for setTextBoxEditable!
		



// Public Function to set switches
Hybrid.setSwitch=_hybridSetSwitch;
function _hybridSetSwitch(labelname,value)
 {
  Hybrid.debugmessage("setSwitch: "+labelname+" to "+value);
  if(value=="1")
   Hybrid.switches[labelname]=true;
  else
   Hybrid.switches[labelname]=false;
 }
// Public Function to make all in page unselectable.
Hybrid.makePageUnselectable=_hybridMakePageUnselectable;
function _hybridMakePageUnselectable()
{
	Hybrid.debugmessage("makePageUnselectable()");
	_jQueryAddition_MakeUnselectable($(document));
	_jQueryAddition_MakeUnselectable($('body'));
	_jQueryAddition_MakeUnselectable($('html'));
}
Hybrid.makePageSelectable=_hybridMakePageSelectable;
function _hybridMakePageSelectable()
{
	Hybrid.debugmessage("warning: makePageSelectable()");
	_jQueryAddition_MakeSelectable($(document));
	_jQueryAddition_MakeSelectable($('body'));
	_jQueryAddition_MakeSelectable($('html'));
}

Hybrid.makeSelectable=_hybridMakeSelectable;
function _hybridMakeSelectable(h,tf)
{
	if(tf)
	{
		_jQueryAddition_MakeSelectable(h.jquery);
	}else
	{
		_jQueryAddition_MakeUnselectable(h.jquery);
	}
}
function _jQueryAddition_MakeUnselectable(jQuery_elements)
 {
	// on should be live according to 
  jQuery_elements.on('dragstart selectstart touchstart touchmove', _jQueryAdditionstopEvent);
	
  jQuery_elements.attr('unselectable','on')
   .css({'-moz-user-select':'-moz-none',
   '-moz-user-select':'none',
   '-o-user-select':'none',
   '-khtml-user-select':'none', /* you could also put this in a class */
   '-webkit-user-select':'none',/* and add the CSS class here instead */
   '-ms-user-select':'none',
   'user-select':'none',
   '-webkit-touch-callout':'none'
   });
 }
 function _jQueryAdditionstopEvent(event){
	event.preventDefault(); 
	event.stopPropagation();
	//event.cancelBubble=true; // this is for if you stop using jQuery !!
    //event.returnValue=false;
	 //return false; // this one is deprecated!
 }
 function _jQueryAddition_MakeSelectable(jQuery_elements)
 {
 Hybrid.debugmessage("warning element made selectable!");
 jQuery_elements.off('dragstart selectstart touchstart touchmove', _jQueryAdditionstopEvent);
  jQuery_elements.attr('unselectable','')
   .css({'-moz-user-select':'text',
   '-moz-user-select':'text',
   '-o-user-select':'text',
   '-khtml-user-select':'text', /* you could also put this in a class */
   '-webkit-user-select':'text',/* and add the CSS class here instead */
   '-ms-user-select':'text',
   'user-select':'text'
   });
 }
Hybrid.disablePageScrolling=_hybridDisablePageScrolling;
function _hybridDisablePageScrolling()
{
	$('html, body').on('touchmove', function(e)
	{ 
		 //prevent native touch activity like scrolling
		 e.stopPropagation(); 
		 e.preventDefault(); 
	});
};

 /*-------------------------------------------------------------------------------------
 // STANDARD PAGE FUNCTIONS
 ----------------------------------------------------------------------------------------*/ 
 $(document).ready(_hybridInit); /*--
 SnoepGames: snoepHybrid - debug
---*/

Hybrid.debug = false; // you can switch it on with the url switching!
Hybrid.internalDebugWindow = false; // you can switch it on with the menu
Hybrid.debugEchoDiv = false;
Hybrid.setDebugEchoDiv=_hybridSetDebugEchoDiv;


window.onerror=_hybridGlobalErrorListener;

var hybrid_debug_message_string="";
// debugmessage relays to console, but also to internal debug-window that you might use on a tablet.
Hybrid.debugmessage=hybrid_debugmessage;
Hybrid.debugmessages=0;
function hybrid_debugmessage(message){

	Hybrid.debugmessages++;
  if(typeof(top_debug)!="undefined")
  {
	  if(top_debug===true)
	  {
			var parentdebugwindow=window.parent.document.getElementById('debug'); 
			if(parentdebugwindow!=null)
			{
				parentdebugwindow.innerHTML+=message;
				parentdebugwindow.scrollTop = parentdebugwindow.scrollHeight;
			}
	  }
  }
  
  if(typeof(log_debug)!="undefined")
  {
	  if(log_debug===true)
	  {
			// log it to a name, we put in cookie, to get a session!
			//console.log("log to debug session: "+Hybrid.debug_session_id);
			var url = "debug_log.php";
			var data = {};
			data.debug_session_id=Hybrid.debug_session_id;
			data.event=message;
			Hybrid.setVars(url,data);
	  }
  }

  // if log it, then send to PHP!
  if(typeof console == "object")console.log(message);
  hybrid_debug_message_string+=message+"<br>";
  if(Hybrid.debugEchoDiv)
  {
	Hybrid.debugEchoDiv.append('<br>'+message);
  }
  if($("#internal_debug_window").length!=0){
	$("#internal_debug_window").html(hybrid_debug_message_string);
  }
};

Hybrid.throwError=hybrid_throwError;
function hybrid_throwError(message)
{
	hybrid_debugmessage(message);
	throw(message);
};


Hybrid.showWarning=_hybridShowWarning;
function _hybridShowWarning(message)
{
	window.alert(message);
};
// this function enables Chrome to pinpoint minified errors, also you get an alert for an error on iPad and stuff!
function _hybridGlobalErrorListener(errorMsg, url, lineNumber, column, errorObj) 
{
    alert('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' +  errorObj);
	hybrid_debugmessage('Error: ' + errorMsg + ' Script: ' + url + ' Line: ' + lineNumber
    + ' Column: ' + column + ' StackTrace: ' +  errorObj);
}

// allows debugmessages to appear (during loading)
function _hybridSetDebugEchoDiv(jqo)
{
	// get's a jquery object to echo to..
	Hybrid.debugEchoDiv=jqo;
}

function _hybridSwitchInternalDebug(value){
	if(value=="1"){
	   Hybrid.internalDebugWindow=true;
		// create a top div just below the menu
	   var html_string="";
	   html_string+="<div class='hybrid-menu' id='hybrid-debug'>";
	   html_string+="<hr><h1 id='hybrid-debug-title'>Hybrid Internal Debug Window</h1><ul><hr>";
	   html_string+="<p id='internal_debug_window' style='text-align: left; word-break:break-all; word-wrap: break-word; width:300px;  height:300px; overflow: auto;'></p>";
	   html_string+="</div>";
	   $(html_string).appendTo("body");
		$("#internal_debug_window").css("background-color","#ffffff");
		_jQueryAddition_MakeSelectable($("#internal_debug_window"));
		$("#internal_debug_window").html(hybrid_debug_message_string);
		 $('#hybrid-debug-title').mousedown(_hybridDebugMenu_dragmousedown);
	}else{
		$("#hybrid-debug").remove();
		Hybrid.internalDebugWindow=false;
	}
	 _hybridHideContextMenu(); // if you selected this option from this menu, it dissapears to show you the right context next time!
};

 function _hybridDebugMenu_dragmousedown(e){
	//Hybrid.debugmessage("start drag debug menu!");
    Hybrid.dragging = {};
    Hybrid.dragging.pageX0 = e.pageX;
    Hybrid.dragging.pageY0 = e.pageY;
    Hybrid.dragging.elem = $('#hybrid-debug');
    Hybrid.dragging.offset0 = $('#hybrid-debug').offset();
	// we need to do this for touch as well!!!
    function _hybridTempHandleDraggingForDebug(e){
        var left =  Hybrid.dragging.offset0.left + (e.pageX -  Hybrid.dragging.pageX0);
        var top =  Hybrid.dragging.offset0.top + (e.pageY -  Hybrid.dragging.pageY0);
        $( Hybrid.dragging.elem)
        .offset({top: top, left: left});
    }
    function _hybridTempHandleMouseUpForDebug(e){
        $('body').off('mousemove', _hybridTempHandleDraggingForDebug).off('mouseup', _hybridTempHandleMouseUpForDebug);
    }
    $('body').on('mouseup', _hybridTempHandleMouseUpForDebug).on('mousemove', _hybridTempHandleDraggingForDebug);
}

function _hybridImagePreloadFailed(e)
{
	var mes="Error occured while trying to load image "+Hybrid.currentImageIndex+".";
	Hybrid.debugmessage(mes);
	//_hybridReportProblem(mes); // you shouldn't do this, it relocates the user!
}
function _hybridAudioLoadError(e) 
{
	if(e)
	Hybrid.debugmessage("Error " + e.target.status + " occurred while trying to load audio.");
}

function  _hybridReportProblem(errormessage){
	// usually from context menu, but can be called in other places...
	//throw new Error(errormessage);
	Hybrid.debugmessage("_hybridReportProblem called..");
		if(typeof(Hybrid.app_id)!=="undefined")
	{
	// add supportlink to the message before you throw
		if(typeof(Hybrid.app_id)!=="undefined")
		{
			// something is very wrong with this somehow in the illusion_slenderman!
			location.href=Hybrid.supportlink+Hybrid.app_id;
			top.location.href=Hybrid.supportlink+Hybrid.app_id; // top doesn't always work, so try the other one first!
		}else
		{
			location.href=Hybrid.supportlink;
			top.location.href=Hybrid.supportlink;  // top doesn't always work, so try the other one first.
		}
	}

}
 /*--
 SnoepGames: snoepHybrid - audio
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
// initial values!
Hybrid.switches.sound = true;  // this will be set on user agent, that sucks, but that's just how it is right now.
Hybrid.switches.music = true;  // if we have a small sound on first touch, it is no longer necessary to distinguish between sound and music. 
Hybrid.audio_preloaded = 0; // progress counters!
Hybrid.nr_of_audio_files_to_preload = 0; // total of audio files to be preloaded, not always the whole manifest!

Hybrid.voice_dom=document.createElement("audio");


//Hybrid.audio_manifest['init_sound']={preload: true};// this is contained in the library itself it's a default.

function _hybridSwitchSound(value)
{
 if(value==false)
  {
	var all;
	for(all in Hybrid.audio_manifest)
	{
		// if loop is true it's probably music!
		if(Hybrid.audio_manifest[all].loop!=true)
		{
			Hybrid.stopSound(all);
		}
	}
  }
  Hybrid.setSwitch("sound",value);
  _hybridHideContextMenu(); // if you selected this option from this menu, it dissapears to show you the right context next time!
  // we need to also mute all sounds playing now if you selected that
}
function _hybridSwitchMusic(value)
{
  if(value==false)
  {
	Hybrid.debugmessage("muting all audio loops marked as music");
	var all;
	for(all in Hybrid.audio_manifest)
	{
		// if loop is true it's probably music!
		if(Hybrid.audio_manifest[all].music==true) // special thing, set by startmusicloop!
		{
			if(Hybrid.audio_manifest[all].started)
			{
				// keep the loop for restoring!
				Hybrid.muted_music_loop=all;
			}
			Hybrid.debugmessage(all+" loop? "+Hybrid.audio_manifest[all].loop);
			Hybrid.stopMusicLoop(all);
		}
	}
  }
  // now we set the switch, other wise, we can't stop them!
   Hybrid.setSwitch("music",value);
  _hybridHideContextMenu(); // if you selected this option from this menu, it dissapears to show you the right context next time!

  if(value==true)
  {
	Hybrid.debugmessage("restoring all audio loops marked as music");
	if(typeof(Hybrid.muted_music_loop)!=="undefined" && Hybrid.muted_music_loop!="")
	{
		Hybrid.startMusicLoop(Hybrid.muted_music_loop);
		Hybrid.muted_music_loop="";// clear it!
	}

	// restore the loop after setting the switch!!
	Hybrid.debugmessage("Audio Loop Keeper:"+Hybrid.audioLoopKeeper);
  }
  
}
// This function is private and called in hybrid_init in the _hybridGetCapabilities sweep!
function _hybridTestForAudioSupport(){

  // here we test for audio object creation support!!!
  var a = document.createElement('audio');
  // prefer mp3, but allow ogg for some!
  // assume the best situation and then eliminate
  Hybrid.capabilities.sound=true;
//  Hybrid.capabilities.sound_active=false; // this is for iPads and the like.
  Hybrid.capabilities.audio_preload=true;
  Hybrid.capabilities.music=true;
  Hybrid.switches.sound=true; // these can be overridden by a user, or for debugging!
  Hybrid.switches.music=true; // these can be overridden by a user, or for debugging!

  // try to fill it automatically!
  var ogg = !!(a.canPlayType && a.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, ''));
  if (ogg) Hybrid.capabilities.audiotype='ogg';
  // but prefer mp3, more support!
  Hybrid.debugmessage("audio checks browser:"+Hybrid.platform.browser+" so (Hybrid.platform.browser!='firefox') :"+(Hybrid.platform.browser!="firefox") );
  if(Hybrid.platform.browser!="firefox") // sorry firefox, but you suck at mp3, it is still necessary because of a bug in the NEW version (31.0!
  {
    
	  var mp3 = !!(a.canPlayType && a.canPlayType('audio/mpeg;').replace(/no/, ''));
	  if (mp3) Hybrid.capabilities.audiotype='mp3';
	  else
	  {
	   Hybrid.capabilities.audiotype="";
	  }
  }else
  {
  	Hybrid.debugmessage("no you can't play mp3 firefox!");
  }
  // now we test for full on webaudio support in all possibly available flavours
  // see article:http://chimera.labs.oreilly.com/books/1234000001552/ch01.html#s01_2
  // this also includes future implementations!
  var contextClass = (window.AudioContext ||  window.webkitAudioContext ||  window.mozAudioContext ||  window.oAudioContext ||  window.msAudioContext);
  if (contextClass) 
  {
    // Web Audio API is available.
	Hybrid.audioContextReference = new contextClass();
	Hybrid.capabilities.audioContext=true; // huzza,we can do a lot now!
	
  } else 
  {
	Hybrid.capabilities.audioContext=false;
  }
  // webaudio support
  
  //window.alert("Testversion!"+Hybrid.platform.device+","+Hybrid.platform.OS+","+Hybrid.platform.browser);

  switch(Hybrid.platform.browser)
  {
   case "firefox":
    Hybrid.capabilities.audiotype='ogg';
   break;
   case "chrome":
    if(Hybrid.capabilities.audioContext)
    {
     Hybrid.capabilities.audiotype='mp3';
     Hybrid.capabilities.sound=true;
     Hybrid.capabilities.audio_preload=true; // and we preload everything!!
     Hybrid.switches.sound=true;
     //debugmessage("CHROME, Hybrid.capabilities.audioContext=true; ");     
    }else
    {
     Hybrid.capabilities.audiotype='mp3';
     Hybrid.capabilities.sound=true;
     Hybrid.capabilities.audio_preload=true;
     Hybrid.switches.sound=true;
    }
   break;
   case "android":
    if(Hybrid.capabilities.audioContext)
    {
     Hybrid.capabilities.sound=true; // if there is no support forwebaudio, this is an old android and you are screwed!
     Hybrid.switches.sound=true;
     Hybrid.capabilities.audiotype="mp3"; // not ogg and not mp3!
     Hybrid.capabilities.audio_preload=true; // not ogg and not mp3!
     //debugmessage("ANDROID, Hybrid.capabilities.audioContext=true; ");     
    }else
    {
     Hybrid.capabilities.sound=false; // if there is no support forwebaudio, this is an old android and you are screwed!
     Hybrid.switches.sound=false;
     Hybrid.capabilities.audiotype="mp3"; // not ogg and not mp3!
     Hybrid.capabilities.audio_preload=false; // not ogg and not mp3!
     //debugmessage("ANDROID, Hybrid.capabilities.audioContext=false; ");     
    }
   break;
   case "safari":
   	
	if(Hybrid.platform.OS == 'Mac') 
	{
		Hybrid.showWarning("Safari on the Mac has a problem with webaudioapi. Fallback to limited audio. Try Chrome for better performance.");
		// this means we are on a mac on safari..
		// webaudio is not working there as a default!
		// that should work, but alas Mac is not a stickler for standards. This was tested with safari on Mariska's computer.
		// version follows.
		// so we fall back to non audioContext
		Hybrid.capabilities.audioContext=false; // shut it down and go for the fallback on MAC desktops!
	}
	// but this WORKS on iOs7 (iPad), so we need to make a manual check if we are on MAC or on iPad.
	if(Hybrid.platform.device == 'iPad') 
	{
		switch(Hybrid.platform.OS)
		{
			case "iOs5":
				Hybrid.capabilities.audioContext=false; 
			break;
			case "iOs6":
				Hybrid.capabilities.audioContext=true;  // we give it the benefit of the doubt..
			break;
			case "iOs7":
				Hybrid.capabilities.audioContext=true; 
			break;
			default:
				Hybrid.capabilities.audioContext=true; 
			break;
		}
	}

    if(Hybrid.capabilities.audioContext)
    {
     Hybrid.capabilities.sound=true;
     Hybrid.switches.sound=true;
     Hybrid.switches.music=true;
     Hybrid.capabilities.audiotype="mp3"; // mp3 should be supported from 3.1 
     Hybrid.capabilities.audio_preload=true; 
    }else
    {
  	 Hybrid.capabilities.audioContext=false; // we need to set it hard, or it will all fall to pieces on mac!
     Hybrid.capabilities.sound=true;
     Hybrid.switches.sound=false; // this seems to be safe, users can turn it back on, if they please!
     Hybrid.switches.music=true;
     Hybrid.capabilities.audiotype="mp3"; // not ogg and but mp3 should be supported! 
     Hybrid.capabilities.audio_preload=false; // not ogg and not mp3!
     Hybrid.debugmessage("We are on Safari so Hybrid.capabilities.sound=true, but no preload! Music on is default");
    }
   break;
  }
 }
 
 // loading functions
 
 // for more info: https://developer.mozilla.org/es/docs/XMLHttpRequest/Usar_XMLHttpRequest
 // http://chimera.labs.oreilly.com/books/1234000001552/ch01.html#s01_8
 function _hybridLoadAudioIntoContext(nr,url,setCallback)
 {
  var request = new XMLHttpRequest(); // if webaudio api available, so is this!
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';

  // Decode asynchronously
  request.onload = function() 
  { 
		Hybrid.debugmessage("Audio preloaded:"+nr);
		Hybrid.preload_message+="preloaded snd ac "+nr+"\n";
		Hybrid.audioContextReference.decodeAudioData(request.response, function(theBuffer){
		   Hybrid.audio_manifest[nr].buffer = theBuffer;
		   Hybrid.audio_manifest[nr].hasAudioContext = true;

		   // after decode, set the progress of loading (if necessary and wanted!)..
			if(setCallback)
			{
				if(Hybrid.audio_manifest[nr].loaded==false)
				{
					 Hybrid.audio_preloaded++;
					 Hybrid.audio_manifest[nr].loaded=true;
				}
				if ( Hybrid.audio_preloaded == Hybrid.nr_of_audio_files_to_preload) 
				{
					 Hybrid.debugmessage("all audio has been preloaded");
					 _hybridDonePreloading();  
					 return;
				}
				if(Hybrid.capabilities.audio_preload==false)
				{
					 // in theory this could be called more than once, so we have a watchvariable on allAudioLoaded..
					 Hybrid.debugmessage("skip rest because we have no audio preload support!");
					 _hybridDonePreloading();  // skip audio if no support!
					 return;
				}
			} // end of set Callback
		}, _hybridAudioLoadError); // end of decode audio callback function definition
  } // end of request onload function definition
  request.send();
 }
 function _hybridLoadAudioTag(url,setLoadHandler)
 {
  var audio = new Audio();
  audio.src = url;
  audio.preload = "auto";
  audio.vol = 1; // default!
  if(setLoadHandler==true)
  {
   $(audio).on("loadeddata", _hybridAudioFileLoadedHandler);  // jQuery checking
   $(audio).on("canplay canplaythrough", _hybridAudioFileLoadedHandler);  //  this will give you a million hits in Chrome
   // this seems to keep on firing
  }
  return audio;
 }
 
  // Audio preloader functions
 function _hybridAudioFileLoadedHandler()
 {
	Hybrid.audio_preloaded++;
//  if(audio_preload<=audio_to_preload)
//  {
//   debugmessage("AUDIO FILE "+audio_preload+"/"+audio_to_preload+" loaded" );
//   }
	if ( Hybrid.audio_preloaded == Hybrid.nr_of_audio_files_to_preload) 
	{
		Hybrid.debugmessage("all audio has been preloaded");
		_hybridDonePreloading();  
		return;
	}
	if(Hybrid.capabilities.audio_preload==false)
	{
		// in theory this could be called more than once, so we have a watchvariable on allAudioLoaded..
		Hybrid.debugmessage("skip rest because we have no audio preload support!");
		_hybridDonePreloading();  // skip audio if no support!
		return;
	}
 }
 // ---------------------------------
 // Music Loop functions! START
 // ---------------------------------
Hybrid.audioLoopKeeper="";
Hybrid.audioLoopBufferSource=-1;
Hybrid.musicLoopVolume=0.4; // this is a default value for all loops! you can change it with Hybrid.changeLoopVolume(loop_name, volume);
Hybrid.startMusicFailTryAgainSource="";
Hybrid.startMusicFailTimeOut=-1; // try again every two seconds, until it works!
  
Hybrid.startMusicLoop=_hybridStartMusicLoop;
Hybrid.stopMusicLoop=_hybridStopMusicLoop;

function _hybridStopMusicLoop(audio_id){
  if(audio_id=="") return; //this is for games, without music!
  if(Hybrid.switches.music)
  {
   if(Hybrid.capabilities.audioContext)
   {
		_hybridStopMusicLoopAudioContext(audio_id);
   }else
   {
		_hybridStopMusicLoopAudioTag(audio_id);
   }
  }
};

function _hybridStartMusicLoop(audio_id){
 if(audio_id=="") return; //this is for games, without music!
  if(Hybrid.switches.music)
  {
   if(Hybrid.capabilities.audioContext)
   {
		_hybridStartMusicLoopAudioContext(audio_id);
   }else
   {
		_hybridStartMusicLoopAudioTag(audio_id);
   }
  } 
};

 
function _hybridStartMusicLoopAudioContext(audio_id) {
   Hybrid.debugmessage("_hybridStartMusicLoopAudioContext for audio_id: "+audio_id+" - "+typeof(audio_id)+" source:"+Hybrid.startMusicFailTryAgainSource);
  if(typeof(audio_id)==="undefined" && Hybrid.startMusicFailTryAgainSource!="")
  {
   // we are probably retrying
   Hybrid.debugmessage("retrying for audio_id: "+Hybrid.startMusicFailTryAgainSource);
   audio_id=Hybrid.startMusicFailTryAgainSource;
   Hybrid.startMusicFailTimeOut=-1; // after all it's clear or this wouldn't fire
   //debugmessage(" probably a retry for "+audio_id);
  }
  var nr=audio_id;
  Hybrid.audioLoopKeeper=audio_id;
  if(typeof(Hybrid.audio_manifest[nr]) !== "undefined" && typeof(Hybrid.audio_manifest[nr].buffer) !== "undefined")
  {
		Hybrid.audio_manifest[nr].music=true;
		Hybrid.audio_manifest[nr].started=true;
		//debugmessage("set started for music loop:"+nr);
		if(1)//audioLoopBufferSource==-1) // theoretically works.
		{
			Hybrid.audioLoopBufferSource = Hybrid.audioContextReference.createBufferSource();
			// keep ref to stop it!
			Hybrid.audioLoopBufferSource.buffer = Hybrid.audio_manifest[nr].buffer;
			// set loop and volume!
			Hybrid.audioLoopBufferSource.loop=true;
			var gainNode = Hybrid.audioContextReference.createGain();
			// this fails on the Mac (Safari, chrome works fine), saying createGain is undefined and not a function
			// so if it's mac and safari, I'd say NO webaudio!
			
			// Connect the source to the gain node.
			Hybrid.audioLoopBufferSource.connect(gainNode);
			// Connect the gain node to the destination.
			gainNode.connect(Hybrid.audioContextReference.destination);
			gainNode.gain.value = Hybrid.musicLoopVolume;
			Hybrid.audioLoopBufferSource.start(0);
		}else
		{
			//debugmessage("buffer present, so just go:"+nr);
			Hybrid.audioLoopBufferSource.start(0);
		}
  }else
  {
	   //debugmessage(audio_id+" not loaded yet,let's try again in 2 secs..");
	   // this probably means, the preload didn't work yet..
	   // check if it's preloaded later and try again..
	   // trouble is now,we won't try that,it's just too damn risky!
	   Hybrid.startMusicFailTryAgainSource=audio_id;
	   Hybrid.debugmessage(audio_id+" buffer not ready yet, retry?");
	   if(Hybrid.startMusicFailTimeOut==-1)
	   {
			Hybrid.debugmessage(audio_id+" not ready yet, try again in 2000 ms");
			Hybrid.startMusicFailTimeOut=setTimeout(_hybridStartMusicLoopAudioContext,2000); // try again every two seconds, until it works!
		}
  }
 };
 function _hybridStartMusicLoopAudioTag(audio_id){
	var nr;
	if(audio_id=="") return; //this is for games, without music!
	if(Hybrid.audioLoopKeeper!=""){
		Hybrid.debugmessage("call stopMusicLoop first!");
		return;
	}
	Hybrid.audioLoopKeeper=audio_id;
	if(Hybrid.switches.music)
	{
		nr=audio_id;
		if(typeof(Hybrid.audio_manifest[nr]) !== "undefined")
		{
			// we need to start the music on the click!
			// if the page has embedded music, play it here!
			//music.play();
			var url="";
			if (Hybrid.capabilities.audiotype === 'ogg') {
				url="snd_ogg/"+nr+".ogg";
			} else if (Hybrid.capabilities.audiotype === 'mp3') { 
				url="snd_mp3/"+nr+".mp3";
			}
			if(url!='')
			{
				Hybrid.debugmessage("trying to start music file! '"+url+"' without preloading");
				Hybrid.audio_manifest[nr].au=new Audio(url); // IE works fine, but safari reports url is undefined!
				Hybrid.audio_manifest[nr].au.load();
				Hybrid.audio_manifest[nr].started=true;
				Hybrid.audio_manifest[nr].music=true;
				Hybrid.audio_manifest[nr].au.loop=Hybrid.audio_manifest[nr].loop;
				Hybrid.audio_manifest[nr].au.volume=Hybrid.musicLoopVolume; //audio_manifest[nr].vol; // standard soft for audio loops!
				
				Hybrid.audio_manifest[nr].au.play(); // safari for windows crashed here!!!
			}else
			{
				Hybrid.showWarning("Sorry, no sound capabilities found for this browser.");
				Hybrid.switches.music=false;
			}
		}
	}else
	{
		Hybrid.debugmessage("no music loop, because music is off!");
	}
 } 

 function _hybridStopMusicLoopAudioTag(audio_id){
   if(audio_id=="") return; //this is for games, without music!
   if(typeof(Hybrid.audio_manifest[audio_id])!=="undefined")
   {
    if(Hybrid.audio_manifest[audio_id].started)
    {
     Hybrid.audio_manifest[audio_id].au.pause();
     Hybrid.audio_manifest[audio_id].started=false;
     Hybrid.audioLoopKeeper="";
    }
   }
 };
 
function _hybridStopMusicLoopAudioContext(audio_id){
	

	if(Hybrid.startMusicFailTimeOut!=-1)
	{
		clearTimeout(Hybrid.startMusicFailTimeOut);
		Hybrid.startMusicFailTimeOut=-1;
	}
	if(typeof(Hybrid.audio_manifest[audio_id])==="undefined")
	{
		Hybrid.debugmessage("undefined audioloop:"+audio_id);
		return;
	}else
	{
		if(Hybrid.audio_manifest[audio_id].started)
		{
			if(Hybrid.audioLoopBufferSource)
			{
				Hybrid.audioLoopBufferSource.stop(0); // can give this a value, don't know what that is..
			}
			Hybrid.audioLoopKeeper="";
			Hybrid.audio_manifest[audio_id].started=false; // duh!
			Hybrid.audioLoopKeeper="";
		}
	}
 };

  // ---------------------------------
 // Music Loop functions! END
 // ---------------------------------
Hybrid.stopSound=_hybridStopSound;
function _hybridStopSound(nr)
{
	if(Hybrid.capabilities.sound==true && Hybrid.switches.sound!=false)
	{
		if(Hybrid.audio_manifest[nr] !== undefined)
		{
			if(Hybrid.audio_manifest[nr].started)
			{
				if(Hybrid.audio_manifest[nr].hasAudioContext)
				{
					if(Hybrid.audio_manifest[nr].buffer !== undefined)
					{
						Hybrid.audio_manifest[nr].source.stop(0);
						Hybrid.audio_manifest[nr].started=false;
					}else
					{
						Hybrid.debugmessage("sorry, no audio support via AudioContext of WebAudio.. Something went wrong..");
					}
				}else
				{
					// old fashioned way..
					if(typeof(Hybrid.audio_manifest[nr])!=="undefined")
					{
						 Hybrid.audio_manifest[nr].au.pause();
						 Hybrid.audio_manifest[nr].started=false;
					}
				}
			}
		}
	}
}
Hybrid.getSoundDuration=_hybridGetSoundDuration;
function _hybridGetSoundDuration(nr)
{
	if(Hybrid.capabilities.sound==true && Hybrid.switches.sound!=false)
	{
		//Hybrid.debugmessage("playSound "+nr);
		if(Hybrid.audio_manifest[nr] !== undefined)
		{
			if(Hybrid.audio_manifest[nr].hasAudioContext)
			{
				if(Hybrid.audio_manifest[nr].buffer !== undefined)
				{
					var source = Hybrid.audioContextReference.createBufferSource();
					return Hybrid.audio_manifest[nr].buffer.duration;
				}else
				{
					Hybrid.debugmessage("getSoundDuration, no audio support via AudioContext of WebAudio.. Something went wrong..");
					return -1;
				}
			}else
			{
				if(Hybrid.audio_manifest[nr].au !== undefined)
				{
					return Hybrid.audio_manifest[nr].au.duration;
				}else
				{
					Hybrid.debugmessage("getSoundDuration, no audio support");
				}
			}
		}
	}else
	{
		Hybrid.debugmessage("no sound support for this device")
	}
}
Hybrid.stopVoice=_hybridStopVoice;
function _hybridStopVoice()
{
	Hybrid.debugmessage("stop voice");
	Hybrid.voice_dom.pause();
}
Hybrid.playVoice=_hybridPlayVoice;
function _hybridPlayVoice(file)
{
	document.body.appendChild(Hybrid.voice_dom);
	Hybrid.debugmessage("start voice with:"+file);
	Hybrid.voice_dom.src="voice/"+file;
	Hybrid.voice_dom.play();
//	Hybrid.voice_dom=document.createElement("audio");
}
Hybrid.playSound=_hybridPlaySound;
function _hybridPlaySound(nr)
{
	if(Hybrid.capabilities.sound==true && Hybrid.switches.sound!=false)
	{
		//Hybrid.debugmessage("playSound "+nr);
		if(Hybrid.audio_manifest[nr] !== undefined)
		{
			if(Hybrid.audio_manifest[nr].hasAudioContext)
			{
				if(Hybrid.audio_manifest[nr].buffer !== undefined)
				{
					var source = Hybrid.audioContextReference.createBufferSource();
					source.buffer = Hybrid.audio_manifest[nr].buffer;
					source.connect(Hybrid.audioContextReference.destination);
					source.start(0);
					Hybrid.audio_manifest[nr].source=source; // keep it to be able to stop the sound!
					Hybrid.audio_manifest[nr].started=true; // keep it to be able to stop the sound!
					//debugmessage("start webaudio nr "+nr);
				}else
				{
					Hybrid.debugmessage("sorry, no audio support via AudioContext of WebAudio.. Something went wrong..");
				}
			}else
			{
				if(Hybrid.audio_manifest[nr].au !== undefined)
				{
					//debugmessage("I would now play sound "+nr)
					Hybrid.audio_manifest[nr].au.currentTime=0; // if you don't do this quick sounds will be lost!
					Hybrid.audio_manifest[nr].au.play(); // it seems to be that easy!*/
					Hybrid.audio_manifest[nr].started=true; // keep it to be able to stop the sound!
				}else
				{
					Hybrid.debugmessage("sorry, no audio support");
				}
			}
		}
	}else
	{
		Hybrid.debugmessage("no sound support for this device")
	}
}
  /*--
 SnoepGames: snoepHybrid - input
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
Hybrid.switches.support_multitouch = true; // see the touchStart handler for implementation, this is a switch rather than a support
Hybrid.input={}; // keep input stuff here!
Hybrid.input.mouse={}; // keep mouse/pointer stuff here!
Hybrid.input.rawmouse={}; // done by the hybrid context menu!

function _hybridIsTouchDevice(){
//	if(navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i)) return true;
	// this below is not enough in iOs7, obviously, so a little browser sniffing fixes that..
//  return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch;

	// this is the agnostic check from..
	// https://hacks.mozilla.org/2013/04/detecting-touch-its-the-why-not-the-how/
	// also works on ipad!
	if (('ontouchstart' in window) ||
		 (navigator.maxTouchPoints > 0) ||
		 (navigator.msMaxTouchPoints > 0)){
		  /* browser with either Touch Events of Pointer Events
			 running on touch-capable device */
			 return true;
		}
	return false; 
};
 // you can call Hybrid.capabilities.maxtouches, it's set in init! If that =0 you don't need to care about touch!
function _hybridGetMaxTouches(){

	if(Hybrid.capabilities.touchmode)
	{
		if(navigator.maxTouchPoints > 1)return navigator.maxTouchPoints;
		if(navigator.msMaxTouchPoints > 1)return navigator.msMaxTouchPoints; // windows 8 and the like
		return 1;
	}
	return 0;
 }

// get the mousewheel
function _hybridInitMouseWheel()
{
   $('body').bind('mousewheel', _hybridHandleMouseWheel);
};
function _hybridHandleMouseWheel(e)
{
	if(typeof(Hybrid.mouseWheelCallback)!=="undefined" && Hybrid.mouseWheelCallback!=null)
	{
		Hybrid.mouseWheelCallback(e.originalEvent.wheelDelta);
	}
};
 
 
 // BUTTONS Various kinds :)
Hybrid.standardButtonCallback=null;
function _hybridStandardiseButtonClick(e)
{
	// this can be called by a touch or a mouse event, it doesn't matter, we only use the label!
	_hybridRegisterMouse(e);
	
	e.stopPropagation();
	e.preventDefault();
//	if(e.handled !== true) 
//	{
		Hybrid.standardButtonCallback($(this).attr("label"));
//    } else 
//	{
//		return false;
//	}
}
function _hybridRegisterMouse(e)
{
// this works on jquery!! mouseevents to get the coordinates into Hybrid.input.mouse.
	if (e.type.match(/(up|end)$/i)) 
	{
		// these can't be trusted, because, they don't have mousecoords!
	}else
	{
		var o=_hybridUnifyMouseCoords({x:e.pageX,y:e.pageY});
		Hybrid.input.mouse.x=o.x;
		Hybrid.input.mouse.y=o.y;
		// might be a touch event!
		if(e.originalEvent)
		{
			if(e.originalEvent.touches)
			{
				if(e.originalEvent.touches[0])
				{
					var o=_hybridUnifyMouseCoords({x:e.originalEvent.touches[0].pageX,y:e.originalEvent.touches[0].pageY});
					Hybrid.input.mouse.x=o.x;
					Hybrid.input.mouse.y=o.y;
					//Hybrid.showWarning("mouse Registration iPad"+o.x+","+o.y);
				}
			}
		}
		if(e.touches) // this is provided by JQuery to handle windows 8, or so it seems!
		{
			var o=_hybridUnifyMouseCoords({x:e.touches[0].pageX,y:e.touches[0].pageY});
			Hybrid.input.mouse.x=o.x;
			Hybrid.input.mouse.y=o.y;
			//Hybrid.showWarning("mouse Registration windows8"+o.x+","+o.y);
		}
	}

}
 Hybrid.standardButtonOverCallback=null;
  function _hybridStandardiseButtonOver(e)
 {
	// this can be called by a touch or a mouse event, it doesn't matter, we only use the label!
	Hybrid.debugmessage("_hybridStandardiseButtonOver: "+$(this).attr("label"));
	_hybridRegisterMouse(e);
	
	e.stopPropagation();
	e.preventDefault();
	if(e.type==="mouseover")
	{
		Hybrid.standardButtonOverCallback($(this).attr("label"),"over");
		//Hybrid.debugmessage("overcallback over!");
	}else
	{
		Hybrid.standardButtonOverCallback($(this).attr("label"),"out");
		//Hybrid.debugmessage("overcallback out!");
	}
 }
Hybrid.saveButtonContext=_hybridSaveButtonContext; // this makes it possible to do popups with a new context and then restore on close!
Hybrid.restoreButtonContext=_hybridRestoreButtonContext;
function _hybridSaveButtonContext()
{
	Hybrid.savedButtonContext=Hybrid.standardButtonCallback;
	Hybrid.savedButtonContextOver=Hybrid.standardButtonOverCallback;
}
function _hybridRestoreButtonContext()
{
	Hybrid.standardButtonCallback=Hybrid.savedButtonContext;
	Hybrid.standardButtonOverCallback=Hybrid.savedButtonContextOver;
}
 
 
Hybrid.makeButton=_hybridMakeButton;
function _hybridMakeButton(box, label, cb, cb_over)
{
  if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridTextBox" && box.kind!="hybridCanvas" && box.kind!="hybridCssSprite")
  {
   Hybrid.debugmessage("makeButton reports: not the right kind of object: "+box.kind);
   return null;
  }
  // keep it in the Hybrid standardButtonCallback!
  Hybrid.standardButtonCallback=cb;
  /*if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	Hybrid.standardButtonCallback=cb;
  }else
  {
	Hybrid.debugmessage("_hybridMakeButton reports: May be a callback conflict!!");
  }*/
  // maybe the box is empty, then we add a transparent image.
  if(box.jquery.html()=="") box.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
  
  // if you are unsure if hotspots are being made, the next is a handy debug rule!
  var hotspot=box.jquery;
  hotspot.attr("label",label);
  
  //Hybrid.debugmessage("makeButton of: "+box.jquery.attr("id"));
  hotspot.on('click',_hybridStandardiseButtonClick);
  // click also handles single touch events correctly with jquery..
  
  
  if(Hybrid.capabilities.maxtouches>0)
  {
    hotspot.on('touchstart', _hybridStandardiseButtonClick);
    //hotspot.on('touchend', _hybridStandardiseButtonClick); // this results in double hits!
    hotspot.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }else
  {
	if(cb_over!=undefined)
	{
		Hybrid.standardButtonOverCallback=cb_over;
		// we also need to here about mouse in and out!
		hotspot.on('mouseover', _hybridStandardiseButtonOver);
		hotspot.on('mouseout', _hybridStandardiseButtonOver);
	}
  }
  
  hotspot.bind('dragstart',_jQueryAdditionstopEvent); // this ACTUALLY stops selecting the stuff.
};

function _hybridHasTilt()
{
	//Hybrid.showWarning("detect tilt");
	var c=false;
	if (window.DeviceOrientationEvent)c=true;
    if (window.DeviceMotionEvent)c=true;
	if (window.MozOrientationEvent)c=true; // not too sure about this one, bit dodgy in docs..
	return c;
}
Hybrid.listenToTilt=_hybridListenToTilt;
function _hybridListenToTilt(tf,uth)
{
    // source: 
    //http://stackoverflow.com/questions/4378435/how-to-access-accelerometer-gyroscope-data-from-javascript
	// example of:
	// http://isthisanearthquake.com
	
	if(Hybrid.capabilities.tilt==false)
	{
		Hybrid.debugmessage("Your device doesn't seem to be able to detect tilt."); // we should use priority here!
		// don't do anything after this...
	}else
	{
		Hybrid.debugmessage("Your device seems to be able to detect tilt.");
		if(tf)
		{
			Hybrid._userTiltHandler=uth;
			if (window.DeviceOrientationEvent) {
				window.addEventListener("deviceorientation", _hybridTiltListener1,true);
			} else if (window.DeviceMotionEvent) {
				window.addEventListener('devicemotion',_hybridTiltListener2, true);
			} else {
				window.addEventListener('MozOrientation',_hybridTiltListener3, true);
			}
		}else
		{
			if (window.DeviceOrientationEvent) {
				window.removeEventListener("deviceorientation", _hybridTiltListener1,true);
			} else if (window.DeviceMotionEvent) {
				window.removeEventListener("devicemotion", _hybridTiltListener2,true);
			} else {
				window.removeEventListener("MozOrientation", _hybridTiltListener3,true);
			}	
		}
	}
};
function _hybridTransformTilt(obj)
{
	var new_obj={};
	new_obj.h=obj.h;
	switch (window.orientation) {  
    case 0:  
        // Portrait 
		new_obj.x=-obj.x;
		new_obj.y=-obj.y;
        break; 
    case 180:  
        // Portrait (Upside-down)
		new_obj.x=-obj.x;
		new_obj.y=-obj.y;
        break; 
    case -90:  
    	new_obj.x=-obj.x;
		new_obj.y=-obj.y;
        // Landscape (Clockwise)
        break;  
  
    case 90:  
    	new_obj.x=obj.x;
		new_obj.y=obj.y;
        // Landscape  (Counterclockwise)
        break;
    }
	return new_obj;
}
// this is for the different methods of detecting Tilt!
function _hybridTiltListener1(event)
{
	//alpha= kompasrichting.
	// beta = long direction of device tilt (landscape == x (or -x) ) 
	// gamme : short direction of device tilt
	// alpha is not needed for us now, but we need to use
	// screen.orientation to get the right values!
	switch(top.orientation) 
	{
		case -90:
			Hybrid._userTiltHandler({x:-event.beta,y:event.gamma,h:1,a:event.alpha,t:top.orientation}); // this is the one used on iPad (and Chrome??)
		break;
		case 90:
			Hybrid._userTiltHandler({x:event.beta,y:-event.gamma,h:1,a:event.alpha,t:top.orientation}); // this is the one used on iPad (and Chrome??)
		break;
		case 0:
			Hybrid._userTiltHandler({x:event.gamma,y:event.beta,h:1,a:event.alpha,t:top.orientation}); // this is the one used on iPad (and Chrome??)
		break;
		case 180:
			Hybrid._userTiltHandler({x:-event.gamma,y:-event.beta,h:1,a:event.alpha,t:top.orientation}); // this is the one used on iPad (and Chrome??)
		break;
		default:
			Hybrid._userTiltHandler({x:event.beta,y:event.gamma,h:1,a:"top orientaiton not matched : "+event.alpha}); // this is the one used on iPad (and Chrome??)
	}
	// the -minus one depends on how you hold the ipad.. jeeez..
	// but x is always the same.
}
function _hybridTiltListener2(event)
{
	Hybrid._userTiltHandler({x:event.acceleration.x,y:event.acceleration.y,h:2,a:"none"});
}
function _hybridTiltListener3(event)
{
	Hybrid._userTiltHandler({x:orientation.x , y:orientation.y,h:3,a:"none"});
}
Hybrid.listenToKeys=_hybridListenToKeys;
function _hybridListenToKeys(tf,ukh)
{
	if(typeof(Hybrid.input)==="undefined")
		Hybrid.input={};

		
	Hybrid.input.keys=[];// no key down!
	Hybrid.input.key_modifiers={};// no modifiers down.
		
	if(tf)
	{
		/*
		 * this swallows backspace keys on any non-input element.
		 * stops backspace -> back
		 */
		var rx = /INPUT|SELECT|TEXTAREA/i;
		$(document).bind("keydown keypress", function(e){
			if( e.which == 8 ){ // 8 == backspace
				if(!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly ){
					e.preventDefault();
				}
			}
		});
		// works in chrome!
		// see discussion here:
		// http://stackoverflow.com/questions/1495219/how-can-i-prevent-the-backspace-key-from-navigating-back
		// end of backspace fix!
	
		$(document).keydown(_hybridKeyHandler);
		$(document).keyup(_hybridKeyHandler);
		Hybrid.debugmessage("Hybrid is now listening to Keys.");
		Hybrid._userKeyHandler=ukh;
	}
	else
	{
		$(document).unbind("keydown keypress keyup"); // this one does work in stead of the previous, which actually fired the event!
		
//		$(document).keydown(); // this fires the event, does NOT unbind it!
//		$(document).keyup();
		Hybrid._userKeyHandler=null;
		Hybrid.debugmessage("Hybrid stopped listening to Keys.");
	}
}
function _hybridKeyHandler(ev)
{
	//Hybrid.debugmessage("_hybridKeyHandler");
	var down=(ev.type=="keydown");
	if(Hybrid.input.keys[ev.which]!=down) // use which in stead of ev.keyCode because jqUERY normalised crossbrowser.
	{
		if(typeof(Hybrid._userKeyHandler)!="undefined")
		{
			Hybrid._userKeyHandler(ev.which,down);
		}
	}
	Hybrid.input.keys[ev.which]=down; // record it for checking later!
	ev.preventDefault; // this stops any key commands, like backspace=back..
	//Hybrid.debugmessage(ev.keyCode+ "." +down+" jQuery normalised: "+ev.which);
}


Hybrid.makeDraggable=_hybridMakeSingleDraggable;
function _hybridMakeSingleDraggable(o,down,up,drag,move)
{
	// move is an optional function, you can leave it open!
	
	// if it's a blank box, fill it with a transparent img
	if(o.jquery.html()=="")
	{
		o.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
	}
	
	_genericDrag.up=up; // there can be only ONE generic drag area per page.
	_genericDrag.down=down; // but usually that suffices..
	_genericDrag.drag=drag;
	_genericDrag.move=move;
	
	var hotspot=o.jquery;
	//Hybrid.debugmessage("make "+o.jquery.attr("id")+" draggable");

	// for windows 8 (tablet events to come through, we need to do the following.
	var htsp=document.getElementById(o.jquery.attr("id"));
	if (typeof htsp.style.msTouchAction != 'undefined')
		htsp.style.msTouchAction = "none";
		
	// windows 8
	if (window.navigator.msPointerEnabled) 
	{
	  // Pointer events are supported.
		htsp.addEventListener("MSPointerMove", _hybridGenericDragHandler, false);
		htsp.addEventListener("MSPointerDown", _hybridGenericDragHandler, false);
		htsp.addEventListener("MSPointerUp", _hybridGenericDragHandler, false);
		if(typeof(move)!=="undefined")
		{
			Hybrid.debugmessage("Draggable AND mousemove enabled (windows tablet)!");
			htsp.addEventListener("MSPointerOver", _hybridGenericDragHandler, false);
//			htsp.addEventListener("mousemove", _hybridGenericDragHandler, false); // this might to be necessary to get windos 8 to play along
		}
	  //  regular_dom.MSPointerOver
	   // regular_dom.MSPointerOut
	   // regular_dom.MSPointerHover
	}
	
	//jQueryAddition_MakeUnselectable(hotspot);
	// bind mouse and touch to this hotspot
	// maybe we really shouldn't do this..
	window.onmouseup=_hybridGenericDragHandler; // this is reported to even catches mouse up outside the draggable area window!
	htsp.onmousedown=_hybridGenericDragHandler;
	htsp.onmouseup=_hybridGenericDragHandler;
	htsp.onmousemove=_hybridGenericDragHandler;
	htsp.ontouchstart=_hybridGenericDragHandler;
	htsp.ontouchmove=_hybridGenericDragHandler;
	htsp.ontouchend=_hybridGenericDragHandler;
	htsp.ontouchcancel=_hybridGenericDragHandler;	
	// prevent default jquery behaviour on dragstart events to be able to handle gestures over hotspots and images yourself!
	hotspot.on('dragstart', function (e) {  e.preventDefault(); console.log("dragstart");});
}

// get offset_x,y recommended practice, for original event!.
// source http://stackoverflow.com/questions/8389156/what-substitute-should-we-use-for-layerx-layery-since-they-are-deprecated-in-web
function _hybridGetOffsetCoord(evt) 
{
  var el = evt.target,
      x = 0,
      y = 0;

  while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
    x += el.offsetLeft - el.scrollLeft;
    y += el.offsetTop - el.scrollTop;
    el = el.offsetParent;
  }

  x = evt.clientX - x;
  y = evt.clientY - y;

  return { x: x, y: y };
}


var _genericDrag={};
_genericDrag.lastXY={};
function _hybridGenericDragHandler(eventObject)
{
	//Hybrid.debugmessage("_hybridGenericDragHandler eventObject.type "+eventObject.type);
   // stop panning and zooming so we can draw
   if (eventObject.preventManipulation)
		eventObject.preventManipulation();
 
	// we are handling this event
	if (eventObject.preventDefault)
		eventObject.preventDefault();
		
 
	// if we have an array of changedTouches, use it, else create an array of one with our eventObject
	var touchPoints = (typeof eventObject.changedTouches != 'undefined') ? eventObject.changedTouches : [eventObject];
	for (var i = 0; i < touchPoints.length; ++i) 
	{
		var touchPoint = touchPoints[i];
		// pick up the unique touchPoint id if we have one or use 1 as the default
		var touchPointId = (typeof touchPoint.identifier != 'undefined') ? touchPoint.identifier : (typeof touchPoint.pointerId != 'undefined') ? touchPoint.pointerId : 1;
		
		if (eventObject.type.match(/(down|start)$/i)) {
			// process mousedown, MSPointerDown, and touchstart
			var crsr=_hybridUnifyMouseCoords({x:touchPoint.pageX,y:touchPoint.pageY});
			Hybrid.input.mouse.x=crsr.x;
			Hybrid.input.mouse.y=crsr.y;
			
			_genericDrag.lastXY[touchPointId] = { x: crsr.x, y: crsr.y };
			_genericDrag.down(touchPointId, crsr.x, crsr.y);
			_genericDrag.drag(touchPointId, crsr.x, crsr.y,0,0); // speed!
			
		}
		else if (eventObject.type.match(/move$/i)) 
		{
			// process mousemove, MSPointerMove, and touchmove
			if (_genericDrag.lastXY[touchPointId] && !(_genericDrag.lastXY[touchPointId].x == touchPoint.pageX && _genericDrag.lastXY[touchPointId].y == touchPoint.pageY)) 
			{
				var crsr=_hybridUnifyMouseCoords({x:touchPoint.pageX,y:touchPoint.pageY});
				Hybrid.input.mouse.x=crsr.x;
				Hybrid.input.mouse.y=crsr.y;
				var dx=crsr.x-_genericDrag.lastXY[touchPointId].x;
				var dy=crsr.y-_genericDrag.lastXY[touchPointId].y;
				_genericDrag.lastXY[touchPointId] = { x: crsr.x, y: crsr.y };
				_genericDrag.drag(touchPointId, crsr.x, crsr.y,dx,dy);
			}else
			{
				if(typeof(_genericDrag.move)!=="undefined")
				{
					var crsr=_hybridUnifyMouseCoords({x:eventObject.pageX,y:eventObject.pageY});
					_genericDrag.move(1, crsr.x, crsr.y);
				}
			}
		}
		else if (eventObject.type.match(/(up|end)$/i)) 
		{
			// process mouseup, MSPointerUp, and touchend
			var crsr=_hybridUnifyMouseCoords({x:touchPoint.pageX,y:touchPoint.pageY});
			if(_genericDrag.up!=null)
				_genericDrag.up(touchPointId, crsr.x, crsr.y);
			// remove the id!
			delete _genericDrag.lastXY[touchPointId];
		}
	}
}

Hybrid.createHotspot=_hybridCreateHotspot;
function _hybridCreateHotspot(o,handler)
{
	if(o.jquery.html()=="")
	{
//		o.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
		o.jquery.html("<img width='100%' height='100%' src='"+Hybrid.dataurls['hotspots']+"' />");
		// self contained hybrid!
		//
		
	}
	
	
	// if you are unsure if hotspots are being made, the next is a handy debug rule!
	// layer.jquery.html("<img src='../static/img/show_ho_old_tspots.png' width='100%' height='100%'>");
	var hotspot=o.jquery;
	Hybrid.debugmessage("makeHotSpot of: "+o.jquery.attr("id"));

	// for windows 8 (tablet events to come through, we need to do the
	// following.
	// to do that, we need to see if we even HAVE a document.getElementById
	var regular_dom=document.getElementById(o.jquery.attr("id"));
	if (typeof regular_dom.style.msTouchAction != 'undefined')
		regular_dom.style.msTouchAction = "none";
		
	
	//jQueryAddition_MakeUnselectable(hotspot);
	// bind mouse and touch to this hotspot
	$(window).mouseup(handler); // this is reported to even catches mouse up outside window!
	if(Hybrid.capabilities.touchmode)
	{
		//disablePageScrolling(); // no more pagescrolling for duration of game
		//alert("READY! in support.touchmode!");
		hotspot.on('touchstart touchend touchcancel touchmove', handler);
		$("body").on("touchend", handler); 
		$(document).on("touchend", handler); // this overrides the touchend tester on context menu!
		$(document).on("mouseup", handler); // this overrides the touchend tester on context menu!
		$('html').on("touchend", handler); 
		hotspot.mouseover(handler); 
		hotspot.mouseup(handler); 
		// this works on an iPad, but buttons will no longer work, so we need to fix that!
	}else
	{
		//alert("READY! in desktopmode!");
		// add handler to support clicking on background in user_agent_iOs!
		hotspot.mouseover(handler); // makes it possible to detect when you are outside a hotspot!
		hotspot.mouseleave(handler); // makes it possible to detect when you are outside a hotspot!
		hotspot.click(handler);
		hotspot.mousedown(handler);
		$("body").mouseup(handler); // should's this be $document and or $body, like touchend?
		$(document).mouseup(handler); // this even catches mouse up outside pane!
		$('html').mouseup(handler);
		hotspot.mousemove(handler);
	}
	// prevent default behaviour on dragstart events to be able to handle gestures over hotspots and images yourself!
	hotspot.on('dragstart', function (e) {  e.preventDefault(); console.log("dragstart");});
}

Hybrid.unifyMouseCoords=_hybridUnifyMouseCoords;
function _hybridUnifyMouseCoords(obj)
{
	//debugmessage("hybridUnifyMouseCoords from: "+obj.x+","+obj.y);
	obj.x=(obj.x-Hybrid.ox)/Hybrid.f;
	obj.y=(obj.y-Hybrid.oy)/Hybrid.f;
	//debugmessage("hybridUnifyMouseCoords to: "+obj.x+","+obj.y);
	return obj;
}


Hybrid.spriteButtonSelected=_hybridSpriteButtonSelected; //layer,x,y,w,h,image,anim,label,cb)
function _hybridSpriteButtonSelected(o,tf) 
{
	if(o.kind!="hybridSpriteButton")
	{
		Hybrid.debugmessage("spriteButtonSelected: sorry, you can only set selected of sprite buttons, not: "+l.kind);
		return;
	}
	if(typeof(Hybrid.graphics_manifest[o.image].ss[o.anim][2])==="undefined")
	{
		Hybrid.debugmessage("spriteButtonSelected: No third frame for sprite button"+l.kind);
		return;
	}
    var x1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][0];
    var y1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][1];
    var w1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][2];
    var h1=Hybrid.graphics_manifest[o.image].ss[o.anim][0][3];
    var x2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][0];
    var y2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][1];
    var w2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][2];
    var h2=Hybrid.graphics_manifest[o.image].ss[o.anim][2][3];
    var ii=Hybrid.graphics_manifest[o.image].img;
	// 
	if(tf==false)
	{
		o.context.drawImage(ii,x1,y1,w1,h1,0,0,w1,h1);// restore first image
	}else
	{
		o.context.drawImage(ii,x2,y2,w2,h2,0,0,w2,h2);// set third image as first image
	}
	// the ipad doesn't automatically release, so let's do that NOW and maybe break the active state...
	o.link_to_in.css("top","0");
}

Hybrid.createSpriteButton=_hybridSpriteButton; //layer,x,y,w,h,image,anim,label,cb)
function _hybridSpriteButton(l,x,y,w,h,image,anim,label,cb,cb_over) 
{
  if(l.kind!="hybridLayer" && l.kind!="hybridBox")
  {
   Hybrid.debugmessage("createImageButton reports: not the right kind of object: "+l.kind);
   return null;
  }
  Hybrid.standardButtonCallback=cb;
  /*if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
  }else
  {
	Hybrid.debugmessage("_hybridSpriteButton reports: May be a callback conflict!!");
  }*/
  var o={};
  o.id="hybridSpriteButton"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridSpriteButton";
  o.label=label;
//  o.callback=cb; // this is unneccessary
  o.container=Hybrid.createBox(l,x,y,w,h);
   o.container.jquery.attr("label",label);
  o.jquery=o.container.jquery; // must have this to be able to hide it.
//  o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+';" href="#"><span class="btn-content" style="padding: '+toPx((h-14)/2.2)+'; font-size: '+toPx(14)+';">'+tekst+'</span></a>');
  // create a canvas inside this l!
  
  var canvas_w,canvas_h;
  o.image=image;
  o.anim=anim;
  o.container.jquery.html('<div class="image_button" id="'+o.id+'_in" style="width: 100%; height: 200%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><canvas id="'+o.id+'_canv"></canvas></div>');
  o.link_to_in=$("#"+o.id+"_in");
  var html_string="<canvas id='"+o.id+"'></canvas>";
  o.canvas=$("#"+o.id+"_canv")[0];
  
  var hh=Hybrid.graphics_manifest[image];
  var x1=hh.ss[anim][0][0];
  var y1=hh.ss[anim][0][1];
  var w1=hh.ss[anim][0][2];
  var h1=hh.ss[anim][0][3];
  var x2=hh.ss[anim][1][0];
  var y2=hh.ss[anim][1][1];
  var w2=hh.ss[anim][1][2];
  var h2=hh.ss[anim][1][3];
  var ii=hh.img;
  canvas_w=w1; // frame 0 width (of max!)
  if(w2>canvas_w)canvas_w=w2; // frame 1 width
  canvas_h=h1+h2; // frame 0 height + frame 1 height
  
  o.canvas.width = canvas_w; 
  o.canvas.height = canvas_h; 
  $("#"+o.id+"_canv").width(toPx(w))
					 .height(toPx(h*2)); // css scale to be determined by containing div.
  o.context = o.canvas.getContext('2d'); 
  // draw the sprites now on that canvas..
  
  o.context.drawImage(ii,x1,y1,w1,h1,0,0,w1,h1);// i think this will set the first image nicely!
  o.context.drawImage(ii,x2,y2,w2,h2,0,h1,w2,h2);// i think this will set the first image nicely!
   
  o.container.jquery.on('click',_hybridStandardiseButtonClick);
  if(Hybrid.capabilities.maxtouches>0)
  {
    o.container.jquery.on('touchstart', _hybridStandardiseButtonClick);
	if(navigator.userAgent.indexOf("Android") == -1)
	{
		// we are NOT on android so make sure you bind all.
		// on android itself this gives you 3 events, where you'd expect one!
		
		// it seems the iPad has the same problem in iOS8. So we might need to
		// put the doubling in for lower versions, but for now this will work.
		
		//o.container.jquery.on('touchend', _hybridStandardiseButtonClick);
		//o.container.jquery.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
	}
  }else
  {
	  if(cb_over!=undefined)
  	{
			Hybrid.standardButtonOverCallback=cb_over;
			// we also need to here about mouse in and out!
			o.container.jquery.on('mouseover', _hybridStandardiseButtonOver);
			o.container.jquery.on('mouseout', _hybridStandardiseButtonOver);
		}
  }
  o.container.jquery.bind('dragstart',_jQueryAdditionstopEvent ); // this ACTUALLY stops selecting the stuff.
  // allthough calling hybridMakePageUnselectable does it for everything in the page, all at once.
  l.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 }


Hybrid.createImageButton=_hybridCreateImageButton;
function _hybridCreateImageButton(layer,x,y,w,h,image,label,cb)
{
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createImageButton reports: not the right kind of object: "+layer.kind);
   return null;
  }
  Hybrid.standardButtonCallback=cb;
  /*
  if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	Hybrid.standardButtonCallback=cb;
  }else
  {
	Hybrid.debugmessage("createImageButton reports: May be a callback conflict!!");
  }*/
  var o={};
  o.id="hybridImageButton"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridImageButton";
  o.label=label;
//  o.callback=cb; // this is unneccessary
  o.container=Hybrid.createBox(layer,x,y,w,h);
   o.container.jquery.attr("label",label);
  o.jquery=o.container.jquery; // must have this to be able to hide it.
//  o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+';" href="#"><span class="btn-content" style="padding: '+toPx((h-14)/2.2)+'; font-size: '+toPx(14)+';">'+tekst+'</span></a>');
  o.container.jquery.html('<div class="image_button" style="width: 100%; height: 200%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><img src="'+Hybrid.img_src_path+Hybrid.graphics_manifest[image].src+'" width="100%" height="100%"></div>');
  
  o.container.jquery.on('click',_hybridStandardiseButtonClick);
  if(Hybrid.capabilities.maxtouches>0)
  {
    o.container.jquery.on('touchstart', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchend', _hybridStandardiseButtonClick);
    o.container.jquery.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }
  o.container.jquery.bind('dragstart',_jQueryAdditionstopEvent ); // this ACTUALLY stops selecting the stuff.
  // allthough calling hybridMakePageUnselectable does it for everything in the page, all at once.
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 }
Hybrid.createTextButton=_hybridCreateStandardButton;
function _hybridCreateStandardButton(layer,x,y,w,h,tekst,label,cb,fontsz)
{
	// if it weren't for IE 9 and 10, we'd use border-image: css property..
	// This really sucks bigtime, but hey..
	if(fontsz==undefined)fontsz=16; // default.
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createStandardButton reports: not the right kind of object: "+layer.kind);
   return null;
  }
  Hybrid.standardButtonCallback=cb;// no more button callback warnings!
  
/*  if(Hybrid.standardButtonCallback==null || Hybrid.standardButtonCallback==cb)
  {
	
  }else
  {
	Hybrid.debugmessage("createStandardButton reports: May be a callback conflict!!");
  }*/

  var o={};
  o.id="hybridStandardButton"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridStandardButton";
  o.label=label;
//  o.callback=cb; // this is unneccessary
  o.container=Hybrid.createBox(layer,x,y,w+5,h+5);
   o.container.jquery.attr("label",label);
  o.jquery=o.container.jquery; // must have this to be able to hide it.
  o.container.jquery.html('<a class="btn" style="width: '+toPx(w)+'; height: '+toPx(h)+'; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; -o-user-select: none; user-select: none;" href="#"><span class="btn-content" unselectable="on" style="padding: auto; font-size: '+toPx(fontsz)+';">'+tekst+'</span></a>');

  o.container.jquery.on('click',_hybridStandardiseButtonClick);
  if(Hybrid.capabilities.maxtouches>0)
  {
    o.container.jquery.on('touchstart', _hybridStandardiseButtonClick); // this is no longer necessary!
    //o.container.jquery.on('touchend', _hybridStandardiseButtonClick);
    //o.container.jquery.on('touchmove', _hybridStandardiseButtonClick); // bind all to get better responses!
  }
  o.container.jquery.bind('dragstart',_jQueryAdditionstopEvent ); // this ACTUALLY stops selecting the stuff.
  // allthough calling hybridMakePageUnselectable does it for everything in the page, all at once.
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 } /*--
 SnoepGames: snoepHybrid - canvas
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
 
function _hybridIsCanvasSupported(){
 return !!document.createElement('canvas').getContext;
};

Hybrid.createCanvas=_hybridCreateCanvas;
function _hybridCreateCanvas(layer,x,y,w,h,optimize){
  if(typeof(optimize)==="undefined") optimize=true; // standard ON!
  var o={};
  o.id="canv"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  var html_string="<canvas id='"+o.id+"'></canvas>"
  $(html_string).appendTo(layer.jquery);
  
  o.jquery=$("#"+o.id);
  o.jquery.css("z-index",layer.dynamic_element_counter).css({left: toPx(x), top: toPx(y)});
  o.kind="hybridCanvas";
  
  // setup canvas for use
  o.canvas=$("#"+o.id)[0];
  o.w=w;
  o.h=h;
  o.start_w=w;
  o.start_h=h;
  if(optimize)
  {
	var real_w=w*Hybrid.f;
	var real_y=h*Hybrid.f;
	real_w=Math.round(real_w);
	real_y=Math.round(real_y);
  	o.canvas.width = real_w; 
	o.canvas.height = real_y; 
	  // now we have to scale the context to display correctly!
	 var ctx=o.canvas.getContext('2d');
	 ctx.scale(Hybrid.f,Hybrid.f);
  }else
  {
	  o.canvas.width = w; 
	  o.canvas.height = h; 
  }
  o.jquery.width(toPx(w))
    .height(toPx(h));
  o.context = o.canvas.getContext('2d'); 
  
  _jQueryAddition_MakeUnselectable(o.jquery); // make canvas unselectable as a default, else you get the copy thing on iPad and you can't cancel that..
  
  
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global counter.
  return o; // return the object!
};

Hybrid.createHiddenCanvas=_hybridCreateHiddenCanvas;
function _hybridCreateHiddenCanvas(x,y,w,h){
  var o={};
  o.id="canv"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridCanvas"; 
  // setup canvas for use
  o.canvas = document.createElement('canvas');
  o.w=w;
  o.h=h;
  o.canvas.width = w; 
  o.canvas.height = h; 
  o.context = o.canvas.getContext('2d'); 
  Hybrid.dynamic_element_counter++; // also increase the global counter.
  return o; // return the object!
};

// sprite functions!

// that's all nice, but you'll need to support it in Flash too, use a canvas!
//Hybrid.setBoxGradient=_hybridCSSGra;


// this is an attempt to fix a bug in chrome and ipad now, it's a bit slow though..
Hybrid.cleanCanvasAcc=_hybridCleanCanvasAcc;
function _hybridCleanCanvasAcc(o)
{
	// convert to data string and put it back, this clear accumulation buffer.
	/* basic image manipulation!!
	var output =  ctx.getImageData(0, 0, game.w, game.h);
    var outputData = output.data;
    var pixel = 0;
	var px,py;
    for (var y = 0; y < h; ++y) {
        for (var x = 0; x < w; ++x) {
				px=x+550*Math.sin(x/190*Math.sin(x/35)+y/200*Math.sin(y/37))+350*Math.sin(x/160*Math.sin(x/350)+y/20*Math.sin(y/370));
				py=y+550*Math.cos(y/200*Math.sin(y/33)+x/170*Math.sin(x/32));
                outputData[pixel]   = outputData[pixel]+2*Math.sin((px*py)/2000);
                outputData[++pixel] = outputData[pixel]+2*Math.sin((px*py)/2000);
                outputData[++pixel] = outputData[pixel]+2*Math.sin((py*py)/2000);
                outputData[++pixel] = outputData[pixel];
                ++pixel;
        }
    }
    ctx.putImageData(output, 0, 0);      */
	
//	var id=o.context.createImageData(o.w, o.h); // it's a pointer..
//	// now just put it back...
//	o.context.clearRect ( 0,0 ,o.w , o.h ); // so this doesn't do anything.
//	o.context.putImageData(id,o.w,o.h); returns a clear canvas.. damn!

// we need to physically create a NEW canvas, paint on that and return it.	
	
	//var id=o.context.createImageData(o.w, o.h); 
	// create a temporary invisible canvas to copy on to and from!!!
	
	// create a temp layer
/*	var temp=Hybrid.createLayer();
	var temp_canvas=Hybrid.createCanvas(temp,0,0 ,o.w , o.h ); // now we have new and clean data!
	temp_canvas.context.drawImage(o.canvas, 0, 0);
	Hybrid.clearCanvas(o);
	o.context.drawImage(temp_canvas.canvas, 0, 0); // somehow, drawing this back doesn't work, we need to isolate this problem..
	// NOW remember to remove the extra layer!!!
	Hybrid.removeElement(temp);*/
	
	// let's try the same thing, but without the hybrid.
/*	var canvas2 = document.createElement('canvas');
	canvas2.width = o.w;
	canvas2.height = o.h
	var context2 = canvas2.getContext('2d');
	context2.drawImage(o.canvas, 0, 0); // we copy the canvas onto this!
	
	// create something on the canvas
		context2.beginPath();
		context2.moveTo(0,0);
		context2.lineTo(o.w,o.h); // o.w might be faulty!
		context2.stroke();
	//render the buffered canvas onto the original canvas element
	Hybrid.clearCanvas(o);
	o.context.drawImage(canvas2, 0, 0);*/
	
	// my last approach, the data url
	// it works but does not clear up the issue..
	/*
	var temp=o.canvas.toDataURL();  
	Hybrid.clearCanvas(o);
	// now to draw temp back!
	var img = new Image;
	img.onload = function(){
	  o.context.drawImage(img,0,0); // Or at whatever offset you like
	};
	img.src = temp;*/
	Hybrid.debugmessage("no way found of clearing acc buffer. Use integerpixel rectangles to avoid accum-buildup.");
		
}

Hybrid.drawRoundedRect=_hybridRRH; // rounded rect helper function!
function _hybridRRH(ctx,x, y, w, h, radius)
{
//  Hybrid.debugmessage("Rounded rect, type: "+typeof(radius));
  if(typeof(radius)=="number")
  {
	// expand with the same value.
	var temp=radius;
	radius=[temp,temp,temp,temp];// four times the same corner width!
  }
 // Hybrid.debugmessage("Rounded rect, radiusses: "+radius);
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.moveTo(x+radius[0], y);
  ctx.lineTo(r-radius[1], y);
  if(radius[1]!=0)
	ctx.quadraticCurveTo(r, y, r, y+radius[1]);
  ctx.lineTo(r, y+h-radius[2]);
  if(radius[2]!=0)
	ctx.quadraticCurveTo(r, b, r-radius[2], b);
  ctx.lineTo(x+radius[3], b);
  if(radius[3]!=0)
	ctx.quadraticCurveTo(x, b, x, b-radius[3]);
  ctx.lineTo(x, y+radius[0]);
  if(radius[0]!=0)
	ctx.quadraticCurveTo(x, y, x+radius[0], y);
//  context.stroke();
//you do the stroking!
}

Hybrid.drawSprite=_hybridDrawBitmapSprite;

function _hybridDrawBitmapSprite(hbc,img_nr,label,x,y,f,r,sx,sy)
{
	//Hybrid.debugmessage("_hybridDrawBitmapSprite"+hbc+","+img_nr+","+label+","+x+","+y+","+f+","+r+","+sx+","+sy)

   if(r===undefined) r=0;
   if(sx===undefined) sx=1;
   if(sy===undefined) sy=sx;
   if(f===undefined) f=0;
   if(x===undefined) x=0;
   if(y===undefined) y=0;
   var bw,bh;
   var px,py;
   var rx,ry;
   var image;
   if(label===undefined)
   {
		Hybrid.debugmessage("WARNING: drawBitmapSprite: '"+img_nr+"' no label given");
		return;
   }
   if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
   {
		Hybrid.debugmessage("WARNING: '"+img_nr+"' not in image manifest");
		return;
   }
   if(!Hybrid.graphics_manifest[img_nr].kind=="sprite")
   {
		Hybrid.debugmessage("WARNING: "+img_nr+" not a sprite");
		return;
   }else
   {
    // get the numbers from the graphics_manifest and ss data for the sprite!!
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label])==="undefined")
	{
		Hybrid.debugmessage("WARNING: label "+label+" not a known frame for sprite "+img_nr);
		return;
	}
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f])==="undefined")
	{
		Hybrid.debugmessage("WARNING: frame "+f+" not a known frame for sprite "+img_nr+","+label);
		return;
	}
    px=Hybrid.graphics_manifest[img_nr].ss[label][f][0];
    py=Hybrid.graphics_manifest[img_nr].ss[label][f][1];
    bw=Hybrid.graphics_manifest[img_nr].ss[label][f][2];
    bh=Hybrid.graphics_manifest[img_nr].ss[label][f][3];
	// 4 is in easel.js a listing of the sheet!
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f][5])!=="undefined")
	    rx=Hybrid.graphics_manifest[img_nr].ss[label][f][5];
	else 
	    rx=bw/2;
	if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f][6])!=="undefined")
	    ry=Hybrid.graphics_manifest[img_nr].ss[label][f][6];
	else 
	    ry=bh/2;
    image=Hybrid.graphics_manifest[img_nr].img;
   }
   // before we screw with it up
   hbc.context.save(); 
   // move to the middle of where we want to draw our image
   // scale the HyBridCanvas.context;
   hbc.context.translate(x, y);
   // scale it
   hbc.context.scale(sx, sy);
   // rotate around that point, converting our 
   // angle from degrees to radians 
   hbc.context.rotate(r * Hybrid.TO_RADIANS);
   // draw it up and to the left by half the width
   // and height of the image 
   //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
   
   // for IE we need to check if it's source region  inside the bounds of the canvas????
   // http://stackoverflow.com/questions/19338032/canvas-indexsizeerror-index-or-size-is-negative-or-greater-than-the-allowed-a
   
   hbc.context.drawImage(image, px,py,bw,bh,-rx,-ry,bw,bh);
   // and restore the co-ords to how they were when we began
   hbc.context.restore(); 
}


Hybrid.clearCanvas=_hybridClearCanvas;
function _hybridClearCanvas(hbc)
{
	//Hybrid.debugmessage("clear Canvas: "+hbc.canvas.width+"x"+hbc.canvas.height+" f:"+Hybrid.f);
	// this goes wrong on a sized canvas?
	hbc.context.clearRect(0,0,hbc.w, hbc.h); 
	hbc.context.clearRect(0,0,hbc.start_w, hbc.start_h);  // this just in case the canvas is scaled afterwards!

}

Hybrid.drawImage=_hybridDrawImage;
function _hybridDrawImage(hbc,img_nr,x,y,r,s)
{
	//Hybrid.debugmessage("_hybridDrawImage: "+hbc+","+img_nr+","+x+","+y+","+r+","+s);
	if(r===undefined) r=0;
	if(s===undefined) s=1;
	if(x===undefined) x=0;
	if(y===undefined) y=0;
	var bw,bh;
	var sw,sh;
	var image;
	if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
	{
			Hybrid.debugmessage("WARNING: drawImage '"+img_nr+"' not in image manifest");
			return;
	}
    image=Hybrid.graphics_manifest[img_nr].img;
    // get the numbers from the graphics_manifest and ss data for the blocksprite!!
    bw=Hybrid.graphics_manifest[img_nr].w;
    bh=Hybrid.graphics_manifest[img_nr].h;
	// before we screw with it
	hbc.context.save(); 
	// move to the middle of where we want to draw our image
	// scale the hybrid canvas (hbc) context;
	hbc.context.translate(x, y);
	// scale it
	hbc.context.scale(s, s);
	// rotate around that point, converting our 
	// angle from degrees to radians 
	hbc.context.rotate(r * Hybrid.TO_RADIANS);
    // draw it up and to the left by half the width
    // and height of the image 
    //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
	bw=Math.floor(bw);
	bh=Math.floor(bh);
	bh=Math.floor(bh);
	//Hybrid.debugmessage("_hybridDrawImage2: "+hbc+","+img_nr+","+bw+","+bh);
	hbc.context.drawImage(image, 0,0,bw,bh,-bw/2,-bh/2,bw,bh);
	
	// if this gives you a JavaScript Failed to execute 'drawImage'
	// there is nothing wrong with your canvas, you just should preload your images. It's a wrong error message!
	
	// and restore the co-ords to how they were when we began
	hbc.context.restore(); 	
}
Hybrid.canvasToImageManifest=_hybridCanvasToImageManifest;
function _hybridCanvasToImageManifest(hbc,label)
{
	// check if exists if exists, replcae!
	if(typeof(Hybrid.graphics_manifest[label])==="undefined")
	{
		Hybrid.graphics_manifest[label]={};
		Hybrid.debugmessage("canvasToImageManifest created:"+Hybrid.graphics_manifest[label]);
		Hybrid.graphics_manifest[label].preload=true; 
		Hybrid.graphics_manifest[label].w=hbc.canvas.width; 
		Hybrid.graphics_manifest[label].h=hbc.canvas.height; 
		Hybrid.graphics_manifest[label].img=new Image();
		Hybrid.debugmessage("canvasToImageManifest canvas is: "+hbc.canvas);
		Hybrid.graphics_manifest[label].img.src=hbc.canvas.toDataURL();
		Hybrid.debugmessage("saved a new image to manifest:"+label);
	}else
	{
		Hybrid.debugmessage("canvasToImageManifest existing label :"+label+" replacing!");

	}
}

Hybrid.canvasToCanvas=_hybridCanvasToCanvas;
function _hybridCanvasToCanvas(hbc,hbc_source,x,y,r,s)
{
	if(r===undefined) r=0;
	if(s===undefined) s=1;
	if(x===undefined) x=0;
	if(y===undefined) y=0;
	var bw,bh;
	var sw,sh;
	var image;
	if(hbc_source.kind!=="hybridCanvas")
	{
			Hybrid.debugmessage("WARNING: canvasToCanvas '"+hbc_source.id+"' not a valid canvas");
			return;
	}
    image=hbc_source.canvas;
    // get the numbers from the canvas
    bw=hbc_source.w;
    bh=hbc_source.h;
	// before we screw with it
	hbc.context.save(); 
	// move to the middle of where we want to draw our image
	// scale the hybrid canvas (hbc) context;
	hbc.context.translate(x, y);
	// scale it
	hbc.context.scale(s, s);
	// rotate around that point, converting our 
	// angle from degrees to radians 
	hbc.context.rotate(r * Hybrid.TO_RADIANS);
    // draw it up and to the left by half the width
    // and height of the image 
    //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
	hbc.context.drawImage(image,0,0,bw,bh,-bw/2,-bh/2,bw,bh);
	// and restore the co-ords to how they were when we began
	hbc.context.restore(); 	
}

Hybrid.drawBlockSprite=_hybridDrawBitmapBlockSprite;

function _hybridDrawBitmapBlockSprite(hbc,img_nr,x,y,f,r,sx,sy)
{
   if(r===undefined) r=0;
   if(sx===undefined) sx=1;
   if(sy===undefined) sy=sx;
   if(f===undefined) f=0;
   if(x===undefined) x=0;
   if(y===undefined) y=0;
   var bw,bh;
   var sw,sh;
   var image;
   if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
   {
		Hybrid.debugmessage("WARNING: '"+img_nr+"' not in image manifest");
		return;
   }
   if(!Hybrid.graphics_manifest[img_nr].kind=="blocksprite")
   {
		Hybrid.debugmessage("WARNING: "+img_nr+" not a blocksprite");
		return;
   }else
   {
    // get the numbers from the graphics_manifest and ss data for the blocksprite!!
    bw=Hybrid.graphics_manifest[img_nr].ss.bw;
    bh=Hybrid.graphics_manifest[img_nr].ss.bh;
    sw=Hybrid.graphics_manifest[img_nr].ss.sw;
    sh=Hybrid.graphics_manifest[img_nr].ss.sh;
    image=Hybrid.graphics_manifest[img_nr].img;
   }
   // before we screw with it
   hbc.context.save(); 
   // move to the middle of where we want to draw our image
   // scale the hybrid canvas (hbc) context;
   hbc.context.translate(x, y);
   // scale it
   hbc.context.scale(sx, sy);
   // rotate around that point, converting our 
   // angle from degrees to radians 
   hbc.context.rotate(r * Hybrid.TO_RADIANS);
   // draw it up and to the left by half the width
   // and height of the image 
   //image,sx,sy,sw,sh,dx,dy,dw,dh) source dest!
   var px=(f%sw)*bw;
   var py=Math.floor(f/sw)*bh;
   hbc.context.drawImage(image, px,py,bw,bh,-bw/2,-bh/2,bw,bh);
   // and restore the co-ords to how they were when we began
   hbc.context.restore(); 
}
// end canvas sprite


// filters.
function _hybridFilterBlur( ctx, top_x, top_y, width, height, radius )
{
	if ( isNaN(radius) || radius < 1 ) return;
	radius |= 0;
	var context = ctx;
	var imageData;
	
	imageData = context.getImageData( top_x, top_y, width, height );
	var pixels = imageData.data;
	
	// for a blur, what we would do, is overlay the picture a number of times..
//	context.putImageData( imageData, top_x, top_y );
}

 /*--
 SnoepGames: snoepHybrid - canvas
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/
 
 // USE &#x2716; as standard close sign! (fat cross strak) Or you might try: &#x2715; (slim) or &#x2718; or &#x2717; (fat and slim cartoon)
 
 
function _hybridSetupContextMenu(){
  //_hybridMakePageUnselectable();

  if(Hybrid.contextMenu!=false)
  {
	  $(document).on("contextmenu", _hybridShowContextMenu);
	//  $(document).click(_hybridHideContextMenu); // not mousedown, because then the mouseup in the 
	  $(document).mouseup(_hybridCheckContextMenuClick); // this is for compatibility!
	  
	  // if we are in a touch environment..
	  
	 if (window.navigator.msPointerEnabled) 
	 {
			document.addEventListener("MSPointerMove", _hybridCheckContextMenuClick, false); // we need move, cause end hasn't got coordinates.
			document.addEventListener("MSPointerDown", _hybridCheckContextMenuClick, false);
			document.addEventListener("MSPointerUp", _hybridCheckContextMenuClick, false);
	 }
		
	  if(Hybrid.capabilities.touchmode)
	  {
		document.onmousedown=_hybridCheckContextMenuClick;
		document.onmouseup=_hybridCheckContextMenuClick;
		document.onmousemove=_hybridCheckContextMenuClick;
		document.ontouchstart=_hybridCheckContextMenuClick;
		document.ontouchmove=_hybridCheckContextMenuClick;
		document.ontouchend=_hybridCheckContextMenuClick;
		document.ontouchcancel=_hybridCheckContextMenuClick;	
	  }
  }

};

function _hybridCheckContextMenuClick(eventObject){

	var touchPoints = (typeof eventObject.changedTouches != 'undefined') ? eventObject.changedTouches : [eventObject];
	for (var i = 0; i < touchPoints.length; ++i) 
	{
		var touchPoint = touchPoints[i];
		var touchPointId = (typeof touchPoint.identifier != 'undefined') ? touchPoint.identifier : (typeof touchPoint.pointerId != 'undefined') ? touchPoint.pointerId : 1;
		
		if (eventObject.type.match(/(down|start)$/i)) {
			var crsr={x:touchPoint.pageX,y:touchPoint.pageY};
			Hybrid.input.rawmouse.x=crsr.x;
			Hybrid.input.rawmouse.y=crsr.y;
		}
		else if (eventObject.type.match(/move$/i)) 
		{
			// process mousemove, MSPointerMove, and touchmove
			if (_genericDrag.lastXY[touchPointId] && !(_genericDrag.lastXY[touchPointId].x == touchPoint.pageX && _genericDrag.lastXY[touchPointId].y == touchPoint.pageY)) 
			{
				var crsr={x:touchPoint.pageX,y:touchPoint.pageY};
				Hybrid.input.rawmouse.x=crsr.x;
				Hybrid.input.rawmouse.y=crsr.y;
			}else
			{
				if(typeof(_genericDrag.move)!=="undefined")
				{
					var crsr={x:eventObject.pageX,y:eventObject.pageY};
					Hybrid.input.rawmouse.x=crsr.x;
					Hybrid.input.rawmouse.y=crsr.y;
				}
			}
		}
		else if (eventObject.type.match(/(up|end)$/i)) 
		{
			var crsr={x:touchPoint.pageX,y:touchPoint.pageY};
			if(typeof(touchPoint.pageX)==="undefined")
			{
				//Hybrid.showWarning("touchpoint coordinates undefined");
				crsr={x:Hybrid.input.rawmouse.x,y:Hybrid.input.rawmouse.y};
			}
			//Hybrid.showWarning("up on: "+crsr.x+","+crsr.y);
			// remove the id!
		
			// this interferes with functioning of wwjw, since this is the version I use...
			// I just fix it here.
			if(crsr.x<50 && crsr.y<50)
			{
				//_hybridShowContextMenu({type:"other",pageX:crsr.x,pageY:crsr.y}); // make sure it opens on the right spot!
			}
		}
	}
	return;
	/*********************************/
	/*********************************/
	/*********************************/
	/*********************************/
	/*********************************/
	/*********************************/

};

function _hybridHideContextMenu(event){ 
 $("#context-menu").remove();
};
function _hybridShowContextMenu(event) 
 { 
 // bind to right click by jQuery..
 // in the case of a touch platform (so no right mouse), we might want to set up a listenener and check for a right corner click or something..
  
  if(event.stopPropagation) event.stopPropagation(); // it's usually some kind of user event!
  if(event.preventDefault) event.preventDefault();
  
  //Hybrid.debugmessage("Show the context menu!"+event.type);
  var top_window=100,left_window=100;
  switch(event.type)
  {
	case "mouseup":
		left_window=event.pageX-160;
		top_window=event.pageY-75;
	break;
	case "contextmenu":
		left_window=event.pageX-160;
		top_window=event.pageY-75;
	break;
   }
   if(left_window<0) left_window=0;
   if(top_window<0) top_window=0;
  
  if($("#context-menu").length == 0 )
  {
	// this hybrid menu is NOT working on iPad..
	// use the default Hybrid popup to make it work, please!
   var html_string="";
   html_string+="<div class='hybrid-menu' id='context-menu'>";
   //Hybrid.debugmessage("encoded: "+Hybrid.encodeString("Hybrid Game engine v")); 
   
   html_string+="<hr>";
   html_string+="<h1 id='context-menu-title' style='cursor:default;'><table><tr><td> &nbsp; "+Hybrid.decodeString("4879627269642047616d6520656e67696e652076")+Hybrid.version+" &nbsp; </td><td>";
   html_string+="<ul><li onclick='_hybridHideContextMenu(0);'><a href='javascript: _hybridHideContextMenu();' title='Sluiten'>X</a></li><ul></td></tr></table></h1>";
	// we should insert a close button here!   
   html_string+="<ul><li><li><h2>Opties</h2></li>";
   if(Hybrid.switches.sound)
   {
    html_string+="<li><a href='javascript: _hybridSwitchSound(0);' onclick='_hybridSwitchSound(0);' title='Geluidseffecten uit'>&#8738;<b>&#9587;</b>  Geluid uit</a></li>";
   }else
   {
    html_string+="<li><a href='javascript: _hybridSwitchSound(1);'  onclick='_hybridSwitchSound(1);' title='Geluidseffecten aan'>&#8738; Geluid aan</a></li>";
   }
   if(Hybrid.switches.music)
   {
    html_string+="<li><a href='javascript: _hybridSwitchMusic(0);' onclick='_hybridSwitchMusic(0);' title='Muziek uit'>&#9836;<b>&#9587;</b>  Muziek uit</a></li>";
   }else
   {
    html_string+="<li><a href='javascript: _hybridSwitchMusic(1);' onclick='_hybridSwitchMusic(1);' title='Muziek aan'>&#9836; Muziek aan</a></li>";
   }
   if(Hybrid.internalDebugWindow)
   {
    html_string+="<li><a onclick='_hybridSwitchInternalDebug(0);' title='Debug uit'>Debug uit</a></li>";
   }else
   {
    html_string+="<li><a onclick='_hybridSwitchInternalDebug(1);' title='Debug aan'>Debug aan</a></li>";
   }
   html_string+="<li><a href='javascript: _hybridReportProblem();' title='Debug aan'>Meld een probleem</a></li>";
   html_string+="<li><i>...</i></li>";
   var str=Hybrid.platform.browser;
   if(Hybrid.platform.browser=="unidentified") str="-";
   html_string+="<li>"+Hybrid.platform.device+", "+Hybrid.platform.OS+" "+str+"<h2>GameEngine + Audio</h2></li><li><a href='http://www.snoep.at/games/?language=nl' target=_top title='HTML5 gameEngine by www.SnoepGames.nl'>&copy; 2014 SnoepGames</a></li>";
   if(typeof(Hybrid.copyright_url)!=="undefined" && typeof(Hybrid.copyright_name)!=="undefined")
   {
	// show client copyright..
	html_string+="<li><h2>Edition copyright</h2></li><li><a href='"+Hybrid.copyright_url+"' target=_top title='copyright client'>&copy; 2014 "+Hybrid.copyright_name+"</a></li>";
	
   }
   html_string+="<li><hr></li>";
   html_string+="</ul></div>";
   // might be a touch event, a mouse event or a NON-event.
   // determin the right place to show the menu!
  
   
   $(html_string)
    .appendTo("body")
    .css({top: top_window + "px", left: left_window + "px"});
    //Hybrid.debugmessage("Show the context menu!"+event.type);

	
   $('#context-menu-title').mousedown(_hybridContextMenu_dragmousedown);
  }else
  {
	// we repeated the creation event, so destroy it!
    // Hybrid.debugmessage("destroy context menu!"+event.type);
	 _hybridHideContextMenu();
	 // old code
     // just show and set the position!
     //$("div.context-menu").css({top: top_window + "px", left: left_window + "px"});
     //$("div.context-menu").toggle();
  }
 }
 
 function _hybridContextMenu_dragmousedown(e){
	Hybrid.debugmessage("start drag context menu!");
    Hybrid.dragging = {};
    Hybrid.dragging.pageX0 = e.pageX;
    Hybrid.dragging.pageY0 = e.pageY;
    Hybrid.dragging.elem = $('#context-menu');
    Hybrid.dragging.offset0 = $('#context-menu').offset();
	// we need to do this for touch as well!!!
    function _hybridTempHandleDragging(e){
        var left =  Hybrid.dragging.offset0.left + (e.pageX -  Hybrid.dragging.pageX0);
        var top =  Hybrid.dragging.offset0.top + (e.pageY -  Hybrid.dragging.pageY0);
        $( Hybrid.dragging.elem)
        .offset({top: top, left: left});
    }
    function _hybridTempHandleMouseUp(e){
        $('body').off('mousemove', _hybridTempHandleDragging).off('mouseup', _hybridTempHandleMouseUp);
    }
    $('body').on('mouseup', _hybridTempHandleMouseUp).on('mousemove', _hybridTempHandleDragging);
}
 /*--
 SnoepGames: snoepHybrid - math
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

 /*-------------------------------------------------------------------------------------
 // Math constants
 ----------------------------------------------------------------------------------------*/

Hybrid.TO_RADIANS = Math.PI/180; 
Hybrid.TO_DEG = 180/Math.PI; 
Hybrid.PI2 = Math.PI*2; 
Hybrid.Math={};
 /*-------------------------------------------------------------------------------------
 // GENERIC AND HELPER TYPE FUNCTIONS
 ----------------------------------------------------------------------------------------*/
// cheap, seeded, random number generation!
Hybrid.random_seed=14;
Hybrid.random_nrs_asked=0;
 
 Hybrid.Math.sign=_hybrid_sign;
 function _hybrid_sign(a)
 {
	if(a<0) return -1;
	if(a>0) return 1;
	return 0;
 }

// a function to deep copy any object! 
 Hybrid.Math.cloneObject=_hybridCloneObject;
 function _hybridCloneObject(destination, source) 
 {
    for (var property in source) {
         if (typeof source[property] === "object" && source[property] !== null && destination[property]) { 
            clone(destination[property], source[property]);
        } else {
            destination[property] = source[property];
        }
    }
}; 
 
 Hybrid.Math.checkNestedExistence=_hybridCheckNested;
 function _hybridCheckNested(obj /*, level1, level2, ... levelN*/) {
  var args = Array.prototype.slice.call(arguments, 1);

  for (var i = 0; i < args.length; i++) {
    if (!obj || !obj.hasOwnProperty(args[i])) {
      return false;
    }
    obj = obj[args[i]];
  }
  return true;
}

 
 Hybrid.sort_shuffle=_hybrid_hussle;
  function _hybrid_hussle(a,b)
 {
	if(Math.random()<0.5) return-1;
	else return 1;
 }
 
Hybrid.localToGlobal=_hybridLocalToGlobal;

function _hybridLocalToGlobal(ax,x,y)
{
	var p={};
	if(typeof(ax.sx)==="undefined")
	{
		if(typeof(ax.s)!=="undefined")
		{
			ax.sx=ax.s;
			ax.sy=ax.s;
		}else
		{
			ax.sx=1;
			ax.sy=1;
		}
	}
	var r=ax.r*Hybrid.TO_RADIANS;
	p.x=ax.x+ax.sx*( x*Math.cos(r) - y*Math.sin(r) );
	p.y=ax.y+ax.sy*( x*Math.sin(r) + y*Math.cos(r) );
	return p;
}

 
Hybrid.seededRandomInt=_hybridSeededRandomInt;
function _hybridSeededRandomInt(){
	var r1=(Hybrid.random_seed+197)%2048+(Hybrid.random_nrs_asked); // primes and powers of two
	var r2=(Hybrid.random_seed+709)%1024+Math.floor(Hybrid.random_nrs_asked/2+15*Math.cos(r1));;
	var r3=(Hybrid.random_seed+2239)%512+Math.floor(Hybrid.random_nrs_asked/2+15*Math.sin(r2));
	var rand=(r1+r2+r3)%1000;
	Hybrid.random_seed+=(rand+r3)%(r1+r2);
	Hybrid.random_seed+=r3+r2;
	Hybrid.random_nrs_asked++;
	if(Hybrid.random_nrs_asked>15000) Hybrid.random_nrs_asked=0;
	return rand;
};
Hybrid.seedRandomInt=_hybridSeedRandomInt;
function _hybridSeedRandomInt(nr){
	Hybrid.random_seed=Math.floor(nr);
	Hybrid.random_nrs_asked=Math.floor(nr);
 	//debugmessage("seed random:"+Hybrid.random_seed);
 };
 Hybrid.stringToNumber=_hybridStringToNumber;
function _hybridStringToNumber(str){
	str=str.toLowerCase();
	str=str.replace(/[^a-z]/gi,'');// only alpha!
	var nr=0;
	var i;
	for(i=0;i<str.length;i+=3)
	{
		Hybrid.debugmessage(str.charAt(i)+"->"+str.charCodeAt(i));
		nr+=(str.charCodeAt(i)-96)*i; // a == 97
	}
 	return nr;
 };
  /*--
 SnoepGames: snoepHybrid - layout
 V1.2.0 
---*/
 
Hybrid.resizeTimeout=false;
function _hybridGetPageScale()
{
 // this fills the data with information about the page and user-agent.
  //debugmessage("getPageScale!");
  // first display the content in the right size and place!
  // take the div height, not the window height.
  var wh,ww,f;
  ww=$(window).innerWidth();
  wh=$(window).innerHeight();
  if(!Hybrid.width)Hybrid.width=800; // default square!! for those times there hasn't been an init!
  if(!Hybrid.height)Hybrid.height=800;
  if(!Hybrid.stageAlign)Hybrid.stageAlign="center";// possible values are center and top-left
  if(!Hybrid.stageScale)Hybrid.stageScale="lineair"; // possible values are responsive ,lineair, responsive width,
  // android gives us the wrong innerHeight, so..
  if(Hybrid.platform.browser=="android")
  {
	//fixed innerheight bug on android!");
	wh=$(window).outerHeight();
  }
  // Ios7 has a little bug (confirmed) in landscape, where the last 20 pixels disappear..
  // http://stackoverflow.com/questions/19012135/ios-7-ipad-safari-landscape-innerheight-outerheight-layout-issue
  // if(Hybrid.platform.OS=="iOs7")
  // {
  //  this is confirmed on iPad, height is a bit too big!
  //  window.alert(ww+"x"+wh);
  //  wh-=1;
  // }
  // we now KNOW the right window-size.
  if(Hybrid.platform.OS=="iOs7")
  {
	// this is a true BUG, bit only of window in portrait..
	// there is no easy work around, it needs to be in the page around this!
	// it was never fixed until iOs8!
	// we must fix this in the iFrame, because this would only be true for full-screen stuff!
//	if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) 
//	{
//		// if we are in web mode!
//		wh-=20;
//		// we set the offset to 20 as well, or we get a balk on the bottom!
//	}
  }
  
  Hybrid.debugmessage("stageScale:"+Hybrid.stageScale);
  switch(Hybrid.stageScale)
  {
	case "lineair":
		  var fx=ww/Hybrid.width;
		  var fy=wh/Hybrid.height;
		   
		  Hybrid.debugmessage("Window width: "+ww+", hybrid width: "+Hybrid.width+" factor: "+Math.floor(fx*100)+"%");
		  Hybrid.debugmessage("Window height: "+wh+", hybrid height: "+Hybrid.height+" factor: "+Math.floor(fy*100)+"%");
		   
		  Hybrid.f=fy;
		  if(fx<fy)Hybrid.f=fx;
		  // keep it safe!
		  Hybrid.debugmessage("--lineair scalefactor: "+Math.floor(Hybrid.f*100)+"%");
		  // calculate top and left offset, to keep it centered!
		  Hybrid.ox=(ww-Hybrid.width*Hybrid.f)/2;
		  Hybrid.oy=(wh-Hybrid.height*Hybrid.f)/2;
		  Hybrid.debugmessage("--offset: x"+Hybrid.ox);
		  Hybrid.debugmessage("--offset: y"+Hybrid.oy);
		  
		  if($("#hybridStage").length!=0)
		  {
			$("#hybridStage").css("left",Hybrid.ox+"px")
						.css("top",Hybrid.oy+"px")
						.css("width",toPx(Hybrid.width))
						.css("height",toPx(Hybrid.height));
		  }
	break;
	case "responsive-width":
		// ok, we scale everything to fit the HEIGHT, then we make the sides responsive.
		  Hybrid.f=wh/Hybrid.height;
		Hybrid.debugmessage("Window width: "+ww+", hybrid width: "+Hybrid.width+" factor: "+Math.floor(Hybrid.f*100)+"%");
		  Hybrid.debugmessage("Window height: "+wh+", hybrid height: "+Hybrid.height+" factor: "+Math.floor(Hybrid.f*100)+"%");

		   
		  // calculate top and left offset, to keep it centered!
		  Hybrid.ox=0;
		  Hybrid.oy=0;
		  Hybrid.width=Hybrid.height*(ww/wh);
		  Hybrid.height=Hybrid.height;
		  if($("#hybridStage").length!=0)
		  {
			$("#hybridStage").css("left",Hybrid.ox+"px")
						.css("top",Hybrid.oy+"px")
						.css("width",toPx(Hybrid.width))
						.css("height",toPx(Hybrid.height));
		  }
	break;
	case "responsive":
	   
		  Hybrid.f=1;
		Hybrid.debugmessage("Window width: "+ww+", hybrid width: "+Hybrid.width+" factor: "+Math.floor(Hybrid.f*100)+"%");
		  Hybrid.debugmessage("Window height: "+wh+", hybrid height: "+Hybrid.height+" factor: "+Math.floor(Hybrid.f*100)+"%");
		  // calculate top and left offset, to keep it centered!
		  Hybrid.ox=0;
		  Hybrid.oy=0;
		  Hybrid.width=ww;
		  Hybrid.height=wh;
		  if($("#hybridStage").length!=0)
		  {
			$("#hybridStage").css("left",Hybrid.ox+"px")
						.css("top",Hybrid.oy+"px")
						.css("width",toPx(Hybrid.width))
						.css("height",toPx(Hybrid.height));
		  }
	break;
	default:
		Hybrid.throwError("Not a known scalemode for hybrid stage: '"+Hybrid.stageScale+"'\n");
	break;
  }
  if(Hybrid.platform.OS=="iOs7")
  {
	// this is a true BUG, bit only of window in portrait..
	// there is no easy work around, it needs to be in the page around this!

//	if (navigator.userAgent.match(/iPad;.*CPU.*OS 7_\d/i) && !window.navigator.standalone) 
//	{
		// if we are in web mode!
//		Hybrid.oy=20;
		// we set the offset to 20 as well, or we get a balk on the bottom!
//	}
  }
};
// getting the scrollbar width for this browser
Hybrid.getScrollbarWidth=_hybridGetScrollbarWidth;
function _hybridGetScrollbarWidth() 
{
  var box1=$('<div style="width:100px;height:100px;overflow:auto;"></div>').appendTo('body');
  var box2=$('<div style="width:200px;height:200px;background-color:#aaa;"></div>').appendTo(box1);
  var box3=$('<div style="width:100%"></div>').appendTo(box1);
  // the idea is to have a box width a known with, with a bigger box inside, than to add a third div which will obtain all available width!
  // and then throw it all away. You can only call this on document ready.. Sorry..
  var width=100-box3.width();
  box1.remove();
 return width;
};
// getting the scrollbar width for this browser
Hybrid.makeScrollable=_hybridMakeScrollable;
function _hybridMakeScrollable(o) 
{
	o.jquery.css("overflow-y","scroll");
	o.jquery.css("-webkit-overflow-scrolling","touch");
};

Hybrid.setPadding=_hybridSetPadding;
function _hybridSetPadding(o,t,r,b,l) 
{
	o.jquery.css("padding",toPx(t)+" "+toPx(r)+" "+toPx(b)+" "+toPx(l));
};

Hybrid.setVisible=_hybridSetHybridElementVisible;
function _hybridSetHybridElementVisible(e,v)
{
	if(v)
		e.jquery.show();
	else
		e.jquery.hide();
}


Hybrid.setTransitionTiming=_hybridSetTransitionTiming;
function _hybridSetTransitionTiming(e,length,easing)
{
	if(typeof(length)==="undefined") length="0.4";
	if(typeof(easing)==="undefined") easing="ease";
	length+="s";
	var tx1=0.250; // tangent1 x,y
	var ty1=0.100;
	var tx2=0.250; // tangent 2 x,y
	var ty2=1.000;
	switch(easing)
	{
		case "linear":
			tx1=0.250;
			ty1=0.250;
			tx2=0.750;
			ty2=0.750;
		break;
		case "ease": // default!
			tx1=0.250;
			ty1=0.100;
			tx2=0.250;
			ty2=1.000;
		break;
		case "easeOut":
			tx1=0.0;
			ty1=0.0;
			tx2=0.580;
			ty2=1.000;
		break;			
		case "easeIn":
			tx1=0.42;
			ty1=0.0;
			tx2=1.00;
			ty2=1.000;
		break;		
		case "easeInOut":
			tx1=0.455;
			ty1=0.030;
			tx2=0.515;
			ty2=0.955;
		break;
		case "easeInOutBack":
			tx1=0.680;
			ty1=-0.550;
			tx2=0.265;
			ty2=1.550;
		break;
		case "easeInBack":
			tx1=0.600;
			ty1=-0.280;
			tx2=0.735;
			ty2=0.045;
		break;
		case "easeOutBack":
			tx1=0.175;
			ty1=0.885;
			tx2=0.320;
			ty2=1.275;
		break;
	}
	
	var value="cubic-bezier("+tx1+", "+ty1+", "+tx2+", "+ty2+")";
	tx1=Math.max(0, Math.min(tx1, 1)); // clamp to [0,1]
	ty1=Math.max(0, Math.min(ty1, 1));
	tx2=Math.max(0, Math.min(tx2, 1));
	ty2=Math.max(0, Math.min(ty2, 1));
	// documentation: http://matthewlein.com/ceaser/
	
	var value_clipped="cubic-bezier("+tx1+", "+ty1+", "+tx2+", "+ty2+")";
	e.jquery.css("-webkit-transition","all "+length+" "+value_clipped); // set for older webkit browsers!
	
	e.jquery.css("-webkit-transition","all "+length+" "+value); // set animation style!
	e.jquery.css("-moz-transition","all "+length+" "+value);
	e.jquery.css("-o-transition","all "+length+" "+value);
	e.jquery.css("transition","all "+length+" "+value);

	e.jquery.css("-webkit-transition-timing-function",value_clipped);// set for older webkit browsers!
	e.jquery.css("-webkit-transition-timing-function",value); // set animation style!
	e.jquery.css("-moz-transition-timing-function",value);
	e.jquery.css("-o-transition-timing-function",value);
	e.jquery.css("transition-timing-function",value);
	
}
// private function!
function _hybridResizeFunction()
{
	// check if we are on mobile, android and ONLY the height changed.
	// That means a keyboard popped up and we don't want to resize at all.
	Hybrid.debugmessage("document active element!"+typeof(document.activeElement));
	if(navigator.userAgent.indexOf("Android") > -1)
	{
		// we are on an android..
		var focused = $(':focus');
		if(focused.is("input")) return; // don't resize, this is to fix the resize on android browsers soft keyboard!
	}
	_hybridGetPageScale();
	// rebuild the page from dynamic elements!
	if(typeof(Hybrid.resizeFunction)!=="undefined")
	{
		Hybrid.debugmessage("Custom resize function has been defined!");
		Hybrid.resizeFunction();
	}
	Hybrid.debugmessage("window just resized!");
}
Hybrid.removeElement=_destroyHybridElement;
function _destroyHybridElement(layer)
 {
    layer.jquery.remove();			
 }
Hybrid.clearElement=_hybridClearElement;
function _hybridClearElement(layer)
 {
    layer.jquery.html("");			
 }
 Hybrid.setBorder=_hybridSetBorder;
 function _hybridSetBorder(layer,bs,bt,bc)
 {
	layer.jquery.css("border-style",bs);
	layer.jquery.css("border-width",toPx(bt));
	layer.jquery.css("border-color",bc);
 }
 
Hybrid.pixelprecision="float";
// private function!
function toPx(x){
 switch(Hybrid.pixelprecision)
 {
	case "float":
		return ((Hybrid.f*x)+"px"); //this provides half pixels, but the values are rounded down by (most) browsers, which saves a lot of processing time.!
	break;
	case "round":
		return ((Math.round(Hybrid.f*x))+"px"); // this gives you high precision, but is a bit slower..!
	break;
	case "floor":
		return ((Math.floor(Hybrid.f*x))+"px"); // this gives you almost high precision, and is slightly faster than round!
	break;
 }
}
// function to start a NEW page afresh!
Hybrid.erasePage=_hybridErasePage;
function _hybridErasePage()
{
	var $body = $('body');
	var html_string="<div id='hybridStage' style='left: "+Hybrid.ox+"px; top: "+Hybrid.oy+"px;width: "+toPx(Hybrid.width)+"; height: "+toPx(Hybrid.height)+";'></div>"; // deletes all layers accept top one
	if(Hybrid.stageColor)
	{
		html_string="<div id='hybridStage' style='background-color: "+Hybrid.stageColor+"; left: "+Hybrid.ox+"px; top: "+Hybrid.oy+"px;width: "+toPx(Hybrid.width)+"; height: "+toPx(Hybrid.height)+";'></div>"; // deletes all layers accept top one	
	}
	$body.html(html_string);
	// somehow Draggable areas seem to persist for the onup function!
	window.onmouseup=null;
	_genericDrag.up=null; // there can be only ONE generic drag area per page.
	_genericDrag.down=null; // but usually that suffices..
	_genericDrag.drag=null;
	_genericDrag.move=null;
	
	Hybrid.mouseWheelCallback=null;// Hybrid.listenToMouseWheel. cut out!
	
	// erase all elements we have created and stop the loop
	Hybrid.standardButtonCallback=null;
	Hybrid.hybridButtonKeeper=[];
	Hybrid.elements={};
	Hybrid.dynamic_element_counter=0;
	Hybrid.muted_music_loop=""; // clear any muted music loops!
	Hybrid.stopLoop();
	Hybrid.clearTextChangeListener(); // this is default to kill all events from that page.
}

  /*--
 SnoepGames: snoepHybrid - anti-leeching
---*/
//Hybrid.debugmessage("leech protection 2.2");
Hybrid.aatd=[]; 
//Hybrid.aatd.push(""); // cannot allow "" because it is a contains....
//Hybrid.aatd.push("undefined"); // DOESN't WORK MUST ALLOW undefined referrer to circumvent problems with false positives, you can blank your referrer in firefox for instance.
// this is done by going 'about: config' in the url field  -> then going to http: header referrer and putting the normal "2" to "0";

Hybrid.aatd.push("687474703a2f2f6c6f63616c686f73742f"); //http://localhost/"); // debugging!
Hybrid.aatd.push("687474703a2f2f7777772e736e6f65702e61742f");//http://www.snoep.at/"); // these are default!
Hybrid.aatd.push("687474703a2f2f7777772e6d616b696e6767616d65732e6f72672f"); //http://www.makinggames.org/"); // these are default!

function _hybridLeechProtect(){
	// we do any number of referrer checks here!
	if(Hybrid.allowAllDomains==true)
	{
		Hybrid.debugmessage("WARNING: no leechprotect active.");
		return true;
	}
	if(Hybrid.aatd)
	{
		//allowed and trusted domains has been set!
		var rf1=eval(Hybrid.decodeString("646f63756d656e742e7265666572726572")); //document.referrer 
		if(typeof(rf1)==="undefined" || rf1=="")
		{
			// this is when referrer is blocked..
			// we cannot play then, so just allow..
			// it's rare and not always very steady.
			// this sucks, but it's true..
			return true;
		}
		// referrer turns out to work perfectly.. (Jeee! Damn.... Not so perfect vodafone standard doesn't give referrer and you can block it easily..)
		//var rf2="";
		//try
		//{
			//rf2=eval(Hybrid.decodeString("77696e646f772e746f702e6c6f636174696f6e2e68726566")); //"window.top.location.href"
			// this doesn't work. Checking document.href werkt ook niet, want je kunt gewoon mijn index in zijn geheel iframen.
			// met een try catch zou ik de error moeten kunnen opvangen. Werkt het WEL dan zitten we in een
			// oude browser.
		//}catch(err) 
		//{
			// this is probably just the 
			//window.alert("just caught an error: "+err.message);
			// we ignore the error!
		//}
		// this causes an error on the ipad and is not really something we want anyway..
		
		
		//Hybrid.debugmessage("encoded "+Hybrid.encodeString("window.top.location.href"));
		Hybrid.debugmessage("CHECKING REFS: "+rf1);
		//Hybrid.debugmessage("CHECKING REFS: "+rf2);
		var i,a=false;
		for(i=0;i<Hybrid.aatd.length;i++)
		{
			Hybrid.debugmessage("Checking aatd");
			Hybrid.debugmessage(rf1.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)+"==='"+Hybrid.decodeString(Hybrid.aatd[i])+"'");
			//Hybrid.debugmessage(rf2.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)+"==='"+Hybrid.decodeString(Hybrid.aatd[i])+"'");
			//Hybrid.debugmessage("encoded aatd: Hybrid.aatd[i] "+Hybrid.encodeString(Hybrid.aatd[i]));
			if(rf1.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)==Hybrid.decodeString(Hybrid.aatd[i])) 
			 {
				Hybrid.debugmessage("Found a matching aatd");
				a=true;
			 }
			 //if(rf2.substr(0,Hybrid.decodeString(Hybrid.aatd[i]).length)==Hybrid.decodeString(Hybrid.aatd[i])
		}
		return a; // cannot run in direct mode!
	}else
	{
		return false;
	}
};
 /*-------------------------------------------------------------------------------------
 // obscuring
 ----------------------------------------------------------------------------------------*/ 
// Functions to hide strings that will not be obscure, for instance if you want to SAy "Hybrid" in debug.
// there are private and public versions. Both are equal.

Hybrid.encodeString=_hybridEncodeString;
Hybrid.decodeString=_hybridDecodeString;
function _hybridEncodeString(ins){
	var o="";
	var i;
	for(i=0;i<ins.length;i++)o+=ins.charCodeAt(i).toString(16);
	return o;
};
function _hybridDecodeString(ins){
	var o="";
	var i;
	for(i=0;i<ins.length;i+=2)o+=String.fromCharCode(parseInt("0x"+ins.substr(i,2)));
	return o;
};
 /*--
 SnoepGames: snoepHybrid loading
V1.2.0 
---*/
  
Hybrid.minloadtime=1000; // you can override this if you don't need loading!
 
function _hybridDoPreload(){
 // this fills the data with information
 var i;
 Hybrid.preload_message="loading init\n"; // we start with the preload list empty!
 
 Hybrid.debugmessage("start Hybrid Preload");
 if(Hybrid.loadingProgressFunction!=null) Hybrid.loadingProgressFunction(0,true);
 
 // record the start time, to see if there is a timeout!
 Hybrid.preloadInitiationTime=new Date().getTime();


   Hybrid.images_preloaded=0;
   Hybrid.nr_of_image_files_to_preload=0;
  Hybrid.debugmessage("graphics_manifest: "+Hybrid.graphics_manifest);
   // now count all images that are to be preloaded.
   for(var all in Hybrid.graphics_manifest)
   {
		Hybrid.debugmessage("graphics_manifest: "+all+" preload: "+Hybrid.graphics_manifest[all].preload);
		if(Hybrid.graphics_manifest[all].preload)
		{
			Hybrid.nr_of_image_files_to_preload++;
			//Hybrid.preload_message+="img: "+Hybrid.graphics_manifest[all].src+"\n";
		}
   }
	// now we know all about the images.
 
 // prepare how many audio files we actually have to preload!
 Hybrid.audio_preloaded=0;
 if(Hybrid.capabilities.audio_preload==true)
 {
   Hybrid.debugmessage("--preloading of audio supported!");
   Hybrid.audio_preloaded=0;
   Hybrid.nr_of_audio_files_to_preload=0;
 
   // now count all audo that is to be preloaded.
   
   // prepare the manifest with default values!
   for(i in Hybrid.audio_manifest)
   {
		Hybrid.audio_manifest[i].au={}; // create an au object, which will hold the actual audio!
		Hybrid.audio_manifest[i].loaded=false; // this is to have it work, even with a double event!  

		// if there is a audioContext, we HAVE to preload everything, including music!
		if(Hybrid.capabilities.audioContext==true)
		{
			 // have to preload ALL audio except music loops, they take a bit too long! 
			 if(Hybrid.audio_manifest[i].preload!=true)
			 {
				 Hybrid.audio_manifest[i].preload=true;   
				//Hybrid.preload_message+="AC switches preload to true: "+i+"\n";
			}
			 
		}
		// if there is NO audioContext and user forgets to set the preload attribute, default to true.
		// count undefined as true and set them!
		if(Hybrid.audio_manifest[i].preload===undefined)
		{
			Hybrid.preload_message+="preload auto switched to true: "+i+"\n";
			 Hybrid.audio_manifest[i].preload=true;
		}
		// if no src given, default to the key!
		if(Hybrid.audio_manifest[i].src===undefined) Hybrid.audio_manifest[i].src=i; 
		// if no volume given, default to 1
		if(Hybrid.audio_manifest[i].vol===undefined) Hybrid.audio_manifest[i].vol=1; 
   }
   // now count all that is to be preloaded.
   for(i in Hybrid.audio_manifest)
   {
		if(Hybrid.audio_manifest[i].preload)
		{
			Hybrid.nr_of_audio_files_to_preload++;
		}
   }
  }else
  {
	  // no support for preload, don't even try it!
		Hybrid.nr_of_audio_files_to_preload=0;
  }
  // now we have made the audio manifest a little bit better,
  // we preload the images, after these are done, the audio will be preloaded.
   Hybrid.debugmessage("starting preload of: "+Hybrid.nr_of_image_files_to_preload+", images");

   _hybridPreloadImages();
};

Hybrid.loadImagesFromManifest==_hybridDynamicLoadFromManifest;
Hybrid.dynamicImageLoadCallback=null;
function _hybridDynamicLoadFromManifest(callback){
	Hybrid.dynamicLoadCallback=callback;
	Hybrid.debugmessage("attempting dynamic load.");
	Hybrid.preload_message+="attempting dynamic load.\n";

	var i;
	if(Hybrid.loadingProgressFunction!=null) Hybrid.loadingProgressFunction(0,true);
	// record the start time, to see if there is a timeout!
	Hybrid.preloadInitiationTime=new Date().getTime();

	Hybrid.image_daisychainlist=[];
	// now push all images that are to be preloaded.
	for(var all in Hybrid.graphics_manifest)
	{
		if(Hybrid.graphics_manifest[all].preload==true && Hybrid.graphics_manifest[all].loaded==false)
		{
			Hybrid.debugmessage("graphics_manifest: "+all+" unloaded");
		}
    }
//   Hybrid.debugmessage("starting preload of: "+Hybrid.nr_of_image_files_to_preload+", images");
//   _hybridPreloadImages();
};

function _hybridPreloadImages(){
	//Hybrid.debugmessage("-preloading images");
	Hybrid.indexedPreload=[];
	for(var all in Hybrid.graphics_manifest)
    {
		if(Hybrid.graphics_manifest[all].preload)
		{
			Hybrid.indexedPreload.push(all);
		}
    }
	_hybridPreloadNextImage();
};
function _hybridPreloadNextImage()
{
	if(Hybrid.indexedPreload.length==0)
	{
	 // we are done preloading images.
	 Hybrid.debugmessage("--all images preloaded.");
	_hybridPreloadSounds(true); // with callback, this is the normal loop!
	}else
	{
		var i=Hybrid.indexedPreload.shift(); // gets the first image!
		Hybrid.currentImageIndex=i;
		Hybrid.debugmessage("--initiating preload of: "+i);
	  //Hybrid.debugmessage("preloading images");
	  // take an image from the stack and preload it!
	//  for(var i in Hybrid.graphics_manifest){
		if(Hybrid.graphics_manifest[i].preload){
			Hybrid.graphics_manifest[i].img= new Image(); // we DON't Use jquery, it's broken for loading images and this works fine cross browser.
			Hybrid.graphics_manifest[i].img.onerror=_hybridImagePreloadFailed;
			if(Hybrid.graphics_manifest[i].src.substr(0,5)=="data:")
			{
				Hybrid.debugmessage("direct dataurl found in image manifest!");
				Hybrid.graphics_manifest[i].img.src=Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			}else
			{
				Hybrid.graphics_manifest[i].img.src=Hybrid.img_src_path+Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			}
			Hybrid.currentLoadingUrl=Hybrid.img_src_path+Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			Hybrid.preload_message+="opening img "+Hybrid.currentLoadingUrl+"\n";
			Hybrid.graphics_manifest[i].img.onload=_hybridPreloadNextImage;
		}
		// daisy chaining means we minimise the amount of requests at the same time!
	}
 };
 Hybrid.addToManifest=_hybridAddToManifest;
 function _hybridAddToManifest(o,i,sk,cb)
 {
	// checks if this item is allready IN the manifest, if so, it does NOTHING!
	
	if(typeof(Hybrid.graphics_manifest[i])!=="undefined")
	{	
		//Hybrid.debugmessage("addToManifest reports: Version of "+i+" is allready in manifest, callback called");
		cb();
		return;
	}
 
	//Hybrid.debugmessage("Hybrid.addToManifest "+i+" <-"+o);
	// add and object to the manifest as
	Hybrid.graphics_manifest[i]=o;
	// also start loading this image if required
	if(Hybrid.graphics_manifest[i].preload)
	{
		Hybrid.graphics_manifest[i].img= new Image(); // we DON't Use jquery, it's broken for loading images and this works fine cross browser.
		Hybrid.graphics_manifest[i].img.onerror=_hybridImagePreloadFailed;
		if(sk=="dataURL")
		{
			Hybrid.graphics_manifest[i].img.src=Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			Hybrid.currentImageIndex="data-url:"+i; // keep a ref tot the img, to use with canvas.
		}else
		{
			Hybrid.graphics_manifest[i].img.src=Hybrid.img_src_path+Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			Hybrid.currentLoadingUrl=Hybrid.img_src_path+Hybrid.graphics_manifest[i].src; // keep a ref tot the img, to use with canvas.
			Hybrid.currentImageIndex="extra file: "+i;
		}
		if(typeof(cb)!=="undefined")Hybrid.graphics_manifest[i].img.onload=cb
	}
 }
 Hybrid.checkAllImagesLoaded=_hybridCheckAllImagesLoaded;
 function _hybridCheckAllImagesLoaded()
 {
	var i=0;
	for(i=0;i<Hybrid.graphics_manifest.length;i++)
	{
		if(Hybrid.graphics_manifest[i].preload)
		{
			if(_hybridIsImageOk(i)==false)
			{
				return false;
			}
		}
	}
	return true;
 }
 // this function determines if a natural image is complete or not!
 function _hybridIsImageOk(i) {
    // During the onload event, IE correctly identifies any images that
    // weren’t downloaded as not complete. Others should too. Gecko-based
    // browsers act like NS4 in that they report this incorrectly.
    if (!Hybrid.graphics_manifest[i].img.complete) {
        return false;
    }
    // However, they do have two very useful properties: naturalWidth and
    // naturalHeight. These give the true size of the image. If it failed
    // to load, either of these should be zero.
    if (typeof Hybrid.graphics_manifest[i].img.naturalWidth !== "undefined" && Hybrid.graphics_manifest[i].img.naturalWidth === 0) {
        return false;
    }

    // No other way of checking: assume it’s ok.
    return true;
}
 

// -------------------------------------------
// Pre loading sound!
// -------------------------------------------

 function _hybridPreloadSounds(setCallback){
	Hybrid.debugmessage("-preloading sounds");
	var i;
	if(Hybrid.nr_of_audio_files_to_preload==0)
	{
		Hybrid.debugmessage("--no sound to preload");
		//_hybridDonePreloading(); called by loop!
	}else
	{
		if (Hybrid.capabilities.audiotype === 'ogg') {
			for(i in Hybrid.audio_manifest)
			{
				if(Hybrid.audio_manifest[i].preload)
				{
					if(Hybrid.capabilities.audioContext)
					{
						Hybrid.currentLoadingUrl="snd_ogg/"+Hybrid.audio_manifest[i].src+".ogg"; // keep a ref tot the img, to use with canvas.
						_hybridLoadAudioIntoContext(i,"snd_ogg/"+Hybrid.audio_manifest[i].src+".ogg",setCallback); 
						Hybrid.preload_message+="opening snd ac "+Hybrid.currentLoadingUrl+"\n";
					}else
					{
						Hybrid.currentLoadingUrl="snd_ogg/"+Hybrid.audio_manifest[i].src+".ogg"; // keep a ref tot the img, to use with canvas.
						Hybrid.audio_manifest[i].au  = _hybridLoadAudioTag("snd_ogg/"+Hybrid.audio_manifest[i].src+".ogg",setCallback); 
						Hybrid.preload_message+="opening snd "+Hybrid.currentLoadingUrl+"\n";
					}
				}
			}
		}
		if (Hybrid.capabilities.audiotype === 'mp3')
		{ 
			for(i in Hybrid.audio_manifest)
			{
				Hybrid.debugmessage("we'll preload mp3 "+i);
				if(Hybrid.audio_manifest[i].preload)
				{
					if(Hybrid.capabilities.audioContext)
					{
						Hybrid.currentLoadingUrl="snd_mp3/"+Hybrid.audio_manifest[i].src+".mp3"; // keep a ref tot the img, to use with canvas.
						_hybridLoadAudioIntoContext(i,"snd_mp3/"+Hybrid.audio_manifest[i].src+".mp3",setCallback);
						Hybrid.preload_message+="opening snd ac"+Hybrid.currentLoadingUrl+"\n";
					}else
					{
						Hybrid.currentLoadingUrl="snd_mp3/"+Hybrid.audio_manifest[i].src+".mp3"; // keep a ref tot the img, to use with canvas.
						Hybrid.audio_manifest[i].au = _hybridLoadAudioTag("snd_mp3/"+Hybrid.audio_manifest[i].src+".mp3",setCallback);
						Hybrid.preload_message+="opening snd "+Hybrid.currentLoadingUrl+"\n";
					}      
				}
			}
		}
	}
};
 
 // private function to shut everything off.
function _hybridDonePreloading(){
	Hybrid.debugmessage("--done preloading has been called!");
	Hybrid.preload_message+="done preloading\n";

	if(Hybrid.stopLoop()) // if there is still a loop to stop!!
	{
		// this will be done ONLY once!
		Hybrid.debugmessage("--Done Preloading");
		if(Hybrid.initPageFunction) Hybrid.initPageFunction();
		else Hybrid.debugmessage("'initPageFunction' not Defined");
	}
};
// -------------------------------------------
// Loading loop and feedback.
// -------------------------------------------
 function _hybridLoadingLoop(){
  Hybrid.loading_time=new Date().getTime()-Hybrid.preloadInitiationTime;
  Hybrid.debugmessage("--loading time: "+ Hybrid.loading_time);
  
  // allow for empty manifests, 0/0 is undefined :)
  var img_factor;
  if(Hybrid.nr_of_image_files_to_preload==0) 
	img_factor=1; 
  else
	img_factor=(Hybrid.nr_of_image_files_to_preload-Hybrid.indexedPreload.length)/Hybrid.nr_of_image_files_to_preload;
  
  var audio_factor;
  if(Hybrid.nr_of_audio_files_to_preload==0)
	audio_factor=1; // allow for empty manifests, 0/0 is undefined :)
  else
	audio_factor=Hybrid.audio_preloaded/Hybrid.nr_of_audio_files_to_preload; 
    
  Hybrid.debugmessage("---img_factor: "+img_factor+" = "+(Hybrid.nr_of_image_files_to_preload-Hybrid.indexedPreload.length)+"/"+Hybrid.nr_of_image_files_to_preload);
  Hybrid.debugmessage("---audio_factor: "+audio_factor+" = "+Hybrid.audio_preloaded+"/"+Hybrid.nr_of_audio_files_to_preload);
  
  var loading_percentage=(img_factor+audio_factor)/2; // the generation sweep will start after loading!
  // show what is going on!
  if(Hybrid.loadingProgressFunction!=null) Hybrid.loadingProgressFunction(loading_percentage,false);
  
//  if(Hybrid.loading_time>15000)
//  {
//   //debugmessage("preloading more than 5 seconds, probably stuck, try to force a start!");
//     loading_percentage=1;
//  }
  if(loading_percentage>=1 && Hybrid.loading_time>Hybrid.minloadtime) // must preload for at least one second!
  {
	Hybrid.debugmessage("loading_percentage: "+loading_percentage);
	_hybridDonePreloading();
  }
 }; /*--
 SnoepGames: snoepHybrid - box
 V1.2.0 
---*/
 
  // a box is 
  Hybrid.createBox=_hybridCreateBox;
 function _hybridCreateBox(layer,x,y,w,h)
 {
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createBox reports: not the right kind of object: "+layer.kind);
   return null;
  }
  var o={};
  o.dynamic_element_counter=0; // they may be nested!
  
  o.id="box"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  //Hybrid.debugmessage("create new box: "+o.id);
  var html_string="<div id='"+o.id+"'></div>"
  //Hybrid.debugmessage("create new textbox: "+html_string);
  $(html_string).appendTo(layer.jquery);
  
  o.jquery=$("#"+o.id);
  o.jquery.css("z-index",layer.dynamic_element_counter);
  o.kind="hybridBox";
  // keep ref of w and h!
  o.w=w;
  o.h=h;
  o.x=x;
  o.y=y;
  o.jquery.width(toPx(w)).height(toPx(h))
   .css("left",toPx(x)).css("top",toPx(y));
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
 }
 // a layer is just a box, but at 100% and connected to the stage!
Hybrid.createLayer=_hybridCreateLayer;
function _hybridCreateLayer(bx)
 {
  var o={};
  o.dynamic_element_counter=0;
  o.id="bx"+Hybrid.dynamic_element_counter;
  var html_string="<div id='"+o.id+"'></div>";
  $("#hybridStage").append(html_string);
  o.w=Hybrid.width;
  o.h=Hybrid.height;
  o.jquery=$("#"+o.id).css("z-index",Hybrid.dynamic_element_counter);
  o.kind="hybridBox";
  // set bx to cover whole page!
  _hybridSetDivScaledRect(o.jquery,0,0,Hybrid.width,Hybrid.height);
  Hybrid.dynamic_element_counter++;
  return o; // return the object!
 }
 
 Hybrid.setBevel=_hybridSetBoxInset;
 function _hybridSetBoxInset(o,size,c1,c2)
 {
	// supported from firefox 4, Safari 3.1 - 5.0, Chrome 4.0 - 9.0, Opera 10.5+
	var str="inset "+toPx(size)+" "+toPx(size)+" 0px 0px "+c1+",";
	str+=" inset "+toPx(-size)+" "+toPx(-size)+" 0px 0px "+c2+"";
	//Hybrid.debugmessage("created insetstring: "+str);
//	o.jquery=$("#"+o.id).css("-webkit-box-shadow:",str);
//	o.jquery=$("#"+o.id).css("-moz-box-shadow:",str);
//	o.jquery=$("#"+o.id).css("box-shadow: ",str);

//	As from jQuery 1.8+ you can simply use (crossbrowser)
	o.jquery.css({boxShadow: str});
 }
 
Hybrid.setBoxAlpha=_hybridSetBoxAlpha;
function _hybridSetBoxAlpha(o,a){
  /* IE 8 */
	o.jquery=$("#"+o.id).css("-ms-filter","progid:DXImageTransform.Microsoft.Alpha(Opacity="+Math.floor(a*100)+")");
	  /* IE 5-7 */
	o.jquery=$("#"+o.id).css("filter","alpha(opacity="+Math.floor(a*100)+");");
  /* Netscape */
	o.jquery=$("#"+o.id).css("-moz-opacity",a);
  /* Safari 1.x */
	o.jquery=$("#"+o.id).css("-khtml-opacity",a);
  /* Good browsers */
	o.jquery=$("#"+o.id).css("opacity",a);
};
 
 
 Hybrid.setBoxScrollable=_hybridSetBoxScrollable;
 function _hybridSetBoxScrollable(box,x,y)
  {
	if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridTextBox")
	{
	   Hybrid.debugmessage("setBoxScrollable reports: not the right kind of object: "+box.kind);
	   return null;
	} 
	if(x)
	{
		box.jquery.css("overflow-x","scroll");
		box.jquery.css("-webkit-overflow-scrolling","touch");
		//_jQueryAddition_MakeSelectable(box.jquery); // this might have the averrechtse effect!

		//box.jquery.css("-ms-overflow-style","none");  /* Hides the scrollbar. */
		//box.jquery.css("-ms-scroll-chaining","none");  /* Prevents Metro from swiping to the next tab or app. */
		//box.jquery.css("-ms-scroll-snap-type","mandatory"); /* Forces a snap scroll behavior on element. */
		//box.jquery.css("-ms-scroll-snap-points-x","snapInterval(0%, 100%)");  /* Defines the y and x intervals to snap to when scrolling. So this is nextpage! */
  	}
	else
		box.jquery.css("overflow-x","hidden");
	if(y)
	{
		box.jquery.css("overflow-y","scroll");
		box.jquery.css("-webkit-overflow-scrolling","touch");
		//_jQueryAddition_MakeSelectable(box.jquery);
		//box.jquery.css("-ms-overflow-style","none");  /* Hides the scrollbar. */
		//box.jquery.css("-ms-scroll-chaining","none");  /* Prevents Metro from swiping to the next tab or app. */
		//box.jquery.css("-ms-scroll-snap-type","mandatory"); /* Forces a snap scroll behavior on element. */
		//box.jquery.css("-ms-scroll-snap-points-x","snapInterval(0%, 100%)");  /* Defines the y and x intervals to snap to when scrolling. So this is nextpage! */

	}
	else
		box.jquery.css("overflow-y","hidden");
 }

 
 // jquery helper functions

 Hybrid.moveBox=_hybridMB;
function _hybridMB(box,x,y)
 {
  if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridTextBox" && box.kind!="hybridCanvas")
  {
   Hybrid.debugmessage("moveBox  reports: not the right kind of object: "+box.kind);
   return null;
  }
  box.jquery.css("left",toPx(x));
  box.jquery.css("top",toPx(y))
  box.x=x;
  box.y=y;
 }
 
 
Hybrid.getBoxContentHeight=_hybridGetBoxContentHeight;
function _hybridGetBoxContentHeight(o)
{
	// this is NOT working so it seems..
    var h=o.jquery.height();
    o.jquery.height("auto"); // if you don't put it on auto, you get just the height back..
    var innerHeight = o.jquery.innerHeight();
    o.jquery.height(h);
    return innerHeight/Hybrid.f;
}
 
 Hybrid.sizeBox=_hybridSizeBox;
function _hybridSizeBox(box,w,h)
 {
  if(box.kind=="hybridWebview")
  {
	// guide him to special resize webview function.
	_hybridresizeWebView(box,w,h);
	return;
  }
  if(box.kind!="hybridLayer" && box.kind!="hybridBox" && box.kind!="hybridCanvas")
  {
   Hybrid.debugmessage("sizeBox reports: not the right kind of object: "+box.kind);
   return null;
  }
  //Hybrid.debugmessage("size box content before size:"+box.jquery.html());
  box.w=w;
  box.h=h;
  box.jquery.width(toPx(w)).height(toPx(h));
  //Hybrid.debugmessage("size box content after size:"+box.jquery.html());
  }
 function _hybridSetDivScaledRect(jQueryElement,x,y,w,h)
 {
  jQueryElement.width(toPx(w))
   .height(toPx(h))
   .css("left",toPx(x))
   .css("top",toPx(y));
 }
   
 // box and bx manipulation functions!
 // set a standardised shadow!
 Hybrid.setBoxShadow=_hybridSetBoxShadow;
 function _hybridSetBoxShadow(bx,offset_x,offset_y,blur,cs)
 {
	if(typeof(cs)==="undefined") cs=rgba(0, 0, 0, 0.30);
	if(typeof(blur)==="undefined") blur=5;
	if(typeof(offset_x)==="undefined") offset_x=7;
	if(typeof(offset_y)==="undefined") offset_y=7;
	var str=toPx(offset_x)+" "+toPx(offset_y)+" "+toPx(blur)+" "+cs;
   Hybrid.debugmessage("setBoxShadow string: "+str);
  if(bx.kind=="hybridBox" || bx.kind=="hybridCanvas")
  {
	 	bx.jquery.css({boxShadow: str});
  
  // bx.jquery.css("-webkit-box-shadow","7px 7px 5px rgba(0, 0, 0, 0.30)")
//				.css("-moz-box-shadow","7px 7px 5px rgba(50, 50, 50, 0.30)")
//				.css("box-shadow","7px 7px 5px rgba(50, 50, 50, 0.30)");				
  }
  else
  {
   Hybrid.debugmessage("WARNING: setBoxShadow reports: not the right kind of object: "+bx.kind);
  }
 }
 // set a standardised shadow!
 
  Hybrid.setBoxImagePath=_hybridBoxBackgroundImagePath;
 function _hybridBoxBackgroundImagePath(layer,src)
 {
  if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" )
  {
   var html_string="<img src='"+src+"' width='100%' height='100%'>";
   //Hybrid.debugmessage("set background of "+layer.id+" to "+src);
   layer.jquery.html(html_string);
  }
  else
  {
   Hybrid.debugmessage("WARNING: setBoxImagePath reports: not the right kind of object: "+layer.kind);
  }
 }

 
 Hybrid.setBoxImage=_hybridBoxBackgroundImage;
 function _hybridBoxBackgroundImage(layer,index)
 {
   var src=Hybrid.img_src_path+Hybrid.graphics_manifest[index].src;
  if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" )
  {
   var html_string="<img src='"+src+"' width='100%' height='100%'>";
   //Hybrid.debugmessage("set background of "+layer.id+" to "+src);
   layer.jquery.html(html_string);
  }
  else
  {
   Hybrid.debugmessage("WARNING: set Box Image reports: not the right kind of object: "+layer.kind);
  }
 }
 
 
 Hybrid.setBoxRounded=_hybridSetBoxRounded;
 function _hybridSetBoxRounded(bx,px){
  
	if(typeof(px)=="number")
	{
	   bx.jquery.css("-moz-border-radius",toPx(px))
					.css("-webkit-border-radius",toPx(px))
					.css("border-radius",toPx(px));				
	}else
	{
		//Hybrid.debugmessage("rounding box with "+typeof(px));
		//Hybrid.debugmessage("box rounded with different settings for different corners: "+px);
		bx.jquery.css("-moz-border-radius-topleft",toPx(px[0]))
						.css("-webkit-border-top-left-radius",toPx(px[0]))
						.css("border-top-left-radius",toPx(px[0]));				
						
		   bx.jquery.css("-moz-border-radius-topright",toPx(px[1]))
						.css("-webkit-border-top-right-radius",toPx(px[1]))
						.css("border-top-right-radius",toPx(px[1]));				
						
		   bx.jquery.css("-moz-border-radius-bottomright",toPx(px[2]))
						.css("-webkit-border-bottom-right-radius",toPx(px[2]))
						.css("border-bottom-right-radius",toPx(px[2]));				
						
		   bx.jquery.css("-moz-border-radius-bottomleft",toPx(px[3]))
						.css("-webkit-border-bottom-left-radius",toPx(px[3]))
						.css("border-bottom-left-radius",toPx(px[3]));				
						
	}
  
 };
// box - COLOR
Hybrid.setBoxColor=_hybridSetBoxBackgroundColor;
function _hybridSetBoxBackgroundColor(layer,colorString)
{
 if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" || layer.kind=="hybridTextBox"  || layer.kind=="hybridTextInput" )
  {
   layer.jquery.css("background-color",colorString);
  }
  else
  {
    Hybrid.debugmessage("WARNING: set Box Color reports: not the right kind of object: "+layer.kind);
  }
 }
// box - COLOR
function hcthx(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
Hybrid.rgbToHex=_hybridrgbToHex;
function _hybridrgbToHex(r, g, b) {
    return "#" + hcthx(r) + hcthx(g) + hcthx(b);
}


Hybrid.setBoxHairlineBorder=_hybridSetBoxHairBorder;
function _hybridSetBoxHairBorder(layer,c)
{
	layer.jquery.css("border","1px solid "+c);
}


Hybrid.emptyBox=_hybridEmptyBox;
function _hybridEmptyBox(layer)
{
	if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" || layer.kind=="hybridTextBox"  || layer.kind=="hybridTextInput" )
	{
		layer.jquery.html();
	}
}


Hybrid.setBoxGradient=_hybridSetBoxGradient;
function _hybridSetBoxGradient(layer,dir,color_stops)
{
 if(layer.kind=="hybridLayer" || layer.kind=="hybridBox" || layer.kind=="hybridTextBox"  || layer.kind=="hybridTextInput" )
  {
	layer.jquery.css("background",Hybrid.rgbToHex(color_stops[0].r,color_stops[0].g,color_stops[0].b)); // first color_stop, fallback for old browsers!
	
	var from,from2,from3,to,deg,kind;
	switch(dir)
	{
		case "vertical": // top to bottom
			kind="linear";
			from="top";
			from2="left top, left bottom";
			to="to bottom";
		break;
		case "horizontal": // left to right
			kind="linear";
			from="left";
			from2="left top, right top";
			to="to right";
		break;
		case "diagonal1": //top left, bottom right
			kind="linear";
			from="-45deg";
			from2="left top, right bottom";
			to="135deg";
		break;
		case "diagonal2": // bottom left, top right
			kind="linear";
			from="45deg";
			from2="left bottom, right top";
			to="45deg";
		break;
		case "radial": // bottom left, top right
			kind="radial";
			from="center, ellipse cover"; // Chrome, safari 4+
			from2="center center";
			to="ellipse at center";
		break;
	}
 
	var i; // used http://www.colorzilla.com/gradient-editor/ as a template!
	
	var str="-moz-"+kind+"-gradient("+from+", ";
	for(i=0;i<color_stops.length;i++)
	{
		str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";
	}
	str=str.substr(0,str.length-1); // erase last comma!
	str+=")";
	layer.jquery.css("background",str); // for FF3.6
		str="-webkit-gradient("+kind+", "+from2+", ";
	for(i=0;i<color_stops.length;i++)
	{
		str+="color-stop("+color_stops[i].p+"%,rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+")),";
	}
	str=str.substr(0,str.length-1); // erase last comma!
	str+=")";
	layer.jquery.css("background",str); // /* Chrome,Safari4+ */
	
	str="-webkit-"+kind+"-gradient("+from+", ";
	for(i=0;i<color_stops.length;i++)
	{
		str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";
	}
	str=str.substr(0,str.length-1); // erase last comma!
	str+=")";
	layer.jquery.css("background",str); // /* Chrome10+,Safari5.1+ */
	
	str=" -o-"+kind+"-gradient("+from+", ";
	for(i=0;i<color_stops.length;i++)
	{
		str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";
	}
	str=str.substr(0,str.length-1); // erase last comma!
	str+=")";
	layer.jquery.css("background",str); // /* Opera 11.10+ */
	
	str=" -ms-"+kind+"-gradient("+from+", ";
	for(i=0;i<color_stops.length;i++)
	{
		str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";
	}
	str=str.substr(0,str.length-1); // erase last comma!
	str+=")";
	layer.jquery.css("background",str);  /* IE10+ */
		str=" "+kind+"-gradient("+to+", ";
	for(i=0;i<color_stops.length;i++)
	{
		str+="rgba("+color_stops[i].r+","+color_stops[i].g+","+color_stops[i].b+","+color_stops[i].a+") "+color_stops[i].p+"%,";
	}
	str=str.substr(0,str.length-1); // erase last comma!
	str+=")";
	layer.jquery.css("background",str);   /* W3C */
	
  }
  else
  {
    Hybrid.debugmessage("WARNING: set Box Gradient reports: not the right kind of object: "+layer.kind);
  }
 }

Hybrid.setSprite=_hybridSetSprite;
function _hybridSetSprite(layer,img_nr,label,f)
{
	// must be valid sprite! This is for ease of use only, don't expect much performance-wise.
	// it does allow you for instance to use 3D transforms on sprites. That's kind of cool!
   if(typeof(Hybrid.graphics_manifest[img_nr])==="undefined")
   {
		Hybrid.debugmessage("set Sprite WARNING : '"+img_nr+"' not in image manifest");
		return;
   }
   if(!Hybrid.graphics_manifest[img_nr].kind=="sprite")
   {
		Hybrid.debugmessage("set Sprite WARNING: "+img_nr+" not a sprite");
		return;
   }else
   {
		// get the numbers from the graphics_manifest and ss data for the sprite!!
		if(typeof(Hybrid.graphics_manifest[img_nr].ss[label])==="undefined")
		{
			Hybrid.debugmessage("set Sprite WARNING: label "+label+" not a known frame for sprite "+img_nr);
			return;
		}
		if(typeof(Hybrid.graphics_manifest[img_nr].ss[label][f])==="undefined")
		{
			Hybrid.debugmessage("set Sprite WARNING: frame "+f+" not a known frame for sprite "+img_nr+","+label);
			return;
		}
	}
	if(layer.kind=="hybridLayer" || layer.kind=="hybridBox")
	{	
		_jQueryAddition_MakeUnselectable(layer.jquery);
		// first set the box to the right size!
		var px=Hybrid.graphics_manifest[img_nr].ss[label][f][0];
		var py=Hybrid.graphics_manifest[img_nr].ss[label][f][1];
		var bw=Hybrid.graphics_manifest[img_nr].ss[label][f][2];
		var bh=Hybrid.graphics_manifest[img_nr].ss[label][f][3];
		var f=1;
		if(layer.w!=bw)
		{
			f=layer.w/bw;
		}
		//Hybrid.debugmessage("show setsprite:"+label+" "+px+","+py+","+bw+","+bh);
		layer.jquery.width=bw;
		layer.jquery.height=bh;
		var html_string="<div><img src='img/"+Hybrid.graphics_manifest[img_nr].src+"' width='100%' height='100%'></div>";
		//Hybrid.debugmessage("set background of "+layer.id+" to img/"+Hybrid.graphics_manifest[img_nr].src);
		layer.jquery.html("");// erase all!
		layer.in_div=$(html_string).appendTo(layer.jquery);
		layer.in_div.width(toPx(Hybrid.graphics_manifest[img_nr].w*f));
		layer.in_div.height(toPx(Hybrid.graphics_manifest[img_nr].h*f));
		layer.in_div.css("left",toPx(-px*f));
		layer.in_div.css("top",toPx(-py*f));
	}
	else
	{
		Hybrid.debugmessage("WARNING: setSprite reports: not the right kind of object: "+layer.kind);
	}
 }
 
  /*--
 SnoepGames: snoepHybrid - textbox
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

Hybrid.getTextboxHeight=_hybridGTBH;
function _hybridGTBH(tb) // width not supported yet
{
	// the purpose of this function is to figure out the height after we strip that from the div..
	// so it becomes a stretchable div!!!
	var old_h=tb.jquery.height();
	//Hybrid.debugmessage("getTextboxHeight "+tb.jquery.attr("id")+" old_height was: "+old_h+" ->"+(old_h/Hybrid.f)+" hybrid pixels" );
	tb.jquery.css("height", "auto"); // else innerheight just returns height+padding!
	var ih=tb.jquery.innerHeight();
	tb.jquery.height(old_h+"px"); // reset the height to old value!
	//Hybrid.debugmessage("getTextboxHeight "+tb.jquery.attr("id")+" innerheight: "+(ih/Hybrid.f)+" for "+tb.jquery.html());
	return (ih/Hybrid.f);
}

Hybrid.setTextBorder=_hybridSetTextBorder
function _hybridSetTextBorder(tb,color,width) // width not supported in all browsers yet, but we expect HTML5 to grow up!
{
	// if we have webkit, this will do the trick, if not, we have NO width!
	if(width===undefined)
	{	
		width=2;
	}
	if(tb===undefined)
	{	
		Hybrid.debugmessage("---WARNING: setTextBorder reports unknown textbox! Request ignored..");
		return;
	}
	if(tb.kind!="hybridTextBox")
	{
	   Hybrid.debugmessage("setTextBorder reports: not the right kind of object: "+tb.kind);
	   return null;
	}
	tb.jquery.css("text-shadow","4px 0 0 "+color+", -2px 0 0 "+color+", 0 2px 0 "+color+", 0 -2px 0 "+color+", 3px 1px 0 "+color+", -1px 1px 0 "+color+", -1px 1px 0 "+color+", -1px -1px 0 "+color);
	// oh lets be ready for the future..
	tb.jquery.css("-webkit-stroke-fill-color",color);
	tb.jquery.css("-webkit-stroke-fill-width",toPx(width));
 }
 
 
 Hybrid.getTextboxContent=_hybridGetTextBoxContent;
 Hybrid.getText=_hybridGetTextBoxContent;
 function _hybridGetTextBoxContent(tb)
 {
	if(tb===undefined)
	{	
		 Hybrid.debugmessage("---WARNING: getTextboxContent reports unknown textbox! Request ignored..");
		return;
	}
	switch(tb.kind)
	{
		case "hybridTextInput":
			return tb.jquery.val();
		break;
		case "hybridTextBox":
			//Hybrid.debugmessage("getTextboxContent reports: not the right kind of object: "+tb.kind);
			return tb.jquery.html();
		break;
		default:
			Hybrid.debugmessage("getTextboxContent reports: not the right kind of object: "+tb.kind);
			return null;
		break;
	}
}


 Hybrid.setText=_hybridSetTextBoxContent;
 Hybrid.setTextboxContent=_hybridSetTextBoxContent;
 function _hybridSetTextBoxContent(tb,content)
 {
	if(tb===undefined)
	{	
		 Hybrid.debugmessage("---WARNING: setTextBoxContent reports unknown textbox! Request ignored..");
		return;
	}
	switch(tb.kind)
	{
		case "hybridTextInput":
			tb.jquery.val(content);
		break;
		case "hybridTextBox":
			tb.jquery.html(content);
		break;
		default:
			Hybrid.debugmessage("setTextBoxContent reports: not the right kind of object: "+tb.kind);
	}
}

Hybrid.blurTextField=_hybridBlurTextField;
function _hybridBlurTextField(het)
{
// we might need to set focus to a dummy textbox, to kill any softkeyboard on ipad, but theoretically this should be enough!
	het.jquery.blur();
}

function _hybridDefaultTextChangeListener()
{
	var a;
	a=a+1; // there must be something in here, because the debugmessages get thrown away..
	Hybrid.debugmessage("editable textbox changed how: "+Hybrid.lastTextboxChange);
	Hybrid.debugmessage("textbox changed: "+Hybrid.lastTextboxToChange);
	Hybrid.debugmessage("textbox changed to: "+Hybrid.lastTextboxChangedTo);
}
//Hybrid.textChangeListener=_hybridDefaultTextChangeListener; // this is done by erasepage!
Hybrid.clearTextChangeListener=function ()
{
	Hybrid.textChangeListener=_hybridDefaultTextChangeListener;
}

function _hybridTextboxChanged(tb,how)
{
	Hybrid.lastTextboxChange=how;
	Hybrid.lastTextboxToChange=tb;
	Hybrid.debugmessage("tb: "+tb);
	Hybrid.lastTextboxChangedTo=tb.jquery.html();
	Hybrid.textChangeListener();
}

Hybrid.setTextEditable=_hybridSetEditable;
function _hybridSetEditable(tbx,tf,optblrfnc)
{
 if(tbx.kind!="hybridTextBox")
 {
  Hybrid.debugmessage("_hybridSetEditable reports: not the right kind of object: "+tbx.kind);
  return null;
 }
 if(tf)
 {
	tbx.jquery.attr('contenteditable','true');
	//tbx.jquery.css('position','relative'); // back to the default!
//	position: relative;
	_jQueryAddition_MakeSelectable(tbx.jquery);
	tbx.jquery.on('input change keyup', function() {_hybridTextboxChanged(tbx,"change");} ); // we should let the hybrid know which textbox is being edited!
	tbx.jquery.on('focus', function() {_hybridTextboxChanged(tbx,"focus");} ); // we should let the hybrid know which textbox is being edited!
	tbx.jquery.on('blur', function() {_hybridTextboxChanged(tbx,"blur");} ); // we should let the hybrid know which textbox is being edited!
	tbx.jquery.css("cursor","text"); 
	 /*if(optblrfnc)
	 {
		Hybrid.editableTextBlurFunction=optblrfnc;
		tbx.jquery.blur(_hybridEditableTextBlurFunction);
	 }*/
	Hybrid.debugmessage("setEditable: "+tf);
 }
 else
 {
	tbx.jquery.attr('contenteditable','false');
	tbx.jquery.attr('overflow','hidden'); // back to the default!
	_jQueryAddition_MakeUnselectable(tbx.jquery);
	//tb.jquery.on('keyup change', null ); // we should let the hybrid know which textbox is being edited!
	// cannot unbind the keyup, but should never be fired when unselectable??
	tbx.jquery.css("cursor","default"); 
	//tb.jquery.blur(null); // no action on blur anymore!
	//Hybrid.debugmessage("setEditable: "+tf);
 }
}
Hybrid.editableTextBlurFunction=null; //
function _hybridEditableTextBlurFunction()
{
	if(Hybrid.editableTextBlurFunction!=null)
	{
		Hybrid.editableTextBlurFunction();
	}
}
Hybrid.setTextBoxColor=_hybridsTextBoxColor;
function _hybridsTextBoxColor(o,cs)
{
	o.jquery.css("color",cs);
}

Hybrid.createTextBox=_hybridCreateTextBox;
function _hybridCreateTextBox(layer,x,y,w,h,fontStyle,colorString,alignString,fontSize,initialText)
{
 if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
 {
  Hybrid.debugmessage("createTextBox reports: not the right kind of object: "+layer.kind);
  return null;
 }
 var o={};
 o.initialText=initialText; // keep it for special tricks with editable textboxes..
 o.dynamic_element_counter=0; // they may be nested!
 o.id="textb"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
 //Hybrid.debugmessage("create new textbox: "+o.id);
 var html_string="<div id='"+o.id+"'></div>"
 //Hybrid.debugmessage("create new textbox: "+html_string);
 $(html_string).appendTo(layer.jquery);
  
 o.jquery=$("#"+o.id).css("z-index",layer.dynamic_element_counter);
 o.kind="hybridTextBox";
  // keep ref
 o.jquery.width(toPx(w)).height(toPx(h))
   .css("left",toPx(x)).css("top",toPx(y))
   .css("color",colorString) 
   .css("cursor","default") 
   .css("text-align",alignString) 
   
//   .css("font-weight","normal") // supposedley fixes the cut-off bug in chrome!
   // https://code.google.com/p/googlefontdirectory/issues/detail?id=152 I don't see any difference with Luckiest Guy!
   // there is another issue posted here: https://code.google.com/p/chromium/issues/detail?id=391183
   // this fix doesn't fix anything, but changes the normal behaviour of text, let's not do this right now.
   .css("font-size",toPx(fontSize))
   .css("font-family",fontStyle)
   .html(initialText);
   
  Hybrid.setTextEditable(o,false);  // default it's NOT editable!
 layer.dynamic_element_counter++;
 Hybrid.dynamic_element_counter++; // also increase the global counter.
 return o; // return the object!
}

// jquery plug-in to detect enterkey!
$.fn.enterKey = function (fnc) {
    return this.each(function () {
        $(this).keypress(function (ev) {
            var keycode = (ev.keyCode ? ev.keyCode : ev.which);
            if (keycode == '13') {
                fnc.call(this, ev);
            }
        })
    })
}


Hybrid.setTextInputOnEnter=_hybridsetTextInputOnEnter;
function _hybridsetTextInputOnEnter(layer,data,handler)
{
	 if(layer.kind=="hybridTextInput")
	 {
		layer.jquery.data( "input_identifier", data );
		layer.jquery.enterKey(handler);
	 }
}

Hybrid.createTextInput=_hybridCreateTextInput;
function _hybridCreateTextInput(layer,x,y,w,h,fontStyle,colorString,alignString,fontSize,placeHolder,special,special1,special2,special3)
{
 if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
 {
  Hybrid.debugmessage("createTextInput reports: not the right kind of parent: "+layer.kind);
  return null;
 }
 if(typeof(special)==="undefined")special="";
 if(typeof(special1)==="undefined")special1="";
 if(typeof(special2)==="undefined")special2="";
 if(typeof(special3)==="undefined")special3="";
 var o={};
 o.placeHolder=placeHolder; // keep it for special tricks
 o.dynamic_element_counter=0; // they may be nested!
 o.id="texti"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
 //Hybrid.debugmessage("create new textbox: "+o.id);
 var html_string;
 switch(special)
 {
	case "email":
		html_string="<input type='email' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";
	break;
	case "number":
		html_string="<input type='number' min='"+special1+"' max='"+special2+"' step='"+special3+"' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";
	break;
	case "date":
		html_string="<input type='date' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";
	break;
	case "password":
		html_string="<input type='password' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";
	break;
	default:
		Hybrid.debugmessage("special not recognised: "+special);
		html_string="<input type='text' placeHolder='"+placeHolder+"' id='"+o.id+"'/>";
 }
 //Hybrid.debugmessage("create new textbox: "+html_string);
 $(html_string).appendTo(layer.jquery);  
 o.jquery=$("#"+o.id).css("z-index",layer.dynamic_element_counter);
 o.kind="hybridTextInput";
  // keep ref
 o.jquery.width(toPx(w)).height(toPx(h))
   .css("left",toPx(x)).css("top",toPx(y))
   .css("color",colorString) 
   .css("cursor","default") 
   .css("position","absolute") 
   .css("text-align",alignString) 
   .css("font-size",toPx(fontSize))
   .css("background-color","rgba(0,0,0,0)")
   .css("font-family",fontStyle)
   .css("border","0px");
 layer.dynamic_element_counter++;
 Hybrid.dynamic_element_counter++; // also increase the global counter.
 return o; // return the object!
}
 /*--
 SnoepGames: snoepHybrid cookie
V1.2.0 
---*/
//Local Storage is more secure then cookies (
// WE SHOULD ALSO DO THE NORMAL COOKIE, but take care of XSS attacks
 
 
Hybrid.setCookie=_hybridSetCookieValue
 function _hybridSetCookieValue(id,val){
  if(typeof(Storage)!=="undefined")
  {
  // Code for localStorage/sessionStorage.
	// Store
	localStorage.setItem(id, val);
  }
 };
 
Hybrid.getCookie=_hybridGetCookieValue
function _hybridGetCookieValue(id){
	if(typeof(Storage)!=="undefined")
	{
	  // Code for localStorage/sessionStorage.
		// Store
		return localStorage.getItem(id);
	}
	else
	{
		// Sorry! No Web Storage support..
		return null;
	}
 };
Hybrid.getAllCookieKeys=_hybridGetAllCookieKeys;
function _hybridGetAllCookieKeys(){
	if(typeof(Storage)!=="undefined")
	{
		var list=[];
	  for(var i=0, len=localStorage.length; i<len; i++) 
	  {
			list.push(localStorage.key(i));
	  }
	  return list;
	}else
	{
		return [];
	}
 };
Hybrid.removeCookie=_hybridRemoveCookie;
function _hybridRemoveCookie(key){
	if(typeof(Storage)!=="undefined")
	{
		localStorage.removeItem(key);
	}
 };

  /*--
 SnoepGames: snoepHybrid - server (ajax on javascript!)
 
 HTML5 GAME LIB
 by Hjalmar Snoep
 http://www.snoepgames.nl 
 
 Copyright (c)  2014 Hjalmar Snoep, Snoepgames.  
 http://www.snoep.at
 http://www.makinggames.org/nl/user/hjalmarsnoep
 http://www.youtube.com/user/hjalmarsnoep
 All rights reserved.
 
 V1.2.0 
---*/

Hybrid.callStack={ready:true};


Hybrid.getVars=_hybridGetVarsSync;
function _hybridGetVarsSync(url,data,cb,ecb)
{
	var str=url+"?";
	data.ck=new Date().getTime();
	for(all in data)
	{
		str+=all+"="+data[all]+"&";
	}
	Hybrid.debugmessage("getVars: "+str);


	if(typeof(cb)==="undefined") Hybrid.throwError("getVars requires a callback");
	if(typeof(ecb)==="undefined") Hybrid.throwError("getVars requires an error callback");
	if(Hybrid.callStack.ready!=true)
	{
		Hybrid.debugmessage("overlapping calls, please use getVars only for Sync calling");
		return;
	}else
	{
		Hybrid.callStack.url=url;
		Hybrid.callStack.data=data;
		Hybrid.callStack.cb=cb;
		Hybrid.callStack.ecb=ecb;
		Hybrid.callStack.ready=false;
		Hybrid.callStack.error=false;
		
		$.getJSON( url, data )
		  .done(_hybridHandleAjaxSucces)
		  .fail(_hybridHandleAjaxErrors);
	}
}


Hybrid.setVars=_hybridsetVars; // same as getvars, but no callback or error handling, great for stats and stuff. Just for sending!
function _hybridsetVars(url,data)
{
	var str=url+"?";
	var all; // not setting this got me a bug, because when logging debug this constanty reset the global value of all.. oops..
	data.ck=new Date().getTime();
	for(all in data)
	{
		str+=all+"="+data[all]+"&";
	}
	$.get(url,data); 
	//Hybrid.debugmessage("setVars: "+str);
	
}
function _hybridHandleAjaxSucces(json)
{
	Hybrid.callStack.ready=true;
	Hybrid.callStack.error=false;
	Hybrid.callStack.cb(json);
}
function _hybridHandleAjaxErrors(xhr, ajaxOptions, thrownError) 
{
	Hybrid.callStack.ready=true;
	Hybrid.callStack.error=true;
	Hybrid.callStack.ecb(Hybrid.callStack.url,Hybrid.callStack.data,thrownError,xhr.status);
	Hybrid.debugmessage("calling: "+Hybrid.callStack.ecb);
	Hybrid.debugmessage("Request Failed: "+Hybrid.callStack.url+", "+xhr.status+" "+thrownError+" "+ajaxOptions);
	
//	Hybrid.throwError(_hybridGetVarsURLneededForErrorReporting+", WARNING: "+xhr.status+" "+thrownError);
}
// as we did it usually in Flash, but no arrays possible, so don't use.
Hybrid.getVarsFromServerTextRespons=_hybridGetVarsFromServerTextRespons;
function _hybridGetVarsFromServerTextRespons(str)
{
	var pairs=str.split("&");
	var i;
	var data={};
	for(i=0;i<pairs.length;i++)
	{
		if(pairs[i].indexOf("=")!=-1)
		{
			var val=pairs[i].split("=");
			Hybrid.debugmessage("verbose getVarsFromResponse: "+val[0]+"="+val[1]);
			data[val[0]]=val[1];
		}
	}
	return data;
}

// as we did it usually in Flash, but no arrays possible, so don't use.
Hybrid.navigateTo=_hybridNavigateTo;
function _hybridNavigateTo(str,new_window)
{
	if(typeof(new_window)==="undefined")
	{
		new_window=false;
	}
	if(new_window==false)
	{
		//top.location.href=str; // if they don't allow this, the other one will get them!
		window.location.href=str;
	}else
	{
		window.open(str,'_blank'); // this in theory will open a new window.
	}
}


 /*--
 SnoepGames: snoepHybrid - sprite (css)
 V1.2.0 
---*/
 
// a uses box as a given, but changes kind!
Hybrid.createCssSprite=_hybridcreateCssSprite;
function _hybridcreateCssSprite(layer,ss,item,x,y,f,sx,sy)
{
   if(typeof(f)==="undefined") f=0;
   if(typeof(sx)==="undefined") sx=1;
   if(typeof(sy)==="undefined") sy=sx;
   if(typeof(layer)==="undefined") 
   {
	   Hybrid.debugmessage("No layer specified, createCssSprite..: "+layer.kind);
	   return null;
   }else
   {	
   for(all in layer)
	   Hybrid.debugmessage("layer["+all+"]="+layer[all]);
   }
  if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createCssSprite reports: not the right kind of object: "+layer.kind);
   return null;
  }
  var img=Hybrid.graphics_manifest[ss];
  var s=img.ss[item][f];
  var o=Hybrid.createBox(layer,x-s[5]*sx,y-s[6]*sy,s[2]*sx,s[3]*sy);
  o.dynamic_element_counter=0; // they may be nested!
  o.id="sprite"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  
//  Hybrid.setBoxColor(o,"#fff"); // white background for debugging!
  // now create the box inside the box, we'll use to hold the spritesheet.
  o.ss=Hybrid.createBox(o,0,0,img.w*sx,img.h*sy);
  Hybrid.setBoxImage(o.ss,ss);
//  Hybrid.setBoxColor(o.ss,"#000");
  Hybrid.debugmessage("s: "+s);
  Hybrid.moveBox(o.ss,-(s[0]*sx),-(s[1]*sy));

  o.kind="hybridCssSprite"; // hiJack it!
  // keep ref of x and y!
  o.x=x;
  o.y=y;
  
  return o; // return the object!
 }
 
 /*--
 SnoepGames: snoepHybrid - webview (idea: a iframe, we can set javascript to)
 V1.2.0 
---*/
 
Hybrid.createWebview=_hybridCrWeVw;
function _hybridCrWeVw(l,x,y,w,h,url,co) // configObject NOT supported yet!
{
  if(l.kind!="hybridl" && l.kind!="hybridBox")
  {
     Hybrid.debugmessage("createWebView reports: not attached to the right kind of object: "+l.kind);
	 // throw an error!
     return null;
  }
  var o={};
  o.box=Hybrid.createBox(l,x,y,w,h); // this is the container.
  // there is a fiddle with what we want!
  //http://jsfiddle.net/Masau/7WRHM/
  
  
  o.id="webv"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  o.kind="hybridWebview";
  o.src=url;
  o.co="";
  var html_string='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" src="'+o.src+'" '+o.co+'></iframe>';
  if(o.src=="")
  {
	html_string='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" '+o.co+'></iframe>';
  }
  Hybrid.debugmessage("webview create: "+html_string);
  o.box.jquery.html(html_string);
  o.jquery=$("#"+o.id);
  o.jquery.css("z-index",l.dynamic_element_counter); 
  o.ifr=$("#"+o.id+"_if");

  Hybrid.dynamic_element_counter++; // also increase the global element counter!
//  o.co=""; // default options!
 // if(co!=undefined)
 // {
//	Hybrid.styleWebview(o,co);
 // }
  return o; // return the object!
}
Hybrid.createInternalWebview=_hybridCrIntWeVw;
function _hybridCrIntWeVw(layer,x,y,w,h,cls) // configObject NOT supported yet!
{
   if(layer.kind!="hybridLayer" && layer.kind!="hybridBox")
  {
   Hybrid.debugmessage("createBox reports: not the right kind of object: "+layer.kind);
   return null;
  }
  var o={};
  o.dynamic_element_counter=0; // they may be nested!
  
  o.id="intWebview"+Hybrid.dynamic_element_counter; // use global for counting, or we will have collisions!
  //Hybrid.debugmessage("create new box: "+o.id);
  var html_string="<div id='"+o.id+"' class='"+cls+"'> HTML GOES HERE!</div>";
  //Hybrid.debugmessage("create new textbox: "+html_string);
  $(html_string).appendTo(layer.jquery);
  
  o.jquery=$("#"+o.id);
  o.jquery.css("z-index",layer.dynamic_element_counter);
  o.kind="hybridIntWebview";
  // keep ref of w and h!
  o.w=w;
  o.h=h;
  o.jquery.width(toPx(w)).height(toPx(h))
   .css("left",toPx(x)).css("top",toPx(y));
  layer.dynamic_element_counter++;
  Hybrid.dynamic_element_counter++; // also increase the global element counter!
  return o; // return the object!
}
Hybrid.feedIntWebView=_hybridFeedIntWebview;
function _hybridFeedIntWebview(o,content)
{
	o.jquery.html(content);
}
Hybrid.feedWebView=_hybridFeedWebview;
function _hybridFeedWebview(o,content)
{
	var doc = o.ifr[0].contentWindow.document;
	var $body = $('body',doc);
	$body.html(content);
}
function _hybridresizeWebView(o,w,h)
{
	Hybrid.debugmessage("_hybridresizeWebView took over!");
	//_hybridSizeBox(o.box,w,h);
	 o.w=w;
	 o.h=h;
	 o.ifr.width(toPx(w)).height(toPx(h));
	 o.box.jquery.width(toPx(w)).height(toPx(h));
	 o.box.jquery.width(toPx(w)).height(toPx(h));
	// we might have to fix the inner iframe like this
		//https://www.geeklog.net/forum/viewtopic.php?showtopic=43817
	//iframe.height=window.frames["NAME"].document.body.scrollHeight;
	//box.jquery.height(toPx(h));
	//Hybrid.debugmessage("height of iframe now is:"+box.jquery.height());
}

Hybrid.setWebviewURL=function (o,url){
  if(o.kind!="hybridWebview")
  {
    Hybrid.debugmessage("setWebviewURL reports: not the right kind of object: "+l.kind+" not set to "+url);
	// throw an error?
    return null;
  }
  o.src=url;
  var html_string='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" src="'+o.src+'" '+o.co+'></iframe>';
  o.box.jquery.html(html_string);
};
Hybrid.styleWebview=function (o,co){
	if(o.kind!="hybridWebview")
	{
		Hybrid.debugmessage("setWebviewURL reports: not the right kind of object: "+l.kind+" not set to "+url);
		// throw an error?
		return null;
	}
	o.co="";
	if(co.transparent===true || co.transparant===true)
	{
		o.co+=' frameborder=0 ALLOWTRANSPARENCY="true"';
	}
	if(co.scrolling===true)
	{
		o.co+=' scrolling="auto"';
	}else
	{
		o.co+=' scrolling='+co.scrolling; // auto | yes | no
	}
    var html_string='<iframe style="position:absolute;top:0;left:0;width:100%; height:100%;" id="'+o.id+'_if" src="'+o.src+'" '+o.co+'></iframe>';
	o.box.jquery.html(html_string);
};/*
	init.js (inits all hybrid settings)
*/
	/*---------------------Overriding basic things like manifests etc!----------------------------------------------*/
	Hybrid.stageScale="responsive-width"; // this could also be lineair...?
	Hybrid.app_id="weetwaarjewoont_steenbergen";
	Hybrid.mustBeLandscape=true;
	Hybrid.portraitModeCatchImage; // we can put a picture here, telling the user to reorient..
	//Hybrid.width=1280; // 1024 
	Hybrid.height=1360; // 691  // aim width for interface elements, width will be set by mode responsive-width!
	// experiments with size
	// we have to put the headers on index.php, as THIS has the browsers attention.
	// for good measure we also put the headers on the game.php!
	// // <meta name="viewport" content="user-scalable=no,width=device-width"> 768x519 
	//<meta name="viewport" content="user-scalable=no,width=device-width, initial-scale=1">  1024 x 691
	// via home screen: 1024x748!

	Hybrid.aatd.push("687474703a2f2f7777772e736e6f65702e6174"); //http://www.snoep.at
	//Hybrid.debugmessage("new domain: "+Hybrid.encodeString("http://spel.kijkopsteenbergen.nl"));
	Hybrid.aatd.push("687474703a2f2f7370656c2e6b696a6b6f70737465656e62657267656e2e6e6c");//http://spel.kijkopsteenbergen.nl
	
	//Hybrid.stageColor="#ff0000"; // transparent if you don't set this.
	Hybrid.initPageFunction=initPage;
	Hybrid.loadingProgressFunction=showLoadingProgress;
	
	var colorPalet=[];
	colorPalet.loading_bar="#22aaee";
	var layout={};
	
	var custom_switches=["selectable"]; 
	// these will be gotten in loadInitPage from the url, you can set the to a default, but they WILL be overridden!!

	// AUDIO MANIFEST
	Hybrid.audio_manifest['begin']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	//Hybrid.audio_manifest['buy_house']={vol:1.0,preload:true}; // this file gives problems on android galaxy tab, don't know why?
	Hybrid.audio_manifest['place']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['hint']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['right']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['wrong']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['finished']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	Hybrid.audio_manifest['next_question']={vol:1.0,preload:true}; // music always preload false, it would just take too long!
	// GRAPHICS MANIFEST
	var a;
	Hybrid.graphics_manifest['loading_anim']={src:"loading_anim.gif",w:265,h:200,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['snap']={src:"snap.png",w:2048,h:1361,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['buttons']={src:"buttons.png",w:2048,h:2048,preload: true,kind:"sprite",ss:{}}; // we don't preload the loading anim, that would be dumb!
	a=[[4,4,398,72,0,0,0],[406,4,398,72,0,0,0],[808,4,287,72,0,0,0],[1099,4,287,72,0,0,0],[1390,4,236,72,0,0,0],[1630,4,236,72,0,0,0],[4,80,236,72,0,0,0],[244,80,236,72,0,0,0],[484,80,645,182,0,0,0],[1133,80,645,182,0,0,0],[4,266,855,182,0,0,0],[863,266,855,182,0,0,0],[4,452,435,182,0,0,0],[443,452,435,182,0,0,0],[882,452,146,145,0,0,0],[1032,452,146,145,0,0,0],[1182,452,515,182,0,0,0],[4,638,515,182,0,0,0],[523,638,435,182,0,0,0],[962,638,435,182,0,0,0],[1401,638,435,182,0,0,0],[4,824,435,182,0,0,0],[443,824,103,95,0,0,0],[550,824,103,95,0,0,0],[657,824,8,25,0,0,0],[669,824,599,179,0,-1,2],[1272,824,599,179,0,-1,2],[4,1010,401,80,0,2,2],[409,1010,401,80,0,2,2],[814,1010,780,180,0,2,2],[4,1194,780,180,0,2,2],[788,1194,198,29,0,0,0],[990,1194,198,29,0,0,0],[1192,1194,381,29,0,0,0],[1577,1194,381,29,0,0,0],[4,1378,256,29,0,0,0],[264,1378,256,29,0,0,0],[524,1378,301,29,0,0,0],[829,1378,301,29,0,0,0],[1134,1378,401,80,0,2,2],[1539,1378,401,80,0,2,2],[1944,1378,94,97,0,0,0],[4,1479,94,97,0,0,0],[4,156,72,72,0,0,0],[79,156,72,72,0,0,0],[155,156,72,72,0,0,0],[231,156,72,72,0,0,0]];
		Hybrid.graphics_manifest['buttons'].ss['city']=[a[0],a[1]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['high']=[a[2],a[3]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['stop']=[a[4],a[5]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['contact']=[a[6],a[7]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['new_game']=[a[8],a[9]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue_game']=[a[10],a[11]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['back']=[a[12],a[13]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['hint']=[a[14],a[15]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['answer']=[a[16],a[17]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['continue']=[a[18],a[19]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['play']=[a[20],a[21]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown']=[a[22],a[23]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dropdown_back']=[a[24],a[23]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['akkoord']=[a[25],a[26]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['place']=[a[27],a[28]];// reg x and y =0 for buttons!s!
		Hybrid.graphics_manifest['buttons'].ss['again']=[a[29],a[30]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['dasklaretaal']=[a[31],a[32]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['shapesandsounds']=[a[33],a[34]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['snoepgames']=[a[35],a[36]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['admin']=[a[37],a[38]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['problem']=[a[39],a[40]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['speak']=[a[41],a[42]];// reg x and y =0 for buttons!
		Hybrid.graphics_manifest['buttons'].ss['prev'] = [a[43], a[44]]; // speak and prev next disappeared with the merge, damn!!
		Hybrid.graphics_manifest['buttons'].ss['next'] = [a[45], a[46]]; // reg x and y =0 for buttons!
	Hybrid.graphics_manifest['rotate_device']={src:"rotate_device.jpg",w:480,h:640,preload: false}; // we don't preload the loading anim, that would be dumb!
	Hybrid.graphics_manifest['location1']={src:"getCMSImage.php?id=map&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location2']={src:"getCMSImage.php?id=map&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location3']={src:"getCMSImage.php?id=map&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location4']={src:"getCMSImage.php?id=map&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location5']={src:"getCMSImage.php?id=map&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['location6']={src:"getCMSImage.php?id=map&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['new']={src:"getCMSImage.php?id=houses&img=new",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
	Hybrid.graphics_manifest['start_background']={src:"start_background.png",w:2048,h:1536,preload: true}; 
	Hybrid.graphics_manifest['start_logo']={src:"start_logo.png",w:1087,h:803,preload: true}; 

	
	// TEXT/Language MANIFEST
	Hybrid.disablePageScrolling(); // as a default, we want this to act as a webapp on iPad and other tablets!
	
	/*-------------------------------------------------------------------------------------
	// Show loading page here.
	----------------------------------------------------------------------------------------*/	
	var loading_bar;
	function showLoadingProgress(perc,first_time)
	{
		Hybrid.debugmessage("loading progress is being called.!");
		if(first_time)
		{
			// build up the loading graphics
			Hybrid.erasePage();
			var bg=Hybrid.createLayer();
			
			// set Content
			var loading_anim=Hybrid.createBox(bg,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
			Hybrid.setBoxImage(loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
			Hybrid.createTextBox(bg,0,Hybrid.height/2-30,Hybrid.width,75,'Luckiest Guy',colorPalet.loading_bar,"center",50,"Laden..");
			var loading_back=Hybrid.createBox(bg,Hybrid.width/2-200,Hybrid.height-100,400,25);
			Hybrid.debugmessage("loading_back: "+loading_back);
			Hybrid.setBoxColor(loading_back,"#ffffff");
			// temporary info box for remote debugging!
			//layout.loading_what=Hybrid.createTextBox(bg,Hybrid.width/4,2*Hybrid.height/3,Hybrid.width/2,Hybrid.height/5,'"Lucida Sans Unicode", "Lucida Grande", sans-serif',"#000000","center",30,"Loading");
			// Hybrid.setDebugEchoDiv(layout.loading_what.jquery);
			// layout.loading_text="";
			// Hybrid.setBoxColor(layout.loading_what,"#999999");
			Hybrid.createTextBox(bg,0,Hybrid.height-130,Hybrid.width,75,'Luckiest Guy',"#999999","center",20,"<a href='"+Hybrid.supportlink+Hybrid.app_id+"'>(Meld een probleem)</a>");
			loading_bar=Hybrid.createBox(loading_back,1,1,10,10); // initial size doesn't matter
			Hybrid.setBoxColor(loading_bar,colorPalet.loading_bar);
		}
		// always:	
		Hybrid.sizeBox(loading_bar,perc*(400-2),23);
		// for debugging if loading goes wrong!
		//Hybrid.setText(layout.loading_what,Hybrid.preload_message+"-"+url);
//		layout.loading_text="";
		
		// show text of what we are loading, making it easier to do remote debug on an ipad
		
		
	}

	/*-------------------------------------------------------------------------------------
	// init Functions
	----------------------------------------------------------------------------------------*/	
	function initPage(str)
	{
		// disclaimer first!
		Hybrid.debugmessage("all is loaded, initPage function called."+Hybrid.width+"x"+Hybrid.height);
		// we could check if we are in landscape mode really easy:
		if(Hybrid.width>Hybrid.height)
		{
			// work out where to go!
			
			var goto_what="start";
			if(Hybrid.getCookie("lastpage")!=null)
			{
				var goto_what=Hybrid.getCookie("lastpage");
				
				user.last_visit=new Date().getTime()-parseInt(Hybrid.getCookie("lastvisittime"));
				Hybrid.setCookie("lastvisittime",new Date().getTime());
				Hybrid.debugmessage("last visit was: "+user.last_visit+" ago");
				if(user.last_visit>(30*60*1000)) // 30 minutes then you have to start again.
				{
					Hybrid.debugmessage("last visit was: "+user.last_visit+" ago, so we override the start page.");
					start.init();
				}else
				{
					Hybrid.debugmessage("last page was: "+goto_what+"");
					// we should totally LOGIN now, because everywhere else, we are going to need that info..
					
					// login now and THEN goto quizz
					// let's check if there is a cookie!
					// do ajax call!
					var data={};
					data.naam=Hybrid.getCookie("user_naam");
					data.wachtwoord=Hybrid.getCookie("user_wachtwoord");
					Hybrid.debugmessage("login.php?naam="+data.naam+"&wachtwoord="+data.wachtwoord);
					Hybrid.getVars("login.php",data,init_ServerCallback,init_ServerFail)
				}
			}else
			{
				Hybrid.debugmessage("this is your first time!");
				start.init();
			}
		}
		else
		{
			Hybrid.debugmessage("apparently w x h="+Hybrid.width+","+Hybrid.height+" you need to rotate your device");
			ori_mm.init();
		}
	}

	function init_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			Hybrid.debugmessage("you are in, we have data now.. we save it here for later..");
			quiz.questions=response.questions; // we have that!
			user.data=response.user; // we have this..
			quiz.nr_of_questions=quiz.questions.length; 
			quiz.question_order=response.user.question_order; // saved it for later!
			// check if any of the questions are out of bounds (this happens sometimes when questions get deleted!)
			
			for(var i=0;i<quiz.question_order.length;i++)
			{
				if(quiz.question_order[i]>=quiz.questions.length)
				{
					quiz.question_order[i]=quiz.questions.length-1;
				}
			}
			//Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!
			
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to init-login: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to init-login "+all+"="+response.user[all]);
			}
			switch(parseInt(response.user.plaats))
			{
				case 1:
					Hybrid.graphics_manifest['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
			}
			// all went well, go to the page we were last:
			var goto_what=Hybrid.getCookie("lastpage");
			// and go there
			switch(goto_what)
			{
				case "quiz":
					quiz.init();
				break;
				case "contact":
					contact.init();
				break;
//				case "welcome":
//					wwjw.page_extras="show_welcome";
//					map.init();
//				break;
				case "map":
					map.init();
				break;
				case "high":
					high.init();
				break;
				case "new_game":
					start.init();
					//new_game.init();
				break;
				case "resume_game":
					//resume_game.init();
					start.init();
				break;
				default:
					start.init();
			}
		//----------------------------------------------			
			
		}else
		{
			for(all in response)
				Hybrid.debugmessage(all+"="+response[all]);
			//Hybrid.showWarning("Init quiz mislukt: Combinatie naam en wachtwoord niet gevonden.");
			// no warnning necessary, just no cookie!
			start.init();
	
		}
	}
	function init_ServerFail(response)
	{
		Hybrid.debugmessage("init_ServerFail..");
		Hybrid.showWarning("Geen internet verbinding,\n Probeer later nog eens.");
	}	
	

	
	//HELPER FUNCTIONS AND GLOBALS----------------------------------
	var layout={}; // will be set by each page.
	var palet={};
	var wwjw={};
	wwjw.page_extras="";
	
	palet.dark_blue="#01286f";
	palet.dark_red="#a92c29";
	palet.wrong_text="#951925";
	palet.right_text="#437a40";
	palet.pale_blue="#5594bf";
	palet.grey_blue="#597688";
	palet.pale_green="#c9e5b6";
	palet.green="#96c577";
	palet.map_orange="#df8d91";
	palet.pale_grey="#98a192";
	palet.popup_back="#dddddd";
	palet.pale_gray=palet.pale_grey; // this is a common typo I tend to make..
	
	palet.body="#2f2f2f";
	palet.head=palet.dark_blue;
	palet.pale_yellow="#ffec96";
	palet.back_green="#98c475";
	
	var fonts={body:"Tahoma, Verdana, Segoe, sans-serif", head: "Luckiest Guy"};
	var fontsz={};
	fontsz.highscores_big=75;
	fontsz.highscores_mid=50;
	fontsz.highscores_small=42;
	fontsz.quiz_big=75;
	fontsz.quiz_mid=50;
	fontsz.quiz_small=42;
	fontsz.quiz_very_small=35;
	fontsz.edit=68;
	fontsz.head=42;
	fontsz.menu=30;
	fontsz.body=26.5;
	
	function helpers_createStartSchermBack()
	{
		// must be the first function you call.
		// positions the background, work OVER it on a new layer.
		// now create and set the layer
		layout.back=Hybrid.createLayer();
	
		// we set the size SO, that the image centered box will display no matter WHAT!
		
		var container={}; // in this case the hybrid
		var box={}; // in this case the total map
		var content={}; // in this case part of the map!
		container.x=0;
		container.y=0;
		container.w=Hybrid.width;
		container.h=Hybrid.height;
		container.s=1;

		box.x=0;
		box.y=00;
		box.w=2048;
		box.h=1536;
		box.s=1; // we need to calculate THIS from content!
				
		content.x=158;
		content.y=450;
		content.w=1788;// expressed in pixels of box!
		content.h=824;
		content.s=1;
		
		// do calculation!
		var fx=container.w/content.w;
		var fy=container.h/content.h;
		var f=fx;
		if(fy<fx) f=fy;
		f=f*0.96; // keep some margin around!
		var sized={};
		sized.w=content.w*f;
		sized.h=content.h*f;
		sized.x=content.x*f;
		sized.y=content.y*f;
		// set position and scale of box so that content is centered in container!
		box.s=f;
		box.x=-sized.x+(container.w-sized.w)/2;//-sized.x;
		box.y=-sized.y+(container.h-sized.h)/2;

		var w,h,x,y;
		// previous (simple) formula
//		f=2048/w;
//		w=2048*f;
//		h=1536*f;
//		x=0;
//		y=h-Hybrid.width;

		w=2048*f;
		h=1536*f;
		x=-sized.x+(container.w-sized.w)/2;//-sized.x;
		y=-sized.y+(container.h-sized.h)/2;

		layout.back_image=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.back,"#98c475"); // this should be set to cover all, but that's for later!
		
		Hybrid.setBoxImage(layout.back_image,"start_background"); // this should be set to cover all, but that's for later!

		
	}

	
	//disclaimer----------------------------------
	var disclaimer={};
	disclaimer.init=initdisclaimer;
	disclaimer.framecounter=0;
	disclaimer.buttons_Alpha=0;
	disclaimer.state="just_started";
	disclaimer.hasPopup=false;
	
	function initdisclaimer()
	{
		var data={};
		data.page="disclaimer";
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);
		Hybrid.debugmessage("DISCLAIMER called!");
		Hybrid.resizeFunction=handleResizedisclaimer;
		handleResizedisclaimer(); // this builds the page 
	}
	function handleResizedisclaimer()
	{
		Hybrid.debugmessage("pagedisclaimer build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=1800;
		h=1200;
		x=100;
		y=Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,"rgba(195,228,173,0.8)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		


		x=100;
		y=100;
		w=w-100;
		h=200;
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,fonts.head,palet.head,"center",fontsz.quiz_big,"Cookies & Disclaimer");
		
		x=100;
		y=200;
		w=w-100;
		h=500;
		string="";
		string+="<h1>COOKIEWETGEVING</h1>";
		string+="<h3>Verplichting tot weergeven cookies</h3>";
		string+="<p>De Nederlandse Telecommunicatiewet schrijft voor dat gebruikers van websites toestemming moeten geven voor het plaatsen en gebruiken van cookies. ";
		string+="Cookies zijn kleine tekstbestanden die bij een bezoek aan een website naar uw computer worden gestuurd en worden uitgelezen door de browser bij ";
		string+="het openen van een internetpagina. Door middel van het plaatsen van cookies kunnen internetgebruikers worden geïdentificeerd, voorkeursinstellingen ";
		string+="behouden blijven en kan uiteenlopende informatie verzameld worden. Er bestaan directe en indirecte cookies, ook wel first- en third party cookies genoemd.";
		string+="</p>";

		string+="<h2>Weet Waar Je Woont -Statistieken</h2>";
		string+="<p>Via deze website worden cookies geplaatst om statistieken van de website te verzamelen en de beheerder van de website een duidelijk beeld";
		string+="te geven van de bezoekersstromen op de website.";
		string+="Aan de hand van deze informatie kan de maker de website verbeteren en het gebruiksgemak verhogen.";
		string+="</p>";

		string+="<h2>Weet Waar Je Woont -Inloggegevens</h2>";
		string+="<p>Deze website plaatst een cookie om het onthouden van uw inloggegevens mogelijk te maken. ";
		string+="Deze wordt niet verwijderd aan het einde van een sessie zodat de gebruiker bij het volgende bezoek aan de website niet ";
		string+="opnieuw zijn accountgegevens hoeft in te typen.";
		string+="</p>";

		string+="<h1>BEPERKING AANSPRAKELIJKHEID</h1>";
		string+="<h3>Gebruik van deze toepassing (Weet Waar Je Woont)</h3>";
		string+="<p>Door gebruik te maken van deze software, gaat u akkoord met deze voorwaarden. </p><p>";
		string+="De informatie op deze website is uitsluitend bedoeld als vermaak en wordt u aangeboden als service. ";
		string+="Er kunnen geen rechten aan de informatie/diensten op deze website worden ontleend.";
		string+="Hoewel de maker zorgvuldigheid in acht neemt bij het samenstellen en onderhouden van deze toepassing en de";
		string+="daarop aangesloten website en daarbij gebruik maakt van bronnen die betrouwbaar geacht worden, kan ";
		string+="hij niet instaan voor de juistheid, volledigheid en actualiteit van de geboden informatie.";
		string+="</p><p>";
		string+="De makers garanderen evenmin dat deze website foutloos of ononderbroken zal functioneren. ";
		string+="De makers wijzen iedere aansprakelijkheid ten aanzien van de juistheid, volledigheid, actualiteit van de geboden informatie en ";
		string+="het (ongestoord) gebruik van deze website uitdrukkelijk van de hand.";
		string+="</p>";

		string+="<h3>Informatie van derden</h3>";
		string+="<p>";
		string+="De maker van deze website heeft geen invloed op omstandigheden op de server, zoals hosting en geïnstalleerde versies van gebruikte software (bijvoorbeeld: GD, PHP, APACHE etc). ";
		string+="De maker heeft geen invloed op externe links. Wanneer de makers links naar websites van derden (bijv jquery- javascript library of youtube) ";
		string+="weergeven of gebruiken, betekent dit niet dat de op of via deze websites aangeboden producten of diensten door hem worden aanbevolen. ";
		string+="Deze informatie is door zijn aard aan verandering onderhevig. ";
		string+="</p><p>";
		string+="De makers aanvaarden geen aansprakelijkheid en geen enkele verantwoordelijkheid voor de inhoud, ";
		string+="het gebruik of de beschikbaarheid van websites waarnaar wordt verwezen of die verwijzen naar deze";
		string+="website. Het gebruik van dergelijke links (als aanwezig op deze websiteis voor eigen risico.";
		string+="De informatie op dergelijke websites is door de makers niet nader beoordeeld op juistheid, redelijkheid, actualiteit, aanstootgevendheid of volledigheid.";
		string+="</p>";

		string+="<h1>Verantwoordelijkheden gebruiker</h1>";
		string+="<h3>Veilig en schoon</h3>";
		string+="<p><ul>";
		string+="<li>Hou wachtwoorden en accounts prive.</li>";
		string+="<li>Gebruik geen onbetamelijke taal.</li>";
		string+="<li>Speel niet vals.</li>";
		string+="<li>Gebruik een virusscanner.</li>";
		string+="</ul>";
		string+="</p>";

		string+="<h3>Beperkingen gebruik van deze software (licentie)</h3>";
		string+="<p>";
		string+="De maker behoudt zich alle intellectuele eigendomsrechten en andere rechten voor met betrekking tot de software nodig ";
		string+="voor het functioneren van deze website. Het is niet toegestaan deze software te kopiëren, te downloaden of op enigerlei wijze openbaar ";
		string+="te maken, te verspreiden of te verveelvoudigen zonder voorafgaande schriftelijke toestemming van de makers of de rechtmatige toestemming ";
		string+="van de rechthebbende. ";
		string+="</p><p>";
		string+="U mag informatie op deze website wel afdrukken en/of downloaden voor eigen persoonlijk gebruik.";
		string+="</p>";

		string+="<h3>Beperkingen gebruik van de services</h3>";
		string+="<p>";
		string+="U mag niet proberen in te breken in het systeem (de server-backend).";
		string+="Gedetecteerde pogingen daartoe kunnen leiden tot onmiddelijke verbanning van het systeem en verwijdering van het account zonder opgaaf van reden.";
		string+="</p>";

		string+="<h3>Wijzigingen</h3>";
		string+="<p>";
		string+="De makers behouden zich het recht voor de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, te allen tijde te wijzigen zonder hiervan nadere aankondiging te doen. Het verdient aanbeveling periodiek na te gaan of de op of via deze website aangeboden informatie, met inbegrip van de tekst van deze disclaimer, is gewijzigd.";
		string+="Voor inzendingen geldt, dat de makers geen garantie geven voor de beschikbaarheid van de inzendingen, een nieuwe versie van de software kan de inzending wellicht vernietigen.";
		string+="</p>";

		string+="<h3>Toepasselijk recht</h3>";
		string+="<p>";
		string+="Op deze website en de disclaimer is het Nederlands recht van toepassing. Alle geschillen uit hoofde van of in verband met deze disclaimer zullen bij uitsluiting worden voorgelegd aan de bevoegde rechter in Nederland.";
		string+="</p>";

		layout.disclaim_text=Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		Hybrid.makeScrollable(layout.disclaim_text,true);
		Hybrid.setPadding(layout.disclaim_text,0,30,30,30);
		Hybrid.setBoxColor(layout.disclaim_text,palet.pale_green);
		 
		
		string="<p>Door via deze website aangeboden service te gebruiken, verklaart u zich akkoord met de toepasselijkheid van deze disclaimer en ons cookiebeleid.</p>";
		string+="<br>";
		string+="<p>Ik heb bovenstaande informatie goed gelezen en ga akkoord</p>";

		y+=h+70;
		x+=30;
		h=180;
		w-=30;
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		
		
		// create menubutton disclaimer
		//w=Hybrid.graphics_manifest['buttons'].ss['disclaimer'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['disclaimer'][0][3];
		//x=Hybrid.width-w-60;
		//y=60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"disclaimer","button_disclaimer",handleButtonsdisclaimer);

		// create button akkoord
		w=Hybrid.graphics_manifest['buttons'].ss['akkoord'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['akkoord'][0][3];
		x=700;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"akkoord","button_akkoord",handleButtonsdisclaimer);
		
		// create button stoppen
		w=Hybrid.graphics_manifest['buttons'].ss['back'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['back'][0][3];
		x=Hybrid.width-w-60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"back","button_back",handleButtonsdisclaimer);
		// create button new_game 
		//w=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][3];
		//x=60;
		//y=Hybrid.height-h-60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",handleButtonsdisclaimer);

		x=162;
		y=50; // position to left.
		w=405;
		h=301; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
		
	
	}
	function handleButtonsdisclaimer(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_back":
				start.init();
			break;				
			case "button_akkoord":
				Hybrid.setCookie("wwjw_disclaimer","1");
				switch(user.refer_to)
				{
					case "new":
						new_game.init();
					break;
					case "resume":
						resume_game.init();
					break;
				}
			break;				
			default:
				Hybrid.debugmessage("handleButtonsdisclaimer: "+label);
		}
	}
	

	// User functions----------------------------------
	var user={};
	
		// all that we do on the user, we do here. There aren't any user pages, mind you..
		// this is a model object.


	// the user contains:
	//user.last_visit (dt of last visit!) in ms.. (set in init!)
	//
	// user.data (set in init!)
	// CONTAINING
	/*
		{
			"naam": "nieuw",
			"wachtwoord": // this is only available directly from the cookie!
			"school": "98sdyvj",
			"groep": "3",
			"plaats": "3",
			"progress": 5,
			"question_order": [0, 3, 2, 4, 1],
			"punten": 100,
			"stenen": 20,
			"gekochtehuizen": [
				{
					"id": "1GOpJsU130",
					"lx": 937,
					"ly": 938
				}, 
				{
					"id": "fOC1afuLwj",
					"lx": 1286,
					"ly": 1198
				}],
			"hints": [0, 0, 1, 0, 0],
			"succes": 1
		}
*/	
	
	
	
	//STARTSCHERM----------------------------------
	var start={};
	start.init=initStart;
	start.shown_animation=false;
	var heard_start_up_sound=false;
	function initStart()
	{
		if(heard_start_up_sound!=true)
		{
			Hybrid.playSound("begin");
			heard_start_up_sound=true;
			// track unique visitors!
			var data={};
			// gather information about the visitor!!
			data.unique=0;
			data.stat="visitors";
			data.online=navigator.onLine;
			data.language=navigator.language;
			data.platform=navigator.platform;
			data.appName=navigator.appName;
			data.appVersion=navigator.appVersion;
			data.cookieEnabled=navigator.cookieEnabled;
			data.maxTouchPoints=navigator.maxTouchPoints;
			if(Hybrid.getCookie("steenbergen")==null)
			{
				Hybrid.setCookie("steenbergen",1)
				data.unique=1;
			}
			Hybrid.setVars("add_stat.php", data);
		}
		Hybrid.debugmessage("START called!");
		Hybrid.setCookie("lastpage","start");
		Hybrid.resizeFunction=handleResize;
		handleResize(); // this builds the page AND redraws the stage with the initial puppet!
	}
	function handleResize()
	{
		Hybrid.debugmessage("ready for first page:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		// now create and set the layer
		layout={}; // erase any old layout!
		helpers_createStartSchermBack();
		
		// now create all buttons to appear a bit later!
		var w,h,x,y,f;
		layout.buttons=Hybrid.createLayer();
		// create menubutton contact
		w=Hybrid.graphics_manifest['buttons'].ss['contact'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['contact'][0][3];
		x=Hybrid.width-w-60;
		y=60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"contact","button_contact",handleButtonsStart);
		
		// create button continue_game
		w=Hybrid.graphics_manifest['buttons'].ss['continue_game'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue_game'][0][3];
		x=Hybrid.width-w-60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue_game","button_continue_game",handleButtonsStart);
		// create button new_game 
		w=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][3];
		x=60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",handleButtonsStart);

		// place logo smack in the middle!
		w=Hybrid.graphics_manifest['start_logo'].w;
		h=Hybrid.graphics_manifest['start_logo'].h;
		x=Hybrid.width/2-w/2;
		y=138; // from layout!
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
	
		if(!start.shown_animation)
		{
			start.shown_animation=true;
			Hybrid.setBoxAlpha(layout.buttons,0.0); // this one fades in after a while..
			start.framecounter=0;
			start.buttons_Alpha=0; // buttons_alpha will be only set to 0 once!
			start.state="just_started";
			start.framecounter=0;
			start.state="wait_fade_in";
			Hybrid.startLoop(startPageLoop,1000/25);
		}else
		{
			start.state="done";
		}
	}
	function startPageLoop()
	{
		switch(start.state)
		{
			case "wait_fade_in":
				start.framecounter++;
				if(start.framecounter>10)
				{
					start.framecounter=0;
					start.state="fade_in";
				}
			break;
			case "fade_in":
				start.buttons_Alpha+=0.1;
				if(start.buttons_Alpha>=1)
				{
					Hybrid.setBoxAlpha(layout.buttons,1); // this one fades in after a while..
					start.state="done";
				}else
				{
					Hybrid.setBoxAlpha(layout.buttons,start.buttons_Alpha); // this one fades in after a while..
				}
			break;
		}
	}
	function handleButtonsStart(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_contact":
				Hybrid.stopLoop();
				contact.init();
			break;				
			case "button_continue_game":
				//welcome.init();
				resume_game.init();
				//map.init();
			break;				
			case "button_new_game":
				//quiz.init();
				new_game.init();
			break;		
			default:
				Hybrid.debugmessage("handleButtonsStart: "+label);
		}
	}
	

	//CONTACT----------------------------------
	var contact={};
	contact.init=initContact;
	contact.framecounter=0;
	contact.buttons_Alpha=0;
	contact.state="just_started";
	contact.hasPopup=false;
	
	function initContact()
	{
		var data={};
		data.page="contact";
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);

		Hybrid.debugmessage("START  called!");
		Hybrid.setCookie("lastpage","contact");

		Hybrid.resizeFunction=handleResizeContact;
		handleResizeContact(); // this builds the page 
	}
	function handleResizeContact()
	{
		Hybrid.debugmessage("pageContact build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=900;
		h=1020;
		x=100;
		y=Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,"#c9e5b6"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		
		
		x=100;
		y=170;
		w=w-200;
		h=700;
		string="";
		string+="Dit spel is tot stand gekomen op initiatief van het Platform Kunst en Cultuur Steenbergen. Talloze vrijwilligers, al dan niet via de heemkundige kringen,  de stichting stadsarcheologie of de dorpsraden, hebben bijgedragen aan de inhoud van dit spel. Het spel is financieel mede mogelijk gemaakt door de Kiwanis, Rotary Steenbergen en Kies Best, Kies West en Gemeente Steenbergen.";
//		string+="Teksten: <a href='http://www.dasklaretaal.nl' onClick='handleButtonsContact(\"button_dasklaretaal\")' target='_blank'>Dasklare Taal</a><br>";
//		string+="Ontwerp en illustraties: <a href='http://www.colorsandshapes.nl' target='_blank'>colorsandshapes.nl</a><br>";
//		string+="Ontwikkeling: <a href='http://www.snoepgames.nl' target='_blank'>www.Snoepgames.nl</a><br>";
//		string+="<br>";
//		string+="Met dank aan: .......<br>";
//		string+="<br>";
//		string+="<br>";
//		string+="<h1>Heb je vragen of suggesties?</h1>";
//		string+="Telefoon 06 - 41311612";
//		string+="<h1>Werkt er iets niet:</h1>";
//		string+="<a href='"+Hybrid.supportlink+Hybrid.app_id+"' target='_top'>Meld hier een probleem</a>";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		var link_factor=1.4;
		 // put some buttons over this, to make it possible to connect on an iPad. Don't know why it wouldn't but hey..
		 y+=320;
		 w=Hybrid.graphics_manifest['buttons'].ss['dasklaretaal'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['dasklaretaal'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"dasklaretaal","button_dasklaretaal",handleButtonsContact);
		 
		 y+=60;
		 w=Hybrid.graphics_manifest['buttons'].ss['shapesandsounds'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['shapesandsounds'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"shapesandsounds","button_shapesandsounds",handleButtonsContact);
		 
		 y+=60;
		 w=Hybrid.graphics_manifest['buttons'].ss['snoepgames'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['snoepgames'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"snoepgames","button_snoepgames",handleButtonsContact);

		 y+=60;
		 w=700;
		 h=200;
 		 string="Mocht u opmerkingen hebben over het spel dan kunt u contact opnemen via";
		 Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		 y+=70;
		 w=Hybrid.graphics_manifest['buttons'].ss['admin'][0][2]*link_factor;
		 h=Hybrid.graphics_manifest['buttons'].ss['admin'][0][3]*link_factor;
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"admin","button_admin",handleButtonsContact);

		 y+=70;
		 w=700;
		 h=200;
 		 string="Voor technische problemen";
		 Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);

		 y+=40;
		 w=Hybrid.graphics_manifest['buttons'].ss['problem'][0][2];
		 h=Hybrid.graphics_manifest['buttons'].ss['problem'][0][3];
   		 Hybrid.createSpriteButton(layout.wit_vlak,x,y,w,h,'buttons',"problem","button_problem",handleButtonsContact);
		 
		// create menubutton contact
		//w=Hybrid.graphics_manifest['buttons'].ss['contact'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['contact'][0][3];
		//x=Hybrid.width-w-60;
		//y=60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"contact","button_contact",handleButtonsContact);
		
		// create button stoppen
		w=Hybrid.graphics_manifest['buttons'].ss['back'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['back'][0][3];
		x=Hybrid.width-w-60;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"back","button_back",handleButtonsContact);
		// create button new_game 
		//w=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][2];
		//h=Hybrid.graphics_manifest['buttons'].ss['new_game'][0][3];
		//x=60;
		//y=Hybrid.height-h-60;
		//Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"new_game","button_new_game",handleButtonsContact);

		x=162;
		y=172; // position to left.
		w=405;
		h=301; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
		
	
	}
	function handleButtonsContact(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_problem":
				window.open(
				  Hybrid.supportlink+Hybrid.app_id,
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;			
			case "button_admin":
				window.open(
				  "http://spel.kijkopsteenbergen.nl/contact",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;				
			case "button_dasklaretaal":
				window.open(
				  "http://www.dasklaretaal.nl",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;							
			case "button_shapesandsounds":
				window.open(
				  "http://www.colorsandshapes.nl",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;							
			case "button_snoepgames":
				window.open(
				  "http://www.snoepgames.nl",
				  '_blank' // <- This is what makes it open in a new window.
				);
			break;				
			
			case "button_back":
				start.init();
			break;				
			case "button_continue_game":
				//continue_game.init();
			break;				
			case "button_new_game":
				//new_game.init();
			break;		
			default:
				Hybrid.debugmessage("handleButtonsContact: "+label);
		}
	}
	

	//new_game----------------------------------
	var new_game={};
	new_game.init=initnew_game;
	new_game.framecounter=0;
	new_game.buttons_Alpha=0;
	new_game.state="just_started";
	new_game.form={naam:"",wachtwoord:"",school:-1,groep:-1,plaats:-1,category:-1};
	new_game.cms_data={};
	
	// moet zijn
	//De Nieuwe Veste
	//Maria Regina
	//Gumarusschool
	//Merijntje
	//De Regenboog
	//Petrus en Paulusschool
	//Groen van Prinsterer
	//Pius X
	//De Zonneberg
	//'t Ravelijn
	//niet van toepassing

// over 	                          //{label:"Prinsentuin Andel",id:"sdfrr"},
							  //{label:"Kamperfoelieschool",id:"s89df9h"},
							  //{label:"Stichting Halt",id:"s89dfscv469h"},
							  //{label:"Fatimaschool",id:"x89ysi"},
							  //{label:"Prinsentuin Halsteren",id:"w3sv09843"},
							  //{label:"Prinsentuin College",id:"sdf56ijiu"},
							  //{label:"Steenbergen Basisonderwijs",id:"sdifhoe"},
							  //{label:"Mollerlyceum",id:"spdife"},

	
	new_game.cms_data.school=[
							  {label:"De Nieuwe Veste",id:"sdif4356srhe"},
							  {label:"Maria Regina",id:"sdiofhoe"},
							  {label:"Gummarusschool",id:"sd56pfioei"},
							  {label:"Merijntje",id:"idfhrs"},
							  {label:"Regenboog, De",id:"sd83ls"},
							  {label:"De zonneberg",id:"dfoihsue"},
							  {label:"Petrus en Paulusschool",id:"78sd3ogosd"},
							  {label:"Groen van Prinsterer",id:"98sdyvj"},
							  {label:"Pius X",id:"fgf45uh"},
							  {label:"niet van toepassing",id:"666"}];
	new_game.cms_data.groep=[{label:"Groep 1",id:1},{label:"Groep 2",id:2},{label:"Groep 3",id:3},{label:"Groep 4",id:4},{label:"Groep 5",id:5},{label:"Groep 6",id:6},{label:"Groep 7",id:7},{label:"Groep 8",id:8},{label:"niet van toepassing",id:"666"}];
	new_game.cms_data.category=cms.tags;
	console.log("CMS.tags="+JSON.stringify(cms.tags));
	/* 
	https://github.com/HjalmarSnoep/MGCMS-steenbergen-/issues/17
		CMS.tags=
		{
			"0":{"id":"4","label":"Natuur","questions":80},
			"1":{"id":"2","label":"Bedrijven","questions":97},
			"2":{"id":"1","label":"Historie","questions":124},
			"3":{"id":"3","label":"Maatschappij","questions":111},
			"4":{"id":"5","label":"Kruisland","questions":0},
			"5":{"id":"6","label":"Steenbergen","questions":0},
			"6":{"id":"7","label":"Dinteloord","questions":0},
			"7":{"id":"8","label":"De Heen","questions":0},
			"8":{"id":"9","label":"Nieuw-Vossemeer","questions":0},
			"9":{"id":"10","label":"Welberg","questions":1},
			"10":{"id":"ambachten","label":"ambachten","questions":10},
			"11":{"id":"tweedewereldoorlog","label":"Tweede Wereldoorlog","questions":0},
			"12":{"questions":0},
			"13":{"id":"sport","label":"Sport","questions":0},
			"14":{"id":"middeleeuwen","label":"Middeleeuwen","questions":0},
			"15":{"id":"westbrabantsewaterlinie","label":"West-Brabantse Waterlinie","questions":0},
			"16":{"id":"industrilerevolutie","label":"Industriële Revolutie","questions":0},
			"17":{"id":"watersnoodramp","label":"Watersnoodramp","questions":0},
			"18":{"id":"1950totnu","label":"1950 tot nu","questions":0},
			"19":{"id":"geschiedenis","label":"Geschiedenis"},
			"20":{"id":"geschiedenis","label":"Geschiedenis"}
		}
	
	// but SHOULD be (with release data):
		[
		{"id":"4","label":"Natuur","questions":76},
		{"id":"2","label":"Bedrijven","questions":95},
		{"id":"1","label":"Historie","questions":111},
		{"id":"3","label":"Maatschappij","questions":102},
		{"id":"5","label":"Kruisland","questions":1},
		{"id":"6","label":"Steenbergen","questions":0},
		{"id":"7","label":"Dinteloord","questions":0},
		{"id":"8","label":"De Heen","questions":0},
		{"id":"9","label":"Nieuw-Vossemeer","questions":0},
		{"id":"10","label":"Welberg","questions":0}
		]
	*/
	
	for(var i=new_game.cms_data.category.length-1;i>=0;i--)
	{
		console.log("new_game.cms_data.category["+i+"]="+JSON.stringify(new_game.cms_data.category[i]));
		if(typeof(new_game.cms_data.category[i].questions)=="undefined")
		{
			new_game.cms_data.category.splice(i,1); // remove it!
		}else{
			if(new_game.cms_data.category[i].questions<30)
			{
				new_game.cms_data.category.splice(i,1); // remove it!
			}else{
				new_game.cms_data.category[i].label+=" (30/"+new_game.cms_data.category[i].questions+" vragen)";
			}
		}
	}
	new_game.cms_data.category.push({label:"Alles",id:-1});
	// copy it from CMS.tags set in script at top of page.php (the gamepage)
	
	new_game.cms_data.plaats=[{label:"Steenbergen",id:1},{label:"De Heen",id:2},{label:"Nieuw Vossemeer",id:3},{label:"Kruisland",id:4},{label:"Dinteloord",id:5},{label:"Welberg",id:6}];
	
	function initnew_game()
	{
		//Hybrid.setCookie("wwjw_disclaimer","0"); // I want to see it to debug it, uncomment this!
		if(Hybrid.getCookie("wwjw_disclaimer")!="1")
		{
			Hybrid.debugmessage("you have not seen the disclaimer yet!");
			user.refer_to="new";
			disclaimer.init();
		}else
		{
			var data={};
			data.page="new_game";
			data.stat="page";
			Hybrid.setVars("add_stat.php", data);
		
			Hybrid.playSound("next_question");
			Hybrid.debugmessage("START  called!");
			Hybrid.setCookie("lastpage","new_game");
			
			// get some stuff from the cookie!
			new_game.form.naam="";
			new_game.form.school=-1;
			new_game.form.groep=-1;
			new_game.form.plaats=-1;
			new_game.form.category=-1;
			if(Hybrid.getCookie("user_naam")!==null) new_game.form.naam=Hybrid.getCookie("user_naam");
			if(Hybrid.getCookie("user_school")!==null) new_game.form.school=Hybrid.getCookie("user_school");
			if(Hybrid.getCookie("user_groep")!==null) new_game.form.groep=Hybrid.getCookie("user_groep");
			if(Hybrid.getCookie("user_plaats")!==null) new_game.form.plaats=Hybrid.getCookie("user_plaats");
			
			Hybrid.resizeFunction=new_gameHandleResize;
			new_gameHandleResize(); // this builds the page 
			new_game_TextChangeListener();
		}
	}
	function new_game_TextChangeListener()
	{
		var on_page=true;
		if(typeof(layout.naam_text)!="undefined" && typeof(layout.wachtwoord_text)!="undefined")
		{
			new_game.form.naam=Hybrid.getText(layout.naam_text);
			new_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);
			//Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER : "+new_game.form.naam+","+new_game.form.wachtwoord);
		}else{
			on_page=false;
		}
		if(on_page)
			window.requestAnimationFrame(new_game_TextChangeListener);
	}
	function new_gameHandleResize()
	{
		Hybrid.debugmessage("pagenew_game build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=900;
		h=1020;
		x=100;
		y=345; //Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		
		
		x=100;
		y=779/2; // measured 779 in psd. // why divided by two is a little mystery here..
		w=w-200;
		h=700;
		string="";
		string+="<h1>Weet jij waar je woont?</h1>";
		string+="Ja, de naam van je stad of dorp, die ken je wel. Maar wat weet je nu echt over jouw plaats? En over de zes kernen die samen de gemeente Steenbergen vormen? In ieder geval weet je lang niet alles. Speel het spel ‘Weet waar je woont’ en dat verandert vanzelf. Beantwoord de vragen en leer alles over de geschiedenis van jouw gemeente. Bovendien krijg je voor ieder goed antwoord punten waarmee je gebouwen of attracties kunt kopen. Plaats die in de plattegrond en bouw jouw ideale woonplaats. Voor je begint, moet je rechts eerst even je gegevens invullen en een wachtwoord aanmaken. Want je wilt toch niet dat iemand met jouw droomstad aan de haal gaat?";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		 
		 
		 // get the split and size of the button bit!!
		layout.split_x=1040;
		layout.split_w=Hybrid.width-layout.split_x;
		layout.button_margin_y=114;
		 
		// create button verder
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=layout.split_x+layout.split_w/2-w/2;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue","button_continue_new_game",new_gameHandleButtons);

		x=148;
		y=78; // position to left.
		w=810;
		h=617; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
	
		// now create the controls for new game..
		w=layout.split_w+10; // we want the bevel to look right!
		h=94;
		x=layout.split_x;
		y=345; //Hybrid.height-h;
		layout.naam=Hybrid.createBox(layout.buttons,x,y,w,h)
		Hybrid.setBoxColor(layout.naam,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.naam,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.naam_text=Hybrid.createTextInput(layout.naam,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"naam");
		// auto fill met restored values;
		if(new_game.form.naam!="")
		{
			Hybrid.setText(layout.naam_text,new_game.form.naam);
			Hybrid.setTextBoxColor(layout.naam_text,palet.dark_blue);
		}

//		Hybrid.setTextEditable(layout.naam_text,true);// hoeft niet voor textinput
		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+1*layout.button_margin_y; //Hybrid.height-h;
		layout.wachtwoord=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wachtwoord,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.wachtwoord_text=Hybrid.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord");
//		Hybrid.setTextEditable(layout.wachtwoord_text,true);// hoeft niet voor textinput
		if(new_game.form.wachtwoord!="")
		{
			Hybrid.setText(layout.wachtwoord_text,new_game.form.wachtwoord);
			Hybrid.setTextBoxColor(layout.wachtwoord_text,palet.dark_blue);
		}
		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+2*layout.button_margin_y; //Hybrid.height-h;
		layout.school=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.school,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.school,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.school_text=Hybrid.createTextBox(layout.school,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- school -");
		Hybrid.makeButton(layout.school_text, "button_dropdown_school", new_gameHandleButtons); // also right if they hit the text itself!
		if(new_game.form.school!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("new_game.form.school"+new_game.form.school);
			var label=new_game_GetLabelFromId("school",new_game.form.school);
			Hybrid.setText(layout.school_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_school",new_gameHandleButtons);
		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+3*layout.button_margin_y; //Hybrid.height-h;
		layout.groep=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.groep,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.groep,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.groep_text=Hybrid.createTextBox(layout.groep,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- groep -");
		Hybrid.makeButton(layout.groep_text, "button_dropdown_groep", new_gameHandleButtons); // also right if they hit the text itself!
		if(new_game.form.groep!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("new_game.form.groep"+new_game.form.groep);
			var label=new_game_GetLabelFromId("groep",new_game.form.groep);
			Hybrid.setText(layout.groep_text,label);
		}
		
		
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_groep",new_gameHandleButtons);
	
		// plaats
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+4*layout.button_margin_y; //Hybrid.height-h;
		layout.plaats=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.plaats,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.plaats,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.plaats_text=Hybrid.createTextBox(layout.plaats,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- plaats -");
		Hybrid.makeButton(layout.plaats_text, "button_dropdown_plaats", new_gameHandleButtons); // also right if they hit the text itself!
		if(new_game.form.plaats!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("new_game.form.plaats"+new_game.form.plaats);
			var label=new_game_GetLabelFromId("plaats",new_game.form.plaats);
			Hybrid.setText(layout.plaats_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_plaats",new_gameHandleButtons);
		
		// category
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+5*layout.button_margin_y; //Hybrid.height-h;
		layout.category=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.category,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.category,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.category_text=Hybrid.createTextBox(layout.category,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- Onderwerpen -");
		Hybrid.makeButton(layout.category_text, "button_dropdown_category", new_gameHandleButtons); // also right if they hit the text itself!
		if(new_game.form.category!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("new_game.form.category"+new_game.form.category);
			var label=new_game_GetLabelFromId("category",new_game.form.category);
			Hybrid.setText(layout.category_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_category",new_gameHandleButtons);
		
		// precreate the feedback..
		x=layout.split_x;
		y=345+6*layout.button_margin_y; //Hybrid.height-h;
		w=layout.split_w+10;
		h=90;
//		layout.feedback=Hybrid.createBox(layout.buttons,x,y,w,h);
		layout.feedback_text=Hybrid.createTextBox(layout.buttons,x,y,w,h,"sans-serif",palet.dark_red,"center",30,"");
		Hybrid.setBoxColor(layout.feedback_text,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setVisible(layout.feedback_text,false); // this should be set to cover all, but that's for later!
		

	}
	function new_game_GetLabelFromId(datagroep,id)
	{
		var i;
		var label="---";
		for(i=0;i<new_game.cms_data[datagroep].length;i++)
		{
			if(new_game.cms_data[datagroep][i].id==id)
			{
				return new_game.cms_data[datagroep][i].label;
			}
		}
	}
	function new_game_createPopupList(label)
	{
		Hybrid.saveButtonContext(); // we are going to need a seperate callback!
		var dataprovider=new_game.cms_data[label];
		Hybrid.debugmessage("createPopupList"+label+" "+dataprovider.length);
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,palet.pale_grey);
		
		// create a title box for the popup!
		var w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		var h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		var x=Hybrid.width-w;
		var y=0;
		layout.viewport_y=h;
		layout.viewport_h=Hybrid.height-layout.viewport_y;
		
		layout.popup_title=Hybrid.createBox(layout.popup,0,0,Hybrid.width,h);
		Hybrid.setBoxColor(layout.popup_title,palet.dark_blue);
		
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		y=0;
		Hybrid.createSpriteButton(layout.popup_title,x,y,w,h,'buttons',"dropdown","button_close_popup",new_gameHandleButtons_popup);
		// create a scrollable box inside the layer!
		layout.popup_scroll=Hybrid.createBox(layout.popup,0,layout.viewport_y,Hybrid.width,layout.viewport_h);
		Hybrid.setBoxColor(layout.popup_scroll,palet.pale_grey);
		//Hybrid.setBoxScrollable(layout.popup_scroll,false,true);
		// make it closable!
		
//		Hybrid.debugmessage("height of viewport: "+layout.viewport_h); // 1265
		
		var i,margin=150,rows=1,w=Hybrid.width,row_len=9;
		if(dataprovider.length<row_len)
		{
			margin=layout.viewport_h/dataprovider.length;
		}else
		{
			// there's more than one row needed!
			margin=layout.viewport_h/row_len;
			if(Math.floor(dataprovider.length/row_len)==(dataprovider.length/row_len))
			{
				rows=Math.floor(dataprovider.length/row_len);
			}else
			{
				rows=Math.floor(dataprovider.length/row_len)+1;
			}
			w=Hybrid.width/rows;
			Hybrid.debugmessage("button width:"+w);
			
		}
		for(i=0;i<dataprovider.length;i++)
		{
			// create the list!
			//layer,x,y,w,h,tekst,label,cb,fontsz)
			var x=Math.floor(i/row_len)*w;
			var y=(i%row_len)*margin;

			Hybrid.createTextButton(layout.popup_scroll,x,y,w,margin,dataprovider[i].label,"list_"+label+"_"+dataprovider[i].id,new_gameHandleButtons_popup,50);
		}
	}
	function new_gameHandleButtons_popup(label)
	{
		//Hybrid.makePageSelectable();
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label=="button_close_popup")
		{
			Hybrid.removeElement(layout.popup);
			Hybrid.restoreButtonContext();
		}else
		{
			if(label.substr(0,4)=="list")
			{
				Hybrid.debugmessage("total label:"+label);
				var parts=label.split("_");
				var field=parts[1];
				var id=parts[2];
				Hybrid.debugmessage("field:"+field+" , "+new_game.cms_data[field].length);
				var i;
				for(i=0;i<new_game.cms_data[field].length;i++)
				{
					if(new_game.cms_data[field][i].id==id)
					{
						label=new_game.cms_data[field][i].label;
					}
				}
				Hybrid.debugmessage("id:"+id);
				Hybrid.debugmessage("label:"+label);
				// set it!
				switch(field)
				{
					case "school":
						Hybrid.setText(layout.school_text,label);
						new_game.form.school=id;
						Hybrid.debugmessage("school set to: "+new_game.form.school);
					break;
					case "groep":
						Hybrid.setText(layout.groep_text,label);
						new_game.form.groep=id;
						Hybrid.debugmessage("groep set to: "+new_game.form.groep);
					break;
					case "plaats":
						Hybrid.setText(layout.plaats_text,label);
						new_game.form.plaats=id;
						Hybrid.debugmessage("plaats set to: "+new_game.form.plaats);
					break;
					case "category":
						Hybrid.setText(layout.category_text,label);
						new_game.form.category=id;
						Hybrid.debugmessage("category set to: "+new_game.form.category);
					break;
				}
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			}else
			{
				// ignore the buttonpress, iPad does that sometimes..
				// fire multiple events for one press.
				
			}
		}
	}
	function new_game_storeStuff()
	{
		Hybrid.debugmessage("validate Form");
		Hybrid.setVisible(layout.feedback_text,false); // hide to show processing... 
		new_game.form.naam=Hybrid.getText(layout.naam_text);
		new_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);
		var error="";
		if(new_game.form.plaats=="undefined" || new_game.form.plaats==-1)
		{
			error="Vul een plaats in!";
		}
		if(new_game.form.groep=="undefined" || new_game.form.groep==-1)
		{
			error="Vul een groep in!";
		}
		if(new_game.form.school=="undefined" || new_game.form.school==-1)
		{
			error="Vul een school in!";
		}
		if(new_game.form.wachtwoord=="" || new_game.form.wachtwoord=="wachtwoord")
		{
			error="Vul een wacthtwoord in!";
		}
		if(new_game.form.naam=="" || new_game.form.naam=="naam")
		{
			error="Vul een naam in!";
		}
		if((new_game.form.naam=="" && new_game.form.wachtwoord=="") || (new_game.form.naam.indexOf("naam")!=-1 && new_game.form.wachtwoord=="wachtwoord") )
		{
			// you just want to go back..
			setTimeout(start.init,100);
			
		}

		Hybrid.debugmessage("new_game.form.naam:"+new_game.form.naam);
		Hybrid.debugmessage("new_game.form.wachtwoord:"+new_game.form.wachtwoord);
		Hybrid.debugmessage("new_game.form.school (id):"+new_game.form.school);
		Hybrid.debugmessage("new_game.form.groep (id):"+new_game.form.groep);
		Hybrid.debugmessage("new_game.form.plaats (id):"+new_game.form.plaats);

		Hybrid.setCookie("user_naam",new_game.form.naam);
		Hybrid.setCookie("user_wachtwoord",new_game.form.wachtwoord); // set cookie stores the password!!!
		Hybrid.debugmessage("stored user name: "+new_game.form.naam);
		Hybrid.setCookie("user_school",new_game.form.school);
		Hybrid.setCookie("user_groep",new_game.form.groep);
		Hybrid.setCookie("user_plaats",new_game.form.plaats); // this determins what to load in map!
		
		if(error=="")
		{
			
			// also get a request to the server to create a new user....?
			// we might want to tell them something about that, but we'll do it with a window.alert.
			// do ajax call!
			var data={};
			data.naam=new_game.form.naam;
			data.wachtwoord=new_game.form.wachtwoord;
			data.school=new_game.form.school;
			data.groep=new_game.form.groep;
			data.plaats=new_game.form.plaats;
			data.category=new_game.form.category;
			Hybrid.getVars("new_game.php",data,new_game_ServerCallback,new_game_ServerFail)
		}else
		{
			// validation failed..
			Hybrid.setText(layout.feedback_text,error);
			Hybrid.playSound("wrong");
			Hybrid.setVisible(layout.feedback_text,true); 
			Hybrid.debugmessage("Validation failed..");
		}
		
//		window.alert("Communication with the server interupted, try again later.");
	}
	function new_game_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			Hybrid.playSound("right");

			
			var data={};
			data.succes=1;
			data.stat="new_game";
			data.user=response.user.naam;
			Hybrid.setVars("add_stat.php", data);

			//Hybrid.setCookie("user_naam",new_game.form.naam);
			//Hybrid.setCookie("user_school",new_game.form.school);
			//Hybrid.setCookie("user_punten",0);
			//Hybrid.setCookie("user_stenen",0);
			//Hybrid.setCookie("user_progress",0);
			//Hybrid.setCookie("user_plaats",new_game.form.plaats);			
			
			// we also get the questions
			// AND we get the question_order..
			// AND the houses and stuff.

			if(typeof(response.questions)==="undefined")
			{
				Hybrid.throwError("Server configuration error: wwjw_new_game.js, line 456");
			}
			quiz.questions=response.questions; // we have that!
			user.data=response.user; // we have this..
			quiz.nr_of_questions=quiz.questions.length; 
			quiz.question_order=response.user.question_order; // saved it for later!
			for(var i=0;i<quiz.question_order.length;i++)
			{
				if(quiz.question_order[i]>=quiz.questions.length)
				{
					quiz.question_order[i]=quiz.questions.length-1;
				}
			}
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to new game: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to new game "+all+"="+response.user[all]);
			}
			// keep stuff for next time..
			Hybrid.debugmessage("keep wachtwoord and name: "+response.user.naam);
			Hybrid.setCookie("user_wachtwoord",new_game.form.wachtwoord);
			Hybrid.setCookie("user_naam",response.user.naam); // keep thw cleaned name for autologin via init!
			/*Hybrid.debugmessage("cleaned username: "+response.user.naam);
			Hybrid.setCookie("user_progress",response.user.progress);
			Hybrid.setCookie("user_punten",response.user.punten);
			Hybrid.setCookie("user_stenen",response.user.stenen);
			Hybrid.setCookie("question_order",response.user.question_order.join("_"));
			Hybrid.setCookie("user_hints",response.user.hints.join("_"));
			Hybrid.setCookie("user_plaats",response.user.plaats); // this determins what to load in map when we come back unexpectedly (so not via login!)..
			.*/

			// we know the place, so add some houses to the list, we have to load these things dynamically from CMS.
			Hybrid.debugmessage("user komt uit plaats: "+response.user.plaats+", dus laad de juiste huizen achtergrond..");
			switch(parseInt(response.user.plaats))
			{
				case 1:
					Hybrid.graphics_manifest['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
			}
			//wwjw.page_extras="show_welcome"; // defined in globals, means show popup on top of map!
			//map.init();
			quiz.init();
			
		}else
		{
		
			var data={};
			data.succes=0;
			data.stat="new_game";
			Hybrid.setVars("add_stat.php", data);

			Hybrid.setText(layout.feedback_text,"Mislukt: "+response.error);
			Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!
			Hybrid.playSound("wrong");
			Hybrid.debugmessage("Server reports errorcode:"+response.errorcode+" "+response.error);
		}
	}
	function new_game_ServerFail(response)
	{
		var data={};
		data.succes=0;
		data.stat="new_game";
		Hybrid.setVars("add_stat.php", data);
			
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.setText(layout.feedback_text,"Server bezet, probeer later");
		Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!
		Hybrid.playSound("wrong");
		Hybrid.debugmessage("Request failed..");
		
	}	
	function new_gameHandleButtons(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_continue_new_game":
				new_game_storeStuff();
			break;				
			case "button_dropdown_school":
//				setTimeout(new_game_createPopupList,500,"school");
				new_game_createPopupList("school");
			break;				
			case "button_dropdown_groep":
//				setTimeout(new_game_createPopupList,500,"groep");
				new_game_createPopupList("groep");
			break;				
			case "button_dropdown_plaats":
				new_game_createPopupList("plaats");
			break;				
			case "button_dropdown_category":
				new_game_createPopupList("category");
			break;				
			case "button_close_popup":
				// hide popup layer!
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			break;
			default:
				Hybrid.debugmessage("new_gameHandleButtons: "+label);
		}
	}
	

	//resume_game----------------------------------
	var resume_game={};
	resume_game.init=initresume_game;
	resume_game.form={naam:"",wachtwoord:""}; // this will be refreshed, as soon as the user does anything..
	
	function initresume_game()
	{
		if(Hybrid.getCookie("wwjw_disclaimer")!="1")
		{
			Hybrid.debugmessage("you have not seen the disclaimer yet!");
			user.refer_to="resume";
			disclaimer.init();
		}else
		{
			var data={};
			data.page="resume";
			data.stat="page";
			Hybrid.setVars("add_stat.php", data);
		
			Hybrid.playSound("next_question");
			Hybrid.debugmessage("START  called!");
			Hybrid.setCookie("lastpage","resume_game");
			
			// get some stuff from the cookie!
			resume_game.form.naam="";
			if(Hybrid.getCookie("user_naam")!==null) resume_game.form.naam=Hybrid.getCookie("user_naam");
			
			Hybrid.resizeFunction=handleResizeresume_game;
			handleResizeresume_game(); // this builds the page 
//			Hybrid.listenToKeys(resume_KeyHandler)
		}
		// this listens periodically for changes
		resume_game_TextChangeListener(); // hoeft niet input type!

	}
	
	function resume_game_TextChangeListener()
	{
		// check if we are still on this page!
		
		
		
		// this fills the form periodically to NOT loose data on resize.
		// resize happens when closing keyboard on android, this results in blocking bug.
		
		var on_page=true;
		
		if(typeof(layout.naam_text)!="undefined" && typeof(layout.wachtwoord_text)!="undefined")
		{
			resume_game.form.naam=Hybrid.getText(layout.naam_text);
			resume_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);
			//Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER : "+resume_game.form.naam+","+resume_game.form.wachtwoord);
		}else{
			on_page=false;
		}
		if(on_page)
			window.requestAnimationFrame(resume_game_TextChangeListener);
	}
	function handleResizeresume_game()
	{
		Hybrid.debugmessage("pageresume_game build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=900;
		h=1020;
		x=100;
		y=345; //Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		
		
		x=100;
		y=779/2; // measured 779 in psd. // why divided by two is a little mystery here..
		w=w-200;
		h=700;
		string="";
		string+="<h1>Weet jij waar je woont?</h1>";
		string+="Ja, de naam van je stad of dorp, die ken je wel. Maar wat weet je nu echt over jouw plaats? En over de zes kernen die samen de gemeente Steenbergen vormen? In ieder geval weet je lang niet alles. Speel het spel ‘Weet waar je woont’ en dat verandert vanzelf. Beantwoord de vragen en leer alles over de geschiedenis van jouw gemeente. Bovendien krijg je voor ieder goed antwoord punten waarmee je gebouwen of attracties kunt kopen. Plaats die in de plattegrond en bouw jouw ideale woonplaats. Voor je begint, moet je rechts eerst even je gegevens invullen en een wachtwoord aanmaken. Want je wilt toch niet dat iemand met jouw droomstad aan de haal gaat?";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		 
		 // get the split and size of the button bit!!
		layout.split_x=1040;
		layout.split_w=Hybrid.width-layout.split_x;
		layout.button_margin_y=114;
		 
		// create button verder
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=layout.split_x+layout.split_w/2-w/2;
		y=637;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue","button_continue",handleButtonsresume_game);

		x=148;
		y=78; // position to left.
		w=810;
		h=617; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added
	
		// now create the controls for new game..
		w=layout.split_w+10; // we want the bevel to look right!
		h=94;
		x=layout.split_x;
		y=345; //Hybrid.height-h;
		layout.naam=Hybrid.createBox(layout.buttons,x,y,w,h)
		Hybrid.setBoxColor(layout.naam,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.naam,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.naam_text=Hybrid.createTextInput(layout.naam,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"naam");
		// auto fill met restored values;
		if(resume_game.form.naam!="")
		{
			console.log("setting naam on resize");
			Hybrid.setText(layout.naam_text,resume_game.form.naam);
			Hybrid.setTextBoxColor(layout.naam_text,palet.dark_blue);
		}

		//Hybrid.setTextEditable(layout.naam_text,true);// hoeft niet input type!

		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+1*layout.button_margin_y; //Hybrid.height-h;
		layout.wachtwoord=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wachtwoord,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.wachtwoord_text=Hybrid.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord","password");
		//Hybrid.setTextEditable(layout.wachtwoord_text,true);// hoeft niet input type!
		if(resume_game.form.wachtwoord!="")
		{
			console.log("setting wachtewoord");
			Hybrid.setText(layout.wachtwoord_text,resume_game.form.wachtwoord);
			Hybrid.setTextBoxColor(layout.wachtwoord_text,palet.dark_blue);
		}
		
		x=layout.split_x;
		y=900; 
		w=layout.split_w+10;
		h=300;
//		layout.feedback=Hybrid.createBox(layout.buttons,x,y,w,h);
		layout.feedback_text=Hybrid.createTextBox(layout.buttons,x,y,w,h,fonts.head,palet.dark_red,"center",fontsz.edit,"");
		Hybrid.setBoxColor(layout.feedback_text,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setVisible(layout.feedback_text,false); // this should be set to cover all, but that's for later!
		
	}
	
	
	function resume_game_storeStuff()
	{
		resume_game.form.naam=Hybrid.getText(layout.naam_text);
		resume_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);

		Hybrid.debugmessage("resume_game.form.naam:"+resume_game.form.naam);
		Hybrid.debugmessage("resume_game.form.wachtwoord:"+resume_game.form.wachtwoord);

		// do ajax call!
		var data={};
		data.naam=resume_game.form.naam;
		data.wachtwoord=resume_game.form.wachtwoord;
		Hybrid.getVars("login.php",data,resume_game_ServerCallback,resume_game_ServerFail)
	}
	function resume_game_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			var data={};
			data.succes=1;
			data.stat="login";
			data.user=response.user.naam;
			Hybrid.setVars("add_stat.php", data);
			
			Hybrid.debugmessage("you are in, we have data now.. save it for later!");
			// old..
//			quiz.questions=response.questions; // we have that!
//			Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!
//			quiz.question_order=response.user.question_order; // saved it for later!
			
			quiz.questions=response.questions; // we have that!
			user.data=response.user; // we have this..
			quiz.nr_of_questions=quiz.questions.length; 
			quiz.question_order=response.user.question_order; // saved it for later!
			
			for(var i=0;i<quiz.question_order.length;i++)
			{
				if(quiz.question_order[i]>=quiz.questions.length)
				{
					quiz.question_order[i]=quiz.questions.length-1;
				}
			}
			
			quiz_ShowQuestionData();
			
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to login: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to login "+all+"="+response.user[all]);
			}
			// keep stuff for next time..
			Hybrid.debugmessage("keep wachtwoord and name: "+response.user.naam);
			Hybrid.setCookie("user_wachtwoord",resume_game.form.wachtwoord);
			Hybrid.setCookie("user_naam",response.user.naam); // keep thw cleaned name for autologin via init!
			/*Hybrid.debugmessage("cleaned username: "+response.user.naam);
			Hybrid.setCookie("user_progress",response.user.progress);
			Hybrid.setCookie("user_punten",response.user.punten);
			Hybrid.setCookie("user_stenen",response.user.stenen);
			Hybrid.setCookie("question_order",response.user.question_order.join("_"));
			Hybrid.setCookie("user_hints",response.user.hints.join("_"));
			Hybrid.setCookie("user_plaats",response.user.plaats); // this determins what to load in map when we come back unexpectedly (so not via login!)..
.*/

			// we know the place, so add some houses to the list, we have to load these things dynamically from CMS.
			Hybrid.debugmessage("user komt uit plaats: "+response.user.plaats+", dus laad de juiste huizen achtergrond..");
			switch(parseInt(response.user.plaats))
			{
				case 1:
					Hybrid.graphics_manifest['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
			}
			
			if(parseInt(response.user.progress)>=response.user.question_order.length)
			{
				// just goto the map you have done the work!
				//map.init();
			}else
			{	
				//wwjw.page_extras="show_welcome"; // defined in globals, means show popup on top of map!
				//	map.init();
			}
			quiz.init();
			Hybrid.playSound("right");
			
		}else
		{
			var data={};
			data.succes=0;
			data.stat="login";
			data.error=response.error;
			data.errorcode=response.errorcode;
			Hybrid.setVars("add_stat.php", data);

			for(all in response)
				Hybrid.debugmessage(all+"="+response[all]);
			Hybrid.playSound("wrong");
			Hybrid.showWarning("Combinatie naam en wachtwoord niet gevonden.");
			start.init();

	
		}
	}
	function resume_game_ServerFail(response)
	{
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.setText(layout.feedback_text,"Communication with the server interupted,<br> try again later.");
		Hybrid.playSound("wrong");
		Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!

		Hybrid.debugmessage("Request failed..");
		var data={};
		data.succes=0;
		data.stat="login_serverfail";
		data.response=response;
		Hybrid.setVars("add_stat.php", data);
	}
	function handleButtonsresume_game(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_continue":
				resume_game_storeStuff();
			break;				
			case "button_close_popup":
				// hide popup layer!
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			break;
			default:
				Hybrid.debugmessage("handleButtonsresume_game: "+label);
		}
	}
	

	//reset_game----------------------------------
	var reset_game={};
	reset_game.init=initreset_game;
	reset_game.framecounter=0;
	reset_game.state="just_started";
	reset_game.form={};
	reset_game.cms_data={};
	
	// extra pagina om te kunnen kiezen welke game categorie je wilt.
	reset_game.cms_data.school=[
							  {label:"De Nieuwe Veste",id:"sdif4356srhe"},
							  {label:"Maria Regina",id:"sdiofhoe"},
							  {label:"Gummarusschool",id:"sd56pfioei"},
							  {label:"Merijntje",id:"idfhrs"},
							  {label:"Regenboog, De",id:"sd83ls"},
							  {label:"De zonneberg",id:"dfoihsue"},
							  {label:"Petrus en Paulusschool",id:"78sd3ogosd"},
							  {label:"Groen van Prinsterer",id:"98sdyvj"},
							  {label:"Pius X",id:"fgf45uh"},
							  {label:"niet van toepassing",id:"666"}];
	reset_game.cms_data.groep=[{label:"Groep 1",id:1},{label:"Groep 2",id:2},{label:"Groep 3",id:3},{label:"Groep 4",id:4},{label:"Groep 5",id:5},{label:"Groep 6",id:6},{label:"Groep 7",id:7},{label:"Groep 8",id:8},{label:"niet van toepassing",id:"666"}];
	reset_game.cms_data.category=cms.tags;
	for(var i=reset_game.cms_data.category.length-1;i>=0;i--)
	{
		if(typeof(reset_game.cms_data.category[i].questions)=="undefined")
		{
			reset_game.cms_data.category.splice(i,1); // remove it!
		}else{
			if(reset_game.cms_data.category[i].questions<30)
			{
				reset_game.cms_data.category.splice(i,1); // remove it!
			}else{
				reset_game.cms_data.category[i].label=reset_game.cms_data.category[i].label.split(" (")[0];
				reset_game.cms_data.category[i].label+=" (30/"+reset_game.cms_data.category[i].questions+" vragen)";
			}
		}
	}
	reset_game.cms_data.category.push({label:"Alles",id:-1});
	// copy it from CMS.tags set in script at top of page.php (the gamepage)
	
	reset_game.cms_data.plaats=[{label:"Steenbergen",id:1},{label:"De Heen",id:2},{label:"Nieuw Vossemeer",id:3},{label:"Kruisland",id:4},{label:"Dinteloord",id:5},{label:"Welberg",id:6}];
	
	function initreset_game()
	{
		
				Hybrid.debugmessage("user.data.naam:"+user.data.naam);
		Hybrid.debugmessage("user.data.wachtwoord:"+user.data.wachtwoord);

		
		//Hybrid.setCookie("wwjw_disclaimer","0"); // I want to see it to debug it, uncomment this!
		if(Hybrid.getCookie("wwjw_disclaimer")!="1")
		{
			Hybrid.debugmessage("you have not seen the disclaimer yet!");
			user.refer_to="new";
			disclaimer.init();
		}else
		{
			var data={};
			data.page="reset_game";
			data.stat="page";
			Hybrid.setVars("add_stat.php", data);
		
			Hybrid.playSound("next_question");
			Hybrid.debugmessage("START  called!");
			Hybrid.setCookie("lastpage","reset_game");
			
			// get some stuff from the cookie!
			reset_game.form.school=user.data.school;
			reset_game.form.groep=user.data.groep;
			reset_game.form.plaats=user.data.plaats;
			reset_game.form.category=user.data.category;
			
			Hybrid.resizeFunction=reset_gameHandleResize;
			reset_gameHandleResize(); // this builds the page 
		}
	}
	function reset_game_TextChangeListener()
	{
		Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER : "+Hybrid.lastTextboxChange);
		Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER textbox changed: "+Hybrid.lastTextboxToChange);
		Hybrid.debugmessage("NEW GAME TEXTCHANGE LISTENER textbox changed to: "+Hybrid.lastTextboxChangedTo);
		
		
		switch(Hybrid.lastTextboxChange)
		{

			case "focus":
					if(Hybrid.lastTextboxChangedTo==Hybrid.lastTextboxToChange.initialText)
					{
						Hybrid.setText(Hybrid.lastTextboxToChange,"");
					}
					Hybrid.setTextBoxColor(Hybrid.lastTextboxToChange,palet.dark_blue);
			break;
			case "blur":
				Hybrid.debugmessage("blur value:"+Hybrid.lastTextboxChangedTo);
				if(Hybrid.lastTextboxChangedTo==Hybrid.lastTextboxToChange.initialText || Hybrid.lastTextboxChangedTo=="" )
				{
					Hybrid.setText(Hybrid.lastTextboxToChange,Hybrid.lastTextboxToChange.initialText);
					Hybrid.setTextBoxColor(Hybrid.lastTextboxToChange,palet.pale_grey);
				}
			break;
			case "change":
					Hybrid.setVisible(layout.feedback_text,false); 
			break;
			default:
			 Hybrid.debugmessage("unknown textChange:"+Hybrid.lastTextboxChange);
		}
	}
	function reset_gameHandleResize()
	{
		Hybrid.debugmessage("pagereset_game build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		helpers_createStartSchermBack(); // cerateas a layer layout.back!

		
		// now create all buttons and elements
		layout.buttons=Hybrid.createLayer();
		
		var w,h,x,y,f,tx,ty,string;
		w=900;
		h=1020;
		x=100;
		y=345; //Hybrid.height-h;
		layout.wit_vlak=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wit_vlak,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.wit_vlak,0.80); // alpha added		
		
		x=100;
		y=779/2; // measured 779 in psd. // why divided by two is a little mystery here..
		w=w-200;
		h=700;
		string="";
		string+="<h1>Weet waar je woont!</h1>";
		string+="Hier kun je kiezen een andere categorie te spelen. Kun je niet beslissen? Dan kies je toch gewoon 'alles'!<br><br>Ook kun je eventueel je plaats, school of groep wijzigen. Voor als je over gaat of verhuisd.";
		Hybrid.createTextBox(layout.wit_vlak,x,y,w,h,"sans-serif","#2f2f2f","left",30,string);
		 
		 
		 // get the split and size of the button bit!!
		layout.split_x=1040;
		layout.split_w=Hybrid.width-layout.split_x;
		layout.button_margin_y=114;
		 
		// create button verder
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=layout.split_x+layout.split_w/2-w/2;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"continue","button_continue_reset_game",reset_gameHandleButtons);

		x=148;
		y=78; // position to left.
		w=810;
		h=617; 
		layout.logo=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxImage(layout.logo,"start_logo"); // this should be set to cover all, but that's for later!
		Hybrid.setBoxAlpha(layout.logo,0.85); // alpha added

	
		// now create the controls for new game..
		w=layout.split_w+10; // we want the bevel to look right!
		h=94;
		x=layout.split_x;
		y=345; //Hybrid.height-h;

		layout.naam=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.naam,palet.pale_green); // this should be set to cover all, but that's for later!
		layout.naam_text=Hybrid.createTextBox(layout.naam,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit-3,"naam: "+user.data.naam);
		Hybrid.setBoxColor(layout.naam_text,palet.pale_green); // this should be set to cover all, but that's for later!

		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+1*layout.button_margin_y; //Hybrid.height-h;
		layout.wachtwoord=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.wachtwoord,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.wachtwoord,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.wachtwoord_text=Hybrid.createTextInput(layout.wachtwoord,40,10,w-80,h-20,fonts.head,palet.pale_grey,"left",fontsz.edit,"wachtwoord");

		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+2*layout.button_margin_y; //Hybrid.height-h;
		layout.school=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.school,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.school,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.school_text=Hybrid.createTextBox(layout.school,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- school -");
		Hybrid.makeButton(layout.school_text, "button_dropdown_school", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.school!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.school"+reset_game.form.school);
			var label=reset_game_GetLabelFromId("school",reset_game.form.school);
			Hybrid.setText(layout.school_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_school",reset_gameHandleButtons);
		
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+3*layout.button_margin_y; //Hybrid.height-h;
		layout.groep=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.groep,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.groep,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.groep_text=Hybrid.createTextBox(layout.groep,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- groep -");
		Hybrid.makeButton(layout.groep_text, "button_dropdown_groep", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.groep!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.groep"+reset_game.form.groep);
			var label=reset_game_GetLabelFromId("groep",reset_game.form.groep);
			Hybrid.setText(layout.groep_text,label);
		}
		
		
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_groep",reset_gameHandleButtons);
	
		// plaats
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+4*layout.button_margin_y; //Hybrid.height-h;
		layout.plaats=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.plaats,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.plaats,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.plaats_text=Hybrid.createTextBox(layout.plaats,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- plaats -");
		Hybrid.makeButton(layout.plaats_text, "button_dropdown_plaats", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.plaats!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.plaats"+reset_game.form.plaats);
			var label=reset_game_GetLabelFromId("plaats",reset_game.form.plaats);
			Hybrid.setText(layout.plaats_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_plaats",reset_gameHandleButtons);
		
		// category
		w=layout.split_w+10;
		h=94;
		x=layout.split_x;
		y=345+5*layout.button_margin_y; //Hybrid.height-h;
		layout.category=Hybrid.createBox(layout.buttons,x,y,w,h);
		Hybrid.setBoxColor(layout.category,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setBevel(layout.category,5,"rgba(10,23,53,0.5)","rgba(255,255,255,0.5)");
		layout.category_text=Hybrid.createTextBox(layout.category,40,10,w-80,h-20,fonts.head,palet.dark_blue,"left",fontsz.edit,"- Onderwerpen -");
		Hybrid.makeButton(layout.category_text, "button_dropdown_category", reset_gameHandleButtons); // also right if they hit the text itself!
		if(reset_game.form.category!=-1)
		{
			// reflect this in the label!
			Hybrid.debugmessage("reset_game.form.category"+reset_game.form.category);
			var label=reset_game_GetLabelFromId("category",reset_game.form.category);
			Hybrid.setText(layout.category_text,label);
		}
		// create the listbox button
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		Hybrid.createSpriteButton(layout.buttons,x,y,w,h,'buttons',"dropdown","button_dropdown_category",reset_gameHandleButtons);
		
		// precreate the feedback..
		x=layout.split_x;
		y=345+6*layout.button_margin_y; //Hybrid.height-h;
		w=layout.split_w+10;
		h=90;
//		layout.feedback=Hybrid.createBox(layout.buttons,x,y,w,h);
		layout.feedback_text=Hybrid.createTextBox(layout.buttons,x,y,w,h,"sans-serif",palet.dark_red,"center",30,"");
		Hybrid.setBoxColor(layout.feedback_text,palet.pale_green); // this should be set to cover all, but that's for later!
		Hybrid.setVisible(layout.feedback_text,false); // this should be set to cover all, but that's for later!
		
		// we created everything, now set the listener for changes!
		Hybrid.textChangeListener=reset_game_TextChangeListener;
	}
	function reset_game_GetLabelFromId(datagroep,id)
	{
		var i;
		var label="---";
		for(i=0;i<reset_game.cms_data[datagroep].length;i++)
		{
			if(reset_game.cms_data[datagroep][i].id==id)
			{
				return reset_game.cms_data[datagroep][i].label;
			}
		}
	}
	function reset_game_createPopupList(label)
	{
		Hybrid.saveButtonContext(); // we are going to need a seperate callback!
		var dataprovider=reset_game.cms_data[label];
		Hybrid.debugmessage("createPopupList"+label+" "+dataprovider.length);
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,palet.pale_grey);
		
		// create a title box for the popup!
		var w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		var h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		var x=Hybrid.width-w;
		var y=0;
		layout.viewport_y=h;
		layout.viewport_h=Hybrid.height-layout.viewport_y;
		
		layout.popup_title=Hybrid.createBox(layout.popup,0,0,Hybrid.width,h);
		Hybrid.setBoxColor(layout.popup_title,palet.dark_blue);
		
		w=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['dropdown'][0][3];
		x=Hybrid.width-w;
		y=0;
		Hybrid.createSpriteButton(layout.popup_title,x,y,w,h,'buttons',"dropdown","button_close_popup",reset_gameHandleButtons_popup);
		// create a scrollable box inside the layer!
		layout.popup_scroll=Hybrid.createBox(layout.popup,0,layout.viewport_y,Hybrid.width,layout.viewport_h);
		Hybrid.setBoxColor(layout.popup_scroll,palet.pale_grey);
		//Hybrid.setBoxScrollable(layout.popup_scroll,false,true);
		// make it closable!
		
//		Hybrid.debugmessage("height of viewport: "+layout.viewport_h); // 1265
		
		var i,margin=150,rows=1,w=Hybrid.width,row_len=9;
		if(dataprovider.length<row_len)
		{
			margin=layout.viewport_h/dataprovider.length;
		}else
		{
			// there's more than one row needed!
			margin=layout.viewport_h/row_len;
			if(Math.floor(dataprovider.length/row_len)==(dataprovider.length/row_len))
			{
				rows=Math.floor(dataprovider.length/row_len);
			}else
			{
				rows=Math.floor(dataprovider.length/row_len)+1;
			}
			w=Hybrid.width/rows;
			Hybrid.debugmessage("button width:"+w);
			
		}
		for(i=0;i<dataprovider.length;i++)
		{
			// create the list!
			//layer,x,y,w,h,tekst,label,cb,fontsz)
			var x=Math.floor(i/row_len)*w;
			var y=(i%row_len)*margin;

			Hybrid.createTextButton(layout.popup_scroll,x,y,w,margin,dataprovider[i].label,"list_"+label+"_"+dataprovider[i].id,reset_gameHandleButtons_popup,50);
		}
	}
	function reset_gameHandleButtons_popup(label)
	{
		//Hybrid.makePageSelectable();
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label=="button_close_popup")
		{
			Hybrid.removeElement(layout.popup);
			Hybrid.restoreButtonContext();
		}else
		{
			if(label.substr(0,4)=="list")
			{
				Hybrid.debugmessage("total label:"+label);
				var parts=label.split("_");
				var field=parts[1];
				var id=parts[2];
				Hybrid.debugmessage("field:"+field+" , "+reset_game.cms_data[field].length);
				var i;
				for(i=0;i<reset_game.cms_data[field].length;i++)
				{
					if(reset_game.cms_data[field][i].id==id)
					{
						label=reset_game.cms_data[field][i].label;
					}
				}
				Hybrid.debugmessage("id:"+id);
				Hybrid.debugmessage("label:"+label);
				// set it!
				switch(field)
				{
					case "school":
						Hybrid.setText(layout.school_text,label);
						reset_game.form.school=id;
						Hybrid.debugmessage("school set to: "+reset_game.form.school);
					break;
					case "groep":
						Hybrid.setText(layout.groep_text,label);
						reset_game.form.groep=id;
						Hybrid.debugmessage("groep set to: "+reset_game.form.groep);
					break;
					case "plaats":
						Hybrid.setText(layout.plaats_text,label);
						reset_game.form.plaats=id;
						Hybrid.debugmessage("plaats set to: "+reset_game.form.plaats);
					break;
					case "category":
						Hybrid.setText(layout.category_text,label);
						reset_game.form.category=id;
						Hybrid.debugmessage("category set to: "+reset_game.form.category);
					break;
				}
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			}else
			{
				// ignore the buttonpress, iPad does that sometimes..
				// fire multiple events for one press.
				
			}
		}
	}
	function reset_game_storeStuff()
	{
		Hybrid.debugmessage("validate Form");
		Hybrid.setVisible(layout.feedback_text,false); // hide to show processing... 
		
		reset_game.form.wachtwoord=Hybrid.getText(layout.wachtwoord_text);
		
		var error="";
		if(reset_game.form.plaats=="undefined" || reset_game.form.plaats==-1)
		{
			error="Vul een plaats in!";
		}
		if(reset_game.form.groep=="undefined" || reset_game.form.groep==-1)
		{
			error="Vul een groep in!";
		}
		if(reset_game.form.school=="undefined" || reset_game.form.school==-1)
		{
			error="Vul een school in!";
		}

		if(reset_game.form.school=="undefined" || reset_game.form.school==-1)
		{
			error="Vul een school in!";
		}
		if(reset_game.form.wachtwoord=="undefined" || reset_game.form.wachtwoord==-1)
		{
			error="Vul een wachtwoord in!";
		}

		Hybrid.debugmessage("reset_game.form.groep (id):"+reset_game.form.groep);
		Hybrid.debugmessage("reset_game.form.school (id):"+reset_game.form.school);
		Hybrid.debugmessage("reset_game.form.groep (id):"+reset_game.form.groep);
		Hybrid.debugmessage("reset_game.form.plaats (id):"+reset_game.form.plaats);

		Hybrid.debugmessage("stored user name: "+user.data.naam);
		Hybrid.setCookie("user_school",reset_game.form.school);
		Hybrid.setCookie("user_groep",reset_game.form.groep);
		Hybrid.setCookie("user_plaats",reset_game.form.plaats); // this determins what to load in map!
		
		if(error=="")
		{
			
			// also get a request to the server to create a new user....?
			// we might want to tell them something about that, but we'll do it with a window.alert.
			// do ajax call!
			var data={};
			data.naam=user.data.naam;
			data.wachtwoord=reset_game.form.wachtwoord;
			data.school=reset_game.form.school;
			data.groep=reset_game.form.groep;
			data.plaats=reset_game.form.plaats;
			data.category=reset_game.form.category;
			console.log(JSON.stringify(data));
			Hybrid.getVars("reset_game.php",data,reset_game_ServerCallback,reset_game_ServerFail)
		}else
		{
			// validation failed..
			Hybrid.setText(layout.feedback_text,error);
			Hybrid.playSound("wrong");
			Hybrid.setVisible(layout.feedback_text,true); 
			Hybrid.debugmessage("Validation failed..");
		}
		
//		window.alert("Communication with the server interupted, try again later.");
	}
	function reset_game_ServerCallback(response)
	{
		var all;
		if(response.succes=="1")
		{
			Hybrid.playSound("right");

			
			var data={};
			data.succes=1;
			data.stat="reset_game";
			data.user=response.user.naam;
			Hybrid.setVars("add_stat.php", data);

			//Hybrid.setCookie("user_naam",user.data.naam);
			//Hybrid.setCookie("user_school",reset_game.form.school);
			//Hybrid.setCookie("user_punten",0);
			//Hybrid.setCookie("user_stenen",0);
			//Hybrid.setCookie("user_progress",0);
			//Hybrid.setCookie("user_plaats",reset_game.form.plaats);			
			
			// we also get the questions
			// AND we get the question_order..
			// AND the houses and stuff.

//			if(typeof(response.questions)==="undefined")
//			{
//				Hybrid.throwError("Server configuration error: wwjw_reset_game.js, line 456");
//			}
//			quiz.questions=response.questions; // we have that!
			user.data=response.user; // we have this..
			quiz.nr_of_questions=quiz.questions.length; 
			quiz.question_order=response.user.question_order; // saved it for later!
			for(var i=0;i<quiz.question_order.length;i++)
			{
				if(quiz.question_order[i]>=quiz.questions.length)
				{
					quiz.question_order[i]=quiz.questions.length-1;
				}
			}
			// show it for debugging!
			for(all in response)
			{
				Hybrid.debugmessage("server response to new game: "+all+"="+response[all]);
			}
			for(all in response.user)
			{
				Hybrid.debugmessage("server response.user to new game "+all+"="+response.user[all]);
			}
			// keep stuff for next time..
			Hybrid.debugmessage("keep wachtwoord and name: "+response.user.naam);
			Hybrid.setCookie("user_wachtwoord",user.data.wachtwoord);
			Hybrid.setCookie("user_naam",response.user.naam); // keep thw cleaned name for autologin via init!
			/*Hybrid.debugmessage("cleaned username: "+response.user.naam);
			Hybrid.setCookie("user_progress",response.user.progress);
			Hybrid.setCookie("user_punten",response.user.punten);
			Hybrid.setCookie("user_stenen",response.user.stenen);
			Hybrid.setCookie("question_order",response.user.question_order.join("_"));
			Hybrid.setCookie("user_hints",response.user.hints.join("_"));
			Hybrid.setCookie("user_plaats",response.user.plaats); // this determins what to load in map when we come back unexpectedly (so not via login!)..
			.*/

			// we know the place, so add some houses to the list, we have to load these things dynamically from CMS.
			Hybrid.debugmessage("user komt uit plaats: "+response.user.plaats+", dus laad de juiste huizen achtergrond..");
			switch(parseInt(response.user.plaats))
			{
				case 1:
					Hybrid.graphics_manifest['houses1']={src:"getCMSImage.php?id=houses&img=steenbergen",w:4904,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses2']={src:"getCMSImage.php?id=houses&img=deheen",w:4400,h:2052,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses3']={src:"getCMSImage.php?id=houses&img=nieuwvossemeer",w:3200,h:2048,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses4']={src:"getCMSImage.php?id=houses&img=kruisland",w:2672,h:1708,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses5']={src:"getCMSImage.php?id=houses&img=dinteloord",w:3665,h:2868,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
				case 2:
					Hybrid.graphics_manifest['houses6']={src:"getCMSImage.php?id=houses&img=welberg",w:2461,h:1231,preload: false}; // we don't preload the map back, that's just a bit heavy.
				break;
			}
			//wwjw.page_extras="show_welcome"; // defined in globals, means show popup on top of map!
			//map.init();
			quiz.init();
			
		}else
		{
		
			var data={};
			data.succes=0;
			data.stat="reset_game";
			Hybrid.setVars("add_stat.php", data);

			Hybrid.setText(layout.feedback_text,"Mislukt: "+response.error);
			Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!
			Hybrid.playSound("wrong");
			Hybrid.debugmessage("Server reports errorcode:"+response.errorcode+" "+response.error);
		}
	}
	function reset_game_ServerFail(response)
	{
		var data={};
		data.succes=0;
		data.stat="reset_game";
		Hybrid.setVars("add_stat.php", data);
			
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.setText(layout.feedback_text,"Server bezet, probeer later");
		Hybrid.setVisible(layout.feedback_text,true); // this should be set to cover all, but that's for later!
		Hybrid.playSound("wrong");
		Hybrid.debugmessage("Request failed..");
		
	}	
	function reset_gameHandleButtons(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		switch(label)
		{
			case "button_continue_reset_game":
				reset_game_storeStuff();
			break;				
			case "button_dropdown_school":
//				setTimeout(reset_game_createPopupList,500,"school");
				reset_game_createPopupList("school");
			break;				
			case "button_dropdown_groep":
//				setTimeout(reset_game_createPopupList,500,"groep");
				reset_game_createPopupList("groep");
			break;				
			case "button_dropdown_plaats":
				reset_game_createPopupList("plaats");
			break;				
			case "button_dropdown_category":
				reset_game_createPopupList("category");
			break;				
			case "button_close_popup":
				// hide popup layer!
				Hybrid.removeElement(layout.popup);
				Hybrid.restoreButtonContext();
			break;
			default:
				Hybrid.debugmessage("reset_gameHandleButtons: "+label);
		}
	}
	

	//quiz----------------------------------
	var quiz={};
	quiz.init=initquiz;
	quiz.framecounter=0;
	quiz.bar_height=80;
	quiz.button_height=194;
	
	// these should be loaded, I think.. Or pushed as extrenal javascript??
	
	// question can have:
	// question title
	// question body
	// question media
	// answer body
	// answer right body
	// answer wrong body
	// hint body
	// hint title
	// user used hint
	// user answer time!
	
	quiz.questions=[];
	quiz.question_order=[];
	/*
		{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}, 
	{qt:"Twee zeemeerminnen",qb:"Dit is de vraag",ab:["a1","a2","a3","a4"],qm:"img:test.jpg",ar: 0, us:false, ht:"hint title",hb:"hint body",uh:false, uat:0}
	*/
	quiz.current_question=0;
	quiz.state="just_started";
	
	function initquiz()
	{
		Hybrid.debugmessage("START Quiz called! game_name"+Hybrid.getCookie("user_naam"));
		Hybrid.setCookie("lastpage","quiz");
		
		if(map.shop.length==0)
			map_fillShop(); // this will load the houses and their prices!
	
		quiz.selected_answer=-1;// right now nothing is selected

		var data={};
		data.page="quiz";
		data.stat="page";
		data.user=user.data.naam;
		Hybrid.setVars("add_stat.php", data);

		
		// open the questions!
		// do ajax call!
		if(quiz.question_order.length==0)
		{
			var i=0,order=Hybrid.getCookie("question_order").split("_")
			for(i=0;i<order.length;i++)
				quiz.question_order[i]=parseInt(order[i]);
		}
		if(quiz.questions.length==0)
		{
			Hybrid.debugmessage("no questions yet, need to be loaded!");
			Hybrid.showWarning("this shouldn't happen!");
/*			var data={};
			data.naam=Hybrid.getCookie("user_naam"); // also get user details!
			data.wachtwoord=Hybrid.getCookie("user_wachtwoord");
			data.ck=new Date().getTime();
			Hybrid.debugmessage("login.php?naam="+data.naam+"&wachtwoord="+data.wachtwoord);
			Hybrid.getVars("login.php",data,quiz_LoadServerCallback,quiz_LoadServerFail);*/
		}else
		{
			Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!
			Hybrid.debugmessage("We have questions from the login.." +quiz.questions.length);
			// loaded them on login, so don't load again!
			Hybrid.resizeFunction=handleResizeQuiz;
			handleResizeQuiz(); // this builds the page */
		}
	}
	function quiz_ShowQuestionData()
	{
		Hybrid.playSound("next_question");
		Hybrid.debugmessage("quiz.questions : "+quiz.questions.length);
		var i;
		for(i=0;i<quiz.questions.length;i++)
		{
			Hybrid.debugmessage("------------------------------quiz.question: "+i);
			var all;
			for(all in quiz.questions[i])
			{
				Hybrid.debugmessage(all+"="+quiz.questions[i][all]);
			}
		}
	}
	function quiz_LoadServerCallback(response)
	{
		var all;
		Hybrid.debugmessage("quiz_LoadServerCallback");
		if(parseInt(response.succes)!=1)
		{
			Hybrid.showWarning("Server geeft error:"+response.error+" ("+response.errorcode+"), corrupt spel.");
			Hybrid.debugmessage("Server geeft error:"+response.error+" ("+response.errorcode+"), corrupt spel.");
			
			for(all in response)
				Hybrid.debugmessage("response["+all+"]="+response[all]);
			
			// go to login again!
			start.init();
			return;
		}
		quiz.questions = response.questions;
		
		Hybrid.debugmessage("got a user, i think..");
		for(all in response.user)
		{
			Hybrid.debugmessage("server response.user to get_questions "+all+"="+response.user[all]);
		}
		// we also get some stuff about the user!
		// we should put this in the cookie..
		//Hybrid.setCookie("user_progress",response.user.progress);
		//Hybrid.setCookie("user_punten",response.user.punten);
		//Hybrid.setCookie("user_stenen",response.user.stenen);
		//Hybrid.setCookie("question_order",response.user.question_order.join("_"));
		//Hybrid.setCookie("user_hints",response.user.hints.join("_"));
		//Hybrid.setCookie("user_plaats",response.user.plaats); // this determins what to load in map when we come back unexpectedly (so not via login!)..
			
		Hybrid.setCookie("nr_of_questions", quiz.questions.length); // remember it for on map!

		quiz_ShowQuestionData();
		
		// check if the questions arrived and do all kinds of things with them.
		// like sort them according to username!

/*		Hybrid.debugmessage("Loaded Questions:");			
		var i;
		for(i=0;i<quiz.questions.length;i++)
		{
			Hybrid.debugmessage((i+1)+". "+quiz.questions[i].body);			
		}*/
		
		Hybrid.resizeFunction=handleResizeQuiz;
		handleResizeQuiz(); // this builds the page 
		// determin the order of the questions
		
	}
	function quiz_LoadServerFail(response)
	{
		Hybrid.showWarning("get_questions.php not found or invalid json, please validate your json.");
		Hybrid.debugmessage("Request failed.. get_questions.php not found");
		//Hybrid.throwError("Request failed.. get_questions.php not found");
	}
	function quiz_CheckAnswer()
	{
		if(quiz.selected_answer==-1)
		{
			Hybrid.showWarning("Selecteer een antwoord.");
			return;
		}
		var nr=parseInt(user.data.progress );
		console.log(user.data.progress+ " of "+quiz.question_order );
		if(nr>=quiz.questions.length) nr=quiz.questions.length-1;
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]]; // Q is undefined sometiimes..
		if(typeof(q)==="undefined")
		{
			window.alert("Problem with question order. :"+user.data.progress+"=>"+quiz.question_order[parseInt(user.data.progress)]+">"+quiz.length+"?");
		}
		var answers=["A","B","C","D"];
		var selected_answer_text=Hybrid.getText(layout["a"+quiz.selected_answer+"_text"]);
		Hybrid.setText(layout.dummy,q[q.answer]); // this sometimes gives you a bug......?
		var right_answer_text= Hybrid.getText(layout.dummy);
		Hybrid.debugmessage("you selected answer: "+selected_answer_text);
		Hybrid.debugmessage("right answer was: "+right_answer_text);
		var i=0;
		var should_be="-";
		
		// what score is there for you?
		
		quiz.question_score=100; // default value of question without hint!
		quiz.question_stenen=20;
		if(parseInt(user.data.hints[nr])==1)
		{
			quiz.question_score=50;
			quiz.question_stenen=10;
		}
		
		
		for(i=0;i<4;i++)
		{
		
			Hybrid.debugmessage("Determining right letter: "+right_answer_text+"=="+Hybrid.getText(layout["a"+i+"_text"])+"?"); 
			// getTExt from layout makes for a non html-entity version of that thing...
			// so the best way to compare those two, is to put right_answer_text in a dummy box and read that out as well!
			
			
			
			if(right_answer_text==Hybrid.getText(layout["a"+i+"_text"]) ) should_be=answers[i];
		}
		
		if(selected_answer_text==right_answer_text)
		{
			// show right!
			Hybrid.debugmessage("show right");
			quiz_showRightPopup(answers[quiz.selected_answer]);
			Hybrid.playSound("right");
			var data={};
			data.qid=q.id;
			data.stat="right";
			data.user=user.data.naam;
			Hybrid.setVars("add_stat.php", data);
		}else
		{
			// show wrong!
			Hybrid.debugmessage("show wrong");
//			Hybrid.debugmessage("should_be answer"+should_be);
//			Hybrid.debugmessage("right_answer_text"+right_answer_text);
			quiz_showWrongPopup(answers[quiz.selected_answer],should_be,right_answer_text);
			Hybrid.playSound("wrong");
			var data={};
			data.qid=q.id;
			data.stat="wrong";
			data.user=user.data.naam;		
			Hybrid.setVars("add_stat.php", data);
		}
		
		// put to server.
		// open the questions!
		// do ajax call!
		
	
		Hybrid.debugmessage("Je hebt "+user.data.hints[nr]+" hints voor deze quiz gebruikt, dus score = score "+quiz.question_score+"/ stenen "+quiz.question_stenen);
		var data={};
		data.naam=Hybrid.getCookie("user_naam"); //should we also give the password, in case of pesten?????
		// it would be a bit safer, but overkill for now, I think..
		
		data.progress=user.data.progress;
		if(selected_answer_text==right_answer_text)
			data.answered="c"; // correctemundo
		else
			data.answered="b"; // bad, botched..
		
		data.question_id=q.id;
		data.punten=quiz.question_score;
		data.stenen=quiz.question_stenen;
		data.ck=new Date().getTime();
		Hybrid.getVars("answer_question.php",data,quiz_LoadAnswerCallback,quiz_LoadAnswerFail);
	}
		
	function quiz_LoadAnswerCallback(response)
	{
		var all;
		Hybrid.debugmessage("quiz_LoadAnswerCallback");
		if(parseInt(response.succes)!=1)
		{
			Hybrid.showWarning("Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nVervers de pagina als je weer internet hebt\nServer geeft error: "+response.error+" ("+response.errorcode+").");
			Hybrid.debugmessage("Request failed.. Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nAnswer_question.php responded: "+response.error+" ("+response.errorcode+") het spel start opnieuw op.");
			
			for(all in response)
				Hybrid.debugmessage("response["+all+"]="+response[all]);
			
			// go to login again!
//			setTimeout(start.init,200); // after ten seconds..
			return;
		}else
		{
			Hybrid.debugmessage("Saved answer");	
			
			// update the cookie with the server response!		
			//var nr=parseInt(response["progress"] );
			//Hybrid.setCookie("user_progress",nr+1)
			//var punten=parseInt(response["punten"] );
			//Hybrid.setCookie("user_punten",punten);
			//var stenen=parseInt(response["stenen"] );
			//Hybrid.setCookie("user_stenen",stenen);	
			var hints=response["hints"] ;
			Hybrid.debugmessage("received hints: "+hints+"");
			//Hybrid.setCookie("user_hints",hints);	
			// we update the user model
			user.data.progress=response["progress"];
			user.data.old_punten=user.data.punten; // we can use this to check if user has just played a new house loose?
			user.data.punten=response["punten"];
			user.data.stenen=response["stenen"];
			user.data.hints=response["hints"];
			
			Hybrid.setVisible(layout.popup,true); // show result
		}
	}
	
	function quiz_LoadAnswerFail(failingurl,errordata,thrownError,status)
	{
		// log the failure.. so that we can see, when the server would NOT return json, cause that's probably it..
		var data={};
		data.succes=0;
		data.stat="quiz_LoadAnswerFail";
		data.failingurl=failingurl;
		data.errordata=errordata;
		data.thrownError=thrownError;
		data.status=status;
		Hybrid.setVars("add_stat.php", data);
		
		Hybrid.showWarning("Check je internet verbinding: Laadfout.\nHerstel de internet verbinding en ververs de pagina om door te kunnen spelen.");
		Hybrid.debugmessage("quiz_LoadAnswerFail: Request failed.. answer_question.php not found");
		//Hybrid.throwError("Request failed.. Sorry, je antwoord is niet opgeslagen, check je internet verbinding!");
	}	
	
	function quiz_showWrongPopup(gekozen,should_be,right_answer_text)
	{
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");
		
		var x,y,w,h;
		w=985;
		h=1175;
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=985-x*2;
		h=460;
		var str="";
		str+="Je koos antwoord <font size='+3'>"+gekozen+"</font>";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);

		y=158;
		var str="";
		str+="Dat is Helaas fout!";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.wrong_text,"center",fontsz.quiz_mid,str);

		y=236;
		var str="";
		str+="Het had moeten zijn antwoord "+should_be+":<br>";
		str+=right_answer_text;
		layout.popup_head3=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_small,str);
		
		Hybrid.debugmessage("content of layer: "+Hybrid.getText(layout.popup_head3));	
		Hybrid.debugmessage("getheight of text:"+Hybrid.getBoxContentHeight(layout.popup_head3));	
		Hybrid.debugmessage("h:"+h);	
		y+=Hybrid.getBoxContentHeight(layout.popup_head3);
		var str="";
			str+=q.wrong;
		if(q.wrong=="")
			str+=q.right;
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);
		
		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
		x=985/2-w/2;
		y=928;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"play","button_wrong_continue",handleButtonsQuiz);
		
		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		Hybrid.createSpriteButton(layout.popup_window,985-w,0,w,h,'buttons',"speak","button_speak_right",handleButtonsQuiz);

	}
	
	function quiz_showFinishedPopup()
	{
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");
		
		var x,y,w,h;
		w=985;
		h=1115; // 1113 in original, but ok..
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		var window_width=w;
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=985-x*2;
		h=460;
		
		var str="";
		str+="GEFELICITEERD!";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_mid,str);

		y=158;
		var str="";
		str+="Je hebt het spel uitgespeeld";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.head,str);
		y+=50;
		var str="";
		str+="Je score is "+user.data.punten+" punten!";
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.head,str);
			
		y+=100;
		str="Speel het spel nog een keer, bekijk de highscores of bouw nog even in je woonplaats. Je kunt nu natuurlijk ook gewoon stoppen. In dat geval, hopelijk tot ziens!"
		Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);

		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['again'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['again'][0][3];
		x=(window_width-w)/2;
		y=475;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"again","button_again",handleButtonsQuiz);

		// create other buttons
		w=Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
		x=(window_width-w)/2;
		y=740;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"high","button_high",handleButtonsQuiz);

		w=Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['city'][0][3];
		x=(window_width-w)/2;
		y+=100;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"city","button_city",handleButtonsQuiz);
		
		w=Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
		x=(window_width-w)/2;
		y+=100;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"stop","button_stop",handleButtonsQuiz);
		
	}	
	 
function map_CheckNewHouseAvailable()
	{
		// we need to find out if there is any new houses available, if so, we need to show this to the user.
		var i;
		var new_house_available=-1;
		var new_score=user.data.punten+100; // act as if you allready have gotten the points, this runs via backend I think, but still..
		Hybrid.debugmessage("map_CheckNewHouseAvailable :"+map.shop.length+ "houses!");
		for(i=0;i<map.shop.length;i++)
		{
			console.log(new_score+" punten, quick check of the shop: "+map.shop[i].naam+","+map.shop[i].unlock+","+ map.shop[i].unlocked);
			if(map.shop[i].unlock<=new_score && map.shop[i].unlocked==false)
			{
				map.shop[i].unlocked=true; // only once!
				Hybrid.debugmessage("house available:"+map.shop[i].naam+" id:"+map.shop[i].img);
				// check if it's placed!
				var j=0;
				var placed=false;
				if(placed==false)
				{
					// you might need to hear about this house.
					new_house_available=i;  // map.shop.nr, never -1!
				}
			}else
			{
				//Hybrid.debugmessage("house unavailable:"+map.shop[i].naam+", "+map.shop[i].prijs+"<"+user.data.stenen);
			}
		}
		return new_house_available;
	}
	function quiz_showRightPopup(gekozen)
	{
		var new_house_available=map_CheckNewHouseAvailable();
		if(new_house_available!=-1)
		{
			Hybrid.debugmessage("show the new house available popup! for" +map.shop[new_house_available].naam+", id:"+map.shop[new_house_available].img);
		}
		
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");

		if(new_house_available!=-1)
		{
			// create the new house popup on top of the black!
			var x,y,w,h;
			w=640;
			h=720;
			x=Hybrid.width/2+350;
			y=Hybrid.height/2-180;
			layout.popup_new_house=Hybrid.createBox(layout.popup,x,y,w,h);
			Hybrid.setBoxColor(layout.popup_new_house,palet.pale_blue); 
			Hybrid.setBoxShadow(layout.popup_new_house,0,0,50,"#000");
			
			x=205;
			y=390;
			w=380;
			h=190;
			var str="";
			str+="Gefeliciteerd, je hebt een nieuw gebouw vrijgespeeld";
			layout.popup_house_text=Hybrid.createTextBox(layout.popup_new_house,x,y,w,h,fonts.head,"#fff","center",fontsz.quiz_very_small,str);
			
			// show the building in question!
			x=205;
			y=10;
			w=400;
			h=380;
			nr=new_house_available;
			layout.popup_canv=Hybrid.createCanvas(layout.popup_new_house,x,y,w,h);
			// get the scale factor!
			Hybrid.debugmessage("nr: "+nr);
			Hybrid.debugmessage("map.shop.length: "+map.shop.length);
			Hybrid.debugmessage("map.shop[nr].img: "+map.shop[nr].img);
			var fx=w/Hybrid.graphics_manifest[map.shop[nr].img].w; // HIER gaat het fout, omdat de shop niet geladen is??
			var fy=h/Hybrid.graphics_manifest[map.shop[nr].img].h;
			var f=fx;
			if(fy<fx)f=fy;
			if(f>0.9 && f<1.1) f=1;
			else f*=0.9;
			Hybrid.drawImage(layout.popup_canv,map.shop[nr].img,w/2,h/2,0,f);
			
			// create button plaats op de kaart
			w=Hybrid.graphics_manifest['buttons'].ss['place'][0][2];
			h=Hybrid.graphics_manifest['buttons'].ss['place'][0][3];
			Hybrid.debugmessage("found the button names place: "+w+","+h);
			x=200;
			y=560;
			Hybrid.createSpriteButton(layout.popup_new_house,x,y,w,h,'buttons',"place","button_place_on_map",handleButtonsQuiz);
		}
		
		var x,y,w,h;
		w=985;
		h=1118;
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=985-x*2;
		h=460;
		var str="";
		str+="Je koos antwoord <font size='+3'>"+gekozen+"</font>";
		layout.popup_head1=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);

		y=158;
		var str="";
		str+="Dat is goed!";
		layout.popup_head2=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_mid,str);
		
		y=220;
		h=660;
		var str="";
		
		str+="Je verdient "+quiz.question_score+" pnt en "+quiz.question_stenen+" stenen";
		layout.popup_head3=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.right_text,"center",fontsz.quiz_small,str);
			
		y+=Hybrid.getBoxContentHeight(layout.popup_head3)+60;
		str=q.right;
		layout.popup_body=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);
		
		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		x=985-w;
		Hybrid.createSpriteButton(layout.popup_window,x,0,w,h,'buttons',"speak","button_speak_right",handleButtonsQuiz);
		
		
		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
		x=985/2-w/2;
		y=865;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"play","button_right_continue",handleButtonsQuiz);
		
		// after creation it should be made invisible, the server answer will make it visible!
		Hybrid.setVisible(layout.popup,false);

	}	


	function quiz_showHint()
	{
		var nr=parseInt( user.data.progress );
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]];
		
		// if this is the first time, you set the hint:
		
		if(typeof(q.used_hint)==="undefined" || q.used_hint!=true)
		{
			q.used_hint=true;
			var data={};
			data.qid=q.id;
			data.stat="hint";
			data.user=user.data.naam;			
			Hybrid.setVars("add_stat.php", data);
		}
		
		var data={};
		data.naam=Hybrid.getCookie("user_naam");
		data.progress=user.data.progress;
		data.answered="a"; // a hint has been used for this question!
		data.question_id=q.id;
		data.ck=new Date().getTime();
		var str="answer_question.php?";
		var i;
		for(i in data) str+=i+"="+data[i]+"&";
		Hybrid.debugmessage("trying to answer with a hint used...  "+str);
		
		Hybrid.getVars("answer_question.php",data,quiz_LoadAnswerCallback,quiz_LoadAnswerFail);
		
		
		layout.popup=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.popup,"rgba(0,0,0,0.5)");
		
		var x,y,w,h;
		w=985;
		h=1118;
		x=Hybrid.width/2-w/2;
		y=Hybrid.height/2-h/2;
		layout.popup_window=Hybrid.createBox(layout.popup,x,y,w,h);
		Hybrid.setBoxColor(layout.popup_window,palet.popup_back);
		Hybrid.setBoxShadow(layout.popup_window,0,0,50,"#000");
		
		x=88;
		y=80;
		w=Math.floor(985-x*2);
		h=460;
		var str="";
		str+="Vind je de vraag nog moeilijk?<BR>Misschien dat het met deze hint wel zal lukken?";
		layout.popup_head1=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.head,palet.dark_blue,"center",fontsz.head,str);

		var th=Hybrid.getTextboxHeight(layout.popup_head1);
		Hybrid.debugmessage("HINT height of textbox popup_head1: "+th);
		y+=th+40;
		
		str=q.hint;
		layout.popup_body=Hybrid.createTextBox(layout.popup_window,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,str);
	
		// do layout on resized text!
		
		th=Hybrid.getTextboxHeight(layout.popup_body);
		y+=th+40;
		Hybrid.debugmessage("HINT height of textbox: "+th);
		
		// create button spelen
		w=Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
		x=985/2-w/2;
		Hybrid.createSpriteButton(layout.popup_window,x,y,w,h,'buttons',"continue","button_hint_continue",handleButtonsQuiz);

		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		x=985-w;
		Hybrid.createSpriteButton(layout.popup_window,x,0,w,h,'buttons',"speak","button_speak_hint",handleButtonsQuiz);

		// set position of window!
		w=985;
		h=y+280;
		y=Hybrid.height/2-h/2;
		x=Hybrid.width/2-w/2;
		Hybrid.sizeBox(layout.popup_window,w,h);
		Hybrid.moveBox(layout.popup_window,x,y);

		// if we set it to invisible, innerheight measures 0!
		Hybrid.setVisible(layout.popup,false); // you will only see it when it registers!
	
	}		
	
	function quiz_ShowQuestion(nr)
	{
		if(nr>=quiz.questions.length) nr=quiz.questions.length-1;
		var q=quiz.questions[nr];
		if(typeof(q)=="undefined")
		{
			console.warn("an exception occured "+JSON.stringify(quiz.questions));
		}
		
		Hybrid.debugmessage("quiz_ShowQuestion "+(nr+1));
		
		Hybrid.debugmessage("vraag nr"+parseInt(user.data.progress ));
		if(parseInt(user.data.progress)==0)
		{
			// first question
			Hybrid.debugmessage("eerste vraag gedisplayed!");
			// mark this time and event for later in stats!
			var data={};
			data.stat="game";
			data.event="started";
			data.user=user.data.naam;
			Hybrid.setVars("add_stat.php", data);
		}
		
		
		Hybrid.setText(layout.vraag_nr,"Vraag "+(parseInt(user.data.progress)+1)+"/"+quiz.question_order.length);
		Hybrid.setText(layout.score_label,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");
		// Question Progress
		var w=412;
		w=w*(parseInt(user.data.progress)/(quiz.question_order.length-1));
		var h=30;
		Hybrid.sizeBox(layout.progress,w,h);
		// Question Title
		Hybrid.setText(layout.title,q.title); // this is where it goes wrong if the question that is being displayed has been deleted!
		// Question Body
		Hybrid.setText(layout.question_body,q.body);
		var answers=["A","B","C","D"];
		var hussle_antwoorden=[0,1,2,3];
		hussle_antwoorden.sort(Hybrid.sort_shuffle);
		// Question Media
		Hybrid.debugmessage("Question Media:"+q.media);
		
		// remove AND recreate layout media!
		w=854;
		h=557;
		var x=104;
		var y=488;
		Hybrid.removeElement(layout.media);
		if(q.media!="")
		{
			if(q.media.indexOf("www")==-1 && q.media.indexOf("http")==-1)
			{
				// default: it's an image!
				layout.media=Hybrid.createBox(layout.quiz,x,y,w,h);
				Hybrid.setBoxColor(layout.media,"#fff"); 
				Hybrid.setBoxImagePath(layout.media,"/mgcms/cms_images/"+q.media+".png");
			}else
			{
				// It's a youtube video!
				var video_code=getYoutubeVideoCode(q.media);
				Hybrid.debugmessage("embed a video with code: '"+video_code+"'");
				var iframe_url="https://www.youtube.com/embed/"+video_code+"?autoplay=1&showinfo=0&controls=1&rel=0&modestbranding=1";
				// create a webview..
				if(layout.media.kind=="hybridWebview")
				{
					Hybrid.debugmessage("stopped video!");
					Hybrid.setWebviewURL(layout.media,"www.google.com");// shut up any video's!
				}
				if(layout.media)
				{
					Hybrid.debugmessage("layout.media: there was something there allready, removed it!");
					Hybrid.removeElement(layout.media);
				}
				layout.media=Hybrid.createWebview(layout.quiz,x,y,w,h,iframe_url);
			}
		}

		
		
		var i;
		q.hussle_antwoorden=hussle_antwoorden; // keep the hussle_antwoorden voor de speak.
		for(i=0;i<4;i++)
		{
			Hybrid.setText(layout["a"+i+"_text"],q[ answers[hussle_antwoorden[i]] ]);
			var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
			Hybrid.debugmessage("place answers in button: "+th);
			Hybrid.moveBox(layout["a"+i+"_text"],124,90-th/2);
		}
		Hybrid.stopVoice();
		quizHelperDrawAnswerCanvasses();
	}
	
	function getYoutubeVideoCode(media_url)
	{
		Hybrid.debugmessage("getYoutubeVideoCode("+media_url+")");
		var video_code="";
		// werk url om naar geldige embed code!
		if(media_url.indexOf("youtu.be/")!=-1)
		{
			// looks like this:
			// "http://youtu.be/rht7mPaXgzU";
			 video_code=media_url.substr(media_url.indexOf("youtu.be/")+9,11);
			// window.alert("extracted video_code:"+video_code);
		}
		if(media_url.indexOf("v=")!=-1)
		{
			// looks like this:
			//"https://www.youtube.com/watch?v=uziVqnHhLDg";
			video_code=media_url.substr(media_url.indexOf("v=")+2,11);
			//window.alert("extracted video_code:"+video_code);
		}
		return video_code;
	}
	
	function handleResizeQuiz()
	{
		Hybrid.debugmessage("page Quiz build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.back,palet.pale_green); // this should be set to cover all, but that's for later!
		
		var w,h,x,y,f,tx,ty,string;
		w=Hybrid.width;
		h=quiz.bar_height;
		x=0;
		y=0;
		layout.bar=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.bar,palet.pale_blue); // this should be set to cover all, but that's for later!
	
		// it's imperative that layout stays the same, so apart from the bar, we need to set a box in the middle of exactly 2048..
		// UNLESS it's smaller, than we need to scale it down... but smaller than 4x3?? I think not.
		
		w=2048;
		h=1361;
		x=(Hybrid.width-2048)/2;
		y=0;
		layout.quiz=Hybrid.createBox(layout.back,x,y,w,h);

		// set the snap to aim for!
		//Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxImage(layout.quiz,"snap"); // this should be set to cover all, but that's for later!

		// stuff in the bar
		layout.user_name=Hybrid.createTextBox(layout.quiz,60,20,450,100,fonts.head,"#fff","left",fontsz.head,Hybrid.getCookie("user_naam"));
		layout.vraag_nr=Hybrid.createTextBox(layout.quiz,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag "+user.data.progress+"/..");
		layout.score_label=Hybrid.createTextBox(layout.quiz,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");

		// Question Progress
		w=412;
		h=30;
		x=(2048-w)/2;
		y=(quiz.bar_height-h)/2+5;
		layout.progress_total=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.progress_total,"#fff"); 
		var w1=(parseInt(user.data.progress)/30);
		if(w1>1) w1=1;
		if(w1<0) w1=0;
		layout.progress=Hybrid.createBox(layout.quiz,x,y,w*w1,h);// set inital width.. user.data.progress might be any positive integer (if they add MANY questions!).
		Hybrid.setBoxColor(layout.progress,palet.pale_yellow); 
		
		// Question Title
		w=854;
		h=86;
		x=104;
		y=264;
		string="...";
		layout.title=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.head,palet.head,"left",fontsz.head,string);

		// Question Body
		w=854;
		h=174;
		x=104;
		y=310;
		string="...";
		layout.question_body=Hybrid.createTextBox(layout.quiz,x,y,w,h,fonts.body,palet.body,"left",fontsz.body,string);
		
		// create media box
		w=854;
		h=557;
		x=104;
		y=488;
		layout.media=Hybrid.createBox(layout.quiz,x,y,w,h);
		Hybrid.setBoxColor(layout.media,"#fff"); 
		
		// create answers buttons!
		var i,letter=["A","B","C","D"];
		var answers=["","","",""];
		// create the right answer textbox...
		// this is a dummy textbox to stop decoding problems:
		layout.dummy=Hybrid.createTextBox(layout.quiz,-50,-100,50,100,fonts.head,palet.head,"center",20,"");
		
		
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			x=1046;
			y=315+(quiz.button_height-16)*i; // 172 is inner, so  thickness =8
			// create the outer box (rounded)
			layout["a"+i]=Hybrid.createBox(layout.quiz,x,y,w,h);
			//Hybrid.setBoxColor(layout["a"+i],"#fff"); 
			
			// because the sprite way is not very handy in this case!!!
			// THIS IS THE WAY TO DO IT WITH A CANVAS!
			layout["a"+i+"_canvas"]=Hybrid.createCanvas(layout["a"+i],0,0,w,h);
			layout["a"+i+"_canvas"].over=false; // this is false.
			
			// now create the texts
			layout["a"+i+"_letter"]=Hybrid.createTextBox(layout["a"+i],-5,60,150,150,fonts.head,palet.head,"center",60,letter[i]);
			string="";
			layout["a"+i+"_text"]=Hybrid.createTextBox(layout["a"+i],128,60,720,70,fonts.body,palet.body,"left",fontsz.body,answers[i]);
			//var th=Hybrid.getTextboxHeight(layout["a"+i+"_text"]);
			//Hybrid.debugmessage(" answer "+(i+1)+" height = "+th);
			//Hybrid.moveBox(layout["a"+i+"_text"],124,h/2-th/2); // half button height?
			
			// set a button box over this all.
			layout["a"+i+"hit"]=Hybrid.createBox(layout["a"+i],0,0,w,h);
			Hybrid.makeButton(layout["a"+i+"hit"],"answer|"+i,handleButtonsQuiz,handleOverButtonsQuiz);
			
		}
		quizHelperDrawAnswerCanvasses();
		
		// create menubutton quiz
		w=Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
		x=2048-300;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"stop","button_stop",handleButtonsQuiz);

		w=Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
		x=2048-610;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"high","button_high",handleButtonsQuiz);

		w=Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['city'][0][3];
		x=2048-1035;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"city","button_city",handleButtonsQuiz);

		// create button answer
		w=Hybrid.graphics_manifest['buttons'].ss['answer'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['answer'][0][3];
		x=2048-60-755;
		y=Hybrid.height-h-60;
		layout.answer_button=Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"answer","button_answer",handleButtonsQuiz);
		Hybrid.setVisible(layout.answer_button,false);
		
		// create button SPEAK
		w=Hybrid.graphics_manifest['buttons'].ss['speak'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['speak'][0][3];
		x=104;
		y=137;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"speak","button_speak_question",handleButtonsQuiz);
		
		// create button SPEAK Answer
		for(i=0;i<4;i++)
		{
			x=2048-104;
			y=345+(quiz.button_height-16)*i; // 172 is inner, so  thickness =8
			Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"speak","button_speak_answer_"+i,handleButtonsQuiz);
		}
		
		// create button hint
		w=Hybrid.graphics_manifest['buttons'].ss['hint'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['hint'][0][3];
		x=2048-60-192;
		y=Hybrid.height-h-80;
		Hybrid.createSpriteButton(layout.quiz,x,y,w,h,'buttons',"hint","button_hint",handleButtonsQuiz);
		// maybe ghosted
		// you can look at hints as much as you like..
		//Hybrid.debugmessage("ghost hint? "+user.data.hints[parseInt(user.data.progress)]);
/*		if(parseInt(user.data.hints[parseInt(user.data.progress)])==1)
		{
			// you have the hint allready!
			quiz.question_punten=50;
			quiz.question_stenen=10;
			// ghost it by posting something over it!
			layout.ghosted=Hybrid.createBox(layout.quiz,x,y,w,h);
			Hybrid.setBoxColor(layout.ghosted,"rgba(201,229,182,0.5)"); 		
		}*/
		
		// overlay snap!
		/*
		{
			w=2048;
			h=1361;
			x=(Hybrid.width-2048)/2;
			y=0;
			layout.snap=Hybrid.createBox(layout.back,x,y,w,h);
	//		Hybrid.setBoxColor(layout.quiz,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxImage(layout.snap,"snap"); // this should be set to cover all, but that's for later!
			Hybrid.setBoxAlpha(layout.snap,0.5); // this should be set to cover all, but that's for later!
		*/
	
		// now ALWAYS set the right data
		var nr=parseInt(user.data.progress);
		if(nr>=quiz.question_order.length)
		{
			// extra popup!!
			Hybrid.playSound("finished");
			quiz_showFinishedPopup();
			// finished!
			
			/*Hybrid.showWarning("Je bent klaar met de quiz. Het is tijd om naar de kaart te gaan.");
			// we zetten hier even een highscore!
			var data={};
			data.naam=user.data.naam;
			Hybrid.setVars("add_highscore.php", data);
			
			var data={};
			data.stat="game";
			data.event="finished";
			data.user=user.data.naam;
			Hybrid.setVars("add_stat.php", data);

			
			// one way traffic for stats and highscores.
			// we don't need to know if this lands ok!
			map.init();*/
		}else
		{
			quiz_ShowQuestion(quiz.question_order[nr]);
		}
	}
	
	function quizHelperDrawAnswerCanvasses()
	{
		var i;
		var w,h;
		for(i=0;i<4;i++)
		{
			w=900;
			h=quiz.button_height;
			var rounding=8;
			var ctx=layout["a"+i+"_canvas"].context;
			var grd=ctx.createLinearGradient(0,0,0,h);
			if(i==quiz.selected_answer)
			{
				//rounding=20;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],"#fff");
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],"#9cd2f7");
				grd.addColorStop(0,"#255192");
				grd.addColorStop(1,"#3a75bc");
			}else
			{
				//rounding=8;
				Hybrid.setTextBoxColor(layout["a"+i+"_text"],palet.body);
				Hybrid.setTextBoxColor(layout["a"+i+"_letter"],palet.head);
				if(layout["a"+i+"_canvas"].over===false)
				{
					grd.addColorStop(0,"#9cd2f7");
					grd.addColorStop(1,"#88bfe8");
				}else
				{
					grd.addColorStop(0,"#6cbcff");
					grd.addColorStop(1,"#5aaaf2");
				}
			}
			ctx.fillStyle=grd;
			ctx.strokeStyle="#FFF";
			ctx.lineWidth=rounding;
			ctx.beginPath();
			Hybrid.drawRoundedRect(ctx,4,4,w-8,h-8,rounding);
			ctx.fill();
			ctx.stroke();
		}
	}
	
	function handleOverButtonsQuiz(label,overout)
	{
		Hybrid.debugmessage("handleButtonsQuiz: "+label+","+overout);
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			Hybrid.debugmessage("button nummer: "+nr);
			if(overout=="out")
			{
				// restore
				layout["a"+nr+"_canvas"].over=false;
			}else
			{
				// show over!
				layout["a"+nr+"_canvas"].over=true;
			}
			quizHelperDrawAnswerCanvasses();
		}
	}
	function handleButtonsQuiz(label)
	{
		//window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
		if(label.indexOf("answer|")!=-1)
		{
			var nr=parseInt(label.substr(7,15));
			quiz.selected_answer=nr;
			Hybrid.setVisible(layout.answer_button,true);
			quizHelperDrawAnswerCanvasses();
			
		}
		var q=quiz.questions[quiz.question_order[parseInt(user.data.progress)]]; // Q is undefined sometiimes..
		var answer_codes=["A","B","C","D"];
		switch(label)
		{
			case "button_speak_question":
				Hybrid.playVoice("question_"+q.id+"_body.mp3");
			break;
			case "button_speak_right":
				q=quiz.questions[quiz.question_order[parseInt(user.data.progress)-1]]; // we have just progressed one question, so we have to go back one question..
				Hybrid.playVoice("question_"+q.id+"_right.mp3");
			break;
			case "button_speak_hint":
				Hybrid.playVoice("question_"+q.id+"_hint.mp3");
			break;
			case "button_speak_answer_0":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[0]]+".mp3");
			break;
			case "button_speak_answer_1":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[1]]+".mp3");
			break;
			case "button_speak_answer_2":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[2]]+".mp3");
			break;
			case "button_speak_answer_3":
				Hybrid.playVoice("question_"+q.id+"_"+answer_codes[q.hussle_antwoorden[3]]+".mp3");
			break;
			case "button_place_on_map":
				map.init();
			break;
			case "button_right_continue":
			case "button_wrong_continue":
				// next question should be displayed.
				// delete the popup!
				var nr=parseInt(user.data.progress);
				if(nr>=quiz.question_order.length)
				{
					// play special sound and show map!
					Hybrid.playSound("finished");
					// set a highscore!!
					var data={};
					data.naam=user.data.naam;
					Hybrid.setVars("add_highscore.php", data);
					
					var data={};
					data.stat="game";
					data.event="finished";
					//data.gametime=Hybrid.getCookie("sta"); // we don't do that any more, but this was why it failed!
					// couldn't figure that out, then and went and fixed it in the stats. oh well..
					data.user=user.data.naam;
					Hybrid.setVars("add_stat.php", data);
					
					quiz_showFinishedPopup(); // user JUST finished!
				}else
				{
					// show the next question!
					Hybrid.removeElement(layout.popup);
					quiz.selected_answer=-1;
					//if(user.data.progress%5==0)
					//{
						// every five questions we go to the map!
						//map.init();
					//}else
					//{
						Hybrid.setVisible(layout.answer_button,false);
						quiz_ShowQuestion(quiz.question_order[parseInt(user.data.progress)]);
					//}
				}
			break;
			case "button_hint_continue":
				// you just had a hint, all we do now, is remove the popup and you are go!
				Hybrid.removeElement(layout.popup);
			break;
			case "button_hint":
				Hybrid.playSound("hint");
				quiz_showHint();
			break;				
			case "button_answer":
				quiz_CheckAnswer();
				if(layout.media.kind=="hybridWebview")
				{
					Hybrid.debugmessage("stopped video!");
					Hybrid.setWebviewURL(layout.media,"img/video_stopped.png");// shut up any video's!
				}
			break;				
			case "button_again":
					// now it means START over, check if that's what they want with a prompt..
					//var user_answer=window.confirm("Weet je zeker dat je opnieuw wilt beginnen met de vragen om meer punten en stenen te verdienen?");
					reset_game.init();
					if(0)
					{
						// we do a call to the server to reset the game, 
						// we reset all values in javascript
						// and then init the quiz!
						user.data.progress=0;
						//user.data.punten=0;
						user.data.hints=[];
						for(var i=0;i<user.data.question_order.length;i++)
							user.data.hints.push(0);// geen hints gebruikt..
						// we should tell the server and on succes get the new order and THEN init the quiz!
						
						var data={};
						data.page="quiz";
						data.stat="reset";
						data.user=user.data.naam;
						Hybrid.setVars("add_stat.php", data);
						
						var data={};
//						map.state="reset game";
						data.naam=Hybrid.getCookie("user_naam");
						data.wachtwoord=Hybrid.getCookie("user_wachtwoord");
						data.ck=new Date().getTime();
						Hybrid.debugmessage("reset_game.php?naam="+data.naam+"&"+data.wachtwoord+"ck="+data.ck);
						Hybrid.getVars("reset_game.php",data,resetGame_ServerCallback,resetGame_ServerFail);
						//quiz.init();					
					}
					//Hybrid.debugmessage("user_answer: "+user_answer);
			break;
			case "button_city":
				map.init();
			break;				
			case "button_high":
				high.init();
			break;				
			case "button_stop":
				start.init();
			break;				
			default:
				Hybrid.debugmessage("handleButtonsQuiz: "+label);
		}
	}
	function resetGame_ServerCallback(response)
	{
		var id;
		if(response.succes=="1")
		{
			Hybrid.debugmessage("Got back reset game: "+response.user);
			Hybrid.debugmessage("new question order received: "+response.user.question_order);
			user.data.question_order=response.user.question_order;
			
			// als ik dit doe, krijg ik de oude vragen NOGmaals.
			// instead, refresh the page!
			// quiz.init();
			location.reload();
			
			// we weten de nieuwe volgorde van de vragen, deze zit in 
			// 
		}else
		{
			var all;
			Hybrid.showWarning("Sorry, je antwoord is niet opgeslagen, check je internet verbinding!\n\nServer geeft error: "+response.error+" ("+response.errorcode+"), het spel start opnieuw op.");
			Hybrid.debugmessage("Request failed.. : "+response.error+" ("+response.errorcode+") het spel start opnieuw op.");
			
			for(all in response)
				Hybrid.debugmessage("response["+all+"]="+response[all]);
			
			// go to login again!
			setTimeout(start.init,200); // after ten seconds..
			return;
		}
	}
	function resetGame_ServerFail(response)
	{
		Hybrid.showWarning("Check your internet connection: mangled answer or no answer received.");
		Hybrid.debugmessage("Request failed..");
		
	}	
	

	//map----------------------------------
	var map = {};
	map.init = initMap;
	map.mouse = {};
	map.framecounter = 0;
	map.bar_height = 80;
	map.menu_width = 530;
	map.button_height = 428; // 424
	map.menu_offset = 0;
	map.menu_speed = 0;
	map.state = "init";
	map.menu_height = Hybrid.height;
	map.dragging = -1; // no item being dragged!
	map.drag_object = {}; // store stuff here
	map.houses = [];
	map.current_map = -1;
	map.shop = []; // we want to fill this ONLY once!
	map.plaats = ["null", "Steenbergen", "De Heen", "Nieuw Vossemeer", "Kruisland", "Dinteloord", "Welberg"]; // merge

	function initMap() {
		
		if(typeof(user.data.bought_per_city)==="undefined")
		{
			console.log("user.data.bought_per_city = undefined!");
			console.log(JSON.stringify(user.data));
			user.data.bought_per_city=[];
			user.data.bought_per_city[0]=user.data.gekochtehuizen;
			user.data.bought_per_city[1]=[];
			user.data.bought_per_city[2]=[];
			user.data.bought_per_city[3]=[];
			user.data.bought_per_city[4]=[];
			user.data.bought_per_city[5]=[];
			user.data.bought_per_city[6]=[];
			user.data.bought_per_city[7]=[];
			user.data.bought_per_city[8]=[]; // add some at the end, doesn't hurt, shows it's converted.
			// this otherwise goes wrong if you start in map, with an uncoverted file.. :(
			setTimeout(initMap,1000);
			return;
		}
	    var data = {};
	    data.page = "map";
	    data.user = user.data.naam;
	    data.stat = "page";
	    Hybrid.setVars("add_stat.php", data);

	    if (map.current_map == -1) {
	        map.current_map = user.data.plaats;
	    } // merge!

	    Hybrid.playSound("next_question");
	    Hybrid.debugmessage("START map called! Plaats:" + user.data.plaats);
	    Hybrid.setCookie("lastpage", "map");
	    Hybrid.resizeFunction = handleResizemap;

	    // set the location, can be 6 different ones!
	    map.back_index = 'location' + map.current_map;
	    Hybrid.debugmessage("Hybrid.graphics_manifest['" + map.back_index + "']: ");
	    //Hybrid.debugmessage(Hybrid.graphics_manifest[map.back_index]); // this way it prints the internal structure as well!


	    if (!Hybrid.graphics_manifest.hasOwnProperty(map.back_index)) {
	        Hybrid.throwError(map.back_index + " not defined in graphics_manifest");
	    }
	    map.back_w = Hybrid.graphics_manifest[map.back_index].w; // all we need to do is
	    map.back_h = Hybrid.graphics_manifest[map.back_index].h;
	    // center it, kind of..
	    map.offset = {
	        x: Hybrid.graphics_manifest[map.back_index].w / 2 - Hybrid.width / 2,
	        y: Hybrid.graphics_manifest[map.back_index].h / 2 - Hybrid.height / 2
	    };


		// fix old user.data.bought_per_city[map.current_map]
	    Hybrid.debugmessage("user.data.bought_per_city[map.current_map]: " + JSON.stringify(user.data.bought_per_city));
	    //user.data.bought_per_city[map.current_map]
		
	    map.houses = [];
	    // default houses will be placed in map_fillShop!
	    // place the user houses from the server (user.data.bought_per_city[map.current_map])!
	    var i = 0;
	    for (i = 0; i < user.data.bought_per_city[map.current_map].length; i++) {
	        Hybrid.debugmessage("plaats gekochte huizen: " + user.data.bought_per_city[map.current_map][i].id + " ->" + user.data.bought_per_city[map.current_map][i].lx + "," + user.data.bought_per_city[map.current_map][i].ly);
	        map.houses.push({
	            id: "hous_" + user.data.bought_per_city[map.current_map][i].id,
	            lx: parseInt(user.data.bought_per_city[map.current_map][i].lx),
	            ly: parseInt(user.data.bought_per_city[map.current_map][i].ly),
	            moveable: true
	        });
	    }
		
	    console.log("map.current_map: " + map.current_map);
	    console.log("user houses in this city: " + JSON.stringify(map.houses));

	    // generate some random houses for testing..
	    //var i;
	    //for(i=0;i<25;i++)
	    //{
	    //	map.houses.push({id:"house",lx:Math.random()*map.back_w,ly:Math.random()*map.back_h});
	    //}
	    // now we need to sort th	em in Y!
	    map.houses.sort(map_sortOnY);

	    handleResizemap(); // this builds the page and sets the loop
	    if (1) //map.shop.length==0)  // we always need to do this, because we also get the default houses!
	        map_fillShop(); // only call this once it dynamically loads all you need!
	    else {
	        Hybrid.debugmessage("No need to load " + map.shop.length);
	        map.state = "displaying";
	        handleResizemap();
	        map_UpdateScrollbar(); // so this don't happen!
	    }
	}

	function map_sortOnY(a, b) {
	    if (a.ly > b.ly) return 1;
	    if (a.ly < b.ly) return -1;
	    return 0;
	}

	function map_fillShop() {
	    var data = {};
	    map.state = "loading";
	    //if(layout.ismap==true) Hybrid.setVisible(layout.loading_anim, true); // index, you get it from the graphics manifest!

	    data.city = map.current_map; // merge update..
	    Hybrid.debugmessage("call get_map_images_per_city.php?city=" + data.city);
	    Hybrid.getVars("get_map_images_per_city.php?ck=" + (new Date).getTime(), data, map_ServerCallback, map_ServerFail);
	}

	function map_ServerCallback(response) {
	    Hybrid.debugmessage("map_fillShop got data!");
	    var id;
	    var default_houses_need_to_be_placed = "";
	    if (response.succes == "1") {
	        Hybrid.debugmessage("Got back couple images object: " + response.images);
	        for (id in response.images) {
	            Hybrid.debugmessage("------------" + id);
	            var im = response.images[id];
	            for (var b in im) {
	                if (b != "src")
	                    Hybrid.debugmessage(b + "=" + im[b]);
	            }
	            /*
	 "images": {
        "hous_fOC1afuLwj": {
            "src": "data: ;base64-Csdfry4",
            "w": "287",
            "h": "221",
            "rx": "160",
            "ry": "216",
            "lx": "0",
            "ly": "0",
            "preload": true,
            "city": "7",
            "prijs": "250",
            "naam": "stadion.png",
            "kind": "sprite"
        }
				*/
	            // always add it to the manifest, it will only REALLY add it to the manifest if it's not already got an equivalent!!!
	            var o = {};
	            o.src = im.src;
	            o.id = id;
	            o.naam = im.naam;
	            o.w = parseInt(im.w);
	            o.h = parseInt(im.h);
	            o.rx = parseInt(im.rx);
	            o.ry = parseInt(im.ry);
	            if (o.rx > o.w || o.rx < o.w) o.rx = o.w / 2; // default is in the middle under!
	            if (o.ry > o.h || o.ry < o.h) o.ry = o.h;
	            o.lx = parseInt(im.lx);
	            o.ly = parseInt(im.ly);
	            o.preload = true;
	            o.kind = "sprite";
	            o.ss = {};
	            o.ss.house = [
	                [0, 0, o.w, o.h, 0, o.rx, o.ry]
	            ];


	            Hybrid.addToManifest(o, id, "dataURL", map_ImageLoadedCallback);
	            // this will automatically load the image, use
	            // Hybrid.checkAllImagesLoaded to see if you can continue safely.

	            if (parseInt(im.city) == 7) {
	                // check if this naam is allready in the shop.
	                var i;
	                var in_shop = false;
	                for (i = 0; i < map.shop.length; i++) {
	                    Hybrid.debugmessage("getPriceFromId  " + map.shop[i].img + "==" + id);
	                    if (map.shop[i].img == id) in_shop = true;
	                }
	                if (in_shop == false) {
	                    // add this to the shop!
	                    // if not present yet!
	                   Hybrid.debugmessage("add House to shop: " + im.naam);
	                    var o = {};
	                    o.naam = im.naam;
	                    o.prijs = parseInt(im.prijs);
	                    o.unlock = parseInt(im.unlock);
	                    o.unlocked = false; // (except if you HAVE more points allready.
	                    if (user.data.punten >= o.unlock) {
	                        o.unlocked = true; // we need to know the status, so we can see if something NEW is unlocked in the game!
	                    }
	                    o.img = id;
	                    map.shop.push(o);
	                }
	            } else {
	                if (o.lx == 0 && o.ly == 0) {
	                    // add to shop as a ONCE placeable house..
	                    // this is an exception ONLY to benefit the CMS!
	                    Hybrid.debugmessage("House " + o.naam + " needs to be placed");
	                    default_houses_need_to_be_placed += "'" + o.naam + "' ";
	                    var o = {};
	                    o.naam = im.naam;
	                    o.prijs = 0;
	                    o.img = id;
	                    o.setpos = true; // this will be detected on drop!
	                    map.shop.push(o);
	                } else {
	                    // this is a default house!
	                    Hybrid.debugmessage("add default House " + o.naam + " to map at " + o.lx + ", " + o.ly);
	                    o.moveable = false;
	                    map.houses.push(o);
	                    // we need to sort the houses on y!
	                }
	            }
	        }
	        Hybrid.debugmessage("End of add houses!");

	        // now we sort the houses according to price!
	        map.shop.sort(byUnlock);
	        // after this it might be handy to redraw the shop???

	        map.houses.sort(map_sortOnY); // sort the on map houses as well!
	        // we need to redraw the map??

	        // we need to update the scrollbar!!



	        if (default_houses_need_to_be_placed != "") {
	            Hybrid.showWarning("Some default houses need to be placed:\n" + default_houses_need_to_be_placed + "\nYou can find these in the shop until you place them.");
	        }
	    } else {
	        var all;
	        for (all in response)
	            Hybrid.debugmessage(all + "=" + response[all]);
	    }
	    if (layout.ismap == true) {
	        //Hybrid.setVisible(layout.loading_anim, true); // index, you get it from the graphics manifest!
	        map_drawHouses(); // to show the new sorting, even if it wasn't the first visit!
	    }
	}

	function byUnlock(a, b) {
	    if (a.unlock > b.unlock) return 1;
	    if (a.unlock < b.unlock) return -1;
	    return 0;
	}
	
	function map_ImageLoadedCallback() {
	    // this can be called from the map, OR ANY other page.
	    // if the last page wasn't map, we shouldn't resize and rebuild!)
	    if (layout.ismap == true) {
	        Hybrid.debugmessage("extra image just preloaded, jeee!");
	        if (Hybrid.checkAllImagesLoaded() == true) {
	            Hybrid.debugmessage("all images loaded");
	            map.state = "displaying";
	            // we need to refresh the shop and the map, the loop takes care of the map, but
	            // we need to manually refresh the shop.
	            // we should post a timeout loop that will only handleResize ONCE!
	            // because else. wowowowowo!
	            map_drawHouses();
	            handleResizemap();
	            map_UpdateScrollbar();
	        }
	    } else {
	        if (Hybrid.checkAllImagesLoaded() == true) {
	            // in chrome this is all I get, but I need to follow protocol!
	            Hybrid.debugmessage("DONE quietly filling the shop.." + map.shop.length);
	        } else {
	            Hybrid.debugmessage("shhh, quietly filling the shop.." + map.shop.length);
	        }
	    }
	}

	function map_ServerFail(response) {
	    //if(layout.ismap==true) Hybrid.setVisible(layout.loading_anim, false); // index, you get it from the graphics manifest!
	    //window.alert("Communication with the server interupted, try again later.");
	    Hybrid.debugmessage("Request failed..");

	}

	function mapLoop() {
	    var refreshMenu = false;

	    if (Math.abs(map.menu_speed) > 1) {
	        //Hybrid.debugmessage("map.menu_speed"+map.menu_speed);
	        map.menu_offset -= map.menu_speed;
	        map.menu_speed *= 0.9;
	        refreshMenu = true;
	    }
	    if (map.menu_offset < 0) {
	        map.menu_offset *= 0.9;
	        map.menu_speed = 0;
	        refreshMenu = true;
	    }
	    if (map.menu_offset > (map.menu_height - layout.menu_viewport)) {
	        map.menu_offset = (map.menu_height - layout.menu_viewport) * 0.1 + 0.9 * map.menu_offset; // soft bounce
	        map.menu_speed = 0;
	        refreshMenu = true;
	    }
	    if (refreshMenu) {
	        Hybrid.moveBox(layout.menu_inside, 0, -map.menu_offset);
	    }
	    // do the map!
	    var refreshMap = false;
	    if (map.just_changed) {
	        refreshMap = true;
	        map.just_changed = false; // once!
	    }
	    if (Math.abs(map.offset.dx) > 1 || Math.abs(map.offset.dy) > 1) {
	        map.offset.x -= map.offset.dx;
	        map.offset.y -= map.offset.dy;
	        map.offset.dx *= 0.9;
	        map.offset.dy *= 0.9;
	        refreshMap = true;
	    }

	    if (map.offset.x < 0) {
	        map.offset.x *= 0.9;
	        map.offset.dx = 0;
	        refreshMap = true;
	    }
	    if (map.offset.x > (map.back_w - layout.map.w)) {
	        map.offset.x = 0.9 * map.offset.x + 0.1 * (map.back_w - layout.map.w);
	        map.offset.dx = 0;
	        refreshMap = true;
	    }
	    if (map.offset.y < 0) {
	        map.offset.y *= 0.9;
	        map.offset.dy = 0;
	        refreshMap = true;
	    }
	    if (map.offset.y > (map.back_h - layout.map.h)) {
	        map.offset.y = 0.9 * map.offset.y + 0.1 * (map.back_h - layout.map.h);
	        map.offset.dy = 0;
	        refreshMap = true;
	    }

	    switch (map.state) {
	        case "loading":
	            // we need to periodically check if all images in the manifest are loaded.
	            // if so, we need to update the shop, and the map!
	            refreshMap = false;
	            break;
	    }

	    if (refreshMap) {
	        Hybrid.moveBox(layout.map_inside, -map.offset.x, -map.offset.y);
	        // we ALSO need to move everything on the canvas and check what needs to be drawn!
	        map_drawHouses();
	        map_drawScrollbar();
	    }
	}

	function map_drawHouses() {
	    var i;
	    if (typeof(layout.map_canvas.context) === "undefined") {
	        // sorry this happens somehow on safari!
	        Hybrid.debugmessage("safari crash prevention.");
	        return;
	    }
	    var ctx = layout.map_canvas.context;
	    Hybrid.clearCanvas(layout.map_canvas);
	    for (i = 0; i < map.houses.length; i++) {
	        if (map.houses[i].id == "house") {
	            ctx.fillStyle = "#f00";
	            ctx.fillRect(map.houses[i].lx - map.offset.x - 10, map.houses[i].ly - map.offset.y - 10, 20, 20);
	        } else {
	            if (typeof(map.houses[i]) !== "undefined") {
	                // draw a REAL house 
	                Hybrid.drawSprite(layout.map_canvas, map.houses[i].id, "house", map.houses[i].lx - map.offset.x, map.houses[i].ly - map.offset.y, 0, 0, 1);
	            } else {
	                Hybrid.debugmessage("house " + i + " not loaded, so cannot draw! ");
	            }
	        }
	        // draw the registration marker to show where to click for relocating.
	        //	ctx.fillStyle="#fff";
	        //	ctx.fillRect(map.houses[i].lx-map.offset.x-5,map.houses[i].ly-map.offset.y-5,10,10);

	    }
	}

	function handleResizemap() {
	    // we shouldn't do this too soon in a row, that's sillyness.
	    // the allimagesloaded creates false positives and fast repetitions!.
	    var pass_test = false;
	    if (typeof(layout.last_resize) === "undefined") {
	        pass_test = true;
	    } else {
	        var dt = layout.last_resize - (new Date()).getTime();
	        if (dt > 100) {
	            pass_test = true;
	        }
	    }
	    if (pass_test == false) {
	        Hybrid.debugmessage("too soon!");
	        return;
	    } else {
	        // keep time for next visit!
	        layout.last_resize = (new Date()).getTime();
	    }

	    Hybrid.debugmessage("page map build up:" + Hybrid.width + "x" + Hybrid.height);
	    Hybrid.erasePage();

	    layout = {}; // erase any old layout!
	    layout.ismap = true; // this makes it possible to determin if we have to draw on loading the houses, dirty hack, but will work!


	    //		layout.scrollwidth=Hybrid.getScrollbarWidth(); // get's the scrollbar width by experimenting!
	    // we are going to do it the HARD way, using a top hotspot.

	    layout.back = Hybrid.createLayer();
	    Hybrid.setBoxColor(layout.back, palet.pale_green); // this should be set to cover all, but that's for later!

	    var w, h, x, y, f, tx, ty, string;
	    w = Hybrid.width;
	    h = map.bar_height;
	    x = 0;
	    y = 0;
	    layout.bar = Hybrid.createBox(layout.back, x, y, w, h);
	    Hybrid.setBoxColor(layout.bar, palet.pale_blue); // this should be set to cover all, but that's for later!

	    // stuff in the bar
	    var city = map.plaats[map.current_map];
	    layout.city_name = Hybrid.createTextBox(layout.bar, 100, 20, 550, 100, fonts.head, "#fff", "left", fontsz.head, city);

	    // Question Progress
	    w = 412;
	    h = 30;
	    x = (Hybrid.width - 1000);
	    y = (quiz.bar_height - h) / 2 + 5;
	    Hybrid.debugmessage("create progress boxes.");
	    layout.progress_total = Hybrid.createBox(layout.bar, x, y, w, h);
	    Hybrid.setBoxColor(layout.progress_total, "#fff");
	    Hybrid.debugmessage("create progress box2");
	    layout.progress = Hybrid.createBox(layout.bar, x, y, w * (parseInt(user.data.progress) / 30), h);
	    Hybrid.setBoxColor(layout.progress, palet.pale_yellow);

	    Hybrid.debugmessage("create progress text");
	    layout.vraag_nr = Hybrid.createTextBox(layout.bar, x - 400, 25, 350, 100, fonts.body, "#fff", "right", fontsz.menu, "Vraag x/x");


	    // SET Question Progress
	    var show_vraag_nr = (parseInt(user.data.progress) + 1);
	    if (show_vraag_nr > quiz.questions.length) show_vraag_nr = quiz.question_order.length;
	    Hybrid.setText(layout.vraag_nr, "Vraag " + show_vraag_nr + "/" + quiz.question_order.length);
	    var w = 412;
	    w = w * (parseInt(user.data.progress) / parseInt(quiz.question_order.length));
	    var h = 30;
	    Hybrid.sizeBox(layout.progress, w, h);

	    layout.score_label = Hybrid.createTextBox(layout.bar, Hybrid.width - 680, 25, 600, 100, fonts.body, "#fff", "right", fontsz.menu, "Score <em>" + parseInt(user.data.punten) + "</em> punten / <em>" + parseInt(user.data.stenen) + "</em> stenen");


	    // make the switch city control!


	    //		w=Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
	    //		h=Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
	    //		x=x-w-30;
	    //		Hybrid.createSpriteButton(layout.hotspot,x,y,w,h,'buttons',"high","button_high",handleButtonsMap);


	    // background and scrollbox of menu buttons
	    w = map.menu_width; //+layout.scrollwidth
	    h = Hybrid.height - map.bar_height;
	    x = 0;
	    y = map.bar_height;
	    layout.menu_viewport = h;
	    layout.menu = Hybrid.createBox(layout.back, x, y, w, h);
	    Hybrid.setBoxColor(layout.menu, palet.grey_blue); // this should be set to cover all, but that's for later!
	    //Hybrid.setBoxScrollable(layout.menu,false,true);

	    // build a bunch of content to test easiest scrolling!		
	    map.menu_height = map.shop.length * map.button_height + 10;
	    Hybrid.debugmessage("map.menu_height: " + map.menu_height);
	    Hybrid.debugmessage("set Shop Height to: " + map.menu_height);
	    w = map.menu_width;
	    h = map.menu_height;
	    x = 0;
	    y = -map.menu_offset;
	    layout.menu_inside = Hybrid.createBox(layout.menu, x, y, w, h);
	    var i, temp;
	    Hybrid.debugmessage("map.shop.length: " + map.shop.length);
	    for (i = 0; i < map.shop.length; i++) {
	        w = map.menu_width; //-layout.scrollwidth
	        h = map.button_height;
	        x = 0;
	        y = map.button_height * i;
	        map.shop[i].canv = Hybrid.createCanvas(layout.menu_inside, x, y, w, h);
	        drawShopItem(i);
	    }

	    // background and map!
	    w = Hybrid.width - map.menu_width; //-layout.scrollwidth
	    h = Hybrid.height - map.bar_height;
	    x = map.menu_width; //+layout.scrollwidth
	    y = map.bar_height;
	    layout.map = Hybrid.createBox(layout.back, x, y, w, h);
	    layout.map.x = x; // save for future ref!
	    layout.map.y = y;
	    layout.map.w = w; // save for future ref!
	    layout.map.h = h;

	    // inside this map we open a HUGE layer and set the location as background
	    w = Hybrid.graphics_manifest[map.back_index].w;
	    h = Hybrid.graphics_manifest[map.back_index].h;
	    x = -map.offset.x; //+layout.scrollwidth
	    y = -map.offset.y;
	    map.offset.dx = 0;
	    map.offset.dy = 0; // set scroll speeds to zero!
	    layout.map_inside = Hybrid.createBox(layout.map, x, y, w, h);
	    Hybrid.setBoxColor(layout.map_inside, palet.map_orange); // this should be set to cover all, but that's for later!
	    Hybrid.setBoxImage(layout.map_inside, map.back_index); // this should be set to cover all, but that's for later!

	    // on top of THAT we create a full size CANVAS!
	    w = Hybrid.width - map.menu_width; //-layout.scrollwidth
	    h = Hybrid.height - map.bar_height;
	    x = map.menu_width; //+layout.scrollwidth
	    y = map.bar_height;
	    layout.map_canvas = Hybrid.createCanvas(layout.back, x, y, w, h);
	    // draw the canvas for the first time.
	    map_drawHouses();

	    // create the scrollbar!
	    layout.scroll = {};
	    layout.scroll.back = {};
	    layout.scroll.back.x = map.menu_width;
	    layout.scroll.back.y = map.bar_height;
	    layout.scroll.back.w = 50;
	    layout.scroll.back.h = Hybrid.height - map.bar_height;
	    layout.scroll.track = {};
	    layout.scroll.track.x = 10; // 10 margin!
	    layout.scroll.track.y = 55; // 55 for each button!
	    layout.scroll.track.w = layout.scroll.back.w - 20; // 55 for each button!
	    layout.scroll.track.h = layout.scroll.back.h - 110; // 55 for each button!
	    layout.scroll.size = layout.scroll.track.h; // must be initialised by a loaded shop!
	    layout.scroll.y = 0;
	    layout.scroll_canvas = Hybrid.createCanvas(layout.back, layout.scroll.back.x, layout.scroll.back.y, layout.scroll.back.w, layout.scroll.back.h);
	    map_drawScrollbar();
	    // draw the scrollbar for the first time.

	    // we create a hotspot HERE!
	    layout.hotspot = Hybrid.createLayer();
	    Hybrid.makeDraggable(layout.hotspot, map_HandleDown, map_HandleUp, handleDrag); // this should be set to cover all, but that's for later!
	    // create a box for the drag Item..
	    w = map.menu_width; //-layout.scrollwidth
	    h = 700; //map.button_height;
	    x = 200; //+layout.scrollwidth // inivisble position.
	    y = 200;
	    layout.dragitem = Hybrid.createCanvas(layout.hotspot, x, y, w, h);
	    //Hybrid.setBoxColor(layout.dragitem,"#fff"); // this should be set to cover all, but that's for later!
	    Hybrid.setVisible(layout.dragitem, false); // this should be set to cover all, but that's for later!

	    // put the buttons ON the hotspot to make sure they work!

	    // buttons (stoppen) on top of map!
	    w = Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
	    x = Hybrid.width - w - 60;
	    y = 60 + map.bar_height;
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "stop", "button_stop", handleButtonsMap);
	    // buttons (highscores) on top of map!
	    w = Hybrid.graphics_manifest['buttons'].ss['high'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['high'][0][3];
	    x = x - w - 30;
	    y = 60 + map.bar_height;
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "high", "button_high", handleButtonsMap);
	    // buttons (verder) on top of map!
	    // if progress is not total!
	    // so check that!
	    var nr = parseInt(user.data.progress);
	    //if(nr<quiz.questions.length)
	    //{
	    w = Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
	    x = Hybrid.width - w - 60;
	    y = Hybrid.height - h - 60;
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "continue", "button_continue", handleButtonsMap);
	    //}


	    // show the popup?
	    if (wwjw.page_extras == "show_welcome") {
	        //wwjw.page_extras=""; // we do this when we depart! If a resize is in effect, the popup should still be there.
	        // show the popup!
	        Hybrid.setCookie("lastpage", "welcome"); // virtual page, but you can return to it..
	        Hybrid.debugmessage("show the popup and go from there!");
	        layout.popup = Hybrid.createLayer();
	        Hybrid.setBoxColor(layout.popup, "rgba(0,0,0,0.5)");

	        var x, y, w, h;
	        w = 985;
	        h = 799;
	        x = Hybrid.width / 2 - w / 2;
	        y = Hybrid.height / 2 - h / 2;
	        layout.popup_window = Hybrid.createBox(layout.popup, x, y, w, h);
	        Hybrid.setBoxColor(layout.popup_window, palet.popup_back);
	        Hybrid.setBoxShadow(layout.popup_window, 0, 0, 50, "#000");

	        x = 88;
	        y = 80;
	        w = 985 - x * 2;
	        h = 460;
	        var str = "";
	        str += "<h1><center>Welkom thuis</center></h1>";
	        str += "Wat gaat het worden vandaag? Een achtbaan achter de kerk of een manege op de markt? Is jouw voetbalvereniging hoognodig aan een stadion toe? Het is allemaal geen probleem. Je moet alleen de vragen in de game goed beantwoorden. Voor ieder goed antwoord krijg je punten. Heb je genoeg punten verzameld, dan kun je een keuze maken uit een van de gebouwen, attracties of voorzieningen. Een stadion is natuurlijk wel wat duurder dan een speeltuin. Sleep jouw aankoop naar de plek die jij er voor in gedachten hebt en hoppa: het is in één keer een heel stuk prettiger wonen in jouw woonplaats. Succes!";
	        layout.popup_text = Hybrid.createTextBox(layout.popup_window, x, y, w, h, "sans-serif", "#2f2f2f", "left", fontsz.body, str);
	        //Hybrid.setBoxColor(layout.popup_text,palet.dark_blue);

	        // create button spelen
	        w = Hybrid.graphics_manifest['buttons'].ss['play'][0][2];
	        h = Hybrid.graphics_manifest['buttons'].ss['play'][0][3];
	        x = 985 / 2 - w / 2;
	        y = 548;
	        Hybrid.createSpriteButton(layout.popup_window, x, y, w, h, 'buttons', "play", "button_play", handleButtonsMap);

	    }
		// resize the scrollbar!

	    //layout.loading_anim=Hybrid.createBox(layout.hotspot,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
	    //Hybrid.setBoxImage(layout.loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
	    //Hybrid.setVisible(layout.loading_anim, false); // index, you get it from the graphics manifest!


	    // resize the scrollbar!

	    //layout.loading_anim=Hybrid.createBox(layout.hotspot,Hybrid.width/2-265/2,Hybrid.height/2-200/2,265,200);
	    //Hybrid.setBoxImage(layout.loading_anim, "loading_anim"); // index, you get it from the graphics manifest!
	    //Hybrid.setVisible(layout.loading_anim, false); // index, you get it from the graphics manifest!

	    // prev/next button merge
	    x = 10;
	    y = 5;
	    w = Hybrid.graphics_manifest['buttons'].ss['prev'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['prev'][0][3];
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "prev", "button_prev", handleButtonsMap);

	    x = 520;
	    y = 5;
	    w = Hybrid.graphics_manifest['buttons'].ss['next'][0][2];
	    h = Hybrid.graphics_manifest['buttons'].ss['next'][0][3];
	    Hybrid.createSpriteButton(layout.hotspot, x, y, w, h, 'buttons', "next", "button_next", handleButtonsMap);

	    Hybrid.startLoop(mapLoop, 20);


	}

	function drawShopItem(nr) {
	    var w = map.menu_width,
	        h = map.button_height;
	    Hybrid.clearCanvas(map.shop[nr].canv);
	    var ctx = map.shop[nr].canv.context;
	    // setText naam
	    ctx.font = fontsz.menu + 'px ' + fonts.head;
	    ctx.textAlign = 'left';
	    ctx.fillStyle = "#fff";
	    ctx.fillText((nr + 1) + ") " + map.shop[nr].naam, 34, 400); // "+map.shop[nr].img+"  for debug handy!
	    // setText stenen
	    ctx.font = fontsz.body + 'px ' + fonts.body;
	    ctx.textAlign = 'right';
	    ctx.fillStyle = "#fff";
	    ctx.fillText(map.shop[nr].prijs + " stenen", 494, 400);
	    // also draw the image..
	    ctx.fillStyle = "#fff";
	    ctx.fillRect(35, 35, map.menu_width - 70, 320);

	    // get the scale factor!
	    var fx = (map.menu_width - 70) / Hybrid.graphics_manifest[map.shop[nr].img].w;
	    var fy = 320 / Hybrid.graphics_manifest[map.shop[nr].img].h;
	    var f = fx;
	    if (fy < fx) f = fy;
	    if (f > 0.9 && f < 1.1) f = 1;
	    else f *= 0.9;
	    // this drawImage sometimes fails.. Don't know why
	    // image is HIAuD1bArm (Dolfinarium) which is reported to be: 589x303 
	    // _hybridDrawImage: [object Object],hous_HIAuD1bArm,265,195,0,0.702886247877759
	    // _hybridDrawImage2: [object Object],hous_HIAuD1bArm,589,303
	    // Hybrid.debugmessage("_hybridDrawImage2: "+hbc+","+img_nr+","+bw+","+bh);
	    // hbc.context.drawImage(image, 0,0,bw,bh,-bw/2,-bh/2,bw,bh);
	    Hybrid.drawImage(map.shop[nr].canv, map.shop[nr].img, 35 + (map.menu_width - 70) / 2, 35 + 320 / 2, 0, f);

	    // check if we can actually afford this and if not grey it!
	    //Hybrid.debugmessage(map.shop[nr].prijs+" > "+parseInt(user.data.stenen) );
	    console.log(map.shop[nr].unlock + ">" + parseInt(user.data.punten))
	    if (map.shop[nr].unlock > parseInt(user.data.punten)) {
	        // grey the item
	        ctx.save();
	        ctx.globalCompositeOperation = "xor";
	        Hybrid.drawImage(map.shop[nr].canv, map.shop[nr].img, 35 + (w - 70) / 2, 35 + 320 / 2, 0, f);
	        ctx.restore();
	        ctx.fillStyle = "rgba(87,118,135,0.9)";
	        ctx.fillRect(0, 35, map.menu_width, 330);
	        ctx.strokeStyle = "#fff";
	        ctx.lineWidth = 2;
	        ctx.strokeRect(35, 35, w - 70, 320); // omcirkel waar plaatje normaal staat..
	        ctx.strokeRect(35, h - 92, w - 70, 20);
	        ctx.fillStyle = "#fff";
	        ctx.font = fontsz.head + 'px ' + fonts.head;
	        ctx.textAlign = 'center';
	        var pct = user.data.punten / map.shop[nr].unlock;
	        ctx.fillRect(37, h - 90, (w - 74) * pct, 16);
	        ctx.fillText("beschikbaar bij", w / 2, h / 2 - 40);
	        ctx.fillText(map.shop[nr].unlock + " punten", w / 2, h / 2);
	        // show when you can get it!
	    } else {
	        if (map.shop[nr].prijs > parseInt(user.data.stenen)) {
	            // grey the item
	            ctx.fillStyle = "rgba(87,118,135,0.5)";
	            ctx.fillRect(0, 35, map.menu_width, 420);
	            ctx.fillStyle = "#fff";
	            ctx.font = fontsz.head + 'px ' + fonts.head;
	            ctx.textAlign = 'center';
	            ctx.fillText("Stenen nodig: " + (map.shop[nr].prijs - user.data.stenen), w / 2, h / 2);
	        }
	    }

	    // and the little stripe underneath
	    ctx.fillStyle = "#fff";
	    ctx.fillRect(35, map.button_height - 3, map.menu_width - 70, 3);
	    Hybrid.mouseWheelCallback = map_HandleMousewheel; // Hybrid.listenToMouseWheel..
	}
	// scrollbar functions!
	//----------------------------------------------------------------------------------------
	function map_drawScrollbar() {
	    var i;
	    Hybrid.clearCanvas(layout.scroll_canvas);
	    var ctx = layout.scroll_canvas.context;
	    // draw Back
	    ctx.fillStyle = "rgba(255,255,255,0.6)";
	    ctx.fillRect(0, 0, layout.scroll.back.w, layout.scroll.back.h);
	    // draw track
	    ctx.fillStyle = "rgba(255,255,255,0.6)";
	    ctx.fillRect(layout.scroll.track.x, layout.scroll.track.y, layout.scroll.track.w, layout.scroll.track.h);

	    // draw Blue thing..
	    ctx.fillStyle = palet.pale_blue;
	    ctx.fillRect(layout.scroll.track.x, layout.scroll.track.y + layout.scroll.y, layout.scroll.track.w, layout.scroll.size);
	    // draw triangles on top!
	    ctx.beginPath();
	    ctx.moveTo(10, 35);
	    ctx.lineTo(25, 12);
	    ctx.lineTo(40, 35);
	    ctx.closePath();
	    ctx.fill();
	    // draw triangles on bottom!
	    ctx.beginPath();
	    ctx.moveTo(10, layout.scroll.back.h - 35);
	    ctx.lineTo(25, layout.scroll.back.h - 12);
	    ctx.lineTo(40, layout.scroll.back.h - 35);
	    ctx.closePath();
	    ctx.fill();

	}

	function map_HandleMousewheel(d) {
	    // scroll the scrollbar;
	    layout.scroll.y -= d;
	    map_userControlledScrollbar();
	}

	function map_UpdateScrollbar() {
	    // the menu changed somehow, let's reflect the changes in the scrollbar!
	    //		layout.scroll.size=layout.scroll.track.h*layout.menu_viewport/(map.menu_height-layout.menu_viewport);
	    Hybrid.debugmessage("layout.menu_viewport: " + layout.menu_viewport); // this get's a NaN..
	    Hybrid.debugmessage("map.menu_height: " + map.menu_height); // this get's a NaN..
	    layout.scroll.size = layout.scroll.track.h * layout.menu_viewport / (map.menu_height + layout.menu_viewport);

	    Hybrid.debugmessage("layout.menu_viewport: " + layout.menu_viewport); // this get's a NaN..
	    Hybrid.debugmessage("map.menu_height: " + map.menu_height); // this get's a NaN..
	    Hybrid.debugmessage("map.menu_offset: " + map.menu_offset); // this get's a NaN..
	    Hybrid.debugmessage("layout.scroll.size: " + layout.scroll.size); // this get's a NaN..
	    Hybrid.debugmessage("layout.scroll.track.h: " + layout.scroll.track.h); // this get's a NaN..
	    layout.scroll.y = (layout.scroll.track.h - layout.scroll.size) * map.menu_offset / (map.menu_height - layout.menu_viewport);
	    Hybrid.debugmessage("layout.scroll.y: " + layout.scroll.y); // this get's a NaN..
	    map_clampScrollbar();
	    map_drawScrollbar();
	}

	function map_clampScrollbar() {
	    if (layout.scroll.y < 0) layout.scroll.y = 0;
	    if (layout.scroll.y > (layout.scroll.track.h - layout.scroll.size)) layout.scroll.y = (layout.scroll.track.h - layout.scroll.size);
	}

	function map_userControlledScrollbar() {
	    map_clampScrollbar();
	    map_drawScrollbar();
	    // move the menu box as well!
	    map.menu_offset = (map.menu_height - layout.menu_viewport) * layout.scroll.y / (layout.scroll.track.h - layout.scroll.size);
	    map.menu_speed = 1.1; // this makes it display, but the next time speed has dropped enough not to move!
	}
	//----------------------------------------------------------------------------------------
	// scrollbar functions!

	function map_HandleDown(id, x, y) {
		 console.log("map_HandleDown");
	    if (y > map.bar_height){
	        if (x < map.menu_width) {
	            // controlling menu
	            map.menudragdir = ""; // needs to be determined when first dragging!
	            Hybrid.debugmessage("Menu Down id:" + id + "->" + x + "," + y);
	            map.down = {
	                x: x,
	                y: y
	            };
	            map.button_clicked = Math.floor((y - map.bar_height + map.menu_offset) / map.button_height);
	            map.dragTarget = "menu";
	            Hybrid.debugmessage("Clicked button:" + map.button_clicked);
	            // if you have the money, that is!
	            var cost = getPriceFromId(map.shop[map.button_clicked].img);
	            var unlocked = getUnlockFromId(map.shop[map.button_clicked].img);
	            // IE 11 wist mij te melden: map.button_clicked= NaN (online!)
	            // ook deed de scrollbar het niet.

	            Hybrid.debugmessage("cost1" + map.shop[map.button_clicked].prijs);
	            Hybrid.debugmessage("Cost: " + cost);
	            Hybrid.debugmessage("Stones: " + user.data.stenen);
	            if (cost > user.data.stenen) {
	                map.button_clicked = -1;
	                Hybrid.debugmessage("Sorry, you don't have: " + cost);
	            }
				if (unlocked > user.data.punten) {
	                map.button_clicked = -1;
	                Hybrid.debugmessage("not unlocked yet: " + unlocked);
	            }
	        } else {
	            // might be scrollbar!
	            if (x < (layout.scroll.back.x + layout.scroll.back.w)) {
	                map.down = {
	                    x: x,
	                    y: y
	                };
	                x = x - layout.scroll.back.x;
	                y = y - layout.scroll.back.y;
	                Hybrid.debugmessage("Click scroll at:" + x + "," + y);
	                // you clicked the scroll!
	                var handled = false;
	                // did you hit the box?
	                // an arrow?
	                if (handled == false && y < layout.scroll.track.y) {
	                    // top button!
	                    handled = true;
	                    Hybrid.debugmessage("you hit the top button of the scrollbar");
	                    layout.scroll.y -= 10;
	                    map_userControlledScrollbar();
	                    map.dragging = -1;
	                }
	                if (handled == false && y > (layout.scroll.back.h - layout.scroll.track.y)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you hit the bottom button of the scrollbar");
	                    layout.scroll.y += 10;
	                    map_userControlledScrollbar();
	                    map.dragging = -1;
	                }
	                y = y - layout.scroll.track.y;
	                if (handled == false && y < (layout.scroll.y)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you want the scroll thingy to shoot up");
	                    map.dragging = -1;
	                    layout.scroll.y -= 120;
	                    map_userControlledScrollbar();
	                }
	                if (handled == false && y > (layout.scroll.y + layout.scroll.size)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you want the scroll thingy to shoot down");
	                    map.dragging = -1;
	                    layout.scroll.y += 120;
	                    map_userControlledScrollbar();
	                }
	                if (handled == false && y >= (layout.scroll.y) && y <= (layout.scroll.y + layout.scroll.size)) {
	                    // bottom button!
	                    handled = true;
	                    Hybrid.debugmessage("you started dragging the scroll thingy");
	                    map.dragging = 1; // tell up and move there is something to drop!
	                    layout.scroll.down = {
	                        x: x,
	                        y: y - layout.scroll.y
	                    };
	                    map.dragTarget = "scroll";

	                }


	            } else {

	                // controlling map
	                //Hybrid.debugmessage("Map Down id:"+id+"->"+x+","+y);
	                // we might be hitting a moveable house, check for that!
	                // we want to check the kader, not the dist to rx, ry!
	                var hit_house = -1;
	                var min_dist = 10000000; // this becomes top house!!
	                var max_y = -10000000; // this becomes top house!!
	                Hybrid.debugmessage("DOWN ON MAP " + (x - map.menu_width) + "," + (y - map.bar_height));
	                for (i = 0; i < map.houses.length; i++) {
	                    if (map.houses[i].id != "house") {
	                        Hybrid.debugmessage("checking houses for move(" + i + "): " + map.houses[i].id);
	                        if (map.houses[i].moveable) {
	                            var im = map.houses[i].id;
	                            var kader = {};
	                            kader.x = Math.floor(map.houses[i].lx - map.offset.x - Hybrid.graphics_manifest[im].rx);
	                            kader.y = Math.floor(map.houses[i].ly - map.offset.y - Hybrid.graphics_manifest[im].ry);
	                            kader.w = Hybrid.graphics_manifest[im].w;
	                            kader.h = Hybrid.graphics_manifest[im].h;

	                            // check a kader, but we have to get this kader from the graphics manifest
	                            // so we need an id!
	                            Hybrid.debugmessage("check kaders" + i + ": " + kader.x + "," + kader.y + " " + kader.w + "," + kader.h);
	                            if ((x - map.menu_width) > kader.x && (x - map.menu_width) < (kader.x + kader.w) && (y - map.bar_height) > kader.y && (y - map.bar_height) < (kader.y + kader.h)) {
	                                // unless it's MUCH smaller and closer!!
	                                var dx = (map.houses[i].lx - map.offset.x) - (x - map.menu_width);
	                                var dy = (map.houses[i].ly - map.offset.y) - (y - map.bar_height);
	                                var len = Math.sqrt(dx * dx + dy * dy);

	                                if (max_y < map.houses[i].ly && len < min_dist) {
	                                    // if there is more than one, grab the top one!
	                                    max_y = map.houses[i].ly;
	                                    min_dist = len;
	                                    hit_house = i;
	                                }
	                            }
	                        }
	                    } else {
	                        Hybrid.debugmessage("old test house (dot) is in there somewhere at place: " + i);
	                    }
	                }
	                if (hit_house != -1 && map.houses[hit_house].moveable) {
	                    Hybrid.debugmessage("probably hit moveable house:" + hit_house + " at " + min_dist);
	                    for (var all in map.houses[hit_house]) {
	                        Hybrid.debugmessage(all + ":" + map.houses[hit_house][all])
	                    }
	                    map.dragTarget = "moveHouse";
	                    // we need to erase it temporarily from the map!
	                    map.drag_object = map.houses.splice(hit_house, 1)[0]; // the whole object, including position and stuff.
	                    refreshMap = false; // show it's gone and re-sort!!
	                    map_drawHouses();
	                    // draw the thing on the layout.dragitem canvas
	                    Hybrid.clearCanvas(layout.dragitem);
	                    layout.dragitem.context.globalAlpha = 0.7;
	                    map.dragging = 1; // tell up there is something to drop!
	                    var im = map.drag_object.id;
	                    Hybrid.debugmessage("SetHouseMoving: " + im);
	                    map.drag_object.ox = map.drag_object.lx; // we need to save the old position!!!
	                    map.drag_object.oy = map.drag_object.ly; // we need to save the old position!!!
	                    map.drag_object.w = Hybrid.graphics_manifest[im].w;
	                    map.drag_object.h = Hybrid.graphics_manifest[im].h;
	                    //
	                    //map.drag_object.gx=-map.drag_object.w/2; // grab x for movebox!
	                    //map.drag_object.gy=-map.drag_object.h/2;
	                    //map.drag_object.gx=-Hybrid.graphics_manifest[im].rx;
	                    //map.drag_object.gy=-Hybrid.graphics_manifest[im].ry;
	                    //map.drag_object.gx=(x-map.menu_width+map.offset.x)-(map.drag_object.ox-Hybrid.graphics_manifest[im].rx);
	                    //map.drag_object.gy=(y-map.bar_height+map.offset.y)-(map.drag_object.oy-Hybrid.graphics_manifest[im].ry);
	                    map.drag_object.gx = (map.drag_object.ox - Hybrid.graphics_manifest[im].rx) - (x - map.menu_width + map.offset.x);
	                    map.drag_object.gy = (map.drag_object.oy - Hybrid.graphics_manifest[im].ry) - (y - map.bar_height + map.offset.y);

	                    Hybrid.drawImage(layout.dragitem, im, map.drag_object.w / 2, map.drag_object.h / 2, 0, 1);

	                    Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	                    Hybrid.setVisible(layout.dragitem, true); // this should be set to cover all, but that's for later!
	                    map.button_clicked = -1;

	                    // now show the draggable item!
	                } else {
	                    map.down = {
	                        x: x,
	                        y: y
	                    };
	                    map.dragTarget = "map";
	                }
	            } // end control map!
	        }
		} else {
	        // you clicked in the bar, so:
	        map.dragTarget = "bar";
	        map.dragging = -1;
	    }
	}

	function map_HandleUp(id, x, y) {
	    //Hybrid.debugmessage("UP: "+map.dragTarget);
	    switch (map.dragTarget) {
	        case "scroll":
	            map.dragging = -1;
	            Hybrid.debugmessage("you dropped the scroll thingy: " + map.dragging);
	            break;
	        case "moveHouse":
	            // convert it!
	            Hybrid.debugmessage("were we dragging anything?: " + map.dragging);
	            if (map.dragging != -1) {
	                // we were dragging an house moved from somewhere else, place it now and hide the dragItem.
	                // then adjust the position in the cookie AND on the server!
	                Hybrid.debugmessage("drop moved house at: " + parseInt(x) + "," + parseInt(y));
	                Hybrid.playSound("place");

	                // correct x and y to be a place inside the map.
	                var map_x = Math.floor(x) + map.offset.x - map.menu_width;
	                var map_y = Math.floor(y) + map.offset.y - map.bar_height;

	                // compensate for this particular grab_x and grab_y AND rx and ry
	                map_x = map_x + map.drag_object.gx + Hybrid.graphics_manifest[map.drag_object.id].rx;
	                map_y = map_y + map.drag_object.gy + Hybrid.graphics_manifest[map.drag_object.id].ry;

	                // create a house at this place;
	                map.houses.push({
	                    id: map.drag_object.id,
	                    lx: map_x,
	                    ly: map_y,
	                    moveable: true
	                }); // you dropped it, you can move it
	                map.just_changed = true;

	                // we need to sort houses on y!
	                map.houses.sort(map_sortOnY);
	                map_drawHouses();

	                // now we need to save this to the server
	                // moved house
	                var data = {};
	                data.id = map.drag_object.id.split("_")[1];
	                data.lx = Math.floor(map_x);
	                data.ly = Math.floor(map_y);
	                data.ox = Math.floor(map.drag_object.ox);
	                data.oy = Math.floor(map.drag_object.oy);
	                data.naam = Hybrid.getCookie("user_naam");
	                data.map = map.current_map; // map prev and next merge.
	                data.wachtwoord = Hybrid.getCookie("user_wachtwoord");
	                Hybrid.debugmessage("move_house.php?naam=" + data.naam + "&wachtwoord=" + data.wachtwoord + "&id=" + data.id + "&lx=" + data.lx + "&ly=" + data.ly + "&ly=" + data.id + "&ox=" + data.ox + "&oy=" + data.oy);
	                Hybrid.getVars("move_house.php", data, map_BuyCallback, map_BuyFail); // we don't want to know about any stuff.

	                // remove drag item
	                Hybrid.setVisible(layout.dragitem, false); // this should be set to cover all, but that's for later!
	                map.dragging = -1;
	            }

	            // DEBUG: should't there be a break here????????	
	        case "menu":

	            Hybrid.debugmessage("were we dragging anything?: " + map.dragging);
	            if (map.dragging != -1) {
	                // we were dragging an item, place it now and hide the dragItem.
	                Hybrid.debugmessage("drop something at: " + parseInt(x) + "," + parseInt(y));
	                Hybrid.playSound("place");

	                // correct x and y to be a place inside the map.
	                var map_x = Math.floor(x) + map.offset.x - map.menu_width;
	                var map_y = Math.floor(y) + map.offset.y - map.bar_height;

	                // compensate for this particular grab_x and grab_y AND rx and ry
	                map_x = map_x + map.drag_object.gx + Hybrid.graphics_manifest[map.drag_object.id].rx;
	                map_y = map_y + map.drag_object.gy + Hybrid.graphics_manifest[map.drag_object.id].ry;

	                // create a house at this place;
	                map.houses.push({
	                    id: map.drag_object.id,
	                    lx: map_x,
	                    ly: map_y,
	                    moveable: true
	                }); // you dropped it, you can move it
	                map.just_changed = true;

	                // we need to sort houses on y!
	                map.houses.sort(map_sortOnY);

	                if (map.drag_object.setpos == true) {
	                    // we need to tell the server the new default position of this house!
	                    Hybrid.debugmessage("set default position");
	                    Hybrid.debugmessage("house id: " + map.drag_object.id.split("_")[1]);
	                    Hybrid.debugmessage("set lx:" + map_x);
	                    Hybrid.debugmessage("set ly:" + map_y);
	                    var data = {};
	                    data.id = map.drag_object.id.split("_")[1];
	                    data.lx = Math.floor(map_x);
	                    data.ly = Math.floor(map_y);
	                    Hybrid.getVars("set_default_pos.php", data, map_PositionCallback, map_PositionFail); // we don't want to know about any stuff.
	                } else {
	                    // now we need to save this to the server
	                    // regular house
	                    var data = {};
	                    data.id = map.drag_object.id.split("_")[1];
	                    data.lx = Math.floor(map_x);
	                    data.ly = Math.floor(map_y);
	                    data.prijs = getPriceFromId(map.drag_object.id);
	                    data.naam = Hybrid.getCookie("user_naam");
						data.map = map.current_map;
	                    data.wachtwoord = Hybrid.getCookie("user_wachtwoord");
	                    Hybrid.debugmessage("buy_house.php?naam=" + data.naam + "&wachtwoord=" + data.wachtwoord + "&id=" + data.id + "&lx=" + data.lx + "&ly=" + data.ly + "&ly=" + data.id + "&prijs=" + data.prijs); // we don't want to know about any stuff.
	                    //data.prijs=0; // so you can buy infinite houses.
	                    Hybrid.getVars("buy_house.php", data, map_BuyCallback, map_BuyFail); // we don't want to know about any stuff.

	                    // also add to local for rebuilds
	                    user.data.bought_per_city[map.current_map].push({
	                        id: data.id,
	                        lx: data.lx,
	                        ly: data.ly
	                    });

	                    // subtract the stones
	                    user.data.stenen -= parseInt(data.prijs);
	                    // show it
	                    Hybrid.setText(layout.score_label, "Score <em>" + parseInt(user.data.punten) + "</em> punten / <em>" + parseInt(user.data.stenen) + "</em> stenen");
	                    // we redraw the shop, cause maybe we have a new greyed item!
	                    var i;
	                    for (i = 0; i < map.shop.length; i++) {
	                        drawShopItem(i);
	                    }

	                    var data = {};
	                    data.stat = "house";
	                    data.id = map.drag_object.id.split("_")[1];
	                    data.user = user.data.naam;
	                    Hybrid.setVars("add_stat.php", data);
	                }


	                // remove drag item
	                Hybrid.setVisible(layout.dragitem, false); // this should be set to cover all, but that's for later!
	                map.dragging = -1;
	            }
	            break;
	    }
	}

	function getPriceFromId(id) 
	{
	    var i;
	    for (i = 0; i < map.shop.length; i++) 
		{
	        Hybrid.debugmessage("getPriceFromId  " + map.shop[i].img + "==" + id);
	        if (map.shop[i].img == id) return map.shop[i].prijs;
	    }
	    return -1;
	}
	function getUnlockFromId(id)
	{
		var i;
		for(i=0;i<map.shop.length;i++)
		{
//			Hybrid.debugmessage("getUnlockFromId  "+map.shop[i].img+"=="+id);
			if(map.shop[i].img==id) return map.shop[i].unlock;
		}
		return -1;
	}
	function map_BuyCallback(response) 
	{
	    var id;
	    if (parseInt(response.succes) == 1) {
	        Hybrid.debugmessage("position saved");
	        // we do have to show the house, as well, somehow that doesn't happen.. Why?
	    } else {
	        Hybrid.debugmessage("position NOT saved: " + response.error_message);
	    }
	}

	function map_BuyFail(response) {
	    //window.alert("Communication with the server interupted, try again later.");
	    Hybrid.debugmessage("Request failed..");
	}

	function map_PositionCallback(response) {
	    var id;
	    if (parseInt(response.succes) == 1) {
	        Hybrid.debugmessage("position saved");
	    } else {
	        Hybrid.debugmessage("position NOT saved: " + response.error_message);
	    }
	}

	function map_PositionFail(response) {
	    //window.alert("Communication with the server interupted, try again later.");
	    Hybrid.debugmessage("Request failed..");
	}

	function handleDrag(id, x, y, dx, dy) {
		 console.log("handleDrag " + map.dragTarget);
	    switch (map.dragTarget) {
	        case "scroll":
	            if (map.dragging != -1) {
	                // we are scrolling!
	                x = x - layout.scroll.back.x;
	                y = y - layout.scroll.back.y;
	                y = y - layout.scroll.track.y;
	                layout.scroll.y = (y - layout.scroll.down.y);
	                map_userControlledScrollbar();
	            }
	            break;
	        case "moveHouse":
	            // show the dragItem in the right position!
	              if (map.dragging != -1) {
	                // show the dragItem in the right position!
	                Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	            }
	            break;
	        case "menu":
	            if (map.dragging != -1) {
	                // show the dragItem in the right position!
	                Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	                Hybrid.debugmessage("move the drag item!");
	            } else {
	                var swipe_dx = map.down.x - x;
	                var swipe_dy = map.down.y - y;
	                var swipe_len = Math.sqrt(swipe_dx * swipe_dx + swipe_dy * swipe_dy);
	                //Hybrid.debugmessage(" drag id:"+id+"->"+x+","+y+" "+dx+","+dy+" swipe_len:"+swipe_len);
	                if (swipe_len > 10 || map.menudragdir != "") // if determined swipe direction OR swipe_len is long enough to actually determine the swipe direction!
	                {
	                    if (map.menudragdir == "") {

	                        // check the direction of the swipe.
	                        var swipe_dx = map.down.x - x;
	                        var swipe_dy = map.down.y - y;
	                        if (Math.abs(dx) > Math.abs(dy)) {
	                            // trying to rip something from menu.
	                            map.menudragdir = "hori";
	                        } else {
	                            // trying to shift menu!
	                            map.menudragdir = "verti";
	                        }
	                        // if this happens, it was one, you couldn't pickup, so only one direction possible.
	                        if (map.button_clicked == -1)
	                            map.menudragdir = "verti";

	                    }
	                    // we know which way to go!
	                    Hybrid.debugmessage("map.menudragdir=" + map.menudragdir + " " + swipe_dx + "," + swipe_dy);
	                    if (map.menudragdir == "verti") {
	                        // shift the menu
	                        map.menu_speed = dy; // this will be carried out by the loop!
	                        map_UpdateScrollbar();
	                    } else {
	                        // show the ripping!
	                        Hybrid.debugmessage("picking up some object from list on side" + map.button_clicked);
	                        //Hybrid.playSound("buy_house"); // don't play this sound, I had to remove it for android.. Don't know why..
	                        map.dragging = map.button_clicked;
	                        // draw the thing on the layout.dragitem canvas
	                        Hybrid.clearCanvas(layout.dragitem);
	                        layout.dragitem.context.globalAlpha = 0.7;
	                        var im = map.shop[map.dragging].img; // if you JUST placed a house AND change the map, you get here and map.dragging =-1?
	                        map.drag_object.w = Hybrid.graphics_manifest[im].w;
	                        map.drag_object.h = Hybrid.graphics_manifest[im].h;
	                        map.drag_object.gx = -map.drag_object.w / 2; // grab x for movebox!
	                        map.drag_object.gy = -map.drag_object.h / 2;
	                        map.drag_object.id = im;
	                        map.drag_object.setpos = map.shop[map.dragging].setpos;
	                        Hybrid.drawImage(layout.dragitem, im, map.drag_object.w / 2, map.drag_object.h / 2, 0, 1);


	                        Hybrid.moveBox(layout.dragitem, x + map.drag_object.gx, y + map.drag_object.gy);
	                        Hybrid.setVisible(layout.dragitem, true); // this should be set to cover all, but that's for later!
	                        map.button_clicked = -1;
	                        // now show the draggable item!
	                    }
	                }
	            }
	            break;
	        case "map":
	            //				Hybrid.debugmessage("move map:"+id+"->"+x+","+y);
	            map.offset.dx = dx; // this will be carried out by the loop!
	            map.offset.dy = dy; // this will be carried out by the loop!
	            break;
	    }
	}

	function handleButtonsMap(label) {
	    //window.alert("We zijn bezig met de ontwikkeling van dit educatieve spel.");
	    switch (label) {
	        case "button_play":
	            Hybrid.stopLoop();
	            wwjw.page_extras = ""; // don't show the popup next time!
	            quiz.init();
	            break;
	        case "button_stop":
	            Hybrid.stopLoop();
	            start.init();
	            break;
	        case "button_continue":
	            // naar highscores als klaar, naar quiz als volgende vraag.
	            Hybrid.stopLoop();
	            var nr = parseInt(user.data.progress);
	            quiz.init();
	            break;
	        case "button_high":
	            Hybrid.stopLoop();
	            high.init();
	            break;
	        case "button_prev":
	            map.dragging = -1;
	            map.dragTarget = "none";
	            map.current_map--;
	            if (map.current_map == 0) map.current_map = 6;
	            initMap();
	            break;
	        case "button_next":
	            map.dragging = -1;
	            map.dragTarget = "none";
	            map.current_map++;
	            if (map.current_map == 7) map.current_map = 1;
	            initMap();
	            break;
	        default:
	            Hybrid.debugmessage("handleButtonsStart: " + label);
	    }
	}	//high----------------------------------
	var high={};
	var empty_list=[];
	high.init=initHigh;
	high.bar_height=80;
	high.tabs=["plaats","school","speler"];
	high.periods=[
					"week",
					"maand",
					"jaar", "alles"
				 ];

	high.label="all"; // starts on all_all!
	high.id="all";
	high.rank=-1;
	high.selected_tab=2;
	high.selected_period=0;
	
	function initHigh()
	{
		Hybrid.debugmessage("START high called!");
		Hybrid.setCookie("lastpage","high");

		Hybrid.playSound("next_question");
		
		var data={};
		data.page="high";
		data.user=user.data.naam;
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);

		
		var i;
		empty_list=[];
		for(i=0;i<12;i++)empty_list.push({naam:"loading",school:0,groep:0,plaats:0,punten:-1});
		high.data=empty_list; // we would show an empty list now..
		
		// read the highscores
		var data={};
		data.label=high.label;
		data.id=high.id;
		data.naam=user.data.naam;
		data.period=high.periods[high.selected_period];
		Hybrid.debugmessage("get_highscores.php?naam="+data.naam+"&id="+data.id+"&label="+data.label+"&period="+data.period);
		Hybrid.getVars("get_highscores.php",data,high_LoadSucces,high_LoadFail);// we don't want to know about any stuff.
		
		Hybrid.resizeFunction=handleResizehigh;
		handleResizehigh(); // this builds the page 
		//high_showHighscores(); // show the loading data..
	}
	function high_LoadSucces(response)
	{
		var id;
		if(parseInt(response.succes)==1)
		{	
			high.rank=-1;
			Hybrid.debugmessage("got your highscore data");
			high.data=response.high;
			high.rank=parseInt(response.rank);
			high_showHighscores();
		}else
		{
			Hybrid.debugmessage("something went wrong: "+response.error_message);
		}
	}
	function high_LoadFail(response)
	{
		//window.alert("Communication with the server interupted, try again later.");
		Hybrid.debugmessage("Request failed..");
	}			
	function handleResizehigh()
	{
		Hybrid.debugmessage("page high build up:"+Hybrid.width+"x"+Hybrid.height);
		Hybrid.erasePage();
		layout={}; // erase any old layout!
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxColor(layout.back,palet.green); // this should be set to cover all, but that's for later!
		
		var w,h,x,y,f,tx,ty,string;
		layout.split_y=343;
		w=Hybrid.width;
		h=layout.split_y;
		x=0;
		y=0;
		layout.bar=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.bar,palet.pale_blue); // this should be set to cover all, but that's for later!

		// second blue box down under.
		layout.split_h2=layout.split_y;
		layout.split_y2=Hybrid.height-260;
		x=0;
		y=layout.split_y2;
		w=Hybrid.width;
		h=layout.split_h2; // little bit different
		layout.bar2=Hybrid.createBox(layout.back,x,y,w,h);
		Hybrid.setBoxColor(layout.bar2,palet.pale_blue); // this should be set to cover all, but that's for later!

	
		// it's imperative that layout stays the same, so apart from the bar, we need to set a box in the middle of exactly 2048..
		// UNLESS it's smaller, than we need to scale it down... but smaller than 4x3?? I think not.
		
		w=2048;
		h=1361;
		x=(Hybrid.width-2048)/2;
		y=0;
		layout.high=Hybrid.createBox(layout.back,x,y,w,h);

		// set the snap to aim for!
		//Hybrid.setBoxColor(layout.high,"rgba(255,255,255,0.1)"); // this should be set to cover all, but that's for later!
		//Hybrid.setBoxImage(layout.high,"snap"); // this should be set to cover all, but that's for later!
		
		// tabs
		layout.tab=[];
		var i;
		for(i=0;i<high.tabs.length;i++)
		{
			x=2048-(334+30)*(i+1);
			y=layout.split_y-76;
			w=334;
			h=132;
			layout.tab[i]=Hybrid.createBox(layout.high,x,y,w,h);
			if(high.selected_tab==i)
			{
				Hybrid.setBoxColor(layout.tab[i],palet.green); // this should be set to cover all, but that's for later!
			}else
			{
				Hybrid.setBoxColor(layout.tab[i],palet.pale_green); // this should be set to cover all, but that's for later!
			}
			Hybrid.setBoxRounded(layout.tab[i],50);
			Hybrid.makeButton(layout.tab[i],"button_tab"+i,handleButtonshigh);
			// highscores Title
			x=0;
			y=15;
			w=334;
			h=132;
			layout.title=Hybrid.createTextBox(layout.tab[i],x,y,w,h,fonts.head,"#fff","center",fontsz.highscores_mid,high.tabs[i]);
		}

		console.log("show periods!");
		// periods
		layout.period=[];
		var i;
		for(i=0;i<high.periods.length;i++)
		{
			x=(334+30)*(i);
			y=layout.split_y2-50;
			w=334;
			h=132;
			layout.period[i]=Hybrid.createBox(layout.high,x,y,w,h);
			if(high.selected_period==i)
			{
				Hybrid.setBoxColor(layout.period[i],palet.green); // this should be set to cover all, but that's for later!
			}else
			{
				Hybrid.setBoxColor(layout.period[i],palet.pale_green); // this should be set to cover all, but that's for later!
			}
			Hybrid.setBoxRounded(layout.period[i],50);
			Hybrid.makeButton(layout.period[i],"button_period"+i,handleButtonshigh);
			// period Title
			x=0;
			y=15;
			w=334;
			h=132;
			layout.title=Hybrid.createTextBox(layout.period[i],x,y+132/2-30,w,h,fonts.head,"#fff","center",fontsz.highscores_mid,high.periods[i]);
		}
		
		// green box over tabs
		x=0;
		y=layout.split_y; 
		w=2048;
		h=150;
		layout.tabs_over=Hybrid.createBox(layout.high,x,y,w,h);
		Hybrid.setBoxColor(layout.tabs_over,palet.green); // this should be set to cover all, but that's for later!

		// green box over periods
		x=0;
		y=layout.split_y2-50;
		w=2048;
		h=50;
		layout.tabs_over=Hybrid.createBox(layout.high,x,y,w,h);
		Hybrid.setBoxColor(layout.tabs_over,palet.green); // this should be set to cover all, but that's for later!
		
		
		// stuff in the bar
		layout.user_name=Hybrid.createTextBox(layout.high,60,20,450,100,fonts.head,"#fff","left",fontsz.head,user.data.naam);
		layout.vraag_nr=Hybrid.createTextBox(layout.high,440,25,350,100,fonts.body,"#fff","right",fontsz.menu,"Vraag x/x");
		layout.score_label=Hybrid.createTextBox(layout.high,1340,25,600,100,fonts.body,"#fff","right",fontsz.menu,"Score <em>"+user.data.punten+"</em> punten / <em>"+user.data.stenen+"</em> stenen");

		// Question Progress
		w=412;
		h=30;
		x=(2048-w)/2;
		y=(high.bar_height-h)/2+5;
		layout.progress_total=Hybrid.createBox(layout.high,x,y,w,h);
		Hybrid.setBoxColor(layout.progress_total,"#fff"); 
		layout.progress=Hybrid.createBox(layout.high,x,y,w*(12/30),h);
		Hybrid.setBoxColor(layout.progress,palet.pale_yellow); 

		// SET Question Progress
		var show_vraag_nr=(parseInt(user.data.progress)+1);
		if(show_vraag_nr>quiz.questions.length) show_vraag_nr=quiz.questions.length;
		Hybrid.setText(layout.vraag_nr,"Vraag "+show_vraag_nr+"/"+quiz.questions.length );
		var w=412;
		w=w*( parseInt( user.data.progress )/parseInt( quiz.questions.length ) );
		var h=30;
		Hybrid.sizeBox(layout.progress,w,h);		
		
		
		// highscores Title
		x=88;
		y=243;
		w=854;
		h=86;
		layout.title=Hybrid.createTextBox(layout.high,x,y,w,h,fonts.head,"#fff","left",fontsz.highscores_big,"Highscores");

		
		// variable placing, but this is the placing when rank>=10
		x=0;
		y=960;
		w=2048;
		h=135;
		layout.own_score=Hybrid.createCanvas(layout.high,x,y,w,h-1);
		// fill with the right colors.. // this should be shifted to the same hieight as score of person watching..
		var ctx=layout.own_score.context;
		var blur_colors=["96c577","94c376","92c174","8fbd71","8bb96d","86b368","80ad62","7eab61"];// licht naar donker!
		var i;
		var start_dist=12;
		for(i=0;i<blur_colors.length;i++)
		{
			var dist=start_dist+i*3;
			ctx.strokeStyle="#"+blur_colors[blur_colors.length-i-1];
			ctx.lineWidth=dist+1;
			x=40+dist;
			y=5+dist;
			w=2048-80-dist*2;
			h=120-dist*2;
			ctx.beginPath();
				Hybrid.drawRoundedRect(ctx,x, y, w, h,60-dist);
			ctx.stroke();
		}
		
		// then a white line!
		ctx.strokeStyle="#FFFFFF";
		ctx.lineWidth=10;
		x=40;
		y=5;
		w=2048-80;
		h=120;
		ctx.beginPath();
		Hybrid.drawRoundedRect(ctx,x, y, w, h,61);
		ctx.stroke();
		
		// create canvasses for highscore DATA!
		layout.score=[];
		for(i=0;i<10;i++)
		{
			x=148;
			h=52;
			y=405+i*h;
			w=1840;
			layout.score[i]={};
			layout.score[i].canvas=Hybrid.createCanvas(layout.high,x,y,w,h-1);
			// just create, don't fill!
		}
		
		// we might need an extra canvas, to display a score outside of the rank..
		y=998; // def pos!
		layout.score_outside_rank=Hybrid.createCanvas(layout.high,x,y,w,h-1);

	
		// create menubutton high
		w=Hybrid.graphics_manifest['buttons'].ss['stop'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['stop'][0][3];
		Hybrid.debugmessage("distance from border: "+(300-w));
		x=2048-64-w;
		y=137;
		Hybrid.createSpriteButton(layout.high,x,y,w,h,'buttons',"stop","button_stop",handleButtonshigh);

		w=Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['city'][0][3];
		x=2048-64-32-Hybrid.graphics_manifest['buttons'].ss['stop'][0][2]-Hybrid.graphics_manifest['buttons'].ss['city'][0][2];
		y=137;
		Hybrid.createSpriteButton(layout.high,x,y,w,h,'buttons',"city","button_city",handleButtonshigh);

		// create button answer
		w=Hybrid.graphics_manifest['buttons'].ss['continue'][0][2];
		h=Hybrid.graphics_manifest['buttons'].ss['continue'][0][3];
		x=2048-60-w;
		y=Hybrid.height-h-60;
		Hybrid.createSpriteButton(layout.high,x,y,w,h,'buttons',"continue","button_continue",handleButtonshigh);
	}
	function formatScore(nr)
	{
		nr=parseInt(nr);
		return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	}
	function formatSchool(nr)
	{
		var i;
		for(i=0;i<new_game.cms_data.school.length;i++)
		{
			if(new_game.cms_data.school[i].id==nr)
			{
				return new_game.cms_data.school[i].label;
			}
		}
		return "onbekende school"+nr;
	}
	function formatPlace(nr)
	{
		var city_names=["none","Steenbergen","De Heen","Nieuw-Vossemeer","Kruisland","Dinteloord","Welberg"];
		if(parseInt(nr)>=0 && parseInt(nr)<city_names.length)
		{
			return city_names[nr];
		}else
		{
			return "---"
		}
	}
	function drawScoreItem(ctx,nr,naam,score,school,plaats)
	{
		ctx.fillStyle="#FFFFFF";
		// set letters as canvas filltext, because it's easier to aim that way.
		
		//nr
		x=0;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText(nr,x,y);

		// name
		x=90;// was 70, but we need the space!
		y=40;
		ctx.font=fontsz.highscores_mid+"px "+fonts.head;
		ctx.textAlign="left";
		ctx.fillText(naam,x,y);
			
		// line under!
		var line_width=ctx.measureText(naam).width;
		ctx.beginPath();
		ctx.strokeStyle="#FFFFFF";
		ctx.lineWidth=2;
		ctx.moveTo(x,y+5);
		ctx.lineTo(x+line_width,y+5);
		ctx.stroke();

		// score
		x=704;
		y=40;
		ctx.font=fontsz.highscores_mid+"px "+fonts.head;
		ctx.textAlign="right";
		ctx.fillText(formatScore(score),x,y);

		// pnt
		x=720;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText("pnt",x,y);

		// school
		x=898;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText(formatSchool(school),x,y);

		// plaats
		x=1412;
		y=40;
		ctx.font=fontsz.highscores_small+"px "+fonts.body;
		ctx.textAlign="left";
		ctx.fillText(formatPlace(plaats),x,y);
	}
	function high_showHighscores()
	{
		// show highscores entry!
		var i;
		for(i=0;i<10;i++)
		{
			// erase the canvas!
			Hybrid.clearCanvas(layout.score[i].canvas);
			var ctx=layout.score[i].canvas.context;
			if(i<high.data.length)
				drawScoreItem(ctx,(i+1),high.data[i].naam,high.data[i].punten,high.data[i].school,high.data[i].plaats);
		}
		// now render the own score on a seperate canvas..
		
		Hybrid.clearCanvas(layout.score_outside_rank);
		Hybrid.debugmessage("high.rank="+high.rank);
		high.rank=parseInt(high.rank);
		if(high.rank!=-1)
		{
			ctx=layout.score_outside_rank.context;
			drawScoreItem(ctx,(high.rank+1),user.data.naam,user.data.punten,user.data.school,user.data.plaats);
		}
		
		// now that everything is drawn..
		// we might want to swap the order of the indicator of YOU
		var x,y,h;
		if(high.rank>9)
		{
			// set to default position and visible!
			console.log("making it visible bigger than 9");
			Hybrid.setVisible(layout.score_outside_rank,true);
			x=0;
			y=960;
			Hybrid.moveBox(layout.own_score,x,y);
			
			h=52;
			x=148;
			y=405
			for(i=0;i<10;i++)
			{
				Hybrid.moveBox(layout.score[i].canvas,x,y);
				y=y+h;
			}

		}else
		{
			// set to position inside list (and doesn't need to be visible!)
			console.log("making it invisible smaller than 9");
			Hybrid.setVisible(layout.score_outside_rank,false);
			h=52;
			x=148;
			y=405
			for(i=0;i<10;i++)
			{
				Hybrid.moveBox(layout.score[i].canvas,x,y);
				y=y+h;
				if((i+1)==high.rank) y=y+50;// extra space!
				if(i==high.rank)
				{
					Hybrid.debugmessage("i==high.rank.. "+i+"=="+high.rank+" so more space needed here!");
					y=y+50;// extra space!
					Hybrid.moveBox(layout.own_score,0,y-145);
				}				
			}
		}
		if(high.rank!=-1)
			Hybrid.setVisible(layout.own_score,true); // always true, but turned off for loading..

	}
	function highSelectTab(nr)
	{
		Hybrid.debugmessage("highSelectTab"+nr);
		high.selected_tab=nr;
		// color the tabs
		var i;
		for(i=0;i<high.tabs.length;i++)
		{
			if(high.selected_tab==i)
			{
				Hybrid.setBoxColor(layout.tab[i],palet.green); // this should be set to cover all, but that's for later!
			}else
			{
				Hybrid.setBoxColor(layout.tab[i],palet.pale_green); // this should be set to cover all, but that's for later!
			}
		}
		// we should also show the right data!
		switch(high.selected_tab)
		{
			case 0:
				high.label=high.tabs[0]; // starts on all_all!
				high.id=user.data.plaats;
			break;
			case 1:
				high.label=high.tabs[1]; // starts on all_all!
				high.id=user.data.school;
			break;
			default:
				high.label="all"; // starts on all_all!
				high.id="all";
		}
		
		high.rank=-1;
		high.data=empty_list;
		// erase canvases
		var i;
		for(i=0;i<10;i++)
		{
			Hybrid.clearCanvas(layout.score[i].canvas);
		}
		Hybrid.clearCanvas(layout.score_outside_rank);
		Hybrid.setVisible(layout.own_score,false); // erase all!
	
		// now reload the highscores
		var data={};
		data.label=high.label;
		data.id=high.id;
		data.naam=user.data.naam;
		data.period=high.periods[high.selected_period];
		Hybrid.debugmessage("get_highscores.php?naam="+data.naam+"&id="+data.id+"&label="+data.label+"&period="+data.period);
		Hybrid.getVars("get_highscores.php",data,high_LoadSucces,high_LoadFail);// we don't want to know about any stuff.
		
	}
	function highSelectPeriod(nr)
	{
		Hybrid.debugmessage("highSelectPeriod"+nr);
		high.selected_period=nr;
		// color the periods
		var i;
		for(i=0;i<high.periods.length;i++)
		{
			if(high.selected_period==i)
			{
				Hybrid.setBoxColor(layout.period[i],palet.green); // this should be set to cover all, but that's for later!
			}else
			{
				Hybrid.setBoxColor(layout.period[i],palet.pale_green); // this should be set to cover all, but that's for later!
			}
		}

		// reload!
		high.rank=-1;
		high.data=empty_list;
		// erase canvases
		var i;
		for(i=0;i<10;i++)
		{
			Hybrid.clearCanvas(layout.score[i].canvas);
		}
		Hybrid.clearCanvas(layout.score_outside_rank);
		Hybrid.setVisible(layout.own_score,false); // erase all!
	
		// now reload the highscores
		var data={};
		data.label=high.label;
		data.id=high.id;
		data.naam=user.data.naam;
		data.period=high.periods[high.selected_period];
		Hybrid.debugmessage("get_highscores.php?naam="+data.naam+"&id="+data.id+"&label="+data.label+"&period="+data.period);
		Hybrid.getVars("get_highscores.php",data,high_LoadSucces,high_LoadFail);// we don't want to know about any stuff.
		
	}
	function handleButtonshigh(label)
	{
		switch(label)
		{
			case "button_tab0":
			case "button_tab1":
			case "button_tab2":
				var nr=label.substr(10,1);
				highSelectTab(parseInt(nr));
			break;		
			case "button_period0":
			case "button_period1":
			case "button_period2":
			case "button_period3":
				var nr=label.substr(13,1);
				highSelectPeriod(parseInt(nr));
			break;					
			case "button_continue":
				var nr=parseInt(user.data.progress);
				if(nr<quiz.questions.length)
				{
					quiz.init();
				}else
				{
					map.init();
				}
			break;				
			case "button_city":
				map.init();
			break;				
			case "button_highscores":
				high.init();
			break;				
			case "button_stop":
				start.init();
			break;				
			default:
				Hybrid.debugmessage("handleButtonshigh: "+label);
		}
	}
	

	//STARTSCHERM----------------------------------
	var ori_mm={};
	ori_mm.init=initORIMM;
		
	function initORIMM()
	{
		layout={}; // erase any old layout!

		var data={};
		data.page="orientation";
		data.stat="page";
		Hybrid.setVars("add_stat.php", data);

		
		Hybrid.debugmessage("init InTerFace (initApp) called!");
		Hybrid.resizeFunction=initPage; // try again!
		Hybrid.erasePage();
		layout.back=Hybrid.createLayer();
		Hybrid.setBoxImage(layout.back,"rotate_device"); // this should be set to cover all, but that's for later!
		//handleResize(); // this builds the page AND redraws the stage with the initial puppet!
	}
	

