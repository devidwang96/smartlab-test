webpackJsonp([5],{

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(182),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Projects/Monocle.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Monocle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bb1ce2d2", Component.options)
  } else {
    hotAPI.reload("data-v-bb1ce2d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 163:
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
                        title: 'Monocle',
                        teaser: 'Unique mobile application',
                        description: '<p>Monocle is an application based on the well-known SmartCall, which has been helping you to connect with different companies without any problems. Follow the news and promotions of needed companies; connect with them within 15 seconds, without wasting any time and money while you are waiting for the response.</p>' + '<p>Special for you, we have created the service of “Personal helper”. Our staff will be happy to tell you about our latest news and events in the city! It can help you decide where to go on the weekend and help you organize your leisure time. Just press the “Request a callback” button and connect with us in 15 seconds!</p>',
                        pdfLink: '',
                        siteUrl: 'https://monocle.kz/',
                        additionContent: '<ul>' + '<li>Personalized content</li>' + '<li>User-friendly</li>' + '<li>City guide</li>' + '<li>Saving time and money</li>' + '<li>Loyalty</li>' + '</ul>',
                        nextProject: {
                            route: 'ib',
                            preview: '/images/monocle/preview-project-monocle.png'
                        },
                        previews: [{
                            url: '/images/monocle/img1.png'
                        }, {
                            url: '/images/monocle/img2.png'
                        }, {
                            url: '/images/monocle/img3.png'
                        }]
                    }
                },
                ru: {
                    project: {
                        title: 'Monocle',
                        teaser: 'Уникальное мобильное приложение',
                        description: '<p>Monocle- приложение в основе которого лежит всем известный SmartCall, который на протяжении 2 лет помогал вам связаться с разными компаниями без каких либо проблем. Следите за акциями и новостями нужных вам организаций, связывайтесь с ними за 15 секунд, не тратя при этом баланса и времени на ожидание ответа.</p>' + '<p>Специально для Вас, мы создали услугу «Персонального помощника». Наши сотрудники с радостью расскажут вам о последних событиях и ивентах в городе! Подскажут куда лучше сходить на выходных и где провести свой досуг. Нажмите на кнопку «Заказать звонок» и свяжитесь с нами за 15 секунд!</p>',
                        pdfLink: '',
                        siteUrl: 'https://monocle.kz/',
                        additionContent: '<ul>' + '<li>ПЕРСОНАЛИЗИРОВАННЫЙ КОНТЕНТ</li>' + '<li>ЛЕГКИЙ В ИСПОЛЬЗОВАНИИ</li>' + '<li>ПРОВОДНИК В ГОРОДЕ</li>' + '<li>ЭКОНОМИЯ ВРЕМЕНИ И СРЕДСТВ</li>' + '<li>ЛОЯЛЬНОСТЬ</li>' + '</ul>',
                        nextProject: {
                            route: 'ib',
                            preview: '/images/monocle/preview-project-monocle.png'
                        },
                        previews: [{
                            url: '/images/monocle/img1.png'
                        }, {
                            url: '/images/monocle/img2.png'
                        }, {
                            url: '/images/monocle/img3.png'
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

/***/ 182:
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
     require("vue-hot-reload-api").rerender("data-v-bb1ce2d2", module.exports)
  }
}

/***/ })

});