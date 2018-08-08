webpackJsonp([65],{

/***/ 1846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/@angular/core/esm5/core.js
var core = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/ionic-angular/index.js + 3 modules
var ionic_angular = __webpack_require__(9);

// EXTERNAL MODULE: ./src/providers/app.ts
var app = __webpack_require__(10);

// EXTERNAL MODULE: ./src/providers/utils/dom.ts
var dom = __webpack_require__(3);

// EXTERNAL MODULE: ./src/addon/notes/providers/notes.ts
var notes = __webpack_require__(223);

// CONCATENATED MODULE: ./src/addon/notes/pages/add/add.ts
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Component that displays a text area for composing a note.
 */
var add_AddonNotesAddPage = /** @class */ (function () {
    function AddonNotesAddPage(params, viewCtrl, appProvider, domUtils, notesProvider) {
        this.viewCtrl = viewCtrl;
        this.appProvider = appProvider;
        this.domUtils = domUtils;
        this.notesProvider = notesProvider;
        this.publishState = 'personal';
        this.text = '';
        this.processing = false;
        this.userId = params.get('userId');
        this.courseId = params.get('courseId');
    }
    /**
     * Send the note or store it offline.
     */
    AddonNotesAddPage.prototype.addNote = function () {
        var _this = this;
        this.appProvider.closeKeyboard();
        var loadingModal = this.domUtils.showModalLoading('core.sending', true);
        // Freeze the add note button.
        this.processing = true;
        this.notesProvider.addNote(this.userId, this.courseId, this.publishState, this.text).then(function (sent) {
            _this.viewCtrl.dismiss().finally(function () {
                var message = sent ? 'addon.notes.eventnotecreated' : 'core.datastoredoffline';
                _this.domUtils.showAlertTranslated('core.success', message);
            });
        }).catch(function (error) {
            _this.domUtils.showErrorModal(error);
            _this.processing = false;
        }).finally(function () {
            loadingModal.dismiss();
        });
    };
    /**
     * Close modal.
     */
    AddonNotesAddPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    AddonNotesAddPage = __decorate([
        Object(core["m" /* Component */])({
            selector: 'page-addon-notes-add',
            templateUrl: 'add.html',
        }),
        __metadata("design:paramtypes", [ionic_angular["r" /* NavParams */], ionic_angular["B" /* ViewController */], app["a" /* CoreAppProvider */],
            dom["a" /* CoreDomUtilsProvider */], notes["a" /* AddonNotesProvider */]])
    ], AddonNotesAddPage);
    return AddonNotesAddPage;
}());

//# sourceMappingURL=add.js.map
// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/index.js + 1 modules
var _ngx_translate_core = __webpack_require__(5);

// EXTERNAL MODULE: ./src/directives/directives.module.ts + 1 modules
var directives_module = __webpack_require__(30);

// CONCATENATED MODULE: ./src/addon/notes/pages/add/add.module.ts
// (C) Copyright 2015 Martin Dougiamas
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
var add_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var add_module_AddonNotesAddPageModule = /** @class */ (function () {
    function AddonNotesAddPageModule() {
    }
    AddonNotesAddPageModule = add_module___decorate([
        Object(core["I" /* NgModule */])({
            declarations: [
                add_AddonNotesAddPage
            ],
            imports: [
                directives_module["a" /* CoreDirectivesModule */],
                ionic_angular["l" /* IonicPageModule */].forChild(add_AddonNotesAddPage),
                _ngx_translate_core["b" /* TranslateModule */].forChild()
            ]
        })
    ], AddonNotesAddPageModule);
    return AddonNotesAddPageModule;
}());

//# sourceMappingURL=add.module.js.map
// EXTERNAL MODULE: ./node_modules/ionic-angular/components/action-sheet/action-sheet-component.ngfactory.js
var action_sheet_component_ngfactory = __webpack_require__(1285);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/alert/alert-component.ngfactory.js
var alert_component_ngfactory = __webpack_require__(1286);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app-root.ngfactory.js
var app_root_ngfactory = __webpack_require__(1287);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/loading/loading-component.ngfactory.js
var loading_component_ngfactory = __webpack_require__(1288);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/modal/modal-component.ngfactory.js
var modal_component_ngfactory = __webpack_require__(1289);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/picker/picker-component.ngfactory.js + 1 modules
var picker_component_ngfactory = __webpack_require__(1290);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/popover/popover-component.ngfactory.js
var popover_component_ngfactory = __webpack_require__(1291);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select-popover-component.ngfactory.js
var select_popover_component_ngfactory = __webpack_require__(1292);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toast/toast-component.ngfactory.js
var toast_component_ngfactory = __webpack_require__(1293);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-header.js
var toolbar_header = __webpack_require__(418);

// EXTERNAL MODULE: ./node_modules/ionic-angular/config/config.js
var config = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/view-controller.js
var view_controller = __webpack_require__(34);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.ngfactory.js
var navbar_ngfactory = __webpack_require__(1294);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/navbar.js
var navbar = __webpack_require__(191);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/app/app.js + 3 modules
var app_app = __webpack_require__(26);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-controller.js
var nav_controller = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory.js
var toolbar_title_ngfactory = __webpack_require__(1295);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-title.js
var toolbar_title = __webpack_require__(326);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar.js
var toolbar = __webpack_require__(237);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.pipe.js
var translate_pipe = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.service.js
var translate_service = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/toolbar/toolbar-item.js
var toolbar_item = __webpack_require__(419);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.ngfactory.js
var button_ngfactory = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/button/button.js
var button_button = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/icon/icon.js
var icon = __webpack_require__(39);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.ngfactory.js
var content_ngfactory = __webpack_require__(176);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/content/content.js
var content = __webpack_require__(24);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/platform.js + 1 modules
var platform = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/dom-controller.js
var dom_controller = __webpack_require__(25);

// EXTERNAL MODULE: ./node_modules/ionic-angular/platform/keyboard.js
var keyboard = __webpack_require__(97);

// EXTERNAL MODULE: ./node_modules/@angular/forms/esm5/forms.js
var esm5_forms = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.ngfactory.js + 1 modules
var item_ngfactory = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item.js
var item = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/form.js
var util_form = __webpack_require__(18);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-reorder.js + 1 modules
var item_reorder = __webpack_require__(28);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/item/item-content.js
var item_content = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/label/label.js
var label = __webpack_require__(58);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.ngfactory.js
var select_ngfactory = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/select/select.js
var select_select = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/deep-linker.js
var deep_linker = __webpack_require__(47);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/option/option.js
var option_option = __webpack_require__(98);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.ngfactory.js
var input_ngfactory = __webpack_require__(89);

// EXTERNAL MODULE: ./node_modules/ionic-angular/components/input/input.js
var input = __webpack_require__(72);

// EXTERNAL MODULE: ./node_modules/ionic-angular/navigation/nav-params.js
var nav_params = __webpack_require__(57);

// CONCATENATED MODULE: ./src/addon/notes/pages/add/add.ngfactory.js
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








































var styles_AddonNotesAddPage = [];
var RenderType_AddonNotesAddPage = core["_29" /* ɵcrt */]({ encapsulation: 2, styles: styles_AddonNotesAddPage, data: {} });

function View_AddonNotesAddPage_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 24, "ion-header", [], null, null, null, null, null)), core["_30" /* ɵdid */](1, 16384, null, 0, toolbar_header["a" /* Header */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, view_controller["a" /* ViewController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_31" /* ɵeld */](3, 0, null, null, 20, "ion-navbar", [["class", "toolbar"]], [[8, "hidden", 0], [2, "statusbar-padding", null]], null, null, navbar_ngfactory["b" /* View_Navbar_0 */], navbar_ngfactory["a" /* RenderType_Navbar */])), core["_30" /* ɵdid */](4, 49152, null, 0, navbar["a" /* Navbar */], [app_app["a" /* App */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](6, 0, null, 3, 3, "ion-title", [], null, null, null, toolbar_title_ngfactory["b" /* View_ToolbarTitle_0 */], toolbar_title_ngfactory["a" /* RenderType_ToolbarTitle */])), core["_30" /* ɵdid */](7, 49152, null, 0, toolbar_title["a" /* ToolbarTitle */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), (_l()(), core["_55" /* ɵted */](8, 0, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n        "])), (_l()(), core["_31" /* ɵeld */](11, 0, null, 2, 11, "ion-buttons", [["end", ""]], null, null, null, null, null)), core["_30" /* ɵdid */](12, 16384, null, 1, toolbar_item["a" /* ToolbarItem */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, toolbar["a" /* Toolbar */]], [2, navbar["a" /* Navbar */]]], null, null), core["_52" /* ɵqud */](603979776, 1, { _buttons: 1 }), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_31" /* ɵeld */](15, 0, null, null, 6, "button", [["icon-only", ""], ["ion-button", ""]], [[1, "aria-label", 0]], [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.closeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](16, 1097728, [[1, 4]], 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], null, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n                "])), (_l()(), core["_31" /* ɵeld */](19, 0, null, 0, 1, "ion-icon", [["name", "close"], ["role", "img"]], [[2, "hide", null]], null, null, null, null)), core["_30" /* ɵdid */](20, 147456, null, 0, icon["a" /* Icon */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { name: [0, "name"] }, null), (_l()(), core["_55" /* ɵted */](-1, 0, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, 3, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"])), (_l()(), core["_31" /* ɵeld */](26, 0, null, null, 68, "ion-content", [["padding", ""]], [[2, "statusbar-padding", null], [2, "has-refresher", null]], null, null, content_ngfactory["b" /* View_Content_0 */], content_ngfactory["a" /* RenderType_Content */])), core["_30" /* ɵdid */](27, 4374528, null, 0, content["a" /* Content */], [config["a" /* Config */], platform["a" /* Platform */], dom_controller["a" /* DomController */], core["t" /* ElementRef */], core["V" /* Renderer */], app_app["a" /* App */], keyboard["a" /* Keyboard */], core["M" /* NgZone */], [2, view_controller["a" /* ViewController */]], [2, nav_controller["a" /* NavController */]]], null, null), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n    "])), (_l()(), core["_31" /* ɵeld */](29, 0, null, 1, 64, "form", [["name", "itemEdit"], ["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngSubmit"], [null, "submit"], [null, "reset"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("submit" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 31).onSubmit($event) !== false);
        ad = (pd_0 && ad);
    } if (("reset" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 31).onReset() !== false);
        ad = (pd_1 && ad);
    } if (("ngSubmit" === en)) {
        var pd_2 = (_co.addNote() !== false);
        ad = (pd_2 && ad);
    } return ad; }, null, null)), core["_30" /* ɵdid */](30, 16384, null, 0, esm5_forms["w" /* ɵbf */], [], null, null), core["_30" /* ɵdid */](31, 4210688, null, 0, esm5_forms["p" /* NgForm */], [[8, null], [8, null]], null, { ngSubmit: "ngSubmit" }), core["_50" /* ɵprd */](2048, null, esm5_forms["b" /* ControlContainer */], null, [esm5_forms["p" /* NgForm */]]), core["_30" /* ɵdid */](33, 16384, null, 0, esm5_forms["o" /* NgControlStatusGroup */], [esm5_forms["b" /* ControlContainer */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](35, 0, null, null, 35, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](36, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 2, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 3, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 4, { _icons: 1 }), core["_30" /* ɵdid */](40, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](42, 0, null, 1, 3, "ion-label", [], null, null, null, null, null)), core["_30" /* ɵdid */](43, 16384, [[2, 4]], 0, label["a" /* Label */], [config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [8, null], [8, null], [8, null], [8, null]], null, null), (_l()(), core["_55" /* ɵted */](44, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](47, 0, null, 3, 22, "ion-select", [["interface", "popover"], ["name", "publishState"]], [[2, "select-disabled", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "click"], [null, "keyup.space"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (core["_44" /* ɵnov */](_v, 48)._click($event) !== false);
        ad = (pd_0 && ad);
    } if (("keyup.space" === en)) {
        var pd_1 = (core["_44" /* ɵnov */](_v, 48)._keyup() !== false);
        ad = (pd_1 && ad);
    } if (("ngModelChange" === en)) {
        var pd_2 = ((_co.publishState = $event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, select_ngfactory["b" /* View_Select_0 */], select_ngfactory["a" /* RenderType_Select */])), core["_30" /* ɵdid */](48, 1228800, null, 1, select_select["a" /* Select */], [app_app["a" /* App */], util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item["a" /* Item */]], deep_linker["a" /* DeepLinker */]], { interface: [0, "interface"] }, null), core["_52" /* ɵqud */](603979776, 5, { options: 1 }), core["_50" /* ɵprd */](1024, null, esm5_forms["l" /* NG_VALUE_ACCESSOR */], function (p0_0) { return [p0_0]; }, [select_select["a" /* Select */]]), core["_30" /* ɵdid */](51, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [8, null], [8, null], [2, esm5_forms["l" /* NG_VALUE_ACCESSOR */]]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ɵdid */](53, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](55, 0, null, null, 3, "ion-option", [["value", "personal"]], null, null, null, null, null)), core["_30" /* ɵdid */](56, 16384, [[5, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](57, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](60, 0, null, null, 3, "ion-option", [["value", "course"]], null, null, null, null, null)), core["_30" /* ɵdid */](61, 16384, [[5, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](62, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n                "])), (_l()(), core["_31" /* ɵeld */](65, 0, null, null, 3, "ion-option", [["value", "site"]], null, null, null, null, null)), core["_30" /* ɵdid */](66, 16384, [[5, 4]], 0, option_option["a" /* Option */], [core["t" /* ElementRef */]], { value: [0, "value"] }, null), (_l()(), core["_55" /* ɵted */](67, null, ["", ""])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n            "])), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](72, 0, null, null, 15, "ion-item", [["class", "item item-block"]], null, null, null, item_ngfactory["b" /* View_Item_0 */], item_ngfactory["a" /* RenderType_Item */])), core["_30" /* ɵdid */](73, 1097728, null, 3, item["a" /* Item */], [util_form["a" /* Form */], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, item_reorder["a" /* ItemReorder */]]], null, null), core["_52" /* ɵqud */](335544320, 6, { contentLabel: 0 }), core["_52" /* ɵqud */](603979776, 7, { _buttons: 1 }), core["_52" /* ɵqud */](603979776, 8, { _icons: 1 }), core["_30" /* ɵdid */](77, 16384, null, 0, item_content["a" /* ItemContent */], [], null, null), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n            "])), (_l()(), core["_31" /* ɵeld */](79, 0, null, 3, 7, "ion-textarea", [["name", "text"], ["required", "required"], ["rows", "5"]], [[1, "required", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.text = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, input_ngfactory["b" /* View_TextInput_0 */], input_ngfactory["a" /* RenderType_TextInput */])), core["_30" /* ɵdid */](80, 16384, null, 0, esm5_forms["t" /* RequiredValidator */], [], { required: [0, "required"] }, null), core["_50" /* ɵprd */](1024, null, esm5_forms["k" /* NG_VALIDATORS */], function (p0_0) { return [p0_0]; }, [esm5_forms["t" /* RequiredValidator */]]), core["_30" /* ɵdid */](82, 671744, null, 0, esm5_forms["q" /* NgModel */], [[2, esm5_forms["b" /* ControlContainer */]], [2, esm5_forms["k" /* NG_VALIDATORS */]], [8, null], [8, null]], { name: [0, "name"], model: [1, "model"] }, { update: "ngModelChange" }), core["_50" /* ɵprd */](2048, null, esm5_forms["m" /* NgControl */], null, [esm5_forms["q" /* NgModel */]]), core["_30" /* ɵdid */](84, 16384, null, 0, esm5_forms["n" /* NgControlStatus */], [esm5_forms["m" /* NgControl */]], null, null), core["_30" /* ɵdid */](85, 5423104, null, 0, input["a" /* TextInput */], [config["a" /* Config */], platform["a" /* Platform */], util_form["a" /* Form */], app_app["a" /* App */], core["t" /* ElementRef */], core["V" /* Renderer */], [2, content["a" /* Content */]], [2, item["a" /* Item */]], [2, esm5_forms["m" /* NgControl */]], dom_controller["a" /* DomController */]], { placeholder: [0, "placeholder"] }, null), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, 2, ["\n        "])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n        "])), (_l()(), core["_31" /* ɵeld */](89, 0, null, null, 3, "button", [["block", ""], ["ion-button", ""], ["margin-vertical", ""], ["type", "submit"]], [[8, "disabled", 0]], null, null, button_ngfactory["b" /* View_Button_0 */], button_ngfactory["a" /* RenderType_Button */])), core["_30" /* ɵdid */](90, 1097728, null, 0, button_button["a" /* Button */], [[8, ""], config["a" /* Config */], core["t" /* ElementRef */], core["V" /* Renderer */]], { block: [0, "block"] }, null), (_l()(), core["_55" /* ɵted */](91, 0, ["\n            ", "\n        "])), core["_47" /* ɵpid */](131072, translate_pipe["a" /* TranslatePipe */], [translate_service["a" /* TranslateService */], core["j" /* ChangeDetectorRef */]]), (_l()(), core["_55" /* ɵted */](-1, null, ["\n    "])), (_l()(), core["_55" /* ɵted */](-1, 1, ["\n"])), (_l()(), core["_55" /* ɵted */](-1, null, ["\n"]))], function (_ck, _v) { var _co = _v.component; var currVal_5 = "close"; _ck(_v, 20, 0, currVal_5); var currVal_24 = "popover"; _ck(_v, 48, 0, currVal_24); var currVal_25 = "publishState"; var currVal_26 = _co.publishState; _ck(_v, 51, 0, currVal_25, currVal_26); var currVal_27 = "personal"; _ck(_v, 56, 0, currVal_27); var currVal_29 = "course"; _ck(_v, 61, 0, currVal_29); var currVal_31 = "site"; _ck(_v, 66, 0, currVal_31); var currVal_41 = "required"; _ck(_v, 80, 0, currVal_41); var currVal_42 = "text"; var currVal_43 = _co.text; _ck(_v, 82, 0, currVal_42, currVal_43); var currVal_44 = core["_34" /* ɵinlineInterpolate */](1, "", core["_56" /* ɵunv */](_v, 85, 0, core["_44" /* ɵnov */](_v, 86).transform("addon.notes.note")), ""); _ck(_v, 85, 0, currVal_44); var currVal_46 = ""; _ck(_v, 90, 0, currVal_46); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = core["_44" /* ɵnov */](_v, 4)._hidden; var currVal_1 = core["_44" /* ɵnov */](_v, 4)._sbPadding; _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = core["_56" /* ɵunv */](_v, 8, 0, core["_44" /* ɵnov */](_v, 9).transform("addon.notes.addnewnote")); _ck(_v, 8, 0, currVal_2); var currVal_3 = core["_56" /* ɵunv */](_v, 15, 0, core["_44" /* ɵnov */](_v, 17).transform("core.close")); _ck(_v, 15, 0, currVal_3); var currVal_4 = core["_44" /* ɵnov */](_v, 20)._hidden; _ck(_v, 19, 0, currVal_4); var currVal_6 = core["_44" /* ɵnov */](_v, 27).statusbarPadding; var currVal_7 = core["_44" /* ɵnov */](_v, 27)._hasRefresher; _ck(_v, 26, 0, currVal_6, currVal_7); var currVal_8 = core["_44" /* ɵnov */](_v, 33).ngClassUntouched; var currVal_9 = core["_44" /* ɵnov */](_v, 33).ngClassTouched; var currVal_10 = core["_44" /* ɵnov */](_v, 33).ngClassPristine; var currVal_11 = core["_44" /* ɵnov */](_v, 33).ngClassDirty; var currVal_12 = core["_44" /* ɵnov */](_v, 33).ngClassValid; var currVal_13 = core["_44" /* ɵnov */](_v, 33).ngClassInvalid; var currVal_14 = core["_44" /* ɵnov */](_v, 33).ngClassPending; _ck(_v, 29, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = core["_56" /* ɵunv */](_v, 44, 0, core["_44" /* ɵnov */](_v, 45).transform("addon.notes.publishstate")); _ck(_v, 44, 0, currVal_15); var currVal_16 = core["_44" /* ɵnov */](_v, 48)._disabled; var currVal_17 = core["_44" /* ɵnov */](_v, 53).ngClassUntouched; var currVal_18 = core["_44" /* ɵnov */](_v, 53).ngClassTouched; var currVal_19 = core["_44" /* ɵnov */](_v, 53).ngClassPristine; var currVal_20 = core["_44" /* ɵnov */](_v, 53).ngClassDirty; var currVal_21 = core["_44" /* ɵnov */](_v, 53).ngClassValid; var currVal_22 = core["_44" /* ɵnov */](_v, 53).ngClassInvalid; var currVal_23 = core["_44" /* ɵnov */](_v, 53).ngClassPending; _ck(_v, 47, 0, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_28 = core["_56" /* ɵunv */](_v, 57, 0, core["_44" /* ɵnov */](_v, 58).transform("addon.notes.personalnotes")); _ck(_v, 57, 0, currVal_28); var currVal_30 = core["_56" /* ɵunv */](_v, 62, 0, core["_44" /* ɵnov */](_v, 63).transform("addon.notes.coursenotes")); _ck(_v, 62, 0, currVal_30); var currVal_32 = core["_56" /* ɵunv */](_v, 67, 0, core["_44" /* ɵnov */](_v, 68).transform("addon.notes.sitenotes")); _ck(_v, 67, 0, currVal_32); var currVal_33 = (core["_44" /* ɵnov */](_v, 80).required ? "" : null); var currVal_34 = core["_44" /* ɵnov */](_v, 84).ngClassUntouched; var currVal_35 = core["_44" /* ɵnov */](_v, 84).ngClassTouched; var currVal_36 = core["_44" /* ɵnov */](_v, 84).ngClassPristine; var currVal_37 = core["_44" /* ɵnov */](_v, 84).ngClassDirty; var currVal_38 = core["_44" /* ɵnov */](_v, 84).ngClassValid; var currVal_39 = core["_44" /* ɵnov */](_v, 84).ngClassInvalid; var currVal_40 = core["_44" /* ɵnov */](_v, 84).ngClassPending; _ck(_v, 79, 0, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40); var currVal_45 = (_co.processing || (_co.text.length < 2)); _ck(_v, 89, 0, currVal_45); var currVal_47 = core["_56" /* ɵunv */](_v, 91, 0, core["_44" /* ɵnov */](_v, 92).transform("addon.notes.addnewnote")); _ck(_v, 91, 0, currVal_47); }); }
function View_AddonNotesAddPage_Host_0(_l) { return core["_57" /* ɵvid */](0, [(_l()(), core["_31" /* ɵeld */](0, 0, null, null, 1, "page-addon-notes-add", [], null, null, null, View_AddonNotesAddPage_0, RenderType_AddonNotesAddPage)), core["_30" /* ɵdid */](1, 49152, null, 0, add_AddonNotesAddPage, [nav_params["a" /* NavParams */], view_controller["a" /* ViewController */], app["a" /* CoreAppProvider */], dom["a" /* CoreDomUtilsProvider */], notes["a" /* AddonNotesProvider */]], null, null)], null, null); }
var AddonNotesAddPageNgFactory = core["_27" /* ɵccf */]("page-addon-notes-add", add_AddonNotesAddPage, View_AddonNotesAddPage_Host_0, {}, {}, []);

//# sourceMappingURL=add.ngfactory.js.map
// EXTERNAL MODULE: ./node_modules/@angular/common/esm5/common.js
var common = __webpack_require__(8);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.loader.js
var translate_loader = __webpack_require__(322);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.compiler.js
var translate_compiler = __webpack_require__(323);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.parser.js
var translate_parser = __webpack_require__(325);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/missing-translation-handler.js
var missing_translation_handler = __webpack_require__(324);

// EXTERNAL MODULE: ./node_modules/@ngx-translate/core/src/translate.store.js
var translate_store = __webpack_require__(417);

// EXTERNAL MODULE: ./node_modules/ionic-angular/module.js
var ionic_angular_module = __webpack_require__(638);

// EXTERNAL MODULE: ./node_modules/ionic-angular/util/module-loader.js
var module_loader = __webpack_require__(238);

// CONCATENATED MODULE: ./src/addon/notes/pages/add/add.module.ngfactory.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddonNotesAddPageModuleNgFactory", function() { return AddonNotesAddPageModuleNgFactory; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 

























var AddonNotesAddPageModuleNgFactory = core["_28" /* ɵcmf */](add_module_AddonNotesAddPageModule, [], function (_l) { return core["_40" /* ɵmod */]([core["_41" /* ɵmpd */](512, core["o" /* ComponentFactoryResolver */], core["_21" /* ɵCodegenComponentFactoryResolver */], [[8, [action_sheet_component_ngfactory["a" /* ActionSheetCmpNgFactory */], alert_component_ngfactory["a" /* AlertCmpNgFactory */], app_root_ngfactory["a" /* IonicAppNgFactory */], loading_component_ngfactory["a" /* LoadingCmpNgFactory */], modal_component_ngfactory["a" /* ModalCmpNgFactory */], picker_component_ngfactory["a" /* PickerCmpNgFactory */], popover_component_ngfactory["a" /* PopoverCmpNgFactory */], select_popover_component_ngfactory["a" /* SelectPopoverNgFactory */], toast_component_ngfactory["a" /* ToastCmpNgFactory */], AddonNotesAddPageNgFactory]], [3, core["o" /* ComponentFactoryResolver */]], core["K" /* NgModuleRef */]]), core["_41" /* ɵmpd */](4608, common["m" /* NgLocalization */], common["l" /* NgLocaleLocalization */], [core["G" /* LOCALE_ID */], [2, common["v" /* ɵa */]]]), core["_41" /* ɵmpd */](4608, esm5_forms["x" /* ɵi */], esm5_forms["x" /* ɵi */], []), core["_41" /* ɵmpd */](4608, esm5_forms["d" /* FormBuilder */], esm5_forms["d" /* FormBuilder */], []), core["_41" /* ɵmpd */](4608, translate_loader["b" /* TranslateLoader */], translate_loader["a" /* TranslateFakeLoader */], []), core["_41" /* ɵmpd */](4608, translate_compiler["a" /* TranslateCompiler */], translate_compiler["b" /* TranslateFakeCompiler */], []), core["_41" /* ɵmpd */](4608, translate_parser["b" /* TranslateParser */], translate_parser["a" /* TranslateDefaultParser */], []), core["_41" /* ɵmpd */](4608, missing_translation_handler["b" /* MissingTranslationHandler */], missing_translation_handler["a" /* FakeMissingTranslationHandler */], []), core["_41" /* ɵmpd */](4608, translate_service["a" /* TranslateService */], translate_service["a" /* TranslateService */], [translate_store["a" /* TranslateStore */], translate_loader["b" /* TranslateLoader */], translate_compiler["a" /* TranslateCompiler */], translate_parser["b" /* TranslateParser */], missing_translation_handler["b" /* MissingTranslationHandler */], translate_service["b" /* USE_DEFAULT_LANG */], translate_service["c" /* USE_STORE */]]), core["_41" /* ɵmpd */](512, directives_module["a" /* CoreDirectivesModule */], directives_module["a" /* CoreDirectivesModule */], []), core["_41" /* ɵmpd */](512, common["b" /* CommonModule */], common["b" /* CommonModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["v" /* ɵba */], esm5_forms["v" /* ɵba */], []), core["_41" /* ɵmpd */](512, esm5_forms["i" /* FormsModule */], esm5_forms["i" /* FormsModule */], []), core["_41" /* ɵmpd */](512, esm5_forms["s" /* ReactiveFormsModule */], esm5_forms["s" /* ReactiveFormsModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["a" /* IonicModule */], ionic_angular_module["a" /* IonicModule */], []), core["_41" /* ɵmpd */](512, ionic_angular_module["b" /* IonicPageModule */], ionic_angular_module["b" /* IonicPageModule */], []), core["_41" /* ɵmpd */](512, _ngx_translate_core["b" /* TranslateModule */], _ngx_translate_core["b" /* TranslateModule */], []), core["_41" /* ɵmpd */](512, add_module_AddonNotesAddPageModule, add_module_AddonNotesAddPageModule, []), core["_41" /* ɵmpd */](256, module_loader["a" /* LAZY_LOADED_TOKEN */], add_AddonNotesAddPage, []), core["_41" /* ɵmpd */](256, translate_service["c" /* USE_STORE */], undefined, []), core["_41" /* ɵmpd */](256, translate_service["b" /* USE_DEFAULT_LANG */], undefined, [])]); });

//# sourceMappingURL=add.module.ngfactory.js.map

/***/ })

});
//# sourceMappingURL=65.js.map