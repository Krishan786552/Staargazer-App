### Notes ###

* I did the assignment using Styling Components, which i think is really useful when you want to have the exact style for a component and reuse it everywhere you want.

* I also used ApolloClient created in a separate file (apollo-client.js) in src folder with the objective of having it in a 'global' manner to be able to use it in any other component or hook.

* Having these last two points it is possible to create your separate functions or API calls as in /hooks/useTopics.js where basically the client already created is used here to do the query and the API call to Graphql to get the data that we request and return it as well.

### How to run app & test ###

* Clone the git repo or download the zip package.
* Install npm packages by running `npm install`.
* Node version should be v14.17.0 to v16.16.0
* Get the .env file and create a new valid token to be able to run the application and use ApolloClient, 
  assign your valid token to REACT_APP_GITHUB_API_TOKEN constant in .env file.
* Run the app with `npm run start`.


### Pre-Requisities (How to get personal token to run the application)

* Login to github account
* In the upper-right corner of any page, click your profile photo, then click Settings.
* In the left sidebar, click  Developer settings.
* In the left sidebar, click Personal access tokens.
* Click Generate new token.
* Give your token a descriptive name.
* To give your token an expiration, select the Expiration drop-down menu, then click a default or use the calendar picker.
* Select the scopes, or permissions, you'd like to grant this token. To use your token to access repositories from the command line, select repo.
* Click Generate token.
* Copy the token and paste it in .env file (replace ```sh token_value``` with copied value)

### How it works

* Search any keyword like "react" in the textbox and click on search button
* It will show the results if any otherwise "No Results"
* Once results populated, on click of any result also show similar results

______________________________________________________________________________________________________________________________________
