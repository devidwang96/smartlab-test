webpackJsonp([1],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(167),
  /* template */
  __webpack_require__(174),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Projects/sr.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] sr.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3db2171e", Component.options)
  } else {
    hotAPI.reload("data-v-3db2171e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 167:
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
                        title: 'Smart Recognition',
                        teaser: 'The face recognition module',
                        description: '<p>The face recognition model is designed for an automatic personal identification by their video recording or a photography.</p> <p>-The face recognition module works with both camera and face detectors. </p> <p>-On the first stage, the face detector identifies appearance of the face in the shot and captures its image.</p> <p>-Next, the two schemes are plausible:1. Identification 2. Verification</p>',
                        pdfLink: '',
                        siteUrl: '',
                        additionContent: '<p><b>The capture module</b></p>' + '<p>The following information is displayed on the screen: </p>' + '<p>- captured faces <br>- time and date of capture <br>- the number of the camera, with which the module is working</p>' + '<p><b>The online monitoring module</b></p>' + '<p>Data display</p>' + '<p>-Facial recognition <br>-Camera number <br>-time and date of recognition <br>-reference photo from the database <br>-Full name <br>-The degree of similarity <br>-Comments, with the editing function, added along with the photo to the database</p>',
                        nextProject: {
                            route: 'qaryz',
                            preview: '/images/sr/next.png'
                        },
                        previews: [{
                            url: '/images/sr/img1.png'
                        }, {
                            url: '/images/sr/img2.png'
                        }, {
                            url: '/images/sr/img3.png'
                        }]
                    }
                },
                ru: {
                    project: {
                        title: 'Smart Recognition',
                        teaser: 'Модуль распознования лиц',
                        description: '<p>Модуль распознавания лиц предназначен для автоматической идентификации личности по видеоизображению или фотографии </p>' + '<p>- Модуль распознавания лиц работает с камерой и детектором лиц. </p>' + '<p>- На первом этапе работы детектор лиц определяет появление в кадре лица и захватывает его изображение. </p>' + '<p>- Далее возможны две схемы работы модуляраспознавания лиц 1. идентификация 2. верификацяи </p>',
                        pdfLink: '',
                        siteUrl: '',
                        additionContent: '<p><b>Модуль захвата</b></p>' + '<p>Отображение на экране сопутствующих данных: </p>' + '<p>- захваченные лица <br>- даты и времени захвата <br>- номер камеры, с которой работает модуль</p>' + '<p><b>Модуль онлайн мониторинга</b></p>' + '<p>Отображение данных</p>' + '<p>- распознанные лица <br>- номер камеры <br>- даты и времени распознавания <br>- эталонной фотографии из базы данных <br>- ФИО <br>- степени сходства <br>- комментарии, введенного при добавлении лица в базу с возможностью редартирования</p>',
                        nextProject: {
                            route: 'qaryz',
                            preview: '/images/sr/next.png'
                        },
                        previews: [{
                            url: '/images/sr/img1.png'
                        }, {
                            url: '/images/sr/img2.png'
                        }, {
                            url: '/images/sr/img3.png'
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

/***/ 174:
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
     require("vue-hot-reload-api").rerender("data-v-3db2171e", module.exports)
  }
}

/***/ })

});