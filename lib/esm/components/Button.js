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
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core';
import { Button as ButtonItem } from '@material-ui/core';
import { customComponent } from "../utils";
import React from 'react';
var useStyles = makeStyles(function (theme) { return ({
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
export var Button = function (props) {
    var containedError = props.containedError, outlinedError = props.outlinedError, containedSuccess = props.containedSuccess, outlinedSuccess = props.outlinedSuccess, className = props.className, children = props.children, rest = __rest(props, ["containedError", "outlinedError", "containedSuccess", "outlinedSuccess", "className", "children"]);
    var classes = useStyles();
    var testClasses = customComponent(classes, props);
    return React.createElement(ButtonItem, __assign({ className: clsx(testClasses, className) }, rest), children);
};
