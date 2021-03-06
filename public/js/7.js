webpackJsonp([7],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(178),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/News/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61b189a9", Component.options)
  } else {
    hotAPI.reload("data-v-61b189a9", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newsPreview: true,
            newsInner: false,
            selectedNewsItem: [],
            translations: {
                en: {
                    news: [{
                        id: 0,
                        title: 'IVCBox on Startup Avalanche in Romania',
                        date: '11-12th of June 2018',
                        teaser: 'The Smartlab team presented their product IVCBox at Startup Avalanche in Romania',
                        description: '<p>11-12th of June 2018 the Smartlab team presented IVCBox at Startup Avalanche in Romania. Our team pitched among other participants of this significant event in IT industry. We were the first  team ever from Kazakhstan, who participated in this conference and presented the product in front of the large audience.</p>' + '<p>After we got selected out of 250 applicants, we were invited to pitch among other 14 the most interesting and promising startup projects from all over the world. Startup Avalanche is the event, that is held anually as a part of Techsylvania and gathers thousands of visitors, investors, invited speakers and guests. Romania is known for developed IT industry and cutting edge innovations as well as specialists in this field.</p>' + '<p>The participation in such a large-scale event was exciting and fascinating due to the competition, networking, new knowledge and fresh glance at our products and its further development.</p>' + '<p>The event was well-organized. When the organizators found out about our flight cancellation and difficulties in arriving to the Eastern Europe, they did the most to help us out and we were welcomed warmly. The organizators were listening to pitches of the participants and giving recommendations and comments till late night before the day of the final presentation. It was a great experience, which was only the first step of our young product - IVCBox.</p>'
                    }, {
                        id: 1,
                        title: 'Smartlab on E-27 Asia Echelon Summit',
                        date: 'June 28-29th 2018',
                        teaser: 'The Team Smartlab participated in e-27 Asia Echelon Summit in Singapore',
                        description: '<p>E-27 Asia Echelon Summit took place June 28-29th 2018. It is the event that gathers annually 5000 visitors and investors from all over South East Asia. Our company was invited by the organizators to present our product IVCBox among other 250 participants of the expo. It was a valuable and crucial experience at the current stage of the product development, because the CEOs of the company had a chance to tell the visitors of the expo about the product as well as attract certain investors and clients.</p>' + '<p>The Echelon platform is an annual and large-scale event in Singapore, where lots of companies, startups, investors are gathering for networking, opportunities, collaboration and experience exchange.  We have gained an incredible experience and fascinating insights at this event, where promising startups and creators of innovative IT-solutions get together in one place.</p>' + '<p>In two days we had an opportunity not only to tell about ourselves, and how the product works, but also listened to pitches on different topics, beginning with Blockchain, and ending with AR/VR. Overall,we gained valuable knowledge from people, who had a big experience in IT-startups, and had an opportunity for networking and collaboration.</p>'
                    }, {
                        id: 2,
                        title: 'Smartlab team building event',
                        date: '6th of July 2018',
                        teaser: '6th of July 2018 we had a summer team building at a mountain resort “Lesnaya Skazka”.',
                        description: '<p>6th of July 2018 we had a summer team building at a mountain resort “Lesnaya Skazka”. Highly qualified professionals work in Smartlab, including developers, designers, internet-marketing specialist, sales managers and other employees.</p>' + '<p>Since our work is mostly sedentary, we decided to spend time actively and outdoors. Lesnaya skazka is famous for its beautiful scenery, good service and interesting options for active recreation. 40 minutes drive from the Almaty city center were worth the healthy outdoor recreation time we spent 1650 meters above the level of the sea. We had a descend down the trolley park and our team was amazed by this activity, probably it was the most exciting highlight of our day.</p>' + '<p>We consider ourselves as a friendly and close-knit team, where, like in a well-adjusted mechanism, everyone works efficiently and productively. The Smartlab team is expanding and we are always happy to welcome new colleagues in our company.</p>' + '<img src="/images/content/teambuilding.jpeg" alt="">'
                    }]
                },
                ru: {
                    news: [{
                        id: 0,
                        title: 'IVCBox на Startup Avalanche в Румынии',
                        date: '11-12 июня 2018',
                        teaser: 'Команда Smartlab презентовала свой продукт IVCBox на Startup Avalanche в Румынии',
                        description: '<p>11-12 июня 2018 года Smartlab презентовал свой продукт IVCBox на Startup Avalanche в Румынии. Наша компания оказалась среди участников такого значительного мероприятия в сфере IT. За всю историю мы были первой командой из Казахстана, которая участвовала в этой конференции и презентовала перед многочисленной аудиторией и инвесторами свою разработку.</p>' + '<p>Пройдя отбор среди 250 стартапов, мы были приглашены выступить с презентацией среди других 14 самых интересных и перспективных проектов со всего мира. Startup Avalanche это ивэнт, который ежегодно проходит в рамках конференции Techsylvania в Румынии и собирает тысячи посетителей, участников, инвесторов и приглашенных гостей и спикеров. Румыния в целом славится своими IT-индустрией и передовыми разработками и специалистами в этой сфере.</p>' + '<p>Участие в таком масштабном мероприятии было захватывающим и увлекательным благодаря большой конкуренции, нетворкинга, новым знаниям и свежему взгляду на наш продукт и его дальнейшее развитие.</p>' + '<p>Организация мероприятия была на высоте, узнав о на наших сложностях во время перелета в Западную Европу, организаторы оказали максимальную помощь в трансфере и встретили нас очень тепло. Организаторы выслушивали питчи участников до поздней ночи снова и снова, давали комментарии и советы перед финальным выступлением. Это было интересное событие, которое заложило начало для  других презентаций нашего молодого продукта - IVCBox.</p>'
                    }, {
                        id: 1,
                        title: 'Smartlab в выставке e-27 Asia Echelon Summit',
                        date: '28-29 июля 2018',
                        teaser: 'Smartlab принял участие в выставке e-27 Asia Echelon Summit в Сингапуре',
                        description: '<p>28-29 июля 2018 года прошла выставка E-27 Asia Echelon Summit, которая собирает 5000 участников, посетителей, инвесторов со всей Юго-Восточной Азии. Наша компания была приглашена организаторами с целью презентации нашего продукта - IVCBox - среди 250 участников выставки. Это был ценный и важный опыт на данной стадии развития продукта, поскольку CEO компании имели возможность рассказать посетителям о нашей разработке, а также привлечь потенциальных клиентов и инвесторов.</p>' + '<p>Платформа Echelon является ежегодным и очень масштабным мероприятием в Сингапуре, куда съезжаются множество компаний, инвесторов и стартапов для взаимодействия, нетворкинга и расширения возможностей. Мы получили невероятный опыт и интересный инсайты на таком мероприятии, которое собирает самые многообещающие стартапы и создателей инновационных  IT-решений со всей Юго-Восточной Азии в одном месте.</p>' + '<p>За два дня мы не только рассказывали о себе, показывали как работает продукт, но и погрузились в интересные питчи и выступления спикеров, которые говорили на разные темы, начиная Блокчейном и заканчивая AR/VR. В целом, мы получили ценные знания от людей, которые имели опыт в IT-стартапах, и имели возможность для нетворкинга и сотрудничества.</p>'
                    }, {
                        id: 2,
                        title: 'Тимбилдинг Smartlab',
                        date: '6 июля 2018 года',
                        teaser: '6 июля 2018 года у нас прошел летний Тимбилдинг на горном курорте “Лесная Сказка”. ',
                        description: '<p>В Smartlab работают высококвалифицированные профессионалы, среди которых разработчики, дизайнеры, интернет-маркетологи, менеджеры по продажам и другие специалисты. В целом, наши рабочие дни проходят в интенсивном труде: разработчики пишут коды, дизайнеры создают шедевры, менеджеры увеличивают продажи.</p>' + '<p>Поскольку работа у нас сидячая, отдых мы решили провести активно и на свежем воздухе. Лесная сказка славится своими живописными пейзажами, хорошим сервисом и интересными вариантами для активного отдыха. Сорок минут езды от города Алматы, достойны того, чтобы на высоте 1 650 метров над уровнем моря приобщиться к здоровому образу жизни и отдохнуть от городской суеты. Мы спустились с троллейного парка и наша команда была в восторге от спуска, наверное это был самый яркий момент нашего тимбилдинга.</p>' + '<p>Мы считаем себя очень дружным и сплоченным коллективом, в котором, как в отлаженном механизме, все работают эффективно и продуктивно. Команда Smartlab расширяется и мы всегда рады приветствовать новых сотрудников у нас в компании.</p>' + '<img src="/images/content/teambuilding.jpeg" alt="">'
                    }]
                }
            }
        };
    },

    computed: {
        preview: function preview() {
            return this.translations[this.state.lang].news.slice(0, 3);
        },
        getNews: function getNews() {
            return this.translations[this.state.lang].news;
        }
    }
});

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-news"
  }, [_c('div', {
    staticClass: "side-button hidden-xs hidden-sm"
  }, [_c('button', {
    staticClass: "button-blue animate zoom",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'vacancy'
      })
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.state.translations[_vm.state.lang].vacancies) + "\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "news"
  }, [(!_vm.newsInner) ? _c('div', {
    staticClass: "news-show"
  }, _vm._l(((_vm.newsPreview ? _vm.preview : _vm.getNews)), function(item) {
    return _c('div', {
      staticClass: "new",
      on: {
        "click": function () {
          _vm.newsInner = true;
          _vm.selectedNewsItem = item
        }
      }
    }, [_c('p', {
      staticClass: "new__date"
    }, [_vm._v("\n                        " + _vm._s(item.date) + "\n                    ")]), _vm._v(" "), _c('p', {
      staticClass: "new__title"
    }, [_vm._v("\n                        " + _vm._s(item.title) + "\n                    ")]), _vm._v(" "), _c('p', {
      staticClass: "new__description"
    }, [_vm._v("\n                        " + _vm._s(item.teaser) + "\n                    ")]), _vm._v(" "), _c('p', {
      staticClass: "new__arrow"
    }, [_vm._m(0, true), _vm._v(" " + _vm._s(_vm.state.translations[_vm.state.lang].readMore) + "\n                    ")])])
  })) : _vm._e(), _vm._v(" "), (_vm.newsInner) ? _c('div', {
    staticClass: "news-inner clearfix"
  }, [_c('div', {
    staticClass: "news-inner__content clearfix"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "col-lg-7"
  }, [_c('div', {
    staticClass: "new-inner"
  }, [_c('h3', {
    staticClass: "new-inner__title",
    domProps: {
      "innerHTML": _vm._s(_vm.selectedNewsItem.teaser)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "new-inner__date"
  }, [_vm._v("\n                                " + _vm._s(_vm.selectedNewsItem.date) + "\n                            ")]), _vm._v(" "), _c('p', {
    staticClass: "new-inner__description",
    domProps: {
      "innerHTML": _vm._s(_vm.selectedNewsItem.description)
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "news-inner__links clearfix"
  }, [_c('button', {
    staticClass: "button-3d-black pull-left",
    on: {
      "click": function($event) {
        _vm.newsInner = false
      }
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.state.translations[_vm.state.lang].viewAllNews) + "\n                    ")]), _vm._v(" "), _c('router-link', {
    staticClass: "button button-arrowed pull-right",
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'home'
      })
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.state.translations[_vm.state.lang].gotoSite) + "\n                    ")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.getNews.length > 3 && _vm.newsPreview && !_vm.newsInner) ? _c('button', {
    staticClass: "button-3d-black",
    on: {
      "click": function($event) {
        _vm.newsPreview = false
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.state.translations[_vm.state.lang].viewAllNews) + "\n            ")]) : _vm._e(), _vm._v(" "), (!_vm.newsPreview && !_vm.newsInner) ? _c('button', {
    staticClass: "button-3d-black",
    on: {
      "click": function($event) {
        _vm.newsPreview = true
      }
    }
  }, [_vm._v("\n                " + _vm._s(_vm.state.translations[_vm.state.lang].lessNews) + "\n            ")]) : _vm._e()])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "/images/arrow.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-lg-5"
  }, [_c('h2', {
    staticClass: "news-inner__title"
  }, [_vm._v("News")])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61b189a9", module.exports)
  }
}

/***/ })

});