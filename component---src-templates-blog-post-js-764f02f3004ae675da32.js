(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return A});a(34),a(33);var r=a(7),n=a.n(r),i=a(0),o=a.n(i),s=a(150),l=a(162),c=a(154),d=a(157),u=a(151),f=(a(167),function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return o.a.createElement(c.a,{location:this.props.location,title:t},o.a.createElement(d.a,{title:e.frontmatter.title,description:e.excerpt}),o.a.createElement("h1",null,e.frontmatter.title),o.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),e.frontmatter.tags?o.a.createElement(o.a.Fragment,null,"Tagged under:"," ",e.frontmatter.tags.map(function(e){return o.a.createElement(s.Link,{to:"/tags/"+e.replace(/\s/g,"-"),className:"category",key:e},e)}),o.a.createElement("hr",{style:{marginBottom:Object(u.a)(1),marginTop:Object(u.a)(1)}})):o.a.createElement(o.a.Fragment,null),o.a.createElement(l.a,null),o.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o.a.createElement("li",null,r&&o.a.createElement(s.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),o.a.createElement("li",null,n&&o.a.createElement(s.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(o.a.Component));t.default=f;var A="1159323781"},150:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return A});var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(149),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(152),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(32);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),A=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}A.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(155),n=a.n(r),i=a(156),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new n.a(o.a);var l=s.rhythm,c=s.scale},152:function(e,t,a){var r;e.exports=(r=a(153))&&r.default||r},153:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),i=a(4),o=a.n(i),s=a(51),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=c},154:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(150),o=a(151);t.a=function(e){var t,a=e.location,s=e.title,l=e.children,c=Object(r.useState)(!1),d=c[0],u=c[1];t="/blog/"===a.pathname?n.a.createElement("h1",{style:{marginBottom:Object(o.a)(1.5),marginTop:0,fontWeight:700}},n.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},s)):n.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0,marginBottom:Object(o.a)(-1)}},n.a.createElement(i.Link,{style:{boxShadow:"none",textDecoration:"none",color:"#d13c57"},to:"/"},s));return n.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(o.a)(24),padding:Object(o.a)(1.5)+" "+Object(o.a)(.75)}},n.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px"}}," ",n.a.createElement("span",{role:"img",style:{cursor:"pointer",MozUserSelect:"none",WebkitUserSelect:"none",msTouchSelect:"none",msUserSelect:"none",userSelect:"none"},onClick:function(){d?(document.body.style.backgroundColor="white",document.body.style.color="black",u(!1)):(document.body.style.backgroundColor="#0c0b0e",document.body.style.color="#fbebd7",u(!0))}},d?"🌞":"🌙")," "),t,l,n.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",n.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","& hosted on ",n.a.createElement("a",{href:"https://github.com/arjunnn/blog"},"GitHub")))}},157:function(e,t,a){"use strict";var r=a(158),n=a(0),i=a.n(n),o=a(4),s=a.n(o),l=a(159),c=a.n(l),d=a(150);function u(e){var t=e.description,a=e.lang,n=e.meta,o=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:s},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:r}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=u;var f="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Arjun's Blog",description:"Arjun's blog",author:"Arjun Munji"}}}}},162:function(e,t,a){"use strict";a(163);var r=a(165),n=a(0),i=a.n(n),o=a(150),s=a(166),l=a.n(s),c=a(151);var d="4007731267";t.a=function(){return i.a.createElement(o.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author;return t.social,i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Personal blog by  ",i.a.createElement("a",{href:"https://arjun.ninja/",target:"_blank"},a),". ",i.a.createElement("br",null)," ","I like to learn things."))},data:r})}},163:function(e,t,a){"use strict";a(164)("fixed",function(e){return function(){return e(this,"tt","","")}})},164:function(e,t,a){var r=a(11),n=a(24),i=a(16),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},165:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAUEAf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAv/aAAwDAQACEAMQAAABl7MVVFgOjKhrLuIJj//EAB0QAAICAQUAAAAAAAAAAAAAAAMEAAECEBESEyP/2gAIAQEAAQUCALtjYdFsrxK1luCJ16s3yWn/xAAXEQADAQAAAAAAAAAAAAAAAAACEBEx/9oACAEDAQE/ARkQ4v/EABgRAAIDAAAAAAAAAAAAAAAAABARAQJB/9oACAECAQE/AYSFdH//xAAcEAACAgIDAAAAAAAAAAAAAAABIQAQERJBYYH/2gAIAQEABj8CLc3C6oYc2HNAz2v/xAAaEAEBAAMBAQAAAAAAAAAAAAABEQAQMSFB/9oACAEBAAE/IaD4EmT8wBEahVrofTK/iTrpHjjis45r/9oADAMBAAIAAwAAABAzIAP/xAAXEQADAQAAAAAAAAAAAAAAAAABEDER/9oACAEDAQE/EAM9qov/xAAYEQACAwAAAAAAAAAAAAAAAAABEBExcf/aAAgBAgEBPxCYwrYX/8QAHRABAAICAgMAAAAAAAAAAAAAAREhADEQYXGR8P/aAAgBAQABPxASbUHSLc4JRWA+6yMQ9cPLsr1hziEhId2cHGBQrxghhipBx//Z",width:50,height:50,src:"/blog/static/de2c10f31e3a4ff19fd21dc7d95f765e/d2d31/profile-pic.jpg",srcSet:"/blog/static/de2c10f31e3a4ff19fd21dc7d95f765e/d2d31/profile-pic.jpg 1x,\n/blog/static/de2c10f31e3a4ff19fd21dc7d95f765e/0b804/profile-pic.jpg 1.5x,\n/blog/static/de2c10f31e3a4ff19fd21dc7d95f765e/753c3/profile-pic.jpg 2x,\n/blog/static/de2c10f31e3a4ff19fd21dc7d95f765e/31ca8/profile-pic.jpg 3x"}}},site:{siteMetadata:{author:"Arjun Munji",social:{twitter:"arjundot"}}}}}},166:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),o=r(a(52)),s=r(a(160)),l=r(a(161)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},A=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},p=[];var h=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),p.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+s+l+t+o+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},m=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,s.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});m.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,s=A(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:s},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:A(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:A(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,A=e.placeholderClassName,p=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.Tag,E="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:w,className:A};if(p){var j=p;return c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(m,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(m,(0,l.default)({src:j.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(m,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},j))}}))}if(h){var x=h,B=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},i);return"inherit"===i.display&&delete B.display,c.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:B,ref:this.handleRef,key:"fixed-"+JSON.stringify(x.srcSet)},x.base64&&c.default.createElement(m,(0,l.default)({src:x.base64},S)),x.tracedSVG&&c.default.createElement(m,(0,l.default)({src:x.tracedSVG},S)),E&&c.default.createElement(b,{title:t,style:{backgroundColor:E,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(m,{alt:a,title:t,width:x.width,height:x.height,src:x.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:x.width,height:x.height},x))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:b,sizes:E,fixed:b,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=y;t.default=w},167:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-764f02f3004ae675da32.js.map