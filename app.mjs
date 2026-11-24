var h=class{withFields(t){let n=Object.keys(this).map(i=>i in t?t[i]:this[i]);return new this.constructor(...n)}},Qa=class{static fromArray(t,n){return oi(t,n)}[Symbol.iterator](){return new nf(this)}toArray(){return[...this]}atLeastLength(t){let n=this;for(;t-- >0&&n;)n=n.tail;return n!==void 0}hasLength(t){let n=this;for(;t-- >0&&n;)n=n.tail;return t===-1&&n instanceof _}countLength(){let t=this,n=0;for(;t;)t=t.tail,n++;return n-1}};function d(e,t){return new tr(e,t)}function oi(e,t){let n=t||g;for(let i=e.length-1;i>=0;--i)n=new tr(e[i],n);return n}var nf=class{#e;constructor(t){this.#e=t}next(){if(this.#e instanceof _)return{done:!0};{let{head:t,tail:n}=this.#e;return this.#e=n,{value:t,done:!1}}}},_=class extends Qa{},g=new _,t$=()=>g,of=e=>e instanceof _,tr=class extends Qa{constructor(t,n){super(),this.head=t,this.tail=n}},Ns=(e,t)=>new tr(e,t),so=e=>e instanceof tr,qs=e=>e.head,Io=e=>e.tail,nr=class{bitSize;byteSize;bitOffset;rawBuffer;constructor(t,n,i){if(!(t instanceof Uint8Array))throw globalThis.Error("BitArray can only be constructed from a Uint8Array");if(this.bitSize=n??t.length*8,this.byteSize=Math.trunc((this.bitSize+7)/8),this.bitOffset=i??0,this.bitSize<0)throw globalThis.Error(`BitArray bit size is invalid: ${this.bitSize}`);if(this.bitOffset<0||this.bitOffset>7)throw globalThis.Error(`BitArray bit offset is invalid: ${this.bitOffset}`);if(t.length!==Math.trunc((this.bitOffset+this.bitSize+7)/8))throw globalThis.Error("BitArray buffer length is invalid");this.rawBuffer=t}byteAt(t){if(!(t<0||t>=this.byteSize))return Ds(this.rawBuffer,this.bitOffset,t)}equals(t){if(this.bitSize!==t.bitSize)return!1;let n=Math.trunc(this.bitSize/8);if(this.bitOffset===0&&t.bitOffset===0){for(let o=0;o<n;o++)if(this.rawBuffer[o]!==t.rawBuffer[o])return!1;let i=this.bitSize%8;if(i){let o=8-i;if(this.rawBuffer[n]>>o!==t.rawBuffer[n]>>o)return!1}}else{for(let o=0;o<n;o++){let r=Ds(this.rawBuffer,this.bitOffset,o),s=Ds(t.rawBuffer,t.bitOffset,o);if(r!==s)return!1}let i=this.bitSize%8;if(i){let o=Ds(this.rawBuffer,this.bitOffset,n),r=Ds(t.rawBuffer,t.bitOffset,n),s=8-i;if(o>>s!==r>>s)return!1}}return!0}get buffer(){if(this.bitOffset!==0||this.bitSize%8!==0)throw new globalThis.Error("BitArray.buffer does not support unaligned bit arrays");return this.rawBuffer}get length(){if(this.bitOffset!==0||this.bitSize%8!==0)throw new globalThis.Error("BitArray.length does not support unaligned bit arrays");return this.rawBuffer.length}};function Ds(e,t,n){if(t===0)return e[n]??0;{let i=e[n]<<t&255,o=e[n+1]>>8-t;return i|o}}var el=class{constructor(t){this.value=t}};var tl=class e extends h{static isResult(t){return t instanceof e}},$=class extends tl{constructor(t){super(),this[0]=t}isOk(){return!0}},tt=e=>new $(e),ii=e=>e instanceof $,Us=e=>e[0],b=class extends tl{constructor(t){super(),this[0]=t}isOk(){return!1}},ct=e=>new b(e),n$=e=>e instanceof b;function ht(e,t){let n=[e,t];for(;n.length;){let i=n.pop(),o=n.pop();if(i===o)continue;if(!e$(i)||!e$(o)||!i3(i,o)||Zh(i,o)||Qh(i,o)||e3(i,o)||t3(i,o)||n3(i,o)||o3(i,o))return!1;let s=Object.getPrototypeOf(i);if(s!==null&&typeof s.equals=="function")try{if(i.equals(o))continue;return!1}catch{}let[f,l]=Yh(i),u=f(i),a=f(o);if(u.length!==a.length)return!1;for(let c of u)n.push(l(i,c),l(o,c))}return!0}function Yh(e){if(e instanceof Map)return[t=>t.keys(),(t,n)=>t.get(n)];{let t=e instanceof globalThis.Error?["message"]:[];return[n=>[...t,...Object.keys(n)],(n,i)=>n[i]]}}function Zh(e,t){return e instanceof Date&&(e>t||e<t)}function Qh(e,t){return!(e instanceof nr)&&e.buffer instanceof ArrayBuffer&&e.BYTES_PER_ELEMENT&&!(e.byteLength===t.byteLength&&e.every((n,i)=>n===t[i]))}function e3(e,t){return Array.isArray(e)&&e.length!==t.length}function t3(e,t){return e instanceof Map&&e.size!==t.size}function n3(e,t){return e instanceof Set&&(e.size!=t.size||[...e].some(n=>!t.has(n)))}function o3(e,t){return e instanceof RegExp&&(e.source!==t.source||e.flags!==t.flags)}function e$(e){return typeof e=="object"&&e!==null}function i3(e,t){return typeof e!="object"&&typeof t!="object"&&(!e||!t)||[Promise,WeakSet,WeakMap,Function].some(i=>e instanceof i)?!1:e.constructor===t.constructor}function or(e,t){return t===0?0:e%t}function nl(e,t){return Math.trunc(Fo(e,t))}function Fo(e,t){return t===0?0:e/t}function Nt(e,t,n,i,o,r,s){let f=new globalThis.Error(r);f.gleam_error=e,f.file=t,f.module=n,f.line=i,f.function=o,f.fn=o;for(let l in s)f[l]=s[l];return f}var qt=class extends h{},ir=new qt,o$=()=>ir;var Ut=class extends h{},rr=new Ut,i$=()=>rr;var rf=class extends h{},sr=new rf,r$=()=>sr;var x=class extends h{constructor(t){super(),this[0]=t}};var wn=class extends h{},C=new wn;var s$=new WeakMap,sf=new DataView(new ArrayBuffer(8)),af=0;function cf(e){let t=s$.get(e);if(t!==void 0)return t;let n=af++;return af===2147483647&&(af=0),s$.set(e,n),n}function a$(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}function ff(e){let t=0,n=e.length;for(let i=0;i<n;i++)t=Math.imul(31,t)+e.charCodeAt(i)|0;return t}function c$(e){sf.setFloat64(0,e);let t=sf.getInt32(0),n=sf.getInt32(4);return Math.imul(73244475,t>>16^t)^n}function r3(e){return ff(e.toString())}function s3(e){let t=Object.getPrototypeOf(e);if(t!==null&&typeof t.hashCode=="function")try{let i=e.hashCode(e);if(typeof i=="number")return i}catch{}if(e instanceof Promise||e instanceof WeakSet||e instanceof WeakMap)return cf(e);if(e instanceof Date)return c$(e.getTime());let n=0;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||e instanceof Uint8Array)for(let i=0;i<e.length;i++)n=Math.imul(31,n)+ao(e[i])|0;else if(e instanceof Set)e.forEach(i=>{n=n+ao(i)|0});else if(e instanceof Map)e.forEach((i,o)=>{n=n+a$(ao(i),ao(o))|0});else{let i=Object.keys(e);for(let o=0;o<i.length;o++){let r=i[o],s=e[r];n=n+a$(ao(s),ff(r))|0}}return n}function ao(e){if(e===null)return 1108378658;if(e===void 0)return 1108378659;if(e===!0)return 1108378657;if(e===!1)return 1108378656;switch(typeof e){case"number":return c$(e);case"string":return ff(e);case"bigint":return r3(e);case"object":return s3(e);case"symbol":return cf(e);case"function":return cf(e);default:return 0}}var lo=class{constructor(t,n){this.size=t,this.root=n}},ol=5,a3=(1<<ol)-1,Gs=Symbol(),Hs=Symbol(),f$=f3(0),l3=new lo(0,f$),c3=ct(void 0);function il(e,t,n,i){return{datamap:t,nodemap:n,data:i,[Hs]:e}}function f3(e){return il(e,0,0,[])}function u3(e,t){if(e[Hs]===t)return e;let n=e.data.slice(0);return il(t,e.datamap,e.nodemap,n)}function lf(e,t,n,i){return e.data[n]===i||(e=u3(e,t),e.data[n]=i),e}function l$(e,t,n,i,o,r){let s=e.data,f=s.length,l=new Array(f+2),u=0,a=0;for(;u<i;)l[a++]=s[u++];for(l[a++]=o,l[a++]=r;u<f;)l[a++]=s[u++];return il(t,e.datamap|n,e.nodemap,l)}function ar(){return l3}function Ks(e){return e.size}function si(e,t){let n=u$(e.root,t,ao(t));return n!==Gs?tt(n):c3}function u$(e,t,n){for(let o=0;o<32;o+=ol){let r=e.data,s=P$(n,o);if(e.nodemap&s)e=r[r.length-1-Ws(e.nodemap,s)];else if(e.datamap&s){let f=Math.imul(Ws(e.datamap,s),2);return ht(t,r[f])?r[f+1]:Gs}else return Gs}let i=e.data;for(let o=0;o<i.length;o+=2)if(ht(t,i[o]))return i[o+1];return Gs}function uf(e){return{generation:p3(e),root:e.root,size:e.size,dict:e}}function pf(e){return e.root===e.dict.root?e.dict:new lo(e.size,e.root)}function p3(e){let t=e.root;if(t[Hs]<Number.MAX_SAFE_INTEGER)return t[Hs]+1;let n=[t];for(;n.length;){let i=n.pop();i[Hs]=0;let o=data.length-$f(i.nodemap);for(let r=o;r<i.data.length;++r)n.push(i.data[r])}return 1}function p$(e,t,n){let i=ao(e);return n.root=zs(n,n.root,e,t,i,0),n}function $$(e,t,n,i){let o=ao(e),r=u$(i.root,e,o);return r!==Gs&&(n=t(r)),i.root=zs(i,i.root,e,n,o,0),i}function zs(e,t,n,i,o,r){let s=t.data,f=e.generation;if(r>32){for(let F=0;F<s.length;F+=2)if(ht(n,s[F]))return lf(t,f,F+1,i);return e.size+=1,l$(t,f,0,s.length,n,i)}let l=P$(o,r);if(t.nodemap&l){let F=s.length-1-Ws(t.nodemap,l),M=s[F];return M=zs(e,M,n,i,o,r+ol),lf(t,f,F,M)}let u=Math.imul(Ws(t.datamap,l),2);if((t.datamap&l)===0)return e.size+=1,l$(t,f,l,u,n,i);if(ht(n,s[u]))return lf(t,f,u+1,i);let a=r+ol,c=f$;c=zs(e,c,n,i,o,a);let p=s[u],P=s[u+1],m=ao(p);c=zs(e,c,p,P,m,a),e.size-=1;let k=s.length,y=k-1-Ws(t.nodemap,l),v=new Array(k-1),L=0,I=0;for(;L<u;)v[I++]=s[L++];for(L+=2;L<=y;)v[I++]=s[L++];for(v[I++]=c;L<k;)v[I++]=s[L++];return il(f,t.datamap^l,t.nodemap|l,v)}function Ao(e,t,n){let i=[e.root];for(;i.length;){let o=i.pop(),r=o.data,s=r.length-$f(o.nodemap);for(let f=0;f<s;f+=2)t=n(t,r[f],r[f+1]);for(let f=s;f<r.length;++f)i.push(r[f])}return t}function $f(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),Math.imul(e+(e>>>4)&252645135,16843009)>>>24}function Ws(e,t){return $f(e&t-1)}function P$(e,t){return 1<<(e>>>t&a3)}function P3(e,t){for(;;){let n=e,i=t;if(i instanceof _)return pf(n);{let o=i.tail,r=i.head[0],s=i.head[1];e=p$(r,s,n),t=o}}}function Mo(e){return P3(uf(ar()),e)}function d3(e,t,n){let i;Ks(t)>=Ks(n)?i=[t,n,e]:i=[n,t,(c,p,P)=>e(c,P,p)];let r=i,s=r[0],f=r[1],l=r[2],u=uf(s),a=Ao(f,u,(c,p,P)=>$$(p,k=>l(p,k,P),P,c));return pf(a)}function h3(e,t,n){return d3((i,o,r)=>n(o,r),e,t)}function d$(e,t){return h3(e,t,(n,i)=>i)}function h$(e,t){return Ao(e,void 0,(n,i,o)=>(t(i,o),n))}function sl(e){return e>=0?e:e*-1}function lr(e,t){return e>t?e:t}function Pf(e,t){return e<t?e:t}function Xs(e,t,n){if(t>=n){let r=Pf(e,t);return lr(r,n)}else{let r=Pf(e,n);return lr(r,t)}}function _$(e,t){return e===t?rr:e<t?ir:sr}var co=class extends h{},jn=new co,df=class extends h{},Ys=new df;function m3(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i;e=n.tail,t=i+1}}function ot(e){return m3(e,0)}function _3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return r;{let s=i.head,f=i.tail;o(s)?(e=f,t=o,n=r+1):(e=f,t=o,n=r)}}}function w$(e,t){return _3(e,t,0)}function li(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i;{let o=n.head;e=n.tail,t=d(o,i)}}}function S(e){return li(e,g)}function hf(e,t){for(;;){let n=e,i=t;if(n instanceof _)return!1;{let o=n.head;if(ht(o,i))return!0;e=n.tail,t=i}}}function g3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return S(r);{let s=i.head,f=i.tail,l;o(s)?l=d(s,r):l=r;let a=l;e=f,t=o,n=a}}}function ci(e,t){return g3(e,t,g)}function x3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return S(r);{let s=i.head,f=i.tail,l,u=o(s);if(u instanceof $){let c=u[0];l=d(c,r)}else l=r;let a=l;e=f,t=o,n=a}}}function mf(e,t){return x3(e,t,g)}function w3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return S(r);{let s=i.head;e=i.tail,t=o,n=d(o(s),r)}}}function Ze(e,t){return w3(e,t,g)}function k3(e,t,n,i){for(;;){let o=e,r=t,s=n,f=i;if(o instanceof _)return S(f);{let l=o.head,u=o.tail,a=d(r(l,s),f);e=u,t=r,n=s+1,i=a}}}function k$(e,t){return k3(e,t,0,g)}function b3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return new $(S(r));{let s=i.head,f=i.tail,l=o(s);if(l instanceof $){let u=l[0];e=f,t=o,n=d(u,r)}else return l}}}function wt(e,t){return b3(e,t,g)}function al(e,t){for(;;){let n=e,i=t;if(i<=0)return n;if(n instanceof _)return n;e=n.tail,t=i-1}}function y3(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i;{let o=n.head;e=n.tail,t=d(o,i)}}}function it(e,t){return y3(S(e),t)}function ll(e,t){return d(t,e)}function T3(e,t){for(;;){let n=e,i=t;if(n instanceof _)return S(i);{let o=n.head;e=n.tail,t=li(o,i)}}}function ur(e){return T3(e,g)}function b$(e,t){return ur(Ze(e,t))}function kt(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return o;{let s=i.head;e=i.tail,t=r(o,s),n=r}}}function cl(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return new $(o);{let s=i.head,f=i.tail,l=r(o,s);if(l instanceof $){let u=l[0];e=f,t=u,n=r}else return l}}}function y$(e,t){for(;;){let n=e,i=t;if(n instanceof _)return new b(void 0);{let o=n.head,r=n.tail;if(i(o))return new $(o);e=r,t=i}}}function v3(e,t){for(;;){let n=e,i=t;if(n instanceof _)return new b(void 0);{let o=n.head,r=n.tail,s=i(o);if(s instanceof $)return s;e=r,t=i}}}function T$(e,t){for(;;){let n=e,i=t;if(n instanceof _)return!1;{let o=n.head,r=n.tail,s=i(o);if(s)return s;e=r,t=i}}}function S3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return S(r);if(o instanceof _)return S(r);{let s=i.head,f=i.tail,l=o.head,u=o.tail;e=f,t=u,n=d([s,l],r)}}}function fl(e,t){return S3(e,t,g)}function E3(e,t,n,i){for(;;){let o=e,r=t,s=n,f=i;if(o instanceof _)return li(r,f);if(r instanceof _)return li(o,f);{let l=o.head,u=o.tail,a=r.head,c=r.tail,p=s(l,a);p instanceof qt?(e=o,t=c,n=s,i=d(a,f)):p instanceof Ut?(e=u,t=r,n=s,i=d(l,f)):(e=u,t=r,n=s,i=d(l,f))}}}function C3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return S(r);{let s=i.tail;if(s instanceof _){let f=i.head;return S(d(S(f),r))}else{let f=i.head,l=s.head,u=s.tail,a=E3(f,l,o,g);e=u,t=o,n=d(a,r)}}}}function L3(e,t,n,i){for(;;){let o=e,r=t,s=n,f=i;if(o instanceof _)return li(r,f);if(r instanceof _)return li(o,f);{let l=o.head,u=o.tail,a=r.head,c=r.tail,p=s(l,a);p instanceof qt?(e=u,t=r,n=s,i=d(l,f)):p instanceof Ut?(e=o,t=c,n=s,i=d(a,f)):(e=o,t=c,n=s,i=d(a,f))}}}function I3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return S(r);{let s=i.tail;if(s instanceof _){let f=i.head;return S(d(S(f),r))}else{let f=i.head,l=s.head,u=s.tail,a=L3(f,l,o,g);e=u,t=o,n=d(a,r)}}}}function F3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return i;if(o instanceof co){if(i.tail instanceof _)return i.head;e=I3(i,r,g),t=Ys,n=r}else if(i.tail instanceof _){let s=i.head;return S(s)}else e=C3(i,r,g),t=jn,n=r}}function A3(e,t,n,i,o,r){for(;;){let s=e,f=t,l=n,u=i,a=o,c=r,p=d(a,l);if(s instanceof _)return u instanceof co?d(S(p),c):d(p,c);{let P=s.head,m=s.tail,k=f(a,P);if(u instanceof co)if(k instanceof qt)e=m,t=f,n=p,i=u,o=P,r=c;else if(k instanceof Ut)e=m,t=f,n=p,i=u,o=P,r=c;else{let y;u instanceof co?y=d(S(p),c):y=d(p,c);let v=y;if(m instanceof _)return d(d(P,g),v);{let L=m.head,I=m.tail,F,M=f(P,L);M instanceof qt||M instanceof Ut?F=jn:F=Ys;let G=F;e=I,t=f,n=d(P,g),i=G,o=L,r=v}}else if(k instanceof qt){let y;u instanceof co?y=d(S(p),c):y=d(p,c);let v=y;if(m instanceof _)return d(d(P,g),v);{let L=m.head,I=m.tail,F,M=f(P,L);M instanceof qt||M instanceof Ut?F=jn:F=Ys;let G=F;e=I,t=f,n=d(P,g),i=G,o=L,r=v}}else if(k instanceof Ut){let y;u instanceof co?y=d(S(p),c):y=d(p,c);let v=y;if(m instanceof _)return d(d(P,g),v);{let L=m.head,I=m.tail,F,M=f(P,L);M instanceof qt||M instanceof Ut?F=jn:F=Ys;let G=F;e=I,t=f,n=d(P,g),i=G,o=L,r=v}}else e=m,t=f,n=p,i=u,o=P,r=c}}}function ul(e,t){if(e instanceof _)return e;{let n=e.tail;if(n instanceof _)return e;{let i=e.head,o=n.head,r=n.tail,s,f=t(i,o);f instanceof qt||f instanceof Ut?s=jn:s=Ys;let l=s,u=A3(r,t,d(i,g),l,o,g);return F3(u,jn,t)}}}function M3(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return[S(r),g];{let s=i.head,f=i.tail;if(o(s))e=f,t=o,n=d(s,r);else return[S(r),i]}}}function v$(e,t){return M3(e,t,g)}function Kt(e,t){return v3(e,n=>{let i=n[0],o=n[1];return ht(i,t)?new $(o):new b(void 0)})}function R3(e,t,n,i){for(;;){let o=e,r=t,s=n,f=i;if(o instanceof _)return S(d([r,s],f));{let l=o.head[0];if(ht(l,r)){let u=o.tail;return li(f,d([l,s],u))}else{let u=o.head;e=o.tail,t=r,n=s,i=d(u,f)}}}}function S$(e,t,n){return R3(e,t,n,g)}function _f(e,t){for(;;){let n=e,i=t;if(n instanceof _)return;{let o=n.head,r=n.tail;i(o),e=r,t=i}}}function E$(e,t){for(;;){let n=e,i=t;if(n instanceof _)return new $(void 0);{let o=n.head,r=n.tail,s=i(o);if(s instanceof $)e=r,t=i;else return s}}}var gf=class extends h{},Mx=new gf;var kf=class extends h{},qx=new kf,bf=class extends h{},Ux=new bf;function $l(e,t){if(t==="")return xf(e);{let i=e,o=wf(i,t);return Ze(o,Xe)}}function N3(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i;{let o=n.head;e=n.tail,t=i+o}}}function I$(e){return N3(e,"")}function F$(e){let n=M$(e);return dl(n)}function A$(e){let n=R$(e);return n}var fi=class extends h{constructor(t,n,i){super(),this.expected=t,this.found=n,this.path=i}},O$=(e,t,n)=>new fi(e,t,n);var Nn=class extends h{constructor(t){super(),this.function=t}};var H3=new Nn(z3),j$=new Nn(W3);var fo=new Nn(K3);function uo(e,t){let n=t.function(e),i=n[0],o=n[1];return o instanceof _?new $(i):new b(o)}function yf(e,t,n){let i=n(e);return i instanceof $?[i[0],g]:[i[0],d(new fi(t,ai(e),g),g)]}function z3(e){return yf(e,"Float",U$)}function ui(e,t){return new Nn(n=>{let i=e.function(n),o=i[0],r=i[1];return[t(o),r]})}function W3(e){return yf(e,"Int",V$)}function K3(e){return yf(e,"String",G$)}function X3(e,t,n){for(;;){let i=e,o=t,r=n;if(r instanceof _)return o;{let s=r.head,f=r.tail,l=s.function(i),u=l;if(l[1]instanceof _)return u;e=i,t=o,n=f}}}function D$(e,t){return new Nn(n=>{let i=e.function(n),o=i;return i[1]instanceof _?o:X3(n,o,t)})}function J3(e){let t=D$(fo,d(ui(j$,nt),d(ui(H3,Oo),g))),n=uo(e,t);return n instanceof $?n[0]:"<"+ai(e)+">"}function hl(e,t){let n=Ze(t,o=>{let s=o;return J3(s)}),i=Ze(e[1],o=>new fi(o.expected,o.found,it(n,o.path)));return[e[0],i]}function ml(e){return new Nn(t=>q$(t,e.function,(n,i)=>hl(n,d(i,g)),0,g))}function Y3(e,t,n,i,o){for(;;){let r=e,s=t,f=n,l=i,u=o;if(r instanceof _){let c=f(l);return hl(c,S(s))}else{let a=r.head,c=r.tail,p=N$(l,a);if(p instanceof $){let P=p[0];if(P instanceof x){let m=P[0];e=c,t=d(a,s),n=f,i=m,o=u}else return u(l,d(a,s))}else{let P=p[0],y=[f(l)[0],d(new fi(P,ai(l),g),g)];return hl(y,S(s))}}}}function _l(e,t,n){return new Nn(i=>{let o=Y3(e,g,t.function,i,(a,c)=>{let m=[t.function(a)[0],d(new fi("Field","Nothing",g),g)];return hl(m,S(c))}),r=o[0],s=o[1],f=n(r).function(i),l=f[0],u=f[1];return[l,it(s,u)]})}function Bo(e){return new Nn(t=>[e,g])}function pi(e,t,n){return _l(d(e,g),t,n)}var vf=void 0;function Xe(e){return e}function kn(e){return/^[-+]?(\d+)$/.test(e)?tt(parseInt(e)):ct(vf)}function Sf(e){return/^[-+]?(\d+)\.(\d+)([eE][-+]?\d+)?$/.test(e)?tt(parseFloat(e)):ct(vf)}function nt(e){return e.toString()}function xf(e){let t=z$(e);return Qs(t?Array.from(t).map(n=>n.segment):e.match(/./gsu))}var H$;function z$(e){if(globalThis.Intl&&Intl.Segmenter)return H$||=new Intl.Segmenter,H$.segment(e)[Symbol.iterator]()}function Pl(e){let t,n=z$(e);return n?t=n.next().value?.segment:t=e.match(/./su)?.[0],t?tt([t,e.slice(t.length)]):ct(vf)}function wf(e,t){return Qs(e.split(t))}function Zs(e,t){return e.startsWith(t)}var W$=[" ","	",`
`,"\v","\f","\r","\x85","\u2028","\u2029"].join(""),e0=new RegExp(`^[${W$}]*`),t0=new RegExp(`[${W$}]*$`);function M$(e){return e.replace(e0,"")}function dl(e){return e.replace(t0,"")}function K$(e){return Math.ceil(e)}function Ef(e){return Math.round(e)}function gl(e){return Math.trunc(e)}function X$(e,t){return Math.pow(e,t)}function cr(){let e=Math.random();return e===1?cr():e}function ai(e){if(typeof e=="string")return"String";if(typeof e=="boolean")return"Bool";if(n0(e))return"Result";if(xl(e))return"List";if(e instanceof nr)return"BitArray";if(e instanceof lo)return"Dict";if(Number.isInteger(e))return"Int";if(Array.isArray(e))return"Array";if(typeof e=="number")return"Float";if(e===null)return"Nil";if(e===void 0)return"Nil";{let t=typeof e;return t.charAt(0).toUpperCase()+t.slice(1)}}function on(e){return new TextEncoder().encode(e).length}var A4=-(2**31),M4=2**31-1,R4=2**32,B4=Number.MAX_SAFE_INTEGER,O4=Number.MIN_SAFE_INTEGER;function R$(e){return new Tf().inspect(e)}function Oo(e){let t=e.toString().replace("+","");if(t.indexOf(".")>=0)return t;{let n=t.indexOf("e");return n>=0?t.slice(0,n)+".0"+t.slice(n):t+".0"}}var Tf=class{#e=new Set;inspect(t){let n=typeof t;if(t===!0)return"True";if(t===!1)return"False";if(t===null)return"//js(null)";if(t===void 0)return"Nil";if(n==="string")return this.#s(t);if(n==="bigint"||Number.isInteger(t))return t.toString();if(n==="number")return Oo(t);if(t instanceof el)return this.#r(t);if(t instanceof nr)return this.#n(t);if(t instanceof RegExp)return`//js(${t})`;if(t instanceof Date)return`//js(Date("${t.toISOString()}"))`;if(t instanceof globalThis.Error)return`//js(${t.toString()})`;if(t instanceof Function){let o=[];for(let r of Array(t.length).keys())o.push(String.fromCharCode(r+97));return`//fn(${o.join(", ")}) { ... }`}if(this.#e.size===this.#e.add(t).size)return"//js(circular reference)";let i;if(Array.isArray(t))i=`#(${t.map(o=>this.inspect(o)).join(", ")})`;else if(xl(t))i=this.#t(t);else if(t instanceof h)i=this.#i(t);else if(t instanceof lo)i=this.#o(t);else{if(t instanceof Set)return`//js(Set(${[...t].map(o=>this.inspect(o)).join(", ")}))`;i=this.#l(t)}return this.#e.delete(t),i}#l(t){let n=Object.getPrototypeOf(t)?.constructor?.name||"Object",i=[];for(let s of Object.keys(t))i.push(`${this.inspect(s)}: ${this.inspect(t[s])}`);let o=i.length?" "+i.join(", ")+" ":"";return`//js(${n==="Object"?"":n+" "}{${o}})`}#o(t){let n="dict.from_list([",i=!0;return n=Ao(t,n,(o,r,s)=>(i||(o=o+", "),i=!1,o+"#("+this.inspect(r)+", "+this.inspect(s)+")")),n+"])"}#i(t){let n=Object.keys(t).map(i=>{let o=this.inspect(t[i]);return isNaN(parseInt(i))?`${i}: ${o}`:o}).join(", ");return n?`${t.constructor.name}(${n})`:t.constructor.name}#t(t){if(of(t))return"[]";let n='charlist.from_string("',i="[",o=t;for(;so(o);){let r=o.head;o=o.tail,i!=="["&&(i+=", "),i+=this.inspect(r),n&&(Number.isInteger(r)&&r>=32&&r<=126?n+=String.fromCharCode(r):n=null)}return n?n+'")':i+"]"}#s(t){let n='"';for(let i=0;i<t.length;i++){let o=t[i];switch(o){case`
`:n+="\\n";break;case"\r":n+="\\r";break;case"	":n+="\\t";break;case"\f":n+="\\f";break;case"\\":n+="\\\\";break;case'"':n+='\\"';break;default:o<" "||o>"~"&&o<"\xA0"?n+="\\u{"+o.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")+"}":n+=o}}return n+='"',n}#r(t){return`//utfcodepoint(${String.fromCodePoint(t.value)})`}#n(t){if(t.bitSize===0)return"<<>>";let n="<<";for(let i=0;i<t.byteSize-1;i++)n+=t.byteAt(i).toString(),n+=", ";if(t.byteSize*8===t.bitSize)n+=t.byteAt(t.byteSize-1).toString();else{let i=t.bitSize%8;n+=t.byteAt(t.byteSize-1)>>8-i,n+=`:size(${i})`}return n+=">>",n}};function N$(e,t){if(e instanceof lo){let i=si(e,t);return tt(i.isOk()?new x(i[0]):new wn)}if(e instanceof WeakMap||e instanceof Map){let i={},o=e.get(t,i);return o===i?tt(new wn):tt(new x(o))}let n=Number.isInteger(t);if(n&&t>=0&&t<8&&xl(e)){let i=0;for(let o of e){if(i===t)return tt(new x(o));i++}return ct("Indexable")}return n&&Array.isArray(e)||e&&typeof e=="object"||e&&Object.getPrototypeOf(e)===Object.prototype?t in e?tt(new x(e[t])):tt(new wn):ct(n?"Indexable":"Dict")}function q$(e,t,n,i,o){if(!(xl(e)||Array.isArray(e))){let s=O$("List",ai(e),o);return[o,Qs([s])]}let r=[];for(let s of e){let f=t(s),[l,u]=f;if(so(u)){let[a,c]=n(f,i.toString());return[o,c]}r.push(l),i++}return[Qs(r),o]}function U$(e){return typeof e=="number"?tt(e):ct(0)}function V$(e){return Number.isInteger(e)?tt(e):ct(0)}function G$(e){return typeof e=="string"?tt(e):ct("")}function Qs(e){let t=t$(),n=e.length;for(;n--;)t=Ns(e[n],t);return t}function xl(e){return of(e)||so(e)}function n0(e){return ii(e)||n$(e)}function J$(e){return e>=0?e:0-e}function o0(e){return-1*e}function Ro(e){return e>=0?Ef(e):0-Ef(o0(e))}function x$(e,t){let n=K$(t)-t>0;return e<0&&n||e===0&&t<0?new b(void 0):new $(X$(e,t))}function Js(e){return x$(e,.5)}function Y$(e){return!(e instanceof $)}function W(e,t){if(e instanceof $){let n=e[0];return new $(t(n))}else return e}function pr(e,t){if(e instanceof $)return e;{let n=e[0];return new b(t(n))}}function T(e,t){if(e instanceof $){let n=e[0];return t(n)}else return e}function ea(e,t){return e instanceof $?e[0]:t}function Z$(e,t){return e instanceof $?e:new b(t)}var Cf=class extends h{},i0=new Cf;var Lf=class extends h{},ew=new Lf;var If=class extends h{},tw=new If,Ff=class extends h{},nw=new Ff;var Af=class extends h{},ow=new Af;var Mf=class extends h{},iw=new Mf;var Rf=class extends h{},uw=new Rf;var Bf=class extends h{},pw=new Bf;var Of=class extends h{},$w=new Of;var jf=class extends h{},Mw=new jf;var Df=class extends h{},jw=new Df;var Nf=class extends h{},a0=new Nf;var qf=class extends h{},Dw=new qf;var Uf=class extends h{},l0=new Uf;var Vf=class extends h{},Kw=new Vf;function t2(e,t,n){return e?t:n()}function Pi(e){return e}function Gf(e){return JSON.stringify(e)}function o2(e){return Object.fromEntries(e)}function i2(e){let t=[];for(;so(e);)t.push(qs(e)),e=Io(e);return t}function r2(e){try{let t=JSON.parse(e);return tt(t)}catch(t){return ct(u0(t,e))}}function u0(e,t){return p0(e)?s2():$0(e,t)}function p0(e){return/((unexpected (end|eof))|(end of data)|(unterminated string)|(json( parse error|\.parse)\: expected '(\:|\}|\])'))/i.test(e.message)}function $0(e,t){let n=[P0,d0,m0,h0];for(let i of n){let o=i(e,t);if(o)return o}return $r("")}function P0(e){let n=/unexpected token '(.)', ".+" is not valid JSON/i.exec(e.message);if(!n)return null;let i=wl(n[1]);return $r(i)}function d0(e){let n=/unexpected token (.) in JSON at position (\d+)/i.exec(e.message);if(!n)return null;let i=wl(n[1]);return $r(i)}function h0(e,t){let i=/(unexpected character|expected .*) at line (\d+) column (\d+)/i.exec(e.message);if(!i)return null;let o=Number(i[2]),r=Number(i[3]),s=_0(o,r,t),f=wl(t[s]);return $r(f)}function m0(e){let n=/unexpected (identifier|token) "(.)"/i.exec(e.message);if(!n)return null;let i=wl(n[2]);return $r(i)}function wl(e){return"0x"+e.charCodeAt(0).toString(16).toUpperCase()}function _0(e,t,n){if(e===1)return t-1;let i=1,o=0;return n.split("").find((r,s)=>(r===`
`&&(i+=1),i===e?(o=s+t,!0):!1)),o}var Hf=class extends h{},g0=new Hf,s2=()=>g0;var zf=class extends h{constructor(t){super(),this[0]=t}},$r=e=>new zf(e);var Wf=class extends h{constructor(t){super(),this[0]=t}};function x0(e,t){return T(r2(e),n=>{let i=uo(n,t);return pr(i,o=>new Wf(o))})}function a2(e,t){return x0(e,t)}function l2(e){return Gf(e)}function jo(e){return e}function Xf(e){return e}function ta(e){return o2(e)}function w0(e){return i2(e)}function kl(e,t){let i=Ze(e,t);return w0(i)}function na(e){return e.replaceAll(/[><&"']/g,t=>{switch(t){case">":return"&gt;";case"<":return"&lt;";case"'":return"&#39;";case"&":return"&amp;";case'"':return"&quot;";default:return t}})}var V=g,Pr=new b(void 0);function Bt(e){return d(e,V)}var k0=r$(),b0=o$(),y0=i$();function bl(e,t){return e.name===t.name?y0:e.name<t.name?b0:k0}var rn=class extends h{constructor(t,n,i){super(),this.kind=t,this.name=n,this.value=i}};var hi=class extends h{constructor(t,n,i){super(),this.kind=t,this.name=n,this.value=i}};var Ot=class extends h{constructor(t,n,i,o,r,s,f,l){super(),this.kind=t,this.name=n,this.handler=i,this.include=o,this.prevent_default=r,this.stop_propagation=s,this.debounce=f,this.throttle=l}};var dr=class extends h{constructor(t,n,i){super(),this.prevent_default=t,this.stop_propagation=n,this.message=i}};var Yf=class extends h{constructor(t){super(),this.kind=t}};var Zf=0,Qf=1,e1=2,t1=0,n1=new Yf(t1);var o1=2;function h2(e,t){return new rn(Zf,e,t)}function m2(e,t){return new hi(Qf,e,t)}function _2(e,t,n,i,o,r,s){return new Ot(e1,e,t,n,i,o,r,s)}function E0(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i;{let o=n.head;if(o instanceof rn){let r=o.name;if(r==="")e=n.tail,t=i;else if(r==="class"){let s=o.value;if(s==="")e=n.tail,t=i;else{let f=n.tail;if(f instanceof _){let l=o;e=f,t=d(l,i)}else{let l=f.head;if(l instanceof rn&&l.name==="class"){let u=o.kind,a=s,c=f.tail,p=l.value,P=a+" "+p,m=new rn(u,"class",P);e=d(m,c),t=i}else{let u=o;e=f,t=d(u,i)}}}}else if(r==="style"){let s=o.value;if(s==="")e=n.tail,t=i;else{let f=n.tail;if(f instanceof _){let l=o;e=f,t=d(l,i)}else{let l=f.head;if(l instanceof rn&&l.name==="style"){let u=o.kind,a=s,c=f.tail,p=l.value,P=a+";"+p,m=new rn(u,"style",P);e=d(m,c),t=i}else{let u=o;e=f,t=d(u,i)}}}}else{let s=o;e=n.tail,t=d(s,i)}}else{let r=o;e=n.tail,t=d(r,i)}}}}function i1(e){if(e instanceof _)return e;if(e.tail instanceof _)return e;{let n=ul(e,(i,o)=>bl(o,i));return E0(n,V)}}function rt(e,t){return h2(e,t)}function g2(e,t){return m2(e,t)}function L0(e,t){return t?rt(e,""):g2(e,Xf(!1))}function se(e){return rt("class",e)}function yl(e){return rt("id",e)}function x2(e){return rt("max",e)}function w2(e){return rt("min",e)}function k2(e){return L0("selected",e)}function b2(e){return rt("step",e)}function y2(e){return rt("type",e)}function ia(e){return rt("value",e)}var ra=class extends h{constructor(t,n,i){super(),this.synchronous=t,this.before_paint=n,this.after_paint=i}};var vl=new ra(V,V,V);function mi(){return vl}function po(e){let t=n=>{let i=n.dispatch;return e(i)};return new ra(Bt(t),vl.before_paint,vl.after_paint)}function Sl(e){return kt(e,vl,(t,n)=>new ra(kt(n.synchronous,t.synchronous,ll),kt(n.before_paint,t.before_paint,ll),kt(n.after_paint,t.after_paint,ll)))}function at(){return null}function _i(e,t){return e?.get(t)}function mr(e,t,n){return e?.get(t)??n()}function qn(e,t){return e&&e.has(t)}function sn(e,t,n){return e??=new Map,e.set(t,n),e}function El(e,t){return e?.delete(t),e}function T2(e,t){return typeof e=="number"&&typeof t=="number"?e===t||e!==e&&t!==t:e===t}function v2(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i instanceof _;if(i instanceof _)return!1;{let o=n.head,r=n.tail,s=i.head,f=i.tail,l=T2(o,s);if(l)e=r,t=f;else return l}}}var an=class extends h{constructor(t,n,i,o){super(),this.kind=t,this.key=n,this.children=i,this.keyed_children=o}};var ln=class extends h{constructor(t,n,i,o,r,s,f,l,u){super(),this.kind=t,this.key=n,this.namespace=i,this.tag=o,this.attributes=r,this.children=s,this.keyed_children=f,this.self_closing=l,this.void=u}};var Tn=class extends h{constructor(t,n,i){super(),this.kind=t,this.key=n,this.content=i}};var cn=class extends h{constructor(t,n,i,o,r,s){super(),this.kind=t,this.key=n,this.namespace=i,this.tag=o,this.attributes=r,this.inner_html=s}};var Vt=class extends h{constructor(t,n,i,o){super(),this.kind=t,this.key=n,this.mapper=i,this.child=o}};var gi=class extends h{constructor(t,n,i,o){super(),this.kind=t,this.key=n,this.dependencies=i,this.view=o}};var xi=0,No=1,_r=2,r1=3,Do=4,s1=5;function a1(e,t,n){return new an(xi,e,t,n)}function aa(e,t,n,i,o,r,s,f){return new ln(No,e,t,n,i1(i),o,r,s,f)}function la(e,t){return t===""?e==="area"||e==="base"||e==="br"||e==="col"||e==="embed"||e==="hr"||e==="img"||e==="input"||e==="link"||e==="meta"||e==="param"||e==="source"||e==="track"?!0:e==="wbr":!1}function l1(e,t){return new Tn(_r,e,t)}function E2(e,t,n,i,o){return new cn(r1,e,t,n,i1(i),o)}function C2(e,t){if(e instanceof Vt){let n=e.mapper;return new Vt(Do,e.key,i=>t(n(i)),e.child)}else return new Vt(Do,e.key,t,e)}function L2(e,t,n){return new gi(s1,e,t,n)}function Cl(e,t){if(t instanceof an)return new an(t.kind,e,t.children,t.keyed_children);if(t instanceof ln)return new ln(t.kind,e,t.namespace,t.tag,t.attributes,t.children,t.keyed_children,t.self_closing,t.void);if(t instanceof Tn)return new Tn(t.kind,e,t.content);if(t instanceof cn)return new cn(t.kind,e,t.namespace,t.tag,t.attributes,t.inner_html);if(t instanceof Vt){let n=t.child;return new Vt(t.kind,e,t.mapper,Cl(e,n))}else{let n=t.view;return new gi(t.kind,e,t.dependencies,()=>Cl(e,n()))}}var c1=class extends h{},Yk=new c1,f1=class extends h{},Zk=new f1,u1=class extends h{},Qk=new u1,p1=class extends h{},e5=new p1,$1=class extends h{},t5=new $1;function jt(e,t,n){return aa("","",e,t,n,at(),!1,la(e,""))}function ca(e){return l1("",e)}function fa(){return l1("","")}function P1(e,t,n,i){return E2("",e,t,n,i)}function I2(e,t){return L2("",e,t)}function F2(e){return e}function A2(e,t){return C2(e,t)}function Tt(e){return ca(e)}function vt(e,t){return jt("div",e,t)}function M2(e,t){return jt("pre",e,t)}function R2(e,t){return jt("code",e,t)}function gr(e,t){return jt("span",e,t)}function B2(e){return jt("canvas",e,V)}function qo(e,t){return jt("button",e,t)}function O2(e){return jt("input",e,V)}function j2(e,t){return jt("label",e,t)}function d1(e,t){return jt("option",e,d(ca(t),g))}function D2(e,t){return jt("select",e,t)}function N2(e,t){return jt("details",e,t)}function q2(e,t){return jt("summary",e,t)}var Fl=class extends h{constructor(t,n,i,o,r){super(),this.index=t,this.path=n,this.removed=i,this.changes=o,this.children=r}};var m1=class extends h{constructor(t,n){super(),this.kind=t,this.content=n}};var _1=class extends h{constructor(t,n){super(),this.kind=t,this.inner_html=n}};var g1=class extends h{constructor(t,n,i){super(),this.kind=t,this.added=n,this.removed=i}};var x1=class extends h{constructor(t,n,i){super(),this.kind=t,this.key=n,this.before=i}};var w1=class extends h{constructor(t,n,i){super(),this.kind=t,this.index=n,this.with=i}};var k1=class extends h{constructor(t,n){super(),this.kind=t,this.index=n}};var b1=class extends h{constructor(t,n,i){super(),this.kind=t,this.children=n,this.before=i}};var y1=0,T1=1,v1=2,S1=3,E1=4,C1=5,L1=6;function wi(e,t,n,i){return new Fl(e,V,t,n,i)}function U2(e){return new m1(y1,e)}function V2(e){return new _1(T1,e)}function I1(e,t){return new g1(v1,e,t)}function G2(e,t){return new x1(S1,e,t)}function H2(e){return new k1(E1,e)}function $o(e,t){return new w1(C1,e,t)}function F1(e,t){return new b1(L1,e,t)}function z2(e,t){return new Fl(t,d(e.index,e.path),e.removed,e.changes,e.children)}var Al=class extends h{},R0=new Al,Ml=class extends h{constructor(t,n){super(),this.key=t,this.parent=n}},Rl=class extends h{constructor(t,n){super(),this.index=t,this.parent=n}},A1=class extends h{constructor(t){super(),this.parent=t}},Ol="\r",Bl="	",M1=`
`,R1=R0;function K2(e){if(e instanceof _)return"";{let t=e.tail;return I$(t)}}function B1(e,t,n){for(;;){let i=e,o=t,r=n;if(o instanceof Al)return K2(r);if(o instanceof Ml){let s=o.key,f=o.parent;e=i,t=f,n=d(Bl,d(s,r))}else if(o instanceof Rl){let s=o.index,f=o.parent,l=d(Bl,d(nt(s),r));e=i,t=f,n=l}else if(i){let s=o.parent;if(r instanceof _)e=i,t=s,n=r;else{let f=r.tail;e=i,t=s,n=d(Ol,f)}}else return K2(r)}}function B0(e){return B1(!0,e,V)}function O0(e,t){for(;;){let n=e,i=t;if(i instanceof _)return!1;{let o=i.head,r=i.tail,s=Zs(n,o);if(s)return s;e=n,t=r}}}function X2(e,t){return t instanceof _?!1:O0(B0(e),t)}function J2(e){return $l(e,Ol)}function Gt(e,t,n){return n===""?new Rl(t,e):new Ml(n,e)}function jl(e){return new A1(e)}function O1(e,t){return B1(!1,e,d(M1,d(t,V)))}function ua(e){return B1(!1,e,V)}var Po=class extends h{constructor(t,n,i,o,r){super(),this.events=t,this.vdoms=n,this.old_vdoms=i,this.dispatched_paths=o,this.next_dispatched_paths=r}},ho=class extends h{constructor(t,n){super(),this.handlers=t,this.children=n}},pa=class extends h{constructor(t,n){super(),this.mapper=t,this.events=n}},j1=class extends h{constructor(t,n,i){super(),this.handlers=t,this.children=n,this.vdoms=i}},Nl=class extends h{constructor(t,n){super(),this.path=t,this.handler=n}},ql=class extends h{constructor(t){super(),this.path=t}};function j0(e,t){return n=>e(t(n))}function eP(){return new ho(at(),at())}function tP(){return new Po(eP(),at(),at(),V,V)}function nP(e,t,n,i){return sn(e,O1(t,n),i)}function Z2(e,t,n){return kt(n,e,(i,o)=>{if(o instanceof Ot){let r=o.name,s=o.handler;return nP(i,t,r,s)}else return i})}function Dl(e,t,n,i,o,r){for(;;){let s=e,f=t,l=n,u=i,a=o,c=r,p=a+1;if(c instanceof _)return new j1(s,f,l);{let P=c.head;if(P instanceof an){let m=c.tail,k=P.key,y=P.children,v=Gt(u,a,k),L=Dl(s,f,l,v,0,y),I=L.handlers,F=L.children,M=L.vdoms;e=I,t=F,n=M,i=u,o=p,r=m}else if(P instanceof ln){let m=c.tail,k=P.key,y=P.attributes,v=P.children,L=Gt(u,a,k),I=Z2(s,L,y),F=Dl(I,f,l,L,0,v),M=F.handlers,G=F.children,Q=F.vdoms;e=M,t=G,n=Q,i=u,o=p,r=m}else if(P instanceof Tn){let m=c.tail;e=s,t=f,n=l,i=u,o=p,r=m}else if(P instanceof cn){let m=c.tail,k=P.key,y=P.attributes,v=Gt(u,a,k);e=Z2(s,v,y),t=f,n=l,i=u,o=p,r=m}else if(P instanceof Vt){let m=c.tail,k=P.key,y=P.mapper,v=P.child,L=Gt(u,a,k),I=Dl(at(),at(),l,jl(L),0,Bt(v)),F=I.vdoms,M=new ho(I.handlers,I.children),G=new pa(y,M),Q=sn(f,ua(L),G);e=s,t=Q,n=F,i=u,o=p,r=m}else{let m=c.tail,k=P.view,y=k(),v=sn(l,k,y),L=a,I=d(y,m);e=s,t=f,n=v,i=u,o=L,r=I}}}}function N1(e,t,n,i,o){let r=e.vdoms,s=t.handlers,f=t.children,l=Dl(s,f,r,n,i,o),u=l.handlers,a=l.children,c=l.vdoms;return[new Po(e.events,c,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths),new ho(u,a)]}function q1(e,t,n,i,o){let r=Bt(o);return N1(e,t,n,i,r)}function oP(e){return new Po(e.events,at(),e.vdoms,e.next_dispatched_paths,V)}function iP(e){return e.events}function rP(e,t){return new Po(t,e.vdoms,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function U1(e){return e.vdoms}function sP(e,t,n){return mr(e.old_vdoms,t,n)}function aP(e,t,n){let i=mr(e.old_vdoms,t,n),o=sn(e.vdoms,n,i);return new Po(e.events,o,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function lP(e,t,n){let i=sn(e.vdoms,t,n);return new Po(e.events,i,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function cP(e,t,n){return mr(e.children,t,()=>new pa(n,eP())).events}function fP(e,t,n,i){let o=new pa(n,i),r=sn(e.children,t,o);return new ho(e.handlers,r)}function xr(e,t,n,i){let o=nP(e.handlers,t,n,i);return new ho(o,e.children)}function uP(e,t,n){return El(e,O1(t,n))}function Ul(e,t,n){let i=uP(e.handlers,t,n);return new ho(i,e.children)}function Q2(e,t,n){return kt(n,e,(i,o)=>{if(o instanceof Ot){let r=o.name;return uP(i,t,r)}else return i})}function D1(e,t,n,i,o,r){for(;;){let s=e,f=t,l=n,u=i,a=o,c=r,p=a+1;if(c instanceof _)return new ho(s,f);{let P=c.head;if(P instanceof an){let m=c.tail,k=P.key,y=P.children,v=Gt(u,a,k),L=D1(s,f,l,v,0,y),I=L.handlers,F=L.children;e=I,t=F,n=l,i=u,o=p,r=m}else if(P instanceof ln){let m=c.tail,k=P.key,y=P.attributes,v=P.children,L=Gt(u,a,k),I=Q2(s,L,y),F=D1(I,f,l,L,0,v),M=F.handlers,G=F.children;e=M,t=G,n=l,i=u,o=p,r=m}else if(P instanceof Tn){let m=c.tail;e=s,t=f,n=l,i=u,o=p,r=m}else if(P instanceof cn){let m=c.tail,k=P.key,y=P.attributes,v=Gt(u,a,k);e=Q2(s,v,y),t=f,n=l,i=u,o=p,r=m}else if(P instanceof Vt){let m=c.tail,k=P.key,y=Gt(u,a,k),v=El(f,ua(y));e=s,t=v,n=l,i=u,o=p,r=m}else{let m=c.tail,k=P.view;if(qn(l,k)){let v=_i(l,k),L=d(v,m);e=s,t=f,n=l,i=u,o=a,r=L}else e=s,t=f,n=l,i=u,o=p,r=m}}}}function Vl(e,t,n,i,o){return D1(t.handlers,t.children,e.old_vdoms,n,i,Bt(o))}function mo(e,t,n,i,o,r){let s=Vl(e,t,n,i,o);return q1(e,s,n,i,r)}function D0(e,t,n){for(;;){let i=e,o=t,r=n;if(o instanceof _)return Pr;{let s=o.tail;if(s instanceof _){let f=o.head;if(qn(i.handlers,f)){let u=_i(i.handlers,f);return new $(ui(u,a=>new dr(a.prevent_default,a.stop_propagation,r(a.message))))}else return Pr}else{let f=o.head,l=s;if(qn(i.children,f)){let a=_i(i.children,f),c=j0(r,a.mapper);e=a.events,t=l,n=c}else return Pr}}}}function pP(e,t,n,i){let o=J2(t+M1+n),r=D0(e.events,o,Pi);if(r instanceof $){let s=r[0],f=uo(i,s);if(f instanceof $){let l=f[0];return new Nl(t,l)}else return new ql(t)}else return new ql(t)}function $P(e,t){let n=d(t.path,e.next_dispatched_paths),i=new Po(e.events,e.vdoms,e.old_vdoms,e.dispatched_paths,n);if(t instanceof Nl){let o=t.handler;return[i,new $(o)]}else return[i,Pr]}function Gl(e,t){return X2(t,e.dispatched_paths)}var Hl=class extends h{constructor(t){super(),this.message=t}};var Wl=e=>e instanceof Hl;var G1=class extends h{constructor(t,n){super(),this.name=t,this.data=n}};var Kl=e=>e instanceof G1;var zl=class extends h{},N0=new zl;var Xl=e=>e instanceof zl;var Jl=class extends h{constructor(t,n,i,o,r){super(),this.name=t,this.init=n,this.update=i,this.view=o,this.config=r}};var Yl=class extends h{constructor(t,n,i,o,r,s,f,l,u,a,c,p,P,m){super(),this.open_shadow_root=t,this.adopt_styles=n,this.delegates_focus=i,this.attributes=o,this.properties=r,this.contexts=s,this.is_form_associated=f,this.on_form_autofill=l,this.on_form_reset=u,this.on_form_restore=a,this.on_form_disabled=c,this.on_connect=p,this.on_adopt=P,this.on_disconnect=m}};var dP=new Yl(!0,!0,!1,V,V,V,!1,C,C,C,C,C,C,C);var Un=(e,t)=>{if(e===t)return!0;if(e==null||t==null)return!1;let n=typeof e;return n!==typeof t||n!=="object"||e.constructor!==t.constructor?!1:Array.isArray(e)?q0(e,t):U0(e,t)},q0=(e,t)=>{let n=e.length;if(n!==t.length)return!1;for(;n--;)if(!Un(e[n],t[n]))return!1;return!0},U0=(e,t)=>{let n=Object.keys(e),i=n.length;if(Object.keys(t).length!==i)return!1;for(;i--;){let o=n[i];if(!Object.hasOwn(t,o)||!Un(e[o],t[o]))return!1}return!0};var H1=class extends h{constructor(t,n){super(),this.patch=t,this.cache=n}};var Ql=class extends h{constructor(t,n,i){super(),this.patch=t,this.cache=n,this.events=i}},z1=class extends h{constructor(t,n,i){super(),this.added=t,this.removed=n,this.events=i}};function mP(e,t,n,i,o,r,s){for(;;){let f=e,l=t,u=n,a=i,c=o,p=r,P=s;if(a instanceof _){if(c instanceof _)return new z1(p,P,u);{let m=c.head;if(m instanceof Ot){let k=m,y=c.tail,v=m.name,L=m.handler,I=xr(u,l,v,L),F=d(k,p);e=f,t=l,n=I,i=a,o=y,r=F,s=P}else{let k=m,y=c.tail,v=d(k,p);e=f,t=l,n=u,i=a,o=y,r=v,s=P}}}else if(c instanceof _){let m=a.head;if(m instanceof Ot){let k=m,y=a.tail,v=m.name,L=Ul(u,l,v),I=d(k,P);e=f,t=l,n=L,i=y,o=c,r=p,s=I}else{let k=m,y=a.tail,v=d(k,P);e=f,t=l,n=u,i=y,o=c,r=p,s=v}}else{let m=a.head,k=a.tail,y=c.head,v=c.tail,L=bl(m,y);if(L instanceof qt)if(m instanceof Ot){let I=m.name;e=f,t=l,n=Ul(u,l,I),i=k,o=c,r=p,s=d(m,P)}else e=f,t=l,n=u,i=k,o=c,r=p,s=d(m,P);else if(L instanceof Ut)if(m instanceof rn)if(y instanceof rn){let I,F=y.name;F==="value"||F==="checked"||F==="selected"?I=f||m.value!==y.value:I=m.value!==y.value;let M=I,G;M?G=d(y,p):G=p;let Q=G;e=f,t=l,n=u,i=k,o=v,r=Q,s=P}else if(y instanceof Ot){let I=y.name,F=y.handler;e=f,t=l,n=xr(u,l,I,F),i=k,o=v,r=d(y,p),s=d(m,P)}else e=f,t=l,n=u,i=k,o=v,r=d(y,p),s=d(m,P);else if(m instanceof hi)if(y instanceof hi){let I,F=y.name;F==="scrollLeft"||F==="scrollRight"?I=!0:F==="value"?I=f||!Un(m.value,y.value):F==="checked"?I=f||!Un(m.value,y.value):F==="selected"?I=f||!Un(m.value,y.value):I=!Un(m.value,y.value);let M=I,G;M?G=d(y,p):G=p;let Q=G;e=f,t=l,n=u,i=k,o=v,r=Q,s=P}else if(y instanceof Ot){let I=y.name,F=y.handler;e=f,t=l,n=xr(u,l,I,F),i=k,o=v,r=d(y,p),s=d(m,P)}else e=f,t=l,n=u,i=k,o=v,r=d(y,p),s=d(m,P);else if(y instanceof Ot){let I=y.name,F=y.handler,M=m.prevent_default.kind!==y.prevent_default.kind||m.stop_propagation.kind!==y.stop_propagation.kind||m.debounce!==y.debounce||m.throttle!==y.throttle,G;M?G=d(y,p):G=p;let Q=G;e=f,t=l,n=xr(u,l,I,F),i=k,o=v,r=Q,s=P}else{let I=m.name;e=f,t=l,n=Ul(u,l,I),i=k,o=v,r=d(y,p),s=d(m,P)}else if(y instanceof Ot){let I=y.name,F=y.handler;e=f,t=l,n=xr(u,l,I,F),i=a,o=v,r=d(y,p),s=P}else e=f,t=l,n=u,i=a,o=v,r=d(y,p),s=P}}}function V0(e,t,n,i){return n==="input"&&t===""?Gl(e,i):n==="select"&&t===""?Gl(e,i):n==="textarea"&&t===""?Gl(e,i):!1}function Zl(e,t,n,i,o,r,s,f,l,u,a,c,p,P){for(;;){let m=e,k=t,y=n,v=i,L=o,I=r,F=s,M=f,G=l,Q=u,re=a,ee=c,he=p,Ke=P;if(m instanceof _)if(y instanceof _){let xt,Ct=ki();if(Q instanceof _)if(re instanceof _)xt=wi(G,F,Q,re);else if(!Ct&&re.tail instanceof _&&F===0){let ae=re.head;xt=z2(ae,G)}else xt=wi(G,F,Q,re);else xt=wi(G,F,Q,re);let me=xt;return new Ql(me,he,Ke)}else{let xt=N1(he,Ke,ee,M,y),Ct=xt[0],me=xt[1],ae=F1(y,M-I),te=d(ae,Q),le=wi(G,F,te,re);return new Ql(le,Ct,me)}else if(y instanceof _){let xt=m.head,Ct=m.tail;if(xt.key===""||!qn(L,xt.key)){let ae=Vl(he,Ke,ee,M,xt);e=Ct,t=k,n=y,i=v,o=L,r=I,s=F+1,f=M,l=G,u=Q,a=re,c=ee,p=he,P=ae}else e=Ct,t=k,n=y,i=v,o=L,r=I,s=F,f=M,l=G,u=Q,a=re,c=ee,p=he,P=Ke}else{let xt=m.head,Ct=y.head;if(xt.key!==Ct.key){let me=m.tail,ae=y.tail,te=qn(k,Ct.key);if(qn(v,xt.key))if(te)if(qn(L,xt.key))e=me,t=k,n=y,i=v,o=L,r=I-1,s=F,f=M,l=G,u=Q,a=re,c=ee,p=he,P=Ke;else{let ne=_i(k,Ct.key),oe=M-I,J=d(G2(Ct.key,oe),Q),fe=sn(L,Ct.key,void 0);e=d(ne,m),t=k,n=y,i=v,o=fe,r=I+1,s=F,f=M,l=G,u=J,a=re,c=ee,p=he,P=Ke}else{let z=M-I,ne=q1(he,Ke,ee,M,Ct),oe=ne[0],J=ne[1],fe=F1(Bt(Ct),z),pe=d(fe,Q);e=m,t=k,n=ae,i=v,o=L,r=I+1,s=F,f=M+1,l=G,u=pe,a=re,c=ee,p=oe,P=J}else if(te){let z=M-I,ne=d(H2(z),Q),oe=Vl(he,Ke,ee,M,xt);e=me,t=k,n=y,i=v,o=L,r=I-1,s=F,f=M,l=G,u=ne,a=re,c=ee,p=he,P=oe}else{let z=$o(M-I,Ct),ne=mo(he,Ke,ee,M,xt,Ct),oe=ne[0],J=ne[1];e=me,t=k,n=ae,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(z,Q),a=re,c=ee,p=oe,P=J}}else{let me=m.head;if(me instanceof an){let ae=y.head;if(ae instanceof an){let te=me,le=m.tail,z=ae,ne=y.tail,oe=Zl(te.children,te.keyed_children,z.children,z.keyed_children,at(),0,0,0,M,V,V,Gt(ee,M,z.key),he,Ke),J=oe.patch,fe=oe.cache,pe=oe.events,nn;J.changes instanceof _&&J.children instanceof _&&J.removed===0?nn=re:nn=d(J,re);let xn=nn;e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=xn,c=ee,p=fe,P=pe}else{let te=me,le=m.tail,z=ae,ne=y.tail,oe=$o(M-I,z),J=mo(he,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(oe,Q),a=re,c=ee,p=fe,P=pe}}else if(me instanceof ln){let ae=y.head;if(ae instanceof ln){let te=me,le=ae;if(te.namespace===le.namespace&&te.tag===le.tag){let z=m.tail,ne=y.tail,oe=Gt(ee,M,le.key),J=V0(he,le.namespace,le.tag,oe),fe=mP(J,oe,Ke,te.attributes,le.attributes,V,V),pe=fe.added,nn=fe.removed,xn=fe.events,Lo;pe instanceof _&&nn instanceof _?Lo=V:Lo=Bt(I1(pe,nn));let ro=Lo,er=Zl(te.children,te.keyed_children,le.children,le.keyed_children,at(),0,0,0,M,ro,V,oe,he,xn),ni=er.patch,js=er.cache,ef=er.events,tf;ni.changes instanceof _&&ni.children instanceof _&&ni.removed===0?tf=re:tf=d(ni,re);let Jh=tf;e=z,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=Jh,c=ee,p=js,P=ef}else{let z=me,ne=m.tail,oe=ae,J=y.tail,fe=$o(M-I,oe),pe=mo(he,Ke,ee,M,z,oe),nn=pe[0],xn=pe[1];e=ne,t=k,n=J,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(fe,Q),a=re,c=ee,p=nn,P=xn}}else{let te=me,le=m.tail,z=ae,ne=y.tail,oe=$o(M-I,z),J=mo(he,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(oe,Q),a=re,c=ee,p=fe,P=pe}}else if(me instanceof Tn){let ae=y.head;if(ae instanceof Tn){let te=me,le=ae;if(te.content===le.content){let z=m.tail,ne=y.tail;e=z,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=re,c=ee,p=he,P=Ke}else{let z=m.tail,ne=ae,oe=y.tail,J=wi(M,0,Bt(U2(ne.content)),V);e=z,t=k,n=oe,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=d(J,re),c=ee,p=he,P=Ke}}else{let te=me,le=m.tail,z=ae,ne=y.tail,oe=$o(M-I,z),J=mo(he,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(oe,Q),a=re,c=ee,p=fe,P=pe}}else if(me instanceof cn){let ae=y.head;if(ae instanceof cn){let te=me,le=m.tail,z=ae,ne=y.tail,oe=Gt(ee,M,z.key),J=mP(!1,oe,Ke,te.attributes,z.attributes,V,V),fe=J.added,pe=J.removed,nn=J.events,xn;fe instanceof _&&pe instanceof _?xn=V:xn=Bt(I1(fe,pe));let Lo=xn,ro;te.inner_html===z.inner_html?ro=Lo:ro=d(V2(z.inner_html),Lo);let ni=ro,js;ni instanceof _?js=re:js=d(wi(M,0,ni,V),re);let ef=js;e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=ef,c=ee,p=he,P=nn}else{let te=me,le=m.tail,z=ae,ne=y.tail,oe=$o(M-I,z),J=mo(he,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(oe,Q),a=re,c=ee,p=fe,P=pe}}else if(me instanceof Vt){let ae=y.head;if(ae instanceof Vt){let te=me,le=m.tail,z=ae,ne=y.tail,oe=Gt(ee,M,z.key),J=ua(oe),fe=Zl(Bt(te.child),at(),Bt(z.child),at(),at(),0,0,0,M,V,V,jl(oe),he,cP(Ke,J,te.mapper)),pe=fe.patch,nn=fe.cache,xn=fe.events,Lo=fP(Ke,J,z.mapper,xn),ro;pe.changes instanceof _&&pe.children instanceof _&&pe.removed===0?ro=re:ro=d(pe,re);let er=ro;e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=er,c=ee,p=nn,P=Lo}else{let te=me,le=m.tail,z=ae,ne=y.tail,oe=$o(M-I,z),J=mo(he,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(oe,Q),a=re,c=ee,p=fe,P=pe}}else{let ae=y.head;if(ae instanceof gi){let te=me,le=m.tail,z=ae,ne=y.tail;if(v2(te.dependencies,z.dependencies)){let J=aP(he,te.view,z.view);e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=Q,a=re,c=ee,p=J,P=Ke}else{let J=sP(he,te.view,te.view),fe=z.view(),pe=lP(he,z.view,fe);e=d(J,le),t=k,n=d(fe,ne),i=v,o=L,r=I,s=F,f=M,l=G,u=Q,a=re,c=ee,p=pe,P=Ke}}else{let te=me,le=m.tail,z=ae,ne=y.tail,oe=$o(M-I,z),J=mo(he,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=k,n=ne,i=v,o=L,r=I,s=F,f=M+1,l=G,u=d(oe,Q),a=re,c=ee,p=fe,P=pe}}}}}}function W1(e,t,n){let i=oP(e),o=Zl(Bt(t),at(),Bt(n),at(),at(),0,0,0,0,V,V,R1,i,iP(i)),r=o.patch,s=o.cache,f=o.events;return new H1(r,rP(s,f))}var fn=(e,t)=>{if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else if(e)for(e;Io(e);e=Io(e))t(qs(e))},K1=(e,t)=>Io(e)?Io(t)?it(e,t):e:t;var ec="http://www.w3.org/1999/xhtml";var _P=!!globalThis.HTMLElement?.prototype?.moveBefore;var H0=globalThis.setTimeout,X1=globalThis.clearTimeout,z0=(e,t)=>globalThis.document.createElementNS(e,t),gP=e=>globalThis.document.createTextNode(e),xP=e=>globalThis.document.createComment(e),W0=()=>globalThis.document.createDocumentFragment(),Uo=(e,t,n)=>e.insertBefore(t,n),wP=_P?(e,t,n)=>e.moveBefore(t,n):Uo,kP=(e,t)=>e.removeChild(t),K0=(e,t)=>e.getAttribute(t),bP=(e,t,n)=>e.setAttribute(t,n),X0=(e,t)=>e.removeAttribute(t),J0=(e,t,n,i)=>e.addEventListener(t,n,i),yP=(e,t,n)=>e.removeEventListener(t,n),Y0=(e,t)=>e.innerHTML=t,Z0=(e,t)=>e.data=t,un=Symbol("lustre"),Y1=class{constructor(t,n,i,o){this.kind=t,this.key=o,this.parent=n,this.children=[],this.node=i,this.endNode=null,this.handlers=new Map,this.throttles=new Map,this.debouncers=new Map}get isVirtual(){return this.kind===xi||this.kind===Do}get parentNode(){return this.isVirtual?this.node.parentNode:this.node}};var pn=(e,t,n,i,o)=>{let r=new Y1(e,t,n,o);return n[un]=r,t?.children.splice(i,0,r),r},Q0=e=>{let t="";for(let n=e[un];n.parent;n=n.parent){let i=n.parent&&n.parent.kind===Do?Ol:Bl;if(n.key)t=`${i}${n.key}${t}`;else{let o=n.parent.children.indexOf(n);t=`${i}${o}${t}`}}return t.slice(1)},tc=class{#e=null;#l;#o;#i=!1;constructor(t,n,i,{debug:o=!1}={}){this.#e=t,this.#l=n,this.#o=i,this.#i=o}mount(t){pn(No,null,this.#e,0,null),this.#h(this.#e,null,this.#e[un],0,t)}push(t,n=null){this.#t=n,this.#s.push({node:this.#e[un],patch:t}),this.#r()}#t;#s=[];#r(){let t=this.#s;for(;t.length;){let{node:n,patch:i}=t.pop(),{path:o,changes:r,removed:s,children:f}=i;fn(o,u=>{n=n.children[u]});let{children:l}=n;fn(r,u=>this.#n(n,u)),s&&this.#f(n,l.length-s,s),fn(f,u=>{let a=l[u.index|0];this.#s.push({node:a,patch:u})})}}#n(t,n){switch(n.kind){case y1:this.#T(t,n);break;case T1:this.#w(t,n);break;case v1:this.#d(t,n);break;case S1:this.#c(t,n);break;case E1:this.#_(t,n);break;case C1:this.#$(t,n);break;case L1:this.#p(t,n);break}}#p(t,{children:n,before:i}){let o=W0(),r=this.#a(t,i);this.#x(o,null,t,i|0,n),Uo(t.parentNode,o,r)}#$(t,{index:n,with:i}){this.#f(t,n|0,1);let o=this.#a(t,n);this.#h(t.parentNode,o,t,n|0,i)}#a(t,n){n=n|0;let{children:i}=t,o=i.length;if(n<o)return i[n].node;if(t.endNode)return t.endNode;if(!t.isVirtual)return null;for(;t.isVirtual&&t.children.length;){if(t.endNode)return t.endNode.nextSibling;t=t.children[t.children.length-1]}return t.node.nextSibling}#c(t,{key:n,before:i}){i=i|0;let{children:o,parentNode:r}=t,s=o[i].node,f=o[i];for(let l=i+1;l<o.length;++l){let u=o[l];if(o[l]=f,f=u,u.key===n){o[i]=u;break}}this.#m(r,f,s)}#u(t,n,i){for(let o=0;o<n.length;++o)this.#m(t,n[o],i)}#m(t,n,i){wP(t,n.node,i),n.isVirtual&&this.#u(t,n.children,i),n.endNode&&wP(t,n.endNode,i)}#_(t,{index:n}){this.#f(t,n,1)}#f(t,n,i){let{children:o,parentNode:r}=t,s=o.splice(n,i);for(let f=0;f<s.length;++f){let l=s[f],{node:u,endNode:a,isVirtual:c,children:p}=l;kP(r,u),a&&kP(r,a),this.#P(l),c&&s.push(...p)}}#P(t){let{debouncers:n,children:i}=t;for(let{timeout:o}of n.values())o&&X1(o);n.clear(),fn(i,o=>this.#P(o))}#d({node:t,handlers:n,throttles:i,debouncers:o},{added:r,removed:s}){fn(s,({name:f})=>{n.delete(f)?(yP(t,f,J1),this.#g(i,f,0),this.#g(o,f,0)):(X0(t,f),vP[f]?.removed?.(t,f))}),fn(r,f=>this.#y(t,f))}#T({node:t},{content:n}){Z0(t,n??"")}#w({node:t},{inner_html:n}){Y0(t,n??"")}#x(t,n,i,o,r){fn(r,s=>this.#h(t,n,i,o++,s))}#h(t,n,i,o,r){switch(r.kind){case No:{let s=this.#k(i,o,r);this.#x(s,null,s[un],0,r.children),Uo(t,s,n);break}case _r:{let s=this.#v(i,o,r);Uo(t,s,n);break}case xi:{let s="lustre:fragment",f=this.#b(s,i,o,r);Uo(t,f,n),this.#x(t,n,f[un],0,r.children),this.#i&&(f[un].endNode=xP(` /${s} `),Uo(t,f[un].endNode,n));break}case r1:{let s=this.#k(i,o,r);this.#w({node:s},r),Uo(t,s,n);break}case Do:{let s=this.#b("lustre:map",i,o,r);Uo(t,s,n),this.#h(t,n,s[un],0,r.child);break}case s1:{let s=this.#t?.get(r.view)??r.view();this.#h(t,n,i,o,s);break}}}#k(t,n,{kind:i,key:o,tag:r,namespace:s,attributes:f}){let l=z0(s||ec,r);return pn(i,t,l,n,o),this.#i&&o&&bP(l,"data-lustre-key",o),fn(f,u=>this.#y(l,u)),l}#v(t,n,{kind:i,key:o,content:r}){let s=gP(r??"");return pn(i,t,s,n,o),s}#b(t,n,i,{kind:o,key:r}){let s=this.#i?xP(em(t,r)):gP("");return pn(o,n,s,i,r),s}#y(t,n){let{debouncers:i,handlers:o,throttles:r}=t[un],{kind:s,name:f,value:l,prevent_default:u,debounce:a,throttle:c}=n;switch(s){case Zf:{let p=l??"";if(f==="virtual:defaultValue"){t.defaultValue=p;return}else if(f==="virtual:defaultChecked"){t.defaultChecked=!0;return}else if(f==="virtual:defaultSelected"){t.defaultSelected=!0;return}p!==K0(t,f)&&bP(t,f,p),vP[f]?.added?.(t,p);break}case Qf:t[f]=l;break;case e1:{o.has(f)&&yP(t,f,J1);let p=u.kind===t1;J0(t,f,J1,{passive:p}),this.#g(r,f,c),this.#g(i,f,a),o.set(f,P=>this.#S(n,P));break}}}#g(t,n,i){let o=t.get(n);if(i>0)o?o.delay=i:t.set(n,{delay:i});else if(o){let{timeout:r}=o;r&&X1(r),t.delete(n)}}#S(t,n){let{currentTarget:i,type:o}=n,{debouncers:r,throttles:s}=i[un],f=Q0(i),{prevent_default:l,stop_propagation:u,include:a}=t;l.kind===o1&&n.preventDefault(),u.kind===o1&&n.stopPropagation(),o==="submit"&&(n.detail??={},n.detail.formData=[...new FormData(n.target,n.submitter).entries()]);let c=this.#l(n,f,o,a),p=s.get(o);if(p){let m=Date.now(),k=p.last||0;m>k+p.delay&&(p.last=m,p.lastEvent=n,this.#o(n,c))}let P=r.get(o);P&&(X1(P.timeout),P.timeout=H0(()=>{n!==s.get(o)?.lastEvent&&this.#o(n,c)},P.delay)),!p&&!P&&this.#o(n,c)}},em=(e,t)=>t?` ${e} key="${na(t)}" `:` ${e} `,J1=e=>{let{currentTarget:t,type:n}=e;t[un].handlers.get(n)(e)},TP=e=>({added(t){t[e]=!0},removed(t){t[e]=!1}}),tm=e=>({added(t,n){t[e]=n}}),vP={checked:TP("checked"),selected:TP("selected"),value:tm("value"),autofocus:{added(e){queueMicrotask(()=>{e.focus?.()})}},autoplay:{added(e){try{e.play?.()}catch(t){console.error(t)}}}};function nm(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof _)return[o,S(r)];{let s=i.tail,f=i.head[0],l=i.head[1],u=Cl(f,l),a;f===""?a=o:a=sn(o,f,u);let c=a,p=d(u,r);e=s,t=c,n=p}}}function Z1(e){return nm(e,at(),V)}function SP(e,t,n){let i=Z1(n),o=i[0],r=i[1];return aa("","",e,t,r,o,!1,la(e,""))}function EP(e,t,n,i){let o=Z1(i),r=o[0],s=o[1];return aa("",e,t,n,s,r,!1,la(t,e))}function Q1(e){let t=Z1(e),n=t[0],i=t[1];return a1("",i,n)}var LP=e=>{let t=pn(No,null,e,0,null),{children:n}=eu(t,e,e.firstChild);if(n.length>1){let o=pn(No,null,e,0,null);return t.kind=xi,t.node=globalThis.document.createTextNode(""),t.parent=o,o.children.push(t),e.insertBefore(t.node,e.firstChild),Q1(wr(n))}if(n.length===1)return n[0][1];let i=globalThis.document.createTextNode("");return pn(_r,t,i,0,null),e.insertBefore(i,e.firstChild),fa()},IP=(e,t,n,i)=>{if(n.nodeType===8){let o=n.data.trim();return o.startsWith("lustre:fragment")?am(e,t,n,i):o.startsWith("lustre:map")?lm(e,t,n,i):o.startsWith("lustre:memo")?cm(e,t,n,i):null}return n.nodeType===1?rm(e,n,i):n.nodeType===3?sm(e,n,i):null},rm=(e,t,n)=>{let i=t.getAttribute("data-lustre-key")??"";i&&t.removeAttribute("data-lustre-key");let o=pn(No,e,t,n,i),r=t.localName,s=t.namespaceURI,f=!s||s===ec;f&&um.includes(r)&&pm(r,t);let l=fm(t),{children:u}=eu(o,t,t.firstChild),a=f?SP(r,l,wr(u)):EP(s,r,l,wr(u));return $a(i,a,t.nextSibling)},eu=(e,t,n)=>{let i=[];for(;n&&(n.nodeType!==8||n.data.trim()!=="/lustre:fragment");){let o=IP(e,t,n,i.length);o?(i.push([o.key,o.vnode]),n=o.next):n=n.nextSibling}return{children:i,end:n}},sm=(e,t,n)=>(pn(_r,e,t,n,null),$a("",ca(t.data),t.nextSibling)),am=(e,t,n,i)=>{let o=tu(n.data),r=pn(xi,e,n,i,o),{children:s,end:f}=eu(r,t,n.nextSibling);r.endNode=f;let l=Q1(wr(s));return $a(o,l,f?.nextSibling)},lm=(e,t,n,i)=>{let o=tu(n.data),r=pn(Do,e,n,i,o),s=FP(r,t,n,0);if(!s)return null;let f=A2(s.vnode,l=>l);return $a(o,f,s.next)},cm=(e,t,n,i)=>{let o=tu(n.data),r=FP(e,t,n,i);if(!r)return null;t.removeChild(n);let s=I2(wr([F2({})]),()=>r.vnode);return $a(o,s,r.next)},FP=(e,t,n,i)=>{for(;;){if(n=n.nextSibling,!n)return null;let o=IP(e,t,n,i);if(o)return o}},$a=(e,t,n)=>({key:e,vnode:t,next:n}),fm=e=>{let t=[];for(let n=0;n<e.attributes.length;n++){let i=e.attributes[n];i.name!=="xmlns"&&t.push(rt(i.localName,i.value))}return wr(t)},um=["input","select","textarea"],pm=(e,t)=>{let n=t.value,i=t.checked;e==="input"&&t.type==="checkbox"&&!i||e==="input"&&t.type==="radio"&&!i||t.type!=="checkbox"&&t.type!=="radio"&&!n||queueMicrotask(()=>{t.value=n,t.checked=i,t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),globalThis.document.activeElement!==t&&t.dispatchEvent(new Event("blur",{bubbles:!0}))})},tu=e=>{let t=e.match(/key="([^"]*)"/);return t?$m(t[1]):""},$m=e=>e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#39;/g,"'"),wr=e=>e.reduceRight((t,n)=>Ns(n,t),V);var ki=()=>!!globalThis.document;var Pa=class{constructor(t,[n,i],o,r,s){this.root=t,this.#e=n,this.#l=o,this.#o=r,this.root.addEventListener("context-request",u=>{if(!(u.context&&u.callback)||!this.#r.has(u.context))return;u.stopImmediatePropagation();let a=this.#r.get(u.context);if(u.subscribe){let c=()=>{a.subscribers=a.subscribers.filter(p=>p!==u.callback)};a.subscribers.push([u.callback,c]),u.callback(a.value,c)}else u.callback(a.value)});let f=(u,a,c)=>pP(this.#t,a,c,u),l=(u,a)=>{let[c,p]=$P(this.#t,a);if(this.#t=c,ii(p)){let P=Us(p);P.stop_propagation&&u.stopPropagation(),P.prevent_default&&u.preventDefault(),this.dispatch(P.message,!1)}};this.#s=new tc(this.root,f,l,s),this.#i=LP(this.root),this.#t=tP(),this.#f(i),this.#d()}root=null;dispatch(t,n=!1){if(this.#p)this.#$.push(t);else{let[i,o]=this.#o(this.#e,t);this.#e=i,this.#_(n),this.#f(o)}}emit(t,n){(this.root.host??this.root).dispatchEvent(new ou(t,n))}provide(t,n){if(!this.#r.has(t))this.#r.set(t,{value:n,subscribers:[]});else{let i=this.#r.get(t);if(Un(i.value,n))return;i.value=n;for(let o=i.subscribers.length-1;o>=0;o--){let[r,s]=i.subscribers[o];if(!r){i.subscribers.splice(o,1);continue}r(n,s)}}}subscribe(t,n){if(!t)return;this.#n.get(t)?.(),(this.root.host??this.root).dispatchEvent(new nu(t,(o,r)=>{let s=this.#n.get(t);s!==r&&s?.();let f=uo(o,n);this.#n.set(t,r),ii(f)&&this.dispatch(Us(f),!0)},!0))}unsubscribe(t){let n=this.#n.get(t);n&&(n(),this.#n.delete(t))}unsubscribeAll(){for(let[t,n]of this.#n)n?.();this.#n.clear()}#e;#l;#o;#i;#t;#s;#r=new Map;#n=new Map;#p=!1;#$=[];#a=V;#c=V;#u=null;#m={dispatch:t=>this.dispatch(t),emit:(t,n)=>this.emit(t,n),select:()=>{},root:()=>this.root,provide:(t,n)=>this.provide(t,n),subscribe:(t,n)=>this.subscribe(t,n),unsubscribe:t=>this.unsubscribe(t)};#_(t=!1){this.#u||(t?(this.#u="sync",queueMicrotask(()=>this.#d())):this.#u=window.requestAnimationFrame(()=>this.#d()))}#f(t){this.#p=!0;let n=!1;for(;fn(t.synchronous,o=>o(this.#m)),this.#a=K1(this.#a,t.before_paint),this.#c=K1(this.#c,t.after_paint),!!this.#$.length;){let i=this.#$.shift();[this.#e,t]=this.#o(this.#e,i),n=!0}return this.#p=!1,n}#P(t){this.#f(t)&&this.#_(!0)}#d(){this.#u=null;let t=this.#l(this.#e),{patch:n,cache:i}=W1(this.#t,this.#i,t);if(this.#t=i,this.#i=t,this.#s.push(n,U1(i)),so(this.#a)){let o=AP(this.#a);this.#a=V,queueMicrotask(()=>this.#P(o))}if(so(this.#c)){let o=AP(this.#c);this.#c=V,window.requestAnimationFrame(()=>this.#P(o))}}};function AP(e){return{synchronous:e,after_paint:V,before_paint:V}}var nu=class extends Event{constructor(t,n,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=n,this.subscribe=i}},ou=class extends CustomEvent{isLustreEvent=!0;constructor(t,n){super(t,{detail:n,bubbles:!0,composed:!0})}};var ru=class{#e;constructor(t,[n,i],o,r){this.#e=new Pa(t,[n,i],r,o)}send(t){Wl(t)?this.dispatch(t.message,!1):Kl(t)?this.emit(t.name,t.data):Xl(t)}dispatch(t){this.#e.dispatch(t)}emit(t,n){this.#e.emit(t,n)}},MP=({init:e,update:t,view:n},i,o)=>{if(!ki())return ct(iu());let r=i instanceof HTMLElement?i:globalThis.document.querySelector(i);return r?tt(new ru(r,e(o),t,n)):ct(RP(i))};var su=class extends h{constructor(t){super(),this.selector=t}},RP=e=>new su(e);var au=class extends h{},BP=new au,iu=()=>BP;function OP(e,t,n){return new Jl(C,e,t,n,dP)}function jP(e,t,n){return t2(!ki(),new b(BP),()=>MP(e,t,n))}function lu(e,t){return _2(e,ui(t,n=>new dr(!1,!1,n)),V,n1,n1,0,0)}function Vo(e){return lu("click",Bo(e))}function DP(e){return lu("input",_l(d("target",d("value",g)),fo,t=>Bo(e(t))))}function NP(e){return lu("change",_l(d("target",d("value",g)),fo,t=>Bo(e(t))))}var nc=Math.sin,oc=Math.cos;var da=class extends h{constructor(t){super(),this.name=t}};var $n=class extends h{constructor(t){super(),this.message=t}};var ic=class extends h{},UP=new ic;var rc=class extends h{},VP=new rc;var sc=class extends h{},GP=new sc;var ac=class extends h{},HP=new ac;var Go=class extends h{constructor(t,n){super(),this.name=t,this.num_args=n}};var X=class extends h{constructor(t){super(),this.message=t}};var cu=class extends h{constructor(t){super(),this.expr=t}};var lc=class extends h{constructor(t,n){super(),this.error=t,this.line=n}};function zP(e,t){return e instanceof lc?e:new lc(e,t)}function fu(e){return" on line "+nt(e)}function uu(e){if(e instanceof da)return"unknown variable: "+e.name;if(e instanceof $n)return"type error: "+e.message;if(e instanceof ic)return"no case pattern matched the value";if(e instanceof rc)return"recursion too deep (missing base case?)";if(e instanceof sc)return"too many steps (drawing too complex, or infinite loop?)";if(e instanceof ac)return"too many paths in the drawing";if(e instanceof Go){let t=e.name,n=e.num_args;return"no function "+t+" that takes "+nt(n)+" argument(s)"}else{if(e instanceof X)return"bad drawing: "+e.message;if(e instanceof cu)return"not yet implemented: "+e.expr;{let t=e.error,n=e.line;return uu(t)+fu(n)}}}var WP={},$u=0;function _o(e){if($u+=Math.max(e,0),$u>25e4)throw WP}function KP(e,t,n){$u=0;try{return e()}catch(i){if(i===WP)return t;if(i instanceof RangeError||i?.name==="InternalError")return n;throw i}}var XP=1e5;function JP(e){return KP(e,new b(GP),new b(VP))}function du(){return new Map}function cc(e,t){return e.has(t)?new $(e.get(t)):new b(void 0)}function ha(e,t,n){e.set(t,n)}var Ht=class extends h{constructor(t){super(),this[0]=t}};var Y=class extends h{constructor(t){super(),this[0]=t}};var Je=class extends h{constructor(t){super(),this[0]=t}};var Xt=class extends h{constructor(t,n){super(),this.tag=t,this.fields=n}};var Gn=class extends h{constructor(t){super(),this[0]=t}};var bi=class extends h{constructor(t,n){super(),this.bindings=t,this.parent=n}};var fc=class extends h{constructor(t){super(),this.bindings=t}};var kr=class extends h{constructor(t,n,i){super(),this.name=t,this.num_args=n,this.run=i}};var br=class extends h{constructor(t,n,i,o){super(),this.name=t,this.params=n,this.body=i,this.env=o}};var vn=class extends h{constructor(t){super(),this[0]=t}};var yi=class extends h{constructor(t){super(),this[0]=t}};var ma=class extends h{constructor(t){super(),this[0]=t}};var yr=class extends h{constructor(t,n){super(),this.elems=t,this.rest=n}};var go=class extends h{constructor(t,n){super(),this.fn_expr=t,this.operands=n}};var Ti=class extends h{constructor(t,n){super(),this.params=t,this.body=n}};var Tr=class extends h{constructor(t,n){super(),this.subject=t,this.arms=n}};var _a=class extends h{constructor(t,n,i){super(),this.name=t,this.value=n,this.body=i}};var vr=class extends h{constructor(t,n){super(),this.record=t,this.field=n}};var vi=class extends h{constructor(t,n){super(),this.line=t,this.expr=n}};var Si=class extends h{constructor(t){super(),this[0]=t}};var ga=class extends h{constructor(t){super(),this[0]=t}};var uc=class extends h{},ZP=new uc;var Ei=class extends h{constructor(t){super(),this[0]=t}};var xa=class extends h{constructor(t,n){super(),this.elems=t,this.rest=n}};var Sr=oi([["Point",d("x",d("y",g))],["Line",d("start",d("end",g))],["Path",d("shape",d("start",d("end",d("thickness",g))))],["Circle",d("center",d("radius",g))],["Arc",d("center",d("radius",d("from",d("to",g))))],["Curve",d("start",d("control",d("end",g)))],["Polygon",d("points",g)],["Leaf",d("base",d("tip",d("width",g)))],["Colored",d("shape",d("color",g))],["Glow",d("shape",d("blur",g))],["Filled",d("shape",d("color",g))],["Faded",d("shape",d("opacity",g))],["Sway",d("shape",d("pivot",d("degrees",d("period",g))))],["Bounce",d("shape",d("height",d("period",g)))],["Rgb",d("r",d("g",d("b",g)))],["Hsl",d("hue",d("saturation",d("lightness",g)))]]);function QP(e){return e instanceof Je?"a list":e instanceof Xt?"a "+e.tag+" record":e instanceof Gn?"the function "+e[0].name:A$(e)}function gm(e,t){if(e instanceof Xt){let n=e.tag,i=e.fields,o=ea(Kt(Sr,n),g),r=Kt(fl(o,i),t);return r instanceof $?r:new b(new $n("a "+n+" has no ."+t))}else return new b(new $n("."+t+" expects a record, got "+QP(e)))}function YP(e,t){if(e instanceof bi){let n=e.bindings,i=e.parent;return new bi(d$(n,Mo(t)),i)}else return e}function ed(e,t,n){if(e instanceof _)if(t instanceof x){let i=t[0];return new $(d([i,new Je(n)],g))}else return n instanceof _?new $(g):new b(void 0);else{if(n instanceof _)return new b(void 0);{let i=e.head,o=e.tail,r=n.head,s=n.tail,f=td(i,r),l=ed(o,t,s);if(f instanceof $&&l instanceof $){let u=f[0],a=l[0];return new $(it(u,a))}else return new b(void 0)}}}function td(e,t){if(e instanceof Si)if(t instanceof Ht){let n=e[0],i=t[0];return n===i?new $(g):new b(void 0)}else return new b(void 0);else if(e instanceof ga)if(t instanceof Y){let n=e[0],i=t[0];return n===i?new $(g):new b(void 0)}else return new b(void 0);else{if(e instanceof uc)return new $(g);if(e instanceof Ei){let n=e[0];return new $(d([n,t],g))}else if(t instanceof Je){let n=e.elems,i=e.rest,o=t[0];return ed(n,i,o)}else return new b(void 0)}}function xm(e,t){for(;;){let n=e,i=t;if(i instanceof _)return new b(void 0);{let o=i.tail,r=i.head[0],s=i.head[1],f=td(r,n);if(f instanceof $){let l=f[0];return new $([l,s])}else e=n,t=o}}}function wm(e,t,n){return new $n(e+" takes "+nt(t)+" argument(s) but was given "+nt(n))}function km(e){if(e instanceof kr)return e.num_args;{let t=e.params;return ot(t)}}function bm(e,t){for(;;){let n=e,i=t;if(n instanceof bi){let o=n.bindings,r=n.parent,s=si(o,i);if(s instanceof $)return s;e=r,t=i}else{let o=n.bindings,r=cc(o,i);return r instanceof $?r:new b(new da(i))}}}function pc(e,t){if(_o(1),e instanceof Gn){let n=e[0],i=km(n);if(ot(t)===i)if(n instanceof kr){let r=n.run;return r(t)}else{let r=n.params,s=n.body,f=n.env;return Vn(s,new bi(Mo(fl(r,t)),f))}else return new b(wm(n.name,i,ot(t)))}else return new b(new $n("calling a value that is not a function"))}function ym(e,t,n){let i=wt(e,o=>Vn(o,n));if(i instanceof $)if(t instanceof x){let o=i[0],r=t[0],s=Vn(r,n);if(s instanceof $){let f=s[0];if(f instanceof Je){let l=f[0];return new $(new Je(it(o,l)))}else{let l=f;return new b(new $n("`..` expects a list, got "+QP(l)))}}else return s}else{let o=i[0];return new $(new Je(o))}else return i}function Vn(e,t){for(;;){let n=e,i=t;if(_o(1),n instanceof vn){let o=n[0];return bm(i,o)}else if(n instanceof yi){let o=n[0];return new $(new Ht(o))}else if(n instanceof ma){let o=n[0];return new $(new Y(o))}else if(n instanceof yr){let o=n.elems,r=n.rest;return ym(o,r,i)}else if(n instanceof go){let o=n.fn_expr,r=n.operands,s=Vn(o,i);if(s instanceof $){let f=s[0],l=wt(r,u=>Vn(u,i));if(l instanceof $){let u=l[0];return pc(f,u)}else return l}else return s}else if(n instanceof Ti){let o=n.params,r=n.body;return new $(new Gn(new br("lambda",o,r,i)))}else if(n instanceof Tr){let o=n.subject,r=n.arms,s=Vn(o,i);if(s instanceof $){let f=s[0],l=xm(f,r);if(l instanceof $){let u=l[0][0];e=l[0][1],t=YP(i,u)}else return new b(UP)}else return s}else if(n instanceof _a){let o=n.name,r=n.value,s=n.body,f=Vn(r,i);if(f instanceof $){let l=f[0];e=s,t=YP(i,d([o,l],g))}else return f}else if(n instanceof vr){let o=n.record,r=n.field,s=Vn(o,i);if(s instanceof $){let f=s[0];return gm(f,r)}else return s}else{let o=n.line,r=n.expr;return pr(Vn(r,i),s=>zP(s,o))}}}function nd(e,t,n){return JP(()=>{let i=cc(n,e);if(i instanceof $){let o=i[0];if(o instanceof Gn){let r=o[0];if(r instanceof br){let s=r.params,f=r.body,l=r.env;return ot(s)===ot(t)?Vn(f,new bi(Mo(fl(s,t)),l)):new b(new Go(e,ot(t)))}else return new b(new Go(e,ot(t)))}else return new b(new Go(e,ot(t)))}else return new b(new Go(e,ot(t)))})}var Tm="src\\builtins.gleam",vm=3.141592653589793;function N(e,t){return new b(new $n(e+" expects "+t))}function Lt(e,t,n){return[e,new Gn(new kr(e,t,n))]}function Sm(){return d(Lt("list.map",2,e=>{if(e instanceof _)return N("list.map","a list and a function");{let t=e.tail;if(t instanceof _)return N("list.map","a list and a function");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let i=t.head,o=n[0];return W(wt(o,r=>pc(i,d(r,g))),r=>new Je(r))}else return N("list.map","a list and a function")}else return N("list.map","a list and a function")}}),d(Lt("list.filter",2,e=>{if(e instanceof _)return N("list.filter","a list and a function");{let t=e.tail;if(t instanceof _)return N("list.filter","a list and a function");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let i=t.head,o=n[0];return W(cl(o,g,(r,s)=>{let f=pc(i,d(s,g));if(f instanceof $){let l=f[0];return l instanceof Ht?l[0]?new $(d(s,r)):new $(r):new b(new $n("list.filter's function must return True or False"))}else return f}),r=>new Je(S(r)))}else return N("list.filter","a list and a function")}else return N("list.filter","a list and a function")}}),d(Lt("list.append",2,e=>{if(e instanceof _)return N("list.append","two lists");{let t=e.tail;if(t instanceof _)return N("list.append","two lists");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let i=t.head;if(i instanceof Je){let o=n[0],r=i[0];return _o(ot(o)),new $(new Je(it(o,r)))}else return N("list.append","two lists")}else return N("list.append","two lists")}else return N("list.append","two lists")}}),d(Lt("list.length",1,e=>{if(e instanceof _)return N("list.length","a list");if(e.tail instanceof _){let t=e.head;if(t instanceof Je){let n=t[0],i=ot(n);return _o(i),new $(new Y(i))}else return N("list.length","a list")}else return N("list.length","a list")}),d(Lt("list.flatten",1,e=>{if(e instanceof _)return N("list.flatten","a list of lists");if(e.tail instanceof _){let t=e.head;if(t instanceof Je){let n=t[0];return T(wt(n,i=>{if(i instanceof Je){let o=i[0];return new $(o)}else return N("list.flatten","a list")}),i=>{let o=kt(i,0,(r,s)=>r+ot(s));return _o(ot(i)+o),new $(new Je(ur(i)))})}else return N("list.flatten","a list of lists")}else return N("list.flatten","a list of lists")}),g)))))}function Em(){return Ze(Sr,e=>{let t=e[0],n=e[1];return Lt(t,ot(n),i=>new $(new Xt(t,i)))})}function $c(e,t){return Lt(e,2,n=>{if(n instanceof _)return N(e,"two ints");{let i=n.tail;if(i instanceof _)return N(e,"two ints");if(i.tail instanceof _){let o=n.head;if(o instanceof Y){let r=i.head;if(r instanceof Y){let s=o[0],f=r[0];return new $(new Ht(t(s,f)))}else return N(e,"two ints")}else return N(e,"two ints")}else return N(e,"two ints")}})}function wa(e,t){return Lt(e,2,n=>{if(n instanceof _)return N(e,"two ints");{let i=n.tail;if(i instanceof _)return N(e,"two ints");if(i.tail instanceof _){let o=n.head;if(o instanceof Y){let r=i.head;if(r instanceof Y){let s=o[0],f=r[0];return new $(new Y(t(s,f)))}else return N(e,"two ints")}else return N(e,"two ints")}else return N(e,"two ints")}})}function od(e,t){return Lt(e,2,n=>{if(n instanceof _)return N(e,"two Bools");{let i=n.tail;if(i instanceof _)return N(e,"two Bools");if(i.tail instanceof _){let o=n.head;if(o instanceof Ht){let r=i.head;if(r instanceof Ht){let s=o[0],f=r[0];return new $(new Ht(t(s,f)))}else return N(e,"two Bools")}else return N(e,"two Bools")}else return N(e,"two Bools")}})}function id(e,t){for(;;){let n=e,i=t;if(n instanceof _)return i instanceof _?new $(!0):new $(!1);if(i instanceof _)return new $(!1);{let o=n.head,r=n.tail,s=i.head,f=i.tail,l=_u(o,s);if(l instanceof $&&l[0])e=r,t=f;else return l}}}function _u(e,t){if(_o(1),e instanceof Ht&&t instanceof Ht){let n=e[0],i=t[0];return new $(n===i)}else if(e instanceof Y&&t instanceof Y){let n=e[0],i=t[0];return new $(n===i)}else if(e instanceof Je&&t instanceof Je){let n=e[0],i=t[0];return id(n,i)}else if(e instanceof Xt&&t instanceof Xt){let n=e.tag,i=e.fields,o=t.tag,r=t.fields;return n===o?id(i,r):new $(!1)}else return new $(!1)}function Cm(e){if(e instanceof _)return N("!=","two values");{let t=e.tail;if(t instanceof _)return N("!=","two values");if(t.tail instanceof _){let n=e.head,i=t.head;return W(_u(n,i),o=>new Ht(!o))}else return N("!=","two values")}}function Lm(e){if(e instanceof _)return N("==","two values");{let t=e.tail;if(t instanceof _)return N("==","two values");if(t.tail instanceof _){let n=e.head,i=t.head;return W(_u(n,i),o=>new Ht(o))}else return N("==","two values")}}function Im(e){if(e instanceof _)return N("sqrt","one non-negative int");if(e.tail instanceof _){let t=e.head;if(t instanceof Y){let n=t[0];if(n>=0){let i=Js(n),o;if(i instanceof $)o=i[0];else throw Nt("let_assert",Tm,"builtins",267,"builtin_sqrt","Pattern match failed, no pattern matched the value.",{value:i,start:9573,end:9629,pattern_start:9584,pattern_end:9592});let r=gl(o),s;r*r>n?s=r-1:s=r;let l=s,u;(l+1)*(l+1)<=n?u=l+1:u=l;let c=u;return new $(new Y(c))}else return N("sqrt","one non-negative int")}else return N("sqrt","one non-negative int")}else return N("sqrt","one non-negative int")}function rd(e,t){return n=>{if(n instanceof _)return N(e,"two ints (degrees and scale)");{let i=n.tail;if(i instanceof _)return N(e,"two ints (degrees and scale)");if(i.tail instanceof _){let o=n.head;if(o instanceof Y){let r=i.head;if(r instanceof Y){let s=o[0],f=r[0],l=s%360*vm/180;return new $(new Y(Ro(t(l)*f)))}else return N(e,"two ints (degrees and scale)")}else return N(e,"two ints (degrees and scale)")}else return N(e,"two ints (degrees and scale)")}}}function Fm(e){if(e instanceof _)return N("abs","one int");if(e.tail instanceof _){let t=e.head;if(t instanceof Y){let n=t[0];return new $(new Y(sl(n)))}else return N("abs","one int")}else return N("abs","one int")}function Am(e){if(e instanceof _)return N("random","two ints");{let t=e.tail;if(t instanceof _)return N("random","two ints");if(t.tail instanceof _){let n=e.head;if(n instanceof Y){let i=t.head;if(i instanceof Y){let o=n[0],r=i[0];return r<=o?new $(new Y(o)):new $(new Y(o+gl(cr()*(r-o))))}else return N("random","two ints")}else return N("random","two ints")}else return N("random","two ints")}}function Mm(){return Mo(d(Lt("random",2,Am),d(Lt("abs",1,Fm),d(Lt("sin",2,rd("sin",nc)),d(Lt("cos",2,rd("cos",oc)),d(Lt("sqrt",1,Im),d(Lt("==",2,Lm),d(Lt("!=",2,Cm),d(od("&&",(e,t)=>e&&t),d(od("||",(e,t)=>e||t),d(wa("+",(e,t)=>e+t),d(wa("-",(e,t)=>e-t),d(wa("*",(e,t)=>e*t),d(wa("/",(e,t)=>nl(e,t)),d(wa("%",(e,t)=>or(e,t)),d($c("<",(e,t)=>e<t),d($c(">",(e,t)=>e>t),d($c("<=",(e,t)=>e<=t),d($c(">=",(e,t)=>e>=t),it(Em(),Sm()))))))))))))))))))))}function sd(){let e=du(),t=(n,i)=>ha(e,n,i);return h$(Mm(),t),e}function ad(e){try{let t=globalThis.localStorage.getItem(e);return t===null?ct(void 0):tt(t)}catch{return ct(void 0)}}function ld(e,t){try{globalThis.localStorage.setItem(e,t)}catch(n){console.error(`Couldn't save: ${n.message}`)}}function gu(){let e=window.prompt("Name for the new drawing:");return e===null?"":e}var Pc=oi([["fan",`fn draw(shape_slider: Int) -> List(Path) {
  fan(30, Point(-200, -200))
}

fn fan(n: Int, start: Point) -> List(Path) {
  case n > 0 {
    True -> [Path(Line(start, Point(n * 10, 200)), 0, 30, 3), ..fan(n - 1, start)]
    False -> []
  }
}
`],["square_spiral",`fn draw(shape_slider: Int) -> List(Path) {
  let turns = 20 + shape_slider / 4
  spiral(Point(0, 0), Point(1, 0), 0, turns)
}

fn spiral(p: Point, d: Point, i: Int, n: Int) -> List(Path) {
  case i == n {
    True -> []
    False -> {
      let len = { i / 2 + 1 } * 24
      let q = Point(p.x + d.x * len, p.y + d.y * len)
      [
        Path(Line(p, q), i * 3, i * 3 + 3, 3),
        ..spiral(q, Point(0 - d.y, d.x), i + 1, n)
      ]
    }
  }
}
`],["string_art",`fn draw(shape_slider: Int) -> List(Path) {
  let n = 8 + shape_slider / 10
  list.flatten([
    quadrant(1, 1, n, 0),
    quadrant(-1, 1, n, n + 1),
    quadrant(-1, -1, n, { n + 1 } * 2),
    quadrant(1, -1, n, { n + 1 } * 3),
  ])
}

fn quadrant(sx: Int, sy: Int, n: Int, base: Int) -> List(Path) {
  strings(0, sx, sy, n, base)
}

fn strings(i: Int, sx: Int, sy: Int, n: Int, base: Int) -> List(Path) {
  case i > n {
    True -> []
    False -> {
      let a = Point(sx * 420 * i / n, 0)
      let b = Point(0, sy * 420 * { n - i } / n)
      let t = { base + i } * 2
      [Path(Line(a, b), t, t + 8, 2), ..strings(i + 1, sx, sy, n, base)]
    }
  }
}
`],["tree",`fn draw(shape_slider: Int) -> List(Path) {
  let depth = 4 + shape_slider / 20
  branch(Point(0, 420), Point(0, -220), 0, depth)
}

fn branch(p: Point, d: Point, level: Int, depth: Int) -> List(Path) {
  case level == depth {
    True -> []
    False -> {
      let q = Point(p.x + d.x, p.y + d.y)
      let left = Point({ d.x - d.y } / 2, { d.y + d.x } / 2)
      let right = Point({ d.x + d.y } / 2, { d.y - d.x } / 2)
      [
        Path(Line(p, q), level * 4, level * 4 + 4, depth - level),
        ..list.append(
          branch(q, left, level + 1, depth),
          branch(q, right, level + 1, depth),
        )
      ]
    }
  }
}
`],["rainbow_flower",`fn draw(shape_slider: Int) -> List(Path) {
  let petals = 3 + shape_slider / 8
  list.flatten([
    [Path(Colored(Arc(Point(0, 0), 440, -90, 270), Rgb(137, 221, 255)), 0, 60, 2)],
    [Path(Colored(Circle(Point(0, 0), 70), Hsl(45, 95, 60)), 0, 10, 5)],
    petal_list(0, petals),
    [Path(Colored(Polygon(star(0, 10)), Rgb(255, 255, 255)), 60, 80, 2)],
  ])
}

// Each petal is two curves out to a tip and back, in its own hue.
fn petal_list(i: Int, n: Int) -> List(Path) {
  case i == n {
    True -> []
    False -> {
      let angle = i * 360 / n
      let tip = Point(cos(angle, 380), sin(angle, 380))
      let left = Point(cos(angle - 25, 320), sin(angle - 25, 320))
      let right = Point(cos(angle + 25, 320), sin(angle + 25, 320))
      let color = Hsl(angle, 85, 62)
      let t = 10 + i * 4
      [
        Path(Colored(Curve(Point(0, 0), left, tip), color), t, t + 10, 3),
        Path(Colored(Curve(tip, right, Point(0, 0)), color), t + 10, t + 20, 3),
        ..petal_list(i + 1, n)
      ]
    }
  }
}

// A five-pointed star's corners, alternating between two radii.
fn star(i: Int, n: Int) -> List(Point) {
  case i == n {
    True -> []
    False -> {
      let r = case i % 2 == 0 {
        True -> 150
        False -> 60
      }
      [Point(cos(i * 36 - 90, r), sin(i * 36 - 90, r)), ..star(i + 1, n)]
    }
  }
}
`],["aurora",`// Aurora: glowing ribbons of light rippling over dark hills under the stars.
// The shape slider makes the ribbons wavier.
fn draw(shape_slider: Int) -> List(Path) {
  let wave = 30 + shape_slider * 2
  list.flatten([stars(0), ribbons(0, wave), hills()])
}

// Forty twinkling stars at scattered spots.
fn stars(k: Int) -> List(Path) {
  case k == 40 {
    True -> []
    False -> {
      let spot = Point({ k * 389 + k * k * 7 } % 1000 - 500, { k * 263 + k * k * 13 } % 560 - 490)
      let star = Glow(Filled(Circle(spot, 2 + k % 2), Rgb(230, 240, 255)), 10)
      [
        Path(Bounce(Faded(star, 60 + k % 4 * 10), 3, 6 + k % 5 * 3), k, k, 0),
        ..stars(k + 1)
      ]
    }
  }
}

fn ribbons(i: Int, wave: Int) -> List(Path) {
  case i == 6 {
    True -> []
    False -> list.append(ribbon(0, i, wave), ribbons(i + 1, wave))
  }
}

// Where ribbon i passes column j: a wave whose phase shifts per ribbon.
fn at(j: Int, i: Int, wave: Int) -> Point {
  Point(-560 + j * 140, -230 + i * 45 + sin(j * 65 + i * 35, wave / 2))
}

// One ribbon: curves joined end to end across the sky, each drawn twice, as a
// wide faint veil and a bright core, and swaying slowly.
fn ribbon(j: Int, i: Int, wave: Int) -> List(Path) {
  case j == 8 {
    True -> []
    False -> {
      let a = at(j, i, wave)
      let b = at(j + 1, i, wave)
      let bend =
        Point({ a.x + b.x } / 2, { a.y + b.y } / 2 + sin(j * 65 + i * 35 + 30, wave))
      let color = Hsl(135 + i * 28, 90, 62)
      let curve = Curve(a, bend, b)
      let move = fn(shape: Shape) { Sway(shape, Point(0, 500), 2, 40 + i * 9) }
      let t = 10 + i * 5 + j * 2
      [
        Path(move(Faded(Glow(Colored(curve, color), 50), 22)), t, t + 4, 34),
        Path(move(Faded(Glow(Colored(curve, color), 30), 75)), t, t + 4, 6),
        ..ribbon(j + 1, i, wave)
      ]
    }
  }
}

// Dark rolling hills along the bottom, in front of the sky.
fn hills() -> List(Path) {
  [
    Path(
      Filled(
        Polygon([
          Point(-500, 500),
          Point(-500, 330),
          Point(-380, 290),
          Point(-250, 330),
          Point(-120, 270),
          Point(30, 320),
          Point(170, 260),
          Point(320, 310),
          Point(500, 280),
          Point(500, 500),
        ]),
        Hsl(232, 35, 7),
      ),
      0,
      0,
      0,
    ),
  ]
}
`],["jellyfish",`// Jellyfish: three glowing jellyfish bobbing in the deep sea, their tentacles
// wiggling, with bubbles drifting around them. The shape slider makes the
// tentacles longer.
fn draw(shape_slider: Int) -> List(Path) {
  let reach = 120 + shape_slider * 2
  list.flatten([
    deep(0),
    jelly(Point(-230, -120), 95, 300, reach, 34, 0),
    jelly(Point(190, -230), 75, 190, reach * 4 / 5, 28, 10),
    jelly(Point(90, 170), 60, 330, reach * 3 / 5, 24, 20),
    bubbles(0),
  ])
}

// A deep-sea glow: see-through circles stacked from big to small.
fn deep(i: Int) -> List(Path) {
  case i == 6 {
    True -> []
    False -> [
      Path(
        Faded(Filled(Circle(Point(0, -80), 500 - i * 60), Hsl(215, 80, 22)), 12),
        0,
        6,
        0,
      ),
      ..deep(i + 1)
    ]
  }
}

// One jellyfish: a glowing dome over an inner dome, and wiggling tentacles.
// Every part bobs together, at a beat set by \`period\`.
fn jelly(
  top: Point,
  size: Int,
  hue: Int,
  reach: Int,
  period: Int,
  t: Int,
) -> List(Path) {
  let bob = fn(shape: Shape) { Bounce(shape, 45, period) }
  let color = Hsl(hue, 90, 66)
  list.append(
    [
      Path(
        bob(Glow(Colored(Faded(Filled(Arc(top, size, 180, 360), color), 55), color), 40)),
        t,
        t + 8,
        4,
      ),
      Path(
        bob(Glow(Faded(Filled(Arc(top, size * 3 / 5, 180, 360), Hsl(hue, 90, 85)), 60), 20)),
        t + 4,
        t + 10,
        0,
      ),
    ],
    tentacles(0, top, size, reach, hue, period, t + 8),
  )
}

// Five tentacles hanging from the rim, each wiggling around where it joins.
fn tentacles(
  k: Int,
  top: Point,
  size: Int,
  reach: Int,
  hue: Int,
  period: Int,
  t: Int,
) -> List(Path) {
  case k == 5 {
    True -> []
    False -> {
      let x = top.x - size * 3 / 4 + k * size * 3 / 8
      let start = Point(x, top.y)
      let length = reach - k % 2 * 30
      let tip = Point(x + { k - 2 } * 12, top.y + length)
      let bend = Point(x + 35 - k % 2 * 70, top.y + length / 2)
      let tentacle =
        Faded(Glow(Colored(Curve(start, bend, tip), Hsl(hue + 20, 90, 72)), 20), 80)
      [
        Path(
          Bounce(Sway(tentacle, start, 9, 10 + k * 3), 45, period),
          t + k,
          t + k + 8,
          3,
        ),
        ..tentacles(k + 1, top, size, reach, hue, period, t)
      ]
    }
  }
}

// Little bubbles, bobbing on their own beats.
fn bubbles(i: Int) -> List(Path) {
  case i == 14 {
    True -> []
    False -> {
      let spot = Point(i * 157 % 900 - 450, 460 - i * 89 % 900)
      let bubble =
        Faded(Glow(Colored(Circle(spot, 5 + i % 4 * 3), Hsl(190, 80, 80)), 12), 70)
      [
        Path(Bounce(bubble, 20 + i % 3 * 15, 14 + i % 4 * 5), 30 + i, 32 + i, 2),
        ..bubbles(i + 1)
      ]
    }
  }
}
`],["galaxy",`// Galaxy: three spiral arms of glowing stars around a bright core, slowly
// rocking as if turning. The shape slider winds the arms tighter.
fn draw(shape_slider: Int) -> List(Path) {
  let twist = 6 + shape_slider / 8
  list.flatten([core(0), arms(0, twist)])
}

// The core: stacked see-through circles, brightest in the middle.
fn core(i: Int) -> List(Path) {
  case i == 7 {
    True -> []
    False -> [
      Path(
        Glow(Faded(Filled(Circle(Point(0, 0), 120 - i * 15), Hsl(40 - i * 3, 90, 50 + i * 6)), 14), 30),
        i,
        i + 4,
        0,
      ),
      ..core(i + 1)
    ]
  }
}

fn arms(a: Int, twist: Int) -> List(Path) {
  case a == 3 {
    True -> []
    False -> list.append(arm(0, a, twist), arms(a + 1, twist))
  }
}

// Arm a: 40 stars spiraling out from the core. Stars far out are bluer, and
// every star rocks around the center together, so the galaxy seems to turn.
fn arm(k: Int, a: Int, twist: Int) -> List(Path) {
  case k == 40 {
    True -> []
    False -> {
      let angle = a * 120 + k * twist
      let r = 40 + k * 11
      let wobble = k * 37 % 12 - 6
      let spot = Point(cos(angle, r + wobble), sin(angle, r - wobble))
      let star =
        Glow(Filled(Circle(spot, 5 - k / 10), case k < 14 {
          True -> Hsl(42, 90, 75)
          False -> Hsl(195 + k, 85, 75)
        }), 18)
      [
        Path(Sway(Faded(star, 95 - k), Point(0, 0), 20, 160), 10 + k, 10 + k, 0),
        ..arm(k + 1, a, twist)
      ]
    }
  }
}
`],["fireworks",`// Fireworks: rockets shoot up over a city skyline and burst into glowing,
// twinkling sparks, one after another. The shape slider makes the bursts bigger.
fn draw(shape_slider: Int) -> List(Path) {
  let size = 90 + shape_slider * 3 / 2
  list.flatten([
    burst(Point(-260, -220), size, 0, 10),
    burst(Point(180, -300), size * 5 / 6, 120, 25),
    burst(Point(-30, -60), size * 4 / 5, 300, 40),
    burst(Point(300, -40), size * 2 / 3, 200, 55),
    burst(Point(-350, 40), size * 2 / 3, 50, 68),
    skyline(),
  ])
}

// One firework: a faint rising trail, then rays shooting out with a
// twinkling spark at each tip.
fn burst(center: Point, size: Int, hue: Int, t: Int) -> List(Path) {
  [
    Path(
      Faded(Glow(Colored(Line(Point(center.x, 480), center), Hsl(hue, 80, 70)), 15), 50),
      t - 8,
      t,
      3,
    ),
    ..rays(0, center, size, hue, t)
  ]
}

fn rays(k: Int, center: Point, size: Int, hue: Int, t: Int) -> List(Path) {
  case k == 16 {
    True -> []
    False -> {
      let angle = k * 360 / 16
      let length = size - k % 2 * size / 4
      let tip = Point(center.x + cos(angle, length), center.y + sin(angle, length))
      let color = Hsl(hue + k * 6, 100, 65)
      let spark = Glow(Filled(Circle(tip, 5), Hsl(hue + k * 6, 100, 80)), 25)
      [
        Path(Glow(Colored(Line(center, tip), color), 25), t, t + 6, 3),
        Path(Bounce(spark, 10, 6 + k % 4 * 2), t + 6, t + 6, 0),
        ..rays(k + 1, center, size, hue, t)
      ]
    }
  }
}

// A dark city skyline, with glowing windows.
fn skyline() -> List(Path) {
  [
    Path(
      Filled(
        Polygon([
          Point(-500, 500), Point(-500, 330), Point(-420, 330), Point(-420, 260),
          Point(-330, 260), Point(-330, 360), Point(-250, 360), Point(-250, 220),
          Point(-170, 220), Point(-170, 320), Point(-60, 320), Point(-60, 180),
          Point(30, 180), Point(30, 300), Point(130, 300), Point(130, 240),
          Point(230, 240), Point(230, 340), Point(330, 340), Point(330, 200),
          Point(420, 200), Point(420, 310), Point(500, 310), Point(500, 500),
        ]),
        Hsl(240, 30, 8),
      ),
      0,
      0,
      0,
    ),
    ..windows(0)
  ]
}

fn windows(i: Int) -> List(Path) {
  case i == 18 {
    True -> []
    False -> {
      let spot = Point({ i * 389 + i * i * 7 } % 900 - 450, 380 + { i * 263 + i * i * 13 } % 100)
      [
        Path(
          Glow(Filled(Polygon([spot, Point(spot.x + 12, spot.y), Point(spot.x + 12, spot.y + 16), Point(spot.x, spot.y + 16)]), Hsl(45, 100, 70)), 15),
          i,
          i,
          0,
        ),
        ..windows(i + 1)
      ]
    }
  }
}
`],["gilded_halo",`// Gilded Halo: an original emblem of glowing gold rings that rock around a
// shining core, ringed with rune marks, with embers drifting through a golden
// haze. The shape slider turns the rings.
fn draw(shape_slider: Int) -> List(Path) {
  let turn = shape_slider * 36 / 10
  list.flatten([
    haze(0),
    core(),
    rings(0, turn),
    runes(0),
    embers(0),
  ])
}

fn gold(lightness: Int) {
  Hsl(43, 90, lightness)
}

// A warm haze: see-through circles stacked from big to small.
fn haze(i: Int) -> List(Path) {
  case i == 6 {
    True -> []
    False -> [
      Path(
        Faded(Filled(Circle(Point(0, 0), 480 - i * 60), Hsl(35, 80, 22)), 12),
        0,
        6,
        0,
      ),
      ..haze(i + 1)
    ]
  }
}

// The shining core: a bright ring around a twelve-pointed star.
fn core() -> List(Path) {
  [
    Path(Glow(Colored(Circle(Point(0, 0), 190), gold(70)), 40), 4, 18, 6),
    Path(
      Glow(
        Colored(
          Faded(Filled(Polygon(star(0, 24, 120, 55)), gold(55)), 55),
          gold(80),
        ),
        30,
      ),
      18,
      30,
      2,
    ),
    Path(Glow(Filled(Circle(Point(0, 0), 22), gold(85)), 45), 30, 32, 0),
  ]
}

// The corners of a star with n points: outer radius \`big\`, inner \`small\`.
fn star(j: Int, n: Int, big: Int, small: Int) -> List(Point) {
  case j == n {
    True -> []
    False -> {
      let r = case j % 2 == 0 {
        True -> big
        False -> small
      }
      let angle = j * 360 / n - 90
      [Point(cos(angle, r), sin(angle, r)), ..star(j + 1, n, big, small)]
    }
  }
}

// Five thin, partial rings at different sizes. Each starts at its own angle,
// the slider turns them (alternate rings turn the opposite way), and each
// rocks slowly around the center on its own beat.
fn rings(i: Int, turn: Int) -> List(Path) {
  case i == 5 {
    True -> []
    False -> {
      let direction = case i % 2 == 0 {
        True -> 1
        False -> -1
      }
      let from = i * 72 + direction * turn
      let span = 110 + i * 25
      let ring = Arc(Point(0, 0), 245 + i * 24, from, from + span)
      [
        Path(
          Sway(Glow(Colored(ring, gold(60 + i * 5)), 25), Point(0, 0), 10 + i * 3, 50 + i * 12),
          30 + i * 5,
          42 + i * 5,
          5 - i % 2 * 2,
        ),
        ..rings(i + 1, turn)
      ]
    }
  }
}

// Twelve rune marks around the outside: a tick, with a small diamond at every
// third one. They pulse gently up and down.
fn runes(j: Int) -> List(Path) {
  case j == 12 {
    True -> []
    False -> {
      let angle = j * 30
      let tick =
        Line(Point(cos(angle, 380), sin(angle, 380)), Point(cos(angle, 405), sin(angle, 405)))
      let marks = case j % 3 == 0 {
        False -> [tick]
        True -> {
          let c = Point(cos(angle, 425), sin(angle, 425))
          [
            tick,
            Filled(
              Polygon([
                Point(c.x, c.y - 12),
                Point(c.x + 8, c.y),
                Point(c.x, c.y + 12),
                Point(c.x - 8, c.y),
              ]),
              gold(65),
            ),
          ]
        }
      }
      list.append(
        list.map(marks, fn(mark) {
          Path(Bounce(Glow(Colored(mark, gold(70)), 15), 6, 20 + j % 4 * 5), 60 + j, 62 + j, 3)
        }),
        runes(j + 1),
      )
    }
  }
}

// Embers scattered over the canvas, each bouncing on its own beat.
fn embers(i: Int) -> List(Path) {
  case i == 18 {
    True -> []
    False -> {
      let spot = Point(cos(i * 137, 460), 470 - { i * 97 } % 900)
      let ember = Glow(Filled(Circle(spot, 3 + i % 3), Hsl(28 + i % 4 * 6, 100, 60)), 25)
      [
        Path(Bounce(ember, 30 + i % 4 * 12, 12 + i % 5 * 4), 75 + i, 75 + i, 0),
        ..embers(i + 1)
      ]
    }
  }
}
`],["cal_logo",`// A glowing, bouncing Cal script in Berkeley blue with a California gold
// outline, a gold swoosh, and twinkling sparkles. The shape slider sets how
// high the letters bounce.
fn draw(shape_slider: Int) -> List(Path) {
  let height = 8 + shape_slider / 3
  let parts = letters(height)
  list.flatten([
    backdrop(0),
    // Every gold outline goes underneath every blue body, so where letters
    // join, the joins stay seamless.
    list.map(parts, fn(part) {
      Path(Glow(Colored(part.shape, gold()), 30), part.start, part.end, 46)
    }),
    list.map(parts, fn(part) {
      Path(Colored(part.shape, blue()), part.start, part.end, 30)
    }),
    swoosh(),
    sparkles(0),
  ])
}

fn gold() {
  Rgb(253, 181, 21)
}

fn blue() {
  Rgb(0, 50, 98)
}

// Every point is shifted right by 30 so the word sits centered.
fn p(x: Int, y: Int) -> Point {
  Point(x + 30, y)
}

// The strokes of C, a, and l, in the order they are written. Each letter
// bounces on its own beat.
fn letters(height: Int) -> List(Path) {
  let c = fn(part: Shape) { Bounce(part, height, 14) }
  let a = fn(part: Shape) { Bounce(part, height, 12) }
  let l = fn(part: Shape) { Bounce(part, height, 16) }
  [
    // C: a big open arc, a curl at the top ending in a ball, and a tail that
    // runs into the a.
    Path(c(Arc(p(-190, 0), 175, 315, 45)), 0, 16, 0),
    Path(c(Curve(p(-66, -124), p(-10, -205), p(-92, -215))), 16, 20, 0),
    Path(c(Filled(Circle(p(-92, -215), 14), blue())), 20, 21, 0),
    Path(c(Curve(p(-66, 124), p(-20, 165), p(25, 112))), 21, 25, 0),
    // a: a round bowl, a stem, and a flick.
    Path(a(Arc(p(75, 60), 58, 0, 360)), 25, 33, 0),
    Path(a(Line(p(133, 2), p(133, 118))), 33, 36, 0),
    Path(a(Curve(p(133, 118), p(150, 150), p(185, 112))), 36, 39, 0),
    // l: a tall loop and a flick.
    Path(l(Leaf(p(250, 118), p(300, -235), 20)), 39, 50, 0),
    Path(l(Curve(p(250, 118), p(262, 150), p(305, 110))), 50, 53, 0),
  ]
}

// A tapered gold swoosh under the word that rocks gently.
fn swoosh() -> List(Path) {
  let pivot = p(0, 235)
  [
    Path(
      Sway(
        Glow(Filled(Leaf(p(-380, 225), p(360, 190), 13), gold()), 35),
        pivot,
        3,
        30,
      ),
      55,
      68,
      0,
    ),
    Path(
      Sway(
        Faded(
          Glow(Colored(Curve(p(-330, 265), p(0, 305), p(310, 230)), gold()), 20),
          70,
        ),
        pivot,
        3,
        30,
      ),
      60,
      72,
      4,
    ),
  ]
}

// A soft Berkeley-blue glow behind everything, made of stacked see-through
// circles so it fades out toward the edge.
fn backdrop(i: Int) -> List(Path) {
  case i == 6 {
    True -> []
    False -> [
      Path(
        Faded(Filled(Circle(Point(0, 0), 470 - i * 55), Rgb(0, 70, 150)), 13),
        0,
        6,
        0,
      ),
      ..backdrop(i + 1)
    ]
  }
}

// Ten gold four-pointed sparkles in a ring around the word, each bouncing on
// its own beat.
fn sparkles(i: Int) -> List(Path) {
  case i == 10 {
    True -> []
    False -> {
      let angle = i * 36 + 18
      let center = Point(cos(angle, 430), sin(angle, 345))
      let size = 14 + i % 3 * 6
      let sparkle =
        Glow(Filled(Polygon(star(center, size, 0)), Rgb(255, 225, 120)), 25)
      [
        Path(Bounce(sparkle, 12 + i % 4 * 6, 8 + i % 5 * 3), 72 + i * 2, 72 + i * 2, 0),
        ..sparkles(i + 1)
      ]
    }
  }
}

// The corners of a four-pointed star: long points alternating with short ones.
fn star(center: Point, size: Int, j: Int) -> List(Point) {
  case j == 8 {
    True -> []
    False -> {
      let r = case j % 2 == 0 {
        True -> size
        False -> size / 4
      }
      let angle = j * 45 - 90
      [
        Point(center.x + cos(angle, r), center.y + sin(angle, r)),
        ..star(center, size, j + 1)
      ]
    }
  }
}
`],["icarus_charcoal",`// Icarus Falling, in charcoal: the boy who flew too close to the sun
// tumbles headfirst through a spotlight of pale paper, his wings swept up
// behind him, one of them torn, as feathers rip loose and drift away.
// The shape slider opens his wings wider.
fn draw(shape_slider: Int) -> List(Path) {
  let spread = shape_slider / 5
  list.flatten([
    backdrop(),
    atmosphere(0),
    wing(Point(-132, 89), Point(-262, -40), Point(-322, -250), 195, 255, 0 - spread, 0, 18),
    wing(Point(-88, 135), Point(-128, -110), Point(-58, -320), 320, 280, spread, 1, 24),
    body(),
    loose_feathers(0),
    extras(0),
  ])
}

// The whole figure tumbles slowly around the middle of his back.
fn tumble(shape: Shape) -> Shape {
  Sway(shape, Point(-50, 80), 4, 90)
}

// The point k/n of the way from a to b.
fn along(a: Point, b: Point, k: Int, n: Int) -> Point {
  Point(a.x + { b.x - a.x } * k / n, a.y + { b.y - a.y } * k / n)
}

// How far to step from the bone a to b to move s units sideways, toward the
// side facing down, away from the sun. A negative s steps toward the sun.
fn away(a: Point, b: Point, s: Int) -> Point {
  let dx = b.x - a.x
  let dy = b.y - a.y
  let len = sqrt(dx * dx + dy * dy) + 1
  case dx < 0 {
    True -> Point(dy * s / len, 0 - dx * s / len)
    False -> Point(0 - dy * s / len, dx * s / len)
  }
}

fn shifted(p: Point, by: Point) -> Point {
  Point(p.x + by.x, p.y + by.y)
}

// The body, blocked in the way a figure drawer would: every part is a thick
// rounded stroke along its bone. All the outlines go down first and the body
// tone over them, so the parts melt into one silhouette with a single outline
// around the outside. Then every part is shaded on the side away from the sun.
fn body() -> List(Path) {
  list.flatten([
    bones(contour),
    bones(flesh),
    bones(shading),
    back(16),
    hair(0),
  ])
}

// Every bone of the falling figure: a rounded stroke v wide from a to b, and
// a muscle swelling to w wide over the first reach tenths of it, drawn
// starting at time t by the given painter.
fn bones(part) -> List(Path) {
  list.flatten([
    part(Point(-198, 196), Point(-182, 180), 0, 78, 10, 8),
    part(Point(-172, 171), Point(-139, 140), 0, 50, 10, 7),
    part(Point(-179, 84), Point(-85, 182), 0, 48, 10, 6),
    part(Point(-154, 153), Point(-42, 47), 140, 40, 10, 6),
    part(Point(-78, 81), Point(37, -29), 110, 84, 10, 8),
    part(Point(-21, -25), Point(31, 29), 0, 90, 10, 9),
    part(Point(-179, 84), Point(-290, 161), 54, 30, 10, 11),
    part(Point(-290, 161), Point(-352, 270), 42, 22, 8, 14),
    part(Point(-352, 270), Point(-374, 334), 28, 12, 10, 17),
    part(Point(-85, 182), Point(-17, 299), 54, 30, 10, 11),
    part(Point(-17, 299), Point(103, 333), 42, 22, 8, 14),
    part(Point(103, 333), Point(166, 316), 28, 12, 10, 17),
    part(Point(-21, -25), Point(109, -189), 80, 42, 10, 11),
    part(Point(109, -189), Point(210, -355), 52, 24, 7, 14),
    part(Point(210, -355), Point(256, -407), 30, 14, 10, 17),
    part(Point(31, 29), Point(228, -28), 80, 42, 10, 11),
    part(Point(228, -28), Point(308, -201), 52, 24, 7, 14),
    part(Point(308, -201), Point(356, -247), 30, 14, 10, 17),
  ])
}

// A muscle: a leaf shape w wide, from a over the first reach tenths of the
// way to b.
fn muscle(a: Point, b: Point, w: Int, reach: Int) -> Shape {
  Leaf(a, along(a, b, reach, 10), w / 2)
}

// The outline of one part: a stroke a little wider than the bone, and a line
// around the muscle.
fn contour(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int) -> List(Path) {
  [
    Path(tumble(ink(Line(a, b))), t, t + 6, v + 8),
    Path(tumble(ink(muscle(a, b, w, reach))), t, t + 6, 8),
  ]
}

// The body tone of one part, laid over every outline so that only the outer
// edge of the outline shows.
fn flesh(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int) -> List(Path) {
  [
    Path(tumble(skin(Line(a, b))), t, t + 6, v),
    Path(tumble(skin(muscle(a, b, w, reach))), t, t + 6, 0),
  ]
}

// Shadow on the side of each muscle away from the sun, a sliver of light on
// the side toward it, and a few hatch strokes in the shadow.
fn shading(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int) -> List(Path) {
  case w == 0 {
    True -> []
    False -> {
      let tip = along(a, b, reach, 10)
      let dark = away(a, b, w / 5)
      let lit = away(a, b, 0 - w / 4)
      list.append(
        [
          Path(tumble(shade(Leaf(shifted(a, dark), shifted(tip, dark), w * 11 / 40))), t + 2, t + 7, 0),
          Path(tumble(light(Leaf(shifted(a, lit), shifted(tip, lit), w / 10))), t + 3, t + 8, 0),
        ],
        hatch(1, a, tip, w, t + 4),
      )
    }
  }
}

// Four short strokes across the shadow, slanted along the part.
fn hatch(k: Int, a: Point, b: Point, w: Int, t: Int) -> List(Path) {
  case k == 5 {
    True -> []
    False -> {
      let m = along(a, b, k, 5)
      let inner = away(a, b, w / 10)
      let outer = away(a, b, w * 3 / 10)
      let slant = Point({ b.x - a.x } / 12, { b.y - a.y } / 12)
      let stroke =
        Line(
          Point(m.x + outer.x + slant.x, m.y + outer.y + slant.y),
          Point(m.x + inner.x - slant.x, m.y + inner.y - slant.y),
        )
      [
        Path(tumble(hatching(stroke)), t + k, t + k + 2, 2),
        ..hatch(k + 1, a, b, w, t)
      ]
    }
  }
}

// The line of the spine down his back.
fn back(t: Int) -> List(Path) {
  [Path(tumble(soft(Curve(Point(-139, 140), Point(-72, 52), Point(19, -12)))), t, t + 6, 3)]
}

// A cap of curls on the crown of his head. He falls headfirst, so the crown
// points down and to the left, and the curls leave his face and neck bare.
fn hair(j: Int) -> List(Path) {
  case j == 11 {
    True -> []
    False -> {
      let angle = case j < 7 {
        True -> 70 + j * 22
        False -> 95 + { j - 7 } * 28
      }
      let r = case j < 7 {
        True -> 34
        False -> 18
      }
      let spot = Point(-190 + cos(angle, r), 188 + sin(angle, r))
      [
        Path(
          tumble(curl(Arc(spot, 9 + j % 3 * 2, j * 70, j * 70 + 290))),
          14 + j,
          16 + j,
          2,
        ),
        ..hair(j + 1)
      ]
    }
  }
}

// A wing: a bone from shoulder to wrist to tip, with long feathers fanning
// from it, turning from angle \`from\` to angle \`to\`. The second wing (side 1)
// is torn, with feathers missing. The shape slider opens the wings wider.
fn wing(
  shoulder: Point,
  wrist: Point,
  tip: Point,
  from: Int,
  to: Int,
  shift: Int,
  side: Int,
  t: Int,
) -> List(Path) {
  list.append(
    [
      Path(tumble(ink(Line(shoulder, wrist))), t, t + 4, 6),
      Path(tumble(ink(Line(wrist, tip))), t + 4, t + 8, 5),
    ],
    feathers(0, shoulder, wrist, tip, from, to, shift, side, t + 4),
  )
}

fn feathers(
  i: Int,
  shoulder: Point,
  wrist: Point,
  tip: Point,
  from: Int,
  to: Int,
  shift: Int,
  side: Int,
  t: Int,
) -> List(Path) {
  case i == 14 {
    True -> []
    False -> {
      let rest = feathers(i + 1, shoulder, wrist, tip, from, to, shift, side, t)
      case side == 1 && i % 4 == 2 {
        True -> rest
        False -> {
          let base = case i < 7 {
            True -> along(shoulder, wrist, i, 7)
            False -> along(wrist, tip, i - 7, 7)
          }
          let angle = from + { to - from } * i / 13 + shift
          let length = 100 + i * { 24 - i }
          let end =
            Point(base.x + cos(angle, length), base.y + sin(angle, length))
          let short =
            Point(
              base.x + cos(angle - 8, length * 45 / 100),
              base.y + sin(angle - 8, length * 45 / 100),
            )
          let feather = Leaf(base, end, 12 + i % 3 * 3)
          let covert = Leaf(base, short, 11)
          let s = t + i * 2
          list.append(
            [
              Path(tumble(feather_fill(feather)), s, s + 5, 0),
              Path(tumble(ink(feather)), s, s + 5, 2),
              Path(tumble(soft(Line(base, end))), s + 2, s + 6, 1),
              Path(tumble(feather_fill(covert)), s + 3, s + 6, 0),
              Path(tumble(soft(covert)), s + 3, s + 6, 2),
            ],
            rest,
          )
        }
      }
    }
  }
}

// Feathers torn loose, spinning and drifting on their own beats. Spots that
// would land on the body are skipped.
fn loose_feathers(k: Int) -> List(Path) {
  case k == 18 {
    True -> []
    False -> {
      let spot =
        Point(
          { k * 389 + k * k * 7 } % 900 - 450,
          { k * 263 + k * k * 13 } % 640 - 480,
        )
      let rest = loose_feathers(k + 1)
      case spot.x > -300 && spot.x < 330 && spot.y > -150 {
        True -> rest
        False -> {
          let angle = k * 67 % 360
          let size = 55 + k % 3 * 20
          let end = Point(spot.x + cos(angle, size), spot.y + sin(angle, size))
          let drift = fn(shape: Shape) {
            Bounce(
              Sway(shape, spot, 30, 18 + k % 4 * 6),
              12 + k % 3 * 10,
              30 + k % 5 * 8,
            )
          }
          let feather = Leaf(spot, end, 7 + k % 2 * 3)
          let s = 62 + k * 2
          list.append(
            [
              Path(drift(feather_fill(feather)), s, s + 4, 0),
              Path(drift(ink(feather)), s, s + 4, 2),
              Path(drift(soft(Line(spot, end))), s + 2, s + 5, 1),
            ],
            rest,
          )
        }
      }
    }
  }
}

// \u2500\u2500 The charcoal style \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn ink(shape: Shape) -> Shape {
  Colored(shape, Rgb(14, 12, 10))
}

fn skin(shape: Shape) -> Shape {
  Filled(Colored(shape, Rgb(118, 108, 96)), Rgb(118, 108, 96))
}

fn shade(shape: Shape) -> Shape {
  Faded(Filled(shape, Rgb(30, 26, 22)), 45)
}

fn light(shape: Shape) -> Shape {
  Faded(Filled(shape, Rgb(240, 232, 216)), 40)
}

fn curl(shape: Shape) -> Shape {
  Colored(shape, Rgb(14, 12, 10))
}

fn feather_fill(shape: Shape) -> Shape {
  Faded(Filled(shape, Rgb(32, 27, 22)), 14)
}

fn hatching(shape: Shape) -> Shape {
  Faded(Colored(shape, Rgb(14, 12, 10)), 55)
}

fn soft(shape: Shape) -> Shape {
  Faded(Colored(shape, Rgb(14, 12, 10)), 45)
}

// Pale paper lit like a spotlight, darkening to near black at the edges:
// stacked see-through circles over a dark ground.
fn backdrop() -> List(Path) {
  [
    Path(
      Filled(
        Polygon([
          Point(-500, -500),
          Point(500, -500),
          Point(500, 500),
          Point(-500, 500),
        ]),
        Rgb(16, 14, 13),
      ),
      0,
      0,
      0,
    ),
    ..paper(0)
  ]
}

fn paper(i: Int) -> List(Path) {
  case i == 14 {
    True -> []
    False -> [
      Path(
        Faded(Filled(Circle(Point(-20, -10), 720 - i * 45), Rgb(222, 214, 198)), 13),
        0,
        0,
        0,
      ),
      ..paper(i + 1)
    ]
  }
}

// Faint streaks of rushing air above the falling figure.
fn atmosphere(k: Int) -> List(Path) {
  case k == 12 {
    True -> []
    False -> {
      let x = -330 + k * 60 + k * 37 % 25
      let top = -470 + k * 97 % 160
      [
        Path(
          Faded(
            Colored(Line(Point(x, top), Point(x + 8, top + 170 + k % 3 * 50)), Rgb(14, 12, 10)),
            18,
          ),
          k,
          k + 8,
          2,
        ),
        ..atmosphere(k + 1)
      ]
    }
  }
}

fn extras(k: Int) -> List(Path) {
  []
}
`],["icarus_glow",`// Icarus Falling, in light: the boy who flew too close to the sun
// tumbles headfirst through the dark, glowing white, his wings swept up
// behind him, one of them torn, as glowing feathers and sparks drift away.
// The shape slider opens his wings wider.
fn draw(shape_slider: Int) -> List(Path) {
  let spread = shape_slider / 5
  list.flatten([
    backdrop(),
    atmosphere(0),
    wing(Point(-132, 89), Point(-262, -40), Point(-322, -250), 195, 255, 0 - spread, 0, 18),
    wing(Point(-88, 135), Point(-128, -110), Point(-58, -320), 320, 280, spread, 1, 24),
    body(),
    loose_feathers(0),
    extras(0),
  ])
}

// The whole figure tumbles slowly around the middle of his back.
fn tumble(shape: Shape) -> Shape {
  Sway(shape, Point(-50, 80), 4, 90)
}

// The point k/n of the way from a to b.
fn along(a: Point, b: Point, k: Int, n: Int) -> Point {
  Point(a.x + { b.x - a.x } * k / n, a.y + { b.y - a.y } * k / n)
}

// How far to step from the bone a to b to move s units sideways, toward the
// side facing down, away from the sun. A negative s steps toward the sun.
fn away(a: Point, b: Point, s: Int) -> Point {
  let dx = b.x - a.x
  let dy = b.y - a.y
  let len = sqrt(dx * dx + dy * dy) + 1
  case dx < 0 {
    True -> Point(dy * s / len, 0 - dx * s / len)
    False -> Point(0 - dy * s / len, dx * s / len)
  }
}

fn shifted(p: Point, by: Point) -> Point {
  Point(p.x + by.x, p.y + by.y)
}

// The body, blocked in the way a figure drawer would: every part is a thick
// rounded stroke along its bone. All the outlines go down first and the body
// tone over them, so the parts melt into one silhouette with a single outline
// around the outside. Then every part is shaded on the side away from the sun.
fn body() -> List(Path) {
  list.flatten([
    bones(contour),
    bones(flesh),
    bones(shading),
    back(16),
    hair(0),
  ])
}

// Every bone of the falling figure: a rounded stroke v wide from a to b, and
// a muscle swelling to w wide over the first reach tenths of it, drawn
// starting at time t by the given painter.
fn bones(part) -> List(Path) {
  list.flatten([
    part(Point(-198, 196), Point(-182, 180), 0, 78, 10, 8),
    part(Point(-172, 171), Point(-139, 140), 0, 50, 10, 7),
    part(Point(-179, 84), Point(-85, 182), 0, 48, 10, 6),
    part(Point(-154, 153), Point(-42, 47), 140, 40, 10, 6),
    part(Point(-78, 81), Point(37, -29), 110, 84, 10, 8),
    part(Point(-21, -25), Point(31, 29), 0, 90, 10, 9),
    part(Point(-179, 84), Point(-290, 161), 54, 30, 10, 11),
    part(Point(-290, 161), Point(-352, 270), 42, 22, 8, 14),
    part(Point(-352, 270), Point(-374, 334), 28, 12, 10, 17),
    part(Point(-85, 182), Point(-17, 299), 54, 30, 10, 11),
    part(Point(-17, 299), Point(103, 333), 42, 22, 8, 14),
    part(Point(103, 333), Point(166, 316), 28, 12, 10, 17),
    part(Point(-21, -25), Point(109, -189), 80, 42, 10, 11),
    part(Point(109, -189), Point(210, -355), 52, 24, 7, 14),
    part(Point(210, -355), Point(256, -407), 30, 14, 10, 17),
    part(Point(31, 29), Point(228, -28), 80, 42, 10, 11),
    part(Point(228, -28), Point(308, -201), 52, 24, 7, 14),
    part(Point(308, -201), Point(356, -247), 30, 14, 10, 17),
  ])
}

// A muscle: a leaf shape w wide, from a over the first reach tenths of the
// way to b.
fn muscle(a: Point, b: Point, w: Int, reach: Int) -> Shape {
  Leaf(a, along(a, b, reach, 10), w / 2)
}

// The outline of one part: a stroke a little wider than the bone, and a line
// around the muscle.
fn contour(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int) -> List(Path) {
  [
    Path(tumble(ink(Line(a, b))), t, t + 6, v + 8),
    Path(tumble(ink(muscle(a, b, w, reach))), t, t + 6, 8),
  ]
}

// The body tone of one part, laid over every outline so that only the outer
// edge of the outline shows.
fn flesh(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int) -> List(Path) {
  [
    Path(tumble(skin(Line(a, b))), t, t + 6, v),
    Path(tumble(skin(muscle(a, b, w, reach))), t, t + 6, 0),
  ]
}

// Shadow on the side of each muscle away from the sun, a sliver of light on
// the side toward it, and a few hatch strokes in the shadow.
fn shading(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int) -> List(Path) {
  case w == 0 {
    True -> []
    False -> {
      let tip = along(a, b, reach, 10)
      let dark = away(a, b, w / 5)
      let lit = away(a, b, 0 - w / 4)
      list.append(
        [
          Path(tumble(shade(Leaf(shifted(a, dark), shifted(tip, dark), w * 11 / 40))), t + 2, t + 7, 0),
          Path(tumble(light(Leaf(shifted(a, lit), shifted(tip, lit), w / 10))), t + 3, t + 8, 0),
        ],
        hatch(1, a, tip, w, t + 4),
      )
    }
  }
}

// Four short strokes across the shadow, slanted along the part.
fn hatch(k: Int, a: Point, b: Point, w: Int, t: Int) -> List(Path) {
  case k == 5 {
    True -> []
    False -> {
      let m = along(a, b, k, 5)
      let inner = away(a, b, w / 10)
      let outer = away(a, b, w * 3 / 10)
      let slant = Point({ b.x - a.x } / 12, { b.y - a.y } / 12)
      let stroke =
        Line(
          Point(m.x + outer.x + slant.x, m.y + outer.y + slant.y),
          Point(m.x + inner.x - slant.x, m.y + inner.y - slant.y),
        )
      [
        Path(tumble(hatching(stroke)), t + k, t + k + 2, 2),
        ..hatch(k + 1, a, b, w, t)
      ]
    }
  }
}

// The line of the spine down his back.
fn back(t: Int) -> List(Path) {
  [Path(tumble(soft(Curve(Point(-139, 140), Point(-72, 52), Point(19, -12)))), t, t + 6, 3)]
}

// A cap of curls on the crown of his head. He falls headfirst, so the crown
// points down and to the left, and the curls leave his face and neck bare.
fn hair(j: Int) -> List(Path) {
  case j == 11 {
    True -> []
    False -> {
      let angle = case j < 7 {
        True -> 70 + j * 22
        False -> 95 + { j - 7 } * 28
      }
      let r = case j < 7 {
        True -> 34
        False -> 18
      }
      let spot = Point(-190 + cos(angle, r), 188 + sin(angle, r))
      [
        Path(
          tumble(curl(Arc(spot, 9 + j % 3 * 2, j * 70, j * 70 + 290))),
          14 + j,
          16 + j,
          2,
        ),
        ..hair(j + 1)
      ]
    }
  }
}

// A wing: a bone from shoulder to wrist to tip, with long feathers fanning
// from it, turning from angle \`from\` to angle \`to\`. The second wing (side 1)
// is torn, with feathers missing. The shape slider opens the wings wider.
fn wing(
  shoulder: Point,
  wrist: Point,
  tip: Point,
  from: Int,
  to: Int,
  shift: Int,
  side: Int,
  t: Int,
) -> List(Path) {
  list.append(
    [
      Path(tumble(ink(Line(shoulder, wrist))), t, t + 4, 6),
      Path(tumble(ink(Line(wrist, tip))), t + 4, t + 8, 5),
    ],
    feathers(0, shoulder, wrist, tip, from, to, shift, side, t + 4),
  )
}

fn feathers(
  i: Int,
  shoulder: Point,
  wrist: Point,
  tip: Point,
  from: Int,
  to: Int,
  shift: Int,
  side: Int,
  t: Int,
) -> List(Path) {
  case i == 14 {
    True -> []
    False -> {
      let rest = feathers(i + 1, shoulder, wrist, tip, from, to, shift, side, t)
      case side == 1 && i % 4 == 2 {
        True -> rest
        False -> {
          let base = case i < 7 {
            True -> along(shoulder, wrist, i, 7)
            False -> along(wrist, tip, i - 7, 7)
          }
          let angle = from + { to - from } * i / 13 + shift
          let length = 100 + i * { 24 - i }
          let end =
            Point(base.x + cos(angle, length), base.y + sin(angle, length))
          let short =
            Point(
              base.x + cos(angle - 8, length * 45 / 100),
              base.y + sin(angle - 8, length * 45 / 100),
            )
          let feather = Leaf(base, end, 12 + i % 3 * 3)
          let covert = Leaf(base, short, 11)
          let s = t + i * 2
          list.append(
            [
              Path(tumble(feather_fill(feather)), s, s + 5, 0),
              Path(tumble(ink(feather)), s, s + 5, 2),
              Path(tumble(soft(Line(base, end))), s + 2, s + 6, 1),
              Path(tumble(feather_fill(covert)), s + 3, s + 6, 0),
              Path(tumble(soft(covert)), s + 3, s + 6, 2),
            ],
            rest,
          )
        }
      }
    }
  }
}

// Feathers torn loose, spinning and drifting on their own beats. Spots that
// would land on the body are skipped.
fn loose_feathers(k: Int) -> List(Path) {
  case k == 18 {
    True -> []
    False -> {
      let spot =
        Point(
          { k * 389 + k * k * 7 } % 900 - 450,
          { k * 263 + k * k * 13 } % 640 - 480,
        )
      let rest = loose_feathers(k + 1)
      case spot.x > -300 && spot.x < 330 && spot.y > -150 {
        True -> rest
        False -> {
          let angle = k * 67 % 360
          let size = 55 + k % 3 * 20
          let end = Point(spot.x + cos(angle, size), spot.y + sin(angle, size))
          let drift = fn(shape: Shape) {
            Bounce(
              Sway(shape, spot, 30, 18 + k % 4 * 6),
              12 + k % 3 * 10,
              30 + k % 5 * 8,
            )
          }
          let feather = Leaf(spot, end, 7 + k % 2 * 3)
          let s = 62 + k * 2
          list.append(
            [
              Path(drift(feather_fill(feather)), s, s + 4, 0),
              Path(drift(ink(feather)), s, s + 4, 2),
              Path(drift(soft(Line(spot, end))), s + 2, s + 5, 1),
            ],
            rest,
          )
        }
      }
    }
  }
}

// \u2500\u2500 The glowing style \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn ink(shape: Shape) -> Shape {
  Glow(Colored(shape, Rgb(242, 246, 255)), 14)
}

fn skin(shape: Shape) -> Shape {
  Filled(Colored(shape, Rgb(4, 4, 7)), Rgb(4, 4, 7))
}

fn shade(shape: Shape) -> Shape {
  Faded(Filled(shape, Rgb(70, 82, 130)), 22)
}

fn light(shape: Shape) -> Shape {
  Glow(Faded(Filled(shape, Rgb(235, 240, 255)), 45), 16)
}

fn curl(shape: Shape) -> Shape {
  Glow(Faded(Colored(shape, Rgb(242, 246, 255)), 80), 8)
}

fn feather_fill(shape: Shape) -> Shape {
  Glow(Faded(Filled(shape, Rgb(235, 240, 255)), 14), 20)
}

fn hatching(shape: Shape) -> Shape {
  Faded(Colored(shape, Rgb(225, 232, 255)), 22)
}

fn soft(shape: Shape) -> Shape {
  Faded(Colored(shape, Rgb(225, 232, 255)), 55)
}

// Pure black, with a faint pale halo behind the figure.
fn backdrop() -> List(Path) {
  [
    Path(
      Filled(
        Polygon([
          Point(-500, -500),
          Point(500, -500),
          Point(500, 500),
          Point(-500, 500),
        ]),
        Rgb(0, 0, 0),
      ),
      0,
      0,
      0,
    ),
    ..halo(0)
  ]
}

fn halo(i: Int) -> List(Path) {
  case i == 8 {
    True -> []
    False -> [
      Path(
        Faded(Filled(Circle(Point(-30, 20), 460 - i * 50), Rgb(200, 210, 255)), 4),
        0,
        6,
        0,
      ),
      ..halo(i + 1)
    ]
  }
}

fn atmosphere(k: Int) -> List(Path) {
  []
}

// Sparks of light shed by the falling feathers, each bouncing on its own beat.
fn extras(k: Int) -> List(Path) {
  case k == 20 {
    True -> []
    False -> {
      let spot =
        Point(
          { k * 211 + k * k * 11 } % 940 - 470,
          { k * 149 + k * k * 17 } % 700 - 480,
        )
      let spark = Glow(Filled(Circle(spot, 2 + k % 3), Rgb(255, 255, 255)), 18)
      [
        Path(Bounce(spark, 20 + k % 4 * 12, 14 + k % 5 * 5), 70 + k, 70 + k, 0),
        ..extras(k + 1)
      ]
    }
  }
}
`],["icarus_falling_animated",`// ICARUS \u2014 THE LAST FLIGHT
// Colored ink, molten-gold light, turquoise/indigo wings, and a violent fall.
// He tumbles backward and down with his bare back to us: curly head
// thrown back, one leg kicked up and bent, the other trailing, one arm
// reaching up, the other hanging with fingers spread, and huge wings
// rising in a U.
// Shape slider: 0 = tight wings, 100 = wings thrown wide open.
// For ongoing motion, switch on Loop in the animator.

fn draw(shape_slider: Int) -> List(Path) {
  let spread = shape_slider * 3 / 5
  list.flatten([
    sky(),
    sunrays(0),
    clouds(0),
    rushing_air(0),
    wing(-1, spread),
    wing(1, spread),
    figure(),
    loose_feathers(0),
    falling_sparks(0),
    speed_trails(0),
  ])
}

// \u2500\u2500 Colors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn halo(s: Shape) -> Shape {
  Glow(Filled(Colored(s, Rgb(255, 176, 103)), Rgb(255, 176, 103)), 16)
}

fn ink(s: Shape) -> Shape {
  Colored(s, Rgb(39, 32, 42))
}

fn skin(s: Shape) -> Shape {
  Filled(Colored(s, Rgb(168, 97, 66)), Rgb(168, 97, 66))
}

fn shade(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(74, 49, 59)), 45)
}

fn shine(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(255, 209, 144)), 52)
}

fn hatching(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(50, 35, 42)), 42)
}

fn line(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(64, 45, 53)), 80)
}

fn highlight(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(255, 201, 136)), 60)
}

fn curl_base(s: Shape) -> Shape {
  Filled(s, Rgb(28, 30, 42))
}

fn curl_light(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(225, 155, 107)), 59)
}

fn curl_dark(s: Shape) -> Shape {
  Colored(s, Rgb(20, 29, 42))
}

fn bone_glow(s: Shape) -> Shape {
  Glow(Colored(s, Rgb(255, 173, 85)), 24)
}

fn bone_dark(s: Shape) -> Shape {
  Colored(s, Rgb(30, 40, 65))
}

fn bone_main(s: Shape) -> Shape {
  Colored(s, Rgb(230, 166, 100))
}

fn bone_light(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(255, 236, 180)), 72)
}

fn feather_root(s: Shape) -> Shape {
  Filled(s, Rgb(21, 38, 61))
}

fn feather_vane(s: Shape, i: Int) -> Shape {
  let color = case i % 5 {
    0 -> Rgb(22, 91, 118)
    1 -> Rgb(39, 133, 150)
    2 -> Rgb(72, 166, 160)
    3 -> Rgb(196, 127, 76)
    _ -> Rgb(38, 77, 111)
  }
  Faded(Filled(s, color), 84)
}

fn feather_tip(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(255, 178, 85)), 33)
}

fn feather_ink(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(8, 28, 49)), 83)
}

fn feather_shaft(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(245, 226, 170)), 64)
}

fn covert_fill(s: Shape, i: Int) -> Shape {
  let color = case i % 4 {
    0 -> Rgb(241, 179, 107)
    1 -> Rgb(120, 180, 165)
    2 -> Rgb(36, 79, 100)
    _ -> Rgb(241, 213, 149)
  }
  Faded(Filled(s, color), 85)
}

fn covert_ink(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(31, 43, 60)), 67)
}

fn rib(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(255, 224, 160)), 42)
}

fn loose_fill(s: Shape, i: Int) -> Shape {
  let color = case i % 4 {
    0 -> Rgb(255, 217, 142)
    1 -> Rgb(79, 178, 175)
    2 -> Rgb(212, 108, 72)
    _ -> Rgb(176, 209, 194)
  }
  Faded(Filled(s, color), 93)
}

fn loose_ink(s: Shape) -> Shape {
  Colored(s, Rgb(29, 42, 63))
}

fn loose_shaft(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(255, 241, 202)), 66)
}

// \u2500\u2500 Motion and geometry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn along(a: Point, b: Point, k: Int, n: Int) -> Point {
  Point(a.x + { b.x - a.x } * k / n, a.y + { b.y - a.y } * k / n)
}

// The whole figure heaves and rolls as one, while each limb flails on its
// own beat around the joint where it meets the body.
fn falling(s: Shape) -> Shape {
  Bounce(Sway(s, Point(0, 20), 4, 46), 19, 27)
}

fn flail(s: Shape, joint: Point, degrees: Int, period: Int) -> Shape {
  Bounce(Sway(s, joint, degrees, period), 19, 27)
}

fn raised_arm(s: Shape) -> Shape {
  flail(s, Point(108, -29), 9, 22)
}

fn hanging_arm(s: Shape) -> Shape {
  flail(s, Point(82, 109), 11, 26)
}

fn kicked_leg(s: Shape) -> Shape {
  flail(s, Point(-100, -49), 6, 31)
}

fn trailing_leg(s: Shape) -> Shape {
  flail(s, Point(-120, 49), 6, 35)
}

// Each wing beats as one, while every feather flutters on its own tempo.
fn wing_motion(s: Shape, side: Int, i: Int) -> Shape {
  let speed = case side == -1 {
    True -> 18
    False -> 23
  }
  Bounce(
    Sway(s, shoulder(side), 7 + i % 3, speed),
    4 + i % 3 * 2,
    13 + i % 5 * 3,
  )
}

// \u2500\u2500 Two huge wings rising in a U behind him \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Each wing is rooted in a shoulder blade. The left one breaks out above
// his back beside the raised arm and sweeps up behind the bent leg; the
// right one breaks out beside his neck and climbs past his head. The right
// wing is ragged: missing feathers.

fn shoulder(side: Int) -> Point {
  case side == -1 {
    True -> Point(92, -46)
    False -> Point(104, 80)
  }
}

fn elbow(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-130 - spread, -175)
    False -> Point(345 + spread, 125)
  }
}

fn wingtip(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-330 - spread, -425)
    False -> Point(370 + spread, -250)
  }
}

fn wing(side: Int, spread: Int) -> List(Path) {
  let a = shoulder(side)
  let b = elbow(side, spread)
  let c = wingtip(side, spread)
  list.flatten([
    wing_bone(a, b, c, side),
    primary_feathers(0, a, b, c, side),
    covert_feathers(0, a, b, side),
    wing_ribs(0, a, b, c, side),
  ])
}

fn wing_bone(a: Point, b: Point, c: Point, side: Int) -> List(Path) {
  let m = fn(s: Shape) { wing_motion(s, side, 0) }
  [
    Path(m(bone_glow(Curve(a, b, c))), 12, 32, 22),
    Path(m(bone_dark(Curve(a, b, c))), 13, 36, 24),
    Path(m(bone_main(Curve(a, b, c))), 14, 35, 7),
    Path(m(bone_light(Curve(a, b, c))), 15, 35, 2),
  ]
}

// Main flight feathers: layered dark roots, toned vanes, bright shafts.
fn primary_feathers(i: Int, a: Point, b: Point, c: Point, side: Int) -> List(Path) {
  case i == 24 {
    True -> []
    False -> {
      let remaining = primary_feathers(i + 1, a, b, c, side)
      case side == 1 && { i == 13 || i == 18 || i == 22 } {
        True -> remaining
        False -> {
          let base = case i < 12 {
            True -> along(a, b, i, 12)
            False -> along(b, c, i - 12, 12)
          }
          let angle = case side == -1 {
            True -> 160 + i * 80 / 23
            False -> 346 - i * 71 / 23
          }
          let length = 90 + i * { 24 - i } / 3 + i % 5 * 9
          let end = Point(base.x + cos(angle, length), base.y + sin(angle, length))
          let mid = along(base, end, 2, 5)
          let width = 9 + i % 4 * 3
          let feather = Leaf(base, end, width)
          let end_piece = Leaf(mid, end, width * 3 / 4)
          let t = 17 + i * 2
          list.append([
            Path(wing_motion(feather_root(feather), side, i), t, t + 5, 0),
            Path(wing_motion(feather_vane(feather, i), side, i), t, t + 6, 0),
            Path(wing_motion(feather_tip(end_piece), side, i), t + 1, t + 6, 0),
            Path(wing_motion(feather_ink(feather), side, i), t + 1, t + 6, 2),
            Path(wing_motion(feather_shaft(Line(base, end)), side, i), t + 2, t + 8, 2),
          ], remaining)
        }
      }
    }
  }
}

// Short overlapping coverts make the wings look feathered rather than like fans.
fn covert_feathers(i: Int, a: Point, b: Point, side: Int) -> List(Path) {
  case i == 25 {
    True -> []
    False -> {
      let base = along(a, b, i, 27)
      let angle = case side == -1 {
        True -> 172 + i * 56 / 24
        False -> 334 - i * 51 / 24
      }
      let size = 35 + i % 5 * 5
      let tip = Point(base.x + cos(angle, size), base.y + sin(angle, size))
      let feather = Leaf(base, tip, 9 + i % 3 * 2)
      [
        Path(wing_motion(covert_fill(feather, i), side, i + 5), 31 + i, 38 + i, 0),
        Path(wing_motion(covert_ink(feather), side, i + 5), 32 + i, 39 + i, 1),
        ..covert_feathers(i + 1, a, b, side)
      ]
    }
  }
}

fn wing_ribs(i: Int, a: Point, b: Point, c: Point, side: Int) -> List(Path) {
  case i == 12 {
    True -> []
    False -> {
      let root = case i < 6 {
        True -> along(a, b, i, 6)
        False -> along(b, c, i - 6, 6)
      }
      let angle = case side == -1 {
        True -> 182 + i * 5
        False -> 340 - i * 5
      }
      let tip = Point(root.x + cos(angle, 73), root.y + sin(angle, 73))
      [
        Path(wing_motion(rib(Curve(root, along(root, tip, 2, 3), tip)), side, i), 39 + i * 2, 47 + i * 2, 2),
        ..wing_ribs(i + 1, a, b, c, side)
      ]
    }
  }
}

// \u2500\u2500 The figure \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// A bare, muscular man tumbling backward with his back to us, built the way a
// figure drawer builds one: each part (torso, neck, head, thighs, shins,
// feet, arms, hands and every finger) is a smooth outline. All the outlines
// go down first and the body tone over them, so the parts melt into one
// silhouette with one outline around it. Then come the shadows on the side
// away from the sun, the light on the side toward it, the creases where one
// form passes in front of another, hatching, anatomy, and his curls.

fn figure() -> List(Path) {
  list.flatten([
    body(glow_around),
    body(outline),
    body(body_tone),
    form_shadows(),
    form_lights(),
    hatching_strokes(),
    creases(),
    back_anatomy(),
    limb_anatomy(),
    hands_and_feet(),
    wing_roots(),
    head_and_neck(),
    hair(),
  ])
}

fn glow_around(s: Shape, move, t: Int, w: Int) -> Path {
  Path(move(halo(s)), t - 2, t + 4, w + 10)
}

fn outline(s: Shape, move, t: Int, w: Int) -> Path {
  Path(move(ink(s)), t, t + 6, w)
}

// The body tone is filled in without a stroke, whatever the outline width w.
fn body_tone(s: Shape, move, t: Int, w: Int) -> Path {
  Path(move(skin(s)), t, t + 6, 0)
}

fn dark(move, t: Int, points: List(Point)) -> Path {
  Path(move(shade(Polygon(points))), t, t + 6, 0)
}

fn lit(move, t: Int, points: List(Point)) -> Path {
  Path(move(shine(Polygon(points))), t, t + 6, 0)
}

fn mark(move, t: Int, w: Int, a: Point, c: Point, b: Point) -> Path {
  Path(move(line(Curve(a, c, b))), t, t + 3, w)
}

fn glint(move, t: Int, w: Int, a: Point, c: Point, b: Point) -> Path {
  Path(move(highlight(Curve(a, c, b))), t, t + 3, w)
}

fn hatch(move, t: Int, a: Point, b: Point) -> Path {
  Path(move(hatching(Line(a, b))), t, t + 2, 1)
}

fn body(paint) -> List(Path) {
  [
    paint(torso(), falling, 4, 9),
    paint(neck(), falling, 6, 9),
    paint(head(), falling, 8, 8),
    paint(kicked_thigh(), kicked_leg, 6, 9),
    paint(kicked_shin(), kicked_leg, 8, 9),
    paint(trailing_thigh(), trailing_leg, 6, 9),
    paint(trailing_shin(), trailing_leg, 8, 9),
    paint(raised_upper_arm(), raised_arm, 6, 9),
    paint(raised_forearm(), raised_arm, 8, 9),
    paint(hanging_upper_arm(), hanging_arm, 6, 9),
    paint(hanging_forearm(), hanging_arm, 8, 9),
    paint(kicked_foot(), kicked_leg, 10, 7),
    paint(trailing_foot(), trailing_leg, 10, 7),
    paint(raised_palm(), raised_arm, 10, 7),
    paint(hanging_palm(), hanging_arm, 10, 7),
    paint(raised_index(), raised_arm, 11, 5),
    paint(raised_middle(), raised_arm, 11, 5),
    paint(raised_ring(), raised_arm, 11, 5),
    paint(raised_little(), raised_arm, 11, 5),
    paint(raised_thumb(), raised_arm, 11, 5),
    paint(hanging_index(), hanging_arm, 11, 5),
    paint(hanging_middle(), hanging_arm, 11, 5),
    paint(hanging_ring(), hanging_arm, 11, 5),
    paint(hanging_little(), hanging_arm, 11, 5),
    paint(hanging_thumb(), hanging_arm, 11, 5),
    paint(kicked_big_toe(), kicked_leg, 11, 5),
    paint(kicked_second_toe(), kicked_leg, 11, 5),
    paint(kicked_third_toe(), kicked_leg, 11, 5),
    paint(kicked_fourth_toe(), kicked_leg, 11, 5),
    paint(kicked_little_toe(), kicked_leg, 11, 5),
    paint(trailing_big_toe(), trailing_leg, 11, 5),
    paint(trailing_second_toe(), trailing_leg, 11, 5),
    paint(trailing_third_toe(), trailing_leg, 11, 5),
    paint(trailing_fourth_toe(), trailing_leg, 11, 5),
    paint(trailing_little_toe(), trailing_leg, 11, 5),
  ]
}

fn torso() -> Shape {
  Polygon([
    Point(108, -74), Point(97, -78), Point(91, -79), Point(81, -78), Point(64, -75),
    Point(18, -64), Point(-6, -58), Point(-29, -55), Point(-45, -54), Point(-60, -55),
    Point(-78, -58), Point(-95, -64), Point(-114, -72), Point(-128, -76), Point(-140, -76),
    Point(-152, -73), Point(-164, -66), Point(-174, -56), Point(-187, -38),
    Point(-193, -24), Point(-195, -16), Point(-194, -9), Point(-192, -1), Point(-188, 8),
    Point(-189, 11), Point(-194, 20), Point(-197, 33), Point(-197, 45), Point(-193, 56),
    Point(-186, 68), Point(-176, 78), Point(-164, 86), Point(-149, 92), Point(-138, 94),
    Point(-122, 94), Point(-99, 91), Point(-57, 83), Point(-46, 82), Point(-34, 84),
    Point(1, 92), Point(42, 107), Point(60, 115), Point(81, 128), Point(94, 133),
    Point(109, 136), Point(119, 134), Point(125, 131), Point(133, 122), Point(140, 111),
    Point(145, 99), Point(149, 87), Point(152, 70), Point(153, 59), Point(153, 43),
    Point(151, 28), Point(147, 10), Point(131, -41), Point(124, -58), Point(120, -64),
    Point(116, -69),
  ])
}

fn neck() -> Shape {
  Polygon([
    Point(191, -18), Point(173, -15), Point(166, -15), Point(160, -17), Point(153, -22),
    Point(142, -35), Point(131, -50), Point(121, -66), Point(119, -68), Point(116, -68),
    Point(109, -61), Point(106, -55), Point(104, -46), Point(103, -35), Point(103, -8),
    Point(104, 6), Point(110, 50), Point(112, 65), Point(112, 104), Point(113, 114),
    Point(115, 122), Point(118, 128), Point(121, 132), Point(125, 133), Point(128, 132),
    Point(136, 124), Point(142, 112), Point(157, 78), Point(167, 62), Point(182, 48),
    Point(212, 29), Point(214, 26), Point(216, 17), Point(215, 10), Point(212, -2),
    Point(208, -7), Point(200, -16), Point(195, -17),
  ])
}

fn head() -> Shape {
  Polygon([
    Point(273, -30), Point(268, -39), Point(261, -45), Point(254, -49), Point(241, -52),
    Point(231, -52), Point(218, -49), Point(207, -43), Point(199, -36), Point(194, -31),
    Point(192, -25), Point(190, -14), Point(191, -1), Point(198, 27), Point(198, 34),
    Point(197, 41), Point(199, 47), Point(203, 49), Point(213, 49), Point(225, 47),
    Point(234, 44), Point(254, 33), Point(262, 28), Point(268, 21), Point(275, 11),
    Point(279, -2), Point(278, -16),
  ])
}

fn kicked_thigh() -> Shape {
  Polygon([
    Point(-79, -18), Point(-61, -39), Point(-54, -51), Point(-46, -65), Point(-27, -114),
    Point(0, -187), Point(2, -198), Point(1, -208), Point(-5, -216), Point(-13, -221),
    Point(-18, -222), Point(-25, -221), Point(-32, -218), Point(-37, -213),
    Point(-74, -158), Point(-115, -101), Point(-130, -76), Point(-135, -63),
    Point(-141, -31), Point(-142, -24), Point(-141, -18), Point(-139, -12),
    Point(-135, -6), Point(-131, -2), Point(-125, 2), Point(-119, 4), Point(-109, 4),
    Point(-103, 3), Point(-94, -2),
  ])
}

fn kicked_shin() -> Shape {
  Polygon([
    Point(-10, -220), Point(-42, -246), Point(-91, -281), Point(-114, -299),
    Point(-118, -301), Point(-122, -301), Point(-127, -299), Point(-130, -296),
    Point(-131, -293), Point(-131, -289), Point(-129, -283), Point(-105, -257),
    Point(-74, -210), Point(-66, -202), Point(-57, -195), Point(-44, -188),
    Point(-27, -180), Point(-18, -179), Point(-11, -181), Point(-7, -183), Point(-2, -189),
    Point(0, -193), Point(1, -200), Point(-1, -209),
  ])
}

fn trailing_thigh() -> Shape {
  Polygon([
    Point(-106, 12), Point(-129, 10), Point(-145, 12), Point(-162, 14), Point(-200, 23),
    Point(-306, 49), Point(-313, 52), Point(-319, 60), Point(-322, 69), Point(-321, 76),
    Point(-318, 83), Point(-313, 88), Point(-306, 91), Point(-298, 93), Point(-270, 93),
    Point(-192, 96), Point(-162, 96), Point(-135, 93), Point(-112, 87), Point(-82, 77),
    Point(-72, 72), Point(-67, 67), Point(-63, 61), Point(-60, 55), Point(-59, 47),
    Point(-59, 40), Point(-62, 33), Point(-68, 24), Point(-73, 20), Point(-83, 15),
  ])
}

fn trailing_shin() -> Shape {
  Polygon([
    Point(-321, 65), Point(-340, 103), Point(-363, 160), Point(-375, 187),
    Point(-376, 190), Point(-375, 195), Point(-372, 199), Point(-369, 201),
    Point(-365, 201), Point(-361, 201), Point(-356, 197), Point(-336, 167),
    Point(-298, 125), Point(-291, 115), Point(-287, 105), Point(-283, 91), Point(-279, 72),
    Point(-280, 63), Point(-284, 57), Point(-287, 53), Point(-293, 50), Point(-298, 49),
    Point(-305, 50), Point(-311, 53), Point(-315, 56),
  ])
}

fn raised_upper_arm() -> Shape {
  Polygon([
    Point(140, -19), Point(140, -36), Point(138, -50), Point(135, -59), Point(122, -91),
    Point(107, -143), Point(103, -148), Point(96, -153), Point(90, -154), Point(82, -152),
    Point(75, -147), Point(72, -141), Point(72, -137), Point(70, -82), Point(78, -26),
    Point(82, -10), Point(87, 6), Point(91, 11), Point(95, 16), Point(103, 20),
    Point(112, 22), Point(118, 21), Point(124, 19), Point(131, 14), Point(137, 6),
    Point(139, -3),
  ])
}

fn raised_forearm() -> Shape {
  Polygon([
    Point(107, -148), Point(104, -160), Point(100, -170), Point(74, -217), Point(64, -237),
    Point(62, -240), Point(58, -242), Point(54, -242), Point(50, -241), Point(46, -237),
    Point(45, -230), Point(52, -204), Point(64, -151), Point(68, -138), Point(75, -126),
    Point(80, -120), Point(87, -117), Point(93, -117), Point(101, -120), Point(106, -126),
    Point(108, -132), Point(108, -136),
  ])
}

fn hanging_upper_arm() -> Shape {
  Polygon([
    Point(48, 107), Point(58, 130), Point(86, 178), Point(124, 229), Point(130, 235),
    Point(135, 238), Point(144, 238), Point(151, 235), Point(155, 230), Point(158, 225),
    Point(158, 218), Point(157, 212), Point(136, 158), Point(124, 120), Point(120, 109),
    Point(112, 96), Point(94, 71), Point(84, 62), Point(76, 58), Point(70, 57),
    Point(64, 58), Point(58, 60), Point(53, 63), Point(48, 67), Point(45, 72),
    Point(42, 81), Point(42, 90),
  ])
}

fn hanging_forearm() -> Shape {
  Polygon([
    Point(130, 237), Point(143, 254), Point(187, 299), Point(208, 322), Point(211, 324),
    Point(216, 325), Point(220, 324), Point(223, 322), Point(225, 316), Point(224, 310),
    Point(210, 289), Point(178, 234), Point(167, 220), Point(160, 213), Point(151, 205),
    Point(145, 202), Point(137, 202), Point(130, 205), Point(124, 211), Point(122, 219),
    Point(124, 227),
  ])
}

fn kicked_foot() -> Shape {
  Polygon([
    Point(-111, -299), Point(-132, -312), Point(-161, -325), Point(-168, -325),
    Point(-172, -322), Point(-174, -318), Point(-174, -307), Point(-172, -299),
    Point(-169, -293), Point(-162, -288), Point(-146, -281), Point(-132, -268),
    Point(-127, -265), Point(-120, -264), Point(-116, -266), Point(-111, -270),
    Point(-107, -276), Point(-105, -282), Point(-105, -288), Point(-107, -295),
  ])
}

fn trailing_foot() -> Shape {
  Polygon([
    Point(-369, 178), Point(-390, 192), Point(-414, 213), Point(-417, 218),
    Point(-416, 224), Point(-413, 227), Point(-403, 232), Point(-395, 233),
    Point(-389, 233), Point(-381, 229), Point(-368, 217), Point(-351, 210),
    Point(-345, 206), Point(-342, 201), Point(-341, 197), Point(-343, 190),
    Point(-347, 185), Point(-353, 179), Point(-357, 177), Point(-364, 176),
  ])
}

fn raised_palm() -> Shape {
  Polygon([
    Point(43, -230), Point(34, -249), Point(33, -256), Point(33, -262), Point(35, -266),
    Point(42, -271), Point(47, -273), Point(54, -273), Point(59, -269), Point(63, -260),
    Point(66, -249), Point(66, -237), Point(62, -234), Point(53, -229), Point(45, -229),
  ])
}

fn hanging_palm() -> Shape {
  Polygon([
    Point(205, 323), Point(213, 341), Point(218, 348), Point(222, 352), Point(227, 353),
    Point(235, 351), Point(240, 349), Point(244, 343), Point(245, 337), Point(241, 328),
    Point(235, 319), Point(226, 311), Point(221, 311), Point(212, 315), Point(208, 317),
    Point(206, 320),
  ])
}

fn raised_index() -> Shape {
  Polygon([
    Point(58, -268), Point(54, -303), Point(53, -305), Point(50, -306), Point(48, -305),
    Point(47, -301), Point(48, -284), Point(49, -266), Point(51, -263), Point(54, -262),
    Point(57, -264),
  ])
}

fn raised_middle() -> Shape {
  Polygon([
    Point(51, -270), Point(44, -298), Point(43, -307), Point(42, -309), Point(39, -310),
    Point(38, -309), Point(37, -307), Point(37, -301), Point(38, -285), Point(42, -268),
    Point(43, -264), Point(46, -263), Point(48, -263), Point(51, -265),
  ])
}

fn raised_ring() -> Shape {
  Polygon([
    Point(45, -267), Point(37, -289), Point(34, -302), Point(32, -303), Point(30, -303),
    Point(29, -302), Point(28, -301), Point(29, -291), Point(31, -280), Point(37, -264),
    Point(39, -261), Point(41, -260), Point(43, -261), Point(45, -263),
  ])
}

fn raised_little() -> Shape {
  Polygon([
    Point(40, -261), Point(32, -276), Point(29, -286), Point(27, -288), Point(25, -287),
    Point(23, -285), Point(25, -277), Point(27, -269), Point(33, -258), Point(36, -255),
    Point(39, -255), Point(40, -256), Point(41, -258),
  ])
}

fn raised_thumb() -> Shape {
  Polygon([
    Point(71, -241), Point(75, -249), Point(77, -256), Point(80, -269), Point(80, -280),
    Point(79, -281), Point(77, -283), Point(74, -283), Point(72, -280), Point(68, -265),
    Point(58, -240), Point(58, -237), Point(60, -234), Point(65, -234), Point(67, -235),
  ])
}

fn hanging_index() -> Shape {
  Polygon([
    Point(237, 345), Point(256, 360), Point(267, 371), Point(270, 371), Point(272, 370),
    Point(273, 369), Point(272, 366), Point(265, 357), Point(256, 349), Point(242, 338),
    Point(239, 336), Point(235, 337), Point(234, 339), Point(234, 342),
  ])
}

fn hanging_middle() -> Shape {
  Polygon([
    Point(232, 349), Point(252, 375), Point(259, 385), Point(261, 386), Point(263, 385),
    Point(265, 384), Point(265, 382), Point(263, 379), Point(255, 365), Point(240, 344),
    Point(236, 341), Point(234, 341), Point(232, 342), Point(230, 346),
  ])
}

fn hanging_ring() -> Shape {
  Polygon([
    Point(226, 350), Point(243, 388), Point(245, 390), Point(248, 390), Point(249, 388),
    Point(249, 386), Point(234, 345), Point(231, 343), Point(228, 343), Point(226, 346),
  ])
}

fn hanging_little() -> Shape {
  Polygon([
    Point(220, 347), Point(222, 366), Point(224, 380), Point(225, 381), Point(227, 382),
    Point(228, 381), Point(229, 379), Point(227, 345), Point(226, 343), Point(223, 342),
    Point(221, 344),
  ])
}

fn hanging_thumb() -> Shape {
  Polygon([
    Point(230, 320), Point(251, 323), Point(265, 328), Point(269, 327), Point(270, 324),
    Point(270, 321), Point(268, 320), Point(254, 313), Point(247, 311), Point(240, 309),
    Point(231, 308), Point(224, 308), Point(222, 310), Point(220, 313), Point(221, 316),
    Point(222, 318), Point(225, 319),
  ])
}

fn kicked_big_toe() -> Shape {
  Polygon([
    Point(-157, -325), Point(-166, -331), Point(-179, -337), Point(-183, -337),
    Point(-186, -334), Point(-186, -330), Point(-184, -328), Point(-165, -314),
    Point(-161, -312), Point(-158, -313), Point(-157, -313), Point(-155, -314),
    Point(-154, -317), Point(-154, -321),
  ])
}

fn kicked_second_toe() -> Shape {
  Polygon([
    Point(-163, -317), Point(-172, -321), Point(-181, -324), Point(-184, -323),
    Point(-186, -321), Point(-186, -319), Point(-184, -317), Point(-167, -309),
    Point(-164, -308), Point(-161, -309), Point(-159, -312), Point(-160, -316),
  ])
}

fn kicked_third_toe() -> Shape {
  Polygon([
    Point(-164, -311), Point(-173, -313), Point(-181, -314), Point(-184, -314),
    Point(-185, -311), Point(-184, -309), Point(-183, -308), Point(-166, -303),
    Point(-164, -302), Point(-161, -304), Point(-160, -307), Point(-161, -310),
  ])
}

fn kicked_fourth_toe() -> Shape {
  Polygon([
    Point(-164, -305), Point(-172, -306), Point(-179, -306), Point(-182, -305),
    Point(-182, -302), Point(-181, -300), Point(-180, -299), Point(-162, -297),
    Point(-160, -299), Point(-159, -302), Point(-161, -304),
  ])
}

fn kicked_little_toe() -> Shape {
  Polygon([
    Point(-162, -298), Point(-170, -298), Point(-176, -297), Point(-178, -296),
    Point(-178, -294), Point(-177, -292), Point(-175, -291), Point(-160, -291),
    Point(-158, -293), Point(-158, -296), Point(-160, -298),
  ])
}

fn trailing_big_toe() -> Shape {
  Polygon([
    Point(-412, 209), Point(-422, 215), Point(-433, 223), Point(-434, 227),
    Point(-433, 231), Point(-431, 232), Point(-427, 232), Point(-406, 220),
    Point(-403, 218), Point(-401, 215), Point(-401, 213), Point(-402, 212),
    Point(-404, 209), Point(-407, 208),
  ])
}

fn trailing_second_toe() -> Shape {
  Polygon([
    Point(-408, 217), Point(-415, 224), Point(-422, 231), Point(-422, 234),
    Point(-421, 237), Point(-418, 237), Point(-416, 236), Point(-402, 224),
    Point(-400, 222), Point(-400, 219), Point(-402, 216), Point(-405, 216),
  ])
}

fn trailing_third_toe() -> Shape {
  Polygon([
    Point(-402, 221), Point(-408, 228), Point(-413, 235), Point(-413, 238),
    Point(-412, 240), Point(-410, 240), Point(-407, 239), Point(-396, 227),
    Point(-394, 224), Point(-395, 221), Point(-397, 219), Point(-400, 219),
  ])
}

fn trailing_fourth_toe() -> Shape {
  Polygon([
    Point(-397, 223), Point(-401, 230), Point(-404, 237), Point(-404, 240),
    Point(-402, 241), Point(-401, 241), Point(-399, 240), Point(-389, 226),
    Point(-390, 223), Point(-392, 221), Point(-395, 221),
  ])
}

fn trailing_little_toe() -> Shape {
  Polygon([
    Point(-391, 225), Point(-394, 232), Point(-395, 238), Point(-395, 240),
    Point(-393, 241), Point(-391, 241), Point(-390, 240), Point(-383, 226),
    Point(-384, 223), Point(-387, 222), Point(-389, 223),
  ])
}

// Shadow on every form, on the side turned away from the sun.
fn form_shadows() -> List(Path) {
  [
    dark(falling, 14, [
      Point(-166, -64), Point(-172, -58), Point(-177, -52), Point(-184, -42),
      Point(-188, -34), Point(-192, -28), Point(-194, -22), Point(-194, -18),
      Point(-195, -14), Point(-194, -11), Point(-194, -7), Point(-192, -3), Point(-191, 1),
      Point(-189, 6), Point(-188, 9), Point(-189, 10), Point(-190, 13), Point(-193, 18),
      Point(-195, 23), Point(-196, 30), Point(-197, 36), Point(-197, 42), Point(-196, 42),
      Point(-195, 36), Point(-193, 31), Point(-189, 25), Point(-185, 21), Point(-180, 18),
      Point(-175, 13), Point(-169, 6), Point(-166, -1), Point(-165, -7), Point(-166, -11),
      Point(-168, -13), Point(-171, -14), Point(-174, -15), Point(-178, -16),
      Point(-181, -19), Point(-183, -24), Point(-183, -32), Point(-181, -41),
      Point(-176, -50), Point(-171, -58), Point(-166, -63),
    ]),
    dark(falling, 14, [
      Point(-160, 88), Point(-153, 90), Point(-146, 92), Point(-141, 94), Point(-134, 94),
      Point(-126, 94), Point(-116, 93), Point(-105, 92), Point(-88, 89), Point(-68, 85),
      Point(-54, 83), Point(-49, 82), Point(-43, 82), Point(-37, 84), Point(-25, 86),
      Point(-8, 90), Point(11, 96), Point(32, 103), Point(46, 109), Point(56, 113),
      Point(65, 118), Point(76, 125), Point(77, 123), Point(69, 112), Point(61, 101),
      Point(55, 88), Point(42, 75), Point(22, 63), Point(2, 55), Point(-17, 51),
      Point(-31, 49), Point(-40, 49), Point(-49, 50), Point(-58, 52), Point(-73, 55),
      Point(-94, 59), Point(-109, 61), Point(-119, 62), Point(-127, 64), Point(-133, 67),
      Point(-139, 73), Point(-144, 80), Point(-151, 84), Point(-160, 85),
    ]),
    dark(falling, 16, [
      Point(122, 132), Point(124, 133), Point(126, 133), Point(127, 132), Point(130, 130),
      Point(134, 126), Point(138, 121), Point(140, 115), Point(146, 104), Point(153, 86),
      Point(160, 74), Point(164, 66), Point(171, 58), Point(178, 52), Point(190, 43),
      Point(204, 34), Point(212, 28), Point(214, 27), Point(213, 26), Point(212, 27),
      Point(203, 31), Point(187, 39), Point(175, 47), Point(167, 55), Point(161, 63),
      Point(157, 73), Point(152, 86), Point(145, 103), Point(139, 114), Point(135, 119),
      Point(131, 123), Point(127, 127), Point(125, 129), Point(125, 130), Point(124, 131),
    ]),
    dark(kicked_leg, 18, [
      Point(-130, -288), Point(-130, -284), Point(-123, -276), Point(-111, -264),
      Point(-97, -245), Point(-82, -222), Point(-72, -208), Point(-68, -204),
      Point(-64, -200), Point(-59, -197), Point(-54, -193), Point(-47, -190),
      Point(-40, -186), Point(-31, -182), Point(-31, -183), Point(-38, -189),
      Point(-44, -195), Point(-48, -202), Point(-52, -207), Point(-54, -212),
      Point(-57, -215), Point(-60, -218), Point(-70, -230), Point(-87, -253),
      Point(-103, -269), Point(-119, -280), Point(-127, -286),
    ]),
    dark(trailing_leg, 16, [
      Point(-308, 50), Point(-311, 51), Point(-314, 54), Point(-318, 58), Point(-320, 62),
      Point(-321, 67), Point(-322, 71), Point(-321, 74), Point(-321, 71), Point(-320, 67),
      Point(-318, 63), Point(-316, 59), Point(-314, 55), Point(-311, 52),
    ]),
    dark(trailing_leg, 16, [
      Point(-304, 92), Point(-300, 92), Point(-291, 93), Point(-277, 93), Point(-250, 94),
      Point(-212, 95), Point(-184, 96), Point(-170, 96), Point(-155, 95), Point(-142, 94),
      Point(-129, 92), Point(-118, 88), Point(-118, 87), Point(-130, 88), Point(-143, 86),
      Point(-156, 82), Point(-170, 79), Point(-184, 76), Point(-211, 75), Point(-250, 76),
      Point(-277, 79), Point(-291, 85), Point(-300, 88), Point(-304, 90),
    ]),
    dark(trailing_leg, 18, [
      Point(-360, 200), Point(-357, 198), Point(-351, 190), Point(-341, 174),
      Point(-326, 156), Point(-308, 136), Point(-296, 122), Point(-293, 118),
      Point(-290, 112), Point(-288, 108), Point(-288, 107), Point(-291, 112),
      Point(-295, 116), Point(-299, 120), Point(-310, 133), Point(-329, 154),
      Point(-343, 173), Point(-352, 188), Point(-358, 198),
    ]),
    dark(trailing_leg, 18, [
      Point(-316, 58), Point(-320, 63), Point(-326, 74), Point(-335, 94), Point(-346, 117),
      Point(-357, 146), Point(-366, 167), Point(-372, 180), Point(-375, 188),
      Point(-376, 189), Point(-375, 188), Point(-371, 181), Point(-364, 168),
      Point(-354, 147), Point(-343, 119), Point(-332, 95), Point(-324, 76),
      Point(-318, 63),
    ]),
    dark(raised_arm, 16, [
      Point(72, -140), Point(72, -138), Point(72, -123), Point(70, -96), Point(72, -68),
      Point(76, -40), Point(79, -22), Point(81, -14), Point(82, -14), Point(81, -22),
      Point(80, -40), Point(77, -68), Point(76, -96), Point(75, -123), Point(74, -138),
      Point(73, -140),
    ]),
    dark(raised_arm, 18, [
      Point(46, -235), Point(45, -232), Point(47, -224), Point(50, -210), Point(55, -191),
      Point(61, -164), Point(65, -148), Point(67, -141), Point(70, -135), Point(73, -129),
      Point(76, -124), Point(79, -122), Point(78, -126), Point(77, -131), Point(76, -138),
      Point(75, -144), Point(74, -150), Point(70, -166), Point(63, -193), Point(56, -212),
      Point(50, -224), Point(47, -232),
    ]),
    dark(hanging_arm, 16, [
      Point(44, 94), Point(46, 103), Point(50, 113), Point(56, 124), Point(65, 142),
      Point(79, 166), Point(96, 191), Point(114, 216), Point(126, 230), Point(128, 234),
      Point(131, 236), Point(134, 237), Point(134, 236), Point(133, 233), Point(133, 229),
      Point(134, 223), Point(126, 208), Point(109, 181), Point(93, 157), Point(77, 135),
      Point(65, 119), Point(56, 110), Point(49, 102),
    ]),
    dark(hanging_arm, 18, [
      Point(122, 221), Point(124, 225), Point(126, 230), Point(128, 234), Point(133, 241),
      Point(140, 250), Point(154, 265), Point(176, 288), Point(192, 305), Point(203, 316),
      Point(209, 322), Point(210, 324), Point(211, 323), Point(210, 321), Point(206, 313),
      Point(198, 299), Point(183, 281), Point(163, 257), Point(149, 242), Point(141, 235),
      Point(135, 230), Point(129, 227), Point(126, 224), Point(123, 221),
    ]),
    dark(kicked_leg, 20, [
      Point(-171, -298), Point(-170, -294), Point(-167, -292), Point(-164, -289),
      Point(-158, -286), Point(-150, -283), Point(-142, -278), Point(-136, -271),
      Point(-131, -267), Point(-128, -266), Point(-125, -265), Point(-122, -264),
      Point(-119, -264), Point(-117, -266), Point(-115, -267), Point(-112, -269),
      Point(-110, -272), Point(-108, -274), Point(-108, -275), Point(-111, -272),
      Point(-113, -270), Point(-116, -269), Point(-119, -269), Point(-120, -270),
      Point(-122, -271), Point(-124, -271), Point(-125, -272), Point(-127, -273),
      Point(-131, -277), Point(-138, -284), Point(-146, -289), Point(-155, -292),
      Point(-161, -293), Point(-166, -294), Point(-169, -295),
    ]),
    dark(trailing_leg, 20, [
      Point(-394, 233), Point(-390, 233), Point(-387, 232), Point(-383, 230),
      Point(-378, 226), Point(-371, 220), Point(-364, 215), Point(-355, 212),
      Point(-350, 209), Point(-346, 207), Point(-344, 205), Point(-343, 202),
      Point(-346, 203), Point(-348, 205), Point(-351, 206), Point(-357, 208),
      Point(-366, 212), Point(-373, 217), Point(-380, 223), Point(-384, 228),
      Point(-388, 231), Point(-391, 232),
    ]),
    dark(raised_arm, 20, [
      Point(60, -233), Point(55, -230), Point(51, -229), Point(47, -229), Point(44, -229),
      Point(44, -230), Point(41, -235), Point(36, -244), Point(34, -251), Point(33, -254),
      Point(33, -258), Point(33, -260), Point(34, -263), Point(34, -265), Point(35, -265),
      Point(34, -263), Point(35, -260), Point(36, -258), Point(37, -255), Point(38, -252),
      Point(41, -246), Point(46, -237), Point(47, -233), Point(46, -233), Point(47, -233),
      Point(51, -231), Point(55, -231),
    ]),
    dark(hanging_arm, 20, [
      Point(208, 318), Point(206, 319), Point(206, 321), Point(205, 322), Point(207, 328),
      Point(211, 336), Point(214, 343), Point(217, 346), Point(219, 349), Point(221, 351),
      Point(223, 352), Point(226, 353), Point(226, 352), Point(224, 351), Point(222, 349),
      Point(222, 347), Point(221, 343), Point(219, 340), Point(216, 334), Point(211, 326),
      Point(209, 321), Point(208, 321), Point(208, 320),
    ]),
    dark(falling, 18, [
      Point(-95, -64), Point(-114, -72), Point(-128, -76), Point(-127, -80),
      Point(-111, -80), Point(-93, -68),
    ]),
    dark(falling, 18, [
      Point(-197, 33), Point(-197, 45), Point(-193, 56), Point(-186, 68), Point(-176, 78),
      Point(-164, 86), Point(-149, 92), Point(-150, 94), Point(-167, 91), Point(-181, 84),
      Point(-193, 74), Point(-200, 59), Point(-203, 46), Point(-199, 33),
    ]),
    dark(kicked_leg, 22, [
      Point(-44, -188), Point(-27, -180), Point(-18, -179), Point(-18, -175),
      Point(-30, -171), Point(-46, -184),
    ]),
    dark(trailing_leg, 22, [
      Point(-283, 91), Point(-279, 72), Point(-280, 63), Point(-284, 57), Point(-281, 55),
      Point(-272, 60), Point(-271, 73), Point(-280, 92),
    ]),
    dark(falling, 22, [
      Point(190, -14), Point(191, -1), Point(198, 27), Point(198, 34), Point(195, 34),
      Point(190, 29), Point(183, 1), Point(187, -14),
    ]),
  ]
}

// Light catching the edges turned toward the sun.
fn form_lights() -> List(Path) {
  [
    lit(falling, 16, [
      Point(89, -76), Point(84, -75), Point(77, -74), Point(69, -73), Point(53, -69),
      Point(30, -64), Point(13, -60), Point(1, -57), Point(-11, -54), Point(-23, -53),
      Point(-33, -52), Point(-41, -51), Point(-49, -51), Point(-57, -52), Point(-65, -53),
      Point(-74, -54), Point(-65, -52), Point(-57, -50), Point(-49, -48), Point(-41, -47),
      Point(-32, -47), Point(-22, -48), Point(-10, -49), Point(2, -52), Point(14, -55),
      Point(31, -60), Point(54, -66), Point(69, -70), Point(78, -73), Point(84, -74),
      Point(89, -75),
    ]),
    lit(falling, 16, [
      Point(-118, -70), Point(-125, -72), Point(-131, -73), Point(-137, -73),
      Point(-142, -72), Point(-148, -71), Point(-154, -69), Point(-159, -65),
      Point(-165, -61), Point(-169, -56), Point(-164, -60), Point(-158, -64),
      Point(-153, -66), Point(-147, -68), Point(-142, -69), Point(-137, -70),
      Point(-131, -71), Point(-125, -71),
    ]),
    lit(falling, 18, [
      Point(187, -14), Point(178, -13), Point(171, -12), Point(167, -12), Point(164, -13),
      Point(160, -14), Point(157, -16), Point(153, -18), Point(148, -23), Point(142, -30),
      Point(137, -37), Point(131, -45), Point(131, -44), Point(135, -36), Point(140, -28),
      Point(146, -21), Point(151, -16), Point(155, -13), Point(159, -11), Point(163, -10),
      Point(167, -9), Point(171, -10), Point(178, -11),
    ]),
    lit(kicked_leg, 18, [
      Point(-2, -191), Point(-1, -196), Point(-1, -200), Point(-2, -205), Point(-3, -209),
      Point(-6, -212), Point(-9, -215), Point(-12, -217), Point(-15, -218),
      Point(-17, -219), Point(-16, -218), Point(-13, -216), Point(-11, -213),
      Point(-8, -210), Point(-6, -207), Point(-4, -204), Point(-3, -200), Point(-3, -196),
      Point(-3, -191),
    ]),
    lit(kicked_leg, 20, [
      Point(-6, -210), Point(-10, -215), Point(-20, -224), Point(-36, -237),
      Point(-56, -252), Point(-81, -270), Point(-99, -283), Point(-110, -292),
      Point(-117, -297), Point(-118, -298), Point(-117, -296), Point(-111, -291),
      Point(-100, -281), Point(-82, -268), Point(-58, -250), Point(-38, -235),
      Point(-22, -222), Point(-11, -214),
    ]),
    lit(trailing_leg, 18, [
      Point(-171, 19), Point(-190, 24), Point(-226, 32), Point(-279, 45), Point(-307, 53),
      Point(-310, 54), Point(-312, 56), Point(-315, 60), Point(-312, 57), Point(-309, 55),
      Point(-306, 54), Point(-278, 48), Point(-225, 35), Point(-189, 25), Point(-171, 20),
    ]),
    lit(raised_arm, 18, [
      Point(137, -39), Point(136, -46), Point(134, -51), Point(133, -56), Point(129, -66),
      Point(122, -82), Point(115, -103), Point(108, -129), Point(107, -129),
      Point(114, -103), Point(120, -81), Point(127, -65), Point(131, -55), Point(133, -51),
      Point(134, -46), Point(136, -39),
    ]),
    lit(raised_arm, 20, [
      Point(105, -139), Point(104, -145), Point(103, -150), Point(102, -156),
      Point(100, -161), Point(98, -166), Point(91, -180), Point(78, -204), Point(69, -221),
      Point(64, -231), Point(64, -230), Point(68, -220), Point(76, -203), Point(89, -179),
      Point(97, -165), Point(99, -161), Point(100, -156), Point(102, -150),
      Point(104, -144),
    ]),
    lit(hanging_arm, 20, [
      Point(218, 306), Point(211, 296), Point(199, 277), Point(183, 249), Point(173, 232),
      Point(167, 225), Point(163, 220), Point(160, 217), Point(156, 213), Point(151, 209),
      Point(151, 210), Point(155, 214), Point(158, 218), Point(161, 222), Point(166, 227),
      Point(171, 233), Point(182, 250), Point(198, 278), Point(210, 296),
    ]),
    lit(kicked_leg, 22, [
      Point(-108, -289), Point(-109, -292), Point(-110, -294), Point(-112, -296),
      Point(-118, -300), Point(-128, -306), Point(-141, -313), Point(-155, -319),
      Point(-141, -312), Point(-129, -305), Point(-119, -299), Point(-113, -295),
      Point(-111, -294), Point(-110, -292), Point(-109, -289),
    ]),
    lit(trailing_leg, 22, [
      Point(-344, 196), Point(-345, 193), Point(-347, 190), Point(-348, 188),
      Point(-351, 186), Point(-353, 183), Point(-354, 183), Point(-351, 186),
      Point(-349, 189), Point(-347, 191), Point(-346, 193), Point(-345, 196),
    ]),
  ]
}

// Hatching laid into the deepest shadows.
fn hatching_strokes() -> List(Path) {
  [
    hatch(falling, 26, Point(-134, 92), Point(-129, 85)),
    hatch(falling, 26, Point(-125, 92), Point(-119, 84)),
    hatch(falling, 26, Point(-116, 91), Point(-109, 83)),
    hatch(falling, 26, Point(-106, 90), Point(-100, 82)),
    hatch(falling, 26, Point(-96, 89), Point(-90, 81)),
    hatch(falling, 26, Point(-86, 87), Point(-79, 79)),
    hatch(falling, 26, Point(-75, 85), Point(-69, 77)),
    hatch(falling, 26, Point(-65, 83), Point(-58, 74)),
    hatch(falling, 26, Point(-55, 81), Point(-47, 72)),
    hatch(falling, 26, Point(-45, 80), Point(-38, 72)),
    hatch(falling, 26, Point(-37, 82), Point(-30, 73)),
    hatch(falling, 26, Point(-29, 83), Point(-22, 74)),
    hatch(falling, 26, Point(-22, 84), Point(-15, 76)),
    hatch(falling, 26, Point(-14, 86), Point(-7, 78)),
    hatch(falling, 26, Point(-7, 88), Point(0, 80)),
    hatch(falling, 26, Point(1, 90), Point(7, 82)),
    hatch(falling, 26, Point(8, 92), Point(14, 85)),
    hatch(falling, 26, Point(15, 95), Point(20, 88)),
    hatch(falling, 26, Point(22, 97), Point(27, 91)),
    hatch(falling, 26, Point(29, 99), Point(34, 94)),
    hatch(falling, 26, Point(36, 102), Point(40, 97)),
  ]
}

// Where one form passes in front of another: buttocks over thighs, calves
// against thighs, heels, elbows, wrists, shoulders.
fn creases() -> List(Path) {
  [
    mark(falling, 22, 4, Point(-95, -64), Point(-114, -72), Point(-128, -76)),
    mark(falling, 22, 3, Point(-197, 33), Point(-197, 45), Point(-195, 50)),
    mark(falling, 22, 4, Point(-195, 50), Point(-193, 56), Point(-190, 62)),
    mark(falling, 23, 4, Point(-190, 62), Point(-186, 68), Point(-181, 73)),
    mark(falling, 23, 4, Point(-181, 73), Point(-176, 78), Point(-170, 82)),
    mark(falling, 24, 3, Point(-170, 82), Point(-164, 86), Point(-149, 92)),
    mark(kicked_leg, 26, 3, Point(-44, -188), Point(-27, -180), Point(-18, -179)),
    mark(trailing_leg, 26, 3, Point(-283, 91), Point(-279, 72), Point(-280, 68)),
    mark(trailing_leg, 26, 3, Point(-280, 68), Point(-280, 63), Point(-284, 57)),
    mark(falling, 26, 3, Point(190, -14), Point(191, -1), Point(194, 13)),
    mark(falling, 26, 3, Point(194, 13), Point(198, 27), Point(198, 34)),
  ]
}

// The back: spine, shoulder blades, trapezius, lats, flanks and buttocks.
fn back_anatomy() -> List(Path) {
  [
    mark(falling, 22, 1, Point(138, 26), Point(100, 24), Point(80, 23)),
    mark(falling, 22, 1, Point(80, 23), Point(60, 22), Point(20, 19)),
    mark(falling, 22, 2, Point(20, 19), Point(-30, 15), Point(-55, 14)),
    mark(falling, 22, 2, Point(-55, 14), Point(-80, 12), Point(-124, 9)),
    dark(falling, 20, [
      Point(60, 21), Point(49, 18), Point(34, 15), Point(17, 12), Point(0, 10),
      Point(-14, 8), Point(-29, 7), Point(-44, 6), Point(-60, 6), Point(-76, 6),
      Point(-95, 6), Point(-111, 7), Point(-122, 8), Point(-111, 9), Point(-95, 10),
      Point(-77, 12), Point(-60, 13), Point(-45, 14), Point(-30, 15), Point(-15, 16),
      Point(0, 17), Point(16, 18), Point(34, 19), Point(49, 20),
    ]),
    lit(falling, 21, [
      Point(40, 23), Point(29, 24), Point(14, 24), Point(-4, 24), Point(-20, 23),
      Point(-36, 23), Point(-52, 22), Point(-67, 21), Point(-80, 19), Point(-92, 18),
      Point(-103, 16), Point(-112, 14), Point(-118, 12), Point(-112, 12), Point(-103, 13),
      Point(-92, 14), Point(-80, 14), Point(-66, 15), Point(-51, 16), Point(-35, 17),
      Point(-20, 18), Point(-4, 20), Point(14, 21), Point(29, 22),
    ]),
    dark(falling, 22, [
      Point(-10, 40), Point(-19, 43), Point(-31, 46), Point(-46, 48), Point(-60, 48),
      Point(-75, 47), Point(-92, 43), Point(-106, 40), Point(-116, 36), Point(-106, 37),
      Point(-91, 38), Point(-75, 39), Point(-60, 40), Point(-46, 40), Point(-32, 40),
      Point(-19, 40),
    ]),
    lit(falling, 23, [
      Point(-10, -10), Point(-19, -12), Point(-32, -15), Point(-46, -17), Point(-60, -18),
      Point(-74, -18), Point(-89, -18), Point(-103, -17), Point(-112, -15),
      Point(-103, -14), Point(-89, -14), Point(-74, -13), Point(-60, -12), Point(-46, -12),
      Point(-32, -11), Point(-19, -10),
    ]),
    mark(falling, 25, 2, Point(128, -8), Point(100, -12), Point(86, -15)),
    mark(falling, 25, 2, Point(86, -15), Point(72, -18), Point(63, -23)),
    mark(falling, 26, 2, Point(63, -23), Point(54, -28), Point(50, -40)),
    dark(falling, 22, [
      Point(124, -8), Point(119, -11), Point(111, -13), Point(102, -16), Point(93, -18),
      Point(85, -20), Point(74, -22), Point(65, -24), Point(58, -24), Point(64, -21),
      Point(73, -18), Point(83, -14), Point(92, -11), Point(101, -10), Point(110, -9),
      Point(118, -8),
    ]),
    dark(falling, 22, [
      Point(58, -26), Point(55, -25), Point(51, -25), Point(46, -26), Point(42, -29),
      Point(40, -34), Point(40, -39), Point(41, -43), Point(42, -46), Point(43, -43),
      Point(44, -39), Point(45, -36), Point(47, -32), Point(49, -30), Point(52, -29),
      Point(56, -27),
    ]),
    mark(falling, 26, 2, Point(124, -12), Point(127, -34), Point(120, -60)),
    dark(falling, 22, [
      Point(124, -14), Point(121, -18), Point(119, -24), Point(118, -30), Point(117, -35),
      Point(116, -40), Point(116, -47), Point(117, -53), Point(118, -58), Point(120, -54),
      Point(122, -49), Point(124, -42), Point(125, -36), Point(125, -30), Point(125, -24),
      Point(125, -18),
    ]),
    lit(falling, 23, [
      Point(127, -16), Point(129, -19), Point(132, -24), Point(133, -30), Point(134, -36),
      Point(133, -42), Point(130, -48), Point(127, -53), Point(124, -56), Point(125, -52),
      Point(127, -47), Point(128, -41), Point(129, -36), Point(129, -31), Point(128, -25),
      Point(128, -20),
    ]),
    lit(falling, 23, [
      Point(102, -26), Point(101, -31), Point(98, -36), Point(94, -42), Point(92, -46),
      Point(90, -49), Point(87, -53), Point(83, -57), Point(80, -60), Point(80, -57),
      Point(81, -52), Point(83, -46), Point(85, -41), Point(89, -37), Point(94, -32),
      Point(99, -29),
    ]),
    mark(falling, 25, 2, Point(130, 56), Point(100, 56), Point(86, 58)),
    mark(falling, 25, 2, Point(86, 58), Point(72, 60), Point(63, 64)),
    mark(falling, 26, 2, Point(63, 64), Point(54, 68), Point(52, 80)),
    lit(falling, 22, [
      Point(124, 58), Point(118, 59), Point(110, 60), Point(101, 61), Point(92, 62),
      Point(84, 63), Point(75, 64), Point(66, 64), Point(60, 64), Point(66, 63),
      Point(74, 61), Point(83, 59), Point(92, 57), Point(101, 57), Point(110, 57),
      Point(118, 58),
    ]),
    dark(falling, 22, [
      Point(56, 70), Point(53, 70), Point(48, 71), Point(44, 73), Point(40, 78),
      Point(40, 83), Point(41, 88), Point(43, 92), Point(46, 94), Point(46, 91),
      Point(46, 88), Point(46, 84), Point(47, 80), Point(49, 78), Point(51, 75),
      Point(54, 72),
    ]),
    mark(falling, 26, 2, Point(124, 62), Point(128, 86), Point(124, 112)),
    dark(falling, 22, [
      Point(122, 64), Point(120, 69), Point(118, 75), Point(117, 82), Point(117, 88),
      Point(117, 93), Point(117, 99), Point(118, 106), Point(120, 110), Point(121, 106),
      Point(123, 101), Point(124, 94), Point(125, 88), Point(125, 82), Point(124, 75),
      Point(123, 68),
    ]),
    lit(falling, 23, [
      Point(98, 70), Point(97, 74), Point(94, 79), Point(91, 84), Point(89, 87),
      Point(87, 90), Point(84, 94), Point(81, 98), Point(78, 100), Point(79, 97),
      Point(80, 93), Point(81, 88), Point(83, 84), Point(87, 79), Point(91, 76),
      Point(95, 72),
    ]),
    mark(falling, 27, 1, Point(56, -70), Point(30, -58), Point(15, -52)),
    mark(falling, 27, 1, Point(15, -52), Point(0, -46), Point(-30, -38)),
    mark(falling, 27, 1, Point(54, 106), Point(28, 90), Point(14, 83)),
    mark(falling, 27, 1, Point(14, 83), Point(0, 76), Point(-30, 66)),
    dark(falling, 22, [
      Point(44, 98), Point(37, 97), Point(28, 94), Point(18, 90), Point(9, 86),
      Point(1, 83), Point(-9, 79), Point(-18, 74), Point(-24, 70), Point(-17, 71),
      Point(-8, 73), Point(3, 76), Point(12, 79), Point(21, 84), Point(31, 89),
      Point(39, 94),
    ]),
    lit(falling, 23, [
      Point(40, -56), Point(33, -56), Point(24, -54), Point(14, -51), Point(5, -49),
      Point(-4, -46), Point(-13, -43), Point(-21, -39), Point(-26, -36), Point(-20, -37),
      Point(-12, -39), Point(-3, -41), Point(6, -43), Point(15, -46), Point(25, -50),
      Point(34, -53),
    ]),
    mark(falling, 28, 2, Point(-70, -54), Point(-92, -44), Point(-108, -28)),
    mark(falling, 28, 2, Point(-70, 82), Point(-94, 72), Point(-110, 52)),
    dark(falling, 24, [
      Point(-108, -4), Point(-110, -2), Point(-114, -2), Point(-117, -4), Point(-118, -6),
      Point(-116, -8), Point(-112, -8), Point(-109, -6),
    ]),
    dark(falling, 24, [
      Point(-111, 24), Point(-112, 26), Point(-115, 28), Point(-119, 28), Point(-121, 26),
      Point(-120, 24), Point(-117, 22), Point(-113, 22),
    ]),
    mark(falling, 29, 3, Point(-126, 8), Point(-150, 7), Point(-160, 6)),
    mark(falling, 29, 3, Point(-160, 6), Point(-170, 6), Point(-188, 8)),
    dark(falling, 25, [
      Point(-128, 6), Point(-133, 3), Point(-141, 0), Point(-150, -2), Point(-158, -3),
      Point(-166, -2), Point(-174, 0), Point(-181, 3), Point(-186, 6), Point(-181, 6),
      Point(-174, 6), Point(-166, 5), Point(-158, 5), Point(-150, 5), Point(-141, 6),
      Point(-133, 6),
    ]),
    mark(falling, 29, 2, Point(-124, 2), Point(-124, -24), Point(-132, -46)),
    mark(falling, 29, 2, Point(-126, 18), Point(-126, 42), Point(-134, 64)),
    lit(falling, 26, [
      Point(-136, -48), Point(-138, -52), Point(-141, -57), Point(-147, -61),
      Point(-154, -63), Point(-161, -62), Point(-167, -58), Point(-171, -54),
      Point(-174, -50), Point(-170, -51), Point(-165, -53), Point(-159, -54),
      Point(-154, -55), Point(-149, -54), Point(-144, -52), Point(-139, -49),
    ]),
    lit(falling, 26, [
      Point(-136, 16), Point(-140, 18), Point(-144, 18), Point(-149, 19), Point(-154, 19),
      Point(-159, 19), Point(-165, 19), Point(-172, 18), Point(-176, 16), Point(-172, 15),
      Point(-166, 14), Point(-160, 13), Point(-154, 12), Point(-149, 13), Point(-144, 14),
      Point(-139, 15),
    ]),
    lit(falling, 26, [
      Point(-96, 4), Point(-101, 4), Point(-106, 4), Point(-110, 6), Point(-114, 8),
      Point(-117, 12), Point(-120, 16), Point(-116, 13), Point(-112, 11), Point(-109, 9),
      Point(-104, 7), Point(-100, 5),
    ]),
  ]
}

// Muscles of the arms and legs: deltoids, triceps, hamstrings, calves.
fn limb_anatomy() -> List(Path) {
  [
    mark(kicked_leg, 30, 2, Point(-95, -80), Point(-75, -126), Point(-61, -147)),
    mark(kicked_leg, 30, 2, Point(-61, -147), Point(-48, -169), Point(-29, -192)),
    mark(kicked_leg, 31, 2, Point(-24, -145), Point(-13, -167), Point(-10, -189)),
    mark(kicked_leg, 31, 2, Point(-6, -185), Point(0, -195), Point(-2, -208)),
    dark(kicked_leg, 26, [
      Point(-95, -92), Point(-94, -103), Point(-89, -119), Point(-83, -135),
      Point(-76, -150), Point(-68, -162), Point(-58, -173), Point(-48, -182),
      Point(-40, -187), Point(-45, -180), Point(-52, -169), Point(-60, -157),
      Point(-68, -145), Point(-75, -131), Point(-83, -116), Point(-90, -102),
    ]),
    lit(kicked_leg, 27, [
      Point(-70, -67), Point(-63, -73), Point(-54, -83), Point(-44, -94), Point(-37, -106),
      Point(-31, -119), Point(-27, -133), Point(-24, -146), Point(-23, -155),
      Point(-27, -147), Point(-32, -135), Point(-38, -122), Point(-44, -110),
      Point(-51, -98), Point(-58, -86), Point(-65, -75),
    ]),
    mark(kicked_leg, 32, 2, Point(-37, -202), Point(-60, -215), Point(-69, -225)),
    mark(kicked_leg, 32, 2, Point(-69, -225), Point(-77, -235), Point(-92, -254)),
    glint(kicked_leg, 32, 2, Point(-28, -224), Point(-58, -248), Point(-97, -279)),
    dark(kicked_leg, 28, [
      Point(-45, -196), Point(-51, -196), Point(-59, -197), Point(-67, -201),
      Point(-74, -206), Point(-80, -214), Point(-83, -223), Point(-85, -231),
      Point(-86, -238), Point(-83, -233), Point(-79, -225), Point(-74, -217),
      Point(-69, -211), Point(-63, -206), Point(-56, -202), Point(-50, -198),
    ]),
    mark(trailing_leg, 30, 2, Point(-151, 43), Point(-201, 44), Point(-226, 49)),
    mark(trailing_leg, 30, 2, Point(-226, 49), Point(-250, 54), Point(-284, 64)),
    mark(trailing_leg, 31, 2, Point(-226, 86), Point(-267, 86), Point(-289, 81)),
    mark(trailing_leg, 31, 2, Point(-285, 86), Point(-297, 84), Point(-306, 77)),
    dark(trailing_leg, 26, [
      Point(-162, 36), Point(-173, 33), Point(-189, 31), Point(-207, 30), Point(-223, 31),
      Point(-238, 35), Point(-252, 40), Point(-263, 47), Point(-271, 52), Point(-262, 50),
      Point(-250, 47), Point(-236, 43), Point(-222, 40), Point(-206, 38), Point(-189, 37),
      Point(-173, 36),
    ]),
    lit(trailing_leg, 27, [
      Point(-147, 72), Point(-156, 77), Point(-168, 82), Point(-182, 86), Point(-196, 89),
      Point(-210, 90), Point(-225, 89), Point(-238, 86), Point(-247, 84), Point(-238, 83),
      Point(-225, 83), Point(-210, 82), Point(-197, 81), Point(-183, 79), Point(-169, 76),
      Point(-156, 74),
    ]),
    mark(trailing_leg, 32, 2, Point(-298, 87), Point(-305, 113), Point(-313, 123)),
    mark(trailing_leg, 32, 2, Point(-313, 123), Point(-321, 134), Point(-336, 153)),
    glint(trailing_leg, 32, 2, Point(-321, 84), Point(-337, 118), Point(-359, 163)),
    dark(trailing_leg, 28, [
      Point(-290, 94), Point(-289, 99), Point(-288, 107), Point(-290, 116),
      Point(-293, 124), Point(-299, 131), Point(-307, 137), Point(-315, 141),
      Point(-321, 143), Point(-317, 139), Point(-311, 133), Point(-304, 127),
      Point(-299, 121), Point(-296, 114), Point(-293, 106), Point(-291, 99),
    ]),
    mark(raised_arm, 30, 2, Point(82, -27), Point(88, -50), Point(94, -59)),
    mark(raised_arm, 30, 2, Point(94, -59), Point(99, -68), Point(110, -76)),
    mark(raised_arm, 31, 2, Point(85, -82), Point(82, -102), Point(84, -120)),
    dark(raised_arm, 27, [
      Point(78, -75), Point(75, -79), Point(71, -85), Point(69, -93), Point(68, -100),
      Point(69, -108), Point(71, -115), Point(74, -121), Point(77, -125), Point(77, -121),
      Point(76, -114), Point(75, -107), Point(74, -100), Point(75, -93), Point(76, -86),
      Point(77, -79),
    ]),
    lit(raised_arm, 27, [
      Point(128, -32), Point(130, -36), Point(133, -41), Point(135, -48), Point(134, -55),
      Point(130, -61), Point(124, -66), Point(118, -69), Point(113, -70), Point(116, -67),
      Point(120, -62), Point(125, -57), Point(127, -52), Point(128, -47), Point(128, -41),
      Point(128, -36),
    ]),
    mark(raised_arm, 32, 2, Point(79, -125), Point(72, -133), Point(75, -142)),
    mark(raised_arm, 32, 2, Point(95, -150), Point(84, -175), Point(67, -212)),
    dark(raised_arm, 28, [
      Point(73, -140), Point(70, -144), Point(66, -150), Point(62, -158), Point(58, -167),
      Point(56, -177), Point(55, -189), Point(55, -200), Point(55, -208), Point(57, -200),
      Point(59, -190), Point(62, -178), Point(64, -168), Point(67, -160), Point(69, -151),
      Point(72, -145),
    ]),
    mark(hanging_arm, 30, 2, Point(60, 123), Point(79, 138), Point(89, 142)),
    mark(hanging_arm, 30, 2, Point(89, 142), Point(99, 145), Point(112, 145)),
    mark(hanging_arm, 31, 2, Point(95, 168), Point(108, 190), Point(123, 209)),
    dark(hanging_arm, 27, [
      Point(88, 169), Point(89, 175), Point(90, 183), Point(93, 191), Point(97, 199),
      Point(103, 205), Point(110, 211), Point(117, 215), Point(122, 217), Point(119, 213),
      Point(114, 207), Point(108, 201), Point(103, 195), Point(99, 188), Point(95, 181),
      Point(91, 174),
    ]),
    lit(hanging_arm, 27, [
      Point(100, 100), Point(104, 101), Point(109, 103), Point(115, 108), Point(118, 114),
      Point(119, 121), Point(117, 129), Point(114, 135), Point(111, 139), Point(111, 134),
      Point(112, 128), Point(112, 121), Point(112, 116), Point(109, 111), Point(106, 107),
      Point(102, 103),
    ]),
    mark(hanging_arm, 32, 2, Point(125, 224), Point(128, 234), Point(138, 237)),
    mark(hanging_arm, 32, 2, Point(155, 223), Point(174, 250), Point(196, 285)),
    dark(hanging_arm, 28, [
      Point(135, 237), Point(137, 242), Point(141, 250), Point(146, 259), Point(153, 267),
      Point(161, 274), Point(171, 282), Point(180, 289), Point(187, 292), Point(181, 287),
      Point(173, 279), Point(164, 271), Point(157, 263), Point(150, 255), Point(144, 248),
      Point(139, 241),
    ]),
  ]
}

// Hands seen from the back: knuckles, tendons, finger joints and nails.
// Feet: the arch, heel, ball of the foot, ankle bone, Achilles tendon, and
// five toes, each with its joint crease and pad, and the big toenail.
fn hands_and_feet() -> List(Path) {
  [
    glint(raised_arm, 34, 1, Point(50, -271), Point(53, -274), Point(56, -272)),
    glint(raised_arm, 34, 1, Point(57, -237), Point(55, -254), Point(53, -268)),
    mark(raised_arm, 35, 1, Point(49, -288), Point(51, -289), Point(54, -288)),
    mark(raised_arm, 35, 1, Point(48, -297), Point(51, -298), Point(53, -297)),
    lit(raised_arm, 36, [
      Point(53, -299), Point(53, -304), Point(52, -305), Point(51, -306), Point(49, -305),
      Point(49, -304), Point(49, -299),
    ]),
    Path(raised_arm(line(Polygon([
      Point(53, -299), Point(53, -304), Point(52, -305), Point(51, -306), Point(49, -305),
      Point(49, -304), Point(49, -299),
    ]))), 36, 38, 1),
    glint(raised_arm, 34, 1, Point(43, -272), Point(45, -275), Point(48, -273)),
    glint(raised_arm, 34, 1, Point(54, -236), Point(50, -254), Point(46, -268)),
    mark(raised_arm, 35, 1, Point(39, -290), Point(41, -292), Point(45, -291)),
    mark(raised_arm, 35, 1, Point(38, -299), Point(40, -301), Point(43, -300)),
    lit(raised_arm, 36, [
      Point(42, -302), Point(42, -308), Point(41, -309), Point(40, -309), Point(38, -309),
      Point(38, -307), Point(38, -302),
    ]),
    Path(raised_arm(line(Polygon([
      Point(42, -302), Point(42, -308), Point(41, -309), Point(40, -309), Point(38, -309),
      Point(38, -307), Point(38, -302),
    ]))), 36, 38, 1),
    glint(raised_arm, 34, 1, Point(37, -268), Point(39, -272), Point(42, -270)),
    glint(raised_arm, 34, 1, Point(51, -235), Point(45, -252), Point(41, -266)),
    mark(raised_arm, 35, 1, Point(31, -285), Point(34, -287), Point(37, -286)),
    mark(raised_arm, 35, 1, Point(30, -294), Point(32, -295), Point(34, -295)),
    lit(raised_arm, 36, [
      Point(34, -296), Point(33, -302), Point(32, -303), Point(31, -303), Point(30, -303),
      Point(29, -301), Point(30, -296),
    ]),
    Path(raised_arm(line(Polygon([
      Point(34, -296), Point(33, -302), Point(32, -303), Point(31, -303), Point(30, -303),
      Point(29, -301), Point(30, -296),
    ]))), 36, 38, 1),
    glint(raised_arm, 34, 1, Point(33, -262), Point(34, -265), Point(37, -264)),
    glint(raised_arm, 34, 1, Point(49, -235), Point(42, -249), Point(37, -259)),
    mark(raised_arm, 35, 1, Point(27, -272), Point(29, -275), Point(32, -275)),
    mark(raised_arm, 35, 1, Point(25, -279), Point(27, -281), Point(29, -280)),
    lit(raised_arm, 36, [
      Point(28, -282), Point(28, -286), Point(27, -287), Point(26, -288), Point(25, -287),
      Point(24, -286), Point(25, -281),
    ]),
    Path(raised_arm(line(Polygon([
      Point(28, -282), Point(28, -286), Point(27, -287), Point(26, -288), Point(25, -287),
      Point(24, -286), Point(25, -281),
    ]))), 36, 38, 1),
    mark(raised_arm, 35, 2, Point(50, -269), Point(49, -274), Point(47, -279)),
    mark(raised_arm, 35, 2, Point(43, -268), Point(42, -273), Point(41, -278)),
    mark(raised_arm, 35, 2, Point(38, -263), Point(37, -268), Point(36, -273)),
    lit(raised_arm, 36, [
      Point(77, -271), Point(78, -279), Point(77, -281), Point(76, -282), Point(74, -281),
      Point(74, -280), Point(73, -271),
    ]),
    Path(raised_arm(line(Polygon([
      Point(77, -271), Point(78, -279), Point(77, -281), Point(76, -282), Point(74, -281),
      Point(74, -280), Point(73, -271),
    ]))), 36, 38, 1),
    mark(raised_arm, 35, 1, Point(71, -268), Point(75, -268), Point(78, -267)),
    dark(raised_arm, 34, [
      Point(63, -244), Point(62, -246), Point(60, -249), Point(60, -251), Point(59, -254),
      Point(58, -257), Point(58, -259), Point(58, -262), Point(58, -264), Point(59, -262),
      Point(60, -260), Point(61, -257), Point(62, -254), Point(63, -251), Point(63, -249),
      Point(63, -246),
    ]),
    lit(raised_arm, 34, [
      Point(46, -236), Point(46, -239), Point(46, -242), Point(46, -246), Point(45, -250),
      Point(44, -254), Point(43, -257), Point(40, -259), Point(39, -261), Point(39, -259),
      Point(40, -256), Point(41, -252), Point(42, -249), Point(43, -246), Point(44, -242),
      Point(45, -239),
    ]),
    glint(hanging_arm, 34, 1, Point(241, 346), Point(245, 345), Point(244, 341)),
    glint(hanging_arm, 34, 1, Point(220, 317), Point(231, 330), Point(239, 341)),
    mark(hanging_arm, 35, 1, Point(255, 357), Point(258, 356), Point(259, 353)),
    mark(hanging_arm, 35, 1, Point(263, 364), Point(265, 363), Point(266, 360)),
    lit(hanging_arm, 36, [
      Point(267, 363), Point(272, 368), Point(272, 369), Point(272, 370), Point(270, 371),
      Point(269, 370), Point(265, 365),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(267, 363), Point(272, 368), Point(272, 369), Point(272, 370), Point(270, 371),
      Point(269, 370), Point(265, 365),
    ]))), 36, 38, 1),
    glint(hanging_arm, 34, 1, Point(236, 351), Point(240, 352), Point(240, 348)),
    glint(hanging_arm, 34, 1, Point(217, 318), Point(228, 334), Point(236, 346)),
    mark(hanging_arm, 35, 1, Point(248, 367), Point(251, 366), Point(253, 364)),
    mark(hanging_arm, 35, 1, Point(255, 376), Point(257, 376), Point(259, 373)),
    lit(hanging_arm, 36, [
      Point(260, 376), Point(264, 383), Point(264, 384), Point(263, 385), Point(262, 385),
      Point(260, 385), Point(256, 378),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(260, 376), Point(264, 383), Point(264, 384), Point(263, 385), Point(262, 385),
      Point(260, 385), Point(256, 378),
    ]))), 36, 38, 1),
    glint(hanging_arm, 34, 1, Point(229, 353), Point(233, 354), Point(234, 351)),
    glint(hanging_arm, 34, 1, Point(215, 320), Point(223, 336), Point(230, 348)),
    mark(hanging_arm, 35, 1, Point(236, 370), Point(239, 370), Point(241, 368)),
    mark(hanging_arm, 35, 1, Point(241, 380), Point(243, 380), Point(245, 378)),
    lit(hanging_arm, 36, [
      Point(246, 381), Point(248, 387), Point(248, 389), Point(247, 390), Point(246, 390),
      Point(245, 389), Point(242, 382),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(246, 381), Point(248, 387), Point(248, 389), Point(247, 390), Point(246, 390),
      Point(245, 389), Point(242, 382),
    ]))), 36, 38, 1),
    glint(hanging_arm, 34, 1, Point(222, 351), Point(224, 353), Point(226, 351)),
    glint(hanging_arm, 34, 1, Point(213, 321), Point(218, 336), Point(224, 347)),
    mark(hanging_arm, 35, 1, Point(222, 364), Point(225, 365), Point(227, 364)),
    mark(hanging_arm, 35, 1, Point(223, 372), Point(226, 373), Point(228, 372)),
    lit(hanging_arm, 36, [
      Point(227, 374), Point(228, 380), Point(228, 381), Point(227, 382), Point(225, 381),
      Point(225, 380), Point(224, 374),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(227, 374), Point(228, 380), Point(228, 381), Point(227, 382), Point(225, 381),
      Point(225, 380), Point(224, 374),
    ]))), 36, 38, 1),
    mark(hanging_arm, 35, 2, Point(239, 344), Point(241, 348), Point(244, 352)),
    mark(hanging_arm, 35, 2, Point(233, 348), Point(236, 352), Point(239, 357)),
    mark(hanging_arm, 35, 2, Point(226, 349), Point(229, 353), Point(232, 357)),
    lit(hanging_arm, 36, [
      Point(260, 318), Point(268, 322), Point(269, 323), Point(269, 325), Point(268, 326),
      Point(266, 326), Point(258, 322),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(260, 318), Point(268, 322), Point(269, 323), Point(269, 325), Point(268, 326),
      Point(266, 326), Point(258, 322),
    ]))), 36, 38, 1),
    mark(hanging_arm, 35, 1, Point(255, 322), Point(257, 319), Point(257, 315)),
    dark(hanging_arm, 34, [
      Point(230, 317), Point(230, 320), Point(231, 323), Point(232, 324), Point(233, 327),
      Point(235, 329), Point(236, 331), Point(239, 333), Point(241, 334), Point(240, 333),
      Point(239, 330), Point(238, 328), Point(236, 325), Point(234, 323), Point(233, 320),
      Point(231, 319),
    ]),
    lit(hanging_arm, 34, [
      Point(212, 324), Point(214, 326), Point(216, 328), Point(220, 331), Point(222, 334),
      Point(224, 338), Point(225, 341), Point(225, 344), Point(225, 347), Point(224, 345),
      Point(222, 343), Point(220, 339), Point(219, 336), Point(217, 333), Point(215, 329),
      Point(213, 327),
    ]),
    dark(kicked_leg, 34, [
      Point(-137, -282), Point(-137, -285), Point(-139, -290), Point(-142, -295),
      Point(-146, -299), Point(-151, -301), Point(-157, -302), Point(-162, -302),
      Point(-165, -301), Point(-162, -299), Point(-158, -298), Point(-153, -296),
      Point(-149, -294), Point(-146, -291), Point(-142, -288), Point(-139, -284),
    ]),
    mark(kicked_leg, 34, 2, Point(-138, -280), Point(-150, -293), Point(-166, -299)),
    mark(kicked_leg, 34, 2, Point(-121, -266), Point(-125, -275), Point(-135, -274)),
    mark(kicked_leg, 35, 1, Point(-163, -319), Point(-167, -310), Point(-166, -305)),
    mark(kicked_leg, 35, 1, Point(-166, -305), Point(-166, -301), Point(-163, -293)),
    lit(kicked_leg, 34, [
      Point(-156, -308), Point(-158, -309), Point(-160, -309), Point(-163, -309),
      Point(-166, -308), Point(-168, -305), Point(-168, -303), Point(-167, -300),
      Point(-166, -299), Point(-166, -300), Point(-166, -302), Point(-165, -304),
      Point(-164, -306), Point(-162, -306), Point(-160, -307), Point(-158, -307),
    ]),
    mark(kicked_leg, 34, 2, Point(-113, -292), Point(-115, -300), Point(-122, -298)),
    mark(kicked_leg, 34, 2, Point(-115, -273), Point(-103, -262), Point(-89, -252)),
    glint(kicked_leg, 34, 1, Point(-120, -301), Point(-141, -314), Point(-161, -323)),
    lit(kicked_leg, 34, [
      Point(-118, -301), Point(-123, -302), Point(-129, -305), Point(-136, -308),
      Point(-142, -311), Point(-148, -314), Point(-153, -316), Point(-158, -319),
      Point(-161, -322), Point(-158, -321), Point(-152, -319), Point(-146, -317),
      Point(-140, -314), Point(-134, -311), Point(-128, -307), Point(-122, -303),
    ]),
    mark(kicked_leg, 36, 1, Point(-170, -331), Point(-173, -328), Point(-174, -324)),
    lit(kicked_leg, 36, [
      Point(-183, -334), Point(-183, -332), Point(-181, -330), Point(-178, -329),
      Point(-176, -330), Point(-177, -332), Point(-179, -334), Point(-181, -335),
    ]),
    mark(kicked_leg, 36, 2, Point(-165, -318), Point(-169, -320), Point(-174, -323)),
    mark(kicked_leg, 36, 1, Point(-174, -321), Point(-177, -319), Point(-177, -315)),
    lit(kicked_leg, 36, [
      Point(-184, -321), Point(-184, -319), Point(-182, -318), Point(-180, -318),
      Point(-179, -319), Point(-179, -321), Point(-181, -322), Point(-183, -322),
    ]),
    mark(kicked_leg, 36, 2, Point(-168, -311), Point(-172, -312), Point(-176, -314)),
    mark(kicked_leg, 36, 1, Point(-175, -313), Point(-177, -310), Point(-176, -307)),
    lit(kicked_leg, 36, [
      Point(-183, -311), Point(-183, -310), Point(-181, -309), Point(-179, -309),
      Point(-178, -310), Point(-179, -312), Point(-181, -312), Point(-182, -312),
    ]),
    mark(kicked_leg, 36, 2, Point(-168, -304), Point(-171, -305), Point(-175, -306)),
    mark(kicked_leg, 36, 1, Point(-174, -305), Point(-175, -302), Point(-174, -300)),
    lit(kicked_leg, 36, [
      Point(-181, -303), Point(-180, -301), Point(-179, -301), Point(-177, -301),
      Point(-176, -302), Point(-177, -303), Point(-178, -304), Point(-180, -304),
    ]),
    mark(kicked_leg, 36, 2, Point(-166, -298), Point(-170, -298), Point(-173, -299)),
    mark(kicked_leg, 36, 1, Point(-171, -297), Point(-173, -295), Point(-171, -292)),
    lit(kicked_leg, 36, [
      Point(-177, -294), Point(-176, -293), Point(-175, -293), Point(-173, -294),
      Point(-173, -295), Point(-175, -296), Point(-176, -295),
    ]),
    lit(kicked_leg, 37, [
      Point(-173, -331), Point(-176, -335), Point(-179, -336), Point(-182, -335),
      Point(-177, -332),
    ]),
    Path(kicked_leg(line(Polygon([
      Point(-173, -331), Point(-176, -335), Point(-179, -336), Point(-182, -335),
      Point(-177, -332),
    ]))), 37, 39, 1),
    dark(trailing_leg, 34, [
      Point(-365, 209), Point(-368, 208), Point(-373, 207), Point(-379, 208),
      Point(-384, 210), Point(-388, 213), Point(-391, 218), Point(-393, 223),
      Point(-394, 227), Point(-391, 224), Point(-388, 221), Point(-385, 217),
      Point(-381, 215), Point(-377, 213), Point(-372, 211), Point(-368, 210),
    ]),
    mark(trailing_leg, 34, 2, Point(-364, 211), Point(-381, 216), Point(-393, 228)),
    mark(trailing_leg, 34, 2, Point(-343, 201), Point(-353, 200), Point(-357, 210)),
    mark(trailing_leg, 35, 1, Point(-410, 217), Point(-403, 224), Point(-399, 226)),
    mark(trailing_leg, 35, 1, Point(-399, 226), Point(-395, 227), Point(-386, 227)),
    lit(trailing_leg, 34, [
      Point(-396, 215), Point(-398, 216), Point(-400, 218), Point(-401, 221),
      Point(-401, 224), Point(-399, 227), Point(-397, 228), Point(-394, 228),
      Point(-393, 228), Point(-394, 227), Point(-395, 226), Point(-397, 225),
      Point(-398, 223), Point(-398, 221), Point(-397, 219), Point(-397, 217),
    ]),
    mark(trailing_leg, 34, 2, Point(-364, 182), Point(-372, 181), Point(-373, 188)),
    mark(trailing_leg, 34, 2, Point(-348, 193), Point(-340, 179), Point(-332, 161)),
    glint(trailing_leg, 34, 1, Point(-375, 186), Point(-395, 199), Point(-412, 213)),
    lit(trailing_leg, 34, [
      Point(-374, 184), Point(-377, 187), Point(-382, 192), Point(-388, 197),
      Point(-393, 201), Point(-398, 205), Point(-403, 209), Point(-408, 212),
      Point(-411, 214), Point(-409, 211), Point(-405, 207), Point(-400, 203),
      Point(-395, 198), Point(-390, 194), Point(-384, 190), Point(-378, 186),
    ]),
    mark(trailing_leg, 36, 1, Point(-423, 217), Point(-422, 222), Point(-419, 225)),
    lit(trailing_leg, 36, [
      Point(-431, 229), Point(-429, 229), Point(-427, 228), Point(-425, 226),
      Point(-425, 224), Point(-427, 224), Point(-430, 225), Point(-431, 227),
    ]),
    mark(trailing_leg, 36, 2, Point(-409, 219), Point(-413, 222), Point(-417, 225)),
    mark(trailing_leg, 36, 1, Point(-416, 226), Point(-415, 229), Point(-412, 231)),
    lit(trailing_leg, 36, [
      Point(-420, 235), Point(-419, 235), Point(-417, 234), Point(-416, 232),
      Point(-416, 231), Point(-418, 231), Point(-419, 232), Point(-420, 234),
    ]),
    mark(trailing_leg, 36, 2, Point(-404, 224), Point(-407, 227), Point(-410, 230)),
    mark(trailing_leg, 36, 1, Point(-409, 230), Point(-407, 233), Point(-404, 234)),
    lit(trailing_leg, 36, [
      Point(-411, 238), Point(-410, 238), Point(-408, 237), Point(-408, 236),
      Point(-408, 234), Point(-410, 234), Point(-411, 235), Point(-412, 237),
    ]),
    mark(trailing_leg, 36, 2, Point(-398, 227), Point(-400, 230), Point(-403, 233)),
    mark(trailing_leg, 36, 1, Point(-401, 232), Point(-400, 235), Point(-397, 235)),
    lit(trailing_leg, 36, [
      Point(-402, 240), Point(-401, 240), Point(-400, 238), Point(-399, 237),
      Point(-400, 236), Point(-401, 236), Point(-402, 237), Point(-403, 239),
    ]),
    mark(trailing_leg, 36, 2, Point(-392, 229), Point(-393, 231), Point(-395, 234)),
    mark(trailing_leg, 36, 1, Point(-393, 234), Point(-391, 236), Point(-389, 235)),
    lit(trailing_leg, 36, [
      Point(-393, 240), Point(-392, 239), Point(-391, 238), Point(-391, 237),
      Point(-391, 236), Point(-393, 236), Point(-393, 237), Point(-393, 239),
    ]),
    lit(trailing_leg, 37, [
      Point(-424, 221), Point(-429, 222), Point(-432, 224), Point(-432, 227),
      Point(-427, 224),
    ]),
    Path(trailing_leg(line(Polygon([
      Point(-424, 221), Point(-429, 222), Point(-432, 224), Point(-432, 227),
      Point(-427, 224),
    ]))), 37, 39, 1),
  ]
}

// Short feathers over each shoulder blade, where the wings take root.
fn wing_roots() -> List(Path) {
  [
    Path(falling(feather_vane(Leaf(Point(106, -34), Point(60, -54), 9), 1)), 37, 42, 0),
    Path(falling(feather_ink(Leaf(Point(106, -34), Point(60, -54), 9))), 37, 42, 2),
    Path(falling(feather_shaft(Line(Point(106, -34), Point(60, -54)))), 38, 43, 1),
    Path(falling(feather_vane(Leaf(Point(102, -38), Point(53, -68), 11), 2)), 38, 43, 0),
    Path(falling(feather_ink(Leaf(Point(102, -38), Point(53, -68), 11))), 38, 43, 2),
    Path(falling(feather_shaft(Line(Point(102, -38), Point(53, -68)))), 39, 44, 1),
    Path(falling(feather_vane(Leaf(Point(98, -41), Point(57, -76), 9), 3)), 39, 44, 0),
    Path(falling(feather_ink(Leaf(Point(98, -41), Point(57, -76), 9))), 39, 44, 2),
    Path(falling(feather_shaft(Line(Point(98, -41), Point(57, -76)))), 40, 45, 1),
    Path(falling(feather_vane(Leaf(Point(94, -44), Point(54, -89), 11), 4)), 40, 45, 0),
    Path(falling(feather_ink(Leaf(Point(94, -44), Point(54, -89), 11))), 40, 45, 2),
    Path(falling(feather_shaft(Line(Point(94, -44), Point(54, -89)))), 41, 46, 1),
    Path(falling(feather_vane(Leaf(Point(90, -48), Point(61, -91), 9), 5)), 41, 46, 0),
    Path(falling(feather_ink(Leaf(Point(90, -48), Point(61, -91), 9))), 41, 46, 2),
    Path(falling(feather_shaft(Line(Point(90, -48), Point(61, -91)))), 42, 47, 1),
    Path(falling(feather_vane(Leaf(Point(108, 70), Point(159, 63), 9), 6)), 37, 42, 0),
    Path(falling(feather_ink(Leaf(Point(108, 70), Point(159, 63), 9))), 37, 42, 2),
    Path(falling(feather_shaft(Line(Point(108, 70), Point(159, 63)))), 38, 43, 1),
    Path(falling(feather_vane(Leaf(Point(109, 76), Point(167, 74), 11), 7)), 38, 43, 0),
    Path(falling(feather_ink(Leaf(Point(109, 76), Point(167, 74), 11))), 38, 43, 2),
    Path(falling(feather_shaft(Line(Point(109, 76), Point(167, 74)))), 39, 44, 1),
    Path(falling(feather_vane(Leaf(Point(110, 81), Point(160, 86), 9), 8)), 39, 44, 0),
    Path(falling(feather_ink(Leaf(Point(110, 81), Point(160, 86), 9))), 39, 44, 2),
    Path(falling(feather_shaft(Line(Point(110, 81), Point(160, 86)))), 40, 45, 1),
    Path(falling(feather_vane(Leaf(Point(111, 86), Point(166, 99), 11), 9)), 40, 45, 0),
    Path(falling(feather_ink(Leaf(Point(111, 86), Point(166, 99), 11))), 40, 45, 2),
    Path(falling(feather_shaft(Line(Point(111, 86), Point(166, 99)))), 41, 46, 1),
    Path(falling(feather_vane(Leaf(Point(112, 92), Point(157, 108), 9), 10)), 41, 46, 0),
    Path(falling(feather_ink(Leaf(Point(112, 92), Point(157, 108), 9))), 41, 46, 2),
    Path(falling(feather_shaft(Line(Point(112, 92), Point(157, 108)))), 42, 47, 1),
  ]
}

// His right ear and jaw as he turns his head, the nape and neck muscles.
fn head_and_neck() -> List(Path) {
  [
    Path(falling(skin(Polygon([
      Point(253, 26), Point(256, 28), Point(258, 30), Point(258, 34), Point(258, 37),
      Point(255, 40), Point(252, 43), Point(247, 45), Point(242, 47), Point(237, 47),
      Point(232, 47), Point(227, 47), Point(224, 45), Point(221, 44), Point(219, 41),
      Point(220, 39), Point(221, 37), Point(225, 34), Point(229, 32), Point(234, 30),
      Point(239, 29), Point(243, 28), Point(247, 27), Point(250, 26),
    ]))), 36, 40, 0),
    Path(falling(ink(Polygon([
      Point(253, 26), Point(256, 28), Point(258, 30), Point(258, 34), Point(258, 37),
      Point(255, 40), Point(252, 43), Point(247, 45), Point(242, 47), Point(237, 47),
      Point(232, 47), Point(227, 47), Point(224, 45), Point(221, 44), Point(219, 41),
      Point(220, 39), Point(221, 37), Point(225, 34), Point(229, 32), Point(234, 30),
      Point(239, 29), Point(243, 28), Point(247, 27), Point(250, 26),
    ]))), 36, 40, 3),
    mark(falling, 37, 2, Point(251, 32), Point(246, 41), Point(240, 43)),
    mark(falling, 37, 2, Point(240, 43), Point(235, 44), Point(227, 41)),
    dark(falling, 37, [
      Point(246, 34), Point(245, 37), Point(242, 39), Point(238, 40), Point(235, 40),
      Point(232, 39), Point(232, 37), Point(236, 35), Point(239, 34), Point(244, 33),
    ]),
    mark(falling, 37, 2, Point(219, 39), Point(208, 46), Point(197, 44)),
    lit(falling, 36, [
      Point(218, 50), Point(221, 50), Point(226, 50), Point(230, 50), Point(235, 48),
      Point(238, 46), Point(242, 43), Point(245, 40), Point(247, 37), Point(244, 39),
      Point(241, 41), Point(237, 43), Point(233, 45), Point(229, 47), Point(225, 48),
      Point(221, 49),
    ]),
    mark(falling, 38, 2, Point(195, 5), Point(179, 13), Point(171, 17)),
    mark(falling, 38, 2, Point(171, 17), Point(163, 21), Point(154, 24)),
    mark(falling, 39, 2, Point(149, 17), Point(144, 28), Point(154, 32)),
    mark(falling, 38, 2, Point(200, 35), Point(181, 48), Point(170, 58)),
    mark(falling, 38, 2, Point(170, 58), Point(158, 67), Point(143, 88)),
    mark(falling, 38, 2, Point(184, -15), Point(172, -12), Point(162, -23)),
    mark(falling, 39, 1, Point(176, -18), Point(170, -24), Point(166, -33)),
    dark(falling, 35, [
      Point(189, -17), Point(187, -12), Point(186, -5), Point(186, 2), Point(187, 10),
      Point(190, 17), Point(195, 23), Point(200, 28), Point(205, 32), Point(203, 27),
      Point(200, 21), Point(197, 14), Point(195, 7), Point(193, 1), Point(192, -6),
      Point(190, -12),
    ]),
    dark(falling, 35, [
      Point(197, 38), Point(194, 44), Point(189, 52), Point(183, 59), Point(177, 65),
      Point(170, 72), Point(161, 79), Point(152, 85), Point(145, 89), Point(149, 83),
      Point(155, 74), Point(162, 65), Point(169, 58), Point(177, 51), Point(185, 46),
      Point(192, 41),
    ]),
    lit(falling, 36, [
      Point(183, 1), Point(180, -1), Point(175, -3), Point(169, -4), Point(165, -4),
      Point(160, -4), Point(155, -3), Point(149, -2), Point(145, 0), Point(148, 1),
      Point(154, 2), Point(159, 4), Point(165, 4), Point(170, 4), Point(175, 3),
      Point(180, 2),
    ]),
  ]
}

// A cap of tight curls over the crown and the back of his head: the ear,
// jaw and nape stay bare.
fn hair() -> List(Path) {
  list.flatten([
    [Path(falling(curl_base(Polygon([
        Point(282, -33), Point(279, -38), Point(276, -43), Point(273, -46),
        Point(269, -50), Point(265, -53), Point(261, -55), Point(256, -57),
        Point(252, -58), Point(247, -59), Point(242, -59), Point(237, -58),
        Point(232, -58), Point(227, -57), Point(223, -55), Point(219, -54),
        Point(215, -52), Point(212, -50), Point(209, -47), Point(206, -45),
        Point(204, -42), Point(202, -40), Point(200, -37), Point(199, -34),
        Point(199, -30), Point(198, -27), Point(198, -24), Point(199, -20),
        Point(200, -17), Point(201, -13), Point(202, -9), Point(203, -6), Point(205, -2),
        Point(206, 1), Point(208, 5), Point(210, 8), Point(211, 11), Point(213, 13),
        Point(215, 15), Point(217, 17), Point(220, 19), Point(222, 21), Point(225, 22),
        Point(227, 22), Point(230, 23), Point(233, 23), Point(236, 23), Point(239, 23),
        Point(242, 22), Point(245, 22), Point(248, 21), Point(252, 20), Point(255, 20),
        Point(258, 19), Point(261, 18), Point(264, 16), Point(267, 14), Point(270, 12),
        Point(273, 10), Point(276, 7), Point(278, 4), Point(281, 1), Point(283, -3),
        Point(284, -8), Point(285, -12), Point(285, -18), Point(285, -23), Point(284, -28),
      ]))), 40, 44, 0)],
    [lit(falling, 41, [
        Point(277, -33), Point(276, -34), Point(275, -35), Point(275, -36),
        Point(274, -37), Point(273, -38), Point(273, -39), Point(272, -40),
        Point(271, -41), Point(271, -42), Point(270, -43), Point(269, -44),
        Point(268, -45), Point(267, -45), Point(267, -46), Point(266, -47),
        Point(265, -48), Point(264, -48), Point(263, -49), Point(262, -49),
        Point(261, -50), Point(260, -50), Point(259, -51), Point(258, -51),
        Point(257, -52), Point(256, -52), Point(255, -53), Point(254, -53),
        Point(253, -53), Point(252, -53), Point(251, -54), Point(250, -54),
        Point(249, -54), Point(248, -54), Point(247, -54), Point(246, -54),
        Point(245, -54), Point(244, -54), Point(243, -54), Point(241, -54),
        Point(240, -54), Point(239, -54), Point(238, -54), Point(237, -54),
        Point(236, -54), Point(235, -54), Point(234, -53), Point(232, -53),
        Point(231, -53), Point(230, -53), Point(229, -52), Point(228, -52),
        Point(227, -52), Point(226, -52), Point(225, -51), Point(224, -51),
        Point(223, -50), Point(222, -50), Point(221, -50), Point(220, -49),
        Point(219, -49), Point(219, -48), Point(218, -48), Point(217, -48),
        Point(216, -47), Point(215, -47), Point(215, -46), Point(214, -46),
        Point(213, -45), Point(212, -44), Point(211, -44), Point(211, -43),
        Point(210, -43), Point(214, -40), Point(222, -35), Point(235, -28),
        Point(252, -19), Point(265, -12), Point(274, -8), Point(279, -6), Point(279, -7),
        Point(279, -8), Point(280, -9), Point(280, -10), Point(280, -11), Point(280, -12),
        Point(280, -14), Point(280, -15), Point(281, -16), Point(281, -17),
        Point(281, -18), Point(281, -20), Point(280, -21), Point(280, -22),
        Point(280, -23), Point(280, -24), Point(280, -25), Point(279, -26),
        Point(277, -26), Point(274, -26), Point(271, -25), Point(269, -24),
        Point(267, -23), Point(267, -22), Point(268, -22), Point(269, -21),
        Point(269, -20), Point(270, -20), Point(271, -19), Point(272, -18),
        Point(272, -17), Point(273, -16), Point(274, -15), Point(274, -14),
        Point(275, -13), Point(275, -12), Point(276, -11), Point(276, -10), Point(276, -9),
        Point(277, -8), Point(277, -6), Point(273, -8), Point(265, -12), Point(253, -18),
        Point(236, -27), Point(224, -33), Point(216, -38), Point(212, -40),
        Point(213, -40), Point(214, -40), Point(215, -40), Point(216, -40),
        Point(217, -40), Point(218, -40), Point(219, -40), Point(220, -40),
        Point(221, -40), Point(222, -40), Point(223, -40), Point(224, -40),
        Point(225, -40), Point(226, -40), Point(227, -40), Point(228, -40),
        Point(229, -40), Point(230, -40), Point(231, -40), Point(232, -39),
        Point(233, -39), Point(234, -39), Point(235, -39), Point(236, -39),
        Point(237, -39), Point(238, -39), Point(239, -38), Point(240, -38),
        Point(241, -38), Point(242, -37), Point(243, -37), Point(244, -37),
        Point(245, -36), Point(246, -36), Point(247, -35), Point(248, -35),
        Point(248, -34), Point(249, -34), Point(249, -33), Point(250, -33),
        Point(251, -32), Point(252, -32), Point(253, -31), Point(254, -31),
        Point(255, -30), Point(256, -30), Point(256, -29), Point(257, -29),
        Point(258, -28), Point(259, -28), Point(259, -27), Point(260, -27),
        Point(261, -26), Point(262, -25), Point(263, -26), Point(266, -26),
        Point(268, -27), Point(272, -29), Point(275, -30), Point(276, -32),
      ])],
    curl(Point(204, -6), 6, 42),
    curl(Point(202, -14), 3, 42),
    curl(Point(208, 2), 4, 42),
    curl(Point(200, -22), 5, 42),
    curl(Point(212, 10), 6, 42),
    curl(Point(200, -31), 5, 42),
    curl(Point(218, 16), 4, 42),
    curl(Point(203, -38), 4, 42),
    curl(Point(225, 21), 6, 42),
    curl(Point(208, -45), 4, 42),
    curl(Point(233, 22), 4, 43),
    curl(Point(215, -50), 6, 43),
    curl(Point(242, 21), 5, 43),
    curl(Point(223, -54), 5, 43),
    curl(Point(250, 20), 6, 43),
    curl(Point(231, -56), 7, 43),
    curl(Point(259, 17), 4, 43),
    curl(Point(239, -58), 6, 43),
    curl(Point(266, 14), 4, 43),
    curl(Point(248, -57), 4, 43),
    curl(Point(273, 9), 5, 44),
    curl(Point(256, -56), 6, 44),
    curl(Point(279, 2), 5, 44),
    curl(Point(264, -52), 7, 44),
    curl(Point(282, -6), 6, 44),
    curl(Point(271, -47), 6, 44),
    curl(Point(284, -14), 5, 44),
    curl(Point(276, -40), 6, 44),
    curl(Point(284, -23), 6, 44),
    curl(Point(281, -33), 4, 44),
    curl(Point(281, -31), 5, 45),
    ringlet(Point(210, -14), 3, 295, 44),
    ringlet(Point(215, -1), 3, 272, 44),
    ringlet(Point(207, -23), 3, 55, 44),
    ringlet(Point(218, 6), 4, 2, 44),
    ringlet(Point(212, -10), 5, 115, 44),
    ringlet(Point(206, -31), 3, 32, 44),
    ringlet(Point(228, 15), 3, 114, 44),
    ringlet(Point(219, -8), 4, 1, 44),
    ringlet(Point(212, -28), 4, 53, 44),
    ringlet(Point(216, -21), 5, 270, 44),
    ringlet(Point(210, -37), 4, 291, 45),
    ringlet(Point(226, 6), 3, 118, 45),
    ringlet(Point(224, 0), 4, 109, 45),
    ringlet(Point(219, -16), 5, 265, 45),
    ringlet(Point(231, 2), 4, 226, 45),
    ringlet(Point(229, -5), 4, 352, 45),
    ringlet(Point(236, 15), 3, 283, 45),
    ringlet(Point(218, -34), 3, 19, 45),
    ringlet(Point(221, -27), 4, 280, 45),
    ringlet(Point(234, 9), 4, 345, 45),
    ringlet(Point(216, -43), 3, 216, 46),
    ringlet(Point(227, -13), 5, 251, 46),
    ringlet(Point(225, -20), 3, 91, 46),
    ringlet(Point(220, -48), 5, 96, 46),
    ringlet(Point(226, -34), 3, 266, 46),
    ringlet(Point(224, -40), 5, 241, 46),
    ringlet(Point(242, 10), 3, 20, 46),
    ringlet(Point(232, -20), 4, 325, 46),
    ringlet(Point(238, -4), 4, 74, 46),
    ringlet(Point(230, -26), 3, 349, 46),
    ringlet(Point(240, 1), 3, 68, 47),
    ringlet(Point(235, -13), 4, 312, 47),
    ringlet(Point(245, -3), 4, 1, 47),
    ringlet(Point(230, -46), 4, 215, 47),
    ringlet(Point(248, 3), 4, 234, 47),
    ringlet(Point(240, -19), 5, 57, 47),
    ringlet(Point(235, -32), 4, 46, 47),
    ringlet(Point(243, -12), 4, 199, 47),
    ringlet(Point(232, -41), 3, 157, 47),
    ringlet(Point(238, -25), 4, 280, 47),
    ringlet(Point(252, 11), 5, 208, 48),
    ringlet(Point(242, -30), 3, 301, 48),
    ringlet(Point(253, -1), 4, 199, 48),
    ringlet(Point(249, -10), 3, 262, 48),
    ringlet(Point(236, -46), 4, 129, 48),
    ringlet(Point(256, 4), 4, 162, 48),
    ringlet(Point(245, -25), 5, 359, 48),
    ringlet(Point(249, -16), 4, 1, 48),
    ringlet(Point(241, -38), 5, 168, 48),
    ringlet(Point(255, -14), 4, 140, 48),
    ringlet(Point(261, -1), 4, 277, 49),
    ringlet(Point(245, -43), 3, 218, 49),
    ringlet(Point(248, -37), 3, 325, 49),
    ringlet(Point(254, -22), 5, 236, 49),
    ringlet(Point(243, -52), 4, 313, 49),
    ringlet(Point(251, -32), 3, 194, 49),
    ringlet(Point(260, -9), 3, 240, 49),
    ringlet(Point(265, 5), 3, 91, 49),
    ringlet(Point(260, -21), 3, 107, 49),
    ringlet(Point(270, 0), 4, 288, 49),
    ringlet(Point(253, -45), 3, 273, 50),
    ringlet(Point(251, -51), 3, 64, 50),
    ringlet(Point(265, -15), 5, 19, 50),
    ringlet(Point(260, -29), 3, 139, 50),
    ringlet(Point(268, -8), 4, 64, 50),
    ringlet(Point(257, -38), 4, 154, 50),
    ringlet(Point(261, -41), 3, 49, 50),
    ringlet(Point(263, -34), 5, 109, 50),
    ringlet(Point(274, -7), 3, 334, 50),
    ringlet(Point(258, -50), 3, 3, 50),
    ringlet(Point(271, -14), 4, 198, 51),
    ringlet(Point(267, -29), 3, 197, 51),
    ringlet(Point(270, -22), 3, 1, 51),
    ringlet(Point(271, -33), 3, 330, 51),
    ringlet(Point(276, -20), 3, 104, 51),
    ringlet(Point(268, -42), 4, 43, 51),
    ringlet(Point(275, -26), 4, 146, 51),
  ])
}

fn curl(at: Point, r: Int, t: Int) -> List(Path) {
  [Path(falling(curl_base(Circle(at, r))), t, t + 3, 0)]
}

fn ringlet(at: Point, r: Int, turn: Int, t: Int) -> List(Path) {
  [Path(falling(curl_light(Arc(at, r, turn, turn + 230))), t, t + 4, 2)]
}

// \u2500\u2500 Torn feathers tumble away above him \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn loose_feathers(i: Int) -> List(Path) {
  case i == 33 {
    True -> []
    False -> {
      let x = { i * 237 + i * i * 31 } % 910 - 455
      let y = { i * 161 + i * i * 19 } % 790 - 410
      let rest = loose_feathers(i + 1)
      case { y > 0 - 140 && x > 0 - 420 } || { x > 0 - 200 && x < 120 && y > 0 - 340 } {
        True -> rest
        False -> {
          let base = Point(x, y)
          let angle = i * 67 % 360
          let extent = 30 + i % 5 * 12
          let tip = Point(x + cos(angle, extent), y + sin(angle, extent))
          let f = Leaf(base, tip, 4 + i % 3 * 2)
          let drift = fn(s: Shape) {
            Bounce(Sway(s, base, 43 + i % 4 * 10, 10 + i % 6 * 4), 45 + i % 5 * 16, 12 + i % 5 * 4)
          }
          let t = 58 + i * 2
          list.append([
            Path(drift(loose_fill(f, i)), t, t + 6, 0),
            Path(drift(loose_ink(f)), t + 1, t + 7, 1),
            Path(drift(loose_shaft(Line(base, tip))), t + 2, t + 8, 1),
          ], rest)
        }
      }
    }
  }
}

// \u2500\u2500 The burning sky \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn sky() -> List(Path) {
  [
    Path(
      Filled(
        Polygon([
          Point(-500, -500), Point(500, -500), Point(500, 500),
          Point(-500, 500),
        ]),
        Rgb(12, 23, 48),
      ),
      0, 0, 0,
    ),
    Path(
      Faded(Filled(Circle(Point(145, -255), 690), Rgb(66, 75, 112)), 32),
      0, 0, 0,
    ),
    Path(
      Faded(Filled(Circle(Point(290, -390), 510), Rgb(252, 113, 66)), 21),
      0, 0, 0,
    ),
    Path(
      Faded(Filled(Circle(Point(290, -390), 370), Rgb(255, 161, 69)), 28),
      0, 0, 0,
    ),
    Path(
      Faded(Filled(Circle(Point(290, -390), 245), Rgb(255, 214, 113)), 37),
      0, 0, 0,
    ),
    Path(
      Glow(Filled(Circle(Point(290, -390), 83), Rgb(255, 234, 166)), 80),
      0, 2, 0,
    ),
    Path(
      Faded(Filled(Circle(Point(290, -390), 60), Rgb(255, 250, 210)), 92),
      0, 3, 0,
    ),
    Path(
      Faded(Colored(Arc(Point(290, -390), 104, 0, 360), Rgb(255, 225, 126)), 68),
      0, 9, 3,
    ),
    Path(
      Faded(Colored(Arc(Point(290, -390), 153, 0, 360), Rgb(252, 181, 91)), 28),
      2, 14, 2,
    ),
  ]
}

fn sunrays(k: Int) -> List(Path) {
  case k == 8 {
    True -> []
    False -> {
      let a = 194 + k * 17
      let start = Point(290 + cos(a, 94), -390 + sin(a, 94))
      let far = Point(290 + cos(a, 810), -390 + sin(a, 810))
      let edge = Point(290 + cos(a + 5, 810), -390 + sin(a + 5, 810))
      [
        Path(
          Faded(Filled(Polygon([start, far, edge]), Rgb(255, 187, 98)), 10 + k % 3 * 4),
          1 + k, 15 + k, 0,
        ),
        ..sunrays(k + 1)
      ]
    }
  }
}

fn clouds(k: Int) -> List(Path) {
  case k == 9 {
    True -> []
    False -> {
      let y = -355 + k * 88
      let x = -475 + k * 37 % 150
      let c = Curve(Point(x, y), Point(x + 160, y - 48), Point(x + 385, y + 8))
      [
        Path(
          Sway(Faded(Glow(Colored(c, Rgb(114, 196, 222)), 22), 17), Point(0, 0), 3, 50 + k * 3),
          4 + k * 2, 19 + k * 2, 12,
        ),
        Path(
          Sway(Faded(Colored(c, Rgb(255, 211, 167)), 22), Point(0, 0), 3, 50 + k * 3),
          7 + k * 2, 25 + k * 2, 2,
        ),
        ..clouds(k + 1)
      ]
    }
  }
}

fn rushing_air(k: Int) -> List(Path) {
  case k == 16 {
    True -> []
    False -> {
      let x = { k * 173 + k * k * 29 } % 940 - 470
      let y = { k * 89 + k * k * 31 } % 880 - 450
      let air = Curve(Point(x - 14, y - 95), Point(x + 10, y - 9), Point(x - 32, y + 118))
      [
        Path(
          Bounce(Faded(Colored(air, Rgb(174, 226, 238)), 19 + k % 4 * 5), 95, 8 + k % 5 * 3),
          4 + k * 2, 16 + k * 2, 1 + k % 3,
        ),
        ..rushing_air(k + 1)
      ]
    }
  }
}

// \u2500\u2500 Sparks and rushing air \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn falling_sparks(i: Int) -> List(Path) {
  case i == 40 {
    True -> []
    False -> {
      let x = { i * 199 + i * i * 43 } % 980 - 490
      let y = { i * 113 + i * i * 11 } % 870 - 450
      let p = Point(x, y)
      let glow = Glow(Filled(Circle(p, 2 + i % 3), Rgb(255, 169 + i % 5 * 13, 82)), 10 + i % 4 * 6)
      [
        Path(Bounce(Faded(glow, 30 + i % 5 * 12), 22 + i % 5 * 10, 8 + i % 4 * 3), 65 + i, 72 + i, 0),
        ..falling_sparks(i + 1)
      ]
    }
  }
}

// Last paths finish much later: the falling/flapping action stays visible
// for about 30 seconds. Enable the app's Loop toggle for endless motion.
fn speed_trails(i: Int) -> List(Path) {
  case i == 10 {
    True -> []
    False -> {
      let x = -465 + i * 105
      let y = -410 + i * 39 % 180
      let air = Curve(
        Point(x, y),
        Point(x - 25, y + 230),
        Point(x - 55, y + 650),
      )
      [
        Path(
          Bounce(Faded(Colored(air, Rgb(205, 231, 235)), 11 + i % 3 * 8), 110, 9 + i % 4 * 4),
          70 + i * 10, 230 + i * 10, 1 + i % 2,
        ),
        ..speed_trails(i + 1)
      ]
    }
  }
}
`],["icarus_falling_charcoal",`// ICARUS \u2014 THE LAST FLIGHT, in charcoal
// Deep black strokes on pale paper, under a black-and-white sun. He
// tumbles backward and down with his bare back to us: curly head thrown
// back, one leg kicked up and bent, the other trailing, one arm reaching
// up, the other hanging with fingers spread, and huge ragged wings rising
// in a U. Charcoal drips run down beneath him.
// Shape slider: 0 = tight wings, 100 = wings thrown wide open.
// For ongoing motion, switch on Loop in the animator.

fn draw(shape_slider: Int) -> List(Path) {
  let spread = shape_slider * 3 / 5
  list.flatten([
    paper(0),
    sun(),
    smudges(0),
    speed_trails(0),
    wing(-1, spread),
    wing(1, spread),
    drips(0),
    figure(),
    loose_feathers(0),
    ash(0),
  ])
}

// \u2500\u2500 Charcoal and paper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

// A smudge of charcoal shadow rubbed in around the figure.
fn halo(s: Shape) -> Shape {
  Faded(Glow(Filled(Colored(s, Rgb(30, 27, 24)), Rgb(30, 27, 24)), 26), 50)
}

fn ink(s: Shape) -> Shape {
  Colored(s, Rgb(10, 9, 8))
}

fn skin(s: Shape) -> Shape {
  Filled(Colored(s, Rgb(158, 150, 138)), Rgb(158, 150, 138))
}

fn shade(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(22, 20, 18)), 58)
}

fn shine(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(252, 250, 244)), 48)
}

fn hatching(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(12, 11, 10)), 62)
}

fn line(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(12, 11, 10)), 78)
}

fn highlight(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(252, 250, 244)), 55)
}

fn curl_base(s: Shape) -> Shape {
  Filled(s, Rgb(30, 28, 26))
}

fn curl_light(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(230, 225, 214)), 55)
}

fn curl_dark(s: Shape) -> Shape {
  Colored(s, Rgb(6, 6, 6))
}

fn bone_glow(s: Shape) -> Shape {
  Faded(Glow(Colored(s, Rgb(40, 37, 34)), 14), 35)
}

fn bone_dark(s: Shape) -> Shape {
  Colored(s, Rgb(10, 9, 8))
}

fn bone_main(s: Shape) -> Shape {
  Colored(s, Rgb(92, 86, 78))
}

fn bone_light(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(240, 236, 226)), 65)
}

fn feather_root(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(12, 11, 10)), 80)
}

fn feather_vane(s: Shape, i: Int) -> Shape {
  let color = case i % 5 {
    0 -> Rgb(28, 26, 24)
    1 -> Rgb(70, 66, 60)
    2 -> Rgb(128, 121, 112)
    3 -> Rgb(236, 231, 221)
    _ -> Rgb(46, 43, 40)
  }
  Faded(Filled(s, color), 82)
}

fn feather_tip(s: Shape) -> Shape {
  Faded(Filled(s, Rgb(250, 247, 240)), 38)
}

fn feather_ink(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(6, 6, 6)), 88)
}

fn feather_shaft(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(240, 236, 226)), 60)
}

fn covert_fill(s: Shape, i: Int) -> Shape {
  let color = case i % 4 {
    0 -> Rgb(236, 231, 221)
    1 -> Rgb(132, 126, 117)
    2 -> Rgb(40, 37, 34)
    _ -> Rgb(200, 194, 184)
  }
  Faded(Filled(s, color), 85)
}

fn covert_ink(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(8, 8, 8)), 72)
}

fn rib(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(245, 241, 232)), 42)
}

fn loose_fill(s: Shape, i: Int) -> Shape {
  let color = case i % 4 {
    0 -> Rgb(246, 243, 235)
    1 -> Rgb(92, 87, 80)
    2 -> Rgb(30, 28, 26)
    _ -> Rgb(176, 170, 160)
  }
  Faded(Filled(s, color), 90)
}

fn loose_ink(s: Shape) -> Shape {
  Colored(s, Rgb(8, 8, 8))
}

fn loose_shaft(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(245, 241, 232)), 62)
}

// \u2500\u2500 The paper \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

// Pale paper, a little darker toward the edges: stacked see-through
// circles of light over a grey ground.
fn paper(i: Int) -> List(Path) {
  case i == 11 {
    True -> [
      Path(
        Filled(
          Polygon([Point(-500, -500), Point(500, -500), Point(500, 500), Point(-500, 500)]),
          Rgb(150, 144, 134),
        ),
        0,
        0,
        0,
      ),
    ]
    False ->
      list.append(paper(i + 1), [
        Path(
          Faded(Filled(Circle(Point(20, 0), 220 + i * 52), Rgb(242, 238, 228)), 22),
          0,
          0,
          0,
        ),
      ])
  }
}

// The sun, drawn like an engraving: a blazing white disk on a smudge of
// grey, ringed in ink, with long and short rays that slowly turn.
fn sun() -> List(Path) {
  let c = Point(300, -360)
  list.flatten([
    [
      Path(Faded(Filled(Circle(c, 150), Rgb(110, 104, 96)), 28), 0, 3, 0),
      Path(Faded(Glow(Filled(Circle(c, 118), Rgb(255, 255, 255)), 40), 70), 0, 4, 0),
      Path(Glow(Filled(Circle(c, 78), Rgb(255, 255, 252)), 30), 0, 6, 0),
      Path(Colored(Arc(c, 78, 0, 360), Rgb(12, 11, 10)), 2, 10, 4),
      Path(Faded(Colored(Arc(c, 92, 0, 360), Rgb(12, 11, 10)), 60), 4, 12, 2),
      Path(Faded(Colored(Arc(c, 106, 0, 360), Rgb(12, 11, 10)), 30), 6, 14, 1),
    ],
    sun_rays(0, c),
  ])
}

fn sun_rays(k: Int, c: Point) -> List(Path) {
  case k == 24 {
    True -> []
    False -> {
      let a = k * 15
      let reach = case k % 2 == 0 {
        True -> 235
        False -> 160
      }
      let start = Point(c.x + cos(a, 120), c.y + sin(a, 120))
      let end = Point(c.x + cos(a, reach), c.y + sin(a, reach))
      [
        Path(
          Sway(Faded(Colored(Line(start, end), Rgb(12, 11, 10)), 75 - k % 2 * 30), c, 6, 60),
          4 + k,
          10 + k,
          3 - k % 2,
        ),
        ..sun_rays(k + 1, c)
      ]
    }
  }
}

// Broad, soft smudges of charcoal rubbed into the paper behind him.
fn smudges(k: Int) -> List(Path) {
  case k == 7 {
    True -> []
    False -> {
      let x = { k * 251 + k * k * 37 } % 700 - 380
      let y = { k * 173 + k * k * 23 } % 520 - 260
      let stroke = Curve(Point(x, y), Point(x + 90, y + 40 - k * 9), Point(x + 210, y + 10))
      [
        Path(
          Faded(Glow(Colored(stroke, Rgb(70, 66, 60)), 34), 10 + k % 3 * 5),
          2 + k,
          10 + k,
          36 + k % 3 * 14,
        ),
        ..smudges(k + 1)
      ]
    }
  }
}

// Charcoal dust running down the paper beneath him, as if dripping: each
// drip creeps slowly downward as it is drawn.
fn drips(k: Int) -> List(Path) {
  case k == 16 {
    True -> []
    False -> {
      let x = 0 - 110 + k * 17 + k * k * 7 % 23
      let top = 215 + k * 37 % 60
      let length = 70 + k * 53 % 150
      [
        Path(
          Faded(Colored(Line(Point(x, top), Point(x + k % 3 - 1, top + length)), Rgb(20, 18, 16)), 22 + k % 4 * 12),
          40 + k * 3,
          110 + k * 6,
          1 + k % 4,
        ),
        ..drips(k + 1)
      ]
    }
  }
}

// Flecks of charcoal ash drifting down around him.
fn ash(i: Int) -> List(Path) {
  case i == 34 {
    True -> []
    False -> {
      let x = { i * 199 + i * i * 43 } % 980 - 490
      let y = { i * 113 + i * i * 11 } % 870 - 450
      let fleck = Filled(Circle(Point(x, y), 2 + i % 3), Rgb(18, 16, 15))
      [
        Path(Bounce(Faded(fleck, 30 + i % 5 * 12), 22 + i % 5 * 10, 8 + i % 4 * 3), 65 + i, 72 + i, 0),
        ..ash(i + 1)
      ]
    }
  }
}

// Faint streaks of rushing air.
fn speed_trails(i: Int) -> List(Path) {
  case i == 10 {
    True -> []
    False -> {
      let x = -465 + i * 105
      let y = -410 + i * 39 % 180
      let air = Curve(
        Point(x, y),
        Point(x - 25, y + 230),
        Point(x - 55, y + 650),
      )
      [
        Path(
          Bounce(Faded(Colored(air, Rgb(40, 37, 34)), 8 + i % 3 * 6), 110, 9 + i % 4 * 4),
          70 + i * 10, 230 + i * 10, 1 + i % 2,
        ),
        ..speed_trails(i + 1)
      ]
    }
  }
}

// \u2500\u2500 Motion and geometry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn along(a: Point, b: Point, k: Int, n: Int) -> Point {
  Point(a.x + { b.x - a.x } * k / n, a.y + { b.y - a.y } * k / n)
}

// The whole figure heaves and rolls as one, while each limb flails on its
// own beat around the joint where it meets the body.
fn falling(s: Shape) -> Shape {
  Bounce(Sway(s, Point(0, 20), 4, 46), 19, 27)
}

fn flail(s: Shape, joint: Point, degrees: Int, period: Int) -> Shape {
  Bounce(Sway(s, joint, degrees, period), 19, 27)
}

fn raised_arm(s: Shape) -> Shape {
  flail(s, Point(108, -29), 9, 22)
}

fn hanging_arm(s: Shape) -> Shape {
  flail(s, Point(82, 109), 11, 26)
}

fn kicked_leg(s: Shape) -> Shape {
  flail(s, Point(-100, -49), 6, 31)
}

fn trailing_leg(s: Shape) -> Shape {
  flail(s, Point(-120, 49), 6, 35)
}

// Each wing beats as one, while every feather flutters on its own tempo.
fn wing_motion(s: Shape, side: Int, i: Int) -> Shape {
  let speed = case side == -1 {
    True -> 18
    False -> 23
  }
  Bounce(
    Sway(s, shoulder(side), 7 + i % 3, speed),
    4 + i % 3 * 2,
    13 + i % 5 * 3,
  )
}

// \u2500\u2500 Two huge wings rising in a U behind him \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Each wing is rooted in a shoulder blade. The left one breaks out above
// his back beside the raised arm and sweeps up behind the bent leg; the
// right one breaks out beside his neck and climbs past his head. The right
// wing is ragged: missing feathers.

fn shoulder(side: Int) -> Point {
  case side == -1 {
    True -> Point(92, -46)
    False -> Point(104, 80)
  }
}

fn elbow(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-130 - spread, -175)
    False -> Point(345 + spread, 125)
  }
}

fn wingtip(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-330 - spread, -425)
    False -> Point(370 + spread, -250)
  }
}

fn wing(side: Int, spread: Int) -> List(Path) {
  let a = shoulder(side)
  let b = elbow(side, spread)
  let c = wingtip(side, spread)
  list.flatten([
    wing_bone(a, b, c, side),
    primary_feathers(0, a, b, c, side),
    covert_feathers(0, a, b, side),
    wing_ribs(0, a, b, c, side),
  ])
}

fn wing_bone(a: Point, b: Point, c: Point, side: Int) -> List(Path) {
  let m = fn(s: Shape) { wing_motion(s, side, 0) }
  [
    Path(m(bone_glow(Curve(a, b, c))), 12, 32, 22),
    Path(m(bone_dark(Curve(a, b, c))), 13, 36, 24),
    Path(m(bone_main(Curve(a, b, c))), 14, 35, 7),
    Path(m(bone_light(Curve(a, b, c))), 15, 35, 2),
  ]
}

// Main flight feathers: layered dark roots, toned vanes, bright shafts.
fn primary_feathers(i: Int, a: Point, b: Point, c: Point, side: Int) -> List(Path) {
  case i == 24 {
    True -> []
    False -> {
      let remaining = primary_feathers(i + 1, a, b, c, side)
      case side == 1 && { i == 13 || i == 18 || i == 22 } {
        True -> remaining
        False -> {
          let base = case i < 12 {
            True -> along(a, b, i, 12)
            False -> along(b, c, i - 12, 12)
          }
          let angle = case side == -1 {
            True -> 160 + i * 80 / 23
            False -> 346 - i * 71 / 23
          }
          let length = 90 + i * { 24 - i } / 3 + i % 5 * 9
          let end = Point(base.x + cos(angle, length), base.y + sin(angle, length))
          let mid = along(base, end, 2, 5)
          let width = 9 + i % 4 * 3
          let feather = Leaf(base, end, width)
          let end_piece = Leaf(mid, end, width * 3 / 4)
          let t = 17 + i * 2
          list.append([
            Path(wing_motion(feather_root(feather), side, i), t, t + 5, 0),
            Path(wing_motion(feather_vane(feather, i), side, i), t, t + 6, 0),
            Path(wing_motion(feather_tip(end_piece), side, i), t + 1, t + 6, 0),
            Path(wing_motion(feather_ink(feather), side, i), t + 1, t + 6, 2),
            Path(wing_motion(feather_shaft(Line(base, end)), side, i), t + 2, t + 8, 2),
          ], remaining)
        }
      }
    }
  }
}

// Short overlapping coverts make the wings look feathered rather than like fans.
fn covert_feathers(i: Int, a: Point, b: Point, side: Int) -> List(Path) {
  case i == 25 {
    True -> []
    False -> {
      let base = along(a, b, i, 27)
      let angle = case side == -1 {
        True -> 172 + i * 56 / 24
        False -> 334 - i * 51 / 24
      }
      let size = 35 + i % 5 * 5
      let tip = Point(base.x + cos(angle, size), base.y + sin(angle, size))
      let feather = Leaf(base, tip, 9 + i % 3 * 2)
      [
        Path(wing_motion(covert_fill(feather, i), side, i + 5), 31 + i, 38 + i, 0),
        Path(wing_motion(covert_ink(feather), side, i + 5), 32 + i, 39 + i, 1),
        ..covert_feathers(i + 1, a, b, side)
      ]
    }
  }
}

fn wing_ribs(i: Int, a: Point, b: Point, c: Point, side: Int) -> List(Path) {
  case i == 12 {
    True -> []
    False -> {
      let root = case i < 6 {
        True -> along(a, b, i, 6)
        False -> along(b, c, i - 6, 6)
      }
      let angle = case side == -1 {
        True -> 182 + i * 5
        False -> 340 - i * 5
      }
      let tip = Point(root.x + cos(angle, 73), root.y + sin(angle, 73))
      [
        Path(wing_motion(rib(Curve(root, along(root, tip, 2, 3), tip)), side, i), 39 + i * 2, 47 + i * 2, 2),
        ..wing_ribs(i + 1, a, b, c, side)
      ]
    }
  }
}

// \u2500\u2500 The figure \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// A bare, muscular man tumbling backward with his back to us, built the way a
// figure drawer builds one: each part (torso, neck, head, thighs, shins,
// feet, arms, hands and every finger) is a smooth outline. All the outlines
// go down first and the body tone over them, so the parts melt into one
// silhouette with one outline around it. Then come the shadows on the side
// away from the sun, the light on the side toward it, the creases where one
// form passes in front of another, hatching, anatomy, and his curls.

fn figure() -> List(Path) {
  list.flatten([
    body(glow_around),
    body(outline),
    body(body_tone),
    form_shadows(),
    form_lights(),
    hatching_strokes(),
    creases(),
    back_anatomy(),
    limb_anatomy(),
    hands_and_feet(),
    wing_roots(),
    head_and_neck(),
    hair(),
  ])
}

fn glow_around(s: Shape, move, t: Int, w: Int) -> Path {
  Path(move(halo(s)), t - 2, t + 4, w + 10)
}

fn outline(s: Shape, move, t: Int, w: Int) -> Path {
  Path(move(ink(s)), t, t + 6, w)
}

// The body tone is filled in without a stroke, whatever the outline width w.
fn body_tone(s: Shape, move, t: Int, w: Int) -> Path {
  Path(move(skin(s)), t, t + 6, 0)
}

fn dark(move, t: Int, points: List(Point)) -> Path {
  Path(move(shade(Polygon(points))), t, t + 6, 0)
}

fn lit(move, t: Int, points: List(Point)) -> Path {
  Path(move(shine(Polygon(points))), t, t + 6, 0)
}

fn mark(move, t: Int, w: Int, a: Point, c: Point, b: Point) -> Path {
  Path(move(line(Curve(a, c, b))), t, t + 3, w)
}

fn glint(move, t: Int, w: Int, a: Point, c: Point, b: Point) -> Path {
  Path(move(highlight(Curve(a, c, b))), t, t + 3, w)
}

fn hatch(move, t: Int, a: Point, b: Point) -> Path {
  Path(move(hatching(Line(a, b))), t, t + 2, 1)
}

fn body(paint) -> List(Path) {
  [
    paint(torso(), falling, 4, 9),
    paint(neck(), falling, 6, 9),
    paint(head(), falling, 8, 8),
    paint(kicked_thigh(), kicked_leg, 6, 9),
    paint(kicked_shin(), kicked_leg, 8, 9),
    paint(trailing_thigh(), trailing_leg, 6, 9),
    paint(trailing_shin(), trailing_leg, 8, 9),
    paint(raised_upper_arm(), raised_arm, 6, 9),
    paint(raised_forearm(), raised_arm, 8, 9),
    paint(hanging_upper_arm(), hanging_arm, 6, 9),
    paint(hanging_forearm(), hanging_arm, 8, 9),
    paint(kicked_foot(), kicked_leg, 10, 7),
    paint(trailing_foot(), trailing_leg, 10, 7),
    paint(raised_palm(), raised_arm, 10, 7),
    paint(hanging_palm(), hanging_arm, 10, 7),
    paint(raised_index(), raised_arm, 11, 5),
    paint(raised_middle(), raised_arm, 11, 5),
    paint(raised_ring(), raised_arm, 11, 5),
    paint(raised_little(), raised_arm, 11, 5),
    paint(raised_thumb(), raised_arm, 11, 5),
    paint(hanging_index(), hanging_arm, 11, 5),
    paint(hanging_middle(), hanging_arm, 11, 5),
    paint(hanging_ring(), hanging_arm, 11, 5),
    paint(hanging_little(), hanging_arm, 11, 5),
    paint(hanging_thumb(), hanging_arm, 11, 5),
    paint(kicked_big_toe(), kicked_leg, 11, 5),
    paint(kicked_second_toe(), kicked_leg, 11, 5),
    paint(kicked_third_toe(), kicked_leg, 11, 5),
    paint(kicked_fourth_toe(), kicked_leg, 11, 5),
    paint(kicked_little_toe(), kicked_leg, 11, 5),
    paint(trailing_big_toe(), trailing_leg, 11, 5),
    paint(trailing_second_toe(), trailing_leg, 11, 5),
    paint(trailing_third_toe(), trailing_leg, 11, 5),
    paint(trailing_fourth_toe(), trailing_leg, 11, 5),
    paint(trailing_little_toe(), trailing_leg, 11, 5),
  ]
}

fn torso() -> Shape {
  Polygon([
    Point(108, -74), Point(97, -78), Point(91, -79), Point(81, -78), Point(64, -75),
    Point(18, -64), Point(-6, -58), Point(-29, -55), Point(-45, -54), Point(-60, -55),
    Point(-78, -58), Point(-95, -64), Point(-114, -72), Point(-128, -76), Point(-140, -76),
    Point(-152, -73), Point(-164, -66), Point(-174, -56), Point(-187, -38),
    Point(-193, -24), Point(-195, -16), Point(-194, -9), Point(-192, -1), Point(-188, 8),
    Point(-189, 11), Point(-194, 20), Point(-197, 33), Point(-197, 45), Point(-193, 56),
    Point(-186, 68), Point(-176, 78), Point(-164, 86), Point(-149, 92), Point(-138, 94),
    Point(-122, 94), Point(-99, 91), Point(-57, 83), Point(-46, 82), Point(-34, 84),
    Point(1, 92), Point(42, 107), Point(60, 115), Point(81, 128), Point(94, 133),
    Point(109, 136), Point(119, 134), Point(125, 131), Point(133, 122), Point(140, 111),
    Point(145, 99), Point(149, 87), Point(152, 70), Point(153, 59), Point(153, 43),
    Point(151, 28), Point(147, 10), Point(131, -41), Point(124, -58), Point(120, -64),
    Point(116, -69),
  ])
}

fn neck() -> Shape {
  Polygon([
    Point(191, -18), Point(173, -15), Point(166, -15), Point(160, -17), Point(153, -22),
    Point(142, -35), Point(131, -50), Point(121, -66), Point(119, -68), Point(116, -68),
    Point(109, -61), Point(106, -55), Point(104, -46), Point(103, -35), Point(103, -8),
    Point(104, 6), Point(110, 50), Point(112, 65), Point(112, 104), Point(113, 114),
    Point(115, 122), Point(118, 128), Point(121, 132), Point(125, 133), Point(128, 132),
    Point(136, 124), Point(142, 112), Point(157, 78), Point(167, 62), Point(182, 48),
    Point(212, 29), Point(214, 26), Point(216, 17), Point(215, 10), Point(212, -2),
    Point(208, -7), Point(200, -16), Point(195, -17),
  ])
}

fn head() -> Shape {
  Polygon([
    Point(273, -30), Point(268, -39), Point(261, -45), Point(254, -49), Point(241, -52),
    Point(231, -52), Point(218, -49), Point(207, -43), Point(199, -36), Point(194, -31),
    Point(192, -25), Point(190, -14), Point(191, -1), Point(198, 27), Point(198, 34),
    Point(197, 41), Point(199, 47), Point(203, 49), Point(213, 49), Point(225, 47),
    Point(234, 44), Point(254, 33), Point(262, 28), Point(268, 21), Point(275, 11),
    Point(279, -2), Point(278, -16),
  ])
}

fn kicked_thigh() -> Shape {
  Polygon([
    Point(-79, -18), Point(-61, -39), Point(-54, -51), Point(-46, -65), Point(-27, -114),
    Point(0, -187), Point(2, -198), Point(1, -208), Point(-5, -216), Point(-13, -221),
    Point(-18, -222), Point(-25, -221), Point(-32, -218), Point(-37, -213),
    Point(-74, -158), Point(-115, -101), Point(-130, -76), Point(-135, -63),
    Point(-141, -31), Point(-142, -24), Point(-141, -18), Point(-139, -12),
    Point(-135, -6), Point(-131, -2), Point(-125, 2), Point(-119, 4), Point(-109, 4),
    Point(-103, 3), Point(-94, -2),
  ])
}

fn kicked_shin() -> Shape {
  Polygon([
    Point(-10, -220), Point(-42, -246), Point(-91, -281), Point(-114, -299),
    Point(-118, -301), Point(-122, -301), Point(-127, -299), Point(-130, -296),
    Point(-131, -293), Point(-131, -289), Point(-129, -283), Point(-105, -257),
    Point(-74, -210), Point(-66, -202), Point(-57, -195), Point(-44, -188),
    Point(-27, -180), Point(-18, -179), Point(-11, -181), Point(-7, -183), Point(-2, -189),
    Point(0, -193), Point(1, -200), Point(-1, -209),
  ])
}

fn trailing_thigh() -> Shape {
  Polygon([
    Point(-106, 12), Point(-129, 10), Point(-145, 12), Point(-162, 14), Point(-200, 23),
    Point(-306, 49), Point(-313, 52), Point(-319, 60), Point(-322, 69), Point(-321, 76),
    Point(-318, 83), Point(-313, 88), Point(-306, 91), Point(-298, 93), Point(-270, 93),
    Point(-192, 96), Point(-162, 96), Point(-135, 93), Point(-112, 87), Point(-82, 77),
    Point(-72, 72), Point(-67, 67), Point(-63, 61), Point(-60, 55), Point(-59, 47),
    Point(-59, 40), Point(-62, 33), Point(-68, 24), Point(-73, 20), Point(-83, 15),
  ])
}

fn trailing_shin() -> Shape {
  Polygon([
    Point(-321, 65), Point(-340, 103), Point(-363, 160), Point(-375, 187),
    Point(-376, 190), Point(-375, 195), Point(-372, 199), Point(-369, 201),
    Point(-365, 201), Point(-361, 201), Point(-356, 197), Point(-336, 167),
    Point(-298, 125), Point(-291, 115), Point(-287, 105), Point(-283, 91), Point(-279, 72),
    Point(-280, 63), Point(-284, 57), Point(-287, 53), Point(-293, 50), Point(-298, 49),
    Point(-305, 50), Point(-311, 53), Point(-315, 56),
  ])
}

fn raised_upper_arm() -> Shape {
  Polygon([
    Point(140, -19), Point(140, -36), Point(138, -50), Point(135, -59), Point(122, -91),
    Point(107, -143), Point(103, -148), Point(96, -153), Point(90, -154), Point(82, -152),
    Point(75, -147), Point(72, -141), Point(72, -137), Point(70, -82), Point(78, -26),
    Point(82, -10), Point(87, 6), Point(91, 11), Point(95, 16), Point(103, 20),
    Point(112, 22), Point(118, 21), Point(124, 19), Point(131, 14), Point(137, 6),
    Point(139, -3),
  ])
}

fn raised_forearm() -> Shape {
  Polygon([
    Point(107, -148), Point(104, -160), Point(100, -170), Point(74, -217), Point(64, -237),
    Point(62, -240), Point(58, -242), Point(54, -242), Point(50, -241), Point(46, -237),
    Point(45, -230), Point(52, -204), Point(64, -151), Point(68, -138), Point(75, -126),
    Point(80, -120), Point(87, -117), Point(93, -117), Point(101, -120), Point(106, -126),
    Point(108, -132), Point(108, -136),
  ])
}

fn hanging_upper_arm() -> Shape {
  Polygon([
    Point(48, 107), Point(58, 130), Point(86, 178), Point(124, 229), Point(130, 235),
    Point(135, 238), Point(144, 238), Point(151, 235), Point(155, 230), Point(158, 225),
    Point(158, 218), Point(157, 212), Point(136, 158), Point(124, 120), Point(120, 109),
    Point(112, 96), Point(94, 71), Point(84, 62), Point(76, 58), Point(70, 57),
    Point(64, 58), Point(58, 60), Point(53, 63), Point(48, 67), Point(45, 72),
    Point(42, 81), Point(42, 90),
  ])
}

fn hanging_forearm() -> Shape {
  Polygon([
    Point(130, 237), Point(143, 254), Point(187, 299), Point(208, 322), Point(211, 324),
    Point(216, 325), Point(220, 324), Point(223, 322), Point(225, 316), Point(224, 310),
    Point(210, 289), Point(178, 234), Point(167, 220), Point(160, 213), Point(151, 205),
    Point(145, 202), Point(137, 202), Point(130, 205), Point(124, 211), Point(122, 219),
    Point(124, 227),
  ])
}

fn kicked_foot() -> Shape {
  Polygon([
    Point(-111, -299), Point(-132, -312), Point(-161, -325), Point(-168, -325),
    Point(-172, -322), Point(-174, -318), Point(-174, -307), Point(-172, -299),
    Point(-169, -293), Point(-162, -288), Point(-146, -281), Point(-132, -268),
    Point(-127, -265), Point(-120, -264), Point(-116, -266), Point(-111, -270),
    Point(-107, -276), Point(-105, -282), Point(-105, -288), Point(-107, -295),
  ])
}

fn trailing_foot() -> Shape {
  Polygon([
    Point(-369, 178), Point(-390, 192), Point(-414, 213), Point(-417, 218),
    Point(-416, 224), Point(-413, 227), Point(-403, 232), Point(-395, 233),
    Point(-389, 233), Point(-381, 229), Point(-368, 217), Point(-351, 210),
    Point(-345, 206), Point(-342, 201), Point(-341, 197), Point(-343, 190),
    Point(-347, 185), Point(-353, 179), Point(-357, 177), Point(-364, 176),
  ])
}

fn raised_palm() -> Shape {
  Polygon([
    Point(43, -230), Point(34, -249), Point(33, -256), Point(33, -262), Point(35, -266),
    Point(42, -271), Point(47, -273), Point(54, -273), Point(59, -269), Point(63, -260),
    Point(66, -249), Point(66, -237), Point(62, -234), Point(53, -229), Point(45, -229),
  ])
}

fn hanging_palm() -> Shape {
  Polygon([
    Point(205, 323), Point(213, 341), Point(218, 348), Point(222, 352), Point(227, 353),
    Point(235, 351), Point(240, 349), Point(244, 343), Point(245, 337), Point(241, 328),
    Point(235, 319), Point(226, 311), Point(221, 311), Point(212, 315), Point(208, 317),
    Point(206, 320),
  ])
}

fn raised_index() -> Shape {
  Polygon([
    Point(58, -268), Point(54, -303), Point(53, -305), Point(50, -306), Point(48, -305),
    Point(47, -301), Point(48, -284), Point(49, -266), Point(51, -263), Point(54, -262),
    Point(57, -264),
  ])
}

fn raised_middle() -> Shape {
  Polygon([
    Point(51, -270), Point(44, -298), Point(43, -307), Point(42, -309), Point(39, -310),
    Point(38, -309), Point(37, -307), Point(37, -301), Point(38, -285), Point(42, -268),
    Point(43, -264), Point(46, -263), Point(48, -263), Point(51, -265),
  ])
}

fn raised_ring() -> Shape {
  Polygon([
    Point(45, -267), Point(37, -289), Point(34, -302), Point(32, -303), Point(30, -303),
    Point(29, -302), Point(28, -301), Point(29, -291), Point(31, -280), Point(37, -264),
    Point(39, -261), Point(41, -260), Point(43, -261), Point(45, -263),
  ])
}

fn raised_little() -> Shape {
  Polygon([
    Point(40, -261), Point(32, -276), Point(29, -286), Point(27, -288), Point(25, -287),
    Point(23, -285), Point(25, -277), Point(27, -269), Point(33, -258), Point(36, -255),
    Point(39, -255), Point(40, -256), Point(41, -258),
  ])
}

fn raised_thumb() -> Shape {
  Polygon([
    Point(71, -241), Point(75, -249), Point(77, -256), Point(80, -269), Point(80, -280),
    Point(79, -281), Point(77, -283), Point(74, -283), Point(72, -280), Point(68, -265),
    Point(58, -240), Point(58, -237), Point(60, -234), Point(65, -234), Point(67, -235),
  ])
}

fn hanging_index() -> Shape {
  Polygon([
    Point(237, 345), Point(256, 360), Point(267, 371), Point(270, 371), Point(272, 370),
    Point(273, 369), Point(272, 366), Point(265, 357), Point(256, 349), Point(242, 338),
    Point(239, 336), Point(235, 337), Point(234, 339), Point(234, 342),
  ])
}

fn hanging_middle() -> Shape {
  Polygon([
    Point(232, 349), Point(252, 375), Point(259, 385), Point(261, 386), Point(263, 385),
    Point(265, 384), Point(265, 382), Point(263, 379), Point(255, 365), Point(240, 344),
    Point(236, 341), Point(234, 341), Point(232, 342), Point(230, 346),
  ])
}

fn hanging_ring() -> Shape {
  Polygon([
    Point(226, 350), Point(243, 388), Point(245, 390), Point(248, 390), Point(249, 388),
    Point(249, 386), Point(234, 345), Point(231, 343), Point(228, 343), Point(226, 346),
  ])
}

fn hanging_little() -> Shape {
  Polygon([
    Point(220, 347), Point(222, 366), Point(224, 380), Point(225, 381), Point(227, 382),
    Point(228, 381), Point(229, 379), Point(227, 345), Point(226, 343), Point(223, 342),
    Point(221, 344),
  ])
}

fn hanging_thumb() -> Shape {
  Polygon([
    Point(230, 320), Point(251, 323), Point(265, 328), Point(269, 327), Point(270, 324),
    Point(270, 321), Point(268, 320), Point(254, 313), Point(247, 311), Point(240, 309),
    Point(231, 308), Point(224, 308), Point(222, 310), Point(220, 313), Point(221, 316),
    Point(222, 318), Point(225, 319),
  ])
}

fn kicked_big_toe() -> Shape {
  Polygon([
    Point(-157, -325), Point(-166, -331), Point(-179, -337), Point(-183, -337),
    Point(-186, -334), Point(-186, -330), Point(-184, -328), Point(-165, -314),
    Point(-161, -312), Point(-158, -313), Point(-157, -313), Point(-155, -314),
    Point(-154, -317), Point(-154, -321),
  ])
}

fn kicked_second_toe() -> Shape {
  Polygon([
    Point(-163, -317), Point(-172, -321), Point(-181, -324), Point(-184, -323),
    Point(-186, -321), Point(-186, -319), Point(-184, -317), Point(-167, -309),
    Point(-164, -308), Point(-161, -309), Point(-159, -312), Point(-160, -316),
  ])
}

fn kicked_third_toe() -> Shape {
  Polygon([
    Point(-164, -311), Point(-173, -313), Point(-181, -314), Point(-184, -314),
    Point(-185, -311), Point(-184, -309), Point(-183, -308), Point(-166, -303),
    Point(-164, -302), Point(-161, -304), Point(-160, -307), Point(-161, -310),
  ])
}

fn kicked_fourth_toe() -> Shape {
  Polygon([
    Point(-164, -305), Point(-172, -306), Point(-179, -306), Point(-182, -305),
    Point(-182, -302), Point(-181, -300), Point(-180, -299), Point(-162, -297),
    Point(-160, -299), Point(-159, -302), Point(-161, -304),
  ])
}

fn kicked_little_toe() -> Shape {
  Polygon([
    Point(-162, -298), Point(-170, -298), Point(-176, -297), Point(-178, -296),
    Point(-178, -294), Point(-177, -292), Point(-175, -291), Point(-160, -291),
    Point(-158, -293), Point(-158, -296), Point(-160, -298),
  ])
}

fn trailing_big_toe() -> Shape {
  Polygon([
    Point(-412, 209), Point(-422, 215), Point(-433, 223), Point(-434, 227),
    Point(-433, 231), Point(-431, 232), Point(-427, 232), Point(-406, 220),
    Point(-403, 218), Point(-401, 215), Point(-401, 213), Point(-402, 212),
    Point(-404, 209), Point(-407, 208),
  ])
}

fn trailing_second_toe() -> Shape {
  Polygon([
    Point(-408, 217), Point(-415, 224), Point(-422, 231), Point(-422, 234),
    Point(-421, 237), Point(-418, 237), Point(-416, 236), Point(-402, 224),
    Point(-400, 222), Point(-400, 219), Point(-402, 216), Point(-405, 216),
  ])
}

fn trailing_third_toe() -> Shape {
  Polygon([
    Point(-402, 221), Point(-408, 228), Point(-413, 235), Point(-413, 238),
    Point(-412, 240), Point(-410, 240), Point(-407, 239), Point(-396, 227),
    Point(-394, 224), Point(-395, 221), Point(-397, 219), Point(-400, 219),
  ])
}

fn trailing_fourth_toe() -> Shape {
  Polygon([
    Point(-397, 223), Point(-401, 230), Point(-404, 237), Point(-404, 240),
    Point(-402, 241), Point(-401, 241), Point(-399, 240), Point(-389, 226),
    Point(-390, 223), Point(-392, 221), Point(-395, 221),
  ])
}

fn trailing_little_toe() -> Shape {
  Polygon([
    Point(-391, 225), Point(-394, 232), Point(-395, 238), Point(-395, 240),
    Point(-393, 241), Point(-391, 241), Point(-390, 240), Point(-383, 226),
    Point(-384, 223), Point(-387, 222), Point(-389, 223),
  ])
}

// Shadow on every form, on the side turned away from the sun.
fn form_shadows() -> List(Path) {
  [
    dark(falling, 14, [
      Point(-166, -64), Point(-172, -58), Point(-177, -52), Point(-184, -42),
      Point(-188, -34), Point(-192, -28), Point(-194, -22), Point(-194, -18),
      Point(-195, -14), Point(-194, -11), Point(-194, -7), Point(-192, -3), Point(-191, 1),
      Point(-189, 6), Point(-188, 9), Point(-189, 10), Point(-190, 13), Point(-193, 18),
      Point(-195, 23), Point(-196, 30), Point(-197, 36), Point(-197, 42), Point(-196, 42),
      Point(-195, 36), Point(-193, 31), Point(-189, 25), Point(-185, 21), Point(-180, 18),
      Point(-175, 13), Point(-169, 6), Point(-166, -1), Point(-165, -7), Point(-166, -11),
      Point(-168, -13), Point(-171, -14), Point(-174, -15), Point(-178, -16),
      Point(-181, -19), Point(-183, -24), Point(-183, -32), Point(-181, -41),
      Point(-176, -50), Point(-171, -58), Point(-166, -63),
    ]),
    dark(falling, 14, [
      Point(-160, 88), Point(-153, 90), Point(-146, 92), Point(-141, 94), Point(-134, 94),
      Point(-126, 94), Point(-116, 93), Point(-105, 92), Point(-88, 89), Point(-68, 85),
      Point(-54, 83), Point(-49, 82), Point(-43, 82), Point(-37, 84), Point(-25, 86),
      Point(-8, 90), Point(11, 96), Point(32, 103), Point(46, 109), Point(56, 113),
      Point(65, 118), Point(76, 125), Point(77, 123), Point(69, 112), Point(61, 101),
      Point(55, 88), Point(42, 75), Point(22, 63), Point(2, 55), Point(-17, 51),
      Point(-31, 49), Point(-40, 49), Point(-49, 50), Point(-58, 52), Point(-73, 55),
      Point(-94, 59), Point(-109, 61), Point(-119, 62), Point(-127, 64), Point(-133, 67),
      Point(-139, 73), Point(-144, 80), Point(-151, 84), Point(-160, 85),
    ]),
    dark(falling, 16, [
      Point(122, 132), Point(124, 133), Point(126, 133), Point(127, 132), Point(130, 130),
      Point(134, 126), Point(138, 121), Point(140, 115), Point(146, 104), Point(153, 86),
      Point(160, 74), Point(164, 66), Point(171, 58), Point(178, 52), Point(190, 43),
      Point(204, 34), Point(212, 28), Point(214, 27), Point(213, 26), Point(212, 27),
      Point(203, 31), Point(187, 39), Point(175, 47), Point(167, 55), Point(161, 63),
      Point(157, 73), Point(152, 86), Point(145, 103), Point(139, 114), Point(135, 119),
      Point(131, 123), Point(127, 127), Point(125, 129), Point(125, 130), Point(124, 131),
    ]),
    dark(kicked_leg, 18, [
      Point(-130, -288), Point(-130, -284), Point(-123, -276), Point(-111, -264),
      Point(-97, -245), Point(-82, -222), Point(-72, -208), Point(-68, -204),
      Point(-64, -200), Point(-59, -197), Point(-54, -193), Point(-47, -190),
      Point(-40, -186), Point(-31, -182), Point(-31, -183), Point(-38, -189),
      Point(-44, -195), Point(-48, -202), Point(-52, -207), Point(-54, -212),
      Point(-57, -215), Point(-60, -218), Point(-70, -230), Point(-87, -253),
      Point(-103, -269), Point(-119, -280), Point(-127, -286),
    ]),
    dark(trailing_leg, 16, [
      Point(-308, 50), Point(-311, 51), Point(-314, 54), Point(-318, 58), Point(-320, 62),
      Point(-321, 67), Point(-322, 71), Point(-321, 74), Point(-321, 71), Point(-320, 67),
      Point(-318, 63), Point(-316, 59), Point(-314, 55), Point(-311, 52),
    ]),
    dark(trailing_leg, 16, [
      Point(-304, 92), Point(-300, 92), Point(-291, 93), Point(-277, 93), Point(-250, 94),
      Point(-212, 95), Point(-184, 96), Point(-170, 96), Point(-155, 95), Point(-142, 94),
      Point(-129, 92), Point(-118, 88), Point(-118, 87), Point(-130, 88), Point(-143, 86),
      Point(-156, 82), Point(-170, 79), Point(-184, 76), Point(-211, 75), Point(-250, 76),
      Point(-277, 79), Point(-291, 85), Point(-300, 88), Point(-304, 90),
    ]),
    dark(trailing_leg, 18, [
      Point(-360, 200), Point(-357, 198), Point(-351, 190), Point(-341, 174),
      Point(-326, 156), Point(-308, 136), Point(-296, 122), Point(-293, 118),
      Point(-290, 112), Point(-288, 108), Point(-288, 107), Point(-291, 112),
      Point(-295, 116), Point(-299, 120), Point(-310, 133), Point(-329, 154),
      Point(-343, 173), Point(-352, 188), Point(-358, 198),
    ]),
    dark(trailing_leg, 18, [
      Point(-316, 58), Point(-320, 63), Point(-326, 74), Point(-335, 94), Point(-346, 117),
      Point(-357, 146), Point(-366, 167), Point(-372, 180), Point(-375, 188),
      Point(-376, 189), Point(-375, 188), Point(-371, 181), Point(-364, 168),
      Point(-354, 147), Point(-343, 119), Point(-332, 95), Point(-324, 76),
      Point(-318, 63),
    ]),
    dark(raised_arm, 16, [
      Point(72, -140), Point(72, -138), Point(72, -123), Point(70, -96), Point(72, -68),
      Point(76, -40), Point(79, -22), Point(81, -14), Point(82, -14), Point(81, -22),
      Point(80, -40), Point(77, -68), Point(76, -96), Point(75, -123), Point(74, -138),
      Point(73, -140),
    ]),
    dark(raised_arm, 18, [
      Point(46, -235), Point(45, -232), Point(47, -224), Point(50, -210), Point(55, -191),
      Point(61, -164), Point(65, -148), Point(67, -141), Point(70, -135), Point(73, -129),
      Point(76, -124), Point(79, -122), Point(78, -126), Point(77, -131), Point(76, -138),
      Point(75, -144), Point(74, -150), Point(70, -166), Point(63, -193), Point(56, -212),
      Point(50, -224), Point(47, -232),
    ]),
    dark(hanging_arm, 16, [
      Point(44, 94), Point(46, 103), Point(50, 113), Point(56, 124), Point(65, 142),
      Point(79, 166), Point(96, 191), Point(114, 216), Point(126, 230), Point(128, 234),
      Point(131, 236), Point(134, 237), Point(134, 236), Point(133, 233), Point(133, 229),
      Point(134, 223), Point(126, 208), Point(109, 181), Point(93, 157), Point(77, 135),
      Point(65, 119), Point(56, 110), Point(49, 102),
    ]),
    dark(hanging_arm, 18, [
      Point(122, 221), Point(124, 225), Point(126, 230), Point(128, 234), Point(133, 241),
      Point(140, 250), Point(154, 265), Point(176, 288), Point(192, 305), Point(203, 316),
      Point(209, 322), Point(210, 324), Point(211, 323), Point(210, 321), Point(206, 313),
      Point(198, 299), Point(183, 281), Point(163, 257), Point(149, 242), Point(141, 235),
      Point(135, 230), Point(129, 227), Point(126, 224), Point(123, 221),
    ]),
    dark(kicked_leg, 20, [
      Point(-171, -298), Point(-170, -294), Point(-167, -292), Point(-164, -289),
      Point(-158, -286), Point(-150, -283), Point(-142, -278), Point(-136, -271),
      Point(-131, -267), Point(-128, -266), Point(-125, -265), Point(-122, -264),
      Point(-119, -264), Point(-117, -266), Point(-115, -267), Point(-112, -269),
      Point(-110, -272), Point(-108, -274), Point(-108, -275), Point(-111, -272),
      Point(-113, -270), Point(-116, -269), Point(-119, -269), Point(-120, -270),
      Point(-122, -271), Point(-124, -271), Point(-125, -272), Point(-127, -273),
      Point(-131, -277), Point(-138, -284), Point(-146, -289), Point(-155, -292),
      Point(-161, -293), Point(-166, -294), Point(-169, -295),
    ]),
    dark(trailing_leg, 20, [
      Point(-394, 233), Point(-390, 233), Point(-387, 232), Point(-383, 230),
      Point(-378, 226), Point(-371, 220), Point(-364, 215), Point(-355, 212),
      Point(-350, 209), Point(-346, 207), Point(-344, 205), Point(-343, 202),
      Point(-346, 203), Point(-348, 205), Point(-351, 206), Point(-357, 208),
      Point(-366, 212), Point(-373, 217), Point(-380, 223), Point(-384, 228),
      Point(-388, 231), Point(-391, 232),
    ]),
    dark(raised_arm, 20, [
      Point(60, -233), Point(55, -230), Point(51, -229), Point(47, -229), Point(44, -229),
      Point(44, -230), Point(41, -235), Point(36, -244), Point(34, -251), Point(33, -254),
      Point(33, -258), Point(33, -260), Point(34, -263), Point(34, -265), Point(35, -265),
      Point(34, -263), Point(35, -260), Point(36, -258), Point(37, -255), Point(38, -252),
      Point(41, -246), Point(46, -237), Point(47, -233), Point(46, -233), Point(47, -233),
      Point(51, -231), Point(55, -231),
    ]),
    dark(hanging_arm, 20, [
      Point(208, 318), Point(206, 319), Point(206, 321), Point(205, 322), Point(207, 328),
      Point(211, 336), Point(214, 343), Point(217, 346), Point(219, 349), Point(221, 351),
      Point(223, 352), Point(226, 353), Point(226, 352), Point(224, 351), Point(222, 349),
      Point(222, 347), Point(221, 343), Point(219, 340), Point(216, 334), Point(211, 326),
      Point(209, 321), Point(208, 321), Point(208, 320),
    ]),
    dark(falling, 18, [
      Point(-95, -64), Point(-114, -72), Point(-128, -76), Point(-127, -80),
      Point(-111, -80), Point(-93, -68),
    ]),
    dark(falling, 18, [
      Point(-197, 33), Point(-197, 45), Point(-193, 56), Point(-186, 68), Point(-176, 78),
      Point(-164, 86), Point(-149, 92), Point(-150, 94), Point(-167, 91), Point(-181, 84),
      Point(-193, 74), Point(-200, 59), Point(-203, 46), Point(-199, 33),
    ]),
    dark(kicked_leg, 22, [
      Point(-44, -188), Point(-27, -180), Point(-18, -179), Point(-18, -175),
      Point(-30, -171), Point(-46, -184),
    ]),
    dark(trailing_leg, 22, [
      Point(-283, 91), Point(-279, 72), Point(-280, 63), Point(-284, 57), Point(-281, 55),
      Point(-272, 60), Point(-271, 73), Point(-280, 92),
    ]),
    dark(falling, 22, [
      Point(190, -14), Point(191, -1), Point(198, 27), Point(198, 34), Point(195, 34),
      Point(190, 29), Point(183, 1), Point(187, -14),
    ]),
  ]
}

// Light catching the edges turned toward the sun.
fn form_lights() -> List(Path) {
  [
    lit(falling, 16, [
      Point(89, -76), Point(84, -75), Point(77, -74), Point(69, -73), Point(53, -69),
      Point(30, -64), Point(13, -60), Point(1, -57), Point(-11, -54), Point(-23, -53),
      Point(-33, -52), Point(-41, -51), Point(-49, -51), Point(-57, -52), Point(-65, -53),
      Point(-74, -54), Point(-65, -52), Point(-57, -50), Point(-49, -48), Point(-41, -47),
      Point(-32, -47), Point(-22, -48), Point(-10, -49), Point(2, -52), Point(14, -55),
      Point(31, -60), Point(54, -66), Point(69, -70), Point(78, -73), Point(84, -74),
      Point(89, -75),
    ]),
    lit(falling, 16, [
      Point(-118, -70), Point(-125, -72), Point(-131, -73), Point(-137, -73),
      Point(-142, -72), Point(-148, -71), Point(-154, -69), Point(-159, -65),
      Point(-165, -61), Point(-169, -56), Point(-164, -60), Point(-158, -64),
      Point(-153, -66), Point(-147, -68), Point(-142, -69), Point(-137, -70),
      Point(-131, -71), Point(-125, -71),
    ]),
    lit(falling, 18, [
      Point(187, -14), Point(178, -13), Point(171, -12), Point(167, -12), Point(164, -13),
      Point(160, -14), Point(157, -16), Point(153, -18), Point(148, -23), Point(142, -30),
      Point(137, -37), Point(131, -45), Point(131, -44), Point(135, -36), Point(140, -28),
      Point(146, -21), Point(151, -16), Point(155, -13), Point(159, -11), Point(163, -10),
      Point(167, -9), Point(171, -10), Point(178, -11),
    ]),
    lit(kicked_leg, 18, [
      Point(-2, -191), Point(-1, -196), Point(-1, -200), Point(-2, -205), Point(-3, -209),
      Point(-6, -212), Point(-9, -215), Point(-12, -217), Point(-15, -218),
      Point(-17, -219), Point(-16, -218), Point(-13, -216), Point(-11, -213),
      Point(-8, -210), Point(-6, -207), Point(-4, -204), Point(-3, -200), Point(-3, -196),
      Point(-3, -191),
    ]),
    lit(kicked_leg, 20, [
      Point(-6, -210), Point(-10, -215), Point(-20, -224), Point(-36, -237),
      Point(-56, -252), Point(-81, -270), Point(-99, -283), Point(-110, -292),
      Point(-117, -297), Point(-118, -298), Point(-117, -296), Point(-111, -291),
      Point(-100, -281), Point(-82, -268), Point(-58, -250), Point(-38, -235),
      Point(-22, -222), Point(-11, -214),
    ]),
    lit(trailing_leg, 18, [
      Point(-171, 19), Point(-190, 24), Point(-226, 32), Point(-279, 45), Point(-307, 53),
      Point(-310, 54), Point(-312, 56), Point(-315, 60), Point(-312, 57), Point(-309, 55),
      Point(-306, 54), Point(-278, 48), Point(-225, 35), Point(-189, 25), Point(-171, 20),
    ]),
    lit(raised_arm, 18, [
      Point(137, -39), Point(136, -46), Point(134, -51), Point(133, -56), Point(129, -66),
      Point(122, -82), Point(115, -103), Point(108, -129), Point(107, -129),
      Point(114, -103), Point(120, -81), Point(127, -65), Point(131, -55), Point(133, -51),
      Point(134, -46), Point(136, -39),
    ]),
    lit(raised_arm, 20, [
      Point(105, -139), Point(104, -145), Point(103, -150), Point(102, -156),
      Point(100, -161), Point(98, -166), Point(91, -180), Point(78, -204), Point(69, -221),
      Point(64, -231), Point(64, -230), Point(68, -220), Point(76, -203), Point(89, -179),
      Point(97, -165), Point(99, -161), Point(100, -156), Point(102, -150),
      Point(104, -144),
    ]),
    lit(hanging_arm, 20, [
      Point(218, 306), Point(211, 296), Point(199, 277), Point(183, 249), Point(173, 232),
      Point(167, 225), Point(163, 220), Point(160, 217), Point(156, 213), Point(151, 209),
      Point(151, 210), Point(155, 214), Point(158, 218), Point(161, 222), Point(166, 227),
      Point(171, 233), Point(182, 250), Point(198, 278), Point(210, 296),
    ]),
    lit(kicked_leg, 22, [
      Point(-108, -289), Point(-109, -292), Point(-110, -294), Point(-112, -296),
      Point(-118, -300), Point(-128, -306), Point(-141, -313), Point(-155, -319),
      Point(-141, -312), Point(-129, -305), Point(-119, -299), Point(-113, -295),
      Point(-111, -294), Point(-110, -292), Point(-109, -289),
    ]),
    lit(trailing_leg, 22, [
      Point(-344, 196), Point(-345, 193), Point(-347, 190), Point(-348, 188),
      Point(-351, 186), Point(-353, 183), Point(-354, 183), Point(-351, 186),
      Point(-349, 189), Point(-347, 191), Point(-346, 193), Point(-345, 196),
    ]),
  ]
}

// Hatching laid into the deepest shadows.
fn hatching_strokes() -> List(Path) {
  [
    hatch(falling, 26, Point(-134, 92), Point(-129, 85)),
    hatch(falling, 26, Point(-125, 92), Point(-119, 84)),
    hatch(falling, 26, Point(-116, 91), Point(-109, 83)),
    hatch(falling, 26, Point(-106, 90), Point(-100, 82)),
    hatch(falling, 26, Point(-96, 89), Point(-90, 81)),
    hatch(falling, 26, Point(-86, 87), Point(-79, 79)),
    hatch(falling, 26, Point(-75, 85), Point(-69, 77)),
    hatch(falling, 26, Point(-65, 83), Point(-58, 74)),
    hatch(falling, 26, Point(-55, 81), Point(-47, 72)),
    hatch(falling, 26, Point(-45, 80), Point(-38, 72)),
    hatch(falling, 26, Point(-37, 82), Point(-30, 73)),
    hatch(falling, 26, Point(-29, 83), Point(-22, 74)),
    hatch(falling, 26, Point(-22, 84), Point(-15, 76)),
    hatch(falling, 26, Point(-14, 86), Point(-7, 78)),
    hatch(falling, 26, Point(-7, 88), Point(0, 80)),
    hatch(falling, 26, Point(1, 90), Point(7, 82)),
    hatch(falling, 26, Point(8, 92), Point(14, 85)),
    hatch(falling, 26, Point(15, 95), Point(20, 88)),
    hatch(falling, 26, Point(22, 97), Point(27, 91)),
    hatch(falling, 26, Point(29, 99), Point(34, 94)),
    hatch(falling, 26, Point(36, 102), Point(40, 97)),
  ]
}

// Where one form passes in front of another: buttocks over thighs, calves
// against thighs, heels, elbows, wrists, shoulders.
fn creases() -> List(Path) {
  [
    mark(falling, 22, 4, Point(-95, -64), Point(-114, -72), Point(-128, -76)),
    mark(falling, 22, 3, Point(-197, 33), Point(-197, 45), Point(-195, 50)),
    mark(falling, 22, 4, Point(-195, 50), Point(-193, 56), Point(-190, 62)),
    mark(falling, 23, 4, Point(-190, 62), Point(-186, 68), Point(-181, 73)),
    mark(falling, 23, 4, Point(-181, 73), Point(-176, 78), Point(-170, 82)),
    mark(falling, 24, 3, Point(-170, 82), Point(-164, 86), Point(-149, 92)),
    mark(kicked_leg, 26, 3, Point(-44, -188), Point(-27, -180), Point(-18, -179)),
    mark(trailing_leg, 26, 3, Point(-283, 91), Point(-279, 72), Point(-280, 68)),
    mark(trailing_leg, 26, 3, Point(-280, 68), Point(-280, 63), Point(-284, 57)),
    mark(falling, 26, 3, Point(190, -14), Point(191, -1), Point(194, 13)),
    mark(falling, 26, 3, Point(194, 13), Point(198, 27), Point(198, 34)),
  ]
}

// The back: spine, shoulder blades, trapezius, lats, flanks and buttocks.
fn back_anatomy() -> List(Path) {
  [
    mark(falling, 22, 1, Point(138, 26), Point(100, 24), Point(80, 23)),
    mark(falling, 22, 1, Point(80, 23), Point(60, 22), Point(20, 19)),
    mark(falling, 22, 2, Point(20, 19), Point(-30, 15), Point(-55, 14)),
    mark(falling, 22, 2, Point(-55, 14), Point(-80, 12), Point(-124, 9)),
    dark(falling, 20, [
      Point(60, 21), Point(49, 18), Point(34, 15), Point(17, 12), Point(0, 10),
      Point(-14, 8), Point(-29, 7), Point(-44, 6), Point(-60, 6), Point(-76, 6),
      Point(-95, 6), Point(-111, 7), Point(-122, 8), Point(-111, 9), Point(-95, 10),
      Point(-77, 12), Point(-60, 13), Point(-45, 14), Point(-30, 15), Point(-15, 16),
      Point(0, 17), Point(16, 18), Point(34, 19), Point(49, 20),
    ]),
    lit(falling, 21, [
      Point(40, 23), Point(29, 24), Point(14, 24), Point(-4, 24), Point(-20, 23),
      Point(-36, 23), Point(-52, 22), Point(-67, 21), Point(-80, 19), Point(-92, 18),
      Point(-103, 16), Point(-112, 14), Point(-118, 12), Point(-112, 12), Point(-103, 13),
      Point(-92, 14), Point(-80, 14), Point(-66, 15), Point(-51, 16), Point(-35, 17),
      Point(-20, 18), Point(-4, 20), Point(14, 21), Point(29, 22),
    ]),
    dark(falling, 22, [
      Point(-10, 40), Point(-19, 43), Point(-31, 46), Point(-46, 48), Point(-60, 48),
      Point(-75, 47), Point(-92, 43), Point(-106, 40), Point(-116, 36), Point(-106, 37),
      Point(-91, 38), Point(-75, 39), Point(-60, 40), Point(-46, 40), Point(-32, 40),
      Point(-19, 40),
    ]),
    lit(falling, 23, [
      Point(-10, -10), Point(-19, -12), Point(-32, -15), Point(-46, -17), Point(-60, -18),
      Point(-74, -18), Point(-89, -18), Point(-103, -17), Point(-112, -15),
      Point(-103, -14), Point(-89, -14), Point(-74, -13), Point(-60, -12), Point(-46, -12),
      Point(-32, -11), Point(-19, -10),
    ]),
    mark(falling, 25, 2, Point(128, -8), Point(100, -12), Point(86, -15)),
    mark(falling, 25, 2, Point(86, -15), Point(72, -18), Point(63, -23)),
    mark(falling, 26, 2, Point(63, -23), Point(54, -28), Point(50, -40)),
    dark(falling, 22, [
      Point(124, -8), Point(119, -11), Point(111, -13), Point(102, -16), Point(93, -18),
      Point(85, -20), Point(74, -22), Point(65, -24), Point(58, -24), Point(64, -21),
      Point(73, -18), Point(83, -14), Point(92, -11), Point(101, -10), Point(110, -9),
      Point(118, -8),
    ]),
    dark(falling, 22, [
      Point(58, -26), Point(55, -25), Point(51, -25), Point(46, -26), Point(42, -29),
      Point(40, -34), Point(40, -39), Point(41, -43), Point(42, -46), Point(43, -43),
      Point(44, -39), Point(45, -36), Point(47, -32), Point(49, -30), Point(52, -29),
      Point(56, -27),
    ]),
    mark(falling, 26, 2, Point(124, -12), Point(127, -34), Point(120, -60)),
    dark(falling, 22, [
      Point(124, -14), Point(121, -18), Point(119, -24), Point(118, -30), Point(117, -35),
      Point(116, -40), Point(116, -47), Point(117, -53), Point(118, -58), Point(120, -54),
      Point(122, -49), Point(124, -42), Point(125, -36), Point(125, -30), Point(125, -24),
      Point(125, -18),
    ]),
    lit(falling, 23, [
      Point(127, -16), Point(129, -19), Point(132, -24), Point(133, -30), Point(134, -36),
      Point(133, -42), Point(130, -48), Point(127, -53), Point(124, -56), Point(125, -52),
      Point(127, -47), Point(128, -41), Point(129, -36), Point(129, -31), Point(128, -25),
      Point(128, -20),
    ]),
    lit(falling, 23, [
      Point(102, -26), Point(101, -31), Point(98, -36), Point(94, -42), Point(92, -46),
      Point(90, -49), Point(87, -53), Point(83, -57), Point(80, -60), Point(80, -57),
      Point(81, -52), Point(83, -46), Point(85, -41), Point(89, -37), Point(94, -32),
      Point(99, -29),
    ]),
    mark(falling, 25, 2, Point(130, 56), Point(100, 56), Point(86, 58)),
    mark(falling, 25, 2, Point(86, 58), Point(72, 60), Point(63, 64)),
    mark(falling, 26, 2, Point(63, 64), Point(54, 68), Point(52, 80)),
    lit(falling, 22, [
      Point(124, 58), Point(118, 59), Point(110, 60), Point(101, 61), Point(92, 62),
      Point(84, 63), Point(75, 64), Point(66, 64), Point(60, 64), Point(66, 63),
      Point(74, 61), Point(83, 59), Point(92, 57), Point(101, 57), Point(110, 57),
      Point(118, 58),
    ]),
    dark(falling, 22, [
      Point(56, 70), Point(53, 70), Point(48, 71), Point(44, 73), Point(40, 78),
      Point(40, 83), Point(41, 88), Point(43, 92), Point(46, 94), Point(46, 91),
      Point(46, 88), Point(46, 84), Point(47, 80), Point(49, 78), Point(51, 75),
      Point(54, 72),
    ]),
    mark(falling, 26, 2, Point(124, 62), Point(128, 86), Point(124, 112)),
    dark(falling, 22, [
      Point(122, 64), Point(120, 69), Point(118, 75), Point(117, 82), Point(117, 88),
      Point(117, 93), Point(117, 99), Point(118, 106), Point(120, 110), Point(121, 106),
      Point(123, 101), Point(124, 94), Point(125, 88), Point(125, 82), Point(124, 75),
      Point(123, 68),
    ]),
    lit(falling, 23, [
      Point(98, 70), Point(97, 74), Point(94, 79), Point(91, 84), Point(89, 87),
      Point(87, 90), Point(84, 94), Point(81, 98), Point(78, 100), Point(79, 97),
      Point(80, 93), Point(81, 88), Point(83, 84), Point(87, 79), Point(91, 76),
      Point(95, 72),
    ]),
    mark(falling, 27, 1, Point(56, -70), Point(30, -58), Point(15, -52)),
    mark(falling, 27, 1, Point(15, -52), Point(0, -46), Point(-30, -38)),
    mark(falling, 27, 1, Point(54, 106), Point(28, 90), Point(14, 83)),
    mark(falling, 27, 1, Point(14, 83), Point(0, 76), Point(-30, 66)),
    dark(falling, 22, [
      Point(44, 98), Point(37, 97), Point(28, 94), Point(18, 90), Point(9, 86),
      Point(1, 83), Point(-9, 79), Point(-18, 74), Point(-24, 70), Point(-17, 71),
      Point(-8, 73), Point(3, 76), Point(12, 79), Point(21, 84), Point(31, 89),
      Point(39, 94),
    ]),
    lit(falling, 23, [
      Point(40, -56), Point(33, -56), Point(24, -54), Point(14, -51), Point(5, -49),
      Point(-4, -46), Point(-13, -43), Point(-21, -39), Point(-26, -36), Point(-20, -37),
      Point(-12, -39), Point(-3, -41), Point(6, -43), Point(15, -46), Point(25, -50),
      Point(34, -53),
    ]),
    mark(falling, 28, 2, Point(-70, -54), Point(-92, -44), Point(-108, -28)),
    mark(falling, 28, 2, Point(-70, 82), Point(-94, 72), Point(-110, 52)),
    dark(falling, 24, [
      Point(-108, -4), Point(-110, -2), Point(-114, -2), Point(-117, -4), Point(-118, -6),
      Point(-116, -8), Point(-112, -8), Point(-109, -6),
    ]),
    dark(falling, 24, [
      Point(-111, 24), Point(-112, 26), Point(-115, 28), Point(-119, 28), Point(-121, 26),
      Point(-120, 24), Point(-117, 22), Point(-113, 22),
    ]),
    mark(falling, 29, 3, Point(-126, 8), Point(-150, 7), Point(-160, 6)),
    mark(falling, 29, 3, Point(-160, 6), Point(-170, 6), Point(-188, 8)),
    dark(falling, 25, [
      Point(-128, 6), Point(-133, 3), Point(-141, 0), Point(-150, -2), Point(-158, -3),
      Point(-166, -2), Point(-174, 0), Point(-181, 3), Point(-186, 6), Point(-181, 6),
      Point(-174, 6), Point(-166, 5), Point(-158, 5), Point(-150, 5), Point(-141, 6),
      Point(-133, 6),
    ]),
    mark(falling, 29, 2, Point(-124, 2), Point(-124, -24), Point(-132, -46)),
    mark(falling, 29, 2, Point(-126, 18), Point(-126, 42), Point(-134, 64)),
    lit(falling, 26, [
      Point(-136, -48), Point(-138, -52), Point(-141, -57), Point(-147, -61),
      Point(-154, -63), Point(-161, -62), Point(-167, -58), Point(-171, -54),
      Point(-174, -50), Point(-170, -51), Point(-165, -53), Point(-159, -54),
      Point(-154, -55), Point(-149, -54), Point(-144, -52), Point(-139, -49),
    ]),
    lit(falling, 26, [
      Point(-136, 16), Point(-140, 18), Point(-144, 18), Point(-149, 19), Point(-154, 19),
      Point(-159, 19), Point(-165, 19), Point(-172, 18), Point(-176, 16), Point(-172, 15),
      Point(-166, 14), Point(-160, 13), Point(-154, 12), Point(-149, 13), Point(-144, 14),
      Point(-139, 15),
    ]),
    lit(falling, 26, [
      Point(-96, 4), Point(-101, 4), Point(-106, 4), Point(-110, 6), Point(-114, 8),
      Point(-117, 12), Point(-120, 16), Point(-116, 13), Point(-112, 11), Point(-109, 9),
      Point(-104, 7), Point(-100, 5),
    ]),
  ]
}

// Muscles of the arms and legs: deltoids, triceps, hamstrings, calves.
fn limb_anatomy() -> List(Path) {
  [
    mark(kicked_leg, 30, 2, Point(-95, -80), Point(-75, -126), Point(-61, -147)),
    mark(kicked_leg, 30, 2, Point(-61, -147), Point(-48, -169), Point(-29, -192)),
    mark(kicked_leg, 31, 2, Point(-24, -145), Point(-13, -167), Point(-10, -189)),
    mark(kicked_leg, 31, 2, Point(-6, -185), Point(0, -195), Point(-2, -208)),
    dark(kicked_leg, 26, [
      Point(-95, -92), Point(-94, -103), Point(-89, -119), Point(-83, -135),
      Point(-76, -150), Point(-68, -162), Point(-58, -173), Point(-48, -182),
      Point(-40, -187), Point(-45, -180), Point(-52, -169), Point(-60, -157),
      Point(-68, -145), Point(-75, -131), Point(-83, -116), Point(-90, -102),
    ]),
    lit(kicked_leg, 27, [
      Point(-70, -67), Point(-63, -73), Point(-54, -83), Point(-44, -94), Point(-37, -106),
      Point(-31, -119), Point(-27, -133), Point(-24, -146), Point(-23, -155),
      Point(-27, -147), Point(-32, -135), Point(-38, -122), Point(-44, -110),
      Point(-51, -98), Point(-58, -86), Point(-65, -75),
    ]),
    mark(kicked_leg, 32, 2, Point(-37, -202), Point(-60, -215), Point(-69, -225)),
    mark(kicked_leg, 32, 2, Point(-69, -225), Point(-77, -235), Point(-92, -254)),
    glint(kicked_leg, 32, 2, Point(-28, -224), Point(-58, -248), Point(-97, -279)),
    dark(kicked_leg, 28, [
      Point(-45, -196), Point(-51, -196), Point(-59, -197), Point(-67, -201),
      Point(-74, -206), Point(-80, -214), Point(-83, -223), Point(-85, -231),
      Point(-86, -238), Point(-83, -233), Point(-79, -225), Point(-74, -217),
      Point(-69, -211), Point(-63, -206), Point(-56, -202), Point(-50, -198),
    ]),
    mark(trailing_leg, 30, 2, Point(-151, 43), Point(-201, 44), Point(-226, 49)),
    mark(trailing_leg, 30, 2, Point(-226, 49), Point(-250, 54), Point(-284, 64)),
    mark(trailing_leg, 31, 2, Point(-226, 86), Point(-267, 86), Point(-289, 81)),
    mark(trailing_leg, 31, 2, Point(-285, 86), Point(-297, 84), Point(-306, 77)),
    dark(trailing_leg, 26, [
      Point(-162, 36), Point(-173, 33), Point(-189, 31), Point(-207, 30), Point(-223, 31),
      Point(-238, 35), Point(-252, 40), Point(-263, 47), Point(-271, 52), Point(-262, 50),
      Point(-250, 47), Point(-236, 43), Point(-222, 40), Point(-206, 38), Point(-189, 37),
      Point(-173, 36),
    ]),
    lit(trailing_leg, 27, [
      Point(-147, 72), Point(-156, 77), Point(-168, 82), Point(-182, 86), Point(-196, 89),
      Point(-210, 90), Point(-225, 89), Point(-238, 86), Point(-247, 84), Point(-238, 83),
      Point(-225, 83), Point(-210, 82), Point(-197, 81), Point(-183, 79), Point(-169, 76),
      Point(-156, 74),
    ]),
    mark(trailing_leg, 32, 2, Point(-298, 87), Point(-305, 113), Point(-313, 123)),
    mark(trailing_leg, 32, 2, Point(-313, 123), Point(-321, 134), Point(-336, 153)),
    glint(trailing_leg, 32, 2, Point(-321, 84), Point(-337, 118), Point(-359, 163)),
    dark(trailing_leg, 28, [
      Point(-290, 94), Point(-289, 99), Point(-288, 107), Point(-290, 116),
      Point(-293, 124), Point(-299, 131), Point(-307, 137), Point(-315, 141),
      Point(-321, 143), Point(-317, 139), Point(-311, 133), Point(-304, 127),
      Point(-299, 121), Point(-296, 114), Point(-293, 106), Point(-291, 99),
    ]),
    mark(raised_arm, 30, 2, Point(82, -27), Point(88, -50), Point(94, -59)),
    mark(raised_arm, 30, 2, Point(94, -59), Point(99, -68), Point(110, -76)),
    mark(raised_arm, 31, 2, Point(85, -82), Point(82, -102), Point(84, -120)),
    dark(raised_arm, 27, [
      Point(78, -75), Point(75, -79), Point(71, -85), Point(69, -93), Point(68, -100),
      Point(69, -108), Point(71, -115), Point(74, -121), Point(77, -125), Point(77, -121),
      Point(76, -114), Point(75, -107), Point(74, -100), Point(75, -93), Point(76, -86),
      Point(77, -79),
    ]),
    lit(raised_arm, 27, [
      Point(128, -32), Point(130, -36), Point(133, -41), Point(135, -48), Point(134, -55),
      Point(130, -61), Point(124, -66), Point(118, -69), Point(113, -70), Point(116, -67),
      Point(120, -62), Point(125, -57), Point(127, -52), Point(128, -47), Point(128, -41),
      Point(128, -36),
    ]),
    mark(raised_arm, 32, 2, Point(79, -125), Point(72, -133), Point(75, -142)),
    mark(raised_arm, 32, 2, Point(95, -150), Point(84, -175), Point(67, -212)),
    dark(raised_arm, 28, [
      Point(73, -140), Point(70, -144), Point(66, -150), Point(62, -158), Point(58, -167),
      Point(56, -177), Point(55, -189), Point(55, -200), Point(55, -208), Point(57, -200),
      Point(59, -190), Point(62, -178), Point(64, -168), Point(67, -160), Point(69, -151),
      Point(72, -145),
    ]),
    mark(hanging_arm, 30, 2, Point(60, 123), Point(79, 138), Point(89, 142)),
    mark(hanging_arm, 30, 2, Point(89, 142), Point(99, 145), Point(112, 145)),
    mark(hanging_arm, 31, 2, Point(95, 168), Point(108, 190), Point(123, 209)),
    dark(hanging_arm, 27, [
      Point(88, 169), Point(89, 175), Point(90, 183), Point(93, 191), Point(97, 199),
      Point(103, 205), Point(110, 211), Point(117, 215), Point(122, 217), Point(119, 213),
      Point(114, 207), Point(108, 201), Point(103, 195), Point(99, 188), Point(95, 181),
      Point(91, 174),
    ]),
    lit(hanging_arm, 27, [
      Point(100, 100), Point(104, 101), Point(109, 103), Point(115, 108), Point(118, 114),
      Point(119, 121), Point(117, 129), Point(114, 135), Point(111, 139), Point(111, 134),
      Point(112, 128), Point(112, 121), Point(112, 116), Point(109, 111), Point(106, 107),
      Point(102, 103),
    ]),
    mark(hanging_arm, 32, 2, Point(125, 224), Point(128, 234), Point(138, 237)),
    mark(hanging_arm, 32, 2, Point(155, 223), Point(174, 250), Point(196, 285)),
    dark(hanging_arm, 28, [
      Point(135, 237), Point(137, 242), Point(141, 250), Point(146, 259), Point(153, 267),
      Point(161, 274), Point(171, 282), Point(180, 289), Point(187, 292), Point(181, 287),
      Point(173, 279), Point(164, 271), Point(157, 263), Point(150, 255), Point(144, 248),
      Point(139, 241),
    ]),
  ]
}

// Hands seen from the back: knuckles, tendons, finger joints and nails.
// Feet: the arch, heel, ball of the foot, ankle bone, Achilles tendon, and
// five toes, each with its joint crease and pad, and the big toenail.
fn hands_and_feet() -> List(Path) {
  [
    glint(raised_arm, 34, 1, Point(50, -271), Point(53, -274), Point(56, -272)),
    glint(raised_arm, 34, 1, Point(57, -237), Point(55, -254), Point(53, -268)),
    mark(raised_arm, 35, 1, Point(49, -288), Point(51, -289), Point(54, -288)),
    mark(raised_arm, 35, 1, Point(48, -297), Point(51, -298), Point(53, -297)),
    lit(raised_arm, 36, [
      Point(53, -299), Point(53, -304), Point(52, -305), Point(51, -306), Point(49, -305),
      Point(49, -304), Point(49, -299),
    ]),
    Path(raised_arm(line(Polygon([
      Point(53, -299), Point(53, -304), Point(52, -305), Point(51, -306), Point(49, -305),
      Point(49, -304), Point(49, -299),
    ]))), 36, 38, 1),
    glint(raised_arm, 34, 1, Point(43, -272), Point(45, -275), Point(48, -273)),
    glint(raised_arm, 34, 1, Point(54, -236), Point(50, -254), Point(46, -268)),
    mark(raised_arm, 35, 1, Point(39, -290), Point(41, -292), Point(45, -291)),
    mark(raised_arm, 35, 1, Point(38, -299), Point(40, -301), Point(43, -300)),
    lit(raised_arm, 36, [
      Point(42, -302), Point(42, -308), Point(41, -309), Point(40, -309), Point(38, -309),
      Point(38, -307), Point(38, -302),
    ]),
    Path(raised_arm(line(Polygon([
      Point(42, -302), Point(42, -308), Point(41, -309), Point(40, -309), Point(38, -309),
      Point(38, -307), Point(38, -302),
    ]))), 36, 38, 1),
    glint(raised_arm, 34, 1, Point(37, -268), Point(39, -272), Point(42, -270)),
    glint(raised_arm, 34, 1, Point(51, -235), Point(45, -252), Point(41, -266)),
    mark(raised_arm, 35, 1, Point(31, -285), Point(34, -287), Point(37, -286)),
    mark(raised_arm, 35, 1, Point(30, -294), Point(32, -295), Point(34, -295)),
    lit(raised_arm, 36, [
      Point(34, -296), Point(33, -302), Point(32, -303), Point(31, -303), Point(30, -303),
      Point(29, -301), Point(30, -296),
    ]),
    Path(raised_arm(line(Polygon([
      Point(34, -296), Point(33, -302), Point(32, -303), Point(31, -303), Point(30, -303),
      Point(29, -301), Point(30, -296),
    ]))), 36, 38, 1),
    glint(raised_arm, 34, 1, Point(33, -262), Point(34, -265), Point(37, -264)),
    glint(raised_arm, 34, 1, Point(49, -235), Point(42, -249), Point(37, -259)),
    mark(raised_arm, 35, 1, Point(27, -272), Point(29, -275), Point(32, -275)),
    mark(raised_arm, 35, 1, Point(25, -279), Point(27, -281), Point(29, -280)),
    lit(raised_arm, 36, [
      Point(28, -282), Point(28, -286), Point(27, -287), Point(26, -288), Point(25, -287),
      Point(24, -286), Point(25, -281),
    ]),
    Path(raised_arm(line(Polygon([
      Point(28, -282), Point(28, -286), Point(27, -287), Point(26, -288), Point(25, -287),
      Point(24, -286), Point(25, -281),
    ]))), 36, 38, 1),
    mark(raised_arm, 35, 2, Point(50, -269), Point(49, -274), Point(47, -279)),
    mark(raised_arm, 35, 2, Point(43, -268), Point(42, -273), Point(41, -278)),
    mark(raised_arm, 35, 2, Point(38, -263), Point(37, -268), Point(36, -273)),
    lit(raised_arm, 36, [
      Point(77, -271), Point(78, -279), Point(77, -281), Point(76, -282), Point(74, -281),
      Point(74, -280), Point(73, -271),
    ]),
    Path(raised_arm(line(Polygon([
      Point(77, -271), Point(78, -279), Point(77, -281), Point(76, -282), Point(74, -281),
      Point(74, -280), Point(73, -271),
    ]))), 36, 38, 1),
    mark(raised_arm, 35, 1, Point(71, -268), Point(75, -268), Point(78, -267)),
    dark(raised_arm, 34, [
      Point(63, -244), Point(62, -246), Point(60, -249), Point(60, -251), Point(59, -254),
      Point(58, -257), Point(58, -259), Point(58, -262), Point(58, -264), Point(59, -262),
      Point(60, -260), Point(61, -257), Point(62, -254), Point(63, -251), Point(63, -249),
      Point(63, -246),
    ]),
    lit(raised_arm, 34, [
      Point(46, -236), Point(46, -239), Point(46, -242), Point(46, -246), Point(45, -250),
      Point(44, -254), Point(43, -257), Point(40, -259), Point(39, -261), Point(39, -259),
      Point(40, -256), Point(41, -252), Point(42, -249), Point(43, -246), Point(44, -242),
      Point(45, -239),
    ]),
    glint(hanging_arm, 34, 1, Point(241, 346), Point(245, 345), Point(244, 341)),
    glint(hanging_arm, 34, 1, Point(220, 317), Point(231, 330), Point(239, 341)),
    mark(hanging_arm, 35, 1, Point(255, 357), Point(258, 356), Point(259, 353)),
    mark(hanging_arm, 35, 1, Point(263, 364), Point(265, 363), Point(266, 360)),
    lit(hanging_arm, 36, [
      Point(267, 363), Point(272, 368), Point(272, 369), Point(272, 370), Point(270, 371),
      Point(269, 370), Point(265, 365),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(267, 363), Point(272, 368), Point(272, 369), Point(272, 370), Point(270, 371),
      Point(269, 370), Point(265, 365),
    ]))), 36, 38, 1),
    glint(hanging_arm, 34, 1, Point(236, 351), Point(240, 352), Point(240, 348)),
    glint(hanging_arm, 34, 1, Point(217, 318), Point(228, 334), Point(236, 346)),
    mark(hanging_arm, 35, 1, Point(248, 367), Point(251, 366), Point(253, 364)),
    mark(hanging_arm, 35, 1, Point(255, 376), Point(257, 376), Point(259, 373)),
    lit(hanging_arm, 36, [
      Point(260, 376), Point(264, 383), Point(264, 384), Point(263, 385), Point(262, 385),
      Point(260, 385), Point(256, 378),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(260, 376), Point(264, 383), Point(264, 384), Point(263, 385), Point(262, 385),
      Point(260, 385), Point(256, 378),
    ]))), 36, 38, 1),
    glint(hanging_arm, 34, 1, Point(229, 353), Point(233, 354), Point(234, 351)),
    glint(hanging_arm, 34, 1, Point(215, 320), Point(223, 336), Point(230, 348)),
    mark(hanging_arm, 35, 1, Point(236, 370), Point(239, 370), Point(241, 368)),
    mark(hanging_arm, 35, 1, Point(241, 380), Point(243, 380), Point(245, 378)),
    lit(hanging_arm, 36, [
      Point(246, 381), Point(248, 387), Point(248, 389), Point(247, 390), Point(246, 390),
      Point(245, 389), Point(242, 382),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(246, 381), Point(248, 387), Point(248, 389), Point(247, 390), Point(246, 390),
      Point(245, 389), Point(242, 382),
    ]))), 36, 38, 1),
    glint(hanging_arm, 34, 1, Point(222, 351), Point(224, 353), Point(226, 351)),
    glint(hanging_arm, 34, 1, Point(213, 321), Point(218, 336), Point(224, 347)),
    mark(hanging_arm, 35, 1, Point(222, 364), Point(225, 365), Point(227, 364)),
    mark(hanging_arm, 35, 1, Point(223, 372), Point(226, 373), Point(228, 372)),
    lit(hanging_arm, 36, [
      Point(227, 374), Point(228, 380), Point(228, 381), Point(227, 382), Point(225, 381),
      Point(225, 380), Point(224, 374),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(227, 374), Point(228, 380), Point(228, 381), Point(227, 382), Point(225, 381),
      Point(225, 380), Point(224, 374),
    ]))), 36, 38, 1),
    mark(hanging_arm, 35, 2, Point(239, 344), Point(241, 348), Point(244, 352)),
    mark(hanging_arm, 35, 2, Point(233, 348), Point(236, 352), Point(239, 357)),
    mark(hanging_arm, 35, 2, Point(226, 349), Point(229, 353), Point(232, 357)),
    lit(hanging_arm, 36, [
      Point(260, 318), Point(268, 322), Point(269, 323), Point(269, 325), Point(268, 326),
      Point(266, 326), Point(258, 322),
    ]),
    Path(hanging_arm(line(Polygon([
      Point(260, 318), Point(268, 322), Point(269, 323), Point(269, 325), Point(268, 326),
      Point(266, 326), Point(258, 322),
    ]))), 36, 38, 1),
    mark(hanging_arm, 35, 1, Point(255, 322), Point(257, 319), Point(257, 315)),
    dark(hanging_arm, 34, [
      Point(230, 317), Point(230, 320), Point(231, 323), Point(232, 324), Point(233, 327),
      Point(235, 329), Point(236, 331), Point(239, 333), Point(241, 334), Point(240, 333),
      Point(239, 330), Point(238, 328), Point(236, 325), Point(234, 323), Point(233, 320),
      Point(231, 319),
    ]),
    lit(hanging_arm, 34, [
      Point(212, 324), Point(214, 326), Point(216, 328), Point(220, 331), Point(222, 334),
      Point(224, 338), Point(225, 341), Point(225, 344), Point(225, 347), Point(224, 345),
      Point(222, 343), Point(220, 339), Point(219, 336), Point(217, 333), Point(215, 329),
      Point(213, 327),
    ]),
    dark(kicked_leg, 34, [
      Point(-137, -282), Point(-137, -285), Point(-139, -290), Point(-142, -295),
      Point(-146, -299), Point(-151, -301), Point(-157, -302), Point(-162, -302),
      Point(-165, -301), Point(-162, -299), Point(-158, -298), Point(-153, -296),
      Point(-149, -294), Point(-146, -291), Point(-142, -288), Point(-139, -284),
    ]),
    mark(kicked_leg, 34, 2, Point(-138, -280), Point(-150, -293), Point(-166, -299)),
    mark(kicked_leg, 34, 2, Point(-121, -266), Point(-125, -275), Point(-135, -274)),
    mark(kicked_leg, 35, 1, Point(-163, -319), Point(-167, -310), Point(-166, -305)),
    mark(kicked_leg, 35, 1, Point(-166, -305), Point(-166, -301), Point(-163, -293)),
    lit(kicked_leg, 34, [
      Point(-156, -308), Point(-158, -309), Point(-160, -309), Point(-163, -309),
      Point(-166, -308), Point(-168, -305), Point(-168, -303), Point(-167, -300),
      Point(-166, -299), Point(-166, -300), Point(-166, -302), Point(-165, -304),
      Point(-164, -306), Point(-162, -306), Point(-160, -307), Point(-158, -307),
    ]),
    mark(kicked_leg, 34, 2, Point(-113, -292), Point(-115, -300), Point(-122, -298)),
    mark(kicked_leg, 34, 2, Point(-115, -273), Point(-103, -262), Point(-89, -252)),
    glint(kicked_leg, 34, 1, Point(-120, -301), Point(-141, -314), Point(-161, -323)),
    lit(kicked_leg, 34, [
      Point(-118, -301), Point(-123, -302), Point(-129, -305), Point(-136, -308),
      Point(-142, -311), Point(-148, -314), Point(-153, -316), Point(-158, -319),
      Point(-161, -322), Point(-158, -321), Point(-152, -319), Point(-146, -317),
      Point(-140, -314), Point(-134, -311), Point(-128, -307), Point(-122, -303),
    ]),
    mark(kicked_leg, 36, 1, Point(-170, -331), Point(-173, -328), Point(-174, -324)),
    lit(kicked_leg, 36, [
      Point(-183, -334), Point(-183, -332), Point(-181, -330), Point(-178, -329),
      Point(-176, -330), Point(-177, -332), Point(-179, -334), Point(-181, -335),
    ]),
    mark(kicked_leg, 36, 2, Point(-165, -318), Point(-169, -320), Point(-174, -323)),
    mark(kicked_leg, 36, 1, Point(-174, -321), Point(-177, -319), Point(-177, -315)),
    lit(kicked_leg, 36, [
      Point(-184, -321), Point(-184, -319), Point(-182, -318), Point(-180, -318),
      Point(-179, -319), Point(-179, -321), Point(-181, -322), Point(-183, -322),
    ]),
    mark(kicked_leg, 36, 2, Point(-168, -311), Point(-172, -312), Point(-176, -314)),
    mark(kicked_leg, 36, 1, Point(-175, -313), Point(-177, -310), Point(-176, -307)),
    lit(kicked_leg, 36, [
      Point(-183, -311), Point(-183, -310), Point(-181, -309), Point(-179, -309),
      Point(-178, -310), Point(-179, -312), Point(-181, -312), Point(-182, -312),
    ]),
    mark(kicked_leg, 36, 2, Point(-168, -304), Point(-171, -305), Point(-175, -306)),
    mark(kicked_leg, 36, 1, Point(-174, -305), Point(-175, -302), Point(-174, -300)),
    lit(kicked_leg, 36, [
      Point(-181, -303), Point(-180, -301), Point(-179, -301), Point(-177, -301),
      Point(-176, -302), Point(-177, -303), Point(-178, -304), Point(-180, -304),
    ]),
    mark(kicked_leg, 36, 2, Point(-166, -298), Point(-170, -298), Point(-173, -299)),
    mark(kicked_leg, 36, 1, Point(-171, -297), Point(-173, -295), Point(-171, -292)),
    lit(kicked_leg, 36, [
      Point(-177, -294), Point(-176, -293), Point(-175, -293), Point(-173, -294),
      Point(-173, -295), Point(-175, -296), Point(-176, -295),
    ]),
    lit(kicked_leg, 37, [
      Point(-173, -331), Point(-176, -335), Point(-179, -336), Point(-182, -335),
      Point(-177, -332),
    ]),
    Path(kicked_leg(line(Polygon([
      Point(-173, -331), Point(-176, -335), Point(-179, -336), Point(-182, -335),
      Point(-177, -332),
    ]))), 37, 39, 1),
    dark(trailing_leg, 34, [
      Point(-365, 209), Point(-368, 208), Point(-373, 207), Point(-379, 208),
      Point(-384, 210), Point(-388, 213), Point(-391, 218), Point(-393, 223),
      Point(-394, 227), Point(-391, 224), Point(-388, 221), Point(-385, 217),
      Point(-381, 215), Point(-377, 213), Point(-372, 211), Point(-368, 210),
    ]),
    mark(trailing_leg, 34, 2, Point(-364, 211), Point(-381, 216), Point(-393, 228)),
    mark(trailing_leg, 34, 2, Point(-343, 201), Point(-353, 200), Point(-357, 210)),
    mark(trailing_leg, 35, 1, Point(-410, 217), Point(-403, 224), Point(-399, 226)),
    mark(trailing_leg, 35, 1, Point(-399, 226), Point(-395, 227), Point(-386, 227)),
    lit(trailing_leg, 34, [
      Point(-396, 215), Point(-398, 216), Point(-400, 218), Point(-401, 221),
      Point(-401, 224), Point(-399, 227), Point(-397, 228), Point(-394, 228),
      Point(-393, 228), Point(-394, 227), Point(-395, 226), Point(-397, 225),
      Point(-398, 223), Point(-398, 221), Point(-397, 219), Point(-397, 217),
    ]),
    mark(trailing_leg, 34, 2, Point(-364, 182), Point(-372, 181), Point(-373, 188)),
    mark(trailing_leg, 34, 2, Point(-348, 193), Point(-340, 179), Point(-332, 161)),
    glint(trailing_leg, 34, 1, Point(-375, 186), Point(-395, 199), Point(-412, 213)),
    lit(trailing_leg, 34, [
      Point(-374, 184), Point(-377, 187), Point(-382, 192), Point(-388, 197),
      Point(-393, 201), Point(-398, 205), Point(-403, 209), Point(-408, 212),
      Point(-411, 214), Point(-409, 211), Point(-405, 207), Point(-400, 203),
      Point(-395, 198), Point(-390, 194), Point(-384, 190), Point(-378, 186),
    ]),
    mark(trailing_leg, 36, 1, Point(-423, 217), Point(-422, 222), Point(-419, 225)),
    lit(trailing_leg, 36, [
      Point(-431, 229), Point(-429, 229), Point(-427, 228), Point(-425, 226),
      Point(-425, 224), Point(-427, 224), Point(-430, 225), Point(-431, 227),
    ]),
    mark(trailing_leg, 36, 2, Point(-409, 219), Point(-413, 222), Point(-417, 225)),
    mark(trailing_leg, 36, 1, Point(-416, 226), Point(-415, 229), Point(-412, 231)),
    lit(trailing_leg, 36, [
      Point(-420, 235), Point(-419, 235), Point(-417, 234), Point(-416, 232),
      Point(-416, 231), Point(-418, 231), Point(-419, 232), Point(-420, 234),
    ]),
    mark(trailing_leg, 36, 2, Point(-404, 224), Point(-407, 227), Point(-410, 230)),
    mark(trailing_leg, 36, 1, Point(-409, 230), Point(-407, 233), Point(-404, 234)),
    lit(trailing_leg, 36, [
      Point(-411, 238), Point(-410, 238), Point(-408, 237), Point(-408, 236),
      Point(-408, 234), Point(-410, 234), Point(-411, 235), Point(-412, 237),
    ]),
    mark(trailing_leg, 36, 2, Point(-398, 227), Point(-400, 230), Point(-403, 233)),
    mark(trailing_leg, 36, 1, Point(-401, 232), Point(-400, 235), Point(-397, 235)),
    lit(trailing_leg, 36, [
      Point(-402, 240), Point(-401, 240), Point(-400, 238), Point(-399, 237),
      Point(-400, 236), Point(-401, 236), Point(-402, 237), Point(-403, 239),
    ]),
    mark(trailing_leg, 36, 2, Point(-392, 229), Point(-393, 231), Point(-395, 234)),
    mark(trailing_leg, 36, 1, Point(-393, 234), Point(-391, 236), Point(-389, 235)),
    lit(trailing_leg, 36, [
      Point(-393, 240), Point(-392, 239), Point(-391, 238), Point(-391, 237),
      Point(-391, 236), Point(-393, 236), Point(-393, 237), Point(-393, 239),
    ]),
    lit(trailing_leg, 37, [
      Point(-424, 221), Point(-429, 222), Point(-432, 224), Point(-432, 227),
      Point(-427, 224),
    ]),
    Path(trailing_leg(line(Polygon([
      Point(-424, 221), Point(-429, 222), Point(-432, 224), Point(-432, 227),
      Point(-427, 224),
    ]))), 37, 39, 1),
  ]
}

// Short feathers over each shoulder blade, where the wings take root.
fn wing_roots() -> List(Path) {
  [
    Path(falling(feather_vane(Leaf(Point(106, -34), Point(60, -54), 9), 1)), 37, 42, 0),
    Path(falling(feather_ink(Leaf(Point(106, -34), Point(60, -54), 9))), 37, 42, 2),
    Path(falling(feather_shaft(Line(Point(106, -34), Point(60, -54)))), 38, 43, 1),
    Path(falling(feather_vane(Leaf(Point(102, -38), Point(53, -68), 11), 2)), 38, 43, 0),
    Path(falling(feather_ink(Leaf(Point(102, -38), Point(53, -68), 11))), 38, 43, 2),
    Path(falling(feather_shaft(Line(Point(102, -38), Point(53, -68)))), 39, 44, 1),
    Path(falling(feather_vane(Leaf(Point(98, -41), Point(57, -76), 9), 3)), 39, 44, 0),
    Path(falling(feather_ink(Leaf(Point(98, -41), Point(57, -76), 9))), 39, 44, 2),
    Path(falling(feather_shaft(Line(Point(98, -41), Point(57, -76)))), 40, 45, 1),
    Path(falling(feather_vane(Leaf(Point(94, -44), Point(54, -89), 11), 4)), 40, 45, 0),
    Path(falling(feather_ink(Leaf(Point(94, -44), Point(54, -89), 11))), 40, 45, 2),
    Path(falling(feather_shaft(Line(Point(94, -44), Point(54, -89)))), 41, 46, 1),
    Path(falling(feather_vane(Leaf(Point(90, -48), Point(61, -91), 9), 5)), 41, 46, 0),
    Path(falling(feather_ink(Leaf(Point(90, -48), Point(61, -91), 9))), 41, 46, 2),
    Path(falling(feather_shaft(Line(Point(90, -48), Point(61, -91)))), 42, 47, 1),
    Path(falling(feather_vane(Leaf(Point(108, 70), Point(159, 63), 9), 6)), 37, 42, 0),
    Path(falling(feather_ink(Leaf(Point(108, 70), Point(159, 63), 9))), 37, 42, 2),
    Path(falling(feather_shaft(Line(Point(108, 70), Point(159, 63)))), 38, 43, 1),
    Path(falling(feather_vane(Leaf(Point(109, 76), Point(167, 74), 11), 7)), 38, 43, 0),
    Path(falling(feather_ink(Leaf(Point(109, 76), Point(167, 74), 11))), 38, 43, 2),
    Path(falling(feather_shaft(Line(Point(109, 76), Point(167, 74)))), 39, 44, 1),
    Path(falling(feather_vane(Leaf(Point(110, 81), Point(160, 86), 9), 8)), 39, 44, 0),
    Path(falling(feather_ink(Leaf(Point(110, 81), Point(160, 86), 9))), 39, 44, 2),
    Path(falling(feather_shaft(Line(Point(110, 81), Point(160, 86)))), 40, 45, 1),
    Path(falling(feather_vane(Leaf(Point(111, 86), Point(166, 99), 11), 9)), 40, 45, 0),
    Path(falling(feather_ink(Leaf(Point(111, 86), Point(166, 99), 11))), 40, 45, 2),
    Path(falling(feather_shaft(Line(Point(111, 86), Point(166, 99)))), 41, 46, 1),
    Path(falling(feather_vane(Leaf(Point(112, 92), Point(157, 108), 9), 10)), 41, 46, 0),
    Path(falling(feather_ink(Leaf(Point(112, 92), Point(157, 108), 9))), 41, 46, 2),
    Path(falling(feather_shaft(Line(Point(112, 92), Point(157, 108)))), 42, 47, 1),
  ]
}

// His right ear and jaw as he turns his head, the nape and neck muscles.
fn head_and_neck() -> List(Path) {
  [
    Path(falling(skin(Polygon([
      Point(253, 26), Point(256, 28), Point(258, 30), Point(258, 34), Point(258, 37),
      Point(255, 40), Point(252, 43), Point(247, 45), Point(242, 47), Point(237, 47),
      Point(232, 47), Point(227, 47), Point(224, 45), Point(221, 44), Point(219, 41),
      Point(220, 39), Point(221, 37), Point(225, 34), Point(229, 32), Point(234, 30),
      Point(239, 29), Point(243, 28), Point(247, 27), Point(250, 26),
    ]))), 36, 40, 0),
    Path(falling(ink(Polygon([
      Point(253, 26), Point(256, 28), Point(258, 30), Point(258, 34), Point(258, 37),
      Point(255, 40), Point(252, 43), Point(247, 45), Point(242, 47), Point(237, 47),
      Point(232, 47), Point(227, 47), Point(224, 45), Point(221, 44), Point(219, 41),
      Point(220, 39), Point(221, 37), Point(225, 34), Point(229, 32), Point(234, 30),
      Point(239, 29), Point(243, 28), Point(247, 27), Point(250, 26),
    ]))), 36, 40, 3),
    mark(falling, 37, 2, Point(251, 32), Point(246, 41), Point(240, 43)),
    mark(falling, 37, 2, Point(240, 43), Point(235, 44), Point(227, 41)),
    dark(falling, 37, [
      Point(246, 34), Point(245, 37), Point(242, 39), Point(238, 40), Point(235, 40),
      Point(232, 39), Point(232, 37), Point(236, 35), Point(239, 34), Point(244, 33),
    ]),
    mark(falling, 37, 2, Point(219, 39), Point(208, 46), Point(197, 44)),
    lit(falling, 36, [
      Point(218, 50), Point(221, 50), Point(226, 50), Point(230, 50), Point(235, 48),
      Point(238, 46), Point(242, 43), Point(245, 40), Point(247, 37), Point(244, 39),
      Point(241, 41), Point(237, 43), Point(233, 45), Point(229, 47), Point(225, 48),
      Point(221, 49),
    ]),
    mark(falling, 38, 2, Point(195, 5), Point(179, 13), Point(171, 17)),
    mark(falling, 38, 2, Point(171, 17), Point(163, 21), Point(154, 24)),
    mark(falling, 39, 2, Point(149, 17), Point(144, 28), Point(154, 32)),
    mark(falling, 38, 2, Point(200, 35), Point(181, 48), Point(170, 58)),
    mark(falling, 38, 2, Point(170, 58), Point(158, 67), Point(143, 88)),
    mark(falling, 38, 2, Point(184, -15), Point(172, -12), Point(162, -23)),
    mark(falling, 39, 1, Point(176, -18), Point(170, -24), Point(166, -33)),
    dark(falling, 35, [
      Point(189, -17), Point(187, -12), Point(186, -5), Point(186, 2), Point(187, 10),
      Point(190, 17), Point(195, 23), Point(200, 28), Point(205, 32), Point(203, 27),
      Point(200, 21), Point(197, 14), Point(195, 7), Point(193, 1), Point(192, -6),
      Point(190, -12),
    ]),
    dark(falling, 35, [
      Point(197, 38), Point(194, 44), Point(189, 52), Point(183, 59), Point(177, 65),
      Point(170, 72), Point(161, 79), Point(152, 85), Point(145, 89), Point(149, 83),
      Point(155, 74), Point(162, 65), Point(169, 58), Point(177, 51), Point(185, 46),
      Point(192, 41),
    ]),
    lit(falling, 36, [
      Point(183, 1), Point(180, -1), Point(175, -3), Point(169, -4), Point(165, -4),
      Point(160, -4), Point(155, -3), Point(149, -2), Point(145, 0), Point(148, 1),
      Point(154, 2), Point(159, 4), Point(165, 4), Point(170, 4), Point(175, 3),
      Point(180, 2),
    ]),
  ]
}

// A cap of tight curls over the crown and the back of his head: the ear,
// jaw and nape stay bare.
fn hair() -> List(Path) {
  list.flatten([
    [Path(falling(curl_base(Polygon([
        Point(282, -33), Point(279, -38), Point(276, -43), Point(273, -46),
        Point(269, -50), Point(265, -53), Point(261, -55), Point(256, -57),
        Point(252, -58), Point(247, -59), Point(242, -59), Point(237, -58),
        Point(232, -58), Point(227, -57), Point(223, -55), Point(219, -54),
        Point(215, -52), Point(212, -50), Point(209, -47), Point(206, -45),
        Point(204, -42), Point(202, -40), Point(200, -37), Point(199, -34),
        Point(199, -30), Point(198, -27), Point(198, -24), Point(199, -20),
        Point(200, -17), Point(201, -13), Point(202, -9), Point(203, -6), Point(205, -2),
        Point(206, 1), Point(208, 5), Point(210, 8), Point(211, 11), Point(213, 13),
        Point(215, 15), Point(217, 17), Point(220, 19), Point(222, 21), Point(225, 22),
        Point(227, 22), Point(230, 23), Point(233, 23), Point(236, 23), Point(239, 23),
        Point(242, 22), Point(245, 22), Point(248, 21), Point(252, 20), Point(255, 20),
        Point(258, 19), Point(261, 18), Point(264, 16), Point(267, 14), Point(270, 12),
        Point(273, 10), Point(276, 7), Point(278, 4), Point(281, 1), Point(283, -3),
        Point(284, -8), Point(285, -12), Point(285, -18), Point(285, -23), Point(284, -28),
      ]))), 40, 44, 0)],
    [lit(falling, 41, [
        Point(277, -33), Point(276, -34), Point(275, -35), Point(275, -36),
        Point(274, -37), Point(273, -38), Point(273, -39), Point(272, -40),
        Point(271, -41), Point(271, -42), Point(270, -43), Point(269, -44),
        Point(268, -45), Point(267, -45), Point(267, -46), Point(266, -47),
        Point(265, -48), Point(264, -48), Point(263, -49), Point(262, -49),
        Point(261, -50), Point(260, -50), Point(259, -51), Point(258, -51),
        Point(257, -52), Point(256, -52), Point(255, -53), Point(254, -53),
        Point(253, -53), Point(252, -53), Point(251, -54), Point(250, -54),
        Point(249, -54), Point(248, -54), Point(247, -54), Point(246, -54),
        Point(245, -54), Point(244, -54), Point(243, -54), Point(241, -54),
        Point(240, -54), Point(239, -54), Point(238, -54), Point(237, -54),
        Point(236, -54), Point(235, -54), Point(234, -53), Point(232, -53),
        Point(231, -53), Point(230, -53), Point(229, -52), Point(228, -52),
        Point(227, -52), Point(226, -52), Point(225, -51), Point(224, -51),
        Point(223, -50), Point(222, -50), Point(221, -50), Point(220, -49),
        Point(219, -49), Point(219, -48), Point(218, -48), Point(217, -48),
        Point(216, -47), Point(215, -47), Point(215, -46), Point(214, -46),
        Point(213, -45), Point(212, -44), Point(211, -44), Point(211, -43),
        Point(210, -43), Point(214, -40), Point(222, -35), Point(235, -28),
        Point(252, -19), Point(265, -12), Point(274, -8), Point(279, -6), Point(279, -7),
        Point(279, -8), Point(280, -9), Point(280, -10), Point(280, -11), Point(280, -12),
        Point(280, -14), Point(280, -15), Point(281, -16), Point(281, -17),
        Point(281, -18), Point(281, -20), Point(280, -21), Point(280, -22),
        Point(280, -23), Point(280, -24), Point(280, -25), Point(279, -26),
        Point(277, -26), Point(274, -26), Point(271, -25), Point(269, -24),
        Point(267, -23), Point(267, -22), Point(268, -22), Point(269, -21),
        Point(269, -20), Point(270, -20), Point(271, -19), Point(272, -18),
        Point(272, -17), Point(273, -16), Point(274, -15), Point(274, -14),
        Point(275, -13), Point(275, -12), Point(276, -11), Point(276, -10), Point(276, -9),
        Point(277, -8), Point(277, -6), Point(273, -8), Point(265, -12), Point(253, -18),
        Point(236, -27), Point(224, -33), Point(216, -38), Point(212, -40),
        Point(213, -40), Point(214, -40), Point(215, -40), Point(216, -40),
        Point(217, -40), Point(218, -40), Point(219, -40), Point(220, -40),
        Point(221, -40), Point(222, -40), Point(223, -40), Point(224, -40),
        Point(225, -40), Point(226, -40), Point(227, -40), Point(228, -40),
        Point(229, -40), Point(230, -40), Point(231, -40), Point(232, -39),
        Point(233, -39), Point(234, -39), Point(235, -39), Point(236, -39),
        Point(237, -39), Point(238, -39), Point(239, -38), Point(240, -38),
        Point(241, -38), Point(242, -37), Point(243, -37), Point(244, -37),
        Point(245, -36), Point(246, -36), Point(247, -35), Point(248, -35),
        Point(248, -34), Point(249, -34), Point(249, -33), Point(250, -33),
        Point(251, -32), Point(252, -32), Point(253, -31), Point(254, -31),
        Point(255, -30), Point(256, -30), Point(256, -29), Point(257, -29),
        Point(258, -28), Point(259, -28), Point(259, -27), Point(260, -27),
        Point(261, -26), Point(262, -25), Point(263, -26), Point(266, -26),
        Point(268, -27), Point(272, -29), Point(275, -30), Point(276, -32),
      ])],
    curl(Point(204, -6), 6, 42),
    curl(Point(202, -14), 3, 42),
    curl(Point(208, 2), 4, 42),
    curl(Point(200, -22), 5, 42),
    curl(Point(212, 10), 6, 42),
    curl(Point(200, -31), 5, 42),
    curl(Point(218, 16), 4, 42),
    curl(Point(203, -38), 4, 42),
    curl(Point(225, 21), 6, 42),
    curl(Point(208, -45), 4, 42),
    curl(Point(233, 22), 4, 43),
    curl(Point(215, -50), 6, 43),
    curl(Point(242, 21), 5, 43),
    curl(Point(223, -54), 5, 43),
    curl(Point(250, 20), 6, 43),
    curl(Point(231, -56), 7, 43),
    curl(Point(259, 17), 4, 43),
    curl(Point(239, -58), 6, 43),
    curl(Point(266, 14), 4, 43),
    curl(Point(248, -57), 4, 43),
    curl(Point(273, 9), 5, 44),
    curl(Point(256, -56), 6, 44),
    curl(Point(279, 2), 5, 44),
    curl(Point(264, -52), 7, 44),
    curl(Point(282, -6), 6, 44),
    curl(Point(271, -47), 6, 44),
    curl(Point(284, -14), 5, 44),
    curl(Point(276, -40), 6, 44),
    curl(Point(284, -23), 6, 44),
    curl(Point(281, -33), 4, 44),
    curl(Point(281, -31), 5, 45),
    ringlet(Point(210, -14), 3, 295, 44),
    ringlet(Point(215, -1), 3, 272, 44),
    ringlet(Point(207, -23), 3, 55, 44),
    ringlet(Point(218, 6), 4, 2, 44),
    ringlet(Point(212, -10), 5, 115, 44),
    ringlet(Point(206, -31), 3, 32, 44),
    ringlet(Point(228, 15), 3, 114, 44),
    ringlet(Point(219, -8), 4, 1, 44),
    ringlet(Point(212, -28), 4, 53, 44),
    ringlet(Point(216, -21), 5, 270, 44),
    ringlet(Point(210, -37), 4, 291, 45),
    ringlet(Point(226, 6), 3, 118, 45),
    ringlet(Point(224, 0), 4, 109, 45),
    ringlet(Point(219, -16), 5, 265, 45),
    ringlet(Point(231, 2), 4, 226, 45),
    ringlet(Point(229, -5), 4, 352, 45),
    ringlet(Point(236, 15), 3, 283, 45),
    ringlet(Point(218, -34), 3, 19, 45),
    ringlet(Point(221, -27), 4, 280, 45),
    ringlet(Point(234, 9), 4, 345, 45),
    ringlet(Point(216, -43), 3, 216, 46),
    ringlet(Point(227, -13), 5, 251, 46),
    ringlet(Point(225, -20), 3, 91, 46),
    ringlet(Point(220, -48), 5, 96, 46),
    ringlet(Point(226, -34), 3, 266, 46),
    ringlet(Point(224, -40), 5, 241, 46),
    ringlet(Point(242, 10), 3, 20, 46),
    ringlet(Point(232, -20), 4, 325, 46),
    ringlet(Point(238, -4), 4, 74, 46),
    ringlet(Point(230, -26), 3, 349, 46),
    ringlet(Point(240, 1), 3, 68, 47),
    ringlet(Point(235, -13), 4, 312, 47),
    ringlet(Point(245, -3), 4, 1, 47),
    ringlet(Point(230, -46), 4, 215, 47),
    ringlet(Point(248, 3), 4, 234, 47),
    ringlet(Point(240, -19), 5, 57, 47),
    ringlet(Point(235, -32), 4, 46, 47),
    ringlet(Point(243, -12), 4, 199, 47),
    ringlet(Point(232, -41), 3, 157, 47),
    ringlet(Point(238, -25), 4, 280, 47),
    ringlet(Point(252, 11), 5, 208, 48),
    ringlet(Point(242, -30), 3, 301, 48),
    ringlet(Point(253, -1), 4, 199, 48),
    ringlet(Point(249, -10), 3, 262, 48),
    ringlet(Point(236, -46), 4, 129, 48),
    ringlet(Point(256, 4), 4, 162, 48),
    ringlet(Point(245, -25), 5, 359, 48),
    ringlet(Point(249, -16), 4, 1, 48),
    ringlet(Point(241, -38), 5, 168, 48),
    ringlet(Point(255, -14), 4, 140, 48),
    ringlet(Point(261, -1), 4, 277, 49),
    ringlet(Point(245, -43), 3, 218, 49),
    ringlet(Point(248, -37), 3, 325, 49),
    ringlet(Point(254, -22), 5, 236, 49),
    ringlet(Point(243, -52), 4, 313, 49),
    ringlet(Point(251, -32), 3, 194, 49),
    ringlet(Point(260, -9), 3, 240, 49),
    ringlet(Point(265, 5), 3, 91, 49),
    ringlet(Point(260, -21), 3, 107, 49),
    ringlet(Point(270, 0), 4, 288, 49),
    ringlet(Point(253, -45), 3, 273, 50),
    ringlet(Point(251, -51), 3, 64, 50),
    ringlet(Point(265, -15), 5, 19, 50),
    ringlet(Point(260, -29), 3, 139, 50),
    ringlet(Point(268, -8), 4, 64, 50),
    ringlet(Point(257, -38), 4, 154, 50),
    ringlet(Point(261, -41), 3, 49, 50),
    ringlet(Point(263, -34), 5, 109, 50),
    ringlet(Point(274, -7), 3, 334, 50),
    ringlet(Point(258, -50), 3, 3, 50),
    ringlet(Point(271, -14), 4, 198, 51),
    ringlet(Point(267, -29), 3, 197, 51),
    ringlet(Point(270, -22), 3, 1, 51),
    ringlet(Point(271, -33), 3, 330, 51),
    ringlet(Point(276, -20), 3, 104, 51),
    ringlet(Point(268, -42), 4, 43, 51),
    ringlet(Point(275, -26), 4, 146, 51),
  ])
}

fn curl(at: Point, r: Int, t: Int) -> List(Path) {
  [Path(falling(curl_base(Circle(at, r))), t, t + 3, 0)]
}

fn ringlet(at: Point, r: Int, turn: Int, t: Int) -> List(Path) {
  [Path(falling(curl_light(Arc(at, r, turn, turn + 230))), t, t + 4, 2)]
}

// \u2500\u2500 Torn feathers tumble away above him \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn loose_feathers(i: Int) -> List(Path) {
  case i == 33 {
    True -> []
    False -> {
      let x = { i * 237 + i * i * 31 } % 910 - 455
      let y = { i * 161 + i * i * 19 } % 790 - 410
      let rest = loose_feathers(i + 1)
      case { y > 0 - 140 && x > 0 - 420 } || { x > 0 - 200 && x < 120 && y > 0 - 340 } {
        True -> rest
        False -> {
          let base = Point(x, y)
          let angle = i * 67 % 360
          let extent = 30 + i % 5 * 12
          let tip = Point(x + cos(angle, extent), y + sin(angle, extent))
          let f = Leaf(base, tip, 4 + i % 3 * 2)
          let drift = fn(s: Shape) {
            Bounce(Sway(s, base, 43 + i % 4 * 10, 10 + i % 6 * 4), 45 + i % 5 * 16, 12 + i % 5 * 4)
          }
          let t = 58 + i * 2
          list.append([
            Path(drift(loose_fill(f, i)), t, t + 6, 0),
            Path(drift(loose_ink(f)), t + 1, t + 7, 1),
            Path(drift(loose_shaft(Line(base, tip))), t + 2, t + 8, 1),
          ], rest)
        }
      }
    }
  }
}
`]]);var Hn=class extends h{constructor(t,n){super(),this.drawings=t,this.current=n}};var fd="animator-library";function cd(){let e,t=Pc;t instanceof _?e="":e=t.head[0];let n=e;return new Hn(Pc,n)}function Om(){let e=pi("name",fo,t=>pi("source",fo,n=>Bo([t,n])));return pi("current",fo,t=>pi("drawings",ml(e),n=>Bo(new Hn(n,t))))}function ud(){let e=ad(fd),t=T(e,o=>{let r=a2(o,Om());return Z$(r,void 0)}),n=W(t,o=>{let r=ci(Pc,s=>Y$(Kt(o.drawings,s[0])));return new Hn(it(o.drawings,r),o.current)}),i=W(n,o=>{let r=o.drawings;if(r instanceof _)return cd();{let s=r.head[0];return Kt(o.drawings,o.current)instanceof $?o:new Hn(o.drawings,s)}});return ea(i,cd())}function jm(e){return ta(d(["current",jo(e.current)],d(["drawings",kl(e.drawings,t=>ta(d(["name",jo(t[0])],d(["source",jo(t[1])],g))))],g)))}function xu(e){return ld(fd,l2(jm(e)))}function wu(e){let t=Kt(e.drawings,e.current);return ea(t,"")}function pd(e,t){return new Hn(S$(e.drawings,e.current,t),e.current)}function $d(e,t){return Kt(e.drawings,t)instanceof $?new Hn(e.drawings,t):e}function Pd(e,t,n){return Kt(e.drawings,t)instanceof $?new Hn(e.drawings,t):new Hn(it(e.drawings,d([t,n],g)),t)}var zn=class extends h{constructor(t,n){super(),this.x=t,this.y=n}};var Er=class extends h{constructor(t,n){super(),this.start=t,this.end=n}};var Cr=class extends h{constructor(t,n){super(),this.center=t,this.radius=n}};var Lr=class extends h{constructor(t,n,i,o){super(),this.center=t,this.radius=n,this.from=i,this.to=o}};var Ir=class extends h{constructor(t,n,i){super(),this.start=t,this.control=n,this.end=i}};var Fr=class extends h{constructor(t){super(),this.points=t}};var Ar=class extends h{constructor(t,n,i){super(),this.base=t,this.tip=n,this.width=i}};var Ho=class extends h{constructor(t,n){super(),this.shape=t,this.color=n}};var zo=class extends h{constructor(t,n){super(),this.shape=t,this.blur=n}};var Wo=class extends h{constructor(t,n){super(),this.shape=t,this.color=n}};var Ko=class extends h{constructor(t,n){super(),this.shape=t,this.opacity=n}};var xo=class extends h{constructor(t,n,i,o){super(),this.shape=t,this.pivot=n,this.degrees=i,this.period=o}};var Ci=class extends h{constructor(t,n,i){super(),this.shape=t,this.height=n,this.period=i}};var dc=class extends h{constructor(t,n,i,o){super(),this.shape=t,this.start=n,this.end=i,this.thickness=o}};function Pn(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new b(new X("expected a Point"));{let n=t.tail;if(n instanceof _)return new b(new X("expected a Point"));if(n.tail instanceof _){let i=t.head;if(i instanceof Y){let o=n.head;if(o instanceof Y&&e.tag==="Point"){let r=i[0],s=o[0];return new $(new zn(r,s))}else return new b(new X("expected a Point"))}else return new b(new X("expected a Point"))}else return new b(new X("expected a Point"))}}else return new b(new X("expected a Point"))}function ka(e,t){return nt(Xs(e,0,t))}function dd(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new b(new X("a Colored shape's color must be an Rgb or Hsl"));{let n=t.tail;if(n instanceof _)return new b(new X("a Colored shape's color must be an Rgb or Hsl"));{let i=n.tail;if(i instanceof _)return new b(new X("a Colored shape's color must be an Rgb or Hsl"));if(i.tail instanceof _){let o=t.head;if(o instanceof Y){let r=n.head;if(r instanceof Y){let s=i.head;if(s instanceof Y){let f=e.tag;if(f==="Rgb"){let l=o[0],u=r[0],a=s[0];return new $("rgb("+ka(l,255)+", "+ka(u,255)+", "+ka(a,255)+")")}else if(f==="Hsl"){let l=o[0],u=r[0],a=s[0],c=(l%360+360)%360;return new $("hsl("+nt(c)+", "+ka(u,100)+"%, "+ka(a,100)+"%)")}else return new b(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new b(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new b(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new b(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new b(new X("a Colored shape's color must be an Rgb or Hsl"))}}}else return new b(new X("a Colored shape's color must be an Rgb or Hsl"))}function Xo(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _){let n=e.tag;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+n))}else{let n=t.tail;if(n instanceof _){let i=t.head;if(i instanceof Je){let o=e.tag;if(o==="Polygon"){let r=i[0];return T(wt(r,Pn),s=>s instanceof _?new b(new X("a Polygon needs at least one Point")):new $(new Fr(s)))}else{let r=o;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+r))}}else{let o=e.tag;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}else{let i=n.tail;if(i instanceof _){let o=e.tag;if(o==="Line"){let r=t.head,s=n.head;return T(Pn(r),f=>T(Pn(s),l=>new $(new Er(f,l))))}else if(o==="Circle"){let r=n.head;if(r instanceof Y){let s=t.head,f=r[0];return T(Pn(s),l=>new $(new Cr(l,f)))}else{let s=o;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+s))}}else if(o==="Colored"){let r=t.head,s=n.head;return T(Xo(r),f=>T(dd(s),l=>new $(new Ho(f,l))))}else if(o==="Glow"){let r=n.head;if(r instanceof Y){let s=t.head,f=r[0];return T(Xo(s),l=>new $(new zo(l,lr(f,0))))}else{let s=o;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+s))}}else if(o==="Filled"){let r=t.head,s=n.head;return T(Xo(r),f=>T(dd(s),l=>new $(new Wo(f,l))))}else if(o==="Faded"){let r=n.head;if(r instanceof Y){let s=t.head,f=r[0];return T(Xo(s),l=>new $(new Ko(l,Xs(f,0,100))))}else{let s=o;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+s))}}else{let r=o;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+r))}}else{let o=i.tail;if(o instanceof _){let r=e.tag;if(r==="Curve"){let s=t.head,f=n.head,l=i.head;return T(Pn(s),u=>T(Pn(f),a=>T(Pn(l),c=>new $(new Ir(u,a,c)))))}else if(r==="Leaf"){let s=i.head;if(s instanceof Y){let f=t.head,l=n.head,u=s[0];return T(Pn(f),a=>T(Pn(l),c=>new $(new Ar(a,c,u))))}else{let f=r;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else if(r==="Bounce"){let s=n.head;if(s instanceof Y){let f=i.head;if(f instanceof Y){let l=t.head,u=s[0],a=f[0];return T(Xo(l),c=>new $(new Ci(c,u,a)))}else{let l=r;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+l))}}else{let f=r;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else{let s=r;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+s))}}else if(o.tail instanceof _){let r=i.head;if(r instanceof Y){let s=o.head;if(s instanceof Y){let f=n.head;if(f instanceof Y){let l=e.tag;if(l==="Arc"){let u=t.head,a=r[0],c=s[0],p=f[0];return T(Pn(u),P=>new $(new Lr(P,p,a,c)))}else if(l==="Sway"){let u=t.head,a=f,c=r[0],p=s[0];return T(Xo(u),P=>T(Pn(a),m=>new $(new xo(P,m,c,p))))}else{let u=l;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+u))}}else{let l=e.tag;if(l==="Sway"){let u=t.head,a=f,c=r[0],p=s[0];return T(Xo(u),P=>T(Pn(a),m=>new $(new xo(P,m,c,p))))}else{let u=l;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+u))}}}else{let f=e.tag;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else{let s=e.tag;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+s))}}else{let r=e.tag;return new b(new X("a Path's shape must be a recognized shape with the right field types, not "+r))}}}}}else return new b(new X("a Path's shape must be a recognized shape"))}function Nm(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new b(new X("some element is not a well-formed path"));{let n=t.tail;if(n instanceof _)return new b(new X("some element is not a well-formed path"));{let i=n.tail;if(i instanceof _)return new b(new X("some element is not a well-formed path"));{let o=i.tail;if(o instanceof _)return new b(new X("some element is not a well-formed path"));if(o.tail instanceof _){let r=n.head;if(r instanceof Y){let s=i.head;if(s instanceof Y){let f=o.head;if(f instanceof Y&&e.tag==="Path"){let l=t.head,u=r[0],a=s[0],c=f[0];return T(Xo(l),p=>new $(new dc(p,u,a,c)))}else return new b(new X("some element is not a well-formed path"))}else return new b(new X("some element is not a well-formed path"))}else return new b(new X("some element is not a well-formed path"))}else return new b(new X("some element is not a well-formed path"))}}}}else return new b(new X("some element is not a well-formed path"))}function hd(e,t){let n=nd("draw",d(new Y(e),g),t);if(n instanceof $){let i=n[0];if(i instanceof Je){let o=i[0];return ot(o)>XP?new b(HP):wt(o,Nm)}else return new b(new X("return value of draw is not a list"))}else return n}var Sn=null,ku=null,hc=null,bu=null;function Um(e){let t=new Set(["fn","case","let","const","import","use","type","pub","as","if","todo","panic","assert"]);return e.define({token(n){if(n.eatSpace())return null;if(n.match(/^\/\/.*/))return"comment";if(n.match(/^"(?:[^"\\]|\\.)*"?/))return"string";if(n.match(/^[0-9]+\.[0-9]+/)||n.match(/^[0-9]+/))return"number";if(n.match(/^(True|False|Nil|Ok|Error)\b/))return"atom";let i=n.match(/^[A-Za-z_][A-Za-z0-9_]*/);return i?t.has(i[0])?"keyword":/^[A-Z]/.test(i[0])?"typeName":"variableName":n.match(/^(\+\.|-\.|\*\.|\/\.|<=\.|>=\.|<\.|>\.|==|!=|->|<-|\|>|=)/)?"operator":(n.next(),null)},languageData:{commentTokens:{line:"//"}}})}function Vm(){if(hc)return hc;let e="6";return hc=Promise.all([import(`https://esm.sh/@codemirror/view@${e}`),import(`https://esm.sh/@codemirror/state@${e}`),import(`https://esm.sh/@codemirror/commands@${e}`),import(`https://esm.sh/@codemirror/language@${e}`),import(`https://esm.sh/@codemirror/autocomplete@${e}`),import("https://esm.sh/@lezer/highlight@1")]).then(([t,n,i,o,r,s])=>{let{tags:f}=s,l=t.EditorView.theme({"&":{color:"#d4c5a0",backgroundColor:"#0d0d1a",height:"100%"},".cm-content":{fontFamily:"monospace",fontSize:"13px",padding:"16px 0"},".cm-gutters":{backgroundColor:"#0d0d1a",color:"#3a3a5e",border:"none"},".cm-activeLine":{backgroundColor:"#16162c"},".cm-activeLineGutter":{backgroundColor:"#16162c"},"&.cm-focused .cm-matchingBracket":{backgroundColor:"#2a4a3a",color:"#fff"},".cm-scroller":{overflow:"auto"},"&.cm-focused":{outline:"1px solid #6a6aaa"}},{dark:!0}),u=o.HighlightStyle.define([{tag:f.keyword,color:"#c792ea"},{tag:f.comment,color:"#6a7a6a",fontStyle:"italic"},{tag:f.string,color:"#c3e88d"},{tag:f.number,color:"#f78c6c"},{tag:[f.atom,f.bool],color:"#82aaff"},{tag:f.typeName,color:"#ffcb6b"},{tag:f.variableName,color:"#d4c5a0"},{tag:f.operator,color:"#89ddff"}]),a=Um(o.StreamLanguage);function c(p,P,m){let k=t.EditorView.updateListener.of(v=>{v.docChanged&&m(v.state.doc.toString())}),y=n.EditorState.create({doc:P,extensions:[t.lineNumbers(),t.highlightActiveLine(),t.highlightActiveLineGutter(),i.history(),t.drawSelection(),o.indentOnInput(),o.indentUnit.of("  "),o.bracketMatching(),r.closeBrackets(),o.syntaxHighlighting(u),a,t.keymap.of([...r.closeBracketsKeymap,...i.defaultKeymap,...i.historyKeymap,i.indentWithTab]),l,t.EditorView.lineWrapping,k]});return new t.EditorView({state:y,parent:p})}return{create:c}}),hc}function Gm(e,t){return new Promise(n=>{let i=0,o=()=>{let r=document.getElementById(e);if(r)return n(r);if(i++>=t)return n(null);requestAnimationFrame(o)};o()})}function Hm(){if(!Sn||Sn.dom.isConnected)return;let e=document.getElementById("code-editor");e&&(e.replaceChildren(Sn.dom),Sn.requestMeasure(),document.activeElement===document.body&&Sn.focus())}var yu=0;function md(e,t){let n=++yu;Sn&&(Sn.destroy(),Sn=null),ku=t,bu||(bu=new MutationObserver(Hm),bu.observe(document.body,{childList:!0,subtree:!0})),Gm("code-editor",120).then(i=>{!i||n!==yu||Vm().then(o=>{let r=document.getElementById("code-editor");r&&n===yu&&(Sn&&Sn.destroy(),r.innerHTML="",Sn=o.create(r,e,s=>{ku&&ku(s)}))}).catch(o=>console.error("CodeMirror failed to load:",o))})}var de=class extends h{constructor(t,n){super(),this.signature=t,this.description=n}};function Tu(e,t){return po(n=>md(e,i=>n(t(i))))}function zm(){return d(new de("list.map(list, fn(a) -> b) -> List(b)","each element through `fn`"),d(new de("list.filter(list, fn(a) -> Bool) -> List(a)","only the elements `fn` says True to"),d(new de("list.append(list, list) -> List(a)","one list after the other"),d(new de("list.length(list) -> Int","the number of elements"),d(new de("list.flatten(List(List(a))) -> List(a)","the inner lists, end to end"),g)))))}function mc(e,t){return vt(d(se("reference-group"),g),d(vt(d(se("reference-group-title"),g),d(Tt(e),g)),d(vt(d(se("reference-rows"),g),Ze(t,n=>vt(d(se("reference-row"),g),d(R2(d(se("reference-sig"),g),d(Tt(n.signature),g)),d(gr(d(se("reference-desc"),g),d(Tt(n.description),g)),g))))),g)))}function Wm(){return oi([new de("Circle(center: Point, radius: Int)","a full circle"),new de("Arc(center: Point, radius: Int, from: Int, to: Int)","part of a circle, traced from angle `from` to `to`"),new de("Curve(start: Point, control: Point, end: Point)","a smooth curve that bends toward `control`"),new de("Polygon(points: List(Point))","a closed outline through the points"),new de("Leaf(base: Point, tip: Point, width: Int)","a closed, pointed lens shape: a petal, leaf, or blade of grass"),new de("Colored(shape, color)","draws `shape` in `color` instead of the app's palette"),new de("Glow(shape, blur: Int)","a soft halo in the shape's color"),new de("Filled(shape, color)","fills a closed shape; thickness 0 draws only the fill"),new de("Faded(shape, opacity: Int)","see-through, from 0 to 100"),new de("Sway(shape, pivot: Point, degrees: Int, period: Int)","rocks around `pivot`, once every `period` (1/10 s), forever"),new de("Bounce(shape, height: Int, period: Int)","hops up by `height`, once every `period` (1/10 s), forever"),new de("Rgb(r: Int, g: Int, b: Int)","a color, each part in [0, 255]"),new de("Hsl(hue: Int, saturation: Int, lightness: Int)","a color: hue in degrees, the others in [0, 100]")])}function Km(){return d(new de("random(min: Int, max: Int) -> Int","a random int in [min, max)"),d(new de("abs(n: Int) -> Int","the absolute value of `n`"),d(new de("Point(x: Int, y: Int)","a point on the canvas: (0, 0) is the center, x and y run from -500 to 500, and y grows downward"),d(new de("Line(start: Point, end: Point)","a straight-line shape"),d(new de("Path(shape, start: Int, end: Int, thickness: Int)","draws a shape between times `start` and `end`, in 1/10 s (end <= start draws it instantly)"),d(new de("sin(degrees: Int, scale: Int) -> Int","sine of the angle times `scale`, rounded: sin(30, 100) == 50"),d(new de("cos(degrees: Int, scale: Int) -> Int","cosine of the angle times `scale`, rounded: cos(60, 100) == 50"),d(new de("sqrt(n: Int) -> Int","the integer square root of `n` >= 0"),g))))))))}function Xm(){return d(new de("shape_slider: Int","the shape slider value, in [0, 100]"),g)}function Jm(){return N2(d(se("reference"),g),d(q2(d(se("reference-summary"),g),d(Tt("Built-ins"),g)),d(vt(d(se("reference-body"),g),d(mc("Inputs",Xm()),d(mc("Functions",Km()),d(mc("Shapes & colors",Wm()),d(mc("Lists",zm()),g))))),g)))}function _d(e){return vt(d(se("code-panel"),g),d(vt(d(se("code-header"),g),d(gr(d(se("code-title"),g),d(Tt("draw code"),g)),d(qo(d(se("icon-btn"),d(rt("title","Hide code"),d(Vo(e),g))),d(Tt("\u27E8"),g)),g))),d(vt(d(se("code-editor-wrap"),g),d(P1("","div",d(yl("code-editor"),d(se("code-editor"),g)),""),g)),d(Jm(),g))))}function gd(e){let t="",n=e;for(;n.tail;)t!==""&&(t+="|"),t+=Zm(n.head),n=n.tail;return new RegExp(t)}function _c(e,t){let n=t.match(e);if(!n)return[t,""];let i=n.index;return[t.slice(0,i),t.slice(i)]}function Zm(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function xd(e){let n=ci(e,i=>i!=="");return gd(n)}function mt(e,t,n){return e.slice(t,t+n)}function wd(e){return e.slice(1)}function ba(e){return e.length}var B=class extends h{constructor(t){super(),this[0]=t}};var K=class extends h{constructor(t){super(),this[0]=t}};var st=class extends h{constructor(t){super(),this[0]=t}};var ue=class extends h{constructor(t){super(),this[0]=t}};var St=class extends h{constructor(t){super(),this[0]=t}};var dn=class extends h{constructor(t){super(),this[0]=t}};var ya=class extends h{constructor(t){super(),this[0]=t}};var Ta=class extends h{constructor(t){super(),this[0]=t}};var va=class extends h{constructor(t){super(),this[0]=t}};var _t=class extends h{},_e=new _t;var Jo=class extends h{},ge=new Jo;var gc=class extends h{},xe=new gc;var Wn=class extends h{},we=new Wn;var Li=class extends h{},ke=new Li;var xc=class extends h{},be=new xc;var wc=class extends h{},ye=new wc;var Kn=class extends h{},Te=new Kn;var kc=class extends h{},ve=new kc;var Jt=class extends h{},Se=new Jt;var Mr=class extends h{},Ee=new Mr;var bc=class extends h{},Ce=new bc;var Rr=class extends h{},Le=new Rr;var Ii=class extends h{},Ie=new Ii;var yc=class extends h{},Fe=new yc;var Br=class extends h{},Ae=new Br;var Xn=class extends h{},Me=new Xn;var Or=class extends h{},Re=new Or;var Tc=class extends h{},Be=new Tc;var Jn=class extends h{},Oe=new Jn;var wo=class extends h{},je=new wo;var Fi=class extends h{},De=new Fi;var Ye=class extends h{},Ca=new Ye;var q=class extends h{},gt=new q;var Yt=class extends h{},La=new Yt;var ft=class extends h{},Cc=new ft;var En=class extends h{},kd=new En;var ut=class extends h{},Qt=new ut;var jr=class extends h{},bd=new jr;var hn=class extends h{},vu=new hn;var Dr=class extends h{},yd=new Dr;var Ai=class extends h{},Td=new Ai;var Nr=class extends h{},vd=new Nr;var qr=class extends h{},Sd=new qr;var Ur=class extends h{},Ed=new Ur;var Vr=class extends h{},Cd=new Vr;var Gr=class extends h{},Ld=new Gr;var Hr=class extends h{},Id=new Hr;var zr=class extends h{},Fd=new zr;var Wr=class extends h{},Ad=new Wr;var Kr=class extends h{},Md=new Kr;var Xr=class extends h{},Rd=new Xr;var Jr=class extends h{},Bd=new Jr;var Yr=class extends h{},Od=new Yr;var Zr=class extends h{},jd=new Zr;var Cn=class extends h{},Dd=new Cn;var Mi=class extends h{},Nd=new Mi;var Zt=class extends h{},qd=new Zt;var D=class extends h{},ls=new D;var Ln=class extends h{},Ud=new Ln;var Yn=class extends h{},Vd=new Yn;var Qr=class extends h{},Ia=new Qr;var es=class extends h{},Gd=new es;var ts=class extends h{},Hd=new ts;var vc=class extends h{},Lc=new vc;var ns=class extends h{},zd=new ns;var os=class extends h{},Wd=new os;var In=class extends h{},Kd=new In;var Sc=class extends h{},ko=new Sc;var is=class extends h{},Xd=new is;var Zn=class extends h{},en=new Zn;var pt=class extends h{},Su=new pt;var rs=class extends h{},Ic=new rs;var ss=class extends h{},Fa=new ss;var as=class extends h{},Jd=new as;var Sa=class extends h{constructor(t){super(),this[0]=t}};var Ea=class extends h{constructor(t){super(),this[0]=t}};var Ec=class extends h{constructor(t){super(),this[0]=t}};function Aa(e){return e instanceof B||e instanceof K?e[0]:e instanceof st?"_"+e[0]:e instanceof ue||e instanceof St?e[0]:e instanceof dn?'"'+e[0]+'"':e instanceof ya?"///"+e[0]:e instanceof Ta?"//"+e[0]:e instanceof va?"////"+e[0]:e instanceof _t?"as":e instanceof Jo?"assert":e instanceof gc?"auto":e instanceof Wn?"case":e instanceof Li?"const":e instanceof xc?"delegate":e instanceof wc?"derive":e instanceof Kn?"echo":e instanceof kc?"else":e instanceof Jt?"fn":e instanceof Mr?"if":e instanceof bc?"implement":e instanceof Rr?"import":e instanceof Ii?"let":e instanceof yc?"macro":e instanceof Br?"opaque":e instanceof Xn?"panic":e instanceof Or?"pub":e instanceof Tc?"test":e instanceof Jn?"todo":e instanceof wo?"type":e instanceof Fi?"use":e instanceof Ye?"(":e instanceof q?")":e instanceof Yt?"{":e instanceof ft?"}":e instanceof En?"[":e instanceof ut?"]":e instanceof jr?"+":e instanceof hn?"-":e instanceof Dr?"*":e instanceof Ai?"/":e instanceof Nr?"<":e instanceof qr?">":e instanceof Ur?"<=":e instanceof Vr?">=":e instanceof Gr?"%":e instanceof Hr?"+.":e instanceof zr?"-.":e instanceof Wr?"*.":e instanceof Kr?"/.":e instanceof Xr?"<.":e instanceof Jr?">.":e instanceof Yr?"<=.":e instanceof Zr?">=.":e instanceof Cn?"<>":e instanceof Mi?"@":e instanceof Zt?":":e instanceof D?",":e instanceof Ln?"#":e instanceof Yn?"!":e instanceof Qr?"=":e instanceof es?"==":e instanceof ts?"!=":e instanceof vc?"|":e instanceof ns?"||":e instanceof os?"&&":e instanceof In?"<<":e instanceof Sc?">>":e instanceof is?"|>":e instanceof Zn?".":e instanceof pt?"..":e instanceof rs?"<-":e instanceof ss?"->":e instanceof as?"":e instanceof Sa?e[0]:e instanceof Ea?'"'+e[0]:e[0]}var O=class extends h{constructor(t,n,i,o,r,s,f){super(),this.original_source=t,this.source=n,this.byte_offset=i,this.preserve_whitespace=o,this.preserve_comments=r,this.mode=s,this.newlines=f}},Ac=class extends h{},cs=new Ac,Mc=class extends h{},bo=new Mc,Rc=class extends h{},Qn=new Rc,Bc=class extends h{},Ve=new Bc,Lu=class extends h{},eo=new Lu,R=class extends h{constructor(t){super(),this.byte_offset=t}};var Oc=class extends h{},e_=new Oc,jc=class extends h{},t_=new jc,Iu=class extends h{},n_=new Iu,Ri=class extends h{},$t=new Ri,Bi=class extends h{},o_=new Bi,Fu=class extends h{},Zd=new Fu;function th(e){return new O(e,e,0,!0,!0,cs,xd(d(`\r
`,d(`
`,g))))}function nh(e){return new O(e.original_source,e.source,e.byte_offset,!1,e.preserve_comments,e.mode,e.newlines)}function oh(e){return new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,!1,e.mode,e.newlines)}function ih(e){let t=e[0],n=e[1];return[t,new x(n)]}function w(e,t,n){return new O(e.original_source,t,e.byte_offset+n,e.preserve_whitespace,e.preserve_comments,e.mode,e.newlines)}function rh(e,t,n,i){return[w(t,n,i),e]}function U(e,t,n,i){let o=[t,new R(e.byte_offset)],r=rh(o,e,n,i);return ih(r)}function Ge(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===97){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===98){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===99){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===100){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===101){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===102){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===103){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===104){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===105){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===106){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===107){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===108){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===109){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===110){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===111){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===112){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===113){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===114){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===115){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===116){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===117){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===118){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===119){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===120){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===121){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===122){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===65){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===66){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===67){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===68){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===69){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===70){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===71){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===72){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===73){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===74){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===75){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===76){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===77){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===78){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===79){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===80){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===81){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===82){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===83){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===84){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===85){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===86){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===87){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===88){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===89){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===90){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===48){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===49){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===50){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===51){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===52){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===53){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===54){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===55){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===56){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===57){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else{let l=mt(i.original_source,o,r);return[i,l]}}}function Ne(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===97){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===98){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===99){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===100){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===101){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===102){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===103){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===104){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===105){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===106){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===107){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===108){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===109){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===110){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===111){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===112){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===113){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===114){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===115){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===116){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===117){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===118){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===119){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===120){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===121){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===122){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===48){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===49){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===50){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===51){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===52){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===53){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===54){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===55){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===56){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===57){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===95){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else{let l=mt(i.original_source,o,r);return[i,l]}}}function i_(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===34){let l=s.slice(1),u=mt(i.original_source,o+1,r),a=[new dn(u),new R(o)],c=rh(a,i,l,1);return ih(c)}else if(f===92){let l=s.slice(1),u=Pl(l);if(u instanceof $){let a=u[0][0],c=u[0][1],p=1+ba(a);e=w(i,c,p),t=o,n=r+p}else e=w(i,l,1),t=o,n=r+1}else if(s===""){let l=mt(i.original_source,o+1,r);return[i,new x([new Ea(l),new R(o)])]}else e=w(i,wd(i.source),1),t=o,n=r+1}}function Pt(e,t,n,i){for(;;){let o=e,r=t,s=n,f=i,l=o.source,u=l.charCodeAt(0);if(u===95){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===48){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===49){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===50){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===51){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===52){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===53){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===54){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===55){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===56){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===57){let a=l.slice(1);e=w(o,a,1),t=r,n=s,i=f+1}else if(u===46)if(r instanceof Ri){let a=l.slice(1);e=w(o,a,1),t=o_,n=s,i=f+1}else if(r instanceof Bi){let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new St(c),new R(s)])]}else{let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new St(c),new R(s)])]}else if(l.startsWith("e-"))if(r instanceof Ri){let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new ue(c),new R(s)])]}else if(r instanceof Bi){let a=l.slice(2);e=w(o,a,2),t=Zd,n=s,i=f+2}else{let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new St(c),new R(s)])]}else if(u===101)if(r instanceof Ri){let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new ue(c),new R(s)])]}else if(r instanceof Bi){let a=l.slice(1);e=w(o,a,1),t=Zd,n=s,i=f+1}else{let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new St(c),new R(s)])]}else if(r instanceof Ri){let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new ue(c),new R(s)])]}else if(r instanceof Bi){let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new St(c),new R(s)])]}else{let a=new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,bo,o.newlines),c=mt(a.original_source,s,f);return[a,new x([new St(c),new R(s)])]}}}function r_(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===95){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===48){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===49){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===50){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===51){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===52){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===53){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===54){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===55){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===56){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===57){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===97){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===65){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===98){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===66){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===99){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===67){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===100){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===68){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===101){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===69){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===102){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===70){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else{let l=mt(i.original_source,o,r);return[i,new x([new ue(l),new R(o)])]}}}function s_(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===95){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===48){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===49){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===50){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===51){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===52){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===53){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===54){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===55){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else{let l=mt(i.original_source,o,r);return[i,new x([new ue(l),new R(o)])]}}}function a_(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===95){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===48){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===49){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else{let l=mt(i.original_source,o,r);return[i,new x([new ue(l),new R(o)])]}}}function Eu(e,t,n){let i=_c(e.newlines,e.source),o=i[0],r=i[1],s=ba(o),f=w(e,r,s),l;t instanceof Oc?l=new Ta(o):t instanceof jc?l=new ya(o):l=new va(o);let u=l;return[f,new x([u,new R(n)])]}function Cu(e){let t=_c(e.newlines,e.source),n=t[0],i=t[1],o=ba(n);return[w(e,i,o),C]}function Fc(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===32){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===9){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===10){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===13){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(i.preserve_whitespace){let u=mt(i.original_source,o,r);return[i,new x([new Sa(u),new R(o)])]}else return[i,C]}}function to(e,t,n){for(;;){let i=e,o=t,r=n,s=i.source,f=s.charCodeAt(0);if(f===48){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===49){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===50){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===51){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===52){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===53){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===54){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===55){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===56){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else if(f===57){let l=s.slice(1);e=w(i,l,1),t=o,n=r+1}else{let l=mt(i.original_source,o,r);return[i,l]}}}function Qd(e){let t=e.source;if(t.charCodeAt(0)===45){let n=t.slice(1),i=U(e,vu,n,1),o=i[0],r=i[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,cs,o.newlines),r])}else return new b(void 0)}function eh(e){let t=e.source;if(t.startsWith("..")){let n=t.slice(2);return new $(U(e,Su,n,2))}else if(t.charCodeAt(0)===46){let n=t.slice(1),i=n.charCodeAt(0);if(i===48){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===49){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===50){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===51){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===52){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===53){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===54){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===55){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===56){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else if(i===57){let o=U(e,en,n,1),r=o[0],s=o[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,eo,r.newlines),s])}else return new $(U(e,en,n,1))}else return new b(void 0)}function l_(e){let t=e.mode;if(t instanceof Ac){let n=e.source,i=n.charCodeAt(0);if(i===32){let o=n.slice(1),r=w(e,o,1);return Fc(r,e.byte_offset,1)}else if(i===10){let o=n.slice(1),r=w(e,o,1);return Fc(r,e.byte_offset,1)}else if(i===13){let o=n.slice(1),r=w(e,o,1);return Fc(r,e.byte_offset,1)}else if(i===9){let o=n.slice(1),r=w(e,o,1);return Fc(r,e.byte_offset,1)}else if(n.startsWith("////")){let o=n.slice(4);if(e.preserve_comments){let s=w(e,o,4);return Eu(s,n_,e.byte_offset)}else return Cu(e)}else if(n.startsWith("///")){let o=n.slice(3);if(e.preserve_comments){let s=w(e,o,3);return Eu(s,t_,e.byte_offset)}else return Cu(e)}else if(n.startsWith("//")){let o=n.slice(2);if(e.preserve_comments){let s=w(e,o,2);return Eu(s,e_,e.byte_offset)}else return Cu(e)}else if(i===40){let o=n.slice(1);return U(e,Ca,o,1)}else if(i===41){let o=n.slice(1);return U(e,gt,o,1)}else if(i===123){let o=n.slice(1);return U(e,La,o,1)}else if(i===125){let o=n.slice(1);return U(e,Cc,o,1)}else if(i===91){let o=n.slice(1);return U(e,kd,o,1)}else if(i===93){let o=n.slice(1);return U(e,Qt,o,1)}else if(i===64){let o=n.slice(1);return U(e,Nd,o,1)}else if(i===58){let o=n.slice(1);return U(e,qd,o,1)}else if(i===44){let o=n.slice(1);return U(e,ls,o,1)}else if(n.startsWith("..")){let o=n.slice(2);return U(e,Su,o,2)}else if(i===46){let o=n.slice(1);return U(e,en,o,1)}else if(i===35){let o=n.slice(1);return U(e,Ud,o,1)}else if(n.startsWith("!=")){let o=n.slice(2);return U(e,Hd,o,2)}else if(i===33){let o=n.slice(1);return U(e,Vd,o,1)}else if(n.startsWith("==")){let o=n.slice(2);return U(e,Gd,o,2)}else if(i===61){let o=n.slice(1);return U(e,Ia,o,1)}else if(n.startsWith("|>")){let o=n.slice(2);return U(e,Xd,o,2)}else if(n.startsWith("||")){let o=n.slice(2);return U(e,zd,o,2)}else if(i===124){let o=n.slice(1);return U(e,Lc,o,1)}else if(n.startsWith("&&")){let o=n.slice(2);return U(e,Wd,o,2)}else if(n.startsWith("<<")){let o=n.slice(2);return U(e,Kd,o,2)}else if(n.startsWith(">>")){let o=n.slice(2);return U(e,ko,o,2)}else if(n.startsWith("<-")){let o=n.slice(2);return U(e,Ic,o,2)}else if(n.startsWith("->")){let o=n.slice(2);return U(e,Fa,o,2)}else if(n.startsWith("<>")){let o=n.slice(2);return U(e,Dd,o,2)}else if(n.startsWith("+.")){let o=n.slice(2);return U(e,Id,o,2)}else if(n.startsWith("-.")){let o=n.slice(2);return U(e,Fd,o,2)}else if(n.startsWith("*.")){let o=n.slice(2);return U(e,Ad,o,2)}else if(n.startsWith("/.")){let o=n.slice(2);return U(e,Md,o,2)}else if(n.startsWith("<=.")){let o=n.slice(3);return U(e,Od,o,3)}else if(n.startsWith("<.")){let o=n.slice(2);return U(e,Rd,o,2)}else if(n.startsWith(">=.")){let o=n.slice(3);return U(e,jd,o,3)}else if(n.startsWith(">.")){let o=n.slice(2);return U(e,Bd,o,2)}else if(n.startsWith("0b")){let o=n.slice(2),r=w(e,o,2);return a_(r,e.byte_offset,2)}else if(n.startsWith("0o")){let o=n.slice(2),r=w(e,o,2);return s_(r,e.byte_offset,2)}else if(n.startsWith("0x")){let o=n.slice(2),r=w(e,o,2);return r_(r,e.byte_offset,2)}else if(i===48){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===49){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===50){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===51){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===52){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===53){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===54){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===55){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===56){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(i===57){let o=n.slice(1),r=w(e,o,1);return Pt(r,$t,e.byte_offset,1)}else if(n.startsWith("-0")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-1")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-2")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-3")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-4")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-5")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-6")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-7")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-8")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(n.startsWith("-9")){let o=n.slice(2),r=w(e,o,2);return Pt(r,$t,e.byte_offset,2)}else if(i===43){let o=n.slice(1);return U(e,bd,o,1)}else if(i===45){let o=n.slice(1);return U(e,vu,o,1)}else if(i===42){let o=n.slice(1);return U(e,yd,o,1)}else if(i===47){let o=n.slice(1);return U(e,Td,o,1)}else if(n.startsWith("<=")){let o=n.slice(2);return U(e,Ed,o,2)}else if(i===60){let o=n.slice(1);return U(e,vd,o,1)}else if(n.startsWith(">=")){let o=n.slice(2);return U(e,Cd,o,2)}else if(i===62){let o=n.slice(1);return U(e,Sd,o,1)}else if(i===37){let o=n.slice(1);return U(e,Ld,o,1)}else if(i===34){let o=n.slice(1),r=w(e,o,1);return i_(r,e.byte_offset,0)}else if(i===95){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r+1,0);let l=s,u=l[0],a=l[1];return[u,new x([new st(a),new R(r)])]}else if(i===97){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===98){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===99){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===100){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===101){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===102){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===103){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===104){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===105){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===106){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===107){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===108){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===109){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===110){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===111){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===112){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===113){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===114){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===115){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===116){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===117){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===118){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===119){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===120){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===121){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===122){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ne(f,r,1);let l=s,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=ge:a==="auto"?c=xe:a==="case"?c=we:a==="const"?c=ke:a==="delegate"?c=be:a==="derive"?c=ye:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Se:a==="if"?c=Ee:a==="implement"?c=Ce:a==="import"?c=Le:a==="let"?c=Ie:a==="macro"?c=Fe:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new x([p,new R(r)])]}else if(i===65){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===66){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===67){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===68){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===69){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===70){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===71){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===72){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===73){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===74){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===75){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===76){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===77){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===78){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===79){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===80){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===81){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===82){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===83){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===84){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===85){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===86){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===87){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===88){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===89){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else if(i===90){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=Ge(f,r,1);let l=s,u=l[0],a=l[1];return[u,new x([new K(a),new R(r)])]}else{let o=Pl(e.source);if(o instanceof $){let r=o[0][0],s=o[0][1];return U(e,new Ec(r),s,ba(r))}else return[e,new x([Jd,new R(e.byte_offset)])]}}else if(t instanceof Mc){let n=Qd(e);return n instanceof $?n[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,cs,e.newlines),C]}else if(t instanceof Rc){let n=eh(e);return n instanceof $?n[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,cs,e.newlines),C]}else if(t instanceof Bc){let n=eh(e);if(n instanceof $)return n[0];{let i=Qd(e);return i instanceof $?i[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,cs,e.newlines),C]}}else{let n=e.source,i=n.charCodeAt(0);if(i===48){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===49){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===50){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===51){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===52){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===53){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===54){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===55){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===56){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else if(i===57){let o=n.slice(1),r=e.byte_offset,s,f=w(e,o,1);s=to(f,r,1);let l=s,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new x([new ue(a),new R(r)])]}else return[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,cs,e.newlines),C]}}function c_(e,t){for(;;){let n=e,i=t,o=l_(n),r=o[1];if(r instanceof x){if(r[0][0]instanceof as)return i;{let s=o[0],f=r[0];e=s,t=d(f,i)}}else e=o[0],t=i}}function sh(e){let t=c_(e,g);return S(t)}var Ma="src\\glance.gleam",zi=class extends h{constructor(t,n){super(),this.attributes=t,this.definition=n}};var Oa=class extends h{constructor(t,n){super(),this.name=t,this.arguments=n}};var Qo=class extends h{constructor(t,n,i,o,r){super(),this.imports=t,this.custom_types=n,this.type_aliases=i,this.constants=o,this.functions=r}};var Ju=class extends h{constructor(t,n,i,o,r,s){super(),this.location=t,this.name=n,this.publicity=i,this.parameters=o,this.return=r,this.body=s}};var E=class extends h{constructor(t,n){super(),this.start=t,this.end=n}};var Wi=class extends h{constructor(t,n,i){super(),this.location=t,this.patterns=n,this.function=i}};var hs=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.kind=n,this.pattern=i,this.annotation=o,this.value=r}};var Vi=class extends h{constructor(t,n,i){super(),this.location=t,this.expression=n,this.message=i}};var Gi=class extends h{constructor(t){super(),this[0]=t}};var ms=class extends h{},ah=new ms;var qc=class extends h{constructor(t){super(),this.message=t}};var Yu=class extends h{constructor(t,n){super(),this.pattern=t,this.annotation=n}};var Da=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var Zu=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var tn=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var Ki=class extends h{constructor(t,n){super(),this.location=t,this.name=n}};var Co=class extends h{constructor(t,n){super(),this.location=t,this.name=n}};var Qu=class extends h{constructor(t,n){super(),this.location=t,this.elements=n}};var Na=class extends h{constructor(t,n,i){super(),this.location=t,this.elements=n,this.tail=i}};var ep=class extends h{constructor(t,n,i){super(),this.location=t,this.pattern=n,this.name=i}};var Mn=class extends h{constructor(t,n,i,o){super(),this.location=t,this.prefix=n,this.prefix_name=i,this.rest_name=o}};var tp=class extends h{constructor(t,n){super(),this.location=t,this.segments=n}};var Hi=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.module=n,this.constructor$=i,this.arguments=o,this.with_spread=r}};var yo=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var To=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var Oi=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var yt=class extends h{constructor(t,n){super(),this.location=t,this.name=n}};var ji=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var Di=class extends h{constructor(t,n){super(),this.location=t,this.value=n}};var vo=class extends h{constructor(t,n){super(),this.location=t,this.statements=n}};var Ni=class extends h{constructor(t,n){super(),this.location=t,this.message=n}};var qi=class extends h{constructor(t,n){super(),this.location=t,this.message=n}};var $s=class extends h{constructor(t,n){super(),this.location=t,this.elements=n}};var So=class extends h{constructor(t,n,i){super(),this.location=t,this.elements=n,this.rest=i}};var qa=class extends h{constructor(t,n,i,o){super(),this.location=t,this.arguments=n,this.return_annotation=i,this.body=o}};var Uc=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.module=n,this.constructor$=i,this.record=o,this.fields=r}};var _s=class extends h{constructor(t,n,i){super(),this.location=t,this.container=n,this.label=i}};var $e=class extends h{constructor(t,n,i){super(),this.location=t,this.function=n,this.arguments=i}};var np=class extends h{constructor(t,n,i){super(),this.location=t,this.tuple=n,this.index=i}};var _n=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.label=n,this.function=i,this.arguments_before=o,this.arguments_after=r}};var Ui=class extends h{constructor(t,n){super(),this.location=t,this.segments=n}};var Ua=class extends h{constructor(t,n,i){super(),this.location=t,this.subjects=n,this.clauses=i}};var gs=class extends h{constructor(t,n,i,o){super(),this.location=t,this.name=n,this.left=i,this.right=o}};var Et=class extends h{constructor(t,n,i){super(),this.location=t,this.expression=n,this.message=i}};var op=class extends h{constructor(t,n,i){super(),this.patterns=t,this.guard=n,this.body=i}};var ip=class extends h{},fs=new ip;var rp=class extends h{},Au=new rp;var sp=class extends h{},Mu=new sp;var ap=class extends h{},us=new ap;var lp=class extends h{},Ru=new lp;var cp=class extends h{},Bu=new cp;var fp=class extends h{},Ou=new fp;var up=class extends h{},ju=new up;var pp=class extends h{},Du=new pp;var $p=class extends h{},Nu=new $p;var Pp=class extends h{},qu=new Pp;var dp=class extends h{},Uu=new dp;var hp=class extends h{},Vu=new hp;var mp=class extends h{},Gu=new mp;var _p=class extends h{},Hu=new _p;var gp=class extends h{constructor(t){super(),this[0]=t}};var xp=class extends h{constructor(t){super(),this[0]=t}};var wp=class extends h{constructor(t){super(),this[0]=t}};var xs=class extends h{},u_=new xs;var ws=class extends h{},p_=new ws;var ks=class extends h{},$_=new ks;var bs=class extends h{},P_=new bs;var ys=class extends h{},d_=new ys;var Ts=class extends h{},h_=new Ts;var Vc=class extends h{},m_=new Vc;var Gc=class extends h{},__=new Gc;var vs=class extends h{},g_=new vs;var Ss=class extends h{},x_=new Ss;var Hc=class extends h{},w_=new Hc;var zc=class extends h{},k_=new zc;var Xi=class extends h{},b_=new Xi;var Es=class extends h{},y_=new Es;var Wc=class extends h{},T_=new Wc;var Cs=class extends h{},v_=new Cs;var Kc=class extends h{},S_=new Kc;var Ls=class extends h{},E_=new Ls;var Xc=class extends h{},C_=new Xc;var Is=class extends h{},L_=new Is;var Jc=class extends h{},I_=new Jc;var Fs=class extends h{},F_=new Fs;var kp=class extends h{},A_=new kp;var bp=class extends h{constructor(t,n){super(),this.name=t,this.type_=n}};var yp=class extends h{constructor(t,n,i){super(),this.label=t,this.name=n,this.type_=i}};var At=class extends h{constructor(t){super(),this[0]=t}};var gn=class extends h{constructor(t){super(),this[0]=t}};var Tp=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.module=n,this.alias=i,this.unqualified_types=o,this.unqualified_values=r}};var vp=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.name=n,this.publicity=i,this.annotation=o,this.value=r}};var He=class extends h{constructor(t,n){super(),this.name=t,this.alias=n}};var Sp=class extends h{},Dc=new Sp;var Ep=class extends h{},zu=new Ep;var Cp=class extends h{constructor(t,n,i,o,r){super(),this.location=t,this.name=n,this.publicity=i,this.parameters=o,this.aliased=r}};var ei=class extends h{constructor(t,n,i,o,r,s){super(),this.location=t,this.name=n,this.publicity=i,this.opaque_=o,this.parameters=r,this.variants=s}};var Lp=class extends h{constructor(t,n,i){super(),this.name=t,this.fields=n,this.attributes=i}};var Ps=class extends h{constructor(t,n){super(),this.label=t,this.item=n}};var Ip=class extends h{constructor(t,n){super(),this.item=t,this.label=n}};var ja=class extends h{constructor(t){super(),this.item=t}};var Ji=class extends h{constructor(t,n,i){super(),this.label=t,this.label_location=n,this.item=i}};var Yi=class extends h{constructor(t,n){super(),this.label=t,this.location=n}};var Zo=class extends h{constructor(t){super(),this.item=t}};var Fp=class extends h{constructor(t,n,i,o){super(),this.location=t,this.name=n,this.module=i,this.parameters=o}};var Ap=class extends h{constructor(t,n){super(),this.location=t,this.elements=n}};var Mp=class extends h{constructor(t,n,i){super(),this.location=t,this.parameters=n,this.return=i}};var ds=class extends h{constructor(t,n){super(),this.location=t,this.name=n}};var Yc=class extends h{constructor(t,n){super(),this.location=t,this.name=n}};var Va=class extends h{},H=new Va;var A=class extends h{constructor(t,n){super(),this.token=t,this.position=n}};var bt=class extends h{constructor(t,n,i,o){super(),this.types=t,this.values=n,this.end=i,this.remaining_tokens=o}},Ft=class extends h{constructor(t,n,i,o){super(),this.fields=t,this.spread=n,this.end=i,this.remaining_tokens=o}},Yo=class extends h{},mn=new Yo,Rp=class extends h{},M_=new Rp,qe=class extends h{constructor(t,n,i,o){super(),this.values=t,this.spread=n,this.remaining_tokens=i,this.end=o}};function lh(e){return e instanceof xs?2:e instanceof ws?1:e instanceof ks||e instanceof bs?3:e instanceof ys||e instanceof Ts||e instanceof Vc||e instanceof Gc||e instanceof vs||e instanceof Ss||e instanceof Hc||e instanceof zc?4:e instanceof Xi?6:e instanceof Es||e instanceof Wc||e instanceof Cs||e instanceof Kc?7:e instanceof Ls||e instanceof Xc||e instanceof Is||e instanceof Jc||e instanceof Fs?8:5}function We(e){if(e instanceof _)return new b(H);{let t=e.head[0],n=e.head[1];return new b(new A(t,n))}}function dt(e,t,n){if(t instanceof _)return new b(H);{let i=t.head[0];if(ht(i,e)){let o=t.tail,r=t.head[1];return n(r,o)}else{let o=t.head[0],r=t.head[1];return new b(new A(o,r))}}}function zt(e,t,n,i){if(i instanceof _)return T(e(i),o=>{let r=o[0],s=o[1],f=d(r,n);if(s instanceof _)return new b(H);{let l=s.head[0];if(l instanceof ut){let u=s.tail,a=s.head[1].byte_offset;return new $(new qe(S(f),C,u,a+1))}else if(l instanceof D){let u=s.tail;if(u instanceof _)return zt(e,t,f,u);{let a=u.head[0];if(a instanceof ut){let c=u.tail,p=u.head[1].byte_offset;return new $(new qe(S(f),C,c,p+1))}else if(a instanceof pt){let c=u.tail;if(c instanceof _)return T(e(c),P=>{let m=P[0],k=P[1];return dt(Qt,k,(y,v)=>{let L=y.byte_offset;return new $(new qe(S(f),new x(m),v,L+1))})});if(c.head[0]instanceof ut){let p=u.head[1].byte_offset,P=c.head,m=c.tail,k=c.head[1].byte_offset;if(t instanceof x){let y=t[0],v=y(new E(p,p+1)),L=new qe(S(f),new x(v),m,k+1);return new $(L)}else return We(d(P,m))}else return T(e(c),P=>{let m=P[0],k=P[1];return dt(Qt,k,(y,v)=>{let L=y.byte_offset;return new $(new qe(S(f),new x(m),v,L+1))})})}else return zt(e,t,f,u)}}else{let u=l,a=s.head[1];return new b(new A(u,a))}}});{let o=i.head[0];if(o instanceof ut){let r=i.tail,s=i.head[1].byte_offset;return new $(new qe(S(n),C,r,s+1))}else if(o instanceof D){let r=i.tail;if(r instanceof _)return T(e(i),s=>{let f=s[0],l=s[1],u=d(f,n);if(l instanceof _)return new b(H);{let a=l.head[0];if(a instanceof ut){let c=l.tail,p=l.head[1].byte_offset;return new $(new qe(S(u),C,c,p+1))}else if(a instanceof D){let c=l.tail;if(c instanceof _)return zt(e,t,u,c);{let p=c.head[0];if(p instanceof ut){let P=c.tail,m=c.head[1].byte_offset;return new $(new qe(S(u),C,P,m+1))}else if(p instanceof pt){let P=c.tail;if(P instanceof _)return T(e(P),k=>{let y=k[0],v=k[1];return dt(Qt,v,(L,I)=>{let F=L.byte_offset;return new $(new qe(S(u),new x(y),I,F+1))})});if(P.head[0]instanceof ut){let m=c.head[1].byte_offset,k=P.head,y=P.tail,v=P.head[1].byte_offset;if(t instanceof x){let L=t[0],I=L(new E(m,m+1)),F=new qe(S(u),new x(I),y,v+1);return new $(F)}else return We(d(k,y))}else return T(e(P),k=>{let y=k[0],v=k[1];return dt(Qt,v,(L,I)=>{let F=L.byte_offset;return new $(new qe(S(u),new x(y),I,F+1))})})}else return zt(e,t,u,c)}}else{let c=a,p=l.head[1];return new b(new A(c,p))}}});if(r.head[0]instanceof ut&&!(n instanceof _)){let s=r.tail,f=r.head[1].byte_offset;return new $(new qe(S(n),C,s,f+1))}else return T(e(i),s=>{let f=s[0],l=s[1],u=d(f,n);if(l instanceof _)return new b(H);{let a=l.head[0];if(a instanceof ut){let c=l.tail,p=l.head[1].byte_offset;return new $(new qe(S(u),C,c,p+1))}else if(a instanceof D){let c=l.tail;if(c instanceof _)return zt(e,t,u,c);{let p=c.head[0];if(p instanceof ut){let P=c.tail,m=c.head[1].byte_offset;return new $(new qe(S(u),C,P,m+1))}else if(p instanceof pt){let P=c.tail;if(P instanceof _)return T(e(P),k=>{let y=k[0],v=k[1];return dt(Qt,v,(L,I)=>{let F=L.byte_offset;return new $(new qe(S(u),new x(y),I,F+1))})});if(P.head[0]instanceof ut){let m=c.head[1].byte_offset,k=P.head,y=P.tail,v=P.head[1].byte_offset;if(t instanceof x){let L=t[0],I=L(new E(m,m+1)),F=new qe(S(u),new x(I),y,v+1);return new $(F)}else return We(d(k,y))}else return T(e(P),k=>{let y=k[0],v=k[1];return dt(Qt,v,(L,I)=>{let F=L.byte_offset;return new $(new qe(S(u),new x(y),I,F+1))})})}else return zt(e,t,u,c)}}else{let c=a,p=l.head[1];return new b(new A(c,p))}}})}else if(o instanceof pt){let r=i.tail;if(r instanceof _)return T(e(r),f=>{let l=f[0],u=f[1];return dt(Qt,u,(a,c)=>{let p=a.byte_offset;return new $(new qe(S(n),new x(l),c,p+1))})});if(r.head[0]instanceof ut){let s=i.head[1].byte_offset,f=r.head,l=r.tail,u=r.head[1].byte_offset;if(t instanceof x){let a=t[0],c=a(new E(s,s+1)),p=new qe(S(n),new x(c),l,u+1);return new $(p)}else return We(d(f,l))}else return T(e(r),f=>{let l=f[0],u=f[1];return dt(Qt,u,(a,c)=>{let p=a.byte_offset;return new $(new qe(S(n),new x(l),c,p+1))})})}else return T(e(i),r=>{let s=r[0],f=r[1],l=d(s,n);if(f instanceof _)return new b(H);{let u=f.head[0];if(u instanceof ut){let a=f.tail,c=f.head[1].byte_offset;return new $(new qe(S(l),C,a,c+1))}else if(u instanceof D){let a=f.tail;if(a instanceof _)return zt(e,t,l,a);{let c=a.head[0];if(c instanceof ut){let p=a.tail,P=a.head[1].byte_offset;return new $(new qe(S(l),C,p,P+1))}else if(c instanceof pt){let p=a.tail;if(p instanceof _)return T(e(p),m=>{let k=m[0],y=m[1];return dt(Qt,y,(v,L)=>{let I=v.byte_offset;return new $(new qe(S(l),new x(k),L,I+1))})});if(p.head[0]instanceof ut){let P=a.head[1].byte_offset,m=p.head,k=p.tail,y=p.head[1].byte_offset;if(t instanceof x){let v=t[0],L=v(new E(P,P+1)),I=new qe(S(l),new x(L),k,y+1);return new $(I)}else return We(d(m,k))}else return T(e(p),m=>{let k=m[0],y=m[1];return dt(Qt,y,(v,L)=>{let I=v.byte_offset;return new $(new qe(S(l),new x(k),L,I+1))})})}else return zt(e,t,l,a)}}else{let a=u,c=f.head[1];return new b(new A(a,c))}}})}}function R_(e,t,n){return new Qo(e.imports,e.custom_types,e.type_aliases,e.constants,d(new zi(S(t),n),e.functions))}function ch(e,t,n){for(;;){let i=e,o=t,r=n;if(i instanceof x)if(o instanceof _){let s=i[0];return[C,d(s,g),r]}else{if(r instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let s=r.tail;if(s instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let f=i[0],l=o.head,u=o.tail,a=r.head,c=s.head,p=s.tail;if(lh(l)>=lh(f)){let m=new E(c.location.start,a.location.end),k=new gs(m,l,c,a),y=d(k,p);e=new x(f),t=u,n=y}else return[C,d(f,d(l,u)),r]}}}else if(o instanceof _){if(r instanceof _)return[C,o,r];if(r.tail instanceof _){let s=r.head;return[new x(s),o,r]}else throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{})}else{if(r instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let s=r.tail;if(s instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let f=o.head,l=o.tail,u=r.head,a=s.head,c=s.tail,p=d(new gs(new E(a.location.start,u.location.end),f,a,u),c);e=C,t=l,n=p}}}}}function B_(e){return e instanceof jr?new $(y_):e instanceof hn?new $(v_):e instanceof Dr?new $(E_):e instanceof Ai?new $(L_):e instanceof Nr?new $(d_):e instanceof qr?new $(x_):e instanceof Ur?new $(h_):e instanceof Vr?new $(g_):e instanceof Gr?new $(F_):e instanceof Hr?new $(T_):e instanceof zr?new $(S_):e instanceof Wr?new $(C_):e instanceof Kr?new $(I_):e instanceof Xr?new $(m_):e instanceof Jr?new $(k_):e instanceof Yr?new $(__):e instanceof Zr?new $(w_):e instanceof Cn?new $(A_):e instanceof es?new $($_):e instanceof ts?new $(P_):e instanceof ns?new $(p_):e instanceof os?new $(u_):e instanceof is?new $(b_):new b(void 0)}function O_(e){if(e instanceof _)return new b(void 0);{let t=e.tail,n=e.head[0];return W(B_(n),i=>[i,t])}}function Pe(e,t){if(e instanceof _)return T(t(e),n=>{let i=n[0],o=n[1];return new $([new Zo(i),o])});{let n=e.tail;if(n instanceof _)return T(t(e),i=>{let o=i[0],r=i[1];return new $([new Zo(o),r])});{let i=e.head[0];if(i instanceof B&&n.head[0]instanceof Zt){let o=e.head[1],r=n.tail,s=n.head[1],f=i[0];if(r instanceof _)return T(t(r),l=>{let u=l[0],a=l[1];return new $([new Ji(f,new E(o.byte_offset,s.byte_offset+1),u),a])});{let l=r.head[0];return l instanceof q?new $([new Yi(f,new E(o.byte_offset,s.byte_offset+1)),r]):l instanceof D?new $([new Yi(f,new E(o.byte_offset,s.byte_offset+1)),r]):T(t(r),u=>{let a=u[0],c=u[1];return new $([new Ji(f,new E(o.byte_offset,s.byte_offset+1),a),c])})}}else return T(t(e),o=>{let r=o[0],s=o[1];return new $([new Zo(r),s])})}}}function Z(e,t){return e+on(t)}function ie(e,t){return new E(e,e+on(t))}function lt(e,t,n,i){if(t instanceof _)return new b(H);{let o=t.head[0];if(ht(o,i)){let r=t.tail,s=t.head[1].byte_offset;return new $([S(e),Z(s,Aa(o)),r])}else return T(n(t),r=>{let s=r[0],f=r[1];if(f instanceof _)return new b(H);{let l=f.head[0];if(l instanceof D){let u=f.tail;return lt(d(s,e),u,n,i)}else{let u=l;if(ht(u,i)){let a=f.tail,c=f.head[1].byte_offset,p=Z(c,Aa(u));return new $([S(d(s,e)),p,a])}else{let a=l,c=f.head[1];return new b(new A(a,c))}}}})}}function _h(e,t,n){return T((()=>{if(n instanceof _)return new b(H);{let i=n.head[0];if(i instanceof B){let o=n.tail;if(o instanceof _){let r=i[0];if(r==="bytes"){let s=o;return new $([fs,s])}else if(r==="binary"){let s=o;return new $([fs,s])}else if(r==="int"){let s=o;return new $([Au,s])}else if(r==="float"){let s=o;return new $([Mu,s])}else if(r==="bits"){let s=o;return new $([us,s])}else if(r==="bit_string"){let s=o;return new $([us,s])}else if(r==="utf8"){let s=o;return new $([Ru,s])}else if(r==="utf16"){let s=o;return new $([Bu,s])}else if(r==="utf32"){let s=o;return new $([Ou,s])}else if(r==="utf8_codepoint"){let s=o;return new $([ju,s])}else if(r==="utf16_codepoint"){let s=o;return new $([Du,s])}else if(r==="utf32_codepoint"){let s=o;return new $([Nu,s])}else if(r==="signed"){let s=o;return new $([qu,s])}else if(r==="unsigned"){let s=o;return new $([Uu,s])}else if(r==="big"){let s=o;return new $([Vu,s])}else if(r==="little"){let s=o;return new $([Gu,s])}else if(r==="native"){let s=o;return new $([Hu,s])}else{let s=i,f=n.head[1];return new b(new A(s,f))}}else if(o.head[0]instanceof Ye){let r=i[0];if(r==="size"){let s=o.tail;return T(e(s),f=>{let l=f[0],u=f[1];return dt(gt,u,(a,c)=>new $([new gp(l),c]))})}else if(r==="unit"){let s=o.tail;if(s instanceof _){let f=i,l=n.head[1];return new b(new A(f,l))}else{let f=s.tail;if(f instanceof _){let l=i,u=n.head[1];return new b(new A(l,u))}else{let l=s.head[0];if(l instanceof ue&&f.head[0]instanceof q){let u=n.head[1],a=f.tail,c=l[0],p=kn(c);if(p instanceof $){let P=p[0];return new $([new wp(P),a])}else return new b(new A(new ue(c),u))}else{let u=i,a=n.head[1];return new b(new A(u,a))}}}}else if(r==="bytes"){let s=o;return new $([fs,s])}else if(r==="binary"){let s=o;return new $([fs,s])}else if(r==="int"){let s=o;return new $([Au,s])}else if(r==="float"){let s=o;return new $([Mu,s])}else if(r==="bits"){let s=o;return new $([us,s])}else if(r==="bit_string"){let s=o;return new $([us,s])}else if(r==="utf8"){let s=o;return new $([Ru,s])}else if(r==="utf16"){let s=o;return new $([Bu,s])}else if(r==="utf32"){let s=o;return new $([Ou,s])}else if(r==="utf8_codepoint"){let s=o;return new $([ju,s])}else if(r==="utf16_codepoint"){let s=o;return new $([Du,s])}else if(r==="utf32_codepoint"){let s=o;return new $([Nu,s])}else if(r==="signed"){let s=o;return new $([qu,s])}else if(r==="unsigned"){let s=o;return new $([Uu,s])}else if(r==="big"){let s=o;return new $([Vu,s])}else if(r==="little"){let s=o;return new $([Gu,s])}else if(r==="native"){let s=o;return new $([Hu,s])}else{let s=i,f=n.head[1];return new b(new A(s,f))}}else{let r=i[0];if(r==="bytes"){let s=o;return new $([fs,s])}else if(r==="binary"){let s=o;return new $([fs,s])}else if(r==="int"){let s=o;return new $([Au,s])}else if(r==="float"){let s=o;return new $([Mu,s])}else if(r==="bits"){let s=o;return new $([us,s])}else if(r==="bit_string"){let s=o;return new $([us,s])}else if(r==="utf8"){let s=o;return new $([Ru,s])}else if(r==="utf16"){let s=o;return new $([Bu,s])}else if(r==="utf32"){let s=o;return new $([Ou,s])}else if(r==="utf8_codepoint"){let s=o;return new $([ju,s])}else if(r==="utf16_codepoint"){let s=o;return new $([Du,s])}else if(r==="utf32_codepoint"){let s=o;return new $([Nu,s])}else if(r==="signed"){let s=o;return new $([qu,s])}else if(r==="unsigned"){let s=o;return new $([Uu,s])}else if(r==="big"){let s=o;return new $([Vu,s])}else if(r==="little"){let s=o;return new $([Gu,s])}else if(r==="native"){let s=o;return new $([Hu,s])}else{let s=i,f=n.head[1];return new b(new A(s,f))}}}else if(i instanceof ue){let o=n.tail,r=n.head[1],s=i[0],f=kn(s);if(f instanceof $){let l=f[0];return new $([new xp(l),o])}else return new b(new A(new ue(s),r))}else{let o=i,r=n.head[1];return new b(new A(o,r))}}})(),i=>{let o=i[0],r=i[1],s=d(o,t);if(r instanceof _)return new $([S(s),r]);if(r.head[0]instanceof hn){let f=r.tail;return _h(e,s,f)}else return new $([S(s),r])})}function j_(e,t){if(t instanceof _)return new $([g,t]);if(t.head[0]instanceof Zt){let n=t.tail;return _h(e,g,n)}else return new $([g,t])}function ps(e,t){return T(e(t),n=>{let i=n[0],o=n[1],r=j_(e,o);return T(r,s=>{let f=s[0],l=s[1];return new $([[i,f],l])})})}function Ga(e,t,n,i){return T(n(t),o=>{let r=o[0],s=o[1],f=d(r,e);if(s instanceof _)return new $([S(f),s]);{let l=s.head[0];if(ht(l,i)){let u=s.tail;return Ga(f,u,n,i)}else return new $([S(f),s])}})}function It(e,t){if(t instanceof _)return T(Pe(t,Rn),i=>{let o=i[0],r=i[1],s=d(o,e);if(r instanceof _)return new b(H);{let f=r.head[0];if(f instanceof q){let l=r.tail,u=r.head[1].byte_offset;return new $(new Ft(s,!1,u+1,l))}else if(f instanceof D){let l=r.tail;if(l instanceof _)return It(s,l);{let u=l.tail;if(u instanceof _)return It(s,l);if(l.head[0]instanceof pt&&u.head[0]instanceof q){let a=u.tail,c=u.head[1].byte_offset;return new $(new Ft(s,!0,c+1,a))}else return It(s,l)}}else{let l=f,u=r.head[1];return new b(new A(l,u))}}});{let n=t.head[0];if(n instanceof q){let i=t.tail,o=t.head[1].byte_offset;return new $(new Ft(e,!1,o+1,i))}else if(n instanceof pt){let i=t.tail;if(i instanceof _)return T(Pe(t,Rn),r=>{let s=r[0],f=r[1],l=d(s,e);if(f instanceof _)return new b(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset;return new $(new Ft(l,!1,c+1,a))}else if(u instanceof D){let a=f.tail;if(a instanceof _)return It(l,a);{let c=a.tail;if(c instanceof _)return It(l,a);if(a.head[0]instanceof pt&&c.head[0]instanceof q){let p=c.tail,P=c.head[1].byte_offset;return new $(new Ft(l,!0,P+1,p))}else return It(l,a)}}else{let a=u,c=f.head[1];return new b(new A(a,c))}}});{let o=i.tail;if(o instanceof _)if(i.head[0]instanceof q){let r=o,s=i.head[1].byte_offset;return new $(new Ft(e,!0,s+1,r))}else return T(Pe(t,Rn),s=>{let f=s[0],l=s[1],u=d(f,e);if(l instanceof _)return new b(H);{let a=l.head[0];if(a instanceof q){let c=l.tail,p=l.head[1].byte_offset;return new $(new Ft(u,!1,p+1,c))}else if(a instanceof D){let c=l.tail;if(c instanceof _)return It(u,c);{let p=c.tail;if(p instanceof _)return It(u,c);if(c.head[0]instanceof pt&&p.head[0]instanceof q){let P=p.tail,m=p.head[1].byte_offset;return new $(new Ft(u,!0,m+1,P))}else return It(u,c)}}else{let c=a,p=l.head[1];return new b(new A(c,p))}}});else{let r=i.head[0];if(r instanceof q){let s=o,f=i.head[1].byte_offset;return new $(new Ft(e,!0,f+1,s))}else if(r instanceof D&&o.head[0]instanceof q){let s=o.tail,f=o.head[1].byte_offset;return new $(new Ft(e,!0,f+1,s))}else return T(Pe(t,Rn),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset;return new $(new Ft(a,!1,P+1,p))}else if(c instanceof D){let p=u.tail;if(p instanceof _)return It(a,p);{let P=p.tail;if(P instanceof _)return It(a,p);if(p.head[0]instanceof pt&&P.head[0]instanceof q){let m=P.tail,k=P.head[1].byte_offset;return new $(new Ft(a,!0,k+1,m))}else return It(a,p)}}else{let p=c,P=u.head[1];return new b(new A(p,P))}}})}}}else return T(Pe(t,Rn),o=>{let r=o[0],s=o[1],f=d(r,e);if(s instanceof _)return new b(H);{let l=s.head[0];if(l instanceof q){let u=s.tail,a=s.head[1].byte_offset;return new $(new Ft(f,!1,a+1,u))}else if(l instanceof D){let u=s.tail;if(u instanceof _)return It(f,u);{let a=u.tail;if(a instanceof _)return It(f,u);if(u.head[0]instanceof pt&&a.head[0]instanceof q){let c=a.tail,p=a.head[1].byte_offset;return new $(new Ft(f,!0,p+1,c))}else return It(f,u)}}else{let u=l,a=s.head[1];return new b(new A(u,a))}}})}}function fh(e,t,n,i,o){if(n instanceof _){let r=new E(i,Z(o,t)),s=new Hi(r,e,t,g,!1);return new $([s,n])}else if(n.head[0]instanceof Ye){let r=n.tail,s=It(g,r);return T(s,f=>{let l=f.fields,u=f.spread,a=f.end,c=f.remaining_tokens,p=S(l),P=new Hi(new E(i,a),e,t,p,u);return new $([P,c])})}else{let r=new E(i,Z(o,t)),s=new Hi(r,e,t,g,!1);return new $([s,n])}}function Rn(e){return T((()=>{if(e instanceof _)return new b(H);{let t=e.head[0];if(t instanceof B){let n=e.tail;if(n instanceof _){let i=n,o=e.head[1].byte_offset,r=t[0];return new $([new Co(ie(o,r),r),i])}else{let i=n.tail;if(i instanceof _){let o=n,r=e.head[1].byte_offset,s=t[0];return new $([new Co(ie(r,s),s),o])}else if(n.head[0]instanceof Zn){let o=i.head[0];if(o instanceof K){let r=e.head[1].byte_offset,s=t[0],f=i.tail,l=i.head[1].byte_offset,u=o[0];return fh(new x(s),u,f,r,l)}else{let r=n,s=e.head[1].byte_offset,f=t[0];return new $([new Co(ie(s,f),f),r])}}else{let o=n,r=e.head[1].byte_offset,s=t[0];return new $([new Co(ie(r,s),s),o])}}}else if(t instanceof K){let n=e.tail,i=e.head[1].byte_offset,o=t[0];return fh(C,o,n,i,i)}else if(t instanceof st){let n=e.tail,i=e.head[1].byte_offset,o=t[0];return new $([new Ki(new E(i,Z(i,o)+1),o),n])}else if(t instanceof ue){let n=e.tail,i=e.head[1].byte_offset,o=t[0];return new $([new Da(ie(i,o),o),n])}else if(t instanceof St){let n=e.tail,i=e.head[1].byte_offset,o=t[0];return new $([new Zu(ie(i,o),o),n])}else if(t instanceof dn){let n=e.tail;if(n instanceof _){let i=n,o=e.head[1].byte_offset,r=t[0];return new $([new tn(new E(o,Z(o,r)+2),r),i])}else{let i=n.tail;if(i instanceof _){let o=n,r=e.head[1].byte_offset,s=t[0];return new $([new tn(new E(r,Z(r,s)+2),s),o])}else{let o=i.tail;if(o instanceof _)if(n.head[0]instanceof Cn){let r=i.head[0];if(r instanceof B){let s=e.head[1].byte_offset,f=t[0],l=o,u=i.head[1].byte_offset,a=r[0],c=new E(s,Z(u,a)),p=new Mn(c,f,C,new At(a));return new $([p,l])}else if(r instanceof st){let s=e.head[1].byte_offset,f=t[0],l=o,u=i.head[1].byte_offset,a=r[0],c=new E(s,Z(u,a)+1),p=new Mn(c,f,C,new gn(a));return new $([p,l])}else{let s=n,f=e.head[1].byte_offset,l=t[0];return new $([new tn(new E(f,Z(f,l)+2),l),s])}}else{let r=n,s=e.head[1].byte_offset,f=t[0];return new $([new tn(new E(s,Z(s,f)+2),f),r])}else{let r=o.tail;if(r instanceof _)if(n.head[0]instanceof Cn){let s=i.head[0];if(s instanceof B){let f=e.head[1].byte_offset,l=t[0],u=o,a=i.head[1].byte_offset,c=s[0],p=new E(f,Z(a,c)),P=new Mn(p,l,C,new At(c));return new $([P,u])}else if(s instanceof st){let f=e.head[1].byte_offset,l=t[0],u=o,a=i.head[1].byte_offset,c=s[0],p=new E(f,Z(a,c)+1),P=new Mn(p,l,C,new gn(c));return new $([P,u])}else{let f=n,l=e.head[1].byte_offset,u=t[0];return new $([new tn(new E(l,Z(l,u)+2),u),f])}}else{let s=n,f=e.head[1].byte_offset,l=t[0];return new $([new tn(new E(f,Z(f,l)+2),l),s])}else{let s=n.head[0];if(s instanceof _t){let f=i.head[0];if(f instanceof B&&o.head[0]instanceof Cn){let l=r.head[0];if(l instanceof B){let u=e.head[1].byte_offset,a=t[0],c=r.tail,p=r.head[1].byte_offset,P=f[0],m=l[0],k=new E(u,Z(p,m)),y=new Mn(k,a,new x(new At(P)),new At(m));return new $([y,c])}else if(l instanceof st){let u=e.head[1].byte_offset,a=t[0],c=r.tail,p=r.head[1].byte_offset,P=f[0],m=l[0],k=new E(u,Z(p,m)+1),y=new Mn(k,a,new x(new At(P)),new gn(m));return new $([y,c])}else{let u=n,a=e.head[1].byte_offset,c=t[0];return new $([new tn(new E(a,Z(a,c)+2),c),u])}}else if(f instanceof st&&o.head[0]instanceof Cn){let l=r.head[0];if(l instanceof B){let u=e.head[1].byte_offset,a=t[0],c=r.tail,p=r.head[1].byte_offset,P=f[0],m=l[0],k=new E(u,Z(p,m)),y=new Mn(k,a,new x(new gn(P)),new At(m));return new $([y,c])}else{let u=n,a=e.head[1].byte_offset,c=t[0];return new $([new tn(new E(a,Z(a,c)+2),c),u])}}else{let l=n,u=e.head[1].byte_offset,a=t[0];return new $([new tn(new E(u,Z(u,a)+2),a),l])}}else if(s instanceof Cn){let f=i.head[0];if(f instanceof B){let l=e.head[1].byte_offset,u=t[0],a=o,c=i.head[1].byte_offset,p=f[0],P=new E(l,Z(c,p)),m=new Mn(P,u,C,new At(p));return new $([m,a])}else if(f instanceof st){let l=e.head[1].byte_offset,u=t[0],a=o,c=i.head[1].byte_offset,p=f[0],P=new E(l,Z(c,p)+1),m=new Mn(P,u,C,new gn(p));return new $([m,a])}else{let l=n,u=e.head[1].byte_offset,a=t[0];return new $([new tn(new E(u,Z(u,a)+2),a),l])}}else{let f=n,l=e.head[1].byte_offset,u=t[0];return new $([new tn(new E(l,Z(l,u)+2),u),f])}}}}}}else if(t instanceof En){let n=e.tail,i=e.head[1].byte_offset,o=zt(Rn,new x(r=>new Ki(r,"")),g,n);return W(o,r=>{let s=r.values,f=r.spread,l=r.remaining_tokens,u=r.end;return[new Na(new E(i,u),s,f),l]})}else if(t instanceof Ln){let n=e.tail;if(n instanceof _){let i=t,o=e.head[1];return new b(new A(i,o))}else if(n.head[0]instanceof Ye){let i=e.head[1].byte_offset,o=n.tail,r=lt(g,o,Rn,gt);return T(r,s=>{let f=s[0],l=s[1],u=s[2];return new $([new Qu(new E(i,l),f),u])})}else{let i=t,o=e.head[1];return new b(new A(i,o))}}else if(t instanceof In){let n=e.tail,i=e.head[1].byte_offset,r=lt(g,n,s=>ps(Rn,s),ko);return T(r,s=>{let f=s[0],l=s[1],u=s[2];return new $([new tp(new E(i,l),f),u])})}else{let n=t,i=e.head[1];return new b(new A(n,i))}}})(),t=>{let n=t[0],i=t[1];if(i instanceof _)return new $([n,i]);{let o=i.tail;if(o instanceof _)return new $([n,i]);if(i.head[0]instanceof _t){let r=o.head[0];if(r instanceof B){let s=o.tail,f=o.head[1].byte_offset,l=r[0],u=new E(n.location.start,Z(f,l)),a=new ep(u,n,l);return new $([a,s])}else return new $([n,i])}else return new $([n,i])}})}function Wu(e,t,n,i,o){return T((()=>{if(n instanceof _){let r=o+on(e);return new $([g,r,n])}else if(n.head[0]instanceof Ye){let r=n.tail;return lt(g,r,Bn,gt)}else{let r=o+on(e);return new $([g,r,n])}})(),r=>{let s=r[0],f=r[1],l=r[2],u=new Fp(new E(i,f),e,t,s);return new $([u,l])})}function D_(e,t){let n=lt(g,t,Bn,gt);return T(n,i=>{let o=i[0],r=i[1],s=i[2],f=new E(e,r);return new $([new Ap(f,o),s])})}function N_(e,t){let n=lt(g,t,Bn,gt);return T(n,i=>{let o=i[0],r=i[2];return dt(Fa,r,(s,f)=>T(Bn(f),l=>{let u=l[0],a=l[1],c=new E(e,u.location.end);return new $([new Mp(c,o,u),a])}))})}function Bn(e){if(e instanceof _)return new b(H);{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof B){let i=t,o=e.head[1].byte_offset,r=n[0],s=new ds(ie(o,r),r);return new $([s,i])}else if(n instanceof K){let i=t,o=e.head[1].byte_offset,r=n[0];return Wu(r,C,i,o,o)}else if(n instanceof st){let i=t,o=e.head[1].byte_offset,r=n[0],s=new Yc(new E(o,Z(o,r)+1),r);return new $([s,i])}else{let i=n,o=e.head[1];return new b(new A(i,o))}}else{let n=e.head[0];if(n instanceof B){let i=t.tail;if(i instanceof _){let o=t,r=e.head[1].byte_offset,s=n[0],f=new ds(ie(r,s),s);return new $([f,o])}else if(t.head[0]instanceof Zn){let o=i.head[0];if(o instanceof K){let r=e.head[1].byte_offset,s=n[0],f=i.tail,l=i.head[1].byte_offset,u=o[0];return Wu(u,new x(s),f,r,l)}else{let r=t,s=e.head[1].byte_offset,f=n[0],l=new ds(ie(s,f),f);return new $([l,r])}}else{let o=t,r=e.head[1].byte_offset,s=n[0],f=new ds(ie(r,s),s);return new $([f,o])}}else if(n instanceof K){let i=t,o=e.head[1].byte_offset,r=n[0];return Wu(r,C,i,o,o)}else if(n instanceof st){let i=t,o=e.head[1].byte_offset,r=n[0],s=new Yc(new E(o,Z(o,r)+1),r);return new $([s,i])}else if(n instanceof Jt&&t.head[0]instanceof Ye){let i=e.head[1].byte_offset,o=t.tail;return N_(i,o)}else if(n instanceof Ln&&t.head[0]instanceof Ye){let i=e.head[1].byte_offset,o=t.tail;return D_(i,o)}else{let i=n,o=e.head[1];return new b(new A(i,o))}}}}function gh(e,t){if(t instanceof _)return new $([C,e,t]);if(t.head[0]instanceof ss){let n=t.tail;return T(Bn(n),i=>{let o=i[0],r=i[1];return new $([new x(o),o.location.end,r])})}else return new $([C,e,t])}function Ha(e){if(e instanceof _)return new $([C,e]);if(e.head[0]instanceof Zt){let t=e.tail;return W(Bn(t),n=>{let i=n[0],o=n[1];return[new x(i),o]})}else return new $([C,e])}function q_(e){return T((()=>{if(e instanceof _)return new b(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,i=t[0];return new $([new At(i),n])}else if(t instanceof st){let n=e.tail,i=t[0];return new $([new gn(i),n])}else{let n=t,i=e.head[1];return new b(new A(n,i))}}})(),t=>{let n=t[0],i=t[1];return T(Ha(i),o=>{let r=o[0],s=o[1];return new $([new bp(n,r),s])})})}function uh(e){return T(Rn(e),t=>{let n=t[0],i=t[1];return T(Ha(i),o=>{let r=o[0],s=o[1];return new $([new Yu(n,r),s])})})}function Fn(e,t,n,i,o){if(o instanceof _)return new b(H);if(o.head[0]instanceof q){let r=o.tail,s=o.head[1].byte_offset,f=new E(t.location.start,s+1),l=new _n(f,e,t,n,S(i));return ce(l,r)}else return T(Pe(o,j),r=>{let s=r[0],f=r[1],l=d(s,i);if(f instanceof _)return new b(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset,p=new E(t.location.start,c+1),P=new _n(p,e,t,n,S(l));return ce(P,a)}else if(u instanceof D){let a=f.tail;return Fn(e,t,n,l,a)}else{let a=u,c=f.head[1];return new b(new A(a,c))}}})}function ze(e,t,n){if(n instanceof _)return new b(H);{let i=n.head[0];if(i instanceof B){let o=n.tail;if(o instanceof _)return T(Pe(n,j),r=>{let s=r[0],f=r[1],l=d(s,e);if(f instanceof _)return new b(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset,p=new E(t.location.start,c+1),P=new $e(p,t,S(l));return ce(P,a)}else if(u instanceof D){let a=f.tail;return ze(l,t,a)}else{let a=u,c=f.head[1];return new b(new A(a,c))}}});{let r=o.tail;if(r instanceof _)return T(Pe(n,j),s=>{let f=s[0],l=s[1],u=d(f,e);if(l instanceof _)return new b(H);{let a=l.head[0];if(a instanceof q){let c=l.tail,p=l.head[1].byte_offset,P=new E(t.location.start,p+1),m=new $e(P,t,S(u));return ce(m,c)}else if(a instanceof D){let c=l.tail;return ze(u,t,c)}else{let c=a,p=l.head[1];return new b(new A(c,p))}}});{let s=r.tail;if(s instanceof _)if(o.head[0]instanceof Zt){let f=r.head[0];if(f instanceof st&&f[0]===""){let l=i[0],u=s;return Fn(new x(l),t,S(e),g,u)}else return T(Pe(n,j),l=>{let u=l[0],a=l[1],c=d(u,e);if(a instanceof _)return new b(H);{let p=a.head[0];if(p instanceof q){let P=a.tail,m=a.head[1].byte_offset,k=new E(t.location.start,m+1),y=new $e(k,t,S(c));return ce(y,P)}else if(p instanceof D){let P=a.tail;return ze(c,t,P)}else{let P=p,m=a.head[1];return new b(new A(P,m))}}})}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}});else{let f=s.tail;if(f instanceof _)if(o.head[0]instanceof Zt){let l=r.head[0];if(l instanceof st){let u=s.head[0];if(u instanceof q)if(l[0]===""){let a=i[0],c=f,p=s.head[1].byte_offset,P=new E(t.location.start,p+1),m=new _n(P,new x(a),t,S(e),g);return ce(m,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}});else if(u instanceof D)if(l[0]===""){let a=i[0],c=f;return Fn(new x(a),t,S(e),g,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}});else if(l[0]===""){let a=i[0],c=s;return Fn(new x(a),t,S(e),g,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}})}else return T(Pe(n,j),u=>{let a=u[0],c=u[1],p=d(a,e);if(c instanceof _)return new b(H);{let P=c.head[0];if(P instanceof q){let m=c.tail,k=c.head[1].byte_offset,y=new E(t.location.start,k+1),v=new $e(y,t,S(p));return ce(v,m)}else if(P instanceof D){let m=c.tail;return ze(p,t,m)}else{let m=P,k=c.head[1];return new b(new A(m,k))}}})}else return T(Pe(n,j),l=>{let u=l[0],a=l[1],c=d(u,e);if(a instanceof _)return new b(H);{let p=a.head[0];if(p instanceof q){let P=a.tail,m=a.head[1].byte_offset,k=new E(t.location.start,m+1),y=new $e(k,t,S(c));return ce(y,P)}else if(p instanceof D){let P=a.tail;return ze(c,t,P)}else{let P=p,m=a.head[1];return new b(new A(P,m))}}});else if(o.head[0]instanceof Zt){let l=r.head[0];if(l instanceof st){let u=s.head[0];if(u instanceof q)if(l[0]===""){let a=i[0],c=f,p=s.head[1].byte_offset,P=new E(t.location.start,p+1),m=new _n(P,new x(a),t,S(e),g);return ce(m,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}});else if(u instanceof D)if(f.head[0]instanceof q)if(l[0]===""){let a=i[0],c=f.tail,p=f.head[1].byte_offset,P=new E(t.location.start,p+1),m=new _n(P,new x(a),t,S(e),g);return ce(m,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}});else if(l[0]===""){let a=i[0],c=f;return Fn(new x(a),t,S(e),g,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}});else if(l[0]===""){let a=i[0],c=s;return Fn(new x(a),t,S(e),g,c)}else return T(Pe(n,j),a=>{let c=a[0],p=a[1],P=d(c,e);if(p instanceof _)return new b(H);{let m=p.head[0];if(m instanceof q){let k=p.tail,y=p.head[1].byte_offset,v=new E(t.location.start,y+1),L=new $e(v,t,S(P));return ce(L,k)}else if(m instanceof D){let k=p.tail;return ze(P,t,k)}else{let k=m,y=p.head[1];return new b(new A(k,y))}}})}else return T(Pe(n,j),u=>{let a=u[0],c=u[1],p=d(a,e);if(c instanceof _)return new b(H);{let P=c.head[0];if(P instanceof q){let m=c.tail,k=c.head[1].byte_offset,y=new E(t.location.start,k+1),v=new $e(y,t,S(p));return ce(v,m)}else if(P instanceof D){let m=c.tail;return ze(p,t,m)}else{let m=P,k=c.head[1];return new b(new A(m,k))}}})}else return T(Pe(n,j),l=>{let u=l[0],a=l[1],c=d(u,e);if(a instanceof _)return new b(H);{let p=a.head[0];if(p instanceof q){let P=a.tail,m=a.head[1].byte_offset,k=new E(t.location.start,m+1),y=new $e(k,t,S(c));return ce(y,P)}else if(p instanceof D){let P=a.tail;return ze(c,t,P)}else{let P=p,m=a.head[1];return new b(new A(P,m))}}})}}}}else if(i instanceof st){let o=n.tail;if(o instanceof _)if(i[0]===""){let r=o;return Fn(C,t,S(e),g,r)}else return T(Pe(n,j),r=>{let s=r[0],f=r[1],l=d(s,e);if(f instanceof _)return new b(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset,p=new E(t.location.start,c+1),P=new $e(p,t,S(l));return ce(P,a)}else if(u instanceof D){let a=f.tail;return ze(l,t,a)}else{let a=u,c=f.head[1];return new b(new A(a,c))}}});else{let r=o.tail;if(r instanceof _){let s=o.head[0];if(s instanceof q)if(i[0]===""){let f=r,l=o.head[1].byte_offset,u=new E(t.location.start,l+1),a=new _n(u,C,t,S(e),g);return ce(a,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}});else if(s instanceof D)if(i[0]===""){let f=r;return Fn(C,t,S(e),g,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}});else if(i[0]===""){let f=o;return Fn(C,t,S(e),g,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}})}else{let s=o.head[0];if(s instanceof q)if(i[0]===""){let f=r,l=o.head[1].byte_offset,u=new E(t.location.start,l+1),a=new _n(u,C,t,S(e),g);return ce(a,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}});else if(s instanceof D)if(r.head[0]instanceof q)if(i[0]===""){let f=r.tail,l=r.head[1].byte_offset,u=new E(t.location.start,l+1),a=new _n(u,C,t,S(e),g);return ce(a,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}});else if(i[0]===""){let f=r;return Fn(C,t,S(e),g,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}});else if(i[0]===""){let f=o;return Fn(C,t,S(e),g,f)}else return T(Pe(n,j),f=>{let l=f[0],u=f[1],a=d(l,e);if(u instanceof _)return new b(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,P=u.head[1].byte_offset,m=new E(t.location.start,P+1),k=new $e(m,t,S(a));return ce(k,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,P=u.head[1];return new b(new A(p,P))}}})}}}else if(i instanceof q){let o=n.tail,r=n.head[1].byte_offset,s=new E(t.location.start,r+1),f=new $e(s,t,S(e));return ce(f,o)}else return T(Pe(n,j),o=>{let r=o[0],s=o[1],f=d(r,e);if(s instanceof _)return new b(H);{let l=s.head[0];if(l instanceof q){let u=s.tail,a=s.head[1].byte_offset,c=new E(t.location.start,a+1),p=new $e(c,t,S(f));return ce(p,u)}else if(l instanceof D){let u=s.tail;return ze(f,t,u)}else{let u=l,a=s.head[1];return new b(new A(u,a))}}})}}function ce(e,t){for(;;){let n=e,i=t;if(i instanceof _)return new $([n,i]);{let o=i.tail;if(o instanceof _)return i.head[0]instanceof Ye?ze(g,n,o):new $([n,i]);{let r=i.head[0];if(r instanceof Ye)return ze(g,n,o);if(r instanceof Zn){let s=o.head[0];if(s instanceof B){let f=o.tail,l=o.head[1].byte_offset,u=s[0],a=new E(n.location.start,Z(l,u));e=new _s(a,n,u),t=f}else if(s instanceof K){let f=o.tail,l=o.head[1].byte_offset,u=s[0],a=new E(n.location.start,Z(l,u));e=new _s(a,n,u),t=f}else if(s instanceof ue){let f=o.tail,l=s,u=o.head[1],a=s[0],c=kn(a);if(c instanceof $){let p=c[0],P=Z(u.byte_offset,a),m=new E(n.location.start,P);e=new np(m,n,p),t=f}else return new b(new A(l,u))}else return new $([n,i])}else return new $([n,i])}}}}function no(e,t,n,i){if(e instanceof _){let o=ie(n,i),r=t(o,C);return new $([new x(r),e])}else if(e.head[0]instanceof _t){let o=e.tail;return T(j(o),r=>{let s=r[0],f=r[1],l=new E(n,s.location.end),u=t(l,new x(s));return new $([new x(u),f])})}else{let o=ie(n,i),r=t(o,C);return new $([new x(r),e])}}function U_(e){if(e instanceof _)return new $([C,e]);if(e.head[0]instanceof Mr){let t=e.tail;return T(j(t),n=>{let i=n[0],o=n[1];return new $([new x(i),o])})}else return new $([C,e])}function V_(e){let n=Ga(g,e,i=>Ga(g,i,Rn,ls),Lc);return T(n,i=>{let o=i[0],r=i[1];return T(U_(r),s=>{let f=s[0],l=s[1];return dt(Fa,l,(u,a)=>W(j(a),c=>{let p=c[0],P=c[1];return[new op(o,f,p),P]}))})})}function Bp(e,t){return T(V_(t),n=>{let i=n[0],o=n[1],r=d(i,e);if(o instanceof _)return Bp(r,o);if(o.head[0]instanceof ft){let s=o.tail,f=o.head[1].byte_offset;return new $([S(r),s,f+1])}else return Bp(r,o)})}function xh(e,t){return T(j(t),n=>{let i=n[0],o=n[1],r=d(i,e);if(o instanceof _)return new $([S(r),o]);if(o.head[0]instanceof D){let s=o.tail;return xh(r,s)}else return new $([S(r),o])})}function Ra(e,t){return T(xh(g,e),n=>{let i=n[0],o=n[1];return dt(La,o,(r,s)=>T(Bp(g,s),f=>{let l=f[0],u=f[1],a=f[2];return new $([new x(new Ua(new E(t,a),i,l)),u])}))})}function Ba(e,t){return dt(Ca,e,(n,i)=>{let o=lt(g,i,q_,gt);return T(o,r=>{let s=r[0],f=r[2];return T(gh(0,f),l=>{let u=l[0],a=l[2];return dt(La,a,(c,p)=>T(Eo(g,p),P=>{let m=P[0],k=P[1],y=P[2];return new $([new x(new qa(new E(t,k),s,u,m)),y])}))})})})}function G_(e){if(e instanceof _)return new b(H);{let t=e.tail;if(t instanceof _){let n=e.head[0],i=e.head[1];return new b(new A(n,i))}else{let n=e.head[0];if(n instanceof B&&t.head[0]instanceof Zt){let i=t.tail,o=n[0];if(i instanceof _)return T(j(i),r=>{let s=r[0],f=r[1];return new $([new Ps(o,new x(s)),f])});{let r=i.head[0];return r instanceof q?new $([new Ps(o,C),i]):r instanceof D?new $([new Ps(o,C),i]):T(j(i),s=>{let f=s[0],l=s[1];return new $([new Ps(o,new x(f)),l])})}}else{let i=n,o=e.head[1];return new b(new A(i,o))}}}}function Nc(e,t,n,i){return T(j(n),o=>{let r=o[0],s=o[1];if(s instanceof _)return new $([C,s]);{let f=s.head[0];if(f instanceof q){let l=s.tail,u=s.head[1].byte_offset,a=new E(i,u+1),c=new Uc(a,e,t,r,g);return new $([new x(c),l])}else if(f instanceof D){let l=s.tail,u=lt(g,l,G_,gt);return T(u,a=>{let c=a[0],p=a[1],P=a[2],m=new E(i,p),k=new Uc(m,e,t,r,c);return new $([new x(k),P])})}else return new $([C,s])}})}function An(e,t){return T((()=>{if(e instanceof _)return new $([C,e]);{let n=e.tail;if(n instanceof _){let i=e.head[0];if(i instanceof B){let o=n,r=e.head[1].byte_offset,s=i[0],f=ie(r,s);return new $([new x(new yt(f,s)),o])}else if(i instanceof K){let o=n,r=e.head[1].byte_offset,s=i[0];return new $([new x(new yt(ie(r,s),s)),o])}else if(i instanceof ue){let o=n,r=e.head[1].byte_offset,s=i[0],f=ie(r,s);return new $([new x(new yo(f,s)),o])}else if(i instanceof St){let o=n,r=e.head[1].byte_offset,s=i[0],f=ie(r,s);return new $([new x(new To(f,s)),o])}else if(i instanceof dn){let o=n,r=e.head[1].byte_offset,s=i[0],f=new E(r,Z(r,s)+2);return new $([new x(new Oi(f,s)),o])}else if(i instanceof Wn){let o=n,r=e.head[1].byte_offset;return Ra(o,r)}else if(i instanceof Kn){let o=n,r=e.head[1].byte_offset,s;if(t instanceof Yo)s=W(j(o),l=>{let u=l[0],a=l[1];return[new E(r,u.location.end),new x(u),a]});else{let l=ie(r,"echo");s=new $([l,C,o])}return T(s,l=>{let u=l[0],a=l[1],c=l[2];if(c instanceof _)return new $([new x(new Et(u,a,C)),c]);if(c.head[0]instanceof _t){let p=c.tail;return W(j(p),P=>{let m=P[0],k=P[1],y=new E(u.start,m.location.end);return[new x(new Et(y,a,new x(m))),k]})}else return new $([new x(new Et(u,a,C)),c])})}else if(i instanceof Jt){let o=n,r=e.head[1].byte_offset;return Ba(o,r)}else if(i instanceof Xn){let o=n,r=e.head[1].byte_offset;return no(o,(s,f)=>new Ni(s,f),r,"panic")}else if(i instanceof Jn){let o=n,r=e.head[1].byte_offset;return no(o,(s,f)=>new qi(s,f),r,"todo")}else if(i instanceof Yt){let o=n,r=e.head[1].byte_offset;return W(Eo(g,o),s=>{let f=s[0],l=s[1],u=s[2];return[new x(new vo(new E(r,l),f)),u]})}else if(i instanceof En){let o=n,r=e.head[1].byte_offset,s=zt(j,C,g,o);return W(s,f=>{let l=f.values,u=f.spread,a=f.remaining_tokens,c=f.end;return[new x(new So(new E(r,c),l,u)),a]})}else if(i instanceof hn){let o=n,r=e.head[1].byte_offset,s=An(o,mn);return T(s,f=>{let l=f[0],u=f[1];if(l instanceof x){let a=l[0],c=new E(r,a.location.end);return new $([new x(new ji(c,a)),u])}else return We(u)})}else if(i instanceof Yn){let o=n,r=e.head[1].byte_offset,s=An(o,mn);return T(s,f=>{let l=f[0],u=f[1];if(l instanceof x){let a=l[0],c=new E(r,a.location.end);return new $([new x(new Di(c,a)),u])}else return We(u)})}else if(i instanceof In){let o=n,r=e.head[1].byte_offset,f=lt(g,o,l=>ps(j,l),ko);return W(f,l=>{let u=l[0],a=l[1],c=l[2];return[new x(new Ui(new E(r,a),u)),c]})}else return new $([C,e])}else{let i=n.tail;if(i instanceof _){let o=e.head[0];if(o instanceof B){let r=n,s=e.head[1].byte_offset,f=o[0],l=ie(s,f);return new $([new x(new yt(l,f)),r])}else if(o instanceof K){let r=n,s=e.head[1].byte_offset,f=o[0];return new $([new x(new yt(ie(s,f),f)),r])}else if(o instanceof ue){let r=n,s=e.head[1].byte_offset,f=o[0],l=ie(s,f);return new $([new x(new yo(l,f)),r])}else if(o instanceof St){let r=n,s=e.head[1].byte_offset,f=o[0],l=ie(s,f);return new $([new x(new To(l,f)),r])}else if(o instanceof dn){let r=n,s=e.head[1].byte_offset,f=o[0],l=new E(s,Z(s,f)+2);return new $([new x(new Oi(l,f)),r])}else if(o instanceof Wn){let r=n,s=e.head[1].byte_offset;return Ra(r,s)}else if(o instanceof Kn){let r=n,s=e.head[1].byte_offset,f;if(t instanceof Yo)f=W(j(r),u=>{let a=u[0],c=u[1];return[new E(s,a.location.end),new x(a),c]});else{let u=ie(s,"echo");f=new $([u,C,r])}return T(f,u=>{let a=u[0],c=u[1],p=u[2];if(p instanceof _)return new $([new x(new Et(a,c,C)),p]);if(p.head[0]instanceof _t){let P=p.tail;return W(j(P),m=>{let k=m[0],y=m[1],v=new E(a.start,k.location.end);return[new x(new Et(v,c,new x(k))),y]})}else return new $([new x(new Et(a,c,C)),p])})}else if(o instanceof Jt){let r=n,s=e.head[1].byte_offset;return Ba(r,s)}else if(o instanceof Xn){let r=n,s=e.head[1].byte_offset;return no(r,(f,l)=>new Ni(f,l),s,"panic")}else if(o instanceof Jn){let r=n,s=e.head[1].byte_offset;return no(r,(f,l)=>new qi(f,l),s,"todo")}else if(o instanceof Yt){let r=n,s=e.head[1].byte_offset;return W(Eo(g,r),f=>{let l=f[0],u=f[1],a=f[2];return[new x(new vo(new E(s,u),l)),a]})}else if(o instanceof En){let r=n,s=e.head[1].byte_offset,f=zt(j,C,g,r);return W(f,l=>{let u=l.values,a=l.spread,c=l.remaining_tokens,p=l.end;return[new x(new So(new E(s,p),u,a)),c]})}else if(o instanceof hn){let r=n,s=e.head[1].byte_offset,f=An(r,mn);return T(f,l=>{let u=l[0],a=l[1];if(u instanceof x){let c=u[0],p=new E(s,c.location.end);return new $([new x(new ji(p,c)),a])}else return We(a)})}else if(o instanceof Ln&&n.head[0]instanceof Ye){let r=e.head[1].byte_offset,f=lt(g,i,j,gt);return W(f,l=>{let u=l[0],a=l[1],c=l[2];return[new x(new $s(new E(r,a),u)),c]})}else if(o instanceof Yn){let r=n,s=e.head[1].byte_offset,f=An(r,mn);return T(f,l=>{let u=l[0],a=l[1];if(u instanceof x){let c=u[0],p=new E(s,c.location.end);return new $([new x(new Di(p,c)),a])}else return We(a)})}else if(o instanceof In){let r=n,s=e.head[1].byte_offset,l=lt(g,r,u=>ps(j,u),ko);return W(l,u=>{let a=u[0],c=u[1],p=u[2];return[new x(new Ui(new E(s,c),a)),p]})}else return new $([C,e])}else{let o=i.tail;if(o instanceof _){let r=e.head[0];if(r instanceof B){let s=n,f=e.head[1].byte_offset,l=r[0],u=ie(f,l);return new $([new x(new yt(u,l)),s])}else if(r instanceof K)if(n.head[0]instanceof Ye&&i.head[0]instanceof pt){let s=e.head[1].byte_offset,f=o,l=r[0];return Nc(C,l,f,s)}else{let s=n,f=e.head[1].byte_offset,l=r[0];return new $([new x(new yt(ie(f,l),l)),s])}else if(r instanceof ue){let s=n,f=e.head[1].byte_offset,l=r[0],u=ie(f,l);return new $([new x(new yo(u,l)),s])}else if(r instanceof St){let s=n,f=e.head[1].byte_offset,l=r[0],u=ie(f,l);return new $([new x(new To(u,l)),s])}else if(r instanceof dn){let s=n,f=e.head[1].byte_offset,l=r[0],u=new E(f,Z(f,l)+2);return new $([new x(new Oi(u,l)),s])}else if(r instanceof Wn){let s=n,f=e.head[1].byte_offset;return Ra(s,f)}else if(r instanceof Kn){let s=n,f=e.head[1].byte_offset,l;if(t instanceof Yo)l=W(j(s),a=>{let c=a[0],p=a[1];return[new E(f,c.location.end),new x(c),p]});else{let a=ie(f,"echo");l=new $([a,C,s])}return T(l,a=>{let c=a[0],p=a[1],P=a[2];if(P instanceof _)return new $([new x(new Et(c,p,C)),P]);if(P.head[0]instanceof _t){let m=P.tail;return W(j(m),k=>{let y=k[0],v=k[1],L=new E(c.start,y.location.end);return[new x(new Et(L,p,new x(y))),v]})}else return new $([new x(new Et(c,p,C)),P])})}else if(r instanceof Jt){let s=n,f=e.head[1].byte_offset;return Ba(s,f)}else if(r instanceof Xn){let s=n,f=e.head[1].byte_offset;return no(s,(l,u)=>new Ni(l,u),f,"panic")}else if(r instanceof Jn){let s=n,f=e.head[1].byte_offset;return no(s,(l,u)=>new qi(l,u),f,"todo")}else if(r instanceof Yt){let s=n,f=e.head[1].byte_offset;return W(Eo(g,s),l=>{let u=l[0],a=l[1],c=l[2];return[new x(new vo(new E(f,a),u)),c]})}else if(r instanceof En){let s=n,f=e.head[1].byte_offset,l=zt(j,C,g,s);return W(l,u=>{let a=u.values,c=u.spread,p=u.remaining_tokens,P=u.end;return[new x(new So(new E(f,P),a,c)),p]})}else if(r instanceof hn){let s=n,f=e.head[1].byte_offset,l=An(s,mn);return T(l,u=>{let a=u[0],c=u[1];if(a instanceof x){let p=a[0],P=new E(f,p.location.end);return new $([new x(new ji(P,p)),c])}else return We(c)})}else if(r instanceof Ln&&n.head[0]instanceof Ye){let s=e.head[1].byte_offset,l=lt(g,i,j,gt);return W(l,u=>{let a=u[0],c=u[1],p=u[2];return[new x(new $s(new E(s,c),a)),p]})}else if(r instanceof Yn){let s=n,f=e.head[1].byte_offset,l=An(s,mn);return T(l,u=>{let a=u[0],c=u[1];if(a instanceof x){let p=a[0],P=new E(f,p.location.end);return new $([new x(new Di(P,p)),c])}else return We(c)})}else if(r instanceof In){let s=n,f=e.head[1].byte_offset,u=lt(g,s,a=>ps(j,a),ko);return W(u,a=>{let c=a[0],p=a[1],P=a[2];return[new x(new Ui(new E(f,p),c)),P]})}else return new $([C,e])}else{let r=o.tail;if(r instanceof _){let s=e.head[0];if(s instanceof B){let f=n,l=e.head[1].byte_offset,u=s[0],a=ie(l,u);return new $([new x(new yt(a,u)),f])}else if(s instanceof K)if(n.head[0]instanceof Ye&&i.head[0]instanceof pt){let f=e.head[1].byte_offset,l=o,u=s[0];return Nc(C,u,l,f)}else{let f=n,l=e.head[1].byte_offset,u=s[0];return new $([new x(new yt(ie(l,u),u)),f])}else if(s instanceof ue){let f=n,l=e.head[1].byte_offset,u=s[0],a=ie(l,u);return new $([new x(new yo(a,u)),f])}else if(s instanceof St){let f=n,l=e.head[1].byte_offset,u=s[0],a=ie(l,u);return new $([new x(new To(a,u)),f])}else if(s instanceof dn){let f=n,l=e.head[1].byte_offset,u=s[0],a=new E(l,Z(l,u)+2);return new $([new x(new Oi(a,u)),f])}else if(s instanceof Wn){let f=n,l=e.head[1].byte_offset;return Ra(f,l)}else if(s instanceof Kn){let f=n,l=e.head[1].byte_offset,u;if(t instanceof Yo)u=W(j(f),c=>{let p=c[0],P=c[1];return[new E(l,p.location.end),new x(p),P]});else{let c=ie(l,"echo");u=new $([c,C,f])}return T(u,c=>{let p=c[0],P=c[1],m=c[2];if(m instanceof _)return new $([new x(new Et(p,P,C)),m]);if(m.head[0]instanceof _t){let k=m.tail;return W(j(k),y=>{let v=y[0],L=y[1],I=new E(p.start,v.location.end);return[new x(new Et(I,P,new x(v))),L]})}else return new $([new x(new Et(p,P,C)),m])})}else if(s instanceof Jt){let f=n,l=e.head[1].byte_offset;return Ba(f,l)}else if(s instanceof Xn){let f=n,l=e.head[1].byte_offset;return no(f,(u,a)=>new Ni(u,a),l,"panic")}else if(s instanceof Jn){let f=n,l=e.head[1].byte_offset;return no(f,(u,a)=>new qi(u,a),l,"todo")}else if(s instanceof Yt){let f=n,l=e.head[1].byte_offset;return W(Eo(g,f),u=>{let a=u[0],c=u[1],p=u[2];return[new x(new vo(new E(l,c),a)),p]})}else if(s instanceof En){let f=n,l=e.head[1].byte_offset,u=zt(j,C,g,f);return W(u,a=>{let c=a.values,p=a.spread,P=a.remaining_tokens,m=a.end;return[new x(new So(new E(l,m),c,p)),P]})}else if(s instanceof hn){let f=n,l=e.head[1].byte_offset,u=An(f,mn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof x){let P=c[0],m=new E(l,P.location.end);return new $([new x(new ji(m,P)),p])}else return We(p)})}else if(s instanceof Ln&&n.head[0]instanceof Ye){let f=e.head[1].byte_offset,u=lt(g,i,j,gt);return W(u,a=>{let c=a[0],p=a[1],P=a[2];return[new x(new $s(new E(f,p),c)),P]})}else if(s instanceof Yn){let f=n,l=e.head[1].byte_offset,u=An(f,mn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof x){let P=c[0],m=new E(l,P.location.end);return new $([new x(new Di(m,P)),p])}else return We(p)})}else if(s instanceof In){let f=n,l=e.head[1].byte_offset,a=lt(g,f,c=>ps(j,c),ko);return W(a,c=>{let p=c[0],P=c[1],m=c[2];return[new x(new Ui(new E(l,P),p)),m]})}else return new $([C,e])}else{let s=e.head[0];if(s instanceof B)if(n.head[0]instanceof Zn){let f=i.head[0];if(f instanceof K&&o.head[0]instanceof Ye&&r.head[0]instanceof pt){let l=e.head[1].byte_offset,u=r.tail,a=s[0],c=f[0];return Nc(new x(a),c,u,l)}else{let l=n,u=e.head[1].byte_offset,a=s[0],c=ie(u,a);return new $([new x(new yt(c,a)),l])}}else{let f=n,l=e.head[1].byte_offset,u=s[0],a=ie(l,u);return new $([new x(new yt(a,u)),f])}else if(s instanceof K)if(n.head[0]instanceof Ye&&i.head[0]instanceof pt){let f=e.head[1].byte_offset,l=o,u=s[0];return Nc(C,u,l,f)}else{let f=n,l=e.head[1].byte_offset,u=s[0];return new $([new x(new yt(ie(l,u),u)),f])}else if(s instanceof ue){let f=n,l=e.head[1].byte_offset,u=s[0],a=ie(l,u);return new $([new x(new yo(a,u)),f])}else if(s instanceof St){let f=n,l=e.head[1].byte_offset,u=s[0],a=ie(l,u);return new $([new x(new To(a,u)),f])}else if(s instanceof dn){let f=n,l=e.head[1].byte_offset,u=s[0],a=new E(l,Z(l,u)+2);return new $([new x(new Oi(a,u)),f])}else if(s instanceof Wn){let f=n,l=e.head[1].byte_offset;return Ra(f,l)}else if(s instanceof Kn){let f=n,l=e.head[1].byte_offset,u;if(t instanceof Yo)u=W(j(f),c=>{let p=c[0],P=c[1];return[new E(l,p.location.end),new x(p),P]});else{let c=ie(l,"echo");u=new $([c,C,f])}return T(u,c=>{let p=c[0],P=c[1],m=c[2];if(m instanceof _)return new $([new x(new Et(p,P,C)),m]);if(m.head[0]instanceof _t){let k=m.tail;return W(j(k),y=>{let v=y[0],L=y[1],I=new E(p.start,v.location.end);return[new x(new Et(I,P,new x(v))),L]})}else return new $([new x(new Et(p,P,C)),m])})}else if(s instanceof Jt){let f=n,l=e.head[1].byte_offset;return Ba(f,l)}else if(s instanceof Xn){let f=n,l=e.head[1].byte_offset;return no(f,(u,a)=>new Ni(u,a),l,"panic")}else if(s instanceof Jn){let f=n,l=e.head[1].byte_offset;return no(f,(u,a)=>new qi(u,a),l,"todo")}else if(s instanceof Yt){let f=n,l=e.head[1].byte_offset;return W(Eo(g,f),u=>{let a=u[0],c=u[1],p=u[2];return[new x(new vo(new E(l,c),a)),p]})}else if(s instanceof En){let f=n,l=e.head[1].byte_offset,u=zt(j,C,g,f);return W(u,a=>{let c=a.values,p=a.spread,P=a.remaining_tokens,m=a.end;return[new x(new So(new E(l,m),c,p)),P]})}else if(s instanceof hn){let f=n,l=e.head[1].byte_offset,u=An(f,mn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof x){let P=c[0],m=new E(l,P.location.end);return new $([new x(new ji(m,P)),p])}else return We(p)})}else if(s instanceof Ln&&n.head[0]instanceof Ye){let f=e.head[1].byte_offset,u=lt(g,i,j,gt);return W(u,a=>{let c=a[0],p=a[1],P=a[2];return[new x(new $s(new E(f,p),c)),P]})}else if(s instanceof Yn){let f=n,l=e.head[1].byte_offset,u=An(f,mn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof x){let P=c[0],m=new E(l,P.location.end);return new $([new x(new Di(m,P)),p])}else return We(p)})}else if(s instanceof In){let f=n,l=e.head[1].byte_offset,a=lt(g,f,c=>ps(j,c),ko);return W(a,c=>{let p=c[0],P=c[1],m=c[2];return[new x(new Ui(new E(l,P),p)),m]})}else return new $([C,e])}}}}}})(),n=>{let i=n[0],o=n[1];if(i instanceof x){let r=i[0],s=ce(r,o);if(s instanceof $){let f=s[0][0],l=s[0][1];return new $([new x(f),l])}else return s}else return new $([C,o])})}function wh(e,t,n,i){return T(An(e,i),o=>{let r=o[0],s=o[1];if(r instanceof x){let f=r[0],l=d(f,n),u=O_(s);if(u instanceof $){let a=u[0][0],c=u[0][1],p=ch(new x(a),t,l),P=p[0];if(P instanceof x){let m=P[0];return new $([m,c])}else{let m=p[1],k=p[2];return wh(c,m,k,a instanceof Xi?M_:mn)}}else{let a=ch(C,t,l)[0];if(a instanceof x){let c=a[0];return new $([c,s])}else return We(s)}}else return We(s)})}function j(e){return wh(e,g,g,mn)}function ph(e,t){return T(j(e),n=>{let i=n[0],o=n[1];if(o instanceof _){let r=new Vi(new E(t,i.location.end),i,C);return new $([r,o])}else if(o.head[0]instanceof _t){let r=o.tail,s=j(r);if(s instanceof $){let f=s[0][0],l=s[0][1],u=new Vi(new E(t,f.location.end),i,new x(f));return new $([u,l])}else return s}else{let r=new Vi(new E(t,i.location.end),i,C);return new $([r,o])}})}function $h(e,t){return T(e instanceof _?Ga(g,e,uh,ls):e.head[0]instanceof rs?new $([g,e]):Ga(g,e,uh,ls),n=>{let i=n[0],o=n[1];return dt(Ic,o,(r,s)=>T(j(s),f=>{let l=f[0],u=f[1];return new $([new Wi(new E(t,l.location.end),i,l),u])}))})}function Ku(e,t,n){return T(Rn(t),i=>{let o=i[0],r=i[1];return T(Ha(r),s=>{let f=s[0],l=s[1];return dt(Ia,l,(u,a)=>T(j(a),c=>{let p=c[0],P=c[1];return T((()=>{if(e instanceof ms)return new $([e,P,p.location.end]);if(P instanceof _)return new $([e,P,p.location.end]);if(e.message instanceof wn&&P.head[0]instanceof _t){let m=P.tail;return W(j(m),k=>{let y=k[0],v=k[1];return[new qc(new x(y)),v,y.location.end]})}else return new $([e,P,p.location.end])})(),m=>{let k=m[0],y=m[1],v=m[2],L=new hs(new E(n,v),k,o,f,p);return new $([L,y])})}))})})}function Ph(e){if(e instanceof _)return T(j(e),n=>{let i=n[0],o=n[1];return new $([new Gi(i),o])});{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof Jo){let i=t,o=e.head[1].byte_offset;return ph(i,o)}else if(n instanceof Ii){let i=t,o=e.head[1].byte_offset;return Ku(ah,i,o)}else if(n instanceof Fi){let i=t,o=e.head[1].byte_offset;return $h(i,o)}else return T(j(e),o=>{let r=o[0],s=o[1];return new $([new Gi(r),s])})}else{let n=e.head[0];if(n instanceof Jo){let i=t,o=e.head[1].byte_offset;return ph(i,o)}else if(n instanceof Ii)if(t.head[0]instanceof Jo){let i=e.head[1].byte_offset,o=t.tail;return Ku(new qc(C),o,i)}else{let i=t,o=e.head[1].byte_offset;return Ku(ah,i,o)}else if(n instanceof Fi){let i=t,o=e.head[1].byte_offset;return $h(i,o)}else return T(j(e),o=>{let r=o[0],s=o[1];return new $([new Gi(r),s])})}}}function Eo(e,t){if(t instanceof _)return T(Ph(t),n=>{let i=n[0],o=n[1];return Eo(d(i,e),o)});if(t.head[0]instanceof ft){let n=t.tail,i=t.head[1].byte_offset;return new $([S(e),i+1,n])}else return T(Ph(t),n=>{let i=n[0],o=n[1];return Eo(d(i,e),o)})}function H_(e){return T((()=>{if(e instanceof _)return new b(H);{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof B){let i=t,o=n[0];return new $([C,new At(o),i])}else if(n instanceof st){let i=t,o=n[0];return new $([C,new gn(o),i])}else{let i=n,o=e.head[1];return new b(new A(i,o))}}else{let n=e.head[0];if(n instanceof B){let i=t.head[0];if(i instanceof B){let o=t.tail,r=n[0],s=i[0];return new $([new x(r),new At(s),o])}else if(i instanceof st){let o=t.tail,r=n[0],s=i[0];return new $([new x(r),new gn(s),o])}else{let o=t,r=n[0];return new $([C,new At(r),o])}}else if(n instanceof st){let i=t,o=n[0];return new $([C,new gn(o),i])}else{let i=n,o=e.head[1];return new b(new A(i,o))}}}})(),t=>{let n=t[0],i=t[1],o=t[2];return T(Ha(o),r=>{let s=r[0],f=r[1];return new $([new yp(n,i,s),f])})})}function dh(e,t,n,i,o,r){return dt(Ca,r,(s,f)=>{let l=lt(g,f,H_,gt);return T(l,u=>{let a=u[0],c=u[1],p=u[2],P=gh(c,p);return T(P,m=>{let k=m[0],y=m[1],v=m[2];return T((()=>{if(v instanceof _)return new $([g,y,v]);if(v.head[0]instanceof Yt){let L=v.tail;return Eo(g,L)}else return new $([g,y,v])})(),L=>{let I=L[0],F=L[1],M=L[2],G=new E(o,F),Q=new Ju(G,i,n,a,k,I),re=R_(e,t,Q);return new $([re,M])})})})})}function z_(e,t,n){return new Qo(e.imports,e.custom_types,e.type_aliases,d(new zi(S(t),n),e.constants),e.functions)}function W_(e,t){if(e instanceof _)return new b(H);{let n=e.head[0];if(n instanceof B){let i=e.tail,o=n[0];return t(o,i)}else{let i=n,o=e.head[1];return new b(new A(i,o))}}}function hh(e,t,n,i,o){return W_(i,(r,s)=>T(Ha(s),f=>{let l=f[0],u=f[1];return dt(Ia,u,(a,c)=>T(j(c),p=>{let P=p[0],m=p[1],k=new vp(new E(o,P.location.end),r,n,l,P),y=z_(e,t,k);return new $([y,m])}))}))}function Op(e,t,n){let i=new ei(n.location,n.name,n.publicity,n.opaque_,n.parameters,S(n.variants));return new Qo(e.imports,d(new zi(S(t),i),e.custom_types),e.type_aliases,e.constants,e.functions)}function K_(e,t){return new ei(e.location,e.name,e.publicity,e.opaque_,e.parameters,d(t,e.variants))}function mh(e){if(e instanceof _)return T(Bn(e),n=>{let i=n[0],o=n[1];return new $([new ja(i),o])});{let t=e.tail;if(t instanceof _)return T(Bn(e),i=>{let o=i[0],r=i[1];return new $([new ja(o),r])});{let n=e.head[0];if(n instanceof B&&t.head[0]instanceof Zt){let i=t.tail,o=n[0];return T(Bn(i),r=>{let s=r[0],f=r[1];return new $([new Ip(s,o),f])})}else return T(Bn(e),o=>{let r=o[0],s=o[1];return new $([new ja(r),s])})}}}function kh(e,t){if(e instanceof _)return new b(H);{let n=e.head[0];if(n instanceof K){let i=e.tail,o=e.head[1].byte_offset,r=n[0];return t(r,o,i)}else{let i=n,o=e.head[1];return new b(new A(i,o))}}}function bh(e){return T((()=>{if(e instanceof _)return new b(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,i=t[0];return new $([i,n])}else{let n=t,i=e.head[1];return new b(new A(n,i))}}})(),t=>{let n=t[0],i=t[1];if(i instanceof _)return new $([new Oa(n,g),i]);if(i.head[0]instanceof Ye){let o=i.tail,r=lt(g,o,j,gt);return T(r,s=>{let f=s[0],l=s[2];return new $([new Oa(n,f),l])})}else return new $([new Oa(n,g),i])})}function X_(e,t){for(;;){let n=e,i=t;if(i instanceof _)return new $([S(n),i]);if(i.head[0]instanceof Mi){let o=i.tail,r=bh(o);if(r instanceof $){let s=r[0][0],f=r[0][1];e=d(s,n),t=f}else return r}else return new $([S(n),i])}}function J_(e,t,n,i){for(;;){let o=e,r=t,s=n,f=i;if(s instanceof _)return new b(H);{let l=s.head[0];if(ht(l,o)){let u=s.tail,a=s.head[1].byte_offset;return new $([r,Z(a,Aa(l)),u])}else{let u=f(r,s);if(u instanceof $){let a=u[0][0],c=u[0][1];e=o,t=a,n=c,i=f}else return u}}}}function Y_(e,t){return J_(Cc,e,t,(n,i)=>T(X_(g,i),o=>{let r=o[0],s=o[1];return kh(s,(f,l,u)=>T((()=>{if(u instanceof _)return new $([g,0,u]);{let a=u.tail;if(a instanceof _)return u.head[0]instanceof Ye?lt(g,a,mh,gt):new $([g,0,u]);if(u.head[0]instanceof Ye)if(a.head[0]instanceof q){let c=a.tail,p=a.head[1].byte_offset;return new $([g,p,c])}else return lt(g,a,mh,gt);else return new $([g,0,u])}})(),a=>{let c=a[0],p=a[2],P=K_(n,new Lp(f,c,r));return new $([P,p])}))}))}function Z_(e,t,n,i,o,r,s,f){let l=new ei(new E(0,0),n,o,r,i,g);return T(Y_(l,s),u=>{let a=u[0],c=u[1],p=u[2],P=new ei(new E(f,c),a.name,a.publicity,a.opaque_,a.parameters,a.variants),m=Op(e,t,P);return new $([m,p])})}function Q_(e,t,n){return new Qo(e.imports,e.custom_types,d(new zi(S(t),n),e.type_aliases),e.constants,e.functions)}function eg(e,t,n,i,o,r,s){return T(Bn(s),f=>{let l=f[0],u=f[1],a=new E(r,l.location.end),c=new Cp(a,n,o,i,l),p=Q_(e,t,c);return new $([p,u])})}function tg(e){if(e instanceof _)return new b(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,i=t[0];return new $([i,n])}else{let n=t,i=e.head[1];return new b(new A(n,i))}}}function Xu(e,t,n,i,o,r){return kh(o,(s,f,l)=>T((()=>{if(l instanceof _)return new $([g,Z(f,s),l]);if(l.head[0]instanceof Ye){let u=l.tail;return lt(g,u,tg,gt)}else return new $([g,Z(f,s),l])})(),u=>{let a=u[0],c=u[1],p=u[2];if(p instanceof _){let P=new E(r,c),m=new ei(P,s,n,i,a,g),k=Op(e,t,m);return new $([k,p])}else{let P=p.head[0];if(P instanceof Yt){let m=p.tail;return Z_(e,t,s,a,n,i,m,r)}else if(P instanceof Qr){let m=p.tail;return eg(e,t,s,a,n,r,m)}else{let m=new E(r,c),k=new ei(m,s,n,i,a,g),y=Op(e,t,k);return new $([y,p])}}}))}function ng(e,t){if(e instanceof _)return[C,t,e];{let n=e.tail;if(n instanceof _)return[C,t,e];if(e.head[0]instanceof _t){let i=n.head[0];if(i instanceof B){let o=n.tail,r=n.head[1].byte_offset,s=i[0];return[new x(new At(s)),Z(r,s),o]}else if(i instanceof st){let o=n.tail,r=n.head[1].byte_offset,s=i[0];return[new x(new gn(s)),Z(r,s)+1,o]}else return[C,t,e]}else return[C,t,e]}}function og(e,t,n){for(;;){let i=e,o=t,r=n;if(r instanceof _)return new b(H);{let s=r.head[0];if(s instanceof B){let f=r.tail;if(f instanceof _){let l=s,u=r.head[1];return new b(new A(l,u))}else{let l=f.tail;if(l instanceof _){let u=f.head[0];if(u instanceof ft){let a=s[0],c=l,p=f.head[1].byte_offset,P=new He(a,C);return new $(new bt(S(i),S(d(P,o)),p+1,c))}else if(u instanceof D){let a=s[0],c=l,p=new He(a,C);e=i,t=d(p,o),n=c}else{let a=s,c=r.head[1];return new b(new A(a,c))}}else{let u=l.tail;if(u instanceof _){let a=f.head[0];if(a instanceof ft){let c=s[0],p=l,P=f.head[1].byte_offset,m=new He(c,C);return new $(new bt(S(i),S(d(m,o)),P+1,p))}else if(a instanceof D){let c=s[0],p=l,P=new He(c,C);e=i,t=d(P,o),n=p}else{let c=s,p=r.head[1];return new b(new A(c,p))}}else{let a=f.head[0];if(a instanceof _t){let c=l.head[0];if(c instanceof B){let p=u.head[0];if(p instanceof ft){let P=s[0],m=u.tail,k=c[0],y=u.head[1].byte_offset,v=new He(P,new x(k));return new $(new bt(S(i),S(d(v,o)),y+1,m))}else if(p instanceof D){let P=s[0],m=u.tail,k=c[0],y=new He(P,new x(k));e=i,t=d(y,o),n=m}else{let P=s,m=r.head[1];return new b(new A(P,m))}}else{let p=s,P=r.head[1];return new b(new A(p,P))}}else if(a instanceof ft){let c=s[0],p=l,P=f.head[1].byte_offset,m=new He(c,C);return new $(new bt(S(i),S(d(m,o)),P+1,p))}else if(a instanceof D){let c=s[0],p=l,P=new He(c,C);e=i,t=d(P,o),n=p}else{let c=s,p=r.head[1];return new b(new A(c,p))}}}}}else if(s instanceof K){let f=r.tail;if(f instanceof _){let l=s,u=r.head[1];return new b(new A(l,u))}else{let l=f.tail;if(l instanceof _){let u=f.head[0];if(u instanceof ft){let a=s[0],c=l,p=f.head[1].byte_offset,P=new He(a,C);return new $(new bt(S(i),S(d(P,o)),p+1,c))}else if(u instanceof D){let a=s[0],c=l,p=new He(a,C);e=i,t=d(p,o),n=c}else{let a=s,c=r.head[1];return new b(new A(a,c))}}else{let u=l.tail;if(u instanceof _){let a=f.head[0];if(a instanceof ft){let c=s[0],p=l,P=f.head[1].byte_offset,m=new He(c,C);return new $(new bt(S(i),S(d(m,o)),P+1,p))}else if(a instanceof D){let c=s[0],p=l,P=new He(c,C);e=i,t=d(P,o),n=p}else{let c=s,p=r.head[1];return new b(new A(c,p))}}else{let a=f.head[0];if(a instanceof _t){let c=l.head[0];if(c instanceof K){let p=u.head[0];if(p instanceof ft){let P=s[0],m=u.tail,k=c[0],y=u.head[1].byte_offset,v=new He(P,new x(k));return new $(new bt(S(i),S(d(v,o)),y+1,m))}else if(p instanceof D){let P=s[0],m=u.tail,k=c[0],y=new He(P,new x(k));e=i,t=d(y,o),n=m}else{let P=s,m=r.head[1];return new b(new A(P,m))}}else{let p=s,P=r.head[1];return new b(new A(p,P))}}else if(a instanceof ft){let c=s[0],p=l,P=f.head[1].byte_offset,m=new He(c,C);return new $(new bt(S(i),S(d(m,o)),P+1,p))}else if(a instanceof D){let c=s[0],p=l,P=new He(c,C);e=i,t=d(P,o),n=p}else{let c=s,p=r.head[1];return new b(new A(c,p))}}}}}else if(s instanceof wo){let f=r.tail;if(f instanceof _){let l=s,u=r.head[1];return new b(new A(l,u))}else{let l=f.tail;if(l instanceof _){let u=s,a=r.head[1];return new b(new A(u,a))}else{let u=l.tail;if(u instanceof _){let a=f.head[0];if(a instanceof K){let c=l.head[0];if(c instanceof ft){let p=u,P=a[0],m=l.head[1].byte_offset,k=new He(P,C);return new $(new bt(S(d(k,i)),S(o),m+1,p))}else if(c instanceof D){let p=u,P=a[0],m=new He(P,C);e=d(m,i),t=o,n=p}else{let p=s,P=r.head[1];return new b(new A(p,P))}}else{let c=s,p=r.head[1];return new b(new A(c,p))}}else{let a=u.tail;if(a instanceof _){let c=f.head[0];if(c instanceof K){let p=l.head[0];if(p instanceof ft){let P=u,m=c[0],k=l.head[1].byte_offset,y=new He(m,C);return new $(new bt(S(d(y,i)),S(o),k+1,P))}else if(p instanceof D){let P=u,m=c[0],k=new He(m,C);e=d(k,i),t=o,n=P}else{let P=s,m=r.head[1];return new b(new A(P,m))}}else{let p=s,P=r.head[1];return new b(new A(p,P))}}else{let c=f.head[0];if(c instanceof K){let p=l.head[0];if(p instanceof _t){let P=u.head[0];if(P instanceof K){let m=a.head[0];if(m instanceof ft){let k=a.tail,y=c[0],v=P[0],L=a.head[1].byte_offset,I=new He(y,new x(v));return new $(new bt(S(d(I,i)),S(o),L+1,k))}else if(m instanceof D){let k=a.tail,y=c[0],v=P[0],L=new He(y,new x(v));e=d(L,i),t=o,n=k}else{let k=s,y=r.head[1];return new b(new A(k,y))}}else{let m=s,k=r.head[1];return new b(new A(m,k))}}else if(p instanceof ft){let P=u,m=c[0],k=l.head[1].byte_offset,y=new He(m,C);return new $(new bt(S(d(y,i)),S(o),k+1,P))}else if(p instanceof D){let P=u,m=c[0],k=new He(m,C);e=d(k,i),t=o,n=P}else{let P=s,m=r.head[1];return new b(new A(P,m))}}else{let p=s,P=r.head[1];return new b(new A(p,P))}}}}}}else if(s instanceof ft){let f=r.tail,l=r.head[1].byte_offset;return new $(new bt(S(i),S(o),l+1,f))}else{let f=s,l=r.head[1];return new b(new A(f,l))}}}}function ig(e,t){if(e instanceof _)return new $(new bt(g,g,t,e));{let n=e.tail;if(n instanceof _)return new $(new bt(g,g,t,e));if(e.head[0]instanceof Zn&&n.head[0]instanceof Yt){let i=n.tail;return og(g,g,i)}else return new $(new bt(g,g,t,e))}}function rg(e,t,n){for(;;){let i=e,o=t,r=n;if(r instanceof _)return i===""?new b(H):new $([i,o,r]);{let s=r.tail;if(s instanceof _){let f=r.head[0];if(f instanceof B&&i===""){let l=s,u=r.head[1].byte_offset,a=f[0],c=u+on(a);e=a,t=c,n=l}else if(i===""){let l=f,u=r.head[1];return new b(new A(l,u))}else return new $([i,o,r])}else{let f=r.head[0];if(f instanceof B&&i===""){let l=s,u=f[0],c=r.head[1].byte_offset+on(u);e=u,t=c,n=l}else if(f instanceof Ai){let l=s.head[0];if(l instanceof B&&i!==""){let u=s.tail,a=s.head[1].byte_offset,c=l[0],p=a+on(c);e=i+"/"+c,t=p,n=u}else if(i===""){let u=f,a=r.head[1];return new b(new A(u,a))}else return new $([i,o,r])}else if(i===""){let l=f,u=r.head[1];return new b(new A(l,u))}else return new $([i,o,r])}}}}function sg(e,t,n,i){return T(rg("",0,n),o=>{let r=o[0],s=o[1],f=o[2];return T(ig(f,s),l=>{let u=l.types,a=l.values,c=l.end,p=l.remaining_tokens,P=ng(p,c),m=P[0],k=P[1],y=P[2],v=new E(i,k),L=new Tp(v,r,m,u,a),I=new zi(S(t),L),F=new Qo(d(I,e.imports),e.custom_types,e.type_aliases,e.constants,e.functions);return new $([F,y])})})}function oo(e,t,n){if(n instanceof _)return new $(e);{let i=n.head[0];if(i instanceof Li){let o=n.tail,r=n.head[1].byte_offset,s=hh(e,t,zu,o,r);return T(s,f=>{let l=f[0],u=f[1];return oo(l,g,u)})}else if(i instanceof Jt){let o=n.tail;if(o instanceof _)return We(n);{let r=o.head[0];if(r instanceof B){let s=n.head[1],f=o.tail,l=r[0],u=s.byte_offset,a=dh(e,t,zu,l,u,f);return T(a,c=>{let p=c[0],P=c[1];return oo(p,g,P)})}else return We(n)}}else if(i instanceof Rr){let o=n.tail,r=n.head[1].byte_offset,s=sg(e,t,o,r);return T(s,f=>{let l=f[0],u=f[1];return oo(l,g,u)})}else if(i instanceof Or){let o=n.tail;if(o instanceof _)return We(n);{let r=o.head[0];if(r instanceof Li){let s=n.head[1].byte_offset,f=o.tail,l=hh(e,t,Dc,f,s);return T(l,u=>{let a=u[0],c=u[1];return oo(a,g,c)})}else if(r instanceof Jt){let s=o.tail;if(s instanceof _)return We(n);{let f=s.head[0];if(f instanceof B){let l=n.head[1],u=s.tail,a=f[0],c=l.byte_offset,p=dh(e,t,Dc,a,c,u);return T(p,P=>{let m=P[0],k=P[1];return oo(m,g,k)})}else return We(n)}}else if(r instanceof Br){let s=o.tail;if(s instanceof _)return We(n);if(s.head[0]instanceof wo){let f=n.head[1].byte_offset,l=s.tail,u=Xu(e,t,Dc,!0,l,f);return T(u,a=>{let c=a[0],p=a[1];return oo(c,g,p)})}else return We(n)}else if(r instanceof wo){let s=n.head[1].byte_offset,f=o.tail,l=Xu(e,t,Dc,!1,f,s);return T(l,u=>{let a=u[0],c=u[1];return oo(a,g,c)})}else return We(n)}}else if(i instanceof wo){let o=n.tail,r=n.head[1].byte_offset,s=Xu(e,t,zu,!1,o,r);return T(s,f=>{let l=f[0],u=f[1];return oo(l,g,u)})}else if(i instanceof Mi){let o=n.tail;return T(bh(o),r=>{let s=r[0],f=r[1];return oo(e,d(s,t),f)})}else return We(n)}}function yh(e){let t=th(e),n=oh(t),i=nh(n),o=sh(i);return(r=>oo(new Qo(g,g,g,g,g),g,r))(o)}var Th="left#",vh="capture#";function Ue(e,t,n){return new b(e+fu(n(t)))}function As(e,t,n){for(;;){let i=e,o=t,r=n,s=ci(i,f=>!Zs(f[0],"_"));if(s instanceof _)return new $(void 0);{let f=s.tail,l=s.head[0],u=Kt(f,l);if(u instanceof $){let a=u[0];return Ue(o+l,a,r)}else e=f,t=o,n=r}}}function Sh(e){return e instanceof Wi||e instanceof hs||e instanceof Vi?e.location:e[0].location}function lg(e){return T$(Sr,t=>hf(t[1],e))}function Ch(e){if(e instanceof Ei){let t=e[0];return d(t,g)}else if(e instanceof xa){let t=e.elems,n=e.rest;return it(b$(t,Ch),(()=>{if(n instanceof x){let i=n[0];return d(i,g)}else return g})())}else return g}function Zc(e,t){return Ze(e,n=>[n,t])}function jp(e,t,n){if(e instanceof Ki){let i=e.name;return new $("_"+i)}else if(e instanceof Co){let i=e.name;return new $(i)}else return Ue("Unsupported pattern in "+t,e.location,n)}function Lh(e,t){if(e instanceof Da){let n=e.location,i=e.value,o=kn(i);if(o instanceof $){let r=o[0];return new $(new ga(r))}else return Ue("Invalid integer literal: "+i,n,t)}else{if(e instanceof Ki)return new $(ZP);if(e instanceof Co){let n=e.name;return new $(new Ei(n))}else if(e instanceof Na){let n=e.elements,i=e.tail;return T(wt(n,o=>Lh(o,t)),o=>T((()=>{if(i instanceof x){let r=i[0];return W(jp(r,"list pattern",t),s=>new x(s))}else return new $(C)})(),r=>new $(new xa(o,r))))}else if(e instanceof Hi&&e.module instanceof wn&&e.arguments instanceof _&&!e.with_spread){let n=e.constructor$;return n==="True"?new $(new Si(!0)):n==="False"?new $(new Si(!1)):Ue("Pattern type not supported",e.location,t)}else return Ue("Pattern type not supported",e.location,t)}}function cg(e){return e instanceof ks?new x("=="):e instanceof bs?new x("!="):e instanceof ys?new x("<"):e instanceof Ts?new x("<="):e instanceof vs?new x(">="):e instanceof Ss?new x(">"):e instanceof Es?new x("+"):e instanceof Cs?new x("-"):e instanceof Ls?new x("*"):e instanceof Is?new x("/"):e instanceof Fs?new x("%"):C}function Ih(e){return e instanceof At?e[0]:"_"+e[0]}function fg(e,t){if(e instanceof Ji){let n=e.label,i=e.label_location,o=e.item;return new $([n,i,o])}else if(e instanceof Yi){let n=e.label,i=e.location;return new $([n,i,new yt(i,n)])}else{let n=e.item;return Ue("An unlabelled argument cannot follow a labelled one",n.location,t)}}function ug(e,t,n,i){let o;if(e instanceof yt){let s=e.name;o=Kt(Sr,s)}else o=new b(void 0);let r=o;if(r instanceof $){let s=r[0],f=v$(n,a=>a instanceof Zo),l=f[0],u=f[1];return T(wt(u,a=>fg(a,i)),a=>T(As(Ze(a,c=>[c[0],c[1]]),"Duplicate label: ",i),c=>{let p=al(s,t+ot(l));return T(E$(a,P=>hf(p,P[0])?new $(void 0):Ue("Unexpected label: "+P[0],P[1],i)),P=>{let m=mf(p,k=>{let y=y$(a,v=>v[0]===k);return W(y,v=>new Zo(v[2]))});return new $(it(l,m))})}))}else return new $(n)}function pg(e,t,n){return T(wt(e,i=>Mt(i,n)),i=>{if(t instanceof x){let o=t[0];return T(Mt(o,n),r=>new $(new yr(i,new x(r))))}else return new $(new yr(i,C))})}function $g(e,t){return wt(e,n=>{let i=n.patterns,o=n.guard;if(i instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(o instanceof x){let r=i.head;if(r instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(i.tail instanceof _&&r.tail instanceof _){let s=o[0];return Ue("Guards are not supported",s.location,t)}else return Ue("Multi-pattern clauses are not supported",n.body.location,t)}else{let r=i.head;if(r instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(i.tail instanceof _&&r.tail instanceof _){let s=r.head;return T(Lh(s,t),f=>T(As(Zc(Ch(f),s.location),"Duplicate variable name in pattern: ",t),l=>T(Mt(n.body,t),u=>new $([f,new vi(t(n.body.location),u)]))))}else return Ue("Multi-pattern clauses are not supported",n.body.location,t)}})}function Pg(e,t,n,i,o){let r=cg(e);if(r instanceof x){let s=r[0];return T(Mt(t,o),f=>T(Mt(n,o),l=>new $(new go(new vn(s),d(f,d(l,g))))))}else return Ue("Unsupported operator",i,o)}function Eh(e,t,n,i,o){return T(Mt(n,o),r=>T(Mt(i,o),s=>{let f=new go(new vn(e),d(new vn(Th),d(s,g)));return new $(new Tr(r,d([new Si(t),new yi(t)],d([new Ei(Th),f],g))))}))}function Dp(e,t){return wt(e,n=>{if(n instanceof Ji){let i=n.label_location;return Ue("Labelled arguments are only supported in a call to a record constructor",i,t)}else if(n instanceof Yi){let i=n.location;return Ue("Labelled arguments are only supported in a call to a record constructor",i,t)}else{let i=n.item;return Mt(i,t)}})}function dg(e,t,n,i){return T(Mt(e,i),o=>T(Dp(t,i),r=>T(Dp(n,i),s=>{let f=ur(d(r,d(d(new vn(vh),g),d(s,g))));return new $(new Ti(d(vh,g),new go(o,f)))})))}function Mt(e,t){if(e instanceof yo){let n=e.location,i=e.value,o=kn(i);if(o instanceof $){let r=o[0];return new $(new ma(r))}else return Ue("Invalid integer literal: "+i,n,t)}else if(e instanceof To){let n=e.location;return Ue("Only whole numbers are allowed (this language has no decimals)",n,t)}else if(e instanceof yt){let n=e.name;if(n==="True")return new $(new yi(!0));if(n==="False")return new $(new yi(!1));{let i=n;return new $(new vn(i))}}else if(e instanceof vo){let n=e.location,i=e.statements;return qp(i,n,t)}else if(e instanceof So){let n=e.elements,i=e.rest;return pg(n,i,t)}else if(e instanceof qa){let n=e.location,i=e.arguments,o=e.body,r=Ze(i,s=>Ih(s.name));return T(As(Zc(r,n),"Duplicate parameter name: ",t),s=>T(qp(o,n,t),f=>new $(new Ti(r,f))))}else if(e instanceof _s){let n=e.container;if(n instanceof yt&&n.name==="list"){let i=e.label;return lg(i)?new $(new vr(new vn("list"),i)):new $(new vn("list."+i))}else{let i=n,o=e.label;return T(Mt(i,t),r=>new $(new vr(r,o)))}}else{if(e instanceof $e)return Np(e,g,g,t);if(e instanceof _n){let n=e.function,i=e.arguments_before,o=e.arguments_after;return dg(n,i,o,t)}else if(e instanceof Ua){let n=e.subjects;if(n instanceof _){let i=e.location;return Ue("Multi-subject case is not supported",i,t)}else if(n.tail instanceof _){let i=e.clauses,o=n.head;return T(Mt(o,t),r=>T($g(i,t),s=>new $(new Tr(r,s))))}else{let i=e.location;return Ue("Multi-subject case is not supported",i,t)}}else if(e instanceof gs){let n=e.name;if(n instanceof xs){let i=e.left,o=e.right;return Eh("&&",!1,i,o,t)}else if(n instanceof ws){let i=e.left,o=e.right;return Eh("||",!0,i,o,t)}else if(n instanceof Xi){let i=e.left,o=e.right;return T(Mt(i,t),r=>Np(o,d(r,g),g,t))}else{let i=e.location,o=n,r=e.left,s=e.right;return Pg(o,r,s,i,t)}}else return Ue("Expression type not supported",e.location,t)}}function Np(e,t,n,i){if(e instanceof $e){let o=e.function,r=e.arguments;return T(Mt(o,i),s=>T(ug(o,ot(t),r,i),f=>T(Dp(f,i),l=>new $(new go(s,ur(d(t,d(l,d(n,g)))))))))}else return T(Mt(e,i),o=>new $(new go(o,it(t,n))))}function qp(e,t,n){let i=S(e);if(i instanceof _)return Ue("Empty block",t,n);{let o=i.head,r=i.tail;return T((()=>{if(o instanceof Wi){let s=o.location;return Ue("A use binding must be followed by more of the block",s,n)}else if(o instanceof Gi){let s=o[0];return W(Mt(s,n),f=>new vi(n(s.location),f))}else return Ue("A block must end with an expression",Sh(o),n)})(),s=>cl(r,s,(f,l)=>{if(l instanceof Wi){let u=l.location,a=l.patterns,c=l.function;return T(wt(a,p=>jp(p.pattern,"use binding",n)),p=>T(As(Zc(p,u),"Duplicate parameter name: ",n),P=>{let m=new Ti(p,f);return T(Np(c,g,d(m,g),n),k=>new $(new vi(n(u),k)))}))}else if(l instanceof hs&&l.kind instanceof ms){let u=l.location,a=l.pattern,c=l.value;return T(jp(a,"let binding",n),p=>T(Mt(c,n),P=>new $(new _a(p,new vi(n(u),P),f))))}else return Ue("Only let, use, and expressions are allowed in a block",Sh(l),n)}))}}function hg(e,t,n){let i=e.definition,o=Ze(i.parameters,r=>Ih(r.name));return T(As(Zc(o,i.location),"Duplicate parameter name: ",n),r=>T(qp(i.body,i.location,n),s=>new $([i.name,new Gn(new br(i.name,o,s,new fc(t)))])))}function mg(e){let n=kt($l(e,`
`),[g,0],(i,o)=>{let r=i[0],s=i[1];return[d(s,r),s+on(o)+1]})[0];return i=>w$(n,o=>o<=i.start)}function Fh(e,t){let n=mg(e),i=yh(e);if(i instanceof $){let o=i[0],r=ul(o.functions,(s,f)=>_$(s.definition.location.start,f.definition.location.start));return T(wt(r,s=>hg(s,t,n)),s=>T(As(Ze(r,f=>[f.definition.name,f.definition.location]),"Duplicate function name: ",n),f=>(_f(s,l=>ha(t,l[0],l[1])),new $(t))))}else{let o=i[0];if(o instanceof Va){let r=on(dl(e));return Ue("Unexpected end of input",new E(r,r),n)}else{let r=o.position;return Ue("Syntax error",new E(r.byte_offset,r.byte_offset),n)}}}var Dt=null,et=null,Zi=null,Ms=1,io=0,Up=0,Ah=!1,Mh=0,Bh=!1,Vp=0,za=0,gg=1,Rh=10,xg=600;function Gp(e){let t=[];for(let n of e){let i=[];for(let o of n.points)i.push(o.x,o.y);t.push({pts:new Float64Array(i),thickness:n.thickness,color:n.color,start:n.start,end:n.end,fill:n.effects.fill,glow:n.effects.glow,opacity:n.effects.opacity,pivotX:n.effects.sway_pivot.x,pivotY:n.effects.sway_pivot.y,swayDegrees:n.effects.sway_degrees,swayPeriod:n.effects.sway_period,bounceHeight:n.effects.bounce_height,bouncePeriod:n.effects.bounce_period})}Zi={paths:t,endClock:wg(t)},Ah||(Ah=!0,Up=performance.now(),requestAnimationFrame(Oh))}function wg(e){let t=1/0;for(let n of e){let i=Math.max(n.start,n.end);t=t===1/0?i:Math.max(t,i)}return t}function Hp(e){Ms=e}function zp(e){Bh=e,za=0}function kg(e){let t=Number.isFinite(Zi.endClock)&&Zi.endClock>0,n=Ms>0&&io>=Zi.endClock||Ms<0&&io<=0;if(!Bh||!t||!n){za=0;return}za+=e,za>=gg&&(za=0,io=Ms>0?0:Zi.endClock)}function Wp(e){if(!jh())return;let t=document.createElement("canvas");t.width=Dt.width,t.height=Dt.height;let n=t.getContext("2d");n.fillStyle="#0a0a14",n.fillRect(0,0,t.width,t.height),n.drawImage(Dt,0,0);let i=document.createElement("a");i.download=(e||"drawing")+".png",i.href=t.toDataURL("image/png"),i.click()}function Kp(){io=0}function Oh(e){let t=Math.min((e-Up)/1e3,.1);Up=e,io+=t*Ms*Rh,Vp+=t*Ms*Rh,io=vg(io,0,Zi.endClock),kg(t),yg(),requestAnimationFrame(Oh)}function bg(){let e=window.devicePixelRatio||1,t=Math.round(Dt.clientWidth*e),n=Math.round(Dt.clientHeight*e);t>0&&n>0&&(Dt.width!==t||Dt.height!==n)&&(Dt.width=t,Dt.height=n)}function jh(){let e=document.getElementById("animation-canvas");return e?(e!==Dt&&(Dt=e,et=Dt.getContext("2d")),!0):(Mh+=1,Mh===xg&&console.error('The page has no <canvas id="animation-canvas"> element to draw on.'),!1)}function yg(){if(!jh())return;bg();let e=Dt.width,t=Dt.height;et.setTransform(1,0,0,1,0,0),et.clearRect(0,0,e,t),et.setTransform(e/1e3,0,0,t/1e3,e/2,t/2),et.lineCap="round",et.lineJoin="round";for(let n of Zi.paths){let i=Tg(n);io>=n.start&&Sg(n,i)}}function Tg(e){let t=e.end-e.start;if(t<=0)return io>=e.start?1:0;let n=(io-e.start)/t;return n<0?0:n>1?1:n}function vg(e,t,n){return e<t?t:e>n?n:e}function Sg(e,t){let n=e.pts,i=n.length/2;if(i<2)return;let o=i-1,r=t*o,s=Math.min(o,Math.floor(r));et.save(),Eg(e),e.opacity<1&&(et.globalAlpha=e.opacity),e.glow>0&&(et.shadowBlur=e.glow*(Dt.width/1e3),et.shadowColor=e.fill||e.color),et.beginPath(),et.moveTo(n[0],n[1]);for(let l=1;l<=s;l++)et.lineTo(n[2*l],n[2*l+1]);let f=r-s;if(s<o&&f>0){let l=n[2*s],u=n[2*s+1],a=n[2*s+2],c=n[2*s+3];et.lineTo(l+(a-l)*f,u+(c-u)*f)}e.fill&&(et.fillStyle=e.fill,et.fill()),e.thickness>0&&(et.lineWidth=e.thickness,et.strokeStyle=e.color,et.stroke()),et.restore()}function Eg(e){if(e.bouncePeriod>0){let t=Math.abs(Math.sin(Math.PI*Vp/e.bouncePeriod));et.translate(0,-e.bounceHeight*t)}if(e.swayPeriod>0){let t=e.swayDegrees*Math.sin(2*Math.PI*Vp/e.swayPeriod);et.translate(e.pivotX,e.pivotY),et.rotate(t*Math.PI/180),et.translate(-e.pivotX,-e.pivotY)}}var Cg="src\\render.gleam",Xp=class extends h{constructor(t,n,i,o,r,s){super(),this.points=t,this.thickness=n,this.color=i,this.start=o,this.end=r,this.effects=s}};var ti=class extends h{constructor(t,n,i,o,r,s,f,l){super(),this.fill=t,this.glow=n,this.opacity=i,this.sway_pivot=o,this.sway_degrees=r,this.sway_period=s,this.bounce_height=f,this.bounce_period=l}};var Lg=new ti("",0,1,new zn(0,0),0,0,0,0),Dh=3.141592653589793;function Ig(e,t){for(;;){let n=e,i=t;if(n instanceof Ho)e=n.shape,t=i;else if(n instanceof zo){let o=n.shape,r=n.blur;e=o,t=i.glow>0?i:new ti(i.fill,r,i.opacity,i.sway_pivot,i.sway_degrees,i.sway_period,i.bounce_height,i.bounce_period)}else if(n instanceof Wo){let o=n.shape,r=n.color;e=o,t=i.fill===""?new ti(r,i.glow,i.opacity,i.sway_pivot,i.sway_degrees,i.sway_period,i.bounce_height,i.bounce_period):i}else if(n instanceof Ko){let o=n.shape,r=n.opacity;e=o,t=new ti(i.fill,i.glow,i.opacity*r/100,i.sway_pivot,i.sway_degrees,i.sway_period,i.bounce_height,i.bounce_period)}else if(n instanceof xo){let o=n.shape,r=n.pivot,s=n.degrees,f=n.period;e=o,t=i.sway_period>0?i:new ti(i.fill,i.glow,i.opacity,r,s,f,i.bounce_height,i.bounce_period)}else if(n instanceof Ci){let o=n.shape,r=n.height,s=n.period;e=o,t=i.bounce_period>0?i:new ti(i.fill,i.glow,i.opacity,i.sway_pivot,i.sway_degrees,i.sway_period,r,s)}else return i}}function Fg(e,t){for(;;){let n=e,i=t;if(n instanceof Ho)return n.color;if(n instanceof zo)e=n.shape,t=i;else if(n instanceof Wo)e=n.shape,t=i;else if(n instanceof Ko)e=n.shape,t=i;else if(n instanceof xo)e=n.shape,t=i;else if(n instanceof Ci)e=n.shape,t=i;else return i}}function Yp(e,t){return e>t?g:d(e,Yp(e+1,t))}function Jp(e,t,n){let i=48,o=Yp(0,i);return Ze(o,r=>{let s=Fo(r,i),f=1-s,l=f*f,u=2*f*s,a=s*s;return new zn(l*e.x+u*t.x+a*n.x,l*e.y+u*t.y+a*n.y)})}function Ag(e,t,n){let i=t.x-e.x,o=t.y-e.y,r,s=Js(i*i+o*o);if(s instanceof $){let m=s[0];m>0?r=m:r=1}else r=1;let f=r,l=0-Fo(o,f),u=Fo(i,f),a=new zn((e.x+t.x)/2,(e.y+t.y)/2),c=m=>new zn(a.x+m*2*n*l,a.y+m*2*n*u),p=Jp(t,c(-1),e),P;if(p instanceof _)throw Nt("let_assert",Cg,"render",218,"leaf_points","Pattern match failed, no pattern matched the value.",{value:p,start:7038,end:7098,pattern_start:7049,pattern_end:7060});return P=p.tail,it(Jp(e,c(1),t),P)}function Nh(e,t,n,i){let o=i-n,r=J$(o)/360*2*Dh*t,s=Xs(Ro(r/6),8,360),f=Yp(0,s);return Ze(f,l=>{let a=(n+Fo(o*l,s))*Dh/180;return new zn(e.x+t*oc(a),e.y+t*nc(a))})}function Mg(e){for(;;){let t=e;if(t instanceof Er){let n=t.start,i=t.end;return d(n,d(i,g))}else if(t instanceof Cr){let n=t.center,i=t.radius;return Nh(n,i,0,360)}else if(t instanceof Lr){let n=t.center,i=t.radius,o=t.from,r=t.to;return Nh(n,i,o,r)}else if(t instanceof Ir){let n=t.start,i=t.control,o=t.end;return Jp(n,i,o)}else if(t instanceof Fr){let n=t.points;if(n instanceof _)return g;{let i=n,o=n.head;return it(i,d(o,g))}}else if(t instanceof Ar){let n=t.base,i=t.tip,o=t.width;return Ag(n,i,o)}else t instanceof Ho||t instanceof zo||t instanceof Wo||t instanceof Ko||t instanceof xo,e=t.shape}}function qh(e,t){return new Xp(Mg(e.shape),e.thickness,Fg(e.shape,t),e.start,e.end,Ig(e.shape,Lg))}var Bg="src\\app.gleam",Wt=class extends h{constructor(t,n,i,o,r,s,f,l){super(),this.library=t,this.source=n,this.code_open=i,this.shape_slider=o,this.speed=r,this.paused=s,this.looping=f,this.error=l}},n7=(e,t,n,i,o,r,s,f)=>new Wt(e,t,n,i,o,r,s,f),o7=e=>e instanceof Wt,i7=e=>e.library,r7=e=>e.library,s7=e=>e.source,a7=e=>e.source,l7=e=>e.code_open,c7=e=>e.code_open,f7=e=>e.shape_slider,u7=e=>e.shape_slider,p7=e=>e.speed,$7=e=>e.speed,P7=e=>e.paused,d7=e=>e.paused,h7=e=>e.looping,m7=e=>e.looping,_7=e=>e.error,g7=e=>e.error,Qi=class extends h{constructor(t){super(),this[0]=t}},x7=e=>new Qi(e),w7=e=>e instanceof Qi,k7=e=>e[0],Wa=class extends h{},Qp=new Wa,b7=()=>Qp,y7=e=>e instanceof Wa,Rs=class extends h{constructor(t){super(),this[0]=t}},T7=e=>new Rs(e),v7=e=>e instanceof Rs,S7=e=>e[0],Bs=class extends h{constructor(t){super(),this[0]=t}},E7=e=>new Bs(e),C7=e=>e instanceof Bs,L7=e=>e[0],Ka=class extends h{},Hh=new Ka,I7=()=>Hh,F7=e=>e instanceof Ka,Xa=class extends h{},zh=new Xa,A7=()=>zh,M7=e=>e instanceof Xa,Ja=class extends h{},Wh=new Ja,R7=()=>Wh,B7=e=>e instanceof Ja,Ya=class extends h{},Kh=new Ya,O7=()=>Kh,j7=e=>e instanceof Ya,Os=class extends h{constructor(t){super(),this[0]=t}},D7=e=>new Os(e),N7=e=>e instanceof Os,q7=e=>e[0],Za=class extends h{constructor(t){super(),this[0]=t}},U7=e=>new Za(e),V7=e=>e instanceof Za,G7=e=>e[0],Uh=d("#e8d8b0",d("#89ddff",d("#f78c6c",d("#c3e88d",d("#c792ea",d("#ffcb6b",d("#ff5370",d("#82aaff",g)))))))),Og=`fn draw(shape_slider: Int) -> List(Path) {
  [Path(Line(Point(0, 0), Point(100, 100)), 0, 10, 2)]
}
`,jg=3,Dg=-3,Ng=100,qg=0,H7="https://cardin-ia.github.io/animator/",z7=!1,W7="https://drive.google.com/file/d/1wrQSBms2W4Bv_t3SE5bmNZ1OLXYoVroB/view?usp=sharing",K7=!0;function Zp(e){return po(t=>Hp(e))}function Ug(e){let t=al(Uh,or(e,ot(Uh)));return t instanceof _?"#e8d8b0":t.head}function Vg(e,t){let n=Fh(t,sd());if(n instanceof $){let i=n[0],o=hd(e,i);return pr(o,uu)}else return n}function Qc(e){let t,n=Vg(e.shape_slider,e.source);if(n instanceof $){let f=n[0];t=[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,C),f]}else{let f=n[0];t=[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,new x(f)),g]}let i=t,o=i[0],r=i[1],s=k$(r,(f,l)=>qh(f,Ug(l)));return[o,po(f=>Gp(s))]}function Gg(e){let t=ud(),n=wu(t),i=new Wt(t,n,!0,50,1,!1,!1,C),o=Qc(i),r=o[0],s=o[1];return[r,Sl(d(Tu(n,f=>new Qi(f)),d(s,d(Zp(1),g))))]}function Hg(e){return e.paused?0:e.speed}function Xh(){return po(e=>Kp())}function zg(e){let t=Sf(e);if(t instanceof $)return t;{let n=kn(e);return W(n,Xe)}}function Vh(e,t){let n=wu(t);xu(t);let i=Qc(new Wt(t,n,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error)),o=i[0],r=i[1];return[o,Sl(d(Tu(n,s=>new Qi(s)),d(Xh(),d(r,g))))]}function Wg(e,t){if(t instanceof Qi){let n=t[0],i=pd(e.library,n);return xu(i),Qc(new Wt(i,n,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error))}else{if(t instanceof Wa)return[new Wt(e.library,e.source,!e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error),mi()];if(t instanceof Rs){let n=t[0],i=kn(n);if(i instanceof $){let o=i[0];return Qc(new Wt(e.library,e.source,e.code_open,o,e.speed,e.paused,e.looping,e.error))}else return[e,mi()]}else if(t instanceof Bs){let n=t[0],i=zg(n);if(i instanceof $){let o=i[0];return[new Wt(e.library,e.source,e.code_open,e.shape_slider,o,!1,e.looping,e.error),Zp(o)]}else return[e,mi()]}else if(t instanceof Ka){let n=new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,!e.paused,e.looping,e.error);return[n,Zp(Hg(n))]}else{if(t instanceof Xa)return[e,Xh()];if(t instanceof Ja){let n=!e.looping;return[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,n,e.error),po(i=>zp(n))]}else if(t instanceof Ya){let n=e.library.current;return[e,po(i=>Wp(n))]}else if(t instanceof Os){let n=t[0];if(n==="")return[e,po(i=>i(new Za(gu())))];{let i=n;return Vh(e,$d(e.library,i))}}else{let n=t[0],i=F$(n);if(i==="")return[e,mi()];{let o=i;return Vh(e,Pd(e.library,o,Og))}}}}}function Kg(e){let t=e.error;if(t instanceof x){let n=t[0];return vt(d(se("error-banner"),g),d(vt(d(se("error-title"),g),d(Tt("Nothing drawn"),g)),d(M2(d(se("error-message"),g),d(Tt(n),g)),g)))}else return fa()}function Xg(e){return vt(d(se("canvas-area"),g),d(B2(d(yl("animation-canvas"),d(se("canvas"),g))),d(Kg(e),g)))}function Jg(e){let t=Ro(e*10),n;t<0?n="-":n="";let o=n,r=sl(t);return o+nt(globalThis.Math.trunc(r/10))+"."+nt(r%10)}function Gh(e,t,n,i,o,r,s,f){return j2(d(se("slider"),g),d(gr(d(se("slider-label"),g),d(Tt(e),g)),d(O2(d(y2("range"),d(rt("data-test-id",t),d(w2(n),d(x2(i),d(b2(o),d(ia(r),d(DP(f),g)))))))),d(gr(d(se("slider-value"),g),d(Tt(s),g)),g))))}function Yg(e){let t=Ze(e.library.drawings,n=>d1(d(ia(n[0]),d(k2(n[0]===e.library.current),g)),n[0]));return D2(d(se("drawing-select"),d(rt("data-test-id","drawing-select"),d(rt("title","Open or create a drawing"),d(ia(e.library.current),d(NP(n=>new Os(n)),g))))),it(t,d(d1(d(ia(""),g),"+ New drawing\u2026"),g)))}function Zg(e){return e.code_open?fa():qo(d(se("icon-btn"),d(rt("title","Show code"),d(Vo(Qp),g))),d(Tt("\u27E9"),g))}function Qg(e){return vt(d(se("controls"),g),d(Zg(e),d(Yg(e),d(Gh("shape","shape-slider",nt(qg),nt(Ng),"1",nt(e.shape_slider),nt(e.shape_slider),t=>new Rs(t)),d(Gh("speed","speed-slider",Oo(Dg),Oo(jg),"0.1",Oo(e.speed),Jg(e.speed)+"\xD7",t=>new Bs(t)),d(qo(d(se("icon-btn"),d(rt("title",e.paused?"Play":"Pause"),d(Vo(Hh),g))),d(Tt(e.paused?"\u25B6":"\u23F8"),g)),d(qo(d(se("icon-btn"),d(rt("title","Replay from the start"),d(Vo(zh),g))),d(Tt("\u23EE"),g)),d(qo(d(se(e.looping?"icon-btn active":"icon-btn"),d(rt("title","Loop the animation"),d(rt("aria-pressed",e.looping?"true":"false"),d(Vo(Wh),g)))),d(Tt("\u{1F501}"),g)),d(qo(d(se("icon-btn"),d(rt("title","Save the canvas as a PNG image"),d(Vo(Kh),g))),d(Tt("Save PNG"),g)),g)))))))))}function ex(e){let t;return e.code_open?t="app":t="app code-hidden",vt(d(se(t),g),d(vt(d(se("code-col"),g),d(_d(Qp),g)),d(vt(d(se("anim-col"),g),d(Qg(e),d(Xg(e),g))),g)))}function X7(){let e=OP(Gg,Wg,ex),t=jP(e,"#app",void 0);if(!(t instanceof $))throw Nt("let_assert",Bg,"app",461,"main","Pattern match failed, no pattern matched the value.",{value:t,start:13908,end:13957,pattern_start:13919,pattern_end:13924})}export{Za as CreateDrawing,Wt as Model,n7 as Model$Model,r7 as Model$Model$0,a7 as Model$Model$1,c7 as Model$Model$2,u7 as Model$Model$3,$7 as Model$Model$4,d7 as Model$Model$5,m7 as Model$Model$6,g7 as Model$Model$7,l7 as Model$Model$code_open,_7 as Model$Model$error,i7 as Model$Model$library,h7 as Model$Model$looping,P7 as Model$Model$paused,f7 as Model$Model$shape_slider,s7 as Model$Model$source,p7 as Model$Model$speed,o7 as Model$isModel,U7 as Msg$CreateDrawing,G7 as Msg$CreateDrawing$0,A7 as Msg$Replay,zh as Msg$Replay$const,O7 as Msg$SavePng,Kh as Msg$SavePng$const,D7 as Msg$SelectDrawing,q7 as Msg$SelectDrawing$0,x7 as Msg$SetCode,k7 as Msg$SetCode$0,T7 as Msg$SetShapeSlider,S7 as Msg$SetShapeSlider$0,E7 as Msg$SetSpeed,L7 as Msg$SetSpeed$0,b7 as Msg$ToggleCode,Qp as Msg$ToggleCode$const,R7 as Msg$ToggleLoop,Wh as Msg$ToggleLoop$const,I7 as Msg$TogglePause,Hh as Msg$TogglePause$const,V7 as Msg$isCreateDrawing,M7 as Msg$isReplay,j7 as Msg$isSavePng,N7 as Msg$isSelectDrawing,w7 as Msg$isSetCode,v7 as Msg$isSetShapeSlider,C7 as Msg$isSetSpeed,y7 as Msg$isToggleCode,B7 as Msg$isToggleLoop,F7 as Msg$isTogglePause,Xa as Replay,Ya as SavePng,Os as SelectDrawing,Qi as SetCode,Rs as SetShapeSlider,Bs as SetSpeed,Wa as ToggleCode,Ja as ToggleLoop,Ka as TogglePause,z7 as include_app_in_gallery,K7 as include_video_in_gallery,Gg as init,X7 as main,H7 as public_url,Wg as update,W7 as video_url,ex as view};
