"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customComponent = void 0;
var customComponent = function (classes, props) {
    var componentClasses = {};
    Object.keys(classes).forEach(function (classname) {
        var _a;
        console.log(classname);
        Object.assign(componentClasses, (_a = {},
            // eslint-disable-next-line no-eval
            _a[eval("classes." + classname)] = props[classname],
            _a));
    });
    return componentClasses;
};
exports.customComponent = customComponent;
