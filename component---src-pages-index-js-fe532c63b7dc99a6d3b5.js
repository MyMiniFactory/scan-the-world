(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{54:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(61),o=a(65),i=(a(76),a(77),a(57)),c=a(78),l=a.n(c),u=a(81);a(80);var m=class extends n.a.Component{constructor(e){super(e),this.state={object:e.object?e.object:{},isLoaded:!1}}render(){return n.a.createElement("a",{className:"object-tile-a",href:this.state.object.url},n.a.createElement("div",{className:"object-tile",style:{backgroundImage:`url(${this.state.object.images[0].thumbnail.url})`}},n.a.createElement("div",{className:"info"},n.a.createElement("p",null,this.state.object.name))))}};var d=class extends n.a.Component{constructor(e){super(e),this.state={objects:e.objects?e.objects:[],isLoaded:!1,currentPage:0,hasMore:!0,query:e.query?e.query:"",sortBy:e.query?e.query:"date"},this.getObjects=this.getObjects.bind(this)}componentDidMount(){}componentDidUpdate(e){this.props.query===e.query&&this.props.sortBy===e.sortBy||this.setState({currentPage:0,query:this.props.query,sortBy:this.props.sortBy?this.props.sortBy:"popularity",objects:[],isLoaded:!1},()=>{this.getObjects(0)})}getObjects(e){fetch(i.a.objects_url+"&page="+e+"&q="+this.state.query+"&sort="+this.state.sortBy).then(e=>e.json()).then(e=>{e.items?this.setState({isLoaded:!0,objects:this.state.objects.concat(e.items)}):this.setState({hasMore:!1})},e=>{this.setState({hasMore:!1,isLoaded:!0,error:e})})}renderSkeleton(){const e=Array.from({length:4},(e,t)=>n.a.createElement(u.a,{key:t,height:230,width:230,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},n.a.createElement("rect",{x:"0",y:"0",rx:"5",ry:"5",width:"230",height:"230"})));return n.a.createElement("div",{className:"loader",key:0},e)}render(){const e=this.state.objects.map((e,t)=>n.a.createElement(m,{key:t,object:e}));return this.state.isLoaded&&0===this.state.objects.length?n.a.createElement("p",null,"No objects found :(",n.a.createElement("br",null),"Try reloading the page"):n.a.createElement(l.a,{className:"tiles",pageStart:0,loadMore:this.getObjects,hasMore:this.state.hasMore,loader:this.renderSkeleton(),useWindow:!0,threshold:400},e)}},h=(a(82),a(83)),p=a.n(h);function g(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const y=e=>e.slice(0,4).map(e=>({name:e[1],image:e[2],designer:e[3],url:e[4]})),b=e=>e.name,f=e=>n.a.createElement("div",{className:"search-suggestion"},n.a.createElement("a",{href:e.url},n.a.createElement("img",{className:"image",alt:"suggested object",src:e.image}),n.a.createElement("div",{className:"text",title:e.name},e.name,n.a.createElement("br",null),n.a.createElement("span",{className:"designer-name"},e.designer))));var E=class extends n.a.Component{constructor(e){super(e),g(this,"onChange",(e,{newValue:t})=>{this.setState({value:t})}),g(this,"keyPressed",e=>{"Enter"===e.key&&(this.setState({sortBy:"popular"}),this.props.onSearch(this.state.value,"popular"))}),g(this,"onSuggestionsFetchRequested",({value:e})=>{fetch(i.a.suggester_url+"/"+e+"?cat=112").then(e=>e.json()).then(e=>{this.setState({suggestions:y(e)})},e=>{console.log("error")})}),g(this,"onSuggestionsClearRequested",()=>{this.setState({suggestions:[]})}),this.state={value:"",sortBy:"date",suggestions:[]},this.onChange=this.onChange.bind(this),this.changeSorting=this.changeSorting.bind(this),this.keyPressed=this.keyPressed.bind(this),this.onSuggestionsFetchRequested=this.onSuggestionsFetchRequested.bind(this),this.onSuggestionsClearRequested=this.onSuggestionsClearRequested.bind(this)}changeSorting(e){this.setState({sortBy:e}),this.props.onSearch(this.state.value,e)}render(){const{value:e,suggestions:t}=this.state,a={placeholder:"Search the collection",value:e,onChange:this.onChange,onKeyPress:this.keyPressed};return n.a.createElement("div",{className:"search"},n.a.createElement(p.a,{suggestions:t,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:b,renderSuggestion:f,inputProps:a}),n.a.createElement("p",{className:"sortby"},n.a.createElement("span",{onClick:()=>{this.changeSorting("date")},className:"date"===this.state.sortBy?"active":""},"recent")," | ",n.a.createElement("span",{onClick:()=>{this.changeSorting("popular")},className:"date"!==this.state.sortBy?"active":""},"popular")))}};t.default=class extends n.a.Component{constructor(e){super(e),this.state={showMenu:!0},this.state.query="",this.state.sortBy="date",this.onSearch=this.onSearch.bind(this)}onSearch(e,t){console.log(t),this.setState({query:e,sortBy:t})}render(){return n.a.createElement(r.a,null,n.a.createElement(o.a,{title:"Home"}),n.a.createElement("div",{className:"content"},n.a.createElement(E,{onSearch:this.onSearch}),n.a.createElement("div",{className:"scan-the-world"},n.a.createElement("div",{className:"intro"},n.a.createElement("h1",null,n.a.createElement("b",null,"scan")," the ",n.a.createElement("i",null,"world")),n.a.createElement("p",null,"Scan The World is a movement archive objects of cultural significance using 3D scanning technologies, producing an extensive platform of content suitable for 3D printing.")),n.a.createElement(d,{query:this.state.query,sortBy:this.state.sortBy}))))}}},56:function(e,t,a){e.exports=(e=>e&&e.default||e)(a(59))},57:function(e,t,a){"use strict";t.a={access_token:null,myminifactory_url:"https://www.myminifactory.com",logo_url:"https://www.myminifactory.com/images/logo_mobile.png",objects_url:"https://www.myminifactory.com/api/v2/search?cat=112&per_page=16&light=1",suggester_url:"https://www.myminifactory.com/search/search-suggester",social_links:[{name:"Instagram",url:"https://www.instagram.com/scantheworld"},{name:"Twitter",url:"https://twitter.com/Scan_The_World"},{name:"Medium",url:"https://medium.com/scantheworld"}]}},58:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World"}}}}},59:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(3),o=a.n(r),i=a(16),c=a(2);const l=({location:e})=>{const t=c.default.getResourcesForPathnameSync(e.pathname);return t?n.a.createElement(i.a,{location:e,pageResources:t,...t.json}):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},60:function(e){e.exports={data:{allMarkdownRemark:{totalCount:4,edges:[{node:{id:"e73a7eb4-2191-51cd-a039-9f0f75b201b8",frontmatter:{title:"About",path:"about"},excerpt:"About Scan The World"}},{node:{id:"dcd0eecf-22eb-5534-9157-fd1063671224",frontmatter:{title:"Museums",path:"museums"},excerpt:"Museums"}},{node:{id:"9134edd0-5496-52e5-902b-f88fd1695764",frontmatter:{title:"Contribute",path:"contribute"},excerpt:"contribute page"}},{node:{id:"c12525f1-aa08-587f-a564-9de23ef8a5e9",frontmatter:{title:"Learn",path:"learn"},excerpt:"contribute page"}}]}}}},61:function(e,t,a){"use strict";var s=a(58),n=(a(62),a(0)),r=a.n(n),o=a(3),i=a.n(o),c=a(9),l=a.n(c);a(56);const u=r.a.createContext({}),m=e=>r.a.createElement(u.Consumer,null,t=>e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)"));m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func};a(63);var d=a(55),h=a(57);var p=class extends n.Component{constructor(e){super(e),this.state={links:e.links?e.links:h.a.social_links}}renderLinks(){return this.state.links.map((e,t)=>{let a=null;switch(e.name.toLowerCase()){case"twitter":a=r.a.createElement(d.c,null);break;case"medium":a=r.a.createElement(d.b,null);break;case"instagram":a=r.a.createElement(d.a,null);break;default:a=r.a.createElement(d.c,null)}return r.a.createElement("li",{key:t,className:"link-item",title:e.name},r.a.createElement("a",{href:e.url},a))})}render(){return r.a.createElement("div",{className:"social-bar"},r.a.createElement("p",{className:"social"},"social"),r.a.createElement("ul",{className:"links"},this.renderLinks()))}},g=a(60);a(64);const y="https://www.myminifactory.com",b="https://www.myminifactory.com/favicon.png";var f=class extends n.Component{renderLinks(){return r.a.createElement(m,{query:"3776865759",render:e=>{let t=[r.a.createElement("li",{key:0,className:"link-item"},r.a.createElement(l.a,{to:"/"},"Home"))];return e.allMarkdownRemark.edges.map(({node:e},a)=>t.push(r.a.createElement("li",{key:a+1,className:"link-item"},r.a.createElement(l.a,{to:"/"+e.frontmatter.path},e.frontmatter.title)))),t},data:g})}render(){return r.a.createElement("div",{className:"top-bar"},r.a.createElement("a",{href:y},r.a.createElement("img",{className:"logo",src:b,alt:"MyMiniFactory Logo"})),r.a.createElement("ul",{className:"links"},this.renderLinks()))}};const E=({banner:e,children:t})=>{let a={};return e&&(a={backgroundImage:'url("'+e+'")',backgroundRepeat:"no-repeat",backgroundPosition:"top",backgroundSize:"auto",paddingTop:"300px"}),r.a.createElement(m,{query:"755544856",render:e=>r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(p,null),r.a.createElement("main",{style:a},t)),data:s})};E.propTypes={children:i.a.node.isRequired};t.a=E},65:function(e,t,a){"use strict";var s=a(66),n=a(0),r=a.n(n),o=a(3),i=a.n(o),c=a(68),l=a.n(c);function u({description:e,lang:t,meta:a,title:n}){const{site:o}=s.data,i=e||o.siteMetadata.description;return r.a.createElement(l.a,{htmlAttributes:{lang:t},title:n,titleTemplate:`%s | ${o.siteMetadata.title}`,meta:[{name:"description",content:i},{property:"og:title",content:n},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:n},{name:"twitter:description",content:i}].concat(a)})}u.defaultProps={lang:"en",meta:[],description:"",title:"Scan The World"},u.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.arrayOf(i.a.object),title:i.a.string.isRequired},t.a=u},66:function(e){e.exports={data:{site:{siteMetadata:{title:"Scan The World",description:"",author:"Romain B."}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-fe532c63b7dc99a6d3b5.js.map