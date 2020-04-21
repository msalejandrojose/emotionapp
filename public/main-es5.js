function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-SG": "./node_modules/moment/locale/en-SG.js",
      "./en-SG.js": "./node_modules/moment/locale/en-SG.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<style>\n  :host {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 8px 0;\n  }\n\n  p {\n    margin: 0;\n  }\n\n  .spacer {\n    flex: 1;\n  }\n\n  .toolbar {\n    height: 60px;\n    margin: 0px;\n    display: flex;\n    align-items: center;\n    background-color: #54577C;\n    color: white;\n    font-weight: 600;\n  }\n\n  .toolbar img {\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo {\n    height: 40px;\n    margin: 0 16px;\n  }\n\n  .toolbar #twitter-logo:hover {\n    opacity: 0.8;\n  }\n\n  .content {\n    display: flex;\n    margin: 32px auto;\n    padding: 0 16px;\n    max-width: 960px;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  svg.material-icons {\n    height: 24px;\n    width: auto;\n  }\n\n  svg.material-icons:not(:last-child) {\n    margin-right: 8px;\n  }\n\n  .card svg.material-icons path {\n    fill: #888;\n  }\n\n  .card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    margin-top: 16px;\n  }\n\n  .card {\n    border-radius: 4px;\n    border: 1px solid #eee;\n    background-color: #fafafa;\n    height: 40px;\n    width: 200px;\n    margin: 0 8px 16px;\n    padding: 16px;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.2s ease-in-out;\n    line-height: 24px;\n  }\n\n  .card-container .card:not(:last-child) {\n    margin-right: 0;\n  }\n\n  .card.card-small {\n    height: 16px;\n    width: 168px;\n  }\n\n  .card-container .card:not(.highlight-card) {\n    cursor: pointer;\n  }\n\n  .card-container .card:not(.highlight-card):hover {\n    transform: translateY(-3px);\n    box-shadow: 0 4px 17px rgba(black, 0.35);\n  }\n\n  .card-container .card:not(.highlight-card):hover .material-icons path {\n    fill: rgb(105, 103, 103);\n  }\n\n  .card.highlight-card {\n    background-color: #1976d2;\n    color: white;\n    font-weight: 600;\n    border: none;\n    width: auto;\n    min-width: 30%;\n    position: relative;\n  }\n\n  .card.card.highlight-card span {\n    margin-left: 60px;\n  }\n\n  svg#rocket {\n    width: 80px;\n    position: absolute;\n    left: -10px;\n    top: -24px;\n  }\n\n  svg#rocket-smoke {\n    height: 100vh;\n    position: absolute;\n    top: 10px;\n    right: 180px;\n    z-index: -10;\n  }\n\n  a,\n  a:visited,\n  a:hover {\n    color: #1976d2;\n    text-decoration: none;\n  }\n\n  a:hover {\n    color: #125699;\n  }\n\n  .terminal {\n    position: relative;\n    width: 80%;\n    max-width: 600px;\n    border-radius: 6px;\n    padding-top: 45px;\n    margin-top: 8px;\n    overflow: hidden;\n    background-color: rgb(15, 15, 16);\n  }\n\n  .terminal::before {\n    content: \"\\2022 \\2022 \\2022\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 4px;\n    background: rgb(58, 58, 58);\n    color: #c2c3c4;\n    width: 100%;\n    font-size: 2rem;\n    line-height: 0;\n    padding: 14px 0;\n    text-indent: 4px;\n  }\n\n  .terminal pre {\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\n    color: white;\n    padding: 0 1rem 1rem;\n    margin: 0;\n  }\n\n  .circle-link {\n    height: 40px;\n    width: 40px;\n    border-radius: 40px;\n    margin: 8px;\n    background-color: white;\n    border: 1px solid #eeeeee;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n    transition: 1s ease-out;\n  }\n\n  .circle-link:hover {\n    transform: translateY(-0.25rem);\n    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);\n  }\n\n  footer {\n    margin-top: 8px;\n    display: flex;\n    align-items: center;\n    line-height: 20px;\n  }\n\n  footer a {\n    display: flex;\n    align-items: center;\n  }\n\n  .github-star-badge {\n    color: #24292e;\n    display: flex;\n    align-items: center;\n    font-size: 12px;\n    padding: 3px 10px;\n    border: 1px solid rgba(27,31,35,.2);\n    border-radius: 3px;\n    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);\n    margin-left: 4px;\n    font-weight: 600;\n    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;\n  }\n\n  .github-star-badge:hover {\n    background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);\n    border-color: rgba(27,31,35,.35);\n    background-position: -.5em;\n  }\n\n  .github-star-badge .material-icons {\n    height: 16px;\n    width: 16px;\n    margin-right: 4px;\n  }\n\n  svg#clouds {\n    position: fixed;\n    bottom: -160px;\n    left: -230px;\n    z-index: -10;\n    width: 1920px;\n  }\n\n\n  /* Responsive Styles */\n  @media screen and (max-width: 767px) {\n\n    .card-container > *:not(.circle-link) ,\n    .terminal {\n      width: 100%;\n    }\n\n    .card:not(.highlight-card) {\n      height: 16px;\n      margin: 8px 0;\n    }\n\n    .card.highlight-card span {\n      margin-left: 72px;\n    }\n\n    svg#rocket-smoke {\n      right: 120px;\n      transform: rotate(-5deg);\n    }\n  }\n\n  @media screen and (max-width: 575px) {\n    svg#rocket-smoke {\n      display: none;\n      visibility: hidden;\n    }\n  }\n</style>\n\n<!-- Toolbar -->\n<div class=\"toolbar .container-fluid row justify-content-md-center\" role=\"banner\">\n  <div class=\"col-md-8 col-sm-6 col-6\">\n    <h2 id=\"titulo\">EmotionAppAj</h2>\n  </div>\n\n  <div *ngIf=\"!dentro\" class=\"col-md-2 col-sm-3 col-3\">\n    <button type=\"button\" (click)=\"entrarProfesor()\" class=\"btn btn-raised btn-primary\">Profesor</button>\n  </div>\n  <div *ngIf=\"!dentro\" class=\"col-md-2 col-sm-3 col-3\">\n    <button type=\"button\" (click)=\"entrarEstudiante()\" class=\"btn btn-raised btn-success\">Estudiante</button>\n  </div>\n  <div *ngIf=\"dentro\" class=\"col-md-2 col-sm-3 col-3\">\n    {{personaIniciada.nombre}} {{personaIniciada.apellidos}}\n  </div>\n  <div *ngIf=\"dentro\" class=\"col-md-2 col-sm-3 col-3\">\n    <button type=\"button\" (click)=\"salir()\" class=\"btn btn-raised btn-danger\">Salir</button>\n  </div>\n  \n</div>\n<!--Seccion del profesor-->\n<app-profesor *ngIf=\"profesor\"></app-profesor>\n<!--Seccion del estudiante-->\n<app-estudiante *ngIf=\"estudiante\" (estudianteIniciado)=\"iniciarSesion($event)\"></app-estudiante>\n\n\n<!--Rutas-->\n<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/estudiante/estudiante.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/estudiante/estudiante.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEstudianteEstudianteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<div class=\"row\">\n    <div class=\"col-md-2\">\n        <!--<app-sidenav-profesor></app-sidenav-profesor>\n        <div class=\"sidenav list-group\">\n            <a href=\"#\">Emociones</a>\n        </div>\n    </div>\n</div>-->\n<br>\n<div *ngIf=\"noHayEstudiante\" class=\"row justify-content-md-center\">\n    <div class=\"card col-md-6\">\n        <div class=\"card-body\">\n            <h4 class=\"card-title\">Iniciar Sesion</h4>\n            <div>\n                <label>Email</label>\n                <input [(ngModel)]=\"estudiante.email\" type=\"email\" class=\"form-control\" id=\"emailIS\" ng-model=\"email\"\n                    placeholder=\"Email\">\n                <br>\n                <label>Contraseña</label>\n                <input [(ngModel)]=\"estudiante.contrasena\" type=\"password\" class=\"form-control\" id=\"contrasenaIS\"\n                    ng-model=\"contrasena\" placeholder=\"Contraseña\">\n                <br>\n                <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-danger\">Cancelar</button>\n                <button type=\"button\" (click)=\"iniciarSesion()\" class=\"btn btn-raised btn-success\">Iniciar\n                    Sesion</button>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"!noHayEstudiante\" class=\"row\">\n    <div class=\"col\">\n        <h3>Sensores</h3>\n        <table class=\"table table-striped\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Estado</th>\n                    <th scope=\"col\"></th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let sensor of listaSensores\">\n                <tr>\n                    <td>{{sensor.nombre}}</td>\n                    <td>{{sensor.estado}}</td>\n                    <td *ngIf=\"sensor.estado=='Desconectado'\"><button type=\"button\" class=\"btn btn-outline-primary\"\n                            (click)=\"conectarSensor(sensor)\">Conectarse</button></td>\n                    <td *ngIf=\"sensor.estado=='Conectado'\"><button type=\"button\" class=\"btn btn-outline-danger\"\n                            (click)=\"desconectarSensor(sensor)\">Desconectarse</button></td>\n                    <td></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n    <div *ngIf=\"conectadoaActividad\" class=\"col\">\n        <button type=\"button\" class=\"btn btn-outline-danger\"\n                            (click)=\"desconectarse()\">Desconectarse</button>\n    </div>\n    \n    <div *ngIf=\"!conectadoaActividad\" class=\"col\">\n        <h3>Actividades listas</h3>\n        <table class=\"table table-striped\">\n            <thead class=\"thead-light\">\n                <tr>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Profesor</th>\n                    <th scope=\"col\">Estado</th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let actividad of listaActividades\">\n                <tr>\n                    <td>{{actividad.nombre}}</td>\n                    <td>{{actividad.profesor}}</td>\n                    <td>{{actividad.estado}}</td>\n                    <td><button type=\"button\" class=\"btn btn-outline-primary\"\n                            (click)=\"conectarse(actividad)\">Conectarse</button></td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>\n<div class=\"row justify-content-md-center\">\n    <!--*ngIf=\"!noHayEstudiante && conectadoaActividad\"-->\n    <div class=\"col-md-8\">\n        <video id=\"video\" width=\"480\" height=\"360\" autoplay muted></video>\n        <!--<video id=\"video\" playsinline autoplay></video>-->\n    </div>\n    <div *ngIf=\"conectadoaActividad\" class=\"col-md-4\" id=\"estadoAlumno\" class=\"circulo\">\n        <p>Estado</p>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-actividad/crear-actividad.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-actividad/crear-actividad.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorCrearActividadCrearActividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Crear Actividad</h5>\n    <mat-horizontal-stepper linear #stepper>\n      <mat-step label=\"Crear Actividad\" [stepControl]=\"datosPrimarios\">\n        <br>\n        <form [formGroup]=\"datosPrimarios\">\n          <div class=\"col-md-6\">\n            <label>Nombre de la Actividad</label>\n            <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"actividadCreate.nombre\" type=\"text\"\n              class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la actividad\">\n            <br>\n            <label>Nombre del Profesor</label>\n            <input formControlName=\"fromControlNombreProfesor\" [(ngModel)]=\"actividadCreate.profesor\" type=\"text\"\n              class=\"form-control\" id=\"nombreProfesor\" placeholder=\"Nombre del Profesor\">\n            <br>\n          </div>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperNext class=\"btn btn-success\">Siguiente Paso</button>\n          </div>\n        </form>\n      </mat-step>\n      <mat-step label=\"Seleccionar Alumnos\">\n        <!--Tabla de alumnos-->\n        <br>\n\n        <div class=\"example-header\">\n          <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n          </mat-form-field>\n        </div>\n\n        <div class=\"example-container\">\n          <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n\n            <ng-container matColumnDef=\"select\">\n              <th mat-header-cell *matHeaderCellDef>\n                <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                  [checked]=\"selection.hasValue() && isAllSelected()\"\n                  [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                </mat-checkbox>\n              </th>\n              <td mat-cell *matCellDef=\"let row\">\n                <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                  [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                </mat-checkbox>\n              </td>\n            </ng-container>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"nombre\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n            </ng-container>\n\n            <!-- Progress Column -->\n            <ng-container matColumnDef=\"apellidos\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"clase\">\n              <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n              <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n          </mat-table>\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n          <p> </p>\n          <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Siguiente Paso</button>\n        </div>\n      </mat-step>\n      <mat-step label=\"Localizacion de los alumnos\">\n        <h4>Localizacion de Alumnos</h4>\n        <div id=\"clase\" class=\"example-boundary\">\n          <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n          <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n            [cdkDragFreeDragPosition]=\"item.estudiante.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n            (cdkDragEnded)=\"dragEnded($event,item)\">\n            {{item.estudiante.nombre}}\n          </div>\n        </div>\n        <br>\n        <div class=\"row justify-content-md-center\">\n          <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n          <p> </p>\n          <button mat-button matStepperNext class=\"btn btn-success\" (click)=guardarActividad()>Guardar</button>\n        </div>\n      </mat-step>\n    </mat-horizontal-stepper>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-clase/crear-clase.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-clase/crear-clase.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorCrearClaseCrearClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Crear Clase</h5>\n      <mat-horizontal-stepper linear #stepper>\n        <mat-step label=\"Crear Clase\" [stepControl]=\"datosPrimarios\">\n          <br>\n          <form [formGroup]=\"datosPrimarios\">\n            <div class=\"col-md-6\">\n              <label>Nombre de la clase</label>\n              <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"claseCreate.nombre\" type=\"text\"\n                class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la actividad\">\n              <br>\n              <label>Nombre del Profesor Habitual</label>\n              <input formControlName=\"fromControlNombreProfesor\" [(ngModel)]=\"claseCreate.profesor\" type=\"text\"\n                class=\"form-control\" id=\"nombreProfesor\" placeholder=\"Nombre del Profesor\">\n              <br>\n            </div>\n            <div class=\"row justify-content-md-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\">Siguiente Paso</button>\n            </div>\n          </form>\n        </mat-step>\n        <mat-step label=\"Seleccionar Alumnos\">\n          <!--Tabla de alumnos-->\n          <br>\n  \n          <div class=\"example-header\">\n            <mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n            </mat-form-field>\n          </div>\n  \n          <div class=\"example-container\">\n  \n            <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n  \n              <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n  \n              <!-- ID Column -->\n              <ng-container matColumnDef=\"nombre\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n              </ng-container>\n  \n              <!-- Progress Column -->\n              <ng-container matColumnDef=\"apellidos\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n              </ng-container>\n  \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"clase\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n              </ng-container>\n  \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n              </mat-row>\n            </mat-table>\n  \n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n            <p> </p>\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Siguiente Paso</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Localizacion de los alumnos\">\n          <h4>Localizacion de Alumnos</h4>\n          <div id=\"clase\" class=\"example-boundary\">\n            <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n            <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n              [cdkDragFreeDragPosition]=\"item.estudiante.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n              (cdkDragEnded)=\"dragEnded($event,item)\">\n              {{item.estudiante.nombre}}\n            </div>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n            <p> </p>\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=guardarActividad()>Guardar</button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-actividad/editar-actividad.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-actividad/editar-actividad.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorEditarActividadEditarActividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Editar Actividad</h5>\n      <mat-horizontal-stepper linear #stepper>\n        <mat-step label=\"Crear Actividad\" [stepControl]=\"datosPrimarios\">\n          <br>\n          <form [formGroup]=\"datosPrimarios\">\n            <div class=\"col-md-6\">\n              <label>Nombre de la Actividad</label>\n              <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"editarActividad.nombre\" type=\"text\"\n                class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la actividad\">\n              <br>\n              <label>Nombre del Profesor</label>\n              <input formControlName=\"fromControlNombreProfesor\" [(ngModel)]=\"editarActividad.profesor\" type=\"text\"\n                class=\"form-control\" id=\"nombreProfesor\" placeholder=\"Nombre del Profesor\">\n              <br>\n  \n            </div>\n            <div class=\"row justify-content-md-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\">Siguiente Paso</button>\n            </div>\n  \n          </form>\n        </mat-step>\n        <mat-step label=\"Seleccionar Alumnos\">\n          <!--Tabla de alumnos-->\n          <br>\n  \n          <div class=\"example-header\">\n            <mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n            </mat-form-field>\n          </div>\n  \n          <div class=\"example-container\">\n  \n            <mat-table [dataSource]=\"dataSource\" matSort>\n  \n              <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n  \n              <!-- ID Column -->\n              <ng-container matColumnDef=\"nombre\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n              </ng-container>\n  \n              <!-- Progress Column -->\n              <ng-container matColumnDef=\"apellidos\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n              </ng-container>\n  \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"clase\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n              </ng-container>\n  \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n              </mat-row>\n            </mat-table>\n  \n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n            <p> </p>\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Actualizar Alumnos</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Localizacion de los alumnos\">\n          <h4>Localizacion de Alumnos</h4>\n          <div id=\"clase\" class=\"example-boundary\">\n            <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n            <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n              [cdkDragFreeDragPosition]=\"item.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n              (cdkDragEnded)=\"dragEnded($event,item)\">\n              {{item.estudiante.nombre}}\n            </div>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n            <p> </p>\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=actualizar()>Actualizar</button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-clase/editar-clase.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-clase/editar-clase.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorEditarClaseEditarClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Editar Actividad</h5>\n      <mat-horizontal-stepper linear #stepper>\n        <mat-step label=\"Crear Actividad\" [stepControl]=\"datosPrimarios\">\n          <br>\n          <form [formGroup]=\"datosPrimarios\">\n            <div class=\"col-md-6\">\n              <label>Nombre de la Actividad</label>\n              <input formControlName=\"fromControlNombreActividad\" [(ngModel)]=\"editarActividad.nombre\" type=\"text\"\n                class=\"form-control\" id=\"nombreActividad\" placeholder=\"Nombre de la actividad\">\n              <br>\n              <label>Nombre del Profesor</label>\n              <input formControlName=\"fromControlNombreProfesor\" [(ngModel)]=\"editarActividad.profesor\" type=\"text\"\n                class=\"form-control\" id=\"nombreProfesor\" placeholder=\"Nombre del Profesor\">\n              <br>\n  \n            </div>\n            <div class=\"row justify-content-md-center\">\n              <button mat-button matStepperNext class=\"btn btn-success\">Siguiente Paso</button>\n            </div>\n  \n          </form>\n        </mat-step>\n        <mat-step label=\"Seleccionar Alumnos\">\n          <!--Tabla de alumnos-->\n          <br>\n  \n          <div class=\"example-header\">\n            <mat-form-field>\n              <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filtrar\">\n            </mat-form-field>\n          </div>\n  \n          <div class=\"example-container\">\n  \n            <mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z1\" matSort>\n  \n              <ng-container matColumnDef=\"select\">\n                <th mat-header-cell *matHeaderCellDef>\n                  <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                    [checked]=\"selection.hasValue() && isAllSelected()\"\n                    [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\n                  </mat-checkbox>\n                </th>\n                <td mat-cell *matCellDef=\"let row\">\n                  <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\"\n                    [checked]=\"selection.isSelected(row)\" [aria-label]=\"checkboxLabel(row)\">\n                  </mat-checkbox>\n                </td>\n              </ng-container>\n  \n              <!-- ID Column -->\n              <ng-container matColumnDef=\"nombre\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n              </ng-container>\n  \n              <!-- Progress Column -->\n              <ng-container matColumnDef=\"apellidos\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n              </ng-container>\n  \n              <!-- Name Column -->\n              <ng-container matColumnDef=\"clase\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n              </ng-container>\n  \n              <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n              <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n              </mat-row>\n            </mat-table>\n  \n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n            <p> </p>\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=\"ponerAlumnos()\">Actualizar Alumnos</button>\n          </div>\n        </mat-step>\n        <mat-step label=\"Localizacion de los alumnos\">\n          <h4>Localizacion de Alumnos</h4>\n          <div id=\"clase\" class=\"example-boundary\">\n            <!--<app-alumno *ngFor=\"let item of alumnosSeleccionados\" [alumno]=\"item\"></app-alumno>-->\n            <div *ngFor=\"let item of alumnosSeleccionados\" class=\"example-box\" ondrop=\"myFunction(item)\"\n              [cdkDragFreeDragPosition]=\"item.posicion\" cdkDragBoundary=\".example-boundary\" cdkDrag\n              (cdkDragEnded)=\"dragEnded($event,item)\">\n              {{item.estudiante.nombre}}\n            </div>\n          </div>\n          <br>\n          <div class=\"row justify-content-md-center\">\n            <button mat-button matStepperPrevious class=\"btn btn-info\">Volver atras</button>\n            <p> </p>\n            <button mat-button matStepperNext class=\"btn btn-success\" (click)=actualizar()>Actualizar</button>\n          </div>\n        </mat-step>\n      </mat-horizontal-stepper>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/mensaje/mensaje.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/mensaje/mensaje.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorMensajeMensajeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span class=\"example-pizza-party\">\n    Pizza party!!! 🍕\n    <button type=\"button\" class=\"btn btn-outline-success\" (click)=\"abrirActividad()\">Abrir Actividad</button>\n  </span>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/profesor.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/profesor.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorProfesorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-md-2\">\n        <!--<app-sidenav-profesor></app-sidenav-profesor>-->\n        <div class=\"sidenav list-group\">\n            <a href=\"#\" class=\"item-menu-sidenav\" (click)=\"abrirActividadActual()\"><i class=\"fa fa-home\"></i> Home</a>\n            <a href=\"#\" class=\"item-menu-sidenav\" (click)=\"abrirAlumnos()\"><i class=\"fa fa-user\"></i> Alumnos</a>\n            <a href=\"#\" class=\"item-menu-sidenav\" (click)=\"abrirClases()\"><i class=\"fa fa-book\"></i>\n                Clases</a>\n            <a href=\"#\" class=\"item-menu-sidenav\" (click)=\"abrirActividades()\"><i class=\"fa fa-university\"></i>\n                Actividades</a>\n        </div>\n    </div>\n    <div *ngIf=\"gestionHome\" class=\"col-md-10\">\n        <br>\n        <div *ngIf=\"!actividadAbierta\">\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n        <div class=\"row justify-content-center\" *ngIf=\"!actividadAbierta\">\n            <div class=\"col-3 text-center\">\n                <button type=\"button\" class=\"btn btn-primary btn-circle\" (click)=\"abrirAlumnos()\"><i\n                        class=\"fa fa-user\"></i> Alumnos</button>\n            </div>\n            <div class=\"col-3 text-center\">\n                <button type=\"button\" class=\"btn btn-success btn-circle\" (click)=\"abrirClases()\"><i\n                        class=\"fa fa-university\"></i> Clases</button>\n            </div>\n            <div class=\"col-3 text-center\">\n                <button type=\"button\" class=\"btn btn-info btn-circle\" (click)=\"abrirActividades()\"><i\n                        class=\"fa fa-book\"></i> Actividades</button>\n            </div>\n        </div>\n        <div class=\"col-12\" >\n            <app-ver-actividad *ngIf=\"actividadAbierta\" [actividad]=\"actividadSelected\" [aluConectados]=\"alumnosConectados\"></app-ver-actividad>\n        </div>\n    </div>\n    <div *ngIf=\"gestionAlumnos\" class=\"col-md-10\">\n        <br>\n        <div class=\"row col-12 justify-content-center\">\n            <div class=\"col-3 text-left\">\n                <button type=\"button\" *ngIf=\"crearEstudiante || editarAlumno\" (click)=\"cerrarCrearEstudiantes()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>\n            </div>\n            <div class=\"col-6 text-center\">\n                <h3>Alumnos</h3>\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"!crearEstudiante && !editarAlumno\" (click)=\"abrirCrearEstudiantes()\"\n                    class=\"btn btn-outline-primary\">Crear\n                    Actividad</button>\n            </div>\n        </div>\n        <br>\n        <div class=\"row col-12 justify-content-center\">\n            <!--<div class=\"card-body card-body-cascade text-center wow fadeIn\">\n                <h4>Hola mundo</h4>\n                <p>asdalksdjlajsdklasjdkljlañksjfñdskladsfjñalksfj</p>\n            </div>-->\n            <div *ngIf=\"crearEstudiante\" class=\"col-12 card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Crear Alumno</h4>\n                    <div>\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <label>Nombre del Alumn@</label>\n                                <input [(ngModel)]=\"alumnoCreate.nombre\" type=\"text\" class=\"form-control\" id=\"nombre\"\n                                    placeholder=\"Nombre\">\n                                <br>\n                            </div>\n                            <div class=\"col-6\">\n                                <label>Apellidos</label>\n                                <input [(ngModel)]=\"alumnoCreate.apellidos\" type=\"text\" class=\"form-control\"\n                                    id=\"apellidos\" ng-model=\"apellidos\" placeholder=\"Apellidos\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <label>Clase</label>\n                                <input [(ngModel)]=\"alumnoCreate.clase\" type=\"text\" class=\"form-control\" id=\"clase\"\n                                    ng-model=\"clase\" placeholder=\"Clase\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <label>Email</label>\n                                <input [(ngModel)]=\"alumnoCreate.email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    ng-model=\"email\" placeholder=\"Enter email\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">El email tiene que ser unico</small>\n                                <br>\n                            </div>\n                            <div class=\"col-6\">\n                                <label>Contraseña</label>\n                                <input [(ngModel)]=\"alumnoCreate.contrasena\" type=\"password\" class=\"form-control\"\n                                    id=\"contrasena\" ng-model=\"contrasena\" placeholder=\"Contraseña\">\n                                <small id=\"contrasenaHelp\" class=\"form-text text-muted\">El usuario podra entrar con esta\n                                    contraseña</small>\n                            </div>\n                        </div>\n                        <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-danger\">Limpiar</button>\n                        <button type=\"button\" (click)=\"anadirAlumno()\" class=\"btn btn-raised btn-success\">Guardar\n                            Alumn@</button>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"editarAlumno\" class=\"col-12 card\">\n                <div class=\"card-body\">\n                    <h4 class=\"card-title\">Editar Alumno</h4>\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <label>Nombre del Alumn@</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.nombre\" type=\"text\" class=\"form-control\"\n                                    id=\"nombre\" placeholder=\"Nombre\">\n                                <br>\n                            </div>\n                            <div class=\"col-6\">\n                                <label>Apellidos</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.apellidos\" type=\"text\" class=\"form-control\"\n                                    id=\"apellidos\" ng-model=\"apellidos\" placeholder=\"Apellidos\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-12\">\n                                <label>Clase</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.clase\" type=\"text\" class=\"form-control\" id=\"clase\"\n                                    ng-model=\"clase\" placeholder=\"Clase\">\n                                <br>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-6\">\n                                <label>Email</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.email\" type=\"email\" class=\"form-control\" id=\"email\"\n                                    ng-model=\"email\" placeholder=\"Enter email\">\n                                <small id=\"emailHelp\" class=\"form-text text-muted\">El email tiene que ser unico</small>\n                                <br>\n                            </div>\n                            <div class=\"col-6\">\n                                <label>Contraseña</label>\n                                <input [(ngModel)]=\"onSelectedAlumno.contrasena\" type=\"password\" class=\"form-control\"\n                                    id=\"contrasena\" ng-model=\"contrasena\" placeholder=\"Contraseña\">\n                                <small id=\"contrasenaHelp\" class=\"form-text text-muted\">El usuario podra entrar con esta\n                                    contraseña</small>\n                            </div>\n                        </div>\n                        <button type=\"button\" (click)=\"limpiar()\" class=\"btn btn-raised btn-danger\">Limpiar</button>\n                        <button type=\"button\" (click)=\"actualizarAlumno()\" class=\"btn btn-raised btn-success\">Actualizar\n                            Alumn@</button>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"!crearEstudiante && !editarAlumno\" class=\"col-12\">\n                <!--<table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Nombre</th>\n                            <th scope=\"col\">Apellidos</th>\n                            <th scope=\"col\">Clase</th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let alumno of listaAlumnos\">\n                        <tr>\n                            <td>{{alumno.nombre}}</td>\n                            <td>{{alumno.apellidos}}</td>\n                            <td>{{alumno.clase}}</td>\n                            <td><i (click)=\"editar(alumno)\" class=\"fa fa-edit\"></i></td>\n                            <td><i (click)=\"borrar(alumno)\" class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>-->\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterE($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceEstudiantes\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"apellidos\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Apellidos </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.apellidos}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"clase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.clase}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"acciones\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>Editar/Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center\">\n                                <i (click)=\"editar(row)\" class=\"fa fa-edit\"></i>\n                                <i (click)=\"borrar(row)\" class=\"fa fa-trash-o\"></i>\n                            </mat-cell>\n                        </ng-container>\n\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsEstudiantes\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsEstudiantes;\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"gestionActividades\" class=\"col-md-10\">\n        <br>\n        <div class=\"row col-12 justify-content-center\">\n            <div class=\"col-3 text-left\">\n                <button type=\"button\" *ngIf=\"(crearActividad) || editarActividad\" (click)=\"cerrarModal()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>\n            </div>\n            <div class=\"col-6 text-center\">\n                <h3>Actividades</h3>\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"(!crearActividad) && !editarActividad\" (click)=\"abrirCrearActividad()\"\n                    class=\"btn btn-outline-primary\">Crear\n                    Actividad Individual</button>\n            </div>\n        </div>\n        <br>\n        <div class=\"col-12\">\n            <app-crear-actividad *ngIf=\"crearActividad\" [estudiantes]=\"listaAlumnos\"\n                (actividadCreada)=\"guardarActividad($event)\"></app-crear-actividad>\n            <app-editar-actividad *ngIf=\"editarActividad\" [editarActividad]=\"ActividadparaEditar\"\n                [estudiantes]=\"listaAlumnos\" (actividadEditada)=\"actualizarActividad($event)\">\n            </app-editar-actividad>\n        </div>\n        <!--<div *ngIf=\"verActividad\">\n            <app-ver-actividad [actividad]=\"actividadSelected\" [aluConectados]=\"alumnosConectados\"\n                (actividadCreada)=\"cerrarActividad($event)\"></app-ver-actividad>\n        </div>-->\n        <div *ngIf=\"(!crearActividad || editarActividad) && (crearActividad || !editarActividad)\"\n            class=\"row col-12 justify-content-md-center\">\n            <div class=\"col-12\">\n                <!--<table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Nombre</th>\n                            <th scope=\"col\">Profesor</th>\n                            <th scope=\"col\">Clase</th>\n                            <th scope=\"col\">Estado</th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let actividad of listaActividades\">\n                        <tr *ngIf=\"actividad.estado=='Creada'\">\n                            <td>{{actividad.nombre}}</td>\n                            <td>{{actividad.profesor}}</td>\n                            <td>{{actividad.clase.nombre}}</td>\n                            <td>{{actividad.estado}}</td>\n                            <td><button type=\"button\" class=\"btn btn-outline-primary\"\n                                    (click)=\"abrirActividad(actividad)\">Acceder</button></td>\n                            <td><i (click)=\"editarA(actividad)\" class=\"fa fa-edit\"></i></td>\n                            <td><i (click)=\"borrarA(actividad)\" class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr *ngIf=\"actividad.estado=='Comenzada'\">\n                            <td>{{actividad.nombre}}</td>\n                            <td>{{actividad.profesor}}</td>\n                            <td>{{actividad.clase.nombre}}</td>\n                            <td>{{actividad.estado}}</td>\n                            <td><button type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"abrirActividad(actividad)\">Ver</button></td>\n                            <td><i (click)=\"editarA(actividad)\" class=\"fa fa-edit\"></i></td>\n                            <td><i (click)=\"borrarA(actividad)\" class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                        <tr *ngIf=\"actividad.estado=='Finalizada'\">\n                            <td>{{actividad.nombre}}</td>\n                            <td>{{actividad.profesor}}</td>\n                            <td>{{actividad.clase.nombre}}</td>\n                            <td>{{actividad.estado}}</td>\n                            <td><button type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"abrirActividad(actividad)\">Resumen</button></td>\n                            <td><i (click)=\"editarA(actividad)\" class=\"fa fa-edit\"></i></td>\n                            <td><i (click)=\"borrarA(actividad)\" class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>-->\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterA($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceActividades\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"profesor\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.profesor}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"clase\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.clase.nombre}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"estado\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Estado </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.estado}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"acciones\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\">\n                                <button *ngIf=\"row.estado=='Creada'\" type=\"button\" class=\"btn btn-outline-primary\"\n                                    (click)=\"abrirActividad(row)\">Acceder</button>\n                                <button *ngIf=\"row.estado=='Comenzada'\" type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"abrirActividad(row)\">Ver</button>\n                                <button *ngIf=\"row.estado=='Finalizada'\" type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"abrirActividad(row)\">Resumen</button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"editarborrar\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>Editar/Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center\">\n                                <i (click)=\"editarA(row)\" class=\"fa fa-edit\"></i>\n                                <i (click)=\"borrarA(row)\" class=\"fa fa-trash-o\"></i>\n                            </mat-cell>\n                        </ng-container>\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsActividades\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsActividades;\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"gestionClases\" class=\"col-md-10\">\n        <br *ngIf=\"!verClase\">\n        <div *ngIf=\"!verClase\" class=\"row col-12 justify-content-center\">\n            <div class=\"col-3 text-left\">\n                <button type=\"button\" *ngIf=\"crearClase || editarClase\" (click)=\"cerrarModal()\"\n                    class=\"btn btn-outline-danger\">Cancelar</button>\n            </div>\n            <div class=\"col-6 text-center\">\n                <h3>Clases</h3>\n            </div>\n            <div class=\"col-3 text-right\">\n                <button type=\"button\" *ngIf=\"!crearClase || !editarClase\" (click)=\"abrirCrearClase()\"\n                    class=\"btn btn-outline-primary\">Crear\n                    Clase</button>\n            </div>\n        </div>\n        <br>\n        <div class=\"col-12\">\n            <app-crear-clase *ngIf=\"crearClase\" [estudiantes]=\"listaAlumnos\"></app-crear-clase>\n            <app-editar-clase *ngIf=\"editarClase\" [estudiantes]=\"listaAlumnos\" [editarActividad]=\"ClaseparaEditar\">\n            </app-editar-clase>\n        </div>\n        <!--<div *ngIf=\"verClase\">\n            <app-ver-clase [actividad]=\"actividadSelected\" [aluConectados]=\"alumnosConectados\"\n                ></app-ver-clase>\n        </div>-->\n        <div *ngIf=\"(!crearClase || editarClase) && (crearClase || !editarClase) && !verClase\"\n            class=\"row col-12 justify-content-md-center\">\n            <div class=\"col-12\">\n                <!--<table class=\"table table-striped\">\n                    <thead>\n                        <tr>\n                            <th scope=\"col\">Nombre</th>\n                            <th scope=\"col\">Profesor</th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                            <th scope=\"col\"></th>\n                        </tr>\n                    </thead>\n                    <tbody *ngFor=\"let clase of listaClases\">\n                        <tr>\n                            <td>{{clase.nombre}}</td>\n                            <td>{{clase.profesor}}</td>\n                            <td><button type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"crearActividadAsociada(clase)\">Crear Actividad</button></td>\n                            <td><button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"abrirClase(clase)\">Ver\n                                    Clase</button></td>\n                            <td><i (click)=\"editarC(clase)\" class=\"fa fa-edit\"></i></td>\n                            <td><i (click)=\"borrarC(clase)\" class=\"fa fa-trash-o\"></i></td>\n                        </tr>\n                    </tbody>\n                </table>-->\n                <div class=\"example-header\">\n                    <mat-form-field>\n                        <input matInput (keyup)=\"applyFilterC($event.target.value)\" placeholder=\"Filtrar\">\n                    </mat-form-field>\n                </div>\n                <div class=\"example-container\">\n                    <mat-table [dataSource]=\"dataSourceClases\" class=\"mat-elevation-z1\" matSort>\n                        <ng-container matColumnDef=\"nombre\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"profesor\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\"> {{row.profesor}} </mat-cell>\n                        </ng-container>\n\n                        <ng-container matColumnDef=\"accion1\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\">\n                                <button type=\"button\" class=\"btn btn-outline-success\"\n                                    (click)=\"crearActividadAsociada(row)\">Crear Actividad</button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"accion2\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\">\n                                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"abrirClase(row)\">Ver\n                                    Clase</button>\n                            </mat-cell>\n                        </ng-container>\n                        <ng-container matColumnDef=\"editarborrar\">\n                            <mat-header-cell *matHeaderCellDef mat-sort-header>Editar/Borrar</mat-header-cell>\n                            <mat-cell *matCellDef=\"let row\" class=\"text-center\">\n                                <i (click)=\"editarC(row)\" class=\"fa fa-edit\"></i>\n                                <i (click)=\"borrarC(row)\" class=\"fa fa-trash-o\"></i>\n                            </mat-cell>\n                        </ng-container>\n                        <mat-header-row *matHeaderRowDef=\"displayedColumnsClases\"></mat-header-row>\n                        <mat-row *matRowDef=\"let row; columns: displayedColumnsClases;\">\n                        </mat-row>\n                    </mat-table>\n                    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"verClase\">\n            <app-ver-clase [clase]=\"claseSelected\"></app-ver-clase>\n        </div>\n\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/sidenav-profesor/sidenav-profesor.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/sidenav-profesor/sidenav-profesor.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorSidenavProfesorSidenavProfesorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"sidenav list-group\">\n    <a  href=\"#\">Actividades</a>\n    <a \n     href=\"#\">Alumno</a>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-actividad/ver-actividad.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-actividad/ver-actividad.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorVerActividadVerActividadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row\">\n    <div class=\"col-12\">\n        <h3 class=\"text-center\">{{actividad.nombre}}</h3>\n    </div>\n</div>\n<div class=\"row justify-content-md-center\">\n    <div class=\"col-12\">\n        <h5 class=\"text-center\" *ngIf=\"actividad.estado=='Creada'\">Actividad sin empezar</h5>\n        <h5 class=\"text-center\" *ngIf=\"actividad.estado=='Comenzada'\">Actividad empezada</h5>\n        <h5 class=\"text-center\" *ngIf=\"actividad.estado=='Finalizada'\">Actividad finalizada</h5>\n    </div>\n</div>\n<div class=\"row justify-content-md-center text-center\">\n    <div class=\"col-3 text-left\">\n        <button *ngIf=\" !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cerrarActividad()\">Cerrar Actividad</button>\n        <button *ngIf=\"botonCreadaCargando || botonFinalizadaCargando || botonReanudarCargando\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cerrarActividad()\" disabled>Cerrar Actividad</button>\n    </div>\n    <div class=\"row col-6 justify-content-center text-center\" *ngIf=\"!actividadAbierta\">\n        <div class=\"col-2 text-center\">\n            <div class=\"row justify-content-center\">\n                <button type=\"button\" class=\"btn btn-success btn-circle2\" disabled>\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </button>\n            </div>\n            <div class=\"row justify-content-center\">\n                Creada\n            </div>\n        </div>\n        <div class=\"col-3\">\n            <hr style=\"margin-top: 50%;\">\n        </div>\n        <div class=\"col-2 text-center\">\n            <div class=\"row justify-content-center\">\n                <button *ngIf=\"actividad.estado=='Comenzada' || actividad.estado=='Finalizada'\" type=\"button\"\n                    class=\"btn btn-success btn-circle2\" disabled>\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </button>\n                <button *ngIf=\"actividad.estado=='Creada'\" type=\"button\" class=\"btn btn-outline-secondary btn-circle2\"\n                    disabled>\n\n                </button>\n            </div>\n            <div class=\"row justify-content-center\">\n                Comenzada\n            </div>\n        </div>\n        <div class=\"col-3\">\n            <hr style=\"margin-top: 50%;\">\n        </div>\n        <div class=\"col-2 text-center\">\n            <div class=\"row justify-content-center\">\n                <button *ngIf=\"actividad.estado=='Finalizada'\" type=\"button\" class=\"btn btn-success btn-circle2\"\n                    disabled>\n                    <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                </button>\n                <button *ngIf=\"actividad.estado=='Creada' || actividad.estado=='Comenzada'\" type=\"button\"\n                    class=\"btn btn-outline-secondary btn-circle2\" disabled>\n\n                </button>\n            </div>\n            <div class=\"row justify-content-center\">\n                Finalizada\n            </div>\n        </div>\n    </div>\n    <div class=\"col-3 text-right\">\n        <button *ngIf=\"actividad.estado=='Creada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\" type=\"button\" class=\"btn btn-outline-success disenable\"\n            (click)=\"comenzar()\">Comenzar</button>\n        <button *ngIf=\"botonCreadaCargando\" class=\"btn btn-outline-success\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Comenzando...\n        </button>\n        <button *ngIf=\"actividad.estado=='Comenzada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\" type=\"button\" class=\"btn btn-outline-dark disenable\"\n            (click)=\"terminar()\">Terminar</button>\n        <button *ngIf=\"botonFinalizadaCargando\" class=\"btn btn-outline-dark\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Terminando...\n        </button>\n        <button *ngIf=\"actividad.estado=='Finalizada' && !botonCreadaCargando && !botonFinalizadaCargando && !botonReanudarCargando\" type=\"button\" class=\"btn btn-outline-success disenable\"\n            (click)=\"comenzar()\">Reanudar Actividad</button>\n        <button *ngIf=\"actividad.estado=='Finalizada' && botonReanudarCargando\" class=\"btn btn-outline-dark\" type=\"button\" disabled>\n            <span class=\"spinner-border spinner-border-sm\" role=\"status\" aria-hidden=\"true\"></span>\n            Reanunando..\n        </button>\n    </div>\n\n</div>\n<br>\n<div class=\"row justify-content-center text-center\">\n    <div *ngIf=\"vistaGeneral\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\" checked> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n    </div>\n    <div *ngIf=\"vistaMapaDeLaClase\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\" checked> Mapa de la clase\n        </label>\n    </div>\n</div>\n<br>\n<div *ngIf=\"vistaGeneral\">\n    <div class=\"row justify-content-center\">\n        <div class=\"col-5\">\n            <div class=\"card-body\">\n                <h5 class=\"text-center card-title\">Usuarios Conectados</h5>\n                <div class=\"card-content\">\n                    <canvas id=\"usersConectados\"></canvas>\n                    <h6 class=\"text-center\">{{porUsuariosConectados}}% Usuarios conectados</h6>\n                    <!--<h6 >{{((usuariosConectados.length()/usuariosTotales)*100)}}%</h6>-->\n                </div>\n            </div>\n        </div>\n        <div class=\"col-7\">\n\n        </div>\n\n\n    </div>\n    <div class=\"row\">\n        <div class=\"card-body\">\n            <div class=\"row\">\n                <h5 class=\"col-4 text-center card-title\">Grafica</h5>\n                <div class=\"col-4\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">\n                            Estado\n                        </button>\n                        <div class=\"dropdown-menu\">\n                            <div class=\"dropdown-item\" *ngFor=\"let estado of estados\">\n                                <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"estado.checked\">\n                                <a>{{estado.nombre}}</a>\n                            </div>\n                            <!--<a class=\"dropdown-item\" *ngFor=\"let estado of estados\"\n                                (click)=\"seleccionarEstado(estado)\">{{estado.nombre}}\n                            </a>-->\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-4\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">\n                            Alumnos\n                        </button>\n                        <div class=\"dropdown-menu\">\n                            <a *ngIf=\"alumnoSeleccionadoAlumno\" class=\"dropdown-item\">Media de la clase</a>\n                            <div class=\"dropdown-item\" *ngFor=\"let alumno of alumnosSelect\">\n                                <input type=\"checkbox\" class=\"form-check-input\" [(ngModel)]=\"alumno.checked\">\n                                <a>{{alumno.nombre}}</a>\n                            </div>\n                            <!--<a class=\"dropdown-item\" *ngFor=\"let alumno of alumnos\"\n                                (click)=\"seleccionarAlumno(alumno)\">{{alumno.estudiante.nombre}}</a>-->\n                        </div>\n                    </div>\n                </div>\n                <div>\n                    <button type=\"button\" class=\"btn btn-outline-success\"\n                        (click)=\"actualizarGraficaLineal()\">Actualizar</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"card-content\">\n                <canvas id=\"graficaLineal\"></canvas>\n            </div>\n        </div>\n    </div>\n</div>\n<div *ngIf=\"vistaMapaDeLaClase\" class=\"row justify-content-md-center\">\n    <div class=\"card col-md-11\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Distribucion de la clase</h5>\n            <div id=\"clase\" class=\"example-boundary\">\n                <div id=\"{{item.id_item}}\" *ngFor=\"let item of actividad.alumnos\" class=\"example-box\"\n                    ondrop=\"myFunction(item)\" [cdkDragFreeDragPosition]=\"item.posicion\"\n                    cdkDragBoundary=\".example-boundary\" cdkDrag (cdkDragEnded)=\"dragEnded($event,item)\">\n                    {{item.estudiante.nombre}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-clase/ver-clase.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-clase/ver-clase.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfesorVerClaseVerClaseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row col-12 justify-content-center\">\n    <div class=\"col-3 text-left\">\n        <button *ngIf=\"!editarActividad\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cerrarClase()\">Cerrar Clase</button>\n        <button *ngIf=\"editarActividad\" type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancelar()\">Cancelar</button>\n    </div>\n    <div class=\"col-6 text-center\">\n        <h3 class=\"text-center\">Clase: {{clase.nombre}}</h3>\n    </div>\n    <div class=\"col-3 text-right\">\n        <button type=\"button\" class=\"btn btn btn-outline-success\" (click)=\"crearActividad()\">Crear Actividad</button>\n    </div>\n</div>\n<br>\n<div class=\"col-12\">\n    <app-editar-actividad *ngIf=\"editarActividad\" [estudiantes]=\"listaAlumnos\"\n        [editarActividad]=\"actividad\" (actividadEditada)=\"actualizarActividad($event)\">\n    </app-editar-actividad>\n</div>\n<div *ngIf=\"!editarActividad\" class=\"row col-12 justify-content-md-center\">\n    <div class=\"col-md-12\">\n        <!--<table class=\"table table-striped\">\n            <thead>\n                <tr>\n                    <th scope=\"col\">Nombre</th>\n                    <th scope=\"col\">Profesor</th>\n                    <th scope=\"col\">Estado</th>\n                    <th scope=\"col\"></th>\n                    <th scope=\"col\"></th>\n                    <th scope=\"col\"></th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let actividad of actividades\">\n                <tr *ngIf=\"actividad.estado=='Creada'\">\n                    <td>{{actividad.nombre}}</td>\n                    <td>{{actividad.profesor}}</td>\n                    <td>{{actividad.estado}}</td>\n                    <td><button type=\"button\" class=\"btn btn-outline-primary\"\n                            (click)=\"abrirActividad(actividad)\">Acceder</button></td>\n                    <td><i (click)=\"editarA(actividad)\" class=\"fa fa-edit\"></i></td>\n                    <td><i (click)=\"borrarA(actividad)\" class=\"fa fa-trash-o\"></i></td>\n                </tr>\n                <tr *ngIf=\"actividad.estado=='Comenzada'\">\n                    <td>{{actividad.nombre}}</td>\n                    <td>{{actividad.profesor}}</td>\n                    <td>{{actividad.estado}}</td>\n                    <td><button type=\"button\" class=\"btn btn-outline-success\"\n                            (click)=\"abrirActividad(actividad)\">Ver</button></td>\n                    <td><i (click)=\"editarA(actividad)\" class=\"fa fa-edit\"></i></td>\n                    <td><i (click)=\"borrarA(actividad)\" class=\"fa fa-trash-o\"></i></td>\n                </tr>\n                <tr *ngIf=\"actividad.estado=='Finalizada'\">\n                    <td>{{actividad.nombre}}</td>\n                    <td>{{actividad.profesor}}</td>\n                    <td>{{actividad.estado}}</td>\n                    <td><button type=\"button\" class=\"btn btn-outline-success\"\n                            (click)=\"abrirActividad(actividad)\">Resumen</button></td>\n                    <td><i (click)=\"editarA(actividad)\" class=\"fa fa-edit\"></i></td>\n                    <td><i (click)=\"borrarA(actividad)\" class=\"fa fa-trash-o\"></i></td>\n                </tr>\n            </tbody>\n        </table>-->\n        <div class=\"example-header\">\n            <mat-form-field>\n                <input matInput (keyup)=\"applyFilterA($event.target.value)\" placeholder=\"Filtrar\">\n            </mat-form-field>\n        </div>\n        <div class=\"example-container\">\n            <mat-table [dataSource]=\"dataSourceActividades\" class=\"mat-elevation-z1\" matSort>\n                <ng-container matColumnDef=\"nombre\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Nombre </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.nombre}} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"profesor\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Profesor </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.profesor}} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"estado\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header> Clase </mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\"> {{row.estado}} </mat-cell>\n                </ng-container>\n\n                <ng-container matColumnDef=\"acciones\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\">\n                        <button *ngIf=\"row.estado=='Creada'\" type=\"button\" class=\"btn btn-outline-primary\"\n                            (click)=\"abrirActividad(row)\">Acceder</button>\n                        <button *ngIf=\"row.estado=='Comenzada'\" type=\"button\" class=\"btn btn-outline-success\"\n                            (click)=\"abrirActividad(row)\">Ver</button>\n                        <button *ngIf=\"row.estado=='Finalizada'\" type=\"button\" class=\"btn btn-outline-success\"\n                            (click)=\"abrirActividad(row)\">Resumen</button>\n                    </mat-cell>\n                </ng-container>\n                <ng-container matColumnDef=\"editarborrar\">\n                    <mat-header-cell *matHeaderCellDef mat-sort-header></mat-header-cell>\n                    <mat-cell *matCellDef=\"let row\">\n                        <i (click)=\"editarA(row)\" class=\"fa fa-edit\"></i>\n                        <i (click)=\"borrarA(row)\" class=\"fa fa-trash-o\"></i>\n                    </mat-cell>\n                </ng-container>\n                <mat-header-row *matHeaderRowDef=\"displayedColumnsActividades\"></mat-header-row>\n                <mat-row *matRowDef=\"let row; columns: displayedColumnsActividades;\">\n                </mat-row>\n            </mat-table>\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\n        </div>\n    </div>\n</div>\n<!--<div class=\"row justify-content-md-center\">\n    <div *ngIf=\"vistaGeneral\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\" checked> General\n        </label>\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\"> Mapa de la clase\n        </label>\n    </div>\n    <div *ngIf=\"vistaMapaDeLaClase\" class=\"btn-group btn-group-toggle\">\n        <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"options\" id=\"general\" (click)=\"cambiarAGeneral()\"> General\n        </label>\n        <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"options\" id=\"mapa_de_clase\" (click)=\"cambiarAMapa()\" checked> Mapa de la clase\n        </label>\n    </div>\n</div>-->\n<br>\n<!--<div class=\"row justify-content-center\">\n    <div class=\"col-5\">\n        <div class=\"card-body\">\n            <h5 class=\"text-center card-title\">Actividades Completadas</h5>\n            <div class=\"card-content\">\n                <canvas id=\"usersConectados\"></canvas>\n                <h6 class=\"text-center\">{{porUsuariosConectados}}% Actividades Completadas</h6>\n            </div>\n        </div>\n    </div>\n</div>-->\n<!--<div class=\"row\">\n    <div class=\"card-body\">\n        <div class=\"row\">\n            <h5 class=\"col-4 text-center card-title\">Grafica</h5>\n            <div class=\"col-4\">\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                        {{estadoSeleccionado}}\n                    </button>\n                    <div class=\"dropdown-menu\">\n                        <a class=\"dropdown-item\" *ngFor=\"let estado of estados\"\n                            (click)=\"seleccionarEstado(estado)\">{{estado}}</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-4\">\n                <div class=\"btn-group\">\n                    <button type=\"button\" class=\"btn btn-info dropdown-toggle\" data-toggle=\"dropdown\"\n                        aria-haspopup=\"true\" aria-expanded=\"false\">\n                        {{alumnoSeleccionado}}\n                    </button>\n                    <div class=\"dropdown-menu\">\n                        <a *ngIf=\"alumnoSeleccionadoAlumno\" class=\"dropdown-item\"\n                            (click)=\"seleccionarMediaAlumnos()\">Media de la clase</a>\n                        <a class=\"dropdown-item\" *ngFor=\"let alumno of alumnos\"\n                            (click)=\"seleccionarAlumno(alumno)\">{{alumno.estudiante.nombre}}</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>-->\n<!--<div *ngIf=\"vistaMapaDeLaClase\" class=\"row justify-content-md-center\">\n    <div class=\"card col-md-11\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Distribucion de la clase</h5>\n            <div id=\"clase\" class=\"example-boundary\">\n                <div id=\"{{item.id_item}}\" *ngFor=\"let item of actividad.alumnos\" class=\"example-box\"\n                    ondrop=\"myFunction(item)\" [cdkDragFreeDragPosition]=\"item.posicion\"\n                    cdkDragBoundary=\".example-boundary\" cdkDrag (cdkDragEnded)=\"dragEnded($event,item)\">\n                    {{item.estudiante.nombre}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>-->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/Modelos/modelos.ts":
  /*!************************************!*\
    !*** ./src/app/Modelos/modelos.ts ***!
    \************************************/

  /*! exports provided: Estudiante, Alumnos, AlumnosClase */

  /***/
  function srcAppModelosModelosTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Estudiante", function () {
      return Estudiante;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alumnos", function () {
      return Alumnos;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlumnosClase", function () {
      return AlumnosClase;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Estudiante = function Estudiante() {
      _classCallCheck(this, Estudiante);

      this._id = '';
      this.nombre = '';
      this.apellidos = '';
      this.clase = '';
      this.email = '';
      this.contrasena = '';
    };

    var Alumnos =
    /*#__PURE__*/
    function () {
      function Alumnos(est, posicion, act, datos) {
        _classCallCheck(this, Alumnos);

        this.id_item = '';
        this.posicion = {};
        this.datos = {
          alegria: [],
          asco: [],
          miedo: [],
          sorpresa: [],
          tristeza: [],
          ira: [],
          pulsaciones: [],
          tiempo: [],
          distraido: [],
          concentrado: [],
          frustrado: [],
          motivado: []
        };
        this.estudiante = est;
        this.id_item = est._id + act._id;
        this.posicion = posicion;

        if (datos == null) {
          this.datos = {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            tiempo: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          };
        } else {
          this.datos = datos;
        }
      }

      _createClass(Alumnos, [{
        key: "setActividad",
        value: function setActividad(act) {
          this.id_item = this.estudiante._id + act._id;
        }
      }]);

      return Alumnos;
    }();

    var AlumnosClase = function AlumnosClase(est, posicion) {
      _classCallCheck(this, AlumnosClase);

      this.posicion = {};
      this.estudiante = est;
      this.posicion = posicion;
    };
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#titulo{\n    color: #ECFFB0;\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGl0dWxve1xuICAgIGNvbG9yOiAjRUNGRkIwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _estudiante_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./estudiante.service */
    "./src/app/estudiante.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(estudiantes) {
        _classCallCheck(this, AppComponent);

        this.estudiantes = estudiantes;
        this.title = 'cliente';
        this.dentro = false;
        this.profesor = false;
        this.estudiante = false;
        this.personaIniciada = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
      }

      _createClass(AppComponent, [{
        key: "iniciarSesion",
        value: function iniciarSesion(personal) {
          this.personaIniciada = personal;
        }
      }, {
        key: "entrarProfesor",
        value: function entrarProfesor() {
          this.dentro = true;
          this.profesor = true; //console.log("Se ha accedido");
          //console.log(this.estudiantes.getEstudiantes());
        }
      }, {
        key: "entrarEstudiante",
        value: function entrarEstudiante() {
          this.dentro = true;
          this.estudiante = true;
        }
      }, {
        key: "salir",
        value: function salir() {
          this.dentro = false;
          this.profesor = false;
          this.estudiante = false;
          this.personaIniciada = {
            _id: '',
            nombre: '',
            apellidos: '',
            clase: '',
            email: '',
            contrasena: ''
          }; //this.video = document.getElementById('video');
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _estudiante_service__WEBPACK_IMPORTED_MODULE_2__["EstudianteService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/esm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/esm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/esm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/esm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/esm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_webcam__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ngx-webcam */
    "./node_modules/ngx-webcam/fesm2015/ngx-webcam.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _socketio_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./socketio.service */
    "./src/app/socketio.service.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _estudiante_estudiante_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./estudiante/estudiante.component */
    "./src/app/estudiante/estudiante.component.ts");
    /* harmony import */


    var _profesor_sidenav_profesor_sidenav_profesor_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./profesor/sidenav-profesor/sidenav-profesor.component */
    "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.ts");
    /* harmony import */


    var _profesor_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./profesor/crear-actividad/crear-actividad.component */
    "./src/app/profesor/crear-actividad/crear-actividad.component.ts");
    /* harmony import */


    var _profesor_ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./profesor/ver-actividad/ver-actividad.component */
    "./src/app/profesor/ver-actividad/ver-actividad.component.ts");
    /* harmony import */


    var _profesor_editar_actividad_editar_actividad_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./profesor/editar-actividad/editar-actividad.component */
    "./src/app/profesor/editar-actividad/editar-actividad.component.ts");
    /* harmony import */


    var _profesor_crear_clase_crear_clase_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./profesor/crear-clase/crear-clase.component */
    "./src/app/profesor/crear-clase/crear-clase.component.ts");
    /* harmony import */


    var _profesor_editar_clase_editar_clase_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./profesor/editar-clase/editar-clase.component */
    "./src/app/profesor/editar-clase/editar-clase.component.ts");
    /* harmony import */


    var _profesor_ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./profesor/ver-clase/ver-clase.component */
    "./src/app/profesor/ver-clase/ver-clase.component.ts");
    /* harmony import */


    var _profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./profesor/mensaje/mensaje.component */
    "./src/app/profesor/mensaje/mensaje.component.ts");
    /*
    import { NgModule } from '@angular/core';
    import {MatSidenavModule} from '@angular/material/sidenav';
    import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
    import {MatDialogModule} from '@angular/material/dialog';
    import { MatButtonModule } from '@angular/material/button';
    import {MatStepperModule} from '@angular/material/stepper';*/
    //import {ClipboardModule} from '@angular/cdk/clipboard';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_50__["AppComponent"], _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_52__["ProfesorComponent"], _estudiante_estudiante_component__WEBPACK_IMPORTED_MODULE_53__["EstudianteComponent"], _profesor_sidenav_profesor_sidenav_profesor_component__WEBPACK_IMPORTED_MODULE_54__["SidenavProfesorComponent"], _profesor_crear_actividad_crear_actividad_component__WEBPACK_IMPORTED_MODULE_55__["CrearActividadComponent"], _profesor_ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_56__["VerActividadComponent"], _profesor_editar_actividad_editar_actividad_component__WEBPACK_IMPORTED_MODULE_57__["EditarActividadComponent"], _profesor_crear_clase_crear_clase_component__WEBPACK_IMPORTED_MODULE_58__["CrearClaseComponent"], _profesor_editar_clase_editar_clase_component__WEBPACK_IMPORTED_MODULE_59__["EditarClaseComponent"], _profesor_ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_60__["VerClaseComponent"], _profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"]],
      exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"], //ClipboardModule,
      _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_48__["FontAwesomeModule"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_43__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_49__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_51__["BrowserAnimationsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_44__["ReactiveFormsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], ngx_webcam__WEBPACK_IMPORTED_MODULE_45__["WebcamModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_46__["HttpClientModule"]],
      providers: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _socketio_service__WEBPACK_IMPORTED_MODULE_47__["SocketioService"]],
      entryComponents: [_profesor_mensaje_mensaje_component__WEBPACK_IMPORTED_MODULE_61__["MensajeComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_50__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/estudiante.service.ts":
  /*!***************************************!*\
    !*** ./src/app/estudiante.service.ts ***!
    \***************************************/

  /*! exports provided: EstudianteService */

  /***/
  function srcAppEstudianteServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudianteService", function () {
      return EstudianteService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var EstudianteService =
    /*#__PURE__*/
    function () {
      function EstudianteService(http) {
        _classCallCheck(this, EstudianteService);

        this.http = http;
        this.urlapi = 'http://localhost:5000/';
      }

      _createClass(EstudianteService, [{
        key: "getEstudiantes",
        value: function getEstudiantes() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
      }]);

      return EstudianteService;
    }();

    EstudianteService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    EstudianteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], EstudianteService);
    /***/
  },

  /***/
  "./src/app/estudiante/estudiante.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/estudiante/estudiante.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEstudianteEstudianteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The sidebar menu */\n\n.sidenav {\n  height: 100%;\n  /* Full-height: remove this if you want \"auto\" height */\n  z-index: 1;\n  /* Stay on top */\n  top: auto;\n  /* Stay at the top */\n  left: 0;\n  background-color: #4A7B9D;\n  /* Black */\n  overflow-x: hidden;\n  /* Disable horizontal scroll */\n}\n\n/* The navigation menu links */\n\n.sidenav a {\n  padding: 6px 8px 6px 16px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #ECFFB0;\n  display: block;\n}\n\n/* When you mouse over the navigation links, change their color */\n\n.sidenav a:hover {\n  color: #9AA899;\n}\n\n.circulo {\n  width: 10rem;\n  height: 10rem;\n  border-radius: 50%;\n  background: red;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n}\n\n.circulo>p {\n  font-family: sans-serif;\n  color: white;\n  font-size: 1rem;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXN0dWRpYW50ZS9lc3R1ZGlhbnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCOztBQUVyQjtFQUNFLFlBQVk7RUFDWix1REFBdUQ7RUFDdkQsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsb0JBQW9CO0VBQ3BCLE9BQU87RUFDUCx5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQiw4QkFBOEI7QUFDaEM7O0FBRUEsOEJBQThCOztBQUU5QjtFQUNFLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLGlFQUFpRTs7QUFFakU7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9lc3R1ZGlhbnRlL2VzdHVkaWFudGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cblxuLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcImF1dG9cIiBoZWlnaHQgKi9cbiAgei1pbmRleDogMTtcbiAgLyogU3RheSBvbiB0b3AgKi9cbiAgdG9wOiBhdXRvO1xuICAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRBN0I5RDtcbiAgLyogQmxhY2sgKi9cbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG59XG5cbi8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDZweCA4cHggNnB4IDE2cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogI0VDRkZCMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qIFdoZW4geW91IG1vdXNlIG92ZXIgdGhlIG5hdmlnYXRpb24gbGlua3MsIGNoYW5nZSB0aGVpciBjb2xvciAqL1xuXG4uc2lkZW5hdiBhOmhvdmVyIHtcbiAgY29sb3I6ICM5QUE4OTk7XG59XG5cbi5jaXJjdWxvIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBoZWlnaHQ6IDEwcmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNpcmN1bG8+cCB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/estudiante/estudiante.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/estudiante/estudiante.component.ts ***!
    \****************************************************/

  /*! exports provided: EstudianteComponent */

  /***/
  function srcAppEstudianteEstudianteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EstudianteComponent", function () {
      return EstudianteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _socketio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../socketio.service */
    "./src/app/socketio.service.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

    var EstudianteComponent =
    /*#__PURE__*/
    function () {
      function EstudianteComponent(socketService) {
        _classCallCheck(this, EstudianteComponent);

        this.socketService = socketService;
        this.estudianteIniciado = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ColorHappy = 'rgba(255,255,84,1)'; //Color de la felicidad Correcto

        this.ColorNeutral = 'rgba(84,255,84,1)'; //Color Neutro Incorrecto

        this.ColorSad = 'rgba(81,81,255,1)'; //Color de la tristeza Correcto

        this.ColorAngry = 'rgba(255,0,0,1)'; //Color del enfado Correcto

        this.ColorFearful = 'rgba(0,150,0,1)'; //Color del miedo Correcto

        this.ColorDisgusted = 'rgba(0,0,0,0.5)'; //Color del disgusto Incorrecto

        this.ColorSurprised = 'rgba(89,189,255,1)'; //Color de la Sorpresa Correcto

        this.ColorHappy2 = [255, 255, 0, 1];
        this.ColorNeutral2 = [84, 255, 84, 1];
        this.ColorSad2 = [81, 81, 255, 1];
        this.ColorAngry2 = [255, 0, 0, 1];
        this.ColorFearful2 = [0, 150, 0, 1];
        this.ColorDisgusted2 = [80, 80, 80, 1];
        this.ColorSurprised2 = [89, 189, 255, 1];
        this.estudiante = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
        this.camara = {
          nombre: 'Camara',
          estado: 'Desconectado',
          data: null
        };
        this.led = {
          nombre: 'Led',
          estado: 'Desconectado',
          data: null
        };
        this.pulsera = {
          nombre: 'Pulsera',
          estado: 'Desconectado',
          data: null
        };
        this.noHayEstudiante = true;
        this.conectadoaActividad = false;
        this.listaActividades = [];
        this.listaGestionActividades = {};
        this.listaSensores = [];
        this.id = '';
        this.intervaloDeEnvio = null;
        this.pulsaciones = Math.round(Math.random() * (100 - 40) + 40);
        this.pulsacionesTotales = [];
        this.pulsacionesMax = 180;
        this.pulsacionesMin = 30;
        this.emocionAlegria = 0;
        this.emocionTristeza = 0;
        this.emocionIra = 0;
        this.emocionMiedo = 0;
        this.emocionAsco = 0;
        this.emocionSorpresa = 0;
        this.emocionNeutra = 0;
        this.datosTotalesEmocionales = 0;
        this.contador = 0;
        this.canvas = null;
        this.intervaloGenerarDatos = null;

        this.soyEstudiante = function () {
          this.socket.emit('soyEstudiante', this.estudiante);
        };

        this.crearActividadLista = function (actividad) {
          this.socket.emit('crearActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " está lista.");
        };

        this.borrarActividadLista = function (actividad) {
          this.socket.emit('borrarActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " YA NO está lista.");
        };

        this.enviarDatos = function (datos) {
          this.socket.emit('envioDeDatos', datos, this.actividadActual);
        };

        this.meConectoActividad = function (actividad) {
          this.socket.emit('meConectoActividad', actividad, this.estudiante);
        };

        this.meDesconectoActividad = function (actividad) {
          this.socket.emit('meDesconectoActividad', actividad, this.estudiante);
        };

        this.lanzarSocketSrv = function () {
          var cli = this;
          this.socket.on('connect', function () {
            console.log("Conectado al servidor de WebSockets");
          });
          this.socket.on('actividadAnadida', function (res) {
            console.log("Se ha añadido una actividad a las listas: " + res._id);
          });
          this.socket.on('actividadBorrada', function (res) {
            console.log("Se ha borrado una actividad a las listas: " + res._id);
          });
          this.socket.on('actividades', function (res) {
            /*console.log(res._id);
            console.log(cli.listaGestionActividades[res._id]);
            console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\")
            if (!cli.listaGestionActividades[res._id]) {
              cli.listaGestionActividades[res._id] = res;
              console.log(cli.listaGestionActividades[res._id]);
              cli.listaActividades == null;
              for (var key in cli.listaGestionActividades) {
                cli.listaActividades.push(cli.listaGestionActividades[key]);
              }
            }*/
            //callback(res);
            cli.listaGestionActividades[res._id] = res;
            console.log(cli.listaGestionActividades); //console.log(cli.listaGestionActividades[res._id]);

            cli.listaActividades.length = 0;

            for (var key in cli.listaGestionActividades) {
              console.log(cli.listaGestionActividades[key]);
              cli.listaActividades.push(cli.listaGestionActividades[key]);
            }
          });
          this.socket.on('borrarActividad', function (res) {
            //console.log(cli.listaGestionActividades[res._id]);
            delete cli.listaGestionActividades[res._id];
            console.log(cli.listaGestionActividades); //console.log(cli.listaGestionActividades[res._id]);

            cli.listaActividades.length = 0;
            console.log(cli.listaActividades);

            for (var key in cli.listaGestionActividades) {} //cli.listaActividades.push(cli.listaGestionActividades[key]);
            //callback(res);

          });
          this.socket.on('enviaDatos', function (actividad) {
            console.log("Listo! voy a enviar datos");
            cli.actividad = actividad;
            cli.empezar();
          });
          this.socket.on('noEnviaDatos', function (actividad) {
            console.log('Ya no voy a enviar datos');
            cli.desconectarse();
          });
          this.socket.on('recepcionEmociones', function (datos) {
            console.log(datos);
          });
          /*
          this.socket.on('partidaCreada',function(partida){
              console.log("partida creada:",partida);
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('partidas',function(partidas){
              mostrarListaPartidas(partidas);
          });
          this.socket.on('unido',function(partida){
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('nuevoJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('saliste',function(){
              mostrarCrearPartida(cli.nick);
              borrarCanvas();
          });
          this.socket.on('saleJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('otropreparado',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('aJugar',function(data){
              cli.jugador=data.jugadores[cli.nick];
              cli.rival=cli.obtenerRival(data.jugadores);
              mostrarCanvas(data.numJugadores);
          });
          this.socket.on('anotado',function(){ //function(resultados)
              //mostrarListaResultados(resultados)
              console.log("Resultado anotado");
          });
          this.socket.on('finPartida',function(){
              console.log("Fin de la partida");
              alert("Fin de la partida");
              cli.salir();
          });
          this.socket.on("sigueVivo",function(){
              console.log("sigue vivo");
              cli.spriteLocal.volverAInicio();
          });
          this.socket.on("mover",function(operacion,posicion){
              if (cli.spriteRival){
                  cli.spriteRival.mover(operacion,posicion);
              }
          });*/
        };
      }

      _createClass(EstudianteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          //this.empezar();
          this.listaSensores.push(this.camara);
          this.listaSensores.push(this.led);
          this.listaSensores.push(this.pulsera);
        }
      }, {
        key: "prueba",
        value: function prueba(act) {
          console.log(act);
        }
      }, {
        key: "conectarse",
        value: function conectarse(actividad) {
          console.log("Me he conectado a la actividad");
          this.conectadoaActividad = true;
          this.actividadActual = actividad; //console.log(this.actividadActual.alumnos);

          /*for (var key in this.actividadActual.alumnos) {
            if(this.actividadActual.alumnos[key].estudiante._id=this.estudiante._id){
              console.log("Estudiate id: "+this.estudiante._id)
              this.id_item=this.actividadActual.alumnos[key].id_item;
              //console.log(this.id_item);
            }
          }*/

          this.id_item = this.estudiante._id + actividad._id; //this.soyEstudiante();
          //this.conectarActividad();
          //console.log("asd");
          //this.conectarLed();

          this.meConectoActividad(this.actividadActual);
          console.log(actividad);

          if (actividad.estado == "Comenzada") {
            this.empezar();
          } //this.empezar();

        }
      }, {
        key: "desconectarse",
        value: function desconectarse() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log("Me he desconectado de la actividad"); //console.log(this.actividadActual.alumnos);

                    /*for (var key in this.actividadActual.alumnos) {
                      if(this.actividadActual.alumnos[key].estudiante._id=this.estudiante._id){
                        console.log("Estudiate id: "+this.estudiante._id)
                        this.id_item=this.actividadActual.alumnos[key].id_item;
                        //console.log(this.id_item);
                      }
                    }*/

                    this.id_item = null; //this.soyEstudiante();
                    //this.conectarActividad();
                    //console.log("asd");
                    //this.conectarLed();

                    this.meDesconectoActividad(this.actividadActual);
                    clearInterval(this.intervaloDeEnvio);
                    this.conectadoaActividad = false;
                    this.actividadActual = null;
                    clearInterval(this.intervaloGenerarDatos);
                    _context2.next = 9;
                    return 0;

                  case 9:
                    this.listaActividades.length = _context2.sent;
                    _context2.next = 12;
                    return this.obtenerActividadesComenzadas();

                  case 12:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          this.estudiante = {
            _id: '',
            nombre: '',
            apellidos: '',
            clase: '',
            email: '',
            contrasena: ''
          };
        }
      }, {
        key: "iniciarSesion",
        value: function iniciarSesion() {
          var ju = this;
          $.ajax({
            type: 'POST',
            url: '/estudianteIniciarSesion',
            data: JSON.stringify(ju.estudiante),
            success: function success(data) {
              console.log(data);
              ju.estudiante = data;
              ju.noHayEstudiante = false;
              ju.estudianteIniciado.emit(ju.estudiante);
              ju.id = ju.estudiante._id;
              ju.ini();
              ju.obtenerActividadesComenzadas(); //ju.socket = new SocketioService(ju.estudiante._id);
              //ju.socket.ini();
              //ju.socketService.setupSocketConnection();
              //ju.conectadoaActividad = true;
              //ju.empezar();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "obtenerActividadesComenzadas",
        value: function obtenerActividadesComenzadas() {
          var ju = this;
          $.ajax({
            type: 'POST',
            url: '/verActividadesComenzadas',
            data: JSON.stringify(ju.estudiante),
            success: function success(data) {
              ju.listaActividades = data;
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "conectarWebCam",
        value: function conectarWebCam(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var constraints, stream;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    sensor.data = document.getElementById('video');
                    constraints = {
                      audio: false,
                      video: {
                        width: 720,
                        height: 480
                      }
                    };
                    _context3.prev = 2;
                    _context3.next = 5;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 5:
                    stream = _context3.sent;
                    this.camara.data.srcObject = stream;
                    sensor.estado = "Conectado";
                    _context3.next = 13;
                    break;

                  case 10:
                    _context3.prev = 10;
                    _context3.t0 = _context3["catch"](2);
                    //errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
                    console.log(_context3.t0);

                  case 13:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this, [[2, 10]]);
          }));
        }
      }, {
        key: "handleSuccess",
        value: function handleSuccess(stream) {
          //window.stream = stream;
          this.camara.data.srcObject = stream;
        }
      }, {
        key: "conectarWebCam2",
        value: function conectarWebCam2(sensor) {
          sensor.data = document.getElementById('video');

          try {
            navigator.mediaDevices.getUserMedia({
              video: true
            }).then(function (stream) {
              //console.log(stream)
              //this.video.srcObject = stream;
              sensor.data.srcObject = stream;
              sensor.estado = "Conectado";
            }).catch(function (err) {
              return console.log(err);
            });
          } catch (err) {
            console.log("Error al conectar la WebCam");
          } //this.empezar();

        }
      }, {
        key: "empezar",
        value: function empezar() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    //console.log(this.video.srcObject);
                    Promise.all([faceapi.nets.ageGenderNet.loadFromUri('assets/modelos'), faceapi.nets.faceExpressionNet.loadFromUri('assets/modelos'), faceapi.nets.faceLandmark68Net.loadFromUri('assets/modelos'), faceapi.nets.faceLandmark68TinyNet.loadFromUri('assets/modelos'), faceapi.nets.faceRecognitionNet.loadFromUri('assets/modelos'), faceapi.nets.ssdMobilenetv1.loadFromUri('assets/modelos'), faceapi.nets.tinyFaceDetector.loadFromUri('assets/modelos')]); //console.log(this.video.srcObject);
                    //console.log("hemos cargado los modelos");
                    //this.video.addEventListener('play', () => {
                    //console.log(this.camara.data.srcObject);

                    this.canvas = faceapi.createCanvasFromMedia(this.camara.data);
                    document.body.append(this.canvas);
                    this.displaySize = {
                      width: this.camara.data.width,
                      height: this.camara.data.height
                    };
                    faceapi.matchDimensions(this.canvas, this.displaySize);
                    this.intervaloGenerarDatos = setInterval(function () {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee4() {
                        var detections, datos, datosFisicos, datosNeutral, datosHappy, datosSad, datosAngry, datosFearful, datosSurprised, datosDisgusted;
                        return regeneratorRuntime.wrap(function _callee4$(_context4) {
                          while (1) {
                            switch (_context4.prev = _context4.next) {
                              case 0:
                                _context4.prev = 0;
                                _context4.next = 3;
                                return faceapi.detectSingleFace(this.camara.data, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions();

                              case 3:
                                detections = _context4.sent;
                                datos = faceapi.resizeResults(detections, this.displaySize).expressions;
                                _context4.next = 7;
                                return faceapi.detectSingleFace(this.camara.data).withFaceLandmarks().withAgeAndGender();

                              case 7:
                                datosFisicos = _context4.sent;
                                datosNeutral = faceapi.resizeResults(detections, this.displaySize).expressions.neutral;
                                datosHappy = faceapi.resizeResults(detections, this.displaySize).expressions.happy;
                                datosSad = faceapi.resizeResults(detections, this.displaySize).expressions.sad;
                                datosAngry = faceapi.resizeResults(detections, this.displaySize).expressions.angry;
                                datosFearful = faceapi.resizeResults(detections, this.displaySize).expressions.fearful;
                                datosSurprised = faceapi.resizeResults(detections, this.displaySize).expressions.surprised;
                                datosDisgusted = faceapi.resizeResults(detections, this.displaySize).expressions.disgusted;
                                this.emocionAlegria += datosHappy;
                                this.emocionAsco += datosDisgusted;
                                this.emocionIra += datosAngry;
                                this.emocionMiedo += datosFearful;
                                this.emocionSorpresa += datosSurprised;
                                this.emocionTristeza += datosSad;
                                this.contador += 1;

                                if (!(this.contador == 5)) {
                                  _context4.next = 26;
                                  break;
                                }

                                this.contador = 0;
                                _context4.next = 26;
                                return this.computacionDatos();

                              case 26:
                                _context4.next = 30;
                                break;

                              case 28:
                                _context4.prev = 28;
                                _context4.t0 = _context4["catch"](0);

                              case 30:
                              case "end":
                                return _context4.stop();
                            }
                          }
                        }, _callee4, this, [[0, 28]]);
                      }));
                    }, 1000);

                  case 6:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "computacionDatos",
        value: function computacionDatos() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var datos, x, predominante, mediaPulsaciones, i;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    /*
                    push({
                        x: moment().format(),
                        y: -30
                      });
                    */
                    datos = {};
                    x = moment__WEBPACK_IMPORTED_MODULE_4__().format();
                    predominante = 0; //Estado Emocional

                    this.datosTotalesEmocionales = this.emocionAlegria + this.emocionAsco + this.emocionIra + this.emocionMiedo + this.emocionSorpresa + this.emocionTristeza; //+this.emocionNeutra;

                    datos['id_item'] = this.id_item;
                    this.colorPredominante = this.ColorNeutral2; //Alegria

                    _context6.next = 8;
                    return {
                      x: x,
                      y: this.emocionAlegria / this.datosTotalesEmocionales
                    };

                  case 8:
                    datos['alegria'] = _context6.sent;

                    if (predominante < datos['alegria'].y) {
                      predominante = datos['alegria'].y;
                      this.colorPredominante = this.ColorHappy2;
                    } //Asco


                    _context6.next = 12;
                    return {
                      x: x,
                      y: this.emocionAsco / this.datosTotalesEmocionales
                    };

                  case 12:
                    datos['asco'] = _context6.sent;

                    if (predominante < datos['asco'].y) {
                      predominante = datos['asco'].y;
                      this.colorPredominante = this.ColorDisgusted2;
                    } //Ira


                    _context6.next = 16;
                    return {
                      x: x,
                      y: this.emocionIra / this.datosTotalesEmocionales
                    };

                  case 16:
                    datos['ira'] = _context6.sent;

                    if (predominante < datos['ira'].y) {
                      predominante = datos['ira'].y;
                      this.colorPredominante = this.ColorAngry2;
                    } //Miedo


                    _context6.next = 20;
                    return {
                      x: x,
                      y: this.emocionMiedo / this.datosTotalesEmocionales
                    };

                  case 20:
                    datos['miedo'] = _context6.sent;

                    if (predominante < datos['miedo']) {
                      predominante = datos['miedo'].y;
                      this.colorPredominante = this.ColorFearful2;
                    } //Sorpresa


                    _context6.next = 24;
                    return {
                      x: x,
                      y: this.emocionSorpresa / this.datosTotalesEmocionales
                    };

                  case 24:
                    datos['sorpresa'] = _context6.sent;

                    if (predominante < datos['sorpresa']) {
                      predominante = datos['sorpresa'].y;
                      this.colorPredominante = this.ColorSurprised2;
                    } //Triteza


                    _context6.next = 28;
                    return {
                      x: x,
                      y: this.emocionTristeza / this.datosTotalesEmocionales
                    };

                  case 28:
                    datos['tristeza'] = _context6.sent;

                    if (predominante < datos['tristeza'].y) {
                      predominante = datos['tristeza'].y;
                      this.colorPredominante = this.ColorSad2;
                    }

                    _context6.next = 32;
                    return 0;

                  case 32:
                    predominante = _context6.sent;

                    /*datos['neutra']=this.emocionNeutra/this.datosTotalesEmocionales;
                    if(datos['tristeza']<datos['neutra']){
                      this.colorPredominante=this.ColorNeutral2;
                    }*/
                    datos['color'] = 'rgba(' + this.colorPredominante[0] + ',' + this.colorPredominante[1] + ',' + this.colorPredominante[2] + ',' + this.colorPredominante[3] + ')'; //console.log('rgba('+this.colorPredominante[0]+','+this.colorPredominante[1]+','+this.colorPredominante[2]+','+this.colorPredominante[3]+')');

                    $('#estadoAlumno').css('background-color', 'rgba(' + this.colorPredominante[0] + ',' + this.colorPredominante[1] + ',' + this.colorPredominante[2] + ',' + this.colorPredominante[3] + ')');
                    this.ponerColor();
                    this.emocionAlegria = 0;
                    this.emocionAsco = 0;
                    this.emocionIra = 0;
                    this.emocionMiedo = 0;
                    this.emocionSorpresa = 0;
                    this.emocionTristeza = 0;
                    this.emocionNeutra = 0;
                    this.datosTotalesEmocionales = 0; //Estado de las Pulsaciones

                    mediaPulsaciones = 0;

                    for (i = 0; i < this.pulsacionesTotales.length; i++) {
                      mediaPulsaciones += this.pulsacionesTotales[i];
                    }

                    _context6.next = 48;
                    return {
                      x: x,
                      y: mediaPulsaciones / this.pulsacionesTotales.length
                    };

                  case 48:
                    datos['pulsaciones'] = _context6.sent;
                    this.pulsacionesTotales.length = 0; //console.log(this.pulsacionesTotales);
                    //Estado temporal

                    datos['tiempo'] = x; //Estado Cognitivo

                    _context6.next = 53;
                    return {
                      x: x,
                      y: 0
                    };

                  case 53:
                    datos['distraido'] = _context6.sent;

                    if (!(datos['pulsaciones'].y > 85)) {
                      _context6.next = 58;
                      break;
                    }

                    _context6.next = 57;
                    return {
                      x: x,
                      y: datos['sorpresa'].y
                    };

                  case 57:
                    datos['distraido'] = _context6.sent;

                  case 58:
                    if (!(datos['alegria'].y == NaN || datos['alegria'].y == null)) {
                      _context6.next = 62;
                      break;
                    }

                    _context6.next = 61;
                    return {
                      x: x,
                      y: 1
                    };

                  case 61:
                    datos['distraido'] = _context6.sent;

                  case 62:
                    _context6.next = 64;
                    return {
                      x: x,
                      y: 1 - datos['distraido'].y
                    };

                  case 64:
                    datos['concentrado'] = _context6.sent;
                    console.log('1');
                    datos['frustrado'] = {
                      x: x,
                      y: 0
                    };
                    console.log('2');

                    if (datos['sorpresa'].y + datos['tristeza'].y > 0.25) {
                      datos['frustrado'] += {
                        x: x,
                        y: datos['frustrado'].y + 0.25
                      };
                    }

                    console.log('3');

                    if (datos['asco'].y + datos['ira'].y > 0.25) {
                      datos['frustrado'] += {
                        x: x,
                        y: datos['frustrado'].y + 0.25
                      };
                    }

                    console.log('4');

                    if (datos['miedo'].y + datos['tristeza'].y > 0.25) {
                      datos['frustrado'] += {
                        x: x,
                        y: datos['frustrado'].y + 0.25
                      };
                    }

                    console.log('5');

                    if (datos['sorpresa'].y + datos['ira'].y > 0.25) {
                      datos['frustrado'] += {
                        x: x,
                        y: datos['frustrado'].y + 0.25
                      };
                    }

                    console.log('6');

                    if (datos['alegria'].y == NaN || datos['alegria'].y == null) {
                      datos['frustrado'] = {
                        x: x,
                        y: 1
                      };
                    }

                    console.log('7');
                    datos['motivado'] = {
                      x: x,
                      y: 1 - datos['frustrado'].y
                    };
                    console.log("Datos listos para enviar");
                    console.log(datos);
                    this.enviarDatos(datos); //this.enviarEmocionesWebCam(datos);

                  case 82:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "parar",
        value: function parar() {}
        /*this.video.addEventListener('stop', function () {
          console.log("Se ha parado");
        })*/
        //Gestion de los Sensore

      }, {
        key: "conectarSensor",
        value: function conectarSensor(sensor) {
          if (sensor.nombre == "Led") {
            this.conectarLed(sensor);
          }

          if (sensor.nombre == "Camara") {
            this.conectarWebCam(sensor); //this.empezar()
          }

          if (sensor.nombre == "Pulsera") {
            this.conectarPulsera(sensor);
          }
        }
      }, {
        key: "conectarPulsera",
        value: function conectarPulsera(sensor) {
          var _this2 = this;

          sensor.estado = "Conectado";
          setInterval(function (async) {
            _this2.pulsometro(sensor);
          }, 1000);
        }
      }, {
        key: "pulsometro",
        value: function pulsometro(sensor) {
          if (sensor.estado == "Conectado") {
            if (Math.round(Math.random() * (1 - 0) + 0) == 1) {
              this.pulsaciones = this.pulsaciones + Math.round(Math.random() * (5 - 0) + 0);
            } else {
              this.pulsaciones = this.pulsaciones - Math.round(Math.random() * (5 - 0) + 0);
            }

            if (this.pulsaciones >= this.pulsacionesMax) {
              this.pulsaciones = this.pulsacionesMax;
            } else if (this.pulsaciones <= this.pulsacionesMin) {
              this.pulsaciones = this.pulsacionesMin;
            }

            this.pulsacionesTotales.push(this.pulsaciones);
          }
        }
      }, {
        key: "desconectarSensor",
        value: function desconectarSensor(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var constraints, stream, track;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    if (sensor.nombre == "Led") {
                      //console.log(sensor);
                      sensor.data = null;
                      sensor.estado = "Desconectado";
                    }

                    if (!(sensor.nombre == "Camara")) {
                      _context7.next = 17;
                      break;
                    }

                    /*navigator.getUserMedia({ audio: false, video: true },
                      function (stream) {
                        // can also use getAudioTracks() or getVideoTracks()
                        var track = stream.getTracks()[0];  // if only one media track
                        // ...
                        track.stop();
                        sensor.data = null;
                        sensor.estado = "Desconectado";
                      },
                      function (error) {
                        console.log('getUserMedia() error', error);
                      });*/
                    ///
                    //sensor.data = document.getElementById('video');
                    constraints = {
                      audio: false,
                      video: {
                        width: 720,
                        height: 480
                      }
                    };
                    _context7.prev = 3;
                    _context7.next = 6;
                    return navigator.mediaDevices.getUserMedia(constraints);

                  case 6:
                    stream = _context7.sent;
                    track = stream.getTracks()[0]; // if only one media track
                    // ...

                    track.stop();
                    sensor.data = null;
                    sensor.estado = "Desconectado";
                    _context7.next = 17;
                    break;

                  case 13:
                    _context7.prev = 13;
                    _context7.t0 = _context7["catch"](3);
                    //errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
                    console.log(_context7.t0);
                    console.log("Has tenido un error");

                  case 17:
                    if (sensor.nombre == "Pulsera") {
                      sensor.data = null;
                      sensor.estado = "Desconectado";
                    }

                  case 18:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, null, [[3, 13]]);
          }));
        } //Implementacion del led

      }, {
        key: "conectarLed",
        value: function conectarLed(sensor) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log("Conectandose...");
                    _context8.prev = 1;
                    _context8.next = 4;
                    return navigator.hid.requestDevice({
                      filters: [{
                        vendorId: 0x20a0,
                        productId: 0x41e5
                      }]
                    });

                  case 4:
                    sensor.data = _context8.sent;
                    //device.open();
                    //console.log(this.device);
                    this.led.estado = "Conectado";
                    _context8.next = 8;
                    return sensor.data.open();

                  case 8:
                    _context8.next = 12;
                    break;

                  case 10:
                    _context8.prev = 10;
                    _context8.t0 = _context8["catch"](1);

                  case 12:
                    //console.log(this.listaSensores)
                    if (this.device !== undefined) {// Add |device| to the UI.
                    }

                  case 13:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[1, 10]]);
          }));
        }
      }, {
        key: "ponerHappy",
        value: function ponerHappy() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _context9.next = 2;
                    return this.fadeToColor(this.led.data, [255, 255, 0]);

                  case 2:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "ponerNeutral",
        value: function ponerNeutral() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    _context10.next = 2;
                    return this.fadeToColor(this.led.data, [84, 255, 84]);

                  case 2:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));
        }
      }, {
        key: "ponerSad",
        value: function ponerSad() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.next = 2;
                    return this.fadeToColor(this.led.data, [81, 81, 255]);

                  case 2:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));
        }
      }, {
        key: "ponerAngry",
        value: function ponerAngry() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.fadeToColor(this.led.data, [255, 0, 0]);

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "ponerFearful",
        value: function ponerFearful() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee13() {
            return regeneratorRuntime.wrap(function _callee13$(_context13) {
              while (1) {
                switch (_context13.prev = _context13.next) {
                  case 0:
                    _context13.next = 2;
                    return this.fadeToColor(this.led.data, [0, 150, 0]);

                  case 2:
                  case "end":
                    return _context13.stop();
                }
              }
            }, _callee13, this);
          }));
        }
      }, {
        key: "ponerDisgusted",
        value: function ponerDisgusted() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.fadeToColor(this.led.data, [80, 80, 80]);

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "ponerSurprised",
        value: function ponerSurprised() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee15() {
            return regeneratorRuntime.wrap(function _callee15$(_context15) {
              while (1) {
                switch (_context15.prev = _context15.next) {
                  case 0:
                    _context15.next = 2;
                    return this.fadeToColor(this.led.data, [89, 189, 255]);

                  case 2:
                  case "end":
                    return _context15.stop();
                }
              }
            }, _callee15, this);
          }));
        }
      }, {
        key: "ponerColor",
        value: function ponerColor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.fadeToColor(this.led.data, [this.colorPredominante[0], this.colorPredominante[1], this.colorPredominante[2]]);

                  case 2:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "fadeToColor",
        value: function fadeToColor(device, _ref) {
          var _ref2 = _slicedToArray(_ref, 3),
              r = _ref2[0],
              g = _ref2[1],
              b = _ref2[2];

          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee17() {
            var reportId, data;
            return regeneratorRuntime.wrap(function _callee17$(_context17) {
              while (1) {
                switch (_context17.prev = _context17.next) {
                  case 0:
                    reportId = 1; //console.log([r, g, b]);

                    data = Uint8Array.from([r, g, b]); //const negro = Uint8Array.from([0x63, 0, 0, 0, 0x00, 0x10, 0x00, 0x00]);

                    _context17.prev = 2;
                    _context17.next = 5;
                    return device.sendFeatureReport(1, data);

                  case 5:
                    _context17.next = 9;
                    break;

                  case 7:
                    _context17.prev = 7;
                    _context17.t0 = _context17["catch"](2);

                  case 9:
                  case "end":
                    return _context17.stop();
                }
              }
            }, _callee17, null, [[2, 7]]);
          }));
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.actividadActual) {
            this.socket.emit('meDesconectoActividad', this.actividadActual, this.estudiante);
          }

          clearInterval(this.intervaloGenerarDatos);
        } //Implementacion de los sockets

      }, {
        key: "ini",
        value: function ini() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__["connect"]();
          this.lanzarSocketSrv();
          this.soyEstudiante();
        }
      }]);

      return EstudianteComponent;
    }();

    EstudianteComponent.ctorParameters = function () {
      return [{
        type: _socketio_service__WEBPACK_IMPORTED_MODULE_2__["SocketioService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EstudianteComponent.prototype, "estudianteIniciado", void 0);
    EstudianteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-estudiante',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./estudiante.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/estudiante/estudiante.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./estudiante.component.css */
      "./src/app/estudiante/estudiante.component.css")).default]
    })], EstudianteComponent);
    /***/
  },

  /***/
  "./src/app/profesor/crear-actividad/crear-actividad.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/profesor/crear-actividad/crear-actividad.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorCrearActividadCrearActividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.example-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.example-box {\n  width: 70px;\n  height: 70px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 0px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvY3JlYXItYWN0aXZpZGFkL2NyZWFyLWFjdGl2aWRhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWiwyQkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsK0dBQStHO0FBQ2pIOztBQUVBO0VBQ0UscUhBQXFIO0FBQ3ZIOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmVzb3IvY3JlYXItYWN0aXZpZGFkL2NyZWFyLWFjdGl2aWRhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmV4YW1wbGUtaGVhZGVyIHtcbiAgbWluLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogOHB4IDI0cHggMDtcbn1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA1MDBweDtcbn1cblxuLmV4YW1wbGUtYm94IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3VuZGFyeSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IGRvdHRlZCAjY2NjIDJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/crear-actividad/crear-actividad.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/profesor/crear-actividad/crear-actividad.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CrearActividadComponent */

  /***/
  function srcAppProfesorCrearActividadCrearActividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearActividadComponent", function () {
      return CrearActividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var moment_locale_es__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment/locale/es */
    "./node_modules/moment/locale/es.js");
    /* harmony import */


    var moment_locale_es__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment_locale_es__WEBPACK_IMPORTED_MODULE_7__);

    var CrearActividadComponent =
    /*#__PURE__*/
    function () {
      function CrearActividadComponent(_formBuilder) {
        _classCallCheck(this, CrearActividadComponent);

        this._formBuilder = _formBuilder;
        this.actividadCreada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.actividadCreate = {
          nombre: '',
          profesor: '',
          fecha: '',
          alumnos: {},
          estado: 'Creada',
          resumen: {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            tiempo: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          },
          clase: {
            _id: '',
            nombre: 'Sin clase'
          }
        };
        this.alumnosSeleccionados = [];
        this.estudiante = {
          nombre: '',
          apellidos: '',
          clase: '',
          posicionX: 0,
          posicionY: 0
        };
      }

      _createClass(CrearActividadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee18() {
            return regeneratorRuntime.wrap(function _callee18$(_context18) {
              while (1) {
                switch (_context18.prev = _context18.next) {
                  case 0:
                    this.datosPrimarios = this._formBuilder.group({
                      fromControlNombreActividad: true,
                      fromControlNombreProfesor: true //['', Validators.required]

                    });

                  case 1:
                  case "end":
                    return _context18.stop();
                }
              }
            }, _callee18, this);
          }));
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.estudiantes);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this3 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this3.selection.select(row);
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var fila = 0;
          var columna = 0;
          var arryaAlumnos = []; // = this.selection.selected;

          for (var i = 0; i < this.selection.selected.length; i++) {
            //MODIFICADO

            /*if(columna<=5){
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                'clase':this.selection.selected[i].clase,
                       posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
              
              
              //arryaAlumnos[this.selection.selected[i].email]=this.selection.selected[i];
                columna++;
            }else{
              fila++;
              columna=0;
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
                columna++;
            }*/
            //MODIFICADO
            arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__["Alumnos"](this.selection.selected[i], {
              x: 0,
              y: 0
            }, this.actividadCreate, null));
          }

          this.alumnosSeleccionados = arryaAlumnos;
          /*this.actividadCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition();
          console.log(item); //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "guardarActividad",
        value: function guardarActividad() {
          console.log("Vamos a guardar la actividad"); //console.log(this.comprobarSeleccionados())
          //this.crearActividad();
          //MODIFICADO

          /*var alumnos=[];
          for(let i = 0;i<this.alumnosSeleccionados.length;i++){
            //alumnos.push({nombre:this.alumnosSeleccionados[i].nombre,apellidos:this.alumnosSeleccionados[i].apellidos,posicion:this.alumnosSeleccionados[i].posicion,posicionInicial:this.alumnosSeleccionados[i].posicionInicial});
            alumnos.push(this.alumnosSeleccionados[i]);
          }
          this.actividadCreate.alumnos=alumnos;
          */
          //MODIFICADO

          this.actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_6__().format('LLLL');
          this.actividadCreate.alumnos = this.alumnosSeleccionados;
          console.log(this.actividadCreate);
          this.actividadCreada.emit(this.actividadCreate);
          this.actividadCreate = {
            nombre: '',
            profesor: '',
            fecha: '',
            alumnos: {},
            estado: '',
            resumen: {
              alegria: [],
              asco: [],
              miedo: [],
              sorpresa: [],
              tristeza: [],
              ira: [],
              pulsaciones: [],
              tiempo: [],
              distraido: [],
              concentrado: [],
              frustrado: [],
              motivado: []
            },
            clase: {
              _id: '',
              nombre: 'Sin clase'
            }
          };
        }
      }]);

      return CrearActividadComponent;
    }();

    CrearActividadComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CrearActividadComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CrearActividadComponent.prototype, "editarActividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], CrearActividadComponent.prototype, "actividadCreada", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)], CrearActividadComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)], CrearActividadComponent.prototype, "sort", void 0);
    CrearActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-actividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-actividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-actividad/crear-actividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-actividad.component.css */
      "./src/app/profesor/crear-actividad/crear-actividad.component.css")).default]
    })], CrearActividadComponent);
    /***/
  },

  /***/
  "./src/app/profesor/crear-clase/crear-clase.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/profesor/crear-clase/crear-clase.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorCrearClaseCrearClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  .example-box {\n    width: 70px;\n    height: 70px;\n    border: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: move;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    background: #fff;\n    border-radius: 4px;\n    margin-right: 0px;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    padding: 10px;\n    -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-box:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-boundary {\n    width: 400px;\n    height: 400px;\n    max-width: 100%;\n    border: dotted #ccc 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvY3JlYXItY2xhc2UvY3JlYXItY2xhc2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7RUFDYjs7RUFFQTtJQUNFLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1osMkJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiwrREFBdUQ7SUFBdkQsdURBQXVEO0lBQ3ZELCtHQUErRztFQUNqSDs7RUFFQTtJQUNFLHFIQUFxSDtFQUN2SDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQUN6QiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL2NyZWFyLWNsYXNlL2NyZWFyLWNsYXNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWhlYWRlciB7XG4gICAgbWluLWhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiA4cHggMjRweCAwO1xuICB9XG4gIFxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLm1hdC10YWJsZSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveCB7XG4gICAgd2lkdGg6IDcwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94OmFjdGl2ZSB7XG4gICAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3VuZGFyeSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogZG90dGVkICNjY2MgMnB4O1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/profesor/crear-clase/crear-clase.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/profesor/crear-clase/crear-clase.component.ts ***!
    \***************************************************************/

  /*! exports provided: CrearClaseComponent */

  /***/
  function srcAppProfesorCrearClaseCrearClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CrearClaseComponent", function () {
      return CrearClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var CrearClaseComponent =
    /*#__PURE__*/
    function () {
      function CrearClaseComponent(_formBuilder, profesor) {
        _classCallCheck(this, CrearClaseComponent);

        this._formBuilder = _formBuilder;
        this.profesor = profesor; //estudiantes: Estudiante[];
        //@Input() editarActividad: Actividad;
        //@Output() actividadCreada = new EventEmitter<Object>();
        //Prueba de una tabla con filtro y paginacion

        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.claseCreate = {
          nombre: '',
          profesor: '',
          alumnos: [],
          actividades: {},
          resumen: {
            alegria: [],
            asco: [],
            miedo: [],
            sorpresa: [],
            tristeza: [],
            ira: [],
            pulsaciones: [],
            tiempo: [],
            distraido: [],
            concentrado: [],
            frustrado: [],
            motivado: []
          }
        };
        this.alumnosSeleccionados = [];
        this.estudiante = {
          nombre: '',
          apellidos: '',
          clase: '',
          posicionX: 0,
          posicionY: 0
        };
      }

      _createClass(CrearClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreActividad: true,
            fromControlNombreProfesor: true //['', Validators.required]

          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.estudiantes);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this4 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            return _this4.selection.select(row);
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var fila = 0;
          var columna = 0;
          var arryaAlumnos = []; // = this.selection.selected;

          for (var i = 0; i < this.selection.selected.length; i++) {
            //MODIFICADO

            /*if(columna<=5){
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                'clase':this.selection.selected[i].clase,
                       posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
              
              
              //arryaAlumnos[this.selection.selected[i].email]=this.selection.selected[i];
                columna++;
            }else{
              fila++;
              columna=0;
              arryaAlumnos.push({
                'nombre':this.selection.selected[i].nombre,
                'apellidos':this.selection.selected[i].apellidos,
                posicion: {x:0,y:0},
                posicionInicial:{x:columna*70,y:70*fila},
                });
                columna++;
            }*/
            //MODIFICADO
            arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_5__["AlumnosClase"](this.selection.selected[i], {
              x: 0,
              y: 0
            }));
          }

          this.alumnosSeleccionados = arryaAlumnos;
          /*this.claseCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition();
          console.log(item); //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "guardarActividad",
        value: function guardarActividad() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var ju;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    ju = this;
                    this.claseCreate.alumnos = this.alumnosSeleccionados;
                    console.log(this.claseCreate); //this.actividadCreada.emit(this.claseCreate);

                    $.ajax({
                      type: 'POST',
                      url: '/registrarClase',
                      data: JSON.stringify(ju.claseCreate),
                      success: function success(data) {
                        ju.profesor.actualizarClases();
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });
                    this.claseCreate = {
                      nombre: '',
                      profesor: '',
                      alumnos: [],
                      actividades: {},
                      resumen: {
                        alegria: [],
                        asco: [],
                        miedo: [],
                        sorpresa: [],
                        tristeza: [],
                        ira: [],
                        pulsaciones: [],
                        tiempo: [],
                        distraido: [],
                        concentrado: [],
                        frustrado: [],
                        motivado: []
                      }
                    };

                  case 5:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }]);

      return CrearClaseComponent;
    }();

    CrearClaseComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CrearClaseComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], null)], CrearClaseComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSort"], null)], CrearClaseComponent.prototype, "sort", void 0);
    CrearClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-crear-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./crear-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/crear-clase/crear-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./crear-clase.component.css */
      "./src/app/profesor/crear-clase/crear-clase.component.css")).default]
    })], CrearClaseComponent);
    /***/
  },

  /***/
  "./src/app/profesor/editar-actividad/editar-actividad.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/profesor/editar-actividad/editar-actividad.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorEditarActividadEditarActividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  .example-box {\n    width: 70px;\n    height: 70px;\n    border: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: move;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    background: #fff;\n    border-radius: 4px;\n    margin-right: 0px;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    padding: 10px;\n    -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-box:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-boundary {\n    width: 400px;\n    height: 400px;\n    max-width: 100%;\n    border: dotted #ccc 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvZWRpdGFyLWFjdGl2aWRhZC9lZGl0YXItYWN0aXZpZGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLDJCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsK0RBQXVEO0lBQXZELHVEQUF1RDtJQUN2RCwrR0FBK0c7RUFDakg7O0VBRUE7SUFDRSxxSEFBcUg7RUFDdkg7O0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7RUFDekIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci9lZGl0YXItYWN0aXZpZGFkL2VkaXRhci1hY3RpdmlkYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtaGVhZGVyIHtcbiAgICBtaW4taGVpZ2h0OiA2NHB4O1xuICAgIHBhZGRpbmc6IDhweCAyNHB4IDA7XG4gIH1cbiAgXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAubWF0LXRhYmxlIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm94IHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBjdXJzb3I6IG1vdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gICAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJvdW5kYXJ5IHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBkb3R0ZWQgI2NjYyAycHg7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/editar-actividad/editar-actividad.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/profesor/editar-actividad/editar-actividad.component.ts ***!
    \*************************************************************************/

  /*! exports provided: EditarActividadComponent */

  /***/
  function srcAppProfesorEditarActividadEditarActividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarActividadComponent", function () {
      return EditarActividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var EditarActividadComponent =
    /*#__PURE__*/
    function () {
      function EditarActividadComponent(_formBuilder) {
        _classCallCheck(this, EditarActividadComponent);

        this._formBuilder = _formBuilder;
        this.actividadEditada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); //Prueba de una tabla con filtro y paginacion

        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.alumnosSeleccionados = [];
        this.arryaAlumnos = [];
        this.arrayAlumnosAntiguos = [];
      }

      _createClass(EditarActividadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreActividad: true,
            fromControlNombreProfesor: true //['', Validators.required]

          });

          for (var i in this.editarActividad.alumnos) {
            console.log(this.editarActividad.alumnos[i]); //this.selection.selected.push(this.editarActividad.alumnos[i].estudiante);
            //this.arryaAlumnos.push(new Alumnos(this.editarActividad.alumnos[i].estudiante, { x: 0, y: 0 }, this.editarActividad));
          }
          /*
          console.log(this.selection);*/
          //this.selection.selected=this.editarActividad.alumnos.

        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this5 = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.estudiantes);
          /*console.log("Prueba");
          console.log(this.dataSource);*/

          this.dataSource.data.forEach(function (row) {
            for (var i in _this5.editarActividad.alumnos) {
              if (_this5.editarActividad.alumnos[i].estudiante._id == row._id) {
                _this5.selection.select(row);

                _this5.actualizarr(row);

                _this5.arrayAlumnosAntiguos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["Alumnos"](_this5.editarActividad.alumnos[i].estudiante, _this5.editarActividad.alumnos[i].posicion, _this5.editarActividad, _this5.editarActividad.alumnos[i].datos));
              }
            } //this.actualizarr(row);


            console.log(_this5.arryaAlumnos);
          });
        }
      }, {
        key: "actualizarr",
        value: function actualizarr(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee20() {
            return regeneratorRuntime.wrap(function _callee20$(_context20) {
              while (1) {
                switch (_context20.prev = _context20.next) {
                  case 0:
                    this.arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["Alumnos"](item, item.posicion, this.editarActividad, null));
                    this.alumnosSeleccionados = this.arryaAlumnos;
                    this.ponerAlumnos;

                  case 3:
                  case "end":
                    return _context20.stop();
                }
              }
            }, _callee20, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this6 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            _this6.selection.select(row); //this.arryaAlumnos.push(new Alumnos(row, { x: 0, y: 0 }, this.editarActividad))
            //this.alumnosSeleccionados = this.arryaAlumnos;


            _this6.ponerAlumnos();
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition(); //console.log(item);
          //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var listaID = {};
          var arrayListaID = [];
          console.log("Antiguos");
          console.log(this.arrayAlumnosAntiguos);
          console.log("Seleccionados");
          console.log(this.selection.selected);
          this.arryaAlumnos = [];
          this.arryaAlumnos.length = 0;
          this.alumnosSeleccionados.length = 0;
          this.alumnosSeleccionados = [];
          console.log(this.alumnosSeleccionados);
          var fila = 0;
          var columna = 0; // = this.selection.selected;

          for (var i = 0; i < this.selection.selected.length; i++) {
            listaID[this.selection.selected[i]._id] = new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["Alumnos"](this.selection.selected[i], {
              x: 0,
              y: 0
            }, this.editarActividad, null);
          }

          for (var j = 0; j < this.arrayAlumnosAntiguos.length; j++) {
            //console.log(listaID[this.arrayAlumnosAntiguos[j].estudiante._id])
            if (listaID[this.arrayAlumnosAntiguos[j].estudiante._id] != null) {
              listaID[this.arrayAlumnosAntiguos[j].estudiante._id] = this.arrayAlumnosAntiguos[j];
            }
          }

          for (var id in listaID) {
            arrayListaID.push(listaID[id]);
          }
          /*for(let j = 0;j<this.arrayAlumnosAntiguos.length;j++){
            for (let i = 0; i < this.selection.selected.length; i++) {
              this.arryaAlumnos.push(new Alumnos(this.selection.selected[i], { x: 0, y: 0 }, this.editarActividad,null));
            }
          }*/


          this.alumnosSeleccionados = arrayListaID;
          console.log("Lista definitiva");
          console.log(this.alumnosSeleccionados);
          /*this.actividadCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.editarActividad.fecha = moment__WEBPACK_IMPORTED_MODULE_6__().format('LLLL');
          this.editarActividad.alumnos = this.alumnosSeleccionados;
          this.actividadEditada.emit(this.editarActividad);
        }
      }]);

      return EditarActividadComponent;
    }();

    EditarActividadComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarActividadComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarActividadComponent.prototype, "editarActividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditarActividadComponent.prototype, "actividadEditada", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], EditarActividadComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], EditarActividadComponent.prototype, "sort", void 0);
    EditarActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-actividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar-actividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-actividad/editar-actividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar-actividad.component.css */
      "./src/app/profesor/editar-actividad/editar-actividad.component.css")).default]
    })], EditarActividadComponent);
    /***/
  },

  /***/
  "./src/app/profesor/editar-clase/editar-clase.component.css":
  /*!******************************************************************!*\
    !*** ./src/app/profesor/editar-clase/editar-clase.component.css ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorEditarClaseEditarClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 300px;\n  }\n  \n  .example-header {\n    min-height: 64px;\n    padding: 8px 24px 0;\n  }\n  \n  .mat-form-field {\n    font-size: 14px;\n    width: 100%;\n  }\n  \n  .mat-table {\n    overflow: auto;\n    max-height: 500px;\n  }\n  \n  .example-box {\n    width: 70px;\n    height: 70px;\n    border: solid 1px #ccc;\n    color: rgba(0, 0, 0, 0.87);\n    cursor: move;\n    display: -webkit-inline-box;\n    display: inline-flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    text-align: center;\n    background: #fff;\n    border-radius: 4px;\n    margin-right: 0px;\n    position: relative;\n    z-index: 1;\n    box-sizing: border-box;\n    padding: 10px;\n    -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-box:active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n  \n  .example-boundary {\n    width: 400px;\n    height: 400px;\n    max-width: 100%;\n    border: dotted #ccc 2px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvZWRpdGFyLWNsYXNlL2VkaXRhci1jbGFzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztFQUNiOztFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsMEJBQTBCO0lBQzFCLFlBQVk7SUFDWiwyQkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLCtEQUF1RDtJQUF2RCx1REFBdUQ7SUFDdkQsK0dBQStHO0VBQ2pIOztFQUVBO0lBQ0UscUhBQXFIO0VBQ3ZIOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmVzb3IvZWRpdGFyLWNsYXNlL2VkaXRhci1jbGFzZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1oZWFkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogOHB4IDI0cHggMDtcbiAgfVxuICBcbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIC5tYXQtdGFibGUge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICB9XG4gIFxuICAuZXhhbXBsZS1ib3gge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5leGFtcGxlLWJveDphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtYm91bmRhcnkge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IGRvdHRlZCAjY2NjIDJweDtcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/editar-clase/editar-clase.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/profesor/editar-clase/editar-clase.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EditarClaseComponent */

  /***/
  function srcAppProfesorEditarClaseEditarClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditarClaseComponent", function () {
      return EditarClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../Modelos/modelos */
    "./src/app/Modelos/modelos.ts");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var EditarClaseComponent =
    /*#__PURE__*/
    function () {
      function EditarClaseComponent(_formBuilder, profesor) {
        _classCallCheck(this, EditarClaseComponent);

        this._formBuilder = _formBuilder;
        this.profesor = profesor; //Prueba de una tabla con filtro y paginacion

        this.displayedColumns = ['select', 'nombre', 'apellidos', 'clase'];
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_4__["SelectionModel"](true, []);
        this.dragPosition = {
          x: 0,
          y: 0
        };
        this.alumnosSeleccionados = [];
        this.arryaAlumnos = [];
        this.arrayAlumnosAntiguos = [];
      }

      _createClass(EditarClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.datosPrimarios = this._formBuilder.group({
            fromControlNombreActividad: true,
            fromControlNombreProfesor: true //['', Validators.required]

          });

          for (var i in this.editarActividad.alumnos) {
            console.log(this.editarActividad.alumnos[i]); //this.selection.selected.push(this.editarActividad.alumnos[i].estudiante);
            //this.arryaAlumnos.push(new Alumnos(this.editarActividad.alumnos[i].estudiante, { x: 0, y: 0 }, this.editarActividad));
          }
          /*
          console.log(this.selection);*/
          //this.selection.selected=this.editarActividad.alumnos.

        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          var _this7 = this;

          this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.estudiantes);
          /*console.log("Prueba");
          console.log(this.dataSource);*/

          this.dataSource.data.forEach(function (row) {
            for (var i in _this7.editarActividad.alumnos) {
              if (_this7.editarActividad.alumnos[i].estudiante._id == row._id) {
                _this7.selection.select(row);

                _this7.actualizarr(row);

                _this7.arrayAlumnosAntiguos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["AlumnosClase"](_this7.editarActividad.alumnos[i].estudiante, _this7.editarActividad.alumnos[i].posicion));
              }
            } //this.actualizarr(row);


            console.log(_this7.arryaAlumnos);
          });
        }
      }, {
        key: "actualizarr",
        value: function actualizarr(item) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee21() {
            return regeneratorRuntime.wrap(function _callee21$(_context21) {
              while (1) {
                switch (_context21.prev = _context21.next) {
                  case 0:
                    this.arryaAlumnos.push(new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["AlumnosClase"](item, {
                      x: 0,
                      y: 0
                    }));
                    this.alumnosSeleccionados = this.arryaAlumnos;
                    this.ponerAlumnos;

                  case 3:
                  case "end":
                    return _context21.stop();
                }
              }
            }, _callee21, this);
          }));
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSource.filter = filterValue;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        }
        /** Whether the number of selected elements matches the total number of rows. */

      }, {
        key: "isAllSelected",
        value: function isAllSelected() {
          var numSelected = this.selection.selected.length;
          var numRows = this.dataSource.data.length;
          return numSelected === numRows;
        }
        /** Selects all rows if they are not all selected; otherwise clear selection. */

      }, {
        key: "masterToggle",
        value: function masterToggle() {
          var _this8 = this;

          this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(function (row) {
            _this8.selection.select(row); //this.arryaAlumnos.push(new Alumnos(row, { x: 0, y: 0 }, this.editarActividad))
            //this.alumnosSeleccionados = this.arryaAlumnos;


            _this8.ponerAlumnos();
          });
        }
      }, {
        key: "checkboxLabel",
        value: function checkboxLabel(row) {
          if (!row) {
            return "".concat(this.isAllSelected() ? 'select' : 'deselect', " all");
          }

          return "".concat(this.selection.isSelected(row) ? 'deselect' : 'select');
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          var posicion = $event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition(); //console.log(item);
          //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "comprobarSeleccionados",
        value: function comprobarSeleccionados() {
          return this.selection.selected.length > 0;
        }
      }, {
        key: "ponerAlumnos",
        value: function ponerAlumnos() {
          var listaID = {};
          var arrayListaID = [];
          this.arryaAlumnos = [];
          console.log("AA");
          var fila = 0;
          var columna = 0; // = this.selection.selected;

          /*for (let i = 0; i < this.selection.selected.length; i++) {
            this.arryaAlumnos.push(new AlumnosClase(this.selection.selected[i], { x: 0, y: 0 }, this.editarActividad));
          }*/

          for (var i = 0; i < this.selection.selected.length; i++) {
            listaID[this.selection.selected[i]._id] = new _Modelos_modelos__WEBPACK_IMPORTED_MODULE_3__["AlumnosClase"](this.selection.selected[i], {
              x: 0,
              y: 0
            });
          }

          for (var j = 0; j < this.arrayAlumnosAntiguos.length; j++) {
            //console.log(listaID[this.arrayAlumnosAntiguos[j].estudiante._id])
            if (listaID[this.arrayAlumnosAntiguos[j].estudiante._id] != null) {
              listaID[this.arrayAlumnosAntiguos[j].estudiante._id] = this.arrayAlumnosAntiguos[j];
            }
          }

          for (var id in listaID) {
            arrayListaID.push(listaID[id]);
          }

          this.alumnosSeleccionados = arrayListaID;
          /*this.actividadCreate.alumnos=arryaAlumnos;
          this.alumnosSeleccionados=this.selection.selected;*/

          console.log(this.alumnosSeleccionados);
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.editarActividad.alumnos = this.alumnosSeleccionados;
          var ju = this;
          console.log(this.editarActividad);
          $.ajax({
            type: 'POST',
            url: '/actualizarClase',
            data: JSON.stringify(ju.editarActividad),
            success: function success(data) {
              ju.profesor.actualizarClases();
              ju.profesor.cerrarModal();
            },
            contentType: 'application/json',
            dataType: 'json'
          }); //this.actividadEditada.emit(this.editarActividad);
        }
      }]);

      return EditarClaseComponent;
    }();

    EditarClaseComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_6__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarClaseComponent.prototype, "estudiantes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditarClaseComponent.prototype, "editarActividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], EditarClaseComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], EditarClaseComponent.prototype, "sort", void 0);
    EditarClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-editar-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./editar-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/editar-clase/editar-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./editar-clase.component.css */
      "./src/app/profesor/editar-clase/editar-clase.component.css")).default]
    })], EditarClaseComponent);
    /***/
  },

  /***/
  "./src/app/profesor/mensaje/mensaje.component.css":
  /*!********************************************************!*\
    !*** ./src/app/profesor/mensaje/mensaje.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorMensajeMensajeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL21lbnNhamUvbWVuc2FqZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/profesor/mensaje/mensaje.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/profesor/mensaje/mensaje.component.ts ***!
    \*******************************************************/

  /*! exports provided: MensajeComponent */

  /***/
  function srcAppProfesorMensajeMensajeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensajeComponent", function () {
      return MensajeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var MensajeComponent =
    /*#__PURE__*/
    function () {
      function MensajeComponent(profesor) {
        _classCallCheck(this, MensajeComponent);

        this.profesor = profesor;
      }

      _createClass(MensajeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "abrirActividad",
        value: function abrirActividad() {//this.profesor.abrirUltimaActividad();
        }
      }]);

      return MensajeComponent;
    }();

    MensajeComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_2__["ProfesorComponent"]
      }];
    };

    MensajeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mensaje',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mensaje.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/mensaje/mensaje.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mensaje.component.css */
      "./src/app/profesor/mensaje/mensaje.component.css")).default]
    })], MensajeComponent);
    /***/
  },

  /***/
  "./src/app/profesor/profesor.component.css":
  /*!*************************************************!*\
    !*** ./src/app/profesor/profesor.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorProfesorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The sidebar menu */\n\n.sidenav {\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    \n    z-index: 1; /* Stay on top */\n    top: auto;\n    bottom: auto; /* Stay at the top */\n    left: 0;\n    background-color: #4A7B9D; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    \n  }\n\n/* The navigation menu links */\n\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #ECFFB0;\n    display: block;\n  }\n\n/* When you mouse over the navigation links, change their color */\n\n.sidenav a:hover {\n    color: #9AA899;\n  }\n\n/* Style page content */\n\n.main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }\n\n.example-box {\n  width: 70px;\n  height: 70px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 0px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px;\n}\n\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\n}\n\n@-webkit-keyframes fadein {\n  from {bottom: 0; opacity: 0;} \n  to {bottom: 30px; opacity: 1;}\n}\n\n@keyframes fadein {\n  from {bottom: 0; opacity: 0;}\n  to {bottom: 30px; opacity: 1;}\n}\n\n@-webkit-keyframes fadeout {\n  from {bottom: 30px; opacity: 1;} \n  to {bottom: 0; opacity: 0;}\n}\n\n@keyframes fadeout {\n  from {bottom: 30px; opacity: 1;}\n  to {bottom: 0; opacity: 0;}\n}\n\n.btn-circle {\n  width: 200px;\n  height: 200px;\n  padding: 6px 0px;\n  border-radius: 200px;\n  text-align: center;\n  font-size: 23px;\n  line-height: 1.42857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvcHJvZmVzb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksWUFBWSxFQUFFLHVEQUF1RDs7SUFFckUsVUFBVSxFQUFFLGdCQUFnQjtJQUM1QixTQUFTO0lBQ1QsWUFBWSxFQUFFLG9CQUFvQjtJQUNsQyxPQUFPO0lBQ1AseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxrQkFBa0IsRUFBRSw4QkFBOEI7O0VBRXBEOztBQUVBLDhCQUE4Qjs7QUFDOUI7SUFDRSx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2QsY0FBYztFQUNoQjs7QUFFQSxpRUFBaUU7O0FBQ2pFO0lBQ0UsY0FBYztFQUNoQjs7QUFFQSx1QkFBdUI7O0FBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0lBQ3pELGlCQUFpQjtFQUNuQjs7QUFFQSxnSUFBZ0k7O0FBQ2hJO0lBQ0UsVUFBVSxpQkFBaUIsQ0FBQztJQUM1QixZQUFZLGVBQWUsQ0FBQztFQUM5Qjs7QUFHRjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osMkJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYiwrREFBdUQ7RUFBdkQsdURBQXVEO0VBQ3ZELCtHQUErRztBQUNqSDs7QUFFQTtFQUNFLHFIQUFxSDtBQUN2SDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0VBQ1QsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaURBQWlEO0VBQ2pELHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLE1BQU0sU0FBUyxFQUFFLFVBQVUsQ0FBQztFQUM1QixJQUFJLFlBQVksRUFBRSxVQUFVLENBQUM7QUFDL0I7O0FBRUE7RUFDRSxNQUFNLFNBQVMsRUFBRSxVQUFVLENBQUM7RUFDNUIsSUFBSSxZQUFZLEVBQUUsVUFBVSxDQUFDO0FBQy9COztBQUVBO0VBQ0UsTUFBTSxZQUFZLEVBQUUsVUFBVSxDQUFDO0VBQy9CLElBQUksU0FBUyxFQUFFLFVBQVUsQ0FBQztBQUM1Qjs7QUFFQTtFQUNFLE1BQU0sWUFBWSxFQUFFLFVBQVUsQ0FBQztFQUMvQixJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUM7QUFDNUI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci9wcm9mZXNvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVGhlIHNpZGViYXIgbWVudSAqL1xuXG4uc2lkZW5hdiB7XG4gICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsLWhlaWdodDogcmVtb3ZlIHRoaXMgaWYgeW91IHdhbnQgXCJhdXRvXCIgaGVpZ2h0ICovXG4gICAgXG4gICAgei1pbmRleDogMTsgLyogU3RheSBvbiB0b3AgKi9cbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiBhdXRvOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTdCOUQ7IC8qIEJsYWNrICovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgXG4gIH1cbiAgXG4gIC8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cbiAgLnNpZGVuYXYgYSB7XG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjRUNGRkIwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbiAgLnNpZGVuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICM5QUE4OTk7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xuICAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIFxuICAvKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGViYXIgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxuICB9XG5cblxuLmV4YW1wbGUtYm94IHtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGN1cnNvcjogbW92ZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3g6YWN0aXZlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uZXhhbXBsZS1ib3VuZGFyeSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgaGVpZ2h0OiA0MDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3JkZXI6IGRvdHRlZCAjY2NjIDJweDtcbn1cblxuXG4jc25hY2tiYXIge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1pbi13aWR0aDogMjUwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtMTI1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgcGFkZGluZzogMTZweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMzBweDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuXG4jc25hY2tiYXIuc2hvdyB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XG4gIGFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZWluIHtcbiAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO30gXG4gIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxufVxuXG5Aa2V5ZnJhbWVzIGZhZGVpbiB7XG4gIGZyb20ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG4gIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XG4gIGZyb20ge2JvdHRvbTogMzBweDsgb3BhY2l0eTogMTt9IFxuICB0byB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cbn1cblxuQGtleWZyYW1lcyBmYWRlb3V0IHtcbiAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cbiAgdG8ge2JvdHRvbTogMDsgb3BhY2l0eTogMDt9XG59XG5cbi5idG4tY2lyY2xlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBwYWRkaW5nOiA2cHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAyMDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profesor/profesor.component.ts":
  /*!************************************************!*\
    !*** ./src/app/profesor/profesor.component.ts ***!
    \************************************************/

  /*! exports provided: ProfesorComponent */

  /***/
  function srcAppProfesorProfesorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfesorComponent", function () {
      return ProfesorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _estudiante_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! .././estudiante.service */
    "./src/app/estudiante.service.ts");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./ver-actividad/ver-actividad.component */
    "./src/app/profesor/ver-actividad/ver-actividad.component.ts");
    /* harmony import */


    var _ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./ver-clase/ver-clase.component */
    "./src/app/profesor/ver-clase/ver-clase.component.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ProfesorComponent =
    /*#__PURE__*/
    function () {
      function ProfesorComponent(matDialog, estudiantes, _snackBar) {
        _classCallCheck(this, ProfesorComponent);

        this.matDialog = matDialog;
        this.estudiantes = estudiantes;
        this._snackBar = _snackBar;
        this.alumnoCreate = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
        this.iconUsuarios = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faUser"];
        this.iconClases = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faChalkboardTeacher"];
        this.iconActividades = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faBookOpen"];
        this.iconHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faHome"];
        this.actividadAbierta = false;
        this.editarAlumno = false;
        this.onSelectedAlumno = {
          _id: '',
          nombre: '',
          apellidos: '',
          clase: '',
          email: '',
          contrasena: ''
        };
        this.listaAlumnos = [];
        this.crearActividad = false;
        this.editarActividad = false;
        this.ActividadparaEditar = null;
        this.listaActividades = [];
        this.alumnosConectados = [];
        this.posicionDelAlumnoConectado = null;
        this.verActividad = false;
        this.actividadSelected = null;
        this.gestionAlumnos = false;
        this.gestionActividades = false;
        this.gestionClases = false;
        this.gestionHome = true;
        this.listaClases = [];
        this.crearClase = false;
        this.editarClase = false;
        this.verClase = false;
        this.ClaseparaEditar = null;
        this.ultimaActividadCreada = null;
        this.crearEstudiante = false;
        this.editarEstudiante = false; //Tabla de estudiantes

        this.displayedColumnsEstudiantes = ['nombre', 'apellidos', 'clase', 'acciones']; //Tabla de actividades

        this.displayedColumnsActividades = ['nombre', 'profesor', 'clase', 'estado', 'acciones', 'editarborrar']; //Tabla de clases

        this.displayedColumnsClases = ['nombre', 'profesor', 'accion1', 'accion2', 'editarborrar'];

        this.soyProfesor = function () {
          this.socket.emit('soyProfesor');
        };

        this.abroActividad = function (actividad) {
          this.socket.emit('abrirActividad', actividad);
        };

        this.crearActividadLista = function (actividad) {
          this.socket.emit('crearActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " está lista.");
        };

        this.borrarActividadLista = function (actividad) {
          this.socket.emit('borrarActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " YA NO está lista.");
        };

        this.listoParaRecibirDatos = function (actividad) {
          this.socket.emit('listoParaRecibirDatos', actividad);
        };

        this.listoParaNoRecibirDatos = function (actividad) {
          this.socket.emit('listoParaNoRecibirDatos', actividad);
        };

        this.lanzarSocketSrv = function () {
          var cli = this;
          this.socket.on('connect', function () {
            console.log("Conectado al servidor de WebSockets");
          });
          this.socket.on('actividadAnadida', function (res) {
            console.log("Se ha añadido una actividad a las listas: " + res._id);
          });
          this.socket.on('actividadBorrada', function (res) {
            console.log("Se ha borrado una actividad a las listas: " + res._id);
          });
          this.socket.on('seHaConectado', function (res) {
            if (!cli.esta(res)) {
              cli.alumnosConectados.push(res);
            }
          });
          this.socket.on('seHaDesconectado', function (res) {
            if (cli.esta(res)) {
              cli.alumnosConectados.splice(cli.posicionDelAlumnoConectado, 1);
            }
          });
          this.socket.on('recepcionDatos', function (datos) {
            //console.log(datos);
            $('#' + datos.id_item + '').css("background-color", datos.color);
            cli.agregarDatosActividad(datos); //console.log(datos.pulsaciones);
          });
          /*
          this.socket.on('partidaCreada',function(partida){
              console.log("partida creada:",partida);
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('partidas',function(partidas){
              mostrarListaPartidas(partidas);
          });
          this.socket.on('unido',function(partida){
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('nuevoJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('saliste',function(){
              mostrarCrearPartida(cli.nick);
              borrarCanvas();
          });
          this.socket.on('saleJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('otropreparado',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('aJugar',function(data){
              cli.jugador=data.jugadores[cli.nick];
              cli.rival=cli.obtenerRival(data.jugadores);
              mostrarCanvas(data.numJugadores);
          });
          this.socket.on('anotado',function(){ //function(resultados)
              //mostrarListaResultados(resultados)
              console.log("Resultado anotado");
          });
          this.socket.on('finPartida',function(){
              console.log("Fin de la partida");
              alert("Fin de la partida");
              cli.salir();
          });
          this.socket.on("sigueVivo",function(){
              console.log("sigue vivo");
              cli.spriteLocal.volverAInicio();
          });
          this.socket.on("mover",function(operacion,posicion){
              if (cli.spriteRival){
                  cli.spriteRival.mover(operacion,posicion);
              }
          });*/
        };
      }

      _createClass(ProfesorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee22() {
            var ju;
            return regeneratorRuntime.wrap(function _callee22$(_context22) {
              while (1) {
                switch (_context22.prev = _context22.next) {
                  case 0:
                    //this.socket = new ClienteWS('profesor');
                    //this.socket.ini();
                    this.ini(); ///

                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context22.next = 4;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                      ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
                      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                      ju.dataSourceEstudiantes.sort = ju.sortE;
                    });

                  case 4:
                    _context22.next = 6;
                    return $.getJSON("/verActividades", function (data) {
                      //console.log(data);
                      ju.listaActividades = data;
                      ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades);
                      ju.dataSourceActividades.paginator = ju.paginatorA;
                      ju.dataSourceActividades.sort = ju.sortA;
                    });

                  case 6:
                    _context22.next = 8;
                    return $.getJSON("/verClases", function (data) {
                      //console.log(data);
                      ju.listaClases = data;
                      ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases);
                      ju.dataSourceClases.paginator = ju.paginatorC;
                      ju.dataSourceClases.sort = ju.sortC;
                    });

                  case 8:
                  case "end":
                    return _context22.stop();
                }
              }
            }, _callee22, this);
          }));
        }
        /*ngOnChanges() {
          this.dataSourceEstudiantes = new MatTableDataSource(this.listaAlumnos);
        }*/

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee23() {
            var ju;
            return regeneratorRuntime.wrap(function _callee23$(_context23) {
              while (1) {
                switch (_context23.prev = _context23.next) {
                  case 0:
                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context23.next = 3;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                      ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
                      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                      ju.dataSourceEstudiantes.sort = ju.sortE;
                    });

                  case 3:
                  case "end":
                    return _context23.stop();
                }
              }
            }, _callee23, this);
          }));
        }
      }, {
        key: "applyFilterE",
        value: function applyFilterE(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceEstudiantes.filter = filterValue;
        }
      }, {
        key: "applyFilterC",
        value: function applyFilterC(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceClases.filter = filterValue;
        }
      }, {
        key: "applyFilterA",
        value: function applyFilterA(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceActividades.filter = filterValue;
        } //anadirAlumno(nombre:string,apellidos:string,clase:string,email:string,contrasena:string) {

      }, {
        key: "anadirAlumno",
        value: function anadirAlumno() {
          //this.listaAlumnos.push(new Alumno(this.alumnoCreate.nombre, this.alumnoCreate.apellidos, this.alumnoCreate.clase, this.alumnoCreate.email, this.alumnoCreate.contrasena));
          var ju = this; //console.log(this.listaAlumnos);

          $.ajax({
            type: 'POST',
            url: '/registrarEstudiante',
            data: JSON.stringify(this.alumnoCreate),
            success: function success(data) {
              //console.log(data);
              //ju.alumnoCreate._id = data._id;
              //ju.listaAlumnos.push(this.alumnoCreate);
              $.getJSON("/verEstudiantes", function (data) {
                //console.log(data);
                ju.listaAlumnos = data;
                ju.limpiar();
                ju.editarAlumno = false;
                console.log(ju.listaAlumnos);
                ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
              });
              ju.crearEstudiante = false;
            },
            contentType: 'application/json',
            dataType: 'json'
          });
          /*ju.listaAlumnos.push(this.alumnoCreate);
          ju.limpiar();
          ju.editarAlumno = false;*/
        }
      }, {
        key: "actualizarAlumno",
        value: function actualizarAlumno() {
          var ju = this;
          $.ajax({
            type: 'PUT',
            url: '/actualizarEstudiante',
            data: JSON.stringify(ju.onSelectedAlumno),
            success: function success(data) {
              $.getJSON("/verEstudiantes", function (data) {
                ju.listaAlumnos = data;
                ju.limpiar();
                ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
                ju.editarAlumno = false;
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "limpiar",
        value: function limpiar() {
          if (this.editarAlumno) {
            this.onSelectedAlumno = {
              _id: '',
              nombre: '',
              apellidos: '',
              clase: '',
              email: '',
              contrasena: ''
            };
          } else {
            this.alumnoCreate = {
              _id: '',
              nombre: '',
              apellidos: '',
              clase: '',
              email: '',
              contrasena: ''
            };
          }
        }
      }, {
        key: "editar",
        value: function editar(item) {
          this.editarAlumno = true;
          this.onSelectedAlumno = item;
        }
      }, {
        key: "borrar",
        value: function borrar(item) {
          var ju = this;
          $.ajax({
            type: 'DELETE',
            url: '/eliminarEstudiante',
            data: JSON.stringify(item),
            success: function success(data) {
              console.log("Estudiante eliminado");
              $.getJSON("/verEstudiantes", function (data) {
                ju.listaAlumnos = data;
                ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
                ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                ju.dataSourceEstudiantes.sort = ju.sortE;
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "abrirActividadActual",
        value: function abrirActividadActual() {
          //this.actividadAbierta = true;
          this.gestionHome = true;
          this.gestionActividades = false;
          this.gestionAlumnos = false;
          this.gestionClases = false;
        }
      }, {
        key: "abrirAlumnos",
        value: function abrirAlumnos() {
          var ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

          try {
            $.getJSON("/verEstudiantes", function (data) {
              //console.log(data);
              ju.listaAlumnos = data;
              ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
              ju.dataSourceEstudiantes.paginator = ju.paginatorE;
              ju.dataSourceEstudiantes.sort = ju.sortE;
            });
          } catch (e) {}

          this.gestionHome = false;
          this.gestionActividades = false;
          this.gestionAlumnos = true;
          this.gestionClases = false;
        }
      }, {
        key: "abrirActividades",
        value: function abrirActividades() {
          var ju = this;

          try {
            $.getJSON("/verActividades", function (data) {
              //console.log(data);
              ju.listaActividades = data;
              ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades);
              ju.dataSourceActividades.paginator = ju.paginatorA;
              ju.dataSourceActividades.sort = ju.sortA;
            });
          } catch (e) {}

          this.gestionHome = false;
          this.gestionActividades = true;
          this.gestionAlumnos = false;
          this.gestionClases = false; //this.openDialog()
        }
      }, {
        key: "abrirCrearEstudiantes",
        value: function abrirCrearEstudiantes() {
          this.editarAlumno = false;
          this.crearEstudiante = true;
        }
      }, {
        key: "cerrarCrearEstudiantes",
        value: function cerrarCrearEstudiantes() {
          this.editarAlumno = false;
          this.crearEstudiante = false;
        }
      }, {
        key: "abrirClases",
        value: function abrirClases() {
          var ju = this;

          try {
            $.getJSON("/verClases", function (data) {
              //console.log(data);
              ju.listaClases = data;
              ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases);
              ju.dataSourceClases.paginator = ju.paginatorC;
              ju.dataSourceClases.sort = ju.sortC;
            });
          } catch (e) {}

          this.verClase = false;
          /*this.gestionClases = true;
          this.gestionAlumnos = false;
          this.verActividad = false;
          this.gestionActividades = false;*/

          this.gestionHome = false;
          this.gestionActividades = false;
          this.gestionAlumnos = false;
          this.gestionClases = true;
        }
      }, {
        key: "abrirClase",
        value: function abrirClase(clase) {
          this.claseSelected = clase;
          this.verClase = true;
        }
      }, {
        key: "abrirCrearActividad",
        value: function abrirCrearActividad() {
          this.crearActividad = true;
        }
      }, {
        key: "abrirCrearClase",
        value: function abrirCrearClase() {
          this.crearClase = true;
        }
      }, {
        key: "cerrarModal",
        value: function cerrarModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee24() {
            var ju;
            return regeneratorRuntime.wrap(function _callee24$(_context24) {
              while (1) {
                switch (_context24.prev = _context24.next) {
                  case 0:
                    this.crearActividad = false;
                    this.crearClase = false;
                    this.editarActividad = false;
                    this.editarClase = false;
                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context24.next = 7;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                      ju.dataSourceEstudiantes = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaAlumnos);
                      ju.dataSourceEstudiantes.paginator = ju.paginatorE;
                      ju.dataSourceEstudiantes.sort = ju.sortE;
                    });

                  case 7:
                    _context24.next = 9;
                    return $.getJSON("/verActividades", function (data) {
                      //console.log(data);
                      ju.listaActividades = data;
                      ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades);
                      ju.dataSourceActividades.paginator = ju.paginatorA;
                      ju.dataSourceActividades.sort = ju.sortA;
                    });

                  case 9:
                    _context24.next = 11;
                    return $.getJSON("/verClases", function (data) {
                      //console.log(data);
                      ju.listaClases = data;
                      ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases);
                      ju.dataSourceClases.paginator = ju.paginatorC;
                      ju.dataSourceClases.sort = ju.sortC;
                    });

                  case 11:
                  case "end":
                    return _context24.stop();
                }
              }
            }, _callee24, this);
          }));
        }
      }, {
        key: "guardarActividad",
        value: function guardarActividad(actividad) {
          //this.actividadCreada = actividad;
          var ju = this; //console.log(actividad);

          $.ajax({
            type: 'POST',
            url: '/registrarActividad',
            data: JSON.stringify(actividad),
            success: function success(data) {
              ju.ultimaActividadCreada = data;
              /*$.getJSON("/verEstudiantes", function (data) {
                //console.log(data);
                ju.listaAlumnos = data;
                ju.limpiar();
                ju.editarAlumno = false;
                console.log(ju.listaAlumnos);
              });*/

              $.getJSON("/verActividades", function (data) {
                //console.log(data);
                ju.listaActividades = data;
                ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades);
                ju.dataSourceActividades.paginator = ju.paginatorA;
                ju.dataSourceActividades.sort = ju.sortA;
                ju.crearActividad = false;
                console.log(ju.listaActividades);
              });
              ju.menActividadCreada(); //ju.listaActividades.push(actividad);
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "actualizarActividad",
        value: function actualizarActividad(actividad) {
          var ju = this;
          console.log(actividad);
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(actividad),
            success: function success(data) {
              //this.actividad=data;
              ju.ultimaActividadCreada = data;
              $.getJSON("/verActividades", function (data) {
                //console.log(data);
                ju.listaActividades = data;
                ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades);
                ju.dataSourceActividades.paginator = ju.paginatorA;
                ju.dataSourceActividades.sort = ju.sortA;
                ju.editarActividad = false;
                console.log(ju.listaActividades);
              });
              ju.menActividadEditada();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "actualizarClases",
        value: function actualizarClases() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee25() {
            var ju;
            return regeneratorRuntime.wrap(function _callee25$(_context25) {
              while (1) {
                switch (_context25.prev = _context25.next) {
                  case 0:
                    this.crearClase = false;
                    this.editarClase = false;
                    ju = this;
                    _context25.next = 5;
                    return $.getJSON("/verClases", function (data) {
                      //console.log(data);
                      ju.listaClases = data;
                      ju.dataSourceClases = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaClases);
                      ju.dataSourceClases.paginator = ju.paginatorC;
                      ju.dataSourceClases.sort = ju.sortC;
                    });

                  case 5:
                  case "end":
                    return _context25.stop();
                }
              }
            }, _callee25, this);
          }));
        }
      }, {
        key: "editarA",
        value: function editarA(act) {
          this.editarActividad = true;
          this.ActividadparaEditar = act;
        }
      }, {
        key: "editarC",
        value: function editarC(clase) {
          this.editarClase = true;
          this.ClaseparaEditar = clase;
        }
      }, {
        key: "agregarDatosActividad",
        value: function agregarDatosActividad(datos) {
          this.verActividadComp.insertarDatos(datos); //this.actividadSelected.alumnos
        }
      }, {
        key: "borrarA",
        value: function borrarA(act) {
          var ju = this;
          $.ajax({
            type: 'DELETE',
            url: '/eliminarActividad',
            data: JSON.stringify(act),
            success: function success(data) {
              console.log("Actividad eliminado");
              $.getJSON("/verActividades", function (data) {
                ju.listaActividades = data;
                ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatTableDataSource"](ju.listaActividades);
                ju.dataSourceActividades.paginator = ju.paginatorA;
                ju.dataSourceActividades.sort = ju.sortA;
                ju.menActividadBorrada();
              });
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "borrarC",
        value: function borrarC(clase) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee26() {
            var ju;
            return regeneratorRuntime.wrap(function _callee26$(_context26) {
              while (1) {
                switch (_context26.prev = _context26.next) {
                  case 0:
                    ju = this;
                    _context26.next = 3;
                    return $.ajax({
                      type: 'DELETE',
                      url: '/eliminarClase',
                      data: JSON.stringify(clase),
                      success: function success(data) {
                        console.log(data);
                        console.log("Clase eliminada");
                        /*$.getJSON("/verClases", function (data) {
                          //console.log(data);
                          ju.listaClases = data;
                        });*/

                        ju.actualizarClases();
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 3:
                  case "end":
                    return _context26.stop();
                }
              }
            }, _callee26, this);
          }));
        }
      }, {
        key: "abrirActividad",
        value: function abrirActividad(actividad) {
          this.actividadAbierta = true;
          this.verActividad = true;
          this.actividadSelected = actividad;
          this.crearActividadLista(actividad);
          this.abroActividad(actividad);
          this.abrirActividadActual();
        }
      }, {
        key: "cerrarActividad",
        value: function cerrarActividad(cerrar) {
          //console.log(this.actividadSelected);
          this.actividadAbierta = false;
          this.borrarActividadLista(this.actividadSelected);
          this.verActividad = false;
          this.actividadSelected = null;
          this.claseSelected = null;
          this.abrirActividades(); //this.alumnosConectados.length=0
          //this.alumnosConectados = [];
        }
      }, {
        key: "cerrarClase",
        value: function cerrarClase() {
          this.verClase = false;
          this.actualizarClases();
        }
      }, {
        key: "esta",
        value: function esta(estudiante) {
          for (var i = 0; i < this.alumnosConectados.length; i++) {
            if (this.alumnosConectados[i]._id == estudiante._id) {
              this.posicionDelAlumnoConectado = i;
              return true;
            }
          }

          return false;
        }
      }, {
        key: "crearActividadAsociada",
        value: function crearActividadAsociada(clase) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee27() {
            var ju, actividadCreate, arrayAlumnos, i;
            return regeneratorRuntime.wrap(function _callee27$(_context27) {
              while (1) {
                switch (_context27.prev = _context27.next) {
                  case 0:
                    ju = this;
                    actividadCreate = {
                      nombre: '',
                      profesor: '',
                      fecha: '',
                      alumnos: [],
                      estado: 'Creada',
                      resumen: {
                        alegria: [],
                        asco: [],
                        miedo: [],
                        sorpresa: [],
                        tristeza: [],
                        ira: [],
                        pulsaciones: [],
                        tiempo: [],
                        distraido: [],
                        concentrado: [],
                        frustrado: [],
                        motivado: []
                      },
                      clase: {
                        _id: clase._id,
                        nombre: clase.nombre
                      }
                    };
                    actividadCreate.nombre = clase.nombre + ' ' + moment__WEBPACK_IMPORTED_MODULE_7__().format('LLLL');
                    actividadCreate.profesor = clase.profesor;
                    actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_7__().format('LLLL');
                    arrayAlumnos = [];

                    for (i = 0; i < clase.alumnos.length; i++) {
                      arrayAlumnos.push({
                        estudiante: clase.alumnos[i].estudiante,
                        id_item: '',
                        posicion: clase.alumnos[i].posicion,
                        datos: {
                          alegria: [],
                          asco: [],
                          miedo: [],
                          sorpresa: [],
                          tristeza: [],
                          ira: [],
                          pulsaciones: [],
                          tiempo: [],
                          distraido: [],
                          concentrado: [],
                          frustrado: [],
                          motivado: []
                        }
                      });
                    }

                    actividadCreate.alumnos = arrayAlumnos;
                    _context27.next = 10;
                    return $.ajax({
                      type: 'POST',
                      url: '/agregarActividadEnClase',
                      data: JSON.stringify({
                        clase: clase,
                        act: actividadCreate
                      }),
                      success: function success(data) {
                        //ju.clase=data;
                        ju.ultimaActividadCreada = data;
                        console.log("Clase Actualizada");
                        console.log(data);
                        ju.actualizarClases(); //ju.actualizar();

                        ju.menActividadCreada(); //abrirActividad
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 10:
                  case "end":
                    return _context27.stop();
                }
              }
            }, _callee27, this);
          }));
        }
      }, {
        key: "menActividadCreada",
        value: function menActividadCreada() {
          var _this9 = this;

          var men = this._snackBar.open('Actividad Creada', 'Abrir', {
            duration: 5000
          });

          men.onAction().subscribe(function () {
            _this9.gestionClases = false;
            _this9.gestionActividades = true;
            _this9.crearClase = false;
            _this9.editarClase = false;
            _this9.verClase = false;

            _this9.abrirActividad(_this9.ultimaActividadCreada);
          });
        }
      }, {
        key: "menActividadEditada",
        value: function menActividadEditada() {
          var _this10 = this;

          var men = this._snackBar.open('Actividad Editada', 'Abrir', {
            duration: 5000
          });

          men.onAction().subscribe(function () {
            _this10.gestionClases = false;
            _this10.gestionActividades = true;
            _this10.crearClase = false;
            _this10.editarClase = false;
            _this10.verClase = false;

            _this10.abrirActividad(_this10.ultimaActividadCreada);
          });
        }
      }, {
        key: "menActividadBorrada",
        value: function menActividadBorrada() {
          var men = this._snackBar.open('Actividad Borrada', 'Cerrar', {
            duration: 1000
          });
        } //Gestion de los WebSockets

      }, {
        key: "ini",
        value: function ini() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__["connect"]();
          this.lanzarSocketSrv();
          this.soyProfesor();
        }
      }]);

      return ProfesorComponent;
    }();

    ProfesorComponent.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _estudiante_service__WEBPACK_IMPORTED_MODULE_3__["EstudianteService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ver_actividad_ver_actividad_component__WEBPACK_IMPORTED_MODULE_5__["VerActividadComponent"], {
      static: false
    })], ProfesorComponent.prototype, "verActividadComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ver_clase_ver_clase_component__WEBPACK_IMPORTED_MODULE_6__["VerClaseComponent"], {
      static: false
    })], ProfesorComponent.prototype, "verClaseComp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorE", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortE", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatPaginator"], null)], ProfesorComponent.prototype, "paginatorC", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_10__["MatSort"], null)], ProfesorComponent.prototype, "sortC", void 0);
    ProfesorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profesor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profesor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/profesor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profesor.component.css */
      "./src/app/profesor/profesor.component.css")).default]
    })], ProfesorComponent);
    /***/
  },

  /***/
  "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/profesor/sidenav-profesor/sidenav-profesor.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorSidenavProfesorSidenavProfesorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* The sidebar menu */\n.sidenav {\n    height: 100%; /* Full-height: remove this if you want \"auto\" height */\n    position: fixed; /* Fixed Sidebar (stay in place on scroll) */\n    z-index: 1; /* Stay on top */\n    top: auto; /* Stay at the top */\n    left: 0;\n    background-color: #4A7B9D; /* Black */\n    overflow-x: hidden; /* Disable horizontal scroll */\n    padding-top: 20px;\n  }\n/* The navigation menu links */\n.sidenav a {\n    padding: 6px 8px 6px 16px;\n    text-decoration: none;\n    font-size: 25px;\n    color: #ECFFB0;\n    display: block;\n  }\n/* When you mouse over the navigation links, change their color */\n.sidenav a:hover {\n    color: #9AA899;\n  }\n/* Style page content */\n.main {\n    margin-left: 160px; /* Same as the width of the sidebar */\n    padding: 0px 10px;\n  }\n/* On smaller screens, where height is less than 450px, change the style of the sidebar (less padding and a smaller font size) */\n@media screen and (max-height: 450px) {\n    .sidenav {padding-top: 15px;}\n    .sidenav a {font-size: 18px;}\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3Ivc2lkZW5hdi1wcm9mZXNvci9zaWRlbmF2LXByb2Zlc29yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUJBQXFCO0FBQ3JCO0lBQ0ksWUFBWSxFQUFFLHVEQUF1RDtJQUNyRSxlQUFlLEVBQUUsNENBQTRDO0lBQzdELFVBQVUsRUFBRSxnQkFBZ0I7SUFDNUIsU0FBUyxFQUFFLG9CQUFvQjtJQUMvQixPQUFPO0lBQ1AseUJBQXlCLEVBQUUsVUFBVTtJQUNyQyxrQkFBa0IsRUFBRSw4QkFBOEI7SUFDbEQsaUJBQWlCO0VBQ25CO0FBRUEsOEJBQThCO0FBQzlCO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7RUFDaEI7QUFFQSxpRUFBaUU7QUFDakU7SUFDRSxjQUFjO0VBQ2hCO0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0Usa0JBQWtCLEVBQUUscUNBQXFDO0lBQ3pELGlCQUFpQjtFQUNuQjtBQUVBLGdJQUFnSTtBQUNoSTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci9zaWRlbmF2LXByb2Zlc29yL3NpZGVuYXYtcHJvZmVzb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRoZSBzaWRlYmFyIG1lbnUgKi9cbi5zaWRlbmF2IHtcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEZ1bGwtaGVpZ2h0OiByZW1vdmUgdGhpcyBpZiB5b3Ugd2FudCBcImF1dG9cIiBoZWlnaHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIEZpeGVkIFNpZGViYXIgKHN0YXkgaW4gcGxhY2Ugb24gc2Nyb2xsKSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFN0YXkgb24gdG9wICovXG4gICAgdG9wOiBhdXRvOyAvKiBTdGF5IGF0IHRoZSB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QTdCOUQ7IC8qIEJsYWNrICovXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBEaXNhYmxlIGhvcml6b250YWwgc2Nyb2xsICovXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG4gIH1cbiAgXG4gIC8qIFRoZSBuYXZpZ2F0aW9uIG1lbnUgbGlua3MgKi9cbiAgLnNpZGVuYXYgYSB7XG4gICAgcGFkZGluZzogNnB4IDhweCA2cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGNvbG9yOiAjRUNGRkIwO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKiBXaGVuIHlvdSBtb3VzZSBvdmVyIHRoZSBuYXZpZ2F0aW9uIGxpbmtzLCBjaGFuZ2UgdGhlaXIgY29sb3IgKi9cbiAgLnNpZGVuYXYgYTpob3ZlciB7XG4gICAgY29sb3I6ICM5QUE4OTk7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHBhZ2UgY29udGVudCAqL1xuICAubWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDE2MHB4OyAvKiBTYW1lIGFzIHRoZSB3aWR0aCBvZiB0aGUgc2lkZWJhciAqL1xuICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICB9XG4gIFxuICAvKiBPbiBzbWFsbGVyIHNjcmVlbnMsIHdoZXJlIGhlaWdodCBpcyBsZXNzIHRoYW4gNDUwcHgsIGNoYW5nZSB0aGUgc3R5bGUgb2YgdGhlIHNpZGViYXIgKGxlc3MgcGFkZGluZyBhbmQgYSBzbWFsbGVyIGZvbnQgc2l6ZSkgKi9cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cbiAgICAuc2lkZW5hdiBhIHtmb250LXNpemU6IDE4cHg7fVxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/profesor/sidenav-profesor/sidenav-profesor.component.ts ***!
    \*************************************************************************/

  /*! exports provided: SidenavProfesorComponent */

  /***/
  function srcAppProfesorSidenavProfesorSidenavProfesorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavProfesorComponent", function () {
      return SidenavProfesorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidenavProfesorComponent =
    /*#__PURE__*/
    function () {
      function SidenavProfesorComponent() {
        _classCallCheck(this, SidenavProfesorComponent);

        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) {
          return h.test(window.location.host);
        });
      }

      _createClass(SidenavProfesorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidenavProfesorComponent;
    }();

    SidenavProfesorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidenav-profesor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav-profesor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/sidenav-profesor/sidenav-profesor.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav-profesor.component.css */
      "./src/app/profesor/sidenav-profesor/sidenav-profesor.component.css")).default]
    })], SidenavProfesorComponent);
    /***/
  },

  /***/
  "./src/app/profesor/ver-actividad/ver-actividad.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/profesor/ver-actividad/ver-actividad.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorVerActividadVerActividadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-box {\n  width: 70px;\n  height: 70px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: -webkit-inline-box;\n  display: inline-flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 0px;\n  position: relative;\n  z-index: 1;\n  box-sizing: border-box;\n  padding: 10px;\n  -webkit-transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-boundary {\n  width: 400px;\n  height: 400px;\n  max-width: 100%;\n  border: dotted #ccc 2px;\n}\n\n.btn-circle2 {\n  width: 50px;\n  height: 50px;\n  padding: 6px 0px;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 15px;\n  line-height: 1.42857;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmVzb3IvdmVyLWFjdGl2aWRhZC92ZXItYWN0aXZpZGFkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsWUFBWTtFQUNaLDJCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsK0RBQXVEO0VBQXZELHVEQUF1RDtFQUN2RCwrR0FBK0c7QUFDakg7O0FBRUE7RUFDRSxxSEFBcUg7QUFDdkg7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wcm9mZXNvci92ZXItYWN0aXZpZGFkL3Zlci1hY3RpdmlkYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWJveCB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBjdXJzb3I6IG1vdmU7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1yaWdodDogMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmV4YW1wbGUtYm94OmFjdGl2ZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmV4YW1wbGUtYm91bmRhcnkge1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogNDAwcHg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBkb3R0ZWQgI2NjYyAycHg7XG59XG5cbi5idG4tY2lyY2xlMiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHBhZGRpbmc6IDZweCAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBsaW5lLWhlaWdodDogMS40Mjg1Nztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/profesor/ver-actividad/ver-actividad.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/profesor/ver-actividad/ver-actividad.component.ts ***!
    \*******************************************************************/

  /*! exports provided: VerActividadComponent */

  /***/
  function srcAppProfesorVerActividadVerActividadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerActividadComponent", function () {
      return VerActividadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../profesor/profesor.component */
    "./src/app/profesor/profesor.component.ts");

    var VerActividadComponent =
    /*#__PURE__*/
    function () {
      //@ViewChild(ProfesorComponent,{static: false}) profesor:ProfesorComponent;
      function VerActividadComponent(profesor) {
        _classCallCheck(this, VerActividadComponent);

        this.profesor = profesor;
        this.ColorSad = 'rgba(81,81,255,0.4)'; //Color de la tristeza Correcto

        this.alumnos = [];
        this.alumnosSelect = [];
        this.usuariosConectados = [];
        this.usuariosTotales = 0;
        this.porUsuariosConectados = 0;
        this.dataGrafConectados = [0, 0];
        this.numeroAlumnos = 0;
        this.numAlumnosConectados = 0;
        this.numAlumnosDesconectados = 0;
        this.numAlumnosTotales = 0;
        this.vistaGeneral = true;
        this.vistaMapaDeLaClase = false;
        this.estados = [{
          nombre: 'alegria',
          checked: true
        }, {
          nombre: 'asco',
          checked: true
        }, {
          nombre: 'miedo',
          checked: false
        }, {
          nombre: 'sorpresa',
          checked: false
        }, {
          nombre: 'tristeza',
          checked: false
        }, {
          nombre: 'ira',
          checked: false
        }, {
          nombre: 'pulsaciones',
          checked: false
        }, {
          nombre: 'distraido',
          checked: false
        }, {
          nombre: 'concentrado',
          checked: false
        }, {
          nombre: 'frustrado',
          checked: false
        }, {
          nombre: 'motivado',
          checked: false
        }];
        this.resumen = {
          alegria: 0,
          asco: 0,
          miedo: 0,
          sorpresa: 0,
          tristeza: 0,
          ira: 0,
          distraido: 0,
          concentrado: 0,
          frustrado: 0,
          motivado: 0,
          pulsaciones: 0
        };
        this.numPulsaciones = 0;
        this.estadoSeleccionado = 'Estado';
        this.alumnoSeleccionado = 'Media de la clase';
        this.alumnoSeleccionadoAlumno = false;
        this.objAlumnoSeleccionado = null;
        this.intervaloResumen = null; //alumnosConectados=0;

        this.alumnosDesconectados = 0; //Datos de las Graficas 

        this.graficaLineal = null;
        this.dataLinealesSeleccionados = null;
        this.configuracionGraficaLineal = {
          type: 'line',
          data: {
            datasets: [{
              label: this.estadoSeleccionado,
              backgroundColor: this.ColorSad,
              borderColor: this.ColorSad,
              fill: false,
              data: this.dataLinealesSeleccionados
            }]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: this.estadoSeleccionado
            },
            scales: {
              xAxes: [{
                type: 'time',
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Tiempo'
                },
                ticks: {
                  major: {
                    fontStyle: 'bold',
                    fontColor: '#FF0000'
                  }
                }
              }],
              yAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Porcentaje'
                }
              }]
            }
          }
        };
        this.graficaResumen = null;
        this.datosResumenSeleccionados = [1, 1, 1, 1, 1, 1];
        this.configuracionGraficaResumen = {};
        this.botonCreadaCargando = false;
        this.botonFinalizadaCargando = false;
        this.botonReanudarCargando = false; //console.log(this.usuariosConectados);

        this.comprobarDatos();
      }

      _createClass(VerActividadComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          if (this.actividad.estado == 'Comenzada') {
            this.intervaloResumen = setInterval(function (async) {
              _this11.insertarResumen();
            }, 20000);
          }
        }
      }, {
        key: "cargarGraficas",
        value: function cargarGraficas() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee28() {
            var _i2, i;

            return regeneratorRuntime.wrap(function _callee28$(_context28) {
              while (1) {
                switch (_context28.prev = _context28.next) {
                  case 0:
                    _context28.next = 2;
                    return true;

                  case 2:
                    this.vistaGeneral = _context28.sent;
                    this.alumnos = this.actividad.alumnos;
                    this.alumnosSelect.length = 0;
                    this.alumnosSelect.push({
                      nombre: 'Media de todos',
                      id: '',
                      checked: false
                    });

                    for (_i2 = 0; _i2 < this.actividad.alumnos.length; _i2++) {
                      this.alumnosSelect.push({
                        nombre: this.actividad.alumnos[_i2].estudiante.nombre,
                        id: this.actividad.alumnos[_i2].estudiante._id,
                        checked: false
                      });
                    } //this.actividad.estado="Comenzada";


                    for (i in this.actividad.alumnos) {
                      //this.usuariosTotales++;
                      this.numAlumnosTotales++;
                    } //console.log("Alumnos Totales: " + this.numAlumnosTotales);


                    this.numAlumnosDesconectados = this.numAlumnosTotales - this.numAlumnosConectados;
                    this.dataGrafConectados = [this.aluConectados.length, this.numAlumnosDesconectados]; //console.log(this.usuariosTotales);

                    this.configUsersConectados = {
                      type: 'doughnut',
                      data: {
                        datasets: [{
                          data: this.dataGrafConectados,
                          backgroundColor: ['rgba(133, 193, 233,1)', 'rgba(0,0,0,0.1)']
                        }],
                        labels: ['Conectado', 'Desconectado']
                      },
                      options: {
                        responsive: true,
                        cutoutPercentage: 50,
                        rotation: 1 * Math.PI,
                        circumference: 1 * Math.PI
                      }
                    };
                    this.porUsuariosConectados = this.numAlumnosConectados / this.numAlumnosTotales * 100; //console.log("Porcentaje:")
                    //console.log(this.numAlumnosConectados);
                    //console.log(this.usuariosTotales);

                    _context28.next = 14;
                    return new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('usersConectados', this.configUsersConectados);

                  case 14:
                    this.usersConectadosGraf = _context28.sent;
                    //Grafica Lineal 

                    /*this.configuracionGraficaLineal = {
                      type: 'line',
                      data: {
                        datasets: [
                          {
                            label: this.estadoSeleccionado,
                            backgroundColor: this.ColorSad,
                            borderColor: this.ColorSad,
                            fill: false,
                            data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
                          }
                        ]
                               },
                      options: {
                        responsive: true,
                        title: {
                          display: true,
                          text: this.estadoSeleccionado,
                        },
                        scales: {
                          xAxes: [{
                            type: 'time',
                            display: true,
                            scaleLabel: {
                              display: true,
                              labelString: 'Tiempo'
                            },
                            ticks: {
                              major: {
                                fontStyle: 'bold',
                                fontColor: '#FF0000'
                              }
                            }
                          }],
                          yAxes: [{
                            display: true,
                            scaleLabel: {
                              display: true,
                              labelString: 'Porcentaje'
                            }
                          }]
                        }
                      }
                    };
                    this.graficaLineal = await new Chart('graficaLineal', this.configuracionGraficaLineal);
                    console.log("cargar graficas");*/
                    this.actualizarGraficaLineal();

                  case 16:
                  case "end":
                    return _context28.stop();
                }
              }
            }, _callee28, this);
          }));
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.cargarGraficas();
        }
      }, {
        key: "comprobarDatos",
        value: function comprobarDatos() {
          var _this12 = this;

          setInterval(function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0,
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee29() {
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      //console.log(this.aluConectados);
                      if (this.numAlumnosConectados != this.aluConectados.length) {
                        this.numAlumnosConectados = this.aluConectados.length; //console.log(this.numAlumnosConectados);

                        this.numAlumnosDesconectados = this.numAlumnosTotales - this.numAlumnosConectados;
                        this.dataGrafConectados = [this.numAlumnosConectados, this.numAlumnosDesconectados]; //console.log(this.dataGrafConectados);

                        this.porUsuariosConectados = this.numAlumnosConectados / this.numAlumnosTotales * 100; //console.log("Porcentaje:")
                        //console.log(this.numAlumnosConectados);
                        //console.log(this.usuariosTotales);
                        //console.log(this.usuariosTotales);

                        this.configUsersConectados = {
                          type: 'doughnut',
                          data: {
                            datasets: [{
                              data: this.dataGrafConectados,
                              backgroundColor: ['rgba(133, 193, 233,1)', 'rgba(0,0,0,0.1)']
                            }],
                            labels: ['Conectado', 'Desconectado']
                          },
                          options: {
                            responsive: true,
                            cutoutPercentage: 50,
                            rotation: 1 * Math.PI,
                            circumference: 1 * Math.PI
                          }
                        };
                        this.usersConectadosGraf = null;
                        this.usersConectadosGraf = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('usersConectados', this.configUsersConectados);
                      }

                    case 1:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }, 1000);
        }
      }, {
        key: "dragEnded",
        value: function dragEnded($event, item) {
          //let posicion=$event.source.getFreeDragPosition();
          item.posicion = $event.source.getFreeDragPosition(); //console.log(item);
          //this.alumno.posicion=this.dragPosition;
        }
      }, {
        key: "comenzar",
        value: function comenzar() {
          this.botonCreadaCargando = true;
          this.botonReanudarCargando = true;
          var ju = this;
          var act = this.actividad;
          act.estado = "Comenzada";
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(act),
            success: function success(data) {
              ju.actividad = data;
              ju.profesor.listoParaRecibirDatos(ju.actividad);
              ju.intervaloResumen = setInterval(function (async) {
                ju.insertarResumen();
              }, 20000);
              ju.botonCreadaCargando = false;
              ju.botonReanudarCargando = false;
              ju.actividad.estado = "Comenzada";
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "terminar",
        value: function terminar() {
          //console.log(this.usuariosConectadoss);
          var ju = this;
          var act = this.actividad;
          act.estado = "Finalizada";
          this.botonFinalizadaCargando = true;
          $.ajax({
            type: 'POST',
            url: '/actualizarActividad',
            data: JSON.stringify(act),
            success: function success(data) {
              ju.actividad = data;
              ju.profesor.listoParaNoRecibirDatos(ju.actividad);
              clearInterval(ju.intervaloResumen);
              ju.botonFinalizadaCargando = false;
              ju.actividad.estado = "Finalizada";
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "cerrarActividad",
        value: function cerrarActividad() {
          //this.actividadCreada.emit("cerrar");
          this.profesor.cerrarActividad('ok');
          clearInterval(this.intervaloResumen);
        }
      }, {
        key: "cambiarAGeneral",
        value: function cambiarAGeneral() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee30() {
            return regeneratorRuntime.wrap(function _callee30$(_context30) {
              while (1) {
                switch (_context30.prev = _context30.next) {
                  case 0:
                    this.vistaGeneral = true;
                    _context30.next = 3;
                    return this.cargarGraficas();

                  case 3:
                    console.log("terminado de cargar");
                    this.vistaMapaDeLaClase = false;
                    _context30.next = 7;
                    return this.cargarGraficas();

                  case 7:
                    this.ngAfterViewInit();

                  case 8:
                  case "end":
                    return _context30.stop();
                }
              }
            }, _callee30, this);
          }));
        }
      }, {
        key: "cambiarAMapa",
        value: function cambiarAMapa() {
          this.vistaGeneral = false;
          this.vistaMapaDeLaClase = true;
        }
      }, {
        key: "insertarDatos",
        value: function insertarDatos(datos) {
          //console.log(datos);
          for (var i = 0; i < this.actividad.alumnos.length; i++) {
            if (datos.id_item == this.alumnos[i].id_item) {
              this.resumen.alegria += datos.alegria;
              this.resumen.asco += datos.asco;
              this.resumen.concentrado += datos.concentrado;
              this.resumen.distraido += datos.distraido;
              this.resumen.frustrado += datos.frustrado;
              this.resumen.ira += datos.ira;
              this.resumen.miedo += datos.miedo;
              this.resumen.motivado += datos.motivado;
              this.resumen.sorpresa += datos.sorpresa;
              this.resumen.tristeza += datos.tristeza;
              this.resumen.pulsaciones += datos.pulsaciones;
              this.numPulsaciones++;
              this.actividad.alumnos[i].datos.alegria.push({
                x: datos.alegria.x,
                y: datos.alegria.y
              });
              this.actividad.alumnos[i].datos.asco.push({
                x: datos.asco.x,
                y: datos.asco.y
              });
              this.actividad.alumnos[i].datos.ira.push({
                x: datos.ira.x,
                y: datos.ira.y
              });
              this.actividad.alumnos[i].datos.miedo.push({
                x: datos.miedo.x,
                y: datos.miedo.y
              });
              this.actividad.alumnos[i].datos.sorpresa.push({
                x: datos.sorpresa.x,
                y: datos.sorpresa.y
              });
              this.actividad.alumnos[i].datos.tristeza.push({
                x: datos.tristeza.x,
                y: datos.tristeza.y
              });
              this.actividad.alumnos[i].datos.pulsaciones.push({
                x: datos.pulsaciones.x,
                y: datos.pulsaciones.y
              });
              this.actividad.alumnos[i].datos.tiempo.push({
                x: datos.tiempo.x,
                y: datos.tiempo.y
              });
              this.actividad.alumnos[i].datos.distraido.push({
                x: datos.distraido.x,
                y: datos.distraido.y
              });
              this.actividad.alumnos[i].datos.concentrado.push({
                x: datos.concentrado.x,
                y: datos.concentrado.y
              });
              this.actividad.alumnos[i].datos.frustrado.push({
                x: datos.frustrado.x,
                y: datos.frustrado.y
              });
              this.actividad.alumnos[i].datos.motivado.push({
                x: datos.motivado.x,
                y: datos.motivado.y
              });
            }
          }
        }
      }, {
        key: "insertarResumen",
        value: function insertarResumen() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee31() {
            var sumaTotalEmociones, x, sumaTotalEstadoDisConc, sumaTotalEstadoFrusMotiv;
            return regeneratorRuntime.wrap(function _callee31$(_context31) {
              while (1) {
                switch (_context31.prev = _context31.next) {
                  case 0:
                    //Datos Emocionales
                    sumaTotalEmociones = 0; //console.log(this.resumen);

                    x = moment__WEBPACK_IMPORTED_MODULE_3__().format();
                    sumaTotalEmociones = this.resumen.alegria + this.resumen.asco + this.resumen.ira + this.resumen.miedo + this.resumen.sorpresa + this.resumen.tristeza;
                    this.actividad.resumen.alegria.push({
                      x: x,
                      y: this.resumen.alegria / sumaTotalEmociones
                    });
                    this.actividad.resumen.asco.push({
                      x: x,
                      y: this.resumen.asco / sumaTotalEmociones
                    });
                    this.actividad.resumen.ira.push({
                      x: x,
                      y: this.resumen.ira / sumaTotalEmociones
                    });
                    this.actividad.resumen.miedo.push({
                      x: x,
                      y: this.resumen.miedo / sumaTotalEmociones
                    });
                    this.actividad.resumen.sorpresa.push({
                      x: x,
                      y: this.resumen.sorpresa / sumaTotalEmociones
                    });
                    this.actividad.resumen.tristeza.push({
                      x: x,
                      y: this.resumen.tristeza / sumaTotalEmociones
                    }); //Datos de las pulsaciones

                    this.actividad.resumen.pulsaciones.push({
                      x: x,
                      y: this.resumen.pulsaciones / this.numPulsaciones
                    }); //Datos cognitivos

                    sumaTotalEstadoDisConc = 0;
                    sumaTotalEstadoDisConc = this.resumen.distraido + this.resumen.concentrado;
                    this.actividad.resumen.distraido.push({
                      x: x,
                      y: this.resumen.distraido / sumaTotalEstadoDisConc
                    });
                    this.actividad.resumen.concentrado.push({
                      x: x,
                      y: this.resumen.concentrado / sumaTotalEstadoDisConc
                    });
                    sumaTotalEstadoFrusMotiv = 0;
                    sumaTotalEstadoFrusMotiv = this.resumen.frustrado + this.resumen.motivado;
                    this.actividad.resumen.frustrado.push({
                      x: x,
                      y: this.resumen.frustrado / sumaTotalEstadoFrusMotiv
                    });
                    this.actividad.resumen.motivado.push({
                      x: x,
                      y: this.resumen.motivado / sumaTotalEstadoFrusMotiv
                    }); //Datos del tiempo

                    this.actividad.resumen.tiempo.push(x); //Reseteo de datos

                    this.resumen = {
                      alegria: 0,
                      asco: 0,
                      miedo: 0,
                      sorpresa: 0,
                      tristeza: 0,
                      ira: 0,
                      distraido: 0,
                      concentrado: 0,
                      frustrado: 0,
                      motivado: 0,
                      pulsaciones: 0
                    };
                    this.numPulsaciones = 0;
                    console.log(this.actividad);

                  case 22:
                  case "end":
                    return _context31.stop();
                }
              }
            }, _callee31, this);
          }));
        }
      }, {
        key: "seleccionarEstado",
        value: function seleccionarEstado(estado) {
          console.log(this.estados);
          this.estadoSeleccionado = estado;

          if (this.objAlumnoSeleccionado == null) {
            this.configuracionGraficaLineal = {
              type: 'line',
              data: {
                datasets: [{
                  label: this.estadoSeleccionado,
                  backgroundColor: this.ColorSad,
                  borderColor: this.ColorSad,
                  fill: false,
                  data: this.actividad.resumen['' + this.estadoSeleccionado + '']
                }]
              },
              options: {
                responsive: true,
                title: {
                  display: true,
                  text: this.estadoSeleccionado
                },
                scales: {
                  xAxes: [{
                    type: 'time',
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Tiempo'
                    },
                    ticks: {
                      major: {
                        fontStyle: 'bold',
                        fontColor: '#FF0000'
                      }
                    }
                  }],
                  yAxes: [{
                    display: true,
                    scaleLabel: {
                      display: true,
                      labelString: 'Porcentaje'
                    }
                  }]
                }
              }
            };
            this.graficaLineal = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('graficaLineal', this.configuracionGraficaLineal);
          } else {
            for (var i = 0; i < this.actividad.alumnos.length; i++) {
              if (this.actividad.alumnos[i].id_item == this.objAlumnoSeleccionado.id_item) {
                this.configuracionGraficaLineal = {
                  type: 'line',
                  data: {
                    datasets: [{
                      label: this.estadoSeleccionado,
                      backgroundColor: this.ColorSad,
                      borderColor: this.ColorSad,
                      fill: false,
                      data: this.actividad.alumnos[i].datos['' + this.estadoSeleccionado + '']
                    }]
                  },
                  options: {
                    responsive: true,
                    title: {
                      display: true,
                      text: this.estadoSeleccionado
                    },
                    scales: {
                      xAxes: [{
                        type: 'time',
                        display: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Tiempo'
                        },
                        ticks: {
                          major: {
                            fontStyle: 'bold',
                            fontColor: '#FF0000'
                          }
                        }
                      }],
                      yAxes: [{
                        display: true,
                        scaleLabel: {
                          display: true,
                          labelString: 'Porcentaje'
                        }
                      }]
                    }
                  }
                };
                this.graficaLineal = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('graficaLineal', this.configuracionGraficaLineal);
              }
            }
          }
        }
      }, {
        key: "seleccionarAlumno",
        value: function seleccionarAlumno(alumno) {
          console.log(this.alumnosSelect);
          this.alumnoSeleccionado = alumno.estudiante.nombre;
          this.objAlumnoSeleccionado = alumno;
          this.alumnoSeleccionadoAlumno = true;

          for (var i = 0; i < this.actividad.alumnos.length; i++) {
            if (this.actividad.alumnos[i].id_item == this.objAlumnoSeleccionado.id_item) {
              this.configuracionGraficaLineal = {
                type: 'line',
                data: {
                  datasets: [{
                    label: this.estadoSeleccionado,
                    backgroundColor: this.ColorSad,
                    borderColor: this.ColorSad,
                    fill: false,
                    data: this.actividad.alumnos[i].datos['' + this.estadoSeleccionado + '']
                  }]
                },
                options: {
                  responsive: true,
                  title: {
                    display: true,
                    text: this.estadoSeleccionado
                  },
                  scales: {
                    xAxes: [{
                      type: 'time',
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Tiempo'
                      },
                      ticks: {
                        major: {
                          fontStyle: 'bold',
                          fontColor: '#FF0000'
                        }
                      }
                    }],
                    yAxes: [{
                      display: true,
                      scaleLabel: {
                        display: true,
                        labelString: 'Porcentaje'
                      }
                    }]
                  }
                }
              };
              this.graficaLineal = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('graficaLineal', this.configuracionGraficaLineal);
            }
          }
        }
      }, {
        key: "seleccionarMediaAlumnos",
        value: function seleccionarMediaAlumnos() {//this.actualizarGraficaLineal();

          /*this.alumnoSeleccionado = 'Media de la clase';
          this.objAlumnoSeleccionado = null;
          this.alumnoSeleccionadoAlumno = false;
          //this.actividad.resumen.alegria
          this.configuracionGraficaLineal = {
            type: 'line',
            data: {
              datasets: [
                {
                  label: this.estadoSeleccionado,
                  backgroundColor: this.ColorSad,
                  borderColor: this.ColorSad,
                  fill: false,
                  data: this.actividad.resumen['' + this.estadoSeleccionado + ''],
                }
              ]
                 },
            options: {
              responsive: true,
              title: {
                display: true,
                text: this.estadoSeleccionado,
              },
              scales: {
                xAxes: [{
                  type: 'time',
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Tiempo'
                  },
                  ticks: {
                    major: {
                      fontStyle: 'bold',
                      fontColor: '#FF0000'
                    }
                  }
                }],
                yAxes: [{
                  display: true,
                  scaleLabel: {
                    display: true,
                    labelString: 'Porcentaje'
                  }
                }]
              }
            }
          };
          this.graficaLineal = new Chart('graficaLineal', this.configuracionGraficaLineal);*/
        }
      }, {
        key: "actualizarGraficaLineal",
        value: function actualizarGraficaLineal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee32() {
            var datos, i, j, color, h, _j;

            return regeneratorRuntime.wrap(function _callee32$(_context32) {
              while (1) {
                switch (_context32.prev = _context32.next) {
                  case 0:
                    datos = [];

                    for (i = 0; i < this.alumnosSelect.length; i++) {
                      if (this.alumnosSelect[i].checked) {
                        if (this.alumnosSelect[i].nombre == "Media de todos") {
                          for (j = 0; j < this.estados.length; j++) {
                            if (this.estados[j].checked) {
                              color = this.colorRGB();
                              datos.push({
                                label: this.estados[j].nombre + ' de ' + this.alumnosSelect[i].nombre,
                                backgroundColor: color,
                                borderColor: color,
                                fill: false,
                                data: this.actividad.resumen['' + this.estados[j].nombre + '']
                              });
                              console.log(this.alumnosSelect);
                              console.log(this.estados);
                            }
                          }
                        } else {
                          for (h = 0; h < this.actividad.alumnos.length; h++) {
                            if (this.alumnosSelect[i].id == this.actividad.alumnos[h].estudiante._id) {
                              for (_j = 0; _j < this.estados.length; _j++) {
                                if (this.estados[_j].checked) {
                                  color = this.colorRGB();
                                  datos.push({
                                    label: this.estados[_j].nombre + ' de ' + this.alumnosSelect[i].nombre,
                                    backgroundColor: color,
                                    borderColor: color,
                                    fill: false,
                                    data: this.actividad.alumnos[h].datos['' + this.estados[_j].nombre + '']
                                  });
                                  console.log(this.alumnosSelect);
                                  console.log(this.estados);
                                }
                              }
                            }
                          }
                        }
                      }
                    }

                    this.configuracionGraficaLineal = {
                      type: 'line',
                      data: {
                        datasets: datos
                      },
                      options: {
                        responsive: true,
                        title: {
                          display: true,
                          text: this.estadoSeleccionado
                        },
                        scales: {
                          xAxes: [{
                            type: 'time',
                            display: true,
                            scaleLabel: {
                              display: true,
                              labelString: 'Tiempo'
                            },
                            ticks: {
                              major: {
                                fontStyle: 'bold',
                                fontColor: '#FF0000'
                              }
                            }
                          }],
                          yAxes: [{
                            display: true,
                            scaleLabel: {
                              display: true,
                              labelString: 'Porcentaje'
                            }
                          }]
                        }
                      }
                    };
                    this.graficaLineal = new chart_js__WEBPACK_IMPORTED_MODULE_2__["Chart"]('graficaLineal', this.configuracionGraficaLineal);

                  case 4:
                  case "end":
                    return _context32.stop();
                }
              }
            }, _callee32, this);
          }));
        }
      }, {
        key: "colorRGB",
        value: function colorRGB() {
          //'rgba(81,81,255,0.4)'
          var color = "(" + this.generarNumero() + "," + this.generarNumero() + "," + this.generarNumero() + ")";
          return "rgb" + color;
        }
      }, {
        key: "generarNumero",
        value: function generarNumero() {
          return (Math.random() * 255).toFixed(0);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.intervaloResumen);
        }
      }]);

      return VerActividadComponent;
    }();

    VerActividadComponent.ctorParameters = function () {
      return [{
        type: _profesor_profesor_component__WEBPACK_IMPORTED_MODULE_4__["ProfesorComponent"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerActividadComponent.prototype, "actividad", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerActividadComponent.prototype, "aluConectados", void 0);
    VerActividadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-actividad',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver-actividad.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-actividad/ver-actividad.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver-actividad.component.css */
      "./src/app/profesor/ver-actividad/ver-actividad.component.css")).default]
    })], VerActividadComponent);
    /***/
  },

  /***/
  "./src/app/profesor/ver-clase/ver-clase.component.css":
  /*!************************************************************!*\
    !*** ./src/app/profesor/ver-clase/ver-clase.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfesorVerClaseVerClaseComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2Zlc29yL3Zlci1jbGFzZS92ZXItY2xhc2UuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/profesor/ver-clase/ver-clase.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/profesor/ver-clase/ver-clase.component.ts ***!
    \***********************************************************/

  /*! exports provided: VerClaseComponent */

  /***/
  function srcAppProfesorVerClaseVerClaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerClaseComponent", function () {
      return VerClaseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _profesor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../profesor.component */
    "./src/app/profesor/profesor.component.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var VerClaseComponent =
    /*#__PURE__*/
    function () {
      function VerClaseComponent(profesor, _snackBar) {
        _classCallCheck(this, VerClaseComponent);

        this.profesor = profesor;
        this._snackBar = _snackBar;
        this.actividades = [];
        this.actividad = null;
        this.numeroActFinalizadas = 0;
        this.numeroActComenzadas = 0;
        this.numeroActSinComenzar = 0;
        this.editarActividad = false;
        this.listaAlumnos = []; //Tabla de actividades

        this.displayedColumnsActividades = ['nombre', 'profesor', 'estado', 'acciones', 'editarborrar'];
      }

      _createClass(VerClaseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee33() {
            var ju;
            return regeneratorRuntime.wrap(function _callee33$(_context33) {
              while (1) {
                switch (_context33.prev = _context33.next) {
                  case 0:
                    /*var ju = this;
                    console.log(this.clase);
                    for (var id in this.clase.actividades) {
                      ju.actividades.push(this.clase.actividades[id]);
                    }*/
                    console.log(this.clase);
                    this.actualizarClase();
                    ju = this; //this.listaAlumnos=this.estudiantes.getEstudiantes();

                    _context33.next = 5;
                    return $.getJSON("/verEstudiantes", function (data) {
                      //console.log(data);
                      ju.listaAlumnos = data;
                    });

                  case 5:
                  case "end":
                    return _context33.stop();
                }
              }
            }, _callee33, this);
          }));
        }
      }, {
        key: "actualizar",
        value: function actualizar() {
          this.actividades = [];
          this.actividades.length = 0;

          for (var id in this.clase.actividades) {
            this.actividades.push(this.clase.actividades[id]);
          }

          this.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.actividades);
          this.dataSourceActividades.paginator = this.paginatorA;
          this.dataSourceActividades.sort = this.sortA;
        }
      }, {
        key: "actualizarClase",
        value: function actualizarClase() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee34() {
            var ju;
            return regeneratorRuntime.wrap(function _callee34$(_context34) {
              while (1) {
                switch (_context34.prev = _context34.next) {
                  case 0:
                    ju = this;
                    /*$.getJSON("/verClase", this.clase, function (data) {
                      console.log(data);
                      ju.clase = data;
                      ju.actividades.length = 0;
                      for (var id in ju.clase.actividades) {
                        ju.actividades.push(this.clase.actividades[id]);
                      }
                      ju.dataSourceActividades = new MatTableDataSource(ju.actividades);
                      ju.dataSourceActividades.paginator = ju.paginatorA;
                      ju.dataSourceActividades.sort = ju.sortA;
                    });*/

                    $.ajax({
                      type: 'POST',
                      url: '/verClase',
                      data: JSON.stringify(this.clase),
                      success: function success(data) {
                        console.log(data);
                        ju.clase = data;
                        console.log(ju.clase);
                        ju.actividades.length = 0;

                        for (var id in ju.clase.actividades) {
                          ju.actividades.push(ju.clase.actividades[id]);
                        }

                        console.log(ju.actividades);
                        ju.dataSourceActividades = new _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](ju.actividades);
                        ju.dataSourceActividades.paginator = ju.paginatorA;
                        ju.dataSourceActividades.sort = ju.sortA;
                      },
                      contentType: 'application/json',
                      dataType: 'json'
                    });

                  case 2:
                  case "end":
                    return _context34.stop();
                }
              }
            }, _callee34, this);
          }));
        }
      }, {
        key: "applyFilterA",
        value: function applyFilterA(filterValue) {
          filterValue = filterValue.trim(); // Remove whitespace

          filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches

          this.dataSourceActividades.filter = filterValue;
        }
      }, {
        key: "cerrarClase",
        value: function cerrarClase() {
          this.profesor.cerrarClase();
        }
      }, {
        key: "crearActividad",
        value: function crearActividad() {
          var ju = this;
          var actividadCreate = {
            nombre: '',
            profesor: '',
            fecha: '',
            alumnos: [],
            estado: 'Creada',
            resumen: {
              alegria: [],
              asco: [],
              miedo: [],
              sorpresa: [],
              tristeza: [],
              ira: [],
              pulsaciones: [],
              tiempo: [],
              distraido: [],
              concentrado: [],
              frustrado: [],
              motivado: []
            },
            clase: {
              _id: this.clase._id,
              nombre: this.clase.nombre
            }
          };
          actividadCreate.nombre = this.clase.nombre + ' ' + moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          actividadCreate.profesor = this.clase.profesor;
          actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          var arrayAlumnos = [];

          for (var i = 0; i < this.clase.alumnos.length; i++) {
            arrayAlumnos.push({
              estudiante: this.clase.alumnos[i].estudiante,
              id_item: '',
              posicion: this.clase.alumnos[i].posicion,
              datos: {
                alegria: [],
                asco: [],
                miedo: [],
                sorpresa: [],
                tristeza: [],
                ira: [],
                pulsaciones: [],
                tiempo: [],
                distraido: [],
                concentrado: [],
                frustrado: [],
                motivado: []
              }
            });
          }

          actividadCreate.alumnos = arrayAlumnos;
          $.ajax({
            type: 'POST',
            url: '/agregarActividadEnClase',
            data: JSON.stringify({
              clase: this.clase,
              act: actividadCreate
            }),
            success: function success(data) {
              ju.clase = data; //ju.ultimaActividadCreada = data;

              console.log("Clase Actualizada");
              console.log(data);
              ju.actualizarClase(); //ju.menActividadCreada();
              //abrirActividad
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "crearActividadFuera",
        value: function crearActividadFuera(clase) {
          var ju = this;
          var actividadCreate = {
            nombre: '',
            profesor: '',
            fecha: '',
            alumnos: [],
            estado: 'Creada',
            resumen: {
              alegria: [],
              asco: [],
              miedo: [],
              sorpresa: [],
              tristeza: [],
              ira: [],
              pulsaciones: [],
              tiempo: [],
              distraido: [],
              concentrado: [],
              frustrado: [],
              motivado: []
            },
            clase: clase
          };
          actividadCreate.nombre = clase.nombre + ' ' + moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          actividadCreate.profesor = clase.profesor;
          actividadCreate.fecha = moment__WEBPACK_IMPORTED_MODULE_2__().format('LLLL');
          var arrayAlumnos = [];

          for (var i = 0; i < clase.alumnos.length; i++) {
            arrayAlumnos.push({
              estudiante: clase.alumnos[i].estudiante,
              id_item: '',
              posicion: clase.alumnos[i].posicion,
              datos: {
                alegria: [],
                asco: [],
                miedo: [],
                sorpresa: [],
                tristeza: [],
                ira: [],
                pulsaciones: [],
                tiempo: [],
                distraido: [],
                concentrado: [],
                frustrado: [],
                motivado: []
              }
            });
          }

          actividadCreate.alumnos = arrayAlumnos;
          $.ajax({
            type: 'POST',
            url: '/agregarActividadEnClase',
            data: JSON.stringify({
              clase: clase,
              act: actividadCreate
            }),
            success: function success(data) {
              ju.clase = data; //ju.ultimaActividadCreada = data;

              console.log("Clase Actualizada");
              console.log(data);
              ju.actualizarClase(); //ju.menActividadCreada();
              //abrirActividad
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "abrirActividad",
        value: function abrirActividad(clase) {
          this.profesor.abrirActividad(clase);
        }
      }, {
        key: "editarA",
        value: function editarA(clase) {
          this.editarActividad = true;
          this.actividad = clase;
        }
      }, {
        key: "cancelar",
        value: function cancelar() {
          this.editarActividad = false;
          this.actividad = null;
        }
      }, {
        key: "borrarA",
        value: function borrarA(act) {
          var ju = this;
          console.log(act);
          $.ajax({
            type: 'DELETE',
            url: '/eliminarActividad',
            data: JSON.stringify(act),
            success: function success(data) {
              console.log('actividad borrada');
              console.log(data);
              ju.clase = data; //console.log("Actividad eliminado");

              ju.actualizarClase();
              ju.menActividadBorrada();
            },
            contentType: 'application/json',
            dataType: 'json'
          });
        }
      }, {
        key: "menActividadBorrada",
        value: function menActividadBorrada() {
          var men = this._snackBar.open('Actividad Borrada', 'Cerrar', {
            duration: 1000
          });
        }
      }]);

      return VerClaseComponent;
    }();

    VerClaseComponent.ctorParameters = function () {
      return [{
        type: _profesor_component__WEBPACK_IMPORTED_MODULE_3__["ProfesorComponent"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], VerClaseComponent.prototype, "clase", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"], null)], VerClaseComponent.prototype, "paginatorA", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"], null)], VerClaseComponent.prototype, "sortA", void 0);
    VerClaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ver-clase',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ver-clase.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profesor/ver-clase/ver-clase.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ver-clase.component.css */
      "./src/app/profesor/ver-clase/ver-clase.component.css")).default]
    })], VerClaseComponent);
    /***/
  },

  /***/
  "./src/app/socketio.service.ts":
  /*!*************************************!*\
    !*** ./src/app/socketio.service.ts ***!
    \*************************************/

  /*! exports provided: SocketioService */

  /***/
  function srcAppSocketioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketioService", function () {
      return SocketioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);

    var SocketioService =
    /*#__PURE__*/
    function () {
      function SocketioService() {
        _classCallCheck(this, SocketioService);

        this.crearActividadLista = function (socket, actividad) {
          socket.emit('crearActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " está lista.");
        };

        this.borrarActividadLista = function (socket, actividad) {
          socket.emit('borrarActividadLista', actividad);
          console.log("Actividad: " + actividad._id + " YA NO está lista.");
        };

        this.lanzarSocketSrv = function () {
          var cli = this;
          this.socket.on('connect', function () {
            console.log("Conectado al servidor de WebSockets");
          });
          this.socket.on('actividadAnadida', function (res) {
            console.log("Se ha añadido una actividad a las listas: " + res._id);
          });
          this.socket.on('actividadBorrada', function (res) {
            console.log("Se ha borrado una actividad a las listas: " + res._id);
          });
          this.socket.on('actividades', function (res) {
            cli.listaActividades.push(res);
            console.log(res); //callback(res);
          });
          /*
          this.socket.on('partidaCreada',function(partida){
              console.log("partida creada:",partida);
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('partidas',function(partidas){
              mostrarListaPartidas(partidas);
          });
          this.socket.on('unido',function(partida){
              cli.idp=partida.idp;
              mostrarPartida(partida);
              mostrarListaJugadores(partida.jugadores);
          });
          this.socket.on('nuevoJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('saliste',function(){
              mostrarCrearPartida(cli.nick);
              borrarCanvas();
          });
          this.socket.on('saleJugador',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('otropreparado',function(jugadores){
              mostrarListaJugadores(jugadores);
          });
          this.socket.on('aJugar',function(data){
              cli.jugador=data.jugadores[cli.nick];
              cli.rival=cli.obtenerRival(data.jugadores);
              mostrarCanvas(data.numJugadores);
          });
          this.socket.on('anotado',function(){ //function(resultados)
              //mostrarListaResultados(resultados)
              console.log("Resultado anotado");
          });
          this.socket.on('finPartida',function(){
              console.log("Fin de la partida");
              alert("Fin de la partida");
              cli.salir();
          });
          this.socket.on("sigueVivo",function(){
              console.log("sigue vivo");
              cli.spriteLocal.volverAInicio();
          });
          this.socket.on("mover",function(operacion,posicion){
              if (cli.spriteRival){
                  cli.spriteRival.mover(operacion,posicion);
              }
          });*/
        };
      }

      _createClass(SocketioService, [{
        key: "setupSocketConnection",
        value: function setupSocketConnection() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__();
          this.socket.emit('mi mensaje', 'Hola desde Angular');
          this.socket.on('mi mensaje', function (data) {
            console.log(data);
          });
        }
      }, {
        key: "ini",
        value: function ini() {
          this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"]();
          this.lanzarSocketSrv();
        }
      }]);

      return SocketioService;
    }();

    SocketioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketioService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/msalejandrojose/Documents/TFG/emotionapp/cliente/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map