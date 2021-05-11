(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\frygt\Desktop\studia\javascript\portfolio\portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "O3o7":
/*!*****************************************!*\
  !*** ./src/app/models/project.model.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
class Project {
    constructor(title, description, url, technologies, imgUrl) {
        this.title = title;
        this.description = description;
        this.url = url;
        this.technologiesArray = technologies;
        this.imgUrl = imgUrl;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_strings_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/strings.model */ "aa1W");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function AppComponent_a_107_span_9_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_a_107_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_a_107_span_9_span_2_Template, 2, 0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const technology_r3 = ctx.$implicit;
    const indexOfelement_r4 = ctx.index;
    const project_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", technology_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", indexOfelement_r4 < project_r1.technologiesArray.length - 1);
} }
function AppComponent_a_107_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppComponent_a_107_span_9_Template, 3, 2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", project_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", project_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r1.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.strings.content.technologies);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r1.technologiesArray);
} }
class AppComponent {
    constructor() {
        this.title = 'portfolio';
        this.stringsObj = new _models_strings_model__WEBPACK_IMPORTED_MODULE_1__["Strings"]();
        this.strings = this.stringsObj.pl;
        this.projectsArray = this.stringsObj.projects_pl;
        this.projectsNum = this.projectsArray.length;
        console.log(this.projectsArray);
    }
    onSwitchLang(lang) {
        if (lang == 'PL') {
            this.strings = this.stringsObj.pl;
            this.projectsArray = this.stringsObj.projects_pl;
        }
        if (lang == 'ENG') {
            this.strings = this.stringsObj.eng;
            this.projectsArray = this.stringsObj.projects_eng;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 108, vars: 24, consts: [[1, "main-container", "scrollbar-primary"], [1, "basic-info-container"], ["data-toggle", "buttons", 1, "lang-container", "btn-group", "btn-group-toggle"], [1, "btn", "btn-outline-dark", "active", 3, "click"], ["type", "radio", "name", "options", "id", "PL", "autocomplete", "off", "checked", ""], [1, "btn", "btn-outline-dark", 3, "click"], ["type", "radio", "name", "options", "id", "ENG", "autocomplete", "off"], [1, "photo-container"], ["src", "assets/head my .png", "alt", "Hi!"], [1, "info-container"], [1, "info"], [1, "icon"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-geo-alt"], ["d", "M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"], ["d", "M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"], [1, "label"], [1, "label-content"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-phone"], ["d", "M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"], ["d", "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-envelope"], ["d", "M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"], [1, "about-me-container"], [1, "separator"], [1, "text-box"], [1, "skills-container"], [1, "skills-list"], [1, "skill-box"], ["src", "assets/html5.png", "alt", "HTML4"], [1, "skill-name"], [1, "description"], ["src", "assets/css.png", "alt", "CSS"], ["src", "assets/js.png", "alt", "JavaScript"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/protractor.png", "alt", "Protractor"], ["src", "assets/spring.png", "alt", "Spring Boot"], [1, "note"], [1, "projects-container"], [1, "projects-list"], ["target", "_blank", "class", "project-box", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "project-box", 3, "href"], [3, "src"], [1, "project-desc"], [1, "app-title"], [1, "app-desc"], [1, "app-tech"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_label_click_3_listener() { return ctx.onSwitchLang("PL"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " PL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_label_click_6_listener() { return ctx.onSwitchLang("ENG"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ENG ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "svg", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "path", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "path", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "svg", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "path", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "HTML5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "CSS3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "JavaScript");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Protractor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Spring Boot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](107, AppComponent_a_107_Template, 10, 6, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.city);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.about_me);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.strings.content.about_me_desc, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.education);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.strings.content.education.year, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.education.school);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.education.major);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.education.spec);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.skills.good);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.skills.good);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.skills.good);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.skills.bsic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.strings.content.skills.basic, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.skills.basic);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.content.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.strings.titles.projects);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projectsArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".scrollbar-primary[_ngcontent-%COMP%]::-webkit-scrollbar {\r\n  width: 8px;\r\n  background-color: #dedede;\r\n}\r\n\r\n.scrollbar-primary[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\r\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\r\n  background-color: #5e5e5e;\r\n}\r\n\r\n.scrollbar-primary[_ngcontent-%COMP%] {\r\n  scrollbar-color: #cfcfcf #dedede;\r\n}\r\n\r\n.main-container[_ngcontent-%COMP%] {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: stretch;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.basic-info-container[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: rgb(140, 124, 214);\r\n  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);\r\n  padding: 30px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  padding-bottom: 60px;\r\n}\r\n\r\n.lang-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.lang-btn[_ngcontent-%COMP%] {\r\n  width: 90px;\r\n  height: 30px;\r\n  line-height: 30px;\r\n  border-radius: 5px;\r\n  background-color: white;\r\n  display: flex;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  color: black;\r\n}\r\n\r\n.lang-btn[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n  flex: 1;\r\n}\r\n\r\n.lang-chosen[_ngcontent-%COMP%] {\r\n  background-color: black;\r\n  color: white;\r\n}\r\n\r\n#PL[_ngcontent-%COMP%] {\r\n  padding-left: 5px;\r\n  text-align: left;\r\n}\r\n\r\n#ENG[_ngcontent-%COMP%] {\r\n  padding-right: 5px;\r\n  text-align: right;\r\n}\r\n\r\n.photo-container[_ngcontent-%COMP%] {\r\n  background-color: rgb(205, 179, 255);\r\n  height: 150px;\r\n  width: 150px;\r\n  min-width: 150px;\r\n  border-radius: 50%;\r\n  border: solid 4px rgb(55, 158, 255);\r\n  margin: 30px;\r\n  position: relative\r\n}\r\n\r\n.photo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 50%;\r\n}\r\n\r\n.photo-container[_ngcontent-%COMP%]::before {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: -14px;\r\n  top: -14px;\r\n  height: 170px;\r\n  width: 170px;\r\n  border-radius: 50%;\r\n  border: solid 4px rgb(55, 158, 255);\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%] {\r\n  margin: 30px;\r\n}\r\n\r\n.info-container[_ngcontent-%COMP%] > h3[_ngcontent-%COMP%] {\r\n  margin: 0;\r\n  margin-bottom: 10px;\r\n  font-size: 24px;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 35x;\r\n}\r\n\r\n.info[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  height: 100%;\r\n  line-height: 35px;\r\n}\r\n\r\n.icon[_ngcontent-%COMP%] {\r\n  margin-right: 10px;\r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  width: 75px;\r\n}\r\n\r\n.label-content[_ngcontent-%COMP%] {}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.separator[_ngcontent-%COMP%]{\r\n  height: 5px;\r\n  width: 100px;\r\n  background-color: rgb(140, 124, 214);\r\n  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);\r\n  margin-bottom: 10px\r\n}\r\n\r\n.about-me-container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center\r\n}\r\n\r\n.text-box[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 50%;\r\n  text-align: center;\r\n  color: rgb(83, 83, 83);\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.skills-container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center\r\n}\r\n\r\n.skills-list[_ngcontent-%COMP%] {\r\n margin-top: 20px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  width: 60%;\r\n  max-width: 600px;\r\n}\r\n\r\n.skill-box[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 100px;\r\n    margin: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    align-items: center;\r\n}\r\n\r\n.skill-box[_ngcontent-%COMP%] > img[_ngcontent-%COMP%]{\r\n    display: block;\r\n    max-height: 60%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.skill-name[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n\r\n.description[_ngcontent-%COMP%]{\r\n    margin: 0;\r\n}\r\n\r\n.projects-container[_ngcontent-%COMP%] {\r\n  margin: 20px;\r\n  margin-top: 50px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-start;\r\n  align-items: center\r\n}\r\n\r\n.projects-list[_ngcontent-%COMP%]{\r\n  margin-top: 20px;\r\n    max-width: 600px;\r\n}\r\n\r\n.project-box[_ngcontent-%COMP%]{\r\n  all: unset;\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n  margin-bottom: 20px;\r\n  padding: 20px;\r\n  transition: all ease-in-out 0.3s;\r\n  cursor: pointer;\r\n}\r\n\r\n.project-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n  color: black;\r\n}\r\n\r\n.project-box[_ngcontent-%COMP%]:hover{\r\n  background-color: #2574fc15;\r\n}\r\n\r\n.project-desc[_ngcontent-%COMP%]{\r\n  max-width: 340px;\r\n  min-width: 200px;\r\n}\r\n\r\n.project-box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  width: 200px;\r\n  margin-right: 20px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n.app-title[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n\r\n.app-tech[_ngcontent-%COMP%]{\r\n    color: grey;\r\n}\r\n\r\n.note[_ngcontent-%COMP%]{\r\n    margin-top: 25px;\r\n    color: grey;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usb0RBQW9EO0VBQ3BELHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztBQUNsQzs7QUFHQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMscUVBQXFFO0VBQ3JFLGFBQWE7RUFDYixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFHQTtFQUNFLE9BQU87QUFDVDs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWjtBQUNGOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQSxnQkFBZ0I7O0FBRWhCO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMscUVBQXFFO0VBQ3JFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQjtBQUNGOztBQUVBO0NBQ0MsZ0JBQWdCO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBZ0I7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGdDQUFnQztFQUNoQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbGJhci1wcmltYXJ5Ojotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVkZWRlO1xyXG59XHJcblxyXG4uc2Nyb2xsYmFyLXByaW1hcnk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1ZTVlNWU7XHJcbn1cclxuXHJcbi5zY3JvbGxiYXItcHJpbWFyeSB7XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjY2ZjZmNmICNkZWRlZGU7XHJcbn1cclxuXHJcblxyXG4ubWFpbi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uYmFzaWMtaW5mby1jb250YWluZXIge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQwLCAxMjQsIDIxNCk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjNmExMWNiIDAlLCAjMjU3NWZjIDEwMCUpO1xyXG4gIHBhZGRpbmc6IDMwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmxhbmctY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5sYW5nLWJ0biB7XHJcbiAgd2lkdGg6IDkwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi5sYW5nLWJ0biBkaXYge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5sYW5nLWNob3NlbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jUEwge1xyXG4gIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbiNFTkcge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLnBob3RvLWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNSwgMTc5LCAyNTUpO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogc29saWQgNHB4IHJnYig1NSwgMTU4LCAyNTUpO1xyXG4gIG1hcmdpbjogMzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmVcclxufVxyXG5cclxuLnBob3RvLWNvbnRhaW5lciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnBob3RvLWNvbnRhaW5lcjo6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAtMTRweDtcclxuICB0b3A6IC0xNHB4O1xyXG4gIGhlaWdodDogMTcwcHg7XHJcbiAgd2lkdGg6IDE3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IHNvbGlkIDRweCByZ2IoNTUsIDE1OCwgMjU1KTtcclxufVxyXG5cclxuLmluZm8tY29udGFpbmVyIHtcclxuICBtYXJnaW46IDMwcHg7XHJcbn1cclxuXHJcbi5pbmZvLWNvbnRhaW5lcj5oMyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG4uaW5mbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzNXg7XHJcbn1cclxuXHJcbi5pbmZvPmRpdiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuLmljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB3aWR0aDogNzVweDtcclxufVxyXG5cclxuLmxhYmVsLWNvbnRlbnQge31cclxuXHJcbmgze1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnNlcGFyYXRvcntcclxuICBoZWlnaHQ6IDVweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MCwgMTI0LCAyMTQpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzZhMTFjYiAwJSwgIzI1NzVmYyAxMDAlKTtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5hYm91dC1tZS1jb250YWluZXIge1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlclxyXG59XHJcblxyXG4udGV4dC1ib3gge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogNTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDgzLCA4MywgODMpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5za2lsbHMtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLnNraWxscy1saXN0IHtcclxuIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5za2lsbC1ib3h7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uc2tpbGwtYm94PmltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWF4LWhlaWdodDogNjAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnNraWxsLW5hbWV7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9ue1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucHJvamVjdHMtY29udGFpbmVyIHtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXJcclxufVxyXG5cclxuLnByb2plY3RzLWxpc3R7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveHtcclxuICBhbGw6IHVuc2V0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtYm94IHAge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnByb2plY3QtYm94OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTc0ZmMxNTtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3tcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIG1pbi13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWJveCBpbWd7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uYXBwLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5hcHAtdGVjaHtcclxuICAgIGNvbG9yOiBncmV5O1xyXG59XHJcblxyXG4ubm90ZXtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBjb2xvcjogZ3JleTtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");




class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aa1W":
/*!*****************************************!*\
  !*** ./src/app/models/strings.model.ts ***!
  \*****************************************/
/*! exports provided: Strings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Strings", function() { return Strings; });
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.model */ "O3o7");

class Strings {
    constructor() {
        this.eng = {
            name: "Katarzyna Krawczyk",
            titles: {
                city: "City:",
                phone: "Phone:",
                email: "Email:",
                about_me: "About me",
                education: "Education",
                skills: "Skills",
                projects: "Projects"
            },
            content: {
                city: "Wrocław",
                phone: "+48 784 543 479",
                email: "k.krawczyk.w@gmail.com",
                about_me: "",
                education: {
                    year: "2017 - 2021",
                    school: "Wrocław University of Science and Technology",
                    major: "Major: Computer Science",
                    spec: "Specialization: Internet Engeenering"
                },
                skills: {
                    good: "good",
                    basic: "basic"
                },
                note: "* - I'm happy to learn more or I'm doing it right now.",
                technologies: "Technologies used: ",
                about_me_desc: "My name is Katarzyna and I have always enjoyed creative activities and those that allow me to use my artistic skills. Web development is one such activity. It also allows me to use my technical skills. I like to both create something out of nothing and recreate things while discovering how they were built. My curiosity is the best drive in my development and learning."
            }
        };
        this.pl = {
            name: "Katarzyna Krawczyk",
            titles: {
                city: "Miasto:",
                phone: "Telefon:",
                email: "Email:",
                about_me: "O mnie",
                education: "Wykształcenie",
                skills: "Umiejętności",
                projects: "Projekty"
            },
            content: {
                city: "Wrocław",
                phone: "+48 784 543 479",
                email: "k.krawczyk.w@gmail.com",
                about_me: "",
                education: {
                    year: "2017 - 2021",
                    school: "Politechnika Wrocławska",
                    major: "Kierunek: Informatyka",
                    spec: "Specjalność: Inżynieria Internetowa"
                },
                skills: {
                    good: "dobry",
                    basic: "podsatwowy"
                },
                note: "* - jestem chętna do dalszej nauki lub właśnie się uczę.",
                technologies: "Użyte technologie: ",
                about_me_desc: "Nazywam się Katarzyna i od zawsze najwięcej radości i satysfakcji sprawiają mi zajęcia kreatywne i takie, które pozwalają na wykorzystanie artystycznych umiejętnośći. Tworzenie stron internetowych jest jednym z takich zajęć. Pozwala mi ono również na wykorzystywanie swojich umiejętnosci technicznych. Lubię nie tylko tworzyć coś z niczego ale także odtwarzać rzeczy jednocześnie odkrywając jak zostały zbudowane. Moja ciekawość jest najlepszym napędem w moim rozwju i nauce."
            }
        };
        this.projects_eng = new Array();
        this.projects_eng.push(new _project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Quiz", "Simple quiz application with simple design and graph of given answers", "https://kasiakrotka.github.io/SimpleQuiz/", ['HTML', 'CSS', 'JavaScript'], "assets/quiz.png"));
        this.projects_eng.push(new _project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Mood Tracker", "Application let user track his mood through the month. The purpose of app is therapeutic. User have a chance to fill fomrs which help him describe his day. Data collected in the app can be displayed as a graph.", "https://kasiakrotka.github.io/MoodTracker/", ['HTML', 'CSS', 'JavaScript', 'Angular'], "assets/moodtracker.png"));
        this.projects_eng.push(new _project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Virtual Art Gallery (in progress)", "Application is simplified recration of 'https://www.wikiart.org/'. It's purpose is to browse artists and theirs art.", "https://kasiakrotka.github.io/ArtStock/", ["HTML", "CSS", "Vanilla JavaScript"], "assets/artstock.png"));
        this.projects_pl = new Array();
        this.projects_pl.push(new _project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Quiz", "Prosta aplikacja będąca szablonem do utworzenia quizu. Na podsatwie udzielonych odpowiedzi, jako wynik wyświetlany jest graf.", "https://kasiakrotka.github.io/SimpleQuiz/", ['HTML', 'CSS', 'JavaScript'], "assets/quiz.png"));
        this.projects_pl.push(new _project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Mood Tracker", "Aplikacja pozwala użytkownikowi na śledzenie swoich emocji w ciągu miesiąca. Użytkownik ma możliwość wypełniania formularzy, które pomagają w opisaniu dnia. Dane zebrane w aplikacji wyświetlane są w formie grafu.", "https://kasiakrotka.github.io/MoodTracker/", ['HTML', 'CSS', 'JavaScript', 'Angular'], "assets/moodtracker.png"));
        this.projects_pl.push(new _project_model__WEBPACK_IMPORTED_MODULE_0__["Project"]("Wirtualna Galeria Sztuki (w trakcie)", "Aplikacja została stworzona na wzór 'https://www.wikiart.org/'. Pozwala na przeglądanie artystów i ich prac.", "https://kasiakrotka.github.io/ArtStock/", ["HTML", "CSS", "Vanilla JavaScript"], "assets/artstock.png"));
    }
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map