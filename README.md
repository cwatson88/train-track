# Train Pain

The app train pain is to help find any delays / issues on the line and what platform the train is going to so that you don't have to wait around looking at the boards OR getting that pain when you wait for the train and it is cancelled!!!!

## What the app will do:

* Check the status of your train and if there are any delays / cancelations then it will show in the app and alert you
* As soon as the paltform has been announced it should notify you (in app or push notification)
* Alert you to any advance disruptions that may happen in the future because of work on the line.

What the user needs to see / be updated:

* If there are any canellations then a push notification will be set to alert you
* You should be able to set the time you are going to be getting the train

### Component List:

* Train information
  * Status
  * Platform
  * Train departure and arrival time
* User preferences
  * Departure train station
  * Arrival train station
  * Times of travel (all day, hours between 🕔️ and 🕘️ )
  * Multiple destinations?

### Dependency List:

* Prod:
  * materialize-ui
  * moment.js ?
* Dev:
  * enzyme
