//jshint esversion: 6

const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
 
const app = express();
// app.use(bodyParser.urlencoded({ extended: true}));
 
const port = 3000;
 
// app.use(express.static('public'));
app.use("/", express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get('/', function(req, res) {
    res.sendFile(__dirname + '/signup.html');
});

app.post("/", function(req, res)
{
    const firstname = req.body.fname;
    const lastname = req.body.lname;
    const email = req.body.email;
    const https = require("https");
    var data = {
        members:
        [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstname,
                    LNAME: lastname
                }

            }
        ]
    };
    const url = "https://us21.api.mailchimp.com/3.0/lists/a80e8cf972";
    const options = {
        method: "POST",
        auth: "dana:4e699e667d7aa4fb8370c1edf30f25dda-us21"
    };

    var jsonData = JSON.stringify(data);
    const request = https.request(url, options, function(response)
    {
        if (response.statusCode === 200)
        {
            // const filePath = path.join(__dirname, 'success.html');
            // res.sendFile(filePath); 
            console.log("GOOD");
        }
        else
        {
            const filePath = path.join(__dirname, 'failure.html');
            res.sendFile(filePath); 
        }
        response.on("data", function(data)
        {
            console.log(JSON.parse(data));
        });
        

        
    });
    

    //request.write(jsonData);
    request.end();
});


app.post("/failure", function(req, res)
{
    res.redirect("/");
});
 
app.listen(port, function() {
    console.log(`Example app listening at ` + port);
});

//API key
//4e699e667d7aa4fb830c1edf30f25dda-us21

//List ID
//a80e8cf972