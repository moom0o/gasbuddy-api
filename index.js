var unirest = require('unirest');
const express = require('express')
const app = express()
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/gas', (req2, res2) => {
    unirest('POST', 'https://www.gasbuddy.com/gaspricemap/county')
        .headers({
            'Content-Type': 'application/json',
        })
        .send(JSON.stringify({"lat":Number(req2.body["lat"]),"lng":Number(req2.body["lng"]),"usa":true}))
        .end(function (res) {
            if (res.error) throw new Error(res.error);
            console.log(res.raw_body)
            res2.send(JSON.parse(res.raw_body))
        });
})

app.listen(1212)
