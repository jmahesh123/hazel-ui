(this["webpackJsonpreact-table-custom"]=this["webpackJsonpreact-table-custom"]||[]).push([[0],{12:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(7),c=n.n(o),l=(n(17),n(2)),u=n(3),s=n(8);function i(){var e=Object(l.a)(["\n  padding: 10px;\n  border: 1px solid DarkBlue;\n  background: PapayaWhip;\n"]);return i=function(){return e},e}function m(){var e=Object(l.a)(["\n  border-bottom: 3px solid maroon;\n  background: aliceblue;\n  color: black;\n  font-weight: bold;\n"]);return m=function(){return e},e}function d(){var e=Object(l.a)(["\n  border: 1px solid olive;\n"]);return d=function(){return e},e}function p(e){var t=a.a.useMemo((function(){return e.data}),[e.data]),n=a.a.useMemo((function(){return e.columns}),[e.columns]),r=Object(s.useTable)({columns:n,data:t}),o=r.getTableProps,c=r.getTableBodyProps,l=r.headerGroups,u=r.rows,i=r.prepareRow;return a.a.createElement(b,o(),a.a.createElement("thead",null,l.map((function(e){return a.a.createElement("tr",e.getHeaderGroupProps(),e.headers.map((function(e){return a.a.createElement(f,e.getHeaderProps(),e.render("Header"))})))}))),a.a.createElement("tbody",c(),u.map((function(e){return i(e),a.a.createElement("tr",e.getRowProps(),e.cells.map((function(e){return a.a.createElement(h,e.getCellProps(),e.render("Cell"))})))}))))}var b=u.a.table(d()),f=u.a.th(m()),h=u.a.td(i());function g(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("header",null,a.a.createElement("p",null,"Custom React table component"),a.a.createElement(p,{data:w,columns:E})))}var w=[{col1:"Hello",col2:"World"},{col1:"react-table",col2:"rocks"},{col1:"whatever",col2:"you want"}],E=[{Header:"Column 1",accessor:"col1"},{Header:"Column 2",accessor:"col2"}];Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.e13c0d92.chunk.js.map