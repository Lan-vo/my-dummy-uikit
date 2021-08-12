import './App.css';
import { ThemeProvider } from '@material-ui/core';
import { theme } from "./theme/theme";
import { Button } from "./components/Button";
import React from 'react';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(ThemeProvider, { theme: theme },
                React.createElement(Button, null, "Default button"),
                React.createElement(Button, { color: 'primary', variant: "contained" }, "Primary Contained"),
                React.createElement(Button, { color: 'secondary', variant: "outlined" }, "Secondary Outlined"),
                React.createElement(Button, { variant: "contained", containedError: true }, "Custom Contained Error "),
                React.createElement(Button, { variant: "outlined", outlinedError: true }, "Custom Outlined Error "),
                React.createElement(Button, { variant: "contained", containedSuccess: true }, "Custom Contained Success")))));
}
export default App;
