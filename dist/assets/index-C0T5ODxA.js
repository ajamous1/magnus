(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const gh="174",pr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Tm=0,cu=1,Am=2,hf=1,Cm=2,wi=3,rs=0,dn=1,He=2,ts=0,mr=1,lc=2,hu=3,uu=4,Rm=5,Cs=100,Pm=101,Dm=102,Lm=103,Im=104,Um=200,Fm=201,Nm=202,Om=203,cc=204,hc=205,zm=206,Bm=207,km=208,Vm=209,Hm=210,Gm=211,Wm=212,Xm=213,Ym=214,uc=0,dc=1,fc=2,Er=3,pc=4,mc=5,_c=6,gc=7,vh=0,qm=1,$m=2,es=0,Zm=1,jm=2,Km=3,Jm=4,Qm=5,t_=6,e_=7,uf=300,br=301,wr=302,vc=303,xc=304,Ja=306,_o=1e3,Ps=1001,yc=1002,ri=1003,n_=1004,Oo=1005,ii=1006,ul=1007,Zi=1008,Ui=1009,df=1010,ff=1011,go=1012,xh=1013,Bs=1014,Pi=1015,Uo=1016,yh=1017,Mh=1018,Tr=1020,pf=35902,mf=1021,_f=1022,si=1023,gf=1024,vf=1025,_r=1026,Ar=1027,xf=1028,Sh=1029,yf=1030,Eh=1031,bh=1033,va=33776,xa=33777,ya=33778,Ma=33779,Mc=35840,Sc=35841,Ec=35842,bc=35843,wc=36196,Tc=37492,Ac=37496,Cc=37808,Rc=37809,Pc=37810,Dc=37811,Lc=37812,Ic=37813,Uc=37814,Fc=37815,Nc=37816,Oc=37817,zc=37818,Bc=37819,kc=37820,Vc=37821,Sa=36492,Hc=36494,Gc=36495,Mf=36283,Wc=36284,Xc=36285,Yc=36286,i_=3200,s_=3201,Sf=0,r_=1,$i="",_n="srgb",Cr="srgb-linear",Ia="linear",ye="srgb",$s=7680,du=519,o_=512,a_=513,l_=514,Ef=515,c_=516,h_=517,u_=518,d_=519,qc=35044,fu="300 es",Di=2e3,Ua=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let pu=1234567;const ro=Math.PI/180,vo=180/Math.PI;function pi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function oe(s,t,e){return Math.max(t,Math.min(e,s))}function wh(s,t){return(s%t+t)%t}function f_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function p_(s,t,e){return s!==t?(e-s)/(t-s):0}function oo(s,t,e){return(1-e)*s+e*t}function m_(s,t,e,n){return oo(s,t,1-Math.exp(-e*n))}function __(s,t=1){return t-Math.abs(wh(s,t*2)-t)}function g_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function v_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function x_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function y_(s,t){return s+Math.random()*(t-s)}function M_(s){return s*(.5-Math.random())}function S_(s){s!==void 0&&(pu=s);let t=pu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function E_(s){return s*ro}function b_(s){return s*vo}function w_(s){return(s&s-1)===0&&s!==0}function T_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function A_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function C_(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*f,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*f,a*c);break;case"ZYZ":s.set(l*f,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ve(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const bf={DEG2RAD:ro,RAD2DEG:vo,generateUUID:pi,clamp:oe,euclideanModulo:wh,mapLinear:f_,inverseLerp:p_,lerp:oo,damp:m_,pingpong:__,smoothstep:g_,smootherstep:v_,randInt:x_,randFloat:y_,randFloatSpread:M_,seededRandom:S_,degToRad:E_,radToDeg:b_,isPowerOfTwo:w_,ceilPowerOfTwo:T_,floorPowerOfTwo:A_,setQuaternionFromProperEuler:C_,normalize:ve,denormalize:ei};class Tt{constructor(t=0,e=0){Tt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class re{constructor(t,e,n,i,r,o,a,l,c){re.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],f=n[8],_=i[0],g=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],b=i[5],w=i[8];return r[0]=o*_+a*x+l*E,r[3]=o*g+a*y+l*b,r[6]=o*m+a*v+l*w,r[1]=c*_+h*x+u*E,r[4]=c*g+h*y+u*b,r[7]=c*m+h*v+u*w,r[2]=d*_+p*x+f*E,r[5]=d*g+p*y+f*b,r[8]=d*m+p*v+f*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,f=e*u+n*d+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return t[0]=u*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new re;function wf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Fa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function R_(){const s=Fa("canvas");return s.style.display="block",s}const mu={};function bs(s){s in mu||(mu[s]=!0,console.warn(s))}function P_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function D_(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function L_(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _u=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gu=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function I_(){const s={enabled:!0,workingColorSpace:Cr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(i.r=gr(i.r),i.g=gr(i.g),i.b=gr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===$i?Ia:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Cr]:{primaries:t,whitePoint:n,transfer:Ia,toXYZ:_u,fromXYZ:gu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:_u,fromXYZ:gu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),s}const pe=I_();function Ii(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function gr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class U_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=Fa("canvas")),Zs.width=t.width,Zs.height=t.height;const n=Zs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Fa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ii(e[n]/255)*255):e[n]=Ii(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let F_=0;class Th{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:F_++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fl(i[o].image)):r.push(fl(i[o]))}else r=fl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function fl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?U_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let N_=0;class fn extends Gs{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=Ps,i=Ps,r=ii,o=Zi,a=si,l=Ui,c=fn.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N_++}),this.uuid=pi(),this.name="",this.source=new Th(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Tt(0,0),this.repeat=new Tt(1,1),this.center=new Tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==uf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _o:t.x=t.x-Math.floor(t.x);break;case Ps:t.x=t.x<0?0:1;break;case yc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _o:t.y=t.y-Math.floor(t.y);break;case Ps:t.y=t.y<0?0:1;break;case yc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=uf;fn.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],f=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,E=(m+1)/2,b=(h+d)/4,w=(u+_)/4,C=(f+g)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=b/n,r=w/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=b/i,r=C/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=w/r,i=C/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-f)*(g-f)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-f)/x,this.y=(u-_)/x,this.z=(d-h)/x,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class O_ extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Th(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ks extends O_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tf extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class z_ extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ri,this.minFilter=ri,this.wrapR=Ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],p=r[o+1],f=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=f,t[e+3]=_;return}if(u!==_||l!==d||c!==p||h!==f){let g=1-a;const m=l*d+c*p+h*f+u*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),b=Math.atan2(E,m*x);g=Math.sin(g*b)/E,a=Math.sin(a*b)/E}const v=a*x;if(l=l*g+d*v,c=c*g+p*v,h=h*g+f*v,u=u*g+_*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*u+l*p-c*d,t[e+1]=l*f+h*d+c*u-a*p,t[e+2]=c*f+h*p+a*d-l*u,t[e+3]=h*f-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"YXZ":this._x=d*h*u+c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"ZXY":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u-d*p*f;break;case"ZYX":this._x=d*h*u-c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u+d*p*f;break;case"YZX":this._x=d*h*u+c*p*f,this._y=c*p*u+d*h*f,this._z=c*h*f-d*p*u,this._w=c*h*u-d*p*f;break;case"XZY":this._x=d*h*u-c*p*f,this._y=c*p*u-d*h*f,this._z=c*h*f+d*p*u,this._w=c*h*u+d*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(vu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(vu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(oe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(oe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new L,vu=new Vs;class us{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zo.copy(n.boundingBox)),zo.applyMatrix4(t.matrixWorld),this.union(zo)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xr),Bo.subVectors(this.max,Xr),js.subVectors(t.a,Xr),Ks.subVectors(t.b,Xr),Js.subVectors(t.c,Xr),Vi.subVectors(Ks,js),Hi.subVectors(Js,Ks),ms.subVectors(js,Js);let e=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-ms.z,ms.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,ms.z,0,-ms.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-ms.y,ms.x,0];return!ml(e,js,Ks,Js,Bo)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,js,Ks,Js,Bo))?!1:(ko.crossVectors(Vi,Hi),e=[ko.x,ko.y,ko.z],ml(e,js,Ks,Js,Bo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const yi=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,zo=new us,js=new L,Ks=new L,Js=new L,Vi=new L,Hi=new L,ms=new L,Xr=new L,Bo=new L,ko=new L,_s=new L;function ml(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){_s.fromArray(s,r);const a=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const B_=new us,Yr=new L,_l=new L;class Ws{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):B_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yr.subVectors(t,this.center);const e=Yr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Yr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yr.copy(t.center).add(_l)),this.expandByPoint(Yr.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new L,gl=new L,Vo=new L,Gi=new L,vl=new L,Ho=new L,xl=new L;class Qa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mi.copy(this.origin).addScaledVector(this.direction,e),Mi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gl.copy(t).add(e).multiplyScalar(.5),Vo.copy(e).sub(t).normalize(),Gi.copy(this.origin).sub(gl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Vo),a=Gi.dot(this.direction),l=-Gi.dot(Vo),c=Gi.lengthSq(),h=Math.abs(1-o*o);let u,d,p,f;if(h>0)if(u=o*l-a,d=o*a-l,f=r*h,u>=0)if(d>=-f)if(d<=f){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-f?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=f?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(gl).addScaledVector(Vo,d),p}intersectSphere(t,e){Mi.subVectors(t.center,this.origin);const n=Mi.dot(this.direction),i=Mi.dot(Mi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Mi)!==null}intersectTriangle(t,e,n,i,r){vl.subVectors(e,t),Ho.subVectors(n,t),xl.crossVectors(vl,Ho);let o=this.direction.dot(xl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,t);const l=a*this.direction.dot(Ho.crossVectors(Gi,Ho));if(l<0)return null;const c=a*this.direction.dot(vl.cross(Gi));if(c<0||l+c>o)return null;const h=-a*Gi.dot(xl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,f,_,g){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,_,g)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,f,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=p,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,p=o*u,f=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+f*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,p=l*u,f=c*h,_=c*u;e[0]=d+_*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,p=l*u,f=c*h,_=c*u;e[0]=d-_*a,e[4]=-o*u,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,p=o*u,f=a*h,_=a*u;e[0]=l*h,e[4]=f*c-p,e[8]=d*c+_,e[1]=l*u,e[5]=_*c+d,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,p=o*c,f=a*l,_=a*c;e[0]=l*h,e[4]=_-d*u,e[8]=f*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+f,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*l,p=o*c,f=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+_,e[5]=o*h,e[9]=p*u-f,e[2]=f*u-p,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(k_,t,V_)}lookAt(t,e,n){const i=this.elements;return An.subVectors(t,e),An.lengthSq()===0&&(An.z=1),An.normalize(),Wi.crossVectors(n,An),Wi.lengthSq()===0&&(Math.abs(n.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Wi.crossVectors(n,An)),Wi.normalize(),Go.crossVectors(An,Wi),i[0]=Wi.x,i[4]=Go.x,i[8]=An.x,i[1]=Wi.y,i[5]=Go.y,i[9]=An.y,i[2]=Wi.z,i[6]=Go.z,i[10]=An.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],f=n[2],_=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],b=i[0],w=i[4],C=i[8],M=i[12],S=i[1],P=i[5],I=i[9],N=i[13],H=i[2],k=i[6],z=i[10],W=i[14],Y=i[3],et=i[7],st=i[11],ut=i[15];return r[0]=o*b+a*S+l*H+c*Y,r[4]=o*w+a*P+l*k+c*et,r[8]=o*C+a*I+l*z+c*st,r[12]=o*M+a*N+l*W+c*ut,r[1]=h*b+u*S+d*H+p*Y,r[5]=h*w+u*P+d*k+p*et,r[9]=h*C+u*I+d*z+p*st,r[13]=h*M+u*N+d*W+p*ut,r[2]=f*b+_*S+g*H+m*Y,r[6]=f*w+_*P+g*k+m*et,r[10]=f*C+_*I+g*z+m*st,r[14]=f*M+_*N+g*W+m*ut,r[3]=x*b+y*S+v*H+E*Y,r[7]=x*w+y*P+v*k+E*et,r[11]=x*C+y*I+v*z+E*st,r[15]=x*M+y*N+v*W+E*ut,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],f=t[3],_=t[7],g=t[11],m=t[15];return f*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+_*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+g*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+m*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],f=t[12],_=t[13],g=t[14],m=t[15],x=u*g*c-_*d*c+_*l*p-a*g*p-u*l*m+a*d*m,y=f*d*c-h*g*c-f*l*p+o*g*p+h*l*m-o*d*m,v=h*_*c-f*u*c+f*a*p-o*_*p-h*a*m+o*u*m,E=f*u*l-h*_*l-f*a*d+o*_*d+h*a*g-o*u*g,b=e*x+n*y+i*v+r*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/b;return t[0]=x*w,t[1]=(_*d*r-u*g*r-_*i*p+n*g*p+u*i*m-n*d*m)*w,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*m+n*l*m)*w,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*w,t[4]=y*w,t[5]=(h*g*r-f*d*r+f*i*p-e*g*p-h*i*m+e*d*m)*w,t[6]=(f*l*r-o*g*r-f*i*c+e*g*c+o*i*m-e*l*m)*w,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*w,t[8]=v*w,t[9]=(f*u*r-h*_*r-f*n*p+e*_*p+h*n*m-e*u*m)*w,t[10]=(o*_*r-f*a*r+f*n*c-e*_*c-o*n*m+e*a*m)*w,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*w,t[12]=E*w,t[13]=(h*_*i-f*u*i+f*n*d-e*_*d-h*n*g+e*u*g)*w,t[14]=(f*a*i-o*_*i-f*n*l+e*_*l+o*n*g-e*a*g)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*w,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,f=r*u,_=o*h,g=o*u,m=a*u,x=l*c,y=l*h,v=l*u,E=n.x,b=n.y,w=n.z;return i[0]=(1-(_+m))*E,i[1]=(p+v)*E,i[2]=(f-y)*E,i[3]=0,i[4]=(p-v)*b,i[5]=(1-(d+m))*b,i[6]=(g+x)*b,i[7]=0,i[8]=(f+y)*w,i[9]=(g-x)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qs.set(i[0],i[1],i[2]).length();const o=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qn.copy(this);const c=1/r,h=1/o,u=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=u,Qn.elements[9]*=u,Qn.elements[10]*=u,e.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Di){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let p,f;if(a===Di)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Ua)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Di){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h;let f,_;if(a===Di)f=(o+r)*u,_=-2*u;else if(a===Ua)f=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new L,Qn=new Te,k_=new L(0,0,0),V_=new L(1,1,1),Wi=new L,Go=new L,An=new L,xu=new Te,yu=new Vs;class _i{constructor(t=0,e=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yu.setFromEuler(this),this.setFromQuaternion(yu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Ah{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let H_=0;const Mu=new L,tr=new Vs,Si=new Te,Wo=new L,qr=new L,G_=new L,W_=new Vs,Su=new L(1,0,0),Eu=new L(0,1,0),bu=new L(0,0,1),wu={type:"added"},X_={type:"removed"},er={type:"childadded",child:null},yl={type:"childremoved",child:null};class Ye extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:H_++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const t=new L,e=new _i,n=new Vs,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new re}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ah,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(Su,t)}rotateY(t){return this.rotateOnAxis(Eu,t)}rotateZ(t){return this.rotateOnAxis(bu,t)}translateOnAxis(t,e){return Mu.copy(t).applyQuaternion(this.quaternion),this.position.add(Mu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Su,t)}translateY(t){return this.translateOnAxis(Eu,t)}translateZ(t){return this.translateOnAxis(bu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(qr,Wo,this.up):Si.lookAt(Wo,qr,this.up),this.quaternion.setFromRotationMatrix(Si),i&&(Si.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Si),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wu),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(X_),yl.child=t,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Si.multiply(t.parent.matrixWorld)),t.applyMatrix4(Si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wu),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,t,G_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qr,W_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Ye.DEFAULT_UP=new L(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new L,Ei=new L,Ml=new L,bi=new L,nr=new L,ir=new L,Tu=new L,Sl=new L,El=new L,bl=new L,wl=new be,Tl=new be,Al=new be;class ni{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ti.subVectors(t,e),i.cross(ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ti.subVectors(i,e),Ei.subVectors(n,e),Ml.subVectors(t,e);const o=ti.dot(ti),a=ti.dot(Ei),l=ti.dot(Ml),c=Ei.dot(Ei),h=Ei.dot(Ml),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,f=(o*h-a*l)*d;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(o,bi.y),l.addScaledVector(a,bi.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return wl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(t,e,n,i){return ti.subVectors(n,e),Ei.subVectors(t,e),ti.cross(Ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Ei.subVectors(this.a,this.b),ti.cross(Ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ni.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;nr.subVectors(i,n),ir.subVectors(r,n),Sl.subVectors(t,n);const l=nr.dot(Sl),c=ir.dot(Sl);if(l<=0&&c<=0)return e.copy(n);El.subVectors(t,i);const h=nr.dot(El),u=ir.dot(El);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(nr,o);bl.subVectors(t,r);const p=nr.dot(bl),f=ir.dot(bl);if(f>=0&&p<=f)return e.copy(r);const _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(ir,a);const g=h*f-p*u;if(g<=0&&u-h>=0&&p-f>=0)return Tu.subVectors(r,i),a=(u-h)/(u-h+(p-f)),e.copy(i).addScaledVector(Tu,a);const m=1/(g+_+d);return o=_*m,a=d*m,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Cl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=wh(t,1),e=oe(e,0,1),n=oe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cl(o,r,t+1/3),this.g=Cl(o,r,t),this.b=Cl(o,r,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=_n){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=_n){const n=Af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=gr(t.r),this.g=gr(t.g),this.b=gr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return pe.fromWorkingColorSpace(nn.copy(this),t),Math.round(oe(nn.r*255,0,255))*65536+Math.round(oe(nn.g*255,0,255))*256+Math.round(oe(nn.b*255,0,255))}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=_n){pe.fromWorkingColorSpace(nn.copy(this),t);const e=nn.r,n=nn.g,i=nn.b;return t!==_n?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Xi),this.setHSL(Xi.h+t,Xi.s+e,Xi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xi),t.getHSL(Xo);const n=oo(Xi.h,Xo.h,e),i=oo(Xi.s,Xo.s,e),r=oo(Xi.l,Xo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new Vt;Vt.NAMES=Af;let Y_=0;class Br extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=mr,this.side=rs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cc,this.blendDst=hc,this.blendEquation=Cs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=du,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mr&&(n.blending=this.blending),this.side!==rs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==cc&&(n.blendSrc=this.blendSrc),this.blendDst!==hc&&(n.blendDst=this.blendDst),this.blendEquation!==Cs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==du&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Un extends Br{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new L,Yo=new Tt;let q_=0;class Fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:q_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==qc&&(t.usage=this.usage),t}}class Cf extends Fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Rf extends Fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ue extends Fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $_=0;const Hn=new Te,Rl=new Ye,sr=new L,Cn=new us,$r=new us,Xe=new L;class Ae extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wf(t)?Rf:Cf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new re().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Hn.makeRotationFromQuaternion(t),this.applyMatrix4(Hn),this}rotateX(t){return Hn.makeRotationX(t),this.applyMatrix4(Hn),this}rotateY(t){return Hn.makeRotationY(t),this.applyMatrix4(Hn),this}rotateZ(t){return Hn.makeRotationZ(t),this.applyMatrix4(Hn),this}translate(t,e,n){return Hn.makeTranslation(t,e,n),this.applyMatrix4(Hn),this}scale(t,e,n){return Hn.makeScale(t,e,n),this.applyMatrix4(Hn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Cn.setFromBufferAttribute(r),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Cn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$r.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Cn.min,$r.min),Cn.expandByPoint(Xe),Xe.addVectors(Cn.max,$r.max),Cn.expandByPoint(Xe)):(Cn.expandByPoint($r.min),Cn.expandByPoint($r.max))}Cn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Xe.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Xe.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(t,c),Xe.add(sr)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Fn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,d=new Tt,p=new Tt,f=new Tt,_=new L,g=new L;function m(C,M,S){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),f.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),f.sub(d);const P=1/(p.x*f.y-f.x*p.y);isFinite(P)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(u,-p.y).multiplyScalar(P),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(P),a[C].add(_),a[M].add(_),a[S].add(_),l[C].add(g),l[M].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let C=0,M=x.length;C<M;++C){const S=x[C],P=S.start,I=S.count;for(let N=P,H=P+I;N<H;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new L,v=new L,E=new L,b=new L;function w(C){E.fromBufferAttribute(i,C),b.copy(E);const M=a[C];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(b,M);const P=v.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,M=x.length;C<M;++C){const S=x[C],P=S.start,I=S.count;for(let N=P,H=P+I;N<H;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let d=0,p=t.count;d<p;d+=3){const f=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,f=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let m=0;m<h;m++)d[f++]=c[p++]}return new Fn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Au=new Te,gs=new Qa,qo=new Ws,Cu=new L,$o=new L,Zo=new L,jo=new L,Pl=new L,Ko=new L,Ru=new L,Jo=new L;class se extends Ye{constructor(t=new Ae,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ko.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Pl.fromBufferAttribute(u,t),o?Ko.addScaledVector(Pl,h):Ko.addScaledVector(Pl.sub(e),h))}e.add(Ko)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),gs.copy(t.ray).recast(t.near),!(qo.containsPoint(gs.origin)===!1&&(gs.intersectSphere(qo,Cu)===null||gs.origin.distanceToSquared(Cu)>(t.far-t.near)**2))&&(Au.copy(r).invert(),gs.copy(t.ray).applyMatrix4(Au),!(n.boundingBox!==null&&gs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,gs)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=d.length;f<_;f++){const g=d[f],m=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,E=y;v<E;v+=3){const b=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=Qo(this,m,t,n,c,h,u,b,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const f=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=Qo(this,o,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,_=d.length;f<_;f++){const g=d[f],m=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,E=y;v<E;v+=3){const b=v,w=v+1,C=v+2;i=Qo(this,m,t,n,c,h,u,b,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const x=g,y=g+1,v=g+2;i=Qo(this,o,t,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function Z_(s,t,e,n,i,r,o,a){let l;if(t.side===dn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===rs,a),l===null)return null;Jo.copy(a),Jo.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Jo);return c<e.near||c>e.far?null:{distance:c,point:Jo.clone(),object:s}}function Qo(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,$o),s.getVertexPosition(l,Zo),s.getVertexPosition(c,jo);const h=Z_(s,t,e,n,$o,Zo,jo,Ru);if(h){const u=new L;ni.getBarycoord(Ru,$o,Zo,jo,u),i&&(h.uv=ni.getInterpolatedAttribute(i,a,l,c,u,new Tt)),r&&(h.uv1=ni.getInterpolatedAttribute(r,a,l,c,u,new Tt)),o&&(h.normal=ni.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new L,materialIndex:0};ni.getNormal($o,Zo,jo,d.normal),h.face=d,h.barycoord=u}return h}class Fo extends Ae{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,i,o,2),f("x","z","y",1,-1,t,n,-e,i,o,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ue(c,3)),this.setAttribute("normal",new ue(h,3)),this.setAttribute("uv",new ue(u,2));function f(_,g,m,x,y,v,E,b,w,C,M){const S=v/w,P=E/C,I=v/2,N=E/2,H=b/2,k=w+1,z=C+1;let W=0,Y=0;const et=new L;for(let st=0;st<z;st++){const ut=st*P-N;for(let yt=0;yt<k;yt++){const Bt=yt*S-I;et[_]=Bt*x,et[g]=ut*y,et[m]=H,c.push(et.x,et.y,et.z),et[_]=0,et[g]=0,et[m]=b>0?1:-1,h.push(et.x,et.y,et.z),u.push(yt/w),u.push(1-st/C),W+=1}}for(let st=0;st<C;st++)for(let ut=0;ut<w;ut++){const yt=d+ut+k*st,Bt=d+ut+k*(st+1),J=d+(ut+1)+k*(st+1),nt=d+(ut+1)+k*st;l.push(yt,Bt,nt),l.push(Bt,J,nt),Y+=6}a.addGroup(p,Y,M),p+=Y,d+=W}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(s){const t={};for(let e=0;e<s.length;e++){const n=Rr(s[e]);for(const i in n)t[i]=n[i]}return t}function j_(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Pf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Ch={clone:Rr,merge:cn};var K_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,J_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Br{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=K_,this.fragmentShader=J_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rr(t.uniforms),this.uniformsGroups=j_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Df extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Di}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yi=new L,Pu=new Tt,Du=new Tt;class hn extends Df{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=vo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ro*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(ro*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z),Yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yi.x,Yi.y).multiplyScalar(-t/Yi.z)}getViewSize(t,e){return this.getViewBounds(t,Pu,Du),e.subVectors(Du,Pu)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ro*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,or=1;class Q_ extends Ye{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new hn(rr,or,t,e);i.layers=this.layers,this.add(i);const r=new hn(rr,or,t,e);r.layers=this.layers,this.add(r);const o=new hn(rr,or,t,e);o.layers=this.layers,this.add(o);const a=new hn(rr,or,t,e);a.layers=this.layers,this.add(a);const l=new hn(rr,or,t,e);l.layers=this.layers,this.add(l);const c=new hn(rr,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ua)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Lf extends fn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:br,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class tg extends ks{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Lf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fo(5,5,5),r=new Fi({name:"CubemapFromEquirect",uniforms:Rr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:ts});r.uniforms.tEquirect.value=e;const o=new se(i,r),a=e.minFilter;return e.minFilter===Zi&&(e.minFilter=ii),new Q_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class Dn extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eg={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,f=.005;c.inputState.pinching&&d>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(eg)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Rh{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Vt(t),this.density=e}clone(){return new Rh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ph extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ng{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=qc,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new L;class ji{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ve(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ve(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ve(e,this.array),n=ve(n,this.array),i=ve(i,this.array),r=ve(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ji(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ll=new L,ig=new L,sg=new re;class Ci{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ll.subVectors(n,e).cross(ig.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sg.getNormalMatrix(t),i=this.coplanarPoint(Ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new Ws,ta=new L;class Dh{constructor(t=new Ci,e=new Ci,n=new Ci,i=new Ci,r=new Ci,o=new Ci){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Di){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],f=i[9],_=i[10],g=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,g-p,v-m).normalize(),n[1].setComponents(l+r,d+c,g+p,v+m).normalize(),n[2].setComponents(l+o,d+h,g+f,v+x).normalize(),n[3].setComponents(l-o,d-h,g-f,v-x).normalize(),n[4].setComponents(l-a,d-u,g-_,v-y).normalize(),e===Di)n[5].setComponents(l+a,d+u,g+_,v+y).normalize();else if(e===Ua)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ta.x=i.normal.x>0?t.max.x:t.min.x,ta.y=i.normal.y>0?t.max.y:t.min.y,ta.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ta)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kr extends Br{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Vt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Na=new L,Oa=new L,Lu=new Te,Zr=new Qa,ea=new Ws,Il=new L,Iu=new L;class Vr extends Ye{constructor(t=new Ae,e=new kr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Na.fromBufferAttribute(e,i-1),Oa.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Na.distanceTo(Oa);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,t.ray.intersectsSphere(ea)===!1)return;Lu.copy(i).invert(),Zr.copy(t.ray).applyMatrix4(Lu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=p,g=f-1;_<g;_+=c){const m=h.getX(_),x=h.getX(_+1),y=na(this,t,Zr,l,m,x,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(f-1),g=h.getX(p),m=na(this,t,Zr,l,_,g,f-1);m&&e.push(m)}}else{const p=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=p,g=f-1;_<g;_+=c){const m=na(this,t,Zr,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=na(this,t,Zr,l,f-1,p,f-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function na(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(Na.fromBufferAttribute(a,i),Oa.fromBufferAttribute(a,r),e.distanceSqToSegment(Na,Oa,Il,Iu)>n)return;Il.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Il);if(!(c<t.near||c>t.far))return{distance:c,point:Iu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Uu=new L,Fu=new L;class rg extends Vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Uu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uu.distanceTo(Fu);t.setAttribute("lineDistance",new ue(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $c extends fn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class If extends fn{constructor(t,e,n,i,r,o,a,l,c,h=_r){if(h!==_r&&h!==Ar)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===_r&&(n=Bs),n===void 0&&h===Ar&&(n=Tr),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Th(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new Tt:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],r=[],o=[],a=new L,l=new Te;for(let p=0;p<=t;p++){const f=p/t;i[p]=this.getTangentAt(f,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(oe(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(oe(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Lh extends xi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Tt){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,p=c-this.aY;l=d*h-p*u+this.aX,c=d*u+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class og extends Lh{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ih(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ia=new L,Ul=new Ih,Fl=new Ih,Nl=new Ih;class tl extends xi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ia.subVectors(i[0],i[1]).add(i[0]),c=ia);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ia.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ia),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(h),p);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),Ul.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,f,_,g),Fl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,f,_,g),Nl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,f,_,g)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Fl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Nl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Ul.calc(l),Fl.calc(l),Nl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Nu(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function ag(s,t){const e=1-s;return e*e*t}function lg(s,t){return 2*(1-s)*s*t}function cg(s,t){return s*s*t}function ao(s,t,e,n){return ag(s,t)+lg(s,e)+cg(s,n)}function hg(s,t){const e=1-s;return e*e*e*t}function ug(s,t){const e=1-s;return 3*e*e*s*t}function dg(s,t){return 3*(1-s)*s*s*t}function fg(s,t){return s*s*s*t}function lo(s,t,e,n,i){return hg(s,t)+ug(s,e)+dg(s,n)+fg(s,i)}class Uf extends xi{constructor(t=new Tt,e=new Tt,n=new Tt,i=new Tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Tt){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(t,i.x,r.x,o.x,a.x),lo(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pg extends xi{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(lo(t,i.x,r.x,o.x,a.x),lo(t,i.y,r.y,o.y,a.y),lo(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ff extends xi{constructor(t=new Tt,e=new Tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Tt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mg extends xi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Nf extends xi{constructor(t=new Tt,e=new Tt,n=new Tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Tt){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ao(t,i.x,r.x,o.x),ao(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uh extends xi{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(ao(t,i.x,r.x,o.x),ao(t,i.y,r.y,o.y),ao(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Of extends xi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Tt){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Nu(a,l.x,c.x,h.x,u.x),Nu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Tt().fromArray(i))}return this}}var Zc=Object.freeze({__proto__:null,ArcCurve:og,CatmullRomCurve3:tl,CubicBezierCurve:Uf,CubicBezierCurve3:pg,EllipseCurve:Lh,LineCurve:Ff,LineCurve3:mg,QuadraticBezierCurve:Nf,QuadraticBezierCurve3:Uh,SplineCurve:Of});class _g extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Zc[i.type]().fromJSON(i))}return this}}class Ou extends _g{constructor(t){super(),this.type="Path",this.currentPoint=new Tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Ff(this.currentPoint.clone(),new Tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new Nf(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Uf(this.currentPoint.clone(),new Tt(t,e),new Tt(n,i),new Tt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Of(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Lh(t,e,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Fh extends Ae{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new Tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const p=n+u/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class os extends Ae{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],p=[];let f=0;const _=[],g=n/2;let m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2));function x(){const v=new L,E=new L;let b=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],S=C/r,P=S*(e-t)+t;for(let I=0;I<=i;I++){const N=I/i,H=N*l+a,k=Math.sin(H),z=Math.cos(H);E.x=P*k,E.y=-S*n+g,E.z=P*z,u.push(E.x,E.y,E.z),v.set(k,w,z).normalize(),d.push(v.x,v.y,v.z),p.push(N,1-S),M.push(f++)}_.push(M)}for(let C=0;C<i;C++)for(let M=0;M<r;M++){const S=_[M][C],P=_[M+1][C],I=_[M+1][C+1],N=_[M][C+1];(t>0||M!==0)&&(h.push(S,P,N),b+=3),(e>0||M!==r-1)&&(h.push(P,I,N),b+=3)}c.addGroup(m,b,0),m+=b}function y(v){const E=f,b=new Tt,w=new L;let C=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let I=1;I<=i;I++)u.push(0,g*S,0),d.push(0,S,0),p.push(.5,.5),f++;const P=f;for(let I=0;I<=i;I++){const H=I/i*l+a,k=Math.cos(H),z=Math.sin(H);w.x=M*z,w.y=g*S,w.z=M*k,u.push(w.x,w.y,w.z),d.push(0,S,0),b.x=k*.5+.5,b.y=z*.5*S+.5,p.push(b.x,b.y),f++}for(let I=0;I<i;I++){const N=E+I,H=P+I;v===!0?h.push(H,H+1,N):h.push(H+1,H,N),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new os(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Nh extends os{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Nh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class zf extends Ou{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ou().fromJSON(i))}return this}}class gg{static triangulate(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Bf(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,u,d,p,f;if(i&&(o=Sg(t,e,o,n)),t.length>80*n){l=h=t[0],c=u=t[1];for(let _=n;_<r;_+=n)d=t[_],p=t[_+1],d<l&&(l=d),p<c&&(c=p),d>h&&(h=d),p>u&&(u=p);f=Math.max(h-l,u-c),f=f!==0?32767/f:0}return xo(o,a,n,l,c,f,0),a}}function Bf(s,t,e,n,i){let r,o;if(i===Ig(s,t,e,n)>0)for(r=t;r<e;r+=n)o=zu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=zu(r,s[r],s[r+1],o);return o&&el(o,o.next)&&(Mo(o),o=o.next),o}function Hs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(el(e,e.next)||Ie(e.prev,e,e.next)===0)){if(Mo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function xo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&Ag(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?xg(s,n,i,r):vg(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Mo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=yg(Hs(s),t,e),xo(s,t,e,n,i,r,2)):o===2&&Mg(s,t,e,n,i,r):xo(Hs(s),t,e,n,i,r,1);break}}}function vg(s){const t=s.prev,e=s,n=s.next;if(Ie(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,u=a<l?a<c?a:c:l<c?l:c,d=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=d&&f.y>=u&&f.y<=p&&hr(i,a,r,l,o,c,f.x,f.y)&&Ie(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function xg(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Ie(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,u=r.y,d=o.y,p=a<l?a<c?a:c:l<c?l:c,f=h<u?h<d?h:d:u<d?u:d,_=a>l?a>c?a:c:l>c?l:c,g=h>u?h>d?h:d:u>d?u:d,m=jc(p,f,t,e,n),x=jc(_,g,t,e,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=g&&y!==i&&y!==o&&hr(a,h,l,u,c,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=f&&v.y<=g&&v!==i&&v!==o&&hr(a,h,l,u,c,d,v.x,v.y)&&Ie(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=g&&y!==i&&y!==o&&hr(a,h,l,u,c,d,y.x,y.y)&&Ie(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=g&&v!==i&&v!==o&&hr(a,h,l,u,c,d,v.x,v.y)&&Ie(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function yg(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!el(i,r)&&kf(i,n,n.next,r)&&yo(i,r)&&yo(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Mo(n),Mo(n.next),n=s=r),n=n.next}while(n!==s);return Hs(n)}function Mg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pg(o,a)){let l=Vf(o,a);o=Hs(o,o.next),l=Hs(l,l.next),xo(o,t,e,n,i,r,0),xo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Sg(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Bf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Rg(c));for(i.sort(Eg),r=0;r<i.length;r++)e=bg(i[r],e);return e}function Eg(s,t){return s.x-t.x}function bg(s,t){const e=wg(s,t);if(!e)return t;const n=Vf(e,s);return Hs(n,n.next),Hs(e,e.next)}function wg(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,u;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hr(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),yo(e,s)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Tg(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Tg(s,t){return Ie(s.prev,s,t.prev)<0&&Ie(t.next,s,s.next)<0}function Ag(s,t,e,n){let i=s;do i.z===0&&(i.z=jc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cg(i)}function Cg(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function jc(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Rg(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hr(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Pg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Dg(s,t)&&(yo(s,t)&&yo(t,s)&&Lg(s,t)&&(Ie(s.prev,s,t.prev)||Ie(s,t.prev,t))||el(s,t)&&Ie(s.prev,s,s.next)>0&&Ie(t.prev,t,t.next)>0)}function Ie(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function el(s,t){return s.x===t.x&&s.y===t.y}function kf(s,t,e,n){const i=ra(Ie(s,t,e)),r=ra(Ie(s,t,n)),o=ra(Ie(e,n,s)),a=ra(Ie(e,n,t));return!!(i!==r&&o!==a||i===0&&sa(s,e,t)||r===0&&sa(s,n,t)||o===0&&sa(e,s,n)||a===0&&sa(e,t,n))}function sa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function ra(s){return s>0?1:s<0?-1:0}function Dg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&kf(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function yo(s,t){return Ie(s.prev,s,s.next)<0?Ie(s,t,s.next)>=0&&Ie(s,s.prev,t)>=0:Ie(s,t,s.prev)<0||Ie(s,s.next,t)<0}function Lg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function Vf(s,t){const e=new Kc(s.i,s.x,s.y),n=new Kc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function zu(s,t,e,n){const i=new Kc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Mo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Kc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ig(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class co{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return co.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Bu(t),ku(n,t);let o=t.length;e.forEach(Bu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ku(n,e[l]);const a=gg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Bu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function ku(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class qn extends Ae{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],f=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*d-o;for(let y=0;y<c;y++){const v=y*u-r;f.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),b=x+1+c*m;p.push(y,v,b),p.push(v,E,b)}this.setIndex(p),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Oh extends Ae{constructor(t=new zf([new Tt(0,.5),new Tt(-.5,-.5),new Tt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new ue(i,3)),this.setAttribute("normal",new ue(r,3)),this.setAttribute("uv",new ue(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let p=d.shape;const f=d.holes;co.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){const x=f[g];co.isClockWise(x)===!0&&(f[g]=x.reverse())}const _=co.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){const x=f[g];p=p.concat(x)}for(let g=0,m=p.length;g<m;g++){const x=p[g];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],y=x[0]+u,v=x[1]+u,E=x[2]+u;n.push(y,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Ug(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Oh(n,t.curveSegments)}}function Ug(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class ds extends Ae{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,p=[],f=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const b=E/e;u.x=-t*Math.cos(i+b*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+b*r)*Math.sin(o+y*a),f.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(b+v,1-y),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const y=h[m][x+1],v=h[m][x],E=h[m+1][x],b=h[m+1][x+1];(m!==0||o>0)&&p.push(y,v,b),(m!==n-1||l<Math.PI)&&p.push(v,E,b)}this.setIndex(p),this.setAttribute("position",new ue(f,3)),this.setAttribute("normal",new ue(_,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ds(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hr extends Ae{constructor(t=new Uh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new Tt;let h=new L;const u=[],d=[],p=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new ue(u,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(p,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),x(),m()}function g(y){h=t.getPointAt(y/e,h);const v=o.normals[y],E=o.binormals[y];for(let b=0;b<=i;b++){const w=b/i*Math.PI*2,C=Math.sin(w),M=-Math.cos(w);l.x=M*v.x+C*E.x,l.y=M*v.y+C*E.y,l.z=M*v.z+C*E.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const E=(i+1)*(y-1)+(v-1),b=(i+1)*y+(v-1),w=(i+1)*y+v,C=(i+1)*(y-1)+v;f.push(E,b,C),f.push(b,w,C)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Hr(new Zc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Fg extends Ae{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new L,r=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],d=u.start,p=u.count;for(let f=d,_=d+p;f<_;f+=3)for(let g=0;g<3;g++){const m=a.getX(f+g),x=a.getX(f+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),Vu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,u=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,u),Vu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new ue(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Vu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class xn extends Br{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sf,this.normalScale=new Tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=vh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ng extends Br{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=i_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Og extends Br{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hf extends Ye{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ol=new Te,Hu=new L,Gu=new L;class zg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dh,this._frameExtents=new Tt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Gf extends Df{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Bg extends zg{constructor(){super(new Gf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Pr extends Hf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zh extends Hf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class kg extends Ae{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Vg extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class Jc extends ng{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Wu=new Te;class Wf{constructor(t,e,n=0,i=1/0){this.ray=new Qa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Ah,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Wu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wu),this}intersectObject(t,e=!0,n=[]){return Qc(t,this,n,e),n.sort(Xu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Qc(t[i],this,n,e);return n.sort(Xu),n}}function Xu(s,t){return s.distance-t.distance}function Qc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Qc(r[o],t,e,!0)}}class za{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=oe(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(oe(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Yu=new L,oa=new L;class Hg{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Yu.subVectors(t,this.start),oa.subVectors(this.end,this.start);const n=oa.dot(oa);let r=oa.dot(Yu)/n;return e&&(r=oe(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Gg extends rg{constructor(t=10,e=10,n=4473924,i=8947848){n=new Vt(n),i=new Vt(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,p=0,f=-a;d<=e;d++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);const _=d===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new Ae;h.setAttribute("position",new ue(l,3)),h.setAttribute("color",new ue(c,3));const u=new kr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const qu=new L;let aa,zl;class Wg extends Ye{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",aa===void 0&&(aa=new Ae,aa.setAttribute("position",new ue([0,0,0,0,1,0],3)),zl=new os(0,.5,1,5,1),zl.translate(0,-.5,0)),this.position.copy(e),this.line=new Vr(aa,new kr({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new se(zl,new Un({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{qu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(qu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Xg extends Gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function $u(s,t,e,n){const i=Yg(n);switch(e){case mf:return s*t;case gf:return s*t;case vf:return s*t*2;case xf:return s*t/i.components*i.byteLength;case Sh:return s*t/i.components*i.byteLength;case yf:return s*t*2/i.components*i.byteLength;case Eh:return s*t*2/i.components*i.byteLength;case _f:return s*t*3/i.components*i.byteLength;case si:return s*t*4/i.components*i.byteLength;case bh:return s*t*4/i.components*i.byteLength;case va:case xa:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Sc:case bc:return Math.max(s,16)*Math.max(t,8)/4;case Mc:case Ec:return Math.max(s,8)*Math.max(t,8)/2;case wc:case Tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Pc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Lc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Fc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Bc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Vc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Sa:case Hc:case Gc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Mf:case Wc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Xc:case Yc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yg(s){switch(s){case Ui:case df:return{byteLength:1,components:1};case go:case ff:case Uo:return{byteLength:2,components:1};case yh:case Mh:return{byteLength:2,components:4};case Bs:case xh:case Pi:return{byteLength:4,components:1};case pf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Xf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function qg(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,f)=>p.start-f.start);let d=0;for(let p=1;p<u.length;p++){const f=u[d],_=u[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,f=u.length;p<f;p++){const _=u[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var $g=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,t0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,e0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,s0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,r0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,a0=`#ifdef USE_IRIDESCENCE
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
#endif`,l0=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,g0=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
} // validated`,v0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,x0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",w0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,T0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,A0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,P0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,L0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,I0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,F0=`#ifdef USE_GRADIENTMAP
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
}`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,k0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,V0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Y0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
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
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,q0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Z0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,K0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ev=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iv=`#if defined( USE_POINTS_UV )
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
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ov=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,av=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
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
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_v=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
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
#endif`,gv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Av=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Fv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vv=`#ifdef USE_TRANSMISSION
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
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hv=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
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
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
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
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
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
#endif`,Yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$v=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ex=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,nx=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ix=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rx=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ox=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ax=`#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,lx=`uniform vec3 diffuse;
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
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,hx=`#define LAMBERT
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,dx=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,px=`#define NORMAL
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,mx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,_x=`#define PHONG
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,vx=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,yx=`#define TOON
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
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mx=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ex=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,bx=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:$g,alphahash_pars_fragment:Zg,alphamap_fragment:jg,alphamap_pars_fragment:Kg,alphatest_fragment:Jg,alphatest_pars_fragment:Qg,aomap_fragment:t0,aomap_pars_fragment:e0,batching_pars_vertex:n0,batching_vertex:i0,begin_vertex:s0,beginnormal_vertex:r0,bsdfs:o0,iridescence_fragment:a0,bumpmap_pars_fragment:l0,clipping_planes_fragment:c0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:u0,clipping_planes_vertex:d0,color_fragment:f0,color_pars_fragment:p0,color_pars_vertex:m0,color_vertex:_0,common:g0,cube_uv_reflection_fragment:v0,defaultnormal_vertex:x0,displacementmap_pars_vertex:y0,displacementmap_vertex:M0,emissivemap_fragment:S0,emissivemap_pars_fragment:E0,colorspace_fragment:b0,colorspace_pars_fragment:w0,envmap_fragment:T0,envmap_common_pars_fragment:A0,envmap_pars_fragment:C0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:k0,envmap_vertex:P0,fog_vertex:D0,fog_pars_vertex:L0,fog_fragment:I0,fog_pars_fragment:U0,gradientmap_pars_fragment:F0,lightmap_pars_fragment:N0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:z0,lights_pars_begin:B0,lights_toon_fragment:V0,lights_toon_pars_fragment:H0,lights_phong_fragment:G0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:Y0,lights_fragment_begin:q0,lights_fragment_maps:$0,lights_fragment_end:Z0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:K0,logdepthbuf_pars_vertex:J0,logdepthbuf_vertex:Q0,map_fragment:tv,map_pars_fragment:ev,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:ov,morphcolor_vertex:av,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:hv,normal_fragment_begin:uv,normal_fragment_maps:dv,normal_pars_fragment:fv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:_v,clearcoat_normal_fragment_begin:gv,clearcoat_normal_fragment_maps:vv,clearcoat_pars_fragment:xv,iridescence_pars_fragment:yv,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:Ev,project_vertex:bv,dithering_fragment:wv,dithering_pars_fragment:Tv,roughnessmap_fragment:Av,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Rv,shadowmap_pars_vertex:Pv,shadowmap_vertex:Dv,shadowmask_pars_fragment:Lv,skinbase_vertex:Iv,skinning_pars_vertex:Uv,skinning_vertex:Fv,skinnormal_vertex:Nv,specularmap_fragment:Ov,specularmap_pars_fragment:zv,tonemapping_fragment:Bv,tonemapping_pars_fragment:kv,transmission_fragment:Vv,transmission_pars_fragment:Hv,uv_pars_fragment:Gv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:Yv,background_vert:qv,background_frag:$v,backgroundCube_vert:Zv,backgroundCube_frag:jv,cube_vert:Kv,cube_frag:Jv,depth_vert:Qv,depth_frag:tx,distanceRGBA_vert:ex,distanceRGBA_frag:nx,equirect_vert:ix,equirect_frag:sx,linedashed_vert:rx,linedashed_frag:ox,meshbasic_vert:ax,meshbasic_frag:lx,meshlambert_vert:cx,meshlambert_frag:hx,meshmatcap_vert:ux,meshmatcap_frag:dx,meshnormal_vert:fx,meshnormal_frag:px,meshphong_vert:mx,meshphong_frag:_x,meshphysical_vert:gx,meshphysical_frag:vx,meshtoon_vert:xx,meshtoon_frag:yx,points_vert:Mx,points_frag:Sx,shadow_vert:Ex,shadow_frag:bx,sprite_vert:wx,sprite_frag:Tx},St={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new Tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},gn={basic:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:cn([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:cn([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:cn([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Vt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:cn([St.points,St.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:cn([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:cn([St.common,St.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:cn([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:cn([St.sprite,St.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:cn([St.common,St.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:cn([St.lights,St.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};gn.physical={uniforms:cn([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new Tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new Tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new Tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const la={r:0,b:0,g:0},xs=new _i,Ax=new Te;function Cx(s,t,e,n,i,r,o){const a=new Vt(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function f(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const E=f(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const b=s.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,v){const E=f(v);E&&(E.isCubeTexture||E.mapping===Ja)?(h===void 0&&(h=new se(new Fo(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:Rr(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),xs.copy(v.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ax.makeRotationFromEuler(xs)),h.material.toneMapped=pe.getTransfer(E.colorSpace)!==ye,(u!==E||d!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new se(new qn(2,2),new Fi({name:"BackgroundMaterial",uniforms:Rr(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:rs,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=pe.getTransfer(E.colorSpace)!==ye,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(la,Pf(s)),n.buffers.color.setClear(la.r,la.g,la.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:g,dispose:x}}function Rx(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,P,I,N,H){let k=!1;const z=u(N,I,P);r!==z&&(r=z,c(r.object)),k=p(S,N,I,H),k&&f(S,N,I,H),H!==null&&t.update(H,s.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,v(S,P,I,N),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,P,I){const N=I.wireframe===!0;let H=n[S.id];H===void 0&&(H={},n[S.id]=H);let k=H[P.id];k===void 0&&(k={},H[P.id]=k);let z=k[N];return z===void 0&&(z=d(l()),k[N]=z),z}function d(S){const P=[],I=[],N=[];for(let H=0;H<e;H++)P[H]=0,I[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:N,object:S,attributes:{},index:null}}function p(S,P,I,N){const H=r.attributes,k=P.attributes;let z=0;const W=I.getAttributes();for(const Y in W)if(W[Y].location>=0){const st=H[Y];let ut=k[Y];if(ut===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(ut=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(ut=S.instanceColor)),st===void 0||st.attribute!==ut||ut&&st.data!==ut.data)return!0;z++}return r.attributesNum!==z||r.index!==N}function f(S,P,I,N){const H={},k=P.attributes;let z=0;const W=I.getAttributes();for(const Y in W)if(W[Y].location>=0){let st=k[Y];st===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(st=S.instanceColor));const ut={};ut.attribute=st,st&&st.data&&(ut.data=st.data),H[Y]=ut,z++}r.attributes=H,r.attributesNum=z,r.index=N}function _(){const S=r.newAttributes;for(let P=0,I=S.length;P<I;P++)S[P]=0}function g(S){m(S,0)}function m(S,P){const I=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;I[S]=1,N[S]===0&&(s.enableVertexAttribArray(S),N[S]=1),H[S]!==P&&(s.vertexAttribDivisor(S,P),H[S]=P)}function x(){const S=r.newAttributes,P=r.enabledAttributes;for(let I=0,N=P.length;I<N;I++)P[I]!==S[I]&&(s.disableVertexAttribArray(I),P[I]=0)}function y(S,P,I,N,H,k,z){z===!0?s.vertexAttribIPointer(S,P,I,H,k):s.vertexAttribPointer(S,P,I,N,H,k)}function v(S,P,I,N){_();const H=N.attributes,k=I.getAttributes(),z=P.defaultAttributeValues;for(const W in k){const Y=k[W];if(Y.location>=0){let et=H[W];if(et===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(et=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(et=S.instanceColor)),et!==void 0){const st=et.normalized,ut=et.itemSize,yt=t.get(et);if(yt===void 0)continue;const Bt=yt.buffer,J=yt.type,nt=yt.bytesPerElement,dt=J===s.INT||J===s.UNSIGNED_INT||et.gpuType===xh;if(et.isInterleavedBufferAttribute){const lt=et.data,At=lt.stride,$t=et.offset;if(lt.isInstancedInterleavedBuffer){for(let Ft=0;Ft<Y.locationSize;Ft++)m(Y.location+Ft,lt.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Ft=0;Ft<Y.locationSize;Ft++)g(Y.location+Ft);s.bindBuffer(s.ARRAY_BUFFER,Bt);for(let Ft=0;Ft<Y.locationSize;Ft++)y(Y.location+Ft,ut/Y.locationSize,J,st,At*nt,($t+ut/Y.locationSize*Ft)*nt,dt)}else{if(et.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)m(Y.location+lt,et.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let lt=0;lt<Y.locationSize;lt++)g(Y.location+lt);s.bindBuffer(s.ARRAY_BUFFER,Bt);for(let lt=0;lt<Y.locationSize;lt++)y(Y.location+lt,ut/Y.locationSize,J,st,ut*nt,ut/Y.locationSize*lt*nt,dt)}}else if(z!==void 0){const st=z[W];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(Y.location,st);break;case 3:s.vertexAttrib3fv(Y.location,st);break;case 4:s.vertexAttrib4fv(Y.location,st);break;default:s.vertexAttrib1fv(Y.location,st)}}}}x()}function E(){C();for(const S in n){const P=n[S];for(const I in P){const N=P[I];for(const H in N)h(N[H].object),delete N[H];delete P[I]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const I in P){const N=P[I];for(const H in N)h(N[H].object),delete N[H];delete P[I]}delete n[S.id]}function w(S){for(const P in n){const I=n[P];if(I[S.id]===void 0)continue;const N=I[S.id];for(const H in N)h(N[H].object),delete N[H];delete I[S.id]}}function C(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:b,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Px(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let f=0;f<u;f++)p+=h[f];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],h[f],d[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_]*d[_];e.update(f,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Dx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==si&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const C=w===Uo&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ui&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pi&&!C)}function l(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,b=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:b}}function Lx(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ci,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){const f=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,m=s.get(u);if(!i||f===null||f.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=h(f,d,y,p);for(let E=0;E!==y;++E)v[E]=e[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,f){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const m=p+_*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Ix(s){let t=new WeakMap;function e(o,a){return a===vc?o.mapping=br:a===xc&&(o.mapping=wr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===vc||a===xc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new tg(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ur=4,Zu=[.125,.215,.35,.446,.526,.582],Rs=20,Bl=new Gf,ju=new Vt;let kl=null,Vl=0,Hl=0,Gl=!1;const ws=(1+Math.sqrt(5))/2,ar=1/ws,Ku=[new L(-ws,ar,0),new L(ws,ar,0),new L(-ar,0,ws),new L(ar,0,ws),new L(0,ws,-ar),new L(0,ws,ar),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Ux=new L;class Ju{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Ux}=r;kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,Vl,Hl),this._renderer.xr.enabled=Gl,t.scissorTest=!1,ca(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===br||t.mapping===wr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Uo,format:si,colorSpace:Cr,depthBuffer:!1},i=Qu(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qu(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fx(r)),this._blurMaterial=Nx(r,t,e)}return i}_compileMaterial(t){const e=new se(this._lodPlanes[0],t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,i,r){const l=new hn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(ju),u.toneMapping=es,u.autoClear=!1;const f=new Un({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),_=new se(new Fo,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(ju),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const v=this._cubeSize;ca(i,y*v,x>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,l),u.render(t,l)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===br||t.mapping===wr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=td());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ca(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Bl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ku[(i-r-1)%Ku.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new se(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Rs-1),_=r/f,g=isFinite(r)?1+Math.floor(h*_):Rs;g>Rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Rs}`);const m=[];let x=0;for(let w=0;w<Rs;++w){const C=w/_,M=Math.exp(-C*C/2);m.push(M),w===0?x+=M:w<g&&(x+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=f,d.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-ur?i-y+ur:0),b=4*(this._cubeSize-v);ca(e,E,b,3*v,2*v),l.setRenderTarget(e),l.render(u,Bl)}}function Fx(s){const t=[],e=[],n=[];let i=s;const r=s-ur+1+Zu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ur?l=Zu[o-s+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,f=6,_=3,g=2,m=1,x=new Float32Array(_*f*p),y=new Float32Array(g*f*p),v=new Float32Array(m*f*p);for(let b=0;b<p;b++){const w=b%3*2/3-1,C=b>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];x.set(M,_*f*b),y.set(d,g*f*b);const S=[b,b,b,b,b,b];v.set(S,m*f*b)}const E=new Ae;E.setAttribute("position",new Fn(x,_)),E.setAttribute("uv",new Fn(y,g)),E.setAttribute("faceIndex",new Fn(v,m)),t.push(E),i>ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Qu(s,t,e){const n=new ks(s,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Nx(s,t,e){const n=new Float32Array(Rs),i=new L(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function td(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:ts,depthTest:!1,depthWrite:!1})}function ed(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ts,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function Ox(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===vc||l===xc,h=l===br||l===wr;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ju(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Ju(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function zx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&bs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Bx(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const f in d.attributes)t.remove(d.attributes[f]);d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const p in d)t.update(d[p],s.ARRAY_BUFFER)}function c(u){const d=[],p=u.index,f=u.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],b=x[y+1],w=x[y+2];d.push(E,b,b,w,w,E)}}else if(f!==void 0){const x=f.array;_=f.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,b=y+1,w=y+2;d.push(E,b,b,w,w,E)}}else return;const g=new(wf(d)?Rf:Cf)(d,1);g.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,g)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function kx(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,f){f!==0&&(s.drawElementsInstanced(n,p,r,d*o,f),e.update(p,n,f))}function h(d,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=p[m];e.update(g,n,1)}function u(d,p,f,_){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,f);let m=0;for(let x=0;x<f;x++)m+=p[x]*_[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Vx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Hx(s,t,e){const n=new WeakMap,i=new be;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,b=1;E>t.maxTextureSize&&(b=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const w=new Float32Array(E*b*4*u),C=new Tf(w,E,b,u);C.type=Pi,C.needsUpdate=!0;const M=v*4;for(let P=0;P<u;P++){const I=m[P],N=x[P],H=y[P],k=E*b*4*P;for(let z=0;z<I.count;z++){const W=z*M;f===!0&&(i.fromBufferAttribute(I,z),w[k+W+0]=i.x,w[k+W+1]=i.y,w[k+W+2]=i.z,w[k+W+3]=0),_===!0&&(i.fromBufferAttribute(N,z),w[k+W+4]=i.x,w[k+W+5]=i.y,w[k+W+6]=i.z,w[k+W+7]=0),g===!0&&(i.fromBufferAttribute(H,z),w[k+W+8]=i.x,w[k+W+9]=i.y,w[k+W+10]=i.z,w[k+W+11]=H.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Tt(E,b)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Gx(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Yf=new fn,nd=new If(1,1),qf=new Tf,$f=new z_,Zf=new Lf,id=[],sd=[],rd=new Float32Array(16),od=new Float32Array(9),ad=new Float32Array(4);function Gr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=id[i];if(r===void 0&&(r=new Float32Array(i),id[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ge(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function We(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nl(s,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Wx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2fv(this.addr,t),We(e,t)}}function Yx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;s.uniform3fv(this.addr,t),We(e,t)}}function qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4fv(this.addr,t),We(e,t)}}function $x(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;ad.set(n),s.uniformMatrix2fv(this.addr,!1,ad),We(e,n)}}function Zx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;od.set(n),s.uniformMatrix3fv(this.addr,!1,od),We(e,n)}}function jx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;rd.set(n),s.uniformMatrix4fv(this.addr,!1,rd),We(e,n)}}function Kx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2iv(this.addr,t),We(e,t)}}function Qx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3iv(this.addr,t),We(e,t)}}function ty(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4iv(this.addr,t),We(e,t)}}function ey(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ny(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;s.uniform2uiv(this.addr,t),We(e,t)}}function iy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;s.uniform3uiv(this.addr,t),We(e,t)}}function sy(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;s.uniform4uiv(this.addr,t),We(e,t)}}function ry(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(nd.compareFunction=Ef,r=nd):r=Yf,e.setTexture2D(t||r,i)}function oy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||$f,i)}function ay(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zf,i)}function ly(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qf,i)}function cy(s){switch(s){case 5126:return Wx;case 35664:return Xx;case 35665:return Yx;case 35666:return qx;case 35674:return $x;case 35675:return Zx;case 35676:return jx;case 5124:case 35670:return Kx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ty;case 5125:return ey;case 36294:return ny;case 36295:return iy;case 36296:return sy;case 35678:case 36198:case 36298:case 36306:case 35682:return ry;case 35679:case 36299:case 36307:return oy;case 35680:case 36300:case 36308:case 36293:return ay;case 36289:case 36303:case 36311:case 36292:return ly}}function hy(s,t){s.uniform1fv(this.addr,t)}function uy(s,t){const e=Gr(t,this.size,2);s.uniform2fv(this.addr,e)}function dy(s,t){const e=Gr(t,this.size,3);s.uniform3fv(this.addr,e)}function fy(s,t){const e=Gr(t,this.size,4);s.uniform4fv(this.addr,e)}function py(s,t){const e=Gr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function my(s,t){const e=Gr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function _y(s,t){const e=Gr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function gy(s,t){s.uniform1iv(this.addr,t)}function vy(s,t){s.uniform2iv(this.addr,t)}function xy(s,t){s.uniform3iv(this.addr,t)}function yy(s,t){s.uniform4iv(this.addr,t)}function My(s,t){s.uniform1uiv(this.addr,t)}function Sy(s,t){s.uniform2uiv(this.addr,t)}function Ey(s,t){s.uniform3uiv(this.addr,t)}function by(s,t){s.uniform4uiv(this.addr,t)}function wy(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Yf,r[o])}function Ty(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||$f,r[o])}function Ay(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Zf,r[o])}function Cy(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ge(n,r)||(s.uniform1iv(this.addr,r),We(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||qf,r[o])}function Ry(s){switch(s){case 5126:return hy;case 35664:return uy;case 35665:return dy;case 35666:return fy;case 35674:return py;case 35675:return my;case 35676:return _y;case 5124:case 35670:return gy;case 35667:case 35671:return vy;case 35668:case 35672:return xy;case 35669:case 35673:return yy;case 5125:return My;case 36294:return Sy;case 36295:return Ey;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Cy}}class Py{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cy(e.type)}}class Dy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ry(e.type)}}class Ly{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function ld(s,t){s.seq.push(t),s.map[t.id]=t}function Iy(s,t,e){const n=s.name,i=n.length;for(Wl.lastIndex=0;;){const r=Wl.exec(n),o=Wl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ld(e,c===void 0?new Py(a,s,t):new Dy(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Ly(a),ld(e,u)),e=u}}}class Ea{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Iy(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function cd(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Uy=37297;let Fy=0;function Ny(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const hd=new re;function Oy(s){pe._getMatrix(hd,pe.workingColorSpace,s);const t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(s)){case Ia:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ud(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Ny(s.getShaderSource(t),o)}else return i}function zy(s,t){const e=Oy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function By(s,t){let e;switch(t){case Zm:e="Linear";break;case jm:e="Reinhard";break;case Km:e="Cineon";break;case Jm:e="ACESFilmic";break;case t_:e="AgX";break;case e_:e="Neutral";break;case Qm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ha=new L;function ky(){pe.getLuminanceCoefficients(ha);const s=ha.x.toFixed(4),t=ha.y.toFixed(4),e=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jr).join(`
`)}function Hy(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Gy(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Jr(s){return s!==""}function dd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function fd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(Wy,Yy)}const Xy=new Map;function Yy(s,t){let e=ae[t];if(e===void 0){const n=Xy.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return th(e)}const qy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pd(s){return s.replace(qy,$y)}function $y(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function md(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Zy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===hf?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Cm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===wi&&(t="SHADOWMAP_TYPE_VSM"),t}function jy(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case br:case wr:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ky(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wr:t="ENVMAP_MODE_REFRACTION";break}return t}function Jy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case vh:t="ENVMAP_BLENDING_MULTIPLY";break;case qm:t="ENVMAP_BLENDING_MIX";break;case $m:t="ENVMAP_BLENDING_ADD";break}return t}function Qy(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function tM(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Zy(e),c=jy(e),h=Ky(e),u=Jy(e),d=Qy(e),p=Vy(e),f=Hy(r),_=i.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Jr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Jr).join(`
`),m.length>0&&(m+=`
`)):(g=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jr).join(`
`),m=[md(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==es?"#define TONE_MAPPING":"",e.toneMapping!==es?ae.tonemapping_pars_fragment:"",e.toneMapping!==es?By("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,zy("linearToOutputTexel",e.outputColorSpace),ky(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Jr).join(`
`)),o=th(o),o=dd(o,e),o=fd(o,e),a=th(a),a=dd(a,e),a=fd(a,e),o=pd(o),a=pd(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===fu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+o,v=x+m+a,E=cd(i,i.VERTEX_SHADER,y),b=cd(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(P){if(s.debug.checkShaderErrors){const I=i.getProgramInfoLog(_).trim(),N=i.getShaderInfoLog(E).trim(),H=i.getShaderInfoLog(b).trim();let k=!0,z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,b);else{const W=ud(i,E,"vertex"),Y=ud(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+W+`
`+Y)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(N===""||H==="")&&(z=!1);z&&(P.diagnostics={runnable:k,programLog:I,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:m}})}i.deleteShader(E),i.deleteShader(b),C=new Ea(i,_),M=Gy(i,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Uy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Fy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=b,this}let eM=0;class nM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new iM(t),e.set(t,n)),n}}class iM{constructor(t){this.id=eM++,this.code=t,this.usedTimes=0}}function sM(s,t,e,n,i,r,o){const a=new Ah,l=new nM,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,P,I,N){const H=I.fog,k=N.geometry,z=M.isMeshStandardMaterial?I.environment:null,W=(M.isMeshStandardMaterial?e:t).get(M.envMap||z),Y=W&&W.mapping===Ja?W.image.height:null,et=f[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const st=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ut=st!==void 0?st.length:0;let yt=0;k.morphAttributes.position!==void 0&&(yt=1),k.morphAttributes.normal!==void 0&&(yt=2),k.morphAttributes.color!==void 0&&(yt=3);let Bt,J,nt,dt;if(et){const Jt=gn[et];Bt=Jt.vertexShader,J=Jt.fragmentShader}else Bt=M.vertexShader,J=M.fragmentShader,l.update(M),nt=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);const lt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),$t=N.isInstancedMesh===!0,Ft=N.isBatchedMesh===!0,le=!!M.map,ne=!!M.matcap,Ht=!!W,V=!!M.aoMap,xe=!!M.lightMap,Zt=!!M.bumpMap,qt=!!M.normalMap,wt=!!M.displacementMap,Lt=!!M.emissiveMap,_t=!!M.metalnessMap,R=!!M.roughnessMap,T=M.anisotropy>0,Z=M.clearcoat>0,rt=M.dispersion>0,ot=M.iridescence>0,tt=M.sheen>0,Ct=M.transmission>0,pt=T&&!!M.anisotropyMap,gt=Z&&!!M.clearcoatMap,jt=Z&&!!M.clearcoatNormalMap,ct=Z&&!!M.clearcoatRoughnessMap,Mt=ot&&!!M.iridescenceMap,Pt=ot&&!!M.iridescenceThicknessMap,zt=tt&&!!M.sheenColorMap,Et=tt&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,Nt=!!M.specularColorMap,ie=!!M.specularIntensityMap,X=Ct&&!!M.transmissionMap,ft=Ct&&!!M.thicknessMap,K=!!M.gradientMap,it=!!M.alphaMap,vt=M.alphaTest>0,xt=!!M.alphaHash,kt=!!M.extensions;let he=es;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(he=s.toneMapping);const ge={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:Bt,fragmentShader:J,defines:M.defines,customVertexShaderID:nt,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ft,batchingColor:Ft&&N._colorsTexture!==null,instancing:$t,instancingColor:$t&&N.instanceColor!==null,instancingMorph:$t&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:lt===null?s.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Cr,alphaToCoverage:!!M.alphaToCoverage,map:le,matcap:ne,envMap:Ht,envMapMode:Ht&&W.mapping,envMapCubeUVHeight:Y,aoMap:V,lightMap:xe,bumpMap:Zt,normalMap:qt,displacementMap:d&&wt,emissiveMap:Lt,normalMapObjectSpace:qt&&M.normalMapType===r_,normalMapTangentSpace:qt&&M.normalMapType===Sf,metalnessMap:_t,roughnessMap:R,anisotropy:T,anisotropyMap:pt,clearcoat:Z,clearcoatMap:gt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ct,dispersion:rt,iridescence:ot,iridescenceMap:Mt,iridescenceThicknessMap:Pt,sheen:tt,sheenColorMap:zt,sheenRoughnessMap:Et,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:ie,transmission:Ct,transmissionMap:X,thicknessMap:ft,gradientMap:K,opaque:M.transparent===!1&&M.blending===mr&&M.alphaToCoverage===!1,alphaMap:it,alphaTest:vt,alphaHash:xt,combine:M.combine,mapUv:le&&_(M.map.channel),aoMapUv:V&&_(M.aoMap.channel),lightMapUv:xe&&_(M.lightMap.channel),bumpMapUv:Zt&&_(M.bumpMap.channel),normalMapUv:qt&&_(M.normalMap.channel),displacementMapUv:wt&&_(M.displacementMap.channel),emissiveMapUv:Lt&&_(M.emissiveMap.channel),metalnessMapUv:_t&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:pt&&_(M.anisotropyMap.channel),clearcoatMapUv:gt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ct&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Et&&_(M.sheenRoughnessMap.channel),specularMapUv:Wt&&_(M.specularMap.channel),specularColorMapUv:Nt&&_(M.specularColorMap.channel),specularIntensityMapUv:ie&&_(M.specularIntensityMap.channel),transmissionMapUv:X&&_(M.transmissionMap.channel),thicknessMapUv:ft&&_(M.thicknessMap.channel),alphaMapUv:it&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(qt||T),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!k.attributes.uv&&(le||it),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:N.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:le&&M.map.isVideoTexture===!0&&pe.getTransfer(M.map.colorSpace)===ye,decodeVideoTextureEmissive:Lt&&M.emissiveMap.isVideoTexture===!0&&pe.getTransfer(M.emissiveMap.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===He,flipSided:M.side===dn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:kt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(kt&&M.extensions.multiDraw===!0||Ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ge.vertexUv1s=c.has(1),ge.vertexUv2s=c.has(2),ge.vertexUv3s=c.has(3),c.clear(),ge}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)S.push(P),S.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=f[M.type];let P;if(S){const I=gn[S];P=Ch.clone(I.uniforms)}else P=M.uniforms;return P}function E(M,S){let P;for(let I=0,N=h.length;I<N;I++){const H=h[I];if(H.cacheKey===S){P=H,++P.usedTimes;break}}return P===void 0&&(P=new tM(s,S,M,r),h.push(P)),P}function b(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:b,releaseShaderCache:w,programs:h,dispose:C}}function rM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function oM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function _d(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function gd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,f,_,g){let m=s[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:p,groupOrder:f,renderOrder:u.renderOrder,z:_,group:g},s[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=p,m.groupOrder=f,m.renderOrder=u.renderOrder,m.z=_,m.group=g),t++,m}function a(u,d,p,f,_,g){const m=o(u,d,p,f,_,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(u,d,p,f,_,g){const m=o(u,d,p,f,_,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||oM),n.length>1&&n.sort(d||_d),i.length>1&&i.sort(d||_d)}function h(){for(let u=t,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function aM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new gd,s.set(n,[o])):i>=r.length?(o=new gd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function lM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Vt};break;case"SpotLight":e={position:new L,direction:new L,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function cM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let hM=0;function uM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function dM(s){const t=new lM,e=cM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Te,o=new Te;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,f=0,_=0,g=0,m=0,x=0,y=0,v=0,E=0,b=0,w=0;c.sort(uM);for(let M=0,S=c.length;M<S;M++){const P=c[M],I=P.color,N=P.intensity,H=P.distance,k=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=I.r*N,u+=I.g*N,d+=I.b*N;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],N);w++}else if(P.isDirectionalLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const W=P.shadow,Y=e.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=P.shadow.matrix,x++}n.directional[p]=z,p++}else if(P.isSpotLight){const z=t.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(I).multiplyScalar(N),z.distance=H,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[_]=z;const W=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,W.updateMatrices(P),P.castShadow&&b++),n.spotLightMatrix[_]=W.matrix,P.castShadow){const Y=e.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=k,v++}_++}else if(P.isRectAreaLight){const z=t.get(P);z.color.copy(I).multiplyScalar(N),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){const z=t.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){const W=P.shadow,Y=e.get(P);Y.shadowIntensity=W.intensity,Y.shadowBias=W.bias,Y.shadowNormalBias=W.normalBias,Y.shadowRadius=W.radius,Y.shadowMapSize=W.mapSize,Y.shadowCameraNear=W.camera.near,Y.shadowCameraFar=W.camera.far,n.pointShadow[f]=Y,n.pointShadowMap[f]=k,n.pointShadowMatrix[f]=P.shadow.matrix,y++}n.point[f]=z,f++}else if(P.isHemisphereLight){const z=t.get(P);z.skyColor.copy(P.color).multiplyScalar(N),z.groundColor.copy(P.groundColor).multiplyScalar(N),n.hemi[m]=z,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==f||C.spotLength!==_||C.rectAreaLength!==g||C.hemiLength!==m||C.numDirectionalShadows!==x||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==E||C.numLightProbes!==w)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-b,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=w,C.directionalLength=p,C.pointLength=f,C.spotLength=_,C.rectAreaLength=g,C.hemiLength=m,C.numDirectionalShadows=x,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=E,C.numLightProbes=w,n.version=hM++)}function l(c,h){let u=0,d=0,p=0,f=0,_=0;const g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const v=n.rectArea[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),f++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function vd(s){const t=new dM(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function fM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new vd(s),t.set(i,[a])):r>=o.length?(a=new vd(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const pM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mM=`uniform sampler2D shadow_pass;
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
}`;function _M(s,t,e){let n=new Dh;const i=new Tt,r=new Tt,o=new be,a=new Ng({depthPacking:s_}),l=new Og,c={},h=e.maxTextureSize,u={[rs]:dn,[dn]:rs,[He]:He},d=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Tt},radius:{value:4}},vertexShader:pM,fragmentShader:mM}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const f=new Ae;f.setAttribute("position",new Fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new se(f,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let m=this.type;this.render=function(b,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),I=s.state;I.setBlending(ts),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const N=m!==wi&&this.type===wi,H=m===wi&&this.type!==wi;for(let k=0,z=b.length;k<z;k++){const W=b[k],Y=W.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const et=Y.getFrameExtents();if(i.multiply(et),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,Y.mapSize.y=r.y)),Y.map===null||N===!0||H===!0){const ut=this.type!==wi?{minFilter:ri,magFilter:ri}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ks(i.x,i.y,ut),Y.map.texture.name=W.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const st=Y.getViewportCount();for(let ut=0;ut<st;ut++){const yt=Y.getViewport(ut);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),I.viewport(o),Y.updateMatrices(W,ut),n=Y.getFrustum(),v(w,C,Y.camera,W,this.type)}Y.isPointLightShadow!==!0&&this.type===wi&&x(Y,C),Y.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(M,S,P)};function x(b,w){const C=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new ks(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,s.setRenderTarget(b.mapPass),s.clear(),s.renderBufferDirect(w,null,C,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,s.setRenderTarget(b.map),s.clear(),s.renderBufferDirect(w,null,C,p,_,null)}function y(b,w,C,M){let S=null;const P=C.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:a,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=S.uuid,N=w.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let k=H[N];k===void 0&&(k=S.clone(),H[N]=k,w.addEventListener("dispose",E)),S=k}if(S.visible=w.visible,S.wireframe=w.wireframe,M===wi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:u[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=s.properties.get(S);I.light=C}return S}function v(b,w,C,M,S){if(b.visible===!1)return;if(b.layers.test(w.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===wi)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,b.matrixWorld);const N=t.update(b),H=b.material;if(Array.isArray(H)){const k=N.groups;for(let z=0,W=k.length;z<W;z++){const Y=k[z],et=H[Y.materialIndex];if(et&&et.visible){const st=y(b,et,M,S);b.onBeforeShadow(s,b,w,C,N,st,Y),s.renderBufferDirect(C,null,N,st,b,Y),b.onAfterShadow(s,b,w,C,N,st,Y)}}}else if(H.visible){const k=y(b,H,M,S);b.onBeforeShadow(s,b,w,C,N,k,null),s.renderBufferDirect(C,null,N,k,b,null),b.onAfterShadow(s,b,w,C,N,k,null)}}const I=b.children;for(let N=0,H=I.length;N<H;N++)v(I[N],w,C,M,S)}function E(b){b.target.removeEventListener("dispose",E);for(const C in c){const M=c[C],S=b.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const gM={[uc]:dc,[fc]:_c,[pc]:gc,[Er]:mc,[dc]:uc,[_c]:fc,[gc]:pc,[mc]:Er};function vM(s,t){function e(){let X=!1;const ft=new be;let K=null;const it=new be(0,0,0,0);return{setMask:function(vt){K!==vt&&!X&&(s.colorMask(vt,vt,vt,vt),K=vt)},setLocked:function(vt){X=vt},setClear:function(vt,xt,kt,he,ge){ge===!0&&(vt*=he,xt*=he,kt*=he),ft.set(vt,xt,kt,he),it.equals(ft)===!1&&(s.clearColor(vt,xt,kt,he),it.copy(ft))},reset:function(){X=!1,K=null,it.set(-1,0,0,0)}}}function n(){let X=!1,ft=!1,K=null,it=null,vt=null;return{setReversed:function(xt){if(ft!==xt){const kt=t.get("EXT_clip_control");ft?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT);const he=vt;vt=null,this.setClear(he)}ft=xt},getReversed:function(){return ft},setTest:function(xt){xt?lt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(xt){K!==xt&&!X&&(s.depthMask(xt),K=xt)},setFunc:function(xt){if(ft&&(xt=gM[xt]),it!==xt){switch(xt){case uc:s.depthFunc(s.NEVER);break;case dc:s.depthFunc(s.ALWAYS);break;case fc:s.depthFunc(s.LESS);break;case Er:s.depthFunc(s.LEQUAL);break;case pc:s.depthFunc(s.EQUAL);break;case mc:s.depthFunc(s.GEQUAL);break;case _c:s.depthFunc(s.GREATER);break;case gc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=xt}},setLocked:function(xt){X=xt},setClear:function(xt){vt!==xt&&(ft&&(xt=1-xt),s.clearDepth(xt),vt=xt)},reset:function(){X=!1,K=null,it=null,vt=null,ft=!1}}}function i(){let X=!1,ft=null,K=null,it=null,vt=null,xt=null,kt=null,he=null,ge=null;return{setTest:function(Jt){X||(Jt?lt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(Jt){ft!==Jt&&!X&&(s.stencilMask(Jt),ft=Jt)},setFunc:function(Jt,we,$e){(K!==Jt||it!==we||vt!==$e)&&(s.stencilFunc(Jt,we,$e),K=Jt,it=we,vt=$e)},setOp:function(Jt,we,$e){(xt!==Jt||kt!==we||he!==$e)&&(s.stencilOp(Jt,we,$e),xt=Jt,kt=we,he=$e)},setLocked:function(Jt){X=Jt},setClear:function(Jt){ge!==Jt&&(s.clearStencil(Jt),ge=Jt)},reset:function(){X=!1,ft=null,K=null,it=null,vt=null,xt=null,kt=null,he=null,ge=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,p=[],f=null,_=!1,g=null,m=null,x=null,y=null,v=null,E=null,b=null,w=new Vt(0,0,0),C=0,M=!1,S=null,P=null,I=null,N=null,H=null;const k=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,W=0;const Y=s.getParameter(s.VERSION);Y.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=W>=1):Y.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=W>=2);let et=null,st={};const ut=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),Bt=new be().fromArray(ut),J=new be().fromArray(yt);function nt(X,ft,K,it){const vt=new Uint8Array(4),xt=s.createTexture();s.bindTexture(X,xt),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let kt=0;kt<K;kt++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(ft,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,vt):s.texImage2D(ft+kt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,vt);return xt}const dt={};dt[s.TEXTURE_2D]=nt(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=nt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=nt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=nt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),lt(s.DEPTH_TEST),o.setFunc(Er),Zt(!1),qt(cu),lt(s.CULL_FACE),V(ts);function lt(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function At(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function $t(X,ft){return u[X]!==ft?(s.bindFramebuffer(X,ft),u[X]=ft,X===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ft),X===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ft),!0):!1}function Ft(X,ft){let K=p,it=!1;if(X){K=d.get(ft),K===void 0&&(K=[],d.set(ft,K));const vt=X.textures;if(K.length!==vt.length||K[0]!==s.COLOR_ATTACHMENT0){for(let xt=0,kt=vt.length;xt<kt;xt++)K[xt]=s.COLOR_ATTACHMENT0+xt;K.length=vt.length,it=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,it=!0);it&&s.drawBuffers(K)}function le(X){return f!==X?(s.useProgram(X),f=X,!0):!1}const ne={[Cs]:s.FUNC_ADD,[Pm]:s.FUNC_SUBTRACT,[Dm]:s.FUNC_REVERSE_SUBTRACT};ne[Lm]=s.MIN,ne[Im]=s.MAX;const Ht={[Um]:s.ZERO,[Fm]:s.ONE,[Nm]:s.SRC_COLOR,[cc]:s.SRC_ALPHA,[Hm]:s.SRC_ALPHA_SATURATE,[km]:s.DST_COLOR,[zm]:s.DST_ALPHA,[Om]:s.ONE_MINUS_SRC_COLOR,[hc]:s.ONE_MINUS_SRC_ALPHA,[Vm]:s.ONE_MINUS_DST_COLOR,[Bm]:s.ONE_MINUS_DST_ALPHA,[Gm]:s.CONSTANT_COLOR,[Wm]:s.ONE_MINUS_CONSTANT_COLOR,[Xm]:s.CONSTANT_ALPHA,[Ym]:s.ONE_MINUS_CONSTANT_ALPHA};function V(X,ft,K,it,vt,xt,kt,he,ge,Jt){if(X===ts){_===!0&&(At(s.BLEND),_=!1);return}if(_===!1&&(lt(s.BLEND),_=!0),X!==Rm){if(X!==g||Jt!==M){if((m!==Cs||v!==Cs)&&(s.blendEquation(s.FUNC_ADD),m=Cs,v=Cs),Jt)switch(X){case mr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lc:s.blendFunc(s.ONE,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case mr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case lc:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}x=null,y=null,E=null,b=null,w.set(0,0,0),C=0,g=X,M=Jt}return}vt=vt||ft,xt=xt||K,kt=kt||it,(ft!==m||vt!==v)&&(s.blendEquationSeparate(ne[ft],ne[vt]),m=ft,v=vt),(K!==x||it!==y||xt!==E||kt!==b)&&(s.blendFuncSeparate(Ht[K],Ht[it],Ht[xt],Ht[kt]),x=K,y=it,E=xt,b=kt),(he.equals(w)===!1||ge!==C)&&(s.blendColor(he.r,he.g,he.b,ge),w.copy(he),C=ge),g=X,M=!1}function xe(X,ft){X.side===He?At(s.CULL_FACE):lt(s.CULL_FACE);let K=X.side===dn;ft&&(K=!K),Zt(K),X.blending===mr&&X.transparent===!1?V(ts):V(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),r.setMask(X.colorWrite);const it=X.stencilWrite;a.setTest(it),it&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Lt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?lt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(X){S!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),S=X)}function qt(X){X!==Tm?(lt(s.CULL_FACE),X!==P&&(X===cu?s.cullFace(s.BACK):X===Am?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),P=X}function wt(X){X!==I&&(z&&s.lineWidth(X),I=X)}function Lt(X,ft,K){X?(lt(s.POLYGON_OFFSET_FILL),(N!==ft||H!==K)&&(s.polygonOffset(ft,K),N=ft,H=K)):At(s.POLYGON_OFFSET_FILL)}function _t(X){X?lt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function R(X){X===void 0&&(X=s.TEXTURE0+k-1),et!==X&&(s.activeTexture(X),et=X)}function T(X,ft,K){K===void 0&&(et===null?K=s.TEXTURE0+k-1:K=et);let it=st[K];it===void 0&&(it={type:void 0,texture:void 0},st[K]=it),(it.type!==X||it.texture!==ft)&&(et!==K&&(s.activeTexture(K),et=K),s.bindTexture(X,ft||dt[X]),it.type=X,it.texture=ft)}function Z(){const X=st[et];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function tt(){try{s.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{s.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function pt(){try{s.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{s.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{s.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ct(){try{s.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{s.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pt(){try{s.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function zt(X){Bt.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),Bt.copy(X))}function Et(X){J.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),J.copy(X))}function Wt(X,ft){let K=c.get(ft);K===void 0&&(K=new WeakMap,c.set(ft,K));let it=K.get(X);it===void 0&&(it=s.getUniformBlockIndex(ft,X.name),K.set(X,it))}function Nt(X,ft){const it=c.get(ft).get(X);l.get(ft)!==it&&(s.uniformBlockBinding(ft,it,X.__bindingPointIndex),l.set(ft,it))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},et=null,st={},u={},d=new WeakMap,p=[],f=null,_=!1,g=null,m=null,x=null,y=null,v=null,E=null,b=null,w=new Vt(0,0,0),C=0,M=!1,S=null,P=null,I=null,N=null,H=null,Bt.set(0,0,s.canvas.width,s.canvas.height),J.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:lt,disable:At,bindFramebuffer:$t,drawBuffers:Ft,useProgram:le,setBlending:V,setMaterial:xe,setFlipSided:Zt,setCullFace:qt,setLineWidth:wt,setPolygonOffset:Lt,setScissorTest:_t,activeTexture:R,bindTexture:T,unbindTexture:Z,compressedTexImage2D:rt,compressedTexImage3D:ot,texImage2D:Mt,texImage3D:Pt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:jt,texStorage3D:ct,texSubImage2D:tt,texSubImage3D:Ct,compressedTexSubImage2D:pt,compressedTexSubImage3D:gt,scissor:zt,viewport:Et,reset:ie}}function xM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Tt,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(R,T){return p?new OffscreenCanvas(R,T):Fa("canvas")}function _(R,T,Z){let rt=1;const ot=_t(R);if((ot.width>Z||ot.height>Z)&&(rt=Z/Math.max(ot.width,ot.height)),rt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const tt=Math.floor(rt*ot.width),Ct=Math.floor(rt*ot.height);u===void 0&&(u=f(tt,Ct));const pt=T?f(tt,Ct):u;return pt.width=tt,pt.height=Ct,pt.getContext("2d").drawImage(R,0,0,tt,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+tt+"x"+Ct+")."),pt}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function g(R){return R.generateMipmaps}function m(R){s.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(R,T,Z,rt,ot=!1){if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let tt=T;if(T===s.RED&&(Z===s.FLOAT&&(tt=s.R32F),Z===s.HALF_FLOAT&&(tt=s.R16F),Z===s.UNSIGNED_BYTE&&(tt=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.R8UI),Z===s.UNSIGNED_SHORT&&(tt=s.R16UI),Z===s.UNSIGNED_INT&&(tt=s.R32UI),Z===s.BYTE&&(tt=s.R8I),Z===s.SHORT&&(tt=s.R16I),Z===s.INT&&(tt=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(tt=s.RG32F),Z===s.HALF_FLOAT&&(tt=s.RG16F),Z===s.UNSIGNED_BYTE&&(tt=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.RG8UI),Z===s.UNSIGNED_SHORT&&(tt=s.RG16UI),Z===s.UNSIGNED_INT&&(tt=s.RG32UI),Z===s.BYTE&&(tt=s.RG8I),Z===s.SHORT&&(tt=s.RG16I),Z===s.INT&&(tt=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),Z===s.UNSIGNED_INT&&(tt=s.RGB32UI),Z===s.BYTE&&(tt=s.RGB8I),Z===s.SHORT&&(tt=s.RGB16I),Z===s.INT&&(tt=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),Z===s.UNSIGNED_INT&&(tt=s.RGBA32UI),Z===s.BYTE&&(tt=s.RGBA8I),Z===s.SHORT&&(tt=s.RGBA16I),Z===s.INT&&(tt=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),T===s.RGBA){const Ct=ot?Ia:pe.getTransfer(rt);Z===s.FLOAT&&(tt=s.RGBA32F),Z===s.HALF_FLOAT&&(tt=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(tt=Ct===ye?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(R,T){let Z;return R?T===null||T===Bs||T===Tr?Z=s.DEPTH24_STENCIL8:T===Pi?Z=s.DEPTH32F_STENCIL8:T===go&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bs||T===Tr?Z=s.DEPTH_COMPONENT24:T===Pi?Z=s.DEPTH_COMPONENT32F:T===go&&(Z=s.DEPTH_COMPONENT16),Z}function E(R,T){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==ri&&R.minFilter!==ii?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function b(R){const T=R.target;T.removeEventListener("dispose",b),C(T),T.isVideoTexture&&h.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),S(T)}function C(R){const T=n.get(R);if(T.__webglInit===void 0)return;const Z=R.source,rt=d.get(Z);if(rt){const ot=rt[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&M(R),Object.keys(rt).length===0&&d.delete(Z)}n.remove(R)}function M(R){const T=n.get(R);s.deleteTexture(T.__webglTexture);const Z=R.source,rt=d.get(Z);delete rt[T.__cacheKey],o.memory.textures--}function S(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(T.__webglFramebuffer[rt]))for(let ot=0;ot<T.__webglFramebuffer[rt].length;ot++)s.deleteFramebuffer(T.__webglFramebuffer[rt][ot]);else s.deleteFramebuffer(T.__webglFramebuffer[rt]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[rt])}else{if(Array.isArray(T.__webglFramebuffer))for(let rt=0;rt<T.__webglFramebuffer.length;rt++)s.deleteFramebuffer(T.__webglFramebuffer[rt]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let rt=0;rt<T.__webglColorRenderbuffer.length;rt++)T.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[rt]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=R.textures;for(let rt=0,ot=Z.length;rt<ot;rt++){const tt=n.get(Z[rt]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(Z[rt])}n.remove(R)}let P=0;function I(){P=0}function N(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function H(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function k(R,T){const Z=n.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){const rt=R.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(Z,R,T);return}}e.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function z(R,T){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){J(Z,R,T);return}e.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function W(R,T){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){J(Z,R,T);return}e.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function Y(R,T){const Z=n.get(R);if(R.version>0&&Z.__version!==R.version){nt(Z,R,T);return}e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const et={[_o]:s.REPEAT,[Ps]:s.CLAMP_TO_EDGE,[yc]:s.MIRRORED_REPEAT},st={[ri]:s.NEAREST,[n_]:s.NEAREST_MIPMAP_NEAREST,[Oo]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[ul]:s.LINEAR_MIPMAP_NEAREST,[Zi]:s.LINEAR_MIPMAP_LINEAR},ut={[o_]:s.NEVER,[d_]:s.ALWAYS,[a_]:s.LESS,[Ef]:s.LEQUAL,[l_]:s.EQUAL,[u_]:s.GEQUAL,[c_]:s.GREATER,[h_]:s.NOTEQUAL};function yt(R,T){if(T.type===Pi&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===ii||T.magFilter===ul||T.magFilter===Oo||T.magFilter===Zi||T.minFilter===ii||T.minFilter===ul||T.minFilter===Oo||T.minFilter===Zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,et[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,et[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,et[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,st[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,st[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,ut[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ri||T.minFilter!==Oo&&T.minFilter!==Zi||T.type===Pi&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Bt(R,T){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",b));const rt=T.source;let ot=d.get(rt);ot===void 0&&(ot={},d.set(rt,ot));const tt=H(T);if(tt!==R.__cacheKey){ot[tt]===void 0&&(ot[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),ot[tt].usedTimes++;const Ct=ot[R.__cacheKey];Ct!==void 0&&(ot[R.__cacheKey].usedTimes--,Ct.usedTimes===0&&M(T)),R.__cacheKey=tt,R.__webglTexture=ot[tt].texture}return Z}function J(R,T,Z){let rt=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(rt=s.TEXTURE_3D);const ot=Bt(R,T),tt=T.source;e.bindTexture(rt,R.__webglTexture,s.TEXTURE0+Z);const Ct=n.get(tt);if(tt.version!==Ct.__version||ot===!0){e.activeTexture(s.TEXTURE0+Z);const pt=pe.getPrimaries(pe.workingColorSpace),gt=T.colorSpace===$i?null:pe.getPrimaries(T.colorSpace),jt=T.colorSpace===$i||pt===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ct=_(T.image,!1,i.maxTextureSize);ct=Lt(T,ct);const Mt=r.convert(T.format,T.colorSpace),Pt=r.convert(T.type);let zt=y(T.internalFormat,Mt,Pt,T.colorSpace,T.isVideoTexture);yt(rt,T);let Et;const Wt=T.mipmaps,Nt=T.isVideoTexture!==!0,ie=Ct.__version===void 0||ot===!0,X=tt.dataReady,ft=E(T,ct);if(T.isDepthTexture)zt=v(T.format===Ar,T.type),ie&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,zt,ct.width,ct.height):e.texImage2D(s.TEXTURE_2D,0,zt,ct.width,ct.height,0,Mt,Pt,null));else if(T.isDataTexture)if(Wt.length>0){Nt&&ie&&e.texStorage2D(s.TEXTURE_2D,ft,zt,Wt[0].width,Wt[0].height);for(let K=0,it=Wt.length;K<it;K++)Et=Wt[K],Nt?X&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Et.width,Et.height,Mt,Pt,Et.data):e.texImage2D(s.TEXTURE_2D,K,zt,Et.width,Et.height,0,Mt,Pt,Et.data);T.generateMipmaps=!1}else Nt?(ie&&e.texStorage2D(s.TEXTURE_2D,ft,zt,ct.width,ct.height),X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ct.width,ct.height,Mt,Pt,ct.data)):e.texImage2D(s.TEXTURE_2D,0,zt,ct.width,ct.height,0,Mt,Pt,ct.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Nt&&ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,zt,Wt[0].width,Wt[0].height,ct.depth);for(let K=0,it=Wt.length;K<it;K++)if(Et=Wt[K],T.format!==si)if(Mt!==null)if(Nt){if(X)if(T.layerUpdates.size>0){const vt=$u(Et.width,Et.height,T.format,T.type);for(const xt of T.layerUpdates){const kt=Et.data.subarray(xt*vt/Et.data.BYTES_PER_ELEMENT,(xt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,xt,Et.width,Et.height,1,Mt,kt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Et.width,Et.height,ct.depth,Mt,Et.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,zt,Et.width,Et.height,ct.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?X&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Et.width,Et.height,ct.depth,Mt,Pt,Et.data):e.texImage3D(s.TEXTURE_2D_ARRAY,K,zt,Et.width,Et.height,ct.depth,0,Mt,Pt,Et.data)}else{Nt&&ie&&e.texStorage2D(s.TEXTURE_2D,ft,zt,Wt[0].width,Wt[0].height);for(let K=0,it=Wt.length;K<it;K++)Et=Wt[K],T.format!==si?Mt!==null?Nt?X&&e.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Et.width,Et.height,Mt,Et.data):e.compressedTexImage2D(s.TEXTURE_2D,K,zt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?X&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Et.width,Et.height,Mt,Pt,Et.data):e.texImage2D(s.TEXTURE_2D,K,zt,Et.width,Et.height,0,Mt,Pt,Et.data)}else if(T.isDataArrayTexture)if(Nt){if(ie&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ft,zt,ct.width,ct.height,ct.depth),X)if(T.layerUpdates.size>0){const K=$u(ct.width,ct.height,T.format,T.type);for(const it of T.layerUpdates){const vt=ct.data.subarray(it*K/ct.data.BYTES_PER_ELEMENT,(it+1)*K/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ct.width,ct.height,1,Mt,Pt,vt)}T.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Pt,ct.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,zt,ct.width,ct.height,ct.depth,0,Mt,Pt,ct.data);else if(T.isData3DTexture)Nt?(ie&&e.texStorage3D(s.TEXTURE_3D,ft,zt,ct.width,ct.height,ct.depth),X&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,Mt,Pt,ct.data)):e.texImage3D(s.TEXTURE_3D,0,zt,ct.width,ct.height,ct.depth,0,Mt,Pt,ct.data);else if(T.isFramebufferTexture){if(ie)if(Nt)e.texStorage2D(s.TEXTURE_2D,ft,zt,ct.width,ct.height);else{let K=ct.width,it=ct.height;for(let vt=0;vt<ft;vt++)e.texImage2D(s.TEXTURE_2D,vt,zt,K,it,0,Mt,Pt,null),K>>=1,it>>=1}}else if(Wt.length>0){if(Nt&&ie){const K=_t(Wt[0]);e.texStorage2D(s.TEXTURE_2D,ft,zt,K.width,K.height)}for(let K=0,it=Wt.length;K<it;K++)Et=Wt[K],Nt?X&&e.texSubImage2D(s.TEXTURE_2D,K,0,0,Mt,Pt,Et):e.texImage2D(s.TEXTURE_2D,K,zt,Mt,Pt,Et);T.generateMipmaps=!1}else if(Nt){if(ie){const K=_t(ct);e.texStorage2D(s.TEXTURE_2D,ft,zt,K.width,K.height)}X&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Pt,ct)}else e.texImage2D(s.TEXTURE_2D,0,zt,Mt,Pt,ct);g(T)&&m(rt),Ct.__version=tt.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function nt(R,T,Z){if(T.image.length!==6)return;const rt=Bt(R,T),ot=T.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Z);const tt=n.get(ot);if(ot.version!==tt.__version||rt===!0){e.activeTexture(s.TEXTURE0+Z);const Ct=pe.getPrimaries(pe.workingColorSpace),pt=T.colorSpace===$i?null:pe.getPrimaries(T.colorSpace),gt=T.colorSpace===$i||Ct===pt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const jt=T.isCompressedTexture||T.image[0].isCompressedTexture,ct=T.image[0]&&T.image[0].isDataTexture,Mt=[];for(let it=0;it<6;it++)!jt&&!ct?Mt[it]=_(T.image[it],!0,i.maxCubemapSize):Mt[it]=ct?T.image[it].image:T.image[it],Mt[it]=Lt(T,Mt[it]);const Pt=Mt[0],zt=r.convert(T.format,T.colorSpace),Et=r.convert(T.type),Wt=y(T.internalFormat,zt,Et,T.colorSpace),Nt=T.isVideoTexture!==!0,ie=tt.__version===void 0||rt===!0,X=ot.dataReady;let ft=E(T,Pt);yt(s.TEXTURE_CUBE_MAP,T);let K;if(jt){Nt&&ie&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Wt,Pt.width,Pt.height);for(let it=0;it<6;it++){K=Mt[it].mipmaps;for(let vt=0;vt<K.length;vt++){const xt=K[vt];T.format!==si?zt!==null?Nt?X&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,xt.width,xt.height,zt,xt.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Wt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,0,0,xt.width,xt.height,zt,Et,xt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt,Wt,xt.width,xt.height,0,zt,Et,xt.data)}}}else{if(K=T.mipmaps,Nt&&ie){K.length>0&&ft++;const it=_t(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ft,Wt,it.width,it.height)}for(let it=0;it<6;it++)if(ct){Nt?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Mt[it].width,Mt[it].height,zt,Et,Mt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,Mt[it].width,Mt[it].height,0,zt,Et,Mt[it].data);for(let vt=0;vt<K.length;vt++){const kt=K[vt].image[it].image;Nt?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,kt.width,kt.height,zt,Et,kt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Wt,kt.width,kt.height,0,zt,Et,kt.data)}}else{Nt?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,zt,Et,Mt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,zt,Et,Mt[it]);for(let vt=0;vt<K.length;vt++){const xt=K[vt];Nt?X&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,0,0,zt,Et,xt.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,vt+1,Wt,zt,Et,xt.image[it])}}}g(T)&&m(s.TEXTURE_CUBE_MAP),tt.__version=ot.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function dt(R,T,Z,rt,ot,tt){const Ct=r.convert(Z.format,Z.colorSpace),pt=r.convert(Z.type),gt=y(Z.internalFormat,Ct,pt,Z.colorSpace),jt=n.get(T),ct=n.get(Z);if(ct.__renderTarget=T,!jt.__hasExternalTextures){const Mt=Math.max(1,T.width>>tt),Pt=Math.max(1,T.height>>tt);ot===s.TEXTURE_3D||ot===s.TEXTURE_2D_ARRAY?e.texImage3D(ot,tt,gt,Mt,Pt,T.depth,0,Ct,pt,null):e.texImage2D(ot,tt,gt,Mt,Pt,0,Ct,pt,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),qt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,ot,ct.__webglTexture,0,Zt(T)):(ot===s.TEXTURE_2D||ot>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,ot,ct.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(R,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const rt=T.depthTexture,ot=rt&&rt.isDepthTexture?rt.type:null,tt=v(T.stencilBuffer,ot),Ct=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=Zt(T);qt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,tt,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,tt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,tt,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ct,s.RENDERBUFFER,R)}else{const rt=T.textures;for(let ot=0;ot<rt.length;ot++){const tt=rt[ot],Ct=r.convert(tt.format,tt.colorSpace),pt=r.convert(tt.type),gt=y(tt.internalFormat,Ct,pt,tt.colorSpace),jt=Zt(T);Z&&qt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,jt,gt,T.width,T.height):qt(T)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,jt,gt,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,gt,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(T.depthTexture);rt.__renderTarget=T,(!rt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),k(T.depthTexture,0);const ot=rt.__webglTexture,tt=Zt(T);if(T.depthTexture.format===_r)qt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ot,0);else if(T.depthTexture.format===Ar)qt(T)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function $t(R){const T=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const rt=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),rt){const ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,rt.removeEventListener("dispose",ot)};rt.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=rt}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");At(T.__webglFramebuffer,R)}else if(Z){T.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[rt]),T.__webglDepthbuffer[rt]===void 0)T.__webglDepthbuffer[rt]=s.createRenderbuffer(),lt(T.__webglDepthbuffer[rt],R,!1);else{const ot=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=T.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,ot,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),lt(T.__webglDepthbuffer,R,!1);else{const rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ot),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,ot)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Ft(R,T,Z){const rt=n.get(R);T!==void 0&&dt(rt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&$t(R)}function le(R){const T=R.texture,Z=n.get(R),rt=n.get(T);R.addEventListener("dispose",w);const ot=R.textures,tt=R.isWebGLCubeRenderTarget===!0,Ct=ot.length>1;if(Ct||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=T.version,o.memory.textures++),tt){Z.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[pt]=[];for(let gt=0;gt<T.mipmaps.length;gt++)Z.__webglFramebuffer[pt][gt]=s.createFramebuffer()}else Z.__webglFramebuffer[pt]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pt=0;pt<T.mipmaps.length;pt++)Z.__webglFramebuffer[pt]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ct)for(let pt=0,gt=ot.length;pt<gt;pt++){const jt=n.get(ot[pt]);jt.__webglTexture===void 0&&(jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&qt(R)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pt=0;pt<ot.length;pt++){const gt=ot[pt];Z.__webglColorRenderbuffer[pt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[pt]);const jt=r.convert(gt.format,gt.colorSpace),ct=r.convert(gt.type),Mt=y(gt.internalFormat,jt,ct,gt.colorSpace,R.isXRRenderTarget===!0),Pt=Zt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pt,Mt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pt,s.RENDERBUFFER,Z.__webglColorRenderbuffer[pt])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),lt(Z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,T);for(let pt=0;pt<6;pt++)if(T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)dt(Z.__webglFramebuffer[pt][gt],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,gt);else dt(Z.__webglFramebuffer[pt],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);g(T)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let pt=0,gt=ot.length;pt<gt;pt++){const jt=ot[pt],ct=n.get(jt);e.bindTexture(s.TEXTURE_2D,ct.__webglTexture),yt(s.TEXTURE_2D,jt),dt(Z.__webglFramebuffer,R,jt,s.COLOR_ATTACHMENT0+pt,s.TEXTURE_2D,0),g(jt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let pt=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(pt,rt.__webglTexture),yt(pt,T),T.mipmaps&&T.mipmaps.length>0)for(let gt=0;gt<T.mipmaps.length;gt++)dt(Z.__webglFramebuffer[gt],R,T,s.COLOR_ATTACHMENT0,pt,gt);else dt(Z.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,pt,0);g(T)&&m(pt),e.unbindTexture()}R.depthBuffer&&$t(R)}function ne(R){const T=R.textures;for(let Z=0,rt=T.length;Z<rt;Z++){const ot=T[Z];if(g(ot)){const tt=x(R),Ct=n.get(ot).__webglTexture;e.bindTexture(tt,Ct),m(tt),e.unbindTexture()}}}const Ht=[],V=[];function xe(R){if(R.samples>0){if(qt(R)===!1){const T=R.textures,Z=R.width,rt=R.height;let ot=s.COLOR_BUFFER_BIT;const tt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ct=n.get(R),pt=T.length>1;if(pt)for(let gt=0;gt<T.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let gt=0;gt<T.length;gt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=s.STENCIL_BUFFER_BIT)),pt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[gt]);const jt=n.get(T[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,jt,0)}s.blitFramebuffer(0,0,Z,rt,0,0,Z,rt,ot,s.NEAREST),l===!0&&(Ht.length=0,V.length=0,Ht.push(s.COLOR_ATTACHMENT0+gt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ht.push(tt),V.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,V)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pt)for(let gt=0;gt<T.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,Ct.__webglColorRenderbuffer[gt]);const jt=n.get(T[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Ct.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Zt(R){return Math.min(i.maxSamples,R.samples)}function qt(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function wt(R){const T=o.render.frame;h.get(R)!==T&&(h.set(R,T),R.update())}function Lt(R,T){const Z=R.colorSpace,rt=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==Cr&&Z!==$i&&(pe.getTransfer(Z)===ye?(rt!==si||ot!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function _t(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=z,this.setTexture3D=W,this.setTextureCube=Y,this.rebindTextures=Ft,this.setupRenderTarget=le,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=qt}function yM(s,t){function e(n,i=$i){let r;const o=pe.getTransfer(i);if(n===Ui)return s.UNSIGNED_BYTE;if(n===yh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Mh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===pf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===df)return s.BYTE;if(n===ff)return s.SHORT;if(n===go)return s.UNSIGNED_SHORT;if(n===xh)return s.INT;if(n===Bs)return s.UNSIGNED_INT;if(n===Pi)return s.FLOAT;if(n===Uo)return s.HALF_FLOAT;if(n===mf)return s.ALPHA;if(n===_f)return s.RGB;if(n===si)return s.RGBA;if(n===gf)return s.LUMINANCE;if(n===vf)return s.LUMINANCE_ALPHA;if(n===_r)return s.DEPTH_COMPONENT;if(n===Ar)return s.DEPTH_STENCIL;if(n===xf)return s.RED;if(n===Sh)return s.RED_INTEGER;if(n===yf)return s.RG;if(n===Eh)return s.RG_INTEGER;if(n===bh)return s.RGBA_INTEGER;if(n===va||n===xa||n===ya||n===Ma)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===va)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===va)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mc||n===Sc||n===Ec||n===bc)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Mc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===wc||n===Tc||n===Ac)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===wc||n===Tc)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ac)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic||n===Uc||n===Fc||n===Nc||n===Oc||n===zc||n===Bc||n===kc||n===Vc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Cc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Rc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Pc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Dc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Lc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ic)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Oc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Bc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===kc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Sa||n===Hc||n===Gc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Sa)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Gc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Mf||n===Wc||n===Xc||n===Yc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Sa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Xc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Yc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const MM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new fn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Fi({vertexShader:MM,fragmentShader:SM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new se(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bM extends Gs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,f=null;const _=new EM,g=e.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new Tt;let b=null;const w=new hn;w.viewport=new be;const C=new hn;C.viewport=new be;const M=[w,C],S=new Vg;let P=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let nt=y[J];return nt===void 0&&(nt=new Dl,y[J]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(J){let nt=y[J];return nt===void 0&&(nt=new Dl,y[J]=nt),nt.getGripSpace()},this.getHand=function(J){let nt=y[J];return nt===void 0&&(nt=new Dl,y[J]=nt),nt.getHandSpace()};function N(J){const nt=v.indexOf(J.inputSource);if(nt===-1)return;const dt=y[nt];dt!==void 0&&(dt.update(J.inputSource,J.frame,c||o),dt.dispatchEvent({type:J.type,data:J.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",k);for(let J=0;J<y.length;J++){const nt=v[J];nt!==null&&(v[J]=null,y[J].disconnect(nt))}P=null,I=null,_.reset(),t.setRenderTarget(m),p=null,d=null,u=null,i=null,x=null,Bt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",k),g.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,lt=null,At=null;g.depth&&(At=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=g.stencil?Ar:_r,lt=g.stencil?Tr:Bs);const $t={colorFormat:e.RGBA8,depthFormat:At,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer($t),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new ks(d.textureWidth,d.textureHeight,{format:si,type:Ui,depthTexture:new If(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new ks(p.framebufferWidth,p.framebufferHeight,{format:si,type:Ui,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Bt.setContext(i),Bt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(J){for(let nt=0;nt<J.removed.length;nt++){const dt=J.removed[nt],lt=v.indexOf(dt);lt>=0&&(v[lt]=null,y[lt].disconnect(dt))}for(let nt=0;nt<J.added.length;nt++){const dt=J.added[nt];let lt=v.indexOf(dt);if(lt===-1){for(let $t=0;$t<y.length;$t++)if($t>=v.length){v.push(dt),lt=$t;break}else if(v[$t]===null){v[$t]=dt,lt=$t;break}if(lt===-1)break}const At=y[lt];At&&At.connect(dt)}}const z=new L,W=new L;function Y(J,nt,dt){z.setFromMatrixPosition(nt.matrixWorld),W.setFromMatrixPosition(dt.matrixWorld);const lt=z.distanceTo(W),At=nt.projectionMatrix.elements,$t=dt.projectionMatrix.elements,Ft=At[14]/(At[10]-1),le=At[14]/(At[10]+1),ne=(At[9]+1)/At[5],Ht=(At[9]-1)/At[5],V=(At[8]-1)/At[0],xe=($t[8]+1)/$t[0],Zt=Ft*V,qt=Ft*xe,wt=lt/(-V+xe),Lt=wt*-V;if(nt.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Lt),J.translateZ(wt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),At[10]===-1)J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const _t=Ft+wt,R=le+wt,T=Zt-Lt,Z=qt+(lt-Lt),rt=ne*le/R*_t,ot=Ht*le/R*_t;J.projectionMatrix.makePerspective(T,Z,rt,ot,_t,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function et(J,nt){nt===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(nt.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let nt=J.near,dt=J.far;_.texture!==null&&(_.depthNear>0&&(nt=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),S.near=C.near=w.near=nt,S.far=C.far=w.far=dt,(P!==S.near||I!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,I=S.far),w.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const lt=J.parent,At=S.cameras;et(S,lt);for(let $t=0;$t<At.length;$t++)et(At[$t],lt);At.length===2?Y(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),st(J,S,lt)};function st(J,nt,dt){dt===null?J.matrix.copy(nt.matrixWorld):(J.matrix.copy(dt.matrixWorld),J.matrix.invert(),J.matrix.multiply(nt.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(nt.projectionMatrix),J.projectionMatrixInverse.copy(nt.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=vo*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ut=null;function yt(J,nt){if(h=nt.getViewerPose(c||o),f=nt,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let lt=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,lt=!0);for(let Ft=0;Ft<dt.length;Ft++){const le=dt[Ft];let ne=null;if(p!==null)ne=p.getViewport(le);else{const V=u.getViewSubImage(d,le);ne=V.viewport,Ft===0&&(t.setRenderTargetTextures(x,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),t.setRenderTarget(x))}let Ht=M[Ft];Ht===void 0&&(Ht=new hn,Ht.layers.enable(Ft),Ht.viewport=new be,M[Ft]=Ht),Ht.matrix.fromArray(le.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(le.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(ne.x,ne.y,ne.width,ne.height),Ft===0&&(S.matrix.copy(Ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),lt===!0&&S.cameras.push(Ht)}const At=i.enabledFeatures;if(At&&At.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&u){const Ft=u.getDepthInformation(dt[0]);Ft&&Ft.isValid&&Ft.texture&&_.init(t,Ft,i.renderState)}}for(let dt=0;dt<y.length;dt++){const lt=v[dt],At=y[dt];lt!==null&&At!==void 0&&At.update(lt,nt,c||o)}ut&&ut(J,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),f=null}const Bt=new Xf;Bt.setAnimationLoop(yt),this.setAnimationLoop=function(J){ut=J},this.dispose=function(){}}}const ys=new _i,wM=new Te;function TM(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Pf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),u(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),d(g,m),m.isMeshPhysicalMaterial&&p(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,ys.copy(v),ys.x*=-1,ys.y*=-1,ys.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),g.envMapRotation.value.setFromMatrix4(wM.makeRotationFromEuler(ys)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function AM(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(f(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const b=t.render.frame;r[x.id]!==b&&(d(x),r[x.id]=b)}function h(x){const y=u();x.__bindingPointIndex=y;const v=s.createBuffer(),E=x.__size,b=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,b),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let b=0,w=v.length;b<w;b++){const C=Array.isArray(v[b])?v[b]:[v[b]];for(let M=0,S=C.length;M<S;M++){const P=C[M];if(p(P,b,M,E)===!0){const I=P.__offset,N=Array.isArray(P.value)?P.value:[P.value];let H=0;for(let k=0;k<N.length;k++){const z=N[k],W=_(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,I+H,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,I,P.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,v,E){const b=x.value,w=y+"_"+v;if(E[w]===void 0)return typeof b=="number"||typeof b=="boolean"?E[w]=b:E[w]=b.clone(),!0;{const C=E[w];if(typeof b=="number"||typeof b=="boolean"){if(C!==b)return E[w]=b,!0}else if(C.equals(b)===!1)return C.copy(b),!0}return!1}function f(x){const y=x.uniforms;let v=0;const E=16;for(let w=0,C=y.length;w<C;w++){const M=Array.isArray(y[w])?y[w]:[y[w]];for(let S=0,P=M.length;S<P;S++){const I=M[S],N=Array.isArray(I.value)?I.value:[I.value];for(let H=0,k=N.length;H<k;H++){const z=N[H],W=_(z),Y=v%E,et=Y%W.boundary,st=Y+et;v+=et,st!==0&&E-st<W.storage&&(v+=E-st),I.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=W.storage}}}const b=v%E;return b>0&&(v+=E-b),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class il{constructor(t={}){const{canvas:e=R_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=es,this.toneMappingExposure=1;const v=this;let E=!1,b=0,w=0,C=null,M=-1,S=null;const P=new be,I=new be;let N=null;const H=new Vt(0);let k=0,z=e.width,W=e.height,Y=1,et=null,st=null;const ut=new be(0,0,z,W),yt=new be(0,0,z,W);let Bt=!1;const J=new Dh;let nt=!1,dt=!1;this.transmissionResolutionScale=1;const lt=new Te,At=new Te,$t=new L,Ft=new be,le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ne=!1;function Ht(){return C===null?Y:1}let V=n;function xe(A,G){return e.getContext(A,G)}try{const A={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gh}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",xt,!1),V===null){const G="webgl2";if(V=xe(G,A),V===null)throw xe(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Zt,qt,wt,Lt,_t,R,T,Z,rt,ot,tt,Ct,pt,gt,jt,ct,Mt,Pt,zt,Et,Wt,Nt,ie,X;function ft(){Zt=new zx(V),Zt.init(),Nt=new yM(V,Zt),qt=new Dx(V,Zt,t,Nt),wt=new vM(V,Zt),qt.reverseDepthBuffer&&d&&wt.buffers.depth.setReversed(!0),Lt=new Vx(V),_t=new rM,R=new xM(V,Zt,wt,_t,qt,Nt,Lt),T=new Ix(v),Z=new Ox(v),rt=new qg(V),ie=new Rx(V,rt),ot=new Bx(V,rt,Lt,ie),tt=new Gx(V,ot,rt,Lt),zt=new Hx(V,qt,R),ct=new Lx(_t),Ct=new sM(v,T,Z,Zt,qt,ie,ct),pt=new TM(v,_t),gt=new aM,jt=new fM(Zt),Pt=new Cx(v,T,Z,wt,tt,p,l),Mt=new _M(v,tt,qt),X=new AM(V,Lt,qt,wt),Et=new Px(V,Zt,Lt),Wt=new kx(V,Zt,Lt),Lt.programs=Ct.programs,v.capabilities=qt,v.extensions=Zt,v.properties=_t,v.renderLists=gt,v.shadowMap=Mt,v.state=wt,v.info=Lt}ft();const K=new bM(v,V);this.xr=K,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=Zt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Zt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(z,W,!1))},this.getSize=function(A){return A.set(z,W)},this.setSize=function(A,G,$=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,W=G,e.width=Math.floor(A*Y),e.height=Math.floor(G*Y),$===!0&&(e.style.width=A+"px",e.style.height=G+"px"),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(z*Y,W*Y).floor()},this.setDrawingBufferSize=function(A,G,$){z=A,W=G,Y=$,e.width=Math.floor(A*$),e.height=Math.floor(G*$),this.setViewport(0,0,A,G)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ut)},this.setViewport=function(A,G,$,j){A.isVector4?ut.set(A.x,A.y,A.z,A.w):ut.set(A,G,$,j),wt.viewport(P.copy(ut).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(yt)},this.setScissor=function(A,G,$,j){A.isVector4?yt.set(A.x,A.y,A.z,A.w):yt.set(A,G,$,j),wt.scissor(I.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Bt},this.setScissorTest=function(A){wt.setScissorTest(Bt=A)},this.setOpaqueSort=function(A){et=A},this.setTransparentSort=function(A){st=A},this.getClearColor=function(A){return A.copy(Pt.getClearColor())},this.setClearColor=function(){Pt.setClearColor(...arguments)},this.getClearAlpha=function(){return Pt.getClearAlpha()},this.setClearAlpha=function(){Pt.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,$=!0){let j=0;if(A){let q=!1;if(C!==null){const ht=C.texture.format;q=ht===bh||ht===Eh||ht===Sh}if(q){const ht=C.texture.type,bt=ht===Ui||ht===Bs||ht===go||ht===Tr||ht===yh||ht===Mh,Dt=Pt.getClearColor(),Ut=Pt.getClearAlpha(),Qt=Dt.r,ee=Dt.g,Gt=Dt.b;bt?(f[0]=Qt,f[1]=ee,f[2]=Gt,f[3]=Ut,V.clearBufferuiv(V.COLOR,0,f)):(_[0]=Qt,_[1]=ee,_[2]=Gt,_[3]=Ut,V.clearBufferiv(V.COLOR,0,_))}else j|=V.COLOR_BUFFER_BIT}G&&(j|=V.DEPTH_BUFFER_BIT),$&&(j|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),Pt.dispose(),gt.dispose(),jt.dispose(),_t.dispose(),T.dispose(),Z.dispose(),tt.dispose(),ie.dispose(),X.dispose(),Ct.dispose(),K.dispose(),K.removeEventListener("sessionstart",wn),K.removeEventListener("sessionend",Kt),Bn.stop()};function it(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const A=Lt.autoReset,G=Mt.enabled,$=Mt.autoUpdate,j=Mt.needsUpdate,q=Mt.type;ft(),Lt.autoReset=A,Mt.enabled=G,Mt.autoUpdate=$,Mt.needsUpdate=j,Mt.type=q}function xt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function kt(A){const G=A.target;G.removeEventListener("dispose",kt),he(G)}function he(A){ge(A),_t.remove(A)}function ge(A){const G=_t.get(A).programs;G!==void 0&&(G.forEach(function($){Ct.releaseProgram($)}),A.isShaderMaterial&&Ct.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,$,j,q,ht){G===null&&(G=le);const bt=q.isMesh&&q.matrixWorld.determinant()<0,Dt=mt(A,G,$,j,q);wt.setMaterial(j,bt);let Ut=$.index,Qt=1;if(j.wireframe===!0){if(Ut=ot.getWireframeAttribute($),Ut===void 0)return;Qt=2}const ee=$.drawRange,Gt=$.attributes.position;let de=ee.start*Qt,me=(ee.start+ee.count)*Qt;ht!==null&&(de=Math.max(de,ht.start*Qt),me=Math.min(me,(ht.start+ht.count)*Qt)),Ut!==null?(de=Math.max(de,0),me=Math.min(me,Ut.count)):Gt!=null&&(de=Math.max(de,0),me=Math.min(me,Gt.count));const ze=me-de;if(ze<0||ze===1/0)return;ie.setup(q,j,Dt,$,Ut);let Fe,fe=Et;if(Ut!==null&&(Fe=rt.get(Ut),fe=Wt,fe.setIndex(Fe)),q.isMesh)j.wireframe===!0?(wt.setLineWidth(j.wireframeLinewidth*Ht()),fe.setMode(V.LINES)):fe.setMode(V.TRIANGLES);else if(q.isLine){let Yt=j.linewidth;Yt===void 0&&(Yt=1),wt.setLineWidth(Yt*Ht()),q.isLineSegments?fe.setMode(V.LINES):q.isLineLoop?fe.setMode(V.LINE_LOOP):fe.setMode(V.LINE_STRIP)}else q.isPoints?fe.setMode(V.POINTS):q.isSprite&&fe.setMode(V.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))fe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Yt=q._multiDrawStarts,Ze=q._multiDrawCounts,_e=q._multiDrawCount,Kn=Ut?rt.get(Ut).bytesPerElement:1,qs=_t.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<_e;Tn++)qs.setValue(V,"_gl_DrawID",Tn),fe.render(Yt[Tn]/Kn,Ze[Tn])}else if(q.isInstancedMesh)fe.renderInstances(de,ze,q.count);else if($.isInstancedBufferGeometry){const Yt=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Ze=Math.min($.instanceCount,Yt);fe.renderInstances(de,ze,Ze)}else fe.render(de,ze)};function Jt(A,G,$){A.transparent===!0&&A.side===He&&A.forceSinglePass===!1?(A.side=dn,A.needsUpdate=!0,B(A,G,$),A.side=rs,A.needsUpdate=!0,B(A,G,$),A.side=He):B(A,G,$)}this.compile=function(A,G,$=null){$===null&&($=A),m=jt.get($),m.init(G),y.push(m),$.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),A!==$&&A.traverseVisible(function(q){q.isLight&&q.layers.test(G.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const j=new Set;return A.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ht=q.material;if(ht)if(Array.isArray(ht))for(let bt=0;bt<ht.length;bt++){const Dt=ht[bt];Jt(Dt,$,q),j.add(Dt)}else Jt(ht,$,q),j.add(ht)}),m=y.pop(),j},this.compileAsync=function(A,G,$=null){const j=this.compile(A,G,$);return new Promise(q=>{function ht(){if(j.forEach(function(bt){_t.get(bt).currentProgram.isReady()&&j.delete(bt)}),j.size===0){q(A);return}setTimeout(ht,10)}Zt.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let we=null;function $e(A){we&&we(A)}function wn(){Bn.stop()}function Kt(){Bn.start()}const Bn=new Xf;Bn.setAnimationLoop($e),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(A){we=A,K.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},K.addEventListener("sessionstart",wn),K.addEventListener("sessionend",Kt),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(G),G=K.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,G,C),m=jt.get(A,y.length),m.init(G),y.push(m),At.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),J.setFromProjectionMatrix(At),dt=this.localClippingEnabled,nt=ct.init(this.clippingPlanes,dt),g=gt.get(A,x.length),g.init(),x.push(g),K.enabled===!0&&K.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&ki(ht,G,-1/0,v.sortObjects)}ki(A,G,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(et,st),ne=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,ne&&Pt.addToRenderList(g,A),this.info.render.frame++,nt===!0&&ct.beginShadows();const $=m.state.shadowsArray;Mt.render($,A,G),nt===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=g.opaque,q=g.transmissive;if(m.setupLights(),G.isArrayCamera){const ht=G.cameras;if(q.length>0)for(let bt=0,Dt=ht.length;bt<Dt;bt++){const Ut=ht[bt];O(j,q,A,Ut)}ne&&Pt.render(A);for(let bt=0,Dt=ht.length;bt<Dt;bt++){const Ut=ht[bt];D(g,A,Ut,Ut.viewport)}}else q.length>0&&O(j,q,A,G),ne&&Pt.render(A),D(g,A,G);C!==null&&w===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,G),ie.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],nt===!0&&ct.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function ki(A,G,$,j){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){j&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(At);const bt=tt.update(A),Dt=A.material;Dt.visible&&g.push(A,bt,Dt,$,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const bt=tt.update(A),Dt=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Ft.copy(bt.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(At)),Array.isArray(Dt)){const Ut=bt.groups;for(let Qt=0,ee=Ut.length;Qt<ee;Qt++){const Gt=Ut[Qt],de=Dt[Gt.materialIndex];de&&de.visible&&g.push(A,bt,de,$,Ft.z,Gt)}}else Dt.visible&&g.push(A,bt,Dt,$,Ft.z,null)}}const ht=A.children;for(let bt=0,Dt=ht.length;bt<Dt;bt++)ki(ht[bt],G,$,j)}function D(A,G,$,j){const q=A.opaque,ht=A.transmissive,bt=A.transparent;m.setupLightsView($),nt===!0&&ct.setGlobalState(v.clippingPlanes,$),j&&wt.viewport(P.copy(j)),q.length>0&&F(q,G,$),ht.length>0&&F(ht,G,$),bt.length>0&&F(bt,G,$),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function O(A,G,$,j){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[j.id]===void 0&&(m.state.transmissionRenderTarget[j.id]=new ks(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?Uo:Ui,minFilter:Zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ht=m.state.transmissionRenderTarget[j.id],bt=j.viewport||P;ht.setSize(bt.z*v.transmissionResolutionScale,bt.w*v.transmissionResolutionScale);const Dt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(H),k=v.getClearAlpha(),k<1&&v.setClearColor(16777215,.5),v.clear(),ne&&Pt.render($);const Ut=v.toneMapping;v.toneMapping=es;const Qt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),m.setupLightsView(j),nt===!0&&ct.setGlobalState(v.clippingPlanes,j),F(A,$,j),R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Gt=0,de=G.length;Gt<de;Gt++){const me=G[Gt],ze=me.object,Fe=me.geometry,fe=me.material,Yt=me.group;if(fe.side===He&&ze.layers.test(j.layers)){const Ze=fe.side;fe.side=dn,fe.needsUpdate=!0,U(ze,$,j,Fe,fe,Yt),fe.side=Ze,fe.needsUpdate=!0,ee=!0}}ee===!0&&(R.updateMultisampleRenderTarget(ht),R.updateRenderTargetMipmap(ht))}v.setRenderTarget(Dt),v.setClearColor(H,k),Qt!==void 0&&(j.viewport=Qt),v.toneMapping=Ut}function F(A,G,$){const j=G.isScene===!0?G.overrideMaterial:null;for(let q=0,ht=A.length;q<ht;q++){const bt=A[q],Dt=bt.object,Ut=bt.geometry,Qt=j===null?bt.material:j,ee=bt.group;Dt.layers.test($.layers)&&U(Dt,G,$,Ut,Qt,ee)}}function U(A,G,$,j,q,ht){A.onBeforeRender(v,G,$,j,q,ht),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),q.onBeforeRender(v,G,$,j,A,ht),q.transparent===!0&&q.side===He&&q.forceSinglePass===!1?(q.side=dn,q.needsUpdate=!0,v.renderBufferDirect($,G,j,q,A,ht),q.side=rs,q.needsUpdate=!0,v.renderBufferDirect($,G,j,q,A,ht),q.side=He):v.renderBufferDirect($,G,j,q,A,ht),A.onAfterRender(v,G,$,j,q,ht)}function B(A,G,$){G.isScene!==!0&&(G=le);const j=_t.get(A),q=m.state.lights,ht=m.state.shadowsArray,bt=q.state.version,Dt=Ct.getParameters(A,q.state,ht,G,$),Ut=Ct.getProgramCacheKey(Dt);let Qt=j.programs;j.environment=A.isMeshStandardMaterial?G.environment:null,j.fog=G.fog,j.envMap=(A.isMeshStandardMaterial?Z:T).get(A.envMap||j.environment),j.envMapRotation=j.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,Qt===void 0&&(A.addEventListener("dispose",kt),Qt=new Map,j.programs=Qt);let ee=Qt.get(Ut);if(ee!==void 0){if(j.currentProgram===ee&&j.lightsStateVersion===bt)return at(A,Dt),ee}else Dt.uniforms=Ct.getUniforms(A),A.onBeforeCompile(Dt,v),ee=Ct.acquireProgram(Dt,Ut),Qt.set(Ut,ee),j.uniforms=Dt.uniforms;const Gt=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Gt.clippingPlanes=ct.uniform),at(A,Dt),j.needsLights=It(A),j.lightsStateVersion=bt,j.needsLights&&(Gt.ambientLightColor.value=q.state.ambient,Gt.lightProbe.value=q.state.probe,Gt.directionalLights.value=q.state.directional,Gt.directionalLightShadows.value=q.state.directionalShadow,Gt.spotLights.value=q.state.spot,Gt.spotLightShadows.value=q.state.spotShadow,Gt.rectAreaLights.value=q.state.rectArea,Gt.ltc_1.value=q.state.rectAreaLTC1,Gt.ltc_2.value=q.state.rectAreaLTC2,Gt.pointLights.value=q.state.point,Gt.pointLightShadows.value=q.state.pointShadow,Gt.hemisphereLights.value=q.state.hemi,Gt.directionalShadowMap.value=q.state.directionalShadowMap,Gt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Gt.spotShadowMap.value=q.state.spotShadowMap,Gt.spotLightMatrix.value=q.state.spotLightMatrix,Gt.spotLightMap.value=q.state.spotLightMap,Gt.pointShadowMap.value=q.state.pointShadowMap,Gt.pointShadowMatrix.value=q.state.pointShadowMatrix),j.currentProgram=ee,j.uniformsList=null,ee}function Q(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=Ea.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function at(A,G){const $=_t.get(A);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function mt(A,G,$,j,q){G.isScene!==!0&&(G=le),R.resetTextureUnits();const ht=G.fog,bt=j.isMeshStandardMaterial?G.environment:null,Dt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Cr,Ut=(j.isMeshStandardMaterial?Z:T).get(j.envMap||bt),Qt=j.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,ee=!!$.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Gt=!!$.morphAttributes.position,de=!!$.morphAttributes.normal,me=!!$.morphAttributes.color;let ze=es;j.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ze=v.toneMapping);const Fe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,fe=Fe!==void 0?Fe.length:0,Yt=_t.get(j),Ze=m.state.lights;if(nt===!0&&(dt===!0||A!==S)){const an=A===S&&j.id===M;ct.setState(j,A,an)}let _e=!1;j.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Ze.state.version||Yt.outputColorSpace!==Dt||q.isBatchedMesh&&Yt.batching===!1||!q.isBatchedMesh&&Yt.batching===!0||q.isBatchedMesh&&Yt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Yt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Yt.instancing===!1||!q.isInstancedMesh&&Yt.instancing===!0||q.isSkinnedMesh&&Yt.skinning===!1||!q.isSkinnedMesh&&Yt.skinning===!0||q.isInstancedMesh&&Yt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Yt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Yt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Yt.instancingMorph===!1&&q.morphTexture!==null||Yt.envMap!==Ut||j.fog===!0&&Yt.fog!==ht||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==ct.numPlanes||Yt.numIntersection!==ct.numIntersection)||Yt.vertexAlphas!==Qt||Yt.vertexTangents!==ee||Yt.morphTargets!==Gt||Yt.morphNormals!==de||Yt.morphColors!==me||Yt.toneMapping!==ze||Yt.morphTargetsCount!==fe)&&(_e=!0):(_e=!0,Yt.__version=j.version);let Kn=Yt.currentProgram;_e===!0&&(Kn=B(j,G,q));let qs=!1,Tn=!1,Wr=!1;const Ce=Kn.getUniforms(),kn=Yt.uniforms;if(wt.useProgram(Kn.program)&&(qs=!0,Tn=!0,Wr=!0),j.id!==M&&(M=j.id,Tn=!0),qs||S!==A){wt.buffers.depth.getReversed()?(lt.copy(A.projectionMatrix),D_(lt),L_(lt),Ce.setValue(V,"projectionMatrix",lt)):Ce.setValue(V,"projectionMatrix",A.projectionMatrix),Ce.setValue(V,"viewMatrix",A.matrixWorldInverse);const pn=Ce.map.cameraPosition;pn!==void 0&&pn.setValue(V,$t.setFromMatrixPosition(A.matrixWorld)),qt.logarithmicDepthBuffer&&Ce.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ce.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Tn=!0,Wr=!0)}if(q.isSkinnedMesh){Ce.setOptional(V,q,"bindMatrix"),Ce.setOptional(V,q,"bindMatrixInverse");const an=q.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Ce.setValue(V,"boneTexture",an.boneTexture,R))}q.isBatchedMesh&&(Ce.setOptional(V,q,"batchingTexture"),Ce.setValue(V,"batchingTexture",q._matricesTexture,R),Ce.setOptional(V,q,"batchingIdTexture"),Ce.setValue(V,"batchingIdTexture",q._indirectTexture,R),Ce.setOptional(V,q,"batchingColorTexture"),q._colorsTexture!==null&&Ce.setValue(V,"batchingColorTexture",q._colorsTexture,R));const Vn=$.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&zt.update(q,$,Kn),(Tn||Yt.receiveShadow!==q.receiveShadow)&&(Yt.receiveShadow=q.receiveShadow,Ce.setValue(V,"receiveShadow",q.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(kn.envMap.value=Ut,kn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&G.environment!==null&&(kn.envMapIntensity.value=G.environmentIntensity),Tn&&(Ce.setValue(V,"toneMappingExposure",v.toneMappingExposure),Yt.needsLights&&Ot(kn,Wr),ht&&j.fog===!0&&pt.refreshFogUniforms(kn,ht),pt.refreshMaterialUniforms(kn,j,Y,W,m.state.transmissionRenderTarget[A.id]),Ea.upload(V,Q(Yt),kn,R)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ea.upload(V,Q(Yt),kn,R),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ce.setValue(V,"center",q.center),Ce.setValue(V,"modelViewMatrix",q.modelViewMatrix),Ce.setValue(V,"normalMatrix",q.normalMatrix),Ce.setValue(V,"modelMatrix",q.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const an=j.uniformsGroups;for(let pn=0,hl=an.length;pn<hl;pn++){const ps=an[pn];X.update(ps,Kn),X.bind(ps,Kn)}}return Kn}function Ot(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function It(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,G,$){_t.get(A.texture).__webglTexture=G,_t.get(A.depthTexture).__webglTexture=$;const j=_t.get(A);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=$===void 0,j.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,G){const $=_t.get(A);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0};const Rt=V.createFramebuffer();this.setRenderTarget=function(A,G=0,$=0){C=A,b=G,w=$;let j=!0,q=null,ht=!1,bt=!1;if(A){const Ut=_t.get(A);if(Ut.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(V.FRAMEBUFFER,null),j=!1;else if(Ut.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(Ut.__hasExternalTextures)R.rebindTextures(A,_t.get(A.texture).__webglTexture,_t.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Gt=A.depthTexture;if(Ut.__boundDepthTexture!==Gt){if(Gt!==null&&_t.has(Gt)&&(A.width!==Gt.image.width||A.height!==Gt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}const Qt=A.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(bt=!0);const ee=_t.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[G])?q=ee[G][$]:q=ee[G],ht=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?q=_t.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[$]:q=ee,P.copy(A.viewport),I.copy(A.scissor),N=A.scissorTest}else P.copy(ut).multiplyScalar(Y).floor(),I.copy(yt).multiplyScalar(Y).floor(),N=Bt;if($!==0&&(q=Rt),wt.bindFramebuffer(V.FRAMEBUFFER,q)&&j&&wt.drawBuffers(A,q),wt.viewport(P),wt.scissor(I),wt.setScissorTest(N),ht){const Ut=_t.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ut.__webglTexture,$)}else if(bt){const Ut=_t.get(A.texture),Qt=G;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ut.__webglTexture,$,Qt)}else if(A!==null&&$!==0){const Ut=_t.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Ut.__webglTexture,$)}M=-1},this.readRenderTargetPixels=function(A,G,$,j,q,ht,bt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){wt.bindFramebuffer(V.FRAMEBUFFER,Dt);try{const Ut=A.texture,Qt=Ut.format,ee=Ut.type;if(!qt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-j&&$>=0&&$<=A.height-q&&V.readPixels(G,$,j,q,Nt.convert(Qt),Nt.convert(ee),ht)}finally{const Ut=C!==null?_t.get(C).__webglFramebuffer:null;wt.bindFramebuffer(V.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(A,G,$,j,q,ht,bt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=_t.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&bt!==void 0&&(Dt=Dt[bt]),Dt){const Ut=A.texture,Qt=Ut.format,ee=Ut.type;if(!qt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=A.width-j&&$>=0&&$<=A.height-q){wt.bindFramebuffer(V.FRAMEBUFFER,Dt);const Gt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.bufferData(V.PIXEL_PACK_BUFFER,ht.byteLength,V.STREAM_READ),V.readPixels(G,$,j,q,Nt.convert(Qt),Nt.convert(ee),0);const de=C!==null?_t.get(C).__webglFramebuffer:null;wt.bindFramebuffer(V.FRAMEBUFFER,de);const me=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await P_(V,me,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,Gt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,ht),V.deleteBuffer(Gt),V.deleteSync(me),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,G=null,$=0){A.isTexture!==!0&&(bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,A=arguments[1]);const j=Math.pow(2,-$),q=Math.floor(A.image.width*j),ht=Math.floor(A.image.height*j),bt=G!==null?G.x:0,Dt=G!==null?G.y:0;R.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,$,0,0,bt,Dt,q,ht),wt.unbindTexture()};const Xt=V.createFramebuffer(),te=V.createFramebuffer();this.copyTextureToTexture=function(A,G,$=null,j=null,q=0,ht=null){A.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,A=arguments[1],G=arguments[2],ht=arguments[3]||0,$=null),ht===null&&(q!==0?(bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=q,q=0):ht=0);let bt,Dt,Ut,Qt,ee,Gt,de,me,ze;const Fe=A.isCompressedTexture?A.mipmaps[ht]:A.image;if($!==null)bt=$.max.x-$.min.x,Dt=$.max.y-$.min.y,Ut=$.isBox3?$.max.z-$.min.z:1,Qt=$.min.x,ee=$.min.y,Gt=$.isBox3?$.min.z:0;else{const Vn=Math.pow(2,-q);bt=Math.floor(Fe.width*Vn),Dt=Math.floor(Fe.height*Vn),A.isDataArrayTexture?Ut=Fe.depth:A.isData3DTexture?Ut=Math.floor(Fe.depth*Vn):Ut=1,Qt=0,ee=0,Gt=0}j!==null?(de=j.x,me=j.y,ze=j.z):(de=0,me=0,ze=0);const fe=Nt.convert(G.format),Yt=Nt.convert(G.type);let Ze;G.isData3DTexture?(R.setTexture3D(G,0),Ze=V.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(R.setTexture2DArray(G,0),Ze=V.TEXTURE_2D_ARRAY):(R.setTexture2D(G,0),Ze=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,G.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,G.unpackAlignment);const _e=V.getParameter(V.UNPACK_ROW_LENGTH),Kn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),qs=V.getParameter(V.UNPACK_SKIP_PIXELS),Tn=V.getParameter(V.UNPACK_SKIP_ROWS),Wr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Fe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Fe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Qt),V.pixelStorei(V.UNPACK_SKIP_ROWS,ee),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Gt);const Ce=A.isDataArrayTexture||A.isData3DTexture,kn=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Vn=_t.get(A),an=_t.get(G),pn=_t.get(Vn.__renderTarget),hl=_t.get(an.__renderTarget);wt.bindFramebuffer(V.READ_FRAMEBUFFER,pn.__webglFramebuffer),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,hl.__webglFramebuffer);for(let ps=0;ps<Ut;ps++)Ce&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_t.get(A).__webglTexture,q,Gt+ps),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,_t.get(G).__webglTexture,ht,ze+ps)),V.blitFramebuffer(Qt,ee,bt,Dt,de,me,bt,Dt,V.DEPTH_BUFFER_BIT,V.NEAREST);wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(q!==0||A.isRenderTargetTexture||_t.has(A)){const Vn=_t.get(A),an=_t.get(G);wt.bindFramebuffer(V.READ_FRAMEBUFFER,Xt),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,te);for(let pn=0;pn<Ut;pn++)Ce?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Vn.__webglTexture,q,Gt+pn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Vn.__webglTexture,q),kn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,an.__webglTexture,ht,ze+pn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,an.__webglTexture,ht),q!==0?V.blitFramebuffer(Qt,ee,bt,Dt,de,me,bt,Dt,V.COLOR_BUFFER_BIT,V.NEAREST):kn?V.copyTexSubImage3D(Ze,ht,de,me,ze+pn,Qt,ee,bt,Dt):V.copyTexSubImage2D(Ze,ht,de,me,Qt,ee,bt,Dt);wt.bindFramebuffer(V.READ_FRAMEBUFFER,null),wt.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else kn?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Ze,ht,de,me,ze,bt,Dt,Ut,fe,Yt,Fe.data):G.isCompressedArrayTexture?V.compressedTexSubImage3D(Ze,ht,de,me,ze,bt,Dt,Ut,fe,Fe.data):V.texSubImage3D(Ze,ht,de,me,ze,bt,Dt,Ut,fe,Yt,Fe):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,ht,de,me,bt,Dt,fe,Yt,Fe.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,ht,de,me,Fe.width,Fe.height,fe,Fe.data):V.texSubImage2D(V.TEXTURE_2D,ht,de,me,bt,Dt,fe,Yt,Fe);V.pixelStorei(V.UNPACK_ROW_LENGTH,_e),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Kn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,qs),V.pixelStorei(V.UNPACK_SKIP_ROWS,Tn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Wr),ht===0&&G.generateMipmaps&&V.generateMipmap(Ze),wt.unbindTexture()},this.copyTextureToTexture3D=function(A,G,$=null,j=null,q=0){return A.isTexture!==!0&&(bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,j=arguments[1]||null,A=arguments[2],G=arguments[3],q=arguments[4]||0),bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,G,$,j,q)},this.initRenderTarget=function(A){_t.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){b=0,w=0,C=null,wt.reset(),ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}const xd={type:"change"},kh={type:"start"},jf={type:"end"},ua=new Qa,yd=new Ci,CM=Math.cos(70*bf.DEG2RAD),Ve=new L,mn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class Kf extends Xg{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Vs,this._lastTargetPosition=new L,this._quat=new Vs().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new za,this._sphericalDelta=new za,this._scale=1,this._panOffset=new L,this._rotateStart=new Tt,this._rotateEnd=new Tt,this._rotateDelta=new Tt,this._panStart=new Tt,this._panEnd=new Tt,this._panDelta=new Tt,this._dollyStart=new Tt,this._dollyEnd=new Tt,this._dollyDelta=new Tt,this._dollyDirection=new L,this._mouse=new Tt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=PM.bind(this),this._onPointerDown=RM.bind(this),this._onPointerUp=DM.bind(this),this._onContextMenu=zM.bind(this),this._onMouseWheel=UM.bind(this),this._onKeyDown=FM.bind(this),this._onTouchStart=NM.bind(this),this._onTouchMove=OM.bind(this),this._onMouseDown=LM.bind(this),this._onMouseMove=IM.bind(this),this._interceptControlDown=BM.bind(this),this._interceptControlUp=kM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xd),this.update(),this.state=Me.NONE}update(t=null){const e=this.object.position;Ve.copy(e).sub(this.target),Ve.applyQuaternion(this._quat),this._spherical.setFromVector3(Ve),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),i<-Math.PI?i+=mn:i>Math.PI&&(i-=mn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Ve.setFromSpherical(this._spherical),Ve.applyQuaternion(this._quatInverse),e.copy(this.target).add(Ve),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ve.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Ve.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(ua.origin.copy(this.object.position),ua.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ua.direction))<CM?this.object.lookAt(this.target):(yd.setFromNormalAndCoplanarPoint(this.object.up,this.target),ua.intersectPlane(yd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(xd),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?mn/60*this.autoRotateSpeed*t:mn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Ve.setFromMatrixColumn(e,0),Ve.multiplyScalar(-t),this._panOffset.add(Ve)}_panUp(t,e){this.screenSpacePanning===!0?Ve.setFromMatrixColumn(e,1):(Ve.setFromMatrixColumn(e,0),Ve.crossVectors(this.object.up,Ve)),Ve.multiplyScalar(t),this._panOffset.add(Ve)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Ve.copy(i).sub(this.target);let r=Ve.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/e.clientHeight),this._rotateUp(mn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Tt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function RM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function PM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function DM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jf),this.state=Me.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function LM(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Me.DOLLY;break;case pr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Me.ROTATE}break;case pr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(kh)}function IM(s){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function UM(s){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(s.preventDefault(),this.dispatchEvent(kh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(jf))}function FM(s){this.enabled!==!1&&this._handleKeyDown(s)}function NM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Me.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Me.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(kh)}function OM(s){switch(this._trackPointer(s),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Me.NONE}}function zM(s){this.enabled!==!1&&s.preventDefault()}function BM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function kM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Vh=(()=>{const s=(1+Math.sqrt(5))/2,t=[];function e(d,p,f){const _=[[d,p,f],[p,f,d],[f,d,p]];for(const[g,m,x]of _){const y=g===0?[0]:[g,-g],v=m===0?[0]:[m,-m],E=x===0?[0]:[x,-x];for(const b of y)for(const w of v)for(const C of E)t.push([b,w,C])}}e(0,1,3*s),e(2,1+2*s,s),e(1,2+s,2*s);for(let d=0;d<t.length;d++){const[p,f,_]=t[d],g=Math.sqrt(p*p+f*f+_*_);t[d]=[p/g,f/g,_/g]}let n=1/0;for(let d=0;d<t.length;d++)for(let p=d+1;p<t.length;p++){const f=t[d][0]-t[p][0],_=t[d][1]-t[p][1],g=t[d][2]-t[p][2],m=Math.sqrt(f*f+_*_+g*g);m<n&&(n=m)}const i=[];for(let d=0;d<t.length;d++)for(let p=d+1;p<t.length;p++){const f=t[d][0]-t[p][0],_=t[d][1]-t[p][1],g=t[d][2]-t[p][2];Math.sqrt(f*f+_*_+g*g)<n+.01&&i.push([d,p])}const o=[[0,1,s],[0,-1,s],[0,1,-s],[0,-1,-s],[1,s,0],[-1,s,0],[1,-s,0],[-1,-s,0],[s,0,1],[-s,0,1],[s,0,-1],[-s,0,-1]].map(([d,p,f])=>{const _=Math.sqrt(d*d+p*p+f*f);return[d/_,p/_,f/_]}),a=[];for(const d of o){const p=t.map((z,W)=>({i:W,d:(z[0]-d[0])**2+(z[1]-d[1])**2+(z[2]-d[2])**2}));p.sort((z,W)=>z.d-W.d);const f=p.slice(0,5).map(z=>z.i),_=f.reduce((z,W)=>z+t[W][0],0)/5,g=f.reduce((z,W)=>z+t[W][1],0)/5,m=f.reduce((z,W)=>z+t[W][2],0)/5,x=d[0],y=d[1],v=d[2],E=t[f[0]][0]-_,b=t[f[0]][1]-g,w=t[f[0]][2]-m,C=E*x+b*y+w*v;let M=E-C*x,S=b-C*y,P=w-C*v;const I=Math.sqrt(M*M+S*S+P*P);M/=I,S/=I,P/=I;const N=y*P-v*S,H=v*M-x*P,k=x*S-y*M;f.sort((z,W)=>{const Y=t[z][0]-_,et=t[z][1]-g,st=t[z][2]-m,ut=t[W][0]-_,yt=t[W][1]-g,Bt=t[W][2]-m;return Math.atan2(Y*N+et*H+st*k,Y*M+et*S+st*P)-Math.atan2(ut*N+yt*H+Bt*k,ut*M+yt*S+Bt*P)}),a.push(f)}const l=new Map;for(const[d,p]of i)l.has(d)||l.set(d,[]),l.has(p)||l.set(p,[]),l.get(d).push(p),l.get(p).push(d);const c=t.map((d,p)=>{const f=l.get(p),_=t[f[0]];let g=_[0]-d[0],m=_[1]-d[1],x=_[2]-d[2];const y=g*d[0]+m*d[1]+x*d[2];g-=y*d[0],m-=y*d[1],x-=y*d[2];const v=Math.sqrt(g*g+m*m+x*x);g/=v,m/=v,x/=v;const E=m*d[2]-x*d[1],b=x*d[0]-g*d[2],w=g*d[1]-m*d[0];return[...f].sort((C,M)=>{const S=[t[C][0]-d[0],t[C][1]-d[1],t[C][2]-d[2]],P=[t[M][0]-d[0],t[M][1]-d[1],t[M][2]-d[2]];return Math.atan2(S[0]*E+S[1]*b+S[2]*w,S[0]*g+S[1]*m+S[2]*x)-Math.atan2(P[0]*E+P[1]*b+P[2]*w,P[0]*g+P[1]*m+P[2]*x)})}),h=[],u=new Set;for(const[d,p]of i)for(const[f,_]of[[d,p],[p,d]]){const g=`${f}-${_}`;if(u.has(g))continue;const m=[];let x=f,y=_;for(let v=0;v<8;v++){u.add(`${x}-${y}`),m.push(x);const E=c[y],b=E.indexOf(x),w=E[(b-1+E.length)%E.length];if(x=y,y=w,x===f&&y===_)break}m.length===6&&h.push(m)}return{verts:t,edges:i,pentagons:a,hexFaces:h}})();function VM(s,t,{amplitude:e,sharpness:n,segments:i,taperFn:r}){const o=Math.acos(Math.min(1,s.dot(t))),a=Math.sin(o),l=t.clone().sub(s).normalize(),c=[];for(let h=0;h<=i;h++){const u=h/i,d=s.clone().multiplyScalar(Math.sin((1-u)*o)/a).add(t.clone().multiplyScalar(Math.sin(u*o)/a)),p=d.clone().normalize(),f=new L().crossVectors(p,l).normalize(),_=Math.sin(2*Math.PI*u),g=Math.sign(_)*Math.pow(Math.abs(_),n),m=r(u),x=e*g*m;d.add(f.multiplyScalar(x)),d.normalize(),c.push(d)}return c}function Jf(s,t,e){const n=new Map;for(const[i,r]of t){const o=VM(s[i],s[r],e);n.set(`${i}-${r}`,o),n.set(`${r}-${i}`,[...o].reverse())}return n}const Re=1/Math.sqrt(3),sl=[new L(Re,Re,Re),new L(Re,Re,-Re),new L(Re,-Re,Re),new L(Re,-Re,-Re),new L(-Re,Re,Re),new L(-Re,Re,-Re),new L(-Re,-Re,Re),new L(-Re,-Re,-Re)],Qf=[[0,1,3,2],[4,6,7,5],[0,4,5,1],[2,3,7,6],[0,2,6,4],[1,5,7,3]],tp=[[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]],HM=.72,GM=.35,WM=32;function XM(s){return Math.sin(Math.PI*s)}function ep(){return Jf(sl,tp,{amplitude:HM,sharpness:GM,segments:WM,taperFn:XM})}const Gn=1/Math.sqrt(3),So=[new L(Gn,Gn,Gn),new L(Gn,-Gn,-Gn),new L(-Gn,Gn,-Gn),new L(-Gn,-Gn,Gn)],np=[[1,2,3],[0,2,3],[0,1,3],[0,1,2]],ip=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],YM=.58,qM=.7,$M=32,Md=.35;function ZM(s){return Md+(1-Md)*Math.sin(Math.PI*s)}function sp(){return Jf(So,ip,{amplitude:YM,sharpness:qM,segments:$M,taperFn:ZM})}const Wn=1/Math.sqrt(3),ho=[[Wn,Wn,Wn],[Wn,-Wn,-Wn],[-Wn,Wn,-Wn],[-Wn,-Wn,Wn]],rp=[];for(let s=0;s<4;s++)for(let t=s+1;t<4;t++){const e=ho[s],n=ho[t];rp.push([(2*e[0]+n[0])/3,(2*e[1]+n[1])/3,(2*e[2]+n[2])/3],[(e[0]+2*n[0])/3,(e[1]+2*n[1])/3,(e[2]+2*n[2])/3])}const Li=rp.map(s=>{const t=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);return new L(s[0]/t,s[1]/t,s[2]/t)}),Ti=[[0,2,4],[1,6,8],[3,7,10],[5,9,11],[6,8,9,11,10,7],[2,4,5,11,10,3],[4,0,1,8,9,5],[0,2,3,7,6,1]],jM=[{tetraIdx:0,edges:[[0,2],[2,4],[4,0]]},{tetraIdx:1,edges:[[1,6],[6,8],[8,1]]},{tetraIdx:2,edges:[[3,7],[7,10],[10,3]]},{tetraIdx:3,edges:[[5,9],[9,11],[11,5]]}],op=[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]],KM=.18,JM=.15,Sd=48;function Ed(s,t,e,n){const i=Math.acos(Math.min(1,s.dot(t))),r=Math.sin(i),o=t.clone().sub(s).normalize(),a=[];for(let l=0;l<=n;l++){const c=l/n,h=s.clone().multiplyScalar(Math.sin((1-c)*i)/r).add(t.clone().multiplyScalar(Math.sin(c*i)/r));if(e!==0){const u=h.clone().normalize(),d=new L().crossVectors(u,o).normalize();h.add(d.multiplyScalar(e*Math.sin(Math.PI*c)))}h.normalize(),a.push(h)}return a}function QM(s,t,e){const n=Li[s],i=Li[t],r=n.clone().add(i).multiplyScalar(.5).normalize(),o=i.clone().sub(n).normalize(),a=new L().crossVectors(r,o).normalize(),l=new L(ho[e][0],ho[e][1],ho[e][2]);return(a.dot(l)>0?-1:1)*KM}function ap(){const s=new Map;for(const t of jM)for(const[e,n]of t.edges){const i=`${e}-${n}`;if(s.has(i))continue;const r=QM(e,n,t.tetraIdx),o=Ed(Li[e],Li[n],r,Sd);s.set(`${e}-${n}`,o),s.set(`${n}-${e}`,[...o].reverse())}for(const[t,e]of op){const n=Ed(Li[t],Li[e],JM,Sd);s.set(`${t}-${e}`,n),s.set(`${e}-${t}`,[...n].reverse())}return s}const Dr={design:"classic",primaryColor:"#ffffff",secondaryColor:"#333333"},tS={classic:{drag:1,randomnessBonus:0,curveMultiplier:1,knuckleIntensity:0,speedRetention:1,arcModifier:1},jabulani:{drag:.8,randomnessBonus:.4,curveMultiplier:.7,knuckleIntensity:.6,speedRetention:1.15,arcModifier:1.1},brazuca:{drag:1.1,randomnessBonus:-.15,curveMultiplier:1.3,knuckleIntensity:0,speedRetention:.95,arcModifier:.95},trionda:{drag:.95,randomnessBonus:-.1,curveMultiplier:1.15,knuckleIntensity:0,speedRetention:1,arcModifier:1}},Is={classic:{},jabulani:{},brazuca:{},trionda:{}};function di(s,t){var e;return((e=Is[s])==null?void 0:e[t])??null}function Qr(s,t,e){Is[s]||(Is[s]={}),Is[s][t]=e}function eh(s){Is[s]&&(Is[s]={})}function eS(s){return Object.keys(Is[s]||{}).length>0}function nS(s,t,e){const{verts:n,edges:i,pentagons:r}=Vh,o=e*1.003,a=e*.018,l=new xn({color:t.secondaryColor});for(const[f,_]of i){const g=new L(n[f][0]*o,n[f][1]*o,n[f][2]*o),m=new L(n[_][0]*o,n[_][1]*o,n[_][2]*o),x=g.clone().add(m).multiplyScalar(.5);x.normalize().multiplyScalar(o);const y=new Uh(g,x,m);s.add(new se(new Hr(y,16,a,8,!1),l))}const c=new ds(a*1.15,8,8);for(let f=0;f<n.length;f++){const _=new se(c,l);_.position.set(n[f][0]*o,n[f][1]*o,n[f][2]*o),s.add(_)}const h=e*1.002,u=new xn({color:t.secondaryColor});function d(f,_,g){const m=Math.sqrt(f*f+_*_+g*g);return[f/m*h,_/m*h,g/m*h]}const p=4;for(let f=0;f<r.length;f++){const _=r[f],g=di(t.design,f),m=g?new xn({color:g}):u.clone(),x=[0,0,0];for(const b of _)x[0]+=n[b][0],x[1]+=n[b][1],x[2]+=n[b][2];x[0]/=5,x[1]/=5,x[2]/=5;const y=[];for(let b=0;b<5;b++){const w=n[_[b]],C=n[_[(b+1)%5]],M=(P,I)=>d((1-P-I)*x[0]+P*w[0]+I*C[0],(1-P-I)*x[1]+P*w[1]+I*C[1],(1-P-I)*x[2]+P*w[2]+I*C[2]),S=1/p;for(let P=0;P<p;P++)for(let I=0;I<p-P;I++){const N=M(P*S,I*S),H=M((P+1)*S,I*S),k=M(P*S,(I+1)*S);if(y.push(...N,...H,...k),P+I+1<p){const z=M((P+1)*S,(I+1)*S);y.push(...H,...z,...k)}}}const v=new Ae;v.setAttribute("position",new ue(y,3)),v.computeVertexNormals();const E=new se(v,m);E.userData.stitchPanelIndex=f,s.add(E)}}function iS(s,t,e){const n=e*1.003,i=e*.016,r=new xn({color:t.secondaryColor}),o=ap();for(const[l,c]of o){const[h,u]=l.split("-").map(Number);if(h>u)continue;const d=c.map(f=>f.clone().multiplyScalar(n)),p=new tl(d,!1);s.add(new se(new Hr(p,48,i,8,!1),r))}const a=new ds(i*1.3,8,8);for(const l of Li){const c=new se(a,r);c.position.set(l.x*n,l.y*n,l.z*n),s.add(c)}}function sS(s,t,e){const n=e*1.003,i=e*.018,r=new xn({color:t.secondaryColor}),o=sp();for(const[l,c]of ip){const u=o.get(`${l}-${c}`).map(f=>f.clone().multiplyScalar(n)),d=new tl(u,!1),p=new Hr(d,64,i,8,!1);s.add(new se(p,r))}const a=new ds(i*1.5,10,10);for(const l of So){const c=new se(a,r);c.position.copy(l).normalize().multiplyScalar(n),s.add(c)}}function rS(s,t,e){const n=e*1.003,i=e*.014,r=new xn({color:t.secondaryColor}),o=ep();for(const[l,c]of tp){const u=o.get(`${l}-${c}`).map(f=>f.clone().multiplyScalar(n)),d=new tl(u,!1),p=new Hr(d,64,i,8,!1);s.add(new se(p,r))}const a=new ds(i*1.2,8,8);for(const l of sl){const c=new se(a,r);c.position.copy(l).normalize().multiplyScalar(n),s.add(c)}}function Ba(s,t,e){t.design==="classic"?nS(s,t,e):t.design==="jabulani"?iS(s,t,e):t.design==="trionda"?sS(s,t,e):t.design==="brazuca"&&rS(s,t,e)}function oS(s,t,e){const n=s.length;let i=0,r=0,o=0;s.forEach(p=>{i+=p.x,r+=p.y,o+=p.z});const a=Math.sqrt(i*i+r*r+o*o),l=new L(i/a,r/a,o/a),c=t*.9995,h=16,u=[];for(let p=0;p<n;p++){const f=s[p],_=s[(p+1)%n];for(let g=0;g<h;g++)for(let m=0;m<h-g;m++){const x=(b,w)=>new L((1-b-w)*l.x+b*f.x+w*_.x,(1-b-w)*l.y+b*f.y+w*_.y,(1-b-w)*l.z+b*f.z+w*_.z).normalize().multiplyScalar(c),y=x(g/h,m/h),v=x((g+1)/h,m/h),E=x(g/h,(m+1)/h);if(u.push(y.x,y.y,y.z,v.x,v.y,v.z,E.x,E.y,E.z),g+m+1<h){const b=x((g+1)/h,(m+1)/h);u.push(v.x,v.y,v.z,b.x,b.y,b.z,E.x,E.y,E.z)}}}const d=new Ae;return d.setAttribute("position",new ue(u,3)),d.computeVertexNormals(),new se(d,e)}function aS(s,t,e){const n=s.length,i=24,r=[];for(let o=0;o<n;o++)for(let a=0;a<=i;a++){const l=a/i;r.push(s[o].clone().lerp(s[(o+1)%n],l).normalize().multiplyScalar(t*1.001))}return r.push(r[0].clone()),new Vr(new Ae().setFromPoints(r),e)}function uo(s,t){const e=t*.9;s.forEach(({mesh:n,centroidDir:i,baseRadius:r})=>{n.position.copy(i.clone().multiplyScalar(e*r))})}function Yl(s,t){const e=s.length,n=[];for(let i=0;i<e;i++){const r=s[i],o=s[(i+1)%e],a=t.get(`${r}-${o}`);for(let l=0;l<a.length-1;l++)n.push(a[l])}return n}function ql(s,t){const e=new L;for(const n of s)e.add(t[n]);return e.normalize()}function to(s,t,e,n,i,r){if(i===0){r.push(s.x,s.y,s.z,t.x,t.y,t.z,e.x,e.y,e.z);return}const o=s.clone().add(t).multiplyScalar(.5).normalize().multiplyScalar(n),a=t.clone().add(e).multiplyScalar(.5).normalize().multiplyScalar(n),l=e.clone().add(s).multiplyScalar(.5).normalize().multiplyScalar(n);to(s,o,l,n,i-1,r),to(o,t,a,n,i-1,r),to(l,a,e,n,i-1,r),to(o,a,l,n,i-1,r)}function $l({boundary:s,centroidDir:t,panelRadius:e,borderRadius:n,fillMat:i,borderMat:r}){const o=t.clone().multiplyScalar(e),a=[];for(let u=0;u<s.length;u++){const d=s[u].clone().multiplyScalar(e),p=s[(u+1)%s.length].clone().multiplyScalar(e);to(o,d,p,e,4,a)}const l=new Ae;l.setAttribute("position",new ue(a,3)),l.computeVertexNormals();const c=new Dn;c.add(new se(l,i.clone()));const h=s.map(u=>u.clone().multiplyScalar(n));return h.push(h[0].clone()),c.add(new Vr(new Ae().setFromPoints(h),r)),c}function ka(s,t){const e=new Dn,n=[];e.add(new se(new ds(t*.92,20,20),new xn({color:657930,side:dn,transparent:!0,opacity:.55})));const i=new xn({color:s.primaryColor,side:He,emissive:s.primaryColor,emissiveIntensity:.15}),r=new xn({color:s.secondaryColor,side:He,emissive:s.secondaryColor,emissiveIntensity:.15}),o=new kr({color:s.secondaryColor});function a(l,c,h=l){const u=c==="black"?r.clone():i.clone();let d=0,p=0,f=0;l.forEach(x=>{d+=x.x,p+=x.y,f+=x.z});const _=Math.sqrt(d*d+p*p+f*f),g=new L(d/_,p/_,f/_),m=new Dn;m.add(oS(l,t,u)),m.add(aS(l,t,o)),e.add(m),n.push({mesh:m,centroidDir:g,baseRadius:t,boundaryDirs:h.map(x=>x.clone().normalize())})}if(s.design==="classic"){const{verts:l,pentagons:c,hexFaces:h}=Vh,u=l.map(d=>new L(d[0],d[1],d[2]));c.forEach(d=>a(d.map(p=>u[p]),"black")),h.forEach(d=>a(d.map(p=>u[p])))}else if(s.design==="jabulani"){const l=ap(),c=t*.9995;Ti.forEach(h=>{const u=Yl(h,l),d=ql(h,Li),p=$l({boundary:u,centroidDir:d,panelRadius:c,borderRadius:t*1.001,fillMat:i,borderMat:o});e.add(p),n.push({mesh:p,centroidDir:d,baseRadius:t,boundaryDirs:u.map(f=>f.clone().normalize())})})}else if(s.design==="brazuca"){const l=ep(),c=t*.9995;Qf.forEach(h=>{const u=Yl(h,l),d=ql(h,sl),p=$l({boundary:u,centroidDir:d,panelRadius:c,borderRadius:t*1.001,fillMat:i,borderMat:o});e.add(p),n.push({mesh:p,centroidDir:d,baseRadius:t,boundaryDirs:u.map(f=>f.clone().normalize())})})}else if(s.design==="trionda"){const l=sp(),c=t*.9995;np.forEach(h=>{const u=Yl(h,l),d=ql(h,So),p=$l({boundary:u,centroidDir:d,panelRadius:c,borderRadius:t*1.001,fillMat:i,borderMat:o});e.add(p),n.push({mesh:p,centroidDir:d,baseRadius:t,boundaryDirs:u.map(f=>f.clone().normalize())})})}return n.forEach((l,c)=>{l.mesh.userData.panelIndex=c;const h=di(s.design,c);if(h){const u=l.mesh.children[0];u.material.color.set(h),u.material.emissive.set(h)}}),{group:e,panels:n}}function lS(s,t){const e=new Un({color:t.primaryColor,side:He}),n=new kr({color:t.secondaryColor});function i(a,l,c,h){h||(h=new L,a.forEach(f=>h.add(l[f])),h.normalize());const u=Math.abs(h.y)<.9?new L(0,1,0):new L(1,0,0),d=new L().crossVectors(u,h).normalize(),p=new L().crossVectors(h,d).normalize();return a.map(f=>({vIdx:f,x:l[f].dot(d)*c,y:l[f].dot(p)*c}))}function r(a,l,c,h){const u=a.find(k=>k.vIdx===c),d=a.find(k=>k.vIdx===h),p=l.find(k=>k.vIdx===c),f=l.find(k=>k.vIdx===h),_=Math.atan2(d.y-u.y,d.x-u.x)-Math.atan2(f.y-p.y,f.x-p.x),g=Math.cos(_),m=Math.sin(_);let x=l.map(k=>({vIdx:k.vIdx,x:g*k.x-m*k.y,y:m*k.x+g*k.y}));const y=x.find(k=>k.vIdx===c),v=u.x-y.x,E=u.y-y.y;x=x.map(k=>({vIdx:k.vIdx,x:k.x+v,y:k.y+E}));const b=d.x-u.x,w=d.y-u.y,C=Math.sqrt(b*b+w*w),M=-w/C,S=b/C,P=a.reduce((k,z)=>k+z.x,0)/a.length,I=a.reduce((k,z)=>k+z.y,0)/a.length,N=x.reduce((k,z)=>k+z.x,0)/x.length,H=x.reduce((k,z)=>k+z.y,0)/x.length;return((P-u.x)*M+(I-u.y)*S)*((N-u.x)*M+(H-u.y)*S)>0&&(x=x.map(k=>{const z=k.x-u.x,W=k.y-u.y,Y=2*(z*M+W*S);return{vIdx:k.vIdx,x:k.x-Y*M,y:k.y-Y*S}})),x}function o(a,l,c,h,u){const d=a.length,p=a.reduce((v,E)=>v+E.x,0)/d,f=a.reduce((v,E)=>v+E.y,0)/d,_=new zf;_.moveTo(a[0].x,a[0].y);for(let v=0;v<d;v++){const E=a[v],b=a[(v+1)%d],w=c?c(l[v],l[(v+1)%d],v):"straight";if(w==="straight")_.lineTo(b.x,b.y);else{const C=b.x-E.x,M=b.y-E.y,S=Math.sqrt(C*C+M*M),P=-M/S,I=C/S,N=(E.x+b.x)/2,H=(E.y+b.y)/2,k=P*(p-N)+I*(f-H);if(w==="scurve"){const z=S*.52,W=(E.x+b.x)/2,Y=(E.y+b.y)/2;_.bezierCurveTo(E.x+C*.08+P*z*.85,E.y+M*.08+I*z*.85,E.x+C*.3+P*z,E.y+M*.3+I*z,W,Y),_.bezierCurveTo(E.x+C*.7-P*z,E.y+M*.7-I*z,E.x+C*.92-P*z*.85,E.y+M*.92-I*z*.85,b.x,b.y)}else if(w==="mid"){const z=(k>0?1:-1)*S*.28;_.quadraticCurveTo(N+P*z,H+I*z,b.x,b.y)}else{const z=(k>0?-1:1)*S*.28;_.quadraticCurveTo(N+P*z,H+I*z,b.x,b.y)}}}const g=e.clone();u&&g.color.set(u);const m=new se(new Oh(_),g);h!=null&&(m.userData.panelIndex=h),s.add(m);const x=_.getPoints(48).map(v=>new L(v.x,v.y,.01));x.push(x[0]);const y=new Vr(new Ae().setFromPoints(x),n);h!=null&&(y.userData.panelIndex=h),s.add(y)}return{fillMat:e,lineMat:n,flattenLocal:i,unfold:r,drawPanel:o}}function cS(s,t){const{flattenLocal:e,unfold:n,drawPanel:i}=t;function r(h,u){return op.some(([d,p])=>h===d&&u===p||h===p&&u===d)}const o=[{id:"T0",vIdxs:Ti[0],isTri:!0},{id:"T1",vIdxs:Ti[1],isTri:!0},{id:"T2",vIdxs:Ti[2],isTri:!0},{id:"T3",vIdxs:Ti[3],isTri:!0},{id:"H0",vIdxs:Ti[4],isTri:!1},{id:"H1",vIdxs:Ti[5],isTri:!1},{id:"H2",vIdxs:Ti[6],isTri:!1},{id:"H3",vIdxs:Ti[7],isTri:!1}],a=1.5,l={};o.forEach(h=>{l[h.id]=e(h.vIdxs,Li,a)});const c={};c.T0=l.T0,c.H3=n(c.T0,l.H3,0,2),c.H1=n(c.T0,l.H1,2,4),c.H2=n(c.T0,l.H2,4,0),c.T2=n(c.H3,l.T2,3,7),c.T1=n(c.H3,l.T1,6,1),c.T3=n(c.H1,l.T3,5,11),c.H0=n(c.T1,l.H0,6,8),o.forEach((h,u)=>{const d=di(s.design,u);i(c[h.id],h.vIdxs,(p,f)=>!h.isTri&&r(p,f)?"mid":"bow",u,d)})}function hS(s,t){const{flattenLocal:e,unfold:n,drawPanel:i}=t,r=1.8,o=np.map((c,h)=>({id:`P${h}`,vIdxs:c})),a={};o.forEach((c,h)=>{const d=So[h].clone().negate().normalize();a[c.id]=e(c.vIdxs,So,r,d)});const l={};l.P3=a.P3,l.P0=n(l.P3,a.P0,1,2),l.P1=n(l.P3,a.P1,0,2),l.P2=n(l.P3,a.P2,0,1),o.forEach((c,h)=>{const u=di(s.design,h);i(l[c.id],c.vIdxs,()=>"scurve",h,u)})}function uS(s,t){const{flattenLocal:e,unfold:n,drawPanel:i}=t,r=1.9,o=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],a=Qf.map((h,u)=>({id:`F${u}`,vIdxs:h,nc:o[u]})),l={};a.forEach(h=>{l[h.id]=e(h.vIdxs,sl,r,h.nc)});const c={};c.F4=l.F4,c.F0=n(c.F4,l.F0,0,2),c.F3=n(c.F4,l.F3,2,6),c.F1=n(c.F4,l.F1,6,4),c.F2=n(c.F4,l.F2,4,0),c.F5=n(c.F0,l.F5,1,3),a.forEach((h,u)=>{const d=di(s.design,u);i(c[h.id],h.vIdxs,()=>"scurve",u,d)})}function dS(s,t,e){const{flattenLocal:n,unfold:i,drawPanel:r}=e,{verts:o,pentagons:a,hexFaces:l}=Vh,c=o.map(x=>new L(x[0],x[1],x[2])),h=.7,u=[];a.forEach((x,y)=>u.push({id:`P${y}`,vIdxs:x,isPent:!0})),l.forEach((x,y)=>u.push({id:`H${y}`,vIdxs:x,isPent:!1}));function d(x,y){return x<y?`${x}-${y}`:`${y}-${x}`}const p=new Map;u.forEach((x,y)=>{const v=x.vIdxs.length;for(let E=0;E<v;E++){const b=d(x.vIdxs[E],x.vIdxs[(E+1)%v]);p.has(b)||p.set(b,[]),p.get(b).push(y)}});const f={},_={};u.forEach(x=>{f[x.id]=n(x.vIdxs,c,h)});const g=new Set,m=[0];for(g.add(0),_[u[0].id]=f[u[0].id];m.length>0;){const x=m.shift(),y=u[x],v=y.vIdxs.length;for(let E=0;E<v;E++){const b=y.vIdxs[E],w=y.vIdxs[(E+1)%v],C=d(b,w),M=p.get(C);if(M)for(const S of M){if(g.has(S))continue;g.add(S);const P=u[S];_[P.id]=i(_[y.id],f[P.id],b,w),m.push(S)}}}u.forEach((x,y)=>{if(!_[x.id])return;const v=di(t.design,y);r(_[x.id],x.vIdxs,()=>"straight",y,v||(x.isPent?t.secondaryColor:void 0))})}function fS(s){const t=new Dn,e=lS(t,s);return s.design==="jabulani"?cS(s,e):s.design==="trionda"?hS(s,e):s.design==="brazuca"?uS(s,e):s.design==="classic"&&dS(t,s,e),t}function pS({mainCanvas:s,canvas:t,debugParams:e}){let n=!1,i=!1;function r(){e.filterStrength,n=e.visualFilter==="fluidDynamics",i=e.visualFilter==="windTunnel",s.style.filter="none",t.style.filter="none"}return{apply:r,getFluidOverlay:()=>n,getWindTunnelOverlay:()=>i}}const bd=new us,da=new L;class lp extends kg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new ue(t,3)),this.setAttribute("uv",new ue(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Jc(e,6,1);return this.setAttribute("instanceStart",new ji(n,3,0)),this.setAttribute("instanceEnd",new ji(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new Jc(e,6,1);return this.setAttribute("instanceColorStart",new ji(n,3,0)),this.setAttribute("instanceColorEnd",new ji(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Fg(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),bd.setFromBufferAttribute(e),this.boundingBox.union(bd))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)da.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(da)),da.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(da));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}St.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new Tt(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};gn.line={uniforms:Ch.merge([St.common,St.fog,St.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};class Hh extends Fi{constructor(t){super({type:"LineMaterial",uniforms:Ch.clone(gn.line.uniforms),vertexShader:gn.line.vertexShader,fragmentShader:gn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zl=new be,wd=new L,Td=new L,je=new be,Ke=new be,oi=new be,jl=new L,Kl=new Te,Je=new Hg,Ad=new L,fa=new us,pa=new Ws,ai=new be;let hi,Us;function Cd(s,t,e){return ai.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),ai.multiplyScalar(1/ai.w),ai.x=Us/e.width,ai.y=Us/e.height,ai.applyMatrix4(s.projectionMatrixInverse),ai.multiplyScalar(1/ai.w),Math.abs(Math.max(ai.x,ai.y))}function mS(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Je.start.fromBufferAttribute(i,a),Je.end.fromBufferAttribute(r,a),Je.applyMatrix4(e);const c=new L,h=new L;hi.distanceSqToSegment(Je.start,Je.end,h,c),h.distanceTo(c)<Us*.5&&t.push({point:h,pointOnLine:c,distance:hi.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function _S(s,t,e){const n=t.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),u=-t.near;hi.at(1,oi),oi.w=1,oi.applyMatrix4(t.matrixWorldInverse),oi.applyMatrix4(n),oi.multiplyScalar(1/oi.w),oi.x*=r.x/2,oi.y*=r.y/2,oi.z=0,jl.copy(oi),Kl.multiplyMatrices(t.matrixWorldInverse,o);for(let d=0,p=h;d<p;d++){if(je.fromBufferAttribute(l,d),Ke.fromBufferAttribute(c,d),je.w=1,Ke.w=1,je.applyMatrix4(Kl),Ke.applyMatrix4(Kl),je.z>u&&Ke.z>u)continue;if(je.z>u){const y=je.z-Ke.z,v=(je.z-u)/y;je.lerp(Ke,v)}else if(Ke.z>u){const y=Ke.z-je.z,v=(Ke.z-u)/y;Ke.lerp(je,v)}je.applyMatrix4(n),Ke.applyMatrix4(n),je.multiplyScalar(1/je.w),Ke.multiplyScalar(1/Ke.w),je.x*=r.x/2,je.y*=r.y/2,Ke.x*=r.x/2,Ke.y*=r.y/2,Je.start.copy(je),Je.start.z=0,Je.end.copy(Ke),Je.end.z=0;const _=Je.closestPointToPointParameter(jl,!0);Je.at(_,Ad);const g=bf.lerp(je.z,Ke.z,_),m=g>=-1&&g<=1,x=jl.distanceTo(Ad)<Us*.5;if(m&&x){Je.start.fromBufferAttribute(l,d),Je.end.fromBufferAttribute(c,d),Je.start.applyMatrix4(o),Je.end.applyMatrix4(o);const y=new L,v=new L;hi.distanceSqToSegment(Je.start,Je.end,v,y),e.push({point:v,pointOnLine:y,distance:hi.origin.distanceTo(v),object:s,face:null,faceIndex:d,uv:null,uv1:null})}}}class gS extends se{constructor(t=new lp,e=new Hh({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)wd.fromBufferAttribute(e,o),Td.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+wd.distanceTo(Td);const r=new Jc(i,2,1);return t.setAttribute("instanceDistanceStart",new ji(r,1,0)),t.setAttribute("instanceDistanceEnd",new ji(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;hi=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Us=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),pa.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Us*.5;else{const u=Math.max(i.near,pa.distanceToPoint(hi.origin));c=Cd(i,u,l.resolution)}if(pa.radius+=c,hi.intersectsSphere(pa)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),fa.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Us*.5;else{const u=Math.max(i.near,fa.distanceToPoint(hi.origin));h=Cd(i,u,l.resolution)}fa.expandByScalar(h),hi.intersectsBox(fa)!==!1&&(n?mS(this,e):_S(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Zl),this.material.uniforms.resolution.value.set(Zl.z,Zl.w))}}class cp extends lp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let i=0;i<e;i++)n[6*i]=t[i].x,n[6*i+1]=t[i].y,n[6*i+2]=t[i].z||0,n[6*i+3]=t[i+1].x,n[6*i+4]=t[i+1].y,n[6*i+5]=t[i+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class vS extends gS{constructor(t=new cp,e=new Hh({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const ba=11,hp=8,Rd=ba*hp,ma=180,Pd=-15,Dd=-10,Ld=10,xS=-1,Id=4,yS=16,Ud=.5,Fd=1.5,MS=4,_a=[new Vt("#1a1a22"),new Vt("#2e3038"),new Vt("#4a4d58"),new Vt("#7a7d88"),new Vt("#a8abb8"),new Vt("#c8c9d0"),new Vt("#f5f0ff")],Ms=new L(0,0,1),SS=new L(0,1,0),eo=5,wa=3,up=3,Nd=eo*wa*up,ES=.9;function Ta(s){return Math.max(0,Math.min(1,s))}function jr(s,t,e){return s+(t-s)*e}function Od(s,t,e){const i=Ta(e)*(_a.length-1),r=Math.min(Math.floor(i),_a.length-2),o=i-r,a=_a[r],l=_a[r+1],c=t*3;s[c]=a.r+(l.r-a.r)*o,s[c+1]=a.g+(l.g-a.g)*o,s[c+2]=a.b+(l.b-a.b)*o}function bS({scene:s,visualFilters:t,debugParams:e,getBallGroup:n,getFlowState:i,ballRadius:r}){const o=new Dn;o.visible=!1,s.add(o);const a=new Tt(window.innerWidth,window.innerHeight),l=[];for(let W=0;W<Rd;W++){const Y=new Float32Array(ma*3),et=new Float32Array(ma*3),st=new cp;st.setPositions(Y),st.setColors(et);const ut=new Hh({transparent:!0,opacity:.3,vertexColors:!0,linewidth:7,resolution:a,worldUnits:!1,depthWrite:!1,blending:lc}),yt=new vS(st,ut);yt.computeLineDistances(),yt.frustumCulled=!1,o.add(yt),l.push({line:yt,positions:Y,colors:et,phaseOffset:Math.random()*3})}const c=new Dn;c.visible=!1,s.add(c);const h=[];for(let W=0;W<Nd;W++){const Y=new Wg(new L(0,0,1),new L,.35,2277289,.08,.05);Y.visible=!1,c.add(Y),h.push(Y)}const u=new se(new ds(1,20,16),new Un({color:"#3d8cff",wireframe:!0,transparent:!0,opacity:.22}));u.visible=!1,c.add(u);const d=new se(new os(.5,.9,1,16,1,!0),new Un({color:"#4be9c8",wireframe:!0,transparent:!0,opacity:.18}));d.visible=!1,c.add(d);const p=new L,f=new L,_=new L,g=new L,m=new L,x=new L,y=new L,v=new L,E=new L,b=new L,w=new L,C=new L,M={free:new L,wind:new L,deflect:new L,spin:new L,wake:new L,total:new L},S=new Vt;let P=-100;function I(W){const Y=e.windDirX,et=e.windDirY,st=e.windDirZ;typeof Y=="number"&&typeof et=="number"&&typeof st=="number"?(W.set(Y,et,st),W.lengthSq()<1e-6&&W.set(1,0,0),W.normalize()):W.set(e.windSpeed>=0?1:-1,0,0);const ut=Math.min(2.15,(typeof e.windStrength=="number"?Math.max(0,e.windStrength):0)+Math.abs(e.windSpeed)*.16);W.multiplyScalar(ut)}function N(W,Y,et,st,ut,yt){const Bt=W-st.bx,J=Y-st.by,nt=et-st.bz,dt=Math.sqrt(Bt*Bt+J*J+nt*nt+1e-9),lt=Bt/dt,At=J/dt,$t=nt/dt,Ft=Ms.x*st.freestream,le=Ms.y*st.freestream,ne=Ms.z*st.freestream,Ht=m.x,V=m.y,xe=m.z,Zt=Ft+Ht,qt=le+V,wt=ne+xe,Lt=Math.sqrt(Zt*Zt+qt*qt+wt*wt);let _t=0,R=0,T=0;const Z=r;if(dt>Z*.5){const K=Z*Z*Z/(2*dt*dt*dt),it=Zt*lt+qt*At+wt*$t;_t=(3*it*lt-Zt)*K,R=(3*it*At-qt)*K,T=(3*it*$t-wt)*K;const vt=Math.sqrt(_t*_t+R*R+T*T),xt=Lt*.4;if(vt>xt&&vt>1e-6){const kt=xt/vt;_t*=kt,R*=kt,T*=kt}}let rt=0,ot=0,tt=0;if(st.velMag>.5){const K=b.y*nt-b.z*J,it=b.z*Bt-b.x*nt,vt=b.x*J-b.y*Bt,xt=Math.exp(-((dt-Z)*(dt-Z))/(Z*Z*16))*.06*st.spinStr;rt=K*xt,ot=it*xt,tt=vt*xt}let Ct=0,pt=0,gt=0;const jt=x.x,ct=x.y,Mt=x.z,Pt=Bt*jt+J*ct+nt*Mt;if(Pt>0){const K=Bt-jt*Pt,it=J-ct*Pt,vt=nt-Mt*Pt,xt=K*K+it*it+vt*vt,kt=Z*(2+Pt*.15),he=Math.exp(-xt/(kt*kt+1e-6))*Math.exp(-Pt/Math.max(1e-4,st.wakeLen)),ge=st.freestream*st.wakeStr*he;if(Ct-=jt*ge,pt-=ct*ge,gt-=Mt*ge,y.set(K,it,vt),y.lengthSq()>1e-8){y.normalize();const Jt=.12*he*(1-Math.exp(-Pt*.1));Ct+=y.x*Jt,pt+=y.y*Jt,gt+=y.z*Jt}if(st.velMag>.5&&(v.copy(b).cross(x),v.lengthSq()>1e-8)){v.normalize();const Jt=.2*he*Ta(st.velMag/5);Ct+=v.x*Jt,pt+=v.y*Jt,gt+=v.z*Jt}}const zt=Math.sqrt(Ct*Ct+pt*pt+gt*gt),Et=st.freestream*.4;if(zt>Et&&zt>1e-6){const K=Et/zt;Ct*=K,pt*=K,gt*=K}let Wt=Zt+_t+rt+Ct,Nt=qt+R+ot+pt,ie=wt+T+tt+gt;if(dt<Z*1.05){const K=(Z*1.08-dt)*6;Wt+=lt*K,Nt+=At*K,ie+=$t*K}const X=Math.sqrt(Wt*Wt+Nt*Nt+ie*ie),ft=st.freestream*2+Lt*.5+.5;if(X>ft){const K=ft/X;Wt*=K,Nt*=K,ie*=K}return ut.set(Wt,Nt,ie),yt&&(yt.free.set(Ft,le,ne),yt.wind.set(Ht,V,xe),yt.deflect.set(_t,R,T),yt.spin.set(rt,ot,tt),yt.wake.set(Ct,pt,gt),yt.total.copy(ut)),ut.length()}function H(W,Y){for(let et=0;et<Nd;et++){const st=h[et],ut=et%eo,yt=Math.floor(et/eo)%wa,Bt=Math.floor(et/(eo*wa)),J=ut/(eo-1),nt=yt/(wa-1),dt=Bt/(up-1);E.set(W.bx+jr(-2.4,2.4,J)*r,W.by+jr(-1.5,1.5,nt)*r,W.bz+jr(-2.4,8,dt)*r);const lt=N(E.x,E.y,E.z,W,p,null);if(lt<1e-5){st.visible=!1;continue}st.visible=!0,st.position.copy(E),p.normalize(),st.setDirection(p),st.setLength(.17+Math.min(.65,lt*.14),.08,.05);const At=Ta(lt/Math.max(1e-5,Y));S.setHSL(.64-At*.6,.9,.52),st.setColor(S)}}function k(W){u.visible=!0,u.position.set(W.bx,W.by,W.bz),u.scale.setScalar(r+W.wakeLen*.3),d.visible=!0,d.scale.set(r*1.8,W.wakeLen*.5,r*1.8),d.position.set(W.bx,W.by,W.bz),d.position.addScaledVector(x,W.wakeLen*.5),d.quaternion.setFromUnitVectors(SS,x)}function z(W){a.set(window.innerWidth,window.innerHeight);const Y=t.getFluidOverlay(),et=t.getWindTunnelOverlay(),st=Y||et;o.visible=st;const ut=n();if(!st||!ut){c.visible=!1;return}const yt=!!e.flowDiagnostics;if(c.visible=yt,!yt){for(const _t of h)_t.visible=!1;u.visible=!1,d.visible=!1}const{activeVelocityVec:Bt,activeCurveForce:J,activeLateralAccel:nt}=i(),dt=ut.position.x,lt=ut.position.y,At=ut.position.z,$t=Bt.length();w.set(0,1,0).cross(Ms),w.lengthSq()<1e-6&&w.set(1,0,0),w.normalize(),C.copy(Ms).cross(w).normalize();const Ft=Ta(($t-.1)/6)*.65,le=f.copy(Bt);le.lengthSq()<1e-7&&le.copy(Ms).negate(),le.normalize().negate(),x.copy(Ms).lerp(le,Ft).normalize(),I(m);const ne=(et?2.25:2)+$t*(et?.03:.08),Ht=ne*.36+.14;m.length()>Ht&&m.setLength(Ht),$t<.12&&et?b.set(0,0,0):b.set(2.8*e.spinMultiplier,Math.sign(J||1)*(2+Math.min(6.2,Math.abs(J))*.14)+nt*.016,.85*e.spinMultiplier);const V=e.filterStrength,xe={bx:dt,by:lt,bz:At,freestream:ne,velMag:$t,spinStr:(et?.4:.6)*(.72+(V-.5)*.3),wakeStr:(et?.6:.8)*(.9+(V-.5)*.4),wakeLen:r*(12+2*V)},Zt=Math.max(.8,ne+m.length()*.35),qt=Math.max(.5,ne*1.6+m.length()*.5);if(yt&&e.flowDebugArrows)H(xe,qt);else for(const _t of h)_t.visible=!1;yt&&e.flowDebugVolumes?k(xe):(u.visible=!1,d.visible=!1);const wt=et?.16:.15,Lt=yt&&(e.flowDebugLogs||e.flowDebugStreamlines)&&W-P>ES;for(let _t=0;_t<Rd;_t++){const{line:R,positions:T,colors:Z,phaseOffset:rt}=l[_t];R.material.opacity=et?.28:.22,R.material.linewidth=et?8:7,R.material.resolution=a;const ot=_t%ba,tt=Math.floor(_t/ba),Ct=ot/(ba-1),pt=tt/(hp-1),gt=jr(Dd,Ld,Ct),jt=jr(xS,Id,pt),ct=(W*ne*.28+rt)%MS,Mt=Pd+ct;_.set(gt,jt,Mt);let Pt=0,zt=0,Et=1;for(let Wt=0;Wt<ma;Wt++){const Nt=N(_.x,_.y,_.z,xe,p,null),ie=Wt*3;if(T[ie]=_.x,T[ie+1]=_.y,T[ie+2]=_.z,Od(Z,Wt,Nt/qt),Nt<1e-4||_.z>yS||_.z<Pd-2||_.x<Dd-3||_.x>Ld+3||_.y<-2||_.y>Id+3){for(let wn=Wt+1;wn<ma;wn++)T[wn*3]=_.x,T[wn*3+1]=_.y,T[wn*3+2]=_.z,Od(Z,wn,Nt/qt);break}const X=1/Nt,ft=Math.max(Ud,Math.min(Fd,Nt/Zt));p.multiplyScalar(X),g.copy(_).addScaledVector(p,wt*.5*ft);const K=N(g.x,g.y,g.z,xe,f,null);if(K<1e-5)break;const it=1/K,vt=Math.max(Ud,Math.min(Fd,K/Zt));f.multiplyScalar(it);const kt=f.x*Pt+f.y*zt+f.z*Et<0?.7:.3,he=f.x*(1-kt)+Pt*kt,ge=f.y*(1-kt)+zt*kt,Jt=f.z*(1-kt)+Et*kt,we=1/Math.sqrt(he*he+ge*ge+Jt*Jt+1e-9);Pt=he*we,zt=ge*we,Et=Jt*we;const $e=wt*vt;_.x+=Pt*$e,_.y+=zt*$e,_.z+=Et*$e}R.geometry.setPositions(T),R.geometry.setColors(Z),R.computeLineDistances()}if(Lt){const _t=[{label:"upstream",along:-2.8,side:0,up:0},{label:"nearSurface",along:-.95,side:.55,up:.2},{label:"wake",along:4.8,side:.25,up:.1},{label:"farField",along:3.2,side:5.4,up:1.2}];if(e.flowDebugLogs){console.groupCollapsed(`[CFD] t=${W.toFixed(2)}s`);for(const R of _t)_.set(dt,lt,At),_.addScaledVector(x,R.along*r),_.addScaledVector(w,R.side*r),_.addScaledVector(C,R.up*r),N(_.x,_.y,_.z,xe,p,M),console.log(`${R.label}: total=${M.total.length().toFixed(3)} free=${M.free.length().toFixed(3)} deflect=${M.deflect.length().toFixed(3)} wake=${M.wake.length().toFixed(3)}`);console.log(`ball=(${dt.toFixed(2)},${lt.toFixed(2)},${At.toFixed(2)}) vel=${$t.toFixed(2)}`),console.groupEnd()}P=W}}return{updateFluidFlowOverlay:z}}function wS(){return{powerMultiplier:1,arcHeight:2.5,resetDelay:1,spinMultiplier:1,curveIntensity:1,randomness:1,windSpeed:0,windStrength:0,windDirX:1,windDirY:0,windDirZ:0,gravity:1,orbitControls:!1,vectorOverlay:!1,showVelocityVector:!0,showMagnusVector:!0,showDragVector:!1,showGravityVector:!0,showWindVector:!1,visualFilter:"none",filterStrength:1,flowDiagnostics:!1,flowDebugArrows:!1,flowDebugVolumes:!1,flowDebugLogs:!1,flowDebugStreamlines:!1,spinSpeed:10,spinAxisX:0,spinAxisY:1,spinAxisZ:0,showAngularMomentum:!1}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class mi{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),mi.nextNameID=mi.nextNameID||0,this.$name.id=`lil-gui-name-${++mi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class TS extends mi{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function nh(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const AS={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:nh,toHexString:nh},Eo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},CS={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,t,e=1){const n=Eo.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Eo.toHexString(i)}},RS={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=Eo.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return Eo.toHexString(i)}},PS=[AS,Eo,CS,RS];function DS(s){return PS.find(t=>t.match(s))}class LS extends mi{constructor(t,e,n,i){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=DS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=nh(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Jl extends mi{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class IS extends mi{constructor(t,e,n,i,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,h,u;const d=5,p=x=>{a=x.clientX,l=c=x.clientY,o=!0,h=this.getValue(),u=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",_)},f=x=>{if(o){const y=x.clientX-a,v=x.clientY-l;Math.abs(v)>d?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>d&&_()}if(!o){const y=x.clientY-c;u-=y*this._step*this._arrowKeyMultiplier(x),h+u>this._max?u=this._max-h:h+u<this._min&&(u=this._min-h),this._snapClampSetValue(h+u)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(m,x,y,v,E)=>(m-x)/(y-x)*(E-v)+v,e=m=>{const x=this.$slider.getBoundingClientRect();let y=t(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",u,{passive:!1}),window.addEventListener("touchend",d))},u=m=>{if(o){const x=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d))}else m.preventDefault(),e(m.touches[0].clientX)},d=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",u),window.removeEventListener("touchend",d)},p=this._callOnFinishChange.bind(this),f=400;let _;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,f)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class US extends mi{constructor(t,e,n,i){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class FS extends mi{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var NS=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.lil-root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.lil-root > .lil-children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.lil-root > .lil-children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.lil-allow-touch-styles, .lil-gui.lil-allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.lil-force-touch-styles, .lil-gui.lil-force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.lil-auto-place, .lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-controller.lil-disabled {
  opacity: 0.5;
}
.lil-controller.lil-disabled, .lil-controller.lil-disabled * {
  pointer-events: none !important;
}
.lil-controller > .lil-name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-controller .lil-widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-controller.lil-string input {
  color: var(--string-color);
}
.lil-controller.lil-boolean {
  cursor: pointer;
}
.lil-controller.lil-color .lil-display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-controller.lil-color .lil-display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-controller.lil-color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-controller.lil-color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-controller.lil-option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-controller.lil-option .lil-display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-display.lil-focus {
    background: var(--focus-color);
  }
}
.lil-controller.lil-option .lil-display.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-option .lil-display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-controller.lil-option .lil-widget,
.lil-controller.lil-option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-controller.lil-option .lil-widget:hover .lil-display {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number input {
  color: var(--number-color);
}
.lil-controller.lil-number.lil-has-slider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-controller.lil-number .lil-slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-controller.lil-number .lil-slider:hover {
    background: var(--hover-color);
  }
}
.lil-controller.lil-number .lil-slider.lil-active {
  background: var(--focus-color);
}
.lil-controller.lil-number .lil-slider.lil-active .lil-fill {
  opacity: 0.95;
}
.lil-controller.lil-number .lil-fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-dragging * {
  cursor: ew-resize !important;
}
.lil-dragging.lil-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .lil-title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .lil-title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .lil-title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-dragging) .lil-gui .lil-title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .lil-title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.lil-root > .lil-title:focus {
  text-decoration: none !important;
}
.lil-gui.lil-closed > .lil-title:before {
  content: "▸";
}
.lil-gui.lil-closed > .lil-children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.lil-closed:not(.lil-transition) > .lil-children {
  display: none;
}
.lil-gui.lil-transition > .lil-children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .lil-children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.lil-root > .lil-children > .lil-gui > .lil-title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.lil-root > .lil-children > .lil-gui.lil-closed > .lil-title {
  border-bottom-color: transparent;
}
.lil-gui + .lil-controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .lil-title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .lil-children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .lil-controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .lil-controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .lil-controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .lil-controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .lil-controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff2;charset=utf-8;base64,d09GMgABAAAAAALkAAsAAAAABtQAAAKVAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFQGYACDMgqBBIEbATYCJAMUCwwABCAFhAoHgQQbHAbIDiUFEYVARAAAYQTVWNmz9MxhEgodq49wYRUFKE8GWNiUBxI2LBRaVnc51U83Gmhs0Q7JXWMiz5eteLwrKwuxHO8VFxUX9UpZBs6pa5ABRwHA+t3UxUnH20EvVknRerzQgX6xC/GH6ZUvTcAjAv122dF28OTqCXrPuyaDER30YBA1xnkVutDDo4oCi71Ca7rrV9xS8dZHbPHefsuwIyCpmT7j+MnjAH5X3984UZoFFuJ0yiZ4XEJFxjagEBeqs+e1iyK8Xf/nOuwF+vVK0ur765+vf7txotUi0m3N0m/84RGSrBCNrh8Ee5GjODjF4gnWP+dJrH/Lk9k4oT6d+gr6g/wssA2j64JJGP6cmx554vUZnpZfn6ZfX2bMwPPrlANsB86/DiHjhl0OP+c87+gaJo/gY084s3HoYL/ZkWHTRfBXvvoHnnkHvngKun4KBE/ede7tvq3/vQOxDXB1/fdNz6XbPdcr0Vhpojj9dG+owuSKFsslCi1tgEjirjXdwMiov2EioadxmqTHUCIwo8NgQaeIasAi0fTYSPTbSmwbMOFduyh9wvBrESGY0MtgRjtgQR8Q1bRPohn2UoCRZf9wyYANMXFeJTysqAe0I4mrherOekFdKMrYvJjLvOIUM9SuwYB5DVZUwwVjJJOaUnZCmcEkIZZrKqNvRGRMvmFZsmhP4VMKCSXBhSqUBxgMS7h0cZvEd71AWkEhGWaeMFcNnpqyJkyXgYL7PQ1MoSq0wDAkRtJIijkZSmqYTiSImfLiSWXIZwhRh3Rug2X0kk1Dgj+Iu43u5p98ghopcpSo0Uyc8SnjlYX59WUeaMoDqmVD2TOWD9a4pCRAzf2ECgwGcrHjPOWY9bNxq/OL3I/QjwEAAAA=") format("woff2");
}`;function OS(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let zd=!1;class Gh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!zd&&a&&(OS(NS),zd=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new US(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new IS(this,t,e,n,i,r);case"boolean":return new TS(this,t,e);case"string":return new FS(this,t,e);case"function":return new Jl(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new LS(this,t,e,n)}addFolder(t){const e=new Gh({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Jl||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Jl)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function zS(s,t,e){const n=new Gh({title:"Debug",container:s}),i=n.addFolder("Kick");i.add(t,"powerMultiplier",.5,3,.1).name("Power"),i.add(t,"arcHeight",.5,5,.1).name("Arc Height"),i.add(t,"curveIntensity",0,3,.1).name("Curve Intensity"),i.add(t,"spinMultiplier",0,3,.1).name("Spin"),i.close();const r=n.addFolder("Physics");r.add(t,"gravity",.2,3,.1).name("Gravity"),r.add(t,"windSpeed",-5,5,.1).name("Wind"),r.add(t,"windStrength",0,4,.05).name("Flow Wind"),r.add(t,"windDirX",-1,1,.05).name("Wind Dir X"),r.add(t,"windDirY",-1,1,.05).name("Wind Dir Y"),r.add(t,"windDirZ",-1,1,.05).name("Wind Dir Z"),r.add(t,"randomness",0,2,.1).name("Randomness"),r.close();const o=n.addFolder("Settings");o.add(t,"resetDelay",.3,3,.1).name("Reset Delay"),o.add(t,"orbitControls").name("Orbit Controls").onChange(e.onOrbitControlsChange),o.close();const a=n.addFolder("Spin Preview"),l=a.add(t,"spinSpeed",1,50,1).name("Speed"),c=a.add(t,"spinAxisX",-1,1,.05).name("Axis X"),h=a.add(t,"spinAxisY",-1,1,.05).name("Axis Y"),u=a.add(t,"spinAxisZ",-1,1,.05).name("Axis Z");a.add(t,"showAngularMomentum").name("Angular Momentum");const d=120,p=document.createElement("canvas");p.width=d,p.height=d,p.className="spin-orientation-circle";const f=p.getContext("2d"),_=document.createElement("div");_.style.cssText="display:flex;justify-content:center;padding:8px 0 4px",_.appendChild(p);const g=a.domElement.querySelector(".children");g&&g.appendChild(_);function m(){const w=d/2,C=d/2,M=d/2-12;f.clearRect(0,0,d,d),f.beginPath(),f.arc(w,C,M,0,Math.PI*2),f.strokeStyle="rgba(255,255,255,0.12)",f.lineWidth=1.5,f.stroke(),f.beginPath(),f.moveTo(w-M,C),f.lineTo(w+M,C),f.moveTo(w,C-M),f.lineTo(w,C+M),f.strokeStyle="rgba(255,255,255,0.05)",f.lineWidth=1,f.stroke();const S=w+t.spinAxisX*M,P=C-t.spinAxisZ*M;f.beginPath(),f.arc(S,P,6,0,Math.PI*2),f.fillStyle="#4a9eff",f.fill(),f.beginPath(),f.arc(S,P,6,0,Math.PI*2),f.strokeStyle="rgba(255,255,255,0.3)",f.lineWidth=1,f.stroke(),f.font="9px -apple-system, sans-serif",f.fillStyle="#555",f.textAlign="center",f.fillText("X",w+M+8,C+3),f.fillText("Z",w,C-M-5)}m(),c.onChange(m),u.onChange(m);let x=!1;p.addEventListener("pointerdown",w=>{x=!0,y(w),p.setPointerCapture(w.pointerId)}),p.addEventListener("pointermove",w=>{x&&y(w)}),p.addEventListener("pointerup",()=>{x=!1});function y(w){const C=p.getBoundingClientRect(),M=d/2,S=d/2,P=d/2-12;let I=w.clientX-C.left-M,N=-(w.clientY-C.top-S);const H=Math.sqrt(I*I+N*N);H>P&&(I=I/H*P,N=N/H*P),t.spinAxisX=I/P,t.spinAxisZ=N/P,c.updateDisplay(),u.updateDisplay(),m()}a.close();const v=document.getElementById("debug-hint");function E(){const w=s.classList.toggle("visible");v&&(v.style.opacity=w?"0":"1")}window.addEventListener("keydown",w=>{(w.key==="h"||w.key==="H")&&E()});const b=document.getElementById("debug-toggle-btn");return b&&b.addEventListener("click",E),{gui:n,drawCircle:m,speedCtrl:l,axisXCtrl:c,axisYCtrl:h,axisZCtrl:u}}function BS(s){const t=new qn(60,40),e=new Un({color:"#000000"}),n=new se(t,e);n.rotation.x=-Math.PI/2,n.position.y=0,s.add(n);const i=new Gg(100,100,"#888888","#222222");i.position.y=.005,s.add(i);const r=document.createElement("canvas");r.width=512,r.height=512;const o=r.getContext("2d");o.fillStyle="#000000",o.fillRect(0,0,512,512),o.strokeStyle="#888888",o.lineWidth=.5;for(let b=0;b<=512;b+=16)o.beginPath(),o.moveTo(b,0),o.lineTo(b,512),o.stroke(),o.beginPath(),o.moveTo(0,b),o.lineTo(512,b),o.stroke();const a=new $c(r);a.wrapS=_o,a.wrapT=_o,a.repeat.set(6,2);const l=new Un({map:a,transparent:!0,opacity:.3,side:He}),c=new se(new qn(120,30),l);c.position.set(0,15,50),c.rotation.y=Math.PI,s.add(c);const h=new se(new qn(120,30),l);h.rotation.y=Math.PI/2,h.position.set(-50,15,0),s.add(h);const u=new se(new qn(120,30),l);u.rotation.y=-Math.PI/2,u.position.set(50,15,0),s.add(u);const d=.08,p=.01,f=new Un({color:"#ffffff"});function _(b,w,C,M){const S=new qn(b,w),P=new se(S,f);return P.rotation.x=-Math.PI/2,P.position.set(C,p,M),P}const g=new Dn,m=16.5,x=20.15;g.add(_(x*2,d,0,0)),g.add(_(d,m,-x,-m/2)),g.add(_(d,m,x,-m/2)),g.add(_(x*2,d,0,-m));const y=new Fh(.15,16),v=new se(y,f);v.rotation.x=-Math.PI/2,v.position.set(0,p,-11),g.add(v),s.add(g);function E(b){var S,P,I,N;const w=b?"#ffffff":"#000000",C=b?"#ddd":"#888888",M=b?"#eee":"#222222";e.color.set(w),(P=(S=i.material[0])==null?void 0:S.color)==null||P.set(C),(N=(I=i.material[1])==null?void 0:I.color)==null||N.set(M),o.fillStyle=b?"#f8f8f8":"#000000",o.fillRect(0,0,512,512),o.strokeStyle=b?"#ccc":"#888888",o.lineWidth=.5;for(let H=0;H<=512;H+=16)o.beginPath(),o.moveTo(H,0),o.lineTo(H,512),o.stroke(),o.beginPath(),o.moveTo(0,H),o.lineTo(512,H),o.stroke();a.needsUpdate=!0,f.color.set(b?"#555":"#ffffff")}return{gridHelper:i,fieldLines:g,backWall:c,leftWall:h,rightWall:u,applyTheme:E}}function kS(s){const t=new Dn,e=.06,n=7.32,i=2.44,r=new xn({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.5}),o=new os(e,e,i,12),a=new se(o,r);a.position.set(-n/2,i/2,0),t.add(a);const l=new se(o,r);l.position.set(n/2,i/2,0),t.add(l);const c=new os(e,e,n+e*2,12),h=new se(c,r);h.rotation.z=Math.PI/2,h.position.set(0,i,0),t.add(h);const u=2.5,d=new Un({color:"#888888",wireframe:!0,transparent:!0,opacity:.4}),p=new qn(n,i,24,10),f=new se(p,d);f.position.set(0,i/2,u),t.add(f);const _=new qn(u,i,8,10),g=new se(_,d);g.rotation.y=Math.PI/2,g.position.set(-n/2,i/2,u/2),t.add(g);const m=new se(_,d);m.rotation.y=Math.PI/2,m.position.set(n/2,i/2,u/2),t.add(m);const x=new qn(n,u,24,8),y=new se(x,d);y.rotation.x=-Math.PI/2,y.position.set(0,i,u/2),t.add(y),t.position.z=0,s.add(t);function v(E){const b=E?"#222":"#ffffff";r.color.set(b),r.emissive.set(b),d.color.set(E?"#555":"#888888")}return{goalGroup:t,goalWidth:n,goalHeight:i,applyTheme:v}}function VS({scene:s,gridHelper:t,fieldLines:e,backWall:n,leftWall:i,rightWall:r,panel:o,canvas:a,getBallGroup:l}){const c=new hn(38,Math.max(1,o.clientWidth)/Math.max(1,o.clientHeight),.1,220);c.position.set(0,18,-23),c.lookAt(0,.8,-8);const h=new il({canvas:a,antialias:!0,alpha:!1});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setSize(o.clientWidth||1,o.clientHeight||1),a.style.transform="none";const u=260,d=[],p=new Float32Array(u*3),f=new Ae;f.setAttribute("position",new Fn(p,3)),f.setDrawRange(0,0);const _=new kr({color:"#ffffff",transparent:!0,opacity:.95}),g=new Vr(f,_);g.visible=!1,s.add(g);let m=0;function x(){d.length=0,f.setDrawRange(0,0),m=0}function y(){m=1,_.opacity=.95;const C=l(),M={x:C.position.x,z:C.position.z},S=d[d.length-1];if(S&&Math.hypot(M.x-S.x,M.z-S.z)<.045)return;d.push(M),d.length>u&&d.shift();const P=d.length;for(let I=0;I<P;I++){const N=I*3;p[N]=d[I].x,p[N+1]=.06,p[N+2]=d[I].z}f.attributes.position.needsUpdate=!0,f.setDrawRange(0,P)}function v(){return d.length===0?!1:(m=Math.max(0,m-.018),_.opacity=.95*m,m<=.01?(x(),!1):!0)}function E(){const C=t.visible,M=e.visible,S=n.visible,P=i.visible,I=r.visible;t.visible=!1,e.visible=!1,n.visible=!1,i.visible=!1,r.visible=!1,g.visible=d.length>1,c.lookAt(0,.8,-8),h.render(s,c),g.visible=!1,t.visible=C,e.visible=M,n.visible=S,i.visible=P,r.visible=I}function b(){const C=Math.min(window.devicePixelRatio,2),M=Math.max(1,o.clientWidth),S=Math.max(1,o.clientHeight);c.aspect=M/S,c.updateProjectionMatrix(),h.setPixelRatio(C),h.setSize(M,S)}function w(C){_.color.set(C?"#000000":"#ffffff")}return{clearTrail:x,pushTrailPoint:y,fadeTrail:v,renderBirdseye:E,resizeBirdseye:b,applyTheme:w}}function HS({panel:s,canvas:t,flightAnalyticsState:e}){const n=t.getContext("2d");let i=null,r=0,o=!1,a=0;const l=2e3,c={power:document.getElementById("metric-power"),curve:document.getElementById("metric-curve"),spin:document.getElementById("metric-spin"),target:document.getElementById("metric-target")};function h(){const m=Math.min(window.devicePixelRatio,2),x=s.clientWidth,y=s.clientHeight;t.width=Math.max(1,Math.floor(x*m)),t.height=Math.max(1,Math.floor(y*m)),n.setTransform(m,0,0,m,0,0)}function u(){const m=s.clientWidth,x=s.clientHeight,y=document.documentElement.dataset.theme==="light";n.clearRect(0,0,m,x),n.fillStyle=y?"#f8f8f8":"#090909",n.fillRect(0,0,m,x);const v=18,E=m-18,b=74,w=x-34;n.strokeStyle=y?"#ddd":"#1d1d1d",n.lineWidth=1,n.beginPath(),n.moveTo(v,w),n.lineTo(E,w),n.moveTo(v,b),n.lineTo(v,w),n.stroke();const C=e.latestFlightSeries;if(!C||C.t.length<2){o?(r=1,p()):i||_();return}g();const M=C.t.length,S=Math.max(...C.speed,1),P=Math.max(...C.height,1),I=Math.max(...C.lateralAccel.map(H=>Math.abs(H)),.1),N=(H,k,z)=>{n.strokeStyle=k,n.lineWidth=2,n.beginPath();for(let W=0;W<M;W++){const Y=v+C.t[W]*(E-v),et=z(H[W],W);W===0?n.moveTo(Y,et):n.lineTo(Y,et)}n.stroke()};N(C.speed,"#4aa3ff",H=>w-H/S*(w-b)),N(C.height,"#80f0a5",H=>w-H/P*(w-b)),N(C.lateralAccel,"#ff8a4a",H=>w-(H+I)/(I*2)*(w-b)),n.fillStyle=y?"#888":"#6a6a6a",n.font="10px sans-serif",n.fillText("Speed",m-154,x-12),n.fillStyle="#ff8a4a",n.fillText("Lat Acc",m-108,x-12),n.fillStyle="#80f0a5",n.fillText("Height",m-64,x-12)}function d(m){c.power.textContent=`${m.peakSpeed.toFixed(1)} m/s`,c.curve.textContent=m.avgCd.toFixed(3),c.spin.textContent=m.maxCl.toFixed(3),c.target.textContent=`${Math.round(m.reynolds/1e3)}k`}function p(){const m=s.clientWidth,x=s.clientHeight,y=document.documentElement.dataset.theme==="light";n.clearRect(0,0,m,x),n.fillStyle=y?"#f8f8f8":"#090909",n.fillRect(0,0,m,x);const v=18,E=m-18,b=74,w=x-34;n.strokeStyle=y?"#ddd":"#1d1d1d",n.lineWidth=1,n.beginPath(),n.moveTo(v,w),n.lineTo(E,w),n.moveTo(v,b),n.lineTo(v,w),n.stroke();const C=(v+E)/2,M=(b+w)/2,S=100,P=Math.round(r*S),I=y?.18:.12,N=(H,k)=>{if(!(P<2)){n.strokeStyle=H,n.lineWidth=2,n.lineJoin="round",n.lineCap="round",n.beginPath();for(let z=0;z<=P;z++){const W=z/S,Y=v+W*(E-v),et=k(W);z===0?n.moveTo(Y,et):n.lineTo(Y,et)}n.stroke()}};N(`rgba(74, 163, 255, ${I})`,H=>b+8+(1-Math.pow(1-H,1.5))*(w-b-16)),N(`rgba(128, 240, 165, ${I})`,H=>w-8-4*H*(1-H)*(w-b-24)*.7),N(`rgba(255, 138, 74, ${I})`,H=>M-Math.exp(-Math.pow((H-.25)*6,2))*.5*(w-b)*.3),n.fillStyle=y?"#aaa":"#3a3a3a",n.font="600 11px -apple-system, sans-serif",n.textAlign="center",n.fillText("Flick the ball to see flight data",C,M+4),n.textAlign="start"}function f(m){const x=m-a;if(r=Math.min(x/l,1),p(),r>=1){o=!0,i=null;return}i=requestAnimationFrame(f)}function _(){i||o||(r=0,setTimeout(()=>{i||o||(a=performance.now(),i=requestAnimationFrame(f))},250))}function g(){i&&(cancelAnimationFrame(i),i=null)}return{resizeFlightDynamicsChart:h,drawFlightGraph:u,recordPhysicsSample:d}}function GS(s){const t={latestFlightSeries:null},e=HS({...s.flightDynamics,flightAnalyticsState:t}),n=VS({scene:s.scene,gridHelper:s.gridHelper,fieldLines:s.fieldLines,backWall:s.backWall,leftWall:s.leftWall,rightWall:s.rightWall,...s.birdseye,getBallGroup:s.getBallGroup});function i(){n.resizeBirdseye(),e.resizeFlightDynamicsChart()}function r(a){e.recordPhysicsSample(a),n.renderBirdseye(),e.drawFlightGraph()}const o=new ResizeObserver(()=>{i(),n.renderBirdseye(),e.drawFlightGraph()});return o.observe(s.birdseye.panel),o.observe(s.flightDynamics.panel),i(),n.renderBirdseye(),e.drawFlightGraph(),{flightAnalyticsState:t,clearTrail:n.clearTrail,pushTrailPoint:n.pushTrailPoint,fadeTrail:n.fadeTrail,renderBirdseye:n.renderBirdseye,resizeDataPanels:i,recordPhysicsSample:r,drawFlightGraph:e.drawFlightGraph,applyBirdseyeTheme:n.applyTheme}}function WS({scene:s,camera:t,canvas:e,trailHeight:n=1.5,maxTrailPoints:i=50,trailMinWidth:r=.01,trailMaxWidth:o=.175}){const a=i*2,l=new Float32Array(a*3),c=[];for(let x=0;x<i-1;x++){const y=x*2,v=x*2+1,E=(x+1)*2,b=(x+1)*2+1;c.push(y,E,v,v,E,b)}const h=new Ae;h.setAttribute("position",new Fn(l,3)),h.setIndex(c);const u=new Un({color:"#ffffff",transparent:!0,opacity:.85,side:He,depthWrite:!1}),d=new se(h,u);d.visible=!1,s.add(d);const p=new Wf,f=new Ci(new L(0,1,0),-n);function _(x,y){const v=e.getBoundingClientRect(),E=new Tt((x-v.left)/v.width*2-1,-((y-v.top)/v.height)*2+1);p.setFromCamera(E,t);const b=new L;return p.ray.intersectPlane(f,b),b}function g(x){const y=x.length;if(y<2){h.setDrawRange(0,0);return}for(let v=0;v<y;v++){const E=_(x[v].x,x[v].y),b=v/(y-1),w=r+(o-r)*b*b;let C,M;if(v<y-1){const N=_(x[v+1].x,x[v+1].y);C=N.x-E.x,M=N.z-E.z}else{const N=_(x[v-1].x,x[v-1].y);C=E.x-N.x,M=E.z-N.z}const S=Math.sqrt(C*C+M*M)||1,P=-M/S*w*.5,I=C/S*w*.5;l[v*2*3]=E.x+P,l[v*2*3+1]=E.y,l[v*2*3+2]=E.z+I,l[(v*2+1)*3]=E.x-P,l[(v*2+1)*3+1]=E.y,l[(v*2+1)*3+2]=E.z-I}for(let v=y;v<i;v++)l[v*2*3]=0,l[v*2*3+1]=0,l[v*2*3+2]=0,l[(v*2+1)*3]=0,l[(v*2+1)*3+1]=0,l[(v*2+1)*3+2]=0;h.attributes.position.needsUpdate=!0,h.setDrawRange(0,Math.max(0,y-1)*6)}function m(x){u.color.set(x?"#000000":"#ffffff")}return{trailMesh:d,updateTrailRibbon:g,maxTrailPoints:i,applyTheme:m}}function Ai(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function dp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Lr={duration:.5,overwrite:!1,delay:0},Wh,tn,Pe,$n=1e8,Ee=1/$n,ih=Math.PI*2,XS=ih/4,YS=0,fp=Math.sqrt,qS=Math.cos,$S=Math.sin,qe=function(t){return typeof t=="string"},Ne=function(t){return typeof t=="function"},Ni=function(t){return typeof t=="number"},Xh=function(t){return typeof t>"u"},gi=function(t){return typeof t=="object"},yn=function(t){return t!==!1},Yh=function(){return typeof window<"u"},ga=function(t){return Ne(t)||qe(t)},pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},rn=Array.isArray,ZS=/random\([^)]+\)/g,jS=/,\s*/g,Bd=/(?:-?\.?\d|\.)+/gi,mp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,dr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_p=/[+-]=-?[.\d]+/,KS=/[^,'"\[\]\s]+/gi,JS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,ci,sh,qh,On={},Va={},gp,vp=function(t){return(Va=Ir(t,On))&&bn},$h=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},bo=function(t,e){return!e&&console.warn(t)},xp=function(t,e){return t&&(On[t]=e)&&Va&&(Va[t]=e)||On},wo=function(){return 0},QS={suppressEvents:!0,isStart:!0,kill:!1},Aa={suppressEvents:!0,kill:!1},tE={suppressEvents:!0},Zh={},ns=[],rh={},yp,Rn={},tc={},kd=30,Ca=[],jh="",Kh=function(t){var e=t[0],n,i;if(gi(e)||Ne(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ca.length;i--&&!Ca[i].targetTest(e););n=Ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Wp(t[i],n)))||t.splice(i,1);return t},Fs=function(t){return t._gsap||Kh(Zn(t))[0]._gsap},Mp=function(t,e,n){return(n=t[e])&&Ne(n)?t[e]():Xh(n)&&t.getAttribute&&t.getAttribute(e)||n},Mn=function(t,e){return(t=t.split(",")).forEach(e)||t},Oe=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},vr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},eE=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ha=function(){var t=ns.length,e=ns.slice(0),n,i;for(rh={},ns.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Jh=function(t){return!!(t._initted||t._startAt||t.add)},Sp=function(t,e,n,i){ns.length&&!tn&&Ha(),t.render(e,n,!!(tn&&e<0&&Jh(t))),ns.length&&!tn&&Ha()},Ep=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(KS).length<2?e:qe(t)?t.trim():t},bp=function(t){return t},zn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},nE=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ir=function(t,e){for(var n in e)t[n]=e[n];return t},Vd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},fo=function(t){var e=t.parent||Le,n=t.keyframes?nE(rn(t.keyframes)):zn;if(yn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},iE=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},wp=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},rl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},as=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ns=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},sE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},oh=function(t,e,n,i){return t._startAt&&(tn?t._startAt.revert(Aa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},rE=function s(t){return!t||t._ts&&s(t.parent)},Hd=function(t){return t._repeat?Ur(t._tTime,t=t.duration()+t._rDelay)*t:0},Ur=function(t,e){var n=Math.floor(t=De(t/e));return t&&n===t?n-1:n},Wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ol=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=De(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ol(t),n._dirty||Ns(n,t)),t},Tp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Wa(t.rawTime(),e),(!e._dur||No(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Ns(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},ui=function(t,e,n,i){return e.parent&&as(e),e._start=De((Ni(n)?n:n||t!==Le?Xn(t,n,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),wp(t,e,"_first","_last",t._sort?"_start":0),ah(e)||(t._recent=e),i||Tp(t,e),t._ts<0&&al(t,t._tTime),t},Ap=function(t,e){return(On.ScrollTrigger||$h("scrollTrigger",e))&&On.ScrollTrigger.create(e,t)},Cp=function(t,e,n,i,r){if(tu(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!tn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&yp!==Pn.frame)return ns.push(t),t._lazy=[r,i],1},oE=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},ah=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},aE=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&oE(t)&&!(!t._initted&&ah(t))||(t._ts<0||t._dp._ts<0)&&!ah(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=No(0,t._tDur,e),h=Ur(l,a),t._yoyo&&h&1&&(o=1-o),h!==Ur(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||tn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&Cp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&oh(t,e,n,!0),t._onUpdate&&!n&&Ln(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Ln(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&as(t,1),!n&&!tn&&(Ln(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},lE=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Fr=function(t,e,n,i){var r=t._repeat,o=De(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:De(o*(r+1)+t._rDelay*r):o,a>0&&!i&&al(t,t._tTime=t._tDur*a),t.parent&&ol(t),n||Ns(t.parent,t),t},Gd=function(t){return t instanceof un?Ns(t):Fr(t,t._dur)},cE={_start:0,endTime:wo,totalDuration:wo},Xn=function s(t,e,n){var i=t.labels,r=t._recent||cE,o=t.duration()>=$n?r.endTime(!1):t._dur,a,l,c;return qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(rn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},po=function(t,e,n){var i=Ni(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new ke(e[0],o,e[r+1])},fs=function(t,e){return t||t===0?e(t):e},No=function(t,e,n){return n<t?t:n>e?e:n},sn=function(t,e){return!qe(t)||!(e=JS.exec(t))?"":e[1]},hE=function(t,e,n){return fs(n,function(i){return No(t,e,i)})},lh=[].slice,Rp=function(t,e){return t&&gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gi(t[0]))&&!t.nodeType&&t!==ci},uE=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return qe(i)&&!e||Rp(i,1)?(r=n).push.apply(r,Zn(i)):n.push(i)})||n},Zn=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):qe(t)&&!n&&(sh||!Nr())?lh.call((e||qh).querySelectorAll(t),0):rn(t)?uE(t,n):Rp(t)?lh.call(t,0):t?[t]:[]},ch=function(t){return t=Zn(t)[0]||bo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Zn(e,n.querySelectorAll?n:n===t?bo("Invalid scope")||qh.createElement("div"):t)}},Pp=function(t){return t.sort(function(){return .5-Math.random()})},Dp=function(t){if(Ne(t))return t;var e=gi(t)?t:{each:t},n=Os(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return qe(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,p,f){var _=(f||e).length,g=o[_],m,x,y,v,E,b,w,C,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,$n])[1],!M){for(w=-$n;w<(w=f[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(g=o[_]=[],m=l?Math.min(M,_)*h-.5:i%M,x=M===$n?0:l?_*u/M-.5:i/M|0,w=0,C=$n,b=0;b<_;b++)y=b%M-m,v=x-(b/M|0),g[b]=E=c?Math.abs(c==="y"?v:y):fp(y*y+v*v),E>w&&(w=E),E<C&&(C=E);i==="random"&&Pp(g),g.max=w-C,g.min=C,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),g.b=_<0?r-_:r,g.u=sn(e.amount||e.each)||0,n=n&&_<0?Vp(n):n}return _=(g[d]-g.min)/g.max||0,De(g.b+(n?n(_):_)*g.v)+g.u}},hh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=De(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ni(n)?0:sn(n))}},Lp=function(t,e){var n=rn(t),i,r;return!n&&gi(t)&&(i=n=t.radius||$n,t.values?(t=Zn(t.values),(r=!Ni(t[0]))&&(i*=i)):t=hh(t.increment)),fs(e,n?Ne(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=$n,h=0,u=t.length,d,p;u--;)r?(d=t[u].x-a,p=t[u].y-l,d=d*d+p*p):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,r||h===o||Ni(o)?h:h+sn(o)}:hh(t))},Ip=function(t,e,n,i){return fs(rn(t)?!e:n===!0?!!(n=0):!i,function(){return rn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},dE=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},fE=function(t,e){return function(n){return t(parseFloat(n))+(e||sn(n))}},pE=function(t,e,n){return Fp(t,e,0,1,n)},Up=function(t,e,n){return fs(n,function(i){return t[~~e(i)]})},mE=function s(t,e,n){var i=e-t;return rn(t)?Up(t,s(0,t.length),e):fs(n,function(r){return(i+(r-t)%i)%i+t})},_E=function s(t,e,n){var i=e-t,r=i*2;return rn(t)?Up(t,s(0,t.length-1),e):fs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},To=function(t){return t.replace(ZS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(jS);return Ip(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Fp=function(t,e,n,i,r){var o=e-t,a=i-n;return fs(r,function(l){return n+((l-t)/o*a||0)})},gE=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var o=qe(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(rn(t)&&!rn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(s(t[c-1],t[c]));u--,r=function(f){f*=u;var _=Math.min(d,~~f);return h[_](f-_)},n=e}else i||(t=Ir(rn(t)?[]:{},t));if(!h){for(l in e)Qh.call(a,t,l,"get",e[l]);r=function(f){return iu(f,a)||(o?t.p:t)}}}return fs(n,r)},Wd=function(t,e,n){var i=t.labels,r=$n,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Ln=function(t,e,n){var i=t.vars,r=i[e],o=Pe,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&ns.length&&Ha(),a&&(Pe=a),h=l?r.apply(c,l):r.call(c),Pe=o,h},no=function(t){return as(t),t.scrollTrigger&&t.scrollTrigger.kill(!!tn),t.progress()<1&&Ln(t,"onInterrupt"),t},fr,Np=[],Op=function(t){if(t)if(t=!t.name&&t.default||t,Yh()||t.headless){var e=t.name,n=Ne(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:wo,render:iu,add:Qh,kill:IE,modifier:LE,rawVars:0},o={targetTest:0,get:0,getSetter:nu,aliases:{},register:0};if(Nr(),t!==i){if(Rn[e])return;zn(i,zn(Ga(t,r),o)),Ir(i.prototype,Ir(r,Ga(t,o))),Rn[i.prop=e]=i,t.targetTest&&(Ca.push(i),Zh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}xp(e,i),t.register&&t.register(bn,i,Sn)}else Np.push(t)},Se=255,io={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},ec=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},zp=function(t,e,n){var i=t?Ni(t)?[t>>16,t>>8&Se,t&Se]:0:io.black,r,o,a,l,c,h,u,d,p,f;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),io[t])i=io[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=f=t.match(Bd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=ec(l+1/3,r,o),i[1]=ec(l,r,o),i[2]=ec(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(mp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Bd)||io.transparent;i=i.map(Number)}return e&&!f&&(r=i[0]/Se,o=i[1]/Se,a=i[2]/Se,u=Math.max(r,o,a),d=Math.min(r,o,a),h=(u+d)/2,u===d?l=c=0:(p=u-d,c=h>.5?p/(2-u-d):p/(u+d),l=u===r?(o-a)/p+(o<a?6:0):u===o?(a-r)/p+2:(r-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Bp=function(t){var e=[],n=[],i=-1;return t.split(is).forEach(function(r){var o=r.match(dr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Xd=function(t,e,n){var i="",r=(t+i).match(is),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!r)return t;if(r=r.map(function(d){return(d=zp(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=Bp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(is,"1").split(dr),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(is),u=c.length-1;a<u;a++)i+=c[a]+r[a];return i+c[u]},is=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in io)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),vE=/hsl[a]?\(/,kp=function(t){var e=t.join(" "),n;if(is.lastIndex=0,is.test(e))return n=vE.test(e),t[1]=Xd(t[1],n),t[0]=Xd(t[0],n,Bp(t[1])),!0},Ao,Pn=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,u,d,p,f=function _(g){var m=s()-i,x=g===!0,y,v,E,b;if((m>t||m<0)&&(n+=m-e),i+=m,E=i-n,y=E-o,(y>0||x)&&(b=++u.frame,d=E-u.time*1e3,u.time=E=E/1e3,o+=y+(y>=r?4:r-y),v=1),x||(l=c(_)),v)for(p=0;p<a.length;p++)a[p](E,d,b,g)};return u={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){gp&&(!sh&&Yh()&&(ci=sh=window,qh=ci.document||{},On.gsap=bn,(ci.gsapVersions||(ci.gsapVersions=[])).push(bn.version),vp(Va||ci.GreenSockGlobals||!ci.gsap&&ci||{}),Np.forEach(Op)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},Ao=1,f(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ao=0,c=wo},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){r=1e3/(g||240),o=u.time*1e3+r},add:function(g,m,x){var y=m?function(v,E,b,w){g(v,E,b,w),u.remove(y)}:g;return u.remove(g),a[x?"unshift":"push"](y),Nr(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},u})(),Nr=function(){return!Ao&&Pn.wake()},ce={},xE=/^[\d.\-M][\d.\-,\s]/,yE=/["']/g,ME=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(yE,"").trim():+c,i=l.substr(a+1).trim();return e},SE=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},EE=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ME(e[1])]:SE(t).split(",").map(Ep)):ce._CE&&xE.test(t)?ce._CE("",t):n},Vp=function(t){return function(e){return 1-t(1-e)}},Hp=function s(t,e){for(var n=t._first,i;n;)n instanceof un?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Os=function(t,e){return t&&(Ne(t)?t:ce[t]||EE(t))||e},Xs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Mn(t,function(a){ce[a]=On[a]=r,ce[o=a.toLowerCase()]=n;for(var l in r)ce[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[a+"."+l]=r[l]}),r},Gp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},nc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/ih*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*$S((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Gp(a);return r=ih/r,l.config=function(c,h){return s(t,c,h)},l},ic=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Gp(n);return i.config=function(r){return s(t,r)},i};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Xs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;Xs("Elastic",nc("in"),nc("out"),nc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Xs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Xs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Xs("Circ",function(s){return-(fp(1-s*s)-1)});Xs("Sine",function(s){return s===1?1:-qS(s*XS)+1});Xs("Back",ic("in"),ic("out"),ic());ce.SteppedEase=ce.steps=On.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Ee;return function(a){return((i*No(0,o,a)|0)+r)*n}}};Lr.ease=ce["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return jh+=s+","+s+"Params,"});var Wp=function(t,e){this.id=YS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Mp,this.set=e?e.getSetter:nu},Co=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Fr(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Ao||Pn.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Fr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Nr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(al(this,n),!r._dp||r.parent||Tp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Sp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Hd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Hd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ur(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(No(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ol(this),sE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Nr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=De(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=tE);var i=tn;return tn=n,Jh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),tn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Gd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Gd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Xn(this,n),yn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,yn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ne(n)?n:bp,l=function(){var h=i.then;i.then=null,r&&r(),Ne(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){no(this)},s})();zn(Co.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var un=(function(s){dp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=yn(n.sortChildren),Le&&ui(n.parent||Le,Ai(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Ap(Ai(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return po(0,arguments,this),this},e.from=function(i,r,o){return po(1,arguments,this),this},e.fromTo=function(i,r,o,a){return po(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,fo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new ke(i,r,Xn(this,o),1),this},e.call=function(i,r,o){return ui(this,ke.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new ke(i,o,Xn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,fo(o).immediateRender=yn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,u){return a.startAt=o,fo(a).immediateRender=yn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,u)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:De(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,p,f,_,g,m,x,y,v,E,b,w;if(this!==Le&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,v=this._start,y=this._ts,m=!y,u&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(b=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(d=De(h%g),h===l?(_=this._repeat,d=c):(E=De(h/g),_=~~E,_&&_===E&&(d=c,_--),d>c&&(d=c)),E=Ur(this._tTime,g),!a&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),b&&_&1&&(d=c-d,w=1),_!==E&&!this._lock){var C=b&&E&1,M=C===(b&&_&1);if(_<E&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:De(_*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Hp(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=lE(this,De(a),De(d)),x&&(h-=d-(d=x._start))),this._tTime=h,this._time=d,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!E&&(Ln(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(p=this._first;p;){if(f=p._next,(p._act||d>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,r,o),d!==this._time||!this._ts&&!m){x=0,f&&(h+=this._zTime=-Ee);break}}p=f}else{p=this._last;for(var S=i<0?i:d;p;){if(f=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,o||tn&&Jh(p)),d!==this._time||!this._ts&&!m){x=0,f&&(h+=this._zTime=S?-Ee:Ee);break}}p=f}}if(x&&!r&&(this.pause(),x.render(d>=a?0:-Ee)._zTime=d>=a?1:-1,this._ts))return this._start=v,ol(this),this.render(i,r,o);this._onUpdate&&!r&&Ln(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&as(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Ln(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Ni(r)||(r=Xn(this,r,i)),!(i instanceof Co)){if(rn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(qe(i))return this.addLabel(i,r);if(Ne(i))i=ke.delayedCall(0,i);else return this}return this!==i?ui(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-$n);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof ke?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return qe(i)?this.removeLabel(i):Ne(i)?this.killTweensOf(i):(i.parent===this&&rl(this,i),i===this._recent&&(this._recent=this._last),Ns(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(Pn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Xn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=ke.delayedCall(0,r||wo,o);return a.data="isPause",this._hasPause=1,ui(this,a,Xn(this,i))},e.removePause=function(i){var r=this._first;for(i=Xn(this,i);r;)r._start===i&&r.data==="isPause"&&as(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ki!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Zn(i),l=this._first,c=Ni(r),h;l;)l instanceof ke?eE(l._targets,a)&&(c?(!Ki||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Xn(o,i),l=r,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,p,f=ke.to(o,zn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ee,onStart:function(){if(o.pause(),!p){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());f._dur!==g&&Fr(f,g,0,1).render(f._time,!0,!0),p=1}h&&h.apply(f,u||[])}},r));return d?f.render(0):f},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,zn({startAt:{time:Xn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Wd(this,Xn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Wd(this,Xn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=De(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Ns(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ns(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=$n,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=De(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Fr(o,o===Le&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Le._ts&&(Sp(Le,Wa(i,Le)),yp=Pn.frame),Pn.frame>=kd){kd+=Nn.autoSleep||120;var r=Le._first;if((!r||!r._ts)&&Nn.autoSleep&&Pn._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Pn.sleep()}}},t})(Co);zn(un.prototype,{_lock:0,_hasPause:0,_forcing:0});var bE=function(t,e,n,i,r,o,a){var l=new Sn(this._pt,t,e,0,1,jp,null,r),c=0,h=0,u,d,p,f,_,g,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=To(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),d=n.match(Ql)||[];u=Ql.exec(i);)f=u[0],_=i.substring(c,u.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),f!==d[h++]&&(g=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:f.charAt(1)==="="?vr(g,f)-g:parseFloat(f)-g,m:p&&p<4?Math.round:0},c=Ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(_p.test(i)||m)&&(l.e=0),this._pt=l,l},Qh=function(t,e,n,i,r,o,a,l,c,h){Ne(i)&&(i=i(r||0,t,o));var u=t[e],d=n!=="get"?n:Ne(u)?c?t[e.indexOf("set")||!Ne(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,p=Ne(u)?c?RE:$p:eu,f;if(qe(i)&&(~i.indexOf("random(")&&(i=To(i)),i.charAt(1)==="="&&(f=vr(d,i)+(sn(d)||0),(f||f===0)&&(i=f))),!h||d!==i||uh)return!isNaN(d*i)&&i!==""?(f=new Sn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?DE:Zp,0,p),c&&(f.fp=c),a&&f.modifier(a,this,t),this._pt=f):(!u&&!(e in t)&&$h(e,i),bE.call(this,t,e,d,i,p,l||Nn.stringFilter,c))},wE=function(t,e,n,i,r){if(Ne(t)&&(t=mo(t,r,e,n,i)),!gi(t)||t.style&&t.nodeType||rn(t)||pp(t))return qe(t)?mo(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=mo(t[a],r,e,n,i);return o},Xp=function(t,e,n,i,r,o){var a,l,c,h;if(Rn[t]&&(a=new Rn[t]).init(r,a.rawVars?e[t]:wE(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new Sn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==fr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ki,uh,tu=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,p=i.autoRevert,f=t._dur,_=t._startAt,g=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=t._overwrite==="auto"&&!Wh,v=t.timeline,E,b,w,C,M,S,P,I,N,H,k,z,W;if(v&&(!d||!r)&&(r="none"),t._ease=Os(r,Lr.ease),t._yEase=u?Vp(Os(u===!0?r:u,Lr.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!v&&!!i.runBackwards,!v||d&&!i.stagger){if(I=g[0]?Fs(g[0]).harness:0,z=I&&i[I.prop],E=Ga(i,Zh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!p?_.render(-1,!0):_.revert(h&&f?Aa:QS),_._lazy=0),o){if(as(t._startAt=ke.set(g,zn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&yn(l),startAt:null,delay:0,onUpdate:c&&function(){return Ln(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn||!a&&!p)&&t._startAt.revert(Aa),a&&f&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&f&&!_){if(e&&(a=!1),w=zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&yn(l),immediateRender:a,stagger:0,parent:m},E),z&&(w[I.prop]=z),as(t._startAt=ke.set(g,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(tn?t._startAt.revert(Aa):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=f&&yn(l)||l&&!f,b=0;b<g.length;b++){if(M=g[b],P=M._gsap||Kh(g)[b]._gsap,t._ptLookup[b]=H={},rh[P.id]&&ns.length&&Ha(),k=x===g?b:x.indexOf(M),I&&(N=new I).init(M,z||E,t,k,x)!==!1&&(t._pt=C=new Sn(t._pt,M,N.name,0,1,N.render,N,0,N.priority),N._props.forEach(function(Y){H[Y]=C}),N.priority&&(S=1)),!I||z)for(w in E)Rn[w]&&(N=Xp(w,E,t,k,M,x))?N.priority&&(S=1):H[w]=C=Qh.call(t,M,w,"get",E[w],k,x,0,i.stringFilter);t._op&&t._op[b]&&t.kill(M,t._op[b]),y&&t._pt&&(Ki=t,Le.killTweensOf(M,H,t.globalTime(e)),W=!t.parent,Ki=0),t._pt&&l&&(rh[P.id]=1)}S&&Kp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!W,d&&e<=0&&v.render($n,!0,!0)},TE=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,p;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(h=d[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return uh=1,t.vars[e]="+=0",tu(t,a),uh=0,l?bo(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)u=c[p],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Oe(n)+sn(u.e)),u.b&&(u.b=h.s+sn(u.b))},AE=function(t,e){var n=t[0]?Fs(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ir({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},CE=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(rn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},mo=function(t,e,n,i,r){return Ne(t)?t.call(e,n,i,r):qe(t)&&~t.indexOf("random(")?To(t):t},Yp=jh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",qp={};Mn(Yp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return qp[s]=1});var ke=(function(s){dp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:fo(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,p=l.overwrite,f=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,x=i.parent||Le,y=(rn(n)||pp(n)?Ni(n[0]):"length"in i)?[n]:Zn(n),v,E,b,w,C,M,S,P;if(a._targets=y.length?Kh(y):bo("GSAP target "+n+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,f||d||ga(c)||ga(h)){if(i=a.vars,v=a.timeline=new un({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Ai(a),v._start=0,d||ga(c)||ga(h)){if(w=y.length,S=d&&Dp(d),gi(d))for(C in d)~Yp.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(E=0;E<w;E++)b=Ga(i,qp),b.stagger=0,m&&(b.yoyoEase=m),P&&Ir(b,P),M=y[E],b.duration=+mo(c,Ai(a),E,M,y),b.delay=(+mo(h,Ai(a),E,M,y)||0)-a._delay,!d&&w===1&&b.delay&&(a._delay=h=b.delay,a._start+=h,b.delay=0),v.to(M,b,S?S(E,M,y):0),v._ease=ce.none;v.duration()?c=h=0:a.timeline=0}else if(f){fo(zn(v.vars.defaults,{ease:"none"})),v._ease=Os(f.ease||i.ease||"none");var I=0,N,H,k;if(rn(f))f.forEach(function(z){return v.to(y,z,">")}),v.duration();else{b={};for(C in f)C==="ease"||C==="easeEach"||CE(C,f[C],b,f.easeEach);for(C in b)for(N=b[C].sort(function(z,W){return z.t-W.t}),I=0,E=0;E<N.length;E++)H=N[E],k={ease:H.e,duration:(H.t-(E?N[E-1].t:0))/100*c},k[C]=H.v,v.to(y,k,I),I+=k.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return p===!0&&!Wh&&(Ki=Ai(a),Le.killTweensOf(y),Ki=0),ui(x,Ai(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!f&&a._start===De(x._time)&&yn(u)&&rE(Ai(a))&&x.data!=="nested")&&(a._tTime=-Ee,a.render(Math.max(0,-h)||0)),g&&Ap(Ai(a),g),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Ee&&!h?l:i<Ee?0:i,d,p,f,_,g,m,x,y,v;if(!c)aE(this,i,r,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(d=De(u%_),u===l?(f=this._repeat,d=c):(g=De(u/_),f=~~g,f&&f===g?(d=c,f--):d>c&&(d=c)),m=this._yoyo&&f&1,m&&(v=this._yEase,d=c-d),g=Ur(this._tTime,_),d===a&&!o&&this._initted&&f===g)return this._tTime=u,this;f!==g&&(y&&this._yEase&&Hp(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&d!==_&&this._initted&&(this._lock=o=1,this.render(De(_*f),!0).invalidate()._lock=0))}if(!this._initted){if(Cp(this,h?i:d,o,r,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&f!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!a&&u&&!r&&!g&&(Ln(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(d/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&oh(this,i,r,o),Ln(this,"onUpdate")),this._repeat&&f!==g&&this.vars.onRepeat&&!r&&this.parent&&Ln(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&oh(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&as(this,1),!r&&!(h&&!a)&&(u||a||m)&&(Ln(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Ao||Pn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||tu(this,c),h=this._ease(c/this._dur),TE(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(al(this,0),this.parent||wp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?no(this):this.scrollTrigger&&this.scrollTrigger.kill(!!tn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ki&&Ki.vars.overwrite!==!0)._first||no(this),this.parent&&o!==this.timeline.totalDuration()&&Fr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Zn(i):a,c=this._ptLookup,h=this._pt,u,d,p,f,_,g,m;if((!r||r==="all")&&iE(a,l))return r==="all"&&(this._pt=0),no(this);for(u=this._op=this._op||[],r!=="all"&&(qe(r)&&(_={},Mn(r,function(x){return _[x]=1}),r=_),r=AE(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){d=c[m],r==="all"?(u[m]=r,f=d,p={}):(p=u[m]=u[m]||{},f=r);for(_ in f)g=d&&d[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&rl(this,g,"_pt"),delete d[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&no(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return po(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return po(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Le.killTweensOf(i,r,o)},t})(Co);zn(ke.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(s){ke[s]=function(){var t=new un,e=lh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var eu=function(t,e,n){return t[e]=n},$p=function(t,e,n){return t[e](n)},RE=function(t,e,n,i){return t[e](i.fp,n)},PE=function(t,e,n){return t.setAttribute(e,n)},nu=function(t,e){return Ne(t[e])?$p:Xh(t[e])&&t.setAttribute?PE:eu},Zp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},DE=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},jp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},iu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},LE=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},IE=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?rl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},UE=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Kp=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},Sn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Zp,this.d=l||this,this.set=c||eu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=UE,this.m=n,this.mt=r,this.tween=i},s})();Mn(jh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return Zh[s]=1});On.TweenMax=On.TweenLite=ke;On.TimelineLite=On.TimelineMax=un;Le=new un({sortChildren:!1,defaults:Lr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=kp;var zs=[],Ra={},FE=[],Yd=0,NE=0,sc=function(t){return(Ra[t]||FE).map(function(e){return e()})},dh=function(){var t=Date.now(),e=[];t-Yd>2&&(sc("matchMediaInit"),zs.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ci.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),sc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Yd=t,sc("matchMedia"))},Jp=(function(){function s(e,n){this.selector=n&&ch(n),this.data=[],this._r=[],this.isReverted=!1,this.id=NE++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ne(n)&&(r=i,i=n,n=Ne);var o=this,a=function(){var c=Pe,h=o.selector,u;return c&&c!==o&&c.data.push(o),r&&(o.selector=ch(r)),Pe=o,u=i.apply(o,arguments),Ne(u)&&o._r.push(u),Pe=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ne?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof ke&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof un?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof ke)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=zs.length;o--;)zs[o].id===this.id&&zs.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),OE=(function(){function s(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){gi(n)||(n={matches:n});var o=new Jp(0,r||this.scope),a=o.conditions={},l,c,h;Pe&&!o.selector&&(o.selector=Pe.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ci.matchMedia(n[c]),l&&(zs.indexOf(o)<0&&zs.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(dh):l.addEventListener("change",dh)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Op(i)})},timeline:function(t){return new un(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,n,i){qe(t)&&(t=Zn(t)[0]);var r=Fs(t||{}).get,o=n?bp:Ep;return n==="native"&&(n=""),t&&(e?o((Rn[e]&&Rn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Rn[a]&&Rn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Zn(t),t.length>1){var i=t.map(function(h){return bn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}t=t[0]||{};var o=Rn[e],a=Fs(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;fr._pt=0,u.init(t,n?h+n:h,fr,0,[t]),u.render(1,u),fr._pt&&iu(1,fr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=bn.to(t,zn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Os(t.ease,Lr.ease)),Vd(Lr,t||{})},config:function(t){return Vd(Nn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Rn[a]&&!On[a]&&bo(e+" effect requires "+a+" plugin.")}),tc[e]=function(a,l,c){return n(Zn(a),zn(l||{},r),c)},o&&(un.prototype[e]=function(a,l,c){return this.add(tc[e](a,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=Os(e)},parseEase:function(t,e){return arguments.length?Os(t,e):ce},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new un(t),i,r;for(n.smoothChildTiming=yn(t.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)r=i._next,(e||!(!i._dur&&i instanceof ke&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=r;return ui(Le,n,0),n},context:function(t,e){return t?new Jp(t,e):Pe},matchMedia:function(t){return new OE(t)},matchMediaRefresh:function(){return zs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||dh()},addEventListener:function(t,e){var n=Ra[t]||(Ra[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ra[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:mE,wrapYoyo:_E,distribute:Dp,random:Ip,snap:Lp,normalize:pE,getUnit:sn,clamp:hE,splitColor:zp,toArray:Zn,selector:ch,mapRange:Fp,pipe:dE,unitize:fE,interpolate:gE,shuffle:Pp},install:vp,effects:tc,ticker:Pn,updateRoot:un.updateRoot,plugins:Rn,globalTimeline:Le,core:{PropTween:Sn,globals:xp,Tween:ke,Timeline:un,Animation:Co,getCache:Fs,_removeLinkedListItem:rl,reverting:function(){return tn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return Wh=t}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Xa[s]=ke[s]});Pn.add(un.updateRoot);fr=Xa.to({},{duration:0});var zE=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},BE=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=zE(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},rc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(qe(r)&&(l={},Mn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}BE(a,r)}}}},bn=Xa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)tn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},rc("roundProps",hh),rc("modifiers"),rc("snap",Lp))||Xa;ke.version=un.version=bn.version="3.14.2";gp=1;Yh()&&Nr();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var qd,Ji,xr,su,Ds,$d,ru,kE=function(){return typeof window<"u"},Oi={},Ts=180/Math.PI,yr=Math.PI/180,lr=Math.atan2,Zd=1e8,ou=/([A-Z])/g,VE=/(left|right|width|margin|padding|x)/i,HE=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},GE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},WE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},XE=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},YE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Qp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},tm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},qE=function(t,e,n){return t.style[e]=n},$E=function(t,e,n){return t.style.setProperty(e,n)},ZE=function(t,e,n){return t._gsap[e]=n},jE=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},KE=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},JE=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},Ue="transform",En=Ue+"Origin",QE=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Oi&&r){if(this.tfm=this.tfm||{},t!=="transform")t=fi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ri(i,a)}):this.tfm[t]=o.x?o[t]:Ri(i,t),t===En&&(this.tfm.zOrigin=o.zOrigin);else return fi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(Ue)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(En,e,"")),t=Ue}(r||e)&&this.props.push(t,e,r[t])},em=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},t1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(ou,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=ru(),(!r||!r.isStart)&&!n[Ue]&&(em(n),i.zOrigin&&n[En]&&(n[En]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},nm=function(t,e){var n={target:t,props:[],revert:t1,save:QE};return t._gsap||bn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},im,ph=function(t,e){var n=Ji.createElementNS?Ji.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ji.createElement(t);return n&&n.style?n:Ji.createElement(t)},In=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(ou,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Or(e)||e,1)||""},jd="O,Moz,ms,Ms,Webkit".split(","),Or=function(t,e,n){var i=e||Ds,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(jd[o]+t in r););return o<0?null:(o===3?"ms":o>=0?jd[o]:"")+t},mh=function(){kE()&&window.document&&(qd=window,Ji=qd.document,xr=Ji.documentElement,Ds=ph("div")||{style:{}},ph("div"),Ue=Or(Ue),En=Ue+"Origin",Ds.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",im=!!Or("perspective"),ru=bn.core.reverting,su=1)},Kd=function(t){var e=t.ownerSVGElement,n=ph("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),xr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),xr.removeChild(n),r},Jd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},sm=function(t){var e,n;try{e=t.getBBox()}catch{e=Kd(t),n=1}return e&&(e.width||e.height)||n||(e=Kd(t)),e&&!e.width&&!e.x&&!e.y?{x:+Jd(t,["x","cx","x1"])||0,y:+Jd(t,["y","cy","y1"])||0,width:0,height:0}:e},rm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&sm(t))},ls=function(t,e){if(e){var n=t.style,i;e in Oi&&e!==En&&(e=Ue),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(ou,"-$1").toLowerCase())):n.removeAttribute(e)}},Qi=function(t,e,n,i,r,o){var a=new Sn(t._pt,e,n,0,1,o?tm:Qp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},Qd={deg:1,rad:1,turn:1},e1={grid:1,flex:1},cs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ds.style,l=VE.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",p=i==="%",f,_,g,m;if(i===o||!r||Qd[i]||Qd[o])return r;if(o!=="px"&&!d&&(r=s(t,e,n,"px")),m=t.getCTM&&rm(t),(p||o==="%")&&(Oi[e]||~e.indexOf("adius")))return f=m?t.getBBox()[l?"width":"height"]:t[h],Oe(p?r/f*u:r/100*f);if(a[l?"width":"height"]=u+(d?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ji||!_.appendChild)&&(_=Ji.body),g=_._gsap,g&&p&&g.width&&l&&g.time===Pn.time&&!g.uncache)return Oe(r/g.width*u);if(p&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=u+i,f=t[h],x?t.style[e]=x:ls(t,e)}else(p||o==="%")&&!e1[In(_,"display")]&&(a.position=In(t,"position")),_===t&&(a.position="static"),_.appendChild(Ds),f=Ds[h],_.removeChild(Ds),a.position="absolute";return l&&p&&(g=Fs(_),g.time=Pn.time,g.width=_[h]),Oe(d?f*r/u:f&&r?u/f*r:0)},Ri=function(t,e,n,i){var r;return su||mh(),e in fi&&e!=="transform"&&(e=fi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Oi[e]&&e!=="transform"?(r=Po(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:qa(In(t,En))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ya[e]&&Ya[e](t,e,n)||In(t,e)||Mp(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?cs(t,e,r,n)+n:r},n1=function(t,e,n,i){if(!n||n==="none"){var r=Or(e,t,1),o=r&&In(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=In(t,"borderTopColor"))}var a=new Sn(this._pt,t.style,e,0,1,jp),l=0,c=0,h,u,d,p,f,_,g,m,x,y,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=In(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=In(t,e)||i,_?t.style[e]=_:ls(t,e)),h=[n,i],kp(h),n=h[0],i=h[1],d=n.match(dr)||[],E=i.match(dr)||[],E.length){for(;u=dr.exec(i);)g=u[0],x=i.substring(l,u.index),f?f=(f+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(f=1),g!==(_=d[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),g.charAt(1)==="="&&(g=vr(p,g)+v),m=parseFloat(g),y=g.substr((m+"").length),l=dr.lastIndex-y.length,y||(y=y||Nn.units[e]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(p=cs(t,e,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:m-p,m:f&&f<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?tm:Qp;return _p.test(i)&&(a.e=0),this._pt=a,a},tf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},i1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=tf[n]||n,e[1]=tf[i]||i,e.join(" ")},s1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Oi[a]&&(l=1,a=a==="transformOrigin"?En:Ue),ls(n,a);l&&(ls(n,Ue),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Po(n,1),o.uncache=1,em(i)))}},Ya={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new Sn(t._pt,e,n,0,0,s1);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Ro=[1,0,0,1,0,0],om={},am=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},ef=function(t){var e=In(t,Ue);return am(e)?Ro:e.substr(7).match(mp).map(Oe)},au=function(t,e){var n=t._gsap||Fs(t),i=t.style,r=ef(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Ro:r):(r===Ro&&!t.offsetParent&&t!==xr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,xr.appendChild(t)),r=ef(t),l?i.display=l:ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):xr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},_h=function(t,e,n,i,r,o){var a=t._gsap,l=r||au(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,p=l[0],f=l[1],_=l[2],g=l[3],m=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,b,w,C,M;n?l!==Ro&&(w=p*g-f*_)&&(C=v*(g/w)+E*(-_/w)+(_*x-g*m)/w,M=v*(-f/w)+E*(p/w)-(p*x-f*m)/w,v=C,E=M):(b=sm(t),v=b.x+(~y[0].indexOf("%")?v/100*b.width:v),E=b.y+(~(y[1]||y[0]).indexOf("%")?E/100*b.height:E)),i||i!==!1&&a.smooth?(m=v-c,x=E-h,a.xOffset=u+(m*p+x*_)-m,a.yOffset=d+(m*f+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[En]="0px 0px",o&&(Qi(o,a,"xOrigin",c,v),Qi(o,a,"yOrigin",h,E),Qi(o,a,"xOffset",u,a.xOffset),Qi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+E)},Po=function(t,e){var n=t._gsap||new Wp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=In(t,En)||"0",h,u,d,p,f,_,g,m,x,y,v,E,b,w,C,M,S,P,I,N,H,k,z,W,Y,et,st,ut,yt,Bt,J,nt;return h=u=d=_=g=m=x=y=v=0,p=f=1,n.svg=!!(t.getCTM&&rm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ue]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ue]!=="none"?l[Ue]:"")),i.scale=i.rotate=i.translate="none"),w=au(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),_h(t,W||c,!!W||n.originIsAbsolute,n.smooth!==!1,w)),E=n.xOrigin||0,b=n.yOrigin||0,w!==Ro&&(P=w[0],I=w[1],N=w[2],H=w[3],h=k=w[4],u=z=w[5],w.length===6?(p=Math.sqrt(P*P+I*I),f=Math.sqrt(H*H+N*N),_=P||I?lr(I,P)*Ts:0,x=N||H?lr(N,H)*Ts+_:0,x&&(f*=Math.abs(Math.cos(x*yr))),n.svg&&(h-=E-(E*P+b*N),u-=b-(E*I+b*H))):(nt=w[6],Bt=w[7],st=w[8],ut=w[9],yt=w[10],J=w[11],h=w[12],u=w[13],d=w[14],C=lr(nt,yt),g=C*Ts,C&&(M=Math.cos(-C),S=Math.sin(-C),W=k*M+st*S,Y=z*M+ut*S,et=nt*M+yt*S,st=k*-S+st*M,ut=z*-S+ut*M,yt=nt*-S+yt*M,J=Bt*-S+J*M,k=W,z=Y,nt=et),C=lr(-N,yt),m=C*Ts,C&&(M=Math.cos(-C),S=Math.sin(-C),W=P*M-st*S,Y=I*M-ut*S,et=N*M-yt*S,J=H*S+J*M,P=W,I=Y,N=et),C=lr(I,P),_=C*Ts,C&&(M=Math.cos(C),S=Math.sin(C),W=P*M+I*S,Y=k*M+z*S,I=I*M-P*S,z=z*M-k*S,P=W,k=Y),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),p=Oe(Math.sqrt(P*P+I*I+N*N)),f=Oe(Math.sqrt(z*z+nt*nt)),C=lr(k,z),x=Math.abs(C)>2e-4?C*Ts:0,v=J?1/(J<0?-J:J):0),n.svg&&(W=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!am(In(t,Ue)),W&&t.setAttribute("transform",W))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(f*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Oe(p),n.scaleY=Oe(f),n.rotation=Oe(_)+a,n.rotationX=Oe(g)+a,n.rotationY=Oe(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[En]=qa(c)),n.xOffset=n.yOffset=0,n.force3D=Nn.force3D,n.renderTransform=n.svg?o1:im?lm:r1,n.uncache=0,n},qa=function(t){return(t=t.split(" "))[0]+" "+t[1]},oc=function(t,e,n){var i=sn(e);return Oe(parseFloat(e)+parseFloat(cs(t,"x",n+"px",i)))+i},r1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,lm(t,e)},Ss="0deg",Kr="0px",Es=") ",lm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,p=n.skewY,f=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&t&&t!==1||m===!0;if(y&&(u!==Ss||h!==Ss)){var b=parseFloat(h)*yr,w=Math.sin(b),C=Math.cos(b),M;b=parseFloat(u)*yr,M=Math.cos(b),o=oc(x,o,w*M*-y),a=oc(x,a,-Math.sin(b)*-y),l=oc(x,l,C*M*-y+y)}g!==Kr&&(v+="perspective("+g+Es),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(E||o!==Kr||a!==Kr||l!==Kr)&&(v+=l!==Kr||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Es),c!==Ss&&(v+="rotate("+c+Es),h!==Ss&&(v+="rotateY("+h+Es),u!==Ss&&(v+="rotateX("+u+Es),(d!==Ss||p!==Ss)&&(v+="skew("+d+", "+p+Es),(f!==1||_!==1)&&(v+="scale("+f+", "+_+Es),x.style[Ue]=v||"translate(0, 0)"},o1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,p=n.target,f=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),E,b,w,C,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=yr,c*=yr,E=Math.cos(l)*u,b=Math.sin(l)*u,w=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=yr,M=Math.tan(c-h),M=Math.sqrt(1+M*M),w*=M,C*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),E*=M,b*=M)),E=Oe(E),b=Oe(b),w=Oe(w),C=Oe(C)):(E=u,C=d,b=w=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=cs(p,"x",o,"px"),v=cs(p,"y",a,"px")),(f||_||g||m)&&(y=Oe(y+f-(f*E+_*w)+g),v=Oe(v+_-(f*b+_*C)+m)),(i||r)&&(M=p.getBBox(),y=Oe(y+i/100*M.width),v=Oe(v+r/100*M.height)),M="matrix("+E+","+b+","+w+","+C+","+y+","+v+")",p.setAttribute("transform",M),x&&(p.style[Ue]=M)},a1=function(t,e,n,i,r){var o=360,a=qe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?Ts:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=r.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*Zd)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*Zd)%o-~~(c/o)*o)),t._pt=d=new Sn(t._pt,e,n,i,c,GE),d.e=h,d.u="deg",t._props.push(n),d},nf=function(t,e){for(var n in e)t[n]=e[n];return t},l1=function(t,e,n){var i=nf({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,p,f;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ue]=e,a=Po(n,1),ls(n,Ue),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ue],o[Ue]=e,a=Po(n,1),o[Ue]=c);for(l in Oi)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(p=sn(c),f=sn(h),u=p!==f?cs(n,l,c,f):parseFloat(c),d=parseFloat(h),t._pt=new Sn(t._pt,a,l,u,d-u,fh),t._pt.u=f||0,t._props.push(l));nf(a,i)};Mn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ya[t>1?"border"+s:s]=function(a,l,c,h,u){var d,p;if(arguments.length<4)return d=o.map(function(f){return Ri(a,f,c)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(h+"").split(" "),p={},o.forEach(function(f,_){return p[f]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,p,u)}});var cm={name:"css",register:mh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,p,f,_,g,m,x,y,v,E,b,w,C,M;su||mh(),this.styles=this.styles||nm(t),C=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Rn[_]&&Xp(_,e,n,i,t,r)))){if(p=typeof h,f=Ya[_],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=To(h)),f)f(this,t,_,h,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",is.lastIndex=0,is.test(c)||(g=sn(c),m=sn(h),m?g!==m&&(c=cs(t,_,c,m)+m):g&&(h+=g)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),C.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],qe(c)&&~c.indexOf("random(")&&(c=To(c)),sn(c+"")||c==="auto"||(c+=Nn.units[_]||sn(Ri(t,_))||""),(c+"").charAt(1)==="="&&(c=Ri(t,_))):c=Ri(t,_),d=parseFloat(c),x=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),_ in fi&&(_==="autoAlpha"&&(d===1&&Ri(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),Qi(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),_!=="scale"&&_!=="transform"&&(_=fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Oi,y){if(this.styles.save(_),M=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=In(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=In(t,"perspective"),S?t.style.perspective=S:ls(t,"perspective")}u=parseFloat(h)}if(v||(E=t._gsap,E.renderTransform&&!e.parseTransform||Po(t,e.parseTransform),b=e.smoothOrigin!==!1&&E.smooth,v=this._pt=new Sn(this._pt,a,Ue,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new Sn(this._pt,E,"scaleY",E.scaleY,(x?vr(E.scaleY,x+u):u)-E.scaleY||0,fh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(En,0,a[En]),h=i1(h),E.svg?_h(t,h,0,b,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==E.zOrigin&&Qi(this,E,"zOrigin",E.zOrigin,m),Qi(this,a,_,qa(c),qa(h)));continue}else if(_==="svgOrigin"){_h(t,h,1,b,0,this);continue}else if(_ in om){a1(this,E,_,d,x?vr(d,x+h):h);continue}else if(_==="smoothOrigin"){Qi(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){l1(this,h,t);continue}}else _ in a||(_=Or(_)||_);if(y||(u||u===0)&&(d||d===0)&&!HE.test(h)&&_ in a)g=(c+"").substr((d+"").length),u||(u=0),m=sn(h)||(_ in Nn.units?Nn.units[_]:g),g!==m&&(d=cs(t,_,c,m)),this._pt=new Sn(this._pt,y?E:a,_,d,(x?vr(d,x+u):u)-d,!y&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?YE:fh),this._pt.u=m||0,y&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=XE):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=WE);else if(_ in a)n1.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,r);else if(_!=="parseTransform"){$h(_,h);continue}y||(_ in a?C.push(_,0,a[_]):typeof t[_]=="function"?C.push(_,2,t[_]()):C.push(_,1,c||t[_])),o.push(_)}}w&&Kp(this)},render:function(t,e){if(e.tween._time||!ru())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ri,aliases:fi,getSetter:function(t,e,n){var i=fi[e];return i&&i.indexOf(",")<0&&(e=i),e in Oi&&e!==En&&(t._gsap.x||Ri(t,"x"))?n&&$d===n?e==="scale"?jE:ZE:($d=n||{})&&(e==="scale"?KE:JE):t.style&&!Xh(t.style[e])?qE:~e.indexOf("-")?$E:nu(t,e)},core:{_removeProperty:ls,_getMatrix:au}};bn.utils.checkPrefix=Or;bn.core.getStyleSaver=nm;(function(s,t,e,n){var i=Mn(s+","+t+","+e,function(r){Oi[r]=1});Mn(t,function(r){Nn.units[r]="deg",om[r]=1}),fi[i[13]]=s+","+t,Mn(n,function(r){var o=r.split(":");fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Nn.units[s]="px"});bn.registerPlugin(cm);var so=bn.registerPlugin(cm)||bn;so.core.Tween;function c1(s,t){const e=.43-.21/(1+Math.exp(-(s-14)/2.2))+.05/(1+Math.exp(-(s-28)/3)),n=(t==null?void 0:t.drag)||1;return e*n}function h1(s,t){const e=(t==null?void 0:t.curveMultiplier)||1;return Math.min(.34*e,.62*s*e)}function u1({BALL_DESIGNS:s,ballConfig:t,debugParams:e,ballStartPosition:n,ballRadius:i,goalWidth:r,goalHeight:o,sizes:a,getBallGroup:l,getGoalGroup:c,flightAnalyticsState:h,recordPhysicsSample:u,updateForceVectors:d,clearTrail:p,renderBirdseye:f,kickPhysics:_}){let g=null,m=null;const x=0,y=2.5;function v(C,M,S,P=0){w(),_.isKicking=!0,p();const I=s[t.design],N=Math.max(0,e.randomness+I.randomnessBonus),H=M,k=(Math.random()-.5)*.3*N,z=1+(Math.random()-.5)*.1*N,W=H+k,Y=Math.min(C*z,2.5),et=(.6+(1-Math.min(Y,1))*.4)/(I.speedRetention||1),st=e.arcHeight*Y*Y*3.5/e.gravity*(I.arcModifier||1),ut=1+Y*2,yt=S*r*1.1*e.curveIntensity*(I.curveMultiplier||1);_.activeCurveForce=yt;const Bt=e.windSpeed,J=60,nt=[],dt=[],lt=[];let At=-1,$t=null;const Ft=r/2,le=.06;let ne=-1;const Ht=I.knuckleIntensity||0,V=Math.abs(S)<.3,xe=Ht>0&&V;let Zt=0,qt=0,wt=0,Lt=0;xe&&(Zt=(Math.random()-.5)*2*Ht*Y*r*.4,qt=(Math.random()-.5)*Ht*Y*.8,wt=.3+Math.random()*.35,Lt=.4+Math.random()*.3);for(let U=0;U<=J;U++){const B=U/J,Q=1-Math.pow(1-B,2);let at=1;if(xe&&B>Lt){const Xt=(B-Lt)/(1-Lt);at=1-.3*Ht*Xt}const mt=n.z+(ut-n.z)*Q*at,Ot=1-B*B*.45;let It=2*(1-B)*B*yt*Ot+B*B*W+Bt*B*B*.5,Rt=i+st*4*B*(1-B)*e.gravity+P*B;if(xe&&B>wt){const Xt=Math.min(1,(B-wt)/.4),te=Xt*Xt*(3-2*Xt);It+=Zt*te,Rt+=qt*te}nt.push(It),dt.push(Math.max(i,Rt)),lt.push(mt),mt>=x-1.5&&ne<0&&(ne=U)}ne<0&&(ne=J);const _t=1/60,R=9.81*e.gravity,T=et/J;function Z(U,B,Q,at,mt,Ot){if(Q<x-i||Q>x+y+i)return null;if(Q>=x-i&&Q<=x+i){const It=Math.abs(U)<Ft-i,Rt=B>i&&B<o-i;if(It&&Rt)return"goal";const Xt=Math.abs(Math.abs(U)-Ft)<le+i&&B<o+i&&B>0,te=Math.abs(B-o)<le+i&&Math.abs(U)<Ft+le;if(Xt||te)return"frame"}if(Q>x&&Q<x+y&&Math.abs(U)<Ft&&B<o&&B>0){const It=Math.abs(Math.abs(U)-Ft)<i,Rt=Math.abs(B-o)<i,Xt=Math.abs(Q-(x+y))<i;if(It)return"side-net";if(Rt)return"top-net";if(Xt)return"back-net"}return null}function rt(U,B){U==="goal"?(B.x*=.1,B.y*=.05,B.z*=.25):U==="frame"?(B.z*=-.35,B.y*=.4,B.x*=.5):U==="side-net"?(B.x*=-.2,B.z*=.3,B.y*=.5):U==="top-net"?(B.y*=-.2,B.x*=.5,B.z*=.3):U==="back-net"&&(B.z*=-.15,B.x*=.3,B.y*=.3)}function ot(U,B,Q,at,mt){let Ot=nt[U],It=dt[U],Rt=lt[U],Xt=!1;const te={x:B,y:Q,z:at};let A=-1;const G=10;for(let $=0;$<mt&&!Xt;$++){const q=A>=0&&$-A>G?R*3:R;if(te.y-=q*_t,A>=0&&$-A<=G&&(te.x*=.5,te.y*=.5,te.z*=.5),Ot+=te.x*_t,It+=te.y*_t,Rt+=te.z*_t,A<0){te.x*=.998,te.z*=.998;const bt=Z(Ot,It,Rt,te.x,te.y,te.z);bt&&(At=U+1+$,$t=bt,rt(bt,te),A=$)}It<=i&&(It=i,Math.abs(te.y)<.5?(te.y=0,te.x*=.9,te.z*=.9,Math.abs(te.x)<.05&&Math.abs(te.z)<.05&&(Xt=!0)):(te.y=Math.abs(te.y)*.3,te.x*=.75,te.z*=.75));const ht=U+1+$;ht<=J?(nt[ht]=Ot,dt[ht]=It,lt[ht]=Rt):(nt.push(Ot),dt.push(It),lt.push(Rt))}}{const U=Math.max(1,ne),B=Math.max(0,U-3),Q=(U-B)*T||T;let at=(nt[U]-nt[B])/Q,mt=(dt[U]-dt[B])/Q,Ot=(lt[U]-lt[B])/Q;ot(U,at,mt,Ot,240)}const tt=nt.length-1,Ct=tt-J,pt=et+Ct*_t,gt=pt/tt,jt=[],ct=[],Mt=[],Pt=[],zt=[],Et=[],Wt=[],Nt=[],ie=[];for(let U=0;U<=tt;U++){const B=Math.max(0,U-1),Q=Math.min(tt,U+1),at=(nt[Q]-nt[B])/((Q-B||1)*gt),mt=(dt[Q]-dt[B])/((Q-B||1)*gt),Ot=(lt[Q]-lt[B])/((Q-B||1)*gt);jt.push(new L(at,mt,Ot));const It=(nt[Q]-2*nt[U]+nt[B])/Math.max(gt*gt,1e-4);ct.push(It);const Rt=Math.sqrt(at*at+mt*mt+Ot*Ot);Mt.push(Rt),Pt.push(dt[U]),zt.push(It),Et.push(Rt*Rt*.003),Wt.push(Math.abs(It)),Nt.push(9.81*e.gravity),ie.push(Math.abs(e.windSpeed)*.35)}h.latestFlightSeries={t:Array.from({length:tt+1},(U,B)=>B/tt),speed:Mt,height:Pt,lateralAccel:zt,heat:{velocity:Mt,drag:Et,magnus:Wt,gravity:Nt,wind:ie}};const X=Mt.reduce((U,B)=>U+B,0)/Mt.length,ft=Math.max(...Mt),K=.22,xt=1.225*ft*K/181e-7,kt=c1(X,I),he=Math.PI*4*Y*e.spinMultiplier/et,ge=Math.abs(he)*(K/2)/Math.max(1,X),Jt=h1(ge,I);u({meanSpeed:X,peakSpeed:ft,avgCd:kt,maxCl:Jt,spinParam:ge,reynolds:xt});const we=-Math.PI*4*Y*e.spinMultiplier,$e=S*Math.PI*2*e.spinMultiplier,wn=W*.5*e.spinMultiplier,Kt=l().rotation.x,Bn=l().rotation.y,ki=l().rotation.z,D={t:0},O=so.timeline({onComplete:()=>{g=null,b()}});g=O;let F=!1;O.to(D,{t:1,duration:pt,ease:"none",onUpdate:()=>{const U=Math.min(Math.floor(D.t*tt),tt),B=l();B.position.x=nt[U],B.position.y=dt[U],B.position.z=lt[U];const Q=Math.min(D.t*(tt/J),1),at=1-Math.pow(1-Q,2);B.rotation.x=Kt+we*at,B.rotation.y=Bn+$e*at,B.rotation.z=ki+wn*at,_.activeVelocityVec.copy(jt[U]),_.activeLateralAccel=ct[U],At>=0&&U>=At&&!F&&(F=!0,E(nt[At],dt[At],$t,Math.sqrt(jt[At].x**2+jt[At].y**2+jt[At].z**2)))}},0)}function E(C,M,S,P){const I=c?c():null;if(!I)return;const N=Math.min(P/9,1.2),H=[];if(I.traverse(z=>{z.isMesh&&z.material.wireframe&&H.push(z)}),H.length===0)return;H.forEach(z=>{const W=z.geometry.attributes.position;z._origNet||(z._origNet=new Float32Array(W.array));const Y=new L(0,0,1);Math.abs(z.rotation.y)>.1?Y.set(1,0,0):Math.abs(z.rotation.x)>.1&&Y.set(0,1,0),z._rippleNormal=Y});const k={t:0};so.to(k,{t:1,duration:2,ease:"none",onUpdate:()=>{H.forEach(z=>{const W=z.geometry.attributes.position,Y=z._origNet,et=z._rippleNormal,st=new L;z.getWorldPosition(st);for(let ut=0;ut<W.count;ut++){const yt=Y[ut*3],Bt=Y[ut*3+1],J=Y[ut*3+2],nt=yt+st.x,dt=Bt+st.y,lt=nt-C,At=dt-M,$t=Math.sqrt(lt*lt+At*At),Ft=Math.exp(-k.t*2.5),le=Math.sin(k.t*8-$t*1.2)*Ft,ne=Math.exp(-$t*.3)*Math.max(0,1-k.t*1.5),Ht=(le*.3+ne*.25)*N;W.setXYZ(ut,yt+et.x*Ht,Bt+et.y*Ht,J+et.z*Ht)}W.needsUpdate=!0})},onComplete:()=>{H.forEach(z=>{const W=z.geometry.attributes.position;W.array.set(z._origNet),W.needsUpdate=!0})}})}function b(){_.isKicking=!1,_.activeCurveForce=0,_.activeLateralAccel=0,_.activeVelocityVec.set(0,0,0),m=so.delayedCall(.8,()=>{m=null;const C={t:0},M=l().position.clone(),S=so.timeline({onComplete:()=>{g=null,f()}});g=S,S.to(C,{t:1,duration:.5,ease:"power2.inOut",onUpdate:()=>{const P=l();P.position.x=M.x+(n.x-M.x)*C.t,P.position.y=M.y+(n.y-M.y)*C.t,P.position.z=M.z+(n.z-M.z)*C.t}},0)})}function w(){g&&(g.kill(),g=null),m&&(m.kill(),m=null),_.isKicking=!1,_.activeCurveForce=0,_.activeLateralAccel=0,_.activeVelocityVec.set(0,0,0),l().position.set(n.x,n.y,n.z)}return{kick:v,cancelKick:w}}const d1={classic:[{name:"Default",colors:{}},{name:"Traditional",primary:"#ffffff",secondary:"#1a1a1a",colors:{0:"#1a1a1a",1:"#1a1a1a",2:"#1a1a1a",3:"#1a1a1a",4:"#1a1a1a",5:"#1a1a1a",6:"#1a1a1a",7:"#1a1a1a",8:"#1a1a1a",9:"#1a1a1a",10:"#1a1a1a",11:"#1a1a1a"}},{name:"Telstar",primary:"#f5f2ea",secondary:"#1a1a1a",colors:{0:"#111111",1:"#111111",2:"#111111",3:"#111111",4:"#111111",5:"#111111",6:"#111111",7:"#111111",8:"#111111",9:"#111111",10:"#111111",11:"#111111",12:"#f5f2ea",13:"#f5f2ea",14:"#f5f2ea",15:"#f5f2ea",16:"#f5f2ea",17:"#f5f2ea",18:"#f5f2ea",19:"#f5f2ea",20:"#f5f2ea",21:"#f5f2ea",22:"#f5f2ea",23:"#f5f2ea",24:"#f5f2ea",25:"#f5f2ea",26:"#f5f2ea",27:"#f5f2ea",28:"#f5f2ea",29:"#f5f2ea",30:"#f5f2ea",31:"#f5f2ea"}},{name:"Tango",primary:"#f5f0e8",secondary:"#2a2a2a",colors:{0:"#2a2a2a",1:"#2a2a2a",2:"#2a2a2a",3:"#2a2a2a",4:"#2a2a2a",5:"#2a2a2a",6:"#2a2a2a",7:"#2a2a2a",8:"#2a2a2a",9:"#2a2a2a",10:"#2a2a2a",11:"#2a2a2a",12:"#d4c8b0",13:"#f5f0e8",14:"#d4c8b0",15:"#f5f0e8",16:"#d4c8b0",17:"#f5f0e8",18:"#d4c8b0",19:"#f5f0e8",20:"#d4c8b0",21:"#f5f0e8",22:"#d4c8b0",23:"#f5f0e8",24:"#d4c8b0",25:"#f5f0e8",26:"#d4c8b0",27:"#f5f0e8",28:"#d4c8b0",29:"#f5f0e8",30:"#d4c8b0",31:"#f5f0e8"}},{name:"Neon",primary:"#0a0a0a",secondary:"#00ffaa",colors:{0:"#00ffaa",1:"#00ff66",2:"#00ffaa",3:"#00ff66",4:"#00ffaa",5:"#00ff66",6:"#00ffaa",7:"#00ff66",8:"#00ffaa",9:"#00ff66",10:"#00ffaa",11:"#00ff66"}}],brazuca:[{name:"Default",colors:{}},{name:"WC 2014",primary:"#f5f0ea",secondary:"#1a1a1a",colors:{0:"#e84420",1:"#1a6633",2:"#f5f0ea",3:"#2244aa",4:"#e84420",5:"#1a6633"}},{name:"Final Rio",primary:"#f0ece0",secondary:"#8b7340",colors:{0:"#c8a84a",1:"#1a1a1a",2:"#c8a84a",3:"#1a1a1a",4:"#c8a84a",5:"#1a1a1a"}},{name:"Winter",primary:"#e8e8ee",secondary:"#334455",colors:{0:"#cc3322",1:"#334455",2:"#e8e8ee",3:"#cc3322",4:"#334455",5:"#e8e8ee"}},{name:"Ember",primary:"#1a0800",secondary:"#ff4400",colors:{0:"#ff2200",1:"#ff6600",2:"#ffaa00",3:"#ff2200",4:"#ff6600",5:"#ffaa00"}},{name:"Deep Sea",primary:"#001828",secondary:"#006688",colors:{0:"#003355",1:"#005577",2:"#007799",3:"#0099bb",4:"#00bbcc",5:"#44ddee"}}],jabulani:[{name:"Default",colors:{}},{name:"WC 2010",primary:"#f5f2ea",secondary:"#333333",colors:{0:"#d4a020",1:"#228833",2:"#cc2233",3:"#1a4488",4:"#f5f2ea",5:"#f5f2ea",6:"#f5f2ea",7:"#f5f2ea"}},{name:"Jo'burg Gold",primary:"#f0ece0",secondary:"#8b7340",colors:{0:"#c8a030",1:"#c8a030",2:"#c8a030",3:"#c8a030",4:"#f0ece0",5:"#f0ece0",6:"#f0ece0",7:"#f0ece0"}},{name:"Angola",primary:"#f5f2ea",secondary:"#444444",colors:{0:"#cc3322",1:"#1a1a1a",2:"#cc3322",3:"#1a1a1a",4:"#f5f2ea",5:"#f5f2ea",6:"#f5f2ea",7:"#f5f2ea"}},{name:"Vuvuzela",primary:"#f0ece0",secondary:"#333333",colors:{0:"#dd6622",1:"#22aa55",2:"#dd6622",3:"#22aa55",4:"#ffcc00",5:"#ffcc00",6:"#ffcc00",7:"#ffcc00"}},{name:"Eclipse",primary:"#0e0e1e",secondary:"#333355",colors:{0:"#6622cc",1:"#cc2266",2:"#2266cc",3:"#22cc66",4:"#0e0e1e",5:"#0e0e1e",6:"#0e0e1e",7:"#0e0e1e"}}],trionda:[{name:"Default",colors:{}},{name:"WC 2026",primary:"#f0ece4",secondary:"#222222",colors:{0:"#cc2233",1:"#22884a",2:"#2255aa",3:"#6a2244"}},{name:"USA",primary:"#f0ece4",secondary:"#1a2a5a",colors:{0:"#bb2233",1:"#f0ece4",2:"#1a2a5a",3:"#bb2233"}},{name:"Mexico",primary:"#f0ece4",secondary:"#1a4a2a",colors:{0:"#006847",1:"#f0ece4",2:"#ce1126",3:"#006847"}},{name:"Canada",primary:"#f0ece4",secondary:"#cc2233",colors:{0:"#cc2233",1:"#f0ece4",2:"#cc2233",3:"#f0ece4"}},{name:"Midnight",primary:"#111118",secondary:"#2a2a3a",colors:{0:"#1a1a2a",1:"#2a2a3a",2:"#1a1a2a",3:"#2a2a3a"}},{name:"Carnival",primary:"#fff5f0",secondary:"#333333",colors:{0:"#ff4466",1:"#44ccff",2:"#ffcc22",3:"#44ff88"}}]},sf={classic:[[0,1,2,3,4,5,6,7,8,9,10,11],[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]],jabulani:[[0,1,2,3],[4,5,6,7]],brazuca:[[0,1,2,3,4,5]],trionda:[[0,1,2,3]]};function f1({ballConfig:s,updateBall:t,selectPanel:e,invalidateCanvases:n,syncExternalBalls:i}){let r="select",o=!1,a="#cc2233";function l(){return d1[s.design]||[]}function c(I){const H=(sf[s.design]||[]).find(k=>k.includes(I));return H?H.filter(k=>k!==I):[]}function h(I){if(I!=null){if(o){const H=(sf[s.design]||[]).find(k=>k.includes(I));H?(H.forEach(k=>Qr(s.design,k,a)),n&&n(H)):(Qr(s.design,I,a),n&&n(I))}else Qr(s.design,I,a),n&&n(I);t(),i&&i()}}function u(I){return r==="fill"?(h(I),!0):!1}function d(){return a}function p(){return r}function f(){var I;return parseInt(((I=document.getElementById("tb-brush-size"))==null?void 0:I.value)||"12")}function _(){document.querySelectorAll(".tb-dropdown").forEach(I=>I.classList.remove("open"))}function g(I){const N=document.getElementById(I);if(!N)return;const H=N.classList.contains("open");_(),H||N.classList.add("open")}document.addEventListener("click",I=>{!I.target.closest(".tb-dropdown")&&!I.target.closest('[id$="-toggle"]')&&_()});function m(){const I=document.getElementById("tb-pattern-list");if(!I)return;I.innerHTML="",l().forEach((H,k)=>{const z=document.createElement("button");z.className="tb-pattern",z.dataset.patternIndex=k;const W=document.createElement("div");W.className="tb-pattern-dots";const Y=Object.values(H.colors).slice(0,5);Y.length===0&&Y.push(s.primaryColor,s.secondaryColor),Y.forEach(st=>{const ut=document.createElement("div");ut.className="tb-pattern-dot",ut.style.background=st,W.appendChild(ut)}),z.appendChild(W);const et=document.createElement("span");et.className="tb-pattern-name",et.textContent=H.name,z.appendChild(et),z.addEventListener("click",()=>x(k)),I.appendChild(z)})}function x(I){const H=l()[I];if(H){n&&n("all"),eh(s.design),H.primary&&(s.primaryColor=H.primary,document.querySelectorAll("#primary-color, #primary-color-detail").forEach(k=>k.value=H.primary)),H.secondary&&(s.secondaryColor=H.secondary,document.querySelectorAll("#secondary-color, #secondary-color-detail").forEach(k=>k.value=H.secondary));for(const[k,z]of Object.entries(H.colors))Qr(s.design,parseInt(k),z);document.querySelectorAll(".tb-pattern").forEach(k=>{k.classList.toggle("active",parseInt(k.dataset.patternIndex)===I)}),e(null),t(),i&&i(),_()}}function y(){document.querySelector('.tb-btn[data-tool="mirror"]'),document.querySelectorAll(".tb-btn[data-tool]").forEach(I=>{I.addEventListener("click",()=>{if(I.dataset.tool==="mirror"){o=!o,I.classList.toggle("active",o);return}r=I.dataset.tool,document.querySelectorAll(".tb-btn[data-tool]").forEach(k=>{k.dataset.tool!=="mirror"&&k.classList.toggle("active",k.dataset.tool===r)});const N=document.getElementById("tb-brush-controls"),H=document.getElementById("tb-shape-controls");N&&(N.style.display=r==="brush"?"":"none"),H&&(H.style.display=r==="shape"?"":"none")})}),document.querySelectorAll(".tb-shape-opt").forEach(I=>{I.addEventListener("click",()=>{document.querySelectorAll(".tb-shape-opt").forEach(N=>N.classList.toggle("active",N===I)),v=I.dataset.shape})})}let v="star";function E(){var I,N,H;(I=document.getElementById("tb-swatch-toggle"))==null||I.addEventListener("click",k=>{k.stopPropagation(),g("tb-swatch-dropdown")}),(N=document.getElementById("tb-pattern-toggle"))==null||N.addEventListener("click",k=>{k.stopPropagation(),g("tb-pattern-dropdown")}),(H=document.getElementById("tb-explode-toggle"))==null||H.addEventListener("click",k=>{k.stopPropagation();const z=document.getElementById("tb-explode-slider");z&&z.classList.toggle("open")}),document.addEventListener("click",k=>{var z;!k.target.closest("#tb-explode-slider")&&!k.target.closest("#tb-explode-toggle")&&((z=document.getElementById("tb-explode-slider"))==null||z.classList.remove("open"))})}function b(){const I=document.getElementById("tb-paint-color");document.querySelectorAll(".tb-swatch").forEach(N=>{N.addEventListener("click",()=>{a=N.dataset.color,I&&(I.value=a),_()})}),I==null||I.addEventListener("input",()=>{a=I.value})}function w(){var I;(I=document.getElementById("studio-reset-btn"))==null||I.addEventListener("click",()=>{eh(s.design),n&&n("all"),document.querySelectorAll(".tb-pattern").forEach(N=>N.classList.remove("active")),e(null),t(),i&&i()})}function C(){y(),E(),b(),w(),m()}function M(){var I;return parseInt(((I=document.getElementById("tb-shape-size"))==null?void 0:I.value)||"25")}function S(){return v}function P(){return o}return{init:C,getActiveTool:p,handlePanelClick:u,renderPatterns:m,getActiveColor:d,getBrushSize:f,getShapeSize:M,getActiveShape:S,isMirrorMode:P,getSymmetryPeers:c}}function p1({mainScene:s,ballConfig:t,ballRadius:e,previewRadius:n,getBallGroup:i,setBallGroup:r,buildMainBall:o,onBallChanged:a,cancelKick:l}){var Bn,ki;const c=document.getElementById("panel-customizer"),h=document.getElementById("zoom-state-label"),u=document.getElementById("panel-color-btn"),d=document.getElementById("panel-color-input"),p=document.getElementById("panel-reset-btn"),f={custViewMode:"ball",custExplodeFactor:0,custExplodePanels:[],ballCamDistance:1.7,ballCamDirection:new L(0,0,1),selectedPanelIndex:null,hoveredPanelIndex:null,cameraAnimTarget:null,cameraAnimTargetSpherical:null,flatPanTarget:null},_=document.querySelector("canvas.customizer-preview"),g=document.querySelector(".customizer-viewport"),m=new Ph;m.background=new Vt("#0a0a0a");const x=new zh(16777215,1.5);m.add(x);const y=new Pr(16777215,2.5);y.position.set(3,4,5),m.add(y);const v=new Pr(16777215,.8);v.position.set(-3,2,-3),m.add(v);let E=null;const b=new Wf,w=new Tt;function C(){const D=ka(t,n),O=D.group;return f.custExplodePanels=D.panels,uo(f.custExplodePanels,f.custExplodeFactor),f.custExplodeFactor===0&&Ba(O,t,n),O}E=C(),m.add(E);const M=window.innerWidth<=768?512:1024,S=new Map;let P=new Map;S.set(t.design,P);function I(D){S.has(D)||S.set(D,new Map),P=S.get(D)}const N=[],H=[],k=30;function z(D){const O=P.get(D);return O?{panelIndex:D,imageData:O.ctx.getImageData(0,0,M,M)}:null}function W(D){const O=Array.isArray(D)?D:[D],F=[];for(const U of O){const B=z(U);B&&F.push(B)}F.length!==0&&(N.push(F),N.length>k&&N.shift(),H.length=0)}function Y(){if(N.length===0)return;const D=N.pop(),O=[];for(const F of D){const U=z(F.panelIndex);U&&O.push(U);const B=P.get(F.panelIndex);B&&(B.ctx.putImageData(F.imageData,0,0),B.texture.needsUpdate=!0)}O.length>0&&H.push(O)}function et(){if(H.length===0)return;const D=H.pop(),O=[];for(const F of D){const U=z(F.panelIndex);U&&O.push(U);const B=P.get(F.panelIndex);B&&(B.ctx.putImageData(F.imageData,0,0),B.texture.needsUpdate=!0)}O.length>0&&N.push(O)}const st=new Map;let ut=!1,yt=-1;const Bt=new Map;let J=[];function nt(D,O,F){const U=D.geometry.attributes.position,B=new Float32Array(U.count*2),Q=Math.abs(O.y)<.9?new L(0,1,0):new L(1,0,0),at=new L().crossVectors(Q,O).normalize(),mt=new L().crossVectors(O,at).normalize();let Ot=1/0,It=-1/0,Rt=1/0,Xt=-1/0;for(let G=0;G<U.count;G++){const $=new L(U.getX(G),U.getY(G),U.getZ(G)).normalize(),j=$.dot(at),q=$.dot(mt);B[G*2]=j,B[G*2+1]=q,j<Ot&&(Ot=j),j>It&&(It=j),q<Rt&&(Rt=q),q>Xt&&(Xt=q)}const te=It-Ot||1,A=Xt-Rt||1;for(let G=0;G<U.count;G++)B[G*2]=(B[G*2]-Ot)/te,B[G*2+1]=(B[G*2+1]-Rt)/A;D.geometry.setAttribute("uv",new ue(B,2)),st.set(F,{ux:at,uy:mt,minU:Ot,maxU:It,minV:Rt,maxV:Xt})}function dt(D,O){const F=st.get(O);if(!F)return null;const U=D.clone().normalize(),B=U.dot(F.ux),Q=U.dot(F.uy),at=F.maxU-F.minU||1,mt=F.maxV-F.minV||1;return{x:(B-F.minU)/at,y:(Q-F.minV)/mt}}function lt(D){const O=di(t.design,D);return O||(t.design==="classic"&&D<12?t.secondaryColor:t.primaryColor)}function At(D){const O=lt(D),F=P.get(D);if(F)return!F.painted&&F.baseColor!==O&&(F.ctx.fillStyle=O,F.ctx.fillRect(0,0,M,M),F.baseColor=O,F.texture.needsUpdate=!0),F;const U=document.createElement("canvas");U.width=M,U.height=M;const B=U.getContext("2d",{willReadFrequently:!0});B.fillStyle=O,B.fillRect(0,0,M,M);const Q=new $c(U);Q.colorSpace=_n,Q.minFilter=Zi,Q.magFilter=ii,Q.anisotropy=8;const at={canvas:U,ctx:B,texture:Q,baseColor:O,painted:!1};return P.set(D,at),at}function $t(D){if(D==="all")P.clear();else if(Array.isArray(D))for(const O of D)P.delete(O);else D!=null&&P.delete(D)}function Ft(){if(E)if(f.custViewMode==="flat")for(const D of E.children){if(!D.isMesh||D.userData.panelIndex==null)continue;const O=D.userData.panelIndex,F=D.geometry.attributes.uv;if(!F)continue;let U=1/0,B=-1/0,Q=1/0,at=-1/0;for(let Rt=0;Rt<F.count;Rt++){const Xt=F.getX(Rt),te=F.getY(Rt);Xt<U&&(U=Xt),Xt>B&&(B=Xt),te<Q&&(Q=te),te>at&&(at=te)}const mt=B-U||1,Ot=at-Q||1;for(let Rt=0;Rt<F.count;Rt++)F.setXY(Rt,(F.getX(Rt)-U)/mt,(F.getY(Rt)-Q)/Ot);F.needsUpdate=!0;const It=At(O);D.material.dispose(),D.material=new Un({map:It.texture,side:He}),D.userData._brushTex=It.texture,D.userData._brushCtx=It.ctx}else{st.clear();for(let D=0;D<f.custExplodePanels.length;D++){const O=f.custExplodePanels[D],F=O.mesh;if(!F||!F.isGroup)continue;const U=F.children[0];if(!U||!U.isMesh)continue;const B=F.userData.panelIndex;if(B==null)continue;nt(U,O.centroidDir,B);const Q=At(B);U.material.dispose(),U.material=new xn({map:Q.texture,emissiveMap:Q.texture,color:16777215,emissive:16777215,emissiveIntensity:.15,side:He}),U.userData._brushTex=Q.texture,U.userData._brushCtx=Q.ctx}for(const D of E.children){if(!D.isMesh||D.userData.stitchPanelIndex==null)continue;const O=D.userData.stitchPanelIndex,F=f.custExplodePanels[O];if(!(F!=null&&F.centroidDir))continue;const U=P.get(O);U&&(nt(D,F.centroidDir,O),D.material.dispose(),D.material=new xn({map:U.texture,emissiveMap:U.texture,color:16777215,emissive:16777215,emissiveIntensity:.15,side:He}))}}}function le(D){var Q,at;const O=_.getBoundingClientRect();if(w.x=(D.clientX-O.left)/O.width*2-1,w.y=-((D.clientY-O.top)/O.height)*2+1,b.setFromCamera(w,Lt),f.custViewMode==="flat"){const mt=[];if(E)for(const It of E.children)It.isMesh&&It.userData.panelIndex!=null&&mt.push(It);const Ot=b.intersectObjects(mt,!1);return Ot.length>0&&Ot[0].uv?{mesh:Ot[0].object,uv:Ot[0].uv,panelIndex:Ot[0].object.userData.panelIndex,point:Ot[0].point}:null}if(f.custExplodeFactor===0&&t.design==="classic"){const mt=Mt();if(!mt)return null;const Ot=E.worldToLocal(mt.clone()).normalize(),It=zt();if(It==null)return null;const Rt=dt(Ot,It);if(!Rt)return null;const Xt=f.custExplodePanels[It];return{mesh:(at=(Q=Xt==null?void 0:Xt.mesh)==null?void 0:Q.children)==null?void 0:at[0],uv:Rt,panelIndex:It,point:mt}}const F=ct(),U=Lt.position.clone().sub(F).normalize(),B=b.intersectObjects(tt(),!1);for(const mt of B){if(mt.point.clone().sub(F).normalize().dot(U)<=0)continue;const It=ot(mt.object);if(It==null)continue;if(mt.uv)return{mesh:mt.object,uv:mt.uv,panelIndex:It,point:mt.point};const Rt=E.worldToLocal(mt.point.clone()).normalize(),Xt=dt(Rt,It);if(Xt)return{mesh:mt.object,uv:Xt,panelIndex:It,point:mt.point}}return null}function ne(D,O,F,U){const B=P.get(D);if(!B)return;B.painted=!0;const{ctx:Q,texture:at}=B,mt=O.x*M,Ot=(1-O.y)*M,It=F*2;Q.save(),Q.fillStyle=U,Q.beginPath(),Q.arc(mt,Ot,It,0,Math.PI*2),Q.fill(),Q.restore(),at.needsUpdate=!0}function Ht(D,O,F,U){Bt.has(D)||Bt.set(D,[]);const B=Bt.get(D);if(B.push(O),B.length<2){ne(D,O,F,U);return}const Q=B.length,at=B[Math.max(0,Q-4)],mt=B[Math.max(0,Q-3)],Ot=B[Q-2],It=B[Q-1],Rt=(It.x-Ot.x)*M,Xt=(It.y-Ot.y)*M,te=Math.sqrt(Rt*Rt+Xt*Xt),A=Math.min(8,Math.max(1,Math.ceil(te/(F*.8))));for(let G=1;G<=A;G++){const $=G/A,j=$*$,q=j*$,ht={x:.5*(2*mt.x+(-at.x+Ot.x)*$+(2*at.x-5*mt.x+4*Ot.x-It.x)*j+(-at.x+3*mt.x-3*Ot.x+It.x)*q),y:.5*(2*mt.y+(-at.y+Ot.y)*$+(2*at.y-5*mt.y+4*Ot.y-It.y)*j+(-at.y+3*mt.y-3*Ot.y+It.y)*q)};ne(D,ht,F,U)}}const V={star:(D,O,F,U)=>{D.beginPath();for(let Q=0;Q<10;Q++){const at=Q*Math.PI/5-Math.PI/2,mt=Q%2===0?U:U*.4;Q===0?D.moveTo(O+Math.cos(at)*mt,F+Math.sin(at)*mt):D.lineTo(O+Math.cos(at)*mt,F+Math.sin(at)*mt)}D.closePath()},circle:(D,O,F,U)=>{D.beginPath(),D.arc(O,F,U,0,Math.PI*2)},diamond:(D,O,F,U)=>{D.beginPath(),D.moveTo(O,F-U),D.lineTo(O+U*.7,F),D.lineTo(O,F+U),D.lineTo(O-U*.7,F),D.closePath()},hexagon:(D,O,F,U)=>{D.beginPath();for(let B=0;B<6;B++){const Q=B*Math.PI/3-Math.PI/6,at=O+Math.cos(Q)*U,mt=F+Math.sin(Q)*U;B===0?D.moveTo(at,mt):D.lineTo(at,mt)}D.closePath()},pentagon:(D,O,F,U)=>{D.beginPath();for(let B=0;B<5;B++){const Q=B*2*Math.PI/5-Math.PI/2,at=O+Math.cos(Q)*U,mt=F+Math.sin(Q)*U;B===0?D.moveTo(at,mt):D.lineTo(at,mt)}D.closePath()},triangle:(D,O,F,U)=>{D.beginPath();for(let B=0;B<3;B++){const Q=B*2*Math.PI/3-Math.PI/2;B===0?D.moveTo(O+Math.cos(Q)*U,F+Math.sin(Q)*U):D.lineTo(O+Math.cos(Q)*U,F+Math.sin(Q)*U)}D.closePath()},mapleLeaf:(D,O,F,U)=>{const B=U/18;D.save(),D.translate(O,F),D.scale(B,B),D.beginPath(),D.moveTo(0,-18),D.lineTo(1.5,-12),D.lineTo(7,-13),D.lineTo(5,-7),D.lineTo(13,-4),D.lineTo(8,-1),D.lineTo(10,6),D.lineTo(5,4),D.lineTo(2.5,11),D.lineTo(0,7),D.lineTo(-2.5,11),D.lineTo(-5,4),D.lineTo(-10,6),D.lineTo(-8,-1),D.lineTo(-13,-4),D.lineTo(-5,-7),D.lineTo(-7,-13),D.lineTo(-1.5,-12),D.closePath(),D.restore()},brazuca:(D,O,F,U)=>{D.beginPath(),D.moveTo(O-U*.8,F-U*.5),D.bezierCurveTo(O-U*.3,F-U*.9,O+U*.3,F+U*.1,O+U*.8,F-U*.5),D.bezierCurveTo(O+U*.9,F+U*.1,O+U*.3,F+U*.9,O+U*.8,F+U*.5),D.bezierCurveTo(O+U*.3,F+U*.9,O-U*.3,F-U*.1,O-U*.8,F+U*.5),D.bezierCurveTo(O-U*.9,F-U*.1,O-U*.3,F-U*.9,O-U*.8,F-U*.5),D.closePath()},jabulani:(D,O,F,U)=>{D.beginPath(),D.moveTo(O,F-U),D.bezierCurveTo(O+U*.6,F-U*.8,O+U,F-U*.2,O+U*.7,F+U*.5),D.bezierCurveTo(O+U*.4,F+U,O-U*.4,F+U,O-U*.7,F+U*.5),D.bezierCurveTo(O-U,F-U*.2,O-U*.6,F-U*.8,O,F-U),D.closePath()}};function xe(D,O,F,U,B){const Q=P.get(D);if(!Q)return;Q.painted=!0;const{ctx:at,texture:mt}=Q,Ot=O.x*M,It=(1-O.y)*M,Rt=F*2,Xt=V[B];Xt&&(at.save(),at.fillStyle=U,Xt(at,Ot,It,Rt),at.fill(),at.restore(),mt.needsUpdate=!0)}function Zt(D){const O=document.createElement("canvas");O.width=D.canvas.width,O.height=D.canvas.height,O.getContext("2d").drawImage(D.canvas,0,0);const F=new $c(O);return F.colorSpace=_n,F}function qt(D){if(!(!f.custExplodePanels||f.custExplodePanels.length===0))for(const O of D.children){if(O.isGroup&&O.userData.panelIndex!=null){const F=O.userData.panelIndex,U=O.children[0];if(!U||!U.isMesh)continue;const B=P.get(F);if(!B)continue;const Q=f.custExplodePanels[F];if(!(Q!=null&&Q.centroidDir))continue;nt(U,Q.centroidDir,F);const at=Zt(B);U.material.dispose(),U.material=new xn({map:at,emissiveMap:at,color:16777215,emissive:16777215,emissiveIntensity:.15,side:He})}if(O.isMesh&&O.userData.stitchPanelIndex!=null){const F=O.userData.stitchPanelIndex,U=f.custExplodePanels[F];if(!(U!=null&&U.centroidDir))continue;const B=P.get(F);if(!B)continue;nt(O,U.centroidDir,F);const Q=Zt(B);O.material.dispose(),O.material=new xn({map:Q,emissiveMap:Q,color:16777215,emissive:16777215,emissiveIntensity:.15,side:He})}}}function wt(){const D=i().position.clone(),O=i().rotation.clone();s.remove(i());const F=o();qt(F),F.position.copy(D),F.rotation.copy(O),s.add(F),r(F),a&&a()}const Lt=new hn(40,g.clientWidth/(g.clientHeight||1),.1,50);Lt.position.set(0,0,f.ballCamDistance),Lt.lookAt(0,0,0);const _t=new il({canvas:_,antialias:!0});_t.setSize(g.clientWidth,g.clientHeight),_t.setPixelRatio(Math.min(window.devicePixelRatio,2));const R=new Kf(Lt,_);R.enableDamping=!0,R.enablePan=!1,R.autoRotate=!0,R.autoRotateSpeed=5,R.minDistance=.6,R.maxDistance=3;function T(){const D=Lt.position.length();D<1e-4||(f.ballCamDistance=D,f.ballCamDirection.copy(Lt.position).normalize())}function Z(){const O=4.4+f.custExplodeFactor*4.2,F=Math.min(O,Math.max(.9,f.ballCamDistance));f.ballCamDistance=F,f.ballCamDirection.lengthSq()<1e-6&&f.ballCamDirection.set(0,0,1),Lt.position.copy(f.ballCamDirection).multiplyScalar(F),Lt.lookAt(0,0,0)}{let D=!1,O=0;_.addEventListener("mousedown",F=>{if(f.custViewMode!=="flat")return;const U=Kt==null?void 0:Kt.getActiveTool();U==="brush"||U==="shape"||(D=!0,O=F.clientX,F.clientY,F.stopPropagation())}),window.addEventListener("mousemove",F=>{if(!D||ut||f.custViewMode!=="flat"||!E)return;const U=F.clientX-O;O=F.clientX,F.clientY,E.rotation.z+=U*.01}),window.addEventListener("mouseup",()=>{D=!1}),_.addEventListener("touchstart",F=>{if(f.custViewMode!=="flat"||F.touches.length!==1)return;const U=Kt==null?void 0:Kt.getActiveTool();U==="brush"||U==="shape"||(D=!0,O=F.touches[0].clientX,F.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",F=>{if(!D||f.custViewMode!=="flat"||!E||F.touches.length!==1)return;const U=F.touches[0].clientX-O;E.rotation.z+=U*.01,O=F.touches[0].clientX,F.touches[0].clientY},{passive:!0}),window.addEventListener("touchend",()=>{D=!1})}new ResizeObserver(()=>{const D=g.clientWidth,O=g.clientHeight;D===0||O===0||(Lt.aspect=D/O,Lt.updateProjectionMatrix(),_t.setSize(D,O),_t.setPixelRatio(Math.min(window.devicePixelRatio,2)))}).observe(g);function ot(D){let O=D;for(;O;){if(O.userData.panelIndex!=null)return O.userData.panelIndex;O=O.parent}return null}function tt(){const D=[];if(!E)return D;for(const O of E.children)if(O.userData.panelIndex!=null){if(O.isMesh)D.push(O);else if(O.isGroup)for(const F of O.children)F.isMesh&&D.push(F)}return D}const Ct=.45,pt=new Vt("#4488cc");function gt(D,O){if(!(D==null||D===f.selectedPanelIndex)){if(f.custViewMode==="flat"){for(const F of E.children)if(F.userData.panelIndex===D&&F.isMesh)if(O){F._savedHoverColor==null&&(F._savedHoverColor=F.material.color.getHex());const U=new Vt(F._savedHoverColor);U.lerp(pt,.3),F.material.color.set(U)}else F._savedHoverColor!=null&&(F.material.color.setHex(F._savedHoverColor),delete F._savedHoverColor)}else for(const F of E.children)if(F.userData.panelIndex===D&&F.isGroup){const U=F.children[0];if(!U||!U.material)continue;if(O){U._savedHoverColor==null&&(U._savedHoverColor=U.material.color.getHex());const B=new Vt(U._savedHoverColor);B.lerp(pt,.3),U.material.color.set(B)}else U._savedHoverColor!=null&&(U.material.color.setHex(U._savedHoverColor),delete U._savedHoverColor)}}}function jt(D,O){if(D!=null){if(f.custViewMode==="flat")for(const F of E.children){if(F.userData.panelIndex===D&&F.isMesh)if(O){F._selectSavedColor=F.material.color.getHex();const U=new Vt(F._selectSavedColor);U.lerp(new Vt("#ffffff"),.25),F.material.color.set(U)}else F._selectSavedColor!=null&&(F.material.color.setHex(F._selectSavedColor),delete F._selectSavedColor);F.userData.panelIndex===D&&F.isLine&&(O?(F._ownMaterial||(F._ownMaterial=F.material.clone(),F.material=F._ownMaterial),F._selectSavedColor=F.material.color.getHex(),F.material.color.set("#ffffff")):F._selectSavedColor!=null&&(F.material.color.setHex(F._selectSavedColor),delete F._selectSavedColor))}else for(const F of E.children)if(F.userData.panelIndex===D&&F.isGroup){const U=F.children[0],B=F.children[1];U&&U.material&&(O?(U._selectSavedEmissiveIntensity=U.material.emissiveIntensity,U.material.emissiveIntensity=Ct):U._selectSavedEmissiveIntensity!=null&&(U.material.emissiveIntensity=U._selectSavedEmissiveIntensity,delete U._selectSavedEmissiveIntensity)),B&&B.material&&(O?(B._ownMaterial||(B._ownMaterial=B.material.clone(),B.material=B._ownMaterial),B._selectSavedColor=B.material.color.getHex(),B.material.color.set("#ffffff")):B._selectSavedColor!=null&&(B.material.color.setHex(B._selectSavedColor),delete B._selectSavedColor))}}}function ct(){const D=new L;return E.updateMatrixWorld(!0),E.getWorldPosition(D),D}function Mt(){const D=new L;return b.ray.intersectSphere(new Ws(ct(),n),D)?D:null}function Pt(D,O){const F=O==null?void 0:O.boundaryDirs;if(!F||F.length<3)return-1/0;let U=1/0;for(let B=0;B<F.length;B++){const Q=F[B],at=F[(B+1)%F.length],mt=new L().crossVectors(Q,at),Ot=mt.dot(O.centroidDir);if(Math.abs(Ot)<1e-8)continue;const It=mt.dot(D)*Math.sign(Ot);if(It<U&&(U=It),It<-1e-4)return It}return U}function zt(){const D=Mt();if(!D)return null;const O=E.worldToLocal(D.clone()).normalize();let F=null,U=-1/0;for(let B=0;B<f.custExplodePanels.length;B++){const Q=Pt(O,f.custExplodePanels[B]);Q>U&&Q>=-1e-4&&(F=B,U=Q)}return F}function Et(D){return D.centroidDir.clone().normalize().multiplyScalar(f.ballCamDistance)}function Wt(D){if(D!=null){if(f.custViewMode==="flat")for(const O of E.children)O.userData.panelIndex===D&&O.isMesh&&O._savedHoverColor!=null&&(O.material.color.setHex(O._savedHoverColor),delete O._savedHoverColor);else for(const O of E.children)if(O.userData.panelIndex===D&&O.isGroup){const F=O.children[0];(F==null?void 0:F._savedHoverColor)!=null&&(F.material.color.setHex(F._savedHoverColor),delete F._savedHoverColor)}}}function Nt(D){const O=f.selectedPanelIndex;if(f.hoveredPanelIndex!=null&&(Wt(f.hoveredPanelIndex),f.hoveredPanelIndex=null),f.selectedPanelIndex!=null&&jt(f.selectedPanelIndex,!1),f.selectedPanelIndex=D,D!=null){jt(D,!0),u.style.display="";const F=di(t.design,D);let U;if(F?U=F:U=t.design==="classic"&&D<12?t.secondaryColor:t.primaryColor,d.value=U,u.style.backgroundColor=U,f.custViewMode==="flat"){for(const B of E.children)if(B.userData.panelIndex===D&&B.isMesh&&B.geometry){B.geometry.computeBoundingBox();const Q=B.geometry.boundingBox,at=(Q.min.x+Q.max.x)/2,mt=(Q.min.y+Q.max.y)/2;f.flatPanTarget=new L(at,mt,0);break}}else{R.autoRotate=!1;const B=f.custExplodePanels[D];B&&(f.cameraAnimTarget=O!=null&&O!==D?Et(B):B.centroidDir.clone().multiplyScalar(f.ballCamDistance),f.cameraAnimTargetSpherical=new za().setFromVector3(f.cameraAnimTarget.clone()))}}else u.style.display="none",f.custViewMode!=="flat"&&(R.autoRotate=!0,f.cameraAnimTarget=null,f.cameraAnimTargetSpherical=null)}function ie(){p.style.display=eS(t.design)?"":"none"}let X=null,ft=null;function K(D){const O=_.getBoundingClientRect();w.x=(D.clientX-O.left)/O.width*2-1,w.y=-((D.clientY-O.top)/O.height)*2+1,b.setFromCamera(w,Lt);const F=ct(),B=F.clone().sub(b.ray.origin).dot(b.ray.direction),at=b.ray.origin.clone().add(b.ray.direction.clone().multiplyScalar(B)).distanceTo(F),mt=f.custViewMode==="flat"?1/0:n*1.15;if(at>mt)return null;if(f.custViewMode!=="flat"&&f.custExplodeFactor===0&&t.design==="classic"){const Rt=zt();return Rt??null}const Ot=Lt.position.clone().sub(F).normalize(),It=b.intersectObjects(tt(),!1);for(const Rt of It){if(f.custViewMode!=="flat"&&Rt.point.clone().sub(F).normalize().dot(Ot)<=0)continue;const Xt=ot(Rt.object);if(Xt!=null)return Xt}return null}_.addEventListener("pointerdown",D=>{const O=Kt==null?void 0:Kt.getActiveTool();(O==="brush"||O==="shape")&&f.custViewMode==="flat"&&(R.enablePan=!1,R.enableRotate=!1)},!0),_.addEventListener("pointerdown",D=>{const O=Kt==null?void 0:Kt.getActiveTool(),F=Kt==null?void 0:Kt.isMirrorMode();if(O==="brush"){ut=!0,Bt.clear(),R.enabled=!1,_.style.cursor="crosshair";const U=le(D);if(yt=U?U.panelIndex:-1,U){const B=[U.panelIndex];F&&B.push(...Kt.getSymmetryPeers(U.panelIndex)),W(B);const Q=Kt.getBrushSize(),at=Kt.getActiveColor();Ht(U.panelIndex,U.uv,Q,at),F&&(J=[{uv:U.uv,size:Q,color:at}])}D.stopImmediatePropagation();return}if(O==="shape"){const U=le(D);if(U){const B=[U.panelIndex];F&&B.push(...Kt.getSymmetryPeers(U.panelIndex)),W(B);const Q=Kt.getShapeSize(),at=Kt.getActiveColor(),mt=Kt.getActiveShape();if(xe(U.panelIndex,U.uv,Q,at,mt),F)for(const Ot of Kt.getSymmetryPeers(U.panelIndex))xe(Ot,U.uv,Q,at,mt)}D.stopImmediatePropagation();return}X={x:D.clientX,y:D.clientY},ft=K(D)}),_.addEventListener("pointerup",D=>{if(ut){ut=!1;const B=yt;if(yt=-1,Bt.clear(),R.enabled=!0,f.custViewMode==="flat"&&(R.enablePan=!0),_.style.cursor=(Kt==null?void 0:Kt.getActiveTool())==="brush"?"crosshair":"grab",Kt!=null&&Kt.isMirrorMode()&&J.length>0&&B>=0){const Q=Kt.getSymmetryPeers(B);for(const at of Q){Bt.delete(at);for(const mt of J)Ht(at,mt.uv,mt.size,mt.color)}Bt.clear(),J=[]}return}if(!X)return;const O=D.clientX-X.x,F=D.clientY-X.y,U=Math.sqrt(O*O+F*F);if(X=null,U>5){ft=null;return}if(Kt&&ft!=null&&Kt.handlePanelClick(ft)){ft=null;return}if(ft===f.selectedPanelIndex&&ft!=null){ft=null;return}Nt(ft),ft=null});const it=window.innerWidth<=768;let vt=0;const xt=it?16:0;_.addEventListener("pointermove",D=>{if(ut){if(D.preventDefault(),R.enabled=!1,xt>0){const B=performance.now();if(B-vt<xt)return;vt=B}const U=le(D);if(U&&U.panelIndex===yt){const B=Kt.getBrushSize(),Q=Kt.getActiveColor();Ht(U.panelIndex,U.uv,B,Q),Kt!=null&&Kt.isMirrorMode()&&J.push({uv:U.uv,size:B,color:Q})}return}const O=Kt==null?void 0:Kt.getActiveTool();if(O==="brush"||O==="shape"){f.custViewMode==="flat"&&(R.enablePan=!1),_.style.cursor="crosshair";return}else f.custViewMode==="flat"&&(R.enablePan=!0);const F=K(D);F!==f.hoveredPanelIndex&&(gt(f.hoveredPanelIndex,!1),f.hoveredPanelIndex=F,gt(f.hoveredPanelIndex,!0),_.style.cursor=F!=null?"pointer":"grab")}),_.addEventListener("pointerleave",()=>{f.hoveredPanelIndex!=null&&(gt(f.hoveredPanelIndex,!1),f.hoveredPanelIndex=null),_.style.cursor="grab"}),u.addEventListener("pointerdown",D=>{D.stopPropagation()}),u.addEventListener("pointerup",D=>{D.stopPropagation()}),u.addEventListener("click",D=>{D.stopPropagation(),d.click()}),d.addEventListener("input",D=>{if(f.selectedPanelIndex==null)return;const O=D.target.value;Qr(t.design,f.selectedPanelIndex,O),u.style.backgroundColor=O,ie();const F=P.get(f.selectedPanelIndex);if(F&&!F.painted&&(F.ctx.fillStyle=O,F.ctx.fillRect(0,0,M,M),F.baseColor=O,F.texture.needsUpdate=!0),f.custViewMode!=="flat")for(const U of E.children)U.userData.stitchPanelIndex===f.selectedPanelIndex&&U.isMesh&&U.material.color.set(O)}),d.addEventListener("change",D=>{f.selectedPanelIndex!=null&&(we(),wt())}),p.addEventListener("click",D=>{D.stopPropagation(),eh(t.design),P.clear(),Nt(null),ie(),we(),wt()});function kt(){if(f.cameraAnimTarget&&f.cameraAnimTargetSpherical&&f.custViewMode!=="flat"){const D=new za().setFromVector3(Lt.position),O=f.cameraAnimTargetSpherical,F=Math.atan2(Math.sin(O.theta-D.theta),Math.cos(O.theta-D.theta));D.radius+=(O.radius-D.radius)*.08,D.phi+=(O.phi-D.phi)*.08,D.theta+=F*.08,D.makeSafe(),Lt.position.setFromSpherical(D),Lt.lookAt(0,0,0),Lt.position.distanceTo(f.cameraAnimTarget)<.01&&(Lt.position.copy(f.cameraAnimTarget),f.cameraAnimTarget=null,f.cameraAnimTargetSpherical=null)}if(f.flatPanTarget&&f.custViewMode==="flat"){const D=f.flatPanTarget;R.target.x+=(D.x-R.target.x)*.1,R.target.y+=(D.y-R.target.y)*.1,Lt.position.x+=(D.x-Lt.position.x)*.1,Lt.position.y+=(D.y-Lt.position.y)*.1;const O=R.target.x-D.x,F=R.target.y-D.y;Math.sqrt(O*O+F*F)<.05&&(R.target.x=D.x,R.target.y=D.y,Lt.position.x=D.x,Lt.position.y=D.y,f.flatPanTarget=null),R.update()}}function he(){}function ge(){if(!E)return;const D=new Vt(t.primaryColor),O=new Vt(t.secondaryColor);if(f.custViewMode==="flat")for(const F of E.children){if(F.userData.panelIndex==null||!F.isMesh)continue;const U=F.userData.panelIndex,B=t.design==="classic"&&U<12;di(t.design,U)||F.material.color.copy(B?O:D)}else for(const F of E.children)if(F.userData.panelIndex!=null){if(F.isGroup){const U=F.children[0];if(!(U!=null&&U.material))continue;const B=F.userData.panelIndex,Q=t.design==="classic"&&B<12;if(!di(t.design,B)){const mt=Q?O:D;U.material.color.copy(mt),U.material.emissive.copy(mt)}}F.isLine&&!F.userData.panelIndex&&F.material.color.copy(O)}}function Jt(D){if(!E||f.custViewMode!=="flat")return;if(D===0){for(const B of E.children)B.position.set(0,0,0);return}const O=new Map;for(const B of E.children){const Q=B.userData.panelIndex;if(Q!=null&&!O.has(Q)){const at=B.geometry;if(!at)continue;at.computeBoundingBox();const mt=(at.boundingBox.min.x+at.boundingBox.max.x)/2,Ot=(at.boundingBox.min.y+at.boundingBox.max.y)/2;O.set(Q,{x:mt,y:Ot})}}const F=[...O.values()].reduce((B,Q)=>B+Q.x,0)/(O.size||1),U=[...O.values()].reduce((B,Q)=>B+Q.y,0)/(O.size||1);for(const B of E.children){const Q=B.userData.panelIndex;if(Q==null)continue;const at=O.get(Q);if(!at)continue;const mt=at.x-F,Ot=at.y-U;B.position.set(mt*D*1.2,Ot*D*1.2,0)}}function we(){if((f.custViewMode==="ball"||f.custViewMode!=="flat")&&T(),m.remove(E),f.custViewMode==="flat")E=fS(t),Jt(f.custExplodeFactor),R.autoRotate=!1,R.enableRotate=!1,R.enablePan=!0,R.minPolarAngle=Math.PI/2,R.maxPolarAngle=Math.PI/2,R.minDistance=1,R.maxDistance=60,R.target.set(0,0,0),Lt.position.set(0,0,t.design==="classic"?18:9),Lt.lookAt(0,0,0),R.update();else{const D=ka(t,n);E=D.group,E.scale.set(1,1,1),f.custExplodePanels=D.panels,uo(f.custExplodePanels,f.custExplodeFactor),f.custExplodeFactor===0&&Ba(E,t,n),f.selectedPanelIndex==null&&(R.autoRotate=!0),R.enableRotate=!0,R.enablePan=!1,R.minPolarAngle=0,R.maxPolarAngle=Math.PI,R.minDistance=.9,R.maxDistance=4.4+f.custExplodeFactor*4.2,Z()}m.add(E),Ft(),f.selectedPanelIndex!=null&&jt(f.selectedPanelIndex,!0),ie()}function $e(){const D=document.getElementById("explode-slider"),O=document.getElementById("explode-slider-detail"),F=document.getElementById("explode-val"),U=document.getElementById("explode-val-detail");function B(at){const mt=Math.round(at*100)+"%";F&&(F.textContent=mt),U&&(U.textContent=mt),D&&D.value!==String(at)&&(D.value=String(at)),O&&O.value!==String(at)&&(O.value=String(at))}function Q(at){const mt=f.custExplodeFactor;if(f.custExplodeFactor=parseFloat(at),B(f.custExplodeFactor),f.custViewMode==="flat"){Jt(f.custExplodeFactor);return}if(mt===0!=(f.custExplodeFactor===0)){we();return}f.custExplodePanels.length>0&&uo(f.custExplodePanels,f.custExplodeFactor),R.maxDistance=4.4+f.custExplodeFactor*4.2}D==null||D.addEventListener("input",at=>Q(at.target.value)),O==null||O.addEventListener("input",at=>Q(at.target.value)),B(f.custExplodeFactor)}function wn(){var F,U,B,Q,at,mt,Ot,It;document.querySelectorAll(".design-btn[data-design]").forEach(Rt=>{Rt.addEventListener("click",()=>{t.design=Rt.dataset.design,I(t.design),document.querySelectorAll(".design-btn[data-design]").forEach(Xt=>{Xt.classList.toggle("active",Xt.dataset.design===t.design)}),document.querySelectorAll(".studio-preset").forEach(Xt=>{Xt.classList.toggle("active",Xt.dataset.design===t.design)}),Nt(null),we(),wt(),Kt&&Kt.renderPatterns()})}),document.querySelectorAll(".view-btn").forEach(Rt=>{Rt.addEventListener("click",()=>{f.flatPanTarget=null,R.target.set(0,0,0),f.custViewMode=Rt.dataset.view,document.querySelectorAll(".view-btn").forEach(Xt=>{Xt.classList.toggle("active",Xt.dataset.view===f.custViewMode)}),Nt(null),we()})});function D(Rt,Xt){const te=Rt.id.includes("secondary");te?t.secondaryColor=Rt.value:t.primaryColor=Rt.value;const A=document.getElementById(Xt);A&&(A.value=Rt.value);for(const[G,$]of P){if($.painted)continue;const j=lt(G);$.baseColor!==j&&($.ctx.fillStyle=j,$.ctx.fillRect(0,0,M,M),$.baseColor=j,$.texture.needsUpdate=!0)}if(te&&E){const G=new Vt(Rt.value);for(const $ of E.children)if(!($.userData.panelIndex!=null||$.userData.stitchPanelIndex!=null)&&($.isMesh&&$.material&&($.material.color.copy(G),$.material.emissive&&$.material.emissive.copy(G)),$.isLine&&$.material&&$.material.color.copy(G),$.isGroup)){const j=$.children[1];j!=null&&j.isLine&&j.material&&j.material.color.copy(G)}}ge()}(F=document.getElementById("primary-color"))==null||F.addEventListener("input",Rt=>D(Rt.target,"primary-color-detail")),(U=document.getElementById("secondary-color"))==null||U.addEventListener("input",Rt=>D(Rt.target,"secondary-color-detail")),(B=document.getElementById("primary-color-detail"))==null||B.addEventListener("input",Rt=>D(Rt.target,"primary-color")),(Q=document.getElementById("secondary-color-detail"))==null||Q.addEventListener("input",Rt=>D(Rt.target,"secondary-color"));const O=()=>{we(),wt()};(at=document.getElementById("primary-color"))==null||at.addEventListener("change",O),(mt=document.getElementById("secondary-color"))==null||mt.addEventListener("change",O),(Ot=document.getElementById("primary-color-detail"))==null||Ot.addEventListener("change",O),(It=document.getElementById("secondary-color-detail"))==null||It.addEventListener("change",O)}if(c){let D=!1;const O=()=>{const F=c.classList.contains("fullscreen"),U=c.classList.contains("edit-mode-active"),B=F||U;c.classList.toggle("zoomed-out",F),h&&(h.textContent=F?"Detailed View":"Focused View"),D&&!B&&wt(),D=B};new MutationObserver(O).observe(c,{attributes:!0,attributeFilter:["class"]}),O()}R.addEventListener("change",()=>{f.custViewMode==="ball"&&T()});const Kt=f1({ballConfig:t,updateBall:we,selectPanel:Nt,invalidateCanvases:$t,syncExternalBalls:wt});return Ft(),setTimeout(()=>wt(),0),window.addEventListener("keydown",D=>{(D.ctrlKey||D.metaKey)&&D.key==="z"&&!D.shiftKey&&(D.preventDefault(),Y()),(D.ctrlKey||D.metaKey)&&(D.key==="Z"||D.key==="z"&&D.shiftKey)&&(D.preventDefault(),et()),(D.ctrlKey||D.metaKey)&&D.key==="y"&&(D.preventDefault(),et())}),(Bn=document.getElementById("tb-undo-btn"))==null||Bn.addEventListener("click",Y),(ki=document.getElementById("tb-redo-btn"))==null||ki.addEventListener("click",et),{studioUI:Kt,state:f,custScene:m,custCamera:Lt,custRenderer:_t,custControls:R,updateBall:we,wireExplodeSlider:$e,wireCustomizerUi:wn,animateCamera:kt,debugAfterControlsUpdate:he,applyCanvasTextures:qt,syncExternalBalls:wt,undo:Y,redo:et}}function m1(){if(window.matchMedia("(max-width: 768px)").matches)return;let s=null;document.querySelectorAll(".resize-handle").forEach(t=>{t.addEventListener("pointerdown",e=>{e.preventDefault();const n=t.classList.contains("resize-h"),i=t.previousElementSibling,r=t.nextElementSibling;if(!i||!r)return;const o=t.parentElement;for(const h of o.children){if(h.classList.contains("resize-handle"))continue;const u=n?h.offsetHeight:h.offsetWidth;h.style.flex=`${u} 0 0px`}const a=n?e.clientY:e.clientX,l=n?i.offsetHeight:i.offsetWidth,c=n?r.offsetHeight:r.offsetWidth;t.classList.add("active"),document.body.classList.add("resizing"),document.body.style.cursor=n?"row-resize":"col-resize",s={handle:t,isH:n,startPos:a,prev:i,next:r,prevSize:l,nextSize:c}})}),window.addEventListener("pointermove",t=>{if(!s)return;const{isH:e,startPos:n,prev:i,next:r,prevSize:o,nextSize:a}=s,l=(e?t.clientY:t.clientX)-n,c=o+a,h=80,u=Math.max(h,Math.min(c-h,o+l)),d=c-u;i.style.flex=`${u} 0 0px`,r.style.flex=`${d} 0 0px`}),window.addEventListener("pointerup",()=>{s&&(s.handle.classList.remove("active"),document.body.classList.remove("resizing"),document.body.style.cursor="",s=null)})}function _1(){document.querySelectorAll(".panel-fs-btn").forEach(s=>{s.addEventListener("click",t=>{t.stopPropagation(),s.closest(".bento-panel").classList.toggle("fullscreen")})}),window.addEventListener("keydown",s=>{s.key==="Escape"&&document.querySelectorAll(".bento-panel.fullscreen").forEach(t=>{t.classList.remove("fullscreen")})})}const vn=wS(),Ys=document.querySelector("canvas.webgl"),Do=document.getElementById("panel-shooter"),hm={panel:document.getElementById("panel-birdseye"),canvas:document.querySelector("canvas.birdseye-canvas")},g1={panel:document.getElementById("panel-flight-dynamics"),canvas:document.querySelector("canvas.flight-dynamics-canvas")},on=new Ph;on.background=new Vt("#000000");on.fog=new Rh("#000000",.015);const $a=pS({mainCanvas:Ys,canvas:hm.canvas,debugParams:vn});function v1(){$a.apply()}const x1=new zh(16777215,1.5);on.add(x1);const um=new Pr(16777215,2.5);um.position.set(5,10,5);on.add(um);const dm=new Pr(16777215,1);dm.position.set(-5,5,-5);on.add(dm);const{gridHelper:Pa,fieldLines:Da,backWall:y1,leftWall:M1,rightWall:S1,applyTheme:E1}=BS(on),{goalGroup:b1,goalWidth:fm,goalHeight:pm,applyTheme:w1}=kS(on),zr=.22,mm=-11,La={x:0,y:zr,z:mm};function _m(){const s=ka(Dr,zr);return uo(s.panels,0),Ba(s.group,Dr,zr),s.group}let ll=_m();ll.position.set(La.x,La.y,La.z);on.add(ll);const cl=()=>ll,T1=s=>{ll=s},Qe={width:Do.clientWidth,height:Do.clientHeight},zi=new hn(50,Qe.width/Qe.height,.1,100);zi.position.set(0,1.8,mm-6);zi.lookAt(0,1,0);on.add(zi);const hs=new Kf(zi,Ys);hs.enableDamping=!0;hs.enabled=!1;const Lo=new il({canvas:Ys,antialias:!0});Lo.setSize(Qe.width,Qe.height);Lo.setPixelRatio(Math.min(window.devicePixelRatio,2));const A1=new ResizeObserver(()=>{Qe.width=Do.clientWidth,Qe.height=Do.clientHeight,!(Qe.width===0||Qe.height===0)&&(zi.aspect=Qe.width/Qe.height,zi.updateProjectionMatrix(),Lo.setSize(Qe.width,Qe.height),Lo.setPixelRatio(Math.min(window.devicePixelRatio,2)))});A1.observe(Do);const ss={isKicking:!1,activeCurveForce:0,activeLateralAccel:0,activeVelocityVec:new L(0,0,0)},C1=()=>{},{updateFluidFlowOverlay:R1}=bS({scene:on,visualFilters:$a,debugParams:vn,getBallGroup:cl,getFlowState:()=>({activeVelocityVec:ss.activeVelocityVec,activeCurveForce:ss.activeCurveForce,activeLateralAccel:ss.activeLateralAccel}),ballRadius:zr}),{flightAnalyticsState:P1,clearTrail:D1,pushTrailPoint:L1,fadeTrail:I1,renderBirdseye:lu,recordPhysicsSample:U1,drawFlightGraph:F1,applyBirdseyeTheme:N1}=GS({scene:on,gridHelper:Pa,fieldLines:Da,backWall:y1,leftWall:M1,rightWall:S1,birdseye:hm,flightDynamics:g1,getBallGroup:cl}),{kick:O1,cancelKick:z1}=u1({BALL_DESIGNS:tS,ballConfig:Dr,debugParams:vn,ballStartPosition:La,ballRadius:zr,goalWidth:fm,goalHeight:pm,sizes:Qe,getBallGroup:cl,getGoalGroup:()=>b1,flightAnalyticsState:P1,recordPhysicsSample:U1,updateForceVectors:C1,clearTrail:D1,renderBirdseye:lu,kickPhysics:ss}),{trailMesh:gm,updateTrailRibbon:B1,maxTrailPoints:k1,applyTheme:V1}=WS({scene:on,camera:zi,canvas:Ys}),li=zS(document.getElementById("debug-overlay"),vn,{onOrbitControlsChange:s=>{hs.enabled=s}});v1();const Bi=document.getElementById("panel-spin-preview"),As=document.querySelector("canvas.spin-preview-canvas"),vi=new Ph;vi.background=new Vt("#0a0a0a");vi.add(new zh(16777215,1.5));const vm=new Pr(16777215,2.5);vm.position.set(3,4,5);vi.add(vm);const xm=new Pr(16777215,.8);xm.position.set(-3,2,-3);vi.add(xm);const ym=.4;let qi=Mm(ym);vi.add(qi);function Mm(s){const t=ka(Dr,s);return uo(t.panels,0),Ba(t.group,Dr,s),t.group}const Ls=new Dn,H1=new os(.006,.006,.5,6),G1=new Nh(.02,.06,6),Sm=new Un({color:16739179}),Em=new se(H1,Sm);Em.position.y=.25;const bm=new se(G1,Sm.clone());bm.position.y=.53;Ls.add(Em,bm);Ls.visible=!1;vi.add(Ls);function W1(){const s=qi.rotation.clone();vi.remove(qi),qi=Mm(ym),qi.rotation.copy(s),vi.add(qi),jn&&jn.applyCanvasTextures(qi)}const Mr=new hn(40,Bi.clientWidth/(Bi.clientHeight||1),.1,50);Mr.position.set(0,0,1.5);Mr.lookAt(0,0,0);const Io=new il({canvas:As,antialias:!0});Io.setSize(Bi.clientWidth,Bi.clientHeight);Io.setPixelRatio(Math.min(window.devicePixelRatio,2));const X1=new ResizeObserver(()=>{const s=Bi.clientWidth,t=Bi.clientHeight;if(s===0||t===0)return;Mr.aspect=s/t;const e=1.5;Mr.position.z=s/t<1?e*(1/(s/t))*.9:e,Mr.updateProjectionMatrix(),Io.setSize(s,t),Io.setPixelRatio(Math.min(window.devicePixelRatio,2))});X1.observe(Bi);{let t=function(e){const n=As.getBoundingClientRect(),i=(e.clientX-n.left)/n.width*2-1,r=-((e.clientY-n.top)/n.height*2-1),o=i*i+r*r;if(o<=1)return{x:i,y:r,z:Math.sqrt(1-o)};const a=Math.sqrt(o);return{x:i/a,y:r/a,z:0}};var nb=t;let s=null;As.addEventListener("pointerdown",e=>{s=t(e),s.cx=e.clientX,s.cy=e.clientY,As.setPointerCapture(e.pointerId)}),As.addEventListener("pointermove",e=>{if(!s)return;const n=t(e),i=s.y*n.z-s.z*n.y,r=s.z*n.x-s.x*n.z,o=s.x*n.y-s.y*n.x,a=Math.sqrt(i*i+r*r+o*o);if(a<.001)return;vn.spinAxisX=i/a,vn.spinAxisY=r/a,vn.spinAxisZ=o/a;const l=e.clientX-s.cx,c=e.clientY-s.cy,h=Math.sqrt(l*l+c*c),u=Math.max(Bi.clientWidth,Bi.clientHeight);vn.spinSpeed=Math.round(Math.min(50,Math.max(1,h/u*60))),li.speedCtrl&&li.speedCtrl.updateDisplay(),li.axisXCtrl&&li.axisXCtrl.updateDisplay(),li.axisYCtrl&&li.axisYCtrl.updateDisplay(),li.axisZCtrl&&li.axisZCtrl.updateDisplay(),li.drawCircle&&li.drawCircle()}),As.addEventListener("pointerup",()=>{s=null}),As.addEventListener("pointercancel",()=>{s=null})}const Y1=.4;let jn=p1({mainScene:on,ballConfig:Dr,ballRadius:zr,previewRadius:Y1,getBallGroup:cl,setBallGroup:T1,buildMainBall:_m,onBallChanged:W1,cancelKick:z1});const{custScene:q1,custCamera:$1,custRenderer:Z1,custControls:j1}=jn;jn.wireCustomizerUi();jn.wireExplodeSlider();jn.studioUI.init();let Za=!1;const Sr={x:0,y:0,time:0},Yn=[];function K1(s){ss.isKicking||hs.enabled||(Sr.x=s.clientX,Sr.y=s.clientY,Sr.time=performance.now(),Za=!0,Yn.length=0,Yn.push({x:s.clientX,y:s.clientY,time:performance.now()}),gm.visible=!0)}function J1(s){!Za||ss.isKicking||hs.enabled||(Yn.push({x:s.clientX,y:s.clientY,time:performance.now()}),Yn.length>k1&&Yn.shift(),B1(Yn))}function Q1(s){if(!Za||ss.isKicking||hs.enabled)return;Za=!1,gm.visible=!1;const t=s.clientX-Sr.x,e=Sr.y-s.clientY,n=(performance.now()-Sr.time)/1e3,i=Math.max(30,Qe.height*.04);if(e<i)return;let r=0;if(Yn.length>=3){const f=Yn[0],_=Yn[Yn.length-1],g=Yn[Math.floor(Yn.length/2)],m=(f.x+_.x)/2;r=(g.x-m)/Qe.width*-16}const a=Math.sqrt(t*t+e*e)/Qe.height,l=Math.min(a/n,4),c=Math.min(l*.36,1)*vn.powerMultiplier,h=-(t/Qe.width)*fm*.85,u=Math.atan2(e,Math.abs(t)+1),p=Math.max(0,Math.min(1,u/(Math.PI/2)*1.3-.2))*pm*.95;jn.syncExternalBalls(),O1(c,h,r,p)}Ys.addEventListener("pointerdown",K1);Ys.addEventListener("pointermove",J1);Ys.addEventListener("pointerup",Q1);const rf=document.getElementById("theme-toggle-btn");function tb(){const s=document.documentElement.dataset.theme==="light",t=s?"#ffffff":"#000000",e=s?"#ffffff":"#0a0a0a";on.background.set(t),on.fog.color.set(t),vi.background.set(e),jn!=null&&jn.custScene&&jn.custScene.background.set(e),E1(s),w1(s),V1(s),N1(s),F1(),lu()}rf&&rf.addEventListener("click",()=>{const s=document.documentElement;s.dataset.theme=s.dataset.theme==="light"?"":"light",tb()});const ac=new L,eb=new L(0,1,0),wm=()=>{const s=performance.now()*.001;hs.enabled?hs.update():zi.lookAt(0,1,0),R1(s);const t=$a.getFluidOverlay()||$a.getWindTunnelOverlay(),e=Pa.visible,n=Da.visible;t&&(Pa.visible=!1,Da.visible=!1),Lo.render(on,zi),t&&(Pa.visible=e,Da.visible=n);{const i=vn.spinAxisX,r=vn.spinAxisY,o=vn.spinAxisZ,a=Math.sqrt(i*i+r*r+o*o);a>.001?(ac.set(i/a,r/a,o/a),qi.rotateOnWorldAxis(ac,vn.spinSpeed*.01),Ls.visible=vn.showAngularMomentum,Ls.visible&&Ls.quaternion.setFromUnitVectors(eb,ac)):Ls.visible=!1}Io.render(vi,Mr),jn.animateCamera(),j1.update(),Z1.render(q1,$1),ss.isKicking?L1():I1(),lu(),window.requestAnimationFrame(wm)};wm();m1();_1();const of=document.getElementById("edit-mode-btn"),af=document.getElementById("edit-mode-done"),ja=document.getElementById("panel-customizer");of&&ja&&of.addEventListener("click",()=>{ja.classList.add("edit-mode-active","zoomed-out")});af&&ja&&af.addEventListener("click",()=>{ja.classList.remove("edit-mode-active","zoomed-out")});const lf=document.getElementById("spin-mode-btn"),cf=document.getElementById("spin-mode-done"),Ka=document.getElementById("panel-spin-preview");lf&&Ka&&lf.addEventListener("click",()=>{Ka.classList.add("spin-mode-active")});cf&&Ka&&cf.addEventListener("click",()=>{Ka.classList.remove("spin-mode-active")});
//# sourceMappingURL=index-C0T5ODxA.js.map
