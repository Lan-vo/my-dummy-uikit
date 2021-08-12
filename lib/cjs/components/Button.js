"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
var clsx_1 = __importDefault(require("clsx"));
var core_1 = require("@material-ui/core");
var core_2 = require("@material-ui/core");
var utils_1 = require("../utils");
var react_1 = __importDefault(require("react"));
var useStyles = core_1.makeStyles(function (theme) { return ({
    containedError: {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
    },
    outlinedError: {
        border: "1px solid " + theme.palette.error.main,
        color: theme.palette.error.main,
        "&:hover": {
            border: "1px solid " + theme.palette.error.main[500]
        },
    },
    containedSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
        '&:hover': {
            backgroundColor: theme.palette.success.main,
            color: theme.palette.success.contrastText,
        },
    },
    outlinedSuccess: {
        backgroundColor: theme.palette.success.main,
        color: theme.palette.success.contrastText,
    },
}); });
var Button = function (props) {
    var containedError = props.containedError, outlinedError = props.outlinedError, containedSuccess = props.containedSuccess, outlinedSuccess = props.outlinedSuccess, className = props.className, children = props.children, rest = __rest(props, ["containedError", "outlinedError", "containedSuccess", "outlinedSuccess", "className", "children"]);
    var classes = useStyles();
    var testClasses = utils_1.customComponent(classes, props);
    return react_1.default.createElement(core_2.Button, __assign({ className: clsx_1.default(testClasses, className) }, rest), children);
};
exports.Button = Button;
