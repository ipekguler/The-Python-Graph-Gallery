(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),c=t("NDdm"),i=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,r=e.link,o=i.includes(a);return l.a.createElement(l.a.Fragment,null,o?l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Link,{to:r},l.a.createElement(c.a,{chartType:a})),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sectionLogoContainer"},l.a.createElement(n.Link,{to:r},l.a.createElement(c.a,{chartType:a}),l.a.createElement("div",{className:"sectionLogoOverlay"},l.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.noGutters,u=e.as,d=void 0===u?"div":u,p=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(s.a)(t,"row"),f=h+"-cols",E=[];return m.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&E.push(""+f+n+"-"+a)})),o.a.createElement(d,Object(n.a)({ref:a},p,{className:c.a.apply(void 0,[l,h,i&&"no-gutters"].concat(E))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("a4DA");var n=t("q1tI"),r=t.n(n),l=t("AkXV"),c=t("cWnB"),i=t("Wbzz"),o=t("qXiB"),s=t("jhdv");function m(e){var a=e.title,t=e.description,n=e.chartType,m=o.a.filter((function(e){return e.id===n}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"titleAndDescription"},r.a.createElement("h1",{className:"mainTitle"},a),r.a.createElement("hr",{className:"smallHr"}),r.a.createElement(l.a,null),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(i.Link,{to:Object(s.a)(m.pythonURL)},r.a.createElement(c.a,{size:"sm"},m.label+" section")),r.a.createElement("a",{href:m.dataToVizURL},r.a.createElement(c.a,{size:"sm"},"About this chart")))))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),r=t.n(n),l=t("eynx"),c=t("JI6e"),i=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return r.a.createElement(c.a,{xs:12,md:4},r.a.createElement(i.Link,{to:n},r.a.createElement(l.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),c=t.n(l),i=t("q1tI"),o=t.n(i),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,i=e.as,u=void 0===i?"div":i,d=Object(r.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(t,"col"),h=[],f=[];return m.forEach((function(e){var a,t,n,r=d[e];if(delete d[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+p+c:""+p+c+"-"+a),null!=n&&f.push("order"+c+"-"+n),null!=t&&f.push("offset"+c+"-"+t)})),h.length||h.push(p),o.a.createElement(u,Object(n.a)({},d,{ref:a,className:c.a.apply(void 0,[l].concat(h,f))}))}));u.displayName="Col",a.a=u},PSLu:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t("q1tI"),r=t.n(n),l=t("4/Vk"),c=t("7oih"),i=t("7vrA"),o=t("6+GL"),s=t("3Z9Z"),m=t("59G+"),u=t("pJaR"),d=t("Wbzz"),p=t("eynx"),h=t("gMBH"),f=t("cWnB");function E(){return r.a.createElement(c.a,{title:"Connection Map",isTocEnabled:!0,seoDescription:"A collection of connection map examples made with Python, coming with explanation and reproducible code"},r.a.createElement(l.a,{title:"Connection Map",description:"<p>A <a href='https://www.data-to-viz.com/story/MapConnection.html'>connection map</a> allows to show the connection between several positions on a map. The link between 2 places can be drawn with a straight line, or more commonly using <code>great circles</code>: the shortest route between them. The earth beeing a sphere, it results in arcs that give a really pleasant look to the map.</p>"}),r.a.createElement(i.a,null,r.a.createElement("h2",{id:"Basemap"},"Background map with ",r.a.createElement("code",null,"Basemap")),r.a.createElement("p",null,r.a.createElement("code",null,"Basemap")," is probably the best option to draw a connection map with ",r.a.createElement("code",null,"python"),". It provides a function called",r.a.createElement("code",null,"drawgreatcircle()")," that draws the connection using great circles. Great circles are arcs that gives a better appearance than straight lines."),r.a.createElement(s.a,null,r.a.createElement(m.a,{imgName:"300-draw-a-connection-line1",caption:"Most basic connection map with Python and Basemap.",linkTo:"/300-draw-a-connection-line"}),r.a.createElement(m.a,{imgName:"300-draw-a-connection-line2",caption:"Show connection between a few cities with great circles.",linkTo:"/300-draw-a-connection-line"})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"This is the result when you visualize the connection between 7 major world cities:"),r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(d.Link,{to:"/300-draw-a-connection-line"},r.a.createElement(p.a,{imgName:"300-draw-a-connection-line3",caption:"A connection map between 7 cities made with Python and Basemap"}))),r.a.createElement(d.Link,{to:"/300-draw-a-connection-line"},r.a.createElement(f.a,{size:"sm"},"Code and explanation"))),r.a.createElement(h.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(i.a,null,r.a.createElement(u.a,{chartFamily:"map"}))),r.a.createElement(h.a,null),r.a.createElement(i.a,null,r.a.createElement(o.a,null)),r.a.createElement(h.a,null))}},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("2mCb");var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),c=t("9eSz"),i=t.n(c),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var a=e.imgName,t=e.caption;if(o.includes(a))return r.a.createElement("p",null,"TODO");var n=Object(l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(i.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),r=t.n(n),l=t("3Z9Z"),c=t("JI6e"),i=t("2Bqf"),o=t("qXiB"),s=t("jhdv"),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(s.a)(e.pythonURL);return r.a.createElement(c.a,{key:a,xs:4,md:2},r.a.createElement(i.a,{link:t,chartType:e.logo,caption:e.label}))}));return r.a.createElement("div",null,r.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==m?void 0:m[a]),r.a.createElement(l.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-connection-map-js-bd14c2547a89a026b35e.js.map