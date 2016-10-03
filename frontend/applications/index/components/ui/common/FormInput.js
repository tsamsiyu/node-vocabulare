export default class FormInput extends React.Component {
    static contextTypes = {
        formId: React.PropTypes.string
    };

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.getId()} style={{display: 'block'}}>{this.props.label}</label>
                {this.getInputTag()}
            </div>
        );
    }

    getId() {
        return (this.props.formId || this.context.formId) + '-' + this.props.name;
    }

    getInputTag() {
        const p = this.props;
        const c = p.children;

        if (c) {
            if ((c.name || !p.name) && (c.placeholderText || !p.label)) {
                return c;
            } else {
                return React.cloneElement(c, {
                    name: c.name || p.name,
                    placeholderText: c.placeholderText || p.label
                });
            }
        } else {
            return <input type={p.type || 'text'}
                          name={p.name}
                          id={this.getId()}
                          className="form-control"
                          placeholder={p.placeholder || p.label}/>;
        }
    }
}