System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ErrorsService;
    return {
        setters:[],
        execute: function() {
            ErrorsService = (function () {
                function ErrorsService() {
                }
                ErrorsService.prototype.getErrors = function () {
                    return {
                        invalid: true,
                        required: true,
                        format: true
                    };
                };
                ErrorsService.prototype.getMessages = function () {
                    return {
                        invalid: "Please provide a valid value",
                        required: "Please provide a value",
                        format: "Field is not formatted properly!"
                    };
                };
                return ErrorsService;
            }());
            exports_1("ErrorsService", ErrorsService);
        }
    }
});
//# sourceMappingURL=errors.service.js.map