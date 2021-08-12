"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = void 0;
var styles_1 = require("@material-ui/core/styles");
var colors_1 = require("@material-ui/core/colors");
exports.theme = styles_1.createTheme({
    overrides: {
        MuiButton: {
            text: {
                background: '#4dd2be',
                borderRadius: 3,
                border: 0,
                color: '#15527d',
                height: 48,
                padding: '0 30px',
                margin: '10px 10px',
                '&:hover': {
                    backgroundColor: colors_1.amber[500],
                    color: 'primary',
                },
            },
            outlined: {
                borderRadius: 3,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                margin: '10px 10px'
            },
            contained: {
                borderRadius: 8,
                border: 0,
                color: 'white',
                height: 48,
                padding: '0 30px',
                margin: '10px 10px',
            },
            containedPrimary: {
                '&:hover': {
                    backgroundColor: colors_1.amber[500],
                    color: 'primary',
                },
            },
            outlinedSecondary: {
                '&:hover': {
                    backgroundColor: colors_1.deepPurple[500],
                    color: colors_1.amber[500]
                },
            }
            // custom container error button
        },
    },
    palette: {
        primary: {
            main: colors_1.deepPurple[500],
        },
        secondary: {
            main: colors_1.amber[500],
        },
    },
});
