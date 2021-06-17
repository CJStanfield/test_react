import React from "react";
import Home from "./Home/Home"
import Login from "./Login/Login"
import Navbar from "./Navbar/Navbar"
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";



function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/login">
                        <Login/>
                    </Route>
                </Switch>
            </div>
        </Router>
    )

}


export default App;