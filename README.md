# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

*************  BOOK MY SHOW WEB APP:  ************

=============  Function:  ==============

- The goal is to develop a full stack web application that login a user by validating their email and password from the repository, generating their sessionId, redirecting them to the home page which displays the list of all the movie booking done by the user, the user can click on create new booking button which redirects them to the booking page, here user has to fill up the details of the movie like movie name, time, venue etc., the user can click on save button to save the details and they will be redirected to the home page. the user can logout from their account and their sessionId will be set to null.

+++++++++++  Working  +++++++++++++

1. When this react app runs for the first time then the execution starts from index.html file and the browser identifies the id attribute from this file.
2. Then index.js file renders a react component called App.js to the DOM. The ReactDOM.render() is a method of ReactDom library. It takes two arguments. The first argument is the react component that we have to render and the second argument is the DOM element where we want to render that react component. The DOM element id attribute is set to "root" here. The DOM element id attribute can be set in index.html file.
3. The App component is a functional component that returns a component called Routes when the Route path is "/".
4. The Routes component is a class component that extends Component class imported from react module. Inside routes component, we check whether sessionID is stored in session storage or not.
5. If sessionID is stored then we push "/home" path to the history of the web browser else we don't do anything. Then depending on the current route path, the user is redirected to that web page.
6. If the route path is "/" then landing page component is rendered, if the route path is "/home" then home page component is rendered, and if the route path is "/booking" then booking page component is rendered else an error page component is loaded.

[[[[[[[[[[[[  Landing Page:  ]]]]]]]]]]]]]

{{{{{{{{{{  front-end:  }}}}}}}}}

1. The landing page is the first page that loads when the application is launched. This page renders three components: a loader, an image, and a login form.
2. The loader component receives a loading prop that is initially set to null using useState hook. If the loading prop is null then the loader component returns null else it returns circularprogress function.
3. The circularprogress function is a function of circularprogressprops interface of material-ui library.
4. After that the landing page returns an image component and a login component.
5. The login component receives setLoading as a prop. It returns an EmailIDPassword component that receives setLoading as a prop.
6. This component contains two input fields of type email and password and a login button. When the user clicks on login button, then reactOnSubmit function is called and true is passed to the setLoading method and loading is set to true and Loading component renders until any response is received from the backend. Now the url, data and path configuration headers are passed as a parameter of axios.post() method to call the backend server API.

{{{{{{{{{{{  back-end:  }}}}}}}}}}}}}

- Now the backend contains user and booking model class, user and booking controller class, user and booking service class and user and booking repository interface (as Mongo repository automatically defines the interface method). The controller class has the main logic that interacts with the service class and returns the response to the front-end server. The service class has the functional logic that interacts with the repository interface and returns the response to the controller class. The model class contains the private data-members to ensure encapsulation, getter-setter methods to ensure proper data access control and constructors to initialize the data-members. The data-members store the required values in the variable.

1. The loginUser method is called in the user controller class which receives user object as a formal parameter. Now loginUser method of user service class is called and the returned value is stored in loggedInUser User object.
2. The loginUser method of user service class receives user object as a formal parameter. Now the user emailId is verified and password is matched from the user repository. Then the user sessionId is generated using UUID.randomUUID() and that sessionId is set for that user and the user is saved in the user repository and the user object is returned to the controller class.
3. The received user object from the service class is stored in the loggedInUser user object. Now a map of that user's sessionId key : value pair is returned as body along with 200 status code to the front-end.

{{{{{{{{{{{  front-end:  }}}}}}}}}}}}

1. Now axios.then() method runs which receives data as a parameter and then loading state is set to false and the sessionId is set in the session storage of the browser and the user is redirected to home page using history.push("/home")

[[[[[[[[[[[  Home Page:  ]]]]]]]]]]]]]

1. This page returns four components: a loader, a header, bookingstable and create booking button.
2. Loader component renders until any response is received from the backend.
3. The header component returns logout component.
4. The logout component returns a button to logout user. When the user clicks on logout button then a logout function is called in that component. The url, null (as no data is required) and path configuration headers are passed as a parameter of axios.post() method to call the backend server API.

{{{{{{{{{{{{{  back-end:  }}}}}}}}}}}}}}

1. The logoutUser method of the user controller class is called and it receives sessionId as a parameter from the front-end server. Now validateUser method of user service class is called with received sessionId as an actual parameter to validate the user.
2. Now the validate user method calls find by sessionId abstract method of mongo repository. If any user corresponding to that sessionID exists then the method returns true else returns false to the logout user method of user controller class.
3. Now if the validate user method returns true then logout user method of service class is called that receives sessionId as an actual parameter. Now the sessionId of the user which has to be logout is set to null and the user is saved in the user repository.

{{{{{{{{{{{{  front-end:  }}}}}}}}}}}

1. Now axios.then() method executes and the sessionID is removed from the web browser and the user is redirected back to the landing page using history.push("/").
2. The bookings table component receives setloading method as a prop. It contains tableData useState hook that will store the booking details of all the users. 3. Now the url, data and path configuration headers are passed as a parameter of axios.post() method to call the backend server API.

{{{{{{{{{{{{  back-end:  }}}}}}}}}}}}}}

1. The getAllBookings of booking controller class is called and it receives sessionId as a parameter from the front-end server. Now validateUser method of user service class is called with received sessionId as an actual parameter to validate the user.
2. Now the validate user method calls find by sessionId abstract method of mongo repository. If any user corresponding to that sessionID exists then the method returns true else returns false.
3. Now if the validate user method returns true then getAllbookings method of booking service method is called that returns a list of booking by executing findAll method of booking repository.
4. Now a list of booking is retured along with 200 status code as ResponseEntity object's body and status respectively to the front-end server.

{{{{{{{{{{  front-end:  }}}}}}}}}}}}}}

1. Now axios.then() method executes that receives a list of booking from the backend API. This data is further stored in a dataTable variable one by one using map function and the setTableData method is passed with dataTable variable that sets the tableData variable to the dataTable.
2. Now table heading array is created where each column contains two key value pair of id and header. The id is same as one used to store data in tableData variable.
3. booking table component returns a table outline component that is passed with two props, table headings and table data.
4. The table outline component distributes and returns the data of the user in the form of a table using table tag, table head tag, table row tag (which returns the table heading by populating table header using map function in a row in a table cell tag) of html.
5. When create booking button is clicked then the user is redirected to the create booking page using history.push("/booking").

[[[[[[[[[[[[  Booking page: ]]]]]]]]]

{{{{{{{{{  front-end  }}}}}}}}}}

1. The booking page first checks whether there is sessionId or not in the session storage. If it is not then the user will be redirected to the landing page.
2. This page returns two components: header and bookmovie.
3. The header component contains logout component.
4. The bookmovie component returns a form that contains various input box to take input from the user about their movie name, time, venue etc. When the user clicks on sumbit button, a reactOnSubmit function is called.
5. Now the url, data and path configuration headers are passed as a parameter of axios.post() method to call the backend server API.

{{{{{{{{{{{{{ back-end: }}}}}}}}}}}}

1. the create booking method of booking controller class is called and it receives sessionId as a parameter and booking from the front-end server. Now validateUser method of user service class is called with received sessionId as an actual parameter to validate the user.
2. Now the validate user method calls find by sessionId abstract method of mongo repository. If any user corresponding to that sessionID exists then the method returns true else returns false.
3. Now if the validate user method returns true then createBooking method of booking service method is called that sets booking id for that booking object and saves the booking object in the booking repository and returns the object.
4. Now a new booking is retured along with 200 status code as ResponseEntity object's body and status respectively to the front-end server.

{{{{{{{{{{  front-end:  }}}}}}}}}}}}

1. Now axios.then() method executes and the user is redirected to the home page using history.push("/home").
