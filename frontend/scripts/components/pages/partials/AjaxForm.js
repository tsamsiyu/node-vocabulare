import React from 'react';
import Form from './Form';
import getFormData from 'get-form-data';
import { connect } from 'react-redux';
import axios from 'axios';

export default class AjaxForm extends React.Component {
    handleFormSubmitting(e) {
        e.preventDefault();
        let formData = getFormData(e.target);
        $.ajax({ // TODO: use axios, fetch, or other ajax library instead of jquery.ajax
            method: e.target.method,
            url: e.target.action,
            data: formData,
            crossDomain: true,
            xhrFields: { withCredentials: true }
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