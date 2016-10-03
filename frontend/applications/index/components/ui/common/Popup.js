export default class Popup extends React.Component {
    render() {
        return (
            <div className="modal fade" id={this.props.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title" id="myModalLabel">{this.props.title}</h4>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-xs-1"></div>
                                <div className="col-xs-10">
                                    {this.props.children}
                                </div>
                                <div className="col-xs-1"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}