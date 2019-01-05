webpackJsonp([6],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(176),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Projects/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d1a2d10", Component.options)
  } else {
    hotAPI.reload("data-v-4d1a2d10", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 162:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            translations: {
                en: {
                    page: {
                        teaser: 'We help the leading companies create innovative products and services.'
                    },
                    projects: [{
                        name: 'Smart Call',
                        teaser: 'Call-back widget',
                        preview: '/images/projects/1.png',
                        url: 'sc'
                    }, {
                        name: 'Qaryz',
                        teaser: 'Automated scoring system',
                        preview: '/images/projects/4.png',
                        url: 'qaryz'
                    }, {
                        name: 'Monocle',
                        teaser: 'Unique mobile application',
                        preview: '/images/projects/5.png',
                        url: 'monocle'
                    }, {
                        name: 'IVC Box',
                        teaser: 'Video call widget',
                        preview: '/images/projects/3.png',
                        url: 'ib'
                    }, {
                        name: 'Smart Recognition',
                        teaser: 'Face recognition module',
                        preview: '/images/projects/2.png',
                        url: 'sr'
                    }]
                },
                ru: {
                    page: {
                        teaser: 'Оказываем услуги и создаем уникальные продукты и приложения для ведущих казахстанских компаний'
                    },
                    projects: [{
                        name: 'Smart Call',
                        teaser: 'Виджет обратного звонка',
                        preview: '/images/projects/1.png',
                        url: 'sc'
                    }, {
                        name: 'Qaryz',
                        teaser: 'Автоматизированный скоринговый сервис',
                        preview: '/images/projects/4.png',
                        url: 'qaryz'
                    }, {
                        name: 'Monocle',
                        teaser: 'Уникальное мобильное приложение',
                        preview: '/images/projects/5.png',
                        url: 'monocle'
                    }, {
                        name: 'IVC Box',
                        teaser: 'Виджет видео звонка',
                        preview: '/images/projects/3.png',
                        url: 'ib'
                    }, {
                        name: 'Smart Recognition',
                        teaser: 'Модуль распознования лиц',
                        preview: '/images/projects/2.png',
                        url: 'sr'
                    }]
                }
            }
        };
    },

    computed: {
        getProjects: function getProjects() {
            return this.translations[this.state.lang].projects;
        }
    }
});

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-projects"
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
    staticClass: "page__container"
  }, [_c('h1', {
    staticClass: "page__title animate fade-up",
    attrs: {
      "data-duration": "500"
    }
  }, [_vm._v(_vm._s(_vm.state.translations[_vm.state.lang].projects))]), _vm._v(" "), _c('p', {
    staticClass: "page__description animate fade-up",
    attrs: {
      "data-duration": "500",
      "data-delay": "50"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.translations[_vm.state.lang].page.teaser) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "projects"
  }, [_c('div', {
    staticClass: "row"
  }, _vm._l((_vm.getProjects), function(item, index) {
    return _c('div', {
      staticClass: "col-md-4 col-sm-6 col-xs-12"
    }, [_c('div', {
      staticClass: "project animate zoom",
      attrs: {
        "data-delay": 100 * index,
        "data-duration": "1000"
      }
    }, [_c('router-link', {
      attrs: {
        "to": _vm.Laravel.getLocalizedRoute({
          name: item.url
        })
      }
    }, [_c('div', {
      staticClass: "project__overlay"
    }, [_c('div', {
      staticClass: "project__content"
    }, [_c('p', {
      staticClass: "project__title"
    }, [_vm._v("\n                                            " + _vm._s(item.name) + "\n                                        ")]), _vm._v(" "), _c('p', {
      staticClass: "project__teaser"
    }, [_vm._v("\n                                            " + _vm._s(item.teaser) + "\n                                        ")])])]), _vm._v(" "), _c('img', {
      staticClass: "project__preview",
      attrs: {
        "src": item.preview,
        "alt": ""
      }
    })])], 1)])
  }))])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4d1a2d10", module.exports)
  }
}

/***/ })

});