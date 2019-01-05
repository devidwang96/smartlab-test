webpackJsonp([4],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(177),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Projects/ib.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ib.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6195f3aa", Component.options)
  } else {
    hotAPI.reload("data-v-6195f3aa", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 164:
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
                        title: 'IVCBox',
                        teaser: 'Video call service',
                        description: '<p>IVCBox is a video call widget for websites. IVCBox is an innovative tool, designed to increase sales and customer service quality. This real-time customer communication widget allows to save customer profiles, record video calls and save chat history. The chatbot has learning capabilities, based on the chat history and FAQs, then it automates 80% of answers for incoming messages. IVCBox merged all the channels of communication on the website.</p>',
                        pdfLink: '',
                        siteUrl: '',
                        additionContent: '<ul>' + '<li>Live chat for websites</li>' + '<li>Video and voice call service</li>' + '<li>Recording</li>' + '<li>Website analytics</li>' + '<li>Widget design customization</li>' + '<li>File sharing</li>' + '<li>Chatbot</li>' + '</ul>',
                        nextProject: {
                            route: 'qaryz',
                            preview: '/images/ivc/next.png'
                        },
                        previews: [{
                            url: '/images/ivc/img1.png'
                        }, {
                            url: '/images/ivc/img2.png'
                        }, {
                            url: '/images/ivc/img3.png'
                        }]
                    }
                },
                ru: {
                    project: {
                        title: 'IVCBox',
                        teaser: 'Сервис видео-звонка',
                        description: '<p>IVCBox позволяет совершать и принимать видеозвонки непосредственно на сайте.</p><p>IVCBox является инновационным инструментом для обеспечения повышения продаж и высокого качества клиентского сервиса. IVCBox - это инструмент для общения с клиентами в режиме реального времени, который позволяет собирать и хранить данные клиента, вести запись звонков и сохранять историю чатов. Чат-бот обучается на истории чата и часто задаваемых вопросах и автоматизирует 80% входящих сообщений. IVCBox объединяет все каналы коммуникаций с клиентом на сайте.</p>',
                        pdfLink: '',
                        siteUrl: '',
                        additionContent: '<ul>' + '<li>Чат для сайта</li>' + '<li>Сервис видео и аудио звонка</li>' + '<li>Запись звонков</li>' + '<li>Аналитика сайта</li>' + '<li>Персонализированный виджет</li>' + '<li>Возможность отправлять файлы</li>' + '<li>Чат-бот</li>' + '</ul>',
                        nextProject: {
                            route: 'qaryz',
                            preview: '/images/ivc/next.png'
                        },
                        previews: [{
                            url: '/images/ivc/img1.png'
                        }, {
                            url: '/images/ivc/img2.png'
                        }, {
                            url: '/images/ivc/img3.png'
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

/***/ 177:
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
  }, [_c('p', [_vm._m(0), _vm._v(_vm._s(_vm.state.translations[_vm.state.lang].productDetails))])])])]), _vm._v(" "), _c('div', {
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
     require("vue-hot-reload-api").rerender("data-v-6195f3aa", module.exports)
  }
}

/***/ })

});