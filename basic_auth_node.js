var request = require('request'),
    username = "john",
    password = "1234",
    url = "http://www.example.com",
    auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

request(
    {
        url : url,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        // Do more stuff with 'body' here
    }
);