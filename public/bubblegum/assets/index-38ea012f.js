(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function ai(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function qf(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var rn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ir={duration:.5,overwrite:!1,delay:0},Ac,Le,ge,_n=1e8,Jt=1/_n,Jl=Math.PI*2,mm=Jl/4,gm=0,Xf=Math.sqrt,_m=Math.cos,vm=Math.sin,be=function(t){return typeof t=="string"},le=function(t){return typeof t=="function"},gi=function(t){return typeof t=="number"},Pc=function(t){return typeof t>"u"},qn=function(t){return typeof t=="object"},Ge=function(t){return t!==!1},Lc=function(){return typeof window<"u"},vo=function(t){return le(t)||be(t)},Yf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Re=Array.isArray,Kl=/(?:-?\.?\d|\.)+/gi,jf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xa=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Zf=/[+-]=-?[.\d]+/,$f=/[^,'"\[\]\s]+/gi,xm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,se,fn,Ql,Rc,on={},la={},Jf,Kf=function(t){return(la=as(t,on))&&je},Fc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ca=function(t,e){return!e&&console.warn(t)},Qf=function(t,e){return t&&(on[t]=e)&&la&&(la[t]=e)||on},qr=function(){return 0},ym={suppressEvents:!0,isStart:!0,kill:!1},ta={suppressEvents:!0,kill:!1},Mm={suppressEvents:!0},Ic={},Ti=[],tc={},td,tn={},Ya={},Du=30,ea=[],Nc="",Oc=function(t){var e=t[0],n,i;if(qn(e)||le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=ea.length;i--&&!ea[i].targetTest(e););n=ea[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new bd(t[i],n)))||t.splice(i,1);return t},ns=function(t){return t._gsap||Oc(vn(t))[0]._gsap},ed=function(t,e,n){return(n=t[e])&&le(n)?t[e]():Pc(n)&&t.getAttribute&&t.getAttribute(e)||n},He=function(t,e){return(t=t.split(",")).forEach(e)||t},he=function(t){return Math.round(t*1e5)/1e5||0},Ee=function(t){return Math.round(t*1e7)/1e7||0},Ys=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},wm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ua=function(){var t=Ti.length,e=Ti.slice(0),n,i;for(tc={},Ti.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},nd=function(t,e,n,i){Ti.length&&!Le&&ua(),t.render(e,n,i||Le&&e<0&&(t._initted||t._startAt)),Ti.length&&!Le&&ua()},id=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match($f).length<2?e:be(t)?t.trim():t},sd=function(t){return t},Mn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Sm=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},as=function(t,e){for(var n in e)t[n]=e[n];return t},Cu=function a(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=qn(e[n])?a(t[n]||(t[n]={}),e[n]):e[n]);return t},ha=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},zr=function(t){var e=t.parent||se,n=t.keyframes?Sm(Re(t.keyframes)):Mn;if(Ge(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},bm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},rd=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],o;if(s)for(o=e[s];r&&r[s]>o;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},Sa=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Li=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},is=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},Em=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},ec=function(t,e,n,i){return t._startAt&&(Le?t._startAt.revert(ta):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},Dm=function a(t){return!t||t._ts&&a(t.parent)},Tu=function(t){return t._repeat?sr(t._tTime,t=t.duration()+t._rDelay)*t:0},sr=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},fa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ba=function(t){return t._end=Ee(t._start+(t._tDur/Math.abs(t._ts||t._rts||Jt)||0))},Ea=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ee(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ba(t),n._dirty||is(n,t)),t},od=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=fa(t.rawTime(),e),(!e._dur||oo(0,e.totalDuration(),n)-e._tTime>Jt)&&e.render(n,!0)),is(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Jt}},kn=function(t,e,n,i){return e.parent&&Li(e),e._start=Ee((gi(n)?n:n||t!==se?hn(t,n,e):t._time)+e._delay),e._end=Ee(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),rd(t,e,"_first","_last",t._sort?"_start":0),nc(e)||(t._recent=e),i||od(t,e),t._ts<0&&Ea(t,t._tTime),t},ad=function(t,e){return(on.ScrollTrigger||Fc("scrollTrigger",e))&&on.ScrollTrigger.create(e,t)},ld=function(t,e,n,i,s){if(Uc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Le&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&td!==nn.frame)return Ti.push(t),t._lazy=[s,i],1},Cm=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},nc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Tm=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&Cm(t)&&!(!t._initted&&nc(t))||(t._ts<0||t._dp._ts<0)&&!nc(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=oo(0,t._tDur,e),u=sr(l,o),t._yoyo&&u&1&&(r=1-r),u!==sr(t._tTime,o)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Le||i||t._zTime===Jt||!e&&t._zTime){if(!t._initted&&ld(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Jt:0),n||(n=e&&!f),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=l,c=t._pt;c;)c.r(r,c.d),c=c._next;e<0&&ec(t,e,n,!0),t._onUpdate&&!n&&xn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&xn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&Li(t,1),!n&&!Le&&(xn(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Am=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},rr=function(t,e,n,i){var s=t._repeat,r=Ee(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:Ee(r*(s+1)+t._rDelay*s):r,o>0&&!i&&Ea(t,t._tTime=t._tDur*o),t.parent&&ba(t),n||is(t.parent,t),t},Au=function(t){return t instanceof Ve?is(t):rr(t,t._dur)},Pm={_start:0,endTime:qr,totalDuration:qr},hn=function a(t,e,n){var i=t.labels,s=t._recent||Pm,r=t.duration()>=_n?s.endTime(!1):t._dur,o,l,c;return be(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=r),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(Re(n)?n[0]:n).totalDuration()),o>1?a(t,e.substr(0,o-1),n)+l:r+l)):e==null?r:+e},Ur=function(t,e,n){var i=gi(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],o,l;if(i&&(r.duration=e[1]),r.parent=n,t){for(o=r,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ge(l.vars.inherit)&&l.parent;r.immediateRender=Ge(o.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new xe(e[0],r,e[s+1])},Ni=function(t,e){return t||t===0?e(t):e},oo=function(t,e,n){return n<t?t:n>e?e:n},Pe=function(t,e){return!be(t)||!(e=xm.exec(t))?"":e[1]},Lm=function(t,e,n){return Ni(n,function(i){return oo(t,e,i)})},ic=[].slice,cd=function(t,e){return t&&qn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&qn(t[0]))&&!t.nodeType&&t!==fn},Rm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return be(i)&&!e||cd(i,1)?(s=n).push.apply(s,vn(i)):n.push(i)})||n},vn=function(t,e,n){return ge&&!e&&ge.selector?ge.selector(t):be(t)&&!n&&(Ql||!or())?ic.call((e||Rc).querySelectorAll(t),0):Re(t)?Rm(t,n):cd(t)?ic.call(t,0):t?[t]:[]},sc=function(t){return t=vn(t)[0]||ca("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return vn(e,n.querySelectorAll?n:n===t?ca("Invalid scope")||Rc.createElement("div"):t)}},ud=function(t){return t.sort(function(){return .5-Math.random()})},hd=function(t){if(le(t))return t;var e=qn(t)?t:{each:t},n=ss(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,f=i;return be(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||e).length,m=r[_],p,v,y,x,M,b,D,C,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,_n])[1],!w){for(D=-_n;D<(D=g[w++].getBoundingClientRect().left)&&w<_;);w--}for(m=r[_]=[],p=l?Math.min(w,_)*u-.5:i%w,v=w===_n?0:l?_*f/w-.5:i/w|0,D=0,C=_n,b=0;b<_;b++)y=b%w-p,x=v-(b/w|0),m[b]=M=c?Math.abs(c==="y"?x:y):Xf(y*y+x*x),M>D&&(D=M),M<C&&(C=M);i==="random"&&ud(m),m.max=D-C,m.min=C,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(w>_?_-1:c?c==="y"?_/w:w:Math.max(w,_/w))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Pe(e.amount||e.each)||0,n=n&&_<0?Md(n):n}return _=(m[h]-m.min)/m.max||0,Ee(m.b+(n?n(_):_)*m.v)+m.u}},rc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ee(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(gi(n)?0:Pe(n))}},fd=function(t,e){var n=Re(t),i,s;return!n&&qn(t)&&(i=n=t.radius||_n,t.values?(t=vn(t.values),(s=!gi(t[0]))&&(i*=i)):t=rc(t.increment)),Ni(e,n?le(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),l=parseFloat(s?r.y:0),c=_n,u=0,f=t.length,h,d;f--;)s?(h=t[f].x-o,d=t[f].y-l,h=h*h+d*d):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:r,s||u===r||gi(r)?u:u+Pe(r)}:rc(t))},dd=function(t,e,n,i){return Ni(Re(t)?!e:n===!0?!!(n=0):!i,function(){return Re(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Fm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},Im=function(t,e){return function(n){return t(parseFloat(n))+(e||Pe(n))}},Nm=function(t,e,n){return md(t,e,0,1,n)},pd=function(t,e,n){return Ni(n,function(i){return t[~~e(i)]})},Om=function a(t,e,n){var i=e-t;return Re(t)?pd(t,a(0,t.length),e):Ni(n,function(s){return(i+(s-t)%i)%i+t})},zm=function a(t,e,n){var i=e-t,s=i*2;return Re(t)?pd(t,a(0,t.length-1),e):Ni(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},Xr=function(t){for(var e=0,n="",i,s,r,o;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(o?$f:Kl),n+=t.substr(e,i-e)+dd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},md=function(t,e,n,i,s){var r=e-t,o=i-n;return Ni(s,function(l){return n+((l-t)/r*o||0)})},Um=function a(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var r=be(t),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(Re(t)&&!Re(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(a(t[c-1],t[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=as(Re(t)?[]:{},t));if(!u){for(l in e)zc.call(o,t,l,"get",e[l]);s=function(g){return Vc(g,o)||(r?t.p:t)}}}return Ni(n,s)},Pu=function(t,e,n){var i=t.labels,s=_n,r,o,l;for(r in i)o=i[r]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=r,s=o);return l},xn=function(t,e,n){var i=t.vars,s=i[e],r=ge,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Ti.length&&ua(),o&&(ge=o),u=l?s.apply(c,l):s.call(c),ge=r,u},Pr=function(t){return Li(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Le),t.progress()<1&&xn(t,"onInterrupt"),t},Vs,gd=[],_d=function(t){if(!Lc()){gd.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:qr,render:Vc,add:zc,kill:tg,modifier:Qm,rawVars:0},r={targetTest:0,get:0,getSetter:kc,aliases:{},register:0};if(or(),t!==i){if(tn[e])return;Mn(i,Mn(ha(t,s),r)),as(i.prototype,as(s,ha(t,r))),tn[i.prop=e]=i,t.targetTest&&(ea.push(i),Ic[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Qf(e,i),t.register&&t.register(je,i,We)},$t=255,Lr={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},ja=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},vd=function(t,e,n){var i=t?gi(t)?[t>>16,t>>8&$t,t&$t]:0:Lr.black,s,r,o,l,c,u,f,h,d,g;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Lr[t])i=Lr[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+s+s+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=g=t.match(Kl),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=ja(l+1/3,s,r),i[1]=ja(l,s,r),i[2]=ja(l-1/3,s,r);else if(~t.indexOf("="))return i=t.match(jf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Kl)||Lr.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/$t,r=i[1]/$t,o=i[2]/$t,f=Math.max(s,r,o),h=Math.min(s,r,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(r-o)/d+(r<o?6:0):f===r?(o-s)/d+2:(s-r)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},xd=function(t){var e=[],n=[],i=-1;return t.split(Ai).forEach(function(s){var r=s.match(ks)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},Lu=function(t,e,n){var i="",s=(t+i).match(Ai),r=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=vd(h,e,1))&&r+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=xd(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(Ai,"1").split(ks),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Ai),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Ai=function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Lr)a+="|"+t+"\\b";return new RegExp(a+")","gi")}(),Bm=/hsl[a]?\(/,yd=function(t){var e=t.join(" "),n;if(Ai.lastIndex=0,Ai.test(e))return n=Bm.test(e),t[1]=Lu(t[1],n),t[0]=Lu(t[0],n,xd(t[1])),!0},Yr,nn=function(){var a=Date.now,t=500,e=33,n=a(),i=n,s=1e3/240,r=s,o=[],l,c,u,f,h,d,g=function _(m){var p=a()-i,v=m===!0,y,x,M,b;if(p>t&&(n+=p-e),i+=p,M=i-n,y=M-r,(y>0||v)&&(b=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,r+=y+(y>=s?4:s-y),x=1),v||(l=c(_)),x)for(d=0;d<o.length;d++)o[d](M,h,b,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Jf&&(!Ql&&Lc()&&(fn=Ql=window,Rc=fn.document||{},on.gsap=je,(fn.gsapVersions||(fn.gsapVersions=[])).push(je.version),Kf(la||fn.GreenSockGlobals||!fn.gsap&&fn||{}),u=fn.requestAnimationFrame,gd.forEach(_d)),l&&f.sleep(),c=u||function(m){return setTimeout(m,r-f.time*1e3+1|0)},Yr=1,g(2))},sleep:function(){(u?fn.cancelAnimationFrame:clearTimeout)(l),Yr=0,c=qr},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),r=f.time*1e3+s},add:function(m,p,v){var y=p?function(x,M,b,D){m(x,M,b,D),f.remove(y)}:m;return f.remove(m),o[v?"unshift":"push"](y),or(),y},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&d>=p&&d--},_listeners:o},f}(),or=function(){return!Yr&&nn.wake()},qt={},km=/^[\d.\-M][\d.\-,\s]/,Vm=/["']/g,Gm=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,o,l,c;s<r;s++)l=n[s],o=s!==r-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(Vm,"").trim():+c,i=l.substr(o+1).trim();return e},Hm=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Wm=function(t){var e=(t+"").split("("),n=qt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Gm(e[1])]:Hm(t).split(",").map(id)):qt._CE&&km.test(t)?qt._CE("",t):n},Md=function(t){return function(e){return 1-t(1-e)}},wd=function a(t,e){for(var n=t._first,i;n;)n instanceof Ve?a(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?a(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ss=function(t,e){return t&&(le(t)?t:qt[t]||Wm(t))||e},gs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return He(t,function(o){qt[o]=on[o]=s,qt[r=o.toLowerCase()]=n;for(var l in s)qt[r+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=qt[o+"."+l]=s[l]}),s},Sd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Za=function a(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/Jl*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*vm((u-r)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:Sd(o);return s=Jl/s,l.config=function(c,u){return a(t,c,u)},l},$a=function a(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:Sd(n);return i.config=function(s){return a(t,s)},i};He("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;gs(a+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});qt.Linear.easeNone=qt.none=qt.Linear.easeIn;gs("Elastic",Za("in"),Za("out"),Za());(function(a,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?a*o*o:o<n?a*Math.pow(o-1.5/t,2)+.75:o<i?a*(o-=2.25/t)*o+.9375:a*Math.pow(o-2.625/t,2)+.984375};gs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);gs("Expo",function(a){return a?Math.pow(2,10*(a-1)):0});gs("Circ",function(a){return-(Xf(1-a*a)-1)});gs("Sine",function(a){return a===1?1:-_m(a*mm)+1});gs("Back",$a("in"),$a("out"),$a());qt.SteppedEase=qt.steps=on.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-Jt;return function(o){return((i*oo(0,r,o)|0)+s)*n}}};ir.ease=qt["quad.out"];He("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Nc+=a+","+a+"Params,"});var bd=function(t,e){this.id=gm++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ed,this.set=e?e.getSetter:kc},ar=function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,rr(this,+e.duration,1,1),this.data=e.data,ge&&(this._ctx=ge,ge.data.push(this)),Yr||nn.wake()}var t=a.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,rr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(or(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Ea(this,n),!s._dp||s.parent||od(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&kn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Jt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),nd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Tu(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Tu(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?sr(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Jt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?fa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Jt?0:this._rts,this.totalTime(oo(-Math.abs(this._delay),this._tDur,i),!0),ba(this),Em(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Jt&&(this._tTime-=Jt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&kn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ge(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?fa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=Mm);var i=Le;return Le=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Le=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Au(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Au(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(hn(this,n),Ge(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ge(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Jt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Jt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Jt)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=le(n)?n:sd,o=function(){var c=i.then;i.then=null,le(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){Pr(this)},a}();Mn(ar.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Jt,_prom:0,_ps:!1,_rts:1});var Ve=function(a){qf(t,a);function t(n,i){var s;return n===void 0&&(n={}),s=a.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ge(n.sortChildren),se&&kn(n.parent||se,ai(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&ad(ai(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return Ur(0,arguments,this),this},e.from=function(i,s,r){return Ur(1,arguments,this),this},e.fromTo=function(i,s,r,o){return Ur(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,zr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new xe(i,s,hn(this,r),1),this},e.call=function(i,s,r){return kn(this,xe.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,o,l,c,u){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new xe(i,r,hn(this,l)),this},e.staggerFrom=function(i,s,r,o,l,c,u){return r.runBackwards=1,zr(r).immediateRender=Ge(r.immediateRender),this.staggerTo(i,s,r,o,l,c,u)},e.staggerFromTo=function(i,s,r,o,l,c,u,f){return o.startAt=r,zr(o).immediateRender=Ge(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},e.render=function(i,s,r){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ee(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,m,p,v,y,x,M,b,D;if(this!==se&&u>l&&i>=0&&(u=l),u!==this._tTime||r||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,x=this._start,y=this._ts,p=!y,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(h=Ee(u%m),u===l?(_=this._repeat,h=c):(_=~~(u/m),_&&_===u/m&&(h=c,_--),h>c&&(h=c)),M=sr(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),b&&_&1&&(h=c-h,D=1),_!==M&&!this._lock){var C=b&&M&1,w=C===(b&&_&1);if(_<M&&(C=!C),o=C?0:c,this._lock=1,this.render(o||(D?0:Ee(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&xn(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,w&&(this._lock=2,o=C?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;wd(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Am(this,Ee(o),Ee(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!_&&(xn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,r),h!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=-Jt);break}}d=g}else{d=this._last;for(var S=i<0?i:h;d;){if(g=d._prev,(d._act||S<=d._end)&&d._ts&&v!==d){if(d.parent!==this)return this.render(i,s,r);if(d.render(d._ts>0?(S-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(S-d._start)*d._ts,s,r||Le&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!p){v=0,g&&(u+=this._zTime=S?-Jt:Jt);break}}d=g}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Jt)._zTime=h>=o?1:-1,this._ts))return this._start=x,ba(this),this.render(i,s,r);this._onUpdate&&!s&&xn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Li(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(xn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(gi(s)||(s=hn(this,s,i)),!(i instanceof ar)){if(Re(i))return i.forEach(function(o){return r.add(o,s)}),this;if(be(i))return this.addLabel(i,s);if(le(i))i=xe.delayedCall(0,i);else return this}return this!==i?kn(this,i,s):this},e.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-_n);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof xe?s&&l.push(c):(r&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,r)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return be(i)?this.removeLabel(i):le(i)?this.killTweensOf(i):(Sa(this,i),i===this._recent&&(this._recent=this._last),is(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ee(nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),a.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=hn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var o=xe.delayedCall(0,s||qr,r);return o.data="isPause",this._hasPause=1,kn(this,o,hn(this,i))},e.removePause=function(i){var s=this._first;for(i=hn(this,i);s;)s._start===i&&s.data==="isPause"&&Li(s),s=s._next},e.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),l=o.length;l--;)Ei!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],o=vn(i),l=this._first,c=gi(s),u;l;)l instanceof xe?wm(l._targets,o)&&(c?(!Ei||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&r.push(l):(u=l.getTweensOf(o,s)).length&&r.push.apply(r,u),l=l._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,o=hn(r,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=xe.to(r,Mn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Jt,onStart:function(){if(r.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());g._dur!==m&&rr(g,m,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,Mn({startAt:{time:hn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Pu(this,hn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Pu(this,hn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Jt)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,l=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=r&&(l[c]+=i);return is(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return a.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),is(this)},e.totalDuration=function(i){var s=0,r=this,o=r._last,l=_n,c,u,f;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(f=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&r._sort&&o._ts&&!r._lock?(r._lock=1,kn(r,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!r._dp||f&&f.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;rr(r,r===se&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(se._ts&&(nd(se,fa(i,se)),td=nn.frame),nn.frame>=Du){Du+=rn.autoSleep||120;var s=se._first;if((!s||!s._ts)&&rn.autoSleep&&nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||nn.sleep()}}},t}(ar);Mn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var qm=function(t,e,n,i,s,r,o){var l=new We(this._pt,t,e,0,1,Pd,null,s),c=0,u=0,f,h,d,g,_,m,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Xr(i)),r&&(v=[n,i],r(v,t,e),n=v[0],i=v[1]),h=n.match(Xa)||[];f=Xa.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Ys(m,g)-m:parseFloat(g)-m,m:d&&d<4?Math.round:0},c=Xa.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Zf.test(i)||p)&&(l.e=0),this._pt=l,l},zc=function(t,e,n,i,s,r,o,l,c,u){le(i)&&(i=i(s||0,t,r));var f=t[e],h=n!=="get"?n:le(f)?c?t[e.indexOf("set")||!le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,d=le(f)?c?$m:Td:Bc,g;if(be(i)&&(~i.indexOf("random(")&&(i=Xr(i)),i.charAt(1)==="="&&(g=Ys(h,i)+(Pe(h)||0),(g||g===0)&&(i=g))),!u||h!==i||oc)return!isNaN(h*i)&&i!==""?(g=new We(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?Km:Ad,0,d),c&&(g.fp=c),o&&g.modifier(o,this,t),this._pt=g):(!f&&!(e in t)&&Fc(e,i),qm.call(this,t,e,h,i,d,l||rn.stringFilter,c))},Xm=function(t,e,n,i,s){if(le(t)&&(t=Br(t,s,e,n,i)),!qn(t)||t.style&&t.nodeType||Re(t)||Yf(t))return be(t)?Br(t,s,e,n,i):t;var r={},o;for(o in t)r[o]=Br(t[o],s,e,n,i);return r},Ed=function(t,e,n,i,s,r){var o,l,c,u;if(tn[t]&&(o=new tn[t]).init(s,o.rawVars?e[t]:Xm(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=l=new We(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Vs))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Ei,oc,Uc=function a(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,d=i.yoyoEase,g=i.keyframes,_=i.autoRevert,m=t._dur,p=t._startAt,v=t._targets,y=t.parent,x=y&&y.data==="nested"?y.vars.targets:v,M=t._overwrite==="auto"&&!Ac,b=t.timeline,D,C,w,S,I,z,A,L,R,N,q,k,Z;if(b&&(!g||!s)&&(s="none"),t._ease=ss(s,ir.ease),t._yEase=d?Md(ss(d===!0?s:d,ir.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!b&&!!i.runBackwards,!b||g&&!i.stagger){if(L=v[0]?ns(v[0]).harness:0,k=L&&i[L.prop],D=ha(i,Ic),p&&(p._zTime<0&&p.progress(1),e<0&&h&&o&&!_?p.render(-1,!0):p.revert(h&&m?ta:ym),p._lazy=0),r){if(Li(t._startAt=xe.set(v,Mn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!p&&Ge(l),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le||!o&&!_)&&t._startAt.revert(ta),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!p){if(e&&(o=!1),w=Mn({overwrite:!1,data:"isFromStart",lazy:o&&!p&&Ge(l),immediateRender:o,stagger:0,parent:y},D),k&&(w[L.prop]=k),Li(t._startAt=xe.set(v,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Le?t._startAt.revert(ta):t._startAt.render(-1,!0)),t._zTime=e,!o)a(t._startAt,Jt,Jt);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&Ge(l)||l&&!m,C=0;C<v.length;C++){if(I=v[C],A=I._gsap||Oc(v)[C]._gsap,t._ptLookup[C]=N={},tc[A.id]&&Ti.length&&ua(),q=x===v?C:x.indexOf(I),L&&(R=new L).init(I,k||D,t,q,x)!==!1&&(t._pt=S=new We(t._pt,I,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(K){N[K]=S}),R.priority&&(z=1)),!L||k)for(w in D)tn[w]&&(R=Ed(w,D,t,q,I,x))?R.priority&&(z=1):N[w]=S=zc.call(t,I,w,"get",D[w],q,x,0,i.stringFilter);t._op&&t._op[C]&&t.kill(I,t._op[C]),M&&t._pt&&(Ei=t,se.killTweensOf(I,N,t.globalTime(e)),Z=!t.parent,Ei=0),t._pt&&l&&(tc[A.id]=1)}z&&Ld(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,g&&e<=0&&b.render(_n,!0,!0)},Ym=function(t,e,n,i,s,r,o){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,f,h;if(!l)for(l=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return oc=1,t.vars[e]="+=0",Uc(t,o),oc=0,1;l.push(c)}for(h=l.length;h--;)u=l[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,u.e&&(u.e=he(n)+Pe(u.e)),u.b&&(u.b=c.s+Pe(u.b))},jm=function(t,e){var n=t[0]?ns(t[0]).harness:0,i=n&&n.aliases,s,r,o,l;if(!i)return e;s=as({},e);for(r in i)if(r in s)for(l=i[r].split(","),o=l.length;o--;)s[l[o]]=s[r];return s},Zm=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,o;if(Re(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(r in e)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:e[r],e:s})},Br=function(t,e,n,i,s){return le(t)?t.call(e,n,i,s):be(t)&&~t.indexOf("random(")?Xr(t):t},Dd=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Cd={};He(Dd+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return Cd[a]=1});var xe=function(a){qf(t,a);function t(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=a.call(this,r?i:zr(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,v=i.parent||se,y=(Re(n)||Yf(n)?gi(n[0]):"length"in i)?[n]:vn(n),x,M,b,D,C,w,S,I;if(o._targets=y.length?Oc(y):ca("GSAP target "+n+" not found. https://greensock.com",!rn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||vo(c)||vo(u)){if(i=o.vars,x=o.timeline=new Ve({data:"nested",defaults:_||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=ai(o),x._start=0,h||vo(c)||vo(u)){if(D=y.length,S=h&&hd(h),qn(h))for(C in h)~Dd.indexOf(C)&&(I||(I={}),I[C]=h[C]);for(M=0;M<D;M++)b=ha(i,Cd),b.stagger=0,p&&(b.yoyoEase=p),I&&as(b,I),w=y[M],b.duration=+Br(c,ai(o),M,w,y),b.delay=(+Br(u,ai(o),M,w,y)||0)-o._delay,!h&&D===1&&b.delay&&(o._delay=u=b.delay,o._start+=u,b.delay=0),x.to(w,b,S?S(M,w,y):0),x._ease=qt.none;x.duration()?c=u=0:o.timeline=0}else if(g){zr(Mn(x.vars.defaults,{ease:"none"})),x._ease=ss(g.ease||i.ease||"none");var z=0,A,L,R;if(Re(g))g.forEach(function(N){return x.to(y,N,">")}),x.duration();else{b={};for(C in g)C==="ease"||C==="easeEach"||Zm(C,g[C],b,g.easeEach);for(C in b)for(A=b[C].sort(function(N,q){return N.t-q.t}),z=0,M=0;M<A.length;M++)L=A[M],R={ease:L.e,duration:(L.t-(M?A[M-1].t:0))/100*c},R[C]=L.v,x.to(y,R,z),z+=R.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return d===!0&&!Ac&&(Ei=ai(o),se.killTweensOf(y),Ei=0),kn(v,ai(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Ee(v._time)&&Ge(f)&&Dm(ai(o))&&v.data!=="nested")&&(o._tTime=-Jt,o.render(Math.max(0,-u)||0)),m&&ad(ai(o),m),o}var e=t.prototype;return e.render=function(i,s,r){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Jt&&!u?l:i<Jt?0:i,h,d,g,_,m,p,v,y,x;if(!c)Tm(this,i,s,r);else if(f!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,r);if(h=Ee(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===f/_&&(h=c,g--),h>c&&(h=c)),p=this._yoyo&&g&1,p&&(x=this._yEase,h=c-h),m=sr(this._tTime,_),h===o&&!r&&this._initted)return this._tTime=f,this;g!==m&&(y&&this._yEase&&wd(y,p),this.vars.repeatRefresh&&!p&&!this._lock&&(this._lock=r=1,this.render(Ee(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(ld(this,u?i:h,r,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!o&&!s&&!g&&(xn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(v,d.d),d=d._next;y&&y.render(i<0?i:!h&&p?-Jt:y._dur*y._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ec(this,i,s,r),xn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&xn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ec(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Li(this,1),!s&&!(u&&!o)&&(f||o||p)&&(xn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),a.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,o){Yr||nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Uc(this,l),c=this._ease(l/this._dur),Ym(this,i,s,r,o,c,l)?this.resetTo(i,s,r,o):(Ea(this,0),this.parent||rd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Pr(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ei&&Ei.vars.overwrite!==!0)._first||Pr(this),this.parent&&r!==this.timeline.totalDuration()&&rr(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,l=i?vn(i):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,m,p;if((!s||s==="all")&&bm(o,l))return s==="all"&&(this._pt=0),Pr(this);for(f=this._op=this._op||[],s!=="all"&&(be(s)&&(_={},He(s,function(v){return _[v]=1}),s=_),s=jm(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){h=c[p],s==="all"?(f[p]=s,g=h,d={}):(d=f[p]=f[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sa(this,m,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&Pr(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ur(1,arguments)},t.delayedCall=function(i,s,r,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(i,s,r){return Ur(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return se.killTweensOf(i,s,r)},t}(ar);Mn(xe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});He("staggerTo,staggerFrom,staggerFromTo",function(a){xe[a]=function(){var t=new Ve,e=ic.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var Bc=function(t,e,n){return t[e]=n},Td=function(t,e,n){return t[e](n)},$m=function(t,e,n,i){return t[e](i.fp,n)},Jm=function(t,e,n){return t.setAttribute(e,n)},kc=function(t,e){return le(t[e])?Td:Pc(t[e])&&t.setAttribute?Jm:Bc},Ad=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Km=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Pd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Vc=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Qm=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},tg=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Sa(this,e,"_pt"):e.dep||(n=1),e=i;return!n},eg=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Ld=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},We=function(){function a(e,n,i,s,r,o,l,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||Ad,this.d=l||this,this.set=c||Bc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=eg,this.m=n,this.mt=s,this.tween=i},a}();He(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return Ic[a]=1});on.TweenMax=on.TweenLite=xe;on.TimelineLite=on.TimelineMax=Ve;se=new Ve({sortChildren:!1,defaults:ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});rn.stringFilter=yd;var lr=[],na={},ng=[],Ru=0,Ja=function(t){return(na[t]||ng).map(function(e){return e()})},ac=function(){var t=Date.now(),e=[];t-Ru>2&&(Ja("matchMediaInit"),lr.forEach(function(n){var i=n.queries,s=n.conditions,r,o,l,c;for(o in i)r=fn.matchMedia(i[o]).matches,r&&(l=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),l&&e.push(n))}),Ja("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),Ru=t,Ja("matchMedia"))},Rd=function(){function a(e,n){this.selector=n&&sc(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=a.prototype;return t.add=function(n,i,s){le(n)&&(s=i,i=n,n=le);var r=this,o=function(){var c=ge,u=r.selector,f;return c&&c!==r&&c.data.push(r),s&&(r.selector=sc(s)),ge=r,f=i.apply(r,arguments),le(f)&&r._r.push(f),ge=c,r.selector=u,r.isReverted=!1,f};return r.last=o,n===le?o(r):n?r[n]=o:o},t.ignore=function(n){var i=ge;ge=null,n(this),ge=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof a?n.push.apply(n,i.getTweens()):i instanceof xe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}))}),r.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,c){return c.g-l.g||-1}).forEach(function(l){return l.t.revert(n)}),this.data.forEach(function(l){return!(l instanceof ar)&&l.revert&&l.revert(n)}),this._r.forEach(function(l){return l(n,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),i){var o=lr.indexOf(this);~o&&lr.splice(o,1)}},t.revert=function(n){this.kill(n||{})},a}(),ig=function(){function a(e){this.contexts=[],this.scope=e}var t=a.prototype;return t.add=function(n,i,s){qn(n)||(n={matches:n});var r=new Rd(0,s||this.scope),o=r.conditions={},l,c,u;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?u=1:(l=fn.matchMedia(n[c]),l&&(lr.indexOf(r)<0&&lr.push(r),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ac):l.addEventListener("change",ac)));return u&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},a}(),da={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return _d(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return se.getTweensOf(t,e)},getProperty:function(t,e,n,i){be(t)&&(t=vn(t)[0]);var s=ns(t||{}).get,r=n?sd:id;return n==="native"&&(n=""),t&&(e?r((tn[e]&&tn[e].get||s)(t,e,n,i)):function(o,l,c){return r((tn[o]&&tn[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=vn(t),t.length>1){var i=t.map(function(u){return je.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var r=tn[e],o=ns(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=r?function(u){var f=new r;Vs._pt=0,f.init(t,n?u+n:u,Vs,0,[t]),f.render(1,f),Vs._pt&&Vc(1,Vs)}:o.set(t,l);return r?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=je.to(t,as((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(l,c,u){return s.resetTo(e,l,c,u)};return r.tween=s,r},isTweening:function(t){return se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ss(t.ease,ir.ease)),Cu(ir,t||{})},config:function(t){return Cu(rn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!tn[o]&&!on[o]&&ca(e+" effect requires "+o+" plugin.")}),Ya[e]=function(o,l,c){return n(vn(o),Mn(l||{},s),c)},r&&(Ve.prototype[e]=function(o,l,c){return this.add(Ya[e](o,qn(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){qt[t]=ss(e)},parseEase:function(t,e){return arguments.length?ss(t,e):qt},getById:function(t){return se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,s;for(n.smoothChildTiming=Ge(t.smoothChildTiming),se.remove(n),n._dp=0,n._time=n._tTime=se._time,i=se._first;i;)s=i._next,(e||!(!i._dur&&i instanceof xe&&i.vars.onComplete===i._targets[0]))&&kn(n,i,i._start-i._delay),i=s;return kn(se,n,0),n},context:function(t,e){return t?new Rd(t,e):ge},matchMedia:function(t){return new ig(t)},matchMediaRefresh:function(){return lr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ac()},addEventListener:function(t,e){var n=na[t]||(na[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=na[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Om,wrapYoyo:zm,distribute:hd,random:dd,snap:fd,normalize:Nm,getUnit:Pe,clamp:Lm,splitColor:vd,toArray:vn,selector:sc,mapRange:md,pipe:Fm,unitize:Im,interpolate:Um,shuffle:ud},install:Kf,effects:Ya,ticker:nn,updateRoot:Ve.updateRoot,plugins:tn,globalTimeline:se,core:{PropTween:We,globals:Qf,Tween:xe,Timeline:Ve,Animation:ar,getCache:ns,_removeLinkedListItem:Sa,reverting:function(){return Le},context:function(t){return t&&ge&&(ge.data.push(t),t._ctx=ge),ge},suppressOverwrites:function(t){return Ac=t}}};He("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return da[a]=xe[a]});nn.add(Ve.updateRoot);Vs=da.to({},{duration:0});var sg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},rg=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=sg(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},Ka=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(o){var l,c;if(be(s)&&(l={},He(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}rg(o,s)}}}},je=da.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,o,l;this.tween=n;for(r in e)l=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(l||0)+"",e[r],i,s,0,0,r),o.op=r,o.b=l,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)Le?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Ka("roundProps",rc),Ka("modifiers"),Ka("snap",fd))||da;xe.version=Ve.version=je.version="3.11.5";Jf=1;Lc()&&or();qt.Power0;qt.Power1;qt.Power2;qt.Power3;qt.Power4;qt.Linear;qt.Quad;qt.Cubic;qt.Quart;qt.Quint;qt.Strong;qt.Elastic;qt.Back;qt.SteppedEase;qt.Bounce;qt.Sine;qt.Expo;qt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fu,Di,js,Gc,Qi,Iu,Hc,og=function(){return typeof window<"u"},_i={},ji=180/Math.PI,Zs=Math.PI/180,vs=Math.atan2,Nu=1e8,Wc=/([A-Z])/g,ag=/(left|right|width|margin|padding|x)/i,lg=/[\s,\(]\S/,Vn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},lc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},cg=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ug=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},hg=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Fd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Id=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},fg=function(t,e,n){return t.style[e]=n},dg=function(t,e,n){return t.style.setProperty(e,n)},pg=function(t,e,n){return t._gsap[e]=n},mg=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},gg=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},_g=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},re="transform",Ln=re+"Origin",vg=function a(t,e){var n=this,i=this.target,s=i.style;if(t in _i){if(this.tfm=this.tfm||{},t!=="transform")t=Vn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=ci(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:ci(i,t);else return Vn.transform.split(",").forEach(function(r){return a.call(n,r,e)});if(this.props.indexOf(re)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ln,e,"")),t=re}(s||e)&&this.props.push(t,e,s[t])},Nd=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},xg=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Wc,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Hc(),(!s||!s.isStart)&&!n[re]&&(Nd(n),i.uncache=1)}},Od=function(t,e){var n={target:t,props:[],revert:xg,save:vg};return t._gsap||je.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},zd,cc=function(t,e){var n=Di.createElementNS?Di.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Di.createElement(t);return n.style?n:Di.createElement(t)},Hn=function a(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Wc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&a(t,cr(e)||e,1)||""},Ou="O,Moz,ms,Ms,Webkit".split(","),cr=function(t,e,n){var i=e||Qi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(Ou[r]+t in s););return r<0?null:(r===3?"ms":r>=0?Ou[r]:"")+t},uc=function(){og()&&window.document&&(Fu=window,Di=Fu.document,js=Di.documentElement,Qi=cc("div")||{style:{}},cc("div"),re=cr(re),Ln=re+"Origin",Qi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",zd=!!cr("perspective"),Hc=je.core.reverting,Gc=1)},Qa=function a(t){var e=cc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(js.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=a}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),js.removeChild(e),this.style.cssText=s,r},zu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Ud=function(t){var e;try{e=t.getBBox()}catch{e=Qa.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Qa||(e=Qa.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+zu(t,["x","cx","x1"])||0,y:+zu(t,["y","cy","y1"])||0,width:0,height:0}:e},Bd=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ud(t))},jr=function(t,e){if(e){var n=t.style;e in _i&&e!==Ln&&(e=re),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Wc,"-$1").toLowerCase())):n.removeAttribute(e)}},Ci=function(t,e,n,i,s,r){var o=new We(t._pt,e,n,0,1,r?Id:Fd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Uu={deg:1,rad:1,turn:1},yg={grid:1,flex:1},Ri=function a(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Qi.style,l=ag.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,m,p;return i===r||!s||Uu[i]||Uu[r]?s:(r!=="px"&&!h&&(s=a(t,e,n,"px")),p=t.getCTM&&Bd(t),(d||r==="%")&&(_i[e]||~e.indexOf("adius"))?(g=p?t.getBBox()[l?"width":"height"]:t[u],he(d?s/g*f:s/100*g)):(o[l?"width":"height"]=f+(h?r:i),_=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Di||!_.appendChild)&&(_=Di.body),m=_._gsap,m&&d&&m.width&&l&&m.time===nn.time&&!m.uncache?he(s/m.width*f):((d||r==="%")&&!yg[Hn(_,"display")]&&(o.position=Hn(t,"position")),_===t&&(o.position="static"),_.appendChild(Qi),g=Qi[u],_.removeChild(Qi),o.position="absolute",l&&d&&(m=ns(_),m.time=nn.time,m.width=_[u]),he(h?g*s/f:g&&s?f/g*s:0))))},ci=function(t,e,n,i){var s;return Gc||uc(),e in Vn&&e!=="transform"&&(e=Vn[e],~e.indexOf(",")&&(e=e.split(",")[0])),_i[e]&&e!=="transform"?(s=$r(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ma(Hn(t,Ln))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=pa[e]&&pa[e](t,e,n)||Hn(t,e)||ed(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ri(t,e,s,n)+n:s},Mg=function(t,e,n,i){if(!n||n==="none"){var s=cr(e,t,1),r=s&&Hn(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=Hn(t,"borderTopColor"))}var o=new We(this._pt,t.style,e,0,1,Pd),l=0,c=0,u,f,h,d,g,_,m,p,v,y,x,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Hn(t,e)||i,t.style[e]=n),u=[n,i],yd(u),n=u[0],i=u[1],h=n.match(ks)||[],M=i.match(ks)||[],M.length){for(;f=ks.exec(i);)m=f[0],v=i.substring(l,f.index),g?g=(g+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(g=1),m!==(_=h[c++]||"")&&(d=parseFloat(_)||0,x=_.substr((d+"").length),m.charAt(1)==="="&&(m=Ys(d,m)+x),p=parseFloat(m),y=m.substr((p+"").length),l=ks.lastIndex-y.length,y||(y=y||rn.units[e]||x,l===i.length&&(i+=y,o.e+=y)),x!==y&&(d=Ri(t,e,_,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:d,c:p-d,m:g&&g<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Id:Fd;return Zf.test(i)&&(o.e=0),this._pt=o,o},Bu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wg=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Bu[n]||n,e[1]=Bu[i]||i,e.join(" ")},Sg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],_i[o]&&(l=1,o=o==="transformOrigin"?Ln:re),jr(n,o);l&&(jr(n,re),r&&(r.svg&&n.removeAttribute("transform"),$r(n,1),r.uncache=1,Nd(i)))}},pa={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new We(t._pt,e,n,0,0,Sg);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},Zr=[1,0,0,1,0,0],kd={},Vd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ku=function(t){var e=Hn(t,re);return Vd(e)?Zr:e.substr(7).match(jf).map(he)},qc=function(t,e){var n=t._gsap||ns(t),i=t.style,s=ku(t),r,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Zr:s):(s===Zr&&!t.offsetParent&&t!==js&&!n.svg&&(l=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(c=1,o=t.nextElementSibling,js.appendChild(t)),s=ku(t),l?i.display=l:jr(t,"display"),c&&(o?r.insertBefore(t,o):r?r.appendChild(t):js.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},hc=function(t,e,n,i,s,r){var o=t._gsap,l=s||qc(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],m=l[3],p=l[4],v=l[5],y=e.split(" "),x=parseFloat(y[0])||0,M=parseFloat(y[1])||0,b,D,C,w;n?l!==Zr&&(D=d*m-g*_)&&(C=x*(m/D)+M*(-_/D)+(_*v-m*p)/D,w=x*(-g/D)+M*(d/D)-(d*v-g*p)/D,x=C,M=w):(b=Ud(t),x=b.x+(~y[0].indexOf("%")?x/100*b.width:x),M=b.y+(~(y[1]||y[0]).indexOf("%")?M/100*b.height:M)),i||i!==!1&&o.smooth?(p=x-c,v=M-u,o.xOffset=f+(p*d+v*_)-p,o.yOffset=h+(p*g+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[Ln]="0px 0px",r&&(Ci(r,o,"xOrigin",c,x),Ci(r,o,"yOrigin",u,M),Ci(r,o,"xOffset",f,o.xOffset),Ci(r,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},$r=function(t,e){var n=t._gsap||new bd(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",o="deg",l=getComputedStyle(t),c=Hn(t,Ln)||"0",u,f,h,d,g,_,m,p,v,y,x,M,b,D,C,w,S,I,z,A,L,R,N,q,k,Z,K,ht,G,Y,J,st;return u=f=h=_=m=p=v=y=x=0,d=g=1,n.svg=!!(t.getCTM&&Bd(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[re]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[re]!=="none"?l[re]:"")),i.scale=i.rotate=i.translate="none"),D=qc(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),hc(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,D)),M=n.xOrigin||0,b=n.yOrigin||0,D!==Zr&&(I=D[0],z=D[1],A=D[2],L=D[3],u=R=D[4],f=N=D[5],D.length===6?(d=Math.sqrt(I*I+z*z),g=Math.sqrt(L*L+A*A),_=I||z?vs(z,I)*ji:0,v=A||L?vs(A,L)*ji+_:0,v&&(g*=Math.abs(Math.cos(v*Zs))),n.svg&&(u-=M-(M*I+b*A),f-=b-(M*z+b*L))):(st=D[6],Y=D[7],K=D[8],ht=D[9],G=D[10],J=D[11],u=D[12],f=D[13],h=D[14],C=vs(st,G),m=C*ji,C&&(w=Math.cos(-C),S=Math.sin(-C),q=R*w+K*S,k=N*w+ht*S,Z=st*w+G*S,K=R*-S+K*w,ht=N*-S+ht*w,G=st*-S+G*w,J=Y*-S+J*w,R=q,N=k,st=Z),C=vs(-A,G),p=C*ji,C&&(w=Math.cos(-C),S=Math.sin(-C),q=I*w-K*S,k=z*w-ht*S,Z=A*w-G*S,J=L*S+J*w,I=q,z=k,A=Z),C=vs(z,I),_=C*ji,C&&(w=Math.cos(C),S=Math.sin(C),q=I*w+z*S,k=R*w+N*S,z=z*w-I*S,N=N*w-R*S,I=q,R=k),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),d=he(Math.sqrt(I*I+z*z+A*A)),g=he(Math.sqrt(N*N+st*st)),C=vs(R,N),v=Math.abs(C)>2e-4?C*ji:0,x=J?1/(J<0?-J:J):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Vd(Hn(t,re)),q&&t.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(d*=-1,v+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=he(d),n.scaleY=he(g),n.rotation=he(_)+o,n.rotationX=he(m)+o,n.rotationY=he(p)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=x+r,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[Ln]=ma(c)),n.xOffset=n.yOffset=0,n.force3D=rn.force3D,n.renderTransform=n.svg?Eg:zd?Gd:bg,n.uncache=0,n},ma=function(t){return(t=t.split(" "))[0]+" "+t[1]},tl=function(t,e,n){var i=Pe(e);return he(parseFloat(e)+parseFloat(Ri(t,"x",n+"px",i)))+i},bg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Gd(t,e)},ki="0deg",vr="0px",Vi=") ",Gd=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,v=n.target,y=n.zOrigin,x="",M=p==="auto"&&t&&t!==1||p===!0;if(y&&(f!==ki||u!==ki)){var b=parseFloat(u)*Zs,D=Math.sin(b),C=Math.cos(b),w;b=parseFloat(f)*Zs,w=Math.cos(b),r=tl(v,r,D*w*-y),o=tl(v,o,-Math.sin(b)*-y),l=tl(v,l,C*w*-y+y)}m!==vr&&(x+="perspective("+m+Vi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(M||r!==vr||o!==vr||l!==vr)&&(x+=l!==vr||M?"translate3d("+r+", "+o+", "+l+") ":"translate("+r+", "+o+Vi),c!==ki&&(x+="rotate("+c+Vi),u!==ki&&(x+="rotateY("+u+Vi),f!==ki&&(x+="rotateX("+f+Vi),(h!==ki||d!==ki)&&(x+="skew("+h+", "+d+Vi),(g!==1||_!==1)&&(x+="scale("+g+", "+_+Vi),v.style[re]=x||"translate(0, 0)"},Eg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,v=n.forceCSS,y=parseFloat(r),x=parseFloat(o),M,b,D,C,w;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Zs,c*=Zs,M=Math.cos(l)*f,b=Math.sin(l)*f,D=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Zs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),D*=w,C*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,b*=w)),M=he(M),b=he(b),D=he(D),C=he(C)):(M=f,C=h,b=D=0),(y&&!~(r+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Ri(d,"x",r,"px"),x=Ri(d,"y",o,"px")),(g||_||m||p)&&(y=he(y+g-(g*M+_*D)+m),x=he(x+_-(g*b+_*C)+p)),(i||s)&&(w=d.getBBox(),y=he(y+i/100*w.width),x=he(x+s/100*w.height)),w="matrix("+M+","+b+","+D+","+C+","+y+","+x+")",d.setAttribute("transform",w),v&&(d.style[re]=w)},Dg=function(t,e,n,i,s){var r=360,o=be(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ji:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),f==="cw"&&c<0?c=(c+r*Nu)%r-~~(c/r)*r:f==="ccw"&&c>0&&(c=(c-r*Nu)%r-~~(c/r)*r)),t._pt=h=new We(t._pt,e,n,i,c,cg),h.e=u,h.u="deg",t._props.push(n),h},Vu=function(t,e){for(var n in e)t[n]=e[n];return t},Cg=function(t,e,n){var i=Vu({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[re]=e,o=$r(n,1),jr(n,re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[re],r[re]=e,o=$r(n,1),r[re]=c);for(l in _i)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Pe(c),g=Pe(u),f=d!==g?Ri(n,l,c,g):parseFloat(c),h=parseFloat(u),t._pt=new We(t._pt,o,l,f,h-f,lc),t._pt.u=g||0,t._props.push(l));Vu(o,i)};He("padding,margin,Width,Radius",function(a,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?a+o:"border"+o+a});pa[t>1?"border"+a:a]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=r.map(function(g){return ci(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},r.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var Hd={name:"css",register:uc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,o=t.style,l=n.vars.startAt,c,u,f,h,d,g,_,m,p,v,y,x,M,b,D,C;Gc||uc(),this.styles=this.styles||Od(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(u=e[_],!(tn[_]&&Ed(_,e,n,i,t,s)))){if(d=typeof u,g=pa[_],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Xr(u)),g)g(this,t,_,u,n)&&(D=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),u+="",Ai.lastIndex=0,Ai.test(c)||(m=Pe(c),p=Pe(u)),p?m!==p&&(c=Ri(t,_,c,p)+p):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,_),r.push(_),C.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,s):l[_],be(c)&&~c.indexOf("random(")&&(c=Xr(c)),Pe(c+"")||(c+=rn.units[_]||Pe(ci(t,_))||""),(c+"").charAt(1)==="="&&(c=ci(t,_))):c=ci(t,_),h=parseFloat(c),v=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),_ in Vn&&(_==="autoAlpha"&&(h===1&&ci(t,"visibility")==="hidden"&&f&&(h=0),C.push("visibility",0,o.visibility),Ci(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Vn[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in _i,y){if(this.styles.save(_),x||(M=t._gsap,M.renderTransform&&!e.parseTransform||$r(t,e.parseTransform),b=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new We(this._pt,o,re,0,1,M.renderTransform,M,0,-1),x.dep=1),_==="scale")this._pt=new We(this._pt,M,"scaleY",M.scaleY,(v?Ys(M.scaleY,v+f):f)-M.scaleY||0,lc),this._pt.u=0,r.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(Ln,0,o[Ln]),u=wg(u),M.svg?hc(t,u,0,b,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==M.zOrigin&&Ci(this,M,"zOrigin",M.zOrigin,p),Ci(this,o,_,ma(c),ma(u)));continue}else if(_==="svgOrigin"){hc(t,u,1,b,0,this);continue}else if(_ in kd){Dg(this,M,_,h,v?Ys(h,v+u):u);continue}else if(_==="smoothOrigin"){Ci(this,M,"smooth",M.smooth,u);continue}else if(_==="force3D"){M[_]=u;continue}else if(_==="transform"){Cg(this,u,t);continue}}else _ in o||(_=cr(_)||_);if(y||(f||f===0)&&(h||h===0)&&!lg.test(u)&&_ in o)m=(c+"").substr((h+"").length),f||(f=0),p=Pe(u)||(_ in rn.units?rn.units[_]:m),m!==p&&(h=Ri(t,_,c,p)),this._pt=new We(this._pt,y?M:o,_,h,(v?Ys(h,v+f):f)-h,!y&&(p==="px"||_==="zIndex")&&e.autoRound!==!1?hg:lc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=ug);else if(_ in o)Mg.call(this,t,_,c,v?v+u:u);else if(_ in t)this.add(t,_,c||t[_],v?v+u:u,i,s);else if(_!=="parseTransform"){Fc(_,u);continue}y||(_ in o?C.push(_,0,o[_]):C.push(_,1,c||t[_])),r.push(_)}}D&&Ld(this)},render:function(t,e){if(e.tween._time||!Hc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ci,aliases:Vn,getSetter:function(t,e,n){var i=Vn[e];return i&&i.indexOf(",")<0&&(e=i),e in _i&&e!==Ln&&(t._gsap.x||ci(t,"x"))?n&&Iu===n?e==="scale"?mg:pg:(Iu=n||{})&&(e==="scale"?gg:_g):t.style&&!Pc(t.style[e])?fg:~e.indexOf("-")?dg:kc(t,e)},core:{_removeProperty:jr,_getMatrix:qc}};je.utils.checkPrefix=cr;je.core.getStyleSaver=Od;(function(a,t,e,n){var i=He(a+","+t+","+e,function(s){_i[s]=1});He(t,function(s){rn.units[s]="deg",kd[s]=1}),Vn[i[13]]=a+","+t,He(n,function(s){var r=s.split(":");Vn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");He("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){rn.units[a]="px"});je.registerPlugin(Hd);var Wd=je.registerPlugin(Hd)||je;Wd.core.Tween;/*!
 * matrix 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var hi,rs,Xc,$s,Rr,ia,ga,kr,yn="transform",fc=yn+"Origin",qd,Yc=function(t){var e=t.ownerDocument||t;for(!(yn in t.style)&&("msTransform"in t.style)&&(yn="msTransform",fc=yn+"Origin");e.parentNode&&(e=e.parentNode););if(rs=window,ga=new ls,e){hi=e,Xc=e.documentElement,$s=e.body,kr=hi.createElementNS("http://www.w3.org/2000/svg","g"),kr.style.transform="none";var n=e.createElement("div"),i=e.createElement("div");$s.appendChild(n),n.appendChild(i),n.style.position="static",n.style[yn]="translate3d(0,0,1px)",qd=i.offsetParent!==n,$s.removeChild(n)}return e},Tg=function(t){for(var e,n;t&&t!==$s;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},Xd=[],Yd=[],jc=function(){return rs.pageYOffset||hi.scrollTop||Xc.scrollTop||$s.scrollTop||0},Zc=function(){return rs.pageXOffset||hi.scrollLeft||Xc.scrollLeft||$s.scrollLeft||0},$c=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},Ag=function a(t){if(rs.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return a(t)},el=function a(t,e){if(t.parentNode&&(hi||Yc(t))){var n=$c(t),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?e?"rect":"g":"div",r=e!==2?0:100,o=e===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=hi.createElementNS?hi.createElementNS(i.replace(/^https/,"http"),s):hi.createElement(s);return e&&(n?(ia||(ia=a(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+r+","+o+")"),ia.appendChild(c)):(Rr||(Rr=a(t),Rr.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+o+"px;left:"+r+"px",Rr.appendChild(c))),c}throw"Need document and parent."},Pg=function(t){for(var e=new ls,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},jd=function(t){var e=t.getCTM(),n;return e||(n=t.style[yn],t.style[yn]="none",t.appendChild(kr),e=kr.getCTM(),t.removeChild(kr),n?t.style[yn]=n:t.style.removeProperty(yn.replace(/([A-Z])/g,"-$1").toLowerCase())),e||ga.clone()},Lg=function(t,e){var n=$c(t),i=t===n,s=n?Xd:Yd,r=t.parentNode,o,l,c,u,f,h;if(t===rs)return t;if(s.length||s.push(el(t,1),el(t,2),el(t,3)),o=n?ia:Rr,n)i?(c=jd(t),u=-c.e/c.a,f=-c.f/c.d,l=ga):t.getBBox?(c=t.getBBox(),l=t.transform?t.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?Pg(l):l.getItem(0).matrix:ga,u=l.a*c.x+l.c*c.y,f=l.b*c.x+l.d*c.y):(l=new ls,u=f=0),e&&t.tagName.toLowerCase()==="g"&&(u=f=0),(i?n:r).appendChild(o),o.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+u)+","+(l.f+f)+")");else{if(u=f=0,qd)for(l=t.offsetParent,c=t;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(rs.getComputedStyle(c)[yn]+"").length>4&&(u=c.offsetLeft,f=c.offsetTop,c=0);if(h=rs.getComputedStyle(t),h.position!=="absolute"&&h.position!=="fixed")for(l=t.offsetParent;r&&r!==l;)u+=r.scrollLeft||0,f+=r.scrollTop||0,r=r.parentNode;c=o.style,c.top=t.offsetTop-f+"px",c.left=t.offsetLeft-u+"px",c[yn]=h[yn],c[fc]=h[fc],c.position=h.position==="fixed"?"fixed":"absolute",t.parentNode.appendChild(o)}return o},nl=function(t,e,n,i,s,r,o){return t.a=e,t.b=n,t.c=i,t.d=s,t.e=r,t.f=o,t},ls=function(){function a(e,n,i,s,r,o){e===void 0&&(e=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),r===void 0&&(r=0),o===void 0&&(o=0),nl(this,e,n,i,s,r,o)}var t=a.prototype;return t.inverse=function(){var n=this.a,i=this.b,s=this.c,r=this.d,o=this.e,l=this.f,c=n*r-i*s||1e-10;return nl(this,r/c,-i/c,-s/c,n/c,(s*l-r*o)/c,-(n*l-i*o)/c)},t.multiply=function(n){var i=this.a,s=this.b,r=this.c,o=this.d,l=this.e,c=this.f,u=n.a,f=n.c,h=n.b,d=n.d,g=n.e,_=n.f;return nl(this,u*i+h*r,u*s+h*o,f*i+d*r,f*s+d*o,l+g*i+_*r,c+g*s+_*o)},t.clone=function(){return new a(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(n){var i=this.a,s=this.b,r=this.c,o=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&r===n.c&&o===n.d&&l===n.e&&c===n.f},t.apply=function(n,i){i===void 0&&(i={});var s=n.x,r=n.y,o=this.a,l=this.b,c=this.c,u=this.d,f=this.e,h=this.f;return i.x=s*o+r*c+f||0,i.y=s*l+r*u+h||0,i},a}();function Xn(a,t,e,n){if(!a||!a.parentNode||(hi||Yc(a)).documentElement===a)return new ls;var i=Tg(a),s=$c(a),r=s?Xd:Yd,o=Lg(a,e),l=r[0].getBoundingClientRect(),c=r[1].getBoundingClientRect(),u=r[2].getBoundingClientRect(),f=o.parentNode,h=!n&&Ag(a),d=new ls((c.left-l.left)/100,(c.top-l.top)/100,(u.left-l.left)/100,(u.top-l.top)/100,l.left+(h?0:Zc()),l.top+(h?0:jc()));if(f.removeChild(o),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return t?d.inverse():d}/*!
 * Flip 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Rg=1,ur,ze,ee,Vr,bi,fi,dc,Gu=function(t,e){return t.actions.forEach(function(n){return n.vars[e]&&n.vars[e](n)})},pc={},Hu=180/Math.PI,Fg=Math.PI/180,_a={},Wu={},Da={},Jc=function(t){return typeof t=="string"?t.split(" ").join("").split(","):t},Ig=Jc("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),Ca=Jc("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Gr=function(t){return ur(t)[0]||console.warn("Element not found:",t)},Gs=function(t){return Math.round(t*1e4)/1e4||0},il=function(t,e,n){return t.forEach(function(i){return i.classList[n](e)})},qu={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Zd={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},$d=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},Hs=function(t,e){var n={},i;for(i in t)e[i]||(n[i]=t[i]);return n},Kc={},Jd=function(t){var e=Kc[t]=Jc(t);return Da[t]=e.concat(Ca),e},Ng=function(t){var e=t._gsap||ze.core.getCache(t);return e.gmCache===ze.ticker.frame?e.gMatrix:(e.gmCache=ze.ticker.frame,e.gMatrix=Xn(t,!0,!1,!0))},Og=function a(t,e,n){n===void 0&&(n=0);for(var i=t.parentNode,s=1e3*Math.pow(10,n)*(e?-1:1),r=e?-s*900:0;t;)r+=s,t=t.previousSibling;return i?r+a(i,e,n+1):r},va=function(t,e,n){return t.forEach(function(i){return i.d=Og(n?i.element:i.t,e)}),t.sort(function(i,s){return i.d-s.d}),t},Jr=function(t,e){for(var n=t.element.style,i=t.css=t.css||[],s=e.length,r,o;s--;)r=e[s],o=n[r]||n.getPropertyValue(r),i.push(o?r:Wu[r]||(Wu[r]=$d(r)),o);return n},Qc=function(t){var e=t.css,n=t.element.style,i=0;for(t.cache.uncache=1;i<e.length;i+=2)e[i+1]?n[e[i]]=e[i+1]:n.removeProperty(e[i]);!e[e.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Xu=function(t,e){t.forEach(function(n){return n.a.cache.uncache=1}),e||t.finalStates.forEach(Qc)},sl="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),tu=function(t,e,n){var i=t.element,s=t.width,r=t.height,o=t.uncache,l=t.getProp,c=i.style,u=4,f,h,d;if(typeof e!="object"&&(e=t),ee&&n!==1)return ee._abs.push({t:i,b:t,a:t,sd:0}),ee._final.push(function(){return(t.cache.uncache=1)&&Qc(t)}),i;for(h=l("display")==="none",(!t.isVisible||h)&&(h&&(Jr(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=s=t.width||e.width,t.height=r=t.height||e.height),Jr(t,sl),d=window.getComputedStyle(i);u--;)c[sl[u]]=d[sl[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=r+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),o)f=new cs(i);else if(f=Hs(t,_a),f.position="absolute",t.simple){var g=i.getBoundingClientRect();f.matrix=new ls(1,0,0,1,g.left+Zc(),g.top+jc())}else f.matrix=Xn(i,!1,!1,!0);return f=Js(f,t,!0),t.x=fi(f.x,.01),t.y=fi(f.y,.01),i},Yu=function(t,e){return e!==!0&&(e=ur(e),t=t.filter(function(n){if(e.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),t},Kd=function(t){return va(t,!0).forEach(function(e){return(e.a.isVisible||e.b.isVisible)&&tu(e.sd<0?e.b:e.a,e.b,1)})},zg=function(t,e){return e&&t.idLookup[mc(e).id]||t.elementStates[0]},mc=function(t,e,n,i){return t instanceof cs?t:t instanceof Rn?zg(t,i):new cs(typeof t=="string"?Gr(t)||console.warn(t+" not found"):t,e,n)},Ug=function(t,e){for(var n=ze.getProperty(t.element,null,"native"),i=t.props={},s=e.length;s--;)i[e[s]]=(n(e[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),t},Qd=function(t,e){var n=t.style||t,i;for(i in e)n[i]=e[i]},Bg=function(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+Rg++),e},tp=function(t){return t.map(function(e){return e.element})},ju=function(t,e,n){return t&&e.length&&n.add(t(tp(e),n,new Rn(e,0,!0)),0)},Js=function(t,e,n,i,s,r){var o=t.element,l=t.cache,c=t.parent,u=t.x,f=t.y,h=e.width,d=e.height,g=e.scaleX,_=e.scaleY,m=e.rotation,p=e.bounds,v=r&&dc&&dc(o,"transform"),y=t,x=e.matrix,M=x.e,b=x.f,D=t.bounds.width!==p.width||t.bounds.height!==p.height||t.scaleX!==g||t.scaleY!==_||t.rotation!==m,C=!D&&t.simple&&e.simple&&!s,w,S,I,z,A,L,R;return C||!c?(g=_=1,m=w=0):(A=Ng(c),L=A.clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),m=Gs(Math.atan2(L.b,L.a)*Hu),w=Gs(Math.atan2(L.c,L.d)*Hu+m)%360,g=Math.sqrt(Math.pow(L.a,2)+Math.pow(L.b,2)),_=Math.sqrt(Math.pow(L.c,2)+Math.pow(L.d,2))*Math.cos(w*Fg),s&&(s=ur(s)[0],z=ze.getProperty(s),R=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),y={scaleX:z("scaleX"),scaleY:z("scaleY"),width:R?R.width:Math.ceil(parseFloat(z("width","px"))),height:R?R.height:parseFloat(z("height","px"))}),l.rotation=m+"deg",l.skewX=w+"deg"),n?(g*=h===y.width||!y.width?1:h/y.width,_*=d===y.height||!y.height?1:d/y.height,l.scaleX=g,l.scaleY=_):(h=fi(h*g/y.scaleX,0),d=fi(d*_/y.scaleY,0),o.style.width=h+"px",o.style.height=d+"px"),i&&Qd(o,e.props),C||!c?(u+=M-t.matrix.e,f+=b-t.matrix.f):D||c!==e.parent?(l.renderTransform(1,l),L=Xn(s||o,!1,!1,!0),S=A.apply({x:L.e,y:L.f}),I=A.apply({x:M,y:b}),u+=I.x-S.x,f+=I.y-S.y):(A.e=A.f=0,I=A.apply({x:M-t.matrix.e,y:b-t.matrix.f}),u+=I.x,f+=I.y),u=fi(u,.02),f=fi(f,.02),r&&!(r instanceof cs)?v&&v.revert():(l.x=u+"px",l.y=f+"px",l.renderTransform(1,l)),r&&(r.x=u,r.y=f,r.rotation=m,r.skewX=w,n?(r.scaleX=g,r.scaleY=_):(r.width=h,r.height=d)),r||l},rl=function(t,e){return t instanceof Rn?t:new Rn(t,e)},ep=function(t,e,n){var i=t.idLookup[n],s=t.alt[n];return s.isVisible&&(!(e.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},ol=[],al="width,height,overflowX,overflowY".split(","),xo,Zu=function(t){if(t!==xo){var e=bi.style,n=bi.clientWidth===window.outerWidth,i=bi.clientHeight===window.outerHeight,s=4;if(t&&(n||i)){for(;s--;)ol[s]=e[al[s]];n&&(e.width=bi.clientWidth+"px",e.overflowY="hidden"),i&&(e.height=bi.clientHeight+"px",e.overflowX="hidden"),xo=t}else if(xo){for(;s--;)ol[s]?e[al[s]]=ol[s]:e.removeProperty($d(al[s]));xo=t}}},ll=function(t,e,n,i){t instanceof Rn&&e instanceof Rn||console.warn("Not a valid state object."),n=n||{};var s=n,r=s.clearProps,o=s.onEnter,l=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,f=s.custom,h=s.delay,d=s.paused,g=s.repeat,_=s.repeatDelay,m=s.yoyo,p=s.toggleClass,v=s.nested,y=s.zIndex,x=s.scale,M=s.fade,b=s.stagger,D=s.spin,C=s.prune,w=("props"in n?n:t).props,S=Hs(n,qu),I=ze.timeline({delay:h,paused:d,repeat:g,repeatDelay:_,yoyo:m,data:"isFlip"}),z=S,A=[],L=[],R=[],N=[],q=D===!0?1:D||0,k=typeof D=="function"?D:function(){return q},Z=t.interrupted||e.interrupted,K=I[i!==1?"to":"from"],ht,G,Y,J,st,ot,H,Dt,Rt,at,xt,rt,X,et;for(G in e.idLookup)xt=e.alt[G]?ep(e,t,G):e.idLookup[G],st=xt.element,at=t.idLookup[G],t.alt[G]&&st===at.element&&(t.alt[G].isVisible||!xt.isVisible)&&(at=t.alt[G]),at?(ot={t:st,b:at,a:xt,sd:at.element===st?0:xt.isVisible?1:-1},R.push(ot),ot.sd&&(ot.sd<0&&(ot.b=xt,ot.a=at),Z&&Jr(ot.b,w?Da[w]:Ca),M&&R.push(ot.swap={t:at.element,b:ot.b,a:ot.a,sd:-ot.sd,swap:ot})),st._flip=at.element._flip=ee?ee.timeline:I):xt.isVisible&&(R.push({t:st,b:Hs(xt,{isVisible:1}),a:xt,sd:0,entering:1}),st._flip=ee?ee.timeline:I);if(w&&(Kc[w]||Jd(w)).forEach(function(Et){return S[Et]=function(Ct){return R[Ct].a.props[Et]}}),R.finalStates=Rt=[],rt=function(){for(va(R),Zu(!0),J=0;J<R.length;J++)ot=R[J],X=ot.a,et=ot.b,C&&!X.isDifferent(et)&&!ot.entering?R.splice(J--,1):(st=ot.t,v&&!(ot.sd<0)&&J&&(X.matrix=Xn(st,!1,!1,!0)),et.isVisible&&X.isVisible?(ot.sd<0?(H=new cs(st,w,t.simple),Js(H,X,x,0,0,H),H.matrix=Xn(st,!1,!1,!0),H.css=ot.b.css,ot.a=X=H,M&&(st.style.opacity=Z?et.opacity:X.opacity),b&&N.push(st)):ot.sd>0&&M&&(st.style.opacity=Z?X.opacity-et.opacity:"0"),Js(X,et,x,w)):et.isVisible!==X.isVisible&&(et.isVisible?X.isVisible||(et.css=X.css,L.push(et),R.splice(J--,1),c&&v&&Js(X,et,x,w)):(X.isVisible&&A.push(X),R.splice(J--,1))),x||(st.style.maxWidth=Math.max(X.width,et.width)+"px",st.style.maxHeight=Math.max(X.height,et.height)+"px",st.style.minWidth=Math.min(X.width,et.width)+"px",st.style.minHeight=Math.min(X.height,et.height)+"px"),v&&p&&st.classList.add(p)),Rt.push(X);var Ct;if(p&&(Ct=Rt.map(function(_t){return _t.element}),v&&Ct.forEach(function(_t){return _t.classList.remove(p)})),Zu(!1),x?(S.scaleX=function(_t){return R[_t].a.scaleX},S.scaleY=function(_t){return R[_t].a.scaleY}):(S.width=function(_t){return R[_t].a.width+"px"},S.height=function(_t){return R[_t].a.height+"px"},S.autoRound=n.autoRound||!1),S.x=function(_t){return R[_t].a.x+"px"},S.y=function(_t){return R[_t].a.y+"px"},S.rotation=function(_t){return R[_t].a.rotation+(D?k(_t,Dt[_t],Dt)*360:0)},S.skewX=function(_t){return R[_t].a.skewX},Dt=R.map(function(_t){return _t.t}),(y||y===0)&&(S.modifiers={zIndex:function(){return y}},S.zIndex=y,S.immediateRender=n.immediateRender!==!1),M&&(S.opacity=function(_t){return R[_t].sd<0?0:R[_t].sd>0?R[_t].a.opacity:"+=0"}),N.length){b=ze.utils.distribute(b);var At=Dt.slice(N.length);S.stagger=function(_t,F){return b(~N.indexOf(F)?Dt.indexOf(R[_t].swap.t):_t,F,At)}}if(Ig.forEach(function(_t){return n[_t]&&I.eventCallback(_t,n[_t],n[_t+"Params"])}),f&&Dt.length){z=Hs(S,qu),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(G in f)ht=Hs(f[G],Zd),ht[G]=S[G],!("duration"in ht)&&"duration"in S&&(ht.duration=S.duration),ht.stagger=S.stagger,K.call(I,Dt,ht,0),delete z[G]}(Dt.length||L.length||A.length)&&(p&&I.add(function(){return il(Ct,p,I._zTime<0?"remove":"add")},0)&&!d&&il(Ct,p,"add"),Dt.length&&K.call(I,Dt,z,0)),ju(o,A,I),ju(l,L,I);var It=ee&&ee.timeline;It&&(It.add(I,0),ee._final.push(function(){return Xu(R,!r)})),Y=I.duration(),I.call(function(){var _t=I.time()>=Y;_t&&!It&&Xu(R,!r),p&&il(Ct,p,_t?"remove":"add")})},u&&(c=R.filter(function(Et){return!Et.sd&&!Et.a.isVisible&&Et.b.isVisible}).map(function(Et){return Et.a.element})),ee){var yt;c&&(yt=ee._abs).push.apply(yt,Yu(R,c)),ee._run.push(rt)}else c&&Kd(Yu(R,c)),rt();var ft=ee?ee.timeline:I;return ft.revert=function(){return eu(ft,1)},ft},kg=function a(t){t.vars.onInterrupt&&t.vars.onInterrupt.apply(t,t.vars.onInterruptParams||[]),t.getChildren(!0,!1,!0).forEach(a)},eu=function(t,e){if(t&&t.progress()<1&&!t.paused())return e&&(kg(t),e<2&&t.progress(1),t.kill()),!0},yo=function(t){for(var e=t.idLookup={},n=t.alt={},i=t.elementStates,s=i.length,r;s--;)r=i[s],e[r.id]?n[r.id]=r:e[r.id]=r},Rn=function(){function a(e,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=tp(e),this.elementStates=e,yo(this);else{this.targets=ur(e);var s=n&&(n.kill===!1||n.batch&&!n.kill);ee&&!s&&ee._kill.push(this),this.update(s||!!ee)}}var t=a.prototype;return t.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new cs(s,i.props,i.simple)}),yo(this),this.interrupt(n),this.recordInlineStyles(),this},t.clear=function(){return this.targets.length=this.elementStates.length=0,yo(this),this},t.fit=function(n,i,s){for(var r=va(this.elementStates.slice(0),!1,!0),o=(n||this).idLookup,l=0,c,u;l<r.length;l++)c=r[l],s&&(c.matrix=Xn(c.element,!1,!1,!0)),u=o[c.id],u&&Js(c,u,i,!0,0,c),c.matrix=Xn(c.element,!1,!1,!0);return this},t.getProperty=function(n,i){var s=this.getElementState(n)||_a;return(i in s?s:s.props||_a)[i]},t.add=function(n){for(var i=n.targets.length,s=this.idLookup,r=this.alt,o,l,c;i--;)l=n.elementStates[i],c=s[l.id],c&&(l.element===c.element||r[l.id]&&r[l.id].element===l.element)?(o=this.elementStates.indexOf(l.element===c.element?c:r[l.id]),this.targets.splice(o,1,n.targets[i]),this.elementStates.splice(o,1,l)):(this.targets.push(n.targets[i]),this.elementStates.push(l));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),yo(this),this},t.compare=function(n){var i=n.idLookup,s=this.idLookup,r=[],o=[],l=[],c=[],u=[],f=n.alt,h=this.alt,d=function(C,w,S){return(C.isVisible!==w.isVisible?C.isVisible?l:c:C.isVisible?o:r).push(S)&&u.push(S)},g=function(C,w,S){return u.indexOf(S)<0&&d(C,w,S)},_,m,p,v,y,x,M,b;for(p in i)y=f[p],x=h[p],_=y?ep(n,this,p):i[p],v=_.element,m=s[p],x?(b=m.isVisible||!x.isVisible&&v===m.element?m:x,M=y&&!_.isVisible&&!y.isVisible&&b.element===y.element?y:_,M.isVisible&&b.isVisible&&M.element!==b.element?((M.isDifferent(b)?o:r).push(M.element,b.element),u.push(M.element,b.element)):d(M,b,M.element),y&&M.element===y.element&&(y=i[p]),g(M.element!==m.element&&y?y:M,m,m.element),g(y&&y.element===x.element?y:M,x,x.element),y&&g(y,x.element===y.element?x:m,y.element)):(m?m.isDifferent(_)?d(_,m,v):r.push(v):l.push(v),y&&g(y,m,y.element));for(p in s)i[p]||(c.push(s[p].element),h[p]&&c.push(h[p].element));return{changed:o,unchanged:r,enter:l,leave:c}},t.recordInlineStyles=function(){for(var n=Da[this.props]||Ca,i=this.elementStates.length;i--;)Jr(this.elementStates[i],n)},t.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(r){var o=r._flip,l=eu(o,n?0:1);n&&l&&s.indexOf(o)<0&&o.add(function(){return i.updateVisibility()}),l&&s.push(o)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},t.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},t.getElementState=function(n){return this.elementStates[this.targets.indexOf(Gr(n))]},t.makeAbsolute=function(){return va(this.elementStates.slice(0),!0,!0).map(tu)},a}(),cs=function(){function a(e,n,i){this.element=e,this.update(n,i)}var t=a.prototype;return t.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},t.update=function(n,i){var s=this,r=s.element,o=ze.getProperty(r),l=ze.core.getCache(r),c=r.getBoundingClientRect(),u=r.getBBox&&typeof r.getBBox=="function"&&r.nodeName.toLowerCase()!=="svg"&&r.getBBox(),f=i?new ls(1,0,0,1,c.left+Zc(),c.top+jc()):Xn(r,!1,!1,!0);s.getProp=o,s.element=r,s.id=Bg(r),s.matrix=f,s.cache=l,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=o("display"),s.position=o("position"),s.parent=r.parentNode,s.x=o("x"),s.y=o("y"),s.scaleX=l.scaleX,s.scaleY=l.scaleY,s.rotation=o("rotation"),s.skewX=o("skewX"),s.opacity=o("opacity"),s.width=u?u.width:fi(o("width","px"),.04),s.height=u?u.height:fi(o("height","px"),.04),n&&Ug(s,Kc[n]||Jd(n)),s.ctm=r.getCTM&&r.nodeName.toLowerCase()==="svg"&&jd(r).inverse(),s.simple=i||Gs(f.a)===1&&!Gs(f.b)&&!Gs(f.c)&&Gs(f.d)===1,s.uncache=0},a}(),Vg=function(){function a(e,n){this.vars=e,this.batch=n,this.states=[],this.timeline=n.timeline}var t=a.prototype;return t.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},t.kill=function(){this.batch.remove(this)},a}(),Gg=function(){function a(e){this.id=e,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Rn,this.timeline=ze.timeline()}var t=a.prototype;return t.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new Vg(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},t.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},t.getState=function(n){var i=this,s=ee,r=Vr;return ee=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(o){o.vars.getState&&(o.states.length=0,Vr=o,o.state=o.vars.getState(o)),n&&o.states.forEach(function(l){return i.state.add(l)})}),Vr=r,ee=s,this.killConflicts(),this},t.animate=function(){var n=this,i=ee,s=this.timeline,r=this.actions.length,o,l;for(ee=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,f=c.vars.onLeave,h=c.targets,d,g;h&&h.length&&(u||f)&&(d=new Rn,c.states.forEach(function(_){return d.add(_)}),g=d.compare(Ta.getState(h)),g.enter.length&&u&&u(g.enter),g.leave.length&&f&&f(g.leave))}),Kd(this._abs),this._run.forEach(function(c){return c()}),l=s.duration(),o=this._final.slice(0),s.add(function(){l<=s.time()&&(o.forEach(function(c){return c()}),Gu(n,"onComplete"))}),ee=i;r--;)this.actions[r].vars.once&&this.actions[r].kill();return Gu(this,"onStart"),s.restart(),this},t.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var r,o=function l(c){c&&(s.targets=c),r=i.indexOf(l),~r&&(i.splice(r,1),i.length||n())};i.push(o),s.vars.loadState(o)}}),i.length||n(),this},t.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},t.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},t.run=function(n,i){var s=this;return this!==ee&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},t.clear=function(n){this.state.clear(),n||(this.actions.length=0)},t.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},t.kill=function(){this._killed=1,this.clear(),delete pc[this.id]},a}(),Ta=function(){function a(){}return a.getState=function(e,n){var i=rl(e,n);return Vr&&Vr.states.push(i),n&&n.batch&&a.batch(n.batch).state.add(i),i},a.from=function(e,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),ll(e,rl(n.targets||e.targets,{props:n.props||e.props,simple:n.simple,kill:!!n.kill}),n,-1)},a.to=function(e,n){return ll(e,rl(n.targets||e.targets,{props:n.props||e.props,simple:n.simple,kill:!!n.kill}),n,1)},a.fromTo=function(e,n,i){return ll(e,n,i)},a.fit=function(e,n,i){var s=i?Hs(i,Zd):{},r=i||s,o=r.absolute,l=r.scale,c=r.getVars,u=r.props,f=r.runBackwards,h=r.onComplete,d=r.simple,g=i&&i.fitChild&&Gr(i.fitChild),_=mc(n,u,d,e),m=mc(e,0,d,_),p=u?Da[u]:Ca;return u&&Qd(s,_.props),f&&(Jr(m,p),"immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){Qc(m),h&&h.apply(this,arguments)}),o&&tu(m,_),s=Js(m,_,l||g,u,g,s.duration||c?s:0),c?s:s.duration?ze.to(m.element,s):null},a.makeAbsolute=function(e,n){return(e instanceof Rn?e:new Rn(e,n)).makeAbsolute()},a.batch=function(e){return e||(e="default"),pc[e]||(pc[e]=new Gg(e))},a.killFlipsOf=function(e,n){(e instanceof Rn?e.targets:ur(e)).forEach(function(i){return i&&eu(i._flip,n!==!1?1:2)})},a.isFlipping=function(e){var n=a.getByTarget(e);return!!n&&n.isActive()},a.getByTarget=function(e){return(Gr(e)||_a)._flip},a.getElementState=function(e,n){return new cs(Gr(e),n)},a.convertCoordinates=function(e,n,i){var s=Xn(n,!0,!0).multiply(Xn(e));return i?s.apply(i):s},a.register=function(e){if(bi=typeof document<"u"&&document.body,bi){ze=e,Yc(bi),ur=ze.utils.toArray,dc=ze.core.getStyleSaver;var n=ze.utils.snap(.1);fi=function(s,r){return n(parseFloat(s)+r)}}},a}();Ta.version="3.11.5";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(Ta);/*!
 * EaselPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Gn,np,sa,ip,xr,yr,Hg="redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),sp=function(){return typeof window<"u"},rp=function(){return Gn||sp()&&(Gn=window.gsap)&&Gn.registerPlugin&&Gn},op=function(){return ip||sa&&sa.createjs||sa||{}},Aa=function(t){return console.warn(t)},ap=function(t){var e=t.getBounds&&t.getBounds();e||(e=t.nominalBounds||{x:0,y:0,width:100,height:100},t.setBounds&&t.setBounds(e.x,e.y,e.width,e.height)),t.cache&&t.cache(e.x,e.y,e.width,e.height),Aa("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. "+t)},Wg=function(t,e,n){xr||(xr=op().ColorFilter,xr||Aa("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded."));for(var i=t.filters||[],s=i.length,r,o,l,c,u,f;s--;)if(i[s]instanceof xr){o=i[s];break}if(o||(o=new xr,i.push(o),t.filters=i),l=o.clone(),e.tint!=null)r=Gn.utils.splitColor(e.tint),c=e.tintAmount!=null?+e.tintAmount:1,l.redOffset=+r[0]*c,l.greenOffset=+r[1]*c,l.blueOffset=+r[2]*c,l.redMultiplier=l.greenMultiplier=l.blueMultiplier=1-c;else for(u in e)u!=="exposure"&&u!=="brightness"&&(l[u]=+e[u]);for(e.exposure!=null?(l.redOffset=l.greenOffset=l.blueOffset=255*(+e.exposure-1),l.redMultiplier=l.greenMultiplier=l.blueMultiplier=1):e.brightness!=null&&(c=+e.brightness-1,l.redOffset=l.greenOffset=l.blueOffset=c>0?c*255:0,l.redMultiplier=l.greenMultiplier=l.blueMultiplier=1-Math.abs(c)),s=8;s--;)u=Hg[s],o[u]!==l[u]&&(f=n.add(o,u,o[u],l[u],0,0,0,0,0,1),f&&(f.op="easel_colorFilter"));n._props.push("easel_colorFilter"),t.cacheID||ap(t)},$u=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],dn=.212671,pn=.71516,mn=.072169,Pa=function(t,e){if(!(t instanceof Array)||!(e instanceof Array))return e;var n=[],i=0,s=0,r,o;for(r=0;r<4;r++){for(o=0;o<5;o++)s=o===4?t[i+4]:0,n[i+o]=t[i]*e[o]+t[i+1]*e[o+5]+t[i+2]*e[o+10]+t[i+3]*e[o+15]+s;i+=5}return n},qg=function(t,e){if(isNaN(e))return t;var n=1-e,i=n*dn,s=n*pn,r=n*mn;return Pa([i+e,s,r,0,0,i,s+e,r,0,0,i,s,r+e,0,0,0,0,0,1,0],t)},Xg=function(t,e,n){isNaN(n)&&(n=1);var i=Gn.utils.splitColor(e),s=i[0]/255,r=i[1]/255,o=i[2]/255,l=1-n;return Pa([l+n*s*dn,n*s*pn,n*s*mn,0,0,n*r*dn,l+n*r*pn,n*r*mn,0,0,n*o*dn,n*o*pn,l+n*o*mn,0,0,0,0,0,1,0],t)},Yg=function(t,e){if(isNaN(e))return t;e*=Math.PI/180;var n=Math.cos(e),i=Math.sin(e);return Pa([dn+n*(1-dn)+i*-dn,pn+n*-pn+i*-pn,mn+n*-mn+i*(1-mn),0,0,dn+n*-dn+i*.143,pn+n*(1-pn)+i*.14,mn+n*-mn+i*-.283,0,0,dn+n*-dn+i*-(1-dn),pn+n*-pn+i*pn,mn+n*(1-mn)+i*mn,0,0,0,0,0,1,0,0,0,0,0,1],t)},jg=function(t,e){return isNaN(e)?t:(e+=.01,Pa([e,0,0,0,128*(1-e),0,e,0,0,128*(1-e),0,0,e,0,128*(1-e),0,0,0,1,0],t))},Zg=function(t,e,n){yr||(yr=op().ColorMatrixFilter,yr||Aa("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded."));for(var i=t.filters||[],s=i.length,r,o,l,c;--s>-1;)if(i[s]instanceof yr){l=i[s];break}for(l||(l=new yr($u.slice()),i.push(l),t.filters=i),o=l.matrix,r=$u.slice(),e.colorize!=null&&(r=Xg(r,e.colorize,Number(e.colorizeAmount))),e.contrast!=null&&(r=jg(r,Number(e.contrast))),e.hue!=null&&(r=Yg(r,Number(e.hue))),e.saturation!=null&&(r=qg(r,Number(e.saturation))),s=r.length;--s>-1;)r[s]!==o[s]&&(c=n.add(o,s,o[s],r[s],0,0,0,0,0,1),c&&(c.op="easel_colorMatrixFilter"));n._props.push("easel_colorMatrixFilter"),t.cacheID||ap(),n._matrix=o},Ju=function(t){Gn=t||rp(),sp()&&(sa=window),Gn&&(np=1)},nu={version:"3.11.5",name:"easel",init:function(t,e,n,i,s){np||(Ju(),Gn||Aa("Please gsap.registerPlugin(EaselPlugin)")),this.target=t;var r,o,l,c,u,f,h;for(r in e)if(u=e[r],r==="colorFilter"||r==="tint"||r==="tintAmount"||r==="exposure"||r==="brightness")l||(Wg(t,e.colorFilter||e,this),l=!0);else if(r==="saturation"||r==="contrast"||r==="hue"||r==="colorize"||r==="colorizeAmount")c||(Zg(t,e.colorMatrixFilter||e,this),c=!0);else if(r==="frame"){if(typeof u=="string"&&u.charAt(1)!=="="&&(f=t.labels))for(h=0;h<f.length;h++)f[h].label===u&&(u=f[h].position);o=this.add(t,"gotoAndStop",t.currentFrame,u,i,s,Math.round,0,0,1),o&&(o.op=r)}else t[r]!=null&&this.add(t,r,"get",u)},render:function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next;e.target.cacheID&&e.target.updateCache()},register:Ju};nu.registerCreateJS=function(a){ip=a};rp()&&Gn.registerPlugin(nu);/*!
 * strings: 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var $g=/(?:^\s+|\s+$)/g,Jg=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function lp(a){var t=a.nodeType,e="";if(t===1||t===9||t===11){if(typeof a.textContent=="string")return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)e+=lp(a)}else if(t===3||t===4)return a.nodeValue;return e}function gc(a,t,e,n){for(var i=a.firstChild,s=[],r;i;)i.nodeType===3?(r=(i.nodeValue+"").replace(/^\n+/g,""),n||(r=r.replace(/\s+/g," ")),s.push.apply(s,cp(r,t,e,n))):(i.nodeName+"").toLowerCase()==="br"?s[s.length-1]+="<br>":s.push(i.outerHTML),i=i.nextSibling;for(r=s.length;r--;)s[r]==="&"&&s.splice(r,1,"&amp;");return s}function cp(a,t,e,n){if(a+="",e&&(a=a.trim?a.trim():a.replace($g,"")),t&&t!=="")return a.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var i=[],s=a.length,r=0,o,l;r<s;r++)l=a.charAt(r),(l.charCodeAt(0)>=55296&&l.charCodeAt(0)<=56319||a.charCodeAt(r+1)>=65024&&a.charCodeAt(r+1)<=65039)&&(o=((a.substr(r,12).split(Jg)||[])[1]||"").length||2,l=a.substr(r,o),i.emoji=1,r+=o-1),i.push(l===">"?"&gt;":l==="<"?"&lt;":n&&l===" "&&(a.charAt(r-1)===" "||a.charAt(r+1)===" ")?"&nbsp;":l);return i}/*!
 * TextPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Fr,Mo,Kg=function(){return Fr||typeof window<"u"&&(Fr=window.gsap)&&Fr.registerPlugin&&Fr},ao={version:"3.11.5",name:"text",init:function(t,e,n){typeof e!="object"&&(e={value:e});var i=t.nodeName.toUpperCase(),s=this,r=e,o=r.newClass,l=r.oldClass,c=r.preserveSpaces,u=r.rtl,f=s.delimiter=e.delimiter||"",h=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),d,g,_,m,p,v,y,x;if(s.svg=t.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(_=gc(t,f,!1,c),Mo||(Mo=document.createElement("div")),Mo.innerHTML=e.value,g=gc(Mo,f,!1,c),s.from=n._from,(s.from||u)&&!(u&&s.from)&&(i=_,_=g,g=i),s.hasClass=!!(o||l),s.newClass=u?l:o,s.oldClass=u?o:l,i=_.length-g.length,d=i<0?_:g,i<0&&(i=-i);--i>-1;)d.push(h);if(e.type==="diff"){for(m=0,p=[],v=[],y="",i=0;i<g.length;i++)x=g[i],x===_[i]?y+=x:(p[m]=y+x,v[m++]=y+_[i],y="");g=p,_=v,y&&(g.push(y),_.push(y))}e.speed&&n.duration(Math.min(.05/e.speed*d.length,e.maxDuration||9999)),s.rtl=u,s.original=_,s.text=g,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var n=e.text,i=e.hasClass,s=e.newClass,r=e.oldClass,o=e.delimiter,l=e.target,c=e.fillChar,u=e.original,f=e.rtl,h=n.length,d=(f?1-t:t)*h+.5|0,g,_,m;i&&t?(g=s&&d,_=r&&d!==h,m=(g?"<span class='"+s+"'>":"")+n.slice(0,d).join(o)+(g?"</span>":"")+(_?"<span class='"+r+"'>":"")+o+u.slice(d).join(o)+(_?"</span>":"")):m=n.slice(0,d).join(o)+o+u.slice(d).join(o),e.svg?l.textContent=m:l.innerHTML=c==="&nbsp;"&&~m.indexOf("  ")?m.split("  ").join("&nbsp;&nbsp;"):m}};ao.splitInnerHTML=gc;ao.emojiSafeSplit=cp;ao.getText=lp;Kg()&&Fr.registerPlugin(ao);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const iu="151",xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ys={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Qg=0,Ku=1,t0=2,up=1,e0=2,Ir=3,Fi=0,qe=1,ui=2,Pi=0,Ks=1,Qu=2,th=3,eh=4,n0=5,Bs=100,i0=101,s0=102,nh=103,ih=104,r0=200,o0=201,a0=202,l0=203,hp=204,fp=205,c0=206,u0=207,h0=208,f0=209,d0=210,p0=0,m0=1,g0=2,_c=3,_0=4,v0=5,x0=6,y0=7,dp=0,M0=1,w0=2,pi=0,S0=1,b0=2,E0=3,D0=4,C0=5,pp=300,hr=301,fr=302,vc=303,xc=304,La=306,yc=1e3,Tn=1001,Mc=1002,Oe=1003,sh=1004,cl=1005,gn=1006,T0=1007,Kr=1008,us=1009,A0=1010,P0=1011,mp=1012,L0=1013,ts=1014,es=1015,Qr=1016,R0=1017,F0=1018,Qs=1020,I0=1021,An=1023,N0=1024,O0=1025,os=1026,dr=1027,z0=1028,U0=1029,B0=1030,k0=1031,V0=1033,ul=33776,hl=33777,fl=33778,dl=33779,rh=35840,oh=35841,ah=35842,lh=35843,G0=36196,ch=37492,uh=37496,hh=37808,fh=37809,dh=37810,ph=37811,mh=37812,gh=37813,_h=37814,vh=37815,xh=37816,yh=37817,Mh=37818,wh=37819,Sh=37820,bh=37821,pl=36492,H0=36283,Eh=36284,Dh=36285,Ch=36286,hs=3e3,te=3001,W0=3200,q0=3201,gp=0,X0=1,Un="srgb",to="srgb-linear",_p="display-p3",ml=7680,Y0=519,Th=35044,Ah="300 es",wc=1035;class _s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gl=Math.PI/180,Sc=180/Math.PI;function mr(){const a=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[a&255]+Te[a>>8&255]+Te[a>>16&255]+Te[a>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function De(a,t,e){return Math.max(t,Math.min(e,a))}function j0(a,t){return(a%t+t)%t}function _l(a,t,e){return(1-e)*a+e*t}function Ph(a){return(a&a-1)===0&&a!==0}function Z0(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function wo(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function $e(a,t){switch(t.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}class dt{constructor(t=0,e=0){dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],y=i[4],x=i[7],M=i[2],b=i[5],D=i[8];return s[0]=r*_+o*v+l*M,s[3]=r*m+o*y+l*b,s[6]=r*p+o*x+l*D,s[1]=c*_+u*v+f*M,s[4]=c*m+u*y+f*b,s[7]=c*p+u*x+f*D,s[2]=h*_+d*v+g*M,s[5]=h*m+d*y+g*b,s[8]=h*p+d*x+g*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-n*s*u+n*o*l+i*s*c-i*r*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*r-o*c,h=o*l-u*s,d=c*s-r*l,g=e*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(i*c-u*n)*_,t[2]=(o*n-i*r)*_,t[3]=h*_,t[4]=(u*e-i*l)*_,t[5]=(i*s-o*e)*_,t[6]=d*_,t[7]=(n*l-c*e)*_,t[8]=(r*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*r+c*o)+r+t,-i*c,i*l,-i*(-c*r+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(vl.makeScale(t,e)),this}rotate(t){return this.premultiply(vl.makeRotation(-t)),this}translate(t,e){return this.premultiply(vl.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const vl=new Wt;function vp(a){for(let t=a.length-1;t>=0;--t)if(a[t]>=65535)return!0;return!1}function eo(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function tr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function xl(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const $0=new Wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),J0=new Wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function K0(a){return a.convertSRGBToLinear().applyMatrix3(J0)}function Q0(a){return a.applyMatrix3($0).convertLinearToSRGB()}const t_={[to]:a=>a,[Un]:a=>a.convertSRGBToLinear(),[_p]:K0},e_={[to]:a=>a,[Un]:a=>a.convertLinearToSRGB(),[_p]:Q0},Je={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return to},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,t,e){if(this.enabled===!1||t===e||!t||!e)return a;const n=t_[t],i=e_[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(a))},fromWorkingColorSpace:function(a,t){return this.convert(a,this.workingColorSpace,t)},toWorkingColorSpace:function(a,t){return this.convert(a,t,this.workingColorSpace)}};let Ms;class xp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ms===void 0&&(Ms=eo("canvas")),Ms.width=t.width,Ms.height=t.height;const n=Ms.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ms}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=eo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=tr(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(tr(e[n]/255)*255):e[n]=tr(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class yp{constructor(t=null){this.isSource=!0,this.uuid=mr(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(yl(i[r].image)):s.push(yl(i[r]))}else s=yl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function yl(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?xp.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let n_=0;class Xe extends _s{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Tn,i=Tn,s=gn,r=Kr,o=An,l=us,c=Xe.DEFAULT_ANISOTROPY,u=hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=mr(),this.name="",this.source=new yp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pp)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case yc:t.x=t.x-Math.floor(t.x);break;case Tn:t.x=t.x<0?0:1;break;case Mc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case yc:t.y=t.y-Math.floor(t.y);break;case Tn:t.y=t.y<0?0:1;break;case Mc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=pp;Xe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(d+1)/2,M=(p+1)/2,b=(u+h)/4,D=(f+_)/4,C=(g+m)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=D/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=D/s,i=C/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-_)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fs extends _s{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new yp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mp extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class i_ extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let ds=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[r+0],d=s[r+1],g=s[r+2],_=s[r+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let m=1-o;const p=l*h+c*d+u*g+f*_,v=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const M=Math.sqrt(y),b=Math.atan2(M,p*v);m=Math.sin(m*b)/M,o=Math.sin(o*b)/M}const x=o*v;if(l=l*m+h*x,c=c*m+d*x,u=u*m+g*x,f=f*m+_*x,m===1-o){const M=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=M,c*=M,u*=M,f*=M}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[r],h=s[r+1],d=s[r+2],g=s[r+3];return t[e]=o*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-o*d,t[e+2]=c*g+u*d+o*h-l*f,t[e+3]=u*g-o*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(r){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(r-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+r)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+r)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(r-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+r*o+i*c-s*l,this._y=i*u+r*l+s*o-n*c,this._z=s*u+r*c+n*l-i*o,this._w=r*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-e;return this._w=d*r+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=r*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,l=t.w,c=l*e+r*i-o*n,u=l*n+o*e-s*i,f=l*i+s*n-r*e,h=-s*e-r*n-o*i;return this.x=c*l+h*-s+u*-o-f*-r,this.y=u*l+h*-r+f*-s-c*-o,this.z=f*l+h*-o+c*-r-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*r-n*l,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ml.copy(this).projectOnVector(t),this.sub(Ml)}reflect(t){return this.sub(Ml.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(De(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ml=new U,Lh=new ds;class lo{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox),ws.applyMatrix4(t.matrixWorld),this.union(ws);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)Jn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(Jn)}else i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),So.subVectors(this.max,Mr),Ss.subVectors(t.a,Mr),bs.subVectors(t.b,Mr),Es.subVectors(t.c,Mr),xi.subVectors(bs,Ss),yi.subVectors(Es,bs),Gi.subVectors(Ss,Es);let e=[0,-xi.z,xi.y,0,-yi.z,yi.y,0,-Gi.z,Gi.y,xi.z,0,-xi.x,yi.z,0,-yi.x,Gi.z,0,-Gi.x,-xi.y,xi.x,0,-yi.y,yi.x,0,-Gi.y,Gi.x,0];return!wl(e,Ss,bs,Es,So)||(e=[1,0,0,0,1,0,0,0,1],!wl(e,Ss,bs,Es,So))?!1:(bo.crossVectors(xi,yi),e=[bo.x,bo.y,bo.z],wl(e,Ss,bs,Es,So))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($n),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const $n=[new U,new U,new U,new U,new U,new U,new U,new U],Jn=new U,ws=new lo,Ss=new U,bs=new U,Es=new U,xi=new U,yi=new U,Gi=new U,Mr=new U,So=new U,bo=new U,Hi=new U;function wl(a,t,e,n,i){for(let s=0,r=a.length-3;s<=r;s+=3){Hi.fromArray(a,s);const o=i.x*Math.abs(Hi.x)+i.y*Math.abs(Hi.y)+i.z*Math.abs(Hi.z),l=t.dot(Hi),c=e.dot(Hi),u=n.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const s_=new lo,wr=new U,Sl=new U;let su=class{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):s_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wr.subVectors(t,this.center);const e=wr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wr.copy(t.center).add(Sl)),this.expandByPoint(wr.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Kn=new U,bl=new U,Eo=new U,Mi=new U,El=new U,Do=new U,Dl=new U;let r_=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Kn.copy(this.origin).addScaledVector(this.direction,e),Kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){bl.copy(t).add(e).multiplyScalar(.5),Eo.copy(e).sub(t).normalize(),Mi.copy(this.origin).sub(bl);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Eo),o=Mi.dot(this.direction),l=-Mi.dot(Eo),c=Mi.lengthSq(),u=Math.abs(1-r*r);let f,h,d,g;if(u>0)if(f=r*l-o,h=r*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+r*h+2*o)+h*(r*f+h+2*l)+c}else h=s,f=Math.max(0,-(r*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(r*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-r*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(r*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=r>0?-s:s,f=Math.max(0,-(r*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(bl).addScaledVector(Eo,h),d}intersectSphere(t,e){Kn.subVectors(t.center,this.origin);const n=Kn.dot(this.direction),i=Kn.dot(Kn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,l=n+r;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Kn)!==null}intersectTriangle(t,e,n,i,s){El.subVectors(e,t),Do.subVectors(n,t),Dl.crossVectors(El,Do);let r=this.direction.dot(Dl),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;Mi.subVectors(this.origin,t);const l=o*this.direction.dot(Do.crossVectors(Mi,Do));if(l<0)return null;const c=o*this.direction.dot(El.cross(Mi));if(c<0||l+c>r)return null;const u=-o*Mi.dot(Dl);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class fe{constructor(){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,l,c,u,f,h,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=r,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ds.setFromMatrixColumn(t,0).length(),s=1/Ds.setFromMatrixColumn(t,1).length(),r=1/Ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=r*u,d=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-_*c,e[9]=-o*l,e[2]=_-h*c,e[6]=g+d*c,e[10]=r*l}else if(t.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h+_*o,e[4]=g*o-d,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=d*o-g,e[6]=_+h*o,e[10]=r*l}else if(t.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;e[0]=h-_*o,e[4]=-r*f,e[8]=g+d*o,e[1]=d+g*o,e[5]=r*u,e[9]=_-h*o,e[2]=-r*c,e[6]=o,e[10]=r*l}else if(t.order==="ZYX"){const h=r*u,d=r*f,g=o*u,_=o*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+_,e[1]=l*f,e[5]=_*c+h,e[9]=d*c-g,e[2]=-c,e[6]=o*l,e[10]=r*l}else if(t.order==="YZX"){const h=r*l,d=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=_-h*f,e[8]=g*f+d,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-_*f}else if(t.order==="XZY"){const h=r*l,d=r*c,g=o*l,_=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+_,e[5]=r*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=o*u,e[10]=_*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(o_,t,a_)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),wi.crossVectors(n,Ke),wi.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),wi.crossVectors(n,Ke)),wi.normalize(),Co.crossVectors(Ke,wi),i[0]=wi.x,i[4]=Co.x,i[8]=Ke.x,i[1]=wi.y,i[5]=Co.y,i[9]=Ke.y,i[2]=wi.z,i[6]=Co.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],y=n[7],x=n[11],M=n[15],b=i[0],D=i[4],C=i[8],w=i[12],S=i[1],I=i[5],z=i[9],A=i[13],L=i[2],R=i[6],N=i[10],q=i[14],k=i[3],Z=i[7],K=i[11],ht=i[15];return s[0]=r*b+o*S+l*L+c*k,s[4]=r*D+o*I+l*R+c*Z,s[8]=r*C+o*z+l*N+c*K,s[12]=r*w+o*A+l*q+c*ht,s[1]=u*b+f*S+h*L+d*k,s[5]=u*D+f*I+h*R+d*Z,s[9]=u*C+f*z+h*N+d*K,s[13]=u*w+f*A+h*q+d*ht,s[2]=g*b+_*S+m*L+p*k,s[6]=g*D+_*I+m*R+p*Z,s[10]=g*C+_*z+m*N+p*K,s[14]=g*w+_*A+m*q+p*ht,s[3]=v*b+y*S+x*L+M*k,s[7]=v*D+y*I+x*R+M*Z,s[11]=v*C+y*z+x*N+M*K,s[15]=v*w+y*A+x*q+M*ht,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+_*(+e*l*d-e*c*h+s*r*h-i*r*d+i*c*u-s*l*u)+m*(+e*c*f-e*o*d-s*r*f+n*r*d+s*o*u-n*c*u)+p*(-i*o*u-e*l*f+e*o*h+i*r*f-n*r*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=f*m*c-_*h*c+_*l*d-o*m*d-f*l*p+o*h*p,y=g*h*c-u*m*c-g*l*d+r*m*d+u*l*p-r*h*p,x=u*_*c-g*f*c+g*o*d-r*_*d-u*o*p+r*f*p,M=g*f*l-u*_*l-g*o*h+r*_*h+u*o*m-r*f*m,b=e*v+n*y+i*x+s*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/b;return t[0]=v*D,t[1]=(_*h*s-f*m*s-_*i*d+n*m*d+f*i*p-n*h*p)*D,t[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*D,t[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*D,t[4]=y*D,t[5]=(u*m*s-g*h*s+g*i*d-e*m*d-u*i*p+e*h*p)*D,t[6]=(g*l*s-r*m*s-g*i*c+e*m*c+r*i*p-e*l*p)*D,t[7]=(r*h*s-u*l*s+u*i*c-e*h*c-r*i*d+e*l*d)*D,t[8]=x*D,t[9]=(g*f*s-u*_*s-g*n*d+e*_*d+u*n*p-e*f*p)*D,t[10]=(r*_*s-g*o*s+g*n*c-e*_*c-r*n*p+e*o*p)*D,t[11]=(u*o*s-r*f*s-u*n*c+e*f*c+r*n*d-e*o*d)*D,t[12]=M*D,t[13]=(u*_*i-g*f*i+g*n*h-e*_*h-u*n*m+e*f*m)*D,t[14]=(g*o*i-r*_*i-g*n*l+e*_*l+r*n*m-e*o*m)*D,t[15]=(r*f*i-u*o*i+u*n*l-e*f*l-r*n*h+e*o*h)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,l=t.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*r,0,c*l-i*o,u*l+i*r,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,l=e._w,c=s+s,u=r+r,f=o+o,h=s*c,d=s*u,g=s*f,_=r*u,m=r*f,p=o*f,v=l*c,y=l*u,x=l*f,M=n.x,b=n.y,D=n.z;return i[0]=(1-(_+p))*M,i[1]=(d+x)*M,i[2]=(g-y)*M,i[3]=0,i[4]=(d-x)*b,i[5]=(1-(h+p))*b,i[6]=(m+v)*b,i[7]=0,i[8]=(g+y)*D,i[9]=(m-v)*D,i[10]=(1-(h+_))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ds.set(i[0],i[1],i[2]).length();const r=Ds.set(i[4],i[5],i[6]).length(),o=Ds.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Sn.copy(this);const c=1/s,u=1/r,f=1/o;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,l=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(r+s)/(r-s),d=-2*r*s/(r-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,l=1/(e-t),c=1/(n-i),u=1/(r-s),f=(e+t)*l,h=(n+i)*c,d=(r+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ds=new U,Sn=new fe,o_=new U(0,0,0),a_=new U(1,1,1),wi=new U,Co=new U,Ke=new U,Rh=new fe,Fh=new ds;class Ra{constructor(t=0,e=0,n=0,i=Ra.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(De(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-De(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-De(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fh.setFromEuler(this),this.setFromQuaternion(Fh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ra.DEFAULT_ORDER="XYZ";class wp{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let l_=0;const Ih=new U,Cs=new ds,Qn=new fe,To=new U,Sr=new U,c_=new U,u_=new ds,Nh=new U(1,0,0),Oh=new U(0,1,0),zh=new U(0,0,1),h_={type:"added"},Uh={type:"removed"};class Ye extends _s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:l_++}),this.uuid=mr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new U,e=new Ra,n=new ds,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new fe},normalMatrix:{value:new Wt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new wp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.multiply(Cs),this}rotateOnWorldAxis(t,e){return Cs.setFromAxisAngle(t,e),this.quaternion.premultiply(Cs),this}rotateX(t){return this.rotateOnAxis(Nh,t)}rotateY(t){return this.rotateOnAxis(Oh,t)}rotateZ(t){return this.rotateOnAxis(zh,t)}translateOnAxis(t,e){return Ih.copy(t).applyQuaternion(this.quaternion),this.position.add(Ih.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Nh,t)}translateY(t){return this.translateOnAxis(Oh,t)}translateZ(t){return this.translateOnAxis(zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?To.copy(t):To.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Sr,To,this.up):Qn.lookAt(To,Sr,this.up),this.quaternion.setFromRotationMatrix(Qn),i&&(Qn.extractRotation(i.matrixWorld),Cs.setFromRotationMatrix(Qn),this.quaternion.premultiply(Cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(h_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Uh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,c_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,u_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=r(t.geometries),l=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),d=r(t.animations),g=r(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function r(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new U(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new U,ti=new U,Cl=new U,ei=new U,Ts=new U,As=new U,Bh=new U,Tl=new U,Al=new U,Pl=new U;let Ao=!1;class Cn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),bn.subVectors(t,e),i.cross(bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){bn.subVectors(i,e),ti.subVectors(n,e),Cl.subVectors(t,e);const r=bn.dot(bn),o=bn.dot(ti),l=bn.dot(Cl),c=ti.dot(ti),u=ti.dot(Cl),f=r*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(r*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ei),ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(t,e,n,i,s,r,o,l){return Ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ao=!0),this.getInterpolation(t,e,n,i,s,r,o,l)}static getInterpolation(t,e,n,i,s,r,o,l){return this.getBarycoord(t,e,n,i,ei),l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(r,ei.y),l.addScaledVector(o,ei.z),l}static isFrontFacing(t,e,n,i){return bn.subVectors(n,e),ti.subVectors(t,e),bn.cross(ti).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),bn.cross(ti).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Cn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Cn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Ao===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ao=!0),Cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return Cn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Cn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Cn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Ts.subVectors(i,n),As.subVectors(s,n),Tl.subVectors(t,n);const l=Ts.dot(Tl),c=As.dot(Tl);if(l<=0&&c<=0)return e.copy(n);Al.subVectors(t,i);const u=Ts.dot(Al),f=As.dot(Al);if(u>=0&&f<=u)return e.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return r=l/(l-u),e.copy(n).addScaledVector(Ts,r);Pl.subVectors(t,s);const d=Ts.dot(Pl),g=As.dot(Pl);if(g>=0&&d<=g)return e.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(As,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Bh.subVectors(s,i),o=(f-u)/(f-u+(d-g)),e.copy(i).addScaledVector(Bh,o);const p=1/(m+_+h);return r=_*p,o=h*p,e.copy(n).addScaledVector(Ts,r).addScaledVector(As,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let f_=0,co=class extends _s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f_++}),this.uuid=mr(),this.name="",this.type="Material",this.blending=Ks,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=hp,this.blendDst=fp,this.blendEquation=Bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_c,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ml,this.stencilZFail=ml,this.stencilZPass=ml,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(n.blending=this.blending),this.side!==Fi&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const l=s[o];delete l.metadata,r.push(l)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const Sp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},En={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Ll(a,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?a+(t-a)*6*e:e<1/2?t:e<2/3?a+(t-a)*6*(2/3-e):a}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Je.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Je.workingColorSpace){return this.r=t,this.g=e,this.b=n,Je.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Je.workingColorSpace){if(t=j0(t,1),e=De(e,0,1),n=De(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=Ll(r,s,t+1/3),this.g=Ll(r,s,t),this.b=Ll(r,s,t-1/3)}return Je.toWorkingColorSpace(this,i),this}setStyle(t,e=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Je.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Je.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(l,c,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const n=Sp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=tr(t.r),this.g=tr(t.g),this.b=tr(t.b),this}copyLinearToSRGB(t){return this.r=xl(t.r),this.g=xl(t.g),this.b=xl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return Je.fromWorkingColorSpace(Ae.copy(this),t),De(Ae.r*255,0,255)<<16^De(Ae.g*255,0,255)<<8^De(Ae.b*255,0,255)<<0}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Je.workingColorSpace){Je.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,i=Ae.g,s=Ae.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+r)/2;if(o===r)l=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Un){Je.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,i=Ae.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(En),En.h+=t,En.s+=e,En.l+=n,this.setHSL(En.h,En.s,En.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(En),t.getHSL(Po);const n=_l(En.h,Po.h,e),i=_l(En.s,Po.s,e),s=_l(En.l,Po.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Zt;Zt.NAMES=Sp;class di extends co{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=dp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const pe=new U,Lo=new dt;class Wn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Th,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=wo(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=wo(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=wo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=wo(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Th&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class bp extends Wn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ep extends Wn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ue extends Wn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let d_=0;const un=new fe,Rl=new Ye,Ps=new U,Qe=new lo,br=new lo,Se=new U;class Yn extends _s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=mr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vp(t)?Ep:bp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Wt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ue(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Qe.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new su);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];br.setFromBufferAttribute(o),this.morphTargetsRelative?(Se.addVectors(Qe.min,br.min),Qe.expandByPoint(Se),Se.addVectors(Qe.max,br.max),Qe.expandByPoint(Se)):(Qe.expandByPoint(br.min),Qe.expandByPoint(br.max))}Qe.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Se.fromBufferAttribute(o,c),l&&(Ps.fromBufferAttribute(t,c),Se.add(Ps)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Wn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let S=0;S<o;S++)c[S]=new U,u[S]=new U;const f=new U,h=new U,d=new U,g=new dt,_=new dt,m=new dt,p=new U,v=new U;function y(S,I,z){f.fromArray(i,S*3),h.fromArray(i,I*3),d.fromArray(i,z*3),g.fromArray(r,S*2),_.fromArray(r,I*2),m.fromArray(r,z*2),h.sub(f),d.sub(f),_.sub(g),m.sub(g);const A=1/(_.x*m.y-m.x*_.y);isFinite(A)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(A),v.copy(d).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(A),c[S].add(p),c[I].add(p),c[z].add(p),u[S].add(v),u[I].add(v),u[z].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let S=0,I=x.length;S<I;++S){const z=x[S],A=z.start,L=z.count;for(let R=A,N=A+L;R<N;R+=3)y(n[R+0],n[R+1],n[R+2])}const M=new U,b=new U,D=new U,C=new U;function w(S){D.fromArray(s,S*3),C.copy(D);const I=c[S];M.copy(I),M.sub(D.multiplyScalar(D.dot(I))).normalize(),b.crossVectors(C,I);const A=b.dot(u[S])<0?-1:1;l[S*4]=M.x,l[S*4+1]=M.y,l[S*4+2]=M.z,l[S*4+3]=A}for(let S=0,I=x.length;S<I;++S){const z=x[S],A=z.start,L=z.count;for(let R=A,N=A+L;R<N;R+=3)w(n[R+0]),w(n[R+1]),w(n[R+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Wn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new U,s=new U,r=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),u.subVectors(r,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new Wn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Yn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kh=new fe,In=new r_,Ro=new su,Vh=new U,Ls=new U,Rs=new U,Fs=new U,Fl=new U,Fo=new U,Io=new dt,No=new dt,Oo=new dt,Gh=new U,Hh=new U,Wh=new U,zo=new U,Uo=new U;class ae extends Ye{constructor(t=new Yn,e=new di){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Fl.fromBufferAttribute(f,t),r?Fo.addScaledVector(Fl,u):Fo.addScaledVector(Fl.sub(e),u))}e.add(Fo)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(s),In.copy(t.ray).recast(t.near),Ro.containsPoint(In.origin)===!1&&(In.intersectSphere(Ro,Vh)===null||In.origin.distanceToSquared(Vh)>(t.far-t.near)**2))||(kh.copy(s).invert(),In.copy(t.ray).applyMatrix4(kh),n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,l=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,h=n.groups,d=n.drawRange;if(o!==null)if(Array.isArray(i))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=i[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,M=y;x<M;x+=3){const b=o.getX(x),D=o.getX(x+1),C=o.getX(x+2);r=Bo(this,p,t,In,c,u,f,b,D,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=Bo(this,i,t,In,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=i[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let x=v,M=y;x<M;x+=3){const b=x,D=x+1,C=x+2;r=Bo(this,p,t,In,c,u,f,b,D,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,x=m+2;r=Bo(this,i,t,In,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function p_(a,t,e,n,i,s,r,o){let l;if(t.side===qe?l=n.intersectTriangle(r,s,i,!0,o):l=n.intersectTriangle(i,s,r,t.side===Fi,o),l===null)return null;Uo.copy(o),Uo.applyMatrix4(a.matrixWorld);const c=e.ray.origin.distanceTo(Uo);return c<e.near||c>e.far?null:{distance:c,point:Uo.clone(),object:a}}function Bo(a,t,e,n,i,s,r,o,l,c){a.getVertexPosition(o,Ls),a.getVertexPosition(l,Rs),a.getVertexPosition(c,Fs);const u=p_(a,t,e,n,Ls,Rs,Fs,zo);if(u){i&&(Io.fromBufferAttribute(i,o),No.fromBufferAttribute(i,l),Oo.fromBufferAttribute(i,c),u.uv=Cn.getInterpolation(zo,Ls,Rs,Fs,Io,No,Oo,new dt)),s&&(Io.fromBufferAttribute(s,o),No.fromBufferAttribute(s,l),Oo.fromBufferAttribute(s,c),u.uv2=Cn.getInterpolation(zo,Ls,Rs,Fs,Io,No,Oo,new dt)),r&&(Gh.fromBufferAttribute(r,o),Hh.fromBufferAttribute(r,l),Wh.fromBufferAttribute(r,c),u.normal=Cn.getInterpolation(zo,Ls,Rs,Fs,Gh,Hh,Wh,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new U,materialIndex:0};Cn.getNormal(Ls,Rs,Fs,f.normal),u.face=f}return u}class jn extends Yn{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,r,s,0),g("z","y","x",1,-1,n,e,-t,r,s,1),g("x","z","y",1,1,t,n,e,i,r,2),g("x","z","y",1,-1,t,n,-e,i,r,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ue(c,3)),this.setAttribute("normal",new Ue(u,3)),this.setAttribute("uv",new Ue(f,2));function g(_,m,p,v,y,x,M,b,D,C,w){const S=x/D,I=M/C,z=x/2,A=M/2,L=b/2,R=D+1,N=C+1;let q=0,k=0;const Z=new U;for(let K=0;K<N;K++){const ht=K*I-A;for(let G=0;G<R;G++){const Y=G*S-z;Z[_]=Y*v,Z[m]=ht*y,Z[p]=L,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=b>0?1:-1,u.push(Z.x,Z.y,Z.z),f.push(G/D),f.push(1-K/C),q+=1}}for(let K=0;K<C;K++)for(let ht=0;ht<D;ht++){const G=h+ht+R*K,Y=h+ht+R*(K+1),J=h+(ht+1)+R*(K+1),st=h+(ht+1)+R*K;l.push(G,Y,st),l.push(Y,J,st),k+=6}o.addGroup(d,k,w),d+=k,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function pr(a){const t={};for(const e in a){t[e]={};for(const n in a[e]){const i=a[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ne(a){const t={};for(let e=0;e<a.length;e++){const n=pr(a[e]);for(const i in n)t[i]=n[i]}return t}function m_(a){const t=[];for(let e=0;e<a.length;e++)t.push(a[e].clone());return t}function Dp(a){return a.getRenderTarget()===null&&a.outputEncoding===te?Un:to}const g_={clone:pr,merge:Ne};var __=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ps extends co{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=pr(t.uniforms),this.uniformsGroups=m_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Cp extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class en extends Cp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(gl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(gl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(gl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/l,e-=r.offsetY*n/c,i*=r.width/l,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Ns=1;class x_ extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new en(Is,Ns,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new en(Is,Ns,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new en(Is,Ns,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new en(Is,Ns,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new en(Is,Ns,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new en(Is,Ns,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,l,c]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=pi,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Tp extends Xe{constructor(t,e,n,i,s,r,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,n,i,s,r,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class y_ extends fs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Tp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:gn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jn(5,5,5),s=new ps({name:"CubemapFromEquirect",uniforms:pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:Pi});s.uniforms.tEquirect.value=e;const r=new ae(i,s),o=e.minFilter;return e.minFilter===Kr&&(e.minFilter=gn),new x_(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const Il=new U,M_=new U,w_=new Wt;class Zi{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Il.subVectors(n,e).cross(M_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||w_.getNormalMatrix(t),i=this.coplanarPoint(Il).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wi=new su,ko=new U;class ru{constructor(t=new Zi,e=new Zi,n=new Zi,i=new Zi,s=new Zi,r=new Zi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],_=n[11],m=n[12],p=n[13],v=n[14],y=n[15];return e[0].setComponents(o-i,f-l,_-h,y-m).normalize(),e[1].setComponents(o+i,f+l,_+h,y+m).normalize(),e[2].setComponents(o+s,f+c,_+d,y+p).normalize(),e[3].setComponents(o-s,f-c,_-d,y-p).normalize(),e[4].setComponents(o-r,f-u,_-g,y-v).normalize(),e[5].setComponents(o+r,f+u,_+g,y+v).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(t){return Wi.center.set(0,0,0),Wi.radius=.7071067811865476,Wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ko.x=i.normal.x>0?t.max.x:t.min.x,ko.y=i.normal.y>0?t.max.y:t.min.y,ko.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ap(){let a=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=a.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=a.requestAnimationFrame(i),t=!0)},stop:function(){a.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){a=s}}}function S_(a,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,d=a.createBuffer();a.bindBuffer(u,d),a.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;a.bindBuffer(f,c),d.count===-1?a.bufferSubData(f,0,h):(e?a.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):a.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(a.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:r,remove:o,update:l}}class ou extends Yn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,h=e/l,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const v=p*h-r;for(let y=0;y<c;y++){const x=y*f-s;g.push(x,-v,0),_.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<o;v++){const y=v+c*p,x=v+c*(p+1),M=v+1+c*(p+1),b=v+1+c*p;d.push(y,x,b),d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ou(t.width,t.height,t.widthSegments,t.heightSegments)}}var b_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,E_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,C_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_="vec3 transformed = vec3( position );",L_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,F_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,I_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,W_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,dv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Sv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Dv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Nv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$v=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ix=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ox=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ux=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,dx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,px=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,mx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_x=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Ex=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Dx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Cx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ax=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Px=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Rx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fx=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ox=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ux=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Wx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$x=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Jx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Bt={alphamap_fragment:b_,alphamap_pars_fragment:E_,alphatest_fragment:D_,alphatest_pars_fragment:C_,aomap_fragment:T_,aomap_pars_fragment:A_,begin_vertex:P_,beginnormal_vertex:L_,bsdfs:R_,iridescence_fragment:F_,bumpmap_pars_fragment:I_,clipping_planes_fragment:N_,clipping_planes_pars_fragment:O_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:U_,color_fragment:B_,color_pars_fragment:k_,color_pars_vertex:V_,color_vertex:G_,common:H_,cube_uv_reflection_fragment:W_,defaultnormal_vertex:q_,displacementmap_pars_vertex:X_,displacementmap_vertex:Y_,emissivemap_fragment:j_,emissivemap_pars_fragment:Z_,encodings_fragment:$_,encodings_pars_fragment:J_,envmap_fragment:K_,envmap_common_pars_fragment:Q_,envmap_pars_fragment:tv,envmap_pars_vertex:ev,envmap_physical_pars_fragment:dv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:sv,fog_fragment:rv,fog_pars_fragment:ov,gradientmap_pars_fragment:av,lightmap_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:hv,lights_pars_begin:fv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:_v,lights_physical_fragment:vv,lights_physical_pars_fragment:xv,lights_fragment_begin:yv,lights_fragment_maps:Mv,lights_fragment_end:wv,logdepthbuf_fragment:Sv,logdepthbuf_pars_fragment:bv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:Dv,map_fragment:Cv,map_pars_fragment:Tv,map_particle_fragment:Av,map_particle_pars_fragment:Pv,metalnessmap_fragment:Lv,metalnessmap_pars_fragment:Rv,morphcolor_vertex:Fv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Nv,morphtarget_vertex:Ov,normal_fragment_begin:zv,normal_fragment_maps:Uv,normal_pars_fragment:Bv,normal_pars_vertex:kv,normal_vertex:Vv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Xv,output_fragment:Yv,packing:jv,premultiplied_alpha_fragment:Zv,project_vertex:$v,dithering_fragment:Jv,dithering_pars_fragment:Kv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:tx,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:nx,shadowmap_vertex:ix,shadowmask_pars_fragment:sx,skinbase_vertex:rx,skinning_pars_vertex:ox,skinning_vertex:ax,skinnormal_vertex:lx,specularmap_fragment:cx,specularmap_pars_fragment:ux,tonemapping_fragment:hx,tonemapping_pars_fragment:fx,transmission_fragment:dx,transmission_pars_fragment:px,uv_pars_fragment:mx,uv_pars_vertex:gx,uv_vertex:_x,worldpos_vertex:vx,background_vert:xx,background_frag:yx,backgroundCube_vert:Mx,backgroundCube_frag:wx,cube_vert:Sx,cube_frag:bx,depth_vert:Ex,depth_frag:Dx,distanceRGBA_vert:Cx,distanceRGBA_frag:Tx,equirect_vert:Ax,equirect_frag:Px,linedashed_vert:Lx,linedashed_frag:Rx,meshbasic_vert:Fx,meshbasic_frag:Ix,meshlambert_vert:Nx,meshlambert_frag:Ox,meshmatcap_vert:zx,meshmatcap_frag:Ux,meshnormal_vert:Bx,meshnormal_frag:kx,meshphong_vert:Vx,meshphong_frag:Gx,meshphysical_vert:Hx,meshphysical_frag:Wx,meshtoon_vert:qx,meshtoon_frag:Xx,points_vert:Yx,points_frag:jx,shadow_vert:Zx,shadow_frag:$x,sprite_vert:Jx,sprite_frag:Kx},mt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}}},Bn={basic:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Ne([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Ne([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Ne([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Ne([mt.points,mt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Ne([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Ne([mt.common,mt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Ne([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Ne([mt.sprite,mt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Ne([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Ne([mt.lights,mt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};Bn.physical={uniforms:Ne([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Vo={r:0,b:0,g:0};function Qx(a,t,e,n,i,s,r){const o=new Zt(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,p){let v=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=(p.backgroundBlurriness>0?e:t).get(y));const x=a.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?_(o,l):y&&y.isColor&&(_(y,1),v=!0),(a.autoClear||v)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),y&&(y.isCubeTexture||y.mapping===La)?(u===void 0&&(u=new ae(new jn(1,1,1),new ps({name:"BackgroundCubeMaterial",uniforms:pr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,D,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=y.encoding!==te,(f!==y||h!==y.version||d!==a.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,d=a.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ae(new ou(2,2),new ps({name:"BackgroundMaterial",uniforms:pr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=y.encoding!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||d!==a.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,d=a.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,p){m.getRGB(Vo,Dp(a)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,p,r)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),l=p,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function ty(a,t,e,n){const i=a.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(L,R,N,q,k){let Z=!1;if(r){const K=_(q,N,R);c!==K&&(c=K,d(c.object)),Z=p(L,q,N,k),Z&&v(L,q,N,k)}else{const K=R.wireframe===!0;(c.geometry!==q.id||c.program!==N.id||c.wireframe!==K)&&(c.geometry=q.id,c.program=N.id,c.wireframe=K,Z=!0)}k!==null&&e.update(k,34963),(Z||u)&&(u=!1,C(L,R,N,q),k!==null&&a.bindBuffer(34963,e.get(k).buffer))}function h(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function d(L){return n.isWebGL2?a.bindVertexArray(L):s.bindVertexArrayOES(L)}function g(L){return n.isWebGL2?a.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,R,N){const q=N.wireframe===!0;let k=o[L.id];k===void 0&&(k={},o[L.id]=k);let Z=k[R.id];Z===void 0&&(Z={},k[R.id]=Z);let K=Z[q];return K===void 0&&(K=m(h()),Z[q]=K),K}function m(L){const R=[],N=[],q=[];for(let k=0;k<i;k++)R[k]=0,N[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:N,attributeDivisors:q,object:L,attributes:{},index:null}}function p(L,R,N,q){const k=c.attributes,Z=R.attributes;let K=0;const ht=N.getAttributes();for(const G in ht)if(ht[G].location>=0){const J=k[G];let st=Z[G];if(st===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(st=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(st=L.instanceColor)),J===void 0||J.attribute!==st||st&&J.data!==st.data)return!0;K++}return c.attributesNum!==K||c.index!==q}function v(L,R,N,q){const k={},Z=R.attributes;let K=0;const ht=N.getAttributes();for(const G in ht)if(ht[G].location>=0){let J=Z[G];J===void 0&&(G==="instanceMatrix"&&L.instanceMatrix&&(J=L.instanceMatrix),G==="instanceColor"&&L.instanceColor&&(J=L.instanceColor));const st={};st.attribute=J,J&&J.data&&(st.data=J.data),k[G]=st,K++}c.attributes=k,c.attributesNum=K,c.index=q}function y(){const L=c.newAttributes;for(let R=0,N=L.length;R<N;R++)L[R]=0}function x(L){M(L,0)}function M(L,R){const N=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;N[L]=1,q[L]===0&&(a.enableVertexAttribArray(L),q[L]=1),k[L]!==R&&((n.isWebGL2?a:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,R),k[L]=R)}function b(){const L=c.newAttributes,R=c.enabledAttributes;for(let N=0,q=R.length;N<q;N++)R[N]!==L[N]&&(a.disableVertexAttribArray(N),R[N]=0)}function D(L,R,N,q,k,Z){n.isWebGL2===!0&&(N===5124||N===5125)?a.vertexAttribIPointer(L,R,N,k,Z):a.vertexAttribPointer(L,R,N,q,k,Z)}function C(L,R,N,q){if(n.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=q.attributes,Z=N.getAttributes(),K=R.defaultAttributeValues;for(const ht in Z){const G=Z[ht];if(G.location>=0){let Y=k[ht];if(Y===void 0&&(ht==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),ht==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const J=Y.normalized,st=Y.itemSize,ot=e.get(Y);if(ot===void 0)continue;const H=ot.buffer,Dt=ot.type,Rt=ot.bytesPerElement;if(Y.isInterleavedBufferAttribute){const at=Y.data,xt=at.stride,rt=Y.offset;if(at.isInstancedInterleavedBuffer){for(let X=0;X<G.locationSize;X++)M(G.location+X,at.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let X=0;X<G.locationSize;X++)x(G.location+X);a.bindBuffer(34962,H);for(let X=0;X<G.locationSize;X++)D(G.location+X,st/G.locationSize,Dt,J,xt*Rt,(rt+st/G.locationSize*X)*Rt)}else{if(Y.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)M(G.location+at,Y.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let at=0;at<G.locationSize;at++)x(G.location+at);a.bindBuffer(34962,H);for(let at=0;at<G.locationSize;at++)D(G.location+at,st/G.locationSize,Dt,J,st*Rt,st/G.locationSize*at*Rt)}}else if(K!==void 0){const J=K[ht];if(J!==void 0)switch(J.length){case 2:a.vertexAttrib2fv(G.location,J);break;case 3:a.vertexAttrib3fv(G.location,J);break;case 4:a.vertexAttrib4fv(G.location,J);break;default:a.vertexAttrib1fv(G.location,J)}}}}b()}function w(){z();for(const L in o){const R=o[L];for(const N in R){const q=R[N];for(const k in q)g(q[k].object),delete q[k];delete R[N]}delete o[L]}}function S(L){if(o[L.id]===void 0)return;const R=o[L.id];for(const N in R){const q=R[N];for(const k in q)g(q[k].object),delete q[k];delete R[N]}delete o[L.id]}function I(L){for(const R in o){const N=o[R];if(N[L.id]===void 0)continue;const q=N[L.id];for(const k in q)g(q[k].object),delete q[k];delete N[L.id]}}function z(){A(),u=!0,c!==l&&(c=l,d(c.object))}function A(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:S,releaseStatesOfProgram:I,initAttributes:y,enableAttribute:x,disableUnusedAttributes:b}}function ey(a,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){a.drawArrays(s,c,u),e.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(i)h=a,d="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),e.update(u,s,f)}this.setMode=r,this.render=o,this.renderInstances=l}function ny(a,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=a.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=a.getParameter(34930),h=a.getParameter(35660),d=a.getParameter(3379),g=a.getParameter(34076),_=a.getParameter(34921),m=a.getParameter(36347),p=a.getParameter(36348),v=a.getParameter(36349),y=h>0,x=r||t.has("OES_texture_float"),M=y&&x,b=r?a.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:b}}function iy(a){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Zi,o=new Wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=a.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let x=p.clippingState||null;l.value=x,x=u(g,h,y,d);for(let M=0;M!==y;++M)x[M]=e[M];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=d+_*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=d;y!==_;++y,x+=4)r.copy(f[y]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function sy(a){let t=new WeakMap;function e(r,o){return o===vc?r.mapping=hr:o===xc&&(r.mapping=fr),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===vc||o===xc)if(t.has(r)){const l=t.get(r).texture;return e(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new y_(l.height/2);return c.fromEquirectangularTexture(a,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ry extends Cp{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ws=4,qh=[.125,.215,.35,.446,.526,.582],Ji=20,Nl=new ry,Xh=new Zt;let Ol=null;const $i=(1+Math.sqrt(5))/2,Os=1/$i,Yh=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,$i,Os),new U(0,$i,-Os),new U(Os,0,$i),new U(-Os,0,$i),new U($i,Os,0),new U(-$i,Os,0)];class jh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ol=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ol),t.scissorTest=!1,Go(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ol=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Qr,format:An,encoding:hs,depthBuffer:!1},i=Zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=oy(s)),this._blurMaterial=ay(s,t,e)}return i}_compileMaterial(t){const e=new ae(this._lodPlanes[0],t);this._renderer.compile(e,Nl)}_sceneToCubeUV(t,e,n,i){const o=new en(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Xh),u.toneMapping=pi,u.autoClear=!1;const d=new di({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),g=new ae(new jn,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Xh),_=!0);for(let p=0;p<6;p++){const v=p%3;v===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):v===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const y=this._cubeSize;Go(i,v*y,p>2?y:0,y,y),u.setRenderTarget(i),_&&u.render(g,o),u.render(t,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===hr||t.mapping===fr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$h());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Go(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(r,Nl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Yh[(i-1)%Yh.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ae(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ji-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let v=0;for(let D=0;D<Ji;++D){const C=D/_,w=Math.exp(-C*C/2);p.push(w),D===0?v+=w:D<m&&(v+=2*w)}for(let D=0;D<p.length;D++)p[D]=p[D]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-Ws?i-y+Ws:0),b=4*(this._cubeSize-x);Go(e,M,b,3*x,2*x),l.setRenderTarget(e),l.render(f,Nl)}}function oy(a){const t=[],e=[],n=[];let i=a;const s=a-Ws+1+qh.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let l=1/o;r>a-Ws?l=qh[r-a+Ws-1]:r===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),y=new Float32Array(m*g*d),x=new Float32Array(p*g*d);for(let b=0;b<d;b++){const D=b%3*2/3-1,C=b>2?0:-1,w=[D,C,0,D+2/3,C,0,D+2/3,C+1,0,D,C,0,D+2/3,C+1,0,D,C+1,0];v.set(w,_*g*b),y.set(h,m*g*b);const S=[b,b,b,b,b,b];x.set(S,p*g*b)}const M=new Yn;M.setAttribute("position",new Wn(v,_)),M.setAttribute("uv",new Wn(y,m)),M.setAttribute("faceIndex",new Wn(x,p)),t.push(M),i>Ws&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Zh(a,t,e){const n=new fs(a,t,e);return n.texture.mapping=La,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Go(a,t,e,n,i){a.viewport.set(t,e,n,i),a.scissor.set(t,e,n,i)}function ay(a,t,e){const n=new Float32Array(Ji),i=new U(0,1,0);return new ps({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function $h(){return new ps({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function Jh(){return new ps({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pi,depthTest:!1,depthWrite:!1})}function au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ly(a){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===vc||l===xc,u=l===hr||l===fr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new jh(a)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new jh(a));const h=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function cy(a){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function uy(a,t,e,n){const i={},s=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",r),delete i[h.id];const d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)t.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const v=d.array;_=d.version;for(let y=0,x=v.length;y<x;y+=3){const M=v[y+0],b=v[y+1],D=v[y+2];h.push(M,b,b,D,D,M)}}else{const v=g.array;_=g.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const M=y+0,b=y+1,D=y+2;h.push(M,b,b,D,D,M)}}const m=new(vp(h)?Ep:bp)(h,1);m.version=_;const p=s.get(f);p&&t.remove(p),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hy(a,t,e,n){const i=n.isWebGL2;let s;function r(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){a.drawElements(s,d,o,h*l),e.update(d,s,1)}function f(h,d,g){if(g===0)return;let _,m;if(i)_=a,m="drawElementsInstanced";else if(_=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",_===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[m](s,d,o,h*l,g),e.update(d,s,g)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=f}function fy(a){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function dy(a,t){return a[0]-t[0]}function py(a,t){return Math.abs(t[1])-Math.abs(a[1])}function my(a,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new ne,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==_){let R=function(){A.dispose(),s.delete(u),u.removeEventListener("dispose",R)};var d=R;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,b=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],C=u.morphAttributes.color||[];let w=0;y===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let S=u.attributes.position.count*w,I=1;S>t.maxTextureSize&&(I=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const z=new Float32Array(S*I*4*_),A=new Mp(z,S,I,_);A.type=es,A.needsUpdate=!0;const L=w*4;for(let N=0;N<_;N++){const q=b[N],k=D[N],Z=C[N],K=S*I*4*N;for(let ht=0;ht<q.count;ht++){const G=ht*L;y===!0&&(r.fromBufferAttribute(q,ht),z[K+G+0]=r.x,z[K+G+1]=r.y,z[K+G+2]=r.z,z[K+G+3]=0),x===!0&&(r.fromBufferAttribute(k,ht),z[K+G+4]=r.x,z[K+G+5]=r.y,z[K+G+6]=r.z,z[K+G+7]=0),M===!0&&(r.fromBufferAttribute(Z,ht),z[K+G+8]=r.x,z[K+G+9]=r.y,z[K+G+10]=r.z,z[K+G+11]=Z.itemSize===4?r.w:1)}}m={count:_,texture:A,size:new dt(S,I)},s.set(u,m),u.addEventListener("dispose",R)}let p=0;for(let y=0;y<h.length;y++)p+=h[y];const v=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(a,"morphTargetBaseInfluence",v),f.getUniforms().setValue(a,"morphTargetInfluences",h),f.getUniforms().setValue(a,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(a,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let _=n[u.id];if(_===void 0||_.length!==g){_=[];for(let x=0;x<g;x++)_[x]=[x,0];n[u.id]=_}for(let x=0;x<g;x++){const M=_[x];M[0]=x,M[1]=h[x]}_.sort(py);for(let x=0;x<8;x++)x<g&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(dy);const m=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=o[x],b=M[0],D=M[1];b!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+x)!==m[b]&&u.setAttribute("morphTarget"+x,m[b]),p&&u.getAttribute("morphNormal"+x)!==p[b]&&u.setAttribute("morphNormal"+x,p[b]),i[x]=D,v+=D):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(a,"morphTargetBaseInfluence",y),f.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:l}}function gy(a,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);return i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),f}function r(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const Pp=new Xe,Lp=new Mp,Rp=new i_,Fp=new Tp,Kh=[],Qh=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function gr(a,t,e){const n=a[0];if(n<=0||n>0)return a;const i=t*e;let s=Kh[i];if(s===void 0&&(s=new Float32Array(i),Kh[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,a[r].toArray(s,o)}return s}function ye(a,t){if(a.length!==t.length)return!1;for(let e=0,n=a.length;e<n;e++)if(a[e]!==t[e])return!1;return!0}function Me(a,t){for(let e=0,n=t.length;e<n;e++)a[e]=t[e]}function Fa(a,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let n=0;n!==t;++n)e[n]=a.allocateTextureUnit();return e}function _y(a,t){const e=this.cache;e[0]!==t&&(a.uniform1f(this.addr,t),e[0]=t)}function vy(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;a.uniform2fv(this.addr,t),Me(e,t)}}function xy(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(a.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;a.uniform3fv(this.addr,t),Me(e,t)}}function yy(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;a.uniform4fv(this.addr,t),Me(e,t)}}function My(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;a.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;nf.set(n),a.uniformMatrix2fv(this.addr,!1,nf),Me(e,n)}}function wy(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;a.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;ef.set(n),a.uniformMatrix3fv(this.addr,!1,ef),Me(e,n)}}function Sy(a,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;a.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;tf.set(n),a.uniformMatrix4fv(this.addr,!1,tf),Me(e,n)}}function by(a,t){const e=this.cache;e[0]!==t&&(a.uniform1i(this.addr,t),e[0]=t)}function Ey(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;a.uniform2iv(this.addr,t),Me(e,t)}}function Dy(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;a.uniform3iv(this.addr,t),Me(e,t)}}function Cy(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;a.uniform4iv(this.addr,t),Me(e,t)}}function Ty(a,t){const e=this.cache;e[0]!==t&&(a.uniform1ui(this.addr,t),e[0]=t)}function Ay(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(a.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;a.uniform2uiv(this.addr,t),Me(e,t)}}function Py(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(a.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;a.uniform3uiv(this.addr,t),Me(e,t)}}function Ly(a,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(a.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;a.uniform4uiv(this.addr,t),Me(e,t)}}function Ry(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Pp,i)}function Fy(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Rp,i)}function Iy(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Fp,i)}function Ny(a,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lp,i)}function Oy(a){switch(a){case 5126:return _y;case 35664:return vy;case 35665:return xy;case 35666:return yy;case 35674:return My;case 35675:return wy;case 35676:return Sy;case 5124:case 35670:return by;case 35667:case 35671:return Ey;case 35668:case 35672:return Dy;case 35669:case 35673:return Cy;case 5125:return Ty;case 36294:return Ay;case 36295:return Py;case 36296:return Ly;case 35678:case 36198:case 36298:case 36306:case 35682:return Ry;case 35679:case 36299:case 36307:return Fy;case 35680:case 36300:case 36308:case 36293:return Iy;case 36289:case 36303:case 36311:case 36292:return Ny}}function zy(a,t){a.uniform1fv(this.addr,t)}function Uy(a,t){const e=gr(t,this.size,2);a.uniform2fv(this.addr,e)}function By(a,t){const e=gr(t,this.size,3);a.uniform3fv(this.addr,e)}function ky(a,t){const e=gr(t,this.size,4);a.uniform4fv(this.addr,e)}function Vy(a,t){const e=gr(t,this.size,4);a.uniformMatrix2fv(this.addr,!1,e)}function Gy(a,t){const e=gr(t,this.size,9);a.uniformMatrix3fv(this.addr,!1,e)}function Hy(a,t){const e=gr(t,this.size,16);a.uniformMatrix4fv(this.addr,!1,e)}function Wy(a,t){a.uniform1iv(this.addr,t)}function qy(a,t){a.uniform2iv(this.addr,t)}function Xy(a,t){a.uniform3iv(this.addr,t)}function Yy(a,t){a.uniform4iv(this.addr,t)}function jy(a,t){a.uniform1uiv(this.addr,t)}function Zy(a,t){a.uniform2uiv(this.addr,t)}function $y(a,t){a.uniform3uiv(this.addr,t)}function Jy(a,t){a.uniform4uiv(this.addr,t)}function Ky(a,t,e){const n=this.cache,i=t.length,s=Fa(e,i);ye(n,s)||(a.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||Pp,s[r])}function Qy(a,t,e){const n=this.cache,i=t.length,s=Fa(e,i);ye(n,s)||(a.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||Rp,s[r])}function tM(a,t,e){const n=this.cache,i=t.length,s=Fa(e,i);ye(n,s)||(a.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||Fp,s[r])}function eM(a,t,e){const n=this.cache,i=t.length,s=Fa(e,i);ye(n,s)||(a.uniform1iv(this.addr,s),Me(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||Lp,s[r])}function nM(a){switch(a){case 5126:return zy;case 35664:return Uy;case 35665:return By;case 35666:return ky;case 35674:return Vy;case 35675:return Gy;case 35676:return Hy;case 5124:case 35670:return Wy;case 35667:case 35671:return qy;case 35668:case 35672:return Xy;case 35669:case 35673:return Yy;case 5125:return jy;case 36294:return Zy;case 36295:return $y;case 36296:return Jy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ky;case 35679:case 36299:case 36307:return Qy;case 35680:case 36300:case 36308:case 36293:return tM;case 36289:case 36303:case 36311:case 36292:return eM}}class iM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Oy(e.type)}}class sM{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=nM(e.type)}}class rM{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function sf(a,t){a.seq.push(t),a.map[t.id]=t}function oM(a,t,e){const n=a.name,i=n.length;for(zl.lastIndex=0;;){const s=zl.exec(n),r=zl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===i){sf(e,c===void 0?new iM(o,a,t):new sM(o,a,t));break}else{let f=e.map[o];f===void 0&&(f=new rM(o),sf(e,f)),e=f}}}class ra{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);oM(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function rf(a,t,e){const n=a.createShader(t);return a.shaderSource(n,e),a.compileShader(n),n}let aM=0;function lM(a,t){const e=a.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function cM(a){switch(a){case hs:return["Linear","( value )"];case te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function of(a,t,e){const n=a.getShaderParameter(t,35713),i=a.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+lM(a.getShaderSource(t),r)}else return i}function uM(a,t){const e=cM(t);return"vec4 "+a+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function hM(a,t){let e;switch(t){case S0:e="Linear";break;case b0:e="Reinhard";break;case E0:e="OptimizedCineon";break;case D0:e="ACESFilmic";break;case C0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+a+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function fM(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function dM(a){const t=[];for(const e in a){const n=a[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pM(a,t){const e={},n=a.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:a.getAttribLocation(t,r),locationSize:o}}return e}function Nr(a){return a!==""}function af(a,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(a,t){return a.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mM=/^[ \t]*#include +<([\w\d./]+)>/gm;function bc(a){return a.replace(mM,gM)}function gM(a,t){const e=Bt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return bc(e)}const _M=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cf(a){return a.replace(_M,vM)}function vM(a,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function uf(a){let t="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?t+=`
#define HIGH_PRECISION`:a.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function xM(a){let t="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===up?t="SHADOWMAP_TYPE_PCF":a.shadowMapType===e0?t="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Ir&&(t="SHADOWMAP_TYPE_VSM"),t}function yM(a){let t="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case hr:case fr:t="ENVMAP_TYPE_CUBE";break;case La:t="ENVMAP_TYPE_CUBE_UV";break}return t}function MM(a){let t="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case fr:t="ENVMAP_MODE_REFRACTION";break}return t}function wM(a){let t="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case dp:t="ENVMAP_BLENDING_MULTIPLY";break;case M0:t="ENVMAP_BLENDING_MIX";break;case w0:t="ENVMAP_BLENDING_ADD";break}return t}function SM(a){const t=a.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function bM(a,t,e,n){const i=a.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const l=xM(e),c=yM(e),u=MM(e),f=wM(e),h=SM(e),d=e.isWebGL2?"":fM(e),g=dM(s),_=i.createProgram();let m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[g].filter(Nr).join(`
`),m.length>0&&(m+=`
`),p=[d,g].filter(Nr).join(`
`),p.length>0&&(p+=`
`)):(m=[uf(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),p=[d,uf(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==pi?"#define TONE_MAPPING":"",e.toneMapping!==pi?Bt.tonemapping_pars_fragment:"",e.toneMapping!==pi?hM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.encodings_pars_fragment,uM("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),r=bc(r),r=af(r,e),r=lf(r,e),o=bc(o),o=af(o,e),o=lf(o,e),r=cf(r),o=cf(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+r,x=v+p+o,M=rf(i,35633,y),b=rf(i,35632,x);if(i.attachShader(_,M),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),a.debug.checkShaderErrors){const w=i.getProgramInfoLog(_).trim(),S=i.getShaderInfoLog(M).trim(),I=i.getShaderInfoLog(b).trim();let z=!0,A=!0;if(i.getProgramParameter(_,35714)===!1)if(z=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,_,M,b);else{const L=of(i,M,"vertex"),R=of(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,35715)+`

Program Info Log: `+w+`
`+L+`
`+R)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(S===""||I==="")&&(A=!1);A&&(this.diagnostics={runnable:z,programLog:w,vertexShader:{log:S,prefix:m},fragmentShader:{log:I,prefix:p}})}i.deleteShader(M),i.deleteShader(b);let D;this.getUniforms=function(){return D===void 0&&(D=new ra(i,_)),D};let C;return this.getAttributes=function(){return C===void 0&&(C=pM(i,_)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.name=e.shaderName,this.id=aM++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=b,this}let EM=0;class DM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new CM(t),e.set(t,n)),n}}class CM{constructor(t){this.id=EM++,this.code=t,this.usedTimes=0}}function TM(a,t,e,n,i,s,r){const o=new wp,l=new DM,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(w){return w===1?"uv2":"uv"}function m(w,S,I,z,A){const L=z.fog,R=A.geometry,N=w.isMeshStandardMaterial?z.environment:null,q=(w.isMeshStandardMaterial?e:t).get(w.envMap||N),k=q&&q.mapping===La?q.image.height:null,Z=g[w.type];w.precision!==null&&(d=i.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const K=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ht=K!==void 0?K.length:0;let G=0;R.morphAttributes.position!==void 0&&(G=1),R.morphAttributes.normal!==void 0&&(G=2),R.morphAttributes.color!==void 0&&(G=3);let Y,J,st,ot;if(Z){const wt=Bn[Z];Y=wt.vertexShader,J=wt.fragmentShader}else Y=w.vertexShader,J=w.fragmentShader,l.update(w),st=l.getVertexShaderID(w),ot=l.getFragmentShaderID(w);const H=a.getRenderTarget(),Dt=A.isInstancedMesh===!0,Rt=!!w.map,at=!!w.matcap,xt=!!q,rt=!!w.aoMap,X=!!w.lightMap,et=!!w.bumpMap,yt=!!w.normalMap,ft=!!w.displacementMap,Et=!!w.emissiveMap,Ct=!!w.metalnessMap,At=!!w.roughnessMap,It=w.clearcoat>0,_t=w.iridescence>0,F=w.sheen>0,T=w.transmission>0,$=It&&!!w.clearcoatMap,lt=It&&!!w.clearcoatNormalMap,ct=It&&!!w.clearcoatRoughnessMap,pt=_t&&!!w.iridescenceMap,O=_t&&!!w.iridescenceThicknessMap,it=F&&!!w.sheenColorMap,j=F&&!!w.sheenRoughnessMap,gt=!!w.specularMap,bt=!!w.specularColorMap,Pt=!!w.specularIntensityMap,Mt=T&&!!w.transmissionMap,Tt=T&&!!w.thicknessMap,Ot=!!w.gradientMap,kt=!!w.alphaMap,ce=w.alphaTest>0,B=!!w.extensions,tt=!!R.attributes.uv2;return{isWebGL2:u,shaderID:Z,shaderName:w.type,vertexShader:Y,fragmentShader:J,defines:w.defines,customVertexShaderID:st,customFragmentShaderID:ot,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,instancing:Dt,instancingColor:Dt&&A.instanceColor!==null,supportsVertexTextures:h,outputEncoding:H===null?a.outputEncoding:H.isXRRenderTarget===!0?H.texture.encoding:hs,map:Rt,matcap:at,envMap:xt,envMapMode:xt&&q.mapping,envMapCubeUVHeight:k,aoMap:rt,lightMap:X,bumpMap:et,normalMap:yt,displacementMap:h&&ft,emissiveMap:Et,normalMapObjectSpace:yt&&w.normalMapType===X0,normalMapTangentSpace:yt&&w.normalMapType===gp,decodeVideoTexture:Rt&&w.map.isVideoTexture===!0&&w.map.encoding===te,metalnessMap:Ct,roughnessMap:At,clearcoat:It,clearcoatMap:$,clearcoatNormalMap:lt,clearcoatRoughnessMap:ct,iridescence:_t,iridescenceMap:pt,iridescenceThicknessMap:O,sheen:F,sheenColorMap:it,sheenRoughnessMap:j,specularMap:gt,specularColorMap:bt,specularIntensityMap:Pt,transmission:T,transmissionMap:Mt,thicknessMap:Tt,gradientMap:Ot,opaque:w.transparent===!1&&w.blending===Ks,alphaMap:kt,alphaTest:ce,combine:w.combine,mapUv:Rt&&_(w.map.channel),aoMapUv:rt&&_(w.aoMap.channel),lightMapUv:X&&_(w.lightMap.channel),bumpMapUv:et&&_(w.bumpMap.channel),normalMapUv:yt&&_(w.normalMap.channel),displacementMapUv:ft&&_(w.displacementMap.channel),emissiveMapUv:Et&&_(w.emissiveMap.channel),metalnessMapUv:Ct&&_(w.metalnessMap.channel),roughnessMapUv:At&&_(w.roughnessMap.channel),clearcoatMapUv:$&&_(w.clearcoatMap.channel),clearcoatNormalMapUv:lt&&_(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(w.clearcoatRoughnessMap.channel),iridescenceMapUv:pt&&_(w.iridescenceMap.channel),iridescenceThicknessMapUv:O&&_(w.iridescenceThicknessMap.channel),sheenColorMapUv:it&&_(w.sheenColorMap.channel),sheenRoughnessMapUv:j&&_(w.sheenRoughnessMap.channel),specularMapUv:gt&&_(w.specularMap.channel),specularColorMapUv:bt&&_(w.specularColorMap.channel),specularIntensityMapUv:Pt&&_(w.specularIntensityMap.channel),transmissionMapUv:Mt&&_(w.transmissionMap.channel),thicknessMapUv:Tt&&_(w.thicknessMap.channel),alphaMapUv:kt&&_(w.alphaMap.channel),vertexTangents:yt&&!!R.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,vertexUvs2:tt,pointsUvs:A.isPoints===!0&&!!R.attributes.uv&&(Rt||kt),fog:!!L,useFog:w.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:A.isSkinnedMesh===!0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:G,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:a.shadowMap.enabled&&I.length>0,shadowMapType:a.shadowMap.type,toneMapping:w.toneMapped?a.toneMapping:pi,useLegacyLights:a.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ui,flipSided:w.side===qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:B&&w.extensions.derivatives===!0,extensionFragDepth:B&&w.extensions.fragDepth===!0,extensionDrawBuffers:B&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:B&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const I in w.defines)S.push(I),S.push(w.defines[I]);return w.isRawShaderMaterial===!1&&(v(S,w),y(S,w),S.push(a.outputEncoding)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputEncoding),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){o.disableAll(),S.isWebGL2&&o.enable(0),S.supportsVertexTextures&&o.enable(1),S.instancing&&o.enable(2),S.instancingColor&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUvs2&&o.enable(13),S.vertexTangents&&o.enable(14),w.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.skinning&&o.enable(4),S.morphTargets&&o.enable(5),S.morphNormals&&o.enable(6),S.morphColors&&o.enable(7),S.premultipliedAlpha&&o.enable(8),S.shadowMapEnabled&&o.enable(9),S.useLegacyLights&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.decodeVideoTexture&&o.enable(17),S.opaque&&o.enable(18),S.pointsUvs&&o.enable(19),w.push(o.mask)}function x(w){const S=g[w.type];let I;if(S){const z=Bn[S];I=g_.clone(z.uniforms)}else I=w.uniforms;return I}function M(w,S){let I;for(let z=0,A=c.length;z<A;z++){const L=c[z];if(L.cacheKey===S){I=L,++I.usedTimes;break}}return I===void 0&&(I=new bM(a,S,w,s),c.push(I)),I}function b(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function D(w){l.remove(w)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:M,releaseProgram:b,releaseShaderCache:D,programs:c,dispose:C}}function AM(){let a=new WeakMap;function t(s){let r=a.get(s);return r===void 0&&(r={},a.set(s,r)),r}function e(s){a.delete(s)}function n(s,r,o){a.get(s)[r]=o}function i(){a=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function PM(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.material.id!==t.material.id?a.material.id-t.material.id:a.z!==t.z?a.z-t.z:a.id-t.id}function hf(a,t){return a.groupOrder!==t.groupOrder?a.groupOrder-t.groupOrder:a.renderOrder!==t.renderOrder?a.renderOrder-t.renderOrder:a.z!==t.z?t.z-a.z:a.id-t.id}function ff(){const a=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(f,h,d,g,_,m){let p=a[t];return p===void 0?(p={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},a[t]=p):(p.id=f.id,p.object=f,p.geometry=h,p.material=d,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),t++,p}function o(f,h,d,g,_,m){const p=r(f,h,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(f,h,d,g,_,m){const p=r(f,h,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(f,h){e.length>1&&e.sort(f||PM),n.length>1&&n.sort(h||hf),i.length>1&&i.sort(h||hf)}function u(){for(let f=t,h=a.length;f<h;f++){const d=a[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function LM(){let a=new WeakMap;function t(n,i){const s=a.get(n);let r;return s===void 0?(r=new ff,a.set(n,[r])):i>=s.length?(r=new ff,s.push(r)):r=s[i],r}function e(){a=new WeakMap}return{get:t,dispose:e}}function RM(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return a[t.id]=e,e}}}function FM(){const a={};return{get:function(t){if(a[t.id]!==void 0)return a[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[t.id]=e,e}}}let IM=0;function NM(a,t){return(t.castShadow?2:0)-(a.castShadow?2:0)+(t.map?1:0)-(a.map?1:0)}function OM(a,t){const e=new RM,n=FM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new U);const s=new U,r=new fe,o=new fe;function l(u,f){let h=0,d=0,g=0;for(let I=0;I<9;I++)i.probe[I].set(0,0,0);let _=0,m=0,p=0,v=0,y=0,x=0,M=0,b=0,D=0,C=0;u.sort(NM);const w=f===!0?Math.PI:1;for(let I=0,z=u.length;I<z;I++){const A=u[I],L=A.color,R=A.intensity,N=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=L.r*R*w,d+=L.g*R*w,g+=L.b*R*w;else if(A.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],R);else if(A.isDirectionalLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity*w),A.castShadow){const Z=A.shadow,K=n.get(A);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.directionalShadow[_]=K,i.directionalShadowMap[_]=q,i.directionalShadowMatrix[_]=A.shadow.matrix,x++}i.directional[_]=k,_++}else if(A.isSpotLight){const k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(L).multiplyScalar(R*w),k.distance=N,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[p]=k;const Z=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,Z.updateMatrices(A),A.castShadow&&C++),i.spotLightMatrix[p]=Z.matrix,A.castShadow){const K=n.get(A);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,i.spotShadow[p]=K,i.spotShadowMap[p]=q,b++}p++}else if(A.isRectAreaLight){const k=e.get(A);k.color.copy(L).multiplyScalar(R),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[v]=k,v++}else if(A.isPointLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity*w),k.distance=A.distance,k.decay=A.decay,A.castShadow){const Z=A.shadow,K=n.get(A);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=A.shadow.matrix,M++}i.point[m]=k,m++}else if(A.isHemisphereLight){const k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(R*w),k.groundColor.copy(A.groundColor).multiplyScalar(R*w),i.hemi[y]=k,y++}}v>0&&(t.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const S=i.hash;(S.directionalLength!==_||S.pointLength!==m||S.spotLength!==p||S.rectAreaLength!==v||S.hemiLength!==y||S.numDirectionalShadows!==x||S.numPointShadows!==M||S.numSpotShadows!==b||S.numSpotMaps!==D)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=b+D-C,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=C,S.directionalLength=_,S.pointLength=m,S.spotLength=p,S.rectAreaLength=v,S.hemiLength=y,S.numDirectionalShadows=x,S.numPointShadows=M,S.numSpotShadows=b,S.numSpotMaps=D,i.version=IM++)}function c(u,f){let h=0,d=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const x=u[v];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(x.isSpotLight){const M=i.spot[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const M=i.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(x.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),_++}else if(x.isPointLight){const M=i.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function df(a,t){const e=new OM(a,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function l(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:o}}function zM(a,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let l;return o===void 0?(l=new df(a,t),e.set(s,[l])):r>=o.length?(l=new df(a,t),o.push(l)):l=o[r],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class UM extends co{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=W0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class BM extends co{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,VM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function GM(a,t,e){let n=new ru;const i=new dt,s=new dt,r=new ne,o=new UM({depthPacking:q0}),l=new BM,c={},u=e.maxTextureSize,f={[Fi]:qe,[qe]:Fi,[ui]:ui},h=new ps({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:kM,fragmentShader:VM}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Yn;g.setAttribute("position",new Wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ae(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up,this.render=function(x,M,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const D=a.getRenderTarget(),C=a.getActiveCubeFace(),w=a.getActiveMipmapLevel(),S=a.state;S.setBlending(Pi),S.buffers.color.setClear(1,1,1,1),S.buffers.depth.setTest(!0),S.setScissorTest(!1);for(let I=0,z=x.length;I<z;I++){const A=x[I],L=A.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;i.copy(L.mapSize);const R=L.getFrameExtents();if(i.multiply(R),s.copy(L.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/R.x),i.x=s.x*R.x,L.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/R.y),i.y=s.y*R.y,L.mapSize.y=s.y)),L.map===null){const q=this.type!==Ir?{minFilter:Oe,magFilter:Oe}:{};L.map=new fs(i.x,i.y,q),L.map.texture.name=A.name+".shadowMap",L.camera.updateProjectionMatrix()}a.setRenderTarget(L.map),a.clear();const N=L.getViewportCount();for(let q=0;q<N;q++){const k=L.getViewport(q);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),S.viewport(r),L.updateMatrices(A,q),n=L.getFrustum(),y(M,b,L.camera,A,this.type)}L.isPointLightShadow!==!0&&this.type===Ir&&p(L,b),L.needsUpdate=!1}m.needsUpdate=!1,a.setRenderTarget(D,C,w)};function p(x,M){const b=t.update(_);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new fs(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,a.setRenderTarget(x.mapPass),a.clear(),a.renderBufferDirect(M,null,b,h,_,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,a.setRenderTarget(x.map),a.clear(),a.renderBufferDirect(M,null,b,d,_,null)}function v(x,M,b,D){let C=null;const w=b.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(w!==void 0)C=w;else if(C=b.isPointLight===!0?l:o,a.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const S=C.uuid,I=M.uuid;let z=c[S];z===void 0&&(z={},c[S]=z);let A=z[I];A===void 0&&(A=C.clone(),z[I]=A),C=A}if(C.visible=M.visible,C.wireframe=M.wireframe,D===Ir?C.side=M.shadowSide!==null?M.shadowSide:M.side:C.side=M.shadowSide!==null?M.shadowSide:f[M.side],C.alphaMap=M.alphaMap,C.alphaTest=M.alphaTest,C.map=M.map,C.clipShadows=M.clipShadows,C.clippingPlanes=M.clippingPlanes,C.clipIntersection=M.clipIntersection,C.displacementMap=M.displacementMap,C.displacementScale=M.displacementScale,C.displacementBias=M.displacementBias,C.wireframeLinewidth=M.wireframeLinewidth,C.linewidth=M.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const S=a.properties.get(C);S.light=b}return C}function y(x,M,b,D,C){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&C===Ir)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,x.matrixWorld);const I=t.update(x),z=x.material;if(Array.isArray(z)){const A=I.groups;for(let L=0,R=A.length;L<R;L++){const N=A[L],q=z[N.materialIndex];if(q&&q.visible){const k=v(x,q,D,C);a.renderBufferDirect(b,null,I,k,x,N)}}}else if(z.visible){const A=v(x,z,D,C);a.renderBufferDirect(b,null,I,A,x,null)}}const S=x.children;for(let I=0,z=S.length;I<z;I++)y(S[I],M,b,D,C)}}function HM(a,t,e){const n=e.isWebGL2;function i(){let B=!1;const tt=new ne;let ut=null;const wt=new ne(0,0,0,0);return{setMask:function(Lt){ut!==Lt&&!B&&(a.colorMask(Lt,Lt,Lt,Lt),ut=Lt)},setLocked:function(Lt){B=Lt},setClear:function(Lt,Kt,ie,Ce,vi){vi===!0&&(Lt*=Ce,Kt*=Ce,ie*=Ce),tt.set(Lt,Kt,ie,Ce),wt.equals(tt)===!1&&(a.clearColor(Lt,Kt,ie,Ce),wt.copy(tt))},reset:function(){B=!1,ut=null,wt.set(-1,0,0,0)}}}function s(){let B=!1,tt=null,ut=null,wt=null;return{setTest:function(Lt){Lt?H(2929):Dt(2929)},setMask:function(Lt){tt!==Lt&&!B&&(a.depthMask(Lt),tt=Lt)},setFunc:function(Lt){if(ut!==Lt){switch(Lt){case p0:a.depthFunc(512);break;case m0:a.depthFunc(519);break;case g0:a.depthFunc(513);break;case _c:a.depthFunc(515);break;case _0:a.depthFunc(514);break;case v0:a.depthFunc(518);break;case x0:a.depthFunc(516);break;case y0:a.depthFunc(517);break;default:a.depthFunc(515)}ut=Lt}},setLocked:function(Lt){B=Lt},setClear:function(Lt){wt!==Lt&&(a.clearDepth(Lt),wt=Lt)},reset:function(){B=!1,tt=null,ut=null,wt=null}}}function r(){let B=!1,tt=null,ut=null,wt=null,Lt=null,Kt=null,ie=null,Ce=null,vi=null;return{setTest:function(ue){B||(ue?H(2960):Dt(2960))},setMask:function(ue){tt!==ue&&!B&&(a.stencilMask(ue),tt=ue)},setFunc:function(ue,cn,Fn){(ut!==ue||wt!==cn||Lt!==Fn)&&(a.stencilFunc(ue,cn,Fn),ut=ue,wt=cn,Lt=Fn)},setOp:function(ue,cn,Fn){(Kt!==ue||ie!==cn||Ce!==Fn)&&(a.stencilOp(ue,cn,Fn),Kt=ue,ie=cn,Ce=Fn)},setLocked:function(ue){B=ue},setClear:function(ue){vi!==ue&&(a.clearStencil(ue),vi=ue)},reset:function(){B=!1,tt=null,ut=null,wt=null,Lt=null,Kt=null,ie=null,Ce=null,vi=null}}}const o=new i,l=new s,c=new r,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,y=null,x=null,M=null,b=null,D=null,C=null,w=!1,S=null,I=null,z=null,A=null,L=null;const R=a.getParameter(35661);let N=!1,q=0;const k=a.getParameter(7938);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),N=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),N=q>=2);let Z=null,K={};const ht=a.getParameter(3088),G=a.getParameter(2978),Y=new ne().fromArray(ht),J=new ne().fromArray(G);function st(B,tt,ut){const wt=new Uint8Array(4),Lt=a.createTexture();a.bindTexture(B,Lt),a.texParameteri(B,10241,9728),a.texParameteri(B,10240,9728);for(let Kt=0;Kt<ut;Kt++)a.texImage2D(tt+Kt,0,6408,1,1,0,6408,5121,wt);return Lt}const ot={};ot[3553]=st(3553,3553,1),ot[34067]=st(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),H(2929),l.setFunc(_c),ft(!1),Et(Ku),H(2884),et(Pi);function H(B){h[B]!==!0&&(a.enable(B),h[B]=!0)}function Dt(B){h[B]!==!1&&(a.disable(B),h[B]=!1)}function Rt(B,tt){return d[B]!==tt?(a.bindFramebuffer(B,tt),d[B]=tt,n&&(B===36009&&(d[36160]=tt),B===36160&&(d[36009]=tt)),!0):!1}function at(B,tt){let ut=_,wt=!1;if(B)if(ut=g.get(tt),ut===void 0&&(ut=[],g.set(tt,ut)),B.isWebGLMultipleRenderTargets){const Lt=B.texture;if(ut.length!==Lt.length||ut[0]!==36064){for(let Kt=0,ie=Lt.length;Kt<ie;Kt++)ut[Kt]=36064+Kt;ut.length=Lt.length,wt=!0}}else ut[0]!==36064&&(ut[0]=36064,wt=!0);else ut[0]!==1029&&(ut[0]=1029,wt=!0);wt&&(e.isWebGL2?a.drawBuffers(ut):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(ut))}function xt(B){return m!==B?(a.useProgram(B),m=B,!0):!1}const rt={[Bs]:32774,[i0]:32778,[s0]:32779};if(n)rt[nh]=32775,rt[ih]=32776;else{const B=t.get("EXT_blend_minmax");B!==null&&(rt[nh]=B.MIN_EXT,rt[ih]=B.MAX_EXT)}const X={[r0]:0,[o0]:1,[a0]:768,[hp]:770,[d0]:776,[h0]:774,[c0]:772,[l0]:769,[fp]:771,[f0]:775,[u0]:773};function et(B,tt,ut,wt,Lt,Kt,ie,Ce){if(B===Pi){p===!0&&(Dt(3042),p=!1);return}if(p===!1&&(H(3042),p=!0),B!==n0){if(B!==v||Ce!==w){if((y!==Bs||b!==Bs)&&(a.blendEquation(32774),y=Bs,b=Bs),Ce)switch(B){case Ks:a.blendFuncSeparate(1,771,1,771);break;case Qu:a.blendFunc(1,1);break;case th:a.blendFuncSeparate(0,769,0,1);break;case eh:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case Ks:a.blendFuncSeparate(770,771,1,771);break;case Qu:a.blendFunc(770,1);break;case th:a.blendFuncSeparate(0,769,0,1);break;case eh:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}x=null,M=null,D=null,C=null,v=B,w=Ce}return}Lt=Lt||tt,Kt=Kt||ut,ie=ie||wt,(tt!==y||Lt!==b)&&(a.blendEquationSeparate(rt[tt],rt[Lt]),y=tt,b=Lt),(ut!==x||wt!==M||Kt!==D||ie!==C)&&(a.blendFuncSeparate(X[ut],X[wt],X[Kt],X[ie]),x=ut,M=wt,D=Kt,C=ie),v=B,w=!1}function yt(B,tt){B.side===ui?Dt(2884):H(2884);let ut=B.side===qe;tt&&(ut=!ut),ft(ut),B.blending===Ks&&B.transparent===!1?et(Pi):et(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const wt=B.stencilWrite;c.setTest(wt),wt&&(c.setMask(B.stencilWriteMask),c.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),c.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),At(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?H(32926):Dt(32926)}function ft(B){S!==B&&(B?a.frontFace(2304):a.frontFace(2305),S=B)}function Et(B){B!==Qg?(H(2884),B!==I&&(B===Ku?a.cullFace(1029):B===t0?a.cullFace(1028):a.cullFace(1032))):Dt(2884),I=B}function Ct(B){B!==z&&(N&&a.lineWidth(B),z=B)}function At(B,tt,ut){B?(H(32823),(A!==tt||L!==ut)&&(a.polygonOffset(tt,ut),A=tt,L=ut)):Dt(32823)}function It(B){B?H(3089):Dt(3089)}function _t(B){B===void 0&&(B=33984+R-1),Z!==B&&(a.activeTexture(B),Z=B)}function F(B,tt,ut){ut===void 0&&(Z===null?ut=33984+R-1:ut=Z);let wt=K[ut];wt===void 0&&(wt={type:void 0,texture:void 0},K[ut]=wt),(wt.type!==B||wt.texture!==tt)&&(Z!==ut&&(a.activeTexture(ut),Z=ut),a.bindTexture(B,tt||ot[B]),wt.type=B,wt.texture=tt)}function T(){const B=K[Z];B!==void 0&&B.type!==void 0&&(a.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function $(){try{a.compressedTexImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{a.compressedTexImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ct(){try{a.texSubImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pt(){try{a.texSubImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function O(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function it(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function j(){try{a.texStorage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function gt(){try{a.texStorage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function bt(){try{a.texImage2D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pt(){try{a.texImage3D.apply(a,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Mt(B){Y.equals(B)===!1&&(a.scissor(B.x,B.y,B.z,B.w),Y.copy(B))}function Tt(B){J.equals(B)===!1&&(a.viewport(B.x,B.y,B.z,B.w),J.copy(B))}function Ot(B,tt){let ut=f.get(tt);ut===void 0&&(ut=new WeakMap,f.set(tt,ut));let wt=ut.get(B);wt===void 0&&(wt=a.getUniformBlockIndex(tt,B.name),ut.set(B,wt))}function kt(B,tt){const wt=f.get(tt).get(B);u.get(tt)!==wt&&(a.uniformBlockBinding(tt,wt,B.__bindingPointIndex),u.set(tt,wt))}function ce(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),h={},Z=null,K={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,y=null,x=null,M=null,b=null,D=null,C=null,w=!1,S=null,I=null,z=null,A=null,L=null,Y.set(0,0,a.canvas.width,a.canvas.height),J.set(0,0,a.canvas.width,a.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:H,disable:Dt,bindFramebuffer:Rt,drawBuffers:at,useProgram:xt,setBlending:et,setMaterial:yt,setFlipSided:ft,setCullFace:Et,setLineWidth:Ct,setPolygonOffset:At,setScissorTest:It,activeTexture:_t,bindTexture:F,unbindTexture:T,compressedTexImage2D:$,compressedTexImage3D:lt,texImage2D:bt,texImage3D:Pt,updateUBOMapping:Ot,uniformBlockBinding:kt,texStorage2D:j,texStorage3D:gt,texSubImage2D:ct,texSubImage3D:pt,compressedTexSubImage2D:O,compressedTexSubImage3D:it,scissor:Mt,viewport:Tt,reset:ce}}function WM(a,t,e,n,i,s,r){const o=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let _;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,T){return p?new OffscreenCanvas(F,T):eo("canvas")}function y(F,T,$,lt){let ct=1;if((F.width>lt||F.height>lt)&&(ct=lt/Math.max(F.width,F.height)),ct<1||T===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const pt=T?Z0:Math.floor,O=pt(ct*F.width),it=pt(ct*F.height);_===void 0&&(_=v(O,it));const j=$?v(O,it):_;return j.width=O,j.height=it,j.getContext("2d").drawImage(F,0,0,O,it),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+O+"x"+it+")."),j}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function x(F){return Ph(F.width)&&Ph(F.height)}function M(F){return o?!1:F.wrapS!==Tn||F.wrapT!==Tn||F.minFilter!==Oe&&F.minFilter!==gn}function b(F,T){return F.generateMipmaps&&T&&F.minFilter!==Oe&&F.minFilter!==gn}function D(F){a.generateMipmap(F)}function C(F,T,$,lt,ct=!1){if(o===!1)return T;if(F!==null){if(a[F]!==void 0)return a[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let pt=T;return T===6403&&($===5126&&(pt=33326),$===5131&&(pt=33325),$===5121&&(pt=33321)),T===33319&&($===5126&&(pt=33328),$===5131&&(pt=33327),$===5121&&(pt=33323)),T===6408&&($===5126&&(pt=34836),$===5131&&(pt=34842),$===5121&&(pt=lt===te&&ct===!1?35907:32856),$===32819&&(pt=32854),$===32820&&(pt=32855)),(pt===33325||pt===33326||pt===33327||pt===33328||pt===34842||pt===34836)&&t.get("EXT_color_buffer_float"),pt}function w(F,T,$){return b(F,$)===!0||F.isFramebufferTexture&&F.minFilter!==Oe&&F.minFilter!==gn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function S(F){return F===Oe||F===sh||F===cl?9728:9729}function I(F){const T=F.target;T.removeEventListener("dispose",I),A(T),T.isVideoTexture&&g.delete(T)}function z(F){const T=F.target;T.removeEventListener("dispose",z),R(T)}function A(F){const T=n.get(F);if(T.__webglInit===void 0)return;const $=F.source,lt=m.get($);if(lt){const ct=lt[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&L(F),Object.keys(lt).length===0&&m.delete($)}n.remove(F)}function L(F){const T=n.get(F);a.deleteTexture(T.__webglTexture);const $=F.source,lt=m.get($);delete lt[T.__cacheKey],r.memory.textures--}function R(F){const T=F.texture,$=n.get(F),lt=n.get(T);if(lt.__webglTexture!==void 0&&(a.deleteTexture(lt.__webglTexture),r.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ct=0;ct<6;ct++)a.deleteFramebuffer($.__webglFramebuffer[ct]),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer[ct]);else{if(a.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&a.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&a.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let ct=0;ct<$.__webglColorRenderbuffer.length;ct++)$.__webglColorRenderbuffer[ct]&&a.deleteRenderbuffer($.__webglColorRenderbuffer[ct]);$.__webglDepthRenderbuffer&&a.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let ct=0,pt=T.length;ct<pt;ct++){const O=n.get(T[ct]);O.__webglTexture&&(a.deleteTexture(O.__webglTexture),r.memory.textures--),n.remove(T[ct])}n.remove(T),n.remove(F)}let N=0;function q(){N=0}function k(){const F=N;return F>=l&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l),N+=1,F}function Z(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.encoding),T.join()}function K(F,T){const $=n.get(F);if(F.isVideoTexture&&It(F),F.isRenderTargetTexture===!1&&F.version>0&&$.__version!==F.version){const lt=F.image;if(lt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt($,F,T);return}}e.bindTexture(3553,$.__webglTexture,33984+T)}function ht(F,T){const $=n.get(F);if(F.version>0&&$.__version!==F.version){Dt($,F,T);return}e.bindTexture(35866,$.__webglTexture,33984+T)}function G(F,T){const $=n.get(F);if(F.version>0&&$.__version!==F.version){Dt($,F,T);return}e.bindTexture(32879,$.__webglTexture,33984+T)}function Y(F,T){const $=n.get(F);if(F.version>0&&$.__version!==F.version){Rt($,F,T);return}e.bindTexture(34067,$.__webglTexture,33984+T)}const J={[yc]:10497,[Tn]:33071,[Mc]:33648},st={[Oe]:9728,[sh]:9984,[cl]:9986,[gn]:9729,[T0]:9985,[Kr]:9987};function ot(F,T,$){if($?(a.texParameteri(F,10242,J[T.wrapS]),a.texParameteri(F,10243,J[T.wrapT]),(F===32879||F===35866)&&a.texParameteri(F,32882,J[T.wrapR]),a.texParameteri(F,10240,st[T.magFilter]),a.texParameteri(F,10241,st[T.minFilter])):(a.texParameteri(F,10242,33071),a.texParameteri(F,10243,33071),(F===32879||F===35866)&&a.texParameteri(F,32882,33071),(T.wrapS!==Tn||T.wrapT!==Tn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(F,10240,S(T.magFilter)),a.texParameteri(F,10241,S(T.minFilter)),T.minFilter!==Oe&&T.minFilter!==gn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const lt=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===Oe||T.minFilter!==cl&&T.minFilter!==Kr||T.type===es&&t.has("OES_texture_float_linear")===!1||o===!1&&T.type===Qr&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(a.texParameterf(F,lt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function H(F,T){let $=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",I));const lt=T.source;let ct=m.get(lt);ct===void 0&&(ct={},m.set(lt,ct));const pt=Z(T);if(pt!==F.__cacheKey){ct[pt]===void 0&&(ct[pt]={texture:a.createTexture(),usedTimes:0},r.memory.textures++,$=!0),ct[pt].usedTimes++;const O=ct[F.__cacheKey];O!==void 0&&(ct[F.__cacheKey].usedTimes--,O.usedTimes===0&&L(T)),F.__cacheKey=pt,F.__webglTexture=ct[pt].texture}return $}function Dt(F,T,$){let lt=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(lt=35866),T.isData3DTexture&&(lt=32879);const ct=H(F,T),pt=T.source;e.bindTexture(lt,F.__webglTexture,33984+$);const O=n.get(pt);if(pt.version!==O.__version||ct===!0){e.activeTexture(33984+$),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const it=M(T)&&x(T.image)===!1;let j=y(T.image,it,!1,u);j=_t(T,j);const gt=x(j)||o,bt=s.convert(T.format,T.encoding);let Pt=s.convert(T.type),Mt=C(T.internalFormat,bt,Pt,T.encoding,T.isVideoTexture);ot(lt,T,gt);let Tt;const Ot=T.mipmaps,kt=o&&T.isVideoTexture!==!0,ce=O.__version===void 0||ct===!0,B=w(T,j,gt);if(T.isDepthTexture)Mt=6402,o?T.type===es?Mt=36012:T.type===ts?Mt=33190:T.type===Qs?Mt=35056:Mt=33189:T.type===es&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===os&&Mt===6402&&T.type!==mp&&T.type!==ts&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ts,Pt=s.convert(T.type)),T.format===dr&&Mt===6402&&(Mt=34041,T.type!==Qs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Qs,Pt=s.convert(T.type))),ce&&(kt?e.texStorage2D(3553,1,Mt,j.width,j.height):e.texImage2D(3553,0,Mt,j.width,j.height,0,bt,Pt,null));else if(T.isDataTexture)if(Ot.length>0&&gt){kt&&ce&&e.texStorage2D(3553,B,Mt,Ot[0].width,Ot[0].height);for(let tt=0,ut=Ot.length;tt<ut;tt++)Tt=Ot[tt],kt?e.texSubImage2D(3553,tt,0,0,Tt.width,Tt.height,bt,Pt,Tt.data):e.texImage2D(3553,tt,Mt,Tt.width,Tt.height,0,bt,Pt,Tt.data);T.generateMipmaps=!1}else kt?(ce&&e.texStorage2D(3553,B,Mt,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,bt,Pt,j.data)):e.texImage2D(3553,0,Mt,j.width,j.height,0,bt,Pt,j.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){kt&&ce&&e.texStorage3D(35866,B,Mt,Ot[0].width,Ot[0].height,j.depth);for(let tt=0,ut=Ot.length;tt<ut;tt++)Tt=Ot[tt],T.format!==An?bt!==null?kt?e.compressedTexSubImage3D(35866,tt,0,0,0,Tt.width,Tt.height,j.depth,bt,Tt.data,0,0):e.compressedTexImage3D(35866,tt,Mt,Tt.width,Tt.height,j.depth,0,Tt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage3D(35866,tt,0,0,0,Tt.width,Tt.height,j.depth,bt,Pt,Tt.data):e.texImage3D(35866,tt,Mt,Tt.width,Tt.height,j.depth,0,bt,Pt,Tt.data)}else{kt&&ce&&e.texStorage2D(3553,B,Mt,Ot[0].width,Ot[0].height);for(let tt=0,ut=Ot.length;tt<ut;tt++)Tt=Ot[tt],T.format!==An?bt!==null?kt?e.compressedTexSubImage2D(3553,tt,0,0,Tt.width,Tt.height,bt,Tt.data):e.compressedTexImage2D(3553,tt,Mt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?e.texSubImage2D(3553,tt,0,0,Tt.width,Tt.height,bt,Pt,Tt.data):e.texImage2D(3553,tt,Mt,Tt.width,Tt.height,0,bt,Pt,Tt.data)}else if(T.isDataArrayTexture)kt?(ce&&e.texStorage3D(35866,B,Mt,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,bt,Pt,j.data)):e.texImage3D(35866,0,Mt,j.width,j.height,j.depth,0,bt,Pt,j.data);else if(T.isData3DTexture)kt?(ce&&e.texStorage3D(32879,B,Mt,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,bt,Pt,j.data)):e.texImage3D(32879,0,Mt,j.width,j.height,j.depth,0,bt,Pt,j.data);else if(T.isFramebufferTexture){if(ce)if(kt)e.texStorage2D(3553,B,Mt,j.width,j.height);else{let tt=j.width,ut=j.height;for(let wt=0;wt<B;wt++)e.texImage2D(3553,wt,Mt,tt,ut,0,bt,Pt,null),tt>>=1,ut>>=1}}else if(Ot.length>0&&gt){kt&&ce&&e.texStorage2D(3553,B,Mt,Ot[0].width,Ot[0].height);for(let tt=0,ut=Ot.length;tt<ut;tt++)Tt=Ot[tt],kt?e.texSubImage2D(3553,tt,0,0,bt,Pt,Tt):e.texImage2D(3553,tt,Mt,bt,Pt,Tt);T.generateMipmaps=!1}else kt?(ce&&e.texStorage2D(3553,B,Mt,j.width,j.height),e.texSubImage2D(3553,0,0,0,bt,Pt,j)):e.texImage2D(3553,0,Mt,bt,Pt,j);b(T,gt)&&D(lt),O.__version=pt.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function Rt(F,T,$){if(T.image.length!==6)return;const lt=H(F,T),ct=T.source;e.bindTexture(34067,F.__webglTexture,33984+$);const pt=n.get(ct);if(ct.version!==pt.__version||lt===!0){e.activeTexture(33984+$),a.pixelStorei(37440,T.flipY),a.pixelStorei(37441,T.premultiplyAlpha),a.pixelStorei(3317,T.unpackAlignment),a.pixelStorei(37443,0);const O=T.isCompressedTexture||T.image[0].isCompressedTexture,it=T.image[0]&&T.image[0].isDataTexture,j=[];for(let tt=0;tt<6;tt++)!O&&!it?j[tt]=y(T.image[tt],!1,!0,c):j[tt]=it?T.image[tt].image:T.image[tt],j[tt]=_t(T,j[tt]);const gt=j[0],bt=x(gt)||o,Pt=s.convert(T.format,T.encoding),Mt=s.convert(T.type),Tt=C(T.internalFormat,Pt,Mt,T.encoding),Ot=o&&T.isVideoTexture!==!0,kt=pt.__version===void 0||lt===!0;let ce=w(T,gt,bt);ot(34067,T,bt);let B;if(O){Ot&&kt&&e.texStorage2D(34067,ce,Tt,gt.width,gt.height);for(let tt=0;tt<6;tt++){B=j[tt].mipmaps;for(let ut=0;ut<B.length;ut++){const wt=B[ut];T.format!==An?Pt!==null?Ot?e.compressedTexSubImage2D(34069+tt,ut,0,0,wt.width,wt.height,Pt,wt.data):e.compressedTexImage2D(34069+tt,ut,Tt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?e.texSubImage2D(34069+tt,ut,0,0,wt.width,wt.height,Pt,Mt,wt.data):e.texImage2D(34069+tt,ut,Tt,wt.width,wt.height,0,Pt,Mt,wt.data)}}}else{B=T.mipmaps,Ot&&kt&&(B.length>0&&ce++,e.texStorage2D(34067,ce,Tt,j[0].width,j[0].height));for(let tt=0;tt<6;tt++)if(it){Ot?e.texSubImage2D(34069+tt,0,0,0,j[tt].width,j[tt].height,Pt,Mt,j[tt].data):e.texImage2D(34069+tt,0,Tt,j[tt].width,j[tt].height,0,Pt,Mt,j[tt].data);for(let ut=0;ut<B.length;ut++){const Lt=B[ut].image[tt].image;Ot?e.texSubImage2D(34069+tt,ut+1,0,0,Lt.width,Lt.height,Pt,Mt,Lt.data):e.texImage2D(34069+tt,ut+1,Tt,Lt.width,Lt.height,0,Pt,Mt,Lt.data)}}else{Ot?e.texSubImage2D(34069+tt,0,0,0,Pt,Mt,j[tt]):e.texImage2D(34069+tt,0,Tt,Pt,Mt,j[tt]);for(let ut=0;ut<B.length;ut++){const wt=B[ut];Ot?e.texSubImage2D(34069+tt,ut+1,0,0,Pt,Mt,wt.image[tt]):e.texImage2D(34069+tt,ut+1,Tt,Pt,Mt,wt.image[tt])}}}b(T,bt)&&D(34067),pt.__version=ct.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function at(F,T,$,lt,ct){const pt=s.convert($.format,$.encoding),O=s.convert($.type),it=C($.internalFormat,pt,O,$.encoding);n.get(T).__hasExternalTextures||(ct===32879||ct===35866?e.texImage3D(ct,0,it,T.width,T.height,T.depth,0,pt,O,null):e.texImage2D(ct,0,it,T.width,T.height,0,pt,O,null)),e.bindFramebuffer(36160,F),At(T)?h.framebufferTexture2DMultisampleEXT(36160,lt,ct,n.get($).__webglTexture,0,Ct(T)):(ct===3553||ct>=34069&&ct<=34074)&&a.framebufferTexture2D(36160,lt,ct,n.get($).__webglTexture,0),e.bindFramebuffer(36160,null)}function xt(F,T,$){if(a.bindRenderbuffer(36161,F),T.depthBuffer&&!T.stencilBuffer){let lt=33189;if($||At(T)){const ct=T.depthTexture;ct&&ct.isDepthTexture&&(ct.type===es?lt=36012:ct.type===ts&&(lt=33190));const pt=Ct(T);At(T)?h.renderbufferStorageMultisampleEXT(36161,pt,lt,T.width,T.height):a.renderbufferStorageMultisample(36161,pt,lt,T.width,T.height)}else a.renderbufferStorage(36161,lt,T.width,T.height);a.framebufferRenderbuffer(36160,36096,36161,F)}else if(T.depthBuffer&&T.stencilBuffer){const lt=Ct(T);$&&At(T)===!1?a.renderbufferStorageMultisample(36161,lt,35056,T.width,T.height):At(T)?h.renderbufferStorageMultisampleEXT(36161,lt,35056,T.width,T.height):a.renderbufferStorage(36161,34041,T.width,T.height),a.framebufferRenderbuffer(36160,33306,36161,F)}else{const lt=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let ct=0;ct<lt.length;ct++){const pt=lt[ct],O=s.convert(pt.format,pt.encoding),it=s.convert(pt.type),j=C(pt.internalFormat,O,it,pt.encoding),gt=Ct(T);$&&At(T)===!1?a.renderbufferStorageMultisample(36161,gt,j,T.width,T.height):At(T)?h.renderbufferStorageMultisampleEXT(36161,gt,j,T.width,T.height):a.renderbufferStorage(36161,j,T.width,T.height)}}a.bindRenderbuffer(36161,null)}function rt(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const lt=n.get(T.depthTexture).__webglTexture,ct=Ct(T);if(T.depthTexture.format===os)At(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,lt,0,ct):a.framebufferTexture2D(36160,36096,3553,lt,0);else if(T.depthTexture.format===dr)At(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,lt,0,ct):a.framebufferTexture2D(36160,33306,3553,lt,0);else throw new Error("Unknown depthTexture format")}function X(F){const T=n.get(F),$=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");rt(T.__webglFramebuffer,F)}else if($){T.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)e.bindFramebuffer(36160,T.__webglFramebuffer[lt]),T.__webglDepthbuffer[lt]=a.createRenderbuffer(),xt(T.__webglDepthbuffer[lt],F,!1)}else e.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=a.createRenderbuffer(),xt(T.__webglDepthbuffer,F,!1);e.bindFramebuffer(36160,null)}function et(F,T,$){const lt=n.get(F);T!==void 0&&at(lt.__webglFramebuffer,F,F.texture,36064,3553),$!==void 0&&X(F)}function yt(F){const T=F.texture,$=n.get(F),lt=n.get(T);F.addEventListener("dispose",z),F.isWebGLMultipleRenderTargets!==!0&&(lt.__webglTexture===void 0&&(lt.__webglTexture=a.createTexture()),lt.__version=T.version,r.memory.textures++);const ct=F.isWebGLCubeRenderTarget===!0,pt=F.isWebGLMultipleRenderTargets===!0,O=x(F)||o;if(ct){$.__webglFramebuffer=[];for(let it=0;it<6;it++)$.__webglFramebuffer[it]=a.createFramebuffer()}else{if($.__webglFramebuffer=a.createFramebuffer(),pt)if(i.drawBuffers){const it=F.texture;for(let j=0,gt=it.length;j<gt;j++){const bt=n.get(it[j]);bt.__webglTexture===void 0&&(bt.__webglTexture=a.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&F.samples>0&&At(F)===!1){const it=pt?T:[T];$.__webglMultisampledFramebuffer=a.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let j=0;j<it.length;j++){const gt=it[j];$.__webglColorRenderbuffer[j]=a.createRenderbuffer(),a.bindRenderbuffer(36161,$.__webglColorRenderbuffer[j]);const bt=s.convert(gt.format,gt.encoding),Pt=s.convert(gt.type),Mt=C(gt.internalFormat,bt,Pt,gt.encoding,F.isXRRenderTarget===!0),Tt=Ct(F);a.renderbufferStorageMultisample(36161,Tt,Mt,F.width,F.height),a.framebufferRenderbuffer(36160,36064+j,36161,$.__webglColorRenderbuffer[j])}a.bindRenderbuffer(36161,null),F.depthBuffer&&($.__webglDepthRenderbuffer=a.createRenderbuffer(),xt($.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(36160,null)}}if(ct){e.bindTexture(34067,lt.__webglTexture),ot(34067,T,O);for(let it=0;it<6;it++)at($.__webglFramebuffer[it],F,T,36064,34069+it);b(T,O)&&D(34067),e.unbindTexture()}else if(pt){const it=F.texture;for(let j=0,gt=it.length;j<gt;j++){const bt=it[j],Pt=n.get(bt);e.bindTexture(3553,Pt.__webglTexture),ot(3553,bt,O),at($.__webglFramebuffer,F,bt,36064+j,3553),b(bt,O)&&D(3553)}e.unbindTexture()}else{let it=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(o?it=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(it,lt.__webglTexture),ot(it,T,O),at($.__webglFramebuffer,F,T,36064,it),b(T,O)&&D(it),e.unbindTexture()}F.depthBuffer&&X(F)}function ft(F){const T=x(F)||o,$=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let lt=0,ct=$.length;lt<ct;lt++){const pt=$[lt];if(b(pt,T)){const O=F.isWebGLCubeRenderTarget?34067:3553,it=n.get(pt).__webglTexture;e.bindTexture(O,it),D(O),e.unbindTexture()}}}function Et(F){if(o&&F.samples>0&&At(F)===!1){const T=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],$=F.width,lt=F.height;let ct=16384;const pt=[],O=F.stencilBuffer?33306:36096,it=n.get(F),j=F.isWebGLMultipleRenderTargets===!0;if(j)for(let gt=0;gt<T.length;gt++)e.bindFramebuffer(36160,it.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+gt,36161,null),e.bindFramebuffer(36160,it.__webglFramebuffer),a.framebufferTexture2D(36009,36064+gt,3553,null,0);e.bindFramebuffer(36008,it.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,it.__webglFramebuffer);for(let gt=0;gt<T.length;gt++){pt.push(36064+gt),F.depthBuffer&&pt.push(O);const bt=it.__ignoreDepthValues!==void 0?it.__ignoreDepthValues:!1;if(bt===!1&&(F.depthBuffer&&(ct|=256),F.stencilBuffer&&(ct|=1024)),j&&a.framebufferRenderbuffer(36008,36064,36161,it.__webglColorRenderbuffer[gt]),bt===!0&&(a.invalidateFramebuffer(36008,[O]),a.invalidateFramebuffer(36009,[O])),j){const Pt=n.get(T[gt]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Pt,0)}a.blitFramebuffer(0,0,$,lt,0,0,$,lt,ct,9728),d&&a.invalidateFramebuffer(36008,pt)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let gt=0;gt<T.length;gt++){e.bindFramebuffer(36160,it.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+gt,36161,it.__webglColorRenderbuffer[gt]);const bt=n.get(T[gt]).__webglTexture;e.bindFramebuffer(36160,it.__webglFramebuffer),a.framebufferTexture2D(36009,36064+gt,3553,bt,0)}e.bindFramebuffer(36009,it.__webglMultisampledFramebuffer)}}function Ct(F){return Math.min(f,F.samples)}function At(F){const T=n.get(F);return o&&F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function It(F){const T=r.render.frame;g.get(F)!==T&&(g.set(F,T),F.update())}function _t(F,T){const $=F.encoding,lt=F.format,ct=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===wc||$!==hs&&($===te?o===!1?t.has("EXT_sRGB")===!0&&lt===An?(F.format=wc,F.minFilter=gn,F.generateMipmaps=!1):T=xp.sRGBToLinear(T):(lt!==An||ct!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),T}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=K,this.setTexture2DArray=ht,this.setTexture3D=G,this.setTextureCube=Y,this.rebindTextures=et,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=X,this.setupFrameBufferTexture=at,this.useMultisampledRTT=At}function qM(a,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===us)return 5121;if(s===R0)return 32819;if(s===F0)return 32820;if(s===A0)return 5120;if(s===P0)return 5122;if(s===mp)return 5123;if(s===L0)return 5124;if(s===ts)return 5125;if(s===es)return 5126;if(s===Qr)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===I0)return 6406;if(s===An)return 6408;if(s===N0)return 6409;if(s===O0)return 6410;if(s===os)return 6402;if(s===dr)return 34041;if(s===wc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===z0)return 6403;if(s===U0)return 36244;if(s===B0)return 33319;if(s===k0)return 33320;if(s===V0)return 36249;if(s===ul||s===hl||s===fl||s===dl)if(r===te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===ul)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===fl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===dl)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===ul)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hl)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===fl)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===dl)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rh||s===oh||s===ah||s===lh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===rh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ah)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===G0)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ch||s===uh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ch)return r===te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===uh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===hh||s===fh||s===dh||s===ph||s===mh||s===gh||s===_h||s===vh||s===xh||s===yh||s===Mh||s===wh||s===Sh||s===bh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===hh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ph)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_h)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Mh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===wh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Sh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===bh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===pl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===pl)return r===te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===H0||s===Eh||s===Dh||s===Ch)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===pl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Eh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Dh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ch)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Qs?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class XM extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ho extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YM={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ho,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ho,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ho,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(YM)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ho;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class jM extends Xe{constructor(t,e,n,i,s,r,o,l,c,u){if(u=u!==void 0?u:os,u!==os&&u!==dr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===os&&(n=ts),n===void 0&&u===dr&&(n=Qs),super(null,i,s,r,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1}}class ZM extends _s{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=e.getContextAttributes();let m=null,p=null;const v=[],y=[],x=new Set,M=new Map,b=new en;b.layers.enable(1),b.viewport=new ne;const D=new en;D.layers.enable(2),D.viewport=new ne;const C=[b,D],w=new XM;w.layers.enable(1),w.layers.enable(2);let S=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=v[Y];return J===void 0&&(J=new Ul,v[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=v[Y];return J===void 0&&(J=new Ul,v[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=v[Y];return J===void 0&&(J=new Ul,v[Y]=J),J.getHandSpace()};function z(Y){const J=y.indexOf(Y.inputSource);if(J===-1)return;const st=v[J];st!==void 0&&st.dispatchEvent({type:Y.type,data:Y.inputSource})}function A(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",L);for(let Y=0;Y<v.length;Y++){const J=y[Y];J!==null&&(y[Y]=null,v[Y].disconnect(J))}S=null,I=null,t.setRenderTarget(m),d=null,h=null,f=null,i=null,p=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",A),i.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:_.alpha,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:d}),p=new fs(d.framebufferWidth,d.framebufferHeight,{format:An,type:us,encoding:t.outputEncoding,stencilBuffer:_.stencil})}else{let J=null,st=null,ot=null;_.depth&&(ot=_.stencil?35056:33190,J=_.stencil?dr:os,st=_.stencil?Qs:ts);const H={colorFormat:32856,depthFormat:ot,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(H),i.updateRenderState({layers:[h]}),p=new fs(h.textureWidth,h.textureHeight,{format:An,type:us,depthTexture:new jM(h.textureWidth,h.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,encoding:t.outputEncoding,samples:_.antialias?4:0});const Dt=t.properties.get(p);Dt.__ignoreDepthValues=h.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await i.requestReferenceSpace(o),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function L(Y){for(let J=0;J<Y.removed.length;J++){const st=Y.removed[J],ot=y.indexOf(st);ot>=0&&(y[ot]=null,v[ot].disconnect(st))}for(let J=0;J<Y.added.length;J++){const st=Y.added[J];let ot=y.indexOf(st);if(ot===-1){for(let Dt=0;Dt<v.length;Dt++)if(Dt>=y.length){y.push(st),ot=Dt;break}else if(y[Dt]===null){y[Dt]=st,ot=Dt;break}if(ot===-1)break}const H=v[ot];H&&H.connect(st)}}const R=new U,N=new U;function q(Y,J,st){R.setFromMatrixPosition(J.matrixWorld),N.setFromMatrixPosition(st.matrixWorld);const ot=R.distanceTo(N),H=J.projectionMatrix.elements,Dt=st.projectionMatrix.elements,Rt=H[14]/(H[10]-1),at=H[14]/(H[10]+1),xt=(H[9]+1)/H[5],rt=(H[9]-1)/H[5],X=(H[8]-1)/H[0],et=(Dt[8]+1)/Dt[0],yt=Rt*X,ft=Rt*et,Et=ot/(-X+et),Ct=Et*-X;J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ct),Y.translateZ(Et),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const At=Rt+Et,It=at+Et,_t=yt-Ct,F=ft+(ot-Ct),T=xt*at/It*At,$=rt*at/It*At;Y.projectionMatrix.makePerspective(_t,F,T,$,At,It),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function k(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;w.near=D.near=b.near=Y.near,w.far=D.far=b.far=Y.far,(S!==w.near||I!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),S=w.near,I=w.far);const J=Y.parent,st=w.cameras;k(w,J);for(let ot=0;ot<st.length;ot++)k(st[ot],J);st.length===2?q(w,b,D):w.projectionMatrix.copy(b.projectionMatrix),Z(Y,w,J)};function Z(Y,J,st){st===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(st.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0);const ot=Y.children;for(let H=0,Dt=ot.length;H<Dt;H++)ot[H].updateMatrixWorld(!0);Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Sc*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.getPlanes=function(){return x};let K=null;function ht(Y,J){if(u=J.getViewerPose(c||r),g=J,u!==null){const st=u.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let ot=!1;st.length!==w.cameras.length&&(w.cameras.length=0,ot=!0);for(let H=0;H<st.length;H++){const Dt=st[H];let Rt=null;if(d!==null)Rt=d.getViewport(Dt);else{const xt=f.getViewSubImage(h,Dt);Rt=xt.viewport,H===0&&(t.setRenderTargetTextures(p,xt.colorTexture,h.ignoreDepthValues?void 0:xt.depthStencilTexture),t.setRenderTarget(p))}let at=C[H];at===void 0&&(at=new en,at.layers.enable(H),at.viewport=new ne,C[H]=at),at.matrix.fromArray(Dt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Dt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),H===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),ot===!0&&w.cameras.push(at)}}for(let st=0;st<v.length;st++){const ot=y[st],H=v[st];ot!==null&&H!==void 0&&H.update(ot,J,c||r)}if(K&&K(Y,J),J.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:J.detectedPlanes});let st=null;for(const ot of x)J.detectedPlanes.has(ot)||(st===null&&(st=[]),st.push(ot));if(st!==null)for(const ot of st)x.delete(ot),M.delete(ot),n.dispatchEvent({type:"planeremoved",data:ot});for(const ot of J.detectedPlanes)if(!x.has(ot))x.add(ot),M.set(ot,J.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ot});else{const H=M.get(ot);ot.lastChangedTime>H&&(M.set(ot,ot.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ot}))}}g=null}const G=new Ap;G.setAnimationLoop(ht),this.setAnimationLoop=function(Y){K=Y},this.dispose=function(){}}}function $M(a,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Dp(a)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const y=a.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*y,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===qe&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function JM(a,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?a.getParameter(35375):0;function l(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(g(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(v,M);const b=t.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function u(v){const y=f();v.__bindingPointIndex=y;const x=a.createBuffer(),M=v.__size,b=v.usage;return a.bindBuffer(35345,x),a.bufferData(35345,M,b),a.bindBuffer(35345,null),a.bindBufferBase(35345,y,x),x}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],x=v.uniforms,M=v.__cache;a.bindBuffer(35345,y);for(let b=0,D=x.length;b<D;b++){const C=x[b];if(d(C,b,M)===!0){const w=C.__offset,S=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let z=0;z<S.length;z++){const A=S[z],L=_(A);typeof A=="number"?(C.__data[0]=A,a.bufferSubData(35345,w+I,C.__data)):A.isMatrix3?(C.__data[0]=A.elements[0],C.__data[1]=A.elements[1],C.__data[2]=A.elements[2],C.__data[3]=A.elements[0],C.__data[4]=A.elements[3],C.__data[5]=A.elements[4],C.__data[6]=A.elements[5],C.__data[7]=A.elements[0],C.__data[8]=A.elements[6],C.__data[9]=A.elements[7],C.__data[10]=A.elements[8],C.__data[11]=A.elements[0]):(A.toArray(C.__data,I),I+=L.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,w,C.__data)}}a.bindBuffer(35345,null)}function d(v,y,x){const M=v.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const b=Array.isArray(M)?M:[M],D=[];for(let C=0;C<b.length;C++)D.push(b[C].clone());x[y]=D}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const b=Array.isArray(x[y])?x[y]:[x[y]],D=Array.isArray(M)?M:[M];for(let C=0;C<b.length;C++){const w=b[C];if(w.equals(D[C])===!1)return w.copy(D[C]),!0}}return!1}function g(v){const y=v.uniforms;let x=0;const M=16;let b=0;for(let D=0,C=y.length;D<C;D++){const w=y[D],S={boundary:0,storage:0},I=Array.isArray(w.value)?w.value:[w.value];for(let z=0,A=I.length;z<A;z++){const L=I[z],R=_(L);S.boundary+=R.boundary,S.storage+=R.storage}if(w.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,D>0){b=x%M;const z=M-b;b!==0&&z-S.boundary<0&&(x+=M-b,w.__offset=x)}x+=S.storage}return b=x%M,b>0&&(x+=M-b),v.__size=x,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),a.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const v in i)a.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:l,update:c,dispose:p}}function KM(){const a=eo("canvas");return a.style.display="block",a}class Ip{constructor(t={}){const{canvas:e=KM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=r;let d=null,g=null;const _=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=hs,this.useLegacyLights=!0,this.toneMapping=pi,this.toneMappingExposure=1;const p=this;let v=!1,y=0,x=0,M=null,b=-1,D=null;const C=new ne,w=new ne;let S=null,I=e.width,z=e.height,A=1,L=null,R=null;const N=new ne(0,0,I,z),q=new ne(0,0,I,z);let k=!1;const Z=new ru;let K=!1,ht=!1,G=null;const Y=new fe,J=new U,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ot(){return M===null?A:1}let H=n;function Dt(P,W){for(let Q=0;Q<P.length;Q++){const V=P[Q],nt=e.getContext(V,W);if(nt!==null)return nt}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${iu}`),e.addEventListener("webglcontextlost",Tt,!1),e.addEventListener("webglcontextrestored",Ot,!1),e.addEventListener("webglcontextcreationerror",kt,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),H=Dt(W,P),H===null)throw Dt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Rt,at,xt,rt,X,et,yt,ft,Et,Ct,At,It,_t,F,T,$,lt,ct,pt,O,it,j,gt,bt;function Pt(){Rt=new cy(H),at=new ny(H,Rt,t),Rt.init(at),j=new qM(H,Rt,at),xt=new HM(H,Rt,at),rt=new fy,X=new AM,et=new WM(H,Rt,xt,X,at,j,rt),yt=new sy(p),ft=new ly(p),Et=new S_(H,at),gt=new ty(H,Rt,Et,at),Ct=new uy(H,Et,rt,gt),At=new gy(H,Ct,Et,rt),pt=new my(H,at,et),$=new iy(X),It=new TM(p,yt,ft,Rt,at,gt,$),_t=new $M(p,X),F=new LM,T=new zM(Rt,at),ct=new Qx(p,yt,ft,xt,At,h,l),lt=new GM(p,At,at),bt=new JM(H,rt,at,xt),O=new ey(H,Rt,rt,at),it=new hy(H,Rt,rt,at),rt.programs=It.programs,p.capabilities=at,p.extensions=Rt,p.properties=X,p.renderLists=F,p.shadowMap=lt,p.state=xt,p.info=rt}Pt();const Mt=new ZM(p,H);this.xr=Mt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=Rt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Rt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(P){P!==void 0&&(A=P,this.setSize(I,z,!1))},this.getSize=function(P){return P.set(I,z)},this.setSize=function(P,W,Q=!0){if(Mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=P,z=W,e.width=Math.floor(P*A),e.height=Math.floor(W*A),Q===!0&&(e.style.width=P+"px",e.style.height=W+"px"),this.setViewport(0,0,P,W)},this.getDrawingBufferSize=function(P){return P.set(I*A,z*A).floor()},this.setDrawingBufferSize=function(P,W,Q){I=P,z=W,A=Q,e.width=Math.floor(P*Q),e.height=Math.floor(W*Q),this.setViewport(0,0,P,W)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,W,Q,V){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,W,Q,V),xt.viewport(C.copy(N).multiplyScalar(A).floor())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,W,Q,V){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,W,Q,V),xt.scissor(w.copy(q).multiplyScalar(A).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(P){xt.setScissorTest(k=P)},this.setOpaqueSort=function(P){L=P},this.setTransparentSort=function(P){R=P},this.getClearColor=function(P){return P.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(P=!0,W=!0,Q=!0){let V=0;P&&(V|=16384),W&&(V|=256),Q&&(V|=1024),H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Tt,!1),e.removeEventListener("webglcontextrestored",Ot,!1),e.removeEventListener("webglcontextcreationerror",kt,!1),F.dispose(),T.dispose(),X.dispose(),yt.dispose(),ft.dispose(),At.dispose(),gt.dispose(),bt.dispose(),It.dispose(),Mt.dispose(),Mt.removeEventListener("sessionstart",Lt),Mt.removeEventListener("sessionend",Kt),G&&(G.dispose(),G=null),ie.stop()};function Tt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ot(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=rt.autoReset,W=lt.enabled,Q=lt.autoUpdate,V=lt.needsUpdate,nt=lt.type;Pt(),rt.autoReset=P,lt.enabled=W,lt.autoUpdate=Q,lt.needsUpdate=V,lt.type=nt}function kt(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ce(P){const W=P.target;W.removeEventListener("dispose",ce),B(W)}function B(P){tt(P),X.remove(P)}function tt(P){const W=X.get(P).programs;W!==void 0&&(W.forEach(function(Q){It.releaseProgram(Q)}),P.isShaderMaterial&&It.releaseShaderCache(P))}this.renderBufferDirect=function(P,W,Q,V,nt,Ft){W===null&&(W=st);const Nt=nt.isMesh&&nt.matrixWorld.determinant()<0,zt=hm(P,W,Q,V,nt);xt.setMaterial(V,Nt);let Ut=Q.index,Vt=1;V.wireframe===!0&&(Ut=Ct.getWireframeAttribute(Q),Vt=2);const Gt=Q.drawRange,Ht=Q.attributes.position;let jt=Gt.start*Vt,Fe=(Gt.start+Gt.count)*Vt;Ft!==null&&(jt=Math.max(jt,Ft.start*Vt),Fe=Math.min(Fe,(Ft.start+Ft.count)*Vt)),Ut!==null?(jt=Math.max(jt,0),Fe=Math.min(Fe,Ut.count)):Ht!=null&&(jt=Math.max(jt,0),Fe=Math.min(Fe,Ht.count));const wn=Fe-jt;if(wn<0||wn===1/0)return;gt.setup(nt,V,zt,Q,Ut);let zi,de=O;if(Ut!==null&&(zi=Et.get(Ut),de=it,de.setIndex(zi)),nt.isMesh)V.wireframe===!0?(xt.setLineWidth(V.wireframeLinewidth*ot()),de.setMode(1)):de.setMode(4);else if(nt.isLine){let Xt=V.linewidth;Xt===void 0&&(Xt=1),xt.setLineWidth(Xt*ot()),nt.isLineSegments?de.setMode(1):nt.isLineLoop?de.setMode(2):de.setMode(3)}else nt.isPoints?de.setMode(0):nt.isSprite&&de.setMode(4);if(nt.isInstancedMesh)de.renderInstances(jt,wn,nt.count);else if(Q.isInstancedBufferGeometry){const Xt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ga=Math.min(Q.instanceCount,Xt);de.renderInstances(jt,wn,Ga)}else de.render(jt,wn)},this.compile=function(P,W){function Q(V,nt,Ft){V.transparent===!0&&V.side===ui&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,_o(V,nt,Ft),V.side=Fi,V.needsUpdate=!0,_o(V,nt,Ft),V.side=ui):_o(V,nt,Ft)}g=T.get(P),g.init(),m.push(g),P.traverseVisible(function(V){V.isLight&&V.layers.test(W.layers)&&(g.pushLight(V),V.castShadow&&g.pushShadow(V))}),g.setupLights(p.useLegacyLights),P.traverse(function(V){const nt=V.material;if(nt)if(Array.isArray(nt))for(let Ft=0;Ft<nt.length;Ft++){const Nt=nt[Ft];Q(Nt,P,V)}else Q(nt,P,V)}),m.pop(),g=null};let ut=null;function wt(P){ut&&ut(P)}function Lt(){ie.stop()}function Kt(){ie.start()}const ie=new Ap;ie.setAnimationLoop(wt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(P){ut=P,Mt.setAnimationLoop(P),P===null?ie.stop():ie.start()},Mt.addEventListener("sessionstart",Lt),Mt.addEventListener("sessionend",Kt),this.render=function(P,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Mt.enabled===!0&&Mt.isPresenting===!0&&(Mt.cameraAutoUpdate===!0&&Mt.updateCamera(W),W=Mt.getCamera()),P.isScene===!0&&P.onBeforeRender(p,P,W,M),g=T.get(P,m.length),g.init(),m.push(g),Y.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Z.setFromProjectionMatrix(Y),ht=this.localClippingEnabled,K=$.init(this.clippingPlanes,ht),d=F.get(P,_.length),d.init(),_.push(d),Ce(P,W,0,p.sortObjects),d.finish(),p.sortObjects===!0&&d.sort(L,R),K===!0&&$.beginShadows();const Q=g.state.shadowsArray;if(lt.render(Q,P,W),K===!0&&$.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(d,P),g.setupLights(p.useLegacyLights),W.isArrayCamera){const V=W.cameras;for(let nt=0,Ft=V.length;nt<Ft;nt++){const Nt=V[nt];vi(d,P,Nt,Nt.viewport)}}else vi(d,P,W);M!==null&&(et.updateMultisampleRenderTarget(M),et.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(p,P,W),gt.resetDefaultState(),b=-1,D=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,_.pop(),_.length>0?d=_[_.length-1]:d=null};function Ce(P,W,Q,V){if(P.visible===!1)return;if(P.layers.test(W.layers)){if(P.isGroup)Q=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(W);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){V&&J.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Y);const Nt=At.update(P),zt=P.material;zt.visible&&d.push(P,Nt,zt,Q,J.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==rt.render.frame&&(P.skeleton.update(),P.skeleton.frame=rt.render.frame),!P.frustumCulled||Z.intersectsObject(P))){V&&J.setFromMatrixPosition(P.matrixWorld).applyMatrix4(Y);const Nt=At.update(P),zt=P.material;if(Array.isArray(zt)){const Ut=Nt.groups;for(let Vt=0,Gt=Ut.length;Vt<Gt;Vt++){const Ht=Ut[Vt],jt=zt[Ht.materialIndex];jt&&jt.visible&&d.push(P,Nt,jt,Q,J.z,Ht)}}else zt.visible&&d.push(P,Nt,zt,Q,J.z,null)}}const Ft=P.children;for(let Nt=0,zt=Ft.length;Nt<zt;Nt++)Ce(Ft[Nt],W,Q,V)}function vi(P,W,Q,V){const nt=P.opaque,Ft=P.transmissive,Nt=P.transparent;g.setupLightsView(Q),K===!0&&$.setGlobalState(p.clippingPlanes,Q),Ft.length>0&&ue(nt,Ft,W,Q),V&&xt.viewport(C.copy(V)),nt.length>0&&cn(nt,W,Q),Ft.length>0&&cn(Ft,W,Q),Nt.length>0&&cn(Nt,W,Q),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function ue(P,W,Q,V){if(G===null){const zt=at.isWebGL2;G=new fs(1024,1024,{generateMipmaps:!0,type:Rt.has("EXT_color_buffer_half_float")?Qr:us,minFilter:Kr,samples:zt&&o===!0?4:0})}const nt=p.getRenderTarget();p.setRenderTarget(G),p.clear();const Ft=p.toneMapping;p.toneMapping=pi,cn(P,Q,V),et.updateMultisampleRenderTarget(G),et.updateRenderTargetMipmap(G);let Nt=!1;for(let zt=0,Ut=W.length;zt<Ut;zt++){const Vt=W[zt],Gt=Vt.object,Ht=Vt.geometry,jt=Vt.material,Fe=Vt.group;if(jt.side===ui&&Gt.layers.test(V.layers)){const wn=jt.side;jt.side=qe,jt.needsUpdate=!0,Fn(Gt,Q,V,Ht,jt,Fe),jt.side=wn,jt.needsUpdate=!0,Nt=!0}}Nt===!0&&(et.updateMultisampleRenderTarget(G),et.updateRenderTargetMipmap(G)),p.setRenderTarget(nt),p.toneMapping=Ft}function cn(P,W,Q){const V=W.isScene===!0?W.overrideMaterial:null;for(let nt=0,Ft=P.length;nt<Ft;nt++){const Nt=P[nt],zt=Nt.object,Ut=Nt.geometry,Vt=V===null?Nt.material:V,Gt=Nt.group;zt.layers.test(Q.layers)&&Fn(zt,W,Q,Ut,Vt,Gt)}}function Fn(P,W,Q,V,nt,Ft){P.onBeforeRender(p,W,Q,V,nt,Ft),P.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),nt.onBeforeRender(p,W,Q,V,P,Ft),nt.transparent===!0&&nt.side===ui&&nt.forceSinglePass===!1?(nt.side=qe,nt.needsUpdate=!0,p.renderBufferDirect(Q,W,V,nt,P,Ft),nt.side=Fi,nt.needsUpdate=!0,p.renderBufferDirect(Q,W,V,nt,P,Ft),nt.side=ui):p.renderBufferDirect(Q,W,V,nt,P,Ft),P.onAfterRender(p,W,Q,V,nt,Ft)}function _o(P,W,Q){W.isScene!==!0&&(W=st);const V=X.get(P),nt=g.state.lights,Ft=g.state.shadowsArray,Nt=nt.state.version,zt=It.getParameters(P,nt.state,Ft,W,Q),Ut=It.getProgramCacheKey(zt);let Vt=V.programs;V.environment=P.isMeshStandardMaterial?W.environment:null,V.fog=W.fog,V.envMap=(P.isMeshStandardMaterial?ft:yt).get(P.envMap||V.environment),Vt===void 0&&(P.addEventListener("dispose",ce),Vt=new Map,V.programs=Vt);let Gt=Vt.get(Ut);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===Nt)return Su(P,zt),Gt}else zt.uniforms=It.getUniforms(P),P.onBuild(Q,zt,p),P.onBeforeCompile(zt,p),Gt=It.acquireProgram(zt,Ut),Vt.set(Ut,Gt),V.uniforms=zt.uniforms;const Ht=V.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ht.clippingPlanes=$.uniform),Su(P,zt),V.needsLights=dm(P),V.lightsStateVersion=Nt,V.needsLights&&(Ht.ambientLightColor.value=nt.state.ambient,Ht.lightProbe.value=nt.state.probe,Ht.directionalLights.value=nt.state.directional,Ht.directionalLightShadows.value=nt.state.directionalShadow,Ht.spotLights.value=nt.state.spot,Ht.spotLightShadows.value=nt.state.spotShadow,Ht.rectAreaLights.value=nt.state.rectArea,Ht.ltc_1.value=nt.state.rectAreaLTC1,Ht.ltc_2.value=nt.state.rectAreaLTC2,Ht.pointLights.value=nt.state.point,Ht.pointLightShadows.value=nt.state.pointShadow,Ht.hemisphereLights.value=nt.state.hemi,Ht.directionalShadowMap.value=nt.state.directionalShadowMap,Ht.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ht.spotShadowMap.value=nt.state.spotShadowMap,Ht.spotLightMatrix.value=nt.state.spotLightMatrix,Ht.spotLightMap.value=nt.state.spotLightMap,Ht.pointShadowMap.value=nt.state.pointShadowMap,Ht.pointShadowMatrix.value=nt.state.pointShadowMatrix);const jt=Gt.getUniforms(),Fe=ra.seqWithValue(jt.seq,Ht);return V.currentProgram=Gt,V.uniformsList=Fe,Gt}function Su(P,W){const Q=X.get(P);Q.outputEncoding=W.outputEncoding,Q.instancing=W.instancing,Q.skinning=W.skinning,Q.morphTargets=W.morphTargets,Q.morphNormals=W.morphNormals,Q.morphColors=W.morphColors,Q.morphTargetsCount=W.morphTargetsCount,Q.numClippingPlanes=W.numClippingPlanes,Q.numIntersection=W.numClipIntersection,Q.vertexAlphas=W.vertexAlphas,Q.vertexTangents=W.vertexTangents,Q.toneMapping=W.toneMapping}function hm(P,W,Q,V,nt){W.isScene!==!0&&(W=st),et.resetTextureUnits();const Ft=W.fog,Nt=V.isMeshStandardMaterial?W.environment:null,zt=M===null?p.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:hs,Ut=(V.isMeshStandardMaterial?ft:yt).get(V.envMap||Nt),Vt=V.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Gt=!!V.normalMap&&!!Q.attributes.tangent,Ht=!!Q.morphAttributes.position,jt=!!Q.morphAttributes.normal,Fe=!!Q.morphAttributes.color,wn=V.toneMapped?p.toneMapping:pi,zi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,de=zi!==void 0?zi.length:0,Xt=X.get(V),Ga=g.state.lights;if(K===!0&&(ht===!0||P!==D)){const Ze=P===D&&V.id===b;$.setState(V,P,Ze)}let we=!1;V.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Ga.state.version||Xt.outputEncoding!==zt||nt.isInstancedMesh&&Xt.instancing===!1||!nt.isInstancedMesh&&Xt.instancing===!0||nt.isSkinnedMesh&&Xt.skinning===!1||!nt.isSkinnedMesh&&Xt.skinning===!0||Xt.envMap!==Ut||V.fog===!0&&Xt.fog!==Ft||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==$.numPlanes||Xt.numIntersection!==$.numIntersection)||Xt.vertexAlphas!==Vt||Xt.vertexTangents!==Gt||Xt.morphTargets!==Ht||Xt.morphNormals!==jt||Xt.morphColors!==Fe||Xt.toneMapping!==wn||at.isWebGL2===!0&&Xt.morphTargetsCount!==de)&&(we=!0):(we=!0,Xt.__version=V.version);let Ui=Xt.currentProgram;we===!0&&(Ui=_o(V,W,nt));let bu=!1,_r=!1,Ha=!1;const Ie=Ui.getUniforms(),Bi=Xt.uniforms;if(xt.useProgram(Ui.program)&&(bu=!0,_r=!0,Ha=!0),V.id!==b&&(b=V.id,_r=!0),bu||D!==P){if(Ie.setValue(H,"projectionMatrix",P.projectionMatrix),at.logarithmicDepthBuffer&&Ie.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),D!==P&&(D=P,_r=!0,Ha=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Ze=Ie.map.cameraPosition;Ze!==void 0&&Ze.setValue(H,J.setFromMatrixPosition(P.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ie.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||nt.isSkinnedMesh)&&Ie.setValue(H,"viewMatrix",P.matrixWorldInverse)}if(nt.isSkinnedMesh){Ie.setOptional(H,nt,"bindMatrix"),Ie.setOptional(H,nt,"bindMatrixInverse");const Ze=nt.skeleton;Ze&&(at.floatVertexTextures?(Ze.boneTexture===null&&Ze.computeBoneTexture(),Ie.setValue(H,"boneTexture",Ze.boneTexture,et),Ie.setValue(H,"boneTextureSize",Ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wa=Q.morphAttributes;if((Wa.position!==void 0||Wa.normal!==void 0||Wa.color!==void 0&&at.isWebGL2===!0)&&pt.update(nt,Q,Ui),(_r||Xt.receiveShadow!==nt.receiveShadow)&&(Xt.receiveShadow=nt.receiveShadow,Ie.setValue(H,"receiveShadow",nt.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Bi.envMap.value=Ut,Bi.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),_r&&(Ie.setValue(H,"toneMappingExposure",p.toneMappingExposure),Xt.needsLights&&fm(Bi,Ha),Ft&&V.fog===!0&&_t.refreshFogUniforms(Bi,Ft),_t.refreshMaterialUniforms(Bi,V,A,z,G),ra.upload(H,Xt.uniformsList,Bi,et)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ra.upload(H,Xt.uniformsList,Bi,et),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ie.setValue(H,"center",nt.center),Ie.setValue(H,"modelViewMatrix",nt.modelViewMatrix),Ie.setValue(H,"normalMatrix",nt.normalMatrix),Ie.setValue(H,"modelMatrix",nt.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ze=V.uniformsGroups;for(let qa=0,pm=Ze.length;qa<pm;qa++)if(at.isWebGL2){const Eu=Ze[qa];bt.update(Eu,Ui),bt.bind(Eu,Ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ui}function fm(P,W){P.ambientLightColor.needsUpdate=W,P.lightProbe.needsUpdate=W,P.directionalLights.needsUpdate=W,P.directionalLightShadows.needsUpdate=W,P.pointLights.needsUpdate=W,P.pointLightShadows.needsUpdate=W,P.spotLights.needsUpdate=W,P.spotLightShadows.needsUpdate=W,P.rectAreaLights.needsUpdate=W,P.hemisphereLights.needsUpdate=W}function dm(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,W,Q){X.get(P.texture).__webglTexture=W,X.get(P.depthTexture).__webglTexture=Q;const V=X.get(P);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Q===void 0,V.__autoAllocateDepthBuffer||Rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,W){const Q=X.get(P);Q.__webglFramebuffer=W,Q.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(P,W=0,Q=0){M=P,y=W,x=Q;let V=!0,nt=null,Ft=!1,Nt=!1;if(P){const Ut=X.get(P);Ut.__useDefaultFramebuffer!==void 0?(xt.bindFramebuffer(36160,null),V=!1):Ut.__webglFramebuffer===void 0?et.setupRenderTarget(P):Ut.__hasExternalTextures&&et.rebindTextures(P,X.get(P.texture).__webglTexture,X.get(P.depthTexture).__webglTexture);const Vt=P.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);const Gt=X.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(nt=Gt[W],Ft=!0):at.isWebGL2&&P.samples>0&&et.useMultisampledRTT(P)===!1?nt=X.get(P).__webglMultisampledFramebuffer:nt=Gt,C.copy(P.viewport),w.copy(P.scissor),S=P.scissorTest}else C.copy(N).multiplyScalar(A).floor(),w.copy(q).multiplyScalar(A).floor(),S=k;if(xt.bindFramebuffer(36160,nt)&&at.drawBuffers&&V&&xt.drawBuffers(P,nt),xt.viewport(C),xt.scissor(w),xt.setScissorTest(S),Ft){const Ut=X.get(P.texture);H.framebufferTexture2D(36160,36064,34069+W,Ut.__webglTexture,Q)}else if(Nt){const Ut=X.get(P.texture),Vt=W||0;H.framebufferTextureLayer(36160,36064,Ut.__webglTexture,Q||0,Vt)}b=-1},this.readRenderTargetPixels=function(P,W,Q,V,nt,Ft,Nt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=X.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Nt!==void 0&&(zt=zt[Nt]),zt){xt.bindFramebuffer(36160,zt);try{const Ut=P.texture,Vt=Ut.format,Gt=Ut.type;if(Vt!==An&&j.convert(Vt)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ht=Gt===Qr&&(Rt.has("EXT_color_buffer_half_float")||at.isWebGL2&&Rt.has("EXT_color_buffer_float"));if(Gt!==us&&j.convert(Gt)!==H.getParameter(35738)&&!(Gt===es&&(at.isWebGL2||Rt.has("OES_texture_float")||Rt.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=P.width-V&&Q>=0&&Q<=P.height-nt&&H.readPixels(W,Q,V,nt,j.convert(Vt),j.convert(Gt),Ft)}finally{const Ut=M!==null?X.get(M).__webglFramebuffer:null;xt.bindFramebuffer(36160,Ut)}}},this.copyFramebufferToTexture=function(P,W,Q=0){const V=Math.pow(2,-Q),nt=Math.floor(W.image.width*V),Ft=Math.floor(W.image.height*V);et.setTexture2D(W,0),H.copyTexSubImage2D(3553,Q,0,0,P.x,P.y,nt,Ft),xt.unbindTexture()},this.copyTextureToTexture=function(P,W,Q,V=0){const nt=W.image.width,Ft=W.image.height,Nt=j.convert(Q.format),zt=j.convert(Q.type);et.setTexture2D(Q,0),H.pixelStorei(37440,Q.flipY),H.pixelStorei(37441,Q.premultiplyAlpha),H.pixelStorei(3317,Q.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,V,P.x,P.y,nt,Ft,Nt,zt,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,V,P.x,P.y,W.mipmaps[0].width,W.mipmaps[0].height,Nt,W.mipmaps[0].data):H.texSubImage2D(3553,V,P.x,P.y,Nt,zt,W.image),V===0&&Q.generateMipmaps&&H.generateMipmap(3553),xt.unbindTexture()},this.copyTextureToTexture3D=function(P,W,Q,V,nt=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ft=P.max.x-P.min.x+1,Nt=P.max.y-P.min.y+1,zt=P.max.z-P.min.z+1,Ut=j.convert(V.format),Vt=j.convert(V.type);let Gt;if(V.isData3DTexture)et.setTexture3D(V,0),Gt=32879;else if(V.isDataArrayTexture)et.setTexture2DArray(V,0),Gt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,V.flipY),H.pixelStorei(37441,V.premultiplyAlpha),H.pixelStorei(3317,V.unpackAlignment);const Ht=H.getParameter(3314),jt=H.getParameter(32878),Fe=H.getParameter(3316),wn=H.getParameter(3315),zi=H.getParameter(32877),de=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;H.pixelStorei(3314,de.width),H.pixelStorei(32878,de.height),H.pixelStorei(3316,P.min.x),H.pixelStorei(3315,P.min.y),H.pixelStorei(32877,P.min.z),Q.isDataTexture||Q.isData3DTexture?H.texSubImage3D(Gt,nt,W.x,W.y,W.z,Ft,Nt,zt,Ut,Vt,de.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Gt,nt,W.x,W.y,W.z,Ft,Nt,zt,Ut,de.data)):H.texSubImage3D(Gt,nt,W.x,W.y,W.z,Ft,Nt,zt,Ut,Vt,de),H.pixelStorei(3314,Ht),H.pixelStorei(32878,jt),H.pixelStorei(3316,Fe),H.pixelStorei(3315,wn),H.pixelStorei(32877,zi),nt===0&&V.generateMipmaps&&H.generateMipmap(Gt),xt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?et.setTextureCube(P,0):P.isData3DTexture?et.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?et.setTexture2DArray(P,0):et.setTexture2D(P,0),xt.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,xt.reset(),gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class QM extends Ip{}QM.prototype.isWebGL1Renderer=!0;class tw extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Zn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let r;e?r=e:r=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-r,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===r)return i/(s-1);const u=n[i],h=n[i+1]-u,d=(r-u)/h;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const r=this.getPoint(i),o=this.getPoint(s),l=e||(r.isVector2?new dt:new U);return l.copy(o).sub(r).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],s=[],r=[],o=new U,l=new fe;for(let d=0;d<=t;d++){const g=d/t;i[d]=this.getTangentAt(g,new U)}s[0]=new U,r[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),r[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),r[d]=r[d-1].clone(),o.crossVectors(i[d-1],i[d]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(De(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(o,g))}r[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(De(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),r[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class lu extends Zn{constructor(t=0,e=0,n=1,i=1,s=0,r=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=r,this.aClockwise=o,this.aRotation=l}getPoint(t,e){const n=e||new dt,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const r=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(r?s=0:s=i),this.aClockwise===!0&&!r&&(s===i?s=-i:s=s-i);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,d=c-this.aY;l=h*u-d*f+this.aX,c=h*f+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ew extends lu{constructor(t,e,n,i,s,r){super(t,e,n,n,i,s,r),this.isArcCurve=!0,this.type="ArcCurve"}}function cu(){let a=0,t=0,e=0,n=0;function i(s,r,o,l){a=s,t=o,e=-3*s+3*r-2*o-l,n=2*s-2*r+o+l}return{initCatmullRom:function(s,r,o,l,c){i(r,o,c*(o-s),c*(l-r))},initNonuniformCatmullRom:function(s,r,o,l,c,u,f){let h=(r-s)/c-(o-s)/(c+u)+(o-r)/u,d=(o-r)/u-(l-r)/(u+f)+(l-o)/f;h*=u,d*=u,i(r,o,h,d)},calc:function(s){const r=s*s,o=r*s;return a+t*s+e*r+n*o}}}const Wo=new U,Bl=new cu,kl=new cu,Vl=new cu;class nw extends Zn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,r=(s-(this.closed?0:1))*t;let o=Math.floor(r),l=r-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(Wo.subVectors(i[0],i[1]).add(i[0]),c=Wo);const f=i[o%s],h=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(Wo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=Wo),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d),m=Math.pow(h.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Bl.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,_,m),kl.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,_,m),Vl.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Bl.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),kl.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),Vl.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return n.set(Bl.calc(l),kl.calc(l),Vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function pf(a,t,e,n,i){const s=(n-t)*.5,r=(i-e)*.5,o=a*a,l=a*o;return(2*e-2*n+s+r)*l+(-3*e+3*n-2*s-r)*o+s*a+e}function iw(a,t){const e=1-a;return e*e*t}function sw(a,t){return 2*(1-a)*a*t}function rw(a,t){return a*a*t}function Hr(a,t,e,n){return iw(a,t)+sw(a,e)+rw(a,n)}function ow(a,t){const e=1-a;return e*e*e*t}function aw(a,t){const e=1-a;return 3*e*e*a*t}function lw(a,t){return 3*(1-a)*a*a*t}function cw(a,t){return a*a*a*t}function Wr(a,t,e,n,i){return ow(a,t)+aw(a,e)+lw(a,n)+cw(a,i)}class Np extends Zn{constructor(t=new dt,e=new dt,n=new dt,i=new dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Wr(t,i.x,s.x,r.x,o.x),Wr(t,i.y,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uw extends Zn{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,r=this.v2,o=this.v3;return n.set(Wr(t,i.x,s.x,r.x,o.x),Wr(t,i.y,s.y,r.y,o.y),Wr(t,i.z,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class uu extends Zn{constructor(t=new dt,e=new dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new dt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hw extends Zn{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Op extends Zn{constructor(t=new dt,e=new dt,n=new dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new dt){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Hr(t,i.x,s.x,r.x),Hr(t,i.y,s.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fw extends Zn{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){const n=e,i=this.v0,s=this.v1,r=this.v2;return n.set(Hr(t,i.x,s.x,r.x),Hr(t,i.y,s.y,r.y),Hr(t,i.z,s.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zp extends Zn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new dt){const n=e,i=this.points,s=(i.length-1)*t,r=Math.floor(s),o=s-r,l=i[r===0?r:r-1],c=i[r],u=i[r>i.length-2?i.length-1:r+1],f=i[r>i.length-3?i.length-1:r+2];return n.set(pf(o,l.x,c.x,u.x,f.x),pf(o,l.y,c.y,u.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new dt().fromArray(i))}return this}}var Up=Object.freeze({__proto__:null,ArcCurve:ew,CatmullRomCurve3:nw,CubicBezierCurve:Np,CubicBezierCurve3:uw,EllipseCurve:lu,LineCurve:uu,LineCurve3:hw,QuadraticBezierCurve:Op,QuadraticBezierCurve3:fw,SplineCurve:zp});class dw extends Zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new uu(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const r=i[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-r/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const r=s[i],o=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,l=r.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Up[i.type]().fromJSON(i))}return this}}class Ec extends dw{constructor(t){super(),this.type="Path",this.currentPoint=new dt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new uu(this.currentPoint.clone(),new dt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Op(this.currentPoint.clone(),new dt(t,e),new dt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,r){const o=new Np(this.currentPoint.clone(),new dt(t,e),new dt(n,i),new dt(s,r));return this.curves.push(o),this.currentPoint.set(s,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zp(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,r){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,i,s,r),this}absarc(t,e,n,i,s,r){return this.absellipse(t,e,n,n,i,s,r),this}ellipse(t,e,n,i,s,r,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,i,s,r,o,l),this}absellipse(t,e,n,i,s,r,o,l){const c=new lu(t,e,n,i,s,r,o,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ia extends Yn{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],d=[];let g=0;const _=[],m=n/2;let p=0;v(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ue(f,3)),this.setAttribute("normal",new Ue(h,3)),this.setAttribute("uv",new Ue(d,2));function v(){const x=new U,M=new U;let b=0;const D=(e-t)/n;for(let C=0;C<=s;C++){const w=[],S=C/s,I=S*(e-t)+t;for(let z=0;z<=i;z++){const A=z/i,L=A*l+o,R=Math.sin(L),N=Math.cos(L);M.x=I*R,M.y=-S*n+m,M.z=I*N,f.push(M.x,M.y,M.z),x.set(R,D,N).normalize(),h.push(x.x,x.y,x.z),d.push(A,1-S),w.push(g++)}_.push(w)}for(let C=0;C<i;C++)for(let w=0;w<s;w++){const S=_[w][C],I=_[w+1][C],z=_[w+1][C+1],A=_[w][C+1];u.push(S,I,A),u.push(I,z,A),b+=6}c.addGroup(p,b,0),p+=b}function y(x){const M=g,b=new dt,D=new U;let C=0;const w=x===!0?t:e,S=x===!0?1:-1;for(let z=1;z<=i;z++)f.push(0,m*S,0),h.push(0,S,0),d.push(.5,.5),g++;const I=g;for(let z=0;z<=i;z++){const L=z/i*l+o,R=Math.cos(L),N=Math.sin(L);D.x=w*N,D.y=m*S,D.z=w*R,f.push(D.x,D.y,D.z),h.push(0,S,0),b.x=R*.5+.5,b.y=N*.5*S+.5,d.push(b.x,b.y),g++}for(let z=0;z<i;z++){const A=M+z,L=I+z;x===!0?u.push(L,L+1,A):u.push(L+1,L,A),C+=3}c.addGroup(p,C,x===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}let oa=class extends Ec{constructor(t){super(t),this.uuid=mr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ec().fromJSON(i))}return this}};const pw={triangulate:function(a,t,e=2){const n=t&&t.length,i=n?t[0]*e:a.length;let s=Bp(a,0,i,e,!0);const r=[];if(!s||s.next===s.prev)return r;let o,l,c,u,f,h,d;if(n&&(s=xw(a,t,s,e)),a.length>80*e){o=c=a[0],l=u=a[1];for(let g=e;g<i;g+=e)f=a[g],h=a[g+1],f<o&&(o=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);d=Math.max(c-o,u-l),d=d!==0?32767/d:0}return no(s,r,e,o,l,d,0),r}};function Bp(a,t,e,n,i){let s,r;if(i===Pw(a,t,e,n)>0)for(s=t;s<e;s+=n)r=mf(s,a[s],a[s+1],r);else for(s=e-n;s>=t;s-=n)r=mf(s,a[s],a[s+1],r);return r&&Na(r,r.next)&&(so(r),r=r.next),r}function ms(a,t){if(!a)return a;t||(t=a);let e=a,n;do if(n=!1,!e.steiner&&(Na(e,e.next)||oe(e.prev,e,e.next)===0)){if(so(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function no(a,t,e,n,i,s,r){if(!a)return;!r&&s&&bw(a,n,i,s);let o=a,l,c;for(;a.prev!==a.next;){if(l=a.prev,c=a.next,s?gw(a,n,i,s):mw(a)){t.push(l.i/e|0),t.push(a.i/e|0),t.push(c.i/e|0),so(a),a=c.next,o=c.next;continue}if(a=c,a===o){r?r===1?(a=_w(ms(a),t,e),no(a,t,e,n,i,s,2)):r===2&&vw(a,t,e,n,i,s):no(ms(a),t,e,n,i,s,1);break}}}function mw(a){const t=a.prev,e=a,n=a.next;if(oe(t,e,n)>=0)return!1;const i=t.x,s=e.x,r=n.x,o=t.y,l=e.y,c=n.y,u=i<s?i<r?i:r:s<r?s:r,f=o<l?o<c?o:c:l<c?l:c,h=i>s?i>r?i:r:s>r?s:r,d=o>l?o>c?o:c:l>c?l:c;let g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&qs(i,o,s,l,r,c,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gw(a,t,e,n){const i=a.prev,s=a,r=a.next;if(oe(i,s,r)>=0)return!1;const o=i.x,l=s.x,c=r.x,u=i.y,f=s.y,h=r.y,d=o<l?o<c?o:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,_=o>l?o>c?o:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,p=Dc(d,g,t,e,n),v=Dc(_,m,t,e,n);let y=a.prevZ,x=a.nextZ;for(;y&&y.z>=p&&x&&x.z<=v;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&qs(o,u,l,f,c,h,y.x,y.y)&&oe(y.prev,y,y.next)>=0||(y=y.prevZ,x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&qs(o,u,l,f,c,h,x.x,x.y)&&oe(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=_&&y.y>=g&&y.y<=m&&y!==i&&y!==r&&qs(o,u,l,f,c,h,y.x,y.y)&&oe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;x&&x.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==r&&qs(o,u,l,f,c,h,x.x,x.y)&&oe(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function _w(a,t,e){let n=a;do{const i=n.prev,s=n.next.next;!Na(i,s)&&kp(i,n,n.next,s)&&io(i,s)&&io(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),so(n),so(n.next),n=a=s),n=n.next}while(n!==a);return ms(n)}function vw(a,t,e,n,i,s){let r=a;do{let o=r.next.next;for(;o!==r.prev;){if(r.i!==o.i&&Cw(r,o)){let l=Vp(r,o);r=ms(r,r.next),l=ms(l,l.next),no(r,t,e,n,i,s,0),no(l,t,e,n,i,s,0);return}o=o.next}r=r.next}while(r!==a)}function xw(a,t,e,n){const i=[];let s,r,o,l,c;for(s=0,r=t.length;s<r;s++)o=t[s]*n,l=s<r-1?t[s+1]*n:a.length,c=Bp(a,o,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Dw(c));for(i.sort(yw),s=0;s<i.length;s++)e=Mw(i[s],e);return e}function yw(a,t){return a.x-t.x}function Mw(a,t){const e=ww(a,t);if(!e)return t;const n=Vp(e,a);return ms(n,n.next),ms(e,e.next)}function ww(a,t){let e=t,n=-1/0,i;const s=a.x,r=a.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=s&&h>n&&(n=h,i=e.x<e.next.x?e:e.next,h===s))return i}e=e.next}while(e!==t);if(!i)return null;const o=i,l=i.x,c=i.y;let u=1/0,f;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&qs(r<c?s:n,r,l,c,r<c?n:s,r,e.x,e.y)&&(f=Math.abs(r-e.y)/(s-e.x),io(e,a)&&(f<u||f===u&&(e.x>i.x||e.x===i.x&&Sw(i,e)))&&(i=e,u=f)),e=e.next;while(e!==o);return i}function Sw(a,t){return oe(a.prev,a,t.prev)<0&&oe(t.next,a,a.next)<0}function bw(a,t,e,n){let i=a;do i.z===0&&(i.z=Dc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==a);i.prevZ.nextZ=null,i.prevZ=null,Ew(i)}function Ew(a){let t,e,n,i,s,r,o,l,c=1;do{for(e=a,a=null,s=null,r=0;e;){for(r++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,o--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:a=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(r>1);return a}function Dc(a,t,e,n,i){return a=(a-e)*i|0,t=(t-n)*i|0,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,a|t<<1}function Dw(a){let t=a,e=a;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==a);return e}function qs(a,t,e,n,i,s,r,o){return(i-r)*(t-o)>=(a-r)*(s-o)&&(a-r)*(n-o)>=(e-r)*(t-o)&&(e-r)*(s-o)>=(i-r)*(n-o)}function Cw(a,t){return a.next.i!==t.i&&a.prev.i!==t.i&&!Tw(a,t)&&(io(a,t)&&io(t,a)&&Aw(a,t)&&(oe(a.prev,a,t.prev)||oe(a,t.prev,t))||Na(a,t)&&oe(a.prev,a,a.next)>0&&oe(t.prev,t,t.next)>0)}function oe(a,t,e){return(t.y-a.y)*(e.x-t.x)-(t.x-a.x)*(e.y-t.y)}function Na(a,t){return a.x===t.x&&a.y===t.y}function kp(a,t,e,n){const i=Xo(oe(a,t,e)),s=Xo(oe(a,t,n)),r=Xo(oe(e,n,a)),o=Xo(oe(e,n,t));return!!(i!==s&&r!==o||i===0&&qo(a,e,t)||s===0&&qo(a,n,t)||r===0&&qo(e,a,n)||o===0&&qo(e,t,n))}function qo(a,t,e){return t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)}function Xo(a){return a>0?1:a<0?-1:0}function Tw(a,t){let e=a;do{if(e.i!==a.i&&e.next.i!==a.i&&e.i!==t.i&&e.next.i!==t.i&&kp(e,e.next,a,t))return!0;e=e.next}while(e!==a);return!1}function io(a,t){return oe(a.prev,a,a.next)<0?oe(a,t,a.next)>=0&&oe(a,a.prev,t)>=0:oe(a,t,a.prev)<0||oe(a,a.next,t)<0}function Aw(a,t){let e=a,n=!1;const i=(a.x+t.x)/2,s=(a.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==a);return n}function Vp(a,t){const e=new Cc(a.i,a.x,a.y),n=new Cc(t.i,t.x,t.y),i=a.next,s=t.prev;return a.next=t,t.prev=a,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function mf(a,t,e,n){const i=new Cc(a,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function so(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Cc(a,t,e){this.i=a,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Pw(a,t,e,n){let i=0;for(let s=t,r=e-n;s<e;s+=n)i+=(a[r]-a[s])*(a[s+1]+a[r+1]),r=s;return i}class er{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return er.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];gf(t),_f(n,t);let r=t.length;e.forEach(gf);for(let l=0;l<e.length;l++)i.push(r),r+=e[l].length,_f(n,e[l]);const o=pw.triangulate(n,i);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function gf(a){const t=a.length;t>2&&a[t-1].equals(a[0])&&a.pop()}function _f(a,t){for(let e=0;e<t.length;e++)a.push(t[e].x),a.push(t[e].y)}class hu extends Yn{constructor(t=new oa([new dt(.5,.5),new dt(-.5,.5),new dt(-.5,-.5),new dt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];r(c)}this.setAttribute("position",new Ue(i,3)),this.setAttribute("uv",new Ue(s,2)),this.computeVertexNormals();function r(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let h=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Lw;let y,x=!1,M,b,D,C;p&&(y=p.getSpacedPoints(u),x=!0,h=!1,M=p.computeFrenetFrames(u,!1),b=new U,D=new U,C=new U),h||(m=0,d=0,g=0,_=0);const w=o.extractPoints(c);let S=w.shape;const I=w.holes;if(!er.isClockWise(S)){S=S.reverse();for(let rt=0,X=I.length;rt<X;rt++){const et=I[rt];er.isClockWise(et)&&(I[rt]=et.reverse())}}const A=er.triangulateShape(S,I),L=S;for(let rt=0,X=I.length;rt<X;rt++){const et=I[rt];S=S.concat(et)}function R(rt,X,et){return X||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(X,et)}const N=S.length,q=A.length;function k(rt,X,et){let yt,ft,Et;const Ct=rt.x-X.x,At=rt.y-X.y,It=et.x-rt.x,_t=et.y-rt.y,F=Ct*Ct+At*At,T=Ct*_t-At*It;if(Math.abs(T)>Number.EPSILON){const $=Math.sqrt(F),lt=Math.sqrt(It*It+_t*_t),ct=X.x-At/$,pt=X.y+Ct/$,O=et.x-_t/lt,it=et.y+It/lt,j=((O-ct)*_t-(it-pt)*It)/(Ct*_t-At*It);yt=ct+Ct*j-rt.x,ft=pt+At*j-rt.y;const gt=yt*yt+ft*ft;if(gt<=2)return new dt(yt,ft);Et=Math.sqrt(gt/2)}else{let $=!1;Ct>Number.EPSILON?It>Number.EPSILON&&($=!0):Ct<-Number.EPSILON?It<-Number.EPSILON&&($=!0):Math.sign(At)===Math.sign(_t)&&($=!0),$?(yt=-At,ft=Ct,Et=Math.sqrt(F)):(yt=Ct,ft=At,Et=Math.sqrt(F/2))}return new dt(yt/Et,ft/Et)}const Z=[];for(let rt=0,X=L.length,et=X-1,yt=rt+1;rt<X;rt++,et++,yt++)et===X&&(et=0),yt===X&&(yt=0),Z[rt]=k(L[rt],L[et],L[yt]);const K=[];let ht,G=Z.concat();for(let rt=0,X=I.length;rt<X;rt++){const et=I[rt];ht=[];for(let yt=0,ft=et.length,Et=ft-1,Ct=yt+1;yt<ft;yt++,Et++,Ct++)Et===ft&&(Et=0),Ct===ft&&(Ct=0),ht[yt]=k(et[yt],et[Et],et[Ct]);K.push(ht),G=G.concat(ht)}for(let rt=0;rt<m;rt++){const X=rt/m,et=d*Math.cos(X*Math.PI/2),yt=g*Math.sin(X*Math.PI/2)+_;for(let ft=0,Et=L.length;ft<Et;ft++){const Ct=R(L[ft],Z[ft],yt);H(Ct.x,Ct.y,-et)}for(let ft=0,Et=I.length;ft<Et;ft++){const Ct=I[ft];ht=K[ft];for(let At=0,It=Ct.length;At<It;At++){const _t=R(Ct[At],ht[At],yt);H(_t.x,_t.y,-et)}}}const Y=g+_;for(let rt=0;rt<N;rt++){const X=h?R(S[rt],G[rt],Y):S[rt];x?(D.copy(M.normals[0]).multiplyScalar(X.x),b.copy(M.binormals[0]).multiplyScalar(X.y),C.copy(y[0]).add(D).add(b),H(C.x,C.y,C.z)):H(X.x,X.y,0)}for(let rt=1;rt<=u;rt++)for(let X=0;X<N;X++){const et=h?R(S[X],G[X],Y):S[X];x?(D.copy(M.normals[rt]).multiplyScalar(et.x),b.copy(M.binormals[rt]).multiplyScalar(et.y),C.copy(y[rt]).add(D).add(b),H(C.x,C.y,C.z)):H(et.x,et.y,f/u*rt)}for(let rt=m-1;rt>=0;rt--){const X=rt/m,et=d*Math.cos(X*Math.PI/2),yt=g*Math.sin(X*Math.PI/2)+_;for(let ft=0,Et=L.length;ft<Et;ft++){const Ct=R(L[ft],Z[ft],yt);H(Ct.x,Ct.y,f+et)}for(let ft=0,Et=I.length;ft<Et;ft++){const Ct=I[ft];ht=K[ft];for(let At=0,It=Ct.length;At<It;At++){const _t=R(Ct[At],ht[At],yt);x?H(_t.x,_t.y+y[u-1].y,y[u-1].x+et):H(_t.x,_t.y,f+et)}}}J(),st();function J(){const rt=i.length/3;if(h){let X=0,et=N*X;for(let yt=0;yt<q;yt++){const ft=A[yt];Dt(ft[2]+et,ft[1]+et,ft[0]+et)}X=u+m*2,et=N*X;for(let yt=0;yt<q;yt++){const ft=A[yt];Dt(ft[0]+et,ft[1]+et,ft[2]+et)}}else{for(let X=0;X<q;X++){const et=A[X];Dt(et[2],et[1],et[0])}for(let X=0;X<q;X++){const et=A[X];Dt(et[0]+N*u,et[1]+N*u,et[2]+N*u)}}n.addGroup(rt,i.length/3-rt,0)}function st(){const rt=i.length/3;let X=0;ot(L,X),X+=L.length;for(let et=0,yt=I.length;et<yt;et++){const ft=I[et];ot(ft,X),X+=ft.length}n.addGroup(rt,i.length/3-rt,1)}function ot(rt,X){let et=rt.length;for(;--et>=0;){const yt=et;let ft=et-1;ft<0&&(ft=rt.length-1);for(let Et=0,Ct=u+m*2;Et<Ct;Et++){const At=N*Et,It=N*(Et+1),_t=X+yt+At,F=X+ft+At,T=X+ft+It,$=X+yt+It;Rt(_t,F,T,$)}}}function H(rt,X,et){l.push(rt),l.push(X),l.push(et)}function Dt(rt,X,et){at(rt),at(X),at(et);const yt=i.length/3,ft=v.generateTopUV(n,i,yt-3,yt-2,yt-1);xt(ft[0]),xt(ft[1]),xt(ft[2])}function Rt(rt,X,et,yt){at(rt),at(X),at(yt),at(X),at(et),at(yt);const ft=i.length/3,Et=v.generateSideWallUV(n,i,ft-6,ft-3,ft-2,ft-1);xt(Et[0]),xt(Et[1]),xt(Et[3]),xt(Et[1]),xt(Et[2]),xt(Et[3])}function at(rt){i.push(l[rt*3+0]),i.push(l[rt*3+1]),i.push(l[rt*3+2])}function xt(rt){s.push(rt.x),s.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rw(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Up[i.type]().fromJSON(i)),new hu(n,t.options)}}const Lw={generateTopUV:function(a,t,e,n,i){const s=t[e*3],r=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[i*3],u=t[i*3+1];return[new dt(s,r),new dt(o,l),new dt(c,u)]},generateSideWallUV:function(a,t,e,n,i,s){const r=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],u=t[n*3+1],f=t[n*3+2],h=t[i*3],d=t[i*3+1],g=t[i*3+2],_=t[s*3],m=t[s*3+1],p=t[s*3+2];return Math.abs(o-u)<Math.abs(r-c)?[new dt(r,1-l),new dt(c,1-f),new dt(h,1-g),new dt(_,1-p)]:[new dt(o,1-l),new dt(u,1-f),new dt(d,1-g),new dt(m,1-p)]}};function Rw(a,t,e){if(e.shapes=[],Array.isArray(a))for(let n=0,i=a.length;n<i;n++){const s=a[n];e.shapes.push(s.uuid)}else e.shapes.push(a.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class uo extends Yn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(r+o,Math.PI);let c=0;const u=[],f=new U,h=new U,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const v=[],y=p/n;let x=0;p===0&&r===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){const b=M/e;f.x=-t*Math.cos(i+b*s)*Math.sin(r+y*o),f.y=t*Math.cos(r+y*o),f.z=t*Math.sin(i+b*s)*Math.sin(r+y*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(b+x,1-y),v.push(c++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<e;v++){const y=u[p][v+1],x=u[p][v],M=u[p+1][v],b=u[p+1][v+1];(p!==0||r>0)&&d.push(y,x,b),(p!==n-1||l<Math.PI)&&d.push(x,M,b)}this.setIndex(d),this.setAttribute("position",new Ue(g,3)),this.setAttribute("normal",new Ue(_,3)),this.setAttribute("uv",new Ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new uo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Oa extends co{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gp,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const xa={enabled:!1,files:{},add:function(a,t){this.enabled!==!1&&(this.files[a]=t)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class Fw{constructor(t,e,n){const i=this;let s=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Iw=new Fw;class za{constructor(t){this.manager=t!==void 0?t:Iw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const ni={};class Nw extends Error{constructor(t,e){super(t),this.response=e}}class Ow extends za{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=xa.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(ni[t]!==void 0){ni[t].push({onLoad:e,onProgress:n,onError:i});return}ni[t]=[],ni[t].push({onLoad:e,onProgress:n,onError:i});const r=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ni[t],f=c.body.getReader(),h=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let _=0;const m=new ReadableStream({start(p){v();function v(){f.read().then(({done:y,value:x})=>{if(y)p.close();else{_+=x.byteLength;const M=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let b=0,D=u.length;b<D;b++){const C=u[b];C.onProgress&&C.onProgress(M)}p.enqueue(x),v()}})}}});return new Response(m)}else throw new Nw(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(g=>d.decode(g))}}}).then(c=>{xa.add(t,c);const u=ni[t];delete ni[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=ni[t];if(u===void 0)throw this.manager.itemError(t),c;delete ni[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class zw extends za{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=xa.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const o=eo("img");function l(){u(),xa.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class Gp extends za{constructor(t){super(t)}load(t,e,n,i){const s=new Xe,r=new zw(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Hp extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Gl=new fe,vf=new U,xf=new U;class Uw{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ru,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;vf.setFromMatrixPosition(t.matrixWorld),e.position.copy(vf),xf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(xf),e.updateMatrixWorld(),Gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yf=new fe,Er=new U,Hl=new U;class Bw extends Uw{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new dt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Er.setFromMatrixPosition(t.matrixWorld),n.position.copy(Er),Hl.copy(n.position),Hl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Hl),n.updateMatrixWorld(),i.makeTranslation(-Er.x,-Er.y,-Er.z),yf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yf)}}class Wp extends Hp{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Bw}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kw extends Hp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Mf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Vw{constructor(){this.type="ShapePath",this.color=new Zt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ec,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,r){return this.currentPath.bezierCurveTo(t,e,n,i,s,r),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t){function e(p){const v=[];for(let y=0,x=p.length;y<x;y++){const M=p[y],b=new oa;b.curves=M.curves,v.push(b)}return v}function n(p,v){const y=v.length;let x=!1;for(let M=y-1,b=0;b<y;M=b++){let D=v[M],C=v[b],w=C.x-D.x,S=C.y-D.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(D=v[b],w=-w,C=v[M],S=-S),p.y<D.y||p.y>C.y)continue;if(p.y===D.y){if(p.x===D.x)return!0}else{const I=S*(p.x-D.x)-w*(p.y-D.y);if(I===0)return!0;if(I<0)continue;x=!x}}else{if(p.y!==D.y)continue;if(C.x<=p.x&&p.x<=D.x||D.x<=p.x&&p.x<=C.x)return!0}}return x}const i=er.isClockWise,s=this.subPaths;if(s.length===0)return[];let r,o,l;const c=[];if(s.length===1)return o=s[0],l=new oa,l.curves=o.curves,c.push(l),c;let u=!i(s[0].getPoints());u=t?!u:u;const f=[],h=[];let d=[],g=0,_;h[g]=void 0,d[g]=[];for(let p=0,v=s.length;p<v;p++)o=s[p],_=o.getPoints(),r=i(_),r=t?!r:r,r?(!u&&h[g]&&g++,h[g]={s:new oa,p:_},h[g].s.curves=o.curves,u&&g++,d[g]=[]):d[g].push({h:o,p:_[0]});if(!h[0])return e(s);if(h.length>1){let p=!1,v=0;for(let y=0,x=h.length;y<x;y++)f[y]=[];for(let y=0,x=h.length;y<x;y++){const M=d[y];for(let b=0;b<M.length;b++){const D=M[b];let C=!0;for(let w=0;w<h.length;w++)n(D.p,h[w].p)&&(y!==w&&v++,C?(C=!1,f[w].push(D)):p=!0);C&&f[y].push(D)}}v>0&&p===!1&&(d=f)}let m;for(let p=0,v=h.length;p<v;p++){l=h[p].s,c.push(l),m=d[p];for(let y=0,x=m.length;y<x;y++)l.holes.push(m[y].h)}return c}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:iu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=iu);class qp extends za{constructor(t){super(t)}load(t,e,n,i){const s=this,r=new Ow(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(t,function(o){const l=s.parse(JSON.parse(o));e&&e(l)},n,i)}parse(t){return new Gw(t)}}class Gw{constructor(t){this.isFont=!0,this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Hw(t,e,this.data);for(let s=0,r=i.length;s<r;s++)n.push(...i[s].toShapes());return n}}function Hw(a,t,e){const n=Array.from(a),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,r=[];let o=0,l=0;for(let c=0;c<n.length;c++){const u=n[c];if(u===`
`)o=0,l-=s;else{const f=Ww(u,i,o,l,e);o+=f.offsetX,r.push(f.path)}}return r}function Ww(a,t,e,n,i){const s=i.glyphs[a]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+a+'" does not exists in font family '+i.familyName+".");return}const r=new Vw;let o,l,c,u,f,h,d,g;if(s.o){const _=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,p=_.length;m<p;)switch(_[m++]){case"m":o=_[m++]*t+e,l=_[m++]*t+n,r.moveTo(o,l);break;case"l":o=_[m++]*t+e,l=_[m++]*t+n,r.lineTo(o,l);break;case"q":c=_[m++]*t+e,u=_[m++]*t+n,f=_[m++]*t+e,h=_[m++]*t+n,r.quadraticCurveTo(f,h,c,u);break;case"b":c=_[m++]*t+e,u=_[m++]*t+n,f=_[m++]*t+e,h=_[m++]*t+n,d=_[m++]*t+e,g=_[m++]*t+n,r.bezierCurveTo(f,h,d,g,c,u);break}}return{offsetX:s.ha*t,path:r}}class Or extends hu{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1),super(i,e)}this.type="TextGeometry"}}const wf={type:"change"},Wl={type:"start"},Sf={type:"end"};class qw extends _s{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xs.ROTATE,MIDDLE:xs.DOLLY,RIGHT:xs.PAN},this.touches={ONE:ys.ROTATE,TWO:ys.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(O){O.addEventListener("keydown",It),this._domElementKeyEvents=O},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",It),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(wf),n.update(),s=i.NONE},this.update=function(){const O=new U,it=new ds().setFromUnitVectors(t.up,new U(0,1,0)),j=it.clone().invert(),gt=new U,bt=new ds,Pt=2*Math.PI;return function(){const Tt=n.object.position;O.copy(Tt).sub(n.target),O.applyQuaternion(it),o.setFromVector3(O),n.autoRotate&&s===i.NONE&&w(D()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Ot=n.minAzimuthAngle,kt=n.maxAzimuthAngle;return isFinite(Ot)&&isFinite(kt)&&(Ot<-Math.PI?Ot+=Pt:Ot>Math.PI&&(Ot-=Pt),kt<-Math.PI?kt+=Pt:kt>Math.PI&&(kt-=Pt),Ot<=kt?o.theta=Math.max(Ot,Math.min(kt,o.theta)):o.theta=o.theta>(Ot+kt)/2?Math.max(Ot,o.theta):Math.min(kt,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),O.setFromSpherical(o),O.applyQuaternion(j),Tt.copy(n.target).add(O),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||gt.distanceToSquared(n.object.position)>r||8*(1-bt.dot(n.object.quaternion))>r?(n.dispatchEvent(wf),gt.copy(n.object.position),bt.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",T),n.domElement.removeEventListener("pointerdown",et),n.domElement.removeEventListener("pointercancel",ft),n.domElement.removeEventListener("wheel",At),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",ft),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",It),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new Mf,l=new Mf;let c=1;const u=new U;let f=!1;const h=new dt,d=new dt,g=new dt,_=new dt,m=new dt,p=new dt,v=new dt,y=new dt,x=new dt,M=[],b={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function C(){return Math.pow(.95,n.zoomSpeed)}function w(O){l.theta-=O}function S(O){l.phi-=O}const I=function(){const O=new U;return function(j,gt){O.setFromMatrixColumn(gt,0),O.multiplyScalar(-j),u.add(O)}}(),z=function(){const O=new U;return function(j,gt){n.screenSpacePanning===!0?O.setFromMatrixColumn(gt,1):(O.setFromMatrixColumn(gt,0),O.crossVectors(n.object.up,O)),O.multiplyScalar(j),u.add(O)}}(),A=function(){const O=new U;return function(j,gt){const bt=n.domElement;if(n.object.isPerspectiveCamera){const Pt=n.object.position;O.copy(Pt).sub(n.target);let Mt=O.length();Mt*=Math.tan(n.object.fov/2*Math.PI/180),I(2*j*Mt/bt.clientHeight,n.object.matrix),z(2*gt*Mt/bt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(j*(n.object.right-n.object.left)/n.object.zoom/bt.clientWidth,n.object.matrix),z(gt*(n.object.top-n.object.bottom)/n.object.zoom/bt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(O){n.object.isPerspectiveCamera?c/=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*O)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function R(O){n.object.isPerspectiveCamera?c*=O:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/O)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function N(O){h.set(O.clientX,O.clientY)}function q(O){v.set(O.clientX,O.clientY)}function k(O){_.set(O.clientX,O.clientY)}function Z(O){d.set(O.clientX,O.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const it=n.domElement;w(2*Math.PI*g.x/it.clientHeight),S(2*Math.PI*g.y/it.clientHeight),h.copy(d),n.update()}function K(O){y.set(O.clientX,O.clientY),x.subVectors(y,v),x.y>0?L(C()):x.y<0&&R(C()),v.copy(y),n.update()}function ht(O){m.set(O.clientX,O.clientY),p.subVectors(m,_).multiplyScalar(n.panSpeed),A(p.x,p.y),_.copy(m),n.update()}function G(O){O.deltaY<0?R(C()):O.deltaY>0&&L(C()),n.update()}function Y(O){let it=!1;switch(O.code){case n.keys.UP:O.ctrlKey||O.metaKey||O.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,n.keyPanSpeed),it=!0;break;case n.keys.BOTTOM:O.ctrlKey||O.metaKey||O.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,-n.keyPanSpeed),it=!0;break;case n.keys.LEFT:O.ctrlKey||O.metaKey||O.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(n.keyPanSpeed,0),it=!0;break;case n.keys.RIGHT:O.ctrlKey||O.metaKey||O.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(-n.keyPanSpeed,0),it=!0;break}it&&(O.preventDefault(),n.update())}function J(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const O=.5*(M[0].pageX+M[1].pageX),it=.5*(M[0].pageY+M[1].pageY);h.set(O,it)}}function st(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const O=.5*(M[0].pageX+M[1].pageX),it=.5*(M[0].pageY+M[1].pageY);_.set(O,it)}}function ot(){const O=M[0].pageX-M[1].pageX,it=M[0].pageY-M[1].pageY,j=Math.sqrt(O*O+it*it);v.set(0,j)}function H(){n.enableZoom&&ot(),n.enablePan&&st()}function Dt(){n.enableZoom&&ot(),n.enableRotate&&J()}function Rt(O){if(M.length==1)d.set(O.pageX,O.pageY);else{const j=pt(O),gt=.5*(O.pageX+j.x),bt=.5*(O.pageY+j.y);d.set(gt,bt)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const it=n.domElement;w(2*Math.PI*g.x/it.clientHeight),S(2*Math.PI*g.y/it.clientHeight),h.copy(d)}function at(O){if(M.length===1)m.set(O.pageX,O.pageY);else{const it=pt(O),j=.5*(O.pageX+it.x),gt=.5*(O.pageY+it.y);m.set(j,gt)}p.subVectors(m,_).multiplyScalar(n.panSpeed),A(p.x,p.y),_.copy(m)}function xt(O){const it=pt(O),j=O.pageX-it.x,gt=O.pageY-it.y,bt=Math.sqrt(j*j+gt*gt);y.set(0,bt),x.set(0,Math.pow(y.y/v.y,n.zoomSpeed)),L(x.y),v.copy(y)}function rt(O){n.enableZoom&&xt(O),n.enablePan&&at(O)}function X(O){n.enableZoom&&xt(O),n.enableRotate&&Rt(O)}function et(O){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(O.pointerId),n.domElement.addEventListener("pointermove",yt),n.domElement.addEventListener("pointerup",ft)),$(O),O.pointerType==="touch"?_t(O):Et(O))}function yt(O){n.enabled!==!1&&(O.pointerType==="touch"?F(O):Ct(O))}function ft(O){lt(O),M.length===0&&(n.domElement.releasePointerCapture(O.pointerId),n.domElement.removeEventListener("pointermove",yt),n.domElement.removeEventListener("pointerup",ft)),n.dispatchEvent(Sf),s=i.NONE}function Et(O){let it;switch(O.button){case 0:it=n.mouseButtons.LEFT;break;case 1:it=n.mouseButtons.MIDDLE;break;case 2:it=n.mouseButtons.RIGHT;break;default:it=-1}switch(it){case xs.DOLLY:if(n.enableZoom===!1)return;q(O),s=i.DOLLY;break;case xs.ROTATE:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enablePan===!1)return;k(O),s=i.PAN}else{if(n.enableRotate===!1)return;N(O),s=i.ROTATE}break;case xs.PAN:if(O.ctrlKey||O.metaKey||O.shiftKey){if(n.enableRotate===!1)return;N(O),s=i.ROTATE}else{if(n.enablePan===!1)return;k(O),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Wl)}function Ct(O){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Z(O);break;case i.DOLLY:if(n.enableZoom===!1)return;K(O);break;case i.PAN:if(n.enablePan===!1)return;ht(O);break}}function At(O){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(O.preventDefault(),n.dispatchEvent(Wl),G(O),n.dispatchEvent(Sf))}function It(O){n.enabled===!1||n.enablePan===!1||Y(O)}function _t(O){switch(ct(O),M.length){case 1:switch(n.touches.ONE){case ys.ROTATE:if(n.enableRotate===!1)return;J(),s=i.TOUCH_ROTATE;break;case ys.PAN:if(n.enablePan===!1)return;st(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ys.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;H(),s=i.TOUCH_DOLLY_PAN;break;case ys.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Dt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Wl)}function F(O){switch(ct(O),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Rt(O),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(O),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;rt(O),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;X(O),n.update();break;default:s=i.NONE}}function T(O){n.enabled!==!1&&O.preventDefault()}function $(O){M.push(O)}function lt(O){delete b[O.pointerId];for(let it=0;it<M.length;it++)if(M[it].pointerId==O.pointerId){M.splice(it,1);return}}function ct(O){let it=b[O.pointerId];it===void 0&&(it=new dt,b[O.pointerId]=it),it.set(O.pageX,O.pageY)}function pt(O){const it=O.pointerId===M[0].pointerId?M[1]:M[0];return b[it.pointerId]}n.domElement.addEventListener("contextmenu",T),n.domElement.addEventListener("pointerdown",et),n.domElement.addEventListener("pointercancel",ft),n.domElement.addEventListener("wheel",At,{passive:!1}),this.update()}}class Pn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new E);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new E);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Pn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],l=n[2],c=n[3],u=n[4],f=n[5],h=n[6],d=n[7],g=n[8],_=i[0],m=i[1],p=i[2],v=i[3],y=i[4],x=i[5],M=i[6],b=i[7],D=i[8];return s[0]=r*_+o*v+l*M,s[1]=r*m+o*y+l*b,s[2]=r*p+o*x+l*D,s[3]=c*_+u*v+f*M,s[4]=c*m+u*y+f*b,s[5]=c*p+u*x+f*D,s[6]=h*_+d*v+g*M,s[7]=h*m+d*y+g*b,s[8]=h*p+d*x+g*D,e}scale(t,e){e===void 0&&(e=new Pn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new E);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let l=3;const c=l;let u;const f=4;let h;do{if(r=c-l,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){u=f;do h=f-u,s[h+i*r]+=s[h+i*o];while(--u);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const d=s[r+i*o]/s[r+i*r];u=f;do h=f-u,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*d;while(--u)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Pn);const e=3,n=6,i=Xw;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const l=o;let c;const u=n;let f;do{if(s=l-o,i[s+n*s]===0){for(r=s+1;r<l;r++)if(i[s+n*r]!==0){c=u;do f=u-c,i[f+n*s]+=i[f+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<l;r++){const h=i[s+n*r]/i[s+n*s];c=u;do f=u-c,i[f+n*r]=f<=s?0:i[f+n*r]-i[f+n*s]*h;while(--c)}}while(--o);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];c=n;do f=n-c,i[f+n*r]=i[f+n*r]-i[f+n*s]*h;while(--c)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do f=n-c,i[f+n*s]=i[f+n*s]*h;while(--c)}while(s--);s=2;do{r=2;do{if(f=i[e+r+n*s],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,f)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,l=i+i,c=e*r,u=e*o,f=e*l,h=n*o,d=n*l,g=i*l,_=s*r,m=s*o,p=s*l,v=this.elements;return v[3*0+0]=1-(h+g),v[3*0+1]=u-p,v[3*0+2]=f+m,v[3*1+0]=u+p,v[3*1+1]=1-(c+g),v[3*1+2]=d-_,v[3*2+0]=f-m,v[3*2+1]=d+_,v[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Pn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Xw=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class E{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z;return e.x=o*s-l*i,e.y=l*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new E(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new E(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Pn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new E);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new E);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new E),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new E),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new E),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Yw,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=jw;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(bf),bf.almostEquals(t,e)}clone(){return new E(this.x,this.y,this.z)}}E.ZERO=new E(0,0,0);E.UNIT_X=new E(1,0,0);E.UNIT_Y=new E(0,1,0);E.UNIT_Z=new E(0,0,1);const Yw=new E,jw=new E,bf=new E;class an{constructor(t){t===void 0&&(t={}),this.lowerBound=new E,this.upperBound=new E,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let l=1;l<t.length;l++){let c=t[l];o&&(o.vmult(c,Ef),c=Ef),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new an().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,l){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),o.set(c.x,c.y,u.z),l.copy(u)}toLocalFrame(t,e){const n=Df,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(i,s,r,o,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Df,i=n[0],s=n[1],r=n[2],o=n[3],l=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(i,s,r,o,l,c,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,f=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,d=Math.max(Math.max(Math.min(o,l),Math.min(c,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(o,l),Math.max(c,u)),Math.max(f,h));return!(g<0||d>g)}}const Ef=new E,Df=[new E,new E,new E,new E,new E,new E,new E,new E];class Cf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Xp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class _e{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new E),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=Zw,i=$w;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new _e);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,l=t.y,c=t.z,u=t.w;return e.x=n*u+r*o+i*c-s*l,e.y=i*u+r*l+s*o-n*c,e.z=s*u+r*c+n*l-i*o,e.w=r*u-n*o-i*l-s*c,e}inverse(t){t===void 0&&(t=new _e);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new _e),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new E);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,l=this.z,c=this.w,u=c*n+o*s-l*i,f=c*i+l*n-r*s,h=c*s+r*i-o*n,d=-r*n-o*i-l*s;return e.x=u*c+d*-r+f*-l-h*-o,e.y=f*c+d*-o+h*-r-u*-l,e.z=h*c+d*-l+u*-o-f*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,l=this.z,c=this.w;switch(e){case"YZX":const u=r*o+l*c;if(u>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const f=r*r,h=o*o,d=l*l;n=Math.atan2(2*o*c-2*r*l,1-2*h-2*d),i=Math.asin(2*u),s=Math.atan2(2*r*c-2*o*l,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=l*r*o+s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o-l*c*u):i==="YXZ"?(this.x=l*r*o+s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o+l*c*u):i==="ZXY"?(this.x=l*r*o-s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o-l*c*u):i==="ZYX"?(this.x=l*r*o-s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o+l*c*u):i==="YZX"?(this.x=l*r*o+s*c*u,this.y=s*c*o+l*r*u,this.z=s*r*u-l*c*o,this.w=s*r*o-l*c*u):i==="XZY"&&(this.x=l*r*o-s*c*u,this.y=s*c*o-l*r*u,this.z=s*r*u+l*c*o,this.w=s*r*o+l*c*u),this}clone(){return new _e(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new _e);const i=this.x,s=this.y,r=this.z,o=this.w;let l=t.x,c=t.y,u=t.z,f=t.w,h,d,g,_,m;return d=i*l+s*c+r*u+o*f,d<0&&(d=-d,l=-l,c=-c,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),_=Math.sin((1-e)*h)/g,m=Math.sin(e*h)/g):(_=1-e,m=e),n.x=_*i+m*l,n.y=_*s+m*c,n.z=_*r+m*u,n.w=_*o+m*f,n}integrate(t,e,n,i){i===void 0&&(i=new _e);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,l=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return i.x+=h*(s*f+r*u-o*c),i.y+=h*(r*f+o*l-s*u),i.z+=h*(o*f+s*c-r*l),i.w+=h*(-s*l-r*c-o*u),i}}const Zw=new E,$w=new E,Jw={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class St{constructor(t){t===void 0&&(t={}),this.id=St.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}St.idCounter=0;St.types=Jw;class Yt{constructor(t){t===void 0&&(t={}),this.position=new E,this.quaternion=new _e,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Yt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Yt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),n.vsub(t,i),e.conjugate(Tf),Tf.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new E),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new E),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new E),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Tf=new _e;class nr extends St{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:St.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new E;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let l=0;l!==o;l++){const c=(l+1)%o;e[r[l]].vsub(e[r[c]],i),i.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(i)||n[f].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new E;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];nr.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new E,r=new E;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,l,c){const u=new E;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),s.vmult(u,u);const _=u.dot(r);_>h&&(h=_,f=g)}const d=[];for(let g=0;g<n.faces[f].length;g++){const _=n.vertices[n.faces[f][g]],m=new E;m.copy(_),s.vmult(m,m),i.vadd(m,m),d.push(m)}f>=0&&this.clipFaceAgainstHull(r,t,e,d,o,l,c)}findSeparatingAxis(t,e,n,i,s,r,o,l){const c=new E,u=new E,f=new E,h=new E,d=new E,g=new E;let _=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const v=m.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(c))}else{const p=o?o.length:m.faces.length;for(let v=0;v<p;v++){const y=o?o[v]:v;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,r.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],u);const v=m.testSepAxis(u,t,e,n,i,s);if(v===!1)return!1;v<_&&(_=v,r.copy(u))}else{const p=l?l.length:t.faces.length;for(let v=0;v<p;v++){const y=l?l[v]:v;u.copy(t.faceNormals[y]),s.vmult(u,u);const x=m.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<_&&(_=x,r.copy(u))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],d),h.cross(d,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<_&&(_=y,r.copy(g))}}return i.vsub(e,f),f.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;nr.project(o,t,n,i,ql),nr.project(e,t,s,r,Xl);const l=ql[0],c=ql[1],u=Xl[0],f=Xl[1];if(l<f||u<c)return!1;const h=l-f,d=u-c;return h<d?h:d}calculateLocalInertia(t,e){const n=new E,i=new E;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const l=new E,c=new E,u=new E,f=new E,h=new E,d=new E,g=new E,_=new E,m=this,p=[],v=i,y=p;let x=-1,M=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const I=l.dot(t);I<M&&(M=I,x=S)}if(x<0)return;const b=m.faces[x];b.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let I=0;I<m.faces[S].length;I++)b.indexOf(m.faces[S][I])!==-1&&S!==x&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const D=b.length;for(let S=0;S<D;S++){const I=m.vertices[b[S]],z=m.vertices[b[(S+1)%D]];I.vsub(z,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(I),n.vmult(d,d),e.vadd(d,d);const A=b.connectedFaces[S];g.copy(this.faceNormals[A]);const L=this.getPlaneConstantOfFace(A);_.copy(g),n.vmult(_,_);const R=L-_.dot(e);for(this.clipFaceAgainstPlane(v,y,_,R);v.length;)v.shift();for(;y.length;)v.push(y.shift())}g.copy(this.faceNormals[x]);const C=this.getPlaneConstantOfFace(x);_.copy(g),n.vmult(_,_);const w=C-_.dot(e);for(let S=0;S<v.length;S++){let I=_.dot(v[S])+w;if(I<=s&&(console.log(`clamped: depth=${I} to minDist=${s}`),I=s),I<=r){const z=v[S];if(I<=1e-6){const A={point:z,normal:_,depth:I};o.push(A)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let u=0;u<o;u++){if(c=t[u],r=n.dot(c)+i,s<0)if(r<0){const f=new E;f.copy(c),e.push(f)}else{const f=new E;l.lerp(c,s/(s-r),f),e.push(f)}else if(r<0){const f=new E;l.lerp(c,s/(s-r),f),e.push(f),e.push(c)}l=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new E);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new E);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,l,c,u,f,h=new E;for(let d=0;d<s.length;d++){h.copy(s[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(r===void 0||g.x<r)&&(r=g.x),(c===void 0||g.x>c)&&(c=g.x),(o===void 0||g.y<o)&&(o=g.y),(u===void 0||g.y>u)&&(u=g.y),(l===void 0||g.z<l)&&(l=g.z),(f===void 0||g.z>f)&&(f=g.z)}n.set(r,o,l),i.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new E);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new E;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let l=i[o];const c=e[n[o][0]],u=new E;t.vsub(c,u);const f=l.dot(u),h=new E;r.vsub(c,h);const d=l.dot(h);if(f<0&&d>0||f>0&&d<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,o=Kw;let l=0,c=0;const u=Qw,f=t.vertices;u.setZero(),Yt.vectorToLocalFrame(n,i,e,o),Yt.pointToLocalFrame(n,i,u,u);const h=u.dot(o);c=l=f[0].dot(o);for(let d=1;d<r;d++){const g=f[d].dot(o);g>l&&(l=g),g<c&&(c=g)}if(c-=h,l-=h,c>l){const d=c;c=l,l=d}s[0]=l,s[1]=c}}const ql=[],Xl=[];new E;const Kw=new E,Qw=new E;class Oi extends St{constructor(t){super({type:St.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=E,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new nr({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new E),Oi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)Si.set(s[r][0],s[r][1],s[r][2]),e.vmult(Si,Si),t.vadd(Si,Si),n(Si.x,Si.y,Si.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Nn[0].set(s.x,s.y,s.z),Nn[1].set(-s.x,s.y,s.z),Nn[2].set(-s.x,-s.y,s.z),Nn[3].set(-s.x,-s.y,-s.z),Nn[4].set(s.x,-s.y,-s.z),Nn[5].set(s.x,s.y,-s.z),Nn[6].set(-s.x,s.y,-s.z),Nn[7].set(s.x,-s.y,s.z);const r=Nn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const l=Nn[o];e.vmult(l,l),t.vadd(l,l);const c=l.x,u=l.y,f=l.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),f>i.z&&(i.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Si=new E,Nn=[new E,new E,new E,new E,new E,new E,new E,new E],fu={DYNAMIC:1,STATIC:2,KINEMATIC:4},du={AWAKE:0,SLEEPY:1,SLEEPING:2};class vt extends Xp{constructor(t){t===void 0&&(t={}),super(),this.id=vt.idCounter++,this.index=-1,this.world=null,this.vlambda=new E,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new E,this.previousPosition=new E,this.interpolatedPosition=new E,this.initPosition=new E,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new E,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new E,this.force=new E;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?vt.STATIC:vt.DYNAMIC,typeof t.type==typeof vt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=vt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new E,this.quaternion=new _e,this.initQuaternion=new _e,this.previousQuaternion=new _e,this.interpolatedQuaternion=new _e,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new E,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new E,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new E,this.invInertia=new E,this.invInertiaWorld=new Pn,this.invMassSolve=0,this.invInertiaSolve=new E,this.invInertiaWorldSolve=new Pn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new E(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new E(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new an,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new E,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=vt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===vt.SLEEPING&&this.dispatchEvent(vt.wakeupEvent)}sleep(){this.sleepState=vt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===vt.AWAKE&&n<i?(this.sleepState=vt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(vt.sleepyEvent)):e===vt.SLEEPY&&n>i?this.wakeUp():e===vt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(vt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===vt.SLEEPING||this.type===vt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new E),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new E),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new E),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new E,s=new _e;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),l=r.boundingSphereRadius;o+l>i&&(i=o+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=tS,r=eS,o=this.quaternion,l=this.aabb,c=nS;for(let u=0;u!==i;u++){const f=t[u];o.vmult(e[u],s),s.vadd(this.position,s),o.mult(n[u],r),f.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),u===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=iS,i=sS;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new E),this.type!==vt.DYNAMIC)return;this.sleepState===vt.SLEEPING&&this.wakeUp();const n=oS;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new E),this.type!==vt.DYNAMIC)return;const n=aS,i=lS;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===vt.DYNAMIC&&(this.sleepState===vt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new E),this.type!==vt.DYNAMIC)return;this.sleepState===vt.SLEEPING&&this.wakeUp();const n=e,i=cS;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=uS;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new E),this.type!==vt.DYNAMIC)return;const n=hS,i=fS;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=dS;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Oi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new E;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===vt.DYNAMIC||this.type===vt.KINEMATIC)||this.sleepState===vt.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,l=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;i.x+=o.x*d*h.x,i.y+=o.y*d*h.y,i.z+=o.z*d*h.z;const g=f.elements,_=this.angularFactor,m=l.x*_.x,p=l.y*_.y,v=l.z*_.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*v),s.y+=t*(g[3]*m+g[4]*p+g[5]*v),s.z+=t*(g[6]*m+g[7]*p+g[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}vt.idCounter=0;vt.COLLIDE_EVENT_NAME="collide";vt.DYNAMIC=fu.DYNAMIC;vt.STATIC=fu.STATIC;vt.KINEMATIC=fu.KINEMATIC;vt.AWAKE=du.AWAKE;vt.SLEEPY=du.SLEEPY;vt.SLEEPING=du.SLEEPING;vt.wakeupEvent={type:"wakeup"};vt.sleepyEvent={type:"sleepy"};vt.sleepEvent={type:"sleep"};const tS=new E,eS=new _e,nS=new an,iS=new Pn,sS=new Pn,rS=new Pn,oS=new E,aS=new E,lS=new E,cS=new E,uS=new E,hS=new E,fS=new E,dS=new E;class pS{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&vt.STATIC||t.sleepState===vt.SLEEPING)&&(e.type&vt.STATIC||e.sleepState===vt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=mS;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=gS,i=_S,s=vS,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const l=i[o].id,c=s[o].id,u=l<c?`${l},${c}`:`${c},${l}`;n[u]=o,n.keys.push(u)}for(let o=0;o!==n.keys.length;o++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new E;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const mS=new E;new E;new _e;new E;const gS={keys:[]},_S=[],vS=[];new E;new E;new E;class xS extends pS{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)r=i[l],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class ya{constructor(){this.rayFromWorld=new E,this.rayToWorld=new E,this.hitNormalWorld=new E,this.hitPointWorld=new E,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Yp,jp,Zp,$p,Jp,Kp,Qp;const pu={CLOSEST:1,ANY:2,ALL:4};Yp=St.types.SPHERE;jp=St.types.PLANE;Zp=St.types.BOX;$p=St.types.CYLINDER;Jp=St.types.CONVEXPOLYHEDRON;Kp=St.types.HEIGHTFIELD;Qp=St.types.TRIMESH;class me{get[Yp](){return this._intersectSphere}get[jp](){return this._intersectPlane}get[Zp](){return this._intersectBox}get[$p](){return this._intersectConvex}get[Jp](){return this._intersectConvex}get[Kp](){return this._intersectHeightfield}get[Qp](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new E),e===void 0&&(e=new E),this.from=t.clone(),this.to=e.clone(),this.direction=new E,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=me.ANY,this.result=new ya,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||me.ANY,this.result=e.result||new ya,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Af),Yl.length=0,t.broadphase.aabbQuery(t,Af,Yl),this.intersectBodies(Yl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=yS,s=MS;for(let r=0,o=t.shapes.length;r<o;r++){const l=t.shapes[r];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(NS(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,l=this.direction,c=new E(0,0,1);e.vmult(c,c);const u=new E;r.vsub(n,u);const f=u.dot(c);o.vsub(n,u);const h=u.dot(c);if(f*h>0||r.distanceTo(o)<f)return;const d=c.dot(l);if(Math.abs(d)<this.precision)return;const g=new E,_=new E,m=new E;r.vsub(n,g);const p=-c.dot(g)/d;l.scale(p,_),r.vadd(_,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=wS;r.from.copy(this.from),r.to.copy(this.to),Yt.pointToLocalFrame(n,e,r.from,r.from),Yt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=SS;let l,c,u,f;l=c=0,u=f=t.data.length-1;const h=new an;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),l=Math.max(l,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),f=Math.min(f,o[1]+1);for(let d=l;d<u;d++)for(let g=c;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(d,g,!1),Yt.pointToWorldFrame(n,e,t.pillarOffset,Yo),this._intersectConvex(t.pillarConvex,e,Yo,i,s,Pf),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),Yt.pointToWorldFrame(n,e,t.pillarOffset,Yo),this._intersectConvex(t.pillarConvex,e,Yo,i,s,Pf)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,l=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),f=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-l**2,h=u**2-4*c*f,d=bS,g=ES;if(!(h<0))if(h===0)r.lerp(o,h,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,s,i,-1);else{const _=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(_>=0&&_<=1&&(r.lerp(o,_,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(o,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=DS,l=Lf,c=r&&r.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,_=this.to,m=g.distanceTo(_),p=c?c.length:u.length,v=this.result;for(let y=0;!v.shouldStop&&y<p;y++){const x=c?c[y]:y,M=u[x],b=h[x],D=e,C=n;l.copy(f[M[0]]),D.vmult(l,l),l.vadd(C,l),l.vsub(g,l),D.vmult(b,o);const w=d.dot(o);if(Math.abs(w)<this.precision)continue;const S=o.dot(l)/w;if(!(S<0)){d.scale(S,ke),ke.vadd(g,ke),Dn.copy(f[M[0]]),D.vmult(Dn,Dn),C.vadd(Dn,Dn);for(let I=1;!v.shouldStop&&I<M.length-1;I++){On.copy(f[M[I]]),zn.copy(f[M[I+1]]),D.vmult(On,On),D.vmult(zn,zn),C.vadd(On,On),C.vadd(zn,zn);const z=ke.distanceTo(g);!(me.pointInTriangle(ke,Dn,On,zn)||me.pointInTriangle(ke,On,Dn,zn))||z>m||this.reportIntersection(o,ke,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=CS,l=FS,c=IS,u=Lf,f=TS,h=AS,d=PS,g=RS,_=LS,m=t.indices;t.vertices;const p=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Yt.vectorToLocalFrame(n,e,y,f),Yt.pointToLocalFrame(n,e,p,h),Yt.pointToLocalFrame(n,e,v,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const x=h.distanceSquared(d);t.tree.rayQuery(this,c,l);for(let M=0,b=l.length;!this.result.shouldStop&&M!==b;M++){const D=l[M];t.getNormal(D,o),t.getVertex(m[D*3],Dn),Dn.vsub(h,u);const C=f.dot(o),w=o.dot(u)/C;if(w<0)continue;f.scale(w,ke),ke.vadd(h,ke),t.getVertex(m[D*3+1],On),t.getVertex(m[D*3+2],zn);const S=ke.distanceSquared(h);!(me.pointInTriangle(ke,On,Dn,zn)||me.pointInTriangle(ke,Dn,On,zn))||S>x||(Yt.vectorToWorldFrame(e,o,_),Yt.pointToWorldFrame(n,e,ke,g),this.reportIntersection(_,g,s,i,D))}l.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,l=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case me.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case me.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l));break;case me.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,Ki),n.vsub(e,Dr),t.vsub(e,jl);const s=Ki.dot(Ki),r=Ki.dot(Dr),o=Ki.dot(jl),l=Dr.dot(Dr),c=Dr.dot(jl);let u,f;return(u=l*o-r*c)>=0&&(f=s*c-r*o)>=0&&u+f<s*l-r*r}}me.CLOSEST=pu.CLOSEST;me.ANY=pu.ANY;me.ALL=pu.ALL;const Af=new an,Yl=[],Dr=new E,jl=new E,yS=new E,MS=new _e,ke=new E,Dn=new E,On=new E,zn=new E;new E;new ya;const Pf={faceList:[0]},Yo=new E,wS=new me,SS=[],bS=new E,ES=new E,DS=new E;new E;new E;const Lf=new E,CS=new E,TS=new E,AS=new E,PS=new E,LS=new E,RS=new E;new an;const FS=[],IS=new Yt,Ki=new E,jo=new E;function NS(a,t,e){e.vsub(a,Ki);const n=Ki.dot(t);return t.scale(n,jo),jo.vadd(a,jo),e.distanceTo(jo)}class OS{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class Rf{constructor(){this.spatial=new E,this.rotational=new E}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ho{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ho.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new Rf,this.jacobianElementB=new Rf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,l=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,Ff),o.scale(u,If),n.invInertiaWorldSolve.vmult(r,Nf),i.invInertiaWorldSolve.vmult(l,Of),t.multiplyVectors(Ff,Nf)+e.multiplyVectors(If,Of)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,Zo),c+=Zo.dot(t.rotational),l.vmult(e.rotational,Zo),c+=Zo.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=zS;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ho.idCounter=0;const Ff=new E,If=new E,Nf=new E,Of=new E,Zo=new E,zS=new E;class US extends ho{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new E,this.rj=new E,this.ni=new E}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,l=BS,c=kS,u=i.velocity,f=i.angularVelocity;i.force,i.torque;const h=s.velocity,d=s.angularVelocity;s.force,s.torque;const g=VS,_=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;r.cross(p,l),o.cross(p,c),p.negate(_.spatial),l.negate(_.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(o,g),g.vsub(i.position,g),g.vsub(r,g);const v=p.dot(g),y=this.restitution+1,x=y*h.dot(p)-y*u.dot(p)+d.dot(c)-f.dot(l),M=this.computeGiMf();return-v*e-x*n-t*M}getImpactVelocityAlongNormal(){const t=GS,e=HS,n=WS,i=qS,s=XS;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const BS=new E,kS=new E,VS=new E,GS=new E,HS=new E,WS=new E,qS=new E,XS=new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class zf extends ho{constructor(t,e,n){super(t,e,-n,n),this.ri=new E,this.rj=new E,this.t=new E}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=YS,r=jS,o=this.t;n.cross(o,s),i.cross(o,r);const l=this.jacobianElementA,c=this.jacobianElementB;o.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(o),c.rotational.copy(r);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const YS=new E,jS=new E;class Ua{constructor(t,e,n){n=OS.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ua.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ua.idCounter=0;class Ba{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Ba.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Ba.idCounter=0;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new me;new E;new E;new E;new E(1,0,0),new E(0,1,0),new E(0,0,1);new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;class ZS extends St{constructor(t){if(super({type:St.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new E);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const l=r[o];n[l]=t[l]-s,i[l]=t[l]+s}}}new E;new E;new E;new E;new E;new E;new E;new E;new E;class tm extends nr{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,r=[],o=[],l=[],c=[],u=[],f=Math.cos,h=Math.sin;r.push(new E(-e*h(0),-n*.5,e*f(0))),c.push(0),r.push(new E(-t*h(0),n*.5,t*f(0))),u.push(1);for(let g=0;g<s;g++){const _=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(r.push(new E(-e*h(_),-n*.5,e*f(_))),c.push(2*g+2),r.push(new E(-t*h(_),n*.5,t*f(_))),u.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&o.push(new E(-h(m),0,f(m)))}l.push(c),o.push(new E(0,1,0));const d=[];for(let g=0;g<u.length;g++)d.push(u[u.length-g-1]);l.push(d),super({vertices:r,faces:l,axes:o}),this.type=St.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new E;new an;new E;new an;new E;new E;new E;new E;new E;new E;new E;new an;new E;new Yt;new an;class $S{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class JS extends $S{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,l=e.bodies,c=l.length,u=t;let f,h,d,g,_,m;if(o!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=QS,v=tb,y=KS;p.length=o,v.length=o,y.length=o;for(let x=0;x!==o;x++){const M=r[x];y[x]=0,v[x]=M.computeB(u),p[x]=1/M.computeC()}if(o!==0){for(let b=0;b!==c;b++){const D=l[b],C=D.vlambda,w=D.wlambda;C.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==o;b++){const D=r[b];f=v[b],h=p[b],m=y[b],_=D.computeGWlambda(),d=h*(f-_-D.eps*m),m+d<D.minForce?d=D.minForce-m:m+d>D.maxForce&&(d=D.maxForce-m),y[b]+=d,g+=d>0?d:-d,D.addToWlambda(d)}if(g*g<s)break}for(let b=0;b!==c;b++){const D=l[b],C=D.velocity,w=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),C.vadd(D.vlambda,C),D.wlambda.vmul(D.angularFactor,D.wlambda),w.vadd(D.wlambda,w)}let x=r.length;const M=1/u;for(;x--;)r[x].multiplier=y[x]*M}return n}}const KS=[],QS=[],tb=[];vt.STATIC;class eb{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class nb extends eb{constructor(){super(...arguments),this.type=E}constructObject(){return new E}}const Qt={sphereSphere:St.types.SPHERE,spherePlane:St.types.SPHERE|St.types.PLANE,boxBox:St.types.BOX|St.types.BOX,sphereBox:St.types.SPHERE|St.types.BOX,planeBox:St.types.PLANE|St.types.BOX,convexConvex:St.types.CONVEXPOLYHEDRON,sphereConvex:St.types.SPHERE|St.types.CONVEXPOLYHEDRON,planeConvex:St.types.PLANE|St.types.CONVEXPOLYHEDRON,boxConvex:St.types.BOX|St.types.CONVEXPOLYHEDRON,sphereHeightfield:St.types.SPHERE|St.types.HEIGHTFIELD,boxHeightfield:St.types.BOX|St.types.HEIGHTFIELD,convexHeightfield:St.types.CONVEXPOLYHEDRON|St.types.HEIGHTFIELD,sphereParticle:St.types.PARTICLE|St.types.SPHERE,planeParticle:St.types.PLANE|St.types.PARTICLE,boxParticle:St.types.BOX|St.types.PARTICLE,convexParticle:St.types.PARTICLE|St.types.CONVEXPOLYHEDRON,cylinderCylinder:St.types.CYLINDER,sphereCylinder:St.types.SPHERE|St.types.CYLINDER,planeCylinder:St.types.PLANE|St.types.CYLINDER,boxCylinder:St.types.BOX|St.types.CYLINDER,convexCylinder:St.types.CONVEXPOLYHEDRON|St.types.CYLINDER,heightfieldCylinder:St.types.HEIGHTFIELD|St.types.CYLINDER,particleCylinder:St.types.PARTICLE|St.types.CYLINDER,sphereTrimesh:St.types.SPHERE|St.types.TRIMESH,planeTrimesh:St.types.PLANE|St.types.TRIMESH};class ib{get[Qt.sphereSphere](){return this.sphereSphere}get[Qt.spherePlane](){return this.spherePlane}get[Qt.boxBox](){return this.boxBox}get[Qt.sphereBox](){return this.sphereBox}get[Qt.planeBox](){return this.planeBox}get[Qt.convexConvex](){return this.convexConvex}get[Qt.sphereConvex](){return this.sphereConvex}get[Qt.planeConvex](){return this.planeConvex}get[Qt.boxConvex](){return this.boxConvex}get[Qt.sphereHeightfield](){return this.sphereHeightfield}get[Qt.boxHeightfield](){return this.boxHeightfield}get[Qt.convexHeightfield](){return this.convexHeightfield}get[Qt.sphereParticle](){return this.sphereParticle}get[Qt.planeParticle](){return this.planeParticle}get[Qt.boxParticle](){return this.boxParticle}get[Qt.convexParticle](){return this.convexParticle}get[Qt.cylinderCylinder](){return this.convexConvex}get[Qt.sphereCylinder](){return this.sphereConvex}get[Qt.planeCylinder](){return this.planeConvex}get[Qt.boxCylinder](){return this.boxConvex}get[Qt.convexCylinder](){return this.convexConvex}get[Qt.heightfieldCylinder](){return this.heightfieldCylinder}get[Qt.particleCylinder](){return this.particleCylinder}get[Qt.sphereTrimesh](){return this.sphereTrimesh}get[Qt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new nb,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new US(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;o.restitution=l.restitution,o.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(o.restitution=c.restitution*u.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,l=this.currentContactMaterial;let c=l.friction;const u=s.material||n.material,f=r.material||i.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(o.frictionGravity||o.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,_=g.length?g.pop():new zf(n,i,h*d),m=g.length?g.pop():new zf(n,i,h*d);return _.bi=m.bi=n,_.bj=m.bj=i,_.minForce=m.minForce=-h*d,_.maxForce=m.maxForce=h*d,_.ri.copy(t.ri),_.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(_.t,m.t),_.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,o.dt),_.enabled=m.enabled=t.enabled,e.push(_,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];qi.setZero(),zs.setZero(),Us.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(qi.vadd(e.ni,qi),zs.vadd(e.ri,zs),Us.vadd(e.rj,Us)):(qi.vsub(e.ni,qi),zs.vadd(e.rj,zs),Us.vadd(e.ri,Us));const r=1/t;zs.scale(r,n.ri),Us.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),qi.normalize(),qi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const l=ob,c=ab,u=sb,f=rb;for(let h=0,d=t.length;h!==d;h++){const g=t[h],_=e[h];let m=null;g.material&&_.material&&(m=n.getContactMaterial(g.material,_.material)||null);const p=g.type&vt.KINEMATIC&&_.type&vt.STATIC||g.type&vt.STATIC&&_.type&vt.KINEMATIC||g.type&vt.KINEMATIC&&_.type&vt.KINEMATIC;for(let v=0;v<g.shapes.length;v++){g.quaternion.mult(g.shapeOrientations[v],l),g.quaternion.vmult(g.shapeOffsets[v],u),u.vadd(g.position,u);const y=g.shapes[v];for(let x=0;x<_.shapes.length;x++){_.quaternion.mult(_.shapeOrientations[x],c),_.quaternion.vmult(_.shapeOffsets[x],f),f.vadd(_.position,f);const M=_.shapes[x];if(!(y.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(f)>y.boundingSphereRadius+M.boundingSphereRadius)continue;let b=null;y.material&&M.material&&(b=n.getContactMaterial(y.material,M.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const D=y.type|M.type,C=this[D];if(C){let w=!1;y.type<M.type?w=C.call(this,y,M,u,f,l,c,g,_,y,M,p):w=C.call(this,M,y,f,u,c,l,_,g,y,M,p),w&&p&&(n.shapeOverlapKeeper.set(y.id,M.id),n.bodyOverlapKeeper.set(g.id,_.id))}}}}}sphereSphere(t,e,n,i,s,r,o,l,c,u,f){if(f)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(o,l,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(l.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,l,c,u,f){const h=this.createContactEquation(o,l,t,e,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,$o),h.ni.scale(h.ni.dot($o),Uf),$o.vsub(Uf,h.rj),-$o.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(n,d),d.vsub(o.position,d),g.vadd(i,g),g.vsub(l.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,f)}sphereBox(t,e,n,i,s,r,o,l,c,u,f){const h=this.v3pool,d=Fb;n.vsub(i,Jo),e.getSideNormals(d,r);const g=t.radius;let _=!1;const m=Nb,p=Ob,v=zb;let y=null,x=0,M=0,b=0,D=null;for(let N=0,q=d.length;N!==q&&_===!1;N++){const k=Pb;k.copy(d[N]);const Z=k.length();k.normalize();const K=Jo.dot(k);if(K<Z+g&&K>0){const ht=Lb,G=Rb;ht.copy(d[(N+1)%3]),G.copy(d[(N+2)%3]);const Y=ht.length(),J=G.length();ht.normalize(),G.normalize();const st=Jo.dot(ht),ot=Jo.dot(G);if(st<Y&&st>-Y&&ot<J&&ot>-J){const H=Math.abs(K-Z-g);if((D===null||H<D)&&(D=H,M=st,b=ot,y=Z,m.copy(k),p.copy(ht),v.copy(G),x++,f))return!0}}}if(x){_=!0;const N=this.createContactEquation(o,l,t,e,c,u);m.scale(-g,N.ri),N.ni.copy(m),N.ni.negate(N.ni),m.scale(y,m),p.scale(M,p),m.vadd(p,m),v.scale(b,v),m.vadd(v,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),N.rj.vadd(i,N.rj),N.rj.vsub(l.position,N.rj),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}let C=h.get();const w=Ib;for(let N=0;N!==2&&!_;N++)for(let q=0;q!==2&&!_;q++)for(let k=0;k!==2&&!_;k++)if(C.set(0,0,0),N?C.vadd(d[0],C):C.vsub(d[0],C),q?C.vadd(d[1],C):C.vsub(d[1],C),k?C.vadd(d[2],C):C.vsub(d[2],C),i.vadd(C,w),w.vsub(n,w),w.lengthSquared()<g*g){if(f)return!0;_=!0;const Z=this.createContactEquation(o,l,t,e,c,u);Z.ri.copy(w),Z.ri.normalize(),Z.ni.copy(Z.ri),Z.ri.scale(g,Z.ri),Z.rj.copy(C),Z.ri.vadd(n,Z.ri),Z.ri.vsub(o.position,Z.ri),Z.rj.vadd(i,Z.rj),Z.rj.vsub(l.position,Z.rj),this.result.push(Z),this.createFrictionEquationsFromContact(Z,this.frictionResult)}h.release(C),C=null;const S=h.get(),I=h.get(),z=h.get(),A=h.get(),L=h.get(),R=d.length;for(let N=0;N!==R&&!_;N++)for(let q=0;q!==R&&!_;q++)if(N%3!==q%3){d[q].cross(d[N],S),S.normalize(),d[N].vadd(d[q],I),z.copy(n),z.vsub(I,z),z.vsub(i,z);const k=z.dot(S);S.scale(k,A);let Z=0;for(;Z===N%3||Z===q%3;)Z++;L.copy(n),L.vsub(A,L),L.vsub(I,L),L.vsub(i,L);const K=Math.abs(k),ht=L.length();if(K<d[Z].length()&&ht<g){if(f)return!0;_=!0;const G=this.createContactEquation(o,l,t,e,c,u);I.vadd(A,G.rj),G.rj.copy(G.rj),L.negate(G.ni),G.ni.normalize(),G.ri.copy(G.rj),G.ri.vadd(i,G.ri),G.ri.vsub(n,G.ri),G.ri.normalize(),G.ri.scale(g,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}h.release(S,I,z,A,L)}planeBox(t,e,n,i,s,r,o,l,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,l,t,e,f)}convexConvex(t,e,n,i,s,r,o,l,c,u,f,h,d){const g=Kb;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,g,h,d)){const _=[],m=Qb;t.clipAgainstHull(n,s,e,i,r,g,-100,100,_);let p=0;for(let v=0;v!==_.length;v++){if(f)return!0;const y=this.createContactEquation(o,l,t,e,c,u),x=y.ri,M=y.rj;g.negate(y.ni),_[v].normal.negate(m),m.scale(_[v].depth,m),_[v].point.vadd(m,x),M.copy(_[v].point),x.vsub(n,x),M.vsub(i,M),x.vadd(n,x),x.vsub(o.position,x),M.vadd(i,M),M.vsub(l.position,M),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,r,o,l,c,u,f){const h=this.v3pool;n.vsub(i,Ub);const d=e.faceNormals,g=e.faces,_=e.vertices,m=t.radius;let p=!1;for(let v=0;v!==_.length;v++){const y=_[v],x=Gb;r.vmult(y,x),i.vadd(x,x);const M=Vb;if(x.vsub(n,M),M.lengthSquared()<m*m){if(f)return!0;p=!0;const b=this.createContactEquation(o,l,t,e,c,u);b.ri.copy(M),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),x.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(o.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let v=0,y=g.length;v!==y&&p===!1;v++){const x=d[v],M=g[v],b=Hb;r.vmult(x,b);const D=Wb;r.vmult(_[M[0]],D),D.vadd(i,D);const C=qb;b.scale(-m,C),n.vadd(C,C);const w=Xb;C.vsub(D,w);const S=w.dot(b),I=Yb;if(n.vsub(D,I),S<0&&I.dot(b)>0){const z=[];for(let A=0,L=M.length;A!==L;A++){const R=h.get();r.vmult(_[M[A]],R),i.vadd(R,R),z.push(R)}if(Ab(z,b,n)){if(f)return!0;p=!0;const A=this.createContactEquation(o,l,t,e,c,u);b.scale(-m,A.ri),b.negate(A.ni);const L=h.get();b.scale(-S,L);const R=h.get();b.scale(-m,R),n.vsub(i,A.rj),A.rj.vadd(R,A.rj),A.rj.vadd(L,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(l.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(o.position,A.ri),h.release(L),h.release(R),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let N=0,q=z.length;N!==q;N++)h.release(z[N]);return}else for(let A=0;A!==M.length;A++){const L=h.get(),R=h.get();r.vmult(_[M[(A+1)%M.length]],L),r.vmult(_[M[(A+2)%M.length]],R),i.vadd(L,L),i.vadd(R,R);const N=Bb;R.vsub(L,N);const q=kb;N.unit(q);const k=h.get(),Z=h.get();n.vsub(L,Z);const K=Z.dot(q);q.scale(K,k),k.vadd(L,k);const ht=h.get();if(k.vsub(n,ht),K>0&&K*K<N.lengthSquared()&&ht.lengthSquared()<m*m){if(f)return!0;const G=this.createContactEquation(o,l,t,e,c,u);k.vsub(i,G.rj),k.vsub(n,G.ni),G.ni.normalize(),G.ni.scale(m,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(l.position,G.rj),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult);for(let Y=0,J=z.length;Y!==J;Y++)h.release(z[Y]);h.release(L),h.release(R),h.release(k),h.release(ht),h.release(Z);return}h.release(L),h.release(R),h.release(k),h.release(ht),h.release(Z)}for(let A=0,L=z.length;A!==L;A++)h.release(z[A])}}}planeConvex(t,e,n,i,s,r,o,l,c,u,f){const h=jb,d=Zb;d.set(0,0,1),s.vmult(d,d);let g=0;const _=$b;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,_),d.dot(_)<=0){if(f)return!0;const v=this.createContactEquation(o,l,t,e,c,u),y=Jb;d.scale(d.dot(_),y),h.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(d),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(l.position,v.rj),this.result.push(v),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,f)}sphereHeightfield(t,e,n,i,s,r,o,l,c,u,f){const h=e.data,d=t.radius,g=e.elementSize,_=h1,m=u1;Yt.pointToLocalFrame(i,r,n,m);let p=Math.floor((m.x-d)/g)-1,v=Math.ceil((m.x+d)/g)+1,y=Math.floor((m.y-d)/g)-1,x=Math.ceil((m.y+d)/g)+1;if(v<0||x<0||p>h.length||y>h[0].length)return;p<0&&(p=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),p>=h.length&&(p=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const M=[];e.getRectMinMax(p,y,v,x,M);const b=M[0],D=M[1];if(m.z-d>D||m.z+d<b)return;const C=this.result;for(let w=p;w<v;w++)for(let S=y;S<x;S++){const I=C.length;let z=!1;if(e.getConvexTrianglePillar(w,S,!1),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,_,s,r,o,l,t,e,f)),f&&z||(e.getConvexTrianglePillar(w,S,!0),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,_,s,r,o,l,t,e,f)),f&&z))return!0;if(C.length-I>2)return}}boxHeightfield(t,e,n,i,s,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,f)}convexHeightfield(t,e,n,i,s,r,o,l,c,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,_=l1,m=c1,p=a1;Yt.pointToLocalFrame(i,r,n,p);let v=Math.floor((p.x-g)/d)-1,y=Math.ceil((p.x+g)/d)+1,x=Math.floor((p.y-g)/d)-1,M=Math.ceil((p.y+g)/d)+1;if(y<0||M<0||v>h.length||x>h[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),M<0&&(M=0),v>=h.length&&(v=h.length-1),y>=h.length&&(y=h.length-1),M>=h[0].length&&(M=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const b=[];e.getRectMinMax(v,x,y,M,b);const D=b[0],C=b[1];if(!(p.z-g>C||p.z+g<D))for(let w=v;w<y;w++)for(let S=x;S<M;S++){let I=!1;if(e.getConvexTrianglePillar(w,S,!1),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,_,s,r,o,l,null,null,f,m,null)),f&&I||(e.getConvexTrianglePillar(w,S,!0),Yt.pointToWorldFrame(i,r,e.pillarOffset,_),n.distanceTo(_)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(I=this.convexConvex(t,e.pillarConvex,n,_,s,r,o,l,null,null,f,m,null)),f&&I))return!0}}sphereParticle(t,e,n,i,s,r,o,l,c,u,f){const h=i1;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(l,o,e,t,c,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,l,c,u,f){const h=t1;h.set(0,0,1),o.quaternion.vmult(h,h);const d=e1;if(i.vsub(o.position,d),h.dot(d)<=0){if(f)return!0;const _=this.createContactEquation(l,o,e,t,c,u);_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0);const m=n1;h.scale(h.dot(i),m),i.vsub(m,m),_.rj.copy(m),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,l,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,l,t,e,f)}convexParticle(t,e,n,i,s,r,o,l,c,u,f){let h=-1;const d=r1,g=o1;let _=null;const m=s1;if(m.copy(i),m.vsub(n,m),s.conjugate(Bf),Bf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,v=t.faces.length;p!==v;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(y[0],kf);const M=-x.dot(kf);if(_===null||Math.abs(M)<Math.abs(_)){if(f)return!0;_=M,h=p,d.copy(x)}}if(h!==-1){const p=this.createContactEquation(l,o,e,t,c,u);d.scale(_,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),d.negate(p.ni),p.ri.set(0,0,0);const v=p.ri,y=p.rj;v.vadd(i,v),v.vsub(l.position,v),y.vadd(n,y),y.vsub(o.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,l,c,u,f){return this.convexHeightfield(e,t,i,n,r,s,l,o,c,u,f)}particleCylinder(t,e,n,i,s,r,o,l,c,u,f){return this.convexParticle(e,t,i,n,r,s,l,o,c,u,f)}sphereTrimesh(t,e,n,i,s,r,o,l,c,u,f){const h=mb,d=gb,g=_b,_=vb,m=xb,p=yb,v=bb,y=pb,x=fb,M=Eb;Yt.pointToLocalFrame(i,r,n,m);const b=t.radius;v.lowerBound.set(m.x-b,m.y-b,m.z-b),v.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(v,M);const D=db,C=t.radius*t.radius;for(let A=0;A<M.length;A++)for(let L=0;L<3;L++)if(e.getVertex(e.indices[M[A]*3+L],D),D.vsub(m,x),x.lengthSquared()<=C){if(y.copy(D),Yt.pointToWorldFrame(i,r,y,D),D.vsub(n,x),f)return!0;let R=this.createContactEquation(o,l,t,e,c,u);R.ni.copy(x),R.ni.normalize(),R.ri.copy(R.ni),R.ri.scale(t.radius,R.ri),R.ri.vadd(n,R.ri),R.ri.vsub(o.position,R.ri),R.rj.copy(D),R.rj.vsub(l.position,R.rj),this.result.push(R),this.createFrictionEquationsFromContact(R,this.frictionResult)}for(let A=0;A<M.length;A++)for(let L=0;L<3;L++){e.getVertex(e.indices[M[A]*3+L],h),e.getVertex(e.indices[M[A]*3+(L+1)%3],d),d.vsub(h,g),m.vsub(d,p);const R=p.dot(g);m.vsub(h,p);let N=p.dot(g);if(N>0&&R<0&&(m.vsub(h,p),_.copy(g),_.normalize(),N=p.dot(_),_.scale(N,p),p.vadd(h,p),p.distanceTo(m)<t.radius)){if(f)return!0;const k=this.createContactEquation(o,l,t,e,c,u);p.vsub(m,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(o.position,k.ri),Yt.pointToWorldFrame(i,r,p,p),p.vsub(l.position,k.rj),Yt.vectorToWorldFrame(r,k.ni,k.ni),Yt.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const w=Mb,S=wb,I=Sb,z=hb;for(let A=0,L=M.length;A!==L;A++){e.getTriangleVertices(M[A],w,S,I),e.getNormal(M[A],z),m.vsub(w,p);let R=p.dot(z);if(z.scale(R,p),m.vsub(p,p),R=p.distanceTo(m),me.pointInTriangle(p,w,S,I)&&R<t.radius){if(f)return!0;let N=this.createContactEquation(o,l,t,e,c,u);p.vsub(m,N.ni),N.ni.normalize(),N.ni.scale(t.radius,N.ri),N.ri.vadd(n,N.ri),N.ri.vsub(o.position,N.ri),Yt.pointToWorldFrame(i,r,p,p),p.vsub(l.position,N.rj),Yt.vectorToWorldFrame(r,N.ni,N.ni),Yt.vectorToWorldFrame(r,N.ri,N.ri),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,s,r,o,l,c,u,f){const h=new E,d=lb;d.set(0,0,1),s.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const _=new E;_.copy(h),Yt.pointToWorldFrame(i,r,_,h);const m=cb;if(h.vsub(n,m),d.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(o,l,t,e,c,u);v.ni.copy(d);const y=ub;d.scale(m.dot(d),y),h.vsub(y,y),v.ri.copy(y),v.ri.vsub(o.position,v.ri),v.rj.copy(h),v.rj.vsub(l.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const qi=new E,zs=new E,Us=new E,sb=new E,rb=new E,ob=new _e,ab=new _e,lb=new E,cb=new E,ub=new E,hb=new E,fb=new E;new E;const db=new E,pb=new E,mb=new E,gb=new E,_b=new E,vb=new E,xb=new E,yb=new E,Mb=new E,wb=new E,Sb=new E,bb=new an,Eb=[],$o=new E,Uf=new E,Db=new E,Cb=new E,Tb=new E;function Ab(a,t,e){let n=null;const i=a.length;for(let s=0;s!==i;s++){const r=a[s],o=Db;a[(s+1)%i].vsub(r,o);const l=Cb;o.cross(t,l);const c=Tb;e.vsub(r,c);const u=l.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Jo=new E,Pb=new E,Lb=new E,Rb=new E,Fb=[new E,new E,new E,new E,new E,new E],Ib=new E,Nb=new E,Ob=new E,zb=new E,Ub=new E,Bb=new E,kb=new E,Vb=new E,Gb=new E,Hb=new E,Wb=new E,qb=new E,Xb=new E,Yb=new E;new E;new E;const jb=new E,Zb=new E,$b=new E,Jb=new E,Kb=new E,Qb=new E,t1=new E,e1=new E,n1=new E,i1=new E,Bf=new _e,s1=new E;new E;const r1=new E,kf=new E,o1=new E,a1=new E,l1=new E,c1=[0],u1=new E,h1=new E;class Vf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let l=0;l<s;l++){let c=!1;const u=n[l];for(;u>i[o];)o++;c=u===i[o],c||Gf(t,u)}o=0;for(let l=0;l<r;l++){let c=!1;const u=i[l];for(;u>n[o];)o++;c=n[o]===u,c||Gf(e,u)}}}function Gf(a,t){a.push((t&4294901760)>>16,t&65535)}const Zl=(a,t)=>a<t?`${a}-${t}`:`${t}-${a}`;class f1{constructor(){this.data={keys:[]}}get(t,e){const n=Zl(t,e);return this.data[n]}set(t,e,n){const i=Zl(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Zl(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class d1 extends Xp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new E,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new E,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new xS,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new JS,this.constraints=[],this.narrowphase=new ib(this),this.collisionMatrix=new Cf,this.collisionMatrixPrevious=new Cf,this.bodyOverlapKeeper=new Vf,this.shapeOverlapKeeper=new Vf,this.contactmaterials=[],this.contactMaterialTable=new f1,this.defaultMaterial=new Ba("default"),this.defaultContactMaterial=new Ua(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ya?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=me.ALL,n.from=t,n.to=e,n.callback=i,$l.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=me.ANY,n.from=t,n.to=e,n.result=i,$l.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=me.CLOSEST,n.from=t,n.to=e,n.result=i,$l.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof vt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ve.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ve.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ve.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const l=this.bodies[o];l.previousPosition.lerp(l.position,r,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,r,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=v1,i=x1,s=this.bodies.length,r=this.bodies,o=this.solver,l=this.gravity,c=this.doProfiling,u=this.profile,f=vt.DYNAMIC;let h=-1/0;const d=this.constraints,g=_1;l.length();const _=l.x,m=l.y,p=l.z;let v=0;for(c&&(h=ve.now()),v=0;v!==s;v++){const A=r[v];if(A.type===f){const L=A.force,R=A.mass;L.x+=R*_,L.y+=R*m,L.z+=R*p}}for(let A=0,L=this.subsystems.length;A!==L;A++)this.subsystems[A].update();c&&(h=ve.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=ve.now()-h);let y=d.length;for(v=0;v!==y;v++){const A=d[v];if(!A.collideConnected)for(let L=n.length-1;L>=0;L-=1)(A.bodyA===n[L]&&A.bodyB===i[L]||A.bodyB===n[L]&&A.bodyA===i[L])&&(n.splice(L,1),i.splice(L,1))}this.collisionMatrixTick(),c&&(h=ve.now());const x=g1,M=e.length;for(v=0;v!==M;v++)x.push(e[v]);e.length=0;const b=this.frictionEquations.length;for(v=0;v!==b;v++)g.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(u.narrowphase=ve.now()-h),c&&(h=ve.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const D=e.length;for(let A=0;A!==D;A++){const L=e[A],R=L.bi,N=L.bj,q=L.si,k=L.sj;let Z;if(R.material&&N.material?Z=this.getContactMaterial(R.material,N.material)||this.defaultContactMaterial:Z=this.defaultContactMaterial,Z.friction,R.material&&N.material&&(R.material.friction>=0&&N.material.friction>=0&&R.material.friction*N.material.friction,R.material.restitution>=0&&N.material.restitution>=0&&(L.restitution=R.material.restitution*N.material.restitution)),o.addEquation(L),R.allowSleep&&R.type===vt.DYNAMIC&&R.sleepState===vt.SLEEPING&&N.sleepState===vt.AWAKE&&N.type!==vt.STATIC){const K=N.velocity.lengthSquared()+N.angularVelocity.lengthSquared(),ht=N.sleepSpeedLimit**2;K>=ht*2&&(R.wakeUpAfterNarrowphase=!0)}if(N.allowSleep&&N.type===vt.DYNAMIC&&N.sleepState===vt.SLEEPING&&R.sleepState===vt.AWAKE&&R.type!==vt.STATIC){const K=R.velocity.lengthSquared()+R.angularVelocity.lengthSquared(),ht=R.sleepSpeedLimit**2;K>=ht*2&&(N.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(R,N,!0),this.collisionMatrixPrevious.get(R,N)||(Cr.body=N,Cr.contact=L,R.dispatchEvent(Cr),Cr.body=R,N.dispatchEvent(Cr)),this.bodyOverlapKeeper.set(R.id,N.id),this.shapeOverlapKeeper.set(q.id,k.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=ve.now()-h,h=ve.now()),v=0;v!==s;v++){const A=r[v];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(y=d.length,v=0;v!==y;v++){const A=d[v];A.update();for(let L=0,R=A.equations.length;L!==R;L++){const N=A.equations[L];o.addEquation(N)}}o.solve(t,this),c&&(u.solve=ve.now()-h),o.removeAllEquations();const C=Math.pow;for(v=0;v!==s;v++){const A=r[v];if(A.type&f){const L=C(1-A.linearDamping,t),R=A.velocity;R.scale(L,R);const N=A.angularVelocity;if(N){const q=C(1-A.angularDamping,t);N.scale(q,N)}}}this.dispatchEvent(m1),c&&(h=ve.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,I=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(t,S,I);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=ve.now()-h),this.stepnumber+=1,this.dispatchEvent(p1);let z=!0;if(this.allowSleep)for(z=!1,v=0;v!==s;v++){const A=r[v];A.sleepTick(this.time),A.sleepState!==vt.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(ii,si),t){for(let s=0,r=ii.length;s<r;s+=2)Tr.bodyA=this.getBodyById(ii[s]),Tr.bodyB=this.getBodyById(ii[s+1]),this.dispatchEvent(Tr);Tr.bodyA=Tr.bodyB=null}if(e){for(let s=0,r=si.length;s<r;s+=2)Ar.bodyA=this.getBodyById(si[s]),Ar.bodyB=this.getBodyById(si[s+1]),this.dispatchEvent(Ar);Ar.bodyA=Ar.bodyB=null}ii.length=si.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(ii,si),n){for(let s=0,r=ii.length;s<r;s+=2){const o=this.getShapeById(ii[s]),l=this.getShapeById(ii[s+1]);ri.shapeA=o,ri.shapeB=l,o&&(ri.bodyA=o.body),l&&(ri.bodyB=l.body),this.dispatchEvent(ri)}ri.bodyA=ri.bodyB=ri.shapeA=ri.shapeB=null}if(i){for(let s=0,r=si.length;s<r;s+=2){const o=this.getShapeById(si[s]),l=this.getShapeById(si[s+1]);oi.shapeA=o,oi.shapeB=l,o&&(oi.bodyA=o.body),l&&(oi.bodyB=l.body),this.dispatchEvent(oi)}oi.bodyA=oi.bodyB=oi.shapeA=oi.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new an;const $l=new me,ve=globalThis.performance||{};if(!ve.now){let a=Date.now();ve.timing&&ve.timing.navigationStart&&(a=ve.timing.navigationStart),ve.now=()=>Date.now()-a}new E;const p1={type:"postStep"},m1={type:"preStep"},Cr={type:vt.COLLIDE_EVENT_NAME,body:null,contact:null},g1=[],_1=[],v1=[],x1=[],ii=[],si=[],Tr={type:"beginContact",bodyA:null,bodyB:null},Ar={type:"endContact",bodyA:null,bodyB:null},ri={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},oi={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};Wd.registerPlugin(Ta,nu,ao);var aa=!1;const Be=new tw,Ma=document.querySelector("#canvasContainer");let y1=-9,sn=4;const ln=new d1({gravity:new E(0,y1,0)});function M1(){for(let a=0;a<mi.length;a++)Ii[a].position.copy(mi[a].position),Ii[a].quaternion.copy(mi[a].quaternion)}ln.defaultContactMaterial.contactEquationRestitution=.1;ln.defaultContactMaterial.contactEquationStiffness=5e3;ln.defaultContactMaterial.friction=3;ln.defaultContactMaterial.contactEquationRelaxationTime=.5;window.onresize=function(){cm()};const mu=new en(45,Ma.offsetWidth/Ma.offsetHeight,.5,1e3);mu.position.set(5,2,20);const fo=new Ip({antialias:!0,canvas:document.querySelector("canvas")});fo.setSize(Ma.offsetWidth,Ma.offsetHeight);fo.setPixelRatio(window.devicePixelRatio);fo.shadowMap.enabled=!0;const w1=new qw(mu,fo.domElement);w1.update();const S1=new kw(16777215,.3);Be.add(S1);var em=new uo(50,60,40);em.scale(-1,1,1);var b1=new di({map:new Gp().load("./tower_images/pano2.jpg")}),nm=new ae(em,b1);nm.position.set(0,0,0);Be.add(nm);const gu=new Wp(16777215,.7,2e3);gu.castShadow=!0;gu.position.set(-3,10,3);Be.add(gu);const _u=new Wp(16777215,.4,2e3);_u.castShadow=!0;_u.position.set(2,10,-2);Be.add(_u);const im=new Gp().load("./tower_images/wood.jpg"),ka=new vt({shape:new tm(5,5,.25,50),type:vt.STATIC});ka.position.set(0,0-sn,0);ln.addBody(ka);const po=new ae(new Ia(5,5,.25,50),new Oa({map:im}));po.receiveShadow=!0;Be.add(po);po.userData.ground=!0;po.position.copy(ka.position);po.quaternion.copy(ka.quaternion);const Va=new vt({shape:new tm(.7,.7,16,50),type:vt.STATIC});Va.position.set(0,-8-sn,0);ln.addBody(Va);const mo=new ae(new Ia(.7,.7,16,50),new Oa({map:im}));mo.receiveShadow=!0;Be.add(mo);mo.userData.ground=!0;mo.position.copy(Va.position);mo.quaternion.copy(Va.quaternion);const mi=[],Ii=[],E1=new jn(.1,3,3,10,10,10),D1=new jn(.1,3,3,10,10,10),C1=new jn(3,.1,3,10,10,10),T1=new jn(3,3,.1,10,10,10),A1=new jn(3,3,.1,10,10,10),go=new Oa({transparent:!0,opacity:.1,color:65536}),sm=new ae(E1,go),rm=new ae(D1,go),om=new ae(C1,go),am=new ae(T1,go),lm=new ae(A1,go);Be.add(sm);Ii.push(sm);Be.add(rm);Ii.push(rm);Be.add(om);Ii.push(om);Be.add(am);Ii.push(am);Be.add(lm);Ii.push(lm);const vu=new vt({STATIC:!0,shape:new Oi(new E(.05,1.5,1.5))});vu.position.set(1.5,1.6-sn,0);const xu=new vt({STATIC:!0,shape:new Oi(new E(.05,1.5,1.5))});xu.position.set(-1.5,1.6-sn,0);const yu=new vt({STATIC:!0,shape:new Oi(new E(1.5,.05,1.5))});yu.position.set(0,.1-sn,0);const Mu=new vt({STATIC:!0,shape:new Oi(new E(1.5,1.5,.05))});Mu.position.set(0,1.6-sn,1.5);const wu=new vt({STATIC:!0,shape:new Oi(new E(1.5,1.5,.05))});wu.position.set(0,1.6-sn,-1.5);ln.addBody(vu);mi.push(vu);ln.addBody(xu);mi.push(xu);ln.addBody(yu);mi.push(yu);ln.addBody(Mu);mi.push(Mu);ln.addBody(wu);mi.push(wu);let Tc=[];const Hf=[16711680,65280,255,14836127,16772864,16285992];function P1(a,t,e){a=new vt({mass:1e-4,shape:new ZS(.15),sleepSpeedLimit:.5}),a.position.set(t.x,t.y,t.z),ln.addBody(a),Tc.push(a),mi.push(a);const i=new uo(.15,15,15),s=new Oa({color:e,roughness:0});a=new ae(i,s),Be.add(a),Ii.push(a)}let li=400+Math.floor(Math.random()*500);function L1(){let a=-sn;for(let e=0;e<li;e++){let n=Math.floor(Math.random()*Hf.length);var t=Hf[n];e%20==0&&(a+=.3);let i=Math.cos(2*Math.PI*e*.05),s=Math.sin(2*Math.PI*e*.05);P1("candy",{x:i,y:a,z:s},t)}}L1();const R1=new qp;R1.load(new URL("/bubblegum/assets/Pixle_Font_Medium-43b3682d.json",self.location),a=>{const t=new Or(li.toString(),{height:.05,size:.3,rotationZ:Math.PI/2,font:a}),e=new di({color:14836127}),n=new ae(t,e);n.position.set(-.25,.3-sn,.15),n.rotation.set(-Math.PI/2,0,0),Be.add(n)});const ro=document.getElementById("button1");function cm(){location.reload()}ro.addEventListener("click",function(){cm()});ro.addEventListener("mouseover",function(){ro.className="font-bold border-4 text-green-600 bg-blue-600 border-green-600 inline-block px-4 py-1 rounded-full"});ro.addEventListener("mouseout",()=>{ro.className="font-bold border-4 text-green-600 bg-yellow-400 border-green-600 inline-block px-4 py-1 rounded-full"});const wa=document.getElementById("guessButton");wa.addEventListener("mouseover",function(){wa.className="font-bold border-4 text-green-600 bg-blue-600 border-green-600 inline-block px-4 py-1 rounded-full"});wa.addEventListener("mouseout",()=>{wa.className="font-bold border-4 text-green-600 bg-yellow-400 border-green-600 inline-block px-4 py-1 rounded-full"});let Xi=0;const Ko=[],Qo=[],F1=document.getElementById("lowGuesses"),I1=document.getElementById("highGuesses"),Yi=document.getElementById("gameMessage");function N1(){let a=Number(document.getElementById("playerGuess").value);a==0?Yi.innerText="The number of GumBalls isn't 0! We wont count that as a guess, guess again.":(Xi+=1,aa==!0?(Xi-=1,Yi.innerText="You guessed it already in "+Xi+" tries! The number of GumBalls is still "+li+"!"):Ko.includes(a)||Qo.includes(a)?Yi.innerText="You already guessed that number. Guess a number you haven't tried yet!":a==li&&Xi==1?(Yi.innerText="You Guessed it! It took you "+Xi+" try. There are "+li+" GumBalls!",aa=!0,Wf()):a==li&&Xi>1?(Yi.innerText="You Guessed it! It took you "+Xi+" tries. There are "+li+" GumBalls!",aa=!0,Wf()):a<li?(Ko.push(a),Yi.innerText="Your Guess of "+a+" is Too Low, but Guess Again. You can still win!!",Ko.sort(function(t,e){return t-e}),F1.innerText="Low Guesses: "+Ko.join(", ")):a>li?(Qo.push(a),Yi.innerText="You Guessed Too High, Guess Lower than "+a+". You can still win this!",Qo.sort(function(t,e){return t-e}),I1.innerText="High Guesses: "+Qo.join(", ")):console.log("error"))}window.onkeyup=function(a){a.key.toLowerCase()==="enter"&&(N1(),document.getElementById("playerGuess").value="")};function O1(){for(let a=0;a<Tc.length;a++){let t=(Math.random()-.51)*.005,e=(Math.random()-.49)*.005,n=(Math.random()+.5)*.0015;Tc[a].applyImpulse(new E(t,n,e),new E(0,0,0))}}const z1=new uo(1,3,2),U1=new di({visible:!1}),Xs=new ae(z1,U1);Be.add(Xs);function Wf(){const a=new qp;a.load(new URL("/bubblegum/assets/Pixle_Font_Medium-43b3682d.json",self.location),t=>{const e=new Or("YOU WIN",{height:.2,size:.6,rotationZ:Math.PI/2,font:t}),n=new di({color:14836127}),i=new ae(e,n);i.position.set(-1.6,1.5-sn,2),i.rotation.set(0,0,0),Xs.add(i)}),a.load(new URL("/bubblegum/assets/Pixle_Font_Medium-43b3682d.json",self.location),t=>{const e=new Or("YOU WIN",{height:.2,size:.6,rotationZ:Math.PI/2,font:t}),n=new di({color:255}),i=new ae(e,n);i.position.set(1.6,1.5-sn,-2),i.rotation.set(0,Math.PI,0),Xs.add(i)}),a.load(new URL("/bubblegum/assets/Pixle_Font_Medium-43b3682d.json",self.location),t=>{const e=new Or("YOU WIN",{height:.2,size:.6,rotationZ:Math.PI/2,font:t}),n=new di({color:16711680}),i=new ae(e,n);i.position.set(-2,1.5-sn,-1.6),i.rotation.set(0,-Math.PI/2,0),Xs.add(i)}),a.load(new URL("/bubblegum/assets/Pixle_Font_Medium-43b3682d.json",self.location),t=>{const e=new Or("YOU WIN",{height:.2,size:.6,rotationZ:Math.PI/2,font:t}),n=new di({color:65280}),i=new ae(e,n);i.position.set(2,1.5-sn,1.6),i.rotation.set(0,Math.PI/2,0),Xs.add(i)}),O1()}function um(){requestAnimationFrame(um),ln.fixedStep(),M1(),fo.render(Be,mu),aa==!0&&(Xs.rotation.y+=-.015)}um();
