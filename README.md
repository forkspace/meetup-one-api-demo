# First Meetup Demo

This is a straightfoward demo that illustrates how the Serverless Framework can easily be used to build
a backend API with a database for your JavaScript client application (ReactJS is used in this case, but you
could use anything you wanted).

## Setting up the API

Prerequisites:

* Follow the prerequisites specified on the Serverless Framework [quick start guide](https://serverless.com/framework/docs/providers/aws/guide/quick-start/).

From your favourite terminal or command prompt, navigate to the `api` directory.

Run `yarn install` or `npm install` to install the dependencies.

Run `sls deploy` to deploy the API to your AWS environment.

Copy the URL that is output up to the environment route (eg. https://xyz.eu-west-1.amazonaws.com/development/) as you'll need this in your client app.

And you're done! Feel free to edit the API and make changes to it. You can always revert to the base commit. :)

## Setting up the Client

This one is a little simpler. Start by renaming the file `.env.sample` to `.env` and replacing the URL inside for the one you copied from the API deployment output. Then, simply run `yarn install` and then `yarn start` to get the application up and running.

If you run into any problems getting this going, please raise an Issue, or even better, create a Pull Request and change it! :)

Happy Hacking!
