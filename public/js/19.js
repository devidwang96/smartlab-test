webpackJsonp([19],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(170),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-61f9d3d2", Component.options)
  } else {
    hotAPI.reload("data-v-61f9d3d2", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 158:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                    hotNews: [{
                        id: 0,
                        name: 'fweafwaf',
                        description: 'ksremngoseigj'
                    }, {
                        id: 1,
                        name: 'fweafwaf',
                        description: 'ksremngoseigj'
                    }]
                },
                ru: {
                    hotNews: [{
                        id: 0,
                        name: '',
                        description: 'Новость'
                    }, {
                        id: 1,
                        name: '',
                        description: 'Новость'
                    }]
                }
            }
        };
    },

    computed: {
        getNews: function getNews() {
            return this.translations[this.state.lang].hotNews;
        }
    }
});

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-home"
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
  }, [_vm._v("\n                    " + _vm._s(_vm.state.translations[_vm.state.lang].vacancies) + "\n                ")])], 1)]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "hot-news animate fade-left hidden-xs hidden-sm",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('h3', {
    staticClass: "hot-news__title"
  }, [_vm._v(_vm._s(_vm.state.translations[_vm.state.lang].news))]), _vm._v(" "), _c('div', {
    staticClass: "hot-news__posts"
  }, _vm._l((_vm.getNews), function(item) {
    return _c('div', {
      staticClass: "news-post"
    }, [_c('p', [_vm._v(_vm._s(item.description))])])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "section section-intro"
  }, [_c('div', {
    staticClass: "container"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "hot-news animate fade-left hidden-md hidden-lg",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('h3', {
    staticClass: "hot-news__title"
  }, [_vm._v(_vm._s(_vm.state.translations[_vm.state.lang].news))]), _vm._v(" "), _c('div', {
    staticClass: "hot-news__posts"
  }, _vm._l((_vm.getNews), function(item) {
    return _c('div', {
      staticClass: "news-post"
    }, [_c('p', [_vm._v(_vm._s(item.description))])])
  }))])])]), _vm._v(" "), _c('div', {
    staticClass: "svg"
  }, [_c('svg', {
    attrs: {
      "viewBox": "0 0 300 80",
      "xmlns": "http://www.w3.org/2000/svg"
    }
  }, [_c('clipPath', {
    attrs: {
      "id": "block-bg1-clip"
    }
  }, [_c('text', {
    staticClass: "text1 heavy",
    attrs: {
      "x": "0",
      "y": "150"
    }
  }, [_vm._v("SMART")]), _vm._v(" "), _c('text', {
    staticClass: "text2 heavy",
    attrs: {
      "x": "-10",
      "y": "360"
    }
  }, [_vm._v("LAB")])]), _vm._v(" "), _c('clipPath', {
    attrs: {
      "id": "block-bg2-clip"
    }
  }, [_c('text', {
    staticClass: "text1 heavy",
    attrs: {
      "x": "0",
      "y": "120"
    }
  }, [_vm._v("PRO")]), _vm._v(" "), _c('text', {
    staticClass: "text2 heavy",
    attrs: {
      "x": "0",
      "y": "240"
    }
  }, [_vm._v("JECT")])]), _vm._v(" "), _c('clipPath', {
    attrs: {
      "id": "block-bg3-clip"
    }
  }, [_c('text', {
    staticClass: "text1 heavy",
    attrs: {
      "x": "0",
      "y": "180"
    }
  }, [_vm._v("CONT.")])])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "lang-switcher hidden-xs"
  }, [_c('p', {
    staticClass: "animate zoom",
    attrs: {
      "data-duration": "500"
    }
  }, [_c('span', [_c('a', {
    attrs: {
      "href": "/en"
    }
  }, [_vm._v("ENG")])]), _vm._v("\n                |\n                "), _c('span', {
    staticClass: "active"
  }, [_c('a', {
    attrs: {
      "href": "/"
    }
  }, [_vm._v("RU")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "row imposition"
  }, [_c('div', {
    staticClass: "col-xs-12 col-sm-8"
  }, [_c('div', {
    staticClass: "row animate zoom",
    attrs: {
      "data-delay": "0",
      "data-duration": "1000"
    }
  }, [_c('div', {
    staticClass: "block block-large smartlab mouse-move-animate",
    attrs: {
      "data-sensivity": "80"
    }
  }, [_c('div', {
    staticClass: "block__mask animate fade-right",
    attrs: {
      "data-delay": "300",
      "data-duration": "500"
    }
  }, [_c('img', {
    staticClass: "mouse-move-animate",
    attrs: {
      "data-sensivity": "60",
      "src": "/images/maskbg1.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "block__title"
  }, [_c('p', [_vm._v("INNOVATIVE LABORATORY 2017")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "cols-mobile visible-xs clearfix"
  }, [_c('div', {
    staticClass: "block block-small project animate fade-right",
    attrs: {
      "data-delay": "300",
      "data-duration": "500"
    }
  }, [_c('div', {
    staticClass: "block__mask animate fade-left",
    attrs: {
      "data-delay": "500",
      "data-duration": "500"
    }
  }, [_c('img', {
    staticClass: "mouse-move-animate",
    attrs: {
      "data-sensivity": "60",
      "src": "/images/maskbg2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "block__title"
  }, [_c('p', [_vm._v("OUR PRODUCT")])])]), _vm._v(" "), _c('div', {
    staticClass: "block block-small cont animate fade-left",
    attrs: {
      "data-delay": "300",
      "data-duration": "500"
    }
  }, [_c('div', {
    staticClass: "block__mask animate fade-left",
    attrs: {
      "data-delay": "700",
      "data-duration": "500"
    }
  }, [_c('img', {
    staticClass: "mouse-move-animate",
    attrs: {
      "data-sensivity": "60",
      "src": "/images/maskbg3.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "block__title"
  }, [_c('p', [_vm._v("OUR CONTACT AND ADDRESS")])])])]), _vm._v(" "), _c('div', {
    staticClass: "col-xs-12 col-sm-4 hidden-xs"
  }, [_c('div', {
    staticClass: "row animate zoom text-center",
    attrs: {
      "data-delay": "200",
      "data-duration": "1000"
    }
  }, [_c('div', {
    staticClass: "block block-small project mouse-move-animate",
    attrs: {
      "data-sensivity": "100"
    }
  }, [_c('div', {
    staticClass: "block__mask animate fade-left",
    attrs: {
      "data-delay": "500",
      "data-duration": "500"
    }
  }, [_c('img', {
    staticClass: "mouse-move-animate",
    attrs: {
      "data-sensivity": "60",
      "src": "/images/maskbg2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "block__title"
  }, [_c('p', [_vm._v("OUR PRODUCT")])])])]), _vm._v(" "), _c('div', {
    staticClass: "row animate zoom",
    attrs: {
      "data-delay": "400",
      "data-duration": "1000"
    }
  }, [_c('div', {
    staticClass: "block block-small cont mouse-move-animate",
    attrs: {
      "data-sensivity": "120"
    }
  }, [_c('div', {
    staticClass: "block__mask animate fade-left",
    attrs: {
      "data-delay": "700",
      "data-duration": "500"
    }
  }, [_c('img', {
    staticClass: "mouse-move-animate",
    attrs: {
      "data-sensivity": "60",
      "src": "/images/maskbg3.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "block__title"
  }, [_c('p', [_vm._v("OUR CONTACT AND ADDRESS")])])])])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-61f9d3d2", module.exports)
  }
}

/***/ })

});