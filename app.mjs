var m=class{withFields(t){let n=Object.keys(this).map(s=>s in t?t[s]:this[s]);return new this.constructor(...n)}},Ql=class{static fromArray(t,n){return ns(t,n)}[Symbol.iterator](){return new nf(this)}toArray(){return[...this]}atLeastLength(t){let n=this;for(;t-- >0&&n;)n=n.tail;return n!==void 0}hasLength(t){let n=this;for(;t-- >0&&n;)n=n.tail;return t===-1&&n instanceof _}countLength(){let t=this,n=0;for(;t;)t=t.tail,n++;return n-1}};function h(e,t){return new eo(e,t)}function ns(e,t){let n=t||w;for(let s=e.length-1;s>=0;--s)n=new eo(e[s],n);return n}var nf=class{#e;constructor(t){this.#e=t}next(){if(this.#e instanceof _)return{done:!0};{let{head:t,tail:n}=this.#e;return this.#e=n,{value:t,done:!1}}}},_=class extends Ql{},w=new _,td=()=>w,rf=e=>e instanceof _,eo=class extends Ql{constructor(t,n){super(),this.head=t,this.tail=n}},Ni=(e,t)=>new eo(e,t),ir=e=>e instanceof eo,qi=e=>e.head,Ir=e=>e.tail,to=class{bitSize;byteSize;bitOffset;rawBuffer;constructor(t,n,s){if(!(t instanceof Uint8Array))throw globalThis.Error("BitArray can only be constructed from a Uint8Array");if(this.bitSize=n??t.length*8,this.byteSize=Math.trunc((this.bitSize+7)/8),this.bitOffset=s??0,this.bitSize<0)throw globalThis.Error(`BitArray bit size is invalid: ${this.bitSize}`);if(this.bitOffset<0||this.bitOffset>7)throw globalThis.Error(`BitArray bit offset is invalid: ${this.bitOffset}`);if(t.length!==Math.trunc((this.bitOffset+this.bitSize+7)/8))throw globalThis.Error("BitArray buffer length is invalid");this.rawBuffer=t}byteAt(t){if(!(t<0||t>=this.byteSize))return Di(this.rawBuffer,this.bitOffset,t)}equals(t){if(this.bitSize!==t.bitSize)return!1;let n=Math.trunc(this.bitSize/8);if(this.bitOffset===0&&t.bitOffset===0){for(let r=0;r<n;r++)if(this.rawBuffer[r]!==t.rawBuffer[r])return!1;let s=this.bitSize%8;if(s){let r=8-s;if(this.rawBuffer[n]>>r!==t.rawBuffer[n]>>r)return!1}}else{for(let r=0;r<n;r++){let o=Di(this.rawBuffer,this.bitOffset,r),i=Di(t.rawBuffer,t.bitOffset,r);if(o!==i)return!1}let s=this.bitSize%8;if(s){let r=Di(this.rawBuffer,this.bitOffset,n),o=Di(t.rawBuffer,t.bitOffset,n),i=8-s;if(r>>i!==o>>i)return!1}}return!0}get buffer(){if(this.bitOffset!==0||this.bitSize%8!==0)throw new globalThis.Error("BitArray.buffer does not support unaligned bit arrays");return this.rawBuffer}get length(){if(this.bitOffset!==0||this.bitSize%8!==0)throw new globalThis.Error("BitArray.length does not support unaligned bit arrays");return this.rawBuffer.length}};function Di(e,t,n){if(t===0)return e[n]??0;{let s=e[n]<<t&255,r=e[n+1]>>8-t;return s|r}}var ea=class{constructor(t){this.value=t}};var ta=class e extends m{static isResult(t){return t instanceof e}},$=class extends ta{constructor(t){super(),this[0]=t}isOk(){return!0}},tt=e=>new $(e),rs=e=>e instanceof $,Ui=e=>e[0],y=class extends ta{constructor(t){super(),this[0]=t}isOk(){return!1}},ct=e=>new y(e),nd=e=>e instanceof y;function mt(e,t){let n=[e,t];for(;n.length;){let s=n.pop(),r=n.pop();if(s===r)continue;if(!ed(s)||!ed(r)||!s_(s,r)||Zx(s,r)||Qx(s,r)||e_(s,r)||t_(s,r)||n_(s,r)||r_(s,r))return!1;let i=Object.getPrototypeOf(s);if(i!==null&&typeof i.equals=="function")try{if(s.equals(r))continue;return!1}catch{}let[f,a]=Yx(s),u=f(s),l=f(r);if(u.length!==l.length)return!1;for(let c of u)n.push(a(s,c),a(r,c))}return!0}function Yx(e){if(e instanceof Map)return[t=>t.keys(),(t,n)=>t.get(n)];{let t=e instanceof globalThis.Error?["message"]:[];return[n=>[...t,...Object.keys(n)],(n,s)=>n[s]]}}function Zx(e,t){return e instanceof Date&&(e>t||e<t)}function Qx(e,t){return!(e instanceof to)&&e.buffer instanceof ArrayBuffer&&e.BYTES_PER_ELEMENT&&!(e.byteLength===t.byteLength&&e.every((n,s)=>n===t[s]))}function e_(e,t){return Array.isArray(e)&&e.length!==t.length}function t_(e,t){return e instanceof Map&&e.size!==t.size}function n_(e,t){return e instanceof Set&&(e.size!=t.size||[...e].some(n=>!t.has(n)))}function r_(e,t){return e instanceof RegExp&&(e.source!==t.source||e.flags!==t.flags)}function ed(e){return typeof e=="object"&&e!==null}function s_(e,t){return typeof e!="object"&&typeof t!="object"&&(!e||!t)||[Promise,WeakSet,WeakMap,Function].some(s=>e instanceof s)?!1:e.constructor===t.constructor}function no(e,t){return t===0?0:e%t}function na(e,t){return Math.trunc(Fr(e,t))}function Fr(e,t){return t===0?0:e/t}function Nt(e,t,n,s,r,o,i){let f=new globalThis.Error(o);f.gleam_error=e,f.file=t,f.module=n,f.line=s,f.function=r,f.fn=r;for(let a in i)f[a]=i[a];return f}var qt=class extends m{},ro=new qt,rd=()=>ro;var Ut=class extends m{},so=new Ut,sd=()=>so;var sf=class extends m{},oo=new sf,od=()=>oo;var k=class extends m{constructor(t){super(),this[0]=t}};var gn=class extends m{},S=new gn;var id=new WeakMap,of=new DataView(new ArrayBuffer(8)),lf=0;function cf(e){let t=id.get(e);if(t!==void 0)return t;let n=lf++;return lf===2147483647&&(lf=0),id.set(e,n),n}function ld(e,t){return e^t+2654435769+(e<<6)+(e>>2)|0}function ff(e){let t=0,n=e.length;for(let s=0;s<n;s++)t=Math.imul(31,t)+e.charCodeAt(s)|0;return t}function cd(e){of.setFloat64(0,e);let t=of.getInt32(0),n=of.getInt32(4);return Math.imul(73244475,t>>16^t)^n}function o_(e){return ff(e.toString())}function i_(e){let t=Object.getPrototypeOf(e);if(t!==null&&typeof t.hashCode=="function")try{let s=e.hashCode(e);if(typeof s=="number")return s}catch{}if(e instanceof Promise||e instanceof WeakSet||e instanceof WeakMap)return cf(e);if(e instanceof Date)return cd(e.getTime());let n=0;if(e instanceof ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||e instanceof Uint8Array)for(let s=0;s<e.length;s++)n=Math.imul(31,n)+lr(e[s])|0;else if(e instanceof Set)e.forEach(s=>{n=n+lr(s)|0});else if(e instanceof Map)e.forEach((s,r)=>{n=n+ld(lr(s),lr(r))|0});else{let s=Object.keys(e);for(let r=0;r<s.length;r++){let o=s[r],i=e[o];n=n+ld(lr(i),ff(o))|0}}return n}function lr(e){if(e===null)return 1108378658;if(e===void 0)return 1108378659;if(e===!0)return 1108378657;if(e===!1)return 1108378656;switch(typeof e){case"number":return cd(e);case"string":return ff(e);case"bigint":return o_(e);case"object":return i_(e);case"symbol":return cf(e);case"function":return cf(e);default:return 0}}var ar=class{constructor(t,n){this.size=t,this.root=n}},ra=5,l_=(1<<ra)-1,Gi=Symbol(),Hi=Symbol(),fd=f_(0),a_=new ar(0,fd),c_=ct(void 0);function sa(e,t,n,s){return{datamap:t,nodemap:n,data:s,[Hi]:e}}function f_(e){return sa(e,0,0,[])}function u_(e,t){if(e[Hi]===t)return e;let n=e.data.slice(0);return sa(t,e.datamap,e.nodemap,n)}function af(e,t,n,s){return e.data[n]===s||(e=u_(e,t),e.data[n]=s),e}function ad(e,t,n,s,r,o){let i=e.data,f=i.length,a=new Array(f+2),u=0,l=0;for(;u<s;)a[l++]=i[u++];for(a[l++]=r,a[l++]=o;u<f;)a[l++]=i[u++];return sa(t,e.datamap|n,e.nodemap,a)}function io(){return a_}function Ki(e){return e.size}function os(e,t){let n=ud(e.root,t,lr(t));return n!==Gi?tt(n):c_}function ud(e,t,n){for(let r=0;r<32;r+=ra){let o=e.data,i=dd(n,r);if(e.nodemap&i)e=o[o.length-1-Wi(e.nodemap,i)];else if(e.datamap&i){let f=Math.imul(Wi(e.datamap,i),2);return mt(t,o[f])?o[f+1]:Gi}else return Gi}let s=e.data;for(let r=0;r<s.length;r+=2)if(mt(t,s[r]))return s[r+1];return Gi}function uf(e){return{generation:p_(e),root:e.root,size:e.size,dict:e}}function pf(e){return e.root===e.dict.root?e.dict:new ar(e.size,e.root)}function p_(e){let t=e.root;if(t[Hi]<Number.MAX_SAFE_INTEGER)return t[Hi]+1;let n=[t];for(;n.length;){let s=n.pop();s[Hi]=0;let r=data.length-$f(s.nodemap);for(let o=r;o<s.data.length;++o)n.push(s.data[o])}return 1}function pd(e,t,n){let s=lr(e);return n.root=zi(n,n.root,e,t,s,0),n}function $d(e,t,n,s){let r=lr(e),o=ud(s.root,e,r);return o!==Gi&&(n=t(o)),s.root=zi(s,s.root,e,n,r,0),s}function zi(e,t,n,s,r,o){let i=t.data,f=e.generation;if(o>32){for(let L=0;L<i.length;L+=2)if(mt(n,i[L]))return af(t,f,L+1,s);return e.size+=1,ad(t,f,0,i.length,n,s)}let a=dd(r,o);if(t.nodemap&a){let L=i.length-1-Wi(t.nodemap,a),M=i[L];return M=zi(e,M,n,s,r,o+ra),af(t,f,L,M)}let u=Math.imul(Wi(t.datamap,a),2);if((t.datamap&a)===0)return e.size+=1,ad(t,f,a,u,n,s);if(mt(n,i[u]))return af(t,f,u+1,s);let l=o+ra,c=fd;c=zi(e,c,n,s,r,l);let p=i[u],d=i[u+1],x=lr(p);c=zi(e,c,p,d,x,l),e.size-=1;let b=i.length,T=b-1-Wi(t.nodemap,a),v=new Array(b-1),I=0,F=0;for(;I<u;)v[F++]=i[I++];for(I+=2;I<=T;)v[F++]=i[I++];for(v[F++]=c;I<b;)v[F++]=i[I++];return sa(f,t.datamap^a,t.nodemap|a,v)}function Lr(e,t,n){let s=[e.root];for(;s.length;){let r=s.pop(),o=r.data,i=o.length-$f(r.nodemap);for(let f=0;f<i;f+=2)t=n(t,o[f],o[f+1]);for(let f=i;f<o.length;++f)s.push(o[f])}return t}function $f(e){return e-=e>>>1&1431655765,e=(e&858993459)+(e>>>2&858993459),Math.imul(e+(e>>>4)&252645135,16843009)>>>24}function Wi(e,t){return $f(e&t-1)}function dd(e,t){return 1<<(e>>>t&l_)}function d_(e,t){for(;;){let n=e,s=t;if(s instanceof _)return pf(n);{let r=s.tail,o=s.head[0],i=s.head[1];e=pd(o,i,n),t=r}}}function Ar(e){return d_(uf(io()),e)}function h_(e,t,n){let s;Ki(t)>=Ki(n)?s=[t,n,e]:s=[n,t,(c,p,d)=>e(c,d,p)];let o=s,i=o[0],f=o[1],a=o[2],u=uf(i),l=Lr(f,u,(c,p,d)=>$d(p,b=>a(p,b,d),d,c));return pf(l)}function m_(e,t,n){return h_((s,r,o)=>n(r,o),e,t)}function hd(e,t){return m_(e,t,(n,s)=>s)}function md(e,t){return Lr(e,void 0,(n,s,r)=>(t(s,r),n))}function ia(e){return e>=0?e:e*-1}function lo(e,t){return e>t?e:t}function df(e,t){return e<t?e:t}function Xi(e,t,n){if(t>=n){let o=df(e,t);return lo(o,n)}else{let o=df(e,n);return lo(o,t)}}function _d(e,t){return e===t?so:e<t?ro:oo}var cr=class extends m{},jn=new cr,hf=class extends m{},Yi=new hf;function x_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;e=n.tail,t=s+1}}function rt(e){return x_(e,0)}function __(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return o;{let i=s.head,f=s.tail;r(i)?(e=f,t=r,n=o+1):(e=f,t=r,n=o)}}}function gd(e,t){return __(e,t,0)}function ls(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;e=n.tail,t=h(r,s)}}}function E(e){return ls(e,w)}function mf(e,t){for(;;){let n=e,s=t;if(n instanceof _)return!1;{let r=n.head;if(mt(r,s))return!0;e=n.tail,t=s}}}function w_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.head,f=s.tail,a;r(i)?a=h(i,o):a=o;let l=a;e=f,t=r,n=l}}}function as(e,t){return w_(e,t,w)}function k_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.head,f=s.tail,a,u=r(i);if(u instanceof $){let c=u[0];a=h(c,o)}else a=o;let l=a;e=f,t=r,n=l}}}function xf(e,t){return k_(e,t,w)}function g_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.head;e=s.tail,t=r,n=h(r(i),o)}}}function Ze(e,t){return g_(e,t,w)}function b_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return E(f);{let a=r.head,u=r.tail,l=h(o(a,i),f);e=u,t=o,n=i+1,s=l}}}function bd(e,t){return b_(e,t,0,w)}function y_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return new $(E(o));{let i=s.head,f=s.tail,a=r(i);if(a instanceof $){let u=a[0];e=f,t=r,n=h(u,o)}else return a}}}function gt(e,t){return y_(e,t,w)}function la(e,t){for(;;){let n=e,s=t;if(s<=0)return n;if(n instanceof _)return n;e=n.tail,t=s-1}}function T_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;e=n.tail,t=h(r,s)}}}function st(e,t){return T_(E(e),t)}function aa(e,t){return h(t,e)}function P_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return E(s);{let r=n.head;e=n.tail,t=ls(r,s)}}}function fo(e){return P_(e,w)}function yd(e,t){return fo(Ze(e,t))}function bt(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return r;{let i=s.head;e=s.tail,t=o(r,i),n=o}}}function ca(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return new $(r);{let i=s.head,f=s.tail,a=o(r,i);if(a instanceof $){let u=a[0];e=f,t=u,n=o}else return a}}}function Td(e,t){for(;;){let n=e,s=t;if(n instanceof _)return new y(void 0);{let r=n.head,o=n.tail;if(s(r))return new $(r);e=o,t=s}}}function v_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return new y(void 0);{let r=n.head,o=n.tail,i=s(r);if(i instanceof $)return i;e=o,t=s}}}function Pd(e,t){for(;;){let n=e,s=t;if(n instanceof _)return!1;{let r=n.head,o=n.tail,i=s(r);if(i)return i;e=o,t=s}}}function E_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);if(r instanceof _)return E(o);{let i=s.head,f=s.tail,a=r.head,u=r.tail;e=f,t=u,n=h([i,a],o)}}}function fa(e,t){return E_(e,t,w)}function C_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return ls(o,f);if(o instanceof _)return ls(r,f);{let a=r.head,u=r.tail,l=o.head,c=o.tail,p=i(a,l);p instanceof qt?(e=r,t=c,n=i,s=h(l,f)):p instanceof Ut?(e=u,t=o,n=i,s=h(a,f)):(e=u,t=o,n=i,s=h(a,f))}}}function S_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.tail;if(i instanceof _){let f=s.head;return E(h(E(f),o))}else{let f=s.head,a=i.head,u=i.tail,l=C_(f,a,r,w);e=u,t=r,n=h(l,o)}}}}function I_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return ls(o,f);if(o instanceof _)return ls(r,f);{let a=r.head,u=r.tail,l=o.head,c=o.tail,p=i(a,l);p instanceof qt?(e=u,t=o,n=i,s=h(a,f)):p instanceof Ut?(e=r,t=c,n=i,s=h(l,f)):(e=r,t=c,n=i,s=h(l,f))}}}function F_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return E(o);{let i=s.tail;if(i instanceof _){let f=s.head;return E(h(E(f),o))}else{let f=s.head,a=i.head,u=i.tail,l=I_(f,a,r,w);e=u,t=r,n=h(l,o)}}}}function L_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return s;if(r instanceof cr){if(s.tail instanceof _)return s.head;e=F_(s,o,w),t=Yi,n=o}else if(s.tail instanceof _){let i=s.head;return E(i)}else e=S_(s,o,w),t=jn,n=o}}function A_(e,t,n,s,r,o){for(;;){let i=e,f=t,a=n,u=s,l=r,c=o,p=h(l,a);if(i instanceof _)return u instanceof cr?h(E(p),c):h(p,c);{let d=i.head,x=i.tail,b=f(l,d);if(u instanceof cr)if(b instanceof qt)e=x,t=f,n=p,s=u,r=d,o=c;else if(b instanceof Ut)e=x,t=f,n=p,s=u,r=d,o=c;else{let T;u instanceof cr?T=h(E(p),c):T=h(p,c);let v=T;if(x instanceof _)return h(h(d,w),v);{let I=x.head,F=x.tail,L,M=f(d,I);M instanceof qt||M instanceof Ut?L=jn:L=Yi;let G=L;e=F,t=f,n=h(d,w),s=G,r=I,o=v}}else if(b instanceof qt){let T;u instanceof cr?T=h(E(p),c):T=h(p,c);let v=T;if(x instanceof _)return h(h(d,w),v);{let I=x.head,F=x.tail,L,M=f(d,I);M instanceof qt||M instanceof Ut?L=jn:L=Yi;let G=L;e=F,t=f,n=h(d,w),s=G,r=I,o=v}}else if(b instanceof Ut){let T;u instanceof cr?T=h(E(p),c):T=h(p,c);let v=T;if(x instanceof _)return h(h(d,w),v);{let I=x.head,F=x.tail,L,M=f(d,I);M instanceof qt||M instanceof Ut?L=jn:L=Yi;let G=L;e=F,t=f,n=h(d,w),s=G,r=I,o=v}}else e=x,t=f,n=p,s=u,r=d,o=c}}}function ua(e,t){if(e instanceof _)return e;{let n=e.tail;if(n instanceof _)return e;{let s=e.head,r=n.head,o=n.tail,i,f=t(s,r);f instanceof qt||f instanceof Ut?i=jn:i=Yi;let a=i,u=A_(o,t,h(s,w),a,r,w);return L_(u,jn,t)}}}function M_(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return[E(o),w];{let i=s.head,f=s.tail;if(r(i))e=f,t=r,n=h(i,o);else return[E(o),s]}}}function vd(e,t){return M_(e,t,w)}function Kt(e,t){return v_(e,n=>{let s=n[0],r=n[1];return mt(s,t)?new $(r):new y(void 0)})}function R_(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(r instanceof _)return E(h([o,i],f));{let a=r.head[0];if(mt(a,o)){let u=r.tail;return ls(f,h([a,i],u))}else{let u=r.head;e=r.tail,t=o,n=i,s=h(u,f)}}}}function Ed(e,t,n){return R_(e,t,n,w)}function _f(e,t){for(;;){let n=e,s=t;if(n instanceof _)return;{let r=n.head,o=n.tail;s(r),e=o,t=s}}}function Cd(e,t){for(;;){let n=e,s=t;if(n instanceof _)return new $(void 0);{let r=n.head,o=n.tail,i=s(r);if(i instanceof $)e=o,t=s;else return i}}}var wf=class extends m{},M0=new wf;var bf=class extends m{},q0=new bf,yf=class extends m{},U0=new yf;function $a(e,t){if(t==="")return kf(e);{let s=e,r=gf(s,t);return Ze(r,Xe)}}function N_(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;e=n.tail,t=s+r}}}function Fd(e){return N_(e,"")}function Ld(e){let n=Md(e);return ha(n)}function Ad(e){let n=Rd(e);return n}var cs=class extends m{constructor(t,n,s){super(),this.expected=t,this.found=n,this.path=s}},Od=(e,t,n)=>new cs(e,t,n);var Nn=class extends m{constructor(t){super(),this.function=t}};var H_=new Nn(z_),jd=new Nn(W_);var fr=new Nn(K_);function ur(e,t){let n=t.function(e),s=n[0],r=n[1];return r instanceof _?new $(s):new y(r)}function Tf(e,t,n){let s=n(e);return s instanceof $?[s[0],w]:[s[0],h(new cs(t,is(e),w),w)]}function z_(e){return Tf(e,"Float",Ud)}function fs(e,t){return new Nn(n=>{let s=e.function(n),r=s[0],o=s[1];return[t(r),o]})}function W_(e){return Tf(e,"Int",Vd)}function K_(e){return Tf(e,"String",Gd)}function X_(e,t,n){for(;;){let s=e,r=t,o=n;if(o instanceof _)return r;{let i=o.head,f=o.tail,a=i.function(s),u=a;if(a[1]instanceof _)return u;e=s,t=r,n=f}}}function Dd(e,t){return new Nn(n=>{let s=e.function(n),r=s;return s[1]instanceof _?r:X_(n,r,t)})}function J_(e){let t=Dd(fr,h(fs(jd,nt),h(fs(H_,Br),w))),n=ur(e,t);return n instanceof $?n[0]:"<"+is(e)+">"}function ma(e,t){let n=Ze(t,r=>{let i=r;return J_(i)}),s=Ze(e[1],r=>new cs(r.expected,r.found,st(n,r.path)));return[e[0],s]}function xa(e){return new Nn(t=>qd(t,e.function,(n,s)=>ma(n,h(s,w)),0,w))}function Y_(e,t,n,s,r){for(;;){let o=e,i=t,f=n,a=s,u=r;if(o instanceof _){let c=f(a);return ma(c,E(i))}else{let l=o.head,c=o.tail,p=Nd(a,l);if(p instanceof $){let d=p[0];if(d instanceof k){let x=d[0];e=c,t=h(l,i),n=f,s=x,r=u}else return u(a,h(l,i))}else{let d=p[0],T=[f(a)[0],h(new cs(d,is(a),w),w)];return ma(T,E(i))}}}}function _a(e,t,n){return new Nn(s=>{let r=Y_(e,w,t.function,s,(l,c)=>{let x=[t.function(l)[0],h(new cs("Field","Nothing",w),w)];return ma(x,E(c))}),o=r[0],i=r[1],f=n(o).function(s),a=f[0],u=f[1];return[a,st(i,u)]})}function Rr(e){return new Nn(t=>[e,w])}function us(e,t,n){return _a(h(e,w),t,n)}var vf=void 0;function Xe(e){return e}function bn(e){return/^[-+]?(\d+)$/.test(e)?tt(parseInt(e)):ct(vf)}function Ef(e){return/^[-+]?(\d+)\.(\d+)([eE][-+]?\d+)?$/.test(e)?tt(parseFloat(e)):ct(vf)}function nt(e){return e.toString()}function kf(e){let t=zd(e);return Qi(t?Array.from(t).map(n=>n.segment):e.match(/./gsu))}var Hd;function zd(e){if(globalThis.Intl&&Intl.Segmenter)return Hd||=new Intl.Segmenter,Hd.segment(e)[Symbol.iterator]()}function da(e){let t,n=zd(e);return n?t=n.next().value?.segment:t=e.match(/./su)?.[0],t?tt([t,e.slice(t.length)]):ct(vf)}function gf(e,t){return Qi(e.split(t))}function Zi(e,t){return e.startsWith(t)}var Wd=[" ","	",`
`,"\v","\f","\r","\x85","\u2028","\u2029"].join(""),ew=new RegExp(`^[${Wd}]*`),tw=new RegExp(`[${Wd}]*$`);function Md(e){return e.replace(ew,"")}function ha(e){return e.replace(tw,"")}function Kd(e){return Math.ceil(e)}function Cf(e){return Math.round(e)}function wa(e){return Math.trunc(e)}function Xd(e,t){return Math.pow(e,t)}function ao(){let e=Math.random();return e===1?ao():e}function is(e){if(typeof e=="string")return"String";if(typeof e=="boolean")return"Bool";if(nw(e))return"Result";if(ka(e))return"List";if(e instanceof to)return"BitArray";if(e instanceof ar)return"Dict";if(Number.isInteger(e))return"Int";if(Array.isArray(e))return"Array";if(typeof e=="number")return"Float";if(e===null)return"Nil";if(e===void 0)return"Nil";{let t=typeof e;return t.charAt(0).toUpperCase()+t.slice(1)}}function rn(e){return new TextEncoder().encode(e).length}var Ay=-(2**31),My=2**31-1,Ry=2**32,By=Number.MAX_SAFE_INTEGER,Oy=Number.MIN_SAFE_INTEGER;function Rd(e){return new Pf().inspect(e)}function Br(e){let t=e.toString().replace("+","");if(t.indexOf(".")>=0)return t;{let n=t.indexOf("e");return n>=0?t.slice(0,n)+".0"+t.slice(n):t+".0"}}var Pf=class{#e=new Set;inspect(t){let n=typeof t;if(t===!0)return"True";if(t===!1)return"False";if(t===null)return"//js(null)";if(t===void 0)return"Nil";if(n==="string")return this.#i(t);if(n==="bigint"||Number.isInteger(t))return t.toString();if(n==="number")return Br(t);if(t instanceof ea)return this.#o(t);if(t instanceof to)return this.#n(t);if(t instanceof RegExp)return`//js(${t})`;if(t instanceof Date)return`//js(Date("${t.toISOString()}"))`;if(t instanceof globalThis.Error)return`//js(${t.toString()})`;if(t instanceof Function){let r=[];for(let o of Array(t.length).keys())r.push(String.fromCharCode(o+97));return`//fn(${r.join(", ")}) { ... }`}if(this.#e.size===this.#e.add(t).size)return"//js(circular reference)";let s;if(Array.isArray(t))s=`#(${t.map(r=>this.inspect(r)).join(", ")})`;else if(ka(t))s=this.#t(t);else if(t instanceof m)s=this.#s(t);else if(t instanceof ar)s=this.#r(t);else{if(t instanceof Set)return`//js(Set(${[...t].map(r=>this.inspect(r)).join(", ")}))`;s=this.#a(t)}return this.#e.delete(t),s}#a(t){let n=Object.getPrototypeOf(t)?.constructor?.name||"Object",s=[];for(let i of Object.keys(t))s.push(`${this.inspect(i)}: ${this.inspect(t[i])}`);let r=s.length?" "+s.join(", ")+" ":"";return`//js(${n==="Object"?"":n+" "}{${r}})`}#r(t){let n="dict.from_list([",s=!0;return n=Lr(t,n,(r,o,i)=>(s||(r=r+", "),s=!1,r+"#("+this.inspect(o)+", "+this.inspect(i)+")")),n+"])"}#s(t){let n=Object.keys(t).map(s=>{let r=this.inspect(t[s]);return isNaN(parseInt(s))?`${s}: ${r}`:r}).join(", ");return n?`${t.constructor.name}(${n})`:t.constructor.name}#t(t){if(rf(t))return"[]";let n='charlist.from_string("',s="[",r=t;for(;ir(r);){let o=r.head;r=r.tail,s!=="["&&(s+=", "),s+=this.inspect(o),n&&(Number.isInteger(o)&&o>=32&&o<=126?n+=String.fromCharCode(o):n=null)}return n?n+'")':s+"]"}#i(t){let n='"';for(let s=0;s<t.length;s++){let r=t[s];switch(r){case`
`:n+="\\n";break;case"\r":n+="\\r";break;case"	":n+="\\t";break;case"\f":n+="\\f";break;case"\\":n+="\\\\";break;case'"':n+='\\"';break;default:r<" "||r>"~"&&r<"\xA0"?n+="\\u{"+r.charCodeAt(0).toString(16).toUpperCase().padStart(4,"0")+"}":n+=r}}return n+='"',n}#o(t){return`//utfcodepoint(${String.fromCodePoint(t.value)})`}#n(t){if(t.bitSize===0)return"<<>>";let n="<<";for(let s=0;s<t.byteSize-1;s++)n+=t.byteAt(s).toString(),n+=", ";if(t.byteSize*8===t.bitSize)n+=t.byteAt(t.byteSize-1).toString();else{let s=t.bitSize%8;n+=t.byteAt(t.byteSize-1)>>8-s,n+=`:size(${s})`}return n+=">>",n}};function Nd(e,t){if(e instanceof ar){let s=os(e,t);return tt(s.isOk()?new k(s[0]):new gn)}if(e instanceof WeakMap||e instanceof Map){let s={},r=e.get(t,s);return r===s?tt(new gn):tt(new k(r))}let n=Number.isInteger(t);if(n&&t>=0&&t<8&&ka(e)){let s=0;for(let r of e){if(s===t)return tt(new k(r));s++}return ct("Indexable")}return n&&Array.isArray(e)||e&&typeof e=="object"||e&&Object.getPrototypeOf(e)===Object.prototype?t in e?tt(new k(e[t])):tt(new gn):ct(n?"Indexable":"Dict")}function qd(e,t,n,s,r){if(!(ka(e)||Array.isArray(e))){let i=Od("List",is(e),r);return[r,Qi([i])]}let o=[];for(let i of e){let f=t(i),[a,u]=f;if(ir(u)){let[l,c]=n(f,s.toString());return[r,c]}o.push(a),s++}return[Qi(o),r]}function Ud(e){return typeof e=="number"?tt(e):ct(0)}function Vd(e){return Number.isInteger(e)?tt(e):ct(0)}function Gd(e){return typeof e=="string"?tt(e):ct("")}function Qi(e){let t=td(),n=e.length;for(;n--;)t=Ni(e[n],t);return t}function ka(e){return rf(e)||ir(e)}function nw(e){return rs(e)||nd(e)}function Jd(e){return e>=0?e:0-e}function rw(e){return-1*e}function Mr(e){return e>=0?Cf(e):0-Cf(rw(e))}function kd(e,t){let n=Kd(t)-t>0;return e<0&&n||e===0&&t<0?new y(void 0):new $(Xd(e,t))}function Ji(e){return kd(e,.5)}function Yd(e){return!(e instanceof $)}function W(e,t){if(e instanceof $){let n=e[0];return new $(t(n))}else return e}function uo(e,t){if(e instanceof $)return e;{let n=e[0];return new y(t(n))}}function P(e,t){if(e instanceof $){let n=e[0];return t(n)}else return e}function el(e,t){return e instanceof $?e[0]:t}function Zd(e,t){return e instanceof $?e:new y(t)}var Sf=class extends m{},sw=new Sf;var If=class extends m{},e2=new If;var Ff=class extends m{},t2=new Ff,Lf=class extends m{},n2=new Lf;var Af=class extends m{},r2=new Af;var Mf=class extends m{},s2=new Mf;var Rf=class extends m{},u2=new Rf;var Bf=class extends m{},p2=new Bf;var Of=class extends m{},$2=new Of;var jf=class extends m{},M2=new jf;var Df=class extends m{},j2=new Df;var Nf=class extends m{},lw=new Nf;var qf=class extends m{},D2=new qf;var Uf=class extends m{},aw=new Uf;var Vf=class extends m{},K2=new Vf;function th(e,t,n){return e?t:n()}function $s(e){return e}function Gf(e){return JSON.stringify(e)}function rh(e){return Object.fromEntries(e)}function sh(e){let t=[];for(;ir(e);)t.push(qi(e)),e=Ir(e);return t}function oh(e){try{let t=JSON.parse(e);return tt(t)}catch(t){return ct(uw(t,e))}}function uw(e,t){return pw(e)?ih():$w(e,t)}function pw(e){return/((unexpected (end|eof))|(end of data)|(unterminated string)|(json( parse error|\.parse)\: expected '(\:|\}|\])'))/i.test(e.message)}function $w(e,t){let n=[dw,hw,xw,mw];for(let s of n){let r=s(e,t);if(r)return r}return po("")}function dw(e){let n=/unexpected token '(.)', ".+" is not valid JSON/i.exec(e.message);if(!n)return null;let s=ga(n[1]);return po(s)}function hw(e){let n=/unexpected token (.) in JSON at position (\d+)/i.exec(e.message);if(!n)return null;let s=ga(n[1]);return po(s)}function mw(e,t){let s=/(unexpected character|expected .*) at line (\d+) column (\d+)/i.exec(e.message);if(!s)return null;let r=Number(s[2]),o=Number(s[3]),i=_w(r,o,t),f=ga(t[i]);return po(f)}function xw(e){let n=/unexpected (identifier|token) "(.)"/i.exec(e.message);if(!n)return null;let s=ga(n[2]);return po(s)}function ga(e){return"0x"+e.charCodeAt(0).toString(16).toUpperCase()}function _w(e,t,n){if(e===1)return t-1;let s=1,r=0;return n.split("").find((o,i)=>(o===`
`&&(s+=1),s===e?(r=i+t,!0):!1)),r}var Hf=class extends m{},ww=new Hf,ih=()=>ww;var zf=class extends m{constructor(t){super(),this[0]=t}},po=e=>new zf(e);var Wf=class extends m{constructor(t){super(),this[0]=t}};function kw(e,t){return P(oh(e),n=>{let s=ur(n,t);return uo(s,r=>new Wf(r))})}function lh(e,t){return kw(e,t)}function ah(e){return Gf(e)}function Or(e){return e}function Xf(e){return e}function tl(e){return rh(e)}function gw(e){return sh(e)}function ba(e,t){let s=Ze(e,t);return gw(s)}function nl(e){return e.replaceAll(/[><&"']/g,t=>{switch(t){case">":return"&gt;";case"<":return"&lt;";case"'":return"&#39;";case"&":return"&amp;";case'"':return"&quot;";default:return t}})}var V=w,$o=new y(void 0);function Bt(e){return h(e,V)}var bw=od(),yw=rd(),Tw=sd();function ya(e,t){return e.name===t.name?Tw:e.name<t.name?yw:bw}var sn=class extends m{constructor(t,n,s){super(),this.kind=t,this.name=n,this.value=s}};var hs=class extends m{constructor(t,n,s){super(),this.kind=t,this.name=n,this.value=s}};var Ot=class extends m{constructor(t,n,s,r,o,i,f,a){super(),this.kind=t,this.name=n,this.handler=s,this.include=r,this.prevent_default=o,this.stop_propagation=i,this.debounce=f,this.throttle=a}};var ho=class extends m{constructor(t,n,s){super(),this.prevent_default=t,this.stop_propagation=n,this.message=s}};var Yf=class extends m{constructor(t){super(),this.kind=t}};var Zf=0,Qf=1,eu=2,tu=0,nu=new Yf(tu);var ru=2;function mh(e,t){return new sn(Zf,e,t)}function xh(e,t){return new hs(Qf,e,t)}function _h(e,t,n,s,r,o,i){return new Ot(eu,e,t,n,s,r,o,i)}function Cw(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s;{let r=n.head;if(r instanceof sn){let o=r.name;if(o==="")e=n.tail,t=s;else if(o==="class"){let i=r.value;if(i==="")e=n.tail,t=s;else{let f=n.tail;if(f instanceof _){let a=r;e=f,t=h(a,s)}else{let a=f.head;if(a instanceof sn&&a.name==="class"){let u=r.kind,l=i,c=f.tail,p=a.value,d=l+" "+p,x=new sn(u,"class",d);e=h(x,c),t=s}else{let u=r;e=f,t=h(u,s)}}}}else if(o==="style"){let i=r.value;if(i==="")e=n.tail,t=s;else{let f=n.tail;if(f instanceof _){let a=r;e=f,t=h(a,s)}else{let a=f.head;if(a instanceof sn&&a.name==="style"){let u=r.kind,l=i,c=f.tail,p=a.value,d=l+";"+p,x=new sn(u,"style",d);e=h(x,c),t=s}else{let u=r;e=f,t=h(u,s)}}}}else{let i=r;e=n.tail,t=h(i,s)}}else{let o=r;e=n.tail,t=h(o,s)}}}}function su(e){if(e instanceof _)return e;if(e.tail instanceof _)return e;{let n=ua(e,(s,r)=>ya(r,s));return Cw(n,V)}}function ot(e,t){return mh(e,t)}function wh(e,t){return xh(e,t)}function Iw(e,t){return t?ot(e,""):wh(e,Xf(!1))}function ie(e){return ot("class",e)}function Ta(e){return ot("id",e)}function kh(e){return ot("max",e)}function gh(e){return ot("min",e)}function bh(e){return Iw("selected",e)}function yh(e){return ot("step",e)}function Th(e){return ot("type",e)}function sl(e){return ot("value",e)}var ol=class extends m{constructor(t,n,s){super(),this.synchronous=t,this.before_paint=n,this.after_paint=s}};var va=new ol(V,V,V);function ms(){return va}function pr(e){let t=n=>{let s=n.dispatch;return e(s)};return new ol(Bt(t),va.before_paint,va.after_paint)}function Ea(e){return bt(e,va,(t,n)=>new ol(bt(n.synchronous,t.synchronous,aa),bt(n.before_paint,t.before_paint,aa),bt(n.after_paint,t.after_paint,aa)))}function lt(){return null}function xs(e,t){return e?.get(t)}function xo(e,t,n){return e?.get(t)??n()}function qn(e,t){return e&&e.has(t)}function on(e,t,n){return e??=new Map,e.set(t,n),e}function Ca(e,t){return e?.delete(t),e}function Ph(e,t){return typeof e=="number"&&typeof t=="number"?e===t||e!==e&&t!==t:e===t}function vh(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s instanceof _;if(s instanceof _)return!1;{let r=n.head,o=n.tail,i=s.head,f=s.tail,a=Ph(r,i);if(a)e=o,t=f;else return a}}}var ln=class extends m{constructor(t,n,s,r){super(),this.kind=t,this.key=n,this.children=s,this.keyed_children=r}};var an=class extends m{constructor(t,n,s,r,o,i,f,a,u){super(),this.kind=t,this.key=n,this.namespace=s,this.tag=r,this.attributes=o,this.children=i,this.keyed_children=f,this.self_closing=a,this.void=u}};var Pn=class extends m{constructor(t,n,s){super(),this.kind=t,this.key=n,this.content=s}};var cn=class extends m{constructor(t,n,s,r,o,i){super(),this.kind=t,this.key=n,this.namespace=s,this.tag=r,this.attributes=o,this.inner_html=i}};var Vt=class extends m{constructor(t,n,s,r){super(),this.kind=t,this.key=n,this.mapper=s,this.child=r}};var _s=class extends m{constructor(t,n,s,r){super(),this.kind=t,this.key=n,this.dependencies=s,this.view=r}};var ws=0,Dr=1,_o=2,ou=3,jr=4,iu=5;function lu(e,t,n){return new ln(ws,e,t,n)}function ll(e,t,n,s,r,o,i,f){return new an(Dr,e,t,n,su(s),r,o,i,f)}function al(e,t){return t===""?e==="area"||e==="base"||e==="br"||e==="col"||e==="embed"||e==="hr"||e==="img"||e==="input"||e==="link"||e==="meta"||e==="param"||e==="source"||e==="track"?!0:e==="wbr":!1}function au(e,t){return new Pn(_o,e,t)}function Ch(e,t,n,s,r){return new cn(ou,e,t,n,su(s),r)}function Sh(e,t){if(e instanceof Vt){let n=e.mapper;return new Vt(jr,e.key,s=>t(n(s)),e.child)}else return new Vt(jr,e.key,t,e)}function Ih(e,t,n){return new _s(iu,e,t,n)}function Sa(e,t){if(t instanceof ln)return new ln(t.kind,e,t.children,t.keyed_children);if(t instanceof an)return new an(t.kind,e,t.namespace,t.tag,t.attributes,t.children,t.keyed_children,t.self_closing,t.void);if(t instanceof Pn)return new Pn(t.kind,e,t.content);if(t instanceof cn)return new cn(t.kind,e,t.namespace,t.tag,t.attributes,t.inner_html);if(t instanceof Vt){let n=t.child;return new Vt(t.kind,e,t.mapper,Sa(e,n))}else{let n=t.view;return new _s(t.kind,e,t.dependencies,()=>Sa(e,n()))}}var cu=class extends m{},YT=new cu,fu=class extends m{},ZT=new fu,uu=class extends m{},QT=new uu,pu=class extends m{},eP=new pu,$u=class extends m{},tP=new $u;function jt(e,t,n){return ll("","",e,t,n,lt(),!1,al(e,""))}function cl(e){return au("",e)}function fl(){return au("","")}function du(e,t,n,s){return Ch("",e,t,n,s)}function Fh(e,t){return Ih("",e,t)}function Lh(e){return e}function Ah(e,t){return Sh(e,t)}function Pt(e){return cl(e)}function vt(e,t){return jt("div",e,t)}function Mh(e,t){return jt("pre",e,t)}function Rh(e,t){return jt("code",e,t)}function wo(e,t){return jt("span",e,t)}function Bh(e){return jt("canvas",e,V)}function Nr(e,t){return jt("button",e,t)}function Oh(e){return jt("input",e,V)}function jh(e,t){return jt("label",e,t)}function hu(e,t){return jt("option",e,h(cl(t),w))}function Dh(e,t){return jt("select",e,t)}function Nh(e,t){return jt("details",e,t)}function qh(e,t){return jt("summary",e,t)}var La=class extends m{constructor(t,n,s,r,o){super(),this.index=t,this.path=n,this.removed=s,this.changes=r,this.children=o}};var xu=class extends m{constructor(t,n){super(),this.kind=t,this.content=n}};var _u=class extends m{constructor(t,n){super(),this.kind=t,this.inner_html=n}};var wu=class extends m{constructor(t,n,s){super(),this.kind=t,this.added=n,this.removed=s}};var ku=class extends m{constructor(t,n,s){super(),this.kind=t,this.key=n,this.before=s}};var gu=class extends m{constructor(t,n,s){super(),this.kind=t,this.index=n,this.with=s}};var bu=class extends m{constructor(t,n){super(),this.kind=t,this.index=n}};var yu=class extends m{constructor(t,n,s){super(),this.kind=t,this.children=n,this.before=s}};var Tu=0,Pu=1,vu=2,Eu=3,Cu=4,Su=5,Iu=6;function ks(e,t,n,s){return new La(e,V,t,n,s)}function Uh(e){return new xu(Tu,e)}function Vh(e){return new _u(Pu,e)}function Fu(e,t){return new wu(vu,e,t)}function Gh(e,t){return new ku(Eu,e,t)}function Hh(e){return new bu(Cu,e)}function $r(e,t){return new gu(Su,e,t)}function Lu(e,t){return new yu(Iu,e,t)}function zh(e,t){return new La(t,h(e.index,e.path),e.removed,e.changes,e.children)}var Aa=class extends m{},Rw=new Aa,Ma=class extends m{constructor(t,n){super(),this.key=t,this.parent=n}},Ra=class extends m{constructor(t,n){super(),this.index=t,this.parent=n}},Au=class extends m{constructor(t){super(),this.parent=t}},Oa="\r",Ba="	",Mu=`
`,Ru=Rw;function Kh(e){if(e instanceof _)return"";{let t=e.tail;return Fd(t)}}function Bu(e,t,n){for(;;){let s=e,r=t,o=n;if(r instanceof Aa)return Kh(o);if(r instanceof Ma){let i=r.key,f=r.parent;e=s,t=f,n=h(Ba,h(i,o))}else if(r instanceof Ra){let i=r.index,f=r.parent,a=h(Ba,h(nt(i),o));e=s,t=f,n=a}else if(s){let i=r.parent;if(o instanceof _)e=s,t=i,n=o;else{let f=o.tail;e=s,t=i,n=h(Oa,f)}}else return Kh(o)}}function Bw(e){return Bu(!0,e,V)}function Ow(e,t){for(;;){let n=e,s=t;if(s instanceof _)return!1;{let r=s.head,o=s.tail,i=Zi(n,r);if(i)return i;e=n,t=o}}}function Xh(e,t){return t instanceof _?!1:Ow(Bw(e),t)}function Jh(e){return $a(e,Oa)}function Gt(e,t,n){return n===""?new Ra(t,e):new Ma(n,e)}function ja(e){return new Au(e)}function Ou(e,t){return Bu(!1,e,h(Mu,h(t,V)))}function ul(e){return Bu(!1,e,V)}var dr=class extends m{constructor(t,n,s,r,o){super(),this.events=t,this.vdoms=n,this.old_vdoms=s,this.dispatched_paths=r,this.next_dispatched_paths=o}},hr=class extends m{constructor(t,n){super(),this.handlers=t,this.children=n}},pl=class extends m{constructor(t,n){super(),this.mapper=t,this.events=n}},ju=class extends m{constructor(t,n,s){super(),this.handlers=t,this.children=n,this.vdoms=s}},Na=class extends m{constructor(t,n){super(),this.path=t,this.handler=n}},qa=class extends m{constructor(t){super(),this.path=t}};function jw(e,t){return n=>e(t(n))}function em(){return new hr(lt(),lt())}function tm(){return new dr(em(),lt(),lt(),V,V)}function nm(e,t,n,s){return on(e,Ou(t,n),s)}function Zh(e,t,n){return bt(n,e,(s,r)=>{if(r instanceof Ot){let o=r.name,i=r.handler;return nm(s,t,o,i)}else return s})}function Da(e,t,n,s,r,o){for(;;){let i=e,f=t,a=n,u=s,l=r,c=o,p=l+1;if(c instanceof _)return new ju(i,f,a);{let d=c.head;if(d instanceof ln){let x=c.tail,b=d.key,T=d.children,v=Gt(u,l,b),I=Da(i,f,a,v,0,T),F=I.handlers,L=I.children,M=I.vdoms;e=F,t=L,n=M,s=u,r=p,o=x}else if(d instanceof an){let x=c.tail,b=d.key,T=d.attributes,v=d.children,I=Gt(u,l,b),F=Zh(i,I,T),L=Da(F,f,a,I,0,v),M=L.handlers,G=L.children,Q=L.vdoms;e=M,t=G,n=Q,s=u,r=p,o=x}else if(d instanceof Pn){let x=c.tail;e=i,t=f,n=a,s=u,r=p,o=x}else if(d instanceof cn){let x=c.tail,b=d.key,T=d.attributes,v=Gt(u,l,b);e=Zh(i,v,T),t=f,n=a,s=u,r=p,o=x}else if(d instanceof Vt){let x=c.tail,b=d.key,T=d.mapper,v=d.child,I=Gt(u,l,b),F=Da(lt(),lt(),a,ja(I),0,Bt(v)),L=F.vdoms,M=new hr(F.handlers,F.children),G=new pl(T,M),Q=on(f,ul(I),G);e=i,t=Q,n=L,s=u,r=p,o=x}else{let x=c.tail,b=d.view,T=b(),v=on(a,b,T),I=l,F=h(T,x);e=i,t=f,n=v,s=u,r=I,o=F}}}}function Nu(e,t,n,s,r){let o=e.vdoms,i=t.handlers,f=t.children,a=Da(i,f,o,n,s,r),u=a.handlers,l=a.children,c=a.vdoms;return[new dr(e.events,c,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths),new hr(u,l)]}function qu(e,t,n,s,r){let o=Bt(r);return Nu(e,t,n,s,o)}function rm(e){return new dr(e.events,lt(),e.vdoms,e.next_dispatched_paths,V)}function sm(e){return e.events}function om(e,t){return new dr(t,e.vdoms,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function Uu(e){return e.vdoms}function im(e,t,n){return xo(e.old_vdoms,t,n)}function lm(e,t,n){let s=xo(e.old_vdoms,t,n),r=on(e.vdoms,n,s);return new dr(e.events,r,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function am(e,t,n){let s=on(e.vdoms,t,n);return new dr(e.events,s,e.old_vdoms,e.dispatched_paths,e.next_dispatched_paths)}function cm(e,t,n){return xo(e.children,t,()=>new pl(n,em())).events}function fm(e,t,n,s){let r=new pl(n,s),o=on(e.children,t,r);return new hr(e.handlers,o)}function ko(e,t,n,s){let r=nm(e.handlers,t,n,s);return new hr(r,e.children)}function um(e,t,n){return Ca(e,Ou(t,n))}function Ua(e,t,n){let s=um(e.handlers,t,n);return new hr(s,e.children)}function Qh(e,t,n){return bt(n,e,(s,r)=>{if(r instanceof Ot){let o=r.name;return um(s,t,o)}else return s})}function Du(e,t,n,s,r,o){for(;;){let i=e,f=t,a=n,u=s,l=r,c=o,p=l+1;if(c instanceof _)return new hr(i,f);{let d=c.head;if(d instanceof ln){let x=c.tail,b=d.key,T=d.children,v=Gt(u,l,b),I=Du(i,f,a,v,0,T),F=I.handlers,L=I.children;e=F,t=L,n=a,s=u,r=p,o=x}else if(d instanceof an){let x=c.tail,b=d.key,T=d.attributes,v=d.children,I=Gt(u,l,b),F=Qh(i,I,T),L=Du(F,f,a,I,0,v),M=L.handlers,G=L.children;e=M,t=G,n=a,s=u,r=p,o=x}else if(d instanceof Pn){let x=c.tail;e=i,t=f,n=a,s=u,r=p,o=x}else if(d instanceof cn){let x=c.tail,b=d.key,T=d.attributes,v=Gt(u,l,b);e=Qh(i,v,T),t=f,n=a,s=u,r=p,o=x}else if(d instanceof Vt){let x=c.tail,b=d.key,T=Gt(u,l,b),v=Ca(f,ul(T));e=i,t=v,n=a,s=u,r=p,o=x}else{let x=c.tail,b=d.view;if(qn(a,b)){let v=xs(a,b),I=h(v,x);e=i,t=f,n=a,s=u,r=l,o=I}else e=i,t=f,n=a,s=u,r=p,o=x}}}}function Va(e,t,n,s,r){return Du(t.handlers,t.children,e.old_vdoms,n,s,Bt(r))}function mr(e,t,n,s,r,o){let i=Va(e,t,n,s,r);return qu(e,i,n,s,o)}function Dw(e,t,n){for(;;){let s=e,r=t,o=n;if(r instanceof _)return $o;{let i=r.tail;if(i instanceof _){let f=r.head;if(qn(s.handlers,f)){let u=xs(s.handlers,f);return new $(fs(u,l=>new ho(l.prevent_default,l.stop_propagation,o(l.message))))}else return $o}else{let f=r.head,a=i;if(qn(s.children,f)){let l=xs(s.children,f),c=jw(o,l.mapper);e=l.events,t=a,n=c}else return $o}}}}function pm(e,t,n,s){let r=Jh(t+Mu+n),o=Dw(e.events,r,$s);if(o instanceof $){let i=o[0],f=ur(s,i);if(f instanceof $){let a=f[0];return new Na(t,a)}else return new qa(t)}else return new qa(t)}function $m(e,t){let n=h(t.path,e.next_dispatched_paths),s=new dr(e.events,e.vdoms,e.old_vdoms,e.dispatched_paths,n);if(t instanceof Na){let r=t.handler;return[s,new $(r)]}else return[s,$o]}function Ga(e,t){return Xh(t,e.dispatched_paths)}var Ha=class extends m{constructor(t){super(),this.message=t}};var Wa=e=>e instanceof Ha;var Gu=class extends m{constructor(t,n){super(),this.name=t,this.data=n}};var Ka=e=>e instanceof Gu;var za=class extends m{},Nw=new za;var Xa=e=>e instanceof za;var Ja=class extends m{constructor(t,n,s,r,o){super(),this.name=t,this.init=n,this.update=s,this.view=r,this.config=o}};var Ya=class extends m{constructor(t,n,s,r,o,i,f,a,u,l,c,p,d,x){super(),this.open_shadow_root=t,this.adopt_styles=n,this.delegates_focus=s,this.attributes=r,this.properties=o,this.contexts=i,this.is_form_associated=f,this.on_form_autofill=a,this.on_form_reset=u,this.on_form_restore=l,this.on_form_disabled=c,this.on_connect=p,this.on_adopt=d,this.on_disconnect=x}};var hm=new Ya(!0,!0,!1,V,V,V,!1,S,S,S,S,S,S,S);var Un=(e,t)=>{if(e===t)return!0;if(e==null||t==null)return!1;let n=typeof e;return n!==typeof t||n!=="object"||e.constructor!==t.constructor?!1:Array.isArray(e)?qw(e,t):Uw(e,t)},qw=(e,t)=>{let n=e.length;if(n!==t.length)return!1;for(;n--;)if(!Un(e[n],t[n]))return!1;return!0},Uw=(e,t)=>{let n=Object.keys(e),s=n.length;if(Object.keys(t).length!==s)return!1;for(;s--;){let r=n[s];if(!Object.hasOwn(t,r)||!Un(e[r],t[r]))return!1}return!0};var Hu=class extends m{constructor(t,n){super(),this.patch=t,this.cache=n}};var Qa=class extends m{constructor(t,n,s){super(),this.patch=t,this.cache=n,this.events=s}},zu=class extends m{constructor(t,n,s){super(),this.added=t,this.removed=n,this.events=s}};function xm(e,t,n,s,r,o,i){for(;;){let f=e,a=t,u=n,l=s,c=r,p=o,d=i;if(l instanceof _){if(c instanceof _)return new zu(p,d,u);{let x=c.head;if(x instanceof Ot){let b=x,T=c.tail,v=x.name,I=x.handler,F=ko(u,a,v,I),L=h(b,p);e=f,t=a,n=F,s=l,r=T,o=L,i=d}else{let b=x,T=c.tail,v=h(b,p);e=f,t=a,n=u,s=l,r=T,o=v,i=d}}}else if(c instanceof _){let x=l.head;if(x instanceof Ot){let b=x,T=l.tail,v=x.name,I=Ua(u,a,v),F=h(b,d);e=f,t=a,n=I,s=T,r=c,o=p,i=F}else{let b=x,T=l.tail,v=h(b,d);e=f,t=a,n=u,s=T,r=c,o=p,i=v}}else{let x=l.head,b=l.tail,T=c.head,v=c.tail,I=ya(x,T);if(I instanceof qt)if(x instanceof Ot){let F=x.name;e=f,t=a,n=Ua(u,a,F),s=b,r=c,o=p,i=h(x,d)}else e=f,t=a,n=u,s=b,r=c,o=p,i=h(x,d);else if(I instanceof Ut)if(x instanceof sn)if(T instanceof sn){let F,L=T.name;L==="value"||L==="checked"||L==="selected"?F=f||x.value!==T.value:F=x.value!==T.value;let M=F,G;M?G=h(T,p):G=p;let Q=G;e=f,t=a,n=u,s=b,r=v,o=Q,i=d}else if(T instanceof Ot){let F=T.name,L=T.handler;e=f,t=a,n=ko(u,a,F,L),s=b,r=v,o=h(T,p),i=h(x,d)}else e=f,t=a,n=u,s=b,r=v,o=h(T,p),i=h(x,d);else if(x instanceof hs)if(T instanceof hs){let F,L=T.name;L==="scrollLeft"||L==="scrollRight"?F=!0:L==="value"?F=f||!Un(x.value,T.value):L==="checked"?F=f||!Un(x.value,T.value):L==="selected"?F=f||!Un(x.value,T.value):F=!Un(x.value,T.value);let M=F,G;M?G=h(T,p):G=p;let Q=G;e=f,t=a,n=u,s=b,r=v,o=Q,i=d}else if(T instanceof Ot){let F=T.name,L=T.handler;e=f,t=a,n=ko(u,a,F,L),s=b,r=v,o=h(T,p),i=h(x,d)}else e=f,t=a,n=u,s=b,r=v,o=h(T,p),i=h(x,d);else if(T instanceof Ot){let F=T.name,L=T.handler,M=x.prevent_default.kind!==T.prevent_default.kind||x.stop_propagation.kind!==T.stop_propagation.kind||x.debounce!==T.debounce||x.throttle!==T.throttle,G;M?G=h(T,p):G=p;let Q=G;e=f,t=a,n=ko(u,a,F,L),s=b,r=v,o=Q,i=d}else{let F=x.name;e=f,t=a,n=Ua(u,a,F),s=b,r=v,o=h(T,p),i=h(x,d)}else if(T instanceof Ot){let F=T.name,L=T.handler;e=f,t=a,n=ko(u,a,F,L),s=l,r=v,o=h(T,p),i=d}else e=f,t=a,n=u,s=l,r=v,o=h(T,p),i=d}}}function Vw(e,t,n,s){return n==="input"&&t===""?Ga(e,s):n==="select"&&t===""?Ga(e,s):n==="textarea"&&t===""?Ga(e,s):!1}function Za(e,t,n,s,r,o,i,f,a,u,l,c,p,d){for(;;){let x=e,b=t,T=n,v=s,I=r,F=o,L=i,M=f,G=a,Q=u,oe=l,ee=c,me=p,Ke=d;if(x instanceof _)if(T instanceof _){let kt,St=gs();if(Q instanceof _)if(oe instanceof _)kt=ks(G,L,Q,oe);else if(!St&&oe.tail instanceof _&&L===0){let le=oe.head;kt=zh(le,G)}else kt=ks(G,L,Q,oe);else kt=ks(G,L,Q,oe);let xe=kt;return new Qa(xe,me,Ke)}else{let kt=Nu(me,Ke,ee,M,T),St=kt[0],xe=kt[1],le=Lu(T,M-F),te=h(le,Q),ae=ks(G,L,te,oe);return new Qa(ae,St,xe)}else if(T instanceof _){let kt=x.head,St=x.tail;if(kt.key===""||!qn(I,kt.key)){let le=Va(me,Ke,ee,M,kt);e=St,t=b,n=T,s=v,r=I,o=F,i=L+1,f=M,a=G,u=Q,l=oe,c=ee,p=me,d=le}else e=St,t=b,n=T,s=v,r=I,o=F,i=L,f=M,a=G,u=Q,l=oe,c=ee,p=me,d=Ke}else{let kt=x.head,St=T.head;if(kt.key!==St.key){let xe=x.tail,le=T.tail,te=qn(b,St.key);if(qn(v,kt.key))if(te)if(qn(I,kt.key))e=xe,t=b,n=T,s=v,r=I,o=F-1,i=L,f=M,a=G,u=Q,l=oe,c=ee,p=me,d=Ke;else{let ne=xs(b,St.key),re=M-F,J=h(Gh(St.key,re),Q),fe=on(I,St.key,void 0);e=h(ne,x),t=b,n=T,s=v,r=fe,o=F+1,i=L,f=M,a=G,u=J,l=oe,c=ee,p=me,d=Ke}else{let z=M-F,ne=qu(me,Ke,ee,M,St),re=ne[0],J=ne[1],fe=Lu(Bt(St),z),pe=h(fe,Q);e=x,t=b,n=le,s=v,r=I,o=F+1,i=L,f=M+1,a=G,u=pe,l=oe,c=ee,p=re,d=J}else if(te){let z=M-F,ne=h(Hh(z),Q),re=Va(me,Ke,ee,M,kt);e=xe,t=b,n=T,s=v,r=I,o=F-1,i=L,f=M,a=G,u=ne,l=oe,c=ee,p=me,d=re}else{let z=$r(M-F,St),ne=mr(me,Ke,ee,M,kt,St),re=ne[0],J=ne[1];e=xe,t=b,n=le,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(z,Q),l=oe,c=ee,p=re,d=J}}else{let xe=x.head;if(xe instanceof ln){let le=T.head;if(le instanceof ln){let te=xe,ae=x.tail,z=le,ne=T.tail,re=Za(te.children,te.keyed_children,z.children,z.keyed_children,lt(),0,0,0,M,V,V,Gt(ee,M,z.key),me,Ke),J=re.patch,fe=re.cache,pe=re.events,nn;J.changes instanceof _&&J.children instanceof _&&J.removed===0?nn=oe:nn=h(J,oe);let kn=nn;e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=kn,c=ee,p=fe,d=pe}else{let te=xe,ae=x.tail,z=le,ne=T.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(re,Q),l=oe,c=ee,p=fe,d=pe}}else if(xe instanceof an){let le=T.head;if(le instanceof an){let te=xe,ae=le;if(te.namespace===ae.namespace&&te.tag===ae.tag){let z=x.tail,ne=T.tail,re=Gt(ee,M,ae.key),J=Vw(me,ae.namespace,ae.tag,re),fe=xm(J,re,Ke,te.attributes,ae.attributes,V,V),pe=fe.added,nn=fe.removed,kn=fe.events,Sr;pe instanceof _&&nn instanceof _?Sr=V:Sr=Bt(Fu(pe,nn));let or=Sr,Qs=Za(te.children,te.keyed_children,ae.children,ae.keyed_children,lt(),0,0,0,M,or,V,re,me,kn),ts=Qs.patch,ji=Qs.cache,ef=Qs.events,tf;ts.changes instanceof _&&ts.children instanceof _&&ts.removed===0?tf=oe:tf=h(ts,oe);let Jx=tf;e=z,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=Jx,c=ee,p=ji,d=ef}else{let z=xe,ne=x.tail,re=le,J=T.tail,fe=$r(M-F,re),pe=mr(me,Ke,ee,M,z,re),nn=pe[0],kn=pe[1];e=ne,t=b,n=J,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(fe,Q),l=oe,c=ee,p=nn,d=kn}}else{let te=xe,ae=x.tail,z=le,ne=T.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(re,Q),l=oe,c=ee,p=fe,d=pe}}else if(xe instanceof Pn){let le=T.head;if(le instanceof Pn){let te=xe,ae=le;if(te.content===ae.content){let z=x.tail,ne=T.tail;e=z,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=oe,c=ee,p=me,d=Ke}else{let z=x.tail,ne=le,re=T.tail,J=ks(M,0,Bt(Uh(ne.content)),V);e=z,t=b,n=re,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=h(J,oe),c=ee,p=me,d=Ke}}else{let te=xe,ae=x.tail,z=le,ne=T.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(re,Q),l=oe,c=ee,p=fe,d=pe}}else if(xe instanceof cn){let le=T.head;if(le instanceof cn){let te=xe,ae=x.tail,z=le,ne=T.tail,re=Gt(ee,M,z.key),J=xm(!1,re,Ke,te.attributes,z.attributes,V,V),fe=J.added,pe=J.removed,nn=J.events,kn;fe instanceof _&&pe instanceof _?kn=V:kn=Bt(Fu(fe,pe));let Sr=kn,or;te.inner_html===z.inner_html?or=Sr:or=h(Vh(z.inner_html),Sr);let ts=or,ji;ts instanceof _?ji=oe:ji=h(ks(M,0,ts,V),oe);let ef=ji;e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=ef,c=ee,p=me,d=nn}else{let te=xe,ae=x.tail,z=le,ne=T.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(re,Q),l=oe,c=ee,p=fe,d=pe}}else if(xe instanceof Vt){let le=T.head;if(le instanceof Vt){let te=xe,ae=x.tail,z=le,ne=T.tail,re=Gt(ee,M,z.key),J=ul(re),fe=Za(Bt(te.child),lt(),Bt(z.child),lt(),lt(),0,0,0,M,V,V,ja(re),me,cm(Ke,J,te.mapper)),pe=fe.patch,nn=fe.cache,kn=fe.events,Sr=fm(Ke,J,z.mapper,kn),or;pe.changes instanceof _&&pe.children instanceof _&&pe.removed===0?or=oe:or=h(pe,oe);let Qs=or;e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=Qs,c=ee,p=nn,d=Sr}else{let te=xe,ae=x.tail,z=le,ne=T.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(re,Q),l=oe,c=ee,p=fe,d=pe}}else{let le=T.head;if(le instanceof _s){let te=xe,ae=x.tail,z=le,ne=T.tail;if(vh(te.dependencies,z.dependencies)){let J=lm(me,te.view,z.view);e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=Q,l=oe,c=ee,p=J,d=Ke}else{let J=im(me,te.view,te.view),fe=z.view(),pe=am(me,z.view,fe);e=h(J,ae),t=b,n=h(fe,ne),s=v,r=I,o=F,i=L,f=M,a=G,u=Q,l=oe,c=ee,p=pe,d=Ke}}else{let te=xe,ae=x.tail,z=le,ne=T.tail,re=$r(M-F,z),J=mr(me,Ke,ee,M,te,z),fe=J[0],pe=J[1];e=ae,t=b,n=ne,s=v,r=I,o=F,i=L,f=M+1,a=G,u=h(re,Q),l=oe,c=ee,p=fe,d=pe}}}}}}function Wu(e,t,n){let s=rm(e),r=Za(Bt(t),lt(),Bt(n),lt(),lt(),0,0,0,0,V,V,Ru,s,sm(s)),o=r.patch,i=r.cache,f=r.events;return new Hu(o,om(i,f))}var fn=(e,t)=>{if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else if(e)for(e;Ir(e);e=Ir(e))t(qi(e))},Ku=(e,t)=>Ir(e)?Ir(t)?st(e,t):e:t;var ec="http://www.w3.org/1999/xhtml";var _m=!!globalThis.HTMLElement?.prototype?.moveBefore;var Hw=globalThis.setTimeout,Xu=globalThis.clearTimeout,zw=(e,t)=>globalThis.document.createElementNS(e,t),wm=e=>globalThis.document.createTextNode(e),km=e=>globalThis.document.createComment(e),Ww=()=>globalThis.document.createDocumentFragment(),qr=(e,t,n)=>e.insertBefore(t,n),gm=_m?(e,t,n)=>e.moveBefore(t,n):qr,bm=(e,t)=>e.removeChild(t),Kw=(e,t)=>e.getAttribute(t),ym=(e,t,n)=>e.setAttribute(t,n),Xw=(e,t)=>e.removeAttribute(t),Jw=(e,t,n,s)=>e.addEventListener(t,n,s),Tm=(e,t,n)=>e.removeEventListener(t,n),Yw=(e,t)=>e.innerHTML=t,Zw=(e,t)=>e.data=t,un=Symbol("lustre"),Yu=class{constructor(t,n,s,r){this.kind=t,this.key=r,this.parent=n,this.children=[],this.node=s,this.endNode=null,this.handlers=new Map,this.throttles=new Map,this.debouncers=new Map}get isVirtual(){return this.kind===ws||this.kind===jr}get parentNode(){return this.isVirtual?this.node.parentNode:this.node}};var pn=(e,t,n,s,r)=>{let o=new Yu(e,t,n,r);return n[un]=o,t?.children.splice(s,0,o),o},Qw=e=>{let t="";for(let n=e[un];n.parent;n=n.parent){let s=n.parent&&n.parent.kind===jr?Oa:Ba;if(n.key)t=`${s}${n.key}${t}`;else{let r=n.parent.children.indexOf(n);t=`${s}${r}${t}`}}return t.slice(1)},tc=class{#e=null;#a;#r;#s=!1;constructor(t,n,s,{debug:r=!1}={}){this.#e=t,this.#a=n,this.#r=s,this.#s=r}mount(t){pn(Dr,null,this.#e,0,null),this.#m(this.#e,null,this.#e[un],0,t)}push(t,n=null){this.#t=n,this.#i.push({node:this.#e[un],patch:t}),this.#o()}#t;#i=[];#o(){let t=this.#i;for(;t.length;){let{node:n,patch:s}=t.pop(),{path:r,changes:o,removed:i,children:f}=s;fn(r,u=>{n=n.children[u]});let{children:a}=n;fn(o,u=>this.#n(n,u)),i&&this.#f(n,a.length-i,i),fn(f,u=>{let l=a[u.index|0];this.#i.push({node:l,patch:u})})}}#n(t,n){switch(n.kind){case Tu:this.#P(t,n);break;case Pu:this.#g(t,n);break;case vu:this.#h(t,n);break;case Eu:this.#c(t,n);break;case Cu:this.#_(t,n);break;case Su:this.#$(t,n);break;case Iu:this.#p(t,n);break}}#p(t,{children:n,before:s}){let r=Ww(),o=this.#l(t,s);this.#k(r,null,t,s|0,n),qr(t.parentNode,r,o)}#$(t,{index:n,with:s}){this.#f(t,n|0,1);let r=this.#l(t,n);this.#m(t.parentNode,r,t,n|0,s)}#l(t,n){n=n|0;let{children:s}=t,r=s.length;if(n<r)return s[n].node;if(t.endNode)return t.endNode;if(!t.isVirtual)return null;for(;t.isVirtual&&t.children.length;){if(t.endNode)return t.endNode.nextSibling;t=t.children[t.children.length-1]}return t.node.nextSibling}#c(t,{key:n,before:s}){s=s|0;let{children:r,parentNode:o}=t,i=r[s].node,f=r[s];for(let a=s+1;a<r.length;++a){let u=r[a];if(r[a]=f,f=u,u.key===n){r[s]=u;break}}this.#x(o,f,i)}#u(t,n,s){for(let r=0;r<n.length;++r)this.#x(t,n[r],s)}#x(t,n,s){gm(t,n.node,s),n.isVirtual&&this.#u(t,n.children,s),n.endNode&&gm(t,n.endNode,s)}#_(t,{index:n}){this.#f(t,n,1)}#f(t,n,s){let{children:r,parentNode:o}=t,i=r.splice(n,s);for(let f=0;f<i.length;++f){let a=i[f],{node:u,endNode:l,isVirtual:c,children:p}=a;bm(o,u),l&&bm(o,l),this.#d(a),c&&i.push(...p)}}#d(t){let{debouncers:n,children:s}=t;for(let{timeout:r}of n.values())r&&Xu(r);n.clear(),fn(s,r=>this.#d(r))}#h({node:t,handlers:n,throttles:s,debouncers:r},{added:o,removed:i}){fn(i,({name:f})=>{n.delete(f)?(Tm(t,f,Ju),this.#w(s,f,0),this.#w(r,f,0)):(Xw(t,f),vm[f]?.removed?.(t,f))}),fn(o,f=>this.#T(t,f))}#P({node:t},{content:n}){Zw(t,n??"")}#g({node:t},{inner_html:n}){Yw(t,n??"")}#k(t,n,s,r,o){fn(o,i=>this.#m(t,n,s,r++,i))}#m(t,n,s,r,o){switch(o.kind){case Dr:{let i=this.#b(s,r,o);this.#k(i,null,i[un],0,o.children),qr(t,i,n);break}case _o:{let i=this.#v(s,r,o);qr(t,i,n);break}case ws:{let i="lustre:fragment",f=this.#y(i,s,r,o);qr(t,f,n),this.#k(t,n,f[un],0,o.children),this.#s&&(f[un].endNode=km(` /${i} `),qr(t,f[un].endNode,n));break}case ou:{let i=this.#b(s,r,o);this.#g({node:i},o),qr(t,i,n);break}case jr:{let i=this.#y("lustre:map",s,r,o);qr(t,i,n),this.#m(t,n,i[un],0,o.child);break}case iu:{let i=this.#t?.get(o.view)??o.view();this.#m(t,n,s,r,i);break}}}#b(t,n,{kind:s,key:r,tag:o,namespace:i,attributes:f}){let a=zw(i||ec,o);return pn(s,t,a,n,r),this.#s&&r&&ym(a,"data-lustre-key",r),fn(f,u=>this.#T(a,u)),a}#v(t,n,{kind:s,key:r,content:o}){let i=wm(o??"");return pn(s,t,i,n,r),i}#y(t,n,s,{kind:r,key:o}){let i=this.#s?km(ek(t,o)):wm("");return pn(r,n,i,s,o),i}#T(t,n){let{debouncers:s,handlers:r,throttles:o}=t[un],{kind:i,name:f,value:a,prevent_default:u,debounce:l,throttle:c}=n;switch(i){case Zf:{let p=a??"";if(f==="virtual:defaultValue"){t.defaultValue=p;return}else if(f==="virtual:defaultChecked"){t.defaultChecked=!0;return}else if(f==="virtual:defaultSelected"){t.defaultSelected=!0;return}p!==Kw(t,f)&&ym(t,f,p),vm[f]?.added?.(t,p);break}case Qf:t[f]=a;break;case eu:{r.has(f)&&Tm(t,f,Ju);let p=u.kind===tu;Jw(t,f,Ju,{passive:p}),this.#w(o,f,c),this.#w(s,f,l),r.set(f,d=>this.#E(n,d));break}}}#w(t,n,s){let r=t.get(n);if(s>0)r?r.delay=s:t.set(n,{delay:s});else if(r){let{timeout:o}=r;o&&Xu(o),t.delete(n)}}#E(t,n){let{currentTarget:s,type:r}=n,{debouncers:o,throttles:i}=s[un],f=Qw(s),{prevent_default:a,stop_propagation:u,include:l}=t;a.kind===ru&&n.preventDefault(),u.kind===ru&&n.stopPropagation(),r==="submit"&&(n.detail??={},n.detail.formData=[...new FormData(n.target,n.submitter).entries()]);let c=this.#a(n,f,r,l),p=i.get(r);if(p){let x=Date.now(),b=p.last||0;x>b+p.delay&&(p.last=x,p.lastEvent=n,this.#r(n,c))}let d=o.get(r);d&&(Xu(d.timeout),d.timeout=Hw(()=>{n!==i.get(r)?.lastEvent&&this.#r(n,c)},d.delay)),!p&&!d&&this.#r(n,c)}},ek=(e,t)=>t?` ${e} key="${nl(t)}" `:` ${e} `,Ju=e=>{let{currentTarget:t,type:n}=e;t[un].handlers.get(n)(e)},Pm=e=>({added(t){t[e]=!0},removed(t){t[e]=!1}}),tk=e=>({added(t,n){t[e]=n}}),vm={checked:Pm("checked"),selected:Pm("selected"),value:tk("value"),autofocus:{added(e){queueMicrotask(()=>{e.focus?.()})}},autoplay:{added(e){try{e.play?.()}catch(t){console.error(t)}}}};function nk(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof _)return[r,E(o)];{let i=s.tail,f=s.head[0],a=s.head[1],u=Sa(f,a),l;f===""?l=r:l=on(r,f,u);let c=l,p=h(u,o);e=i,t=c,n=p}}}function Zu(e){return nk(e,lt(),V)}function Em(e,t,n){let s=Zu(n),r=s[0],o=s[1];return ll("","",e,t,o,r,!1,al(e,""))}function Cm(e,t,n,s){let r=Zu(s),o=r[0],i=r[1];return ll("",e,t,n,i,o,!1,al(t,e))}function Qu(e){let t=Zu(e),n=t[0],s=t[1];return lu("",s,n)}var Im=e=>{let t=pn(Dr,null,e,0,null),{children:n}=ep(t,e,e.firstChild);if(n.length>1){let r=pn(Dr,null,e,0,null);return t.kind=ws,t.node=globalThis.document.createTextNode(""),t.parent=r,r.children.push(t),e.insertBefore(t.node,e.firstChild),Qu(go(n))}if(n.length===1)return n[0][1];let s=globalThis.document.createTextNode("");return pn(_o,t,s,0,null),e.insertBefore(s,e.firstChild),fl()},Fm=(e,t,n,s)=>{if(n.nodeType===8){let r=n.data.trim();return r.startsWith("lustre:fragment")?lk(e,t,n,s):r.startsWith("lustre:map")?ak(e,t,n,s):r.startsWith("lustre:memo")?ck(e,t,n,s):null}return n.nodeType===1?ok(e,n,s):n.nodeType===3?ik(e,n,s):null},ok=(e,t,n)=>{let s=t.getAttribute("data-lustre-key")??"";s&&t.removeAttribute("data-lustre-key");let r=pn(Dr,e,t,n,s),o=t.localName,i=t.namespaceURI,f=!i||i===ec;f&&uk.includes(o)&&pk(o,t);let a=fk(t),{children:u}=ep(r,t,t.firstChild),l=f?Em(o,a,go(u)):Cm(i,o,a,go(u));return $l(s,l,t.nextSibling)},ep=(e,t,n)=>{let s=[];for(;n&&(n.nodeType!==8||n.data.trim()!=="/lustre:fragment");){let r=Fm(e,t,n,s.length);r?(s.push([r.key,r.vnode]),n=r.next):n=n.nextSibling}return{children:s,end:n}},ik=(e,t,n)=>(pn(_o,e,t,n,null),$l("",cl(t.data),t.nextSibling)),lk=(e,t,n,s)=>{let r=tp(n.data),o=pn(ws,e,n,s,r),{children:i,end:f}=ep(o,t,n.nextSibling);o.endNode=f;let a=Qu(go(i));return $l(r,a,f?.nextSibling)},ak=(e,t,n,s)=>{let r=tp(n.data),o=pn(jr,e,n,s,r),i=Lm(o,t,n,0);if(!i)return null;let f=Ah(i.vnode,a=>a);return $l(r,f,i.next)},ck=(e,t,n,s)=>{let r=tp(n.data),o=Lm(e,t,n,s);if(!o)return null;t.removeChild(n);let i=Fh(go([Lh({})]),()=>o.vnode);return $l(r,i,o.next)},Lm=(e,t,n,s)=>{for(;;){if(n=n.nextSibling,!n)return null;let r=Fm(e,t,n,s);if(r)return r}},$l=(e,t,n)=>({key:e,vnode:t,next:n}),fk=e=>{let t=[];for(let n=0;n<e.attributes.length;n++){let s=e.attributes[n];s.name!=="xmlns"&&t.push(ot(s.localName,s.value))}return go(t)},uk=["input","select","textarea"],pk=(e,t)=>{let n=t.value,s=t.checked;e==="input"&&t.type==="checkbox"&&!s||e==="input"&&t.type==="radio"&&!s||t.type!=="checkbox"&&t.type!=="radio"&&!n||queueMicrotask(()=>{t.value=n,t.checked=s,t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),globalThis.document.activeElement!==t&&t.dispatchEvent(new Event("blur",{bubbles:!0}))})},tp=e=>{let t=e.match(/key="([^"]*)"/);return t?$k(t[1]):""},$k=e=>e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&amp;/g,"&").replace(/&#39;/g,"'"),go=e=>e.reduceRight((t,n)=>Ni(n,t),V);var gs=()=>!!globalThis.document;var dl=class{constructor(t,[n,s],r,o,i){this.root=t,this.#e=n,this.#a=r,this.#r=o,this.root.addEventListener("context-request",u=>{if(!(u.context&&u.callback)||!this.#o.has(u.context))return;u.stopImmediatePropagation();let l=this.#o.get(u.context);if(u.subscribe){let c=()=>{l.subscribers=l.subscribers.filter(p=>p!==u.callback)};l.subscribers.push([u.callback,c]),u.callback(l.value,c)}else u.callback(l.value)});let f=(u,l,c)=>pm(this.#t,l,c,u),a=(u,l)=>{let[c,p]=$m(this.#t,l);if(this.#t=c,rs(p)){let d=Ui(p);d.stop_propagation&&u.stopPropagation(),d.prevent_default&&u.preventDefault(),this.dispatch(d.message,!1)}};this.#i=new tc(this.root,f,a,i),this.#s=Im(this.root),this.#t=tm(),this.#f(s),this.#h()}root=null;dispatch(t,n=!1){if(this.#p)this.#$.push(t);else{let[s,r]=this.#r(this.#e,t);this.#e=s,this.#_(n),this.#f(r)}}emit(t,n){(this.root.host??this.root).dispatchEvent(new rp(t,n))}provide(t,n){if(!this.#o.has(t))this.#o.set(t,{value:n,subscribers:[]});else{let s=this.#o.get(t);if(Un(s.value,n))return;s.value=n;for(let r=s.subscribers.length-1;r>=0;r--){let[o,i]=s.subscribers[r];if(!o){s.subscribers.splice(r,1);continue}o(n,i)}}}subscribe(t,n){if(!t)return;this.#n.get(t)?.(),(this.root.host??this.root).dispatchEvent(new np(t,(r,o)=>{let i=this.#n.get(t);i!==o&&i?.();let f=ur(r,n);this.#n.set(t,o),rs(f)&&this.dispatch(Ui(f),!0)},!0))}unsubscribe(t){let n=this.#n.get(t);n&&(n(),this.#n.delete(t))}unsubscribeAll(){for(let[t,n]of this.#n)n?.();this.#n.clear()}#e;#a;#r;#s;#t;#i;#o=new Map;#n=new Map;#p=!1;#$=[];#l=V;#c=V;#u=null;#x={dispatch:t=>this.dispatch(t),emit:(t,n)=>this.emit(t,n),select:()=>{},root:()=>this.root,provide:(t,n)=>this.provide(t,n),subscribe:(t,n)=>this.subscribe(t,n),unsubscribe:t=>this.unsubscribe(t)};#_(t=!1){this.#u||(t?(this.#u="sync",queueMicrotask(()=>this.#h())):this.#u=window.requestAnimationFrame(()=>this.#h()))}#f(t){this.#p=!0;let n=!1;for(;fn(t.synchronous,r=>r(this.#x)),this.#l=Ku(this.#l,t.before_paint),this.#c=Ku(this.#c,t.after_paint),!!this.#$.length;){let s=this.#$.shift();[this.#e,t]=this.#r(this.#e,s),n=!0}return this.#p=!1,n}#d(t){this.#f(t)&&this.#_(!0)}#h(){this.#u=null;let t=this.#a(this.#e),{patch:n,cache:s}=Wu(this.#t,this.#s,t);if(this.#t=s,this.#s=t,this.#i.push(n,Uu(s)),ir(this.#l)){let r=Am(this.#l);this.#l=V,queueMicrotask(()=>this.#d(r))}if(ir(this.#c)){let r=Am(this.#c);this.#c=V,window.requestAnimationFrame(()=>this.#d(r))}}};function Am(e){return{synchronous:e,after_paint:V,before_paint:V}}var np=class extends Event{constructor(t,n,s){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=n,this.subscribe=s}},rp=class extends CustomEvent{isLustreEvent=!0;constructor(t,n){super(t,{detail:n,bubbles:!0,composed:!0})}};var op=class{#e;constructor(t,[n,s],r,o){this.#e=new dl(t,[n,s],o,r)}send(t){Wa(t)?this.dispatch(t.message,!1):Ka(t)?this.emit(t.name,t.data):Xa(t)}dispatch(t){this.#e.dispatch(t)}emit(t,n){this.#e.emit(t,n)}},Mm=({init:e,update:t,view:n},s,r)=>{if(!gs())return ct(sp());let o=s instanceof HTMLElement?s:globalThis.document.querySelector(s);return o?tt(new op(o,e(r),t,n)):ct(Rm(s))};var ip=class extends m{constructor(t){super(),this.selector=t}},Rm=e=>new ip(e);var lp=class extends m{},Bm=new lp,sp=()=>Bm;function Om(e,t,n){return new Ja(S,e,t,n,hm)}function jm(e,t,n){return th(!gs(),new y(Bm),()=>Mm(e,t,n))}function ap(e,t){return _h(e,fs(t,n=>new ho(!1,!1,n)),V,nu,nu,0,0)}function Ur(e){return ap("click",Rr(e))}function Dm(e){return ap("input",_a(h("target",h("value",w)),fr,t=>Rr(e(t))))}function Nm(e){return ap("change",_a(h("target",h("value",w)),fr,t=>Rr(e(t))))}var nc=Math.sin,rc=Math.cos;var hl=class extends m{constructor(t){super(),this.name=t}};var $n=class extends m{constructor(t){super(),this.message=t}};var sc=class extends m{},Um=new sc;var oc=class extends m{},Vm=new oc;var ic=class extends m{},Gm=new ic;var lc=class extends m{},Hm=new lc;var Vr=class extends m{constructor(t,n){super(),this.name=t,this.num_args=n}};var X=class extends m{constructor(t){super(),this.message=t}};var cp=class extends m{constructor(t){super(),this.expr=t}};var ac=class extends m{constructor(t,n){super(),this.error=t,this.line=n}};function zm(e,t){return e instanceof ac?e:new ac(e,t)}function fp(e){return" on line "+nt(e)}function up(e){if(e instanceof hl)return"unknown variable: "+e.name;if(e instanceof $n)return"type error: "+e.message;if(e instanceof sc)return"no case pattern matched the value";if(e instanceof oc)return"recursion too deep (missing base case?)";if(e instanceof ic)return"too many steps (drawing too complex, or infinite loop?)";if(e instanceof lc)return"too many paths in the drawing";if(e instanceof Vr){let t=e.name,n=e.num_args;return"no function "+t+" that takes "+nt(n)+" argument(s)"}else{if(e instanceof X)return"bad drawing: "+e.message;if(e instanceof cp)return"not yet implemented: "+e.expr;{let t=e.error,n=e.line;return up(t)+fp(n)}}}var Wm={},$p=0;function xr(e){if($p+=Math.max(e,0),$p>25e4)throw Wm}function Km(e,t,n){$p=0;try{return e()}catch(s){if(s===Wm)return t;if(s instanceof RangeError||s?.name==="InternalError")return n;throw s}}var Xm=1e5;function Jm(e){return Km(e,new y(Gm),new y(Vm))}function hp(){return new Map}function cc(e,t){return e.has(t)?new $(e.get(t)):new y(void 0)}function ml(e,t,n){e.set(t,n)}var Ht=class extends m{constructor(t){super(),this[0]=t}};var Y=class extends m{constructor(t){super(),this[0]=t}};var Je=class extends m{constructor(t){super(),this[0]=t}};var Xt=class extends m{constructor(t,n){super(),this.tag=t,this.fields=n}};var Gn=class extends m{constructor(t){super(),this[0]=t}};var bs=class extends m{constructor(t,n){super(),this.bindings=t,this.parent=n}};var fc=class extends m{constructor(t){super(),this.bindings=t}};var bo=class extends m{constructor(t,n,s){super(),this.name=t,this.num_args=n,this.run=s}};var yo=class extends m{constructor(t,n,s,r){super(),this.name=t,this.params=n,this.body=s,this.env=r}};var vn=class extends m{constructor(t){super(),this[0]=t}};var ys=class extends m{constructor(t){super(),this[0]=t}};var xl=class extends m{constructor(t){super(),this[0]=t}};var To=class extends m{constructor(t,n){super(),this.elems=t,this.rest=n}};var _r=class extends m{constructor(t,n){super(),this.fn_expr=t,this.operands=n}};var Ts=class extends m{constructor(t,n){super(),this.params=t,this.body=n}};var Po=class extends m{constructor(t,n){super(),this.subject=t,this.arms=n}};var _l=class extends m{constructor(t,n,s){super(),this.name=t,this.value=n,this.body=s}};var vo=class extends m{constructor(t,n){super(),this.record=t,this.field=n}};var Ps=class extends m{constructor(t,n){super(),this.line=t,this.expr=n}};var vs=class extends m{constructor(t){super(),this[0]=t}};var wl=class extends m{constructor(t){super(),this[0]=t}};var uc=class extends m{},Zm=new uc;var Es=class extends m{constructor(t){super(),this[0]=t}};var kl=class extends m{constructor(t,n){super(),this.elems=t,this.rest=n}};var Eo=ns([["Point",h("x",h("y",w))],["Line",h("start",h("end",w))],["Path",h("shape",h("start",h("end",h("thickness",w))))],["Circle",h("center",h("radius",w))],["Arc",h("center",h("radius",h("from",h("to",w))))],["Curve",h("start",h("control",h("end",w)))],["Polygon",h("points",w)],["Leaf",h("base",h("tip",h("width",w)))],["Colored",h("shape",h("color",w))],["Glow",h("shape",h("blur",w))],["Filled",h("shape",h("color",w))],["Faded",h("shape",h("opacity",w))],["Sway",h("shape",h("pivot",h("degrees",h("period",w))))],["Bounce",h("shape",h("height",h("period",w)))],["Rgb",h("r",h("g",h("b",w)))],["Hsl",h("hue",h("saturation",h("lightness",w)))]]);function Qm(e){return e instanceof Je?"a list":e instanceof Xt?"a "+e.tag+" record":e instanceof Gn?"the function "+e[0].name:Ad(e)}function wk(e,t){if(e instanceof Xt){let n=e.tag,s=e.fields,r=el(Kt(Eo,n),w),o=Kt(fa(r,s),t);return o instanceof $?o:new y(new $n("a "+n+" has no ."+t))}else return new y(new $n("."+t+" expects a record, got "+Qm(e)))}function Ym(e,t){if(e instanceof bs){let n=e.bindings,s=e.parent;return new bs(hd(n,Ar(t)),s)}else return e}function e1(e,t,n){if(e instanceof _)if(t instanceof k){let s=t[0];return new $(h([s,new Je(n)],w))}else return n instanceof _?new $(w):new y(void 0);else{if(n instanceof _)return new y(void 0);{let s=e.head,r=e.tail,o=n.head,i=n.tail,f=t1(s,o),a=e1(r,t,i);if(f instanceof $&&a instanceof $){let u=f[0],l=a[0];return new $(st(u,l))}else return new y(void 0)}}}function t1(e,t){if(e instanceof vs)if(t instanceof Ht){let n=e[0],s=t[0];return n===s?new $(w):new y(void 0)}else return new y(void 0);else if(e instanceof wl)if(t instanceof Y){let n=e[0],s=t[0];return n===s?new $(w):new y(void 0)}else return new y(void 0);else{if(e instanceof uc)return new $(w);if(e instanceof Es){let n=e[0];return new $(h([n,t],w))}else if(t instanceof Je){let n=e.elems,s=e.rest,r=t[0];return e1(n,s,r)}else return new y(void 0)}}function kk(e,t){for(;;){let n=e,s=t;if(s instanceof _)return new y(void 0);{let r=s.tail,o=s.head[0],i=s.head[1],f=t1(o,n);if(f instanceof $){let a=f[0];return new $([a,i])}else e=n,t=r}}}function gk(e,t,n){return new $n(e+" takes "+nt(t)+" argument(s) but was given "+nt(n))}function bk(e){if(e instanceof bo)return e.num_args;{let t=e.params;return rt(t)}}function yk(e,t){for(;;){let n=e,s=t;if(n instanceof bs){let r=n.bindings,o=n.parent,i=os(r,s);if(i instanceof $)return i;e=o,t=s}else{let r=n.bindings,o=cc(r,s);return o instanceof $?o:new y(new hl(s))}}}function pc(e,t){if(xr(1),e instanceof Gn){let n=e[0],s=bk(n);if(rt(t)===s)if(n instanceof bo){let o=n.run;return o(t)}else{let o=n.params,i=n.body,f=n.env;return Vn(i,new bs(Ar(fa(o,t)),f))}else return new y(gk(n.name,s,rt(t)))}else return new y(new $n("calling a value that is not a function"))}function Tk(e,t,n){let s=gt(e,r=>Vn(r,n));if(s instanceof $)if(t instanceof k){let r=s[0],o=t[0],i=Vn(o,n);if(i instanceof $){let f=i[0];if(f instanceof Je){let a=f[0];return new $(new Je(st(r,a)))}else{let a=f;return new y(new $n("`..` expects a list, got "+Qm(a)))}}else return i}else{let r=s[0];return new $(new Je(r))}else return s}function Vn(e,t){for(;;){let n=e,s=t;if(xr(1),n instanceof vn){let r=n[0];return yk(s,r)}else if(n instanceof ys){let r=n[0];return new $(new Ht(r))}else if(n instanceof xl){let r=n[0];return new $(new Y(r))}else if(n instanceof To){let r=n.elems,o=n.rest;return Tk(r,o,s)}else if(n instanceof _r){let r=n.fn_expr,o=n.operands,i=Vn(r,s);if(i instanceof $){let f=i[0],a=gt(o,u=>Vn(u,s));if(a instanceof $){let u=a[0];return pc(f,u)}else return a}else return i}else if(n instanceof Ts){let r=n.params,o=n.body;return new $(new Gn(new yo("lambda",r,o,s)))}else if(n instanceof Po){let r=n.subject,o=n.arms,i=Vn(r,s);if(i instanceof $){let f=i[0],a=kk(f,o);if(a instanceof $){let u=a[0][0];e=a[0][1],t=Ym(s,u)}else return new y(Um)}else return i}else if(n instanceof _l){let r=n.name,o=n.value,i=n.body,f=Vn(o,s);if(f instanceof $){let a=f[0];e=i,t=Ym(s,h([r,a],w))}else return f}else if(n instanceof vo){let r=n.record,o=n.field,i=Vn(r,s);if(i instanceof $){let f=i[0];return wk(f,o)}else return i}else{let r=n.line,o=n.expr;return uo(Vn(o,s),i=>zm(i,r))}}}function n1(e,t,n){return Jm(()=>{let s=cc(n,e);if(s instanceof $){let r=s[0];if(r instanceof Gn){let o=r[0];if(o instanceof yo){let i=o.params,f=o.body,a=o.env;return rt(i)===rt(t)?Vn(f,new bs(Ar(fa(i,t)),a)):new y(new Vr(e,rt(t)))}else return new y(new Vr(e,rt(t)))}else return new y(new Vr(e,rt(t)))}else return new y(new Vr(e,rt(t)))})}var Pk="src\\builtins.gleam",vk=3.141592653589793;function N(e,t){return new y(new $n(e+" expects "+t))}function It(e,t,n){return[e,new Gn(new bo(e,t,n))]}function Ek(){return h(It("list.map",2,e=>{if(e instanceof _)return N("list.map","a list and a function");{let t=e.tail;if(t instanceof _)return N("list.map","a list and a function");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let s=t.head,r=n[0];return W(gt(r,o=>pc(s,h(o,w))),o=>new Je(o))}else return N("list.map","a list and a function")}else return N("list.map","a list and a function")}}),h(It("list.filter",2,e=>{if(e instanceof _)return N("list.filter","a list and a function");{let t=e.tail;if(t instanceof _)return N("list.filter","a list and a function");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let s=t.head,r=n[0];return W(ca(r,w,(o,i)=>{let f=pc(s,h(i,w));if(f instanceof $){let a=f[0];return a instanceof Ht?a[0]?new $(h(i,o)):new $(o):new y(new $n("list.filter's function must return True or False"))}else return f}),o=>new Je(E(o)))}else return N("list.filter","a list and a function")}else return N("list.filter","a list and a function")}}),h(It("list.append",2,e=>{if(e instanceof _)return N("list.append","two lists");{let t=e.tail;if(t instanceof _)return N("list.append","two lists");if(t.tail instanceof _){let n=e.head;if(n instanceof Je){let s=t.head;if(s instanceof Je){let r=n[0],o=s[0];return xr(rt(r)),new $(new Je(st(r,o)))}else return N("list.append","two lists")}else return N("list.append","two lists")}else return N("list.append","two lists")}}),h(It("list.length",1,e=>{if(e instanceof _)return N("list.length","a list");if(e.tail instanceof _){let t=e.head;if(t instanceof Je){let n=t[0],s=rt(n);return xr(s),new $(new Y(s))}else return N("list.length","a list")}else return N("list.length","a list")}),h(It("list.flatten",1,e=>{if(e instanceof _)return N("list.flatten","a list of lists");if(e.tail instanceof _){let t=e.head;if(t instanceof Je){let n=t[0];return P(gt(n,s=>{if(s instanceof Je){let r=s[0];return new $(r)}else return N("list.flatten","a list")}),s=>{let r=bt(s,0,(o,i)=>o+rt(i));return xr(rt(s)+r),new $(new Je(fo(s)))})}else return N("list.flatten","a list of lists")}else return N("list.flatten","a list of lists")}),w)))))}function Ck(){return Ze(Eo,e=>{let t=e[0],n=e[1];return It(t,rt(n),s=>new $(new Xt(t,s)))})}function $c(e,t){return It(e,2,n=>{if(n instanceof _)return N(e,"two ints");{let s=n.tail;if(s instanceof _)return N(e,"two ints");if(s.tail instanceof _){let r=n.head;if(r instanceof Y){let o=s.head;if(o instanceof Y){let i=r[0],f=o[0];return new $(new Ht(t(i,f)))}else return N(e,"two ints")}else return N(e,"two ints")}else return N(e,"two ints")}})}function gl(e,t){return It(e,2,n=>{if(n instanceof _)return N(e,"two ints");{let s=n.tail;if(s instanceof _)return N(e,"two ints");if(s.tail instanceof _){let r=n.head;if(r instanceof Y){let o=s.head;if(o instanceof Y){let i=r[0],f=o[0];return new $(new Y(t(i,f)))}else return N(e,"two ints")}else return N(e,"two ints")}else return N(e,"two ints")}})}function r1(e,t){return It(e,2,n=>{if(n instanceof _)return N(e,"two Bools");{let s=n.tail;if(s instanceof _)return N(e,"two Bools");if(s.tail instanceof _){let r=n.head;if(r instanceof Ht){let o=s.head;if(o instanceof Ht){let i=r[0],f=o[0];return new $(new Ht(t(i,f)))}else return N(e,"two Bools")}else return N(e,"two Bools")}else return N(e,"two Bools")}})}function s1(e,t){for(;;){let n=e,s=t;if(n instanceof _)return s instanceof _?new $(!0):new $(!1);if(s instanceof _)return new $(!1);{let r=n.head,o=n.tail,i=s.head,f=s.tail,a=_p(r,i);if(a instanceof $&&a[0])e=o,t=f;else return a}}}function _p(e,t){if(xr(1),e instanceof Ht&&t instanceof Ht){let n=e[0],s=t[0];return new $(n===s)}else if(e instanceof Y&&t instanceof Y){let n=e[0],s=t[0];return new $(n===s)}else if(e instanceof Je&&t instanceof Je){let n=e[0],s=t[0];return s1(n,s)}else if(e instanceof Xt&&t instanceof Xt){let n=e.tag,s=e.fields,r=t.tag,o=t.fields;return n===r?s1(s,o):new $(!1)}else return new $(!1)}function Sk(e){if(e instanceof _)return N("!=","two values");{let t=e.tail;if(t instanceof _)return N("!=","two values");if(t.tail instanceof _){let n=e.head,s=t.head;return W(_p(n,s),r=>new Ht(!r))}else return N("!=","two values")}}function Ik(e){if(e instanceof _)return N("==","two values");{let t=e.tail;if(t instanceof _)return N("==","two values");if(t.tail instanceof _){let n=e.head,s=t.head;return W(_p(n,s),r=>new Ht(r))}else return N("==","two values")}}function Fk(e){if(e instanceof _)return N("sqrt","one non-negative int");if(e.tail instanceof _){let t=e.head;if(t instanceof Y){let n=t[0];if(n>=0){let s=Ji(n),r;if(s instanceof $)r=s[0];else throw Nt("let_assert",Pk,"builtins",267,"builtin_sqrt","Pattern match failed, no pattern matched the value.",{value:s,start:9573,end:9629,pattern_start:9584,pattern_end:9592});let o=wa(r),i;o*o>n?i=o-1:i=o;let a=i,u;(a+1)*(a+1)<=n?u=a+1:u=a;let c=u;return new $(new Y(c))}else return N("sqrt","one non-negative int")}else return N("sqrt","one non-negative int")}else return N("sqrt","one non-negative int")}function o1(e,t){return n=>{if(n instanceof _)return N(e,"two ints (degrees and scale)");{let s=n.tail;if(s instanceof _)return N(e,"two ints (degrees and scale)");if(s.tail instanceof _){let r=n.head;if(r instanceof Y){let o=s.head;if(o instanceof Y){let i=r[0],f=o[0],a=i%360*vk/180;return new $(new Y(Mr(t(a)*f)))}else return N(e,"two ints (degrees and scale)")}else return N(e,"two ints (degrees and scale)")}else return N(e,"two ints (degrees and scale)")}}}function Lk(e){if(e instanceof _)return N("abs","one int");if(e.tail instanceof _){let t=e.head;if(t instanceof Y){let n=t[0];return new $(new Y(ia(n)))}else return N("abs","one int")}else return N("abs","one int")}function Ak(e){if(e instanceof _)return N("random","two ints");{let t=e.tail;if(t instanceof _)return N("random","two ints");if(t.tail instanceof _){let n=e.head;if(n instanceof Y){let s=t.head;if(s instanceof Y){let r=n[0],o=s[0];return o<=r?new $(new Y(r)):new $(new Y(r+wa(ao()*(o-r))))}else return N("random","two ints")}else return N("random","two ints")}else return N("random","two ints")}}function Mk(){return Ar(h(It("random",2,Ak),h(It("abs",1,Lk),h(It("sin",2,o1("sin",nc)),h(It("cos",2,o1("cos",rc)),h(It("sqrt",1,Fk),h(It("==",2,Ik),h(It("!=",2,Sk),h(r1("&&",(e,t)=>e&&t),h(r1("||",(e,t)=>e||t),h(gl("+",(e,t)=>e+t),h(gl("-",(e,t)=>e-t),h(gl("*",(e,t)=>e*t),h(gl("/",(e,t)=>na(e,t)),h(gl("%",(e,t)=>no(e,t)),h($c("<",(e,t)=>e<t),h($c(">",(e,t)=>e>t),h($c("<=",(e,t)=>e<=t),h($c(">=",(e,t)=>e>=t),st(Ck(),Ek()))))))))))))))))))))}function i1(){let e=hp(),t=(n,s)=>ml(e,n,s);return md(Mk(),t),e}function l1(e){try{let t=globalThis.localStorage.getItem(e);return t===null?ct(void 0):tt(t)}catch{return ct(void 0)}}function a1(e,t){try{globalThis.localStorage.setItem(e,t)}catch(n){console.error(`Couldn't save: ${n.message}`)}}function wp(){let e=window.prompt("Name for the new drawing:");return e===null?"":e}var dc=ns([["fan",`fn draw(shape_slider: Int) -> List(Path) {
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
// Built for the CS 61A Animator mini-language (paste the entire file).
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
    legs(),
    flying_cloth(),
    torso(),
    left_arm(),
    right_arm(),
    head(),
    loose_feathers(0),
    falling_sparks(0),
    speed_trails(0),
  ])
}

// \u2500\u2500 Motion and geometry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn along(a: Point, b: Point, k: Int, n: Int) -> Point {
  Point(a.x + { b.x - a.x } * k / n, a.y + { b.y - a.y } * k / n)
}

// The whole falling figure heaves and rolls, while limbs flap independently.
fn falling(s: Shape) -> Shape {
  Bounce(Sway(s, Point(0, 130), 7, 46), 19, 27)
}

fn arm_motion(s: Shape, side: Int) -> Shape {
  let pivot = case side == -1 {
    True -> Point(-25, 166)
    False -> Point(170, 178)
  }
  Bounce(Sway(s, pivot, 12, 20 + { side + 1 } * 3), 15, 24)
}

fn leg_motion(s: Shape, side: Int) -> Shape {
  let pivot = case side == -1 {
    True -> Point(-153, 119)
    False -> Point(-111, 121)
  }
  Bounce(Sway(s, pivot, 9, 27 + { side + 1 } * 3), 13, 34)
}

// Every feather has a slightly different tempo, like wind tearing at the wings.
fn wing_motion(s: Shape, side: Int, i: Int) -> Shape {
  let pivot = case side == -1 {
    True -> Point(-33, 145)
    False -> Point(150, 155)
  }
  let speed = case side == -1 {
    True -> 18
    False -> 23
  }
  Bounce(
    Sway(s, pivot, 13 + i % 5 * 2, speed + i % 4 * 2),
    5 + i % 4 * 2,
    13 + i % 5 * 3,
  )
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

// \u2500\u2500 Two huge battered wings \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
// Three joint positions reproduce the soaring U-shaped wings in the drawing.
// The right wing is ragged: regularly skipped feathers suggest burn damage.

fn shoulder(side: Int) -> Point {
  case side == -1 {
    True -> Point(-33, 145)
    False -> Point(150, 155)
  }
}

fn elbow(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-245 - spread, -40)
    False -> Point(296 + spread, -30)
  }
}

fn wingtip(side: Int, spread: Int) -> Point {
  case side == -1 {
    True -> Point(-364 - spread, -365)
    False -> Point(339 + spread, -309)
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
    Path(m(Glow(Colored(Curve(a, b, c), Rgb(255, 173, 85)), 24)), 12, 32, 22),
    Path(m(Colored(Curve(a, b, c), Rgb(30, 40, 65))), 13, 36, 24),
    Path(m(Colored(Curve(a, b, c), Rgb(230, 166, 100))), 14, 35, 7),
    Path(m(Faded(Colored(Curve(a, b, c), Rgb(255, 236, 180)), 72)), 15, 35, 2),
  ]
}

// Main flight feathers: layered dark roots, colorful vanes, luminous shafts.
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
          let length = 77 + i * { 24 - i } / 3 + i % 5 * 7
          let end = Point(base.x + cos(angle, length), base.y + sin(angle, length))
          let mid = along(base, end, 2, 5)
          let width = 9 + i % 4 * 3
          let feather = Leaf(base, end, width)
          let end_piece = Leaf(mid, end, width * 3 / 4)
          let color = case i % 5 {
            0 -> Rgb(22, 91, 118)
            1 -> Rgb(39, 133, 150)
            2 -> Rgb(72, 166, 160)
            3 -> Rgb(196, 127, 76)
            _ -> Rgb(38, 77, 111)
          }
          let t = 17 + i * 2
          list.append([
            Path(wing_motion(Filled(feather, Rgb(21, 38, 61)), side, i), t, t + 5, 0),
            Path(wing_motion(Faded(Filled(feather, color), 84), side, i), t, t + 6, 0),
            Path(wing_motion(Faded(Filled(end_piece, Rgb(255, 178, 85)), 33), side, i), t + 1, t + 6, 0),
            Path(wing_motion(Faded(Colored(feather, Rgb(8, 28, 49)), 83), side, i), t + 1, t + 6, 2),
            Path(wing_motion(Faded(Colored(Line(base, end), Rgb(245, 226, 170)), 64), side, i), t + 2, t + 8, 2),
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
      let color = case i % 4 {
        0 -> Rgb(241, 179, 107)
        1 -> Rgb(120, 180, 165)
        2 -> Rgb(36, 79, 100)
        _ -> Rgb(241, 213, 149)
      }
      [
        Path(wing_motion(Faded(Filled(feather, color), 85), side, i + 5), 31 + i, 38 + i, 0),
        Path(wing_motion(Faded(Colored(feather, Rgb(31, 43, 60)), 67), side, i + 5), 32 + i, 39 + i, 1),
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
        Path(wing_motion(Faded(Colored(Curve(root, along(root, tip, 2, 3), tip), Rgb(255, 224, 160)), 42), side, i), 39 + i * 2, 47 + i * 2, 2),
        ..wing_ribs(i + 1, a, b, c, side)
      ]
    }
  }
}

// \u2500\u2500 Anatomical figure: a bare back, muscular limbs, dark windblown cloth \u2500\u2500

// Shaded segments for the arms and bent, upward-kicking legs.
fn muscle(a: Point, b: Point, w: Int, t: Int, group: Int) -> List(Path) {
  let wrap = fn(s: Shape) {
    case group {
      -2 -> arm_motion(s, -1)
      2 -> arm_motion(s, 1)
      -1 -> leg_motion(s, -1)
      1 -> leg_motion(s, 1)
      _ -> falling(s)
    }
  }
  let limb = Leaf(a, b, w)
  let darkside = Leaf(along(a, b, 1, 6), along(a, b, 5, 6), w * 2 / 3)
  let shine = Line(along(a, b, 1, 7), along(a, b, 6, 7))
  list.flatten([
    [
      Path(wrap(Filled(limb, Rgb(168, 97, 66))), t, t + 6, 0),
      Path(wrap(Faded(Filled(darkside, Rgb(74, 49, 59)), 34)), t + 1, t + 6, 0),
      Path(wrap(Faded(Colored(limb, Rgb(39, 32, 42)), 92)), t + 1, t + 6, 3),
      Path(wrap(Faded(Colored(shine, Rgb(255, 209, 144)), 78)), t + 2, t + 7, 5),
    ],
    muscle_hatching(1, a, b, w, t + 2, group),
  ])
}

fn muscle_hatching(i: Int, a: Point, b: Point, w: Int, t: Int, group: Int) -> List(Path) {
  case i == 7 {
    True -> []
    False -> {
      let dx = b.x - a.x
      let dy = b.y - a.y
      let len = sqrt(dx * dx + dy * dy) + 1
      let middle = along(a, b, i, 7)
      let extent = w * { 7 - i } * i / 32
      let nx = 0 - dy * extent / len
      let ny = dx * extent / len
      let slant = Point(dx * 7 / len, dy * 7 / len)
      let scratch = Line(
        Point(middle.x + nx + slant.x, middle.y + ny + slant.y),
        Point(middle.x - nx / 2 - slant.x, middle.y - ny / 2 - slant.y),
      )
      let motion = case group {
        -2 -> arm_motion(scratch, -1)
        2 -> arm_motion(scratch, 1)
        -1 -> leg_motion(scratch, -1)
        1 -> leg_motion(scratch, 1)
        _ -> falling(scratch)
      }
      [
        Path(Faded(Colored(motion, Rgb(50, 35, 42)), 42), t + i, t + i + 3, 2),
        ..muscle_hatching(i + 1, a, b, w, t, group)
      ]
    }
  }
}

fn legs() -> List(Path) {
  list.flatten([
    muscle(Point(-160, 127), Point(-75, 10), 38, 24, -1),
    muscle(Point(-75, 10), Point(-131, -121), 25, 27, -1),
    muscle(Point(-131, -121), Point(-161, -176), 13, 30, -1),
    muscle(Point(-112, 135), Point(-6, 15), 36, 27, 1),
    muscle(Point(-6, 15), Point(-37, -101), 25, 31, 1),
    muscle(Point(-37, -101), Point(-62, -160), 13, 35, 1),
    [
      Path(leg_motion(Filled(Leaf(Point(-161, -176), Point(-186, -187), 11), Rgb(174, 107, 74)), -1), 34, 42, 0),
      Path(leg_motion(Colored(Leaf(Point(-161, -176), Point(-186, -187), 11), Rgb(50, 34, 41)), -1), 34, 42, 2),
      Path(leg_motion(Filled(Leaf(Point(-62, -160), Point(-82, -173), 12), Rgb(186, 111, 78)), 1), 38, 45, 0),
      Path(leg_motion(Colored(Leaf(Point(-62, -160), Point(-82, -173), 12), Rgb(50, 34, 41)), 1), 38, 45, 2),
    ],
  ])
}

fn flying_cloth() -> List(Path) {
  let cloth = Polygon([
    Point(-239, 94), Point(-177, 76), Point(-122, 107),
    Point(-93, 160), Point(-116, 214), Point(-211, 202),
    Point(-290, 164), Point(-335, 116),
  ])
  [
    Path(falling(Filled(cloth, Rgb(27, 41, 69))), 32, 42, 0),
    Path(falling(Faded(Filled(Leaf(Point(-294, 120), Point(-116, 202), 55), Rgb(6, 19, 38)), 76)), 34, 45, 0),
    Path(falling(Colored(cloth, Rgb(18, 25, 43))), 34, 43, 4),
    Path(falling(Colored(Curve(Point(-320, 122), Point(-240, 166), Point(-133, 155)), Rgb(152, 119, 103))), 36, 44, 3),
    Path(falling(Faded(Colored(Curve(Point(-260, 135), Point(-219, 218), Point(-149, 197)), Rgb(208, 149, 105)), 65)), 38, 47, 2),
    Path(arm_motion(Filled(Leaf(Point(-330, 129), Point(-387, 100), 19), Rgb(34, 51, 76)), -1), 39, 48, 0),
    Path(arm_motion(Colored(Leaf(Point(-330, 129), Point(-387, 100), 19), Rgb(11, 25, 42)), -1), 39, 48, 2),
  ]
}

fn torso() -> List(Path) {
  let back = Polygon([
    Point(-164, 101), Point(-119, 87), Point(-62, 103),
    Point(16, 95), Point(82, 105), Point(134, 127),
    Point(184, 161), Point(171, 207), Point(103, 228),
    Point(17, 217), Point(-79, 220), Point(-157, 189),
  ])
  list.flatten([
    [
      Path(falling(Glow(Filled(back, Rgb(255, 176, 103)), 15)), 31, 41, 0),
      Path(falling(Filled(back, Rgb(178, 106, 77))), 32, 43, 0),
      Path(falling(Faded(Filled(Leaf(Point(-107, 143), Point(123, 169), 64), Rgb(105, 59, 63)), 26)), 34, 44, 0),
      Path(falling(Faded(Filled(Leaf(Point(-50, 118), Point(149, 156), 42), Rgb(243, 170, 105)), 43)), 34, 45, 0),
      Path(falling(Colored(back, Rgb(46, 33, 43))), 33, 44, 4),
      Path(falling(Faded(Colored(Curve(Point(-75, 137), Point(19, 164), Point(137, 155)), Rgb(64, 45, 53)), 81)), 38, 47, 4),
      Path(falling(Faded(Colored(Curve(Point(-72, 180), Point(21, 200), Point(127, 186)), Rgb(255, 201, 136)), 76)), 39, 49, 4),
      Path(falling(Faded(Colored(Curve(Point(45, 111), Point(25, 171), Point(18, 200)), Rgb(73, 43, 48)), 69)), 40, 49, 3),
      Path(falling(Faded(Colored(Curve(Point(61, 113), Point(62, 161), Point(90, 194)), Rgb(69, 44, 51)), 56)), 40, 50, 3),
      Path(falling(Faded(Colored(Curve(Point(-100, 125), Point(-128, 174), Point(-96, 197)), Rgb(254, 206, 145)), 67)), 40, 50, 3),
      Path(falling(Faded(Colored(Curve(Point(135, 137), Point(169, 149), Point(163, 196)), Rgb(252, 206, 137)), 85)), 41, 52, 4),
    ],
    back_hatching(0),
  ])
}

fn back_hatching(i: Int) -> List(Path) {
  case i == 16 {
    True -> []
    False -> {
      let x = -118 + i * 17
      let y = 187 + i * 13 % 20
      let stroke = Line(Point(x, y), Point(x + 14 + i % 3 * 6, y - 23))
      [
        Path(falling(Faded(Colored(stroke, Rgb(56, 37, 47)), 30 + i % 4 * 9)), 43 + i, 48 + i, 2),
        ..back_hatching(i + 1)
      ]
    }
  }
}

fn left_arm() -> List(Path) {
  list.flatten([
    muscle(Point(-48, 169), Point(-218, 235), 28, 41, -2),
    muscle(Point(-218, 235), Point(-340, 320), 19, 44, -2),
    muscle(Point(-340, 320), Point(-384, 324), 12, 46, -2),
    [
      Path(arm_motion(Colored(Curve(Point(-380, 316), Point(-398, 304), Point(-409, 296)), Rgb(246, 195, 139)), -1), 48, 55, 3),
      Path(arm_motion(Colored(Curve(Point(-379, 327), Point(-393, 338), Point(-406, 341)), Rgb(246, 195, 139)), -1), 48, 55, 2),
    ],
  ])
}

fn right_arm() -> List(Path) {
  list.flatten([
    muscle(Point(151, 180), Point(223, 307), 33, 42, 2),
    muscle(Point(223, 307), Point(298, 410), 20, 45, 2),
    muscle(Point(298, 410), Point(333, 426), 12, 49, 2),
    [
      Path(arm_motion(Colored(Curve(Point(327, 428), Point(345, 447), Point(357, 454)), Rgb(255, 206, 146)), 1), 52, 59, 3),
      Path(arm_motion(Colored(Curve(Point(333, 421), Point(350, 421), Point(365, 413)), Rgb(255, 206, 146)), 1), 52, 59, 2),
    ],
  ])
}

fn head() -> List(Path) {
  let c = Point(142, 68)
  let neck = Leaf(Point(113, 132), Point(143, 94), 24)
  list.flatten([
    [
      Path(falling(Filled(neck, Rgb(162, 94, 69))), 42, 48, 0),
      Path(falling(Colored(neck, Rgb(40, 32, 40))), 42, 49, 3),
      Path(falling(Filled(Circle(c, 42), Rgb(141, 79, 66))), 45, 52, 0),
      Path(falling(Faded(Filled(Circle(Point(149, 61), 35), Rgb(224, 147, 98)), 50)), 45, 52, 0),
      Path(falling(Colored(Arc(c, 42, 12, 350), Rgb(44, 33, 43))), 46, 54, 3),
      Path(falling(Faded(Colored(Curve(Point(116, 88), Point(151, 110), Point(173, 84)), Rgb(255, 196, 130)), 81)), 49, 57, 4),
      Path(falling(Filled(Arc(Point(141, 48), 31, 185, 345), Rgb(27, 32, 47))), 46, 53, 0),
    ],
    curls(0, c),
  ])
}

fn curls(i: Int, c: Point) -> List(Path) {
  case i == 19 {
    True -> []
    False -> {
      let a = 155 + i * 285 / 18
      let radius = 31 + i % 4 * 3
      let spot = Point(c.x + cos(a, radius), c.y + sin(a, radius))
      let size = 9 + i % 4 * 3
      let halo = Circle(Point(spot.x - 2, spot.y - 2), size)
      [
        Path(falling(Filled(halo, Rgb(28, 30, 42))), 46 + i, 51 + i, 0),
        Path(falling(Faded(Colored(Arc(spot, size, 165, 345), Rgb(225, 155, 107)), 59)), 48 + i, 54 + i, 2),
        Path(falling(Colored(Arc(spot, size + 2, 12, 170), Rgb(20, 29, 42))), 48 + i, 54 + i, 3),
        ..curls(i + 1, c)
      ]
    }
  }
}

// \u2500\u2500 Torn feathers tumble away from the burning right wing \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500

fn loose_feathers(i: Int) -> List(Path) {
  case i == 33 {
    True -> []
    False -> {
      let x = { i * 237 + i * i * 31 } % 910 - 455
      let y = { i * 161 + i * i * 19 } % 790 - 410
      let rest = loose_feathers(i + 1)
      case x > -190 && x < 260 && y > -85 && y < 300 {
        True -> rest
        False -> {
          let base = Point(x, y)
          let angle = i * 67 % 360
          let extent = 24 + i % 5 * 11
          let tip = Point(x + cos(angle, extent), y + sin(angle, extent))
          let f = Leaf(base, tip, 4 + i % 3 * 2)
          let color = case i % 4 {
            0 -> Rgb(255, 217, 142)
            1 -> Rgb(79, 178, 175)
            2 -> Rgb(212, 108, 72)
            _ -> Rgb(176, 209, 194)
          }
          let drift = fn(s: Shape) {
            Bounce(Sway(s, base, 43 + i % 4 * 10, 10 + i % 6 * 4), 45 + i % 5 * 16, 12 + i % 5 * 4)
          }
          let t = 58 + i * 2
          list.append([
            Path(drift(Faded(Filled(f, color), 93)), t, t + 6, 0),
            Path(drift(Colored(f, Rgb(29, 42, 63))), t + 1, t + 7, 1),
            Path(drift(Faded(Colored(Line(base, tip), Rgb(255, 241, 202)), 66)), t + 2, t + 8, 1),
          ], rest)
        }
      }
    }
  }
}

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
`]]);var Hn=class extends m{constructor(t,n){super(),this.drawings=t,this.current=n}};var f1="animator-library";function c1(){let e,t=dc;t instanceof _?e="":e=t.head[0];let n=e;return new Hn(dc,n)}function Ok(){let e=us("name",fr,t=>us("source",fr,n=>Rr([t,n])));return us("current",fr,t=>us("drawings",xa(e),n=>Rr(new Hn(n,t))))}function u1(){let e=l1(f1),t=P(e,r=>{let o=lh(r,Ok());return Zd(o,void 0)}),n=W(t,r=>{let o=as(dc,i=>Yd(Kt(r.drawings,i[0])));return new Hn(st(r.drawings,o),r.current)}),s=W(n,r=>{let o=r.drawings;if(o instanceof _)return c1();{let i=o.head[0];return Kt(r.drawings,r.current)instanceof $?r:new Hn(r.drawings,i)}});return el(s,c1())}function jk(e){return tl(h(["current",Or(e.current)],h(["drawings",ba(e.drawings,t=>tl(h(["name",Or(t[0])],h(["source",Or(t[1])],w))))],w)))}function kp(e){return a1(f1,ah(jk(e)))}function gp(e){let t=Kt(e.drawings,e.current);return el(t,"")}function p1(e,t){return new Hn(Ed(e.drawings,e.current,t),e.current)}function $1(e,t){return Kt(e.drawings,t)instanceof $?new Hn(e.drawings,t):e}function d1(e,t,n){return Kt(e.drawings,t)instanceof $?new Hn(e.drawings,t):new Hn(st(e.drawings,h([t,n],w)),t)}var zn=class extends m{constructor(t,n){super(),this.x=t,this.y=n}};var Co=class extends m{constructor(t,n){super(),this.start=t,this.end=n}};var So=class extends m{constructor(t,n){super(),this.center=t,this.radius=n}};var Io=class extends m{constructor(t,n,s,r){super(),this.center=t,this.radius=n,this.from=s,this.to=r}};var Fo=class extends m{constructor(t,n,s){super(),this.start=t,this.control=n,this.end=s}};var Lo=class extends m{constructor(t){super(),this.points=t}};var Ao=class extends m{constructor(t,n,s){super(),this.base=t,this.tip=n,this.width=s}};var Gr=class extends m{constructor(t,n){super(),this.shape=t,this.color=n}};var Hr=class extends m{constructor(t,n){super(),this.shape=t,this.blur=n}};var zr=class extends m{constructor(t,n){super(),this.shape=t,this.color=n}};var Wr=class extends m{constructor(t,n){super(),this.shape=t,this.opacity=n}};var wr=class extends m{constructor(t,n,s,r){super(),this.shape=t,this.pivot=n,this.degrees=s,this.period=r}};var Cs=class extends m{constructor(t,n,s){super(),this.shape=t,this.height=n,this.period=s}};var hc=class extends m{constructor(t,n,s,r){super(),this.shape=t,this.start=n,this.end=s,this.thickness=r}};function dn(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new y(new X("expected a Point"));{let n=t.tail;if(n instanceof _)return new y(new X("expected a Point"));if(n.tail instanceof _){let s=t.head;if(s instanceof Y){let r=n.head;if(r instanceof Y&&e.tag==="Point"){let o=s[0],i=r[0];return new $(new zn(o,i))}else return new y(new X("expected a Point"))}else return new y(new X("expected a Point"))}else return new y(new X("expected a Point"))}}else return new y(new X("expected a Point"))}function bl(e,t){return nt(Xi(e,0,t))}function h1(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new y(new X("a Colored shape's color must be an Rgb or Hsl"));{let n=t.tail;if(n instanceof _)return new y(new X("a Colored shape's color must be an Rgb or Hsl"));{let s=n.tail;if(s instanceof _)return new y(new X("a Colored shape's color must be an Rgb or Hsl"));if(s.tail instanceof _){let r=t.head;if(r instanceof Y){let o=n.head;if(o instanceof Y){let i=s.head;if(i instanceof Y){let f=e.tag;if(f==="Rgb"){let a=r[0],u=o[0],l=i[0];return new $("rgb("+bl(a,255)+", "+bl(u,255)+", "+bl(l,255)+")")}else if(f==="Hsl"){let a=r[0],u=o[0],l=i[0],c=(a%360+360)%360;return new $("hsl("+nt(c)+", "+bl(u,100)+"%, "+bl(l,100)+"%)")}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}}}else return new y(new X("a Colored shape's color must be an Rgb or Hsl"))}function Kr(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _){let n=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+n))}else{let n=t.tail;if(n instanceof _){let s=t.head;if(s instanceof Je){let r=e.tag;if(r==="Polygon"){let o=s[0];return P(gt(o,dn),i=>i instanceof _?new y(new X("a Polygon needs at least one Point")):new $(new Lo(i)))}else{let o=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}else{let r=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+r))}}else{let s=n.tail;if(s instanceof _){let r=e.tag;if(r==="Line"){let o=t.head,i=n.head;return P(dn(o),f=>P(dn(i),a=>new $(new Co(f,a))))}else if(r==="Circle"){let o=n.head;if(o instanceof Y){let i=t.head,f=o[0];return P(dn(i),a=>new $(new So(a,f)))}else{let i=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else if(r==="Colored"){let o=t.head,i=n.head;return P(Kr(o),f=>P(h1(i),a=>new $(new Gr(f,a))))}else if(r==="Glow"){let o=n.head;if(o instanceof Y){let i=t.head,f=o[0];return P(Kr(i),a=>new $(new Hr(a,lo(f,0))))}else{let i=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else if(r==="Filled"){let o=t.head,i=n.head;return P(Kr(o),f=>P(h1(i),a=>new $(new zr(f,a))))}else if(r==="Faded"){let o=n.head;if(o instanceof Y){let i=t.head,f=o[0];return P(Kr(i),a=>new $(new Wr(a,Xi(f,0,100))))}else{let i=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else{let o=r;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}else{let r=s.tail;if(r instanceof _){let o=e.tag;if(o==="Curve"){let i=t.head,f=n.head,a=s.head;return P(dn(i),u=>P(dn(f),l=>P(dn(a),c=>new $(new Fo(u,l,c)))))}else if(o==="Leaf"){let i=s.head;if(i instanceof Y){let f=t.head,a=n.head,u=i[0];return P(dn(f),l=>P(dn(a),c=>new $(new Ao(l,c,u))))}else{let f=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else if(o==="Bounce"){let i=n.head;if(i instanceof Y){let f=s.head;if(f instanceof Y){let a=t.head,u=i[0],l=f[0];return P(Kr(a),c=>new $(new Cs(c,u,l)))}else{let a=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+a))}}else{let f=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else{let i=o;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else if(r.tail instanceof _){let o=s.head;if(o instanceof Y){let i=r.head;if(i instanceof Y){let f=n.head;if(f instanceof Y){let a=e.tag;if(a==="Arc"){let u=t.head,l=o[0],c=i[0],p=f[0];return P(dn(u),d=>new $(new Io(d,p,l,c)))}else if(a==="Sway"){let u=t.head,l=f,c=o[0],p=i[0];return P(Kr(u),d=>P(dn(l),x=>new $(new wr(d,x,c,p))))}else{let u=a;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+u))}}else{let a=e.tag;if(a==="Sway"){let u=t.head,l=f,c=o[0],p=i[0];return P(Kr(u),d=>P(dn(l),x=>new $(new wr(d,x,c,p))))}else{let u=a;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+u))}}}else{let f=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+f))}}else{let i=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+i))}}else{let o=e.tag;return new y(new X("a Path's shape must be a recognized shape with the right field types, not "+o))}}}}}else return new y(new X("a Path's shape must be a recognized shape"))}function Nk(e){if(e instanceof Xt){let t=e.fields;if(t instanceof _)return new y(new X("some element is not a well-formed path"));{let n=t.tail;if(n instanceof _)return new y(new X("some element is not a well-formed path"));{let s=n.tail;if(s instanceof _)return new y(new X("some element is not a well-formed path"));{let r=s.tail;if(r instanceof _)return new y(new X("some element is not a well-formed path"));if(r.tail instanceof _){let o=n.head;if(o instanceof Y){let i=s.head;if(i instanceof Y){let f=r.head;if(f instanceof Y&&e.tag==="Path"){let a=t.head,u=o[0],l=i[0],c=f[0];return P(Kr(a),p=>new $(new hc(p,u,l,c)))}else return new y(new X("some element is not a well-formed path"))}else return new y(new X("some element is not a well-formed path"))}else return new y(new X("some element is not a well-formed path"))}else return new y(new X("some element is not a well-formed path"))}}}}else return new y(new X("some element is not a well-formed path"))}function m1(e,t){let n=n1("draw",h(new Y(e),w),t);if(n instanceof $){let s=n[0];if(s instanceof Je){let r=s[0];return rt(r)>Xm?new y(Hm):gt(r,Nk)}else return new y(new X("return value of draw is not a list"))}else return n}var En=null,bp=null,mc=null,yp=null;function Uk(e){let t=new Set(["fn","case","let","const","import","use","type","pub","as","if","todo","panic","assert"]);return e.define({token(n){if(n.eatSpace())return null;if(n.match(/^\/\/.*/))return"comment";if(n.match(/^"(?:[^"\\]|\\.)*"?/))return"string";if(n.match(/^[0-9]+\.[0-9]+/)||n.match(/^[0-9]+/))return"number";if(n.match(/^(True|False|Nil|Ok|Error)\b/))return"atom";let s=n.match(/^[A-Za-z_][A-Za-z0-9_]*/);return s?t.has(s[0])?"keyword":/^[A-Z]/.test(s[0])?"typeName":"variableName":n.match(/^(\+\.|-\.|\*\.|\/\.|<=\.|>=\.|<\.|>\.|==|!=|->|<-|\|>|=)/)?"operator":(n.next(),null)},languageData:{commentTokens:{line:"//"}}})}function Vk(){if(mc)return mc;let e="6";return mc=Promise.all([import(`https://esm.sh/@codemirror/view@${e}`),import(`https://esm.sh/@codemirror/state@${e}`),import(`https://esm.sh/@codemirror/commands@${e}`),import(`https://esm.sh/@codemirror/language@${e}`),import(`https://esm.sh/@codemirror/autocomplete@${e}`),import("https://esm.sh/@lezer/highlight@1")]).then(([t,n,s,r,o,i])=>{let{tags:f}=i,a=t.EditorView.theme({"&":{color:"#d4c5a0",backgroundColor:"#0d0d1a",height:"100%"},".cm-content":{fontFamily:"monospace",fontSize:"13px",padding:"16px 0"},".cm-gutters":{backgroundColor:"#0d0d1a",color:"#3a3a5e",border:"none"},".cm-activeLine":{backgroundColor:"#16162c"},".cm-activeLineGutter":{backgroundColor:"#16162c"},"&.cm-focused .cm-matchingBracket":{backgroundColor:"#2a4a3a",color:"#fff"},".cm-scroller":{overflow:"auto"},"&.cm-focused":{outline:"1px solid #6a6aaa"}},{dark:!0}),u=r.HighlightStyle.define([{tag:f.keyword,color:"#c792ea"},{tag:f.comment,color:"#6a7a6a",fontStyle:"italic"},{tag:f.string,color:"#c3e88d"},{tag:f.number,color:"#f78c6c"},{tag:[f.atom,f.bool],color:"#82aaff"},{tag:f.typeName,color:"#ffcb6b"},{tag:f.variableName,color:"#d4c5a0"},{tag:f.operator,color:"#89ddff"}]),l=Uk(r.StreamLanguage);function c(p,d,x){let b=t.EditorView.updateListener.of(v=>{v.docChanged&&x(v.state.doc.toString())}),T=n.EditorState.create({doc:d,extensions:[t.lineNumbers(),t.highlightActiveLine(),t.highlightActiveLineGutter(),s.history(),t.drawSelection(),r.indentOnInput(),r.indentUnit.of("  "),r.bracketMatching(),o.closeBrackets(),r.syntaxHighlighting(u),l,t.keymap.of([...o.closeBracketsKeymap,...s.defaultKeymap,...s.historyKeymap,s.indentWithTab]),a,t.EditorView.lineWrapping,b]});return new t.EditorView({state:T,parent:p})}return{create:c}}),mc}function Gk(e,t){return new Promise(n=>{let s=0,r=()=>{let o=document.getElementById(e);if(o)return n(o);if(s++>=t)return n(null);requestAnimationFrame(r)};r()})}function Hk(){if(!En||En.dom.isConnected)return;let e=document.getElementById("code-editor");e&&(e.replaceChildren(En.dom),En.requestMeasure(),document.activeElement===document.body&&En.focus())}var Tp=0;function x1(e,t){let n=++Tp;En&&(En.destroy(),En=null),bp=t,yp||(yp=new MutationObserver(Hk),yp.observe(document.body,{childList:!0,subtree:!0})),Gk("code-editor",120).then(s=>{!s||n!==Tp||Vk().then(r=>{let o=document.getElementById("code-editor");o&&n===Tp&&(En&&En.destroy(),o.innerHTML="",En=r.create(o,e,i=>{bp&&bp(i)}))}).catch(r=>console.error("CodeMirror failed to load:",r))})}var he=class extends m{constructor(t,n){super(),this.signature=t,this.description=n}};function Pp(e,t){return pr(n=>x1(e,s=>n(t(s))))}function zk(){return h(new he("list.map(list, fn(a) -> b) -> List(b)","each element through `fn`"),h(new he("list.filter(list, fn(a) -> Bool) -> List(a)","only the elements `fn` says True to"),h(new he("list.append(list, list) -> List(a)","one list after the other"),h(new he("list.length(list) -> Int","the number of elements"),h(new he("list.flatten(List(List(a))) -> List(a)","the inner lists, end to end"),w)))))}function xc(e,t){return vt(h(ie("reference-group"),w),h(vt(h(ie("reference-group-title"),w),h(Pt(e),w)),h(vt(h(ie("reference-rows"),w),Ze(t,n=>vt(h(ie("reference-row"),w),h(Rh(h(ie("reference-sig"),w),h(Pt(n.signature),w)),h(wo(h(ie("reference-desc"),w),h(Pt(n.description),w)),w))))),w)))}function Wk(){return ns([new he("Circle(center: Point, radius: Int)","a full circle"),new he("Arc(center: Point, radius: Int, from: Int, to: Int)","part of a circle, traced from angle `from` to `to`"),new he("Curve(start: Point, control: Point, end: Point)","a smooth curve that bends toward `control`"),new he("Polygon(points: List(Point))","a closed outline through the points"),new he("Leaf(base: Point, tip: Point, width: Int)","a closed, pointed lens shape: a petal, leaf, or blade of grass"),new he("Colored(shape, color)","draws `shape` in `color` instead of the app's palette"),new he("Glow(shape, blur: Int)","a soft halo in the shape's color"),new he("Filled(shape, color)","fills a closed shape; thickness 0 draws only the fill"),new he("Faded(shape, opacity: Int)","see-through, from 0 to 100"),new he("Sway(shape, pivot: Point, degrees: Int, period: Int)","rocks around `pivot`, once every `period` (1/10 s), forever"),new he("Bounce(shape, height: Int, period: Int)","hops up by `height`, once every `period` (1/10 s), forever"),new he("Rgb(r: Int, g: Int, b: Int)","a color, each part in [0, 255]"),new he("Hsl(hue: Int, saturation: Int, lightness: Int)","a color: hue in degrees, the others in [0, 100]")])}function Kk(){return h(new he("random(min: Int, max: Int) -> Int","a random int in [min, max)"),h(new he("abs(n: Int) -> Int","the absolute value of `n`"),h(new he("Point(x: Int, y: Int)","a point on the canvas: (0, 0) is the center, x and y run from -500 to 500, and y grows downward"),h(new he("Line(start: Point, end: Point)","a straight-line shape"),h(new he("Path(shape, start: Int, end: Int, thickness: Int)","draws a shape between times `start` and `end`, in 1/10 s (end <= start draws it instantly)"),h(new he("sin(degrees: Int, scale: Int) -> Int","sine of the angle times `scale`, rounded: sin(30, 100) == 50"),h(new he("cos(degrees: Int, scale: Int) -> Int","cosine of the angle times `scale`, rounded: cos(60, 100) == 50"),h(new he("sqrt(n: Int) -> Int","the integer square root of `n` >= 0"),w))))))))}function Xk(){return h(new he("shape_slider: Int","the shape slider value, in [0, 100]"),w)}function Jk(){return Nh(h(ie("reference"),w),h(qh(h(ie("reference-summary"),w),h(Pt("Built-ins"),w)),h(vt(h(ie("reference-body"),w),h(xc("Inputs",Xk()),h(xc("Functions",Kk()),h(xc("Shapes & colors",Wk()),h(xc("Lists",zk()),w))))),w)))}function _1(e){return vt(h(ie("code-panel"),w),h(vt(h(ie("code-header"),w),h(wo(h(ie("code-title"),w),h(Pt("draw code"),w)),h(Nr(h(ie("icon-btn"),h(ot("title","Hide code"),h(Ur(e),w))),h(Pt("\u27E8"),w)),w))),h(vt(h(ie("code-editor-wrap"),w),h(du("","div",h(Ta("code-editor"),h(ie("code-editor"),w)),""),w)),h(Jk(),w))))}function w1(e){let t="",n=e;for(;n.tail;)t!==""&&(t+="|"),t+=Zk(n.head),n=n.tail;return new RegExp(t)}function _c(e,t){let n=t.match(e);if(!n)return[t,""];let s=n.index;return[t.slice(0,s),t.slice(s)]}function Zk(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function k1(e){let n=as(e,s=>s!=="");return w1(n)}function xt(e,t,n){return e.slice(t,t+n)}function g1(e){return e.slice(1)}function yl(e){return e.length}var B=class extends m{constructor(t){super(),this[0]=t}};var K=class extends m{constructor(t){super(),this[0]=t}};var it=class extends m{constructor(t){super(),this[0]=t}};var ue=class extends m{constructor(t){super(),this[0]=t}};var Et=class extends m{constructor(t){super(),this[0]=t}};var hn=class extends m{constructor(t){super(),this[0]=t}};var Tl=class extends m{constructor(t){super(),this[0]=t}};var Pl=class extends m{constructor(t){super(),this[0]=t}};var vl=class extends m{constructor(t){super(),this[0]=t}};var _t=class extends m{},_e=new _t;var Xr=class extends m{},we=new Xr;var wc=class extends m{},ke=new wc;var Wn=class extends m{},ge=new Wn;var Ss=class extends m{},be=new Ss;var kc=class extends m{},ye=new kc;var gc=class extends m{},Te=new gc;var Kn=class extends m{},Pe=new Kn;var bc=class extends m{},ve=new bc;var Jt=class extends m{},Ee=new Jt;var Mo=class extends m{},Ce=new Mo;var yc=class extends m{},Se=new yc;var Ro=class extends m{},Ie=new Ro;var Is=class extends m{},Fe=new Is;var Tc=class extends m{},Le=new Tc;var Bo=class extends m{},Ae=new Bo;var Xn=class extends m{},Me=new Xn;var Oo=class extends m{},Re=new Oo;var Pc=class extends m{},Be=new Pc;var Jn=class extends m{},Oe=new Jn;var kr=class extends m{},je=new kr;var Fs=class extends m{},De=new Fs;var Ye=class extends m{},Sl=new Ye;var q=class extends m{},wt=new q;var Yt=class extends m{},Il=new Yt;var ft=class extends m{},Sc=new ft;var Cn=class extends m{},b1=new Cn;var ut=class extends m{},Qt=new ut;var jo=class extends m{},y1=new jo;var mn=class extends m{},vp=new mn;var Do=class extends m{},T1=new Do;var Ls=class extends m{},P1=new Ls;var No=class extends m{},v1=new No;var qo=class extends m{},E1=new qo;var Uo=class extends m{},C1=new Uo;var Vo=class extends m{},S1=new Vo;var Go=class extends m{},I1=new Go;var Ho=class extends m{},F1=new Ho;var zo=class extends m{},L1=new zo;var Wo=class extends m{},A1=new Wo;var Ko=class extends m{},M1=new Ko;var Xo=class extends m{},R1=new Xo;var Jo=class extends m{},B1=new Jo;var Yo=class extends m{},O1=new Yo;var Zo=class extends m{},j1=new Zo;var Sn=class extends m{},D1=new Sn;var As=class extends m{},N1=new As;var Zt=class extends m{},q1=new Zt;var D=class extends m{},ai=new D;var In=class extends m{},U1=new In;var Yn=class extends m{},V1=new Yn;var Qo=class extends m{},Fl=new Qo;var ei=class extends m{},G1=new ei;var ti=class extends m{},H1=new ti;var vc=class extends m{},Ic=new vc;var ni=class extends m{},z1=new ni;var ri=class extends m{},W1=new ri;var Fn=class extends m{},K1=new Fn;var Ec=class extends m{},gr=new Ec;var si=class extends m{},X1=new si;var Zn=class extends m{},en=new Zn;var pt=class extends m{},Ep=new pt;var oi=class extends m{},Fc=new oi;var ii=class extends m{},Ll=new ii;var li=class extends m{},J1=new li;var El=class extends m{constructor(t){super(),this[0]=t}};var Cl=class extends m{constructor(t){super(),this[0]=t}};var Cc=class extends m{constructor(t){super(),this[0]=t}};function Al(e){return e instanceof B||e instanceof K?e[0]:e instanceof it?"_"+e[0]:e instanceof ue||e instanceof Et?e[0]:e instanceof hn?'"'+e[0]+'"':e instanceof Tl?"///"+e[0]:e instanceof Pl?"//"+e[0]:e instanceof vl?"////"+e[0]:e instanceof _t?"as":e instanceof Xr?"assert":e instanceof wc?"auto":e instanceof Wn?"case":e instanceof Ss?"const":e instanceof kc?"delegate":e instanceof gc?"derive":e instanceof Kn?"echo":e instanceof bc?"else":e instanceof Jt?"fn":e instanceof Mo?"if":e instanceof yc?"implement":e instanceof Ro?"import":e instanceof Is?"let":e instanceof Tc?"macro":e instanceof Bo?"opaque":e instanceof Xn?"panic":e instanceof Oo?"pub":e instanceof Pc?"test":e instanceof Jn?"todo":e instanceof kr?"type":e instanceof Fs?"use":e instanceof Ye?"(":e instanceof q?")":e instanceof Yt?"{":e instanceof ft?"}":e instanceof Cn?"[":e instanceof ut?"]":e instanceof jo?"+":e instanceof mn?"-":e instanceof Do?"*":e instanceof Ls?"/":e instanceof No?"<":e instanceof qo?">":e instanceof Uo?"<=":e instanceof Vo?">=":e instanceof Go?"%":e instanceof Ho?"+.":e instanceof zo?"-.":e instanceof Wo?"*.":e instanceof Ko?"/.":e instanceof Xo?"<.":e instanceof Jo?">.":e instanceof Yo?"<=.":e instanceof Zo?">=.":e instanceof Sn?"<>":e instanceof As?"@":e instanceof Zt?":":e instanceof D?",":e instanceof In?"#":e instanceof Yn?"!":e instanceof Qo?"=":e instanceof ei?"==":e instanceof ti?"!=":e instanceof vc?"|":e instanceof ni?"||":e instanceof ri?"&&":e instanceof Fn?"<<":e instanceof Ec?">>":e instanceof si?"|>":e instanceof Zn?".":e instanceof pt?"..":e instanceof oi?"<-":e instanceof ii?"->":e instanceof li?"":e instanceof El?e[0]:e instanceof Cl?'"'+e[0]:e[0]}var O=class extends m{constructor(t,n,s,r,o,i,f){super(),this.original_source=t,this.source=n,this.byte_offset=s,this.preserve_whitespace=r,this.preserve_comments=o,this.mode=i,this.newlines=f}},Ac=class extends m{},ci=new Ac,Mc=class extends m{},br=new Mc,Rc=class extends m{},Qn=new Rc,Bc=class extends m{},Ve=new Bc,Ip=class extends m{},er=new Ip,R=class extends m{constructor(t){super(),this.byte_offset=t}};var Oc=class extends m{},eg=new Oc,jc=class extends m{},tg=new jc,Fp=class extends m{},ng=new Fp,Ms=class extends m{},$t=new Ms,Rs=class extends m{},rg=new Rs,Lp=class extends m{},Z1=new Lp;function tx(e){return new O(e,e,0,!0,!0,ci,k1(h(`\r
`,h(`
`,w))))}function nx(e){return new O(e.original_source,e.source,e.byte_offset,!1,e.preserve_comments,e.mode,e.newlines)}function rx(e){return new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,!1,e.mode,e.newlines)}function sx(e){let t=e[0],n=e[1];return[t,new k(n)]}function g(e,t,n){return new O(e.original_source,t,e.byte_offset+n,e.preserve_whitespace,e.preserve_comments,e.mode,e.newlines)}function ox(e,t,n,s){return[g(t,n,s),e]}function U(e,t,n,s){let r=[t,new R(e.byte_offset)],o=ox(r,e,n,s);return sx(o)}function Ge(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===97){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===98){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===99){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===100){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===101){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===102){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===103){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===104){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===105){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===106){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===107){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===108){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===109){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===110){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===111){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===112){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===113){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===114){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===115){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===116){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===117){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===118){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===119){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===120){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===121){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===122){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===65){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===66){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===67){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===68){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===69){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===70){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===71){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===72){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===73){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===74){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===75){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===76){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===77){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===78){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===79){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===80){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===81){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===82){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===83){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===84){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===85){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===86){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===87){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===88){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===89){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===90){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===48){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===49){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===50){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===51){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===52){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===53){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===54){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===55){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===56){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===57){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else{let a=xt(s.original_source,r,o);return[s,a]}}}function Ne(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===97){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===98){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===99){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===100){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===101){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===102){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===103){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===104){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===105){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===106){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===107){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===108){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===109){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===110){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===111){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===112){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===113){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===114){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===115){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===116){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===117){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===118){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===119){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===120){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===121){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===122){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===48){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===49){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===50){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===51){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===52){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===53){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===54){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===55){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===56){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===57){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===95){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else{let a=xt(s.original_source,r,o);return[s,a]}}}function sg(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===34){let a=i.slice(1),u=xt(s.original_source,r+1,o),l=[new hn(u),new R(r)],c=ox(l,s,a,1);return sx(c)}else if(f===92){let a=i.slice(1),u=da(a);if(u instanceof $){let l=u[0][0],c=u[0][1],p=1+yl(l);e=g(s,c,p),t=r,n=o+p}else e=g(s,a,1),t=r,n=o+1}else if(i===""){let a=xt(s.original_source,r+1,o);return[s,new k([new Cl(a),new R(r)])]}else e=g(s,g1(s.source),1),t=r,n=o+1}}function dt(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s,a=r.source,u=a.charCodeAt(0);if(u===95){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===48){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===49){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===50){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===51){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===52){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===53){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===54){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===55){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===56){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===57){let l=a.slice(1);e=g(r,l,1),t=o,n=i,s=f+1}else if(u===46)if(o instanceof Ms){let l=a.slice(1);e=g(r,l,1),t=rg,n=i,s=f+1}else if(o instanceof Rs){let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new Et(c),new R(i)])]}else{let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new Et(c),new R(i)])]}else if(a.startsWith("e-"))if(o instanceof Ms){let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new ue(c),new R(i)])]}else if(o instanceof Rs){let l=a.slice(2);e=g(r,l,2),t=Z1,n=i,s=f+2}else{let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new Et(c),new R(i)])]}else if(u===101)if(o instanceof Ms){let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new ue(c),new R(i)])]}else if(o instanceof Rs){let l=a.slice(1);e=g(r,l,1),t=Z1,n=i,s=f+1}else{let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new Et(c),new R(i)])]}else if(o instanceof Ms){let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new ue(c),new R(i)])]}else if(o instanceof Rs){let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new Et(c),new R(i)])]}else{let l=new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,br,r.newlines),c=xt(l.original_source,i,f);return[l,new k([new Et(c),new R(i)])]}}}function og(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===95){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===48){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===49){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===50){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===51){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===52){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===53){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===54){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===55){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===56){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===57){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===97){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===65){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===98){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===66){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===99){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===67){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===100){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===68){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===101){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===69){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===102){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===70){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else{let a=xt(s.original_source,r,o);return[s,new k([new ue(a),new R(r)])]}}}function ig(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===95){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===48){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===49){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===50){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===51){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===52){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===53){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===54){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===55){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else{let a=xt(s.original_source,r,o);return[s,new k([new ue(a),new R(r)])]}}}function lg(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===95){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===48){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===49){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else{let a=xt(s.original_source,r,o);return[s,new k([new ue(a),new R(r)])]}}}function Cp(e,t,n){let s=_c(e.newlines,e.source),r=s[0],o=s[1],i=yl(r),f=g(e,o,i),a;t instanceof Oc?a=new Pl(r):t instanceof jc?a=new Tl(r):a=new vl(r);let u=a;return[f,new k([u,new R(n)])]}function Sp(e){let t=_c(e.newlines,e.source),n=t[0],s=t[1],r=yl(n);return[g(e,s,r),S]}function Lc(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===32){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===9){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===10){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===13){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(s.preserve_whitespace){let u=xt(s.original_source,r,o);return[s,new k([new El(u),new R(r)])]}else return[s,S]}}function tr(e,t,n){for(;;){let s=e,r=t,o=n,i=s.source,f=i.charCodeAt(0);if(f===48){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===49){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===50){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===51){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===52){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===53){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===54){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===55){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===56){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else if(f===57){let a=i.slice(1);e=g(s,a,1),t=r,n=o+1}else{let a=xt(s.original_source,r,o);return[s,a]}}}function Q1(e){let t=e.source;if(t.charCodeAt(0)===45){let n=t.slice(1),s=U(e,vp,n,1),r=s[0],o=s[1];return new $([new O(r.original_source,r.source,r.byte_offset,r.preserve_whitespace,r.preserve_comments,ci,r.newlines),o])}else return new y(void 0)}function ex(e){let t=e.source;if(t.startsWith("..")){let n=t.slice(2);return new $(U(e,Ep,n,2))}else if(t.charCodeAt(0)===46){let n=t.slice(1),s=n.charCodeAt(0);if(s===48){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===49){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===50){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===51){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===52){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===53){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===54){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===55){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===56){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else if(s===57){let r=U(e,en,n,1),o=r[0],i=r[1];return new $([new O(o.original_source,o.source,o.byte_offset,o.preserve_whitespace,o.preserve_comments,er,o.newlines),i])}else return new $(U(e,en,n,1))}else return new y(void 0)}function ag(e){let t=e.mode;if(t instanceof Ac){let n=e.source,s=n.charCodeAt(0);if(s===32){let r=n.slice(1),o=g(e,r,1);return Lc(o,e.byte_offset,1)}else if(s===10){let r=n.slice(1),o=g(e,r,1);return Lc(o,e.byte_offset,1)}else if(s===13){let r=n.slice(1),o=g(e,r,1);return Lc(o,e.byte_offset,1)}else if(s===9){let r=n.slice(1),o=g(e,r,1);return Lc(o,e.byte_offset,1)}else if(n.startsWith("////")){let r=n.slice(4);if(e.preserve_comments){let i=g(e,r,4);return Cp(i,ng,e.byte_offset)}else return Sp(e)}else if(n.startsWith("///")){let r=n.slice(3);if(e.preserve_comments){let i=g(e,r,3);return Cp(i,tg,e.byte_offset)}else return Sp(e)}else if(n.startsWith("//")){let r=n.slice(2);if(e.preserve_comments){let i=g(e,r,2);return Cp(i,eg,e.byte_offset)}else return Sp(e)}else if(s===40){let r=n.slice(1);return U(e,Sl,r,1)}else if(s===41){let r=n.slice(1);return U(e,wt,r,1)}else if(s===123){let r=n.slice(1);return U(e,Il,r,1)}else if(s===125){let r=n.slice(1);return U(e,Sc,r,1)}else if(s===91){let r=n.slice(1);return U(e,b1,r,1)}else if(s===93){let r=n.slice(1);return U(e,Qt,r,1)}else if(s===64){let r=n.slice(1);return U(e,N1,r,1)}else if(s===58){let r=n.slice(1);return U(e,q1,r,1)}else if(s===44){let r=n.slice(1);return U(e,ai,r,1)}else if(n.startsWith("..")){let r=n.slice(2);return U(e,Ep,r,2)}else if(s===46){let r=n.slice(1);return U(e,en,r,1)}else if(s===35){let r=n.slice(1);return U(e,U1,r,1)}else if(n.startsWith("!=")){let r=n.slice(2);return U(e,H1,r,2)}else if(s===33){let r=n.slice(1);return U(e,V1,r,1)}else if(n.startsWith("==")){let r=n.slice(2);return U(e,G1,r,2)}else if(s===61){let r=n.slice(1);return U(e,Fl,r,1)}else if(n.startsWith("|>")){let r=n.slice(2);return U(e,X1,r,2)}else if(n.startsWith("||")){let r=n.slice(2);return U(e,z1,r,2)}else if(s===124){let r=n.slice(1);return U(e,Ic,r,1)}else if(n.startsWith("&&")){let r=n.slice(2);return U(e,W1,r,2)}else if(n.startsWith("<<")){let r=n.slice(2);return U(e,K1,r,2)}else if(n.startsWith(">>")){let r=n.slice(2);return U(e,gr,r,2)}else if(n.startsWith("<-")){let r=n.slice(2);return U(e,Fc,r,2)}else if(n.startsWith("->")){let r=n.slice(2);return U(e,Ll,r,2)}else if(n.startsWith("<>")){let r=n.slice(2);return U(e,D1,r,2)}else if(n.startsWith("+.")){let r=n.slice(2);return U(e,F1,r,2)}else if(n.startsWith("-.")){let r=n.slice(2);return U(e,L1,r,2)}else if(n.startsWith("*.")){let r=n.slice(2);return U(e,A1,r,2)}else if(n.startsWith("/.")){let r=n.slice(2);return U(e,M1,r,2)}else if(n.startsWith("<=.")){let r=n.slice(3);return U(e,O1,r,3)}else if(n.startsWith("<.")){let r=n.slice(2);return U(e,R1,r,2)}else if(n.startsWith(">=.")){let r=n.slice(3);return U(e,j1,r,3)}else if(n.startsWith(">.")){let r=n.slice(2);return U(e,B1,r,2)}else if(n.startsWith("0b")){let r=n.slice(2),o=g(e,r,2);return lg(o,e.byte_offset,2)}else if(n.startsWith("0o")){let r=n.slice(2),o=g(e,r,2);return ig(o,e.byte_offset,2)}else if(n.startsWith("0x")){let r=n.slice(2),o=g(e,r,2);return og(o,e.byte_offset,2)}else if(s===48){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===49){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===50){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===51){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===52){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===53){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===54){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===55){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===56){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(s===57){let r=n.slice(1),o=g(e,r,1);return dt(o,$t,e.byte_offset,1)}else if(n.startsWith("-0")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-1")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-2")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-3")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-4")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-5")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-6")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-7")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-8")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(n.startsWith("-9")){let r=n.slice(2),o=g(e,r,2);return dt(o,$t,e.byte_offset,2)}else if(s===43){let r=n.slice(1);return U(e,y1,r,1)}else if(s===45){let r=n.slice(1);return U(e,vp,r,1)}else if(s===42){let r=n.slice(1);return U(e,T1,r,1)}else if(s===47){let r=n.slice(1);return U(e,P1,r,1)}else if(n.startsWith("<=")){let r=n.slice(2);return U(e,C1,r,2)}else if(s===60){let r=n.slice(1);return U(e,v1,r,1)}else if(n.startsWith(">=")){let r=n.slice(2);return U(e,S1,r,2)}else if(s===62){let r=n.slice(1);return U(e,E1,r,1)}else if(s===37){let r=n.slice(1);return U(e,I1,r,1)}else if(s===34){let r=n.slice(1),o=g(e,r,1);return sg(o,e.byte_offset,0)}else if(s===95){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o+1,0);let a=i,u=a[0],l=a[1];return[u,new k([new it(l),new R(o)])]}else if(s===97){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===98){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===99){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===100){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===101){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===102){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===103){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===104){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===105){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===106){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===107){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===108){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===109){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===110){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===111){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===112){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===113){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===114){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===115){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===116){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===117){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===118){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===119){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===120){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===121){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===122){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ne(f,o,1);let a=i,u=a[0],l=a[1],c;l==="as"?c=_e:l==="assert"?c=we:l==="auto"?c=ke:l==="case"?c=ge:l==="const"?c=be:l==="delegate"?c=ye:l==="derive"?c=Te:l==="echo"?c=Pe:l==="else"?c=ve:l==="fn"?c=Ee:l==="if"?c=Ce:l==="implement"?c=Se:l==="import"?c=Ie:l==="let"?c=Fe:l==="macro"?c=Le:l==="opaque"?c=Ae:l==="panic"?c=Me:l==="pub"?c=Re:l==="test"?c=Be:l==="todo"?c=Oe:l==="type"?c=je:l==="use"?c=De:c=new B(l);let p=c;return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Ve,u.newlines),new k([p,new R(o)])]}else if(s===65){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===66){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===67){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===68){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===69){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===70){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===71){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===72){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===73){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===74){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===75){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===76){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===77){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===78){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===79){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===80){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===81){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===82){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===83){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===84){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===85){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===86){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===87){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===88){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===89){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else if(s===90){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=Ge(f,o,1);let a=i,u=a[0],l=a[1];return[u,new k([new K(l),new R(o)])]}else{let r=da(e.source);if(r instanceof $){let o=r[0][0],i=r[0][1];return U(e,new Cc(o),i,yl(o))}else return[e,new k([J1,new R(e.byte_offset)])]}}else if(t instanceof Mc){let n=Q1(e);return n instanceof $?n[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),S]}else if(t instanceof Rc){let n=ex(e);return n instanceof $?n[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),S]}else if(t instanceof Bc){let n=ex(e);if(n instanceof $)return n[0];{let s=Q1(e);return s instanceof $?s[0]:[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),S]}}else{let n=e.source,s=n.charCodeAt(0);if(s===48){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===49){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===50){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===51){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===52){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===53){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===54){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===55){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===56){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else if(s===57){let r=n.slice(1),o=e.byte_offset,i,f=g(e,r,1);i=tr(f,o,1);let a=i,u=a[0],l=a[1];return[new O(u.original_source,u.source,u.byte_offset,u.preserve_whitespace,u.preserve_comments,Qn,u.newlines),new k([new ue(l),new R(o)])]}else return[new O(e.original_source,e.source,e.byte_offset,e.preserve_whitespace,e.preserve_comments,ci,e.newlines),S]}}function cg(e,t){for(;;){let n=e,s=t,r=ag(n),o=r[1];if(o instanceof k){if(o[0][0]instanceof li)return s;{let i=r[0],f=o[0];e=i,t=h(f,s)}}else e=r[0],t=s}}function ix(e){let t=cg(e,w);return E(t)}var Ml="src\\glance.gleam",Hs=class extends m{constructor(t,n){super(),this.attributes=t,this.definition=n}};var Ol=class extends m{constructor(t,n){super(),this.name=t,this.arguments=n}};var Zr=class extends m{constructor(t,n,s,r,o){super(),this.imports=t,this.custom_types=n,this.type_aliases=s,this.constants=r,this.functions=o}};var Jp=class extends m{constructor(t,n,s,r,o,i){super(),this.location=t,this.name=n,this.publicity=s,this.parameters=r,this.return=o,this.body=i}};var C=class extends m{constructor(t,n){super(),this.start=t,this.end=n}};var zs=class extends m{constructor(t,n,s){super(),this.location=t,this.patterns=n,this.function=s}};var mi=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.kind=n,this.pattern=s,this.annotation=r,this.value=o}};var Us=class extends m{constructor(t,n,s){super(),this.location=t,this.expression=n,this.message=s}};var Vs=class extends m{constructor(t){super(),this[0]=t}};var xi=class extends m{},lx=new xi;var qc=class extends m{constructor(t){super(),this.message=t}};var Yp=class extends m{constructor(t,n){super(),this.pattern=t,this.annotation=n}};var Dl=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Zp=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var tn=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Ws=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Cr=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Qp=class extends m{constructor(t,n){super(),this.location=t,this.elements=n}};var Nl=class extends m{constructor(t,n,s){super(),this.location=t,this.elements=n,this.tail=s}};var e$=class extends m{constructor(t,n,s){super(),this.location=t,this.pattern=n,this.name=s}};var Mn=class extends m{constructor(t,n,s,r){super(),this.location=t,this.prefix=n,this.prefix_name=s,this.rest_name=r}};var t$=class extends m{constructor(t,n){super(),this.location=t,this.segments=n}};var Gs=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.module=n,this.constructor$=s,this.arguments=r,this.with_spread=o}};var yr=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Tr=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Bs=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Tt=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Os=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var js=class extends m{constructor(t,n){super(),this.location=t,this.value=n}};var Pr=class extends m{constructor(t,n){super(),this.location=t,this.statements=n}};var Ds=class extends m{constructor(t,n){super(),this.location=t,this.message=n}};var Ns=class extends m{constructor(t,n){super(),this.location=t,this.message=n}};var $i=class extends m{constructor(t,n){super(),this.location=t,this.elements=n}};var vr=class extends m{constructor(t,n,s){super(),this.location=t,this.elements=n,this.rest=s}};var ql=class extends m{constructor(t,n,s,r){super(),this.location=t,this.arguments=n,this.return_annotation=s,this.body=r}};var Uc=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.module=n,this.constructor$=s,this.record=r,this.fields=o}};var _i=class extends m{constructor(t,n,s){super(),this.location=t,this.container=n,this.label=s}};var $e=class extends m{constructor(t,n,s){super(),this.location=t,this.function=n,this.arguments=s}};var n$=class extends m{constructor(t,n,s){super(),this.location=t,this.tuple=n,this.index=s}};var _n=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.label=n,this.function=s,this.arguments_before=r,this.arguments_after=o}};var qs=class extends m{constructor(t,n){super(),this.location=t,this.segments=n}};var Ul=class extends m{constructor(t,n,s){super(),this.location=t,this.subjects=n,this.clauses=s}};var wi=class extends m{constructor(t,n,s,r){super(),this.location=t,this.name=n,this.left=s,this.right=r}};var Ct=class extends m{constructor(t,n,s){super(),this.location=t,this.expression=n,this.message=s}};var r$=class extends m{constructor(t,n,s){super(),this.patterns=t,this.guard=n,this.body=s}};var s$=class extends m{},fi=new s$;var o$=class extends m{},Ap=new o$;var i$=class extends m{},Mp=new i$;var l$=class extends m{},ui=new l$;var a$=class extends m{},Rp=new a$;var c$=class extends m{},Bp=new c$;var f$=class extends m{},Op=new f$;var u$=class extends m{},jp=new u$;var p$=class extends m{},Dp=new p$;var $$=class extends m{},Np=new $$;var d$=class extends m{},qp=new d$;var h$=class extends m{},Up=new h$;var m$=class extends m{},Vp=new m$;var x$=class extends m{},Gp=new x$;var _$=class extends m{},Hp=new _$;var w$=class extends m{constructor(t){super(),this[0]=t}};var k$=class extends m{constructor(t){super(),this[0]=t}};var g$=class extends m{constructor(t){super(),this[0]=t}};var ki=class extends m{},ug=new ki;var gi=class extends m{},pg=new gi;var bi=class extends m{},$g=new bi;var yi=class extends m{},dg=new yi;var Ti=class extends m{},hg=new Ti;var Pi=class extends m{},mg=new Pi;var Vc=class extends m{},xg=new Vc;var Gc=class extends m{},_g=new Gc;var vi=class extends m{},wg=new vi;var Ei=class extends m{},kg=new Ei;var Hc=class extends m{},gg=new Hc;var zc=class extends m{},bg=new zc;var Ks=class extends m{},yg=new Ks;var Ci=class extends m{},Tg=new Ci;var Wc=class extends m{},Pg=new Wc;var Si=class extends m{},vg=new Si;var Kc=class extends m{},Eg=new Kc;var Ii=class extends m{},Cg=new Ii;var Xc=class extends m{},Sg=new Xc;var Fi=class extends m{},Ig=new Fi;var Jc=class extends m{},Fg=new Jc;var Li=class extends m{},Lg=new Li;var b$=class extends m{},Ag=new b$;var y$=class extends m{constructor(t,n){super(),this.name=t,this.type_=n}};var T$=class extends m{constructor(t,n,s){super(),this.label=t,this.name=n,this.type_=s}};var At=class extends m{constructor(t){super(),this[0]=t}};var wn=class extends m{constructor(t){super(),this[0]=t}};var P$=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.module=n,this.alias=s,this.unqualified_types=r,this.unqualified_values=o}};var v$=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.name=n,this.publicity=s,this.annotation=r,this.value=o}};var He=class extends m{constructor(t,n){super(),this.name=t,this.alias=n}};var E$=class extends m{},Dc=new E$;var C$=class extends m{},zp=new C$;var S$=class extends m{constructor(t,n,s,r,o){super(),this.location=t,this.name=n,this.publicity=s,this.parameters=r,this.aliased=o}};var Qr=class extends m{constructor(t,n,s,r,o,i){super(),this.location=t,this.name=n,this.publicity=s,this.opaque_=r,this.parameters=o,this.variants=i}};var I$=class extends m{constructor(t,n,s){super(),this.name=t,this.fields=n,this.attributes=s}};var di=class extends m{constructor(t,n){super(),this.label=t,this.item=n}};var F$=class extends m{constructor(t,n){super(),this.item=t,this.label=n}};var jl=class extends m{constructor(t){super(),this.item=t}};var Xs=class extends m{constructor(t,n,s){super(),this.label=t,this.label_location=n,this.item=s}};var Js=class extends m{constructor(t,n){super(),this.label=t,this.location=n}};var Yr=class extends m{constructor(t){super(),this.item=t}};var L$=class extends m{constructor(t,n,s,r){super(),this.location=t,this.name=n,this.module=s,this.parameters=r}};var A$=class extends m{constructor(t,n){super(),this.location=t,this.elements=n}};var M$=class extends m{constructor(t,n,s){super(),this.location=t,this.parameters=n,this.return=s}};var hi=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Yc=class extends m{constructor(t,n){super(),this.location=t,this.name=n}};var Vl=class extends m{},H=new Vl;var A=class extends m{constructor(t,n){super(),this.token=t,this.position=n}};var yt=class extends m{constructor(t,n,s,r){super(),this.types=t,this.values=n,this.end=s,this.remaining_tokens=r}},Lt=class extends m{constructor(t,n,s,r){super(),this.fields=t,this.spread=n,this.end=s,this.remaining_tokens=r}},Jr=class extends m{},xn=new Jr,R$=class extends m{},Mg=new R$,qe=class extends m{constructor(t,n,s,r){super(),this.values=t,this.spread=n,this.remaining_tokens=s,this.end=r}};function ax(e){return e instanceof ki?2:e instanceof gi?1:e instanceof bi||e instanceof yi?3:e instanceof Ti||e instanceof Pi||e instanceof Vc||e instanceof Gc||e instanceof vi||e instanceof Ei||e instanceof Hc||e instanceof zc?4:e instanceof Ks?6:e instanceof Ci||e instanceof Wc||e instanceof Si||e instanceof Kc?7:e instanceof Ii||e instanceof Xc||e instanceof Fi||e instanceof Jc||e instanceof Li?8:5}function We(e){if(e instanceof _)return new y(H);{let t=e.head[0],n=e.head[1];return new y(new A(t,n))}}function ht(e,t,n){if(t instanceof _)return new y(H);{let s=t.head[0];if(mt(s,e)){let r=t.tail,o=t.head[1];return n(o,r)}else{let r=t.head[0],o=t.head[1];return new y(new A(r,o))}}}function zt(e,t,n,s){if(s instanceof _)return P(e(s),r=>{let o=r[0],i=r[1],f=h(o,n);if(i instanceof _)return new y(H);{let a=i.head[0];if(a instanceof ut){let u=i.tail,l=i.head[1].byte_offset;return new $(new qe(E(f),S,u,l+1))}else if(a instanceof D){let u=i.tail;if(u instanceof _)return zt(e,t,f,u);{let l=u.head[0];if(l instanceof ut){let c=u.tail,p=u.head[1].byte_offset;return new $(new qe(E(f),S,c,p+1))}else if(l instanceof pt){let c=u.tail;if(c instanceof _)return P(e(c),d=>{let x=d[0],b=d[1];return ht(Qt,b,(T,v)=>{let I=T.byte_offset;return new $(new qe(E(f),new k(x),v,I+1))})});if(c.head[0]instanceof ut){let p=u.head[1].byte_offset,d=c.head,x=c.tail,b=c.head[1].byte_offset;if(t instanceof k){let T=t[0],v=T(new C(p,p+1)),I=new qe(E(f),new k(v),x,b+1);return new $(I)}else return We(h(d,x))}else return P(e(c),d=>{let x=d[0],b=d[1];return ht(Qt,b,(T,v)=>{let I=T.byte_offset;return new $(new qe(E(f),new k(x),v,I+1))})})}else return zt(e,t,f,u)}}else{let u=a,l=i.head[1];return new y(new A(u,l))}}});{let r=s.head[0];if(r instanceof ut){let o=s.tail,i=s.head[1].byte_offset;return new $(new qe(E(n),S,o,i+1))}else if(r instanceof D){let o=s.tail;if(o instanceof _)return P(e(s),i=>{let f=i[0],a=i[1],u=h(f,n);if(a instanceof _)return new y(H);{let l=a.head[0];if(l instanceof ut){let c=a.tail,p=a.head[1].byte_offset;return new $(new qe(E(u),S,c,p+1))}else if(l instanceof D){let c=a.tail;if(c instanceof _)return zt(e,t,u,c);{let p=c.head[0];if(p instanceof ut){let d=c.tail,x=c.head[1].byte_offset;return new $(new qe(E(u),S,d,x+1))}else if(p instanceof pt){let d=c.tail;if(d instanceof _)return P(e(d),b=>{let T=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new k(T),F,L+1))})});if(d.head[0]instanceof ut){let x=c.head[1].byte_offset,b=d.head,T=d.tail,v=d.head[1].byte_offset;if(t instanceof k){let I=t[0],F=I(new C(x,x+1)),L=new qe(E(u),new k(F),T,v+1);return new $(L)}else return We(h(b,T))}else return P(e(d),b=>{let T=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new k(T),F,L+1))})})}else return zt(e,t,u,c)}}else{let c=l,p=a.head[1];return new y(new A(c,p))}}});if(o.head[0]instanceof ut&&!(n instanceof _)){let i=o.tail,f=o.head[1].byte_offset;return new $(new qe(E(n),S,i,f+1))}else return P(e(s),i=>{let f=i[0],a=i[1],u=h(f,n);if(a instanceof _)return new y(H);{let l=a.head[0];if(l instanceof ut){let c=a.tail,p=a.head[1].byte_offset;return new $(new qe(E(u),S,c,p+1))}else if(l instanceof D){let c=a.tail;if(c instanceof _)return zt(e,t,u,c);{let p=c.head[0];if(p instanceof ut){let d=c.tail,x=c.head[1].byte_offset;return new $(new qe(E(u),S,d,x+1))}else if(p instanceof pt){let d=c.tail;if(d instanceof _)return P(e(d),b=>{let T=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new k(T),F,L+1))})});if(d.head[0]instanceof ut){let x=c.head[1].byte_offset,b=d.head,T=d.tail,v=d.head[1].byte_offset;if(t instanceof k){let I=t[0],F=I(new C(x,x+1)),L=new qe(E(u),new k(F),T,v+1);return new $(L)}else return We(h(b,T))}else return P(e(d),b=>{let T=b[0],v=b[1];return ht(Qt,v,(I,F)=>{let L=I.byte_offset;return new $(new qe(E(u),new k(T),F,L+1))})})}else return zt(e,t,u,c)}}else{let c=l,p=a.head[1];return new y(new A(c,p))}}})}else if(r instanceof pt){let o=s.tail;if(o instanceof _)return P(e(o),f=>{let a=f[0],u=f[1];return ht(Qt,u,(l,c)=>{let p=l.byte_offset;return new $(new qe(E(n),new k(a),c,p+1))})});if(o.head[0]instanceof ut){let i=s.head[1].byte_offset,f=o.head,a=o.tail,u=o.head[1].byte_offset;if(t instanceof k){let l=t[0],c=l(new C(i,i+1)),p=new qe(E(n),new k(c),a,u+1);return new $(p)}else return We(h(f,a))}else return P(e(o),f=>{let a=f[0],u=f[1];return ht(Qt,u,(l,c)=>{let p=l.byte_offset;return new $(new qe(E(n),new k(a),c,p+1))})})}else return P(e(s),o=>{let i=o[0],f=o[1],a=h(i,n);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof ut){let l=f.tail,c=f.head[1].byte_offset;return new $(new qe(E(a),S,l,c+1))}else if(u instanceof D){let l=f.tail;if(l instanceof _)return zt(e,t,a,l);{let c=l.head[0];if(c instanceof ut){let p=l.tail,d=l.head[1].byte_offset;return new $(new qe(E(a),S,p,d+1))}else if(c instanceof pt){let p=l.tail;if(p instanceof _)return P(e(p),x=>{let b=x[0],T=x[1];return ht(Qt,T,(v,I)=>{let F=v.byte_offset;return new $(new qe(E(a),new k(b),I,F+1))})});if(p.head[0]instanceof ut){let d=l.head[1].byte_offset,x=p.head,b=p.tail,T=p.head[1].byte_offset;if(t instanceof k){let v=t[0],I=v(new C(d,d+1)),F=new qe(E(a),new k(I),b,T+1);return new $(F)}else return We(h(x,b))}else return P(e(p),x=>{let b=x[0],T=x[1];return ht(Qt,T,(v,I)=>{let F=v.byte_offset;return new $(new qe(E(a),new k(b),I,F+1))})})}else return zt(e,t,a,l)}}else{let l=u,c=f.head[1];return new y(new A(l,c))}}})}}function Rg(e,t,n){return new Zr(e.imports,e.custom_types,e.type_aliases,e.constants,h(new Hs(E(t),n),e.functions))}function cx(e,t,n){for(;;){let s=e,r=t,o=n;if(s instanceof k)if(r instanceof _){let i=s[0];return[S,h(i,w),o]}else{if(o instanceof _)throw Nt("panic",Ml,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let i=o.tail;if(i instanceof _)throw Nt("panic",Ml,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let f=s[0],a=r.head,u=r.tail,l=o.head,c=i.head,p=i.tail;if(ax(a)>=ax(f)){let x=new C(c.location.start,l.location.end),b=new wi(x,a,c,l),T=h(b,p);e=new k(f),t=u,n=T}else return[S,h(f,h(a,u)),o]}}}else if(r instanceof _){if(o instanceof _)return[S,r,o];if(o.tail instanceof _){let i=o.head;return[new k(i),r,o]}else throw Nt("panic",Ml,"glance",1185,"handle_operator","parser bug, expression not full reduced",{})}else{if(o instanceof _)throw Nt("panic",Ml,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let i=o.tail;if(i instanceof _)throw Nt("panic",Ml,"glance",1185,"handle_operator","parser bug, expression not full reduced",{});{let f=r.head,a=r.tail,u=o.head,l=i.head,c=i.tail,p=h(new wi(new C(l.location.start,u.location.end),f,l,u),c);e=S,t=a,n=p}}}}}function Bg(e){return e instanceof jo?new $(Tg):e instanceof mn?new $(vg):e instanceof Do?new $(Cg):e instanceof Ls?new $(Ig):e instanceof No?new $(hg):e instanceof qo?new $(kg):e instanceof Uo?new $(mg):e instanceof Vo?new $(wg):e instanceof Go?new $(Lg):e instanceof Ho?new $(Pg):e instanceof zo?new $(Eg):e instanceof Wo?new $(Sg):e instanceof Ko?new $(Fg):e instanceof Xo?new $(xg):e instanceof Jo?new $(bg):e instanceof Yo?new $(_g):e instanceof Zo?new $(gg):e instanceof Sn?new $(Ag):e instanceof ei?new $($g):e instanceof ti?new $(dg):e instanceof ni?new $(pg):e instanceof ri?new $(ug):e instanceof si?new $(yg):new y(void 0)}function Og(e){if(e instanceof _)return new y(void 0);{let t=e.tail,n=e.head[0];return W(Bg(n),s=>[s,t])}}function de(e,t){if(e instanceof _)return P(t(e),n=>{let s=n[0],r=n[1];return new $([new Yr(s),r])});{let n=e.tail;if(n instanceof _)return P(t(e),s=>{let r=s[0],o=s[1];return new $([new Yr(r),o])});{let s=e.head[0];if(s instanceof B&&n.head[0]instanceof Zt){let r=e.head[1],o=n.tail,i=n.head[1],f=s[0];if(o instanceof _)return P(t(o),a=>{let u=a[0],l=a[1];return new $([new Xs(f,new C(r.byte_offset,i.byte_offset+1),u),l])});{let a=o.head[0];return a instanceof q?new $([new Js(f,new C(r.byte_offset,i.byte_offset+1)),o]):a instanceof D?new $([new Js(f,new C(r.byte_offset,i.byte_offset+1)),o]):P(t(o),u=>{let l=u[0],c=u[1];return new $([new Xs(f,new C(r.byte_offset,i.byte_offset+1),l),c])})}}else return P(t(e),r=>{let o=r[0],i=r[1];return new $([new Yr(o),i])})}}}function Z(e,t){return e+rn(t)}function se(e,t){return new C(e,e+rn(t))}function at(e,t,n,s){if(t instanceof _)return new y(H);{let r=t.head[0];if(mt(r,s)){let o=t.tail,i=t.head[1].byte_offset;return new $([E(e),Z(i,Al(r)),o])}else return P(n(t),o=>{let i=o[0],f=o[1];if(f instanceof _)return new y(H);{let a=f.head[0];if(a instanceof D){let u=f.tail;return at(h(i,e),u,n,s)}else{let u=a;if(mt(u,s)){let l=f.tail,c=f.head[1].byte_offset,p=Z(c,Al(u));return new $([E(h(i,e)),p,l])}else{let l=a,c=f.head[1];return new y(new A(l,c))}}}})}}function _x(e,t,n){return P((()=>{if(n instanceof _)return new y(H);{let s=n.head[0];if(s instanceof B){let r=n.tail;if(r instanceof _){let o=s[0];if(o==="bytes"){let i=r;return new $([fi,i])}else if(o==="binary"){let i=r;return new $([fi,i])}else if(o==="int"){let i=r;return new $([Ap,i])}else if(o==="float"){let i=r;return new $([Mp,i])}else if(o==="bits"){let i=r;return new $([ui,i])}else if(o==="bit_string"){let i=r;return new $([ui,i])}else if(o==="utf8"){let i=r;return new $([Rp,i])}else if(o==="utf16"){let i=r;return new $([Bp,i])}else if(o==="utf32"){let i=r;return new $([Op,i])}else if(o==="utf8_codepoint"){let i=r;return new $([jp,i])}else if(o==="utf16_codepoint"){let i=r;return new $([Dp,i])}else if(o==="utf32_codepoint"){let i=r;return new $([Np,i])}else if(o==="signed"){let i=r;return new $([qp,i])}else if(o==="unsigned"){let i=r;return new $([Up,i])}else if(o==="big"){let i=r;return new $([Vp,i])}else if(o==="little"){let i=r;return new $([Gp,i])}else if(o==="native"){let i=r;return new $([Hp,i])}else{let i=s,f=n.head[1];return new y(new A(i,f))}}else if(r.head[0]instanceof Ye){let o=s[0];if(o==="size"){let i=r.tail;return P(e(i),f=>{let a=f[0],u=f[1];return ht(wt,u,(l,c)=>new $([new w$(a),c]))})}else if(o==="unit"){let i=r.tail;if(i instanceof _){let f=s,a=n.head[1];return new y(new A(f,a))}else{let f=i.tail;if(f instanceof _){let a=s,u=n.head[1];return new y(new A(a,u))}else{let a=i.head[0];if(a instanceof ue&&f.head[0]instanceof q){let u=n.head[1],l=f.tail,c=a[0],p=bn(c);if(p instanceof $){let d=p[0];return new $([new g$(d),l])}else return new y(new A(new ue(c),u))}else{let u=s,l=n.head[1];return new y(new A(u,l))}}}}else if(o==="bytes"){let i=r;return new $([fi,i])}else if(o==="binary"){let i=r;return new $([fi,i])}else if(o==="int"){let i=r;return new $([Ap,i])}else if(o==="float"){let i=r;return new $([Mp,i])}else if(o==="bits"){let i=r;return new $([ui,i])}else if(o==="bit_string"){let i=r;return new $([ui,i])}else if(o==="utf8"){let i=r;return new $([Rp,i])}else if(o==="utf16"){let i=r;return new $([Bp,i])}else if(o==="utf32"){let i=r;return new $([Op,i])}else if(o==="utf8_codepoint"){let i=r;return new $([jp,i])}else if(o==="utf16_codepoint"){let i=r;return new $([Dp,i])}else if(o==="utf32_codepoint"){let i=r;return new $([Np,i])}else if(o==="signed"){let i=r;return new $([qp,i])}else if(o==="unsigned"){let i=r;return new $([Up,i])}else if(o==="big"){let i=r;return new $([Vp,i])}else if(o==="little"){let i=r;return new $([Gp,i])}else if(o==="native"){let i=r;return new $([Hp,i])}else{let i=s,f=n.head[1];return new y(new A(i,f))}}else{let o=s[0];if(o==="bytes"){let i=r;return new $([fi,i])}else if(o==="binary"){let i=r;return new $([fi,i])}else if(o==="int"){let i=r;return new $([Ap,i])}else if(o==="float"){let i=r;return new $([Mp,i])}else if(o==="bits"){let i=r;return new $([ui,i])}else if(o==="bit_string"){let i=r;return new $([ui,i])}else if(o==="utf8"){let i=r;return new $([Rp,i])}else if(o==="utf16"){let i=r;return new $([Bp,i])}else if(o==="utf32"){let i=r;return new $([Op,i])}else if(o==="utf8_codepoint"){let i=r;return new $([jp,i])}else if(o==="utf16_codepoint"){let i=r;return new $([Dp,i])}else if(o==="utf32_codepoint"){let i=r;return new $([Np,i])}else if(o==="signed"){let i=r;return new $([qp,i])}else if(o==="unsigned"){let i=r;return new $([Up,i])}else if(o==="big"){let i=r;return new $([Vp,i])}else if(o==="little"){let i=r;return new $([Gp,i])}else if(o==="native"){let i=r;return new $([Hp,i])}else{let i=s,f=n.head[1];return new y(new A(i,f))}}}else if(s instanceof ue){let r=n.tail,o=n.head[1],i=s[0],f=bn(i);if(f instanceof $){let a=f[0];return new $([new k$(a),r])}else return new y(new A(new ue(i),o))}else{let r=s,o=n.head[1];return new y(new A(r,o))}}})(),s=>{let r=s[0],o=s[1],i=h(r,t);if(o instanceof _)return new $([E(i),o]);if(o.head[0]instanceof mn){let f=o.tail;return _x(e,i,f)}else return new $([E(i),o])})}function jg(e,t){if(t instanceof _)return new $([w,t]);if(t.head[0]instanceof Zt){let n=t.tail;return _x(e,w,n)}else return new $([w,t])}function pi(e,t){return P(e(t),n=>{let s=n[0],r=n[1],o=jg(e,r);return P(o,i=>{let f=i[0],a=i[1];return new $([[s,f],a])})})}function Gl(e,t,n,s){return P(n(t),r=>{let o=r[0],i=r[1],f=h(o,e);if(i instanceof _)return new $([E(f),i]);{let a=i.head[0];if(mt(a,s)){let u=i.tail;return Gl(f,u,n,s)}else return new $([E(f),i])}})}function Ft(e,t){if(t instanceof _)return P(de(t,Rn),s=>{let r=s[0],o=s[1],i=h(r,e);if(o instanceof _)return new y(H);{let f=o.head[0];if(f instanceof q){let a=o.tail,u=o.head[1].byte_offset;return new $(new Lt(i,!1,u+1,a))}else if(f instanceof D){let a=o.tail;if(a instanceof _)return Ft(i,a);{let u=a.tail;if(u instanceof _)return Ft(i,a);if(a.head[0]instanceof pt&&u.head[0]instanceof q){let l=u.tail,c=u.head[1].byte_offset;return new $(new Lt(i,!0,c+1,l))}else return Ft(i,a)}}else{let a=f,u=o.head[1];return new y(new A(a,u))}}});{let n=t.head[0];if(n instanceof q){let s=t.tail,r=t.head[1].byte_offset;return new $(new Lt(e,!1,r+1,s))}else if(n instanceof pt){let s=t.tail;if(s instanceof _)return P(de(t,Rn),o=>{let i=o[0],f=o[1],a=h(i,e);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let l=f.tail,c=f.head[1].byte_offset;return new $(new Lt(a,!1,c+1,l))}else if(u instanceof D){let l=f.tail;if(l instanceof _)return Ft(a,l);{let c=l.tail;if(c instanceof _)return Ft(a,l);if(l.head[0]instanceof pt&&c.head[0]instanceof q){let p=c.tail,d=c.head[1].byte_offset;return new $(new Lt(a,!0,d+1,p))}else return Ft(a,l)}}else{let l=u,c=f.head[1];return new y(new A(l,c))}}});{let r=s.tail;if(r instanceof _)if(s.head[0]instanceof q){let o=r,i=s.head[1].byte_offset;return new $(new Lt(e,!0,i+1,o))}else return P(de(t,Rn),i=>{let f=i[0],a=i[1],u=h(f,e);if(a instanceof _)return new y(H);{let l=a.head[0];if(l instanceof q){let c=a.tail,p=a.head[1].byte_offset;return new $(new Lt(u,!1,p+1,c))}else if(l instanceof D){let c=a.tail;if(c instanceof _)return Ft(u,c);{let p=c.tail;if(p instanceof _)return Ft(u,c);if(c.head[0]instanceof pt&&p.head[0]instanceof q){let d=p.tail,x=p.head[1].byte_offset;return new $(new Lt(u,!0,x+1,d))}else return Ft(u,c)}}else{let c=l,p=a.head[1];return new y(new A(c,p))}}});else{let o=s.head[0];if(o instanceof q){let i=r,f=s.head[1].byte_offset;return new $(new Lt(e,!0,f+1,i))}else if(o instanceof D&&r.head[0]instanceof q){let i=r.tail,f=r.head[1].byte_offset;return new $(new Lt(e,!0,f+1,i))}else return P(de(t,Rn),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset;return new $(new Lt(l,!1,d+1,p))}else if(c instanceof D){let p=u.tail;if(p instanceof _)return Ft(l,p);{let d=p.tail;if(d instanceof _)return Ft(l,p);if(p.head[0]instanceof pt&&d.head[0]instanceof q){let x=d.tail,b=d.head[1].byte_offset;return new $(new Lt(l,!0,b+1,x))}else return Ft(l,p)}}else{let p=c,d=u.head[1];return new y(new A(p,d))}}})}}}else return P(de(t,Rn),r=>{let o=r[0],i=r[1],f=h(o,e);if(i instanceof _)return new y(H);{let a=i.head[0];if(a instanceof q){let u=i.tail,l=i.head[1].byte_offset;return new $(new Lt(f,!1,l+1,u))}else if(a instanceof D){let u=i.tail;if(u instanceof _)return Ft(f,u);{let l=u.tail;if(l instanceof _)return Ft(f,u);if(u.head[0]instanceof pt&&l.head[0]instanceof q){let c=l.tail,p=l.head[1].byte_offset;return new $(new Lt(f,!0,p+1,c))}else return Ft(f,u)}}else{let u=a,l=i.head[1];return new y(new A(u,l))}}})}}function fx(e,t,n,s,r){if(n instanceof _){let o=new C(s,Z(r,t)),i=new Gs(o,e,t,w,!1);return new $([i,n])}else if(n.head[0]instanceof Ye){let o=n.tail,i=Ft(w,o);return P(i,f=>{let a=f.fields,u=f.spread,l=f.end,c=f.remaining_tokens,p=E(a),d=new Gs(new C(s,l),e,t,p,u);return new $([d,c])})}else{let o=new C(s,Z(r,t)),i=new Gs(o,e,t,w,!1);return new $([i,n])}}function Rn(e){return P((()=>{if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail;if(n instanceof _){let s=n,r=e.head[1].byte_offset,o=t[0];return new $([new Cr(se(r,o),o),s])}else{let s=n.tail;if(s instanceof _){let r=n,o=e.head[1].byte_offset,i=t[0];return new $([new Cr(se(o,i),i),r])}else if(n.head[0]instanceof Zn){let r=s.head[0];if(r instanceof K){let o=e.head[1].byte_offset,i=t[0],f=s.tail,a=s.head[1].byte_offset,u=r[0];return fx(new k(i),u,f,o,a)}else{let o=n,i=e.head[1].byte_offset,f=t[0];return new $([new Cr(se(i,f),f),o])}}else{let r=n,o=e.head[1].byte_offset,i=t[0];return new $([new Cr(se(o,i),i),r])}}}else if(t instanceof K){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return fx(S,r,n,s,s)}else if(t instanceof it){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return new $([new Ws(new C(s,Z(s,r)+1),r),n])}else if(t instanceof ue){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return new $([new Dl(se(s,r),r),n])}else if(t instanceof Et){let n=e.tail,s=e.head[1].byte_offset,r=t[0];return new $([new Zp(se(s,r),r),n])}else if(t instanceof hn){let n=e.tail;if(n instanceof _){let s=n,r=e.head[1].byte_offset,o=t[0];return new $([new tn(new C(r,Z(r,o)+2),o),s])}else{let s=n.tail;if(s instanceof _){let r=n,o=e.head[1].byte_offset,i=t[0];return new $([new tn(new C(o,Z(o,i)+2),i),r])}else{let r=s.tail;if(r instanceof _)if(n.head[0]instanceof Sn){let o=s.head[0];if(o instanceof B){let i=e.head[1].byte_offset,f=t[0],a=r,u=s.head[1].byte_offset,l=o[0],c=new C(i,Z(u,l)),p=new Mn(c,f,S,new At(l));return new $([p,a])}else if(o instanceof it){let i=e.head[1].byte_offset,f=t[0],a=r,u=s.head[1].byte_offset,l=o[0],c=new C(i,Z(u,l)+1),p=new Mn(c,f,S,new wn(l));return new $([p,a])}else{let i=n,f=e.head[1].byte_offset,a=t[0];return new $([new tn(new C(f,Z(f,a)+2),a),i])}}else{let o=n,i=e.head[1].byte_offset,f=t[0];return new $([new tn(new C(i,Z(i,f)+2),f),o])}else{let o=r.tail;if(o instanceof _)if(n.head[0]instanceof Sn){let i=s.head[0];if(i instanceof B){let f=e.head[1].byte_offset,a=t[0],u=r,l=s.head[1].byte_offset,c=i[0],p=new C(f,Z(l,c)),d=new Mn(p,a,S,new At(c));return new $([d,u])}else if(i instanceof it){let f=e.head[1].byte_offset,a=t[0],u=r,l=s.head[1].byte_offset,c=i[0],p=new C(f,Z(l,c)+1),d=new Mn(p,a,S,new wn(c));return new $([d,u])}else{let f=n,a=e.head[1].byte_offset,u=t[0];return new $([new tn(new C(a,Z(a,u)+2),u),f])}}else{let i=n,f=e.head[1].byte_offset,a=t[0];return new $([new tn(new C(f,Z(f,a)+2),a),i])}else{let i=n.head[0];if(i instanceof _t){let f=s.head[0];if(f instanceof B&&r.head[0]instanceof Sn){let a=o.head[0];if(a instanceof B){let u=e.head[1].byte_offset,l=t[0],c=o.tail,p=o.head[1].byte_offset,d=f[0],x=a[0],b=new C(u,Z(p,x)),T=new Mn(b,l,new k(new At(d)),new At(x));return new $([T,c])}else if(a instanceof it){let u=e.head[1].byte_offset,l=t[0],c=o.tail,p=o.head[1].byte_offset,d=f[0],x=a[0],b=new C(u,Z(p,x)+1),T=new Mn(b,l,new k(new At(d)),new wn(x));return new $([T,c])}else{let u=n,l=e.head[1].byte_offset,c=t[0];return new $([new tn(new C(l,Z(l,c)+2),c),u])}}else if(f instanceof it&&r.head[0]instanceof Sn){let a=o.head[0];if(a instanceof B){let u=e.head[1].byte_offset,l=t[0],c=o.tail,p=o.head[1].byte_offset,d=f[0],x=a[0],b=new C(u,Z(p,x)),T=new Mn(b,l,new k(new wn(d)),new At(x));return new $([T,c])}else{let u=n,l=e.head[1].byte_offset,c=t[0];return new $([new tn(new C(l,Z(l,c)+2),c),u])}}else{let a=n,u=e.head[1].byte_offset,l=t[0];return new $([new tn(new C(u,Z(u,l)+2),l),a])}}else if(i instanceof Sn){let f=s.head[0];if(f instanceof B){let a=e.head[1].byte_offset,u=t[0],l=r,c=s.head[1].byte_offset,p=f[0],d=new C(a,Z(c,p)),x=new Mn(d,u,S,new At(p));return new $([x,l])}else if(f instanceof it){let a=e.head[1].byte_offset,u=t[0],l=r,c=s.head[1].byte_offset,p=f[0],d=new C(a,Z(c,p)+1),x=new Mn(d,u,S,new wn(p));return new $([x,l])}else{let a=n,u=e.head[1].byte_offset,l=t[0];return new $([new tn(new C(u,Z(u,l)+2),l),a])}}else{let f=n,a=e.head[1].byte_offset,u=t[0];return new $([new tn(new C(a,Z(a,u)+2),u),f])}}}}}}else if(t instanceof Cn){let n=e.tail,s=e.head[1].byte_offset,r=zt(Rn,new k(o=>new Ws(o,"")),w,n);return W(r,o=>{let i=o.values,f=o.spread,a=o.remaining_tokens,u=o.end;return[new Nl(new C(s,u),i,f),a]})}else if(t instanceof In){let n=e.tail;if(n instanceof _){let s=t,r=e.head[1];return new y(new A(s,r))}else if(n.head[0]instanceof Ye){let s=e.head[1].byte_offset,r=n.tail,o=at(w,r,Rn,wt);return P(o,i=>{let f=i[0],a=i[1],u=i[2];return new $([new Qp(new C(s,a),f),u])})}else{let s=t,r=e.head[1];return new y(new A(s,r))}}else if(t instanceof Fn){let n=e.tail,s=e.head[1].byte_offset,o=at(w,n,i=>pi(Rn,i),gr);return P(o,i=>{let f=i[0],a=i[1],u=i[2];return new $([new t$(new C(s,a),f),u])})}else{let n=t,s=e.head[1];return new y(new A(n,s))}}})(),t=>{let n=t[0],s=t[1];if(s instanceof _)return new $([n,s]);{let r=s.tail;if(r instanceof _)return new $([n,s]);if(s.head[0]instanceof _t){let o=r.head[0];if(o instanceof B){let i=r.tail,f=r.head[1].byte_offset,a=o[0],u=new C(n.location.start,Z(f,a)),l=new e$(u,n,a);return new $([l,i])}else return new $([n,s])}else return new $([n,s])}})}function Wp(e,t,n,s,r){return P((()=>{if(n instanceof _){let o=r+rn(e);return new $([w,o,n])}else if(n.head[0]instanceof Ye){let o=n.tail;return at(w,o,Bn,wt)}else{let o=r+rn(e);return new $([w,o,n])}})(),o=>{let i=o[0],f=o[1],a=o[2],u=new L$(new C(s,f),e,t,i);return new $([u,a])})}function Dg(e,t){let n=at(w,t,Bn,wt);return P(n,s=>{let r=s[0],o=s[1],i=s[2],f=new C(e,o);return new $([new A$(f,r),i])})}function Ng(e,t){let n=at(w,t,Bn,wt);return P(n,s=>{let r=s[0],o=s[2];return ht(Ll,o,(i,f)=>P(Bn(f),a=>{let u=a[0],l=a[1],c=new C(e,u.location.end);return new $([new M$(c,r,u),l])}))})}function Bn(e){if(e instanceof _)return new y(H);{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof B){let s=t,r=e.head[1].byte_offset,o=n[0],i=new hi(se(r,o),o);return new $([i,s])}else if(n instanceof K){let s=t,r=e.head[1].byte_offset,o=n[0];return Wp(o,S,s,r,r)}else if(n instanceof it){let s=t,r=e.head[1].byte_offset,o=n[0],i=new Yc(new C(r,Z(r,o)+1),o);return new $([i,s])}else{let s=n,r=e.head[1];return new y(new A(s,r))}}else{let n=e.head[0];if(n instanceof B){let s=t.tail;if(s instanceof _){let r=t,o=e.head[1].byte_offset,i=n[0],f=new hi(se(o,i),i);return new $([f,r])}else if(t.head[0]instanceof Zn){let r=s.head[0];if(r instanceof K){let o=e.head[1].byte_offset,i=n[0],f=s.tail,a=s.head[1].byte_offset,u=r[0];return Wp(u,new k(i),f,o,a)}else{let o=t,i=e.head[1].byte_offset,f=n[0],a=new hi(se(i,f),f);return new $([a,o])}}else{let r=t,o=e.head[1].byte_offset,i=n[0],f=new hi(se(o,i),i);return new $([f,r])}}else if(n instanceof K){let s=t,r=e.head[1].byte_offset,o=n[0];return Wp(o,S,s,r,r)}else if(n instanceof it){let s=t,r=e.head[1].byte_offset,o=n[0],i=new Yc(new C(r,Z(r,o)+1),o);return new $([i,s])}else if(n instanceof Jt&&t.head[0]instanceof Ye){let s=e.head[1].byte_offset,r=t.tail;return Ng(s,r)}else if(n instanceof In&&t.head[0]instanceof Ye){let s=e.head[1].byte_offset,r=t.tail;return Dg(s,r)}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}}function wx(e,t){if(t instanceof _)return new $([S,e,t]);if(t.head[0]instanceof ii){let n=t.tail;return P(Bn(n),s=>{let r=s[0],o=s[1];return new $([new k(r),r.location.end,o])})}else return new $([S,e,t])}function Hl(e){if(e instanceof _)return new $([S,e]);if(e.head[0]instanceof Zt){let t=e.tail;return W(Bn(t),n=>{let s=n[0],r=n[1];return[new k(s),r]})}else return new $([S,e])}function qg(e){return P((()=>{if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,s=t[0];return new $([new At(s),n])}else if(t instanceof it){let n=e.tail,s=t[0];return new $([new wn(s),n])}else{let n=t,s=e.head[1];return new y(new A(n,s))}}})(),t=>{let n=t[0],s=t[1];return P(Hl(s),r=>{let o=r[0],i=r[1];return new $([new y$(n,o),i])})})}function ux(e){return P(Rn(e),t=>{let n=t[0],s=t[1];return P(Hl(s),r=>{let o=r[0],i=r[1];return new $([new Yp(n,o),i])})})}function Ln(e,t,n,s,r){if(r instanceof _)return new y(H);if(r.head[0]instanceof q){let o=r.tail,i=r.head[1].byte_offset,f=new C(t.location.start,i+1),a=new _n(f,e,t,n,E(s));return ce(a,o)}else return P(de(r,j),o=>{let i=o[0],f=o[1],a=h(i,s);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let l=f.tail,c=f.head[1].byte_offset,p=new C(t.location.start,c+1),d=new _n(p,e,t,n,E(a));return ce(d,l)}else if(u instanceof D){let l=f.tail;return Ln(e,t,n,a,l)}else{let l=u,c=f.head[1];return new y(new A(l,c))}}})}function ze(e,t,n){if(n instanceof _)return new y(H);{let s=n.head[0];if(s instanceof B){let r=n.tail;if(r instanceof _)return P(de(n,j),o=>{let i=o[0],f=o[1],a=h(i,e);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let l=f.tail,c=f.head[1].byte_offset,p=new C(t.location.start,c+1),d=new $e(p,t,E(a));return ce(d,l)}else if(u instanceof D){let l=f.tail;return ze(a,t,l)}else{let l=u,c=f.head[1];return new y(new A(l,c))}}});{let o=r.tail;if(o instanceof _)return P(de(n,j),i=>{let f=i[0],a=i[1],u=h(f,e);if(a instanceof _)return new y(H);{let l=a.head[0];if(l instanceof q){let c=a.tail,p=a.head[1].byte_offset,d=new C(t.location.start,p+1),x=new $e(d,t,E(u));return ce(x,c)}else if(l instanceof D){let c=a.tail;return ze(u,t,c)}else{let c=l,p=a.head[1];return new y(new A(c,p))}}});{let i=o.tail;if(i instanceof _)if(r.head[0]instanceof Zt){let f=o.head[0];if(f instanceof it&&f[0]===""){let a=s[0],u=i;return Ln(new k(a),t,E(e),w,u)}else return P(de(n,j),a=>{let u=a[0],l=a[1],c=h(u,e);if(l instanceof _)return new y(H);{let p=l.head[0];if(p instanceof q){let d=l.tail,x=l.head[1].byte_offset,b=new C(t.location.start,x+1),T=new $e(b,t,E(c));return ce(T,d)}else if(p instanceof D){let d=l.tail;return ze(c,t,d)}else{let d=p,x=l.head[1];return new y(new A(d,x))}}})}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else{let f=i.tail;if(f instanceof _)if(r.head[0]instanceof Zt){let a=o.head[0];if(a instanceof it){let u=i.head[0];if(u instanceof q)if(a[0]===""){let l=s[0],c=f,p=i.head[1].byte_offset,d=new C(t.location.start,p+1),x=new _n(d,new k(l),t,E(e),w);return ce(x,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}});else if(u instanceof D)if(a[0]===""){let l=s[0],c=f;return Ln(new k(l),t,E(e),w,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}});else if(a[0]===""){let l=s[0],c=i;return Ln(new k(l),t,E(e),w,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}})}else return P(de(n,j),u=>{let l=u[0],c=u[1],p=h(l,e);if(c instanceof _)return new y(H);{let d=c.head[0];if(d instanceof q){let x=c.tail,b=c.head[1].byte_offset,T=new C(t.location.start,b+1),v=new $e(T,t,E(p));return ce(v,x)}else if(d instanceof D){let x=c.tail;return ze(p,t,x)}else{let x=d,b=c.head[1];return new y(new A(x,b))}}})}else return P(de(n,j),a=>{let u=a[0],l=a[1],c=h(u,e);if(l instanceof _)return new y(H);{let p=l.head[0];if(p instanceof q){let d=l.tail,x=l.head[1].byte_offset,b=new C(t.location.start,x+1),T=new $e(b,t,E(c));return ce(T,d)}else if(p instanceof D){let d=l.tail;return ze(c,t,d)}else{let d=p,x=l.head[1];return new y(new A(d,x))}}});else if(r.head[0]instanceof Zt){let a=o.head[0];if(a instanceof it){let u=i.head[0];if(u instanceof q)if(a[0]===""){let l=s[0],c=f,p=i.head[1].byte_offset,d=new C(t.location.start,p+1),x=new _n(d,new k(l),t,E(e),w);return ce(x,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}});else if(u instanceof D)if(f.head[0]instanceof q)if(a[0]===""){let l=s[0],c=f.tail,p=f.head[1].byte_offset,d=new C(t.location.start,p+1),x=new _n(d,new k(l),t,E(e),w);return ce(x,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}});else if(a[0]===""){let l=s[0],c=f;return Ln(new k(l),t,E(e),w,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}});else if(a[0]===""){let l=s[0],c=i;return Ln(new k(l),t,E(e),w,c)}else return P(de(n,j),l=>{let c=l[0],p=l[1],d=h(c,e);if(p instanceof _)return new y(H);{let x=p.head[0];if(x instanceof q){let b=p.tail,T=p.head[1].byte_offset,v=new C(t.location.start,T+1),I=new $e(v,t,E(d));return ce(I,b)}else if(x instanceof D){let b=p.tail;return ze(d,t,b)}else{let b=x,T=p.head[1];return new y(new A(b,T))}}})}else return P(de(n,j),u=>{let l=u[0],c=u[1],p=h(l,e);if(c instanceof _)return new y(H);{let d=c.head[0];if(d instanceof q){let x=c.tail,b=c.head[1].byte_offset,T=new C(t.location.start,b+1),v=new $e(T,t,E(p));return ce(v,x)}else if(d instanceof D){let x=c.tail;return ze(p,t,x)}else{let x=d,b=c.head[1];return new y(new A(x,b))}}})}else return P(de(n,j),a=>{let u=a[0],l=a[1],c=h(u,e);if(l instanceof _)return new y(H);{let p=l.head[0];if(p instanceof q){let d=l.tail,x=l.head[1].byte_offset,b=new C(t.location.start,x+1),T=new $e(b,t,E(c));return ce(T,d)}else if(p instanceof D){let d=l.tail;return ze(c,t,d)}else{let d=p,x=l.head[1];return new y(new A(d,x))}}})}}}}else if(s instanceof it){let r=n.tail;if(r instanceof _)if(s[0]===""){let o=r;return Ln(S,t,E(e),w,o)}else return P(de(n,j),o=>{let i=o[0],f=o[1],a=h(i,e);if(f instanceof _)return new y(H);{let u=f.head[0];if(u instanceof q){let l=f.tail,c=f.head[1].byte_offset,p=new C(t.location.start,c+1),d=new $e(p,t,E(a));return ce(d,l)}else if(u instanceof D){let l=f.tail;return ze(a,t,l)}else{let l=u,c=f.head[1];return new y(new A(l,c))}}});else{let o=r.tail;if(o instanceof _){let i=r.head[0];if(i instanceof q)if(s[0]===""){let f=o,a=r.head[1].byte_offset,u=new C(t.location.start,a+1),l=new _n(u,S,t,E(e),w);return ce(l,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(i instanceof D)if(s[0]===""){let f=o;return Ln(S,t,E(e),w,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(s[0]===""){let f=r;return Ln(S,t,E(e),w,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}})}else{let i=r.head[0];if(i instanceof q)if(s[0]===""){let f=o,a=r.head[1].byte_offset,u=new C(t.location.start,a+1),l=new _n(u,S,t,E(e),w);return ce(l,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(i instanceof D)if(o.head[0]instanceof q)if(s[0]===""){let f=o.tail,a=o.head[1].byte_offset,u=new C(t.location.start,a+1),l=new _n(u,S,t,E(e),w);return ce(l,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(s[0]===""){let f=o;return Ln(S,t,E(e),w,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}});else if(s[0]===""){let f=r;return Ln(S,t,E(e),w,f)}else return P(de(n,j),f=>{let a=f[0],u=f[1],l=h(a,e);if(u instanceof _)return new y(H);{let c=u.head[0];if(c instanceof q){let p=u.tail,d=u.head[1].byte_offset,x=new C(t.location.start,d+1),b=new $e(x,t,E(l));return ce(b,p)}else if(c instanceof D){let p=u.tail;return ze(l,t,p)}else{let p=c,d=u.head[1];return new y(new A(p,d))}}})}}}else if(s instanceof q){let r=n.tail,o=n.head[1].byte_offset,i=new C(t.location.start,o+1),f=new $e(i,t,E(e));return ce(f,r)}else return P(de(n,j),r=>{let o=r[0],i=r[1],f=h(o,e);if(i instanceof _)return new y(H);{let a=i.head[0];if(a instanceof q){let u=i.tail,l=i.head[1].byte_offset,c=new C(t.location.start,l+1),p=new $e(c,t,E(f));return ce(p,u)}else if(a instanceof D){let u=i.tail;return ze(f,t,u)}else{let u=a,l=i.head[1];return new y(new A(u,l))}}})}}function ce(e,t){for(;;){let n=e,s=t;if(s instanceof _)return new $([n,s]);{let r=s.tail;if(r instanceof _)return s.head[0]instanceof Ye?ze(w,n,r):new $([n,s]);{let o=s.head[0];if(o instanceof Ye)return ze(w,n,r);if(o instanceof Zn){let i=r.head[0];if(i instanceof B){let f=r.tail,a=r.head[1].byte_offset,u=i[0],l=new C(n.location.start,Z(a,u));e=new _i(l,n,u),t=f}else if(i instanceof K){let f=r.tail,a=r.head[1].byte_offset,u=i[0],l=new C(n.location.start,Z(a,u));e=new _i(l,n,u),t=f}else if(i instanceof ue){let f=r.tail,a=i,u=r.head[1],l=i[0],c=bn(l);if(c instanceof $){let p=c[0],d=Z(u.byte_offset,l),x=new C(n.location.start,d);e=new n$(x,n,p),t=f}else return new y(new A(a,u))}else return new $([n,s])}else return new $([n,s])}}}}function nr(e,t,n,s){if(e instanceof _){let r=se(n,s),o=t(r,S);return new $([new k(o),e])}else if(e.head[0]instanceof _t){let r=e.tail;return P(j(r),o=>{let i=o[0],f=o[1],a=new C(n,i.location.end),u=t(a,new k(i));return new $([new k(u),f])})}else{let r=se(n,s),o=t(r,S);return new $([new k(o),e])}}function Ug(e){if(e instanceof _)return new $([S,e]);if(e.head[0]instanceof Mo){let t=e.tail;return P(j(t),n=>{let s=n[0],r=n[1];return new $([new k(s),r])})}else return new $([S,e])}function Vg(e){let n=Gl(w,e,s=>Gl(w,s,Rn,ai),Ic);return P(n,s=>{let r=s[0],o=s[1];return P(Ug(o),i=>{let f=i[0],a=i[1];return ht(Ll,a,(u,l)=>W(j(l),c=>{let p=c[0],d=c[1];return[new r$(r,f,p),d]}))})})}function B$(e,t){return P(Vg(t),n=>{let s=n[0],r=n[1],o=h(s,e);if(r instanceof _)return B$(o,r);if(r.head[0]instanceof ft){let i=r.tail,f=r.head[1].byte_offset;return new $([E(o),i,f+1])}else return B$(o,r)})}function kx(e,t){return P(j(t),n=>{let s=n[0],r=n[1],o=h(s,e);if(r instanceof _)return new $([E(o),r]);if(r.head[0]instanceof D){let i=r.tail;return kx(o,i)}else return new $([E(o),r])})}function Rl(e,t){return P(kx(w,e),n=>{let s=n[0],r=n[1];return ht(Il,r,(o,i)=>P(B$(w,i),f=>{let a=f[0],u=f[1],l=f[2];return new $([new k(new Ul(new C(t,l),s,a)),u])}))})}function Bl(e,t){return ht(Sl,e,(n,s)=>{let r=at(w,s,qg,wt);return P(r,o=>{let i=o[0],f=o[2];return P(wx(0,f),a=>{let u=a[0],l=a[2];return ht(Il,l,(c,p)=>P(Er(w,p),d=>{let x=d[0],b=d[1],T=d[2];return new $([new k(new ql(new C(t,b),i,u,x)),T])}))})})})}function Gg(e){if(e instanceof _)return new y(H);{let t=e.tail;if(t instanceof _){let n=e.head[0],s=e.head[1];return new y(new A(n,s))}else{let n=e.head[0];if(n instanceof B&&t.head[0]instanceof Zt){let s=t.tail,r=n[0];if(s instanceof _)return P(j(s),o=>{let i=o[0],f=o[1];return new $([new di(r,new k(i)),f])});{let o=s.head[0];return o instanceof q?new $([new di(r,S),s]):o instanceof D?new $([new di(r,S),s]):P(j(s),i=>{let f=i[0],a=i[1];return new $([new di(r,new k(f)),a])})}}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}}function Nc(e,t,n,s){return P(j(n),r=>{let o=r[0],i=r[1];if(i instanceof _)return new $([S,i]);{let f=i.head[0];if(f instanceof q){let a=i.tail,u=i.head[1].byte_offset,l=new C(s,u+1),c=new Uc(l,e,t,o,w);return new $([new k(c),a])}else if(f instanceof D){let a=i.tail,u=at(w,a,Gg,wt);return P(u,l=>{let c=l[0],p=l[1],d=l[2],x=new C(s,p),b=new Uc(x,e,t,o,c);return new $([new k(b),d])})}else return new $([S,i])}})}function An(e,t){return P((()=>{if(e instanceof _)return new $([S,e]);{let n=e.tail;if(n instanceof _){let s=e.head[0];if(s instanceof B){let r=n,o=e.head[1].byte_offset,i=s[0],f=se(o,i);return new $([new k(new Tt(f,i)),r])}else if(s instanceof K){let r=n,o=e.head[1].byte_offset,i=s[0];return new $([new k(new Tt(se(o,i),i)),r])}else if(s instanceof ue){let r=n,o=e.head[1].byte_offset,i=s[0],f=se(o,i);return new $([new k(new yr(f,i)),r])}else if(s instanceof Et){let r=n,o=e.head[1].byte_offset,i=s[0],f=se(o,i);return new $([new k(new Tr(f,i)),r])}else if(s instanceof hn){let r=n,o=e.head[1].byte_offset,i=s[0],f=new C(o,Z(o,i)+2);return new $([new k(new Bs(f,i)),r])}else if(s instanceof Wn){let r=n,o=e.head[1].byte_offset;return Rl(r,o)}else if(s instanceof Kn){let r=n,o=e.head[1].byte_offset,i;if(t instanceof Jr)i=W(j(r),a=>{let u=a[0],l=a[1];return[new C(o,u.location.end),new k(u),l]});else{let a=se(o,"echo");i=new $([a,S,r])}return P(i,a=>{let u=a[0],l=a[1],c=a[2];if(c instanceof _)return new $([new k(new Ct(u,l,S)),c]);if(c.head[0]instanceof _t){let p=c.tail;return W(j(p),d=>{let x=d[0],b=d[1],T=new C(u.start,x.location.end);return[new k(new Ct(T,l,new k(x))),b]})}else return new $([new k(new Ct(u,l,S)),c])})}else if(s instanceof Jt){let r=n,o=e.head[1].byte_offset;return Bl(r,o)}else if(s instanceof Xn){let r=n,o=e.head[1].byte_offset;return nr(r,(i,f)=>new Ds(i,f),o,"panic")}else if(s instanceof Jn){let r=n,o=e.head[1].byte_offset;return nr(r,(i,f)=>new Ns(i,f),o,"todo")}else if(s instanceof Yt){let r=n,o=e.head[1].byte_offset;return W(Er(w,r),i=>{let f=i[0],a=i[1],u=i[2];return[new k(new Pr(new C(o,a),f)),u]})}else if(s instanceof Cn){let r=n,o=e.head[1].byte_offset,i=zt(j,S,w,r);return W(i,f=>{let a=f.values,u=f.spread,l=f.remaining_tokens,c=f.end;return[new k(new vr(new C(o,c),a,u)),l]})}else if(s instanceof mn){let r=n,o=e.head[1].byte_offset,i=An(r,xn);return P(i,f=>{let a=f[0],u=f[1];if(a instanceof k){let l=a[0],c=new C(o,l.location.end);return new $([new k(new Os(c,l)),u])}else return We(u)})}else if(s instanceof Yn){let r=n,o=e.head[1].byte_offset,i=An(r,xn);return P(i,f=>{let a=f[0],u=f[1];if(a instanceof k){let l=a[0],c=new C(o,l.location.end);return new $([new k(new js(c,l)),u])}else return We(u)})}else if(s instanceof Fn){let r=n,o=e.head[1].byte_offset,f=at(w,r,a=>pi(j,a),gr);return W(f,a=>{let u=a[0],l=a[1],c=a[2];return[new k(new qs(new C(o,l),u)),c]})}else return new $([S,e])}else{let s=n.tail;if(s instanceof _){let r=e.head[0];if(r instanceof B){let o=n,i=e.head[1].byte_offset,f=r[0],a=se(i,f);return new $([new k(new Tt(a,f)),o])}else if(r instanceof K){let o=n,i=e.head[1].byte_offset,f=r[0];return new $([new k(new Tt(se(i,f),f)),o])}else if(r instanceof ue){let o=n,i=e.head[1].byte_offset,f=r[0],a=se(i,f);return new $([new k(new yr(a,f)),o])}else if(r instanceof Et){let o=n,i=e.head[1].byte_offset,f=r[0],a=se(i,f);return new $([new k(new Tr(a,f)),o])}else if(r instanceof hn){let o=n,i=e.head[1].byte_offset,f=r[0],a=new C(i,Z(i,f)+2);return new $([new k(new Bs(a,f)),o])}else if(r instanceof Wn){let o=n,i=e.head[1].byte_offset;return Rl(o,i)}else if(r instanceof Kn){let o=n,i=e.head[1].byte_offset,f;if(t instanceof Jr)f=W(j(o),u=>{let l=u[0],c=u[1];return[new C(i,l.location.end),new k(l),c]});else{let u=se(i,"echo");f=new $([u,S,o])}return P(f,u=>{let l=u[0],c=u[1],p=u[2];if(p instanceof _)return new $([new k(new Ct(l,c,S)),p]);if(p.head[0]instanceof _t){let d=p.tail;return W(j(d),x=>{let b=x[0],T=x[1],v=new C(l.start,b.location.end);return[new k(new Ct(v,c,new k(b))),T]})}else return new $([new k(new Ct(l,c,S)),p])})}else if(r instanceof Jt){let o=n,i=e.head[1].byte_offset;return Bl(o,i)}else if(r instanceof Xn){let o=n,i=e.head[1].byte_offset;return nr(o,(f,a)=>new Ds(f,a),i,"panic")}else if(r instanceof Jn){let o=n,i=e.head[1].byte_offset;return nr(o,(f,a)=>new Ns(f,a),i,"todo")}else if(r instanceof Yt){let o=n,i=e.head[1].byte_offset;return W(Er(w,o),f=>{let a=f[0],u=f[1],l=f[2];return[new k(new Pr(new C(i,u),a)),l]})}else if(r instanceof Cn){let o=n,i=e.head[1].byte_offset,f=zt(j,S,w,o);return W(f,a=>{let u=a.values,l=a.spread,c=a.remaining_tokens,p=a.end;return[new k(new vr(new C(i,p),u,l)),c]})}else if(r instanceof mn){let o=n,i=e.head[1].byte_offset,f=An(o,xn);return P(f,a=>{let u=a[0],l=a[1];if(u instanceof k){let c=u[0],p=new C(i,c.location.end);return new $([new k(new Os(p,c)),l])}else return We(l)})}else if(r instanceof In&&n.head[0]instanceof Ye){let o=e.head[1].byte_offset,f=at(w,s,j,wt);return W(f,a=>{let u=a[0],l=a[1],c=a[2];return[new k(new $i(new C(o,l),u)),c]})}else if(r instanceof Yn){let o=n,i=e.head[1].byte_offset,f=An(o,xn);return P(f,a=>{let u=a[0],l=a[1];if(u instanceof k){let c=u[0],p=new C(i,c.location.end);return new $([new k(new js(p,c)),l])}else return We(l)})}else if(r instanceof Fn){let o=n,i=e.head[1].byte_offset,a=at(w,o,u=>pi(j,u),gr);return W(a,u=>{let l=u[0],c=u[1],p=u[2];return[new k(new qs(new C(i,c),l)),p]})}else return new $([S,e])}else{let r=s.tail;if(r instanceof _){let o=e.head[0];if(o instanceof B){let i=n,f=e.head[1].byte_offset,a=o[0],u=se(f,a);return new $([new k(new Tt(u,a)),i])}else if(o instanceof K)if(n.head[0]instanceof Ye&&s.head[0]instanceof pt){let i=e.head[1].byte_offset,f=r,a=o[0];return Nc(S,a,f,i)}else{let i=n,f=e.head[1].byte_offset,a=o[0];return new $([new k(new Tt(se(f,a),a)),i])}else if(o instanceof ue){let i=n,f=e.head[1].byte_offset,a=o[0],u=se(f,a);return new $([new k(new yr(u,a)),i])}else if(o instanceof Et){let i=n,f=e.head[1].byte_offset,a=o[0],u=se(f,a);return new $([new k(new Tr(u,a)),i])}else if(o instanceof hn){let i=n,f=e.head[1].byte_offset,a=o[0],u=new C(f,Z(f,a)+2);return new $([new k(new Bs(u,a)),i])}else if(o instanceof Wn){let i=n,f=e.head[1].byte_offset;return Rl(i,f)}else if(o instanceof Kn){let i=n,f=e.head[1].byte_offset,a;if(t instanceof Jr)a=W(j(i),l=>{let c=l[0],p=l[1];return[new C(f,c.location.end),new k(c),p]});else{let l=se(f,"echo");a=new $([l,S,i])}return P(a,l=>{let c=l[0],p=l[1],d=l[2];if(d instanceof _)return new $([new k(new Ct(c,p,S)),d]);if(d.head[0]instanceof _t){let x=d.tail;return W(j(x),b=>{let T=b[0],v=b[1],I=new C(c.start,T.location.end);return[new k(new Ct(I,p,new k(T))),v]})}else return new $([new k(new Ct(c,p,S)),d])})}else if(o instanceof Jt){let i=n,f=e.head[1].byte_offset;return Bl(i,f)}else if(o instanceof Xn){let i=n,f=e.head[1].byte_offset;return nr(i,(a,u)=>new Ds(a,u),f,"panic")}else if(o instanceof Jn){let i=n,f=e.head[1].byte_offset;return nr(i,(a,u)=>new Ns(a,u),f,"todo")}else if(o instanceof Yt){let i=n,f=e.head[1].byte_offset;return W(Er(w,i),a=>{let u=a[0],l=a[1],c=a[2];return[new k(new Pr(new C(f,l),u)),c]})}else if(o instanceof Cn){let i=n,f=e.head[1].byte_offset,a=zt(j,S,w,i);return W(a,u=>{let l=u.values,c=u.spread,p=u.remaining_tokens,d=u.end;return[new k(new vr(new C(f,d),l,c)),p]})}else if(o instanceof mn){let i=n,f=e.head[1].byte_offset,a=An(i,xn);return P(a,u=>{let l=u[0],c=u[1];if(l instanceof k){let p=l[0],d=new C(f,p.location.end);return new $([new k(new Os(d,p)),c])}else return We(c)})}else if(o instanceof In&&n.head[0]instanceof Ye){let i=e.head[1].byte_offset,a=at(w,s,j,wt);return W(a,u=>{let l=u[0],c=u[1],p=u[2];return[new k(new $i(new C(i,c),l)),p]})}else if(o instanceof Yn){let i=n,f=e.head[1].byte_offset,a=An(i,xn);return P(a,u=>{let l=u[0],c=u[1];if(l instanceof k){let p=l[0],d=new C(f,p.location.end);return new $([new k(new js(d,p)),c])}else return We(c)})}else if(o instanceof Fn){let i=n,f=e.head[1].byte_offset,u=at(w,i,l=>pi(j,l),gr);return W(u,l=>{let c=l[0],p=l[1],d=l[2];return[new k(new qs(new C(f,p),c)),d]})}else return new $([S,e])}else{let o=r.tail;if(o instanceof _){let i=e.head[0];if(i instanceof B){let f=n,a=e.head[1].byte_offset,u=i[0],l=se(a,u);return new $([new k(new Tt(l,u)),f])}else if(i instanceof K)if(n.head[0]instanceof Ye&&s.head[0]instanceof pt){let f=e.head[1].byte_offset,a=r,u=i[0];return Nc(S,u,a,f)}else{let f=n,a=e.head[1].byte_offset,u=i[0];return new $([new k(new Tt(se(a,u),u)),f])}else if(i instanceof ue){let f=n,a=e.head[1].byte_offset,u=i[0],l=se(a,u);return new $([new k(new yr(l,u)),f])}else if(i instanceof Et){let f=n,a=e.head[1].byte_offset,u=i[0],l=se(a,u);return new $([new k(new Tr(l,u)),f])}else if(i instanceof hn){let f=n,a=e.head[1].byte_offset,u=i[0],l=new C(a,Z(a,u)+2);return new $([new k(new Bs(l,u)),f])}else if(i instanceof Wn){let f=n,a=e.head[1].byte_offset;return Rl(f,a)}else if(i instanceof Kn){let f=n,a=e.head[1].byte_offset,u;if(t instanceof Jr)u=W(j(f),c=>{let p=c[0],d=c[1];return[new C(a,p.location.end),new k(p),d]});else{let c=se(a,"echo");u=new $([c,S,f])}return P(u,c=>{let p=c[0],d=c[1],x=c[2];if(x instanceof _)return new $([new k(new Ct(p,d,S)),x]);if(x.head[0]instanceof _t){let b=x.tail;return W(j(b),T=>{let v=T[0],I=T[1],F=new C(p.start,v.location.end);return[new k(new Ct(F,d,new k(v))),I]})}else return new $([new k(new Ct(p,d,S)),x])})}else if(i instanceof Jt){let f=n,a=e.head[1].byte_offset;return Bl(f,a)}else if(i instanceof Xn){let f=n,a=e.head[1].byte_offset;return nr(f,(u,l)=>new Ds(u,l),a,"panic")}else if(i instanceof Jn){let f=n,a=e.head[1].byte_offset;return nr(f,(u,l)=>new Ns(u,l),a,"todo")}else if(i instanceof Yt){let f=n,a=e.head[1].byte_offset;return W(Er(w,f),u=>{let l=u[0],c=u[1],p=u[2];return[new k(new Pr(new C(a,c),l)),p]})}else if(i instanceof Cn){let f=n,a=e.head[1].byte_offset,u=zt(j,S,w,f);return W(u,l=>{let c=l.values,p=l.spread,d=l.remaining_tokens,x=l.end;return[new k(new vr(new C(a,x),c,p)),d]})}else if(i instanceof mn){let f=n,a=e.head[1].byte_offset,u=An(f,xn);return P(u,l=>{let c=l[0],p=l[1];if(c instanceof k){let d=c[0],x=new C(a,d.location.end);return new $([new k(new Os(x,d)),p])}else return We(p)})}else if(i instanceof In&&n.head[0]instanceof Ye){let f=e.head[1].byte_offset,u=at(w,s,j,wt);return W(u,l=>{let c=l[0],p=l[1],d=l[2];return[new k(new $i(new C(f,p),c)),d]})}else if(i instanceof Yn){let f=n,a=e.head[1].byte_offset,u=An(f,xn);return P(u,l=>{let c=l[0],p=l[1];if(c instanceof k){let d=c[0],x=new C(a,d.location.end);return new $([new k(new js(x,d)),p])}else return We(p)})}else if(i instanceof Fn){let f=n,a=e.head[1].byte_offset,l=at(w,f,c=>pi(j,c),gr);return W(l,c=>{let p=c[0],d=c[1],x=c[2];return[new k(new qs(new C(a,d),p)),x]})}else return new $([S,e])}else{let i=e.head[0];if(i instanceof B)if(n.head[0]instanceof Zn){let f=s.head[0];if(f instanceof K&&r.head[0]instanceof Ye&&o.head[0]instanceof pt){let a=e.head[1].byte_offset,u=o.tail,l=i[0],c=f[0];return Nc(new k(l),c,u,a)}else{let a=n,u=e.head[1].byte_offset,l=i[0],c=se(u,l);return new $([new k(new Tt(c,l)),a])}}else{let f=n,a=e.head[1].byte_offset,u=i[0],l=se(a,u);return new $([new k(new Tt(l,u)),f])}else if(i instanceof K)if(n.head[0]instanceof Ye&&s.head[0]instanceof pt){let f=e.head[1].byte_offset,a=r,u=i[0];return Nc(S,u,a,f)}else{let f=n,a=e.head[1].byte_offset,u=i[0];return new $([new k(new Tt(se(a,u),u)),f])}else if(i instanceof ue){let f=n,a=e.head[1].byte_offset,u=i[0],l=se(a,u);return new $([new k(new yr(l,u)),f])}else if(i instanceof Et){let f=n,a=e.head[1].byte_offset,u=i[0],l=se(a,u);return new $([new k(new Tr(l,u)),f])}else if(i instanceof hn){let f=n,a=e.head[1].byte_offset,u=i[0],l=new C(a,Z(a,u)+2);return new $([new k(new Bs(l,u)),f])}else if(i instanceof Wn){let f=n,a=e.head[1].byte_offset;return Rl(f,a)}else if(i instanceof Kn){let f=n,a=e.head[1].byte_offset,u;if(t instanceof Jr)u=W(j(f),c=>{let p=c[0],d=c[1];return[new C(a,p.location.end),new k(p),d]});else{let c=se(a,"echo");u=new $([c,S,f])}return P(u,c=>{let p=c[0],d=c[1],x=c[2];if(x instanceof _)return new $([new k(new Ct(p,d,S)),x]);if(x.head[0]instanceof _t){let b=x.tail;return W(j(b),T=>{let v=T[0],I=T[1],F=new C(p.start,v.location.end);return[new k(new Ct(F,d,new k(v))),I]})}else return new $([new k(new Ct(p,d,S)),x])})}else if(i instanceof Jt){let f=n,a=e.head[1].byte_offset;return Bl(f,a)}else if(i instanceof Xn){let f=n,a=e.head[1].byte_offset;return nr(f,(u,l)=>new Ds(u,l),a,"panic")}else if(i instanceof Jn){let f=n,a=e.head[1].byte_offset;return nr(f,(u,l)=>new Ns(u,l),a,"todo")}else if(i instanceof Yt){let f=n,a=e.head[1].byte_offset;return W(Er(w,f),u=>{let l=u[0],c=u[1],p=u[2];return[new k(new Pr(new C(a,c),l)),p]})}else if(i instanceof Cn){let f=n,a=e.head[1].byte_offset,u=zt(j,S,w,f);return W(u,l=>{let c=l.values,p=l.spread,d=l.remaining_tokens,x=l.end;return[new k(new vr(new C(a,x),c,p)),d]})}else if(i instanceof mn){let f=n,a=e.head[1].byte_offset,u=An(f,xn);return P(u,l=>{let c=l[0],p=l[1];if(c instanceof k){let d=c[0],x=new C(a,d.location.end);return new $([new k(new Os(x,d)),p])}else return We(p)})}else if(i instanceof In&&n.head[0]instanceof Ye){let f=e.head[1].byte_offset,u=at(w,s,j,wt);return W(u,l=>{let c=l[0],p=l[1],d=l[2];return[new k(new $i(new C(f,p),c)),d]})}else if(i instanceof Yn){let f=n,a=e.head[1].byte_offset,u=An(f,xn);return P(u,l=>{let c=l[0],p=l[1];if(c instanceof k){let d=c[0],x=new C(a,d.location.end);return new $([new k(new js(x,d)),p])}else return We(p)})}else if(i instanceof Fn){let f=n,a=e.head[1].byte_offset,l=at(w,f,c=>pi(j,c),gr);return W(l,c=>{let p=c[0],d=c[1],x=c[2];return[new k(new qs(new C(a,d),p)),x]})}else return new $([S,e])}}}}}})(),n=>{let s=n[0],r=n[1];if(s instanceof k){let o=s[0],i=ce(o,r);if(i instanceof $){let f=i[0][0],a=i[0][1];return new $([new k(f),a])}else return i}else return new $([S,r])})}function gx(e,t,n,s){return P(An(e,s),r=>{let o=r[0],i=r[1];if(o instanceof k){let f=o[0],a=h(f,n),u=Og(i);if(u instanceof $){let l=u[0][0],c=u[0][1],p=cx(new k(l),t,a),d=p[0];if(d instanceof k){let x=d[0];return new $([x,c])}else{let x=p[1],b=p[2];return gx(c,x,b,l instanceof Ks?Mg:xn)}}else{let l=cx(S,t,a)[0];if(l instanceof k){let c=l[0];return new $([c,i])}else return We(i)}}else return We(i)})}function j(e){return gx(e,w,w,xn)}function px(e,t){return P(j(e),n=>{let s=n[0],r=n[1];if(r instanceof _){let o=new Us(new C(t,s.location.end),s,S);return new $([o,r])}else if(r.head[0]instanceof _t){let o=r.tail,i=j(o);if(i instanceof $){let f=i[0][0],a=i[0][1],u=new Us(new C(t,f.location.end),s,new k(f));return new $([u,a])}else return i}else{let o=new Us(new C(t,s.location.end),s,S);return new $([o,r])}})}function $x(e,t){return P(e instanceof _?Gl(w,e,ux,ai):e.head[0]instanceof oi?new $([w,e]):Gl(w,e,ux,ai),n=>{let s=n[0],r=n[1];return ht(Fc,r,(o,i)=>P(j(i),f=>{let a=f[0],u=f[1];return new $([new zs(new C(t,a.location.end),s,a),u])}))})}function Kp(e,t,n){return P(Rn(t),s=>{let r=s[0],o=s[1];return P(Hl(o),i=>{let f=i[0],a=i[1];return ht(Fl,a,(u,l)=>P(j(l),c=>{let p=c[0],d=c[1];return P((()=>{if(e instanceof xi)return new $([e,d,p.location.end]);if(d instanceof _)return new $([e,d,p.location.end]);if(e.message instanceof gn&&d.head[0]instanceof _t){let x=d.tail;return W(j(x),b=>{let T=b[0],v=b[1];return[new qc(new k(T)),v,T.location.end]})}else return new $([e,d,p.location.end])})(),x=>{let b=x[0],T=x[1],v=x[2],I=new mi(new C(n,v),b,r,f,p);return new $([I,T])})}))})})}function dx(e){if(e instanceof _)return P(j(e),n=>{let s=n[0],r=n[1];return new $([new Vs(s),r])});{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof Xr){let s=t,r=e.head[1].byte_offset;return px(s,r)}else if(n instanceof Is){let s=t,r=e.head[1].byte_offset;return Kp(lx,s,r)}else if(n instanceof Fs){let s=t,r=e.head[1].byte_offset;return $x(s,r)}else return P(j(e),r=>{let o=r[0],i=r[1];return new $([new Vs(o),i])})}else{let n=e.head[0];if(n instanceof Xr){let s=t,r=e.head[1].byte_offset;return px(s,r)}else if(n instanceof Is)if(t.head[0]instanceof Xr){let s=e.head[1].byte_offset,r=t.tail;return Kp(new qc(S),r,s)}else{let s=t,r=e.head[1].byte_offset;return Kp(lx,s,r)}else if(n instanceof Fs){let s=t,r=e.head[1].byte_offset;return $x(s,r)}else return P(j(e),r=>{let o=r[0],i=r[1];return new $([new Vs(o),i])})}}}function Er(e,t){if(t instanceof _)return P(dx(t),n=>{let s=n[0],r=n[1];return Er(h(s,e),r)});if(t.head[0]instanceof ft){let n=t.tail,s=t.head[1].byte_offset;return new $([E(e),s+1,n])}else return P(dx(t),n=>{let s=n[0],r=n[1];return Er(h(s,e),r)})}function Hg(e){return P((()=>{if(e instanceof _)return new y(H);{let t=e.tail;if(t instanceof _){let n=e.head[0];if(n instanceof B){let s=t,r=n[0];return new $([S,new At(r),s])}else if(n instanceof it){let s=t,r=n[0];return new $([S,new wn(r),s])}else{let s=n,r=e.head[1];return new y(new A(s,r))}}else{let n=e.head[0];if(n instanceof B){let s=t.head[0];if(s instanceof B){let r=t.tail,o=n[0],i=s[0];return new $([new k(o),new At(i),r])}else if(s instanceof it){let r=t.tail,o=n[0],i=s[0];return new $([new k(o),new wn(i),r])}else{let r=t,o=n[0];return new $([S,new At(o),r])}}else if(n instanceof it){let s=t,r=n[0];return new $([S,new wn(r),s])}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}})(),t=>{let n=t[0],s=t[1],r=t[2];return P(Hl(r),o=>{let i=o[0],f=o[1];return new $([new T$(n,s,i),f])})})}function hx(e,t,n,s,r,o){return ht(Sl,o,(i,f)=>{let a=at(w,f,Hg,wt);return P(a,u=>{let l=u[0],c=u[1],p=u[2],d=wx(c,p);return P(d,x=>{let b=x[0],T=x[1],v=x[2];return P((()=>{if(v instanceof _)return new $([w,T,v]);if(v.head[0]instanceof Yt){let I=v.tail;return Er(w,I)}else return new $([w,T,v])})(),I=>{let F=I[0],L=I[1],M=I[2],G=new C(r,L),Q=new Jp(G,s,n,l,b,F),oe=Rg(e,t,Q);return new $([oe,M])})})})})}function zg(e,t,n){return new Zr(e.imports,e.custom_types,e.type_aliases,h(new Hs(E(t),n),e.constants),e.functions)}function Wg(e,t){if(e instanceof _)return new y(H);{let n=e.head[0];if(n instanceof B){let s=e.tail,r=n[0];return t(r,s)}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}function mx(e,t,n,s,r){return Wg(s,(o,i)=>P(Hl(i),f=>{let a=f[0],u=f[1];return ht(Fl,u,(l,c)=>P(j(c),p=>{let d=p[0],x=p[1],b=new v$(new C(r,d.location.end),o,n,a,d),T=zg(e,t,b);return new $([T,x])}))}))}function O$(e,t,n){let s=new Qr(n.location,n.name,n.publicity,n.opaque_,n.parameters,E(n.variants));return new Zr(e.imports,h(new Hs(E(t),s),e.custom_types),e.type_aliases,e.constants,e.functions)}function Kg(e,t){return new Qr(e.location,e.name,e.publicity,e.opaque_,e.parameters,h(t,e.variants))}function xx(e){if(e instanceof _)return P(Bn(e),n=>{let s=n[0],r=n[1];return new $([new jl(s),r])});{let t=e.tail;if(t instanceof _)return P(Bn(e),s=>{let r=s[0],o=s[1];return new $([new jl(r),o])});{let n=e.head[0];if(n instanceof B&&t.head[0]instanceof Zt){let s=t.tail,r=n[0];return P(Bn(s),o=>{let i=o[0],f=o[1];return new $([new F$(i,r),f])})}else return P(Bn(e),r=>{let o=r[0],i=r[1];return new $([new jl(o),i])})}}}function bx(e,t){if(e instanceof _)return new y(H);{let n=e.head[0];if(n instanceof K){let s=e.tail,r=e.head[1].byte_offset,o=n[0];return t(o,r,s)}else{let s=n,r=e.head[1];return new y(new A(s,r))}}}function yx(e){return P((()=>{if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,s=t[0];return new $([s,n])}else{let n=t,s=e.head[1];return new y(new A(n,s))}}})(),t=>{let n=t[0],s=t[1];if(s instanceof _)return new $([new Ol(n,w),s]);if(s.head[0]instanceof Ye){let r=s.tail,o=at(w,r,j,wt);return P(o,i=>{let f=i[0],a=i[2];return new $([new Ol(n,f),a])})}else return new $([new Ol(n,w),s])})}function Xg(e,t){for(;;){let n=e,s=t;if(s instanceof _)return new $([E(n),s]);if(s.head[0]instanceof As){let r=s.tail,o=yx(r);if(o instanceof $){let i=o[0][0],f=o[0][1];e=h(i,n),t=f}else return o}else return new $([E(n),s])}}function Jg(e,t,n,s){for(;;){let r=e,o=t,i=n,f=s;if(i instanceof _)return new y(H);{let a=i.head[0];if(mt(a,r)){let u=i.tail,l=i.head[1].byte_offset;return new $([o,Z(l,Al(a)),u])}else{let u=f(o,i);if(u instanceof $){let l=u[0][0],c=u[0][1];e=r,t=l,n=c,s=f}else return u}}}}function Yg(e,t){return Jg(Sc,e,t,(n,s)=>P(Xg(w,s),r=>{let o=r[0],i=r[1];return bx(i,(f,a,u)=>P((()=>{if(u instanceof _)return new $([w,0,u]);{let l=u.tail;if(l instanceof _)return u.head[0]instanceof Ye?at(w,l,xx,wt):new $([w,0,u]);if(u.head[0]instanceof Ye)if(l.head[0]instanceof q){let c=l.tail,p=l.head[1].byte_offset;return new $([w,p,c])}else return at(w,l,xx,wt);else return new $([w,0,u])}})(),l=>{let c=l[0],p=l[2],d=Kg(n,new I$(f,c,o));return new $([d,p])}))}))}function Zg(e,t,n,s,r,o,i,f){let a=new Qr(new C(0,0),n,r,o,s,w);return P(Yg(a,i),u=>{let l=u[0],c=u[1],p=u[2],d=new Qr(new C(f,c),l.name,l.publicity,l.opaque_,l.parameters,l.variants),x=O$(e,t,d);return new $([x,p])})}function Qg(e,t,n){return new Zr(e.imports,e.custom_types,h(new Hs(E(t),n),e.type_aliases),e.constants,e.functions)}function eb(e,t,n,s,r,o,i){return P(Bn(i),f=>{let a=f[0],u=f[1],l=new C(o,a.location.end),c=new S$(l,n,r,s,a),p=Qg(e,t,c);return new $([p,u])})}function tb(e){if(e instanceof _)return new y(H);{let t=e.head[0];if(t instanceof B){let n=e.tail,s=t[0];return new $([s,n])}else{let n=t,s=e.head[1];return new y(new A(n,s))}}}function Xp(e,t,n,s,r,o){return bx(r,(i,f,a)=>P((()=>{if(a instanceof _)return new $([w,Z(f,i),a]);if(a.head[0]instanceof Ye){let u=a.tail;return at(w,u,tb,wt)}else return new $([w,Z(f,i),a])})(),u=>{let l=u[0],c=u[1],p=u[2];if(p instanceof _){let d=new C(o,c),x=new Qr(d,i,n,s,l,w),b=O$(e,t,x);return new $([b,p])}else{let d=p.head[0];if(d instanceof Yt){let x=p.tail;return Zg(e,t,i,l,n,s,x,o)}else if(d instanceof Qo){let x=p.tail;return eb(e,t,i,l,n,o,x)}else{let x=new C(o,c),b=new Qr(x,i,n,s,l,w),T=O$(e,t,b);return new $([T,p])}}}))}function nb(e,t){if(e instanceof _)return[S,t,e];{let n=e.tail;if(n instanceof _)return[S,t,e];if(e.head[0]instanceof _t){let s=n.head[0];if(s instanceof B){let r=n.tail,o=n.head[1].byte_offset,i=s[0];return[new k(new At(i)),Z(o,i),r]}else if(s instanceof it){let r=n.tail,o=n.head[1].byte_offset,i=s[0];return[new k(new wn(i)),Z(o,i)+1,r]}else return[S,t,e]}else return[S,t,e]}}function rb(e,t,n){for(;;){let s=e,r=t,o=n;if(o instanceof _)return new y(H);{let i=o.head[0];if(i instanceof B){let f=o.tail;if(f instanceof _){let a=i,u=o.head[1];return new y(new A(a,u))}else{let a=f.tail;if(a instanceof _){let u=f.head[0];if(u instanceof ft){let l=i[0],c=a,p=f.head[1].byte_offset,d=new He(l,S);return new $(new yt(E(s),E(h(d,r)),p+1,c))}else if(u instanceof D){let l=i[0],c=a,p=new He(l,S);e=s,t=h(p,r),n=c}else{let l=i,c=o.head[1];return new y(new A(l,c))}}else{let u=a.tail;if(u instanceof _){let l=f.head[0];if(l instanceof ft){let c=i[0],p=a,d=f.head[1].byte_offset,x=new He(c,S);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(l instanceof D){let c=i[0],p=a,d=new He(c,S);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}else{let l=f.head[0];if(l instanceof _t){let c=a.head[0];if(c instanceof B){let p=u.head[0];if(p instanceof ft){let d=i[0],x=u.tail,b=c[0],T=u.head[1].byte_offset,v=new He(d,new k(b));return new $(new yt(E(s),E(h(v,r)),T+1,x))}else if(p instanceof D){let d=i[0],x=u.tail,b=c[0],T=new He(d,new k(b));e=s,t=h(T,r),n=x}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else if(l instanceof ft){let c=i[0],p=a,d=f.head[1].byte_offset,x=new He(c,S);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(l instanceof D){let c=i[0],p=a,d=new He(c,S);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}}}}else if(i instanceof K){let f=o.tail;if(f instanceof _){let a=i,u=o.head[1];return new y(new A(a,u))}else{let a=f.tail;if(a instanceof _){let u=f.head[0];if(u instanceof ft){let l=i[0],c=a,p=f.head[1].byte_offset,d=new He(l,S);return new $(new yt(E(s),E(h(d,r)),p+1,c))}else if(u instanceof D){let l=i[0],c=a,p=new He(l,S);e=s,t=h(p,r),n=c}else{let l=i,c=o.head[1];return new y(new A(l,c))}}else{let u=a.tail;if(u instanceof _){let l=f.head[0];if(l instanceof ft){let c=i[0],p=a,d=f.head[1].byte_offset,x=new He(c,S);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(l instanceof D){let c=i[0],p=a,d=new He(c,S);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}else{let l=f.head[0];if(l instanceof _t){let c=a.head[0];if(c instanceof K){let p=u.head[0];if(p instanceof ft){let d=i[0],x=u.tail,b=c[0],T=u.head[1].byte_offset,v=new He(d,new k(b));return new $(new yt(E(s),E(h(v,r)),T+1,x))}else if(p instanceof D){let d=i[0],x=u.tail,b=c[0],T=new He(d,new k(b));e=s,t=h(T,r),n=x}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else if(l instanceof ft){let c=i[0],p=a,d=f.head[1].byte_offset,x=new He(c,S);return new $(new yt(E(s),E(h(x,r)),d+1,p))}else if(l instanceof D){let c=i[0],p=a,d=new He(c,S);e=s,t=h(d,r),n=p}else{let c=i,p=o.head[1];return new y(new A(c,p))}}}}}else if(i instanceof kr){let f=o.tail;if(f instanceof _){let a=i,u=o.head[1];return new y(new A(a,u))}else{let a=f.tail;if(a instanceof _){let u=i,l=o.head[1];return new y(new A(u,l))}else{let u=a.tail;if(u instanceof _){let l=f.head[0];if(l instanceof K){let c=a.head[0];if(c instanceof ft){let p=u,d=l[0],x=a.head[1].byte_offset,b=new He(d,S);return new $(new yt(E(h(b,s)),E(r),x+1,p))}else if(c instanceof D){let p=u,d=l[0],x=new He(d,S);e=h(x,s),t=r,n=p}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else{let c=i,p=o.head[1];return new y(new A(c,p))}}else{let l=u.tail;if(l instanceof _){let c=f.head[0];if(c instanceof K){let p=a.head[0];if(p instanceof ft){let d=u,x=c[0],b=a.head[1].byte_offset,T=new He(x,S);return new $(new yt(E(h(T,s)),E(r),b+1,d))}else if(p instanceof D){let d=u,x=c[0],b=new He(x,S);e=h(b,s),t=r,n=d}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}else{let c=f.head[0];if(c instanceof K){let p=a.head[0];if(p instanceof _t){let d=u.head[0];if(d instanceof K){let x=l.head[0];if(x instanceof ft){let b=l.tail,T=c[0],v=d[0],I=l.head[1].byte_offset,F=new He(T,new k(v));return new $(new yt(E(h(F,s)),E(r),I+1,b))}else if(x instanceof D){let b=l.tail,T=c[0],v=d[0],I=new He(T,new k(v));e=h(I,s),t=r,n=b}else{let b=i,T=o.head[1];return new y(new A(b,T))}}else{let x=i,b=o.head[1];return new y(new A(x,b))}}else if(p instanceof ft){let d=u,x=c[0],b=a.head[1].byte_offset,T=new He(x,S);return new $(new yt(E(h(T,s)),E(r),b+1,d))}else if(p instanceof D){let d=u,x=c[0],b=new He(x,S);e=h(b,s),t=r,n=d}else{let d=i,x=o.head[1];return new y(new A(d,x))}}else{let p=i,d=o.head[1];return new y(new A(p,d))}}}}}}else if(i instanceof ft){let f=o.tail,a=o.head[1].byte_offset;return new $(new yt(E(s),E(r),a+1,f))}else{let f=i,a=o.head[1];return new y(new A(f,a))}}}}function sb(e,t){if(e instanceof _)return new $(new yt(w,w,t,e));{let n=e.tail;if(n instanceof _)return new $(new yt(w,w,t,e));if(e.head[0]instanceof Zn&&n.head[0]instanceof Yt){let s=n.tail;return rb(w,w,s)}else return new $(new yt(w,w,t,e))}}function ob(e,t,n){for(;;){let s=e,r=t,o=n;if(o instanceof _)return s===""?new y(H):new $([s,r,o]);{let i=o.tail;if(i instanceof _){let f=o.head[0];if(f instanceof B&&s===""){let a=i,u=o.head[1].byte_offset,l=f[0],c=u+rn(l);e=l,t=c,n=a}else if(s===""){let a=f,u=o.head[1];return new y(new A(a,u))}else return new $([s,r,o])}else{let f=o.head[0];if(f instanceof B&&s===""){let a=i,u=f[0],c=o.head[1].byte_offset+rn(u);e=u,t=c,n=a}else if(f instanceof Ls){let a=i.head[0];if(a instanceof B&&s!==""){let u=i.tail,l=i.head[1].byte_offset,c=a[0],p=l+rn(c);e=s+"/"+c,t=p,n=u}else if(s===""){let u=f,l=o.head[1];return new y(new A(u,l))}else return new $([s,r,o])}else if(s===""){let a=f,u=o.head[1];return new y(new A(a,u))}else return new $([s,r,o])}}}}function ib(e,t,n,s){return P(ob("",0,n),r=>{let o=r[0],i=r[1],f=r[2];return P(sb(f,i),a=>{let u=a.types,l=a.values,c=a.end,p=a.remaining_tokens,d=nb(p,c),x=d[0],b=d[1],T=d[2],v=new C(s,b),I=new P$(v,o,x,u,l),F=new Hs(E(t),I),L=new Zr(h(F,e.imports),e.custom_types,e.type_aliases,e.constants,e.functions);return new $([L,T])})})}function rr(e,t,n){if(n instanceof _)return new $(e);{let s=n.head[0];if(s instanceof Ss){let r=n.tail,o=n.head[1].byte_offset,i=mx(e,t,zp,r,o);return P(i,f=>{let a=f[0],u=f[1];return rr(a,w,u)})}else if(s instanceof Jt){let r=n.tail;if(r instanceof _)return We(n);{let o=r.head[0];if(o instanceof B){let i=n.head[1],f=r.tail,a=o[0],u=i.byte_offset,l=hx(e,t,zp,a,u,f);return P(l,c=>{let p=c[0],d=c[1];return rr(p,w,d)})}else return We(n)}}else if(s instanceof Ro){let r=n.tail,o=n.head[1].byte_offset,i=ib(e,t,r,o);return P(i,f=>{let a=f[0],u=f[1];return rr(a,w,u)})}else if(s instanceof Oo){let r=n.tail;if(r instanceof _)return We(n);{let o=r.head[0];if(o instanceof Ss){let i=n.head[1].byte_offset,f=r.tail,a=mx(e,t,Dc,f,i);return P(a,u=>{let l=u[0],c=u[1];return rr(l,w,c)})}else if(o instanceof Jt){let i=r.tail;if(i instanceof _)return We(n);{let f=i.head[0];if(f instanceof B){let a=n.head[1],u=i.tail,l=f[0],c=a.byte_offset,p=hx(e,t,Dc,l,c,u);return P(p,d=>{let x=d[0],b=d[1];return rr(x,w,b)})}else return We(n)}}else if(o instanceof Bo){let i=r.tail;if(i instanceof _)return We(n);if(i.head[0]instanceof kr){let f=n.head[1].byte_offset,a=i.tail,u=Xp(e,t,Dc,!0,a,f);return P(u,l=>{let c=l[0],p=l[1];return rr(c,w,p)})}else return We(n)}else if(o instanceof kr){let i=n.head[1].byte_offset,f=r.tail,a=Xp(e,t,Dc,!1,f,i);return P(a,u=>{let l=u[0],c=u[1];return rr(l,w,c)})}else return We(n)}}else if(s instanceof kr){let r=n.tail,o=n.head[1].byte_offset,i=Xp(e,t,zp,!1,r,o);return P(i,f=>{let a=f[0],u=f[1];return rr(a,w,u)})}else if(s instanceof As){let r=n.tail;return P(yx(r),o=>{let i=o[0],f=o[1];return rr(e,h(i,t),f)})}else return We(n)}}function Tx(e){let t=tx(e),n=rx(t),s=nx(n),r=ix(s);return(o=>rr(new Zr(w,w,w,w,w),w,o))(r)}var Px="left#",vx="capture#";function Ue(e,t,n){return new y(e+fp(n(t)))}function Ai(e,t,n){for(;;){let s=e,r=t,o=n,i=as(s,f=>!Zi(f[0],"_"));if(i instanceof _)return new $(void 0);{let f=i.tail,a=i.head[0],u=Kt(f,a);if(u instanceof $){let l=u[0];return Ue(r+a,l,o)}else e=f,t=r,n=o}}}function Ex(e){return e instanceof zs||e instanceof mi||e instanceof Us?e.location:e[0].location}function ab(e){return Pd(Eo,t=>mf(t[1],e))}function Sx(e){if(e instanceof Es){let t=e[0];return h(t,w)}else if(e instanceof kl){let t=e.elems,n=e.rest;return st(yd(t,Sx),(()=>{if(n instanceof k){let s=n[0];return h(s,w)}else return w})())}else return w}function Zc(e,t){return Ze(e,n=>[n,t])}function j$(e,t,n){if(e instanceof Ws){let s=e.name;return new $("_"+s)}else if(e instanceof Cr){let s=e.name;return new $(s)}else return Ue("Unsupported pattern in "+t,e.location,n)}function Ix(e,t){if(e instanceof Dl){let n=e.location,s=e.value,r=bn(s);if(r instanceof $){let o=r[0];return new $(new wl(o))}else return Ue("Invalid integer literal: "+s,n,t)}else{if(e instanceof Ws)return new $(Zm);if(e instanceof Cr){let n=e.name;return new $(new Es(n))}else if(e instanceof Nl){let n=e.elements,s=e.tail;return P(gt(n,r=>Ix(r,t)),r=>P((()=>{if(s instanceof k){let o=s[0];return W(j$(o,"list pattern",t),i=>new k(i))}else return new $(S)})(),o=>new $(new kl(r,o))))}else if(e instanceof Gs&&e.module instanceof gn&&e.arguments instanceof _&&!e.with_spread){let n=e.constructor$;return n==="True"?new $(new vs(!0)):n==="False"?new $(new vs(!1)):Ue("Pattern type not supported",e.location,t)}else return Ue("Pattern type not supported",e.location,t)}}function cb(e){return e instanceof bi?new k("=="):e instanceof yi?new k("!="):e instanceof Ti?new k("<"):e instanceof Pi?new k("<="):e instanceof vi?new k(">="):e instanceof Ei?new k(">"):e instanceof Ci?new k("+"):e instanceof Si?new k("-"):e instanceof Ii?new k("*"):e instanceof Fi?new k("/"):e instanceof Li?new k("%"):S}function Fx(e){return e instanceof At?e[0]:"_"+e[0]}function fb(e,t){if(e instanceof Xs){let n=e.label,s=e.label_location,r=e.item;return new $([n,s,r])}else if(e instanceof Js){let n=e.label,s=e.location;return new $([n,s,new Tt(s,n)])}else{let n=e.item;return Ue("An unlabelled argument cannot follow a labelled one",n.location,t)}}function ub(e,t,n,s){let r;if(e instanceof Tt){let i=e.name;r=Kt(Eo,i)}else r=new y(void 0);let o=r;if(o instanceof $){let i=o[0],f=vd(n,l=>l instanceof Yr),a=f[0],u=f[1];return P(gt(u,l=>fb(l,s)),l=>P(Ai(Ze(l,c=>[c[0],c[1]]),"Duplicate label: ",s),c=>{let p=la(i,t+rt(a));return P(Cd(l,d=>mf(p,d[0])?new $(void 0):Ue("Unexpected label: "+d[0],d[1],s)),d=>{let x=xf(p,b=>{let T=Td(l,v=>v[0]===b);return W(T,v=>new Yr(v[2]))});return new $(st(a,x))})}))}else return new $(n)}function pb(e,t,n){return P(gt(e,s=>Mt(s,n)),s=>{if(t instanceof k){let r=t[0];return P(Mt(r,n),o=>new $(new To(s,new k(o))))}else return new $(new To(s,S))})}function $b(e,t){return gt(e,n=>{let s=n.patterns,r=n.guard;if(s instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(r instanceof k){let o=s.head;if(o instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(s.tail instanceof _&&o.tail instanceof _){let i=r[0];return Ue("Guards are not supported",i.location,t)}else return Ue("Multi-pattern clauses are not supported",n.body.location,t)}else{let o=s.head;if(o instanceof _)return Ue("Multi-pattern clauses are not supported",n.body.location,t);if(s.tail instanceof _&&o.tail instanceof _){let i=o.head;return P(Ix(i,t),f=>P(Ai(Zc(Sx(f),i.location),"Duplicate variable name in pattern: ",t),a=>P(Mt(n.body,t),u=>new $([f,new Ps(t(n.body.location),u)]))))}else return Ue("Multi-pattern clauses are not supported",n.body.location,t)}})}function db(e,t,n,s,r){let o=cb(e);if(o instanceof k){let i=o[0];return P(Mt(t,r),f=>P(Mt(n,r),a=>new $(new _r(new vn(i),h(f,h(a,w))))))}else return Ue("Unsupported operator",s,r)}function Cx(e,t,n,s,r){return P(Mt(n,r),o=>P(Mt(s,r),i=>{let f=new _r(new vn(e),h(new vn(Px),h(i,w)));return new $(new Po(o,h([new vs(t),new ys(t)],h([new Es(Px),f],w))))}))}function D$(e,t){return gt(e,n=>{if(n instanceof Xs){let s=n.label_location;return Ue("Labelled arguments are only supported in a call to a record constructor",s,t)}else if(n instanceof Js){let s=n.location;return Ue("Labelled arguments are only supported in a call to a record constructor",s,t)}else{let s=n.item;return Mt(s,t)}})}function hb(e,t,n,s){return P(Mt(e,s),r=>P(D$(t,s),o=>P(D$(n,s),i=>{let f=fo(h(o,h(h(new vn(vx),w),h(i,w))));return new $(new Ts(h(vx,w),new _r(r,f)))})))}function Mt(e,t){if(e instanceof yr){let n=e.location,s=e.value,r=bn(s);if(r instanceof $){let o=r[0];return new $(new xl(o))}else return Ue("Invalid integer literal: "+s,n,t)}else if(e instanceof Tr){let n=e.location;return Ue("Only whole numbers are allowed (this language has no decimals)",n,t)}else if(e instanceof Tt){let n=e.name;if(n==="True")return new $(new ys(!0));if(n==="False")return new $(new ys(!1));{let s=n;return new $(new vn(s))}}else if(e instanceof Pr){let n=e.location,s=e.statements;return q$(s,n,t)}else if(e instanceof vr){let n=e.elements,s=e.rest;return pb(n,s,t)}else if(e instanceof ql){let n=e.location,s=e.arguments,r=e.body,o=Ze(s,i=>Fx(i.name));return P(Ai(Zc(o,n),"Duplicate parameter name: ",t),i=>P(q$(r,n,t),f=>new $(new Ts(o,f))))}else if(e instanceof _i){let n=e.container;if(n instanceof Tt&&n.name==="list"){let s=e.label;return ab(s)?new $(new vo(new vn("list"),s)):new $(new vn("list."+s))}else{let s=n,r=e.label;return P(Mt(s,t),o=>new $(new vo(o,r)))}}else{if(e instanceof $e)return N$(e,w,w,t);if(e instanceof _n){let n=e.function,s=e.arguments_before,r=e.arguments_after;return hb(n,s,r,t)}else if(e instanceof Ul){let n=e.subjects;if(n instanceof _){let s=e.location;return Ue("Multi-subject case is not supported",s,t)}else if(n.tail instanceof _){let s=e.clauses,r=n.head;return P(Mt(r,t),o=>P($b(s,t),i=>new $(new Po(o,i))))}else{let s=e.location;return Ue("Multi-subject case is not supported",s,t)}}else if(e instanceof wi){let n=e.name;if(n instanceof ki){let s=e.left,r=e.right;return Cx("&&",!1,s,r,t)}else if(n instanceof gi){let s=e.left,r=e.right;return Cx("||",!0,s,r,t)}else if(n instanceof Ks){let s=e.left,r=e.right;return P(Mt(s,t),o=>N$(r,h(o,w),w,t))}else{let s=e.location,r=n,o=e.left,i=e.right;return db(r,o,i,s,t)}}else return Ue("Expression type not supported",e.location,t)}}function N$(e,t,n,s){if(e instanceof $e){let r=e.function,o=e.arguments;return P(Mt(r,s),i=>P(ub(r,rt(t),o,s),f=>P(D$(f,s),a=>new $(new _r(i,fo(h(t,h(a,h(n,w)))))))))}else return P(Mt(e,s),r=>new $(new _r(r,st(t,n))))}function q$(e,t,n){let s=E(e);if(s instanceof _)return Ue("Empty block",t,n);{let r=s.head,o=s.tail;return P((()=>{if(r instanceof zs){let i=r.location;return Ue("A use binding must be followed by more of the block",i,n)}else if(r instanceof Vs){let i=r[0];return W(Mt(i,n),f=>new Ps(n(i.location),f))}else return Ue("A block must end with an expression",Ex(r),n)})(),i=>ca(o,i,(f,a)=>{if(a instanceof zs){let u=a.location,l=a.patterns,c=a.function;return P(gt(l,p=>j$(p.pattern,"use binding",n)),p=>P(Ai(Zc(p,u),"Duplicate parameter name: ",n),d=>{let x=new Ts(p,f);return P(N$(c,w,h(x,w),n),b=>new $(new Ps(n(u),b)))}))}else if(a instanceof mi&&a.kind instanceof xi){let u=a.location,l=a.pattern,c=a.value;return P(j$(l,"let binding",n),p=>P(Mt(c,n),d=>new $(new _l(p,new Ps(n(u),d),f))))}else return Ue("Only let, use, and expressions are allowed in a block",Ex(a),n)}))}}function mb(e,t,n){let s=e.definition,r=Ze(s.parameters,o=>Fx(o.name));return P(Ai(Zc(r,s.location),"Duplicate parameter name: ",n),o=>P(q$(s.body,s.location,n),i=>new $([s.name,new Gn(new yo(s.name,r,i,new fc(t)))])))}function xb(e){let n=bt($a(e,`
`),[w,0],(s,r)=>{let o=s[0],i=s[1];return[h(i,o),i+rn(r)+1]})[0];return s=>gd(n,r=>r<=s.start)}function Lx(e,t){let n=xb(e),s=Tx(e);if(s instanceof $){let r=s[0],o=ua(r.functions,(i,f)=>_d(i.definition.location.start,f.definition.location.start));return P(gt(o,i=>mb(i,t,n)),i=>P(Ai(Ze(o,f=>[f.definition.name,f.definition.location]),"Duplicate function name: ",n),f=>(_f(i,a=>ml(t,a[0],a[1])),new $(t))))}else{let r=s[0];if(r instanceof Vl){let o=rn(ha(e));return Ue("Unexpected end of input",new C(o,o),n)}else{let o=r.position;return Ue("Syntax error",new C(o.byte_offset,o.byte_offset),n)}}}var Dt=null,et=null,Ys=null,Mi=1,sr=0,U$=0,Ax=!1,Mx=0,Bx=!1,V$=0,zl=0,wb=1,Rx=10,kb=600;function G$(e){let t=[];for(let n of e){let s=[];for(let r of n.points)s.push(r.x,r.y);t.push({pts:new Float64Array(s),thickness:n.thickness,color:n.color,start:n.start,end:n.end,fill:n.effects.fill,glow:n.effects.glow,opacity:n.effects.opacity,pivotX:n.effects.sway_pivot.x,pivotY:n.effects.sway_pivot.y,swayDegrees:n.effects.sway_degrees,swayPeriod:n.effects.sway_period,bounceHeight:n.effects.bounce_height,bouncePeriod:n.effects.bounce_period})}Ys={paths:t,endClock:gb(t)},Ax||(Ax=!0,U$=performance.now(),requestAnimationFrame(Ox))}function gb(e){let t=1/0;for(let n of e){let s=Math.max(n.start,n.end);t=t===1/0?s:Math.max(t,s)}return t}function H$(e){Mi=e}function z$(e){Bx=e,zl=0}function bb(e){let t=Number.isFinite(Ys.endClock)&&Ys.endClock>0,n=Mi>0&&sr>=Ys.endClock||Mi<0&&sr<=0;if(!Bx||!t||!n){zl=0;return}zl+=e,zl>=wb&&(zl=0,sr=Mi>0?0:Ys.endClock)}function W$(e){if(!jx())return;let t=document.createElement("canvas");t.width=Dt.width,t.height=Dt.height;let n=t.getContext("2d");n.fillStyle="#0a0a14",n.fillRect(0,0,t.width,t.height),n.drawImage(Dt,0,0);let s=document.createElement("a");s.download=(e||"drawing")+".png",s.href=t.toDataURL("image/png"),s.click()}function K$(){sr=0}function Ox(e){let t=Math.min((e-U$)/1e3,.1);U$=e,sr+=t*Mi*Rx,V$+=t*Mi*Rx,sr=vb(sr,0,Ys.endClock),bb(t),Tb(),requestAnimationFrame(Ox)}function yb(){let e=window.devicePixelRatio||1,t=Math.round(Dt.clientWidth*e),n=Math.round(Dt.clientHeight*e);t>0&&n>0&&(Dt.width!==t||Dt.height!==n)&&(Dt.width=t,Dt.height=n)}function jx(){let e=document.getElementById("animation-canvas");return e?(e!==Dt&&(Dt=e,et=Dt.getContext("2d")),!0):(Mx+=1,Mx===kb&&console.error('The page has no <canvas id="animation-canvas"> element to draw on.'),!1)}function Tb(){if(!jx())return;yb();let e=Dt.width,t=Dt.height;et.setTransform(1,0,0,1,0,0),et.clearRect(0,0,e,t),et.setTransform(e/1e3,0,0,t/1e3,e/2,t/2),et.lineCap="round",et.lineJoin="round";for(let n of Ys.paths){let s=Pb(n);sr>=n.start&&Eb(n,s)}}function Pb(e){let t=e.end-e.start;if(t<=0)return sr>=e.start?1:0;let n=(sr-e.start)/t;return n<0?0:n>1?1:n}function vb(e,t,n){return e<t?t:e>n?n:e}function Eb(e,t){let n=e.pts,s=n.length/2;if(s<2)return;let r=s-1,o=t*r,i=Math.min(r,Math.floor(o));et.save(),Cb(e),e.opacity<1&&(et.globalAlpha=e.opacity),e.glow>0&&(et.shadowBlur=e.glow*(Dt.width/1e3),et.shadowColor=e.fill||e.color),et.beginPath(),et.moveTo(n[0],n[1]);for(let a=1;a<=i;a++)et.lineTo(n[2*a],n[2*a+1]);let f=o-i;if(i<r&&f>0){let a=n[2*i],u=n[2*i+1],l=n[2*i+2],c=n[2*i+3];et.lineTo(a+(l-a)*f,u+(c-u)*f)}e.fill&&(et.fillStyle=e.fill,et.fill()),e.thickness>0&&(et.lineWidth=e.thickness,et.strokeStyle=e.color,et.stroke()),et.restore()}function Cb(e){if(e.bouncePeriod>0){let t=Math.abs(Math.sin(Math.PI*V$/e.bouncePeriod));et.translate(0,-e.bounceHeight*t)}if(e.swayPeriod>0){let t=e.swayDegrees*Math.sin(2*Math.PI*V$/e.swayPeriod);et.translate(e.pivotX,e.pivotY),et.rotate(t*Math.PI/180),et.translate(-e.pivotX,-e.pivotY)}}var Sb="src\\render.gleam",X$=class extends m{constructor(t,n,s,r,o,i){super(),this.points=t,this.thickness=n,this.color=s,this.start=r,this.end=o,this.effects=i}};var es=class extends m{constructor(t,n,s,r,o,i,f,a){super(),this.fill=t,this.glow=n,this.opacity=s,this.sway_pivot=r,this.sway_degrees=o,this.sway_period=i,this.bounce_height=f,this.bounce_period=a}};var Ib=new es("",0,1,new zn(0,0),0,0,0,0),Dx=3.141592653589793;function Fb(e,t){for(;;){let n=e,s=t;if(n instanceof Gr)e=n.shape,t=s;else if(n instanceof Hr){let r=n.shape,o=n.blur;e=r,t=s.glow>0?s:new es(s.fill,o,s.opacity,s.sway_pivot,s.sway_degrees,s.sway_period,s.bounce_height,s.bounce_period)}else if(n instanceof zr){let r=n.shape,o=n.color;e=r,t=s.fill===""?new es(o,s.glow,s.opacity,s.sway_pivot,s.sway_degrees,s.sway_period,s.bounce_height,s.bounce_period):s}else if(n instanceof Wr){let r=n.shape,o=n.opacity;e=r,t=new es(s.fill,s.glow,s.opacity*o/100,s.sway_pivot,s.sway_degrees,s.sway_period,s.bounce_height,s.bounce_period)}else if(n instanceof wr){let r=n.shape,o=n.pivot,i=n.degrees,f=n.period;e=r,t=s.sway_period>0?s:new es(s.fill,s.glow,s.opacity,o,i,f,s.bounce_height,s.bounce_period)}else if(n instanceof Cs){let r=n.shape,o=n.height,i=n.period;e=r,t=s.bounce_period>0?s:new es(s.fill,s.glow,s.opacity,s.sway_pivot,s.sway_degrees,s.sway_period,o,i)}else return s}}function Lb(e,t){for(;;){let n=e,s=t;if(n instanceof Gr)return n.color;if(n instanceof Hr)e=n.shape,t=s;else if(n instanceof zr)e=n.shape,t=s;else if(n instanceof Wr)e=n.shape,t=s;else if(n instanceof wr)e=n.shape,t=s;else if(n instanceof Cs)e=n.shape,t=s;else return s}}function Y$(e,t){return e>t?w:h(e,Y$(e+1,t))}function J$(e,t,n){let s=48,r=Y$(0,s);return Ze(r,o=>{let i=Fr(o,s),f=1-i,a=f*f,u=2*f*i,l=i*i;return new zn(a*e.x+u*t.x+l*n.x,a*e.y+u*t.y+l*n.y)})}function Ab(e,t,n){let s=t.x-e.x,r=t.y-e.y,o,i=Ji(s*s+r*r);if(i instanceof $){let x=i[0];x>0?o=x:o=1}else o=1;let f=o,a=0-Fr(r,f),u=Fr(s,f),l=new zn((e.x+t.x)/2,(e.y+t.y)/2),c=x=>new zn(l.x+x*2*n*a,l.y+x*2*n*u),p=J$(t,c(-1),e),d;if(p instanceof _)throw Nt("let_assert",Sb,"render",218,"leaf_points","Pattern match failed, no pattern matched the value.",{value:p,start:7038,end:7098,pattern_start:7049,pattern_end:7060});return d=p.tail,st(J$(e,c(1),t),d)}function Nx(e,t,n,s){let r=s-n,o=Jd(r)/360*2*Dx*t,i=Xi(Mr(o/6),8,360),f=Y$(0,i);return Ze(f,a=>{let l=(n+Fr(r*a,i))*Dx/180;return new zn(e.x+t*rc(l),e.y+t*nc(l))})}function Mb(e){for(;;){let t=e;if(t instanceof Co){let n=t.start,s=t.end;return h(n,h(s,w))}else if(t instanceof So){let n=t.center,s=t.radius;return Nx(n,s,0,360)}else if(t instanceof Io){let n=t.center,s=t.radius,r=t.from,o=t.to;return Nx(n,s,r,o)}else if(t instanceof Fo){let n=t.start,s=t.control,r=t.end;return J$(n,s,r)}else if(t instanceof Lo){let n=t.points;if(n instanceof _)return w;{let s=n,r=n.head;return st(s,h(r,w))}}else if(t instanceof Ao){let n=t.base,s=t.tip,r=t.width;return Ab(n,s,r)}else t instanceof Gr||t instanceof Hr||t instanceof zr||t instanceof Wr||t instanceof wr,e=t.shape}}function qx(e,t){return new X$(Mb(e.shape),e.thickness,Lb(e.shape,t),e.start,e.end,Fb(e.shape,Ib))}var Bb="src\\app.gleam",Wt=class extends m{constructor(t,n,s,r,o,i,f,a){super(),this.library=t,this.source=n,this.code_open=s,this.shape_slider=r,this.speed=o,this.paused=i,this.looping=f,this.error=a}},nS=(e,t,n,s,r,o,i,f)=>new Wt(e,t,n,s,r,o,i,f),rS=e=>e instanceof Wt,sS=e=>e.library,oS=e=>e.library,iS=e=>e.source,lS=e=>e.source,aS=e=>e.code_open,cS=e=>e.code_open,fS=e=>e.shape_slider,uS=e=>e.shape_slider,pS=e=>e.speed,$S=e=>e.speed,dS=e=>e.paused,hS=e=>e.paused,mS=e=>e.looping,xS=e=>e.looping,_S=e=>e.error,wS=e=>e.error,Zs=class extends m{constructor(t){super(),this[0]=t}},kS=e=>new Zs(e),gS=e=>e instanceof Zs,bS=e=>e[0],Wl=class extends m{},Q$=new Wl,yS=()=>Q$,TS=e=>e instanceof Wl,Ri=class extends m{constructor(t){super(),this[0]=t}},PS=e=>new Ri(e),vS=e=>e instanceof Ri,ES=e=>e[0],Bi=class extends m{constructor(t){super(),this[0]=t}},CS=e=>new Bi(e),SS=e=>e instanceof Bi,IS=e=>e[0],Kl=class extends m{},Hx=new Kl,FS=()=>Hx,LS=e=>e instanceof Kl,Xl=class extends m{},zx=new Xl,AS=()=>zx,MS=e=>e instanceof Xl,Jl=class extends m{},Wx=new Jl,RS=()=>Wx,BS=e=>e instanceof Jl,Yl=class extends m{},Kx=new Yl,OS=()=>Kx,jS=e=>e instanceof Yl,Oi=class extends m{constructor(t){super(),this[0]=t}},DS=e=>new Oi(e),NS=e=>e instanceof Oi,qS=e=>e[0],Zl=class extends m{constructor(t){super(),this[0]=t}},US=e=>new Zl(e),VS=e=>e instanceof Zl,GS=e=>e[0],Ux=h("#e8d8b0",h("#89ddff",h("#f78c6c",h("#c3e88d",h("#c792ea",h("#ffcb6b",h("#ff5370",h("#82aaff",w)))))))),Ob=`fn draw(shape_slider: Int) -> List(Path) {
  [Path(Line(Point(0, 0), Point(100, 100)), 0, 10, 2)]
}
`,jb=3,Db=-3,Nb=100,qb=0,HS="https://cardin-ia.github.io/animator/",zS=!1,WS="https://drive.google.com/file/d/1wrQSBms2W4Bv_t3SE5bmNZ1OLXYoVroB/view?usp=sharing",KS=!0;function Z$(e){return pr(t=>H$(e))}function Ub(e){let t=la(Ux,no(e,rt(Ux)));return t instanceof _?"#e8d8b0":t.head}function Vb(e,t){let n=Lx(t,i1());if(n instanceof $){let s=n[0],r=m1(e,s);return uo(r,up)}else return n}function Qc(e){let t,n=Vb(e.shape_slider,e.source);if(n instanceof $){let f=n[0];t=[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,S),f]}else{let f=n[0];t=[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,new k(f)),w]}let s=t,r=s[0],o=s[1],i=bd(o,(f,a)=>qx(f,Ub(a)));return[r,pr(f=>G$(i))]}function Gb(e){let t=u1(),n=gp(t),s=new Wt(t,n,!0,50,1,!1,!1,S),r=Qc(s),o=r[0],i=r[1];return[o,Ea(h(Pp(n,f=>new Zs(f)),h(i,h(Z$(1),w))))]}function Hb(e){return e.paused?0:e.speed}function Xx(){return pr(e=>K$())}function zb(e){let t=Ef(e);if(t instanceof $)return t;{let n=bn(e);return W(n,Xe)}}function Vx(e,t){let n=gp(t);kp(t);let s=Qc(new Wt(t,n,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error)),r=s[0],o=s[1];return[r,Ea(h(Pp(n,i=>new Zs(i)),h(Xx(),h(o,w))))]}function Wb(e,t){if(t instanceof Zs){let n=t[0],s=p1(e.library,n);return kp(s),Qc(new Wt(s,n,e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error))}else{if(t instanceof Wl)return[new Wt(e.library,e.source,!e.code_open,e.shape_slider,e.speed,e.paused,e.looping,e.error),ms()];if(t instanceof Ri){let n=t[0],s=bn(n);if(s instanceof $){let r=s[0];return Qc(new Wt(e.library,e.source,e.code_open,r,e.speed,e.paused,e.looping,e.error))}else return[e,ms()]}else if(t instanceof Bi){let n=t[0],s=zb(n);if(s instanceof $){let r=s[0];return[new Wt(e.library,e.source,e.code_open,e.shape_slider,r,!1,e.looping,e.error),Z$(r)]}else return[e,ms()]}else if(t instanceof Kl){let n=new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,!e.paused,e.looping,e.error);return[n,Z$(Hb(n))]}else{if(t instanceof Xl)return[e,Xx()];if(t instanceof Jl){let n=!e.looping;return[new Wt(e.library,e.source,e.code_open,e.shape_slider,e.speed,e.paused,n,e.error),pr(s=>z$(n))]}else if(t instanceof Yl){let n=e.library.current;return[e,pr(s=>W$(n))]}else if(t instanceof Oi){let n=t[0];if(n==="")return[e,pr(s=>s(new Zl(wp())))];{let s=n;return Vx(e,$1(e.library,s))}}else{let n=t[0],s=Ld(n);if(s==="")return[e,ms()];{let r=s;return Vx(e,d1(e.library,r,Ob))}}}}}function Kb(e){let t=e.error;if(t instanceof k){let n=t[0];return vt(h(ie("error-banner"),w),h(vt(h(ie("error-title"),w),h(Pt("Nothing drawn"),w)),h(Mh(h(ie("error-message"),w),h(Pt(n),w)),w)))}else return fl()}function Xb(e){return vt(h(ie("canvas-area"),w),h(Bh(h(Ta("animation-canvas"),h(ie("canvas"),w))),h(Kb(e),w)))}function Jb(e){let t=Mr(e*10),n;t<0?n="-":n="";let r=n,o=ia(t);return r+nt(globalThis.Math.trunc(o/10))+"."+nt(o%10)}function Gx(e,t,n,s,r,o,i,f){return jh(h(ie("slider"),w),h(wo(h(ie("slider-label"),w),h(Pt(e),w)),h(Oh(h(Th("range"),h(ot("data-test-id",t),h(gh(n),h(kh(s),h(yh(r),h(sl(o),h(Dm(f),w)))))))),h(wo(h(ie("slider-value"),w),h(Pt(i),w)),w))))}function Yb(e){let t=Ze(e.library.drawings,n=>hu(h(sl(n[0]),h(bh(n[0]===e.library.current),w)),n[0]));return Dh(h(ie("drawing-select"),h(ot("data-test-id","drawing-select"),h(ot("title","Open or create a drawing"),h(sl(e.library.current),h(Nm(n=>new Oi(n)),w))))),st(t,h(hu(h(sl(""),w),"+ New drawing\u2026"),w)))}function Zb(e){return e.code_open?fl():Nr(h(ie("icon-btn"),h(ot("title","Show code"),h(Ur(Q$),w))),h(Pt("\u27E9"),w))}function Qb(e){return vt(h(ie("controls"),w),h(Zb(e),h(Yb(e),h(Gx("shape","shape-slider",nt(qb),nt(Nb),"1",nt(e.shape_slider),nt(e.shape_slider),t=>new Ri(t)),h(Gx("speed","speed-slider",Br(Db),Br(jb),"0.1",Br(e.speed),Jb(e.speed)+"\xD7",t=>new Bi(t)),h(Nr(h(ie("icon-btn"),h(ot("title",e.paused?"Play":"Pause"),h(Ur(Hx),w))),h(Pt(e.paused?"\u25B6":"\u23F8"),w)),h(Nr(h(ie("icon-btn"),h(ot("title","Replay from the start"),h(Ur(zx),w))),h(Pt("\u23EE"),w)),h(Nr(h(ie(e.looping?"icon-btn active":"icon-btn"),h(ot("title","Loop the animation"),h(ot("aria-pressed",e.looping?"true":"false"),h(Ur(Wx),w)))),h(Pt("\u{1F501}"),w)),h(Nr(h(ie("icon-btn"),h(ot("title","Save the canvas as a PNG image"),h(Ur(Kx),w))),h(Pt("Save PNG"),w)),w)))))))))}function e0(e){let t;return e.code_open?t="app":t="app code-hidden",vt(h(ie(t),w),h(vt(h(ie("code-col"),w),h(_1(Q$),w)),h(vt(h(ie("anim-col"),w),h(Qb(e),h(Xb(e),w))),w)))}function XS(){let e=Om(Gb,Wb,e0),t=jm(e,"#app",void 0);if(!(t instanceof $))throw Nt("let_assert",Bb,"app",461,"main","Pattern match failed, no pattern matched the value.",{value:t,start:13908,end:13957,pattern_start:13919,pattern_end:13924})}export{Zl as CreateDrawing,Wt as Model,nS as Model$Model,oS as Model$Model$0,lS as Model$Model$1,cS as Model$Model$2,uS as Model$Model$3,$S as Model$Model$4,hS as Model$Model$5,xS as Model$Model$6,wS as Model$Model$7,aS as Model$Model$code_open,_S as Model$Model$error,sS as Model$Model$library,mS as Model$Model$looping,dS as Model$Model$paused,fS as Model$Model$shape_slider,iS as Model$Model$source,pS as Model$Model$speed,rS as Model$isModel,US as Msg$CreateDrawing,GS as Msg$CreateDrawing$0,AS as Msg$Replay,zx as Msg$Replay$const,OS as Msg$SavePng,Kx as Msg$SavePng$const,DS as Msg$SelectDrawing,qS as Msg$SelectDrawing$0,kS as Msg$SetCode,bS as Msg$SetCode$0,PS as Msg$SetShapeSlider,ES as Msg$SetShapeSlider$0,CS as Msg$SetSpeed,IS as Msg$SetSpeed$0,yS as Msg$ToggleCode,Q$ as Msg$ToggleCode$const,RS as Msg$ToggleLoop,Wx as Msg$ToggleLoop$const,FS as Msg$TogglePause,Hx as Msg$TogglePause$const,VS as Msg$isCreateDrawing,MS as Msg$isReplay,jS as Msg$isSavePng,NS as Msg$isSelectDrawing,gS as Msg$isSetCode,vS as Msg$isSetShapeSlider,SS as Msg$isSetSpeed,TS as Msg$isToggleCode,BS as Msg$isToggleLoop,LS as Msg$isTogglePause,Xl as Replay,Yl as SavePng,Oi as SelectDrawing,Zs as SetCode,Ri as SetShapeSlider,Bi as SetSpeed,Wl as ToggleCode,Jl as ToggleLoop,Kl as TogglePause,zS as include_app_in_gallery,KS as include_video_in_gallery,Gb as init,XS as main,HS as public_url,Wb as update,WS as video_url,e0 as view};
