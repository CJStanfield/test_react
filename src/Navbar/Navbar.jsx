import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { Link } from 'react-router-dom'
import {PhotoCamera} from "@material-ui/icons";

function Navbar(){
    return (
        <AppBar position="relative">
            <Toolbar>
                <Typography variant="h6">
                    <Link to="/">
                        Home
                    </Link>
                </Typography>
                <Typography variant="h6">
                    <Link to="/login">
                        Login
                    </Link>
                </Typography>

            </Toolbar>
        </AppBar>
    );
}

export default Navbar;