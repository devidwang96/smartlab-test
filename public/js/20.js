webpackJsonp([20],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(171),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Contact.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Contact.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8a087e06", Component.options)
  } else {
    hotAPI.reload("data-v-8a087e06", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 157:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            map: null,
            translations: {
                en: {
                    page: {
                        title: "Do you want to visit us for a conversation and a cup of good coffee? Don’t hesitate to contact us and become our client or a pertner!",
                        writeEmail: "Enter your email to subscribe for newsletter",
                        subscribe: "Subscribe",
                        address: "Kazakhsan, Almaty Kyz Zhibek st., 131B"
                    }
                },
                ru: {
                    page: {
                        title: "Хотите приехать за дружеской беседой и чашкой очень хорошего кофе? Не стесняйтесь связаться с нами, чтобы стать клиентами или партнерами.",
                        writeEmail: "Напиши email чтобы быть в курсе новостей",
                        subscribe: "Подписаться",
                        address: "г.Алматы, мкр. Кок-Тобе, ул. Кыз-Жибек, 131Б"
                    }
                }
            }
        };
    },

    methods: {
        yMapInit: function yMapInit() {
            this.map = new ymaps.Map("map", {
                center: [43.213790, 76.976461],
                zoom: 15
            });
            var smartLab = new ymaps.Placemark([43.213790, 76.976461]);
            this.map.geoObjects.add(smartLab);
        },
        yMapDestroy: function yMapDestroy() {
            this.map.destroy();
        }
    },
    mounted: function mounted() {
        var _this = this;

        ymaps.ready(function () {
            _this.yMapInit();
        });
    },
    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
        this.yMapDestroy();
        next();
    }
});

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-contact"
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
    staticClass: "section section-subscribe"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('p', {
    staticClass: "section__title"
  }, [_vm._v("\n                    " + _vm._s(_vm.translations[_vm.state.lang].page.title) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "subscribe-form"
  }, [_c('form', {
    staticClass: "row",
    attrs: {
      "action": "#"
    }
  }, [_c('input', {
    attrs: {
      "type": "text",
      "id": "email",
      "placeholder": _vm.translations[_vm.state.lang].page.writeEmail
    }
  }), _vm._v(" "), _c('input', {
    attrs: {
      "type": "submit",
      "id": "submit"
    },
    domProps: {
      "value": _vm.translations[_vm.state.lang].page.subscribe
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "section section-map"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-md-7 col-sm-6"
  }, [_c('div', {
    staticClass: "address"
  }, [_c('p', {
    staticClass: "address__title"
  }, [_vm._v("\n                                " + _vm._s(_vm.state.translations[_vm.state.lang].address) + "\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "address__address"
  }, [_vm._v("\n                                " + _vm._s(_vm.translations[_vm.state.lang].page.address) + "\n                            ")])])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "map",
    attrs: {
      "id": "map"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "follow"
  }, [_c('p', {
    staticClass: "follow__title"
  }, [_vm._v("\n                        " + _vm._s(_vm.state.translations[_vm.state.lang].followUs) + "\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "socials"
  })])])])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "col-md-5 col-sm-6"
  }, [_c('div', {
    staticClass: "address"
  }, [_c('p', {
    staticClass: "address__title"
  }, [_vm._v("\n                                EMAIL\n                            ")]), _vm._v(" "), _c('div', {
    staticClass: "address__address"
  }, [_vm._v("\n                                office@smartcall.kz\n                            ")])])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8a087e06", module.exports)
  }
}

/***/ })

});