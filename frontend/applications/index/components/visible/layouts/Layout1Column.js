export default class Layout1Column extends React.Component {
    render() {
        return (
            <div data-component="layout-1column">
                <div className="container">{this.props.children}</div>
            </div>
        );
    }
}