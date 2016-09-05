import React from 'react';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class Form extends React.Component {
    static childContextTypes = {
        formId: React.PropTypes.string
    }

    getChildContext() {
        return {
            formId: this.props.id
        };
    }

    render() {
        let action = this.props.settings.apiUrl + this.props.action;
        let className = this.props.className || 'form-horizontal';

        return (
                <form action={action} className={className} noValidate id={this.props.id} onSubmit={this.props.onSubmit}>
                    {this.props.children}
                </form>
            );
    }
}