const https = require('https');
const express = require('express');
const app = express();
const PORT = 3001;

app.use((_req,res) => {
    res.statusCode = 200;
    //Allows CORS
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    //Get all 30 cards
    https.get(`https://frontend-interview.spotahome.com/api/public/listings/search/markers/madrid`,(response)=> {
        var body = '';
        var json;
        response.on('data', (chunk) => {
            // console.log('data' + body);
            body += chunk;      
        });
        response.on('end',()=>{
            // console.log(body);
            json = JSON.parse(body);
            //Get the ids of the first 30 properties
            let ids = '';
            for (let index = 0; index < 30; index++) {
                ids += 'ids[]='+json.data[index].id;
                if(index < 29) {
                    ids+= '&';
                }
            }
            //Get information for each of the 30 cards
            let homeCardsUrl = encodeURI('https://frontend-interview.spotahome.com/api/public/listings/search/homecards_ids?'+ids);
            console.log(homeCardsUrl);
            https.get(homeCardsUrl,(response2) => {
                var body2 = '';
                var json2;
                response2.on('data', (chunk) => {
                    // console.log('data' + body);
                    body2 += chunk;      
                });
                response2.on('end',()=>{
                    json2 = JSON.parse(body2);
                    res.send(json2.data);
                });
            });
        });
    });
});


app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on port "+PORT);
    console.log("Go to http://localhost:"+PORT);
});