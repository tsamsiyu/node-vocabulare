import React from "react";
import Nav from './Nav';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div id="main-layout-component"className="container">
                <Nav/>
                <div id="main-layout-content">{this.props.children}</div>
            </div>
        );
    }
}
