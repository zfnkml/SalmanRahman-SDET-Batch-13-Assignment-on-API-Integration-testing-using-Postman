const newman = require('newman');
require('dotenv').config();
 
newman.run({
    collection:`https://api.postman.com/collections/17817250-bfbf03d0-3543-4d19-93c6-1791977b7bc8?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    // environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html',                     }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});