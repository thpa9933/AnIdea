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
        const newService = await pool.query(
            "INSERT INTO service (username, servicename, description, scope, audiance, email) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
            [
                req.body.service.serviceUsername,
                req.body.service.serviceName,
                req.body.service.serviceDescription,
                req.body.service.serviceScope,
                req.body.service.serviceAudiance,
                req.body.service.serviceEmail
            ]
        );

        res.json(newService.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
}) 

app.get("/services", async(req, res) => {
    try {
        const services = await pool.query("SELECT * FROM service");
        res.json(services.rows);
    } catch (error) {
        console.error(error.message);
    }
})


app.listen(5000, () => {
    console.log("Server has started on port 5000");
});