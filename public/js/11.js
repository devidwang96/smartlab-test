webpackJsonp([11],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(170),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/About.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] About.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-11c60f2a", Component.options)
  } else {
    hotAPI.reload("data-v-11c60f2a", Component.options)
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
                    pageTitle: 'About us',
                    pageDescription: '<p>' + 'We help the leading Kazakhstani companies to create incredible digital products' + '</p>' + '<p>' + 'We help the leading Kazakhstani companies to create incredible applications, products, and services. Within the last three years, we helped many small web-startups and companies create products that are beautiful and simple to use. Perhaps, you did not know that back then, but probably you have used the product, that we had developed. \n' + 'We are one the few agencies in Kazakhstan that can handle the idea of the production from the beginning until the end. From the napkin sketch to the real product. Do you have an excellent idea of a new product which nobody intends to build? We’ve got your back.\n' + 'Client consult us on different stages of product’s life. As a result, we have created versatile team of world-class designers, website and app developers, marketing specialists, project managers and quality control specialists, to guarantee that we can solve ay task  \n' + 'We cooperate with other organizations in terms of research, experiments, and development. It prompts the final users from the very beginning  \n</p>',
                    sectionAbout: {
                        text1: 'The group focused on innovative solutions, transformations,and business development',
                        text2: 'Our vision',
                        text3: 'Our goal is to enhance the quality of life using hi-tech products and services. We intend to become the global leader of quality in this field helping companies and their clients.'

                    },
                    services: [{
                        title: 'INTERFACE DESIGN',
                        description: 'A great user interface goes much deeper that just pretty pixels. We create interfaces that are wonderful and intuitively clear at the same time.'
                    }, {
                        title: 'USER EXPERIENCE',
                        description: 'A solid foundation is required for each interface. A well-done UX allows us to detect the project development problems, before they become real.'
                    }, {
                        title: 'GROWTH',
                        description: 'We love when our concepts turn into reality. Whether they are on the Internet, desktop, mobile phone or on all of them, using different languages and platforms.'
                    }]
                },
                ru: {
                    pageTitle: 'О нас',
                    pageDescription: '<p>Мы помогаем ведущим казахстанским компаниям создавать уникальные приложения и продукты. За последние 3 года мы дали возможность многим небольшим веб-стартапам и компаниям разработать красивые и простые в использовании продукты.</p>' + '<p>Мы являемся одним из немногих агентств в Казахстане, которое берется за любую идею с энтузиазмом. Клиенты обращаются к нам на разных этапах жизни продукта. Мы готовы вести разработку продукта от эскиза салфетки до реального полномасштабного проекта. На данный момент мы располагаем талантливой командой, состоящей из дизайнеров мирового класса, разработчиков веб-сайтов и мобильных устройств, маркетологов, менеджеров проектов и специалистов по обеспечению качества, чтобы гарантировать решение любой задачи.</p>',
                    sectionAbout: {
                        text1: 'Группа сфокусированная на инновационных решениях, трансформации и развитии бизнеса',
                        text2: 'Наша главная цель',
                        text3: 'Цель лаборатории SmartLab - улучшать качество жизни с помощью высокотехнологичных продуктов и услуг. Мы намерены стать мировым лидером качества в этой отрасли помогая, как и компаниям так и их клиентам.'
                    },
                    services: [{
                        title: 'Дизайн интерфейса',
                        description: 'Большой пользовательский интерфейс идет глубже, чем красивые пиксели. Мы создаем интерфейсы, которые восхитительны и интуитивно понятны'
                    }, {
                        title: 'Пользовательский опыт',
                        description: 'Для каждого интерфейса необходим прочный фундамент. Хорошо выполненный UX предоставляет и помогает нам диагностировать проблемы проектирования, прежде чем они станут глобальным проблемами.'
                    }, {
                        title: 'Развитие',
                        description: 'Мы любим воплощать наши концепции в жизнь, будь то в Интернете, на рабочем столе, в мобильном телефон или на всех трех, используя различные языки и платформы. '
                    }]
                }
            }
        };
    },

    computed: {
        getServices: function getServices() {
            return this.translations[this.state.lang].services.chunk(2);
        }
    },
    mounted: function mounted() {
        // console.log(this.translations[this.state.lang].services.chunk(2));
    }
});

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "page page-about"
  }, [_c('div', {
    staticClass: "section section-intro clearfix"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('h1', {
    staticClass: "page__title animate fade-down",
    attrs: {
      "data-duration": "500",
      "data-delay": "700"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.translations[_vm.state.lang].pageTitle) + "\n                ")]), _vm._v(" "), _c('div', {
    staticClass: "page__description animate fade-up",
    attrs: {
      "data-duration": "500",
      "data-delay": "800"
    },
    domProps: {
      "innerHTML": _vm._s(_vm.translations[_vm.state.lang].pageDescription)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "section section-about clearfix"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', {
    staticClass: "text-block1 animate fade-up",
    attrs: {
      "data-duration": "500"
    }
  }, [_c('p', {
    staticClass: "text-block1__description scroll-motion-animate",
    attrs: {
      "data-sensivity": "5"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.translations[_vm.state.lang].sectionAbout.text1) + "\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "clearfix"
  }), _vm._v(" "), _c('div', {
    staticClass: "text-block2 scroll-motion-animate",
    attrs: {
      "data-sensivity": "6"
    }
  }, [_c('p', {
    staticClass: "text-block2__title animate fade-up",
    attrs: {
      "data-duration": "500"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.translations[_vm.state.lang].sectionAbout.text2) + "\n                    ")]), _vm._v(" "), _c('p', {
    staticClass: "text-block2__description animate fade-up",
    attrs: {
      "data-delay": "200",
      "data-duration": "500"
    }
  }, [_vm._v("\n                        " + _vm._s(_vm.translations[_vm.state.lang].sectionAbout.text3) + "\n                    ")])])]), _vm._v(" "), _c('div', {
    staticClass: "right animate zoom",
    attrs: {
      "data-duration": "700"
    }
  }, [_c('div', {
    staticClass: "text-block3 scroll-motion-animate",
    attrs: {
      "data-sensivity": "4"
    }
  }, [_vm._m(2), _vm._v(" "), _c('p', {
    staticClass: "more animate fade-left",
    attrs: {
      "data-delay": "500",
      "data-duration": "1000"
    }
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'projects'
      })
    }
  }, [_vm._v("\n                            " + _vm._s(_vm.state.translations[_vm.state.lang].viewAll) + "\n                        ")])], 1)])])]), _vm._v(" "), _c('div', {
    staticClass: "section section-partners"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('h2', {
    staticClass: "section__title char-animate fade-left",
    attrs: {
      "data-speed": "20"
    }
  }, [_vm._v(_vm._s(_vm.state.translations[_vm.state.lang].ourPartners))]), _vm._v(" "), _vm._m(3)])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "section section-additions"
  }, [_vm._m(5), _vm._v(" "), _c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "row"
  }, [_c('div', {
    staticClass: "col-sm-1 hidden-sm hidden-xs"
  }), _vm._v(" "), _vm._l((_vm.getServices), function(item, index) {
    return _c('div', {
      staticClass: "col-sm-6 col-md-5"
    }, _vm._l((item), function(block) {
      return _c('div', {
        staticClass: "block animate fade-up",
        attrs: {
          "data-duration": "1000"
        }
      }, [_c('p', {
        staticClass: "block__title"
      }, [_vm._v("\n                                " + _vm._s(block.title) + "\n                            ")]), _vm._v(" "), _c('p', {
        staticClass: "block__description"
      }, [_vm._v("\n                                " + _vm._s(block.description) + "\n                            ")])])
    }))
  }), _vm._v(" "), _c('div', {
    staticClass: "col-sm-6 col-md-5"
  }, [_c('div', {
    staticClass: "block"
  }, [_c('p', {
    staticClass: "more"
  }, [_c('router-link', {
    attrs: {
      "to": _vm.Laravel.getLocalizedRoute({
        name: 'projects'
      })
    }
  }, [_vm._v("\n                                    " + _vm._s(_vm.state.translations[_vm.state.lang].viewProjects) + "\n                                ")])], 1)])])], 2)])])]), _vm._v(" "), _c('app-footer')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "center-text"
  }, [_c('span', {
    staticClass: "animate zoom",
    attrs: {
      "data-duration": "800",
      "data-delay": "0"
    }
  }, [_vm._v("L")]), _vm._v(" "), _c('span', {
    staticClass: "animate zoom",
    attrs: {
      "data-duration": "800",
      "data-delay": "150"
    }
  }, [_vm._v("A")]), _vm._v(" "), _c('span', {
    staticClass: "animate zoom",
    attrs: {
      "data-duration": "800",
      "data-delay": "300"
    }
  }, [_vm._v("B")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "left animate fade-right hidden-xs",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/about-bg.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('ul', [_c('li', {
    staticClass: "animate fade-left",
    attrs: {
      "data-delay": "0",
      "data-duration": "1000"
    }
  }, [_vm._v("Monocle")]), _vm._v(" "), _c('li', {
    staticClass: "animate fade-left",
    attrs: {
      "data-delay": "100",
      "data-duration": "1000"
    }
  }, [_vm._v("Smartcall")]), _vm._v(" "), _c('li', {
    staticClass: "animate fade-left",
    attrs: {
      "data-delay": "200",
      "data-duration": "1000"
    }
  }, [_vm._v("Intel system")]), _vm._v(" "), _c('li', {
    staticClass: "animate fade-left",
    attrs: {
      "data-delay": "300",
      "data-duration": "1000"
    }
  }, [_vm._v("Smart recognition")]), _vm._v(" "), _c('li', {
    staticClass: "animate fade-left",
    attrs: {
      "data-delay": "400",
      "data-duration": "1000"
    }
  }, [_vm._v("Qariz")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section__blocks"
  }, [_c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "0"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo1.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "100"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo2.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "200"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo3.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "300"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo4.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "100"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo5.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "200"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo6.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "300"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo7.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "400"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo8.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "200"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo9.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "300"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo10.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "400"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo11.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "500"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo12.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "300"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo13.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "400"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo14.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "500"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo15.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "600"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo16.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "400"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo17.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "500"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo18.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "600"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo19.png",
      "alt": ""
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "partner animate zoom",
    attrs: {
      "data-duration": "500",
      "data-delay": "700"
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('img', {
    attrs: {
      "src": "/images/partner-logo20.png",
      "alt": ""
    }
  })])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "section section-about-bg animate fade",
    attrs: {
      "data-duration": "1000"
    }
  }, [_c('img', {
    staticClass: "scroll-motion-animate",
    attrs: {
      "data-sensivity": "3",
      "src": "/images/about-bg3.png",
      "alt": ""
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "image-inside hidden-sm hidden-xs"
  }, [_c('img', {
    staticClass: "scroll-motion-animate",
    attrs: {
      "data-sensivity": "3",
      "src": "/images/about-bg4.png",
      "alt": ""
    }
  })])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-11c60f2a", module.exports)
  }
}

/***/ })

});