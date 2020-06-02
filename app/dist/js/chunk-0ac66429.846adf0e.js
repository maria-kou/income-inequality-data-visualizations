(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ac66429"],{"09e0":function(t,e,n){},"2b56":function(t,e,n){"use strict";var i=n("09e0"),a=n.n(i);a.a},7277:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mt-5 pb-5"},[t._m(0),n("hr"),n("div",{staticClass:"row mt-5"},[n("div",{staticClass:"col-12"},[n("div",{staticClass:"border d3-container"},[n("button",{staticStyle:{width:"100px"},on:{click:function(e){t.show="intro"}}},[t._v("Introduction")]),n("button",{staticStyle:{width:"100px"},on:{click:function(e){t.show="map"}}},[t._v("Map")])])])]),t._m(1),n("div",{directives:[{name:"show",rawName:"v-show",value:"intro"===t.show,expression:"show==='intro'"}],staticClass:"row mt-5"},[t._m(2),n("div",{staticClass:"col-6"},[n("Pie")],1)])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-12"},[n("h1",{staticClass:"m-0"},[t._v("Dashboard")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-5"},[n("div",{staticStyle:{width:"100%",height:"700px","padding-left":"15px","padding-right":"15px"},attrs:{id:"vizContainer"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6"},[n("p",[t._v(" Income inequality gains significance from its close relationship with social injustice, and it has been the subject of research by philosophers, political scientists, sociologists and economists. Classical economists were interested in the distribution of income among various sections of the populations. This project concentrates on the study of personal income distribution utilizing data sources and employing several statistics for the modeling of world income inequality. Specifically, we want to demonstrate the economic inequalities per country, using the GINI index and correlations to other social vectors like gender inequalities, unemployment, crime and poverty. The project aims to provide graphs and visualizations that depict these correlations as well as helping the reader lead to assumptions. ")])])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"arc"}})},r=[],s=(n("99af"),{data:function(){return{gdp:[{country:"USA",value:20.5},{country:"China",value:13.4},{country:"Germany",value:4},{country:"Japan",value:4.9},{country:"France",value:2.8}]}},mounted:function(){this.generateArc()},methods:{generateArc:function(){var t=500,e=500,n=window.d3.select("#arc").append("svg").attr("width",t).attr("height",e),i=this.gdp.sort((function(t,e){return t.value>e.value?1:-1})),a=window.d3.scaleOrdinal(window.d3.schemeDark2),o=window.d3.max(i,(function(t){return t.value})),r=window.d3.scaleLinear().domain([0,o]).range([0,1.5*Math.PI]),s=window.d3.arc().innerRadius((function(t,e){return 25*(e+1)})).outerRadius((function(t,e){return 25*(e+2)})).startAngle(r(0)).endAngle((function(t){return r(t.value)})),c=n.append("g");c.selectAll("path").data(i).enter().append("path").attr("d",s).attr("fill",(function(t,e){return a(e)})).attr("stroke","#FFF").attr("stroke-width","1px").on("mouseenter",(function(){window.d3.select(this).transition().duration(200).attr("opacity",.5)})).on("mouseout",(function(){window.d3.select(this).transition().duration(200).attr("opacity",1)})),c.selectAll("text").data(this.gdp).enter().append("text").text((function(t){return"".concat(t.country," -  ").concat(t.value," Trillion")})).attr("x",-150).attr("dy",-8).attr("y",(function(t,e){return 25*-(e+1)})),c.attr("transform","translate(200,150)")}}}),c=s,l=n("2877"),u=Object(l["a"])(c,o,r,!1,null,null,null),d=u.exports,h={components:{Pie:d},data:function(){return{loading:!0,show:"intro"}},mounted:function(){this.initViz()},methods:{initViz:function(){var t=this,e=document.getElementById("vizContainer"),n="https://public.tableau.com/views/INCOME-INEQUALITY/Sheet1?:display_count=y&publish=yes&:origin=viz_share_link",i={hideTabs:!0,width:"100%",height:"600px",onFirstInteractive:function(){console.log("Run this code when the viz has finished loading."),t.loading=!1}},a=new window.tableau.Viz(e,n,i);console.log(a)}}},p=h,f=(n("2b56"),Object(l["a"])(p,i,a,!1,null,null,null));e["default"]=f.exports},8418:function(t,e,n){"use strict";var i=n("c04e"),a=n("9bf2"),o=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?a.f(t,r,o(0,n)):t[r]=n}},"99af":function(t,e,n){"use strict";var i=n("23e7"),a=n("d039"),o=n("e8b5"),r=n("861d"),s=n("7b0b"),c=n("50c4"),l=n("8418"),u=n("65f0"),d=n("1dde"),h=n("b622"),p=n("2d00"),f=h("isConcatSpreadable"),v=9007199254740991,w="Maximum allowed index exceeded",m=p>=51||!a((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),g=d("concat"),y=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:o(t)},b=!m||!g;i({target:"Array",proto:!0,forced:b},{concat:function(t){var e,n,i,a,o,r=s(this),d=u(r,0),h=0;for(e=-1,i=arguments.length;e<i;e++)if(o=-1===e?r:arguments[e],y(o)){if(a=c(o.length),h+a>v)throw TypeError(w);for(n=0;n<a;n++,h++)n in o&&l(d,h,o[n])}else{if(h>=v)throw TypeError(w);l(d,h++,o)}return d.length=h,d}})}}]);
//# sourceMappingURL=chunk-0ac66429.846adf0e.js.map