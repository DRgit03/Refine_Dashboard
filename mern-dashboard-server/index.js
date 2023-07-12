import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();
//First create index,js and do akk the setup for database
//second create mongodb atlas database get the url and create mongodb folder and inside that create a models folder and create users and properties schemas
//Create Route folder users and properties , you need to import all the controllers to routes for this you need to  create controllers
//What is controller? Ans:https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/routes
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
    res.send({ message: "Hello World!" });
});

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () =>
            console.log("Server started on port http://localhost:8080"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
