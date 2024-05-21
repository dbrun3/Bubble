import express from "express";
import bodyParser from "body-parser";


const app = express();

const bubbles = [ //41.80178932095493, -87.89100356572762
    {msg_id: 1, msg: "Hello from the quad", loc: {lat:41.87213885234483, lng: -87.64918270844204}},
    {msg_id: 2, msg: "Chilling at the pier today", loc: {lat:41.89151172350241, lng: -87.60588066051359}},
    {msg_id: 3, msg: "Go lions!!! Yayy :D", loc: {lat:41.80178932095493, lng: -87.89100356572762}},
];

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST");
    next();
})

app.get("",(req, res, next) => {
    res.json(bubbles);
})

app.post("/post", (req, res) => {
    bubbles.push({msg_id: req.body.msg_id, msg: req.body.msg, loc: req.body.loc})
    console.log("Message # recieved " + req.body)
    res.status(200).json({message:"Successfully posted"})
})


export default app;