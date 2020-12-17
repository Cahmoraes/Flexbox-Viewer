(this["webpackJsonpflexbox-viewer"]=this["webpackJsonpflexbox-viewer"]||[]).push([[0],{37:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t(0),i=t.n(r),o=t(21),a=t.n(o),l=t(14),u=t(2),s=t(3);function b(){var e=Object(u.a)(["\n\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  html {\n    font-size: 62.5%;\n  }\n\n  body {\n    font-size: 1.6rem;\n    font-family: 'IBM Plex Mono', monospace;\n\n  }\n\n  img {\n    max-width: 100%;\n    display: block;\n  }\n\n  ul {\n    list-style: none\n  }\n\n"]);return b=function(){return e},e}var j=Object(s.a)(b()),d=t(4),h=t(20),O=t(25),g=function(e){var n=e.isPrivate,t=void 0!==n&&n,r=e.component,i=Object(O.a)(e,["isPrivate","component"]);return Object(c.jsx)(d.b,Object(h.a)(Object(h.a)({},i),{},{render:function(e){var n=e.location;return t?Object(c.jsx)(d.a,{to:{pathname:"/",state:{from:n}}}):Object(c.jsx)(r,{})}}))},x=t(8);function A(){var e=Object(u.a)(["\n  font-size: 1.4rem;\n  padding: .5rem;\n  box-shadow: 0 0 0 2px #FB5, 0 0 0 6px rgba(0,0,0, .6);\n  border-radius: 2px;\n  position: absolute;\n  background: #CCC;\n  display: none;\n  z-index: 9;\n  width: 168px;\n  &::after {\n    content: '';\n    position: absolute;\n    left: 27%;\n    top: 100%;\n    width: 0;\n    height: 0;\n    border-left: 7px solid transparent;\n    border-right: 9px solid transparent;\n    border-top: 8px solid #CCC;\n    clear: both;\n    z-index: 10;\n  }\n"]);return A=function(){return e},e}function p(){var e=Object(u.a)(["flex-basis: ",";"]);return p=function(){return e},e}function C(){var e=Object(u.a)(["flex-shrink: ",";"]);return C=function(){return e},e}function f(){var e=Object(u.a)(["flex-grow: ",";"]);return f=function(){return e},e}function Q(){var e=Object(u.a)(["align-self: ",";"]);return Q=function(){return e},e}function w(){var e=Object(u.a)(["\n  border: 1px solid;\n  padding: 5px;\n  display: flex;\n  border: 3px solid #FFF;\n  width: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0.2rem;\n  color: #FFF;\n  font-weight: bold;\n  font-size: 2rem;\n  background: #F65627;\n  \n\n  ","\n  ","\n  ","\n  ","\n"]);return w=function(){return e},e}var v=s.c.div(w(),(function(e){var n=e.alignSelf;return e.active&&Object(s.b)(Q(),n)}),(function(e){var n=e.grow;return e.active&&Object(s.b)(f(),n)}),(function(e){var n=e.shrink;return e.active&&Object(s.b)(C(),n)}),(function(e){var n=e.basis;return e.active&&Object(s.b)(p(),"auto"===n?n:n+"px")})),K=s.c.div(A()),B=function(e){var n=e.active,t=void 0===n||n,i=e.alignSelf,o=void 0===i?"stretch":i,a=e.grow,l=void 0===a?0:a,u=e.shrink,s=void 0===u?1:u,b=e.basis,j=void 0===b?"auto":b,d=e.children,h=Object(r.useState)(o),O=Object(x.a)(h,2),g=O[0],A=O[1],p=Object(r.useState)(l),C=Object(x.a)(p,2),f=C[0],Q=C[1],w=Object(r.useState)(s),B=Object(x.a)(w,2),E=B[0],k=B[1],D=Object(r.useState)(j),M=Object(x.a)(D,2),F=M[0],m=M[1],I=Object(r.useRef)(null),U=Object(r.useCallback)((function(){I.current&&(I.current.style.display="none")}),[]),Y=Object(r.useCallback)((function(e){var n=e.currentTarget;if(I.current){if(I.current.style.display="block",console.log(n.offsetLeft+n.offsetWidth+n.offsetWidth+21,window.innerWidth),n.offsetLeft+n.offsetWidth+n.offsetWidth+21>=window.innerWidth){var t=window.innerWidth-n.offsetLeft-(n.offsetLeft+n.offsetWidth-window.innerWidth);I.current.style.left="".concat(n.offsetLeft-t+"px")}else I.current.style.left="".concat(e.clientX+"px");I.current.style.top="".concat(n.offsetTop-140+"px")}}),[]),y=Object(r.useCallback)((function(e){var n=e.currentTarget,t="outside-click";document.body.getAttribute(t)||(document.body.addEventListener("click",(function e(c){n.contains(c.target)||(U(),document.body.removeEventListener("click",e),document.body.removeAttribute(t))})),document.body.setAttribute(t,"true"),Y(e))}),[]),G=Object(r.useCallback)((function(e){A(e.target.value)}),[]),S=Object(r.useCallback)((function(e){Q(parseInt(e.target.value,10)||0)}),[]),T=Object(r.useCallback)((function(e){k(parseInt(e.target.value,10)||0)}),[]),z=Object(r.useCallback)((function(e){m(e.target.value)}),[]);return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(v,{onClick:y,active:t,alignSelf:g,grow:f,shrink:E,basis:F,children:[Object(c.jsxs)(K,{ref:I,children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"align-select",children:"Align Self"}),Object(c.jsxs)("select",{name:"align-select",onChange:G,value:g,children:[Object(c.jsx)("option",{value:"stretch",defaultValue:"stretch",children:"stretch"}),Object(c.jsx)("option",{value:"flex-start",children:"start"}),Object(c.jsx)("option",{value:"center",children:"center"}),Object(c.jsx)("option",{value:"flex-end",children:"end"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"flex-grow",children:"Grow"}),Object(c.jsx)("input",{name:"flex-grow",onChange:S,type:"number",min:"0",value:f})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"flex-shrink",children:"Shrink"}),Object(c.jsx)("input",{name:"flex-shrink",onChange:T,type:"number",min:"0",value:E})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"flex-basis",children:"Basis"}),Object(c.jsx)("input",{name:"flex-basis",onChange:z,type:"text",value:F})]})]}),d]})})},E=t.p+"static/media/arrow.7d4f021c.png";function k(){var e=Object(u.a)(["align-content: ",";"]);return k=function(){return e},e}function D(){var e=Object(u.a)(["\n      flex-direction: ",";\n      ","\n    "]);return D=function(){return e},e}function M(){var e=Object(u.a)(["background: url('","') repeat-y;"]);return M=function(){return e},e}function F(){var e=Object(u.a)(["background: url('","') repeat-x;"]);return F=function(){return e},e}function m(){var e=Object(u.a)(["flex-wrap: ",";"]);return m=function(){return e},e}function I(){var e=Object(u.a)(["align-items: ",";"]);return I=function(){return e},e}function U(){var e=Object(u.a)(["justify-content: ",";"]);return U=function(){return e},e}function Y(){var e=Object(u.a)(["\n  height: 30vh;\n  border: 1px solid;\n  display: flex;\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  background-position: center center;\n  background-color: #4481CA;\n  background-size: 20px;\n"]);return Y=function(){return e},e}var y=s.c.div(Y(),(function(e){var n=e.justify;return Object(s.b)(U(),n)}),(function(e){var n=e.align;return Object(s.b)(I(),n)}),(function(e){var n=e.wrap;return Object(s.b)(m(),n)}),(function(e){var n,t=e.direction;return n="row"===t?Object(s.b)(F(),E):Object(s.b)(M(),"data:image/png;base64,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"),Object(s.b)(D(),t,n)}),(function(e){var n=e.alignContent;return Object(s.b)(k(),n)})),G=function(e,n){e.children;var t=Object(r.useState)("flex-start"),i=Object(x.a)(t,2),o=i[0],a=i[1],l=Object(r.useState)("stretch"),u=Object(x.a)(l,2),s=u[0],b=u[1],j=Object(r.useState)("nowrap"),d=Object(x.a)(j,2),h=d[0],O=d[1],g=Object(r.useState)("row"),A=Object(x.a)(g,2),p=A[0],C=A[1],f=Object(r.useState)("normal"),Q=Object(x.a)(f,2),w=Q[0],v=Q[1],K=Object(r.useState)([""]),E=Object(x.a)(K,2),k=E[0],D=E[1],M=Object(r.useCallback)((function(e){a(e)}),[]),F=Object(r.useCallback)((function(e){b(e)}),[]),m=Object(r.useCallback)((function(e){v(e)}),[]),I=Object(r.useCallback)((function(e){O(e)}),[]),U=Object(r.useCallback)((function(e){C(e)}),[]),Y=Object(r.useCallback)((function(e){D(e)}),[]);return Object(r.useImperativeHandle)(n,(function(){return{handleJustify:M,handleAlign:F,handleWrap:I,handleDirection:U,handleAlignContent:m,handleQtdItem:Y}})),Object(c.jsx)(y,{justify:o,align:s,direction:p,wrap:h,alignContent:w,children:k.map((function(e,n){return Object(c.jsx)(B,{children:n+1},n)}))})},S=Object(r.forwardRef)(G);function T(){var e=Object(u.a)(["\n  border: 1px solid #4282CC;\n  border-radius: 3px;\n  max-width: 300px;\n\n  h3 {\n    color: #FFF;\n    background: #4282CC;\n    text-align: center;\n    padding: .4rem 0;\n  }\n\n  & > div {\n    margin: 0.5rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    &:nth-child(2n) {\n      background-color: #EFEFEF;\n    }\n  }\n\n  label {\n    font-size: 1.4rem;\n    &::after {\n      content: ':';\n    }\n  }\n"]);return T=function(){return e},e}function z(){var e=Object(u.a)(["\n  padding: 2rem 0;\n"]);return z=function(){return e},e}var J=s.c.div(z()),H=s.c.div(T()),X=function(e){var n=e.refContainer,t=Object(r.useCallback)((function(e){var t,c=e.target.value;null===(t=n.current)||void 0===t||t.handleJustify(c)}),[n]),i=Object(r.useCallback)((function(e){var t,c=e.target.value;null===(t=n.current)||void 0===t||t.handleAlign(c)}),[n]),o=Object(r.useCallback)((function(e){var t,c=e.target.value;null===(t=n.current)||void 0===t||t.handleAlignContent(c)}),[n]),a=Object(r.useCallback)((function(e){var t,c=e.target.value;null===(t=n.current)||void 0===t||t.handleWrap(c)}),[n]),l=Object(r.useCallback)((function(e){var t,c=e.target.value;null===(t=n.current)||void 0===t||t.handleDirection(c)}),[n]),u=Object(r.useCallback)((function(e){var t,c=parseInt(e.target.value,10)||0;null===(t=n.current)||void 0===t||t.handleQtdItem(Array(c).fill(""))}),[n]);return Object(c.jsx)(J,{children:Object(c.jsxs)(H,{children:[Object(c.jsx)("h3",{children:"Flex Container"}),Object(c.jsx)("div",{}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"quantidade-itens",children:"Itens"}),Object(c.jsx)("input",{type:"number",min:"0",name:"quantidade-itens",defaultValue:"1",onChange:u})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"direction-select",children:"Direction"}),Object(c.jsxs)("select",{name:"direction-select",onChange:l,children:[Object(c.jsx)("option",{value:"row",children:"row"}),Object(c.jsx)("option",{value:"column",children:"column"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"justify-select",children:"Justify"}),Object(c.jsxs)("select",{name:"justify-select",onChange:t,children:[Object(c.jsx)("option",{value:"flex-start",children:"start"}),Object(c.jsx)("option",{value:"center",children:"center"}),Object(c.jsx)("option",{value:"flex-end",children:"end"}),Object(c.jsx)("option",{value:"space-between",children:"space-between"}),Object(c.jsx)("option",{value:"space-around",children:"space-around"}),Object(c.jsx)("option",{value:"space-evenly",children:"space-evenly"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"align-select",children:"Align Items"}),Object(c.jsxs)("select",{name:"align-select",onChange:i,children:[Object(c.jsx)("option",{value:"stretch",defaultValue:"stretch",children:"stretch"}),Object(c.jsx)("option",{value:"flex-start",children:"start"}),Object(c.jsx)("option",{value:"center",children:"center"}),Object(c.jsx)("option",{value:"flex-end",children:"end"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"alignContent-select",children:"Align Content"}),Object(c.jsxs)("select",{name:"alignContent-select",onChange:o,children:[Object(c.jsx)("option",{value:"normal",children:"normal"}),Object(c.jsx)("option",{value:"flex-start",children:"start"}),Object(c.jsx)("option",{value:"center",children:"center"}),Object(c.jsx)("option",{value:"flex-end",children:"end"}),Object(c.jsx)("option",{value:"stretch",children:"stretch"}),Object(c.jsx)("option",{value:"space-around",children:"space-around"}),Object(c.jsx)("option",{value:"space-between",children:"space-between"}),Object(c.jsx)("option",{value:"space-evenly",children:"space-evenly"})]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"align-select",children:"Wrap"}),Object(c.jsxs)("select",{name:"wrap-select",onChange:a,children:[Object(c.jsx)("option",{value:"nowrap",children:"nowrap"}),Object(c.jsx)("option",{value:"wrap",children:"wrap"})]})]})]})})};function L(){var e=Object(u.a)(["\n  display: flex;\n  height: 100vh;\n  padding: 0 1rem;\n  flex-direction: column;\n  & > * {\n    flex: 1;\n  }\n"]);return L=function(){return e},e}var R=s.c.div(L()),P=function(){var e=Object(r.useRef)(null);return Object(c.jsxs)(R,{children:[Object(c.jsx)(X,{refContainer:e}),Object(c.jsx)(S,{ref:e})]})},V=function(){return Object(c.jsxs)(d.d,{children:[Object(c.jsx)(g,{component:P,path:"/",exact:!0}),Object(c.jsx)(g,{component:P,path:"/Flexbox-Viewer"})]})};var W=function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(l.a,{children:Object(c.jsx)(V,{})}),Object(c.jsx)(j,{})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(W,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.29ecf568.chunk.js.map