(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{269:function(t,e,n){"use strict";function r(t,e,n){t&&(window.pageYOffset>300?(t.classList.add("nav-scroll"),e&&t.classList.remove("bg-transparent")):(t.classList.remove("nav-scroll"),e&&t.classList.add("bg-transparent")),window.addEventListener("scroll",(function(){window.pageYOffset>300?(t.classList.add("nav-scroll"),e&&t.classList.remove("bg-transparent")):(t.classList.remove("nav-scroll"),e&&t.classList.add("bg-transparent"))})))}n.d(e,"a",(function(){return r}))},271:function(t,e,n){t.exports={}},272:function(t){t.exports=JSON.parse('[{"cover":"/assets/img/blog/5.png","time":"3 Days ago","title":"NFT Game! New Oppoturnity","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"},{"cover":"/assets/img/blog/6.png","time":"12 Days ago","title":"How To Become A Python Develop Expert","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"},{"cover":"/assets/img/blog/7.png","time":"12 Days ago","title":"AI With Fingerprint","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"},{"cover":"/assets/img/blog/8.png","time":"12 Days ago","title":"Solutions For Big Data Issue, Expert Perspective","short_desc":"If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected","placeholderImageText":"a","author":"Admin","comments":24,"views":"774k"}]')},273:function(t,e,n){t.exports=function(t){function e(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var i={};return e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,i){var n=i(4)(i(1),i(5),null,null);t.exports=n.exports},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(3);e.default={props:{startVal:{type:Number,required:!1,default:0},endVal:{type:Number,required:!1,default:2017},duration:{type:Number,required:!1,default:3e3},autoplay:{type:Boolean,required:!1,default:!0},decimals:{type:Number,required:!1,default:0,validator:function(t){return t>=0}},decimal:{type:String,required:!1,default:"."},separator:{type:String,required:!1,default:","},prefix:{type:String,required:!1,default:""},suffix:{type:String,required:!1,default:""},useEasing:{type:Boolean,required:!1,default:!0},easingFn:{type:Function,default:function(t,e,i,n){return i*(1-Math.pow(2,-10*t/n))*1024/1023+e}}},data:function(){return{localStartVal:this.startVal,displayValue:this.formatNumber(this.startVal),printVal:null,paused:!1,localDuration:this.duration,startTime:null,timestamp:null,remaining:null,rAF:null}},computed:{countDown:function(){return this.startVal>this.endVal}},watch:{startVal:function(){this.autoplay&&this.start()},endVal:function(){this.autoplay&&this.start()}},mounted:function(){this.autoplay&&this.start(),this.$emit("mountedCallback")},methods:{start:function(){this.localStartVal=this.startVal,this.startTime=null,this.localDuration=this.duration,this.paused=!1,this.rAF=(0,n.requestAnimationFrame)(this.count)},pauseResume:function(){this.paused?(this.resume(),this.paused=!1):(this.pause(),this.paused=!0)},pause:function(){(0,n.cancelAnimationFrame)(this.rAF)},resume:function(){this.startTime=null,this.localDuration=+this.remaining,this.localStartVal=+this.printVal,(0,n.requestAnimationFrame)(this.count)},reset:function(){this.startTime=null,(0,n.cancelAnimationFrame)(this.rAF),this.displayValue=this.formatNumber(this.startVal)},count:function(t){this.startTime||(this.startTime=t),this.timestamp=t;var e=t-this.startTime;this.remaining=this.localDuration-e,this.useEasing?this.countDown?this.printVal=this.localStartVal-this.easingFn(e,0,this.localStartVal-this.endVal,this.localDuration):this.printVal=this.easingFn(e,this.localStartVal,this.endVal-this.localStartVal,this.localDuration):this.countDown?this.printVal=this.localStartVal-(this.localStartVal-this.endVal)*(e/this.localDuration):this.printVal=this.localStartVal+(this.localStartVal-this.startVal)*(e/this.localDuration),this.countDown?this.printVal=this.printVal<this.endVal?this.endVal:this.printVal:this.printVal=this.printVal>this.endVal?this.endVal:this.printVal,this.displayValue=this.formatNumber(this.printVal),e<this.localDuration?this.rAF=(0,n.requestAnimationFrame)(this.count):this.$emit("callback")},isNumber:function(t){return!isNaN(parseFloat(t))},formatNumber:function(t){t=t.toFixed(this.decimals);var e=(t+="").split("."),i=e[0],n=e.length>1?this.decimal+e[1]:"",a=/(\d+)(\d{3})/;if(this.separator&&!this.isNumber(this.separator))for(;a.test(i);)i=i.replace(a,"$1"+this.separator+"$2");return this.prefix+i+n+this.suffix}},destroyed:function(){(0,n.cancelAnimationFrame)(this.rAF)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t&&t.__esModule?t:{default:t}}(i(0));e.default=a.default,"undefined"!=typeof window&&window.Vue&&window.Vue.component("count-to",a.default)},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=0,a="webkit moz ms o".split(" "),r=void 0,l=void 0;if("undefined"==typeof window)e.requestAnimationFrame=r=function(){},e.cancelAnimationFrame=l=function(){};else{e.requestAnimationFrame=r=window.requestAnimationFrame,e.cancelAnimationFrame=l=window.cancelAnimationFrame;for(var s=void 0,u=0;u<a.length&&(!r||!l);u++)s=a[u],e.requestAnimationFrame=r=r||window[s+"RequestAnimationFrame"],e.cancelAnimationFrame=l=l||window[s+"CancelAnimationFrame"]||window[s+"CancelRequestAnimationFrame"];r&&l||(e.requestAnimationFrame=r=function(t){var e=(new Date).getTime(),i=Math.max(0,16-(e-n)),a=window.setTimeout((function(){t(e+i)}),i);return n=e+i,a},e.cancelAnimationFrame=l=function(t){window.clearTimeout(t)})}e.requestAnimationFrame=r,e.cancelAnimationFrame=l},function(t,e){t.exports=function(t,e,i,n){var a,r=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(a=t,r=t.default);var s="function"==typeof r?r.options:r;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),i&&(s._scopeId=i),n){var u=Object.create(s.computed||null);Object.keys(n).forEach((function(t){var e=n[t];u[t]=function(){return e}})),s.computed=u}return{esModule:a,exports:r,options:s}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v("\n  "+t._s(t.displayValue)+"\n")])},staticRenderFns:[]}}])},274:function(t){t.exports=JSON.parse('[{"value":25,"operator":"+","title":{"part1":"Years","part2":"of Experience"}},{"value":1565,"operator":null,"title":{"part1":"Projects","part2":"completed"}},{"value":265,"operator":null,"title":{"part1":"Satisfied clients on","part2":"24 countries"}}]')},275:function(t){t.exports=JSON.parse('[{"image":"/assets/img/icons/ch1.png","title":"Affordable Price","desc":{"desc1":"Nanotechnology immersion along the information high","desc2":"will close the loop on focusing solely"}},{"image":"/assets/img/icons/ch2.png","title":"Top-notch Experts Consulting","desc":{"desc1":"Our top-notch Experts with much years of experience","desc2":"certail will give best solutions for your business"}},{"image":"/assets/img/icons/ch3.png","title":"Dedicated Support 24/7","desc":"Customer support is always our number one priority."}]')},276:function(t,e,n){"use strict";n(271)},277:function(t){t.exports=JSON.parse('[{"image":"/assets/img/icons/pr1.png","title":"Personal","price":"9.99","features":["3 PRojects","6 Months support"]},{"image":"/assets/img/icons/pr2.png","title":"small team","price":"19.50","features":["15 PRojects","12 Months support","seo & marketing"],"recommended":true},{"image":"/assets/img/icons/pr3.png","title":"enterprise","price":"29.99","features":["unlimited PRojects","lifetime support","expert consultation"]}]')},278:function(t,e,n){var r=n(2),l=n(279),o=n(133);r({target:"Array",proto:!0},{fill:l}),o("fill")},279:function(t,e,n){"use strict";var r=n(25),l=n(81),o=n(30);t.exports=function(t){for(var e=r(this),n=o(e),c=arguments.length,d=l(c>1?arguments[1]:void 0,n),v=c>2?arguments[2]:void 0,m=void 0===v?n:l(v,n);m>d;)e[d++]=t;return e}},280:function(t){t.exports=JSON.parse('[{"review":"This seller provided great research and expertise on an Azure server development/deployment project, provided key guidance and produced exactly what was requested (which required a high level of technical aptitude), and went beyond with documentation to support the delivery, etc.","userImage":"/assets/img/team/2.jpeg","stars":5,"username":"webintegratedso","userPosition":"Ceo at Webintegratedso"},{"review":"Carefully researched and very helpful expertise towards an azure server application deployment with API and github integration.","userImage":"/assets/img/team/1.jpeg","stars":5,"username":"webintegratedso","userPosition":"Ceo at webintegratedso"},{"review":"Highly recommend. Professional, will deliver your work as agreed and also maintains high standards.","userImage":"/assets/img/team/1.jpeg","stars":5,"username":"Dpmk20","userPosition":"Individual Enterprenur"},{"review":"This seller provided great research and expertise on an Azure server development/deployment project, provided key guidance and produced exactly what was requested (which required a high level of technical aptitude), and went beyond with documentation to support the delivery, etc.","userImage":"/assets/img/team/1.jpeg","stars":5,"username":"jackb2023","userPosition":"Individual Enterprenur"},{"review":"Very proficient in the deployment of apps on azure platform. Provides great expertise on available options for implementing the best solutions.","userImage":"/assets/img/team/1.jpeg","stars":5,"username":"Dpmk20","userPosition":"Individual Enterprenur"}]')},281:function(t){t.exports=JSON.parse('{"services":[{"image":"/assets/img/icons/serv_icons/7.png","title":"Cloud Consultation","desc":"We specialize in delivering top-notch Cloud Infrastructure solutions tailored to suit the unique needs of any business, encompassing strategy, management, and more.","tags":["Strategy","Consultation","Management","Infrastructure","IaaC","AWS","AZURE","GOOGLE CLOUD"]},{"image":"/assets/img/icons/serv_icons/8.png","title":"OpenSource Software Deployment","desc":"We will expertly tailor and implement open-source software solutions in the cloud, precisely catering to your business needs, user base, and scalability requirements.","tags":["Open-Source","Landing Pages","OpenAI","ChatGpt","CMS","Plugin","Custom Software","Docker","KuberNetes","ServerLess"]},{"image":"/assets/img/icons/serv_icons/9.png","title":"Dev ops","desc":"Our DevOps solutions cover automated deployment from source code, seamless management of multiple environments, and automated testing, enabling efficient software delivery and maintenance.","tags":["Github Actions","Azure Devops","Jenkins","Travis CI"]},{"image":"/assets/img/icons/serv_icons/15.png","title":"Social Media Marketing","desc":"Our Social Media Marketing services include targeted ad campaigns, captivating landing page design, and professional newsfeed posts, ensuring effective brand promotion across various platforms.","tags":["Github Actions","Azure Devops","Jenkins","Travis CI"]}],"works":[{"image":"/assets/img/projects/1.png","title":"Rento Car Rental Dashboard","tags":["Landing Page, ","UI/UX Design"]},{"image":"/assets/img/projects/2.png","title":"Analys & Backup Blockchain","tags":["data security, ","IT consultation"]}]}')},283:function(t,e,n){"use strict";n.r(e);n(58);var r=n(272),l={data:function(){return{firstBlog:r[0],blogsList:r.slice(1)}}},o=n(78),component=Object(o.a)(l,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"blog style-2 section-padding",attrs:{"data-scroll-index":"7"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"content"},[e("div",{staticClass:"row gx-5"},[e("div",{staticClass:"col-lg-6 border-end brd-light"},[e("div",{staticClass:"card border-0 bg-transparent rounded-0 text-white mb-4 mb-lg-0"},[e("div",{staticClass:"img"},[e("img",{staticClass:"card-img-top",attrs:{src:t.firstBlog.cover,alt:"..."}})]),t._v(" "),e("div",{staticClass:"card-body px-0"},[e("small",{staticClass:"d-block date text mt-2"},[e("a",{staticClass:"text-uppercase border-end brd-light pe-3 me-3",attrs:{href:"#"}},[t._v("News")]),t._v(" "),e("i",{staticClass:"bi bi-clock me-1"}),t._v(" "),e("a",{staticClass:"op-8",attrs:{href:"#"}},[t._v("Posted on "+t._s(t.firstBlog.time))])]),t._v(" "),e("h4",{staticClass:"fw-normal text-white mt-2"},[e("NuxtLink",{attrs:{to:"/page-single-post-5"}},[t._v(t._s(t.firstBlog.title))])],1),t._v(" "),e("p",{staticClass:"small mt-2 op-8"},[t._v(t._s(t.firstBlog.short_desc))]),t._v(" "),e("div",{staticClass:"d-flex small mt-30 align-items-center justify-content-between op-9"},[e("div",{staticClass:"l_side d-flex align-items-center"},[e("span",{staticClass:"icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2"},[t._v("\n                          "+t._s(t.firstBlog.placeholderImageText)+"\n                        ")]),t._v(" "),e("a",{staticClass:"mt-1",attrs:{href:"#"}},[t._v("\n                          By "+t._s(t.firstBlog.author)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"r-side mt-1"},[e("i",{staticClass:"bi bi-chat-left-text me-1"}),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(t.firstBlog.comments))]),t._v(" "),e("i",{staticClass:"bi bi-eye ms-4 me-1"}),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(t.firstBlog.views))])])])])])]),t._v(" "),e("div",{staticClass:"col-lg-6"},t._l(t.blogsList,(function(n,r){return e("div",{key:r,class:"card border-0 bg-transparent rounded-0 text-white ".concat(r!==t.blogsList.length-1?"border-bottom brd-light pb-4 mb-4":"")},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-5"},[e("div",{staticClass:"img h-100"},[e("img",{staticClass:"w-100 h-100 radius-2",attrs:{src:n.cover,alt:"..."}})])]),t._v(" "),e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"card-body pt-3 pt-lg-0"},[e("small",{staticClass:"d-block date text"},[e("a",{staticClass:"text-uppercase border-end brd-light pe-3 me-3",attrs:{href:"#"}},[t._v("News")]),t._v(" "),e("i",{staticClass:"bi bi-clock me-1"}),t._v(" "),e("a",{staticClass:"op-8",attrs:{href:"#"}},[t._v(t._s(n.time))])]),t._v(" "),e("h6",{staticClass:"fw-normal text-white mt-2 fs-6"},[e("a",{attrs:{href:"#"}},[t._v(t._s(n.title))])]),t._v(" "),e("div",{staticClass:"d-flex small mt-20 align-items-center justify-content-between op-9"},[e("div",{staticClass:"l_side d-flex align-items-center"},[e("span",{staticClass:"icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-2 me-2"},[t._v("\n                              "+t._s(n.placeholderImageText)+"\n                            ")]),t._v(" "),e("a",{staticClass:"mt-1",attrs:{href:"#"}},[t._v("\n                              By "+t._s(n.author)+"\n                            ")])]),t._v(" "),e("div",{staticClass:"r-side mt-1"},[e("i",{staticClass:"bi bi-chat-left-text me-1"}),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(n.comments))]),t._v(" "),e("i",{staticClass:"bi bi-eye ms-4 me-1"}),t._v(" "),e("a",{attrs:{href:"#"}},[t._v(t._s(n.views))])])])])])])])})),0)])])])]),t._v(" "),t._m(1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-head mb-30 text-center"},[t("h2",{staticClass:"text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70"},[this._v("editorial")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-center"},[t("a",{staticClass:"sm-butn btn border text-white radius-9 mt-80 hover-lightBlue border-lightBlue",attrs:{href:"#"}},[t("span",[this._v("See More Articles")])])])}],!1,null,null,null),c=component.exports,d=(n(20),n(36),n(273)),v=n.n(d),m=n(274),h={data:function(){return{numbers:m,position:{from:2600,to:2900},restart:!0}},components:{countTo:v.a},mounted:function(){var t=this;window.addEventListener("scroll",(function(){if(t.position){var e=t.position,n=e.from,r=e.to;window.scrollY>n&&window.scrollY<r&&t.restart&&(t.$refs.counter.forEach((function(t){return t.start()})),t.restart=!1),window.scrollY<n&&!t.restart&&(t.restart=!0)}}))}},f=Object(o.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"choose-numbers mt-80"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"row"},t._l(t.numbers,(function(n,r){return e("div",{key:r,staticClass:"col-lg-4"},[e("div",{staticClass:"num-item"},[e("div",{staticClass:"num"},[e("countTo",{ref:"counter",refInFor:!0,staticClass:"counter",attrs:{startVal:0,endVal:n.value,duration:1500}}),t._v(" "),n.operator?e("span",[t._v(" +")]):t._e()],1),t._v(" "),e("div",{staticClass:"inf"},[t._v("\n              "+t._s(n.title.part1)+" "),e("br"),t._v(" "+t._s(n.title.part2)+"\n            ")])])])})),0)])])])}),[],!1,null,null,null).exports,_=n(275),w={data:function(){return{chooseUsData:_}},components:{Numbers:f}},C=Object(o.a)(w,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"choose-us style-2 border-top bg-darkBlue brd-light section-padding",attrs:{"data-scroll-index":"4"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row align-items-center"},[t._m(1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"info"},[t._m(2),t._v(" "),e("ul",t._l(t.chooseUsData,(function(n,r){return e("li",{key:r,class:"d-flex ".concat(r!==t.chooseUsData.length-1?"mb-30":"")},[e("div",{staticClass:"icon me-4 flex-shrink-0"},[e("img",{attrs:{src:n.image,alt:""}})]),t._v(" "),e("div",{staticClass:"inf"},[e("h5",{staticClass:"text-white text-capitalize mb-2"},[t._v(t._s(n.title))]),t._v(" "),e("small",{staticClass:"text-white op-8"},["string"==typeof n.desc?[t._v(t._s(n.desc))]:e("span",[t._v(t._s(n.desc.desc1)+" "),e("br"),t._v(" "+t._s(n.desc.desc2))])],2)])])})),0),t._v(" "),e("NuxtLink",{staticClass:"btn sm-butn border text-white radius-9 mt-70 hover-darkBlue",attrs:{to:"/page-contact-5"}},[e("span",[t._v("Request A Consultation")])])],1)])]),t._v(" "),e("Numbers")],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-head mb-30 text-center"},[t("h2",{staticClass:"text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70"},[this._v("why choose us")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-lg-6"},[t("div",{staticClass:"img pe-lg-5"},[t("img",{attrs:{src:"/assets/img/choose_us/circles.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"text-white text-uppercase mb-60"},[t._v("We create differentiated value to rise to the "),e("br"),t._v(" top in this field")])}],!1,null,null,null).exports,y=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("section",{staticClass:"contact style-2 bg-darkBlue pt-50"},[e("div",{staticClass:"container"},[e("div",{staticClass:"content text-center text-white"},[e("p",{staticClass:"op-7 mb-70 text-uppercase"},[t._v("Let us opportunity to help you!")]),t._v(" "),e("h2",{staticClass:"ltspc-20 text-uppercase fs-1 lh-1 mb-50"},[t._v("(+880) 1303 455415")]),t._v(" "),e("h4",{staticClass:"fw-normal mb-20 op-9"},[t._v("sales@cloudpilot.software")]),t._v(" "),e("h4",{staticClass:"fw-normal mb-30 op-7"},[t._v("58 Shagufta, Pallabi, Dhaka 1216")]),t._v(" "),e("div",{staticClass:"text-center"},[e("NuxtLink",{staticClass:"sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2",attrs:{to:"/page-contact-5"}},[e("span",[t._v("Let’s Chat")])]),t._v(" "),e("NuxtLink",{staticClass:"sm-butn btn border text-white radius-9 hover-lightBlue border-lightBlue m-2",attrs:{to:"/page-contact-5"}},[e("span",[t._v("Request Consultation")])])],1)])]),t._v(" "),e("img",{staticClass:"global_2",attrs:{src:"/assets/img/global2.png",alt:""}})])}),[],!1,null,null,null).exports,x={},k=Object(o.a)(x,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("footer",{staticClass:"style-2 pt-80 pb-60 bg-darkBlue border-top brd-light text-white"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-lg-3 col-sm-6"},[e("div",{staticClass:"foot_logo"},[e("img",{attrs:{src:"/assets/img/cpw.png",alt:""}})])]),t._v(" "),e("div",{staticClass:"col-lg-6"}),t._v(" "),e("div",{staticClass:"col-lg-3 col-sm-6 text-end"},[e("div",{staticClass:"socail-icons"},[e("a",{staticClass:"icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-twitter"})]),t._v(" "),e("a",{staticClass:"icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-facebook-f"})]),t._v(" "),e("a",{staticClass:"icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-linkedin-in"})]),t._v(" "),e("a",{staticClass:"icon-40 sm-butn btn border text-white rounded-circle hover-lightBlue border-lightBlue m-1 p-0 d-inline-flex align-items-center justify-content-center",attrs:{href:"#"}},[e("i",{staticClass:"fab fa-github"})])])])]),t._v(" "),e("div",{staticClass:"text-center mt-30"},[e("div",{staticClass:"small"},[e("span",{staticClass:"op-6"},[t._v("© 2022 Copyrights by ")]),t._v(" "),e("a",{staticClass:"mx-1",attrs:{href:"#"}},[t._v("CloudPilot Software.")]),t._v(" "),e("span",{staticClass:"op-6"},[t._v(" All Rights Reserved.")])])])])])}],!1,null,null,null).exports,V=(n(198),{props:{videoId:String,channel:String,isOpen:Boolean,youtube:{type:Object,default:function(){return{autoplay:1,cc_load_policy:1,color:null,controls:1,disablekb:0,enablejsapi:0,end:null,fs:1,h1:null,iv_load_policy:1,list:null,listType:null,loop:0,modestbranding:null,origin:null,playlist:null,playsinline:null,rel:0,showinfo:1,start:0,wmode:"transparent",theme:"dark"}}},ratio:{type:String,default:"16:9"},vimeo:{type:Object,default:function(){return{api:!1,autopause:!0,autoplay:!0,byline:!0,callback:null,color:null,height:null,loop:!1,maxheight:null,maxwidth:null,player_id:null,portrait:!0,title:!0,width:null,xhtml:!1}}},allowFullScreen:{type:Boolean,default:!0},animationSpeed:{type:Number,default:300},classNames:{type:Object,default:function(){return{modalVideoEffect:"modal-video-effect",modalVideo:"modal-video",modalVideoClose:"modal-video-close",modalVideoBody:"modal-video-body",modalVideoInner:"modal-video-inner",modalVideoIframeWrap:"modal-video-movie-wrap",modalVideoCloseBtn:"modal-video-close-btn"}}},aria:{type:Object,default:function(){return{openMessage:"Modal video opened",dismissBtnMessage:"Close the modal video"}}}},methods:{getQueryString:function(t){var e="";for(var n in t)t.hasOwnProperty(n)&&null!==t[n]&&(e+=n+"="+t[n]+"&");return e.substr(0,e.length-1)},getYoutubeUrl:function(t,e){return"//www.youtube.com/embed/"+e+"?"+this.getQueryString(t)},getVimeoUrl:function(t,e){return"//player.vimeo.com/video/"+e+"?"+this.getQueryString(t)},getPadding:function(t){var e=t.split(":"),n=Number(e[0]);return 100*Number(e[1])/n+"%"}},computed:{fullVideoUrl:function(){return"youtube"===this.channel?this.getYoutubeUrl(this.youtube,this.videoId):"vimeo"===this.channel?this.getVimeoUrl(this.vimeo,this.videoId):void 0},paddingBottom:function(){return this.getPadding(this.ratio)}},watch:{isOpen:{handler:function(t){var e=this;this.$nextTick((function(){void 0!==e.$refs.closeBtn&&e.$refs.closeBtn.focus()}))},deep:!0}}}),S=(n(276),{components:{ModalVideo:Object(o.a)(V,(function(){var t=this,e=t._self._c;return t.isOpen?e("div",[e("div",{class:t.classNames.modalVideo,attrs:{tabIndex:"-1",role:"dialog","aria-label":t.aria.openMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)},keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.$emit("update:isOpen",!1)}}},[e("div",{class:t.classNames.modalVideoBody},[e("button",{ref:"closeBtn",class:t.classNames.modalVideoCloseBtn,attrs:{"aria-label":t.aria.dismissBtnMessage},on:{click:function(e){return t.$emit("update:isOpen",!1)}}}),t._v(" "),e("div",{class:t.classNames.modalVideoInner},[e("div",{class:t.classNames.modalVideoIframeWrap,style:{"padding-bottom":t.paddingBottom}},[e("iframe",{attrs:{width:"460",height:"230",src:t.fullVideoUrl,frameBorder:"0",allowFullScreen:t.allowFullScreen,tabIndex:"-1"}})])])])])]):t._e()}),[],!1,null,"c9d59270",null).exports},data:function(){return{videoIsOpen:!1}},methods:{openVideo:function(t){t.preventDefault(),this.videoIsOpen=!this.videoIsOpen}}}),O=Object(o.a)(S,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"style-2 overflow-hidden",attrs:{"data-scroll-index":"1"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"content text-center text-light text-capitalize"},[e("div",{staticClass:"top_info"},[e("h2",{staticClass:"text-uppercase"},[t._v("CloudPilot")]),t._v(" "),t._m(0),t._v(" "),e("a",{staticClass:"vid-btn",attrs:{href:"https://youtu.be/pGbIOC83-So?t=21"},on:{click:t.openVideo}},[e("i",{staticClass:"bi bi-play-fill wow heartBeat infinite slower"})])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),e("NuxtLink",{staticClass:"btn sm-butn border text-white radius-9 mt-60 hover-darkBlue",attrs:{to:"/page-about-5"}},[e("span",[t._v("More About Us")])])],1)])])]),t._v(" "),e("img",{staticClass:"head_shape2 wave",attrs:{src:"/assets/img/header/header_2.png",alt:""}}),t._v(" "),e("ModalVideo",{attrs:{channel:"youtube",videoId:"pGbIOC83-So",isOpen:t.videoIsOpen},on:{"update:isOpen":function(e){t.videoIsOpen=e},"update:is-open":function(e){t.videoIsOpen=e}}})],1)}),[function(){var t=this,e=t._self._c;return e("p",{staticClass:"fw-light text-uppercase"},[t._v("\n              Best Solutions for "),e("br"),t._v(" "),e("strong",{staticClass:"fw-bold"},[t._v("Cloud Architecture & Devops")]),t._v(" Services\n            ")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"brands mt-200 mb-80"},[e("a",{staticClass:"logo wow fadeInUp",attrs:{href:"#","data-wow-delay":"0"}},[e("img",{attrs:{height:"100px",src:"/assets/img/about/about_logos/fiverr.png",alt:""}})]),t._v(" "),e("a",{staticClass:"logo wow fadeInUp",attrs:{href:"#","data-wow-delay":"0.2s"}},[e("img",{attrs:{src:"/assets/img/about/about_logos/upwork.png",alt:""}})]),t._v(" "),e("a",{staticClass:"logo wow fadeInUp",attrs:{href:"#","data-wow-delay":"0.4s"}},[e("img",{attrs:{src:"/assets/img/about/about_logos/linkedin.png",alt:""}})]),t._v(" "),e("a",{staticClass:"logo wow fadeInUp",attrs:{href:"#","data-wow-delay":"0.6s"}},[e("img",{attrs:{src:"/assets/img/about/about_logos/facebook.png",alt:""}})]),t._v(" "),e("a",{staticClass:"logo wow fadeInUp",attrs:{href:"#","data-wow-delay":"0.8s"}},[e("img",{attrs:{src:"/assets/img/about/about_logos/2.png",alt:""}})])])},function(){var t=this,e=t._self._c;return e("h4",[t._v("\n            We can help to maintain and modernize "),e("br"),t._v(" your Cloud infrastructure & solve various infrastructure-specific "),e("br"),t._v(" issues a business may face.\n          ")])},function(){var t=this,e=t._self._c;return e("p",{staticClass:"d-block mt-40"},[t._v("\n            CloudPilot Co is the partner of choice for many of the clients  in marketplaces"),e("br"),t._v(" enterprises, SMEs and technology challengers. We help businesses elevate their value through "),e("br"),t._v(" cloud infra design, deployment, open source software customizations and consultancy services.\n          ")])}],!1,null,null,null).exports,B=n(277),j={data:function(){return{plans:B}},methods:{togglePlanDuration:function(t){var e=t.target.checked?"yearly":"monthly",n=document.querySelectorAll(".monthly_price"),r=document.querySelectorAll(".yearly_price");"monthly"===e?(n.forEach((function(t){return t.classList.add("show")})),r.forEach((function(t){return t.classList.remove("show")}))):(r.forEach((function(t){return t.classList.add("show")})),n.forEach((function(t){return t.classList.remove("show")})))}}},I=Object(o.a)(j,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"pricing style-2 border-top brd-light section-padding",attrs:{"data-scroll-index":"6"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-10"},[e("div",{staticClass:"content"},[e("div",{staticClass:"toggle_switch d-flex align-items-center justify-content-center mb-20"},[e("div",{staticClass:"form-check form-switch text-white p-0"},[t._m(1),t._v(" "),e("input",{staticClass:"form-check-input float-none color-lightBlue",attrs:{type:"checkbox",id:"monthly-input2",checked:""},on:{change:t.togglePlanDuration}}),t._v(" "),t._m(2)])]),t._v(" "),e("div",{staticClass:"row justify-content-center gx-0"},t._l(t.plans,(function(n,r){return e("div",{key:r,staticClass:"col-lg-4"},[e("div",{class:"pricing_card ".concat(n.recommended?"recommended":""," style-2")},[n.recommended?e("span",{staticClass:"hint"},[t._v("Recommended")]):t._e(),t._v(" "),e("div",{staticClass:"icon"},[e("img",{attrs:{src:n.image,alt:""}})]),t._v(" "),e("p",[t._v(t._s(n.title))]),t._v(" "),e("div",{staticClass:"price mb-30"},[e("div",{staticClass:"monthly_price"},[e("span",{staticClass:"h2"},[e("small",[t._v("$")]),t._v(" "+t._s(n.price)+"\n                    ")]),t._v(" "),e("small",{staticClass:"op-7 ms-1"},[t._v(" / month ")])]),t._v(" "),e("div",{staticClass:"yearly_price show"},[e("span",{staticClass:"h2"},[e("small",[t._v("$")]),t._v(" "+t._s(n.price)+"\n                    ")]),t._v(" "),e("small",{staticClass:"op-7 ms-1"},[t._v(" / year ")])])]),t._v(" "),e("ul",t._l(n.features,(function(n,i){return e("li",{key:i,staticClass:"border-top py-3 op-8 fw-light text-uppercase"},[t._v("\n                    "+t._s(n)+"\n                  ")])})),0),t._v(" "),e("NuxtLink",{staticClass:"sm-butn btn border text-white radius-9 mt-50 w-100 hover-lightBlue border-lightBlue",attrs:{to:"/page-contact-5"}},[e("span",[t._v("Get Started Now")])])],1)])})),0),t._v(" "),e("p",{staticClass:"text-white text-center mt-50"},[t._v("You have a large team? "),e("Link",{staticClass:"text-decoration-underline",attrs:{to:"/page-contact-5"}},[t._v("Contact us")]),t._v(" for information about more enterprise options ")],1)])])])]),t._v(" "),e("img",{staticClass:"shap_l",attrs:{src:"/assets/img/pricing/shap_l.png",alt:""}}),t._v(" "),e("img",{staticClass:"shap_r",attrs:{src:"/assets/img/pricing/shap_r.png",alt:""}})])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-head mb-30 text-center"},[t("h2",{staticClass:"text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70"},[this._v("Pricing & plan")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-check-label",attrs:{for:"monthly-input2"}},[t("small",[this._v("Billed monthly")])])},function(){var t=this._self._c;return t("label",{staticClass:"form-check-label",attrs:{for:"monthly-input2"}},[t("small",[this._v("Billed annually")])])}],!1,null,null,null).exports,A=(n(278),n(280)),P={data:function(){return{reviews:A,swiperOptions:{effect:"fade",slidesPerView:1,spaceBetween:0,speed:1e3,pagination:{el:".reviews_slider .swiper-pagination",clickable:!0},navigation:{nextEl:".reviews_slider .swiper-button-next",prevEl:".reviews_slider .swiper-button-prev"},mousewheel:!1,keyboard:!0,autoplay:{delay:4e3},loop:!0}}}},F=Object(o.a)(P,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"reviews style-2 border-top brd-light section-padding bg-darkBlue",attrs:{"data-scroll-index":"5"}},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),e("div",{staticClass:"reviews_slider"},[e("swiper",{staticClass:"swiper-container",attrs:{options:t.swiperOptions}},t._l(t.reviews,(function(n,r){return e("swiper-slide",{key:r},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-7"},[e("div",{staticClass:"reviews_card text-center style-2"},[e("h5",{staticClass:"text-white lh-4"},[t._v("\n                  “"+t._s(n.review)+"”\n                ")]),t._v(" "),e("div",{staticClass:"rev_user"},[e("img",{attrs:{src:n.userImage,alt:""}})]),t._v(" "),e("div",{staticClass:"rev_stars"},t._l(Array(n.stars).fill(),(function(t,i){return e("i",{key:i,staticClass:"bi bi-star-fill"})})),0),t._v(" "),e("small",{staticClass:"text-white mt-2 d-block"},[e("span",{staticClass:"text-uppercase color-lightBlue"},[t._v(t._s(n.username))]),t._v(" "),e("span",{staticClass:"op-7"},[t._v("/ "+t._s(n.userPosition))])])])])])])})),1),t._v(" "),t._m(1)],1)]),t._v(" "),e("img",{staticClass:"rev_l",attrs:{src:"/assets/img/review/rev_l.png",alt:""}}),t._v(" "),e("img",{staticClass:"rev_r",attrs:{src:"/assets/img/review/rev_r.png",alt:""}})])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-head mb-30 text-center"},[t("h2",{staticClass:"text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70"},[this._v("reviews")])])},function(){var t=this._self._c;return t("div",{staticClass:"pagination_circle position-relative pagi_white mt-70"},[t("div",{staticClass:"swiper-pagination"})])}],!1,null,null,null).exports,N=n(281),D={data:function(){return{services:N,servicesSliderOptions:{slidesPerView:3,spaceBetween:30,speed:1e3,pagination:{el:".services_slider .swiper-pagination",clickable:!0},navigation:{nextEl:".services_slider .swiper-button-next",prevEl:".services_slider .swiper-button-prev"},mousewheel:!1,keyboard:!0,autoplay:{delay:4e3},loop:!0,breakpoints:{0:{slidesPerView:1},480:{slidesPerView:2},787:{slidesPerView:2},991:{slidesPerView:3},1200:{slidesPerView:3}}},worksSliderOptions:{slidesPerView:3,spaceBetween:30,speed:1e3,pagination:{el:".works_slider .swiper-pagination",clickable:!0},navigation:{nextEl:".works_slider .swiper-button-next",prevEl:".works_slider .swiper-button-prev"},mousewheel:!1,keyboard:!0,autoplay:{delay:4e3},loop:!0,breakpoints:{0:{slidesPerView:1},480:{slidesPerView:1},787:{slidesPerView:2},991:{slidesPerView:2},1200:{slidesPerView:2}}}}}},L=Object(o.a)(D,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"services_projects section-padding"},[e("div",{staticClass:"container"},[e("div",{attrs:{"data-scroll-index":"2","data-scroll-internal-section":""}},[t._m(0),t._v(" "),e("div",{staticClass:"services_slider position-relative"},[e("swiper",{staticClass:"swiper-container",attrs:{options:t.servicesSliderOptions}},t._l(t.services.services,(function(n,r){return e("swiper-slide",{key:r},[e("div",{staticClass:"service-box text-white text-center px-4 py-2 brd-light border-end style-2"},[e("div",{staticClass:"icon mb-30"},[e("img",{attrs:{src:n.image,alt:""}})]),t._v(" "),e("div",{staticClass:"info"},[e("h4",[t._v(t._s(n.title))]),t._v(" "),e("p",{staticClass:"op-7 mt-20 mb-30 px-3"},[t._v(t._s(n.desc))]),t._v(" "),e("div",{staticClass:"tags d-flex flex-wrap justify-content-center mt-30 style-2"},t._l(n.tags,(function(n,i){return e("a",{key:i,staticClass:"me-1",attrs:{href:"#"}},[t._v(t._s(n))])})),0)])])])})),1),t._v(" "),t._m(1)],1)])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"section-head mb-30 text-center"},[t("h2",{staticClass:"text-white ltspc-20 text-uppercase fs-1 lh-1 mb-70"},[this._v("services")])])},function(){var t=this._self._c;return t("div",{staticClass:"pagination_circle position-relative pagi_white mt-70"},[t("div",{staticClass:"swiper-pagination"})])}],!1,null,null,null).exports,E=n(269),M={methods:{handleMouseMove:function(t){var e,n,r=t.target.classList.contains("dropdown-toggle")?t.target:t.target.querySelector(".dropdown-toggle"),l=null==r?void 0:r.nextElementSibling;null==r||null===(e=r.classList)||void 0===e||e.add("show"),null==l||null===(n=l.classList)||void 0===n||n.add("show")},handleMouseLeave:function(t){var e,n,r=t.target.classList.contains("dropdown")?t.target:t.target.closest(".dropdown"),l=r.querySelector(".dropdown-toggle"),o=r.querySelector(".dropdown-menu");null==l||null===(e=l.classList)||void 0===e||e.remove("show"),null==o||null===(n=o.classList)||void 0===n||n.remove("show")}},mounted:function(){Object(E.a)(this.$refs.navbarRef)}},T={name:"CloudPilot",layout:"Main",components:{Navbar:Object(o.a)(M,(function(){var t=this,e=t._self._c;return e("nav",{ref:"navbarRef",staticClass:"navbar navbar-expand-lg navbar-dark style-2 position-absolute w-100 p-0"},[e("div",{staticClass:"container"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[e("ul",{staticClass:"navbar-nav m-auto mb-2 mb-lg-0 text-uppercase"}),t._v(" "),e("div",{staticClass:"nav-side"},[e("div",{staticClass:"qoute-nav ps-4"},[e("NuxtLink",{staticClass:"btn sm-butn border text-white radius-9 hover-darkBlue",attrs:{to:"/page-contact-5"}},[e("span",[t._v("Free Quote")])])],1)])])])])}),[function(){var t=this._self._c;return t("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t("img",{attrs:{src:"/assets/img/cpw.png",alt:""}})])},function(){var t=this._self._c;return t("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[t("span",{staticClass:"navbar-toggler-icon"})])}],!1,null,null,null).exports,Header:O,Services:L,ChooseUs:C,Reviews:F,Pricing:I,Blog:c,Contact:y,Footer:k},head:function(){return{titleTemplate:"%s - Software"}}},R=Object(o.a)(T,(function(){var t=this,e=t._self._c;return e("div",[e("Navbar"),t._v(" "),e("Header"),t._v(" "),e("main",[e("Services"),t._v(" "),e("Reviews"),t._v(" "),e("Contact")],1),t._v(" "),e("Footer")],1)}),[],!1,null,null,null);e.default=R.exports}}]);