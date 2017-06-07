import React from 'react';
import SetIntervalMixin from './mixins/SetIntervalMixin';
import CartTimeoutMixin from './mixins/CartTimeoutMixin';

const DeliveryDetails = React.createClass({
     propTypes: {
          alertCartTimeout: React.PropTypes.func.isRequired,
          updateCartTimeout: React.PropTypes.func.isRequired,
          cartTimeout: React.PropTypes.number.isRequired
     },
     mixins: [SetIntervalMixin, CartTimeoutMixin],
     getInitialState() {
          return(
               {
                    deliveryOption: 'Primary',
                    cartTimeout: this.props.cartTimeout
               }
          );
     },
     componentWillReceiveProps(nextProps) {
          this.setState({
               cartTimeout: nextProps.cartTimeout
          });
     },
     handleChange(e) {
          this.setState({
               deliveryOption: e.target.value
          });
     },
     handleSubmit(e) {
          e.preventDefault();
          this.props.updateFormData(this.state);
     },
     render() {

          const min = Math.floor(this.state.cartTimeout / 60),
                sec = this.state.cartTimeout - min * 60;

          return (
               <div className="jumbotron">
                    <h1>Choose your delivery options here.</h1>
                    <div style={{width: 200}}>
                         <form onSubmit={this.handleSubmit}>
                              <div className="radio">
                                   <label>
                                        <input type="radio" checked={this.state.deliveryOption === "Primary"} value="Primary" onChange={this.handleChange} />
                                        Primary -- Next day delivery
                                   </label>
                              </div>
                              <div className="radio">
                                   <label>
                                        <input type="radio" checked={this.state.deliveryOption === "Normal"} value="Normal" onChange={this.handleChange} />
                                        Normal -- 3-4 days
                                   </label>
                              </div>
                              <button className="btn btn-success">Submit</button>
                         </form>
                    </div>

                    <div className="well">
                         <span className="glyphicon glyphicon-time" aria-hidden="true"></span> You have {min} Minutes, {sec} Seconds, before confirming order.
                    </div>
               </div>
          );
     }
});

export default DeliveryDetails;