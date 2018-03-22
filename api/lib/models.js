const dynogels = require('dynogels');
const joi = require('joi');

const STAGE = process.env.STAGE;
const REGION = process.env.REGION;

dynogels.AWS.config.update({
  region: process.env.REGION,
  apiVersion: '2012-08-10'
});

const Meetups = dynogels.define('meetups', {
  hashKey: 'meetupId',
  rangeKey: 'locationId',
  timestamps: true,
  schema: {
    meetupId: dynogels.types.uuid(),
    locationId: joi.string(),
    attendants: joi.number(),
    title: joi.string(),
    description: joi.string(),
    createdBy: joi.string()
  }
});

Meetups.config({ tableName: `Meetups-${REGION}-${STAGE}` });

module.exports.Meetups = Meetups;
