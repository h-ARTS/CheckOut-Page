import React from 'react';

var ShippingDetails = React.createClass({
     getInitialState() {
          return(
               { 
                    fullName: '', 
                    contactNumber: '', 
                    shippingAddress: '',
                    error: false 
               }
          );
     },
     _renderError() {
          if(this.state.error) {
               return(
                    <div className="alert alert-danger">
                          {this.state.error}
                    </div>
               );
          }
     },
     _validateInput() {
          if(this.state.fullName === '') {
               this.setState({
                    error: "Please enter full name"
               });
          } else if (this.state.contactNumber === '') {
               this.setState({
                    error: "Please enter contact number"
               });
          } else if (this.state.shippingAddress === '') {
               this.setState({
                    error: "Please enter shipping address"
               });
          } else {
               this.setState({
                    error: false
               });
               return true;
          }
     },
     handleSubmit(e) {
          e.preventDefault();

          var formData = {
               fullName: this.state.fullName,
               contactNumber: this.state.contactNumber,
               shippingAddress: this.state.shippingAddress
          };

          if(this._validateInput()) {
               this.props.updateFormData(formData);
          }
     },
     handleChange(e, attr) {
          var newState = this.state;
          newState[attr] = e.target.value;
          this.setState(newState);
          console.log(this.state);
     },
     render() {
          var errorMessage = this._renderError();
          return(
               <div className="jumbotron">
                    <h1>Enter your shipping information.</h1>
                    {errorMessage}
                    <form onSubmit={this.handleSubmit}>
                         <div className="form-group">
                              <input type="text" className="form-control" placeholder="Full Name" value={this.state.fullName} onChange={(e) => this.handleChange(e, 'fullName')} />
                         </div>
                         <div className="form-group">
                              <input type="text" className="form-control" placeholder="Contact number" value={this.state.contactNumber} onChange={(e) => this.handleChange(e, 'contactNumber')} />
                         </div>
                         <div className="form-group">
                              <input type="text" className="form-control" placeholder="Shipping Address" value={this.state.shippingAddress} onChange={(e) => this.handleChange(e, 'shippingAddress')} />
                         </div>
                         <div className="form-group">
                              <button className="btn btn-success" type="submit" ref="submit">Submit</button>
                         </div>
                    </form>
               </div>
          );
     }
});

export default ShippingDetails;