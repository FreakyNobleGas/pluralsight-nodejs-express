// Set up Express
const express = require('express')
const PORT = process.env.PORT || 3000;
const app = express();

// Setup debugging tool
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan')

// Setup morgan to log web traffic
app.use(morgan('tiny'))

// Serve static HTML files in the public function. This function call explicitly looks for
// a file called 'index.html'.
const path = require('path'); 
app.use(express.static(path.join(__dirname, '/public/')));

// Everything works through app in express
// Setup routing
app.get('/', (req, res)=>{
    res.send('Hello from my app');
})

// Bind app to port
app.listen(PORT, ()=> {
    // Template String. Debug is used in place of console.log, which only runs in debug mode!
    debug(`listening to port ${chalk.green(PORT)}`);
})