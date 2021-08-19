(this["webpackJsonpmirea-button"]=this["webpackJsonpmirea-button"]||[]).push([[4],{557:function(e,t,a){"use strict";var r=a(0),n=a(114),o=a(33),l=Object(r.memo)((function(e){var t=e.title,a=e.description,l=e.seo;return r.createElement(n.a,{defer:!0},r.createElement("title",null,t),r.createElement("link",{rel:"icon",href:"".concat("https://mirea-button.github.io","/favicon.ico")}),r.createElement("link",{rel:"manifest",href:"".concat("https://mirea-button.github.io","/manifest.json")}),r.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("https://mirea-button.github.io","/apple-touch-icon.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("https://mirea-button.github.io","/favicon-32x32.png")}),r.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("https://mirea-button.github.io","/favicon-16x16.png")}),r.createElement("meta",{name:"description",content:a}),r.createElement("meta",{name:"image",content:l.image}),r.createElement("meta",{name:"site-updated-at",content:l.siteUpdatedAt}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:url",content:l.url}),r.createElement("meta",{property:"og:description",content:a}),r.createElement("meta",{property:"og:image",content:l.image}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{property:"og:image:alt",content:a}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("meta",{name:"twitter:title",content:t}),r.createElement("meta",{name:"twitter:url",content:l.url}),r.createElement("meta",{name:"twitter:description",content:a}),r.createElement("meta",{name:"twitter:image",content:l.image}),r.createElement("meta",{name:"twitter:image:alt",content:a}),r.createElement("link",{rel:"canonical",href:l.url}),o.j.map((function(e){return r.createElement("link",{rel:"alternate",href:"https://mirea-button.github.io"+"/".concat(e)+l.path,hrefLang:e,key:e})})))}));l.displayName="MetaInfo",t.a=l},559:function(e,t,a){"use strict";var r=a(2),n=a(4),o=a(7),l=a.n(o),i=a(0),c=a.n(i),m=a(9),s=a(55),u=a(189),p=a(193),g=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.variant,s=e.as,u=void 0===s?"img":s,p=Object(n.a)(e,["bsPrefix","className","variant","as"]),g=Object(m.a)(a,"card-img");return c.a.createElement(u,Object(r.a)({ref:t,className:l()(i?g+"-"+i:g,o)},p))}));g.displayName="CardImg",g.defaultProps={variant:null};var b=g,d=Object(u.a)("h5"),f=Object(u.a)("h6"),h=Object(s.a)("card-body"),y=Object(s.a)("card-title",{Component:d}),E=Object(s.a)("card-subtitle",{Component:f}),v=Object(s.a)("card-link",{Component:"a"}),_=Object(s.a)("card-text",{Component:"p"}),j=Object(s.a)("card-header"),w=Object(s.a)("card-footer"),O=Object(s.a)("card-img-overlay"),x=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,s=e.bg,u=e.text,g=e.border,b=e.body,d=e.children,f=e.as,y=void 0===f?"div":f,E=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),v=Object(m.a)(a,"card"),_=Object(i.useMemo)((function(){return{cardHeaderBsPrefix:v+"-header"}}),[v]);return c.a.createElement(p.a.Provider,{value:_},c.a.createElement(y,Object(r.a)({ref:t},E,{className:l()(o,v,s&&"bg-"+s,u&&"text-"+u,g&&"border-"+g)}),b?c.a.createElement(h,null,d):d))}));x.displayName="Card",x.defaultProps={body:!1},x.Img=b,x.Title=y,x.Subtitle=E,x.Body=h,x.Link=v,x.Text=_,x.Header=j,x.Footer=w,x.ImgOverlay=O;t.a=x},560:function(e,t,a){"use strict";var r=a(2),n=a(4),o=a(7),l=a.n(o),i=a(0),c=a.n(i),m=a(9),s=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.noGutters,u=e.as,p=void 0===u?"div":u,g=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),b=Object(m.a)(a,"row"),d=b+"-cols",f=[];return s.forEach((function(e){var t,a=g[e];delete g[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"===typeof a?a.cols:a)&&f.push(""+d+r+"-"+t)})),c.a.createElement(p,Object(r.a)({ref:t},g,{className:l.a.apply(void 0,[o,b,i&&"no-gutters"].concat(f))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},t.a=u},561:function(e,t,a){"use strict";var r=a(2),n=a(4),o=a(7),l=a.n(o),i=a(0),c=a.n(i),m=a(9),s=["xl","lg","md","sm","xs"],u=c.a.forwardRef((function(e,t){var a=e.bsPrefix,o=e.className,i=e.as,u=void 0===i?"div":i,p=Object(n.a)(e,["bsPrefix","className","as"]),g=Object(m.a)(a,"col"),b=[],d=[];return s.forEach((function(e){var t,a,r,n=p[e];if(delete p[e],"object"===typeof n&&null!=n){var o=n.span;t=void 0===o||o,a=n.offset,r=n.order}else t=n;var l="xs"!==e?"-"+e:"";t&&b.push(!0===t?""+g+l:""+g+l+"-"+t),null!=r&&d.push("order"+l+"-"+r),null!=a&&d.push("offset"+l+"-"+a)})),b.length||b.push(g),c.a.createElement(u,Object(r.a)({},p,{ref:t,className:l.a.apply(void 0,[o].concat(b,d))}))}));u.displayName="Col",t.a=u},567:function(e,t,a){"use strict";var r=a(568).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},568:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=o(a(0)),n=o(a(569));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?g(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var f=function(e){function t(){var e,a;m(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return d(g(a=u(this,(e=p(t)).call.apply(e,[this].concat(l)))),"onClick",(function(e){var t=a.props,o=t.text,l=t.onCopy,i=t.children,c=t.options,m=r.default.Children.only(i),s=(0,n.default)(o,c);l&&l(o,s),m&&m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e)})),a}var a,o,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),a=t,(o=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),a=c(e,["text","onCopy","options","children"]),n=r.default.Children.only(t);return r.default.cloneElement(n,function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(a,!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},a,{onClick:this.onClick}))}}])&&s(a.prototype,o),l&&s(a,l),t}(r.default.PureComponent);t.CopyToClipboard=f,d(f,"defaultProps",{onCopy:void 0,options:void 0})},569:function(e,t,a){"use strict";var r=a(570),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var a,o,l,i,c,m,s=!1;t||(t={}),a=t.debug||!1;try{if(l=r(),i=document.createRange(),c=document.getSelection(),(m=document.createElement("span")).textContent=e,m.style.all="unset",m.style.position="fixed",m.style.top=0,m.style.clip="rect(0, 0, 0, 0)",m.style.whiteSpace="pre",m.style.webkitUserSelect="text",m.style.MozUserSelect="text",m.style.msUserSelect="text",m.style.userSelect="text",m.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var o=n[t.format]||n.default;window.clipboardData.setData(o,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(m),i.selectNodeContents(m),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(u){a&&console.error("unable to copy using execCommand: ",u),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(u){a&&console.error("unable to copy using clipboardData: ",u),a&&console.error("falling back to prompt"),o=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(o,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),m&&document.body.removeChild(m),l()}return s}},570:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,a=[],r=0;r<e.rangeCount;r++)a.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||a.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},571:function(e){e.exports=JSON.parse('[{"name":"e-001","image_urls":["/img/emoji/e-001.png"],"code":[":\u3053\u3093\u30fc:"]},{"name":"e-002","image_urls":["/img/emoji/e-002.png"],"code":[":\u304a\u3064\u30fc:"]},{"name":"e-003","image_urls":["/img/emoji/e-003.png"],"code":[":\u30fc\u3075\u306b\u3083:"]},{"name":"e-004","image_urls":["/img/emoji/e-004.png"],"code":[":\u3042\u3042\u6fc1\u70b9:"]},{"name":"e-005","image_urls":["/img/emoji/e-005.png"],"code":[":YES:"]},{"name":"e-006","image_urls":["/img/emoji/e-006.png"],"code":[":No2:"]},{"name":"e-007","image_urls":["/img/emoji/e-007.png"],"code":[":\uff5a\uff5a\uff5a:"]},{"name":"e-008","image_urls":["/img/emoji/e-008.png"],"code":[":angry:"]},{"name":"e-009","image_urls":["/img/emoji/e-009.png"],"code":[":\u3061\u3093\u3082\u304f:"]},{"name":"e-010","image_urls":["/img/emoji/e-010.png"],"code":[":\u3042\u305b\u308a:"]},{"name":"e-011","image_urls":["/img/emoji/e-011.png"],"code":[":\u30b5\u30a4\u30ea\u30a6\u30e0\u30d4\u30f3\u30af:"]},{"name":"e-012","image_urls":["/img/emoji/e-012.png"],"code":[":\u30b5\u30a4\u30ea\u30a6\u30e0\u30aa\u30ec\u30f3\u30b8:"]},{"name":"e-013-0","image_urls":["/img/emoji/e-013.svg"],"code":["\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f\ud83d\udc4f"]},{"name":"e-013-1","image_urls":["8 8 8 8 8 8 8 8 8"],"code":["8 8 8 8 8 8 8 8 8"]},{"name":"e-014","image_urls":["/img/emoji/e-014.svg"],"code":["\u2764\u2764\u2764\u2764\u2764"]},{"name":"e-015-0","image_urls":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude38\ud83c\udfb6\uff5e "],"code":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude38\ud83c\udfb6\uff5e"]},{"name":"e-015-1","image_urls":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3a\ud83c\udfb6\uff5e "],"code":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3a\ud83c\udfb6\uff5e"]},{"name":"e-015-2","image_urls":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3b\ud83c\udfb6\uff5e "],"code":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3b\ud83c\udfb6\uff5e"]},{"name":"e-016-0","image_urls":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude38\ud83c\udfb6\uff5e ","/img/emoji/e-011.png"],"code":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude38\ud83c\udfb6\uff5e :\u30b5\u30a4\u30ea\u30a6\u30e0\u30d4\u30f3\u30af:"]},{"name":"e-016-1","image_urls":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3a\ud83c\udfb6\uff5e ","/img/emoji/e-011.png"],"code":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3a\ud83c\udfb6\uff5e :\u30b5\u30a4\u30ea\u30a6\u30e0\u30d4\u30f3\u30af:"]},{"name":"e-016-2","image_urls":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3b\ud83c\udfb6\uff5e ","/img/emoji/e-011.png"],"code":["\uff5e\ud83c\udfb6\ud83c\udf38\ud83d\ude3b\ud83c\udfb6\uff5e :\u30b5\u30a4\u30ea\u30a6\u30e0\u30d4\u30f3\u30af:"]},{"name":"e-017","image_urls":["/img/emoji/e-011.png","/img/emoji/e-012.png"],"code":["\u200b:\u30b5\u30a4\u30ea\u30a6\u30e0\u30d4\u30f3\u30af:",":\u30b5\u30a4\u30ea\u30a6\u30e0\u30aa\u30ec\u30f3\u30b8:"]},{"name":"e-018","image_urls":["\u200b\u8349"],"code":["\u200b\u8349"]},{"name":"e-019","image_urls":["\u200b\u5f85\u6a5f"],"code":["\u200b\u5f85\u6a5f"]},{"name":"e-020","image_urls":["/img/emoji/e-001.png","/img/emoji/e-003.png"],"code":["\u200b:\u3053\u3093\u30fc:",":\u30fc\u3075\u306b\u3083:"]},{"name":"e-021","image_urls":["/img/emoji/e-002.png","/img/emoji/e-003.png"],"code":[":\u304a\u3064\u30fc:",":\u30fc\u3075\u306b\u3083:"]},{"name":"e-022","image_urls":["/img/emoji/e-022.png","/img/emoji/e-022.png","/img/emoji/e-022.png","/img/emoji/e-022.png","/img/emoji/e-022.png"],"code":[":virtualhug:",":virtualhug::virtualhug::virtualhug::virtualhug::virtualhug:"]},{"name":"e-023","image_urls":["/img/emoji/e-023.png"],"code":["\ud83d\ude4f"]}]')},578:function(e,t,a){"use strict";a.r(t),a.d(t,"About",(function(){return x}));var r=a(0),n=a.n(r),o=a(555),l=a(136),i=a(560),c=a(561),m=a(559),s=a(2),u=a(4),p=a(7),g=a.n(p),b=a(55),d=a(9),f=Object(b.a)("media-body"),h=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,l=void 0===o?"div":o,i=Object(u.a)(e,["bsPrefix","className","as"]),c=Object(d.a)(a,"media");return n.a.createElement(l,Object(s.a)({},i,{ref:t,className:g()(r,c)}))}));h.displayName="Media",h.Body=f;var y=h,E=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.striped,l=e.bordered,i=e.borderless,c=e.hover,m=e.size,p=e.variant,b=e.responsive,f=Object(u.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),h=Object(d.a)(a,"table"),y=g()(r,h,p&&h+"-"+p,m&&h+"-"+m,o&&h+"-striped",l&&h+"-bordered",i&&h+"-borderless",c&&h+"-hover"),E=n.a.createElement("table",Object(s.a)({},f,{className:y,ref:t}));if(b){var v=h+"-responsive";return"string"===typeof b&&(v=v+"-"+b),n.a.createElement("div",{className:v},E)}return E})),v=a(567),_=a(557),j=a(571),w=function(e){var t=e.title,a=e.href;return r.createElement("a",{target:"_blank",rel:"noopener noreferrer",title:t,href:a},t)},O=function(){var e=Object(o.a)().t;return r.createElement(r.Fragment,null,r.createElement(i.a,null,r.createElement(c.a,null,r.createElement(m.a,{className:"mt-2 mb-2"},r.createElement(m.a.Body,null,r.createElement(y,null,r.createElement("img",{width:32,height:32,className:"mr-3",src:"/img/CgDfX7qcJM_J-APK1YKgCA.png",alt:e("pages.about.text")}),r.createElement(y.Body,null,r.createElement("h5",null,e("pages.about.text")),r.createElement("p",null,e("pages.about.about_us.1")),r.createElement("p",null,e("pages.about.about_us.2"),r.createElement(w,{title:"Kazakura Mirea",href:"https://twitter.com/Kazakura_Mirea"}),"."),r.createElement("p",null,e("pages.about.about_us.4"),r.createElement(w,{title:"~Kei (pinkykei.deviantart.com)",href:"https://www.deviantart.com/pinkykei/art/Cursor-Set-Sakura-410823058"}),"."),r.createElement("p",null,e("pages.about.about_us.3"),r.createElement(w,{title:"GitHub Issues",href:"https://github.com/mirea-button/mirea-button.github.io/issues"}),"."))))))),r.createElement(i.a,null,r.createElement(c.a,null,r.createElement(m.a,{className:"mt-2 mb-2"},r.createElement(m.a.Body,null,r.createElement(y,null,r.createElement("img",{width:50,height:50,className:"mr-3",src:"/android-chrome-512x512.png",alt:e("site.kazakura_mirea")}),r.createElement(y.Body,null,r.createElement("h5",null,e("site.kazakura_mirea")),r.createElement("p",null,e("pages.about.about_mirea.1")),r.createElement("p",null,r.createElement("strong",null,e("pages.about.about_mirea.debut"),":")," ",e("pages.about.about_mirea.debut_")),r.createElement("p",null,r.createElement("strong",null,e("pages.about.about_mirea.birthday"),":")," ",e("pages.about.about_mirea.birthday_")),r.createElement("div",null,r.createElement("strong",null,e("pages.about.about_mirea.hashtags")),r.createElement("ul",{className:"list-sakura"},r.createElement("li",null,e("pages.about.about_mirea.hashtag_general")," ",r.createElement(w,{title:"#"+e("pages.about.about_mirea.hashtag_general_"),href:"https://twitter.com/search?q=%23"+e("pages.about.about_mirea.hashtag_general_")})),r.createElement("li",null,e("pages.about.about_mirea.hashtag_live")," ",r.createElement(w,{title:"#"+e("pages.about.about_mirea.hashtag_live_"),href:"https://twitter.com/search?q=%23"+e("pages.about.about_mirea.hashtag_live_")})),r.createElement("li",null,e("pages.about.about_mirea.hashtag_fanart")," ",r.createElement(w,{title:"#"+e("pages.about.about_mirea.hashtag_fanart_"),href:"https://twitter.com/search?q=%23"+e("pages.about.about_mirea.hashtag_fanart_")})),r.createElement("li",null,e("pages.about.about_mirea.hashtag_fn")," ",r.createElement(w,{title:"#"+e("pages.about.about_mirea.hashtag_fn_"),href:"https://twitter.com/search?q=%23"+e("pages.about.about_mirea.hashtag_fn_")})),r.createElement("li",null,e("pages.about.about_mirea.hashtag_clip")," ",r.createElement(w,{title:"#"+e("pages.about.about_mirea.hashtag_clip_"),href:"https://twitter.com/search?q=%23"+e("pages.about.about_mirea.hashtag_clip_")})))),r.createElement("div",null,r.createElement("strong",null,e("pages.about.about_mirea.2")),r.createElement("ul",{className:"list-sakura"},r.createElement("li",null,r.createElement(w,{title:"Youtube",href:"https://www.youtube.com/channel/UCIumx9FItlv6B_JsHVMjVYA"})),r.createElement("li",null,r.createElement(w,{title:"Twitter",href:"https://twitter.com/Kazakura_Mirea"})),r.createElement("li",null,r.createElement(w,{title:"Streamlabs",href:"https://streamlabs.com/mireakazakura/tip"})),r.createElement("li",null,r.createElement(w,{title:"FANBOX",href:"https://kazakura-mirea.fanbox.cc"})),r.createElement("li",null,r.createElement(w,{title:"Wishlist",href:"https://www.amazon.co.jp/hz/wishlist/ls/3TFAF22776EES?ref_=wl_share"})),r.createElement("li",null,r.createElement(w,{title:"Marshmallow",href:"https://marshmallow-qa.com/kazakura_mirea?utm_medium=url_text&utm_source=promotion"})))))))))))},x=function(){var e=Object(o.a)(),t=e.t,a=e.i18n,n={title:t("pages.about.title"),description:t("pages.about.description"),seo:{image:"".concat("https://mirea-button.github.io","/").concat(t("pages.home.image")),url:"".concat("https://mirea-button.github.io","/").concat(a.language,"/about"),path:"/about",siteUpdatedAt:new Date}};return r.createElement(r.Fragment,null,r.createElement(_.a,n),r.createElement(O,null),r.createElement(i.a,null,r.createElement(c.a,null,r.createElement(m.a,{className:"mt-2 mb-2"},r.createElement(m.a.Body,null,r.createElement(m.a.Title,null,"Emoji"),r.createElement(i.a,null,r.createElement(c.a,{xs:!0,lg:"6"},r.createElement(E,{bordered:!0,hover:!0,responsive:!0},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"#"),r.createElement("th",null,"Code"))),r.createElement("tbody",null,j.map((function(e){return r.createElement("tr",{key:e.name},r.createElement("td",null,e.image_urls.map((function(t,a){return t.indexOf("img/")>=0?r.createElement("img",{key:a,width:32,height:32,className:"mr-3",src:t,alt:e.code.join("")}):r.createElement("span",{key:t},t)}))),r.createElement("td",null,e.code.map((function(e,t){return r.createElement(r.Fragment,{key:t},r.createElement(v.CopyToClipboard,{text:e},r.createElement("code",{role:"button"},e))," ",r.createElement(v.CopyToClipboard,{text:e},r.createElement(l.a,{title:"Copy code",role:"button",icon:["far","copy"]})))}))))})))))))))))}}}]);