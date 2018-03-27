import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
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
        <Grid container>
          <Grid item xs={12}>
            <TextField
              id="title"
              label="Meetup Title"
              value={this.state.title}
              onChange={this.handleChange('title')}
              margin="normal"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="description"
              label="Description"
              multiline
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin="normal"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs>
            <TextField
              id="attendants"
              label="Attendants"
              value={this.state.name}
              onChange={this.handleChange('attendants')}
              margin="normal"
              type="number"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="time"
              label="Time"
              value={this.state.time}
              onChange={this.handleChange('time')}
              margin="normal"
              type="time"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="date"
              label="Date"
              value={this.state.date}
              onChange={this.handleChange('date')}
              margin="normal"
              type="date"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="raised" onClick={this.handleFormSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default MeetupForm;
