import React, { Component } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import styles from './AppHeader.module.css'

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#1976d2',
        },
    },
});

class AppHeader extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Box sx={{ flexGrow: 1 }}>
                    <ThemeProvider theme={darkTheme}>
                        <AppBar color="primary" position="static">
                            <Toolbar>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="open drawer"
                                    sx={{ mr: 2 }}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="div"
                                    sx={{ userSelect: 'none', flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                                >
                                    Calculator
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </ThemeProvider>
                </Box>
            </header>
        );
    };
};

export default AppHeader;