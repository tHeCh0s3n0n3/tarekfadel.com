var M,d,B,C,I,E={},z=[],Z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,_){for(var t in _)e[t]=_[t];return e}function G(e){var _=e.parentNode;_&&_.removeChild(e)}function w(e,_,t){var r,l,o,c={};for(o in _)o=="key"?r=_[o]:o=="ref"?l=_[o]:c[o]=_[o];if(arguments.length>2&&(c.children=arguments.length>3?M.call(arguments,2):t),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)c[o]===void 0&&(c[o]=e.defaultProps[o]);return A(e,c,r,l,null)}function A(e,_,t,r,l){var o={type:e,props:_,key:t,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l??++B};return l==null&&d.vnode!=null&&d.vnode(o),o}function N(e){return e.children}function D(e,_){this.props=e,this.context=_}function x(e,_){if(_==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var t;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null)return t.__e;return typeof e.type=="function"?x(e):null}function V(e){var _,t;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if((t=e.__k[_])!=null&&t.__e!=null){e.__e=e.__c.base=t.__e;break}return V(e)}}function O(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!U.__r++||I!==d.debounceRendering)&&((I=d.debounceRendering)||setTimeout)(U)}function U(){for(var e;U.__r=C.length;)e=C.sort(function(_,t){return _.__v.__b-t.__v.__b}),C=[],e.some(function(_){var t,r,l,o,c,u;_.__d&&(c=(o=(t=_).__v).__e,(u=t.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,W(u,o,l,t.__n,u.ownerSVGElement!==void 0,o.__h!=null?[c]:null,r,c??x(o),o.__h),Q(r,o),o.__e!=c&&V(o)))})}function q(e,_,t,r,l,o,c,u,p,a){var n,h,s,i,f,b,v,y=r&&r.__k||z,g=y.length;for(t.__k=[],n=0;n<_.length;n++)if((i=t.__k[n]=(i=_[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?A(null,i,null,null,i):Array.isArray(i)?A(N,{children:i},null,null,null):i.__b>0?A(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=t,i.__b=t.__b+1,(s=y[n])===null||s&&i.key==s.key&&i.type===s.type)y[n]=void 0;else for(h=0;h<g;h++){if((s=y[h])&&i.key==s.key&&i.type===s.type){y[h]=void 0;break}s=null}W(e,i,s=s||E,l,o,c,u,p,a),f=i.__e,(h=i.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,i),v.push(h,i.__c||f,i)),f!=null?(b==null&&(b=f),typeof i.type=="function"&&i.__k===s.__k?i.__d=p=J(i,p,e):p=K(e,i,s,y,f,p),typeof t.type=="function"&&(t.__d=p)):p&&s.__e==p&&p.parentNode!=e&&(p=x(s))}for(t.__e=b,n=g;n--;)y[n]!=null&&(typeof t.type=="function"&&y[n].__e!=null&&y[n].__e==t.__d&&(t.__d=x(r,n+1)),Y(y[n],y[n]));if(v)for(n=0;n<v.length;n++)X(v[n],v[++n],v[++n])}function J(e,_,t){for(var r,l=e.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=e,_=typeof r.type=="function"?J(r,_,t):K(t,r,r,l,r.__e,_));return _}function K(e,_,t,r,l,o){var c,u,p;if(_.__d!==void 0)c=_.__d,_.__d=void 0;else if(t==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(l),c=null;else{for(u=o,p=0;(u=u.nextSibling)&&p<r.length;p+=2)if(u==l)break e;e.insertBefore(l,o),c=o}return c!==void 0?c:l.nextSibling}function ee(e,_,t,r,l){var o;for(o in t)o==="children"||o==="key"||o in _||L(e,o,null,t[o],r);for(o in _)l&&typeof _[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||t[o]===_[o]||L(e,o,_[o],t[o],r)}function $(e,_,t){_[0]==="-"?e.setProperty(_,t):e[_]=t==null?"":typeof t!="number"||Z.test(_)?t:t+"px"}function L(e,_,t,r,l){var o;e:if(_==="style")if(typeof t=="string")e.style.cssText=t;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(_ in r)t&&_ in t||$(e.style,_,"");if(t)for(_ in t)r&&t[_]===r[_]||$(e.style,_,t[_])}else if(_[0]==="o"&&_[1]==="n")o=_!==(_=_.replace(/Capture$/,"")),_=_.toLowerCase()in e?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=t,t?r||e.addEventListener(_,o?j:R,o):e.removeEventListener(_,o?j:R,o);else if(_!=="dangerouslySetInnerHTML"){if(l)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(_!=="href"&&_!=="list"&&_!=="form"&&_!=="tabIndex"&&_!=="download"&&_ in e)try{e[_]=t??"";break e}catch{}typeof t=="function"||(t!=null&&(t!==!1||_[0]==="a"&&_[1]==="r")?e.setAttribute(_,t):e.removeAttribute(_))}}function R(e){this.l[e.type+!1](d.event?d.event(e):e)}function j(e){this.l[e.type+!0](d.event?d.event(e):e)}function W(e,_,t,r,l,o,c,u,p){var a,n,h,s,i,f,b,v,y,g,S,F,P,m=_.type;if(_.constructor!==void 0)return null;t.__h!=null&&(p=t.__h,u=_.__e=t.__e,_.__h=null,o=[u]),(a=d.__b)&&a(_);try{e:if(typeof m=="function"){if(v=_.props,y=(a=m.contextType)&&r[a.__c],g=a?y?y.props.value:a.__:r,t.__c?b=(n=_.__c=t.__c).__=n.__E:("prototype"in m&&m.prototype.render?_.__c=n=new m(v,g):(_.__c=n=new D(v,g),n.constructor=m,n.render=te),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=r,h=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,m.getDerivedStateFromProps(v,n.__s))),s=n.props,i=n.state,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||_.__v===t.__v){n.props=v,n.state=n.__s,_.__v!==t.__v&&(n.__d=!1),n.__v=_,_.__e=t.__e,_.__k=t.__k,_.__k.forEach(function(T){T&&(T.__=_)}),n.__h.length&&c.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,i,f)})}if(n.context=g,n.props=v,n.__v=_,n.__P=e,S=d.__r,F=0,"prototype"in m&&m.prototype.render)n.state=n.__s,n.__d=!1,S&&S(_),a=n.render(n.props,n.state,n.context);else do n.__d=!1,S&&S(_),a=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++F<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(f=n.getSnapshotBeforeUpdate(s,i)),P=a!=null&&a.type===N&&a.key==null?a.props.children:a,q(e,Array.isArray(P)?P:[P],_,t,r,l,o,c,u,p),n.base=_.__e,_.__h=null,n.__h.length&&c.push(n),b&&(n.__E=n.__=null),n.__e=!1}else o==null&&_.__v===t.__v?(_.__k=t.__k,_.__e=t.__e):_.__e=_e(t.__e,_,t,r,l,o,c,p);(a=d.diffed)&&a(_)}catch(T){_.__v=null,(p||o!=null)&&(_.__e=u,_.__h=!!p,o[o.indexOf(u)]=null),d.__e(T,_,t)}}function Q(e,_){d.__c&&d.__c(_,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(r){r.call(t)})}catch(r){d.__e(r,t.__v)}})}function _e(e,_,t,r,l,o,c,u){var p,a,n,h=t.props,s=_.props,i=_.type,f=0;if(i==="svg"&&(l=!0),o!=null){for(;f<o.length;f++)if((p=o[f])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){e=p,o[f]=null;break}}if(e==null){if(i===null)return document.createTextNode(s);e=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,s.is&&s),o=null,u=!1}if(i===null)h===s||u&&e.data===s||(e.data=s);else{if(o=o&&M.call(e.childNodes),a=(h=t.props||E).dangerouslySetInnerHTML,n=s.dangerouslySetInnerHTML,!u){if(o!=null)for(h={},f=0;f<e.attributes.length;f++)h[e.attributes[f].name]=e.attributes[f].value;(n||a)&&(n&&(a&&n.__html==a.__html||n.__html===e.innerHTML)||(e.innerHTML=n&&n.__html||""))}if(ee(e,s,h,l,u),n)_.__k=[];else if(f=_.props.children,q(e,Array.isArray(f)?f:[f],_,t,r,l&&i!=="foreignObject",o,c,o?o[0]:t.__k&&x(t,0),u),o!=null)for(f=o.length;f--;)o[f]!=null&&G(o[f]);u||("value"in s&&(f=s.value)!==void 0&&(f!==e.value||i==="progress"&&!f||i==="option"&&f!==h.value)&&L(e,"value",f,h.value,!1),"checked"in s&&(f=s.checked)!==void 0&&f!==e.checked&&L(e,"checked",f,h.checked,!1))}return e}function X(e,_,t){try{typeof e=="function"?e(_):e.current=_}catch(r){d.__e(r,t)}}function Y(e,_,t){var r,l;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||X(r,null,_)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,_)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(l=0;l<r.length;l++)r[l]&&Y(r[l],_,typeof e.type!="function");t||e.__e==null||G(e.__e),e.__=e.__e=e.__d=void 0}function te(e,_,t){return this.constructor(e,t)}function ne(e,_,t){var r,l,o;d.__&&d.__(e,_),l=(r=typeof t=="function")?null:t&&t.__k||_.__k,o=[],W(_,e=(!r&&t||_).__k=w(N,null,[e]),l||E,E,_.ownerSVGElement!==void 0,!r&&t?[t]:l?null:_.firstChild?M.call(_.childNodes):null,o,!r&&t?t:l?l.__e:_.firstChild,r),Q(o,e)}M=z.slice,d={__e:function(e,_,t,r){for(var l,o,c;_=_.__;)if((l=_.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(e)),c=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(e,r||{}),c=l.__d),c)return l.__E=l}catch(u){e=u}throw e}},B=0,D.prototype.setState=function(e,_){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},t),this.props)),e&&k(t,e),e!=null&&this.__v&&(_&&this.__h.push(_),O(this))},D.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),O(this))},D.prototype.render=N,C=[],U.__r=0;const H=({value:e,name:_})=>e?w("astro-slot",{name:_,dangerouslySetInnerHTML:{__html:e}}):null;H.shouldComponentUpdate=()=>!1;const oe=e=>(_,t,{default:r,...l})=>{if(!!e.hasAttribute("ssr")){for(const[o,c]of Object.entries(l))t[o]=w(H,{value:c,name:o});ne(w(_,t,r!=null?w(H,{value:r}):r),e)}};export{oe as default};
