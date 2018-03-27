import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import MeetupCard from './MeetupCard';

class MeetupList extends Component {
  static propTypes = {
    meetups: PropTypes.array.isRequired,
    onMeetupDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container spacing={8}>
        {this.props.meetups.map(meetup => (
          <Grid item xs={4} key={meetup.meetupId}>
            <MeetupCard {...meetup} onDeleteClick={this.props.onMeetupDeleteClick} />
          </Grid>
        ))}
      </Grid>
    );
  }
}

export default MeetupList;
