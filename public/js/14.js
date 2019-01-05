webpackJsonp([14],{

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(164),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Vacancy.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Vacancy.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-074133d8", Component.options)
  } else {
    hotAPI.reload("data-v-074133d8", Component.options)
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            translations: {
                en: {
                    pageTitle: 'Careers',
                    pageDescription: 'Great moments happen here, in SmartLab. Join us in the creative process together with our wonderful and exceptional team, helping global companies create amazing products.',
                    vacancies: [{
                        name: 'Designer',
                        description: 'Designing the interfaces of the websites, mobile applications, landings, development of concepts and implementation of user interface designs, development of design projects (sketches + 3D visuals). Development of images, schemes, graphs, diagrams, icons, etc.'
                    }, {
                        name: 'Creative director',
                        description: 'Have a creative vision? We need a creative lead for working with designers, artists, copywriters, sales teams and marketers to create a vision for products sold. Creativity, analytical, managerial and interpersonal skills are required'
                    }, {
                        name: 'Developer',
                        description: 'Developing web-applications and websites. Imposition of blueprints. Participation in discussions about architecture and usability.'
                    }]
                },
                ru: {
                    pageTitle: 'Предложение работы',
                    pageDescription: 'Присоединяйтесь к нашей команде удивительных и исключительных людей, и помогайте мировым компаниям создавать потрясающие продукты.',
                    vacancies: [{
                        name: 'Дизайнер',
                        description: 'Проектирование интерфейсов сайтов, мобильных приложений, промо-страниц (лендингов); разработка концепции и реализация дизайна пользовательских интерфейсов; разработка дизайн-проектов (чертежи + 3D-визуализации) Разработка рисунков, схем, графиков, диаграмм, иконок'
                    }, {
                        name: 'Креативный директор',
                        description: 'Имеете креативную жилку? Нам нужен творческий человек для работы с дизайнерами, художниками, копирайтерами, командой по продажам и маркетологами для создания видения продуктов, которые мы предлагаем. Требования: креативность, аналитическое мышление, управленческие способности и коммуникабельность'
                    }, {
                        name: 'Программист',
                        description: 'Разработка веб-приложений и веб-сайтов. Верстка макетов. Написание технической документации к проектам. Участие в обсуждениях по архитектуре и usability.'
                    }]
                }
            }
        };
    },

    computed: {
        getVacancies: function getVacancies() {
            return this.translations[this.state.lang].vacancies;
        }
    }
});

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-vacancy"
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
        name: 'home'
      })
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.state.translations[_vm.state.lang].back) + "\n                ")])], 1)]), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('h1', {
    staticClass: "page__title animate fade-up",
    attrs: {
      "data-duration": "800"
    }
  }, [_vm._v(" " + _vm._s(_vm.translations[_vm.state.lang].pageTitle) + " ")]), _vm._v(" "), _c('p', {
    staticClass: "page__description animate fade-up",
    attrs: {
      "data-duration": "800",
      "data-delay": "200"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.translations[_vm.state.lang].pageDescription) + "\n            ")]), _vm._v(" "), _c('div', {
    staticClass: "section section-vacancies"
  }, _vm._l((_vm.getVacancies), function(item, index) {
    return _c('div', {
      class: ['main-collapse', 'animate', {
        'fade-left': index % 2 === 0
      }, {
        'fade-right': index % 2 === 1
      }],
      attrs: {
        "data-duration": "800",
        "data-delay": index * 100
      }
    }, [_c('button', {
      attrs: {
        "data-toggle": "collapse",
        "data-target": '#vacancy_' + index
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "collapse clearfix",
      attrs: {
        "id": 'vacancy_' + index
      }
    }, [_c('div', {
      staticClass: "main-collapse__content"
    }, [_vm._v("\n                            " + _vm._s(item.description) + "\n                        ")]), _vm._v(" "), _c('p', {
      staticClass: "more"
    }, [_c('a', {
      attrs: {
        "href": "#"
      }
    }, [_vm._v(_vm._s(_vm.state.translations[_vm.state.lang].more))])]), _vm._v(" "), _c('p', {
      staticClass: "bid"
    }, [_c('a', {
      staticClass: "button button-gray",
      attrs: {
        "href": "#"
      }
    }, [_vm._v("\n                                " + _vm._s(_vm.state.translations[_vm.state.lang].applyNow) + "\n                            ")])])])])
  }))])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-074133d8", module.exports)
  }
}

/***/ })

});