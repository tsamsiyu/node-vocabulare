import React from "react";
import Nav from './Nav';

export default class MainLayout extends React.Component {
    render() {
        return (
            <div data-component="main-layout">
                <Nav/>
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}
