(this.webpackJsonpreact_frontend=this.webpackJsonpreact_frontend||[]).push([[0],{104:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),i=a.n(c),o=(a(70),a(15)),s=a(16),l=a(18),m=a(17),u=a(14),p=a(2),E=(a(71),a(48)),d=a.n(E),h=a(29),f=a(32),b=a.n(f),v=a(51),g=a(52),y=a.n(g);function O(e){return function(){var t=Object(v.a)(b.a.mark((function t(a){var n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a({type:"REQUEST_STARTED"}),n="".concat("https://hidden-chamber-04395.herokuapp.com","/items"),e.category&&(n+="?category="+e.category),y.a.get(n).then((function(e){return a({type:"REQUEST_ITEMS_SUCCESS",items:e})}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}a(97);var S=a(27),k=a.n(S),N=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"priceFormat",value:function(e){return parseFloat(e).toFixed(0)}},{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("a",{href:this.props.item.url,target:"_blank"},r.a.createElement("div",{className:"card-image-wrapper"},r.a.createElement("img",{className:"card-image",src:this.props.item.photos[0].url,alt:this.props.item.name})),r.a.createElement("div",{className:"item-header"},r.a.createElement("h3",{className:"item-name"},this.props.item.name),r.a.createElement("div",{className:"item-price"},this.priceFormat(this.props.item.price_current)," z\u0142"))),r.a.createElement("div",{className:"card-content-hover"},r.a.createElement("div",{className:"btn-primary btn-round-small btn-hover-darken flex-middle item-favourite",to:"/"},r.a.createElement(k.a,{color:"white",fontSize:"1.5em"}))))}}]),a}(r.a.Component),j=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchItems({category:this.props.category})}},{key:"render",value:function(){return!0===this.props.items.isLoading?r.a.createElement("div",{className:"spinner-loading"},r.a.createElement(d.a,{color:"#fa6266"})):r.a.createElement("div",{className:"item-gallery-layout"},this.props.items.items.data.map((function(e,t){return r.a.createElement(N,{key:t,item:e})})))}}]),a}(r.a.Component),w=Object(h.b)((function(e){return{items:e.itemsReducer}}),{fetchItems:O})(j),_=a(119),T=(a(104),a(55)),x=a.n(T),z=a(56),R=a.n(z),I=a(57),C=a.n(I),U=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"content"},r.a.createElement("nav",{id:"nav",className:"nav"},r.a.createElement(_.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center"},r.a.createElement("div",{className:"m-right"}),r.a.createElement(_.a,{container:!0,direction:"row",justify:"center",alignItems:"center",item:!0,lg:10},r.a.createElement(u.b,{className:"btn-primary",to:"/"},"Strona g\u0142\xf3wna"),r.a.createElement(u.b,{className:"btn-primary",to:"/popularne"},"Popularne"),r.a.createElement(u.b,{className:"btn-primary",to:"/kategorie"},"Kategorie"),r.a.createElement(u.b,{className:"btn-primary",to:"/ostatnio-przegladane"},"Ostatnio przegl\u0105dane"),r.a.createElement("div",{className:"relative"},r.a.createElement("input",{className:"search main-search",type:"text",placeholder:"Szukaj..",name:"main-search"}),r.a.createElement(C.a,{className:"search-icon",color:"#888",fontSize:"1.8em"})),r.a.createElement(u.b,{className:"btn-primary btn-round flex-middle",to:"/ulubione"},r.a.createElement(k.a,{color:"white",fontSize:"1.5em"}))),r.a.createElement("div",{className:"btn flex-middle"},r.a.createElement(R.a,{color:"black",fontSize:"3em"}),r.a.createElement(x.a,{color:"black",fontSize:"1.5em"})))),r.a.createElement(p.c,null,r.a.createElement(p.a,{exact:!0,path:"/popularne"},r.a.createElement(w,{key:"popular",category:"popular"})),r.a.createElement(p.a,{exact:!0,path:"/kategorie"},r.a.createElement(w,{key:"categories",category:"categories"})),r.a.createElement(p.a,{exact:!0,path:"/ostatnio-przegladane"},r.a.createElement(w,{key:"last-viewed",category:"last-viewed"})),r.a.createElement(p.a,{exact:!0,path:"/ulubione"},r.a.createElement(w,{key:"favourites",category:"favourites"})),r.a.createElement(p.a,{exact:!0,path:"*"},r.a.createElement(w,{key:"home"})))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(11),D=a(61),F={isLoading:!0,items:null,error:null},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_STARTED":return Object.assign({},e,{isLoading:!0});case"REQUEST_ITEMS_SUCCESS":return Object.assign({},e,{isLoading:!1,items:t.items});case"REQUEST_FAILED":return Object.assign({},e,{isLoading:!1,error:t.error});default:return e}},Q=Object(L.c)({itemsReducer:M}),A=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||L.d,B=Object(L.e)(Q,A(Object(L.a)(D.a)));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h.a,{store:B},r.a.createElement(U,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},65:function(e,t,a){e.exports=a(107)},70:function(e,t,a){},71:function(e,t,a){},97:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.a90d8f48.chunk.js.map