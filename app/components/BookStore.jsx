import React from 'react';
import BookList from './BookList';
import ShippingDetails from './ShippingDetails';
import DeliveryDetails from './DeliveryDetails';
import Confirmation from './Confirmation';
import Success from './Success';

const BookStore = React.createClass({
     getInitialState() {
          return({
               currentStep: 1,
               formValues: {},
               cartTimeout: 60 * 15
          });
     },
     updateFormData(formData) {
          const formValues = Object.assign({}, this.state.formValues, formData);
          const nextStep = this.state.currentStep + 1;

          this.setState({
               currentStep: nextStep,
               formValues: formValues
          });
          console.log(formData);
     },
     updateCartTimeout(timeout) {
          this.setState({
               cartTimeout: timeout
          });
     },
     alertCartTimeout() {
          this.setState({
               currentStep: 10
          });
     },
     render() {
          switch(this.state.currentStep) {
               case 1:
                    return <BookList updateFormData={this.updateFormData} />;
               case 2:
                    return <ShippingDetails updateFormData={this.updateFormData} cartTimeout={this.state.cartTimeout} updateCartTimeout={this.updateCartTimeout} alertCartTimeout={this.alertCartTimeout} />;
               case 3: 
                    return <DeliveryDetails updateFormData={this.updateFormData} cartTimeout={this.state.cartTimeout} updateCartTimeout={this.updateCartTimeout} alertCartTimeout={this.alertCartTimeout} />;
               case 4:
                    return <Confirmation data={this.state.formValues} updateFormData={this.updateFormData} cartTimeout={this.state.cartTimeout} />;
               case 5:
                    return <Success data={this.state.formValues} />;
               case 10:
                    return <div><h2>Xour cart timed out, Please try again!</h2></div>;
               default:
                    return <BookList updateFormData={this.updateFormData} />;
          }
     }
});

export default BookStore;