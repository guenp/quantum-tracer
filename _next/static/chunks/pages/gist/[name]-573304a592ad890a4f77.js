(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31],{3445:function(n,e,t){"use strict";t.d(e,{y:function(){return a},Z:function(){return u}});var i=t(9008),r=t(4608),o=t.n(r),c=t(5893),a="Quantum Tracer";function u(n){var e=n.children;n.home;return(0,c.jsxs)("div",{className:o().container,children:[(0,c.jsxs)(i.default,{children:[(0,c.jsx)("title",{children:a}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)("div",{className:o().main,children:e}),(0,c.jsx)("div",{className:o().footer,children:(0,c.jsxs)("a",{href:"https://microsoft.com/quantum",target:"_blank",rel:"noopener noreferrer",children:[" ",(0,c.jsx)("img",{src:"https://raw.githubusercontent.com/guenp/quantum-tracer/main/public/quantum.png",alt:"Microsoft Azure Quantum",className:o().logo})]})})]})}},6084:function(n,e,t){"use strict";t.d(e,{S:function(){return f},q:function(){return h}});var i=t(8120),r=t.n(i),o=t(2503),c=t(7294),a=t(7828),u=t(5893),s="https://api.github.com",d=function(n,e){return"".concat(n,"/").concat(e)},l=function(n){return fetch(n).then((function(n){return n.json()}))},f=function(n){var e=(0,o.ZP)(function(n){return"".concat(s,"/users/").concat(n,"/gists")}(n),l),t=e.data,i=void 0===t?[]:t;return e.error?(0,u.jsx)("div",{children:"Failed to load gists"}):i.length?i.map((function(n){return(0,u.jsx)("div",{children:(0,u.jsxs)("a",{href:d(n.owner.login,n.id),children:[" ",n.description]})},n.id)})):(0,u.jsx)("div",{children:"loading..."})},h=function(n){var e=(0,o.ZP)(n?function(n){return"".concat(s,"/gists/").concat(n)}(n[1]):null,l),i=e.data,d=void 0===i?{}:i,f=e.error;return(0,c.useEffect)((function(){t.e(408).then(t.t.bind(t,4408,23)).then((function(n){return f?(0,u.jsx)("div",{children:"Failed to load gist"}):d.files?Object.keys(d.files).map((function(e){var t=d.files[e],i=document.getElementById("qvizid");if("circuit.json"==t.filename){var r=JSON.parse(t.content);n.draw(r,i,n.STYLES.Default)}})):(0,u.jsx)("div",{children:"loading..."})}))})),f?(0,u.jsx)("div",{children:"Failed to load gist"}):d.files?Object.keys(d.files).map((function(n){var e=d.files[n];return"README.md"==e.filename?(0,u.jsx)("div",{className:r().readme,children:(0,u.jsx)(a.Z,{children:e.content})},n):"circuit.json"!=e.filename?(0,u.jsx)("div",{children:(0,u.jsx)("a",{href:e.raw_url,children:e.filename})},n):void 0})):(0,u.jsx)("div",{children:"loading..."})}},4035:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return a}});var i=t(3445),r=t(6084),o=t(1163),c=t(5893);function a(){var n=(0,o.useRouter)().query.name,e=(0,r.S)(n);return(0,c.jsxs)(i.Z,{children:[n,"'s gists:",(0,c.jsx)("div",{children:e})]})}},8308:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gist/[name]",function(){return t(4035)}])},4608:function(n){n.exports={container:"layout_container__2t4v2",header:"layout_header__2rhWq",backToHome:"layout_backToHome__1vZsp",main:"layout_main__26dVU",description:"layout_description__2cPef",footer:"layout_footer__127N0",logo:"layout_logo__EKJ3d"}},8120:function(n){n.exports={readme:"github_readme__3p5dL"}}},function(n){n.O(0,[774,717,888,179],(function(){return e=8308,n(n.s=e);var e}));var e=n.O();_N_E=e}]);