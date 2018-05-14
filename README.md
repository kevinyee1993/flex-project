# WhatDo

[Live Version](http://whatdo-sf.herokuapp.com/#/survey)
![splashPage](https://i.imgur.com/pGGPZds.gif)


# Description

**WhatDo is an app that intelligently recommends trip itinerary suggestions based on a user’s background and preferences.** Trip Planner parses through travel activity, restaurant, and lodging data from third-party platforms and influencers to recommend trip itineraries tailored to a user’s interests.



# Features
### Real-time Information
We created custom web scrapers to obtain data from various sites including Yelp, OpenTable, and EventBrite.  This provides our app with the most up-to-date information about restaurants, lodging, and activities to ensure the user  gets the most relevant information possible.

### Machine Learning Generated Recommendations
We implemented machine learning in our project to recommend ideal activities, restaurants, and lodging to our users based on how they answered the initial survey questions.  The purpose of the survey was to get an idea of the personalities of each of our users to customize their experience.


### Google Maps API
We integrated Google Maps API in our project.  This allowed us to add a map onto each attraction's specific show page.

![mapPicture](https://i.imgur.com/3zj8UYe.png)




# Technologies
### Express.js
We used this to set up our back end.  One of the main advantages of using Express were that we were able to create our web scrapers using this.  

### Cheerio
We implemented Cheerio as a replacement to jQuery as an HTML selector when building the web scrapers.  Cheerio is about 8 times faster than JSDOM because it works with a simple DOM model.  In addition to its efficiency, it removes DOM inconsistencies from the jQuery library.

```
await scrape(page)
    .then(body => {
      const hotels = [];
      const $ = cheerio.load(body);
      $('.hotel-wrap').each((i, element) => {
        const $element = $(element);
        const $name = $element.find(".p-name");
        const $rating = $element.find(".guest-rating-value");
        const $numReviews = $element.find(".ta-total-reviews");
```

### Axios
We used Axios to make requests to different URLs.  The benefit of this is that we did not have to import the entire jQuery library into our project just to use the AJAX request.

```
const axios = require('axios');

module.exports = function(routeName, object) {
  axios.post(`http://localhost:8000/${ routeName }`, object)
    .then(function (response) {
      console.log("posted to database");
    })
    .catch(function (error) {
      console.log(error);
    });
};

```

### mLab
We integrated mLab as our database of choice.  MongoDB was used rather than PostgreSQL because of the sheer number of JSON that we had to work with.  MongoDB proved to perform better with the data we had in terms of data retrieval, storage, and modification.  In addition, a cloud MongoDB service like mLab was especially useful because we could simply update the database and connect it to our project, immediately updating our information.  This cuts out the middleman of having to run the scrapers, reseeding the database, and then deploying the website.

### SciKit Learn
We imported SciKit-Learn's Gaussian Naive-Bayes machine learning classification model.   This prototyped training data to match features derived from user surveys to labels in the form of recommended activities.

### Python
We used Python to script fitting of training data to the machine learning model.  We also fed unlabeled new survey data through the model to obtain a list of activity recommendations ranked by probability of classification.

### Spawn
We imported Spawn from child-processes to integrate our Python scripts into the Express back end route.  This persisted user survey data from the front end by way of URL params, then we passed it to the Python file as system input.



# Future Direction
* Allow users to create accounts and save itineraries and preferences across sessions.
* Continue to refine trip data point recommendations based on a user’s ongoing app activities and favorites.
* Continue adding new cities to the app
* Update app to more accurately filter and present restaurants and lodging based on user preferences
* Add/update questions list in the beginning to be more efficient and accurate
