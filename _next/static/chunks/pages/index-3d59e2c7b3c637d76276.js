(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{7013:function(e,n,t){"use strict";var r=t(2809),o=t(266),i=t(219),c=t(809),a=t.n(c),s=t(7294),u=t(5584),l=t(5172),d=t(8017),f=t(5893),p=["speed","aniBorderWidth","children","onEnd","running"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=(0,u.E)(d.xu);n.Z=function(e){var n,t,r=e.speed,c=void 0===r?.5:r,u=e.aniBorderWidth,h=void 0===u?1:u,b=e.children,v=e.onEnd,O=e.running,j=(0,i.Z)(e,p),w=(0,l._)(),m={bgColor:"black",position:"absolute",animate:w,initial:{scaleX:0,scaleY:0},zIndex:10},y=(0,s.useCallback)((0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.start((function(e){return x(x({},function(){switch(e){case 0:return{scaleY:1,scaleX:[0,1],transformOrigin:"left"};case 1:return{scaleX:1,scaleY:[0,1],transformOrigin:"top"};case 2:return{scaleY:1,scaleX:[0,1],transformOrigin:"right"};case 3:return{scaleX:1,scaleY:[0,1],transformOrigin:"bottom"}}}()),{},{transition:{duration:c,delay:(null!==c&&void 0!==c?c:.5)*e,type:"tween",ease:[.87,0,.13,1]}})}));case 2:case"end":return e.stop()}}),e)}))),[w,c]);return(0,s.useEffect)((function(){void 0===v?y():O&&(console.log("start border!"),y().then(v).then((function(){console.log("end border!")})))}),[v,O,y]),(0,f.jsx)(d.xu,x(x({},j),{},{children:(0,f.jsxs)(d.xu,{position:"relative",w:null!==(n=j.w)&&void 0!==n?n:"max-content",h:null!==(t=j.h)&&void 0!==t?t:"max-content",children:[(0,f.jsx)(g,x({w:"100%",h:"".concat(h,"px"),top:0,custom:0},m)),(0,f.jsx)(g,x({w:"".concat(h,"px"),h:"100%",left:0,custom:3},m)),(0,f.jsx)(g,x({w:"100%",h:"".concat(h,"px"),bottom:0,custom:2},m)),(0,f.jsx)(g,x({w:"".concat(h,"px"),h:"100%",right:0,custom:1},m)),b]})}))}},348:function(e,n,t){"use strict";var r=t(2809),o=t(219),i=t(3123),c=t(5584),a=t(7294),s=t(5893),u=["children"];function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var f=(0,c.E)(i.z),p=function(e){var n=e.children,t=(0,o.Z)(e,u);return(0,s.jsx)(f,d(d({px:10,borderWidth:1,borderColor:"gray.800",color:"gray.800",borderRadius:"none",backgroundColor:"whiteAlpha.900",_focus:{boxShadow:"none"},onClick:function(){return document.activeElement.blur()},_hover:{bgColor:"gray.800",color:"white",borderColor:"white"},_active:{bgColor:"gray.800",color:"white",borderColor:"white"},whileTap:{scale:1.1,transition:{duration:.01}}},t),{},{children:n}))};n.Z=(0,a.memo)(p)},6653:function(e,n,t){"use strict";t.d(n,{H:function(){return c}});var r=t(7294),o={state:"waiting"},i={state:"running",sequenceIndex:0},c=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{running:!0},t=(0,r.useMemo)((function(){return function(n,t){switch(t.type){case"start":switch(console.log("start",n),n.state){case"waiting":case"ended":return{state:"running",sequenceIndex:0};case"running":throw new Error("sequense is running, but got `start` action")}case"next":return console.log("next",n),"ended"===n.state?{state:"ended"}:void 0===n.sequenceIndex?{state:"running",sequenceIndex:0}:n.sequenceIndex+1>=e.length?(console.log("end!"),{state:"ended"}):{state:"running",sequenceIndex:n.sequenceIndex+1}}}}),[e]),c=(0,r.useReducer)(t,n.running?i:o),a=c[0],s=c[1],u=(0,r.useCallback)((function(){s({type:"next"})}),[]);return(0,r.useEffect)((function(){var e;"ended"===a.state&&n.running&&(null===(e=n.onEnd)||void 0===e||e.call(n))}),[n,a.state]),(0,r.useEffect)((function(){}),[n,a.state]),(0,r.useEffect)((function(){"waiting"!=a.state||n.running||s({type:"start"})}),[n,a.state]),{phase:void 0!==a.sequenceIndex?e[a.sequenceIndex]:void 0,next:u,state:a}}},3601:function(e,n,t){"use strict";t.d(n,{H:function(){return v}});var r=t(2809),o=t(266),i=t(219),c=t(809),a=t.n(c),s=t(8017),u=t(5584),l=t(5172),d=t(7294),f=t(5893),p=["coverOrigin","running","speed","onEnd","delay"];function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var g=(0,u.E)(s.xu),b=function(e,n){return"left"==e?"start"===n?{scaleY:1,scaleX:[0,1],transformOrigin:"left"}:{scaleY:1,scaleX:[1,0],transformOrigin:"right"}:"start"===n?{scaleX:1,scaleY:[0,1],transformOrigin:"top"}:{scaleX:1,scaleY:[1,0],transformOrigin:"bottom"}},v=function(e){var n,t,r,c,u,h=e.coverOrigin,v=void 0===h?"left":h,O=e.running,j=e.speed,w=e.onEnd,m=e.delay,y=void 0===m?0:m,E=(0,i.Z)(e,p),P=(0,l._)(),k=(0,l._)(),C=(0,d.useCallback)((0,o.Z)(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.start((function(e){return x(x({},b(v,"start")),{},{transition:{delay:y,duration:(null!==j&&void 0!==j?j:.5)-.1*e,type:"tween",ease:[.87,0,.13,1]}})}));case 2:return e.next=4,k.start({opacity:[0,1],transition:{duration:0}});case 4:return e.next=6,P.start((function(e){return x(x({},b(v,"end")),{},{transition:{duration:null!==j&&void 0!==j?j:.5,type:"tween",ease:[.87,0,.13,1],delay:.1*e}})})).then((function(){P.set((function(){return{display:"hidden"}}))}));case 6:case"end":return e.stop()}}),e)}))),[k,P,v,j,y]);return(0,d.useEffect)((function(){void 0===w?C():O&&(console.log("start cover"),C().then(w).then((function(){console.log("end cover")})))}),[w,O,C]),(0,f.jsxs)(s.xu,{position:"relative",w:null!==(n=E.w)&&void 0!==n?n:"max-content",h:null!==(t=E.h)&&void 0!==t?t:"max-content",maxW:null!==(r=E.maxW)&&void 0!==r?r:"max-content",maxH:null!==(c=E.maxH)&&void 0!==c?c:"max-content",children:[(0,f.jsx)(g,{animate:k,initial:{opacity:0},position:"relative",children:(0,d.cloneElement)(E.children,{borderRadius:null!==(u=E.borderRadius)&&void 0!==u?u:"none"})}),E.coverColors.map((function(e,n){var t;return(0,f.jsx)(g,{custom:n,zIndex:10-n,position:"absolute",top:0,left:0,w:"100%",h:"100%",bgColor:e,borderRadius:null!==(t=E.borderRadius)&&void 0!==t?t:"none",animate:P,initial:"left"===v?{scaleX:0}:{scaleY:0}},n)}))]})}},6839:function(e,n,t){"use strict";t.r(n);var r=t(8017),o=t(4096),i=t(336),c=t(5063),a=t(9008),s=t(3601),u=t(7013),l=(t(7294),t(348)),d=t(6653),f=t(8193),p=t(5584),h=t(5893),x=(0,p.E)(r.xu);n.default=function(){var e=(0,d.H)(["border","cover","header","",""]),n=e.next,t=e.phase;return(0,h.jsxs)(x,{exit:{x:1e3,opacity:[1,0],transition:{duration:.3}},children:[(0,h.jsxs)(a.default,{children:[(0,h.jsx)("title",{children:"Happa8 Website"}),(0,h.jsx)("meta",{name:"description",content:"Happa8 Website"}),(0,h.jsx)("link",{rel:"icon",href:"/images/happa8.png"})]}),(0,h.jsx)(o.k,{width:"100%",height:"100vh",justifyContent:"center",alignItems:"center",children:(0,h.jsx)(r.xu,{position:"relative",children:(0,h.jsx)(u.Z,{running:"border"===t,onEnd:n,speed:.3,children:(0,h.jsx)(s.H,{running:"cover"==t,onEnd:n,coverColors:["black","gray"],coverOrigin:"top",speed:.3,children:(0,h.jsxs)(o.k,{w:"90vw",maxW:600,bgColor:"gray.100",p:10,flexDir:"column",gridGap:8,flexWrap:"wrap",children:[(0,h.jsx)(s.H,{coverColors:["black"],running:"header"===t,onEnd:n,speed:.3,maxW:"100%",children:(0,h.jsx)(i.X,{as:"h1",size:"2xl",fontFamily:"Raleway",children:"Happa8 Website"})}),(0,h.jsxs)(r.xu,{display:"inline-flex",flexWrap:"wrap",gridGap:3,children:[(0,h.jsx)(s.H,{width:"max-content",h:"max-content",coverColors:["black"],running:"header"===t,onEnd:n,speed:.3,delay:.05,children:(0,h.jsx)(c.default,{href:"/aboutme",passHref:!0,children:(0,h.jsx)(l.Z,{as:"a",rightIcon:(0,h.jsx)(f.mGl,{}),children:"PROFILE"})})}),(0,h.jsx)(s.H,{width:"max-content",h:"max-content",coverColors:["black"],running:"header"===t,onEnd:n,speed:.3,delay:.1,children:(0,h.jsx)(c.default,{href:"/works",passHref:!0,children:(0,h.jsx)(l.Z,{as:"a",rightIcon:(0,h.jsx)(f.mGl,{}),children:"WORKS"})})})]})]})})})})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6839)}])}},function(e){e.O(0,[617,804,774,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);