(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{51:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return c});a(69);var n=a(0),r=a.n(n),l=a(61);t.default=({data:e})=>{const t=e.markdownRemark;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"page"},r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})))};const c="861893041"},56:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(59))},57:function(e,t,a){"use strict";t.a={access_token:null,myminifactory_url:"https://www.myminifactory.com",logo_url:"https://www.myminifactory.com/images/logo_mobile.png",objects_url:"https://www.myminifactory.com/api/v2/search?cat=112&per_page=16&light=1",suggester_url:"https://www.myminifactory.com/search/search-suggester",social_links:[{name:"Instagram",url:"https://www.instagram.com/scantheworld"},{name:"Twitter",url:"https://twitter.com/Scan_The_World"},{name:"Medium",url:"https://medium.com/scantheworld"}]}},58:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World"}}}}},59:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(3),c=a.n(l),s=a(16),i=a(2);const o=({location:e})=>{const t=i.default.getResourcesForPathnameSync(e.pathname);return t?r.a.createElement(s.a,{location:e,pageResources:t,...t.json}):null};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},60:function(e){e.exports={data:{allMarkdownRemark:{totalCount:2,edges:[{node:{id:"9134edd0-5496-52e5-902b-f88fd1695764",frontmatter:{title:"Contribute",path:"contribute"},excerpt:"contribute page"}},{node:{id:"e73a7eb4-2191-51cd-a039-9f0f75b201b8",frontmatter:{title:"About",path:"about"},excerpt:"About page"}}]}}}},61:function(e,t,a){"use strict";var n=a(58),r=a(0),l=a.n(r),c=a(3),s=a.n(c),i=a(9),o=a.n(i);a(56);const m=l.a.createContext({}),u=e=>l.a.createElement(m.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)"));u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(62);var d=a(55),p=a(57);var h=class extends r.Component{constructor(e){super(e),this.state={links:e.links?e.links:p.a.social_links}}renderLinks(){return this.state.links.map((e,t)=>{let a=null;switch(e.name.toLowerCase()){case"twitter":a=l.a.createElement(d.c,null);break;case"medium":a=l.a.createElement(d.b,null);break;case"instagram":a=l.a.createElement(d.a,null);break;default:a=l.a.createElement(d.c,null)}return l.a.createElement("li",{key:t,className:"link-item",title:e.name},l.a.createElement("a",{href:e.url},a))})}render(){return l.a.createElement("div",{className:"social-bar"},l.a.createElement("p",{className:"social"},"social"),l.a.createElement("ul",{className:"links"},this.renderLinks()))}},w=a(60);a(63);const f="https://www.myminifactory.com",y="https://www.myminifactory.com/favicon.png";var k=class extends r.Component{renderLinks(){return l.a.createElement(u,{query:"3776865759",render:e=>{let t=[l.a.createElement("li",{key:0,className:"link-item"},l.a.createElement("a",{href:"/scan-the-world"},"Home"))];return e.allMarkdownRemark.edges.map(({node:e},a)=>t.push(l.a.createElement("li",{key:a+1,className:"link-item"},l.a.createElement(o.a,{to:e.frontmatter.path},e.frontmatter.title)))),t},data:w})}render(){return l.a.createElement("div",{className:"top-bar"},l.a.createElement("a",{href:f},l.a.createElement("img",{className:"logo",src:y,alt:"MyMiniFactory Logo"})),l.a.createElement("ul",{className:"links"},this.renderLinks()))}};const E=({children:e})=>l.a.createElement(u,{query:"755544856",render:t=>l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(h,null),l.a.createElement("main",null,e)),data:n});E.propTypes={children:s.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-templates-page-js-05c84c05544232c4ad23.js.map