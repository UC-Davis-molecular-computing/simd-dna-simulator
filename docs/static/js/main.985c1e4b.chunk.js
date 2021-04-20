(this["webpackJsonpsimd-dna-web-simulator"]=this["webpackJsonpsimd-dna-web-simulator"]||[]).push([[0],{12:function(e,t,n){e.exports={cell:"Cell_cell__2WEAz"}},17:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(5),l=n.n(a),s=(n(17),n(3)),i=n(4),d={cellInput:"",cellTypes:new(0,n(10).Map)},o=Object(i.b)({name:"cell",initialState:d,reducers:{addCell:function(e){var t=e.cellInput.split("\n"),n="";t.forEach((function(t,r){if(""!==t){var c=t.split(" ");(c=c.filter((function(e){return e}))).length<=1||Array.from(e.cellTypes.keys()).includes(c[0])?n+=t+"\n":e.cellTypes=e.cellTypes.set(c[0],{domains:c.slice(1)})}})),e.cellInput=n},setCellInput:function(e,t){e.cellInput=t.payload}}}),u=function(e){return e.cell.cellTypes},j=function(e){return e.cell.cellInput},b=o.actions,p=b.addCell,h=b.setCellInput,f=o.reducer,m=n(12),y=n.n(m),O=n(1);function x(){var e=Object(s.c)(j),t=Object(s.c)(u),n=Object(s.b)();return Object(O.jsxs)("div",{className:y.a.cell,children:[Object(O.jsx)("textarea",{placeholder:"Enter the cell name followed by the domain names, separated by spaces (e.g. 'Bit a b c'.) Multiple cell types can be added at once, one cell type per line.",value:e,onChange:function(e){return n(h(e.target.value))}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{"aria-label":"Add Cell Type",onClick:function(){return n(p())},children:"Add Cell Type"}),t.size>0&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Cells"}),Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:Array.from(t.keys()).map((function(e){var n=t.get(e);return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e}),n.domains.map((function(e){return Object(O.jsx)("td",{children:e})}))]})}))})})]})]})}var v={strandInput:"",strandTypes:new(0,n(10).Map)},g=Object(i.b)({name:"strand",initialState:v,reducers:{addStrand:function(e){var t=e.strandInput.split("\n"),n="";t.forEach((function(t,r){if(""!==t){var c=t.split(" ");(c=c.filter((function(e){return e}))).length<=2||Array.from(e.strandTypes.keys()).includes(c[0])||"true"!==c[c.length-1]&&"false"!==c[c.length-1]?n+=t+"\n":e.strandTypes=e.strandTypes.set(c[0],{domains:c.slice(1,-1),is_complementary:"true"===c[c.length-1]})}})),e.strandInput=n},setStrandInput:function(e,t){e.strandInput=t.payload}}}),w=function(e){return e.strand.strandTypes},I=function(e){return e.strand.strandInput},T=g.actions,C=T.addStrand,A=T.setStrandInput,k=g.reducer;function S(){var e=Object(s.c)(I),t=Object(s.c)(w),n=Object(s.b)();return Object(O.jsxs)("div",{children:[Object(O.jsx)("textarea",{placeholder:"Enter the strand name, followed by the domain names, followed by a boolean value indicating whether the strand is complementary to the top strand (dashed lines) or not (solid line.) (e.g. Zero-first a b c false) Multiple strand types can be added at once, one strand type per line.",value:e,onChange:function(e){return n(A(e.target.value))}}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{"aria-label":"Add Strand Type",onClick:function(){return n(C())},children:"Add Strand Type"}),t.size>0&&Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{children:"Strands"}),Object(O.jsx)("table",{children:Object(O.jsx)("tbody",{children:Array.from(t.keys()).map((function(e){var n=t.get(e);return Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{children:e}),n.is_complementary&&Object(O.jsx)("td",{children:"\u25c0"}),n.domains.map((function(e){return Object(O.jsx)("td",{children:e})})),!n.is_complementary&&Object(O.jsx)("td",{children:"\u25b6"})]})}))})})]})]})}n(25);var E=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsxs)("header",{className:"App-header",children:[Object(O.jsx)(x,{}),Object(O.jsx)(S,{})]})})},_=Object(i.a)({reducer:{cell:f,strand:k}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(s.a,{store:_,children:Object(O.jsx)(E,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.985c1e4b.chunk.js.map