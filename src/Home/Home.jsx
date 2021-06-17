import React from 'react';
import { Link } from 'react-router-dom'
import {AppBar, Container, CssBaseline, Toolbar, Typography} from "@material-ui/core";
import {PhotoCamera} from "@material-ui/icons";
import {ToggleButton} from "@material-ui/lab";
import CheckIcon from "@material-ui/icons/Check";


function apiBedSwitch(did, state) {
    // const endpoint = `http://localhost:8081/device/fanPower?did=${did}&state=${state}`
    const endpoint = `https://api.coolebed.com/bed-api/device/fanPower?did=${did}&state=${state}`;
    fetch(endpoint, {
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


function Home() {
    const [selected, setSelected] = React.useState(false);

    const toggleButtonState = () => {
        if (selected) {apiBedSwitch(1, 1);}
        else {apiBedSwitch(1, 0)}
        setSelected(!selected);
    }

    return (
        <>
            <CssBaseline />
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

export default Home;