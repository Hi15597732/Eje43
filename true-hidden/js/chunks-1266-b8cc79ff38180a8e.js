(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1266],{47901:function(e,t,r){"use strict";r.d(t,{A:function(){return d}});var n=r(85893),a=(r(67294),r(94184)),s=r.n(a),i=r(42483),l=r(65341),c=r(32924),o=r.n(c),d=function(e){var t=e.intro,r=e.topper,a=e.toc,c=e.children,d=e.className,u=e.supportPortalVaIframeProps;return(0,n.jsxs)(i.Z,{className:s()(o().containerBox,d),children:[r&&(0,n.jsx)(i.Z,{gridArea:"topper",children:r}),a&&(0,n.jsx)(i.Z,{gridArea:"sidebar",alignSelf:"flex-start",className:s()(o().sidebarBox,"border-bottom border-lg-0 pb-4 mb-5 pb-xl-0 mb-xl-0"),children:a}),t&&(0,n.jsx)(i.Z,{id:"article-intro",gridArea:"intro",children:t}),(0,n.jsxs)(i.Z,{gridArea:"content","data-search":"article-body",children:[u&&u.supportPortalUrl&&u.vaFlowUrlParameter&&(0,n.jsx)(l.v,{supportPortalVaIframeProps:u}),c]})]})}},32889:function(e,t,r){"use strict";r.d(t,{j:function(){return a}});var n=r(85893),a=function(e){var t=e.children;return(0,n.jsx)("div",{className:"d-flex flex-items-baseline flex-justify-between",children:(0,n.jsx)("h1",{id:"title-h1",className:"border-bottom-0",children:t})})}},43609:function(e,t,r){"use strict";r.d(t,{P:function(){return s}});var n=r(85893),a=new(r(29911).Z);function s(e){var t=e.children,r=e.as,s=e.slug,i=e.className;return s=s||a.slug(t),(0,n.jsx)(r,{id:s,className:i,tabIndex:-1,children:(0,n.jsxs)("a",{className:"heading-link",href:"#".concat(s),children:[t,(0,n.jsx)("span",{"aria-hidden":"true",className:"heading-link-symbol"})]})})}},65341:function(e,t,r){"use strict";r.d(t,{v:function(){return c}});var n=r(85893),a=r(11163),s=r(67294),i=r(42390),l=r.n(i);function c(e){var t,r=e.supportPortalVaIframeProps,i="true"===(0,a.useRouter)().query.autoStartVa;!function(e){e.OPEN="open",e.START="start",e.STOP="stop"}(t||(t={}));var c=(0,s.useState)(!1),o=c[0],d=c[1],u=(0,s.useRef)(null);if((0,s.useEffect)((function(){var e=function(e){if(e.origin===r.supportPortalUrl)switch(e.data.type){case t.OPEN:u.current&&(u.current.style.display="inline",u.current.style.height="".concat(i?750:95,"px"));break;case t.START:u.current&&(u.current.style.height="".concat(750,"px"));break;case t.STOP:d(!1)}};return window.addEventListener("message",e),d(!0),function(){window.removeEventListener("message",e)}}),[]),!o)return null;var f=new URLSearchParams({flow:r.vaFlowUrlParameter});f.set("flow",r.vaFlowUrlParameter),i&&f.set("autoStartVa","true");var m="".concat(r.supportPortalUrl,"/iframe/docs_va?").concat(f);return(0,n.jsx)("iframe",{className:l().supportPortalIframe,ref:u,title:"support-portal-va",id:"support-portal-iframe",src:m})}},28370:function(e,t,r){"use strict";r.d(t,{GI:function(){return o},qj:function(){return l},xh:function(){return c}});var n=r(78718),a=r.n(n),s=r(67294),i=r(46509),l=(0,s.createContext)(null),c=function(){var e=(0,s.useContext)(l);if(!e)throw new Error('"useTocLandingContext" may only be used inside "TocLandingContext.Provider"');return e},o=function(e){return{title:e.context.page.title,productCallout:e.context.page.product||"",intro:e.context.page.intro,tocItems:(e.context.genericTocFlat||e.context.genericTocNested||[]).map((function(e){return a()(e,["fullPath","title","intro","childTocItems"])})),variant:e.context.genericTocFlat?"expanded":"compact",featuredLinks:(0,i.Bz)(e),renderedPage:e.context.renderedPage,currentLearningTrack:e.context.currentLearningTrack}}},36969:function(e,t,r){"use strict";r.d(t,{U:function(){return c}});var n=r(85893),a=r(94184),s=r.n(a),i=r(95549),l=r.n(i),c=function(e){var t=e.variant,r=e.className,a=e.dangerouslySetInnerHTML,i=e.children;return(0,n.jsx)("div",{"data-testid":"callout",className:s()(r,l().container,"border rounded-1 p-3 f5","success"===t&&"color-border-success-emphasis color-bg-success","info"===t&&"color-border-accent-emphasis color-bg-accent","warning"===t&&"color-border-attention-emphasis color-bg-attention"),dangerouslySetInnerHTML:a,children:i})}},94239:function(e,t,r){"use strict";r.d(t,{r:function(){return d}});var n=r(26042),a=r(99534),s=r(85893),i=r(94184),l=r.n(i),c=r(3123),o=r.n(c);function d(e){var t=e.children,r=e.className,i=e.as,c=void 0===i?"div":i,d=(0,a.Z)(e,["children","className","as"]);return(0,s.jsx)(c,(0,n.Z)({className:l()("f2 color-fg-muted mb-3",o().container,r)},d,"string"===typeof t?{dangerouslySetInnerHTML:{__html:t}}:{children:t}))}},41102:function(e,t,r){"use strict";r.d(t,{S:function(){return u}});var n=r(26042),a=r(69396),s=r(99534),i=r(85893),l=r(94184),c=r.n(l),o=r(84844),d=r.n(o),u=function(e){var t=e.children,r=e.as,l=void 0===r?"div":r,o=e.className,u=(0,s.Z)(e,["children","as","className"]);return(0,i.jsx)(l,(0,n.Z)((0,a.Z)((0,n.Z)({},u),{className:c()(d().markdownBody,"markdown-body",o)}),"string"===typeof t?{dangerouslySetInnerHTML:{__html:t}}:{children:t}))}},23317:function(e,t,r){"use strict";r.d(t,{n:function(){return o}});var n=r(85893),a=r(94184),s=r.n(a),i=r(31622),l=r.n(i),c=r(69099);function o(e){var t=e.permissions,r=(0,c.$)("pages").t;return(0,n.jsxs)("div",{className:s()(l().permissions_statement,"pl-3 my-4"),"data-search":"hide","data-testid":"permissions-statement",children:[(0,n.jsx)("div",{className:"text-bold pr-2",children:r("permissions_statement")}),(0,n.jsx)("div",{dangerouslySetInnerHTML:{__html:t}})]})}},37378:function(e,t,r){"use strict";r.d(t,{u:function(){return c}});var n=r(85893),a=(r(67294),r(94184)),s=r.n(a),i=r(75397),l=r.n(i),c=function(e){var t=e.maxLines,r=e.className,a=e.children,i=e.as,c=void 0===i?"div":i;return(0,n.jsx)(c,{className:s()(l().truncated,r),style:{WebkitLineClamp:t},children:a})}},72213:function(e,t,r){"use strict";r.d(t,{w:function(){return j}});var n=r(26042),a=r(69396),s=r(85893),i=r(94184),l=r.n(i),c=r(27484),o=r.n(c),d=r(31863),u=r(69099),f=r(85741),m=r(85529),x=r(84702),p=r(37378),h=r(67294),v=r(93513),g=r.n(v),b=function(e){var t,r=e.as,n=e.children,a=e.href,i=e.title,c=e.className,o=r||"a";return t="string"===typeof i?(0,s.jsx)("span",{className:"h4",children:i}):(0,h.cloneElement)(i,i.props,i.props.children),(0,s.jsxs)(o,{"data-testid":"bump-link",className:l()(g().container,"no-underline d-block py-1",c),href:a,children:[t,n]})},j=function(e){var t=e.title,r=e.viewAllHref,i=e.viewAllTitleText,c=e.articles,h=(0,u.$)("product_landing").t,v=(0,x.Hv)().page;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)("div",{className:"mb-4 d-flex flex-items-baseline",children:[(0,s.jsx)("h2",{className:l()("f4 text-semibold"),children:t}),r&&(0,s.jsxs)(f.r,(0,a.Z)((0,n.Z)({href:r,className:"ml-4"},i?{"aria-label":"".concat(v.title," - ").concat(i)}:{}),{children:[h("view")," ",(0,s.jsx)(m.ArrowRightIcon,{size:14,className:"v-align-middle"})]}))]}),(0,s.jsx)(d.S,{as:"ul","data-testid":"article-list",variant:"full",children:c.map((function(e){return(0,s.jsx)(d.S.Item,{as:"li",className:l()("width-full border-top"),sx:{borderRadius:0,":hover":{borderRadius:0}},tabIndex:void 0,children:(0,s.jsxs)(b,{as:f.r,href:e.href,className:"py-3",title:e.intro?(0,s.jsx)("h3",{className:"f4","data-testid":"link-with-intro-title",children:(0,s.jsx)("span",{children:e.fullTitle?e.fullTitle:e.title})}):(0,s.jsx)("span",{className:"f4 text-bold d-block","data-testid":"link-with-intro-title",children:e.fullTitle?e.fullTitle:e.title}),children:[e.intro&&(0,s.jsx)(p.u,{as:"p",maxLines:2,className:"color-fg-muted mb-0 mt-1",children:(0,s.jsx)("span",{"data-testid":"link-with-intro-intro",children:e.intro})}),e.date&&(0,s.jsx)("time",{className:"tooltipped tooltipped-n color-fg-muted text-mono mt-1","aria-label":o()(e.date).format("MMMM DD"),children:o()(e.date).format("MMMM DD")})]})},e.href)}))})]})}},46509:function(e,t,r){"use strict";r.d(t,{Bz:function(){return x},ff:function(){return p},on:function(){return m},u6:function(){return f}});var n=r(47568),a=r(26042),s=r(69396),i=r(10253),l=r(34051),c=r.n(l),o=r(67294),d=r(78718),u=r.n(d),f=(0,o.createContext)(null),m=function(){var e=(0,o.useContext)(f);if(!e)throw new Error('"useProductLandingContext" may only be used inside "ProductLandingContext.Provider"');return e},x=function(e){return Object.fromEntries(Object.entries(e.context.featuredLinks||{}).map((function(e){var t=(0,i.Z)(e,2);return[t[0],(t[1]||[]).map((function(e){var t;return{href:e.href,title:e.title,intro:e.intro||null,authors:(null===(t=e.page)||void 0===t?void 0:t.authors)||[],fullTitle:e.fullTitle||null}}))]})))},p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,l,o,d,f;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.context.currentProductTree,n=t.context.page,l=(n.children||[]).includes("/guides"),!n.product_video){e.next=9;break}return e.next=6,n.renderProp("product_video",t.context,{textOnly:!0});case 6:e.t0=e.sent,e.next=10;break;case 9:e.t0="";case 10:return o=e.t0,e.next=13,n.renderProp("title",t.context,{textOnly:!0});case 13:return d=e.sent,e.next=16,n.renderProp("shortTitle",t.context,{textOnly:!0});case 16:if(e.t1=e.sent,e.t1){e.next=19;break}e.t1=null;case 19:return f=e.t1,e.abrupt("return",(0,s.Z)((0,a.Z)({title:d,shortTitle:f},u()(n,["introPlainText","beta_product","intro"])),{productVideo:o,productVideoTranscript:n.product_video_transcript||null,hasGuidesPage:l,product:{href:r.href,title:r.page.shortTitle||r.page.title},whatsNewChangelog:t.context.whatsNewChangelog||[],changelogUrl:t.context.changelogUrl||[],productCommunityExamples:t.context.productCommunityExamples||[],ghesReleases:t.context.ghesReleases||[],productUserExamples:(t.context.productUserExamples||[]).map((function(e){return{username:e.user,description:e.description}})),introLinks:n.introLinks||null,featuredLinks:x(t),tocItems:t.context.tocItems||[],featuredArticles:Object.entries(t.context.featuredLinks||[]).filter((function(e){var t=(0,i.Z)(e,1)[0];return"startHere"===t||"popular"===t||"videos"===t})).map((function(e){var r=(0,i.Z)(e,2),n=r[0],a=r[1];return{key:n,label:("popular"===n||"videos"===n)&&t.context.page.featuredLinks[n+"Heading"]||t.context.site.data.ui.toc[n],viewAllHref:"startHere"===n&&!t.context.currentCategory&&l?"".concat(t.context.currentPath,"/guides"):"",articles:a.map((function(e){var t;return{href:e.href,title:e.title,intro:e.intro||null,authors:(null===(t=e.page)||void 0===t?void 0:t.authors)||[],fullTitle:e.fullTitle||null}}))}}))}));case 21:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},72036:function(e,t,r){"use strict";r.d(t,{Y:function(){return y}});var n=r(85893),a=r(11163),s=r(94184),i=r.n(s),l=r(28370),c=r(69099),o=r(92109),d=r(67294),u=r(31863),f=r(85741),m=function(e){var t=e.items,r=e.variant,a=void 0===r?"expanded":r;return(0,n.jsxs)("ul",{"data-testid":"table-of-contents",className:i()("compact"===a?"list-style-outside pl-2":""),children:["expanded"===a&&t.map((function(e){var t=e.fullPath,r=e.title,a=e.intro;return(0,n.jsxs)("li",{"data-testid":"expanded-item",className:"pt-4 pb-3 f4 d-list-item width-full list-style-none border-bottom",children:[(0,n.jsx)("h2",{className:"py-1 h4",children:(0,n.jsx)(f.r,{href:t,className:"color-fg-accent",children:r})}),a&&(0,n.jsx)("div",{className:"f4 color-fg-muted",dangerouslySetInnerHTML:{__html:a}})]},t)})),"compact"===a&&(0,n.jsx)(u.S,{children:t.map((function(e){var t=e.fullPath,r=e.title,s=e.childTocItems;return(0,n.jsxs)(d.Fragment,{children:[(0,n.jsx)(u.S.Item,{className:"f4 color-fg-accent d-list-item d-block width-full text-underline",children:(0,n.jsx)(f.r,{href:t,children:r})},t),(s||[]).length>0&&(0,n.jsx)("ul",{className:i()("compact"===a?"list-style-circle pl-5":"list-style-none"),children:(s||[]).filter(Boolean).map((function(e){return(0,n.jsx)(u.S.Item,{className:"f4 color-fg-accent d-list-item d-block width-full text-underline",children:(0,n.jsx)(f.r,{href:e.fullPath,children:e.title})},e.fullPath)}))})]},t)}))})]})},x=r(32889),p=r(41102),h=r(72213),v=r(47901),g=r(36969),b=r(94239),j=r(41567),N=r(22017),_=r(30507),w=r(802),y=function(){var e=(0,a.useRouter)(),t=(0,l.xh)(),r=t.title,s=t.intro,d=t.tocItems,u=t.productCallout,f=t.variant,y=t.featuredLinks,k=t.renderedPage,P=t.currentLearningTrack,T=(0,c.$)("toc").t;return(0,n.jsxs)(o.H,{children:["/[versionId]/rest/[category]"===e.route&&(0,n.jsx)(_.b,{}),(0,n.jsx)(N.p,{}),(0,n.jsxs)("div",{className:"container-xl px-3 px-md-6 my-4",children:[(0,n.jsx)("div",{className:i()("d-none d-xl-block mt-3 mr-auto width-full"),children:(0,n.jsx)(w.O,{})}),(0,n.jsxs)(v.A,{children:[(0,n.jsx)(x.j,{children:r}),s&&(0,n.jsx)(b.r,{"data-search":"lead",children:s}),u&&(0,n.jsx)(g.U,{variant:"success",dangerouslySetInnerHTML:{__html:u}}),(0,n.jsx)("div",{className:"border-bottom border-xl-0 pb-4 mb-5 pb-xl-2 mb-xl-2"}),(0,n.jsxs)("div",{className:"expanded"===f?"mt-5":"mt-2",children:[y.gettingStarted&&y.popular&&(0,n.jsx)("div",{className:"pb-8 container-xl",children:(0,n.jsxs)("div",{className:"gutter gutter-xl-spacious clearfix",children:[(0,n.jsx)("div",{className:"col-12 col-lg-6 mb-md-4 mb-lg-0 float-left",children:(0,n.jsx)(h.w,{title:T("getting_started"),articles:y.gettingStarted})}),(0,n.jsx)("div",{className:"col-12 col-lg-6 float-left",children:(0,n.jsx)(h.w,{title:T("popular"),articles:y.popular})})]})}),k&&(0,n.jsx)("div",{id:"article-contents",className:"mb-5",children:(0,n.jsx)(p.S,{children:k})}),(0,n.jsx)(m,{items:d,variant:f})]})]}),(null===P||void 0===P?void 0:P.trackName)?(0,n.jsx)("div",{className:"mt-4",children:(0,n.jsx)(j.V,{track:P})}):null]})]})}},41567:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var n=r(85893),a=r(85741),s=r(69099);function i(e){var t=e.track,r=(0,s.$)("learning_track_nav").t,i=t.prevGuide,l=t.nextGuide,c=t.trackName,o=t.trackProduct;return(0,n.jsxs)("div",{"data-testid":"learning-track-nav",className:"py-3 px-4 rounded color-bg-default border d-flex flex-justify-between",children:[(0,n.jsx)("span",{className:"f5 d-flex flex-column",children:i&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"color-fg-default",children:r("prev_guide")}),(0,n.jsx)(a.r,{href:"".concat(i.href,"?learn=").concat(c,"&learnProduct=").concat(o),className:"text-bold color-fg",children:i.title})]})}),(0,n.jsx)("span",{className:"f5 d-flex flex-column flex-items-end",children:l&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:"color-fg-default",children:r("next_guide")}),(0,n.jsx)(a.r,{href:"".concat(l.href,"?").concat(new URLSearchParams({learn:c,learnProduct:o})),className:"text-bold color-fg text-right",children:l.title})]})})]})}},22017:function(e,t,r){"use strict";r.d(t,{p:function(){return o}});var n=r(85893),a=r(67294),s=r(5152),i=r.n(s),l=r(11163),c=i()((function(){return r.e(1616).then(r.bind(r,41616))}),{loadableGenerated:{webpack:function(){return[41616]}},ssr:!1});function o(){var e=(0,l.useRouter)().asPath,t=(0,a.useState)(!1),r=t[0],s=t[1];return(0,a.useEffect)((function(){window.location.hash&&e.startsWith("/rest")&&s(!0)}),[]),r?(0,n.jsx)(c,{}):null}},32924:function(e){e.exports={containerBox:"ArticleGridLayout_containerBox__2ZUYt",sidebarBox:"ArticleGridLayout_sidebarBox__fsrhk"}},42390:function(e){e.exports={supportPortalIframe:"SupportPortalVaIframe_supportPortalIframe__RbSZJ"}},93513:function(e){e.exports={container:"BumpLink_container__lXyMT",symbol:"BumpLink_symbol__wNQvH"}},95549:function(e){e.exports={container:"Callout_container__bNJrQ"}},3123:function(e){e.exports={container:"Lead_container__g1kT8"}},84844:function(e){e.exports={markdownBody:"MarkdownContent_markdownBody__gRgTE","has-nested-table":"MarkdownContent_has-nested-table__bF4rV"}},31622:function(e){e.exports={permissions_statement:"PermissionsStatement_permissions_statement__VrB2s"}},75397:function(e){e.exports={truncated:"TruncateLines_truncated__Q8prj"}}}]);