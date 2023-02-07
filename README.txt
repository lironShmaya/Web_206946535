XPARK

Description:

- The application lets users save parking spot in parking lots near their destination (Using google maps API).
- They can save or cancel a parking spot whenever they like (If they didnt save a parking spot and they will try to cancel,
										a message will appear saying that there is no saved parking spot to cancel (Relating to notes on part B)
- The app can recognize the user's location (with a flag marker), and will recommend him parking spots near his place).
- The application will use the sign up details of the user and will display the details on his profile page (unique for each user)
- The application will display the history of the last parking spots that were taken by the user (On his profile - Parking History)
- The app has a homepage that describes and give a general description about the application
- The user can sign up / sign in in to the application with his own credentials.
- The credentials will be automatically saved in the DB.
- The user can send a message through the contact us page.

Flow:

- The user enters the home page
- The user signs up
- The user logs in
- The user can view his profile
- The user can view the map and the current available parking lots
- The user can click a specific parking lot to see its details
- The user can decide wheter he like to choose a specific parking spot at the parking lot that he chose
- The user can click save parking spot
- The user can cancel the saved parking spot
- The app will automatically recommend him parking lots nearby
- The users can send a message if he encounters a problem

Getting Started

Clone the repository to your local machine.
Run npm install to install all the required modules.
Run nodemon app.js or node app.js to start the server.
Open http://localhost:3000 in your browser to access the application.

Routes

The following routes are available in the project:

Pages

/ and /home - renders the homepage
/signup - renders the signup page
/signin - renders the signin page
/profile - renders the profile page
/map - renders the map page
/contact - renders the contact page

CRUD Operations

/signup - handles the signup form submission
/contact - handles the contact form submission
/signin - handles the signin form submission
/showUsers - show all users
/search - search user by full name
/user/:username - find user by name
/update - update user by name
/deleteUser - delete user by name

