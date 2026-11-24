var m=class{withFields(t){let n=Object.keys(this).map(s=>s in t?t[s]:this[s]);return new this.constructor(...n)}},Qa=class{static fromArray(t,n){return ns(t,n)}[Symbol.iterator](){return new nf(this)}toArray(){return[...this]}atLeastLength(t){let n=this;for(;t-- >0&&n;)n=n.tail;return n!==void 0}hasLength(t){let n=this;for(;t-- >0&&n;)n=n.tail;return t===-1&&n instanceof _}countLength(){let t=this,n=0;for(;t;)t=t.tail,n++;return n-1}};function h(e,t){return new eo(e,t)}function ns(e,t){let n=t||w;for(let s=e.length-1;s>=0;--s)n=new eo(e[s],n);return n}var nf=class{#e;constructor(t){this.#e=t}next(){if(this.#e instanceof _)return{done:!0};{let{head:t,tail:n}=this.#e;return this.#e=n,{value:t,done:!1}}}},_=class extends Qa{},w=new _,td=()=>w,rf=e=>e instanceof _,eo=class extends Qa{constructor(t,n){super(),this.head=t,this.tail=n}},Ni=(e,t)=>new eo(e,t),ir=e=>e instanceof eo,qi=e=>e.head,Ir=e=>e.tail,to=class{bitSize;byteSize;bitOffset;rawBuffer;constructor(t,n,s){if(!(t instanceof Uint8Array))throw globalThis.Error("BitArray can only be constructed from a Uint8Array");if(this.bitSize=n??t.length*8,this.byteSize=Math.trunc((this.bitSize+7)/8),this.bitOffset=s??0,this.bitSize<0)throw globalThis.Error(`BitArray bit size is invalid: ${this.bitSize}`);if(this.bitOffset<0||this.bitOffset>7)throw globalThis.Error(`BitArray bit offset is invalid: ${this.bitOffset}`);if(t.length!==Math.trunc((this.bitOffset+this.bitSize+7)/8))throw globalThis.Error("BitArray buffer length is invalid");this.rawBuffer=t}byteAt(t){if(!(t<0||t>=this.byteSize))return Di(this.rawBuffer,this.bitOffset,t)}equals(t){if(this.bitSize!==t.bitSize)return!1;let n=Math.trunc(this.bitSize/8);if(this.bitOffset===0&&t.bitOffset===0){for(let r=0;r<n;r++)if(this.rawBuffer[r]!==t.rawBuffer[r])return!1;let s=this.bitSize%8;if(s){let r=8-s;if(this.rawBuffer[n]>>r!==t.rawBuffer[n]>>r)return!1}}else{for(let r=0;r<n;r++){let o=Di(this.rawBuffer,this.bitOffset,r),i=Di(t.rawBuffer,t.bitOffset,r);if(o!==i)return!1}let s=this.bitSize%8;if(s){let r=Di(this.rawBuffer,this.bitOffset,n),o=Di(t.rawBuffer,t.bitOffset,n),i=8-s;if(r>>i!==o>>i)return!1}}return!0}get buffer(){if(this.bitOffset!==0||this.bitSize%8!==0)throw new globalThis.Error("BitArray.buffer does not support unaligned bit arrays");return this.rawBuffer}get length(){if(this.bitOffset!==0||this.bitSize%8!==0)throw new globalThis.Error("BitArray.length does not support unaligned bit arrays");return this.rawBuffer.length}};function Di(e,t,n){if(t===0)return e[n]??0;{let s=e[n]<<t&255,r=e[n+1]>>8-t;return s|r}}var el=class{constructor(t){this.value=t}};var tl=class e extends m{static isResult(t){return t instanceof e}},$=class extends tl{constructor(t){super(),this[0]=t}isOk(){return!0}},tt=e=>new $(e),rs=e=>e instanceof $,Ui=e=>e[0],y=class extends tl{constructor(t){super(),this[0]=t}isOk(){return!1}},ct=e=>new y(e),nd=e=>e instanceof y;function mt(e,t){let n=[e,t];for(;n.length;){let s=n.pop(),r=n.pop();if(s===r)continue;if(!ed(s)||!ed(r)||!s_(s,r)||Zx(s,r)||Qx(s,r)||e_(s,r)||t_(s,r)||n_(s,r)||r_(s,r))return!1;let i=Object.getPrototypeOf(s);if(i!==null&&typeof i.equals=="function")try{if(s.equals(r))continue;return!1}catch{}let[f,l]=Yx(s),u=f(s),a=f(r);if(u.length!==a.length)return!1;for(let c of u)n.push(l(s,c),l(r,c))}return!0}function Yx(e){if(e instanceof Map)return[t=>t.keys(),(t,n)=>t.get(n)];{let t=e instanceof globalThis.Error?["message"]:[];return[n=>[...t,...Object.keys(n)],(n,s)=>n[s]]}}function Zx(e,t){return e instanceof Date&&(e>t||e<t)}function Qx(e,t){return!(e instanceof to)&&e.buffer instanceof ArrayBuffer&&e.BYTES_PER_ELEMENT&&!(e.byteLength===t.byteLength&&e.every((n,s)=>n===t[s]))}function e_(e,t){return Array.isArray(e)&&e.length!==t.length}function t_(e,t){return e instanceof Map&&e.size!==t.size}function n_(e,t){return e instanceof Set&&(e.size!=t.size||[...e].some(n=>!t.has(n)))}function r_(e,t){return e instanceof RegExp&&(e.source!==t.source||e.flags!==t.flags)}function ed(e){return typeof e=="object"&&e!==null}function s_(e,t){return typeof e!="object"&&typeof t!="object"&&(!e||!t)||[Promise,WeakSet,WeakMap,Function].some(s=>e instanceof s)?!1:e.constructor===t.constructor}function no(e,t){return t===0?0:e%t}function nl(e,t){return Math.trunc(Fr(e,t))}function Fr(e,t){return t===0?0:e/t}function Nt(e,t,n,s,r,o,i){let f=new globalThis.Error(o);f.gleam_error=e,f.file=t,f.module=n,f.line=s,f.function=r,f.fn=r;for(let l in i)f[l]=i[l];return f}var qt=class extends m{},ro=new qt,rd=()=>ro;var Ut=class extends m{},so=new Ut,sd=()=>so;var sf=class extends m{},oo=new sf,od=()=>oo;var g=class extends m{constructor(t){super(),this[0]=t}};var kn=class extends m{},C=new kn;var id=new WeakMap,of=new DataView(new ArrayBuffer(8)),af=0;function cf(e){let t=id.get(e);if(t!==void 0)return t;let n=af++;return af===2147483647&&(af=0),id.set(e,n),n}function ad(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}function ff(e){let t=0,n=e.length;for(let s=0;s<n;s++)t=Math.imul(31,t)+e.charCodeAt(s)|0;return t}function cd(e){of.setFloat64(0,e);let t=of.getInt32(0),n=of.getInt32(4);return Math.imul(73244475,t>>16^t)^n}function o_(e){return ff(e.toString())}function i_(e){let t=Object.getPrototypeOf(e);if(t!==null&&typeof t.hashCode=="function")try{let s=e.hashCode(e);if(typeof s=="number")return s}catch{}if(e instanceof Promise||e instanceof WeakSet||e instanceof WeakMap)return cf(e);if(e instanceof Date)return cd(e.getTime());let n=0;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||e instanceof Uint8Array)for(let s=0;s<e.length;s++)n=Math.imul(31,n)+ar(e[s])|0;else if(e instanceof Set)e.forEach(s=>{n=n+ar(s)|0});else if(e instanceof Map)e.forEach((s,r)=>{n=n+ad(ar(s),ar(r))|0});else{let s=Object.keys(e);for(let r=0;r<s.length;r++){let o=s[r],i=e[o];n=n+ad(ar(i),ff(o))|0}}return n}function ar(e){if(e===null)return 1108378658;if(e===void 0)return 1108378659;if(e===!0)return 1108378657;if(e===!1)return 1108378656;switch(typeof e){case"number":return cd(e);case"string":return ff(e);case"bigint":return o_(e);case"object":return i_(e);case"symbol":return cf(e);case"function":return cf(e);default:return 0}}var lr=class{constructor(t,n){this.size=t,this.root=n}},rl=5,a_=(1<<rl)-1,Gi=Symbol(),Hi=Symbol(),fd=f_(0),l_=new lr(0,fd),c_=ct(void 0);function sl(e,t,n,s){return{datamap:t,nodemap:n,data:s,[Hi]:e}}function f_(e){return sl(e,0,0,[])}function u_(e,t){if(e[Hi]===t)return e;let n=e.data.slice(0);return sl(t,e.datamap,e.nodemap,n)}function lf(e,t,n,s){return e.data[n]===s||(e=u_(e,t),e.data[n]=s),e}function ld(e,t,n,s,r,o){let i=e.data,f=i.length,l=new Array(f+2),u=0,a=0;for(;u<s;)l[a++]=i[u++];for(l[a++]=r,l[a++]=o;u<f;)l[a++]=i[u++];return sl(t,e.datamap|n,e.nodemap,l)}function io(){return l_}function Ki(e){return e.size}function os(e,t){let n=ud(e.root,t,ar(t));return n!==Gi?tt(n):c_}function ud(e,t,n){for(let r=0;r<32;r+=rl){let o=e.data,i=dd(n,r);if(e.nodemap&i)e=o[o.length-1-Wi(e.nodemap,i)];else if(e.datamap&i){let f=Math.imul(Wi(e.datamap,i),2);return mt(t,o[f])?o[f+1]:Gi}else return Gi}let s=e.data;for(let r=0;r<s.length;r+=2)if(mt(t,s[r]))return s[r+1];return Gi}function uf(e){return{generation:p_(e),root:e.root,size:e.size,dict:e}}function pf(e){return e.root===e.dict.root?e.dict:new lr(e.size,e.root)}function p_(e){let t=e.root;if(t[Hi]<Number.MAX_SAFE_INTEGER)return t[Hi]+1;let n=[t];for(;n.length;){let s=n.pop();s[Hi]=0;let r=data.length-$f(s.nodemap);for(let o=r;o<s.data.length;++o)n.push(s.data[o])}return 1}function pd(e,t,n){let s=ar(e);return n.root=zi(n,n.root,e,t,s,0),n}function $d(e,t,n,s){let r=ar(e),o=ud(s.root,e,r);return o!==Gi&&(n=t(o)),s.root=zi(s,s.root,e,n,r,0),s}function zi(e,t,n,s,r,o){let i=t.data,f=e.generation;if(o>32){for(let L=0;L<i.length;L+=2)if(mt(n,i[L]))return lf(t,f,L+1,s);return e.size+=1,ld(t,f,0,i.length,n,s)}let l=dd(r,o);if(t.nodemap&l){let L=i.length-1-Wi(t.nodemap,l),M=i[L];return M=zi(e,M,n,s,r,o+rl),lf(t,f,L,M)}let u=Math.imul(Wi(t.datamap,l),2);if((t.datamap&l)===0)return e.size+=1,ld(t,f,l,u,n,s);if(mt(n,i[u]))return lf(t,f,u+1,s);let a=o+rl,c=fd;c=zi(e,c,n,s,r,a);let p=i[u],d=i[u+1],x=ar(p);c=zi(e,c,p,d,x,a),e.size-=1;let b=i.length,P=b-1-Wi(t.nodemap,l),v=new Array(b-1),I=0,F=0;for(;I<u;)v[F++]=i[I++];for(I+=2;I<=P;)v[F++]=i[I++];for(v[F++]=c;I<b;)v[F++]=i[I++];return sl(f,t.datamap^l,t.nodemap|l,v)}function Lr(e,t,n){let s=[e.root];for(;s.length;){let r=s.pop(),o=r.data,i=o.length-$f(r.nodemap);for(let f=0;f<i;f+=2)t=n(t,o[f],o[f+1]);for(let f=i;f<o.length;++f)s.push(o[f])}return t}function $f(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),Math.imul(e+(e>>>4)&252645135,16843009)>>>24}function Wi(e,t){return $f(e&t-1)}function dd(e,t){return 1<<(e>>>t&a_)}function d_(e,t){for(;;){let n=e,s=t;if(s instanceof _)return pf(n);{let r=s.tail,o=s.head[0],i=s.head[1];e=pd(o,i,n),t=r}}}function Ar(e){return d_(uf(io()),e)}function h_(e,t,n){let s;Ki(t)>=Ki(n)?s=[t,n,e]:s=[n,t,(c,p,d)=>e(c,d,p)];let o=s,i=o[0],f=o[1],l=o[2],u=uf(i),a=Lr(f,u,(c,p,d)=>$d(p,b=>l(p,b,d),d,c));return pf(a)}function m_(e,t,n){return h_((s,r,o)=>n(r,o),e,t)}function hd(e,t){return m_(e,t,(n,s)=>s)}function md(e,t){return Lr(e,void 0,(n,s,r)=>(t(s,r),n))}function il(e){return e>=0?e:e*-1}function ao(e,t){return e>t?e:t}function df(e,t){return e<t?e:t}function Xi(e,t,n){if(t>=n){let o=df(e,t);return ao(o,n)}else{let o=df(e,n);return ao(o,t)}}function _d(e,t){return e===t?so:e<t?ro:oo}var cr=class extends m{},jn=new cr,hf=class extends m{},Yi=new hf;function x_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;e=n.tail,t=s+1}}function rt(e){return x_(e,0)}function __(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return o;{let i=s.head,f=s.tail;r(i)?(e=f,t=r,n=o+1):(e=f,t=r,n=o)}}}function kd(e,t){return __(e,t,0)}function as(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;e=n.tail,t=h(r,s)}}}function E(e){return as(e,w)}function mf(e,t){for(;;){let n=e,s=t;if(n instanceof _)return!1;{let r=n.head;if(mt(r,s))return!0;e=n.tail,t=s}}}function w_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.head,f=s.tail,l;r(i)?l=h(i,o):l=o;let a=l;e=f,t=r,n=a}}}function ls(e,t){return w_(e,t,w)}function g_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.head,f=s.tail,l,u=r(i);if(u instanceof $){let c=u[0];l=h(c,o)}else l=o;let a=l;e=f,t=r,n=a}}}function xf(e,t){return g_(e,t,w)}function k_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.head;e=s.tail,t=r,n=h(r(i),o)}}}function Ze(e,t){return k_(e,t,w)}function b_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return E(f);{let l=r.head,u=r.tail,a=h(o(l,i),f);e=u,t=o,n=i+1,s=a}}}function bd(e,t){return b_(e,t,0,w)}function y_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return new $(E(o));{let i=s.head,f=s.tail,l=r(i);if(l instanceof $){let u=l[0];e=f,t=r,n=h(u,o)}else return l}}}function kt(e,t){return y_(e,t,w)}function al(e,t){for(;;){let n=e,s=t;if(s<=0)return n;if(n instanceof _)return n;e=n.tail,t=s-1}}function P_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;e=n.tail,t=h(r,s)}}}function st(e,t){return P_(E(e),t)}function ll(e,t){return h(t,e)}function T_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return E(s);{let r=n.head;e=n.tail,t=as(r,s)}}}function fo(e){return T_(e,w)}function yd(e,t){return fo(Ze(e,t))}function bt(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return r;{let i=s.head;e=s.tail,t=o(r,i),n=o}}}function cl(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return new $(r);{let i=s.head,f=s.tail,l=o(r,i);if(l instanceof $){let u=l[0];e=f,t=u,n=o}else return l}}}function Pd(e,t){for(;;){let n=e,s=t;if(n instanceof _)return new y(void 0);{let r=n.head,o=n.tail;if(s(r))return new $(r);e=o,t=s}}}function v_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return new y(void 0);{let r=n.head,o=n.tail,i=s(r);if(i instanceof $)return i;e=o,t=s}}}function Td(e,t){for(;;){let n=e,s=t;if(n instanceof _)return!1;{let r=n.head,o=n.tail,i=s(r);if(i)return i;e=o,t=s}}}function E_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);if(r instanceof _)return E(o);{let i=s.head,f=s.tail,l=r.head,u=r.tail;e=f,t=u,n=h([i,l],o)}}}function fl(e,t){return E_(e,t,w)}function S_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return as(o,f);if(o instanceof _)return as(r,f);{let l=r.head,u=r.tail,a=o.head,c=o.tail,p=i(l,a);p instanceof qt?(e=r,t=c,n=i,s=h(a,f)):p instanceof Ut?(e=u,t=o,n=i,s=h(l,f)):(e=u,t=o,n=i,s=h(l,f))}}}function C_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.tail;if(i instanceof _){let f=s.head;return E(h(E(f),o))}else{let f=s.head,l=i.head,u=i.tail,a=S_(f,l,r,w);e=u,t=r,n=h(a,o)}}}}function I_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return as(o,f);if(o instanceof _)return as(r,f);{let l=r.head,u=r.tail,a=o.head,c=o.tail,p=i(l,a);p instanceof qt?(e=u,t=o,n=i,s=h(l,f)):p instanceof Ut?(e=r,t=c,n=i,s=h(a,f)):(e=r,t=c,n=i,s=h(a,f))}}}function F_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.tail;if(i instanceof _){let f=s.head;return E(h(E(f),o))}else{let f=s.head,l=i.head,u=i.tail,a=I_(f,l,r,w);e=u,t=r,n=h(a,o)}}}}function L_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return s;if(r instanceof cr){if(s.tail instanceof _)return s.head;e=F_(s,o,w),t=Yi,n=o}else if(s.tail instanceof _){let i=s.head;return E(i)}else e=C_(s,o,w),t=jn,n=o}}function A_(e,t,n,s,r,o){for(;;){let i=e,f=t,l=n,u=s,a=r,c=o,p=h(a,l);if(i instanceof _)return u instanceof cr?h(E(p),c):h(p,c);{let d=i.head,x=i.tail,b=f(a,d);if(u instanceof cr)if(b instanceof qt)e=x,t=f,n=p,s=u,r=d,o=c;else if(b instanceof Ut)e=x,t=f,n=p,s=u,r=d,o=c;else{let P;u instanceof cr?P=h(E(p),c):P=h(p,c);let v=P;if(x instanceof _)return h(h(d,w),v);{let I=x.head,F=x.tail,L,M=f(d,I);M instanceof qt||M instanceof Ut?L=jn:L=Yi;let G=L;e=F,t=f,n=h(d,w),s=G,r=I,o=v}}else if(b instanceof qt){let P;u instanceof cr?P=h(E(p),c):P=h(p,c);let v=P;if(x instanceof _)return h(h(d,w),v);{let I=x.head,F=x.tail,L,M=f(d,I);M instanceof qt||M instanceof Ut?L=jn:L=Yi;let G=L;e=F,t=f,n=h(d,w),s=G,r=I,o=v}}else if(b instanceof Ut){let P;u instanceof cr?P=h(E(p),c):P=h(p,c);let v=P;if(x instanceof _)return h(h(d,w),v);{let I=x.head,F=x.tail,L,M=f(d,I);M instanceof qt||M instanceof Ut?L=jn:L=Yi;let G=L;e=F,t=f,n=h(d,w),s=G,r=I,o=v}}else e=x,t=f,n=p,s=u,r=d,o=c}}}function ul(e,t){if(e instanceof _)return e;{let n=e.tail;if(n instanceof _)return e;{let s=e.head,r=n.head,o=n.tail,i,f=t(s,r);f instanceof qt||f instanceof Ut?i=jn:i=Yi;let l=i,u=A_(o,t,h(s,w),l,r,w);return L_(u,jn,t)}}}function M_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return[E(o),w];{let i=s.head,f=s.tail;if(r(i))e=f,t=r,n=h(i,o);else return[E(o),s]}}}function vd(e,t){return M_(e,t,w)}function Kt(e,t){return v_(e,n=>{let s=n[0],r=n[1];return mt(s,t)?new $(r):new y(void 0)})}function R_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return E(h([o,i],f));{let l=r.head[0];if(mt(l,o)){let u=r.tail;return as(f,h([l,i],u))}else{let u=r.head;e=r.tail,t=o,n=i,s=h(u,f)}}}}function Ed(e,t,n){return R_(e,t,n,w)}function _f(e,t){for(;;){let n=e,s=t;if(n instanceof _)return;{let r=n.head,o=n.tail;s(r),e=o,t=s}}}function Sd(e,t){for(;;){let n=e,s=t;if(n instanceof _)return new $(void 0);{let r=n.head,o=n.tail,i=s(r);if(i instanceof $)e=o,t=s;else return i}}}var wf=class extends m{},Mb=new wf;var bf=class extends m{},qb=new bf,yf=class extends m{},Ub=new yf;function $l(e,t){if(t==="")return gf(e);{let s=e,r=kf(s,t);return Ze(r,Xe)}}function N_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;e=n.tail,t=s+r}}}function Fd(e){return N_(e,"")}function Ld(e){let n=Md(e);return hl(n)}function Ad(e){let n=Rd(e);return n}var cs=class extends m{constructor(t,n,s){super(),this.expected=t,this.found=n,this.path=s}},Od=(e,t,n)=>new cs(e,t,n);var Nn=class extends m{constructor(t){super(),this.function=t}};var H_=new Nn(z_),jd=new Nn(W_);var fr=new Nn(K_);function ur(e,t){let n=t.function(e),s=n[0],r=n[1];return r instanceof _?new $(s):new y(r)}function Pf(e,t,n){let s=n(e);return s instanceof $?[s[0],w]:[s[0],h(new cs(t,is(e),w),w)]}function z_(e){return Pf(e,"Float",Ud)}function fs(e,t){return new Nn(n=>{let s=e.function(n),r=s[0],o=s[1];return[t(r),o]})}function W_(e){return Pf(e,"Int",Vd)}function K_(e){return Pf(e,"String",Gd)}function X_(e,t,n){for(;;){let s=e,r=t,o=n;if(o instanceof _)return r;{let i=o.head,f=o.tail,l=i.function(s),u=l;if(l[1]instanceof _)return u;e=s,t=r,n=f}}}function Dd(e,t){return new Nn(n=>{let s=e.function(n),r=s;return s[1]instanceof _?r:X_(n,r,t)})}function J_(e){let t=Dd(fr,h(fs(jd,nt),h(fs(H_,Br),w))),n=ur(e,t);return n instanceof $?n[0]:"<"+is(e)+">"}function ml(e,t){let n=Ze(t,r=>{let i=r;return J_(i)}),s=Ze(e[1],r=>new cs(r.expected,r.found,st(n,r.path)));return[e[0],s]}function xl(e){return new Nn(t=>qd(t,e.function,(n,s)=>ml(n,h(s,w)),0,w))}function Y_(e,t,n,s,r){for(;;){let o=e,i=t,f=n,l=s,u=r;if(o instanceof _){let c=f(l);return ml(c,E(i))}else{let a=o.head,c=o.tail,p=Nd(l,a);if(p instanceof $){let d=p[0];if(d instanceof g){let x=d[0];e=c,t=h(a,i),n=f,s=x,r=u}else return u(l,h(a,i))}else{let d=p[0],P=[f(l)[0],h(new cs(d,is(l),w),w)];return ml(P,E(i))}}}}function _l(e,t,n){return new Nn(s=>{let r=Y_(e,w,t.function,s,(a,c)=>{let x=[t.function(a)[0],h(new cs("Field","Nothing",w),w)];return ml(x,E(c))}),o=r[0],i=r[1],f=n(o).function(s),l=f[0],u=f[1];return[l,st(i,u)]})}function Rr(e){return new Nn(t=>[e,w])}function us(e,t,n){return _l(h(e,w),t,n)}var vf=void 0;function Xe(e){return e}function bn(e){return/^[-+]?(\d+)$/.test(e)?tt(parseInt(e)):ct(vf)}function Ef(e){return/^[-+]?(\d+)\.(\d+)([eE][-+]?\d+)?$/.test(e)?tt(parseFloat(e)):ct(vf)}function nt(e){return e.toString()}function gf(e){let t=zd(e);return Qi(t?Array.from(t).map(n=>n.segment):e.match(/./gsu))}var Hd;function zd(e){if(globalThis.Intl&&Intl.Segmenter)return Hd||=new Intl.Segmenter,Hd.segment(e)[Symbol.iterator]()}function dl(e){let t,n=zd(e);return n?t=n.next().value?.segment:t=e.match(/./su)?.[0],t?tt([t,e.slice(t.length)]):ct(vf)}function kf(e,t){return Qi(e.split(t))}function Zi(e,t){return e.startsWith(t)}var Wd=[" ","	",`
`,"\v","\f","\r","\x85","\u2028","\u2029"].join(""),ew=new RegExp(`^[${Wd}]*`),tw=new RegExp(`[${Wd}]*$`);function Md(e){return e.replace(ew,"")}function hl(e){return e.replace(tw,"")}function Kd(e){return Math.ceil(e)}function Sf(e){return Math.round(e)}function wl(e){return Math.trunc(e)}function Xd(e,t){return Math.pow(e,t)}function lo(){let e=Math.random();return e===1?lo():e}function is(e){if(typeof e=="string")return"String";if(typeof e=="boolean")return"Bool";if(nw(e))return"Result";if(gl(e))return"List";if(e instanceof to)return"BitArray";if(e instanceof lr)return"Dict";if(Number.isInteger(e))return"Int";if(Array.isArray(e))return"Array";if(typeof e=="number")return"Float";if(e===null)return"Nil";if(e===void 0)return"Nil";{let t=typeof e;return t.charAt(0).toUpperCase()+t.slice(1)}}function rn(e){return new TextEncoder().encode(e).length}var Ay=-(2**31),My=2**31-1,Ry=2**32,By=Number.MAX_SAFE_INTEGER,Oy=Number.MIN_SAFE_INTEGER;function Rd(e){return new Tf().inspect(e)}function Br(e){let t=e.toString().replace("+","");if(t.indexOf(".")>=0)return t;{let n=t.indexOf("e");return n>=0?t.slice(0,n)+".0"+t.slice(n):t+".0"}}var Tf=class{#e=new Set;inspect(t){let n=typeof t;if(t===!0)return"True";if(t===!1)return"False";if(t===null)return"//js(null)";if(t===void 0)return"Nil";if(n==="string")return this.#i(t);if(n==="bigint"||Number.isInteger(t))return t.toString();if(n==="number")return Br(t);if(t instanceof el)return this.#o(t);if(t instanceof to)return this.#n(t);if(t instanceof RegExp)return`//js(${t})`;if(t instanceof Date)return`//js(Date("${t.toISOString()}"))`;if(t instanceof globalThis.Error)return`//js(${t.toString()})`;if(t instanceof Function){let r=[];for(let o of Array(t.length).keys())r.push(String.fromCharCode(o+97));return`//fn(${r.join(", ")}) { ... }`}if(this.#e.size===this.#e.add(t).size)return"//js(circular reference)";let s;if(Array.isArray(t))s=`#(${t.map(r=>this.inspect(r)).join(", ")})`;else if(gl(t))s=this.#t(t);else if(t instanceof m)s=this.#s(t);else if(t instanceof lr)s=this.#r(t);else{if(t instanceof Set)return`//js(Set(${[...t].map(r=>this.inspect(r)).join(", ")}))`;s=this.#l(t)}return this.#e.delete(t),s}#l(t){let n=Object.getPrototypeOf(t)?.constructor?.name||"Object",s=[];for(let i of Object.keys(t))s.push(`${this.inspect(i)}: ${this.inspect(t[i])}`);let r=s.length?" "+s.join(", ")+" ":"";return`//js(${n==="Object"?"":n+" "}{${r}})`}#r(t){let n="dict.from_list([",s=!0;return n=Lr(t,n,(r,o,i)=>(s||(r=r+", "),s=!1,r+"#("+this.inspect(o)+", "+this.inspect(i)+")")),n+"])"}#s(t){let n=Object.keys(t).map(s=>{let r=this.inspect(t[s]);return isNaN(parseInt(s))?`${s}: ${r}`:r}).join(", ");return n?`${t.constructor.name}(${n})`:t.constructor.name}#t(t){if(rf(t))return"[]";let n='charlist.from_string("',s="[",r=t;for(;ir(r);){let o=r.head;r=r.tail,s!=="["&&(s+=", "),s+=this.inspect(o),n&&(Number.isInteger(o)&&o>=32&&o<=126?n+=String.fromCharCode(o):n=null)}return n?n+'")':s+"]"}#i(t){let n='"';for(let s=0;s<t.length;s++){let r=t[s];switch(r){case`
`:n+="\\n";break;case"\r":n+="\\r";break;case"	":n+="\\t";break;case"\f":n+="\\f";break;case"\\":n+="\\\\";break;case'"':n+='\\"';break;default:r<" "||r>"~"&&r<"\xA0"?n+="\\u{"+r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")+"}":n+=r}}return n+='"',n}#o(t){return`//utfcodepoint(${String.fromCodePoint(t.value)})`}#n(t){if(t.bitSize===0)return"<<>>";let n="<<";for(let s=0;s<t.byteSize-1;s++)n+=t.byteAt(s).toString(),n+=", ";if(t.byteSize*8===t.bitSize)n+=t.byteAt(t.byteSize-1).toString();else{let s=t.bitSize%8;n+=t.byteAt(t.byteSize-1)>>8-s,n+=`:size(${s})`}return n+=">>",n}};function Nd(e,t){if(e instanceof lr){let s=os(e,t);return tt(s.isOk()?new g(s[0]):new kn)}if(e instanceof WeakMap||e instanceof Map){let s={},r=e.get(t,s);return r===s?tt(new kn):tt(new g(r))}let n=Number.isInteger(t);if(n&&t>=0&&t<8&&gl(e)){let s=0;for(let r of e){if(s===t)return tt(new g(r));s++}return ct("Indexable")}return n&&Array.isArray(e)||e&&typeof e=="object"||e&&Object.getPrototypeOf(e)===Object.prototype?t in e?tt(new g(e[t])):tt(new kn):ct(n?"Indexable":"Dict")}function qd(e,t,n,s,r){if(!(gl(e)||Array.isArray(e))){let i=Od("List",is(e),r);return[r,Qi([i])]}let o=[];for(let i of e){let f=t(i),[l,u]=f;if(ir(u)){let[a,c]=n(f,s.toString());return[r,c]}o.push(l),s++}return[Qi(o),r]}function Ud(e){return typeof e=="number"?tt(e):ct(0)}function Vd(e){return Number.isInteger(e)?tt(e):ct(0)}function Gd(e){return typeof e=="string"?tt(e):ct("")}function Qi(e){let t=td(),n=e.length;for(;n--;)t=Ni(e[n],t);return t}function gl(e){return rf(e)||ir(e)}function nw(e){return rs(e)||nd(e)}function Jd(e){return e>=0?e:0-e}function rw(e){return-1*e}function Mr(e){return e>=0?Sf(e):0-Sf(rw(e))}function gd(e,t){let n=Kd(t)-t>0;return e<0&&n||e===0&&t<0?new y(void 0):new $(Xd(e,t))}function Ji(e){return gd(e,.5)}function Yd(e){return!(e instanceof $)}function W(e,t){if(e instanceof $){let n=e[0];return new $(t(n))}else return e}function uo(e,t){if(e instanceof $)return e;{let n=e[0];return new y(t(n))}}function T(e,t){if(e instanceof $){let n=e[0];return t(n)}else return e}function ea(e,t){return e instanceof $?e[0]:t}function Zd(e,t){return e instanceof $?e:new y(t)}var Cf=class extends m{},sw=new Cf;var If=class extends m{},e2=new If;var Ff=class extends m{},t2=new Ff,Lf=class extends m{},n2=new Lf;var Af=class extends m{},r2=new Af;var Mf=class extends m{},s2=new Mf;var Rf=class extends m{},u2=new Rf;var Bf=class extends m{},p2=new Bf;var Of=class extends m{},$2=new Of;var jf=class extends m{},M2=new jf;var Df=class extends m{},j2=new Df;var Nf=class extends m{},aw=new Nf;var qf=class extends m{},D2=new qf;var Uf=class extends m{},lw=new Uf;var Vf=class extends m{},K2=new Vf;function th(e,t,n){return e?t:n()}function $s(e){return e}function Gf(e){return JSON.stringify(e)}function rh(e){return Object.fromEntries(e)}function sh(e){let t=[];for(;ir(e);)t.push(qi(e)),e=Ir(e);return t}function oh(e){try{let t=JSON.parse(e);return tt(t)}catch(t){return ct(uw(t,e))}}function uw(e,t){return pw(e)?ih():$w(e,t)}function pw(e){return/((unexpected (end|eof))|(end of data)|(unterminated string)|(json( parse error|\.parse)\: expected '(\:|\}|\])'))/i.test(e.message)}function $w(e,t){let n=[dw,hw,xw,mw];for(let s of n){let r=s(e,t);if(r)return r}return po("")}function dw(e){let n=/unexpected token '(.)', ".+" is not valid JSON/i.exec(e.message);if(!n)return null;let s=kl(n[1]);return po(s)}function hw(e){let n=/unexpected token (.) in JSON at position (\d+)/i.exec(e.message);if(!n)return null;let s=kl(n[1]);return po(s)}function mw(e,t){let s=/(unexpected character|expected .*) at line (\d+) column (\d+)/i.exec(e.message);if(!s)return null;let r=Number(s[2]),o=Number(s[3]),i=_w(r,o,t),f=kl(t[i]);return po(f)}function xw(e){let n=/unexpected (identifier|token) "(.)"/i.exec(e.message);if(!n)return null;let s=kl(n[2]);return po(s)}function kl(e){return"0x"+e.charCodeAt(0).toString(16).toUpperCase()}function _w(e,t,n){if(e===1)return t-1;let s=1,r=0;return n.split("").find((o,i)=>(o===`
`&&(s+=1),s===e?(r=i+t,!0):!1)),r}var Hf=class extends m{},ww=new Hf,ih=()=>ww;var zf=class extends m{constructor(t){super(),this[0]=t}},po=e=>new zf(e);var Wf=class extends m{constructor(t){super(),this[0]=t}};function gw(e,t){return T(oh(e),n=>{let s=ur(n,t);return uo(s,r=>new Wf(r))})}function ah(e,t){return gw(e,t)}function lh(e){return Gf(e)}function Or(e){return e}function Xf(e){return e}function ta(e){return rh(e)}function kw(e){return sh(e)}function bl(e,t){let s=Ze(e,t);return kw(s)}function na(e){return e.replaceAll(/[><&"']/g,t=>{switch(t){case">":return"&gt;";case"<":return"&lt;";case"'":return"&#39;";case"&":return"&amp;";case'"':return"&quot;";default:return t}})}var V=w,$o=new y(void 0);function Bt(e){return h(e,V)}var bw=od(),yw=rd(),Pw=sd();function yl(e,t){return e.name===t.name?Pw:e.name<t.name?yw:bw}var sn=class extends m{constructor(t,n,s){super(),this.kind=t,this.name=n,this.value=s}};var hs=class extends m{constructor(t,n,s){super(),this.kind=t,this.name=n,this.value=s}};var Ot=class extends m{constructor(t,n,s,r,o,i,f,l){super(),this.kind=t,this.name=n,this.handler=s,this.include=r,this.prevent_default=o,this.stop_propagation=i,this.debounce=f,this.throttle=l}};var ho=class extends m{constructor(t,n,s){super(),this.prevent_default=t,this.stop_propagation=n,this.message=s}};var Yf=class extends m{constructor(t){super(),this.kind=t}};var Zf=0,Qf=1,eu=2,tu=0,nu=new Yf(tu);var ru=2;function mh(e,t){return new sn(Zf,e,t)}function xh(e,t){return new hs(Qf,e,t)}function _h(e,t,n,s,r,o,i){return new Ot(eu,e,t,n,s,r,o,i)}function Sw(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;if(r instanceof sn){let o=r.name;if(o==="")e=n.tail,t=s;else if(o==="class"){let i=r.value;if(i==="")e=n.tail,t=s;else{let f=n.tail;if(f instanceof _){let l=r;e=f,t=h(l,s)}else{let l=f.head;if(l instanceof sn&&l.name==="class"){let u=r.kind,a=i,c=f.tail,p=l.value,d=a+" "+p,x=new sn(u,"class",d);e=h(x,c),t=s}else{let u=r;e=f,t=h(u,s)}}}}else if(o==="style"){let i=r.value;if(i==="")e=n.tail,t=s;else{let f=n.tail;if(f instanceof _){let l=r;e=f,t=h(l,s)}else{let l=f.head;if(l instanceof sn&&l.name==="style"){let u=r.kind,a=i,c=f.tail,p=l.value,d=a+";"+p,x=new sn(u,"style",d);e=h(x,c),t=s}else{let u=r;e=f,t=h(u,s)}}}}else{let i=r;e=n.tail,t=h(i,s)}}else{let o=r;e=n.tail,t=h(o,s)}}}}function su(e){if(e instanceof _)return e;if(e.tail instanceof _)return e;{let n=ul(e,(s,r)=>yl(r,s));return Sw(n,V)}}function ot(e,t){return mh(e,t)}function wh(e,t){return xh(e,t)}function Iw(e,t){return t?ot(e,""):wh(e,Xf(!1))}function ie(e){return ot("class",e)}function Pl(e){return ot("id",e)}function gh(e){return ot("max",e)}function kh(e){return ot("min",e)}function bh(e){return Iw("selected",e)}function yh(e){return ot("step",e)}function Ph(e){return ot("type",e)}function sa(e){return ot("value",e)}var oa=class extends m{constructor(t,n,s){super(),this.synchronous=t,this.before_paint=n,this.after_paint=s}};var vl=new oa(V,V,V);function ms(){return vl}function pr(e){let t=n=>{let s=n.dispatch;return e(s)};return new oa(Bt(t),vl.before_paint,vl.after_paint)}function El(e){return bt(e,vl,(t,n)=>new oa(bt(n.synchronous,t.synchronous,ll),bt(n.before_paint,t.before_paint,ll),bt(n.after_paint,t.after_paint,ll)))}function at(){return null}function xs(e,t){return e?.get(t)}function xo(e,t,n){return e?.get(t)??n()}function qn(e,t){return e&&e.has(t)}function on(e,t,n){return e??=new Map,e.set(t,n),e}function Sl(e,t){return e?.delete(t),e}function Th(e,t){return typeof e=="number"&&typeof t=="number"?e===t||e!==e&&t!==t:e===t}function vh(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s instanceof _;if(s instanceof _)return!1;{let r=n.head,o=n.tail,i=s.head,f=s.tail,l=Th(r,i);if(l)e=o,t=f;else return l}}}var an=class extends m{constructor(t,n,s,r){super(),this.kind=t,this.key=n,this.children=s,this.keyed_children=r}};var ln=class extends m{constructor(t,n,s,r,o,i,f,l,u){super(),this.kind=t,this.key=n,this.namespace=s,this.tag=r,this.attributes=o,this.children=i,this.keyed_children=f,this.self_closing=l,this.void=u}};var Tn=class extends m{constructor(t,n,s){super(),this.kind=t,this.key=n,this.content=s}};var cn=class extends m{constructor(t,n,s,r,o,i){super(),this.kind=t,this.key=n,this.namespace=s,this.tag=r,this.attributes=o,this.inner_html=i}};var Vt=class extends m{constructor(t,n,s,r){super(),this.kind=t,this.key=n,this.mapper=s,this.child=r}};var _s=class extends m{constructor(t,n,s,r){super(),this.kind=t,this.key=n,this.dependencies=s,this.view=r}};var ws=0,Dr=1,_o=2,ou=3,jr=4,iu=5;function au(e,t,n){return new an(ws,e,t,n)}function aa(e,t,n,s,r,o,i,f){return new ln(Dr,e,t,n,su(s),r,o,i,f)}function la(e,t){return t===""?e==="area"||e==="base"||e==="br"||e==="col"||e==="embed"||e==="hr"||e==="img"||e==="input"||e==="link"||e==="meta"||e==="param"||e==="source"||e==="track"?!0:e==="wbr":!1}function lu(e,t){return new Tn(_o,e,t)}function Sh(e,t,n,s,r){return new cn(ou,e,t,n,su(s),r)}function Ch(e,t){if(e instanceof Vt){let n=e.mapper;return new Vt(jr,e.key,s=>t(n(s)),e.child)}else return new Vt(jr,e.key,t,e)}function Ih(e,t,n){return new _s(iu,e,t,n)}function Cl(e,t){if(t instanceof an)return new an(t.kind,e,t.children,t.keyed_children);if(t instanceof ln)return new ln(t.kind,e,t.namespace,t.tag,t.attributes,t.children,t.keyed_children,t.self_closing,t.void);if(t instanceof Tn)return new Tn(t.kind,e,t.content);if(t instanceof cn)return new cn(t.kind,e,t.namespace,t.tag,t.attributes,t.inner_html);if(t instanceof Vt){let n=t.child;return new Vt(t.kind,e,t.mapper,Cl(e,n))}else{let n=t.view;return new _s(t.kind,e,t.dependencies,()=>Cl(e,n()))}}var cu=class extends m{},YP=new cu,fu=class extends m{},ZP=new fu,uu=class extends m{},QP=new uu,pu=class extends m{},eT=new pu,$u=class extends m{},tT=new $u;function jt(e,t,n){return aa("","",e,t,n,at(),!1,la(e,""))}function ca(e){return lu("",e)}function fa(){return lu("","")}function du(e,t,n,s){return Sh("",e,t,n,s)}function Fh(e,t){return Ih("",e,t)}function Lh(e){return e}function Ah(e,t){return Ch(e,t)}function Tt(e){return ca(e)}function vt(e,t){return jt("div",e,t)}function Mh(e,t){return jt("pre",e,t)}function Rh(e,t){return jt("code",e,t)}function wo(e,t){return jt("span",e,t)}function Bh(e){return jt("canvas",e,V)}function Nr(e,t){return jt("button",e,t)}function Oh(e){return jt("input",e,V)}function jh(e,t){return jt("label",e,t)}function hu(e,t){return jt("option",e,h(ca(t),w))}function Dh(e,t){return jt("select",e,t)}function Nh(e,t){return jt("details",e,t)}function qh(e,t){return jt("summary",e,t)}var Ll=class extends m{constructor(t,n,s,r,o){super(),this.index=t,this.path=n,this.removed=s,this.changes=r,this.children=o}};var xu=class extends m{constructor(t,n){super(),this.kind=t,this.content=n}};var _u=class extends m{constructor(t,n){super(),this.kind=t,this.inner_html=n}};var wu=class extends m{constructor(t,n,s){super(),this.kind=t,this.added=n,this.removed=s}};var gu=class extends m{constructor(t,n,s){super(),this.kind=t,this.key=n,this.before=s}};var ku=class extends m{constructor(t,n,s){super(),this.kind=t,this.index=n,this.with=s}};var bu=class extends m{constructor(t,n){super(),this.kind=t,this.index=n}};var yu=class extends m{constructor(t,n,s){super(),this.kind=t,this.children=n,this.before=s}};var Pu=0,Tu=1,vu=2,Eu=3,Su=4,Cu=5,Iu=6;function gs(e,t,n,s){return new Ll(e,V,t,n,s)}function Uh(e){return new xu(Pu,e)}function Vh(e){return new _u(Tu,e)}function Fu(e,t){return new wu(vu,e,t)}function Gh(e,t){return new gu(Eu,e,t)}function Hh(e){return new bu(Su,e)}function $r(e,t){return new ku(Cu,e,t)}function Lu(e,t){return new yu(Iu,e,t)}function zh(e,t){return new Ll(t,h(e.index,e.path),e.removed,e.changes,e.children)}var Al=class extends m{},Rw=new Al,Ml=class extends m{constructor(t,n){super(),this.key=t,this.parent=n}},Rl=class extends m{constructor(t,n){super(),this.index=t,this.parent=n}},Au=class extends m{constructor(t){super(),this.parent=t}},Ol="\r",Bl="	",Mu=`
`,Ru=Rw;function Kh(e){if(e instanceof _)return"";{let t=e.tail;return Fd(t)}}function Bu(e,t,n){for(;;){let s=e,r=t,o=n;if(r instanceof Al)return Kh(o);if(r instanceof Ml){let i=r.key,f=r.parent;e=s,t=f,n=h(Bl,h(i,o))}else if(r instanceof Rl){let i=r.index,f=r.parent,l=h(Bl,h(nt(i),o));e=s,t=f,n=l}else if(s){let i=r.parent;if(o instanceof _)e=s,t=i,n=o;else{let f=o.tail;e=s,t=i,n=h(Ol,f)}}else return Kh(o)}}function Bw(e){return Bu(!0,e,V)}function Ow(e,t){for(;;){let n=e,s=t;if(s instanceof _)return!1;{let r=s.head,o=s.tail,i=Zi(n,r);if(i)return i;e=n,t=o}}}function Xh(e,t){return t instanceof _?!1:Ow(Bw(e),t)}function Jh(e){return $l(e,Ol)}function Gt(e,t,n){return n===""?new Rl(t,e):new Ml(n,e)}function jl(e){return new Au(e)}function Ou(e,t){return Bu(!1,e,h(Mu,h(t,V)))}function ua(e){return Bu(!1,e,V)}var dr=class extends m{constructor(t,n,s,r,o){super(),this.events=t,this.vdoms=n,this.old_vdoms=s,this.dispatched_paths=r,this.next_dispatched_paths=o}},hr=class extends m{constructor(t,n){super(),this.handlers=t,this.children=n}},pa=class extends m{constructor(t,n){super(),this.mapper=t,this.events=n}},ju=class extends m{constructor(t,n,s){super(),this.handlers=t,this.children=n,this.vdoms=s}},Nl=class extends m{constructor(t,n){super(),this.path=t,this.handler=n}},ql=class extends m{constructor(t){super(),this.path=t}};function jw(e,t){return n=>e(t(n))}function em(){return new hr(at(),at())}function tm(){return new dr(em(),at(),at(),V,V)}function nm(e,t,n,s){return on(e,Ou(t,n),s)}function Zh(e,t,n){return bt(n,e,(s,r)=>{if(r instanceof Ot){let o=r.name,i=r.handler;return nm(s,t,o,i)}else return s})}function Dl(e,t,n,s,r,o){for(;;){let i=e,f=t,l=n,u=s,a=r,c=o,p=a+1;if(c instanceof _)return new ju(i,f,l);{let d=c.head;if(d instanceof an){let x=c.tail,b=d.key,P=d.children,v=Gt(u,a,b),I=Dl(i,f,l,v,0,P),F=I.handlers,L=I.children,M=I.vdoms;e=F,t=L,n=M,s=u,r=p,o=x}else if(d instanceof ln){let x=c.tail,b=d.key,P=d.attributes,v=d.children,I=Gt(u,a,b),F=Zh(i,I,P),L=Dl(F,f,l,I,0,v),M=L.handlers,G=L.children,Q=L.vdoms;e=M,t=G,n=Q,s=u,r=p,o=x}else if(d instanceof Tn){let x=c.tail;e=i,t=f,n=l,s=u,r=p,o=x}else if(d instanceof cn){let x=c.tail,b=d.key,P=d.attributes,v=Gt(u,a,b);e=Zh(i,v,P),t=f,n=l,s=u,r=p,o=x}else if(d instanceof Vt){let x=c.tail,b=d.key,P=d.mapper,v=d.child,I=Gt(u,a,b),F=Dl(at(),at(),l,jl(I),0,Bt(v)),L=F.vdoms,M=new hr(F.handlers,F.children),G=new pa(P,M),Q=on(f,ua(I),G);e=i,t=Q,n=L,s=u,r=p,o=x}else{let x=c.tail,b=d.view,P=b(),v=on(l,b,P),I=a,F=h(P,x);e=i,t=f,n=v,s=u,r=I,o=F}}}}function Nu(e,t,n,s,r){let o=e.vdoms,i=t.handlers,f=t.children,l=Dl(i,f,o,n,s,r),u=l.handlers,a=l.children,c=l.vdoms;return[new dr(e.events,c,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths),new hr(u,a)]}function qu(e,t,n,s,r){let o=Bt(r);return Nu(e,t,n,s,o)}function rm(e){return new dr(e.events,at(),e.vdoms,e.next_dispatched_paths,V)}function sm(e){return e.events}function om(e,t){return new dr(t,e.vdoms,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function Uu(e){return e.vdoms}function im(e,t,n){return xo(e.old_vdoms,t,n)}function am(e,t,n){let s=xo(e.old_vdoms,t,n),r=on(e.vdoms,n,s);return new dr(e.events,r,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function lm(e,t,n){let s=on(e.vdoms,t,n);return new dr(e.events,s,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function cm(e,t,n){return xo(e.children,t,()=>new pa(n,em())).events}function fm(e,t,n,s){let r=new pa(n,s),o=on(e.children,t,r);return new hr(e.handlers,o)}function go(e,t,n,s){let r=nm(e.handlers,t,n,s);return new hr(r,e.children)}function um(e,t,n){return Sl(e,Ou(t,n))}function Ul(e,t,n){let s=um(e.handlers,t,n);return new hr(s,e.children)}function Qh(e,t,n){return bt(n,e,(s,r)=>{if(r instanceof Ot){let o=r.name;return um(s,t,o)}else return s})}function Du(e,t,n,s,r,o){for(;;){let i=e,f=t,l=n,u=s,a=r,c=o,p=a+1;if(c instanceof _)return new hr(i,f);{let d=c.head;if(d instanceof an){let x=c.tail,b=d.key,P=d.children,v=Gt(u,a,b),I=Du(i,f,l,v,0,P),F=I.handlers,L=I.children;e=F,t=L,n=l,s=u,r=p,o=x}else if(d instanceof ln){let x=c.tail,b=d.key,P=d.attributes,v=d.children,I=Gt(u,a,b),F=Qh(i,I,P),L=Du(F,f,l,I,0,v),M=L.handlers,G=L.children;e=M,t=G,n=l,s=u,r=p,o=x}else if(d instanceof Tn){let x=c.tail;e=i,t=f,n=l,s=u,r=p,o=x}else if(d instanceof cn){let x=c.tail,b=d.key,P=d.attributes,v=Gt(u,a,b);e=Qh(i,v,P),t=f,n=l,s=u,r=p,o=x}else if(d instanceof Vt){let x=c.tail,b=d.key,P=Gt(u,a,b),v=Sl(f,ua(P));e=i,t=v,n=l,s=u,r=p,o=x}else{let x=c.tail,b=d.view;if(qn(l,b)){let v=xs(l,b),I=h(v,x);e=i,t=f,n=l,s=u,r=a,o=I}else e=i,t=f,n=l,s=u,r=p,o=x}}}}function Vl(e,t,n,s,r){return Du(t.handlers,t.children,e.old_vdoms,n,s,Bt(r))}function mr(e,t,n,s,r,o){let i=Vl(e,t,n,s,r);return qu(e,i,n,s,o)}function Dw(e,t,n){for(;;){let s=e,r=t,o=n;if(r instanceof _)return $o;{let i=r.tail;if(i instanceof _){let f=r.head;if(qn(s.handlers,f)){let u=xs(s.handlers,f);return new $(fs(u,a=>new ho(a.prevent_default,a.stop_propagation,o(a.message))))}else return $o}else{let f=r.head,l=i;if(qn(s.children,f)){let a=xs(s.children,f),c=jw(o,a.mapper);e=a.events,t=l,n=c}else return $o}}}}function pm(e,t,n,s){let r=Jh(t+Mu+n),o=Dw(e.events,r,$s);if(o instanceof $){let i=o[0],f=ur(s,i);if(f instanceof $){let l=f[0];return new Nl(t,l)}else return new ql(t)}else return new ql(t)}function $m(e,t){let n=h(t.path,e.next_dispatched_paths),s=new dr(e.events,e.vdoms,e.old_vdoms,e.dispatched_paths,n);if(t instanceof Nl){let r=t.handler;return[s,new $(r)]}else return[s,$o]}function Gl(e,t){return Xh(t,e.dispatched_paths)}var Hl=class extends m{constructor(t){super(),this.message=t}};var Wl=e=>e instanceof Hl;var Gu=class extends m{constructor(t,n){super(),this.name=t,this.data=n}};var Kl=e=>e instanceof Gu;var zl=class extends m{},Nw=new zl;var Xl=e=>e instanceof zl;var Jl=class extends m{constructor(t,n,s,r,o){super(),this.name=t,this.init=n,this.update=s,this.view=r,this.config=o}};var Yl=class extends m{constructor(t,n,s,r,o,i,f,l,u,a,c,p,d,x){super(),this.open_shadow_root=t,this.adopt_styles=n,this.delegates_focus=s,this.attributes=r,this.properties=o,this.contexts=i,this.is_form_associated=f,this.on_form_autofill=l,this.on_form_reset=u,this.on_form_restore=a,this.on_form_disabled=c,this.on_connect=p,this.on_adopt=d,this.on_disconnect=x}};var hm=new Yl(!0,!0,!1,V,V,V,!1,C,C,C,C,C,C,C);var Un=(e,t)=>{if(e===t)return!0;if(e==null||t==null)return!1;let n=typeof e;return n!==typeof t||n!=="object"||e.constructor!==t.constructor?!1:Array.isArray(e)?qw(e,t):Uw(e,t)},qw=(e,t)=>{let n=e.length;if(n!==t.length)return!1;for(;n--;)if(!Un(e[n],t[n]))return!1;return!0},Uw=(e,t)=>{let n=Object.keys(e),s=n.length;if(Object.keys(t).length!==s)return!1;for(;s--;){let r=n[s];if(!Object.hasOwn(t,r)||!Un(e[r],t[r]))return!1}return!0};var Hu=class extends m{constructor(t,n){super(),this.patch=t,this.cache=n}};var Ql=class extends m{constructor(t,n,s){super(),this.patch=t,this.cache=n,this.events=s}},zu=class extends m{constructor(t,n,s){super(),this.added=t,this.removed=n,this.events=s}};function xm(e,t,n,s,r,o,i){for(;;){let f=e,l=t,u=n,a=s,c=r,p=o,d=i;if(a instanceof _){if(c instanceof _)return new zu(p,d,u);{let x=c.head;if(x instanceof Ot){let b=x,P=c.tail,v=x.name,I=x.handler,F=go(u,l,v,I),L=h(b,p);e=f,t=l,n=F,s=a,r=P,o=L,i=d}else{let b=x,P=c.tail,v=h(b,p);e=f,t=l,n=u,s=a,r=P,o=v,i=d}}}else if(c instanceof _){let x=a.head;if(x instanceof Ot){let b=x,P=a.tail,v=x.name,I=Ul(u,l,v),F=h(b,d);e=f,t=l,n=I,s=P,r=c,o=p,i=F}else{let b=x,P=a.tail,v=h(b,d);e=f,t=l,n=u,s=P,r=c,o=p,i=v}}else{let x=a.head,b=a.tail,P=c.head,v=c.tail,I=yl(x,P);if(I instanceof qt)if(x instanceof Ot){let F=x.name;e=f,t=l,n=Ul(u,l,F),s=b,r=c,o=p,i=h(x,d)}else e=f,t=l,n=u,s=b,r=c,o=p,i=h(x,d);else if(I instanceof Ut)if(x instanceof sn)if(P instanceof sn){let F,L=P.name;L==="value"||L==="checked"||L==="selected"?F=f||x.value!==P.value:F=x.value!==P.value;let M=F,G;M?G=h(P,p):G=p;let Q=G;e=f,t=l,n=u,s=b,r=v,o=Q,i=d}else if(P instanceof Ot){let F=P.name,L=P.handler;e=f,t=l,n=go(u,l,F,L),s=b,r=v,o=h(P,p),i=h(x,d)}else e=f,t=l,n=u,s=b,r=v,o=h(P,p),i=h(x,d);else if(x instanceof hs)if(P instanceof hs){let F,L=P.name;L==="scrollLeft"||L==="scrollRight"?F=!0:L==="value"?F=f||!Un(x.value,P.value):L==="checked"?F=f||!Un(x.value,P.value):L==="selected"?F=f||!Un(x.value,P.value):F=!Un(x.value,P.value);let M=F,G;M?G=h(P,p):G=p;let Q=G;e=f,t=l,n=u,s=b,r=v,o=Q,i=d}else if(P instanceof Ot){let F=P.name,L=P.handler;e=f,t=l,n=go(u,l,F,L),s=b,r=v,o=h(P,p),i=h(x,d)}else e=f,t=l,n=u,s=b,r=v,o=h(P,p),i=h(x,d);else if(P instanceof Ot){let F=P.name,L=P.handler,M=x.prevent_default.kind!==P.prevent_default.kind||x.stop_propagation.kind!==P.stop_propagation.kind||x.debounce!==P.debounce||x.throttle!==P.throttle,G;M?G=h(P,p):G=p;let Q=G;e=f,t=l,n=go(u,l,F,L),s=b,r=v,o=Q,i=d}else{let F=x.name;e=f,t=l,n=Ul(u,l,F),s=b,r=v,o=h(P,p),i=h(x,d)}else if(P instanceof Ot){let F=P.name,L=P.handler;e=f,t=l,n=go(u,l,F,L),s=a,r=v,o=h(P,p),i=d}else e=f,t=l,n=u,s=a,r=v,o=h(P,p),i=d}}}function Vw(e,t,n,s){return n==="input"&&t===""?Gl(e,s):n==="select"&&t===""?Gl(e,s):n==="textarea"&&t===""?Gl(e,s):!1}function Zl(e,t,n,s,r,o,i,f,l,u,a,c,p,d){for(;;){let x=e,b=t,P=n,v=s,I=r,F=o,L=i,M=f,G=l,Q=u,oe=a,ee=c,me=p,Ke=d;if(x instanceof _)if(P instanceof _){let gt,Ct=ks();if(Q instanceof _)if(oe instanceof _)gt=gs(G,L,Q,oe);else if(!Ct&&oe.tail instanceof _&&L===0){let ae=oe.head;gt=zh(ae,G)}else gt=gs(G,L,Q,oe);else gt=gs(G,L,Q,oe);let xe=gt;return new Ql(xe,me,Ke)}else{let gt=Nu(me,Ke,ee,M,P),Ct=gt[0],xe=gt[1],ae=Lu(P,M-F),te=h(ae,Q),le=gs(G,L,te,oe);return new Ql(le,Ct,xe)}else if(P instanceof _){let gt=x.head,Ct=x.tail;if(gt.key===""||!qn(I,gt.key)){let ae=Vl(me,Ke,ee,M,gt);e=Ct,t=b,n=P,s=v,r=I,o=F,i=L+1,f=M,l=G,u=Q,a=oe,c=ee,p=me,d=ae}else e=Ct,t=b,n=P,s=v,r=I,o=F,i=L,f=M,l=G,u=Q,a=oe,c=ee,p=me,d=Ke}else{let gt=x.head,Ct=P.head;if(gt.key!==Ct.key){let xe=x.tail,ae=P.tail,te=qn(b,Ct.key);if(qn(v,gt.key))if(te)if(qn(I,gt.key))e=xe,t=b,n=P,s=v,r=I,o=F-1,i=L,f=M,l=G,u=Q,a=oe,c=ee,p=me,d=Ke;else{let ne=xs(b,Ct.key),re=M-F,J=h(Gh(Ct.key,re),Q),fe=on(I,Ct.key,void 0);e=h(ne,x),t=b,n=P,s=v,r=fe,o=F+1,i=L,f=M,l=G,u=J,a=oe,c=ee,p=me,d=Ke}else{let z=M-F,ne=qu(me,Ke,ee,M,Ct),re=ne[0],J=ne[1],fe=Lu(Bt(Ct),z),pe=h(fe,Q);e=x,t=b,n=ae,s=v,r=I,o=F+1,i=L,f=M+1,l=G,u=pe,a=oe,c=ee,p=re,d=J}else if(te){let z=M-F,ne=h(Hh(z),Q),re=Vl(me,Ke,ee,M,gt);e=xe,t=b,n=P,s=v,r=I,o=F-1,i=L,f=M,l=G,u=ne,a=oe,c=ee,p=me,d=re}else{let z=$r(M-F,Ct),ne=mr(me,Ke,ee,M,gt,Ct),re=ne[0],J=ne[1];e=xe,t=b,n=ae,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(z,Q),a=oe,c=ee,p=re,d=J}}else{let xe=x.head;if(xe instanceof an){let ae=P.head;if(ae instanceof an){let te=xe,le=x.tail,z=ae,ne=P.tail,re=Zl(te.children,te.keyed_children,z.children,z.keyed_children,at(),0,0,0,M,V,V,Gt(ee,M,z.key),me,Ke),J=re.patch,fe=re.cache,pe=re.events,nn;J.changes instanceof _&&J.children instanceof _&&J.removed===0?nn=oe:nn=h(J,oe);let gn=nn;e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=gn,c=ee,p=fe,d=pe}else{let te=xe,le=x.tail,z=ae,ne=P.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(re,Q),a=oe,c=ee,p=fe,d=pe}}else if(xe instanceof ln){let ae=P.head;if(ae instanceof ln){let te=xe,le=ae;if(te.namespace===le.namespace&&te.tag===le.tag){let z=x.tail,ne=P.tail,re=Gt(ee,M,le.key),J=Vw(me,le.namespace,le.tag,re),fe=xm(J,re,Ke,te.attributes,le.attributes,V,V),pe=fe.added,nn=fe.removed,gn=fe.events,Cr;pe instanceof _&&nn instanceof _?Cr=V:Cr=Bt(Fu(pe,nn));let or=Cr,Qs=Zl(te.children,te.keyed_children,le.children,le.keyed_children,at(),0,0,0,M,or,V,re,me,gn),ts=Qs.patch,ji=Qs.cache,ef=Qs.events,tf;ts.changes instanceof _&&ts.children instanceof _&&ts.removed===0?tf=oe:tf=h(ts,oe);let Jx=tf;e=z,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=Jx,c=ee,p=ji,d=ef}else{let z=xe,ne=x.tail,re=ae,J=P.tail,fe=$r(M-F,re),pe=mr(me,Ke,ee,M,z,re),nn=pe[0],gn=pe[1];e=ne,t=b,n=J,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(fe,Q),a=oe,c=ee,p=nn,d=gn}}else{let te=xe,le=x.tail,z=ae,ne=P.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(re,Q),a=oe,c=ee,p=fe,d=pe}}else if(xe instanceof Tn){let ae=P.head;if(ae instanceof Tn){let te=xe,le=ae;if(te.content===le.content){let z=x.tail,ne=P.tail;e=z,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=oe,c=ee,p=me,d=Ke}else{let z=x.tail,ne=ae,re=P.tail,J=gs(M,0,Bt(Uh(ne.content)),V);e=z,t=b,n=re,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=h(J,oe),c=ee,p=me,d=Ke}}else{let te=xe,le=x.tail,z=ae,ne=P.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(re,Q),a=oe,c=ee,p=fe,d=pe}}else if(xe instanceof cn){let ae=P.head;if(ae instanceof cn){let te=xe,le=x.tail,z=ae,ne=P.tail,re=Gt(ee,M,z.key),J=xm(!1,re,Ke,te.attributes,z.attributes,V,V),fe=J.added,pe=J.removed,nn=J.events,gn;fe instanceof _&&pe instanceof _?gn=V:gn=Bt(Fu(fe,pe));let Cr=gn,or;te.inner_html===z.inner_html?or=Cr:or=h(Vh(z.inner_html),Cr);let ts=or,ji;ts instanceof _?ji=oe:ji=h(gs(M,0,ts,V),oe);let ef=ji;e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=ef,c=ee,p=me,d=nn}else{let te=xe,le=x.tail,z=ae,ne=P.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(re,Q),a=oe,c=ee,p=fe,d=pe}}else if(xe instanceof Vt){let ae=P.head;if(ae instanceof Vt){let te=xe,le=x.tail,z=ae,ne=P.tail,re=Gt(ee,M,z.key),J=ua(re),fe=Zl(Bt(te.child),at(),Bt(z.child),at(),at(),0,0,0,M,V,V,jl(re),me,cm(Ke,J,te.mapper)),pe=fe.patch,nn=fe.cache,gn=fe.events,Cr=fm(Ke,J,z.mapper,gn),or;pe.changes instanceof _&&pe.children instanceof _&&pe.removed===0?or=oe:or=h(pe,oe);let Qs=or;e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=Qs,c=ee,p=nn,d=Cr}else{let te=xe,le=x.tail,z=ae,ne=P.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(re,Q),a=oe,c=ee,p=fe,d=pe}}else{let ae=P.head;if(ae instanceof _s){let te=xe,le=x.tail,z=ae,ne=P.tail;if(vh(te.dependencies,z.dependencies)){let J=am(me,te.view,z.view);e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=Q,a=oe,c=ee,p=J,d=Ke}else{let J=im(me,te.view,te.view),fe=z.view(),pe=lm(me,z.view,fe);e=h(J,le),t=b,n=h(fe,ne),s=v,r=I,o=F,i=L,f=M,l=G,u=Q,a=oe,c=ee,p=pe,d=Ke}}else{let te=xe,le=x.tail,z=ae,ne=P.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=le,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,l=G,u=h(re,Q),a=oe,c=ee,p=fe,d=pe}}}}}}function Wu(e,t,n){let s=rm(e),r=Zl(Bt(t),at(),Bt(n),at(),at(),0,0,0,0,V,V,Ru,s,sm(s)),o=r.patch,i=r.cache,f=r.events;return new Hu(o,om(i,f))}var fn=(e,t)=>{if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else if(e)for(e;Ir(e);e=Ir(e))t(qi(e))},Ku=(e,t)=>Ir(e)?Ir(t)?st(e,t):e:t;var ec="http://www.w3.org/1999/xhtml";var _m=!!globalThis.HTMLElement?.prototype?.moveBefore;var Hw=globalThis.setTimeout,Xu=globalThis.clearTimeout,zw=(e,t)=>globalThis.document.createElementNS(e,t),wm=e=>globalThis.document.createTextNode(e),gm=e=>globalThis.document.createComment(e),Ww=()=>globalThis.document.createDocumentFragment(),qr=(e,t,n)=>e.insertBefore(t,n),km=_m?(e,t,n)=>e.moveBefore(t,n):qr,bm=(e,t)=>e.removeChild(t),Kw=(e,t)=>e.getAttribute(t),ym=(e,t,n)=>e.setAttribute(t,n),Xw=(e,t)=>e.removeAttribute(t),Jw=(e,t,n,s)=>e.addEventListener(t,n,s),Pm=(e,t,n)=>e.removeEventListener(t,n),Yw=(e,t)=>e.innerHTML=t,Zw=(e,t)=>e.data=t,un=Symbol("lustre"),Yu=class{constructor(t,n,s,r){this.kind=t,this.key=r,this.parent=n,this.children=[],this.node=s,this.endNode=null,this.handlers=new Map,this.throttles=new Map,this.debouncers=new Map}get isVirtual(){return this.kind===ws||this.kind===jr}get parentNode(){return this.isVirtual?this.node.parentNode:this.node}};var pn=(e,t,n,s,r)=>{let o=new Yu(e,t,n,r);return n[un]=o,t?.children.splice(s,0,o),o},Qw=e=>{let t="";for(let n=e[un];n.parent;n=n.parent){let s=n.parent&&n.parent.kind===jr?Ol:Bl;if(n.key)t=`${s}${n.key}${t}`;else{let r=n.parent.children.indexOf(n);t=`${s}${r}${t}`}}return t.slice(1)},tc=class{#e=null;#l;#r;#s=!1;constructor(t,n,s,{debug:r=!1}={}){this.#e=t,this.#l=n,this.#r=s,this.#s=r}mount(t){pn(Dr,null,this.#e,0,null),this.#m(this.#e,null,this.#e[un],0,t)}push(t,n=null){this.#t=n,this.#i.push({node:this.#e[un],patch:t}),this.#o()}#t;#i=[];#o(){let t=this.#i;for(;t.length;){let{node:n,patch:s}=t.pop(),{path:r,changes:o,removed:i,children:f}=s;fn(r,u=>{n=n.children[u]});let{children:l}=n;fn(o,u=>this.#n(n,u)),i&&this.#f(n,l.length-i,i),fn(f,u=>{let a=l[u.index|0];this.#i.push({node:a,patch:u})})}}#n(t,n){switch(n.kind){case Pu:this.#T(t,n);break;case Tu:this.#k(t,n);break;case vu:this.#h(t,n);break;case Eu:this.#c(t,n);break;case Su:this.#_(t,n);break;case Cu:this.#$(t,n);break;case Iu:this.#p(t,n);break}}#p(t,{children:n,before:s}){let r=Ww(),o=this.#a(t,s);this.#g(r,null,t,s|0,n),qr(t.parentNode,r,o)}#$(t,{index:n,with:s}){this.#f(t,n|0,1);let r=this.#a(t,n);this.#m(t.parentNode,r,t,n|0,s)}#a(t,n){n=n|0;let{children:s}=t,r=s.length;if(n<r)return s[n].node;if(t.endNode)return t.endNode;if(!t.isVirtual)return null;for(;t.isVirtual&&t.children.length;){if(t.endNode)return t.endNode.nextSibling;t=t.children[t.children.length-1]}return t.node.nextSibling}#c(t,{key:n,before:s}){s=s|0;let{children:r,parentNode:o}=t,i=r[s].node,f=r[s];for(let l=s+1;l<r.length;++l){let u=r[l];if(r[l]=f,f=u,u.key===n){r[s]=u;break}}this.#x(o,f,i)}#u(t,n,s){for(let r=0;r<n.length;++r)this.#x(t,n[r],s)}#x(t,n,s){km(t,n.node,s),n.isVirtual&&this.#u(t,n.children,s),n.endNode&&km(t,n.endNode,s)}#_(t,{index:n}){this.#f(t,n,1)}#f(t,n,s){let{children:r,parentNode:o}=t,i=r.splice(n,s);for(let f=0;f<i.length;++f){let l=i[f],{node:u,endNode:a,isVirtual:c,children:p}=l;bm(o,u),a&&bm(o,a),this.#d(l),c&&i.push(...p)}}#d(t){let{debouncers:n,children:s}=t;for(let{timeout:r}of n.values())r&&Xu(r);n.clear(),fn(s,r=>this.#d(r))}#h({node:t,handlers:n,throttles:s,debouncers:r},{added:o,removed:i}){fn(i,({name:f})=>{n.delete(f)?(Pm(t,f,Ju),this.#w(s,f,0),this.#w(r,f,0)):(Xw(t,f),vm[f]?.removed?.(t,f))}),fn(o,f=>this.#P(t,f))}#T({node:t},{content:n}){Zw(t,n??"")}#k({node:t},{inner_html:n}){Yw(t,n??"")}#g(t,n,s,r,o){fn(o,i=>this.#m(t,n,s,r++,i))}#m(t,n,s,r,o){switch(o.kind){case Dr:{let i=this.#b(s,r,o);this.#g(i,null,i[un],0,o.children),qr(t,i,n);break}case _o:{let i=this.#v(s,r,o);qr(t,i,n);break}case ws:{let i="lustre:fragment",f=this.#y(i,s,r,o);qr(t,f,n),this.#g(t,n,f[un],0,o.children),this.#s&&(f[un].endNode=gm(` /${i} `),qr(t,f[un].endNode,n));break}case ou:{let i=this.#b(s,r,o);this.#k({node:i},o),qr(t,i,n);break}case jr:{let i=this.#y("lustre:map",s,r,o);qr(t,i,n),this.#m(t,n,i[un],0,o.child);break}case iu:{let i=this.#t?.get(o.view)??o.view();this.#m(t,n,s,r,i);break}}}#b(t,n,{kind:s,key:r,tag:o,namespace:i,attributes:f}){let l=zw(i||ec,o);return pn(s,t,l,n,r),this.#s&&r&&ym(l,"data-lustre-key",r),fn(f,u=>this.#P(l,u)),l}#v(t,n,{kind:s,key:r,content:o}){let i=wm(o??"");return pn(s,t,i,n,r),i}#y(t,n,s,{kind:r,key:o}){let i=this.#s?gm(eg(t,o)):wm("");return pn(r,n,i,s,o),i}#P(t,n){let{debouncers:s,handlers:r,throttles:o}=t[un],{kind:i,name:f,value:l,prevent_default:u,debounce:a,throttle:c}=n;switch(i){case Zf:{let p=l??"";if(f==="virtual:defaultValue"){t.defaultValue=p;return}else if(f==="virtual:defaultChecked"){t.defaultChecked=!0;return}else if(f==="virtual:defaultSelected"){t.defaultSelected=!0;return}p!==Kw(t,f)&&ym(t,f,p),vm[f]?.added?.(t,p);break}case Qf:t[f]=l;break;case eu:{r.has(f)&&Pm(t,f,Ju);let p=u.kind===tu;Jw(t,f,Ju,{passive:p}),this.#w(o,f,c),this.#w(s,f,a),r.set(f,d=>this.#E(n,d));break}}}#w(t,n,s){let r=t.get(n);if(s>0)r?r.delay=s:t.set(n,{delay:s});else if(r){let{timeout:o}=r;o&&Xu(o),t.delete(n)}}#E(t,n){let{currentTarget:s,type:r}=n,{debouncers:o,throttles:i}=s[un],f=Qw(s),{prevent_default:l,stop_propagation:u,include:a}=t;l.kind===ru&&n.preventDefault(),u.kind===ru&&n.stopPropagation(),r==="submit"&&(n.detail??={},n.detail.formData=[...new FormData(n.target,n.submitter).entries()]);let c=this.#l(n,f,r,a),p=i.get(r);if(p){let x=Date.now(),b=p.last||0;x>b+p.delay&&(p.last=x,p.lastEvent=n,this.#r(n,c))}let d=o.get(r);d&&(Xu(d.timeout),d.timeout=Hw(()=>{n!==i.get(r)?.lastEvent&&this.#r(n,c)},d.delay)),!p&&!d&&this.#r(n,c)}},eg=(e,t)=>t?` ${e} key="${na(t)}" `:` ${e} `,Ju=e=>{let{currentTarget:t,type:n}=e;t[un].handlers.get(n)(e)},Tm=e=>({added(t){t[e]=!0},removed(t){t[e]=!1}}),tg=e=>({added(t,n){t[e]=n}}),vm={checked:Tm("checked"),selected:Tm("selected"),value:tg("value"),autofocus:{added(e){queueMicrotask(()=>{e.focus?.()})}},autoplay:{added(e){try{e.play?.()}catch(t){console.error(t)}}}};function ng(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return[r,E(o)];{let i=s.tail,f=s.head[0],l=s.head[1],u=Cl(f,l),a;f===""?a=r:a=on(r,f,u);let c=a,p=h(u,o);e=i,t=c,n=p}}}function Zu(e){return ng(e,at(),V)}function Em(e,t,n){let s=Zu(n),r=s[0],o=s[1];return aa("","",e,t,o,r,!1,la(e,""))}function Sm(e,t,n,s){let r=Zu(s),o=r[0],i=r[1];return aa("",e,t,n,i,o,!1,la(t,e))}function Qu(e){let t=Zu(e),n=t[0],s=t[1];return au("",s,n)}var Im=e=>{let t=pn(Dr,null,e,0,null),{children:n}=ep(t,e,e.firstChild);if(n.length>1){let r=pn(Dr,null,e,0,null);return t.kind=ws,t.node=globalThis.document.createTextNode(""),t.parent=r,r.children.push(t),e.insertBefore(t.node,e.firstChild),Qu(ko(n))}if(n.length===1)return n[0][1];let s=globalThis.document.createTextNode("");return pn(_o,t,s,0,null),e.insertBefore(s,e.firstChild),fa()},Fm=(e,t,n,s)=>{if(n.nodeType===8){let r=n.data.trim();return r.startsWith("lustre:fragment")?ag(e,t,n,s):r.startsWith("lustre:map")?lg(e,t,n,s):r.startsWith("lustre:memo")?cg(e,t,n,s):null}return n.nodeType===1?og(e,n,s):n.nodeType===3?ig(e,n,s):null},og=(e,t,n)=>{let s=t.getAttribute("data-lustre-key")??"";s&&t.removeAttribute("data-lustre-key");let r=pn(Dr,e,t,n,s),o=t.localName,i=t.namespaceURI,f=!i||i===ec;f&&ug.includes(o)&&pg(o,t);let l=fg(t),{children:u}=ep(r,t,t.firstChild),a=f?Em(o,l,ko(u)):Sm(i,o,l,ko(u));return $a(s,a,t.nextSibling)},ep=(e,t,n)=>{let s=[];for(;n&&(n.nodeType!==8||n.data.trim()!=="/lustre:fragment");){let r=Fm(e,t,n,s.length);r?(s.push([r.key,r.vnode]),n=r.next):n=n.nextSibling}return{children:s,end:n}},ig=(e,t,n)=>(pn(_o,e,t,n,null),$a("",ca(t.data),t.nextSibling)),ag=(e,t,n,s)=>{let r=tp(n.data),o=pn(ws,e,n,s,r),{children:i,end:f}=ep(o,t,n.nextSibling);o.endNode=f;let l=Qu(ko(i));return $a(r,l,f?.nextSibling)},lg=(e,t,n,s)=>{let r=tp(n.data),o=pn(jr,e,n,s,r),i=Lm(o,t,n,0);if(!i)return null;let f=Ah(i.vnode,l=>l);return $a(r,f,i.next)},cg=(e,t,n,s)=>{let r=tp(n.data),o=Lm(e,t,n,s);if(!o)return null;t.removeChild(n);let i=Fh(ko([Lh({})]),()=>o.vnode);return $a(r,i,o.next)},Lm=(e,t,n,s)=>{for(;;){if(n=n.nextSibling,!n)return null;let r=Fm(e,t,n,s);if(r)return r}},$a=(e,t,n)=>({key:e,vnode:t,next:n}),fg=e=>{let t=[];for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n];s.name!=="xmlns"&&t.push(ot(s.localName,s.value))}return ko(t)},ug=["input","select","textarea"],pg=(e,t)=>{let n=t.value,s=t.checked;e==="input"&&t.type==="checkbox"&&!s||e==="input"&&t.type==="radio"&&!s||t.type!=="checkbox"&&t.type!=="radio"&&!n||queueMicrotask(()=>{t.value=n,t.checked=s,t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),globalThis.document.activeElement!==t&&t.dispatchEvent(new Event("blur",{bubbles:!0}))})},tp=e=>{let t=e.match(/key="([^"]*)"/);return t?$g(t[1]):""},$g=e=>e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#39;/g,"'"),ko=e=>e.reduceRight((t,n)=>Ni(n,t),V);var ks=()=>!!globalThis.document;var da=class{constructor(t,[n,s],r,o,i){this.root=t,this.#e=n,this.#l=r,this.#r=o,this.root.addEventListener("context-request",u=>{if(!(u.context&&u.callback)||!this.#o.has(u.context))return;u.stopImmediatePropagation();let a=this.#o.get(u.context);if(u.subscribe){let c=()=>{a.subscribers=a.subscribers.filter(p=>p!==u.callback)};a.subscribers.push([u.callback,c]),u.callback(a.value,c)}else u.callback(a.value)});let f=(u,a,c)=>pm(this.#t,a,c,u),l=(u,a)=>{let[c,p]=$m(this.#t,a);if(this.#t=c,rs(p)){let d=Ui(p);d.stop_propagation&&u.stopPropagation(),d.prevent_default&&u.preventDefault(),this.dispatch(d.message,!1)}};this.#i=new tc(this.root,f,l,i),this.#s=Im(this.root),this.#t=tm(),this.#f(s),this.#h()}root=null;dispatch(t,n=!1){if(this.#p)this.#$.push(t);else{let[s,r]=this.#r(this.#e,t);this.#e=s,this.#_(n),this.#f(r)}}emit(t,n){(this.root.host??this.root).dispatchEvent(new rp(t,n))}provide(t,n){if(!this.#o.has(t))this.#o.set(t,{value:n,subscribers:[]});else{let s=this.#o.get(t);if(Un(s.value,n))return;s.value=n;for(let r=s.subscribers.length-1;r>=0;r--){let[o,i]=s.subscribers[r];if(!o){s.subscribers.splice(r,1);continue}o(n,i)}}}subscribe(t,n){if(!t)return;this.#n.get(t)?.(),(this.root.host??this.root).dispatchEvent(new np(t,(r,o)=>{let i=this.#n.get(t);i!==o&&i?.();let f=ur(r,n);this.#n.set(t,o),rs(f)&&this.dispatch(Ui(f),!0)},!0))}unsubscribe(t){let n=this.#n.get(t);n&&(n(),this.#n.delete(t))}unsubscribeAll(){for(let[t,n]of this.#n)n?.();this.#n.clear()}#e;#l;#r;#s;#t;#i;#o=new Map;#n=new Map;#p=!1;#$=[];#a=V;#c=V;#u=null;#x={dispatch:t=>this.dispatch(t),emit:(t,n)=>this.emit(t,n),select:()=>{},root:()=>this.root,provide:(t,n)=>this.provide(t,n),subscribe:(t,n)=>this.subscribe(t,n),unsubscribe:t=>this.unsubscribe(t)};#_(t=!1){this.#u||(t?(this.#u="sync",queueMicrotask(()=>this.#h())):this.#u=window.requestAnimationFrame(()=>this.#h()))}#f(t){this.#p=!0;let n=!1;for(;fn(t.synchronous,r=>r(this.#x)),this.#a=Ku(this.#a,t.before_paint),this.#c=Ku(this.#c,t.after_paint),!!this.#$.length;){let s=this.#$.shift();[this.#e,t]=this.#r(this.#e,s),n=!0}return this.#p=!1,n}#d(t){this.#f(t)&&this.#_(!0)}#h(){this.#u=null;let t=this.#l(this.#e),{patch:n,cache:s}=Wu(this.#t,this.#s,t);if(this.#t=s,this.#s=t,this.#i.push(n,Uu(s)),ir(this.#a)){let r=Am(this.#a);this.#a=V,queueMicrotask(()=>this.#d(r))}if(ir(this.#c)){let r=Am(this.#c);this.#c=V,window.requestAnimationFrame(()=>this.#d(r))}}};function Am(e){return{synchronous:e,after_paint:V,before_paint:V}}var np=class extends Event{constructor(t,n,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=n,this.subscribe=s}},rp=class extends CustomEvent{isLustreEvent=!0;constructor(t,n){super(t,{detail:n,bubbles:!0,composed:!0})}};var op=class{#e;constructor(t,[n,s],r,o){this.#e=new da(t,[n,s],o,r)}send(t){Wl(t)?this.dispatch(t.message,!1):Kl(t)?this.emit(t.name,t.data):Xl(t)}dispatch(t){this.#e.dispatch(t)}emit(t,n){this.#e.emit(t,n)}},Mm=({init:e,update:t,view:n},s,r)=>{if(!ks())return ct(sp());let o=s instanceof HTMLElement?s:globalThis.document.querySelector(s);return o?tt(new op(o,e(r),t,n)):ct(Rm(s))};var ip=class extends m{constructor(t){super(),this.selector=t}},Rm=e=>new ip(e);var ap=class extends m{},Bm=new ap,sp=()=>Bm;function Om(e,t,n){return new Jl(C,e,t,n,hm)}function jm(e,t,n){return th(!ks(),new y(Bm),()=>Mm(e,t,n))}function lp(e,t){return _h(e,fs(t,n=>new ho(!1,!1,n)),V,nu,nu,0,0)}function Ur(e){return lp("click",Rr(e))}function Dm(e){return lp("input",_l(h("target",h("value",w)),fr,t=>Rr(e(t))))}function Nm(e){return lp("change",_l(h("target",h("value",w)),fr,t=>Rr(e(t))))}var nc=Math.sin,rc=Math.cos;var ha=class extends m{constructor(t){super(),this.name=t}};var $n=class extends m{constructor(t){super(),this.message=t}};var sc=class extends m{},Um=new sc;var oc=class extends m{},Vm=new oc;var ic=class extends m{},Gm=new ic;var ac=class extends m{},Hm=new ac;var Vr=class extends m{constructor(t,n){super(),this.name=t,this.num_args=n}};var X=class extends m{constructor(t){super(),this.message=t}};var cp=class extends m{constructor(t){super(),this.expr=t}};var lc=class extends m{constructor(t,n){super(),this.error=t,this.line=n}};function zm(e,t){return e instanceof lc?e:new lc(e,t)}function fp(e){return" on line "+nt(e)}function up(e){if(e instanceof ha)return"unknown variable: "+e.name;if(e instanceof $n)return"type error: "+e.message;if(e instanceof sc)return"no case pattern matched the value";if(e instanceof oc)return"recursion too deep (missing base case?)";if(e instanceof ic)return"too many steps (drawing too complex, or infinite loop?)";if(e instanceof ac)return"too many paths in the drawing";if(e instanceof Vr){let t=e.name,n=e.num_args;return"no function "+t+" that takes "+nt(n)+" argument(s)"}else{if(e instanceof X)return"bad drawing: "+e.message;if(e instanceof cp)return"not yet implemented: "+e.expr;{let t=e.error,n=e.line;return up(t)+fp(n)}}}var Wm={},$p=0;function xr(e){if($p+=Math.max(e,0),$p>25e4)throw Wm}function Km(e,t,n){$p=0;try{return e()}catch(s){if(s===Wm)return t;if(s instanceof RangeError||s?.name==="InternalError")return n;throw s}}var Xm=1e5;function Jm(e){return Km(e,new y(Gm),new y(Vm))}function hp(){return new Map}function cc(e,t){return e.has(t)?new $(e.get(t)):new y(void 0)}function ma(e,t,n){e.set(t,n)}var Ht=class extends m{constructor(t){super(),this[0]=t}};var Y=class extends m{constructor(t){super(),this[0]=t}};var Je=class extends m{constructor(t){super(),this[0]=t}};var Xt=class extends m{constructor(t,n){super(),this.tag=t,this.fields=n}};var Gn=class extends m{constructor(t){super(),this[0]=t}};var bs=class extends m{constructor(t,n){super(),this.bindings=t,this.parent=n}};var fc=class extends m{constructor(t){super(),this.bindings=t}};var bo=class extends m{constructor(t,n,s){super(),this.name=t,this.num_args=n,this.run=s}};var yo=class extends m{constructor(t,n,s,r){super(),this.name=t,this.params=n,this.body=s,this.env=r}};var vn=class extends m{constructor(t){super(),this[0]=t}};var ys=class extends m{constructor(t){super(),this[0]=t}};var xa=class extends m{constructor(t){super(),this[0]=t}};var Po=class extends m{constructor(t,n){super(),this.elems=t,this.rest=n}};var _r=class extends m{constructor(t,n){super(),this.fn_expr=t,this.operands=n}};var Ps=class extends m{constructor(t,n){super(),this.params=t,this.body=n}};var To=class extends m{constructor(t,n){super(),this.subject=t,this.arms=n}};var _a=class extends m{constructor(t,n,s){super(),this.name=t,this.value=n,this.body=s}};var vo=class extends m{constructor(t,n){super(),this.record=t,this.field=n}};var Ts=class extends m{constructor(t,n){super(),this.line=t,this.expr=n}};var vs=class extends m{constructor(t){super(),this[0]=t}};var wa=class extends m{constructor(t){super(),this[0]=t}};var uc=class extends m{},Zm=new uc;var Es=class extends m{constructor(t){super(),this[0]=t}};var ga=class extends m{constructor(t,n){super(),this.elems=t,this.rest=n}};var Eo=ns([["Point",h("x",h("y",w))],["Line",h("start",h("end",w))],["Path",h("shape",h("start",h("end",h("thickness",w))))],["Circle",h("center",h("radius",w))],["Arc",h("center",h("radius",h("from",h("to",w))))],["Curve",h("start",h("control",h("end",w)))],["Polygon",h("points",w)],["Leaf",h("base",h("tip",h("width",w)))],["Colored",h("shape",h("color",w))],["Glow",h("shape",h("blur",w))],["Filled",h("shape",h("color",w))],["Faded",h("shape",h("opacity",w))],["Sway",h("shape",h("pivot",h("degrees",h("period",w))))],["Bounce",h("shape",h("height",h("period",w)))],["Rgb",h("r",h("g",h("b",w)))],["Hsl",h("hue",h("saturation",h("lightness",w)))]]);function Qm(e){return e instanceof Je?"a list":e instanceof Xt?"a "+e.tag+" record":e instanceof Gn?"the function "+e[0].name:Ad(e)}function wg(e,t){if(e instanceof Xt){let n=e.tag,s=e.fields,r=ea(Kt(Eo,n),w),o=Kt(fl(r,s),t);return o instanceof $?o:new y(new $n("a "+n+" has no ."+t))}else return new y(new $n("."+t+" expects a record, got "+Qm(e)))}function Ym(e,t){if(e instanceof bs){let n=e.bindings,s=e.parent;return new bs(hd(n,Ar(t)),s)}else return e}function e1(e,t,n){if(e instanceof _)if(t instanceof g){let s=t[0];return new $(h([s,new Je(n)],w))}else return n instanceof _?new $(w):new y(void 0);else{if(n instanceof _)return new y(void 0);{let s=e.head,r=e.tail,o=n.head,i=n.tail,f=t1(s,o),l=e1(r,t,i);if(f instanceof $&&l instanceof $){let u=f[0],a=l[0];return new $(st(u,a))}else return new y(void 0)}}}function t1(e,t){if(e instanceof vs)if(t instanceof Ht){let n=e[0],s=t[0];return n===s?new $(w):new y(void 0)}else return new y(void 0);else if(e instanceof wa)if(t instanceof Y){let n=e[0],s=t[0];return n===s?new $(w):new y(void 0)}else return new y(void 0);else{if(e instanceof uc)return new $(w);if(e instanceof Es){let n=e[0];return new $(h([n,t],w))}else if(t instanceof Je){let n=e.elems,s=e.rest,r=t[0];return e1(n,s,r)}else return new y(void 0)}}function gg(e,t){for(;;){let n=e,s=t;if(s instanceof _)return new y(void 0);{let r=s.tail,o=s.head[0],i=s.head[1],f=t1(o,n);if(f instanceof $){let l=f[0];return new $([l,i])}else e=n,t=r}}}function kg(e,t,n){return new $n(e+" takes "+nt(t)+" argument(s) but was given "+nt(n))}function bg(e){if(e instanceof bo)return e.num_args;{let t=e.params;return rt(t)}}function yg(e,t){for(;;){let n=e,s=t;if(n instanceof bs){let r=n.bindings,o=n.parent,i=os(r,s);if(i instanceof $)return i;e=o,t=s}else{let r=n.bindings,o=cc(r,s);return o instanceof $?o:new y(new ha(s))}}}function pc(e,t){if(xr(1),e instanceof Gn){let n=e[0],s=bg(n);if(rt(t)===s)if(n instanceof bo){let o=n.run;return o(t)}else{let o=n.params,i=n.body,f=n.env;return Vn(i,new bs(Ar(fl(o,t)),f))}else return new y(kg(n.name,s,rt(t)))}else return new y(new $n("calling a value that is not a function"))}function Pg(e,t,n){let s=kt(e,r=>Vn(r,n));if(s instanceof $)if(t instanceof g){let r=s[0],o=t[0],i=Vn(o,n);if(i instanceof $){let f=i[0];if(f instanceof Je){let l=f[0];return new $(new Je(st(r,l)))}else{let l=f;return new y(new $n("`..` expects a list, got "+Qm(l)))}}else return i}else{let r=s[0];return new $(new Je(r))}else return s}function Vn(e,t){for(;;){let n=e,s=t;if(xr(1),n instanceof vn){let r=n[0];return yg(s,r)}else if(n instanceof ys){let r=n[0];return new $(new Ht(r))}else if(n instanceof xa){let r=n[0];return new $(new Y(r))}else if(n instanceof Po){let r=n.elems,o=n.rest;return Pg(r,o,s)}else if(n instanceof _r){let r=n.fn_expr,o=n.operands,i=Vn(r,s);if(i instanceof $){let f=i[0],l=kt(o,u=>Vn(u,s));if(l instanceof $){let u=l[0];return pc(f,u)}else return l}else return i}else if(n instanceof Ps){let r=n.params,o=n.body;return new $(new Gn(new yo("lambda",r,o,s)))}else if(n instanceof To){let r=n.subject,o=n.arms,i=Vn(r,s);if(i instanceof $){let f=i[0],l=gg(f,o);if(l instanceof $){let u=l[0][0];e=l[0][1],t=Ym(s,u)}else return new y(Um)}else return i}else if(n instanceof _a){let r=n.name,o=n.value,i=n.body,f=Vn(o,s);if(f instanceof $){let l=f[0];e=i,t=Ym(s,h([r,l],w))}else return f}else if(n instanceof vo){let r=n.record,o=n.field,i=Vn(r,s);if(i instanceof $){let f=i[0];return wg(f,o)}else return i}else{let r=n.line,o=n.expr;return uo(Vn(o,s),i=>zm(i,r))}}}function n1(e,t,n){return Jm(()=>{let s=cc(n,e);if(s instanceof $){let r=s[0];if(r instanceof Gn){let o=r[0];if(o instanceof yo){let i=o.params,f=o.body,l=o.env;return rt(i)===rt(t)?Vn(f,new bs(Ar(fl(i,t)),l)):new y(new Vr(e,rt(t)))}else return new y(new Vr(e,rt(t)))}else return new y(new Vr(e,rt(t)))}else return new y(new Vr(e,rt(t)))})}var Tg="src\\builtins.gleam",vg=3.141592653589793;function N(e,t){return new y(new $n(e+" expects "+t))}function It(e,t,n){return[e,new Gn(new bo(e,t,n))]}function Eg(){return h(It("list.map",2,e=>{if(e instanceof _)return N("list.map","a list and a function");{let t=e.tail;if(t instanceof _)return N("list.map","a list and a function");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let s=t.head,r=n[0];return W(kt(r,o=>pc(s,h(o,w))),o=>new Je(o))}else return N("list.map","a list and a function")}else return N("list.map","a list and a function")}}),h(It("list.filter",2,e=>{if(e instanceof _)return N("list.filter","a list and a function");{let t=e.tail;if(t instanceof _)return N("list.filter","a list and a function");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let s=t.head,r=n[0];return W(cl(r,w,(o,i)=>{let f=pc(s,h(i,w));if(f instanceof $){let l=f[0];return l instanceof Ht?l[0]?new $(h(i,o)):new $(o):new y(new $n("list.filter's function must return True or False"))}else return f}),o=>new Je(E(o)))}else return N("list.filter","a list and a function")}else return N("list.filter","a list and a function")}}),h(It("list.append",2,e=>{if(e instanceof _)return N("list.append","two lists");{let t=e.tail;if(t instanceof _)return N("list.append","two lists");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let s=t.head;if(s instanceof Je){let r=n[0],o=s[0];return xr(rt(r)),new $(new Je(st(r,o)))}else return N("list.append","two lists")}else return N("list.append","two lists")}else return N("list.append","two lists")}}),h(It("list.length",1,e=>{if(e instanceof _)return N("list.length","a list");if(e.tail instanceof _){let t=e.head;if(t instanceof Je){let n=t[0],s=rt(n);return xr(s),new $(new Y(s))}else return N("list.length","a list")}else return N("list.length","a list")}),h(It("list.flatten",1,e=>{if(e instanceof _)return N("list.flatten","a list of lists");if(e.tail instanceof _){let t=e.head;if(t instanceof Je){let n=t[0];return T(kt(n,s=>{if(s instanceof Je){let r=s[0];return new $(r)}else return N("list.flatten","a list")}),s=>{let r=bt(s,0,(o,i)=>o+rt(i));return xr(rt(s)+r),new $(new Je(fo(s)))})}else return N("list.flatten","a list of lists")}else return N("list.flatten","a list of lists")}),w)))))}function Sg(){return Ze(Eo,e=>{let t=e[0],n=e[1];return It(t,rt(n),s=>new $(new Xt(t,s)))})}function $c(e,t){return It(e,2,n=>{if(n instanceof _)return N(e,"two ints");{let s=n.tail;if(s instanceof _)return N(e,"two ints");if(s.tail instanceof _){let r=n.head;if(r instanceof Y){let o=s.head;if(o instanceof Y){let i=r[0],f=o[0];return new $(new Ht(t(i,f)))}else return N(e,"two ints")}else return N(e,"two ints")}else return N(e,"two ints")}})}function ka(e,t){return It(e,2,n=>{if(n instanceof _)return N(e,"two ints");{let s=n.tail;if(s instanceof _)return N(e,"two ints");if(s.tail instanceof _){let r=n.head;if(r instanceof Y){let o=s.head;if(o instanceof Y){let i=r[0],f=o[0];return new $(new Y(t(i,f)))}else return N(e,"two ints")}else return N(e,"two ints")}else return N(e,"two ints")}})}function r1(e,t){return It(e,2,n=>{if(n instanceof _)return N(e,"two Bools");{let s=n.tail;if(s instanceof _)return N(e,"two Bools");if(s.tail instanceof _){let r=n.head;if(r instanceof Ht){let o=s.head;if(o instanceof Ht){let i=r[0],f=o[0];return new $(new Ht(t(i,f)))}else return N(e,"two Bools")}else return N(e,"two Bools")}else return N(e,"two Bools")}})}function s1(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s instanceof _?new $(!0):new $(!1);if(s instanceof _)return new $(!1);{let r=n.head,o=n.tail,i=s.head,f=s.tail,l=_p(r,i);if(l instanceof $&&l[0])e=o,t=f;else return l}}}function _p(e,t){if(xr(1),e instanceof Ht&&t instanceof Ht){let n=e[0],s=t[0];return new $(n===s)}else if(e instanceof Y&&t instanceof Y){let n=e[0],s=t[0];return new $(n===s)}else if(e instanceof Je&&t instanceof Je){let n=e[0],s=t[0];return s1(n,s)}else if(e instanceof Xt&&t instanceof Xt){let n=e.tag,s=e.fields,r=t.tag,o=t.fields;return n===r?s1(s,o):new $(!1)}else return new $(!1)}function Cg(e){if(e instanceof _)return N("!=","two values");{let t=e.tail;if(t instanceof _)return N("!=","two values");if(t.tail instanceof _){let n=e.head,s=t.head;return W(_p(n,s),r=>new Ht(!r))}else return N("!=","two values")}}function Ig(e){if(e instanceof _)return N("==","two values");{let t=e.tail;if(t instanceof _)return N("==","two values");if(t.tail instanceof _){let n=e.head,s=t.head;return W(_p(n,s),r=>new Ht(r))}else return N("==","two values")}}function Fg(e){if(e instanceof _)return N("sqrt","one non-negative int");if(e.tail instanceof _){let t=e.head;if(t instanceof Y){let n=t[0];if(n>=0){let s=Ji(n),r;if(s instanceof $)r=s[0];else throw Nt("let_assert",Tg,"builtins",267,"builtin_sqrt","Pattern match failed, no pattern matched the value.",{value:s,start:9573,end:9629,pattern_start:9584,pattern_end:9592});let o=wl(r),i;o*o>n?i=o-1:i=o;let l=i,u;(l+1)*(l+1)<=n?u=l+1:u=l;let c=u;return new $(new Y(c))}else return N("sqrt","one non-negative int")}else return N("sqrt","one non-negative int")}else return N("sqrt","one non-negative int")}function o1(e,t){return n=>{if(n instanceof _)return N(e,"two ints (degrees and scale)");{let s=n.tail;if(s instanceof _)return N(e,"two ints (degrees and scale)");if(s.tail instanceof _){let r=n.head;if(r instanceof Y){let o=s.head;if(o instanceof Y){let i=r[0],f=o[0],l=i%360*vg/180;return new $(new Y(Mr(t(l)*f)))}else return N(e,"two ints (degrees and scale)")}else return N(e,"two ints (degrees and scale)")}else return N(e,"two ints (degrees and scale)")}}}function Lg(e){if(e instanceof _)return N("abs","one int");if(e.tail instanceof _){let t=e.head;if(t instanceof Y){let n=t[0];return new $(new Y(il(n)))}else return N("abs","one int")}else return N("abs","one int")}function Ag(e){if(e instanceof _)return N("random","two ints");{let t=e.tail;if(t instanceof _)return N("random","two ints");if(t.tail instanceof _){let n=e.head;if(n instanceof Y){let s=t.head;if(s instanceof Y){let r=n[0],o=s[0];return o<=r?new $(new Y(r)):new $(new Y(r+wl(lo()*(o-r))))}else return N("random","two ints")}else return N("random","two ints")}else return N("random","two ints")}}function Mg(){return Ar(h(It("random",2,Ag),h(It("abs",1,Lg),h(It("sin",2,o1("sin",nc)),h(It("cos",2,o1("cos",rc)),h(It("sqrt",1,Fg),h(It("==",2,Ig),h(It("!=",2,Cg),h(r1("&&",(e,t)=>e&&t),h(r1("||",(e,t)=>e||t),h(ka("+",(e,t)=>e+t),h(ka("-",(e,t)=>e-t),h(ka("*",(e,t)=>e*t),h(ka("/",(e,t)=>nl(e,t)),h(ka("%",(e,t)=>no(e,t)),h($c("<",(e,t)=>e<t),h($c(">",(e,t)=>e>t),h($c("<=",(e,t)=>e<=t),h($c(">=",(e,t)=>e>=t),st(Sg(),Eg()))))))))))))))))))))}function i1(){let e=hp(),t=(n,s)=>ma(e,n,s);return md(Mg(),t),e}function a1(e){try{let t=globalThis.localStorage.getItem(e);return t===null?ct(void 0):tt(t)}catch{return ct(void 0)}}function l1(e,t){try{globalThis.localStorage.setItem(e,t)}catch(n){console.error(`Couldn't save: ${n.message}`)}}function wp(){let e=window.prompt("Name for the new drawing:");return e===null?"":e}var dc=ns([["fan",`fn draw(shape_slider: Int) -> List(Path) {
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
// He plunges with his bare back to us: curly head thrown back, one arm
// flung up beside a leg kicked high behind him, the other arm hanging
// with fingers spread, one leg flung out, and huge wings rising in a U.
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

// The sun is high to the upper right: this way is toward its light.
fn light_x() -> Int {
  50
}

fn light_y() -> Int {
  0 - 87
}

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
  Faded(Filled(s, Rgb(255, 209, 144)), 75)
}

fn hatching(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(50, 35, 42)), 42)
}

fn line(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(64, 45, 53)), 80)
}

fn highlight(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(255, 201, 136)), 76)
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

fn shifted(p: Point, by: Point) -> Point {
  Point(p.x + by.x, p.y + by.y)
}

// How far to step from the bone a to b to move s units sideways, toward the
// side turned away from the light. A negative s steps toward the light.
fn away(a: Point, b: Point, s: Int) -> Point {
  let dx = b.x - a.x
  let dy = b.y - a.y
  let len = sqrt(dx * dx + dy * dy) + 1
  case dx * light_y() - dy * light_x() > 0 {
    True -> Point(dy * s / len, 0 - dx * s / len)
    False -> Point(0 - dy * s / len, dx * s / len)
  }
}

// The whole figure heaves and rolls as one, while each limb flails on its
// own beat around the joint where it meets the body.
fn falling(s: Shape) -> Shape {
  Bounce(Sway(s, Point(60, 150), 4, 46), 19, 27)
}

fn flail(s: Shape, joint: Point, degrees: Int, period: Int) -> Shape {
  Bounce(Sway(s, joint, degrees, period), 19, 27)
}

fn raised_arm(s: Shape) -> Shape {
  flail(s, Point(19, 77), 9, 22)
}

fn hanging_arm(s: Shape) -> Shape {
  flail(s, Point(202, 173), 11, 26)
}

fn sprawled_leg(s: Shape) -> Shape {
  flail(s, Point(-70, 190), 6, 31)
}

fn raised_leg(s: Shape) -> Shape {
  flail(s, Point(24, 182), 4, 35)
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
// Each wing grows from a shoulder blade, sweeps out past the body, and
// climbs to a tip high above. The right wing is ragged: missing feathers.

fn shoulder(side: Int) -> Point {
  case side == -1 {
    True -> Point(45, 125)
    False -> Point(150, 150)
  }
}

fn elbow(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-176 - spread, 46)
    False -> Point(290 + spread, 80)
  }
}

fn wingtip(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-329 - spread, -379)
    False -> Point(340 + spread, -200)
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
            True -> 194 + i * 62 / 23
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
        True -> 201 + i * 52 / 24
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
        True -> 205 + i * 4
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

// \u2500\u2500 The figure: a bare, muscular back, seen as he plunges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Every part is a rounded stroke along its bone plus a swelling muscle.
// All the outlines go down first and the body tone over them, so the parts
// melt into one silhouette with a single outline around the outside. The
// leg kicked up behind him is drawn first, so his back hides its hip.

fn figure() -> List(Path) {
  list.flatten([
    far_leg(halo_part),
    far_leg(contour),
    far_leg(flesh),
    far_leg(shading),
    near(halo_part),
    near(contour),
    near(flesh),
    near(shading),
    back_lines(),
    curls(0),
  ])
}

// The leg kicked up behind him: the thigh rises from behind his back, the
// knee bends, and the shin climbs to a foot high above his head.
fn far_leg(part) -> List(Path) {
  list.flatten([
    part(Point(24, 182), Point(60, -110), 92, 50, 5, 30, raised_leg),
    part(Point(36, 60), Point(60, -110), 70, 46, 10, 31, raised_leg),
    part(Point(60, -110), Point(-30, -250), 62, 28, 7, 33, raised_leg),
    part(Point(-20, -244), Point(-86, -266), 40, 20, 10, 36, raised_leg),
  ])
}

// Back, hips and head; the leg flung out to the left; the arm flung up and
// out;
// and the arm hanging down with its fingers spread.
fn near(part) -> List(Path) {
  list.flatten([
    part(Point(19, 77), Point(202, 173), 0, 62, 10, 32, falling),
    part(Point(137, 84), Point(27, 177), 190, 50, 10, 32, falling),
    part(Point(70, 150), Point(-10, 205), 0, 125, 10, 34, falling),
    part(Point(-70, 190), Point(25, 232), 0, 110, 10, 35, falling),
    part(Point(130, 92), Point(150, 58), 0, 56, 10, 38, falling),
    part(Point(154, 47), Point(166, 27), 0, 84, 10, 40, falling),
    part(Point(-70, 190), Point(-274, 134), 92, 50, 10, 36, sprawled_leg),
    part(Point(-274, 134), Point(-350, 267), 62, 30, 7, 39, sprawled_leg),
    part(Point(-350, 267), Point(-396, 298), 34, 16, 10, 42, sprawled_leg),
    part(Point(19, 77), Point(-80, 10), 60, 34, 10, 38, raised_arm),
    part(Point(-80, 10), Point(-150, -70), 48, 26, 8, 41, raised_arm),
    part(Point(-150, -70), Point(-176, -108), 32, 16, 10, 44, raised_arm),
    part(Point(202, 173), Point(182, 289), 60, 34, 10, 40, hanging_arm),
    part(Point(182, 289), Point(233, 394), 48, 26, 8, 43, hanging_arm),
    part(Point(233, 394), Point(258, 428), 36, 22, 10, 46, hanging_arm),
    part(Point(258, 428), Point(298, 444), 0, 10, 10, 48, hanging_arm),
    part(Point(258, 428), Point(289, 463), 0, 10, 10, 49, hanging_arm),
    part(Point(256, 430), Point(268, 474), 0, 10, 10, 50, hanging_arm),
    part(Point(250, 428), Point(244, 470), 0, 10, 10, 51, hanging_arm),
    part(Point(238, 404), Point(210, 424), 0, 12, 10, 52, hanging_arm),
  ])
}

// A muscle: a leaf shape w wide, from a over the first reach tenths of the
// way to b.
fn muscle(a: Point, b: Point, w: Int, reach: Int) -> Shape {
  Leaf(a, along(a, b, reach, 10), w / 2)
}

// A soft halo of light (or smudge of shadow) around each part.
fn halo_part(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  let bone = Path(move(halo(Line(a, b))), t, t + 6, v + 10)
  case w == 0 {
    True -> [bone]
    False -> [bone, Path(move(halo(muscle(a, b, w, reach))), t, t + 6, 10)]
  }
}

// The outline of one part: a stroke a little wider than the bone, and a line
// around the muscle.
fn contour(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  let bone = Path(move(ink(Line(a, b))), t, t + 6, v + 8)
  case w == 0 {
    True -> [bone]
    False -> [bone, Path(move(ink(muscle(a, b, w, reach))), t, t + 6, 8)]
  }
}

// The body tone of one part, laid over every outline so that only the outer
// edge of the outline shows.
fn flesh(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  let bone = Path(move(skin(Line(a, b))), t, t + 6, v)
  case w == 0 {
    True -> [bone]
    False -> [bone, Path(move(skin(muscle(a, b, w, reach))), t, t + 6, 0)]
  }
}

// Shadow on the side of each muscle turned from the light, a sliver of
// light on the side toward it, and hatch strokes in the shadow.
fn shading(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  case w == 0 {
    True -> []
    False -> {
      let tip = along(a, b, reach, 10)
      let dark = away(a, b, w / 5)
      let lit = away(a, b, 0 - w / 4)
      list.append(
        [
          Path(move(shade(Leaf(shifted(a, dark), shifted(tip, dark), w * 11 / 40))), t + 2, t + 7, 0),
          Path(move(shine(Leaf(shifted(a, lit), shifted(tip, lit), w / 10))), t + 3, t + 8, 0),
        ],
        hatch(1, a, tip, w, t + 4, move),
      )
    }
  }
}

// Four short strokes across the shadow, slanted along the part.
fn hatch(k: Int, a: Point, b: Point, w: Int, t: Int, move) -> List(Path) {
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
        Path(move(hatching(stroke)), t + k, t + k + 2, 2),
        ..hatch(k + 1, a, b, w, t, move)
      ]
    }
  }
}

// The spine, the shoulder blades, the cleft below the small of the back,
// and light running along the top of the shoulders.
fn back_lines() -> List(Path) {
  [
    Path(falling(line(Curve(Point(122, 100), Point(62, 140), Point(-8, 208)))), 44, 52, 3),
    Path(falling(line(Curve(Point(28, 108), Point(48, 152), Point(88, 146)))), 46, 52, 2),
    Path(falling(line(Curve(Point(132, 180), Point(170, 196), Point(190, 160)))), 46, 52, 2),
    Path(falling(line(Curve(Point(-8, 208), Point(-14, 232), Point(-2, 262)))), 47, 53, 2),
    Path(falling(highlight(Curve(Point(60, 95), Point(130, 105), Point(190, 140)))), 48, 56, 3),
  ]
}

// Thick curls over the crown and back of his head. His face is turned away,
// down and to the right, so the cheek and the nape of the neck stay bare.
fn curls(i: Int) -> List(Path) {
  case i == 22 {
    True -> []
    False -> {
      let a = case i < 17 {
        True -> 190 + i * 190 / 16
        False -> 225 + { i - 17 } * 35
      }
      let radius = case i < 17 {
        True -> 30 + i % 4 * 3
        False -> 14
      }
      let spot = Point(160 + cos(a, radius), 37 + sin(a, radius))
      let size = 9 + i % 4 * 3
      [
        Path(falling(curl_base(Circle(Point(spot.x - 2, spot.y - 2), size))), 46 + i, 51 + i, 0),
        Path(falling(curl_light(Arc(spot, size, 165, 345))), 48 + i, 54 + i, 2),
        Path(falling(curl_dark(Arc(spot, size + 2, 12, 170))), 48 + i, 54 + i, 3),
        ..curls(i + 1)
      ]
    }
  }
}

// \u2500\u2500 Torn feathers tumble away above him \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn loose_feathers(i: Int) -> List(Path) {
  case i == 33 {
    True -> []
    False -> {
      let x = { i * 237 + i * i * 31 } % 910 - 455
      let y = { i * 161 + i * i * 19 } % 790 - 410
      let rest = loose_feathers(i + 1)
      case y > 0 - 70 && x > 0 - 420 {
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
// Deep black strokes on pale paper. He plunges with his bare back to us:
// curly head thrown back, one arm flung up beside a leg kicked high
// behind him, the other arm hanging with fingers spread, one leg flung out,
// and huge ragged wings rising in a U. Charcoal drips run down beneath him.
// Shape slider: 0 = tight wings, 100 = wings thrown wide open.
// For ongoing motion, switch on Loop in the animator.

fn draw(shape_slider: Int) -> List(Path) {
  let spread = shape_slider * 3 / 5
  list.flatten([
    paper(0),
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

// The light falls from the upper left: this way is toward it.
fn light_x() -> Int {
  0 - 50
}

fn light_y() -> Int {
  0 - 87
}

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
  Faded(Filled(s, Rgb(252, 250, 244)), 75)
}

fn hatching(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(12, 11, 10)), 62)
}

fn line(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(12, 11, 10)), 78)
}

fn highlight(s: Shape) -> Shape {
  Faded(Colored(s, Rgb(252, 250, 244)), 72)
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

fn shifted(p: Point, by: Point) -> Point {
  Point(p.x + by.x, p.y + by.y)
}

// How far to step from the bone a to b to move s units sideways, toward the
// side turned away from the light. A negative s steps toward the light.
fn away(a: Point, b: Point, s: Int) -> Point {
  let dx = b.x - a.x
  let dy = b.y - a.y
  let len = sqrt(dx * dx + dy * dy) + 1
  case dx * light_y() - dy * light_x() > 0 {
    True -> Point(dy * s / len, 0 - dx * s / len)
    False -> Point(0 - dy * s / len, dx * s / len)
  }
}

// The whole figure heaves and rolls as one, while each limb flails on its
// own beat around the joint where it meets the body.
fn falling(s: Shape) -> Shape {
  Bounce(Sway(s, Point(60, 150), 4, 46), 19, 27)
}

fn flail(s: Shape, joint: Point, degrees: Int, period: Int) -> Shape {
  Bounce(Sway(s, joint, degrees, period), 19, 27)
}

fn raised_arm(s: Shape) -> Shape {
  flail(s, Point(19, 77), 9, 22)
}

fn hanging_arm(s: Shape) -> Shape {
  flail(s, Point(202, 173), 11, 26)
}

fn sprawled_leg(s: Shape) -> Shape {
  flail(s, Point(-70, 190), 6, 31)
}

fn raised_leg(s: Shape) -> Shape {
  flail(s, Point(24, 182), 4, 35)
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
// Each wing grows from a shoulder blade, sweeps out past the body, and
// climbs to a tip high above. The right wing is ragged: missing feathers.

fn shoulder(side: Int) -> Point {
  case side == -1 {
    True -> Point(45, 125)
    False -> Point(150, 150)
  }
}

fn elbow(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-176 - spread, 46)
    False -> Point(290 + spread, 80)
  }
}

fn wingtip(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-329 - spread, -379)
    False -> Point(340 + spread, -200)
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
            True -> 194 + i * 62 / 23
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
        True -> 201 + i * 52 / 24
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
        True -> 205 + i * 4
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

// \u2500\u2500 The figure: a bare, muscular back, seen as he plunges \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Every part is a rounded stroke along its bone plus a swelling muscle.
// All the outlines go down first and the body tone over them, so the parts
// melt into one silhouette with a single outline around the outside. The
// leg kicked up behind him is drawn first, so his back hides its hip.

fn figure() -> List(Path) {
  list.flatten([
    far_leg(halo_part),
    far_leg(contour),
    far_leg(flesh),
    far_leg(shading),
    near(halo_part),
    near(contour),
    near(flesh),
    near(shading),
    back_lines(),
    curls(0),
  ])
}

// The leg kicked up behind him: the thigh rises from behind his back, the
// knee bends, and the shin climbs to a foot high above his head.
fn far_leg(part) -> List(Path) {
  list.flatten([
    part(Point(24, 182), Point(60, -110), 92, 50, 5, 30, raised_leg),
    part(Point(36, 60), Point(60, -110), 70, 46, 10, 31, raised_leg),
    part(Point(60, -110), Point(-30, -250), 62, 28, 7, 33, raised_leg),
    part(Point(-20, -244), Point(-86, -266), 40, 20, 10, 36, raised_leg),
  ])
}

// Back, hips and head; the leg flung out to the left; the arm flung up and
// out;
// and the arm hanging down with its fingers spread.
fn near(part) -> List(Path) {
  list.flatten([
    part(Point(19, 77), Point(202, 173), 0, 62, 10, 32, falling),
    part(Point(137, 84), Point(27, 177), 190, 50, 10, 32, falling),
    part(Point(70, 150), Point(-10, 205), 0, 125, 10, 34, falling),
    part(Point(-70, 190), Point(25, 232), 0, 110, 10, 35, falling),
    part(Point(130, 92), Point(150, 58), 0, 56, 10, 38, falling),
    part(Point(154, 47), Point(166, 27), 0, 84, 10, 40, falling),
    part(Point(-70, 190), Point(-274, 134), 92, 50, 10, 36, sprawled_leg),
    part(Point(-274, 134), Point(-350, 267), 62, 30, 7, 39, sprawled_leg),
    part(Point(-350, 267), Point(-396, 298), 34, 16, 10, 42, sprawled_leg),
    part(Point(19, 77), Point(-80, 10), 60, 34, 10, 38, raised_arm),
    part(Point(-80, 10), Point(-150, -70), 48, 26, 8, 41, raised_arm),
    part(Point(-150, -70), Point(-176, -108), 32, 16, 10, 44, raised_arm),
    part(Point(202, 173), Point(182, 289), 60, 34, 10, 40, hanging_arm),
    part(Point(182, 289), Point(233, 394), 48, 26, 8, 43, hanging_arm),
    part(Point(233, 394), Point(258, 428), 36, 22, 10, 46, hanging_arm),
    part(Point(258, 428), Point(298, 444), 0, 10, 10, 48, hanging_arm),
    part(Point(258, 428), Point(289, 463), 0, 10, 10, 49, hanging_arm),
    part(Point(256, 430), Point(268, 474), 0, 10, 10, 50, hanging_arm),
    part(Point(250, 428), Point(244, 470), 0, 10, 10, 51, hanging_arm),
    part(Point(238, 404), Point(210, 424), 0, 12, 10, 52, hanging_arm),
  ])
}

// A muscle: a leaf shape w wide, from a over the first reach tenths of the
// way to b.
fn muscle(a: Point, b: Point, w: Int, reach: Int) -> Shape {
  Leaf(a, along(a, b, reach, 10), w / 2)
}

// A soft halo of light (or smudge of shadow) around each part.
fn halo_part(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  let bone = Path(move(halo(Line(a, b))), t, t + 6, v + 10)
  case w == 0 {
    True -> [bone]
    False -> [bone, Path(move(halo(muscle(a, b, w, reach))), t, t + 6, 10)]
  }
}

// The outline of one part: a stroke a little wider than the bone, and a line
// around the muscle.
fn contour(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  let bone = Path(move(ink(Line(a, b))), t, t + 6, v + 8)
  case w == 0 {
    True -> [bone]
    False -> [bone, Path(move(ink(muscle(a, b, w, reach))), t, t + 6, 8)]
  }
}

// The body tone of one part, laid over every outline so that only the outer
// edge of the outline shows.
fn flesh(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  let bone = Path(move(skin(Line(a, b))), t, t + 6, v)
  case w == 0 {
    True -> [bone]
    False -> [bone, Path(move(skin(muscle(a, b, w, reach))), t, t + 6, 0)]
  }
}

// Shadow on the side of each muscle turned from the light, a sliver of
// light on the side toward it, and hatch strokes in the shadow.
fn shading(a: Point, b: Point, w: Int, v: Int, reach: Int, t: Int, move) -> List(Path) {
  case w == 0 {
    True -> []
    False -> {
      let tip = along(a, b, reach, 10)
      let dark = away(a, b, w / 5)
      let lit = away(a, b, 0 - w / 4)
      list.append(
        [
          Path(move(shade(Leaf(shifted(a, dark), shifted(tip, dark), w * 11 / 40))), t + 2, t + 7, 0),
          Path(move(shine(Leaf(shifted(a, lit), shifted(tip, lit), w / 10))), t + 3, t + 8, 0),
        ],
        hatch(1, a, tip, w, t + 4, move),
      )
    }
  }
}

// Four short strokes across the shadow, slanted along the part.
fn hatch(k: Int, a: Point, b: Point, w: Int, t: Int, move) -> List(Path) {
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
        Path(move(hatching(stroke)), t + k, t + k + 2, 2),
        ..hatch(k + 1, a, b, w, t, move)
      ]
    }
  }
}

// The spine, the shoulder blades, the cleft below the small of the back,
// and light running along the top of the shoulders.
fn back_lines() -> List(Path) {
  [
    Path(falling(line(Curve(Point(122, 100), Point(62, 140), Point(-8, 208)))), 44, 52, 3),
    Path(falling(line(Curve(Point(28, 108), Point(48, 152), Point(88, 146)))), 46, 52, 2),
    Path(falling(line(Curve(Point(132, 180), Point(170, 196), Point(190, 160)))), 46, 52, 2),
    Path(falling(line(Curve(Point(-8, 208), Point(-14, 232), Point(-2, 262)))), 47, 53, 2),
    Path(falling(highlight(Curve(Point(60, 95), Point(130, 105), Point(190, 140)))), 48, 56, 3),
  ]
}

// Thick curls over the crown and back of his head. His face is turned away,
// down and to the right, so the cheek and the nape of the neck stay bare.
fn curls(i: Int) -> List(Path) {
  case i == 22 {
    True -> []
    False -> {
      let a = case i < 17 {
        True -> 190 + i * 190 / 16
        False -> 225 + { i - 17 } * 35
      }
      let radius = case i < 17 {
        True -> 30 + i % 4 * 3
        False -> 14
      }
      let spot = Point(160 + cos(a, radius), 37 + sin(a, radius))
      let size = 9 + i % 4 * 3
      [
        Path(falling(curl_base(Circle(Point(spot.x - 2, spot.y - 2), size))), 46 + i, 51 + i, 0),
        Path(falling(curl_light(Arc(spot, size, 165, 345))), 48 + i, 54 + i, 2),
        Path(falling(curl_dark(Arc(spot, size + 2, 12, 170))), 48 + i, 54 + i, 3),
        ..curls(i + 1)
      ]
    }
  }
}

// \u2500\u2500 Torn feathers tumble away above him \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn loose_feathers(i: Int) -> List(Path) {
  case i == 33 {
    True -> []
    False -> {
      let x = { i * 237 + i * i * 31 } % 910 - 455
      let y = { i * 161 + i * i * 19 } % 790 - 410
      let rest = loose_feathers(i + 1)
      case y > 0 - 70 && x > 0 - 420 {
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
`]]);var Hn=class extends m{constructor(t,n){super(),this.drawings=t,this.current=n}};var f1="animator-library";function c1(){let e,t=dc;t instanceof _?e="":e=t.head[0];let n=e;return new Hn(dc,n)}function Og(){let e=us("name",fr,t=>us("source",fr,n=>Rr([t,n])));return us("current",fr,t=>us("drawings",xl(e),n=>Rr(new Hn(n,t))))}function u1(){let e=a1(f1),t=T(e,r=>{let o=ah(r,Og());return Zd(o,void 0)}),n=W(t,r=>{let o=ls(dc,i=>Yd(Kt(r.drawings,i[0])));return new Hn(st(r.drawings,o),r.current)}),s=W(n,r=>{let o=r.drawings;if(o instanceof _)return c1();{let i=o.head[0];return Kt(r.drawings,r.current)instanceof $?r:new Hn(r.drawings,i)}});return ea(s,c1())}function jg(e){return ta(h(["current",Or(e.current)],h(["drawings",bl(e.drawings,t=>ta(h(["name",Or(t[0])],h(["source",Or(t[1])],w))))],w)))}function gp(e){return l1(f1,lh(jg(e)))}function kp(e){let t=Kt(e.drawings,e.current);return ea(t,"")}function p1(e,t){return new Hn(Ed(e.drawings,e.current,t),e.current)}function $1(e,t){return Kt(e.drawings,t)instanceof $?new Hn(e.drawings,t):e}function d1(e,t,n){return Kt(e.drawings,t)instanceof $?new Hn(e.drawings,t):new Hn(st(e.drawings,h([t,n],w)),t)}var zn=class extends m{constructor(t,n){super(),this.x=t,this.y=n}};var So=class extends m{constructor(t,n){super(),this.start=t,this.end=n}};var Co=class extends m{constructor(t,n){super(),this.center=t,this.radius=n}};var Io=class extends m{constructor(t,n,s,r){super(),this.center=t,this.radius=n,this.from=s,this.to=r}};var Fo=class extends m{constructor(t,n,s){super(),this.start=t,this.control=n,this.end=s}};var Lo=class extends m{constructor(t){super(),this.points=t}};var Ao=class extends m{constructor(t,n,s){super(),this.base=t,this.tip=n,this.width=s}};var Gr=class extends m{constructor(t,n){super(),this.shape=t,this.color=n}};var Hr=class extends m{constructor(t,n){super(),this.shape=t,this.blur=n}};var zr=class extends m{constructor(t,n){super(),this.shape=t,this.color=n}};var Wr=class extends m{constructor(t,n){super(),this.shape=t,this.opacity=n}};var wr=class extends m{constructor(t,n,s,r){super(),this.shape=t,this.pivot=n,this.degrees=s,this.period=r}};var Ss=class extends m{constructor(t,n,s){super(),this.shape=t,this.height=n,this.period=s}};var hc=class extends m{constructor(t,n,s,r){super(),this.shape=t,this.start=n,this.end=s,this.thickness=r}};function dn(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new y(new X("expected a Point"));{let n=t.tail;if(n instanceof _)return new y(new X("expected a Point"));if(n.tail instanceof _){let s=t.head;if(s instanceof Y){let r=n.head;if(r instanceof Y&&e.tag==="Point"){let o=s[0],i=r[0];return new $(new zn(o,i))}else return new y(new X("expected a Point"))}else return new y(new X("expected a Point"))}else return new y(new X("expected a Point"))}}else return new y(new X("expected a Point"))}function ba(e,t){return nt(Xi(e,0,t))}function h1(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new y(new X("a Colored shape's color must be an Rgb or Hsl"));{let n=t.tail;if(n instanceof _)return new y(new X("a Colored shape's color must be an Rgb or Hsl"));{let s=n.tail;if(s instanceof _)return new y(new X("a Colored shape's color must be an Rgb or Hsl"));if(s.tail instanceof _){let r=t.head;if(r instanceof Y){let o=n.head;if(o instanceof Y){let i=s.head;if(i instanceof Y){let f=e.tag;if(f==="Rgb"){let l=r[0],u=o[0],a=i[0];return new $("rgb("+ba(l,255)+", "+ba(u,255)+", "+ba(a,255)+")")}else if(f==="Hsl"){let l=r[0],u=o[0],a=i[0],c=(l%360+360)%360;return new $("hsl("+nt(c)+", "+ba(u,100)+"%, "+ba(a,100)+"%)")}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}}}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}function Kr(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _){let n=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+n))}else{let n=t.tail;if(n instanceof _){let s=t.head;if(s instanceof Je){let r=e.tag;if(r==="Polygon"){let o=s[0];return T(kt(o,dn),i=>i instanceof _?new y(new X("a Polygon needs at least one Point")):new $(new Lo(i)))}else{let o=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}else{let r=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+r))}}else{let s=n.tail;if(s instanceof _){let r=e.tag;if(r==="Line"){let o=t.head,i=n.head;return T(dn(o),f=>T(dn(i),l=>new $(new So(f,l))))}else if(r==="Circle"){let o=n.head;if(o instanceof Y){let i=t.head,f=o[0];return T(dn(i),l=>new $(new Co(l,f)))}else{let i=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else if(r==="Colored"){let o=t.head,i=n.head;return T(Kr(o),f=>T(h1(i),l=>new $(new Gr(f,l))))}else if(r==="Glow"){let o=n.head;if(o instanceof Y){let i=t.head,f=o[0];return T(Kr(i),l=>new $(new Hr(l,ao(f,0))))}else{let i=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else if(r==="Filled"){let o=t.head,i=n.head;return T(Kr(o),f=>T(h1(i),l=>new $(new zr(f,l))))}else if(r==="Faded"){let o=n.head;if(o instanceof Y){let i=t.head,f=o[0];return T(Kr(i),l=>new $(new Wr(l,Xi(f,0,100))))}else{let i=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else{let o=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}else{let r=s.tail;if(r instanceof _){let o=e.tag;if(o==="Curve"){let i=t.head,f=n.head,l=s.head;return T(dn(i),u=>T(dn(f),a=>T(dn(l),c=>new $(new Fo(u,a,c)))))}else if(o==="Leaf"){let i=s.head;if(i instanceof Y){let f=t.head,l=n.head,u=i[0];return T(dn(f),a=>T(dn(l),c=>new $(new Ao(a,c,u))))}else{let f=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else if(o==="Bounce"){let i=n.head;if(i instanceof Y){let f=s.head;if(f instanceof Y){let l=t.head,u=i[0],a=f[0];return T(Kr(l),c=>new $(new Ss(c,u,a)))}else{let l=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+l))}}else{let f=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else{let i=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else if(r.tail instanceof _){let o=s.head;if(o instanceof Y){let i=r.head;if(i instanceof Y){let f=n.head;if(f instanceof Y){let l=e.tag;if(l==="Arc"){let u=t.head,a=o[0],c=i[0],p=f[0];return T(dn(u),d=>new $(new Io(d,p,a,c)))}else if(l==="Sway"){let u=t.head,a=f,c=o[0],p=i[0];return T(Kr(u),d=>T(dn(a),x=>new $(new wr(d,x,c,p))))}else{let u=l;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+u))}}else{let l=e.tag;if(l==="Sway"){let u=t.head,a=f,c=o[0],p=i[0];return T(Kr(u),d=>T(dn(a),x=>new $(new wr(d,x,c,p))))}else{let u=l;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+u))}}}else{let f=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else{let i=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else{let o=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}}}}else return new y(new X("a Path's shape must be a recognized shape"))}function Ng(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new y(new X("some element is not a well-formed path"));{let n=t.tail;if(n instanceof _)return new y(new X("some element is not a well-formed path"));{let s=n.tail;if(s instanceof _)return new y(new X("some element is not a well-formed path"));{let r=s.tail;if(r instanceof _)return new y(new X("some element is not a well-formed path"));if(r.tail instanceof _){let o=n.head;if(o instanceof Y){let i=s.head;if(i instanceof Y){let f=r.head;if(f instanceof Y&&e.tag==="Path"){let l=t.head,u=o[0],a=i[0],c=f[0];return T(Kr(l),p=>new $(new hc(p,u,a,c)))}else return new y(new X("some element is not a well-formed path"))}else return new y(new X("some element is not a well-formed path"))}else return new y(new X("some element is not a well-formed path"))}else return new y(new X("some element is not a well-formed path"))}}}}else return new y(new X("some element is not a well-formed path"))}function m1(e,t){let n=n1("draw",h(new Y(e),w),t);if(n instanceof $){let s=n[0];if(s instanceof Je){let r=s[0];return rt(r)>Xm?new y(Hm):kt(r,Ng)}else return new y(new X("return value of draw is not a list"))}else return n}var En=null,bp=null,mc=null,yp=null;function Ug(e){let t=new Set(["fn","case","let","const","import","use","type","pub","as","if","todo","panic","assert"]);return e.define({token(n){if(n.eatSpace())return null;if(n.match(/^\/\/.*/))return"comment";if(n.match(/^"(?:[^"\\]|\\.)*"?/))return"string";if(n.match(/^[0-9]+\.[0-9]+/)||n.match(/^[0-9]+/))return"number";if(n.match(/^(True|False|Nil|Ok|Error)\b/))return"atom";let s=n.match(/^[A-Za-z_][A-Za-z0-9_]*/);return s?t.has(s[0])?"keyword":/^[A-Z]/.test(s[0])?"typeName":"variableName":n.match(/^(\+\.|-\.|\*\.|\/\.|<=\.|>=\.|<\.|>\.|==|!=|->|<-|\|>|=)/)?"operator":(n.next(),null)},languageData:{commentTokens:{line:"//"}}})}function Vg(){if(mc)return mc;let e="6";return mc=Promise.all([import(`https://esm.sh/@codemirror/view@${e}`),import(`https://esm.sh/@codemirror/state@${e}`),import(`https://esm.sh/@codemirror/commands@${e}`),import(`https://esm.sh/@codemirror/language@${e}`),import(`https://esm.sh/@codemirror/autocomplete@${e}`),import("https://esm.sh/@lezer/highlight@1")]).then(([t,n,s,r,o,i])=>{let{tags:f}=i,l=t.EditorView.theme({"&":{color:"#d4c5a0",backgroundColor:"#0d0d1a",height:"100%"},".cm-content":{fontFamily:"monospace",fontSize:"13px",padding:"16px 0"},".cm-gutters":{backgroundColor:"#0d0d1a",color:"#3a3a5e",border:"none"},".cm-activeLine":{backgroundColor:"#16162c"},".cm-activeLineGutter":{backgroundColor:"#16162c"},"&.cm-focused .cm-matchingBracket":{backgroundColor:"#2a4a3a",color:"#fff"},".cm-scroller":{overflow:"auto"},"&.cm-focused":{outline:"1px solid #6a6aaa"}},{dark:!0}),u=r.HighlightStyle.define([{tag:f.keyword,color:"#c792ea"},{tag:f.comment,color:"#6a7a6a",fontStyle:"italic"},{tag:f.string,color:"#c3e88d"},{tag:f.number,color:"#f78c6c"},{tag:[f.atom,f.bool],color:"#82aaff"},{tag:f.typeName,color:"#ffcb6b"},{tag:f.variableName,color:"#d4c5a0"},{tag:f.operator,color:"#89ddff"}]),a=Ug(r.StreamLanguage);function c(p,d,x){let b=t.EditorView.updateListener.of(v=>{v.docChanged&&x(v.state.doc.toString())}),P=n.EditorState.create({doc:d,extensions:[t.lineNumbers(),t.highlightActiveLine(),t.highlightActiveLineGutter(),s.history(),t.drawSelection(),r.indentOnInput(),r.indentUnit.of("  "),r.bracketMatching(),o.closeBrackets(),r.syntaxHighlighting(u),a,t.keymap.of([...o.closeBracketsKeymap,...s.defaultKeymap,...s.historyKeymap,s.indentWithTab]),l,t.EditorView.lineWrapping,b]});return new t.EditorView({state:P,parent:p})}return{create:c}}),mc}function Gg(e,t){return new Promise(n=>{let s=0,r=()=>{let o=document.getElementById(e);if(o)return n(o);if(s++>=t)return n(null);requestAnimationFrame(r)};r()})}function Hg(){if(!En||En.dom.isConnected)return;let e=document.getElementById("code-editor");e&&(e.replaceChildren(En.dom),En.requestMeasure(),document.activeElement===document.body&&En.focus())}var Pp=0;function x1(e,t){let n=++Pp;En&&(En.destroy(),En=null),bp=t,yp||(yp=new MutationObserver(Hg),yp.observe(document.body,{childList:!0,subtree:!0})),Gg("code-editor",120).then(s=>{!s||n!==Pp||Vg().then(r=>{let o=document.getElementById("code-editor");o&&n===Pp&&(En&&En.destroy(),o.innerHTML="",En=r.create(o,e,i=>{bp&&bp(i)}))}).catch(r=>console.error("CodeMirror failed to load:",r))})}var he=class extends m{constructor(t,n){super(),this.signature=t,this.description=n}};function Tp(e,t){return pr(n=>x1(e,s=>n(t(s))))}function zg(){return h(new he("list.map(list, fn(a) -> b) -> List(b)","each element through `fn`"),h(new he("list.filter(list, fn(a) -> Bool) -> List(a)","only the elements `fn` says True to"),h(new he("list.append(list, list) -> List(a)","one list after the other"),h(new he("list.length(list) -> Int","the number of elements"),h(new he("list.flatten(List(List(a))) -> List(a)","the inner lists, end to end"),w)))))}function xc(e,t){return vt(h(ie("reference-group"),w),h(vt(h(ie("reference-group-title"),w),h(Tt(e),w)),h(vt(h(ie("reference-rows"),w),Ze(t,n=>vt(h(ie("reference-row"),w),h(Rh(h(ie("reference-sig"),w),h(Tt(n.signature),w)),h(wo(h(ie("reference-desc"),w),h(Tt(n.description),w)),w))))),w)))}function Wg(){return ns([new he("Circle(center: Point, radius: Int)","a full circle"),new he("Arc(center: Point, radius: Int, from: Int, to: Int)","part of a circle, traced from angle `from` to `to`"),new he("Curve(start: Point, control: Point, end: Point)","a smooth curve that bends toward `control`"),new he("Polygon(points: List(Point))","a closed outline through the points"),new he("Leaf(base: Point, tip: Point, width: Int)","a closed, pointed lens shape: a petal, leaf, or blade of grass"),new he("Colored(shape, color)","draws `shape` in `color` instead of the app's palette"),new he("Glow(shape, blur: Int)","a soft halo in the shape's color"),new he("Filled(shape, color)","fills a closed shape; thickness 0 draws only the fill"),new he("Faded(shape, opacity: Int)","see-through, from 0 to 100"),new he("Sway(shape, pivot: Point, degrees: Int, period: Int)","rocks around `pivot`, once every `period` (1/10 s), forever"),new he("Bounce(shape, height: Int, period: Int)","hops up by `height`, once every `period` (1/10 s), forever"),new he("Rgb(r: Int, g: Int, b: Int)","a color, each part in [0, 255]"),new he("Hsl(hue: Int, saturation: Int, lightness: Int)","a color: hue in degrees, the others in [0, 100]")])}function Kg(){return h(new he("random(min: Int, max: Int) -> Int","a random int in [min, max)"),h(new he("abs(n: Int) -> Int","the absolute value of `n`"),h(new he("Point(x: Int, y: Int)","a point on the canvas: (0, 0) is the center, x and y run from -500 to 500, and y grows downward"),h(new he("Line(start: Point, end: Point)","a straight-line shape"),h(new he("Path(shape, start: Int, end: Int, thickness: Int)","draws a shape between times `start` and `end`, in 1/10 s (end <= start draws it instantly)"),h(new he("sin(degrees: Int, scale: Int) -> Int","sine of the angle times `scale`, rounded: sin(30, 100) == 50"),h(new he("cos(degrees: Int, scale: Int) -> Int","cosine of the angle times `scale`, rounded: cos(60, 100) == 50"),h(new he("sqrt(n: Int) -> Int","the integer square root of `n` >= 0"),w))))))))}function Xg(){return h(new he("shape_slider: Int","the shape slider value, in [0, 100]"),w)}function Jg(){return Nh(h(ie("reference"),w),h(qh(h(ie("reference-summary"),w),h(Tt("Built-ins"),w)),h(vt(h(ie("reference-body"),w),h(xc("Inputs",Xg()),h(xc("Functions",Kg()),h(xc("Shapes & colors",Wg()),h(xc("Lists",zg()),w))))),w)))}function _1(e){return vt(h(ie("code-panel"),w),h(vt(h(ie("code-header"),w),h(wo(h(ie("code-title"),w),h(Tt("draw code"),w)),h(Nr(h(ie("icon-btn"),h(ot("title","Hide code"),h(Ur(e),w))),h(Tt("\u27E8"),w)),w))),h(vt(h(ie("code-editor-wrap"),w),h(du("","div",h(Pl("code-editor"),h(ie("code-editor"),w)),""),w)),h(Jg(),w))))}function w1(e){let t="",n=e;for(;n.tail;)t!==""&&(t+="|"),t+=Zg(n.head),n=n.tail;return new RegExp(t)}function _c(e,t){let n=t.match(e);if(!n)return[t,""];let s=n.index;return[t.slice(0,s),t.slice(s)]}function Zg(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function g1(e){let n=ls(e,s=>s!=="");return w1(n)}function xt(e,t,n){return e.slice(t,t+n)}function k1(e){return e.slice(1)}function ya(e){return e.length}var B=class extends m{constructor(t){super(),this[0]=t}};var K=class extends m{constructor(t){super(),this[0]=t}};var it=class extends m{constructor(t){super(),this[0]=t}};var ue=class extends m{constructor(t){super(),this[0]=t}};var Et=class extends m{constructor(t){super(),this[0]=t}};var hn=class extends m{constructor(t){super(),this[0]=t}};var Pa=class extends m{constructor(t){super(),this[0]=t}};var Ta=class extends m{constructor(t){super(),this[0]=t}};var va=class extends m{constructor(t){super(),this[0]=t}};var _t=class extends m{},_e=new _t;var Xr=class extends m{},we=new Xr;var wc=class extends m{},ge=new wc;var Wn=class extends m{},ke=new Wn;var Cs=class extends m{},be=new Cs;var gc=class extends m{},ye=new gc;var kc=class extends m{},Pe=new kc;var Kn=class extends m{},Te=new Kn;var bc=class extends m{},ve=new bc;var Jt=class extends m{},Ee=new Jt;var Mo=class extends m{},Se=new Mo;var yc=class extends m{},Ce=new yc;var Ro=class extends m{},Ie=new Ro;var Is=class extends m{},Fe=new Is;var Pc=class extends m{},Le=new Pc;var Bo=class extends m{},Ae=new Bo;var Xn=class extends m{},Me=new Xn;var Oo=class extends m{},Re=new Oo;var Tc=class extends m{},Be=new Tc;var Jn=class extends m{},Oe=new Jn;var gr=class extends m{},je=new gr;var Fs=class extends m{},De=new Fs;var Ye=class extends m{},Ca=new Ye;var q=class extends m{},wt=new q;var Yt=class extends m{},Ia=new Yt;var ft=class extends m{},Cc=new ft;var Sn=class extends m{},b1=new Sn;var ut=class extends m{},Qt=new ut;var jo=class extends m{},y1=new jo;var mn=class extends m{},vp=new mn;var Do=class extends m{},P1=new Do;var Ls=class extends m{},T1=new Ls;var No=class extends m{},v1=new No;var qo=class extends m{},E1=new qo;var Uo=class extends m{},S1=new Uo;var Vo=class extends m{},C1=new Vo;var Go=class extends m{},I1=new Go;var Ho=class extends m{},F1=new Ho;var zo=class extends m{},L1=new zo;var Wo=class extends m{},A1=new Wo;var Ko=class extends m{},M1=new Ko;var Xo=class extends m{},R1=new Xo;var Jo=class extends m{},B1=new Jo;var Yo=class extends m{},O1=new Yo;var Zo=class extends m{},j1=new Zo;var Cn=class extends m{},D1=new Cn;var As=class extends m{},N1=new As;var Zt=class extends m{},q1=new Zt;var D=class extends m{},li=new D;var In=class extends m{},U1=new In;var Yn=class extends m{},V1=new Yn;var Qo=class extends m{},Fa=new Qo;var ei=class extends m{},G1=new ei;var ti=class extends m{},H1=new ti;var vc=class extends m{},Ic=new vc;var ni=class extends m{},z1=new ni;var ri=class extends m{},W1=new ri;var Fn=class extends m{},K1=new Fn;var Ec=class extends m{},kr=new Ec;var si=class extends m{},X1=new si;var Zn=class extends m{},en=new Zn;var pt=class extends m{},Ep=new pt;var oi=class extends m{},Fc=new oi;var ii=class extends m{},La=new ii;var ai=class extends m{},J1=new ai;var Ea=class extends m{constructor(t){super(),this[0]=t}};var Sa=class extends m{constructor(t){super(),this[0]=t}};var Sc=class extends m{constructor(t){super(),this[0]=t}};function Aa(e){return e instanceof B||e instanceof K?e[0]:e instanceof it?"_"+e[0]:e instanceof ue||e instanceof Et?e[0]:e instanceof hn?'"'+e[0]+'"':e instanceof Pa?"///"+e[0]:e instanceof Ta?"//"+e[0]:e instanceof va?"////"+e[0]:e instanceof _t?"as":e instanceof Xr?"assert":e instanceof wc?"auto":e instanceof Wn?"case":e instanceof Cs?"const":e instanceof gc?"delegate":e instanceof kc?"derive":e instanceof Kn?"echo":e instanceof bc?"else":e instanceof Jt?"fn":e instanceof Mo?"if":e instanceof yc?"implement":e instanceof Ro?"import":e instanceof Is?"let":e instanceof Pc?"macro":e instanceof Bo?"opaque":e instanceof Xn?"panic":e instanceof Oo?"pub":e instanceof Tc?"test":e instanceof Jn?"todo":e instanceof gr?"type":e instanceof Fs?"use":e instanceof Ye?"(":e instanceof q?")":e instanceof Yt?"{":e instanceof ft?"}":e instanceof Sn?"[":e instanceof ut?"]":e instanceof jo?"+":e instanceof mn?"-":e instanceof Do?"*":e instanceof Ls?"/":e instanceof No?"<":e instanceof qo?">":e instanceof Uo?"<=":e instanceof Vo?">=":e instanceof Go?"%":e instanceof Ho?"+.":e instanceof zo?"-.":e instanceof Wo?"*.":e instanceof Ko?"/.":e instanceof Xo?"<.":e instanceof Jo?">.":e instanceof Yo?"<=.":e instanceof Zo?">=.":e instanceof Cn?"<>":e instanceof As?"@":e instanceof Zt?":":e instanceof D?",":e instanceof In?"#":e instanceof Yn?"!":e instanceof Qo?"=":e instanceof ei?"==":e instanceof ti?"!=":e instanceof vc?"|":e instanceof ni?"||":e instanceof ri?"&&":e instanceof Fn?"<<":e instanceof Ec?">>":e instanceof si?"|>":e instanceof Zn?".":e instanceof pt?"..":e instanceof oi?"<-":e instanceof ii?"->":e instanceof ai?"":e instanceof Ea?e[0]:e instanceof Sa?'"'+e[0]:e[0]}var O=class extends m{constructor(t,n,s,r,o,i,f){super(),this.original_source=t,this.source=n,this.byte_offset=s,this.preserve_whitespace=r,this.preserve_comments=o,this.mode=i,this.newlines=f}},Ac=class extends m{},ci=new Ac,Mc=class extends m{},br=new Mc,Rc=class extends m{},Qn=new Rc,Bc=class extends m{},Ve=new Bc,Ip=class extends m{},er=new Ip,R=class extends m{constructor(t){super(),this.byte_offset=t}};var Oc=class extends m{},e0=new Oc,jc=class extends m{},t0=new jc,Fp=class extends m{},n0=new Fp,Ms=class extends m{},$t=new Ms,Rs=class extends m{},r0=new Rs,Lp=class extends m{},Z1=new Lp;function tx(e){return new O(e,e,0,!0,!0,ci,g1(h(`\r
`,h(`
`,w))))}function nx(e){return new O(e.original_source,e.source,e.byte_offset,!1,e.preserve_comments,e.mode,e.newlines)}function rx(e){return new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,!1,e.mode,e.newlines)}function sx(e){let t=e[0],n=e[1];return[t,new g(n)]}function k(e,t,n){return new O(e.original_source,t,e.byte_offset+n,e.preserve_whitespace,e.preserve_comments,e.mode,e.newlines)}function ox(e,t,n,s){return[k(t,n,s),e]}function U(e,t,n,s){let r=[t,new R(e.byte_offset)],o=ox(r,e,n,s);return sx(o)}function Ge(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===97){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===98){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===99){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===100){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===101){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===102){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===103){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===104){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===105){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===106){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===107){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===108){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===109){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===110){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===111){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===112){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===113){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===114){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===115){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===116){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===117){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===118){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===119){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===120){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===121){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===122){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===65){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===66){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===67){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===68){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===69){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===70){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===71){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===72){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===73){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===74){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===75){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===76){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===77){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===78){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===79){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===80){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===81){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===82){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===83){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===84){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===85){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===86){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===87){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===88){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===89){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===90){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===48){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===49){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===50){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===51){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===52){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===53){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===54){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===55){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===56){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===57){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else{let l=xt(s.original_source,r,o);return[s,l]}}}function Ne(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===97){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===98){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===99){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===100){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===101){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===102){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===103){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===104){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===105){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===106){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===107){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===108){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===109){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===110){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===111){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===112){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===113){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===114){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===115){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===116){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===117){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===118){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===119){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===120){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===121){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===122){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===48){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===49){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===50){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===51){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===52){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===53){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===54){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===55){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===56){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===57){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===95){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else{let l=xt(s.original_source,r,o);return[s,l]}}}function s0(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===34){let l=i.slice(1),u=xt(s.original_source,r+1,o),a=[new hn(u),new R(r)],c=ox(a,s,l,1);return sx(c)}else if(f===92){let l=i.slice(1),u=dl(l);if(u instanceof $){let a=u[0][0],c=u[0][1],p=1+ya(a);e=k(s,c,p),t=r,n=o+p}else e=k(s,l,1),t=r,n=o+1}else if(i===""){let l=xt(s.original_source,r+1,o);return[s,new g([new Sa(l),new R(r)])]}else e=k(s,k1(s.source),1),t=r,n=o+1}}function dt(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s,l=r.source,u=l.charCodeAt(0);if(u===95){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===48){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===49){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===50){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===51){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===52){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===53){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===54){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===55){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===56){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===57){let a=l.slice(1);e=k(r,a,1),t=o,n=i,s=f+1}else if(u===46)if(o instanceof Ms){let a=l.slice(1);e=k(r,a,1),t=r0,n=i,s=f+1}else if(o instanceof Rs){let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new Et(c),new R(i)])]}else{let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new Et(c),new R(i)])]}else if(l.startsWith("e-"))if(o instanceof Ms){let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new ue(c),new R(i)])]}else if(o instanceof Rs){let a=l.slice(2);e=k(r,a,2),t=Z1,n=i,s=f+2}else{let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new Et(c),new R(i)])]}else if(u===101)if(o instanceof Ms){let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new ue(c),new R(i)])]}else if(o instanceof Rs){let a=l.slice(1);e=k(r,a,1),t=Z1,n=i,s=f+1}else{let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new Et(c),new R(i)])]}else if(o instanceof Ms){let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new ue(c),new R(i)])]}else if(o instanceof Rs){let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new Et(c),new R(i)])]}else{let a=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(a.original_source,i,f);return[a,new g([new Et(c),new R(i)])]}}}function o0(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===95){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===48){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===49){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===50){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===51){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===52){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===53){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===54){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===55){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===56){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===57){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===97){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===65){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===98){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===66){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===99){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===67){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===100){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===68){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===101){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===69){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===102){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===70){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else{let l=xt(s.original_source,r,o);return[s,new g([new ue(l),new R(r)])]}}}function i0(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===95){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===48){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===49){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===50){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===51){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===52){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===53){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===54){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===55){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else{let l=xt(s.original_source,r,o);return[s,new g([new ue(l),new R(r)])]}}}function a0(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===95){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===48){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===49){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else{let l=xt(s.original_source,r,o);return[s,new g([new ue(l),new R(r)])]}}}function Sp(e,t,n){let s=_c(e.newlines,e.source),r=s[0],o=s[1],i=ya(r),f=k(e,o,i),l;t instanceof Oc?l=new Ta(r):t instanceof jc?l=new Pa(r):l=new va(r);let u=l;return[f,new g([u,new R(n)])]}function Cp(e){let t=_c(e.newlines,e.source),n=t[0],s=t[1],r=ya(n);return[k(e,s,r),C]}function Lc(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===32){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===9){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===10){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===13){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(s.preserve_whitespace){let u=xt(s.original_source,r,o);return[s,new g([new Ea(u),new R(r)])]}else return[s,C]}}function tr(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===48){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===49){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===50){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===51){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===52){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===53){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===54){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===55){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===56){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else if(f===57){let l=i.slice(1);e=k(s,l,1),t=r,n=o+1}else{let l=xt(s.original_source,r,o);return[s,l]}}}function Q1(e){let t=e.source;if(t.charCodeAt(0)===45){let n=t.slice(1),s=U(e,vp,n,1),r=s[0],o=s[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,ci,r.newlines),o])}else return new y(void 0)}function ex(e){let t=e.source;if(t.startsWith("..")){let n=t.slice(2);return new $(U(e,Ep,n,2))}else if(t.charCodeAt(0)===46){let n=t.slice(1),s=n.charCodeAt(0);if(s===48){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===49){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===50){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===51){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===52){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===53){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===54){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===55){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===56){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===57){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else return new $(U(e,en,n,1))}else return new y(void 0)}function l0(e){let t=e.mode;if(t instanceof Ac){let n=e.source,s=n.charCodeAt(0);if(s===32){let r=n.slice(1),o=k(e,r,1);return Lc(o,e.byte_offset,1)}else if(s===10){let r=n.slice(1),o=k(e,r,1);return Lc(o,e.byte_offset,1)}else if(s===13){let r=n.slice(1),o=k(e,r,1);return Lc(o,e.byte_offset,1)}else if(s===9){let r=n.slice(1),o=k(e,r,1);return Lc(o,e.byte_offset,1)}else if(n.startsWith("////")){let r=n.slice(4);if(e.preserve_comments){let i=k(e,r,4);return Sp(i,n0,e.byte_offset)}else return Cp(e)}else if(n.startsWith("///")){let r=n.slice(3);if(e.preserve_comments){let i=k(e,r,3);return Sp(i,t0,e.byte_offset)}else return Cp(e)}else if(n.startsWith("//")){let r=n.slice(2);if(e.preserve_comments){let i=k(e,r,2);return Sp(i,e0,e.byte_offset)}else return Cp(e)}else if(s===40){let r=n.slice(1);return U(e,Ca,r,1)}else if(s===41){let r=n.slice(1);return U(e,wt,r,1)}else if(s===123){let r=n.slice(1);return U(e,Ia,r,1)}else if(s===125){let r=n.slice(1);return U(e,Cc,r,1)}else if(s===91){let r=n.slice(1);return U(e,b1,r,1)}else if(s===93){let r=n.slice(1);return U(e,Qt,r,1)}else if(s===64){let r=n.slice(1);return U(e,N1,r,1)}else if(s===58){let r=n.slice(1);return U(e,q1,r,1)}else if(s===44){let r=n.slice(1);return U(e,li,r,1)}else if(n.startsWith("..")){let r=n.slice(2);return U(e,Ep,r,2)}else if(s===46){let r=n.slice(1);return U(e,en,r,1)}else if(s===35){let r=n.slice(1);return U(e,U1,r,1)}else if(n.startsWith("!=")){let r=n.slice(2);return U(e,H1,r,2)}else if(s===33){let r=n.slice(1);return U(e,V1,r,1)}else if(n.startsWith("==")){let r=n.slice(2);return U(e,G1,r,2)}else if(s===61){let r=n.slice(1);return U(e,Fa,r,1)}else if(n.startsWith("|>")){let r=n.slice(2);return U(e,X1,r,2)}else if(n.startsWith("||")){let r=n.slice(2);return U(e,z1,r,2)}else if(s===124){let r=n.slice(1);return U(e,Ic,r,1)}else if(n.startsWith("&&")){let r=n.slice(2);return U(e,W1,r,2)}else if(n.startsWith("<<")){let r=n.slice(2);return U(e,K1,r,2)}else if(n.startsWith(">>")){let r=n.slice(2);return U(e,kr,r,2)}else if(n.startsWith("<-")){let r=n.slice(2);return U(e,Fc,r,2)}else if(n.startsWith("->")){let r=n.slice(2);return U(e,La,r,2)}else if(n.startsWith("<>")){let r=n.slice(2);return U(e,D1,r,2)}else if(n.startsWith("+.")){let r=n.slice(2);return U(e,F1,r,2)}else if(n.startsWith("-.")){let r=n.slice(2);return U(e,L1,r,2)}else if(n.startsWith("*.")){let r=n.slice(2);return U(e,A1,r,2)}else if(n.startsWith("/.")){let r=n.slice(2);return U(e,M1,r,2)}else if(n.startsWith("<=.")){let r=n.slice(3);return U(e,O1,r,3)}else if(n.startsWith("<.")){let r=n.slice(2);return U(e,R1,r,2)}else if(n.startsWith(">=.")){let r=n.slice(3);return U(e,j1,r,3)}else if(n.startsWith(">.")){let r=n.slice(2);return U(e,B1,r,2)}else if(n.startsWith("0b")){let r=n.slice(2),o=k(e,r,2);return a0(o,e.byte_offset,2)}else if(n.startsWith("0o")){let r=n.slice(2),o=k(e,r,2);return i0(o,e.byte_offset,2)}else if(n.startsWith("0x")){let r=n.slice(2),o=k(e,r,2);return o0(o,e.byte_offset,2)}else if(s===48){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===49){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===50){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===51){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===52){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===53){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===54){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===55){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===56){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===57){let r=n.slice(1),o=k(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(n.startsWith("-0")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-1")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-2")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-3")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-4")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-5")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-6")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-7")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-8")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-9")){let r=n.slice(2),o=k(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(s===43){let r=n.slice(1);return U(e,y1,r,1)}else if(s===45){let r=n.slice(1);return U(e,vp,r,1)}else if(s===42){let r=n.slice(1);return U(e,P1,r,1)}else if(s===47){let r=n.slice(1);return U(e,T1,r,1)}else if(n.startsWith("<=")){let r=n.slice(2);return U(e,S1,r,2)}else if(s===60){let r=n.slice(1);return U(e,v1,r,1)}else if(n.startsWith(">=")){let r=n.slice(2);return U(e,C1,r,2)}else if(s===62){let r=n.slice(1);return U(e,E1,r,1)}else if(s===37){let r=n.slice(1);return U(e,I1,r,1)}else if(s===34){let r=n.slice(1),o=k(e,r,1);return s0(o,e.byte_offset,0)}else if(s===95){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o+1,0);let l=i,u=l[0],a=l[1];return[u,new g([new it(a),new R(o)])]}else if(s===97){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===98){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===99){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===100){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===101){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===102){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===103){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===104){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===105){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===106){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===107){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===108){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===109){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===110){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===111){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===112){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===113){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===114){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===115){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===116){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===117){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===118){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===119){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===120){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===121){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===122){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ne(f,o,1);let l=i,u=l[0],a=l[1],c;a==="as"?c=_e:a==="assert"?c=we:a==="auto"?c=ge:a==="case"?c=ke:a==="const"?c=be:a==="delegate"?c=ye:a==="derive"?c=Pe:a==="echo"?c=Te:a==="else"?c=ve:a==="fn"?c=Ee:a==="if"?c=Se:a==="implement"?c=Ce:a==="import"?c=Ie:a==="let"?c=Fe:a==="macro"?c=Le:a==="opaque"?c=Ae:a==="panic"?c=Me:a==="pub"?c=Re:a==="test"?c=Be:a==="todo"?c=Oe:a==="type"?c=je:a==="use"?c=De:c=new B(a);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new g([p,new R(o)])]}else if(s===65){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===66){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===67){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===68){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===69){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===70){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===71){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===72){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===73){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===74){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===75){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===76){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===77){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===78){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===79){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===80){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===81){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===82){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===83){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===84){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===85){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===86){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===87){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===88){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===89){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else if(s===90){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=Ge(f,o,1);let l=i,u=l[0],a=l[1];return[u,new g([new K(a),new R(o)])]}else{let r=dl(e.source);if(r instanceof $){let o=r[0][0],i=r[0][1];return U(e,new Sc(o),i,ya(o))}else return[e,new g([J1,new R(e.byte_offset)])]}}else if(t instanceof Mc){let n=Q1(e);return n instanceof $?n[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),C]}else if(t instanceof Rc){let n=ex(e);return n instanceof $?n[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),C]}else if(t instanceof Bc){let n=ex(e);if(n instanceof $)return n[0];{let s=Q1(e);return s instanceof $?s[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),C]}}else{let n=e.source,s=n.charCodeAt(0);if(s===48){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===49){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===50){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===51){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===52){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===53){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===54){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===55){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===56){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else if(s===57){let r=n.slice(1),o=e.byte_offset,i,f=k(e,r,1);i=tr(f,o,1);let l=i,u=l[0],a=l[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new g([new ue(a),new R(o)])]}else return[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),C]}}function c0(e,t){for(;;){let n=e,s=t,r=l0(n),o=r[1];if(o instanceof g){if(o[0][0]instanceof ai)return s;{let i=r[0],f=o[0];e=i,t=h(f,s)}}else e=r[0],t=s}}function ix(e){let t=c0(e,w);return E(t)}var Ma="src\\glance.gleam",Hs=class extends m{constructor(t,n){super(),this.attributes=t,this.definition=n}};var Oa=class extends m{constructor(t,n){super(),this.name=t,this.arguments=n}};var Zr=class extends m{constructor(t,n,s,r,o){super(),this.imports=t,this.custom_types=n,this.type_aliases=s,this.constants=r,this.functions=o}};var Jp=class extends m{constructor(t,n,s,r,o,i){super(),this.location=t,this.name=n,this.publicity=s,this.parameters=r,this.return=o,this.body=i}};var S=class extends m{constructor(t,n){super(),this.start=t,this.end=n}};var zs=class extends m{constructor(t,n,s){super(),this.location=t,this.patterns=n,this.function=s}};var mi=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.kind=n,this.pattern=s,this.annotation=r,this.value=o}};var Us=class extends m{constructor(t,n,s){super(),this.location=t,this.expression=n,this.message=s}};var Vs=class extends m{constructor(t){super(),this[0]=t}};var xi=class extends m{},ax=new xi;var qc=class extends m{constructor(t){super(),this.message=t}};var Yp=class extends m{constructor(t,n){super(),this.pattern=t,this.annotation=n}};var Da=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Zp=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var tn=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Ws=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Sr=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Qp=class extends m{constructor(t,n){super(),this.location=t,this.elements=n}};var Na=class extends m{constructor(t,n,s){super(),this.location=t,this.elements=n,this.tail=s}};var e$=class extends m{constructor(t,n,s){super(),this.location=t,this.pattern=n,this.name=s}};var Mn=class extends m{constructor(t,n,s,r){super(),this.location=t,this.prefix=n,this.prefix_name=s,this.rest_name=r}};var t$=class extends m{constructor(t,n){super(),this.location=t,this.segments=n}};var Gs=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.module=n,this.constructor$=s,this.arguments=r,this.with_spread=o}};var yr=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Pr=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Bs=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Pt=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Os=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var js=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Tr=class extends m{constructor(t,n){super(),this.location=t,this.statements=n}};var Ds=class extends m{constructor(t,n){super(),this.location=t,this.message=n}};var Ns=class extends m{constructor(t,n){super(),this.location=t,this.message=n}};var $i=class extends m{constructor(t,n){super(),this.location=t,this.elements=n}};var vr=class extends m{constructor(t,n,s){super(),this.location=t,this.elements=n,this.rest=s}};var qa=class extends m{constructor(t,n,s,r){super(),this.location=t,this.arguments=n,this.return_annotation=s,this.body=r}};var Uc=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.module=n,this.constructor$=s,this.record=r,this.fields=o}};var _i=class extends m{constructor(t,n,s){super(),this.location=t,this.container=n,this.label=s}};var $e=class extends m{constructor(t,n,s){super(),this.location=t,this.function=n,this.arguments=s}};var n$=class extends m{constructor(t,n,s){super(),this.location=t,this.tuple=n,this.index=s}};var _n=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.label=n,this.function=s,this.arguments_before=r,this.arguments_after=o}};var qs=class extends m{constructor(t,n){super(),this.location=t,this.segments=n}};var Ua=class extends m{constructor(t,n,s){super(),this.location=t,this.subjects=n,this.clauses=s}};var wi=class extends m{constructor(t,n,s,r){super(),this.location=t,this.name=n,this.left=s,this.right=r}};var St=class extends m{constructor(t,n,s){super(),this.location=t,this.expression=n,this.message=s}};var r$=class extends m{constructor(t,n,s){super(),this.patterns=t,this.guard=n,this.body=s}};var s$=class extends m{},fi=new s$;var o$=class extends m{},Ap=new o$;var i$=class extends m{},Mp=new i$;var a$=class extends m{},ui=new a$;var l$=class extends m{},Rp=new l$;var c$=class extends m{},Bp=new c$;var f$=class extends m{},Op=new f$;var u$=class extends m{},jp=new u$;var p$=class extends m{},Dp=new p$;var $$=class extends m{},Np=new $$;var d$=class extends m{},qp=new d$;var h$=class extends m{},Up=new h$;var m$=class extends m{},Vp=new m$;var x$=class extends m{},Gp=new x$;var _$=class extends m{},Hp=new _$;var w$=class extends m{constructor(t){super(),this[0]=t}};var g$=class extends m{constructor(t){super(),this[0]=t}};var k$=class extends m{constructor(t){super(),this[0]=t}};var gi=class extends m{},u0=new gi;var ki=class extends m{},p0=new ki;var bi=class extends m{},$0=new bi;var yi=class extends m{},d0=new yi;var Pi=class extends m{},h0=new Pi;var Ti=class extends m{},m0=new Ti;var Vc=class extends m{},x0=new Vc;var Gc=class extends m{},_0=new Gc;var vi=class extends m{},w0=new vi;var Ei=class extends m{},g0=new Ei;var Hc=class extends m{},k0=new Hc;var zc=class extends m{},b0=new zc;var Ks=class extends m{},y0=new Ks;var Si=class extends m{},P0=new Si;var Wc=class extends m{},T0=new Wc;var Ci=class extends m{},v0=new Ci;var Kc=class extends m{},E0=new Kc;var Ii=class extends m{},S0=new Ii;var Xc=class extends m{},C0=new Xc;var Fi=class extends m{},I0=new Fi;var Jc=class extends m{},F0=new Jc;var Li=class extends m{},L0=new Li;var b$=class extends m{},A0=new b$;var y$=class extends m{constructor(t,n){super(),this.name=t,this.type_=n}};var P$=class extends m{constructor(t,n,s){super(),this.label=t,this.name=n,this.type_=s}};var At=class extends m{constructor(t){super(),this[0]=t}};var wn=class extends m{constructor(t){super(),this[0]=t}};var T$=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.module=n,this.alias=s,this.unqualified_types=r,this.unqualified_values=o}};var v$=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.name=n,this.publicity=s,this.annotation=r,this.value=o}};var He=class extends m{constructor(t,n){super(),this.name=t,this.alias=n}};var E$=class extends m{},Dc=new E$;var S$=class extends m{},zp=new S$;var C$=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.name=n,this.publicity=s,this.parameters=r,this.aliased=o}};var Qr=class extends m{constructor(t,n,s,r,o,i){super(),this.location=t,this.name=n,this.publicity=s,this.opaque_=r,this.parameters=o,this.variants=i}};var I$=class extends m{constructor(t,n,s){super(),this.name=t,this.fields=n,this.attributes=s}};var di=class extends m{constructor(t,n){super(),this.label=t,this.item=n}};var F$=class extends m{constructor(t,n){super(),this.item=t,this.label=n}};var ja=class extends m{constructor(t){super(),this.item=t}};var Xs=class extends m{constructor(t,n,s){super(),this.label=t,this.label_location=n,this.item=s}};var Js=class extends m{constructor(t,n){super(),this.label=t,this.location=n}};var Yr=class extends m{constructor(t){super(),this.item=t}};var L$=class extends m{constructor(t,n,s,r){super(),this.location=t,this.name=n,this.module=s,this.parameters=r}};var A$=class extends m{constructor(t,n){super(),this.location=t,this.elements=n}};var M$=class extends m{constructor(t,n,s){super(),this.location=t,this.parameters=n,this.return=s}};var hi=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Yc=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Va=class extends m{},H=new Va;var A=class extends m{constructor(t,n){super(),this.token=t,this.position=n}};var yt=class extends m{constructor(t,n,s,r){super(),this.types=t,this.values=n,this.end=s,this.remaining_tokens=r}},Lt=class extends m{constructor(t,n,s,r){super(),this.fields=t,this.spread=n,this.end=s,this.remaining_tokens=r}},Jr=class extends m{},xn=new Jr,R$=class extends m{},M0=new R$,qe=class extends m{constructor(t,n,s,r){super(),this.values=t,this.spread=n,this.remaining_tokens=s,this.end=r}};function lx(e){return e instanceof gi?2:e instanceof ki?1:e instanceof bi||e instanceof yi?3:e instanceof Pi||e instanceof Ti||e instanceof Vc||e instanceof Gc||e instanceof vi||e instanceof Ei||e instanceof Hc||e instanceof zc?4:e instanceof Ks?6:e instanceof Si||e instanceof Wc||e instanceof Ci||e instanceof Kc?7:e instanceof Ii||e instanceof Xc||e instanceof Fi||e instanceof Jc||e instanceof Li?8:5}function We(e){if(e instanceof _)return new y(H);{let t=e.head[0],n=e.head[1];return new y(new A(t,n))}}function ht(e,t,n){if(t instanceof _)return new y(H);{let s=t.head[0];if(mt(s,e)){let r=t.tail,o=t.head[1];return n(o,r)}else{let r=t.head[0],o=t.head[1];return new y(new A(r,o))}}}function zt(e,t,n,s){if(s instanceof _)return T(e(s),r=>{let o=r[0],i=r[1],f=h(o,n);if(i instanceof _)return new y(H);{let l=i.head[0];if(l instanceof ut){let u=i.tail,a=i.head[1].byte_offset;return new $(new qe(E(f),C,u,a+1))}else if(l instanceof D){let u=i.tail;if(u instanceof _)return zt(e,t,f,u);{let a=u.head[0];if(a instanceof ut){let c=u.tail,p=u.head[1].byte_offset;return new $(new qe(E(f),C,c,p+1))}else if(a instanceof pt){let c=u.tail;if(c instanceof _)return T(e(c),d=>{let x=d[0],b=d[1];return ht(Qt,b,(P,v)=>{let I=P.byte_offset;return new $(new qe(E(f),new g(x),v,I+1))})});if(c.head[0]instanceof ut){let p=u.head[1].byte_offset,d=c.head,x=c.tail,b=c.head[1].byte_offset;if(t instanceof g){let P=t[0],v=P(new S(p,p+1)),I=new qe(E(f),new g(v),x,b+1);return new $(I)}else return We(h(d,x))}else return T(e(c),d=>{let x=d[0],b=d[1];return ht(Qt,b,(P,v)=>{let I=P.byte_offset;return new $(new qe(E(f),new g(x),v,I+1))})})}else return zt(e,t,f,u)}}else{let u=l,a=i.head[1];return new y(new A(u,a))}}});{let r=s.head[0];if(r instanceof ut){let o=s.tail,i=s.head[1].byte_offset;return new $(new qe(E(n),C,o,i+1))}else if(r instanceof D){let o=s.tail;if(o instanceof _)return T(e(s),i=>{let f=i[0],l=i[1],u=h(f,n);if(l instanceof _)return new y(H);{let a=l.head[0];if(a instanceof ut){let c=l.tail,p=l.head[1].byte_offset;return new $(new qe(E(u),C,c,p+1))}else if(a instanceof D){let c=l.tail;if(c instanceof _)return zt(e,t,u,c);{let p=c.head[0];if(p instanceof ut){let d=c.tail,x=c.head[1].byte_offset;return new $(new qe(E(u),C,d,x+1))}else if(p instanceof pt){let d=c.tail;if(d instanceof _)return T(e(d),b=>{let P=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new g(P),F,L+1))})});if(d.head[0]instanceof ut){let x=c.head[1].byte_offset,b=d.head,P=d.tail,v=d.head[1].byte_offset;if(t instanceof g){let I=t[0],F=I(new S(x,x+1)),L=new qe(E(u),new g(F),P,v+1);return new $(L)}else return We(h(b,P))}else return T(e(d),b=>{let P=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new g(P),F,L+1))})})}else return zt(e,t,u,c)}}else{let c=a,p=l.head[1];return new y(new A(c,p))}}});if(o.head[0]instanceof ut&&!(n instanceof _)){let i=o.tail,f=o.head[1].byte_offset;return new $(new qe(E(n),C,i,f+1))}else return T(e(s),i=>{let f=i[0],l=i[1],u=h(f,n);if(l instanceof _)return new y(H);{let a=l.head[0];if(a instanceof ut){let c=l.tail,p=l.head[1].byte_offset;return new $(new qe(E(u),C,c,p+1))}else if(a instanceof D){let c=l.tail;if(c instanceof _)return zt(e,t,u,c);{let p=c.head[0];if(p instanceof ut){let d=c.tail,x=c.head[1].byte_offset;return new $(new qe(E(u),C,d,x+1))}else if(p instanceof pt){let d=c.tail;if(d instanceof _)return T(e(d),b=>{let P=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new g(P),F,L+1))})});if(d.head[0]instanceof ut){let x=c.head[1].byte_offset,b=d.head,P=d.tail,v=d.head[1].byte_offset;if(t instanceof g){let I=t[0],F=I(new S(x,x+1)),L=new qe(E(u),new g(F),P,v+1);return new $(L)}else return We(h(b,P))}else return T(e(d),b=>{let P=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new g(P),F,L+1))})})}else return zt(e,t,u,c)}}else{let c=a,p=l.head[1];return new y(new A(c,p))}}})}else if(r instanceof pt){let o=s.tail;if(o instanceof _)return T(e(o),f=>{let l=f[0],u=f[1];return ht(Qt,u,(a,c)=>{let p=a.byte_offset;return new $(new qe(E(n),new g(l),c,p+1))})});if(o.head[0]instanceof ut){let i=s.head[1].byte_offset,f=o.head,l=o.tail,u=o.head[1].byte_offset;if(t instanceof g){let a=t[0],c=a(new S(i,i+1)),p=new qe(E(n),new g(c),l,u+1);return new $(p)}else return We(h(f,l))}else return T(e(o),f=>{let l=f[0],u=f[1];return ht(Qt,u,(a,c)=>{let p=a.byte_offset;return new $(new qe(E(n),new g(l),c,p+1))})})}else return T(e(s),o=>{let i=o[0],f=o[1],l=h(i,n);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof ut){let a=f.tail,c=f.head[1].byte_offset;return new $(new qe(E(l),C,a,c+1))}else if(u instanceof D){let a=f.tail;if(a instanceof _)return zt(e,t,l,a);{let c=a.head[0];if(c instanceof ut){let p=a.tail,d=a.head[1].byte_offset;return new $(new qe(E(l),C,p,d+1))}else if(c instanceof pt){let p=a.tail;if(p instanceof _)return T(e(p),x=>{let b=x[0],P=x[1];return ht(Qt,P,(v,I)=>{let F=v.byte_offset;return new $(new qe(E(l),new g(b),I,F+1))})});if(p.head[0]instanceof ut){let d=a.head[1].byte_offset,x=p.head,b=p.tail,P=p.head[1].byte_offset;if(t instanceof g){let v=t[0],I=v(new S(d,d+1)),F=new qe(E(l),new g(I),b,P+1);return new $(F)}else return We(h(x,b))}else return T(e(p),x=>{let b=x[0],P=x[1];return ht(Qt,P,(v,I)=>{let F=v.byte_offset;return new $(new qe(E(l),new g(b),I,F+1))})})}else return zt(e,t,l,a)}}else{let a=u,c=f.head[1];return new y(new A(a,c))}}})}}function R0(e,t,n){return new Zr(e.imports,e.custom_types,e.type_aliases,e.constants,h(new Hs(E(t),n),e.functions))}function cx(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof g)if(r instanceof _){let i=s[0];return[C,h(i,w),o]}else{if(o instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let i=o.tail;if(i instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let f=s[0],l=r.head,u=r.tail,a=o.head,c=i.head,p=i.tail;if(lx(l)>=lx(f)){let x=new S(c.location.start,a.location.end),b=new wi(x,l,c,a),P=h(b,p);e=new g(f),t=u,n=P}else return[C,h(f,h(l,u)),o]}}}else if(r instanceof _){if(o instanceof _)return[C,r,o];if(o.tail instanceof _){let i=o.head;return[new g(i),r,o]}else throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{})}else{if(o instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let i=o.tail;if(i instanceof _)throw Nt("panic",Ma,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let f=r.head,l=r.tail,u=o.head,a=i.head,c=i.tail,p=h(new wi(new S(a.location.start,u.location.end),f,a,u),c);e=C,t=l,n=p}}}}}function B0(e){return e instanceof jo?new $(P0):e instanceof mn?new $(v0):e instanceof Do?new $(S0):e instanceof Ls?new $(I0):e instanceof No?new $(h0):e instanceof qo?new $(g0):e instanceof Uo?new $(m0):e instanceof Vo?new $(w0):e instanceof Go?new $(L0):e instanceof Ho?new $(T0):e instanceof zo?new $(E0):e instanceof Wo?new $(C0):e instanceof Ko?new $(F0):e instanceof Xo?new $(x0):e instanceof Jo?new $(b0):e instanceof Yo?new $(_0):e instanceof Zo?new $(k0):e instanceof Cn?new $(A0):e instanceof ei?new $($0):e instanceof ti?new $(d0):e instanceof ni?new $(p0):e instanceof ri?new $(u0):e instanceof si?new $(y0):new y(void 0)}function O0(e){if(e instanceof _)return new y(void 0);{let t=e.tail,n=e.head[0];return W(B0(n),s=>[s,t])}}function de(e,t){if(e instanceof _)return T(t(e),n=>{let s=n[0],r=n[1];return new $([new Yr(s),r])});{let n=e.tail;if(n instanceof _)return T(t(e),s=>{let r=s[0],o=s[1];return new $([new Yr(r),o])});{let s=e.head[0];if(s instanceof B&&n.head[0]instanceof Zt){let r=e.head[1],o=n.tail,i=n.head[1],f=s[0];if(o instanceof _)return T(t(o),l=>{let u=l[0],a=l[1];return new $([new Xs(f,new S(r.byte_offset,i.byte_offset+1),u),a])});{let l=o.head[0];return l instanceof q?new $([new Js(f,new S(r.byte_offset,i.byte_offset+1)),o]):l instanceof D?new $([new Js(f,new S(r.byte_offset,i.byte_offset+1)),o]):T(t(o),u=>{let a=u[0],c=u[1];return new $([new Xs(f,new S(r.byte_offset,i.byte_offset+1),a),c])})}}else return T(t(e),r=>{let o=r[0],i=r[1];return new $([new Yr(o),i])})}}}function Z(e,t){return e+rn(t)}function se(e,t){return new S(e,e+rn(t))}function lt(e,t,n,s){if(t instanceof _)return new y(H);{let r=t.head[0];if(mt(r,s)){let o=t.tail,i=t.head[1].byte_offset;return new $([E(e),Z(i,Aa(r)),o])}else return T(n(t),o=>{let i=o[0],f=o[1];if(f instanceof _)return new y(H);{let l=f.head[0];if(l instanceof D){let u=f.tail;return lt(h(i,e),u,n,s)}else{let u=l;if(mt(u,s)){let a=f.tail,c=f.head[1].byte_offset,p=Z(c,Aa(u));return new $([E(h(i,e)),p,a])}else{let a=l,c=f.head[1];return new y(new A(a,c))}}}})}}function _x(e,t,n){return T((()=>{if(n instanceof _)return new y(H);{let s=n.head[0];if(s instanceof B){let r=n.tail;if(r instanceof _){let o=s[0];if(o==="bytes"){let i=r;return new $([fi,i])}else if(o==="binary"){let i=r;return new $([fi,i])}else if(o==="int"){let i=r;return new $([Ap,i])}else if(o==="float"){let i=r;return new $([Mp,i])}else if(o==="bits"){let i=r;return new $([ui,i])}else if(o==="bit_string"){let i=r;return new $([ui,i])}else if(o==="utf8"){let i=r;return new $([Rp,i])}else if(o==="utf16"){let i=r;return new $([Bp,i])}else if(o==="utf32"){let i=r;return new $([Op,i])}else if(o==="utf8_codepoint"){let i=r;return new $([jp,i])}else if(o==="utf16_codepoint"){let i=r;return new $([Dp,i])}else if(o==="utf32_codepoint"){let i=r;return new $([Np,i])}else if(o==="signed"){let i=r;return new $([qp,i])}else if(o==="unsigned"){let i=r;return new $([Up,i])}else if(o==="big"){let i=r;return new $([Vp,i])}else if(o==="little"){let i=r;return new $([Gp,i])}else if(o==="native"){let i=r;return new $([Hp,i])}else{let i=s,f=n.head[1];return new y(new A(i,f))}}else if(r.head[0]instanceof Ye){let o=s[0];if(o==="size"){let i=r.tail;return T(e(i),f=>{let l=f[0],u=f[1];return ht(wt,u,(a,c)=>new $([new w$(l),c]))})}else if(o==="unit"){let i=r.tail;if(i instanceof _){let f=s,l=n.head[1];return new y(new A(f,l))}else{let f=i.tail;if(f instanceof _){let l=s,u=n.head[1];return new y(new A(l,u))}else{let l=i.head[0];if(l instanceof ue&&f.head[0]instanceof q){let u=n.head[1],a=f.tail,c=l[0],p=bn(c);if(p instanceof $){let d=p[0];return new $([new k$(d),a])}else return new y(new A(new ue(c),u))}else{let u=s,a=n.head[1];return new y(new A(u,a))}}}}else if(o==="bytes"){let i=r;return new $([fi,i])}else if(o==="binary"){let i=r;return new $([fi,i])}else if(o==="int"){let i=r;return new $([Ap,i])}else if(o==="float"){let i=r;return new $([Mp,i])}else if(o==="bits"){let i=r;return new $([ui,i])}else if(o==="bit_string"){let i=r;return new $([ui,i])}else if(o==="utf8"){let i=r;return new $([Rp,i])}else if(o==="utf16"){let i=r;return new $([Bp,i])}else if(o==="utf32"){let i=r;return new $([Op,i])}else if(o==="utf8_codepoint"){let i=r;return new $([jp,i])}else if(o==="utf16_codepoint"){let i=r;return new $([Dp,i])}else if(o==="utf32_codepoint"){let i=r;return new $([Np,i])}else if(o==="signed"){let i=r;return new $([qp,i])}else if(o==="unsigned"){let i=r;return new $([Up,i])}else if(o==="big"){let i=r;return new $([Vp,i])}else if(o==="little"){let i=r;return new $([Gp,i])}else if(o==="native"){let i=r;return new $([Hp,i])}else{let i=s,f=n.head[1];return new y(new A(i,f))}}else{let o=s[0];if(o==="bytes"){let i=r;return new $([fi,i])}else if(o==="binary"){let i=r;return new $([fi,i])}else if(o==="int"){let i=r;return new $([Ap,i])}else if(o==="float"){let i=r;return new $([Mp,i])}else if(o==="bits"){let i=r;return new $([ui,i])}else if(o==="bit_string"){let i=r;return new $([ui,i])}else if(o==="utf8"){let i=r;return new $([Rp,i])}else if(o==="utf16"){let i=r;return new $([Bp,i])}else if(o==="utf32"){let i=r;return new $([Op,i])}else if(o==="utf8_codepoint"){let i=r;return new $([jp,i])}else if(o==="utf16_codepoint"){let i=r;return new $([Dp,i])}else if(o==="utf32_codepoint"){let i=r;return new $([Np,i])}else if(o==="signed"){let i=r;return new $([qp,i])}else if(o==="unsigned"){let i=r;return new $([Up,i])}else if(o==="big"){let i=r;return new $([Vp,i])}else if(o==="little"){let i=r;return new $([Gp,i])}else if(o==="native"){let i=r;return new $([Hp,i])}else{let i=s,f=n.head[1];return new y(new A(i,f))}}}else if(s instanceof ue){let r=n.tail,o=n.head[1],i=s[0],f=bn(i);if(f instanceof $){let l=f[0];return new $([new g$(l),r])}else return new y(new A(new ue(i),o))}else{let r=s,o=n.head[1];return new y(new A(r,o))}}})(),s=>{let r=s[0],o=s[1],i=h(r,t);if(o instanceof _)return new $([E(i),o]);if(o.head[0]instanceof mn){let f=o.tail;return _x(e,i,f)}else return new $([E(i),o])})}function j0(e,t){if(t instanceof _)return new $([w,t]);if(t.head[0]instanceof Zt){let n=t.tail;return _x(e,w,n)}else return new $([w,t])}function pi(e,t){return T(e(t),n=>{let s=n[0],r=n[1],o=j0(e,r);return T(o,i=>{let f=i[0],l=i[1];return new $([[s,f],l])})})}function Ga(e,t,n,s){return T(n(t),r=>{let o=r[0],i=r[1],f=h(o,e);if(i instanceof _)return new $([E(f),i]);{let l=i.head[0];if(mt(l,s)){let u=i.tail;return Ga(f,u,n,s)}else return new $([E(f),i])}})}function Ft(e,t){if(t instanceof _)return T(de(t,Rn),s=>{let r=s[0],o=s[1],i=h(r,e);if(o instanceof _)return new y(H);{let f=o.head[0];if(f instanceof q){let l=o.tail,u=o.head[1].byte_offset;return new $(new Lt(i,!1,u+1,l))}else if(f instanceof D){let l=o.tail;if(l instanceof _)return Ft(i,l);{let u=l.tail;if(u instanceof _)return Ft(i,l);if(l.head[0]instanceof pt&&u.head[0]instanceof q){let a=u.tail,c=u.head[1].byte_offset;return new $(new Lt(i,!0,c+1,a))}else return Ft(i,l)}}else{let l=f,u=o.head[1];return new y(new A(l,u))}}});{let n=t.head[0];if(n instanceof q){let s=t.tail,r=t.head[1].byte_offset;return new $(new Lt(e,!1,r+1,s))}else if(n instanceof pt){let s=t.tail;if(s instanceof _)return T(de(t,Rn),o=>{let i=o[0],f=o[1],l=h(i,e);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset;return new $(new Lt(l,!1,c+1,a))}else if(u instanceof D){let a=f.tail;if(a instanceof _)return Ft(l,a);{let c=a.tail;if(c instanceof _)return Ft(l,a);if(a.head[0]instanceof pt&&c.head[0]instanceof q){let p=c.tail,d=c.head[1].byte_offset;return new $(new Lt(l,!0,d+1,p))}else return Ft(l,a)}}else{let a=u,c=f.head[1];return new y(new A(a,c))}}});{let r=s.tail;if(r instanceof _)if(s.head[0]instanceof q){let o=r,i=s.head[1].byte_offset;return new $(new Lt(e,!0,i+1,o))}else return T(de(t,Rn),i=>{let f=i[0],l=i[1],u=h(f,e);if(l instanceof _)return new y(H);{let a=l.head[0];if(a instanceof q){let c=l.tail,p=l.head[1].byte_offset;return new $(new Lt(u,!1,p+1,c))}else if(a instanceof D){let c=l.tail;if(c instanceof _)return Ft(u,c);{let p=c.tail;if(p instanceof _)return Ft(u,c);if(c.head[0]instanceof pt&&p.head[0]instanceof q){let d=p.tail,x=p.head[1].byte_offset;return new $(new Lt(u,!0,x+1,d))}else return Ft(u,c)}}else{let c=a,p=l.head[1];return new y(new A(c,p))}}});else{let o=s.head[0];if(o instanceof q){let i=r,f=s.head[1].byte_offset;return new $(new Lt(e,!0,f+1,i))}else if(o instanceof D&&r.head[0]instanceof q){let i=r.tail,f=r.head[1].byte_offset;return new $(new Lt(e,!0,f+1,i))}else return T(de(t,Rn),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset;return new $(new Lt(a,!1,d+1,p))}else if(c instanceof D){let p=u.tail;if(p instanceof _)return Ft(a,p);{let d=p.tail;if(d instanceof _)return Ft(a,p);if(p.head[0]instanceof pt&&d.head[0]instanceof q){let x=d.tail,b=d.head[1].byte_offset;return new $(new Lt(a,!0,b+1,x))}else return Ft(a,p)}}else{let p=c,d=u.head[1];return new y(new A(p,d))}}})}}}else return T(de(t,Rn),r=>{let o=r[0],i=r[1],f=h(o,e);if(i instanceof _)return new y(H);{let l=i.head[0];if(l instanceof q){let u=i.tail,a=i.head[1].byte_offset;return new $(new Lt(f,!1,a+1,u))}else if(l instanceof D){let u=i.tail;if(u instanceof _)return Ft(f,u);{let a=u.tail;if(a instanceof _)return Ft(f,u);if(u.head[0]instanceof pt&&a.head[0]instanceof q){let c=a.tail,p=a.head[1].byte_offset;return new $(new Lt(f,!0,p+1,c))}else return Ft(f,u)}}else{let u=l,a=i.head[1];return new y(new A(u,a))}}})}}function fx(e,t,n,s,r){if(n instanceof _){let o=new S(s,Z(r,t)),i=new Gs(o,e,t,w,!1);return new $([i,n])}else if(n.head[0]instanceof Ye){let o=n.tail,i=Ft(w,o);return T(i,f=>{let l=f.fields,u=f.spread,a=f.end,c=f.remaining_tokens,p=E(l),d=new Gs(new S(s,a),e,t,p,u);return new $([d,c])})}else{let o=new S(s,Z(r,t)),i=new Gs(o,e,t,w,!1);return new $([i,n])}}function Rn(e){return T((()=>{if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail;if(n instanceof _){let s=n,r=e.head[1].byte_offset,o=t[0];return new $([new Sr(se(r,o),o),s])}else{let s=n.tail;if(s instanceof _){let r=n,o=e.head[1].byte_offset,i=t[0];return new $([new Sr(se(o,i),i),r])}else if(n.head[0]instanceof Zn){let r=s.head[0];if(r instanceof K){let o=e.head[1].byte_offset,i=t[0],f=s.tail,l=s.head[1].byte_offset,u=r[0];return fx(new g(i),u,f,o,l)}else{let o=n,i=e.head[1].byte_offset,f=t[0];return new $([new Sr(se(i,f),f),o])}}else{let r=n,o=e.head[1].byte_offset,i=t[0];return new $([new Sr(se(o,i),i),r])}}}else if(t instanceof K){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return fx(C,r,n,s,s)}else if(t instanceof it){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return new $([new Ws(new S(s,Z(s,r)+1),r),n])}else if(t instanceof ue){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return new $([new Da(se(s,r),r),n])}else if(t instanceof Et){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return new $([new Zp(se(s,r),r),n])}else if(t instanceof hn){let n=e.tail;if(n instanceof _){let s=n,r=e.head[1].byte_offset,o=t[0];return new $([new tn(new S(r,Z(r,o)+2),o),s])}else{let s=n.tail;if(s instanceof _){let r=n,o=e.head[1].byte_offset,i=t[0];return new $([new tn(new S(o,Z(o,i)+2),i),r])}else{let r=s.tail;if(r instanceof _)if(n.head[0]instanceof Cn){let o=s.head[0];if(o instanceof B){let i=e.head[1].byte_offset,f=t[0],l=r,u=s.head[1].byte_offset,a=o[0],c=new S(i,Z(u,a)),p=new Mn(c,f,C,new At(a));return new $([p,l])}else if(o instanceof it){let i=e.head[1].byte_offset,f=t[0],l=r,u=s.head[1].byte_offset,a=o[0],c=new S(i,Z(u,a)+1),p=new Mn(c,f,C,new wn(a));return new $([p,l])}else{let i=n,f=e.head[1].byte_offset,l=t[0];return new $([new tn(new S(f,Z(f,l)+2),l),i])}}else{let o=n,i=e.head[1].byte_offset,f=t[0];return new $([new tn(new S(i,Z(i,f)+2),f),o])}else{let o=r.tail;if(o instanceof _)if(n.head[0]instanceof Cn){let i=s.head[0];if(i instanceof B){let f=e.head[1].byte_offset,l=t[0],u=r,a=s.head[1].byte_offset,c=i[0],p=new S(f,Z(a,c)),d=new Mn(p,l,C,new At(c));return new $([d,u])}else if(i instanceof it){let f=e.head[1].byte_offset,l=t[0],u=r,a=s.head[1].byte_offset,c=i[0],p=new S(f,Z(a,c)+1),d=new Mn(p,l,C,new wn(c));return new $([d,u])}else{let f=n,l=e.head[1].byte_offset,u=t[0];return new $([new tn(new S(l,Z(l,u)+2),u),f])}}else{let i=n,f=e.head[1].byte_offset,l=t[0];return new $([new tn(new S(f,Z(f,l)+2),l),i])}else{let i=n.head[0];if(i instanceof _t){let f=s.head[0];if(f instanceof B&&r.head[0]instanceof Cn){let l=o.head[0];if(l instanceof B){let u=e.head[1].byte_offset,a=t[0],c=o.tail,p=o.head[1].byte_offset,d=f[0],x=l[0],b=new S(u,Z(p,x)),P=new Mn(b,a,new g(new At(d)),new At(x));return new $([P,c])}else if(l instanceof it){let u=e.head[1].byte_offset,a=t[0],c=o.tail,p=o.head[1].byte_offset,d=f[0],x=l[0],b=new S(u,Z(p,x)+1),P=new Mn(b,a,new g(new At(d)),new wn(x));return new $([P,c])}else{let u=n,a=e.head[1].byte_offset,c=t[0];return new $([new tn(new S(a,Z(a,c)+2),c),u])}}else if(f instanceof it&&r.head[0]instanceof Cn){let l=o.head[0];if(l instanceof B){let u=e.head[1].byte_offset,a=t[0],c=o.tail,p=o.head[1].byte_offset,d=f[0],x=l[0],b=new S(u,Z(p,x)),P=new Mn(b,a,new g(new wn(d)),new At(x));return new $([P,c])}else{let u=n,a=e.head[1].byte_offset,c=t[0];return new $([new tn(new S(a,Z(a,c)+2),c),u])}}else{let l=n,u=e.head[1].byte_offset,a=t[0];return new $([new tn(new S(u,Z(u,a)+2),a),l])}}else if(i instanceof Cn){let f=s.head[0];if(f instanceof B){let l=e.head[1].byte_offset,u=t[0],a=r,c=s.head[1].byte_offset,p=f[0],d=new S(l,Z(c,p)),x=new Mn(d,u,C,new At(p));return new $([x,a])}else if(f instanceof it){let l=e.head[1].byte_offset,u=t[0],a=r,c=s.head[1].byte_offset,p=f[0],d=new S(l,Z(c,p)+1),x=new Mn(d,u,C,new wn(p));return new $([x,a])}else{let l=n,u=e.head[1].byte_offset,a=t[0];return new $([new tn(new S(u,Z(u,a)+2),a),l])}}else{let f=n,l=e.head[1].byte_offset,u=t[0];return new $([new tn(new S(l,Z(l,u)+2),u),f])}}}}}}else if(t instanceof Sn){let n=e.tail,s=e.head[1].byte_offset,r=zt(Rn,new g(o=>new Ws(o,"")),w,n);return W(r,o=>{let i=o.values,f=o.spread,l=o.remaining_tokens,u=o.end;return[new Na(new S(s,u),i,f),l]})}else if(t instanceof In){let n=e.tail;if(n instanceof _){let s=t,r=e.head[1];return new y(new A(s,r))}else if(n.head[0]instanceof Ye){let s=e.head[1].byte_offset,r=n.tail,o=lt(w,r,Rn,wt);return T(o,i=>{let f=i[0],l=i[1],u=i[2];return new $([new Qp(new S(s,l),f),u])})}else{let s=t,r=e.head[1];return new y(new A(s,r))}}else if(t instanceof Fn){let n=e.tail,s=e.head[1].byte_offset,o=lt(w,n,i=>pi(Rn,i),kr);return T(o,i=>{let f=i[0],l=i[1],u=i[2];return new $([new t$(new S(s,l),f),u])})}else{let n=t,s=e.head[1];return new y(new A(n,s))}}})(),t=>{let n=t[0],s=t[1];if(s instanceof _)return new $([n,s]);{let r=s.tail;if(r instanceof _)return new $([n,s]);if(s.head[0]instanceof _t){let o=r.head[0];if(o instanceof B){let i=r.tail,f=r.head[1].byte_offset,l=o[0],u=new S(n.location.start,Z(f,l)),a=new e$(u,n,l);return new $([a,i])}else return new $([n,s])}else return new $([n,s])}})}function Wp(e,t,n,s,r){return T((()=>{if(n instanceof _){let o=r+rn(e);return new $([w,o,n])}else if(n.head[0]instanceof Ye){let o=n.tail;return lt(w,o,Bn,wt)}else{let o=r+rn(e);return new $([w,o,n])}})(),o=>{let i=o[0],f=o[1],l=o[2],u=new L$(new S(s,f),e,t,i);return new $([u,l])})}function D0(e,t){let n=lt(w,t,Bn,wt);return T(n,s=>{let r=s[0],o=s[1],i=s[2],f=new S(e,o);return new $([new A$(f,r),i])})}function N0(e,t){let n=lt(w,t,Bn,wt);return T(n,s=>{let r=s[0],o=s[2];return ht(La,o,(i,f)=>T(Bn(f),l=>{let u=l[0],a=l[1],c=new S(e,u.location.end);return new $([new M$(c,r,u),a])}))})}function Bn(e){if(e instanceof _)return new y(H);{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof B){let s=t,r=e.head[1].byte_offset,o=n[0],i=new hi(se(r,o),o);return new $([i,s])}else if(n instanceof K){let s=t,r=e.head[1].byte_offset,o=n[0];return Wp(o,C,s,r,r)}else if(n instanceof it){let s=t,r=e.head[1].byte_offset,o=n[0],i=new Yc(new S(r,Z(r,o)+1),o);return new $([i,s])}else{let s=n,r=e.head[1];return new y(new A(s,r))}}else{let n=e.head[0];if(n instanceof B){let s=t.tail;if(s instanceof _){let r=t,o=e.head[1].byte_offset,i=n[0],f=new hi(se(o,i),i);return new $([f,r])}else if(t.head[0]instanceof Zn){let r=s.head[0];if(r instanceof K){let o=e.head[1].byte_offset,i=n[0],f=s.tail,l=s.head[1].byte_offset,u=r[0];return Wp(u,new g(i),f,o,l)}else{let o=t,i=e.head[1].byte_offset,f=n[0],l=new hi(se(i,f),f);return new $([l,o])}}else{let r=t,o=e.head[1].byte_offset,i=n[0],f=new hi(se(o,i),i);return new $([f,r])}}else if(n instanceof K){let s=t,r=e.head[1].byte_offset,o=n[0];return Wp(o,C,s,r,r)}else if(n instanceof it){let s=t,r=e.head[1].byte_offset,o=n[0],i=new Yc(new S(r,Z(r,o)+1),o);return new $([i,s])}else if(n instanceof Jt&&t.head[0]instanceof Ye){let s=e.head[1].byte_offset,r=t.tail;return N0(s,r)}else if(n instanceof In&&t.head[0]instanceof Ye){let s=e.head[1].byte_offset,r=t.tail;return D0(s,r)}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}}function wx(e,t){if(t instanceof _)return new $([C,e,t]);if(t.head[0]instanceof ii){let n=t.tail;return T(Bn(n),s=>{let r=s[0],o=s[1];return new $([new g(r),r.location.end,o])})}else return new $([C,e,t])}function Ha(e){if(e instanceof _)return new $([C,e]);if(e.head[0]instanceof Zt){let t=e.tail;return W(Bn(t),n=>{let s=n[0],r=n[1];return[new g(s),r]})}else return new $([C,e])}function q0(e){return T((()=>{if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,s=t[0];return new $([new At(s),n])}else if(t instanceof it){let n=e.tail,s=t[0];return new $([new wn(s),n])}else{let n=t,s=e.head[1];return new y(new A(n,s))}}})(),t=>{let n=t[0],s=t[1];return T(Ha(s),r=>{let o=r[0],i=r[1];return new $([new y$(n,o),i])})})}function ux(e){return T(Rn(e),t=>{let n=t[0],s=t[1];return T(Ha(s),r=>{let o=r[0],i=r[1];return new $([new Yp(n,o),i])})})}function Ln(e,t,n,s,r){if(r instanceof _)return new y(H);if(r.head[0]instanceof q){let o=r.tail,i=r.head[1].byte_offset,f=new S(t.location.start,i+1),l=new _n(f,e,t,n,E(s));return ce(l,o)}else return T(de(r,j),o=>{let i=o[0],f=o[1],l=h(i,s);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset,p=new S(t.location.start,c+1),d=new _n(p,e,t,n,E(l));return ce(d,a)}else if(u instanceof D){let a=f.tail;return Ln(e,t,n,l,a)}else{let a=u,c=f.head[1];return new y(new A(a,c))}}})}function ze(e,t,n){if(n instanceof _)return new y(H);{let s=n.head[0];if(s instanceof B){let r=n.tail;if(r instanceof _)return T(de(n,j),o=>{let i=o[0],f=o[1],l=h(i,e);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset,p=new S(t.location.start,c+1),d=new $e(p,t,E(l));return ce(d,a)}else if(u instanceof D){let a=f.tail;return ze(l,t,a)}else{let a=u,c=f.head[1];return new y(new A(a,c))}}});{let o=r.tail;if(o instanceof _)return T(de(n,j),i=>{let f=i[0],l=i[1],u=h(f,e);if(l instanceof _)return new y(H);{let a=l.head[0];if(a instanceof q){let c=l.tail,p=l.head[1].byte_offset,d=new S(t.location.start,p+1),x=new $e(d,t,E(u));return ce(x,c)}else if(a instanceof D){let c=l.tail;return ze(u,t,c)}else{let c=a,p=l.head[1];return new y(new A(c,p))}}});{let i=o.tail;if(i instanceof _)if(r.head[0]instanceof Zt){let f=o.head[0];if(f instanceof it&&f[0]===""){let l=s[0],u=i;return Ln(new g(l),t,E(e),w,u)}else return T(de(n,j),l=>{let u=l[0],a=l[1],c=h(u,e);if(a instanceof _)return new y(H);{let p=a.head[0];if(p instanceof q){let d=a.tail,x=a.head[1].byte_offset,b=new S(t.location.start,x+1),P=new $e(b,t,E(c));return ce(P,d)}else if(p instanceof D){let d=a.tail;return ze(c,t,d)}else{let d=p,x=a.head[1];return new y(new A(d,x))}}})}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else{let f=i.tail;if(f instanceof _)if(r.head[0]instanceof Zt){let l=o.head[0];if(l instanceof it){let u=i.head[0];if(u instanceof q)if(l[0]===""){let a=s[0],c=f,p=i.head[1].byte_offset,d=new S(t.location.start,p+1),x=new _n(d,new g(a),t,E(e),w);return ce(x,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}});else if(u instanceof D)if(l[0]===""){let a=s[0],c=f;return Ln(new g(a),t,E(e),w,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}});else if(l[0]===""){let a=s[0],c=i;return Ln(new g(a),t,E(e),w,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}})}else return T(de(n,j),u=>{let a=u[0],c=u[1],p=h(a,e);if(c instanceof _)return new y(H);{let d=c.head[0];if(d instanceof q){let x=c.tail,b=c.head[1].byte_offset,P=new S(t.location.start,b+1),v=new $e(P,t,E(p));return ce(v,x)}else if(d instanceof D){let x=c.tail;return ze(p,t,x)}else{let x=d,b=c.head[1];return new y(new A(x,b))}}})}else return T(de(n,j),l=>{let u=l[0],a=l[1],c=h(u,e);if(a instanceof _)return new y(H);{let p=a.head[0];if(p instanceof q){let d=a.tail,x=a.head[1].byte_offset,b=new S(t.location.start,x+1),P=new $e(b,t,E(c));return ce(P,d)}else if(p instanceof D){let d=a.tail;return ze(c,t,d)}else{let d=p,x=a.head[1];return new y(new A(d,x))}}});else if(r.head[0]instanceof Zt){let l=o.head[0];if(l instanceof it){let u=i.head[0];if(u instanceof q)if(l[0]===""){let a=s[0],c=f,p=i.head[1].byte_offset,d=new S(t.location.start,p+1),x=new _n(d,new g(a),t,E(e),w);return ce(x,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}});else if(u instanceof D)if(f.head[0]instanceof q)if(l[0]===""){let a=s[0],c=f.tail,p=f.head[1].byte_offset,d=new S(t.location.start,p+1),x=new _n(d,new g(a),t,E(e),w);return ce(x,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}});else if(l[0]===""){let a=s[0],c=f;return Ln(new g(a),t,E(e),w,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}});else if(l[0]===""){let a=s[0],c=i;return Ln(new g(a),t,E(e),w,c)}else return T(de(n,j),a=>{let c=a[0],p=a[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,P=p.head[1].byte_offset,v=new S(t.location.start,P+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,P=p.head[1];return new y(new A(b,P))}}})}else return T(de(n,j),u=>{let a=u[0],c=u[1],p=h(a,e);if(c instanceof _)return new y(H);{let d=c.head[0];if(d instanceof q){let x=c.tail,b=c.head[1].byte_offset,P=new S(t.location.start,b+1),v=new $e(P,t,E(p));return ce(v,x)}else if(d instanceof D){let x=c.tail;return ze(p,t,x)}else{let x=d,b=c.head[1];return new y(new A(x,b))}}})}else return T(de(n,j),l=>{let u=l[0],a=l[1],c=h(u,e);if(a instanceof _)return new y(H);{let p=a.head[0];if(p instanceof q){let d=a.tail,x=a.head[1].byte_offset,b=new S(t.location.start,x+1),P=new $e(b,t,E(c));return ce(P,d)}else if(p instanceof D){let d=a.tail;return ze(c,t,d)}else{let d=p,x=a.head[1];return new y(new A(d,x))}}})}}}}else if(s instanceof it){let r=n.tail;if(r instanceof _)if(s[0]===""){let o=r;return Ln(C,t,E(e),w,o)}else return T(de(n,j),o=>{let i=o[0],f=o[1],l=h(i,e);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let a=f.tail,c=f.head[1].byte_offset,p=new S(t.location.start,c+1),d=new $e(p,t,E(l));return ce(d,a)}else if(u instanceof D){let a=f.tail;return ze(l,t,a)}else{let a=u,c=f.head[1];return new y(new A(a,c))}}});else{let o=r.tail;if(o instanceof _){let i=r.head[0];if(i instanceof q)if(s[0]===""){let f=o,l=r.head[1].byte_offset,u=new S(t.location.start,l+1),a=new _n(u,C,t,E(e),w);return ce(a,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(i instanceof D)if(s[0]===""){let f=o;return Ln(C,t,E(e),w,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(s[0]===""){let f=r;return Ln(C,t,E(e),w,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}})}else{let i=r.head[0];if(i instanceof q)if(s[0]===""){let f=o,l=r.head[1].byte_offset,u=new S(t.location.start,l+1),a=new _n(u,C,t,E(e),w);return ce(a,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(i instanceof D)if(o.head[0]instanceof q)if(s[0]===""){let f=o.tail,l=o.head[1].byte_offset,u=new S(t.location.start,l+1),a=new _n(u,C,t,E(e),w);return ce(a,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(s[0]===""){let f=o;return Ln(C,t,E(e),w,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(s[0]===""){let f=r;return Ln(C,t,E(e),w,f)}else return T(de(n,j),f=>{let l=f[0],u=f[1],a=h(l,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new S(t.location.start,d+1),b=new $e(x,t,E(a));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(a,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}})}}}else if(s instanceof q){let r=n.tail,o=n.head[1].byte_offset,i=new S(t.location.start,o+1),f=new $e(i,t,E(e));return ce(f,r)}else return T(de(n,j),r=>{let o=r[0],i=r[1],f=h(o,e);if(i instanceof _)return new y(H);{let l=i.head[0];if(l instanceof q){let u=i.tail,a=i.head[1].byte_offset,c=new S(t.location.start,a+1),p=new $e(c,t,E(f));return ce(p,u)}else if(l instanceof D){let u=i.tail;return ze(f,t,u)}else{let u=l,a=i.head[1];return new y(new A(u,a))}}})}}function ce(e,t){for(;;){let n=e,s=t;if(s instanceof _)return new $([n,s]);{let r=s.tail;if(r instanceof _)return s.head[0]instanceof Ye?ze(w,n,r):new $([n,s]);{let o=s.head[0];if(o instanceof Ye)return ze(w,n,r);if(o instanceof Zn){let i=r.head[0];if(i instanceof B){let f=r.tail,l=r.head[1].byte_offset,u=i[0],a=new S(n.location.start,Z(l,u));e=new _i(a,n,u),t=f}else if(i instanceof K){let f=r.tail,l=r.head[1].byte_offset,u=i[0],a=new S(n.location.start,Z(l,u));e=new _i(a,n,u),t=f}else if(i instanceof ue){let f=r.tail,l=i,u=r.head[1],a=i[0],c=bn(a);if(c instanceof $){let p=c[0],d=Z(u.byte_offset,a),x=new S(n.location.start,d);e=new n$(x,n,p),t=f}else return new y(new A(l,u))}else return new $([n,s])}else return new $([n,s])}}}}function nr(e,t,n,s){if(e instanceof _){let r=se(n,s),o=t(r,C);return new $([new g(o),e])}else if(e.head[0]instanceof _t){let r=e.tail;return T(j(r),o=>{let i=o[0],f=o[1],l=new S(n,i.location.end),u=t(l,new g(i));return new $([new g(u),f])})}else{let r=se(n,s),o=t(r,C);return new $([new g(o),e])}}function U0(e){if(e instanceof _)return new $([C,e]);if(e.head[0]instanceof Mo){let t=e.tail;return T(j(t),n=>{let s=n[0],r=n[1];return new $([new g(s),r])})}else return new $([C,e])}function V0(e){let n=Ga(w,e,s=>Ga(w,s,Rn,li),Ic);return T(n,s=>{let r=s[0],o=s[1];return T(U0(o),i=>{let f=i[0],l=i[1];return ht(La,l,(u,a)=>W(j(a),c=>{let p=c[0],d=c[1];return[new r$(r,f,p),d]}))})})}function B$(e,t){return T(V0(t),n=>{let s=n[0],r=n[1],o=h(s,e);if(r instanceof _)return B$(o,r);if(r.head[0]instanceof ft){let i=r.tail,f=r.head[1].byte_offset;return new $([E(o),i,f+1])}else return B$(o,r)})}function gx(e,t){return T(j(t),n=>{let s=n[0],r=n[1],o=h(s,e);if(r instanceof _)return new $([E(o),r]);if(r.head[0]instanceof D){let i=r.tail;return gx(o,i)}else return new $([E(o),r])})}function Ra(e,t){return T(gx(w,e),n=>{let s=n[0],r=n[1];return ht(Ia,r,(o,i)=>T(B$(w,i),f=>{let l=f[0],u=f[1],a=f[2];return new $([new g(new Ua(new S(t,a),s,l)),u])}))})}function Ba(e,t){return ht(Ca,e,(n,s)=>{let r=lt(w,s,q0,wt);return T(r,o=>{let i=o[0],f=o[2];return T(wx(0,f),l=>{let u=l[0],a=l[2];return ht(Ia,a,(c,p)=>T(Er(w,p),d=>{let x=d[0],b=d[1],P=d[2];return new $([new g(new qa(new S(t,b),i,u,x)),P])}))})})})}function G0(e){if(e instanceof _)return new y(H);{let t=e.tail;if(t instanceof _){let n=e.head[0],s=e.head[1];return new y(new A(n,s))}else{let n=e.head[0];if(n instanceof B&&t.head[0]instanceof Zt){let s=t.tail,r=n[0];if(s instanceof _)return T(j(s),o=>{let i=o[0],f=o[1];return new $([new di(r,new g(i)),f])});{let o=s.head[0];return o instanceof q?new $([new di(r,C),s]):o instanceof D?new $([new di(r,C),s]):T(j(s),i=>{let f=i[0],l=i[1];return new $([new di(r,new g(f)),l])})}}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}}function Nc(e,t,n,s){return T(j(n),r=>{let o=r[0],i=r[1];if(i instanceof _)return new $([C,i]);{let f=i.head[0];if(f instanceof q){let l=i.tail,u=i.head[1].byte_offset,a=new S(s,u+1),c=new Uc(a,e,t,o,w);return new $([new g(c),l])}else if(f instanceof D){let l=i.tail,u=lt(w,l,G0,wt);return T(u,a=>{let c=a[0],p=a[1],d=a[2],x=new S(s,p),b=new Uc(x,e,t,o,c);return new $([new g(b),d])})}else return new $([C,i])}})}function An(e,t){return T((()=>{if(e instanceof _)return new $([C,e]);{let n=e.tail;if(n instanceof _){let s=e.head[0];if(s instanceof B){let r=n,o=e.head[1].byte_offset,i=s[0],f=se(o,i);return new $([new g(new Pt(f,i)),r])}else if(s instanceof K){let r=n,o=e.head[1].byte_offset,i=s[0];return new $([new g(new Pt(se(o,i),i)),r])}else if(s instanceof ue){let r=n,o=e.head[1].byte_offset,i=s[0],f=se(o,i);return new $([new g(new yr(f,i)),r])}else if(s instanceof Et){let r=n,o=e.head[1].byte_offset,i=s[0],f=se(o,i);return new $([new g(new Pr(f,i)),r])}else if(s instanceof hn){let r=n,o=e.head[1].byte_offset,i=s[0],f=new S(o,Z(o,i)+2);return new $([new g(new Bs(f,i)),r])}else if(s instanceof Wn){let r=n,o=e.head[1].byte_offset;return Ra(r,o)}else if(s instanceof Kn){let r=n,o=e.head[1].byte_offset,i;if(t instanceof Jr)i=W(j(r),l=>{let u=l[0],a=l[1];return[new S(o,u.location.end),new g(u),a]});else{let l=se(o,"echo");i=new $([l,C,r])}return T(i,l=>{let u=l[0],a=l[1],c=l[2];if(c instanceof _)return new $([new g(new St(u,a,C)),c]);if(c.head[0]instanceof _t){let p=c.tail;return W(j(p),d=>{let x=d[0],b=d[1],P=new S(u.start,x.location.end);return[new g(new St(P,a,new g(x))),b]})}else return new $([new g(new St(u,a,C)),c])})}else if(s instanceof Jt){let r=n,o=e.head[1].byte_offset;return Ba(r,o)}else if(s instanceof Xn){let r=n,o=e.head[1].byte_offset;return nr(r,(i,f)=>new Ds(i,f),o,"panic")}else if(s instanceof Jn){let r=n,o=e.head[1].byte_offset;return nr(r,(i,f)=>new Ns(i,f),o,"todo")}else if(s instanceof Yt){let r=n,o=e.head[1].byte_offset;return W(Er(w,r),i=>{let f=i[0],l=i[1],u=i[2];return[new g(new Tr(new S(o,l),f)),u]})}else if(s instanceof Sn){let r=n,o=e.head[1].byte_offset,i=zt(j,C,w,r);return W(i,f=>{let l=f.values,u=f.spread,a=f.remaining_tokens,c=f.end;return[new g(new vr(new S(o,c),l,u)),a]})}else if(s instanceof mn){let r=n,o=e.head[1].byte_offset,i=An(r,xn);return T(i,f=>{let l=f[0],u=f[1];if(l instanceof g){let a=l[0],c=new S(o,a.location.end);return new $([new g(new Os(c,a)),u])}else return We(u)})}else if(s instanceof Yn){let r=n,o=e.head[1].byte_offset,i=An(r,xn);return T(i,f=>{let l=f[0],u=f[1];if(l instanceof g){let a=l[0],c=new S(o,a.location.end);return new $([new g(new js(c,a)),u])}else return We(u)})}else if(s instanceof Fn){let r=n,o=e.head[1].byte_offset,f=lt(w,r,l=>pi(j,l),kr);return W(f,l=>{let u=l[0],a=l[1],c=l[2];return[new g(new qs(new S(o,a),u)),c]})}else return new $([C,e])}else{let s=n.tail;if(s instanceof _){let r=e.head[0];if(r instanceof B){let o=n,i=e.head[1].byte_offset,f=r[0],l=se(i,f);return new $([new g(new Pt(l,f)),o])}else if(r instanceof K){let o=n,i=e.head[1].byte_offset,f=r[0];return new $([new g(new Pt(se(i,f),f)),o])}else if(r instanceof ue){let o=n,i=e.head[1].byte_offset,f=r[0],l=se(i,f);return new $([new g(new yr(l,f)),o])}else if(r instanceof Et){let o=n,i=e.head[1].byte_offset,f=r[0],l=se(i,f);return new $([new g(new Pr(l,f)),o])}else if(r instanceof hn){let o=n,i=e.head[1].byte_offset,f=r[0],l=new S(i,Z(i,f)+2);return new $([new g(new Bs(l,f)),o])}else if(r instanceof Wn){let o=n,i=e.head[1].byte_offset;return Ra(o,i)}else if(r instanceof Kn){let o=n,i=e.head[1].byte_offset,f;if(t instanceof Jr)f=W(j(o),u=>{let a=u[0],c=u[1];return[new S(i,a.location.end),new g(a),c]});else{let u=se(i,"echo");f=new $([u,C,o])}return T(f,u=>{let a=u[0],c=u[1],p=u[2];if(p instanceof _)return new $([new g(new St(a,c,C)),p]);if(p.head[0]instanceof _t){let d=p.tail;return W(j(d),x=>{let b=x[0],P=x[1],v=new S(a.start,b.location.end);return[new g(new St(v,c,new g(b))),P]})}else return new $([new g(new St(a,c,C)),p])})}else if(r instanceof Jt){let o=n,i=e.head[1].byte_offset;return Ba(o,i)}else if(r instanceof Xn){let o=n,i=e.head[1].byte_offset;return nr(o,(f,l)=>new Ds(f,l),i,"panic")}else if(r instanceof Jn){let o=n,i=e.head[1].byte_offset;return nr(o,(f,l)=>new Ns(f,l),i,"todo")}else if(r instanceof Yt){let o=n,i=e.head[1].byte_offset;return W(Er(w,o),f=>{let l=f[0],u=f[1],a=f[2];return[new g(new Tr(new S(i,u),l)),a]})}else if(r instanceof Sn){let o=n,i=e.head[1].byte_offset,f=zt(j,C,w,o);return W(f,l=>{let u=l.values,a=l.spread,c=l.remaining_tokens,p=l.end;return[new g(new vr(new S(i,p),u,a)),c]})}else if(r instanceof mn){let o=n,i=e.head[1].byte_offset,f=An(o,xn);return T(f,l=>{let u=l[0],a=l[1];if(u instanceof g){let c=u[0],p=new S(i,c.location.end);return new $([new g(new Os(p,c)),a])}else return We(a)})}else if(r instanceof In&&n.head[0]instanceof Ye){let o=e.head[1].byte_offset,f=lt(w,s,j,wt);return W(f,l=>{let u=l[0],a=l[1],c=l[2];return[new g(new $i(new S(o,a),u)),c]})}else if(r instanceof Yn){let o=n,i=e.head[1].byte_offset,f=An(o,xn);return T(f,l=>{let u=l[0],a=l[1];if(u instanceof g){let c=u[0],p=new S(i,c.location.end);return new $([new g(new js(p,c)),a])}else return We(a)})}else if(r instanceof Fn){let o=n,i=e.head[1].byte_offset,l=lt(w,o,u=>pi(j,u),kr);return W(l,u=>{let a=u[0],c=u[1],p=u[2];return[new g(new qs(new S(i,c),a)),p]})}else return new $([C,e])}else{let r=s.tail;if(r instanceof _){let o=e.head[0];if(o instanceof B){let i=n,f=e.head[1].byte_offset,l=o[0],u=se(f,l);return new $([new g(new Pt(u,l)),i])}else if(o instanceof K)if(n.head[0]instanceof Ye&&s.head[0]instanceof pt){let i=e.head[1].byte_offset,f=r,l=o[0];return Nc(C,l,f,i)}else{let i=n,f=e.head[1].byte_offset,l=o[0];return new $([new g(new Pt(se(f,l),l)),i])}else if(o instanceof ue){let i=n,f=e.head[1].byte_offset,l=o[0],u=se(f,l);return new $([new g(new yr(u,l)),i])}else if(o instanceof Et){let i=n,f=e.head[1].byte_offset,l=o[0],u=se(f,l);return new $([new g(new Pr(u,l)),i])}else if(o instanceof hn){let i=n,f=e.head[1].byte_offset,l=o[0],u=new S(f,Z(f,l)+2);return new $([new g(new Bs(u,l)),i])}else if(o instanceof Wn){let i=n,f=e.head[1].byte_offset;return Ra(i,f)}else if(o instanceof Kn){let i=n,f=e.head[1].byte_offset,l;if(t instanceof Jr)l=W(j(i),a=>{let c=a[0],p=a[1];return[new S(f,c.location.end),new g(c),p]});else{let a=se(f,"echo");l=new $([a,C,i])}return T(l,a=>{let c=a[0],p=a[1],d=a[2];if(d instanceof _)return new $([new g(new St(c,p,C)),d]);if(d.head[0]instanceof _t){let x=d.tail;return W(j(x),b=>{let P=b[0],v=b[1],I=new S(c.start,P.location.end);return[new g(new St(I,p,new g(P))),v]})}else return new $([new g(new St(c,p,C)),d])})}else if(o instanceof Jt){let i=n,f=e.head[1].byte_offset;return Ba(i,f)}else if(o instanceof Xn){let i=n,f=e.head[1].byte_offset;return nr(i,(l,u)=>new Ds(l,u),f,"panic")}else if(o instanceof Jn){let i=n,f=e.head[1].byte_offset;return nr(i,(l,u)=>new Ns(l,u),f,"todo")}else if(o instanceof Yt){let i=n,f=e.head[1].byte_offset;return W(Er(w,i),l=>{let u=l[0],a=l[1],c=l[2];return[new g(new Tr(new S(f,a),u)),c]})}else if(o instanceof Sn){let i=n,f=e.head[1].byte_offset,l=zt(j,C,w,i);return W(l,u=>{let a=u.values,c=u.spread,p=u.remaining_tokens,d=u.end;return[new g(new vr(new S(f,d),a,c)),p]})}else if(o instanceof mn){let i=n,f=e.head[1].byte_offset,l=An(i,xn);return T(l,u=>{let a=u[0],c=u[1];if(a instanceof g){let p=a[0],d=new S(f,p.location.end);return new $([new g(new Os(d,p)),c])}else return We(c)})}else if(o instanceof In&&n.head[0]instanceof Ye){let i=e.head[1].byte_offset,l=lt(w,s,j,wt);return W(l,u=>{let a=u[0],c=u[1],p=u[2];return[new g(new $i(new S(i,c),a)),p]})}else if(o instanceof Yn){let i=n,f=e.head[1].byte_offset,l=An(i,xn);return T(l,u=>{let a=u[0],c=u[1];if(a instanceof g){let p=a[0],d=new S(f,p.location.end);return new $([new g(new js(d,p)),c])}else return We(c)})}else if(o instanceof Fn){let i=n,f=e.head[1].byte_offset,u=lt(w,i,a=>pi(j,a),kr);return W(u,a=>{let c=a[0],p=a[1],d=a[2];return[new g(new qs(new S(f,p),c)),d]})}else return new $([C,e])}else{let o=r.tail;if(o instanceof _){let i=e.head[0];if(i instanceof B){let f=n,l=e.head[1].byte_offset,u=i[0],a=se(l,u);return new $([new g(new Pt(a,u)),f])}else if(i instanceof K)if(n.head[0]instanceof Ye&&s.head[0]instanceof pt){let f=e.head[1].byte_offset,l=r,u=i[0];return Nc(C,u,l,f)}else{let f=n,l=e.head[1].byte_offset,u=i[0];return new $([new g(new Pt(se(l,u),u)),f])}else if(i instanceof ue){let f=n,l=e.head[1].byte_offset,u=i[0],a=se(l,u);return new $([new g(new yr(a,u)),f])}else if(i instanceof Et){let f=n,l=e.head[1].byte_offset,u=i[0],a=se(l,u);return new $([new g(new Pr(a,u)),f])}else if(i instanceof hn){let f=n,l=e.head[1].byte_offset,u=i[0],a=new S(l,Z(l,u)+2);return new $([new g(new Bs(a,u)),f])}else if(i instanceof Wn){let f=n,l=e.head[1].byte_offset;return Ra(f,l)}else if(i instanceof Kn){let f=n,l=e.head[1].byte_offset,u;if(t instanceof Jr)u=W(j(f),c=>{let p=c[0],d=c[1];return[new S(l,p.location.end),new g(p),d]});else{let c=se(l,"echo");u=new $([c,C,f])}return T(u,c=>{let p=c[0],d=c[1],x=c[2];if(x instanceof _)return new $([new g(new St(p,d,C)),x]);if(x.head[0]instanceof _t){let b=x.tail;return W(j(b),P=>{let v=P[0],I=P[1],F=new S(p.start,v.location.end);return[new g(new St(F,d,new g(v))),I]})}else return new $([new g(new St(p,d,C)),x])})}else if(i instanceof Jt){let f=n,l=e.head[1].byte_offset;return Ba(f,l)}else if(i instanceof Xn){let f=n,l=e.head[1].byte_offset;return nr(f,(u,a)=>new Ds(u,a),l,"panic")}else if(i instanceof Jn){let f=n,l=e.head[1].byte_offset;return nr(f,(u,a)=>new Ns(u,a),l,"todo")}else if(i instanceof Yt){let f=n,l=e.head[1].byte_offset;return W(Er(w,f),u=>{let a=u[0],c=u[1],p=u[2];return[new g(new Tr(new S(l,c),a)),p]})}else if(i instanceof Sn){let f=n,l=e.head[1].byte_offset,u=zt(j,C,w,f);return W(u,a=>{let c=a.values,p=a.spread,d=a.remaining_tokens,x=a.end;return[new g(new vr(new S(l,x),c,p)),d]})}else if(i instanceof mn){let f=n,l=e.head[1].byte_offset,u=An(f,xn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof g){let d=c[0],x=new S(l,d.location.end);return new $([new g(new Os(x,d)),p])}else return We(p)})}else if(i instanceof In&&n.head[0]instanceof Ye){let f=e.head[1].byte_offset,u=lt(w,s,j,wt);return W(u,a=>{let c=a[0],p=a[1],d=a[2];return[new g(new $i(new S(f,p),c)),d]})}else if(i instanceof Yn){let f=n,l=e.head[1].byte_offset,u=An(f,xn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof g){let d=c[0],x=new S(l,d.location.end);return new $([new g(new js(x,d)),p])}else return We(p)})}else if(i instanceof Fn){let f=n,l=e.head[1].byte_offset,a=lt(w,f,c=>pi(j,c),kr);return W(a,c=>{let p=c[0],d=c[1],x=c[2];return[new g(new qs(new S(l,d),p)),x]})}else return new $([C,e])}else{let i=e.head[0];if(i instanceof B)if(n.head[0]instanceof Zn){let f=s.head[0];if(f instanceof K&&r.head[0]instanceof Ye&&o.head[0]instanceof pt){let l=e.head[1].byte_offset,u=o.tail,a=i[0],c=f[0];return Nc(new g(a),c,u,l)}else{let l=n,u=e.head[1].byte_offset,a=i[0],c=se(u,a);return new $([new g(new Pt(c,a)),l])}}else{let f=n,l=e.head[1].byte_offset,u=i[0],a=se(l,u);return new $([new g(new Pt(a,u)),f])}else if(i instanceof K)if(n.head[0]instanceof Ye&&s.head[0]instanceof pt){let f=e.head[1].byte_offset,l=r,u=i[0];return Nc(C,u,l,f)}else{let f=n,l=e.head[1].byte_offset,u=i[0];return new $([new g(new Pt(se(l,u),u)),f])}else if(i instanceof ue){let f=n,l=e.head[1].byte_offset,u=i[0],a=se(l,u);return new $([new g(new yr(a,u)),f])}else if(i instanceof Et){let f=n,l=e.head[1].byte_offset,u=i[0],a=se(l,u);return new $([new g(new Pr(a,u)),f])}else if(i instanceof hn){let f=n,l=e.head[1].byte_offset,u=i[0],a=new S(l,Z(l,u)+2);return new $([new g(new Bs(a,u)),f])}else if(i instanceof Wn){let f=n,l=e.head[1].byte_offset;return Ra(f,l)}else if(i instanceof Kn){let f=n,l=e.head[1].byte_offset,u;if(t instanceof Jr)u=W(j(f),c=>{let p=c[0],d=c[1];return[new S(l,p.location.end),new g(p),d]});else{let c=se(l,"echo");u=new $([c,C,f])}return T(u,c=>{let p=c[0],d=c[1],x=c[2];if(x instanceof _)return new $([new g(new St(p,d,C)),x]);if(x.head[0]instanceof _t){let b=x.tail;return W(j(b),P=>{let v=P[0],I=P[1],F=new S(p.start,v.location.end);return[new g(new St(F,d,new g(v))),I]})}else return new $([new g(new St(p,d,C)),x])})}else if(i instanceof Jt){let f=n,l=e.head[1].byte_offset;return Ba(f,l)}else if(i instanceof Xn){let f=n,l=e.head[1].byte_offset;return nr(f,(u,a)=>new Ds(u,a),l,"panic")}else if(i instanceof Jn){let f=n,l=e.head[1].byte_offset;return nr(f,(u,a)=>new Ns(u,a),l,"todo")}else if(i instanceof Yt){let f=n,l=e.head[1].byte_offset;return W(Er(w,f),u=>{let a=u[0],c=u[1],p=u[2];return[new g(new Tr(new S(l,c),a)),p]})}else if(i instanceof Sn){let f=n,l=e.head[1].byte_offset,u=zt(j,C,w,f);return W(u,a=>{let c=a.values,p=a.spread,d=a.remaining_tokens,x=a.end;return[new g(new vr(new S(l,x),c,p)),d]})}else if(i instanceof mn){let f=n,l=e.head[1].byte_offset,u=An(f,xn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof g){let d=c[0],x=new S(l,d.location.end);return new $([new g(new Os(x,d)),p])}else return We(p)})}else if(i instanceof In&&n.head[0]instanceof Ye){let f=e.head[1].byte_offset,u=lt(w,s,j,wt);return W(u,a=>{let c=a[0],p=a[1],d=a[2];return[new g(new $i(new S(f,p),c)),d]})}else if(i instanceof Yn){let f=n,l=e.head[1].byte_offset,u=An(f,xn);return T(u,a=>{let c=a[0],p=a[1];if(c instanceof g){let d=c[0],x=new S(l,d.location.end);return new $([new g(new js(x,d)),p])}else return We(p)})}else if(i instanceof Fn){let f=n,l=e.head[1].byte_offset,a=lt(w,f,c=>pi(j,c),kr);return W(a,c=>{let p=c[0],d=c[1],x=c[2];return[new g(new qs(new S(l,d),p)),x]})}else return new $([C,e])}}}}}})(),n=>{let s=n[0],r=n[1];if(s instanceof g){let o=s[0],i=ce(o,r);if(i instanceof $){let f=i[0][0],l=i[0][1];return new $([new g(f),l])}else return i}else return new $([C,r])})}function kx(e,t,n,s){return T(An(e,s),r=>{let o=r[0],i=r[1];if(o instanceof g){let f=o[0],l=h(f,n),u=O0(i);if(u instanceof $){let a=u[0][0],c=u[0][1],p=cx(new g(a),t,l),d=p[0];if(d instanceof g){let x=d[0];return new $([x,c])}else{let x=p[1],b=p[2];return kx(c,x,b,a instanceof Ks?M0:xn)}}else{let a=cx(C,t,l)[0];if(a instanceof g){let c=a[0];return new $([c,i])}else return We(i)}}else return We(i)})}function j(e){return kx(e,w,w,xn)}function px(e,t){return T(j(e),n=>{let s=n[0],r=n[1];if(r instanceof _){let o=new Us(new S(t,s.location.end),s,C);return new $([o,r])}else if(r.head[0]instanceof _t){let o=r.tail,i=j(o);if(i instanceof $){let f=i[0][0],l=i[0][1],u=new Us(new S(t,f.location.end),s,new g(f));return new $([u,l])}else return i}else{let o=new Us(new S(t,s.location.end),s,C);return new $([o,r])}})}function $x(e,t){return T(e instanceof _?Ga(w,e,ux,li):e.head[0]instanceof oi?new $([w,e]):Ga(w,e,ux,li),n=>{let s=n[0],r=n[1];return ht(Fc,r,(o,i)=>T(j(i),f=>{let l=f[0],u=f[1];return new $([new zs(new S(t,l.location.end),s,l),u])}))})}function Kp(e,t,n){return T(Rn(t),s=>{let r=s[0],o=s[1];return T(Ha(o),i=>{let f=i[0],l=i[1];return ht(Fa,l,(u,a)=>T(j(a),c=>{let p=c[0],d=c[1];return T((()=>{if(e instanceof xi)return new $([e,d,p.location.end]);if(d instanceof _)return new $([e,d,p.location.end]);if(e.message instanceof kn&&d.head[0]instanceof _t){let x=d.tail;return W(j(x),b=>{let P=b[0],v=b[1];return[new qc(new g(P)),v,P.location.end]})}else return new $([e,d,p.location.end])})(),x=>{let b=x[0],P=x[1],v=x[2],I=new mi(new S(n,v),b,r,f,p);return new $([I,P])})}))})})}function dx(e){if(e instanceof _)return T(j(e),n=>{let s=n[0],r=n[1];return new $([new Vs(s),r])});{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof Xr){let s=t,r=e.head[1].byte_offset;return px(s,r)}else if(n instanceof Is){let s=t,r=e.head[1].byte_offset;return Kp(ax,s,r)}else if(n instanceof Fs){let s=t,r=e.head[1].byte_offset;return $x(s,r)}else return T(j(e),r=>{let o=r[0],i=r[1];return new $([new Vs(o),i])})}else{let n=e.head[0];if(n instanceof Xr){let s=t,r=e.head[1].byte_offset;return px(s,r)}else if(n instanceof Is)if(t.head[0]instanceof Xr){let s=e.head[1].byte_offset,r=t.tail;return Kp(new qc(C),r,s)}else{let s=t,r=e.head[1].byte_offset;return Kp(ax,s,r)}else if(n instanceof Fs){let s=t,r=e.head[1].byte_offset;return $x(s,r)}else return T(j(e),r=>{let o=r[0],i=r[1];return new $([new Vs(o),i])})}}}function Er(e,t){if(t instanceof _)return T(dx(t),n=>{let s=n[0],r=n[1];return Er(h(s,e),r)});if(t.head[0]instanceof ft){let n=t.tail,s=t.head[1].byte_offset;return new $([E(e),s+1,n])}else return T(dx(t),n=>{let s=n[0],r=n[1];return Er(h(s,e),r)})}function H0(e){return T((()=>{if(e instanceof _)return new y(H);{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof B){let s=t,r=n[0];return new $([C,new At(r),s])}else if(n instanceof it){let s=t,r=n[0];return new $([C,new wn(r),s])}else{let s=n,r=e.head[1];return new y(new A(s,r))}}else{let n=e.head[0];if(n instanceof B){let s=t.head[0];if(s instanceof B){let r=t.tail,o=n[0],i=s[0];return new $([new g(o),new At(i),r])}else if(s instanceof it){let r=t.tail,o=n[0],i=s[0];return new $([new g(o),new wn(i),r])}else{let r=t,o=n[0];return new $([C,new At(o),r])}}else if(n instanceof it){let s=t,r=n[0];return new $([C,new wn(r),s])}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}})(),t=>{let n=t[0],s=t[1],r=t[2];return T(Ha(r),o=>{let i=o[0],f=o[1];return new $([new P$(n,s,i),f])})})}function hx(e,t,n,s,r,o){return ht(Ca,o,(i,f)=>{let l=lt(w,f,H0,wt);return T(l,u=>{let a=u[0],c=u[1],p=u[2],d=wx(c,p);return T(d,x=>{let b=x[0],P=x[1],v=x[2];return T((()=>{if(v instanceof _)return new $([w,P,v]);if(v.head[0]instanceof Yt){let I=v.tail;return Er(w,I)}else return new $([w,P,v])})(),I=>{let F=I[0],L=I[1],M=I[2],G=new S(r,L),Q=new Jp(G,s,n,a,b,F),oe=R0(e,t,Q);return new $([oe,M])})})})})}function z0(e,t,n){return new Zr(e.imports,e.custom_types,e.type_aliases,h(new Hs(E(t),n),e.constants),e.functions)}function W0(e,t){if(e instanceof _)return new y(H);{let n=e.head[0];if(n instanceof B){let s=e.tail,r=n[0];return t(r,s)}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}function mx(e,t,n,s,r){return W0(s,(o,i)=>T(Ha(i),f=>{let l=f[0],u=f[1];return ht(Fa,u,(a,c)=>T(j(c),p=>{let d=p[0],x=p[1],b=new v$(new S(r,d.location.end),o,n,l,d),P=z0(e,t,b);return new $([P,x])}))}))}function O$(e,t,n){let s=new Qr(n.location,n.name,n.publicity,n.opaque_,n.parameters,E(n.variants));return new Zr(e.imports,h(new Hs(E(t),s),e.custom_types),e.type_aliases,e.constants,e.functions)}function K0(e,t){return new Qr(e.location,e.name,e.publicity,e.opaque_,e.parameters,h(t,e.variants))}function xx(e){if(e instanceof _)return T(Bn(e),n=>{let s=n[0],r=n[1];return new $([new ja(s),r])});{let t=e.tail;if(t instanceof _)return T(Bn(e),s=>{let r=s[0],o=s[1];return new $([new ja(r),o])});{let n=e.head[0];if(n instanceof B&&t.head[0]instanceof Zt){let s=t.tail,r=n[0];return T(Bn(s),o=>{let i=o[0],f=o[1];return new $([new F$(i,r),f])})}else return T(Bn(e),r=>{let o=r[0],i=r[1];return new $([new ja(o),i])})}}}function bx(e,t){if(e instanceof _)return new y(H);{let n=e.head[0];if(n instanceof K){let s=e.tail,r=e.head[1].byte_offset,o=n[0];return t(o,r,s)}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}function yx(e){return T((()=>{if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,s=t[0];return new $([s,n])}else{let n=t,s=e.head[1];return new y(new A(n,s))}}})(),t=>{let n=t[0],s=t[1];if(s instanceof _)return new $([new Oa(n,w),s]);if(s.head[0]instanceof Ye){let r=s.tail,o=lt(w,r,j,wt);return T(o,i=>{let f=i[0],l=i[2];return new $([new Oa(n,f),l])})}else return new $([new Oa(n,w),s])})}function X0(e,t){for(;;){let n=e,s=t;if(s instanceof _)return new $([E(n),s]);if(s.head[0]instanceof As){let r=s.tail,o=yx(r);if(o instanceof $){let i=o[0][0],f=o[0][1];e=h(i,n),t=f}else return o}else return new $([E(n),s])}}function J0(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(i instanceof _)return new y(H);{let l=i.head[0];if(mt(l,r)){let u=i.tail,a=i.head[1].byte_offset;return new $([o,Z(a,Aa(l)),u])}else{let u=f(o,i);if(u instanceof $){let a=u[0][0],c=u[0][1];e=r,t=a,n=c,s=f}else return u}}}}function Y0(e,t){return J0(Cc,e,t,(n,s)=>T(X0(w,s),r=>{let o=r[0],i=r[1];return bx(i,(f,l,u)=>T((()=>{if(u instanceof _)return new $([w,0,u]);{let a=u.tail;if(a instanceof _)return u.head[0]instanceof Ye?lt(w,a,xx,wt):new $([w,0,u]);if(u.head[0]instanceof Ye)if(a.head[0]instanceof q){let c=a.tail,p=a.head[1].byte_offset;return new $([w,p,c])}else return lt(w,a,xx,wt);else return new $([w,0,u])}})(),a=>{let c=a[0],p=a[2],d=K0(n,new I$(f,c,o));return new $([d,p])}))}))}function Z0(e,t,n,s,r,o,i,f){let l=new Qr(new S(0,0),n,r,o,s,w);return T(Y0(l,i),u=>{let a=u[0],c=u[1],p=u[2],d=new Qr(new S(f,c),a.name,a.publicity,a.opaque_,a.parameters,a.variants),x=O$(e,t,d);return new $([x,p])})}function Q0(e,t,n){return new Zr(e.imports,e.custom_types,h(new Hs(E(t),n),e.type_aliases),e.constants,e.functions)}function ek(e,t,n,s,r,o,i){return T(Bn(i),f=>{let l=f[0],u=f[1],a=new S(o,l.location.end),c=new C$(a,n,r,s,l),p=Q0(e,t,c);return new $([p,u])})}function tk(e){if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,s=t[0];return new $([s,n])}else{let n=t,s=e.head[1];return new y(new A(n,s))}}}function Xp(e,t,n,s,r,o){return bx(r,(i,f,l)=>T((()=>{if(l instanceof _)return new $([w,Z(f,i),l]);if(l.head[0]instanceof Ye){let u=l.tail;return lt(w,u,tk,wt)}else return new $([w,Z(f,i),l])})(),u=>{let a=u[0],c=u[1],p=u[2];if(p instanceof _){let d=new S(o,c),x=new Qr(d,i,n,s,a,w),b=O$(e,t,x);return new $([b,p])}else{let d=p.head[0];if(d instanceof Yt){let x=p.tail;return Z0(e,t,i,a,n,s,x,o)}else if(d instanceof Qo){let x=p.tail;return ek(e,t,i,a,n,o,x)}else{let x=new S(o,c),b=new Qr(x,i,n,s,a,w),P=O$(e,t,b);return new $([P,p])}}}))}function nk(e,t){if(e instanceof _)return[C,t,e];{let n=e.tail;if(n instanceof _)return[C,t,e];if(e.head[0]instanceof _t){let s=n.head[0];if(s instanceof B){let r=n.tail,o=n.head[1].byte_offset,i=s[0];return[new g(new At(i)),Z(o,i),r]}else if(s instanceof it){let r=n.tail,o=n.head[1].byte_offset,i=s[0];return[new g(new wn(i)),Z(o,i)+1,r]}else return[C,t,e]}else return[C,t,e]}}function rk(e,t,n){for(;;){let s=e,r=t,o=n;if(o instanceof _)return new y(H);{let i=o.head[0];if(i instanceof B){let f=o.tail;if(f instanceof _){let l=i,u=o.head[1];return new y(new A(l,u))}else{let l=f.tail;if(l instanceof _){let u=f.head[0];if(u instanceof ft){let a=i[0],c=l,p=f.head[1].byte_offset,d=new He(a,C);return new $(new yt(E(s),E(h(d,r)),p+1,c))}else if(u instanceof D){let a=i[0],c=l,p=new He(a,C);e=s,t=h(p,r),n=c}else{let a=i,c=o.head[1];return new y(new A(a,c))}}else{let u=l.tail;if(u instanceof _){let a=f.head[0];if(a instanceof ft){let c=i[0],p=l,d=f.head[1].byte_offset,x=new He(c,C);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(a instanceof D){let c=i[0],p=l,d=new He(c,C);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}else{let a=f.head[0];if(a instanceof _t){let c=l.head[0];if(c instanceof B){let p=u.head[0];if(p instanceof ft){let d=i[0],x=u.tail,b=c[0],P=u.head[1].byte_offset,v=new He(d,new g(b));return new $(new yt(E(s),E(h(v,r)),P+1,x))}else if(p instanceof D){let d=i[0],x=u.tail,b=c[0],P=new He(d,new g(b));e=s,t=h(P,r),n=x}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else if(a instanceof ft){let c=i[0],p=l,d=f.head[1].byte_offset,x=new He(c,C);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(a instanceof D){let c=i[0],p=l,d=new He(c,C);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}}}}else if(i instanceof K){let f=o.tail;if(f instanceof _){let l=i,u=o.head[1];return new y(new A(l,u))}else{let l=f.tail;if(l instanceof _){let u=f.head[0];if(u instanceof ft){let a=i[0],c=l,p=f.head[1].byte_offset,d=new He(a,C);return new $(new yt(E(s),E(h(d,r)),p+1,c))}else if(u instanceof D){let a=i[0],c=l,p=new He(a,C);e=s,t=h(p,r),n=c}else{let a=i,c=o.head[1];return new y(new A(a,c))}}else{let u=l.tail;if(u instanceof _){let a=f.head[0];if(a instanceof ft){let c=i[0],p=l,d=f.head[1].byte_offset,x=new He(c,C);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(a instanceof D){let c=i[0],p=l,d=new He(c,C);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}else{let a=f.head[0];if(a instanceof _t){let c=l.head[0];if(c instanceof K){let p=u.head[0];if(p instanceof ft){let d=i[0],x=u.tail,b=c[0],P=u.head[1].byte_offset,v=new He(d,new g(b));return new $(new yt(E(s),E(h(v,r)),P+1,x))}else if(p instanceof D){let d=i[0],x=u.tail,b=c[0],P=new He(d,new g(b));e=s,t=h(P,r),n=x}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else if(a instanceof ft){let c=i[0],p=l,d=f.head[1].byte_offset,x=new He(c,C);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(a instanceof D){let c=i[0],p=l,d=new He(c,C);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}}}}else if(i instanceof gr){let f=o.tail;if(f instanceof _){let l=i,u=o.head[1];return new y(new A(l,u))}else{let l=f.tail;if(l instanceof _){let u=i,a=o.head[1];return new y(new A(u,a))}else{let u=l.tail;if(u instanceof _){let a=f.head[0];if(a instanceof K){let c=l.head[0];if(c instanceof ft){let p=u,d=a[0],x=l.head[1].byte_offset,b=new He(d,C);return new $(new yt(E(h(b,s)),E(r),x+1,p))}else if(c instanceof D){let p=u,d=a[0],x=new He(d,C);e=h(x,s),t=r,n=p}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else{let c=i,p=o.head[1];return new y(new A(c,p))}}else{let a=u.tail;if(a instanceof _){let c=f.head[0];if(c instanceof K){let p=l.head[0];if(p instanceof ft){let d=u,x=c[0],b=l.head[1].byte_offset,P=new He(x,C);return new $(new yt(E(h(P,s)),E(r),b+1,d))}else if(p instanceof D){let d=u,x=c[0],b=new He(x,C);e=h(b,s),t=r,n=d}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else{let c=f.head[0];if(c instanceof K){let p=l.head[0];if(p instanceof _t){let d=u.head[0];if(d instanceof K){let x=a.head[0];if(x instanceof ft){let b=a.tail,P=c[0],v=d[0],I=a.head[1].byte_offset,F=new He(P,new g(v));return new $(new yt(E(h(F,s)),E(r),I+1,b))}else if(x instanceof D){let b=a.tail,P=c[0],v=d[0],I=new He(P,new g(v));e=h(I,s),t=r,n=b}else{let b=i,P=o.head[1];return new y(new A(b,P))}}else{let x=i,b=o.head[1];return new y(new A(x,b))}}else if(p instanceof ft){let d=u,x=c[0],b=l.head[1].byte_offset,P=new He(x,C);return new $(new yt(E(h(P,s)),E(r),b+1,d))}else if(p instanceof D){let d=u,x=c[0],b=new He(x,C);e=h(b,s),t=r,n=d}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}}}}}else if(i instanceof ft){let f=o.tail,l=o.head[1].byte_offset;return new $(new yt(E(s),E(r),l+1,f))}else{let f=i,l=o.head[1];return new y(new A(f,l))}}}}function sk(e,t){if(e instanceof _)return new $(new yt(w,w,t,e));{let n=e.tail;if(n instanceof _)return new $(new yt(w,w,t,e));if(e.head[0]instanceof Zn&&n.head[0]instanceof Yt){let s=n.tail;return rk(w,w,s)}else return new $(new yt(w,w,t,e))}}function ok(e,t,n){for(;;){let s=e,r=t,o=n;if(o instanceof _)return s===""?new y(H):new $([s,r,o]);{let i=o.tail;if(i instanceof _){let f=o.head[0];if(f instanceof B&&s===""){let l=i,u=o.head[1].byte_offset,a=f[0],c=u+rn(a);e=a,t=c,n=l}else if(s===""){let l=f,u=o.head[1];return new y(new A(l,u))}else return new $([s,r,o])}else{let f=o.head[0];if(f instanceof B&&s===""){let l=i,u=f[0],c=o.head[1].byte_offset+rn(u);e=u,t=c,n=l}else if(f instanceof Ls){let l=i.head[0];if(l instanceof B&&s!==""){let u=i.tail,a=i.head[1].byte_offset,c=l[0],p=a+rn(c);e=s+"/"+c,t=p,n=u}else if(s===""){let u=f,a=o.head[1];return new y(new A(u,a))}else return new $([s,r,o])}else if(s===""){let l=f,u=o.head[1];return new y(new A(l,u))}else return new $([s,r,o])}}}}function ik(e,t,n,s){return T(ok("",0,n),r=>{let o=r[0],i=r[1],f=r[2];return T(sk(f,i),l=>{let u=l.types,a=l.values,c=l.end,p=l.remaining_tokens,d=nk(p,c),x=d[0],b=d[1],P=d[2],v=new S(s,b),I=new T$(v,o,x,u,a),F=new Hs(E(t),I),L=new Zr(h(F,e.imports),e.custom_types,e.type_aliases,e.constants,e.functions);return new $([L,P])})})}function rr(e,t,n){if(n instanceof _)return new $(e);{let s=n.head[0];if(s instanceof Cs){let r=n.tail,o=n.head[1].byte_offset,i=mx(e,t,zp,r,o);return T(i,f=>{let l=f[0],u=f[1];return rr(l,w,u)})}else if(s instanceof Jt){let r=n.tail;if(r instanceof _)return We(n);{let o=r.head[0];if(o instanceof B){let i=n.head[1],f=r.tail,l=o[0],u=i.byte_offset,a=hx(e,t,zp,l,u,f);return T(a,c=>{let p=c[0],d=c[1];return rr(p,w,d)})}else return We(n)}}else if(s instanceof Ro){let r=n.tail,o=n.head[1].byte_offset,i=ik(e,t,r,o);return T(i,f=>{let l=f[0],u=f[1];return rr(l,w,u)})}else if(s instanceof Oo){let r=n.tail;if(r instanceof _)return We(n);{let o=r.head[0];if(o instanceof Cs){let i=n.head[1].byte_offset,f=r.tail,l=mx(e,t,Dc,f,i);return T(l,u=>{let a=u[0],c=u[1];return rr(a,w,c)})}else if(o instanceof Jt){let i=r.tail;if(i instanceof _)return We(n);{let f=i.head[0];if(f instanceof B){let l=n.head[1],u=i.tail,a=f[0],c=l.byte_offset,p=hx(e,t,Dc,a,c,u);return T(p,d=>{let x=d[0],b=d[1];return rr(x,w,b)})}else return We(n)}}else if(o instanceof Bo){let i=r.tail;if(i instanceof _)return We(n);if(i.head[0]instanceof gr){let f=n.head[1].byte_offset,l=i.tail,u=Xp(e,t,Dc,!0,l,f);return T(u,a=>{let c=a[0],p=a[1];return rr(c,w,p)})}else return We(n)}else if(o instanceof gr){let i=n.head[1].byte_offset,f=r.tail,l=Xp(e,t,Dc,!1,f,i);return T(l,u=>{let a=u[0],c=u[1];return rr(a,w,c)})}else return We(n)}}else if(s instanceof gr){let r=n.tail,o=n.head[1].byte_offset,i=Xp(e,t,zp,!1,r,o);return T(i,f=>{let l=f[0],u=f[1];return rr(l,w,u)})}else if(s instanceof As){let r=n.tail;return T(yx(r),o=>{let i=o[0],f=o[1];return rr(e,h(i,t),f)})}else return We(n)}}function Px(e){let t=tx(e),n=rx(t),s=nx(n),r=ix(s);return(o=>rr(new Zr(w,w,w,w,w),w,o))(r)}var Tx="left#",vx="capture#";function Ue(e,t,n){return new y(e+fp(n(t)))}function Ai(e,t,n){for(;;){let s=e,r=t,o=n,i=ls(s,f=>!Zi(f[0],"_"));if(i instanceof _)return new $(void 0);{let f=i.tail,l=i.head[0],u=Kt(f,l);if(u instanceof $){let a=u[0];return Ue(r+l,a,o)}else e=f,t=r,n=o}}}function Ex(e){return e instanceof zs||e instanceof mi||e instanceof Us?e.location:e[0].location}function lk(e){return Td(Eo,t=>mf(t[1],e))}function Cx(e){if(e instanceof Es){let t=e[0];return h(t,w)}else if(e instanceof ga){let t=e.elems,n=e.rest;return st(yd(t,Cx),(()=>{if(n instanceof g){let s=n[0];return h(s,w)}else return w})())}else return w}function Zc(e,t){return Ze(e,n=>[n,t])}function j$(e,t,n){if(e instanceof Ws){let s=e.name;return new $("_"+s)}else if(e instanceof Sr){let s=e.name;return new $(s)}else return Ue("Unsupported pattern in "+t,e.location,n)}function Ix(e,t){if(e instanceof Da){let n=e.location,s=e.value,r=bn(s);if(r instanceof $){let o=r[0];return new $(new wa(o))}else return Ue("Invalid integer literal: "+s,n,t)}else{if(e instanceof Ws)return new $(Zm);if(e instanceof Sr){let n=e.name;return new $(new Es(n))}else if(e instanceof Na){let n=e.elements,s=e.tail;return T(kt(n,r=>Ix(r,t)),r=>T((()=>{if(s instanceof g){let o=s[0];return W(j$(o,"list pattern",t),i=>new g(i))}else return new $(C)})(),o=>new $(new ga(r,o))))}else if(e instanceof Gs&&e.module instanceof kn&&e.arguments instanceof _&&!e.with_spread){let n=e.constructor$;return n==="True"?new $(new vs(!0)):n==="False"?new $(new vs(!1)):Ue("Pattern type not supported",e.location,t)}else return Ue("Pattern type not supported",e.location,t)}}function ck(e){return e instanceof bi?new g("=="):e instanceof yi?new g("!="):e instanceof Pi?new g("<"):e instanceof Ti?new g("<="):e instanceof vi?new g(">="):e instanceof Ei?new g(">"):e instanceof Si?new g("+"):e instanceof Ci?new g("-"):e instanceof Ii?new g("*"):e instanceof Fi?new g("/"):e instanceof Li?new g("%"):C}function Fx(e){return e instanceof At?e[0]:"_"+e[0]}function fk(e,t){if(e instanceof Xs){let n=e.label,s=e.label_location,r=e.item;return new $([n,s,r])}else if(e instanceof Js){let n=e.label,s=e.location;return new $([n,s,new Pt(s,n)])}else{let n=e.item;return Ue("An unlabelled argument cannot follow a labelled one",n.location,t)}}function uk(e,t,n,s){let r;if(e instanceof Pt){let i=e.name;r=Kt(Eo,i)}else r=new y(void 0);let o=r;if(o instanceof $){let i=o[0],f=vd(n,a=>a instanceof Yr),l=f[0],u=f[1];return T(kt(u,a=>fk(a,s)),a=>T(Ai(Ze(a,c=>[c[0],c[1]]),"Duplicate label: ",s),c=>{let p=al(i,t+rt(l));return T(Sd(a,d=>mf(p,d[0])?new $(void 0):Ue("Unexpected label: "+d[0],d[1],s)),d=>{let x=xf(p,b=>{let P=Pd(a,v=>v[0]===b);return W(P,v=>new Yr(v[2]))});return new $(st(l,x))})}))}else return new $(n)}function pk(e,t,n){return T(kt(e,s=>Mt(s,n)),s=>{if(t instanceof g){let r=t[0];return T(Mt(r,n),o=>new $(new Po(s,new g(o))))}else return new $(new Po(s,C))})}function $k(e,t){return kt(e,n=>{let s=n.patterns,r=n.guard;if(s instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(r instanceof g){let o=s.head;if(o instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(s.tail instanceof _&&o.tail instanceof _){let i=r[0];return Ue("Guards are not supported",i.location,t)}else return Ue("Multi-pattern clauses are not supported",n.body.location,t)}else{let o=s.head;if(o instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(s.tail instanceof _&&o.tail instanceof _){let i=o.head;return T(Ix(i,t),f=>T(Ai(Zc(Cx(f),i.location),"Duplicate variable name in pattern: ",t),l=>T(Mt(n.body,t),u=>new $([f,new Ts(t(n.body.location),u)]))))}else return Ue("Multi-pattern clauses are not supported",n.body.location,t)}})}function dk(e,t,n,s,r){let o=ck(e);if(o instanceof g){let i=o[0];return T(Mt(t,r),f=>T(Mt(n,r),l=>new $(new _r(new vn(i),h(f,h(l,w))))))}else return Ue("Unsupported operator",s,r)}function Sx(e,t,n,s,r){return T(Mt(n,r),o=>T(Mt(s,r),i=>{let f=new _r(new vn(e),h(new vn(Tx),h(i,w)));return new $(new To(o,h([new vs(t),new ys(t)],h([new Es(Tx),f],w))))}))}function D$(e,t){return kt(e,n=>{if(n instanceof Xs){let s=n.label_location;return Ue("Labelled arguments are only supported in a call to a record constructor",s,t)}else if(n instanceof Js){let s=n.location;return Ue("Labelled arguments are only supported in a call to a record constructor",s,t)}else{let s=n.item;return Mt(s,t)}})}function hk(e,t,n,s){return T(Mt(e,s),r=>T(D$(t,s),o=>T(D$(n,s),i=>{let f=fo(h(o,h(h(new vn(vx),w),h(i,w))));return new $(new Ps(h(vx,w),new _r(r,f)))})))}function Mt(e,t){if(e instanceof yr){let n=e.location,s=e.value,r=bn(s);if(r instanceof $){let o=r[0];return new $(new xa(o))}else return Ue("Invalid integer literal: "+s,n,t)}else if(e instanceof Pr){let n=e.location;return Ue("Only whole numbers are allowed (this language has no decimals)",n,t)}else if(e instanceof Pt){let n=e.name;if(n==="True")return new $(new ys(!0));if(n==="False")return new $(new ys(!1));{let s=n;return new $(new vn(s))}}else if(e instanceof Tr){let n=e.location,s=e.statements;return q$(s,n,t)}else if(e instanceof vr){let n=e.elements,s=e.rest;return pk(n,s,t)}else if(e instanceof qa){let n=e.location,s=e.arguments,r=e.body,o=Ze(s,i=>Fx(i.name));return T(Ai(Zc(o,n),"Duplicate parameter name: ",t),i=>T(q$(r,n,t),f=>new $(new Ps(o,f))))}else if(e instanceof _i){let n=e.container;if(n instanceof Pt&&n.name==="list"){let s=e.label;return lk(s)?new $(new vo(new vn("list"),s)):new $(new vn("list."+s))}else{let s=n,r=e.label;return T(Mt(s,t),o=>new $(new vo(o,r)))}}else{if(e instanceof $e)return N$(e,w,w,t);if(e instanceof _n){let n=e.function,s=e.arguments_before,r=e.arguments_after;return hk(n,s,r,t)}else if(e instanceof Ua){let n=e.subjects;if(n instanceof _){let s=e.location;return Ue("Multi-subject case is not supported",s,t)}else if(n.tail instanceof _){let s=e.clauses,r=n.head;return T(Mt(r,t),o=>T($k(s,t),i=>new $(new To(o,i))))}else{let s=e.location;return Ue("Multi-subject case is not supported",s,t)}}else if(e instanceof wi){let n=e.name;if(n instanceof gi){let s=e.left,r=e.right;return Sx("&&",!1,s,r,t)}else if(n instanceof ki){let s=e.left,r=e.right;return Sx("||",!0,s,r,t)}else if(n instanceof Ks){let s=e.left,r=e.right;return T(Mt(s,t),o=>N$(r,h(o,w),w,t))}else{let s=e.location,r=n,o=e.left,i=e.right;return dk(r,o,i,s,t)}}else return Ue("Expression type not supported",e.location,t)}}function N$(e,t,n,s){if(e instanceof $e){let r=e.function,o=e.arguments;return T(Mt(r,s),i=>T(uk(r,rt(t),o,s),f=>T(D$(f,s),l=>new $(new _r(i,fo(h(t,h(l,h(n,w)))))))))}else return T(Mt(e,s),r=>new $(new _r(r,st(t,n))))}function q$(e,t,n){let s=E(e);if(s instanceof _)return Ue("Empty block",t,n);{let r=s.head,o=s.tail;return T((()=>{if(r instanceof zs){let i=r.location;return Ue("A use binding must be followed by more of the block",i,n)}else if(r instanceof Vs){let i=r[0];return W(Mt(i,n),f=>new Ts(n(i.location),f))}else return Ue("A block must end with an expression",Ex(r),n)})(),i=>cl(o,i,(f,l)=>{if(l instanceof zs){let u=l.location,a=l.patterns,c=l.function;return T(kt(a,p=>j$(p.pattern,"use binding",n)),p=>T(Ai(Zc(p,u),"Duplicate parameter name: ",n),d=>{let x=new Ps(p,f);return T(N$(c,w,h(x,w),n),b=>new $(new Ts(n(u),b)))}))}else if(l instanceof mi&&l.kind instanceof xi){let u=l.location,a=l.pattern,c=l.value;return T(j$(a,"let binding",n),p=>T(Mt(c,n),d=>new $(new _a(p,new Ts(n(u),d),f))))}else return Ue("Only let, use, and expressions are allowed in a block",Ex(l),n)}))}}function mk(e,t,n){let s=e.definition,r=Ze(s.parameters,o=>Fx(o.name));return T(Ai(Zc(r,s.location),"Duplicate parameter name: ",n),o=>T(q$(s.body,s.location,n),i=>new $([s.name,new Gn(new yo(s.name,r,i,new fc(t)))])))}function xk(e){let n=bt($l(e,`
`),[w,0],(s,r)=>{let o=s[0],i=s[1];return[h(i,o),i+rn(r)+1]})[0];return s=>kd(n,r=>r<=s.start)}function Lx(e,t){let n=xk(e),s=Px(e);if(s instanceof $){let r=s[0],o=ul(r.functions,(i,f)=>_d(i.definition.location.start,f.definition.location.start));return T(kt(o,i=>mk(i,t,n)),i=>T(Ai(Ze(o,f=>[f.definition.name,f.definition.location]),"Duplicate function name: ",n),f=>(_f(i,l=>ma(t,l[0],l[1])),new $(t))))}else{let r=s[0];if(r instanceof Va){let o=rn(hl(e));return Ue("Unexpected end of input",new S(o,o),n)}else{let o=r.position;return Ue("Syntax error",new S(o.byte_offset,o.byte_offset),n)}}}var Dt=null,et=null,Ys=null,Mi=1,sr=0,U$=0,Ax=!1,Mx=0,Bx=!1,V$=0,za=0,wk=1,Rx=10,gk=600;function G$(e){let t=[];for(let n of e){let s=[];for(let r of n.points)s.push(r.x,r.y);t.push({pts:new Float64Array(s),thickness:n.thickness,color:n.color,start:n.start,end:n.end,fill:n.effects.fill,glow:n.effects.glow,opacity:n.effects.opacity,pivotX:n.effects.sway_pivot.x,pivotY:n.effects.sway_pivot.y,swayDegrees:n.effects.sway_degrees,swayPeriod:n.effects.sway_period,bounceHeight:n.effects.bounce_height,bouncePeriod:n.effects.bounce_period})}Ys={paths:t,endClock:kk(t)},Ax||(Ax=!0,U$=performance.now(),requestAnimationFrame(Ox))}function kk(e){let t=1/0;for(let n of e){let s=Math.max(n.start,n.end);t=t===1/0?s:Math.max(t,s)}return t}function H$(e){Mi=e}function z$(e){Bx=e,za=0}function bk(e){let t=Number.isFinite(Ys.endClock)&&Ys.endClock>0,n=Mi>0&&sr>=Ys.endClock||Mi<0&&sr<=0;if(!Bx||!t||!n){za=0;return}za+=e,za>=wk&&(za=0,sr=Mi>0?0:Ys.endClock)}function W$(e){if(!jx())return;let t=document.createElement("canvas");t.width=Dt.width,t.height=Dt.height;let n=t.getContext("2d");n.fillStyle="#0a0a14",n.fillRect(0,0,t.width,t.height),n.drawImage(Dt,0,0);let s=document.createElement("a");s.download=(e||"drawing")+".png",s.href=t.toDataURL("image/png"),s.click()}function K$(){sr=0}function Ox(e){let t=Math.min((e-U$)/1e3,.1);U$=e,sr+=t*Mi*Rx,V$+=t*Mi*Rx,sr=vk(sr,0,Ys.endClock),bk(t),Pk(),requestAnimationFrame(Ox)}function yk(){let e=window.devicePixelRatio||1,t=Math.round(Dt.clientWidth*e),n=Math.round(Dt.clientHeight*e);t>0&&n>0&&(Dt.width!==t||Dt.height!==n)&&(Dt.width=t,Dt.height=n)}function jx(){let e=document.getElementById("animation-canvas");return e?(e!==Dt&&(Dt=e,et=Dt.getContext("2d")),!0):(Mx+=1,Mx===gk&&console.error('The page has no <canvas id="animation-canvas"> element to draw on.'),!1)}function Pk(){if(!jx())return;yk();let e=Dt.width,t=Dt.height;et.setTransform(1,0,0,1,0,0),et.clearRect(0,0,e,t),et.setTransform(e/1e3,0,0,t/1e3,e/2,t/2),et.lineCap="round",et.lineJoin="round";for(let n of Ys.paths){let s=Tk(n);sr>=n.start&&Ek(n,s)}}function Tk(e){let t=e.end-e.start;if(t<=0)return sr>=e.start?1:0;let n=(sr-e.start)/t;return n<0?0:n>1?1:n}function vk(e,t,n){return e<t?t:e>n?n:e}function Ek(e,t){let n=e.pts,s=n.length/2;if(s<2)return;let r=s-1,o=t*r,i=Math.min(r,Math.floor(o));et.save(),Sk(e),e.opacity<1&&(et.globalAlpha=e.opacity),e.glow>0&&(et.shadowBlur=e.glow*(Dt.width/1e3),et.shadowColor=e.fill||e.color),et.beginPath(),et.moveTo(n[0],n[1]);for(let l=1;l<=i;l++)et.lineTo(n[2*l],n[2*l+1]);let f=o-i;if(i<r&&f>0){let l=n[2*i],u=n[2*i+1],a=n[2*i+2],c=n[2*i+3];et.lineTo(l+(a-l)*f,u+(c-u)*f)}e.fill&&(et.fillStyle=e.fill,et.fill()),e.thickness>0&&(et.lineWidth=e.thickness,et.strokeStyle=e.color,et.stroke()),et.restore()}function Sk(e){if(e.bouncePeriod>0){let t=Math.abs(Math.sin(Math.PI*V$/e.bouncePeriod));et.translate(0,-e.bounceHeight*t)}if(e.swayPeriod>0){let t=e.swayDegrees*Math.sin(2*Math.PI*V$/e.swayPeriod);et.translate(e.pivotX,e.pivotY),et.rotate(t*Math.PI/180),et.translate(-e.pivotX,-e.pivotY)}}var Ck="src\\render.gleam",X$=class extends m{constructor(t,n,s,r,o,i){super(),this.points=t,this.thickness=n,this.color=s,this.start=r,this.end=o,this.effects=i}};var es=class extends m{constructor(t,n,s,r,o,i,f,l){super(),this.fill=t,this.glow=n,this.opacity=s,this.sway_pivot=r,this.sway_degrees=o,this.sway_period=i,this.bounce_height=f,this.bounce_period=l}};var Ik=new es("",0,1,new zn(0,0),0,0,0,0),Dx=3.141592653589793;function Fk(e,t){for(;;){let n=e,s=t;if(n instanceof Gr)e=n.shape,t=s;else if(n instanceof Hr){let r=n.shape,o=n.blur;e=r,t=s.glow>0?s:new es(s.fill,o,s.opacity,s.sway_pivot,s.sway_degrees,s.sway_period,s.bounce_height,s.bounce_period)}else if(n instanceof zr){let r=n.shape,o=n.color;e=r,t=s.fill===""?new es(o,s.glow,s.opacity,s.sway_pivot,s.sway_degrees,s.sway_period,s.bounce_height,s.bounce_period):s}else if(n instanceof Wr){let r=n.shape,o=n.opacity;e=r,t=new es(s.fill,s.glow,s.opacity*o/100,s.sway_pivot,s.sway_degrees,s.sway_period,s.bounce_height,s.bounce_period)}else if(n instanceof wr){let r=n.shape,o=n.pivot,i=n.degrees,f=n.period;e=r,t=s.sway_period>0?s:new es(s.fill,s.glow,s.opacity,o,i,f,s.bounce_height,s.bounce_period)}else if(n instanceof Ss){let r=n.shape,o=n.height,i=n.period;e=r,t=s.bounce_period>0?s:new es(s.fill,s.glow,s.opacity,s.sway_pivot,s.sway_degrees,s.sway_period,o,i)}else return s}}function Lk(e,t){for(;;){let n=e,s=t;if(n instanceof Gr)return n.color;if(n instanceof Hr)e=n.shape,t=s;else if(n instanceof zr)e=n.shape,t=s;else if(n instanceof Wr)e=n.shape,t=s;else if(n instanceof wr)e=n.shape,t=s;else if(n instanceof Ss)e=n.shape,t=s;else return s}}function Y$(e,t){return e>t?w:h(e,Y$(e+1,t))}function J$(e,t,n){let s=48,r=Y$(0,s);return Ze(r,o=>{let i=Fr(o,s),f=1-i,l=f*f,u=2*f*i,a=i*i;return new zn(l*e.x+u*t.x+a*n.x,l*e.y+u*t.y+a*n.y)})}function Ak(e,t,n){let s=t.x-e.x,r=t.y-e.y,o,i=Ji(s*s+r*r);if(i instanceof $){let x=i[0];x>0?o=x:o=1}else o=1;let f=o,l=0-Fr(r,f),u=Fr(s,f),a=new zn((e.x+t.x)/2,(e.y+t.y)/2),c=x=>new zn(a.x+x*2*n*l,a.y+x*2*n*u),p=J$(t,c(-1),e),d;if(p instanceof _)throw Nt("let_assert",Ck,"render",218,"leaf_points","Pattern match failed, no pattern matched the value.",{value:p,start:7038,end:7098,pattern_start:7049,pattern_end:7060});return d=p.tail,st(J$(e,c(1),t),d)}function Nx(e,t,n,s){let r=s-n,o=Jd(r)/360*2*Dx*t,i=Xi(Mr(o/6),8,360),f=Y$(0,i);return Ze(f,l=>{let a=(n+Fr(r*l,i))*Dx/180;return new zn(e.x+t*rc(a),e.y+t*nc(a))})}function Mk(e){for(;;){let t=e;if(t instanceof So){let n=t.start,s=t.end;return h(n,h(s,w))}else if(t instanceof Co){let n=t.center,s=t.radius;return Nx(n,s,0,360)}else if(t instanceof Io){let n=t.center,s=t.radius,r=t.from,o=t.to;return Nx(n,s,r,o)}else if(t instanceof Fo){let n=t.start,s=t.control,r=t.end;return J$(n,s,r)}else if(t instanceof Lo){let n=t.points;if(n instanceof _)return w;{let s=n,r=n.head;return st(s,h(r,w))}}else if(t instanceof Ao){let n=t.base,s=t.tip,r=t.width;return Ak(n,s,r)}else t instanceof Gr||t instanceof Hr||t instanceof zr||t instanceof Wr||t instanceof wr,e=t.shape}}function qx(e,t){return new X$(Mk(e.shape),e.thickness,Lk(e.shape,t),e.start,e.end,Fk(e.shape,Ik))}var Bk="src\\app.gleam",Wt=class extends m{constructor(t,n,s,r,o,i,f,l){super(),this.library=t,this.source=n,this.code_open=s,this.shape_slider=r,this.speed=o,this.paused=i,this.looping=f,this.error=l}},nC=(e,t,n,s,r,o,i,f)=>new Wt(e,t,n,s,r,o,i,f),rC=e=>e instanceof Wt,sC=e=>e.library,oC=e=>e.library,iC=e=>e.source,aC=e=>e.source,lC=e=>e.code_open,cC=e=>e.code_open,fC=e=>e.shape_slider,uC=e=>e.shape_slider,pC=e=>e.speed,$C=e=>e.speed,dC=e=>e.paused,hC=e=>e.paused,mC=e=>e.looping,xC=e=>e.looping,_C=e=>e.error,wC=e=>e.error,Zs=class extends m{constructor(t){super(),this[0]=t}},gC=e=>new Zs(e),kC=e=>e instanceof Zs,bC=e=>e[0],Wa=class extends m{},Q$=new Wa,yC=()=>Q$,PC=e=>e instanceof Wa,Ri=class extends m{constructor(t){super(),this[0]=t}},TC=e=>new Ri(e),vC=e=>e instanceof Ri,EC=e=>e[0],Bi=class extends m{constructor(t){super(),this[0]=t}},SC=e=>new Bi(e),CC=e=>e instanceof Bi,IC=e=>e[0],Ka=class extends m{},Hx=new Ka,FC=()=>Hx,LC=e=>e instanceof Ka,Xa=class extends m{},zx=new Xa,AC=()=>zx,MC=e=>e instanceof Xa,Ja=class extends m{},Wx=new Ja,RC=()=>Wx,BC=e=>e instanceof Ja,Ya=class extends m{},Kx=new Ya,OC=()=>Kx,jC=e=>e instanceof Ya,Oi=class extends m{constructor(t){super(),this[0]=t}},DC=e=>new Oi(e),NC=e=>e instanceof Oi,qC=e=>e[0],Za=class extends m{constructor(t){super(),this[0]=t}},UC=e=>new Za(e),VC=e=>e instanceof Za,GC=e=>e[0],Ux=h("#e8d8b0",h("#89ddff",h("#f78c6c",h("#c3e88d",h("#c792ea",h("#ffcb6b",h("#ff5370",h("#82aaff",w)))))))),Ok=`fn draw(shape_slider: Int) -> List(Path) {
  [Path(Line(Point(0, 0), Point(100, 100)), 0, 10, 2)]
}
`,jk=3,Dk=-3,Nk=100,qk=0,HC="https://cardin-ia.github.io/animator/",zC=!1,WC="https://drive.google.com/file/d/1wrQSBms2W4Bv_t3SE5bmNZ1OLXYoVroB/view?usp=sharing",KC=!0;function Z$(e){return pr(t=>H$(e))}function Uk(e){let t=al(Ux,no(e,rt(Ux)));return t instanceof _?"#e8d8b0":t.head}function Vk(e,t){let n=Lx(t,i1());if(n instanceof $){let s=n[0],r=m1(e,s);return uo(r,up)}else return n}function Qc(e){let t,n=Vk(e.shape_slider,e.source);if(n instanceof $){let f=n[0];t=[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,C),f]}else{let f=n[0];t=[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,new g(f)),w]}let s=t,r=s[0],o=s[1],i=bd(o,(f,l)=>qx(f,Uk(l)));return[r,pr(f=>G$(i))]}function Gk(e){let t=u1(),n=kp(t),s=new Wt(t,n,!0,50,1,!1,!1,C),r=Qc(s),o=r[0],i=r[1];return[o,El(h(Tp(n,f=>new Zs(f)),h(i,h(Z$(1),w))))]}function Hk(e){return e.paused?0:e.speed}function Xx(){return pr(e=>K$())}function zk(e){let t=Ef(e);if(t instanceof $)return t;{let n=bn(e);return W(n,Xe)}}function Vx(e,t){let n=kp(t);gp(t);let s=Qc(new Wt(t,n,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error)),r=s[0],o=s[1];return[r,El(h(Tp(n,i=>new Zs(i)),h(Xx(),h(o,w))))]}function Wk(e,t){if(t instanceof Zs){let n=t[0],s=p1(e.library,n);return gp(s),Qc(new Wt(s,n,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error))}else{if(t instanceof Wa)return[new Wt(e.library,e.source,!e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error),ms()];if(t instanceof Ri){let n=t[0],s=bn(n);if(s instanceof $){let r=s[0];return Qc(new Wt(e.library,e.source,e.code_open,r,e.speed,e.paused,e.looping,e.error))}else return[e,ms()]}else if(t instanceof Bi){let n=t[0],s=zk(n);if(s instanceof $){let r=s[0];return[new Wt(e.library,e.source,e.code_open,e.shape_slider,r,!1,e.looping,e.error),Z$(r)]}else return[e,ms()]}else if(t instanceof Ka){let n=new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,!e.paused,e.looping,e.error);return[n,Z$(Hk(n))]}else{if(t instanceof Xa)return[e,Xx()];if(t instanceof Ja){let n=!e.looping;return[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,n,e.error),pr(s=>z$(n))]}else if(t instanceof Ya){let n=e.library.current;return[e,pr(s=>W$(n))]}else if(t instanceof Oi){let n=t[0];if(n==="")return[e,pr(s=>s(new Za(wp())))];{let s=n;return Vx(e,$1(e.library,s))}}else{let n=t[0],s=Ld(n);if(s==="")return[e,ms()];{let r=s;return Vx(e,d1(e.library,r,Ok))}}}}}function Kk(e){let t=e.error;if(t instanceof g){let n=t[0];return vt(h(ie("error-banner"),w),h(vt(h(ie("error-title"),w),h(Tt("Nothing drawn"),w)),h(Mh(h(ie("error-message"),w),h(Tt(n),w)),w)))}else return fa()}function Xk(e){return vt(h(ie("canvas-area"),w),h(Bh(h(Pl("animation-canvas"),h(ie("canvas"),w))),h(Kk(e),w)))}function Jk(e){let t=Mr(e*10),n;t<0?n="-":n="";let r=n,o=il(t);return r+nt(globalThis.Math.trunc(o/10))+"."+nt(o%10)}function Gx(e,t,n,s,r,o,i,f){return jh(h(ie("slider"),w),h(wo(h(ie("slider-label"),w),h(Tt(e),w)),h(Oh(h(Ph("range"),h(ot("data-test-id",t),h(kh(n),h(gh(s),h(yh(r),h(sa(o),h(Dm(f),w)))))))),h(wo(h(ie("slider-value"),w),h(Tt(i),w)),w))))}function Yk(e){let t=Ze(e.library.drawings,n=>hu(h(sa(n[0]),h(bh(n[0]===e.library.current),w)),n[0]));return Dh(h(ie("drawing-select"),h(ot("data-test-id","drawing-select"),h(ot("title","Open or create a drawing"),h(sa(e.library.current),h(Nm(n=>new Oi(n)),w))))),st(t,h(hu(h(sa(""),w),"+ New drawing\u2026"),w)))}function Zk(e){return e.code_open?fa():Nr(h(ie("icon-btn"),h(ot("title","Show code"),h(Ur(Q$),w))),h(Tt("\u27E9"),w))}function Qk(e){return vt(h(ie("controls"),w),h(Zk(e),h(Yk(e),h(Gx("shape","shape-slider",nt(qk),nt(Nk),"1",nt(e.shape_slider),nt(e.shape_slider),t=>new Ri(t)),h(Gx("speed","speed-slider",Br(Dk),Br(jk),"0.1",Br(e.speed),Jk(e.speed)+"\xD7",t=>new Bi(t)),h(Nr(h(ie("icon-btn"),h(ot("title",e.paused?"Play":"Pause"),h(Ur(Hx),w))),h(Tt(e.paused?"\u25B6":"\u23F8"),w)),h(Nr(h(ie("icon-btn"),h(ot("title","Replay from the start"),h(Ur(zx),w))),h(Tt("\u23EE"),w)),h(Nr(h(ie(e.looping?"icon-btn active":"icon-btn"),h(ot("title","Loop the animation"),h(ot("aria-pressed",e.looping?"true":"false"),h(Ur(Wx),w)))),h(Tt("\u{1F501}"),w)),h(Nr(h(ie("icon-btn"),h(ot("title","Save the canvas as a PNG image"),h(Ur(Kx),w))),h(Tt("Save PNG"),w)),w)))))))))}function eb(e){let t;return e.code_open?t="app":t="app code-hidden",vt(h(ie(t),w),h(vt(h(ie("code-col"),w),h(_1(Q$),w)),h(vt(h(ie("anim-col"),w),h(Qk(e),h(Xk(e),w))),w)))}function XC(){let e=Om(Gk,Wk,eb),t=jm(e,"#app",void 0);if(!(t instanceof $))throw Nt("let_assert",Bk,"app",461,"main","Pattern match failed, no pattern matched the value.",{value:t,start:13908,end:13957,pattern_start:13919,pattern_end:13924})}export{Za as CreateDrawing,Wt as Model,nC as Model$Model,oC as Model$Model$0,aC as Model$Model$1,cC as Model$Model$2,uC as Model$Model$3,$C as Model$Model$4,hC as Model$Model$5,xC as Model$Model$6,wC as Model$Model$7,lC as Model$Model$code_open,_C as Model$Model$error,sC as Model$Model$library,mC as Model$Model$looping,dC as Model$Model$paused,fC as Model$Model$shape_slider,iC as Model$Model$source,pC as Model$Model$speed,rC as Model$isModel,UC as Msg$CreateDrawing,GC as Msg$CreateDrawing$0,AC as Msg$Replay,zx as Msg$Replay$const,OC as Msg$SavePng,Kx as Msg$SavePng$const,DC as Msg$SelectDrawing,qC as Msg$SelectDrawing$0,gC as Msg$SetCode,bC as Msg$SetCode$0,TC as Msg$SetShapeSlider,EC as Msg$SetShapeSlider$0,SC as Msg$SetSpeed,IC as Msg$SetSpeed$0,yC as Msg$ToggleCode,Q$ as Msg$ToggleCode$const,RC as Msg$ToggleLoop,Wx as Msg$ToggleLoop$const,FC as Msg$TogglePause,Hx as Msg$TogglePause$const,VC as Msg$isCreateDrawing,MC as Msg$isReplay,jC as Msg$isSavePng,NC as Msg$isSelectDrawing,kC as Msg$isSetCode,vC as Msg$isSetShapeSlider,CC as Msg$isSetSpeed,PC as Msg$isToggleCode,BC as Msg$isToggleLoop,LC as Msg$isTogglePause,Xa as Replay,Ya as SavePng,Oi as SelectDrawing,Zs as SetCode,Ri as SetShapeSlider,Bi as SetSpeed,Wa as ToggleCode,Ja as ToggleLoop,Ka as TogglePause,zC as include_app_in_gallery,KC as include_video_in_gallery,Gk as init,XC as main,HC as public_url,Wk as update,WC as video_url,eb as view};
