import React from 'react';
import Form from './Form';
import getFormData from 'get-form-data';
import { connect } from 'react-redux';

@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class AjaxForm extends React.Component {
    handleFormSubmitting(e) {
        e.preventDefault();
        console.log(e);
        console.log(getFormData(e.target));
    }

    render() {
        return (
            <Form {...this.props} onSubmit={this.handleFormSubmitting.bind(this)}>
                {this.props.children}
            </Form>
        );
    }
}