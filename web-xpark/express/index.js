// here are all the modules Im going to use
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const CSVToJSON = require('csvtojson');
const sql = require('./db/db');
const CRUD = require('./db/CRUD')
const CreateDB = require('./db/createDB')
const cookieParser = require('cookie-parser')
const fs = require('fs');
// const stringify = require('csv-strigify').stringify;
const { parse } = require('csv-parse');
const port = 3000;

app.use(express.static('static'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// here are all the routes.

app.get('/', (req, res) => {
    res.render('homepage');
})

app.get('/home', (req, res) => {
    res.render('homepage');
})

app.get('/signup', (req, res) => {
    res.render('signup');
})

app.get('/signin', (req, res) => {
    res.render('signin');
})

app.all('/profile', (req, res) => {
    let FullNameCookie = req.cookies.Signed_User;
    let userNameCookie = req.cookies.Signed_username;
    let EmailCookie = req.cookies.Signed_user_email;

    console.log("FullNameCookie:", FullNameCookie);
    console.log("userNameCookie:", userNameCookie);
    console.log("EmailCookie:", EmailCookie);

    if (!FullNameCookie || !userNameCookie || !EmailCookie) {
        res.status(401).send('Unauthorized, Please try again');
        return;
    }

    let fileContent = fs.readFileSync('./views/profile.html', 'utf8');
    fileContent = fileContent.replace('{{FullName}}', FullNameCookie);
    fileContent = fileContent.replace('{{UserName}}', userNameCookie);
    fileContent = fileContent.replace('{{Email}}', EmailCookie);

    res.send(fileContent);
});

app.get('/map', (req, res) => {
    res.render('map');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

// signup route

app.post('/signup', (req, res) => {
    // Call the signupDB function from the CRUD module to handle the request
    CRUD.signupDB(req, res);
});

app.post('/contact', (req, res) => {
    // Call the contact function from the CRUD module to handle the request
    CRUD.contactDB(req, res);
});

//signin route

app.post('/signin', (req, res) => {
    const email = req.query.email // Call the signupDB function from the CRUD module to handle the request
    CRUD.signinDB(req, res, email);
});


//show all users
app.get('/showUsers', CRUD.showAll);

// search user by full name
app.get('/search', (req, res) => {
    res.render('findUser');
})

app.get("/findUser", CRUD.FindUser);

app.get('/user/:username', (req, res) => {
    // Call the signupDB function from the CRUD module to handle the request
    CRUD.getData(req, res);
});

app.get('/update', (req, res) => {
    res.render('UpdateUser');
})

// update customer by name
app.post('/update', CRUD.UpdateUser);


app.get('/deleteUser', (req, res) => {
    res.render('deleteUser');
})

app.post('/delete', CRUD.deleteUser);


//  Create Tables

app.get('/CreateTableUsers', CreateDB.CreateTableUsers)
app.get('/CreateTableOwner', CreateDB.CreateTableOwners)
app.get('/CreateTableParkinglot', CreateDB.CreateTableParkinglot)
app.get('/CreateTableParkingSpot', CreateDB.CreateTableParkingSpot)

// Insert Data Into Tables

app.get("/InsertDataUsers", CreateDB.InsertDataUsers);
app.get("/InsertDataOwners", CreateDB.InsertDataOwners);
app.get("/InsertDataParkinglot", CreateDB.InsertDataParkinglot);
app.get("/InsertDataParkingspot", CreateDB.InsertDataParkingspot);

// Show Tables

app.get('/ShowTableUsers', CreateDB.ShowTableUsers);
app.get('/ShowTableOwners', CreateDB.ShowTableOwners);
app.get('/ShowTableParkinglot', CreateDB.ShowTableParkinglot);
app.get('/ShowTableParkingspot', CreateDB.ShowTableParkingspot);


// Drop one table at a time
app.get('/DropTableUsers', CreateDB.DropTableUsers);
app.get('/DropTableOwners', CreateDB.DropTableOwners);
app.get('/DropTableParkinglot', CreateDB.DropTableParkinglot);
app.get('/DropTableParkingspot', CreateDB.DropTableParkingspot);


// Drop all tables together

app.get('/deleteAll', CreateDB.dropAllTables)



// listen
app.listen(port, () => {
    console.log("server is running on port " + port);
});

