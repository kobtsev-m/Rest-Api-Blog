(this["webpackJsonpreact-blog"]=this["webpackJsonpreact-blog"]||[]).push([[0],{112:function(e,t,a){},116:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),r=a(19),c=a.n(r),i=(a(72),a(73),a(8)),o=a(9),l=a(10),d=a(11),u=a(13),j=a(12),b=a(60),m=a.n(b),p=a(1);function h(e){return Object(p.jsxs)("div",{className:"d-flex align-items-center justify-content-center ".concat(e.className),children:[Object(p.jsx)("div",{className:"spinner-border"}),Object(p.jsx)("span",{className:"h5 text-muted m-0 ml-2",children:"Loading..."})]})}function O(e){return Object(p.jsx)("div",{className:"d-flex align-items-center justify-content-center h-100 ".concat(e.className),children:Object(p.jsx)("div",{className:"spinner-border spinner-border-sm my-1 ".concat(e.variant)})})}var g=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleLoad=function(){s.setState({loaded:!0})},s.state={loaded:!1},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:this.props.className,style:{height:this.props.height||"14em",backgroundSize:"cover",backgroundPosition:"center",backgroundColor:"#2b2b2b",backgroundImage:"url(".concat(this.props.src,")")},children:[Object(p.jsx)(m.a,{src:this.props.src,onLoadBg:this.handleLoad}),!this.state.loaded&&Object(p.jsx)(O,{variant:"text-white"})]})}}]),a}(s.Component),v=a.p+"static/media/homeBrand.d0908521.jpg";var x=function(e){return Object(p.jsxs)("div",{className:"jumbotron",children:[Object(p.jsx)("h2",{className:"display-4",children:"Greet you on my blog site!"}),Object(p.jsx)("p",{className:"lead",children:"This is a simple blog, that is open for every person to add & read posts."}),Object(p.jsx)("hr",{className:"my-4"}),Object(p.jsx)(g,{src:v,className:"mb-3 rounded"}),Object(p.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam amet distinctio iusto nisi nesciunt est inventore quaerat incidunt eaque? Dolore praesentium, explicabo beatae provident et perspiciatis veritatis ut delectus fugiat. Quam voluptatibus illo odio reiciendis nemo vitae animi tempora, distinctio rerum. Labore veniam rem error illo quo quis temporibus natus magni, dolor ab, hic cumque nemo. Doloremque provident suscipit et. Molestias vitae fugit modi veritatis eaque deserunt dolores itaque pariatur dolorum voluptates veniam totam commodi excepturi perferendis, dolorem beatae voluptate nisi rerum sed. Voluptates omnis fuga dolores repellat, nihil doloremque. Nemo, omnis quisquam porro, nihil consequuntur culpa dolorem itaque cupiditate vero debitis, minima consequatur quae tempore ut obcaecati voluptatem iste quas vel hic pariatur id adipisci voluptatibus assumenda dignissimos! Magnam."}),Object(p.jsx)(o.b,{to:"/posts",className:"btn btn-white btn-lg border-secondary w-100",children:"Go to posts"})]})},f=a(5),A=a(17),N=a(28),y=a(27),D=a(119),C=a(62),k=a(31),w=a.n(k),S=a(46),P=a(47),L=a(63);function F(){return(F=Object(L.a)(w.a.mark((function e(t,a){var s,n,r,c;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s={},n=Object(S.a)(a),e.prev=2,c=w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=r.value,"choice"!==t[a].type){e.next=5;break}s[a]=t[a].choices.map((function(e){return{value:e.value,label:e.display_name}})),e.next=8;break;case 5:if("field"!==t[a].type){e.next=8;break}return e.next=8,q.get("".concat(a,"/")).then((function(e){s[a]=e.data.map((function(e){return{value:e.id,label:e.name}}))}));case 8:case"end":return e.stop()}}),e)})),n.s();case 5:if((r=n.n()).done){e.next=9;break}return e.delegateYield(c(),"t0",7);case 7:e.next=5;break;case 9:e.next=14;break;case 11:e.prev=11,e.t1=e.catch(2),n.e(e.t1);case 14:return e.prev=14,n.f(),e.finish(14);case 17:return e.abrupt("return",s);case 18:case"end":return e.stop()}}),e,null,[[2,11,14,17]])})))).apply(this,arguments)}var q=C.create({baseURL:"https://infinite-hamlet-30732.herokuapp.com/api/",headers:{"Content-type":"application/json"}}),z=function(){return q.get("posts/").then((function(e){return e.data}))},T=function(e){return q.get("posts/".concat(e)).then((function(e){return e.data}))},E=function(e){return q.options("posts/").then((function(t){return function(e,t){return F.apply(this,arguments)}(t.data.actions.POST,e)}))},I=function(e,t){var a,s,n=function(e){for(var t=new FormData,a=0,s=Object.entries(e);a<s.length;a++){var n=Object(P.a)(s[a],2),r=n[0],c=n[1];if("object"===typeof c){var i,o=Object(S.a)(c);try{for(o.s();!(i=o.n()).done;){var l=i.value;t.append(r,l)}}catch(d){o.e(d)}finally{o.f()}}else t.append(r,c)}return t}((a=e,s=t,Object.entries(a).reduce((function(e,t){if(s.hasOwnProperty(t[0])){var a=Object(P.a)(t,2),n=a[0],r=a[1];e[n]=Array.isArray(r)?r.map((function(e){return e.value})):r.value}else e[t[0]]=t[1];return e}),{})));return q.post("posts/",n,{headers:{"Content-Type":"multipart/form-data"}}).catch((function(e){return console.log(e.response)}))},R=function(e){return q.delete("posts/".concat(e))},V=function(){return q.get("categories/")},Z=a(20),M=a(36);function G(e){var t=e.handleChange,a=e.errors,s=e.submitted,n=Object(y.a)(e,["handleChange","errors","submitted"]);return Object(p.jsxs)(D.a.Group,{controlId:"".concat(n.name,"Input"),children:[Object(p.jsxs)(D.a.Label,{children:[Object(M.capitalize)(n.name),n.required?"*":""]}),Object(p.jsx)(D.a.Control,Object(f.a)({onChange:function(e){t(Object(Z.a)({},e.target.name,e.target.value))},isValid:s&&!a[n.name],isInvalid:!!a[n.name]},n)),Object(p.jsx)(D.a.Control.Feedback,{children:"Looks Good!"}),Object(p.jsx)(D.a.Control.Feedback,{type:"invalid",children:a[n.name]})]})}var K=function(e){return Object(p.jsx)(G,Object(f.a)({},e))},U=a(67);var W=function(e){var t=!!e.errors[e.name],a=e.submitted&&!e.errors[e.name],s=t?"is-invalid":a?"is-valid":"",n={control:function(e){return t?Object(f.a)(Object(f.a)({},e),{},{borderColor:"#dc3545"}):a?Object(f.a)(Object(f.a)({},e),{},{borderColor:"#28a745"}):Object(f.a)({},e)}};return Object(p.jsxs)(D.a.Group,{controlId:"".concat(e.name,"Select"),children:[Object(p.jsxs)(D.a.Label,{children:[Object(M.capitalize)(e.name),e.required?"*":""]}),Object(p.jsx)(U.a,{isMulti:e.isMulti,name:e.name,onChange:function(t,a){e.handleChange(Object(Z.a)({},a.name,t))},options:e.options[e.name],styles:n,className:s,value:e.value}),Object(p.jsx)(D.a.Control.Feedback,{children:"Looks Good!"}),Object(p.jsx)(D.a.Control.Feedback,{type:"invalid",children:e.errors[e.name]})]})},B=a(25),Y=a(21),J=a(22),X=(a(112),function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleDrag=function(e){e.preventDefault(),e.stopPropagation()},s.handleDragIn=function(e){e.preventDefault(),e.stopPropagation(),s.dragCounter++,e.dataTransfer.items&&e.dataTransfer.items.length>0&&s.setState({dragging:!0})},s.handleDragOut=function(e){e.preventDefault(),e.stopPropagation(),s.dragCounter--,0===s.dragCounter&&s.setState({dragging:!1})},s.handleDrop=function(e){e.preventDefault(),e.stopPropagation(),s.setState({dragging:!1}),e.dataTransfer.files&&e.dataTransfer.files.length>0&&(s.handleChange(e.dataTransfer.files),e.dataTransfer.clearData(),s.dragCounter=0)},s.handleChange=function(e){if(!Object(B.a)(e).some((function(e){return!e.name.match(/.(jpg|jpeg|png|svg)$/i)}))){var t=[].concat(Object(B.a)(s.state.images),Object(B.a)(e)),a=[].concat(Object(B.a)(s.state.imagesUrls),Object(B.a)(Object(B.a)(e).map((function(e){return URL.createObjectURL(e)}))));s.setState({images:t,imagesUrls:a}),s.props.handleChange(Object(Z.a)({},s.props.name,t))}},s.handleDelete=function(e){var t=s.state.images.filter((function(t,a){return a!==e})),a=s.state.imagesUrls.filter((function(t,a){return a!==e}));s.setState({images:t,imagesUrls:a}),s.props.handleChange(Object(Z.a)({},s.props.name,t))},s.state={images:[],imagesUrls:[],dragging:!1},s.dropRef=n.a.createRef(),s.dragCounter=0,s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.dropRef.current;e.addEventListener("dragenter",this.handleDragIn),e.addEventListener("dragleave",this.handleDragOut),e.addEventListener("dragover",this.handleDrag),e.addEventListener("drop",this.handleDrop)}},{key:"componentWillUnmount",value:function(){var e=this.dropRef.current;e.removeEventListener("dragenter",this.handleDragIn),e.removeEventListener("dragleave",this.handleDragOut),e.removeEventListener("dragover",this.handleDrag),e.removeEventListener("drop",this.handleDrop)}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"form-group mb-2",children:[Object(p.jsx)("label",{children:"Post Images"}),Object(p.jsxs)("div",{className:"imageField border rounded p-3 mb-2",ref:this.dropRef,children:[this.state.dragging&&Object(p.jsx)("div",{className:"imageField__hover"}),Object(p.jsx)("div",{className:"d-flex",children:this.state.imagesUrls.length?this.state.imagesUrls.map((function(t,a){return Object(p.jsx)("div",{className:"imageField__image mr-2",style:{backgroundImage:"url(".concat(t,")")},children:Object(p.jsx)("button",{type:"button",className:"btn btn-sm btn-danger m-1",onClick:function(){return e.handleDelete(a)},children:Object(p.jsx)(Y.a,{icon:J.e})})},a)})):Object(p.jsxs)("div",{className:"imageField__image w-100 d-flex align-items-center justify-content-center",children:[Object(p.jsx)(Y.a,{icon:J.c,className:"h1 m-0"}),Object(p.jsxs)("div",{className:"d-flex flex-column align-items-center ml-3",children:[Object(p.jsx)("span",{className:"h4 text-muted mb-0",children:"Upload images"}),Object(p.jsx)("small",{className:"form-text text-muted",children:"Formats: Jpg, Jpeg, Png, Svg"})]})]})})]}),Object(p.jsx)("input",{type:"file",multiple:!0,className:"d-none",id:"imageFieldInput",onChange:function(t){return e.handleChange(t.target.files)}}),Object(p.jsx)("label",{htmlFor:"imageFieldInput",className:"btn btn-white border w-100",children:"Browse"})]})}}]),a}(s.Component));function H(e){return Object(p.jsxs)(o.b,{to:e.to,className:"btn btn-white border",children:[Object(p.jsx)(Y.a,{icon:J.b,className:"mr-2"}),Object(p.jsx)("span",{children:"Back"})]})}function Q(e){var t=e.variant,a=e.className,s=Object(y.a)(e,["variant","className"]);return Object(p.jsx)("button",Object(f.a)(Object(f.a)({className:"btn btn-".concat(t," ").concat(a)},s),{},{children:s.disabled?Object(p.jsx)(O,{}):s.text}))}function _(e){return Object(p.jsx)("div",{className:"d-flex",children:Object(p.jsx)(Q,Object(f.a)({type:"submit",variant:"success",className:"col-12 col-md-4 ml-md-auto"},e))})}function $(e){var t=e.handleSubmit,a=e.options,s=e.values,n=e.submitting,r=Object(y.a)(e,["handleSubmit","options","values","submitting"]);return Object(p.jsxs)(D.a,{className:"col-12 p-0",onSubmit:t,children:[Object(p.jsx)(K,Object(f.a)({name:"title",required:!0},r)),Object(p.jsx)(K,Object(f.a)({as:"textarea",name:"content",rows:3,required:!0},r)),Object(p.jsx)(W,Object(f.a)({isMulti:!0,name:"categories",options:a},r)),Object(p.jsx)(W,Object(f.a)({isMulti:!1,name:"status",options:a,value:s.status,required:!0},r)),Object(p.jsx)(X,Object(f.a)({name:"images"},r)),Object(p.jsx)(_,{text:"Create",disabled:n})]})}var ee={values:{title:"",status:{label:"published",value:"P"},content:"",categories:[],images:[]},options:{},errors:{},submitted:!1,submitting:!1},te=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),s.setState({submitting:!0}),I(s.state.values,s.state.options).then((function(){s.redirect=!0,s.setState(Object(f.a)(Object(f.a)({},ee),{},{submitted:!0,submitting:!1}))})).catch((function(e){s.setState({errors:e.response.data,submitted:!0,submitting:!1})}))},s.handleChange=function(e){s.setState({values:Object(f.a)(Object(f.a)({},s.state.values),e)})},s.state=ee,s.handleChange=s.handleChange.bind(Object(N.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(N.a)(s)),s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;E(["status","categories"]).then((function(t){return e.setState({options:t})}))}},{key:"render",value:function(){return this.redirect?Object(p.jsx)(i.a,{to:"/posts"}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(H,{to:"/posts"})}),Object(p.jsx)("hr",{className:"row"}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)($,Object(f.a)({handleSubmit:this.handleSubmit,handleChange:this.handleChange},this.state))})]})}}]),a}(s.Component),ae=a(118),se="data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAGQBAMAAACAGwOrAAAAG1BMVEUvLy9mZmY1NTU8PDxKSkpfX19RUVFYWFhDQ0NJKxXsAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADtElEQVR4nO3bTXPbRBwHYNVxcI5dWsc9KkMLPTbt8HKMGZdzXGCmxwT6whHP8AEc6BQ+Npa0siU3cS068Qt6nkM22rU8O79Z/S1tnCQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg4zrP5tJtz2XndcPc2bbnsvP+S1jPbnE+O60bGp9yEJ7cwkT2gbAaEFYDwmpAWA0IqwFhNSCsBpbCGqXJN+P+L7PfHk7CH2nZd/Q69H8tX7MI691Z2dcZpbc80V2wFFaYfpXdzE+To6x5EPuOxtnRj9lBZzT6IbwazaRJcnWvPO+z/gbnvDXLYf05fpk+HN9LrgZPvxgWSyhML/vfp48vZxFmy6o0GzsclOfdub/RWW/Jclh/H89+PuofZE+KnfF53vc+j6kzyRZabWV1QxrPu/p8YzPeouWwJhdJtny+zldKcZmFyYt8rNdP83ZRszrzh+/J77c8z53QDeV21tPsMBS1Zzy+yJo7x3lfDKcT8s7qp+HleRKHppuZ7nYttmjytRSKkj0srq9eXpNCWY+Gd/OmEtbpg/gurajvs7B+jn7KDkOxVK6O42Dedze+9qSIphJWL1b4w+PNzHbLlmvWWd7EFRPDuoiDMZJKWEexwp+2or7fFFZxNRZZzKt4vJmq3sHHINtR3z+8Kc2beljT+murYRVlrCX1vVFY8aKrhlWUsZbU90ZhHXwYVlHhW1LfG4b1pNJUulpS3z91ZSX53etlO+r7p9asosK3pL43DCtvamFlFf6o+QbiflonrLM4eM19Vt7Xa0l9bxRWfLiphZUdnLSkvq8VVlm+T4on6voe/OSiNfV9rbDKzeO4w1cPa9Y5nt7mDHfIOmGVm8fjYgXVH24O77emvq8VVnxa7pYrqvblpG6/NfV9rbCeF2kMy03AyXnljE5Y/I3n/26xrZx/TfLasP4KL2fNt/NCP8zC65TvMAltqe/L3/y7/qb0URi8eR3mV9thGLx6Oz86bcv9+5phJc9nw4P5Z2DncnZYiW6D0915WYCPR/+kla7vKodt2Z9Zz0cus7bsz6znI2G1ZP99TavDau8XkK61OqzeYNVo66wOa6hkVa0M68B/sdSsDOvUVVizKqwvw4uNzWMv3BzWu7fhON3cRPbBzWGNK89A5G7+r803v904BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7Kt/AQMcfWRqVnDuAAAAAElFTkSuQmCC",ne=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={postData:{},loading:!1},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.postId;this.setState({loading:!0}),T(t).then((function(t){return e.setState({postData:t,loading:!1})}))}},{key:"render",value:function(){var e=new Date(this.state.postData.updated),t=e.toLocaleDateString("en-GB"),a=e.toTimeString().slice(0,8);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(H,{to:"/posts"})}),Object(p.jsx)("hr",{className:"row"}),Object(p.jsx)("div",{className:"row card mb-3",children:this.state.loading?Object(p.jsx)(h,{className:"col-12 py-5"}):Object(p.jsxs)("div",{className:"row no-gutters",children:[Object(p.jsx)("div",{className:"col-md-4 p-4 pr-0",children:this.state.postData.images&&(0===this.state.postData.images.length?Object(p.jsx)(g,{src:se,height:"20em"}):1===this.state.postData.images.length?Object(p.jsx)(g,{src:this.state.postData.images[0].large,height:"20em"}):Object(p.jsx)(ae.a,{interval:null,children:this.state.postData.images.map((function(e,t){return Object(p.jsx)(ae.a.Item,{children:Object(p.jsx)(g,{src:e.large,height:"20em"})},t)}))}))}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:this.state.postData.title}),Object(p.jsx)("p",{className:"card-text",children:this.state.postData.content&&this.state.postData.content.split("\n").map((function(e,t){return Object(p.jsxs)("span",{children:[e,Object(p.jsx)("br",{})]},t)}))}),Object(p.jsx)("p",{className:"card-text",children:Object(p.jsxs)("small",{className:"text-muted",children:["Last updated ",t,", ",a]})})]})})]})})]})}}]),a}(s.Component),re="SET-POSTS",ce="DELETE-POST",ie={posts:[]};var oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:return Object(f.a)(Object(f.a)({},e),{},{posts:t.posts});case ce:return Object(f.a)(Object(f.a)({},e),{},{posts:e.posts.reduce((function(e,a){return a.id!==t.postId&&e.push(a),e}),[])});default:return e}},le={deletePost:function(e){return{type:ce,postId:e}}},de=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).onDelete=function(){s.setState({deleting:!0}),R(s.props.id).then((function(){s.props.deletePost(s.props.id),s.setState({deleting:!1})}))},s.state={deleting:!1},s}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"card mb-2",children:[Object(p.jsx)("div",{className:"card-img-top",children:0===this.props.images.length?Object(p.jsx)(g,{src:se}):1===this.props.images.length?Object(p.jsx)(g,{src:this.props.images[0].small}):Object(p.jsx)(ae.a,{interval:null,children:this.props.images.map((function(e,t){return Object(p.jsx)(ae.a.Item,{children:Object(p.jsx)(g,{src:e.small})},t)}))})}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:this.props.title}),Object(p.jsx)("p",{className:"card-text text-truncate",children:this.props.content})]}),Object(p.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(p.jsxs)("li",{className:"list-group-item",children:["Owner: ",this.props.owner.username]}),Object(p.jsxs)("li",{className:"list-group-item",children:["Categories:"," ",this.props.categories.length?this.props.categories.map((function(e,t){return t?", ".concat(e.name):e.name})):Object(p.jsx)("span",{className:"text-weight-light text-muted",children:"Empty"})]})]}),Object(p.jsxs)("div",{className:"card-body d-flex",children:[Object(p.jsx)("div",{className:"col p-0 pr-1",children:Object(p.jsx)(o.b,{to:"posts/".concat(this.props.id),className:"btn btn-outline-dark w-100",children:"Read..."})}),this.props.postsTotal>3&&Object(p.jsx)("div",{className:"col p-0 pl-1",children:Object(p.jsx)(Q,{text:"Delete",variant:"outline-danger",disabled:this.state.deleting,onClick:this.onDelete,className:"w-100"})})]})]})}}]),a}(s.Component),ue=Object(A.b)(null,le)(de),je=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={loading:!1,postsTotal:0},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),z().then((function(t){e.props.setPosts(t),e.setState({loading:!1,postsTotal:t.length})}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row px-3",children:Object(p.jsxs)(o.b,{to:"/posts/add",className:"col-12 col-md-2 btn btn-dark mx-auto mx-md-0 ml-md-auto",children:[Object(p.jsx)("span",{className:"mr-2",children:"Add post"}),Object(p.jsx)(Y.a,{icon:J.d,size:"sm"})]})}),Object(p.jsx)("hr",{className:"row my-3"}),Object(p.jsx)("div",{className:"row",children:this.state.loading?Object(p.jsx)(h,{className:"col-12 mt-4"}):this.props.posts.map((function(t){return Object(p.jsx)("div",{className:"col-12 col-md-6 col-lg-4 mb-2",children:Object(p.jsx)(ue,Object(f.a)({postsTotal:e.state.postsTotal},t))},t.id)}))})]})}}]),a}(s.Component),be={setPosts:function(e){return{type:re,posts:e}}},me=Object(A.b)(null,be)(je);var pe=Object(A.b)((function(e){return{postForm:e.postsData.postForm,postsList:{posts:e.postsData.posts}}}))((function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center justify-content-md-start",children:Object(p.jsx)("span",{className:"h2 mb-1",children:"Posts"})}),Object(p.jsx)("hr",{className:"row my-3"}),Object(p.jsx)(i.b,{exact:!0,path:"/posts",render:function(){return Object(p.jsx)(me,Object(f.a)({},e.postsList))}}),Object(p.jsx)(i.b,{exact:!0,path:"/posts/add",render:function(){return Object(p.jsx)(te,Object(f.a)({},e.postForm))}}),Object(p.jsx)(i.b,{exact:!0,path:"/posts/:postId(\\d+)",component:ne})]})})),he="SET-CATEGORIES",Oe={categories:[]};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case he:return Object(f.a)(Object(f.a)({},e),{},{categories:t.categories});default:return e}},ve=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={loading:!1},s}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState({loading:!0}),V().then((function(t){e.props.setCategories(t.data),e.setState({loading:!1})}))}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"row",children:this.state.loading?Object(p.jsx)(h,{className:"col-12 mt-4"}):this.props.categories.map((function(e){return Object(p.jsx)("div",{className:"col-12 mb-2",children:Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("h5",{className:"card-header",children:["ID: ",e.id]}),Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:e.name}),Object(p.jsx)("p",{className:"card-text",children:e.slug})]})]})},e.id)}))})}}]),a}(s.Component),xe={setCategories:function(e){return{type:he,categories:e}}},fe=Object(A.b)(null,xe)(ve);var Ae=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"row justify-content-center justify-content-md-start",children:Object(p.jsx)("span",{className:"h2 mb-1",children:"Categories"})}),Object(p.jsx)("hr",{className:"row my-3"}),Object(p.jsx)(i.b,{exact:!0,path:"/categories",render:function(){return Object(p.jsx)(fe,{categories:e.props.categories})}})]})}}]),a}(s.Component),Ne=Object(A.b)((function(e){return e.categoriesData}))(Ae);var ye=function(e){return Object(p.jsxs)("div",{className:"container py-3 py-md-4 px-4 px-md-0",children:[Object(p.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(p.jsx)(x,{})}}),Object(p.jsx)(i.b,{path:"/posts",render:function(){return Object(p.jsx)(pe,{})}}),Object(p.jsx)(i.b,{path:"/categories",render:function(){return Object(p.jsx)(Ne,{})}})]})},De=function(e){Object(u.a)(a,e);var t=Object(j.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(p.jsx)(o.b,{className:"navbar-brand px-2",exact:!0,to:"/",children:Object(p.jsx)(Y.a,{icon:J.a})}),Object(p.jsx)("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarContent",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsx)("div",{className:"collapse navbar-collapse",id:"navbarContent",children:Object(p.jsxs)("ul",{className:"navbar-nav",children:[Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.b,{className:"nav-link",exact:!0,to:"/",children:"Home"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.b,{className:"nav-link",to:"/posts",children:"Posts"})}),Object(p.jsx)("li",{className:"nav-item",children:Object(p.jsx)(o.b,{className:"nav-link",to:"/categories",children:"Categories"})})]})})]})}}]),a}(s.Component);var Ce=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(De,{}),Object(p.jsx)(ye,{})]})},ke=(a(113),a(114),a(29)),we=Object(ke.b)({postsData:oe,categoriesData:ge}),Se=Object(ke.c)(we);window.store=Se;var Pe=Se,Le=Object(p.jsx)(A.a,{store:Pe,children:Object(p.jsx)(o.a,{basename:"/",children:Object(p.jsx)(Ce,{})})});c.a.render(Le,document.getElementById("root"))},72:function(e,t,a){},73:function(e,t,a){}},[[116,1,2]]]);
//# sourceMappingURL=main.206de00d.chunk.js.map