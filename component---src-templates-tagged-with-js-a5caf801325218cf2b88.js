(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return s});var a=n(0),r=n.n(a),o=n(154),i=n(151),l=n(150),c=n(168);t.default=function(e){var t=e.pageContext,n=t.posts,a=t.tag,s=e.data.site.siteMetadata.title;return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{location:e.location,title:s},r.a.createElement("p",{style:{display:"block",marginBottom:Object(i.a)(1),marginTop:Object(i.a)(1)}}),r.a.createElement("h1",null,n.length+" "+(1===n.length?"post":"posts")+" tagged '"+a+"'"),r.a.createElement(l.Link,{to:"/tags/"},"View all tags?"),n.map(function(e){var t=e.node;return t.frontmatter.title||t.fields.slug,r.a.createElement(c.a,{slug:t.fields.slug,date:t.frontmatter.date,excerpt:t.excerpt,title:t.frontmatter.title,key:t.fields.slug,tags:t.frontmatter.tags})}),r.a.createElement("hr",null)))};var s="1097489062"},150:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return g});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(149),c=n.n(l);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return l.withPrefix}),n.d(t,"navigate",function(){return l.navigate}),n.d(t,"push",function(){return l.push}),n.d(t,"replace",function(){return l.replace}),n.d(t,"navigateTo",function(){return l.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),g=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,n){"use strict";n.d(t,"a",function(){return c}),n.d(t,"b",function(){return s});var a=n(155),r=n.n(a),o=n(156),i=n.n(o);i.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete i.a.googleFonts;var l=new r.a(i.a);var c=l.rhythm,s=l.scale},152:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(51),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(150),i=n(151);t.a=function(e){var t,n=e.location,l=e.title,c=e.children,s=Object(a.useState)(!1),u=s[0],d=s[1];t="/blog/"===n.pathname?r.a.createElement("h1",{style:{marginBottom:Object(i.a)(1.5),marginTop:0,fontWeight:700}},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},l)):r.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(i.a)(-1)}},r.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#d13c57"},to:"/"},l));return r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(i.a)(24),padding:Object(i.a)(1.5)+" "+Object(i.a)(.75)}},r.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px"}}," ",r.a.createElement("span",{role:"img",style:{cursor:"pointer",MozUserSelect:"none",WebkitUserSelect:"none",msTouchSelect:"none",msUserSelect:"none",userSelect:"none"},onClick:function(){u?(document.body.style.backgroundColor="white",document.body.style.color="black",d(!1)):(document.body.style.backgroundColor="#0c0b0e",document.body.style.color="#fbebd7",d(!0))}},u?"🌞":"🌙")," "),t,c,r.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","& hosted on ",r.a.createElement("a",{href:"https://github.com/arjunnn/blog"},"GitHub")))}},168:function(e,t,n){"use strict";n(34);var a=n(0),r=n.n(a),o=n(150),i=n(151);t.a=function(e){return r.a.createElement("div",{key:e.slug,style:{marginBottom:Object(i.a)(1)}},r.a.createElement("h3",{style:{marginBottom:Object(i.a)(.25)}},r.a.createElement(o.Link,{style:{boxShadow:"none",color:"#d13c57"},to:e.slug},e.title)),r.a.createElement("small",{style:{marginRight:Object(i.a)(1)}},e.date),r.a.createElement("p",{style:{marginBottom:Object(i.a)(.25)}},e.excerpt),r.a.createElement("div",null,e.tags&&e.tags.length>0?"Tags: ":"",e.tags.map(function(e){return r.a.createElement(o.Link,{to:"/tags/"+e.replace(/\s/g,"-"),className:"category",key:e},e)})))}}}]);
//# sourceMappingURL=component---src-templates-tagged-with-js-a5caf801325218cf2b88.js.map