System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ErrorsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ErrorsComponent = (function () {
                function ErrorsComponent() {
                }
                ErrorsComponent.prototype.mapOfErrors = function () {
                    var output = [];
                    for (var key in this.errors)
                        if (this.errors[key]) {
                            this.errors[key] = this.messages[key];
                            output.push(this.errors[key]);
                        }
                    return output;
                };
                __decorate([
                    core_1.Input('errors-input'), 
                    __metadata('design:type', Object)
                ], ErrorsComponent.prototype, "errors", void 0);
                __decorate([
                    core_1.Input('messages-input'), 
                    __metadata('design:type', Object)
                ], ErrorsComponent.prototype, "messages", void 0);
                ErrorsComponent = __decorate([
                    core_1.Component({
                        selector: 'errors',
                        template: "\n        <div>\n           <span class=\"messages\" *ngFor=\"#error of mapOfErrors()\" >{{ error }}</span>\n        </div>\n    ",
                        styles: ["\n       \n        .messages{\n            display: block;\n            color : red;\n        }\n    "],
                    }), 
                    __metadata('design:paramtypes', [])
                ], ErrorsComponent);
                return ErrorsComponent;
            }());
            exports_1("ErrorsComponent", ErrorsComponent);
        }
    }
});
//# sourceMappingURL=errors.component.js.map