export default class Form extends React.Component {
    static childContextTypes = {
        formId: React.PropTypes.string
    };

    getChildContext() {
        return {
            formId: this.props.id
        };
    }

    render() {
        let className = this.props.className || 'form-horizontal';
        let method = this.props.method || 'POST';

        return (
            <form action={this.props.action}
                  className={className}
                  method={method}
                  noValidate
                  id={this.props.id}
                  onSubmit={this.props.onSubmit}>
                {this.props.children}
            </form>
        );
    }
}