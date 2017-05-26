import React from 'react';

var DeliveryDetails = React.createClass({
     getInitialState() {
          return(
               {
                    deliveryOption: 'Primary'
               }
          );
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
               </div>
          );
     }
});

export default DeliveryDetails;