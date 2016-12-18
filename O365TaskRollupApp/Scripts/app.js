webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	const platform_browser_dynamic_1 = __webpack_require__(1);
	const app_component_1 = __webpack_require__(23);
	// Do the main bootstrap.
	platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_component_1.AppComponent);


/***/ },

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	const app_module_1 = __webpack_require__(24);
	const core_1 = __webpack_require__(3);
	let AppComponent = class AppComponent {
	};
	AppComponent = __decorate([
	    core_1.Component({
	        selector: 'app-main',
	        template: `<h1>${app_module_1.Welcome.getMessage()}</h1>`
	    }), 
	    __metadata('design:paramtypes', [])
	], AppComponent);
	exports.AppComponent = AppComponent;


/***/ },

/***/ 24:
/***/ function(module, exports) {

	"use strict";
	class Welcome {
	    static getMessage() {
	        return "Here is some text from TS!!!!!!!";
	    }
	}
	exports.Welcome = Welcome;


/***/ }

});
//# sourceMappingURL=app.js.map