import React from 'react';

var Success = React.createClass({
     render() {
          var numberOfDays = "1 to 2";

          if(this.props.data.deliveryOption === "Normal") {
               numberOfDays = "3 to 4";
          }
          return(
               <div className="jumbotron">
                    <h2>Thank you for shopping with us {this.props.data.fullName}.</h2>
                    <h4>You will soon get {this.props.data.selectedBooks.join(", ")} at {this.props.data.shippingAddress} in approximately {numberOfDays} days.</h4>
               </div>
          );
     }
});

export default Success;