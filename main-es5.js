function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/actions-log/actions-log/actions-log.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/actions-log/actions-log/actions-log.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppActionsLogActionsLogActionsLogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"action-log\">\n    <div class=\"page__title\">\n        Actions log\n    </div>\n    <div class=\"action-log__grid\">\n        <table *ngIf=\"(actions$| async) as actions\">\n            <tr>\n                <th>Date/Time</th>\n                <th>Action</th>\n                <th>Website name</th>\n                <th>Url</th>\n            </tr>\n            <tr *ngFor=\"let action of actions\">\n                <td>{{action.date | date}}</td>\n                <td>{{action.type | actionFormatter}}</td>\n                <td>{{action.websiteName}}</td>\n                <td>{{action.url}}</td>              \n        </table>\n    </div>\n\n\n</div>\n";
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


    __webpack_exports__["default"] = "\n<div class=\"app-my-modal-background\">\n  <div class=\"app-my-modal\" app-my-modal></div>\n</div>\n\n\n<div class=\"main\">\n  <nav class=\"main-nav\">\n    <ul>\n      <li><a routerLink=\"/favorites\" routerLinkActive=\"active\">Favorite sites</a></li>\n      <li><a routerLink=\"/action-log\" routerLinkActive=\"active\">Action logs</a></li>\n    </ul>\n  </nav>\n  <div class=\"main-content w-100\">\n    <router-outlet></router-outlet>   \n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/delete/delete/delete.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/delete/delete/delete.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesDeleteDeleteDeleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-modal\">\n    <div class=\"my-modal__header\">\n        Remove favorite website?\n    </div>\n    <div class=\"my-modal__content\">\n        This action will remove the favorite website permanently\n    </div>\n    <div class=\"my-modal__footer\">\n        <div class=\"btn\" (click)=\"remove()\">Remove webite</div>\n        <div class=\"btn\" (click)=\"cancel()\">cancel</div>\n    </div>\n\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/edit/edit/edit.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/edit/edit/edit.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesEditEditEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"my-modal\">\n    <div class=\"my-modal__header\">\n        Edit website\n    </div>\n    <div class=\"my-modal__content\">\n        <label> Website name\n            <input type=\"text\" required   [(ngModel)]=\"data.websiteName\">\n        </label>\n        <label> Url\n            <input type=\"text\" required   [(ngModel)]=\"data.url\">\n        </label>\n    </div>\n    <div class=\"my-modal__footer\">\n        <div class=\"btn\" (click)=\"save() \" [ngClass]=\"{'btn--disabled':!isValid() }\">Save changes</div>\n        <div class=\"btn\" (click)=\"cancel()\">Cancel</div>\n    </div>\n\n\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-grid/favorites-grid.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-grid/favorites-grid.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesFavoritesGridFavoritesGridComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"favorites-content\">\n    <table *ngIf=\"(favorites$ | async) as favorites\">\n        <tr>\n            <th>Website name</th>\n            <th>URL</th>\n            <th></th>\n        </tr>\n        <tr *ngFor=\"let favorite of favorites | searchFilter:filterTxt\">\n            <td class=\"name\">{{favorite.websiteName}}</td>\n            <td class=\"url\">{{favorite.url}}</td>\n            <td> \n                <div class=\"float-action\">\n                    <div class=\"float-action-botton\"><i class=\"far fa-edit\" (click)=\"edit(favorite)\"></i></div>\n                    <div class=\"float-action-botton\"><i class=\"far fa-trash-alt\" (click)=\"delete(favorite)\"></i></div>\n                </div>  \n            </td>\n        </tr>\n    </table>\n</div>\n\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-tiles/favorites-tiles.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-tiles/favorites-tiles.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesFavoritesTilesFavoritesTilesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"tiles-content\" *ngIf=\"(favorites$ | async  | searchFilter:filterTxt) as favorites \">\r\n    <div class=\"card\" *ngFor=\"let favorite of favorites; first as isFirst\" >\r\n        <div class=\"card-internal\" >\r\n            <img [src]=\"favorite.img\" alt=\"\" >\r\n            <div class=\"name\" title=\"{{favorite.websiteName}}\">\r\n                {{favorite.websiteName}}\r\n            </div>\r\n            <div class=\"float-action\">\r\n                <div class=\"float-action-botton\"><i class=\"far fa-edit\" (click)=\"edit(favorite)\"></i></div>\r\n                <div class=\"float-action-botton\"><i class=\"far fa-trash-alt\" (click)=\"delete(favorite)\"></i></div>\r\n            </div>    \r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites/favorites.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites/favorites.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFavoritesFavoritesFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"favorites\">\r\n    <div class=\"favorites-header\">\r\n        <div class=\"favorites-header--title\">Favorite sites</div>\r\n        <div class=\"search\">\r\n            <input type=\"text\" placeholder=\"Filter by web site or url\" #search>\r\n            <div><i class=\"fas fa-search-plus\"></i></div>\r\n        </div>\r\n        <div class=\"actions-toolbar\">\r\n            <div class=\"btn\" (click)=\"toggle('TILES')\" *ngIf=\"isGrid\"><i class=\"fas fa-border-none\"></i></div>\r\n            <div class=\"btn\" (click)=\"toggle('GRID')\"  *ngIf=\"!isGrid\"><i class=\"fas fa-list\"></i></div>       \r\n            <div class=\"btn\" (click)=\"addNewWebsite()\"><i class=\"fas fa-plus\"></i>Add</div>\r\n        </div>\r\n     </div>   \r\n     <div classs=\"favorites-content\">\r\n        <router-outlet></router-outlet>\r\n     </div>    \r\n</div>\r\n\r\n\r\n<!---------------------------------------------------------\r\n                 Add Dialog                             \r\n----------------------------------------------------------->\r\n<ng-template #addWebsite>\r\n    <div class=\"add-dialog\">        \r\n            <div class=\"dialog\">\r\n                <form (ngSubmit)=\"submite()\" #f=\"ngForm\"  autocomplete=\"off\" novalidate>\r\n                    <div class=\"dialog__header\">\r\n                        Add new website                        \r\n                    </div>\r\n                    <div class=\"dialog__content\">\r\n                        <label>Website name<input type=\"text\" name=\"websiteName\" [(ngModel)]=\"websiteName\" required></label>\r\n                        <label>URL<input type=\"text\" name=\"url\" [(ngModel)]=\"url\" required></label>\r\n                    </div>                                       \r\n                    <div class=\"dialog__footer\">                                                \r\n                        <div class=\"btn\" (click)=\"submit()\" [ngClass]=\"{'btn--disabled':!isValid() }\" >Add website</div>\r\n                        <div class=\"btn\" (click)=\"closeNewAddDialog()\">Cancle</div>\r\n                    </div>      \r\n                    \r\n                </form>                              \r\n            </div>   \r\n            \r\n    </div>\r\n</ng-template>\r\n<ng-content *ngIf= \"!displayAddDialog; else addWebsite\">        \r\n</ng-content>\r\n\r\n\r\n";
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
  "./src/app/actions-log/actions-log/actions-log.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/actions-log/actions-log/actions-log.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppActionsLogActionsLogActionsLogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".action-log {\r\n    padding-top: 0.3em;\r\n\r\n}\r\n\r\n.page__title {\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    margin-bottom: 1em;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aW9ucy1sb2cvYWN0aW9ucy1sb2cvYWN0aW9ucy1sb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FjdGlvbnMtbG9nL2FjdGlvbnMtbG9nL2FjdGlvbnMtbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uLWxvZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMC4zZW07XHJcblxyXG59XHJcblxyXG4ucGFnZV9fdGl0bGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/actions-log/actions-log/actions-log.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/actions-log/actions-log/actions-log.component.ts ***!
    \******************************************************************/

  /*! exports provided: ActionsLogComponent */

  /***/
  function srcAppActionsLogActionsLogActionsLogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionsLogComponent", function () {
      return ActionsLogComponent;
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


    var _common_action_log_actions_log_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../common/action-log/actions-log.service */
    "./src/app/common/action-log/actions-log.service.ts");

    var ActionsLogComponent =
    /*#__PURE__*/
    function () {
      function ActionsLogComponent(actionsService) {
        _classCallCheck(this, ActionsLogComponent);

        this.actionsService = actionsService;
        this.actions$ = this.actionsService.actions$;
      }

      _createClass(ActionsLogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ActionsLogComponent;
    }();

    ActionsLogComponent.ctorParameters = function () {
      return [{
        type: _common_action_log_actions_log_service__WEBPACK_IMPORTED_MODULE_2__["ActionsLogService"]
      }];
    };

    ActionsLogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-action-log',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./actions-log.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/actions-log/actions-log/actions-log.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./actions-log.component.css */
      "./src/app/actions-log/actions-log/actions-log.component.css")).default]
    })], ActionsLogComponent);
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


    __webpack_exports__["default"] = "body {\r\n    min-width: 550px;\r\n}\r\n\r\n\r\n\r\n.main {\r\n    display: -webkit-box;\r\n    display: flex;    \r\n    height: 100%;  \r\n    min-width: 400px;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1000px){\r\n    .main{\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n    }\r\n}\r\n\r\n\r\n\r\n.main-nav {\r\n    background-color: var(--bg-secondary);\r\n    padding-top: var(--main-margin-top);\r\n    white-space: nowrap;\r\n}\r\n\r\n\r\n\r\n@media (max-width: 1000px){\r\n    .main-nav {\r\n        padding-top:0; \r\n    }\r\n    .main-nav ul{\r\n        display: -webkit-box;\r\n        display: flex;\r\n    }\r\n}\r\n\r\n\r\n\r\n.main-nav li {\r\n    list-style: none;    \r\n}\r\n\r\n\r\n\r\n.main-nav a {\r\n    display: block;\r\n    text-decoration: none;    \r\n    padding: 0.7em 1.5em;    \r\n    color: var(--color-secondary);\r\n}\r\n\r\n\r\n\r\n.main-nav a:hover, .main-nav a:focus, .active {\r\n    color: var(--color-secondary-invert);\r\n    background-color: var(--bg-secondary-invert);\r\n}\r\n\r\n\r\n\r\n.main-content {\r\n    margin-top: var(--main-margin-top);\r\n    padding-left: 1em;      \r\n    padding-right: 1em;\r\n}\r\n\r\n\r\n\r\n.app-my-modal-background {\r\n    background-color:rgba(85, 84, 84, 0.877);;\r\n    position: absolute;\r\n    top:0;\r\n    bottom: 0;\r\n    left:0;\r\n    right: 0;\r\n    visibility: hidden;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFJQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWixnQkFBZ0I7QUFDcEI7Ozs7QUFHQTtJQUNJO1FBQ0ksNEJBQXNCO1FBQXRCLDZCQUFzQjtnQkFBdEIsc0JBQXNCO0lBQzFCO0FBQ0o7Ozs7QUFFQTtJQUNJLHFDQUFxQztJQUNyQyxtQ0FBbUM7SUFDbkMsbUJBQW1CO0FBQ3ZCOzs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLG9CQUFhO1FBQWIsYUFBYTtJQUNqQjtBQUNKOzs7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQzs7OztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLDRDQUE0QztBQUNoRDs7OztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7Ozs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsS0FBSztJQUNMLFNBQVM7SUFDVCxNQUFNO0lBQ04sUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgbWluLXdpZHRoOiA1NTBweDtcclxufVxyXG5cclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyAgICBcclxuICAgIGhlaWdodDogMTAwJTsgIFxyXG4gICAgbWluLXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLm1haW57XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW4tbmF2IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeSk7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tbWFpbi1tYXJnaW4tdG9wKTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIC5tYWluLW5hdiB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6MDsgXHJcbiAgICB9XHJcbiAgICAubWFpbi1uYXYgdWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW4tbmF2IGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7ICAgIFxyXG59XHJcblxyXG4ubWFpbi1uYXYgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgICAgXHJcbiAgICBwYWRkaW5nOiAwLjdlbSAxLjVlbTsgICAgXHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLm1haW4tbmF2IGE6aG92ZXIsIC5tYWluLW5hdiBhOmZvY3VzLCAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1zZWNvbmRhcnktaW52ZXJ0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLXNlY29uZGFyeS1pbnZlcnQpO1xyXG59XHJcblxyXG4ubWFpbi1jb250ZW50IHtcclxuICAgIG1hcmdpbi10b3A6IHZhcigtLW1haW4tbWFyZ2luLXRvcCk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgICAgICBcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFlbTtcclxufVxyXG5cclxuLmFwcC1teS1tb2RhbC1iYWNrZ3JvdW5kIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg4NSwgODQsIDg0LCAwLjg3Nyk7O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OjA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */";
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

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'wdapt';
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _favorites_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./favorites/favorites/favorites.component */
    "./src/app/favorites/favorites/favorites.component.ts");
    /* harmony import */


    var _favorites_favorites_grid_favorites_grid_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./favorites/favorites-grid/favorites-grid.component */
    "./src/app/favorites/favorites-grid/favorites-grid.component.ts");
    /* harmony import */


    var _favorites_favorites_tiles_favorites_tiles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./favorites/favorites-tiles/favorites-tiles.component */
    "./src/app/favorites/favorites-tiles/favorites-tiles.component.ts");
    /* harmony import */


    var _actions_log_actions_log_actions_log_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./actions-log/actions-log/actions-log.component */
    "./src/app/actions-log/actions-log/actions-log.component.ts");
    /* harmony import */


    var _favorites_delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./favorites/delete/delete/delete.component */
    "./src/app/favorites/delete/delete/delete.component.ts");
    /* harmony import */


    var _favorites_edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./favorites/edit/edit/edit.component */
    "./src/app/favorites/edit/edit/edit.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");

    var appRoutes = [{
      path: 'favorites',
      component: _favorites_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"],
      children: [{
        path: 'grid',
        component: _favorites_favorites_grid_favorites_grid_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesGridComponent"]
      }, {
        path: 'tiles',
        component: _favorites_favorites_tiles_favorites_tiles_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesTilesComponent"]
      }, {
        path: '',
        redirectTo: '/favorites/grid',
        pathMatch: 'full'
      }]
    }, {
      path: 'action-log',
      component: _actions_log_actions_log_actions_log_component__WEBPACK_IMPORTED_MODULE_9__["ActionsLogComponent"]
    }, {
      path: '',
      redirectTo: '/favorites/grid',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _favorites_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"]
      /*PageNotFoundComponent*/

    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _favorites_favorites_favorites_component__WEBPACK_IMPORTED_MODULE_6__["FavoritesComponent"], _favorites_favorites_grid_favorites_grid_component__WEBPACK_IMPORTED_MODULE_7__["FavoritesGridComponent"], _favorites_favorites_tiles_favorites_tiles_component__WEBPACK_IMPORTED_MODULE_8__["FavoritesTilesComponent"], _actions_log_actions_log_actions_log_component__WEBPACK_IMPORTED_MODULE_9__["ActionsLogComponent"], _favorites_delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["DeleteComponent"], _favorites_edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, {
        enableTracing: false
      } // <-- debugging purposes only
      ), _angular_common__WEBPACK_IMPORTED_MODULE_12__["CommonModule"], _core_core_module__WEBPACK_IMPORTED_MODULE_13__["CoreModule"]],
      providers: [],
      entryComponents: [_favorites_delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_10__["DeleteComponent"], _favorites_edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_11__["EditComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/common/action-log/actions-log.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/common/action-log/actions-log.service.ts ***!
    \**********************************************************/

  /*! exports provided: ActionsLogService */

  /***/
  function srcAppCommonActionLogActionsLogServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionsLogService", function () {
      return ActionsLogService;
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


    var src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/action-log.interface */
    "./src/app/model/action-log.interface.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var ActionsLogService =
    /*#__PURE__*/
    function () {
      function ActionsLogService() {
        _classCallCheck(this, ActionsLogService);

        this.actionList = [{
          id: 1,
          date: Date.now(),
          websiteName: 'ynet',
          url: 'http://ynet.co.il',
          type: src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].add
        }, {
          id: 2,
          date: Date.now(),
          websiteName: 'cnn',
          url: 'http://cnn.com',
          type: src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].add
        }, {
          id: 3,
          date: Date.now(),
          websiteName: 'facbook',
          url: 'http://facebook',
          type: src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].edit
        }, {
          id: 4,
          date: Date.now(),
          websiteName: 'hotmail',
          url: 'http://hotmail.com',
          type: src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].delete
        }];
        this.actionsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.actions$ = this.actionsSubject.asObservable();
        this.actionsSubject.next(this.actionList);
      }

      _createClass(ActionsLogService, [{
        key: "add",
        value: function add(websiteName, url) {
          this.addAction(src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].add, websiteName, url);
        }
      }, {
        key: "edit",
        value: function edit(id, websiteName, url) {
          this.addAction(src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].edit, websiteName, url);
        }
      }, {
        key: "delete",
        value: function _delete(websiteName, url) {
          this.addAction(src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].delete, websiteName, url);
        }
      }, {
        key: "addAction",
        value: function addAction(actionType, websiteName, url) {
          var action = {
            id: this.actionList.length,
            websiteName: websiteName,
            url: url,
            date: Date.now(),
            type: actionType
          };
          this.actionList.push(action);
          this.actionsSubject.next(this.actionList);
        }
      }]);

      return ActionsLogService;
    }();

    ActionsLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ActionsLogService);
    /***/
  },

  /***/
  "./src/app/common/favorites/favorites.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/common/favorites/favorites.service.ts ***!
    \*******************************************************/

  /*! exports provided: FavoritesService */

  /***/
  function srcAppCommonFavoritesFavoritesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesService", function () {
      return FavoritesService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _action_log_actions_log_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../action-log/actions-log.service */
    "./src/app/common/action-log/actions-log.service.ts");

    var FavoritesService =
    /*#__PURE__*/
    function () {
      function FavoritesService(actionsLogService) {
        var _this = this;

        _classCallCheck(this, FavoritesService);

        this.actionsLogService = actionsLogService;
        this.favoritesList = [{
          id: 1,
          websiteName: 'ynet',
          url: 'http://ynet.co.il',
          img: '//unsplash.it/300/201'
        }, {
          id: 2,
          websiteName: 'cnn',
          url: 'http://cnn.com',
          img: '//unsplash.it/301/200'
        }, {
          id: 3,
          websiteName: 'facebook',
          url: 'http://facebook.com',
          img: '//unsplash.it/301/201'
        }, {
          id: 4,
          websiteName: 'hotmail.com',
          url: 'http://hotmail.com',
          img: '//unsplash.it/300/200'
        }, {
          id: 5,
          websiteName: 'google',
          url: 'http://google.com',
          img: '//unsplash.it/302/200'
        }, {
          id: 6,
          websiteName: 'angular univeristy',
          url: 'https://angular-university.io/',
          img: '//unsplash.it/302/201'
        }];
        this.favoriteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.favorites$ = this.favoriteSubject.asObservable();
        setTimeout(function () {
          _this.favoriteSubject.next(_this.favoritesList);
        }, 0);
      }

      _createClass(FavoritesService, [{
        key: "add",
        value: function add(websiteName, url) {
          var id = Math.trunc(Math.random() * 100);
          var width = 300 + Math.trunc(Math.random() * 10);
          var height = 200 + Math.trunc(Math.random() * 10);
          this.favoritesList.push({
            id: id,
            img: "//unsplash.it/".concat(width, "/").concat(height),
            websiteName: websiteName,
            url: url
          });
          this.favoriteSubject.next(_toConsumableArray(this.favoritesList));
          this.actionsLogService.add(websiteName, url);
        }
      }, {
        key: "remove",
        value: function remove(id, websiteName, url) {
          var index = this.favoritesList.findIndex(function (item) {
            return item.id === id;
          });

          if (index !== -1) {
            this.favoritesList.splice(index, 1);
            this.favoriteSubject.next(_toConsumableArray(this.favoritesList));
            this.actionsLogService.delete(websiteName, url);
          }
        }
      }, {
        key: "edit",
        value: function edit(id, websiteName, url) {
          var favorite = this.favoritesList.find(function (item) {
            return item.id === id;
          });

          if (favorite) {
            favorite.websiteName = websiteName;
            favorite.url = url;
            this.favoriteSubject.next(_toConsumableArray(this.favoritesList));
            this.actionsLogService.edit(id, websiteName, url);
          }
        }
      }]);

      return FavoritesService;
    }();

    FavoritesService.ctorParameters = function () {
      return [{
        type: _action_log_actions_log_service__WEBPACK_IMPORTED_MODULE_3__["ActionsLogService"]
      }];
    };

    FavoritesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], FavoritesService);
    /***/
  },

  /***/
  "./src/app/common/search/search.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/common/search/search.service.ts ***!
    \*************************************************/

  /*! exports provided: SearchService */

  /***/
  function srcAppCommonSearchSearchServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchService", function () {
      return SearchService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SearchService =
    /*#__PURE__*/
    function () {
      function SearchService() {
        _classCallCheck(this, SearchService);

        this._searchSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.search$ = this._searchSubject.asObservable();
      }

      _createClass(SearchService, [{
        key: "filter",
        value: function filter(_filter) {
          this._searchSubject.next(_filter);
        }
      }]);

      return SearchService;
    }();

    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SearchService);
    /***/
  },

  /***/
  "./src/app/core/action-formatter/action-formatter.pipe.ts":
  /*!****************************************************************!*\
    !*** ./src/app/core/action-formatter/action-formatter.pipe.ts ***!
    \****************************************************************/

  /*! exports provided: ActionFormatterPipe */

  /***/
  function srcAppCoreActionFormatterActionFormatterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionFormatterPipe", function () {
      return ActionFormatterPipe;
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


    var src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/model/action-log.interface */
    "./src/app/model/action-log.interface.ts");

    var ActionFormatterPipe =
    /*#__PURE__*/
    function () {
      function ActionFormatterPipe() {
        _classCallCheck(this, ActionFormatterPipe);
      }

      _createClass(ActionFormatterPipe, [{
        key: "transform",
        value: function transform(value) {
          var actionMessage = '';

          switch (value) {
            case src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].add:
              actionMessage = 'Website was added';
              break;

            case src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].delete:
              actionMessage = 'Website was deleted';
              break;

            case src_app_model_action_log_interface__WEBPACK_IMPORTED_MODULE_2__["ActionEnum"].edit:
              actionMessage = 'Website was edited';
              break;
          }

          return actionMessage;
        }
      }]);

      return ActionFormatterPipe;
    }();

    ActionFormatterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'actionFormatter'
    })], ActionFormatterPipe);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _action_formatter_action_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./action-formatter/action-formatter.pipe */
    "./src/app/core/action-formatter/action-formatter.pipe.ts");
    /* harmony import */


    var _my_modal_my_modal_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./my-modal/my-modal.directive */
    "./src/app/core/my-modal/my-modal.directive.ts");
    /* harmony import */


    var _my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./my-modal/my-modal.service */
    "./src/app/core/my-modal/my-modal.service.ts");
    /* harmony import */


    var _common_search_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../common/search/search.service */
    "./src/app/common/search/search.service.ts");
    /* harmony import */


    var _search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./search-filter/search-filter.pipe */
    "./src/app/core/search-filter/search-filter.pipe.ts");

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_action_formatter_action_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__["ActionFormatterPipe"], _my_modal_my_modal_directive__WEBPACK_IMPORTED_MODULE_4__["MyModalDirective"], _search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchFilterPipe"]],
      exports: [_action_formatter_action_formatter_pipe__WEBPACK_IMPORTED_MODULE_3__["ActionFormatterPipe"], _search_filter_search_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchFilterPipe"], _my_modal_my_modal_directive__WEBPACK_IMPORTED_MODULE_4__["MyModalDirective"]],
      providers: [_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_5__["MyModalService"], _common_search_search_service__WEBPACK_IMPORTED_MODULE_6__["SearchService"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/core/my-modal/my-modal.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/my-modal/my-modal.directive.ts ***!
    \*****************************************************/

  /*! exports provided: MyModalDirective */

  /***/
  function srcAppCoreMyModalMyModalDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyModalDirective", function () {
      return MyModalDirective;
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


    var _my_modal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./my-modal.service */
    "./src/app/core/my-modal/my-modal.service.ts");

    var MyModalDirective =
    /*#__PURE__*/
    function () {
      function MyModalDirective(viewContainerRef, myModalService) {
        _classCallCheck(this, MyModalDirective);

        this.viewContainerRef = viewContainerRef;
        this.myModalService = myModalService;
      }

      _createClass(MyModalDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.myModalService.setViewContainerRef(this.viewContainerRef);
        }
      }]);

      return MyModalDirective;
    }();

    MyModalDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]
      }, {
        type: _my_modal_service__WEBPACK_IMPORTED_MODULE_2__["MyModalService"]
      }];
    };

    MyModalDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[app-my-modal]'
    })], MyModalDirective);
    /***/
  },

  /***/
  "./src/app/core/my-modal/my-modal.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/core/my-modal/my-modal.service.ts ***!
    \***************************************************/

  /*! exports provided: MyModalService */

  /***/
  function srcAppCoreMyModalMyModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyModalService", function () {
      return MyModalService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/model/modal.interface */
    "./src/app/model/modal.interface.ts");

    var MyModalService =
    /*#__PURE__*/
    function () {
      function MyModalService(componentFactoryResolver) {
        _classCallCheck(this, MyModalService);

        this.componentFactoryResolver = componentFactoryResolver;
      }

      _createClass(MyModalService, [{
        key: "setViewContainerRef",
        value: function setViewContainerRef(viewContainerRef) {
          this.viewContainerRef = viewContainerRef;
        }
      }, {
        key: "openModal",
        value: function openModal(component, data) {
          var _this2 = this;

          var subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](); // Component

          var componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
          this.viewContainerRef.clear();
          var componentRef = this.viewContainerRef.createComponent(componentFactory); // Background

          var backgroundElem = document.querySelector('.app-my-modal-background');
          backgroundElem['style']['visibility'] = 'visible'; // Register to the events

          componentRef.instance['cancelEvent'].subscribe(function (val) {
            subject.next({
              operation: src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_4__["ModalCancel"]
            });

            _this2.close();
          });
          componentRef.instance['okEvent'].subscribe(function (data) {
            subject.next({
              operation: src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_4__["ModalOk"],
              data: data
            });

            _this2.close();
          }); // Pass data to input

          if (data) {
            componentRef.instance['data'] = data;
          }

          return subject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
        }
      }, {
        key: "close",
        value: function close() {
          this.viewContainerRef.clear();
          var backgroundElem = document.querySelector('.app-my-modal-background');
          backgroundElem['style']['visibility'] = 'hidden';
        }
      }]);

      return MyModalService;
    }();

    MyModalService.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]
      }];
    };

    MyModalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MyModalService);
    /***/
  },

  /***/
  "./src/app/core/search-filter/search-filter.pipe.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/search-filter/search-filter.pipe.ts ***!
    \**********************************************************/

  /*! exports provided: SearchFilterPipe */

  /***/
  function srcAppCoreSearchFilterSearchFilterPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchFilterPipe", function () {
      return SearchFilterPipe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SearchFilterPipe =
    /*#__PURE__*/
    function () {
      function SearchFilterPipe() {
        _classCallCheck(this, SearchFilterPipe);
      }

      _createClass(SearchFilterPipe, [{
        key: "transform",
        value: function transform(value) {
          var filterTxt = arguments.length <= 1 ? undefined : arguments[1];
          var favoriteItems = value;
          return favoriteItems.filter(function (item) {
            return item.websiteName.indexOf(filterTxt) !== -1 || item.url.indexOf(filterTxt) !== -1;
          });
        }
      }]);

      return SearchFilterPipe;
    }();

    SearchFilterPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
      name: 'searchFilter'
    })], SearchFilterPipe);
    /***/
  },

  /***/
  "./src/app/favorites/delete/delete/delete.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/favorites/delete/delete/delete.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesDeleteDeleteDeleteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-modal {\r\n    display:inline-block;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding-top: 1em;\r\n    background-color: white;\r\n}\r\n\r\n.my-modal__header {\r\n    padding-left: 1em;\r\n    padding-bottom:  1em;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.my-modal__content {\r\n    padding: 1em 2em;\r\n    \r\n}\r\n\r\n.my-modal__footer {    \r\n    display: -webkit-box;    \r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    padding-top: 1em;\r\n    margin-right: 1em;    \r\n    padding-bottom: 1em;\r\n}\r\n\r\n.btn {\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding : 0.5em 1.5em;\r\n    margin-left: 0.5em;\r\n    cursor: pointer;\r\n    background-color: white;\r\n}\r\n\r\n.btn:hover{\r\n    background-color: var(--bg-hover);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2RlbGV0ZS9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2RlbGV0ZS9kZWxldGUvZGVsZXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktbW9kYWwge1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHBhZGRpbmctdG9wOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm15LW1vZGFsX19oZWFkZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogIDFlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm15LW1vZGFsX19jb250ZW50IHtcclxuICAgIHBhZGRpbmc6IDFlbSAyZW07XHJcbiAgICBcclxufVxyXG5cclxuLm15LW1vZGFsX19mb290ZXIgeyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtOyAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nIDogMC41ZW0gMS41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/favorites/delete/delete/delete.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/favorites/delete/delete/delete.component.ts ***!
    \*************************************************************/

  /*! exports provided: DeleteComponent */

  /***/
  function srcAppFavoritesDeleteDeleteDeleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteComponent", function () {
      return DeleteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DeleteComponent =
    /*#__PURE__*/
    function () {
      function DeleteComponent() {
        _classCallCheck(this, DeleteComponent);

        this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.okEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DeleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "remove",
        value: function remove() {
          console.log('remove');
          this.okEvent.emit('ok');
        }
      }, {
        key: "cancel",
        value: function cancel() {
          console.log('cancel');
          this.cancelEvent.emit();
        }
      }]);

      return DeleteComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DeleteComponent.prototype, "cancelEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DeleteComponent.prototype, "okEvent", void 0);
    DeleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/delete/delete/delete.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete.component.css */
      "./src/app/favorites/delete/delete/delete.component.css")).default]
    })], DeleteComponent);
    /***/
  },

  /***/
  "./src/app/favorites/edit/edit/edit.component.css":
  /*!********************************************************!*\
    !*** ./src/app/favorites/edit/edit/edit.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesEditEditEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".my-modal {\r\n    display:inline-block;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding-top: 1em;\r\n    background-color: white;\r\n}\r\n\r\n.my-modal__header {\r\n    padding-left: 1em;\r\n    padding-bottom:  1em;\r\n    border-bottom: 1px solid black;\r\n}\r\n\r\n.my-modal__content {\r\n    padding: 1em 1em;\r\n    display:-webkit-box;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;    \r\n}\r\n\r\ninput {\r\n    display: block;\r\n    width: 100%;\r\n}\r\n\r\nlabel:not(:last-of-type) {\r\n    padding-bottom: 1em;\r\n}\r\n\r\n.my-modal__footer {    \r\n    display: -webkit-box;    \r\n    display: flex;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n    padding-top: 1em;\r\n    margin-right: 1em;    \r\n    padding-bottom: 1em;\r\n}\r\n\r\n.btn {\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    padding : 0.5em 1.5em;\r\n    margin-left: 0.5em;\r\n    cursor: pointer;\r\n    background-color: white;\r\n}\r\n\r\n.btn:hover{\r\n    background-color: var(--bg-hover);\r\n}\r\n\r\n.btn--disabled {\r\n    cursor: default;\r\n    background-color: grey;\r\n    pointer-events: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2VkaXQvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQVk7SUFBWixZQUFZO0lBQ1osNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IscUJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZXMvZWRpdC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1tb2RhbCB7XHJcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubXktbW9kYWxfX2hlYWRlciB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAgMWVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ubXktbW9kYWxfX2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMWVtIDFlbTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47ICAgIFxyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5sYWJlbDpub3QoOmxhc3Qtb2YtdHlwZSkge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcclxufVxyXG5cclxuLm15LW1vZGFsX19mb290ZXIgeyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtOyAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nIDogMC41ZW0gMS41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMC41ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmJ0bjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKTtcclxufVxyXG5cclxuLmJ0bi0tZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/favorites/edit/edit/edit.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/favorites/edit/edit/edit.component.ts ***!
    \*******************************************************/

  /*! exports provided: EditComponent */

  /***/
  function srcAppFavoritesEditEditEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditComponent", function () {
      return EditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EditComponent =
    /*#__PURE__*/
    function () {
      function EditComponent() {
        _classCallCheck(this, EditComponent);

        this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.okEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.data = {
          id: 1,
          websiteName: 'ji',
          url: 'sds',
          img: ''
        };
      }

      _createClass(EditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "save",
        value: function save() {
          this.okEvent.emit(this.data);
        }
      }, {
        key: "cancel",
        value: function cancel() {
          this.cancelEvent.emit();
        }
      }, {
        key: "isValid",
        value: function isValid() {
          return this.data.websiteName.trim().length !== 0 && this.data.url.trim() !== '';
        }
      }]);

      return EditComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EditComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditComponent.prototype, "cancelEvent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EditComponent.prototype, "okEvent", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/edit/edit/edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.component.css */
      "./src/app/favorites/edit/edit/edit.component.css")).default]
    })], EditComponent);
    /***/
  },

  /***/
  "./src/app/favorites/favorites-grid/favorites-grid.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/favorites/favorites-grid/favorites-grid.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesFavoritesGridFavoritesGridComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n.float-action {    \r\n    display: -webkit-box;    \r\n    display: flex;    \r\n    -webkit-box-pack: end;    \r\n            justify-content: flex-end;\r\n    visibility: hidden; \r\n}\r\n\r\ntr:hover .float-action {\r\n    visibility: visible;\r\n}\r\n\r\n.float-action-botton {\r\n    margin: 0.25em;\r\n    cursor: pointer;\r\n\r\n}\r\n\r\nth:first-of-type {\r\n    width:30%;\r\n}\r\n\r\nth:last-of-type {\r\n    width: 20%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy1ncmlkL2Zhdm9yaXRlcy1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy1ncmlkL2Zhdm9yaXRlcy1ncmlkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mbG9hdC1hY3Rpb24geyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbn1cclxuXHJcbnRyOmhvdmVyIC5mbG9hdC1hY3Rpb24ge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLmZsb2F0LWFjdGlvbi1ib3R0b24ge1xyXG4gICAgbWFyZ2luOiAwLjI1ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG59XHJcblxyXG50aDpmaXJzdC1vZi10eXBlIHtcclxuICAgIHdpZHRoOjMwJTtcclxufVxyXG5cclxudGg6bGFzdC1vZi10eXBlIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/favorites/favorites-grid/favorites-grid.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/favorites/favorites-grid/favorites-grid.component.ts ***!
    \**********************************************************************/

  /*! exports provided: FavoritesGridComponent */

  /***/
  function srcAppFavoritesFavoritesGridFavoritesGridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesGridComponent", function () {
      return FavoritesGridComponent;
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


    var src_app_common_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/favorites/favorites.service */
    "./src/app/common/favorites/favorites.service.ts");
    /* harmony import */


    var src_app_common_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/search/search.service */
    "./src/app/common/search/search.service.ts");
    /* harmony import */


    var src_app_core_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/my-modal/my-modal.service */
    "./src/app/core/my-modal/my-modal.service.ts");
    /* harmony import */


    var _delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../delete/delete/delete.component */
    "./src/app/favorites/delete/delete/delete.component.ts");
    /* harmony import */


    var src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/model/modal.interface */
    "./src/app/model/modal.interface.ts");
    /* harmony import */


    var _edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../edit/edit/edit.component */
    "./src/app/favorites/edit/edit/edit.component.ts");

    var FavoritesGridComponent =
    /*#__PURE__*/
    function () {
      function FavoritesGridComponent(favoritesService, searchService, myModalServcice) {
        var _this3 = this;

        _classCallCheck(this, FavoritesGridComponent);

        this.favoritesService = favoritesService;
        this.searchService = searchService;
        this.myModalServcice = myModalServcice;
        this.favorites$ = this.favoritesService.favorites$;
        this.filterTxt = '';
        this._searchSubscribe = this.searchService.search$.subscribe(function (filterTxt) {
          return _this3.filterTxt = filterTxt;
        });
      }

      _createClass(FavoritesGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._searchSubscribe.unsubscribe();
        }
      }, {
        key: "delete",
        value: function _delete(favorite) {
          var _this4 = this;

          this.myModalServcice.openModal(_delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"]).subscribe(function (val) {
            if (val.operation === src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_6__["ModalOk"]) {
              _this4.favoritesService.remove(favorite.id, favorite.websiteName, favorite.url);
            }
          });
          ;
        }
      }, {
        key: "edit",
        value: function edit(favorite) {
          var _this5 = this;

          this.myModalServcice.openModal(_edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], favorite).subscribe(function (data) {
            if (data.operation === src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_6__["ModalOk"]) {
              _this5.favoritesService.edit(favorite.id, data.data.websiteName, data.data.url);
            }
          });
          ;
        }
      }]);

      return FavoritesGridComponent;
    }();

    FavoritesGridComponent.ctorParameters = function () {
      return [{
        type: src_app_common_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]
      }, {
        type: src_app_common_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: src_app_core_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_4__["MyModalService"]
      }];
    };

    FavoritesGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites-grid',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites-grid.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-grid/favorites-grid.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites-grid.component.css */
      "./src/app/favorites/favorites-grid/favorites-grid.component.css")).default]
    })], FavoritesGridComponent);
    /***/
  },

  /***/
  "./src/app/favorites/favorites-tiles/favorites-tiles.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/favorites/favorites-tiles/favorites-tiles.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesFavoritesTilesFavoritesTilesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tiles-content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.card {    \r\n    width: 20%;\r\n}\r\n\r\n@media (max-width: 1500px){\r\n    .card{\r\n        width: 25%;\r\n    }\r\n}\r\n\r\n@media (max-width: 1200px){\r\n    .card{\r\n        width: 33%;\r\n    }\r\n}\r\n\r\n/* at 1000px  move side nav to top*/\r\n\r\n@media (max-width: 800px){\r\n    .card{\r\n        width: 50%;\r\n    }\r\n}\r\n\r\n@media (max-width: 500px){\r\n    .card{\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n.card-internal {\r\n    margin: 0.5em;  \r\n    border: 2px solid black;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n\r\n.card img {\r\n    display: block;\r\n    max-width: 100%;        \r\n\r\n}\r\n\r\n.card .name {\r\n    margin-top: 0.25em;\r\n    text-align: center;    \r\n    white-space: nowrap;    \r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.float-action {    \r\n    display: -webkit-box;    \r\n    display: flex;    \r\n    -webkit-box-pack: end;    \r\n            justify-content: flex-end;\r\n    visibility: hidden; \r\n  \r\n}\r\n\r\n.card-internal:hover {\r\n background-color: var(--bg-hover);\r\n}\r\n\r\n.card-internal:hover .float-action {\r\n    visibility: visible;\r\n}\r\n\r\n.float-action-botton {\r\n    margin: 0.25em;\r\n    cursor: pointer;\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy10aWxlcy9mYXZvcml0ZXMtdGlsZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQSxtQ0FBbUM7O0FBR25DO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBTUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsa0JBQWtCOztBQUV0Qjs7QUFFQTtDQUNDLGlDQUFpQztBQUNsQzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlOztBQUVuQiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlcy9mYXZvcml0ZXMtdGlsZXMvZmF2b3JpdGVzLXRpbGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZXMtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZCB7ICAgIFxyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCl7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCl7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBhdCAxMDAwcHggIG1vdmUgc2lkZSBuYXYgdG8gdG9wKi9cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpe1xyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KXtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLmNhcmQtaW50ZXJuYWwge1xyXG4gICAgbWFyZ2luOiAwLjVlbTsgIFxyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNhcmQgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAgICAgICAgXHJcblxyXG59XHJcblxyXG4uY2FyZCAubmFtZSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgICAgXHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5mbG9hdC1hY3Rpb24geyAgICBcclxuICAgIGRpc3BsYXk6IGZsZXg7ICAgIFxyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgXHJcbiAgXHJcbn1cclxuXHJcbi5jYXJkLWludGVybmFsOmhvdmVyIHtcclxuIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWhvdmVyKTtcclxufVxyXG5cclxuLmNhcmQtaW50ZXJuYWw6aG92ZXIgLmZsb2F0LWFjdGlvbiB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcblxyXG4uZmxvYXQtYWN0aW9uLWJvdHRvbiB7XHJcbiAgICBtYXJnaW46IDAuMjVlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/favorites/favorites-tiles/favorites-tiles.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/favorites/favorites-tiles/favorites-tiles.component.ts ***!
    \************************************************************************/

  /*! exports provided: FavoritesTilesComponent */

  /***/
  function srcAppFavoritesFavoritesTilesFavoritesTilesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesTilesComponent", function () {
      return FavoritesTilesComponent;
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


    var src_app_common_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/common/favorites/favorites.service */
    "./src/app/common/favorites/favorites.service.ts");
    /* harmony import */


    var src_app_common_search_search_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/common/search/search.service */
    "./src/app/common/search/search.service.ts");
    /* harmony import */


    var src_app_core_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/my-modal/my-modal.service */
    "./src/app/core/my-modal/my-modal.service.ts");
    /* harmony import */


    var _delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../delete/delete/delete.component */
    "./src/app/favorites/delete/delete/delete.component.ts");
    /* harmony import */


    var src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/model/modal.interface */
    "./src/app/model/modal.interface.ts");
    /* harmony import */


    var _edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../edit/edit/edit.component */
    "./src/app/favorites/edit/edit/edit.component.ts");

    var FavoritesTilesComponent =
    /*#__PURE__*/
    function () {
      function FavoritesTilesComponent(favoritesService, searchService, modalService) {
        var _this6 = this;

        _classCallCheck(this, FavoritesTilesComponent);

        this.favoritesService = favoritesService;
        this.searchService = searchService;
        this.modalService = modalService;
        this.favorites$ = this.favoritesService.favorites$;
        this.filterTxt = '';
        this._searchSubscribe = this.searchService.search$.subscribe(function (filterTxt) {
          return _this6.filterTxt = filterTxt;
        });
      }

      _createClass(FavoritesTilesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._searchSubscribe.unsubscribe();
        }
      }, {
        key: "delete",
        value: function _delete(favorite) {
          var _this7 = this;

          this.modalService.openModal(_delete_delete_delete_component__WEBPACK_IMPORTED_MODULE_5__["DeleteComponent"]).subscribe(function (val) {
            if (val.operation === src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_6__["ModalOk"]) {
              _this7.favoritesService.remove(favorite.id, favorite.websiteName, favorite.url);
            }
          });
        }
      }, {
        key: "edit",
        value: function edit(favorite) {
          var _this8 = this;

          this.modalService.openModal(_edit_edit_edit_component__WEBPACK_IMPORTED_MODULE_7__["EditComponent"], favorite).subscribe(function (data) {
            if (data.operation === src_app_model_modal_interface__WEBPACK_IMPORTED_MODULE_6__["ModalOk"]) {
              _this8.favoritesService.edit(favorite.id, data.data.websiteName, data.data.url);
            }
          });
        }
      }]);

      return FavoritesTilesComponent;
    }();

    FavoritesTilesComponent.ctorParameters = function () {
      return [{
        type: src_app_common_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_2__["FavoritesService"]
      }, {
        type: src_app_common_search_search_service__WEBPACK_IMPORTED_MODULE_3__["SearchService"]
      }, {
        type: src_app_core_my_modal_my_modal_service__WEBPACK_IMPORTED_MODULE_4__["MyModalService"]
      }];
    };

    FavoritesTilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites-tiles',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites-tiles.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites-tiles/favorites-tiles.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites-tiles.component.css */
      "./src/app/favorites/favorites-tiles/favorites-tiles.component.css")).default]
    })], FavoritesTilesComponent);
    /***/
  },

  /***/
  "./src/app/favorites/favorites/favorites.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/favorites/favorites/favorites.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFavoritesFavoritesFavoritesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.favorites-header {    \r\n    padding-top: 0.7em ;    \r\n    padding-bottom: 0.7em ;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-bottom: 0.3em;\r\n    \r\n}\r\n\r\n@media (max-width:600px) {\r\n    .favorites-header {\r\n        -webkit-box-orient: vertical;\r\n        -webkit-box-direction: normal;\r\n                flex-direction: column;\r\n        -webkit-box-align: center;\r\n                align-items: center;\r\n    }\r\n    \r\n    .favorites-header div {\r\n        margin-bottom: 0.4em;\r\n    }\r\n}\r\n\r\n.favorites-header--title {     \r\n     font-weight: bold;\r\n     font-size: 1.5rem;\r\n }\r\n\r\n.search {\r\n    margin-left: auto;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    background-color: white;    \r\n    margin-right: 0.5em;\r\n    border-radius: 10px;\r\n    padding-left: 0.5em;\r\n    border: 1px solid black;\r\n}\r\n\r\n@media (max-width:600px) {\r\n    .search {\r\n        margin-left: initial;\r\n        -webkit-box-ordinal-group:4;\r\n                order:3;\r\n    }\r\n}\r\n\r\n.search input {\r\n    border: 0;\r\n    padding-top:0.3em;\r\n    padding-bottom:0.3em;\r\n    padding-left: 0.2em;\r\n}\r\n\r\n.search input:focus {\r\n    outline: none;\r\n}\r\n\r\n.search div {\r\n    padding-top:0.3em;\r\n    padding-bottom:0.3em;\r\n    padding-right: 0.3em;\r\n    \r\n}\r\n\r\n.actions-toolbar {\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.btn {\r\n    border: 1px solid black;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    padding: 0.3em 0.9em;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n\r\n}\r\n\r\n.btn:hover {\r\n    background-color: lightslategray;\r\n}\r\n\r\n.btn--disabled {\r\n    cursor: default;\r\n    background-color: grey;\r\n    pointer-events: none;\r\n}\r\n\r\n.add-dialog {\r\n    background-color:rgba(85, 84, 84, 0.877);;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n\r\n.dialog {\r\n    margin:auto;\r\n    background-color: white;\r\n    opacity: initial;\r\n    border: 2px solid black;\r\n    border-radius: 5px;\r\n    width: 50vw;    \r\n    box-shadow: 50px 50px 100px ;\r\n}\r\n\r\n.dialog__header {\r\n    padding: 1em 3em;\r\n    font-size: large;\r\n    border-bottom: 1px solid gray;    \r\n    text-align: center;\r\n}\r\n\r\n.dialog__content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;    \r\n    margin: 1em 1em;\r\n}\r\n\r\n.dialog__content label, .dialog__content input {\r\n    width: 100%;\r\n}\r\n\r\n.dialog__content label:not(:last-of-type) {\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n.dialog__content input {\r\n    display: block;\r\n    height: 2em;\r\n}\r\n\r\n.dialog__footer {\r\n display: -webkit-box;\r\n display: flex;\r\n justify-content: space-around;\r\n padding-top: 1em;\r\n padding-bottom: 1em;\r\n}\r\n\r\n.dialog__footer btn {    \r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmF2b3JpdGVzL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG9CQUFvQjs7QUFFeEI7O0FBRUE7SUFDSTtRQUNJLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0Qix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4QjtBQUNKOztBQUVDO0tBQ0ksaUJBQWlCO0tBQ2pCLGlCQUFpQjtDQUNyQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7UUFDcEIsMkJBQU87Z0JBQVAsT0FBTztJQUNYO0FBQ0o7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7O0FBRXhCOztBQUVBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHNCQUFzQjtJQUN0QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLEtBQUs7SUFDTCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFJQTtDQUNDLG9CQUFhO0NBQWIsYUFBYTtDQUNiLDZCQUE2QjtDQUM3QixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0FBQ3BCOztBQUVBO0FBQ0EiLCJmaWxlIjoic3JjL2FwcC9mYXZvcml0ZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mYXZvcml0ZXMtaGVhZGVyIHsgICAgXHJcbiAgICBwYWRkaW5nLXRvcDogMC43ZW0gOyAgICBcclxuICAgIHBhZGRpbmctYm90dG9tOiAwLjdlbSA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zZW07XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6NjAwcHgpIHtcclxuICAgIC5mYXZvcml0ZXMtaGVhZGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5mYXZvcml0ZXMtaGVhZGVyIGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40ZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbiAuZmF2b3JpdGVzLWhlYWRlci0tdGl0bGUgeyAgICAgXHJcbiAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiB9XHJcblxyXG4uc2VhcmNoIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAgICBcclxuICAgIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjVlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCkge1xyXG4gICAgLnNlYXJjaCB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGluaXRpYWw7XHJcbiAgICAgICAgb3JkZXI6MztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5zZWFyY2ggaW5wdXQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgcGFkZGluZy10b3A6MC4zZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowLjNlbTtcclxuICAgIHBhZGRpbmctbGVmdDogMC4yZW07XHJcbn1cclxuXHJcbi5zZWFyY2ggaW5wdXQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnNlYXJjaCBkaXYge1xyXG4gICAgcGFkZGluZy10b3A6MC4zZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowLjNlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuM2VtO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hY3Rpb25zLXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMC4zZW0gMC45ZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcblxyXG59XHJcblxyXG4uYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2xhdGVncmF5O1xyXG59XHJcblxyXG4uYnRuLS1kaXNhYmxlZCB7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5hZGQtZGlhbG9nIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg4NSwgODQsIDg0LCAwLjg3Nyk7O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZGlhbG9nIHtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvcGFjaXR5OiBpbml0aWFsO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogNTB2dzsgICAgXHJcbiAgICBib3gtc2hhZG93OiA1MHB4IDUwcHggMTAwcHggO1xyXG59XHJcbi5kaWFsb2dfX2hlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxZW0gM2VtO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmF5OyAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmRpYWxvZ19fY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgICAgXHJcbiAgICBtYXJnaW46IDFlbSAxZW07XHJcbn1cclxuXHJcbi5kaWFsb2dfX2NvbnRlbnQgbGFiZWwsIC5kaWFsb2dfX2NvbnRlbnQgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5kaWFsb2dfX2NvbnRlbnQgbGFiZWw6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59XHJcblxyXG4uZGlhbG9nX19jb250ZW50IGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgaGVpZ2h0OiAyZW07XHJcbn1cclxuXHJcblxyXG5cclxuLmRpYWxvZ19fZm9vdGVyIHtcclxuIGRpc3BsYXk6IGZsZXg7XHJcbiBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuIHBhZGRpbmctdG9wOiAxZW07XHJcbiBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG59XHJcblxyXG4uZGlhbG9nX19mb290ZXIgYnRuIHsgICAgXHJcbn1cclxuXHJcblxyXG5cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/favorites/favorites/favorites.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/favorites/favorites/favorites.component.ts ***!
    \************************************************************/

  /*! exports provided: FavoritesComponent */

  /***/
  function srcAppFavoritesFavoritesFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritesComponent", function () {
      return FavoritesComponent;
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
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/common/search/search.service */
    "./src/app/common/search/search.service.ts");
    /* harmony import */


    var src_app_common_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/common/favorites/favorites.service */
    "./src/app/common/favorites/favorites.service.ts");

    var FavoritesComponent =
    /*#__PURE__*/
    function () {
      function FavoritesComponent(activatedRoute, router, searchService, favoritesService) {
        _classCallCheck(this, FavoritesComponent);

        this.activatedRoute = activatedRoute;
        this.router = router;
        this.searchService = searchService;
        this.favoritesService = favoritesService;
        this.displayAddDialog = false;
        this.websiteName = '';
        this.url = '';
        this._isGrid = false;
      }

      _createClass(FavoritesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this._isGrid = this.router.url.indexOf('grid') !== -1;
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this9 = this;

          var filter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this._searchElem.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (event) {
            return event.target.value.trim();
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (val) {
            return console.log(val);
          }));
          this.filterSubsciption = filter$.subscribe(function (val) {
            return _this9.searchService.filter(val);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.filterSubsciption.unsubscribe();
        }
      }, {
        key: "toggle",
        value: function toggle(target) {
          switch (target) {
            case 'GRID':
              this._isGrid = true;
              this.router.navigate(['favorites/grid']);
              break;

            case 'TILES':
              this._isGrid = false;
              this.router.navigate(['favorites/tiles']);
              break;
          }
        }
      }, {
        key: "addNewWebsite",
        value: function addNewWebsite() {
          this.displayAddDialog = true;
        }
      }, {
        key: "closeNewAddDialog",
        value: function closeNewAddDialog() {
          this.displayAddDialog = false;
          this.resetAddData();
        }
      }, {
        key: "submit",
        value: function submit() {
          this.favoritesService.add(this.websiteName, this.url);
          this.displayAddDialog = false;
          this.resetAddData();
        }
      }, {
        key: "isValid",
        value: function isValid() {
          if (this._addForm && this._addForm.value && this._addForm.value.websiteName) {
            return this._addForm.valid && this._addForm.value.websiteName.trim() !== '' && this._addForm.value.url.trim() !== '';
          }

          return false;
        }
      }, {
        key: "resetAddData",
        value: function resetAddData() {
          this.websiteName = '';
          this.url = '';
        }
      }, {
        key: "isGrid",
        get: function get() {
          return this._isGrid;
        }
      }]);

      return FavoritesComponent;
    }();

    FavoritesComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_common_search_search_service__WEBPACK_IMPORTED_MODULE_5__["SearchService"]
      }, {
        type: src_app_common_favorites_favorites_service__WEBPACK_IMPORTED_MODULE_6__["FavoritesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FavoritesComponent.prototype, "websiteName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FavoritesComponent.prototype, "url", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('search', {
      static: true
    })], FavoritesComponent.prototype, "_searchElem", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('f', {
      static: false
    })], FavoritesComponent.prototype, "_addForm", void 0);
    FavoritesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/favorites/favorites/favorites.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorites.component.css */
      "./src/app/favorites/favorites/favorites.component.css")).default]
    })], FavoritesComponent);
    /***/
  },

  /***/
  "./src/app/model/action-log.interface.ts":
  /*!***********************************************!*\
    !*** ./src/app/model/action-log.interface.ts ***!
    \***********************************************/

  /*! exports provided: ActionEnum */

  /***/
  function srcAppModelActionLogInterfaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ActionEnum", function () {
      return ActionEnum;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ActionEnum;

    (function (ActionEnum) {
      ActionEnum[ActionEnum["add"] = 0] = "add";
      ActionEnum[ActionEnum["edit"] = 1] = "edit";
      ActionEnum[ActionEnum["delete"] = 2] = "delete";
    })(ActionEnum || (ActionEnum = {}));

    ;
    ;
    /***/
  },

  /***/
  "./src/app/model/modal.interface.ts":
  /*!******************************************!*\
    !*** ./src/app/model/modal.interface.ts ***!
    \******************************************/

  /*! exports provided: ModalCancel, ModalOk */

  /***/
  function srcAppModelModalInterfaceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalCancel", function () {
      return ModalCancel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalOk", function () {
      return ModalOk;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ModalCancel = "cancel";
    var ModalOk = "ok";
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\meir\Interview\porjects\wdapt\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map