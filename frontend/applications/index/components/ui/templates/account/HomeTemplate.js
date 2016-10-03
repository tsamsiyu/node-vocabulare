import Layout from '../../layouts/Layout1Column';
import Nav from '../../common/Nav';
import Popup from '../../common/Popup';
import AjaxForm from '../../common/AjaxForm';
import FormInput from '../../common/FormInput';

export default class HomeTemplate extends React.Component {
    addLanguage(data) {
        console.log(data);
    }

    render() {
        return(
            <div data-component="home-template">
                <Layout>
                    <Nav/>
                    <Popup title="Add new language" id="addNewLanguage">
                        <AjaxForm id="addNewLanguageForm" handleForce={this.addLanguage.bind(this)}>
                            <FormInput name="Word[name]" label="Name"/>
                            <button type="submit" className="btn btn-default">Add</button>
                        </AjaxForm>
                    </Popup>
                    <button type="button"
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#addNewLanguage">
                        Add new language
                    </button>
                </Layout>
            </div>
        );
    }
}