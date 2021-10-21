import './App.css';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import ProfilePage from "./ProfilePage";
import PostsPage from "./PostsPage";
import {Route} from "react-router";
import NavigationBar from "./NavigationBar";
import LoginPage from "./LoginPage";
import Cookies from "universal-cookie";

class App extends React.Component {

    state = {
        isLoggedIn: false
    }

    componentDidMount() {
        const cookies = new Cookies();
        if (cookies.get("logged_in") == "true") {
            this.setState({
                isLoggedIn: true
            })
        }
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    {
                        this.state.isLoggedIn ?
                            <div>
                                <NavigationBar/>
                                <Route path={"/"} component={ProfilePage}/>
                                <Route path={"/profile"} component={ProfilePage}/>
                                <Route path={"/posts"} component={PostsPage}/>
                            </div>
                            :
                            <div>
                                <Route path={"/"} component={LoginPage}/>
                            </div>
                    }
                </BrowserRouter>
            </div>
        )
    }

}

export default App;
