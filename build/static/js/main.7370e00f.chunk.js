(this["webpackJsonpastro-react-redux"]=this["webpackJsonpastro-react-redux"]||[]).push([[0],{11:function(e,t,n){e.exports=n.p+"static/media/guess.fdc4060f.mp3"},12:function(e,t,n){e.exports=n.p+"static/media/pass.90dee89d.mp3"},13:function(e,t,n){e.exports=n.p+"static/media/start.26dce6d5.mp3"},15:function(e,t,n){e.exports=n(27)},26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(5),c=n.n(l),o=n(1);var s=function(){var e=["The Forever War","I Am Legend","Cities in Flight","The Stars My Destination","The Man in the High Castle","Lord of Light","The Fifth Head of Cerberus","Gateway","The Rediscovery of Man","Last and First Men","Earth Abides","The Demolished Men","Stand on Zanzibar","The Dispossessed","The Drowned World","The Sirens of Titan","Emphyrio","A Scanner Darkly","Star Maker","Behold the Men","The Book of Skulls","The Time Machine","The War of the Worlds","Flowers for Algernon","Ubik","Timescape","More Than Human","Man Plus","A Case of Conscience","The Centauri Device","Dr Bloodmoney","The Fountains of Paradise","Pavane","Now Wait for Last Year","Nova","The First Men in the Moon","The City and the Stars","Blood Music","Jem","Bring the Jubilee","VALIS","The Lathe of Heaven","The Complete Roderick","The Invisible Man","Grass","A Fall of Moondust","Eon","The Shrinking Man","The Three Stigmata of Palmer Eldritch","The Dancers at the End of Time","The Space Merchants","Time Out of Joint","Downward to the Earth","The Simulacra","The Penultimate Truth","Dying Inside","Ringworld","The Child Garden","Mission of Gravity","A Maze of Death","Tau Zero","Rendezvous with Rama","Life During Wartime","Where Late the Sweet Birds Sang","Roadside Picnic","Dark Benediction","Mockingbird","Dune","The Moon Is a Harsh Mistress"];return function(){return e[Math.floor(Math.random()*e.length)]}}(),i=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],u=n(4),m=n.n(u);var d=function(){var e=Object(o.b)(),t=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn",onClick:function(){t.current.play(),e({type:"OPEN_OPTIONS"})}},"OPTIONS"),r.a.createElement("audio",{src:m.a,ref:t}))},f=n(3),v=n(2),E={bookKey:[],roundProgress:["MISSION: UNCOVER THE TITLES OF SCI-FI MASTERWORKS"],uniqueLettersNo:0,nextTurnIsPL1:!0,passIsAllowed:!1,pointsPL1:0,pointsPL2:0,chancesPL1:8,chancesPL2:8,level:1,gameOver:!1,availLetters:[]},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_LEVEL":var n=t.payload,a=n.toUpperCase().split(""),r=a.map((function(e){return" "===e?" ":"_"})),l=a.filter((function(e,t,n){return n.indexOf(e)===t})).filter((function(e){return" "!==e}));return Object(v.a)({},e,{bookKey:a,roundProgress:r,uniqueLettersNo:l.length,availLetters:i});case"MAKE_MOVE":var c=function(){for(var n=t.payload.toUpperCase(),a=e.bookKey.some((function(e){return e===n})),r=e.bookKey.map((function(t,a){return t===n?n:e.roundProgress[a]}));e.uniqueLettersNo>1;){if(a)return{v:Object(v.a)({},e,{roundProgress:r,uniqueLettersNo:e.uniqueLettersNo-1,passIsAllowed:!0,availLetters:e.availLetters.filter((function(e){return e!==n}))})};if(e.nextTurnIsPL1&&0===e.chancesPL1||!e.nextTurnIsPL1&&0===e.chancesPL2)return{v:Object(v.a)({},e,{gameOver:!0})};if(e.nextTurnIsPL1)return{v:Object(v.a)({},e,{nextTurnIsPL1:!e.nextTurnIsPL1,chancesPL1:e.chancesPL1-1,passIsAllowed:!1,availLetters:e.availLetters.filter((function(e){return e!==n}))})};if(!e.nextTurnIsPL1)return{v:Object(v.a)({},e,{nextTurnIsPL1:!e.nextTurnIsPL1,chancesPL2:e.chancesPL2-1,passIsAllowed:!1,availLetters:e.availLetters.filter((function(e){return e!==n}))})}}if(a){if(e.nextTurnIsPL1)return{v:Object(v.a)({},e,{roundProgress:r,pointsPL1:e.pointsPL1+1,uniqueLettersNo:e.uniqueLettersNo-1,passIsAllowed:!1,availLetters:[],level:e.level+1})};if(!e.nextTurnIsPL1)return{v:Object(v.a)({},e,{roundProgress:r,pointsPL2:e.pointsPL2+1,uniqueLettersNo:e.uniqueLettersNo-1,passIsAllowed:!1,availLetters:[],level:e.level+1})}}return e.nextTurnIsPL1&&0===e.chancesPL1||!e.nextTurnIsPL1&&0===e.chancesPL2?{v:Object(v.a)({},e,{gameOver:!0})}:e.nextTurnIsPL1?{v:Object(v.a)({},e,{nextTurnIsPL1:!e.nextTurnIsPL1,chancesPL1:e.chancesPL1-1,passIsAllowed:!1,availLetters:e.availLetters.filter((function(e){return e!==n}))})}:{v:Object(v.a)({},e,{nextTurnIsPL1:!e.nextTurnIsPL1,chancesPL2:e.chancesPL2-1,passIsAllowed:!1,availLetters:e.availLetters.filter((function(e){return e!==n}))})}}();if("object"===typeof c)return c.v;case"PASS_TURN":return Object(v.a)({},e,{nextTurnIsPL1:!e.nextTurnIsPL1,passIsAllowed:!1});case"RESET_GAME":return E;default:return e}},b={optionsModalIsOpen:!1,quitModalIsOpen:!1},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"OPEN_OPTIONS":return Object(v.a)({},e,{optionsModalIsOpen:!0});case"CLOSE_OPTIONS":return Object(v.a)({},e,{optionsModalIsOpen:!1});case"QUIT_GAME":return{optionsModalIsOpen:!1,quitModalIsOpen:!0};case"RESET_GAME":return b;default:return e}},p=Object(f.c)({game:h,ui:T}),L=function(e){return function(e){return"Level ".concat(e.level)}(e.game)},P=function(e){return function(e){return e.roundProgress.join("")}(e.game)},O=function(e){return function(e){return e.availLetters.map((function(e){return e.toLowerCase()}))}(e.game)},g=function(e){return function(e){return e.nextTurnIsPL1}(e.game)},N=function(e){return function(e){return e.passIsAllowed}(e.game)},I=function(e){return function(e){return e.chancesPL1}(e.game)},y=function(e){return function(e){return e.chancesPL2}(e.game)},_=function(e){return function(e){return 0===e.uniqueLettersNo}(e.game)},j=function(e){return function(e){return e.pointsPL1}(e.game)},M=function(e){return function(e){return e.pointsPL2}(e.game)},S=function(e){return function(e){return e.gameOver}(e.game)},A=function(e){return function(e){return e.pointsPL1>e.pointsPL2?"Player 1 wins":e.pointsPL1<e.pointsPL2?"Player 2 wins":e.chancesPL1>e.chancesPL2?"Player 1 wins":"Player 2 wins"}(e.game)},R=function(e){return function(e){return e.optionsModalIsOpen}(e.ui)},w=function(e){return function(e){return e.quitModalIsOpen}(e.ui)};var k=function(){return r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 80 80",className:"o-star"},r.a.createElement("polygon",{points:"0,30 30,28 40,0 50,28 80,30 56,47 64,77 40,60 14,77 22,47 0,30",fill:"yellow"}))};var x=function(){var e=Object(o.b)(),t=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn o-btn--modal",onClick:function(){t.current.play(),e({type:"RESET_GAME"})}},"RESET GAME"),r.a.createElement("audio",{src:m.a,ref:t}))};var C=function(){var e=Object(o.b)(),t=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn o-btn--modal",onClick:function(){t.current.play(),e({type:"QUIT_GAME"})}},"QUIT GAME"),r.a.createElement("audio",{src:m.a,ref:t}))};var G=function(){var e=Object(o.b)(),t=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn o-btn--modal",onClick:function(){t.current.play(),e({type:"CLOSE_OPTIONS"})}},"BACK"),r.a.createElement("audio",{src:m.a,ref:t}))};var D=function(){var e=Object(o.c)(R);return r.a.createElement("div",{className:e?"c-modal c-modal--is-open":"c-modal"},r.a.createElement("div",{className:"c-modal__content"},r.a.createElement("h1",{className:"t1"},"OPTIONS:"),r.a.createElement("div",{className:"c-modal__stars"},r.a.createElement(k,null)," ",r.a.createElement(k,null)," ",r.a.createElement(k,null)),r.a.createElement(x,null),r.a.createElement(C,null),r.a.createElement(G,null),r.a.createElement("div",{className:"c-modal__stars"},r.a.createElement(k,null)," ",r.a.createElement(k,null)," ",r.a.createElement(k,null))))};var q=function(){var e=Object(o.c)(L);return r.a.createElement("div",null,e)};var F=function(){var e=Object(o.c)(P);return r.a.createElement("div",{className:"c-round-progress t1"},e)},W=n(11),B=n.n(W);var K=function(){var e=Object(o.c)(O),t=Object(o.b)(),n=Object(a.useRef)(null);function l(e){var a=e.target.getAttribute("data-letter");t(function(e){return{type:"MAKE_MOVE",payload:e}}(a)),n.current.play()}var c=i.map((function(t){var n=!e.includes(t.toLowerCase());return r.a.createElement("li",{key:t.toLowerCase(),className:"l-list__item"},r.a.createElement("button",{type:"button",className:"o-btn o-btn--letter","data-letter":t.toLowerCase(),onClick:l,disabled:n},t))}));return r.a.createElement("div",null,r.a.createElement("ul",{className:"l-list"},c),r.a.createElement("audio",{src:B.a,ref:n}))},U=n(12),H=n.n(U);var V=function(){var e=Object(o.b)(),t=!Object(o.c)(N),n=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn",disabled:t,onClick:function(){n.current.play(),e({type:"PASS_TURN"})}},"PASS"),r.a.createElement("audio",{src:H.a,ref:n}))},J=n(13),Q=n.n(J);var Y=function(){var e=Object(o.b)(),t=!Object(o.c)(_),n=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn",onClick:function(){e({type:"START_LEVEL",payload:s()}),n.current.play()},disabled:t},"START"),r.a.createElement("audio",{src:Q.a,ref:n}))};function z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";e.beginPath(),e.lineWidth=6,e.strokeStyle=t,e.fillStyle="black",e.moveTo(140,20),e.lineTo(140,80),e.moveTo(240,180),e.arc(140,180,100,0,2*Math.PI),e.stroke(),e.fillRect(60,130,160,60),e.strokeRect(60,130,160,60),e.closePath(),e.beginPath(),e.arc(140,180,80,.25*Math.PI,.75*Math.PI),e.stroke()}function Z(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";z(e,t),e.moveTo(140,20),e.lineTo(0,20),e.stroke()}function X(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";z(e,t),e.moveTo(140,20),e.lineTo(280,20),e.stroke()}function $(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";e.beginPath(),e.lineWidth=6,e.strokeStyle=t,e.moveTo(20,460),e.lineTo(20,140),e.arc(80,140,60,Math.PI,0),e.lineTo(140,460),e.closePath(),e.moveTo(140,460),e.lineTo(260,460),e.lineTo(260,140),e.moveTo(140,140),e.arc(200,140,60,Math.PI,0),e.moveTo(80,80),e.lineTo(80,60),e.lineTo(200,60),e.lineTo(200,80),e.moveTo(140,60),e.lineTo(140,20),e.stroke()}function ee(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";$(e,t),e.lineTo(280,20),e.stroke()}function te(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"grey";$(e,t),e.lineTo(0,20),e.stroke()}function ne(e){e.beginPath(),e.lineWidth=5,e.fillStyle="#158fe6",e.rect(40,120,80,320),e.rect(160,120,80,320),e.fill()}function ae(e,t){8===t?ne(e):7===t?e.clearRect(160,120,80,80):6===t?e.clearRect(160,200,80,80):5===t?e.clearRect(160,280,80,80):4===t?e.clearRect(160,360,80,80):3===t?e.clearRect(40,120,80,80):2===t?e.clearRect(40,200,80,80):1===t?e.clearRect(40,280,80,80):0===t?e.clearRect(40,360,80,80):ne(e)}var re=function(){var e=Object(a.useRef)(null),t=Object(o.c)(I),n=Object(o.c)(g);return Object(a.useEffect)((function(){var a=e.current.getContext("2d");n?setTimeout((function(){ee(a,"#d15000")}),500):setTimeout((function(){ee(a)}),500),setTimeout((function(){ae(a,t)}),500)}),[t,n]),r.a.createElement("canvas",{ref:e,width:"280",height:"480",className:"c-canvas"})};var le=function(){var e=Object(a.useRef)(null),t=Object(o.c)(y),n=!Object(o.c)(g);return Object(a.useEffect)((function(){var a=e.current.getContext("2d");n?setTimeout((function(){te(a,"#d15000")}),500):setTimeout((function(){te(a)}),500),setTimeout((function(){ae(a,t)}),500)}),[t,n]),r.a.createElement("canvas",{ref:e,width:"280",height:"480",className:"c-canvas"})};var ce=function(){var e=Object(a.useRef)(null),t=Object(o.c)(g);return Object(a.useEffect)((function(){var n=e.current.getContext("2d");t?setTimeout((function(){Z(n,"#d15000")}),500):setTimeout((function(){Z(n)}),500)}),[t]),r.a.createElement("canvas",{ref:e,width:"280",height:"300",className:"c-canvas"})};var oe=function(){var e=Object(a.useRef)(null),t=!Object(o.c)(g);return Object(a.useEffect)((function(){var n=e.current.getContext("2d");t?setTimeout((function(){X(n,"#d15000")}),500):setTimeout((function(){X(n)}),500)}),[t]),r.a.createElement("canvas",{ref:e,width:"280",height:"300",className:"c-canvas"})};var se=function(){var e=Object(o.c)(j);return r.a.createElement("div",{className:"c-points t1"},r.a.createElement("span",{className:"c-points__star"},r.a.createElement(k,null)),e)};var ie=function(){var e=Object(o.c)(M);return r.a.createElement("div",{className:"c-points t1"},e,r.a.createElement("span",{className:"c-points__star"},r.a.createElement(k,null)))};var ue=function(){var e=Object(o.c)(A);return r.a.createElement("p",null,e)};var me=function(){var e=Object(o.b)(),t=Object(a.useRef)(null);return r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"o-btn o-btn--modal",onClick:function(){t.current.play(),e({type:"RESET_GAME"})}},"PLAY AGAIN"),r.a.createElement("audio",{src:m.a,ref:t}))};var de=function(){var e=Object(o.c)(S);return r.a.createElement("div",{className:e?"c-modal c-modal--is-open":"c-modal"},r.a.createElement("div",{className:"c-modal__content"},r.a.createElement("h1",{className:"t1"},"GAME OVER"),r.a.createElement(ue,null),r.a.createElement("div",{className:"c-modal__stars"},r.a.createElement(k,null)," ",r.a.createElement(k,null)," ",r.a.createElement(k,null)),r.a.createElement(me,null),r.a.createElement(C,null),r.a.createElement("div",{className:"c-modal__stars"},r.a.createElement(k,null)," ",r.a.createElement(k,null)," ",r.a.createElement(k,null))))};var fe=function(){var e=Object(o.c)(w);return r.a.createElement("div",{className:e?"c-modal c-modal--is-open":"c-modal"},r.a.createElement("div",{className:"c-modal__content"},r.a.createElement("div",{className:"c-modal__stars"},r.a.createElement(k,null)," ",r.a.createElement(k,null)," ",r.a.createElement(k,null)),r.a.createElement("p",{className:"t1"},"THANKS ",r.a.createElement("br",null),"FOR ",r.a.createElement("br",null),"PLAYING"),r.a.createElement("div",{className:"c-modal__stars"},r.a.createElement(k,null)," ",r.a.createElement(k,null)," ",r.a.createElement(k,null))))};var ve=function(){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement(de,null),r.a.createElement(fe,null),r.a.createElement("div",{className:"l-grid"},r.a.createElement("div",{className:"l-grid__item-header"},r.a.createElement("header",{className:"c-header"},r.a.createElement("h1",{className:"t2"},"Astroman"),r.a.createElement("nav",null,r.a.createElement(d,null)))),r.a.createElement("div",{className:"l-grid__item-level"},r.a.createElement(q,null),r.a.createElement(Y,null)),r.a.createElement("div",{className:"l-grid__item-book"},r.a.createElement(F,null)),r.a.createElement("div",{className:"l-grid__item-letters"},r.a.createElement(K,null),r.a.createElement(V,null)),r.a.createElement("div",{className:"l-grid__item-tankPL1"},r.a.createElement(re,null)),r.a.createElement("div",{className:"l-grid__item-headPL1"},r.a.createElement(ce,null)),r.a.createElement("div",{className:"l-grid__item-pointsPL1"},r.a.createElement(se,null)),r.a.createElement("div",{className:"l-grid__item-pointsPL2"},r.a.createElement(ie,null)),r.a.createElement("div",{className:"l-grid__item-headPL2"},r.a.createElement(oe,null)),r.a.createElement("div",{className:"l-grid__item-tankPL2"},r.a.createElement(le,null))))},Ee=n(14),he=Object(Ee.a)({reducer:p});n(26);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:he},r.a.createElement(ve,null))),document.getElementById("root"))},4:function(e,t,n){e.exports=n.p+"static/media/menu.3c40b1ad.wav"}},[[15,1,2]]]);
//# sourceMappingURL=main.7370e00f.chunk.js.map