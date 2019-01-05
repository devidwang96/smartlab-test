webpackJsonp([8],{

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(16)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(173),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/rinzler/Desktop/sites/smartlab.test/resources/assets/js/main/components/Pages/Index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-317de9ef", Component.options)
  } else {
    hotAPI.reload("data-v-317de9ef", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 160:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            animateNodes: null,
            charAnimateNodes: null,
            mouseMoveAnimateNodes: null,
            scrollMotionAnimateNodes: null,
            pageChanging: false
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            if ($(window).width() > 1199) {
                $('body').off('mousemove');
                $('body').on('mousemove', function (e) {
                    _this.mouseMoveAnimate(e.pageX, e.pageY);
                });

                $(window).off('scroll');
                $(window).on('scroll', function () {
                    _this.animate();
                    _this.charAnimate();
                    _this.scrollMotionAnimate($(window).scrollTop());
                });
            } else {
                $(window).off('scroll');
                $(window).on('scroll', function () {
                    _this.animate();
                    _this.charAnimate();
                });
            }

            _this.animateInit();
            _this.animate();
            _this.charAnimate();
        });
    },

    methods: {
        beforePageEnter: function beforePageEnter() {
            this.state.menu.state = false;
            this.animateNodes.removeClass('in');
        },
        afterPageEnter: function afterPageEnter() {
            window.scrollTo(0, 0);
            this.animateInit();
            this.animate();
        },
        animateInit: function animateInit() {
            this.animateNodes = $('.animate');
            this.charAnimateNodes = $('.char-animate');
            this.mouseMoveAnimateNodes = $('.mouse-move-animate');
            this.scrollMotionAnimateNodes = $('.scroll-motion-animate');

            this.mouseMoveAnimateNodes.each(function () {
                $(this).attr('data-offset-x', -$(this).offset().left + $(this).width() / 2);
                $(this).attr('data-offset-y', $(this).offset().top + $(this).height() / 2);
            });
            this.scrollMotionAnimateNodes.each(function () {
                $(this).attr('data-offset-y', $(this).offset().top);
            });
        },
        animate: function animate() {
            this.animateNodes.each(function () {
                var _this2 = this;

                if ($(window).scrollTop() + $(window).height() >= $(this).offset().top && $(window).scrollTop() - 350 <= $(this).offset().top + $(this).height()) {
                    if (!$(this).hasClass('in')) {
                        setTimeout(function () {
                            if ($(_this2).data('duration') !== undefined) {
                                $(_this2).css('transition', 'all ' + $(_this2).data('duration') / 1000 + 's');
                            }
                            $(_this2).addClass('in');
                        }, $(this).data('delay') !== undefined ? $(this).data('delay') : 0);
                    }
                } else {
                    $(this).removeClass('in');
                }
            });
        },
        charAnimate: function charAnimate() {
            this.charAnimateNodes.each(function () {
                var _this3 = this;

                if ($(window).scrollTop() + $(window).height() >= $(this).offset().top && $(window).scrollTop() - 350 <= $(this).offset().top + $(this).height()) {
                    if (!$(this).hasClass('anim-active')) {
                        var animText = $(this).text();
                        var speed = $(this).data('speed');

                        $(this).text('');
                        Array.prototype.forEach.call(animText, function (el) {
                            $(_this3).append('<span>' + el + '</span>');
                        });
                        setTimeout(function () {
                            if ($(_this3).data('duration') !== undefined) {
                                $(_this3).find('span').css('transition', 'all ' + $(_this3).data('duration') / 1000 + 's');
                            }
                            $(_this3).find('span').each(function (index) {
                                var _this4 = this;

                                setTimeout(function () {
                                    $(_this4).addClass('in');
                                }, (speed !== undefined ? speed : 50) * index);
                            });
                            $(_this3).addClass('anim-active');
                        }, $(this).data('delay') !== undefined ? $(this).data('delay') : 0);
                    }
                } else {
                    $(this).removeClass('anim-active');
                }
            });
        },
        scrollMotionAnimate: function scrollMotionAnimate(scrollTop) {
            this.scrollMotionAnimateNodes.each(function () {
                $(this).css('transform', 'translateY(' + (scrollTop - $(this).data('offset-y')) / $(this).data('sensivity') + 'px)');
            });
        },
        mouseMoveAnimate: function mouseMoveAnimate(screenX, screenY) {
            this.mouseMoveAnimateNodes.each(function () {
                $(this).css('transform', 'translateX(' + (screenX - $(this).data('offset-x')) / $(this).data('sensivity') + 'px) translateY(' + (screenY - $(this).data('offset-y')) / $(this).data('sensivity') + 'px)');
            });
        }
    }
    // computed: {
    //     backend_data(){
    //         return this.state.backend_data[this.$route.name]
    //     }
    // },
    // Server XHR
    // backend_created(router, store, Component){
    //     return store.state.ServerXHR
    //         .open('get', Laravel.getLocalizedUrl('https://jsonplaceholder.typicode.com/posts/1'))
    //         .then(
    //             response => {
    //                 store.state.backend_data[router.currentRoute.name] = JSON.parse(response.responseText);
    //             }
    //         );
    // },
    // created(){
    //     // Client XHR
    //     if(process.BROWSER) {
    //         this.$http.get(
    //             this.Laravel.getLocalizedUrl('https://jsonplaceholder.typicode.com/posts/1')
    //         )
    //             .then(
    //                 response => {
    //                     this.change_backend_data({route_name: this.$route.name, backend_data: response.body});
    //                 }
    //             );
    //     }
    // }
});

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "main-content"
  }, [_c('transition', {
    attrs: {
      "name": "page"
    },
    on: {
      "after-enter": _vm.afterPageEnter,
      "before-enter": _vm.beforePageEnter
    }
  }, [_c('router-view')], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-317de9ef", module.exports)
  }
}

/***/ })

});