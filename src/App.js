import React from "react";
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core'
import { ToggleButton } from "@material-ui/lab";
import { PhotoCamera } from "@material-ui/icons";
import CheckIcon from "@material-ui/icons/Check";

function apiBedSwitch(did, state) {
    const endpoint = `https://api.coolebed.com/bed-api/device/fanPower?did=${did}&state=${state}`;
    fetch(endpoint, {
            "mode": "no-cors",
            "method": "GET",
            "headers": {
                "Accept": "application/json"
            }
        }

    )
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        });
}

function App() {
    const [selected, setSelected] = React.useState(false);

    const toggleButtonState = () => {
        if (selected) {apiBedSwitch(1, 1);}
        else {apiBedSwitch(1, 0)}
        setSelected(!selected);
    }

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant="h6">Bed Controller</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Bed Controller
                        </Typography>
                        <ToggleButton
                            value="check"
                            selected={selected}
                            onChange={() => {
                                toggleButtonState(!selected);
                            }}
                        >
                            <CheckIcon />
                        </ToggleButton>
                    </Container>
                </div>
            </main>
        </>
    );
}


export default App;