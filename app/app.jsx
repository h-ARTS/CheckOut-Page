import React from 'react';
import ReactDOM from 'react-dom';
import BookStore from './components/BookStore';

var InputExample = React.createClass({
  getInitialState() {
    return (
      {name: '-'}
    )
  },
  handleChange(event) {
    this.setState({
      name: event.target.value.toUpperCase()
    });
  },
  render() {
    return (
      <input type="text" value={this.state.name} onChange={this.handleChange} />
    );
  }
});

ReactDOM.render(
  <BookStore />,
  document.getElementById('root')
);
