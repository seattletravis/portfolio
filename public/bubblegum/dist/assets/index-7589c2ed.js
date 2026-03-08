(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function ni(l){if(l===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return l}function Lf(l,t){l.prototype=Object.create(t.prototype),l.prototype.constructor=l,l.__proto__=t}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Zs={duration:.5,overwrite:!1,delay:0},dc,Ae,de,mn=1e8,Zt=1/mn,Ol=Math.PI*2,$p=Ol/4,Zp=0,Rf=Math.sqrt,Kp=Math.cos,Jp=Math.sin,Se=function(t){return typeof t=="string"},oe=function(t){return typeof t=="function"},ci=function(t){return typeof t=="number"},pc=function(t){return typeof t>"u"},Hn=function(t){return typeof t=="object"},Ge=function(t){return t!==!1},mc=function(){return typeof window<"u"},po=function(t){return oe(t)||Se(t)},Ff=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pe=Array.isArray,zl=/(?:-?\.?\d|\.)+/gi,If=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ns=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ra=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nf=/[+-]=-?[.\d]+/,Uf=/[^,'"\[\]\s]+/gi,Qp=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,se,un,Bl,gc,rn={},Qo={},Of,zf=function(t){return(Qo=is(t,rn))&&je},_c=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ta=function(t,e){return!e&&console.warn(t)},Bf=function(t,e){return t&&(rn[t]=e)&&Qo&&(Qo[t]=e)||rn},Ur=function(){return 0},tm={suppressEvents:!0,isStart:!0,kill:!1},Xo={suppressEvents:!0,kill:!1},em={suppressEvents:!0},vc={},wi=[],kl={},kf,Qe={},Fa={},hu=30,jo=[],xc="",yc=function(t){var e=t[0],n,i;if(Hn(e)||oe(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=jo.length;i--&&!jo[i].targetTest(e););n=jo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ud(t[i],n)))||t.splice(i,1);return t},Ji=function(t){return t._gsap||yc(gn(t))[0]._gsap},Vf=function(t,e,n){return(n=t[e])&&oe(n)?t[e]():pc(n)&&t.getAttribute&&t.getAttribute(e)||n},He=function(t,e){return(t=t.split(",")).forEach(e)||t},ce=function(t){return Math.round(t*1e5)/1e5||0},be=function(t){return Math.round(t*1e7)/1e7||0},ks=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},nm=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ea=function(){var t=wi.length,e=wi.slice(0),n,i;for(kl={},wi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Gf=function(t,e,n,i){wi.length&&!Ae&&ea(),t.render(e,n,i||Ae&&e<0&&(t._initted||t._startAt)),wi.length&&!Ae&&ea()},Hf=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Uf).length<2?e:Se(t)?t.trim():t},Wf=function(t){return t},xn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},im=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},is=function(t,e){for(var n in e)t[n]=e[n];return t},fu=function l(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Hn(e[n])?l(t[n]||(t[n]={}),e[n]):e[n]);return t},na=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Pr=function(t){var e=t.parent||se,n=t.keyframes?im(Pe(t.keyframes)):xn;if(Ge(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},sm=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},qf=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t[i],o;if(s)for(o=e[s];r&&r[s]>o;)r=r._prev;return r?(e._next=r._next,r._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=r,e.parent=e._dp=t,e},ha=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,r=e._next;s?s._next=r:t[n]===e&&(t[n]=r),r?r._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Di=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove(t),t._act=0},Qi=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},rm=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Vl=function(t,e,n,i){return t._startAt&&(Ae?t._startAt.revert(Xo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},om=function l(t){return!t||t._ts&&l(t.parent)},du=function(t){return t._repeat?Ks(t._tTime,t=t.duration()+t._rDelay)*t:0},Ks=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ia=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},fa=function(t){return t._end=be(t._start+(t._tDur/Math.abs(t._ts||t._rts||Zt)||0))},da=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),fa(t),n._dirty||Qi(n,t)),t},Xf=function(t,e){var n;if((e._time||e._initted&&!e._dur)&&(n=ia(t.rawTime(),e),(!e._dur||Jr(0,e.totalDuration(),n)-e._tTime>Zt)&&e.render(n,!0)),Qi(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Zt}},zn=function(t,e,n,i){return e.parent&&Di(e),e._start=be((ci(n)?n:n||t!==se?cn(t,n,e):t._time)+e._delay),e._end=be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),qf(t,e,"_first","_last",t._sort?"_start":0),Gl(e)||(t._recent=e),i||Xf(t,e),t._ts<0&&da(t,t._tTime),t},jf=function(t,e){return(rn.ScrollTrigger||_c("scrollTrigger",e))&&rn.ScrollTrigger.create(e,t)},Yf=function(t,e,n,i,s){if(wc(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Ae&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&kf!==en.frame)return wi.push(t),t._lazy=[s,i],1},am=function l(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||l(e))},Gl=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},lm=function(t,e,n,i){var s=t.ratio,r=e<0||!e&&(!t._start&&am(t)&&!(!t._initted&&Gl(t))||(t._ts<0||t._dp._ts<0)&&!Gl(t))?0:1,o=t._rDelay,a=0,c,u,f;if(o&&t._repeat&&(a=Jr(0,t._tDur,e),u=Ks(a,o),t._yoyo&&u&1&&(r=1-r),u!==Ks(t._tTime,o)&&(s=1-r,t.vars.repeatRefresh&&t._initted&&t.invalidate())),r!==s||Ae||i||t._zTime===Zt||!e&&t._zTime){if(!t._initted&&Yf(t,e,i,n,a))return;for(f=t._zTime,t._zTime=e||(n?Zt:0),n||(n=e&&!f),t.ratio=r,t._from&&(r=1-r),t._time=0,t._tTime=a,c=t._pt;c;)c.r(r,c.d),c=c._next;e<0&&Vl(t,e,n,!0),t._onUpdate&&!n&&_n(t,"onUpdate"),a&&t._repeat&&!n&&t.parent&&_n(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===r&&(r&&Di(t,1),!n&&!Ae&&(_n(t,r?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},cm=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Js=function(t,e,n,i){var s=t._repeat,r=be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=r/t._dur),t._dur=r,t._tDur=s?s<0?1e10:be(r*(s+1)+t._rDelay*s):r,o>0&&!i&&da(t,t._tTime=t._tDur*o),t.parent&&fa(t),n||Qi(t.parent,t),t},pu=function(t){return t instanceof Ve?Qi(t):Js(t,t._dur)},um={_start:0,endTime:Ur,totalDuration:Ur},cn=function l(t,e,n){var i=t.labels,s=t._recent||um,r=t.duration()>=mn?s.endTime(!1):t._dur,o,a,c;return Se(e)&&(isNaN(e)||e in i)?(a=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),a==="<"||a===">"?(o>=0&&(e=e.replace(/=/,"")),(a==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=r),i[e]):(a=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(a=a/100*(Pe(n)?n[0]:n).totalDuration()),o>1?l(t,e.substr(0,o-1),n)+a:r+a)):e==null?r:+e},Lr=function(t,e,n){var i=ci(e[1]),s=(i?2:1)+(t<2?0:1),r=e[s],o,a;if(i&&(r.duration=e[1]),r.parent=n,t){for(o=r,a=n;a&&!("immediateRender"in o);)o=a.vars.defaults||{},a=Ge(a.vars.inherit)&&a.parent;r.immediateRender=Ge(o.immediateRender),t<2?r.runBackwards=1:r.startAt=e[s-1]}return new _e(e[0],r,e[s+1])},Ri=function(t,e){return t||t===0?e(t):e},Jr=function(t,e,n){return n<t?t:n>e?e:n},Te=function(t,e){return!Se(t)||!(e=Qp.exec(t))?"":e[1]},hm=function(t,e,n){return Ri(n,function(i){return Jr(t,e,i)})},Hl=[].slice,$f=function(t,e){return t&&Hn(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Hn(t[0]))&&!t.nodeType&&t!==un},fm=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Se(i)&&!e||$f(i,1)?(s=n).push.apply(s,gn(i)):n.push(i)})||n},gn=function(t,e,n){return de&&!e&&de.selector?de.selector(t):Se(t)&&!n&&(Bl||!Qs())?Hl.call((e||gc).querySelectorAll(t),0):Pe(t)?fm(t,n):$f(t)?Hl.call(t,0):t?[t]:[]},Wl=function(t){return t=gn(t)[0]||ta("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return gn(e,n.querySelectorAll?n:n===t?ta("Invalid scope")||gc.createElement("div"):t)}},Zf=function(t){return t.sort(function(){return .5-Math.random()})},Kf=function(t){if(oe(t))return t;var e=Hn(t)?t:{each:t},n=ts(e.ease),i=e.from||0,s=parseFloat(e.base)||0,r={},o=i>0&&i<1,a=isNaN(i)||o,c=e.axis,u=i,f=i;return Se(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&a&&(u=i[0],f=i[1]),function(h,p,_){var g=(_||e).length,m=r[g],d,v,y,x,M,E,D,T,w;if(!m){if(w=e.grid==="auto"?0:(e.grid||[1,mn])[1],!w){for(D=-mn;D<(D=_[w++].getBoundingClientRect().left)&&w<g;);w--}for(m=r[g]=[],d=a?Math.min(w,g)*u-.5:i%w,v=w===mn?0:a?g*f/w-.5:i/w|0,D=0,T=mn,E=0;E<g;E++)y=E%w-d,x=v-(E/w|0),m[E]=M=c?Math.abs(c==="y"?x:y):Rf(y*y+x*x),M>D&&(D=M),M<T&&(T=M);i==="random"&&Zf(m),m.max=D-T,m.min=T,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(w>g?g-1:c?c==="y"?g/w:w:Math.max(w,g/w))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Te(e.amount||e.each)||0,n=n&&g<0?ad(n):n}return g=(m[h]-m.min)/m.max||0,be(m.b+(n?n(g):g)*m.v)+m.u}},ql=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ci(n)?0:Te(n))}},Jf=function(t,e){var n=Pe(t),i,s;return!n&&Hn(t)&&(i=n=t.radius||mn,t.values?(t=gn(t.values),(s=!ci(t[0]))&&(i*=i)):t=ql(t.increment)),Ri(e,n?oe(t)?function(r){return s=t(r),Math.abs(s-r)<=i?s:r}:function(r){for(var o=parseFloat(s?r.x:r),a=parseFloat(s?r.y:0),c=mn,u=0,f=t.length,h,p;f--;)s?(h=t[f].x-o,p=t[f].y-a,h=h*h+p*p):h=Math.abs(t[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?t[u]:r,s||u===r||ci(r)?u:u+Te(r)}:ql(t))},Qf=function(t,e,n,i){return Ri(Pe(t)?!e:n===!0?!!(n=0):!i,function(){return Pe(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},dm=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,r){return r(s)},i)}},pm=function(t,e){return function(n){return t(parseFloat(n))+(e||Te(n))}},mm=function(t,e,n){return ed(t,e,0,1,n)},td=function(t,e,n){return Ri(n,function(i){return t[~~e(i)]})},gm=function l(t,e,n){var i=e-t;return Pe(t)?td(t,l(0,t.length),e):Ri(n,function(s){return(i+(s-t)%i)%i+t})},_m=function l(t,e,n){var i=e-t,s=i*2;return Pe(t)?td(t,l(0,t.length-1),e):Ri(n,function(r){return r=(s+(r-t)%s)%s||0,t+(r>i?s-r:r)})},Or=function(t){for(var e=0,n="",i,s,r,o;~(i=t.indexOf("random(",e));)r=t.indexOf(")",i),o=t.charAt(i+7)==="[",s=t.substr(i+7,r-i-7).match(o?Uf:zl),n+=t.substr(e,i-e)+Qf(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),e=r+1;return n+t.substr(e,t.length-e)},ed=function(t,e,n,i,s){var r=e-t,o=i-n;return Ri(s,function(a){return n+((a-t)/r*o||0)})},vm=function l(t,e,n,i){var s=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!s){var r=Se(t),o={},a,c,u,f,h;if(n===!0&&(i=1)&&(n=null),r)t={p:t},e={p:e};else if(Pe(t)&&!Pe(e)){for(u=[],f=t.length,h=f-2,c=1;c<f;c++)u.push(l(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=is(Pe(t)?[]:{},t));if(!u){for(a in e)Mc.call(o,t,a,"get",e[a]);s=function(_){return Ec(_,o)||(r?t.p:t)}}}return Ri(n,s)},mu=function(t,e,n){var i=t.labels,s=mn,r,o,a;for(r in i)o=i[r]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(a=r,s=o);return a},_n=function(t,e,n){var i=t.vars,s=i[e],r=de,o=t._ctx,a,c,u;if(s)return a=i[e+"Params"],c=i.callbackScope||t,n&&wi.length&&ea(),o&&(de=o),u=a?s.apply(c,a):s.call(c),de=r,u},br=function(t){return Di(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Ae),t.progress()<1&&_n(t,"onInterrupt"),t},Us,nd=[],id=function(t){if(!mc()){nd.push(t);return}t=!t.name&&t.default||t;var e=t.name,n=oe(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Ur,render:Ec,add:Mc,kill:Im,modifier:Fm,rawVars:0},r={targetTest:0,get:0,getSetter:bc,aliases:{},register:0};if(Qs(),t!==i){if(Qe[e])return;xn(i,xn(na(t,s),r)),is(i.prototype,is(s,na(t,r))),Qe[i.prop=e]=i,t.targetTest&&(jo.push(i),vc[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bf(e,i),t.register&&t.register(je,i,We)},$t=255,Er={aqua:[0,$t,$t],lime:[0,$t,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,$t],navy:[0,0,128],white:[$t,$t,$t],olive:[128,128,0],yellow:[$t,$t,0],orange:[$t,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[$t,0,0],pink:[$t,192,203],cyan:[0,$t,$t],transparent:[$t,$t,$t,0]},Ia=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*$t+.5|0},sd=function(t,e,n){var i=t?ci(t)?[t>>16,t>>8&$t,t&$t]:0:Er.black,s,r,o,a,c,u,f,h,p,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Er[t])i=Er[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),r=t.charAt(2),o=t.charAt(3),t="#"+s+s+r+r+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&$t,i&$t,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&$t,t&$t]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(zl),!e)a=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,r=u<=.5?u*(c+1):u+c-u*c,s=u*2-r,i.length>3&&(i[3]*=1),i[0]=Ia(a+1/3,s,r),i[1]=Ia(a,s,r),i[2]=Ia(a-1/3,s,r);else if(~t.indexOf("="))return i=t.match(If),n&&i.length<4&&(i[3]=1),i}else i=t.match(zl)||Er.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/$t,r=i[1]/$t,o=i[2]/$t,f=Math.max(s,r,o),h=Math.min(s,r,o),u=(f+h)/2,f===h?a=c=0:(p=f-h,c=u>.5?p/(2-f-h):p/(f+h),a=f===s?(r-o)/p+(r<o?6:0):f===r?(o-s)/p+2:(s-r)/p+4,a*=60),i[0]=~~(a+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rd=function(t){var e=[],n=[],i=-1;return t.split(Si).forEach(function(s){var r=s.match(Ns)||[];e.push.apply(e,r),n.push(i+=r.length+1)}),e.c=n,e},gu=function(t,e,n){var i="",s=(t+i).match(Si),r=e?"hsla(":"rgba(",o=0,a,c,u,f;if(!s)return t;if(s=s.map(function(h){return(h=sd(h,e,1))&&r+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=rd(t),a=n.c,a.join(i)!==u.c.join(i)))for(c=t.replace(Si,"1").split(Ns),f=c.length-1;o<f;o++)i+=c[o]+(~a.indexOf(o)?s.shift()||r+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(Si),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},Si=function(){var l="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Er)l+="|"+t+"\\b";return new RegExp(l+")","gi")}(),xm=/hsl[a]?\(/,od=function(t){var e=t.join(" "),n;if(Si.lastIndex=0,Si.test(e))return n=xm.test(e),t[1]=gu(t[1],n),t[0]=gu(t[0],n,rd(t[1])),!0},zr,en=function(){var l=Date.now,t=500,e=33,n=l(),i=n,s=1e3/240,r=s,o=[],a,c,u,f,h,p,_=function g(m){var d=l()-i,v=m===!0,y,x,M,E;if(d>t&&(n+=d-e),i+=d,M=i-n,y=M-r,(y>0||v)&&(E=++f.frame,h=M-f.time*1e3,f.time=M=M/1e3,r+=y+(y>=s?4:s-y),x=1),v||(a=c(g)),x)for(p=0;p<o.length;p++)o[p](M,h,E,m)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Of&&(!Bl&&mc()&&(un=Bl=window,gc=un.document||{},rn.gsap=je,(un.gsapVersions||(un.gsapVersions=[])).push(je.version),zf(Qo||un.GreenSockGlobals||!un.gsap&&un||{}),u=un.requestAnimationFrame,nd.forEach(id)),a&&f.sleep(),c=u||function(m){return setTimeout(m,r-f.time*1e3+1|0)},zr=1,_(2))},sleep:function(){(u?un.cancelAnimationFrame:clearTimeout)(a),zr=0,c=Ur},lagSmoothing:function(m,d){t=m||1/0,e=Math.min(d||33,t)},fps:function(m){s=1e3/(m||240),r=f.time*1e3+s},add:function(m,d,v){var y=d?function(x,M,E,D){m(x,M,E,D),f.remove(y)}:m;return f.remove(m),o[v?"unshift":"push"](y),Qs(),y},remove:function(m,d){~(d=o.indexOf(m))&&o.splice(d,1)&&p>=d&&p--},_listeners:o},f}(),Qs=function(){return!zr&&en.wake()},Bt={},ym=/^[\d.\-M][\d.\-,\s]/,Mm=/["']/g,wm=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,r=n.length,o,a,c;s<r;s++)a=n[s],o=s!==r-1?a.lastIndexOf(","):a.length,c=a.substr(0,o),e[i]=isNaN(c)?c.replace(Mm,"").trim():+c,i=a.substr(o+1).trim();return e},Sm=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},bm=function(t){var e=(t+"").split("("),n=Bt[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[wm(e[1])]:Sm(t).split(",").map(Hf)):Bt._CE&&ym.test(t)?Bt._CE("",t):n},ad=function(t){return function(e){return 1-t(1-e)}},ld=function l(t,e){for(var n=t._first,i;n;)n instanceof Ve?l(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?l(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ts=function(t,e){return t&&(oe(t)?t:Bt[t]||bm(t))||e},hs=function(t,e,n,i){n===void 0&&(n=function(a){return 1-e(1-a)}),i===void 0&&(i=function(a){return a<.5?e(a*2)/2:1-e((1-a)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},r;return He(t,function(o){Bt[o]=rn[o]=s,Bt[r=o.toLowerCase()]=n;for(var a in s)Bt[r+(a==="easeIn"?".in":a==="easeOut"?".out":".inOut")]=Bt[o+"."+a]=s[a]}),s},cd=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Na=function l(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),r=s/Ol*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Jp((u-r)*s)+1},a=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:cd(o);return s=Ol/s,a.config=function(c,u){return l(t,c,u)},a},Ua=function l(t,e){e===void 0&&(e=1.70158);var n=function(r){return r?--r*r*((e+1)*r+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:cd(n);return i.config=function(s){return l(t,s)},i};He("Linear,Quad,Cubic,Quart,Quint,Strong",function(l,t){var e=t<5?t+1:t;hs(l+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn;hs("Elastic",Na("in"),Na("out"),Na());(function(l,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?l*o*o:o<n?l*Math.pow(o-1.5/t,2)+.75:o<i?l*(o-=2.25/t)*o+.9375:l*Math.pow(o-2.625/t,2)+.984375};hs("Bounce",function(r){return 1-s(1-r)},s)})(7.5625,2.75);hs("Expo",function(l){return l?Math.pow(2,10*(l-1)):0});hs("Circ",function(l){return-(Rf(1-l*l)-1)});hs("Sine",function(l){return l===1?1:-Kp(l*$p)+1});hs("Back",Ua("in"),Ua("out"),Ua());Bt.SteppedEase=Bt.steps=rn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,r=1-Zt;return function(o){return((i*Jr(0,r,o)|0)+s)*n}}};Zs.ease=Bt["quad.out"];He("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(l){return xc+=l+","+l+"Params,"});var ud=function(t,e){this.id=Zp++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Vf,this.set=e?e.getSetter:bc},tr=function(){function l(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Js(this,+e.duration,1,1),this.data=e.data,de&&(this._ctx=de,de.data.push(this)),zr||en.wake()}var t=l.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Js(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Qs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(da(this,n),!s._dp||s.parent||Xf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&zn(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Zt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gf(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+du(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+du(this),i):this.duration()?Math.min(1,this._time/this._dur):this.ratio},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ks(this._tTime,s)+1:1},t.timeScale=function(n){if(!arguments.length)return this._rts===-Zt?0:this._rts;if(this._rts===n)return this;var i=this.parent&&this._ts?ia(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Zt?0:this._rts,this.totalTime(Jr(-Math.abs(this._delay),this._tDur,i),!0),fa(this),rm(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Qs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Zt&&(this._tTime-=Zt)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&zn(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Ge(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ia(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=em);var i=Ae;return Ae=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Ae=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(i._ts||1),i=i._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pu(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pu(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(cn(this,n),Ge(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ge(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Zt:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Zt,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Zt)},t.eventCallback=function(n,i,s){var r=this.vars;return arguments.length>1?(i?(r[n]=i,s&&(r[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete r[n],this):r[n]},t.then=function(n){var i=this;return new Promise(function(s){var r=oe(n)?n:Wf,o=function(){var c=i.then;i.then=null,oe(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=c),s(r),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},t.kill=function(){br(this)},l}();xn(tr.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Zt,_prom:0,_ps:!1,_rts:1});var Ve=function(l){Lf(t,l);function t(n,i){var s;return n===void 0&&(n={}),s=l.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ge(n.sortChildren),se&&zn(n.parent||se,ni(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jf(ni(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,r){return Lr(0,arguments,this),this},e.from=function(i,s,r){return Lr(1,arguments,this),this},e.fromTo=function(i,s,r,o){return Lr(2,arguments,this),this},e.set=function(i,s,r){return s.duration=0,s.parent=this,Pr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new _e(i,s,cn(this,r),1),this},e.call=function(i,s,r){return zn(this,_e.delayedCall(0,i,s),r)},e.staggerTo=function(i,s,r,o,a,c,u){return r.duration=s,r.stagger=r.stagger||o,r.onComplete=c,r.onCompleteParams=u,r.parent=this,new _e(i,r,cn(this,a)),this},e.staggerFrom=function(i,s,r,o,a,c,u){return r.runBackwards=1,Pr(r).immediateRender=Ge(r.immediateRender),this.staggerTo(i,s,r,o,a,c,u)},e.staggerFromTo=function(i,s,r,o,a,c,u,f){return o.startAt=r,Pr(o).immediateRender=Ge(o.immediateRender),this.staggerTo(i,s,o,a,c,u,f)},e.render=function(i,s,r){var o=this._time,a=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:be(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,p,_,g,m,d,v,y,x,M,E,D;if(this!==se&&u>a&&i>=0&&(u=a),u!==this._tTime||r||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,x=this._start,y=this._ts,d=!y,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,r);if(h=be(u%m),u===a?(g=this._repeat,h=c):(g=~~(u/m),g&&g===u/m&&(h=c,g--),h>c&&(h=c)),M=Ks(this._tTime,m),!o&&this._tTime&&M!==g&&this._tTime-M*m-this._dur<=0&&(M=g),E&&g&1&&(h=c-h,D=1),g!==M&&!this._lock){var T=E&&M&1,w=T===(E&&g&1);if(g<M&&(T=!T),o=T?0:c,this._lock=1,this.render(o||(D?0:be(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_n(this,"onRepeat"),this.vars.repeatRefresh&&!D&&(this.invalidate()._lock=1),o&&o!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,a=this._tDur,w&&(this._lock=2,o=T?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!D&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;ld(this,D)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=cm(this,be(o),be(h)),v&&(u-=h-(h=v._start))),this._tTime=u,this._time=h,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!g&&(_n(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(p=this._first;p;){if(_=p._next,(p._act||h>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,r),h!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=-Zt);break}}p=_}else{p=this._last;for(var b=i<0?i:h;p;){if(_=p._prev,(p._act||b<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(i,s,r);if(p.render(p._ts>0?(b-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(b-p._start)*p._ts,s,r||Ae&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){v=0,_&&(u+=this._zTime=b?-Zt:Zt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(h>=o?0:-Zt)._zTime=h>=o?1:-1,this._ts))return this._start=x,fa(this),this.render(i,s,r);this._onUpdate&&!s&&_n(this,"onUpdate",!0),(u===a&&this._tTime>=this.totalDuration()||!u&&o)&&(x===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===a&&this._ts>0||!u&&this._ts<0)&&Di(this,1),!s&&!(i<0&&!o)&&(u||o||!a)&&(_n(this,u===a&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<a&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var r=this;if(ci(s)||(s=cn(this,s,i)),!(i instanceof tr)){if(Pe(i))return i.forEach(function(o){return r.add(o,s)}),this;if(Se(i))return this.addLabel(i,s);if(oe(i))i=_e.delayedCall(0,i);else return this}return this!==i?zn(this,i,s):this},e.getChildren=function(i,s,r,o){i===void 0&&(i=!0),s===void 0&&(s=!0),r===void 0&&(r=!0),o===void 0&&(o=-mn);for(var a=[],c=this._first;c;)c._start>=o&&(c instanceof _e?s&&a.push(c):(r&&a.push(c),i&&a.push.apply(a,c.getChildren(!0,s,r)))),c=c._next;return a},e.getById=function(i){for(var s=this.getChildren(1,1,1),r=s.length;r--;)if(s[r].vars.id===i)return s[r]},e.remove=function(i){return Se(i)?this.removeLabel(i):oe(i)?this.killTweensOf(i):(ha(this,i),i===this._recent&&(this._recent=this._last),Qi(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=be(en.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),l.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=cn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,r){var o=_e.delayedCall(0,s||Ur,r);return o.data="isPause",this._hasPause=1,zn(this,o,cn(this,i))},e.removePause=function(i){var s=this._first;for(i=cn(this,i);s;)s._start===i&&s.data==="isPause"&&Di(s),s=s._next},e.killTweensOf=function(i,s,r){for(var o=this.getTweensOf(i,r),a=o.length;a--;)xi!==o[a]&&o[a].kill(i,s);return this},e.getTweensOf=function(i,s){for(var r=[],o=gn(i),a=this._first,c=ci(s),u;a;)a instanceof _e?nm(a._targets,o)&&(c?(!xi||a._initted&&a._ts)&&a.globalTime(0)<=s&&a.globalTime(a.totalDuration())>s:!s||a.isActive())&&r.push(a):(u=a.getTweensOf(o,s)).length&&r.push.apply(r,u),a=a._next;return r},e.tweenTo=function(i,s){s=s||{};var r=this,o=cn(r,i),a=s,c=a.startAt,u=a.onStart,f=a.onStartParams,h=a.immediateRender,p,_=_e.to(r,xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale())||Zt,onStart:function(){if(r.pause(),!p){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:r._time))/r.timeScale());_._dur!==m&&Js(_,m,0,1).render(_._time,!0,!0),p=1}u&&u.apply(_,f||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,r){return this.tweenTo(s,xn({startAt:{time:cn(this,i)}},r))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),mu(this,cn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),mu(this,cn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Zt)},e.shiftChildren=function(i,s,r){r===void 0&&(r=0);for(var o=this._first,a=this.labels,c;o;)o._start>=r&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in a)a[c]>=r&&(a[c]+=i);return Qi(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return l.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,r;s;)r=s._next,this.remove(s),s=r;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Qi(this)},e.totalDuration=function(i){var s=0,r=this,o=r._last,a=mn,c,u,f;if(arguments.length)return r.timeScale((r._repeat<0?r.duration():r.totalDuration())/(r.reversed()?-i:i));if(r._dirty){for(f=r.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>a&&r._sort&&o._ts&&!r._lock?(r._lock=1,zn(r,o,u-o._delay,1)._lock=0):a=u,u<0&&o._ts&&(s-=u,(!f&&!r._dp||f&&f.smoothChildTiming)&&(r._start+=u/r._ts,r._time-=u,r._tTime-=u),r.shiftChildren(-u,!1,-1/0),a=0),o._end>s&&o._ts&&(s=o._end),o=c;Js(r,r===se&&r._time>s?r._time:s,1,1),r._dirty=0}return r._tDur},t.updateRoot=function(i){if(se._ts&&(Gf(se,ia(i,se)),kf=en.frame),en.frame>=hu){hu+=nn.autoSleep||120;var s=se._first;if((!s||!s._ts)&&nn.autoSleep&&en._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||en.sleep()}}},t}(tr);xn(Ve.prototype,{_lock:0,_hasPause:0,_forcing:0});var Em=function(t,e,n,i,s,r,o){var a=new We(this._pt,t,e,0,1,gd,null,s),c=0,u=0,f,h,p,_,g,m,d,v;for(a.b=n,a.e=i,n+="",i+="",(d=~i.indexOf("random("))&&(i=Or(i)),r&&(v=[n,i],r(v,t,e),n=v[0],i=v[1]),h=n.match(Ra)||[];f=Ra.exec(i);)_=f[0],g=i.substring(c,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),_!==h[u++]&&(m=parseFloat(h[u-1])||0,a._pt={_next:a._pt,p:g||u===1?g:",",s:m,c:_.charAt(1)==="="?ks(m,_)-m:parseFloat(_)-m,m:p&&p<4?Math.round:0},c=Ra.lastIndex);return a.c=c<i.length?i.substring(c,i.length):"",a.fp=o,(Nf.test(i)||d)&&(a.e=0),this._pt=a,a},Mc=function(t,e,n,i,s,r,o,a,c,u){oe(i)&&(i=i(s||0,t,r));var f=t[e],h=n!=="get"?n:oe(f)?c?t[e.indexOf("set")||!oe(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,p=oe(f)?c?Pm:pd:Sc,_;if(Se(i)&&(~i.indexOf("random(")&&(i=Or(i)),i.charAt(1)==="="&&(_=ks(h,i)+(Te(h)||0),(_||_===0)&&(i=_))),!u||h!==i||Xl)return!isNaN(h*i)&&i!==""?(_=new We(this._pt,t,e,+h||0,i-(h||0),typeof f=="boolean"?Rm:md,0,p),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&_c(e,i),Em.call(this,t,e,h,i,p,a||nn.stringFilter,c))},Dm=function(t,e,n,i,s){if(oe(t)&&(t=Rr(t,s,e,n,i)),!Hn(t)||t.style&&t.nodeType||Pe(t)||Ff(t))return Se(t)?Rr(t,s,e,n,i):t;var r={},o;for(o in t)r[o]=Rr(t[o],s,e,n,i);return r},hd=function(t,e,n,i,s,r){var o,a,c,u;if(Qe[t]&&(o=new Qe[t]).init(s,o.rawVars?e[t]:Dm(e[t],i,s,r,n),n,i,r)!==!1&&(n._pt=a=new We(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Us))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=a;return o},xi,Xl,wc=function l(t,e,n){var i=t.vars,s=i.ease,r=i.startAt,o=i.immediateRender,a=i.lazy,c=i.onUpdate,u=i.onUpdateParams,f=i.callbackScope,h=i.runBackwards,p=i.yoyoEase,_=i.keyframes,g=i.autoRevert,m=t._dur,d=t._startAt,v=t._targets,y=t.parent,x=y&&y.data==="nested"?y.vars.targets:v,M=t._overwrite==="auto"&&!dc,E=t.timeline,D,T,w,b,N,O,A,R,L,I,q,k,Y;if(E&&(!_||!s)&&(s="none"),t._ease=ts(s,Zs.ease),t._yEase=p?ad(ts(p===!0?s:p,Zs.ease)):0,p&&t._yoyo&&!t._repeat&&(p=t._yEase,t._yEase=t._ease,t._ease=p),t._from=!E&&!!i.runBackwards,!E||_&&!i.stagger){if(R=v[0]?Ji(v[0]).harness:0,k=R&&i[R.prop],D=na(i,vc),d&&(d._zTime<0&&d.progress(1),e<0&&h&&o&&!g?d.render(-1,!0):d.revert(h&&m?Xo:tm),d._lazy=0),r){if(Di(t._startAt=_e.set(v,xn({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!d&&Ge(a),startAt:null,delay:0,onUpdate:c,onUpdateParams:u,callbackScope:f,stagger:0},r))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ae||!o&&!g)&&t._startAt.revert(Xo),o&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!d){if(e&&(o=!1),w=xn({overwrite:!1,data:"isFromStart",lazy:o&&!d&&Ge(a),immediateRender:o,stagger:0,parent:y},D),k&&(w[R.prop]=k),Di(t._startAt=_e.set(v,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Ae?t._startAt.revert(Xo):t._startAt.render(-1,!0)),t._zTime=e,!o)l(t._startAt,Zt,Zt);else if(!e)return}for(t._pt=t._ptCache=0,a=m&&Ge(a)||a&&!m,T=0;T<v.length;T++){if(N=v[T],A=N._gsap||yc(v)[T]._gsap,t._ptLookup[T]=I={},kl[A.id]&&wi.length&&ea(),q=x===v?T:x.indexOf(N),R&&(L=new R).init(N,k||D,t,q,x)!==!1&&(t._pt=b=new We(t._pt,N,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(Q){I[Q]=b}),L.priority&&(O=1)),!R||k)for(w in D)Qe[w]&&(L=hd(w,D,t,q,N,x))?L.priority&&(O=1):I[w]=b=Mc.call(t,N,w,"get",D[w],q,x,0,i.stringFilter);t._op&&t._op[T]&&t.kill(N,t._op[T]),M&&t._pt&&(xi=t,se.killTweensOf(N,I,t.globalTime(e)),Y=!t.parent,xi=0),t._pt&&a&&(kl[A.id]=1)}O&&_d(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Y,_&&e<=0&&E.render(mn,!0,!0)},Cm=function(t,e,n,i,s,r,o){var a=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,f,h;if(!a)for(a=t._ptCache[e]=[],f=t._ptLookup,h=t._targets.length;h--;){if(c=f[h][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Xl=1,t.vars[e]="+=0",wc(t,o),Xl=0,1;a.push(c)}for(h=a.length;h--;)u=a[h],c=u._pt||u,c.s=(i||i===0)&&!s?i:c.s+(i||0)+r*c.c,c.c=n-c.s,u.e&&(u.e=ce(n)+Te(u.e)),u.b&&(u.b=c.s+Te(u.b))},Tm=function(t,e){var n=t[0]?Ji(t[0]).harness:0,i=n&&n.aliases,s,r,o,a;if(!i)return e;s=is({},e);for(r in i)if(r in s)for(a=i[r].split(","),o=a.length;o--;)s[a[o]]=s[r];return s},Am=function(t,e,n,i){var s=e.ease||i||"power1.inOut",r,o;if(Pe(e))o=n[t]||(n[t]=[]),e.forEach(function(a,c){return o.push({t:c/(e.length-1)*100,v:a,e:s})});else for(r in e)o=n[r]||(n[r]=[]),r==="ease"||o.push({t:parseFloat(t),v:e[r],e:s})},Rr=function(t,e,n,i,s){return oe(t)?t.call(e,n,i,s):Se(t)&&~t.indexOf("random(")?Or(t):t},fd=xc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dd={};He(fd+",id,stagger,delay,duration,paused,scrollTrigger",function(l){return dd[l]=1});var _e=function(l){Lf(t,l);function t(n,i,s,r){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=l.call(this,r?i:Pr(i))||this;var a=o.vars,c=a.duration,u=a.delay,f=a.immediateRender,h=a.stagger,p=a.overwrite,_=a.keyframes,g=a.defaults,m=a.scrollTrigger,d=a.yoyoEase,v=i.parent||se,y=(Pe(n)||Ff(n)?ci(n[0]):"length"in i)?[n]:gn(n),x,M,E,D,T,w,b,N;if(o._targets=y.length?yc(y):ta("GSAP target "+n+" not found. https://greensock.com",!nn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,_||h||po(c)||po(u)){if(i=o.vars,x=o.timeline=new Ve({data:"nested",defaults:g||{},targets:v&&v.data==="nested"?v.vars.targets:y}),x.kill(),x.parent=x._dp=ni(o),x._start=0,h||po(c)||po(u)){if(D=y.length,b=h&&Kf(h),Hn(h))for(T in h)~fd.indexOf(T)&&(N||(N={}),N[T]=h[T]);for(M=0;M<D;M++)E=na(i,dd),E.stagger=0,d&&(E.yoyoEase=d),N&&is(E,N),w=y[M],E.duration=+Rr(c,ni(o),M,w,y),E.delay=(+Rr(u,ni(o),M,w,y)||0)-o._delay,!h&&D===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),x.to(w,E,b?b(M,w,y):0),x._ease=Bt.none;x.duration()?c=u=0:o.timeline=0}else if(_){Pr(xn(x.vars.defaults,{ease:"none"})),x._ease=ts(_.ease||i.ease||"none");var O=0,A,R,L;if(Pe(_))_.forEach(function(I){return x.to(y,I,">")}),x.duration();else{E={};for(T in _)T==="ease"||T==="easeEach"||Am(T,_[T],E,_.easeEach);for(T in E)for(A=E[T].sort(function(I,q){return I.t-q.t}),O=0,M=0;M<A.length;M++)R=A[M],L={ease:R.e,duration:(R.t-(M?A[M-1].t:0))/100*c},L[T]=R.v,x.to(y,L,O),O+=L.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return p===!0&&!dc&&(xi=ni(o),se.killTweensOf(y),xi=0),zn(v,ni(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===be(v._time)&&Ge(f)&&om(ni(o))&&v.data!=="nested")&&(o._tTime=-Zt,o.render(Math.max(0,-u)||0)),m&&jf(ni(o),m),o}var e=t.prototype;return e.render=function(i,s,r){var o=this._time,a=this._tDur,c=this._dur,u=i<0,f=i>a-Zt&&!u?a:i<Zt?0:i,h,p,_,g,m,d,v,y,x;if(!c)lm(this,i,s,r);else if(f!==this._tTime||!i||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,y=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,r);if(h=be(f%g),f===a?(_=this._repeat,h=c):(_=~~(f/g),_&&_===f/g&&(h=c,_--),h>c&&(h=c)),d=this._yoyo&&_&1,d&&(x=this._yEase,h=c-h),m=Ks(this._tTime,g),h===o&&!r&&this._initted)return this._tTime=f,this;_!==m&&(y&&this._yEase&&ld(y,d),this.vars.repeatRefresh&&!d&&!this._lock&&(this._lock=r=1,this.render(be(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Yf(this,u?i:h,r,s,f))return this._tTime=0,this;if(o!==this._time)return this;if(c!==this._dur)return this.render(i,s,r)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(x||this._ease)(h/c),this._from&&(this.ratio=v=1-v),h&&!o&&!s&&!_&&(_n(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;y&&y.render(i<0?i:!h&&d?-Zt:y._dur*y._ease(h/this._dur),s,r)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Vl(this,i,s,r),_n(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&_n(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Vl(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Di(this,1),!s&&!(u&&!o)&&(f||o||d)&&(_n(this,f===a?"onComplete":"onReverseComplete",!0),this._prom&&!(f<a&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),l.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,r,o){zr||en.wake(),this._ts||this.play();var a=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||wc(this,a),c=this._ease(a/this._dur),Cm(this,i,s,r,o,c,a)?this.resetTo(i,s,r,o):(da(this,0),this.parent||qf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?br(this):this;if(this.timeline){var r=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,xi&&xi.vars.overwrite!==!0)._first||br(this),this.parent&&r!==this.timeline.totalDuration()&&Js(this,this._dur*this.timeline._tDur/r,0,1),this}var o=this._targets,a=i?gn(i):o,c=this._ptLookup,u=this._pt,f,h,p,_,g,m,d;if((!s||s==="all")&&sm(o,a))return s==="all"&&(this._pt=0),br(this);for(f=this._op=this._op||[],s!=="all"&&(Se(s)&&(g={},He(s,function(v){return g[v]=1}),s=g),s=Tm(o,s)),d=o.length;d--;)if(~a.indexOf(o[d])){h=c[d],s==="all"?(f[d]=s,_=h,p={}):(p=f[d]=f[d]||{},_=s);for(g in _)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ha(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&u&&br(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Lr(1,arguments)},t.delayedCall=function(i,s,r,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:o})},t.fromTo=function(i,s,r){return Lr(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,r){return se.killTweensOf(i,s,r)},t}(tr);xn(_e.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});He("staggerTo,staggerFrom,staggerFromTo",function(l){_e[l]=function(){var t=new Ve,e=Hl.call(arguments,0);return e.splice(l==="staggerFromTo"?5:4,0,0),t[l].apply(t,e)}});var Sc=function(t,e,n){return t[e]=n},pd=function(t,e,n){return t[e](n)},Pm=function(t,e,n,i){return t[e](i.fp,n)},Lm=function(t,e,n){return t.setAttribute(e,n)},bc=function(t,e){return oe(t[e])?pd:pc(t[e])&&t.setAttribute?Lm:Sc},md=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Rm=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gd=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Ec=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Fm=function(t,e,n,i){for(var s=this._pt,r;s;)r=s._next,s.p===i&&s.modifier(t,e,n),s=r},Im=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ha(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Nm=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},_d=function(t){for(var e=t._pt,n,i,s,r;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:r)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:r=e,e=n}t._pt=s},We=function(){function l(e,n,i,s,r,o,a,c,u){this.t=n,this.s=s,this.c=r,this.p=i,this.r=o||md,this.d=a||this,this.set=c||Sc,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=l.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Nm,this.m=n,this.mt=s,this.tween=i},l}();He(xc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(l){return vc[l]=1});rn.TweenMax=rn.TweenLite=_e;rn.TimelineLite=rn.TimelineMax=Ve;se=new Ve({sortChildren:!1,defaults:Zs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});nn.stringFilter=od;var er=[],Yo={},Um=[],_u=0,Oa=function(t){return(Yo[t]||Um).map(function(e){return e()})},jl=function(){var t=Date.now(),e=[];t-_u>2&&(Oa("matchMediaInit"),er.forEach(function(n){var i=n.queries,s=n.conditions,r,o,a,c;for(o in i)r=un.matchMedia(i[o]).matches,r&&(a=1),r!==s[o]&&(s[o]=r,c=1);c&&(n.revert(),a&&e.push(n))}),Oa("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n)}),_u=t,Oa("matchMedia"))},vd=function(){function l(e,n){this.selector=n&&Wl(n),this.data=[],this._r=[],this.isReverted=!1,e&&this.add(e)}var t=l.prototype;return t.add=function(n,i,s){oe(n)&&(s=i,i=n,n=oe);var r=this,o=function(){var c=de,u=r.selector,f;return c&&c!==r&&c.data.push(r),s&&(r.selector=Wl(s)),de=r,f=i.apply(r,arguments),oe(f)&&r._r.push(f),de=c,r.selector=u,r.isReverted=!1,f};return r.last=o,n===oe?o(r):n?r[n]=o:o},t.ignore=function(n){var i=de;de=null,n(this),de=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof l?n.push.apply(n,i.getTweens()):i instanceof _e&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n){var r=this.getTweens();this.data.forEach(function(a){a.data==="isFlip"&&(a.revert(),a.getChildren(!0,!0,!1).forEach(function(c){return r.splice(r.indexOf(c),1)}))}),r.map(function(a){return{g:a.globalTime(0),t:a}}).sort(function(a,c){return c.g-a.g||-1}).forEach(function(a){return a.t.revert(n)}),this.data.forEach(function(a){return!(a instanceof tr)&&a.revert&&a.revert(n)}),this._r.forEach(function(a){return a(n,s)}),this.isReverted=!0}else this.data.forEach(function(a){return a.kill&&a.kill()});if(this.clear(),i){var o=er.indexOf(this);~o&&er.splice(o,1)}},t.revert=function(n){this.kill(n||{})},l}(),Om=function(){function l(e){this.contexts=[],this.scope=e}var t=l.prototype;return t.add=function(n,i,s){Hn(n)||(n={matches:n});var r=new vd(0,s||this.scope),o=r.conditions={},a,c,u;this.contexts.push(r),i=r.add("onMatch",i),r.queries=n;for(c in n)c==="all"?u=1:(a=un.matchMedia(n[c]),a&&(er.indexOf(r)<0&&er.push(r),(o[c]=a.matches)&&(u=1),a.addListener?a.addListener(jl):a.addEventListener("change",jl)));return u&&i(r),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},l}(),sa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return id(i)})},timeline:function(t){return new Ve(t)},getTweensOf:function(t,e){return se.getTweensOf(t,e)},getProperty:function(t,e,n,i){Se(t)&&(t=gn(t)[0]);var s=Ji(t||{}).get,r=n?Wf:Hf;return n==="native"&&(n=""),t&&(e?r((Qe[e]&&Qe[e].get||s)(t,e,n,i)):function(o,a,c){return r((Qe[o]&&Qe[o].get||s)(t,o,a,c))})},quickSetter:function(t,e,n){if(t=gn(t),t.length>1){var i=t.map(function(u){return je.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var r=Qe[e],o=Ji(t),a=o.harness&&(o.harness.aliases||{})[e]||e,c=r?function(u){var f=new r;Us._pt=0,f.init(t,n?u+n:u,Us,0,[t]),f.render(1,f),Us._pt&&Ec(1,Us)}:o.set(t,a);return r?c:function(u){return c(t,a,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=je.to(t,is((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),r=function(a,c,u){return s.resetTo(e,a,c,u)};return r.tween=s,r},isTweening:function(t){return se.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ts(t.ease,Zs.ease)),fu(Zs,t||{})},config:function(t){return fu(nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,r=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Qe[o]&&!rn[o]&&ta(e+" effect requires "+o+" plugin.")}),Fa[e]=function(o,a,c){return n(gn(o),xn(a||{},s),c)},r&&(Ve.prototype[e]=function(o,a,c){return this.add(Fa[e](o,Hn(a)?a:(c=a)&&{},this),c)})},registerEase:function(t,e){Bt[t]=ts(e)},parseEase:function(t,e){return arguments.length?ts(t,e):Bt},getById:function(t){return se.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Ve(t),i,s;for(n.smoothChildTiming=Ge(t.smoothChildTiming),se.remove(n),n._dp=0,n._time=n._tTime=se._time,i=se._first;i;)s=i._next,(e||!(!i._dur&&i instanceof _e&&i.vars.onComplete===i._targets[0]))&&zn(n,i,i._start-i._delay),i=s;return zn(se,n,0),n},context:function(t,e){return t?new vd(t,e):de},matchMedia:function(t){return new Om(t)},matchMediaRefresh:function(){return er.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||jl()},addEventListener:function(t,e){var n=Yo[t]||(Yo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Yo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:gm,wrapYoyo:_m,distribute:Kf,random:Qf,snap:Jf,normalize:mm,getUnit:Te,clamp:hm,splitColor:sd,toArray:gn,selector:Wl,mapRange:ed,pipe:dm,unitize:pm,interpolate:vm,shuffle:Zf},install:zf,effects:Fa,ticker:en,updateRoot:Ve.updateRoot,plugins:Qe,globalTimeline:se,core:{PropTween:We,globals:Bf,Tween:_e,Timeline:Ve,Animation:tr,getCache:Ji,_removeLinkedListItem:ha,reverting:function(){return Ae},context:function(t){return t&&de&&(de.data.push(t),t._ctx=de),de},suppressOverwrites:function(t){return dc=t}}};He("to,from,fromTo,delayedCall,set,killTweensOf",function(l){return sa[l]=_e[l]});en.add(Ve.updateRoot);Us=sa.to({},{duration:0});var zm=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Bm=function(t,e){var n=t._targets,i,s,r;for(i in e)for(s=n.length;s--;)r=t._ptLookup[s][i],r&&(r=r.d)&&(r._pt&&(r=zm(r,i)),r&&r.modifier&&r.modifier(e[i],t,n[s],i))},za=function(t,e){return{name:t,rawVars:1,init:function(i,s,r){r._onInit=function(o){var a,c;if(Se(s)&&(a={},He(s,function(u){return a[u]=1}),s=a),e){a={};for(c in s)a[c]=e(s[c]);s=a}Bm(o,s)}}}},je=sa.registerPlugin({name:"attr",init:function(t,e,n,i,s){var r,o,a;this.tween=n;for(r in e)a=t.getAttribute(r)||"",o=this.add(t,"setAttribute",(a||0)+"",e[r],i,s,0,0,r),o.op=r,o.b=a,this._props.push(r)},render:function(t,e){for(var n=e._pt;n;)Ae?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},za("roundProps",ql),za("modifiers"),za("snap",Jf))||sa;_e.version=Ve.version=je.version="3.11.5";Of=1;mc()&&Qs();Bt.Power0;Bt.Power1;Bt.Power2;Bt.Power3;Bt.Power4;Bt.Linear;Bt.Quad;Bt.Cubic;Bt.Quart;Bt.Quint;Bt.Strong;Bt.Elastic;Bt.Back;Bt.SteppedEase;Bt.Bounce;Bt.Sine;Bt.Expo;Bt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var vu,yi,Vs,Dc,Yi,xu,Cc,km=function(){return typeof window<"u"},ui={},Hi=180/Math.PI,Gs=Math.PI/180,ds=Math.atan2,yu=1e8,Tc=/([A-Z])/g,Vm=/(left|right|width|margin|padding|x)/i,Gm=/[\s,\(]\S/,Bn={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Yl=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Hm=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Wm=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},qm=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},xd=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},yd=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Xm=function(t,e,n){return t.style[e]=n},jm=function(t,e,n){return t.style.setProperty(e,n)},Ym=function(t,e,n){return t._gsap[e]=n},$m=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Zm=function(t,e,n,i,s){var r=t._gsap;r.scaleX=r.scaleY=n,r.renderTransform(s,r)},Km=function(t,e,n,i,s){var r=t._gsap;r[e]=n,r.renderTransform(s,r)},re="transform",An=re+"Origin",Jm=function l(t,e){var n=this,i=this.target,s=i.style;if(t in ui){if(this.tfm=this.tfm||{},t!=="transform")t=Bn[t]||t,~t.indexOf(",")?t.split(",").forEach(function(r){return n.tfm[r]=ii(i,r)}):this.tfm[t]=i._gsap.x?i._gsap[t]:ii(i,t);else return Bn.transform.split(",").forEach(function(r){return l.call(n,r,e)});if(this.props.indexOf(re)>=0)return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=re}(s||e)&&this.props.push(t,e,s[t])},Md=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Qm=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,r;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Tc,"-$1").toLowerCase());if(this.tfm){for(r in this.tfm)i[r]=this.tfm[r];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Cc(),(!s||!s.isStart)&&!n[re]&&(Md(n),i.uncache=1)}},wd=function(t,e){var n={target:t,props:[],revert:Qm,save:Jm};return t._gsap||je.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Sd,$l=function(t,e){var n=yi.createElementNS?yi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):yi.createElement(t);return n.style?n:yi.createElement(t)},Vn=function l(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Tc,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&l(t,nr(e)||e,1)||""},Mu="O,Moz,ms,Ms,Webkit".split(","),nr=function(t,e,n){var i=e||Yi,s=i.style,r=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);r--&&!(Mu[r]+t in s););return r<0?null:(r===3?"ms":r>=0?Mu[r]:"")+t},Zl=function(){km()&&window.document&&(vu=window,yi=vu.document,Vs=yi.documentElement,Yi=$l("div")||{style:{}},$l("div"),re=nr(re),An=re+"Origin",Yi.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Sd=!!nr("perspective"),Cc=je.core.reverting,Dc=1)},Ba=function l(t){var e=$l("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,r;if(Vs.appendChild(e),e.appendChild(this),this.style.display="block",t)try{r=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=l}catch{}else this._gsapBBox&&(r=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),Vs.removeChild(e),this.style.cssText=s,r},wu=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},bd=function(t){var e;try{e=t.getBBox()}catch{e=Ba.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Ba||(e=Ba.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+wu(t,["x","cx","x1"])||0,y:+wu(t,["y","cy","y1"])||0,width:0,height:0}:e},Ed=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&bd(t))},Br=function(t,e){if(e){var n=t.style;e in ui&&e!==An&&(e=re),n.removeProperty?((e.substr(0,2)==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(e.replace(Tc,"-$1").toLowerCase())):n.removeAttribute(e)}},Mi=function(t,e,n,i,s,r){var o=new We(t._pt,e,n,0,1,r?yd:xd);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},Su={deg:1,rad:1,turn:1},tg={grid:1,flex:1},Ci=function l(t,e,n,i){var s=parseFloat(n)||0,r=(n+"").trim().substr((s+"").length)||"px",o=Yi.style,a=Vm.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(a?"Width":"Height"),f=100,h=i==="px",p=i==="%",_,g,m,d;return i===r||!s||Su[i]||Su[r]?s:(r!=="px"&&!h&&(s=l(t,e,n,"px")),d=t.getCTM&&Ed(t),(p||r==="%")&&(ui[e]||~e.indexOf("adius"))?(_=d?t.getBBox()[a?"width":"height"]:t[u],ce(p?s/_*f:s/100*_)):(o[a?"width":"height"]=f+(h?r:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,d&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===yi||!g.appendChild)&&(g=yi.body),m=g._gsap,m&&p&&m.width&&a&&m.time===en.time&&!m.uncache?ce(s/m.width*f):((p||r==="%")&&!tg[Vn(g,"display")]&&(o.position=Vn(t,"position")),g===t&&(o.position="static"),g.appendChild(Yi),_=Yi[u],g.removeChild(Yi),o.position="absolute",a&&p&&(m=Ji(g),m.time=en.time,m.width=g[u]),ce(h?_*s/f:_&&s?f/_*s:0))))},ii=function(t,e,n,i){var s;return Dc||Zl(),e in Bn&&e!=="transform"&&(e=Bn[e],~e.indexOf(",")&&(e=e.split(",")[0])),ui[e]&&e!=="transform"?(s=Vr(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:oa(Vn(t,An))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ra[e]&&ra[e](t,e,n)||Vn(t,e)||Vf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ci(t,e,s,n)+n:s},eg=function(t,e,n,i){if(!n||n==="none"){var s=nr(e,t,1),r=s&&Vn(t,s,1);r&&r!==n?(e=s,n=r):e==="borderColor"&&(n=Vn(t,"borderTopColor"))}var o=new We(this._pt,t.style,e,0,1,gd),a=0,c=0,u,f,h,p,_,g,m,d,v,y,x,M;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(t.style[e]=i,i=Vn(t,e)||i,t.style[e]=n),u=[n,i],od(u),n=u[0],i=u[1],h=n.match(Ns)||[],M=i.match(Ns)||[],M.length){for(;f=Ns.exec(i);)m=f[0],v=i.substring(a,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),m!==(g=h[c++]||"")&&(p=parseFloat(g)||0,x=g.substr((p+"").length),m.charAt(1)==="="&&(m=ks(p,m)+x),d=parseFloat(m),y=m.substr((d+"").length),a=Ns.lastIndex-y.length,y||(y=y||nn.units[e]||x,a===i.length&&(i+=y,o.e+=y)),x!==y&&(p=Ci(t,e,g,y)||0),o._pt={_next:o._pt,p:v||c===1?v:",",s:p,c:d-p,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=a<i.length?i.substring(a,i.length):""}else o.r=e==="display"&&i==="none"?yd:xd;return Nf.test(i)&&(o.e=0),this._pt=o,o},bu={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ng=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=bu[n]||n,e[1]=bu[i]||i,e.join(" ")},ig=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,r=n._gsap,o,a,c;if(s==="all"||s===!0)i.cssText="",a=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],ui[o]&&(a=1,o=o==="transformOrigin"?An:re),Br(n,o);a&&(Br(n,re),r&&(r.svg&&n.removeAttribute("transform"),Vr(n,1),r.uncache=1,Md(i)))}},ra={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var r=t._pt=new We(t._pt,e,n,0,0,ig);return r.u=i,r.pr=-10,r.tween=s,t._props.push(n),1}}},kr=[1,0,0,1,0,0],Dd={},Cd=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Eu=function(t){var e=Vn(t,re);return Cd(e)?kr:e.substr(7).match(If).map(ce)},Ac=function(t,e){var n=t._gsap||Ji(t),i=t.style,s=Eu(t),r,o,a,c;return n.svg&&t.getAttribute("transform")?(a=t.transform.baseVal.consolidate().matrix,s=[a.a,a.b,a.c,a.d,a.e,a.f],s.join(",")==="1,0,0,1,0,0"?kr:s):(s===kr&&!t.offsetParent&&t!==Vs&&!n.svg&&(a=i.display,i.display="block",r=t.parentNode,(!r||!t.offsetParent)&&(c=1,o=t.nextElementSibling,Vs.appendChild(t)),s=Eu(t),a?i.display=a:Br(t,"display"),c&&(o?r.insertBefore(t,o):r?r.appendChild(t):Vs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Kl=function(t,e,n,i,s,r){var o=t._gsap,a=s||Ac(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,p=a[0],_=a[1],g=a[2],m=a[3],d=a[4],v=a[5],y=e.split(" "),x=parseFloat(y[0])||0,M=parseFloat(y[1])||0,E,D,T,w;n?a!==kr&&(D=p*m-_*g)&&(T=x*(m/D)+M*(-g/D)+(g*v-m*d)/D,w=x*(-_/D)+M*(p/D)-(p*v-_*d)/D,x=T,M=w):(E=bd(t),x=E.x+(~y[0].indexOf("%")?x/100*E.width:x),M=E.y+(~(y[1]||y[0]).indexOf("%")?M/100*E.height:M)),i||i!==!1&&o.smooth?(d=x-c,v=M-u,o.xOffset=f+(d*p+v*g)-d,o.yOffset=h+(d*_+v*m)-v):o.xOffset=o.yOffset=0,o.xOrigin=x,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[An]="0px 0px",r&&(Mi(r,o,"xOrigin",c,x),Mi(r,o,"yOrigin",u,M),Mi(r,o,"xOffset",f,o.xOffset),Mi(r,o,"yOffset",h,o.yOffset)),t.setAttribute("data-svg-origin",x+" "+M)},Vr=function(t,e){var n=t._gsap||new ud(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,r="px",o="deg",a=getComputedStyle(t),c=Vn(t,An)||"0",u,f,h,p,_,g,m,d,v,y,x,M,E,D,T,w,b,N,O,A,R,L,I,q,k,Y,Q,ct,G,X,$,nt;return u=f=h=g=m=d=v=y=x=0,p=_=1,n.svg=!!(t.getCTM&&Ed(t)),a.translate&&((a.translate!=="none"||a.scale!=="none"||a.rotate!=="none")&&(i[re]=(a.translate!=="none"?"translate3d("+(a.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(a.rotate!=="none"?"rotate("+a.rotate+") ":"")+(a.scale!=="none"?"scale("+a.scale.split(" ").join(",")+") ":"")+(a[re]!=="none"?a[re]:"")),i.scale=i.rotate=i.translate="none"),D=Ac(t,n.svg),n.svg&&(n.uncache?(k=t.getBBox(),c=n.xOrigin-k.x+"px "+(n.yOrigin-k.y)+"px",q=""):q=!e&&t.getAttribute("data-svg-origin"),Kl(t,q||c,!!q||n.originIsAbsolute,n.smooth!==!1,D)),M=n.xOrigin||0,E=n.yOrigin||0,D!==kr&&(N=D[0],O=D[1],A=D[2],R=D[3],u=L=D[4],f=I=D[5],D.length===6?(p=Math.sqrt(N*N+O*O),_=Math.sqrt(R*R+A*A),g=N||O?ds(O,N)*Hi:0,v=A||R?ds(A,R)*Hi+g:0,v&&(_*=Math.abs(Math.cos(v*Gs))),n.svg&&(u-=M-(M*N+E*A),f-=E-(M*O+E*R))):(nt=D[6],X=D[7],Q=D[8],ct=D[9],G=D[10],$=D[11],u=D[12],f=D[13],h=D[14],T=ds(nt,G),m=T*Hi,T&&(w=Math.cos(-T),b=Math.sin(-T),q=L*w+Q*b,k=I*w+ct*b,Y=nt*w+G*b,Q=L*-b+Q*w,ct=I*-b+ct*w,G=nt*-b+G*w,$=X*-b+$*w,L=q,I=k,nt=Y),T=ds(-A,G),d=T*Hi,T&&(w=Math.cos(-T),b=Math.sin(-T),q=N*w-Q*b,k=O*w-ct*b,Y=A*w-G*b,$=R*b+$*w,N=q,O=k,A=Y),T=ds(O,N),g=T*Hi,T&&(w=Math.cos(T),b=Math.sin(T),q=N*w+O*b,k=L*w+I*b,O=O*w-N*b,I=I*w-L*b,N=q,L=k),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,d=180-d),p=ce(Math.sqrt(N*N+O*O+A*A)),_=ce(Math.sqrt(I*I+nt*nt)),T=ds(L,I),v=Math.abs(T)>2e-4?T*Hi:0,x=$?1/($<0?-$:$):0),n.svg&&(q=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Cd(Vn(t,re)),q&&t.setAttribute("transform",q))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+r,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+r,n.z=h+r,n.scaleX=ce(p),n.scaleY=ce(_),n.rotation=ce(g)+o,n.rotationX=ce(m)+o,n.rotationY=ce(d)+o,n.skewX=v+o,n.skewY=y+o,n.transformPerspective=x+r,(n.zOrigin=parseFloat(c.split(" ")[2])||0)&&(i[An]=oa(c)),n.xOffset=n.yOffset=0,n.force3D=nn.force3D,n.renderTransform=n.svg?rg:Sd?Td:sg,n.uncache=0,n},oa=function(t){return(t=t.split(" "))[0]+" "+t[1]},ka=function(t,e,n){var i=Te(e);return ce(parseFloat(e)+parseFloat(Ci(t,"x",n+"px",i)))+i},sg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Td(t,e)},Oi="0deg",fr="0px",zi=") ",Td=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,a=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,p=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,d=n.force3D,v=n.target,y=n.zOrigin,x="",M=d==="auto"&&t&&t!==1||d===!0;if(y&&(f!==Oi||u!==Oi)){var E=parseFloat(u)*Gs,D=Math.sin(E),T=Math.cos(E),w;E=parseFloat(f)*Gs,w=Math.cos(E),r=ka(v,r,D*w*-y),o=ka(v,o,-Math.sin(E)*-y),a=ka(v,a,T*w*-y+y)}m!==fr&&(x+="perspective("+m+zi),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(M||r!==fr||o!==fr||a!==fr)&&(x+=a!==fr||M?"translate3d("+r+", "+o+", "+a+") ":"translate("+r+", "+o+zi),c!==Oi&&(x+="rotate("+c+zi),u!==Oi&&(x+="rotateY("+u+zi),f!==Oi&&(x+="rotateX("+f+zi),(h!==Oi||p!==Oi)&&(x+="skew("+h+", "+p+zi),(_!==1||g!==1)&&(x+="scale("+_+", "+g+zi),v.style[re]=x||"translate(0, 0)"},rg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,r=n.x,o=n.y,a=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,p=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,d=n.yOffset,v=n.forceCSS,y=parseFloat(r),x=parseFloat(o),M,E,D,T,w;a=parseFloat(a),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,a+=u),a||c?(a*=Gs,c*=Gs,M=Math.cos(a)*f,E=Math.sin(a)*f,D=Math.sin(a-c)*-h,T=Math.cos(a-c)*h,c&&(u*=Gs,w=Math.tan(c-u),w=Math.sqrt(1+w*w),D*=w,T*=w,u&&(w=Math.tan(u),w=Math.sqrt(1+w*w),M*=w,E*=w)),M=ce(M),E=ce(E),D=ce(D),T=ce(T)):(M=f,T=h,E=D=0),(y&&!~(r+"").indexOf("px")||x&&!~(o+"").indexOf("px"))&&(y=Ci(p,"x",r,"px"),x=Ci(p,"y",o,"px")),(_||g||m||d)&&(y=ce(y+_-(_*M+g*D)+m),x=ce(x+g-(_*E+g*T)+d)),(i||s)&&(w=p.getBBox(),y=ce(y+i/100*w.width),x=ce(x+s/100*w.height)),w="matrix("+M+","+E+","+D+","+T+","+y+","+x+")",p.setAttribute("transform",w),v&&(p.style[re]=w)},og=function(t,e,n,i,s){var r=360,o=Se(s),a=parseFloat(s)*(o&&~s.indexOf("rad")?Hi:1),c=a-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=r,c!==c%(r/2)&&(c+=c<0?r:-r)),f==="cw"&&c<0?c=(c+r*yu)%r-~~(c/r)*r:f==="ccw"&&c>0&&(c=(c-r*yu)%r-~~(c/r)*r)),t._pt=h=new We(t._pt,e,n,i,c,Hm),h.e=u,h.u="deg",t._props.push(n),h},Du=function(t,e){for(var n in e)t[n]=e[n];return t},ag=function(t,e,n){var i=Du({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",r=n.style,o,a,c,u,f,h,p,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),r[re]=e,o=Vr(n,1),Br(n,re),n.setAttribute("transform",c)):(c=getComputedStyle(n)[re],r[re]=e,o=Vr(n,1),r[re]=c);for(a in ui)c=i[a],u=o[a],c!==u&&s.indexOf(a)<0&&(p=Te(c),_=Te(u),f=p!==_?Ci(n,a,c,_):parseFloat(c),h=parseFloat(u),t._pt=new We(t._pt,o,a,f,h-f,Yl),t._pt.u=_||0,t._props.push(a));Du(o,i)};He("padding,margin,Width,Radius",function(l,t){var e="Top",n="Right",i="Bottom",s="Left",r=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?l+o:"border"+o+l});ra[t>1?"border"+l:l]=function(o,a,c,u,f){var h,p;if(arguments.length<4)return h=r.map(function(_){return ii(o,_,c)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(u+"").split(" "),p={},r.forEach(function(_,g){return p[_]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(a,p,f)}});var Ad={name:"css",register:Zl,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var r=this._props,o=t.style,a=n.vars.startAt,c,u,f,h,p,_,g,m,d,v,y,x,M,E,D,T;Dc||Zl(),this.styles=this.styles||wd(t),T=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(Qe[g]&&hd(g,e,n,i,t,s)))){if(p=typeof u,_=ra[g],p==="function"&&(u=u.call(n,i,t,s),p=typeof u),p==="string"&&~u.indexOf("random(")&&(u=Or(u)),_)_(this,t,g,u,n)&&(D=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",Si.lastIndex=0,Si.test(c)||(m=Te(c),d=Te(u)),d?m!==d&&(c=Ci(t,g,c,d)+d):m&&(u+=m),this.add(o,"setProperty",c,u,i,s,0,0,g),r.push(g),T.push(g,0,o[g]);else if(p!=="undefined"){if(a&&g in a?(c=typeof a[g]=="function"?a[g].call(n,i,t,s):a[g],Se(c)&&~c.indexOf("random(")&&(c=Or(c)),Te(c+"")||(c+=nn.units[g]||Te(ii(t,g))||""),(c+"").charAt(1)==="="&&(c=ii(t,g))):c=ii(t,g),h=parseFloat(c),v=p==="string"&&u.charAt(1)==="="&&u.substr(0,2),v&&(u=u.substr(2)),f=parseFloat(u),g in Bn&&(g==="autoAlpha"&&(h===1&&ii(t,"visibility")==="hidden"&&f&&(h=0),T.push("visibility",0,o.visibility),Mi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=Bn[g],~g.indexOf(",")&&(g=g.split(",")[0]))),y=g in ui,y){if(this.styles.save(g),x||(M=t._gsap,M.renderTransform&&!e.parseTransform||Vr(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,x=this._pt=new We(this._pt,o,re,0,1,M.renderTransform,M,0,-1),x.dep=1),g==="scale")this._pt=new We(this._pt,M,"scaleY",M.scaleY,(v?ks(M.scaleY,v+f):f)-M.scaleY||0,Yl),this._pt.u=0,r.push("scaleY",g),g+="X";else if(g==="transformOrigin"){T.push(An,0,o[An]),u=ng(u),M.svg?Kl(t,u,0,E,0,this):(d=parseFloat(u.split(" ")[2])||0,d!==M.zOrigin&&Mi(this,M,"zOrigin",M.zOrigin,d),Mi(this,o,g,oa(c),oa(u)));continue}else if(g==="svgOrigin"){Kl(t,u,1,E,0,this);continue}else if(g in Dd){og(this,M,g,h,v?ks(h,v+u):u);continue}else if(g==="smoothOrigin"){Mi(this,M,"smooth",M.smooth,u);continue}else if(g==="force3D"){M[g]=u;continue}else if(g==="transform"){ag(this,u,t);continue}}else g in o||(g=nr(g)||g);if(y||(f||f===0)&&(h||h===0)&&!Gm.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),d=Te(u)||(g in nn.units?nn.units[g]:m),m!==d&&(h=Ci(t,g,c,d)),this._pt=new We(this._pt,y?M:o,g,h,(v?ks(h,v+f):f)-h,!y&&(d==="px"||g==="zIndex")&&e.autoRound!==!1?qm:Yl),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=c,this._pt.r=Wm);else if(g in o)eg.call(this,t,g,c,v?v+u:u);else if(g in t)this.add(t,g,c||t[g],v?v+u:u,i,s);else if(g!=="parseTransform"){_c(g,u);continue}y||(g in o?T.push(g,0,o[g]):T.push(g,1,c||t[g])),r.push(g)}}D&&_d(this)},render:function(t,e){if(e.tween._time||!Cc())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ii,aliases:Bn,getSetter:function(t,e,n){var i=Bn[e];return i&&i.indexOf(",")<0&&(e=i),e in ui&&e!==An&&(t._gsap.x||ii(t,"x"))?n&&xu===n?e==="scale"?$m:Ym:(xu=n||{})&&(e==="scale"?Zm:Km):t.style&&!pc(t.style[e])?Xm:~e.indexOf("-")?jm:bc(t,e)},core:{_removeProperty:Br,_getMatrix:Ac}};je.utils.checkPrefix=nr;je.core.getStyleSaver=wd;(function(l,t,e,n){var i=He(l+","+t+","+e,function(s){ui[s]=1});He(t,function(s){nn.units[s]="deg",Dd[s]=1}),Bn[i[13]]=l+","+t,He(n,function(s){var r=s.split(":");Bn[r[1]]=i[r[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");He("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(l){nn.units[l]="px"});je.registerPlugin(Ad);var Pd=je.registerPlugin(Ad)||je;Pd.core.Tween;/*!
 * matrix 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var ri,es,Pc,Hs,Dr,$o,aa,Fr,vn="transform",Jl=vn+"Origin",Ld,Lc=function(t){var e=t.ownerDocument||t;for(!(vn in t.style)&&("msTransform"in t.style)&&(vn="msTransform",Jl=vn+"Origin");e.parentNode&&(e=e.parentNode););if(es=window,aa=new ss,e){ri=e,Pc=e.documentElement,Hs=e.body,Fr=ri.createElementNS("http://www.w3.org/2000/svg","g"),Fr.style.transform="none";var n=e.createElement("div"),i=e.createElement("div");Hs.appendChild(n),n.appendChild(i),n.style.position="static",n.style[vn]="translate3d(0,0,1px)",Ld=i.offsetParent!==n,Hs.removeChild(n)}return e},lg=function(t){for(var e,n;t&&t!==Hs;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),e?e.push(n):e=[n]),t=t.parentNode;return e},Rd=[],Fd=[],Rc=function(){return es.pageYOffset||ri.scrollTop||Pc.scrollTop||Hs.scrollTop||0},Fc=function(){return es.pageXOffset||ri.scrollLeft||Pc.scrollLeft||Hs.scrollLeft||0},Ic=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},cg=function l(t){if(es.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return l(t)},Va=function l(t,e){if(t.parentNode&&(ri||Lc(t))){var n=Ic(t),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?e?"rect":"g":"div",r=e!==2?0:100,o=e===3?100:0,a="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=ri.createElementNS?ri.createElementNS(i.replace(/^https/,"http"),s):ri.createElement(s);return e&&(n?($o||($o=l(t)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+r+","+o+")"),$o.appendChild(c)):(Dr||(Dr=l(t),Dr.style.cssText=a),c.style.cssText=a+"width:0.1px;height:0.1px;top:"+o+"px;left:"+r+"px",Dr.appendChild(c))),c}throw"Need document and parent."},ug=function(t){for(var e=new ss,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e},Id=function(t){var e=t.getCTM(),n;return e||(n=t.style[vn],t.style[vn]="none",t.appendChild(Fr),e=Fr.getCTM(),t.removeChild(Fr),n?t.style[vn]=n:t.style.removeProperty(vn.replace(/([A-Z])/g,"-$1").toLowerCase())),e||aa.clone()},hg=function(t,e){var n=Ic(t),i=t===n,s=n?Rd:Fd,r=t.parentNode,o,a,c,u,f,h;if(t===es)return t;if(s.length||s.push(Va(t,1),Va(t,2),Va(t,3)),o=n?$o:Dr,n)i?(c=Id(t),u=-c.e/c.a,f=-c.f/c.d,a=aa):t.getBBox?(c=t.getBBox(),a=t.transform?t.transform.baseVal:{},a=a.numberOfItems?a.numberOfItems>1?ug(a):a.getItem(0).matrix:aa,u=a.a*c.x+a.c*c.y,f=a.b*c.x+a.d*c.y):(a=new ss,u=f=0),e&&t.tagName.toLowerCase()==="g"&&(u=f=0),(i?n:r).appendChild(o),o.setAttribute("transform","matrix("+a.a+","+a.b+","+a.c+","+a.d+","+(a.e+u)+","+(a.f+f)+")");else{if(u=f=0,Ld)for(a=t.offsetParent,c=t;c&&(c=c.parentNode)&&c!==a&&c.parentNode;)(es.getComputedStyle(c)[vn]+"").length>4&&(u=c.offsetLeft,f=c.offsetTop,c=0);if(h=es.getComputedStyle(t),h.position!=="absolute"&&h.position!=="fixed")for(a=t.offsetParent;r&&r!==a;)u+=r.scrollLeft||0,f+=r.scrollTop||0,r=r.parentNode;c=o.style,c.top=t.offsetTop-f+"px",c.left=t.offsetLeft-u+"px",c[vn]=h[vn],c[Jl]=h[Jl],c.position=h.position==="fixed"?"fixed":"absolute",t.parentNode.appendChild(o)}return o},Ga=function(t,e,n,i,s,r,o){return t.a=e,t.b=n,t.c=i,t.d=s,t.e=r,t.f=o,t},ss=function(){function l(e,n,i,s,r,o){e===void 0&&(e=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),r===void 0&&(r=0),o===void 0&&(o=0),Ga(this,e,n,i,s,r,o)}var t=l.prototype;return t.inverse=function(){var n=this.a,i=this.b,s=this.c,r=this.d,o=this.e,a=this.f,c=n*r-i*s||1e-10;return Ga(this,r/c,-i/c,-s/c,n/c,(s*a-r*o)/c,-(n*a-i*o)/c)},t.multiply=function(n){var i=this.a,s=this.b,r=this.c,o=this.d,a=this.e,c=this.f,u=n.a,f=n.c,h=n.b,p=n.d,_=n.e,g=n.f;return Ga(this,u*i+h*r,u*s+h*o,f*i+p*r,f*s+p*o,a+_*i+g*r,c+_*s+g*o)},t.clone=function(){return new l(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(n){var i=this.a,s=this.b,r=this.c,o=this.d,a=this.e,c=this.f;return i===n.a&&s===n.b&&r===n.c&&o===n.d&&a===n.e&&c===n.f},t.apply=function(n,i){i===void 0&&(i={});var s=n.x,r=n.y,o=this.a,a=this.b,c=this.c,u=this.d,f=this.e,h=this.f;return i.x=s*o+r*c+f||0,i.y=s*a+r*u+h||0,i},l}();function Wn(l,t,e,n){if(!l||!l.parentNode||(ri||Lc(l)).documentElement===l)return new ss;var i=lg(l),s=Ic(l),r=s?Rd:Fd,o=hg(l,e),a=r[0].getBoundingClientRect(),c=r[1].getBoundingClientRect(),u=r[2].getBoundingClientRect(),f=o.parentNode,h=!n&&cg(l),p=new ss((c.left-a.left)/100,(c.top-a.top)/100,(u.left-a.left)/100,(u.top-a.top)/100,a.left+(h?0:Fc()),a.top+(h?0:Rc()));if(f.removeChild(o),i)for(a=i.length;a--;)c=i[a],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return t?p.inverse():p}/*!
 * Flip 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var fg=1,ir,Be,ee,Ir,vi,oi,Ql,Cu=function(t,e){return t.actions.forEach(function(n){return n.vars[e]&&n.vars[e](n)})},tc={},Tu=180/Math.PI,dg=Math.PI/180,la={},Au={},pa={},Nc=function(t){return typeof t=="string"?t.split(" ").join("").split(","):t},pg=Nc("onStart,onUpdate,onComplete,onReverseComplete,onInterrupt"),ma=Nc("transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight"),Nr=function(t){return ir(t)[0]||console.warn("Element not found:",t)},Os=function(t){return Math.round(t*1e4)/1e4||0},Ha=function(t,e,n){return t.forEach(function(i){return i.classList[n](e)})},Pu={zIndex:1,kill:1,simple:1,spin:1,clearProps:1,targets:1,toggleClass:1,onComplete:1,onUpdate:1,onInterrupt:1,onStart:1,delay:1,repeat:1,repeatDelay:1,yoyo:1,scale:1,fade:1,absolute:1,props:1,onEnter:1,onLeave:1,custom:1,paused:1,nested:1,prune:1,absoluteOnLeave:1},Nd={zIndex:1,simple:1,clearProps:1,scale:1,absolute:1,fitChild:1,getVars:1,props:1},Ud=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},zs=function(t,e){var n={},i;for(i in t)e[i]||(n[i]=t[i]);return n},Uc={},Od=function(t){var e=Uc[t]=Nc(t);return pa[t]=e.concat(ma),e},mg=function(t){var e=t._gsap||Be.core.getCache(t);return e.gmCache===Be.ticker.frame?e.gMatrix:(e.gmCache=Be.ticker.frame,e.gMatrix=Wn(t,!0,!1,!0))},gg=function l(t,e,n){n===void 0&&(n=0);for(var i=t.parentNode,s=1e3*Math.pow(10,n)*(e?-1:1),r=e?-s*900:0;t;)r+=s,t=t.previousSibling;return i?r+l(i,e,n+1):r},ca=function(t,e,n){return t.forEach(function(i){return i.d=gg(n?i.element:i.t,e)}),t.sort(function(i,s){return i.d-s.d}),t},Gr=function(t,e){for(var n=t.element.style,i=t.css=t.css||[],s=e.length,r,o;s--;)r=e[s],o=n[r]||n.getPropertyValue(r),i.push(o?r:Au[r]||(Au[r]=Ud(r)),o);return n},Oc=function(t){var e=t.css,n=t.element.style,i=0;for(t.cache.uncache=1;i<e.length;i+=2)e[i+1]?n[e[i]]=e[i+1]:n.removeProperty(e[i]);!e[e.indexOf("transform")+1]&&n.translate&&(n.removeProperty("translate"),n.removeProperty("scale"),n.removeProperty("rotate"))},Lu=function(t,e){t.forEach(function(n){return n.a.cache.uncache=1}),e||t.finalStates.forEach(Oc)},Wa="paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition".split(","),zc=function(t,e,n){var i=t.element,s=t.width,r=t.height,o=t.uncache,a=t.getProp,c=i.style,u=4,f,h,p;if(typeof e!="object"&&(e=t),ee&&n!==1)return ee._abs.push({t:i,b:t,a:t,sd:0}),ee._final.push(function(){return(t.cache.uncache=1)&&Oc(t)}),i;for(h=a("display")==="none",(!t.isVisible||h)&&(h&&(Gr(t,["display"]).display=e.display),t.matrix=e.matrix,t.width=s=t.width||e.width,t.height=r=t.height||e.height),Gr(t,Wa),p=window.getComputedStyle(i);u--;)c[Wa[u]]=p[Wa[u]];if(c.gridArea="1 / 1 / 1 / 1",c.transition="none",c.position="absolute",c.width=s+"px",c.height=r+"px",c.top||(c.top="0px"),c.left||(c.left="0px"),o)f=new rs(i);else if(f=zs(t,la),f.position="absolute",t.simple){var _=i.getBoundingClientRect();f.matrix=new ss(1,0,0,1,_.left+Fc(),_.top+Rc())}else f.matrix=Wn(i,!1,!1,!0);return f=Ws(f,t,!0),t.x=oi(f.x,.01),t.y=oi(f.y,.01),i},Ru=function(t,e){return e!==!0&&(e=ir(e),t=t.filter(function(n){if(e.indexOf((n.sd<0?n.b:n.a).element)!==-1)return!0;n.t._gsap.renderTransform(1),n.b.isVisible&&(n.t.style.width=n.b.width+"px",n.t.style.height=n.b.height+"px")})),t},zd=function(t){return ca(t,!0).forEach(function(e){return(e.a.isVisible||e.b.isVisible)&&zc(e.sd<0?e.b:e.a,e.b,1)})},_g=function(t,e){return e&&t.idLookup[ec(e).id]||t.elementStates[0]},ec=function(t,e,n,i){return t instanceof rs?t:t instanceof Pn?_g(t,i):new rs(typeof t=="string"?Nr(t)||console.warn(t+" not found"):t,e,n)},vg=function(t,e){for(var n=Be.getProperty(t.element,null,"native"),i=t.props={},s=e.length;s--;)i[e[s]]=(n(e[s])+"").trim();return i.zIndex&&(i.zIndex=parseFloat(i.zIndex)||0),t},Bd=function(t,e){var n=t.style||t,i;for(i in e)n[i]=e[i]},xg=function(t){var e=t.getAttribute("data-flip-id");return e||t.setAttribute("data-flip-id",e="auto-"+fg++),e},kd=function(t){return t.map(function(e){return e.element})},Fu=function(t,e,n){return t&&e.length&&n.add(t(kd(e),n,new Pn(e,0,!0)),0)},Ws=function(t,e,n,i,s,r){var o=t.element,a=t.cache,c=t.parent,u=t.x,f=t.y,h=e.width,p=e.height,_=e.scaleX,g=e.scaleY,m=e.rotation,d=e.bounds,v=r&&Ql&&Ql(o,"transform"),y=t,x=e.matrix,M=x.e,E=x.f,D=t.bounds.width!==d.width||t.bounds.height!==d.height||t.scaleX!==_||t.scaleY!==g||t.rotation!==m,T=!D&&t.simple&&e.simple&&!s,w,b,N,O,A,R,L;return T||!c?(_=g=1,m=w=0):(A=mg(c),R=A.clone().multiply(e.ctm?e.matrix.clone().multiply(e.ctm):e.matrix),m=Os(Math.atan2(R.b,R.a)*Tu),w=Os(Math.atan2(R.c,R.d)*Tu+m)%360,_=Math.sqrt(Math.pow(R.a,2)+Math.pow(R.b,2)),g=Math.sqrt(Math.pow(R.c,2)+Math.pow(R.d,2))*Math.cos(w*dg),s&&(s=ir(s)[0],O=Be.getProperty(s),L=s.getBBox&&typeof s.getBBox=="function"&&s.getBBox(),y={scaleX:O("scaleX"),scaleY:O("scaleY"),width:L?L.width:Math.ceil(parseFloat(O("width","px"))),height:L?L.height:parseFloat(O("height","px"))}),a.rotation=m+"deg",a.skewX=w+"deg"),n?(_*=h===y.width||!y.width?1:h/y.width,g*=p===y.height||!y.height?1:p/y.height,a.scaleX=_,a.scaleY=g):(h=oi(h*_/y.scaleX,0),p=oi(p*g/y.scaleY,0),o.style.width=h+"px",o.style.height=p+"px"),i&&Bd(o,e.props),T||!c?(u+=M-t.matrix.e,f+=E-t.matrix.f):D||c!==e.parent?(a.renderTransform(1,a),R=Wn(s||o,!1,!1,!0),b=A.apply({x:R.e,y:R.f}),N=A.apply({x:M,y:E}),u+=N.x-b.x,f+=N.y-b.y):(A.e=A.f=0,N=A.apply({x:M-t.matrix.e,y:E-t.matrix.f}),u+=N.x,f+=N.y),u=oi(u,.02),f=oi(f,.02),r&&!(r instanceof rs)?v&&v.revert():(a.x=u+"px",a.y=f+"px",a.renderTransform(1,a)),r&&(r.x=u,r.y=f,r.rotation=m,r.skewX=w,n?(r.scaleX=_,r.scaleY=g):(r.width=h,r.height=p)),r||a},qa=function(t,e){return t instanceof Pn?t:new Pn(t,e)},Vd=function(t,e,n){var i=t.idLookup[n],s=t.alt[n];return s.isVisible&&(!(e.getElementState(s.element)||s).isVisible||!i.isVisible)?s:i},Xa=[],ja="width,height,overflowX,overflowY".split(","),mo,Iu=function(t){if(t!==mo){var e=vi.style,n=vi.clientWidth===window.outerWidth,i=vi.clientHeight===window.outerHeight,s=4;if(t&&(n||i)){for(;s--;)Xa[s]=e[ja[s]];n&&(e.width=vi.clientWidth+"px",e.overflowY="hidden"),i&&(e.height=vi.clientHeight+"px",e.overflowX="hidden"),mo=t}else if(mo){for(;s--;)Xa[s]?e[ja[s]]=Xa[s]:e.removeProperty(Ud(ja[s]));mo=t}}},Ya=function(t,e,n,i){t instanceof Pn&&e instanceof Pn||console.warn("Not a valid state object."),n=n||{};var s=n,r=s.clearProps,o=s.onEnter,a=s.onLeave,c=s.absolute,u=s.absoluteOnLeave,f=s.custom,h=s.delay,p=s.paused,_=s.repeat,g=s.repeatDelay,m=s.yoyo,d=s.toggleClass,v=s.nested,y=s.zIndex,x=s.scale,M=s.fade,E=s.stagger,D=s.spin,T=s.prune,w=("props"in n?n:t).props,b=zs(n,Pu),N=Be.timeline({delay:h,paused:p,repeat:_,repeatDelay:g,yoyo:m,data:"isFlip"}),O=b,A=[],R=[],L=[],I=[],q=D===!0?1:D||0,k=typeof D=="function"?D:function(){return q},Y=t.interrupted||e.interrupted,Q=N[i!==1?"to":"from"],ct,G,X,$,nt,it,W,wt,Et,at,vt,Ot,ut,St;for(G in e.idLookup)vt=e.alt[G]?Vd(e,t,G):e.idLookup[G],nt=vt.element,at=t.idLookup[G],t.alt[G]&&nt===at.element&&(t.alt[G].isVisible||!vt.isVisible)&&(at=t.alt[G]),at?(it={t:nt,b:at,a:vt,sd:at.element===nt?0:vt.isVisible?1:-1},L.push(it),it.sd&&(it.sd<0&&(it.b=vt,it.a=at),Y&&Gr(it.b,w?pa[w]:ma),M&&L.push(it.swap={t:at.element,b:it.b,a:it.a,sd:-it.sd,swap:it})),nt._flip=at.element._flip=ee?ee.timeline:N):vt.isVisible&&(L.push({t:nt,b:zs(vt,{isVisible:1}),a:vt,sd:0,entering:1}),nt._flip=ee?ee.timeline:N);if(w&&(Uc[w]||Od(w)).forEach(function(Ht){return b[Ht]=function(qt){return L[qt].a.props[Ht]}}),L.finalStates=Et=[],Ot=function(){for(ca(L),Iu(!0),$=0;$<L.length;$++)it=L[$],ut=it.a,St=it.b,T&&!ut.isDifferent(St)&&!it.entering?L.splice($--,1):(nt=it.t,v&&!(it.sd<0)&&$&&(ut.matrix=Wn(nt,!1,!1,!0)),St.isVisible&&ut.isVisible?(it.sd<0?(W=new rs(nt,w,t.simple),Ws(W,ut,x,0,0,W),W.matrix=Wn(nt,!1,!1,!0),W.css=it.b.css,it.a=ut=W,M&&(nt.style.opacity=Y?St.opacity:ut.opacity),E&&I.push(nt)):it.sd>0&&M&&(nt.style.opacity=Y?ut.opacity-St.opacity:"0"),Ws(ut,St,x,w)):St.isVisible!==ut.isVisible&&(St.isVisible?ut.isVisible||(St.css=ut.css,R.push(St),L.splice($--,1),c&&v&&Ws(ut,St,x,w)):(ut.isVisible&&A.push(ut),L.splice($--,1))),x||(nt.style.maxWidth=Math.max(ut.width,St.width)+"px",nt.style.maxHeight=Math.max(ut.height,St.height)+"px",nt.style.minWidth=Math.min(ut.width,St.width)+"px",nt.style.minHeight=Math.min(ut.height,St.height)+"px"),v&&d&&nt.classList.add(d)),Et.push(ut);var qt;if(d&&(qt=Et.map(function(yt){return yt.element}),v&&qt.forEach(function(yt){return yt.classList.remove(d)})),Iu(!1),x?(b.scaleX=function(yt){return L[yt].a.scaleX},b.scaleY=function(yt){return L[yt].a.scaleY}):(b.width=function(yt){return L[yt].a.width+"px"},b.height=function(yt){return L[yt].a.height+"px"},b.autoRound=n.autoRound||!1),b.x=function(yt){return L[yt].a.x+"px"},b.y=function(yt){return L[yt].a.y+"px"},b.rotation=function(yt){return L[yt].a.rotation+(D?k(yt,wt[yt],wt)*360:0)},b.skewX=function(yt){return L[yt].a.skewX},wt=L.map(function(yt){return yt.t}),(y||y===0)&&(b.modifiers={zIndex:function(){return y}},b.zIndex=y,b.immediateRender=n.immediateRender!==!1),M&&(b.opacity=function(yt){return L[yt].sd<0?0:L[yt].sd>0?L[yt].a.opacity:"+=0"}),I.length){E=Be.utils.distribute(E);var kt=wt.slice(I.length);b.stagger=function(yt,F){return E(~I.indexOf(F)?wt.indexOf(L[yt].swap.t):yt,F,kt)}}if(pg.forEach(function(yt){return n[yt]&&N.eventCallback(yt,n[yt],n[yt+"Params"])}),f&&wt.length){O=zs(b,Pu),"scale"in f&&(f.scaleX=f.scaleY=f.scale,delete f.scale);for(G in f)ct=zs(f[G],Nd),ct[G]=b[G],!("duration"in ct)&&"duration"in b&&(ct.duration=b.duration),ct.stagger=b.stagger,Q.call(N,wt,ct,0),delete O[G]}(wt.length||R.length||A.length)&&(d&&N.add(function(){return Ha(qt,d,N._zTime<0?"remove":"add")},0)&&!p&&Ha(qt,d,"add"),wt.length&&Q.call(N,wt,O,0)),Fu(o,A,N),Fu(a,R,N);var Wt=ee&&ee.timeline;Wt&&(Wt.add(N,0),ee._final.push(function(){return Lu(L,!r)})),X=N.duration(),N.call(function(){var yt=N.time()>=X;yt&&!Wt&&Lu(L,!r),d&&Ha(qt,d,yt?"remove":"add")})},u&&(c=L.filter(function(Ht){return!Ht.sd&&!Ht.a.isVisible&&Ht.b.isVisible}).map(function(Ht){return Ht.a.element})),ee){var Kt;c&&(Kt=ee._abs).push.apply(Kt,Ru(L,c)),ee._run.push(Ot)}else c&&zd(Ru(L,c)),Ot();var Yt=ee?ee.timeline:N;return Yt.revert=function(){return Bc(Yt,1)},Yt},yg=function l(t){t.vars.onInterrupt&&t.vars.onInterrupt.apply(t,t.vars.onInterruptParams||[]),t.getChildren(!0,!1,!0).forEach(l)},Bc=function(t,e){if(t&&t.progress()<1&&!t.paused())return e&&(yg(t),e<2&&t.progress(1),t.kill()),!0},go=function(t){for(var e=t.idLookup={},n=t.alt={},i=t.elementStates,s=i.length,r;s--;)r=i[s],e[r.id]?n[r.id]=r:e[r.id]=r},Pn=function(){function l(e,n,i){if(this.props=n&&n.props,this.simple=!!(n&&n.simple),i)this.targets=kd(e),this.elementStates=e,go(this);else{this.targets=ir(e);var s=n&&(n.kill===!1||n.batch&&!n.kill);ee&&!s&&ee._kill.push(this),this.update(s||!!ee)}}var t=l.prototype;return t.update=function(n){var i=this;return this.elementStates=this.targets.map(function(s){return new rs(s,i.props,i.simple)}),go(this),this.interrupt(n),this.recordInlineStyles(),this},t.clear=function(){return this.targets.length=this.elementStates.length=0,go(this),this},t.fit=function(n,i,s){for(var r=ca(this.elementStates.slice(0),!1,!0),o=(n||this).idLookup,a=0,c,u;a<r.length;a++)c=r[a],s&&(c.matrix=Wn(c.element,!1,!1,!0)),u=o[c.id],u&&Ws(c,u,i,!0,0,c),c.matrix=Wn(c.element,!1,!1,!0);return this},t.getProperty=function(n,i){var s=this.getElementState(n)||la;return(i in s?s:s.props||la)[i]},t.add=function(n){for(var i=n.targets.length,s=this.idLookup,r=this.alt,o,a,c;i--;)a=n.elementStates[i],c=s[a.id],c&&(a.element===c.element||r[a.id]&&r[a.id].element===a.element)?(o=this.elementStates.indexOf(a.element===c.element?c:r[a.id]),this.targets.splice(o,1,n.targets[i]),this.elementStates.splice(o,1,a)):(this.targets.push(n.targets[i]),this.elementStates.push(a));return n.interrupted&&(this.interrupted=!0),n.simple||(this.simple=!1),go(this),this},t.compare=function(n){var i=n.idLookup,s=this.idLookup,r=[],o=[],a=[],c=[],u=[],f=n.alt,h=this.alt,p=function(T,w,b){return(T.isVisible!==w.isVisible?T.isVisible?a:c:T.isVisible?o:r).push(b)&&u.push(b)},_=function(T,w,b){return u.indexOf(b)<0&&p(T,w,b)},g,m,d,v,y,x,M,E;for(d in i)y=f[d],x=h[d],g=y?Vd(n,this,d):i[d],v=g.element,m=s[d],x?(E=m.isVisible||!x.isVisible&&v===m.element?m:x,M=y&&!g.isVisible&&!y.isVisible&&E.element===y.element?y:g,M.isVisible&&E.isVisible&&M.element!==E.element?((M.isDifferent(E)?o:r).push(M.element,E.element),u.push(M.element,E.element)):p(M,E,M.element),y&&M.element===y.element&&(y=i[d]),_(M.element!==m.element&&y?y:M,m,m.element),_(y&&y.element===x.element?y:M,x,x.element),y&&_(y,x.element===y.element?x:m,y.element)):(m?m.isDifferent(g)?p(g,m,v):r.push(v):a.push(v),y&&_(y,m,y.element));for(d in s)i[d]||(c.push(s[d].element),h[d]&&c.push(h[d].element));return{changed:o,unchanged:r,enter:a,leave:c}},t.recordInlineStyles=function(){for(var n=pa[this.props]||ma,i=this.elementStates.length;i--;)Gr(this.elementStates[i],n)},t.interrupt=function(n){var i=this,s=[];this.targets.forEach(function(r){var o=r._flip,a=Bc(o,n?0:1);n&&a&&s.indexOf(o)<0&&o.add(function(){return i.updateVisibility()}),a&&s.push(o)}),!n&&s.length&&this.updateVisibility(),this.interrupted||(this.interrupted=!!s.length)},t.updateVisibility=function(){this.elementStates.forEach(function(n){var i=n.element.getBoundingClientRect();n.isVisible=!!(i.width||i.height||i.top||i.left),n.uncache=1})},t.getElementState=function(n){return this.elementStates[this.targets.indexOf(Nr(n))]},t.makeAbsolute=function(){return ca(this.elementStates.slice(0),!0,!0).map(zc)},l}(),rs=function(){function l(e,n,i){this.element=e,this.update(n,i)}var t=l.prototype;return t.isDifferent=function(n){var i=this.bounds,s=n.bounds;return i.top!==s.top||i.left!==s.left||i.width!==s.width||i.height!==s.height||!this.matrix.equals(n.matrix)||this.opacity!==n.opacity||this.props&&n.props&&JSON.stringify(this.props)!==JSON.stringify(n.props)},t.update=function(n,i){var s=this,r=s.element,o=Be.getProperty(r),a=Be.core.getCache(r),c=r.getBoundingClientRect(),u=r.getBBox&&typeof r.getBBox=="function"&&r.nodeName.toLowerCase()!=="svg"&&r.getBBox(),f=i?new ss(1,0,0,1,c.left+Fc(),c.top+Rc()):Wn(r,!1,!1,!0);s.getProp=o,s.element=r,s.id=xg(r),s.matrix=f,s.cache=a,s.bounds=c,s.isVisible=!!(c.width||c.height||c.left||c.top),s.display=o("display"),s.position=o("position"),s.parent=r.parentNode,s.x=o("x"),s.y=o("y"),s.scaleX=a.scaleX,s.scaleY=a.scaleY,s.rotation=o("rotation"),s.skewX=o("skewX"),s.opacity=o("opacity"),s.width=u?u.width:oi(o("width","px"),.04),s.height=u?u.height:oi(o("height","px"),.04),n&&vg(s,Uc[n]||Od(n)),s.ctm=r.getCTM&&r.nodeName.toLowerCase()==="svg"&&Id(r).inverse(),s.simple=i||Os(f.a)===1&&!Os(f.b)&&!Os(f.c)&&Os(f.d)===1,s.uncache=0},l}(),Mg=function(){function l(e,n){this.vars=e,this.batch=n,this.states=[],this.timeline=n.timeline}var t=l.prototype;return t.getStateById=function(n){for(var i=this.states.length;i--;)if(this.states[i].idLookup[n])return this.states[i]},t.kill=function(){this.batch.remove(this)},l}(),wg=function(){function l(e){this.id=e,this.actions=[],this._kill=[],this._final=[],this._abs=[],this._run=[],this.data={},this.state=new Pn,this.timeline=Be.timeline()}var t=l.prototype;return t.add=function(n){var i=this.actions.filter(function(s){return s.vars===n});return i.length?i[0]:(i=new Mg(typeof n=="function"?{animate:n}:n,this),this.actions.push(i),i)},t.remove=function(n){var i=this.actions.indexOf(n);return i>=0&&this.actions.splice(i,1),this},t.getState=function(n){var i=this,s=ee,r=Ir;return ee=this,this.state.clear(),this._kill.length=0,this.actions.forEach(function(o){o.vars.getState&&(o.states.length=0,Ir=o,o.state=o.vars.getState(o)),n&&o.states.forEach(function(a){return i.state.add(a)})}),Ir=r,ee=s,this.killConflicts(),this},t.animate=function(){var n=this,i=ee,s=this.timeline,r=this.actions.length,o,a;for(ee=this,s.clear(),this._abs.length=this._final.length=this._run.length=0,this.actions.forEach(function(c){c.vars.animate&&c.vars.animate(c);var u=c.vars.onEnter,f=c.vars.onLeave,h=c.targets,p,_;h&&h.length&&(u||f)&&(p=new Pn,c.states.forEach(function(g){return p.add(g)}),_=p.compare(ga.getState(h)),_.enter.length&&u&&u(_.enter),_.leave.length&&f&&f(_.leave))}),zd(this._abs),this._run.forEach(function(c){return c()}),a=s.duration(),o=this._final.slice(0),s.add(function(){a<=s.time()&&(o.forEach(function(c){return c()}),Cu(n,"onComplete"))}),ee=i;r--;)this.actions[r].vars.once&&this.actions[r].kill();return Cu(this,"onStart"),s.restart(),this},t.loadState=function(n){n||(n=function(){return 0});var i=[];return this.actions.forEach(function(s){if(s.vars.loadState){var r,o=function a(c){c&&(s.targets=c),r=i.indexOf(a),~r&&(i.splice(r,1),i.length||n())};i.push(o),s.vars.loadState(o)}}),i.length||n(),this},t.setState=function(){return this.actions.forEach(function(n){return n.targets=n.vars.setState&&n.vars.setState(n)}),this},t.killConflicts=function(n){return this.state.interrupt(n),this._kill.forEach(function(i){return i.interrupt(n)}),this},t.run=function(n,i){var s=this;return this!==ee&&(n||this.getState(i),this.loadState(function(){s._killed||(s.setState(),s.animate())})),this},t.clear=function(n){this.state.clear(),n||(this.actions.length=0)},t.getStateById=function(n){for(var i=this.actions.length,s;i--;)if(s=this.actions[i].getStateById(n),s)return s;return this.state.idLookup[n]&&this.state},t.kill=function(){this._killed=1,this.clear(),delete tc[this.id]},l}(),ga=function(){function l(){}return l.getState=function(e,n){var i=qa(e,n);return Ir&&Ir.states.push(i),n&&n.batch&&l.batch(n.batch).state.add(i),i},l.from=function(e,n){return n=n||{},"clearProps"in n||(n.clearProps=!0),Ya(e,qa(n.targets||e.targets,{props:n.props||e.props,simple:n.simple,kill:!!n.kill}),n,-1)},l.to=function(e,n){return Ya(e,qa(n.targets||e.targets,{props:n.props||e.props,simple:n.simple,kill:!!n.kill}),n,1)},l.fromTo=function(e,n,i){return Ya(e,n,i)},l.fit=function(e,n,i){var s=i?zs(i,Nd):{},r=i||s,o=r.absolute,a=r.scale,c=r.getVars,u=r.props,f=r.runBackwards,h=r.onComplete,p=r.simple,_=i&&i.fitChild&&Nr(i.fitChild),g=ec(n,u,p,e),m=ec(e,0,p,g),d=u?pa[u]:ma;return u&&Bd(s,g.props),f&&(Gr(m,d),"immediateRender"in s||(s.immediateRender=!0),s.onComplete=function(){Oc(m),h&&h.apply(this,arguments)}),o&&zc(m,g),s=Ws(m,g,a||_,u,_,s.duration||c?s:0),c?s:s.duration?Be.to(m.element,s):null},l.makeAbsolute=function(e,n){return(e instanceof Pn?e:new Pn(e,n)).makeAbsolute()},l.batch=function(e){return e||(e="default"),tc[e]||(tc[e]=new wg(e))},l.killFlipsOf=function(e,n){(e instanceof Pn?e.targets:ir(e)).forEach(function(i){return i&&Bc(i._flip,n!==!1?1:2)})},l.isFlipping=function(e){var n=l.getByTarget(e);return!!n&&n.isActive()},l.getByTarget=function(e){return(Nr(e)||la)._flip},l.getElementState=function(e,n){return new rs(Nr(e),n)},l.convertCoordinates=function(e,n,i){var s=Wn(n,!0,!0).multiply(Wn(e));return i?s.apply(i):s},l.register=function(e){if(vi=typeof document<"u"&&document.body,vi){Be=e,Lc(vi),ir=Be.utils.toArray,Ql=Be.core.getStyleSaver;var n=Be.utils.snap(.1);oi=function(s,r){return n(parseFloat(s)+r)}}},l}();ga.version="3.11.5";typeof window<"u"&&window.gsap&&window.gsap.registerPlugin(ga);/*!
 * EaselPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var kn,Gd,Zo,Hd,dr,pr,Sg="redMultiplier,greenMultiplier,blueMultiplier,alphaMultiplier,redOffset,greenOffset,blueOffset,alphaOffset".split(","),Wd=function(){return typeof window<"u"},qd=function(){return kn||Wd()&&(kn=window.gsap)&&kn.registerPlugin&&kn},Xd=function(){return Hd||Zo&&Zo.createjs||Zo||{}},_a=function(t){return console.warn(t)},jd=function(t){var e=t.getBounds&&t.getBounds();e||(e=t.nominalBounds||{x:0,y:0,width:100,height:100},t.setBounds&&t.setBounds(e.x,e.y,e.width,e.height)),t.cache&&t.cache(e.x,e.y,e.width,e.height),_a("EaselPlugin: for filters to display in EaselJS, you must call the object's cache() method first. GSAP attempted to use the target's getBounds() for the cache but that may not be completely accurate. "+t)},bg=function(t,e,n){dr||(dr=Xd().ColorFilter,dr||_a("EaselPlugin error: The EaselJS ColorFilter JavaScript file wasn't loaded."));for(var i=t.filters||[],s=i.length,r,o,a,c,u,f;s--;)if(i[s]instanceof dr){o=i[s];break}if(o||(o=new dr,i.push(o),t.filters=i),a=o.clone(),e.tint!=null)r=kn.utils.splitColor(e.tint),c=e.tintAmount!=null?+e.tintAmount:1,a.redOffset=+r[0]*c,a.greenOffset=+r[1]*c,a.blueOffset=+r[2]*c,a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1-c;else for(u in e)u!=="exposure"&&u!=="brightness"&&(a[u]=+e[u]);for(e.exposure!=null?(a.redOffset=a.greenOffset=a.blueOffset=255*(+e.exposure-1),a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1):e.brightness!=null&&(c=+e.brightness-1,a.redOffset=a.greenOffset=a.blueOffset=c>0?c*255:0,a.redMultiplier=a.greenMultiplier=a.blueMultiplier=1-Math.abs(c)),s=8;s--;)u=Sg[s],o[u]!==a[u]&&(f=n.add(o,u,o[u],a[u],0,0,0,0,0,1),f&&(f.op="easel_colorFilter"));n._props.push("easel_colorFilter"),t.cacheID||jd(t)},Nu=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],hn=.212671,fn=.71516,dn=.072169,va=function(t,e){if(!(t instanceof Array)||!(e instanceof Array))return e;var n=[],i=0,s=0,r,o;for(r=0;r<4;r++){for(o=0;o<5;o++)s=o===4?t[i+4]:0,n[i+o]=t[i]*e[o]+t[i+1]*e[o+5]+t[i+2]*e[o+10]+t[i+3]*e[o+15]+s;i+=5}return n},Eg=function(t,e){if(isNaN(e))return t;var n=1-e,i=n*hn,s=n*fn,r=n*dn;return va([i+e,s,r,0,0,i,s+e,r,0,0,i,s,r+e,0,0,0,0,0,1,0],t)},Dg=function(t,e,n){isNaN(n)&&(n=1);var i=kn.utils.splitColor(e),s=i[0]/255,r=i[1]/255,o=i[2]/255,a=1-n;return va([a+n*s*hn,n*s*fn,n*s*dn,0,0,n*r*hn,a+n*r*fn,n*r*dn,0,0,n*o*hn,n*o*fn,a+n*o*dn,0,0,0,0,0,1,0],t)},Cg=function(t,e){if(isNaN(e))return t;e*=Math.PI/180;var n=Math.cos(e),i=Math.sin(e);return va([hn+n*(1-hn)+i*-hn,fn+n*-fn+i*-fn,dn+n*-dn+i*(1-dn),0,0,hn+n*-hn+i*.143,fn+n*(1-fn)+i*.14,dn+n*-dn+i*-.283,0,0,hn+n*-hn+i*-(1-hn),fn+n*-fn+i*fn,dn+n*(1-dn)+i*dn,0,0,0,0,0,1,0,0,0,0,0,1],t)},Tg=function(t,e){return isNaN(e)?t:(e+=.01,va([e,0,0,0,128*(1-e),0,e,0,0,128*(1-e),0,0,e,0,128*(1-e),0,0,0,1,0],t))},Ag=function(t,e,n){pr||(pr=Xd().ColorMatrixFilter,pr||_a("EaselPlugin: The EaselJS ColorMatrixFilter JavaScript file wasn't loaded."));for(var i=t.filters||[],s=i.length,r,o,a,c;--s>-1;)if(i[s]instanceof pr){a=i[s];break}for(a||(a=new pr(Nu.slice()),i.push(a),t.filters=i),o=a.matrix,r=Nu.slice(),e.colorize!=null&&(r=Dg(r,e.colorize,Number(e.colorizeAmount))),e.contrast!=null&&(r=Tg(r,Number(e.contrast))),e.hue!=null&&(r=Cg(r,Number(e.hue))),e.saturation!=null&&(r=Eg(r,Number(e.saturation))),s=r.length;--s>-1;)r[s]!==o[s]&&(c=n.add(o,s,o[s],r[s],0,0,0,0,0,1),c&&(c.op="easel_colorMatrixFilter"));n._props.push("easel_colorMatrixFilter"),t.cacheID||jd(),n._matrix=o},Uu=function(t){kn=t||qd(),Wd()&&(Zo=window),kn&&(Gd=1)},kc={version:"3.11.5",name:"easel",init:function(t,e,n,i,s){Gd||(Uu(),kn||_a("Please gsap.registerPlugin(EaselPlugin)")),this.target=t;var r,o,a,c,u,f,h;for(r in e)if(u=e[r],r==="colorFilter"||r==="tint"||r==="tintAmount"||r==="exposure"||r==="brightness")a||(bg(t,e.colorFilter||e,this),a=!0);else if(r==="saturation"||r==="contrast"||r==="hue"||r==="colorize"||r==="colorizeAmount")c||(Ag(t,e.colorMatrixFilter||e,this),c=!0);else if(r==="frame"){if(typeof u=="string"&&u.charAt(1)!=="="&&(f=t.labels))for(h=0;h<f.length;h++)f[h].label===u&&(u=f[h].position);o=this.add(t,"gotoAndStop",t.currentFrame,u,i,s,Math.round,0,0,1),o&&(o.op=r)}else t[r]!=null&&this.add(t,r,"get",u)},render:function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next;e.target.cacheID&&e.target.updateCache()},register:Uu};kc.registerCreateJS=function(l){Hd=l};qd()&&kn.registerPlugin(kc);/*!
 * strings: 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pg=/(?:^\s+|\s+$)/g,Lg=/([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;function Yd(l){var t=l.nodeType,e="";if(t===1||t===9||t===11){if(typeof l.textContent=="string")return l.textContent;for(l=l.firstChild;l;l=l.nextSibling)e+=Yd(l)}else if(t===3||t===4)return l.nodeValue;return e}function nc(l,t,e,n){for(var i=l.firstChild,s=[],r;i;)i.nodeType===3?(r=(i.nodeValue+"").replace(/^\n+/g,""),n||(r=r.replace(/\s+/g," ")),s.push.apply(s,$d(r,t,e,n))):(i.nodeName+"").toLowerCase()==="br"?s[s.length-1]+="<br>":s.push(i.outerHTML),i=i.nextSibling;for(r=s.length;r--;)s[r]==="&"&&s.splice(r,1,"&amp;");return s}function $d(l,t,e,n){if(l+="",e&&(l=l.trim?l.trim():l.replace(Pg,"")),t&&t!=="")return l.replace(/>/g,"&gt;").replace(/</g,"&lt;").split(t);for(var i=[],s=l.length,r=0,o,a;r<s;r++)a=l.charAt(r),(a.charCodeAt(0)>=55296&&a.charCodeAt(0)<=56319||l.charCodeAt(r+1)>=65024&&l.charCodeAt(r+1)<=65039)&&(o=((l.substr(r,12).split(Lg)||[])[1]||"").length||2,a=l.substr(r,o),i.emoji=1,r+=o-1),i.push(a===">"?"&gt;":a==="<"?"&lt;":n&&a===" "&&(l.charAt(r-1)===" "||l.charAt(r+1)===" ")?"&nbsp;":a);return i}/*!
 * TextPlugin 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Cr,_o,Rg=function(){return Cr||typeof window<"u"&&(Cr=window.gsap)&&Cr.registerPlugin&&Cr},Qr={version:"3.11.5",name:"text",init:function(t,e,n){typeof e!="object"&&(e={value:e});var i=t.nodeName.toUpperCase(),s=this,r=e,o=r.newClass,a=r.oldClass,c=r.preserveSpaces,u=r.rtl,f=s.delimiter=e.delimiter||"",h=s.fillChar=e.fillChar||(e.padSpace?"&nbsp;":""),p,_,g,m,d,v,y,x;if(s.svg=t.getBBox&&(i==="TEXT"||i==="TSPAN"),!("innerHTML"in t)&&!s.svg)return!1;if(s.target=t,!("value"in e)){s.text=s.original=[""];return}for(g=nc(t,f,!1,c),_o||(_o=document.createElement("div")),_o.innerHTML=e.value,_=nc(_o,f,!1,c),s.from=n._from,(s.from||u)&&!(u&&s.from)&&(i=g,g=_,_=i),s.hasClass=!!(o||a),s.newClass=u?a:o,s.oldClass=u?o:a,i=g.length-_.length,p=i<0?g:_,i<0&&(i=-i);--i>-1;)p.push(h);if(e.type==="diff"){for(m=0,d=[],v=[],y="",i=0;i<_.length;i++)x=_[i],x===g[i]?y+=x:(d[m]=y+x,v[m++]=y+g[i],y="");_=d,g=v,y&&(_.push(y),g.push(y))}e.speed&&n.duration(Math.min(.05/e.speed*p.length,e.maxDuration||9999)),s.rtl=u,s.original=g,s.text=_,s._props.push("text")},render:function(t,e){t>1?t=1:t<0&&(t=0),e.from&&(t=1-t);var n=e.text,i=e.hasClass,s=e.newClass,r=e.oldClass,o=e.delimiter,a=e.target,c=e.fillChar,u=e.original,f=e.rtl,h=n.length,p=(f?1-t:t)*h+.5|0,_,g,m;i&&t?(_=s&&p,g=r&&p!==h,m=(_?"<span class='"+s+"'>":"")+n.slice(0,p).join(o)+(_?"</span>":"")+(g?"<span class='"+r+"'>":"")+o+u.slice(p).join(o)+(g?"</span>":"")):m=n.slice(0,p).join(o)+o+u.slice(p).join(o),e.svg?a.textContent=m:a.innerHTML=c==="&nbsp;"&&~m.indexOf("  ")?m.split("  ").join("&nbsp;&nbsp;"):m}};Qr.splitInnerHTML=nc;Qr.emojiSafeSplit=$d;Qr.getText=Yd;Rg()&&Cr.registerPlugin(Qr);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vc="151",ps={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fg=0,Ou=1,Ig=2,Zd=1,Ng=2,Tr=3,Ti=0,qe=1,si=2,bi=0,qs=1,zu=2,Bu=3,ku=4,Ug=5,Is=100,Og=101,zg=102,Vu=103,Gu=104,Bg=200,kg=201,Vg=202,Gg=203,Kd=204,Jd=205,Hg=206,Wg=207,qg=208,Xg=209,jg=210,Yg=0,$g=1,Zg=2,ic=3,Kg=4,Jg=5,Qg=6,t_=7,Gc=0,e_=1,n_=2,ai=0,i_=1,s_=2,r_=3,o_=4,a_=5,Qd=300,sr=301,rr=302,sc=303,rc=304,xa=306,oc=1e3,Dn=1001,ac=1002,Oe=1003,Hu=1004,$a=1005,pn=1006,l_=1007,Hr=1008,os=1009,c_=1010,u_=1011,tp=1012,h_=1013,$i=1014,Zi=1015,Wr=1016,f_=1017,d_=1018,Xs=1020,p_=1021,Cn=1023,m_=1024,g_=1025,ns=1026,or=1027,__=1028,v_=1029,x_=1030,y_=1031,M_=1033,Za=33776,Ka=33777,Ja=33778,Qa=33779,Wu=35840,qu=35841,Xu=35842,ju=35843,w_=36196,Yu=37492,$u=37496,Zu=37808,Ku=37809,Ju=37810,Qu=37811,th=37812,eh=37813,nh=37814,ih=37815,sh=37816,rh=37817,oh=37818,ah=37819,lh=37820,ch=37821,tl=36492,S_=36283,uh=36284,hh=36285,fh=36286,as=3e3,te=3001,b_=3200,E_=3201,Hc=0,D_=1,Un="srgb",qr="srgb-linear",ep="display-p3",el=7680,C_=519,dh=35044,ph="300 es",lc=1035;class fs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,r=i.length;s<r;s++)i[s].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],nl=Math.PI/180,cc=180/Math.PI;function to(){const l=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[l&255]+De[l>>8&255]+De[l>>16&255]+De[l>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function ze(l,t,e){return Math.max(t,Math.min(e,l))}function T_(l,t){return(l%t+t)%t}function il(l,t,e){return(1-e)*l+e*t}function mh(l){return(l&l-1)===0&&l!==0}function A_(l){return Math.pow(2,Math.floor(Math.log(l)/Math.LN2))}function vo(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return l/65535;case Uint8Array:return l/255;case Int16Array:return Math.max(l/32767,-1);case Int8Array:return Math.max(l/127,-1);default:throw new Error("Invalid component type.")}}function $e(l,t){switch(t.constructor){case Float32Array:return l;case Uint16Array:return Math.round(l*65535);case Uint8Array:return Math.round(l*255);case Int16Array:return Math.round(l*32767);case Int8Array:return Math.round(l*127);default:throw new Error("Invalid component type.")}}class Pt{constructor(t=0,e=0){Pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,r=this.y-t.y;return this.x=s*n-r*i+t.x,this.y=s*i+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,s,r,o,a,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=a,u[6]=n,u[7]=r,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[3],a=n[6],c=n[1],u=n[4],f=n[7],h=n[2],p=n[5],_=n[8],g=i[0],m=i[3],d=i[6],v=i[1],y=i[4],x=i[7],M=i[2],E=i[5],D=i[8];return s[0]=r*g+o*v+a*M,s[3]=r*m+o*y+a*E,s[6]=r*d+o*x+a*D,s[1]=c*g+u*v+f*M,s[4]=c*m+u*y+f*E,s[7]=c*d+u*x+f*D,s[2]=h*g+p*v+_*M,s[5]=h*m+p*y+_*E,s[8]=h*d+p*x+_*D,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],u=t[8];return e*r*u-e*o*c-n*s*u+n*o*a+i*s*c-i*r*a}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],u=t[8],f=u*r-o*c,h=o*a-u*s,p=c*s-r*a,_=e*f+n*h+i*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*r)*g,t[3]=h*g,t[4]=(u*e-i*a)*g,t[5]=(i*s-o*e)*g,t[6]=p*g,t[7]=(n*a-c*e)*g,t[8]=(r*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,r,o){const a=Math.cos(s),c=Math.sin(s);return this.set(n*a,n*c,-n*(a*r+c*o)+r+t,-i*c,i*a,-i*(-c*r+a*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sl.makeScale(t,e)),this}rotate(t){return this.premultiply(sl.makeRotation(-t)),this}translate(t,e){return this.premultiply(sl.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sl=new zt;function np(l){for(let t=l.length-1;t>=0;--t)if(l[t]>=65535)return!0;return!1}function Xr(l){return document.createElementNS("http://www.w3.org/1999/xhtml",l)}function js(l){return l<.04045?l*.0773993808:Math.pow(l*.9478672986+.0521327014,2.4)}function rl(l){return l<.0031308?l*12.92:1.055*Math.pow(l,.41666)-.055}const P_=new zt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),L_=new zt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function R_(l){return l.convertSRGBToLinear().applyMatrix3(L_)}function F_(l){return l.applyMatrix3(P_).convertLinearToSRGB()}const I_={[qr]:l=>l,[Un]:l=>l.convertSRGBToLinear(),[ep]:R_},N_={[qr]:l=>l,[Un]:l=>l.convertLinearToSRGB(),[ep]:F_},Ze={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(l){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!l},get workingColorSpace(){return qr},set workingColorSpace(l){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(l,t,e){if(this.enabled===!1||t===e||!t||!e)return l;const n=I_[t],i=N_[e];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${t}" to "${e}".`);return i(n(l))},fromWorkingColorSpace:function(l,t){return this.convert(l,this.workingColorSpace,t)},toWorkingColorSpace:function(l,t){return this.convert(l,t,this.workingColorSpace)}};let gs;class ip{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{gs===void 0&&(gs=Xr("canvas")),gs.width=t.width,gs.height=t.height;const n=gs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=gs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let r=0;r<s.length;r++)s[r]=js(s[r]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(js(e[n]/255)*255):e[n]=js(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class sp{constructor(t=null){this.isSource=!0,this.uuid=to(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let r=0,o=i.length;r<o;r++)i[r].isDataTexture?s.push(ol(i[r].image)):s.push(ol(i[r]))}else s=ol(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ol(l){return typeof HTMLImageElement<"u"&&l instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&l instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&l instanceof ImageBitmap?ip.getDataURL(l):l.data?{data:Array.from(l.data),width:l.width,height:l.height,type:l.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U_=0;class Xe extends fs{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Dn,i=Dn,s=pn,r=Hr,o=Cn,a=os,c=Xe.DEFAULT_ANISOTROPY,u=as){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=to(),this.name="",this.source=new sp(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=a,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oc:t.x=t.x-Math.floor(t.x);break;case Dn:t.x=t.x<0?0:1;break;case ac:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oc:t.y=t.y-Math.floor(t.y);break;case Dn:t.y=t.y<0?0:1;break;case ac:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Qd;Xe.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,i=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i+r[12]*s,this.y=r[1]*e+r[5]*n+r[9]*i+r[13]*s,this.z=r[2]*e+r[6]*n+r[10]*i+r[14]*s,this.w=r[3]*e+r[7]*n+r[11]*i+r[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const a=t.elements,c=a[0],u=a[4],f=a[8],h=a[1],p=a[5],_=a[9],g=a[2],m=a[6],d=a[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(p+1)/2,M=(d+1)/2,E=(u+h)/4,D=(f+g)/4,T=(_+m)/4;return y>x&&y>M?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=D/n):x>M?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=E/i,s=T/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=D/s,i=T/s),this.set(n,i,s,e),this}let v=Math.sqrt((m-_)*(m-_)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-g)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ls extends fs{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new Xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:pn,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sp(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rp extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class O_ extends Xe{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=Dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let cs=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,r,o){let a=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[r+0],p=s[r+1],_=s[r+2],g=s[r+3];if(o===0){t[e+0]=a,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=h,t[e+1]=p,t[e+2]=_,t[e+3]=g;return}if(f!==g||a!==h||c!==p||u!==_){let m=1-o;const d=a*h+c*p+u*_+f*g,v=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const M=Math.sqrt(y),E=Math.atan2(M,d*v);m=Math.sin(m*E)/M,o=Math.sin(o*E)/M}const x=o*v;if(a=a*m+h*x,c=c*m+p*x,u=u*m+_*x,f=f*m+g*x,m===1-o){const M=1/Math.sqrt(a*a+c*c+u*u+f*f);a*=M,c*=M,u*=M,f*=M}}t[e]=a,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,r){const o=n[i],a=n[i+1],c=n[i+2],u=n[i+3],f=s[r],h=s[r+1],p=s[r+2],_=s[r+3];return t[e]=o*_+u*f+a*p-c*h,t[e+1]=a*_+u*h+c*f-o*p,t[e+2]=c*_+u*p+o*h-a*f,t[e+3]=u*_-o*f-a*h-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,s=t._z,r=t._order,o=Math.cos,a=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=a(n/2),p=a(i/2),_=a(s/2);switch(r){case"XYZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"YXZ":this._x=h*u*f+c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"ZXY":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f-h*p*_;break;case"ZYX":this._x=h*u*f-c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f+h*p*_;break;case"YZX":this._x=h*u*f+c*p*_,this._y=c*p*f+h*u*_,this._z=c*u*_-h*p*f,this._w=c*u*f-h*p*_;break;case"XZY":this._x=h*u*f-c*p*_,this._y=c*p*f-h*u*_,this._z=c*u*_+h*p*f,this._w=c*u*f+h*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],u=e[6],f=e[10],h=n+o+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-a)*p,this._y=(s-c)*p,this._z=(r-i)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-a)/p,this._x=.25*p,this._y=(i+r)/p,this._z=(s+c)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(s-c)/p,this._x=(i+r)/p,this._y=.25*p,this._z=(a+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(r-i)/p,this._x=(s+c)/p,this._y=(a+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,r=t._w,o=e._x,a=e._y,c=e._z,u=e._w;return this._x=n*u+r*o+i*c-s*a,this._y=i*u+r*a+s*o-n*c,this._z=s*u+r*c+n*a-i*o,this._w=r*u-n*o-i*a-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,r=this._w;let o=r*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=r,this._x=n,this._y=i,this._z=s,this;const a=1-o*o;if(a<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(a),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=r*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class B{constructor(t=0,e=0,n=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,r=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*r,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*r,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z,a=t.w,c=a*e+r*i-o*n,u=a*n+o*e-s*i,f=a*i+s*n-r*e,h=-s*e-r*n-o*i;return this.x=c*a+h*-s+u*-o-f*-r,this.y=u*a+h*-r+f*-s-c*-o,this.z=f*a+h*-o+c*-r-u*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,r=e.x,o=e.y,a=e.z;return this.x=i*a-s*o,this.y=s*r-n*a,this.z=n*o-i*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return al.copy(this).projectOnVector(t),this.sub(al)}reflect(t){return this.sub(al.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const al=new B,gh=new cs;class eo{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){if(t.updateWorldMatrix(!1,!1),t.boundingBox!==void 0)t.boundingBox===null&&t.computeBoundingBox(),_s.copy(t.boundingBox),_s.applyMatrix4(t.matrixWorld),this.union(_s);else{const i=t.geometry;if(i!==void 0)if(e&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,o=s.count;r<o;r++)jn.fromBufferAttribute(s,r).applyMatrix4(t.matrixWorld),this.expandByPoint(jn)}else i.boundingBox===null&&i.computeBoundingBox(),_s.copy(i.boundingBox),_s.applyMatrix4(t.matrixWorld),this.union(_s)}const n=t.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,jn),jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),xo.subVectors(this.max,mr),vs.subVectors(t.a,mr),xs.subVectors(t.b,mr),ys.subVectors(t.c,mr),di.subVectors(xs,vs),pi.subVectors(ys,xs),Bi.subVectors(vs,ys);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Bi.z,Bi.y,di.z,0,-di.x,pi.z,0,-pi.x,Bi.z,0,-Bi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Bi.y,Bi.x,0];return!ll(e,vs,xs,ys,xo)||(e=[1,0,0,0,1,0,0,0,1],!ll(e,vs,xs,ys,xo))?!1:(yo.crossVectors(di,pi),e=[yo.x,yo.y,yo.z],ll(e,vs,xs,ys,xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Xn=[new B,new B,new B,new B,new B,new B,new B,new B],jn=new B,_s=new eo,vs=new B,xs=new B,ys=new B,di=new B,pi=new B,Bi=new B,mr=new B,xo=new B,yo=new B,ki=new B;function ll(l,t,e,n,i){for(let s=0,r=l.length-3;s<=r;s+=3){ki.fromArray(l,s);const o=i.x*Math.abs(ki.x)+i.y*Math.abs(ki.y)+i.z*Math.abs(ki.z),a=t.dot(ki),c=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(a,c,u),Math.min(a,c,u))>o)return!1}return!0}const z_=new eo,gr=new B,cl=new B;let Wc=class{constructor(t=new B,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):z_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,r=t.length;s<r;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);const e=gr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(cl)),this.expandByPoint(gr.copy(t.center).sub(cl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}};const Yn=new B,ul=new B,Mo=new B,mi=new B,hl=new B,wo=new B,fl=new B;let op=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Yn.copy(this.origin).addScaledVector(this.direction,e),Yn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ul.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(ul);const s=t.distanceTo(e)*.5,r=-this.direction.dot(Mo),o=mi.dot(this.direction),a=-mi.dot(Mo),c=mi.lengthSq(),u=Math.abs(1-r*r);let f,h,p,_;if(u>0)if(f=r*a-o,h=r*o-a,_=s*u,f>=0)if(h>=-_)if(h<=_){const g=1/u;f*=g,h*=g,p=f*(f+r*h+2*o)+h*(r*f+h+2*a)+c}else h=s,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*a)+c;else h=-s,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*a)+c;else h<=-_?(f=Math.max(0,-(-r*s+o)),h=f>0?-s:Math.min(Math.max(-s,-a),s),p=-f*f+h*(h+2*a)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-a),s),p=h*(h+2*a)+c):(f=Math.max(0,-(r*s+o)),h=f>0?s:Math.min(Math.max(-s,-a),s),p=-f*f+h*(h+2*a)+c);else h=r>0?-s:s,f=Math.max(0,-(r*h+o)),p=-f*f+h*(h+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ul).addScaledVector(Mo,h),p}intersectSphere(t,e){Yn.subVectors(t.center,this.origin);const n=Yn.dot(this.direction),i=Yn.dot(Yn)-n*n,s=t.radius*t.radius;if(i>s)return null;const r=Math.sqrt(s-i),o=n-r,a=n+r;return a<0?null:o<0?this.at(a,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,r,o,a;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,r=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,r=(t.min.y-h.y)*u),n>r||s>i||((s>n||isNaN(n))&&(n=s),(r<i||isNaN(i))&&(i=r),f>=0?(o=(t.min.z-h.z)*f,a=(t.max.z-h.z)*f):(o=(t.max.z-h.z)*f,a=(t.min.z-h.z)*f),n>a||o>i)||((o>n||n!==n)&&(n=o),(a<i||i!==i)&&(i=a),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Yn)!==null}intersectTriangle(t,e,n,i,s){hl.subVectors(e,t),wo.subVectors(n,t),fl.crossVectors(hl,wo);let r=this.direction.dot(fl),o;if(r>0){if(i)return null;o=1}else if(r<0)o=-1,r=-r;else return null;mi.subVectors(this.origin,t);const a=o*this.direction.dot(wo.crossVectors(mi,wo));if(a<0)return null;const c=o*this.direction.dot(hl.cross(mi));if(c<0||a+c>r)return null;const u=-o*mi.dot(fl);return u<0?null:this.at(u/r,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class me{constructor(){me.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,s,r,o,a,c,u,f,h,p,_,g,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=r,d[9]=o,d[13]=a,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=_,d[11]=g,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new me().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ms.setFromMatrixColumn(t,0).length(),s=1/Ms.setFromMatrixColumn(t,1).length(),r=1/Ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,r=Math.cos(n),o=Math.sin(n),a=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const h=r*u,p=r*f,_=o*u,g=o*f;e[0]=a*u,e[4]=-a*f,e[8]=c,e[1]=p+_*c,e[5]=h-g*c,e[9]=-o*a,e[2]=g-h*c,e[6]=_+p*c,e[10]=r*a}else if(t.order==="YXZ"){const h=a*u,p=a*f,_=c*u,g=c*f;e[0]=h+g*o,e[4]=_*o-p,e[8]=r*c,e[1]=r*f,e[5]=r*u,e[9]=-o,e[2]=p*o-_,e[6]=g+h*o,e[10]=r*a}else if(t.order==="ZXY"){const h=a*u,p=a*f,_=c*u,g=c*f;e[0]=h-g*o,e[4]=-r*f,e[8]=_+p*o,e[1]=p+_*o,e[5]=r*u,e[9]=g-h*o,e[2]=-r*c,e[6]=o,e[10]=r*a}else if(t.order==="ZYX"){const h=r*u,p=r*f,_=o*u,g=o*f;e[0]=a*u,e[4]=_*c-p,e[8]=h*c+g,e[1]=a*f,e[5]=g*c+h,e[9]=p*c-_,e[2]=-c,e[6]=o*a,e[10]=r*a}else if(t.order==="YZX"){const h=r*a,p=r*c,_=o*a,g=o*c;e[0]=a*u,e[4]=g-h*f,e[8]=_*f+p,e[1]=f,e[5]=r*u,e[9]=-o*u,e[2]=-c*u,e[6]=p*f+_,e[10]=h-g*f}else if(t.order==="XZY"){const h=r*a,p=r*c,_=o*a,g=o*c;e[0]=a*u,e[4]=-f,e[8]=c*u,e[1]=h*f+g,e[5]=r*u,e[9]=p*f-_,e[2]=_*f-p,e[6]=o*u,e[10]=g*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(B_,t,k_)}lookAt(t,e,n){const i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),gi.crossVectors(n,Ke),gi.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),gi.crossVectors(n,Ke)),gi.normalize(),So.crossVectors(Ke,gi),i[0]=gi.x,i[4]=So.x,i[8]=Ke.x,i[1]=gi.y,i[5]=So.y,i[9]=Ke.y,i[2]=gi.z,i[6]=So.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,r=n[0],o=n[4],a=n[8],c=n[12],u=n[1],f=n[5],h=n[9],p=n[13],_=n[2],g=n[6],m=n[10],d=n[14],v=n[3],y=n[7],x=n[11],M=n[15],E=i[0],D=i[4],T=i[8],w=i[12],b=i[1],N=i[5],O=i[9],A=i[13],R=i[2],L=i[6],I=i[10],q=i[14],k=i[3],Y=i[7],Q=i[11],ct=i[15];return s[0]=r*E+o*b+a*R+c*k,s[4]=r*D+o*N+a*L+c*Y,s[8]=r*T+o*O+a*I+c*Q,s[12]=r*w+o*A+a*q+c*ct,s[1]=u*E+f*b+h*R+p*k,s[5]=u*D+f*N+h*L+p*Y,s[9]=u*T+f*O+h*I+p*Q,s[13]=u*w+f*A+h*q+p*ct,s[2]=_*E+g*b+m*R+d*k,s[6]=_*D+g*N+m*L+d*Y,s[10]=_*T+g*O+m*I+d*Q,s[14]=_*w+g*A+m*q+d*ct,s[3]=v*E+y*b+x*R+M*k,s[7]=v*D+y*N+x*L+M*Y,s[11]=v*T+y*O+x*I+M*Q,s[15]=v*w+y*A+x*q+M*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],r=t[1],o=t[5],a=t[9],c=t[13],u=t[2],f=t[6],h=t[10],p=t[14],_=t[3],g=t[7],m=t[11],d=t[15];return _*(+s*a*f-i*c*f-s*o*h+n*c*h+i*o*p-n*a*p)+g*(+e*a*p-e*c*h+s*r*h-i*r*p+i*c*u-s*a*u)+m*(+e*c*f-e*o*p-s*r*f+n*r*p+s*o*u-n*c*u)+d*(-i*o*u-e*a*f+e*o*h+i*r*f-n*r*h+n*a*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],r=t[4],o=t[5],a=t[6],c=t[7],u=t[8],f=t[9],h=t[10],p=t[11],_=t[12],g=t[13],m=t[14],d=t[15],v=f*m*c-g*h*c+g*a*p-o*m*p-f*a*d+o*h*d,y=_*h*c-u*m*c-_*a*p+r*m*p+u*a*d-r*h*d,x=u*g*c-_*f*c+_*o*p-r*g*p-u*o*d+r*f*d,M=_*f*a-u*g*a-_*o*h+r*g*h+u*o*m-r*f*m,E=e*v+n*y+i*x+s*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/E;return t[0]=v*D,t[1]=(g*h*s-f*m*s-g*i*p+n*m*p+f*i*d-n*h*d)*D,t[2]=(o*m*s-g*a*s+g*i*c-n*m*c-o*i*d+n*a*d)*D,t[3]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*p-n*a*p)*D,t[4]=y*D,t[5]=(u*m*s-_*h*s+_*i*p-e*m*p-u*i*d+e*h*d)*D,t[6]=(_*a*s-r*m*s-_*i*c+e*m*c+r*i*d-e*a*d)*D,t[7]=(r*h*s-u*a*s+u*i*c-e*h*c-r*i*p+e*a*p)*D,t[8]=x*D,t[9]=(_*f*s-u*g*s-_*n*p+e*g*p+u*n*d-e*f*d)*D,t[10]=(r*g*s-_*o*s+_*n*c-e*g*c-r*n*d+e*o*d)*D,t[11]=(u*o*s-r*f*s-u*n*c+e*f*c+r*n*p-e*o*p)*D,t[12]=M*D,t[13]=(u*g*i-_*f*i+_*n*h-e*g*h-u*n*m+e*f*m)*D,t[14]=(_*o*i-r*g*i-_*n*a+e*g*a+r*n*m-e*o*m)*D,t[15]=(r*f*i-u*o*i+u*n*a-e*f*a-r*n*h+e*o*h)*D,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,r=t.x,o=t.y,a=t.z,c=s*r,u=s*o;return this.set(c*r+n,c*o-i*a,c*a+i*o,0,c*o+i*a,u*o+n,u*a-i*r,0,c*a-i*o,u*a+i*r,s*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,r){return this.set(1,n,s,0,t,1,r,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,r=e._y,o=e._z,a=e._w,c=s+s,u=r+r,f=o+o,h=s*c,p=s*u,_=s*f,g=r*u,m=r*f,d=o*f,v=a*c,y=a*u,x=a*f,M=n.x,E=n.y,D=n.z;return i[0]=(1-(g+d))*M,i[1]=(p+x)*M,i[2]=(_-y)*M,i[3]=0,i[4]=(p-x)*E,i[5]=(1-(h+d))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(_+y)*D,i[9]=(m-v)*D,i[10]=(1-(h+g))*D,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ms.set(i[0],i[1],i[2]).length();const r=Ms.set(i[4],i[5],i[6]).length(),o=Ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Mn.copy(this);const c=1/s,u=1/r,f=1/o;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=s,n.y=r,n.z=o,this}makePerspective(t,e,n,i,s,r){const o=this.elements,a=2*s/(e-t),c=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(r+s)/(r-s),p=-2*r*s/(r-s);return o[0]=a,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=p,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,i,s,r){const o=this.elements,a=1/(e-t),c=1/(n-i),u=1/(r-s),f=(e+t)*a,h=(n+i)*c,p=(r+s)*u;return o[0]=2*a,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-p,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ms=new B,Mn=new me,B_=new B(0,0,0),k_=new B(1,1,1),gi=new B,So=new B,Ke=new B,_h=new me,vh=new cs;class ya{constructor(t=0,e=0,n=0,i=ya.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],r=i[4],o=i[8],a=i[1],c=i[5],u=i[9],f=i[2],h=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(a,s));break;case"ZYX":this._y=Math.asin(-ze(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(a,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _h.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_h,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vh.setFromEuler(this),this.setFromQuaternion(vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ya.DEFAULT_ORDER="XYZ";class qc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let V_=0;const xh=new B,ws=new cs,$n=new me,bo=new B,_r=new B,G_=new B,H_=new cs,yh=new B(1,0,0),Mh=new B(0,1,0),wh=new B(0,0,1),W_={type:"added"},Sh={type:"removed"};class Le extends fs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:V_++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Le.DEFAULT_UP.clone();const t=new B,e=new ya,n=new cs,i=new B(1,1,1);function s(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new me},normalMatrix:{value:new zt}}),this.matrix=new me,this.matrixWorld=new me,this.matrixAutoUpdate=Le.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new qc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(Mh,t)}rotateZ(t){return this.rotateOnAxis(wh,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(Mh,t)}translateZ(t){return this.translateOnAxis(wh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($n.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?bo.copy(t):bo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),_r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$n.lookAt(_r,bo,this.up):$n.lookAt(bo,_r,this.up),this.quaternion.setFromRotationMatrix($n),i&&($n.extractRotation(i.matrixWorld),ws.setFromRotationMatrix($n),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(W_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sh)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(Sh)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),$n.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$n.multiply(t.parent.matrixWorld)),t.applyMatrix4($n),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectsByProperty(t,e);r.length>0&&(n=n.concat(r))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,t,G_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(_r,H_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const s=e[n];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,r=i.length;s<r;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(o,a){return o[a.uuid]===void 0&&(o[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const a=o.shapes;if(Array.isArray(a))for(let c=0,u=a.length;c<u;c++){const f=a[c];s(t.shapes,f)}else s(t.shapes,a)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let a=0,c=this.material.length;a<c;a++)o.push(s(t.materials,this.material[a]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const a=this.animations[o];i.animations.push(s(t.animations,a))}}if(e){const o=r(t.geometries),a=r(t.materials),c=r(t.textures),u=r(t.images),f=r(t.shapes),h=r(t.skeletons),p=r(t.animations),_=r(t.nodes);o.length>0&&(n.geometries=o),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=i,n;function r(o){const a=[];for(const c in o){const u=o[c];delete u.metadata,a.push(u)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Le.DEFAULT_UP=new B(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new B,Zn=new B,dl=new B,Kn=new B,Ss=new B,bs=new B,bh=new B,pl=new B,ml=new B,gl=new B;let Eo=!1;class En{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),wn.subVectors(t,e),i.cross(wn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){wn.subVectors(i,e),Zn.subVectors(n,e),dl.subVectors(t,e);const r=wn.dot(wn),o=wn.dot(Zn),a=wn.dot(dl),c=Zn.dot(Zn),u=Zn.dot(dl),f=r*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,p=(c*a-o*u)*h,_=(r*u-o*a)*h;return s.set(1-p-_,_,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Kn),Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getUV(t,e,n,i,s,r,o,a){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),this.getInterpolation(t,e,n,i,s,r,o,a)}static getInterpolation(t,e,n,i,s,r,o,a){return this.getBarycoord(t,e,n,i,Kn),a.setScalar(0),a.addScaledVector(s,Kn.x),a.addScaledVector(r,Kn.y),a.addScaledVector(o,Kn.z),a}static isFrontFacing(t,e,n,i){return wn.subVectors(n,e),Zn.subVectors(t,e),wn.cross(Zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),wn.cross(Zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return En.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return En.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return Eo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Eo=!0),En.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}getInterpolation(t,e,n,i,s){return En.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return En.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return En.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let r,o;Ss.subVectors(i,n),bs.subVectors(s,n),pl.subVectors(t,n);const a=Ss.dot(pl),c=bs.dot(pl);if(a<=0&&c<=0)return e.copy(n);ml.subVectors(t,i);const u=Ss.dot(ml),f=bs.dot(ml);if(u>=0&&f<=u)return e.copy(i);const h=a*f-u*c;if(h<=0&&a>=0&&u<=0)return r=a/(a-u),e.copy(n).addScaledVector(Ss,r);gl.subVectors(t,s);const p=Ss.dot(gl),_=bs.dot(gl);if(_>=0&&p<=_)return e.copy(s);const g=p*c-a*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(bs,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return bh.subVectors(s,i),o=(f-u)/(f-u+(p-_)),e.copy(i).addScaledVector(bh,o);const d=1/(m+g+h);return r=g*d,o=h*d,e.copy(n).addScaledVector(Ss,r).addScaledVector(bs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let q_=0,cr=class extends fs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:q_++}),this.uuid=to(),this.name="",this.type="Material",this.blending=qs,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Kd,this.blendDst=Jd,this.blendEquation=Is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ic,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=C_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=el,this.stencilZFail=el,this.stencilZPass=el,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const r=[];for(const o in s){const a=s[o];delete a.metadata,r.push(a)}return r}if(e){const s=i(t.textures),r=i(t.images);s.length>0&&(n.textures=s),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};const ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sn={h:0,s:0,l:0},Do={h:0,s:0,l:0};function _l(l,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?l+(t-l)*6*e:e<1/2?t:e<2/3?l+(t-l)*6*(2/3-e):l}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ze.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Ze.workingColorSpace){return this.r=t,this.g=e,this.b=n,Ze.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Ze.workingColorSpace){if(t=T_(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,r=2*n-s;this.r=_l(r,s,t+1/3),this.g=_l(r,s,t),this.b=_l(r,s,t-1/3)}return Ze.toWorkingColorSpace(this,i),this}setStyle(t,e=Un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const r=i[1],o=i[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ze.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ze.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const a=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(a,c,u,e)}break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],r=s.length;if(r===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Un){const n=ap[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=js(t.r),this.g=js(t.g),this.b=js(t.b),this}copyLinearToSRGB(t){return this.r=rl(t.r),this.g=rl(t.g),this.b=rl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return Ze.fromWorkingColorSpace(Ce.copy(this),t),ze(Ce.r*255,0,255)<<16^ze(Ce.g*255,0,255)<<8^ze(Ce.b*255,0,255)<<0}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Ze.workingColorSpace){Ze.fromWorkingColorSpace(Ce.copy(this),e);const n=Ce.r,i=Ce.g,s=Ce.b,r=Math.max(n,i,s),o=Math.min(n,i,s);let a,c;const u=(o+r)/2;if(o===r)a=0,c=0;else{const f=r-o;switch(c=u<=.5?f/(r+o):f/(2-r-o),r){case n:a=(i-s)/f+(i<s?6:0);break;case i:a=(s-n)/f+2;break;case s:a=(n-i)/f+4;break}a/=6}return t.h=a,t.s=c,t.l=u,t}getRGB(t,e=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(Ce.copy(this),e),t.r=Ce.r,t.g=Ce.g,t.b=Ce.b,t}getStyle(t=Un){Ze.fromWorkingColorSpace(Ce.copy(this),t);const e=Ce.r,n=Ce.g,i=Ce.b;return t!==Un?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${e*255|0},${n*255|0},${i*255|0})`}offsetHSL(t,e,n){return this.getHSL(Sn),Sn.h+=t,Sn.s+=e,Sn.l+=n,this.setHSL(Sn.h,Sn.s,Sn.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Sn),t.getHSL(Do);const n=il(Sn.h,Do.h,e),i=il(Sn.s,Do.s,e),s=il(Sn.l,Do.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ce=new Xt;Xt.NAMES=ap;class Xc extends cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new B,Co=new Pt;class Gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dh,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Co.fromBufferAttribute(this,e),Co.applyMatrix3(t),this.setXY(e,Co.x,Co.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vo(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vo(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vo(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vo(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dh&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class lp extends Gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class cp extends Gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class sn extends Gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let X_=0;const ln=new me,vl=new Le,Es=new B,Je=new eo,vr=new eo,we=new B;class hi extends fs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X_++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(np(t)?cp:lp)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return vl.lookAt(t),vl.updateMatrix(),this.applyMatrix4(vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new sn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wc);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,r=e.length;s<r;s++){const o=e[s];vr.setFromBufferAttribute(o),this.morphTargetsRelative?(we.addVectors(Je.min,vr.min),Je.expandByPoint(we),we.addVectors(Je.max,vr.max),Je.expandByPoint(we)):(Je.expandByPoint(vr.min),Je.expandByPoint(vr.max))}Je.getCenter(n);let i=0;for(let s=0,r=t.count;s<r;s++)we.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(we));if(e)for(let s=0,r=e.length;s<r;s++){const o=e[s],a=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)we.fromBufferAttribute(o,c),a&&(Es.fromBufferAttribute(t,c),we.add(Es)),i=Math.max(i,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,r=e.uv.array,o=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*o),4));const a=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<o;b++)c[b]=new B,u[b]=new B;const f=new B,h=new B,p=new B,_=new Pt,g=new Pt,m=new Pt,d=new B,v=new B;function y(b,N,O){f.fromArray(i,b*3),h.fromArray(i,N*3),p.fromArray(i,O*3),_.fromArray(r,b*2),g.fromArray(r,N*2),m.fromArray(r,O*2),h.sub(f),p.sub(f),g.sub(_),m.sub(_);const A=1/(g.x*m.y-m.x*g.y);isFinite(A)&&(d.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(A),v.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(A),c[b].add(d),c[N].add(d),c[O].add(d),u[b].add(v),u[N].add(v),u[O].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:n.length}]);for(let b=0,N=x.length;b<N;++b){const O=x[b],A=O.start,R=O.count;for(let L=A,I=A+R;L<I;L+=3)y(n[L+0],n[L+1],n[L+2])}const M=new B,E=new B,D=new B,T=new B;function w(b){D.fromArray(s,b*3),T.copy(D);const N=c[b];M.copy(N),M.sub(D.multiplyScalar(D.dot(N))).normalize(),E.crossVectors(T,N);const A=E.dot(u[b])<0?-1:1;a[b*4]=M.x,a[b*4+1]=M.y,a[b*4+2]=M.z,a[b*4+3]=A}for(let b=0,N=x.length;b<N;++b){const O=x[b],A=O.start,R=O.count;for(let L=A,I=A+R;L<I;L+=3)w(n[L+0]),w(n[L+1]),w(n[L+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const i=new B,s=new B,r=new B,o=new B,a=new B,c=new B,u=new B,f=new B;if(t)for(let h=0,p=t.count;h<p;h+=3){const _=t.getX(h+0),g=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),u.subVectors(r,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),a.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=e.count;h<p;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),r.fromBufferAttribute(e,h+2),u.subVectors(r,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(o,a){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(a.length*u);let p=0,_=0;for(let g=0,m=a.length;g<m;g++){o.isInterleavedBufferAttribute?p=a[g]*o.data.stride+o.offset:p=a[g]*u;for(let d=0;d<u;d++)h[_++]=c[p++]}return new Gn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new hi,n=this.index.array,i=this.attributes;for(const o in i){const a=i[o],c=t(a,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const a=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=t(h,n);a.push(p)}e.morphAttributes[o]=a}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,a=r.length;o<a;o++){const c=r[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a];t.data.attributes[a]=c.toJSON(t.data)}const i={};let s=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(t.data))}u.length>0&&(i[a]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let c=0,u=r.length;c<u;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Eh=new me,Rn=new op,To=new Wc,Dh=new B,Ds=new B,Cs=new B,Ts=new B,xl=new B,Ao=new B,Po=new Pt,Lo=new Pt,Ro=new Pt,Ch=new B,Th=new B,Ah=new B,Fo=new B,Io=new B;class ve extends Le{constructor(t=new hi,e=new Xc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=i.length;s<r;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){Ao.set(0,0,0);for(let a=0,c=s.length;a<c;a++){const u=o[a],f=s[a];u!==0&&(xl.fromBufferAttribute(f,t),r?Ao.addScaledVector(xl,u):Ao.addScaledVector(xl.sub(e),u))}e.add(Ao)}return this.isSkinnedMesh&&this.applyBoneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),Rn.copy(t.ray).recast(t.near),To.containsPoint(Rn.origin)===!1&&(Rn.intersectSphere(To,Dh)===null||Rn.origin.distanceToSquared(Dh)>(t.far-t.near)**2))||(Eh.copy(s).invert(),Rn.copy(t.ray).applyMatrix4(Eh),n.boundingBox!==null&&Rn.intersectsBox(n.boundingBox)===!1))return;let r;const o=n.index,a=n.attributes.position,c=n.attributes.uv,u=n.attributes.uv2,f=n.attributes.normal,h=n.groups,p=n.drawRange;if(o!==null)if(Array.isArray(i))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=i[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=y;x<M;x+=3){const E=o.getX(x),D=o.getX(x+1),T=o.getX(x+2);r=No(this,d,t,Rn,c,u,f,E,D,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(o.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=o.getX(m),y=o.getX(m+1),x=o.getX(m+2);r=No(this,i,t,Rn,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(a!==void 0)if(Array.isArray(i))for(let _=0,g=h.length;_<g;_++){const m=h[_],d=i[m.materialIndex],v=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,M=y;x<M;x+=3){const E=x,D=x+1,T=x+2;r=No(this,d,t,Rn,c,u,f,E,D,T),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const _=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=_,d=g;m<d;m+=3){const v=m,y=m+1,x=m+2;r=No(this,i,t,Rn,c,u,f,v,y,x),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function j_(l,t,e,n,i,s,r,o){let a;if(t.side===qe?a=n.intersectTriangle(r,s,i,!0,o):a=n.intersectTriangle(i,s,r,t.side===Ti,o),a===null)return null;Io.copy(o),Io.applyMatrix4(l.matrixWorld);const c=e.ray.origin.distanceTo(Io);return c<e.near||c>e.far?null:{distance:c,point:Io.clone(),object:l}}function No(l,t,e,n,i,s,r,o,a,c){l.getVertexPosition(o,Ds),l.getVertexPosition(a,Cs),l.getVertexPosition(c,Ts);const u=j_(l,t,e,n,Ds,Cs,Ts,Fo);if(u){i&&(Po.fromBufferAttribute(i,o),Lo.fromBufferAttribute(i,a),Ro.fromBufferAttribute(i,c),u.uv=En.getInterpolation(Fo,Ds,Cs,Ts,Po,Lo,Ro,new Pt)),s&&(Po.fromBufferAttribute(s,o),Lo.fromBufferAttribute(s,a),Ro.fromBufferAttribute(s,c),u.uv2=En.getInterpolation(Fo,Ds,Cs,Ts,Po,Lo,Ro,new Pt)),r&&(Ch.fromBufferAttribute(r,o),Th.fromBufferAttribute(r,a),Ah.fromBufferAttribute(r,c),u.normal=En.getInterpolation(Fo,Ds,Cs,Ts,Ch,Th,Ah,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:a,c,normal:new B,materialIndex:0};En.getNormal(Ds,Cs,Ts,f.normal),u.face=f}return u}class qn extends hi{constructor(t=1,e=1,n=1,i=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:r};const o=this;i=Math.floor(i),s=Math.floor(s),r=Math.floor(r);const a=[],c=[],u=[],f=[];let h=0,p=0;_("z","y","x",-1,-1,n,e,t,r,s,0),_("z","y","x",1,-1,n,e,-t,r,s,1),_("x","z","y",1,1,t,n,e,i,r,2),_("x","z","y",1,-1,t,n,-e,i,r,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(a),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(u,3)),this.setAttribute("uv",new sn(f,2));function _(g,m,d,v,y,x,M,E,D,T,w){const b=x/D,N=M/T,O=x/2,A=M/2,R=E/2,L=D+1,I=T+1;let q=0,k=0;const Y=new B;for(let Q=0;Q<I;Q++){const ct=Q*N-A;for(let G=0;G<L;G++){const X=G*b-O;Y[g]=X*v,Y[m]=ct*y,Y[d]=R,c.push(Y.x,Y.y,Y.z),Y[g]=0,Y[m]=0,Y[d]=E>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(G/D),f.push(1-Q/T),q+=1}}for(let Q=0;Q<T;Q++)for(let ct=0;ct<D;ct++){const G=h+ct+L*Q,X=h+ct+L*(Q+1),$=h+(ct+1)+L*(Q+1),nt=h+(ct+1)+L*Q;a.push(G,X,nt),a.push(X,$,nt),k+=6}o.addGroup(p,k,w),p+=k,h+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ar(l){const t={};for(const e in l){t[e]={};for(const n in l[e]){const i=l[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ue(l){const t={};for(let e=0;e<l.length;e++){const n=ar(l[e]);for(const i in n)t[i]=n[i]}return t}function Y_(l){const t=[];for(let e=0;e<l.length;e++)t.push(l[e].clone());return t}function up(l){return l.getRenderTarget()===null&&l.outputEncoding===te?Un:qr}const $_={clone:ar,merge:Ue};var Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class us extends cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=K_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ar(t.uniforms),this.uniformsGroups=Y_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const r=this.uniforms[i].value;r&&r.isTexture?e.uniforms[i]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[i]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[i]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[i]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[i]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[i]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[i]={type:"m4",value:r.toArray()}:e.uniforms[i]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hp extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new me,this.projectionMatrix=new me,this.projectionMatrixInverse=new me}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class tn extends hp{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=cc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(nl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return cc*2*Math.atan(Math.tan(nl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(nl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,c=r.fullHeight;s+=r.offsetX*i/a,e-=r.offsetY*n/c,i*=r.width/a,n*=r.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Ps=1;class J_ extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new tn(As,Ps,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new tn(As,Ps,t,e);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new tn(As,Ps,t,e);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const o=new tn(As,Ps,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const a=new tn(As,Ps,t,e);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(0,0,1),this.add(a);const c=new tn(As,Ps,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,r,o,a,c]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=ai,t.xr.enabled=!1;const p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,r),t.setRenderTarget(n,3),t.render(e,o),t.setRenderTarget(n,4),t.render(e,a),n.texture.generateMipmaps=p,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class fp extends Xe{constructor(t,e,n,i,s,r,o,a,c,u){t=t!==void 0?t:[],e=e!==void 0?e:sr,super(t,e,n,i,s,r,o,a,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Q_ extends ls{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fp(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new qn(5,5,5),s=new us({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qe,blending:bi});s.uniforms.tEquirect.value=e;const r=new ve(i,s),o=e.minFilter;return e.minFilter===Hr&&(e.minFilter=pn),new J_(1,10,this).update(t,r),e.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,i);t.setRenderTarget(s)}}const yl=new B,t0=new B,e0=new zt;class Wi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=yl.subVectors(n,e).cross(t0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||e0.getNormalMatrix(t),i=this.coplanarPoint(yl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vi=new Wc,Uo=new B;class jc{constructor(t=new Wi,e=new Wi,n=new Wi,i=new Wi,s=new Wi,r=new Wi){this.planes=[t,e,n,i,s,r]}set(t,e,n,i,s,r){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],u=n[6],f=n[7],h=n[8],p=n[9],_=n[10],g=n[11],m=n[12],d=n[13],v=n[14],y=n[15];return e[0].setComponents(o-i,f-a,g-h,y-m).normalize(),e[1].setComponents(o+i,f+a,g+h,y+m).normalize(),e[2].setComponents(o+s,f+c,g+p,y+d).normalize(),e[3].setComponents(o-s,f-c,g-p,y-d).normalize(),e[4].setComponents(o-r,f-u,g-_,y-v).normalize(),e[5].setComponents(o+r,f+u,g+_,y+v).normalize(),this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vi)}intersectsSprite(t){return Vi.center.set(0,0,0),Vi.radius=.7071067811865476,Vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Uo.x=i.normal.x>0?t.max.x:t.min.x,Uo.y=i.normal.y>0?t.max.y:t.min.y,Uo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function dp(){let l=null,t=!1,e=null,n=null;function i(s,r){e(s,r),n=l.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=l.requestAnimationFrame(i),t=!0)},stop:function(){l.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){l=s}}}function n0(l,t){const e=t.isWebGL2,n=new WeakMap;function i(c,u){const f=c.array,h=c.usage,p=l.createBuffer();l.bindBuffer(u,p),l.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,p=u.updateRange;l.bindBuffer(f,c),p.count===-1?l.bufferSubData(f,0,h):(e?l.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):l.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(l.deleteBuffer(u.buffer),n.delete(c))}function a(c,u){if(c.isGLBufferAttribute){const h=n.get(c);(!h||h.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=n.get(c);f===void 0?n.set(c,i(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:r,remove:o,update:a}}class Ma extends hi{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,r=e/2,o=Math.floor(n),a=Math.floor(i),c=o+1,u=a+1,f=t/o,h=e/a,p=[],_=[],g=[],m=[];for(let d=0;d<u;d++){const v=d*h-r;for(let y=0;y<c;y++){const x=y*f-s;_.push(x,-v,0),g.push(0,0,1),m.push(y/o),m.push(1-d/a)}}for(let d=0;d<a;d++)for(let v=0;v<o;v++){const y=v+c*d,x=v+c*(d+1),M=v+1+c*(d+1),E=v+1+c*d;p.push(y,x,E),p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ma(t.width,t.height,t.widthSegments,t.heightSegments)}}var i0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,s0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,o0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,a0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,l0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,c0="vec3 transformed = vec3( position );",u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,h0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,f0=`#ifdef USE_IRIDESCENCE
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
#endif`,d0=`#ifdef USE_BUMPMAP
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
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,v0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,x0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,y0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,M0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,w0=`#define PI 3.141592653589793
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
} // validated`,S0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,b0=`vec3 transformedNormal = objectNormal;
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
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,T0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,A0="gl_FragColor = linearToOutputTexel( gl_FragColor );",P0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,F0=`#ifdef USE_ENVMAP
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
#endif`,I0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,B0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,k0=`#ifdef USE_GRADIENTMAP
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
}`,V0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,G0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,H0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q0=`uniform bool receiveShadow;
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
#endif`,X0=`#if defined( USE_ENVMAP )
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
#endif`,j0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
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
#endif`,J0=`struct PhysicalMaterial {
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
}`,Q0=`
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
#endif`,tv=`#if defined( RE_IndirectDiffuse )
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
#endif`,ev=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,nv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,rv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,ov=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,av=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cv=`#if defined( USE_POINTS_UV )
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
#endif`,uv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dv=`#ifdef USE_MORPHNORMALS
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
#endif`,pv=`#ifdef USE_MORPHTARGETS
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
#endif`,mv=`#ifdef USE_MORPHTARGETS
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
#endif`,gv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,_v=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Mv=`#ifdef USE_NORMALMAP
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
#endif`,wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Sv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ev=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Av=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Uv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ov=`float getShadowMask() {
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
}`,zv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bv=`#ifdef USE_SKINNING
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
#endif`,kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vv=`#ifdef USE_SKINNING
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
#endif`,Gv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xv=`#ifdef USE_TRANSMISSION
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
#endif`,jv=`#ifdef USE_TRANSMISSION
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
#endif`,Yv=`#ifdef USE_UV
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
#endif`,$v=`#ifdef USE_UV
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
#endif`,Zv=`#ifdef USE_UV
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
#endif`,Kv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qv=`uniform sampler2D t2D;
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ex=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sx=`#include <common>
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
}`,rx=`#if DEPTH_PACKING == 3200
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
}`,ox=`#define DISTANCE
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
}`,ax=`#define DISTANCE
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
}`,lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ux=`uniform float scale;
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
}`,hx=`uniform vec3 diffuse;
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
}`,fx=`#include <common>
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
}`,dx=`uniform vec3 diffuse;
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
}`,px=`#define LAMBERT
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
}`,mx=`#define LAMBERT
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
}`,gx=`#define MATCAP
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
}`,_x=`#define MATCAP
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
}`,vx=`#define NORMAL
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
}`,xx=`#define NORMAL
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
}`,yx=`#define PHONG
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
}`,Mx=`#define PHONG
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
}`,wx=`#define STANDARD
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
}`,Sx=`#define STANDARD
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
}`,bx=`#define TOON
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
}`,Ex=`#define TOON
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
}`,Dx=`uniform float size;
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
}`,Cx=`uniform vec3 diffuse;
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
}`,Tx=`#include <common>
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
}`,Ax=`uniform vec3 color;
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
}`,Px=`uniform float rotation;
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
}`,Lx=`uniform vec3 diffuse;
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
}`,Rt={alphamap_fragment:i0,alphamap_pars_fragment:s0,alphatest_fragment:r0,alphatest_pars_fragment:o0,aomap_fragment:a0,aomap_pars_fragment:l0,begin_vertex:c0,beginnormal_vertex:u0,bsdfs:h0,iridescence_fragment:f0,bumpmap_pars_fragment:d0,clipping_planes_fragment:p0,clipping_planes_pars_fragment:m0,clipping_planes_pars_vertex:g0,clipping_planes_vertex:_0,color_fragment:v0,color_pars_fragment:x0,color_pars_vertex:y0,color_vertex:M0,common:w0,cube_uv_reflection_fragment:S0,defaultnormal_vertex:b0,displacementmap_pars_vertex:E0,displacementmap_vertex:D0,emissivemap_fragment:C0,emissivemap_pars_fragment:T0,encodings_fragment:A0,encodings_pars_fragment:P0,envmap_fragment:L0,envmap_common_pars_fragment:R0,envmap_pars_fragment:F0,envmap_pars_vertex:I0,envmap_physical_pars_fragment:X0,envmap_vertex:N0,fog_vertex:U0,fog_pars_vertex:O0,fog_fragment:z0,fog_pars_fragment:B0,gradientmap_pars_fragment:k0,lightmap_fragment:V0,lightmap_pars_fragment:G0,lights_lambert_fragment:H0,lights_lambert_pars_fragment:W0,lights_pars_begin:q0,lights_toon_fragment:j0,lights_toon_pars_fragment:Y0,lights_phong_fragment:$0,lights_phong_pars_fragment:Z0,lights_physical_fragment:K0,lights_physical_pars_fragment:J0,lights_fragment_begin:Q0,lights_fragment_maps:tv,lights_fragment_end:ev,logdepthbuf_fragment:nv,logdepthbuf_pars_fragment:iv,logdepthbuf_pars_vertex:sv,logdepthbuf_vertex:rv,map_fragment:ov,map_pars_fragment:av,map_particle_fragment:lv,map_particle_pars_fragment:cv,metalnessmap_fragment:uv,metalnessmap_pars_fragment:hv,morphcolor_vertex:fv,morphnormal_vertex:dv,morphtarget_pars_vertex:pv,morphtarget_vertex:mv,normal_fragment_begin:gv,normal_fragment_maps:_v,normal_pars_fragment:vv,normal_pars_vertex:xv,normal_vertex:yv,normalmap_pars_fragment:Mv,clearcoat_normal_fragment_begin:wv,clearcoat_normal_fragment_maps:Sv,clearcoat_pars_fragment:bv,iridescence_pars_fragment:Ev,output_fragment:Dv,packing:Cv,premultiplied_alpha_fragment:Tv,project_vertex:Av,dithering_fragment:Pv,dithering_pars_fragment:Lv,roughnessmap_fragment:Rv,roughnessmap_pars_fragment:Fv,shadowmap_pars_fragment:Iv,shadowmap_pars_vertex:Nv,shadowmap_vertex:Uv,shadowmask_pars_fragment:Ov,skinbase_vertex:zv,skinning_pars_vertex:Bv,skinning_vertex:kv,skinnormal_vertex:Vv,specularmap_fragment:Gv,specularmap_pars_fragment:Hv,tonemapping_fragment:Wv,tonemapping_pars_fragment:qv,transmission_fragment:Xv,transmission_pars_fragment:jv,uv_pars_fragment:Yv,uv_pars_vertex:$v,uv_vertex:Zv,worldpos_vertex:Kv,background_vert:Jv,background_frag:Qv,backgroundCube_vert:tx,backgroundCube_frag:ex,cube_vert:nx,cube_frag:ix,depth_vert:sx,depth_frag:rx,distanceRGBA_vert:ox,distanceRGBA_frag:ax,equirect_vert:lx,equirect_frag:cx,linedashed_vert:ux,linedashed_frag:hx,meshbasic_vert:fx,meshbasic_frag:dx,meshlambert_vert:px,meshlambert_frag:mx,meshmatcap_vert:gx,meshmatcap_frag:_x,meshnormal_vert:vx,meshnormal_frag:xx,meshphong_vert:yx,meshphong_frag:Mx,meshphysical_vert:wx,meshphysical_frag:Sx,meshtoon_vert:bx,meshtoon_frag:Ex,points_vert:Dx,points_frag:Cx,shadow_vert:Tx,shadow_frag:Ax,sprite_vert:Px,sprite_frag:Lx},lt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaTest:{value:0}}},On={basic:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Rt.meshbasic_vert,fragmentShader:Rt.meshbasic_frag},lambert:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Rt.meshlambert_vert,fragmentShader:Rt.meshlambert_frag},phong:{uniforms:Ue([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:Rt.meshphong_vert,fragmentShader:Rt.meshphong_frag},standard:{uniforms:Ue([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag},toon:{uniforms:Ue([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Rt.meshtoon_vert,fragmentShader:Rt.meshtoon_frag},matcap:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Rt.meshmatcap_vert,fragmentShader:Rt.meshmatcap_frag},points:{uniforms:Ue([lt.points,lt.fog]),vertexShader:Rt.points_vert,fragmentShader:Rt.points_frag},dashed:{uniforms:Ue([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Rt.linedashed_vert,fragmentShader:Rt.linedashed_frag},depth:{uniforms:Ue([lt.common,lt.displacementmap]),vertexShader:Rt.depth_vert,fragmentShader:Rt.depth_frag},normal:{uniforms:Ue([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Rt.meshnormal_vert,fragmentShader:Rt.meshnormal_frag},sprite:{uniforms:Ue([lt.sprite,lt.fog]),vertexShader:Rt.sprite_vert,fragmentShader:Rt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Rt.background_vert,fragmentShader:Rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Rt.backgroundCube_vert,fragmentShader:Rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Rt.cube_vert,fragmentShader:Rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Rt.equirect_vert,fragmentShader:Rt.equirect_frag},distanceRGBA:{uniforms:Ue([lt.common,lt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Rt.distanceRGBA_vert,fragmentShader:Rt.distanceRGBA_frag},shadow:{uniforms:Ue([lt.lights,lt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Rt.shadow_vert,fragmentShader:Rt.shadow_frag}};On.physical={uniforms:Ue([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt}}]),vertexShader:Rt.meshphysical_vert,fragmentShader:Rt.meshphysical_frag};const Oo={r:0,b:0,g:0};function Rx(l,t,e,n,i,s,r){const o=new Xt(0);let a=s===!0?0:1,c,u,f=null,h=0,p=null;function _(m,d){let v=!1,y=d.isScene===!0?d.background:null;y&&y.isTexture&&(y=(d.backgroundBlurriness>0?e:t).get(y));const x=l.xr,M=x.getSession&&x.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),v=!0),(l.autoClear||v)&&l.clear(l.autoClearColor,l.autoClearDepth,l.autoClearStencil),y&&(y.isCubeTexture||y.mapping===xa)?(u===void 0&&(u=new ve(new qn(1,1,1),new us({name:"BackgroundCubeMaterial",uniforms:ar(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:qe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,D,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=y.encoding!==te,(f!==y||h!==y.version||p!==l.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=l.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ve(new Ma(2,2),new us({name:"BackgroundMaterial",uniforms:ar(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=y.encoding!==te,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==l.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=l.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function g(m,d){m.getRGB(Oo,up(l)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,d,r)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),a=d,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:_}}function Fx(l,t,e,n){const i=l.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),r=n.isWebGL2||s!==null,o={},a=m(null);let c=a,u=!1;function f(R,L,I,q,k){let Y=!1;if(r){const Q=g(q,I,L);c!==Q&&(c=Q,p(c.object)),Y=d(R,q,I,k),Y&&v(R,q,I,k)}else{const Q=L.wireframe===!0;(c.geometry!==q.id||c.program!==I.id||c.wireframe!==Q)&&(c.geometry=q.id,c.program=I.id,c.wireframe=Q,Y=!0)}k!==null&&e.update(k,34963),(Y||u)&&(u=!1,T(R,L,I,q),k!==null&&l.bindBuffer(34963,e.get(k).buffer))}function h(){return n.isWebGL2?l.createVertexArray():s.createVertexArrayOES()}function p(R){return n.isWebGL2?l.bindVertexArray(R):s.bindVertexArrayOES(R)}function _(R){return n.isWebGL2?l.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function g(R,L,I){const q=I.wireframe===!0;let k=o[R.id];k===void 0&&(k={},o[R.id]=k);let Y=k[L.id];Y===void 0&&(Y={},k[L.id]=Y);let Q=Y[q];return Q===void 0&&(Q=m(h()),Y[q]=Q),Q}function m(R){const L=[],I=[],q=[];for(let k=0;k<i;k++)L[k]=0,I[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:q,object:R,attributes:{},index:null}}function d(R,L,I,q){const k=c.attributes,Y=L.attributes;let Q=0;const ct=I.getAttributes();for(const G in ct)if(ct[G].location>=0){const $=k[G];let nt=Y[G];if(nt===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&(nt=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&(nt=R.instanceColor)),$===void 0||$.attribute!==nt||nt&&$.data!==nt.data)return!0;Q++}return c.attributesNum!==Q||c.index!==q}function v(R,L,I,q){const k={},Y=L.attributes;let Q=0;const ct=I.getAttributes();for(const G in ct)if(ct[G].location>=0){let $=Y[G];$===void 0&&(G==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),G==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const nt={};nt.attribute=$,$&&$.data&&(nt.data=$.data),k[G]=nt,Q++}c.attributes=k,c.attributesNum=Q,c.index=q}function y(){const R=c.newAttributes;for(let L=0,I=R.length;L<I;L++)R[L]=0}function x(R){M(R,0)}function M(R,L){const I=c.newAttributes,q=c.enabledAttributes,k=c.attributeDivisors;I[R]=1,q[R]===0&&(l.enableVertexAttribArray(R),q[R]=1),k[R]!==L&&((n.isWebGL2?l:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,L),k[R]=L)}function E(){const R=c.newAttributes,L=c.enabledAttributes;for(let I=0,q=L.length;I<q;I++)L[I]!==R[I]&&(l.disableVertexAttribArray(I),L[I]=0)}function D(R,L,I,q,k,Y){n.isWebGL2===!0&&(I===5124||I===5125)?l.vertexAttribIPointer(R,L,I,k,Y):l.vertexAttribPointer(R,L,I,q,k,Y)}function T(R,L,I,q){if(n.isWebGL2===!1&&(R.isInstancedMesh||q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;y();const k=q.attributes,Y=I.getAttributes(),Q=L.defaultAttributeValues;for(const ct in Y){const G=Y[ct];if(G.location>=0){let X=k[ct];if(X===void 0&&(ct==="instanceMatrix"&&R.instanceMatrix&&(X=R.instanceMatrix),ct==="instanceColor"&&R.instanceColor&&(X=R.instanceColor)),X!==void 0){const $=X.normalized,nt=X.itemSize,it=e.get(X);if(it===void 0)continue;const W=it.buffer,wt=it.type,Et=it.bytesPerElement;if(X.isInterleavedBufferAttribute){const at=X.data,vt=at.stride,Ot=X.offset;if(at.isInstancedInterleavedBuffer){for(let ut=0;ut<G.locationSize;ut++)M(G.location+ut,at.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ut=0;ut<G.locationSize;ut++)x(G.location+ut);l.bindBuffer(34962,W);for(let ut=0;ut<G.locationSize;ut++)D(G.location+ut,nt/G.locationSize,wt,$,vt*Et,(Ot+nt/G.locationSize*ut)*Et)}else{if(X.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)M(G.location+at,X.meshPerAttribute);R.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let at=0;at<G.locationSize;at++)x(G.location+at);l.bindBuffer(34962,W);for(let at=0;at<G.locationSize;at++)D(G.location+at,nt/G.locationSize,wt,$,nt*Et,nt/G.locationSize*at*Et)}}else if(Q!==void 0){const $=Q[ct];if($!==void 0)switch($.length){case 2:l.vertexAttrib2fv(G.location,$);break;case 3:l.vertexAttrib3fv(G.location,$);break;case 4:l.vertexAttrib4fv(G.location,$);break;default:l.vertexAttrib1fv(G.location,$)}}}}E()}function w(){O();for(const R in o){const L=o[R];for(const I in L){const q=L[I];for(const k in q)_(q[k].object),delete q[k];delete L[I]}delete o[R]}}function b(R){if(o[R.id]===void 0)return;const L=o[R.id];for(const I in L){const q=L[I];for(const k in q)_(q[k].object),delete q[k];delete L[I]}delete o[R.id]}function N(R){for(const L in o){const I=o[L];if(I[R.id]===void 0)continue;const q=I[R.id];for(const k in q)_(q[k].object),delete q[k];delete I[R.id]}}function O(){A(),u=!0,c!==a&&(c=a,p(c.object))}function A(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:O,resetDefaultState:A,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfProgram:N,initAttributes:y,enableAttribute:x,disableUnusedAttributes:E}}function Ix(l,t,e,n){const i=n.isWebGL2;let s;function r(c){s=c}function o(c,u){l.drawArrays(s,c,u),e.update(u,s,1)}function a(c,u,f){if(f===0)return;let h,p;if(i)h=l,p="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,c,u,f),e.update(u,s,f)}this.setMode=r,this.render=o,this.renderInstances=a}function Nx(l,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const D=t.get("EXT_texture_filter_anisotropic");n=l.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(D){if(D==="highp"){if(l.getShaderPrecisionFormat(35633,36338).precision>0&&l.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";D="mediump"}return D==="mediump"&&l.getShaderPrecisionFormat(35633,36337).precision>0&&l.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&l.constructor.name==="WebGL2RenderingContext";let o=e.precision!==void 0?e.precision:"highp";const a=s(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const c=r||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=l.getParameter(34930),h=l.getParameter(35660),p=l.getParameter(3379),_=l.getParameter(34076),g=l.getParameter(34921),m=l.getParameter(36347),d=l.getParameter(36348),v=l.getParameter(36349),y=h>0,x=r||t.has("OES_texture_float"),M=y&&x,E=r?l.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:y,floatFragmentTextures:x,floatVertexTextures:M,maxSamples:E}}function Ux(l){const t=this;let e=null,n=0,i=!1,s=!1;const r=new Wi,o=new zt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||i;return i=h,n=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,p){const _=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,d=l.get(f);if(!i||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:n,y=v*4;let x=d.clippingState||null;a.value=x,x=u(_,h,y,p);for(let M=0;M!==y;++M)x[M]=e[M];d.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,p,_){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=a.value,_!==!0||m===null){const d=p+g*4,v=h.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,x=p;y!==g;++y,x+=4)r.copy(f[y]).applyMatrix4(v,o),r.normal.toArray(m,x),m[x+3]=r.constant}a.value=m,a.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Ox(l){let t=new WeakMap;function e(r,o){return o===sc?r.mapping=sr:o===rc&&(r.mapping=rr),r}function n(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const o=r.mapping;if(o===sc||o===rc)if(t.has(r)){const a=t.get(r).texture;return e(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const c=new Q_(a.height/2);return c.fromEquirectangularTexture(l,r),t.set(r,c),r.addEventListener("dispose",i),e(c.texture,r.mapping)}else return null}}return r}function i(r){const o=r.target;o.removeEventListener("dispose",i);const a=t.get(o);a!==void 0&&(t.delete(o),a.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class zx extends hp{constructor(t=-1,e=1,n=1,i=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,r=n+t,o=i+e,a=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,o-=u*this.view.offsetY,a=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,r,o,a,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bs=4,Ph=[.125,.215,.35,.446,.526,.582],Xi=20,Ml=new zx,Lh=new Xt;let wl=null;const qi=(1+Math.sqrt(5))/2,Ls=1/qi,Rh=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,qi,Ls),new B(0,qi,-Ls),new B(Ls,0,qi),new B(-Ls,0,qi),new B(qi,Ls,0),new B(-qi,Ls,0)];class Fh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wl),t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===sr||t.mapping===rr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wl=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Wr,format:Cn,encoding:as,depthBuffer:!1},i=Ih(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bx(s)),this._blurMaterial=kx(s,t,e)}return i}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Ml)}_sceneToCubeUV(t,e,n,i){const o=new tn(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Lh),u.toneMapping=ai,u.autoClear=!1;const p=new Xc({name:"PMREM.Background",side:qe,depthWrite:!1,depthTest:!1}),_=new ve(new qn,p);let g=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,g=!0):(p.color.copy(Lh),g=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,a[d],0),o.lookAt(c[d],0,0)):v===1?(o.up.set(0,0,a[d]),o.lookAt(0,c[d],0)):(o.up.set(0,a[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;zo(i,v*y,d>2?y:0,y,y),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===sr||t.mapping===rr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());const s=i?this._cubemapMaterial:this._equirectMaterial,r=new ve(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const a=this._cubeSize;zo(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(r,Ml)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),r=Rh[(i-1)%Rh.length];this._blur(t,i-1,i,s,r)}e.autoClear=n}_blur(t,e,n,i,s){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,i,"latitudinal",s),this._halfBlur(r,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,r,o){const a=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ve(this._lodPlanes[i],c),h=c.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xi-1),g=s/_,m=isFinite(s)?1+Math.floor(u*g):Xi;m>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Xi}`);const d=[];let v=0;for(let D=0;D<Xi;++D){const T=D/g,w=Math.exp(-T*T/2);d.push(w),D===0?v+=w:D<m&&(v+=2*w)}for(let D=0;D<d.length;D++)d[D]=d[D]/v;h.envMap.value=t.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:y}=this;h.dTheta.value=_,h.mipInt.value=y-n;const x=this._sizeLods[i],M=3*x*(i>y-Bs?i-y+Bs:0),E=4*(this._cubeSize-x);zo(e,M,E,3*x,2*x),a.setRenderTarget(e),a.render(f,Ml)}}function Bx(l){const t=[],e=[],n=[];let i=l;const s=l-Bs+1+Ph.length;for(let r=0;r<s;r++){const o=Math.pow(2,i);e.push(o);let a=1/o;r>l-Bs?a=Ph[r-l+Bs-1]:r===0&&(a=0),n.push(a);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,g=3,m=2,d=1,v=new Float32Array(g*_*p),y=new Float32Array(m*_*p),x=new Float32Array(d*_*p);for(let E=0;E<p;E++){const D=E%3*2/3-1,T=E>2?0:-1,w=[D,T,0,D+2/3,T,0,D+2/3,T+1,0,D,T,0,D+2/3,T+1,0,D,T+1,0];v.set(w,g*_*E),y.set(h,m*_*E);const b=[E,E,E,E,E,E];x.set(b,d*_*E)}const M=new hi;M.setAttribute("position",new Gn(v,g)),M.setAttribute("uv",new Gn(y,m)),M.setAttribute("faceIndex",new Gn(x,d)),t.push(M),i>Bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ih(l,t,e){const n=new ls(l,t,e);return n.texture.mapping=xa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(l,t,e,n,i){l.viewport.set(t,e,n,i),l.scissor.set(t,e,n,i)}function kx(l,t,e){const n=new Float32Array(Xi),i=new B(0,1,0);return new us({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${l}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Nh(){return new us({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yc(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Uh(){return new us({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Yc(){return`

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
	`}function Vx(l){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const a=o.mapping,c=a===sc||a===rc,u=a===sr||a===rr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=t.get(o);return e===null&&(e=new Fh(l)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),t.set(o,f),f.texture}else{if(t.has(o))return t.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new Fh(l));const h=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function i(o){let a=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&a++;return a===c}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function Gx(l){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=l.getExtension("WEBGL_depth_texture")||l.getExtension("MOZ_WEBGL_depth_texture")||l.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=l.getExtension("EXT_texture_filter_anisotropic")||l.getExtension("MOZ_EXT_texture_filter_anisotropic")||l.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=l.getExtension("WEBGL_compressed_texture_s3tc")||l.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=l.getExtension("WEBGL_compressed_texture_pvrtc")||l.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=l.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Hx(l,t,e,n){const i={},s=new WeakMap;function r(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);h.removeEventListener("dispose",r),delete i[h.id];const p=s.get(h);p&&(t.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",r),i[h.id]=!0,e.memory.geometries++),h}function a(f){const h=f.attributes;for(const _ in h)t.update(h[_],34962);const p=f.morphAttributes;for(const _ in p){const g=p[_];for(let m=0,d=g.length;m<d;m++)t.update(g[m],34962)}}function c(f){const h=[],p=f.index,_=f.attributes.position;let g=0;if(p!==null){const v=p.array;g=p.version;for(let y=0,x=v.length;y<x;y+=3){const M=v[y+0],E=v[y+1],D=v[y+2];h.push(M,E,E,D,D,M)}}else{const v=_.array;g=_.version;for(let y=0,x=v.length/3-1;y<x;y+=3){const M=y+0,E=y+1,D=y+2;h.push(M,E,E,D,D,M)}}const m=new(np(h)?cp:lp)(h,1);m.version=g;const d=s.get(f);d&&t.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:a,getWireframeAttribute:u}}function Wx(l,t,e,n){const i=n.isWebGL2;let s;function r(h){s=h}let o,a;function c(h){o=h.type,a=h.bytesPerElement}function u(h,p){l.drawElements(s,p,o,h*a),e.update(p,s,1)}function f(h,p,_){if(_===0)return;let g,m;if(i)g=l,m="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,o,h*a,_),e.update(p,s,_)}this.setMode=r,this.setIndex=c,this.render=u,this.renderInstances=f}function qx(l){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,r,o){switch(e.calls++,r){case 4:e.triangles+=o*(s/3);break;case 1:e.lines+=o*(s/2);break;case 3:e.lines+=o*(s-1);break;case 2:e.lines+=o*s;break;case 0:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Xx(l,t){return l[0]-t[0]}function jx(l,t){return Math.abs(t[1])-Math.abs(l[1])}function Yx(l,t,e){const n={},i=new Float32Array(8),s=new WeakMap,r=new ne,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function a(c,u,f){const h=c.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==g){let L=function(){A.dispose(),s.delete(u),u.removeEventListener("dispose",L)};var p=L;m!==void 0&&m.texture.dispose();const y=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],D=u.morphAttributes.normal||[],T=u.morphAttributes.color||[];let w=0;y===!0&&(w=1),x===!0&&(w=2),M===!0&&(w=3);let b=u.attributes.position.count*w,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const O=new Float32Array(b*N*4*g),A=new rp(O,b,N,g);A.type=Zi,A.needsUpdate=!0;const R=w*4;for(let I=0;I<g;I++){const q=E[I],k=D[I],Y=T[I],Q=b*N*4*I;for(let ct=0;ct<q.count;ct++){const G=ct*R;y===!0&&(r.fromBufferAttribute(q,ct),O[Q+G+0]=r.x,O[Q+G+1]=r.y,O[Q+G+2]=r.z,O[Q+G+3]=0),x===!0&&(r.fromBufferAttribute(k,ct),O[Q+G+4]=r.x,O[Q+G+5]=r.y,O[Q+G+6]=r.z,O[Q+G+7]=0),M===!0&&(r.fromBufferAttribute(Y,ct),O[Q+G+8]=r.x,O[Q+G+9]=r.y,O[Q+G+10]=r.z,O[Q+G+11]=Y.itemSize===4?r.w:1)}}m={count:g,texture:A,size:new Pt(b,N)},s.set(u,m),u.addEventListener("dispose",L)}let d=0;for(let y=0;y<h.length;y++)d+=h[y];const v=u.morphTargetsRelative?1:1-d;f.getUniforms().setValue(l,"morphTargetBaseInfluence",v),f.getUniforms().setValue(l,"morphTargetInfluences",h),f.getUniforms().setValue(l,"morphTargetsTexture",m.texture,e),f.getUniforms().setValue(l,"morphTargetsTextureSize",m.size)}else{const _=h===void 0?0:h.length;let g=n[u.id];if(g===void 0||g.length!==_){g=[];for(let x=0;x<_;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<_;x++){const M=g[x];M[0]=x,M[1]=h[x]}g.sort(jx);for(let x=0;x<8;x++)x<_&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Xx);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const M=o[x],E=M[0],D=M[1];E!==Number.MAX_SAFE_INTEGER&&D?(m&&u.getAttribute("morphTarget"+x)!==m[E]&&u.setAttribute("morphTarget"+x,m[E]),d&&u.getAttribute("morphNormal"+x)!==d[E]&&u.setAttribute("morphNormal"+x,d[E]),i[x]=D,v+=D):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),d&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}const y=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(l,"morphTargetBaseInfluence",y),f.getUniforms().setValue(l,"morphTargetInfluences",i)}}return{update:a}}function $x(l,t,e,n){let i=new WeakMap;function s(a){const c=n.render.frame,u=a.geometry,f=t.get(a,u);return i.get(f)!==c&&(t.update(f),i.set(f,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",o)===!1&&a.addEventListener("dispose",o),e.update(a.instanceMatrix,34962),a.instanceColor!==null&&e.update(a.instanceColor,34962)),f}function r(){i=new WeakMap}function o(a){const c=a.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:r}}const pp=new Xe,mp=new rp,gp=new O_,_p=new fp,Oh=[],zh=[],Bh=new Float32Array(16),kh=new Float32Array(9),Vh=new Float32Array(4);function ur(l,t,e){const n=l[0];if(n<=0||n>0)return l;const i=t*e;let s=Oh[i];if(s===void 0&&(s=new Float32Array(i),Oh[i]=s),t!==0){n.toArray(s,0);for(let r=1,o=0;r!==t;++r)o+=e,l[r].toArray(s,o)}return s}function xe(l,t){if(l.length!==t.length)return!1;for(let e=0,n=l.length;e<n;e++)if(l[e]!==t[e])return!1;return!0}function ye(l,t){for(let e=0,n=t.length;e<n;e++)l[e]=t[e]}function wa(l,t){let e=zh[t];e===void 0&&(e=new Int32Array(t),zh[t]=e);for(let n=0;n!==t;++n)e[n]=l.allocateTextureUnit();return e}function Zx(l,t){const e=this.cache;e[0]!==t&&(l.uniform1f(this.addr,t),e[0]=t)}function Kx(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(l.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;l.uniform2fv(this.addr,t),ye(e,t)}}function Jx(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(l.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(l.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;l.uniform3fv(this.addr,t),ye(e,t)}}function Qx(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(l.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;l.uniform4fv(this.addr,t),ye(e,t)}}function ty(l,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;l.uniformMatrix2fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Vh.set(n),l.uniformMatrix2fv(this.addr,!1,Vh),ye(e,n)}}function ey(l,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;l.uniformMatrix3fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;kh.set(n),l.uniformMatrix3fv(this.addr,!1,kh),ye(e,n)}}function ny(l,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;l.uniformMatrix4fv(this.addr,!1,t),ye(e,t)}else{if(xe(e,n))return;Bh.set(n),l.uniformMatrix4fv(this.addr,!1,Bh),ye(e,n)}}function iy(l,t){const e=this.cache;e[0]!==t&&(l.uniform1i(this.addr,t),e[0]=t)}function sy(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(l.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;l.uniform2iv(this.addr,t),ye(e,t)}}function ry(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(l.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;l.uniform3iv(this.addr,t),ye(e,t)}}function oy(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(l.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;l.uniform4iv(this.addr,t),ye(e,t)}}function ay(l,t){const e=this.cache;e[0]!==t&&(l.uniform1ui(this.addr,t),e[0]=t)}function ly(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(l.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;l.uniform2uiv(this.addr,t),ye(e,t)}}function cy(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(l.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;l.uniform3uiv(this.addr,t),ye(e,t)}}function uy(l,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(l.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;l.uniform4uiv(this.addr,t),ye(e,t)}}function hy(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||pp,i)}function fy(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||gp,i)}function dy(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_p,i)}function py(l,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(l.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||mp,i)}function my(l){switch(l){case 5126:return Zx;case 35664:return Kx;case 35665:return Jx;case 35666:return Qx;case 35674:return ty;case 35675:return ey;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return sy;case 35668:case 35672:return ry;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return hy;case 35679:case 36299:case 36307:return fy;case 35680:case 36300:case 36308:case 36293:return dy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(l,t){l.uniform1fv(this.addr,t)}function _y(l,t){const e=ur(t,this.size,2);l.uniform2fv(this.addr,e)}function vy(l,t){const e=ur(t,this.size,3);l.uniform3fv(this.addr,e)}function xy(l,t){const e=ur(t,this.size,4);l.uniform4fv(this.addr,e)}function yy(l,t){const e=ur(t,this.size,4);l.uniformMatrix2fv(this.addr,!1,e)}function My(l,t){const e=ur(t,this.size,9);l.uniformMatrix3fv(this.addr,!1,e)}function wy(l,t){const e=ur(t,this.size,16);l.uniformMatrix4fv(this.addr,!1,e)}function Sy(l,t){l.uniform1iv(this.addr,t)}function by(l,t){l.uniform2iv(this.addr,t)}function Ey(l,t){l.uniform3iv(this.addr,t)}function Dy(l,t){l.uniform4iv(this.addr,t)}function Cy(l,t){l.uniform1uiv(this.addr,t)}function Ty(l,t){l.uniform2uiv(this.addr,t)}function Ay(l,t){l.uniform3uiv(this.addr,t)}function Py(l,t){l.uniform4uiv(this.addr,t)}function Ly(l,t,e){const n=this.cache,i=t.length,s=wa(e,i);xe(n,s)||(l.uniform1iv(this.addr,s),ye(n,s));for(let r=0;r!==i;++r)e.setTexture2D(t[r]||pp,s[r])}function Ry(l,t,e){const n=this.cache,i=t.length,s=wa(e,i);xe(n,s)||(l.uniform1iv(this.addr,s),ye(n,s));for(let r=0;r!==i;++r)e.setTexture3D(t[r]||gp,s[r])}function Fy(l,t,e){const n=this.cache,i=t.length,s=wa(e,i);xe(n,s)||(l.uniform1iv(this.addr,s),ye(n,s));for(let r=0;r!==i;++r)e.setTextureCube(t[r]||_p,s[r])}function Iy(l,t,e){const n=this.cache,i=t.length,s=wa(e,i);xe(n,s)||(l.uniform1iv(this.addr,s),ye(n,s));for(let r=0;r!==i;++r)e.setTexture2DArray(t[r]||mp,s[r])}function Ny(l){switch(l){case 5126:return gy;case 35664:return _y;case 35665:return vy;case 35666:return xy;case 35674:return yy;case 35675:return My;case 35676:return wy;case 5124:case 35670:return Sy;case 35667:case 35671:return by;case 35668:case 35672:return Ey;case 35669:case 35673:return Dy;case 5125:return Cy;case 36294:return Ty;case 36295:return Ay;case 36296:return Py;case 35678:case 36198:case 36298:case 36306:case 35682:return Ly;case 35679:case 36299:case 36307:return Ry;case 35680:case 36300:case 36308:case 36293:return Fy;case 36289:case 36303:case 36311:case 36292:return Iy}}class Uy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=my(e.type)}}class Oy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=Ny(e.type)}}class zy{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,r=i.length;s!==r;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function Gh(l,t){l.seq.push(t),l.map[t.id]=t}function By(l,t,e){const n=l.name,i=n.length;for(Sl.lastIndex=0;;){const s=Sl.exec(n),r=Sl.lastIndex;let o=s[1];const a=s[2]==="]",c=s[3];if(a&&(o=o|0),c===void 0||c==="["&&r+2===i){Gh(e,c===void 0?new Uy(o,l,t):new Oy(o,l,t));break}else{let f=e.map[o];f===void 0&&(f=new zy(o),Gh(e,f)),e=f}}}class Ko{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),r=t.getUniformLocation(e,s.name);By(s,r,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,r=e.length;s!==r;++s){const o=e[s],a=n[o.id];a.needsUpdate!==!1&&o.setValue(t,a.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const r=t[i];r.id in e&&n.push(r)}return n}}function Hh(l,t,e){const n=l.createShader(t);return l.shaderSource(n,e),l.compileShader(n),n}let ky=0;function Vy(l,t){const e=l.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let r=i;r<s;r++){const o=r+1;n.push(`${o===t?">":" "} ${o}: ${e[r]}`)}return n.join(`
`)}function Gy(l){switch(l){case as:return["Linear","( value )"];case te:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",l),["Linear","( value )"]}}function Wh(l,t,e){const n=l.getShaderParameter(t,35713),i=l.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const r=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Vy(l.getShaderSource(t),r)}else return i}function Hy(l,t){const e=Gy(t);return"vec4 "+l+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Wy(l,t){let e;switch(t){case i_:e="Linear";break;case s_:e="Reinhard";break;case r_:e="OptimizedCineon";break;case o_:e="ACESFilmic";break;case a_:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+l+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function qy(l){return[l.extensionDerivatives||l.envMapCubeUVHeight||l.bumpMap||l.normalMapTangentSpace||l.clearcoatNormalMap||l.flatShading||l.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(l.extensionFragDepth||l.logarithmicDepthBuffer)&&l.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",l.extensionDrawBuffers&&l.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(l.extensionShaderTextureLOD||l.envMap||l.transmission)&&l.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ar).join(`
`)}function Xy(l){const t=[];for(const e in l){const n=l[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jy(l,t){const e={},n=l.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=l.getActiveAttrib(t,i),r=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),e[r]={type:s.type,location:l.getAttribLocation(t,r),locationSize:o}}return e}function Ar(l){return l!==""}function qh(l,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return l.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Xh(l,t){return l.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Yy=/^[ \t]*#include +<([\w\d./]+)>/gm;function uc(l){return l.replace(Yy,$y)}function $y(l,t){const e=Rt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return uc(e)}const Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jh(l){return l.replace(Zy,Ky)}function Ky(l,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yh(l){let t="precision "+l.precision+` float;
precision `+l.precision+" int;";return l.precision==="highp"?t+=`
#define HIGH_PRECISION`:l.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:l.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Jy(l){let t="SHADOWMAP_TYPE_BASIC";return l.shadowMapType===Zd?t="SHADOWMAP_TYPE_PCF":l.shadowMapType===Ng?t="SHADOWMAP_TYPE_PCF_SOFT":l.shadowMapType===Tr&&(t="SHADOWMAP_TYPE_VSM"),t}function Qy(l){let t="ENVMAP_TYPE_CUBE";if(l.envMap)switch(l.envMapMode){case sr:case rr:t="ENVMAP_TYPE_CUBE";break;case xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tM(l){let t="ENVMAP_MODE_REFLECTION";if(l.envMap)switch(l.envMapMode){case rr:t="ENVMAP_MODE_REFRACTION";break}return t}function eM(l){let t="ENVMAP_BLENDING_NONE";if(l.envMap)switch(l.combine){case Gc:t="ENVMAP_BLENDING_MULTIPLY";break;case e_:t="ENVMAP_BLENDING_MIX";break;case n_:t="ENVMAP_BLENDING_ADD";break}return t}function nM(l){const t=l.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function iM(l,t,e,n){const i=l.getContext(),s=e.defines;let r=e.vertexShader,o=e.fragmentShader;const a=Jy(e),c=Qy(e),u=tM(e),f=eM(e),h=nM(e),p=e.isWebGL2?"":qy(e),_=Xy(s),g=i.createProgram();let m,d,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=[_].filter(Ar).join(`
`),m.length>0&&(m+=`
`),d=[p,_].filter(Ar).join(`
`),d.length>0&&(d+=`
`)):(m=[Yh(e),"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ar).join(`
`),d=[p,Yh(e),"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs2?"#define USE_UV2":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Rt.tonemapping_pars_fragment:"",e.toneMapping!==ai?Wy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Rt.encodings_pars_fragment,Hy("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ar).join(`
`)),r=uc(r),r=qh(r,e),r=Xh(r,e),o=uc(o),o=qh(o,e),o=Xh(o,e),r=jh(r),o=jh(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===ph?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ph?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=v+m+r,x=v+d+o,M=Hh(i,35633,y),E=Hh(i,35632,x);if(i.attachShader(g,M),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),l.debug.checkShaderErrors){const w=i.getProgramInfoLog(g).trim(),b=i.getShaderInfoLog(M).trim(),N=i.getShaderInfoLog(E).trim();let O=!0,A=!0;if(i.getProgramParameter(g,35714)===!1)if(O=!1,typeof l.debug.onShaderError=="function")l.debug.onShaderError(i,g,M,E);else{const R=Wh(i,M,"vertex"),L=Wh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+w+`
`+R+`
`+L)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(b===""||N==="")&&(A=!1);A&&(this.diagnostics={runnable:O,programLog:w,vertexShader:{log:b,prefix:m},fragmentShader:{log:N,prefix:d}})}i.deleteShader(M),i.deleteShader(E);let D;this.getUniforms=function(){return D===void 0&&(D=new Ko(i,g)),D};let T;return this.getAttributes=function(){return T===void 0&&(T=jy(i,g)),T},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=ky++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=E,this}let sM=0;class rM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(i)===!1&&(r.add(i),i.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new oM(t),e.set(t,n)),n}}class oM{constructor(t){this.id=sM++,this.code=t,this.usedTimes=0}}function aM(l,t,e,n,i,s,r){const o=new qc,a=new rM,c=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let p=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(w){return w===1?"uv2":"uv"}function m(w,b,N,O,A){const R=O.fog,L=A.geometry,I=w.isMeshStandardMaterial?O.environment:null,q=(w.isMeshStandardMaterial?e:t).get(w.envMap||I),k=q&&q.mapping===xa?q.image.height:null,Y=_[w.type];w.precision!==null&&(p=i.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Q=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ct=Q!==void 0?Q.length:0;let G=0;L.morphAttributes.position!==void 0&&(G=1),L.morphAttributes.normal!==void 0&&(G=2),L.morphAttributes.color!==void 0&&(G=3);let X,$,nt,it;if(Y){const mt=On[Y];X=mt.vertexShader,$=mt.fragmentShader}else X=w.vertexShader,$=w.fragmentShader,a.update(w),nt=a.getVertexShaderID(w),it=a.getFragmentShaderID(w);const W=l.getRenderTarget(),wt=A.isInstancedMesh===!0,Et=!!w.map,at=!!w.matcap,vt=!!q,Ot=!!w.aoMap,ut=!!w.lightMap,St=!!w.bumpMap,Kt=!!w.normalMap,Yt=!!w.displacementMap,Ht=!!w.emissiveMap,qt=!!w.metalnessMap,kt=!!w.roughnessMap,Wt=w.clearcoat>0,yt=w.iridescence>0,F=w.sheen>0,C=w.transmission>0,Z=Wt&&!!w.clearcoatMap,st=Wt&&!!w.clearcoatNormalMap,ot=Wt&&!!w.clearcoatRoughnessMap,ht=yt&&!!w.iridescenceMap,U=yt&&!!w.iridescenceThicknessMap,et=F&&!!w.sheenColorMap,j=F&&!!w.sheenRoughnessMap,dt=!!w.specularMap,_t=!!w.specularColorMap,Mt=!!w.specularIntensityMap,pt=C&&!!w.transmissionMap,xt=C&&!!w.thicknessMap,Tt=!!w.gradientMap,Ft=!!w.alphaMap,ae=w.alphaTest>0,z=!!w.extensions,J=!!L.attributes.uv2;return{isWebGL2:u,shaderID:Y,shaderName:w.type,vertexShader:X,fragmentShader:$,defines:w.defines,customVertexShaderID:nt,customFragmentShaderID:it,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,instancing:wt,instancingColor:wt&&A.instanceColor!==null,supportsVertexTextures:h,outputEncoding:W===null?l.outputEncoding:W.isXRRenderTarget===!0?W.texture.encoding:as,map:Et,matcap:at,envMap:vt,envMapMode:vt&&q.mapping,envMapCubeUVHeight:k,aoMap:Ot,lightMap:ut,bumpMap:St,normalMap:Kt,displacementMap:h&&Yt,emissiveMap:Ht,normalMapObjectSpace:Kt&&w.normalMapType===D_,normalMapTangentSpace:Kt&&w.normalMapType===Hc,decodeVideoTexture:Et&&w.map.isVideoTexture===!0&&w.map.encoding===te,metalnessMap:qt,roughnessMap:kt,clearcoat:Wt,clearcoatMap:Z,clearcoatNormalMap:st,clearcoatRoughnessMap:ot,iridescence:yt,iridescenceMap:ht,iridescenceThicknessMap:U,sheen:F,sheenColorMap:et,sheenRoughnessMap:j,specularMap:dt,specularColorMap:_t,specularIntensityMap:Mt,transmission:C,transmissionMap:pt,thicknessMap:xt,gradientMap:Tt,opaque:w.transparent===!1&&w.blending===qs,alphaMap:Ft,alphaTest:ae,combine:w.combine,mapUv:Et&&g(w.map.channel),aoMapUv:Ot&&g(w.aoMap.channel),lightMapUv:ut&&g(w.lightMap.channel),bumpMapUv:St&&g(w.bumpMap.channel),normalMapUv:Kt&&g(w.normalMap.channel),displacementMapUv:Yt&&g(w.displacementMap.channel),emissiveMapUv:Ht&&g(w.emissiveMap.channel),metalnessMapUv:qt&&g(w.metalnessMap.channel),roughnessMapUv:kt&&g(w.roughnessMap.channel),clearcoatMapUv:Z&&g(w.clearcoatMap.channel),clearcoatNormalMapUv:st&&g(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ht&&g(w.iridescenceMap.channel),iridescenceThicknessMapUv:U&&g(w.iridescenceThicknessMap.channel),sheenColorMapUv:et&&g(w.sheenColorMap.channel),sheenRoughnessMapUv:j&&g(w.sheenRoughnessMap.channel),specularMapUv:dt&&g(w.specularMap.channel),specularColorMapUv:_t&&g(w.specularColorMap.channel),specularIntensityMapUv:Mt&&g(w.specularIntensityMap.channel),transmissionMapUv:pt&&g(w.transmissionMap.channel),thicknessMapUv:xt&&g(w.thicknessMap.channel),alphaMapUv:Ft&&g(w.alphaMap.channel),vertexTangents:Kt&&!!L.attributes.tangent,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,vertexUvs2:J,pointsUvs:A.isPoints===!0&&!!L.attributes.uv&&(Et||Ft),fog:!!R,useFog:w.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:A.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:G,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:l.shadowMap.enabled&&N.length>0,shadowMapType:l.shadowMap.type,toneMapping:w.toneMapped?l.toneMapping:ai,useLegacyLights:l.useLegacyLights,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===si,flipSided:w.side===qe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionDerivatives:z&&w.extensions.derivatives===!0,extensionFragDepth:z&&w.extensions.fragDepth===!0,extensionDrawBuffers:z&&w.extensions.drawBuffers===!0,extensionShaderTextureLOD:z&&w.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:w.customProgramCacheKey()}}function d(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const N in w.defines)b.push(N),b.push(w.defines[N]);return w.isRawShaderMaterial===!1&&(v(b,w),y(b,w),b.push(l.outputEncoding)),b.push(w.customProgramCacheKey),b.join()}function v(w,b){w.push(b.precision),w.push(b.outputEncoding),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function y(w,b){o.disableAll(),b.isWebGL2&&o.enable(0),b.supportsVertexTextures&&o.enable(1),b.instancing&&o.enable(2),b.instancingColor&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUvs2&&o.enable(13),b.vertexTangents&&o.enable(14),w.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.skinning&&o.enable(4),b.morphTargets&&o.enable(5),b.morphNormals&&o.enable(6),b.morphColors&&o.enable(7),b.premultipliedAlpha&&o.enable(8),b.shadowMapEnabled&&o.enable(9),b.useLegacyLights&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.decodeVideoTexture&&o.enable(17),b.opaque&&o.enable(18),b.pointsUvs&&o.enable(19),w.push(o.mask)}function x(w){const b=_[w.type];let N;if(b){const O=On[b];N=$_.clone(O.uniforms)}else N=w.uniforms;return N}function M(w,b){let N;for(let O=0,A=c.length;O<A;O++){const R=c[O];if(R.cacheKey===b){N=R,++N.usedTimes;break}}return N===void 0&&(N=new iM(l,b,w,s),c.push(N)),N}function E(w){if(--w.usedTimes===0){const b=c.indexOf(w);c[b]=c[c.length-1],c.pop(),w.destroy()}}function D(w){a.remove(w)}function T(){a.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:M,releaseProgram:E,releaseShaderCache:D,programs:c,dispose:T}}function lM(){let l=new WeakMap;function t(s){let r=l.get(s);return r===void 0&&(r={},l.set(s,r)),r}function e(s){l.delete(s)}function n(s,r,o){l.get(s)[r]=o}function i(){l=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function cM(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.material.id!==t.material.id?l.material.id-t.material.id:l.z!==t.z?l.z-t.z:l.id-t.id}function $h(l,t){return l.groupOrder!==t.groupOrder?l.groupOrder-t.groupOrder:l.renderOrder!==t.renderOrder?l.renderOrder-t.renderOrder:l.z!==t.z?t.z-l.z:l.id-t.id}function Zh(){const l=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function r(f,h,p,_,g,m){let d=l[t];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:_,renderOrder:f.renderOrder,z:g,group:m},l[t]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=_,d.renderOrder=f.renderOrder,d.z=g,d.group=m),t++,d}function o(f,h,p,_,g,m){const d=r(f,h,p,_,g,m);p.transmission>0?n.push(d):p.transparent===!0?i.push(d):e.push(d)}function a(f,h,p,_,g,m){const d=r(f,h,p,_,g,m);p.transmission>0?n.unshift(d):p.transparent===!0?i.unshift(d):e.unshift(d)}function c(f,h){e.length>1&&e.sort(f||cM),n.length>1&&n.sort(h||$h),i.length>1&&i.sort(h||$h)}function u(){for(let f=t,h=l.length;f<h;f++){const p=l[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:a,finish:u,sort:c}}function uM(){let l=new WeakMap;function t(n,i){const s=l.get(n);let r;return s===void 0?(r=new Zh,l.set(n,[r])):i>=s.length?(r=new Zh,s.push(r)):r=s[i],r}function e(){l=new WeakMap}return{get:t,dispose:e}}function hM(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new Xt};break;case"SpotLight":e={position:new B,direction:new B,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new B,halfWidth:new B,halfHeight:new B};break}return l[t.id]=e,e}}}function fM(){const l={};return{get:function(t){if(l[t.id]!==void 0)return l[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return l[t.id]=e,e}}}let dM=0;function pM(l,t){return(t.castShadow?2:0)-(l.castShadow?2:0)+(t.map?1:0)-(l.map?1:0)}function mM(l,t){const e=new hM,n=fM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new B);const s=new B,r=new me,o=new me;function a(u,f){let h=0,p=0,_=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let g=0,m=0,d=0,v=0,y=0,x=0,M=0,E=0,D=0,T=0;u.sort(pM);const w=f===!0?Math.PI:1;for(let N=0,O=u.length;N<O;N++){const A=u[N],R=A.color,L=A.intensity,I=A.distance,q=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=R.r*L*w,p+=R.g*L*w,_+=R.b*L*w;else if(A.isLightProbe)for(let k=0;k<9;k++)i.probe[k].addScaledVector(A.sh.coefficients[k],L);else if(A.isDirectionalLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity*w),A.castShadow){const Y=A.shadow,Q=n.get(A);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.directionalShadow[g]=Q,i.directionalShadowMap[g]=q,i.directionalShadowMatrix[g]=A.shadow.matrix,x++}i.directional[g]=k,g++}else if(A.isSpotLight){const k=e.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(R).multiplyScalar(L*w),k.distance=I,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,i.spot[d]=k;const Y=A.shadow;if(A.map&&(i.spotLightMap[D]=A.map,D++,Y.updateMatrices(A),A.castShadow&&T++),i.spotLightMatrix[d]=Y.matrix,A.castShadow){const Q=n.get(A);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=q,E++}d++}else if(A.isRectAreaLight){const k=e.get(A);k.color.copy(R).multiplyScalar(L),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),i.rectArea[v]=k,v++}else if(A.isPointLight){const k=e.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity*w),k.distance=A.distance,k.decay=A.decay,A.castShadow){const Y=A.shadow,Q=n.get(A);Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,i.pointShadow[m]=Q,i.pointShadowMap[m]=q,i.pointShadowMatrix[m]=A.shadow.matrix,M++}i.point[m]=k,m++}else if(A.isHemisphereLight){const k=e.get(A);k.skyColor.copy(A.color).multiplyScalar(L*w),k.groundColor.copy(A.groundColor).multiplyScalar(L*w),i.hemi[y]=k,y++}}v>0&&(t.isWebGL2||l.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_FLOAT_1,i.rectAreaLTC2=lt.LTC_FLOAT_2):l.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=lt.LTC_HALF_1,i.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=_;const b=i.hash;(b.directionalLength!==g||b.pointLength!==m||b.spotLength!==d||b.rectAreaLength!==v||b.hemiLength!==y||b.numDirectionalShadows!==x||b.numPointShadows!==M||b.numSpotShadows!==E||b.numSpotMaps!==D)&&(i.directional.length=g,i.spot.length=d,i.rectArea.length=v,i.point.length=m,i.hemi.length=y,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+D-T,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=T,b.directionalLength=g,b.pointLength=m,b.spotLength=d,b.rectAreaLength=v,b.hemiLength=y,b.numDirectionalShadows=x,b.numPointShadows=M,b.numSpotShadows=E,b.numSpotMaps=D,i.version=dM++)}function c(u,f){let h=0,p=0,_=0,g=0,m=0;const d=f.matrixWorldInverse;for(let v=0,y=u.length;v<y;v++){const x=u[v];if(x.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),h++}else if(x.isSpotLight){const M=i.spot[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),_++}else if(x.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),o.identity(),r.copy(x.matrixWorld),r.premultiply(d),o.extractRotation(r),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(d),p++}else if(x.isHemisphereLight){const M=i.hemi[m];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(d),m++}}}return{setup:a,setupView:c,state:i}}function Kh(l,t){const e=new mM(l,t),n=[],i=[];function s(){n.length=0,i.length=0}function r(f){n.push(f)}function o(f){i.push(f)}function a(f){e.setup(n,f)}function c(f){e.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function gM(l,t){let e=new WeakMap;function n(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Kh(l,t),e.set(s,[a])):r>=o.length?(a=new Kh(l,t),o.push(a)):a=o[r],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class _M extends cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class vM extends cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const xM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yM=`uniform sampler2D shadow_pass;
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
}`;function MM(l,t,e){let n=new jc;const i=new Pt,s=new Pt,r=new ne,o=new _M({depthPacking:E_}),a=new vM,c={},u=e.maxTextureSize,f={[Ti]:qe,[qe]:Ti,[si]:si},h=new us({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:xM,fragmentShader:yM}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const _=new hi;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ve(_,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zd,this.render=function(x,M,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const D=l.getRenderTarget(),T=l.getActiveCubeFace(),w=l.getActiveMipmapLevel(),b=l.state;b.setBlending(bi),b.buffers.color.setClear(1,1,1,1),b.buffers.depth.setTest(!0),b.setScissorTest(!1);for(let N=0,O=x.length;N<O;N++){const A=x[N],R=A.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",A,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const L=R.getFrameExtents();if(i.multiply(L),s.copy(R.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/L.x),i.x=s.x*L.x,R.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/L.y),i.y=s.y*L.y,R.mapSize.y=s.y)),R.map===null){const q=this.type!==Tr?{minFilter:Oe,magFilter:Oe}:{};R.map=new ls(i.x,i.y,q),R.map.texture.name=A.name+".shadowMap",R.camera.updateProjectionMatrix()}l.setRenderTarget(R.map),l.clear();const I=R.getViewportCount();for(let q=0;q<I;q++){const k=R.getViewport(q);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),b.viewport(r),R.updateMatrices(A,q),n=R.getFrustum(),y(M,E,R.camera,A,this.type)}R.isPointLightShadow!==!0&&this.type===Tr&&d(R,E),R.needsUpdate=!1}m.needsUpdate=!1,l.setRenderTarget(D,T,w)};function d(x,M){const E=t.update(g);h.defines.VSM_SAMPLES!==x.blurSamples&&(h.defines.VSM_SAMPLES=x.blurSamples,p.defines.VSM_SAMPLES=x.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new ls(i.x,i.y)),h.uniforms.shadow_pass.value=x.map.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,l.setRenderTarget(x.mapPass),l.clear(),l.renderBufferDirect(M,null,E,h,g,null),p.uniforms.shadow_pass.value=x.mapPass.texture,p.uniforms.resolution.value=x.mapSize,p.uniforms.radius.value=x.radius,l.setRenderTarget(x.map),l.clear(),l.renderBufferDirect(M,null,E,p,g,null)}function v(x,M,E,D){let T=null;const w=E.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(w!==void 0)T=w;else if(T=E.isPointLight===!0?a:o,l.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const b=T.uuid,N=M.uuid;let O=c[b];O===void 0&&(O={},c[b]=O);let A=O[N];A===void 0&&(A=T.clone(),O[N]=A),T=A}if(T.visible=M.visible,T.wireframe=M.wireframe,D===Tr?T.side=M.shadowSide!==null?M.shadowSide:M.side:T.side=M.shadowSide!==null?M.shadowSide:f[M.side],T.alphaMap=M.alphaMap,T.alphaTest=M.alphaTest,T.map=M.map,T.clipShadows=M.clipShadows,T.clippingPlanes=M.clippingPlanes,T.clipIntersection=M.clipIntersection,T.displacementMap=M.displacementMap,T.displacementScale=M.displacementScale,T.displacementBias=M.displacementBias,T.wireframeLinewidth=M.wireframeLinewidth,T.linewidth=M.linewidth,E.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const b=l.properties.get(T);b.light=E}return T}function y(x,M,E,D,T){if(x.visible===!1)return;if(x.layers.test(M.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&T===Tr)&&(!x.frustumCulled||n.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,x.matrixWorld);const N=t.update(x),O=x.material;if(Array.isArray(O)){const A=N.groups;for(let R=0,L=A.length;R<L;R++){const I=A[R],q=O[I.materialIndex];if(q&&q.visible){const k=v(x,q,D,T);l.renderBufferDirect(E,null,N,k,x,I)}}}else if(O.visible){const A=v(x,O,D,T);l.renderBufferDirect(E,null,N,A,x,null)}}const b=x.children;for(let N=0,O=b.length;N<O;N++)y(b[N],M,E,D,T)}}function wM(l,t,e){const n=e.isWebGL2;function i(){let z=!1;const J=new ne;let rt=null;const mt=new ne(0,0,0,0);return{setMask:function(bt){rt!==bt&&!z&&(l.colorMask(bt,bt,bt,bt),rt=bt)},setLocked:function(bt){z=bt},setClear:function(bt,Jt,ie,Ee,fi){fi===!0&&(bt*=Ee,Jt*=Ee,ie*=Ee),J.set(bt,Jt,ie,Ee),mt.equals(J)===!1&&(l.clearColor(bt,Jt,ie,Ee),mt.copy(J))},reset:function(){z=!1,rt=null,mt.set(-1,0,0,0)}}}function s(){let z=!1,J=null,rt=null,mt=null;return{setTest:function(bt){bt?W(2929):wt(2929)},setMask:function(bt){J!==bt&&!z&&(l.depthMask(bt),J=bt)},setFunc:function(bt){if(rt!==bt){switch(bt){case Yg:l.depthFunc(512);break;case $g:l.depthFunc(519);break;case Zg:l.depthFunc(513);break;case ic:l.depthFunc(515);break;case Kg:l.depthFunc(514);break;case Jg:l.depthFunc(518);break;case Qg:l.depthFunc(516);break;case t_:l.depthFunc(517);break;default:l.depthFunc(515)}rt=bt}},setLocked:function(bt){z=bt},setClear:function(bt){mt!==bt&&(l.clearDepth(bt),mt=bt)},reset:function(){z=!1,J=null,rt=null,mt=null}}}function r(){let z=!1,J=null,rt=null,mt=null,bt=null,Jt=null,ie=null,Ee=null,fi=null;return{setTest:function(le){z||(le?W(2960):wt(2960))},setMask:function(le){J!==le&&!z&&(l.stencilMask(le),J=le)},setFunc:function(le,an,Ln){(rt!==le||mt!==an||bt!==Ln)&&(l.stencilFunc(le,an,Ln),rt=le,mt=an,bt=Ln)},setOp:function(le,an,Ln){(Jt!==le||ie!==an||Ee!==Ln)&&(l.stencilOp(le,an,Ln),Jt=le,ie=an,Ee=Ln)},setLocked:function(le){z=le},setClear:function(le){fi!==le&&(l.clearStencil(le),fi=le)},reset:function(){z=!1,J=null,rt=null,mt=null,bt=null,Jt=null,ie=null,Ee=null,fi=null}}}const o=new i,a=new s,c=new r,u=new WeakMap,f=new WeakMap;let h={},p={},_=new WeakMap,g=[],m=null,d=!1,v=null,y=null,x=null,M=null,E=null,D=null,T=null,w=!1,b=null,N=null,O=null,A=null,R=null;const L=l.getParameter(35661);let I=!1,q=0;const k=l.getParameter(7938);k.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(k)[1]),I=q>=1):k.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),I=q>=2);let Y=null,Q={};const ct=l.getParameter(3088),G=l.getParameter(2978),X=new ne().fromArray(ct),$=new ne().fromArray(G);function nt(z,J,rt){const mt=new Uint8Array(4),bt=l.createTexture();l.bindTexture(z,bt),l.texParameteri(z,10241,9728),l.texParameteri(z,10240,9728);for(let Jt=0;Jt<rt;Jt++)l.texImage2D(J+Jt,0,6408,1,1,0,6408,5121,mt);return bt}const it={};it[3553]=nt(3553,3553,1),it[34067]=nt(34067,34069,6),o.setClear(0,0,0,1),a.setClear(1),c.setClear(0),W(2929),a.setFunc(ic),Yt(!1),Ht(Ou),W(2884),St(bi);function W(z){h[z]!==!0&&(l.enable(z),h[z]=!0)}function wt(z){h[z]!==!1&&(l.disable(z),h[z]=!1)}function Et(z,J){return p[z]!==J?(l.bindFramebuffer(z,J),p[z]=J,n&&(z===36009&&(p[36160]=J),z===36160&&(p[36009]=J)),!0):!1}function at(z,J){let rt=g,mt=!1;if(z)if(rt=_.get(J),rt===void 0&&(rt=[],_.set(J,rt)),z.isWebGLMultipleRenderTargets){const bt=z.texture;if(rt.length!==bt.length||rt[0]!==36064){for(let Jt=0,ie=bt.length;Jt<ie;Jt++)rt[Jt]=36064+Jt;rt.length=bt.length,mt=!0}}else rt[0]!==36064&&(rt[0]=36064,mt=!0);else rt[0]!==1029&&(rt[0]=1029,mt=!0);mt&&(e.isWebGL2?l.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function vt(z){return m!==z?(l.useProgram(z),m=z,!0):!1}const Ot={[Is]:32774,[Og]:32778,[zg]:32779};if(n)Ot[Vu]=32775,Ot[Gu]=32776;else{const z=t.get("EXT_blend_minmax");z!==null&&(Ot[Vu]=z.MIN_EXT,Ot[Gu]=z.MAX_EXT)}const ut={[Bg]:0,[kg]:1,[Vg]:768,[Kd]:770,[jg]:776,[qg]:774,[Hg]:772,[Gg]:769,[Jd]:771,[Xg]:775,[Wg]:773};function St(z,J,rt,mt,bt,Jt,ie,Ee){if(z===bi){d===!0&&(wt(3042),d=!1);return}if(d===!1&&(W(3042),d=!0),z!==Ug){if(z!==v||Ee!==w){if((y!==Is||E!==Is)&&(l.blendEquation(32774),y=Is,E=Is),Ee)switch(z){case qs:l.blendFuncSeparate(1,771,1,771);break;case zu:l.blendFunc(1,1);break;case Bu:l.blendFuncSeparate(0,769,0,1);break;case ku:l.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case qs:l.blendFuncSeparate(770,771,1,771);break;case zu:l.blendFunc(770,1);break;case Bu:l.blendFuncSeparate(0,769,0,1);break;case ku:l.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}x=null,M=null,D=null,T=null,v=z,w=Ee}return}bt=bt||J,Jt=Jt||rt,ie=ie||mt,(J!==y||bt!==E)&&(l.blendEquationSeparate(Ot[J],Ot[bt]),y=J,E=bt),(rt!==x||mt!==M||Jt!==D||ie!==T)&&(l.blendFuncSeparate(ut[rt],ut[mt],ut[Jt],ut[ie]),x=rt,M=mt,D=Jt,T=ie),v=z,w=!1}function Kt(z,J){z.side===si?wt(2884):W(2884);let rt=z.side===qe;J&&(rt=!rt),Yt(rt),z.blending===qs&&z.transparent===!1?St(bi):St(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),o.setMask(z.colorWrite);const mt=z.stencilWrite;c.setTest(mt),mt&&(c.setMask(z.stencilWriteMask),c.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),c.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),kt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?W(32926):wt(32926)}function Yt(z){b!==z&&(z?l.frontFace(2304):l.frontFace(2305),b=z)}function Ht(z){z!==Fg?(W(2884),z!==N&&(z===Ou?l.cullFace(1029):z===Ig?l.cullFace(1028):l.cullFace(1032))):wt(2884),N=z}function qt(z){z!==O&&(I&&l.lineWidth(z),O=z)}function kt(z,J,rt){z?(W(32823),(A!==J||R!==rt)&&(l.polygonOffset(J,rt),A=J,R=rt)):wt(32823)}function Wt(z){z?W(3089):wt(3089)}function yt(z){z===void 0&&(z=33984+L-1),Y!==z&&(l.activeTexture(z),Y=z)}function F(z,J,rt){rt===void 0&&(Y===null?rt=33984+L-1:rt=Y);let mt=Q[rt];mt===void 0&&(mt={type:void 0,texture:void 0},Q[rt]=mt),(mt.type!==z||mt.texture!==J)&&(Y!==rt&&(l.activeTexture(rt),Y=rt),l.bindTexture(z,J||it[z]),mt.type=z,mt.texture=J)}function C(){const z=Q[Y];z!==void 0&&z.type!==void 0&&(l.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Z(){try{l.compressedTexImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{l.compressedTexImage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ot(){try{l.texSubImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ht(){try{l.texSubImage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function U(){try{l.compressedTexSubImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{l.compressedTexSubImage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function j(){try{l.texStorage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{l.texStorage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{l.texImage2D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Mt(){try{l.texImage3D.apply(l,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(z){X.equals(z)===!1&&(l.scissor(z.x,z.y,z.z,z.w),X.copy(z))}function xt(z){$.equals(z)===!1&&(l.viewport(z.x,z.y,z.z,z.w),$.copy(z))}function Tt(z,J){let rt=f.get(J);rt===void 0&&(rt=new WeakMap,f.set(J,rt));let mt=rt.get(z);mt===void 0&&(mt=l.getUniformBlockIndex(J,z.name),rt.set(z,mt))}function Ft(z,J){const mt=f.get(J).get(z);u.get(J)!==mt&&(l.uniformBlockBinding(J,mt,z.__bindingPointIndex),u.set(J,mt))}function ae(){l.disable(3042),l.disable(2884),l.disable(2929),l.disable(32823),l.disable(3089),l.disable(2960),l.disable(32926),l.blendEquation(32774),l.blendFunc(1,0),l.blendFuncSeparate(1,0,1,0),l.colorMask(!0,!0,!0,!0),l.clearColor(0,0,0,0),l.depthMask(!0),l.depthFunc(513),l.clearDepth(1),l.stencilMask(4294967295),l.stencilFunc(519,0,4294967295),l.stencilOp(7680,7680,7680),l.clearStencil(0),l.cullFace(1029),l.frontFace(2305),l.polygonOffset(0,0),l.activeTexture(33984),l.bindFramebuffer(36160,null),n===!0&&(l.bindFramebuffer(36009,null),l.bindFramebuffer(36008,null)),l.useProgram(null),l.lineWidth(1),l.scissor(0,0,l.canvas.width,l.canvas.height),l.viewport(0,0,l.canvas.width,l.canvas.height),h={},Y=null,Q={},p={},_=new WeakMap,g=[],m=null,d=!1,v=null,y=null,x=null,M=null,E=null,D=null,T=null,w=!1,b=null,N=null,O=null,A=null,R=null,X.set(0,0,l.canvas.width,l.canvas.height),$.set(0,0,l.canvas.width,l.canvas.height),o.reset(),a.reset(),c.reset()}return{buffers:{color:o,depth:a,stencil:c},enable:W,disable:wt,bindFramebuffer:Et,drawBuffers:at,useProgram:vt,setBlending:St,setMaterial:Kt,setFlipSided:Yt,setCullFace:Ht,setLineWidth:qt,setPolygonOffset:kt,setScissorTest:Wt,activeTexture:yt,bindTexture:F,unbindTexture:C,compressedTexImage2D:Z,compressedTexImage3D:st,texImage2D:_t,texImage3D:Mt,updateUBOMapping:Tt,uniformBlockBinding:Ft,texStorage2D:j,texStorage3D:dt,texSubImage2D:ot,texSubImage3D:ht,compressedTexSubImage2D:U,compressedTexSubImage3D:et,scissor:pt,viewport:xt,reset:ae}}function SM(l,t,e,n,i,s,r){const o=i.isWebGL2,a=i.maxTextures,c=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(F,C){return d?new OffscreenCanvas(F,C):Xr("canvas")}function y(F,C,Z,st){let ot=1;if((F.width>st||F.height>st)&&(ot=st/Math.max(F.width,F.height)),ot<1||C===!0)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap){const ht=C?A_:Math.floor,U=ht(ot*F.width),et=ht(ot*F.height);g===void 0&&(g=v(U,et));const j=Z?v(U,et):g;return j.width=U,j.height=et,j.getContext("2d").drawImage(F,0,0,U,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+U+"x"+et+")."),j}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),F;return F}function x(F){return mh(F.width)&&mh(F.height)}function M(F){return o?!1:F.wrapS!==Dn||F.wrapT!==Dn||F.minFilter!==Oe&&F.minFilter!==pn}function E(F,C){return F.generateMipmaps&&C&&F.minFilter!==Oe&&F.minFilter!==pn}function D(F){l.generateMipmap(F)}function T(F,C,Z,st,ot=!1){if(o===!1)return C;if(F!==null){if(l[F]!==void 0)return l[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let ht=C;return C===6403&&(Z===5126&&(ht=33326),Z===5131&&(ht=33325),Z===5121&&(ht=33321)),C===33319&&(Z===5126&&(ht=33328),Z===5131&&(ht=33327),Z===5121&&(ht=33323)),C===6408&&(Z===5126&&(ht=34836),Z===5131&&(ht=34842),Z===5121&&(ht=st===te&&ot===!1?35907:32856),Z===32819&&(ht=32854),Z===32820&&(ht=32855)),(ht===33325||ht===33326||ht===33327||ht===33328||ht===34842||ht===34836)&&t.get("EXT_color_buffer_float"),ht}function w(F,C,Z){return E(F,Z)===!0||F.isFramebufferTexture&&F.minFilter!==Oe&&F.minFilter!==pn?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function b(F){return F===Oe||F===Hu||F===$a?9728:9729}function N(F){const C=F.target;C.removeEventListener("dispose",N),A(C),C.isVideoTexture&&_.delete(C)}function O(F){const C=F.target;C.removeEventListener("dispose",O),L(C)}function A(F){const C=n.get(F);if(C.__webglInit===void 0)return;const Z=F.source,st=m.get(Z);if(st){const ot=st[C.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&R(F),Object.keys(st).length===0&&m.delete(Z)}n.remove(F)}function R(F){const C=n.get(F);l.deleteTexture(C.__webglTexture);const Z=F.source,st=m.get(Z);delete st[C.__cacheKey],r.memory.textures--}function L(F){const C=F.texture,Z=n.get(F),st=n.get(C);if(st.__webglTexture!==void 0&&(l.deleteTexture(st.__webglTexture),r.memory.textures--),F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++)l.deleteFramebuffer(Z.__webglFramebuffer[ot]),Z.__webglDepthbuffer&&l.deleteRenderbuffer(Z.__webglDepthbuffer[ot]);else{if(l.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&l.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&l.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let ot=0;ot<Z.__webglColorRenderbuffer.length;ot++)Z.__webglColorRenderbuffer[ot]&&l.deleteRenderbuffer(Z.__webglColorRenderbuffer[ot]);Z.__webglDepthRenderbuffer&&l.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(F.isWebGLMultipleRenderTargets)for(let ot=0,ht=C.length;ot<ht;ot++){const U=n.get(C[ot]);U.__webglTexture&&(l.deleteTexture(U.__webglTexture),r.memory.textures--),n.remove(C[ot])}n.remove(C),n.remove(F)}let I=0;function q(){I=0}function k(){const F=I;return F>=a&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+a),I+=1,F}function Y(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.encoding),C.join()}function Q(F,C){const Z=n.get(F);if(F.isVideoTexture&&Wt(F),F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){const st=F.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{wt(Z,F,C);return}}e.bindTexture(3553,Z.__webglTexture,33984+C)}function ct(F,C){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){wt(Z,F,C);return}e.bindTexture(35866,Z.__webglTexture,33984+C)}function G(F,C){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){wt(Z,F,C);return}e.bindTexture(32879,Z.__webglTexture,33984+C)}function X(F,C){const Z=n.get(F);if(F.version>0&&Z.__version!==F.version){Et(Z,F,C);return}e.bindTexture(34067,Z.__webglTexture,33984+C)}const $={[oc]:10497,[Dn]:33071,[ac]:33648},nt={[Oe]:9728,[Hu]:9984,[$a]:9986,[pn]:9729,[l_]:9985,[Hr]:9987};function it(F,C,Z){if(Z?(l.texParameteri(F,10242,$[C.wrapS]),l.texParameteri(F,10243,$[C.wrapT]),(F===32879||F===35866)&&l.texParameteri(F,32882,$[C.wrapR]),l.texParameteri(F,10240,nt[C.magFilter]),l.texParameteri(F,10241,nt[C.minFilter])):(l.texParameteri(F,10242,33071),l.texParameteri(F,10243,33071),(F===32879||F===35866)&&l.texParameteri(F,32882,33071),(C.wrapS!==Dn||C.wrapT!==Dn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),l.texParameteri(F,10240,b(C.magFilter)),l.texParameteri(F,10241,b(C.minFilter)),C.minFilter!==Oe&&C.minFilter!==pn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const st=t.get("EXT_texture_filter_anisotropic");if(C.magFilter===Oe||C.minFilter!==$a&&C.minFilter!==Hr||C.type===Zi&&t.has("OES_texture_float_linear")===!1||o===!1&&C.type===Wr&&t.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||n.get(C).__currentAnisotropy)&&(l.texParameterf(F,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,i.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy)}}function W(F,C){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",N));const st=C.source;let ot=m.get(st);ot===void 0&&(ot={},m.set(st,ot));const ht=Y(C);if(ht!==F.__cacheKey){ot[ht]===void 0&&(ot[ht]={texture:l.createTexture(),usedTimes:0},r.memory.textures++,Z=!0),ot[ht].usedTimes++;const U=ot[F.__cacheKey];U!==void 0&&(ot[F.__cacheKey].usedTimes--,U.usedTimes===0&&R(C)),F.__cacheKey=ht,F.__webglTexture=ot[ht].texture}return Z}function wt(F,C,Z){let st=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(st=35866),C.isData3DTexture&&(st=32879);const ot=W(F,C),ht=C.source;e.bindTexture(st,F.__webglTexture,33984+Z);const U=n.get(ht);if(ht.version!==U.__version||ot===!0){e.activeTexture(33984+Z),l.pixelStorei(37440,C.flipY),l.pixelStorei(37441,C.premultiplyAlpha),l.pixelStorei(3317,C.unpackAlignment),l.pixelStorei(37443,0);const et=M(C)&&x(C.image)===!1;let j=y(C.image,et,!1,u);j=yt(C,j);const dt=x(j)||o,_t=s.convert(C.format,C.encoding);let Mt=s.convert(C.type),pt=T(C.internalFormat,_t,Mt,C.encoding,C.isVideoTexture);it(st,C,dt);let xt;const Tt=C.mipmaps,Ft=o&&C.isVideoTexture!==!0,ae=U.__version===void 0||ot===!0,z=w(C,j,dt);if(C.isDepthTexture)pt=6402,o?C.type===Zi?pt=36012:C.type===$i?pt=33190:C.type===Xs?pt=35056:pt=33189:C.type===Zi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===ns&&pt===6402&&C.type!==tp&&C.type!==$i&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=$i,Mt=s.convert(C.type)),C.format===or&&pt===6402&&(pt=34041,C.type!==Xs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Xs,Mt=s.convert(C.type))),ae&&(Ft?e.texStorage2D(3553,1,pt,j.width,j.height):e.texImage2D(3553,0,pt,j.width,j.height,0,_t,Mt,null));else if(C.isDataTexture)if(Tt.length>0&&dt){Ft&&ae&&e.texStorage2D(3553,z,pt,Tt[0].width,Tt[0].height);for(let J=0,rt=Tt.length;J<rt;J++)xt=Tt[J],Ft?e.texSubImage2D(3553,J,0,0,xt.width,xt.height,_t,Mt,xt.data):e.texImage2D(3553,J,pt,xt.width,xt.height,0,_t,Mt,xt.data);C.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(3553,z,pt,j.width,j.height),e.texSubImage2D(3553,0,0,0,j.width,j.height,_t,Mt,j.data)):e.texImage2D(3553,0,pt,j.width,j.height,0,_t,Mt,j.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ft&&ae&&e.texStorage3D(35866,z,pt,Tt[0].width,Tt[0].height,j.depth);for(let J=0,rt=Tt.length;J<rt;J++)xt=Tt[J],C.format!==Cn?_t!==null?Ft?e.compressedTexSubImage3D(35866,J,0,0,0,xt.width,xt.height,j.depth,_t,xt.data,0,0):e.compressedTexImage3D(35866,J,pt,xt.width,xt.height,j.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage3D(35866,J,0,0,0,xt.width,xt.height,j.depth,_t,Mt,xt.data):e.texImage3D(35866,J,pt,xt.width,xt.height,j.depth,0,_t,Mt,xt.data)}else{Ft&&ae&&e.texStorage2D(3553,z,pt,Tt[0].width,Tt[0].height);for(let J=0,rt=Tt.length;J<rt;J++)xt=Tt[J],C.format!==Cn?_t!==null?Ft?e.compressedTexSubImage2D(3553,J,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(3553,J,pt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?e.texSubImage2D(3553,J,0,0,xt.width,xt.height,_t,Mt,xt.data):e.texImage2D(3553,J,pt,xt.width,xt.height,0,_t,Mt,xt.data)}else if(C.isDataArrayTexture)Ft?(ae&&e.texStorage3D(35866,z,pt,j.width,j.height,j.depth),e.texSubImage3D(35866,0,0,0,0,j.width,j.height,j.depth,_t,Mt,j.data)):e.texImage3D(35866,0,pt,j.width,j.height,j.depth,0,_t,Mt,j.data);else if(C.isData3DTexture)Ft?(ae&&e.texStorage3D(32879,z,pt,j.width,j.height,j.depth),e.texSubImage3D(32879,0,0,0,0,j.width,j.height,j.depth,_t,Mt,j.data)):e.texImage3D(32879,0,pt,j.width,j.height,j.depth,0,_t,Mt,j.data);else if(C.isFramebufferTexture){if(ae)if(Ft)e.texStorage2D(3553,z,pt,j.width,j.height);else{let J=j.width,rt=j.height;for(let mt=0;mt<z;mt++)e.texImage2D(3553,mt,pt,J,rt,0,_t,Mt,null),J>>=1,rt>>=1}}else if(Tt.length>0&&dt){Ft&&ae&&e.texStorage2D(3553,z,pt,Tt[0].width,Tt[0].height);for(let J=0,rt=Tt.length;J<rt;J++)xt=Tt[J],Ft?e.texSubImage2D(3553,J,0,0,_t,Mt,xt):e.texImage2D(3553,J,pt,_t,Mt,xt);C.generateMipmaps=!1}else Ft?(ae&&e.texStorage2D(3553,z,pt,j.width,j.height),e.texSubImage2D(3553,0,0,0,_t,Mt,j)):e.texImage2D(3553,0,pt,_t,Mt,j);E(C,dt)&&D(st),U.__version=ht.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function Et(F,C,Z){if(C.image.length!==6)return;const st=W(F,C),ot=C.source;e.bindTexture(34067,F.__webglTexture,33984+Z);const ht=n.get(ot);if(ot.version!==ht.__version||st===!0){e.activeTexture(33984+Z),l.pixelStorei(37440,C.flipY),l.pixelStorei(37441,C.premultiplyAlpha),l.pixelStorei(3317,C.unpackAlignment),l.pixelStorei(37443,0);const U=C.isCompressedTexture||C.image[0].isCompressedTexture,et=C.image[0]&&C.image[0].isDataTexture,j=[];for(let J=0;J<6;J++)!U&&!et?j[J]=y(C.image[J],!1,!0,c):j[J]=et?C.image[J].image:C.image[J],j[J]=yt(C,j[J]);const dt=j[0],_t=x(dt)||o,Mt=s.convert(C.format,C.encoding),pt=s.convert(C.type),xt=T(C.internalFormat,Mt,pt,C.encoding),Tt=o&&C.isVideoTexture!==!0,Ft=ht.__version===void 0||st===!0;let ae=w(C,dt,_t);it(34067,C,_t);let z;if(U){Tt&&Ft&&e.texStorage2D(34067,ae,xt,dt.width,dt.height);for(let J=0;J<6;J++){z=j[J].mipmaps;for(let rt=0;rt<z.length;rt++){const mt=z[rt];C.format!==Cn?Mt!==null?Tt?e.compressedTexSubImage2D(34069+J,rt,0,0,mt.width,mt.height,Mt,mt.data):e.compressedTexImage2D(34069+J,rt,xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Tt?e.texSubImage2D(34069+J,rt,0,0,mt.width,mt.height,Mt,pt,mt.data):e.texImage2D(34069+J,rt,xt,mt.width,mt.height,0,Mt,pt,mt.data)}}}else{z=C.mipmaps,Tt&&Ft&&(z.length>0&&ae++,e.texStorage2D(34067,ae,xt,j[0].width,j[0].height));for(let J=0;J<6;J++)if(et){Tt?e.texSubImage2D(34069+J,0,0,0,j[J].width,j[J].height,Mt,pt,j[J].data):e.texImage2D(34069+J,0,xt,j[J].width,j[J].height,0,Mt,pt,j[J].data);for(let rt=0;rt<z.length;rt++){const bt=z[rt].image[J].image;Tt?e.texSubImage2D(34069+J,rt+1,0,0,bt.width,bt.height,Mt,pt,bt.data):e.texImage2D(34069+J,rt+1,xt,bt.width,bt.height,0,Mt,pt,bt.data)}}else{Tt?e.texSubImage2D(34069+J,0,0,0,Mt,pt,j[J]):e.texImage2D(34069+J,0,xt,Mt,pt,j[J]);for(let rt=0;rt<z.length;rt++){const mt=z[rt];Tt?e.texSubImage2D(34069+J,rt+1,0,0,Mt,pt,mt.image[J]):e.texImage2D(34069+J,rt+1,xt,Mt,pt,mt.image[J])}}}E(C,_t)&&D(34067),ht.__version=ot.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function at(F,C,Z,st,ot){const ht=s.convert(Z.format,Z.encoding),U=s.convert(Z.type),et=T(Z.internalFormat,ht,U,Z.encoding);n.get(C).__hasExternalTextures||(ot===32879||ot===35866?e.texImage3D(ot,0,et,C.width,C.height,C.depth,0,ht,U,null):e.texImage2D(ot,0,et,C.width,C.height,0,ht,U,null)),e.bindFramebuffer(36160,F),kt(C)?h.framebufferTexture2DMultisampleEXT(36160,st,ot,n.get(Z).__webglTexture,0,qt(C)):(ot===3553||ot>=34069&&ot<=34074)&&l.framebufferTexture2D(36160,st,ot,n.get(Z).__webglTexture,0),e.bindFramebuffer(36160,null)}function vt(F,C,Z){if(l.bindRenderbuffer(36161,F),C.depthBuffer&&!C.stencilBuffer){let st=33189;if(Z||kt(C)){const ot=C.depthTexture;ot&&ot.isDepthTexture&&(ot.type===Zi?st=36012:ot.type===$i&&(st=33190));const ht=qt(C);kt(C)?h.renderbufferStorageMultisampleEXT(36161,ht,st,C.width,C.height):l.renderbufferStorageMultisample(36161,ht,st,C.width,C.height)}else l.renderbufferStorage(36161,st,C.width,C.height);l.framebufferRenderbuffer(36160,36096,36161,F)}else if(C.depthBuffer&&C.stencilBuffer){const st=qt(C);Z&&kt(C)===!1?l.renderbufferStorageMultisample(36161,st,35056,C.width,C.height):kt(C)?h.renderbufferStorageMultisampleEXT(36161,st,35056,C.width,C.height):l.renderbufferStorage(36161,34041,C.width,C.height),l.framebufferRenderbuffer(36160,33306,36161,F)}else{const st=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ot=0;ot<st.length;ot++){const ht=st[ot],U=s.convert(ht.format,ht.encoding),et=s.convert(ht.type),j=T(ht.internalFormat,U,et,ht.encoding),dt=qt(C);Z&&kt(C)===!1?l.renderbufferStorageMultisample(36161,dt,j,C.width,C.height):kt(C)?h.renderbufferStorageMultisampleEXT(36161,dt,j,C.width,C.height):l.renderbufferStorage(36161,j,C.width,C.height)}}l.bindRenderbuffer(36161,null)}function Ot(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Q(C.depthTexture,0);const st=n.get(C.depthTexture).__webglTexture,ot=qt(C);if(C.depthTexture.format===ns)kt(C)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,st,0,ot):l.framebufferTexture2D(36160,36096,3553,st,0);else if(C.depthTexture.format===or)kt(C)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,st,0,ot):l.framebufferTexture2D(36160,33306,3553,st,0);else throw new Error("Unknown depthTexture format")}function ut(F){const C=n.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ot(C.__webglFramebuffer,F)}else if(Z){C.__webglDepthbuffer=[];for(let st=0;st<6;st++)e.bindFramebuffer(36160,C.__webglFramebuffer[st]),C.__webglDepthbuffer[st]=l.createRenderbuffer(),vt(C.__webglDepthbuffer[st],F,!1)}else e.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=l.createRenderbuffer(),vt(C.__webglDepthbuffer,F,!1);e.bindFramebuffer(36160,null)}function St(F,C,Z){const st=n.get(F);C!==void 0&&at(st.__webglFramebuffer,F,F.texture,36064,3553),Z!==void 0&&ut(F)}function Kt(F){const C=F.texture,Z=n.get(F),st=n.get(C);F.addEventListener("dispose",O),F.isWebGLMultipleRenderTargets!==!0&&(st.__webglTexture===void 0&&(st.__webglTexture=l.createTexture()),st.__version=C.version,r.memory.textures++);const ot=F.isWebGLCubeRenderTarget===!0,ht=F.isWebGLMultipleRenderTargets===!0,U=x(F)||o;if(ot){Z.__webglFramebuffer=[];for(let et=0;et<6;et++)Z.__webglFramebuffer[et]=l.createFramebuffer()}else{if(Z.__webglFramebuffer=l.createFramebuffer(),ht)if(i.drawBuffers){const et=F.texture;for(let j=0,dt=et.length;j<dt;j++){const _t=n.get(et[j]);_t.__webglTexture===void 0&&(_t.__webglTexture=l.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&F.samples>0&&kt(F)===!1){const et=ht?C:[C];Z.__webglMultisampledFramebuffer=l.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,Z.__webglMultisampledFramebuffer);for(let j=0;j<et.length;j++){const dt=et[j];Z.__webglColorRenderbuffer[j]=l.createRenderbuffer(),l.bindRenderbuffer(36161,Z.__webglColorRenderbuffer[j]);const _t=s.convert(dt.format,dt.encoding),Mt=s.convert(dt.type),pt=T(dt.internalFormat,_t,Mt,dt.encoding,F.isXRRenderTarget===!0),xt=qt(F);l.renderbufferStorageMultisample(36161,xt,pt,F.width,F.height),l.framebufferRenderbuffer(36160,36064+j,36161,Z.__webglColorRenderbuffer[j])}l.bindRenderbuffer(36161,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=l.createRenderbuffer(),vt(Z.__webglDepthRenderbuffer,F,!0)),e.bindFramebuffer(36160,null)}}if(ot){e.bindTexture(34067,st.__webglTexture),it(34067,C,U);for(let et=0;et<6;et++)at(Z.__webglFramebuffer[et],F,C,36064,34069+et);E(C,U)&&D(34067),e.unbindTexture()}else if(ht){const et=F.texture;for(let j=0,dt=et.length;j<dt;j++){const _t=et[j],Mt=n.get(_t);e.bindTexture(3553,Mt.__webglTexture),it(3553,_t,U),at(Z.__webglFramebuffer,F,_t,36064+j,3553),E(_t,U)&&D(3553)}e.unbindTexture()}else{let et=3553;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(o?et=F.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(et,st.__webglTexture),it(et,C,U),at(Z.__webglFramebuffer,F,C,36064,et),E(C,U)&&D(et),e.unbindTexture()}F.depthBuffer&&ut(F)}function Yt(F){const C=x(F)||o,Z=F.isWebGLMultipleRenderTargets===!0?F.texture:[F.texture];for(let st=0,ot=Z.length;st<ot;st++){const ht=Z[st];if(E(ht,C)){const U=F.isWebGLCubeRenderTarget?34067:3553,et=n.get(ht).__webglTexture;e.bindTexture(U,et),D(U),e.unbindTexture()}}}function Ht(F){if(o&&F.samples>0&&kt(F)===!1){const C=F.isWebGLMultipleRenderTargets?F.texture:[F.texture],Z=F.width,st=F.height;let ot=16384;const ht=[],U=F.stencilBuffer?33306:36096,et=n.get(F),j=F.isWebGLMultipleRenderTargets===!0;if(j)for(let dt=0;dt<C.length;dt++)e.bindFramebuffer(36160,et.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+dt,36161,null),e.bindFramebuffer(36160,et.__webglFramebuffer),l.framebufferTexture2D(36009,36064+dt,3553,null,0);e.bindFramebuffer(36008,et.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,et.__webglFramebuffer);for(let dt=0;dt<C.length;dt++){ht.push(36064+dt),F.depthBuffer&&ht.push(U);const _t=et.__ignoreDepthValues!==void 0?et.__ignoreDepthValues:!1;if(_t===!1&&(F.depthBuffer&&(ot|=256),F.stencilBuffer&&(ot|=1024)),j&&l.framebufferRenderbuffer(36008,36064,36161,et.__webglColorRenderbuffer[dt]),_t===!0&&(l.invalidateFramebuffer(36008,[U]),l.invalidateFramebuffer(36009,[U])),j){const Mt=n.get(C[dt]).__webglTexture;l.framebufferTexture2D(36009,36064,3553,Mt,0)}l.blitFramebuffer(0,0,Z,st,0,0,Z,st,ot,9728),p&&l.invalidateFramebuffer(36008,ht)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),j)for(let dt=0;dt<C.length;dt++){e.bindFramebuffer(36160,et.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(36160,36064+dt,36161,et.__webglColorRenderbuffer[dt]);const _t=n.get(C[dt]).__webglTexture;e.bindFramebuffer(36160,et.__webglFramebuffer),l.framebufferTexture2D(36009,36064+dt,3553,_t,0)}e.bindFramebuffer(36009,et.__webglMultisampledFramebuffer)}}function qt(F){return Math.min(f,F.samples)}function kt(F){const C=n.get(F);return o&&F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Wt(F){const C=r.render.frame;_.get(F)!==C&&(_.set(F,C),F.update())}function yt(F,C){const Z=F.encoding,st=F.format,ot=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||F.format===lc||Z!==as&&(Z===te?o===!1?t.has("EXT_sRGB")===!0&&st===Cn?(F.format=lc,F.minFilter=pn,F.generateMipmaps=!1):C=ip.sRGBToLinear(C):(st!==Cn||ot!==os)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",Z)),C}this.allocateTextureUnit=k,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=ct,this.setTexture3D=G,this.setTextureCube=X,this.rebindTextures=St,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Yt,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=at,this.useMultisampledRTT=kt}function bM(l,t,e){const n=e.isWebGL2;function i(s,r=null){let o;if(s===os)return 5121;if(s===f_)return 32819;if(s===d_)return 32820;if(s===c_)return 5120;if(s===u_)return 5122;if(s===tp)return 5123;if(s===h_)return 5124;if(s===$i)return 5125;if(s===Zi)return 5126;if(s===Wr)return n?5131:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===p_)return 6406;if(s===Cn)return 6408;if(s===m_)return 6409;if(s===g_)return 6410;if(s===ns)return 6402;if(s===or)return 34041;if(s===lc)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===__)return 6403;if(s===v_)return 36244;if(s===x_)return 33319;if(s===y_)return 33320;if(s===M_)return 36249;if(s===Za||s===Ka||s===Ja||s===Qa)if(r===te)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Za)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Za)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ka)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ja)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qa)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Wu||s===qu||s===Xu||s===ju)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Wu)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qu)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xu)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ju)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===w_)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Yu||s===$u)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Yu)return r===te?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===$u)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zu||s===Ku||s===Ju||s===Qu||s===th||s===eh||s===nh||s===ih||s===sh||s===rh||s===oh||s===ah||s===lh||s===ch)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Zu)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ku)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ju)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Qu)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===th)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===eh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ih)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===oh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ah)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lh)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ch)return r===te?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===tl)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(s===tl)return r===te?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===S_||s===uh||s===hh||s===fh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(s===tl)return o.COMPRESSED_RED_RGTC1_EXT;if(s===uh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Xs?n?34042:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):l[s]!==void 0?l[s]:null}return{convert:i}}class EM extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bo extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}}const DM={type:"move"};class bl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,r=null;const o=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){r=!0;for(const g of t.hand.values()){const m=e.getJointPose(g,n),d=this._getHandJoint(c,g);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&h>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(DM)))}return o!==null&&(o.visible=i!==null),a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class CM extends Xe{constructor(t,e,n,i,s,r,o,a,c,u){if(u=u!==void 0?u:ns,u!==ns&&u!==or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ns&&(n=$i),n===void 0&&u===or&&(n=Xs),super(null,i,s,r,o,a,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Oe,this.minFilter=a!==void 0?a:Oe,this.flipY=!1,this.generateMipmaps=!1}}class TM extends fs{constructor(t,e){super();const n=this;let i=null,s=1,r=null,o="local-floor",a=1,c=null,u=null,f=null,h=null,p=null,_=null;const g=e.getContextAttributes();let m=null,d=null;const v=[],y=[],x=new Set,M=new Map,E=new tn;E.layers.enable(1),E.viewport=new ne;const D=new tn;D.layers.enable(2),D.viewport=new ne;const T=[E,D],w=new EM;w.layers.enable(1),w.layers.enable(2);let b=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=v[X];return $===void 0&&($=new bl,v[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=v[X];return $===void 0&&($=new bl,v[X]=$),$.getGripSpace()},this.getHand=function(X){let $=v[X];return $===void 0&&($=new bl,v[X]=$),$.getHandSpace()};function O(X){const $=y.indexOf(X.inputSource);if($===-1)return;const nt=v[$];nt!==void 0&&nt.dispatchEvent({type:X.type,data:X.inputSource})}function A(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",A),i.removeEventListener("inputsourceschange",R);for(let X=0;X<v.length;X++){const $=y[X];$!==null&&(y[X]=null,v[X].disconnect($))}b=null,N=null,t.setRenderTarget(m),p=null,h=null,f=null,i=null,d=null,G.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",A),i.addEventListener("inputsourceschange",R),g.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:p}),d=new ls(p.framebufferWidth,p.framebufferHeight,{format:Cn,type:os,encoding:t.outputEncoding,stencilBuffer:g.stencil})}else{let $=null,nt=null,it=null;g.depth&&(it=g.stencil?35056:33190,$=g.stencil?or:ns,nt=g.stencil?Xs:$i);const W={colorFormat:32856,depthFormat:it,scaleFactor:s};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(W),i.updateRenderState({layers:[h]}),d=new ls(h.textureWidth,h.textureHeight,{format:Cn,type:os,depthTexture:new CM(h.textureWidth,h.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:g.stencil,encoding:t.outputEncoding,samples:g.antialias?4:0});const wt=t.properties.get(d);wt.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(a),c=null,r=await i.requestReferenceSpace(o),G.setContext(i),G.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function R(X){for(let $=0;$<X.removed.length;$++){const nt=X.removed[$],it=y.indexOf(nt);it>=0&&(y[it]=null,v[it].disconnect(nt))}for(let $=0;$<X.added.length;$++){const nt=X.added[$];let it=y.indexOf(nt);if(it===-1){for(let wt=0;wt<v.length;wt++)if(wt>=y.length){y.push(nt),it=wt;break}else if(y[wt]===null){y[wt]=nt,it=wt;break}if(it===-1)break}const W=v[it];W&&W.connect(nt)}}const L=new B,I=new B;function q(X,$,nt){L.setFromMatrixPosition($.matrixWorld),I.setFromMatrixPosition(nt.matrixWorld);const it=L.distanceTo(I),W=$.projectionMatrix.elements,wt=nt.projectionMatrix.elements,Et=W[14]/(W[10]-1),at=W[14]/(W[10]+1),vt=(W[9]+1)/W[5],Ot=(W[9]-1)/W[5],ut=(W[8]-1)/W[0],St=(wt[8]+1)/wt[0],Kt=Et*ut,Yt=Et*St,Ht=it/(-ut+St),qt=Ht*-ut;$.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(qt),X.translateZ(Ht),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const kt=Et+Ht,Wt=at+Ht,yt=Kt-qt,F=Yt+(it-qt),C=vt*at/Wt*kt,Z=Ot*at/Wt*kt;X.projectionMatrix.makePerspective(yt,F,C,Z,kt,Wt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function k(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;w.near=D.near=E.near=X.near,w.far=D.far=E.far=X.far,(b!==w.near||N!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,N=w.far);const $=X.parent,nt=w.cameras;k(w,$);for(let it=0;it<nt.length;it++)k(nt[it],$);nt.length===2?q(w,E,D):w.projectionMatrix.copy(E.projectionMatrix),Y(X,w,$)};function Y(X,$,nt){nt===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(nt.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0);const it=X.children;for(let W=0,wt=it.length;W<wt;W++)it[W].updateMatrixWorld(!0);X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=cc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return a},this.setFoveation=function(X){a=X,h!==null&&(h.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.getPlanes=function(){return x};let Q=null;function ct(X,$){if(u=$.getViewerPose(c||r),_=$,u!==null){const nt=u.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let it=!1;nt.length!==w.cameras.length&&(w.cameras.length=0,it=!0);for(let W=0;W<nt.length;W++){const wt=nt[W];let Et=null;if(p!==null)Et=p.getViewport(wt);else{const vt=f.getViewSubImage(h,wt);Et=vt.viewport,W===0&&(t.setRenderTargetTextures(d,vt.colorTexture,h.ignoreDepthValues?void 0:vt.depthStencilTexture),t.setRenderTarget(d))}let at=T[W];at===void 0&&(at=new tn,at.layers.enable(W),at.viewport=new ne,T[W]=at),at.matrix.fromArray(wt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(wt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Et.x,Et.y,Et.width,Et.height),W===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),it===!0&&w.cameras.push(at)}}for(let nt=0;nt<v.length;nt++){const it=y[nt],W=v[nt];it!==null&&W!==void 0&&W.update(it,$,c||r)}if(Q&&Q(X,$),$.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:$.detectedPlanes});let nt=null;for(const it of x)$.detectedPlanes.has(it)||(nt===null&&(nt=[]),nt.push(it));if(nt!==null)for(const it of nt)x.delete(it),M.delete(it),n.dispatchEvent({type:"planeremoved",data:it});for(const it of $.detectedPlanes)if(!x.has(it))x.add(it),M.set(it,$.lastChangedTime),n.dispatchEvent({type:"planeadded",data:it});else{const W=M.get(it);it.lastChangedTime>W&&(M.set(it,it.lastChangedTime),n.dispatchEvent({type:"planechanged",data:it}))}}_=null}const G=new dp;G.setAnimationLoop(ct),this.setAnimationLoop=function(X){Q=X},this.dispose=function(){}}}function AM(l,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,up(l)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function i(m,d,v,y,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),_(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),g(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?a(m,d,v,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===qe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===qe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=t.get(d).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const y=l.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*y,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function a(m,d,v,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===qe&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function g(m,d){const v=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function PM(l,t,e,n){let i={},s={},r=[];const o=e.isWebGL2?l.getParameter(35375):0;function a(v,y){const x=y.program;n.uniformBlockBinding(v,x)}function c(v,y){let x=i[v.id];x===void 0&&(_(v),x=u(v),i[v.id]=x,v.addEventListener("dispose",m));const M=y.program;n.updateUBOMapping(v,M);const E=t.render.frame;s[v.id]!==E&&(h(v),s[v.id]=E)}function u(v){const y=f();v.__bindingPointIndex=y;const x=l.createBuffer(),M=v.__size,E=v.usage;return l.bindBuffer(35345,x),l.bufferData(35345,M,E),l.bindBuffer(35345,null),l.bindBufferBase(35345,y,x),x}function f(){for(let v=0;v<o;v++)if(r.indexOf(v)===-1)return r.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const y=i[v.id],x=v.uniforms,M=v.__cache;l.bindBuffer(35345,y);for(let E=0,D=x.length;E<D;E++){const T=x[E];if(p(T,E,M)===!0){const w=T.__offset,b=Array.isArray(T.value)?T.value:[T.value];let N=0;for(let O=0;O<b.length;O++){const A=b[O],R=g(A);typeof A=="number"?(T.__data[0]=A,l.bufferSubData(35345,w+N,T.__data)):A.isMatrix3?(T.__data[0]=A.elements[0],T.__data[1]=A.elements[1],T.__data[2]=A.elements[2],T.__data[3]=A.elements[0],T.__data[4]=A.elements[3],T.__data[5]=A.elements[4],T.__data[6]=A.elements[5],T.__data[7]=A.elements[0],T.__data[8]=A.elements[6],T.__data[9]=A.elements[7],T.__data[10]=A.elements[8],T.__data[11]=A.elements[0]):(A.toArray(T.__data,N),N+=R.storage/Float32Array.BYTES_PER_ELEMENT)}l.bufferSubData(35345,w,T.__data)}}l.bindBuffer(35345,null)}function p(v,y,x){const M=v.value;if(x[y]===void 0){if(typeof M=="number")x[y]=M;else{const E=Array.isArray(M)?M:[M],D=[];for(let T=0;T<E.length;T++)D.push(E[T].clone());x[y]=D}return!0}else if(typeof M=="number"){if(x[y]!==M)return x[y]=M,!0}else{const E=Array.isArray(x[y])?x[y]:[x[y]],D=Array.isArray(M)?M:[M];for(let T=0;T<E.length;T++){const w=E[T];if(w.equals(D[T])===!1)return w.copy(D[T]),!0}}return!1}function _(v){const y=v.uniforms;let x=0;const M=16;let E=0;for(let D=0,T=y.length;D<T;D++){const w=y[D],b={boundary:0,storage:0},N=Array.isArray(w.value)?w.value:[w.value];for(let O=0,A=N.length;O<A;O++){const R=N[O],L=g(R);b.boundary+=L.boundary,b.storage+=L.storage}if(w.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=x,D>0){E=x%M;const O=M-E;E!==0&&O-b.boundary<0&&(x+=M-E,w.__offset=x)}x+=b.storage}return E=x%M,E>0&&(x+=M-E),v.__size=x,v.__cache={},this}function g(v){const y={boundary:0,storage:0};return typeof v=="number"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const x=r.indexOf(y.__bindingPointIndex);r.splice(x,1),l.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function d(){for(const v in i)l.deleteBuffer(i[v]);r=[],i={},s={}}return{bind:a,update:c,dispose:d}}function LM(){const l=Xr("canvas");return l.style.display="block",l}class vp{constructor(t={}){const{canvas:e=LM(),context:n=null,depth:i=!0,stencil:s=!0,alpha:r=!1,antialias:o=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let h;n!==null?h=n.getContextAttributes().alpha:h=r;let p=null,_=null;const g=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=as,this.useLegacyLights=!0,this.toneMapping=ai,this.toneMappingExposure=1;const d=this;let v=!1,y=0,x=0,M=null,E=-1,D=null;const T=new ne,w=new ne;let b=null,N=e.width,O=e.height,A=1,R=null,L=null;const I=new ne(0,0,N,O),q=new ne(0,0,N,O);let k=!1;const Y=new jc;let Q=!1,ct=!1,G=null;const X=new me,$=new B,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function it(){return M===null?A:1}let W=n;function wt(P,H){for(let K=0;K<P.length;K++){const V=P[K],tt=e.getContext(V,H);if(tt!==null)return tt}return null}try{const P={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vc}`),e.addEventListener("webglcontextlost",xt,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",Ft,!1),W===null){const H=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&H.shift(),W=wt(H,P),W===null)throw wt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let Et,at,vt,Ot,ut,St,Kt,Yt,Ht,qt,kt,Wt,yt,F,C,Z,st,ot,ht,U,et,j,dt,_t;function Mt(){Et=new Gx(W),at=new Nx(W,Et,t),Et.init(at),j=new bM(W,Et,at),vt=new wM(W,Et,at),Ot=new qx,ut=new lM,St=new SM(W,Et,vt,ut,at,j,Ot),Kt=new Ox(d),Yt=new Vx(d),Ht=new n0(W,at),dt=new Fx(W,Et,Ht,at),qt=new Hx(W,Ht,Ot,dt),kt=new $x(W,qt,Ht,Ot),ht=new Yx(W,at,St),Z=new Ux(ut),Wt=new aM(d,Kt,Yt,Et,at,dt,Z),yt=new AM(d,ut),F=new uM,C=new gM(Et,at),ot=new Rx(d,Kt,Yt,vt,kt,h,a),st=new MM(d,kt,at),_t=new PM(W,Ot,at,vt),U=new Ix(W,Et,Ot,at),et=new Wx(W,Et,Ot,at),Ot.programs=Wt.programs,d.capabilities=at,d.extensions=Et,d.properties=ut,d.renderLists=F,d.shadowMap=st,d.state=vt,d.info=Ot}Mt();const pt=new TM(d,W);this.xr=pt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const P=Et.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=Et.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(P){P!==void 0&&(A=P,this.setSize(N,O,!1))},this.getSize=function(P){return P.set(N,O)},this.setSize=function(P,H,K=!0){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=P,O=H,e.width=Math.floor(P*A),e.height=Math.floor(H*A),K===!0&&(e.style.width=P+"px",e.style.height=H+"px"),this.setViewport(0,0,P,H)},this.getDrawingBufferSize=function(P){return P.set(N*A,O*A).floor()},this.setDrawingBufferSize=function(P,H,K){N=P,O=H,A=K,e.width=Math.floor(P*K),e.height=Math.floor(H*K),this.setViewport(0,0,P,H)},this.getCurrentViewport=function(P){return P.copy(T)},this.getViewport=function(P){return P.copy(I)},this.setViewport=function(P,H,K,V){P.isVector4?I.set(P.x,P.y,P.z,P.w):I.set(P,H,K,V),vt.viewport(T.copy(I).multiplyScalar(A).floor())},this.getScissor=function(P){return P.copy(q)},this.setScissor=function(P,H,K,V){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,H,K,V),vt.scissor(w.copy(q).multiplyScalar(A).floor())},this.getScissorTest=function(){return k},this.setScissorTest=function(P){vt.setScissorTest(k=P)},this.setOpaqueSort=function(P){R=P},this.setTransparentSort=function(P){L=P},this.getClearColor=function(P){return P.copy(ot.getClearColor())},this.setClearColor=function(){ot.setClearColor.apply(ot,arguments)},this.getClearAlpha=function(){return ot.getClearAlpha()},this.setClearAlpha=function(){ot.setClearAlpha.apply(ot,arguments)},this.clear=function(P=!0,H=!0,K=!0){let V=0;P&&(V|=16384),H&&(V|=256),K&&(V|=1024),W.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",xt,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",Ft,!1),F.dispose(),C.dispose(),ut.dispose(),Kt.dispose(),Yt.dispose(),kt.dispose(),dt.dispose(),_t.dispose(),Wt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",bt),pt.removeEventListener("sessionend",Jt),G&&(G.dispose(),G=null),ie.stop()};function xt(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const P=Ot.autoReset,H=st.enabled,K=st.autoUpdate,V=st.needsUpdate,tt=st.type;Mt(),Ot.autoReset=P,st.enabled=H,st.autoUpdate=K,st.needsUpdate=V,st.type=tt}function Ft(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function ae(P){const H=P.target;H.removeEventListener("dispose",ae),z(H)}function z(P){J(P),ut.remove(P)}function J(P){const H=ut.get(P).programs;H!==void 0&&(H.forEach(function(K){Wt.releaseProgram(K)}),P.isShaderMaterial&&Wt.releaseShaderCache(P))}this.renderBufferDirect=function(P,H,K,V,tt,Dt){H===null&&(H=nt);const Ct=tt.isMesh&&tt.matrixWorld.determinant()<0,At=qp(P,H,K,V,tt);vt.setMaterial(V,Ct);let Lt=K.index,It=1;V.wireframe===!0&&(Lt=qt.getWireframeAttribute(K),It=2);const Nt=K.drawRange,Ut=K.attributes.position;let jt=Nt.start*It,Ie=(Nt.start+Nt.count)*It;Dt!==null&&(jt=Math.max(jt,Dt.start*It),Ie=Math.min(Ie,(Dt.start+Dt.count)*It)),Lt!==null?(jt=Math.max(jt,0),Ie=Math.min(Ie,Lt.count)):Ut!=null&&(jt=Math.max(jt,0),Ie=Math.min(Ie,Ut.count));const yn=Ie-jt;if(yn<0||yn===1/0)return;dt.setup(tt,V,At,K,Lt);let Ii,ue=U;if(Lt!==null&&(Ii=Ht.get(Lt),ue=et,ue.setIndex(Ii)),tt.isMesh)V.wireframe===!0?(vt.setLineWidth(V.wireframeLinewidth*it()),ue.setMode(1)):ue.setMode(4);else if(tt.isLine){let Vt=V.linewidth;Vt===void 0&&(Vt=1),vt.setLineWidth(Vt*it()),tt.isLineSegments?ue.setMode(1):tt.isLineLoop?ue.setMode(2):ue.setMode(3)}else tt.isPoints?ue.setMode(0):tt.isSprite&&ue.setMode(4);if(tt.isInstancedMesh)ue.renderInstances(jt,yn,tt.count);else if(K.isInstancedBufferGeometry){const Vt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ta=Math.min(K.instanceCount,Vt);ue.renderInstances(jt,yn,Ta)}else ue.render(jt,yn)},this.compile=function(P,H){function K(V,tt,Dt){V.transparent===!0&&V.side===si&&V.forceSinglePass===!1?(V.side=qe,V.needsUpdate=!0,fo(V,tt,Dt),V.side=Ti,V.needsUpdate=!0,fo(V,tt,Dt),V.side=si):fo(V,tt,Dt)}_=C.get(P),_.init(),m.push(_),P.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights(d.useLegacyLights),P.traverse(function(V){const tt=V.material;if(tt)if(Array.isArray(tt))for(let Dt=0;Dt<tt.length;Dt++){const Ct=tt[Dt];K(Ct,P,V)}else K(tt,P,V)}),m.pop(),_=null};let rt=null;function mt(P){rt&&rt(P)}function bt(){ie.stop()}function Jt(){ie.start()}const ie=new dp;ie.setAnimationLoop(mt),typeof self<"u"&&ie.setContext(self),this.setAnimationLoop=function(P){rt=P,pt.setAnimationLoop(P),P===null?ie.stop():ie.start()},pt.addEventListener("sessionstart",bt),pt.addEventListener("sessionend",Jt),this.render=function(P,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(H),H=pt.getCamera()),P.isScene===!0&&P.onBeforeRender(d,P,H,M),_=C.get(P,m.length),_.init(),m.push(_),X.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Y.setFromProjectionMatrix(X),ct=this.localClippingEnabled,Q=Z.init(this.clippingPlanes,ct),p=F.get(P,g.length),p.init(),g.push(p),Ee(P,H,0,d.sortObjects),p.finish(),d.sortObjects===!0&&p.sort(R,L),Q===!0&&Z.beginShadows();const K=_.state.shadowsArray;if(st.render(K,P,H),Q===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset(),ot.render(p,P),_.setupLights(d.useLegacyLights),H.isArrayCamera){const V=H.cameras;for(let tt=0,Dt=V.length;tt<Dt;tt++){const Ct=V[tt];fi(p,P,Ct,Ct.viewport)}}else fi(p,P,H);M!==null&&(St.updateMultisampleRenderTarget(M),St.updateRenderTargetMipmap(M)),P.isScene===!0&&P.onAfterRender(d,P,H),dt.resetDefaultState(),E=-1,D=null,m.pop(),m.length>0?_=m[m.length-1]:_=null,g.pop(),g.length>0?p=g[g.length-1]:p=null};function Ee(P,H,K,V){if(P.visible===!1)return;if(P.layers.test(H.layers)){if(P.isGroup)K=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(H);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Y.intersectsSprite(P)){V&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);const Ct=kt.update(P),At=P.material;At.visible&&p.push(P,Ct,At,K,$.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(P.isSkinnedMesh&&P.skeleton.frame!==Ot.render.frame&&(P.skeleton.update(),P.skeleton.frame=Ot.render.frame),!P.frustumCulled||Y.intersectsObject(P))){V&&$.setFromMatrixPosition(P.matrixWorld).applyMatrix4(X);const Ct=kt.update(P),At=P.material;if(Array.isArray(At)){const Lt=Ct.groups;for(let It=0,Nt=Lt.length;It<Nt;It++){const Ut=Lt[It],jt=At[Ut.materialIndex];jt&&jt.visible&&p.push(P,Ct,jt,K,$.z,Ut)}}else At.visible&&p.push(P,Ct,At,K,$.z,null)}}const Dt=P.children;for(let Ct=0,At=Dt.length;Ct<At;Ct++)Ee(Dt[Ct],H,K,V)}function fi(P,H,K,V){const tt=P.opaque,Dt=P.transmissive,Ct=P.transparent;_.setupLightsView(K),Q===!0&&Z.setGlobalState(d.clippingPlanes,K),Dt.length>0&&le(tt,Dt,H,K),V&&vt.viewport(T.copy(V)),tt.length>0&&an(tt,H,K),Dt.length>0&&an(Dt,H,K),Ct.length>0&&an(Ct,H,K),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function le(P,H,K,V){if(G===null){const At=at.isWebGL2;G=new ls(1024,1024,{generateMipmaps:!0,type:Et.has("EXT_color_buffer_half_float")?Wr:os,minFilter:Hr,samples:At&&o===!0?4:0})}const tt=d.getRenderTarget();d.setRenderTarget(G),d.clear();const Dt=d.toneMapping;d.toneMapping=ai,an(P,K,V),St.updateMultisampleRenderTarget(G),St.updateRenderTargetMipmap(G);let Ct=!1;for(let At=0,Lt=H.length;At<Lt;At++){const It=H[At],Nt=It.object,Ut=It.geometry,jt=It.material,Ie=It.group;if(jt.side===si&&Nt.layers.test(V.layers)){const yn=jt.side;jt.side=qe,jt.needsUpdate=!0,Ln(Nt,K,V,Ut,jt,Ie),jt.side=yn,jt.needsUpdate=!0,Ct=!0}}Ct===!0&&(St.updateMultisampleRenderTarget(G),St.updateRenderTargetMipmap(G)),d.setRenderTarget(tt),d.toneMapping=Dt}function an(P,H,K){const V=H.isScene===!0?H.overrideMaterial:null;for(let tt=0,Dt=P.length;tt<Dt;tt++){const Ct=P[tt],At=Ct.object,Lt=Ct.geometry,It=V===null?Ct.material:V,Nt=Ct.group;At.layers.test(K.layers)&&Ln(At,H,K,Lt,It,Nt)}}function Ln(P,H,K,V,tt,Dt){P.onBeforeRender(d,H,K,V,tt,Dt),P.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),tt.onBeforeRender(d,H,K,V,P,Dt),tt.transparent===!0&&tt.side===si&&tt.forceSinglePass===!1?(tt.side=qe,tt.needsUpdate=!0,d.renderBufferDirect(K,H,V,tt,P,Dt),tt.side=Ti,tt.needsUpdate=!0,d.renderBufferDirect(K,H,V,tt,P,Dt),tt.side=si):d.renderBufferDirect(K,H,V,tt,P,Dt),P.onAfterRender(d,H,K,V,tt,Dt)}function fo(P,H,K){H.isScene!==!0&&(H=nt);const V=ut.get(P),tt=_.state.lights,Dt=_.state.shadowsArray,Ct=tt.state.version,At=Wt.getParameters(P,tt.state,Dt,H,K),Lt=Wt.getProgramCacheKey(At);let It=V.programs;V.environment=P.isMeshStandardMaterial?H.environment:null,V.fog=H.fog,V.envMap=(P.isMeshStandardMaterial?Yt:Kt).get(P.envMap||V.environment),It===void 0&&(P.addEventListener("dispose",ae),It=new Map,V.programs=It);let Nt=It.get(Lt);if(Nt!==void 0){if(V.currentProgram===Nt&&V.lightsStateVersion===Ct)return lu(P,At),Nt}else At.uniforms=Wt.getUniforms(P),P.onBuild(K,At,d),P.onBeforeCompile(At,d),Nt=Wt.acquireProgram(At,Lt),It.set(Lt,Nt),V.uniforms=At.uniforms;const Ut=V.uniforms;(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ut.clippingPlanes=Z.uniform),lu(P,At),V.needsLights=jp(P),V.lightsStateVersion=Ct,V.needsLights&&(Ut.ambientLightColor.value=tt.state.ambient,Ut.lightProbe.value=tt.state.probe,Ut.directionalLights.value=tt.state.directional,Ut.directionalLightShadows.value=tt.state.directionalShadow,Ut.spotLights.value=tt.state.spot,Ut.spotLightShadows.value=tt.state.spotShadow,Ut.rectAreaLights.value=tt.state.rectArea,Ut.ltc_1.value=tt.state.rectAreaLTC1,Ut.ltc_2.value=tt.state.rectAreaLTC2,Ut.pointLights.value=tt.state.point,Ut.pointLightShadows.value=tt.state.pointShadow,Ut.hemisphereLights.value=tt.state.hemi,Ut.directionalShadowMap.value=tt.state.directionalShadowMap,Ut.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ut.spotShadowMap.value=tt.state.spotShadowMap,Ut.spotLightMatrix.value=tt.state.spotLightMatrix,Ut.spotLightMap.value=tt.state.spotLightMap,Ut.pointShadowMap.value=tt.state.pointShadowMap,Ut.pointShadowMatrix.value=tt.state.pointShadowMatrix);const jt=Nt.getUniforms(),Ie=Ko.seqWithValue(jt.seq,Ut);return V.currentProgram=Nt,V.uniformsList=Ie,Nt}function lu(P,H){const K=ut.get(P);K.outputEncoding=H.outputEncoding,K.instancing=H.instancing,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function qp(P,H,K,V,tt){H.isScene!==!0&&(H=nt),St.resetTextureUnits();const Dt=H.fog,Ct=V.isMeshStandardMaterial?H.environment:null,At=M===null?d.outputEncoding:M.isXRRenderTarget===!0?M.texture.encoding:as,Lt=(V.isMeshStandardMaterial?Yt:Kt).get(V.envMap||Ct),It=V.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Nt=!!V.normalMap&&!!K.attributes.tangent,Ut=!!K.morphAttributes.position,jt=!!K.morphAttributes.normal,Ie=!!K.morphAttributes.color,yn=V.toneMapped?d.toneMapping:ai,Ii=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ue=Ii!==void 0?Ii.length:0,Vt=ut.get(V),Ta=_.state.lights;if(Q===!0&&(ct===!0||P!==D)){const Ye=P===D&&V.id===E;Z.setState(V,P,Ye)}let Me=!1;V.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ta.state.version||Vt.outputEncoding!==At||tt.isInstancedMesh&&Vt.instancing===!1||!tt.isInstancedMesh&&Vt.instancing===!0||tt.isSkinnedMesh&&Vt.skinning===!1||!tt.isSkinnedMesh&&Vt.skinning===!0||Vt.envMap!==Lt||V.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Z.numPlanes||Vt.numIntersection!==Z.numIntersection)||Vt.vertexAlphas!==It||Vt.vertexTangents!==Nt||Vt.morphTargets!==Ut||Vt.morphNormals!==jt||Vt.morphColors!==Ie||Vt.toneMapping!==yn||at.isWebGL2===!0&&Vt.morphTargetsCount!==ue)&&(Me=!0):(Me=!0,Vt.__version=V.version);let Ni=Vt.currentProgram;Me===!0&&(Ni=fo(V,H,tt));let cu=!1,hr=!1,Aa=!1;const Ne=Ni.getUniforms(),Ui=Vt.uniforms;if(vt.useProgram(Ni.program)&&(cu=!0,hr=!0,Aa=!0),V.id!==E&&(E=V.id,hr=!0),cu||D!==P){if(Ne.setValue(W,"projectionMatrix",P.projectionMatrix),at.logarithmicDepthBuffer&&Ne.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),D!==P&&(D=P,hr=!0,Aa=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const Ye=Ne.map.cameraPosition;Ye!==void 0&&Ye.setValue(W,$.setFromMatrixPosition(P.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Ne.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||tt.isSkinnedMesh)&&Ne.setValue(W,"viewMatrix",P.matrixWorldInverse)}if(tt.isSkinnedMesh){Ne.setOptional(W,tt,"bindMatrix"),Ne.setOptional(W,tt,"bindMatrixInverse");const Ye=tt.skeleton;Ye&&(at.floatVertexTextures?(Ye.boneTexture===null&&Ye.computeBoneTexture(),Ne.setValue(W,"boneTexture",Ye.boneTexture,St),Ne.setValue(W,"boneTextureSize",Ye.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Pa=K.morphAttributes;if((Pa.position!==void 0||Pa.normal!==void 0||Pa.color!==void 0&&at.isWebGL2===!0)&&ht.update(tt,K,Ni),(hr||Vt.receiveShadow!==tt.receiveShadow)&&(Vt.receiveShadow=tt.receiveShadow,Ne.setValue(W,"receiveShadow",tt.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Ui.envMap.value=Lt,Ui.flipEnvMap.value=Lt.isCubeTexture&&Lt.isRenderTargetTexture===!1?-1:1),hr&&(Ne.setValue(W,"toneMappingExposure",d.toneMappingExposure),Vt.needsLights&&Xp(Ui,Aa),Dt&&V.fog===!0&&yt.refreshFogUniforms(Ui,Dt),yt.refreshMaterialUniforms(Ui,V,A,O,G),Ko.upload(W,Vt.uniformsList,Ui,St)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Ko.upload(W,Vt.uniformsList,Ui,St),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Ne.setValue(W,"center",tt.center),Ne.setValue(W,"modelViewMatrix",tt.modelViewMatrix),Ne.setValue(W,"normalMatrix",tt.normalMatrix),Ne.setValue(W,"modelMatrix",tt.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ye=V.uniformsGroups;for(let La=0,Yp=Ye.length;La<Yp;La++)if(at.isWebGL2){const uu=Ye[La];_t.update(uu,Ni),_t.bind(uu,Ni)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ni}function Xp(P,H){P.ambientLightColor.needsUpdate=H,P.lightProbe.needsUpdate=H,P.directionalLights.needsUpdate=H,P.directionalLightShadows.needsUpdate=H,P.pointLights.needsUpdate=H,P.pointLightShadows.needsUpdate=H,P.spotLights.needsUpdate=H,P.spotLightShadows.needsUpdate=H,P.rectAreaLights.needsUpdate=H,P.hemisphereLights.needsUpdate=H}function jp(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return x},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(P,H,K){ut.get(P.texture).__webglTexture=H,ut.get(P.depthTexture).__webglTexture=K;const V=ut.get(P);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=K===void 0,V.__autoAllocateDepthBuffer||Et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(P,H){const K=ut.get(P);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(P,H=0,K=0){M=P,y=H,x=K;let V=!0,tt=null,Dt=!1,Ct=!1;if(P){const Lt=ut.get(P);Lt.__useDefaultFramebuffer!==void 0?(vt.bindFramebuffer(36160,null),V=!1):Lt.__webglFramebuffer===void 0?St.setupRenderTarget(P):Lt.__hasExternalTextures&&St.rebindTextures(P,ut.get(P.texture).__webglTexture,ut.get(P.depthTexture).__webglTexture);const It=P.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Ct=!0);const Nt=ut.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(tt=Nt[H],Dt=!0):at.isWebGL2&&P.samples>0&&St.useMultisampledRTT(P)===!1?tt=ut.get(P).__webglMultisampledFramebuffer:tt=Nt,T.copy(P.viewport),w.copy(P.scissor),b=P.scissorTest}else T.copy(I).multiplyScalar(A).floor(),w.copy(q).multiplyScalar(A).floor(),b=k;if(vt.bindFramebuffer(36160,tt)&&at.drawBuffers&&V&&vt.drawBuffers(P,tt),vt.viewport(T),vt.scissor(w),vt.setScissorTest(b),Dt){const Lt=ut.get(P.texture);W.framebufferTexture2D(36160,36064,34069+H,Lt.__webglTexture,K)}else if(Ct){const Lt=ut.get(P.texture),It=H||0;W.framebufferTextureLayer(36160,36064,Lt.__webglTexture,K||0,It)}E=-1},this.readRenderTargetPixels=function(P,H,K,V,tt,Dt,Ct){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=ut.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Ct!==void 0&&(At=At[Ct]),At){vt.bindFramebuffer(36160,At);try{const Lt=P.texture,It=Lt.format,Nt=Lt.type;if(It!==Cn&&j.convert(It)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Nt===Wr&&(Et.has("EXT_color_buffer_half_float")||at.isWebGL2&&Et.has("EXT_color_buffer_float"));if(Nt!==os&&j.convert(Nt)!==W.getParameter(35738)&&!(Nt===Zi&&(at.isWebGL2||Et.has("OES_texture_float")||Et.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=P.width-V&&K>=0&&K<=P.height-tt&&W.readPixels(H,K,V,tt,j.convert(It),j.convert(Nt),Dt)}finally{const Lt=M!==null?ut.get(M).__webglFramebuffer:null;vt.bindFramebuffer(36160,Lt)}}},this.copyFramebufferToTexture=function(P,H,K=0){const V=Math.pow(2,-K),tt=Math.floor(H.image.width*V),Dt=Math.floor(H.image.height*V);St.setTexture2D(H,0),W.copyTexSubImage2D(3553,K,0,0,P.x,P.y,tt,Dt),vt.unbindTexture()},this.copyTextureToTexture=function(P,H,K,V=0){const tt=H.image.width,Dt=H.image.height,Ct=j.convert(K.format),At=j.convert(K.type);St.setTexture2D(K,0),W.pixelStorei(37440,K.flipY),W.pixelStorei(37441,K.premultiplyAlpha),W.pixelStorei(3317,K.unpackAlignment),H.isDataTexture?W.texSubImage2D(3553,V,P.x,P.y,tt,Dt,Ct,At,H.image.data):H.isCompressedTexture?W.compressedTexSubImage2D(3553,V,P.x,P.y,H.mipmaps[0].width,H.mipmaps[0].height,Ct,H.mipmaps[0].data):W.texSubImage2D(3553,V,P.x,P.y,Ct,At,H.image),V===0&&K.generateMipmaps&&W.generateMipmap(3553),vt.unbindTexture()},this.copyTextureToTexture3D=function(P,H,K,V,tt=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Dt=P.max.x-P.min.x+1,Ct=P.max.y-P.min.y+1,At=P.max.z-P.min.z+1,Lt=j.convert(V.format),It=j.convert(V.type);let Nt;if(V.isData3DTexture)St.setTexture3D(V,0),Nt=32879;else if(V.isDataArrayTexture)St.setTexture2DArray(V,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,V.flipY),W.pixelStorei(37441,V.premultiplyAlpha),W.pixelStorei(3317,V.unpackAlignment);const Ut=W.getParameter(3314),jt=W.getParameter(32878),Ie=W.getParameter(3316),yn=W.getParameter(3315),Ii=W.getParameter(32877),ue=K.isCompressedTexture?K.mipmaps[0]:K.image;W.pixelStorei(3314,ue.width),W.pixelStorei(32878,ue.height),W.pixelStorei(3316,P.min.x),W.pixelStorei(3315,P.min.y),W.pixelStorei(32877,P.min.z),K.isDataTexture||K.isData3DTexture?W.texSubImage3D(Nt,tt,H.x,H.y,H.z,Dt,Ct,At,Lt,It,ue.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Nt,tt,H.x,H.y,H.z,Dt,Ct,At,Lt,ue.data)):W.texSubImage3D(Nt,tt,H.x,H.y,H.z,Dt,Ct,At,Lt,It,ue),W.pixelStorei(3314,Ut),W.pixelStorei(32878,jt),W.pixelStorei(3316,Ie),W.pixelStorei(3315,yn),W.pixelStorei(32877,Ii),tt===0&&V.generateMipmaps&&W.generateMipmap(Nt),vt.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?St.setTextureCube(P,0):P.isData3DTexture?St.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?St.setTexture2DArray(P,0):St.setTexture2D(P,0),vt.unbindTexture()},this.resetState=function(){y=0,x=0,M=null,vt.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}}class RM extends vp{}RM.prototype.isWebGL1Renderer=!0;class FM extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class Sa extends hi{constructor(t=1,e=1,n=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],h=[],p=[];let _=0;const g=[],m=n/2;let d=0;v(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new sn(f,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(p,2));function v(){const x=new B,M=new B;let E=0;const D=(e-t)/n;for(let T=0;T<=s;T++){const w=[],b=T/s,N=b*(e-t)+t;for(let O=0;O<=i;O++){const A=O/i,R=A*a+o,L=Math.sin(R),I=Math.cos(R);M.x=N*L,M.y=-b*n+m,M.z=N*I,f.push(M.x,M.y,M.z),x.set(L,D,I).normalize(),h.push(x.x,x.y,x.z),p.push(A,1-b),w.push(_++)}g.push(w)}for(let T=0;T<i;T++)for(let w=0;w<s;w++){const b=g[w][T],N=g[w+1][T],O=g[w+1][T+1],A=g[w][T+1];u.push(b,N,A),u.push(N,O,A),E+=6}c.addGroup(d,E,0),d+=E}function y(x){const M=_,E=new Pt,D=new B;let T=0;const w=x===!0?t:e,b=x===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),_++;const N=_;for(let O=0;O<=i;O++){const R=O/i*a+o,L=Math.cos(R),I=Math.sin(R);D.x=w*I,D.y=m*b,D.z=w*L,f.push(D.x,D.y,D.z),h.push(0,b,0),E.x=L*.5+.5,E.y=I*.5*b+.5,p.push(E.x,E.y),_++}for(let O=0;O<i;O++){const A=M+O,R=N+O;x===!0?u.push(R,R+1,A):u.push(R+1,R,A),T+=3}c.addGroup(d,T,x===!0?1:2),d+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends hi{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:r,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const a=Math.min(r+o,Math.PI);let c=0;const u=[],f=new B,h=new B,p=[],_=[],g=[],m=[];for(let d=0;d<=n;d++){const v=[],y=d/n;let x=0;d===0&&r===0?x=.5/e:d===n&&a===Math.PI&&(x=-.5/e);for(let M=0;M<=e;M++){const E=M/e;f.x=-t*Math.cos(i+E*s)*Math.sin(r+y*o),f.y=t*Math.cos(r+y*o),f.z=t*Math.sin(i+E*s)*Math.sin(r+y*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),m.push(E+x,1-y),v.push(c++)}u.push(v)}for(let d=0;d<n;d++)for(let v=0;v<e;v++){const y=u[d][v+1],x=u[d][v],M=u[d+1][v],E=u[d+1][v+1];(d!==0||r>0)&&p.push(y,x,E),(d!==n-1||a<Math.PI)&&p.push(x,M,E)}this.setIndex(p),this.setAttribute("position",new sn(_,3)),this.setAttribute("normal",new sn(g,3)),this.setAttribute("uv",new sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class io extends cr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class IM extends cr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hc,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Gc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Jh={enabled:!1,files:{},add:function(l,t){this.enabled!==!1&&(this.files[l]=t)},get:function(l){if(this.enabled!==!1)return this.files[l]},remove:function(l){delete this.files[l]},clear:function(){this.files={}}};class NM{constructor(t,e,n){const i=this;let s=!1,r=0,o=0,a;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,r,o),s=!0},this.itemEnd=function(u){r++,i.onProgress!==void 0&&i.onProgress(u,r,o),r===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return a?a(u):u},this.setURLModifier=function(u){return a=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const UM=new NM;class xp{constructor(t){this.manager=t!==void 0?t:UM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}class OM extends xp{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,r=Jh.get(t);if(r!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(r),s.manager.itemEnd(t)},0),r;const o=Xr("img");function a(){u(),Jh.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",a,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",a,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class $c extends xp{constructor(t){super(t)}load(t,e,n,i){const s=new Xe,r=new OM(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class yp extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const El=new me,Qh=new B,tf=new B;class zM{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.map=null,this.mapPass=null,this.matrix=new me,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jc,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Qh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qh),tf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tf),e.updateMatrixWorld(),El.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(El),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(El)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ef=new me,xr=new B,Dl=new B;class BM extends zM{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Pt(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),Dl.copy(n.position),Dl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Dl),n.updateMatrixWorld(),i.makeTranslation(-xr.x,-xr.y,-xr.z),ef.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ef)}}class Mp extends yp{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new BM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kM extends yp{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class VM{constructor(t,e,n=0,i=1/0){this.ray=new op(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new qc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,n=[]){return hc(t,this,n,e),n.sort(nf),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)hc(t[i],this,n,e);return n.sort(nf),n}}function nf(l,t){return l.distance-t.distance}function hc(l,t,e,n){if(l.layers.test(t.layers)&&l.raycast(t,e),n===!0){const i=l.children;for(let s=0,r=i.length;s<r;s++)hc(i[s],t,e,!0)}}class sf{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);const rf={type:"change"},Cl={type:"start"},of={type:"end"};class GM extends fs{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ps.ROTATE,MIDDLE:ps.DOLLY,RIGHT:ps.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",Wt),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Wt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rf),n.update(),s=i.NONE},this.update=function(){const U=new B,et=new cs().setFromUnitVectors(t.up,new B(0,1,0)),j=et.clone().invert(),dt=new B,_t=new cs,Mt=2*Math.PI;return function(){const xt=n.object.position;U.copy(xt).sub(n.target),U.applyQuaternion(et),o.setFromVector3(U),n.autoRotate&&s===i.NONE&&w(D()),n.enableDamping?(o.theta+=a.theta*n.dampingFactor,o.phi+=a.phi*n.dampingFactor):(o.theta+=a.theta,o.phi+=a.phi);let Tt=n.minAzimuthAngle,Ft=n.maxAzimuthAngle;return isFinite(Tt)&&isFinite(Ft)&&(Tt<-Math.PI?Tt+=Mt:Tt>Math.PI&&(Tt-=Mt),Ft<-Math.PI?Ft+=Mt:Ft>Math.PI&&(Ft-=Mt),Tt<=Ft?o.theta=Math.max(Tt,Math.min(Ft,o.theta)):o.theta=o.theta>(Tt+Ft)/2?Math.max(Tt,o.theta):Math.min(Ft,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(n.minDistance,Math.min(n.maxDistance,o.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),U.setFromSpherical(o),U.applyQuaternion(j),xt.copy(n.target).add(U),n.object.lookAt(n.target),n.enableDamping===!0?(a.theta*=1-n.dampingFactor,a.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(a.set(0,0,0),u.set(0,0,0)),c=1,f||dt.distanceToSquared(n.object.position)>r||8*(1-_t.dot(n.object.quaternion))>r?(n.dispatchEvent(rf),dt.copy(n.object.position),_t.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",C),n.domElement.removeEventListener("pointerdown",St),n.domElement.removeEventListener("pointercancel",Yt),n.domElement.removeEventListener("wheel",kt),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",Yt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Wt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const r=1e-6,o=new sf,a=new sf;let c=1;const u=new B;let f=!1;const h=new Pt,p=new Pt,_=new Pt,g=new Pt,m=new Pt,d=new Pt,v=new Pt,y=new Pt,x=new Pt,M=[],E={};function D(){return 2*Math.PI/60/60*n.autoRotateSpeed}function T(){return Math.pow(.95,n.zoomSpeed)}function w(U){a.theta-=U}function b(U){a.phi-=U}const N=function(){const U=new B;return function(j,dt){U.setFromMatrixColumn(dt,0),U.multiplyScalar(-j),u.add(U)}}(),O=function(){const U=new B;return function(j,dt){n.screenSpacePanning===!0?U.setFromMatrixColumn(dt,1):(U.setFromMatrixColumn(dt,0),U.crossVectors(n.object.up,U)),U.multiplyScalar(j),u.add(U)}}(),A=function(){const U=new B;return function(j,dt){const _t=n.domElement;if(n.object.isPerspectiveCamera){const Mt=n.object.position;U.copy(Mt).sub(n.target);let pt=U.length();pt*=Math.tan(n.object.fov/2*Math.PI/180),N(2*j*pt/_t.clientHeight,n.object.matrix),O(2*dt*pt/_t.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(N(j*(n.object.right-n.object.left)/n.object.zoom/_t.clientWidth,n.object.matrix),O(dt*(n.object.top-n.object.bottom)/n.object.zoom/_t.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function R(U){n.object.isPerspectiveCamera?c/=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*U)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function L(U){n.object.isPerspectiveCamera?c*=U:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/U)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(U){h.set(U.clientX,U.clientY)}function q(U){v.set(U.clientX,U.clientY)}function k(U){g.set(U.clientX,U.clientY)}function Y(U){p.set(U.clientX,U.clientY),_.subVectors(p,h).multiplyScalar(n.rotateSpeed);const et=n.domElement;w(2*Math.PI*_.x/et.clientHeight),b(2*Math.PI*_.y/et.clientHeight),h.copy(p),n.update()}function Q(U){y.set(U.clientX,U.clientY),x.subVectors(y,v),x.y>0?R(T()):x.y<0&&L(T()),v.copy(y),n.update()}function ct(U){m.set(U.clientX,U.clientY),d.subVectors(m,g).multiplyScalar(n.panSpeed),A(d.x,d.y),g.copy(m),n.update()}function G(U){U.deltaY<0?L(T()):U.deltaY>0&&R(T()),n.update()}function X(U){let et=!1;switch(U.code){case n.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?b(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,n.keyPanSpeed),et=!0;break;case n.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?b(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(0,-n.keyPanSpeed),et=!0;break;case n.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(n.keyPanSpeed,0),et=!0;break;case n.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):A(-n.keyPanSpeed,0),et=!0;break}et&&(U.preventDefault(),n.update())}function $(){if(M.length===1)h.set(M[0].pageX,M[0].pageY);else{const U=.5*(M[0].pageX+M[1].pageX),et=.5*(M[0].pageY+M[1].pageY);h.set(U,et)}}function nt(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const U=.5*(M[0].pageX+M[1].pageX),et=.5*(M[0].pageY+M[1].pageY);g.set(U,et)}}function it(){const U=M[0].pageX-M[1].pageX,et=M[0].pageY-M[1].pageY,j=Math.sqrt(U*U+et*et);v.set(0,j)}function W(){n.enableZoom&&it(),n.enablePan&&nt()}function wt(){n.enableZoom&&it(),n.enableRotate&&$()}function Et(U){if(M.length==1)p.set(U.pageX,U.pageY);else{const j=ht(U),dt=.5*(U.pageX+j.x),_t=.5*(U.pageY+j.y);p.set(dt,_t)}_.subVectors(p,h).multiplyScalar(n.rotateSpeed);const et=n.domElement;w(2*Math.PI*_.x/et.clientHeight),b(2*Math.PI*_.y/et.clientHeight),h.copy(p)}function at(U){if(M.length===1)m.set(U.pageX,U.pageY);else{const et=ht(U),j=.5*(U.pageX+et.x),dt=.5*(U.pageY+et.y);m.set(j,dt)}d.subVectors(m,g).multiplyScalar(n.panSpeed),A(d.x,d.y),g.copy(m)}function vt(U){const et=ht(U),j=U.pageX-et.x,dt=U.pageY-et.y,_t=Math.sqrt(j*j+dt*dt);y.set(0,_t),x.set(0,Math.pow(y.y/v.y,n.zoomSpeed)),R(x.y),v.copy(y)}function Ot(U){n.enableZoom&&vt(U),n.enablePan&&at(U)}function ut(U){n.enableZoom&&vt(U),n.enableRotate&&Et(U)}function St(U){n.enabled!==!1&&(M.length===0&&(n.domElement.setPointerCapture(U.pointerId),n.domElement.addEventListener("pointermove",Kt),n.domElement.addEventListener("pointerup",Yt)),Z(U),U.pointerType==="touch"?yt(U):Ht(U))}function Kt(U){n.enabled!==!1&&(U.pointerType==="touch"?F(U):qt(U))}function Yt(U){st(U),M.length===0&&(n.domElement.releasePointerCapture(U.pointerId),n.domElement.removeEventListener("pointermove",Kt),n.domElement.removeEventListener("pointerup",Yt)),n.dispatchEvent(of),s=i.NONE}function Ht(U){let et;switch(U.button){case 0:et=n.mouseButtons.LEFT;break;case 1:et=n.mouseButtons.MIDDLE;break;case 2:et=n.mouseButtons.RIGHT;break;default:et=-1}switch(et){case ps.DOLLY:if(n.enableZoom===!1)return;q(U),s=i.DOLLY;break;case ps.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enablePan===!1)return;k(U),s=i.PAN}else{if(n.enableRotate===!1)return;I(U),s=i.ROTATE}break;case ps.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(n.enableRotate===!1)return;I(U),s=i.ROTATE}else{if(n.enablePan===!1)return;k(U),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Cl)}function qt(U){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;Y(U);break;case i.DOLLY:if(n.enableZoom===!1)return;Q(U);break;case i.PAN:if(n.enablePan===!1)return;ct(U);break}}function kt(U){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(U.preventDefault(),n.dispatchEvent(Cl),G(U),n.dispatchEvent(of))}function Wt(U){n.enabled===!1||n.enablePan===!1||X(U)}function yt(U){switch(ot(U),M.length){case 1:switch(n.touches.ONE){case ms.ROTATE:if(n.enableRotate===!1)return;$(),s=i.TOUCH_ROTATE;break;case ms.PAN:if(n.enablePan===!1)return;nt(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case ms.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;W(),s=i.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;wt(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Cl)}function F(U){switch(ot(U),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Et(U),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;at(U),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ot(U),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ut(U),n.update();break;default:s=i.NONE}}function C(U){n.enabled!==!1&&U.preventDefault()}function Z(U){M.push(U)}function st(U){delete E[U.pointerId];for(let et=0;et<M.length;et++)if(M[et].pointerId==U.pointerId){M.splice(et,1);return}}function ot(U){let et=E[U.pointerId];et===void 0&&(et=new Pt,E[U.pointerId]=et),et.set(U.pageX,U.pageY)}function ht(U){const et=U.pointerId===M[0].pointerId?M[1]:M[0];return E[et.pointerId]}n.domElement.addEventListener("contextmenu",C),n.domElement.addEventListener("pointerdown",St),n.domElement.addEventListener("pointercancel",Yt),n.domElement.addEventListener("wheel",kt,{passive:!1}),this.update()}}class Tn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new S);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new S);const n=this.elements,i=t.x,s=t.y,r=t.z;return e.x=n[0]*i+n[1]*s+n[2]*r,e.y=n[3]*i+n[4]*s+n[5]*r,e.z=n[6]*i+n[7]*s+n[8]*r,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new Tn);const n=this.elements,i=t.elements,s=e.elements,r=n[0],o=n[1],a=n[2],c=n[3],u=n[4],f=n[5],h=n[6],p=n[7],_=n[8],g=i[0],m=i[1],d=i[2],v=i[3],y=i[4],x=i[5],M=i[6],E=i[7],D=i[8];return s[0]=r*g+o*v+a*M,s[1]=r*m+o*y+a*E,s[2]=r*d+o*x+a*D,s[3]=c*g+u*v+f*M,s[4]=c*m+u*y+f*E,s[5]=c*d+u*x+f*D,s[6]=h*g+p*v+_*M,s[7]=h*m+p*y+_*E,s[8]=h*d+p*x+_*D,e}scale(t,e){e===void 0&&(e=new Tn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new S);const n=3,i=4,s=[];let r,o;for(r=0;r<n*i;r++)s.push(0);for(r=0;r<3;r++)for(o=0;o<3;o++)s[r+i*o]=this.elements[r+3*o];s[3+4*0]=t.x,s[3+4*1]=t.y,s[3+4*2]=t.z;let a=3;const c=a;let u;const f=4;let h;do{if(r=c-a,s[r+i*r]===0){for(o=r+1;o<c;o++)if(s[r+i*o]!==0){u=f;do h=f-u,s[h+i*r]+=s[h+i*o];while(--u);break}}if(s[r+i*r]!==0)for(o=r+1;o<c;o++){const p=s[r+i*o]/s[r+i*r];u=f;do h=f-u,s[h+i*o]=h<=r?0:s[h+i*o]-s[h+i*r]*p;while(--u)}}while(--a);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new Tn);const e=3,n=6,i=HM;let s,r;for(s=0;s<3;s++)for(r=0;r<3;r++)i[s+n*r]=this.elements[s+3*r];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let o=3;const a=o;let c;const u=n;let f;do{if(s=a-o,i[s+n*s]===0){for(r=s+1;r<a;r++)if(i[s+n*r]!==0){c=u;do f=u-c,i[f+n*s]+=i[f+n*r];while(--c);break}}if(i[s+n*s]!==0)for(r=s+1;r<a;r++){const h=i[s+n*r]/i[s+n*s];c=u;do f=u-c,i[f+n*r]=f<=s?0:i[f+n*r]-i[f+n*s]*h;while(--c)}}while(--o);s=2;do{r=s-1;do{const h=i[s+n*r]/i[s+n*s];c=n;do f=n-c,i[f+n*r]=i[f+n*r]-i[f+n*s]*h;while(--c)}while(r--)}while(--s);s=2;do{const h=1/i[s+n*s];c=n;do f=n-c,i[f+n*s]=i[f+n*s]*h;while(--c)}while(s--);s=2;do{r=2;do{if(f=i[e+r+n*s],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,r,f)}while(r--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,r=e+e,o=n+n,a=i+i,c=e*r,u=e*o,f=e*a,h=n*o,p=n*a,_=i*a,g=s*r,m=s*o,d=s*a,v=this.elements;return v[3*0+0]=1-(h+_),v[3*0+1]=u-d,v[3*0+2]=f+m,v[3*1+0]=u+d,v[3*1+1]=1-(c+_),v[3*1+2]=p-g,v[3*2+0]=f-m,v[3*2+1]=p+g,v[3*2+2]=1-(c+h),this}transpose(t){t===void 0&&(t=new Tn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const HM=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class S{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z;return e.x=o*s-a*i,e.y=a*n-r*s,e.z=r*i-o*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new S(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new S(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new Tn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new S);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return Math.sqrt((s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,r=t.y,o=t.z;return(s-e)*(s-e)+(r-n)*(r-n)+(o-i)*(o-i)}scale(t,e){e===void 0&&(e=new S);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new S),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new S),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new S),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=WM,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const r=qM;Math.abs(i.x)<.9?(r.set(1,0,0),i.cross(r,t)):(r.set(0,1,0),i.cross(r,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,r=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=r+(t.z-r)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(af),af.almostEquals(t,e)}clone(){return new S(this.x,this.y,this.z)}}S.ZERO=new S(0,0,0);S.UNIT_X=new S(1,0,0);S.UNIT_Y=new S(0,1,0);S.UNIT_Z=new S(0,0,1);const WM=new S,qM=new S,af=new S;class on{constructor(t){t===void 0&&(t={}),this.lowerBound=new S,this.upperBound=new S,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,r=this.upperBound,o=n;s.copy(t[0]),o&&o.vmult(s,s),r.copy(s);for(let a=1;a<t.length;a++){let c=t[a];o&&(o.vmult(c,lf),c=lf),c.x>r.x&&(r.x=c.x),c.x<s.x&&(s.x=c.x),c.y>r.y&&(r.y=c.y),c.y<s.y&&(s.y=c.y),c.z>r.z&&(r.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(r,r)),i&&(s.x-=i,s.y-=i,s.z-=i,r.x+=i,r.y+=i,r.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new on().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,r=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,o=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,a=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return r&&o&&a}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,r,o,a){const c=this.lowerBound,u=this.upperBound;t.copy(c),e.set(u.x,c.y,c.z),n.set(u.x,u.y,c.z),i.set(c.x,u.y,u.z),s.set(u.x,c.y,u.z),r.set(c.x,u.y,c.z),o.set(c.x,c.y,u.z),a.copy(u)}toLocalFrame(t,e){const n=cf,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(i,s,r,o,a,c,u,f);for(let h=0;h!==8;h++){const p=n[h];t.pointToLocal(p,p)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=cf,i=n[0],s=n[1],r=n[2],o=n[3],a=n[4],c=n[5],u=n[6],f=n[7];this.getCorners(i,s,r,o,a,c,u,f);for(let h=0;h!==8;h++){const p=n[h];t.pointToWorld(p,p)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,r=1/e.z,o=(this.lowerBound.x-n.x)*i,a=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,u=(this.upperBound.y-n.y)*s,f=(this.lowerBound.z-n.z)*r,h=(this.upperBound.z-n.z)*r,p=Math.max(Math.max(Math.min(o,a),Math.min(c,u)),Math.min(f,h)),_=Math.min(Math.min(Math.max(o,a),Math.max(c,u)),Math.max(f,h));return!(_<0||p>_)}}const lf=new S,cf=[new S,new S,new S,new S,new S,new S,new S,new S];class uf{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const r=s;s=i,i=r}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class wp{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new S),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=XM,i=jM;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new pe);const n=this.x,i=this.y,s=this.z,r=this.w,o=t.x,a=t.y,c=t.z,u=t.w;return e.x=n*u+r*o+i*c-s*a,e.y=i*u+r*a+s*o-n*c,e.z=s*u+r*c+n*a-i*o,e.w=r*u-n*o-i*a-s*c,e}inverse(t){t===void 0&&(t=new pe);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const r=1/(e*e+n*n+i*i+s*s);return t.x*=r,t.y*=r,t.z*=r,t.w*=r,t}conjugate(t){return t===void 0&&(t=new pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new S);const n=t.x,i=t.y,s=t.z,r=this.x,o=this.y,a=this.z,c=this.w,u=c*n+o*s-a*i,f=c*i+a*n-r*s,h=c*s+r*i-o*n,p=-r*n-o*i-a*s;return e.x=u*c+p*-r+f*-a-h*-o,e.y=f*c+p*-o+h*-r-u*-a,e.z=h*c+p*-a+u*-o-f*-r,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const r=this.x,o=this.y,a=this.z,c=this.w;switch(e){case"YZX":const u=r*o+a*c;if(u>.499&&(n=2*Math.atan2(r,c),i=Math.PI/2,s=0),u<-.499&&(n=-2*Math.atan2(r,c),i=-Math.PI/2,s=0),n===void 0){const f=r*r,h=o*o,p=a*a;n=Math.atan2(2*o*c-2*r*a,1-2*h-2*p),i=Math.asin(2*u),s=Math.atan2(2*r*c-2*o*a,1-2*f-2*p)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),r=Math.cos(e/2),o=Math.cos(n/2),a=Math.sin(t/2),c=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=a*r*o+s*c*u,this.y=s*c*o-a*r*u,this.z=s*r*u+a*c*o,this.w=s*r*o-a*c*u):i==="YXZ"?(this.x=a*r*o+s*c*u,this.y=s*c*o-a*r*u,this.z=s*r*u-a*c*o,this.w=s*r*o+a*c*u):i==="ZXY"?(this.x=a*r*o-s*c*u,this.y=s*c*o+a*r*u,this.z=s*r*u+a*c*o,this.w=s*r*o-a*c*u):i==="ZYX"?(this.x=a*r*o-s*c*u,this.y=s*c*o+a*r*u,this.z=s*r*u-a*c*o,this.w=s*r*o+a*c*u):i==="YZX"?(this.x=a*r*o+s*c*u,this.y=s*c*o+a*r*u,this.z=s*r*u-a*c*o,this.w=s*r*o-a*c*u):i==="XZY"&&(this.x=a*r*o-s*c*u,this.y=s*c*o-a*r*u,this.z=s*r*u+a*c*o,this.w=s*r*o+a*c*u),this}clone(){return new pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new pe);const i=this.x,s=this.y,r=this.z,o=this.w;let a=t.x,c=t.y,u=t.z,f=t.w,h,p,_,g,m;return p=i*a+s*c+r*u+o*f,p<0&&(p=-p,a=-a,c=-c,u=-u,f=-f),1-p>1e-6?(h=Math.acos(p),_=Math.sin(h),g=Math.sin((1-e)*h)/_,m=Math.sin(e*h)/_):(g=1-e,m=e),n.x=g*i+m*a,n.y=g*s+m*c,n.z=g*r+m*u,n.w=g*o+m*f,n}integrate(t,e,n,i){i===void 0&&(i=new pe);const s=t.x*n.x,r=t.y*n.y,o=t.z*n.z,a=this.x,c=this.y,u=this.z,f=this.w,h=e*.5;return i.x+=h*(s*f+r*u-o*c),i.y+=h*(r*f+o*a-s*u),i.z+=h*(o*f+s*c-r*a),i.w+=h*(-s*a-r*c-o*u),i}}const XM=new S,jM=new S,YM={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class gt{constructor(t){t===void 0&&(t={}),this.id=gt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}gt.idCounter=0;gt.types=YM;class Gt{constructor(t){t===void 0&&(t={}),this.position=new S,this.quaternion=new pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Gt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Gt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),n.vsub(t,i),e.conjugate(hf),hf.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new S),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new S),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new S),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const hf=new pe;class Ys extends gt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:r}=t;super({type:gt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),r?this.boundingSphereRadius=r:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new S;for(let s=0;s!==t.length;s++){const r=t[s],o=r.length;for(let a=0;a!==o;a++){const c=(a+1)%o;e[r[a]].vsub(e[r[c]],i),i.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(i)||n[f].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new S;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],r=this.vertices[n[2]];Ys.computeNormal(i,s,r,e)}static computeNormal(t,e,n,i){const s=new S,r=new S;e.vsub(t,r),n.vsub(e,s),s.cross(r,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,r,o,a,c){const u=new S;let f=-1,h=-Number.MAX_VALUE;for(let _=0;_<n.faces.length;_++){u.copy(n.faceNormals[_]),s.vmult(u,u);const g=u.dot(r);g>h&&(h=g,f=_)}const p=[];for(let _=0;_<n.faces[f].length;_++){const g=n.vertices[n.faces[f][_]],m=new S;m.copy(g),s.vmult(m,m),i.vadd(m,m),p.push(m)}f>=0&&this.clipFaceAgainstHull(r,t,e,p,o,a,c)}findSeparatingAxis(t,e,n,i,s,r,o,a){const c=new S,u=new S,f=new S,h=new S,p=new S,_=new S;let g=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let d=0;d!==m.uniqueAxes.length;d++){n.vmult(m.uniqueAxes[d],c);const v=m.testSepAxis(c,t,e,n,i,s);if(v===!1)return!1;v<g&&(g=v,r.copy(c))}else{const d=o?o.length:m.faces.length;for(let v=0;v<d;v++){const y=o?o[v]:v;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<g&&(g=x,r.copy(c))}}if(t.uniqueAxes)for(let d=0;d!==t.uniqueAxes.length;d++){s.vmult(t.uniqueAxes[d],u);const v=m.testSepAxis(u,t,e,n,i,s);if(v===!1)return!1;v<g&&(g=v,r.copy(u))}else{const d=a?a.length:t.faces.length;for(let v=0;v<d;v++){const y=a?a[v]:v;u.copy(t.faceNormals[y]),s.vmult(u,u);const x=m.testSepAxis(u,t,e,n,i,s);if(x===!1)return!1;x<g&&(g=x,r.copy(u))}}for(let d=0;d!==m.uniqueEdges.length;d++){n.vmult(m.uniqueEdges[d],h);for(let v=0;v!==t.uniqueEdges.length;v++)if(s.vmult(t.uniqueEdges[v],p),h.cross(p,_),!_.almostZero()){_.normalize();const y=m.testSepAxis(_,t,e,n,i,s);if(y===!1)return!1;y<g&&(g=y,r.copy(_))}}return i.vsub(e,f),f.dot(r)>0&&r.negate(r),!0}testSepAxis(t,e,n,i,s,r){const o=this;Ys.project(o,t,n,i,Tl),Ys.project(e,t,s,r,Al);const a=Tl[0],c=Tl[1],u=Al[0],f=Al[1];if(a<f||u<c)return!1;const h=a-f,p=u-c;return h<p?h:p}calculateLocalInertia(t,e){const n=new S,i=new S;this.computeLocalAABB(i,n);const s=n.x-i.x,r=n.y-i.y,o=n.z-i.z;e.x=1/12*t*(2*r*2*r+2*o*2*o),e.y=1/12*t*(2*s*2*s+2*o*2*o),e.z=1/12*t*(2*r*2*r+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,r,o){const a=new S,c=new S,u=new S,f=new S,h=new S,p=new S,_=new S,g=new S,m=this,d=[],v=i,y=d;let x=-1,M=Number.MAX_VALUE;for(let b=0;b<m.faces.length;b++){a.copy(m.faceNormals[b]),n.vmult(a,a);const N=a.dot(t);N<M&&(M=N,x=b)}if(x<0)return;const E=m.faces[x];E.connectedFaces=[];for(let b=0;b<m.faces.length;b++)for(let N=0;N<m.faces[b].length;N++)E.indexOf(m.faces[b][N])!==-1&&b!==x&&E.connectedFaces.indexOf(b)===-1&&E.connectedFaces.push(b);const D=E.length;for(let b=0;b<D;b++){const N=m.vertices[E[b]],O=m.vertices[E[(b+1)%D]];N.vsub(O,c),u.copy(c),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[x]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),p.copy(N),n.vmult(p,p),e.vadd(p,p);const A=E.connectedFaces[b];_.copy(this.faceNormals[A]);const R=this.getPlaneConstantOfFace(A);g.copy(_),n.vmult(g,g);const L=R-g.dot(e);for(this.clipFaceAgainstPlane(v,y,g,L);v.length;)v.shift();for(;y.length;)v.push(y.shift())}_.copy(this.faceNormals[x]);const T=this.getPlaneConstantOfFace(x);g.copy(_),n.vmult(g,g);const w=T-g.dot(e);for(let b=0;b<v.length;b++){let N=g.dot(v[b])+w;if(N<=s&&(console.log(`clamped: depth=${N} to minDist=${s}`),N=s),N<=r){const O=v[b];if(N<=1e-6){const A={point:O,normal:g,depth:N};o.push(A)}}}}clipFaceAgainstPlane(t,e,n,i){let s,r;const o=t.length;if(o<2)return e;let a=t[t.length-1],c=t[0];s=n.dot(a)+i;for(let u=0;u<o;u++){if(c=t[u],r=n.dot(c)+i,s<0)if(r<0){const f=new S;f.copy(c),e.push(f)}else{const f=new S;a.lerp(c,s/(s-r),f),e.push(f)}else if(r<0){const f=new S;a.lerp(c,s/(s-r),f),e.push(f),e.push(c)}a=c,s=r}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new S);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new S);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let r,o,a,c,u,f,h=new S;for(let p=0;p<s.length;p++){h.copy(s[p]),e.vmult(h,h),t.vadd(h,h);const _=h;(r===void 0||_.x<r)&&(r=_.x),(c===void 0||_.x>c)&&(c=_.x),(o===void 0||_.y<o)&&(o=_.y),(u===void 0||_.y>u)&&(u=_.y),(a===void 0||_.z<a)&&(a=_.z),(f===void 0||_.z>f)&&(f=_.z)}n.set(r,o,a),i.set(c,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new S);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const r=i[s];e.vmult(r,r)}for(let s=0;s<this.faceNormals.length;s++){const r=this.faceNormals[s];e.vmult(r,r)}}if(t)for(let s=0;s<n;s++){const r=i[s];r.vadd(t,r)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=null,r=new S;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],u=new S;t.vsub(c,u);const f=a.dot(u),h=new S;r.vsub(c,h);const p=a.dot(h);if(f<0&&p>0||f>0&&p<0)return!1}return s?1:-1}static project(t,e,n,i,s){const r=t.vertices.length,o=$M;let a=0,c=0;const u=ZM,f=t.vertices;u.setZero(),Gt.vectorToLocalFrame(n,i,e,o),Gt.pointToLocalFrame(n,i,u,u);const h=u.dot(o);c=a=f[0].dot(o);for(let p=1;p<r;p++){const _=f[p].dot(o);_>a&&(a=_),_<c&&(c=_)}if(c-=h,a-=h,c>a){const p=c;c=a,a=p}s[0]=a,s[1]=c}}const Tl=[],Al=[];new S;const $M=new S,ZM=new S;class Fi extends gt{constructor(t){super({type:gt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=S,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],r=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],o=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],a=new Ys({vertices:s,faces:r,axes:o});this.convexPolyhedronRepresentation=a,a.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new S),Fi.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let r=0;r<s.length;r++)_i.set(s[r][0],s[r][1],s[r][2]),e.vmult(_i,_i),t.vadd(_i,_i),n(_i.x,_i.y,_i.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;Fn[0].set(s.x,s.y,s.z),Fn[1].set(-s.x,s.y,s.z),Fn[2].set(-s.x,-s.y,s.z),Fn[3].set(-s.x,-s.y,-s.z),Fn[4].set(s.x,-s.y,-s.z),Fn[5].set(s.x,s.y,-s.z),Fn[6].set(-s.x,s.y,-s.z),Fn[7].set(s.x,-s.y,s.z);const r=Fn[0];e.vmult(r,r),t.vadd(r,r),i.copy(r),n.copy(r);for(let o=1;o<8;o++){const a=Fn[o];e.vmult(a,a),t.vadd(a,a);const c=a.x,u=a.y,f=a.z;c>i.x&&(i.x=c),u>i.y&&(i.y=u),f>i.z&&(i.z=f),c<n.x&&(n.x=c),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const _i=new S,Fn=[new S,new S,new S,new S,new S,new S,new S,new S],Zc={DYNAMIC:1,STATIC:2,KINEMATIC:4},Kc={AWAKE:0,SLEEPY:1,SLEEPING:2};class ft extends wp{constructor(t){t===void 0&&(t={}),super(),this.id=ft.idCounter++,this.index=-1,this.world=null,this.vlambda=new S,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new S,this.previousPosition=new S,this.interpolatedPosition=new S,this.initPosition=new S,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new S,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new S,this.force=new S;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?ft.STATIC:ft.DYNAMIC,typeof t.type==typeof ft.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=ft.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new S,this.quaternion=new pe,this.initQuaternion=new pe,this.previousQuaternion=new pe,this.interpolatedQuaternion=new pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new S,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new S,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new S,this.invInertia=new S,this.invInertiaWorld=new Tn,this.invMassSolve=0,this.invInertiaSolve=new S,this.invInertiaWorldSolve=new Tn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new S(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new S(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new on,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new S,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=ft.AWAKE,this.wakeUpAfterNarrowphase=!1,t===ft.SLEEPING&&this.dispatchEvent(ft.wakeupEvent)}sleep(){this.sleepState=ft.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===ft.AWAKE&&n<i?(this.sleepState=ft.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(ft.sleepyEvent)):e===ft.SLEEPY&&n>i?this.wakeUp():e===ft.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(ft.sleepEvent))}}updateSolveMassProperties(){this.sleepState===ft.SLEEPING||this.type===ft.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new S),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new S),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new S),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new S,s=new pe;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const r=t[s];r.updateBoundingSphereRadius();const o=e[s].length(),a=r.boundingSphereRadius;o+a>i&&(i=o+a)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=KM,r=JM,o=this.quaternion,a=this.aabb,c=QM;for(let u=0;u!==i;u++){const f=t[u];o.vmult(e[u],s),s.vadd(this.position,s),o.mult(n[u],r),f.calculateWorldAABB(s,r,c.lowerBound,c.upperBound),u===0?a.copy(c):a.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=tw,i=ew;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new S),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=iw;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new S),this.type!==ft.DYNAMIC)return;const n=sw,i=rw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===ft.DYNAMIC&&(this.sleepState===ft.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new S),this.type!==ft.DYNAMIC)return;this.sleepState===ft.SLEEPING&&this.wakeUp();const n=e,i=ow;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=aw;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new S),this.type!==ft.DYNAMIC)return;const n=lw,i=cw;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=uw;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Fi.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new S;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===ft.DYNAMIC||this.type===ft.KINEMATIC)||this.sleepState===ft.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,r=this.position,o=this.force,a=this.torque,c=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,p=u*t;i.x+=o.x*p*h.x,i.y+=o.y*p*h.y,i.z+=o.z*p*h.z;const _=f.elements,g=this.angularFactor,m=a.x*g.x,d=a.y*g.y,v=a.z*g.z;s.x+=t*(_[0]*m+_[1]*d+_[2]*v),s.y+=t*(_[3]*m+_[4]*d+_[5]*v),s.z+=t*(_[6]*m+_[7]*d+_[8]*v),r.x+=i.x*t,r.y+=i.y*t,r.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}ft.idCounter=0;ft.COLLIDE_EVENT_NAME="collide";ft.DYNAMIC=Zc.DYNAMIC;ft.STATIC=Zc.STATIC;ft.KINEMATIC=Zc.KINEMATIC;ft.AWAKE=Kc.AWAKE;ft.SLEEPY=Kc.SLEEPY;ft.SLEEPING=Kc.SLEEPING;ft.wakeupEvent={type:"wakeup"};ft.sleepyEvent={type:"sleepy"};ft.sleepEvent={type:"sleep"};const KM=new S,JM=new pe,QM=new on,tw=new Tn,ew=new Tn,nw=new Tn,iw=new S,sw=new S,rw=new S,ow=new S,aw=new S,lw=new S,cw=new S,uw=new S;class hw{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&ft.STATIC||t.sleepState===ft.SLEEPING)&&(e.type&ft.STATIC||e.sleepState===ft.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=fw;e.position.vsub(t.position,s);const r=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<r&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=dw,i=pw,s=mw,r=t.length;for(let o=0;o!==r;o++)i[o]=t[o],s[o]=e[o];t.length=0,e.length=0;for(let o=0;o!==r;o++){const a=i[o].id,c=s[o].id,u=a<c?`${a},${c}`:`${c},${a}`;n[u]=o,n.keys.push(u)}for(let o=0;o!==n.keys.length;o++){const a=n.keys.pop(),c=n[a];t.push(i[c]),e.push(s[c]),delete n[a]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new S;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const fw=new S;new S;new pe;new S;const dw={keys:[]},pw=[],mw=[];new S;new S;new S;class gw extends hw{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let r,o;for(let a=0;a!==s;a++)for(let c=0;c!==a;c++)r=i[a],o=i[c],this.needBroadphaseCollision(r,o)&&this.intersectionTest(r,o,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class ua{constructor(){this.rayFromWorld=new S,this.rayToWorld=new S,this.hitNormalWorld=new S,this.hitPointWorld=new S,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,r,o){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=r,this.distance=o}}let Sp,bp,Ep,Dp,Cp,Tp,Ap;const Jc={CLOSEST:1,ANY:2,ALL:4};Sp=gt.types.SPHERE;bp=gt.types.PLANE;Ep=gt.types.BOX;Dp=gt.types.CYLINDER;Cp=gt.types.CONVEXPOLYHEDRON;Tp=gt.types.HEIGHTFIELD;Ap=gt.types.TRIMESH;class fe{get[Sp](){return this._intersectSphere}get[bp](){return this._intersectPlane}get[Ep](){return this._intersectBox}get[Dp](){return this._intersectConvex}get[Cp](){return this._intersectConvex}get[Tp](){return this._intersectHeightfield}get[Ap](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new S),e===void 0&&(e=new S),this.from=t.clone(),this.to=e.clone(),this.direction=new S,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=fe.ANY,this.result=new ua,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||fe.ANY,this.result=e.result||new ua,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(ff),Pl.length=0,t.broadphase.aabbQuery(t,ff,Pl),this.intersectBodies(Pl),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=_w,s=vw;for(let r=0,o=t.shapes.length;r<o;r++){const a=t.shapes[r];if(!(n&&!a.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[r],s),t.quaternion.vmult(t.shapeOffsets[r],i),i.vadd(t.position,i),this.intersectShape(a,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Rw(s,this.direction,n)>t.boundingSphereRadius)return;const o=this[t.type];o&&o.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const r=this.from,o=this.to,a=this.direction,c=new S(0,0,1);e.vmult(c,c);const u=new S;r.vsub(n,u);const f=u.dot(c);o.vsub(n,u);const h=u.dot(c);if(f*h>0||r.distanceTo(o)<f)return;const p=c.dot(a);if(Math.abs(p)<this.precision)return;const _=new S,g=new S,m=new S;r.vsub(n,_);const d=-c.dot(_)/p;a.scale(d,g),r.vadd(g,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const r=xw;r.from.copy(this.from),r.to.copy(this.to),Gt.pointToLocalFrame(n,e,r.from,r.from),Gt.pointToLocalFrame(n,e,r.to,r.to),r.updateDirection();const o=yw;let a,c,u,f;a=c=0,u=f=t.data.length-1;const h=new on;r.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,o,!0),a=Math.max(a,o[0]),c=Math.max(c,o[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,o,!0),u=Math.min(u,o[0]+1),f=Math.min(f,o[1]+1);for(let p=a;p<u;p++)for(let _=c;_<f;_++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(p,_,h),!!h.overlapsRay(r)){if(t.getConvexTrianglePillar(p,_,!1),Gt.pointToWorldFrame(n,e,t.pillarOffset,ko),this._intersectConvex(t.pillarConvex,e,ko,i,s,df),this.result.shouldStop)return;t.getConvexTrianglePillar(p,_,!0),Gt.pointToWorldFrame(n,e,t.pillarOffset,ko),this._intersectConvex(t.pillarConvex,e,ko,i,s,df)}}}_intersectSphere(t,e,n,i,s){const r=this.from,o=this.to,a=t.radius,c=(o.x-r.x)**2+(o.y-r.y)**2+(o.z-r.z)**2,u=2*((o.x-r.x)*(r.x-n.x)+(o.y-r.y)*(r.y-n.y)+(o.z-r.z)*(r.z-n.z)),f=(r.x-n.x)**2+(r.y-n.y)**2+(r.z-n.z)**2-a**2,h=u**2-4*c*f,p=Mw,_=ww;if(!(h<0))if(h===0)r.lerp(o,h,p),p.vsub(n,_),_.normalize(),this.reportIntersection(_,p,s,i,-1);else{const g=(-u-Math.sqrt(h))/(2*c),m=(-u+Math.sqrt(h))/(2*c);if(g>=0&&g<=1&&(r.lerp(o,g,p),p.vsub(n,_),_.normalize(),this.reportIntersection(_,p,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(r.lerp(o,m,p),p.vsub(n,_),_.normalize(),this.reportIntersection(_,p,s,i,-1))}}_intersectConvex(t,e,n,i,s,r){const o=Sw,a=pf,c=r&&r.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,p=this.direction,_=this.from,g=this.to,m=_.distanceTo(g),d=c?c.length:u.length,v=this.result;for(let y=0;!v.shouldStop&&y<d;y++){const x=c?c[y]:y,M=u[x],E=h[x],D=e,T=n;a.copy(f[M[0]]),D.vmult(a,a),a.vadd(T,a),a.vsub(_,a),D.vmult(E,o);const w=p.dot(o);if(Math.abs(w)<this.precision)continue;const b=o.dot(a)/w;if(!(b<0)){p.scale(b,ke),ke.vadd(_,ke),bn.copy(f[M[0]]),D.vmult(bn,bn),T.vadd(bn,bn);for(let N=1;!v.shouldStop&&N<M.length-1;N++){In.copy(f[M[N]]),Nn.copy(f[M[N+1]]),D.vmult(In,In),D.vmult(Nn,Nn),T.vadd(In,In),T.vadd(Nn,Nn);const O=ke.distanceTo(_);!(fe.pointInTriangle(ke,bn,In,Nn)||fe.pointInTriangle(ke,In,bn,Nn))||O>m||this.reportIntersection(o,ke,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,r){const o=bw,a=Pw,c=Lw,u=pf,f=Ew,h=Dw,p=Cw,_=Aw,g=Tw,m=t.indices;t.vertices;const d=this.from,v=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Gt.vectorToLocalFrame(n,e,y,f),Gt.pointToLocalFrame(n,e,d,h),Gt.pointToLocalFrame(n,e,v,p),p.x*=t.scale.x,p.y*=t.scale.y,p.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,p.vsub(h,f),f.normalize();const x=h.distanceSquared(p);t.tree.rayQuery(this,c,a);for(let M=0,E=a.length;!this.result.shouldStop&&M!==E;M++){const D=a[M];t.getNormal(D,o),t.getVertex(m[D*3],bn),bn.vsub(h,u);const T=f.dot(o),w=o.dot(u)/T;if(w<0)continue;f.scale(w,ke),ke.vadd(h,ke),t.getVertex(m[D*3+1],In),t.getVertex(m[D*3+2],Nn);const b=ke.distanceSquared(h);!(fe.pointInTriangle(ke,In,bn,Nn)||fe.pointInTriangle(ke,bn,In,Nn))||b>x||(Gt.vectorToWorldFrame(e,o,g),Gt.pointToWorldFrame(n,e,ke,_),this.reportIntersection(g,_,s,i,D))}a.length=0}reportIntersection(t,e,n,i,s){const r=this.from,o=this.to,a=r.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case fe.ALL:this.hasHit=!0,c.set(r,o,t,e,n,i,a),c.hasHit=!0,this.callback(c);break;case fe.CLOSEST:(a<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,a));break;case fe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(r,o,t,e,n,i,a),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,ji),n.vsub(e,yr),t.vsub(e,Ll);const s=ji.dot(ji),r=ji.dot(yr),o=ji.dot(Ll),a=yr.dot(yr),c=yr.dot(Ll);let u,f;return(u=a*o-r*c)>=0&&(f=s*c-r*o)>=0&&u+f<s*a-r*r}}fe.CLOSEST=Jc.CLOSEST;fe.ANY=Jc.ANY;fe.ALL=Jc.ALL;const ff=new on,Pl=[],yr=new S,Ll=new S,_w=new S,vw=new pe,ke=new S,bn=new S,In=new S,Nn=new S;new S;new ua;const df={faceList:[0]},ko=new S,xw=new fe,yw=[],Mw=new S,ww=new S,Sw=new S;new S;new S;const pf=new S,bw=new S,Ew=new S,Dw=new S,Cw=new S,Tw=new S,Aw=new S;new on;const Pw=[],Lw=new Gt,ji=new S,Vo=new S;function Rw(l,t,e){e.vsub(l,ji);const n=ji.dot(t);return t.scale(n,Vo),Vo.vadd(l,Vo),e.distanceTo(Vo)}class Pp{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class ba{constructor(t,e,n){n===void 0&&(n={}),n=Pp.defaults(n,{collideConnected:!0,wakeUpBodies:!0}),this.equations=[],this.bodyA=t,this.bodyB=e,this.id=ba.idCounter++,this.collideConnected=n.collideConnected,n.wakeUpBodies&&(t&&t.wakeUp(),e&&e.wakeUp())}update(){throw new Error("method update() not implmemented in this Constraint subclass!")}enable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!0}disable(){const t=this.equations;for(let e=0;e<t.length;e++)t[e].enabled=!1}}ba.idCounter=0;class mf{constructor(){this.spatial=new S,this.rotational=new S}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class so{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=so.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new mf,this.jacobianElementB=new mf,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,r=n;this.a=4/(r*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(r*r*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),r=this.computeGiMf();return-s*t-i*e-r*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,r=i.position;return t.spatial.dot(s)+e.spatial.dot(r)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,r=i.velocity,o=n.angularVelocity,a=i.angularVelocity;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,r=i.vlambda,o=n.wlambda,a=i.wlambda;return t.multiplyVectors(s,o)+e.multiplyVectors(r,a)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,r=n.torque,o=i.force,a=i.torque,c=n.invMassSolve,u=i.invMassSolve;return s.scale(c,gf),o.scale(u,_f),n.invInertiaWorldSolve.vmult(r,vf),i.invInertiaWorldSolve.vmult(a,xf),t.multiplyVectors(gf,vf)+e.multiplyVectors(_f,xf)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,r=i.invMassSolve,o=n.invInertiaWorldSolve,a=i.invInertiaWorldSolve;let c=s+r;return o.vmult(t.rotational,Go),c+=Go.dot(t.rotational),a.vmult(e.rotational,Go),c+=Go.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,r=Fw;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,r),i.wlambda.addScaledVector(t,r,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,r),s.wlambda.addScaledVector(t,r,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}so.idCounter=0;const gf=new S,_f=new S,vf=new S,xf=new S,Go=new S,Fw=new S;class Jo extends so{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new S,this.rj=new S,this.ni=new S}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,r=this.ri,o=this.rj,a=Iw,c=Nw,u=i.velocity,f=i.angularVelocity;i.force,i.torque;const h=s.velocity,p=s.angularVelocity;s.force,s.torque;const _=Uw,g=this.jacobianElementA,m=this.jacobianElementB,d=this.ni;r.cross(d,a),o.cross(d,c),d.negate(g.spatial),a.negate(g.rotational),m.spatial.copy(d),m.rotational.copy(c),_.copy(s.position),_.vadd(o,_),_.vsub(i.position,_),_.vsub(r,_);const v=d.dot(_),y=this.restitution+1,x=y*h.dot(d)-y*u.dot(d)+p.dot(c)-f.dot(a),M=this.computeGiMf();return-v*e-x*n-t*M}getImpactVelocityAlongNormal(){const t=Ow,e=zw,n=Bw,i=kw,s=Vw;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const Iw=new S,Nw=new S,Uw=new S,Ow=new S,zw=new S,Bw=new S,kw=new S,Vw=new S;class Gw extends ba{constructor(t,e,n,i,s){e===void 0&&(e=new S),i===void 0&&(i=new S),s===void 0&&(s=1e6),super(t,n),this.pivotA=e.clone(),this.pivotB=i.clone();const r=this.equationX=new Jo(t,n),o=this.equationY=new Jo(t,n),a=this.equationZ=new Jo(t,n);this.equations.push(r,o,a),r.minForce=o.minForce=a.minForce=-s,r.maxForce=o.maxForce=a.maxForce=s,r.ni.set(1,0,0),o.ni.set(0,1,0),a.ni.set(0,0,1)}update(){const t=this.bodyA,e=this.bodyB,n=this.equationX,i=this.equationY,s=this.equationZ;t.quaternion.vmult(this.pivotA,n.ri),e.quaternion.vmult(this.pivotB,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),s.ri.copy(n.ri),s.rj.copy(n.rj)}}new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class yf extends so{constructor(t,e,n){super(t,e,-n,n),this.ri=new S,this.rj=new S,this.t=new S}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=Hw,r=Ww,o=this.t;n.cross(o,s),i.cross(o,r);const a=this.jacobianElementA,c=this.jacobianElementB;o.negate(a.spatial),s.negate(a.rotational),c.spatial.copy(o),c.rotational.copy(r);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const Hw=new S,Ww=new S;class ro{constructor(t,e,n){n=Pp.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=ro.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}ro.idCounter=0;class oo{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=oo.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}oo.idCounter=0;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new fe;new S;new S;new S;new S(1,0,0),new S(0,1,0),new S(0,0,1);new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;class Lp extends gt{constructor(t){if(super({type:gt.types.SPHERE}),this.radius=t!==void 0?t:1,this.radius<0)throw new Error("The sphere radius cannot be negative.");this.updateBoundingSphereRadius()}calculateLocalInertia(t,e){e===void 0&&(e=new S);const n=2*t*this.radius*this.radius/5;return e.x=n,e.y=n,e.z=n,e}volume(){return 4*Math.PI*Math.pow(this.radius,3)/3}updateBoundingSphereRadius(){this.boundingSphereRadius=this.radius}calculateWorldAABB(t,e,n,i){const s=this.radius,r=["x","y","z"];for(let o=0;o<r.length;o++){const a=r[o];n[a]=t[a]-s,i[a]=t[a]+s}}}new S;new S;new S;new S;new S;new S;new S;new S;new S;class Rp extends Ys{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,r=[],o=[],a=[],c=[],u=[],f=Math.cos,h=Math.sin;r.push(new S(-e*h(0),-n*.5,e*f(0))),c.push(0),r.push(new S(-t*h(0),n*.5,t*f(0))),u.push(1);for(let _=0;_<s;_++){const g=2*Math.PI/s*(_+1),m=2*Math.PI/s*(_+.5);_<s-1?(r.push(new S(-e*h(g),-n*.5,e*f(g))),c.push(2*_+2),r.push(new S(-t*h(g),n*.5,t*f(g))),u.push(2*_+3),a.push([2*_,2*_+1,2*_+3,2*_+2])):a.push([2*_,2*_+1,1,0]),(s%2===1||_<s/2)&&o.push(new S(-h(m),0,f(m)))}a.push(c),o.push(new S(0,1,0));const p=[];for(let _=0;_<u.length;_++)p.push(u[u.length-_-1]);a.push(p),super({vertices:r,faces:a,axes:o}),this.type=gt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new S;new on;new S;new on;new S;new S;new S;new S;new S;new S;new S;new on;new S;new Gt;new on;class qw{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class Xw extends qw{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,r=this.equations,o=r.length,a=e.bodies,c=a.length,u=t;let f,h,p,_,g,m;if(o!==0)for(let x=0;x!==c;x++)a[x].updateSolveMassProperties();const d=Yw,v=$w,y=jw;d.length=o,v.length=o,y.length=o;for(let x=0;x!==o;x++){const M=r[x];y[x]=0,v[x]=M.computeB(u),d[x]=1/M.computeC()}if(o!==0){for(let E=0;E!==c;E++){const D=a[E],T=D.vlambda,w=D.wlambda;T.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){_=0;for(let E=0;E!==o;E++){const D=r[E];f=v[E],h=d[E],m=y[E],g=D.computeGWlambda(),p=h*(f-g-D.eps*m),m+p<D.minForce?p=D.minForce-m:m+p>D.maxForce&&(p=D.maxForce-m),y[E]+=p,_+=p>0?p:-p,D.addToWlambda(p)}if(_*_<s)break}for(let E=0;E!==c;E++){const D=a[E],T=D.velocity,w=D.angularVelocity;D.vlambda.vmul(D.linearFactor,D.vlambda),T.vadd(D.vlambda,T),D.wlambda.vmul(D.angularFactor,D.wlambda),w.vadd(D.wlambda,w)}let x=r.length;const M=1/u;for(;x--;)r[x].multiplier=y[x]*M}return n}}const jw=[],Yw=[],$w=[];ft.STATIC;class Zw{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class Kw extends Zw{constructor(){super(...arguments),this.type=S}constructObject(){return new S}}const Qt={sphereSphere:gt.types.SPHERE,spherePlane:gt.types.SPHERE|gt.types.PLANE,boxBox:gt.types.BOX|gt.types.BOX,sphereBox:gt.types.SPHERE|gt.types.BOX,planeBox:gt.types.PLANE|gt.types.BOX,convexConvex:gt.types.CONVEXPOLYHEDRON,sphereConvex:gt.types.SPHERE|gt.types.CONVEXPOLYHEDRON,planeConvex:gt.types.PLANE|gt.types.CONVEXPOLYHEDRON,boxConvex:gt.types.BOX|gt.types.CONVEXPOLYHEDRON,sphereHeightfield:gt.types.SPHERE|gt.types.HEIGHTFIELD,boxHeightfield:gt.types.BOX|gt.types.HEIGHTFIELD,convexHeightfield:gt.types.CONVEXPOLYHEDRON|gt.types.HEIGHTFIELD,sphereParticle:gt.types.PARTICLE|gt.types.SPHERE,planeParticle:gt.types.PLANE|gt.types.PARTICLE,boxParticle:gt.types.BOX|gt.types.PARTICLE,convexParticle:gt.types.PARTICLE|gt.types.CONVEXPOLYHEDRON,cylinderCylinder:gt.types.CYLINDER,sphereCylinder:gt.types.SPHERE|gt.types.CYLINDER,planeCylinder:gt.types.PLANE|gt.types.CYLINDER,boxCylinder:gt.types.BOX|gt.types.CYLINDER,convexCylinder:gt.types.CONVEXPOLYHEDRON|gt.types.CYLINDER,heightfieldCylinder:gt.types.HEIGHTFIELD|gt.types.CYLINDER,particleCylinder:gt.types.PARTICLE|gt.types.CYLINDER,sphereTrimesh:gt.types.SPHERE|gt.types.TRIMESH,planeTrimesh:gt.types.PLANE|gt.types.TRIMESH};class Jw{get[Qt.sphereSphere](){return this.sphereSphere}get[Qt.spherePlane](){return this.spherePlane}get[Qt.boxBox](){return this.boxBox}get[Qt.sphereBox](){return this.sphereBox}get[Qt.planeBox](){return this.planeBox}get[Qt.convexConvex](){return this.convexConvex}get[Qt.sphereConvex](){return this.sphereConvex}get[Qt.planeConvex](){return this.planeConvex}get[Qt.boxConvex](){return this.boxConvex}get[Qt.sphereHeightfield](){return this.sphereHeightfield}get[Qt.boxHeightfield](){return this.boxHeightfield}get[Qt.convexHeightfield](){return this.convexHeightfield}get[Qt.sphereParticle](){return this.sphereParticle}get[Qt.planeParticle](){return this.planeParticle}get[Qt.boxParticle](){return this.boxParticle}get[Qt.convexParticle](){return this.convexParticle}get[Qt.cylinderCylinder](){return this.convexConvex}get[Qt.sphereCylinder](){return this.sphereConvex}get[Qt.planeCylinder](){return this.planeConvex}get[Qt.boxCylinder](){return this.boxConvex}get[Qt.convexCylinder](){return this.convexConvex}get[Qt.heightfieldCylinder](){return this.heightfieldCylinder}get[Qt.particleCylinder](){return this.particleCylinder}get[Qt.sphereTrimesh](){return this.sphereTrimesh}get[Qt.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new Kw,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,r){let o;this.contactPointPool.length?(o=this.contactPointPool.pop(),o.bi=t,o.bj=e):o=new Jo(t,e),o.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const a=this.currentContactMaterial;o.restitution=a.restitution,o.setSpookParams(a.contactEquationStiffness,a.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,u=i.material||e.material;return c&&u&&c.restitution>=0&&u.restitution>=0&&(o.restitution=c.restitution*u.restitution),o.si=s||n,o.sj=r||i,o}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,r=t.sj,o=this.world,a=this.currentContactMaterial;let c=a.friction;const u=s.material||n.material,f=r.material||i.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(c=u.friction*f.friction),c>0){const h=c*(o.frictionGravity||o.gravity).length();let p=n.invMass+i.invMass;p>0&&(p=1/p);const _=this.frictionEquationPool,g=_.length?_.pop():new yf(n,i,h*p),m=_.length?_.pop():new yf(n,i,h*p);return g.bi=m.bi=n,g.bj=m.bj=i,g.minForce=m.minForce=-h*p,g.maxForce=m.maxForce=h*p,g.ri.copy(t.ri),g.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(g.t,m.t),g.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),m.setSpookParams(a.frictionEquationStiffness,a.frictionEquationRelaxation,o.dt),g.enabled=m.enabled=t.enabled,e.push(g,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Gi.setZero(),Rs.setZero(),Fs.setZero();const s=e.bi;e.bj;for(let o=0;o!==t;o++)e=this.result[this.result.length-1-o],e.bi!==s?(Gi.vadd(e.ni,Gi),Rs.vadd(e.ri,Rs),Fs.vadd(e.rj,Fs)):(Gi.vsub(e.ni,Gi),Rs.vadd(e.rj,Rs),Fs.vadd(e.ri,Fs));const r=1/t;Rs.scale(r,n.ri),Fs.scale(r,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Gi.normalize(),Gi.tangents(n.t,i.t)}getContacts(t,e,n,i,s,r,o){this.contactPointPool=s,this.frictionEquationPool=o,this.result=i,this.frictionResult=r;const a=eS,c=nS,u=Qw,f=tS;for(let h=0,p=t.length;h!==p;h++){const _=t[h],g=e[h];let m=null;_.material&&g.material&&(m=n.getContactMaterial(_.material,g.material)||null);const d=_.type&ft.KINEMATIC&&g.type&ft.STATIC||_.type&ft.STATIC&&g.type&ft.KINEMATIC||_.type&ft.KINEMATIC&&g.type&ft.KINEMATIC;for(let v=0;v<_.shapes.length;v++){_.quaternion.mult(_.shapeOrientations[v],a),_.quaternion.vmult(_.shapeOffsets[v],u),u.vadd(_.position,u);const y=_.shapes[v];for(let x=0;x<g.shapes.length;x++){g.quaternion.mult(g.shapeOrientations[x],c),g.quaternion.vmult(g.shapeOffsets[x],f),f.vadd(g.position,f);const M=g.shapes[x];if(!(y.collisionFilterMask&M.collisionFilterGroup&&M.collisionFilterMask&y.collisionFilterGroup)||u.distanceTo(f)>y.boundingSphereRadius+M.boundingSphereRadius)continue;let E=null;y.material&&M.material&&(E=n.getContactMaterial(y.material,M.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const D=y.type|M.type,T=this[D];if(T){let w=!1;y.type<M.type?w=T.call(this,y,M,u,f,a,c,_,g,y,M,d):w=T.call(this,M,y,f,u,c,a,g,_,y,M,d),w&&d&&(n.shapeOverlapKeeper.set(y.id,M.id),n.bodyOverlapKeeper.set(_.id,g.id))}}}}}sphereSphere(t,e,n,i,s,r,o,a,c,u,f){if(f)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(o,a,t,e,c,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(o.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(a.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,s,r,o,a,c,u,f){const h=this.createContactEquation(o,a,t,e,c,u);if(h.ni.set(0,0,1),r.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Ho),h.ni.scale(h.ni.dot(Ho),Mf),Ho.vsub(Mf,h.rj),-Ho.dot(h.ni)<=t.radius){if(f)return!0;const p=h.ri,_=h.rj;p.vadd(n,p),p.vsub(o.position,p),_.vadd(i,_),_.vsub(a.position,_),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,s,r,o,a,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,f)}sphereBox(t,e,n,i,s,r,o,a,c,u,f){const h=this.v3pool,p=TS;n.vsub(i,Wo),e.getSideNormals(p,r);const _=t.radius;let g=!1;const m=PS,d=LS,v=RS;let y=null,x=0,M=0,E=0,D=null;for(let I=0,q=p.length;I!==q&&g===!1;I++){const k=ES;k.copy(p[I]);const Y=k.length();k.normalize();const Q=Wo.dot(k);if(Q<Y+_&&Q>0){const ct=DS,G=CS;ct.copy(p[(I+1)%3]),G.copy(p[(I+2)%3]);const X=ct.length(),$=G.length();ct.normalize(),G.normalize();const nt=Wo.dot(ct),it=Wo.dot(G);if(nt<X&&nt>-X&&it<$&&it>-$){const W=Math.abs(Q-Y-_);if((D===null||W<D)&&(D=W,M=nt,E=it,y=Y,m.copy(k),d.copy(ct),v.copy(G),x++,f))return!0}}}if(x){g=!0;const I=this.createContactEquation(o,a,t,e,c,u);m.scale(-_,I.ri),I.ni.copy(m),I.ni.negate(I.ni),m.scale(y,m),d.scale(M,d),m.vadd(d,m),v.scale(E,v),m.vadd(v,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),I.rj.vadd(i,I.rj),I.rj.vsub(a.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}let T=h.get();const w=AS;for(let I=0;I!==2&&!g;I++)for(let q=0;q!==2&&!g;q++)for(let k=0;k!==2&&!g;k++)if(T.set(0,0,0),I?T.vadd(p[0],T):T.vsub(p[0],T),q?T.vadd(p[1],T):T.vsub(p[1],T),k?T.vadd(p[2],T):T.vsub(p[2],T),i.vadd(T,w),w.vsub(n,w),w.lengthSquared()<_*_){if(f)return!0;g=!0;const Y=this.createContactEquation(o,a,t,e,c,u);Y.ri.copy(w),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(_,Y.ri),Y.rj.copy(T),Y.ri.vadd(n,Y.ri),Y.ri.vsub(o.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(a.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}h.release(T),T=null;const b=h.get(),N=h.get(),O=h.get(),A=h.get(),R=h.get(),L=p.length;for(let I=0;I!==L&&!g;I++)for(let q=0;q!==L&&!g;q++)if(I%3!==q%3){p[q].cross(p[I],b),b.normalize(),p[I].vadd(p[q],N),O.copy(n),O.vsub(N,O),O.vsub(i,O);const k=O.dot(b);b.scale(k,A);let Y=0;for(;Y===I%3||Y===q%3;)Y++;R.copy(n),R.vsub(A,R),R.vsub(N,R),R.vsub(i,R);const Q=Math.abs(k),ct=R.length();if(Q<p[Y].length()&&ct<_){if(f)return!0;g=!0;const G=this.createContactEquation(o,a,t,e,c,u);N.vadd(A,G.rj),G.rj.copy(G.rj),R.negate(G.ni),G.ni.normalize(),G.ri.copy(G.rj),G.ri.vadd(i,G.ri),G.ri.vsub(n,G.ri),G.ri.normalize(),G.ri.scale(_,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(a.position,G.rj),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}h.release(b,N,O,A,R)}planeBox(t,e,n,i,s,r,o,a,c,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,r,o,a,t,e,f)}convexConvex(t,e,n,i,s,r,o,a,c,u,f,h,p){const _=jS;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,r,_,h,p)){const g=[],m=YS;t.clipAgainstHull(n,s,e,i,r,_,-100,100,g);let d=0;for(let v=0;v!==g.length;v++){if(f)return!0;const y=this.createContactEquation(o,a,t,e,c,u),x=y.ri,M=y.rj;_.negate(y.ni),g[v].normal.negate(m),m.scale(g[v].depth,m),g[v].point.vadd(m,x),M.copy(g[v].point),x.vsub(n,x),M.vsub(i,M),x.vadd(n,x),x.vsub(o.position,x),M.vadd(i,M),M.vsub(a.position,M),this.result.push(y),d++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&d&&this.createFrictionFromAverage(d)}}sphereConvex(t,e,n,i,s,r,o,a,c,u,f){const h=this.v3pool;n.vsub(i,FS);const p=e.faceNormals,_=e.faces,g=e.vertices,m=t.radius;let d=!1;for(let v=0;v!==g.length;v++){const y=g[v],x=OS;r.vmult(y,x),i.vadd(x,x);const M=US;if(x.vsub(n,M),M.lengthSquared()<m*m){if(f)return!0;d=!0;const E=this.createContactEquation(o,a,t,e,c,u);E.ri.copy(M),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(o.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(a.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let v=0,y=_.length;v!==y&&d===!1;v++){const x=p[v],M=_[v],E=zS;r.vmult(x,E);const D=BS;r.vmult(g[M[0]],D),D.vadd(i,D);const T=kS;E.scale(-m,T),n.vadd(T,T);const w=VS;T.vsub(D,w);const b=w.dot(E),N=GS;if(n.vsub(D,N),b<0&&N.dot(E)>0){const O=[];for(let A=0,R=M.length;A!==R;A++){const L=h.get();r.vmult(g[M[A]],L),i.vadd(L,L),O.push(L)}if(bS(O,E,n)){if(f)return!0;d=!0;const A=this.createContactEquation(o,a,t,e,c,u);E.scale(-m,A.ri),E.negate(A.ni);const R=h.get();E.scale(-b,R);const L=h.get();E.scale(-m,L),n.vsub(i,A.rj),A.rj.vadd(L,A.rj),A.rj.vadd(R,A.rj),A.rj.vadd(i,A.rj),A.rj.vsub(a.position,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(o.position,A.ri),h.release(R),h.release(L),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);for(let I=0,q=O.length;I!==q;I++)h.release(O[I]);return}else for(let A=0;A!==M.length;A++){const R=h.get(),L=h.get();r.vmult(g[M[(A+1)%M.length]],R),r.vmult(g[M[(A+2)%M.length]],L),i.vadd(R,R),i.vadd(L,L);const I=IS;L.vsub(R,I);const q=NS;I.unit(q);const k=h.get(),Y=h.get();n.vsub(R,Y);const Q=Y.dot(q);q.scale(Q,k),k.vadd(R,k);const ct=h.get();if(k.vsub(n,ct),Q>0&&Q*Q<I.lengthSquared()&&ct.lengthSquared()<m*m){if(f)return!0;const G=this.createContactEquation(o,a,t,e,c,u);k.vsub(i,G.rj),k.vsub(n,G.ni),G.ni.normalize(),G.ni.scale(m,G.ri),G.rj.vadd(i,G.rj),G.rj.vsub(a.position,G.rj),G.ri.vadd(n,G.ri),G.ri.vsub(o.position,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult);for(let X=0,$=O.length;X!==$;X++)h.release(O[X]);h.release(R),h.release(L),h.release(k),h.release(ct),h.release(Y);return}h.release(R),h.release(L),h.release(k),h.release(ct),h.release(Y)}for(let A=0,R=O.length;A!==R;A++)h.release(O[A])}}}planeConvex(t,e,n,i,s,r,o,a,c,u,f){const h=HS,p=WS;p.set(0,0,1),s.vmult(p,p);let _=0;const g=qS;for(let m=0;m!==e.vertices.length;m++)if(h.copy(e.vertices[m]),r.vmult(h,h),i.vadd(h,h),h.vsub(n,g),p.dot(g)<=0){if(f)return!0;const v=this.createContactEquation(o,a,t,e,c,u),y=XS;p.scale(p.dot(g),y),h.vsub(y,y),y.vsub(n,v.ri),v.ni.copy(p),h.vsub(i,v.rj),v.ri.vadd(n,v.ri),v.ri.vsub(o.position,v.ri),v.rj.vadd(i,v.rj),v.rj.vsub(a.position,v.rj),this.result.push(v),_++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(v,this.frictionResult)}this.enableFrictionReduction&&_&&this.createFrictionFromAverage(_)}boxConvex(t,e,n,i,s,r,o,a,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,f)}sphereHeightfield(t,e,n,i,s,r,o,a,c,u,f){const h=e.data,p=t.radius,_=e.elementSize,g=ob,m=rb;Gt.pointToLocalFrame(i,r,n,m);let d=Math.floor((m.x-p)/_)-1,v=Math.ceil((m.x+p)/_)+1,y=Math.floor((m.y-p)/_)-1,x=Math.ceil((m.y+p)/_)+1;if(v<0||x<0||d>h.length||y>h[0].length)return;d<0&&(d=0),v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),d>=h.length&&(d=h.length-1),v>=h.length&&(v=h.length-1),x>=h[0].length&&(x=h[0].length-1),y>=h[0].length&&(y=h[0].length-1);const M=[];e.getRectMinMax(d,y,v,x,M);const E=M[0],D=M[1];if(m.z-p>D||m.z+p<E)return;const T=this.result;for(let w=d;w<v;w++)for(let b=y;b<x;b++){const N=T.length;let O=!1;if(e.getConvexTrianglePillar(w,b,!1),Gt.pointToWorldFrame(i,r,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,g,s,r,o,a,t,e,f)),f&&O||(e.getConvexTrianglePillar(w,b,!0),Gt.pointToWorldFrame(i,r,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,g,s,r,o,a,t,e,f)),f&&O))return!0;if(T.length-N>2)return}}boxHeightfield(t,e,n,i,s,r,o,a,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,f)}convexHeightfield(t,e,n,i,s,r,o,a,c,u,f){const h=e.data,p=e.elementSize,_=t.boundingSphereRadius,g=ib,m=sb,d=nb;Gt.pointToLocalFrame(i,r,n,d);let v=Math.floor((d.x-_)/p)-1,y=Math.ceil((d.x+_)/p)+1,x=Math.floor((d.y-_)/p)-1,M=Math.ceil((d.y+_)/p)+1;if(y<0||M<0||v>h.length||x>h[0].length)return;v<0&&(v=0),y<0&&(y=0),x<0&&(x=0),M<0&&(M=0),v>=h.length&&(v=h.length-1),y>=h.length&&(y=h.length-1),M>=h[0].length&&(M=h[0].length-1),x>=h[0].length&&(x=h[0].length-1);const E=[];e.getRectMinMax(v,x,y,M,E);const D=E[0],T=E[1];if(!(d.z-_>T||d.z+_<D))for(let w=v;w<y;w++)for(let b=x;b<M;b++){let N=!1;if(e.getConvexTrianglePillar(w,b,!1),Gt.pointToWorldFrame(i,r,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,g,s,r,o,a,null,null,f,m,null)),f&&N||(e.getConvexTrianglePillar(w,b,!0),Gt.pointToWorldFrame(i,r,e.pillarOffset,g),n.distanceTo(g)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(N=this.convexConvex(t,e.pillarConvex,n,g,s,r,o,a,null,null,f,m,null)),f&&N))return!0}}sphereParticle(t,e,n,i,s,r,o,a,c,u,f){const h=JS;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const _=this.createContactEquation(a,o,e,t,c,u);h.normalize(),_.rj.copy(h),_.rj.scale(t.radius,_.rj),_.ni.copy(h),_.ni.negate(_.ni),_.ri.set(0,0,0),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}planeParticle(t,e,n,i,s,r,o,a,c,u,f){const h=$S;h.set(0,0,1),o.quaternion.vmult(h,h);const p=ZS;if(i.vsub(o.position,p),h.dot(p)<=0){if(f)return!0;const g=this.createContactEquation(a,o,e,t,c,u);g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0);const m=KS;h.scale(h.dot(i),m),i.vsub(m,m),g.rj.copy(m),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}boxParticle(t,e,n,i,s,r,o,a,c,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,r,o,a,t,e,f)}convexParticle(t,e,n,i,s,r,o,a,c,u,f){let h=-1;const p=tb,_=eb;let g=null;const m=QS;if(m.copy(i),m.vsub(n,m),s.conjugate(wf),wf.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let d=0,v=t.faces.length;d!==v;d++){const y=[t.worldVertices[t.faces[d][0]]],x=t.worldFaceNormals[d];i.vsub(y[0],Sf);const M=-x.dot(Sf);if(g===null||Math.abs(M)<Math.abs(g)){if(f)return!0;g=M,h=d,p.copy(x)}}if(h!==-1){const d=this.createContactEquation(a,o,e,t,c,u);p.scale(g,_),_.vadd(i,_),_.vsub(n,_),d.rj.copy(_),p.negate(d.ni),d.ri.set(0,0,0);const v=d.ri,y=d.rj;v.vadd(i,v),v.vsub(a.position,v),y.vadd(n,y),y.vsub(o.position,y),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,r,o,a,c,u,f){return this.convexHeightfield(e,t,i,n,r,s,a,o,c,u,f)}particleCylinder(t,e,n,i,s,r,o,a,c,u,f){return this.convexParticle(e,t,i,n,r,s,a,o,c,u,f)}sphereTrimesh(t,e,n,i,s,r,o,a,c,u,f){const h=uS,p=hS,_=fS,g=dS,m=pS,d=mS,v=xS,y=cS,x=aS,M=yS;Gt.pointToLocalFrame(i,r,n,m);const E=t.radius;v.lowerBound.set(m.x-E,m.y-E,m.z-E),v.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(v,M);const D=lS,T=t.radius*t.radius;for(let A=0;A<M.length;A++)for(let R=0;R<3;R++)if(e.getVertex(e.indices[M[A]*3+R],D),D.vsub(m,x),x.lengthSquared()<=T){if(y.copy(D),Gt.pointToWorldFrame(i,r,y,D),D.vsub(n,x),f)return!0;let L=this.createContactEquation(o,a,t,e,c,u);L.ni.copy(x),L.ni.normalize(),L.ri.copy(L.ni),L.ri.scale(t.radius,L.ri),L.ri.vadd(n,L.ri),L.ri.vsub(o.position,L.ri),L.rj.copy(D),L.rj.vsub(a.position,L.rj),this.result.push(L),this.createFrictionEquationsFromContact(L,this.frictionResult)}for(let A=0;A<M.length;A++)for(let R=0;R<3;R++){e.getVertex(e.indices[M[A]*3+R],h),e.getVertex(e.indices[M[A]*3+(R+1)%3],p),p.vsub(h,_),m.vsub(p,d);const L=d.dot(_);m.vsub(h,d);let I=d.dot(_);if(I>0&&L<0&&(m.vsub(h,d),g.copy(_),g.normalize(),I=d.dot(g),g.scale(I,d),d.vadd(h,d),d.distanceTo(m)<t.radius)){if(f)return!0;const k=this.createContactEquation(o,a,t,e,c,u);d.vsub(m,k.ni),k.ni.normalize(),k.ni.scale(t.radius,k.ri),k.ri.vadd(n,k.ri),k.ri.vsub(o.position,k.ri),Gt.pointToWorldFrame(i,r,d,d),d.vsub(a.position,k.rj),Gt.vectorToWorldFrame(r,k.ni,k.ni),Gt.vectorToWorldFrame(r,k.ri,k.ri),this.result.push(k),this.createFrictionEquationsFromContact(k,this.frictionResult)}}const w=gS,b=_S,N=vS,O=oS;for(let A=0,R=M.length;A!==R;A++){e.getTriangleVertices(M[A],w,b,N),e.getNormal(M[A],O),m.vsub(w,d);let L=d.dot(O);if(O.scale(L,d),m.vsub(d,d),L=d.distanceTo(m),fe.pointInTriangle(d,w,b,N)&&L<t.radius){if(f)return!0;let I=this.createContactEquation(o,a,t,e,c,u);d.vsub(m,I.ni),I.ni.normalize(),I.ni.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(o.position,I.ri),Gt.pointToWorldFrame(i,r,d,d),d.vsub(a.position,I.rj),Gt.vectorToWorldFrame(r,I.ni,I.ni),Gt.vectorToWorldFrame(r,I.ri,I.ri),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}}M.length=0}planeTrimesh(t,e,n,i,s,r,o,a,c,u,f){const h=new S,p=iS;p.set(0,0,1),s.vmult(p,p);for(let _=0;_<e.vertices.length/3;_++){e.getVertex(_,h);const g=new S;g.copy(h),Gt.pointToWorldFrame(i,r,g,h);const m=sS;if(h.vsub(n,m),p.dot(m)<=0){if(f)return!0;const v=this.createContactEquation(o,a,t,e,c,u);v.ni.copy(p);const y=rS;p.scale(m.dot(p),y),h.vsub(y,y),v.ri.copy(y),v.ri.vsub(o.position,v.ri),v.rj.copy(h),v.rj.vsub(a.position,v.rj),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}}}const Gi=new S,Rs=new S,Fs=new S,Qw=new S,tS=new S,eS=new pe,nS=new pe,iS=new S,sS=new S,rS=new S,oS=new S,aS=new S;new S;const lS=new S,cS=new S,uS=new S,hS=new S,fS=new S,dS=new S,pS=new S,mS=new S,gS=new S,_S=new S,vS=new S,xS=new on,yS=[],Ho=new S,Mf=new S,MS=new S,wS=new S,SS=new S;function bS(l,t,e){let n=null;const i=l.length;for(let s=0;s!==i;s++){const r=l[s],o=MS;l[(s+1)%i].vsub(r,o);const a=wS;o.cross(t,a);const c=SS;e.vsub(r,c);const u=a.dot(c);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Wo=new S,ES=new S,DS=new S,CS=new S,TS=[new S,new S,new S,new S,new S,new S],AS=new S,PS=new S,LS=new S,RS=new S,FS=new S,IS=new S,NS=new S,US=new S,OS=new S,zS=new S,BS=new S,kS=new S,VS=new S,GS=new S;new S;new S;const HS=new S,WS=new S,qS=new S,XS=new S,jS=new S,YS=new S,$S=new S,ZS=new S,KS=new S,JS=new S,wf=new pe,QS=new S;new S;const tb=new S,Sf=new S,eb=new S,nb=new S,ib=new S,sb=[0],rb=new S,ob=new S;class bf{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let r=i.length-1;r>=s;r--)i[r+1]=i[r];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,r=i.length;let o=0;for(let a=0;a<s;a++){let c=!1;const u=n[a];for(;u>i[o];)o++;c=u===i[o],c||Ef(t,u)}o=0;for(let a=0;a<r;a++){let c=!1;const u=i[a];for(;u>n[o];)o++;c=n[o]===u,c||Ef(e,u)}}}function Ef(l,t){l.push((t&4294901760)>>16,t&65535)}const Rl=(l,t)=>l<t?`${l}-${t}`:`${t}-${l}`;class ab{constructor(){this.data={keys:[]}}get(t,e){const n=Rl(t,e);return this.data[n]}set(t,e,n){const i=Rl(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Rl(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class lb extends wp{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new S,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new S,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new gw,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new Xw,this.constraints=[],this.narrowphase=new Jw(this),this.collisionMatrix=new uf,this.collisionMatrixPrevious=new uf,this.bodyOverlapKeeper=new bf,this.shapeOverlapKeeper=new bf,this.contactmaterials=[],this.contactMaterialTable=new ab,this.defaultMaterial=new oo("default"),this.defaultContactMaterial=new ro(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof ua?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ALL,n.from=t,n.to=e,n.callback=i,Fl.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ANY,n.from=t,n.to=e,n.result=i,Fl.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.CLOSEST,n.from=t,n.to=e,n.result=i,Fl.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof ft&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const r=i[s];if(r.id===t)return r}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ge.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ge.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ge.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const r=this.accumulator/t;for(let o=0;o!==this.bodies.length;o++){const a=this.bodies[o];a.previousPosition.lerp(a.position,r,a.interpolatedPosition),a.previousQuaternion.slerp(a.quaternion,r,a.interpolatedQuaternion),a.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=db,i=pb,s=this.bodies.length,r=this.bodies,o=this.solver,a=this.gravity,c=this.doProfiling,u=this.profile,f=ft.DYNAMIC;let h=-1/0;const p=this.constraints,_=fb;a.length();const g=a.x,m=a.y,d=a.z;let v=0;for(c&&(h=ge.now()),v=0;v!==s;v++){const A=r[v];if(A.type===f){const R=A.force,L=A.mass;R.x+=L*g,R.y+=L*m,R.z+=L*d}}for(let A=0,R=this.subsystems.length;A!==R;A++)this.subsystems[A].update();c&&(h=ge.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(u.broadphase=ge.now()-h);let y=p.length;for(v=0;v!==y;v++){const A=p[v];if(!A.collideConnected)for(let R=n.length-1;R>=0;R-=1)(A.bodyA===n[R]&&A.bodyB===i[R]||A.bodyB===n[R]&&A.bodyA===i[R])&&(n.splice(R,1),i.splice(R,1))}this.collisionMatrixTick(),c&&(h=ge.now());const x=hb,M=e.length;for(v=0;v!==M;v++)x.push(e[v]);e.length=0;const E=this.frictionEquations.length;for(v=0;v!==E;v++)_.push(this.frictionEquations[v]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,_),c&&(u.narrowphase=ge.now()-h),c&&(h=ge.now()),v=0;v<this.frictionEquations.length;v++)o.addEquation(this.frictionEquations[v]);const D=e.length;for(let A=0;A!==D;A++){const R=e[A],L=R.bi,I=R.bj,q=R.si,k=R.sj;let Y;if(L.material&&I.material?Y=this.getContactMaterial(L.material,I.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,L.material&&I.material&&(L.material.friction>=0&&I.material.friction>=0&&L.material.friction*I.material.friction,L.material.restitution>=0&&I.material.restitution>=0&&(R.restitution=L.material.restitution*I.material.restitution)),o.addEquation(R),L.allowSleep&&L.type===ft.DYNAMIC&&L.sleepState===ft.SLEEPING&&I.sleepState===ft.AWAKE&&I.type!==ft.STATIC){const Q=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),ct=I.sleepSpeedLimit**2;Q>=ct*2&&(L.wakeUpAfterNarrowphase=!0)}if(I.allowSleep&&I.type===ft.DYNAMIC&&I.sleepState===ft.SLEEPING&&L.sleepState===ft.AWAKE&&L.type!==ft.STATIC){const Q=L.velocity.lengthSquared()+L.angularVelocity.lengthSquared(),ct=L.sleepSpeedLimit**2;Q>=ct*2&&(I.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(L,I,!0),this.collisionMatrixPrevious.get(L,I)||(Mr.body=I,Mr.contact=R,L.dispatchEvent(Mr),Mr.body=L,I.dispatchEvent(Mr)),this.bodyOverlapKeeper.set(L.id,I.id),this.shapeOverlapKeeper.set(q.id,k.id)}for(this.emitContactEvents(),c&&(u.makeContactConstraints=ge.now()-h,h=ge.now()),v=0;v!==s;v++){const A=r[v];A.wakeUpAfterNarrowphase&&(A.wakeUp(),A.wakeUpAfterNarrowphase=!1)}for(y=p.length,v=0;v!==y;v++){const A=p[v];A.update();for(let R=0,L=A.equations.length;R!==L;R++){const I=A.equations[R];o.addEquation(I)}}o.solve(t,this),c&&(u.solve=ge.now()-h),o.removeAllEquations();const T=Math.pow;for(v=0;v!==s;v++){const A=r[v];if(A.type&f){const R=T(1-A.linearDamping,t),L=A.velocity;L.scale(R,L);const I=A.angularVelocity;if(I){const q=T(1-A.angularDamping,t);I.scale(q,I)}}}this.dispatchEvent(ub),c&&(h=ge.now());const b=this.stepnumber%(this.quatNormalizeSkip+1)===0,N=this.quatNormalizeFast;for(v=0;v!==s;v++)r[v].integrate(t,b,N);this.clearForces(),this.broadphase.dirty=!0,c&&(u.integrate=ge.now()-h),this.stepnumber+=1,this.dispatchEvent(cb);let O=!0;if(this.allowSleep)for(O=!1,v=0;v!==s;v++){const A=r[v];A.sleepTick(this.time),A.sleepState!==ft.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Jn,Qn),t){for(let s=0,r=Jn.length;s<r;s+=2)wr.bodyA=this.getBodyById(Jn[s]),wr.bodyB=this.getBodyById(Jn[s+1]),this.dispatchEvent(wr);wr.bodyA=wr.bodyB=null}if(e){for(let s=0,r=Qn.length;s<r;s+=2)Sr.bodyA=this.getBodyById(Qn[s]),Sr.bodyB=this.getBodyById(Qn[s+1]),this.dispatchEvent(Sr);Sr.bodyA=Sr.bodyB=null}Jn.length=Qn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Jn,Qn),n){for(let s=0,r=Jn.length;s<r;s+=2){const o=this.getShapeById(Jn[s]),a=this.getShapeById(Jn[s+1]);ti.shapeA=o,ti.shapeB=a,o&&(ti.bodyA=o.body),a&&(ti.bodyB=a.body),this.dispatchEvent(ti)}ti.bodyA=ti.bodyB=ti.shapeA=ti.shapeB=null}if(i){for(let s=0,r=Qn.length;s<r;s+=2){const o=this.getShapeById(Qn[s]),a=this.getShapeById(Qn[s+1]);ei.shapeA=o,ei.shapeB=a,o&&(ei.bodyA=o.body),a&&(ei.bodyB=a.body),this.dispatchEvent(ei)}ei.bodyA=ei.bodyB=ei.shapeA=ei.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new on;const Fl=new fe,ge=globalThis.performance||{};if(!ge.now){let l=Date.now();ge.timing&&ge.timing.navigationStart&&(l=ge.timing.navigationStart),ge.now=()=>Date.now()-l}new S;const cb={type:"postStep"},ub={type:"preStep"},Mr={type:ft.COLLIDE_EVENT_NAME,body:null,contact:null},hb=[],fb=[],db=[],pb=[],Jn=[],Qn=[],wr={type:"beginContact",bodyA:null,bodyB:null},Sr={type:"endContact",bodyA:null,bodyB:null},ti={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},ei={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};Pd.registerPlugin(ga,kc,Qr);const Re=new FM,Ai=document.querySelector("#canvasContainer"),Ea=document.querySelector("#sidePanel");let mb=-9;const Fe=new lb({gravity:new S(0,mb,0)});function gb(){for(let l=0;l<li.length;l++)Pi[l].position.copy(li[l].position),Pi[l].quaternion.copy(li[l].quaternion)}Fe.defaultContactMaterial.contactEquationRestitution=.1;Fe.defaultContactMaterial.contactEquationStiffness=5e3;Fe.defaultContactMaterial.contactEquationRelaxationTime=.5;window.onresize=function(){Vp()};const Ei=new tn(45,Ai.offsetWidth/Ai.offsetHeight,.5,1e3);Ei.position.set(-9,7,-10);const ao=new vp({antialias:!0,canvas:document.querySelector("canvas")});ao.setSize(Ai.offsetWidth,Ai.offsetHeight);ao.setPixelRatio(window.devicePixelRatio);ao.shadowMap.enabled=!0;const _b=new GM(Ei,ao.domElement);_b.update();const vb=new kM(16777215,.3);Re.add(vb);var Fp=new no(50,60,40);Fp.scale(-1,1,1);var xb=new Xc({map:new $c().load("./tower_images/pano2.jpg")}),Ip=new ve(Fp,xb);Ip.position.set(0,0,0);Re.add(Ip);const Qc=new Mp(16777215,.7,2e3);Qc.castShadow=!0;Qc.position.set(-3,10,3);Re.add(Qc);const tu=new Mp(16777215,.4,2e3);tu.castShadow=!0;tu.position.set(2,10,-2);Re.add(tu);const Np=new $c().load("./tower_images/wood.jpg"),Da=new ft({shape:new Rp(5,5,.25,50),type:ft.STATIC});Da.position.set(0,0,0);Fe.addBody(Da);const lo=new ve(new Sa(5,5,.25,50),new io({map:Np}));lo.receiveShadow=!0;Re.add(lo);lo.userData.ground=!0;lo.position.copy(Da.position);lo.quaternion.copy(Da.quaternion);const Ca=new ft({shape:new Rp(.7,.7,16,50),type:ft.STATIC});Ca.position.set(0,-8,0);Fe.addBody(Ca);const co=new ve(new Sa(.7,.7,16,50),new io({map:Np}));co.receiveShadow=!0;Re.add(co);co.userData.ground=!0;co.position.copy(Ca.position);co.quaternion.copy(Ca.quaternion);const li=[],Pi=[],yb=new qn(.1,3,3,10,10,10),Mb=new qn(.1,3,3,10,10,10),wb=new qn(3,.1,3,10,10,10),Sb=new qn(3,3,.1,10,10,10),bb=new qn(3,3,.1,10,10,10),uo=new io({transparent:!0,opacity:.1,color:65536}),Up=new ve(yb,uo),Op=new ve(Mb,uo),zp=new ve(wb,uo),Bp=new ve(Sb,uo),kp=new ve(bb,uo);Re.add(Up);Pi.push(Up);Re.add(Op);Pi.push(Op);Re.add(zp);Pi.push(zp);Re.add(Bp);Pi.push(Bp);Re.add(kp);Pi.push(kp);const eu=new ft({STATIC:!0,shape:new Fi(new S(.05,1.5,1.5))});eu.position.set(1.5,1.6,0);const nu=new ft({STATIC:!0,shape:new Fi(new S(.05,1.5,1.5))});nu.position.set(-1.5,1.6,0);const iu=new ft({STATIC:!0,shape:new Fi(new S(1.5,.05,1.5))});iu.position.set(0,.1,0);const su=new ft({STATIC:!0,shape:new Fi(new S(1.5,1.5,.05))});su.position.set(0,1.6,1.5);const ru=new ft({STATIC:!0,shape:new Fi(new S(1.5,1.5,.05))});ru.position.set(0,1.6,-1.5);Fe.addBody(eu);li.push(eu);Fe.addBody(nu);li.push(nu);Fe.addBody(iu);li.push(iu);Fe.addBody(su);li.push(su);Fe.addBody(ru);li.push(ru);const Df=[16711680,65280,255,14836127,16772864,16285992];function Eb(l,t,e){l=new ft({mass:1e-4,shape:new Lp(.15),sleepSpeedLimit:.5}),l.position.set(t.x,t.y,t.z),Fe.addBody(l),li.push(l);const i=new no(.15,15,15),s=new io({color:e,roughness:0});l=new ve(i,s),Re.add(l),Pi.push(l)}let Ki;function Db(){Ki=400+Math.floor(Math.random()*500),console.log(Ki);let l=0;for(let e=0;e<Ki;e++){let n=Math.floor(Math.random()*Df.length);var t=Df[n];e%20==0&&(l+=.3);let i=Math.cos(2*Math.PI*e*.05),s=Math.sin(2*Math.PI*e*.05);Eb("candy",{x:i,y:l,z:s},t)}}Db();const Cb=new no(.08,8,8),Tb=new IM({color:65280});let ho=new ve(Cb,Tb);ho.visible=!1;Re.add(ho);const Ab=new Ma(100,100),Pb=new io;let lr=new ve(Ab,Pb);lr.visible=!1;Re.add(lr);const jr=[],Lb=[],Cf=new oo;new $c().load("./tower_images/wood.jpg");const Rb=new ro(Cf,Cf,{friction:.01});Fe.addContactMaterial(Rb);document.getElementById("resetMeter");document.getElementById("maxScore");for(let l=0;l<jr.length;l++)jr[l].id=Lb[l].userData.name;function Fb(l){let t=l.userData.name;return jr.find(n=>n.id===t)}function ou(){for(let l=0;l<jr.length;l++)jr[l].sleepState=0}const Yr=document.getElementById("button1");function Vp(){location.reload()}Yr.addEventListener("click",function(){Vp()});Yr.addEventListener("mouseover",function(){Yr.className="font-bold border-4 text-green-600 bg-blue-600 border-green-600 inline-block px-4 py-1 rounded-full"});Yr.addEventListener("mouseout",()=>{Yr.className="font-bold border-4 text-green-600 bg-yellow-400 border-green-600 inline-block px-4 py-1 rounded-full"});const $r=document.getElementById("guessButton");$r.addEventListener("mouseover",function(){$r.className="font-bold border-4 text-green-600 bg-blue-600 border-green-600 inline-block px-4 py-1 rounded-full"});$r.addEventListener("mouseout",()=>{$r.className="font-bold border-4 text-green-600 bg-yellow-400 border-green-600 inline-block px-4 py-1 rounded-full"});let Tf=0;const Il=[],Nl=[],Ib=document.getElementById("lowGuesses"),Nb=document.getElementById("highGuesses"),qo=document.getElementById("gameMessage");$r.addEventListener("click",()=>{Tf+=1;let l=document.getElementById("playerGuess").value;if(console.log(Ki),Il.includes(l+" ")||Nl.includes(l+" "))qo.innerText="You already guessed that number. Guess a number you haven't tried yet!";else if(l==Ki)qo.innerText="You Guessed it! Way to go! You win!!! It took you "+Tf+" tries.";else if(l<Ki)Il.push(l+" "),qo.innerText="Your Guess of "+l+" is Too Low, but Guess Again. You can still win!!",Ib.innerText="Low Guesses: "+Il;else if(l>Ki)Nl.push(l+" "),qo.innerText="You Guessed Too High, Guess Lower than "+l+". You can still win this!",Nb.innerText="High Guesses: "+Nl;else return});function Gp(l,t,e,n){const i=new Pt;i.x=(l-Ea.offsetWidth)/Ai.offsetWidth*2-1,i.y=-(t/window.innerHeight*2-1),Zr.setFromCamera(i,n);const s=Zr.intersectObject(e);return s.length>0?s[0].point:void 0}function Hp(l){ho.position.copy(l)}function Ub(l){Li.position.copy(l),Kr.update()}function Ob(l,t){lr.position.copy(l),lr.quaternion.copy(t.quaternion)}let Li;const zb=new Lp(.1);Li=new ft({mass:0});Li.addShape(zb);Li.collisionFilterGroup=0;Li.collisionFilterMask=0;Fe.addBody(Li);function Bb(l,t){const e=new S().copy(l).vsub(t.position),i=t.quaternion.inverse().vmult(e);Li.position.copy(l),Kr=new Gw(t,i,Li,new S(0,0,0)),Fe.addConstraint(Kr)}function kb(){Fe.removeConstraint(Kr),Kr=void 0}const Zr=new VM,$s=new Pt,Af=new Pt;var Ul=new Le;new Le;var fc=!1;let Kr,Pf,au=!1;window.addEventListener("pointerdown",l=>{$s.x=(l.clientX-Ea.offsetWidth)/Ai.offsetWidth*2-1,$s.y=-(l.clientY/window.innerHeight)*2+1,Zr.setFromCamera($s,Ei);const t=Zr.intersectObjects(Re.children);if(t.length>0&&t[0].object.userData.draggable){ou(),Ul=t[0].object,fc=!0;const e=Gp(l.clientX,l.clientY,Ul,Ei);if(!e)return;ho.visible=!0,Hp(e),Ob(e,Ei),Pf=Fb(Ul),Bb(e,Pf),requestAnimationFrame(()=>{au=!0})}});window.addEventListener("pointermove",l=>{if(!au)return;const t=Gp(l.clientX,l.clientY,lr,Ei);t&&(ou(),Hp(t),Ub(t))});window.addEventListener("pointerup",l=>{if(au=!1,ho.visible=!1,ou(),kb(),fc==!0){$s.x=(l.clientX-Ea.offsetWidth)/Ai.offsetWidth*2-1,$s.y=-(l.clientY/window.innerHeight)*2+1,Zr.setFromCamera($s,Ei),lr.position.copy(0,0,0),fc=!1;return}});window.addEventListener("mousemove",l=>{Af.x=(l.clientX-Ea.offsetWidth)/Ai.offsetWidth*2-1,Af.y=-(l.clientY/window.innerHeight)*2+1});function Wp(){requestAnimationFrame(Wp),Fe.fixedStep(),gb(),ao.render(Re,Ei)}Wp();
