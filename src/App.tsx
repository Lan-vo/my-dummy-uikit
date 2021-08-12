import './App.css';
import {ThemeProvider} from '@material-ui/core';
import {theme} from "./theme/theme";
import {Button} from "./components/Button";
import React from 'react';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ThemeProvider theme={theme}>
                    <Button>Default button</Button>
                    <Button color={'primary'} variant={"contained"}>Primary Contained</Button>
                    <Button color={'secondary'} variant={"outlined"}>Secondary Outlined</Button>
                    <Button variant="contained" containedError={true}>Custom Contained Error </Button>
                    <Button variant="outlined" outlinedError={true}>Custom Outlined Error </Button>
                    <Button variant="contained" containedSuccess={true}>Custom Contained Success</Button>

                </ThemeProvider>
            </header>
        </div>
    );
}

export default App;
