import React from 'react';

const BookList = React.createClass({
     getInitialState() {
          return(
               {
                    books: [
                         { id: 1, name: 'Zero to One', author: 'Peter Thiel' },
                         { id: 2, name: 'Monk who sold his Ferrari', author: 'Robin Sharma' },
                         { id: 3, name: 'Wings of Fire', author: 'A.P.J. Abdul Kalam' }
                    ],
                    selectedBooks: [],
                    error: false
               }
          );
     },
     _renderError() {
          if(this.state.error) {
               return (
                    <div className="alert alert-danger">
                         {this.state.error}
                    </div>
               );
          }
     },
     _renderBook(book) {
          return(
               <div className="checkbox" key={book.id}>
                    <label>
                         <input type="checkbox" value={book.name} onChange={this.handleSelectedBooks} /> {book.name} -- {book.author}
                    </label>
               </div>
          );
     },
     handleSelectedBooks(e) {
          const selectedBooks = this.state.selectedBooks;
          const index = selectedBooks.indexOf(e.target.value);

          if (e.target.checked) {
               if(index === -1)
                    selectedBooks.push(e.target.value);
          } else {
               selectedBooks.splice(index, 1);
          }

          this.setState({
               selectedBooks: selectedBooks
          });
     },
     handleSubmit(e) {
          console.log(e);
          e.preventDefault();

          if(this.state.selectedBooks.length === 0) {
               this.setState({
                    error: 'Please choose at least one book to continue'
               });
          } else {
               this.props.updateFormData({
                    selectedBooks: this.state.selectedBooks
               });
          }

          console.log("Form submitted");
     },
     render() {
          const errorMessage = this._renderError();

          return(
               <div className="jumbotron">
                    <h3>
                         Choose from wide variety of books available in our store.
                    </h3>
                    {errorMessage}
                    <form onSubmit={this.handleSubmit}>
                         {this.state.books.map((book) => {
                              return this._renderBook(book);
                         })}
                         <input type="submit" className="btn btn-success"/>
                    </form>
               </div>
          );
     }
});

export default BookList;
