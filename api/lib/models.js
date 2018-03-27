const dynogels = require('dynogels');
const Joi = require('joi');

const STAGE = process.env.STAGE;
const REGION = process.env.REGION;

dynogels.AWS.config.update({
  region: process.env.REGION,
  apiVersion: '2012-08-10'
});

const Meetups = dynogels.define('meetups', {
  hashKey: 'meetupId',
  timestamps: true,
  schema: {
    meetupId: dynogels.types.uuid(),
    location: Joi.string(),
    attendants: Joi.number(),
    title: Joi.string(),
    description: Joi.string(),
    createdBy: Joi.string(),
    date: Joi.string(),
    time: Joi.string()
  }
});

Meetups.config({ tableName: `Meetups-${REGION}-${STAGE}` });

module.exports.Meetups = Meetups;
