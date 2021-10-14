import './App.css';
import * as React from "react";
import {BrowserRouter} from "react-router-dom";
import ProfilePage from "./ProfilePage";
import PostsPage from "./PostsPage";
import {Route} from "react-router";
import NavigationBar from "./NavigationBar";
import LoginPage from "./LoginPage";

class App extends React.Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <NavigationBar/>
                    
                    <Route path={"/login"} component={LoginPage}/>
                    <Route path={"/profile"} component={ProfilePage}/>
                    <Route path={"/posts"} component={PostsPage}/>
                </BrowserRouter>
            </div>
        )
    }

}

export default App;
