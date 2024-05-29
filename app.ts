import express from 'express';

const app = express();
app.use(express.json());

// Connection to app server
app.listen(3000, () => {
    console.log('Server is listening at port 3000;');
})


// Import of DB connection
import dbConnection from './common/db-connection';

// Performing connection to database
dbConnection.initialize()
    .then(() => { console.log('Connected to DB!') })
    .catch((err: any) => {
        console.log(err);
    })

// Import of routes
import userRouter from './routing/user-routing';

// Use of routes
app.use(userRouter);





