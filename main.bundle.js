webpackJsonp([1,4],{

/***/ 289:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 289;


/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(404);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/main.js.map

/***/ }),

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(464),
            styles: [__webpack_require__(458)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/app.component.js.map

/***/ }),

/***/ 399:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hero_hero_component__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__our_services_our_services_component__ = __webpack_require__(403);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_7__hero_hero_component__["a" /* HeroComponent */],
                __WEBPACK_IMPORTED_MODULE_8__our_services_our_services_component__["a" /* OurServicesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/app.module.js.map

/***/ }),

/***/ 400:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroComponent = (function () {
    function HeroComponent() {
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'hero',
            template: __webpack_require__(465),
            styles: [__webpack_require__(459)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeroComponent);
    return HeroComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/hero.component.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'home',
            template: __webpack_require__(466),
            styles: [__webpack_require__(460)]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/home.component.js.map

/***/ }),

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__(467),
            styles: [__webpack_require__(461)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/nav.component.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OurServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurServicesComponent = (function () {
    function OurServicesComponent() {
    }
    OurServicesComponent.prototype.ngOnInit = function () {
    };
    OurServicesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'our-services',
            template: __webpack_require__(468),
            styles: [__webpack_require__(462)]
        }), 
        __metadata('design:paramtypes', [])
    ], OurServicesComponent);
    return OurServicesComponent;
}());
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/our-services.component.js.map

/***/ }),

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/ubuntu/workspace/rkb1/src/environment.js.map

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "#hero {\n    background: url(" + __webpack_require__(481) + ") center center no-repeat;\n    /*background: url(\"../../assets/img/city.jpg\") center center no-repeat;*/\n    background-attachment: fixed;\n    background-size: cover;\n    min-height: 100vh;\n    /*min-height: calc(100vh - 55px);*/\n    width: 100%;\n}\n\n#hero-img {\n    \n}\n\n#hero-content {\n    background: rgba(255,255,255,0.15);\n    letter-spacing: 2px;\n    max-width: 60rem;\n    text-transform: uppercase;\n}\n\n#hero-btn:hover {\n    cursor: pointer;\n}\n\n.hero-content-text {\n    padding: 1rem;\n}\n\n.hero-content-text > h1 {\n    font-size: 1.5rem;\n    text-align: center;\n}\n\n.hero-content-text > p {\n    font-size: 1rem;\n    text-align: center;\n}\n\n#hero-content-title {\n    border: 2px solid;\n    color: #fff;\n    width: 316px;\n}\n\n#hero-content-subtitle {\n    border-left: 2px solid;\n    color: #fefefe;\n    text-transform: lowercase;\n}\n\n@media (max-width: 991px) {\n    #hero {\n       /*min-height: calc(100vh - 95px);*/\n    }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, ".wrapper {\n    box-shadow: 0.1rem 0 1rem 0.1rem rgba(0,0,0,0.1),\n                -0.1rem 0 1rem 0.1rem rgba(0,0,0,0.1),\n                0 -0.1rem 1rem 0.1rem rgba(0,0,0,0.1);\n    /*max-width: 1800px;*/\n    /*min-height: 4000px;*/\n    /*margin-top: -10%;*/\n}\n\n@media (max-width: 576px) {\n    .wrapper {\n        margin-top: 0;\n    }\n}\n\n@media (min-width: 1800px) {\n    .wrapper {\n        margin-left: auto !important;\n        margin-right: auto !important;\n        /*margin-top: -180px;*/\n    }\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "#nav {\n    /*background: linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0));*/\n    background: var(--primary-color);\n    /*background: transparent;*/\n    border-bottom: 1px solid #333;\n}\n\n.navbar-brand {\n    text-decoration: none;\n    color: var(--font-color);\n    /*letter-spacing: 2px;*/\n    text-transform: uppercase;\n}\n\n.nav-link {\n    color: var(--font-color);\n    letter-spacing: 2px;\n    padding: 0 1rem;\n    text-transform: uppercase;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)();
// imports


// module
exports.push([module.i, "#about {\n    background: #fff;\n    color: var(--font-color);\n}\n\n#title {\n    letter-spacing: 2px;\n}\n\n#content {\n    letter-spacing: 2px;\n    text-align: justify;\n}\n\n/*feature one*/\n#feature-one {\n    /*background: seashell;*/\n}\n\n.feature-content {\n    padding: 8rem 0;\n    overflow: hidden;\n}\n\n.feature-content > div > h2 {\n    color: #777;\n}\n\n.feature-content > div > h6 {\n    color: #999;\n}\n\n.feature-content > div > p {\n    color: #a1a1a1;\n}\n\n.feature-img {\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n/*feature two*/\n#feature-two {\n    background: #fcfcfc;\n    color: var(--font-color);\n}\n\n/*testimonials*/\n#testimonials {\n    /*background: floralwhite;*/\n}\n\n.entry {\n    background: rgba(255,255,255,0.7);\n}\n\n.testimonial-img {\n    border: 2px solid #a7a5a6;\n    border-radius: 50%;\n}\n\n/*contact*/\n#contact {\n    background: url(" + __webpack_require__(480) + ") center bottom no-repeat;\n    /*background-attachment: fixed;*/\n    background-size: cover;\n    width: 100%;\n}\n\n#contact > div > .row {\n    background: rgba(255,255,255,0.7);\n}\n\n.form-input, .form-text {\n    background: rgba(255,255,255,0.7);\n}\n\n/*footer*/\n#footer {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n}\n\n.footer-content > p {\n    color: #a1a1a1;\n    font-size: 11px;\n    letter-spacing: 1px;\n    line-height: 1.3em;\n    margin-bottom: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<home></home>"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div id=\"hero\" class=\"d-flex justify-content-center align-items-center flex-row flex-wrap\">\n    <!--<img src=\"../../assets/images/succulentBlurBG.jpg\" id=\"hero-img\" class=\"mx-auto w-100\" alt=\"Responsive hero image\">-->\n    \n    <div id=\"hero-content\" class=\"row col-9 d-flex flex-row flex-wrap justify-content-center align-items-center\">\n        <div class=\"hero-content-img col-xs-12 d-flex justify-content-center align-items-center\">\n            <!--<img src=\"../../assets/images/logo.gif\" alt=\"logo\">-->\n        </div>\n        <div class=\"hero-content-text row col-12 d-flex justify-content-center align-items-center\">\n            <div class=\"row col-12 justify-content-center align-items-center\">\n                <div class=\"d-flex col-12 col-lg-6 px-0 justify-content-center\">\n                    <h1 id=\"hero-content-title\" class=\"p-2 display-3 ml-lg-auto\">\n                        Rancho<br>\n                        Kitchen<br>\n                        &<br>\n                        Baths\n                    </h1>\n                </div>\n                <div class=\"col-lg-6\"></div>\n                <div class=\"w-100\"></div>\n                <div class=\"col-lg-6\"></div>\n                <p id=\"hero-content-subtitle\" class=\"d-flex justify-content-center col-6 col-lg-6 pl-2\"><em>\"...making your home a masterpiece\"</em></p>\n            </div>\n            <div class=\"d-flex justify-content-start flex-column pt-4\">\n                <button type=\"button\" id=\"hero-btn\" class=\"btn btn-outline-primary\">Free Quote</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<div id=\"top\"></div>\n<app-nav></app-nav>\n<hero></hero>\n<our-services></our-services>"

/***/ }),

/***/ 467:
/***/ (function(module, exports) {

module.exports = "<nav id=\"nav\" class=\"navbar navbar-full fixed-top navbar-toggleable-md navbar-light bg-faded\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"brand text-center\">\n    <a class=\"navbar-brand w-100\" href=\"#top\">Rancho Kitchen & Baths</a>\n  </div>\n  <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n    <ul class=\"navbar-nav text-center ml-lg-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#about\">About</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#feature-two\">Gallery</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#contact\">Contact</a>\n      </li>\n    </ul>\n    <!--<form class=\"form-inline my-2 my-lg-0\">-->\n    <!--  <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">-->\n    <!--  <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>-->\n    <!--</form>-->\n  </div>\n</nav>"

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

module.exports = "<!--our-services-->\n<section id=\"about\" class=\"d-flex justify-content-center align-items-center py-10vh inset-shadow\">\n  <!--<div class=\"d-flex flex-column justify-content-center align-items-center container my-4\">-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"feature-content gradient box-shadow-2 mx-3\">\n        <div class=\"col-10 offset-1 pb-1\">\n          <h1 id=\"title\" class=\"display-4 text-center\">About</h1>\n          <p id=\"content\">\n            Rancho Kitchen and Baths, Inc. is a local independent family-owned and operated business. Our number one goal is to treat our clients with care and respect. We strive to make everyone we work with feel their job is our top priority. Our staff members\n            are real people who care about your dreams and will make every effort to make them a reality.\n          </p>\n          <!--</div>-->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--feature-one-->\n<section id=\"feature-one\" class=\"gradient\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"feature-content row col-10 offset-1\">\n        <div class=\"col-lg-6\">\n          <img src=\"../../assets/images/32_kitchen-12.jpg\" width=\"100%\" class=\"feature-img\">\n        </div>\n        <div class=\"col-lg-5 offset-lg-1 pt-1\">\n          <div class=\"entry box-shadow-3 px-3 py-2\">\n            <h6>Get your</h6>\n            <h2>New Dream Home Design</h2>\n            <p class=\"lead\">without the new home price tag</p>\n            <p>Our talented and professional “design build” team can turn your ideas and dreams into reality. Unique designs, beautiful cabinetry and rich finish materials, create rooms that inspire the best life possible in truly exceptional surroundings.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--Gallery-->\n<section id=\"feature-two\" class=\"inset-shadow py-10vh\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"feature-content\">\n        <div class=\"col-10 offset-1\">\n          <h1 id=\"feature-two-title\" class=\"display-4 text-center p-4\">Our Gallery</h1>\n          <div class=\"card-columns\">\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/26_kitchen-6.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/21_kitchen-1.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/28_kitchen-8.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            \n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/25_kitchen-5.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/31_kitchen-11.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/22_kitchen-2.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            \n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/24_kitchen-4.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/33_kitchen-13.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/23_kitchen-3.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n            <div class=\"card mb-1\">\n              <img class=\"card-img-top img-fluid\" src=\"../../assets/images/30_kitchen-10.jpg\" alt=\"Card image\" class=\"feature-img\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--testimonials-->\n<section id=\"testimonials\" class=\"py-10vh gradient\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"testimonial-content\">\n        <div class=\"col-10 offset-1 col-lg-8 offset-lg-2\">\n          <h1 id=\"feature-two-title\" class=\"display-4 text-center p-4\">Reviews</h1>\n          <div class=\"row py-2rem\">\n            <div class=\"entry box-shadow-2\">\n              <div class=\"col-12 col-lg-3 d-flex justify-content-center\">\n                <!--<img src=\"../../assets/img/avatar.jpg\" alt=\"portrait\" class=\"testimonial-img\" height=\"150px\" width=\"150px\">-->\n              </div>\n              <div class=\"col-12 col-lg-9\">\n                <h2 class=\"title\">Kelly</h2>\n                <p class=\"testimonial-text\">“The staff at Rancho Kitchen and Baths did a great job designing and installing our beautiful kitchen. The installers were pleasant, respectful and clean. My son was sad to see them go when the job was finished. The experience was wonderful and we look forward to remodeling our master bathroom in the very near future.”</p>\n                <h6 class=\"testimonial-footer\">Poway, CA</h6>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row py-2rem\">\n            <div class=\"entry box-shadow-2\">\n              <div class=\"col-12 col-lg-3 d-flex justify-content-center\">\n                <!--<img src=\"../../assets/img/avatar.jpg\" alt=\"portrait\" class=\"testimonial-img\" height=\"150px\" width=\"150px\">-->\n              </div>\n              <div class=\"col-12 col-lg-9\">\n                <h2 class=\"title\">Nicole</h2>\n                <p class=\"testimonial-text\">“What a breath of fresh air! That’s what it felt like when I met with my designer. She was friendly and enthusiastic, not snobby like some places I had visited. My designer helped me put together my dream kitchen and I just love it. Thank you Rancho Kitchen and Baths for making my remodel a success!”</p>\n                <h6 class=\"testimonial-footer\">Rancho Penasquitos, CA</h6>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row py-2rem\">\n            <div class=\"entry box-shadow-2\">\n              <div class=\"col-12 col-lg-3 d-flex justify-content-center\">\n                <!--<img src=\"../../assets/img/avatar.jpg\" alt=\"portrait\" class=\"testimonial-img\" height=\"150px\" width=\"150px\">-->\n              </div>\n              <div class=\"col-12 col-lg-9\">\n                <h2 class=\"title\">Paul</h2>\n                <p class=\"testimonial-text\">“Kudos to a great company that thinks of their clients needs. Dave created a detailed schedule of our project and actually completed our project a few days early. It was a pleasure to deal with such conscientious people. I would recommend Rancho Kitchen and Baths to any of my friends with confidence.”</p>\n                <h6 class=\"testimonial-footer\">Rancho Bernardo, CA</h6>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row py-2rem\">\n            <div class=\"entry box-shadow-2\">\n              <div class=\"col-12 col-lg-3 d-flex justify-content-center\">\n                <!--<img src=\"../../assets/img/avatar.jpg\" alt=\"portrait\" class=\"testimonial-img\" height=\"150px\" width=\"150px\">-->\n              </div>\n              <div class=\"col-12 col-lg-9\">\n                <h2 class=\"title\">Carol</h2>\n                <p class=\"testimonial-text\">“Thank you for our beautiful master bathroom. It is the sanctuary I always hoped to have, and the old bathroom is nothing but a distant memory.”</p>\n                <h6 class=\"testimonial-footer\">Carmel Mountain Ranch, CA</h6>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row py-2rem\">\n            <div class=\"entry box-shadow-2\">\n              <div class=\"col-12 col-lg-3 d-flex justify-content-center\">\n                <!--<img src=\"../../assets/img/avatar.jpg\" alt=\"portrait\" class=\"testimonial-img\" height=\"150px\" width=\"150px\">-->\n              </div>\n              <div class=\"col-12 col-lg-9\">\n                <h2 class=\"title\">Maureen</h2>\n                <p class=\"testimonial-text\">“My home is a show place. I have three new fantastic bathrooms and a gourmet kitchen. My house is like a model and I love it.”</p>\n                <h6 class=\"testimonial-footer\">Poway, CA</h6>\n              </div>\n            </div>\n          </div>\n          \n          <div class=\"row py-2rem\">\n            <div class=\"entry box-shadow-2\">\n              <div class=\"col-12 col-lg-3 d-flex justify-content-center\">\n                <!--<img src=\"../../assets/img/avatar.jpg\" alt=\"portrait\" class=\"testimonial-img\" height=\"150px\" width=\"150px\">-->\n              </div>\n              <div class=\"col-12 col-lg-9\">\n                <h2 class=\"title\">Jennifer</h2>\n                <p class=\"testimonial-text\">\"Remodeling our kitchen was a very good experience. RKB's crew was polite and courteous and showed quality workmanship and expertise. We are pleased with the outcome and love our beautiful kitchen.\"</p>\n                <h6 class=\"testimonial-footer\">Rancho Penasquitos, CA</h6>\n              </div>\n            </div>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--contact-->\n<section id=\"contact\" class=\"py-10vh inset-shadow\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center pb-2\">\n      <div class=\"feature-content\">\n        <h1 class=\"display-4 text-center col-12 pb-4\">Contact</h1>\n        <form action=\"\" class=\"col-10 offset-1 col-lg-12 offset-lg-0\">\n          <div class=\"row\">\n            <div class=\"col-md-4 px-1\">\n              <input type=\"text\" class=\"form-input w-100 pl-1\" placeholder=\"name\">\n            </div>\n            <div class=\"col-md-4 px-1 px-lg-0 my-1 my-md-0\">\n              <input type=\"email\" class=\"form-input w-100 pl-1\" placeholder=\"example@gmail.com\">\n            </div>\n            <div class=\"col-md-4 px-1\">\n              <input type=\"text\" class=\"form-input w-100 pl-1\" placeholder=\"est. budget\">\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-12 px-1\">\n              <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" class=\"form-text col-12 w-100\" placeholder=\"description of project...\"></textarea>\n            </div>\n            <button class=\"btn btn-outline-primary mx-auto mt-1rem text-uppercase\">Send</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!--footer-->\n<footer id=\"footer\" class=\"navbar navbar-full navbar-light bg-faded\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"footer-content\">\n        <p>Copyright 2017 Rancho Kitchen &amp; Bath, Inc. | Site design handcrafted by Danilo Carandang</p>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ 480:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "brooke-lark-93583.jpg";

/***/ }),

/***/ 481:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "kitchen.jpg";

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(290);


/***/ })

},[483]);
//# sourceMappingURL=main.bundle.js.map