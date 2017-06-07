import React from 'react';
import SetIntervalMixin from './mixins/SetIntervalMixin';
import CartTimeoutMixin from './mixins/CartTimeoutMixin';

const ShippingDetails = React.createClass({
     propTypes: {
           alertCartTimeout: React.PropTypes.func.isRequired,
           updateCartTimeout: React.PropTypes.func.isRequired,
           cartTimeout: React.PropTypes.number.isRequired
     },
     mixins: [SetIntervalMixin, CartTimeoutMixin],
     getInitialState() {
          return(
               { 
                    fullName: '', 
                    contactNumber: '', 
                    shippingAddress: '',
                    error: false,
                    cartTimeout: this.props.cartTimeout 
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

          const formData = {
               fullName: this.state.fullName,
               contactNumber: this.state.contactNumber,
               shippingAddress: this.state.shippingAddress
          };

          if(this._validateInput()) {
               this.props.updateFormData(formData);
          }
     },
     handleChange(e, attr) {
          const newState = this.state;
          newState[attr] = e.target.value;
          this.setState(newState);
          console.log(this.state);
     },
     render() {
          const errorMessage = this._renderError();
          const min = Math.floor(this.state.cartTimeout / 60),
                sec = this.state.cartTimeout - min * 60;
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
                    <div className="well">
                          <span className="glyphicon glyphicon-time" aria-label="true"></span> You have {min} Minutes, {sec} Seconds, before confirming order.
                    </div>
               </div>
          );
     }
});

export default ShippingDetails;