(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{oVj8:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return s})),a.d(t,"renderToDom",(function(){return c}));var n=a("q1tI"),r=a("i8i4"),o=a("oXiK");function i(e){return n.createElement("div",{className:"control-panel"},n.createElement("h3",null,"3D Terrain"),n.createElement("p",null,"Add 3D terrain and sky to a map."),n.createElement("div",{className:"source-link"},n.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/6.1-release/examples/terrain",target:"_new"},"View Code ↗")))}var l=n.memo(i),m={id:"sky",type:"sky",paint:{"sky-type":"atmosphere","sky-atmosphere-sun":[0,0],"sky-atmosphere-sun-intensity":15}};function s(){var e=Object(n.useState)({latitude:32.6141,longitude:-114.34411,zoom:14,bearing:80,pitch:80}),t=e[0],a=e[1],r=Object(n.useCallback)((function(e){e.target.setTerrain({source:"mapbox-dem",exaggeration:1.5})}),[]);return n.createElement(n.Fragment,null,n.createElement(o.default,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/satellite-v9",onViewportChange:a,mapboxApiAccessToken:"",onLoad:r}),n.createElement(o.Source,{id:"mapbox-dem",type:"raster-dem",url:"mapbox://mapbox.mapbox-terrain-dem-v1",tileSize:512,maxzoom:14}),n.createElement(o.Layer,m)),n.createElement(l,null))}function c(e){Object(r.render)(n.createElement(s,null),e)}}}]);