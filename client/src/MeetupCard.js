import React, { Component } from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

class MeetupCard extends Component {
  static propTypes = {
    meetupId: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    attendants: PropTypes.number.isRequired,
    createdBy: PropTypes.string.isRequired,
    onDeleteClick: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }

  handleDeleteClick() {
    this.props.onDeleteClick(this.props.meetupId);
  }

  render() {
    return (
      <div>
        <Card>
          <CardContent>
            <Typography variant="headline" component="h2">
              {this.props.title}
            </Typography>
            <Typography component="h4">Organizer: {this.props.createdBy}</Typography>
            <Typography component="p">{this.props.description}</Typography>
            <Typography component="p">{this.props.attendants} attendants.</Typography>
            <Typography component="p">
              Time: {this.props.date} {this.props.time}.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">View</Button>
            <Button size="small" onClick={this.handleDeleteClick}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default MeetupCard;
