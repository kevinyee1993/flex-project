{# Trip Planner (think of new name later)
**Trip Planner is an app that intelligently recommends trip itinerary suggestions based on a user’s background and preferences.**

## Background & Overview
Trip Planner parses through travel activity, restaurant, and lodging data from third-party platforms and influencers to recommend trip itineraries tailored to a user’s interests.

This project can be divided into three discrete activities:

* Learn about the user’s preferences through an initial onboarding survey. Continue to collect feedback through the user’s ongoing app interactions.
* Seed a database of activities, lodging, and restaurants (“trip data points”). Organize these trip data points so they can be matched to specific user preferences.
* Intelligently serve trip data points to a user based on their state preferences and ongoing app interactions. Ongoing app interactions can include direct user feedback (“thumbs up or down” or bookmarking trip data points) or ancillary user activity (e.g., clicks, scroll-pausing, mouse-overs).

## Functionality & MVP

- [ ] Collect user preferences through an initial survey. Build a “user persona” based on these survey responses.
- [ ] Match and recommend trip data points to a user based on their initial feedback.
- [ ] Allow users to “favorite” or bookmark trip data points to a personal itinerary. Allow users to export this personal itinerary in a mobile-friendly format or share it via email/social media.

### Bonus Features
- [ ] Allow users to create accounts and save itineraries and preferences across sessions.
- [ ] Continue to refine trip data point recommendations based on a user’s ongoing app activities and favorites.
- [ ] Continue adding new cities to the app

## Technologies & Technical Challenges

Backend: ? MongoDB seems like the way to go for right now
Frontend: JavaScript, React, CSS Grid

Technologies for building a scraper: Node.js, cheerio, request-promise, jsonframe-cheerio, node-fetch

**Creating a store of trip data points**
- [ ] If sites have public API for use, will use AJAX requests to get that JSON
- [ ] If sites have no public API, will need to utilize scrapers to obtain data
- [ ] Scrapers will be built using node.js along with cheerio.  Cheerio is essentially jQuery for node.js which allows us to select specific elements on a site.

**Potential sites to get data from**
Third-party APIS:
OpenWeatherMap - definitely has API available
TripAdvisor - has API but only give out limited keys - may need to scrape
Yelp - possibly has API available but would still need to get a key
Influencers:
	Blog sites which can be scraped for reviews, recommendations, etc.

**Matching trip data points to user preferences**
For lodging recommendations, direct matches will be made with survey responses (budget)
Use Tensorflow to teach machine to classify activities stored in db as good recommendation or not per survey answers.
Machine will be trained with pre-scraped activities and specific user archetypes as the main 2 attributes, and with a recommendation rating as the “label.”
Failing that, write our own logic to achieve the same result.


## Group Members & Work Breakdown
Kevin Yee, Winston Chan, Yihwan Kim

### Accomplish over the weekend
* Finalize design of initial survey.
* Finalize marketing copy for splash page.
* Seed preliminary database, including manual curation of blogs and other influencer posts
* Built scrapers for yelp, opentable, eventbrite, and hotels

### Day 1
* Stand-up marketing homepage, start working on survey interface.
* begin relating mock data we will be receiving from survey to activities in database
* Set up database to store JSON obtained from scrapers

### Day 2
* Finish survey interface, ensure smooth transitions and that user responses are saved within a single session.
* Customize scrapers to get info periodically to keep app updated
* Work on AI

### Day 3
* Depending on progress with AI, can either continue with that route or manually filter results based on user preference
* Should have the basic skeleton of the app set up

### Day 4
* Integrate/polish up the app and its basic functionality
* Will have to discuss with team but can start working on bonus features:
    * Incorporate a schedule for the user to follow
    * Add more cities and provide search functionality - will need to update scrapers for this to handle more cities
### Day 5
* Work on bonus features decided upon
### Day 6
* Work on bonus features decided upon
[Data Sources](
https://docs.google.com/spreadsheets/d/1tbsrEgkJfH-mGZId1uzCcbQmYgWsQ8J1lkDp9jU8qR4/edit#gid=0)
