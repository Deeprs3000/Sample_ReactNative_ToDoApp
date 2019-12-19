# TodoApp

TodoApp is a simple, user-friendly and easy to understand single page cross platform mobile application used to log to-dos. Todos are segregated in Active and Completed tasks for better experience.

## Tech stack

TodoApp is developed using following technologies :

* [React Native] - Open-source mobile application framework created by Facebook. (v0.60.3)
* [Redux] - JavaScript library for managing application state. (v4.0.4)
* [Redux Persist] - To persist and rehydrate a redux store. (v5.10.0)
* [Native Base] - Sleek, ingenious and dynamic front-end framework. (v2.12.1)


## App Architecture

TodoApp follows redux based 3 tier architecture which consists actions, reducers and stores to manage the application state.
 
## Installation

1. Open terminal.
2. Navigate to project directory.
3. Install the dependencies and devDependencies using following command :

```sh
npm install
```

## Execution

##### [iOS]

1. Open TodoApp > ios > TodoApp.xcworkspace (xCode is required).
2. Select the simulator and Click on Product > Run.

##### [android]

1. Open Terminal and goto project directory.
2. Make sure you have an android simulator/device running and run the following command : 

```sh
react-native run-android
```

-----

   [VS Code]: <https://code.visualstudio.com>
   [Redux]: <https://redux.js.org>
   [React Native]: <https://facebook.github.io/react-native/>
   [Native Base]: <https://nativebase.io>
   [Redux Persist]: <https://github.com/rt2zz/redux-persist>
