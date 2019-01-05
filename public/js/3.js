webpackJsonp([3],{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(171),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Projects/qariz.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] qariz.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1ce30cf1", Component.options)
  } else {
    hotAPI.reload("data-v-1ce30cf1", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 165:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            translations: {
                en: {
                    project: {
                        title: 'Qariz',
                        teaser: 'Automated scoring service',
                        description: '<p>Qariz.kz is a fully automated scoring service for urgent loan delivery using the website or mobile applications based on iOS or android. The user identification and application form takes no more than 10 minutes and allows receiving a loan on your bank account from the comfort of your home. That requires only your identification document. It supports trouble-free crediting; selecting the most appropriate amount of loan based on one’s scoring data. Integrated with «Government Center of Retirement Payments» (ГЦВП) and «First Credit Bureau» (ПКБ). Available 24/7</p>',
                        pdfLink: '',
                        siteUrl: 'http://quariz.kz/',
                        additionContent: '',
                        nextProject: {
                            route: 'qaryz',
                            preview: '/images/quariz/next.png'
                        },
                        previews: [{
                            url: '/images/quariz/img1.png'
                        }, {
                            url: '/images/quariz/img2.png'
                        }, {
                            url: '/images/quariz/img3.png'
                        }]
                    }
                },
                ru: {
                    project: {
                        title: 'Qariz',
                        teaser: 'Автоматизированный скоринговый сервис',
                        description: '<p>Qariz.kz это полностью автоматизированный скоринговый сервис для срочной выдачи микрокредитов онлайн с помощью сайта или мобильных приложений на базе ios и  андроид. Идентификация пользователя и  заполнение анкеты занимает не больше  10 минут и позволяет получить займ на  банковскую карту не выходя из дома при  наличии всего лишь удостоверения личности. Поддерживает безотказное кредитование подбирая клиенту оптимальную сумму займа основываясь на его скоринговых данных. Интегрирована с ГЦВП и ПКБ. Доступна 24 часа в сутки.</p>',
                        pdfLink: '',
                        siteUrl: 'http://quariz.kz/',
                        additionContent: '',
                        nextProject: {
                            route: 'qaryz',
                            preview: '/images/quariz/next.png'
                        },
                        previews: [{
                            url: '/images/quariz/img1.png'
                        }, {
                            url: '/images/quariz/img2.png'
                        }, {
                            url: '/images/quariz/img3.png'
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

/***/ 171:
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
  }))])])]), _vm._v(" "), _c('app-footer')], 1)
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
     require("vue-hot-reload-api").rerender("data-v-1ce30cf1", module.exports)
  }
}

/***/ })

});