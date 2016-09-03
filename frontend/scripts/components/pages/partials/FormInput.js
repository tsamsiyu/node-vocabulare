import React from "react";

export default class FormInput extends React.Component {
    static contextTypes = {
        formId: React.PropTypes.string
    }

    render() {
        let id = (this.props.formId || this.context.formId) + '-' + this.props.name;
        let input;

        if (this.props.children) {
            input = this.props.children;
        } else {
            input = <input type={this.props.type || 'text'}
                           name={this.props.name}
                           id={id}
                           className="form-control"
                           placeholder={this.props.placeholder || this.props.label}/>;
        }

        return (
            <div className="form-group">
                <label htmlFor={id} style={{display: 'block'}}>{this.props.label}</label>
                {input}
            </div>
        );
    }
}