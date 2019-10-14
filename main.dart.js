{}(function dartProgram(){function copyProperties(a,b){var u=Object.keys(a)
for(var t=0;t<u.length;t++){var s=u[t]
b[s]=a[s]}}var z=function(){var u=function(){}
u.prototype={p:{}}
var t=new u()
if(!(t.__proto__&&t.__proto__.p===u.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var s=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(s))return true}}catch(r){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var u=0;u<a.length;u++){var t=a[u]
var s=Object.keys(t)
for(var r=0;r<s.length;r++){var q=s[r]
var p=t[q]
if(typeof p=='function')p.name=q}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var u=Object.create(b.prototype)
copyProperties(a.prototype,u)
a.prototype=u}}function inheritMany(a,b){for(var u=0;u<b.length;u++)inherit(b[u],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var u=a
a[b]=u
a[c]=function(){a[c]=function(){H.fx(b)}
var t
var s=d
try{if(a[b]===u){t=a[b]=s
t=a[b]=d()}else t=a[b]}finally{if(t===s)a[b]=null
a[c]=function(){return this[b]}}return t}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var u=0;u<a.length;++u)convertToFastObject(a[u])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.dx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.dx"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var u=null
return d?function(){if(u===null)u=H.dx(this,a,b,c,true,false,e).prototype
return u}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var u=[]
for(var t=0;t<h.length;t++){var s=h[t]
if(typeof s=='string')s=a[s]
s.$callName=g[t]
u.push(s)}var s=u[0]
s.$R=e
s.$D=f
var r=i
if(typeof r=="number")r+=x
var q=h[0]
s.$stubName=q
var p=tearOff(u,j||0,r,c,q,d)
a[b]=p
if(c)s.$tearOff=p}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var u=v.interceptorsByTag
if(!u){v.interceptorsByTag=a
return}copyProperties(a,u)}function setOrUpdateLeafTags(a){var u=v.leafTags
if(!u){v.leafTags=a
return}copyProperties(a,u)}function updateTypes(a){var u=v.types
var t=u.length
u.push.apply(u,a)
return t}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var u=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},t=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:u(0,0,null,["$0"],0),_instance_1u:u(0,1,null,["$1"],0),_instance_2u:u(0,2,null,["$2"],0),_instance_0i:u(1,0,null,["$0"],0),_instance_1i:u(1,1,null,["$1"],0),_instance_2i:u(1,2,null,["$2"],0),_static_0:t(0,null,["$0"],0),_static_1:t(1,null,["$1"],0),_static_2:t(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var u=0;u<w.length;u++){if(w[u]==C)continue
if(w[u][a])return w[u][a]}}var C={},H={dk:function dk(){},
eJ:function(){return new P.b1("No element")},
eK:function(){return new P.b1("Too many elements")},
bA:function bA(){},
a_:function a_(){},
aS:function aS(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aU:function aU(a,b,c){this.a=a
this.b=b
this.$ti=c},
b2:function b2(a,b,c){this.a=a
this.b=b
this.$ti=c},
cn:function cn(a,b,c){this.a=a
this.b=b
this.$ti=c},
aL:function aL(){},
aD:function(a){var u,t=H.fy(a)
if(typeof t==="string")return t
u="minified:"+a
return u},
fi:function(a){return v.types[H.a3(a)]},
fq:function(a,b){var u
if(b!=null){u=b.x
if(u!=null)return u}return!!J.x(a).$iaa},
d:function(a){var u
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
u=J.aF(a)
if(typeof u!=="string")throw H.h(H.e9(a))
return u},
an:function(a){var u=a.$identityHash
if(u==null){u=Math.random()*0x3fffffff|0
a.$identityHash=u}return u},
b_:function(a){return H.eN(a)+H.dt(H.a2(a),0,null)},
eN:function(a){var u,t,s,r,q,p,o,n,m=null,l=J.x(a),k=l.constructor
if(typeof k=="function"){u=k.name
t=typeof u==="string"?u:m}else t=m
s=t==null
if(s||l===C.w||!!l.$iar){r=C.h(a)
if(s)t=r
if(r==="Object"){q=a.constructor
if(typeof q=="function"){p=String(q).match(/^\s*function\s*([\w$]*)\s*\(/)
o=p==null?m:p[1]
if(typeof o==="string"&&/^\w+$/.test(o))t=o}}return t}t=t
n=t.length
if(n>1&&C.j.ay(t,0)===36){if(1>n)H.a4(P.dm(1,m))
if(n>n)H.a4(P.dm(n,m))
t=t.substring(1,n)}return H.aD(t)},
fl:function(a){throw H.h(H.e9(a))},
u:function(a,b){if(a==null)J.aE(a)
throw H.h(H.bf(a,b))},
bf:function(a,b){var u,t,s="index"
if(typeof b!=="number"||Math.floor(b)!==b)return new P.O(!0,b,s,null)
u=H.a3(J.aE(a))
if(!(b<0)){if(typeof u!=="number")return H.fl(u)
t=b>=u}else t=!0
if(t)return P.dh(b,a,s,null,u)
return P.dm(b,s)},
e9:function(a){return new P.O(!0,a,null,null)},
h:function(a){var u
if(a==null)a=new P.aZ()
u=new Error()
u.dartException=a
if("defineProperty" in Object){Object.defineProperty(u,"message",{get:H.ej})
u.name=""}else u.toString=H.ej
return u},
ej:function(){return J.aF(this.dartException)},
a4:function(a){throw H.h(a)},
dD:function(a){throw H.h(P.a5(a))},
L:function(a){var u,t,s,r,q,p
a=H.fv(a.replace(String({}),'$receiver$'))
u=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(u==null)u=H.r([],[P.j])
t=u.indexOf("\\$arguments\\$")
s=u.indexOf("\\$argumentsExpr\\$")
r=u.indexOf("\\$expr\\$")
q=u.indexOf("\\$method\\$")
p=u.indexOf("\\$receiver\\$")
return new H.ch(a.replace(new RegExp('\\\\\\$arguments\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$argumentsExpr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$expr\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$method\\\\\\$','g'),'((?:x|[^x])*)').replace(new RegExp('\\\\\\$receiver\\\\\\$','g'),'((?:x|[^x])*)'),t,s,r,q,p)},
ci:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(u){return u.message}}(a)},
dZ:function(a){return function($expr$){try{$expr$.$method$}catch(u){return u.message}}(a)},
dV:function(a,b){return new H.c4(a,b==null?null:b.method)},
dl:function(a,b){var u=b==null,t=u?null:b.method
return new H.bT(a,t,u?null:b.receiver)},
I:function(a){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new H.de(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return f.$1(a.dartException)
else if(!("message" in a))return a
u=a.message
if("number" in a&&typeof a.number=="number"){t=a.number
s=t&65535
if((C.b.aF(t,16)&8191)===10)switch(s){case 438:return f.$1(H.dl(H.d(u)+" (Error "+s+")",g))
case 445:case 5007:return f.$1(H.dV(H.d(u)+" (Error "+s+")",g))}}if(a instanceof TypeError){r=$.el()
q=$.em()
p=$.en()
o=$.eo()
n=$.er()
m=$.es()
l=$.eq()
$.ep()
k=$.eu()
j=$.et()
i=r.w(u)
if(i!=null)return f.$1(H.dl(H.y(u),i))
else{i=q.w(u)
if(i!=null){i.method="call"
return f.$1(H.dl(H.y(u),i))}else{i=p.w(u)
if(i==null){i=o.w(u)
if(i==null){i=n.w(u)
if(i==null){i=m.w(u)
if(i==null){i=l.w(u)
if(i==null){i=o.w(u)
if(i==null){i=k.w(u)
if(i==null){i=j.w(u)
h=i!=null}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0}else h=!0
if(h)return f.$1(H.dV(H.y(u),i))}}return f.$1(new H.cl(typeof u==="string"?u:""))}if(a instanceof RangeError){if(typeof u==="string"&&u.indexOf("call stack")!==-1)return new P.b0()
u=function(b){try{return String(b)}catch(e){}return null}(a)
return f.$1(new P.O(!1,g,g,typeof u==="string"?u.replace(/^RangeError:\s*/,""):u))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof u==="string"&&u==="too much recursion")return new P.b0()
return a},
aB:function(a){var u
if(a==null)return new H.ba(a)
u=a.$cachedTrace
if(u!=null)return u
return a.$cachedTrace=new H.ba(a)},
fp:function(a,b,c,d,e,f){H.e(a,"$iX")
switch(H.a3(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw H.h(new P.cz("Unsupported number of arguments for wrapped closure"))},
az:function(a,b){var u
if(a==null)return
u=a.$identity
if(!!u)return u
u=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,H.fp)
a.$identity=u
return u},
eE:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o,n,m=null,l=b[0],k=l.$callName,j=e?Object.create(new H.ca().constructor.prototype):Object.create(new H.ag(m,m,m,m).constructor.prototype)
j.$initialize=j.constructor
if(e)u=function static_tear_off(){this.$initialize()}
else{t=$.J
if(typeof t!=="number")return t.A()
$.J=t+1
t=new Function("a,b,c,d"+t,"this.$initialize(a,b,c,d"+t+")")
u=t}j.constructor=u
u.prototype=j
if(!e){s=H.dM(a,l,f)
s.$reflectionInfo=d}else{j.$static_name=g
s=l}r=H.eA(d,e,f)
j.$S=r
j[k]=s
for(q=s,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.dM(a,o,f)
j[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}j.$C=q
j.$R=l.$R
j.$D=l.$D
return u},
eA:function(a,b,c){var u
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.fi,a)
if(typeof a=="function")if(b)return a
else{u=c?H.dL:H.df
return function(d,e){return function(){return d.apply({$receiver:e(this)},arguments)}}(a,u)}throw H.h("Error in functionType of tearoff")},
eB:function(a,b,c,d){var u=H.df
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,u)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,u)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,u)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,u)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,u)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,u)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,u)}},
dM:function(a,b,c){var u,t,s,r,q,p,o
if(c)return H.eD(a,b)
u=b.$stubName
t=b.length
s=a[u]
r=b==null?s==null:b===s
q=!r||t>=27
if(q)return H.eB(t,!r,u,b)
if(t===0){r=$.J
if(typeof r!=="number")return r.A()
$.J=r+1
p="self"+r
r="return function(){var "+p+" = this."
q=$.ah
return new Function(r+H.d(q==null?$.ah=H.bu("self"):q)+";return "+p+"."+H.d(u)+"();}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,t).join(",")
r=$.J
if(typeof r!=="number")return r.A()
$.J=r+1
o+=r
r="return function("+o+"){return this."
q=$.ah
return new Function(r+H.d(q==null?$.ah=H.bu("self"):q)+"."+H.d(u)+"("+o+");}")()},
eC:function(a,b,c,d){var u=H.df,t=H.dL
switch(b?-1:a){case 0:throw H.h(new H.c7("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,u,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,u,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,u,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,u,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,u,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,u,t)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,u,t)}},
eD:function(a,b){var u,t,s,r,q,p,o,n=$.ah
if(n==null)n=$.ah=H.bu("self")
u=$.dK
if(u==null)u=$.dK=H.bu("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.eC(s,!q,t,b)
if(s===1){n="return function(){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+");"
u=$.J
if(typeof u!=="number")return u.A()
$.J=u+1
return new Function(n+u+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
n="return function("+o+"){return this."+H.d(n)+"."+H.d(t)+"(this."+H.d(u)+", "+o+");"
u=$.J
if(typeof u!=="number")return u.A()
$.J=u+1
return new Function(n+u+"}")()},
dx:function(a,b,c,d,e,f,g){return H.eE(a,b,c,d,!!e,!!f,g)},
df:function(a){return a.a},
dL:function(a){return a.c},
bu:function(a){var u,t,s,r=new H.ag("self","target","receiver","name"),q=J.dQ(Object.getOwnPropertyNames(r))
for(u=q.length,t=0;t<u;++t){s=q[t]
if(r[s]===a)return s}},
d3:function(a){if(a==null)H.f9("boolean expression must not be null")
return a},
y:function(a){if(a==null)return a
if(typeof a==="string")return a
throw H.h(H.T(a,"String"))},
fV:function(a){if(a==null)return a
if(typeof a==="number")return a
throw H.h(H.T(a,"num"))},
fd:function(a){if(a==null)return a
if(typeof a==="boolean")return a
throw H.h(H.T(a,"bool"))},
a3:function(a){if(a==null)return a
if(typeof a==="number"&&Math.floor(a)===a)return a
throw H.h(H.T(a,"int"))},
eh:function(a,b){throw H.h(H.T(a,H.aD(H.y(b).substring(2))))},
e:function(a,b){if(a==null)return a
if((typeof a==="object"||typeof a==="function")&&J.x(a)[b])return a
H.eh(a,b)},
fr:function(a,b){var u
if(a==null)return a
u=J.x(a)
if(!!u.$ip)return a
if(u[b])return a
H.eh(a,b)},
eb:function(a){var u
if("$S" in a){u=a.$S
if(typeof u=="number")return v.types[H.a3(u)]
else return a.$S()}return},
bg:function(a,b){var u
if(typeof a=="function")return!0
u=H.eb(J.x(a))
if(u==null)return!1
return H.e3(u,null,b,null)},
i:function(a,b){var u,t
if(a==null)return a
if($.dq)return a
$.dq=!0
try{if(H.bg(a,b))return a
u=H.dd(b)
t=H.T(a,u)
throw H.h(t)}finally{$.dq=!1}},
dy:function(a,b){if(a!=null&&!H.dw(a,b))H.a4(H.T(a,H.dd(b)))
return a},
T:function(a,b){return new H.cj("TypeError: "+P.bC(a)+": type '"+H.d(H.f7(a))+"' is not a subtype of type '"+b+"'")},
f7:function(a){var u,t=J.x(a)
if(!!t.$iaj){u=H.eb(t)
if(u!=null)return H.dd(u)
return"Closure"}return H.b_(a)},
f9:function(a){throw H.h(new H.cp(a))},
fx:function(a){throw H.h(new P.bw(a))},
ec:function(a){return v.getIsolateTag(a)},
r:function(a,b){a.$ti=b
return a},
a2:function(a){if(a==null)return
return a.$ti},
fU:function(a,b,c){return H.ae(a["$a"+H.d(c)],H.a2(b))},
dA:function(a,b,c,d){var u=H.ae(a["$a"+H.d(c)],H.a2(b))
return u==null?null:u[d]},
aA:function(a,b,c){var u=H.ae(a["$a"+H.d(b)],H.a2(a))
return u==null?null:u[c]},
l:function(a,b){var u=H.a2(a)
return u==null?null:u[b]},
dd:function(a){return H.a1(a,null)},
a1:function(a,b){var u,t
if(a==null)return"dynamic"
if(a===-1)return"void"
if(typeof a==="object"&&a!==null&&a.constructor===Array)return H.aD(a[0].name)+H.dt(a,1,b)
if(typeof a=="function")return H.aD(a.name)
if(a===-2)return"dynamic"
if(typeof a==="number"){H.a3(a)
if(b==null||a<0||a>=b.length)return"unexpected-generic-index:"+a
u=b.length
t=u-a-1
if(t<0||t>=u)return H.u(b,t)
return H.d(b[t])}if('func' in a)return H.f0(a,b)
if('futureOr' in a)return"FutureOr<"+H.a1("type" in a?a.type:null,b)+">"
return"unknown-reified-type"},
f0:function(a,a0){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b=", "
if("bounds" in a){u=a.bounds
if(a0==null){a0=H.r([],[P.j])
t=null}else t=a0.length
s=a0.length
for(r=u.length,q=r;q>0;--q)C.a.n(a0,"T"+(s+q))
for(p="<",o="",q=0;q<r;++q,o=b){p+=o
n=a0.length
m=n-q-1
if(m<0)return H.u(a0,m)
p=C.j.A(p,a0[m])
l=u[q]
if(l!=null&&l!==P.n)p+=" extends "+H.a1(l,a0)}p+=">"}else{p=""
t=null}k=!!a.v?"void":H.a1(a.ret,a0)
if("args" in a){j=a.args
for(n=j.length,i="",h="",g=0;g<n;++g,h=b){f=j[g]
i=i+h+H.a1(f,a0)}}else{i=""
h=""}if("opt" in a){e=a.opt
i+=h+"["
for(n=e.length,h="",g=0;g<n;++g,h=b){f=e[g]
i=i+h+H.a1(f,a0)}i+="]"}if("named" in a){d=a.named
i+=h+"{"
for(n=H.fg(d),m=n.length,h="",g=0;g<m;++g,h=b){c=H.y(n[g])
i=i+h+H.a1(d[c],a0)+(" "+H.d(c))}i+="}"}if(t!=null)a0.length=t
return p+"("+i+") => "+k},
dt:function(a,b,c){var u,t,s,r,q,p
if(a==null)return""
u=new P.ap("")
for(t=b,s="",r=!0,q="";t<a.length;++t,s=", "){u.a=q+s
p=a[t]
if(p!=null)r=!1
q=u.a+=H.a1(p,c)}return"<"+u.h(0)+">"},
ae:function(a,b){if(a==null)return b
a=a.apply(null,b)
if(a==null)return
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)
return b},
dv:function(a,b,c,d){var u,t
if(a==null)return!1
u=H.a2(a)
t=J.x(a)
if(t[b]==null)return!1
return H.e8(H.ae(t[d],u),null,c,null)},
du:function(a,b,c,d){if(a==null)return a
if(H.dv(a,b,c,d))return a
throw H.h(H.T(a,function(e,f){return e.replace(/[^<,> ]+/g,function(g){return f[g]||g})}(H.aD(b.substring(2))+H.dt(c,0,null),v.mangledGlobalNames)))},
e8:function(a,b,c,d){var u,t
if(c==null)return!0
if(a==null){u=c.length
for(t=0;t<u;++t)if(!H.G(null,null,c[t],d))return!1
return!0}u=a.length
for(t=0;t<u;++t)if(!H.G(a[t],b,c[t],d))return!1
return!0},
fS:function(a,b,c){return a.apply(b,H.ae(J.x(b)["$a"+H.d(c)],H.a2(b)))},
ee:function(a){var u
if(typeof a==="number")return!1
if('futureOr' in a){u="type" in a?a.type:null
return a==null||a.name==="n"||a.name==="t"||a===-1||a===-2||H.ee(u)}return!1},
dw:function(a,b){var u,t
if(a==null)return b==null||b.name==="n"||b.name==="t"||b===-1||b===-2||H.ee(b)
if(b==null||b===-1||b.name==="n"||b===-2)return!0
if(typeof b=="object"){if('futureOr' in b)if(H.dw(a,"type" in b?b.type:null))return!0
if('func' in b)return H.bg(a,b)}u=J.x(a).constructor
t=H.a2(a)
if(t!=null){t=t.slice()
t.splice(0,0,u)
u=t}return H.G(u,null,b,null)},
m:function(a,b){if(a!=null&&!H.dw(a,b))throw H.h(H.T(a,H.dd(b)))
return a},
G:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l=null
if(a===c)return!0
if(c==null||c===-1||c.name==="n"||c===-2)return!0
if(a===-2)return!0
if(a==null||a===-1||a.name==="n"||a===-2){if(typeof c==="number")return!1
if('futureOr' in c)return H.G(a,b,"type" in c?c.type:l,d)
return!1}if(typeof a==="number")return!1
if(typeof c==="number")return!1
if(a.name==="t")return!0
u=typeof a==="object"&&a!==null&&a.constructor===Array
t=u?a[0]:a
if('futureOr' in c){s="type" in c?c.type:l
if('futureOr' in a)return H.G("type" in a?a.type:l,b,s,d)
else if(H.G(a,b,s,d))return!0
else{if(!('$i'+"al" in t.prototype))return!1
r=t.prototype["$a"+"al"]
q=H.ae(r,u?a.slice(1):l)
return H.G(typeof q==="object"&&q!==null&&q.constructor===Array?q[0]:l,b,s,d)}}if('func' in c)return H.e3(a,b,c,d)
if('func' in a)return c.name==="X"
p=typeof c==="object"&&c!==null&&c.constructor===Array
o=p?c[0]:c
if(o!==t){n=o.name
if(!('$i'+n in t.prototype))return!1
m=t.prototype["$a"+n]}else m=l
if(!p)return!0
u=u?a.slice(1):l
p=c.slice(1)
return H.e8(H.ae(m,u),b,p,d)},
e3:function(a,b,c,d){var u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
if(!('func' in a))return!1
if("bounds" in a){if(!("bounds" in c))return!1
u=a.bounds
t=c.bounds
if(u.length!==t.length)return!1}else if("bounds" in c)return!1
if(!H.G(a.ret,b,c.ret,d))return!1
s=a.args
r=c.args
q=a.opt
p=c.opt
o=s!=null?s.length:0
n=r!=null?r.length:0
m=q!=null?q.length:0
l=p!=null?p.length:0
if(o>n)return!1
if(o+m<n+l)return!1
for(k=0;k<o;++k)if(!H.G(r[k],d,s[k],b))return!1
for(j=k,i=0;j<n;++i,++j)if(!H.G(r[j],d,q[i],b))return!1
for(j=0;j<l;++i,++j)if(!H.G(p[j],d,q[i],b))return!1
h=a.named
g=c.named
if(g==null)return!0
if(h==null)return!1
return H.fu(h,b,g,d)},
fu:function(a,b,c,d){var u,t,s,r=Object.getOwnPropertyNames(c)
for(u=r.length,t=0;t<u;++t){s=r[t]
if(!Object.hasOwnProperty.call(a,s))return!1
if(!H.G(c[s],d,a[s],b))return!1}return!0},
fT:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
fs:function(a){var u,t,s,r,q=H.y($.ed.$1(a)),p=$.d4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.db[q]
if(u!=null)return u
t=v.interceptorsByTag[q]
if(t==null){q=H.y($.e7.$2(a,q))
if(q!=null){p=$.d4[q]
if(p!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}u=$.db[q]
if(u!=null)return u
t=v.interceptorsByTag[q]}}if(t==null)return
u=t.prototype
s=q[0]
if(s==="!"){p=H.dc(u)
$.d4[q]=p
Object.defineProperty(a,v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(s==="~"){$.db[q]=u
return u}if(s==="-"){r=H.dc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}if(s==="+")return H.eg(a,u)
if(s==="*")throw H.h(P.e_(q))
if(v.leafTags[q]===true){r=H.dc(u)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:r,enumerable:false,writable:true,configurable:true})
return r.i}else return H.eg(a,u)},
eg:function(a,b){var u=Object.getPrototypeOf(a)
Object.defineProperty(u,v.dispatchPropertyName,{value:J.dC(b,u,null,null),enumerable:false,writable:true,configurable:true})
return b},
dc:function(a){return J.dC(a,!1,null,!!a.$iaa)},
ft:function(a,b,c){var u=b.prototype
if(v.leafTags[a]===true)return H.dc(u)
else return J.dC(u,c,null,null)},
fn:function(){if(!0===$.dB)return
$.dB=!0
H.fo()},
fo:function(){var u,t,s,r,q,p,o,n
$.d4=Object.create(null)
$.db=Object.create(null)
H.fm()
u=v.interceptorsByTag
t=Object.getOwnPropertyNames(u)
if(typeof window!="undefined"){window
s=function(){}
for(r=0;r<t.length;++r){q=t[r]
p=$.ei.$1(q)
if(p!=null){o=H.ft(q,u[q],p)
if(o!=null){Object.defineProperty(p,v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
s.prototype=p}}}}for(r=0;r<t.length;++r){q=t[r]
if(/^[A-Za-z_]/.test(q)){n=u[q]
u["!"+q]=n
u["~"+q]=n
u["-"+q]=n
u["+"+q]=n
u["*"+q]=n}}},
fm:function(){var u,t,s,r,q,p,o=C.m()
o=H.ad(C.n,H.ad(C.o,H.ad(C.i,H.ad(C.i,H.ad(C.p,H.ad(C.q,H.ad(C.r(C.h),o)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){u=dartNativeDispatchHooksTransformer
if(typeof u=="function")u=[u]
if(u.constructor==Array)for(t=0;t<u.length;++t){s=u[t]
if(typeof s=="function")o=s(o)||o}}r=o.getTag
q=o.getUnknownTag
p=o.prototypeForTag
$.ed=new H.d8(r)
$.e7=new H.d9(q)
$.ei=new H.da(p)},
ad:function(a,b){return a(b)||b},
fv:function(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
ch:function ch(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
c4:function c4(a,b){this.a=a
this.b=b},
bT:function bT(a,b,c){this.a=a
this.b=b
this.c=c},
cl:function cl(a){this.a=a},
de:function de(a){this.a=a},
ba:function ba(a){this.a=a
this.b=null},
aj:function aj(){},
cg:function cg(){},
ca:function ca(){},
ag:function ag(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cj:function cj(a){this.a=a},
c7:function c7(a){this.a=a},
cp:function cp(a){this.a=a},
bS:function bS(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
bV:function bV(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bW:function bW(a,b){this.a=a
this.$ti=b},
bX:function bX(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
e2:function(a,b,c){if(a>>>0!==a||a>=c)throw H.h(H.bf(b,a))},
aX:function aX(){},
aV:function aV(){},
aW:function aW(){},
aY:function aY(){},
av:function av(){},
aw:function aw(){},
fg:function(a){return J.dP(a?Object.keys(a):[],null)},
fy:function(a){return v.mangledGlobalNames[a]}},J={
dC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
d7:function(a){var u,t,s,r,q=a[v.dispatchPropertyName]
if(q==null)if($.dB==null){H.fn()
q=a[v.dispatchPropertyName]}if(q!=null){u=q.p
if(!1===u)return q.i
if(!0===u)return a
t=Object.getPrototypeOf(a)
if(u===t)return q.i
if(q.e===t)throw H.h(P.e_("Return interceptor for "+H.d(u(a,q))))}s=a.constructor
r=s==null?null:s[$.dE()]
if(r!=null)return r
r=H.fs(a)
if(r!=null)return r
if(typeof a=="function")return C.x
u=Object.getPrototypeOf(a)
if(u==null)return C.k
if(u===Object.prototype)return C.k
if(typeof s=="function"){Object.defineProperty(s,$.dE(),{value:C.f,enumerable:false,writable:true,configurable:true})
return C.f}return C.f},
eL:function(a,b){if(a<0||a>4294967295)throw H.h(P.dW(a,0,4294967295,"length",null))
return J.dP(new Array(a),b)},
dP:function(a,b){return J.dQ(H.r(a,[b]))},
dQ:function(a){a.fixed$length=Array
return a},
x:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.aQ.prototype
return J.bP.prototype}if(typeof a=="string")return J.a9.prototype
if(a==null)return J.bQ.prototype
if(typeof a=="boolean")return J.bO.prototype
if(a.constructor==Array)return J.Y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof P.n)return a
return J.d7(a)},
bh:function(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(a.constructor==Array)return J.Y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof P.n)return a
return J.d7(a)},
dz:function(a){if(a==null)return a
if(a.constructor==Array)return J.Y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof P.n)return a
return J.d7(a)},
fh:function(a){if(typeof a=="string")return J.a9.prototype
if(a==null)return a
if(!(a instanceof P.n))return J.ar.prototype
return a},
d6:function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.Z.prototype
return a}if(a instanceof P.n)return a
return J.d7(a)},
bi:function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.x(a).F(a,b)},
dG:function(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||H.fq(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.bh(a).u(a,b)},
dH:function(a,b,c){return J.dz(a).i(a,b,c)},
ew:function(a,b,c,d){return J.d6(a).ax(a,b,c,d)},
ex:function(a,b){return J.dz(a).C(a,b)},
ey:function(a){return J.d6(a).gaH(a)},
bj:function(a){return J.x(a).gt(a)},
bk:function(a){return J.dz(a).gv(a)},
aE:function(a){return J.bh(a).gk(a)},
dI:function(a){return J.d6(a).aR(a)},
ez:function(a){return J.fh(a).aZ(a)},
aF:function(a){return J.x(a).h(a)},
z:function z(){},
bO:function bO(){},
bQ:function bQ(){},
aR:function aR(){},
c6:function c6(){},
ar:function ar(){},
Z:function Z(){},
Y:function Y(a){this.$ti=a},
dj:function dj(a){this.$ti=a},
bm:function bm(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bR:function bR(){},
aQ:function aQ(){},
bP:function bP(){},
a9:function a9(){}},P={
eQ:function(){var u,t,s={}
if(self.scheduleImmediate!=null)return P.fa()
if(self.MutationObserver!=null&&self.document!=null){u=self.document.createElement("div")
t=self.document.createElement("span")
s.a=null
new self.MutationObserver(H.az(new P.cr(s),1)).observe(u,{childList:true})
return new P.cq(s,u,t)}else if(self.setImmediate!=null)return P.fb()
return P.fc()},
eR:function(a){self.scheduleImmediate(H.az(new P.cs(H.i(a,{func:1,ret:-1})),0))},
eS:function(a){self.setImmediate(H.az(new P.ct(H.i(a,{func:1,ret:-1})),0))},
eT:function(a){H.i(a,{func:1,ret:-1})
P.eZ(0,a)},
dY:function(a,b){var u=C.b.J(a.a,1000)
return P.f_(u<0?0:u,b)},
eZ:function(a,b){var u=new P.bb(!0)
u.au(a,b)
return u},
f_:function(a,b){var u=new P.bb(!1)
u.av(a,b)
return u},
eU:function(a,b){var u,t,s
b.a=1
try{a.al(new P.cB(b),new P.cC(b),null)}catch(s){u=H.I(s)
t=H.aB(s)
P.fw(new P.cD(b,u,t))}},
e1:function(a,b){var u,t
for(;u=a.a,u===2;)a=H.e(a.c,"$iF")
if(u>=4){t=b.U()
b.a=a.a
b.c=a.c
P.at(b,t)}else{t=H.e(b.c,"$iN")
b.a=2
b.c=a
a.ab(t)}},
at:function(a,b){var u,t,s,r,q,p,o,n,m,l,k,j,i=null,h={},g=h.a=a
for(;!0;){u={}
t=g.a===8
if(b==null){if(t){s=H.e(g.c,"$iA")
P.d0(i,i,g.b,s.a,s.b)}return}for(;r=b.a,r!=null;b=r){b.a=null
P.at(h.a,b)}g=h.a
q=g.c
u.a=t
u.b=q
p=!t
if(p){o=b.c
o=(o&1)!==0||(o&15)===8}else o=!0
if(o){o=b.b
n=o.b
if(t){m=g.b===n
m=!(m||m)}else m=!1
if(m){H.e(q,"$iA")
P.d0(i,i,g.b,q.a,q.b)
return}l=$.q
if(l!==n)$.q=n
else l=i
g=b.c
if((g&15)===8)new P.cH(h,u,b,t).$0()
else if(p){if((g&1)!==0)new P.cG(u,b,q).$0()}else if((g&2)!==0)new P.cF(h,u,b).$0()
if(l!=null)$.q=l
g=u.b
if(!!J.x(g).$ial){if(g.a>=4){k=H.e(o.c,"$iN")
o.c=null
b=o.I(k)
o.a=g.a
o.c=g.c
h.a=g
continue}else P.e1(g,o)
return}}j=b.b
k=H.e(j.c,"$iN")
j.c=null
b=j.I(k)
g=u.a
p=u.b
if(!g){H.m(p,H.l(j,0))
j.a=4
j.c=p}else{H.e(p,"$iA")
j.a=8
j.c=p}h.a=j
g=j}},
f3:function(a,b){if(H.bg(a,{func:1,args:[P.n,P.B]}))return H.i(a,{func:1,ret:null,args:[P.n,P.B]})
if(H.bg(a,{func:1,args:[P.n]}))return H.i(a,{func:1,ret:null,args:[P.n]})
throw H.h(P.dJ(a,"onError","Error handler must accept one Object or one Object and a StackTrace as arguments, and return a a valid result"))},
f2:function(){var u,t
for(;u=$.ac,u!=null;){$.ay=null
t=u.b
$.ac=t
if(t==null)$.ax=null
u.a.$0()}},
f6:function(){$.dr=!0
try{P.f2()}finally{$.ay=null
$.dr=!1
if($.ac!=null)$.dF().$1(P.ea())}},
e6:function(a){var u=new P.b3(a)
if($.ac==null){$.ac=$.ax=u
if(!$.dr)$.dF().$1(P.ea())}else $.ax=$.ax.b=u},
f5:function(a){var u,t,s=$.ac
if(s==null){P.e6(a)
$.ay=$.ax
return}u=new P.b3(a)
t=$.ay
if(t==null){u.b=s
$.ac=$.ay=u}else{u.b=t.b
$.ay=t.b=u
if(u.b==null)$.ax=u}},
fw:function(a){var u=null,t=$.q
if(C.c===t){P.d2(u,u,C.c,a)
return}P.d2(u,u,t,H.i(t.ae(a),{func:1,ret:-1}))},
eP:function(a,b){var u=$.q
if(u===C.c)return P.dY(a,H.i(b,{func:1,ret:-1,args:[P.K]}))
return P.dY(a,H.i(u.af(b,P.K),{func:1,ret:-1,args:[P.K]}))},
d0:function(a,b,c,d,e){var u={}
u.a=d
P.f5(new P.d1(u,e))},
e4:function(a,b,c,d,e){var u,t=$.q
if(t===c)return d.$0()
$.q=c
u=t
try{t=d.$0()
return t}finally{$.q=u}},
e5:function(a,b,c,d,e,f,g){var u,t=$.q
if(t===c)return d.$1(e)
$.q=c
u=t
try{t=d.$1(e)
return t}finally{$.q=u}},
f4:function(a,b,c,d,e,f,g,h,i){var u,t=$.q
if(t===c)return d.$2(e,f)
$.q=c
u=t
try{t=d.$2(e,f)
return t}finally{$.q=u}},
d2:function(a,b,c,d){var u
H.i(d,{func:1,ret:-1})
u=C.c!==c
if(u)d=!(!u||!1)?c.ae(d):c.aI(d,-1)
P.e6(d)},
cr:function cr(a){this.a=a},
cq:function cq(a,b,c){this.a=a
this.b=b
this.c=c},
cs:function cs(a){this.a=a},
ct:function ct(a){this.a=a},
bb:function bb(a){this.a=a
this.b=null
this.c=0},
cX:function cX(a,b){this.a=a
this.b=b},
cW:function cW(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
N:function N(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
F:function F(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
cA:function cA(a,b){this.a=a
this.b=b},
cE:function cE(a,b){this.a=a
this.b=b},
cB:function cB(a){this.a=a},
cC:function cC(a){this.a=a},
cD:function cD(a,b,c){this.a=a
this.b=b
this.c=c},
cH:function cH(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
cI:function cI(a){this.a=a},
cG:function cG(a,b,c){this.a=a
this.b=b
this.c=c},
cF:function cF(a,b,c){this.a=a
this.b=b
this.c=c},
b3:function b3(a){this.a=a
this.b=null},
cb:function cb(){},
cd:function cd(a,b){this.a=a
this.b=b},
ce:function ce(a,b){this.a=a
this.b=b},
cc:function cc(){},
K:function K(){},
A:function A(a,b){this.a=a
this.b=b},
d_:function d_(){},
d1:function d1(a,b){this.a=a
this.b=b},
cM:function cM(){},
cO:function cO(a,b,c){this.a=a
this.b=b
this.c=c},
cN:function cN(a,b){this.a=a
this.b=b},
cP:function cP(a,b,c){this.a=a
this.b=b
this.c=c},
eM:function(a,b){return new H.bS([a,b])},
bY:function(a){return new P.cK([a])},
dp:function(){var u=Object.create(null)
u["<non-identifier-key>"]=u
delete u["<non-identifier-key>"]
return u},
eI:function(a,b,c){var u,t
if(P.ds(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}u=H.r([],[P.j])
C.a.n($.C,a)
try{P.f1(a,u)}finally{if(0>=$.C.length)return H.u($.C,-1)
$.C.pop()}t=P.dX(b,H.fr(u,"$iv"),", ")+c
return t.charCodeAt(0)==0?t:t},
di:function(a,b,c){var u,t
if(P.ds(a))return b+"..."+c
u=new P.ap(b)
C.a.n($.C,a)
try{t=u
t.a=P.dX(t.a,a,", ")}finally{if(0>=$.C.length)return H.u($.C,-1)
$.C.pop()}u.a+=c
t=u.a
return t.charCodeAt(0)==0?t:t},
ds:function(a){var u,t
for(u=$.C.length,t=0;t<u;++t)if(a===$.C[t])return!0
return!1},
f1:function(a,b){var u,t,s,r,q,p,o,n=a.gv(a),m=0,l=0
while(!0){if(!(m<80||l<3))break
if(!n.l())return
u=H.d(n.gm())
C.a.n(b,u)
m+=u.length+2;++l}if(!n.l()){if(l<=5)return
if(0>=b.length)return H.u(b,-1)
t=b.pop()
if(0>=b.length)return H.u(b,-1)
s=b.pop()}else{r=n.gm();++l
if(!n.l()){if(l<=4){C.a.n(b,H.d(r))
return}t=H.d(r)
if(0>=b.length)return H.u(b,-1)
s=b.pop()
m+=t.length+2}else{q=n.gm();++l
for(;n.l();r=q,q=p){p=n.gm();++l
if(l>100){while(!0){if(!(m>75&&l>3))break
if(0>=b.length)return H.u(b,-1)
m-=b.pop().length+2;--l}C.a.n(b,"...")
return}}s=H.d(r)
t=H.d(q)
m+=t.length+s.length+4}}if(l>b.length+2){m+=5
o="..."}else o=null
while(!0){if(!(m>80&&b.length>3))break
if(0>=b.length)return H.u(b,-1)
m-=b.pop().length+2
if(o==null){m+=5
o="..."}}if(o!=null)C.a.n(b,o)
C.a.n(b,s)
C.a.n(b,t)},
dR:function(a,b){var u,t,s=P.bY(b)
for(u=a.length,t=0;t<a.length;a.length===u||(0,H.dD)(a),++t)s.n(0,H.m(a[t],b))
return s},
dU:function(a){var u,t={}
if(P.ds(a))return"{...}"
u=new P.ap("")
try{C.a.n($.C,a)
u.a+="{"
t.a=!0
a.p(0,new P.c0(t,u))
u.a+="}"}finally{if(0>=$.C.length)return H.u($.C,-1)
$.C.pop()}t=u.a
return t.charCodeAt(0)==0?t:t},
cK:function cK(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
au:function au(a){this.a=a
this.b=null},
cL:function cL(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bZ:function bZ(){},
E:function E(){},
c_:function c_(){},
c0:function c0(a,b){this.a=a
this.b=b},
ab:function ab(){},
cR:function cR(){},
b5:function b5(){},
eG:function(a){if(a instanceof H.aj)return a.h(0)
return"Instance of '"+H.d(H.b_(a))+"'"},
dS:function(a,b,c){var u,t=J.eL(a,c)
if(a!==0&&!0)for(u=0;u<t.length;++u)C.a.i(t,u,b)
return H.du(t,"$ip",[c],"$ap")},
dX:function(a,b,c){var u=J.bk(b)
if(!u.l())return a
if(c.length===0){do a+=H.d(u.gm())
while(u.l())}else{a+=H.d(u.gm())
for(;u.l();)a=a+c+H.d(u.gm())}return a},
bC:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.aF(a)
if(typeof a==="string")return JSON.stringify(a)
return P.eG(a)},
dJ:function(a,b,c){return new P.O(!0,a,b,c)},
eO:function(a){var u=null
return new P.ao(u,u,!1,u,u,a)},
dm:function(a,b){return new P.ao(null,null,!0,a,b,"Value not in range")},
dW:function(a,b,c,d,e){return new P.ao(b,c,!0,a,d,"Invalid value")},
dh:function(a,b,c,d,e){var u=H.a3(e==null?J.aE(b):e)
return new P.bM(u,!0,a,c,"Index out of range")},
M:function(a){return new P.cm(a)},
e_:function(a){return new P.ck(a)},
a5:function(a){return new P.bv(a)},
w:function w(){},
d5:function d5(){},
ak:function ak(a){this.a=a},
by:function by(){},
bz:function bz(){},
a6:function a6(){},
bn:function bn(){},
aZ:function aZ(){},
O:function O(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ao:function ao(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
bM:function bM(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cm:function cm(a){this.a=a},
ck:function ck(a){this.a=a},
b1:function b1(a){this.a=a},
bv:function bv(a){this.a=a},
b0:function b0(){},
bw:function bw(a){this.a=a},
cz:function cz(a){this.a=a},
X:function X(){},
o:function o(){},
v:function v(){},
R:function R(){},
p:function p(){},
t:function t(){},
aC:function aC(){},
n:function n(){},
B:function B(){},
j:function j(){},
ap:function ap(a){this.a=a},
ff:function(a){var u,t=J.x(a)
if(!!t.$ia8){u=t.gah(a)
if(u.constructor===Array)if(typeof CanvasPixelArray!=="undefined"){u.constructor=CanvasPixelArray
u.BYTES_PER_ELEMENT=1}return a}return new P.bc(a.data,a.height,a.width)},
fe:function(a){if(a instanceof P.bc)return{data:a.a,height:a.b,width:a.c}
return a},
bc:function bc(a,b,c){this.a=a
this.b=b
this.c=c},
cJ:function cJ(){}},W={
eF:function(a,b,c){var u,t,s=document.body,r=(s&&C.l).ag(s,a,b,c)
r.toString
s=W.k
s=new H.b2(new W.cv(r),H.i(new W.bB(),{func:1,ret:P.w,args:[s]}),[s])
u=s.gv(s)
if(!u.l())H.a4(H.eJ())
t=u.gm()
if(u.l())H.a4(H.eK())
return H.e(t,"$ia")},
aK:function(a){var u,t,s,r="element tag unavailable"
try{u=J.d6(a)
t=u.gak(a)
if(typeof t==="string")r=u.gak(a)}catch(s){H.I(s)}return r},
e0:function(a,b,c,d,e){var u=W.f8(new W.cy(c),W.b),t=u!=null
if(t&&!0){H.i(u,{func:1,args:[W.b]})
if(t)J.ew(a,b,u,!1)}return new W.cx(a,b,u,!1,[e])},
eV:function(a){var u=document.createElement("a"),t=new W.cQ(u,window.location)
t=new W.a0(t)
t.as(a)
return t},
eW:function(a,b,c,d){H.e(a,"$ia")
H.y(b)
H.y(c)
H.e(d,"$ia0")
return!0},
eX:function(a,b,c,d){var u,t,s
H.e(a,"$ia")
H.y(b)
H.y(c)
u=H.e(d,"$ia0").a
t=u.a
t.href=c
s=t.hostname
u=u.b
if(!(s==u.hostname&&t.port==u.port&&t.protocol==u.protocol))if(s==="")if(t.port===""){u=t.protocol
u=u===":"||u===""}else u=!1
else u=!1
else u=!0
return u},
eY:function(){var u=P.j,t=P.dR(C.d,u),s=H.l(C.d,0),r=H.i(new W.cV(),{func:1,ret:u,args:[s]}),q=H.r(["TEMPLATE"],[u])
t=new W.cU(t,P.bY(u),P.bY(u),P.bY(u),null)
t.at(null,new H.aU(C.d,r,[s,u]),q,null)
return t},
f8:function(a,b){var u=$.q
if(u===C.c)return a
return u.af(a,b)},
c:function c(){},
aG:function aG(){},
bl:function bl(){},
af:function af(){},
U:function U(){},
ai:function ai(){},
aI:function aI(){},
V:function V(){},
aJ:function aJ(){},
bx:function bx(){},
a:function a(){},
bB:function bB(){},
b:function b(){},
W:function W(){},
bD:function bD(){},
a8:function a8(){},
S:function S(){},
aT:function aT(){},
cv:function cv(a){this.a=a},
k:function k(){},
am:function am(){},
c9:function c9(){},
aq:function aq(){},
D:function D(){},
as:function as(){},
b6:function b6(){},
cu:function cu(){},
cw:function cw(a){this.a=a},
dn:function dn(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cx:function cx(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
cy:function cy(a){this.a=a},
a0:function a0(a){this.a=a},
Q:function Q(){},
c1:function c1(a){this.a=a},
c3:function c3(a){this.a=a},
c2:function c2(a,b,c){this.a=a
this.b=b
this.c=c},
b9:function b9(){},
cS:function cS(){},
cT:function cT(){},
cU:function cU(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
cV:function cV(){},
aM:function aM(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
H:function H(){},
cQ:function cQ(a,b){this.a=a
this.b=b},
cY:function cY(a){this.a=a},
cZ:function cZ(a){this.a=a},
b7:function b7(){},
b8:function b8(){},
bd:function bd(){},
be:function be(){}},Y={
eH:function(){var u=new Y.aN()
u.ar()
return u},
aN:function aN(){this.c=this.b=this.a=null},
bF:function bF(){},
bE:function bE(){},
bI:function bI(){},
bJ:function bJ(){},
bK:function bK(){},
bG:function bG(a,b){this.a=a
this.b=b},
aH:function aH(a){this.a=a
this.c=this.b=null},
bo:function bo(){},
bp:function bp(){},
bq:function bq(){},
br:function br(){},
bt:function bt(a){this.a=a},
bs:function bs(a){this.a=a},
bL:function bL(a){this.a=a
this.c=this.b=null},
c5:function c5(a){this.a=a
this.c=this.b=null},
bN:function bN(a){this.a=a
this.c=this.b=null},
bU:function bU(a){this.a=a
this.c=this.b=null},
cf:function cf(a){this.a=a
this.c=this.b=null},
co:function co(a){this.a=a
this.c=this.b=null},
c8:function c8(a){this.a=a
this.c=this.b=null},
f:function f(a,b){this.a=a
this.b=b}},F={
ef:function(){var u,t,s,r=Y.eH(),q=H.e(W.eF("<canvas/>",null,null),"$iai")
r.a=q
q.width=200
q.height=400
q=$.a7=q.getContext("2d")
q.fillStyle="gray"
u=r.a
q.fillRect(0,0,u.width,u.height)
t=document.querySelector("#output")
t.appendChild(r.a)
t.appendChild(r.b)
s=P.eP(new P.ak(5e5),r.gb_())
r.c=r.X()
r.aM(s)
return}}
var w=[C,H,J,P,W,Y,F]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.dk.prototype={}
J.z.prototype={
F:function(a,b){return a===b},
gt:function(a){return H.an(a)},
h:function(a){return"Instance of '"+H.d(H.b_(a))+"'"}}
J.bO.prototype={
h:function(a){return String(a)},
gt:function(a){return a?519018:218159},
$iw:1}
J.bQ.prototype={
F:function(a,b){return null==b},
h:function(a){return"null"},
gt:function(a){return 0}}
J.aR.prototype={
gt:function(a){return 0},
h:function(a){return String(a)}}
J.c6.prototype={}
J.ar.prototype={}
J.Z.prototype={
h:function(a){var u=a[$.ek()]
if(u==null)return this.ao(a)
return"JavaScript function for "+H.d(J.aF(u))},
$S:function(){return{func:1,opt:[,,,,,,,,,,,,,,,,]}},
$iX:1}
J.Y.prototype={
n:function(a,b){H.m(b,H.l(a,0))
if(!!a.fixed$length)H.a4(P.M("add"))
a.push(b)},
p:function(a,b){var u,t
H.i(b,{func:1,ret:-1,args:[H.l(a,0)]})
u=a.length
for(t=0;t<u;++t){b.$1(a[t])
if(a.length!==u)throw H.h(P.a5(a))}},
C:function(a,b){if(b>=a.length)return H.u(a,b)
return a[b]},
ad:function(a,b){var u,t
H.i(b,{func:1,ret:P.w,args:[H.l(a,0)]})
u=a.length
for(t=0;t<u;++t){if(H.d3(b.$1(a[t])))return!0
if(a.length!==u)throw H.h(P.a5(a))}return!1},
q:function(a,b){var u
for(u=0;u<a.length;++u)if(J.bi(a[u],b))return!0
return!1},
h:function(a){return P.di(a,"[","]")},
gv:function(a){return new J.bm(a,a.length,[H.l(a,0)])},
gt:function(a){return H.an(a)},
gk:function(a){return a.length},
sk:function(a,b){if(!!a.fixed$length)H.a4(P.M("set length"))
if(b<0)throw H.h(P.dW(b,0,null,"newLength",null))
a.length=b},
u:function(a,b){if(b>=a.length||b<0)throw H.h(H.bf(a,b))
return a[b]},
i:function(a,b,c){H.m(c,H.l(a,0))
if(!!a.immutable$list)H.a4(P.M("indexed set"))
if(b>=a.length||b<0)throw H.h(H.bf(a,b))
a[b]=c},
$iv:1,
$ip:1}
J.dj.prototype={}
J.bm.prototype={
gm:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=s.length
if(t.b!==r)throw H.h(H.dD(s))
u=t.c
if(u>=r){t.sa7(null)
return!1}t.sa7(s[u]);++t.c
return!0},
sa7:function(a){this.d=H.m(a,H.l(this,0))},
$iR:1}
J.bR.prototype={
j:function(a){var u,t
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){u=a|0
return a===u?u:u-1}t=Math.floor(a)
if(isFinite(t))return t
throw H.h(P.M(""+a+".floor()"))},
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gt:function(a){var u,t,s,r,q=a|0
if(a===q)return 536870911&q
u=Math.abs(a)
t=Math.log(u)/0.6931471805599453|0
s=Math.pow(2,t)
r=u<1?u/s:s/u
return 536870911&((r*9007199254740992|0)+(r*3542243181176521|0))*599197+t*1259},
aq:function(a,b){if((a|0)===a)if(b>=1||b<-1)return a/b|0
return this.ac(a,b)},
J:function(a,b){return(a|0)===a?a/b|0:this.ac(a,b)},
ac:function(a,b){var u=a/b
if(u>=-2147483648&&u<=2147483647)return u|0
if(u>0){if(u!==1/0)return Math.floor(u)}else if(u>-1/0)return Math.ceil(u)
throw H.h(P.M("Result of truncating division is "+H.d(u)+": "+H.d(a)+" ~/ "+b))},
aF:function(a,b){var u
if(a>0)u=this.aE(a,b)
else{u=b>31?31:b
u=a>>u>>>0}return u},
aE:function(a,b){return b>31?0:a>>>b},
$iaC:1}
J.aQ.prototype={$io:1}
J.bP.prototype={}
J.a9.prototype={
ay:function(a,b){if(b>=a.length)throw H.h(H.bf(a,b))
return a.charCodeAt(b)},
A:function(a,b){if(typeof b!=="string")throw H.h(P.dJ(b,null,null))
return a+b},
aZ:function(a){return a.toLowerCase()},
h:function(a){return a},
gt:function(a){var u,t,s
for(u=a.length,t=0,s=0;s<u;++s){t=536870911&t+a.charCodeAt(s)
t=536870911&t+((524287&t)<<10)
t^=t>>6}t=536870911&t+((67108863&t)<<3)
t^=t>>11
return 536870911&t+((16383&t)<<15)},
gk:function(a){return a.length},
$ij:1}
H.bA.prototype={}
H.a_.prototype={
gv:function(a){var u=this
return new H.aS(u,u.gk(u),[H.aA(u,"a_",0)])},
M:function(a,b){return this.an(0,H.i(b,{func:1,ret:P.w,args:[H.aA(this,"a_",0)]}))},
aY:function(a){var u,t,s=H.r([],[H.aA(this,"a_",0)]),r=this.a,q=J.bh(r)
C.a.sk(s,q.gk(r))
for(u=this.b,t=0;t<q.gk(r);++t)C.a.i(s,t,u.$1(q.C(r,t)))
return s}}
H.aS.prototype={
gm:function(){return this.d},
l:function(){var u,t=this,s=t.a,r=J.bh(s),q=r.gk(s)
if(t.b!==q)throw H.h(P.a5(s))
u=t.c
if(u>=q){t.sZ(null)
return!1}t.sZ(r.C(s,u));++t.c
return!0},
sZ:function(a){this.d=H.m(a,H.l(this,0))},
$iR:1}
H.aU.prototype={
gk:function(a){return J.aE(this.a)},
C:function(a,b){return this.b.$1(J.ex(this.a,b))},
$aa_:function(a,b){return[b]},
$av:function(a,b){return[b]}}
H.b2.prototype={
gv:function(a){return new H.cn(J.bk(this.a),this.b,this.$ti)}}
H.cn.prototype={
l:function(){var u,t
for(u=this.a,t=this.b;u.l();)if(H.d3(t.$1(u.gm())))return!0
return!1},
gm:function(){return this.a.gm()}}
H.aL.prototype={}
H.ch.prototype={
w:function(a){var u,t,s=this,r=new RegExp(s.a).exec(a)
if(r==null)return
u=Object.create(null)
t=s.b
if(t!==-1)u.arguments=r[t+1]
t=s.c
if(t!==-1)u.argumentsExpr=r[t+1]
t=s.d
if(t!==-1)u.expr=r[t+1]
t=s.e
if(t!==-1)u.method=r[t+1]
t=s.f
if(t!==-1)u.receiver=r[t+1]
return u}}
H.c4.prototype={
h:function(a){var u=this.b
if(u==null)return"NoSuchMethodError: "+H.d(this.a)
return"NoSuchMethodError: method not found: '"+u+"' on null"}}
H.bT.prototype={
h:function(a){var u,t=this,s="NoSuchMethodError: method not found: '",r=t.b
if(r==null)return"NoSuchMethodError: "+H.d(t.a)
u=t.c
if(u==null)return s+r+"' ("+H.d(t.a)+")"
return s+r+"' on '"+u+"' ("+H.d(t.a)+")"}}
H.cl.prototype={
h:function(a){var u=this.a
return u.length===0?"Error":"Error: "+u}}
H.de.prototype={
$1:function(a){if(!!J.x(a).$ia6)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a},
$S:5}
H.ba.prototype={
h:function(a){var u,t=this.b
if(t!=null)return t
t=this.a
u=t!==null&&typeof t==="object"?t.stack:null
return this.b=u==null?"":u},
$iB:1}
H.aj.prototype={
h:function(a){var u=this.constructor,t=u==null?null:u.name
return"Closure '"+(t==null?"unknown":t)+"'"},
$iX:1,
gb2:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.cg.prototype={}
H.ca.prototype={
h:function(a){var u=this.$static_name
if(u==null)return"Closure of unknown static method"
return"Closure '"+H.aD(u)+"'"}}
H.ag.prototype={
F:function(a,b){var u=this
if(b==null)return!1
if(u===b)return!0
if(!(b instanceof H.ag))return!1
return u.a===b.a&&u.b===b.b&&u.c===b.c},
gt:function(a){var u,t=this.c
if(t==null)u=H.an(this.a)
else u=typeof t!=="object"?J.bj(t):H.an(t)
return(u^H.an(this.b))>>>0},
h:function(a){var u=this.c
if(u==null)u=this.a
return"Closure '"+H.d(this.d)+"' of "+("Instance of '"+H.d(H.b_(u))+"'")}}
H.cj.prototype={
h:function(a){return this.a}}
H.c7.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.cp.prototype={
h:function(a){return"Assertion failed: "+P.bC(this.a)}}
H.bS.prototype={
gk:function(a){return this.a},
gD:function(){return new H.bW(this,[H.l(this,0)])},
u:function(a,b){var u,t,s,r,q=this
if(typeof b==="string"){u=q.b
if(u==null)return
t=q.R(u,b)
s=t==null?null:t.b
return s}else if(typeof b==="number"&&(b&0x3ffffff)===b){r=q.c
if(r==null)return
t=q.R(r,b)
s=t==null?null:t.b
return s}else return q.aN(b)},
aN:function(a){var u,t,s=this.d
if(s==null)return
u=this.a9(s,J.bj(a)&0x3ffffff)
t=this.ai(u,a)
if(t<0)return
return u[t].b},
i:function(a,b,c){var u,t,s,r,q,p,o=this
H.m(b,H.l(o,0))
H.m(c,H.l(o,1))
if(typeof b==="string"){u=o.b
o.a_(u==null?o.b=o.S():u,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){t=o.c
o.a_(t==null?o.c=o.S():t,b,c)}else{s=o.d
if(s==null)s=o.d=o.S()
r=J.bj(b)&0x3ffffff
q=o.a9(s,r)
if(q==null)o.V(s,r,[o.N(b,c)])
else{p=o.ai(q,b)
if(p>=0)q[p].b=c
else q.push(o.N(b,c))}}},
p:function(a,b){var u,t,s=this
H.i(b,{func:1,ret:-1,args:[H.l(s,0),H.l(s,1)]})
u=s.e
t=s.r
for(;u!=null;){b.$2(u.a,u.b)
if(t!==s.r)throw H.h(P.a5(s))
u=u.c}},
a_:function(a,b,c){var u,t=this
H.m(b,H.l(t,0))
H.m(c,H.l(t,1))
u=t.R(a,b)
if(u==null)t.V(a,b,t.N(b,c))
else u.b=c},
aB:function(){this.r=this.r+1&67108863},
N:function(a,b){var u,t=this,s=new H.bV(H.m(a,H.l(t,0)),H.m(b,H.l(t,1)))
if(t.e==null)t.e=t.f=s
else{u=t.f
s.d=u
t.f=u.c=s}++t.a
t.aB()
return s},
ai:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.bi(a[t].a,b))return t
return-1},
h:function(a){return P.dU(this)},
R:function(a,b){return a[b]},
a9:function(a,b){return a[b]},
V:function(a,b,c){a[b]=c},
aA:function(a,b){delete a[b]},
S:function(){var u="<non-identifier-key>",t=Object.create(null)
this.V(t,u,t)
this.aA(t,u)
return t}}
H.bV.prototype={}
H.bW.prototype={
gk:function(a){return this.a.a},
gv:function(a){var u=this.a,t=new H.bX(u,u.r,this.$ti)
t.c=u.e
return t}}
H.bX.prototype={
gm:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.a5(t))
else{t=u.c
if(t==null){u.sa0(null)
return!1}else{u.sa0(t.a)
u.c=u.c.c
return!0}}},
sa0:function(a){this.d=H.m(a,H.l(this,0))},
$iR:1}
H.d8.prototype={
$1:function(a){return this.a(a)},
$S:5}
H.d9.prototype={
$2:function(a,b){return this.a(a,b)},
$S:11}
H.da.prototype={
$1:function(a){return this.a(H.y(a))},
$S:12}
H.aX.prototype={}
H.aV.prototype={
gk:function(a){return a.length},
$iaa:1,
$aaa:function(){}}
H.aW.prototype={
i:function(a,b,c){H.e2(b,a,a.length)
a[b]=c},
$aaL:function(){return[P.o]},
$aE:function(){return[P.o]},
$iv:1,
$av:function(){return[P.o]},
$ip:1,
$ap:function(){return[P.o]}}
H.aY.prototype={
gk:function(a){return a.length},
u:function(a,b){H.e2(b,a,a.length)
return a[b]},
$ifN:1}
H.av.prototype={}
H.aw.prototype={}
P.cr.prototype={
$1:function(a){var u=this.a,t=u.a
u.a=null
t.$0()},
$S:6}
P.cq.prototype={
$1:function(a){var u,t
this.a.a=H.i(a,{func:1,ret:-1})
u=this.b
t=this.c
u.firstChild?u.removeChild(t):u.appendChild(t)},
$S:13}
P.cs.prototype={
$0:function(){this.a.$0()},
$S:0}
P.ct.prototype={
$0:function(){this.a.$0()},
$S:0}
P.bb.prototype={
au:function(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(H.az(new P.cX(this,b),0),a)
else throw H.h(P.M("`setTimeout()` not found."))},
av:function(a,b){if(self.setTimeout!=null)this.b=self.setInterval(H.az(new P.cW(this,a,Date.now(),b),0),a)
else throw H.h(P.M("Periodic timer."))},
aJ:function(){if(self.setTimeout!=null){var u=this.b
if(u==null)return
if(this.a)self.clearTimeout(u)
else self.clearInterval(u)
this.b=null}else throw H.h(P.M("Canceling a timer."))},
$iK:1}
P.cX.prototype={
$0:function(){var u=this.a
u.b=null
u.c=1
this.b.$0()},
$S:1}
P.cW.prototype={
$0:function(){var u,t=this,s=t.a,r=s.c+1,q=t.b
if(q>0){u=Date.now()-t.c
if(u>(r+1)*q)r=C.b.aq(u,q)}s.c=r
t.d.$1(s)},
$S:0}
P.N.prototype={
aO:function(a){if((this.c&15)!==6)return!0
return this.b.b.W(H.i(this.d,{func:1,ret:P.w,args:[P.n]}),a.a,P.w,P.n)},
aL:function(a){var u=this.e,t=P.n,s={futureOr:1,type:H.l(this,1)},r=this.b.b
if(H.bg(u,{func:1,args:[P.n,P.B]}))return H.dy(r.aU(u,a.a,a.b,null,t,P.B),s)
else return H.dy(r.W(H.i(u,{func:1,args:[P.n]}),a.a,null,t),s)}}
P.F.prototype={
al:function(a,b,c){var u,t,s,r=H.l(this,0)
H.i(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
u=$.q
if(u!==C.c){H.i(a,{func:1,ret:{futureOr:1,type:c},args:[r]})
if(b!=null)b=P.f3(b,u)}t=new P.F($.q,[c])
s=b==null?1:3
this.a2(new P.N(t,s,a,b,[r,c]))
return t},
aX:function(a,b){return this.al(a,null,b)},
a2:function(a){var u,t=this,s=t.a
if(s<=1){a.a=H.e(t.c,"$iN")
t.c=a}else{if(s===2){u=H.e(t.c,"$iF")
s=u.a
if(s<4){u.a2(a)
return}t.a=s
t.c=u.c}P.d2(null,null,t.b,H.i(new P.cA(t,a),{func:1,ret:-1}))}},
ab:function(a){var u,t,s,r,q,p=this,o={}
o.a=a
if(a==null)return
u=p.a
if(u<=1){t=H.e(p.c,"$iN")
s=p.c=a
if(t!=null){for(;r=s.a,r!=null;s=r);s.a=t}}else{if(u===2){q=H.e(p.c,"$iF")
u=q.a
if(u<4){q.ab(a)
return}p.a=u
p.c=q.c}o.a=p.I(a)
P.d2(null,null,p.b,H.i(new P.cE(o,p),{func:1,ret:-1}))}},
U:function(){var u=H.e(this.c,"$iN")
this.c=null
return this.I(u)},
I:function(a){var u,t,s
for(u=a,t=null;u!=null;t=u,u=s){s=u.a
u.a=t}return t},
a4:function(a){var u,t,s=this,r=H.l(s,0)
H.dy(a,{futureOr:1,type:r})
u=s.$ti
if(H.dv(a,"$ial",u,"$aal"))if(H.dv(a,"$iF",u,null))P.e1(a,s)
else P.eU(a,s)
else{t=s.U()
H.m(a,r)
s.a=4
s.c=a
P.at(s,t)}},
a5:function(a,b){var u,t=this
H.e(b,"$iB")
u=t.U()
t.a=8
t.c=new P.A(a,b)
P.at(t,u)},
$ial:1}
P.cA.prototype={
$0:function(){P.at(this.a,this.b)},
$S:0}
P.cE.prototype={
$0:function(){P.at(this.b,this.a.a)},
$S:0}
P.cB.prototype={
$1:function(a){var u=this.a
u.a=0
u.a4(a)},
$S:6}
P.cC.prototype={
$2:function(a,b){H.e(b,"$iB")
this.a.a5(a,b)},
$1:function(a){return this.$2(a,null)},
$S:14}
P.cD.prototype={
$0:function(){this.a.a5(this.b,this.c)},
$S:0}
P.cH.prototype={
$0:function(){var u,t,s,r,q,p,o=this,n=null
try{s=o.c
n=s.b.b.aj(H.i(s.d,{func:1}),null)}catch(r){u=H.I(r)
t=H.aB(r)
if(o.d){s=H.e(o.a.a.c,"$iA").a
q=u
q=s==null?q==null:s===q
s=q}else s=!1
q=o.b
if(s)q.b=H.e(o.a.a.c,"$iA")
else q.b=new P.A(u,t)
q.a=!0
return}if(!!J.x(n).$ial){if(n instanceof P.F&&n.a>=4){if(n.a===8){s=o.b
s.b=H.e(n.c,"$iA")
s.a=!0}return}p=o.a.a
s=o.b
s.b=n.aX(new P.cI(p),null)
s.a=!1}},
$S:1}
P.cI.prototype={
$1:function(a){return this.a},
$S:15}
P.cG.prototype={
$0:function(){var u,t,s,r,q,p,o,n=this
try{s=n.b
r=H.l(s,0)
q=H.m(n.c,r)
p=H.l(s,1)
n.a.b=s.b.b.W(H.i(s.d,{func:1,ret:{futureOr:1,type:p},args:[r]}),q,{futureOr:1,type:p},r)}catch(o){u=H.I(o)
t=H.aB(o)
s=n.a
s.b=new P.A(u,t)
s.a=!0}},
$S:1}
P.cF.prototype={
$0:function(){var u,t,s,r,q,p,o,n,m=this
try{u=H.e(m.a.a.c,"$iA")
r=m.c
if(H.d3(r.aO(u))&&r.e!=null){q=m.b
q.b=r.aL(u)
q.a=!1}}catch(p){t=H.I(p)
s=H.aB(p)
r=H.e(m.a.a.c,"$iA")
q=r.a
o=t
n=m.b
if(q==null?o==null:q===o)n.b=r
else n.b=new P.A(t,s)
n.a=!0}},
$S:1}
P.b3.prototype={}
P.cb.prototype={
gk:function(a){var u,t,s=this,r={},q=new P.F($.q,[P.o])
r.a=0
u=H.l(s,0)
t=H.i(new P.cd(r,s),{func:1,ret:-1,args:[u]})
H.i(new P.ce(r,q),{func:1,ret:-1})
W.e0(s.a,s.b,t,!1,u)
return q}}
P.cd.prototype={
$1:function(a){H.m(a,H.l(this.b,0));++this.a.a},
$S:function(){return{func:1,ret:P.t,args:[H.l(this.b,0)]}}}
P.ce.prototype={
$0:function(){this.b.a4(this.a.a)},
$S:0}
P.cc.prototype={}
P.K.prototype={}
P.A.prototype={
h:function(a){return H.d(this.a)},
$ia6:1}
P.d_.prototype={$ifP:1}
P.d1.prototype={
$0:function(){var u,t=this.a,s=t.a
t=s==null?t.a=new P.aZ():s
s=this.b
if(s==null)throw H.h(t)
u=H.h(t)
u.stack=s.h(0)
throw u},
$S:0}
P.cM.prototype={
aV:function(a){var u,t,s,r=null
H.i(a,{func:1,ret:-1})
try{if(C.c===$.q){a.$0()
return}P.e4(r,r,this,a,-1)}catch(s){u=H.I(s)
t=H.aB(s)
P.d0(r,r,this,u,H.e(t,"$iB"))}},
aW:function(a,b,c){var u,t,s,r=null
H.i(a,{func:1,ret:-1,args:[c]})
H.m(b,c)
try{if(C.c===$.q){a.$1(b)
return}P.e5(r,r,this,a,b,-1,c)}catch(s){u=H.I(s)
t=H.aB(s)
P.d0(r,r,this,u,H.e(t,"$iB"))}},
aI:function(a,b){return new P.cO(this,H.i(a,{func:1,ret:b}),b)},
ae:function(a){return new P.cN(this,H.i(a,{func:1,ret:-1}))},
af:function(a,b){return new P.cP(this,H.i(a,{func:1,ret:-1,args:[b]}),b)},
aj:function(a,b){H.i(a,{func:1,ret:b})
if($.q===C.c)return a.$0()
return P.e4(null,null,this,a,b)},
W:function(a,b,c,d){H.i(a,{func:1,ret:c,args:[d]})
H.m(b,d)
if($.q===C.c)return a.$1(b)
return P.e5(null,null,this,a,b,c,d)},
aU:function(a,b,c,d,e,f){H.i(a,{func:1,ret:d,args:[e,f]})
H.m(b,e)
H.m(c,f)
if($.q===C.c)return a.$2(b,c)
return P.f4(null,null,this,a,b,c,d,e,f)}}
P.cO.prototype={
$0:function(){return this.a.aj(this.b,this.c)},
$S:function(){return{func:1,ret:this.c}}}
P.cN.prototype={
$0:function(){return this.a.aV(this.b)},
$S:1}
P.cP.prototype={
$1:function(a){var u=this.c
return this.a.aW(this.b,H.m(a,u),u)},
$S:function(){return{func:1,ret:-1,args:[this.c]}}}
P.cK.prototype={
gv:function(a){var u=this,t=new P.cL(u,u.r,u.$ti)
t.c=u.e
return t},
gk:function(a){return this.a},
q:function(a,b){var u,t
if(typeof b==="string"&&b!=="__proto__"){u=this.b
if(u==null)return!1
return H.e(u[b],"$iau")!=null}else{t=this.az(b)
return t}},
az:function(a){var u=this.d
if(u==null)return!1
return this.a8(u[this.a6(a)],a)>=0},
n:function(a,b){var u,t,s=this
H.m(b,H.l(s,0))
if(typeof b==="string"&&b!=="__proto__"){u=s.b
return s.a1(u==null?s.b=P.dp():u,b)}else if(typeof b==="number"&&(b&1073741823)===b){t=s.c
return s.a1(t==null?s.c=P.dp():t,b)}else return s.aw(b)},
aw:function(a){var u,t,s,r=this
H.m(a,H.l(r,0))
u=r.d
if(u==null)u=r.d=P.dp()
t=r.a6(a)
s=u[t]
if(s==null)u[t]=[r.T(a)]
else{if(r.a8(s,a)>=0)return!1
s.push(r.T(a))}return!0},
a1:function(a,b){H.m(b,H.l(this,0))
if(H.e(a[b],"$iau")!=null)return!1
a[b]=this.T(b)
return!0},
T:function(a){var u=this,t=new P.au(H.m(a,H.l(u,0)))
if(u.e==null)u.e=u.f=t
else u.f=u.f.b=t;++u.a
u.r=1073741823&u.r+1
return t},
a6:function(a){return J.bj(a)&1073741823},
a8:function(a,b){var u,t
if(a==null)return-1
u=a.length
for(t=0;t<u;++t)if(J.bi(a[t].a,b))return t
return-1}}
P.au.prototype={}
P.cL.prototype={
gm:function(){return this.d},
l:function(){var u=this,t=u.a
if(u.b!==t.r)throw H.h(P.a5(t))
else{t=u.c
if(t==null){u.sa3(null)
return!1}else{u.sa3(H.m(t.a,H.l(u,0)))
u.c=u.c.b
return!0}}},
sa3:function(a){this.d=H.m(a,H.l(this,0))},
$iR:1}
P.bZ.prototype={$iv:1,$ip:1}
P.E.prototype={
gv:function(a){return new H.aS(a,this.gk(a),[H.dA(this,a,"E",0)])},
C:function(a,b){return this.u(a,b)},
h:function(a){return P.di(a,"[","]")}}
P.c_.prototype={}
P.c0.prototype={
$2:function(a,b){var u,t=this.a
if(!t.a)this.b.a+=", "
t.a=!1
t=this.b
u=t.a+=H.d(a)
t.a=u+": "
t.a+=H.d(b)},
$S:16}
P.ab.prototype={
p:function(a,b){var u,t,s=this
H.i(b,{func:1,ret:-1,args:[H.aA(s,"ab",0),H.aA(s,"ab",1)]})
for(u=J.bk(s.gD());u.l();){t=u.gm()
b.$2(t,s.u(0,t))}},
gk:function(a){return J.aE(this.gD())},
h:function(a){return P.dU(this)},
$idT:1}
P.cR.prototype={
K:function(a,b){var u
for(u=J.bk(H.du(b,"$iv",this.$ti,"$av"));u.l();)this.n(0,u.gm())},
h:function(a){return P.di(this,"{","}")},
$iv:1,
$ifC:1}
P.b5.prototype={}
P.w.prototype={}
P.d5.prototype={}
P.ak.prototype={
F:function(a,b){if(b==null)return!1
return b instanceof P.ak&&this.a===b.a},
gt:function(a){return C.b.gt(this.a)},
h:function(a){var u,t,s,r=new P.bz(),q=this.a
if(q<0)return"-"+new P.ak(0-q).h(0)
u=r.$1(C.b.J(q,6e7)%60)
t=r.$1(C.b.J(q,1e6)%60)
s=new P.by().$1(q%1e6)
return""+C.b.J(q,36e8)+":"+H.d(u)+":"+H.d(t)+"."+H.d(s)}}
P.by.prototype={
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a},
$S:7}
P.bz.prototype={
$1:function(a){if(a>=10)return""+a
return"0"+a},
$S:7}
P.a6.prototype={}
P.bn.prototype={
h:function(a){return"Assertion failed"}}
P.aZ.prototype={
h:function(a){return"Throw of null."}}
P.O.prototype={
gP:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gO:function(){return""},
h:function(a){var u,t,s,r,q=this,p=q.c,o=p!=null?" ("+p+")":""
p=q.d
u=p==null?"":": "+p
t=q.gP()+o+u
if(!q.a)return t
s=q.gO()
r=P.bC(q.b)
return t+s+": "+r}}
P.ao.prototype={
gP:function(){return"RangeError"},
gO:function(){var u,t,s=this.e
if(s==null){s=this.f
u=s!=null?": Not less than or equal to "+H.d(s):""}else{t=this.f
if(t==null)u=": Not greater than or equal to "+H.d(s)
else if(t>s)u=": Not in range "+H.d(s)+".."+H.d(t)+", inclusive"
else u=t<s?": Valid value range is empty":": Only valid value is "+H.d(s)}return u}}
P.bM.prototype={
gP:function(){return"RangeError"},
gO:function(){var u,t=H.a3(this.b)
if(typeof t!=="number")return t.b3()
if(t<0)return": index must not be negative"
u=this.f
if(u===0)return": no indices are valid"
return": index should be less than "+H.d(u)},
gk:function(a){return this.f}}
P.cm.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.ck.prototype={
h:function(a){var u=this.a
return u!=null?"UnimplementedError: "+u:"UnimplementedError"}}
P.b1.prototype={
h:function(a){return"Bad state: "+this.a}}
P.bv.prototype={
h:function(a){var u=this.a
if(u==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+P.bC(u)+"."}}
P.b0.prototype={
h:function(a){return"Stack Overflow"},
$ia6:1}
P.bw.prototype={
h:function(a){var u=this.a
return u==null?"Reading static variable during its initialization":"Reading static variable '"+u+"' during its initialization"}}
P.cz.prototype={
h:function(a){return"Exception: "+this.a}}
P.X.prototype={}
P.o.prototype={}
P.v.prototype={
M:function(a,b){var u=H.aA(this,"v",0)
return new H.b2(this,H.i(b,{func:1,ret:P.w,args:[u]}),[u])},
gk:function(a){var u,t=this.gv(this)
for(u=0;t.l();)++u
return u},
h:function(a){return P.eI(this,"(",")")}}
P.R.prototype={}
P.p.prototype={$iv:1}
P.t.prototype={
gt:function(a){return P.n.prototype.gt.call(this,this)},
h:function(a){return"null"}}
P.aC.prototype={}
P.n.prototype={constructor:P.n,$in:1,
F:function(a,b){return this===b},
gt:function(a){return H.an(this)},
h:function(a){return"Instance of '"+H.d(H.b_(this))+"'"},
toString:function(){return this.h(this)}}
P.B.prototype={}
P.j.prototype={}
P.ap.prototype={
gk:function(a){return this.a.length},
h:function(a){var u=this.a
return u.charCodeAt(0)==0?u:u}}
W.c.prototype={}
W.aG.prototype={
h:function(a){return String(a)},
$iaG:1}
W.bl.prototype={
h:function(a){return String(a)}}
W.af.prototype={$iaf:1}
W.U.prototype={$iU:1}
W.ai.prototype={$iai:1}
W.aI.prototype={
aQ:function(a,b,c,d){a.putImageData(P.fe(b),c,d)
return}}
W.V.prototype={
gk:function(a){return a.length}}
W.aJ.prototype={}
W.bx.prototype={
h:function(a){return String(a)}}
W.a.prototype={
gaH:function(a){return new W.cw(a)},
h:function(a){return a.localName},
ag:function(a,b,c,d){var u,t,s,r
if(c==null){u=$.dO
if(u==null){u=H.r([],[W.H])
t=new W.c1(u)
C.a.n(u,W.eV(null))
C.a.n(u,W.eY())
$.dO=t
d=t}else d=u
u=$.dN
if(u==null){u=new W.cY(d)
$.dN=u
c=u}else{u.a=d
c=u}}if($.P==null){u=document
t=u.implementation.createHTMLDocument("")
$.P=t
$.dg=t.createRange()
t=$.P.createElement("base")
H.e(t,"$iaf")
t.href=u.baseURI
$.P.head.appendChild(t)}u=$.P
if(u.body==null){t=u.createElement("body")
u.body=H.e(t,"$iU")}u=$.P
if(!!this.$iU)s=u.body
else{s=u.createElement(a.tagName)
$.P.body.appendChild(s)}if("createContextualFragment" in window.Range.prototype&&!C.a.q(C.z,a.tagName)){$.dg.selectNodeContents(s)
r=$.dg.createContextualFragment(b)}else{s.innerHTML=b
r=$.P.createDocumentFragment()
for(;u=s.firstChild,u!=null;)r.appendChild(u)}u=$.P.body
if(s==null?u!=null:s!==u)J.dI(s)
c.Y(r)
document.adoptNode(r)
return r},
$ia:1,
gak:function(a){return a.tagName}}
W.bB.prototype={
$1:function(a){return!!J.x(H.e(a,"$ik")).$ia},
$S:17}
W.b.prototype={$ib:1}
W.W.prototype={
ax:function(a,b,c,d){return a.addEventListener(b,H.az(H.i(c,{func:1,args:[W.b]}),1),!1)},
$iW:1}
W.bD.prototype={
gk:function(a){return a.length}}
W.a8.prototype={$ia8:1,
gah:function(a){return a.data}}
W.S.prototype={$iS:1}
W.aT.prototype={
h:function(a){return String(a)},
$iaT:1}
W.cv.prototype={
i:function(a,b,c){var u,t
H.e(c,"$ik")
u=this.a
t=u.childNodes
if(b<0||b>=t.length)return H.u(t,b)
u.replaceChild(c,t[b])},
gv:function(a){var u=this.a.childNodes
return new W.aM(u,u.length,[H.dA(C.B,u,"Q",0)])},
gk:function(a){return this.a.childNodes.length},
u:function(a,b){var u=this.a.childNodes
if(b<0||b>=u.length)return H.u(u,b)
return u[b]},
$aE:function(){return[W.k]},
$av:function(){return[W.k]},
$ap:function(){return[W.k]}}
W.k.prototype={
aR:function(a){var u=a.parentNode
if(u!=null)u.removeChild(a)},
h:function(a){var u=a.nodeValue
return u==null?this.am(a):u},
$ik:1}
W.am.prototype={
gk:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.dh(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.e(c,"$ik")
throw H.h(P.M("Cannot assign element of immutable List."))},
C:function(a,b){if(b>=a.length)return H.u(a,b)
return a[b]},
$iaa:1,
$aaa:function(){return[W.k]},
$aE:function(){return[W.k]},
$iv:1,
$av:function(){return[W.k]},
$ip:1,
$ap:function(){return[W.k]},
$aQ:function(){return[W.k]}}
W.c9.prototype={
gk:function(a){return a.length}}
W.aq.prototype={$iaq:1}
W.D.prototype={}
W.as.prototype={$ias:1}
W.b6.prototype={
gk:function(a){return a.length},
u:function(a,b){if(b>>>0!==b||b>=a.length)throw H.h(P.dh(b,a,null,null,null))
return a[b]},
i:function(a,b,c){H.e(c,"$ik")
throw H.h(P.M("Cannot assign element of immutable List."))},
C:function(a,b){if(b>=a.length)return H.u(a,b)
return a[b]},
$iaa:1,
$aaa:function(){return[W.k]},
$aE:function(){return[W.k]},
$iv:1,
$av:function(){return[W.k]},
$ip:1,
$ap:function(){return[W.k]},
$aQ:function(){return[W.k]}}
W.cu.prototype={
p:function(a,b){var u,t,s,r,q
H.i(b,{func:1,ret:-1,args:[P.j,P.j]})
for(u=this.gD(),t=u.length,s=this.a,r=0;r<u.length;u.length===t||(0,H.dD)(u),++r){q=u[r]
b.$2(q,s.getAttribute(q))}},
gD:function(){var u,t,s,r=this.a.attributes,q=H.r([],[P.j])
for(u=r.length,t=0;t<u;++t){if(t>=r.length)return H.u(r,t)
s=H.e(r[t],"$ias")
if(s.namespaceURI==null)C.a.n(q,s.name)}return q},
$aab:function(){return[P.j,P.j]},
$adT:function(){return[P.j,P.j]}}
W.cw.prototype={
u:function(a,b){return this.a.getAttribute(H.y(b))},
gk:function(a){return this.gD().length}}
W.dn.prototype={}
W.cx.prototype={}
W.cy.prototype={
$1:function(a){return this.a.$1(H.e(a,"$ib"))},
$S:18}
W.a0.prototype={
as:function(a){var u
if($.b4.a===0){for(u=0;u<262;++u)$.b4.i(0,C.y[u],W.fj())
for(u=0;u<12;++u)$.b4.i(0,C.e[u],W.fk())}},
L:function(a){return $.ev().q(0,W.aK(a))},
B:function(a,b,c){var u=$.b4.u(0,H.d(W.aK(a))+"::"+b)
if(u==null)u=$.b4.u(0,"*::"+b)
if(u==null)return!1
return H.fd(u.$4(a,b,c,this))},
$iH:1}
W.Q.prototype={
gv:function(a){return new W.aM(a,this.gk(a),[H.dA(this,a,"Q",0)])}}
W.c1.prototype={
L:function(a){return C.a.ad(this.a,new W.c3(a))},
B:function(a,b,c){return C.a.ad(this.a,new W.c2(a,b,c))},
$iH:1}
W.c3.prototype={
$1:function(a){return H.e(a,"$iH").L(this.a)},
$S:8}
W.c2.prototype={
$1:function(a){return H.e(a,"$iH").B(this.a,this.b,this.c)},
$S:8}
W.b9.prototype={
at:function(a,b,c,d){var u,t,s
this.a.K(0,c)
u=b.M(0,new W.cS())
t=b.M(0,new W.cT())
this.b.K(0,u)
s=this.c
s.K(0,C.A)
s.K(0,t)},
L:function(a){return this.a.q(0,W.aK(a))},
B:function(a,b,c){var u=this,t=W.aK(a),s=u.c
if(s.q(0,H.d(t)+"::"+b))return u.d.aG(c)
else if(s.q(0,"*::"+b))return u.d.aG(c)
else{s=u.b
if(s.q(0,H.d(t)+"::"+b))return!0
else if(s.q(0,"*::"+b))return!0
else if(s.q(0,H.d(t)+"::*"))return!0
else if(s.q(0,"*::*"))return!0}return!1},
$iH:1}
W.cS.prototype={
$1:function(a){return!C.a.q(C.e,H.y(a))},
$S:9}
W.cT.prototype={
$1:function(a){return C.a.q(C.e,H.y(a))},
$S:9}
W.cU.prototype={
B:function(a,b,c){if(this.ap(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.q(0,b)
return!1}}
W.cV.prototype={
$1:function(a){return"TEMPLATE::"+H.d(H.y(a))},
$S:19}
W.aM.prototype={
l:function(){var u=this,t=u.c+1,s=u.b
if(t<s){u.saa(J.dG(u.a,t))
u.c=t
return!0}u.saa(null)
u.c=s
return!1},
gm:function(){return this.d},
saa:function(a){this.d=H.m(a,H.l(this,0))},
$iR:1}
W.H.prototype={}
W.cQ.prototype={$ifO:1}
W.cY.prototype={
Y:function(a){new W.cZ(this).$2(a,null)},
G:function(a,b){if(b==null)J.dI(a)
else b.removeChild(a)},
aD:function(a,b){var u,t,s,r,q,p=!0,o=null,n=null
try{o=J.ey(a)
n=o.a.getAttribute("is")
H.e(a,"$ia")
u=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var m=c.childNodes
if(c.lastChild&&c.lastChild!==m[m.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var l=0
if(c.children)l=c.children.length
for(var k=0;k<l;k++){var j=c.children[k]
if(j.id=='attributes'||j.name=='attributes'||j.id=='lastChild'||j.name=='lastChild'||j.id=='children'||j.name=='children')return true}return false}(a)
p=H.d3(u)?!0:!(a.attributes instanceof NamedNodeMap)}catch(r){H.I(r)}t="element unprintable"
try{t=J.aF(a)}catch(r){H.I(r)}try{s=W.aK(a)
this.aC(H.e(a,"$ia"),b,p,t,s,H.e(o,"$idT"),H.y(n))}catch(r){if(H.I(r) instanceof P.O)throw r
else{this.G(a,b)
window
q="Removing corrupted element "+H.d(t)
if(typeof console!="undefined")window.console.warn(q)}}},
aC:function(a,b,c,d,e,f,g){var u,t,s,r,q,p,o=this
if(c){o.G(a,b)
window
u="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")window.console.warn(u)
return}if(!o.a.L(a)){o.G(a,b)
window
u="Removing disallowed element <"+H.d(e)+"> from "+H.d(b)
if(typeof console!="undefined")window.console.warn(u)
return}if(g!=null)if(!o.a.B(a,"is",g)){o.G(a,b)
window
u="Removing disallowed type extension <"+H.d(e)+' is="'+g+'">'
if(typeof console!="undefined")window.console.warn(u)
return}u=f.gD()
t=H.r(u.slice(0),[H.l(u,0)])
for(s=f.gD().length-1,u=f.a;s>=0;--s){if(s>=t.length)return H.u(t,s)
r=t[s]
q=o.a
p=J.ez(r)
H.y(r)
if(!q.B(a,p,u.getAttribute(r))){window
q="Removing disallowed attribute <"+H.d(e)+" "+r+'="'+H.d(u.getAttribute(r))+'">'
if(typeof console!="undefined")window.console.warn(q)
u.removeAttribute(r)}}if(!!J.x(a).$iaq)o.Y(a.content)},
$ifB:1}
W.cZ.prototype={
$2:function(a,b){var u,t,s,r,q,p=this.a
switch(a.nodeType){case 1:p.aD(a,b)
break
case 8:case 11:case 3:case 4:break
default:p.G(a,b)}u=a.lastChild
for(p=a==null;null!=u;){t=null
try{t=u.previousSibling}catch(s){H.I(s)
r=H.e(u,"$ik")
if(p){q=r.parentNode
if(q!=null)q.removeChild(r)}else a.removeChild(r)
u=null
t=a.lastChild}if(u!=null)this.$2(u,a)
u=H.e(t,"$ik")}},
$S:20}
W.b7.prototype={}
W.b8.prototype={}
W.bd.prototype={}
W.be.prototype={}
P.bc.prototype={$ia8:1,
gah:function(a){return this.a}}
P.cJ.prototype={
aP:function(a){if(a<=0||a>4294967296)throw H.h(P.eO("max must be in range 0 < max \u2264 2^32, was "+a))
return Math.random()*a>>>0}}
Y.aN.prototype={
ar:function(){var u,t,s
$.bH=0
u=document.createElement("div")
u.id="score"
this.b=u
u=P.o
$.aP=P.dS(20,0,u)
t=new Array(10)
t.fixed$length=Array
u=H.r(t,[u])
t=[P.p,P.o]
s=H.l(u,0)
$.aO=new H.aU(u,H.i(new Y.bF(),{func:1,ret:t,args:[s]}),[s,t]).aY(0)},
X:function(){var u,t
switch(C.t.aP(7)){case 0:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.bL(u)
C.a.i(u,0,new Y.f(C.b.j(3),-1))
C.a.i(u,1,new Y.f(C.b.j(4),-1))
C.a.i(u,2,new Y.f(C.b.j(5),-1))
C.a.i(u,3,new Y.f(C.b.j(6),-1))
t.b=H.e(u[1],"$if")
t.c="cyan"
return t
case 1:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.c5(u)
C.a.i(u,0,new Y.f(C.b.j(5),-1))
C.a.i(u,1,new Y.f(C.b.j(6),-1))
C.a.i(u,2,new Y.f(C.b.j(5),-0.0))
C.a.i(u,3,new Y.f(C.b.j(6),0))
t.b=H.e(u[1],"$if")
t.c="yellow"
return t
case 2:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.bN(u)
C.a.i(u,0,new Y.f(C.b.j(4),0))
C.a.i(u,1,new Y.f(C.b.j(5),0))
C.a.i(u,2,new Y.f(C.b.j(6),0))
C.a.i(u,3,new Y.f(C.b.j(4),-1))
t.b=H.e(u[1],"$if")
t.c="blue"
return t
case 3:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.cf(u)
C.a.i(u,0,new Y.f(C.b.j(4),0))
C.a.i(u,1,new Y.f(C.b.j(5),0))
C.a.i(u,2,new Y.f(C.b.j(6),0))
C.a.i(u,3,new Y.f(C.b.j(5),-1))
t.b=H.e(u[1],"$if")
t.c="purple"
return t
case 4:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.bU(u)
C.a.i(u,0,new Y.f(C.b.j(4),0))
C.a.i(u,1,new Y.f(C.b.j(5),0))
C.a.i(u,2,new Y.f(C.b.j(6),0))
C.a.i(u,3,new Y.f(C.b.j(6),-1))
t.b=H.e(u[1],"$if")
t.c="orange"
return t
case 5:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.co(u)
C.a.i(u,0,new Y.f(C.b.j(4),0))
C.a.i(u,1,new Y.f(C.b.j(5),0))
C.a.i(u,2,new Y.f(C.b.j(5),-1))
C.a.i(u,3,new Y.f(C.b.j(6),-1))
t.b=H.e(u[1],"$if")
t.c="red"
return t
case 6:u=new Array(4)
u.fixed$length=Array
u=H.r(u,[Y.f])
t=new Y.c8(u)
C.a.i(u,0,new Y.f(C.b.j(4),-1))
C.a.i(u,1,new Y.f(C.b.j(5),-1))
C.a.i(u,2,new Y.f(C.b.j(5),0))
C.a.i(u,3,new Y.f(C.b.j(6),0))
t.b=H.e(u[1],"$if")
t.c="green"
return t}u=new Array(4)
u.fixed$length=Array
return new Y.aH(H.r(u,[Y.f]))},
aK:function(){var u,t,s,r,q,p,o
for(u=0;t=$.aP,t.length,u<20;++u)if(t[u]===10){s=P.ff($.a7.getImageData(0,0,200,20*u))
t=$.a7;(t&&C.u).aQ(t,s,0,20)
for(r=u;r>0;r=q){for(q=r-1,p=0;p<10;++p){t=$.aO
if(p>=t.length)return H.u(t,p)
t=t[p]
o=J.bh(t)
o.i(t,r,o.u(t,q))}t=$.aP
o=t[q]
t.length
if(r<0||r>=20)return H.u(t,r)
t[r]=o}t=$.aP;(t&&C.a).i(t,0,0)
t=$.aO;(t&&C.a).p(t,new Y.bE())
t=$.bH
if(typeof t!=="number")return t.A()
$.bH=t+1}},
b1:function(){var u,t,s,r,q,p
for(u=this.c.a,t=0;t<4;++t){s=u[t]
r=s.a
if(r<10)if(r>=0){q=s.b
if(q<20)if(q>=0){p=$.aO
if(r<0||r>=p.length)return H.u(p,r)
q=J.bi(J.dG(p[r],q),1)
r=q}else r=!0
else r=!0}else r=!0
else r=!0
if(r)return!1}return!0},
E:function(a){var u,t,s,r=this
$.a7.fillStyle="grey"
C.a.p(r.c.a,new Y.bI())
u=a==="rotate"
t=r.c
if(u)t.aT()
else t.H(a)
s=r.b1()
if(!s){if(u)r.c.aS()
if(a==="left")r.c.H("right")
if(a==="right")r.c.H("left")
if(a==="down")r.c.H("up")
if(a==="up")r.c.H("down")}u=$.a7
t=r.c
u.fillStyle=t.c
C.a.p(t.a,new Y.bJ())
return s},
b0:function(a){var u,t,s=this
H.e(a,"$iK")
u=s.b
t="<p>Score: "+H.d($.bH)+" Lines</p>"
u.textContent=null
u.appendChild(C.v.ag(u,t,null,null))
if(!s.E("down")){C.a.p(s.c.a,new Y.bK())
s.aK()
s.c=s.X()
if(!s.E("down"))a.aJ()}},
aM:function(a){var u=W.S
W.e0(document,"keydown",H.i(new Y.bG(this,a),{func:1,ret:-1,args:[u]}),!1,u)}}
Y.bF.prototype={
$1:function(a){H.a3(a)
return P.dS(20,0,P.o)},
$S:22}
Y.bE.prototype={
$1:function(a){J.dH(H.du(a,"$ip",[P.o],"$ap"),0,0)
return 0},
$S:23}
Y.bI.prototype={
$1:function(a){H.e(a,"$if")
$.a7.fillRect(a.a*20,a.b*20,20,20)},
$S:2}
Y.bJ.prototype={
$1:function(a){H.e(a,"$if")
$.a7.fillRect(a.a*20,a.b*20,20,20)},
$S:2}
Y.bK.prototype={
$1:function(a){var u,t
H.e(a,"$if")
u=$.aO
t=a.a
if(t<0||t>=u.length)return H.u(u,t)
J.dH(u[t],a.b,1)
t=$.aP
u=a.b
t.length
if(u<0||u>=20)return H.u(t,u);(t&&C.a).i(t,u,t[u]+1)},
$S:2}
Y.bG.prototype={
$1:function(a){var u,t=this
H.e(a,"$iS")
if(t.b.b!=null){if(a.keyCode===37)t.a.E("left")
if(a.keyCode===38)t.a.E("rotate")
if(a.keyCode===39)t.a.E("right")
if(a.keyCode===40)t.a.E("down")
if(a.keyCode===32)for(u=t.a;u.E("down"););}},
$S:24}
Y.aH.prototype={
H:function(a){var u=this
switch(a){case"left":C.a.p(u.a,new Y.bo())
break
case"right":C.a.p(u.a,new Y.bp())
break
case"up":C.a.p(u.a,new Y.bq())
break
case"down":C.a.p(u.a,new Y.br())
break}},
aT:function(){C.a.p(this.a,new Y.bt(this))},
aS:function(){C.a.p(this.a,new Y.bs(this))}}
Y.bo.prototype={
$1:function(a){return--H.e(a,"$if").a},
$S:3}
Y.bp.prototype={
$1:function(a){return++H.e(a,"$if").a},
$S:3}
Y.bq.prototype={
$1:function(a){return--H.e(a,"$if").b},
$S:3}
Y.br.prototype={
$1:function(a){return++H.e(a,"$if").b},
$S:3}
Y.bt.prototype={
$1:function(a){var u,t,s,r,q
H.e(a,"$if")
u=a.a
t=this.a.b
s=t.a
r=a.b
q=t.b
a.a=s-r+q
a.b=q+u-t.a},
$S:2}
Y.bs.prototype={
$1:function(a){var u,t,s,r,q
H.e(a,"$if")
u=a.a
t=this.a.b
s=t.a
r=a.b
q=t.b
a.a=s+r-q
a.b=q-u+t.a},
$S:2}
Y.bL.prototype={}
Y.c5.prototype={}
Y.bN.prototype={}
Y.bU.prototype={}
Y.cf.prototype={}
Y.co.prototype={}
Y.c8.prototype={}
Y.f.prototype={};(function aliases(){var u=J.z.prototype
u.am=u.h
u=J.aR.prototype
u.ao=u.h
u=P.v.prototype
u.an=u.M
u=W.b9.prototype
u.ap=u.B})();(function installTearOffs(){var u=hunkHelpers._static_1,t=hunkHelpers._static_0,s=hunkHelpers.installStaticTearOff,r=hunkHelpers._instance_1u
u(P,"fa","eR",4)
u(P,"fb","eS",4)
u(P,"fc","eT",4)
t(P,"ea","f6",1)
s(W,"fj",4,null,["$4"],["eW"],10,0)
s(W,"fk",4,null,["$4"],["eX"],10,0)
r(Y.aN.prototype,"gb_","b0",21)})();(function inheritance(){var u=hunkHelpers.mixin,t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.n,null)
s(P.n,[H.dk,J.z,J.bm,P.v,H.aS,P.R,H.aL,H.ch,P.a6,H.aj,H.ba,P.ab,H.bV,H.bX,P.bb,P.N,P.F,P.b3,P.cb,P.cc,P.K,P.A,P.d_,P.cR,P.au,P.cL,P.b5,P.E,P.w,P.aC,P.ak,P.b0,P.cz,P.X,P.p,P.t,P.B,P.j,P.ap,W.a0,W.Q,W.c1,W.b9,W.aM,W.H,W.cQ,W.cY,P.bc,P.cJ,Y.aN,Y.aH,Y.f])
s(J.z,[J.bO,J.bQ,J.aR,J.Y,J.bR,J.a9,H.aX,W.W,W.aI,W.bx,W.b,W.a8,W.aT,W.b7,W.bd])
s(J.aR,[J.c6,J.ar,J.Z])
t(J.dj,J.Y)
s(J.bR,[J.aQ,J.bP])
s(P.v,[H.bA,H.b2])
s(H.bA,[H.a_,H.bW])
t(H.aU,H.a_)
t(H.cn,P.R)
s(P.a6,[H.c4,H.bT,H.cl,H.cj,H.c7,P.bn,P.aZ,P.O,P.cm,P.ck,P.b1,P.bv,P.bw])
s(H.aj,[H.de,H.cg,H.d8,H.d9,H.da,P.cr,P.cq,P.cs,P.ct,P.cX,P.cW,P.cA,P.cE,P.cB,P.cC,P.cD,P.cH,P.cI,P.cG,P.cF,P.cd,P.ce,P.d1,P.cO,P.cN,P.cP,P.c0,P.by,P.bz,W.bB,W.cy,W.c3,W.c2,W.cS,W.cT,W.cV,W.cZ,Y.bF,Y.bE,Y.bI,Y.bJ,Y.bK,Y.bG,Y.bo,Y.bp,Y.bq,Y.br,Y.bt,Y.bs])
s(H.cg,[H.ca,H.ag])
t(H.cp,P.bn)
t(P.c_,P.ab)
s(P.c_,[H.bS,W.cu])
t(H.aV,H.aX)
t(H.av,H.aV)
t(H.aw,H.av)
t(H.aW,H.aw)
t(H.aY,H.aW)
t(P.cM,P.d_)
t(P.cK,P.cR)
t(P.bZ,P.b5)
s(P.aC,[P.d5,P.o])
s(P.O,[P.ao,P.bM])
t(W.k,W.W)
s(W.k,[W.a,W.V,W.as])
t(W.c,W.a)
s(W.c,[W.aG,W.bl,W.af,W.U,W.ai,W.aJ,W.bD,W.c9,W.aq])
t(W.D,W.b)
t(W.S,W.D)
t(W.cv,P.bZ)
t(W.b8,W.b7)
t(W.am,W.b8)
t(W.be,W.bd)
t(W.b6,W.be)
t(W.cw,W.cu)
t(W.dn,P.cb)
t(W.cx,P.cc)
t(W.cU,W.b9)
s(Y.aH,[Y.bL,Y.c5,Y.bN,Y.bU,Y.cf,Y.co,Y.c8])
u(H.av,P.E)
u(H.aw,H.aL)
u(P.b5,P.E)
u(W.b7,P.E)
u(W.b8,W.Q)
u(W.bd,P.E)
u(W.be,W.Q)})()
var v={mangledGlobalNames:{o:"int",d5:"double",aC:"num",j:"String",w:"bool",t:"Null",p:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[{func:1,ret:P.t},{func:1,ret:-1},{func:1,ret:P.t,args:[Y.f]},{func:1,ret:P.o,args:[Y.f]},{func:1,ret:-1,args:[{func:1,ret:-1}]},{func:1,args:[,]},{func:1,ret:P.t,args:[,]},{func:1,ret:P.j,args:[P.o]},{func:1,ret:P.w,args:[W.H]},{func:1,ret:P.w,args:[P.j]},{func:1,ret:P.w,args:[W.a,P.j,P.j,W.a0]},{func:1,args:[,P.j]},{func:1,args:[P.j]},{func:1,ret:P.t,args:[{func:1,ret:-1}]},{func:1,ret:P.t,args:[,],opt:[P.B]},{func:1,ret:[P.F,,],args:[,]},{func:1,ret:P.t,args:[,,]},{func:1,ret:P.w,args:[W.k]},{func:1,args:[W.b]},{func:1,ret:P.j,args:[P.j]},{func:1,ret:-1,args:[W.k,W.k]},{func:1,ret:-1,args:[P.K]},{func:1,ret:[P.p,P.o],args:[P.o]},{func:1,ret:P.o,args:[[P.p,P.o]]},{func:1,ret:P.t,args:[W.S]}],interceptorsByTag:null,leafTags:null};(function constants(){var u=hunkHelpers.makeConstList
C.l=W.U.prototype
C.u=W.aI.prototype
C.v=W.aJ.prototype
C.w=J.z.prototype
C.a=J.Y.prototype
C.b=J.aQ.prototype
C.j=J.a9.prototype
C.x=J.Z.prototype
C.B=W.am.prototype
C.k=J.c6.prototype
C.f=J.ar.prototype
C.h=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.m=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.r=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.n=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.o=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
C.q=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
C.p=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
C.i=function(hooks) { return hooks; }

C.t=new P.cJ()
C.c=new P.cM()
C.y=H.r(u(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.j])
C.z=H.r(u(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),[P.j])
C.A=H.r(u([]),[P.j])
C.d=H.r(u(["bind","if","ref","repeat","syntax"]),[P.j])
C.e=H.r(u(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.j])})();(function staticFields(){$.J=0
$.ah=null
$.dK=null
$.dq=!1
$.ed=null
$.e7=null
$.ei=null
$.d4=null
$.db=null
$.dB=null
$.ac=null
$.ax=null
$.ay=null
$.dr=!1
$.q=C.c
$.C=[]
$.P=null
$.dg=null
$.dO=null
$.dN=null
$.b4=P.eM(P.j,P.X)
$.bH=null
$.a7=null
$.aO=null
$.aP=null})();(function lazyInitializers(){var u=hunkHelpers.lazy
u($,"fz","ek",function(){return H.ec("_$dart_dartClosure")})
u($,"fA","dE",function(){return H.ec("_$dart_js")})
u($,"fD","el",function(){return H.L(H.ci({
toString:function(){return"$receiver$"}}))})
u($,"fE","em",function(){return H.L(H.ci({$method$:null,
toString:function(){return"$receiver$"}}))})
u($,"fF","en",function(){return H.L(H.ci(null))})
u($,"fG","eo",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"fJ","er",function(){return H.L(H.ci(void 0))})
u($,"fK","es",function(){return H.L(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(t){return t.message}}())})
u($,"fI","eq",function(){return H.L(H.dZ(null))})
u($,"fH","ep",function(){return H.L(function(){try{null.$method$}catch(t){return t.message}}())})
u($,"fM","eu",function(){return H.L(H.dZ(void 0))})
u($,"fL","et",function(){return H.L(function(){try{(void 0).$method$}catch(t){return t.message}}())})
u($,"fQ","dF",function(){return P.eQ()})
u($,"fR","ev",function(){return P.dR(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],P.j)})})();(function nativeSupport(){!function(){var u=function(a){var o={}
o[a]=1
return Object.keys(hunkHelpers.convertToFastObject(o))[0]}
v.getIsolateTag=function(a){return u("___dart_"+a+v.isolateTag)}
var t="___dart_isolate_tags_"
var s=Object[t]||(Object[t]=Object.create(null))
var r="_ZxYxX"
for(var q=0;;q++){var p=u(r+"_"+q+"_")
if(!(p in s)){s[p]=1
v.isolateTag=p
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({CanvasGradient:J.z,CanvasPattern:J.z,DOMError:J.z,DOMImplementation:J.z,MediaError:J.z,NavigatorUserMediaError:J.z,OverconstrainedError:J.z,PositionError:J.z,Range:J.z,SQLError:J.z,ArrayBufferView:H.aX,Uint8ClampedArray:H.aY,CanvasPixelArray:H.aY,HTMLAudioElement:W.c,HTMLBRElement:W.c,HTMLButtonElement:W.c,HTMLContentElement:W.c,HTMLDListElement:W.c,HTMLDataElement:W.c,HTMLDataListElement:W.c,HTMLDetailsElement:W.c,HTMLDialogElement:W.c,HTMLEmbedElement:W.c,HTMLFieldSetElement:W.c,HTMLHRElement:W.c,HTMLHeadElement:W.c,HTMLHeadingElement:W.c,HTMLHtmlElement:W.c,HTMLIFrameElement:W.c,HTMLImageElement:W.c,HTMLInputElement:W.c,HTMLLIElement:W.c,HTMLLabelElement:W.c,HTMLLegendElement:W.c,HTMLLinkElement:W.c,HTMLMapElement:W.c,HTMLMediaElement:W.c,HTMLMenuElement:W.c,HTMLMetaElement:W.c,HTMLMeterElement:W.c,HTMLModElement:W.c,HTMLOListElement:W.c,HTMLObjectElement:W.c,HTMLOptGroupElement:W.c,HTMLOptionElement:W.c,HTMLOutputElement:W.c,HTMLParagraphElement:W.c,HTMLParamElement:W.c,HTMLPictureElement:W.c,HTMLPreElement:W.c,HTMLProgressElement:W.c,HTMLQuoteElement:W.c,HTMLScriptElement:W.c,HTMLShadowElement:W.c,HTMLSlotElement:W.c,HTMLSourceElement:W.c,HTMLSpanElement:W.c,HTMLStyleElement:W.c,HTMLTableCaptionElement:W.c,HTMLTableCellElement:W.c,HTMLTableDataCellElement:W.c,HTMLTableHeaderCellElement:W.c,HTMLTableColElement:W.c,HTMLTableElement:W.c,HTMLTableRowElement:W.c,HTMLTableSectionElement:W.c,HTMLTextAreaElement:W.c,HTMLTimeElement:W.c,HTMLTitleElement:W.c,HTMLTrackElement:W.c,HTMLUListElement:W.c,HTMLUnknownElement:W.c,HTMLVideoElement:W.c,HTMLDirectoryElement:W.c,HTMLFontElement:W.c,HTMLFrameElement:W.c,HTMLFrameSetElement:W.c,HTMLMarqueeElement:W.c,HTMLElement:W.c,HTMLAnchorElement:W.aG,HTMLAreaElement:W.bl,HTMLBaseElement:W.af,HTMLBodyElement:W.U,HTMLCanvasElement:W.ai,CanvasRenderingContext2D:W.aI,CDATASection:W.V,CharacterData:W.V,Comment:W.V,ProcessingInstruction:W.V,Text:W.V,HTMLDivElement:W.aJ,DOMException:W.bx,SVGAElement:W.a,SVGAnimateElement:W.a,SVGAnimateMotionElement:W.a,SVGAnimateTransformElement:W.a,SVGAnimationElement:W.a,SVGCircleElement:W.a,SVGClipPathElement:W.a,SVGDefsElement:W.a,SVGDescElement:W.a,SVGDiscardElement:W.a,SVGEllipseElement:W.a,SVGFEBlendElement:W.a,SVGFEColorMatrixElement:W.a,SVGFEComponentTransferElement:W.a,SVGFECompositeElement:W.a,SVGFEConvolveMatrixElement:W.a,SVGFEDiffuseLightingElement:W.a,SVGFEDisplacementMapElement:W.a,SVGFEDistantLightElement:W.a,SVGFEFloodElement:W.a,SVGFEFuncAElement:W.a,SVGFEFuncBElement:W.a,SVGFEFuncGElement:W.a,SVGFEFuncRElement:W.a,SVGFEGaussianBlurElement:W.a,SVGFEImageElement:W.a,SVGFEMergeElement:W.a,SVGFEMergeNodeElement:W.a,SVGFEMorphologyElement:W.a,SVGFEOffsetElement:W.a,SVGFEPointLightElement:W.a,SVGFESpecularLightingElement:W.a,SVGFESpotLightElement:W.a,SVGFETileElement:W.a,SVGFETurbulenceElement:W.a,SVGFilterElement:W.a,SVGForeignObjectElement:W.a,SVGGElement:W.a,SVGGeometryElement:W.a,SVGGraphicsElement:W.a,SVGImageElement:W.a,SVGLineElement:W.a,SVGLinearGradientElement:W.a,SVGMarkerElement:W.a,SVGMaskElement:W.a,SVGMetadataElement:W.a,SVGPathElement:W.a,SVGPatternElement:W.a,SVGPolygonElement:W.a,SVGPolylineElement:W.a,SVGRadialGradientElement:W.a,SVGRectElement:W.a,SVGScriptElement:W.a,SVGSetElement:W.a,SVGStopElement:W.a,SVGStyleElement:W.a,SVGElement:W.a,SVGSVGElement:W.a,SVGSwitchElement:W.a,SVGSymbolElement:W.a,SVGTSpanElement:W.a,SVGTextContentElement:W.a,SVGTextElement:W.a,SVGTextPathElement:W.a,SVGTextPositioningElement:W.a,SVGTitleElement:W.a,SVGUseElement:W.a,SVGViewElement:W.a,SVGGradientElement:W.a,SVGComponentTransferFunctionElement:W.a,SVGFEDropShadowElement:W.a,SVGMPathElement:W.a,Element:W.a,AbortPaymentEvent:W.b,AnimationEvent:W.b,AnimationPlaybackEvent:W.b,ApplicationCacheErrorEvent:W.b,BackgroundFetchClickEvent:W.b,BackgroundFetchEvent:W.b,BackgroundFetchFailEvent:W.b,BackgroundFetchedEvent:W.b,BeforeInstallPromptEvent:W.b,BeforeUnloadEvent:W.b,BlobEvent:W.b,CanMakePaymentEvent:W.b,ClipboardEvent:W.b,CloseEvent:W.b,CustomEvent:W.b,DeviceMotionEvent:W.b,DeviceOrientationEvent:W.b,ErrorEvent:W.b,ExtendableEvent:W.b,ExtendableMessageEvent:W.b,FetchEvent:W.b,FontFaceSetLoadEvent:W.b,ForeignFetchEvent:W.b,GamepadEvent:W.b,HashChangeEvent:W.b,InstallEvent:W.b,MediaEncryptedEvent:W.b,MediaKeyMessageEvent:W.b,MediaQueryListEvent:W.b,MediaStreamEvent:W.b,MediaStreamTrackEvent:W.b,MessageEvent:W.b,MIDIConnectionEvent:W.b,MIDIMessageEvent:W.b,MutationEvent:W.b,NotificationEvent:W.b,PageTransitionEvent:W.b,PaymentRequestEvent:W.b,PaymentRequestUpdateEvent:W.b,PopStateEvent:W.b,PresentationConnectionAvailableEvent:W.b,PresentationConnectionCloseEvent:W.b,ProgressEvent:W.b,PromiseRejectionEvent:W.b,PushEvent:W.b,RTCDataChannelEvent:W.b,RTCDTMFToneChangeEvent:W.b,RTCPeerConnectionIceEvent:W.b,RTCTrackEvent:W.b,SecurityPolicyViolationEvent:W.b,SensorErrorEvent:W.b,SpeechRecognitionError:W.b,SpeechRecognitionEvent:W.b,SpeechSynthesisEvent:W.b,StorageEvent:W.b,SyncEvent:W.b,TrackEvent:W.b,TransitionEvent:W.b,WebKitTransitionEvent:W.b,VRDeviceEvent:W.b,VRDisplayEvent:W.b,VRSessionEvent:W.b,MojoInterfaceRequestEvent:W.b,ResourceProgressEvent:W.b,USBConnectionEvent:W.b,IDBVersionChangeEvent:W.b,AudioProcessingEvent:W.b,OfflineAudioCompletionEvent:W.b,WebGLContextEvent:W.b,Event:W.b,InputEvent:W.b,Window:W.W,DOMWindow:W.W,EventTarget:W.W,HTMLFormElement:W.bD,ImageData:W.a8,KeyboardEvent:W.S,Location:W.aT,Document:W.k,DocumentFragment:W.k,HTMLDocument:W.k,ShadowRoot:W.k,XMLDocument:W.k,DocumentType:W.k,Node:W.k,NodeList:W.am,RadioNodeList:W.am,HTMLSelectElement:W.c9,HTMLTemplateElement:W.aq,CompositionEvent:W.D,FocusEvent:W.D,MouseEvent:W.D,DragEvent:W.D,PointerEvent:W.D,TextEvent:W.D,TouchEvent:W.D,WheelEvent:W.D,UIEvent:W.D,Attr:W.as,NamedNodeMap:W.b6,MozNamedAttrMap:W.b6})
hunkHelpers.setOrUpdateLeafTags({CanvasGradient:true,CanvasPattern:true,DOMError:true,DOMImplementation:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,Range:true,SQLError:true,ArrayBufferView:false,Uint8ClampedArray:true,CanvasPixelArray:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTextAreaElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,HTMLDivElement:true,DOMException:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,Window:true,DOMWindow:true,EventTarget:false,HTMLFormElement:true,ImageData:true,KeyboardEvent:true,Location:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLTemplateElement:true,CompositionEvent:true,FocusEvent:true,MouseEvent:true,DragEvent:true,PointerEvent:true,TextEvent:true,TouchEvent:true,WheelEvent:true,UIEvent:false,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true})
H.aV.$nativeSuperclassTag="ArrayBufferView"
H.av.$nativeSuperclassTag="ArrayBufferView"
H.aw.$nativeSuperclassTag="ArrayBufferView"
H.aW.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var u=document.scripts
function onLoad(b){for(var s=0;s<u.length;++s)u[s].removeEventListener("load",onLoad,false)
a(b.target)}for(var t=0;t<u.length;++t)u[t].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(F.ef,[])
else F.ef([])})})()
//# sourceMappingURL=main.dart.js.map
