import {createTheme} from '@material-ui/core/styles';
import {amber, deepPurple} from "@material-ui/core/colors";




export const theme = createTheme({
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
                    '&:hover': { // changes colors for hover state
                        backgroundColor: amber[500],
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
                    '&:hover': { // changes colors for hover state
                        backgroundColor: amber[500],
                        color: 'primary',
                    },
                },
                outlinedSecondary:{
                    '&:hover': {
                        backgroundColor: deepPurple[500],
                        color:amber[500]
                    },
                }
                // custom container error button
            },
        },
        palette:
            {
                primary: {
                    main: deepPurple[500],
                },
                secondary: {
                    main: amber[500],
                },
            },
    });

