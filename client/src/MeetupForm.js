import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PropTypes from 'prop-types';

class MeetupForm extends Component {
  state = {
    attendants: 0,
    title: '',
    description: '',
    date: '',
    time: ''
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  static propTypes = {
    onFormSubmit: PropTypes.func.isRequired
  };

  handleFormSubmit = () => {
    this.props.onFormSubmit(this.state);
  };

  render() {
    return (
      <form noValidate autoComplete="off">
        <TextField
          id="attendants"
          label="Attendants"
          value={this.state.name}
          onChange={this.handleChange('attendants')}
          margin="normal"
          type="number"
        />

        <TextField
          id="title"
          label="Meetup Title"
          value={this.state.title}
          onChange={this.handleChange('title')}
          margin="normal"
        />

        <TextField
          id="description"
          label="Description"
          multiline
          value={this.state.description}
          onChange={this.handleChange('description')}
          margin="normal"
        />

        <TextField
          id="time"
          label="Time"
          value={this.state.time}
          onChange={this.handleChange('time')}
          margin="normal"
          type="time"
        />

        <TextField
          id="date"
          label="Date"
          value={this.state.date}
          onChange={this.handleChange('date')}
          margin="normal"
          type="date"
        />

        <Button variant="raised" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </form>
    );
  }
}

export default MeetupForm;
