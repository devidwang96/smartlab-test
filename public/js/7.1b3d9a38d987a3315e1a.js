webpackJsonp([7],{AiRy:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"page page-news"},[s("div",{staticClass:"side-button hidden-xs hidden-sm"},[s("button",{staticClass:"button-blue animate zoom",attrs:{"data-duration":"1000"}},[s("router-link",{attrs:{to:t.Laravel.getLocalizedRoute({name:"vacancy"})}},[t._v("\n                    "+t._s(t.state.translations[t.state.lang].vacancies)+"\n                ")])],1)]),t._v(" "),s("div",{staticClass:"news"},[t.newsInner?t._e():s("div",{staticClass:"news-show"},t._l(t.newsPreview?t.preview:t.getNews,function(e){return s("div",{staticClass:"new",on:{click:function(){t.newsInner=!0,t.selectedNewsItem=e}}},[s("p",{staticClass:"new__date"},[t._v("\n                        "+t._s(e.date)+"\n                    ")]),t._v(" "),s("p",{staticClass:"new__title"},[t._v("\n                        "+t._s(e.title)+"\n                    ")]),t._v(" "),s("p",{staticClass:"new__description"},[t._v("\n                        "+t._s(e.teaser)+"\n                    ")]),t._v(" "),s("p",{staticClass:"new__arrow"},[t._m(0,!0),t._v(" "+t._s(t.state.translations[t.state.lang].readMore)+"\n                    ")])])})),t._v(" "),t.newsInner?s("div",{staticClass:"news-inner clearfix"},[s("div",{staticClass:"news-inner__content clearfix"},[t._m(1),t._v(" "),s("div",{staticClass:"col-lg-7"},[s("div",{staticClass:"new-inner"},[s("h3",{staticClass:"new-inner__title",domProps:{innerHTML:t._s(t.selectedNewsItem.teaser)}}),t._v(" "),s("p",{staticClass:"new-inner__date"},[t._v("\n                                "+t._s(t.selectedNewsItem.date)+"\n                            ")]),t._v(" "),s("p",{staticClass:"new-inner__description",domProps:{innerHTML:t._s(t.selectedNewsItem.description)}})])])]),t._v(" "),s("div",{staticClass:"news-inner__links clearfix"},[s("button",{staticClass:"button-3d-black pull-left",on:{click:function(e){t.newsInner=!1}}},[t._v("\n                        "+t._s(t.state.translations[t.state.lang].viewAllNews)+"\n                    ")]),t._v(" "),s("router-link",{staticClass:"button button-arrowed pull-right",attrs:{to:t.Laravel.getLocalizedRoute({name:"home"})}},[t._v("\n                        "+t._s(t.state.translations[t.state.lang].gotoSite)+"\n                    ")])],1)]):t._e(),t._v(" "),t.getNews.length>3&&t.newsPreview&&!t.newsInner?s("button",{staticClass:"button-3d-black",on:{click:function(e){t.newsPreview=!1}}},[t._v("\n                "+t._s(t.state.translations[t.state.lang].viewAllNews)+"\n            ")]):t._e(),t._v(" "),t.newsPreview||t.newsInner?t._e():s("button",{staticClass:"button-3d-black",on:{click:function(e){t.newsPreview=!0}}},[t._v("\n                "+t._s(t.state.translations[t.state.lang].lessNews)+"\n            ")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("i",[s("img",{attrs:{src:"/images/arrow.png",alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-lg-5"},[s("h2",{staticClass:"news-inner__title"},[t._v("News")])])}]}},QdyK:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{newsPreview:!0,newsInner:!1,selectedNewsItem:[],translations:{en:{news:[{id:0,title:"IVCBox на Startup Avalanche в Румынии",date:"",teaser:"Команда Smartlab презентовала свой продукт IVCBox на Startup Avalanche в Румынии",description:"<p>11-12 июня 2018 года Smartlab презентовал свой продукт IVCBox на Startup Avalanche в Румынии. Наша компания оказалась среди участников такого значительного мероприятия в сфере IT. За всю историю мы были первой командой из Казахстана, которая участвовала в этой конференции и презентовала перед многочисленной аудиторией и инвесторами свою разработку.</p><p>Пройдя отбор среди 250 стартапов, мы были приглашены выступить с презентацией среди других 14 самых интересных и перспективных проектов со всего мира. Startup Avalanche это ивэнт, который ежегодно проходит в рамках конференции Techsylvania в Румынии и собирает тысячи посетителей, участников, инвесторов и приглашенных гостей и спикеров. Румыния в целом славится своими IT-индустрией и передовыми разработками и специалистами в этой сфере.</p><p>Участие в таком масштабном мероприятии было захватывающим и увлекательным благодаря большой конкуренции, нетворкинга, новым знаниям и свежему взгляду на наш продукт и его дальнейшее развитие.</p><p>Организация мероприятия была на высоте, узнав о на наших сложностях во время перелета в Западную Европу, организаторы оказали максимальную помощь в трансфере и встретили нас очень тепло. Организаторы выслушивали питчи участников до поздней ночи снова и снова, давали комментарии и советы перед финальным выступлением. Это было интересное событие, которое заложило начало для  других презентаций нашего молодого продукта - IVCBox.</p>"},{id:1,title:"Smartlab в выставке e-27 Asia Echelon Summit",date:"",teaser:"Smartlab принял участие в выставке e-27 Asia Echelon Summit в Сингапуре",description:"<p>28-29 июля 2018 года прошла выставка E-27 Asia Echelon Summit, которая собирает 5000 участников, посетителей, инвесторов со всей Юго-Восточной Азии. Наша компания была приглашена организаторами с целью презентации нашего продукта - IVCBox - среди 250 участников выставки. Это был ценный и важный опыт на данной стадии развития продукта, поскольку CEO компании имели возможность рассказать посетителям о нашей разработке, а также привлечь потенциальных клиентов и инвесторов.</p><p>Платформа Echelon является ежегодным и очень масштабным мероприятием в Сингапуре, куда съезжаются множество компаний, инвесторов и стартапов для взаимодействия, нетворкинга и расширения возможностей. Мы получили невероятный опыт и интересный инсайты на таком мероприятии, которое собирает самые многообещающие стартапы и создателей инновационных  IT-решений со всей Юго-Восточной Азии в одном месте.</p><p>За два дня мы не только рассказывали о себе, показывали как работает продукт, но и погрузились в интересные питчи и выступления спикеров, которые говорили на разные темы, начиная Блокчейном и заканчивая AR/VR. В целом, мы получили ценные знания от людей, которые имели опыт в IT-стартапах, и имели возможность для нетворкинга и сотрудничества.</p>"},{id:2,title:"Тимбилдинг Smartlab",date:"",teaser:"6 июля 2018 года у нас прошел летний Тимбилдинг на горном курорте “Лесная Сказка”. ",description:"<p>В Smartlab работают высококвалифицированные профессионалы, среди которых разработчики, дизайнеры, интернет-маркетологи, менеджеры по продажам и другие специалисты. В целом, наши рабочие дни проходят в интенсивном труде: разработчики пишут коды, дизайнеры создают шедевры, менеджеры увеличивают продажи.</p><p>Поскольку работа у нас сидячая, отдых мы решили провести активно и на свежем воздухе. Лесная сказка славится своими живописными пейзажами, хорошим сервисом и интересными вариантами для активного отдыха. Сорок минут езды от города Алматы, достойны того, чтобы на высоте 1 650 метров над уровнем моря приобщиться к здоровому образу жизни и отдохнуть от городской суеты. Мы спустились с троллейного парка и наша команда была в восторге от спуска, наверное это был самый яркий момент нашего тимбилдинга.</p><p>Мы считаем себя очень дружным и сплоченным коллективом, в котором, как в отлаженном механизме, все работают эффективно и продуктивно. Команда Smartlab расширяется и мы всегда рады приветствовать новых сотрудников у нас в компании.</p>"}]},ru:{news:[{id:0,title:"IVCBox на Startup Avalanche в Румынии",date:"",teaser:"Команда Smartlab презентовала свой продукт IVCBox на Startup Avalanche в Румынии",description:"<p>11-12 июня 2018 года Smartlab презентовал свой продукт IVCBox на Startup Avalanche в Румынии. Наша компания оказалась среди участников такого значительного мероприятия в сфере IT. За всю историю мы были первой командой из Казахстана, которая участвовала в этой конференции и презентовала перед многочисленной аудиторией и инвесторами свою разработку.</p><p>Пройдя отбор среди 250 стартапов, мы были приглашены выступить с презентацией среди других 14 самых интересных и перспективных проектов со всего мира. Startup Avalanche это ивэнт, который ежегодно проходит в рамках конференции Techsylvania в Румынии и собирает тысячи посетителей, участников, инвесторов и приглашенных гостей и спикеров. Румыния в целом славится своими IT-индустрией и передовыми разработками и специалистами в этой сфере.</p><p>Участие в таком масштабном мероприятии было захватывающим и увлекательным благодаря большой конкуренции, нетворкинга, новым знаниям и свежему взгляду на наш продукт и его дальнейшее развитие.</p><p>Организация мероприятия была на высоте, узнав о на наших сложностях во время перелета в Западную Европу, организаторы оказали максимальную помощь в трансфере и встретили нас очень тепло. Организаторы выслушивали питчи участников до поздней ночи снова и снова, давали комментарии и советы перед финальным выступлением. Это было интересное событие, которое заложило начало для  других презентаций нашего молодого продукта - IVCBox.</p>"},{id:1,title:"Smartlab в выставке e-27 Asia Echelon Summit",date:"",teaser:"Smartlab принял участие в выставке e-27 Asia Echelon Summit в Сингапуре",description:"<p>28-29 июля 2018 года прошла выставка E-27 Asia Echelon Summit, которая собирает 5000 участников, посетителей, инвесторов со всей Юго-Восточной Азии. Наша компания была приглашена организаторами с целью презентации нашего продукта - IVCBox - среди 250 участников выставки. Это был ценный и важный опыт на данной стадии развития продукта, поскольку CEO компании имели возможность рассказать посетителям о нашей разработке, а также привлечь потенциальных клиентов и инвесторов.</p><p>Платформа Echelon является ежегодным и очень масштабным мероприятием в Сингапуре, куда съезжаются множество компаний, инвесторов и стартапов для взаимодействия, нетворкинга и расширения возможностей. Мы получили невероятный опыт и интересный инсайты на таком мероприятии, которое собирает самые многообещающие стартапы и создателей инновационных  IT-решений со всей Юго-Восточной Азии в одном месте.</p><p>За два дня мы не только рассказывали о себе, показывали как работает продукт, но и погрузились в интересные питчи и выступления спикеров, которые говорили на разные темы, начиная Блокчейном и заканчивая AR/VR. В целом, мы получили ценные знания от людей, которые имели опыт в IT-стартапах, и имели возможность для нетворкинга и сотрудничества.</p>"},{id:2,title:"Тимбилдинг Smartlab",date:"",teaser:"6 июля 2018 года у нас прошел летний Тимбилдинг на горном курорте “Лесная Сказка”. ",description:"<p>В Smartlab работают высококвалифицированные профессионалы, среди которых разработчики, дизайнеры, интернет-маркетологи, менеджеры по продажам и другие специалисты. В целом, наши рабочие дни проходят в интенсивном труде: разработчики пишут коды, дизайнеры создают шедевры, менеджеры увеличивают продажи.</p><p>Поскольку работа у нас сидячая, отдых мы решили провести активно и на свежем воздухе. Лесная сказка славится своими живописными пейзажами, хорошим сервисом и интересными вариантами для активного отдыха. Сорок минут езды от города Алматы, достойны того, чтобы на высоте 1 650 метров над уровнем моря приобщиться к здоровому образу жизни и отдохнуть от городской суеты. Мы спустились с троллейного парка и наша команда была в восторге от спуска, наверное это был самый яркий момент нашего тимбилдинга.</p><p>Мы считаем себя очень дружным и сплоченным коллективом, в котором, как в отлаженном механизме, все работают эффективно и продуктивно. Команда Smartlab расширяется и мы всегда рады приветствовать новых сотрудников у нас в компании.</p>"}]}}}},computed:{preview:function(){return this.translations[this.state.lang].news.slice(0,3)},getNews:function(){return this.translations[this.state.lang].news}}}},"S+hO":function(t,e,s){var a=s("VU/8")(s("QdyK"),s("AiRy"),null,null);t.exports=a.exports}});