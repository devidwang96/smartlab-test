webpackJsonp([2],{

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(175),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Projects/sc.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sc.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3f58d83c", Component.options)
  } else {
    hotAPI.reload("data-v-3f58d83c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 166:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            translations: {
                en: {
                    project: {
                        title: 'Smart Call',
                        teaser: 'Unique mobile application',
                        description: '<p>The call-back widget SMART CALL widget is a fundamentally new instrument designed to increase sales from the website, without advertisement and changes on the website itself</p>' + '<p>It can differentiate the clients from random visitors using 12 behavioral criteria and offers to leave a number for automatic connection with a manager just in 10 seconds Details</p>',
                        pdfLink: '',
                        siteUrl: 'https://smartcall.kz/',
                        additionContent: '<p><b>7 products in one platform:</b></p>' + '<ul>' + '<li>A call back in 15 seconds</li>' + '<li>SmartChat</li>' + '<li>Behavioral analytics</li>' + '<li>Data analytics</li>' + '<li>Mobile widget</li>' + '<li>Protection from missed calls</li>' + '<li>Customer database</li>' + '</ul>',
                        nextProject: {
                            route: 'ib',
                            preview: '/images/sc/next.png'
                        },
                        previews: [{
                            url: '/images/sc/img1.png'
                        }, {
                            url: '/images/sc/img2.png'
                        }, {
                            url: '/images/sc/img3.png'
                        }]
                    }
                },
                ru: {
                    project: {
                        title: 'Smart Call',
                        teaser: 'Виджет обратного звонка',
                        description: '<p> Виджет SMARTCALL -фундаментально новый инструмент увеличения продаж с сайта, без рекламы и изменений на сайте.</p>' + '<p>Различает потенциальных клиентов от случайных посетителей сайта по 12 поведенческим критериям и предлагает оставить номер телефона для автоматического соединения с менеджером всего за15 секунд.</p>',
                        siteUrl: 'https://smartcall.kz/',
                        additionContent: '<p><b>7 продуктов в 1 платформе:</b></p>' + '<ul>' + '<li>Обратный звонок за 15 секунд</li>' + '<li>SmartChat</li>' + '<li>Анализ поведения</li>' + '<li>Аналитика данных</li>' + '<li>Мобильный виджет</li>' + '<li>Защита от пропущенных</li>' + '<li>База клиентов</li>' + '</ul>',
                        nextProject: {
                            route: 'ib',
                            preview: '/images/sc/next.png'
                        },
                        previews: [{
                            url: '/images/sc/img1.png'
                        }, {
                            url: '/images/sc/img2.png'
                        }, {
                            url: '/images/sc/img3.png'
                        }]
                    }
                }
            }
        };
    },
    mounted: function mounted() {
        this.state.page.defaultPage = false;
    },
    destroyed: function destroyed() {
        this.state.page.defaultPage = true;
    }
});

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-project"
  }, [_c('div', {
    staticClass: "side-tools animate fade-right",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('div', {
    staticClass: "back"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'projects'
      })
    }
  }, [_c('i', [_c('img', {
    attrs: {
      "src": "/images/arrow-left-white.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', [_vm._v("\n                        " + _vm._s(_vm.state.translations[_vm.state.lang].back) + "\n                    ")])])], 1), _vm._v(" "), _c('div', {
    staticClass: "side-tools__title"
  }, [_c('p', [_vm._v(_vm._s(_vm.translations[_vm.state.lang].project.title))])]), _vm._v(" "), _c('div', {
    staticClass: "side-tools__title next-project"
  }, [_c('p', [_vm._v(_vm._s(_vm.state.translations[_vm.state.lang].nextProject))])])]), _vm._v(" "), _c('div', {
    staticClass: "page__content clearfix"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('h1', {
    staticClass: "page__title animate fade-up",
    attrs: {
      "data-duration": "700",
      "data-delay": "500"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.translations[_vm.state.lang].project.title) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "project"
  }, [_c('p', {
    staticClass: "project__title animate fade-up",
    attrs: {
      "data-duration": "700",
      "data-delay": "700"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.translations[_vm.state.lang].project.teaser) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "project__description animate fade-up",
    attrs: {
      "data-duration": "700",
      "data-delay": "700"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.translations[_vm.state.lang].project.description)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "project__docs"
  }, [_c('a', {
    staticClass: "doc",
    attrs: {
      "href": _vm.translations[_vm.state.lang].project.pdfLink
    }
  }, [_c('p', [_vm._m(0), _vm._v(_vm._s(_vm.state.translations[_vm.state.lang].productDetails))])])]), _vm._v(" "), _c('div', {
    staticClass: "project__links"
  }, [_c('a', {
    attrs: {
      "href": _vm.translations[_vm.state.lang].project.siteUrl
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.state.translations[_vm.state.lang].gotoSite) + "\n                        ")])])]), _vm._v(" "), _c('div', {
    staticClass: "project__next hidden-xs animate corner",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: _vm.translations[_vm.state.lang].project.nextProject.route
      })
    }
  }, [_c('img', {
    attrs: {
      "src": _vm.translations[_vm.state.lang].project.nextProject.preview,
      "alt": ""
    }
  })])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "project__previews"
  }, _vm._l((_vm.translations[_vm.state.lang].project.previews), function(item, index) {
    return _c('div', {
      staticClass: "preview animate zoom",
      attrs: {
        "data-duration": "1000",
        "data-delay": 500 + (index * 200)
      }
    }, [_c('img', {
      attrs: {
        "src": item.url,
        "alt": ""
      }
    })])
  })), _vm._v(" "), _c('div', {
    staticClass: "project__additions animate corner",
    attrs: {
      "data-duration": "1000"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.translations[_vm.state.lang].project.additionContent)
    }
  })])])]), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('i', [_c('img', {
    attrs: {
      "src": "/images/pdf-icon.png",
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-3f58d83c", module.exports)
  }
}

/***/ })

});