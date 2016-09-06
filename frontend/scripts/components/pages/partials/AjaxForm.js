import React from 'react';
import Form from './Form';
import getFormData from 'get-form-data';
import { connect } from 'react-redux';
import axios from 'axios';

@connect((store) => {
    return {
        settings: store.get('settings')
    };
})
export default class AjaxForm extends React.Component {
    handleFormSubmitting(e) {
        e.preventDefault();
        let formData = getFormData(e.target);
        $.ajax({ // TODO: use axios or other ajax library instead of jquery.ajax
            method: e.target.method,
            url: e.target.action,
            data: formData
        }).then(function (response) {
            console.log(response);
        });
    }

    render() {
        return (
            <Form {...this.props} onSubmit={this.handleFormSubmitting.bind(this)}>
                {this.props.children}
            </Form>
        );
    }
}