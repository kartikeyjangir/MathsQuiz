(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),i=n(4),a=n.n(i),d=(n(9),n(2)),r=[{id:"1",ques:"1+2+3+2",ans:"8"},{id:"2",ques:"3+5+3+1",ans:"12"},{id:"3",ques:"4-2+3+10",ans:"15"},{id:"4",ques:"11-4+2+4",ans:"13"},{id:"5",ques:"7-2+1-2",ans:"4"},{id:"6",ques:"8-2-5+3",ans:"4"},{id:"7",ques:"5+6+4+2",ans:"17"},{id:"8",ques:"7-5-9+8",ans:"1"}],j=n(0);var u=function(){var e=Object(s.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(s.useState)(),a=Object(d.a)(i,2),u=a[0],l=a[1],o=Object(s.useState)(0),b=Object(d.a)(o,2),h=b[0],O=b[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsxs)("header",{children:[Object(j.jsx)("div",{children:"MATHS QUIZ"}),Object(j.jsxs)("div",{children:["Total Score :",n]})]}),Object(j.jsx)("main",{children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsxs)("div",{className:"qno",children:[" Q",h+1," /",Object(j.jsx)("span",{children:r.length})," "]}),Object(j.jsxs)("div",{children:[" ",r[h].ques]}),Object(j.jsx)("div",{children:Object(j.jsx)("input",{type:"text",placeholder:"Answer",value:u,onChange:function(e){return l(e.target.value)}})}),Object(j.jsx)("button",{onClick:function(e){e.preventDefault(),u===r[h].ans&&c(n+10),h+1<r.length?(O(h+1),l("")):alert("Congo!! You have solved all questions")},children:"Enter"})]})})]})},l=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,12)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),i(e),a(e)}))};a.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),l()},9:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5cb1787d.chunk.js.map