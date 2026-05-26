const figlet = require('figlet');
figlet('Shivaniii!', function(err, data) {
    if (err) {
        console.error('Error:', err);
        return;
    }
    console.log(data);
});