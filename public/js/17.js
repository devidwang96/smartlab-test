webpackJsonp([17],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(169),
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

/***/ 160:
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newsPreview: true,
            newsInner: false,
            selectedNewsItem: [],
            news: [{
                id: 0,
                title: 'Название новости 1',
                date: '15.02.2018',
                teaser: 'Мы помогаем ведущим казахстанским\n' + 'приложения, продукты и услуги. За\n' + 'веб-стартапам и компаниям создать\n' + 'использовании.',
                description: 'Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\n' + 'риложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \n' + 'пааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \n' + 'пар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \n' + 'апрпарпарпарпаааааааар а а а а а а а а а  а '
            }, {
                id: 1,
                title: 'Название новости 2',
                date: '15.02.2018',
                teaser: 'Мы помогаем ведущим казахстанским\n' + 'приложения, продукты и услуги. За\n' + 'веб-стартапам и компаниям создать\n' + 'использовании.',
                description: 'Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\n' + 'риложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \n' + 'пааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \n' + 'пар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \n' + 'апрпарпарпарпаааааааар а а а а а а а а а  а '
            }, {
                id: 2,
                title: 'Название новости 2',
                date: '15.02.2018',
                teaser: 'Мы помогаем ведущим казахстанским\n' + 'приложения, продукты и услуги. За\n' + 'веб-стартапам и компаниям создать\n' + 'использовании.',
                description: 'Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\n' + 'риложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \n' + 'пааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \n' + 'пар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \n' + 'апрпарпарпарпаааааааар а а а а а а а а а  а '
            }, {
                id: 3,
                title: 'Название новости 2',
                date: '15.02.2018',
                teaser: 'Мы помогаем ведущим казахстанским\n' + 'приложения, продукты и услуги. За\n' + 'веб-стартапам и компаниям создать\n' + 'использовании.',
                description: 'Мы помогаем ведущим казахстансипипаиаиаиаиаи  ии аиа и   аппипаиа и\n' + 'риложения, продукты и услуги. За  ииаи  иаи  иаиааиа     а и  и пиа    пипаи   \n' + 'пааааааааааааааааааааааааааа паааааааааааааааааааааааааааааааа \n' + 'пар               ппапаапапапапапапаапапапапаапапапапапа па пар аара \n' + 'апрпарпарпарпаааааааар а а а а а а а а а  а '
            }]
        };
    },

    computed: {
        preview: function preview() {
            return this.news.slice(0, 3);
        }
    }
});

/***/ }),

/***/ 169:
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
  }, _vm._l(((_vm.newsPreview ? _vm.preview : _vm.news)), function(item) {
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
    staticClass: "new-inner__title"
  }, [_vm._v("\n                                " + _vm._s(_vm.selectedNewsItem.title) + "\n                            ")]), _vm._v(" "), _c('p', {
    staticClass: "new-inner__date"
  }, [_vm._v("\n                                " + _vm._s(_vm.selectedNewsItem.date) + "\n                            ")]), _vm._v(" "), _c('p', {
    staticClass: "new-inner__description"
  }, [_vm._v("\n                                " + _vm._s(_vm.selectedNewsItem.description) + "\n                            ")])])])]), _vm._v(" "), _c('div', {
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
  }, [_vm._v("\n                        " + _vm._s(_vm.state.translations[_vm.state.lang].gotoSite) + "\n                    ")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.news.length > 3 && _vm.newsPreview && !_vm.newsInner) ? _c('button', {
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