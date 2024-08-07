const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const connectDB = require("./config/dbConnection");
const app = express();
const dotenv = require("dotenv").config();
const cors = require('cors');

connectDB();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'https://pratik2401.github.io/Portfolio/', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
},
{ origin: 'https://pratik2401.github.io/Portfolio/admin', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
