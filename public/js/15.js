webpackJsonp([15],{

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(173),
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        return {};
    },
    mounted: function mounted() {
        this.state.page.defaultPage = false;
    },
    destroyed: function destroyed() {
        this.state.page.defaultPage = true;
    }
});

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-project"
  }, [_c('div', {
    staticClass: "side-tools"
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
  })]), _vm._v(" "), _c('span', [_vm._v("\n                        Назад\n                    ")])])], 1), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "page__content clearfix"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('h1', {
    staticClass: "page__title"
  }, [_vm._v("\n                    Smart Recognition\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "project"
  }, [_c('p', {
    staticClass: "project__title"
  }, [_vm._v("\n                        Модуль распознования лиц\n                    ")]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "project__links"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'home'
      })
    }
  }, [_vm._v("\n                            Перейти на сайт\n                        ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "project__next hidden-xs"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'monocle'
      })
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/smartcall/preview-project-monocle.png",
      "alt": ""
    }
  })])], 1)]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "side-tools__title"
  }, [_c('p', [_vm._v("Проект монокль")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "project__description"
  }, [_c('p', [_vm._v("Модуль распознавания лиц предназначен для\n                            автоматической идентификации личности\n                            по видеоизображению или фотографии.")]), _vm._v(" "), _c('p', [_vm._v(" Модуль распознавания лиц работает с\n                            камерой и детектором лиц.")]), _vm._v(" "), _c('p', [_vm._v(" На первом этапе работы детектор лиц\n                            определяет появление в кадре лица и\n                            захватывает его изображение.")]), _vm._v(" "), _c('p', [_vm._v(" Далее возможны две схемы работы\n                            модуляраспознавания лиц:\n                            1. идентификация 2. верификация")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "project__docs"
  }, [_c('a', {
    staticClass: "doc",
    attrs: {
      "href": "#"
    }
  }, [_c('p', [_c('i', [_c('img', {
    attrs: {
      "src": "/images/pdf-icon.png",
      "alt": ""
    }
  })]), _vm._v("Детали продукта")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "project__previews"
  }, [_c('div', {
    staticClass: "preview"
  }, [_c('img', {
    attrs: {
      "src": "/images/smartcall/img1.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "preview"
  }, [_c('img', {
    attrs: {
      "src": "/images/smartcall/img2.png",
      "alt": ""
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "preview"
  }, [_c('img', {
    attrs: {
      "src": "/images/smartcall/img3.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "project__additions"
  }, [_c('ul', [_c('li', [_vm._v("ПЕРСОНАЛИЗИРОВАННЫЙ КОНТЕНТ")]), _vm._v(" "), _c('li', [_vm._v("ЛЕГКИЙ В ИСПОЛЬЗОВАНИИ")]), _vm._v(" "), _c('li', [_vm._v("ПРОВОДНИК В ГОРОДЕ")]), _vm._v(" "), _c('li', [_vm._v("ЭКОНОМИЯ ВРЕМЕНИ И СРЕДСТВ")]), _vm._v(" "), _c('li', [_vm._v("ЛОЯЛЬНОСТЬ")])])])])
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