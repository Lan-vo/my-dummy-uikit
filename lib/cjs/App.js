"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var core_1 = require("@material-ui/core");
var theme_1 = require("./theme/theme");
var Button_1 = require("./components/Button");
var react_1 = __importDefault(require("react"));
function App() {
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement("header", { className: "App-header" },
            react_1.default.createElement(core_1.ThemeProvider, { theme: theme_1.theme },
                react_1.default.createElement(Button_1.Button, null, "Default button"),
                react_1.default.createElement(Button_1.Button, { color: 'primary', variant: "contained" }, "Primary Contained"),
                react_1.default.createElement(Button_1.Button, { color: 'secondary', variant: "outlined" }, "Secondary Outlined"),
                react_1.default.createElement(Button_1.Button, { variant: "contained", containedError: true }, "Custom Contained Error "),
                react_1.default.createElement(Button_1.Button, { variant: "outlined", outlinedError: true }, "Custom Outlined Error "),
                react_1.default.createElement(Button_1.Button, { variant: "contained", containedSuccess: true }, "Custom Contained Success")))));
}
exports.default = App;
