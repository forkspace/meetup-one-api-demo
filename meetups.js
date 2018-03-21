const { Meetups } = require('./lib/models');

module.exports.getMeetups = (event, context, callback) => {
  try {
    Meetups.scan()
      .loadAll()
      .exec(callback);
  } catch (error) {
    callback(error);
  }
};

module.exports.createMeetup = (event, context, callback) => {
  const body = JSON.parse(event.body);
  Meetups.create(body.meetup, callback);
};
