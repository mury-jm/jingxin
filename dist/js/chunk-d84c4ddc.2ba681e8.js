(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d84c4ddc"],{"057f":function(t,e,i){var r=i("fc6a"),o=i("241c").f,n={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return o(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==n.call(t)?a(t):o(r(t))}},"159b":function(t,e,i){var r=i("da84"),o=i("fdbc"),n=i("17c2"),s=i("9112");for(var a in o){var c=r[a],l=c&&c.prototype;if(l&&l.forEach!==n)try{s(l,"forEach",n)}catch(u){l.forEach=n}}},"17c2":function(t,e,i){"use strict";var r=i("b727").forEach,o=i("a640"),n=i("ae40"),s=o("forEach"),a=n("forEach");t.exports=s&&a?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1bc0":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("van-sticky",{on:{scroll:t.scrollbox}},[i("van-nav-bar",{directives:[{name:"show",rawName:"v-show",value:!t.bool,expression:"!bool"}],staticClass:"titbox",attrs:{"left-arrow":""},on:{"click-left":t.frombtn}}),i("van-nav-bar",{directives:[{name:"show",rawName:"v-show",value:t.bool,expression:"bool"}],attrs:{"left-arrow":"",title:t.tit},on:{"click-left":t.frombtn}})],1),i("iframe",{staticClass:"video_iframe",staticStyle:{"z-index":"1"},attrs:{src:t.videosrc,allowfullscreen:"",frameborder:"0"}}),i("div",{staticClass:"box clearfix"},[i("div",{staticClass:"fl imgbox"},[i("img",{attrs:{src:t.titimg}})]),i("div",{staticClass:"textbox"},[i("h1",[t._v(t._s(t.tit))]),i("p",[t._v(t._s(t.details))]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:t.videobool,expression:"videobool"}],staticClass:"collect",attrs:{icon:"star-o",color:"linear-gradient(to right, #4bb0ff, #6149f6)",type:"primary",size:"small"},on:{click:t.collect}},[t._v("收藏")]),i("van-button",{directives:[{name:"show",rawName:"v-show",value:!t.videobool,expression:"!videobool"}],staticClass:"collect",attrs:{icon:"star-o",color:"linear-gradient(to right, aqua, yellowgreen)",type:"primary",size:"small"},on:{click:t.dellect}},[t._v("取消")])],1)]),i("div",{staticClass:"swipebox"},[i("h2",[t._v("相关推荐")]),i("swiper",{attrs:{images:t.imges}})],1),i("div",{staticClass:"comtop clearfix"},[i("div",{staticClass:"fl"},[t._v("全部评论")]),i("div",{staticClass:"fr"},[t._v("共"+t._s(t.pinlun.length)+"条")])]),i("comment",{attrs:{tit:t.tit,imglist:t.pinlun}}),i("div",{staticClass:"comment"},[i("img",{attrs:{src:"",alt:""}}),i("van-field",{attrs:{rows:"1","left-icon":"chat-o",autosize:"",type:"textarea","right-icon":"comment-o",placeholder:"快来评论吧~"},on:{"click-right-icon":t.aa},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1),i("div",{staticClass:"hei"})],1)},o=[],n=(i("4160"),i("b0c0"),i("159b"),i("5530")),s=i("2f62"),a=i("d399"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"swiper-container swiperRecommend"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.images,(function(e,r){return i("div",{key:r,staticClass:"swiper-slide",on:{click:function(i){return t.btn(e)}}},[i("div",{staticClass:"imgbox"},[i("img",{attrs:{src:e.titimg,alt:""}}),i("p",[t._v(t._s(e.name))])])])})),0)])])},l=[],u=i("b619"),f={methods:{btn:function(t){this.$router.push({name:"视频",query:{name:t.name,type:t.type,from:this.$route.query.from}}),location.reload()}},props:["images"],mounted:function(){new u["a"](".swiperRecommend",{slidesPerView:3,paginationClickable:!0,spaceBetween:15})},created:function(){}},d=f,b=(i("f45e"),i("2877")),m=Object(b["a"])(d,c,l,!1,null,"2ffdc1c7",null),v=m.exports,h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("ul",{staticClass:"combot"},t._l(t.imglist,(function(e,r){return i("li",{key:r},[i("div",{staticClass:"topbox clearfix"},[i("div",{staticClass:"imgbox"},[i("img",{attrs:{src:e.imgurl,alt:""}})]),i("div",{staticClass:"rightbox"},[i("p",{staticClass:"name"},[t._v(t._s(e.name))]),i("p",{staticClass:"time"},[t._v(t._s(e.time))]),i("van-button",{staticClass:"guanzhu",attrs:{icon:"like-o",color:e.color,size:"small"},on:{click:function(i){return t.btn(e)}}},[t._v("关注")])],1)]),i("div",{staticClass:"botbox"},[i("p",[t._v(t._s(t.tit)+t._s(e.text))]),i("img",{attrs:{src:e.imgurl,alt:""}})])])})),0)])},p=[],g={data:function(){return{}},methods:{btn:function(t){Object(a["a"])("关注成功"),t.btnbool=!t.btnbool,t.btnbool?(t.color="linear-gradient(to right, #4bb0ff, #6149f6)",Object(a["a"])("取关成功")):t.color="linear-gradient(to right, aqua, yellow)"}},props:["tit","imglist"]},y=g,w=(i("df40"),Object(b["a"])(y,h,p,!1,null,"c0ec86ae",null)),O=w.exports,S={data:function(){return{bool:!1,videobool:!0,message:"",videosrc:"",tit:"",titimg:"",details:"",imges:"",fromtype:""}},components:{swiper:v,comment:O},methods:Object(n["a"])({},Object(s["c"])({likevideo:"Main_store/likevideo",delvideo:"Main_store/delvideo"}),{scrollbox:function(){document.documentElement.scrollTop>=300?this.bool=!0:this.bool=!1},collect:function(){var t=this;if(this.$store.state.mybool2){Object(a["a"])("收藏成功");var e={img:JSON.parse(JSON.stringify(this.titimg)),name:JSON.parse(JSON.stringify(this.tit)),tit:JSON.parse(JSON.stringify(this.details))};this.likevideo(e),this.videobool=!1}else Object(a["a"])({message:"请优先登录哦~~亲",onOpened:function(){t.$router.push({name:"我的"})}})},dellect:function(){Object(a["a"])("取消成功"),this.videobool=!0,this.delvideo()},frombtn:function(){1==this.$route.query.from&&this.$router.push({name:"首页"})},aa:function(){Object(a["a"])("待完善哦~~亲"),this.message=""}}),computed:Object(n["a"])({},Object(s["d"])("publicapi",{videos:"videolist",videos2:"videolist2",videos3:"videolist3",videos4:"videolist4",pinlun:"pinlun"}),{},Object(s["d"])("Main_store",{myvideolist:"myvideolist"})),created:function(){var t=this;document.documentElement.scrollTop=0,1==this.$route.query.type?(this.imges=this.videos,this.videos.forEach((function(e){t.$route.query.name==e.name&&(t.videosrc=e.video,t.tit=e.name,t.titimg=e.titimg,t.details=e.details)}))):2==this.$route.query.type?(this.imges=this.videos2,this.videos2.forEach((function(e){t.$route.query.name==e.name&&(t.videosrc=e.video,t.tit=e.name,t.titimg=e.titimg,t.details=e.details)}))):3==this.$route.query.type?(this.imges=this.videos3,this.videos3.forEach((function(e){t.$route.query.name==e.name&&(t.videosrc=e.video,t.tit=e.name,t.titimg=e.titimg,t.details=e.details)}))):4==this.$route.query.type&&(this.imges=this.videos4,this.videos4.forEach((function(e){t.$route.query.name==e.name&&(t.videosrc=e.video,t.tit=e.name,t.titimg=e.titimg,t.details=e.details)})))}},j=S,C=(i("3322"),Object(b["a"])(j,r,o,!1,null,null,null));e["default"]=C.exports},"2f62b":function(t,e,i){},3322:function(t,e,i){"use strict";var r=i("a6e2"),o=i.n(r);o.a},4160:function(t,e,i){"use strict";var r=i("23e7"),o=i("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"4de4":function(t,e,i){"use strict";var r=i("23e7"),o=i("b727").filter,n=i("1dde"),s=i("ae40"),a=n("filter"),c=s("filter");r({target:"Array",proto:!0,forced:!a||!c},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));i("a4d3"),i("4de4"),i("4160"),i("e439"),i("dbb4"),i("b64b"),i("159b");function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function o(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,r)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?o(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}},"62b1":function(t,e,i){},"746f":function(t,e,i){var r=i("428f"),o=i("5135"),n=i("e538"),s=i("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:n.f(t)})}},a4d3:function(t,e,i){"use strict";var r=i("23e7"),o=i("da84"),n=i("d066"),s=i("c430"),a=i("83ab"),c=i("4930"),l=i("fdbf"),u=i("d039"),f=i("5135"),d=i("e8b5"),b=i("861d"),m=i("825a"),v=i("7b0b"),h=i("fc6a"),p=i("c04e"),g=i("5c6c"),y=i("7c73"),w=i("df75"),O=i("241c"),S=i("057f"),j=i("7418"),C=i("06cf"),x=i("9bf2"),_=i("d1e7"),L=i("9112"),k=i("6eeb"),E=i("5692"),P=i("f772"),N=i("d012"),T=i("90e3"),$=i("b622"),q=i("e538"),M=i("746f"),D=i("d44e"),J=i("69f3"),V=i("b727").forEach,z=P("hidden"),G="Symbol",R="prototype",A=$("toPrimitive"),F=J.set,H=J.getterFor(G),B=Object[R],I=o.Symbol,Q=n("JSON","stringify"),W=C.f,K=x.f,U=S.f,X=_.f,Y=E("symbols"),Z=E("op-symbols"),tt=E("string-to-symbol-registry"),et=E("symbol-to-string-registry"),it=E("wks"),rt=o.QObject,ot=!rt||!rt[R]||!rt[R].findChild,nt=a&&u((function(){return 7!=y(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,i){var r=W(B,e);r&&delete B[e],K(t,e,i),r&&t!==B&&K(B,e,r)}:K,st=function(t,e){var i=Y[t]=y(I[R]);return F(i,{type:G,tag:t,description:e}),a||(i.description=e),i},at=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof I},ct=function(t,e,i){t===B&&ct(Z,e,i),m(t);var r=p(e,!0);return m(i),f(Y,r)?(i.enumerable?(f(t,z)&&t[z][r]&&(t[z][r]=!1),i=y(i,{enumerable:g(0,!1)})):(f(t,z)||K(t,z,g(1,{})),t[z][r]=!0),nt(t,r,i)):K(t,r,i)},lt=function(t,e){m(t);var i=h(e),r=w(i).concat(mt(i));return V(r,(function(e){a&&!ft.call(i,e)||ct(t,e,i[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},ft=function(t){var e=p(t,!0),i=X.call(this,e);return!(this===B&&f(Y,e)&&!f(Z,e))&&(!(i||!f(this,e)||!f(Y,e)||f(this,z)&&this[z][e])||i)},dt=function(t,e){var i=h(t),r=p(e,!0);if(i!==B||!f(Y,r)||f(Z,r)){var o=W(i,r);return!o||!f(Y,r)||f(i,z)&&i[z][r]||(o.enumerable=!0),o}},bt=function(t){var e=U(h(t)),i=[];return V(e,(function(t){f(Y,t)||f(N,t)||i.push(t)})),i},mt=function(t){var e=t===B,i=U(e?Z:h(t)),r=[];return V(i,(function(t){!f(Y,t)||e&&!f(B,t)||r.push(Y[t])})),r};if(c||(I=function(){if(this instanceof I)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),i=function(t){this===B&&i.call(Z,t),f(this,z)&&f(this[z],e)&&(this[z][e]=!1),nt(this,e,g(1,t))};return a&&ot&&nt(B,e,{configurable:!0,set:i}),st(e,t)},k(I[R],"toString",(function(){return H(this).tag})),k(I,"withoutSetter",(function(t){return st(T(t),t)})),_.f=ft,x.f=ct,C.f=dt,O.f=S.f=bt,j.f=mt,q.f=function(t){return st($(t),t)},a&&(K(I[R],"description",{configurable:!0,get:function(){return H(this).description}}),s||k(B,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:I}),V(w(it),(function(t){M(t)})),r({target:G,stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var i=I(e);return tt[e]=i,et[i]=e,i},keyFor:function(t){if(!at(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:mt}),r({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(v(t))}}),Q){var vt=!c||u((function(){var t=I();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,i){var r,o=[t],n=1;while(arguments.length>n)o.push(arguments[n++]);if(r=e,(b(e)||void 0!==t)&&!at(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!at(e))return e}),o[1]=e,Q.apply(null,o)}})}I[R][A]||L(I[R],A,I[R].valueOf),D(I,G),N[z]=!0},a6e2:function(t,e,i){},b0c0:function(t,e,i){var r=i("83ab"),o=i("9bf2").f,n=Function.prototype,s=n.toString,a=/^\s*function ([^ (]*)/,c="name";r&&!(c in n)&&o(n,c,{configurable:!0,get:function(){try{return s.call(this).match(a)[1]}catch(t){return""}}})},b64b:function(t,e,i){var r=i("23e7"),o=i("7b0b"),n=i("df75"),s=i("d039"),a=s((function(){n(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(t){return n(o(t))}})},dbb4:function(t,e,i){var r=i("23e7"),o=i("83ab"),n=i("56ef"),s=i("fc6a"),a=i("06cf"),c=i("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var e,i,r=s(t),o=a.f,l=n(r),u={},f=0;while(l.length>f)i=o(r,e=l[f++]),void 0!==i&&c(u,e,i);return u}})},df40:function(t,e,i){"use strict";var r=i("62b1"),o=i.n(r);o.a},e439:function(t,e,i){var r=i("23e7"),o=i("d039"),n=i("fc6a"),s=i("06cf").f,a=i("83ab"),c=o((function(){s(1)})),l=!a||c;r({target:"Object",stat:!0,forced:l,sham:!a},{getOwnPropertyDescriptor:function(t,e){return s(n(t),e)}})},e538:function(t,e,i){var r=i("b622");e.f=r},f45e:function(t,e,i){"use strict";var r=i("2f62b"),o=i.n(r);o.a},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-d84c4ddc.2ba681e8.js.map