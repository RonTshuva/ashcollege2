import './App.css';
import * as React from "react";
import {Link, NavLink} from "react-router-dom";

class NavigationBar extends React.Component {
    state = {
        links: [{title: "Profile", path: "/profile"}, {title: "Posts", path: "/posts"}
            , {title: "About", path: "/about"}]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.links.map(link => {
                            return (
                                <NavLink to={link.path} className={"link"} activeClassName={"active"}>
                                    <li>
                                        {link.title}

                                    </li>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default NavigationBar;
