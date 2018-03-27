const { Meetups } = require('./lib/models');
const createErrorResponse = error => ({
  statusCode: 500,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
  body: JSON.stringify({
    message: error,
    error: true
  })
});

const create200Response = body => ({
  statusCode: 200,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true
  },
  body: JSON.stringify(body)
});

module.exports.getMeetups = (event, context, callback) => {
  try {
    Meetups.scan()
      .loadAll()
      .exec((error, meetups) => {
        if (error) {
          console.error(error);
          callback(null, createErrorResponse(error));
          return;
        }

        callback(null, create200Response({ meetups: meetups.Items }));
        return;
      });
  } catch (error) {
    callback(null, createErrorResponse(error));
  }
};

module.exports.createMeetup = (event, context, callback) => {
  try {
    const newMeetup = JSON.parse(event.body);
    Meetups.create(newMeetup, (error, meetup) => {
      if (error) {
        console.error(error);
        callback(null, createErrorResponse(error));
        return;
      }

      callback(null, create200Response({ meetup }));
      return;
    });
  } catch (error) {
    console.error(error);
    callback(null, createErrorResponse(error));
    return;
  }
};

module.exports.deleteMeetup = (event, context, callback) => {
  try {
    console.log(event);
    const meetupId = event.pathParameters.id;
    Meetups.destroy(meetupId, (error, item) => {
      if (error) {
        console.error(error);
        callback(null, createErrorResponse(error));
        return;
      }

      callback(null, create200Response({}));
      return;
    });
  } catch (error) {
    console.error(error);
    callback(null, createErrorResponse(error));
    return;
  }
};
