"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[235],{5587:function(e,n,t){t.d(n,{Z:function(){return l}});var i=t(7294);const o=i.createContext({}),a=!0;function s(e){let{baseColor:n,highlightColor:t,width:i,height:o,borderRadius:s,circle:l,direction:r,duration:d,enableAnimation:c=a}=e;const u={};return"rtl"===r&&(u["--animation-direction"]="reverse"),"number"==typeof d&&(u["--animation-duration"]=`${d}s`),c||(u["--pseudo-element-display"]="none"),"string"!=typeof i&&"number"!=typeof i||(u.width=i),"string"!=typeof o&&"number"!=typeof o||(u.height=o),"string"!=typeof s&&"number"!=typeof s||(u.borderRadius=s),l&&(u.borderRadius="50%"),void 0!==n&&(u["--base-color"]=n),void 0!==t&&(u["--highlight-color"]=t),u}function l(e){let{count:n=1,wrapper:t,className:l,containerClassName:r,containerTestId:d,circle:c=!1,style:u,...p}=e;var g,h,m;const j=i.useContext(o),x={...p};for(const[i,o]of Object.entries(p))void 0===o&&delete x[i];const v={...j,...x,circle:c},b={...u,...s(v)};let f="react-loading-skeleton";l&&(f+=` ${l}`);const O=null!==(g=v.inline)&&void 0!==g&&g,y=[],z=Math.ceil(n);for(let o=0;o<z;o++){let e=b;if(z>n&&o===z-1){const t=null!==(h=e.width)&&void 0!==h?h:"100%",i=n%1,o="number"==typeof t?t*i:`calc(${t} * ${i})`;e={...e,width:o}}const t=i.createElement("span",{className:f,style:e,key:o},"‌");O?y.push(t):y.push(i.createElement(i.Fragment,{key:o},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":d,"aria-live":"polite","aria-busy":null!==(m=v.enableAnimation)&&void 0!==m?m:a},t?y.map(((e,n)=>i.createElement(t,{key:n},e))):y)}},8883:function(e,n,t){t.d(n,{o:function(){return s}});var i=t(7294),o=t(686),a=t(7177);const s=e=>{const n=i.useContext(a.Z);return{getOne:t=>(0,o.useQuery)(["organizations",t],(()=>null==n?void 0:n.Organization.getOne(t)),{initialData:()=>{var n;return null===(n=e.getQueryData("organizations"))||void 0===n?void 0:n.find((e=>e.id===t))},onError:e=>{throw new Error(e.message)},enabled:!!t}),getAll:e=>(0,o.useQuery)(["organizations",e],(()=>null==n?void 0:n.Organization.getAll(e)),{onError:e=>{throw new Error(e.message)}}),getCount:e=>(0,o.useQuery)(["organizations_count",e],(()=>null==n?void 0:n.Organization.getCount(e)),{onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e5}),filtersGetAll:()=>(0,o.useQuery)(["organizations"],(()=>null==n?void 0:n.Organization.filtersGetAll()),{onError:e=>{throw new Error(e.message)}})}}},8122:function(e,n,t){t.r(n),t.d(n,{default:function(){return L}});var i=t(7294),o=t(783),a=t(5983),s=t(5019),l=t(686),r=t(5587),d=t(4799),c=t(1800),u=t(8883),p=t(8177),g=t(5893);const h=()=>{const[e,n]=i.useContext(a.oh),t=i.useRef(null),{register:o,watch:s,reset:l,formState:{errors:r}}=(0,p.cI)();i.useEffect((()=>{l({name:e.organizationSearch})}),[e]);const d=s("name");return i.useEffect((()=>{t.current&&clearTimeout(t.current),t.current=setTimeout((()=>n({...e,organizationCurrentPage:1,organizationSearch:void 0===d?"":d})),500)}),[d]),(0,g.jsx)("form",{onSubmit:e=>{e.preventDefault()},children:(0,g.jsxs)(c.Wi,{children:[(0,g.jsx)(c.lX,{htmlFor:"OrganizationSearchFormInput",children:"Zoek op naam"}),(0,g.jsx)(c.fE,{id:"OrganizationSearchFormInput",...o("name",{required:!0}),invalid:r.name})]})})};var m=t(3417);const j=e=>{let{organizations:n}=e;return(0,g.jsx)("div",{className:"CardsOrganizationDisplayTemplate-module--componentsGrid--7b0b0",children:n.map((e=>{var n,t,i,o,a,s;return(0,g.jsx)(g.Fragment,{children:e._self.schema.ref.includes("organisation.schema.json")&&(0,g.jsx)(m.$,{title:{label:e.name,href:`/organizations/${e.id}`},description:e.description,website:e.website,logo:e.logo,components:{owned:null!==(n=null===(t=e.owns)||void 0===t?void 0:t.length.toString())&&void 0!==n?n:"0",supported:null!==(i=null===(o=e.supports)||void 0===o?void 0:o.length.toString())&&void 0!==i?i:"0",used:null!==(a=null===(s=e.uses)||void 0===s?void 0:s.length.toString())&&void 0!==a?a:"0"},gitHub:e.github,gitLab:e.gitlab,type:e.type})})}))})};var x=t(1700),v=t.n(x),b="TableOrganizationDisplayTemplate-module--tagWidth--6bf88",f=t(1082),O=t(6505),y=t(7882),z=t(7606),T=t(3168),w=t(7920),C=t(7898),N=t(6431),D=t(192);const I=e=>{let{organizations:n,hideTableHead:t}=e;const{t:a}=(0,s.$)(),{screenSize:l}=i.useContext(D.h);return(0,g.jsx)(o.y6,{touchScreen:"tablet"===l||"mobile"===l,children:(0,g.jsxs)(c.iA,{children:[!t&&(0,g.jsx)(c.xD,{children:(0,g.jsxs)(c.SC,{children:[(0,g.jsx)(c.xs,{children:a("Name")}),(0,g.jsx)(c.xs,{children:a("Sources")}),(0,g.jsxs)(c.xs,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":a("Owned, supported and used components"),className:"TableOrganizationDisplayTemplate-module--componentsHeader--1d681",children:[a("Components"),(0,g.jsx)(z.G,{icon:T.sqG})]}),(0,g.jsx)(c.xs,{children:a("Website")}),(0,g.jsx)(c.xs,{children:a("GitHub/Gitlab")}),(0,g.jsx)(c.xD,{})]})}),(0,g.jsxs)(c.RM,{children:[n.length>0&&n.map((e=>{var n,t,i,o,s,l,r,d,u,p,h,m,j;return(0,g.jsxs)(c.SC,{className:"TableOrganizationDisplayTemplate-module--tableRow--32465",onClick:()=>{var n;return(0,f.c4)(`/${(0,y.J)(null===(n=e._self)||void 0===n?void 0:n.schema.ref)}/${e.id}`)},children:[(0,g.jsx)(c.pj,{children:(0,g.jsx)("span",{className:"TableOrganizationDisplayTemplate-module--name--223d3",children:e.name})}),(0,g.jsx)(c.pj,{children:(0,g.jsx)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":a("Sources"),className:b,children:v()(null!==(n=e._self)&&void 0!==n&&n.synchronizations?null!==(t=e._self)&&void 0!==t&&null!==(i=t.synchronizations)&&void 0!==i&&i.length?null===(o=e._self)||void 0===o||null===(s=o.synchronizations)||void 0===s||null===(l=s.at(-1))||void 0===l?void 0:l.source.name:"Onbekend":"N.V.T.")})}),(0,g.jsx)(c.pj,{children:(0,g.jsxs)("div",{className:"TableOrganizationDisplayTemplate-module--tags--97025",children:[(0,g.jsxs)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":"Aantal eigen componenten",className:b,children:[(0,g.jsx)(z.G,{icon:T.Ans}),null!==(r=null===(d=e.owns)||void 0===d?void 0:d.length.toString())&&void 0!==r?r:"0"]}),(0,g.jsxs)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":"Aantal ondersteunde componenten",className:b,children:[(0,g.jsx)(z.G,{icon:T.gNZ}),null!==(u=null===(p=e.supported)||void 0===p?void 0:p.length.toString())&&void 0!==u?u:"0"]}),(0,g.jsxs)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":"Aantal gebruikte componenten",className:b,children:[(0,g.jsx)(z.G,{icon:T.jHE}),null!==(h=null===(m=e.used)||void 0===m?void 0:m.length.toString())&&void 0!==h?h:"0"]})]})}),(0,g.jsx)(c.pj,{children:(0,g.jsxs)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":null!==(j=e.website)&&void 0!==j?j:a("Website"),className:b,onClick:()=>open(e.website),children:[e.website&&(0,g.jsx)(z.G,{icon:T.g4A}),v()(e.website?a("Website"):a("Not found"))]})}),(0,g.jsxs)(c.pj,{children:[e.github&&(0,g.jsxs)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":"GitHub",className:b,onClick:()=>open(e.github),children:[(0,g.jsx)(w.c,{}),a("GitHub")]}),e.gitlab&&(0,g.jsxs)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":"GitLab",className:b,onClick:()=>open(e.gitlab),children:[(0,g.jsx)(C.W,{}),a("GitLab")]}),!e.github&&!e.gitlab&&(0,g.jsx)(c.Ou,{"data-tooltip-id":N.TOOLTIP_ID,"data-tooltip-content":a("Repository"),className:b,children:a("Not found")})]}),(0,g.jsx)(c.pj,{children:(0,g.jsxs)(c.rU,{onClick:()=>{var n,t;return(0,f.c4)(`/${(0,y.J)(null===(n=e._self)||void 0===n||null===(t=n.schema)||void 0===t?void 0:t.ref)}/${e.id}`)},className:"TableOrganizationDisplayTemplate-module--detailsLink--7e96e",children:[(0,g.jsx)(c.JO,{children:(0,g.jsx)(O.Z,{})}),a("Details")]})})]},e.id)})),!n.length&&(0,g.jsxs)(c.SC,{children:[(0,g.jsx)(c.pj,{children:a("Geen resultaten gevonden")}),(0,g.jsx)(c.pj,{}),(0,g.jsx)(c.pj,{}),(0,g.jsx)(c.pj,{}),(0,g.jsx)(c.pj,{}),(0,g.jsx)(c.pj,{}),(0,g.jsx)(c.pj,{}),(0,g.jsx)(c.pj,{})]})]})]})})},k=e=>{let{organizations:n,type:t}=e;switch(t){case"table":return(0,g.jsx)(I,{organizations:n});case"cards":return(0,g.jsx)(j,{organizations:n})}},S=()=>{var e,n,t,p,m;const[j,x]=i.useContext(a.oh),{t:v}=(0,s.$)(),b=new l.QueryClient,f=(0,u.o)(b).getAll({...j,organizationsResultDisplayLayout:"cards"});return(0,g.jsxs)(o.W2,{layoutClassName:"OrganizationsTemplate-module--container--ad6b9",children:[(0,g.jsxs)("div",{className:"OrganizationsTemplate-module--header--5b5ac",children:[(0,g.jsx)("div",{children:(0,g.jsx)(c.X6,{level:2,className:"OrganizationsTemplate-module--title--e0b49",children:"Organizations"})}),(0,g.jsx)(d.Z,{resultsDisplayType:"organizationsResultDisplayLayout"})]}),(0,g.jsx)("div",{children:(0,g.jsxs)("div",{className:"OrganizationsTemplate-module--results--f7087",children:[(0,g.jsx)(h,{}),0===(null===(e=f.data)||void 0===e||null===(n=e.results)||void 0===n?void 0:n.length)&&!f.isLoading&&(0,g.jsx)("span",{children:v("No organizations found")}),(null===(t=f.data)||void 0===t?void 0:t.results)&&(null===(p=f.data)||void 0===p||null===(m=p.results)||void 0===m?void 0:m.length)>0&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(k,{organizations:f.data.results,type:j.organizationsResultDisplayLayout}),f.data.results.length&&(0,g.jsx)(o.tl,{layoutClassName:"OrganizationsTemplate-module--paginationContainer--1809a",totalPages:f.data.pages,currentPage:f.data.page,setCurrentPage:e=>x({...j,organizationCurrentPage:e})})]}),f.isLoading&&(0,g.jsx)(r.Z,{height:"200px"})]})})]})};var L=()=>(0,g.jsx)(S,{})},7882:function(e,n,t){t.d(n,{J:function(){return i}});const i=e=>e.includes("organisation.schema.json")?"organizations":e.includes("component.schema.json")?"components":e.includes("application.schema.json")?"applications":e.includes("contacts.schema.json")?"contacts":e.includes("componentlegalentity.schema.json")?"componentlegalentities":void 0}}]);
//# sourceMappingURL=2a833a263c530a88fac6954b760df4eebfd22a18-0f654f313dc49189d30d.js.map