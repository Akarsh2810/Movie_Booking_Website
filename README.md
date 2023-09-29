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

To create a react app:
-> download and install node.js
-> npm(node package manager) to install packages and npx(node package execute) to execute packages is automatically installed with node.js.
-> type a command: npx create-react-app your-app-name in the terminal of an editor and press enter.
-> when you use creat react app it basically runs node server to host your app.
-> this command will install the default node modules in your app and also creates a sample react app.
-> type a command: npm start to run that react app.

node.js :
-> it is an open source server environment.
-> it uses asynchronous programming

how node.js handles a file request?
-> it sends the task to the computer file system.
-> now it is ready to handle the next request.
-> when the file system has opened and read the file, the server returns the content to the client.

-> node.js eleminates the waiting and simply continues with the next request.
-> node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

Is installation of node.js is necessary before creating any react app and why?
-> No, it is not necessary. Indeed you need npm for package management in React. And npm generally requires NodeJs. If you can find a way to install it on its own, you would not explicitly need NodeJs.
-> The other answer is incorrect. You don't NEED Node.js, in fact you could create a project without running a single npm command. 
-> The main reason, as pointed out in the article, is:
1. Easy package management. This means you can upgrade the package easily later on
2. JSX is the templating language that makes it way easier to write components: <h1>Hello Word</h1> reads so much better than React.createElement('h1', null, 'Hello World')
3. Managing module imports, as opposed to having global variables around everywhere, it's great to have encapsulation and import modules as needed.
4. Build step and workflow. For a modern project, you will need tools to minify your code, cache busting, transpiling (writing pure javascript for old browser is a pain and you really shouldn't do it manually), the list goes on and on.
-> Because almost all the JavaScript libraries/frameworks are using the Node Package Manager (NPM), that makes much more convenient to manage JavaScript dependencies in general, both client-side and server-side.
-> It's not really technically necessary, but using a package manager is the best practice for managing dependencies and sub-dependencies.

how to study a react project?
1. Set up development environment
-> install node.js to use npm and npx, as react projects require these tools.
-> use a code editor or ide such as vs code to work with the project.

2. clone the project
-> if the project is hosted on a version control system like Git, then clone the repository to your local machine.
-> we can use git command-line tools this action and various other actions on the project as well.

3. install dependencies
-> run "npm install" in the terminal to install all the project's dependencies specified in the package.json file.

4. understand the project structure
-> Examine the project's directory structure. 
-> React projects often have a common structure with folders like src, public, node_modules, etc.
-> Look for configuration files like package.json, .babelrc, .eslintrc, and .gitignore. 
-> package.json provides information about project dependencies.
-> .bablerc provides information about build settings.
-> .eslintrc provides information about coding style rules.
-> .gitignore provides information about ignored files.

5. Explore the codebase
-> start by exploring the src (source) directory. this is where the majority of the react code resides.
-> Look for the entry point of the application, typically named index.js or App.js.
-> examine how the ReactDOM renders the root component into the HTML document.
-> Identify key components and their respective folders.
-> React projects are often organized into components that represent different parts of the UI.
-> Read through the code of various components to understand their roles and how they interact with one another.

6. Learn the routing (if appliable)
-> If the project uses client-side routing (e.g., React Router), familiarize yourself with the routing configuration and how different components are associated with specific routes.

7. Study State Management (if applicable):
-> If the project uses state management libraries like Redux, study how state is managed, and how actions and reducers (in the case of Redux) are structured.

8. Review API Integration (if applicable):
-> If the project interacts with APIs, examine how data is fetched and manipulated, and how it's passed to components.

9. Inspect Styling:
-> Check how styles are applied to components.
-> React projects commonly use CSS-in-JS libraries like styled-components or CSS modules.
-> Look for CSS files or styles defined within JavaScript files.

10. Run the Project Locally:
-> Use npm start to start the development server.
-> This will compile and run the project locally, allowing you to see it in action.

11. Experiment and Make Changes:
-> As you become more comfortable with the codebase, try making small changes to see how they affect the application.
-> This hands-on experience can reinforce your understanding.

12. Read Documentation:
-> If the project is well-documented, refer to the documentation to gain a deeper understanding of its architecture, design decisions, and usage of external libraries.

13. Ask Questions and Seek Help:
-> Don't hesitate to ask questions on forums, communities, or to your peers if you encounter challenges or have doubts. 
-> React has a large and helpful community.

14. Consider Building on It (Optional):
-> If you're feeling confident, consider extending the project by adding new features or improving existing ones.
-> This can be a great way to solidify your knowledge.

Question: Difference between Virtual DOM and Real DOM:

Answer:
What is DOM?

DOM stands for Document Object Model it is the structural representation of all nodes in an HTML document DOM represents the Ul of your applications.  DOM manipulation is required to dynamically change the content of a web page. DOM is an interface that allows the script to update the content, style, and structure of the document.

Real DOM

The DOM represents the web page often called a document with a logical tree and each  branch of the tree ends in a node and each node contains objects programmers can modify the content of the document using a scripting language like javascript and the changes and updates to the dom are fast because of its tree-like structure but after changes, the updated element and its children have to be re-rendered to update the application UI so the  re-rendering of the UI which make the dom slow all the UI components you need to be rendered for every dom update so real dom would render  the entire list and not only those item that receives the update.

Virtual DOM

VDOM is the virtual representation of Real DOM
React update the state changes in Virtual DOM first and then it syncs with Real DOM
Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation
Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions

Note: 
-> Studying a React project can be a gradual process, and it's okay to take your time. 
-> The more you explore and experiment with the codebase, the more comfortable you'll become with React development practices and patterns.

*************  BOOK MY SHOW WEB APP:  ************

=============  Function:  ==============

- The goal is to develop a full stack web application that login a user by validating their email and password from the repository, generating their sessionId, redirecting them to the home page which displays the list of all the movie booking done by the user, the user can click on create new booking button which redirects them to the booking page, here user has to fill up the details of the movie like movie name, time, venue etc., the user can click on save button to save the details and they will be redirected to the home page. the user can logout from their account and their sessionId will be set to null.

+++++++++++  Working  +++++++++++++

1. In react application, the execution starts from index.html file which is in public folder.
2. Inside html tag, we can edit the title tag inside head tag to edit the title of the app.
3. Inside body tag, the div element contains the root id where the <App /> component renders from React.render() method of the index.js file.

1. When this react app runs for the first time then the execution starts from index.html file and the browser identifies the id attribute from this file.
2. Then index.js file renders a react component called App.js to the DOM. The ReactDOM.render() is a method of ReactDom library. It takes two arguments. The first argument is the react component that we have to render and the second argument is the DOM element where we want to render that react component. The DOM element id attribute is set to "root" here. The DOM element id attribute can be set in index.html file.

"src" folder:

App Component:
3. The App component is a functional component that returns a component called Routes when the Route path is "/". The Routes component is called inside BrowserRouter component.
4. We have to import BrowserRouter and Route (both of these are main react router components) from react-router-dom library.
5. BrowserRouter: It is a router implementation that uses HTML5 history API to keep the UI in sync with the URL. It is the parent component that is used to store all other components.
6. Route: It is a component that helps us to establish the link between the component's UI and the URL. Instead of traversing the sequence, routes are selected based on the best match.

Routes Component:
7. The Routes component is a class component that extends Component class imported from react library. Inside routes component, we check whether sessionID is stored in session storage or not using window.location.pathname and _ (lodash).
8. window.location.pathname returns the path and filename of the current page.
9. If sessionID is stored then we push "/home" path to the history of the web browser else we don't do anything. 
10. The createBrowserHistory of the history library manages the page navigation as par the browser preference. The history for the forward and go-back buttons on top of the browser can be managed through this package.
11. The getSessionToken component of session.js file can get the session token stored in sessionStorage of the browser.
12. The session.js file also contains setSessionToken and removeSessionToken that can set and remove the session token from the sessionStorage of the browser.
13. The switch component of the react-router-dom is used to read a single component by wrapping all routes inside switch component.
14. Depending on the current route path, the user is redirected to that web page.
15. If the route exact path is "/" then landing page component is rendered, if the route exact path is "/home" then home page component is rendered, and if the route exact path is "/booking" then booking page component is rendered else an error page component is rendered.
16. Exact: The matches the exact value with the URL. Example: exact path = "/about" will only render the component if it exactly matches with the path. But if we remove "exact" from the syntax, then the UI will still be rendered even if the path structure is "/about/something".
17. Path: It specifies the path name that we assign to our component
18. Element: It is the component that will render if the path matches.

[[[[[[[[[[[[  Landing Page:  ]]]]]]]]]]]]

{{{{{{{{{{  front-end:  }}}}}}}}}

1. The landing page is the first page that loads when the application is launched. This page renders three components: a loader, an image, and a login form.
2. The loader component receives a loading prop that is initially set to null using useState hook. If the loading prop is null then the loader component returns null else it returns circularprogress function.
3. The circularprogress function is a function of circularprogressprops interface of material-ui library.
4. After that the landing page returns an image component and a login component.
5. The image component fetches image from the images component where an image is stored already.
5. The login component receives setLoading as a prop. It returns Paper component of material-ui/core library that returns two component: Typography to display LOGIN heading in the paper form and an EmailIDPassword component that receives setLoading as a prop.
6. This component returns a Formik function which has three props: initialValues, validationSchema, onSubmit. 
7. initialValues is a javascript object having with two properties: emailID and password, both of which have empty string values as their initial values.
8. validationSchema is a javascript object. it creates an object using Yup library. the Yup library creates an object with two properties: emailID and password and sets them as a required field and also displays a required message.
9. The onSubmit call reactOnSubmit function when the user clicks on submit button.
10. The reactOnSubmit function takes two properties: values and formik.
11. When this function is called, then the setLoading method is set to true which initializes the circularProgess component until any response comes from the backend.
12. Now the url of the API is stored in constant url variable so that it can used anywhere to reference this url and since it is declared as constant, its value cannot be reassigned to something else after initialization.
13. Now a javascript object called data is created.
14. It contains two properties: userMailId and password. It stores the value of emailID and password from the input field to the userMailID and password properties respectively.
15. Now the url variable, data object and path configuration headers are passed as a parameter of axios.post() method of axios library to call the backend server API.
16. the config is a javascript object with one property called headers which itself is a javascript object with one property called content-type which is used to set the content type as JSON for an HTTP request.

{{{{{{{{{{{  back-end:  }}}}}}}}}}}}

- Now the backend contains user and booking model class, user and booking controller class, user and booking service class and user and booking repository interface (as Mongo repository automatically defines the interface method). The controller class has the main logic that interacts with the service class and returns the response to the front-end server. The service class has the functional logic that interacts with the repository interface and returns the response to the controller class. The model class contains the private data-members to ensure encapsulation, getter-setter methods to ensure proper data access control and constructors to initialize the data-members. The data-members store the required values in the variable.

1. The loginUser method is called in the user controller class which receives user object as a formal parameter. Now loginUser method of user service class is called and the returned value is stored in loggedInUser User object.
2. The loginUser method of user service class receives user object as a formal parameter. Now the user emailId is verified and password is matched from the user repository. Then the user sessionId is generated using UUID.randomUUID() and that sessionId is set for that user and the user is saved in the user repository and the user object is returned to the controller class.
3. The received user object from the service class is stored in the loggedInUser user object. Now a map of that user's sessionId key : value pair is returned as body along with 200 status code to the front-end.

{{{{{{{{{{{  front-end:  }}}}}}}}}}}

1. Now axios.then() method runs if the backend server response is 200 else axios.catch() method runs.
2. The axios.then() method receives data as a parameter. Now the form can be reset using formik.resetForm() as the data stored on the input field has already been used to call API.
3. Now openBodySnackBar is set to true to display an appropriate message to the user.
4. Now the loading state is set to false and the sessionId is set in the session storage of the browser and the user is redirected to home page using history.push("/home").
5. The axios.catch() method receives an error as a parameter.
6. Now openBodySnackBar is set to true, validation is set to false, and loading is set to false.
7. The Formik element contains a call back function that receives formik as a parameter. 
8. Inside the call back function, a Form component of formik library is called. This component displays appropriate alert message using MuiAlert component. The message depends upon the value of openBodySnackBar and validated.
9. If both are true then logged in successfully message is displayed with a severity of success else Entered wrong emailID or password message is displayed with a severity of error.
10. The Form component also contains three Box component of material-UI. One for emailId, one for password and one for login button.
11. Each Box component contains a Formik Control component which has various properties like control, type, label, name, inputlabel, onValueChange, and value.
12. onValueChange is function that takes event as a parameter which is used to set the value of input field using formik.setFieldValue() method which takes two parameters: first one is the name of the field and second is the value that has to be stored.
13. The FormikControl component decides the type of operation on the basis of control type.
14. If the control type is input then an InputField component is called with rest of the props other than control type.
15. The InputField component returns a FormControl component of material-ui which contains two components called InputLabel and Input.
16. The InputLabel component contains an ErrorMessage component and Input component contains various attributes as well as onChange attribute.
17. The onChange attribute contains a function that has value of the input box as the parameter. This event is passed as a parameter to the onChangeEvent of FormikControl component properties which it further uses to set the value of variables.

[[[[[[[[[[[  Home Page:  ]]]]]]]]]]]

1. This page returns four components: a loader, a header, bookingstable and create booking button.
2. Loader component renders until any response is received from the backend.
3. The header component returns logout component.
4. The logout component returns a button to logout user. When the user clicks on logout button then a logout function is called in that component. The url, null (as no data is required to be passed) and path configuration headers are passed as a parameter of axios.post() method to call the backend server API.

{{{{{{{{{{{{{  back-end:  }}}}}}}}}}}}}

1. The logoutUser method of the user controller class is called and it receives sessionId as a parameter from the front-end server. Now validateUser method of user service class is called with received sessionId as an actual parameter to validate the user.
2. Now the validate user method calls find by sessionId abstract method of mongo repository. If any user corresponding to that sessionID exists then the method returns true else returns false to the logout user method of user controller class.
3. Now if the validate user method returns true then logout user method of service class is called that receives sessionId as an actual parameter. Now the sessionId of the user which has to be logout is set to null and the user is saved in the user repository.

{{{{{{{{{{{{  front-end:  }}}}}}}}}}}

1. Now axios.then() method executes and the sessionID is removed from the web browser and the user is redirected back to the landing page using history.push("/").
2. The bookings table component receives setloading method as a prop. It contains tableData useState hook that will store the booking details of all the users. 3. Now the url and path configuration (only two parameters in case of axios.get() and data also in case of axios.post()) headers are passed as a parameter of axios.get() method to call the backend server API.

{{{{{{{{{{{{  back-end:  }}}}}}}}}}}}}

1. The getAllBookings of booking controller class is called and it receives sessionId as a parameter from the front-end server. Now validateUser method of user service class is called with received sessionId as an actual parameter to validate the user.
2. Now the validate user method calls find by sessionId abstract method of mongo repository. If any user corresponding to that sessionID exists then the method returns true else returns false.
3. Now if the validate user method returns true then getAllbookings method of booking service method is called that returns a list of booking by executing findAll method of booking repository.
4. Now a list of booking is retured along with 200 status code as ResponseEntity object's body and status respectively to the front-end server.

{{{{{{{{{{  front-end:  }}}}}}}}}}

1. Now axios.then() method receives a list of booking from the backend API. This data is further processed one by one using an object called obj using map function and the whole object is stored in an object called tableDataRow which have two properties: id and value. 
2. Each row of data is stored in a variable called dataTable. 
3. Now the tableData state is set to the dataTable and loading is set to false.
4. Now table heading object is created where each column contains two properties: id and header. The id is same as one used to store data in tableData variable.
5. BookingsTable component returns a TableOutline component that is passed with two props, table headings and table data.
6. The TableOutline component distributes and returns the data of the user in the form of a table using table tag, table head tag, table row tag (which returns the table heading by populating table header using map function in a row in a table cell tag) of html.
7. When create booking button is clicked then the user is redirected to the create booking page using history.push("/booking").

[[[[[[[[[  Booking page: ]]]]]]]]]

{{{{{{{{{  front-end  }}}}}}}}}

1. The booking page first checks whether there is sessionId or not in the session storage. If it is not then the user will be redirected to the landing page.
2. This page returns two components: header and bookmovie.
3. The header component contains logout component.
4. The bookmovie component returns a form that contains various input box to take input from the user about their movie name, time, venue etc. When the user clicks on sumbit button, a reactOnSubmit function is called.
5. Now the url, data and path configuration headers are passed as a parameter of axios.post() method to call the backend server API.

{{{{{{{{{{{{ back-end: }}}}}}}}}}}}

1. the create booking method of booking controller class is called and it receives sessionId as a parameter and booking from the front-end server. Now validateUser method of user service class is called with received sessionId as an actual parameter to validate the user.
2. Now the validate user method calls find by sessionId abstract method of mongo repository. If any user corresponding to that sessionID exists then the method returns true else returns false.
3. Now if the validate user method returns true then createBooking method of booking service method is called that sets booking id for that booking object and saves the booking object in the booking repository and returns the object.
4. Now a new booking is retured along with 200 status code as ResponseEntity object's body and status respectively to the front-end server.

Front-end:

1. Now axios.then() method executes and the user is redirected to the home page using history.push("/home").
