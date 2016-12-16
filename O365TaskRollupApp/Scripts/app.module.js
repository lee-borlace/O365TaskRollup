System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Welcome;
    return {
        setters:[],
        execute: function() {
            Welcome = (function () {
                function Welcome() {
                }
                Welcome.getMessage = function () {
                    return "Here is some text from TS!!!";
                };
                return Welcome;
            }());
            exports_1("Welcome", Welcome);
        }
    }
});
//# sourceMappingURL=app.module.js.map