
const sql = require('./db');
const path = require('path');
const csv = require('csvtojson');

// Users Table

const CreateTableUsers = (req, res) => {
    var Q0 = `CREATE TABLE IF NOT EXISTS Users (
        ID int primary key auto_increment,
        fullName VARCHAR(255) not null,
        username VARCHAR(255) not null,
        email VARCHAR (255) not null,
        pass varchar (255) not null,
        contact VARCHAR(255) not null
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

    sql.query(Q0, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({ message: "error in creating table" });
            return;
        }
        console.log('created table');
        res.send("users table created");
        return;
    })
}

const InsertDataUsers = (req, res) => {
    var Q2 = "INSERT INTO users SET ?";
    const csvFilePath = path.join(__dirname, "./content/users.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach(element => {
                var NewEntry = {
                    "ID": element.ID,
                    "fullName": element.fullName,
                    "username": element.username,
                    "email": element.email,
                    "pass": element.pass,
                    "contact": element.contact
                }
                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });

    res.send("data inserted");

};
const ShowTableUsers = (req, res) => {
    var Q3 = "SELECT * FROM users";
    sql.query(Q3, (err, mySQLres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })
};
const DropTableUsers = (req, res) => {
    var Q4 = "DROP TABLE users";
    sql.query(Q4, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.status(400).send({ message: "error in dropping table" + err });
            return;
        }
        console.log("table drpped");
        res.send("table dropped");
        return;
    })
}





// Parkinglot Table

const CreateTableParkinglot = (req, res) => {
    var Q9 = `CREATE TABLE IF NOT EXISTS parkingLot (
        ID int primary key auto_increment,
        Name varchar(255) not null,
        Location varchar(255) not null,
        Capacity int not null
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

    sql.query(Q9, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({ message: "error in creating table" });
            return;
        }
        console.log('created table');
        res.send("parkinglot table created");
        return;
    })

}

const InsertDataParkinglot = (req, res) => {
    var Q2 = "INSERT INTO parkinglot SET ?";
    const csvFilePath = path.join(__dirname, "./content/parkinglot.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach(element => {
                var NewEntry = {
                    "ID": element.ID,
                    "Name": element.Name,
                    "Location": element.Location,
                    "Capacity": element.Capacity,
                }
                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });

    res.send("data inserted");

};

const ShowTableParkinglot = (req, res) => {
    var Q3 = "SELECT * FROM parkinglot";
    sql.query(Q3, (err, mySQLres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })
};

const DropTableParkinglot = (req, res) => {
    var Q4 = "DROP TABLE parkinglot";
    sql.query(Q4, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.status(400).send({ message: "error in dropping table" + err });
            return;
        }
        console.log("table drpped");
        res.send("table dropped");
        return;
    })
}


// ParkingSpot Table

const CreateTableParkingSpot = (req, res) => {
    var Q8 = `CREATE TABLE IF NOT EXISTS parkingSpots (
        ID int primary key auto_increment,
        floor int not null,
        occupied tinyint not null
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

    sql.query(Q8, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({ message: "error in creating table" });
            return;
        }
        console.log('created table');
        res.send("parkingSpot table created");
        return;
    })

}

const InsertDataParkingspot = (req, res) => {
    var Q2 = "INSERT INTO parkingSpots SET ?";
    const csvFilePath = path.join(__dirname, "./content/parkingspot.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach(element => {
                var NewEntry = {
                    "ID": element.ID,
                    "floor": element.floor,
                    "occupied": element.occupied,
                }
                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });

    res.send("data inserted");

};

const ShowTableParkingspot = (req, res) => {
    var Q3 = "SELECT * FROM parkingSpots";
    sql.query(Q3, (err, mySQLres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })
};

const DropTableParkingspot = (req, res) => {
    var Q4 = "DROP TABLE parkingSpots";
    sql.query(Q4, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.status(400).send({ message: "error in dropping table" + err });
            return;
        }
        console.log("table drpped");
        res.send("table dropped");
        return;
    })
}


// Owners Table

const CreateTableOwners = (req, res) => {
    var Q7 = `CREATE TABLE IF NOT EXISTS owners (
            ID int primary key auto_increment,
            fullName varchar(255) not null,
            email varchar(255) not null,
            password varchar(255) not null,
            contactNumber varchar(255) not null
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;

    sql.query(Q7, (err, mySQLres) => {
        if (err) {
            console.log("error ", err);
            res.status(400).send({ message: "error in creating table" });
            return;
        }
        console.log('created table');
        res.send("owners table created");
        return;
    })
}
const InsertDataOwners = (req, res) => {
    var Q2 = "INSERT INTO owners SET ?";
    const csvFilePath = path.join(__dirname, "./content/owners.csv");
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj) => {
            jsonObj.forEach(element => {
                var NewEntry = {
                    "ID": element.ID,
                    "fullName": element.fullName,
                    "email": element.email,
                    "password": element.password,
                    "contactNumber": element.contactNumber
                }
                sql.query(Q2, NewEntry, (err, mysqlres) => {
                    if (err) {
                        console.log("error in inserting data", err);
                    }
                    console.log("created row sucssefuly ");
                });
            });
        });

    res.send("data inserted");

};

const ShowTableOwners = (req, res) => {
    var Q3 = "SELECT * FROM owners";
    sql.query(Q3, (err, mySQLres) => {
        if (err) {
            console.log("error in showing table ", err);
            res.send("error in showing table ");
            return;
        }
        console.log("showing table");
        res.send(mySQLres);
        return;
    })
};

const DropTableOwners = (req, res) => {
    var Q4 = "DROP TABLE Owners";
    sql.query(Q4, (err, mySQLres) => {
        if (err) {
            console.log("error in droping table ", err);
            res.status(400).send({ message: "error in dropping table" + err });
            return;
        }
        console.log("table drpped");
        res.send("table dropped");
        return;
    })
};

const dropAllTables = (req, res) => {
    sql.beginTransaction(err => {
        if (err) throw err;

        sql.query("DELETE FROM Users", (err, result) => {
            if (err) {
                return sql.rollback(() => {
                    throw err;
                });
            }

            sql.query("DELETE FROM parkingLot", (err, result) => {
                if (err) {
                    return sql.rollback(() => {
                        throw err;
                    });
                }

                sql.query("DELETE FROM parkingSpots", (err, result) => {
                    if (err) {
                        return sql.rollback(() => {
                            throw err;
                        });
                    }

                    sql.query("DELETE FROM owners", (err, result) => {
                        if (err) {
                            return sql.rollback(() => {
                                throw err;
                            });
                        }

                        sql.commit(err => {
                            if (err) {
                                return sql.rollback(() => {
                                    throw err;
                                });
                            }
                            res.send("All tables have been deleted");
                        });
                    });
                });
            });
        });
    });
};



module.exports = {
    CreateTableUsers: CreateTableUsers,
    InsertDataUsers: InsertDataUsers,
    ShowTableUsers: ShowTableUsers,
    DropTableUsers: DropTableUsers,

    CreateTableParkinglot: CreateTableParkinglot,
    InsertDataParkinglot: InsertDataParkinglot,
    ShowTableParkinglot: ShowTableParkinglot,
    DropTableParkinglot: DropTableParkinglot,

    CreateTableParkingSpot: CreateTableParkingSpot,
    InsertDataParkingspot: InsertDataParkingspot,
    ShowTableParkingspot: ShowTableParkingspot,
    DropTableParkingspot: DropTableParkingspot,

    CreateTableOwners: CreateTableOwners,
    InsertDataOwners: InsertDataOwners,
    ShowTableOwners: ShowTableOwners,
    DropTableOwners: DropTableOwners,

    dropAllTables: dropAllTables
};


