webpackJsonp([7],{AiRy:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"page page-news"},[n("div",{staticClass:"side-button hidden-xs hidden-sm"},[n("button",{staticClass:"button-blue animate zoom",attrs:{"data-duration":"1000"}},[n("router-link",{attrs:{to:t.Laravel.getLocalizedRoute({name:"vacancy"})}},[t._v("\n                    "+t._s(t.state.translations[t.state.lang].vacancies)+"\n                ")])],1)]),t._v(" "),n("div",{staticClass:"news"},[t.newsInner?t._e():n("div",{staticClass:"news-show"},t._l(t.newsPreview?t.preview:t.news,function(e){return n("div",{staticClass:"new",on:{click:function(){t.newsInner=!0,t.selectedNewsItem=e}}},[n("p",{staticClass:"new__date"},[t._v("\n                        "+t._s(e.date)+"\n                    ")]),t._v(" "),n("p",{staticClass:"new__title"},[t._v("\n                        "+t._s(e.title)+"\n                    ")]),t._v(" "),n("p",{staticClass:"new__description"},[t._v("\n                        "+t._s(e.teaser)+"\n                    ")]),t._v(" "),n("p",{staticClass:"new__arrow"},[t._m(0,!0),t._v(" "+t._s(t.state.translations[t.state.lang].readMore)+"\n                    ")])])})),t._v(" "),t.newsInner?n("div",{staticClass:"news-inner clearfix"},[n("div",{staticClass:"news-inner__content clearfix"},[t._m(1),t._v(" "),n("div",{staticClass:"col-lg-7"},[n("div",{staticClass:"new-inner"},[n("h3",{staticClass:"new-inner__title"},[t._v("\n                                "+t._s(t.selectedNewsItem.title)+"\n                            ")]),t._v(" "),n("p",{staticClass:"new-inner__date"},[t._v("\n                                "+t._s(t.selectedNewsItem.date)+"\n                            ")]),t._v(" "),n("p",{staticClass:"new-inner__description"},[t._v("\n                                "+t._s(t.selectedNewsItem.description)+"\n                            ")])])])]),t._v(" "),n("div",{staticClass:"news-inner__links clearfix"},[n("button",{staticClass:"button-3d-black pull-left",on:{click:function(e){t.newsInner=!1}}},[t._v("\n                        "+t._s(t.state.translations[t.state.lang].viewAllNews)+"\n                    ")]),t._v(" "),n("router-link",{staticClass:"button button-arrowed pull-right",attrs:{to:t.Laravel.getLocalizedRoute({name:"home"})}},[t._v("\n                        "+t._s(t.state.translations[t.state.lang].gotoSite)+"\n                    ")])],1)]):t._e(),t._v(" "),t.news.length>3&&t.newsPreview&&!t.newsInner?n("button",{staticClass:"button-3d-black",on:{click:function(e){t.newsPreview=!1}}},[t._v("\n                "+t._s(t.state.translations[t.state.lang].viewAllNews)+"\n            ")]):t._e(),t._v(" "),t.newsPreview||t.newsInner?t._e():n("button",{staticClass:"button-3d-black",on:{click:function(e){t.newsPreview=!0}}},[t._v("\n                "+t._s(t.state.translations[t.state.lang].lessNews)+"\n            ")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",[n("img",{attrs:{src:"/images/arrow.png",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-5"},[n("h2",{staticClass:"news-inner__title"},[t._v("News")])])}]}},QdyK:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newsPreview:!0,newsInner:!1,selectedNewsItem:[],news:[{id:0,title:"Название новости 1",date:"15.02.2018",teaser:"Мы помогаем ведущим казахстанским\nприложения, продукты и услуги. За\nвеб-стартапам и компаниям создать\nиспользовании.",description:"Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\nриложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \nпааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \nпар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \nапрпарпарпарпаааааааар а а а а а а а а а  а "},{id:1,title:"Название новости 2",date:"15.02.2018",teaser:"Мы помогаем ведущим казахстанским\nприложения, продукты и услуги. За\nвеб-стартапам и компаниям создать\nиспользовании.",description:"Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\nриложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \nпааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \nпар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \nапрпарпарпарпаааааааар а а а а а а а а а  а "},{id:2,title:"Название новости 2",date:"15.02.2018",teaser:"Мы помогаем ведущим казахстанским\nприложения, продукты и услуги. За\nвеб-стартапам и компаниям создать\nиспользовании.",description:"Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\nриложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \nпааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \nпар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \nапрпарпарпарпаааааааар а а а а а а а а а  а "},{id:3,title:"Название новости 2",date:"15.02.2018",teaser:"Мы помогаем ведущим казахстанским\nприложения, продукты и услуги. За\nвеб-стартапам и компаниям создать\nиспользовании.",description:"Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\nриложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \nпааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \nпар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \nапрпарпарпарпаааааааар а а а а а а а а а  а "}]}},computed:{preview:function(){return this.news.slice(0,3)}}}},"S+hO":function(t,e,n){var s=n("VU/8")(n("QdyK"),n("AiRy"),null,null);t.exports=s.exports}});