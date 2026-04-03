(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="174",mr={ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},bm=0,ou=1,wm=2,of=1,Tm=2,bi=3,ss=0,fn=1,ke=2,Qi=0,_r=1,ac=2,au=3,lu=4,Am=5,As=100,Cm=101,Rm=102,Pm=103,Dm=104,Lm=200,Im=201,Um=202,Fm=203,lc=204,cc=205,Nm=206,Om=207,zm=208,Bm=209,km=210,Vm=211,Hm=212,Gm=213,Wm=214,hc=0,uc=1,dc=2,br=3,fc=4,pc=5,mc=6,_c=7,_h=0,Xm=1,Ym=2,ts=0,qm=1,$m=2,Zm=3,jm=4,Km=5,Jm=6,Qm=7,af=300,wr=301,Tr=302,gc=303,vc=304,Ja=306,vo=1e3,Rs=1001,xc=1002,ri=1003,t_=1004,Bo=1005,ii=1006,ul=1007,$i=1008,Ii=1009,lf=1010,cf=1011,xo=1012,gh=1013,zs=1014,Ri=1015,No=1016,vh=1017,xh=1018,Ar=1020,hf=35902,uf=1021,df=1022,si=1023,ff=1024,pf=1025,gr=1026,Cr=1027,mf=1028,yh=1029,_f=1030,Mh=1031,Sh=1033,ya=33776,Ma=33777,Sa=33778,Ea=33779,yc=35840,Mc=35841,Sc=35842,Ec=35843,bc=36196,wc=37492,Tc=37496,Ac=37808,Cc=37809,Rc=37810,Pc=37811,Dc=37812,Lc=37813,Ic=37814,Uc=37815,Fc=37816,Nc=37817,Oc=37818,zc=37819,Bc=37820,kc=37821,ba=36492,Vc=36494,Hc=36495,gf=36283,Gc=36284,Wc=36285,Xc=36286,e_=3200,n_=3201,vf=0,i_=1,qi="",Pn="srgb",Rr="srgb-linear",Fa="linear",_e="srgb",$s=7680,cu=519,s_=512,r_=513,o_=514,xf=515,a_=516,l_=517,c_=518,h_=519,Yc=35044,hu="300 es",Pi=2e3,Na=2001;class Gs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const i=n[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uu=1234567;const oo=Math.PI/180,yo=180/Math.PI;function pi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function ie(s,t,e){return Math.max(t,Math.min(e,s))}function Eh(s,t){return(s%t+t)%t}function u_(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function d_(s,t,e){return s!==t?(e-s)/(t-s):0}function ao(s,t,e){return(1-e)*s+e*t}function f_(s,t,e,n){return ao(s,t,1-Math.exp(-e*n))}function p_(s,t=1){return t-Math.abs(Eh(s,t*2)-t)}function m_(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function __(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function g_(s,t){return s+Math.floor(Math.random()*(t-s+1))}function v_(s,t){return s+Math.random()*(t-s)}function x_(s){return s*(.5-Math.random())}function y_(s){s!==void 0&&(uu=s);let t=uu+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function M_(s){return s*oo}function S_(s){return s*yo}function E_(s){return(s&s-1)===0&&s!==0}function b_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function w_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function T_(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),u=o((t-n)/2),p=r((n-t)/2),f=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*d,l*u,a*c);break;case"YZY":s.set(l*u,a*h,l*d,a*c);break;case"ZXZ":s.set(l*d,l*u,a*h,a*c);break;case"XZX":s.set(a*h,l*f,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*f,a*c);break;case"ZYZ":s.set(l*f,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ei(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function me(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const yf={DEG2RAD:oo,RAD2DEG:yo,generateUUID:pi,clamp:ie,euclideanModulo:Eh,mapLinear:u_,inverseLerp:d_,lerp:ao,damp:f_,pingpong:p_,smoothstep:m_,smootherstep:__,randInt:g_,randFloat:v_,randFloatSpread:x_,seededRandom:y_,degToRad:M_,radToDeg:S_,isPowerOfTwo:E_,ceilPowerOfTwo:b_,floorPowerOfTwo:w_,setQuaternionFromProperEuler:T_,normalize:me,denormalize:ei};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ne{constructor(t,e,n,i,r,o,a,l,c){ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],p=n[5],f=n[8],_=i[0],g=i[3],m=i[6],x=i[1],y=i[4],v=i[7],E=i[2],T=i[5],b=i[8];return r[0]=o*_+a*x+l*E,r[3]=o*g+a*y+l*T,r[6]=o*m+a*v+l*b,r[1]=c*_+h*x+d*E,r[4]=c*g+h*y+d*T,r[7]=c*m+h*v+d*b,r[2]=u*_+p*x+f*E,r[5]=u*g+p*y+f*T,r[8]=u*m+p*v+f*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,p=c*r-o*l,f=e*d+n*u+i*p;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/f;return t[0]=d*_,t[1]=(i*c-h*n)*_,t[2]=(a*n-i*o)*_,t[3]=u*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(dl.makeScale(t,e)),this}rotate(t){return this.premultiply(dl.makeRotation(-t)),this}translate(t,e){return this.premultiply(dl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const dl=new ne;function Mf(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Oa(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A_(){const s=Oa("canvas");return s.style.display="block",s}const du={};function Es(s){s in du||(du[s]=!0,console.warn(s))}function C_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function R_(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function P_(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const fu=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pu=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function D_(){const s={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===_e&&(i.r=Li(i.r),i.g=Li(i.g),i.b=Li(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===_e&&(i.r=vr(i.r),i.g=vr(i.g),i.b=vr(i.b))),i},fromWorkingColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},toWorkingColorSpace:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===qi?Fa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[Rr]:{primaries:t,whitePoint:n,transfer:Fa,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pn},outputColorSpaceConfig:{drawingBufferColorSpace:Pn}},[Pn]:{primaries:t,whitePoint:n,transfer:_e,toXYZ:fu,fromXYZ:pu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pn}}}),s}const ue=D_();function Li(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class L_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Zs===void 0&&(Zs=Oa("canvas")),Zs.width=t.width,Zs.height=t.height;const n=Zs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Zs}return e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Oa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Li(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Li(e[n]/255)*255):e[n]=Li(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let I_=0;class bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=pi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fl(i[o].image)):r.push(fl(i[o]))}else r=fl(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function fl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?L_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let U_=0;class pn extends Gs{constructor(t=pn.DEFAULT_IMAGE,e=pn.DEFAULT_MAPPING,n=Rs,i=Rs,r=ii,o=$i,a=si,l=Ii,c=pn.DEFAULT_ANISOTROPY,h=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=pi(),this.name="",this.source=new bh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==af)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case Rs:t.x=t.x<0?0:1;break;case xc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case Rs:t.y=t.y<0?0:1;break;case xc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=af;pn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,i=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],p=l[5],f=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(f-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(f+g)<.1&&Math.abs(c+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,E=(m+1)/2,T=(h+u)/4,b=(d+_)/4,P=(f+g)/4;return y>v&&y>E?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=T/n,r=b/n):v>E?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=P/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=b/r,i=P/r),this.set(n,i,r,e),this}let x=Math.sqrt((g-f)*(g-f)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(x)<.001&&(x=1),this.x=(g-f)/x,this.y=(d-_)/x,this.z=(u-h)/x,this.w=Math.acos((c+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class F_ extends Gs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new pn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new bh(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bs extends F_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Sf extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ri,this.minFilter=ri,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class N_ extends pn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ri,this.minFilter=ri,this.wrapR=Rs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const u=r[o+0],p=r[o+1],f=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=p,t[e+2]=f,t[e+3]=_;return}if(d!==_||l!==u||c!==p||h!==f){let g=1-a;const m=l*u+c*p+h*f+d*_,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const E=Math.sqrt(y),T=Math.atan2(E,m*x);g=Math.sin(g*T)/E,a=Math.sin(a*T)/E}const v=a*x;if(l=l*g+u*v,c=c*g+p*v,h=h*g+f*v,d=d*g+_*v,g===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],p=r[o+2],f=r[o+3];return t[e]=a*f+h*d+l*p-c*u,t[e+1]=l*f+h*u+c*d-a*p,t[e+2]=c*f+h*p+a*u-l*d,t[e+3]=h*f-a*d-l*u-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),p=l(i/2),f=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"YXZ":this._x=u*h*d+c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"ZXY":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d-u*p*f;break;case"ZYX":this._x=u*h*d-c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d+u*p*f;break;case"YZX":this._x=u*h*d+c*p*f,this._y=c*p*d+u*h*f,this._z=c*h*f-u*p*d,this._w=c*h*d-u*p*f;break;case"XZY":this._x=u*h*d-c*p*f,this._y=c*p*d-u*h*f,this._z=c*h*f+u*p*d,this._w=c*h*d+u*p*f;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>d){const p=2*Math.sqrt(1+n-a-d);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-n-d);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mu.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ie(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return pl.copy(this).projectOnVector(t),this.sub(pl)}reflect(t){return this.sub(pl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ie(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pl=new L,mu=new ks;class hs{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Jn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Jn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Jn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Jn):Jn.fromBufferAttribute(r,o),Jn.applyMatrix4(t.matrixWorld),this.expandByPoint(Jn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ko.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ko.copy(n.boundingBox)),ko.applyMatrix4(t.matrixWorld),this.union(ko)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Jn),Jn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yr),Vo.subVectors(this.max,Yr),js.subVectors(t.a,Yr),Ks.subVectors(t.b,Yr),Js.subVectors(t.c,Yr),ki.subVectors(Ks,js),Vi.subVectors(Js,Ks),ps.subVectors(js,Js);let e=[0,-ki.z,ki.y,0,-Vi.z,Vi.y,0,-ps.z,ps.y,ki.z,0,-ki.x,Vi.z,0,-Vi.x,ps.z,0,-ps.x,-ki.y,ki.x,0,-Vi.y,Vi.x,0,-ps.y,ps.x,0];return!ml(e,js,Ks,Js,Vo)||(e=[1,0,0,0,1,0,0,0,1],!ml(e,js,Ks,Js,Vo))?!1:(Ho.crossVectors(ki,Vi),e=[Ho.x,Ho.y,Ho.z],ml(e,js,Ks,Js,Vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Jn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Jn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xi=[new L,new L,new L,new L,new L,new L,new L,new L],Jn=new L,ko=new hs,js=new L,Ks=new L,Js=new L,ki=new L,Vi=new L,ps=new L,Yr=new L,Vo=new L,Ho=new L,ms=new L;function ml(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ms.fromArray(s,r);const a=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),l=t.dot(ms),c=e.dot(ms),h=n.dot(ms);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const O_=new hs,qr=new L,_l=new L;class Ws{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):O_.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qr.subVectors(t,this.center);const e=qr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(qr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_l.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qr.copy(t.center).add(_l)),this.expandByPoint(qr.copy(t.center).sub(_l))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new L,gl=new L,Go=new L,Hi=new L,vl=new L,Wo=new L,xl=new L;class Qa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yi.copy(this.origin).addScaledVector(this.direction,e),yi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){gl.copy(t).add(e).multiplyScalar(.5),Go.copy(e).sub(t).normalize(),Hi.copy(this.origin).sub(gl);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Go),a=Hi.dot(this.direction),l=-Hi.dot(Go),c=Hi.lengthSq(),h=Math.abs(1-o*o);let d,u,p,f;if(h>0)if(d=o*l-a,u=o*a-l,f=r*h,d>=0)if(u>=-f)if(u<=f){const _=1/h;d*=_,u*=_,p=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;else u<=-f?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c):u<=f?(d=0,u=Math.min(Math.max(-r,-l),r),p=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),p=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),p=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(gl).addScaledVector(Go,u),p}intersectSphere(t,e){yi.subVectors(t.center,this.origin);const n=yi.dot(this.direction),i=yi.dot(yi)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yi)!==null}intersectTriangle(t,e,n,i,r){vl.subVectors(e,t),Wo.subVectors(n,t),xl.crossVectors(vl,Wo);let o=this.direction.dot(xl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Hi.subVectors(this.origin,t);const l=a*this.direction.dot(Wo.crossVectors(Hi,Wo));if(l<0)return null;const c=a*this.direction.dot(vl.cross(Hi));if(c<0||l+c>o)return null;const h=-a*Hi.dot(xl);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ee{constructor(t,e,n,i,r,o,a,l,c,h,d,u,p,f,_,g){Ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,p,f,_,g)}set(t,e,n,i,r,o,a,l,c,h,d,u,p,f,_,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=r,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=p,m[7]=f,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Qs.setFromMatrixColumn(t,0).length(),r=1/Qs.setFromMatrixColumn(t,1).length(),o=1/Qs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=o*h,p=o*d,f=a*h,_=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+f*c,e[5]=u-_*c,e[9]=-a*l,e[2]=_-u*c,e[6]=f+p*c,e[10]=o*l}else if(t.order==="YXZ"){const u=l*h,p=l*d,f=c*h,_=c*d;e[0]=u+_*a,e[4]=f*a-p,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-f,e[6]=_+u*a,e[10]=o*l}else if(t.order==="ZXY"){const u=l*h,p=l*d,f=c*h,_=c*d;e[0]=u-_*a,e[4]=-o*d,e[8]=f+p*a,e[1]=p+f*a,e[5]=o*h,e[9]=_-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const u=o*h,p=o*d,f=a*h,_=a*d;e[0]=l*h,e[4]=f*c-p,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=p*c-f,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const u=o*l,p=o*c,f=a*l,_=a*c;e[0]=l*h,e[4]=_-u*d,e[8]=f*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*d+f,e[10]=u-_*d}else if(t.order==="XZY"){const u=o*l,p=o*c,f=a*l,_=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=o*h,e[9]=p*d-f,e[2]=f*d-p,e[6]=a*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(z_,t,B_)}lookAt(t,e,n){const i=this.elements;return Cn.subVectors(t,e),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Gi.crossVectors(n,Cn),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Gi.crossVectors(n,Cn)),Gi.normalize(),Xo.crossVectors(Cn,Gi),i[0]=Gi.x,i[4]=Xo.x,i[8]=Cn.x,i[1]=Gi.y,i[5]=Xo.y,i[9]=Cn.y,i[2]=Gi.z,i[6]=Xo.z,i[10]=Cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],p=n[13],f=n[2],_=n[6],g=n[10],m=n[14],x=n[3],y=n[7],v=n[11],E=n[15],T=i[0],b=i[4],P=i[8],M=i[12],S=i[1],w=i[5],N=i[9],O=i[13],k=i[2],V=i[6],B=i[10],G=i[14],W=i[3],st=i[7],it=i[11],pt=i[15];return r[0]=o*T+a*S+l*k+c*W,r[4]=o*b+a*w+l*V+c*st,r[8]=o*P+a*N+l*B+c*it,r[12]=o*M+a*O+l*G+c*pt,r[1]=h*T+d*S+u*k+p*W,r[5]=h*b+d*w+u*V+p*st,r[9]=h*P+d*N+u*B+p*it,r[13]=h*M+d*O+u*G+p*pt,r[2]=f*T+_*S+g*k+m*W,r[6]=f*b+_*w+g*V+m*st,r[10]=f*P+_*N+g*B+m*it,r[14]=f*M+_*O+g*G+m*pt,r[3]=x*T+y*S+v*k+E*W,r[7]=x*b+y*w+v*V+E*st,r[11]=x*P+y*N+v*B+E*it,r[15]=x*M+y*O+v*G+E*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],p=t[14],f=t[3],_=t[7],g=t[11],m=t[15];return f*(+r*l*d-i*c*d-r*a*u+n*c*u+i*a*p-n*l*p)+_*(+e*l*p-e*c*u+r*o*u-i*o*p+i*c*h-r*l*h)+g*(+e*c*d-e*a*p-r*o*d+n*o*p+r*a*h-n*c*h)+m*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],p=t[11],f=t[12],_=t[13],g=t[14],m=t[15],x=d*g*c-_*u*c+_*l*p-a*g*p-d*l*m+a*u*m,y=f*u*c-h*g*c-f*l*p+o*g*p+h*l*m-o*u*m,v=h*_*c-f*d*c+f*a*p-o*_*p-h*a*m+o*d*m,E=f*d*l-h*_*l-f*a*u+o*_*u+h*a*g-o*d*g,T=e*x+n*y+i*v+r*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/T;return t[0]=x*b,t[1]=(_*u*r-d*g*r-_*i*p+n*g*p+d*i*m-n*u*m)*b,t[2]=(a*g*r-_*l*r+_*i*c-n*g*c-a*i*m+n*l*m)*b,t[3]=(d*l*r-a*u*r-d*i*c+n*u*c+a*i*p-n*l*p)*b,t[4]=y*b,t[5]=(h*g*r-f*u*r+f*i*p-e*g*p-h*i*m+e*u*m)*b,t[6]=(f*l*r-o*g*r-f*i*c+e*g*c+o*i*m-e*l*m)*b,t[7]=(o*u*r-h*l*r+h*i*c-e*u*c-o*i*p+e*l*p)*b,t[8]=v*b,t[9]=(f*d*r-h*_*r-f*n*p+e*_*p+h*n*m-e*d*m)*b,t[10]=(o*_*r-f*a*r+f*n*c-e*_*c-o*n*m+e*a*m)*b,t[11]=(h*a*r-o*d*r-h*n*c+e*d*c+o*n*p-e*a*p)*b,t[12]=E*b,t[13]=(h*_*i-f*d*i+f*n*u-e*_*u-h*n*g+e*d*g)*b,t[14]=(f*a*i-o*_*i-f*n*l+e*_*l+o*n*g-e*a*g)*b,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,p=r*h,f=r*d,_=o*h,g=o*d,m=a*d,x=l*c,y=l*h,v=l*d,E=n.x,T=n.y,b=n.z;return i[0]=(1-(_+m))*E,i[1]=(p+v)*E,i[2]=(f-y)*E,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(u+m))*T,i[6]=(g+x)*T,i[7]=0,i[8]=(f+y)*b,i[9]=(g-x)*b,i[10]=(1-(u+_))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=Qs.set(i[0],i[1],i[2]).length();const o=Qs.set(i[4],i[5],i[6]).length(),a=Qs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Qn.copy(this);const c=1/r,h=1/o,d=1/a;return Qn.elements[0]*=c,Qn.elements[1]*=c,Qn.elements[2]*=c,Qn.elements[4]*=h,Qn.elements[5]*=h,Qn.elements[6]*=h,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,e.setFromRotationMatrix(Qn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Pi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i);let p,f;if(a===Pi)p=-(o+r)/(o-r),f=-2*o*r/(o-r);else if(a===Na)p=-o/(o-r),f=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=f,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Pi){const l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-r),u=(e+t)*c,p=(n+i)*h;let f,_;if(a===Pi)f=(o+r)*d,_=-2*d;else if(a===Na)f=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-f,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Qs=new L,Qn=new Ee,z_=new L(0,0,0),B_=new L(1,1,1),Gi=new L,Xo=new L,Cn=new L,_u=new Ee,gu=new ks;class _i{constructor(t=0,e=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ie(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _u.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_u,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gu.setFromEuler(this),this.setFromQuaternion(gu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class wh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let k_=0;const vu=new L,tr=new ks,Mi=new Ee,Yo=new L,$r=new L,V_=new L,H_=new ks,xu=new L(1,0,0),yu=new L(0,1,0),Mu=new L(0,0,1),Su={type:"added"},G_={type:"removed"},er={type:"childadded",child:null},yl={type:"childremoved",child:null};class We extends Gs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=pi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new L,e=new _i,n=new ks,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ee},normalMatrix:{value:new ne}}),this.matrix=new Ee,this.matrixWorld=new Ee,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.multiply(tr),this}rotateOnWorldAxis(t,e){return tr.setFromAxisAngle(t,e),this.quaternion.premultiply(tr),this}rotateX(t){return this.rotateOnAxis(xu,t)}rotateY(t){return this.rotateOnAxis(yu,t)}rotateZ(t){return this.rotateOnAxis(Mu,t)}translateOnAxis(t,e){return vu.copy(t).applyQuaternion(this.quaternion),this.position.add(vu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(xu,t)}translateY(t){return this.translateOnAxis(yu,t)}translateZ(t){return this.translateOnAxis(Mu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yo.copy(t):Yo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),$r.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt($r,Yo,this.up):Mi.lookAt(Yo,$r,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),tr.setFromRotationMatrix(Mi),this.quaternion.premultiply(tr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Su),er.child=t,this.dispatchEvent(er),er.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(G_),yl.child=t,this.dispatchEvent(yl),yl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Su),er.child=t,this.dispatchEvent(er),er.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,t,V_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($r,H_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),p=o(t.animations),f=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),f.length>0&&(n.nodes=f)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}We.DEFAULT_UP=new L(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ti=new L,Si=new L,Ml=new L,Ei=new L,nr=new L,ir=new L,Eu=new L,Sl=new L,El=new L,bl=new L,wl=new Me,Tl=new Me,Al=new Me;class ni{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ti.subVectors(t,e),i.cross(ti);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){ti.subVectors(i,e),Si.subVectors(n,e),Ml.subVectors(t,e);const o=ti.dot(ti),a=ti.dot(Si),l=ti.dot(Ml),c=Si.dot(Si),h=Si.dot(Ml),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(c*l-a*h)*u,f=(o*h-a*l)*u;return r.set(1-p-f,f,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ei)===null?!1:Ei.x>=0&&Ei.y>=0&&Ei.x+Ei.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ei.x),l.addScaledVector(o,Ei.y),l.addScaledVector(a,Ei.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return wl.setScalar(0),Tl.setScalar(0),Al.setScalar(0),wl.fromBufferAttribute(t,e),Tl.fromBufferAttribute(t,n),Al.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(wl,r.x),o.addScaledVector(Tl,r.y),o.addScaledVector(Al,r.z),o}static isFrontFacing(t,e,n,i){return ti.subVectors(n,e),Si.subVectors(t,e),ti.cross(Si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ti.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ti.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ni.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ni.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return ni.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return ni.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ni.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;nr.subVectors(i,n),ir.subVectors(r,n),Sl.subVectors(t,n);const l=nr.dot(Sl),c=ir.dot(Sl);if(l<=0&&c<=0)return e.copy(n);El.subVectors(t,i);const h=nr.dot(El),d=ir.dot(El);if(h>=0&&d<=h)return e.copy(i);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(nr,o);bl.subVectors(t,r);const p=nr.dot(bl),f=ir.dot(bl);if(f>=0&&p<=f)return e.copy(r);const _=p*c-l*f;if(_<=0&&c>=0&&f<=0)return a=c/(c-f),e.copy(n).addScaledVector(ir,a);const g=h*f-p*d;if(g<=0&&d-h>=0&&p-f>=0)return Eu.subVectors(r,i),a=(d-h)/(d-h+(p-f)),e.copy(i).addScaledVector(Eu,a);const m=1/(g+_+u);return o=_*m,a=u*m,e.copy(n).addScaledVector(nr,o).addScaledVector(ir,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ef={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},qo={h:0,s:0,l:0};function Cl(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class kt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=Eh(t,1),e=ie(e,0,1),n=ie(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cl(o,r,t+1/3),this.g=Cl(o,r,t),this.b=Cl(o,r,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=Pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pn){const n=Ef[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Li(t.r),this.g=Li(t.g),this.b=Li(t.b),this}copyLinearToSRGB(t){return this.r=vr(t.r),this.g=vr(t.g),this.b=vr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pn){return ue.fromWorkingColorSpace(en.copy(this),t),Math.round(ie(en.r*255,0,255))*65536+Math.round(ie(en.g*255,0,255))*256+Math.round(ie(en.b*255,0,255))}getHexString(t=Pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=Pn){ue.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==Pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Wi),this.setHSL(Wi.h+t,Wi.s+e,Wi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wi),t.getHSL(qo);const n=ao(Wi.h,qo.h,e),i=ao(Wi.s,qo.s,e),r=ao(Wi.l,qo.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new kt;kt.NAMES=Ef;let W_=0;class kr extends Gs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=pi(),this.name="",this.type="Material",this.blending=_r,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lc,this.blendDst=cc,this.blendEquation=As,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new kt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==_r&&(n.blending=this.blending),this.side!==ss&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==lc&&(n.blendSrc=this.blendSrc),this.blendDst!==cc&&(n.blendDst=this.blendDst),this.blendEquation!==As&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(n.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Nn extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new L,$o=new At;let X_=0;class On{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:X_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yc,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$o.fromBufferAttribute(this,e),$o.applyMatrix3(t),this.setXY(e,$o.x,$o.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yc&&(t.usage=this.usage),t}}class bf extends On{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class wf extends On{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class le extends On{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Y_=0;const Gn=new Ee,Rl=new We,sr=new L,Rn=new hs,Zr=new hs,Ge=new L;class be extends Gs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Y_++}),this.uuid=pi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Mf(t)?wf:bf)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ne().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Gn.makeRotationFromQuaternion(t),this.applyMatrix4(Gn),this}rotateX(t){return Gn.makeRotationX(t),this.applyMatrix4(Gn),this}rotateY(t){return Gn.makeRotationY(t),this.applyMatrix4(Gn),this}rotateZ(t){return Gn.makeRotationZ(t),this.applyMatrix4(Gn),this}translate(t,e,n){return Gn.makeTranslation(t,e,n),this.applyMatrix4(Gn),this}scale(t,e,n){return Gn.makeScale(t,e,n),this.applyMatrix4(Gn),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(sr).negate(),this.translate(sr.x,sr.y,sr.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new le(n,3))}else{const n=Math.min(t.length,e.count);for(let i=0;i<n;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ge.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(Ge),Ge.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(Ge)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ge.addVectors(Rn.min,Zr.min),Rn.expandByPoint(Ge),Ge.addVectors(Rn.max,Zr.max),Rn.expandByPoint(Ge)):(Rn.expandByPoint(Zr.min),Rn.expandByPoint(Zr.max))}Rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ge.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ge));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ge.fromBufferAttribute(a,c),l&&(sr.fromBufferAttribute(t,c),Ge.add(sr)),i=Math.max(i,n.distanceToSquared(Ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new On(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new L,l[P]=new L;const c=new L,h=new L,d=new L,u=new At,p=new At,f=new At,_=new L,g=new L;function m(P,M,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,M),d.fromBufferAttribute(n,S),u.fromBufferAttribute(r,P),p.fromBufferAttribute(r,M),f.fromBufferAttribute(r,S),h.sub(c),d.sub(c),p.sub(u),f.sub(u);const w=1/(p.x*f.y-f.x*p.y);isFinite(w)&&(_.copy(h).multiplyScalar(f.y).addScaledVector(d,-p.y).multiplyScalar(w),g.copy(d).multiplyScalar(p.x).addScaledVector(h,-f.x).multiplyScalar(w),a[P].add(_),a[M].add(_),a[S].add(_),l[P].add(g),l[M].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,M=x.length;P<M;++P){const S=x[P],w=S.start,N=S.count;for(let O=w,k=w+N;O<k;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const y=new L,v=new L,E=new L,T=new L;function b(P){E.fromBufferAttribute(i,P),T.copy(E);const M=a[P];y.copy(M),y.sub(E.multiplyScalar(E.dot(M))).normalize(),v.crossVectors(T,M);const w=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,w)}for(let P=0,M=x.length;P<M;++P){const S=x[P],w=S.start,N=S.count;for(let O=w,k=w+N;O<k;O+=3)b(t.getX(O+0)),b(t.getX(O+1)),b(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new On(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,p=t.count;u<p;u+=3){const f=t.getX(u+0),_=t.getX(u+1),g=t.getX(u+2);i.fromBufferAttribute(e,f),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,f),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(f,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,p=e.count;u<p;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ge.fromBufferAttribute(t,e),Ge.normalize(),t.setXYZ(e,Ge.x,Ge.y,Ge.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h);let p=0,f=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let m=0;m<h;m++)u[f++]=c[p++]}return new On(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new be,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const u=c[h],p=t(u,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,p=d.length;u<p;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bu=new Ee,_s=new Qa,Zo=new Ws,wu=new L,jo=new L,Ko=new L,Jo=new L,Pl=new L,Qo=new L,Tu=new L,ta=new L;class Qt extends We{constructor(t=new be,e=new Nn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Qo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Pl.fromBufferAttribute(d,t),o?Qo.addScaledVector(Pl,h):Qo.addScaledVector(Pl.sub(e),h))}e.add(Qo)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(r),_s.copy(t.ray).recast(t.near),!(Zo.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Zo,wu)===null||_s.origin.distanceToSquared(wu)>(t.far-t.near)**2))&&(bu.copy(r).invert(),_s.copy(t.ray).applyMatrix4(bu),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_s)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,E=y;v<E;v+=3){const T=a.getX(v),b=a.getX(v+1),P=a.getX(v+2);i=ea(this,m,t,n,c,h,d,T,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const f=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const x=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);i=ea(this,o,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let f=0,_=u.length;f<_;f++){const g=u[f],m=o[g.materialIndex],x=Math.max(g.start,p.start),y=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let v=x,E=y;v<E;v+=3){const T=v,b=v+1,P=v+2;i=ea(this,m,t,n,c,h,d,T,b,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=g.materialIndex,e.push(i))}}else{const f=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let g=f,m=_;g<m;g+=3){const x=g,y=g+1,v=g+2;i=ea(this,o,t,n,c,h,d,x,y,v),i&&(i.faceIndex=Math.floor(g/3),e.push(i))}}}}function q_(s,t,e,n,i,r,o,a){let l;if(t.side===fn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ss,a),l===null)return null;ta.copy(a),ta.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ta);return c<e.near||c>e.far?null:{distance:c,point:ta.clone(),object:s}}function ea(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,jo),s.getVertexPosition(l,Ko),s.getVertexPosition(c,Jo);const h=q_(s,t,e,n,jo,Ko,Jo,Tu);if(h){const d=new L;ni.getBarycoord(Tu,jo,Ko,Jo,d),i&&(h.uv=ni.getInterpolatedAttribute(i,a,l,c,d,new At)),r&&(h.uv1=ni.getInterpolatedAttribute(r,a,l,c,d,new At)),o&&(h.normal=ni.getInterpolatedAttribute(o,a,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};ni.getNormal(jo,Ko,Jo,u.normal),h.face=u,h.barycoord=d}return h}class Oo extends be{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let u=0,p=0;f("z","y","x",-1,-1,n,e,t,o,r,0),f("z","y","x",1,-1,n,e,-t,o,r,1),f("x","z","y",1,1,t,n,e,i,o,2),f("x","z","y",1,-1,t,n,-e,i,o,3),f("x","y","z",1,-1,t,e,n,i,r,4),f("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new le(c,3)),this.setAttribute("normal",new le(h,3)),this.setAttribute("uv",new le(d,2));function f(_,g,m,x,y,v,E,T,b,P,M){const S=v/b,w=E/P,N=v/2,O=E/2,k=T/2,V=b+1,B=P+1;let G=0,W=0;const st=new L;for(let it=0;it<B;it++){const pt=it*w-O;for(let yt=0;yt<V;yt++){const zt=yt*S-N;st[_]=zt*x,st[g]=pt*y,st[m]=k,c.push(st.x,st.y,st.z),st[_]=0,st[g]=0,st[m]=T>0?1:-1,h.push(st.x,st.y,st.z),d.push(yt/b),d.push(1-it/P),G+=1}}for(let it=0;it<P;it++)for(let pt=0;pt<b;pt++){const yt=u+pt+V*it,zt=u+pt+V*(it+1),K=u+(pt+1)+V*(it+1),et=u+(pt+1)+V*it;l.push(yt,zt,et),l.push(zt,K,et),W+=6}a.addGroup(p,W,M),p+=W,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Oo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(s){const t={};for(let e=0;e<s.length;e++){const n=Pr(s[e]);for(const i in n)t[i]=n[i]}return t}function $_(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Tf(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}const Th={clone:Pr,merge:hn};var Z_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,j_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z_,this.fragmentShader=j_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=$_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Af extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ee,this.projectionMatrix=new Ee,this.projectionMatrixInverse=new Ee,this.coordinateSystem=Pi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new L,Au=new At,Cu=new At;class un extends Af{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yo*2*Math.atan(Math.tan(oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-t/Xi.z)}getViewSize(t,e){return this.getViewBounds(t,Au,Cu),e.subVectors(Cu,Au)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oo*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rr=-90,or=1;class K_ extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new un(rr,or,t,e);i.layers=this.layers,this.add(i);const r=new un(rr,or,t,e);r.layers=this.layers,this.add(r);const o=new un(rr,or,t,e);o.layers=this.layers,this.add(o);const a=new un(rr,or,t,e);a.layers=this.layers,this.add(a);const l=new un(rr,or,t,e);l.layers=this.layers,this.add(l);const c=new un(rr,or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Pi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Na)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),f=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,p),t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Cf extends pn{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:wr,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class J_ extends Bs{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Cf(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ii}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Oo(5,5,5),r=new Ui({name:"CubemapFromEquirect",uniforms:Pr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:fn,blending:Qi});r.uniforms.tEquirect.value=e;const o=new Qt(i,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=ii),new K_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}class In extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q_={type:"move"};class Dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),p=.02,f=.005;c.inputState.pinching&&u>p+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=p-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Q_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new In;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ah{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new kt(t),this.density=e}clone(){return new Ah(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ch extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Yc,this.updateRanges=[],this.version=0,this.uuid=pi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new L;class Zi{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyMatrix4(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.applyNormalMatrix(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)cn.fromBufferAttribute(this,e),cn.transformDirection(t),this.setXYZ(e,cn.x,cn.y,cn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ei(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ei(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ei(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ei(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),i=me(i,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new On(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zi(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ll=new L,eg=new L,ng=new ne;class Ai{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ll.subVectors(n,e).cross(eg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ng.getNormalMatrix(t),i=this.coplanarPoint(Ll).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new Ws,na=new L;class Rh{constructor(t=new Ai,e=new Ai,n=new Ai,i=new Ai,r=new Ai,o=new Ai){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pi){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],p=i[8],f=i[9],_=i[10],g=i[11],m=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,u-c,g-p,v-m).normalize(),n[1].setComponents(l+r,u+c,g+p,v+m).normalize(),n[2].setComponents(l+o,u+h,g+f,v+x).normalize(),n[3].setComponents(l-o,u-h,g-f,v-x).normalize(),n[4].setComponents(l-a,u-d,g-_,v-y).normalize(),e===Pi)n[5].setComponents(l+a,u+d,g+_,v+y).normalize();else if(e===Na)n[5].setComponents(a,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(na.x=i.normal.x>0?t.max.x:t.min.x,na.y=i.normal.y>0?t.max.y:t.min.y,na.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(na)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vr extends kr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const za=new L,Ba=new L,Ru=new Ee,jr=new Qa,ia=new Ws,Il=new L,Pu=new L;class Hr extends We{constructor(t=new be,e=new Vr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)za.fromBufferAttribute(e,i-1),Ba.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=za.distanceTo(Ba);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ia.copy(n.boundingSphere),ia.applyMatrix4(i),ia.radius+=r,t.ray.intersectsSphere(ia)===!1)return;Ru.copy(i).invert(),jr.copy(t.ray).applyMatrix4(Ru);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let _=p,g=f-1;_<g;_+=c){const m=h.getX(_),x=h.getX(_+1),y=sa(this,t,jr,l,m,x,_);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(f-1),g=h.getX(p),m=sa(this,t,jr,l,_,g,f-1);m&&e.push(m)}}else{const p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=p,g=f-1;_<g;_+=c){const m=sa(this,t,jr,l,_,_+1,_);m&&e.push(m)}if(this.isLineLoop){const _=sa(this,t,jr,l,f-1,p,f-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function sa(s,t,e,n,i,r,o){const a=s.geometry.attributes.position;if(za.fromBufferAttribute(a,i),Ba.fromBufferAttribute(a,r),e.distanceSqToSegment(za,Ba,Il,Pu)>n)return;Il.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Il);if(!(c<t.near||c>t.far))return{distance:c,point:Pu.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const Du=new L,Lu=new L;class ig extends Hr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Du.fromBufferAttribute(e,i),Lu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Du.distanceTo(Lu);t.setAttribute("lineDistance",new le(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Rf extends pn{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pf extends pn{constructor(t,e,n,i,r,o,a,l,c,h=gr){if(h!==gr&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gr&&(n=zs),n===void 0&&h===Cr&&(n=Ar),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ri,this.minFilter=l!==void 0?l:ri,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class vi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let i=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],u=n[i+1]-h,p=(o-h)/u;return(i+p)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new At:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,i=[],r=[],o=[],a=new L,l=new Ee;for(let p=0;p<=t;p++){const f=p/t;i[p]=this.getTangentAt(f,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();const f=Math.acos(ie(i[p-1].dot(i[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(a,f))}o[p].crossVectors(i[p],r[p])}if(e===!0){let p=Math.acos(ie(r[0].dot(r[t]),-1,1));p/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let f=1;f<=t;f++)r[f].applyMatrix4(l.makeRotationAxis(i[f],p*f)),o[f].crossVectors(i[f],r[f])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Ph extends vi{constructor(t=0,e=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new At){const n=e,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+t*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,p=c-this.aY;l=u*h-p*d+this.aX,c=u*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class sg extends Ph{constructor(t,e,n,i,r,o){super(t,e,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Dh(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,p=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,p*=h,i(o,a,u,p)},calc:function(r){const o=r*r,a=o*r;return s+t*r+e*o+n*a}}}const ra=new L,Ul=new Dh,Fl=new Dh,Nl=new Dh;class tl extends vi{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){const n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(ra.subVectors(i[0],i[1]).add(i[0]),c=ra);const d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(ra.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=ra),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let f=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(u),p),g=Math.pow(u.distanceToSquared(h),p);_<1e-4&&(_=1),f<1e-4&&(f=_),g<1e-4&&(g=_),Ul.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,f,_,g),Fl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,f,_,g),Nl.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,f,_,g)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Fl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Nl.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Ul.calc(l),Fl.calc(l),Nl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Iu(s,t,e,n,i){const r=(n-t)*.5,o=(i-e)*.5,a=s*s,l=s*a;return(2*e-2*n+r+o)*l+(-3*e+3*n-2*r-o)*a+r*s+e}function rg(s,t){const e=1-s;return e*e*t}function og(s,t){return 2*(1-s)*s*t}function ag(s,t){return s*s*t}function lo(s,t,e,n){return rg(s,t)+og(s,e)+ag(s,n)}function lg(s,t){const e=1-s;return e*e*e*t}function cg(s,t){const e=1-s;return 3*e*e*s*t}function hg(s,t){return 3*(1-s)*s*s*t}function ug(s,t){return s*s*s*t}function co(s,t,e,n,i){return lg(s,t)+cg(s,e)+hg(s,n)+ug(s,i)}class Df extends vi{constructor(t=new At,e=new At,n=new At,i=new At){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new At){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(co(t,i.x,r.x,o.x,a.x),co(t,i.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class dg extends vi{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(co(t,i.x,r.x,o.x,a.x),co(t,i.y,r.y,o.y,a.y),co(t,i.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Lf extends vi{constructor(t=new At,e=new At){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new At){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new At){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fg extends vi{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class If extends vi{constructor(t=new At,e=new At,n=new At){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new At){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lo(t,i.x,r.x,o.x),lo(t,i.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lh extends vi{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,i=this.v0,r=this.v1,o=this.v2;return n.set(lo(t,i.x,r.x,o.x),lo(t,i.y,r.y,o.y),lo(t,i.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Uf extends vi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new At){const n=e,i=this.points,r=(i.length-1)*t,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],d=i[o>i.length-3?i.length-1:o+2];return n.set(Iu(a,l.x,c.x,h.x,d.x),Iu(a,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new At().fromArray(i))}return this}}var qc=Object.freeze({__proto__:null,ArcCurve:sg,CatmullRomCurve3:tl,CubicBezierCurve:Df,CubicBezierCurve3:dg,EllipseCurve:Ph,LineCurve:Lf,LineCurve3:fg,QuadraticBezierCurve:If,QuadraticBezierCurve3:Lh,SplineCurve:Uf});class pg extends vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qc[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new qc[i.type]().fromJSON(i))}return this}}class Uu extends pg{constructor(t){super(),this.type="Path",this.currentPoint=new At,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Lf(this.currentPoint.clone(),new At(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const r=new If(this.currentPoint.clone(),new At(t,e),new At(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,r,o){const a=new Df(this.currentPoint.clone(),new At(t,e),new At(n,i),new At(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Uf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,r,o),this}absarc(t,e,n,i,r,o){return this.absellipse(t,e,n,n,i,r,o),this}ellipse(t,e,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,r,o,a,l),this}absellipse(t,e,n,i,r,o,a,l){const c=new Ph(t,e,n,i,r,o,a,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ih extends be{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new At;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const p=n+d/e*i;c.x=t*Math.cos(p),c.y=t*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[u]/t+1)/2,h.y=(o[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new le(o,3)),this.setAttribute("normal",new le(a,3)),this.setAttribute("uv",new le(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rs extends be{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],d=[],u=[],p=[];let f=0;const _=[],g=n/2;let m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function x(){const v=new L,E=new L;let T=0;const b=(e-t)/n;for(let P=0;P<=r;P++){const M=[],S=P/r,w=S*(e-t)+t;for(let N=0;N<=i;N++){const O=N/i,k=O*l+a,V=Math.sin(k),B=Math.cos(k);E.x=w*V,E.y=-S*n+g,E.z=w*B,d.push(E.x,E.y,E.z),v.set(V,b,B).normalize(),u.push(v.x,v.y,v.z),p.push(O,1-S),M.push(f++)}_.push(M)}for(let P=0;P<i;P++)for(let M=0;M<r;M++){const S=_[M][P],w=_[M+1][P],N=_[M+1][P+1],O=_[M][P+1];(t>0||M!==0)&&(h.push(S,w,O),T+=3),(e>0||M!==r-1)&&(h.push(w,N,O),T+=3)}c.addGroup(m,T,0),m+=T}function y(v){const E=f,T=new At,b=new L;let P=0;const M=v===!0?t:e,S=v===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,g*S,0),u.push(0,S,0),p.push(.5,.5),f++;const w=f;for(let N=0;N<=i;N++){const k=N/i*l+a,V=Math.cos(k),B=Math.sin(k);b.x=M*B,b.y=g*S,b.z=M*V,d.push(b.x,b.y,b.z),u.push(0,S,0),T.x=V*.5+.5,T.y=B*.5*S+.5,p.push(T.x,T.y),f++}for(let N=0;N<i;N++){const O=E+N,k=w+N;v===!0?h.push(k,k+1,O):h.push(k+1,k,O),P+=3}c.addGroup(m,P,v===!0?1:2),m+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uh extends rs{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Uh(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ff extends Uu{constructor(t){super(t),this.uuid=pi(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Uu().fromJSON(i))}return this}}class mg{static triangulate(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let o=Nf(t,0,r,n,!0);const a=[];if(!o||o.next===o.prev)return a;let l,c,h,d,u,p,f;if(i&&(o=yg(t,e,o,n)),t.length>80*n){l=h=t[0],c=d=t[1];for(let _=n;_<r;_+=n)u=t[_],p=t[_+1],u<l&&(l=u),p<c&&(c=p),u>h&&(h=u),p>d&&(d=p);f=Math.max(h-l,d-c),f=f!==0?32767/f:0}return Mo(o,a,n,l,c,f,0),a}}function Nf(s,t,e,n,i){let r,o;if(i===Dg(s,t,e,n)>0)for(r=t;r<e;r+=n)o=Fu(r,s[r],s[r+1],o);else for(r=e-n;r>=t;r-=n)o=Fu(r,s[r],s[r+1],o);return o&&el(o,o.next)&&(Eo(o),o=o.next),o}function Vs(s,t){if(!s)return s;t||(t=s);let e=s,n;do if(n=!1,!e.steiner&&(el(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Eo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mo(s,t,e,n,i,r,o){if(!s)return;!o&&r&&wg(s,n,i,r);let a=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?gg(s,n,i,r):_g(s)){t.push(l.i/e|0),t.push(s.i/e|0),t.push(c.i/e|0),Eo(s),s=c.next,a=c.next;continue}if(s=c,s===a){o?o===1?(s=vg(Vs(s),t,e),Mo(s,t,e,n,i,r,2)):o===2&&xg(s,t,e,n,i,r):Mo(Vs(s),t,e,n,i,r,1);break}}}function _g(s){const t=s.prev,e=s,n=s.next;if(Pe(t,e,n)>=0)return!1;const i=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<r?i<o?i:o:r<o?r:o,d=a<l?a<c?a:c:l<c?l:c,u=i>r?i>o?i:o:r>o?r:o,p=a>l?a>c?a:c:l>c?l:c;let f=n.next;for(;f!==t;){if(f.x>=h&&f.x<=u&&f.y>=d&&f.y<=p&&hr(i,a,r,l,o,c,f.x,f.y)&&Pe(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function gg(s,t,e,n){const i=s.prev,r=s,o=s.next;if(Pe(i,r,o)>=0)return!1;const a=i.x,l=r.x,c=o.x,h=i.y,d=r.y,u=o.y,p=a<l?a<c?a:c:l<c?l:c,f=h<d?h<u?h:u:d<u?d:u,_=a>l?a>c?a:c:l>c?l:c,g=h>d?h>u?h:u:d>u?d:u,m=$c(p,f,t,e,n),x=$c(_,g,t,e,n);let y=s.prevZ,v=s.nextZ;for(;y&&y.z>=m&&v&&v.z<=x;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=g&&y!==i&&y!==o&&hr(a,h,l,d,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=p&&v.x<=_&&v.y>=f&&v.y<=g&&v!==i&&v!==o&&hr(a,h,l,d,c,u,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=p&&y.x<=_&&y.y>=f&&y.y<=g&&y!==i&&y!==o&&hr(a,h,l,d,c,u,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=p&&v.x<=_&&v.y>=f&&v.y<=g&&v!==i&&v!==o&&hr(a,h,l,d,c,u,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function vg(s,t,e){let n=s;do{const i=n.prev,r=n.next.next;!el(i,r)&&Of(i,n,n.next,r)&&So(i,r)&&So(r,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Eo(n),Eo(n.next),n=s=r),n=n.next}while(n!==s);return Vs(n)}function xg(s,t,e,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Cg(o,a)){let l=zf(o,a);o=Vs(o,o.next),l=Vs(l,l.next),Mo(o,t,e,n,i,r,0),Mo(l,t,e,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function yg(s,t,e,n){const i=[];let r,o,a,l,c;for(r=0,o=t.length;r<o;r++)a=t[r]*n,l=r<o-1?t[r+1]*n:s.length,c=Nf(s,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ag(c));for(i.sort(Mg),r=0;r<i.length;r++)e=Sg(i[r],e);return e}function Mg(s,t){return s.x-t.x}function Sg(s,t){const e=Eg(s,t);if(!e)return t;const n=zf(e,s);return Vs(n,n.next),Vs(e,e.next)}function Eg(s,t){let e=t,n=-1/0,i;const r=s.x,o=s.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const u=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,i=e.x<e.next.x?e:e.next,u===r))return i}e=e.next}while(e!==t);if(!i)return null;const a=i,l=i.x,c=i.y;let h=1/0,d;e=i;do r>=e.x&&e.x>=l&&r!==e.x&&hr(o<c?r:n,o,l,c,o<c?n:r,o,e.x,e.y)&&(d=Math.abs(o-e.y)/(r-e.x),So(e,s)&&(d<h||d===h&&(e.x>i.x||e.x===i.x&&bg(i,e)))&&(i=e,h=d)),e=e.next;while(e!==a);return i}function bg(s,t){return Pe(s.prev,s,t.prev)<0&&Pe(t.next,s,s.next)<0}function wg(s,t,e,n){let i=s;do i.z===0&&(i.z=$c(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Tg(i)}function Tg(s){let t,e,n,i,r,o,a,l,c=1;do{for(e=s,s=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;e=n}r.nextZ=null,c*=2}while(o>1);return s}function $c(s,t,e,n,i){return s=(s-e)*i|0,t=(t-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,s|t<<1}function Ag(s){let t=s,e=s;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==s);return e}function hr(s,t,e,n,i,r,o,a){return(i-o)*(t-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(i-o)*(n-a)}function Cg(s,t){return s.next.i!==t.i&&s.prev.i!==t.i&&!Rg(s,t)&&(So(s,t)&&So(t,s)&&Pg(s,t)&&(Pe(s.prev,s,t.prev)||Pe(s,t.prev,t))||el(s,t)&&Pe(s.prev,s,s.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(s,t,e){return(t.y-s.y)*(e.x-t.x)-(t.x-s.x)*(e.y-t.y)}function el(s,t){return s.x===t.x&&s.y===t.y}function Of(s,t,e,n){const i=aa(Pe(s,t,e)),r=aa(Pe(s,t,n)),o=aa(Pe(e,n,s)),a=aa(Pe(e,n,t));return!!(i!==r&&o!==a||i===0&&oa(s,e,t)||r===0&&oa(s,n,t)||o===0&&oa(e,s,n)||a===0&&oa(e,t,n))}function oa(s,t,e){return t.x<=Math.max(s.x,e.x)&&t.x>=Math.min(s.x,e.x)&&t.y<=Math.max(s.y,e.y)&&t.y>=Math.min(s.y,e.y)}function aa(s){return s>0?1:s<0?-1:0}function Rg(s,t){let e=s;do{if(e.i!==s.i&&e.next.i!==s.i&&e.i!==t.i&&e.next.i!==t.i&&Of(e,e.next,s,t))return!0;e=e.next}while(e!==s);return!1}function So(s,t){return Pe(s.prev,s,s.next)<0?Pe(s,t,s.next)>=0&&Pe(s,s.prev,t)>=0:Pe(s,t,s.prev)<0||Pe(s,s.next,t)<0}function Pg(s,t){let e=s,n=!1;const i=(s.x+t.x)/2,r=(s.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&i<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==s);return n}function zf(s,t){const e=new Zc(s.i,s.x,s.y),n=new Zc(t.i,t.x,t.y),i=s.next,r=t.prev;return s.next=t,t.prev=s,e.next=i,i.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fu(s,t,e,n){const i=new Zc(s,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Eo(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Zc(s,t,e){this.i=s,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Dg(s,t,e,n){let i=0;for(let r=t,o=e-n;r<e;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}class ho{static area(t){const e=t.length;let n=0;for(let i=e-1,r=0;r<e;i=r++)n+=t[i].x*t[r].y-t[r].x*t[i].y;return n*.5}static isClockWise(t){return ho.area(t)<0}static triangulateShape(t,e){const n=[],i=[],r=[];Nu(t),Ou(n,t);let o=t.length;e.forEach(Nu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ou(n,e[l]);const a=mg.triangulate(n,i);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}}function Nu(s){const t=s.length;t>2&&s[t-1].equals(s[0])&&s.pop()}function Ou(s,t){for(let e=0;e<t.length;e++)s.push(t[e].x),s.push(t[e].y)}class $n extends be{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,p=[],f=[],_=[],g=[];for(let m=0;m<h;m++){const x=m*u-o;for(let y=0;y<c;y++){const v=y*d-r;f.push(v,-x,0),_.push(0,0,1),g.push(y/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){const y=x+c*m,v=x+c*(m+1),E=x+1+c*(m+1),T=x+1+c*m;p.push(y,v,T),p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $n(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fh extends be{constructor(t=new Ff([new At(0,.5),new At(-.5,-.5),new At(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],r=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new le(i,3)),this.setAttribute("normal",new le(r,3)),this.setAttribute("uv",new le(o,2));function c(h){const d=i.length/3,u=h.extractPoints(e);let p=u.shape;const f=u.holes;ho.isClockWise(p)===!1&&(p=p.reverse());for(let g=0,m=f.length;g<m;g++){const x=f[g];ho.isClockWise(x)===!0&&(f[g]=x.reverse())}const _=ho.triangulateShape(p,f);for(let g=0,m=f.length;g<m;g++){const x=f[g];p=p.concat(x)}for(let g=0,m=p.length;g<m;g++){const x=p[g];i.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let g=0,m=_.length;g<m;g++){const x=_[g],y=x[0]+d,v=x[1]+d,E=x[2]+d;n.push(y,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Lg(e,t)}static fromJSON(t,e){const n=[];for(let i=0,r=t.shapes.length;i<r;i++){const o=e[t.shapes[i]];n.push(o)}return new Fh(n,t.curveSegments)}}function Lg(s,t){if(t.shapes=[],Array.isArray(s))for(let e=0,n=s.length;e<n;e++){const i=s[e];t.shapes.push(i.uuid)}else t.shapes.push(s.uuid);return t}class us extends be{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],d=new L,u=new L,p=[],f=[],_=[],g=[];for(let m=0;m<=n;m++){const x=[],y=m/n;let v=0;m===0&&o===0?v=.5/e:m===n&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const T=E/e;d.x=-t*Math.cos(i+T*r)*Math.sin(o+y*a),d.y=t*Math.cos(o+y*a),d.z=t*Math.sin(i+T*r)*Math.sin(o+y*a),f.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),g.push(T+v,1-y),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<e;x++){const y=h[m][x+1],v=h[m][x],E=h[m+1][x],T=h[m+1][x+1];(m!==0||o>0)&&p.push(y,v,T),(m!==n-1||l<Math.PI)&&p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new le(f,3)),this.setAttribute("normal",new le(_,3)),this.setAttribute("uv",new le(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new us(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gr extends be{constructor(t=new Lh(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:r};const o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new L,l=new L,c=new At;let h=new L;const d=[],u=[],p=[],f=[];_(),this.setIndex(f),this.setAttribute("position",new le(d,3)),this.setAttribute("normal",new le(u,3)),this.setAttribute("uv",new le(p,2));function _(){for(let y=0;y<e;y++)g(y);g(r===!1?e:0),x(),m()}function g(y){h=t.getPointAt(y/e,h);const v=o.normals[y],E=o.binormals[y];for(let T=0;T<=i;T++){const b=T/i*Math.PI*2,P=Math.sin(b),M=-Math.cos(b);l.x=M*v.x+P*E.x,l.y=M*v.y+P*E.y,l.z=M*v.z+P*E.z,l.normalize(),u.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,d.push(a.x,a.y,a.z)}}function m(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){const E=(i+1)*(y-1)+(v-1),T=(i+1)*y+(v-1),b=(i+1)*y+v,P=(i+1)*(y-1)+v;f.push(E,T,P),f.push(T,b,P)}}function x(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)c.x=y/e,c.y=v/i,p.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Gr(new qc[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ig extends be{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const e=[],n=new Set,i=new L,r=new L;if(t.index!==null){const o=t.attributes.position,a=t.index;let l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const d=l[c],u=d.start,p=d.count;for(let f=u,_=u+p;f<_;f+=3)for(let g=0;g<3;g++){const m=a.getX(f+g),x=a.getX(f+(g+1)%3);i.fromBufferAttribute(o,m),r.fromBufferAttribute(o,x),zu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{const o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){const h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),zu(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new le(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function zu(s,t,e){const n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}class yn extends kr{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vf,this.normalScale=new At(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=_h,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ug extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=e_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Fg extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Bf extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ol=new Ee,Bu=new L,ku=new L;class Ng{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new Ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Rh,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Bu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bu),ku.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ku),e.updateMatrixWorld(),Ol.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ol),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ol)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class kf extends Af{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Og extends Ng{constructor(){super(new kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Dr extends Bf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new Og}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nh extends Bf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zg extends be{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){const t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}class Bg extends un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}class jc extends tg{constructor(t,e,n=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}const Vu=new Ee;class Vf{constructor(t,e,n=0,i=1/0){this.ray=new Qa(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new wh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vu),this}intersectObject(t,e=!0,n=[]){return Kc(t,this,n,e),n.sort(Hu),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Kc(t[i],this,n,e);return n.sort(Hu),n}}function Hu(s,t){return s.distance-t.distance}function Kc(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Kc(r[o],t,e,!0)}}class ka{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ie(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Gu=new L,la=new L;class kg{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Gu.subVectors(t,this.start),la.subVectors(this.end,this.start);const n=la.dot(la);let r=la.dot(Gu)/n;return e&&(r=ie(r,0,1)),r}closestPointToPoint(t,e,n){const i=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class Vg extends ig{constructor(t=10,e=10,n=4473924,i=8947848){n=new kt(n),i=new kt(i);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let u=0,p=0,f=-a;u<=e;u++,f+=o){l.push(-a,0,f,a,0,f),l.push(f,0,-a,f,0,a);const _=u===r?n:i;_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3,_.toArray(c,p),p+=3}const h=new be;h.setAttribute("position",new le(l,3)),h.setAttribute("color",new le(c,3));const d=new Vr({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Wu=new L;let ca,zl;class Hg extends We{constructor(t=new L(0,0,1),e=new L(0,0,0),n=1,i=16776960,r=n*.2,o=r*.2){super(),this.type="ArrowHelper",ca===void 0&&(ca=new be,ca.setAttribute("position",new le([0,0,0,0,1,0],3)),zl=new rs(0,.5,1,5,1),zl.translate(0,-.5,0)),this.position.copy(e),this.line=new Hr(ca,new Vr({color:i,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Qt(zl,new Nn({color:i,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(n,r,o)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{Wu.set(t.z,0,-t.x).normalize();const e=Math.acos(t.y);this.quaternion.setFromAxisAngle(Wu,e)}}setLength(t,e=t*.2,n=e*.2){this.line.scale.set(1,Math.max(1e-4,t-e),1),this.line.updateMatrix(),this.cone.scale.set(n,e,n),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Gg extends Gs{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function Xu(s,t,e,n){const i=Wg(n);switch(e){case uf:return s*t;case ff:return s*t;case pf:return s*t*2;case mf:return s*t/i.components*i.byteLength;case yh:return s*t/i.components*i.byteLength;case _f:return s*t*2/i.components*i.byteLength;case Mh:return s*t*2/i.components*i.byteLength;case df:return s*t*3/i.components*i.byteLength;case si:return s*t*4/i.components*i.byteLength;case Sh:return s*t*4/i.components*i.byteLength;case ya:case Ma:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Sa:case Ea:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Mc:case Ec:return Math.max(s,16)*Math.max(t,8)/4;case yc:case Sc:return Math.max(s,8)*Math.max(t,8)/2;case bc:case wc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Tc:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ac:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Cc:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Rc:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Pc:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Dc:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Lc:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Ic:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Uc:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Fc:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Nc:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Oc:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case zc:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Bc:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case kc:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case ba:case Vc:case Hc:return Math.ceil(s/4)*Math.ceil(t/4)*16;case gf:case Gc:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Wc:case Xc:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wg(s){switch(s){case Ii:case lf:return{byteLength:1,components:1};case xo:case cf:case No:return{byteLength:2,components:1};case vh:case xh:return{byteLength:2,components:4};case zs:case gh:case Ri:return{byteLength:4,components:1};case hf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Hf(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Xg(s){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((p,f)=>p.start-f.start);let u=0;for(let p=1;p<d.length;p++){const f=d[u],_=d[p];_.start<=f.start+f.count+1?f.count=Math.max(f.count,_.start+_.count-f.start):(++u,d[u]=_)}d.length=u+1;for(let p=0,f=d.length;p<f;p++){const _=d[p];s.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Yg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qg=`#ifdef USE_ALPHAHASH
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
#endif`,$g=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jg=`#ifdef USE_AOMAP
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
#endif`,Qg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,t0=`#ifdef USE_BATCHING
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
#endif`,e0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,i0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,s0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r0=`#ifdef USE_IRIDESCENCE
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
#endif`,o0=`#ifdef USE_BUMPMAP
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,m0=`#define PI 3.141592653589793
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
} // validated`,_0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,g0=`vec3 transformedNormal = objectNormal;
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
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,M0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,S0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,L0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,F0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,N0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,O0=`uniform bool receiveShadow;
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
#endif`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,k0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,G0=`PhysicalMaterial material;
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
#endif`,W0=`struct PhysicalMaterial {
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
}`,X0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ev=`#if defined( USE_POINTS_UV )
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
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ov=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,av=`#ifdef USE_MORPHTARGETS
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
#endif`,lv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
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
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_v=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ev=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pv=`float getShadowMask() {
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
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ov=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
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
#endif`,kv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
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
}`,qv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`#include <common>
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
}`,Jv=`#if DEPTH_PACKING == 3200
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
}`,Qv=`#define DISTANCE
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
}`,tx=`#define DISTANCE
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
}`,ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,sx=`uniform vec3 diffuse;
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
}`,rx=`#include <common>
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
}`,ox=`uniform vec3 diffuse;
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
}`,ax=`#define LAMBERT
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
}`,lx=`#define LAMBERT
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
}`,cx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,ux=`#define NORMAL
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
}`,dx=`#define NORMAL
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
}`,fx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,_x=`#define STANDARD
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
}`,gx=`#define TOON
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
}`,vx=`#define TOON
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
}`,xx=`uniform float size;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Mx=`#include <common>
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
}`,Sx=`uniform vec3 color;
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
}`,Ex=`uniform float rotation;
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
}`,bx=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Yg,alphahash_pars_fragment:qg,alphamap_fragment:$g,alphamap_pars_fragment:Zg,alphatest_fragment:jg,alphatest_pars_fragment:Kg,aomap_fragment:Jg,aomap_pars_fragment:Qg,batching_pars_vertex:t0,batching_vertex:e0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:s0,iridescence_fragment:r0,bumpmap_pars_fragment:o0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:h0,color_fragment:u0,color_pars_fragment:d0,color_pars_vertex:f0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:_0,defaultnormal_vertex:g0,displacementmap_pars_vertex:v0,displacementmap_vertex:x0,emissivemap_fragment:y0,emissivemap_pars_fragment:M0,colorspace_fragment:S0,colorspace_pars_fragment:E0,envmap_fragment:b0,envmap_common_pars_fragment:w0,envmap_pars_fragment:T0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:z0,envmap_vertex:C0,fog_vertex:R0,fog_pars_vertex:P0,fog_fragment:D0,fog_pars_fragment:L0,gradientmap_pars_fragment:I0,lightmap_pars_fragment:U0,lights_lambert_fragment:F0,lights_lambert_pars_fragment:N0,lights_pars_begin:O0,lights_toon_fragment:B0,lights_toon_pars_fragment:k0,lights_phong_fragment:V0,lights_phong_pars_fragment:H0,lights_physical_fragment:G0,lights_physical_pars_fragment:W0,lights_fragment_begin:X0,lights_fragment_maps:Y0,lights_fragment_end:q0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:j0,logdepthbuf_vertex:K0,map_fragment:J0,map_pars_fragment:Q0,map_particle_fragment:tv,map_particle_pars_fragment:ev,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:sv,morphcolor_vertex:rv,morphnormal_vertex:ov,morphtarget_pars_vertex:av,morphtarget_vertex:lv,normal_fragment_begin:cv,normal_fragment_maps:hv,normal_pars_fragment:uv,normal_pars_vertex:dv,normal_vertex:fv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:_v,clearcoat_pars_fragment:gv,iridescence_pars_fragment:vv,opaque_fragment:xv,packing:yv,premultiplied_alpha_fragment:Mv,project_vertex:Sv,dithering_fragment:Ev,dithering_pars_fragment:bv,roughnessmap_fragment:wv,roughnessmap_pars_fragment:Tv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:Cv,shadowmap_vertex:Rv,shadowmask_pars_fragment:Pv,skinbase_vertex:Dv,skinning_pars_vertex:Lv,skinning_vertex:Iv,skinnormal_vertex:Uv,specularmap_fragment:Fv,specularmap_pars_fragment:Nv,tonemapping_fragment:Ov,tonemapping_pars_fragment:zv,transmission_fragment:Bv,transmission_pars_fragment:kv,uv_pars_fragment:Vv,uv_pars_vertex:Hv,uv_vertex:Gv,worldpos_vertex:Wv,background_vert:Xv,background_frag:Yv,backgroundCube_vert:qv,backgroundCube_frag:$v,cube_vert:Zv,cube_frag:jv,depth_vert:Kv,depth_frag:Jv,distanceRGBA_vert:Qv,distanceRGBA_frag:tx,equirect_vert:ex,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:sx,meshbasic_vert:rx,meshbasic_frag:ox,meshlambert_vert:ax,meshlambert_frag:lx,meshmatcap_vert:cx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:dx,meshphong_vert:fx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:_x,meshtoon_vert:gx,meshtoon_frag:vx,points_vert:xx,points_frag:yx,shadow_vert:Mx,shadow_frag:Sx,sprite_vert:Ex,sprite_frag:bx},Et={common:{diffuse:{value:new kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new kt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},vn={basic:{uniforms:hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new kt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:hn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new kt(0)},specular:{value:new kt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:hn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:hn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:hn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:hn([Et.points,Et.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:hn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:hn([Et.common,Et.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:hn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:hn([Et.sprite,Et.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:hn([Et.common,Et.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:hn([Et.lights,Et.fog,{color:{value:new kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};vn.physical={uniforms:hn([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new kt(0)},specularColor:{value:new kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const ha={r:0,b:0,g:0},vs=new _i,wx=new Ee;function Tx(s,t,e,n,i,r,o){const a=new kt(0);let l=r===!0?0:1,c,h,d=null,u=0,p=null;function f(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const E=f(y);E===null?m(a,l):E&&E.isColor&&(m(E,1),v=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(y,v){const E=f(v);E&&(E.isCubeTexture||E.mapping===Ja)?(h===void 0&&(h=new Qt(new Oo(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:Pr(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),vs.copy(v.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wx.makeRotationFromEuler(vs)),h.material.toneMapped=ue.getTransfer(E.colorSpace)!==_e,(d!==E||u!==E.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,p=s.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Qt(new $n(2,2),new Ui({name:"BackgroundMaterial",uniforms:Pr(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ue.getTransfer(E.colorSpace)!==_e,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,p=s.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,v){y.getRGB(ha,Tf(s)),n.buffers.color.setClear(ha.r,ha.g,ha.b,v,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,v=1){a.set(y),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(a,l)},render:_,addToRenderList:g,dispose:x}}function Ax(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,o=!1;function a(S,w,N,O,k){let V=!1;const B=d(O,N,w);r!==B&&(r=B,c(r.object)),V=p(S,O,N,k),V&&f(S,O,N,k),k!==null&&t.update(k,s.ELEMENT_ARRAY_BUFFER),(V||o)&&(o=!1,v(S,w,N,O),k!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return s.createVertexArray()}function c(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function d(S,w,N){const O=N.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let V=k[w.id];V===void 0&&(V={},k[w.id]=V);let B=V[O];return B===void 0&&(B=u(l()),V[O]=B),B}function u(S){const w=[],N=[],O=[];for(let k=0;k<e;k++)w[k]=0,N[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:N,attributeDivisors:O,object:S,attributes:{},index:null}}function p(S,w,N,O){const k=r.attributes,V=w.attributes;let B=0;const G=N.getAttributes();for(const W in G)if(G[W].location>=0){const it=k[W];let pt=V[W];if(pt===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(pt=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(pt=S.instanceColor)),it===void 0||it.attribute!==pt||pt&&it.data!==pt.data)return!0;B++}return r.attributesNum!==B||r.index!==O}function f(S,w,N,O){const k={},V=w.attributes;let B=0;const G=N.getAttributes();for(const W in G)if(G[W].location>=0){let it=V[W];it===void 0&&(W==="instanceMatrix"&&S.instanceMatrix&&(it=S.instanceMatrix),W==="instanceColor"&&S.instanceColor&&(it=S.instanceColor));const pt={};pt.attribute=it,it&&it.data&&(pt.data=it.data),k[W]=pt,B++}r.attributes=k,r.attributesNum=B,r.index=O}function _(){const S=r.newAttributes;for(let w=0,N=S.length;w<N;w++)S[w]=0}function g(S){m(S,0)}function m(S,w){const N=r.newAttributes,O=r.enabledAttributes,k=r.attributeDivisors;N[S]=1,O[S]===0&&(s.enableVertexAttribArray(S),O[S]=1),k[S]!==w&&(s.vertexAttribDivisor(S,w),k[S]=w)}function x(){const S=r.newAttributes,w=r.enabledAttributes;for(let N=0,O=w.length;N<O;N++)w[N]!==S[N]&&(s.disableVertexAttribArray(N),w[N]=0)}function y(S,w,N,O,k,V,B){B===!0?s.vertexAttribIPointer(S,w,N,k,V):s.vertexAttribPointer(S,w,N,O,k,V)}function v(S,w,N,O){_();const k=O.attributes,V=N.getAttributes(),B=w.defaultAttributeValues;for(const G in V){const W=V[G];if(W.location>=0){let st=k[G];if(st===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const it=st.normalized,pt=st.itemSize,yt=t.get(st);if(yt===void 0)continue;const zt=yt.buffer,K=yt.type,et=yt.bytesPerElement,dt=K===s.INT||K===s.UNSIGNED_INT||st.gpuType===gh;if(st.isInterleavedBufferAttribute){const ct=st.data,Ct=ct.stride,Yt=st.offset;if(ct.isInstancedInterleavedBuffer){for(let vt=0;vt<W.locationSize;vt++)m(W.location+vt,ct.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let vt=0;vt<W.locationSize;vt++)g(W.location+vt);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let vt=0;vt<W.locationSize;vt++)y(W.location+vt,pt/W.locationSize,K,it,Ct*et,(Yt+pt/W.locationSize*vt)*et,dt)}else{if(st.isInstancedBufferAttribute){for(let ct=0;ct<W.locationSize;ct++)m(W.location+ct,st.meshPerAttribute);S.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ct=0;ct<W.locationSize;ct++)g(W.location+ct);s.bindBuffer(s.ARRAY_BUFFER,zt);for(let ct=0;ct<W.locationSize;ct++)y(W.location+ct,pt/W.locationSize,K,it,pt*et,pt/W.locationSize*ct*et,dt)}}else if(B!==void 0){const it=B[G];if(it!==void 0)switch(it.length){case 2:s.vertexAttrib2fv(W.location,it);break;case 3:s.vertexAttrib3fv(W.location,it);break;case 4:s.vertexAttrib4fv(W.location,it);break;default:s.vertexAttrib1fv(W.location,it)}}}}x()}function E(){P();for(const S in n){const w=n[S];for(const N in w){const O=w[N];for(const k in O)h(O[k].object),delete O[k];delete w[N]}delete n[S]}}function T(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const N in w){const O=w[N];for(const k in O)h(O[k].object),delete O[k];delete w[N]}delete n[S.id]}function b(S){for(const w in n){const N=n[w];if(N[S.id]===void 0)continue;const O=N[S.id];for(const k in O)h(O[k].object),delete O[k];delete N[S.id]}}function P(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:g,disableUnusedAttributes:x}}function Cx(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(s.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let f=0;f<d;f++)p+=h[f];e.update(p,n,1)}function l(c,h,d,u){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<c.length;f++)o(c[f],h[f],u[f]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_]*u[_];e.update(f,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Rx(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==si&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const P=b===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Ii&&n.convert(b)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ri&&!P)}function l(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),E=f>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:p,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function Px(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Ai,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,p){const f=d.clippingPlanes,_=d.clipIntersection,g=d.clipShadows,m=s.get(d);if(!i||f===null||f.length===0||r&&!g)r?h(null):c();else{const x=r?0:n,y=x*4;let v=m.clippingState||null;l.value=v,v=h(f,u,y,p);for(let E=0;E!==y;++E)v[E]=e[E];m.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,p,f){const _=d!==null?d.length:0;let g=null;if(_!==0){if(g=l.value,f!==!0||g===null){const m=p+_*4,x=u.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,v=p;y!==_;++y,v+=4)o.copy(d[y]).applyMatrix4(x,a),o.normal.toArray(g,v),g[v+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Dx(s){let t=new WeakMap;function e(o,a){return a===gc?o.mapping=wr:a===vc&&(o.mapping=Tr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===gc||a===vc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new J_(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const ur=4,Yu=[.125,.215,.35,.446,.526,.582],Cs=20,Bl=new kf,qu=new kt;let kl=null,Vl=0,Hl=0,Gl=!1;const bs=(1+Math.sqrt(5))/2,ar=1/bs,$u=[new L(-bs,ar,0),new L(bs,ar,0),new L(-ar,0,bs),new L(ar,0,bs),new L(0,bs,-ar),new L(0,bs,ar),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Lx=new L;class Zu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100,r={}){const{size:o=256,position:a=Lx}=r;kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ju(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,Vl,Hl),this._renderer.xr.enabled=Gl,t.scissorTest=!1,ua(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===wr||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Hl=this._renderer.getActiveMipmapLevel(),Gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:No,format:si,colorSpace:Rr,depthBuffer:!1},i=ju(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ju(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ix(r)),this._blurMaterial=Ux(r,t,e)}return i}_compileMaterial(t){const e=new Qt(this._lodPlanes[0],t);this._renderer.compile(e,Bl)}_sceneToCubeUV(t,e,n,i,r){const l=new un(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,p=d.toneMapping;d.getClearColor(qu),d.toneMapping=ts,d.autoClear=!1;const f=new Nn({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1}),_=new Qt(new Oo,f);let g=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(qu),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[x],r.y,r.z)):y===1?(l.up.set(0,0,c[x]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[x],r.z)):(l.up.set(0,c[x],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[x]));const v=this._cubeSize;ua(i,y*v,x>2?v:0,v,v),d.setRenderTarget(i),g&&d.render(_,l),d.render(t,l)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=p,d.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===wr||t.mapping===Tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ju()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ku());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Qt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;ua(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Bl)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=$u[(i-r-1)%$u.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Qt(this._lodPlanes[i],c),u=c.uniforms,p=this._sizeLods[n]-1,f=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Cs-1),_=r/f,g=isFinite(r)?1+Math.floor(h*_):Cs;g>Cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cs}`);const m=[];let x=0;for(let b=0;b<Cs;++b){const P=b/_,M=Math.exp(-P*P/2);m.push(M),b===0?x+=M:b<g&&(x+=2*M)}for(let b=0;b<m.length;b++)m[b]=m[b]/x;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:y}=this;u.dTheta.value=f,u.mipInt.value=y-n;const v=this._sizeLods[i],E=3*v*(i>y-ur?i-y+ur:0),T=4*(this._cubeSize-v);ua(e,E,T,3*v,2*v),l.setRenderTarget(e),l.render(d,Bl)}}function Ix(s){const t=[],e=[],n=[];let i=s;const r=s-ur+1+Yu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ur?l=Yu[o-s+ur-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,f=6,_=3,g=2,m=1,x=new Float32Array(_*f*p),y=new Float32Array(g*f*p),v=new Float32Array(m*f*p);for(let T=0;T<p;T++){const b=T%3*2/3-1,P=T>2?0:-1,M=[b,P,0,b+2/3,P,0,b+2/3,P+1,0,b,P,0,b+2/3,P+1,0,b,P+1,0];x.set(M,_*f*T),y.set(u,g*f*T);const S=[T,T,T,T,T,T];v.set(S,m*f*T)}const E=new be;E.setAttribute("position",new On(x,_)),E.setAttribute("uv",new On(y,g)),E.setAttribute("faceIndex",new On(v,m)),t.push(E),i>ur&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ju(s,t,e){const n=new Bs(s,t,e);return n.texture.mapping=Ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ua(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Ux(s,t,e){const n=new Float32Array(Cs),i=new L(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ku(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Oh(),fragmentShader:`

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
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Ju(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Oh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qi,depthTest:!1,depthWrite:!1})}function Oh(){return`

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
	`}function Fx(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===gc||l===vc,h=l===wr||l===Tr;if(c||h){let d=t.get(a);const u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Zu(s)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new Zu(s)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nx(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&Es("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ox(s,t,e,n){const i={},r=new WeakMap;function o(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const f in u.attributes)t.remove(u.attributes[f]);u.removeEventListener("dispose",o),delete i[u.id];const p=r.get(u);p&&(t.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const p in u)t.update(u[p],s.ARRAY_BUFFER)}function c(d){const u=[],p=d.index,f=d.attributes.position;let _=0;if(p!==null){const x=p.array;_=p.version;for(let y=0,v=x.length;y<v;y+=3){const E=x[y+0],T=x[y+1],b=x[y+2];u.push(E,T,T,b,b,E)}}else if(f!==void 0){const x=f.array;_=f.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const E=y+0,T=y+1,b=y+2;u.push(E,T,T,b,b,E)}}else return;const g=new(Mf(u)?wf:bf)(u,1);g.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,g)}function h(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function zx(s,t,e){let n;function i(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,p){s.drawElements(n,p,r,u*o),e.update(p,n,1)}function c(u,p,f){f!==0&&(s.drawElementsInstanced(n,p,r,u*o,f),e.update(p,n,f))}function h(u,p,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,u,0,f);let g=0;for(let m=0;m<f;m++)g+=p[m];e.update(g,n,1)}function d(u,p,f,_){if(f===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)c(u[m]/o,p[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(n,p,0,r,u,0,_,0,f);let m=0;for(let x=0;x<f;x++)m+=p[x]*_[x];e.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Bx(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function kx(s,t,e){const n=new WeakMap,i=new Me;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(a);if(u===void 0||u.count!==d){let S=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var p=S;u!==void 0&&u.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;f===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let E=a.attributes.position.count*v,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const b=new Float32Array(E*T*4*d),P=new Sf(b,E,T,d);P.type=Ri,P.needsUpdate=!0;const M=v*4;for(let w=0;w<d;w++){const N=m[w],O=x[w],k=y[w],V=E*T*4*w;for(let B=0;B<N.count;B++){const G=B*M;f===!0&&(i.fromBufferAttribute(N,B),b[V+G+0]=i.x,b[V+G+1]=i.y,b[V+G+2]=i.z,b[V+G+3]=0),_===!0&&(i.fromBufferAttribute(O,B),b[V+G+4]=i.x,b[V+G+5]=i.y,b[V+G+6]=i.z,b[V+G+7]=0),g===!0&&(i.fromBufferAttribute(k,B),b[V+G+8]=i.x,b[V+G+9]=i.y,b[V+G+10]=i.z,b[V+G+11]=k.itemSize===4?i.w:1)}}u={count:d,texture:P,size:new At(E,T)},n.set(a,u),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Vx(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}const Gf=new pn,Qu=new Pf(1,1),Wf=new Sf,Xf=new N_,Yf=new Cf,td=[],ed=[],nd=new Float32Array(16),id=new Float32Array(9),sd=new Float32Array(4);function Wr(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=td[i];if(r===void 0&&(r=new Float32Array(i),td[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Ve(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function He(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function nl(s,t){let e=ed[t];e===void 0&&(e=new Int32Array(t),ed[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Hx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Gx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2fv(this.addr,t),He(e,t)}}function Wx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ve(e,t))return;s.uniform3fv(this.addr,t),He(e,t)}}function Xx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4fv(this.addr,t),He(e,t)}}function Yx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;sd.set(n),s.uniformMatrix2fv(this.addr,!1,sd),He(e,n)}}function qx(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;id.set(n),s.uniformMatrix3fv(this.addr,!1,id),He(e,n)}}function $x(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ve(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),He(e,t)}else{if(Ve(e,n))return;nd.set(n),s.uniformMatrix4fv(this.addr,!1,nd),He(e,n)}}function Zx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2iv(this.addr,t),He(e,t)}}function Kx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3iv(this.addr,t),He(e,t)}}function Jx(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4iv(this.addr,t),He(e,t)}}function Qx(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ty(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ve(e,t))return;s.uniform2uiv(this.addr,t),He(e,t)}}function ey(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ve(e,t))return;s.uniform3uiv(this.addr,t),He(e,t)}}function ny(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ve(e,t))return;s.uniform4uiv(this.addr,t),He(e,t)}}function iy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Qu.compareFunction=xf,r=Qu):r=Gf,e.setTexture2D(t||r,i)}function sy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Xf,i)}function ry(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Yf,i)}function oy(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Wf,i)}function ay(s){switch(s){case 5126:return Hx;case 35664:return Gx;case 35665:return Wx;case 35666:return Xx;case 35674:return Yx;case 35675:return qx;case 35676:return $x;case 5124:case 35670:return Zx;case 35667:case 35671:return jx;case 35668:case 35672:return Kx;case 35669:case 35673:return Jx;case 5125:return Qx;case 36294:return ty;case 36295:return ey;case 36296:return ny;case 35678:case 36198:case 36298:case 36306:case 35682:return iy;case 35679:case 36299:case 36307:return sy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return oy}}function ly(s,t){s.uniform1fv(this.addr,t)}function cy(s,t){const e=Wr(t,this.size,2);s.uniform2fv(this.addr,e)}function hy(s,t){const e=Wr(t,this.size,3);s.uniform3fv(this.addr,e)}function uy(s,t){const e=Wr(t,this.size,4);s.uniform4fv(this.addr,e)}function dy(s,t){const e=Wr(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function fy(s,t){const e=Wr(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function py(s,t){const e=Wr(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function my(s,t){s.uniform1iv(this.addr,t)}function _y(s,t){s.uniform2iv(this.addr,t)}function gy(s,t){s.uniform3iv(this.addr,t)}function vy(s,t){s.uniform4iv(this.addr,t)}function xy(s,t){s.uniform1uiv(this.addr,t)}function yy(s,t){s.uniform2uiv(this.addr,t)}function My(s,t){s.uniform3uiv(this.addr,t)}function Sy(s,t){s.uniform4uiv(this.addr,t)}function Ey(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Gf,r[o])}function by(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Xf,r[o])}function wy(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Yf,r[o])}function Ty(s,t,e){const n=this.cache,i=t.length,r=nl(e,i);Ve(n,r)||(s.uniform1iv(this.addr,r),He(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Wf,r[o])}function Ay(s){switch(s){case 5126:return ly;case 35664:return cy;case 35665:return hy;case 35666:return uy;case 35674:return dy;case 35675:return fy;case 35676:return py;case 5124:case 35670:return my;case 35667:case 35671:return _y;case 35668:case 35672:return gy;case 35669:case 35673:return vy;case 5125:return xy;case 36294:return yy;case 36295:return My;case 36296:return Sy;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return by;case 35680:case 36300:case 36308:case 36293:return wy;case 36289:case 36303:case 36311:case 36292:return Ty}}class Cy{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=ay(e.type)}}class Ry{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ay(e.type)}}class Py{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Wl=/(\w+)(\])?(\[|\.)?/g;function rd(s,t){s.seq.push(t),s.map[t.id]=t}function Dy(s,t,e){const n=s.name,i=n.length;for(Wl.lastIndex=0;;){const r=Wl.exec(n),o=Wl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){rd(e,c===void 0?new Cy(a,s,t):new Ry(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new Py(a),rd(e,d)),e=d}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Dy(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function od(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Ly=37297;let Iy=0;function Uy(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const ad=new ne;function Fy(s){ue._getMatrix(ad,ue.workingColorSpace,s);const t=`mat3( ${ad.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(s)){case Fa:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function ld(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Uy(s.getShaderSource(t),o)}else return i}function Ny(s,t){const e=Fy(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Oy(s,t){let e;switch(t){case qm:e="Linear";break;case $m:e="Reinhard";break;case Zm:e="Cineon";break;case jm:e="ACESFilmic";break;case Jm:e="AgX";break;case Qm:e="Neutral";break;case Km:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const da=new L;function zy(){ue.getLuminanceCoefficients(da);const s=da.x.toFixed(4),t=da.y.toFixed(4),e=da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function By(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qr).join(`
`)}function ky(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vy(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Qr(s){return s!==""}function cd(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hd(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jc(s){return s.replace(Hy,Wy)}const Gy=new Map;function Wy(s,t){let e=se[t];if(e===void 0){const n=Gy.get(t);if(n!==void 0)e=se[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jc(e)}const Xy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ud(s){return s.replace(Xy,Yy)}function Yy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function dd(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function qy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===of?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===Tm?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(t="SHADOWMAP_TYPE_VSM"),t}function $y(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case wr:case Tr:t="ENVMAP_TYPE_CUBE";break;case Ja:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zy(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function jy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _h:t="ENVMAP_BLENDING_MULTIPLY";break;case Xm:t="ENVMAP_BLENDING_MIX";break;case Ym:t="ENVMAP_BLENDING_ADD";break}return t}function Ky(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Jy(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=qy(e),c=$y(e),h=Zy(e),d=jy(e),u=Ky(e),p=By(e),f=ky(r),_=i.createProgram();let g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qr).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Qr).join(`
`),m.length>0&&(m+=`
`)):(g=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qr).join(`
`),m=[dd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ts?"#define TONE_MAPPING":"",e.toneMapping!==ts?se.tonemapping_pars_fragment:"",e.toneMapping!==ts?Oy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Ny("linearToOutputTexel",e.outputColorSpace),zy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qr).join(`
`)),o=Jc(o),o=cd(o,e),o=hd(o,e),a=Jc(a),a=cd(a,e),a=hd(a,e),o=ud(o),a=ud(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===hu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===hu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+g+o,v=x+m+a,E=od(i,i.VERTEX_SHADER,y),T=od(i,i.FRAGMENT_SHADER,v);i.attachShader(_,E),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(w){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),O=i.getShaderInfoLog(E).trim(),k=i.getShaderInfoLog(T).trim();let V=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,T);else{const G=ld(i,E,"vertex"),W=ld(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+N+`
`+G+`
`+W)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||k==="")&&(B=!1);B&&(w.diagnostics={runnable:V,programLog:N,vertexShader:{log:O,prefix:g},fragmentShader:{log:k,prefix:m}})}i.deleteShader(E),i.deleteShader(T),P=new wa(i,_),M=Vy(i,_)}let P;this.getUniforms=function(){return P===void 0&&b(this),P};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Ly)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Iy++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=T,this}let Qy=0;class tM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new eM(t),e.set(t,n)),n}}class eM{constructor(t){this.id=Qy++,this.code=t,this.usedTimes=0}}function nM(s,t,e,n,i,r,o){const a=new wh,l=new tM,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function g(M,S,w,N,O){const k=N.fog,V=O.geometry,B=M.isMeshStandardMaterial?N.environment:null,G=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),W=G&&G.mapping===Ja?G.image.height:null,st=f[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,pt=it!==void 0?it.length:0;let yt=0;V.morphAttributes.position!==void 0&&(yt=1),V.morphAttributes.normal!==void 0&&(yt=2),V.morphAttributes.color!==void 0&&(yt=3);let zt,K,et,dt;if(st){const Y=vn[st];zt=Y.vertexShader,K=Y.fragmentShader}else zt=M.vertexShader,K=M.fragmentShader,l.update(M),et=l.getVertexShaderID(M),dt=l.getFragmentShaderID(M);const ct=s.getRenderTarget(),Ct=s.state.buffers.depth.getReversed(),Yt=O.isInstancedMesh===!0,vt=O.isBatchedMesh===!0,te=!!M.map,wt=!!M.matcap,Vt=!!G,z=!!M.aoMap,Se=!!M.lightMap,$t=!!M.bumpMap,qt=!!M.normalMap,Pt=!!M.displacementMap,re=!!M.emissiveMap,gt=!!M.metalnessMap,D=!!M.roughnessMap,A=M.anisotropy>0,$=M.clearcoat>0,rt=M.dispersion>0,at=M.iridescence>0,Q=M.sheen>0,Rt=M.transmission>0,ft=A&&!!M.anisotropyMap,_t=$&&!!M.clearcoatMap,Gt=$&&!!M.clearcoatNormalMap,lt=$&&!!M.clearcoatRoughnessMap,Mt=at&&!!M.iridescenceMap,Lt=at&&!!M.iridescenceThicknessMap,Ft=Q&&!!M.sheenColorMap,bt=Q&&!!M.sheenRoughnessMap,Wt=!!M.specularMap,Nt=!!M.specularColorMap,ee=!!M.specularIntensityMap,H=Rt&&!!M.transmissionMap,mt=Rt&&!!M.thicknessMap,Z=!!M.gradientMap,nt=!!M.alphaMap,tt=M.alphaTest>0,C=!!M.alphaHash,U=!!M.extensions;let I=ts;M.toneMapped&&(ct===null||ct.isXRRenderTarget===!0)&&(I=s.toneMapping);const F={shaderID:st,shaderType:M.type,shaderName:M.name,vertexShader:zt,fragmentShader:K,defines:M.defines,customVertexShaderID:et,customFragmentShaderID:dt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:vt,batchingColor:vt&&O._colorsTexture!==null,instancing:Yt,instancingColor:Yt&&O.instanceColor!==null,instancingMorph:Yt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ct===null?s.outputColorSpace:ct.isXRRenderTarget===!0?ct.texture.colorSpace:Rr,alphaToCoverage:!!M.alphaToCoverage,map:te,matcap:wt,envMap:Vt,envMapMode:Vt&&G.mapping,envMapCubeUVHeight:W,aoMap:z,lightMap:Se,bumpMap:$t,normalMap:qt,displacementMap:u&&Pt,emissiveMap:re,normalMapObjectSpace:qt&&M.normalMapType===i_,normalMapTangentSpace:qt&&M.normalMapType===vf,metalnessMap:gt,roughnessMap:D,anisotropy:A,anisotropyMap:ft,clearcoat:$,clearcoatMap:_t,clearcoatNormalMap:Gt,clearcoatRoughnessMap:lt,dispersion:rt,iridescence:at,iridescenceMap:Mt,iridescenceThicknessMap:Lt,sheen:Q,sheenColorMap:Ft,sheenRoughnessMap:bt,specularMap:Wt,specularColorMap:Nt,specularIntensityMap:ee,transmission:Rt,transmissionMap:H,thicknessMap:mt,gradientMap:Z,opaque:M.transparent===!1&&M.blending===_r&&M.alphaToCoverage===!1,alphaMap:nt,alphaTest:tt,alphaHash:C,combine:M.combine,mapUv:te&&_(M.map.channel),aoMapUv:z&&_(M.aoMap.channel),lightMapUv:Se&&_(M.lightMap.channel),bumpMapUv:$t&&_(M.bumpMap.channel),normalMapUv:qt&&_(M.normalMap.channel),displacementMapUv:Pt&&_(M.displacementMap.channel),emissiveMapUv:re&&_(M.emissiveMap.channel),metalnessMapUv:gt&&_(M.metalnessMap.channel),roughnessMapUv:D&&_(M.roughnessMap.channel),anisotropyMapUv:ft&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:bt&&_(M.sheenRoughnessMap.channel),specularMapUv:Wt&&_(M.specularMap.channel),specularColorMapUv:Nt&&_(M.specularColorMap.channel),specularIntensityMapUv:ee&&_(M.specularIntensityMap.channel),transmissionMapUv:H&&_(M.transmissionMap.channel),thicknessMapUv:mt&&_(M.thicknessMap.channel),alphaMapUv:nt&&_(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(qt||A),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!V.attributes.uv&&(te||nt),fog:!!k,useFog:M.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Ct,skinning:O.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:yt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:I,decodeVideoTexture:te&&M.map.isVideoTexture===!0&&ue.getTransfer(M.map.colorSpace)===_e,decodeVideoTextureEmissive:re&&M.emissiveMap.isVideoTexture===!0&&ue.getTransfer(M.emissiveMap.colorSpace)===_e,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ke,flipSided:M.side===fn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:U&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(U&&M.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return F.vertexUv1s=c.has(1),F.vertexUv2s=c.has(2),F.vertexUv3s=c.has(3),c.clear(),F}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const w in M.defines)S.push(w),S.push(M.defines[w]);return M.isRawShaderMaterial===!1&&(x(S,M),y(S,M),S.push(s.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function x(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function y(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const S=f[M.type];let w;if(S){const N=vn[S];w=Th.clone(N.uniforms)}else w=M.uniforms;return w}function E(M,S){let w;for(let N=0,O=h.length;N<O;N++){const k=h[N];if(k.cacheKey===S){w=k,++w.usedTimes;break}}return w===void 0&&(w=new Jy(s,S,M,r),h.push(w)),w}function T(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:b,programs:h,dispose:P}}function iM(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function sM(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function fd(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function pd(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,p,f,_,g){let m=s[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:p,groupOrder:f,renderOrder:d.renderOrder,z:_,group:g},s[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=p,m.groupOrder=f,m.renderOrder=d.renderOrder,m.z=_,m.group=g),t++,m}function a(d,u,p,f,_,g){const m=o(d,u,p,f,_,g);p.transmission>0?n.push(m):p.transparent===!0?i.push(m):e.push(m)}function l(d,u,p,f,_,g){const m=o(d,u,p,f,_,g);p.transmission>0?n.unshift(m):p.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||sM),n.length>1&&n.sort(u||fd),i.length>1&&i.sort(u||fd)}function h(){for(let d=t,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function rM(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new pd,s.set(n,[o])):i>=r.length?(o=new pd,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function oM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new kt};break;case"SpotLight":e={position:new L,direction:new L,color:new kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new kt,groundColor:new kt};break;case"RectAreaLight":e={color:new kt,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function aM(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let lM=0;function cM(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function hM(s){const t=new oM,e=aM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const i=new L,r=new Ee,o=new Ee;function a(c){let h=0,d=0,u=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,f=0,_=0,g=0,m=0,x=0,y=0,v=0,E=0,T=0,b=0;c.sort(cM);for(let M=0,S=c.length;M<S;M++){const w=c[M],N=w.color,O=w.intensity,k=w.distance,V=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=N.r*O,d+=N.g*O,u+=N.b*O;else if(w.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(w.sh.coefficients[B],O);b++}else if(w.isDirectionalLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const G=w.shadow,W=e.get(w);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=V,n.directionalShadowMatrix[p]=w.shadow.matrix,x++}n.directional[p]=B,p++}else if(w.isSpotLight){const B=t.get(w);B.position.setFromMatrixPosition(w.matrixWorld),B.color.copy(N).multiplyScalar(O),B.distance=k,B.coneCos=Math.cos(w.angle),B.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),B.decay=w.decay,n.spot[_]=B;const G=w.shadow;if(w.map&&(n.spotLightMap[E]=w.map,E++,G.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=G.matrix,w.castShadow){const W=e.get(w);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=V,v++}_++}else if(w.isRectAreaLight){const B=t.get(w);B.color.copy(N).multiplyScalar(O),B.halfWidth.set(w.width*.5,0,0),B.halfHeight.set(0,w.height*.5,0),n.rectArea[g]=B,g++}else if(w.isPointLight){const B=t.get(w);if(B.color.copy(w.color).multiplyScalar(w.intensity),B.distance=w.distance,B.decay=w.decay,w.castShadow){const G=w.shadow,W=e.get(w);W.shadowIntensity=G.intensity,W.shadowBias=G.bias,W.shadowNormalBias=G.normalBias,W.shadowRadius=G.radius,W.shadowMapSize=G.mapSize,W.shadowCameraNear=G.camera.near,W.shadowCameraFar=G.camera.far,n.pointShadow[f]=W,n.pointShadowMap[f]=V,n.pointShadowMatrix[f]=w.shadow.matrix,y++}n.point[f]=B,f++}else if(w.isHemisphereLight){const B=t.get(w);B.skyColor.copy(w.color).multiplyScalar(O),B.groundColor.copy(w.groundColor).multiplyScalar(O),n.hemi[m]=B,m++}}g>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const P=n.hash;(P.directionalLength!==p||P.pointLength!==f||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==E||P.numLightProbes!==b)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=g,n.point.length=f,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=b,P.directionalLength=p,P.pointLength=f,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=E,P.numLightProbes=b,n.version=lM++)}function l(c,h){let d=0,u=0,p=0,f=0,_=0;const g=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),d++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(g),p++}else if(y.isRectAreaLight){const v=n.rectArea[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),o.identity(),r.copy(y.matrixWorld),r.premultiply(g),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),f++}else if(y.isPointLight){const v=n.point[u];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function md(s){const t=new hM(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function uM(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new md(s),t.set(i,[a])):r>=o.length?(a=new md(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const dM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fM=`uniform sampler2D shadow_pass;
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
}`;function pM(s,t,e){let n=new Rh;const i=new At,r=new At,o=new Me,a=new Ug({depthPacking:n_}),l=new Fg,c={},h=e.maxTextureSize,d={[ss]:fn,[fn]:ss,[ke]:ke},u=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:dM,fragmentShader:fM}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const f=new be;f.setAttribute("position",new On(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Qt(f,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let m=this.type;this.render=function(T,b,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=s.getRenderTarget(),S=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Qi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==bi&&this.type===bi,k=m===bi&&this.type!==bi;for(let V=0,B=T.length;V<B;V++){const G=T[V],W=G.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);const st=W.getFrameExtents();if(i.multiply(st),r.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/st.x),i.x=r.x*st.x,W.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/st.y),i.y=r.y*st.y,W.mapSize.y=r.y)),W.map===null||O===!0||k===!0){const pt=this.type!==bi?{minFilter:ri,magFilter:ri}:{};W.map!==null&&W.map.dispose(),W.map=new Bs(i.x,i.y,pt),W.map.texture.name=G.name+".shadowMap",W.camera.updateProjectionMatrix()}s.setRenderTarget(W.map),s.clear();const it=W.getViewportCount();for(let pt=0;pt<it;pt++){const yt=W.getViewport(pt);o.set(r.x*yt.x,r.y*yt.y,r.x*yt.z,r.y*yt.w),N.viewport(o),W.updateMatrices(G,pt),n=W.getFrustum(),v(b,P,W.camera,G,this.type)}W.isPointLightShadow!==!0&&this.type===bi&&x(W,P),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,s.setRenderTarget(M,S,w)};function x(T,b){const P=t.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bs(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(b,null,P,u,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(b,null,P,p,_,null)}function y(T,b,P,M){let S=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)S=w;else if(S=P.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const N=S.uuid,O=b.uuid;let k=c[N];k===void 0&&(k={},c[N]=k);let V=k[O];V===void 0&&(V=S.clone(),k[O]=V,b.addEventListener("dispose",E)),S=V}if(S.visible=b.visible,S.wireframe=b.wireframe,M===bi?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:d[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const N=s.properties.get(S);N.light=P}return S}function v(T,b,P,M,S){if(T.visible===!1)return;if(T.layers.test(b.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const O=t.update(T),k=T.material;if(Array.isArray(k)){const V=O.groups;for(let B=0,G=V.length;B<G;B++){const W=V[B],st=k[W.materialIndex];if(st&&st.visible){const it=y(T,st,M,S);T.onBeforeShadow(s,T,b,P,O,it,W),s.renderBufferDirect(P,null,O,it,T,W),T.onAfterShadow(s,T,b,P,O,it,W)}}}else if(k.visible){const V=y(T,k,M,S);T.onBeforeShadow(s,T,b,P,O,V,null),s.renderBufferDirect(P,null,O,V,T,null),T.onAfterShadow(s,T,b,P,O,V,null)}}const N=T.children;for(let O=0,k=N.length;O<k;O++)v(N[O],b,P,M,S)}function E(T){T.target.removeEventListener("dispose",E);for(const P in c){const M=c[P],S=T.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const mM={[hc]:uc,[dc]:mc,[fc]:_c,[br]:pc,[uc]:hc,[mc]:dc,[_c]:fc,[pc]:br};function _M(s,t){function e(){let H=!1;const mt=new Me;let Z=null;const nt=new Me(0,0,0,0);return{setMask:function(tt){Z!==tt&&!H&&(s.colorMask(tt,tt,tt,tt),Z=tt)},setLocked:function(tt){H=tt},setClear:function(tt,C,U,I,F){F===!0&&(tt*=I,C*=I,U*=I),mt.set(tt,C,U,I),nt.equals(mt)===!1&&(s.clearColor(tt,C,U,I),nt.copy(mt))},reset:function(){H=!1,Z=null,nt.set(-1,0,0,0)}}}function n(){let H=!1,mt=!1,Z=null,nt=null,tt=null;return{setReversed:function(C){if(mt!==C){const U=t.get("EXT_clip_control");mt?U.clipControlEXT(U.LOWER_LEFT_EXT,U.ZERO_TO_ONE_EXT):U.clipControlEXT(U.LOWER_LEFT_EXT,U.NEGATIVE_ONE_TO_ONE_EXT);const I=tt;tt=null,this.setClear(I)}mt=C},getReversed:function(){return mt},setTest:function(C){C?ct(s.DEPTH_TEST):Ct(s.DEPTH_TEST)},setMask:function(C){Z!==C&&!H&&(s.depthMask(C),Z=C)},setFunc:function(C){if(mt&&(C=mM[C]),nt!==C){switch(C){case hc:s.depthFunc(s.NEVER);break;case uc:s.depthFunc(s.ALWAYS);break;case dc:s.depthFunc(s.LESS);break;case br:s.depthFunc(s.LEQUAL);break;case fc:s.depthFunc(s.EQUAL);break;case pc:s.depthFunc(s.GEQUAL);break;case mc:s.depthFunc(s.GREATER);break;case _c:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}nt=C}},setLocked:function(C){H=C},setClear:function(C){tt!==C&&(mt&&(C=1-C),s.clearDepth(C),tt=C)},reset:function(){H=!1,Z=null,nt=null,tt=null,mt=!1}}}function i(){let H=!1,mt=null,Z=null,nt=null,tt=null,C=null,U=null,I=null,F=null;return{setTest:function(Y){H||(Y?ct(s.STENCIL_TEST):Ct(s.STENCIL_TEST))},setMask:function(Y){mt!==Y&&!H&&(s.stencilMask(Y),mt=Y)},setFunc:function(Y,ot,ut){(Z!==Y||nt!==ot||tt!==ut)&&(s.stencilFunc(Y,ot,ut),Z=Y,nt=ot,tt=ut)},setOp:function(Y,ot,ut){(C!==Y||U!==ot||I!==ut)&&(s.stencilOp(Y,ot,ut),C=Y,U=ot,I=ut)},setLocked:function(Y){H=Y},setClear:function(Y){F!==Y&&(s.clearStencil(Y),F=Y)},reset:function(){H=!1,mt=null,Z=null,nt=null,tt=null,C=null,U=null,I=null,F=null}}}const r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},d={},u=new WeakMap,p=[],f=null,_=!1,g=null,m=null,x=null,y=null,v=null,E=null,T=null,b=new kt(0,0,0),P=0,M=!1,S=null,w=null,N=null,O=null,k=null;const V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=G>=1):W.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=G>=2);let st=null,it={};const pt=s.getParameter(s.SCISSOR_BOX),yt=s.getParameter(s.VIEWPORT),zt=new Me().fromArray(pt),K=new Me().fromArray(yt);function et(H,mt,Z,nt){const tt=new Uint8Array(4),C=s.createTexture();s.bindTexture(H,C),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let U=0;U<Z;U++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(mt,0,s.RGBA,1,1,nt,0,s.RGBA,s.UNSIGNED_BYTE,tt):s.texImage2D(mt+U,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,tt);return C}const dt={};dt[s.TEXTURE_2D]=et(s.TEXTURE_2D,s.TEXTURE_2D,1),dt[s.TEXTURE_CUBE_MAP]=et(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),dt[s.TEXTURE_2D_ARRAY]=et(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),dt[s.TEXTURE_3D]=et(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ct(s.DEPTH_TEST),o.setFunc(br),$t(!1),qt(ou),ct(s.CULL_FACE),z(Qi);function ct(H){h[H]!==!0&&(s.enable(H),h[H]=!0)}function Ct(H){h[H]!==!1&&(s.disable(H),h[H]=!1)}function Yt(H,mt){return d[H]!==mt?(s.bindFramebuffer(H,mt),d[H]=mt,H===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=mt),H===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=mt),!0):!1}function vt(H,mt){let Z=p,nt=!1;if(H){Z=u.get(mt),Z===void 0&&(Z=[],u.set(mt,Z));const tt=H.textures;if(Z.length!==tt.length||Z[0]!==s.COLOR_ATTACHMENT0){for(let C=0,U=tt.length;C<U;C++)Z[C]=s.COLOR_ATTACHMENT0+C;Z.length=tt.length,nt=!0}}else Z[0]!==s.BACK&&(Z[0]=s.BACK,nt=!0);nt&&s.drawBuffers(Z)}function te(H){return f!==H?(s.useProgram(H),f=H,!0):!1}const wt={[As]:s.FUNC_ADD,[Cm]:s.FUNC_SUBTRACT,[Rm]:s.FUNC_REVERSE_SUBTRACT};wt[Pm]=s.MIN,wt[Dm]=s.MAX;const Vt={[Lm]:s.ZERO,[Im]:s.ONE,[Um]:s.SRC_COLOR,[lc]:s.SRC_ALPHA,[km]:s.SRC_ALPHA_SATURATE,[zm]:s.DST_COLOR,[Nm]:s.DST_ALPHA,[Fm]:s.ONE_MINUS_SRC_COLOR,[cc]:s.ONE_MINUS_SRC_ALPHA,[Bm]:s.ONE_MINUS_DST_COLOR,[Om]:s.ONE_MINUS_DST_ALPHA,[Vm]:s.CONSTANT_COLOR,[Hm]:s.ONE_MINUS_CONSTANT_COLOR,[Gm]:s.CONSTANT_ALPHA,[Wm]:s.ONE_MINUS_CONSTANT_ALPHA};function z(H,mt,Z,nt,tt,C,U,I,F,Y){if(H===Qi){_===!0&&(Ct(s.BLEND),_=!1);return}if(_===!1&&(ct(s.BLEND),_=!0),H!==Am){if(H!==g||Y!==M){if((m!==As||v!==As)&&(s.blendEquation(s.FUNC_ADD),m=As,v=As),Y)switch(H){case _r:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ac:s.blendFunc(s.ONE,s.ONE);break;case au:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case _r:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ac:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case au:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,y=null,E=null,T=null,b.set(0,0,0),P=0,g=H,M=Y}return}tt=tt||mt,C=C||Z,U=U||nt,(mt!==m||tt!==v)&&(s.blendEquationSeparate(wt[mt],wt[tt]),m=mt,v=tt),(Z!==x||nt!==y||C!==E||U!==T)&&(s.blendFuncSeparate(Vt[Z],Vt[nt],Vt[C],Vt[U]),x=Z,y=nt,E=C,T=U),(I.equals(b)===!1||F!==P)&&(s.blendColor(I.r,I.g,I.b,F),b.copy(I),P=F),g=H,M=!1}function Se(H,mt){H.side===ke?Ct(s.CULL_FACE):ct(s.CULL_FACE);let Z=H.side===fn;mt&&(Z=!Z),$t(Z),H.blending===_r&&H.transparent===!1?z(Qi):z(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),r.setMask(H.colorWrite);const nt=H.stencilWrite;a.setTest(nt),nt&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),re(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ct(s.SAMPLE_ALPHA_TO_COVERAGE):Ct(s.SAMPLE_ALPHA_TO_COVERAGE)}function $t(H){S!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),S=H)}function qt(H){H!==bm?(ct(s.CULL_FACE),H!==w&&(H===ou?s.cullFace(s.BACK):H===wm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ct(s.CULL_FACE),w=H}function Pt(H){H!==N&&(B&&s.lineWidth(H),N=H)}function re(H,mt,Z){H?(ct(s.POLYGON_OFFSET_FILL),(O!==mt||k!==Z)&&(s.polygonOffset(mt,Z),O=mt,k=Z)):Ct(s.POLYGON_OFFSET_FILL)}function gt(H){H?ct(s.SCISSOR_TEST):Ct(s.SCISSOR_TEST)}function D(H){H===void 0&&(H=s.TEXTURE0+V-1),st!==H&&(s.activeTexture(H),st=H)}function A(H,mt,Z){Z===void 0&&(st===null?Z=s.TEXTURE0+V-1:Z=st);let nt=it[Z];nt===void 0&&(nt={type:void 0,texture:void 0},it[Z]=nt),(nt.type!==H||nt.texture!==mt)&&(st!==Z&&(s.activeTexture(Z),st=Z),s.bindTexture(H,mt||dt[H]),nt.type=H,nt.texture=mt)}function $(){const H=it[st];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function rt(){try{s.compressedTexImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{s.compressedTexImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Q(){try{s.texSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Rt(){try{s.texSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ft(){try{s.compressedTexSubImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{s.compressedTexSubImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(){try{s.texStorage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function lt(){try{s.texStorage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Mt(){try{s.texImage2D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Lt(){try{s.texImage3D(...arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ft(H){zt.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),zt.copy(H))}function bt(H){K.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),K.copy(H))}function Wt(H,mt){let Z=c.get(mt);Z===void 0&&(Z=new WeakMap,c.set(mt,Z));let nt=Z.get(H);nt===void 0&&(nt=s.getUniformBlockIndex(mt,H.name),Z.set(H,nt))}function Nt(H,mt){const nt=c.get(mt).get(H);l.get(mt)!==nt&&(s.uniformBlockBinding(mt,nt,H.__bindingPointIndex),l.set(mt,nt))}function ee(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},st=null,it={},d={},u=new WeakMap,p=[],f=null,_=!1,g=null,m=null,x=null,y=null,v=null,E=null,T=null,b=new kt(0,0,0),P=0,M=!1,S=null,w=null,N=null,O=null,k=null,zt.set(0,0,s.canvas.width,s.canvas.height),K.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ct,disable:Ct,bindFramebuffer:Yt,drawBuffers:vt,useProgram:te,setBlending:z,setMaterial:Se,setFlipSided:$t,setCullFace:qt,setLineWidth:Pt,setPolygonOffset:re,setScissorTest:gt,activeTexture:D,bindTexture:A,unbindTexture:$,compressedTexImage2D:rt,compressedTexImage3D:at,texImage2D:Mt,texImage3D:Lt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Gt,texStorage3D:lt,texSubImage2D:Q,texSubImage3D:Rt,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:Ft,viewport:bt,reset:ee}}function gM(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new At,h=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function f(D,A){return p?new OffscreenCanvas(D,A):Oa("canvas")}function _(D,A,$){let rt=1;const at=gt(D);if((at.width>$||at.height>$)&&(rt=$/Math.max(at.width,at.height)),rt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const Q=Math.floor(rt*at.width),Rt=Math.floor(rt*at.height);d===void 0&&(d=f(Q,Rt));const ft=A?f(Q,Rt):d;return ft.width=Q,ft.height=Rt,ft.getContext("2d").drawImage(D,0,0,Q,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+Q+"x"+Rt+")."),ft}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),D;return D}function g(D){return D.generateMipmaps}function m(D){s.generateMipmap(D)}function x(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(D,A,$,rt,at=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Q=A;if(A===s.RED&&($===s.FLOAT&&(Q=s.R32F),$===s.HALF_FLOAT&&(Q=s.R16F),$===s.UNSIGNED_BYTE&&(Q=s.R8)),A===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(Q=s.R8UI),$===s.UNSIGNED_SHORT&&(Q=s.R16UI),$===s.UNSIGNED_INT&&(Q=s.R32UI),$===s.BYTE&&(Q=s.R8I),$===s.SHORT&&(Q=s.R16I),$===s.INT&&(Q=s.R32I)),A===s.RG&&($===s.FLOAT&&(Q=s.RG32F),$===s.HALF_FLOAT&&(Q=s.RG16F),$===s.UNSIGNED_BYTE&&(Q=s.RG8)),A===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(Q=s.RG8UI),$===s.UNSIGNED_SHORT&&(Q=s.RG16UI),$===s.UNSIGNED_INT&&(Q=s.RG32UI),$===s.BYTE&&(Q=s.RG8I),$===s.SHORT&&(Q=s.RG16I),$===s.INT&&(Q=s.RG32I)),A===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(Q=s.RGB8UI),$===s.UNSIGNED_SHORT&&(Q=s.RGB16UI),$===s.UNSIGNED_INT&&(Q=s.RGB32UI),$===s.BYTE&&(Q=s.RGB8I),$===s.SHORT&&(Q=s.RGB16I),$===s.INT&&(Q=s.RGB32I)),A===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(Q=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(Q=s.RGBA16UI),$===s.UNSIGNED_INT&&(Q=s.RGBA32UI),$===s.BYTE&&(Q=s.RGBA8I),$===s.SHORT&&(Q=s.RGBA16I),$===s.INT&&(Q=s.RGBA32I)),A===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(Q=s.RGB9_E5),A===s.RGBA){const Rt=at?Fa:ue.getTransfer(rt);$===s.FLOAT&&(Q=s.RGBA32F),$===s.HALF_FLOAT&&(Q=s.RGBA16F),$===s.UNSIGNED_BYTE&&(Q=Rt===_e?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(Q=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(Q=s.RGB5_A1)}return(Q===s.R16F||Q===s.R32F||Q===s.RG16F||Q===s.RG32F||Q===s.RGBA16F||Q===s.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(D,A){let $;return D?A===null||A===zs||A===Ar?$=s.DEPTH24_STENCIL8:A===Ri?$=s.DEPTH32F_STENCIL8:A===xo&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===zs||A===Ar?$=s.DEPTH_COMPONENT24:A===Ri?$=s.DEPTH_COMPONENT32F:A===xo&&($=s.DEPTH_COMPONENT16),$}function E(D,A){return g(D)===!0||D.isFramebufferTexture&&D.minFilter!==ri&&D.minFilter!==ii?Math.log2(Math.max(A.width,A.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?A.mipmaps.length:1}function T(D){const A=D.target;A.removeEventListener("dispose",T),P(A),A.isVideoTexture&&h.delete(A)}function b(D){const A=D.target;A.removeEventListener("dispose",b),S(A)}function P(D){const A=n.get(D);if(A.__webglInit===void 0)return;const $=D.source,rt=u.get($);if(rt){const at=rt[A.__cacheKey];at.usedTimes--,at.usedTimes===0&&M(D),Object.keys(rt).length===0&&u.delete($)}n.remove(D)}function M(D){const A=n.get(D);s.deleteTexture(A.__webglTexture);const $=D.source,rt=u.get($);delete rt[A.__cacheKey],o.memory.textures--}function S(D){const A=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(A.__webglFramebuffer[rt]))for(let at=0;at<A.__webglFramebuffer[rt].length;at++)s.deleteFramebuffer(A.__webglFramebuffer[rt][at]);else s.deleteFramebuffer(A.__webglFramebuffer[rt]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let rt=0;rt<A.__webglFramebuffer.length;rt++)s.deleteFramebuffer(A.__webglFramebuffer[rt]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let rt=0;rt<A.__webglColorRenderbuffer.length;rt++)A.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[rt]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const $=D.textures;for(let rt=0,at=$.length;rt<at;rt++){const Q=n.get($[rt]);Q.__webglTexture&&(s.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove($[rt])}n.remove(D)}let w=0;function N(){w=0}function O(){const D=w;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),w+=1,D}function k(D){const A=[];return A.push(D.wrapS),A.push(D.wrapT),A.push(D.wrapR||0),A.push(D.magFilter),A.push(D.minFilter),A.push(D.anisotropy),A.push(D.internalFormat),A.push(D.format),A.push(D.type),A.push(D.generateMipmaps),A.push(D.premultiplyAlpha),A.push(D.flipY),A.push(D.unpackAlignment),A.push(D.colorSpace),A.join()}function V(D,A){const $=n.get(D);if(D.isVideoTexture&&Pt(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const rt=D.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K($,D,A);return}}e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+A)}function B(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){K($,D,A);return}e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+A)}function G(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){K($,D,A);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+A)}function W(D,A){const $=n.get(D);if(D.version>0&&$.__version!==D.version){et($,D,A);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+A)}const st={[vo]:s.REPEAT,[Rs]:s.CLAMP_TO_EDGE,[xc]:s.MIRRORED_REPEAT},it={[ri]:s.NEAREST,[t_]:s.NEAREST_MIPMAP_NEAREST,[Bo]:s.NEAREST_MIPMAP_LINEAR,[ii]:s.LINEAR,[ul]:s.LINEAR_MIPMAP_NEAREST,[$i]:s.LINEAR_MIPMAP_LINEAR},pt={[s_]:s.NEVER,[h_]:s.ALWAYS,[r_]:s.LESS,[xf]:s.LEQUAL,[o_]:s.EQUAL,[c_]:s.GEQUAL,[a_]:s.GREATER,[l_]:s.NOTEQUAL};function yt(D,A){if(A.type===Ri&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===ii||A.magFilter===ul||A.magFilter===Bo||A.magFilter===$i||A.minFilter===ii||A.minFilter===ul||A.minFilter===Bo||A.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,st[A.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,st[A.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,st[A.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,it[A.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,it[A.minFilter]),A.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,pt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===ri||A.minFilter!==Bo&&A.minFilter!==$i||A.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function zt(D,A){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,A.addEventListener("dispose",T));const rt=A.source;let at=u.get(rt);at===void 0&&(at={},u.set(rt,at));const Q=k(A);if(Q!==D.__cacheKey){at[Q]===void 0&&(at[Q]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),at[Q].usedTimes++;const Rt=at[D.__cacheKey];Rt!==void 0&&(at[D.__cacheKey].usedTimes--,Rt.usedTimes===0&&M(A)),D.__cacheKey=Q,D.__webglTexture=at[Q].texture}return $}function K(D,A,$){let rt=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(rt=s.TEXTURE_3D);const at=zt(D,A),Q=A.source;e.bindTexture(rt,D.__webglTexture,s.TEXTURE0+$);const Rt=n.get(Q);if(Q.version!==Rt.__version||at===!0){e.activeTexture(s.TEXTURE0+$);const ft=ue.getPrimaries(ue.workingColorSpace),_t=A.colorSpace===qi?null:ue.getPrimaries(A.colorSpace),Gt=A.colorSpace===qi||ft===_t?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let lt=_(A.image,!1,i.maxTextureSize);lt=re(A,lt);const Mt=r.convert(A.format,A.colorSpace),Lt=r.convert(A.type);let Ft=y(A.internalFormat,Mt,Lt,A.colorSpace,A.isVideoTexture);yt(rt,A);let bt;const Wt=A.mipmaps,Nt=A.isVideoTexture!==!0,ee=Rt.__version===void 0||at===!0,H=Q.dataReady,mt=E(A,lt);if(A.isDepthTexture)Ft=v(A.format===Cr,A.type),ee&&(Nt?e.texStorage2D(s.TEXTURE_2D,1,Ft,lt.width,lt.height):e.texImage2D(s.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Mt,Lt,null));else if(A.isDataTexture)if(Wt.length>0){Nt&&ee&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,Wt[0].width,Wt[0].height);for(let Z=0,nt=Wt.length;Z<nt;Z++)bt=Wt[Z],Nt?H&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Mt,Lt,bt.data):e.texImage2D(s.TEXTURE_2D,Z,Ft,bt.width,bt.height,0,Mt,Lt,bt.data);A.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,lt.width,lt.height),H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Lt,lt.data)):e.texImage2D(s.TEXTURE_2D,0,Ft,lt.width,lt.height,0,Mt,Lt,lt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,Wt[0].width,Wt[0].height,lt.depth);for(let Z=0,nt=Wt.length;Z<nt;Z++)if(bt=Wt[Z],A.format!==si)if(Mt!==null)if(Nt){if(H)if(A.layerUpdates.size>0){const tt=Xu(bt.width,bt.height,A.format,A.type);for(const C of A.layerUpdates){const U=bt.data.subarray(C*tt/bt.data.BYTES_PER_ELEMENT,(C+1)*tt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,C,bt.width,bt.height,1,Mt,U)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,lt.depth,Mt,bt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Z,Ft,bt.width,bt.height,lt.depth,0,bt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?H&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Z,0,0,0,bt.width,bt.height,lt.depth,Mt,Lt,bt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Z,Ft,bt.width,bt.height,lt.depth,0,Mt,Lt,bt.data)}else{Nt&&ee&&e.texStorage2D(s.TEXTURE_2D,mt,Ft,Wt[0].width,Wt[0].height);for(let Z=0,nt=Wt.length;Z<nt;Z++)bt=Wt[Z],A.format!==si?Mt!==null?Nt?H&&e.compressedTexSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Mt,bt.data):e.compressedTexImage2D(s.TEXTURE_2D,Z,Ft,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?H&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,bt.width,bt.height,Mt,Lt,bt.data):e.texImage2D(s.TEXTURE_2D,Z,Ft,bt.width,bt.height,0,Mt,Lt,bt.data)}else if(A.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(s.TEXTURE_2D_ARRAY,mt,Ft,lt.width,lt.height,lt.depth),H)if(A.layerUpdates.size>0){const Z=Xu(lt.width,lt.height,A.format,A.type);for(const nt of A.layerUpdates){const tt=lt.data.subarray(nt*Z/lt.data.BYTES_PER_ELEMENT,(nt+1)*Z/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,nt,lt.width,lt.height,1,Mt,Lt,tt)}A.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Lt,lt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ft,lt.width,lt.height,lt.depth,0,Mt,Lt,lt.data);else if(A.isData3DTexture)Nt?(ee&&e.texStorage3D(s.TEXTURE_3D,mt,Ft,lt.width,lt.height,lt.depth),H&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Lt,lt.data)):e.texImage3D(s.TEXTURE_3D,0,Ft,lt.width,lt.height,lt.depth,0,Mt,Lt,lt.data);else if(A.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(s.TEXTURE_2D,mt,Ft,lt.width,lt.height);else{let Z=lt.width,nt=lt.height;for(let tt=0;tt<mt;tt++)e.texImage2D(s.TEXTURE_2D,tt,Ft,Z,nt,0,Mt,Lt,null),Z>>=1,nt>>=1}}else if(Wt.length>0){if(Nt&&ee){const Z=gt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,mt,Ft,Z.width,Z.height)}for(let Z=0,nt=Wt.length;Z<nt;Z++)bt=Wt[Z],Nt?H&&e.texSubImage2D(s.TEXTURE_2D,Z,0,0,Mt,Lt,bt):e.texImage2D(s.TEXTURE_2D,Z,Ft,Mt,Lt,bt);A.generateMipmaps=!1}else if(Nt){if(ee){const Z=gt(lt);e.texStorage2D(s.TEXTURE_2D,mt,Ft,Z.width,Z.height)}H&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,Mt,Lt,lt)}else e.texImage2D(s.TEXTURE_2D,0,Ft,Mt,Lt,lt);g(A)&&m(rt),Rt.__version=Q.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function et(D,A,$){if(A.image.length!==6)return;const rt=zt(D,A),at=A.source;e.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+$);const Q=n.get(at);if(at.version!==Q.__version||rt===!0){e.activeTexture(s.TEXTURE0+$);const Rt=ue.getPrimaries(ue.workingColorSpace),ft=A.colorSpace===qi?null:ue.getPrimaries(A.colorSpace),_t=A.colorSpace===qi||Rt===ft?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const Gt=A.isCompressedTexture||A.image[0].isCompressedTexture,lt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let nt=0;nt<6;nt++)!Gt&&!lt?Mt[nt]=_(A.image[nt],!0,i.maxCubemapSize):Mt[nt]=lt?A.image[nt].image:A.image[nt],Mt[nt]=re(A,Mt[nt]);const Lt=Mt[0],Ft=r.convert(A.format,A.colorSpace),bt=r.convert(A.type),Wt=y(A.internalFormat,Ft,bt,A.colorSpace),Nt=A.isVideoTexture!==!0,ee=Q.__version===void 0||rt===!0,H=at.dataReady;let mt=E(A,Lt);yt(s.TEXTURE_CUBE_MAP,A);let Z;if(Gt){Nt&&ee&&e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Wt,Lt.width,Lt.height);for(let nt=0;nt<6;nt++){Z=Mt[nt].mipmaps;for(let tt=0;tt<Z.length;tt++){const C=Z[tt];A.format!==si?Ft!==null?Nt?H&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt,0,0,C.width,C.height,Ft,C.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt,Wt,C.width,C.height,0,C.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt,0,0,C.width,C.height,Ft,bt,C.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt,Wt,C.width,C.height,0,Ft,bt,C.data)}}}else{if(Z=A.mipmaps,Nt&&ee){Z.length>0&&mt++;const nt=gt(Mt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Wt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(lt){Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Mt[nt].width,Mt[nt].height,Ft,bt,Mt[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Wt,Mt[nt].width,Mt[nt].height,0,Ft,bt,Mt[nt].data);for(let tt=0;tt<Z.length;tt++){const U=Z[tt].image[nt].image;Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt+1,0,0,U.width,U.height,Ft,bt,U.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt+1,Wt,U.width,U.height,0,Ft,bt,U.data)}}else{Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Ft,bt,Mt[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Wt,Ft,bt,Mt[nt]);for(let tt=0;tt<Z.length;tt++){const C=Z[tt];Nt?H&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt+1,0,0,Ft,bt,C.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,tt+1,Wt,Ft,bt,C.image[nt])}}}g(A)&&m(s.TEXTURE_CUBE_MAP),Q.__version=at.version,A.onUpdate&&A.onUpdate(A)}D.__version=A.version}function dt(D,A,$,rt,at,Q){const Rt=r.convert($.format,$.colorSpace),ft=r.convert($.type),_t=y($.internalFormat,Rt,ft,$.colorSpace),Gt=n.get(A),lt=n.get($);if(lt.__renderTarget=A,!Gt.__hasExternalTextures){const Mt=Math.max(1,A.width>>Q),Lt=Math.max(1,A.height>>Q);at===s.TEXTURE_3D||at===s.TEXTURE_2D_ARRAY?e.texImage3D(at,Q,_t,Mt,Lt,A.depth,0,Rt,ft,null):e.texImage2D(at,Q,_t,Mt,Lt,0,Rt,ft,null)}e.bindFramebuffer(s.FRAMEBUFFER,D),qt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,rt,at,lt.__webglTexture,0,$t(A)):(at===s.TEXTURE_2D||at>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,rt,at,lt.__webglTexture,Q),e.bindFramebuffer(s.FRAMEBUFFER,null)}function ct(D,A,$){if(s.bindRenderbuffer(s.RENDERBUFFER,D),A.depthBuffer){const rt=A.depthTexture,at=rt&&rt.isDepthTexture?rt.type:null,Q=v(A.stencilBuffer,at),Rt=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ft=$t(A);qt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft,Q,A.width,A.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft,Q,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Q,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Rt,s.RENDERBUFFER,D)}else{const rt=A.textures;for(let at=0;at<rt.length;at++){const Q=rt[at],Rt=r.convert(Q.format,Q.colorSpace),ft=r.convert(Q.type),_t=y(Q.internalFormat,Rt,ft,Q.colorSpace),Gt=$t(A);$&&qt(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Gt,_t,A.width,A.height):qt(A)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Gt,_t,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,_t,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ct(D,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,D),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const rt=n.get(A.depthTexture);rt.__renderTarget=A,(!rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),V(A.depthTexture,0);const at=rt.__webglTexture,Q=$t(A);if(A.depthTexture.format===gr)qt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,at,0);else if(A.depthTexture.format===Cr)qt(A)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0,Q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function Yt(D){const A=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==D.depthTexture){const rt=D.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),rt){const at=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,rt.removeEventListener("dispose",at)};rt.addEventListener("dispose",at),A.__depthDisposeCallback=at}A.__boundDepthTexture=rt}if(D.depthTexture&&!A.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Ct(A.__webglFramebuffer,D)}else if($){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]===void 0)A.__webglDepthbuffer[rt]=s.createRenderbuffer(),ct(A.__webglDepthbuffer[rt],D,!1);else{const at=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Q=A.__webglDepthbuffer[rt];s.bindRenderbuffer(s.RENDERBUFFER,Q),s.framebufferRenderbuffer(s.FRAMEBUFFER,at,s.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),ct(A.__webglDepthbuffer,D,!1);else{const rt=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,at),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,at)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(D,A,$){const rt=n.get(D);A!==void 0&&dt(rt.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Yt(D)}function te(D){const A=D.texture,$=n.get(D),rt=n.get(A);D.addEventListener("dispose",b);const at=D.textures,Q=D.isWebGLCubeRenderTarget===!0,Rt=at.length>1;if(Rt||(rt.__webglTexture===void 0&&(rt.__webglTexture=s.createTexture()),rt.__version=A.version,o.memory.textures++),Q){$.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer[ft]=[];for(let _t=0;_t<A.mipmaps.length;_t++)$.__webglFramebuffer[ft][_t]=s.createFramebuffer()}else $.__webglFramebuffer[ft]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){$.__webglFramebuffer=[];for(let ft=0;ft<A.mipmaps.length;ft++)$.__webglFramebuffer[ft]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Rt)for(let ft=0,_t=at.length;ft<_t;ft++){const Gt=n.get(at[ft]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=s.createTexture(),o.memory.textures++)}if(D.samples>0&&qt(D)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let ft=0;ft<at.length;ft++){const _t=at[ft];$.__webglColorRenderbuffer[ft]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[ft]);const Gt=r.convert(_t.format,_t.colorSpace),lt=r.convert(_t.type),Mt=y(_t.internalFormat,Gt,lt,_t.colorSpace,D.isXRRenderTarget===!0),Lt=$t(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Lt,Mt,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ft,s.RENDERBUFFER,$.__webglColorRenderbuffer[ft])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),ct($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Q){e.bindTexture(s.TEXTURE_CUBE_MAP,rt.__webglTexture),yt(s.TEXTURE_CUBE_MAP,A);for(let ft=0;ft<6;ft++)if(A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)dt($.__webglFramebuffer[ft][_t],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else dt($.__webglFramebuffer[ft],D,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);g(A)&&m(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ft=0,_t=at.length;ft<_t;ft++){const Gt=at[ft],lt=n.get(Gt);e.bindTexture(s.TEXTURE_2D,lt.__webglTexture),yt(s.TEXTURE_2D,Gt),dt($.__webglFramebuffer,D,Gt,s.COLOR_ATTACHMENT0+ft,s.TEXTURE_2D,0),g(Gt)&&m(s.TEXTURE_2D)}e.unbindTexture()}else{let ft=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ft=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ft,rt.__webglTexture),yt(ft,A),A.mipmaps&&A.mipmaps.length>0)for(let _t=0;_t<A.mipmaps.length;_t++)dt($.__webglFramebuffer[_t],D,A,s.COLOR_ATTACHMENT0,ft,_t);else dt($.__webglFramebuffer,D,A,s.COLOR_ATTACHMENT0,ft,0);g(A)&&m(ft),e.unbindTexture()}D.depthBuffer&&Yt(D)}function wt(D){const A=D.textures;for(let $=0,rt=A.length;$<rt;$++){const at=A[$];if(g(at)){const Q=x(D),Rt=n.get(at).__webglTexture;e.bindTexture(Q,Rt),m(Q),e.unbindTexture()}}}const Vt=[],z=[];function Se(D){if(D.samples>0){if(qt(D)===!1){const A=D.textures,$=D.width,rt=D.height;let at=s.COLOR_BUFFER_BIT;const Q=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Rt=n.get(D),ft=A.length>1;if(ft)for(let _t=0;_t<A.length;_t++)e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let _t=0;_t<A.length;_t++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(at|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(at|=s.STENCIL_BUFFER_BIT)),ft){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);const Gt=n.get(A[_t]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Gt,0)}s.blitFramebuffer(0,0,$,rt,0,0,$,rt,at,s.NEAREST),l===!0&&(Vt.length=0,z.length=0,Vt.push(s.COLOR_ATTACHMENT0+_t),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Vt.push(Q),z.push(Q),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Vt))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<A.length;_t++){e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.RENDERBUFFER,Rt.__webglColorRenderbuffer[_t]);const Gt=n.get(A[_t]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Rt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+_t,s.TEXTURE_2D,Gt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const A=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function $t(D){return Math.min(i.maxSamples,D.samples)}function qt(D){const A=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Pt(D){const A=o.render.frame;h.get(D)!==A&&(h.set(D,A),D.update())}function re(D,A){const $=D.colorSpace,rt=D.format,at=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Rr&&$!==qi&&(ue.getTransfer($)===_e?(rt!==si||at!==Ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),A}function gt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=V,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=W,this.rebindTextures=vt,this.setupRenderTarget=te,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=qt}function vM(s,t){function e(n,i=qi){let r;const o=ue.getTransfer(i);if(n===Ii)return s.UNSIGNED_BYTE;if(n===vh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===xh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===hf)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===lf)return s.BYTE;if(n===cf)return s.SHORT;if(n===xo)return s.UNSIGNED_SHORT;if(n===gh)return s.INT;if(n===zs)return s.UNSIGNED_INT;if(n===Ri)return s.FLOAT;if(n===No)return s.HALF_FLOAT;if(n===uf)return s.ALPHA;if(n===df)return s.RGB;if(n===si)return s.RGBA;if(n===ff)return s.LUMINANCE;if(n===pf)return s.LUMINANCE_ALPHA;if(n===gr)return s.DEPTH_COMPONENT;if(n===Cr)return s.DEPTH_STENCIL;if(n===mf)return s.RED;if(n===yh)return s.RED_INTEGER;if(n===_f)return s.RG;if(n===Mh)return s.RG_INTEGER;if(n===Sh)return s.RGBA_INTEGER;if(n===ya||n===Ma||n===Sa||n===Ea)if(o===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ya)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ya)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===yc||n===Mc||n===Sc||n===Ec)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===yc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Mc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ec)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bc||n===wc||n===Tc)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bc||n===wc)return o===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Tc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ac||n===Cc||n===Rc||n===Pc||n===Dc||n===Lc||n===Ic||n===Uc||n===Fc||n===Nc||n===Oc||n===zc||n===Bc||n===kc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ac)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Cc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Rc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Pc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Dc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Lc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ic)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Uc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Fc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Nc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Oc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===kc)return o===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Vc||n===Hc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ba)return o===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Vc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Hc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gf||n===Gc||n===Wc||n===Xc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ba)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Gc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ar?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}const xM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yM=`
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

}`;class MM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new pn,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ui({vertexShader:xM,fragmentShader:yM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Qt(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class SM extends Gs{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,p=null,f=null;const _=new MM,g=e.getContextAttributes();let m=null,x=null;const y=[],v=[],E=new At;let T=null;const b=new un;b.viewport=new Me;const P=new un;P.viewport=new Me;const M=[b,P],S=new Bg;let w=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let et=y[K];return et===void 0&&(et=new Dl,y[K]=et),et.getTargetRaySpace()},this.getControllerGrip=function(K){let et=y[K];return et===void 0&&(et=new Dl,y[K]=et),et.getGripSpace()},this.getHand=function(K){let et=y[K];return et===void 0&&(et=new Dl,y[K]=et),et.getHandSpace()};function O(K){const et=v.indexOf(K.inputSource);if(et===-1)return;const dt=y[et];dt!==void 0&&(dt.update(K.inputSource,K.frame,c||o),dt.dispatchEvent({type:K.type,data:K.inputSource}))}function k(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",V);for(let K=0;K<y.length;K++){const et=v[K];et!==null&&(v[K]=null,y[K].disconnect(et))}w=null,N=null,_.reset(),t.setRenderTarget(m),p=null,u=null,d=null,i=null,x=null,zt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return f},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",k),i.addEventListener("inputsourceschange",V),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(E),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,ct=null,Ct=null;g.depth&&(Ct=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,dt=g.stencil?Cr:gr,ct=g.stencil?Ar:zs);const Yt={colorFormat:e.RGBA8,depthFormat:Ct,scaleFactor:r};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(Yt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),x=new Bs(u.textureWidth,u.textureHeight,{format:si,type:Ii,depthTexture:new Pf(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const dt={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,dt),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Bs(p.framebufferWidth,p.framebufferHeight,{format:si,type:Ii,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),zt.setContext(i),zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function V(K){for(let et=0;et<K.removed.length;et++){const dt=K.removed[et],ct=v.indexOf(dt);ct>=0&&(v[ct]=null,y[ct].disconnect(dt))}for(let et=0;et<K.added.length;et++){const dt=K.added[et];let ct=v.indexOf(dt);if(ct===-1){for(let Yt=0;Yt<y.length;Yt++)if(Yt>=v.length){v.push(dt),ct=Yt;break}else if(v[Yt]===null){v[Yt]=dt,ct=Yt;break}if(ct===-1)break}const Ct=y[ct];Ct&&Ct.connect(dt)}}const B=new L,G=new L;function W(K,et,dt){B.setFromMatrixPosition(et.matrixWorld),G.setFromMatrixPosition(dt.matrixWorld);const ct=B.distanceTo(G),Ct=et.projectionMatrix.elements,Yt=dt.projectionMatrix.elements,vt=Ct[14]/(Ct[10]-1),te=Ct[14]/(Ct[10]+1),wt=(Ct[9]+1)/Ct[5],Vt=(Ct[9]-1)/Ct[5],z=(Ct[8]-1)/Ct[0],Se=(Yt[8]+1)/Yt[0],$t=vt*z,qt=vt*Se,Pt=ct/(-z+Se),re=Pt*-z;if(et.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(re),K.translateZ(Pt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ct[10]===-1)K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const gt=vt+Pt,D=te+Pt,A=$t-re,$=qt+(ct-re),rt=wt*te/D*gt,at=Vt*te/D*gt;K.projectionMatrix.makePerspective(A,$,rt,at,gt,D),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function st(K,et){et===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(et.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let et=K.near,dt=K.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(dt=_.depthFar)),S.near=P.near=b.near=et,S.far=P.far=b.far=dt,(w!==S.near||N!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,N=S.far),b.layers.mask=K.layers.mask|2,P.layers.mask=K.layers.mask|4,S.layers.mask=b.layers.mask|P.layers.mask;const ct=K.parent,Ct=S.cameras;st(S,ct);for(let Yt=0;Yt<Ct.length;Yt++)st(Ct[Yt],ct);Ct.length===2?W(S,b,P):S.projectionMatrix.copy(b.projectionMatrix),it(K,S,ct)};function it(K,et,dt){dt===null?K.matrix.copy(et.matrixWorld):(K.matrix.copy(dt.matrixWorld),K.matrix.invert(),K.matrix.multiply(et.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(et.projectionMatrix),K.projectionMatrixInverse.copy(et.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=yo*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(K){l=K,u!==null&&(u.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let pt=null;function yt(K,et){if(h=et.getViewerPose(c||o),f=et,h!==null){const dt=h.views;p!==null&&(t.setRenderTargetFramebuffer(x,p.framebuffer),t.setRenderTarget(x));let ct=!1;dt.length!==S.cameras.length&&(S.cameras.length=0,ct=!0);for(let vt=0;vt<dt.length;vt++){const te=dt[vt];let wt=null;if(p!==null)wt=p.getViewport(te);else{const z=d.getViewSubImage(u,te);wt=z.viewport,vt===0&&(t.setRenderTargetTextures(x,z.colorTexture,u.ignoreDepthValues?void 0:z.depthStencilTexture),t.setRenderTarget(x))}let Vt=M[vt];Vt===void 0&&(Vt=new un,Vt.layers.enable(vt),Vt.viewport=new Me,M[vt]=Vt),Vt.matrix.fromArray(te.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(te.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(wt.x,wt.y,wt.width,wt.height),vt===0&&(S.matrix.copy(Vt.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ct===!0&&S.cameras.push(Vt)}const Ct=i.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&d){const vt=d.getDepthInformation(dt[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,i.renderState)}}for(let dt=0;dt<y.length;dt++){const ct=v[dt],Ct=y[dt];ct!==null&&Ct!==void 0&&Ct.update(ct,et,c||o)}pt&&pt(K,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),f=null}const zt=new Hf;zt.setAnimationLoop(yt),this.setAnimationLoop=function(K){pt=K},this.dispose=function(){}}}const xs=new _i,EM=new Ee;function bM(s,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Tf(s)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function i(g,m,x,y,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&p(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),f(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),_(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===fn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===fn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const x=t.get(m),y=x.envMap,v=x.envMapRotation;y&&(g.envMap.value=y,xs.copy(v),xs.x*=-1,xs.y*=-1,xs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),g.envMapRotation.value.setFromMatrix4(EM.makeRotationFromEuler(xs)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=y*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function p(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===fn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function wM(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(f(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",g));const E=y.program;n.updateUBOMapping(x,E);const T=t.render.frame;r[x.id]!==T&&(u(x),r[x.id]=T)}function h(x){const y=d();x.__bindingPointIndex=y;const v=s.createBuffer(),E=x.__size,T=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,E,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function d(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const y=i[x.id],v=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let T=0,b=v.length;T<b;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,S=P.length;M<S;M++){const w=P[M];if(p(w,T,M,E)===!0){const N=w.__offset,O=Array.isArray(w.value)?w.value:[w.value];let k=0;for(let V=0;V<O.length;V++){const B=O[V],G=_(B);typeof B=="number"||typeof B=="boolean"?(w.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,N+k,w.__data)):B.isMatrix3?(w.__data[0]=B.elements[0],w.__data[1]=B.elements[1],w.__data[2]=B.elements[2],w.__data[3]=0,w.__data[4]=B.elements[3],w.__data[5]=B.elements[4],w.__data[6]=B.elements[5],w.__data[7]=0,w.__data[8]=B.elements[6],w.__data[9]=B.elements[7],w.__data[10]=B.elements[8],w.__data[11]=0):(B.toArray(w.__data,k),k+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,y,v,E){const T=x.value,b=y+"_"+v;if(E[b]===void 0)return typeof T=="number"||typeof T=="boolean"?E[b]=T:E[b]=T.clone(),!0;{const P=E[b];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return E[b]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function f(x){const y=x.uniforms;let v=0;const E=16;for(let b=0,P=y.length;b<P;b++){const M=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,w=M.length;S<w;S++){const N=M[S],O=Array.isArray(N.value)?N.value:[N.value];for(let k=0,V=O.length;k<V;k++){const B=O[k],G=_(B),W=v%E,st=W%G.boundary,it=W+st;v+=st,it!==0&&E-it<G.storage&&(v+=E-it),N.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=G.storage}}}const T=v%E;return T>0&&(v+=E-T),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function g(x){const y=x.target;y.removeEventListener("dispose",g);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:m}}class il{constructor(t={}){const{canvas:e=A_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,m=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Pn,this.toneMapping=ts,this.toneMappingExposure=1;const v=this;let E=!1,T=0,b=0,P=null,M=-1,S=null;const w=new Me,N=new Me;let O=null;const k=new kt(0);let V=0,B=e.width,G=e.height,W=1,st=null,it=null;const pt=new Me(0,0,B,G),yt=new Me(0,0,B,G);let zt=!1;const K=new Rh;let et=!1,dt=!1;this.transmissionResolutionScale=1;const ct=new Ee,Ct=new Ee,Yt=new L,vt=new Me,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Vt(){return P===null?W:1}let z=n;function Se(R,X){return e.getContext(R,X)}try{const R={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mh}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",C,!1),z===null){const X="webgl2";if(z=Se(X,R),z===null)throw Se(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,qt,Pt,re,gt,D,A,$,rt,at,Q,Rt,ft,_t,Gt,lt,Mt,Lt,Ft,bt,Wt,Nt,ee,H;function mt(){$t=new Nx(z),$t.init(),Nt=new vM(z,$t),qt=new Rx(z,$t,t,Nt),Pt=new _M(z,$t),qt.reverseDepthBuffer&&u&&Pt.buffers.depth.setReversed(!0),re=new Bx(z),gt=new iM,D=new gM(z,$t,Pt,gt,qt,Nt,re),A=new Dx(v),$=new Fx(v),rt=new Xg(z),ee=new Ax(z,rt),at=new Ox(z,rt,re,ee),Q=new Vx(z,at,rt,re),Ft=new kx(z,qt,D),lt=new Px(gt),Rt=new nM(v,A,$,$t,qt,ee,lt),ft=new bM(v,gt),_t=new rM,Gt=new uM($t),Lt=new Tx(v,A,$,Pt,Q,p,l),Mt=new pM(v,Q,qt),H=new wM(z,re,qt,Pt),bt=new Cx(z,$t,re),Wt=new zx(z,$t,re),re.programs=Rt.programs,v.capabilities=qt,v.extensions=$t,v.properties=gt,v.renderLists=_t,v.shadowMap=Mt,v.state=Pt,v.info=re}mt();const Z=new SM(v,z);this.xr=Z,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,G,!1))},this.getSize=function(R){return R.set(B,G)},this.setSize=function(R,X,j=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,G=X,e.width=Math.floor(R*W),e.height=Math.floor(X*W),j===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(B*W,G*W).floor()},this.setDrawingBufferSize=function(R,X,j){B=R,G=X,W=j,e.width=Math.floor(R*j),e.height=Math.floor(X*j),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(pt)},this.setViewport=function(R,X,j,J){R.isVector4?pt.set(R.x,R.y,R.z,R.w):pt.set(R,X,j,J),Pt.viewport(w.copy(pt).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(yt)},this.setScissor=function(R,X,j,J){R.isVector4?yt.set(R.x,R.y,R.z,R.w):yt.set(R,X,j,J),Pt.scissor(N.copy(yt).multiplyScalar(W).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(R){Pt.setScissorTest(zt=R)},this.setOpaqueSort=function(R){st=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(R=!0,X=!0,j=!0){let J=0;if(R){let q=!1;if(P!==null){const ht=P.texture.format;q=ht===Sh||ht===Mh||ht===yh}if(q){const ht=P.texture.type,Tt=ht===Ii||ht===zs||ht===xo||ht===Ar||ht===vh||ht===xh,It=Lt.getClearColor(),Ut=Lt.getClearAlpha(),jt=It.r,Kt=It.g,Ht=It.b;Tt?(f[0]=jt,f[1]=Kt,f[2]=Ht,f[3]=Ut,z.clearBufferuiv(z.COLOR,0,f)):(_[0]=jt,_[1]=Kt,_[2]=Ht,_[3]=Ut,z.clearBufferiv(z.COLOR,0,_))}else J|=z.COLOR_BUFFER_BIT}X&&(J|=z.DEPTH_BUFFER_BIT),j&&(J|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",C,!1),Lt.dispose(),_t.dispose(),Gt.dispose(),gt.dispose(),A.dispose(),$.dispose(),Q.dispose(),ee.dispose(),H.dispose(),Rt.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",St),Z.removeEventListener("sessionend",Zt),Bt.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const R=re.autoReset,X=Mt.enabled,j=Mt.autoUpdate,J=Mt.needsUpdate,q=Mt.type;mt(),re.autoReset=R,Mt.enabled=X,Mt.autoUpdate=j,Mt.needsUpdate=J,Mt.type=q}function C(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function U(R){const X=R.target;X.removeEventListener("dispose",U),I(X)}function I(R){F(R),gt.remove(R)}function F(R){const X=gt.get(R).programs;X!==void 0&&(X.forEach(function(j){Rt.releaseProgram(j)}),R.isShaderMaterial&&Rt.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,j,J,q,ht){X===null&&(X=te);const Tt=q.isMesh&&q.matrixWorld.determinant()<0,It=on(R,X,j,J,q);Pt.setMaterial(J,Tt);let Ut=j.index,jt=1;if(J.wireframe===!0){if(Ut=at.getWireframeAttribute(j),Ut===void 0)return;jt=2}const Kt=j.drawRange,Ht=j.attributes.position;let ce=Kt.start*jt,fe=(Kt.start+Kt.count)*jt;ht!==null&&(ce=Math.max(ce,ht.start*jt),fe=Math.min(fe,(ht.start+ht.count)*jt)),Ut!==null?(ce=Math.max(ce,0),fe=Math.min(fe,Ut.count)):Ht!=null&&(ce=Math.max(ce,0),fe=Math.min(fe,Ht.count));const Fe=fe-ce;if(Fe<0||Fe===1/0)return;ee.setup(q,J,It,j,Ut);let Le,he=bt;if(Ut!==null&&(Le=rt.get(Ut),he=Wt,he.setIndex(Le)),q.isMesh)J.wireframe===!0?(Pt.setLineWidth(J.wireframeLinewidth*Vt()),he.setMode(z.LINES)):he.setMode(z.TRIANGLES);else if(q.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),Pt.setLineWidth(Xt*Vt()),q.isLineSegments?he.setMode(z.LINES):q.isLineLoop?he.setMode(z.LINE_LOOP):he.setMode(z.LINE_STRIP)}else q.isPoints?he.setMode(z.POINTS):q.isSprite&&he.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Es("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),he.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))he.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Xt=q._multiDrawStarts,$e=q._multiDrawCounts,pe=q._multiDrawCount,Kn=Ut?rt.get(Ut).bytesPerElement:1,qs=gt.get(J).currentProgram.getUniforms();for(let An=0;An<pe;An++)qs.setValue(z,"_gl_DrawID",An),he.render(Xt[An]/Kn,$e[An])}else if(q.isInstancedMesh)he.renderInstances(ce,Fe,q.count);else if(j.isInstancedBufferGeometry){const Xt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,$e=Math.min(j.instanceCount,Xt);he.renderInstances(ce,Fe,$e)}else he.render(ce,Fe)};function Y(R,X,j){R.transparent===!0&&R.side===ke&&R.forceSinglePass===!1?(R.side=fn,R.needsUpdate=!0,xt(R,X,j),R.side=ss,R.needsUpdate=!0,xt(R,X,j),R.side=ke):xt(R,X,j)}this.compile=function(R,X,j=null){j===null&&(j=R),m=Gt.get(j),m.init(X),y.push(m),j.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),R!==j&&R.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(m.pushLight(q),q.castShadow&&m.pushShadow(q))}),m.setupLights();const J=new Set;return R.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ht=q.material;if(ht)if(Array.isArray(ht))for(let Tt=0;Tt<ht.length;Tt++){const It=ht[Tt];Y(It,j,q),J.add(It)}else Y(ht,j,q),J.add(ht)}),m=y.pop(),J},this.compileAsync=function(R,X,j=null){const J=this.compile(R,X,j);return new Promise(q=>{function ht(){if(J.forEach(function(Tt){gt.get(Tt).currentProgram.isReady()&&J.delete(Tt)}),J.size===0){q(R);return}setTimeout(ht,10)}$t.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ot=null;function ut(R){ot&&ot(R)}function St(){Bt.stop()}function Zt(){Bt.start()}const Bt=new Hf;Bt.setAnimationLoop(ut),typeof self<"u"&&Bt.setContext(self),this.setAnimationLoop=function(R){ot=R,Z.setAnimationLoop(R),R===null?Bt.stop():Bt.start()},Z.addEventListener("sessionstart",St),Z.addEventListener("sessionend",Zt),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(X),X=Z.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,P),m=Gt.get(R,y.length),m.init(X),y.push(m),Ct.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),K.setFromProjectionMatrix(Ct),dt=this.localClippingEnabled,et=lt.init(this.clippingPlanes,dt),g=_t.get(R,x.length),g.init(),x.push(g),Z.enabled===!0&&Z.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&Ot(ht,X,-1/0,v.sortObjects)}Ot(R,X,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(st,it),wt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,wt&&Lt.addToRenderList(g,R),this.info.render.frame++,et===!0&&lt.beginShadows();const j=m.state.shadowsArray;Mt.render(j,R,X),et===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=g.opaque,q=g.transmissive;if(m.setupLights(),X.isArrayCamera){const ht=X.cameras;if(q.length>0)for(let Tt=0,It=ht.length;Tt<It;Tt++){const Ut=ht[Tt];Ye(J,q,R,Ut)}wt&&Lt.render(R);for(let Tt=0,It=ht.length;Tt<It;Tt++){const Ut=ht[Tt];Jt(g,R,Ut,Ut.viewport)}}else q.length>0&&Ye(J,q,R,X),wt&&Lt.render(R),Jt(g,R,X);P!==null&&b===0&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),R.isScene===!0&&R.onAfterRender(v,R,X),ee.resetDefaultState(),M=-1,S=null,y.pop(),y.length>0?(m=y[y.length-1],et===!0&&lt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function Ot(R,X,j,J){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||K.intersectsSprite(R)){J&&vt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Ct);const Tt=Q.update(R),It=R.material;It.visible&&g.push(R,Tt,It,j,vt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||K.intersectsObject(R))){const Tt=Q.update(R),It=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),vt.copy(R.boundingSphere.center)):(Tt.boundingSphere===null&&Tt.computeBoundingSphere(),vt.copy(Tt.boundingSphere.center)),vt.applyMatrix4(R.matrixWorld).applyMatrix4(Ct)),Array.isArray(It)){const Ut=Tt.groups;for(let jt=0,Kt=Ut.length;jt<Kt;jt++){const Ht=Ut[jt],ce=It[Ht.materialIndex];ce&&ce.visible&&g.push(R,Tt,ce,j,vt.z,Ht)}}else It.visible&&g.push(R,Tt,It,j,vt.z,null)}}const ht=R.children;for(let Tt=0,It=ht.length;Tt<It;Tt++)Ot(ht[Tt],X,j,J)}function Jt(R,X,j,J){const q=R.opaque,ht=R.transmissive,Tt=R.transparent;m.setupLightsView(j),et===!0&&lt.setGlobalState(v.clippingPlanes,j),J&&Pt.viewport(w.copy(J)),q.length>0&&rn(q,X,j),ht.length>0&&rn(ht,X,j),Tt.length>0&&rn(Tt,X,j),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ye(R,X,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[J.id]===void 0&&(m.state.transmissionRenderTarget[J.id]=new Bs(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?No:Ii,minFilter:$i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));const ht=m.state.transmissionRenderTarget[J.id],Tt=J.viewport||w;ht.setSize(Tt.z*v.transmissionResolutionScale,Tt.w*v.transmissionResolutionScale);const It=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(k),V=v.getClearAlpha(),V<1&&v.setClearColor(16777215,.5),v.clear(),wt&&Lt.render(j);const Ut=v.toneMapping;v.toneMapping=ts;const jt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),m.setupLightsView(J),et===!0&&lt.setGlobalState(v.clippingPlanes,J),rn(R,j,J),D.updateMultisampleRenderTarget(ht),D.updateRenderTargetMipmap(ht),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ht=0,ce=X.length;Ht<ce;Ht++){const fe=X[Ht],Fe=fe.object,Le=fe.geometry,he=fe.material,Xt=fe.group;if(he.side===ke&&Fe.layers.test(J.layers)){const $e=he.side;he.side=fn,he.needsUpdate=!0,Dt(Fe,j,J,Le,he,Xt),he.side=$e,he.needsUpdate=!0,Kt=!0}}Kt===!0&&(D.updateMultisampleRenderTarget(ht),D.updateRenderTargetMipmap(ht))}v.setRenderTarget(It),v.setClearColor(k,V),jt!==void 0&&(J.viewport=jt),v.toneMapping=Ut}function rn(R,X,j){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,ht=R.length;q<ht;q++){const Tt=R[q],It=Tt.object,Ut=Tt.geometry,jt=J===null?Tt.material:J,Kt=Tt.group;It.layers.test(j.layers)&&Dt(It,X,j,Ut,jt,Kt)}}function Dt(R,X,j,J,q,ht){R.onBeforeRender(v,X,j,J,q,ht),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),q.onBeforeRender(v,X,j,J,R,ht),q.transparent===!0&&q.side===ke&&q.forceSinglePass===!1?(q.side=fn,q.needsUpdate=!0,v.renderBufferDirect(j,X,J,q,R,ht),q.side=ss,q.needsUpdate=!0,v.renderBufferDirect(j,X,J,q,R,ht),q.side=ke):v.renderBufferDirect(j,X,J,q,R,ht),R.onAfterRender(v,X,j,J,q,ht)}function xt(R,X,j){X.isScene!==!0&&(X=te);const J=gt.get(R),q=m.state.lights,ht=m.state.shadowsArray,Tt=q.state.version,It=Rt.getParameters(R,q.state,ht,X,j),Ut=Rt.getProgramCacheKey(It);let jt=J.programs;J.environment=R.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(R.isMeshStandardMaterial?$:A).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,jt===void 0&&(R.addEventListener("dispose",U),jt=new Map,J.programs=jt);let Kt=jt.get(Ut);if(Kt!==void 0){if(J.currentProgram===Kt&&J.lightsStateVersion===Tt)return ve(R,It),Kt}else It.uniforms=Rt.getUniforms(R),R.onBeforeCompile(It,v),Kt=Rt.acquireProgram(It,Ut),jt.set(Ut,Kt),J.uniforms=It.uniforms;const Ht=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=lt.uniform),ve(R,It),J.needsLights=ze(R),J.lightsStateVersion=Tt,J.needsLights&&(Ht.ambientLightColor.value=q.state.ambient,Ht.lightProbe.value=q.state.probe,Ht.directionalLights.value=q.state.directional,Ht.directionalLightShadows.value=q.state.directionalShadow,Ht.spotLights.value=q.state.spot,Ht.spotLightShadows.value=q.state.spotShadow,Ht.rectAreaLights.value=q.state.rectArea,Ht.ltc_1.value=q.state.rectAreaLTC1,Ht.ltc_2.value=q.state.rectAreaLTC2,Ht.pointLights.value=q.state.point,Ht.pointLightShadows.value=q.state.pointShadow,Ht.hemisphereLights.value=q.state.hemi,Ht.directionalShadowMap.value=q.state.directionalShadowMap,Ht.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ht.spotShadowMap.value=q.state.spotShadowMap,Ht.spotLightMatrix.value=q.state.spotLightMatrix,Ht.spotLightMap.value=q.state.spotLightMap,Ht.pointShadowMap.value=q.state.pointShadowMap,Ht.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=Kt,J.uniformsList=null,Kt}function oe(R){if(R.uniformsList===null){const X=R.currentProgram.getUniforms();R.uniformsList=wa.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function ve(R,X){const j=gt.get(R);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function on(R,X,j,J,q){X.isScene!==!0&&(X=te),D.resetTextureUnits();const ht=X.fog,Tt=J.isMeshStandardMaterial?X.environment:null,It=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Rr,Ut=(J.isMeshStandardMaterial?$:A).get(J.envMap||Tt),jt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Kt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!j.morphAttributes.position,ce=!!j.morphAttributes.normal,fe=!!j.morphAttributes.color;let Fe=ts;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Fe=v.toneMapping);const Le=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,he=Le!==void 0?Le.length:0,Xt=gt.get(J),$e=m.state.lights;if(et===!0&&(dt===!0||R!==S)){const ln=R===S&&J.id===M;lt.setState(J,R,ln)}let pe=!1;J.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==$e.state.version||Xt.outputColorSpace!==It||q.isBatchedMesh&&Xt.batching===!1||!q.isBatchedMesh&&Xt.batching===!0||q.isBatchedMesh&&Xt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Xt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Xt.instancing===!1||!q.isInstancedMesh&&Xt.instancing===!0||q.isSkinnedMesh&&Xt.skinning===!1||!q.isSkinnedMesh&&Xt.skinning===!0||q.isInstancedMesh&&Xt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Xt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Xt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Xt.instancingMorph===!1&&q.morphTexture!==null||Xt.envMap!==Ut||J.fog===!0&&Xt.fog!==ht||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==lt.numPlanes||Xt.numIntersection!==lt.numIntersection)||Xt.vertexAlphas!==jt||Xt.vertexTangents!==Kt||Xt.morphTargets!==Ht||Xt.morphNormals!==ce||Xt.morphColors!==fe||Xt.toneMapping!==Fe||Xt.morphTargetsCount!==he)&&(pe=!0):(pe=!0,Xt.__version=J.version);let Kn=Xt.currentProgram;pe===!0&&(Kn=xt(J,X,q));let qs=!1,An=!1,Xr=!1;const we=Kn.getUniforms(),Vn=Xt.uniforms;if(Pt.useProgram(Kn.program)&&(qs=!0,An=!0,Xr=!0),J.id!==M&&(M=J.id,An=!0),qs||S!==R){Pt.buffers.depth.getReversed()?(ct.copy(R.projectionMatrix),R_(ct),P_(ct),we.setValue(z,"projectionMatrix",ct)):we.setValue(z,"projectionMatrix",R.projectionMatrix),we.setValue(z,"viewMatrix",R.matrixWorldInverse);const _n=we.map.cameraPosition;_n!==void 0&&_n.setValue(z,Yt.setFromMatrixPosition(R.matrixWorld)),qt.logarithmicDepthBuffer&&we.setValue(z,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&we.setValue(z,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,An=!0,Xr=!0)}if(q.isSkinnedMesh){we.setOptional(z,q,"bindMatrix"),we.setOptional(z,q,"bindMatrixInverse");const ln=q.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),we.setValue(z,"boneTexture",ln.boneTexture,D))}q.isBatchedMesh&&(we.setOptional(z,q,"batchingTexture"),we.setValue(z,"batchingTexture",q._matricesTexture,D),we.setOptional(z,q,"batchingIdTexture"),we.setValue(z,"batchingIdTexture",q._indirectTexture,D),we.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&we.setValue(z,"batchingColorTexture",q._colorsTexture,D));const Hn=j.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Ft.update(q,j,Kn),(An||Xt.receiveShadow!==q.receiveShadow)&&(Xt.receiveShadow=q.receiveShadow,we.setValue(z,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Vn.envMap.value=Ut,Vn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Vn.envMapIntensity.value=X.environmentIntensity),An&&(we.setValue(z,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&an(Vn,Xr),ht&&J.fog===!0&&ft.refreshFogUniforms(Vn,ht),ft.refreshMaterialUniforms(Vn,J,W,G,m.state.transmissionRenderTarget[R.id]),wa.upload(z,oe(Xt),Vn,D)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(wa.upload(z,oe(Xt),Vn,D),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&we.setValue(z,"center",q.center),we.setValue(z,"modelViewMatrix",q.modelViewMatrix),we.setValue(z,"normalMatrix",q.normalMatrix),we.setValue(z,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const ln=J.uniformsGroups;for(let _n=0,hl=ln.length;_n<hl;_n++){const fs=ln[_n];H.update(fs,Kn),H.bind(fs,Kn)}}return Kn}function an(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function ze(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(R,X,j){gt.get(R.texture).__webglTexture=X,gt.get(R.depthTexture).__webglTexture=j;const J=gt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){const j=gt.get(R);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0};const qe=z.createFramebuffer();this.setRenderTarget=function(R,X=0,j=0){P=R,T=X,b=j;let J=!0,q=null,ht=!1,Tt=!1;if(R){const Ut=gt.get(R);if(Ut.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(z.FRAMEBUFFER,null),J=!1;else if(Ut.__webglFramebuffer===void 0)D.setupRenderTarget(R);else if(Ut.__hasExternalTextures)D.rebindTextures(R,gt.get(R.texture).__webglTexture,gt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ht=R.depthTexture;if(Ut.__boundDepthTexture!==Ht){if(Ht!==null&&gt.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(R)}}const jt=R.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Tt=!0);const Kt=gt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Kt[X])?q=Kt[X][j]:q=Kt[X],ht=!0):R.samples>0&&D.useMultisampledRTT(R)===!1?q=gt.get(R).__webglMultisampledFramebuffer:Array.isArray(Kt)?q=Kt[j]:q=Kt,w.copy(R.viewport),N.copy(R.scissor),O=R.scissorTest}else w.copy(pt).multiplyScalar(W).floor(),N.copy(yt).multiplyScalar(W).floor(),O=zt;if(j!==0&&(q=qe),Pt.bindFramebuffer(z.FRAMEBUFFER,q)&&J&&Pt.drawBuffers(R,q),Pt.viewport(w),Pt.scissor(N),Pt.setScissorTest(O),ht){const Ut=gt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ut.__webglTexture,j)}else if(Tt){const Ut=gt.get(R.texture),jt=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.__webglTexture,j,jt)}else if(R!==null&&j!==0){const Ut=gt.get(R.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ut.__webglTexture,j)}M=-1},this.readRenderTargetPixels=function(R,X,j,J,q,ht,Tt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){Pt.bindFramebuffer(z.FRAMEBUFFER,It);try{const Ut=R.texture,jt=Ut.format,Kt=Ut.type;if(!qt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qt.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-J&&j>=0&&j<=R.height-q&&z.readPixels(X,j,J,q,Nt.convert(jt),Nt.convert(Kt),ht)}finally{const Ut=P!==null?gt.get(P).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(R,X,j,J,q,ht,Tt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=gt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Tt!==void 0&&(It=It[Tt]),It){const Ut=R.texture,jt=Ut.format,Kt=Ut.type;if(!qt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qt.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-J&&j>=0&&j<=R.height-q){Pt.bindFramebuffer(z.FRAMEBUFFER,It);const Ht=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ht),z.bufferData(z.PIXEL_PACK_BUFFER,ht.byteLength,z.STREAM_READ),z.readPixels(X,j,J,q,Nt.convert(jt),Nt.convert(Kt),0);const ce=P!==null?gt.get(P).__webglFramebuffer:null;Pt.bindFramebuffer(z.FRAMEBUFFER,ce);const fe=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await C_(z,fe,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ht),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,ht),z.deleteBuffer(Ht),z.deleteSync(fe),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,j=0){R.isTexture!==!0&&(Es("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);const J=Math.pow(2,-j),q=Math.floor(R.image.width*J),ht=Math.floor(R.image.height*J),Tt=X!==null?X.x:0,It=X!==null?X.y:0;D.setTexture2D(R,0),z.copyTexSubImage2D(z.TEXTURE_2D,j,0,0,Tt,It,q,ht),Pt.unbindTexture()};const mn=z.createFramebuffer(),de=z.createFramebuffer();this.copyTextureToTexture=function(R,X,j=null,J=null,q=0,ht=null){R.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],X=arguments[2],ht=arguments[3]||0,j=null),ht===null&&(q!==0?(Es("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ht=q,q=0):ht=0);let Tt,It,Ut,jt,Kt,Ht,ce,fe,Fe;const Le=R.isCompressedTexture?R.mipmaps[ht]:R.image;if(j!==null)Tt=j.max.x-j.min.x,It=j.max.y-j.min.y,Ut=j.isBox3?j.max.z-j.min.z:1,jt=j.min.x,Kt=j.min.y,Ht=j.isBox3?j.min.z:0;else{const Hn=Math.pow(2,-q);Tt=Math.floor(Le.width*Hn),It=Math.floor(Le.height*Hn),R.isDataArrayTexture?Ut=Le.depth:R.isData3DTexture?Ut=Math.floor(Le.depth*Hn):Ut=1,jt=0,Kt=0,Ht=0}J!==null?(ce=J.x,fe=J.y,Fe=J.z):(ce=0,fe=0,Fe=0);const he=Nt.convert(X.format),Xt=Nt.convert(X.type);let $e;X.isData3DTexture?(D.setTexture3D(X,0),$e=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),$e=z.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),$e=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const pe=z.getParameter(z.UNPACK_ROW_LENGTH),Kn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),qs=z.getParameter(z.UNPACK_SKIP_PIXELS),An=z.getParameter(z.UNPACK_SKIP_ROWS),Xr=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Le.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Le.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,jt),z.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ht);const we=R.isDataArrayTexture||R.isData3DTexture,Vn=X.isDataArrayTexture||X.isData3DTexture;if(R.isDepthTexture){const Hn=gt.get(R),ln=gt.get(X),_n=gt.get(Hn.__renderTarget),hl=gt.get(ln.__renderTarget);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,_n.__webglFramebuffer),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,hl.__webglFramebuffer);for(let fs=0;fs<Ut;fs++)we&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gt.get(R).__webglTexture,q,Ht+fs),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,gt.get(X).__webglTexture,ht,Fe+fs)),z.blitFramebuffer(jt,Kt,Tt,It,ce,fe,Tt,It,z.DEPTH_BUFFER_BIT,z.NEAREST);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||R.isRenderTargetTexture||gt.has(R)){const Hn=gt.get(R),ln=gt.get(X);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,mn),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,de);for(let _n=0;_n<Ut;_n++)we?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Hn.__webglTexture,q,Ht+_n):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Hn.__webglTexture,q),Vn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ln.__webglTexture,ht,Fe+_n):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ln.__webglTexture,ht),q!==0?z.blitFramebuffer(jt,Kt,Tt,It,ce,fe,Tt,It,z.COLOR_BUFFER_BIT,z.NEAREST):Vn?z.copyTexSubImage3D($e,ht,ce,fe,Fe+_n,jt,Kt,Tt,It):z.copyTexSubImage2D($e,ht,ce,fe,jt,Kt,Tt,It);Pt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Vn?R.isDataTexture||R.isData3DTexture?z.texSubImage3D($e,ht,ce,fe,Fe,Tt,It,Ut,he,Xt,Le.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D($e,ht,ce,fe,Fe,Tt,It,Ut,he,Le.data):z.texSubImage3D($e,ht,ce,fe,Fe,Tt,It,Ut,he,Xt,Le):R.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,ht,ce,fe,Tt,It,he,Xt,Le.data):R.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,ht,ce,fe,Le.width,Le.height,he,Le.data):z.texSubImage2D(z.TEXTURE_2D,ht,ce,fe,Tt,It,he,Xt,Le);z.pixelStorei(z.UNPACK_ROW_LENGTH,pe),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Kn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,qs),z.pixelStorei(z.UNPACK_SKIP_ROWS,An),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Xr),ht===0&&X.generateMipmaps&&z.generateMipmap($e),Pt.unbindTexture()},this.copyTextureToTexture3D=function(R,X,j=null,J=null,q=0){return R.isTexture!==!0&&(Es("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,R=arguments[2],X=arguments[3],q=arguments[4]||0),Es('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,j,J,q)},this.initRenderTarget=function(R){gt.get(R).__webglFramebuffer===void 0&&D.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?D.setTextureCube(R,0):R.isData3DTexture?D.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?D.setTexture2DArray(R,0):D.setTexture2D(R,0),Pt.unbindTexture()},this.resetState=function(){T=0,b=0,P=null,Pt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}}const _d={type:"change"},zh={type:"start"},qf={type:"end"},fa=new Qa,gd=new Ai,TM=Math.cos(70*yf.DEG2RAD),Be=new L,gn=2*Math.PI,ge={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Xl=1e-6;class $f extends Gg{constructor(t,e=null){super(t,e),this.state=ge.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:mr.ROTATE,MIDDLE:mr.DOLLY,RIGHT:mr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new ks,this._lastTargetPosition=new L,this._quat=new ks().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ka,this._sphericalDelta=new ka,this._scale=1,this._panOffset=new L,this._rotateStart=new At,this._rotateEnd=new At,this._rotateDelta=new At,this._panStart=new At,this._panEnd=new At,this._panDelta=new At,this._dollyStart=new At,this._dollyEnd=new At,this._dollyDelta=new At,this._dollyDirection=new L,this._mouse=new At,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=CM.bind(this),this._onPointerDown=AM.bind(this),this._onPointerUp=RM.bind(this),this._onContextMenu=NM.bind(this),this._onMouseWheel=LM.bind(this),this._onKeyDown=IM.bind(this),this._onTouchStart=UM.bind(this),this._onTouchMove=FM.bind(this),this._onMouseDown=PM.bind(this),this._onMouseMove=DM.bind(this),this._interceptControlDown=OM.bind(this),this._interceptControlUp=zM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(_d),this.update(),this.state=ge.NONE}update(t=null){const e=this.object.position;Be.copy(e).sub(this.target),Be.applyQuaternion(this._quat),this._spherical.setFromVector3(Be),this.autoRotate&&this.state===ge.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),i<-Math.PI?i+=gn:i>Math.PI&&(i-=gn),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Be.setFromSpherical(this._spherical),Be.applyQuaternion(this._quatInverse),e.copy(this.target).add(Be),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Be.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new L(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Be.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fa.origin.copy(this.object.position),fa.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fa.direction))<TM?this.object.lookAt(this.target):(gd.setFromNormalAndCoplanarPoint(this.object.up,this.target),fa.intersectPlane(gd,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Xl||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Xl||this._lastTargetPosition.distanceToSquared(this.target)>Xl?(this.dispatchEvent(_d),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?gn/60*this.autoRotateSpeed*t:gn/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Be.setFromMatrixColumn(e,0),Be.multiplyScalar(-t),this._panOffset.add(Be)}_panUp(t,e){this.screenSpacePanning===!0?Be.setFromMatrixColumn(e,1):(Be.setFromMatrixColumn(e,0),Be.crossVectors(this.object.up,Be)),Be.multiplyScalar(t),this._panOffset.add(Be)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;Be.copy(i).sub(this.target);let r=Be.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=i/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panStart.set(n,i)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/e.clientHeight),this._rotateUp(gn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),i=.5*(t.pageY+e.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,i=t.pageY-e.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new At,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function AM(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function CM(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function RM(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(qf),this.state=ge.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function PM(s){let t;switch(s.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case mr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=ge.DOLLY;break;case mr.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ge.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ge.ROTATE}break;case mr.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=ge.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=ge.PAN}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(zh)}function DM(s){switch(this.state){case ge.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case ge.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case ge.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function LM(s){this.enabled===!1||this.enableZoom===!1||this.state!==ge.NONE||(s.preventDefault(),this.dispatchEvent(zh),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(qf))}function IM(s){this.enabled!==!1&&this._handleKeyDown(s)}function UM(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=ge.TOUCH_ROTATE;break;case cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=ge.TOUCH_PAN;break;default:this.state=ge.NONE}break;case 2:switch(this.touches.TWO){case cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=ge.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=ge.TOUCH_DOLLY_ROTATE;break;default:this.state=ge.NONE}break;default:this.state=ge.NONE}this.state!==ge.NONE&&this.dispatchEvent(zh)}function FM(s){switch(this._trackPointer(s),this.state){case ge.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case ge.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case ge.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case ge.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=ge.NONE}}function NM(s){this.enabled!==!1&&s.preventDefault()}function OM(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function zM(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Bh=(()=>{const s=(1+Math.sqrt(5))/2,t=[];function e(u,p,f){const _=[[u,p,f],[p,f,u],[f,u,p]];for(const[g,m,x]of _){const y=g===0?[0]:[g,-g],v=m===0?[0]:[m,-m],E=x===0?[0]:[x,-x];for(const T of y)for(const b of v)for(const P of E)t.push([T,b,P])}}e(0,1,3*s),e(2,1+2*s,s),e(1,2+s,2*s);for(let u=0;u<t.length;u++){const[p,f,_]=t[u],g=Math.sqrt(p*p+f*f+_*_);t[u]=[p/g,f/g,_/g]}let n=1/0;for(let u=0;u<t.length;u++)for(let p=u+1;p<t.length;p++){const f=t[u][0]-t[p][0],_=t[u][1]-t[p][1],g=t[u][2]-t[p][2],m=Math.sqrt(f*f+_*_+g*g);m<n&&(n=m)}const i=[];for(let u=0;u<t.length;u++)for(let p=u+1;p<t.length;p++){const f=t[u][0]-t[p][0],_=t[u][1]-t[p][1],g=t[u][2]-t[p][2];Math.sqrt(f*f+_*_+g*g)<n+.01&&i.push([u,p])}const o=[[0,1,s],[0,-1,s],[0,1,-s],[0,-1,-s],[1,s,0],[-1,s,0],[1,-s,0],[-1,-s,0],[s,0,1],[-s,0,1],[s,0,-1],[-s,0,-1]].map(([u,p,f])=>{const _=Math.sqrt(u*u+p*p+f*f);return[u/_,p/_,f/_]}),a=[];for(const u of o){const p=t.map((B,G)=>({i:G,d:(B[0]-u[0])**2+(B[1]-u[1])**2+(B[2]-u[2])**2}));p.sort((B,G)=>B.d-G.d);const f=p.slice(0,5).map(B=>B.i),_=f.reduce((B,G)=>B+t[G][0],0)/5,g=f.reduce((B,G)=>B+t[G][1],0)/5,m=f.reduce((B,G)=>B+t[G][2],0)/5,x=u[0],y=u[1],v=u[2],E=t[f[0]][0]-_,T=t[f[0]][1]-g,b=t[f[0]][2]-m,P=E*x+T*y+b*v;let M=E-P*x,S=T-P*y,w=b-P*v;const N=Math.sqrt(M*M+S*S+w*w);M/=N,S/=N,w/=N;const O=y*w-v*S,k=v*M-x*w,V=x*S-y*M;f.sort((B,G)=>{const W=t[B][0]-_,st=t[B][1]-g,it=t[B][2]-m,pt=t[G][0]-_,yt=t[G][1]-g,zt=t[G][2]-m;return Math.atan2(W*O+st*k+it*V,W*M+st*S+it*w)-Math.atan2(pt*O+yt*k+zt*V,pt*M+yt*S+zt*w)}),a.push(f)}const l=new Map;for(const[u,p]of i)l.has(u)||l.set(u,[]),l.has(p)||l.set(p,[]),l.get(u).push(p),l.get(p).push(u);const c=t.map((u,p)=>{const f=l.get(p),_=t[f[0]];let g=_[0]-u[0],m=_[1]-u[1],x=_[2]-u[2];const y=g*u[0]+m*u[1]+x*u[2];g-=y*u[0],m-=y*u[1],x-=y*u[2];const v=Math.sqrt(g*g+m*m+x*x);g/=v,m/=v,x/=v;const E=m*u[2]-x*u[1],T=x*u[0]-g*u[2],b=g*u[1]-m*u[0];return[...f].sort((P,M)=>{const S=[t[P][0]-u[0],t[P][1]-u[1],t[P][2]-u[2]],w=[t[M][0]-u[0],t[M][1]-u[1],t[M][2]-u[2]];return Math.atan2(S[0]*E+S[1]*T+S[2]*b,S[0]*g+S[1]*m+S[2]*x)-Math.atan2(w[0]*E+w[1]*T+w[2]*b,w[0]*g+w[1]*m+w[2]*x)})}),h=[],d=new Set;for(const[u,p]of i)for(const[f,_]of[[u,p],[p,u]]){const g=`${f}-${_}`;if(d.has(g))continue;const m=[];let x=f,y=_;for(let v=0;v<8;v++){d.add(`${x}-${y}`),m.push(x);const E=c[y],T=E.indexOf(x),b=E[(T-1+E.length)%E.length];if(x=y,y=b,x===f&&y===_)break}m.length===6&&h.push(m)}return{verts:t,edges:i,pentagons:a,hexFaces:h}})();function BM(s,t,{amplitude:e,sharpness:n,segments:i,taperFn:r}){const o=Math.acos(Math.min(1,s.dot(t))),a=Math.sin(o),l=t.clone().sub(s).normalize(),c=[];for(let h=0;h<=i;h++){const d=h/i,u=s.clone().multiplyScalar(Math.sin((1-d)*o)/a).add(t.clone().multiplyScalar(Math.sin(d*o)/a)),p=u.clone().normalize(),f=new L().crossVectors(p,l).normalize(),_=Math.sin(2*Math.PI*d),g=Math.sign(_)*Math.pow(Math.abs(_),n),m=r(d),x=e*g*m;u.add(f.multiplyScalar(x)),u.normalize(),c.push(u)}return c}function Zf(s,t,e){const n=new Map;for(const[i,r]of t){const o=BM(s[i],s[r],e);n.set(`${i}-${r}`,o),n.set(`${r}-${i}`,[...o].reverse())}return n}const Te=1/Math.sqrt(3),sl=[new L(Te,Te,Te),new L(Te,Te,-Te),new L(Te,-Te,Te),new L(Te,-Te,-Te),new L(-Te,Te,Te),new L(-Te,Te,-Te),new L(-Te,-Te,Te),new L(-Te,-Te,-Te)],jf=[[0,1,3,2],[4,6,7,5],[0,4,5,1],[2,3,7,6],[0,2,6,4],[1,5,7,3]],Kf=[[0,1],[0,2],[0,4],[1,3],[1,5],[2,3],[2,6],[3,7],[4,5],[4,6],[5,7],[6,7]],kM=.72,VM=.35,HM=32;function GM(s){return Math.sin(Math.PI*s)}function Jf(){return Zf(sl,Kf,{amplitude:kM,sharpness:VM,segments:HM,taperFn:GM})}const Wn=1/Math.sqrt(3),bo=[new L(Wn,Wn,Wn),new L(Wn,-Wn,-Wn),new L(-Wn,Wn,-Wn),new L(-Wn,-Wn,Wn)],Qf=[[1,2,3],[0,2,3],[0,1,3],[0,1,2]],tp=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]],WM=.58,XM=.7,YM=32,vd=.35;function qM(s){return vd+(1-vd)*Math.sin(Math.PI*s)}function ep(){return Zf(bo,tp,{amplitude:WM,sharpness:XM,segments:YM,taperFn:qM})}const Xn=1/Math.sqrt(3),uo=[[Xn,Xn,Xn],[Xn,-Xn,-Xn],[-Xn,Xn,-Xn],[-Xn,-Xn,Xn]],np=[];for(let s=0;s<4;s++)for(let t=s+1;t<4;t++){const e=uo[s],n=uo[t];np.push([(2*e[0]+n[0])/3,(2*e[1]+n[1])/3,(2*e[2]+n[2])/3],[(e[0]+2*n[0])/3,(e[1]+2*n[1])/3,(e[2]+2*n[2])/3])}const Di=np.map(s=>{const t=Math.sqrt(s[0]*s[0]+s[1]*s[1]+s[2]*s[2]);return new L(s[0]/t,s[1]/t,s[2]/t)}),wi=[[0,2,4],[1,6,8],[3,7,10],[5,9,11],[6,8,9,11,10,7],[2,4,5,11,10,3],[4,0,1,8,9,5],[0,2,3,7,6,1]],$M=[{tetraIdx:0,edges:[[0,2],[2,4],[4,0]]},{tetraIdx:1,edges:[[1,6],[6,8],[8,1]]},{tetraIdx:2,edges:[[3,7],[7,10],[10,3]]},{tetraIdx:3,edges:[[5,9],[9,11],[11,5]]}],ip=[[0,1],[2,3],[4,5],[6,7],[8,9],[10,11]],ZM=.18,jM=.15,xd=48;function yd(s,t,e,n){const i=Math.acos(Math.min(1,s.dot(t))),r=Math.sin(i),o=t.clone().sub(s).normalize(),a=[];for(let l=0;l<=n;l++){const c=l/n,h=s.clone().multiplyScalar(Math.sin((1-c)*i)/r).add(t.clone().multiplyScalar(Math.sin(c*i)/r));if(e!==0){const d=h.clone().normalize(),u=new L().crossVectors(d,o).normalize();h.add(u.multiplyScalar(e*Math.sin(Math.PI*c)))}h.normalize(),a.push(h)}return a}function KM(s,t,e){const n=Di[s],i=Di[t],r=n.clone().add(i).multiplyScalar(.5).normalize(),o=i.clone().sub(n).normalize(),a=new L().crossVectors(r,o).normalize(),l=new L(uo[e][0],uo[e][1],uo[e][2]);return(a.dot(l)>0?-1:1)*ZM}function sp(){const s=new Map;for(const t of $M)for(const[e,n]of t.edges){const i=`${e}-${n}`;if(s.has(i))continue;const r=KM(e,n,t.tetraIdx),o=yd(Di[e],Di[n],r,xd);s.set(`${e}-${n}`,o),s.set(`${n}-${e}`,[...o].reverse())}for(const[t,e]of ip){const n=yd(Di[t],Di[e],jM,xd);s.set(`${t}-${e}`,n),s.set(`${e}-${t}`,[...n].reverse())}return s}const Lr={design:"classic",primaryColor:"#ffffff",secondaryColor:"#333333"},JM={classic:{drag:1,randomnessBonus:0,curveMultiplier:1,knuckleIntensity:0,speedRetention:1,arcModifier:1},jabulani:{drag:.8,randomnessBonus:.4,curveMultiplier:.7,knuckleIntensity:.6,speedRetention:1.15,arcModifier:1.1},brazuca:{drag:1.1,randomnessBonus:-.15,curveMultiplier:1.3,knuckleIntensity:0,speedRetention:.95,arcModifier:.95},trionda:{drag:.95,randomnessBonus:-.1,curveMultiplier:1.15,knuckleIntensity:0,speedRetention:1,arcModifier:1}},Ls={classic:{},jabulani:{},brazuca:{},trionda:{}};function di(s,t){var e;return((e=Ls[s])==null?void 0:e[t])??null}function to(s,t,e){Ls[s]||(Ls[s]={}),Ls[s][t]=e}function Qc(s){Ls[s]&&(Ls[s]={})}function QM(s){return Object.keys(Ls[s]||{}).length>0}function tS(s,t,e){const{verts:n,edges:i,pentagons:r}=Bh,o=e*1.003,a=e*.018,l=new yn({color:t.secondaryColor});for(const[f,_]of i){const g=new L(n[f][0]*o,n[f][1]*o,n[f][2]*o),m=new L(n[_][0]*o,n[_][1]*o,n[_][2]*o),x=g.clone().add(m).multiplyScalar(.5);x.normalize().multiplyScalar(o);const y=new Lh(g,x,m);s.add(new Qt(new Gr(y,16,a,8,!1),l))}const c=new us(a*1.15,8,8);for(let f=0;f<n.length;f++){const _=new Qt(c,l);_.position.set(n[f][0]*o,n[f][1]*o,n[f][2]*o),s.add(_)}const h=e*1.002,d=new yn({color:t.secondaryColor});function u(f,_,g){const m=Math.sqrt(f*f+_*_+g*g);return[f/m*h,_/m*h,g/m*h]}const p=4;for(let f=0;f<r.length;f++){const _=r[f],g=di(t.design,f),m=g?new yn({color:g}):d.clone(),x=[0,0,0];for(const T of _)x[0]+=n[T][0],x[1]+=n[T][1],x[2]+=n[T][2];x[0]/=5,x[1]/=5,x[2]/=5;const y=[];for(let T=0;T<5;T++){const b=n[_[T]],P=n[_[(T+1)%5]],M=(w,N)=>u((1-w-N)*x[0]+w*b[0]+N*P[0],(1-w-N)*x[1]+w*b[1]+N*P[1],(1-w-N)*x[2]+w*b[2]+N*P[2]),S=1/p;for(let w=0;w<p;w++)for(let N=0;N<p-w;N++){const O=M(w*S,N*S),k=M((w+1)*S,N*S),V=M(w*S,(N+1)*S);if(y.push(...O,...k,...V),w+N+1<p){const B=M((w+1)*S,(N+1)*S);y.push(...k,...B,...V)}}}const v=new be;v.setAttribute("position",new le(y,3)),v.computeVertexNormals();const E=new Qt(v,m);E.userData.stitchPanelIndex=f,s.add(E)}}function eS(s,t,e){const n=e*1.003,i=e*.016,r=new yn({color:t.secondaryColor}),o=sp();for(const[l,c]of o){const[h,d]=l.split("-").map(Number);if(h>d)continue;const u=c.map(f=>f.clone().multiplyScalar(n)),p=new tl(u,!1);s.add(new Qt(new Gr(p,48,i,8,!1),r))}const a=new us(i*1.3,8,8);for(const l of Di){const c=new Qt(a,r);c.position.set(l.x*n,l.y*n,l.z*n),s.add(c)}}function nS(s,t,e){const n=e*1.003,i=e*.018,r=new yn({color:t.secondaryColor}),o=ep();for(const[l,c]of tp){const d=o.get(`${l}-${c}`).map(f=>f.clone().multiplyScalar(n)),u=new tl(d,!1),p=new Gr(u,64,i,8,!1);s.add(new Qt(p,r))}const a=new us(i*1.5,10,10);for(const l of bo){const c=new Qt(a,r);c.position.copy(l).normalize().multiplyScalar(n),s.add(c)}}function iS(s,t,e){const n=e*1.003,i=e*.014,r=new yn({color:t.secondaryColor}),o=Jf();for(const[l,c]of Kf){const d=o.get(`${l}-${c}`).map(f=>f.clone().multiplyScalar(n)),u=new tl(d,!1),p=new Gr(u,64,i,8,!1);s.add(new Qt(p,r))}const a=new us(i*1.2,8,8);for(const l of sl){const c=new Qt(a,r);c.position.copy(l).normalize().multiplyScalar(n),s.add(c)}}function fo(s,t,e){t.design==="classic"?tS(s,t,e):t.design==="jabulani"?eS(s,t,e):t.design==="trionda"?nS(s,t,e):t.design==="brazuca"&&iS(s,t,e)}function sS(s,t,e){const n=s.length;let i=0,r=0,o=0;s.forEach(p=>{i+=p.x,r+=p.y,o+=p.z});const a=Math.sqrt(i*i+r*r+o*o),l=new L(i/a,r/a,o/a),c=t*.9995,h=16,d=[];for(let p=0;p<n;p++){const f=s[p],_=s[(p+1)%n];for(let g=0;g<h;g++)for(let m=0;m<h-g;m++){const x=(T,b)=>new L((1-T-b)*l.x+T*f.x+b*_.x,(1-T-b)*l.y+T*f.y+b*_.y,(1-T-b)*l.z+T*f.z+b*_.z).normalize().multiplyScalar(c),y=x(g/h,m/h),v=x((g+1)/h,m/h),E=x(g/h,(m+1)/h);if(d.push(y.x,y.y,y.z,v.x,v.y,v.z,E.x,E.y,E.z),g+m+1<h){const T=x((g+1)/h,(m+1)/h);d.push(v.x,v.y,v.z,T.x,T.y,T.z,E.x,E.y,E.z)}}}const u=new be;return u.setAttribute("position",new le(d,3)),u.computeVertexNormals(),new Qt(u,e)}function rS(s,t,e){const n=s.length,i=24,r=[];for(let o=0;o<n;o++)for(let a=0;a<=i;a++){const l=a/i;r.push(s[o].clone().lerp(s[(o+1)%n],l).normalize().multiplyScalar(t*1.001))}return r.push(r[0].clone()),new Hr(new be().setFromPoints(r),e)}function dr(s,t){const e=t*.9;s.forEach(({mesh:n,centroidDir:i,baseRadius:r})=>{n.position.copy(i.clone().multiplyScalar(e*r))})}function Yl(s,t){const e=s.length,n=[];for(let i=0;i<e;i++){const r=s[i],o=s[(i+1)%e],a=t.get(`${r}-${o}`);for(let l=0;l<a.length-1;l++)n.push(a[l])}return n}function ql(s,t){const e=new L;for(const n of s)e.add(t[n]);return e.normalize()}function eo(s,t,e,n,i,r){if(i===0){r.push(s.x,s.y,s.z,t.x,t.y,t.z,e.x,e.y,e.z);return}const o=s.clone().add(t).multiplyScalar(.5).normalize().multiplyScalar(n),a=t.clone().add(e).multiplyScalar(.5).normalize().multiplyScalar(n),l=e.clone().add(s).multiplyScalar(.5).normalize().multiplyScalar(n);eo(s,o,l,n,i-1,r),eo(o,t,a,n,i-1,r),eo(l,a,e,n,i-1,r),eo(o,a,l,n,i-1,r)}function $l({boundary:s,centroidDir:t,panelRadius:e,borderRadius:n,fillMat:i,borderMat:r}){const o=t.clone().multiplyScalar(e),a=[];for(let d=0;d<s.length;d++){const u=s[d].clone().multiplyScalar(e),p=s[(d+1)%s.length].clone().multiplyScalar(e);eo(o,u,p,e,4,a)}const l=new be;l.setAttribute("position",new le(a,3)),l.computeVertexNormals();const c=new In;c.add(new Qt(l,i.clone()));const h=s.map(d=>d.clone().multiplyScalar(n));return h.push(h[0].clone()),c.add(new Hr(new be().setFromPoints(h),r)),c}function po(s,t){const e=new In,n=[];e.add(new Qt(new us(t*.92,20,20),new yn({color:657930,side:fn,transparent:!0,opacity:.55})));const i=new yn({color:s.primaryColor,side:ke,emissive:s.primaryColor,emissiveIntensity:.15}),r=new yn({color:s.secondaryColor,side:ke,emissive:s.secondaryColor,emissiveIntensity:.15}),o=new Vr({color:s.secondaryColor});function a(l,c,h=l){const d=c==="black"?r.clone():i.clone();let u=0,p=0,f=0;l.forEach(x=>{u+=x.x,p+=x.y,f+=x.z});const _=Math.sqrt(u*u+p*p+f*f),g=new L(u/_,p/_,f/_),m=new In;m.add(sS(l,t,d)),m.add(rS(l,t,o)),e.add(m),n.push({mesh:m,centroidDir:g,baseRadius:t,boundaryDirs:h.map(x=>x.clone().normalize())})}if(s.design==="classic"){const{verts:l,pentagons:c,hexFaces:h}=Bh,d=l.map(u=>new L(u[0],u[1],u[2]));c.forEach(u=>a(u.map(p=>d[p]),"black")),h.forEach(u=>a(u.map(p=>d[p])))}else if(s.design==="jabulani"){const l=sp(),c=t*.9995;wi.forEach(h=>{const d=Yl(h,l),u=ql(h,Di),p=$l({boundary:d,centroidDir:u,panelRadius:c,borderRadius:t*1.001,fillMat:i,borderMat:o});e.add(p),n.push({mesh:p,centroidDir:u,baseRadius:t,boundaryDirs:d.map(f=>f.clone().normalize())})})}else if(s.design==="brazuca"){const l=Jf(),c=t*.9995;jf.forEach(h=>{const d=Yl(h,l),u=ql(h,sl),p=$l({boundary:d,centroidDir:u,panelRadius:c,borderRadius:t*1.001,fillMat:i,borderMat:o});e.add(p),n.push({mesh:p,centroidDir:u,baseRadius:t,boundaryDirs:d.map(f=>f.clone().normalize())})})}else if(s.design==="trionda"){const l=ep(),c=t*.9995;Qf.forEach(h=>{const d=Yl(h,l),u=ql(h,bo),p=$l({boundary:d,centroidDir:u,panelRadius:c,borderRadius:t*1.001,fillMat:i,borderMat:o});e.add(p),n.push({mesh:p,centroidDir:u,baseRadius:t,boundaryDirs:d.map(f=>f.clone().normalize())})})}return n.forEach((l,c)=>{l.mesh.userData.panelIndex=c;const h=di(s.design,c);if(h){const d=l.mesh.children[0];d.material.color.set(h),d.material.emissive.set(h)}}),{group:e,panels:n}}function oS(s,t){const e=new Nn({color:t.primaryColor,side:ke}),n=new Vr({color:t.secondaryColor});function i(a,l,c,h){h||(h=new L,a.forEach(f=>h.add(l[f])),h.normalize());const d=Math.abs(h.y)<.9?new L(0,1,0):new L(1,0,0),u=new L().crossVectors(d,h).normalize(),p=new L().crossVectors(h,u).normalize();return a.map(f=>({vIdx:f,x:l[f].dot(u)*c,y:l[f].dot(p)*c}))}function r(a,l,c,h){const d=a.find(V=>V.vIdx===c),u=a.find(V=>V.vIdx===h),p=l.find(V=>V.vIdx===c),f=l.find(V=>V.vIdx===h),_=Math.atan2(u.y-d.y,u.x-d.x)-Math.atan2(f.y-p.y,f.x-p.x),g=Math.cos(_),m=Math.sin(_);let x=l.map(V=>({vIdx:V.vIdx,x:g*V.x-m*V.y,y:m*V.x+g*V.y}));const y=x.find(V=>V.vIdx===c),v=d.x-y.x,E=d.y-y.y;x=x.map(V=>({vIdx:V.vIdx,x:V.x+v,y:V.y+E}));const T=u.x-d.x,b=u.y-d.y,P=Math.sqrt(T*T+b*b),M=-b/P,S=T/P,w=a.reduce((V,B)=>V+B.x,0)/a.length,N=a.reduce((V,B)=>V+B.y,0)/a.length,O=x.reduce((V,B)=>V+B.x,0)/x.length,k=x.reduce((V,B)=>V+B.y,0)/x.length;return((w-d.x)*M+(N-d.y)*S)*((O-d.x)*M+(k-d.y)*S)>0&&(x=x.map(V=>{const B=V.x-d.x,G=V.y-d.y,W=2*(B*M+G*S);return{vIdx:V.vIdx,x:V.x-W*M,y:V.y-W*S}})),x}function o(a,l,c,h,d){const u=a.length,p=a.reduce((v,E)=>v+E.x,0)/u,f=a.reduce((v,E)=>v+E.y,0)/u,_=new Ff;_.moveTo(a[0].x,a[0].y);for(let v=0;v<u;v++){const E=a[v],T=a[(v+1)%u],b=c?c(l[v],l[(v+1)%u],v):"straight";if(b==="straight")_.lineTo(T.x,T.y);else{const P=T.x-E.x,M=T.y-E.y,S=Math.sqrt(P*P+M*M),w=-M/S,N=P/S,O=(E.x+T.x)/2,k=(E.y+T.y)/2,V=w*(p-O)+N*(f-k);if(b==="scurve"){const B=S*.52,G=(E.x+T.x)/2,W=(E.y+T.y)/2;_.bezierCurveTo(E.x+P*.08+w*B*.85,E.y+M*.08+N*B*.85,E.x+P*.3+w*B,E.y+M*.3+N*B,G,W),_.bezierCurveTo(E.x+P*.7-w*B,E.y+M*.7-N*B,E.x+P*.92-w*B*.85,E.y+M*.92-N*B*.85,T.x,T.y)}else if(b==="mid"){const B=(V>0?1:-1)*S*.28;_.quadraticCurveTo(O+w*B,k+N*B,T.x,T.y)}else{const B=(V>0?-1:1)*S*.28;_.quadraticCurveTo(O+w*B,k+N*B,T.x,T.y)}}}const g=e.clone();d&&g.color.set(d);const m=new Qt(new Fh(_),g);h!=null&&(m.userData.panelIndex=h),s.add(m);const x=_.getPoints(48).map(v=>new L(v.x,v.y,.01));x.push(x[0]);const y=new Hr(new be().setFromPoints(x),n);h!=null&&(y.userData.panelIndex=h),s.add(y)}return{fillMat:e,lineMat:n,flattenLocal:i,unfold:r,drawPanel:o}}function aS(s,t){const{flattenLocal:e,unfold:n,drawPanel:i}=t;function r(h,d){return ip.some(([u,p])=>h===u&&d===p||h===p&&d===u)}const o=[{id:"T0",vIdxs:wi[0],isTri:!0},{id:"T1",vIdxs:wi[1],isTri:!0},{id:"T2",vIdxs:wi[2],isTri:!0},{id:"T3",vIdxs:wi[3],isTri:!0},{id:"H0",vIdxs:wi[4],isTri:!1},{id:"H1",vIdxs:wi[5],isTri:!1},{id:"H2",vIdxs:wi[6],isTri:!1},{id:"H3",vIdxs:wi[7],isTri:!1}],a=1.5,l={};o.forEach(h=>{l[h.id]=e(h.vIdxs,Di,a)});const c={};c.T0=l.T0,c.H3=n(c.T0,l.H3,0,2),c.H1=n(c.T0,l.H1,2,4),c.H2=n(c.T0,l.H2,4,0),c.T2=n(c.H3,l.T2,3,7),c.T1=n(c.H3,l.T1,6,1),c.T3=n(c.H1,l.T3,5,11),c.H0=n(c.T1,l.H0,6,8),o.forEach((h,d)=>{const u=di(s.design,d);i(c[h.id],h.vIdxs,(p,f)=>!h.isTri&&r(p,f)?"mid":"bow",d,u)})}function lS(s,t){const{flattenLocal:e,unfold:n,drawPanel:i}=t,r=1.8,o=Qf.map((c,h)=>({id:`P${h}`,vIdxs:c})),a={};o.forEach((c,h)=>{const u=bo[h].clone().negate().normalize();a[c.id]=e(c.vIdxs,bo,r,u)});const l={};l.P3=a.P3,l.P0=n(l.P3,a.P0,1,2),l.P1=n(l.P3,a.P1,0,2),l.P2=n(l.P3,a.P2,0,1),o.forEach((c,h)=>{const d=di(s.design,h);i(l[c.id],c.vIdxs,()=>"scurve",h,d)})}function cS(s,t){const{flattenLocal:e,unfold:n,drawPanel:i}=t,r=1.9,o=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],a=jf.map((h,d)=>({id:`F${d}`,vIdxs:h,nc:o[d]})),l={};a.forEach(h=>{l[h.id]=e(h.vIdxs,sl,r,h.nc)});const c={};c.F4=l.F4,c.F0=n(c.F4,l.F0,0,2),c.F3=n(c.F4,l.F3,2,6),c.F1=n(c.F4,l.F1,6,4),c.F2=n(c.F4,l.F2,4,0),c.F5=n(c.F0,l.F5,1,3),a.forEach((h,d)=>{const u=di(s.design,d);i(c[h.id],h.vIdxs,()=>"scurve",d,u)})}function hS(s,t,e){const{flattenLocal:n,unfold:i,drawPanel:r}=e,{verts:o,pentagons:a,hexFaces:l}=Bh,c=o.map(x=>new L(x[0],x[1],x[2])),h=.7,d=[];a.forEach((x,y)=>d.push({id:`P${y}`,vIdxs:x,isPent:!0})),l.forEach((x,y)=>d.push({id:`H${y}`,vIdxs:x,isPent:!1}));function u(x,y){return x<y?`${x}-${y}`:`${y}-${x}`}const p=new Map;d.forEach((x,y)=>{const v=x.vIdxs.length;for(let E=0;E<v;E++){const T=u(x.vIdxs[E],x.vIdxs[(E+1)%v]);p.has(T)||p.set(T,[]),p.get(T).push(y)}});const f={},_={};d.forEach(x=>{f[x.id]=n(x.vIdxs,c,h)});const g=new Set,m=[0];for(g.add(0),_[d[0].id]=f[d[0].id];m.length>0;){const x=m.shift(),y=d[x],v=y.vIdxs.length;for(let E=0;E<v;E++){const T=y.vIdxs[E],b=y.vIdxs[(E+1)%v],P=u(T,b),M=p.get(P);if(M)for(const S of M){if(g.has(S))continue;g.add(S);const w=d[S];_[w.id]=i(_[y.id],f[w.id],T,b),m.push(S)}}}d.forEach((x,y)=>{if(!_[x.id])return;const v=di(t.design,y);r(_[x.id],x.vIdxs,()=>"straight",y,v||(x.isPent?t.secondaryColor:void 0))})}function uS(s){const t=new In,e=oS(t,s);return s.design==="jabulani"?aS(s,e):s.design==="trionda"?lS(s,e):s.design==="brazuca"?cS(s,e):s.design==="classic"&&hS(t,s,e),t}function dS({mainCanvas:s,canvas:t,debugParams:e}){let n=!1,i=!1;function r(){e.filterStrength,n=e.visualFilter==="fluidDynamics",i=e.visualFilter==="windTunnel",s.style.filter="none",t.style.filter="none"}return{apply:r,getFluidOverlay:()=>n,getWindTunnelOverlay:()=>i}}const Md=new hs,pa=new L;class rp extends zg{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";const t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],n=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(n),this.setAttribute("position",new le(t,3)),this.setAttribute("uv",new le(e,2))}applyMatrix4(t){const e=this.attributes.instanceStart,n=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),n.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new jc(e,6,1);return this.setAttribute("instanceStart",new Zi(n,3,0)),this.setAttribute("instanceEnd",new Zi(n,3,3)),this.instanceCount=this.attributes.instanceStart.count,this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));const n=new jc(e,6,1);return this.setAttribute("instanceColorStart",new Zi(n,3,0)),this.setAttribute("instanceColorEnd",new Zi(n,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ig(t.geometry)),this}fromLineSegments(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hs);const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),Md.setFromBufferAttribute(e),this.boundingBox.union(Md))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws),this.boundingBox===null&&this.computeBoundingBox();const t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){const n=this.boundingSphere.center;this.boundingBox.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)pa.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(pa)),pa.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pa));this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}}Et.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new At(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};vn.line={uniforms:Th.merge([Et.common,Et.fog,Et.line]),vertexShader:`
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
		`};class kh extends Ui{constructor(t){super({type:"LineMaterial",uniforms:Th.clone(vn.line.uniforms),vertexShader:vn.line.vertexShader,fragmentShader:vn.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?this.defines.USE_ALPHA_TO_COVERAGE="":delete this.defines.USE_ALPHA_TO_COVERAGE)}}const Zl=new Me,Sd=new L,Ed=new L,Ze=new Me,je=new Me,oi=new Me,jl=new L,Kl=new Ee,Ke=new kg,bd=new L,ma=new hs,_a=new Ws,ai=new Me;let hi,Is;function wd(s,t,e){return ai.set(0,0,-t,1).applyMatrix4(s.projectionMatrix),ai.multiplyScalar(1/ai.w),ai.x=Is/e.width,ai.y=Is/e.height,ai.applyMatrix4(s.projectionMatrixInverse),ai.multiplyScalar(1/ai.w),Math.abs(Math.max(ai.x,ai.y))}function fS(s,t){const e=s.matrixWorld,n=s.geometry,i=n.attributes.instanceStart,r=n.attributes.instanceEnd,o=Math.min(n.instanceCount,i.count);for(let a=0,l=o;a<l;a++){Ke.start.fromBufferAttribute(i,a),Ke.end.fromBufferAttribute(r,a),Ke.applyMatrix4(e);const c=new L,h=new L;hi.distanceSqToSegment(Ke.start,Ke.end,h,c),h.distanceTo(c)<Is*.5&&t.push({point:h,pointOnLine:c,distance:hi.origin.distanceTo(h),object:s,face:null,faceIndex:a,uv:null,uv1:null})}}function pS(s,t,e){const n=t.projectionMatrix,r=s.material.resolution,o=s.matrixWorld,a=s.geometry,l=a.attributes.instanceStart,c=a.attributes.instanceEnd,h=Math.min(a.instanceCount,l.count),d=-t.near;hi.at(1,oi),oi.w=1,oi.applyMatrix4(t.matrixWorldInverse),oi.applyMatrix4(n),oi.multiplyScalar(1/oi.w),oi.x*=r.x/2,oi.y*=r.y/2,oi.z=0,jl.copy(oi),Kl.multiplyMatrices(t.matrixWorldInverse,o);for(let u=0,p=h;u<p;u++){if(Ze.fromBufferAttribute(l,u),je.fromBufferAttribute(c,u),Ze.w=1,je.w=1,Ze.applyMatrix4(Kl),je.applyMatrix4(Kl),Ze.z>d&&je.z>d)continue;if(Ze.z>d){const y=Ze.z-je.z,v=(Ze.z-d)/y;Ze.lerp(je,v)}else if(je.z>d){const y=je.z-Ze.z,v=(je.z-d)/y;je.lerp(Ze,v)}Ze.applyMatrix4(n),je.applyMatrix4(n),Ze.multiplyScalar(1/Ze.w),je.multiplyScalar(1/je.w),Ze.x*=r.x/2,Ze.y*=r.y/2,je.x*=r.x/2,je.y*=r.y/2,Ke.start.copy(Ze),Ke.start.z=0,Ke.end.copy(je),Ke.end.z=0;const _=Ke.closestPointToPointParameter(jl,!0);Ke.at(_,bd);const g=yf.lerp(Ze.z,je.z,_),m=g>=-1&&g<=1,x=jl.distanceTo(bd)<Is*.5;if(m&&x){Ke.start.fromBufferAttribute(l,u),Ke.end.fromBufferAttribute(c,u),Ke.start.applyMatrix4(o),Ke.end.applyMatrix4(o);const y=new L,v=new L;hi.distanceSqToSegment(Ke.start,Ke.end,v,y),e.push({point:v,pointOnLine:y,distance:hi.origin.distanceTo(v),object:s,face:null,faceIndex:u,uv:null,uv1:null})}}}class mS extends Qt{constructor(t=new rp,e=new kh({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){const t=this.geometry,e=t.attributes.instanceStart,n=t.attributes.instanceEnd,i=new Float32Array(2*e.count);for(let o=0,a=0,l=e.count;o<l;o++,a+=2)Sd.fromBufferAttribute(e,o),Ed.fromBufferAttribute(n,o),i[a]=a===0?0:i[a-1],i[a+1]=i[a]+Sd.distanceTo(Ed);const r=new jc(i,2,1);return t.setAttribute("instanceDistanceStart",new Zi(r,1,0)),t.setAttribute("instanceDistanceEnd",new Zi(r,1,1)),this}raycast(t,e){const n=this.material.worldUnits,i=t.camera;i===null&&!n&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');const r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;hi=t.ray;const o=this.matrixWorld,a=this.geometry,l=this.material;Is=l.linewidth+r,a.boundingSphere===null&&a.computeBoundingSphere(),_a.copy(a.boundingSphere).applyMatrix4(o);let c;if(n)c=Is*.5;else{const d=Math.max(i.near,_a.distanceToPoint(hi.origin));c=wd(i,d,l.resolution)}if(_a.radius+=c,hi.intersectsSphere(_a)===!1)return;a.boundingBox===null&&a.computeBoundingBox(),ma.copy(a.boundingBox).applyMatrix4(o);let h;if(n)h=Is*.5;else{const d=Math.max(i.near,ma.distanceToPoint(hi.origin));h=wd(i,d,l.resolution)}ma.expandByScalar(h),hi.intersectsBox(ma)!==!1&&(n?fS(this,e):pS(this,i,e))}onBeforeRender(t){const e=this.material.uniforms;e&&e.resolution&&(t.getViewport(Zl),this.material.uniforms.resolution.value.set(Zl.z,Zl.w))}}class op extends rp{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setPositions(n),this}setColors(t){const e=t.length-3,n=new Float32Array(2*e);for(let i=0;i<e;i+=3)n[2*i]=t[i],n[2*i+1]=t[i+1],n[2*i+2]=t[i+2],n[2*i+3]=t[i+3],n[2*i+4]=t[i+4],n[2*i+5]=t[i+5];return super.setColors(n),this}setFromPoints(t){const e=t.length-1,n=new Float32Array(6*e);for(let i=0;i<e;i++)n[6*i]=t[i].x,n[6*i+1]=t[i].y,n[6*i+2]=t[i].z||0,n[6*i+3]=t[i+1].x,n[6*i+4]=t[i+1].y,n[6*i+5]=t[i+1].z||0;return super.setPositions(n),this}fromLine(t){const e=t.geometry;return this.setPositions(e.attributes.position.array),this}}class _S extends mS{constructor(t=new op,e=new kh({color:Math.random()*16777215})){super(t,e),this.isLine2=!0,this.type="Line2"}}const Ta=11,ap=8,Td=Ta*ap,ga=180,Ad=-15,Cd=-10,Rd=10,gS=-1,Pd=4,vS=16,Dd=.5,Ld=1.5,xS=4,va=[new kt("#1a1a22"),new kt("#2e3038"),new kt("#4a4d58"),new kt("#7a7d88"),new kt("#a8abb8"),new kt("#c8c9d0"),new kt("#f5f0ff")],ys=new L(0,0,1),yS=new L(0,1,0),no=5,Aa=3,lp=3,Id=no*Aa*lp,MS=.9;function Ca(s){return Math.max(0,Math.min(1,s))}function Kr(s,t,e){return s+(t-s)*e}function Ud(s,t,e){const i=Ca(e)*(va.length-1),r=Math.min(Math.floor(i),va.length-2),o=i-r,a=va[r],l=va[r+1],c=t*3;s[c]=a.r+(l.r-a.r)*o,s[c+1]=a.g+(l.g-a.g)*o,s[c+2]=a.b+(l.b-a.b)*o}function SS({scene:s,visualFilters:t,debugParams:e,getBallGroup:n,getFlowState:i,ballRadius:r}){const o=new In;o.visible=!1,s.add(o);const a=new At(window.innerWidth,window.innerHeight),l=[];for(let G=0;G<Td;G++){const W=new Float32Array(ga*3),st=new Float32Array(ga*3),it=new op;it.setPositions(W),it.setColors(st);const pt=new kh({transparent:!0,opacity:.3,vertexColors:!0,linewidth:7,resolution:a,worldUnits:!1,depthWrite:!1,blending:ac}),yt=new _S(it,pt);yt.computeLineDistances(),yt.frustumCulled=!1,o.add(yt),l.push({line:yt,positions:W,colors:st,phaseOffset:Math.random()*3})}const c=new In;c.visible=!1,s.add(c);const h=[];for(let G=0;G<Id;G++){const W=new Hg(new L(0,0,1),new L,.35,2277289,.08,.05);W.visible=!1,c.add(W),h.push(W)}const d=new Qt(new us(1,20,16),new Nn({color:"#3d8cff",wireframe:!0,transparent:!0,opacity:.22}));d.visible=!1,c.add(d);const u=new Qt(new rs(.5,.9,1,16,1,!0),new Nn({color:"#4be9c8",wireframe:!0,transparent:!0,opacity:.18}));u.visible=!1,c.add(u);const p=new L,f=new L,_=new L,g=new L,m=new L,x=new L,y=new L,v=new L,E=new L,T=new L,b=new L,P=new L,M={free:new L,wind:new L,deflect:new L,spin:new L,wake:new L,total:new L},S=new kt;let w=-100;function N(G){const W=e.windDirX,st=e.windDirY,it=e.windDirZ;typeof W=="number"&&typeof st=="number"&&typeof it=="number"?(G.set(W,st,it),G.lengthSq()<1e-6&&G.set(1,0,0),G.normalize()):G.set(e.windSpeed>=0?1:-1,0,0);const pt=Math.min(2.15,(typeof e.windStrength=="number"?Math.max(0,e.windStrength):0)+Math.abs(e.windSpeed)*.16);G.multiplyScalar(pt)}function O(G,W,st,it,pt,yt){const zt=G-it.bx,K=W-it.by,et=st-it.bz,dt=Math.sqrt(zt*zt+K*K+et*et+1e-9),ct=zt/dt,Ct=K/dt,Yt=et/dt,vt=ys.x*it.freestream,te=ys.y*it.freestream,wt=ys.z*it.freestream,Vt=m.x,z=m.y,Se=m.z,$t=vt+Vt,qt=te+z,Pt=wt+Se,re=Math.sqrt($t*$t+qt*qt+Pt*Pt);let gt=0,D=0,A=0;const $=r;if(dt>$*.5){const Z=$*$*$/(2*dt*dt*dt),nt=$t*ct+qt*Ct+Pt*Yt;gt=(3*nt*ct-$t)*Z,D=(3*nt*Ct-qt)*Z,A=(3*nt*Yt-Pt)*Z;const tt=Math.sqrt(gt*gt+D*D+A*A),C=re*.4;if(tt>C&&tt>1e-6){const U=C/tt;gt*=U,D*=U,A*=U}}let rt=0,at=0,Q=0;if(it.velMag>.5){const Z=T.y*et-T.z*K,nt=T.z*zt-T.x*et,tt=T.x*K-T.y*zt,C=Math.exp(-((dt-$)*(dt-$))/($*$*16))*.06*it.spinStr;rt=Z*C,at=nt*C,Q=tt*C}let Rt=0,ft=0,_t=0;const Gt=x.x,lt=x.y,Mt=x.z,Lt=zt*Gt+K*lt+et*Mt;if(Lt>0){const Z=zt-Gt*Lt,nt=K-lt*Lt,tt=et-Mt*Lt,C=Z*Z+nt*nt+tt*tt,U=$*(2+Lt*.15),I=Math.exp(-C/(U*U+1e-6))*Math.exp(-Lt/Math.max(1e-4,it.wakeLen)),F=it.freestream*it.wakeStr*I;if(Rt-=Gt*F,ft-=lt*F,_t-=Mt*F,y.set(Z,nt,tt),y.lengthSq()>1e-8){y.normalize();const Y=.12*I*(1-Math.exp(-Lt*.1));Rt+=y.x*Y,ft+=y.y*Y,_t+=y.z*Y}if(it.velMag>.5&&(v.copy(T).cross(x),v.lengthSq()>1e-8)){v.normalize();const Y=.2*I*Ca(it.velMag/5);Rt+=v.x*Y,ft+=v.y*Y,_t+=v.z*Y}}const Ft=Math.sqrt(Rt*Rt+ft*ft+_t*_t),bt=it.freestream*.4;if(Ft>bt&&Ft>1e-6){const Z=bt/Ft;Rt*=Z,ft*=Z,_t*=Z}let Wt=$t+gt+rt+Rt,Nt=qt+D+at+ft,ee=Pt+A+Q+_t;if(dt<$*1.05){const Z=($*1.08-dt)*6;Wt+=ct*Z,Nt+=Ct*Z,ee+=Yt*Z}const H=Math.sqrt(Wt*Wt+Nt*Nt+ee*ee),mt=it.freestream*2+re*.5+.5;if(H>mt){const Z=mt/H;Wt*=Z,Nt*=Z,ee*=Z}return pt.set(Wt,Nt,ee),yt&&(yt.free.set(vt,te,wt),yt.wind.set(Vt,z,Se),yt.deflect.set(gt,D,A),yt.spin.set(rt,at,Q),yt.wake.set(Rt,ft,_t),yt.total.copy(pt)),pt.length()}function k(G,W){for(let st=0;st<Id;st++){const it=h[st],pt=st%no,yt=Math.floor(st/no)%Aa,zt=Math.floor(st/(no*Aa)),K=pt/(no-1),et=yt/(Aa-1),dt=zt/(lp-1);E.set(G.bx+Kr(-2.4,2.4,K)*r,G.by+Kr(-1.5,1.5,et)*r,G.bz+Kr(-2.4,8,dt)*r);const ct=O(E.x,E.y,E.z,G,p,null);if(ct<1e-5){it.visible=!1;continue}it.visible=!0,it.position.copy(E),p.normalize(),it.setDirection(p),it.setLength(.17+Math.min(.65,ct*.14),.08,.05);const Ct=Ca(ct/Math.max(1e-5,W));S.setHSL(.64-Ct*.6,.9,.52),it.setColor(S)}}function V(G){d.visible=!0,d.position.set(G.bx,G.by,G.bz),d.scale.setScalar(r+G.wakeLen*.3),u.visible=!0,u.scale.set(r*1.8,G.wakeLen*.5,r*1.8),u.position.set(G.bx,G.by,G.bz),u.position.addScaledVector(x,G.wakeLen*.5),u.quaternion.setFromUnitVectors(yS,x)}function B(G){a.set(window.innerWidth,window.innerHeight);const W=t.getFluidOverlay(),st=t.getWindTunnelOverlay(),it=W||st;o.visible=it;const pt=n();if(!it||!pt){c.visible=!1;return}const yt=!!e.flowDiagnostics;if(c.visible=yt,!yt){for(const gt of h)gt.visible=!1;d.visible=!1,u.visible=!1}const{activeVelocityVec:zt,activeCurveForce:K,activeLateralAccel:et}=i(),dt=pt.position.x,ct=pt.position.y,Ct=pt.position.z,Yt=zt.length();b.set(0,1,0).cross(ys),b.lengthSq()<1e-6&&b.set(1,0,0),b.normalize(),P.copy(ys).cross(b).normalize();const vt=Ca((Yt-.1)/6)*.65,te=f.copy(zt);te.lengthSq()<1e-7&&te.copy(ys).negate(),te.normalize().negate(),x.copy(ys).lerp(te,vt).normalize(),N(m);const wt=(st?2.25:2)+Yt*(st?.03:.08),Vt=wt*.36+.14;m.length()>Vt&&m.setLength(Vt),Yt<.12&&st?T.set(0,0,0):T.set(2.8*e.spinMultiplier,Math.sign(K||1)*(2+Math.min(6.2,Math.abs(K))*.14)+et*.016,.85*e.spinMultiplier);const z=e.filterStrength,Se={bx:dt,by:ct,bz:Ct,freestream:wt,velMag:Yt,spinStr:(st?.4:.6)*(.72+(z-.5)*.3),wakeStr:(st?.6:.8)*(.9+(z-.5)*.4),wakeLen:r*(12+2*z)},$t=Math.max(.8,wt+m.length()*.35),qt=Math.max(.5,wt*1.6+m.length()*.5);if(yt&&e.flowDebugArrows)k(Se,qt);else for(const gt of h)gt.visible=!1;yt&&e.flowDebugVolumes?V(Se):(d.visible=!1,u.visible=!1);const Pt=st?.16:.15,re=yt&&(e.flowDebugLogs||e.flowDebugStreamlines)&&G-w>MS;for(let gt=0;gt<Td;gt++){const{line:D,positions:A,colors:$,phaseOffset:rt}=l[gt];D.material.opacity=st?.28:.22,D.material.linewidth=st?8:7,D.material.resolution=a;const at=gt%Ta,Q=Math.floor(gt/Ta),Rt=at/(Ta-1),ft=Q/(ap-1),_t=Kr(Cd,Rd,Rt),Gt=Kr(gS,Pd,ft),lt=(G*wt*.28+rt)%xS,Mt=Ad+lt;_.set(_t,Gt,Mt);let Lt=0,Ft=0,bt=1;for(let Wt=0;Wt<ga;Wt++){const Nt=O(_.x,_.y,_.z,Se,p,null),ee=Wt*3;if(A[ee]=_.x,A[ee+1]=_.y,A[ee+2]=_.z,Ud($,Wt,Nt/qt),Nt<1e-4||_.z>vS||_.z<Ad-2||_.x<Cd-3||_.x>Rd+3||_.y<-2||_.y>Pd+3){for(let St=Wt+1;St<ga;St++)A[St*3]=_.x,A[St*3+1]=_.y,A[St*3+2]=_.z,Ud($,St,Nt/qt);break}const H=1/Nt,mt=Math.max(Dd,Math.min(Ld,Nt/$t));p.multiplyScalar(H),g.copy(_).addScaledVector(p,Pt*.5*mt);const Z=O(g.x,g.y,g.z,Se,f,null);if(Z<1e-5)break;const nt=1/Z,tt=Math.max(Dd,Math.min(Ld,Z/$t));f.multiplyScalar(nt);const U=f.x*Lt+f.y*Ft+f.z*bt<0?.7:.3,I=f.x*(1-U)+Lt*U,F=f.y*(1-U)+Ft*U,Y=f.z*(1-U)+bt*U,ot=1/Math.sqrt(I*I+F*F+Y*Y+1e-9);Lt=I*ot,Ft=F*ot,bt=Y*ot;const ut=Pt*tt;_.x+=Lt*ut,_.y+=Ft*ut,_.z+=bt*ut}D.geometry.setPositions(A),D.geometry.setColors($),D.computeLineDistances()}if(re){const gt=[{label:"upstream",along:-2.8,side:0,up:0},{label:"nearSurface",along:-.95,side:.55,up:.2},{label:"wake",along:4.8,side:.25,up:.1},{label:"farField",along:3.2,side:5.4,up:1.2}];if(e.flowDebugLogs){console.groupCollapsed(`[CFD] t=${G.toFixed(2)}s`);for(const D of gt)_.set(dt,ct,Ct),_.addScaledVector(x,D.along*r),_.addScaledVector(b,D.side*r),_.addScaledVector(P,D.up*r),O(_.x,_.y,_.z,Se,p,M),console.log(`${D.label}: total=${M.total.length().toFixed(3)} free=${M.free.length().toFixed(3)} deflect=${M.deflect.length().toFixed(3)} wake=${M.wake.length().toFixed(3)}`);console.log(`ball=(${dt.toFixed(2)},${ct.toFixed(2)},${Ct.toFixed(2)}) vel=${Yt.toFixed(2)}`),console.groupEnd()}w=G}}return{updateFluidFlowOverlay:B}}function ES(){return{powerMultiplier:1,arcHeight:2.5,resetDelay:1,spinMultiplier:1,curveIntensity:1,randomness:1,windSpeed:0,windStrength:0,windDirX:1,windDirY:0,windDirZ:0,gravity:1,orbitControls:!1,vectorOverlay:!1,showVelocityVector:!0,showMagnusVector:!0,showDragVector:!1,showGravityVector:!0,showWindVector:!1,visualFilter:"none",filterStrength:1,flowDiagnostics:!1,flowDebugArrows:!1,flowDebugVolumes:!1,flowDebugLogs:!1,flowDebugStreamlines:!1,spinSpeed:10,spinAxisX:0,spinAxisY:1,spinAxisZ:0,showAngularMomentum:!1}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.21.0
 * @author George Michael Brower
 * @license MIT
 */class mi{constructor(t,e,n,i,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement(r),this.domElement.classList.add("lil-controller"),this.domElement.classList.add(i),this.$name=document.createElement("div"),this.$name.classList.add("lil-name"),mi.nextNameID=mi.nextNameID||0,this.$name.id=`lil-gui-name-${++mi.nextNameID}`,this.$widget=document.createElement("div"),this.$widget.classList.add("lil-widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.domElement.addEventListener("keydown",o=>o.stopPropagation()),this.domElement.addEventListener("keyup",o=>o.stopPropagation()),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.textContent=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled?this:(this._disabled=t,this.domElement.classList.toggle("lil-disabled",t),this.$disable.toggleAttribute("disabled",t),this)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.getValue()!==t&&(this.object[this.property]=t,this._callOnChange(),this.updateDisplay()),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class bS extends mi{constructor(t,e,n){super(t,e,n,"lil-boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function th(s){let t,e;return(t=s.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=s.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=s.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),e?"#"+e:!1}const wS={isPrimitive:!0,match:s=>typeof s=="string",fromHexString:th,toHexString:th},wo={isPrimitive:!0,match:s=>typeof s=="number",fromHexString:s=>parseInt(s.substring(1),16),toHexString:s=>"#"+s.toString(16).padStart(6,0)},TS={isPrimitive:!1,match:s=>Array.isArray(s)||ArrayBuffer.isView(s),fromHexString(s,t,e=1){const n=wo.fromHexString(s);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(n&255)/255*e},toHexString([s,t,e],n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return wo.toHexString(i)}},AS={isPrimitive:!1,match:s=>Object(s)===s,fromHexString(s,t,e=1){const n=wo.fromHexString(s);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(n&255)/255*e},toHexString({r:s,g:t,b:e},n=1){n=255/n;const i=s*n<<16^t*n<<8^e*n<<0;return wo.toHexString(i)}},CS=[wS,wo,TS,AS];function RS(s){return CS.find(t=>t.match(s))}class PS extends mi{constructor(t,e,n,i){super(t,e,n,"lil-color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=RS(this.initialValue),this._rgbScale=i,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=th(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Jl extends mi{constructor(t,e,n){super(t,e,n,"lil-function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",i=>{i.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class DS extends mi{constructor(t,e,n,i,r,o){super(t,e,n,"lil-number"),this._initInput(),this.min(i),this.max(r);const a=o!==void 0;this.step(a?o:this._getImplicitStep(),a),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=e*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),window.matchMedia("(pointer: coarse)").matches&&(this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any")),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let x=parseFloat(this.$input.value);isNaN(x)||(this._stepExplicit&&(x=this._snap(x)),this.setValue(this._clamp(x)))},n=x=>{const y=parseFloat(this.$input.value);isNaN(y)||(this._snapClampSetValue(y+x),this.$input.value=this.getValue())},i=x=>{x.key==="Enter"&&this.$input.blur(),x.code==="ArrowUp"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x))),x.code==="ArrowDown"&&(x.preventDefault(),n(this._step*this._arrowKeyMultiplier(x)*-1))},r=x=>{this._inputFocused&&(x.preventDefault(),n(this._step*this._normalizeMouseWheel(x)))};let o=!1,a,l,c,h,d;const u=5,p=x=>{a=x.clientX,l=c=x.clientY,o=!0,h=this.getValue(),d=0,window.addEventListener("mousemove",f),window.addEventListener("mouseup",_)},f=x=>{if(o){const y=x.clientX-a,v=x.clientY-l;Math.abs(v)>u?(x.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(y)>u&&_()}if(!o){const y=x.clientY-c;d-=y*this._step*this._arrowKeyMultiplier(x),h+d>this._max?d=this._max-h:h+d<this._min&&(d=this._min-h),this._snapClampSetValue(h+d)}c=x.clientY},_=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",f),window.removeEventListener("mouseup",_)},g=()=>{this._inputFocused=!0},m=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",r,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",m)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("lil-slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("lil-fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("lil-has-slider");const t=(m,x,y,v,E)=>(m-x)/(y-x)*(E-v)+v,e=m=>{const x=this.$slider.getBoundingClientRect();let y=t(m,x.left,x.right,this._min,this._max);this._snapClampSetValue(y)},n=m=>{this._setDraggingStyle(!0),e(m.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",r)},i=m=>{e(m.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",r)};let o=!1,a,l;const c=m=>{m.preventDefault(),this._setDraggingStyle(!0),e(m.touches[0].clientX),o=!1},h=m=>{m.touches.length>1||(this._hasScrollBar?(a=m.touches[0].clientX,l=m.touches[0].clientY,o=!0):c(m),window.addEventListener("touchmove",d,{passive:!1}),window.addEventListener("touchend",u))},d=m=>{if(o){const x=m.touches[0].clientX-a,y=m.touches[0].clientY-l;Math.abs(x)>Math.abs(y)?c(m):(window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u))}else m.preventDefault(),e(m.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",d),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),f=400;let _;const g=m=>{if(Math.abs(m.deltaX)<Math.abs(m.deltaY)&&this._hasScrollBar)return;m.preventDefault();const y=this._normalizeMouseWheel(m)*this._step;this._snapClampSetValue(this.getValue()+y),this.$input.value=this.getValue(),clearTimeout(_),_=setTimeout(p,f)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",h,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("lil-active",t),document.body.classList.toggle("lil-dragging",t),document.body.classList.toggle(`lil-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=0;return this._hasMin?e=this._min:this._hasMax&&(e=this._max),t-=e,t=Math.round(t/this._step)*this._step,t+=e,t=parseFloat(t.toPrecision(15)),t}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class LS extends mi{constructor(t,e,n,i){super(t,e,n,"lil-option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("lil-display"),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("lil-focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("lil-focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.options(i)}options(t){return this._values=Array.isArray(t)?t:Object.values(t),this._names=Array.isArray(t)?t:Object.keys(t),this.$select.replaceChildren(),this._names.forEach(e=>{const n=document.createElement("option");n.textContent=e,this.$select.appendChild(n)}),this.updateDisplay(),this}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.textContent=e===-1?t:this._names[e],this}}class IS extends mi{constructor(t,e,n){super(t,e,n,"lil-string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("spellcheck","false"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",i=>{i.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}var US=`.lil-gui {
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
}`;function FS(s){const t=document.createElement("style");t.innerHTML=s;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(t,e):document.head.appendChild(t)}let Fd=!1;class Vh{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:i,title:r="Controls",closeFolders:o=!1,injectStyles:a=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("button"),this.$title.classList.add("lil-title"),this.$title.setAttribute("aria-expanded",!0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("lil-children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("lil-root"),l&&this.domElement.classList.add("lil-allow-touch-styles"),!Fd&&a&&(FS(US),Fd=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("lil-auto-place","autoPlace"),document.body.appendChild(this.domElement)),i&&this.domElement.style.setProperty("--width",i+"px"),this._closeFolders=o}add(t,e,n,i,r){if(Object(n)===n)return new LS(this,t,e,n);const o=t[e];switch(typeof o){case"number":return new DS(this,t,e,n,i,r);case"boolean":return new bS(this,t,e);case"string":return new IS(this,t,e);case"function":return new Jl(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,n=1){return new PS(this,t,e,n)}addFolder(t){const e=new Vh({parent:this,title:t});return this.root._closeFolders&&e.close(),e}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Jl||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Jl)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("lil-closed",this._closed),this}close(){return this.open(!1)}_setClosed(t){this._closed!==t&&(this._closed=t,this._callOnOpenClose(this))}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._setClosed(!t),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("lil-transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("lil-transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const i=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("lil-closed",!t),requestAnimationFrame(()=>{this.$children.style.height=i+"px"})}),this}title(t){return this._title=t,this.$title.textContent=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(n=>n.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onOpenClose(t){return this._onOpenClose=t,this}_callOnOpenClose(t){this.parent&&this.parent._callOnOpenClose(t),this._onOpenClose!==void 0&&this._onOpenClose.call(this,t)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}function NS(s,t,e){const n=new Vh({title:"Debug",container:s}),i=n.addFolder("Kick");i.add(t,"powerMultiplier",.5,3,.1).name("Power"),i.add(t,"arcHeight",.5,5,.1).name("Arc Height"),i.add(t,"curveIntensity",0,3,.1).name("Curve Intensity"),i.add(t,"spinMultiplier",0,3,.1).name("Spin"),i.close();const r=n.addFolder("Physics");r.add(t,"gravity",.2,3,.1).name("Gravity"),r.add(t,"windSpeed",-5,5,.1).name("Wind"),r.add(t,"windStrength",0,4,.05).name("Flow Wind"),r.add(t,"windDirX",-1,1,.05).name("Wind Dir X"),r.add(t,"windDirY",-1,1,.05).name("Wind Dir Y"),r.add(t,"windDirZ",-1,1,.05).name("Wind Dir Z"),r.add(t,"randomness",0,2,.1).name("Randomness"),r.close();const o=n.addFolder("Settings");o.add(t,"resetDelay",.3,3,.1).name("Reset Delay"),o.add(t,"orbitControls").name("Orbit Controls").onChange(e.onOrbitControlsChange),o.close();const a=n.addFolder("Spin Preview"),l=a.add(t,"spinSpeed",1,50,1).name("Speed"),c=a.add(t,"spinAxisX",-1,1,.05).name("Axis X"),h=a.add(t,"spinAxisY",-1,1,.05).name("Axis Y"),d=a.add(t,"spinAxisZ",-1,1,.05).name("Axis Z");a.add(t,"showAngularMomentum").name("Angular Momentum");const u=120,p=document.createElement("canvas");p.width=u,p.height=u,p.className="spin-orientation-circle";const f=p.getContext("2d"),_=document.createElement("div");_.style.cssText="display:flex;justify-content:center;padding:8px 0 4px",_.appendChild(p);const g=a.domElement.querySelector(".children");g&&g.appendChild(_);function m(){const b=u/2,P=u/2,M=u/2-12;f.clearRect(0,0,u,u),f.beginPath(),f.arc(b,P,M,0,Math.PI*2),f.strokeStyle="rgba(255,255,255,0.12)",f.lineWidth=1.5,f.stroke(),f.beginPath(),f.moveTo(b-M,P),f.lineTo(b+M,P),f.moveTo(b,P-M),f.lineTo(b,P+M),f.strokeStyle="rgba(255,255,255,0.05)",f.lineWidth=1,f.stroke();const S=b+t.spinAxisX*M,w=P-t.spinAxisZ*M;f.beginPath(),f.arc(S,w,6,0,Math.PI*2),f.fillStyle="#4a9eff",f.fill(),f.beginPath(),f.arc(S,w,6,0,Math.PI*2),f.strokeStyle="rgba(255,255,255,0.3)",f.lineWidth=1,f.stroke(),f.font="9px -apple-system, sans-serif",f.fillStyle="#555",f.textAlign="center",f.fillText("X",b+M+8,P+3),f.fillText("Z",b,P-M-5)}m(),c.onChange(m),d.onChange(m);let x=!1;p.addEventListener("pointerdown",b=>{x=!0,y(b),p.setPointerCapture(b.pointerId)}),p.addEventListener("pointermove",b=>{x&&y(b)}),p.addEventListener("pointerup",()=>{x=!1});function y(b){const P=p.getBoundingClientRect(),M=u/2,S=u/2,w=u/2-12;let N=b.clientX-P.left-M,O=-(b.clientY-P.top-S);const k=Math.sqrt(N*N+O*O);k>w&&(N=N/k*w,O=O/k*w),t.spinAxisX=N/w,t.spinAxisZ=O/w,c.updateDisplay(),d.updateDisplay(),m()}a.close();const v=document.getElementById("debug-hint");function E(){const b=s.classList.toggle("visible");v&&(v.style.opacity=b?"0":"1")}window.addEventListener("keydown",b=>{(b.key==="h"||b.key==="H")&&E()});const T=document.getElementById("debug-toggle-btn");return T&&T.addEventListener("click",E),{gui:n,drawCircle:m,speedCtrl:l,axisXCtrl:c,axisYCtrl:h,axisZCtrl:d}}function OS(s){const t=new $n(60,40),e=new Nn({color:"#000000"}),n=new Qt(t,e);n.rotation.x=-Math.PI/2,n.position.y=0,s.add(n);const i=new Vg(100,100,"#888888","#222222");i.position.y=.005,s.add(i);const r=document.createElement("canvas");r.width=512,r.height=512;const o=r.getContext("2d");o.fillStyle="#000000",o.fillRect(0,0,512,512),o.strokeStyle="#888888",o.lineWidth=.5;for(let E=0;E<=512;E+=16)o.beginPath(),o.moveTo(E,0),o.lineTo(E,512),o.stroke(),o.beginPath(),o.moveTo(0,E),o.lineTo(512,E),o.stroke();const a=new Rf(r);a.wrapS=vo,a.wrapT=vo,a.repeat.set(6,2);const l=new Nn({map:a,transparent:!0,opacity:.3,side:ke}),c=new Qt(new $n(120,30),l);c.position.set(0,15,50),c.rotation.y=Math.PI,s.add(c);const h=new Qt(new $n(120,30),l);h.rotation.y=Math.PI/2,h.position.set(-50,15,0),s.add(h);const d=new Qt(new $n(120,30),l);d.rotation.y=-Math.PI/2,d.position.set(50,15,0),s.add(d);const u=.08,p=.01,f=new Nn({color:"#ffffff"});function _(E,T,b,P){const M=new $n(E,T),S=new Qt(M,f);return S.rotation.x=-Math.PI/2,S.position.set(b,p,P),S}const g=new In,m=16.5,x=20.15;g.add(_(x*2,u,0,0)),g.add(_(u,m,-x,-m/2)),g.add(_(u,m,x,-m/2)),g.add(_(x*2,u,0,-m));const y=new Ih(.15,16),v=new Qt(y,f);return v.rotation.x=-Math.PI/2,v.position.set(0,p,-11),g.add(v),s.add(g),{gridHelper:i,fieldLines:g,backWall:c,leftWall:h,rightWall:d}}function zS(s){const t=new In,e=.06,n=7.32,i=2.44,r=new yn({color:"#ffffff",emissive:"#ffffff",emissiveIntensity:.5}),o=new rs(e,e,i,12),a=new Qt(o,r);a.position.set(-n/2,i/2,0),t.add(a);const l=new Qt(o,r);l.position.set(n/2,i/2,0),t.add(l);const c=new rs(e,e,n+e*2,12),h=new Qt(c,r);h.rotation.z=Math.PI/2,h.position.set(0,i,0),t.add(h);const d=2.5,u=new Nn({color:"#888888",wireframe:!0,transparent:!0,opacity:.4}),p=new $n(n,i,24,10),f=new Qt(p,u);f.position.set(0,i/2,d),t.add(f);const _=new $n(d,i,8,10),g=new Qt(_,u);g.rotation.y=Math.PI/2,g.position.set(-n/2,i/2,d/2),t.add(g);const m=new Qt(_,u);m.rotation.y=Math.PI/2,m.position.set(n/2,i/2,d/2),t.add(m);const x=new $n(n,d,24,8),y=new Qt(x,u);return y.rotation.x=-Math.PI/2,y.position.set(0,i,d/2),t.add(y),t.position.z=0,s.add(t),{goalGroup:t,goalWidth:n,goalHeight:i}}function BS({scene:s,gridHelper:t,fieldLines:e,backWall:n,leftWall:i,rightWall:r,panel:o,canvas:a,getBallGroup:l}){const c=new un(38,Math.max(1,o.clientWidth)/Math.max(1,o.clientHeight),.1,220);c.position.set(0,18,-23),c.lookAt(0,.8,-8);const h=new il({canvas:a,antialias:!0,alpha:!1});h.setPixelRatio(Math.min(window.devicePixelRatio,2)),h.setSize(o.clientWidth||1,o.clientHeight||1),a.style.transform="none";const d=260,u=[],p=new Float32Array(d*3),f=new be;f.setAttribute("position",new On(p,3)),f.setDrawRange(0,0);const _=new Vr({color:"#ffffff",transparent:!0,opacity:.95}),g=new Hr(f,_);g.visible=!1,s.add(g);let m=0;function x(){u.length=0,f.setDrawRange(0,0),m=0}function y(){m=1,_.opacity=.95;const b=l(),P={x:b.position.x,z:b.position.z},M=u[u.length-1];if(M&&Math.hypot(P.x-M.x,P.z-M.z)<.045)return;u.push(P),u.length>d&&u.shift();const S=u.length;for(let w=0;w<S;w++){const N=w*3;p[N]=u[w].x,p[N+1]=.06,p[N+2]=u[w].z}f.attributes.position.needsUpdate=!0,f.setDrawRange(0,S)}function v(){u.length!==0&&(m=Math.max(0,m-.018),_.opacity=.95*m,m<=.01&&x())}function E(){const b=t.visible,P=e.visible,M=n.visible,S=i.visible,w=r.visible;t.visible=!1,e.visible=!1,n.visible=!1,i.visible=!1,r.visible=!1,g.visible=u.length>1,c.lookAt(0,.8,-8),h.render(s,c),g.visible=!1,t.visible=b,e.visible=P,n.visible=M,i.visible=S,r.visible=w}function T(){const b=Math.min(window.devicePixelRatio,2),P=Math.max(1,o.clientWidth),M=Math.max(1,o.clientHeight);c.aspect=P/M,c.updateProjectionMatrix(),h.setPixelRatio(b),h.setSize(P,M)}return{clearTrail:x,pushTrailPoint:y,fadeTrail:v,renderBirdseye:E,resizeBirdseye:T}}function kS({panel:s,canvas:t,flightAnalyticsState:e}){const n=t.getContext("2d"),i={power:document.getElementById("metric-power"),curve:document.getElementById("metric-curve"),spin:document.getElementById("metric-spin"),target:document.getElementById("metric-target")};function r(){const l=Math.min(window.devicePixelRatio,2),c=s.clientWidth,h=s.clientHeight;t.width=Math.max(1,Math.floor(c*l)),t.height=Math.max(1,Math.floor(h*l)),n.setTransform(l,0,0,l,0,0)}function o(){const l=s.clientWidth,c=s.clientHeight;n.clearRect(0,0,l,c),n.fillStyle="#090909",n.fillRect(0,0,l,c);const h=18,d=l-18,u=74,p=c-34;n.strokeStyle="#1d1d1d",n.lineWidth=1,n.beginPath(),n.moveTo(h,p),n.lineTo(d,p),n.moveTo(h,u),n.lineTo(h,p),n.stroke();const f=e.latestFlightSeries;if(!f||f.t.length<2){n.fillStyle="#4f4f4f",n.font="12px sans-serif",n.fillText("Kick to populate flight dynamics",h,u+18);return}const _=f.t.length,g=Math.max(...f.speed,1),m=Math.max(...f.height,1),x=Math.max(...f.lateralAccel.map(v=>Math.abs(v)),.1),y=(v,E,T)=>{n.strokeStyle=E,n.lineWidth=2,n.beginPath();for(let b=0;b<_;b++){const P=h+f.t[b]*(d-h),M=T(v[b],b);b===0?n.moveTo(P,M):n.lineTo(P,M)}n.stroke()};y(f.speed,"#4aa3ff",v=>p-v/g*(p-u)),y(f.height,"#80f0a5",v=>p-v/m*(p-u)),y(f.lateralAccel,"#ff8a4a",v=>p-(v+x)/(x*2)*(p-u)),n.fillStyle="#6a6a6a",n.font="10px sans-serif",n.fillText("Speed",l-154,c-12),n.fillStyle="#ff8a4a",n.fillText("Lat Acc",l-108,c-12),n.fillStyle="#80f0a5",n.fillText("Height",l-64,c-12)}function a(l){i.power.textContent=`${l.peakSpeed.toFixed(1)} m/s`,i.curve.textContent=l.avgCd.toFixed(3),i.spin.textContent=l.maxCl.toFixed(3),i.target.textContent=`${Math.round(l.reynolds/1e3)}k`}return{resizeFlightDynamicsChart:r,drawFlightGraph:o,recordPhysicsSample:a}}function VS(s){const t={latestFlightSeries:null},e=kS({...s.flightDynamics,flightAnalyticsState:t}),n=BS({scene:s.scene,gridHelper:s.gridHelper,fieldLines:s.fieldLines,backWall:s.backWall,leftWall:s.leftWall,rightWall:s.rightWall,...s.birdseye,getBallGroup:s.getBallGroup});function i(){n.resizeBirdseye(),e.resizeFlightDynamicsChart()}function r(a){e.recordPhysicsSample(a),n.renderBirdseye(),e.drawFlightGraph()}const o=new ResizeObserver(()=>{i(),n.renderBirdseye(),e.drawFlightGraph()});return o.observe(s.birdseye.panel),o.observe(s.flightDynamics.panel),i(),n.renderBirdseye(),e.drawFlightGraph(),{flightAnalyticsState:t,clearTrail:n.clearTrail,pushTrailPoint:n.pushTrailPoint,fadeTrail:n.fadeTrail,renderBirdseye:n.renderBirdseye,resizeDataPanels:i,recordPhysicsSample:r,drawFlightGraph:e.drawFlightGraph}}function HS({scene:s,camera:t,canvas:e,trailHeight:n=1.5,maxTrailPoints:i=50,trailMinWidth:r=.01,trailMaxWidth:o=.175}){const a=i*2,l=new Float32Array(a*3),c=[];for(let m=0;m<i-1;m++){const x=m*2,y=m*2+1,v=(m+1)*2,E=(m+1)*2+1;c.push(x,v,y,y,v,E)}const h=new be;h.setAttribute("position",new On(l,3)),h.setIndex(c);const d=new Nn({color:"#ffffff",transparent:!0,opacity:.85,side:ke,depthWrite:!1}),u=new Qt(h,d);u.visible=!1,s.add(u);const p=new Vf,f=new Ai(new L(0,1,0),-n);function _(m,x){const y=e.getBoundingClientRect(),v=new At((m-y.left)/y.width*2-1,-((x-y.top)/y.height)*2+1);p.setFromCamera(v,t);const E=new L;return p.ray.intersectPlane(f,E),E}function g(m){const x=m.length;if(x<2){h.setDrawRange(0,0);return}for(let y=0;y<x;y++){const v=_(m[y].x,m[y].y),E=y/(x-1),T=r+(o-r)*E*E;let b,P;if(y<x-1){const N=_(m[y+1].x,m[y+1].y);b=N.x-v.x,P=N.z-v.z}else{const N=_(m[y-1].x,m[y-1].y);b=v.x-N.x,P=v.z-N.z}const M=Math.sqrt(b*b+P*P)||1,S=-P/M*T*.5,w=b/M*T*.5;l[y*2*3]=v.x+S,l[y*2*3+1]=v.y,l[y*2*3+2]=v.z+w,l[(y*2+1)*3]=v.x-S,l[(y*2+1)*3+1]=v.y,l[(y*2+1)*3+2]=v.z-w}for(let y=x;y<i;y++)l[y*2*3]=0,l[y*2*3+1]=0,l[y*2*3+2]=0,l[(y*2+1)*3]=0,l[(y*2+1)*3+1]=0,l[(y*2+1)*3+2]=0;h.attributes.position.needsUpdate=!0,h.setDrawRange(0,Math.max(0,x-1)*6)}return{trailMesh:u,updateTrailRibbon:g,maxTrailPoints:i}}function Ti(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function cp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ir={duration:.5,overwrite:!1,delay:0},Hh,Qe,Ae,Zn=1e8,ye=1/Zn,eh=Math.PI*2,GS=eh/4,WS=0,hp=Math.sqrt,XS=Math.cos,YS=Math.sin,Xe=function(t){return typeof t=="string"},Ie=function(t){return typeof t=="function"},Fi=function(t){return typeof t=="number"},Gh=function(t){return typeof t>"u"},gi=function(t){return typeof t=="object"},Mn=function(t){return t!==!1},Wh=function(){return typeof window<"u"},xa=function(t){return Ie(t)||Xe(t)},up=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},sn=Array.isArray,qS=/random\([^)]+\)/g,$S=/,\s*/g,Nd=/(?:-?\.?\d|\.)+/gi,dp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,fr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ql=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fp=/[+-]=-?[.\d]+/,ZS=/[^,'"\[\]\s]+/gi,jS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,ci,nh,Xh,Bn={},Va={},pp,mp=function(t){return(Va=Ur(t,Bn))&&wn},Yh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},To=function(t,e){return!e&&console.warn(t)},_p=function(t,e){return t&&(Bn[t]=e)&&Va&&(Va[t]=e)||Bn},Ao=function(){return 0},KS={suppressEvents:!0,isStart:!0,kill:!1},Ra={suppressEvents:!0,kill:!1},JS={suppressEvents:!0},qh={},es=[],ih={},gp,Dn={},tc={},Od=30,Pa=[],$h="",Zh=function(t){var e=t[0],n,i;if(gi(e)||Ie(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Pa.length;i--&&!Pa[i].targetTest(e););n=Pa[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Vp(t[i],n)))||t.splice(i,1);return t},Us=function(t){return t._gsap||Zh(jn(t))[0]._gsap},vp=function(t,e,n){return(n=t[e])&&Ie(n)?t[e]():Gh(n)&&t.getAttribute&&t.getAttribute(e)||n},Sn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},Ce=function(t){return Math.round(t*1e7)/1e7||0},xr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},QS=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Ha=function(){var t=es.length,e=es.slice(0),n,i;for(ih={},es.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},jh=function(t){return!!(t._initted||t._startAt||t.add)},xp=function(t,e,n,i){es.length&&!Qe&&Ha(),t.render(e,n,!!(Qe&&e<0&&jh(t))),es.length&&!Qe&&Ha()},yp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(ZS).length<2?e:Xe(t)?t.trim():t},Mp=function(t){return t},kn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},tE=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Ur=function(t,e){for(var n in e)t[n]=e[n];return t},zd=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Ga=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},mo=function(t){var e=t.parent||Re,n=t.keyframes?tE(sn(t.keyframes)):kn;if(Mn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},eE=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Sp=function(t,e,n,i,r){var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},rl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},os=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fs=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},nE=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},sh=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(Ra):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},iE=function s(t){return!t||t._ts&&s(t.parent)},Bd=function(t){return t._repeat?Fr(t._tTime,t=t.duration()+t._rDelay)*t:0},Fr=function(t,e){var n=Math.floor(t=Ce(t/e));return t&&n===t?n-1:n},Wa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ol=function(t){return t._end=Ce(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))},al=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ce(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ol(t),n._dirty||Fs(n,t)),t},Ep=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Wa(t.rawTime(),e),(!e._dur||zo(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Fs(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}},ui=function(t,e,n,i){return e.parent&&os(e),e._start=Ce((Fi(n)?n:n||t!==Re?Yn(t,n,e):t._time)+e._delay),e._end=Ce(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Sp(t,e,"_first","_last",t._sort?"_start":0),rh(e)||(t._recent=e),i||Ep(t,e),t._ts<0&&al(t,t._tTime),t},bp=function(t,e){return(Bn.ScrollTrigger||Yh("scrollTrigger",e))&&Bn.ScrollTrigger.create(e,t)},wp=function(t,e,n,i,r){if(Jh(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&gp!==Ln.frame)return es.push(t),t._lazy=[r,i],1},sE=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},rh=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},rE=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&sE(t)&&!(!t._initted&&rh(t))||(t._ts<0||t._dp._ts<0)&&!rh(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=zo(0,t._tDur,e),h=Fr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Fr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Qe||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&wp(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&sh(t,e,n,!0),t._onUpdate&&!n&&Un(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Un(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&os(t,1),!n&&!Qe&&(Un(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},oE=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Nr=function(t,e,n,i){var r=t._repeat,o=Ce(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ce(o*(r+1)+t._rDelay*r):o,a>0&&!i&&al(t,t._tTime=t._tDur*a),t.parent&&ol(t),n||Fs(t.parent,t),t},kd=function(t){return t instanceof dn?Fs(t):Nr(t,t._dur)},aE={_start:0,endTime:Ao,totalDuration:Ao},Yn=function s(t,e,n){var i=t.labels,r=t._recent||aE,o=t.duration()>=Zn?r.endTime(!1):t._dur,a,l,c;return Xe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(sn(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},_o=function(t,e,n){var i=Fi(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Mn(l.vars.inherit)&&l.parent;o.immediateRender=Mn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new Oe(e[0],o,e[r+1])},ds=function(t,e){return t||t===0?e(t):e},zo=function(t,e,n){return n<t?t:n>e?e:n},nn=function(t,e){return!Xe(t)||!(e=jS.exec(t))?"":e[1]},lE=function(t,e,n){return ds(n,function(i){return zo(t,e,i)})},oh=[].slice,Tp=function(t,e){return t&&gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gi(t[0]))&&!t.nodeType&&t!==ci},cE=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return Xe(i)&&!e||Tp(i,1)?(r=n).push.apply(r,jn(i)):n.push(i)})||n},jn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Xe(t)&&!n&&(nh||!Or())?oh.call((e||Xh).querySelectorAll(t),0):sn(t)?cE(t,n):Tp(t)?oh.call(t,0):t?[t]:[]},ah=function(t){return t=jn(t)[0]||To("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return jn(e,n.querySelectorAll?n:n===t?To("Invalid scope")||Xh.createElement("div"):t)}},Ap=function(t){return t.sort(function(){return .5-Math.random()})},Cp=function(t){if(Ie(t))return t;var e=gi(t)?t:{each:t},n=Ns(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return Xe(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,p,f){var _=(f||e).length,g=o[_],m,x,y,v,E,T,b,P,M;if(!g){if(M=e.grid==="auto"?0:(e.grid||[1,Zn])[1],!M){for(b=-Zn;b<(b=f[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(g=o[_]=[],m=l?Math.min(M,_)*h-.5:i%M,x=M===Zn?0:l?_*d/M-.5:i/M|0,b=0,P=Zn,T=0;T<_;T++)y=T%M-m,v=x-(T/M|0),g[T]=E=c?Math.abs(c==="y"?v:y):hp(y*y+v*v),E>b&&(b=E),E<P&&(P=E);i==="random"&&Ap(g),g.max=b-P,g.min=P,g.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),g.b=_<0?r-_:r,g.u=nn(e.amount||e.each)||0,n=n&&_<0?zp(n):n}return _=(g[u]-g.min)/g.max||0,Ce(g.b+(n?n(_):_)*g.v)+g.u}},lh=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ce(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Fi(n)?0:nn(n))}},Rp=function(t,e){var n=sn(t),i,r;return!n&&gi(t)&&(i=n=t.radius||Zn,t.values?(t=jn(t.values),(r=!Fi(t[0]))&&(i*=i)):t=lh(t.increment)),ds(e,n?Ie(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Zn,h=0,d=t.length,u,p;d--;)r?(u=t[d].x-a,p=t[d].y-l,u=u*u+p*p):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||Fi(o)?h:h+nn(o)}:lh(t))},Pp=function(t,e,n,i){return ds(sn(t)?!e:n===!0?!!(n=0):!i,function(){return sn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},hE=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},uE=function(t,e){return function(n){return t(parseFloat(n))+(e||nn(n))}},dE=function(t,e,n){return Lp(t,e,0,1,n)},Dp=function(t,e,n){return ds(n,function(i){return t[~~e(i)]})},fE=function s(t,e,n){var i=e-t;return sn(t)?Dp(t,s(0,t.length),e):ds(n,function(r){return(i+(r-t)%i)%i+t})},pE=function s(t,e,n){var i=e-t,r=i*2;return sn(t)?Dp(t,s(0,t.length-1),e):ds(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Co=function(t){return t.replace(qS,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split($S);return Pp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Lp=function(t,e,n,i,r){var o=e-t,a=i-n;return ds(r,function(l){return n+((l-t)/o*a||0)})},mE=function s(t,e,n,i){var r=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!r){var o=Xe(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(sn(t)&&!sn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(f){f*=d;var _=Math.min(u,~~f);return h[_](f-_)},n=e}else i||(t=Ur(sn(t)?[]:{},t));if(!h){for(l in e)Kh.call(a,t,l,"get",e[l]);r=function(f){return eu(f,a)||(o?t.p:t)}}}return ds(n,r)},Vd=function(t,e,n){var i=t.labels,r=Zn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},Un=function(t,e,n){var i=t.vars,r=i[e],o=Ae,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&es.length&&Ha(),a&&(Ae=a),h=l?r.apply(c,l):r.call(c),Ae=o,h},io=function(t){return os(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&Un(t,"onInterrupt"),t},pr,Ip=[],Up=function(t){if(t)if(t=!t.name&&t.default||t,Wh()||t.headless){var e=t.name,n=Ie(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:Ao,render:eu,add:Kh,kill:DE,modifier:PE,rawVars:0},o={targetTest:0,get:0,getSetter:tu,aliases:{},register:0};if(Or(),t!==i){if(Dn[e])return;kn(i,kn(Ga(t,r),o)),Ur(i.prototype,Ur(r,Ga(t,o))),Dn[i.prop=e]=i,t.targetTest&&(Pa.push(i),qh[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}_p(e,i),t.register&&t.register(wn,i,En)}else Ip.push(t)},xe=255,so={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},ec=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},Fp=function(t,e,n){var i=t?Fi(t)?[t>>16,t>>8&xe,t&xe]:0:so.black,r,o,a,l,c,h,d,u,p,f;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),so[t])i=so[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=f=t.match(Nd),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=ec(l+1/3,r,o),i[1]=ec(l,r,o),i[2]=ec(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(dp),n&&i.length<4&&(i[3]=1),i}else i=t.match(Nd)||so.transparent;i=i.map(Number)}return e&&!f&&(r=i[0]/xe,o=i[1]/xe,a=i[2]/xe,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(p=d-u,c=h>.5?p/(2-d-u):p/(d+u),l=d===r?(o-a)/p+(o<a?6:0):d===o?(a-r)/p+2:(r-o)/p+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},Np=function(t){var e=[],n=[],i=-1;return t.split(ns).forEach(function(r){var o=r.match(fr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Hd=function(t,e,n){var i="",r=(t+i).match(ns),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Fp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=Np(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(ns,"1").split(fr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(ns),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},ns=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in so)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),_E=/hsl[a]?\(/,Op=function(t){var e=t.join(" "),n;if(ns.lastIndex=0,ns.test(e))return n=_E.test(e),t[1]=Hd(t[1],n),t[0]=Hd(t[0],n,Np(t[1])),!0},Ro,Ln=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,p,f=function _(g){var m=s()-i,x=g===!0,y,v,E,T;if((m>t||m<0)&&(n+=m-e),i+=m,E=i-n,y=E-o,(y>0||x)&&(T=++d.frame,u=E-d.time*1e3,d.time=E=E/1e3,o+=y+(y>=r?4:r-y),v=1),x||(l=c(_)),v)for(p=0;p<a.length;p++)a[p](E,u,T,g)};return d={time:0,frame:0,tick:function(){f(!0)},deltaRatio:function(g){return u/(1e3/(g||60))},wake:function(){pp&&(!nh&&Wh()&&(ci=nh=window,Xh=ci.document||{},Bn.gsap=wn,(ci.gsapVersions||(ci.gsapVersions=[])).push(wn.version),mp(Va||ci.GreenSockGlobals||!ci.gsap&&ci||{}),Ip.forEach(Up)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(g){return setTimeout(g,o-d.time*1e3+1|0)},Ro=1,f(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Ro=0,c=Ao},lagSmoothing:function(g,m){t=g||1/0,e=Math.min(m||33,t)},fps:function(g){r=1e3/(g||240),o=d.time*1e3+r},add:function(g,m,x){var y=m?function(v,E,T,b){g(v,E,T,b),d.remove(y)}:g;return d.remove(g),a[x?"unshift":"push"](y),Or(),y},remove:function(g,m){~(m=a.indexOf(g))&&a.splice(m,1)&&p>=m&&p--},_listeners:a},d})(),Or=function(){return!Ro&&Ln.wake()},ae={},gE=/^[\d.\-M][\d.\-,\s]/,vE=/["']/g,xE=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(vE,"").trim():+c,i=l.substr(a+1).trim();return e},yE=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},ME=function(t){var e=(t+"").split("("),n=ae[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[xE(e[1])]:yE(t).split(",").map(yp)):ae._CE&&gE.test(t)?ae._CE("",t):n},zp=function(t){return function(e){return 1-t(1-e)}},Bp=function s(t,e){for(var n=t._first,i;n;)n instanceof dn?s(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?s(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Ns=function(t,e){return t&&(Ie(t)?t:ae[t]||ME(t))||e},Xs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return Sn(t,function(a){ae[a]=Bn[a]=r,ae[o=a.toLowerCase()]=n;for(var l in r)ae[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ae[a+"."+l]=r[l]}),r},kp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},nc=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/eh*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*YS((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:kp(a);return r=eh/r,l.config=function(c,h){return s(t,c,h)},l},ic=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:kp(n);return i.config=function(r){return s(t,r)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;Xs(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ae.Linear.easeNone=ae.none=ae.Linear.easeIn;Xs("Elastic",nc("in"),nc("out"),nc());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Xs("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);Xs("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Xs("Circ",function(s){return-(hp(1-s*s)-1)});Xs("Sine",function(s){return s===1?1:-XS(s*GS)+1});Xs("Back",ic("in"),ic("out"),ic());ae.SteppedEase=ae.steps=Bn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-ye;return function(a){return((i*zo(0,o,a)|0)+r)*n}}};Ir.ease=ae["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return $h+=s+","+s+"Params,"});var Vp=function(t,e){this.id=WS++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:vp,this.set=e?e.getSetter:tu},Po=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Nr(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Ro||Ln.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Nr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Or(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(al(this,n),!r._dp||r.parent||Ep(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ui(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Bd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Bd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Fr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Wa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(zo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),ol(this),nE(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Or(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ce(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ui(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Mn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=JS);var i=Qe;return Qe=n,jh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,kd(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,kd(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Yn(this,n),Mn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Mn(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-ye)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=Ie(n)?n:Mp,l=function(){var h=i.then;i.then=null,r&&r(),Ie(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){io(this)},s})();kn(Po.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var dn=(function(s){cp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Mn(n.sortChildren),Re&&ui(n.parent||Re,Ti(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&bp(Ti(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return _o(0,arguments,this),this},e.from=function(i,r,o){return _o(1,arguments,this),this},e.fromTo=function(i,r,o,a){return _o(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,mo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new Oe(i,r,Yn(this,o),1),this},e.call=function(i,r,o){return ui(this,Oe.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Oe(i,o,Yn(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,mo(o).immediateRender=Mn(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,mo(a).immediateRender=Mn(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ce(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,p,f,_,g,m,x,y,v,E,T,b;if(this!==Re&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,v=this._start,y=this._ts,m=!y,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,r,o);if(u=Ce(h%g),h===l?(_=this._repeat,u=c):(E=Ce(h/g),_=~~E,_&&_===E&&(u=c,_--),u>c&&(u=c)),E=Fr(this._tTime,g),!a&&this._tTime&&E!==_&&this._tTime-E*g-this._dur<=0&&(E=_),T&&_&1&&(u=c-u,b=1),_!==E&&!this._lock){var P=T&&E&1,M=P===(T&&_&1);if(_<E&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(b?0:Ce(_*g)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Bp(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=oE(this,Ce(a),Ce(u)),x&&(h-=u-(u=x._start))),this._tTime=h,this._time=u,this._act=!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!E&&(Un(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(p=this._first;p;){if(f=p._next,(p._act||u>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(u-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(u-p._start)*p._ts,r,o),u!==this._time||!this._ts&&!m){x=0,f&&(h+=this._zTime=-ye);break}}p=f}else{p=this._last;for(var S=i<0?i:u;p;){if(f=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(i,r,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,r,o||Qe&&jh(p)),u!==this._time||!this._ts&&!m){x=0,f&&(h+=this._zTime=S?-ye:ye);break}}p=f}}if(x&&!r&&(this.pause(),x.render(u>=a?0:-ye)._zTime=u>=a?1:-1,this._ts))return this._start=v,ol(this),this.render(i,r,o);this._onUpdate&&!r&&Un(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&os(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(Un(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(Fi(r)||(r=Yn(this,r,i)),!(i instanceof Po)){if(sn(i))return i.forEach(function(a){return o.add(a,r)}),this;if(Xe(i))return this.addLabel(i,r);if(Ie(i))i=Oe.delayedCall(0,i);else return this}return this!==i?ui(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Zn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Oe?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return Xe(i)?this.removeLabel(i):Ie(i)?this.killTweensOf(i):(i.parent===this&&rl(this,i),i===this._recent&&(this._recent=this._last),Fs(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ce(Ln.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=Yn(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=Oe.delayedCall(0,r||Ao,o);return a.data="isPause",this._hasPause=1,ui(this,a,Yn(this,i))},e.removePause=function(i){var r=this._first;for(i=Yn(this,i);r;)r._start===i&&r.data==="isPause"&&os(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)ji!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=jn(i),l=this._first,c=Fi(r),h;l;)l instanceof Oe?QS(l._targets,a)&&(c?(!ji||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=Yn(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,p,f=Oe.to(o,kn({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||ye,onStart:function(){if(o.pause(),!p){var g=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());f._dur!==g&&Nr(f,g,0,1).render(f._time,!0,!0),p=1}h&&h.apply(f,d||[])}},r));return u?f.render(0):f},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,kn({startAt:{time:Yn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Vd(this,Yn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Vd(this,Yn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ce(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return Fs(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fs(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Zn,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ui(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ce(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;Nr(o,o===Re&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(xp(Re,Wa(i,Re)),gp=Ln.frame),Ln.frame>=Od){Od+=zn.autoSleep||120;var r=Re._first;if((!r||!r._ts)&&zn.autoSleep&&Ln._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||Ln.sleep()}}},t})(Po);kn(dn.prototype,{_lock:0,_hasPause:0,_forcing:0});var SE=function(t,e,n,i,r,o,a){var l=new En(this._pt,t,e,0,1,qp,null,r),c=0,h=0,d,u,p,f,_,g,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Co(i)),o&&(x=[n,i],o(x,t,e),n=x[0],i=x[1]),u=n.match(Ql)||[];d=Ql.exec(i);)f=d[0],_=i.substring(c,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),f!==u[h++]&&(g=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:_||h===1?_:",",s:g,c:f.charAt(1)==="="?xr(g,f)-g:parseFloat(f)-g,m:p&&p<4?Math.round:0},c=Ql.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(fp.test(i)||m)&&(l.e=0),this._pt=l,l},Kh=function(t,e,n,i,r,o,a,l,c,h){Ie(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:Ie(d)?c?t[e.indexOf("set")||!Ie(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,p=Ie(d)?c?AE:Xp:Qh,f;if(Xe(i)&&(~i.indexOf("random(")&&(i=Co(i)),i.charAt(1)==="="&&(f=xr(u,i)+(nn(u)||0),(f||f===0)&&(i=f))),!h||u!==i||ch)return!isNaN(u*i)&&i!==""?(f=new En(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?RE:Yp,0,p),c&&(f.fp=c),a&&f.modifier(a,this,t),this._pt=f):(!d&&!(e in t)&&Yh(e,i),SE.call(this,t,e,u,i,p,l||zn.stringFilter,c))},EE=function(t,e,n,i,r){if(Ie(t)&&(t=go(t,r,e,n,i)),!gi(t)||t.style&&t.nodeType||sn(t)||up(t))return Xe(t)?go(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=go(t[a],r,e,n,i);return o},Hp=function(t,e,n,i,r,o){var a,l,c,h;if(Dn[t]&&(a=new Dn[t]).init(r,a.rawVars?e[t]:EE(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==pr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},ji,ch,Jh=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,p=i.autoRevert,f=t._dur,_=t._startAt,g=t._targets,m=t.parent,x=m&&m.data==="nested"?m.vars.targets:g,y=t._overwrite==="auto"&&!Hh,v=t.timeline,E,T,b,P,M,S,w,N,O,k,V,B,G;if(v&&(!u||!r)&&(r="none"),t._ease=Ns(r,Ir.ease),t._yEase=d?zp(Ns(d===!0?r:d,Ir.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!v&&!!i.runBackwards,!v||u&&!i.stagger){if(N=g[0]?Us(g[0]).harness:0,B=N&&i[N.prop],E=Ga(i,qh),_&&(_._zTime<0&&_.progress(1),e<0&&h&&a&&!p?_.render(-1,!0):_.revert(h&&f?Ra:KS),_._lazy=0),o){if(os(t._startAt=Oe.set(g,kn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&Mn(l),startAt:null,delay:0,onUpdate:c&&function(){return Un(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!a&&!p)&&t._startAt.revert(Ra),a&&f&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&f&&!_){if(e&&(a=!1),b=kn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&Mn(l),immediateRender:a,stagger:0,parent:m},E),B&&(b[N.prop]=B),os(t._startAt=Oe.set(g,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(Ra):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,l=f&&Mn(l)||l&&!f,T=0;T<g.length;T++){if(M=g[T],w=M._gsap||Zh(g)[T]._gsap,t._ptLookup[T]=k={},ih[w.id]&&es.length&&Ha(),V=x===g?T:x.indexOf(M),N&&(O=new N).init(M,B||E,t,V,x)!==!1&&(t._pt=P=new En(t._pt,M,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(W){k[W]=P}),O.priority&&(S=1)),!N||B)for(b in E)Dn[b]&&(O=Hp(b,E,t,V,M,x))?O.priority&&(S=1):k[b]=P=Kh.call(t,M,b,"get",E[b],V,x,0,i.stringFilter);t._op&&t._op[T]&&t.kill(M,t._op[T]),y&&t._pt&&(ji=t,Re.killTweensOf(M,k,t.globalTime(e)),G=!t.parent,ji=0),t._pt&&l&&(ih[w.id]=1)}S&&$p(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,u&&e<=0&&v.render(Zn,!0,!0)},bE=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,p;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,p=t._targets.length;p--;){if(h=u[p][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return ch=1,t.vars[e]="+=0",Jh(t,a),ch=0,l?To(e+" not eligible for reset"):1;c.push(h)}for(p=c.length;p--;)d=c[p],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ue(n)+nn(d.e)),d.b&&(d.b=h.s+nn(d.b))},wE=function(t,e){var n=t[0]?Us(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Ur({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},TE=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(sn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},go=function(t,e,n,i,r){return Ie(t)?t.call(e,n,i,r):Xe(t)&&~t.indexOf("random(")?Co(t):t},Gp=$h+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Wp={};Sn(Gp+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Wp[s]=1});var Oe=(function(s){cp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:mo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,p=l.overwrite,f=l.keyframes,_=l.defaults,g=l.scrollTrigger,m=l.yoyoEase,x=i.parent||Re,y=(sn(n)||up(n)?Fi(n[0]):"length"in i)?[n]:jn(n),v,E,T,b,P,M,S,w;if(a._targets=y.length?Zh(y):To("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,f||u||xa(c)||xa(h)){if(i=a.vars,v=a.timeline=new dn({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:y}),v.kill(),v.parent=v._dp=Ti(a),v._start=0,u||xa(c)||xa(h)){if(b=y.length,S=u&&Cp(u),gi(u))for(P in u)~Gp.indexOf(P)&&(w||(w={}),w[P]=u[P]);for(E=0;E<b;E++)T=Ga(i,Wp),T.stagger=0,m&&(T.yoyoEase=m),w&&Ur(T,w),M=y[E],T.duration=+go(c,Ti(a),E,M,y),T.delay=(+go(h,Ti(a),E,M,y)||0)-a._delay,!u&&b===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),v.to(M,T,S?S(E,M,y):0),v._ease=ae.none;v.duration()?c=h=0:a.timeline=0}else if(f){mo(kn(v.vars.defaults,{ease:"none"})),v._ease=Ns(f.ease||i.ease||"none");var N=0,O,k,V;if(sn(f))f.forEach(function(B){return v.to(y,B,">")}),v.duration();else{T={};for(P in f)P==="ease"||P==="easeEach"||TE(P,f[P],T,f.easeEach);for(P in T)for(O=T[P].sort(function(B,G){return B.t-G.t}),N=0,E=0;E<O.length;E++)k=O[E],V={ease:k.e,duration:(k.t-(E?O[E-1].t:0))/100*c},V[P]=k.v,v.to(y,V,N),N+=V.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return p===!0&&!Hh&&(ji=Ti(a),Re.killTweensOf(y),ji=0),ui(x,Ti(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!f&&a._start===Ce(x._time)&&Mn(d)&&iE(Ti(a))&&x.data!=="nested")&&(a._tTime=-ye,a.render(Math.max(0,-h)||0)),g&&bp(Ti(a),g),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-ye&&!h?l:i<ye?0:i,u,p,f,_,g,m,x,y,v;if(!c)rE(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,y=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(_*100+i,r,o);if(u=Ce(d%_),d===l?(f=this._repeat,u=c):(g=Ce(d/_),f=~~g,f&&f===g?(u=c,f--):u>c&&(u=c)),m=this._yoyo&&f&1,m&&(v=this._yEase,u=c-u),g=Fr(this._tTime,_),u===a&&!o&&this._initted&&f===g)return this._tTime=d,this;f!==g&&(y&&this._yEase&&Bp(y,m),this.vars.repeatRefresh&&!m&&!this._lock&&u!==_&&this._initted&&(this._lock=o=1,this.render(Ce(_*f),!0).invalidate()._lock=0))}if(!this._initted){if(wp(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&f!==g))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(u/c),this._from&&(this.ratio=x=1-x),!a&&d&&!r&&!g&&(Un(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;y&&y.render(i<0?i:y._dur*y._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&sh(this,i,r,o),Un(this,"onUpdate")),this._repeat&&f!==g&&this.vars.onRepeat&&!r&&this.parent&&Un(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&sh(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&os(this,1),!r&&!(h&&!a)&&(d||a||m)&&(Un(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){Ro||Ln.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Jh(this,c),h=this._ease(c/this._dur),bE(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(al(this,0),this.parent||Sp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?io(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,ji&&ji.vars.overwrite!==!0)._first||io(this),this.parent&&o!==this.timeline.totalDuration()&&Nr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?jn(i):a,c=this._ptLookup,h=this._pt,d,u,p,f,_,g,m;if((!r||r==="all")&&eE(a,l))return r==="all"&&(this._pt=0),io(this);for(d=this._op=this._op||[],r!=="all"&&(Xe(r)&&(_={},Sn(r,function(x){return _[x]=1}),r=_),r=wE(a,r)),m=a.length;m--;)if(~l.indexOf(a[m])){u=c[m],r==="all"?(d[m]=r,f=u,p={}):(p=d[m]=d[m]||{},f=r);for(_ in f)g=u&&u[_],g&&((!("kill"in g.d)||g.d.kill(_)===!0)&&rl(this,g,"_pt"),delete u[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&h&&io(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return _o(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return _o(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Re.killTweensOf(i,r,o)},t})(Po);kn(Oe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(s){Oe[s]=function(){var t=new dn,e=oh.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Qh=function(t,e,n){return t[e]=n},Xp=function(t,e,n){return t[e](n)},AE=function(t,e,n,i){return t[e](i.fp,n)},CE=function(t,e,n){return t.setAttribute(e,n)},tu=function(t,e){return Ie(t[e])?Xp:Gh(t[e])&&t.setAttribute?CE:Qh},Yp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},RE=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},qp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},eu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},PE=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},DE=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?rl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},LE=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},$p=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},En=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||Yp,this.d=l||this,this.set=c||Qh,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=LE,this.m=n,this.mt=r,this.tween=i},s})();Sn($h+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return qh[s]=1});Bn.TweenMax=Bn.TweenLite=Oe;Bn.TimelineLite=Bn.TimelineMax=dn;Re=new dn({sortChildren:!1,defaults:Ir,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Op;var Os=[],Da={},IE=[],Gd=0,UE=0,sc=function(t){return(Da[t]||IE).map(function(e){return e()})},hh=function(){var t=Date.now(),e=[];t-Gd>2&&(sc("matchMediaInit"),Os.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=ci.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),sc("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Gd=t,sc("matchMedia"))},Zp=(function(){function s(e,n){this.selector=n&&ah(n),this.data=[],this._r=[],this.isReverted=!1,this.id=UE++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){Ie(n)&&(r=i,i=n,n=Ie);var o=this,a=function(){var c=Ae,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=ah(r)),Ae=o,d=i.apply(o,arguments),Ie(d)&&o._r.push(d),Ae=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Ie?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof Oe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof dn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Oe)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Os.length;o--;)Os[o].id===this.id&&Os.splice(o,1)},t.revert=function(n){this.kill(n||{})},s})(),FE=(function(){function s(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){gi(n)||(n={matches:n});var o=new Zp(0,r||this.scope),a=o.conditions={},l,c,h;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=ci.matchMedia(n[c]),l&&(Os.indexOf(o)<0&&Os.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(hh):l.addEventListener("change",hh)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Xa={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Up(i)})},timeline:function(t){return new dn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Xe(t)&&(t=jn(t)[0]);var r=Us(t||{}).get,o=n?Mp:yp;return n==="native"&&(n=""),t&&(e?o((Dn[e]&&Dn[e].get||r)(t,e,n,i)):function(a,l,c){return o((Dn[a]&&Dn[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=jn(t),t.length>1){var i=t.map(function(h){return wn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=Dn[e],a=Us(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;pr._pt=0,d.init(t,n?h+n:h,pr,0,[t]),d.render(1,d),pr._pt&&eu(1,pr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=wn.to(t,kn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ns(t.ease,Ir.ease)),zd(Ir,t||{})},config:function(t){return zd(zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Bn[a]&&To(e+" effect requires "+a+" plugin.")}),tc[e]=function(a,l,c){return n(jn(a),kn(l||{},r),c)},o&&(dn.prototype[e]=function(a,l,c){return this.add(tc[e](a,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ae[t]=Ns(e)},parseEase:function(t,e){return arguments.length?Ns(t,e):ae},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new dn(t),i,r;for(n.smoothChildTiming=Mn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)r=i._next,(e||!(!i._dur&&i instanceof Oe&&i.vars.onComplete===i._targets[0]))&&ui(n,i,i._start-i._delay),i=r;return ui(Re,n,0),n},context:function(t,e){return t?new Zp(t,e):Ae},matchMedia:function(t){return new FE(t)},matchMediaRefresh:function(){return Os.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||hh()},addEventListener:function(t,e){var n=Da[t]||(Da[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Da[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:fE,wrapYoyo:pE,distribute:Cp,random:Pp,snap:Rp,normalize:dE,getUnit:nn,clamp:lE,splitColor:Fp,toArray:jn,selector:ah,mapRange:Lp,pipe:hE,unitize:uE,interpolate:mE,shuffle:Ap},install:mp,effects:tc,ticker:Ln,updateRoot:dn.updateRoot,plugins:Dn,globalTimeline:Re,core:{PropTween:En,globals:_p,Tween:Oe,Timeline:dn,Animation:Po,getCache:Us,_removeLinkedListItem:rl,reverting:function(){return Qe},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return Hh=t}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Xa[s]=Oe[s]});Ln.add(dn.updateRoot);pr=Xa.to({},{duration:0});var NE=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},OE=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=NE(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},rc=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(Xe(r)&&(l={},Sn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}OE(a,r)}}}},wn=Xa.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},rc("roundProps",lh),rc("modifiers"),rc("snap",Rp))||Xa;Oe.version=dn.version=wn.version="3.14.2";pp=1;Wh()&&Or();ae.Power0;ae.Power1;ae.Power2;ae.Power3;ae.Power4;ae.Linear;ae.Quad;ae.Cubic;ae.Quart;ae.Quint;ae.Strong;ae.Elastic;ae.Back;ae.SteppedEase;ae.Bounce;ae.Sine;ae.Expo;ae.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Wd,Ki,yr,nu,Ps,Xd,iu,zE=function(){return typeof window<"u"},Ni={},ws=180/Math.PI,Mr=Math.PI/180,lr=Math.atan2,Yd=1e8,su=/([A-Z])/g,BE=/(left|right|width|margin|padding|x)/i,kE=/[\s,\(]\S/,fi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},VE=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},HE=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},GE=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},WE=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},jp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Kp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},XE=function(t,e,n){return t.style[e]=n},YE=function(t,e,n){return t.style.setProperty(e,n)},qE=function(t,e,n){return t._gsap[e]=n},$E=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},ZE=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},jE=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},De="transform",bn=De+"Origin",KE=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in Ni&&r){if(this.tfm=this.tfm||{},t!=="transform")t=fi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Ci(i,a)}):this.tfm[t]=o.x?o[t]:Ci(i,t),t===bn&&(this.tfm.zOrigin=o.zOrigin);else return fi.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf(De)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(bn,e,"")),t=De}(r||e)&&this.props.push(t,e,r[t])},Jp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},JE=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(su,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=iu(),(!r||!r.isStart)&&!n[De]&&(Jp(n),i.zOrigin&&n[bn]&&(n[bn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Qp=function(t,e){var n={target:t,props:[],revert:JE,save:KE};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},tm,dh=function(t,e){var n=Ki.createElementNS?Ki.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ki.createElement(t);return n&&n.style?n:Ki.createElement(t)},Fn=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(su,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,zr(e)||e,1)||""},qd="O,Moz,ms,Ms,Webkit".split(","),zr=function(t,e,n){var i=e||Ps,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(qd[o]+t in r););return o<0?null:(o===3?"ms":o>=0?qd[o]:"")+t},fh=function(){zE()&&window.document&&(Wd=window,Ki=Wd.document,yr=Ki.documentElement,Ps=dh("div")||{style:{}},dh("div"),De=zr(De),bn=De+"Origin",Ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tm=!!zr("perspective"),iu=wn.core.reverting,nu=1)},$d=function(t){var e=t.ownerSVGElement,n=dh("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),yr.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),yr.removeChild(n),r},Zd=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},em=function(t){var e,n;try{e=t.getBBox()}catch{e=$d(t),n=1}return e&&(e.width||e.height)||n||(e=$d(t)),e&&!e.width&&!e.x&&!e.y?{x:+Zd(t,["x","cx","x1"])||0,y:+Zd(t,["y","cy","y1"])||0,width:0,height:0}:e},nm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&em(t))},as=function(t,e){if(e){var n=t.style,i;e in Ni&&e!==bn&&(e=De),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(su,"-$1").toLowerCase())):n.removeAttribute(e)}},Ji=function(t,e,n,i,r,o){var a=new En(t._pt,e,n,0,1,o?Kp:jp);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},jd={deg:1,rad:1,turn:1},QE={grid:1,flex:1},ls=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=Ps.style,l=BE.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",p=i==="%",f,_,g,m;if(i===o||!r||jd[i]||jd[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),m=t.getCTM&&nm(t),(p||o==="%")&&(Ni[e]||~e.indexOf("adius")))return f=m?t.getBBox()[l?"width":"height"]:t[h],Ue(p?r/f*d:r/100*f);if(a[l?"width":"height"]=d+(u?o:i),_=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===Ki||!_.appendChild)&&(_=Ki.body),g=_._gsap,g&&p&&g.width&&l&&g.time===Ln.time&&!g.uncache)return Ue(r/g.width*d);if(p&&(e==="height"||e==="width")){var x=t.style[e];t.style[e]=d+i,f=t[h],x?t.style[e]=x:as(t,e)}else(p||o==="%")&&!QE[Fn(_,"display")]&&(a.position=Fn(t,"position")),_===t&&(a.position="static"),_.appendChild(Ps),f=Ps[h],_.removeChild(Ps),a.position="absolute";return l&&p&&(g=Us(_),g.time=Ln.time,g.width=_[h]),Ue(u?f*r/d:f&&r?d/f*r:0)},Ci=function(t,e,n,i){var r;return nu||fh(),e in fi&&e!=="transform"&&(e=fi[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ni[e]&&e!=="transform"?(r=Lo(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:qa(Fn(t,bn))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Ya[e]&&Ya[e](t,e,n)||Fn(t,e)||vp(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?ls(t,e,r,n)+n:r},t1=function(t,e,n,i){if(!n||n==="none"){var r=zr(e,t,1),o=r&&Fn(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=Fn(t,"borderTopColor"))}var a=new En(this._pt,t.style,e,0,1,qp),l=0,c=0,h,d,u,p,f,_,g,m,x,y,v,E;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Fn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=t.style[e],t.style[e]=i,i=Fn(t,e)||i,_?t.style[e]=_:as(t,e)),h=[n,i],Op(h),n=h[0],i=h[1],u=n.match(fr)||[],E=i.match(fr)||[],E.length){for(;d=fr.exec(i);)g=d[0],x=i.substring(l,d.index),f?f=(f+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(f=1),g!==(_=u[c++]||"")&&(p=parseFloat(_)||0,v=_.substr((p+"").length),g.charAt(1)==="="&&(g=xr(p,g)+v),m=parseFloat(g),y=g.substr((m+"").length),l=fr.lastIndex-y.length,y||(y=y||zn.units[e]||v,l===i.length&&(i+=y,a.e+=y)),v!==y&&(p=ls(t,e,_,y)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:p,c:m-p,m:f&&f<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Kp:jp;return fp.test(i)&&(a.e=0),this._pt=a,a},Kd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},e1=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Kd[n]||n,e[1]=Kd[i]||i,e.join(" ")},n1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],Ni[a]&&(l=1,a=a==="transformOrigin"?bn:De),as(n,a);l&&(as(n,De),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Lo(n,1),o.uncache=1,Jp(i)))}},Ya={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new En(t._pt,e,n,0,0,n1);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},Do=[1,0,0,1,0,0],im={},sm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Jd=function(t){var e=Fn(t,De);return sm(e)?Do:e.substr(7).match(dp).map(Ue)},ru=function(t,e){var n=t._gsap||Us(t),i=t.style,r=Jd(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?Do:r):(r===Do&&!t.offsetParent&&t!==yr&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,yr.appendChild(t)),r=Jd(t),l?i.display=l:as(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):yr.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},ph=function(t,e,n,i,r,o){var a=t._gsap,l=r||ru(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,p=l[0],f=l[1],_=l[2],g=l[3],m=l[4],x=l[5],y=e.split(" "),v=parseFloat(y[0])||0,E=parseFloat(y[1])||0,T,b,P,M;n?l!==Do&&(b=p*g-f*_)&&(P=v*(g/b)+E*(-_/b)+(_*x-g*m)/b,M=v*(-f/b)+E*(p/b)-(p*x-f*m)/b,v=P,E=M):(T=em(t),v=T.x+(~y[0].indexOf("%")?v/100*T.width:v),E=T.y+(~(y[1]||y[0]).indexOf("%")?E/100*T.height:E)),i||i!==!1&&a.smooth?(m=v-c,x=E-h,a.xOffset=d+(m*p+x*_)-m,a.yOffset=u+(m*f+x*g)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=E,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[bn]="0px 0px",o&&(Ji(o,a,"xOrigin",c,v),Ji(o,a,"yOrigin",h,E),Ji(o,a,"xOffset",d,a.xOffset),Ji(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+E)},Lo=function(t,e){var n=t._gsap||new Vp(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Fn(t,bn)||"0",h,d,u,p,f,_,g,m,x,y,v,E,T,b,P,M,S,w,N,O,k,V,B,G,W,st,it,pt,yt,zt,K,et;return h=d=u=_=g=m=x=y=v=0,p=f=1,n.svg=!!(t.getCTM&&nm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[De]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[De]!=="none"?l[De]:"")),i.scale=i.rotate=i.translate="none"),b=ru(t,n.svg),n.svg&&(n.uncache?(W=t.getBBox(),c=n.xOrigin-W.x+"px "+(n.yOrigin-W.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),ph(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,b)),E=n.xOrigin||0,T=n.yOrigin||0,b!==Do&&(w=b[0],N=b[1],O=b[2],k=b[3],h=V=b[4],d=B=b[5],b.length===6?(p=Math.sqrt(w*w+N*N),f=Math.sqrt(k*k+O*O),_=w||N?lr(N,w)*ws:0,x=O||k?lr(O,k)*ws+_:0,x&&(f*=Math.abs(Math.cos(x*Mr))),n.svg&&(h-=E-(E*w+T*O),d-=T-(E*N+T*k))):(et=b[6],zt=b[7],it=b[8],pt=b[9],yt=b[10],K=b[11],h=b[12],d=b[13],u=b[14],P=lr(et,yt),g=P*ws,P&&(M=Math.cos(-P),S=Math.sin(-P),G=V*M+it*S,W=B*M+pt*S,st=et*M+yt*S,it=V*-S+it*M,pt=B*-S+pt*M,yt=et*-S+yt*M,K=zt*-S+K*M,V=G,B=W,et=st),P=lr(-O,yt),m=P*ws,P&&(M=Math.cos(-P),S=Math.sin(-P),G=w*M-it*S,W=N*M-pt*S,st=O*M-yt*S,K=k*S+K*M,w=G,N=W,O=st),P=lr(N,w),_=P*ws,P&&(M=Math.cos(P),S=Math.sin(P),G=w*M+N*S,W=V*M+B*S,N=N*M-w*S,B=B*M-V*S,w=G,V=W),g&&Math.abs(g)+Math.abs(_)>359.9&&(g=_=0,m=180-m),p=Ue(Math.sqrt(w*w+N*N+O*O)),f=Ue(Math.sqrt(B*B+et*et)),P=lr(V,B),x=Math.abs(P)>2e-4?P*ws:0,v=K?1/(K<0?-K:K):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!sm(Fn(t,De)),G&&t.setAttribute("transform",G))),Math.abs(x)>90&&Math.abs(x)<270&&(r?(p*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(f*=-1,x+=x<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ue(p),n.scaleY=Ue(f),n.rotation=Ue(_)+a,n.rotationX=Ue(g)+a,n.rotationY=Ue(m)+a,n.skewX=x+a,n.skewY=y+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[bn]=qa(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?s1:tm?rm:i1,n.uncache=0,n},qa=function(t){return(t=t.split(" "))[0]+" "+t[1]},oc=function(t,e,n){var i=nn(e);return Ue(parseFloat(e)+parseFloat(ls(t,"x",n+"px",i)))+i},i1=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,rm(t,e)},Ms="0deg",Jr="0px",Ss=") ",rm=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,p=n.skewY,f=n.scaleX,_=n.scaleY,g=n.transformPerspective,m=n.force3D,x=n.target,y=n.zOrigin,v="",E=m==="auto"&&t&&t!==1||m===!0;if(y&&(d!==Ms||h!==Ms)){var T=parseFloat(h)*Mr,b=Math.sin(T),P=Math.cos(T),M;T=parseFloat(d)*Mr,M=Math.cos(T),o=oc(x,o,b*M*-y),a=oc(x,a,-Math.sin(T)*-y),l=oc(x,l,P*M*-y+y)}g!==Jr&&(v+="perspective("+g+Ss),(i||r)&&(v+="translate("+i+"%, "+r+"%) "),(E||o!==Jr||a!==Jr||l!==Jr)&&(v+=l!==Jr||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ss),c!==Ms&&(v+="rotate("+c+Ss),h!==Ms&&(v+="rotateY("+h+Ss),d!==Ms&&(v+="rotateX("+d+Ss),(u!==Ms||p!==Ms)&&(v+="skew("+u+", "+p+Ss),(f!==1||_!==1)&&(v+="scale("+f+", "+_+Ss),x.style[De]=v||"translate(0, 0)"},s1=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,p=n.target,f=n.xOrigin,_=n.yOrigin,g=n.xOffset,m=n.yOffset,x=n.forceCSS,y=parseFloat(o),v=parseFloat(a),E,T,b,P,M;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Mr,c*=Mr,E=Math.cos(l)*d,T=Math.sin(l)*d,b=Math.sin(l-c)*-u,P=Math.cos(l-c)*u,c&&(h*=Mr,M=Math.tan(c-h),M=Math.sqrt(1+M*M),b*=M,P*=M,h&&(M=Math.tan(h),M=Math.sqrt(1+M*M),E*=M,T*=M)),E=Ue(E),T=Ue(T),b=Ue(b),P=Ue(P)):(E=d,P=u,T=b=0),(y&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(y=ls(p,"x",o,"px"),v=ls(p,"y",a,"px")),(f||_||g||m)&&(y=Ue(y+f-(f*E+_*b)+g),v=Ue(v+_-(f*T+_*P)+m)),(i||r)&&(M=p.getBBox(),y=Ue(y+i/100*M.width),v=Ue(v+r/100*M.height)),M="matrix("+E+","+T+","+b+","+P+","+y+","+v+")",p.setAttribute("transform",M),x&&(p.style[De]=M)},r1=function(t,e,n,i,r){var o=360,a=Xe(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?ws:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Yd)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Yd)%o-~~(c/o)*o)),t._pt=u=new En(t._pt,e,n,i,c,VE),u.e=h,u.u="deg",t._props.push(n),u},Qd=function(t,e){for(var n in e)t[n]=e[n];return t},o1=function(t,e,n){var i=Qd({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,p,f;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[De]=e,a=Lo(n,1),as(n,De),n.setAttribute("transform",c)):(c=getComputedStyle(n)[De],o[De]=e,a=Lo(n,1),o[De]=c);for(l in Ni)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(p=nn(c),f=nn(h),d=p!==f?ls(n,l,c,f):parseFloat(c),u=parseFloat(h),t._pt=new En(t._pt,a,l,d,u-d,uh),t._pt.u=f||0,t._props.push(l));Qd(a,i)};Sn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Ya[t>1?"border"+s:s]=function(a,l,c,h,d){var u,p;if(arguments.length<4)return u=o.map(function(f){return Ci(a,f,c)}),p=u.join(" "),p.split(u[0]).length===5?u[0]:p;u=(h+"").split(" "),p={},o.forEach(function(f,_){return p[f]=u[_]=u[_]||u[(_-1)/2|0]}),a.init(l,p,d)}});var om={name:"css",register:fh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,p,f,_,g,m,x,y,v,E,T,b,P,M;nu||fh(),this.styles=this.styles||Qp(t),P=this.styles.props,this.tween=n;for(_ in e)if(_!=="autoRound"&&(h=e[_],!(Dn[_]&&Hp(_,e,n,i,t,r)))){if(p=typeof h,f=Ya[_],p==="function"&&(h=h.call(n,i,t,r),p=typeof h),p==="string"&&~h.indexOf("random(")&&(h=Co(h)),f)f(this,t,_,h,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(_)+"").trim(),h+="",ns.lastIndex=0,ns.test(c)||(g=nn(c),m=nn(h),m?g!==m&&(c=ls(t,_,c,m)+m):g&&(h+=g)),this.add(a,"setProperty",c,h,i,r,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,t,r):l[_],Xe(c)&&~c.indexOf("random(")&&(c=Co(c)),nn(c+"")||c==="auto"||(c+=zn.units[_]||nn(Ci(t,_))||""),(c+"").charAt(1)==="="&&(c=Ci(t,_))):c=Ci(t,_),u=parseFloat(c),x=p==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),d=parseFloat(h),_ in fi&&(_==="autoAlpha"&&(u===1&&Ci(t,"visibility")==="hidden"&&d&&(u=0),P.push("visibility",0,a.visibility),Ji(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=fi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),y=_ in Ni,y){if(this.styles.save(_),M=h,p==="string"&&h.substring(0,6)==="var(--"){if(h=Fn(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var S=t.style.perspective;t.style.perspective=h,h=Fn(t,"perspective"),S?t.style.perspective=S:as(t,"perspective")}d=parseFloat(h)}if(v||(E=t._gsap,E.renderTransform&&!e.parseTransform||Lo(t,e.parseTransform),T=e.smoothOrigin!==!1&&E.smooth,v=this._pt=new En(this._pt,a,De,0,1,E.renderTransform,E,0,-1),v.dep=1),_==="scale")this._pt=new En(this._pt,E,"scaleY",E.scaleY,(x?xr(E.scaleY,x+d):d)-E.scaleY||0,uh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(bn,0,a[bn]),h=e1(h),E.svg?ph(t,h,0,T,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==E.zOrigin&&Ji(this,E,"zOrigin",E.zOrigin,m),Ji(this,a,_,qa(c),qa(h)));continue}else if(_==="svgOrigin"){ph(t,h,1,T,0,this);continue}else if(_ in im){r1(this,E,_,u,x?xr(u,x+h):h);continue}else if(_==="smoothOrigin"){Ji(this,E,"smooth",E.smooth,h);continue}else if(_==="force3D"){E[_]=h;continue}else if(_==="transform"){o1(this,h,t);continue}}else _ in a||(_=zr(_)||_);if(y||(d||d===0)&&(u||u===0)&&!kE.test(h)&&_ in a)g=(c+"").substr((u+"").length),d||(d=0),m=nn(h)||(_ in zn.units?zn.units[_]:g),g!==m&&(u=ls(t,_,c,m)),this._pt=new En(this._pt,y?E:a,_,u,(x?xr(u,x+d):d)-u,!y&&(m==="px"||_==="zIndex")&&e.autoRound!==!1?WE:uh),this._pt.u=m||0,y&&M!==h?(this._pt.b=c,this._pt.e=M,this._pt.r=GE):g!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=HE);else if(_ in a)t1.call(this,t,_,c,x?x+h:h);else if(_ in t)this.add(t,_,c||t[_],x?x+h:h,i,r);else if(_!=="parseTransform"){Yh(_,h);continue}y||(_ in a?P.push(_,0,a[_]):typeof t[_]=="function"?P.push(_,2,t[_]()):P.push(_,1,c||t[_])),o.push(_)}}b&&$p(this)},render:function(t,e){if(e.tween._time||!iu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Ci,aliases:fi,getSetter:function(t,e,n){var i=fi[e];return i&&i.indexOf(",")<0&&(e=i),e in Ni&&e!==bn&&(t._gsap.x||Ci(t,"x"))?n&&Xd===n?e==="scale"?$E:qE:(Xd=n||{})&&(e==="scale"?ZE:jE):t.style&&!Gh(t.style[e])?XE:~e.indexOf("-")?YE:tu(t,e)},core:{_removeProperty:as,_getMatrix:ru}};wn.utils.checkPrefix=zr;wn.core.getStyleSaver=Qp;(function(s,t,e,n){var i=Sn(s+","+t+","+e,function(r){Ni[r]=1});Sn(t,function(r){zn.units[r]="deg",im[r]=1}),fi[i[13]]=s+","+t,Sn(n,function(r){var o=r.split(":");fi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){zn.units[s]="px"});wn.registerPlugin(om);var ro=wn.registerPlugin(om)||wn;ro.core.Tween;function a1(s,t){const e=.43-.21/(1+Math.exp(-(s-14)/2.2))+.05/(1+Math.exp(-(s-28)/3)),n=(t==null?void 0:t.drag)||1;return e*n}function l1(s,t){const e=(t==null?void 0:t.curveMultiplier)||1;return Math.min(.34*e,.62*s*e)}function c1({BALL_DESIGNS:s,ballConfig:t,debugParams:e,ballStartPosition:n,ballRadius:i,goalWidth:r,goalHeight:o,sizes:a,getBallGroup:l,getGoalGroup:c,flightAnalyticsState:h,recordPhysicsSample:d,updateForceVectors:u,clearTrail:p,renderBirdseye:f,kickPhysics:_}){let g=null,m=null;const x=0,y=2.5;function v(P,M,S,w=0){b(),_.isKicking=!0,p();const N=s[t.design],O=Math.max(0,e.randomness+N.randomnessBonus),k=M,V=(Math.random()-.5)*.3*O,B=1+(Math.random()-.5)*.1*O,G=k+V,W=Math.min(P*B,2.5),st=(.6+(1-Math.min(W,1))*.4)/(N.speedRetention||1),it=e.arcHeight*W*W*3.5/e.gravity*(N.arcModifier||1),pt=1+W*2,yt=S*r*1.1*e.curveIntensity*(N.curveMultiplier||1);_.activeCurveForce=yt;const zt=e.windSpeed,K=60,et=[],dt=[],ct=[];let Ct=-1,Yt=null;const vt=r/2,te=.06;let wt=-1;const Vt=N.knuckleIntensity||0,z=Math.abs(S)<.3,Se=Vt>0&&z;let $t=0,qt=0,Pt=0,re=0;Se&&($t=(Math.random()-.5)*2*Vt*W*r*.4,qt=(Math.random()-.5)*Vt*W*.8,Pt=.3+Math.random()*.35,re=.4+Math.random()*.3);for(let Dt=0;Dt<=K;Dt++){const xt=Dt/K,oe=1-Math.pow(1-xt,2);let ve=1;if(Se&&xt>re){const mn=(xt-re)/(1-re);ve=1-.3*Vt*mn}const on=n.z+(pt-n.z)*oe*ve,an=1-xt*xt*.45;let ze=2*(1-xt)*xt*yt*an+xt*xt*G+zt*xt*xt*.5,qe=i+it*4*xt*(1-xt)*e.gravity+w*xt;if(Se&&xt>Pt){const mn=Math.min(1,(xt-Pt)/.4),de=mn*mn*(3-2*mn);ze+=$t*de,qe+=qt*de}et.push(ze),dt.push(Math.max(i,qe)),ct.push(on),on>=x-1.5&&wt<0&&(wt=Dt)}wt<0&&(wt=K);const gt=1/60,D=9.81*e.gravity,A=st/K;function $(Dt,xt,oe,ve,on,an){if(oe<x-i||oe>x+y+i)return null;if(oe>=x-i&&oe<=x+i){const ze=Math.abs(Dt)<vt-i,qe=xt>i&&xt<o-i;if(ze&&qe)return"goal";const mn=Math.abs(Math.abs(Dt)-vt)<te+i&&xt<o+i&&xt>0,de=Math.abs(xt-o)<te+i&&Math.abs(Dt)<vt+te;if(mn||de)return"frame"}if(oe>x&&oe<x+y&&Math.abs(Dt)<vt&&xt<o&&xt>0){const ze=Math.abs(Math.abs(Dt)-vt)<i,qe=Math.abs(xt-o)<i,mn=Math.abs(oe-(x+y))<i;if(ze)return"side-net";if(qe)return"top-net";if(mn)return"back-net"}return null}function rt(Dt,xt){Dt==="goal"?(xt.x*=.1,xt.y*=.05,xt.z*=.25):Dt==="frame"?(xt.z*=-.35,xt.y*=.4,xt.x*=.5):Dt==="side-net"?(xt.x*=-.2,xt.z*=.3,xt.y*=.5):Dt==="top-net"?(xt.y*=-.2,xt.x*=.5,xt.z*=.3):Dt==="back-net"&&(xt.z*=-.15,xt.x*=.3,xt.y*=.3)}function at(Dt,xt,oe,ve,on){let an=et[Dt],ze=dt[Dt],qe=ct[Dt],mn=!1;const de={x:xt,y:oe,z:ve};let R=-1;const X=10;for(let j=0;j<on&&!mn;j++){const q=R>=0&&j-R>X?D*3:D;if(de.y-=q*gt,R>=0&&j-R<=X&&(de.x*=.5,de.y*=.5,de.z*=.5),an+=de.x*gt,ze+=de.y*gt,qe+=de.z*gt,R<0){de.x*=.998,de.z*=.998;const Tt=$(an,ze,qe,de.x,de.y,de.z);Tt&&(Ct=Dt+1+j,Yt=Tt,rt(Tt,de),R=j)}ze<=i&&(ze=i,Math.abs(de.y)<.5?(de.y=0,de.x*=.9,de.z*=.9,Math.abs(de.x)<.05&&Math.abs(de.z)<.05&&(mn=!0)):(de.y=Math.abs(de.y)*.3,de.x*=.75,de.z*=.75));const ht=Dt+1+j;ht<=K?(et[ht]=an,dt[ht]=ze,ct[ht]=qe):(et.push(an),dt.push(ze),ct.push(qe))}}{const Dt=Math.max(1,wt),xt=Math.max(0,Dt-3),oe=(Dt-xt)*A||A;let ve=(et[Dt]-et[xt])/oe,on=(dt[Dt]-dt[xt])/oe,an=(ct[Dt]-ct[xt])/oe;at(Dt,ve,on,an,240)}const Q=et.length-1,Rt=Q-K,ft=st+Rt*gt,_t=ft/Q,Gt=[],lt=[],Mt=[],Lt=[],Ft=[],bt=[],Wt=[],Nt=[],ee=[];for(let Dt=0;Dt<=Q;Dt++){const xt=Math.max(0,Dt-1),oe=Math.min(Q,Dt+1),ve=(et[oe]-et[xt])/((oe-xt||1)*_t),on=(dt[oe]-dt[xt])/((oe-xt||1)*_t),an=(ct[oe]-ct[xt])/((oe-xt||1)*_t);Gt.push(new L(ve,on,an));const ze=(et[oe]-2*et[Dt]+et[xt])/Math.max(_t*_t,1e-4);lt.push(ze);const qe=Math.sqrt(ve*ve+on*on+an*an);Mt.push(qe),Lt.push(dt[Dt]),Ft.push(ze),bt.push(qe*qe*.003),Wt.push(Math.abs(ze)),Nt.push(9.81*e.gravity),ee.push(Math.abs(e.windSpeed)*.35)}h.latestFlightSeries={t:Array.from({length:Q+1},(Dt,xt)=>xt/Q),speed:Mt,height:Lt,lateralAccel:Ft,heat:{velocity:Mt,drag:bt,magnus:Wt,gravity:Nt,wind:ee}};const H=Mt.reduce((Dt,xt)=>Dt+xt,0)/Mt.length,mt=Math.max(...Mt),Z=.22,C=1.225*mt*Z/181e-7,U=a1(H,N),I=Math.PI*4*W*e.spinMultiplier/st,F=Math.abs(I)*(Z/2)/Math.max(1,H),Y=l1(F,N);d({meanSpeed:H,peakSpeed:mt,avgCd:U,maxCl:Y,spinParam:F,reynolds:C});const ot=-Math.PI*4*W*e.spinMultiplier,ut=S*Math.PI*2*e.spinMultiplier,St=G*.5*e.spinMultiplier,Zt=l().rotation.x,Bt=l().rotation.y,Ot=l().rotation.z,Jt={t:0},Ye=ro.timeline({onComplete:()=>{g=null,T()}});g=Ye;let rn=!1;Ye.to(Jt,{t:1,duration:ft,ease:"none",onUpdate:()=>{const Dt=Math.min(Math.floor(Jt.t*Q),Q),xt=l();xt.position.x=et[Dt],xt.position.y=dt[Dt],xt.position.z=ct[Dt];const oe=Math.min(Jt.t*(Q/K),1),ve=1-Math.pow(1-oe,2);xt.rotation.x=Zt+ot*ve,xt.rotation.y=Bt+ut*ve,xt.rotation.z=Ot+St*ve,_.activeVelocityVec.copy(Gt[Dt]),_.activeLateralAccel=lt[Dt],Ct>=0&&Dt>=Ct&&!rn&&(rn=!0,E(et[Ct],dt[Ct],Yt,Math.sqrt(Gt[Ct].x**2+Gt[Ct].y**2+Gt[Ct].z**2)))}},0)}function E(P,M,S,w){const N=c?c():null;if(!N)return;const O=Math.min(w/9,1.2),k=[];if(N.traverse(B=>{B.isMesh&&B.material.wireframe&&k.push(B)}),k.length===0)return;k.forEach(B=>{const G=B.geometry.attributes.position;B._origNet||(B._origNet=new Float32Array(G.array));const W=new L(0,0,1);Math.abs(B.rotation.y)>.1?W.set(1,0,0):Math.abs(B.rotation.x)>.1&&W.set(0,1,0),B._rippleNormal=W});const V={t:0};ro.to(V,{t:1,duration:2,ease:"none",onUpdate:()=>{k.forEach(B=>{const G=B.geometry.attributes.position,W=B._origNet,st=B._rippleNormal,it=new L;B.getWorldPosition(it);for(let pt=0;pt<G.count;pt++){const yt=W[pt*3],zt=W[pt*3+1],K=W[pt*3+2],et=yt+it.x,dt=zt+it.y,ct=et-P,Ct=dt-M,Yt=Math.sqrt(ct*ct+Ct*Ct),vt=Math.exp(-V.t*2.5),te=Math.sin(V.t*8-Yt*1.2)*vt,wt=Math.exp(-Yt*.3)*Math.max(0,1-V.t*1.5),Vt=(te*.3+wt*.25)*O;G.setXYZ(pt,yt+st.x*Vt,zt+st.y*Vt,K+st.z*Vt)}G.needsUpdate=!0})},onComplete:()=>{k.forEach(B=>{const G=B.geometry.attributes.position;G.array.set(B._origNet),G.needsUpdate=!0})}})}function T(){_.isKicking=!1,_.activeCurveForce=0,_.activeLateralAccel=0,_.activeVelocityVec.set(0,0,0),m=ro.delayedCall(.8,()=>{m=null;const P={t:0},M=l().position.clone(),S=ro.timeline({onComplete:()=>{g=null,f()}});g=S,S.to(P,{t:1,duration:.5,ease:"power2.inOut",onUpdate:()=>{const w=l();w.position.x=M.x+(n.x-M.x)*P.t,w.position.y=M.y+(n.y-M.y)*P.t,w.position.z=M.z+(n.z-M.z)*P.t}},0)})}function b(){g&&(g.kill(),g=null),m&&(m.kill(),m=null),_.isKicking=!1,_.activeCurveForce=0,_.activeLateralAccel=0,_.activeVelocityVec.set(0,0,0),l().position.set(n.x,n.y,n.z)}return{kick:v,cancelKick:b}}const h1={classic:[{name:"Default",colors:{}},{name:"Traditional",primary:"#ffffff",secondary:"#1a1a1a",colors:{0:"#1a1a1a",1:"#1a1a1a",2:"#1a1a1a",3:"#1a1a1a",4:"#1a1a1a",5:"#1a1a1a",6:"#1a1a1a",7:"#1a1a1a",8:"#1a1a1a",9:"#1a1a1a",10:"#1a1a1a",11:"#1a1a1a"}},{name:"Telstar",primary:"#f5f2ea",secondary:"#1a1a1a",colors:{0:"#111111",1:"#111111",2:"#111111",3:"#111111",4:"#111111",5:"#111111",6:"#111111",7:"#111111",8:"#111111",9:"#111111",10:"#111111",11:"#111111",12:"#f5f2ea",13:"#f5f2ea",14:"#f5f2ea",15:"#f5f2ea",16:"#f5f2ea",17:"#f5f2ea",18:"#f5f2ea",19:"#f5f2ea",20:"#f5f2ea",21:"#f5f2ea",22:"#f5f2ea",23:"#f5f2ea",24:"#f5f2ea",25:"#f5f2ea",26:"#f5f2ea",27:"#f5f2ea",28:"#f5f2ea",29:"#f5f2ea",30:"#f5f2ea",31:"#f5f2ea"}},{name:"Tango",primary:"#f5f0e8",secondary:"#2a2a2a",colors:{0:"#2a2a2a",1:"#2a2a2a",2:"#2a2a2a",3:"#2a2a2a",4:"#2a2a2a",5:"#2a2a2a",6:"#2a2a2a",7:"#2a2a2a",8:"#2a2a2a",9:"#2a2a2a",10:"#2a2a2a",11:"#2a2a2a",12:"#d4c8b0",13:"#f5f0e8",14:"#d4c8b0",15:"#f5f0e8",16:"#d4c8b0",17:"#f5f0e8",18:"#d4c8b0",19:"#f5f0e8",20:"#d4c8b0",21:"#f5f0e8",22:"#d4c8b0",23:"#f5f0e8",24:"#d4c8b0",25:"#f5f0e8",26:"#d4c8b0",27:"#f5f0e8",28:"#d4c8b0",29:"#f5f0e8",30:"#d4c8b0",31:"#f5f0e8"}},{name:"Neon",primary:"#0a0a0a",secondary:"#00ffaa",colors:{0:"#00ffaa",1:"#00ff66",2:"#00ffaa",3:"#00ff66",4:"#00ffaa",5:"#00ff66",6:"#00ffaa",7:"#00ff66",8:"#00ffaa",9:"#00ff66",10:"#00ffaa",11:"#00ff66"}}],brazuca:[{name:"Default",colors:{}},{name:"WC 2014",primary:"#f5f0ea",secondary:"#1a1a1a",colors:{0:"#e84420",1:"#1a6633",2:"#f5f0ea",3:"#2244aa",4:"#e84420",5:"#1a6633"}},{name:"Final Rio",primary:"#f0ece0",secondary:"#8b7340",colors:{0:"#c8a84a",1:"#1a1a1a",2:"#c8a84a",3:"#1a1a1a",4:"#c8a84a",5:"#1a1a1a"}},{name:"Winter",primary:"#e8e8ee",secondary:"#334455",colors:{0:"#cc3322",1:"#334455",2:"#e8e8ee",3:"#cc3322",4:"#334455",5:"#e8e8ee"}},{name:"Ember",primary:"#1a0800",secondary:"#ff4400",colors:{0:"#ff2200",1:"#ff6600",2:"#ffaa00",3:"#ff2200",4:"#ff6600",5:"#ffaa00"}},{name:"Deep Sea",primary:"#001828",secondary:"#006688",colors:{0:"#003355",1:"#005577",2:"#007799",3:"#0099bb",4:"#00bbcc",5:"#44ddee"}}],jabulani:[{name:"Default",colors:{}},{name:"WC 2010",primary:"#f5f2ea",secondary:"#333333",colors:{0:"#d4a020",1:"#228833",2:"#cc2233",3:"#1a4488",4:"#f5f2ea",5:"#f5f2ea",6:"#f5f2ea",7:"#f5f2ea"}},{name:"Jo'burg Gold",primary:"#f0ece0",secondary:"#8b7340",colors:{0:"#c8a030",1:"#c8a030",2:"#c8a030",3:"#c8a030",4:"#f0ece0",5:"#f0ece0",6:"#f0ece0",7:"#f0ece0"}},{name:"Angola",primary:"#f5f2ea",secondary:"#444444",colors:{0:"#cc3322",1:"#1a1a1a",2:"#cc3322",3:"#1a1a1a",4:"#f5f2ea",5:"#f5f2ea",6:"#f5f2ea",7:"#f5f2ea"}},{name:"Vuvuzela",primary:"#f0ece0",secondary:"#333333",colors:{0:"#dd6622",1:"#22aa55",2:"#dd6622",3:"#22aa55",4:"#ffcc00",5:"#ffcc00",6:"#ffcc00",7:"#ffcc00"}},{name:"Eclipse",primary:"#0e0e1e",secondary:"#333355",colors:{0:"#6622cc",1:"#cc2266",2:"#2266cc",3:"#22cc66",4:"#0e0e1e",5:"#0e0e1e",6:"#0e0e1e",7:"#0e0e1e"}}],trionda:[{name:"Default",colors:{}},{name:"WC 2026",primary:"#f0ece4",secondary:"#222222",colors:{0:"#cc2233",1:"#22884a",2:"#2255aa",3:"#6a2244"}},{name:"USA",primary:"#f0ece4",secondary:"#1a2a5a",colors:{0:"#bb2233",1:"#f0ece4",2:"#1a2a5a",3:"#bb2233"}},{name:"Mexico",primary:"#f0ece4",secondary:"#1a4a2a",colors:{0:"#006847",1:"#f0ece4",2:"#ce1126",3:"#006847"}},{name:"Canada",primary:"#f0ece4",secondary:"#cc2233",colors:{0:"#cc2233",1:"#f0ece4",2:"#cc2233",3:"#f0ece4"}},{name:"Midnight",primary:"#111118",secondary:"#2a2a3a",colors:{0:"#1a1a2a",1:"#2a2a3a",2:"#1a1a2a",3:"#2a2a3a"}},{name:"Carnival",primary:"#fff5f0",secondary:"#333333",colors:{0:"#ff4466",1:"#44ccff",2:"#ffcc22",3:"#44ff88"}}]},tf={classic:[[0,1,2,3,4,5,6,7,8,9,10,11],[12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]],jabulani:[[0,1,2,3],[4,5,6,7]],brazuca:[[0,1,2,3,4,5]],trionda:[[0,1,2,3]]};function u1({ballConfig:s,updateBall:t,selectPanel:e,invalidateCanvases:n}){let i="select",r=!1,o="#cc2233";function a(){return h1[s.design]||[]}function l(w){const O=(tf[s.design]||[]).find(k=>k.includes(w));return O?O.filter(k=>k!==w):[]}function c(w){if(w!=null){if(r){const O=(tf[s.design]||[]).find(k=>k.includes(w));O?(O.forEach(k=>to(s.design,k,o)),n&&n(O)):(to(s.design,w,o),n&&n(w))}else to(s.design,w,o),n&&n(w);t()}}function h(w){return i==="fill"?(c(w),!0):!1}function d(){return o}function u(){return i}function p(){var w;return parseInt(((w=document.getElementById("tb-brush-size"))==null?void 0:w.value)||"12")}function f(){document.querySelectorAll(".tb-dropdown").forEach(w=>w.classList.remove("open"))}function _(w){const N=document.getElementById(w);if(!N)return;const O=N.classList.contains("open");f(),O||N.classList.add("open")}document.addEventListener("click",w=>{!w.target.closest(".tb-dropdown")&&!w.target.closest('[id$="-toggle"]')&&f()});function g(){const w=document.getElementById("tb-pattern-list");if(!w)return;w.innerHTML="",a().forEach((O,k)=>{const V=document.createElement("button");V.className="tb-pattern",V.dataset.patternIndex=k;const B=document.createElement("div");B.className="tb-pattern-dots";const G=Object.values(O.colors).slice(0,5);G.length===0&&G.push(s.primaryColor,s.secondaryColor),G.forEach(st=>{const it=document.createElement("div");it.className="tb-pattern-dot",it.style.background=st,B.appendChild(it)}),V.appendChild(B);const W=document.createElement("span");W.className="tb-pattern-name",W.textContent=O.name,V.appendChild(W),V.addEventListener("click",()=>m(k)),w.appendChild(V)})}function m(w){const O=a()[w];if(O){n&&n("all"),Qc(s.design),O.primary&&(s.primaryColor=O.primary,document.querySelectorAll("#primary-color, #primary-color-detail").forEach(k=>k.value=O.primary)),O.secondary&&(s.secondaryColor=O.secondary,document.querySelectorAll("#secondary-color, #secondary-color-detail").forEach(k=>k.value=O.secondary));for(const[k,V]of Object.entries(O.colors))to(s.design,parseInt(k),V);document.querySelectorAll(".tb-pattern").forEach(k=>{k.classList.toggle("active",parseInt(k.dataset.patternIndex)===w)}),e(null),t(),f()}}function x(){document.querySelector('.tb-btn[data-tool="mirror"]'),document.querySelectorAll(".tb-btn[data-tool]").forEach(w=>{w.addEventListener("click",()=>{if(w.dataset.tool==="mirror"){r=!r,w.classList.toggle("active",r);return}i=w.dataset.tool,document.querySelectorAll(".tb-btn[data-tool]").forEach(k=>{k.dataset.tool!=="mirror"&&k.classList.toggle("active",k.dataset.tool===i)});const N=document.getElementById("tb-brush-controls"),O=document.getElementById("tb-shape-controls");N&&(N.style.display=i==="brush"?"":"none"),O&&(O.style.display=i==="shape"?"":"none")})}),document.querySelectorAll(".tb-shape-opt").forEach(w=>{w.addEventListener("click",()=>{document.querySelectorAll(".tb-shape-opt").forEach(N=>N.classList.toggle("active",N===w)),y=w.dataset.shape})})}let y="star";function v(){var w,N,O;(w=document.getElementById("tb-swatch-toggle"))==null||w.addEventListener("click",k=>{k.stopPropagation(),_("tb-swatch-dropdown")}),(N=document.getElementById("tb-pattern-toggle"))==null||N.addEventListener("click",k=>{k.stopPropagation(),_("tb-pattern-dropdown")}),(O=document.getElementById("tb-explode-toggle"))==null||O.addEventListener("click",k=>{k.stopPropagation();const V=document.getElementById("tb-explode-slider");V&&V.classList.toggle("open")}),document.addEventListener("click",k=>{var V;!k.target.closest("#tb-explode-slider")&&!k.target.closest("#tb-explode-toggle")&&((V=document.getElementById("tb-explode-slider"))==null||V.classList.remove("open"))})}function E(){const w=document.getElementById("tb-paint-color");document.querySelectorAll(".tb-swatch").forEach(N=>{N.addEventListener("click",()=>{o=N.dataset.color,w&&(w.value=o),f()})}),w==null||w.addEventListener("input",()=>{o=w.value})}function T(){var w;(w=document.getElementById("studio-reset-btn"))==null||w.addEventListener("click",()=>{Qc(s.design),n&&n("all"),document.querySelectorAll(".tb-pattern").forEach(N=>N.classList.remove("active")),e(null),t()})}function b(){x(),v(),E(),T(),g()}function P(){var w;return parseInt(((w=document.getElementById("tb-shape-size"))==null?void 0:w.value)||"25")}function M(){return y}function S(){return r}return{init:b,getActiveTool:u,handlePanelClick:h,renderPatterns:g,getActiveColor:d,getBrushSize:p,getShapeSize:P,getActiveShape:M,isMirrorMode:S,getSymmetryPeers:l}}function d1({mainScene:s,ballConfig:t,ballRadius:e,previewRadius:n,getBallGroup:i,setBallGroup:r,buildMainBall:o,onBallChanged:a,cancelKick:l}){const c=document.getElementById("panel-customizer"),h=document.getElementById("zoom-state-label"),d=document.getElementById("panel-color-btn"),u=document.getElementById("panel-color-input"),p=document.getElementById("panel-reset-btn"),f={custViewMode:"ball",custExplodeFactor:0,custExplodePanels:[],ballCamDistance:1.7,ballCamDirection:new L(0,0,1),selectedPanelIndex:null,hoveredPanelIndex:null,cameraAnimTarget:null,cameraAnimTargetSpherical:null},_=document.querySelector("canvas.customizer-preview"),g=document.querySelector(".customizer-viewport"),m=new Ch;m.background=new kt("#0a0a0a");const x=new Nh(16777215,1.5);m.add(x);const y=new Dr(16777215,2.5);y.position.set(3,4,5),m.add(y);const v=new Dr(16777215,.8);v.position.set(-3,2,-3),m.add(v);let E=null;const T=new Vf,b=new At;function P(){const C=po(t,n),U=C.group;return f.custExplodePanels=C.panels,dr(f.custExplodePanels,f.custExplodeFactor),f.custExplodeFactor===0&&fo(U,t,n),U}E=P(),m.add(E);const M=window.innerWidth<=768?512:1024,S=new Map;let w=new Map;S.set(t.design,w);function N(C){S.has(C)||S.set(C,new Map),w=S.get(C)}const O=new Map;let k=!1,V=-1;const B=new Map;function G(C,U,I){const F=C.geometry.attributes.position,Y=new Float32Array(F.count*2),ot=Math.abs(U.y)<.9?new L(0,1,0):new L(1,0,0),ut=new L().crossVectors(ot,U).normalize(),St=new L().crossVectors(U,ut).normalize();let Zt=1/0,Bt=-1/0,Ot=1/0,Jt=-1/0;for(let Dt=0;Dt<F.count;Dt++){const xt=new L(F.getX(Dt),F.getY(Dt),F.getZ(Dt)).normalize(),oe=xt.dot(ut),ve=xt.dot(St);Y[Dt*2]=oe,Y[Dt*2+1]=ve,oe<Zt&&(Zt=oe),oe>Bt&&(Bt=oe),ve<Ot&&(Ot=ve),ve>Jt&&(Jt=ve)}const Ye=Bt-Zt||1,rn=Jt-Ot||1;for(let Dt=0;Dt<F.count;Dt++)Y[Dt*2]=(Y[Dt*2]-Zt)/Ye,Y[Dt*2+1]=(Y[Dt*2+1]-Ot)/rn;C.geometry.setAttribute("uv",new le(Y,2)),O.set(I,{ux:ut,uy:St,minU:Zt,maxU:Bt,minV:Ot,maxV:Jt})}function W(C,U){const I=O.get(U);if(!I)return null;const F=C.clone().normalize(),Y=F.dot(I.ux),ot=F.dot(I.uy),ut=I.maxU-I.minU||1,St=I.maxV-I.minV||1;return{x:(Y-I.minU)/ut,y:(ot-I.minV)/St}}function st(C){const U=di(t.design,C);return U||(t.design==="classic"&&C<12?t.secondaryColor:t.primaryColor)}function it(C){const U=w.get(C);if(U)return U;const I=st(C),F=document.createElement("canvas");F.width=M,F.height=M;const Y=F.getContext("2d");Y.fillStyle=I,Y.fillRect(0,0,M,M);const ot=new Rf(F);ot.colorSpace=Pn,ot.minFilter=$i,ot.magFilter=ii,ot.anisotropy=8;const ut={canvas:F,ctx:Y,texture:ot,baseColor:I};return w.set(C,ut),ut}function pt(C){if(C==="all")w.clear();else if(Array.isArray(C))for(const U of C)w.delete(U);else C!=null&&w.delete(C)}function yt(){if(E)if(f.custViewMode==="flat")for(const C of E.children){if(!C.isMesh||C.userData.panelIndex==null)continue;const U=C.userData.panelIndex,I=C.geometry.attributes.uv;if(!I)continue;let F=1/0,Y=-1/0,ot=1/0,ut=-1/0;for(let Ot=0;Ot<I.count;Ot++){const Jt=I.getX(Ot),Ye=I.getY(Ot);Jt<F&&(F=Jt),Jt>Y&&(Y=Jt),Ye<ot&&(ot=Ye),Ye>ut&&(ut=Ye)}const St=Y-F||1,Zt=ut-ot||1;for(let Ot=0;Ot<I.count;Ot++)I.setXY(Ot,(I.getX(Ot)-F)/St,(I.getY(Ot)-ot)/Zt);I.needsUpdate=!0;const Bt=it(U);C.material.dispose(),C.material=new Nn({map:Bt.texture,side:ke}),C.userData._brushTex=Bt.texture,C.userData._brushCtx=Bt.ctx}else{O.clear();for(let C=0;C<f.custExplodePanels.length;C++){const U=f.custExplodePanels[C],I=U.mesh;if(!I||!I.isGroup)continue;const F=I.children[0];if(!F||!F.isMesh)continue;const Y=I.userData.panelIndex;if(Y==null)continue;G(F,U.centroidDir,Y);const ot=it(Y);F.material.dispose(),F.material=new yn({map:ot.texture,emissiveMap:ot.texture,color:16777215,emissive:16777215,emissiveIntensity:.15,side:ke}),F.userData._brushTex=ot.texture,F.userData._brushCtx=ot.ctx}for(const C of E.children){if(!C.isMesh||C.userData.stitchPanelIndex==null)continue;const U=C.userData.stitchPanelIndex,I=f.custExplodePanels[U];if(!(I!=null&&I.centroidDir))continue;const F=w.get(U);F&&(G(C,I.centroidDir,U),C.material.dispose(),C.material=new yn({map:F.texture,emissiveMap:F.texture,color:16777215,emissive:16777215,emissiveIntensity:.15,side:ke}))}}}function zt(C){var ot,ut;const U=_.getBoundingClientRect();if(b.x=(C.clientX-U.left)/U.width*2-1,b.y=-((C.clientY-U.top)/U.height)*2+1,T.setFromCamera(b,vt),f.custViewMode==="flat"){const St=[];if(E)for(const Bt of E.children)Bt.isMesh&&Bt.userData.panelIndex!=null&&St.push(Bt);const Zt=T.intersectObjects(St,!1);return Zt.length>0&&Zt[0].uv?{mesh:Zt[0].object,uv:Zt[0].uv,panelIndex:Zt[0].object.userData.panelIndex,point:Zt[0].point}:null}if(f.custExplodeFactor===0&&t.design==="classic"){const St=$();if(!St)return null;const Zt=E.worldToLocal(St.clone()).normalize(),Bt=at();if(Bt==null)return null;const Ot=W(Zt,Bt);if(!Ot)return null;const Jt=f.custExplodePanels[Bt];return{mesh:(ut=(ot=Jt==null?void 0:Jt.mesh)==null?void 0:ot.children)==null?void 0:ut[0],uv:Ot,panelIndex:Bt,point:St}}const I=A(),F=vt.position.clone().sub(I).normalize(),Y=T.intersectObjects(qt(),!1);for(const St of Y){if(St.point.clone().sub(I).normalize().dot(F)<=0)continue;const Bt=$t(St.object);if(Bt==null)continue;if(St.uv)return{mesh:St.object,uv:St.uv,panelIndex:Bt,point:St.point};const Ot=E.worldToLocal(St.point.clone()).normalize(),Jt=W(Ot,Bt);if(Jt)return{mesh:St.object,uv:Jt,panelIndex:Bt,point:St.point}}return null}function K(C,U,I,F){const Y=w.get(C);if(!Y)return;const{ctx:ot,texture:ut}=Y,St=U.x*M,Zt=(1-U.y)*M,Bt=I*2;ot.save(),ot.fillStyle=F,ot.beginPath(),ot.arc(St,Zt,Bt,0,Math.PI*2),ot.fill(),ot.restore(),ut.needsUpdate=!0}function et(C,U,I,F){B.has(C)||B.set(C,[]);const Y=B.get(C);if(Y.push(U),Y.length<2){K(C,U,I,F);return}const ot=Y.length,ut=Y[Math.max(0,ot-4)],St=Y[Math.max(0,ot-3)],Zt=Y[ot-2],Bt=Y[ot-1],Ot=(Bt.x-Zt.x)*M,Jt=(Bt.y-Zt.y)*M,Ye=Math.sqrt(Ot*Ot+Jt*Jt),rn=Math.max(1,Math.ceil(Ye/(I*.8)));for(let Dt=1;Dt<=rn;Dt++){const xt=Dt/rn,oe=xt*xt,ve=oe*xt,on={x:.5*(2*St.x+(-ut.x+Zt.x)*xt+(2*ut.x-5*St.x+4*Zt.x-Bt.x)*oe+(-ut.x+3*St.x-3*Zt.x+Bt.x)*ve),y:.5*(2*St.y+(-ut.y+Zt.y)*xt+(2*ut.y-5*St.y+4*Zt.y-Bt.y)*oe+(-ut.y+3*St.y-3*Zt.y+Bt.y)*ve)};K(C,on,I,F)}}const dt={star:(C,U,I,F)=>{C.beginPath();for(let ot=0;ot<10;ot++){const ut=ot*Math.PI/5-Math.PI/2,St=ot%2===0?F:F*.4;ot===0?C.moveTo(U+Math.cos(ut)*St,I+Math.sin(ut)*St):C.lineTo(U+Math.cos(ut)*St,I+Math.sin(ut)*St)}C.closePath()},circle:(C,U,I,F)=>{C.beginPath(),C.arc(U,I,F,0,Math.PI*2)},diamond:(C,U,I,F)=>{C.beginPath(),C.moveTo(U,I-F),C.lineTo(U+F*.7,I),C.lineTo(U,I+F),C.lineTo(U-F*.7,I),C.closePath()},hexagon:(C,U,I,F)=>{C.beginPath();for(let Y=0;Y<6;Y++){const ot=Y*Math.PI/3-Math.PI/6,ut=U+Math.cos(ot)*F,St=I+Math.sin(ot)*F;Y===0?C.moveTo(ut,St):C.lineTo(ut,St)}C.closePath()},pentagon:(C,U,I,F)=>{C.beginPath();for(let Y=0;Y<5;Y++){const ot=Y*2*Math.PI/5-Math.PI/2,ut=U+Math.cos(ot)*F,St=I+Math.sin(ot)*F;Y===0?C.moveTo(ut,St):C.lineTo(ut,St)}C.closePath()},triangle:(C,U,I,F)=>{C.beginPath();for(let Y=0;Y<3;Y++){const ot=Y*2*Math.PI/3-Math.PI/2;Y===0?C.moveTo(U+Math.cos(ot)*F,I+Math.sin(ot)*F):C.lineTo(U+Math.cos(ot)*F,I+Math.sin(ot)*F)}C.closePath()},mapleLeaf:(C,U,I,F)=>{const Y=F/18;C.save(),C.translate(U,I),C.scale(Y,Y),C.beginPath(),C.moveTo(0,-18),C.lineTo(1.5,-12),C.lineTo(7,-13),C.lineTo(5,-7),C.lineTo(13,-4),C.lineTo(8,-1),C.lineTo(10,6),C.lineTo(5,4),C.lineTo(2.5,11),C.lineTo(0,7),C.lineTo(-2.5,11),C.lineTo(-5,4),C.lineTo(-10,6),C.lineTo(-8,-1),C.lineTo(-13,-4),C.lineTo(-5,-7),C.lineTo(-7,-13),C.lineTo(-1.5,-12),C.closePath(),C.restore()},brazuca:(C,U,I,F)=>{C.beginPath(),C.moveTo(U-F*.8,I-F*.5),C.bezierCurveTo(U-F*.3,I-F*.9,U+F*.3,I+F*.1,U+F*.8,I-F*.5),C.bezierCurveTo(U+F*.9,I+F*.1,U+F*.3,I+F*.9,U+F*.8,I+F*.5),C.bezierCurveTo(U+F*.3,I+F*.9,U-F*.3,I-F*.1,U-F*.8,I+F*.5),C.bezierCurveTo(U-F*.9,I-F*.1,U-F*.3,I-F*.9,U-F*.8,I-F*.5),C.closePath()},jabulani:(C,U,I,F)=>{C.beginPath(),C.moveTo(U,I-F),C.bezierCurveTo(U+F*.6,I-F*.8,U+F,I-F*.2,U+F*.7,I+F*.5),C.bezierCurveTo(U+F*.4,I+F,U-F*.4,I+F,U-F*.7,I+F*.5),C.bezierCurveTo(U-F,I-F*.2,U-F*.6,I-F*.8,U,I-F),C.closePath()}};function ct(C,U,I,F,Y){const ot=w.get(C);if(!ot)return;const{ctx:ut,texture:St}=ot,Zt=U.x*M,Bt=(1-U.y)*M,Ot=I*2,Jt=dt[Y];Jt&&(ut.save(),ut.fillStyle=F,Jt(ut,Zt,Bt,Ot),ut.fill(),ut.restore(),St.needsUpdate=!0)}function Ct(C){if(!(!f.custExplodePanels||f.custExplodePanels.length===0))for(const U of C.children){if(U.isGroup&&U.userData.panelIndex!=null){const I=U.userData.panelIndex,F=U.children[0];if(!F||!F.isMesh)continue;const Y=w.get(I);if(!Y)continue;const ot=f.custExplodePanels[I];if(!(ot!=null&&ot.centroidDir))continue;G(F,ot.centroidDir,I),F.material.dispose(),F.material=new yn({map:Y.texture,emissiveMap:Y.texture,color:16777215,emissive:16777215,emissiveIntensity:.15,side:ke})}if(U.isMesh&&U.userData.stitchPanelIndex!=null){const I=U.userData.stitchPanelIndex,F=f.custExplodePanels[I];if(!(F!=null&&F.centroidDir))continue;const Y=w.get(I);if(!Y)continue;G(U,F.centroidDir,I),U.material.dispose(),U.material=new yn({map:Y.texture,emissiveMap:Y.texture,color:16777215,emissive:16777215,emissiveIntensity:.15,side:ke})}}}function Yt(){const C=i().position.clone(),U=i().rotation.clone();s.remove(i());const I=o();Ct(I),I.position.copy(C),I.rotation.copy(U),s.add(I),r(I),a&&a(),_t()}const vt=new un(40,g.clientWidth/(g.clientHeight||1),.1,50);vt.position.set(0,0,f.ballCamDistance),vt.lookAt(0,0,0);const te=new il({canvas:_,antialias:!0});te.setSize(g.clientWidth,g.clientHeight),te.setPixelRatio(Math.min(window.devicePixelRatio,2));const wt=new $f(vt,_);wt.enableDamping=!0,wt.enablePan=!1,wt.autoRotate=!0,wt.autoRotateSpeed=5,wt.minDistance=.6,wt.maxDistance=3;function Vt(){const C=vt.position.length();C<1e-4||(f.ballCamDistance=C,f.ballCamDirection.copy(vt.position).normalize())}function z(){const U=4.4+f.custExplodeFactor*4.2,I=Math.min(U,Math.max(.9,f.ballCamDistance));f.ballCamDistance=I,f.ballCamDirection.lengthSq()<1e-6&&f.ballCamDirection.set(0,0,1),vt.position.copy(f.ballCamDirection).multiplyScalar(I),vt.lookAt(0,0,0)}{let C=!1,U=0;_.addEventListener("mousedown",I=>{if(f.custViewMode!=="flat")return;const F=tt==null?void 0:tt.getActiveTool();F==="brush"||F==="shape"||(C=!0,U=I.clientX,I.clientY,I.stopPropagation())}),window.addEventListener("mousemove",I=>{if(!C||k||f.custViewMode!=="flat"||!E)return;const F=I.clientX-U;U=I.clientX,I.clientY,E.rotation.z+=F*.01}),window.addEventListener("mouseup",()=>{C=!1}),_.addEventListener("touchstart",I=>{if(f.custViewMode!=="flat"||I.touches.length!==1)return;const F=tt==null?void 0:tt.getActiveTool();F==="brush"||F==="shape"||(C=!0,U=I.touches[0].clientX,I.touches[0].clientY)},{passive:!0}),window.addEventListener("touchmove",I=>{if(!C||f.custViewMode!=="flat"||!E||I.touches.length!==1)return;const F=I.touches[0].clientX-U;E.rotation.z+=F*.01,U=I.touches[0].clientX,I.touches[0].clientY},{passive:!0}),window.addEventListener("touchend",()=>{C=!1})}new ResizeObserver(()=>{const C=g.clientWidth,U=g.clientHeight;C===0||U===0||(vt.aspect=C/U,vt.updateProjectionMatrix(),te.setSize(C,U),te.setPixelRatio(Math.min(window.devicePixelRatio,2)))}).observe(g);function $t(C){let U=C;for(;U;){if(U.userData.panelIndex!=null)return U.userData.panelIndex;U=U.parent}return null}function qt(){const C=[];if(!E)return C;for(const U of E.children)if(U.userData.panelIndex!=null){if(U.isMesh)C.push(U);else if(U.isGroup)for(const I of U.children)I.isMesh&&C.push(I)}return C}const Pt=.45,re=new kt("#4488cc");function gt(C,U){if(!(C==null||C===f.selectedPanelIndex)){if(f.custViewMode==="flat"){for(const I of E.children)if(I.userData.panelIndex===C&&I.isMesh)if(U){I._savedHoverColor==null&&(I._savedHoverColor=I.material.color.getHex());const F=new kt(I._savedHoverColor);F.lerp(re,.3),I.material.color.set(F)}else I._savedHoverColor!=null&&(I.material.color.setHex(I._savedHoverColor),delete I._savedHoverColor)}else for(const I of E.children)if(I.userData.panelIndex===C&&I.isGroup){const F=I.children[0];if(!F||!F.material)continue;if(U){F._savedHoverColor==null&&(F._savedHoverColor=F.material.color.getHex());const Y=new kt(F._savedHoverColor);Y.lerp(re,.3),F.material.color.set(Y)}else F._savedHoverColor!=null&&(F.material.color.setHex(F._savedHoverColor),delete F._savedHoverColor)}}}function D(C,U){if(C!=null){if(f.custViewMode==="flat")for(const I of E.children){if(I.userData.panelIndex===C&&I.isMesh)if(U){I._selectSavedColor=I.material.color.getHex();const F=new kt(I._selectSavedColor);F.lerp(new kt("#ffffff"),.25),I.material.color.set(F)}else I._selectSavedColor!=null&&(I.material.color.setHex(I._selectSavedColor),delete I._selectSavedColor);I.userData.panelIndex===C&&I.isLine&&(U?(I._ownMaterial||(I._ownMaterial=I.material.clone(),I.material=I._ownMaterial),I._selectSavedColor=I.material.color.getHex(),I.material.color.set("#ffffff")):I._selectSavedColor!=null&&(I.material.color.setHex(I._selectSavedColor),delete I._selectSavedColor))}else for(const I of E.children)if(I.userData.panelIndex===C&&I.isGroup){const F=I.children[0],Y=I.children[1];F&&F.material&&(U?(F._selectSavedEmissiveIntensity=F.material.emissiveIntensity,F.material.emissiveIntensity=Pt):F._selectSavedEmissiveIntensity!=null&&(F.material.emissiveIntensity=F._selectSavedEmissiveIntensity,delete F._selectSavedEmissiveIntensity)),Y&&Y.material&&(U?(Y._ownMaterial||(Y._ownMaterial=Y.material.clone(),Y.material=Y._ownMaterial),Y._selectSavedColor=Y.material.color.getHex(),Y.material.color.set("#ffffff")):Y._selectSavedColor!=null&&(Y.material.color.setHex(Y._selectSavedColor),delete Y._selectSavedColor))}}}function A(){const C=new L;return E.updateMatrixWorld(!0),E.getWorldPosition(C),C}function $(){const C=new L;return T.ray.intersectSphere(new Ws(A(),n),C)?C:null}function rt(C,U){const I=U==null?void 0:U.boundaryDirs;if(!I||I.length<3)return-1/0;let F=1/0;for(let Y=0;Y<I.length;Y++){const ot=I[Y],ut=I[(Y+1)%I.length],St=new L().crossVectors(ot,ut),Zt=St.dot(U.centroidDir);if(Math.abs(Zt)<1e-8)continue;const Bt=St.dot(C)*Math.sign(Zt);if(Bt<F&&(F=Bt),Bt<-1e-4)return Bt}return F}function at(){const C=$();if(!C)return null;const U=E.worldToLocal(C.clone()).normalize();let I=null,F=-1/0;for(let Y=0;Y<f.custExplodePanels.length;Y++){const ot=rt(U,f.custExplodePanels[Y]);ot>F&&ot>=-1e-4&&(I=Y,F=ot)}return I}function Q(C){return C.centroidDir.clone().normalize().multiplyScalar(f.ballCamDistance)}function Rt(C){if(C!=null){if(f.custViewMode==="flat")for(const U of E.children)U.userData.panelIndex===C&&U.isMesh&&U._savedHoverColor!=null&&(U.material.color.setHex(U._savedHoverColor),delete U._savedHoverColor);else for(const U of E.children)if(U.userData.panelIndex===C&&U.isGroup){const I=U.children[0];(I==null?void 0:I._savedHoverColor)!=null&&(I.material.color.setHex(I._savedHoverColor),delete I._savedHoverColor)}}}function ft(C){const U=f.selectedPanelIndex;if(f.hoveredPanelIndex!=null&&(Rt(f.hoveredPanelIndex),f.hoveredPanelIndex=null),f.selectedPanelIndex!=null&&D(f.selectedPanelIndex,!1),f.selectedPanelIndex=C,C!=null){D(C,!0),d.style.display="";const I=di(t.design,C);let F;if(I?F=I:F=t.design==="classic"&&C<12?t.secondaryColor:t.primaryColor,u.value=F,d.style.backgroundColor=F,f.custViewMode!=="flat"){wt.autoRotate=!1;const Y=f.custExplodePanels[C];Y&&(f.cameraAnimTarget=U!=null&&U!==C?Q(Y):Y.centroidDir.clone().multiplyScalar(f.ballCamDistance),f.cameraAnimTargetSpherical=new ka().setFromVector3(f.cameraAnimTarget.clone()))}}else d.style.display="none",f.custViewMode!=="flat"&&(wt.autoRotate=!0,f.cameraAnimTarget=null,f.cameraAnimTargetSpherical=null)}function _t(){p.style.display=QM(t.design)?"":"none"}let Gt=null,lt=null;function Mt(C){const U=_.getBoundingClientRect();b.x=(C.clientX-U.left)/U.width*2-1,b.y=-((C.clientY-U.top)/U.height)*2+1,T.setFromCamera(b,vt);const I=A(),Y=I.clone().sub(T.ray.origin).dot(T.ray.direction),ut=T.ray.origin.clone().add(T.ray.direction.clone().multiplyScalar(Y)).distanceTo(I),St=f.custViewMode==="flat"?1/0:n*1.15;if(ut>St)return null;if(f.custViewMode!=="flat"&&f.custExplodeFactor===0&&t.design==="classic"){const Ot=at();return Ot??null}const Zt=vt.position.clone().sub(I).normalize(),Bt=T.intersectObjects(qt(),!1);for(const Ot of Bt){if(f.custViewMode!=="flat"&&Ot.point.clone().sub(I).normalize().dot(Zt)<=0)continue;const Jt=$t(Ot.object);if(Jt!=null)return Jt}return null}_.addEventListener("pointerdown",C=>{const U=tt==null?void 0:tt.getActiveTool();(U==="brush"||U==="shape")&&f.custViewMode==="flat"&&(wt.enablePan=!1,wt.enableRotate=!1)},!0),_.addEventListener("pointerdown",C=>{const U=tt==null?void 0:tt.getActiveTool(),I=tt==null?void 0:tt.isMirrorMode();if(U==="brush"){k=!0,B.clear(),wt.enabled=!1,_.style.cursor="crosshair";const F=zt(C);if(V=F?F.panelIndex:-1,F&&(et(F.panelIndex,F.uv,tt.getBrushSize(),tt.getActiveColor()),I))for(const Y of tt.getSymmetryPeers(F.panelIndex))et(Y,F.uv,tt.getBrushSize(),tt.getActiveColor());C.stopImmediatePropagation();return}if(U==="shape"){const F=zt(C);if(F){const Y=tt.getShapeSize(),ot=tt.getActiveColor(),ut=tt.getActiveShape();if(ct(F.panelIndex,F.uv,Y,ot,ut),I)for(const St of tt.getSymmetryPeers(F.panelIndex))ct(St,F.uv,Y,ot,ut);Yt()}C.stopImmediatePropagation();return}Gt={x:C.clientX,y:C.clientY},lt=Mt(C)}),_.addEventListener("pointerup",C=>{if(k){k=!1,V=-1,B.clear(),wt.enabled=!0,f.custViewMode==="flat"&&(wt.enablePan=!0),_.style.cursor=(tt==null?void 0:tt.getActiveTool())==="brush"?"crosshair":"grab",Yt();return}if(!Gt)return;const U=C.clientX-Gt.x,I=C.clientY-Gt.y,F=Math.sqrt(U*U+I*I);if(Gt=null,F>5){lt=null;return}if(tt&&lt!=null&&tt.handlePanelClick(lt)){lt=null;return}if(lt===f.selectedPanelIndex&&lt!=null){lt=null;return}ft(lt),lt=null});const Lt=window.innerWidth<=768;let Ft=0;const bt=Lt?16:0;_.addEventListener("pointermove",C=>{if(k){if(C.preventDefault(),wt.enabled=!1,bt>0){const Y=performance.now();if(Y-Ft<bt)return;Ft=Y}const F=zt(C);if(F&&F.panelIndex===V&&(et(F.panelIndex,F.uv,tt.getBrushSize(),tt.getActiveColor()),tt!=null&&tt.isMirrorMode()))for(const Y of tt.getSymmetryPeers(F.panelIndex))et(Y,F.uv,tt.getBrushSize(),tt.getActiveColor());return}const U=tt==null?void 0:tt.getActiveTool();if(U==="brush"||U==="shape"){f.custViewMode==="flat"&&(wt.enablePan=!1),_.style.cursor="crosshair";return}else f.custViewMode==="flat"&&(wt.enablePan=!0);const I=Mt(C);I!==f.hoveredPanelIndex&&(gt(f.hoveredPanelIndex,!1),f.hoveredPanelIndex=I,gt(f.hoveredPanelIndex,!0),_.style.cursor=I!=null?"pointer":"grab")}),_.addEventListener("pointerleave",()=>{f.hoveredPanelIndex!=null&&(gt(f.hoveredPanelIndex,!1),f.hoveredPanelIndex=null),_.style.cursor="grab"}),d.addEventListener("pointerdown",C=>{C.stopPropagation()}),d.addEventListener("pointerup",C=>{C.stopPropagation()}),d.addEventListener("click",C=>{C.stopPropagation(),u.click()}),u.addEventListener("input",C=>{if(f.selectedPanelIndex==null)return;const U=C.target.value;to(t.design,f.selectedPanelIndex,U),d.style.backgroundColor=U,_t();const I=w.get(f.selectedPanelIndex);if(I&&(I.ctx.fillStyle=U,I.ctx.fillRect(0,0,M,M),I.baseColor=U,I.texture.needsUpdate=!0),f.custViewMode!=="flat")for(const F of E.children)F.userData.stitchPanelIndex===f.selectedPanelIndex&&F.isMesh&&F.material.color.set(U)}),u.addEventListener("change",C=>{if(f.selectedPanelIndex==null)return;const U=C.target.value,I=w.get(f.selectedPanelIndex);I&&(I.ctx.fillStyle=U,I.ctx.fillRect(0,0,M,M),I.baseColor=U,I.texture.needsUpdate=!0);const F=i().position.clone(),Y=i().rotation.clone();s.remove(i());const ot=o();if(ot.position.copy(F),ot.rotation.copy(Y),s.add(ot),r(ot),a&&a(),f.custViewMode!=="flat"){m.remove(E);const ut=po(t,n);E=ut.group,f.custExplodePanels=ut.panels,dr(f.custExplodePanels,f.custExplodeFactor),f.custExplodeFactor===0&&fo(E,t,n),m.add(E),yt(),f.selectedPanelIndex!=null&&D(f.selectedPanelIndex,!0)}}),p.addEventListener("click",C=>{C.stopPropagation(),Qc(t.design),w.clear(),ft(null),_t(),mt()});function Wt(){if(f.cameraAnimTarget&&f.cameraAnimTargetSpherical&&f.custViewMode!=="flat"){const C=new ka().setFromVector3(vt.position),U=f.cameraAnimTargetSpherical,I=Math.atan2(Math.sin(U.theta-C.theta),Math.cos(U.theta-C.theta));C.radius+=(U.radius-C.radius)*.08,C.phi+=(U.phi-C.phi)*.08,C.theta+=I*.08,C.makeSafe(),vt.position.setFromSpherical(C),vt.lookAt(0,0,0),vt.position.distanceTo(f.cameraAnimTarget)<.01&&(vt.position.copy(f.cameraAnimTarget),f.cameraAnimTarget=null,f.cameraAnimTargetSpherical=null)}}function Nt(){}function ee(){if(!E)return;const C=new kt(t.primaryColor),U=new kt(t.secondaryColor);if(f.custViewMode==="flat")for(const I of E.children){if(I.userData.panelIndex==null||!I.isMesh)continue;const F=I.userData.panelIndex,Y=t.design==="classic"&&F<12;di(t.design,F)||I.material.color.copy(Y?U:C)}else for(const I of E.children)if(I.userData.panelIndex!=null){if(I.isGroup){const F=I.children[0];if(!(F!=null&&F.material))continue;const Y=I.userData.panelIndex,ot=t.design==="classic"&&Y<12;if(!di(t.design,Y)){const St=ot?U:C;F.material.color.copy(St),F.material.emissive.copy(St)}}I.isLine&&!I.userData.panelIndex&&I.material.color.copy(U)}}function H(C){if(!E||f.custViewMode!=="flat")return;if(C===0){for(const Y of E.children)Y.position.set(0,0,0);return}const U=new Map;for(const Y of E.children){const ot=Y.userData.panelIndex;if(ot!=null&&!U.has(ot)){const ut=Y.geometry;if(!ut)continue;ut.computeBoundingBox();const St=(ut.boundingBox.min.x+ut.boundingBox.max.x)/2,Zt=(ut.boundingBox.min.y+ut.boundingBox.max.y)/2;U.set(ot,{x:St,y:Zt})}}const I=[...U.values()].reduce((Y,ot)=>Y+ot.x,0)/(U.size||1),F=[...U.values()].reduce((Y,ot)=>Y+ot.y,0)/(U.size||1);for(const Y of E.children){const ot=Y.userData.panelIndex;if(ot==null)continue;const ut=U.get(ot);if(!ut)continue;const St=ut.x-I,Zt=ut.y-F;Y.position.set(St*C*1.2,Zt*C*1.2,0)}}function mt(){(f.custViewMode==="ball"||f.custViewMode!=="flat")&&Vt();const C=i().position.clone(),U=i().rotation.clone();s.remove(i());const I=o();if(Ct(I),I.position.copy(C),I.rotation.copy(U),s.add(I),r(I),a&&a(),m.remove(E),f.custViewMode==="flat")E=uS(t),H(f.custExplodeFactor),wt.autoRotate=!1,wt.enableRotate=!1,wt.enablePan=!0,wt.minPolarAngle=Math.PI/2,wt.maxPolarAngle=Math.PI/2,wt.minDistance=1,wt.maxDistance=60,wt.target.set(0,0,0),vt.position.set(0,0,t.design==="classic"?18:9),vt.lookAt(0,0,0),wt.update();else{const F=po(t,n);E=F.group,E.scale.set(1,1,1),f.custExplodePanels=F.panels,dr(f.custExplodePanels,f.custExplodeFactor),f.custExplodeFactor===0&&fo(E,t,n),f.selectedPanelIndex==null&&(wt.autoRotate=!0),wt.enableRotate=!0,wt.enablePan=!1,wt.minPolarAngle=0,wt.maxPolarAngle=Math.PI,wt.minDistance=.9,wt.maxDistance=4.4+f.custExplodeFactor*4.2,z()}m.add(E),yt(),f.selectedPanelIndex!=null&&D(f.selectedPanelIndex,!0),_t()}function Z(){const C=document.getElementById("explode-slider"),U=document.getElementById("explode-slider-detail"),I=document.getElementById("explode-val"),F=document.getElementById("explode-val-detail");function Y(ut){const St=Math.round(ut*100)+"%";I&&(I.textContent=St),F&&(F.textContent=St),C&&C.value!==String(ut)&&(C.value=String(ut)),U&&U.value!==String(ut)&&(U.value=String(ut))}function ot(ut){const St=f.custExplodeFactor;if(f.custExplodeFactor=parseFloat(ut),Y(f.custExplodeFactor),f.custViewMode==="flat"){H(f.custExplodeFactor);return}if(St===0!=(f.custExplodeFactor===0)){mt();return}f.custExplodePanels.length>0&&dr(f.custExplodePanels,f.custExplodeFactor),wt.maxDistance=4.4+f.custExplodeFactor*4.2}C==null||C.addEventListener("input",ut=>ot(ut.target.value)),U==null||U.addEventListener("input",ut=>ot(ut.target.value)),Y(f.custExplodeFactor)}function nt(){var I,F,Y,ot,ut,St,Zt,Bt;document.querySelectorAll(".design-btn[data-design]").forEach(Ot=>{Ot.addEventListener("click",()=>{t.design=Ot.dataset.design,N(t.design),document.querySelectorAll(".design-btn[data-design]").forEach(Jt=>{Jt.classList.toggle("active",Jt.dataset.design===t.design)}),document.querySelectorAll(".studio-preset").forEach(Jt=>{Jt.classList.toggle("active",Jt.dataset.design===t.design)}),ft(null),mt(),tt&&tt.renderPatterns()})}),document.querySelectorAll(".view-btn").forEach(Ot=>{Ot.addEventListener("click",()=>{f.custViewMode=Ot.dataset.view,document.querySelectorAll(".view-btn").forEach(Jt=>{Jt.classList.toggle("active",Jt.dataset.view===f.custViewMode)}),ft(null),mt()})});function C(Ot,Jt){Ot.id.includes("secondary")?t.secondaryColor=Ot.value:t.primaryColor=Ot.value;const rn=document.getElementById(Jt);rn&&(rn.value=Ot.value),ee()}(I=document.getElementById("primary-color"))==null||I.addEventListener("input",Ot=>C(Ot.target,"primary-color-detail")),(F=document.getElementById("secondary-color"))==null||F.addEventListener("input",Ot=>C(Ot.target,"secondary-color-detail")),(Y=document.getElementById("primary-color-detail"))==null||Y.addEventListener("input",Ot=>C(Ot.target,"primary-color")),(ot=document.getElementById("secondary-color-detail"))==null||ot.addEventListener("input",Ot=>C(Ot.target,"secondary-color"));const U=()=>{pt("all"),mt()};(ut=document.getElementById("primary-color"))==null||ut.addEventListener("change",U),(St=document.getElementById("secondary-color"))==null||St.addEventListener("change",U),(Zt=document.getElementById("primary-color-detail"))==null||Zt.addEventListener("change",U),(Bt=document.getElementById("secondary-color-detail"))==null||Bt.addEventListener("change",U)}if(c){const C=()=>{const U=c.classList.contains("fullscreen");c.classList.toggle("zoomed-out",U),h&&(h.textContent=U?"Detailed View":"Focused View")};new MutationObserver(C).observe(c,{attributes:!0,attributeFilter:["class"]}),C()}wt.addEventListener("change",()=>{f.custViewMode==="ball"&&Vt()});const tt=u1({ballConfig:t,updateBall:mt,selectPanel:ft,invalidateCanvases:pt});return yt(),{studioUI:tt,state:f,custScene:m,custCamera:vt,custRenderer:te,custControls:wt,updateBall:mt,wireExplodeSlider:Z,wireCustomizerUi:nt,animateCamera:Wt,debugAfterControlsUpdate:Nt,applyCanvasTextures:Ct}}function f1(){if(window.matchMedia("(max-width: 768px)").matches)return;let s=null;document.querySelectorAll(".resize-handle").forEach(t=>{t.addEventListener("pointerdown",e=>{e.preventDefault();const n=t.classList.contains("resize-h"),i=t.previousElementSibling,r=t.nextElementSibling;if(!i||!r)return;const o=t.parentElement;for(const h of o.children){if(h.classList.contains("resize-handle"))continue;const d=n?h.offsetHeight:h.offsetWidth;h.style.flex=`${d} 0 0px`}const a=n?e.clientY:e.clientX,l=n?i.offsetHeight:i.offsetWidth,c=n?r.offsetHeight:r.offsetWidth;t.classList.add("active"),document.body.classList.add("resizing"),document.body.style.cursor=n?"row-resize":"col-resize",s={handle:t,isH:n,startPos:a,prev:i,next:r,prevSize:l,nextSize:c}})}),window.addEventListener("pointermove",t=>{if(!s)return;const{isH:e,startPos:n,prev:i,next:r,prevSize:o,nextSize:a}=s,l=(e?t.clientY:t.clientX)-n,c=o+a,h=80,d=Math.max(h,Math.min(c-h,o+l)),u=c-d;i.style.flex=`${d} 0 0px`,r.style.flex=`${u} 0 0px`}),window.addEventListener("pointerup",()=>{s&&(s.handle.classList.remove("active"),document.body.classList.remove("resizing"),document.body.style.cursor="",s=null)})}function p1(){document.querySelectorAll(".panel-fs-btn").forEach(s=>{s.addEventListener("click",t=>{t.stopPropagation(),s.closest(".bento-panel").classList.toggle("fullscreen")})}),window.addEventListener("keydown",s=>{s.key==="Escape"&&document.querySelectorAll(".bento-panel.fullscreen").forEach(t=>{t.classList.remove("fullscreen")})})}const xn=ES(),Ys=document.querySelector("canvas.webgl"),Io=document.getElementById("panel-shooter"),am={panel:document.getElementById("panel-birdseye"),canvas:document.querySelector("canvas.birdseye-canvas")},m1={panel:document.getElementById("panel-flight-dynamics"),canvas:document.querySelector("canvas.flight-dynamics-canvas")},Tn=new Ch;Tn.background=new kt("#000000");Tn.fog=new Ah("#000000",.015);const $a=dS({mainCanvas:Ys,canvas:am.canvas,debugParams:xn});function _1(){$a.apply()}const g1=new Nh(16777215,1.5);Tn.add(g1);const lm=new Dr(16777215,2.5);lm.position.set(5,10,5);Tn.add(lm);const cm=new Dr(16777215,1);cm.position.set(-5,5,-5);Tn.add(cm);const{gridHelper:La,fieldLines:Ia,backWall:v1,leftWall:x1,rightWall:y1}=OS(Tn),{goalGroup:M1,goalWidth:hm,goalHeight:um}=zS(Tn),Br=.22,dm=-11,Ua={x:0,y:Br,z:dm};function fm(){const s=po(Lr,Br);return dr(s.panels,0),fo(s.group,Lr,Br),s.group}let ll=fm();ll.position.set(Ua.x,Ua.y,Ua.z);Tn.add(ll);const cl=()=>ll,S1=s=>{ll=s},Je={width:Io.clientWidth,height:Io.clientHeight},Oi=new un(50,Je.width/Je.height,.1,100);Oi.position.set(0,1.8,dm-6);Oi.lookAt(0,1,0);Tn.add(Oi);const cs=new $f(Oi,Ys);cs.enableDamping=!0;cs.enabled=!1;const Uo=new il({canvas:Ys,antialias:!0});Uo.setSize(Je.width,Je.height);Uo.setPixelRatio(Math.min(window.devicePixelRatio,2));const E1=new ResizeObserver(()=>{Je.width=Io.clientWidth,Je.height=Io.clientHeight,!(Je.width===0||Je.height===0)&&(Oi.aspect=Je.width/Je.height,Oi.updateProjectionMatrix(),Uo.setSize(Je.width,Je.height),Uo.setPixelRatio(Math.min(window.devicePixelRatio,2)))});E1.observe(Io);const is={isKicking:!1,activeCurveForce:0,activeLateralAccel:0,activeVelocityVec:new L(0,0,0)},b1=()=>{},{updateFluidFlowOverlay:w1}=SS({scene:Tn,visualFilters:$a,debugParams:xn,getBallGroup:cl,getFlowState:()=>({activeVelocityVec:is.activeVelocityVec,activeCurveForce:is.activeCurveForce,activeLateralAccel:is.activeLateralAccel}),ballRadius:Br}),{flightAnalyticsState:T1,clearTrail:A1,pushTrailPoint:C1,fadeTrail:R1,renderBirdseye:pm,recordPhysicsSample:P1}=VS({scene:Tn,gridHelper:La,fieldLines:Ia,backWall:v1,leftWall:x1,rightWall:y1,birdseye:am,flightDynamics:m1,getBallGroup:cl}),{kick:D1,cancelKick:L1}=c1({BALL_DESIGNS:JM,ballConfig:Lr,debugParams:xn,ballStartPosition:Ua,ballRadius:Br,goalWidth:hm,goalHeight:um,sizes:Je,getBallGroup:cl,getGoalGroup:()=>M1,flightAnalyticsState:T1,recordPhysicsSample:P1,updateForceVectors:b1,clearTrail:A1,renderBirdseye:pm,kickPhysics:is}),{trailMesh:mm,updateTrailRibbon:I1,maxTrailPoints:U1}=HS({scene:Tn,camera:Oi,canvas:Ys}),li=NS(document.getElementById("debug-overlay"),xn,{onOrbitControlsChange:s=>{cs.enabled=s}});_1();const zi=document.getElementById("panel-spin-preview"),Ts=document.querySelector("canvas.spin-preview-canvas"),Bi=new Ch;Bi.background=new kt("#0a0a0a");Bi.add(new Nh(16777215,1.5));const _m=new Dr(16777215,2.5);_m.position.set(3,4,5);Bi.add(_m);const gm=new Dr(16777215,.8);gm.position.set(-3,2,-3);Bi.add(gm);const vm=.4;let Yi=xm(vm);Bi.add(Yi);function xm(s){const t=po(Lr,s);return dr(t.panels,0),fo(t.group,Lr,s),t.group}const Ds=new In,F1=new rs(.006,.006,.5,6),N1=new Uh(.02,.06,6),ym=new Nn({color:16739179}),Mm=new Qt(F1,ym);Mm.position.y=.25;const Sm=new Qt(N1,ym.clone());Sm.position.y=.53;Ds.add(Mm,Sm);Ds.visible=!1;Bi.add(Ds);function O1(){const s=Yi.rotation.clone();Bi.remove(Yi),Yi=xm(vm),Yi.rotation.copy(s),Bi.add(Yi),Hs&&Hs.applyCanvasTextures(Yi)}const Sr=new un(40,zi.clientWidth/(zi.clientHeight||1),.1,50);Sr.position.set(0,0,1.5);Sr.lookAt(0,0,0);const Fo=new il({canvas:Ts,antialias:!0});Fo.setSize(zi.clientWidth,zi.clientHeight);Fo.setPixelRatio(Math.min(window.devicePixelRatio,2));const z1=new ResizeObserver(()=>{const s=zi.clientWidth,t=zi.clientHeight;if(s===0||t===0)return;Sr.aspect=s/t;const e=1.5;Sr.position.z=s/t<1?e*(1/(s/t))*.9:e,Sr.updateProjectionMatrix(),Fo.setSize(s,t),Fo.setPixelRatio(Math.min(window.devicePixelRatio,2))});z1.observe(zi);{let t=function(e){const n=Ts.getBoundingClientRect(),i=(e.clientX-n.left)/n.width*2-1,r=-((e.clientY-n.top)/n.height*2-1),o=i*i+r*r;if(o<=1)return{x:i,y:r,z:Math.sqrt(1-o)};const a=Math.sqrt(o);return{x:i/a,y:r/a,z:0}};var q1=t;let s=null;Ts.addEventListener("pointerdown",e=>{s=t(e),s.cx=e.clientX,s.cy=e.clientY,Ts.setPointerCapture(e.pointerId)}),Ts.addEventListener("pointermove",e=>{if(!s)return;const n=t(e),i=s.y*n.z-s.z*n.y,r=s.z*n.x-s.x*n.z,o=s.x*n.y-s.y*n.x,a=Math.sqrt(i*i+r*r+o*o);if(a<.001)return;xn.spinAxisX=i/a,xn.spinAxisY=r/a,xn.spinAxisZ=o/a;const l=e.clientX-s.cx,c=e.clientY-s.cy,h=Math.sqrt(l*l+c*c),d=Math.max(zi.clientWidth,zi.clientHeight);xn.spinSpeed=Math.round(Math.min(50,Math.max(1,h/d*60))),li.speedCtrl&&li.speedCtrl.updateDisplay(),li.axisXCtrl&&li.axisXCtrl.updateDisplay(),li.axisYCtrl&&li.axisYCtrl.updateDisplay(),li.axisZCtrl&&li.axisZCtrl.updateDisplay(),li.drawCircle&&li.drawCircle()}),Ts.addEventListener("pointerup",()=>{s=null}),Ts.addEventListener("pointercancel",()=>{s=null})}const B1=.4;let Hs=d1({mainScene:Tn,ballConfig:Lr,ballRadius:Br,previewRadius:B1,getBallGroup:cl,setBallGroup:S1,buildMainBall:fm,onBallChanged:O1,cancelKick:L1});const{custScene:k1,custCamera:V1,custRenderer:H1,custControls:G1}=Hs;Hs.wireCustomizerUi();Hs.wireExplodeSlider();Hs.studioUI.init();let Za=!1;const Er={x:0,y:0,time:0},qn=[];function W1(s){is.isKicking||cs.enabled||(Er.x=s.clientX,Er.y=s.clientY,Er.time=performance.now(),Za=!0,qn.length=0,qn.push({x:s.clientX,y:s.clientY,time:performance.now()}),mm.visible=!0)}function X1(s){!Za||is.isKicking||cs.enabled||(qn.push({x:s.clientX,y:s.clientY,time:performance.now()}),qn.length>U1&&qn.shift(),I1(qn))}function Y1(s){if(!Za||is.isKicking||cs.enabled)return;Za=!1,mm.visible=!1;const t=s.clientX-Er.x,e=Er.y-s.clientY,n=(performance.now()-Er.time)/1e3,i=Math.max(30,Je.height*.04);if(e<i)return;let r=0;if(qn.length>=3){const f=qn[0],_=qn[qn.length-1],g=qn[Math.floor(qn.length/2)],m=(f.x+_.x)/2;r=(g.x-m)/Je.width*-16}const a=Math.sqrt(t*t+e*e)/Je.height,l=Math.min(a/n,4),c=Math.min(l*.36,1)*xn.powerMultiplier,h=-(t/Je.width)*hm*.85,d=Math.atan2(e,Math.abs(t)+1),p=Math.max(0,Math.min(1,d/(Math.PI/2)*1.3-.2))*um*.95;D1(c,h,r,p)}Ys.addEventListener("pointerdown",W1);Ys.addEventListener("pointermove",X1);Ys.addEventListener("pointerup",Y1);const Em=()=>{const s=performance.now()*.001;cs.enabled?cs.update():Oi.lookAt(0,1,0),w1(s);const t=$a.getFluidOverlay()||$a.getWindTunnelOverlay(),e=La.visible,n=Ia.visible;t&&(La.visible=!1,Ia.visible=!1),Uo.render(Tn,Oi),t&&(La.visible=e,Ia.visible=n);{const i=xn.spinAxisX,r=xn.spinAxisY,o=xn.spinAxisZ,a=Math.sqrt(i*i+r*r+o*o);if(a>.001){const l=new L(i/a,r/a,o/a);if(Yi.rotateOnWorldAxis(l,xn.spinSpeed*.01),Ds.visible=xn.showAngularMomentum,Ds.visible){const c=new L(0,1,0);Ds.quaternion.setFromUnitVectors(c,l)}}else Ds.visible=!1}Fo.render(Bi,Sr),Hs.animateCamera(),G1.update(),H1.render(k1,V1),is.isKicking?C1():R1(),pm(),window.requestAnimationFrame(Em)};Em();f1();p1();const ef=document.getElementById("edit-mode-btn"),nf=document.getElementById("edit-mode-done"),ja=document.getElementById("panel-customizer");ef&&ja&&ef.addEventListener("click",()=>{ja.classList.add("edit-mode-active","zoomed-out")});nf&&ja&&nf.addEventListener("click",()=>{ja.classList.remove("edit-mode-active","zoomed-out")});const sf=document.getElementById("spin-mode-btn"),rf=document.getElementById("spin-mode-done"),Ka=document.getElementById("panel-spin-preview");sf&&Ka&&sf.addEventListener("click",()=>{Ka.classList.add("spin-mode-active")});rf&&Ka&&rf.addEventListener("click",()=>{Ka.classList.remove("spin-mode-active")});
//# sourceMappingURL=index-DOuwvsJ-.js.map
