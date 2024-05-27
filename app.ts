import express from 'express';

// Import of DB connection
import dbConnection from './common/db-connection';

// Performing connection to database
dbConnection.initialize()
    .then(() => { console.log('Connected to DB!') })
    .catch((err: any) => {
        console.log(err);
    })

const app = express();
app.use(express.json());


app.listen(3000, () => {
    console.log('Server is listening at port 3000;');
}) 