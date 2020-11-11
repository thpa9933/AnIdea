const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());

//get data from client side using request.body
//gives us access to and allows to parse request.body
app.use(express.json());

//ROUTES//

// create a service
app.post("/services", async(req, res) => {
    try {
        // const { username } = req.body.username;
        // const { servicename } = req.body.servicename;
        // console.log(req.body.servicename);

        const newService = await pool.query(
            "INSERT INTO service (username, servicename, description, scope, audiance, email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                req.body.username,
                req.body.servicename,
                req.body.description,
                req.body.scope,
                req.body.audiance,
                req.body.email
            ]
        );

        res.json(newService.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
}) 


// update a service

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});