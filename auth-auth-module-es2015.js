(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/containers/registration-page/registration-page.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/containers/registration-page/registration-page.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"custom-user-registration-form\">\n    <h3 id=\"logo\">User Registration</h3>\n    <form [formGroup]=\"userRegistrationForm\">\n        <div class=\"form-control\">\n            <label>First Name:</label>\n            <input type=\"text\" formControlName=\"firstName\" required min=\"3\" max=\"50\">\n            <div class=\"hint\">\n                First name should be greater than 3 character\n            </div>\n        </div>\n\n        <div class=\"form-control\">\n            <label>Last Name:</label>\n            <input type=\"text\" formControlName=\"lastName\">\n        </div>\n        <div class=\"form-control\">\n            <label>Age:</label>\n            <input type=\"number\" formControlName=\"age\" required>\n            <div class=\"hint\">\n                Age should be greater than 0 and less than 100, Whole number with no 'e'\n            </div>\n        </div>\n        <div class=\"custom-action-wrapper\">\n            <input class=\"reset\" type=\"reset\" value=\"Reset\" (click)=\"resetForm()\">\n            <input class=\"signup\" type=\"button\" value=\"Signup\" (click)=\"onSubmit()\"\n                [disabled]=\"!userRegistrationForm.valid\">\n        </div>\n    </form>\n    <div id=\"output\">\n        <h4>Output form data</h4>\n        <code>{{this.formValue || {} | json}}</code>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _containers_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers/registration-page/registration-page.component */ "./src/app/auth/containers/registration-page/registration-page.component.ts");




const routes = [
    {
        path: 'register',
        component: _containers_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationPageComponent"]
    },
    {
        path: '**',
        redirectTo: 'register',
        pathMatch: 'full'
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _containers_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers/registration-page/registration-page.component */ "./src/app/auth/containers/registration-page/registration-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_containers_registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_3__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/auth/containers/registration-page/registration-page.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/auth/containers/registration-page/registration-page.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Lily+Script+One);\n.custom-user-registration-form {\n  margin: 30px;\n}\n.custom-user-registration-form form {\n  margin: 10% auto 0 auto;\n  padding: 30px;\n  width: 500px;\n  height: auto;\n  overflow: hidden;\n  background: white;\n  border-radius: 10px;\n}\n.custom-user-registration-form form label {\n  font-size: 14px;\n  color: darkgray;\n  cursor: pointer;\n}\n.custom-user-registration-form form input[type=text],\n.custom-user-registration-form form input[type=number] {\n  margin: 15px 0;\n  padding: 15px 10px;\n  width: 100%;\n  outline: none;\n  border: 1px solid #bbb;\n  border-radius: 20px;\n  display: inline-block;\n  box-sizing: border-box;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n}\n.custom-user-registration-form form input[type=text]:focus,\n.custom-user-registration-form form input[type=password]:focus {\n  border-color: cornflowerblue;\n}\n.custom-user-registration-form input[type=button] {\n  float: left;\n  width: 150px !important;\n  padding: 15px 50px;\n  border-radius: 20px;\n  background: #1abc9c;\n  border: none;\n  color: white;\n  cursor: pointer;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n}\n.custom-user-registration-form .reset {\n  border: 0;\n  float: left;\n  font-size: 14px;\n  font-weight: 600;\n  color: gray;\n  background: #eaeaea;\n  padding: 15px 50px;\n  border-radius: 20px;\n  cursor: pointer;\n}\n.custom-user-registration-form input[type=button].signup {\n  float: right;\n}\n.custom-user-registration-form input[type=button]:hover {\n  opacity: 0.8;\n}\n.custom-user-registration-form input[type=submit]:active {\n  opacity: 0.4;\n}\n.custom-user-registration-form [type=button][disabled].signup {\n  cursor: not-allowed;\n  opacity: 0.5 !important;\n}\n.custom-user-registration-form #logo {\n  margin: 0 auto;\n  font-family: \"Lily Script One\", cursive;\n  font-size: 60px;\n  font-weight: bold;\n  text-align: center;\n  color: lightgray;\n  -webkit-transition: 0.2s ease all;\n  transition: 0.2s ease all;\n}\n.custom-user-registration-form #logo:hover {\n  color: cornflowerblue;\n}\n.custom-user-registration-form .hint {\n  font-size: 12px;\n  position: relative;\n  top: -12px;\n  margin-left: 20px;\n  color: #7d7d7d;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9jb250YWluZXJzL3JlZ2lzdHJhdGlvbi1wYWdlL0M6XFxVc2Vyc1xcc3VyeWFcXE9uZURyaXZlXFxEZXNrdG9wXFxEYW5pZWwgUHJvamVjdFxcZGFuaWVsLWFzc2Vzc21lbnQvc3JjXFxhcHBcXGF1dGhcXGNvbnRhaW5lcnNcXHJlZ2lzdHJhdGlvbi1wYWdlXFxyZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9jb250YWluZXJzL3JlZ2lzdHJhdGlvbi1wYWdlL3JlZ2lzdHJhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLG9FQUFBO0FBRVI7RUFDSSxZQUFBO0FDQUo7QURDSTtFQUNJLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDQ1I7QURFSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0FSO0FER0k7O0VBRUksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFHUSxzQkFBQTtFQUNSLGlDQUFBO0VBSVEseUJBQUE7QUNEaEI7QURJSTs7RUFFSSw0QkFBQTtBQ0ZSO0FES0k7RUFDSSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUlRLHlCQUFBO0FDSGhCO0FET0k7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDTFI7QURRSTtFQUNJLFlBQUE7QUNOUjtBRFNJO0VBQ0ksWUFBQTtBQ1BSO0FEVUk7RUFDSSxZQUFBO0FDUlI7QURXSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNUUjtBRFlJO0VBQ0ksY0FBQTtFQUNBLHVDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBSVEseUJBQUE7QUNWaEI7QURhSTtFQUNJLHFCQUFBO0FDWFI7QURjSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNaUiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvY29udGFpbmVycy9yZWdpc3RyYXRpb24tcGFnZS9yZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1MaWx5K1NjcmlwdCtPbmUpO1xyXG5cclxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtIHtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1hcmdpbjoxMCUgYXV0byAwIGF1dG87XHJcbiAgICAgICAgcGFkZGluZzozMHB4O1xyXG4gICAgICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgICAgIGhlaWdodDphdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIGxhYmVsIHtcclxuICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICBjb2xvcjpkYXJrZ3JheTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXHJcbiAgICBmb3JtIGlucHV0W3R5cGU9bnVtYmVyXSB7XHJcbiAgICAgICAgbWFyZ2luOjE1cHggMDtcclxuICAgICAgICBwYWRkaW5nOjE1cHggMTBweDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNiYmI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgIC1tb3otYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICAtbXMtdHJhbnNpdGlvbjowLjJzIGVhc2UgYWxsO1xyXG4gICAgICAgICAgICAtby10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybSBpbnB1dFt0eXBlPXRleHRdOmZvY3VzLFxyXG4gICAgZm9ybSBpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl06Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjpjb3JuZmxvd2VyYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmc6MTVweCA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6MjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiMxYWJjOWM7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnJlc2V0IHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VhZWFlYTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1idXR0b25dLnNpZ251cCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTowLjg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUge1xyXG4gICAgICAgIG9wYWNpdHk6MC40O1xyXG4gICAgfVxyXG5cclxuICAgIFt0eXBlPVwiYnV0dG9uXCJdW2Rpc2FibGVkXS5zaWdudXAge1xyXG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgI2xvZ28ge1xyXG4gICAgICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICAgICAgZm9udC1mYW1pbHk6J0xpbHkgU2NyaXB0IE9uZScsIGN1cnNpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOjYwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBjb2xvcjpsaWdodGdyYXk7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgIC1tcy10cmFuc2l0aW9uOjAuMnMgZWFzZSBhbGw7XHJcbiAgICAgICAgICAgIC1vLXRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246MC4ycyBlYXNlIGFsbDtcclxuICAgIH1cclxuXHJcbiAgICAjbG9nbzpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6Y29ybmZsb3dlcmJsdWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5oaW50IHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogLTEycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICM3ZDdkN2Q7XHJcbiAgICB9XHJcbn0iLCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGlseStTY3JpcHQrT25lKTtcbi5jdXN0b20tdXNlci1yZWdpc3RyYXRpb24tZm9ybSB7XG4gIG1hcmdpbjogMzBweDtcbn1cbi5jdXN0b20tdXNlci1yZWdpc3RyYXRpb24tZm9ybSBmb3JtIHtcbiAgbWFyZ2luOiAxMCUgYXV0byAwIGF1dG87XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jdXN0b20tdXNlci1yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogZGFya2dyYXk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jdXN0b20tdXNlci1yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0W3R5cGU9dGV4dF0sXG4uY3VzdG9tLXVzZXItcmVnaXN0cmF0aW9uLWZvcm0gZm9ybSBpbnB1dFt0eXBlPW51bWJlcl0ge1xuICBtYXJnaW46IDE1cHggMDtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JiYjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtIGZvcm0gaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyxcbi5jdXN0b20tdXNlci1yZWdpc3RyYXRpb24tZm9ybSBmb3JtIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcbn1cbi5jdXN0b20tdXNlci1yZWdpc3RyYXRpb24tZm9ybSBpbnB1dFt0eXBlPWJ1dHRvbl0ge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDE1MHB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogIzFhYmM5YztcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtIC5yZXNldCB7XG4gIGJvcmRlcjogMDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6IGdyYXk7XG4gIGJhY2tncm91bmQ6ICNlYWVhZWE7XG4gIHBhZGRpbmc6IDE1cHggNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtIGlucHV0W3R5cGU9YnV0dG9uXS5zaWdudXAge1xuICBmbG9hdDogcmlnaHQ7XG59XG4uY3VzdG9tLXVzZXItcmVnaXN0cmF0aW9uLWZvcm0gaW5wdXRbdHlwZT1idXR0b25dOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtIGlucHV0W3R5cGU9c3VibWl0XTphY3RpdmUge1xuICBvcGFjaXR5OiAwLjQ7XG59XG4uY3VzdG9tLXVzZXItcmVnaXN0cmF0aW9uLWZvcm0gW3R5cGU9YnV0dG9uXVtkaXNhYmxlZF0uc2lnbnVwIHtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgb3BhY2l0eTogMC41ICFpbXBvcnRhbnQ7XG59XG4uY3VzdG9tLXVzZXItcmVnaXN0cmF0aW9uLWZvcm0gI2xvZ28ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgZm9udC1mYW1pbHk6IFwiTGlseSBTY3JpcHQgT25lXCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IGxpZ2h0Z3JheTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtbW96LXRyYW5zaXRpb246IDAuMnMgZWFzZSBhbGw7XG4gIC1tcy10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICAtby10cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UgYWxsO1xufVxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtICNsb2dvOmhvdmVyIHtcbiAgY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufVxuLmN1c3RvbS11c2VyLXJlZ2lzdHJhdGlvbi1mb3JtIC5oaW50IHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEycHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBjb2xvcjogIzdkN2Q3ZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/auth/containers/registration-page/registration-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/auth/containers/registration-page/registration-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let RegistrationPageComponent = class RegistrationPageComponent {
    constructor() {
        this.userRegistrationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, this.validateAge(/e/i)]),
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.formValue = this.userRegistrationForm.value;
        console.log(this.userRegistrationForm.value);
    }
    resetForm() {
        this.formValue = {};
    }
    validateAge(ageRe) {
        return (control) => {
            var forbidden;
            if (control.value > 0 && control.value <= 100 && !ageRe.test(control.value) && Number.isInteger(+control.value)) {
                forbidden = false;
            }
            else {
                forbidden = true;
            }
            return forbidden ? { 'forbiddenName': { value: control.value } } : null;
        };
    }
};
RegistrationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/containers/registration-page/registration-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-page.component.scss */ "./src/app/auth/containers/registration-page/registration-page.component.scss")).default]
    })
], RegistrationPageComponent);



/***/ })

}]);
//# sourceMappingURL=auth-auth-module-es2015.js.map