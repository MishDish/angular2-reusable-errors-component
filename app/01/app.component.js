System.register(['angular2/core', './errors.component', './errors.service'], function(exports_1, context_1) {
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
    var core_1, errors_component_1, errors_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (errors_component_1_1) {
                errors_component_1 = errors_component_1_1;
            },
            function (errors_service_1_1) {
                errors_service_1 = errors_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(errors) {
                    this.errors = errors.getErrors();
                    this.messages = errors.getMessages();
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: '<h1>App02</h1><errors [messages-input]="messages" [errors-input]="errors"></errors>',
                        directives: [errors_component_1.ErrorsComponent],
                        providers: [errors_service_1.ErrorsService]
                    }), 
                    __metadata('design:paramtypes', [errors_service_1.ErrorsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map