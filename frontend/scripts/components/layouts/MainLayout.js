import React from "react";
import Nav from './Nav';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div id="main-layout-component">{this.props.children}</div>
            </div>
        );
    }
}
