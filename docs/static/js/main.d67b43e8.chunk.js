(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{3889:function(e,t,a){e.exports=a(3946)},3895:function(e,t,a){},3931:function(e,t,a){},3932:function(e,t,a){},3946:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),l=a.n(o),i=a(3994),c=a(3993),s=a(61),d=a(85),m=Object(d.a)({palette:{primary:{main:"#556cd6"},secondary:{main:"#19857b"},error:{main:s.a.A400},background:{default:"#fff"}}}),u=(a(3895),a(86)),h=a(88),f=a(48),p=a(49),g=a(59),y=a(50),E=a(60),v=a(4),b=a(3987),w=a(3995),k=a(3986),C=a(89),S=a(3992),T=a(79),N=a(3991),O=a(3989),D=a(3947),x=a(3988),j=a(3990),B=a(37),L=a(80),I=a.n(L),Y=a(66),G=a(16),P=a.n(G),_=a(22),A=a.n(_),M=function(){return r.a.createElement("div",{style:{marginTop:4,paddingLeft:5,paddingRight:5,color:"#999"}},"/")},W=(a(3931),a(3984)),R=(a(3932),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(g.a)(this,(e=Object(y.a)(t)).call.apply(e,[this].concat(r)))).handlePrevent=function(e){e.preventDefault()},a.handleUrl=function(e){window.open(e,"_blank")},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.data,t=e.name,a=e.createdAt,n=e.description,o=e.votesCount,l=e.url,i=e.website,c=e.thumbnail;return r.a.createElement("div",{className:"item"},r.a.createElement(W.a,{style:{padding:20},onClick:this.handleUrl.bind(this,i)},r.a.createElement("div",{className:"item-container"},r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"main"},r.a.createElement("img",{alt:"img",className:"img",src:c.url}),r.a.createElement("div",{className:"main-text"},r.a.createElement(D.a,{variant:"h5",display:"block",gutterBottom:!0},r.a.createElement(k.a,{onClick:this.handlePrevent,color:"primary",target:"_blank",rel:"noopener noreferrer",href:l},t)),r.a.createElement("p",null,n))),r.a.createElement("div",{className:"side"},r.a.createElement("div",{className:"vote"},r.a.createElement(B.a,null),r.a.createElement("div",{style:{fontWeight:"700"}},o)))),r.a.createElement("div",{className:"footer"},"Created at ",P()(a).format("YYYY/MM/DD HH:mm")))))}}]),t}(r.a.Component)),q=a(81);var H="YYYY/MM/DD",Q="producthunt_token",U=function(e){function t(e){var a;Object(f.a)(this,t),(a=Object(g.a)(this,Object(y.a)(t).call(this,e))).renderToken=function(){return r.a.createElement(b.a,null,r.a.createElement(w.a,{id:"outlined-name",label:"Token",value:a.state.token,onChange:a.handleChangeToken,margin:"normal",type:"password",placeholder:"Input your producthunt developer token",helperText:r.a.createElement("div",null,"Input your producthunt developer token. You can find it at"," ",r.a.createElement(k.a,{style:{marginLeft:2},target:"_blank",rel:"noopener noreferrer",href:"https://www.producthunt.com/v2/oauth/applications"},"here")),fullWidth:!0,variant:"outlined"}),r.a.createElement("div",{style:{height:10}}),r.a.createElement(b.a,{row:!0},r.a.createElement(x.a,{variant:"contained",onClick:a.handleCancel},"Cancel"),r.a.createElement("div",{style:{paddingRight:20,display:"inline"}}),r.a.createElement(x.a,{variant:"contained",color:"primary",onClick:a.handleSaveToken},"Save")))},a.renderLoading=function(){return r.a.createElement("div",{style:{paddingTop:40},className:"center"},r.a.createElement(I.a,{type:"Plane",color:"#556cd6"}))},a.renderError=function(){return r.a.createElement(C.a,{className:"center",style:{flexDirection:"column",padding:20}},r.a.createElement(D.a,{variant:"h5",component:"h3"},"Ops"),r.a.createElement(D.a,{component:"p"},a.state.error?a.state.error:"Something is wrong."))},a.renderList=function(){return r.a.createElement("div",null,r.a.createElement("div",null,a.renderItems()),r.a.createElement("footer",{className:"footer-container"},r.a.createElement(b.a,{row:!0},r.a.createElement(x.a,{onClick:a.handleBefore,color:"primary",style:{marginBottom:8,marginLeft:10}},"Previous"),r.a.createElement(x.a,{onClick:a.handleNext,color:"primary",style:{marginBottom:8,marginLeft:10}},"Next"))))},a.renderItems=function(){return a.state.ids.map(function(e){return r.a.createElement(R,{key:"key_"+e,data:a.state.entries[e]})})},a.initData=function(){var e={token:a.state.token};a.state.since&&(e.since=a.state.since);var t=A.a.parse(window.location.search);t.before?e.before=t.before:t.after&&(e.after=t.after),function(e){var t=new q.GraphQLClient("https://api.producthunt.com/v2/api/graphql",{headers:{authorization:"Bearer ".concat(e.token)},mode:"cors"}),a=Object.assign({since:P()().subtract(30,"days").toDate()},e),n=a.since.toISOString(),r="",o="";a.after&&(r=a.after),a.before&&(o=a.before);var l='{\n    posts(order:VOTES,postedAfter:"'.concat(n,'"');return r?l+=',after:"'.concat(r,'",first:20'):o&&(l+=',before:"'.concat(o,'",last:20')),l+="){\n      pageInfo {\n        endCursor\n        startCursor\n      }\n      totalCount\n      edges {\n        node {\n          id\n          createdAt\n          name\n          description\n          votesCount\n          url\n          website\n          thumbnail {\n            type\n            url\n            videoUrl\n          }\n        }\n      }\n    }\n  }",t.request(l)}(e).then(function(e){if(a.setState({isLoading:!1}),e&&e.posts&&e.posts.edges&&e.posts.edges.length>0){var t=Object(h.a)({},a.state.entries),n=Object(u.a)(a.state.ids);e.posts.edges.forEach(function(e){t[e.node.id]=e.node,n.push(e.node.id)}),a.setState({entries:t,ids:n,before:e.posts.pageInfo.startCursor,after:e.posts.pageInfo.endCursor})}else a.setState({error:"No data."})}).catch(function(e){a.setState({isLoading:!1,error:e.message}),console.error("error",e)})},a.handleGithub=function(){window.open("https://github.com/xiaomingplus/producthunt-trending","_blank")},a.handleReload=function(){window.location.reload()},a.handleChangeToken=function(e){a.setState({token:e.target.value})},a.handleToggleToken=function(){a.setState({isShowToken:!a.state.isShowToken})},a.handleDateChange=function(e){a.setState({since:e})},a.handleSaveToken=function(){a.state.token&&(window.localStorage.setItem(Q,a.state.token),a.handleReload())},a.handleCancel=function(){a.setState({isShowToken:!1})},a.handleQuery=function(){var e=A.a.parse(window.location.search);e.since=P()(a.state.since).format(H);var t=A.a.stringify(e);window.location.search=t},a.handleBefore=function(){if(a.state.before){var e=A.a.parse(window.location.search);e.before=a.state.before,delete e.after;var t=A.a.stringify(e);window.location.search=t}},a.handleNext=function(){if(a.state.after){var e=A.a.parse(window.location.search);e.after=a.state.after,delete e.before;var t=A.a.stringify(e);window.location.search=t}};var n=A.a.parse(window.location.search),o=window.localStorage.getItem(Q)||"f481389cba9d24863cbf01c6c4e4d1315f11fafaf3671858db308e29a8ed493e",l=n.range,i="",c="";return"daily"!==l&&"weekly"!==l&&"monthly"!==l&&"yearly"!==l||(i=l),"daily"===i?c=P()().startOf("day").toDate():"weekly"===i?c=P()().subtract(7,"days").toDate():"monthly"===i?c=P()().subtract(30,"days").toDate():"yearly"===i&&(c=P()().subtract(365,"days").toDate()),n.since?c=P()(n.since).toDate():c||(i="weekly",c=P()().subtract(7,"days").toDate()),a.state={range:i,since:c,entries:{},ids:[],token:o,isLoading:!0,isShowToken:!1,before:"",after:"",error:""},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.initData()}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(Y.b,{utils:T.a},r.a.createElement("div",{className:"App"},r.a.createElement(N.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(j.a,{edge:"start",className:e.menuButton,color:"inherit",onClick:this.handleReload,"aria-label":"Logo"},r.a.createElement(B.d,null)),r.a.createElement(D.a,{variant:"h6",className:e.title},r.a.createElement(k.a,{href:"/",color:"inherit",underline:"none"},"ProductHunt Trending")),r.a.createElement(j.a,{"aria-label":"Change Token",onClick:this.handleToggleToken,color:"inherit"},r.a.createElement(B.c,null)),r.a.createElement(j.a,{edge:"end","aria-label":"Github",onClick:this.handleGithub,color:"inherit"},r.a.createElement(B.b,null)))),r.a.createElement(S.a,{maxWidth:"md"},r.a.createElement("div",{style:{height:20}}),this.state.isShowToken?this.renderToken():null,r.a.createElement(b.a,{row:!0,style:{alignItems:"flex-end",justifyContent:"space-between"}},r.a.createElement(b.a,{row:!0,style:{alignItems:"flex-end"}},r.a.createElement(Y.a,{margin:"normal",id:"mui-pickers-date",label:"Since",disableFuture:!0,autoOk:!0,format:H,value:this.state.since,onChange:this.handleDateChange,KeyboardButtonProps:{"aria-label":"change date"}}),r.a.createElement(x.a,{onClick:this.handleQuery,variant:"contained",color:"primary",style:{marginBottom:8,marginLeft:10}},"Get")),r.a.createElement("div",{className:"quick-query"},r.a.createElement(D.a,{variant:"subtitle1",display:"block",gutterBottom:!0},r.a.createElement(k.a,{color:"daily"!==this.state.range?"primary":"textSecondary",href:"/?range=daily"},"Daily")),r.a.createElement(M,null),r.a.createElement(D.a,{variant:"subtitle1",display:"block",gutterBottom:!0},r.a.createElement(k.a,{color:"weekly"!==this.state.range?"primary":"textSecondary",href:"/?range=weekly"},"Weekly")),r.a.createElement(M,null),r.a.createElement(D.a,{variant:"subtitle1",display:"block",gutterBottom:!0},r.a.createElement(k.a,{color:"monthly"!==this.state.range?"primary":"textSecondary",href:"/?range=monthly"},"Monthly")),r.a.createElement(M,null),r.a.createElement(D.a,{variant:"subtitle1",display:"block",gutterBottom:!0},r.a.createElement(k.a,{color:"yearly"!==this.state.range?"primary":"textSecondary",href:"/?range=yearly"},"Yearly")))),r.a.createElement("div",{style:{height:20}}),this.state.error?this.renderError():this.state.isLoading?this.renderLoading():this.renderList()),r.a.createElement("footer",{className:"center"},"Thanks",r.a.createElement(k.a,{style:{marginLeft:4},href:"https://www.producthunt.com/",target:"_blank",rel:"noopener noreferrer"}," ProductHunt"))))}}]),t}(r.a.Component),J=Object(v.a)(function(e){return{root:{flexGrow:1},menuButton:{},title:{flexGrow:1}}})(U);var z=function(){return r.a.createElement(J,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{theme:m},r.a.createElement(i.a,null),r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[3889,1,2]]]);
//# sourceMappingURL=main.d67b43e8.chunk.js.map