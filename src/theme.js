import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            light: '#7789de',
            main: '#556cd6',
            dark: '#9b2e6c',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: '#ff1744',
        },
        experiment: {
            main: '#af5789', 
            contrastText: '#ffffff'
        },
        button: {
            main: '#c6cef0',
            contrastText: '#000000',
        },
        tab: {
            main: '#DADADA',
            dark: '#9d9d9d'
        },
        // diagram_purple: {
        //     main: '#aba3fa',
        //     contrastText: '#000000',
        // },
        // diagram_red: {
        //     main: '#ff807f',
        //     contrastText: '#000000',
        // },
        // diagram_yellow: {
        //     main: '#ffdd33',
        //     contrastText: '#000000',
        // },
        // diagram_black: {
        //     main: '#000000',
        //     contrastText: '#ffffff',
        // }
    },
});

export default theme;