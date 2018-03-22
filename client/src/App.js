import React, { Component } from 'react';
import logo from './logo.svg';
import MeetupForm from './MeetupForm';
import MeetupList from './MeetupList';

class App extends Component {
  handleFormSubmit(form) {
    console.log({ form });
  }

  render() {
    return (
      <div>
        <MeetupForm onFormSubmit={this.handleFormSubmit} />
        <MeetupList meetups={this.lists} />
      </div>
    );
  }
}

export default App;
