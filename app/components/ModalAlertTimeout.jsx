import React from 'react';

const ModalAlertTimeout = React.createClass({
     componentDidMount() {
       setTimeout(() => {
          let timeoutModal = ReactDOM.findDOMNode(this.refs.timeoutModal);
          $(timeoutModal).modal('show');
       }, 100);   
     },
     render() {
          return(
               <div className="modal fade" ref="timeoutModal">
                    <div className="modal-dialog">
                         <div className="modal-content">
                              <div className="modal-header">
                                   <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">x</span>
                                   </button>
                                   <h4 className="modal-title">Timeout</h4>
                              </div>
                              <div className="modal-body">
                                   <p>The cart has timed-out. Please try again!</p>
                              </div>
                         </div>
                    </div>
               </div>
          )
     }
});

export default ModalAlertTimeout;