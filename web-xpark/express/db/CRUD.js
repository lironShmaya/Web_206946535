const sql = require('./db');
const path = require('path');
const CSVToJSON = require('csvtojson');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');

const signupDB = (req, res) => {
  // validate body exist

  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" })
    return;
  }

  // pull data from body to json

  const newUser = {
    "fullname": req.body.fullName,
    "username": req.body.username,
    "contact": req.body.contact,
    "email": req.body.email,
    "pass": req.body.pass
  }

  //insert data into cookie
  res.cookie('Signed_User', req.body.fullName);
  res.cookie('Signed_username', req.body.username);
  res.cookie('Signed_user_email', req.body.email);

  //run query

  const Q1 = "INSERT INTO users SET ?";
  sql.query(Q1, newUser, (err, mysqlres) => {
    if (err) {
      console.log("error:", err);
      res.status(400).send({ message: "Error in Signup" + err });
      return;
    }
    console.log("new user created: ", { id: mysqlres.insertid, ...newUser });
    let fullnameCookie = req.cookies.Signed_user;
    let usernameCookie = req.cookies.Signed_username;
    let emailCookie = req.cookies.Signed_user_email;
    console.log(fullnameCookie);
    res.redirect(`/profile`);
    return;
  })
};

const showAll = (req, res) => {
  const Q2 = "SELECT * FROM users";
  sql.query(Q2, (err, mysqlres) => {
    if (err) {
      console.log("error:", err);
      res.status(400).send({ message: "Error in selecting all users" + err });
      return;
    }
    console.log("Success in selecting all users");
    res.send(mysqlres);
    return;
  })
}

const FindUser = (req, res) => {
  // check if body is empty
  if (!req.body) {
    res.status(400).send({ message: "content can not be empty" });
    return;
  }
  //if body not empty - create new User
  const searchTerm = req.query.search;
  console.log('Searching for: ', searchTerm);

  const Q5 = `SELECT * FROM users WHERE fullname LIKE '%${searchTerm}%'`;
  sql.query(Q5, (err, results) => {
    if (err) {
      console.log('Error in search query: ', err);
      res.status(500).send({ message: 'Error searching for user' });
      return;
    }
    console.log('Results: ', results);
    res.send({ message: results });
  });
}

const signinDB = (req, res) => {
  // Validate body exists
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  // Pull data from body

  const existingUser = {
    "email": req.body.email,
    "pass": req.body.pass
  }

  // Validate login credentials
  const Q4 = "SELECT * FROM users WHERE email = ? AND pass = ?";
  sql.query(Q4, [existingUser.email, existingUser.pass], (err, mysqlres) => {
    if (err) {
      console.log("error:", err);
      res.status(400).send({ message: "Error validating login credentials" + err });
      return;
    }
    if (mysqlres.length > 0) {
      // Login credentials are valid
      console.log("User logged in: ", { id: mysqlres[0].id, email: mysqlres[0].email });

      // Add full name, username, and email data to profile page
      res.cookie('Signed_User', mysqlres[0].fullName);
      res.cookie('Signed_username', mysqlres[0].username);
      res.cookie('Signed_user_email', mysqlres[0].email);

      let fullnameCookie = req.cookies.Signed_user;
      let usernameCookie = req.cookies.Signed_username;
      let emailCookie = req.cookies.Signed_user_email;
      console.log(fullnameCookie);
      res.redirect(`/profile`);

    } else {
      // Login credentials are invalid
      res.status(400).send({ message: "Invalid login credentials" });
      return;
    }
  });
}
const getData = (req, res, email) => {

  // Validate body exists
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }

  // Pull data from body
  const existingUser = {
    "fullname": req.body.fullName,
    "username": req.body.username,
    "contact": req.body.contact,
  }

  // Validate login credentials
  const Q5 = 'SELECT * FROM users WHERE username = ?';
  sql.query(Q5, [req.params.username], (err, results) => {

    if (err) {
      res.status(400).send({ message: 'Error fetching user data' });
      return;
    }
    if (results.length === 0) {
      res.status(404).send({ message: 'No user found with that username' });
      return;
    }

    res.send({ user: results[0] });
  });
}

const contactDB = (req, res) => {
  // validate body exist
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" })
    return;
  }

  // pull data from body to json
  const newUser = {
    "firstName": req.body.fname,
    "lastName": req.body.lname,
    "email": req.body.mail,
    "country": req.body.country,
    "subject": req.body.subject
  }

  //run query
  const Q10 = "INSERT INTO contacts SET ?";
  sql.query(Q10, newUser, (err, mysqlres) => {
    if (err) {
      console.log("error:", err);
      res.status(400).send({ message: "Error in Signup" + err });
      return;
    }
    console.log("new subject recieved: ", { id: mysqlres.insertid, ...newUser });
    res.send("new subject recieved");
    return;
  })
};

const UpdateUser = (req, res) => {
  // Check if body is empty
  console.log(req.body);
  const updateData = {
    "email": req.body.email,
    "currentPassword": req.body.currentPassword,
    "newPassword": req.body.newPassword
  };
  console.log(updateData);

  // Check if new password is not null
  if (!updateData.newPassword) {
    res.status(400).send({ message: 'New password cannot be null' });
    return;
  }

  // Check if current password matches the password in the database
  const Q6 = 'SELECT pass FROM Users WHERE email = ?';
  sql.query(Q6, [updateData.email], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching user data' });
      return;
    }
    console.log(results);
    if (results.length === 0) {
      res.status(404).send({ message: 'User not found' });
      return;
    }
    if (updateData.currentPassword !== results[0].pass) {
      res.status(400).send({ message: 'Incorrect current password' });
      return;
    }

    // Update the password in the database
    const Q7 = 'UPDATE users SET pass = ? WHERE email = ?';
    sql.query(Q7, [updateData.newPassword, updateData.email], (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).send({ message: 'Error updating password' });
        return;
      }
      console.log(results);
      res.send({ message: 'Password updated successfully' });
    });
  });
};


const deleteUser = (req, res) => {
  // check if body is empty
  console.log(req.body);
  const searchData = req.body.search;
  console.log(searchData);

  // Check if user with the given ID exists in the database
  const Q7 = 'SELECT * FROM users WHERE id = ?';
  sql.query(Q7, [searchData], (err, results) => {
    if (err) {
      res.status(500).send({ message: 'Error checking for user' });
      return;
    }
    if (!results.length) {
      res.status(400).send({ message: 'User not found' });
      return;
    }
    // If the user exists, delete it
    const Q8 = 'DELETE FROM users WHERE id = ?';
    sql.query(Q8, [searchData], (err, results) => {
      if (err) {
        res.status(500).send({ message: 'Error deleting user' });
        return;
      }
      res.send({ message: `User deleted successfully with ID: ${searchData}` });
    });
  });
}

module.exports = {
  signupDB: signupDB,
  showAll: showAll,
  signinDB: signinDB,
  getData: getData,
  contactDB: contactDB,
  UpdateUser: UpdateUser,
  deleteUser: deleteUser,
  FindUser: FindUser,
};
