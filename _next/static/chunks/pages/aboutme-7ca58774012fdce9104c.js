(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[155],{8327:function(e,n,t){"use strict";t.d(n,{G:function(){return o}});var r=t(7294),o=t(4461).jU?r.useLayoutEffect:r.useEffect},7341:function(e,n,t){"use strict";t.d(n,{L:function(){return i}});var r=t(8629),o=t(3808),i=(0,r.m$)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});o.Ts&&(i.displayName="Spacer")},51:function(e,n,t){"use strict";t.d(n,{Ug:function(){return g},Kq:function(){return p},gC:function(){return h}});var r=t(8629),o=t(63),i=t(4461),a=t(3808),c=t(7294);var s=t(5505);Object.freeze(["base","sm","md","lg","xl","2xl"]);function l(e,n){return(0,a.kJ)(e)?e.map((e=>null===e?null:n(e))):(0,a.Kn)(e)?(0,s.Yd)(e).reduce(((t,r)=>(t[r]=n(e[r]),t)),{}):null!=e?n(e):null}var u="& > *:not(style) ~ *:not(style)";function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=e=>c.createElement(r.m$.div,d({className:"chakra-stack__item"},e,{__css:d({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)})),p=(0,o.G)(((e,n)=>{var{isInline:t,direction:o,align:a,justify:s,spacing:p="0.5rem",wrap:g,children:h,divider:m,className:x,shouldWrapChildren:b}=e,v=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"]),y=t?"row":null!=o?o:"column",j=c.useMemo((()=>function(e){var{spacing:n,direction:t}=e,r={column:{marginTop:n,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:n},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:n,marginStart:0},"row-reverse":{marginTop:0,marginEnd:n,marginBottom:0,marginStart:0}};return{flexDirection:t,[u]:l(t,(e=>r[e]))}}({direction:y,spacing:p})),[y,p]),O=c.useMemo((()=>function(e){var{spacing:n,direction:t}=e,r={column:{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:n,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:n,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":l(t,(e=>r[e]))}}({spacing:p,direction:y})),[p,y]),w=!!m,E=!b&&!w,k=function(e){return c.Children.toArray(e).filter((e=>c.isValidElement(e)))}(h),P=E?k:k.map(((e,n)=>{var t="undefined"!==typeof e.key?e.key:n,r=n+1===k.length,o=b?c.createElement(f,{key:t},e):e;if(!w)return o;var i=r?null:c.cloneElement(m,{__css:O});return c.createElement(c.Fragment,{key:t},o,i)})),_=(0,i.cx)("chakra-stack",x);return c.createElement(r.m$.div,d({ref:n,display:"flex",alignItems:a,justifyContent:s,flexDirection:j.flexDirection,flexWrap:g,className:_,__css:w?{}:{[u]:j[u]}},v),P)}));a.Ts&&(p.displayName="Stack");var g=(0,o.G)(((e,n)=>c.createElement(p,d({align:"center"},e,{direction:"row",ref:n}))));a.Ts&&(g.displayName="HStack");var h=(0,o.G)(((e,n)=>c.createElement(p,d({align:"center"},e,{direction:"column",ref:n}))));a.Ts&&(h.displayName="VStack")},4115:function(e,n,t){"use strict";t.d(n,{x:function(){return f}});var r=t(63),o=t(2326),i=t(5284),a=t(8629),c=t(5505),s=t(4461),l=t(3808),u=t(7294);function d(){return(d=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var f=(0,r.G)(((e,n)=>{var t=(0,o.m)("Text",e),r=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}((0,i.Lr)(e),["className","align","decoration","casing"]),l=(0,c.YU)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return u.createElement(a.m$.p,d({ref:n,className:(0,s.cx)("chakra-text",e.className)},l,r,{__css:t}))}));l.Ts&&(f.displayName="Text")},7013:function(e,n,t){"use strict";var r=t(2809),o=t(266),i=t(219),a=t(809),c=t.n(a),s=t(7294),l=t(5584),u=t(5172),d=t(8017),f=t(5893),p=["speed","aniBorderWidth","children","onEnd","running"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=(0,l.E)(d.xu);n.Z=function(e){var n,t,r=e.speed,a=void 0===r?.5:r,l=e.aniBorderWidth,g=void 0===l?1:l,x=e.children,b=e.onEnd,v=e.running,y=(0,i.Z)(e,p),j=(0,u._)(),O={bgColor:"black",position:"absolute",animate:j,initial:{scaleX:0,scaleY:0},zIndex:10},w=(0,s.useCallback)((0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.start((function(e){return h(h({},function(){switch(e){case 0:return{scaleY:1,scaleX:[0,1],transformOrigin:"left"};case 1:return{scaleX:1,scaleY:[0,1],transformOrigin:"top"};case 2:return{scaleY:1,scaleX:[0,1],transformOrigin:"right"};case 3:return{scaleX:1,scaleY:[0,1],transformOrigin:"bottom"}}}()),{},{transition:{duration:a,delay:(null!==a&&void 0!==a?a:.5)*e,type:"tween",ease:[.87,0,.13,1]}})}));case 2:case"end":return e.stop()}}),e)}))),[j,a]);return(0,s.useEffect)((function(){void 0===b?w():v&&(console.log("start border!"),w().then(b).then((function(){console.log("end border!")})))}),[b,v,w]),(0,f.jsx)(d.xu,h(h({},y),{},{children:(0,f.jsxs)(d.xu,{position:"relative",w:null!==(n=y.w)&&void 0!==n?n:"max-content",h:null!==(t=y.h)&&void 0!==t?t:"max-content",children:[(0,f.jsx)(m,h({w:"100%",h:"".concat(g,"px"),top:0,custom:0},O)),(0,f.jsx)(m,h({w:"".concat(g,"px"),h:"100%",left:0,custom:3},O)),(0,f.jsx)(m,h({w:"100%",h:"".concat(g,"px"),bottom:0,custom:2},O)),(0,f.jsx)(m,h({w:"".concat(g,"px"),h:"100%",right:0,custom:1},O)),x]})}))}},348:function(e,n,t){"use strict";var r=t(2809),o=t(219),i=t(3123),a=t(5584),c=t(7294),s=t(5893),l=["children"];function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=(0,a.E)(i.z),p=function(e){var n=e.children,t=(0,o.Z)(e,l);return(0,s.jsx)(f,d(d({px:10,borderWidth:1,borderColor:"gray.800",color:"gray.800",borderRadius:"none",backgroundColor:"whiteAlpha.900",_focus:{boxShadow:"none"},onClick:function(){return document.activeElement.blur()},_hover:{bgColor:"gray.800",color:"white",borderColor:"white"},_active:{bgColor:"gray.800",color:"white",borderColor:"white"},whileTap:{scale:1.1,transition:{duration:.01}}},t),{},{children:n}))};n.Z=(0,c.memo)(p)},6653:function(e,n,t){"use strict";t.d(n,{H:function(){return a}});var r=t(7294),o={state:"waiting"},i={state:"running",sequenceIndex:0},a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{running:!0},t=(0,r.useMemo)((function(){return function(n,t){switch(t.type){case"start":switch(console.log("start",n),n.state){case"waiting":case"ended":return{state:"running",sequenceIndex:0};case"running":throw new Error("sequense is running, but got `start` action")}case"next":return console.log("next",n),"ended"===n.state?{state:"ended"}:void 0===n.sequenceIndex?{state:"running",sequenceIndex:0}:n.sequenceIndex+1>=e.length?(console.log("end!"),{state:"ended"}):{state:"running",sequenceIndex:n.sequenceIndex+1}}}}),[e]),a=(0,r.useReducer)(t,n.running?i:o),c=a[0],s=a[1],l=(0,r.useCallback)((function(){s({type:"next"})}),[]);return(0,r.useEffect)((function(){var e;"ended"===c.state&&n.running&&(null===(e=n.onEnd)||void 0===e||e.call(n))}),[n,c.state]),(0,r.useEffect)((function(){}),[n,c.state]),(0,r.useEffect)((function(){"waiting"!=c.state||n.running||s({type:"start"})}),[n,c.state]),{phase:void 0!==c.sequenceIndex?e[c.sequenceIndex]:void 0,next:l,state:c}}},3601:function(e,n,t){"use strict";t.d(n,{H:function(){return b}});var r=t(2809),o=t(266),i=t(219),a=t(809),c=t.n(a),s=t(8017),l=t(5584),u=t(5172),d=t(7294),f=t(5893),p=["coverOrigin","running","speed","onEnd","delay"];function g(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?g(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var m=(0,l.E)(s.xu),x=function(e,n){return"left"==e?"start"===n?{scaleY:1,scaleX:[0,1],transformOrigin:"left"}:{scaleY:1,scaleX:[1,0],transformOrigin:"right"}:"start"===n?{scaleX:1,scaleY:[0,1],transformOrigin:"top"}:{scaleX:1,scaleY:[1,0],transformOrigin:"bottom"}},b=function(e){var n,t,r,a,l,g=e.coverOrigin,b=void 0===g?"left":g,v=e.running,y=e.speed,j=e.onEnd,O=e.delay,w=void 0===O?0:O,E=(0,i.Z)(e,p),k=(0,u._)(),P=(0,u._)(),_=(0,d.useCallback)((0,o.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.start((function(e){return h(h({},x(b,"start")),{},{transition:{delay:w,duration:(null!==y&&void 0!==y?y:.5)-.1*e,type:"tween",ease:[.87,0,.13,1]}})}));case 2:return e.next=4,P.start({opacity:[0,1],transition:{duration:0}});case 4:return e.next=6,k.start((function(e){return h(h({},x(b,"end")),{},{transition:{duration:null!==y&&void 0!==y?y:.5,type:"tween",ease:[.87,0,.13,1],delay:.1*e}})})).then((function(){k.set((function(){return{display:"hidden"}}))}));case 6:case"end":return e.stop()}}),e)}))),[P,k,b,y,w]);return(0,d.useEffect)((function(){void 0===j?_():v&&(console.log("start cover"),_().then(j).then((function(){console.log("end cover")})))}),[j,v,_]),(0,f.jsxs)(s.xu,{position:"relative",w:null!==(n=E.w)&&void 0!==n?n:"max-content",h:null!==(t=E.h)&&void 0!==t?t:"max-content",maxW:null!==(r=E.maxW)&&void 0!==r?r:"max-content",maxH:null!==(a=E.maxH)&&void 0!==a?a:"max-content",children:[(0,f.jsx)(m,{animate:P,initial:{opacity:0},position:"relative",children:(0,d.cloneElement)(E.children,{borderRadius:null!==(l=E.borderRadius)&&void 0!==l?l:"none"})}),E.coverColors.map((function(e,n){var t;return(0,f.jsx)(m,{custom:n,zIndex:10-n,position:"absolute",top:0,left:0,w:"100%",h:"100%",bgColor:e,borderRadius:null!==(t=E.borderRadius)&&void 0!==t?t:"none",animate:k,initial:"left"===b?{scaleX:0}:{scaleY:0}},n)}))]})}},7788:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(63),o=t(8629),i=t(5505),a=t(3808),c=t(7294),s=t(8327);function l(){return(l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}var d=c.forwardRef(((e,n)=>{var{htmlWidth:t,htmlHeight:r,alt:o}=e,i=u(e,["htmlWidth","htmlHeight","alt"]);return c.createElement("img",l({width:t,height:r,ref:n,alt:o},i))})),f=(0,r.G)(((e,n)=>{var{fallbackSrc:t,fallback:r,src:a,align:f,fit:p,loading:g,ignoreFallback:h,crossOrigin:m}=e,x=u(e,["fallbackSrc","fallback","src","align","fit","loading","ignoreFallback","crossOrigin"]),b=null!=g||h,v=function(e){var{src:n,srcSet:t,onLoad:r,onError:o,crossOrigin:i,sizes:a,ignoreFallback:l}=e,[u,d]=(0,c.useState)("pending");(0,c.useEffect)((()=>{d(n?"loading":"pending")}),[n]);var f=(0,c.useRef)(),p=(0,c.useCallback)((()=>{if(n){g();var e=new Image;e.src=n,i&&(e.crossOrigin=i),t&&(e.srcset=t),a&&(e.sizes=a),e.onload=e=>{g(),d("loaded"),null==r||r(e)},e.onerror=e=>{g(),d("failed"),null==o||o(e)},f.current=e}}),[n,i,t,a,r,o]),g=()=>{f.current&&(f.current.onload=null,f.current.onerror=null,f.current=null)};return(0,s.G)((()=>{if(!l)return"loading"===u&&p(),()=>{g()}}),[u,p,l]),l?"loaded":u}(l({},e,{ignoreFallback:b})),y=l({ref:n,objectFit:p,objectPosition:f},b?x:(0,i.CE)(x,["onError","onLoad"]));return"loaded"!==v?r||c.createElement(o.m$.img,l({as:d,className:"chakra-image__placeholder",src:t},y)):c.createElement(o.m$.img,l({as:d,src:a,crossOrigin:m,loading:g,className:"chakra-image"},y))}));a.Ts&&(f.displayName="Image");var p=t(8017),g=t(4096),h=t(336),m=t(51),x=t(4115),b=t(7341),v=t(5063),y=t(9008),j=t(5584),O=t(2809),w=t(266),E=t(219),k=t(809),P=t.n(k),_=t(5172),C=t(5893),S=["colors","speed","onEnd","running","children","chirdrenProps"];function W(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?W(Object(t),!0).forEach((function(n){(0,O.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var I=(0,j.E)(p.xu),N={r:100/Math.PI/2,c:200/Math.PI/2,v:400/Math.PI/2},T=function(e){var n=e.colors,t=e.speed,r=void 0===t?.5:t,o=e.onEnd,i=e.running,a=e.children,s=void 0===a?(0,C.jsx)(p.xu,{}):a,l=e.chirdrenProps,u=(0,E.Z)(e,S),d=(0,_._)(),f=(0,_._)(),g=(0,c.useCallback)((0,w.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.start((function(e){return{strokeDasharray:["0,100","100,0"],opacity:[1,1],transition:{duration:r-.1*e,type:"tween",ease:[.87,0,.13,1]}}}));case 2:return e.next=4,f.start((function(){return{opacity:[0,1],transition:{duration:0}}}));case 4:return e.next=6,d.start((function(e){return{strokeDasharray:["100,0","0,100"],scaleX:[-1,-1],transition:{duration:r,type:"tween",ease:[.87,0,.13,1],delay:.1*e}}}));case 6:return e.next=8,d.start((function(){return{opacity:0,transition:{duration:0}}}));case 8:case"end":return e.stop()}}),e)}))),[d,r,f]);return(0,c.useEffect)((function(){void 0===o?g():i&&g().then(o)}),[o,i,g]),(0,C.jsxs)(I,D(D({w:"100%",h:"100%",position:"relative"},u),{},{children:[(0,C.jsx)(I,{w:"100%",h:"100%",position:"absolute",zIndex:10,pointerEvents:"none",children:(0,C.jsx)(j.E.svg,{viewBox:"0 0 ".concat(N.v," ").concat(N.v),children:n.map((function(e,t){return(0,C.jsx)(j.E.circle,{custom:n.length-1-t,cx:N.c,cy:N.c,r:N.r,fill:"transparent",stroke:e,strokeWidth:N.c,initial:{rotate:"-90deg",opacity:0},animate:d},t)}))})}),(0,C.jsx)(I,D(D({w:"100%",h:"100%",position:"absolute",top:0,borderRadius:"full",overflow:"hidden",animate:f,initial:{opacity:0}},l),{},{children:s}))]}))},H=t(7013),X=t(3601),Z=t(6653),B=t(9583),q=t(348),R=t(8193),Y=(0,j.E)(p.xu),L=[{icon:(0,C.jsx)(B.RUr,{}),title:"Birth",content:"2000.08.23"},{icon:(0,C.jsx)(B.Xws,{}),title:"Gender",content:"Male"},{icon:(0,C.jsx)(B.KOq,{}),title:"Skill",content:"Web Frontend, Graphic Design"},{icon:(0,C.jsx)(B.tWi,{}),title:"Interest",content:"UI Design, Seosory Feedback, NLP"},{icon:(0,C.jsx)(B.P58,{}),title:"Contact",content:"xxx [at] xxx.com"}],F=function(){var e=(0,Z.H)(["border","boxCover","profile","","","","","",""]),n=e.next,t=e.phase;return(0,C.jsxs)(Y,{exit:{x:-1e3,opacity:[1,0],transition:{duration:.3}},children:[(0,C.jsx)(y.default,{children:(0,C.jsx)("title",{children:"ABOUT ME - Happa8"})}),(0,C.jsx)(g.k,{w:"100%",minH:"100vh",justifyContent:"center",alignItems:"center",children:(0,C.jsx)(Y,{position:"relative",py:10,children:(0,C.jsx)(H.Z,{speed:.3,running:"border"==t,onEnd:n,children:(0,C.jsx)(X.H,{coverColors:["black","gray"],running:"boxCover"==t,onEnd:n,coverOrigin:"top",children:(0,C.jsxs)(g.k,{w:"90vw",maxW:600,h:"max-content",alignItems:"center",p:10,bgColor:"gray.100",flexDir:"column",gridGap:5,borderRadius:"sm",children:[(0,C.jsx)(T,{w:150,h:150,colors:["gray","black"],chirdrenProps:{border:"1px",borderColor:"black"},running:"profile"==t,onEnd:n,speed:.3,children:(0,C.jsx)(f,{alt:"happa8",src:"/images/happa8.png"})}),(0,C.jsx)(X.H,{coverColors:["black","gray"],running:"profile"==t,onEnd:n,speed:.3,children:(0,C.jsx)(h.X,{fontFamily:"Raleway",px:5,children:"Happa8"})}),(0,C.jsx)(p.xu,{fontFamily:"Raleway",py:10,maxW:"95%",children:(0,C.jsx)(m.Kq,{spacing:5,fontSize:"md",w:"max-content",maxW:"100%",children:L.map((function(e,r){return(0,C.jsx)(X.H,{coverColors:["gray","black"],running:"profile"==t,onEnd:n,w:"100%",maxW:"100%",delay:.05*(r+1),children:(0,C.jsxs)(m.Ug,{spacing:5,children:[(0,C.jsx)(x.x,{children:e.icon}),(0,C.jsx)(x.x,{fontWeight:"bold",children:e.title}),(0,C.jsx)(b.L,{}),(0,C.jsx)(x.x,{textAlign:"right",children:e.content})]})},e.title)}))})}),(0,C.jsx)(X.H,{running:"profile"==t,onEnd:n,delay:.3,coverColors:["gray","black"],children:(0,C.jsx)(v.default,{href:"/",passHref:!0,children:(0,C.jsx)(q.Z,{as:"a",leftIcon:(0,C.jsx)(R.kyg,{}),children:"Back"})})})]})})})})})]})}},5587:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/aboutme",function(){return t(7788)}])}},function(e){e.O(0,[617,445,804,774,888,179],(function(){return n=5587,e(e.s=n);var n}));var n=e.O();_N_E=n}]);