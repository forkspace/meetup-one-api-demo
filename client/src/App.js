import React, { Component } from 'react';
import axios from 'axios';
import Grid from 'material-ui/Grid';
import MeetupForm from './MeetupForm';
import MeetupList from './MeetupList';
const API = process.env.REACT_APP_API_URL;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meetups: []
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  componentDidMount() {
    this.getMeetups();
  }

  getMeetups() {
    axios
      .get(`${API}meetup`)
      .then(result => {
        this.setState({ meetups: result.data.meetups });
      })
      .catch(console.error);
  }

  handleFormSubmit(form) {
    axios
      .post(`${API}meetup`, {
        ...form,
        location: 'Cork',
        createdBy: 'Chris P.'
      })
      .then(() => {
        this.getMeetups();
      })
      .catch(console.error);
  }

  handleDeleteClick(meetupId) {
    axios
      .delete(`${API}meetup/${meetupId}`)
      .then(() => {
        this.getMeetups();
      })
      .catch(console.error);
  }

  render() {
    return (
      <div style={{ margin: '8px' }}>
        <Grid container direction={'row'}>
          <Grid item xs={6}>
            <MeetupForm onFormSubmit={this.handleFormSubmit} />
          </Grid>
          <Grid item xs={6}>
            <MeetupList
              meetups={this.state.meetups || []}
              onMeetupDeleteClick={this.handleDeleteClick}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
