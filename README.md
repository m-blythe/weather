# Weather app

## STEP 1
As a best practice, sketch the architecture of your application before you start writing code.

For this exercise, start by describing what your application does. Do this in a bullet list.

Next, decide how you might divvy up these responsibilities. Would you write a single module that handles all of them? Would you write one module for each bullet list? Something else? Be sure to justify your decision.

Finally, draw a diagram describing the relationships between your modules. Each arrow should describe a dependency—that is, an arrow from module A to module B indicates that module A uses module B.

## STEP 2
Implement the logic for the UserSearch component. You should begin planning the component with pseudocode.

This component requires you to use the weather-js NPM package. Take a moment to research and experiment with the API, documented here: https://www.npmjs.com/package/weather-js

Create a UserSearch constructor. It should accept a user's name and location as arguments, and store the value of Date.now() in a date property. (This will be formatted later.)

Objects returned by the UserSearch constructor should also have a getWeather method, which should log or return the weather in the user's location.

Test your UserSearch constructor by feeding it dummy data for now.

## STEP 3

* Implement the logic for the `WeatherAdmin` component. As with the `UserSearch` component, you should start with pseudocode.

* This component requires you to read and save information. Be sure to `require` the appropriate Node package.

* Create a `WeatherAdmin` constructor. This constructor should return an object with two methods.

* One of those methods is `newUserSearch`, which should accept a user's `name` and `location`; search for the weather in their area; and save the user's information in a log of all searches users have made thus far. Remember to format the date as you log it to the user. (It's simple, and it only takes a... _moment_!)

* The other method is `getData`, which should log or return a list of all of the searches users have executed thus far.

* Test the `WeatherAdmin` component by feeding it dummy data for now.
  
## STEP 4
* Implement the logic for the CLI component. Refer to the architectural diagram for help.

* Before you write any JavaScript, write out the CLI component's behavior in pseudocode.

* Be sure to require the `WeatherAdmin` module here.

* When you're finished, ask the instructor or one of your TAs to approve your solution.

* **Hint**: This component doesn't require much code.
  