(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),o=a(2),c=a.n(o),r=a(3),l=a(4),u=a(7),i=a(6),m=a(5),p=a.n(m),d=(a(13),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),b=function(t){Object(u.a)(a,t);var e=Object(i.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={status:""},t.setStatus=function(e){t.setState({status:e.target.textContent})},t.removeStatus=function(){t.setState({status:""})},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.state.status;return s.a.createElement("div",{className:"App"},s.a.createElement("h1",{className:"App__title"},"Selected good: ".concat(e||"choose item")),s.a.createElement("button",{type:"button",className:"remove-button",onClick:this.removeStatus},"X"),s.a.createElement("ul",{className:"good-list"},d.map((function(a){return s.a.createElement("li",{className:"good-item",key:a},s.a.createElement("button",{type:"button",className:p()({"good-button":!0,selected:a===e}),onClick:t.setStatus},a))}))))}}]),a}(s.a.Component);c.a.render(s.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.590cb0ed.chunk.js.map