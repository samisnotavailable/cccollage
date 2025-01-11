"use strict";(self.webpackChunkcccollage=self.webpackChunkcccollage||[]).push([[66],{9365:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var o=a(4164);const n={tabItem:"tabItem_Ymn6"};var r=a(4848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.A)(n.tabItem,s),hidden:a,children:t})}},1470:(e,t,a)=>{a.d(t,{A:()=>I});var o=a(6540),n=a(4164),r=a(3104),s=a(6347),l=a(205),i=a(7485),c=a(1682),u=a(679);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:o,default:n}}=e;return{value:t,label:a,attributes:o,default:n}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,i.aZ)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[s,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=a.find((e=>e.default))??a[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[c,d]=g({queryString:a,groupId:n}),[f,p]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,o.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),b=(()=>{const e=c??f;return m({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,r]),tabValues:r}}var p=a(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function w(e){let{className:t,block:a,selectedValue:o,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,a=i.indexOf(t),n=l[a].value;n!==o&&(c(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=i.indexOf(e.currentTarget)+1;t=i[a]??i[0];break}case"ArrowLeft":{const a=i.indexOf(e.currentTarget)-1;t=i[a]??i[i.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":o===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function I(e){const t=(0,p.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},1916:(e,t,a)=>{a.r(t),a.d(t,{Highlight:()=>d,assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>h});const o=JSON.parse('{"id":"introduction","title":"Introduction","description":"Hello and welcome! Good morning, good evening, and good afternoon; wherever you are and whenever it may be. My name is Diende and I\'ve been creating collages and multimedia artworks for around 4 years now. I also like collecting stuff from the internet.","source":"@site/docs/introduction.mdx","sourceDirName":".","slug":"/introduction","permalink":"/docs/introduction","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"What is Collage?","permalink":"/docs/category/what-is-collage"}}');var n=a(4848),r=a(8453),s=a(1470),l=a(9365);const i={sidebar_position:1},c="Introduction",u={},d=({children:e,color:t})=>(0,n.jsx)("span",{style:{backgroundColor:t,borderRadius:"5px",color:"#fff",padding:"0.2rem"},children:e}),h=[{value:"What&#39;s collage?",id:"whats-collage",level:2},{value:"What&#39;s cccollage?",id:"whats-cccollage",level:2},{value:"Why do I love collage?",id:"why-do-i-love-collage",level:2},{value:"Goal of cccollage",id:"goal-of-cccollage",level:2}];function m(e){const t={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",strong:"strong",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"introduction",children:"Introduction"})}),"\n","\n","\n",(0,n.jsxs)(t.p,{children:["Hello and welcome! Good morning, good evening, and good afternoon; wherever you are and whenever it may be. My name is ",(0,n.jsx)(d,{color:"black",children:"Diende"})," and I've been creating collages and multimedia artworks for around 4 years now. I also like collecting stuff from the internet."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Diende Collages",src:a(760).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.p,{children:"Making collages has become a huge facet in my art, and as my love for the artform has grown, so has my body of work. I've done a lot of editorial work, personal artworks, and even commissioned collages, and my love has not faded away not a single bit. I wanted to make this website because I believe in one thing, which is that sharing is caring. I've developed a lot of notes and gathered plenty of resources for the past 4 years when it comes to collage, and it'd be a shame if I just kept it all to myself."}),"\n",(0,n.jsx)(t.h2,{id:"whats-collage",children:"What's collage?"}),"\n",(0,n.jsxs)(t.p,{children:["Collage, according to ",(0,n.jsx)(t.a,{href:"https://www.merriam-webster.com/dictionary/collage",children:"Merriam Webster"}),", comes in two definitions:"]}),"\n",(0,n.jsxs)(s.A,{children:[(0,n.jsx)(l.A,{value:"first-def",label:"1st Definition",default:!0,children:(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"1."})," an artistic composition made of various materials (such as paper, cloth, or wood) glued on a surface"]}),"\n"]})}),(0,n.jsx)(l.A,{value:"second-def",label:"2nd Definition",children:(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"2."})," a creative work that resembles such a composition in incorporating various materials or elements"]}),"\n"]})})]}),"\n",(0,n.jsx)(t.p,{children:"I will discuss more of this later, but this is a good place to start. Unlike most art forms, collage art often depends on other art as a source. Keep that in mind."}),"\n",(0,n.jsx)(t.h2,{id:"whats-cccollage",children:"What's cccollage?"}),"\n",(0,n.jsxs)(t.p,{children:["I named the website ",(0,n.jsx)(t.strong,{children:"cccollage"})," as it stands for ",(0,n.jsx)(d,{color:"black",children:"Crash Course Collage"}),". This is not, however, a means to declare ground rules and laws for who-can-do-what-kind-of collage. Nuh uh. This site began as a means of sharing, not as a means to course-correct the artform\u2014and it will remain that way. I will be using this site to share information, tips, and resources to help you with collage, while also preserving these things on a platform."]}),"\n",(0,n.jsx)(t.h2,{id:"why-do-i-love-collage",children:"Why do I love collage?"}),"\n",(0,n.jsx)(t.p,{children:"Well actually, I didn\u2019t start off by loving collage. Collage-making to me is really more of an offset rather than a direct result of what I actually love to do: which is archiving. Since I was a kid, I loved collecting little scraps of notes, letters, newspaper cutouts, posters, or just trash I refused to throw away (cleaned though, don\u2019t worry). It might be from a gift I received, a trip I took, or anything that looked remotely interesting enough to keep, and I\u2019d tuck them away in \u201cmemorabilia boxes\u201d around my room."}),"\n",(0,n.jsx)(t.p,{children:"Then I took an art class, in which one of our projects was to make our own collage. Although that was my first exposure to the collage artform, it didn\u2019t quite stick with me yet."}),"\n",(0,n.jsxs)(t.p,{children:["Eventually, my memorabilia boxes turned digital. I started to love the idea of exploring websites\u2013especially the more forum-styled ones before social media engulfed our internet\u2013and finding these gems that people post and obsess about. There are pictures, artworks, and even paintings that I\u2019ve found on some websites with no other copy anywhere else\u2013and knowing that nothing really stays even in this digital age, I\u2019d save them on the family laptop. Eventually the obsession gradually started snowballing: I\u2019d go through Wikipedia articles, public domain sites, and start saving things on my own computer (now a hard drive, for safekeeping), until finally I started thinking, ",(0,n.jsx)("em",{children:"\u201cI\u2019d love to do a collage with this.\u201d"})]}),"\n",(0,n.jsx)(t.p,{children:"Ever since then, archiving has become a lot more serious for me: a way to keep a preservation of digital copies, ad as I\u2019d archive more and more, I\u2019d also continue making more collages. The snowball has become a boulder which I\u2019d happily keep pushing."}),"\n",(0,n.jsx)(t.h2,{id:"goal-of-cccollage",children:"Goal of cccollage"}),"\n",(0,n.jsx)(t.p,{children:"Archiving, to me, comes from an inherent desire to preserve what I love, but collage comes from a desire to honor and pay tribute to the same things I love."}),"\n",(0,n.jsx)(t.p,{children:"Every collage artwork is very much about the parts as much as it is the sum of its parts. Collage is an act of both reclamation\u2013to make what came before as your own\u2013and dedication\u2013an ode to the artists that help make your art now."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Statement",src:a(8824).A+"",width:"1920",height:"1080"})}),"\n",(0,n.jsx)(t.p,{children:"What I want to do, at the most, is to get you started in doing collages. What I want to do at the very least, is to make this a love letter to collage and everything about it. To spotlight the game that I love, to preserve what I know, and hopefully to swoon you enough that you would understand it."})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},760:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/diende-works-178e9625620e403562a6fdaba13b1c50.gif"},8824:(e,t,a)=>{a.d(t,{A:()=>o});const o=a.p+"assets/images/statement-96475ac817876919d663655403808222.png"},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>l});var o=a(6540);const n={},r=o.createContext(n);function s(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);