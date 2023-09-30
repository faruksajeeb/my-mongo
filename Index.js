// Application Run
const app = require('./App')
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

// Start your Express server
const port = process.env.RUNNING_PORT || 3000;

mongoose.connect(process.env.DATABASE).then(()=>{
    console.log('Database connected!');
    app.listen(port,function(){
        console.log(`Server running on port ${port}`);
    });
}).catch((error)=> console.log(error));
