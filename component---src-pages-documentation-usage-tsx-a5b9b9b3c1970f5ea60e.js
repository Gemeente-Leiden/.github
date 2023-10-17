"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[294],{8922:function(e){e.exports=function(e){var n=void 0;n="string"==typeof e?[e]:e.raw;for(var t="",s=0;s<n.length;s++)t+=n[s].replace(/\\\n[ \t]*/g,"").replace(/\\`/g,"`"),s<(arguments.length<=1?0:arguments.length-1)&&(t+=arguments.length<=s+1?void 0:arguments[s+1]);var a=t.split("\n"),r=null;return a.forEach((function(e){var n=e.match(/^(\s+)\S+/);if(n){var t=n[1].length;r=r?Math.min(r,t):t}})),null!==r&&(t=a.map((function(e){return" "===e[0]?e.slice(r):e})).join("\n")),(t=t.trim()).replace(/\\n/g,"\n")}},5873:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var s="UsageDocumentationTemplate-module--code--efe0d",a="UsageDocumentationTemplate-module--codeBlock--7435b",r="UsageDocumentationTemplate-module--description--d3f95",o="UsageDocumentationTemplate-module--section--0520c",i=t(783),l=t(1800),c=t(2283),d=t(8922),h=t.n(d),m=t(1379),p=t(5019),u=t(5893);const j=()=>{const{t:e}=(0,p.$)();return(0,u.jsxs)(i.W2,{layoutClassName:"UsageDocumentationTemplate-module--container--4864e",children:[(0,u.jsxs)("section",{className:o,children:[(0,u.jsx)(l.X6,{level:1,children:"Componenten op OpenCatalogi plaatsen en Componenten installeren"}),(0,u.jsx)(l.nv,{lead:!0,className:r,children:"Er zijn drie manieren om een component zichtbaar te maken op OpenCatalogi."})]}),(0,u.jsx)("section",{className:o,children:(0,u.jsx)(m.x,{title:e("Already have a repository URL? Then register it immediately."),placeholder:e("Repository url of your component or organization"),buttonLabel:e("Submit component or organization")})}),(0,u.jsxs)("section",{className:o,children:[(0,u.jsx)(l.X6,{level:2,children:"1. Een publiccode.yaml opnemen in je repository"}),(0,u.jsxs)(l.nv,{className:r,children:["OpenCatalogi is gebouwd op het Europese public code framework. Uitgangspunt hierbij is dat open source, betekent dat de source code in een git repository staat (bijvoorbeeld Github, Gitlab of SourceTree) die openbaar toegankelijk is.",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"Vanuit de gedachte zelf documenterende code hoef je in dit geval alleen een publiccode.yaml op te nemen in de root van je repository. In deze yaml beschrijf je het project op een voor machines leesbare manier. Meer uitleg over publiccode.yaml vind je"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://yml.publiccode.tools/schema.core.html#top-level-keys-and-sections",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})})," ","hier"]})})," ","en een online-editor kun je"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://publiccode-editor.developers.italia.it/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"hier"]})})," ","terug vinden."]}),(0,u.jsx)(l.X6,{level:2,children:"2. Start een eigen OpenCatalogi installatie"}),(0,u.jsxs)(l.nv,{className:r,children:["OpenCatalogi is een federatief ecosysteem dat betekent dat iedere organisatie zijn eigen componenten catalogus kan starten. Vanuit de eigen catalogus kunnen zowel componenten worden geïmporteerd als beschikbaar gesteld voor andere catalogussen.",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"Meer informatie over het zelf inrichten van een OpenCatalogi vind je hier onder."]}),(0,u.jsx)(l.X6,{level:2,children:"3. Via andere catalogussen"}),(0,u.jsxs)(l.nv,{className:r,children:["OpenCatalogi synchroniseert onder andere met"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://componentencatalogus.commonground.nl/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"Common Ground Componenten­catalogus"]})})," ","en"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://developer.overheid.nl/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"Developer Overheid"]})}),", het daar vermelden van software zorgt ervoor dat deze wordt overgenomen in OpenCatalogi."]})]}),(0,u.jsxs)("section",{className:o,children:[(0,u.jsx)(l.X6,{level:1,id:"intsallation",children:"Installeren met de skeleton application"}),(0,u.jsx)(l.nv,{className:r,children:"De skeleton application is een makkelijke manier om de componenten te installeren en te gebruiken. De skeleton application is namelijk ontworpen voor snelle applicatietesten en prototypeontwikkeling op het NL Design System."})]}),(0,u.jsxs)("section",{className:o,children:[(0,u.jsx)(l.X6,{level:2,children:"Aan de slag "}),(0,u.jsxs)(l.nv,{className:r,children:['Om een eigen project op te zetten heb je een GitHub-account nodig en daar mee ingelogd zijn. Klik op de groene "Use this template" knop op de ',(0,u.jsx)("br",{}),(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://github.com/ConductionNL/skeleton-app",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"GitHub-pagina"]})}),'. Vertel GitHub waar je je prototype wilt hebben draaien en klik op "reate a repository from template"',(0,u.jsx)("br",{}),(0,u.jsx)("br",{})]}),(0,u.jsx)(l.X6,{level:3,children:"Lokaal je omgeving laten draaien"}),(0,u.jsx)(l.nv,{className:r,children:"Om lokaal te ontwikkelen, moet je de nieuwe repository klonen naar je eigen lokale machine. Open een terminal, navigeer naar de folder die de repository bevat, en maak een keuze tussen Node.js/npm of Docker om de app te laten draaien."}),(0,u.jsx)(l.X6,{level:4,children:"Node.js / NPM"}),(0,u.jsx)(l.nv,{className:r,children:"Je hebt een Git client nodig(optioneel), en je moet Node.js en NPM geïnstalleerd hebben. Dit zal de frontend op poort:9000 laten draaien, dus zorg er voor dat de poort niet al in gebruik is."}),(0,u.jsx)(l.dn,{className:a,children:h()`
          $ cd /pwa
          $ npm run build
          $ npm run serve`}),(0,u.jsx)(l.X6,{level:4,children:"Docker"}),(0,u.jsx)(l.nv,{className:r,children:"Je moet Docker geïnstalleerd hebben. Dit zal de frontend op poort:81 laten draaien, dus zorg er voor dat de poort niet al in gebruik is."}),(0,u.jsx)(l.dn,{className:a,children:"$ docker-compose pull"}),(0,u.jsx)(l.nv,{children:"De eerste keer dat je Docker containers of wanneer je grote veranderingen hebt gemaakt aan de werking van de applicatie, voert je het volgende commando uit:"}),(0,u.jsx)(l.dn,{className:a,children:"$ docker-compose up --build"}),(0,u.jsx)(l.nv,{children:"Als je dit niet doet dan draai je de containers zonder de applicatie container te herbouwen."}),(0,u.jsx)(l.dn,{className:a,children:"$ docker-compose up"}),(0,u.jsxs)(l.nv,{children:["Na het succesvol instellen van de ontwikkelomgeving, navigeer naar"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"http://localhost:81/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"http://localhost:81/"]})})," ","om de app in de browser te bekijken."]}),(0,u.jsx)(l.X6,{level:4,children:"Back-endverbinding configureren"}),(0,u.jsxs)(l.nv,{className:r,children:["Om verbinding te maken tussen de frontend en de lokale back-end moet je eerst de back-end opstarten, je kunt de installatiehandleiding"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://github.com/OpenCatalogi/OpenCatalogiBundle#opencatalogibundle-",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"hier"]})})," ","volgen."]}),(0,u.jsxs)(l.nv,{children:["Om de frontend met de lokale gateway te laten praten moet je de omgevingsvariabelen in het"," ",(0,u.jsx)(l.EK,{className:s,children:".env.development"})," bestand veranderen. Vervang de inhoud onder het kopje"," ",(0,u.jsx)(l.EK,{className:s,children:"Backend-config"})," met het volgende:"]}),(0,u.jsx)(l.dn,{className:a,children:h()`
            GATSBY_ME_URL=http://localhost/me
            GATSBY_API_URL=http://localhost/api
            GATSBY_ADMIN_URL=http://localhost/admin
            GATSBY_BASE_URL=http://localhost
            GATSBY_FRONTEND_URL=http://localhost:8000
            GATSBY_ORGANIZATION=http://webresourcecatalogus.conduction.svc.cluster.local/organizations/b2d3176e-f1c6-4365-ab86-dd253c65fc43
            GATSBY_LOGIN_REDIRECT=vault
            GATSBY_ADMIN_DASHBOARD_URL=https://admin.opencatalogi.nl
          `}),(0,u.jsx)(l.nv,{children:"Herstart de frontend na het aanpassen van dit bestand."}),(0,u.jsx)(l.X6,{level:5,children:"Node.js / NPM"}),(0,u.jsxs)(l.nv,{className:r,children:["Stop de server door op ",(0,u.jsx)(l.EK,{className:s,children:"CTRL + C"})," te drukken en bouw de frontend opnieuw op:"]}),(0,u.jsx)(l.dn,{className:a,children:h()`
          $ npm run build
          $ npm run serve`}),(0,u.jsx)(l.X6,{level:5,children:"Docker"}),(0,u.jsxs)(l.nv,{className:r,children:["Stop de server door op ",(0,u.jsx)(l.EK,{className:s,children:"CTRL + C"})," te drukken en herstart frontend:"]}),(0,u.jsx)(l.dn,{className:a,children:h()`
          $ docker-compose down
          $ docker-compose up`}),(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),(0,u.jsxs)(l.nv,{children:["Om de werking van de common-gateway die samen met de applicatie gaat draaien, te veranderen verwijzen we vriendelijk naar de technische documentatie van de"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://commongateway.readthedocs.io/en/latest/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"common-gateway"]})}),"."]}),(0,u.jsx)(l.X6,{level:2,children:"Installeren op Kubernetes omgevingen"}),(0,u.jsxs)(l.nv,{className:r,children:["Om de applicatie te installeren op je eigen cloud omgeving ondersteunen we installaties in"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://kubernetes.io/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"kubernetes"]})})," ","met het gebruik van de bijgeleverde"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://helm.sh/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"Helm"]})})," ","grafiek. Kubernetes is een Container Orkestratie dat een standaard is geworden voor Nederlandse gemeenten onder de"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://haven.commonground.nl/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"Haven"]})})," ","standaard, en waar Helm de standaard installatie methode voor componenten is.",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"De Helm grafiek kan geïnstalleerd worden met de hulp van Kubernetes beheertools zoals"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://rancher.com/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"Rancher"]})}),".",(0,u.jsx)("br",{}),(0,u.jsx)("br",{}),"De Helm grafiek kan ook geïnstalleerd worden door Helm te draaien van je lokale machine (zie de instructies over hoe je Helm installeert op ",(0,u.jsx)("br",{}),(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://helm.sh/docs/intro/install/#through-package-managers/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"helm.sh"]})}),", hiervoor is het vereist om"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://kubernetes.io/docs/tasks/tools/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"kubectl"]})})," ","te hebben geïnstalleerd)."]}),(0,u.jsx)(l.dn,{className:a,children:h()`
          $ helm repo add opencatalogi https://raw.githubusercontent.com/opencatalogi/web-app/development/helm/
          $ helm install my-opencatalogi opencatalogi/opencatalogi`}),(0,u.jsxs)(l.nv,{children:["Voor overige configuratie verwijzen we vriendelijk naar de documentatie van de helm grafiek die vind je"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://github.com/OpenCatalogi/web-app/blob/e3fdf396cd5fb39266fd77a2af404cb59a881cb7/helm/README.md/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"hier"]})}),"."]}),(0,u.jsx)(l.X6,{level:2,children:"Technische Documentatie"}),(0,u.jsxs)(l.nv,{className:r,children:["De volledige technische documentatie is te vinden op"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://skeleton-app.readthedocs.io/en/latest/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"Read the Docs"]})})," ","en is gebaseerd op"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://www.mkdocs.org/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"MKDocs"]})}),".",(0,u.jsx)("br",{})," ",(0,u.jsx)("br",{}),'Als je de technische documentatie lokaal wilt draaien, kan je dit doen door middel van de MKDocs server en het "erve" commando.']}),(0,u.jsx)(l.dn,{className:a,children:"$ mkdocs serve"}),(0,u.jsxs)(l.nv,{children:["Ga naar de repository en voer het commando uit om de documentatie beschikbaar te stellen op poort:8000. ",(0,u.jsx)("br",{}),"Zorg er voor dat je eerst"," ",(0,u.jsx)("span",{children:(0,u.jsxs)(l.rU,{target:"_new",href:"https://www.mkdocs.org/user-guide/installation/",children:[(0,u.jsx)(l.JO,{className:"utrecht-icon--conduction-start",children:(0,u.jsx)(c.Z,{})}),"MKDocs installeert"]})}),"."]})]})]})};var g=()=>(0,u.jsx)(j,{})},1379:function(e,n,t){t.d(n,{x:function(){return g}});var s=t(7294),a=t(8177),r=t(5019),o=t(7606),i=t(3168),l=t(686),c=t(7177),d=t(3433);var h=t(1082);const m=e=>{const n=s.useContext(c.Z);return{postRepository:()=>(0,l.useMutation)([],null==n?void 0:n.Github.postRepository,{onSuccess:async n=>{(async(e,n,t)=>{await e.cancelQueries(n);const s=e.getQueryData(n);s&&e.setQueryData(n,[t].concat((0,d.Z)(s))),e.invalidateQueries(n)})(e,"github",n),n.organization&&(0,h.c4)(`/organizations/${n.organization._self.id}`),n.component&&(0,h.c4)(`/components/${n.component._self.id}`)},onError:e=>{console.warn(e.message)}})}};var p=t(1391),u=t(1800),j=t(5893);const g=e=>{let{title:n,placeholder:t,buttonLabel:c}=e;const{t:d}=(0,r.$)(),[h,g]=s.useState(!1),[x,v]=s.useState(!1),b=(0,l.useQueryClient)(),k=m(b).postRepository(),{register:f,formState:{errors:N},handleSubmit:w,watch:y}=(0,a.cI)(),O=y("html_url");return s.useEffect((()=>{g(k.isLoading)}),[k.isLoading]),s.useEffect((()=>{v(k.isError)}),[k.isError]),(0,j.jsxs)("div",{className:"SubmitUrlTemplate-module--container--a039d",children:[(0,j.jsx)(u.X6,{level:4,children:n}),(0,j.jsx)("form",{onSubmit:w((e=>{const n={repository:{html_url:e.html_url.trim()}};k.mutate({payload:n})})),children:(0,j.jsxs)("div",{className:"SubmitUrlTemplate-module--formContent--1d7ac",children:[(0,j.jsxs)(u.Wi,{className:"SubmitUrlTemplate-module--formField--4d7d9",children:[(0,j.jsx)(u.fE,{id:"submitUrlTextBox",...f("html_url"),invalid:N.html_url,placeholder:d(t),disabled:h,type:"url"}),x&&(0,j.jsx)("span",{className:"SubmitUrlTemplate-module--customErrorMessage--01163",children:d("Oops, something went wrong. Please make sure you're using a valid repository URL or try again later.")})]}),(0,j.jsxs)(p.zx,{className:"SubmitUrlTemplate-module--submitButton--41942",type:"submit",disabled:h||!O,children:[(0,j.jsx)(o.G,{icon:i.XCy}),null!=c?c:d("Send")]})]})})]})}}}]);
//# sourceMappingURL=component---src-pages-documentation-usage-tsx-a5b9b9b3c1970f5ea60e.js.map