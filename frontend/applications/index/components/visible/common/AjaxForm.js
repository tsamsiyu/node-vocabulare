import Form from './Form';
import getFormData from 'get-form-data';
import ApiHelper from '../../../helpers/ApiHelper';

export default class AjaxForm extends React.Component {
    handleFormSubmitting(e) {
        e.preventDefault();
        let action = e.target.getAttribute('action');
        let formData = getFormData(e.target);
        let method = e.target.method;

        if (this.props.handle instanceof Function) {
            this.props.handle(ApiHelper.send({
                url: action,
                data: formData,
                method: method
            }));
        } else if (this.props.handleForce instanceof Function) {
            this.props.handleForce(formData, action, method);
        }
    }

    render() {
        return (
            <Form {...this.props} onSubmit={this.handleFormSubmitting.bind(this)}>
                {this.props.children}
            </Form>
        );
    }
}